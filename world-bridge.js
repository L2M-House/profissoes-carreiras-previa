// Product adapter: contracts and canonical records stay outside the renderer.
// The lab form itself is shown beside the map; validation, drafts and saveAnswer stay in experiment.js.
const PLACES=['Clareira','Moinho','Ponte','Placa','Bifurcação','Acampamento','Mirante'];
const STOPS=Journey.steps.map((s,i)=>({...s,place:PLACES[i],mark:MARCAS.find(m=>m.id===s.stage)}));
const LOCK='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="7" width="9" height="7" rx="1.5" fill="currentColor"/></svg>';
const STATE_TEXT={bloqueada:'Abre depois da parada anterior',foco:'Você está aqui',rascunho:'Rascunho guardado nesta aba',adiado:'Deixada para investigar depois',guardado:'Registro guardado',disponível:'Disponível'};
const LAB_HOME=[$('experiment-form').parentElement,$('experiment-form').nextSibling];
let worldView,worldLoading=false,worldFailed=false,worldCelebrationPending=null,worldAutoStart=false,worldEntering=false;
// Lote 5.7: cada parada é uma fase de passos curtos, um por tela. O passo 1 é o obrigatório do contrato (Journey.validStep);
// os outros são opcionais, com "Pular". Campos, perguntas e gravação são os de experiment.js: o passo só mostra uma parte
// da pergunta, que continua inteira no formulário. Os nomes são dos campos; cada um aponta para o bloco que o contém.
const PARTS=[[['activities'],['activityNote','activityExperience']],[['values'],['firstValue','valueNote']],[['aName','bName'],['aAttract','aRoutine','aRethink'],['bAttract','bRoutine','bRethink']],
 [['claim','evidence'],['checked','change']],[['path','topic','question'],['searchType','sourcePlan']],[['action','actionPlan'],['when','obstacle','smaller']],[[]]];
const PART_WHY={'0.1':'Opcional. Um exemplo real ajuda você a lembrar dessa curiosidade.','1.1':'Opcional. Ajuda a ver essa prioridade num dia comum.',
 '3.1':'Opcional. Mostra o que ainda vale investigar.','4.1':'Opcional. Ajuda a escolher o próximo passo.','5.1':'Opcional. Uma data e um plano menor ajudam a cumprir o passo.'};
const SIDE=matchMedia('(max-height:640px) and (min-aspect-ratio:4/3)');// o mesmo corte do CSS: mapa à esquerda, pergunta à direita
let part=0,passing=null,enterLast=false,passage=null;
const worldOwnsForm=()=>$('world-question').contains($('experiment-form'));
const shownState=s=>s.available?s.state:'bloqueada';
function worldDomain(){
 const snapshot=lab.owner===owner()&&lab.programa===programa?lab:journeys()[journeyKey('experiment')]?.snapshot||{owner:owner(),programa,step:0,data:{},started:false};
 const recorded=!snapshot.started&&answers().some(a=>a.quem===owner()&&a.programa===programa&&a.experimento?.versao===1);
 return {snapshot,recorded,steps:Journey.project(snapshot,recorded)};
}
function celebrateWorldIfPending(){
 if(current!=='trilha'||programa!=='filho')return false;
 const pending=worldCelebrationPending;worldCelebrationPending=null;
 if(pending?.owner===owner()&&pending.programa===programa&&answers().some(a=>a.id===pending.recordId&&a.quem===owner()&&a.programa===programa&&a.experimento)){celebrateMap();return true;}
 return false;
}

// Lote 5.4: Rumo, Bino, Pipa e Téo em pé no bosque. Uma camada SVG sobre o canvas, presa aos pontos que o renderer
// projeta (zero draw calls), reposicionada só quando a câmera ou Rumo se movem. Respostas curtas, nada em laço;
// movimento reduzido e pausa trocam só pose, cor, opacidade e ícone.
const MAP_CAST=['bino','pipa','teo','rumo'];
const GUIDE_GESTURE=['acolher','apontar','andar','apontar','apontar','andar','acolher'];// do banco de cada guia, por parada
// Tempos da tabela do plano (ms). A cascata acende uma parada a cada 55 ms e termina em 6×55+170 = 500.
const FX={toque:100,someToque:150,antes:90,pouso:320,poeira:300,olhar:180,volta:700,destrava:400,rascunho:200,pensar:300,passo:55,acende:170,festa:900,fade:150,
 abre:300,anda:240,fecha:300,passagem:1700};// Lote 5.7: o mapa abre em 300 ms, o Rumo sai aos 240 ms, tudo volta até 1,7 s
const FIGURE_UNITS=1.55;// altura do desenho (viewBox de 260) em unidades do mundo: Rumo com 56 a 72 px no foco do celular
const LOCK_OPEN='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M11 7V4a3 3 0 0 0-6 0v1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="7" width="9" height="7" rx="1.5" fill="currentColor"/></svg>';
let mapLayer=null,mapAnchors=null,mapQuiet=false,mapWasOff=false,thoughtStep=-1;
const mapRuns=new Map(),mapTimers=new Map();
const figureOf=name=>mapLayer?.querySelector(`[data-figure=${name}] .companion`);
function buildMapLayer(){
 mapLayer=document.createElement('div');mapLayer.className='world-layer';mapLayer.id='world-layer';mapLayer.setAttribute('aria-hidden','true');mapLayer.dataset.celebrations='0';
 mapLayer.innerHTML=MAP_CAST.map(n=>`<div class="map-figure" data-figure="${n}"><div class="map-body">${companion(n)}</div></div>`).join('');
 $('world-viewport').append(mapLayer);
}
const fxScale=a=>Math.min(130,Math.max(46,a.unit*FIGURE_UNITS))/130;
// Anéis seguem a escala do mundo; confete e poeira têm piso, para continuarem visíveis com o bosque inteiro na tela.
function placeFx(e){const a=mapAnchors,p=e.dataset.at==='rumo'?a.rumo:a.stops[e.dataset.at];e.style.transform=`translate(${p.x}px,${p.y}px) scale(${Math.max(fxScale(a),Number(e.dataset.min||0))})`;}
// Base do desenho: caixa de 120×130 px com os pés em (60, 119); a escala segue o zoom, com piso e teto para leitura.
function layoutMap(a){
 mapAnchors=a;if(!mapLayer)return;const k=fxScale(a);
 for(const f of mapLayer.querySelectorAll('.map-figure')){const p=f.dataset.figure==='rumo'?a.rumo:a.guides[f.dataset.figure];f.style.transform=`translate(${p.x-60*k}px,${p.y-119*k}px) scale(${k})`;f.style.zIndex=Math.round((1-p.z)*1e4);}// o mais perto da câmera fica por cima
 // Lote 5.7: na faixa curta o quadro fica no Rumo e na parada; guia que não cabe inteiro na faixa não aparece, em vez de cortado.
 const short=worldView?.state().short;for(const f of mapLayer.querySelectorAll('.map-figure:not([data-figure=rumo])')){const p=a.guides[f.dataset.figure];f.style.visibility=short&&(p.x-60*k<0||p.x+60*k>a.width||p.y-119*k<0||p.y+11*k>a.height)?'hidden':'';}
 mapLayer.querySelectorAll('.map-fx').forEach(placeFx);
}
function track(key,runs){mapRuns.set(key,[...(mapRuns.get(key)||[]).filter(a=>a.playState==='running'),...runs]);return runs;}
// Gesto cancelado no meio devolve o personagem ao repouso: nenhum estado fica preso numa pose.
function stopRuns(key){const runs=mapRuns.get(key)||[],fig=figureOf(key);if(fig&&runs.some(a=>a.playState==='running'))fig.dataset.state='welcome';runs.forEach(a=>a.cancel());mapRuns.delete(key);}
// Um temporizador por chave: uma pose nova não é encerrada pelo aviso de uma pose anterior.
let timerSeq=0;function later(fn,ms,key='t'+timerSeq++){clearTimeout(mapTimers.get(key));mapTimers.set(key,setTimeout(()=>{mapTimers.delete(key);fn();},ms));}
// Pose sem movimento (movimento reduzido e pausa): estado de expressão + a pose-chave da prancha do 5.3.
function pose(fig,key){
 const set=POSES[fig.dataset.character],p=set[key]||set.repouso;fig.dataset.state=p.state;
 fig.querySelectorAll('.mov').forEach(m=>{m.style.transform='';m.style.opacity='';});
 // Marcas de movimento (velocidade, poeira) não aparecem numa pose parada.
 for(const [sel,v] of Object.entries(p.parts)){if(sel==='.marca-velocidade'||sel==='.marca-poeira')continue;const m=fig.querySelector(sel+'>.mov');if(m){m.style.transform=T(v);if(sel.startsWith('.marca'))m.style.opacity=1;}}
}
function stopMapMotion(){
 finishPassage();for(const key of [...mapRuns.keys()])stopRuns(key);mapTimers.forEach(clearTimeout);mapTimers.clear();
 mapLayer?.querySelectorAll('.map-fx').forEach(e=>e.remove());mapLayer?.querySelectorAll('.companion').forEach(f=>pose(f,'repouso'));
}
// Efeito preso a uma parada (índice) ou ao Rumo; sai do DOM quando acaba ou é cancelado.
function fx(at,inner,animate,min=0){
 if(!mapLayer||!mapAnchors)return;const e=document.createElement('div');e.className='map-fx';e.dataset.at=at;e.dataset.min=min;e.innerHTML=`<svg viewBox="-60 -60 120 120" aria-hidden="true">${inner}</svg>`;mapLayer.append(e);placeFx(e);
 const runs=motionOff()?[]:track('fx',animate(e.firstChild));
 if(runs.length)Promise.allSettled(runs.map(a=>a.finished)).then(()=>e.remove());else later(()=>e.remove(),FX.toque+FX.someToque);
}
const ringSVG=color=>`<ellipse rx="50" ry="35" fill="none" stroke="#fffdf9" stroke-width="12"/><ellipse rx="50" ry="35" fill="none" stroke="${color}" stroke-width="7"/>`;
// Toque numa parada: anel no ponto com um pulso de 1,08 em 100 ms, depois some. Sem movimento: o anel aparece parado.
function tapRing(i){fx(i,ringSVG('#ffc83d'),s=>[s.animate([{transform:'scale(1)'},{transform:'scale(1.08)',offset:.5},{transform:'scale(1)'}],{duration:FX.toque,easing:E.chega}),
 s.animate([{opacity:1},{opacity:0}],{duration:FX.someToque,delay:FX.toque,fill:'forwards'})]);}
// Anel que acende com um único "pop" (parada destravada e cascata do exercício guardado).
const popRing=(i,duration,delay=0)=>fx(i,ringSVG('#ffc83d'),s=>[s.animate([{transform:'scale(.6)',opacity:0},{transform:'scale(1.08)',opacity:1,offset:.45,easing:E.mola},{transform:'scale(1)',opacity:1,offset:.7},{transform:'scale(1)',opacity:0}],{duration,delay,easing:E.chega,fill:'backwards'})]);
const LOW=['#ffc83d','#f2534a','#2ebe6a','#ffb4a8','#1c2744'];
function dust(){fx('rumo',[-1,0,1].map(j=>`<polygon points="-5,-4 0,-7 5,-4 5,2 0,5 -5,2" fill="${j?'#e7d8c4':'#fffdf9'}"/>`).join(''),s=>[...s.children].map((c,j)=>c.animate([{transform:'translate(0px,-4px) scale(.5)',opacity:.95},{transform:`translate(${(j-1)*24}px,${-8-(j%2)*6}px) scale(1)`,opacity:0}],{duration:FX.poeira,easing:E.efeito,fill:'forwards'})),.6);}
function confetti(){fx('rumo',LOW.concat(LOW).map((c,j)=>`<polygon points="${j%2?'-6,-5 6,-5 0,6':'-6,-4 6,-4 6,4 -6,4'}" fill="${c}" stroke="#fffdf9" stroke-width="1.5"/>`).join(''),s=>[...s.children].map((c,j)=>{const a=-Math.PI/2+(j-4.5)*.3,dx=Math.cos(a)*(55+(j%3)*12),dy=Math.sin(a)*(70+(j%4)*10);
 return c.animate([{transform:'translate(0px,-80px) rotate(0deg)',opacity:1},{transform:`translate(${dx}px,${-80+dy}px) rotate(${120+j*25}deg)`,opacity:1,offset:.4,easing:E.antes},{transform:`translate(${dx*1.3}px,${-30+dy*.2}px) rotate(${260+j*30}deg)`,opacity:0}],{duration:FX.festa,easing:E.padrao,fill:'forwards'});}),.8);}
function faceTo(fig,x,from){fig.querySelector('svg').dataset.facing=x<from?'left':'right';}
// Só o guia da terra da parada reage: olha para Rumo (180 ms) e faz um gesto do seu banco; depois volta ao repouso parado.
function guideReact(i){
 const name=STEP_COMPANIONS[i],fig=figureOf(name),a=mapAnchors;if(!fig||!a)return;if(name!=='rumo')stopRuns(name);// o pouso do Rumo continua quando ele mesmo é o guia
 if(name!=='rumo')faceTo(fig,a.rumo.x,a.guides[name].x);
 if(motionOff()){pose(fig,GUIDE_GESTURE[i]);later(()=>pose(fig,'repouso'),FX.volta,name);return;}
 pose(fig,'repouso');fig.dataset.state='attentive';
 const run=track(name,animarGesto(fig,GUIDE_GESTURE[i],1));run.forEach(r=>r.effect.updateTiming({delay:FX.olhar}));
 Promise.allSettled(run.map(r=>r.finished)).then(r=>{if(r.every(x=>x.status==='fulfilled'))fig.dataset.state='welcome';});
}
// Cada animação do corpo começa da pose em que ele está, para não haver estalo entre agachar, correr e pousar (QA M2).
const bodyNow=body=>{const m=getComputedStyle(body).transform;return m==='none'?'scale(1)':m;};
function onRumoWalk(e){
 const rumo=figureOf('rumo');if(!rumo)return;const body=rumo.closest('.map-body'),from=bodyNow(body);
 // Trocar de destino no meio da corrida (antes = 0) não cancela aqui: a corrida nova parte da pose atual.
 if(e.type==='start'){if(e.antes)stopRuns('rumo');pose(rumo,'repouso');rumo.querySelector('svg').dataset.facing=e.dir<0?'left':'right';
  if(!motionOff()&&e.antes)track('rumo',[body.animate([{transform:from,easing:E.chega},{transform:'scale(1.08,.92)',offset:.6},{transform:'scale(1.08,.92)'}],{duration:e.antes,fill:'forwards'})]);}
 if(e.type==='run'&&!motionOff()){stopRuns('rumo');
  track('rumo',[body.animate([{transform:from},{transform:'scale(.95,1.06)',offset:.2},{transform:'scale(1)',offset:.45},{transform:'scale(1)'}],{duration:e.run})]);
  track('rumo',animarGesto(rumo,'andar',1)).forEach(r=>r.playbackRate=DURACAO.rumo.andar/e.run);}
 if(e.type!=='arrive')return;
 if(mapQuiet||!e.moved&&!e.walked)return;
 const passed=passage?.to===e.index?passage.from:null;
 $('world-live').textContent=(passed===null?'':`Fase ${passed+1} concluída. `)+`Rumo chegou à parada ${e.index+1}, ${STOPS[e.index].place}.`;
 stopRuns('rumo');pose(rumo,'repouso');if(e.stopped)return;
 if(e.walked&&!motionOff()){track('rumo',[body.animate([{transform:from},{transform:'scale(1.08,.92)',offset:.25},{transform:'scale(.97,1.03)',offset:.55},{transform:'scale(1.01,.99)',offset:.8},{transform:'scale(1)'}],{duration:FX.pouso,easing:E.meio})]);dust();}
 else if(motionOff())track('rumo',[body.animate([{opacity:0},{opacity:1}],{duration:FX.fade})]);
 // Lote 5.7: na passagem de fase, a parada concluída acende e o guia da terra dela comemora, no lugar da reação de chegada.
 if(passed!==null&&e.walked&&!motionOff())celebratePhase(passed);
 else if(e.walked||motionOff())guideReact(e.index);
}
// Exercício guardado: câmera abre o bosque, as sete paradas acendem em cascata, os quatro comemoram juntos, poucos confetes.
function celebrateMap(){
 worldView.camera('center');mapLayer.dataset.celebrations=String(Number(mapLayer.dataset.celebrations)+1);stopMapMotion();
 const figs=MAP_CAST.map(figureOf);
 if(motionOff()){figs.forEach(f=>pose(f,'celebrar'));later(()=>figs.forEach(f=>pose(f,'repouso')),FX.festa,'festa');return;}
 // Espera a rota terminar de entrar: a cascata não acende durante o fade da página (QA B4).
 const entering=$('trilha').getAnimations().filter(a=>a.playState==='running');
 Promise.allSettled(entering.map(a=>a.finished)).then(()=>{if(motionOff()||!mapLayer.isConnected)return;
 for(let i=0;i<7;i++)popRing(i,FX.acende,i*FX.passo);
 MAP_CAST.forEach((n,j)=>{const f=figs[j];f.dataset.state='celebrate';const run=track(n,animarGesto(f,'celebrar',1));Promise.allSettled(run.map(r=>r.finished)).then(r=>{if(r.every(x=>x.status==='fulfilled'))f.dataset.state='welcome';});});
 confetti();});
}
// Mudanças de estado na fila: destravar abre o cadeado com um "pop"; rascunho faz o ✎ saltar uma vez.
// A troca do cadeado pelo número fica fora de mapTimers: a pausa não deixa o cadeado aberto.
function nodeEffects(b,i,prev,state){
 if(prev===undefined||worldEntering||motionOff())return;
 const glyph=b.firstChild;
 if(prev==='bloqueada'&&state!=='bloqueada'){const key=b.dataset.glyph;glyph.innerHTML=LOCK_OPEN;track('fx',[glyph.animate([{transform:'scale(1)'},{transform:'scale(1.3)',offset:.4,easing:E.mola},{transform:'scale(1)'}],{duration:FX.destrava,easing:E.chega})]);
  setTimeout(()=>{if(b.dataset.glyph===key&&b.firstChild===glyph)glyph.textContent=key;},FX.destrava);popRing(i,FX.destrava);}
 else if(state==='rascunho'&&prev!=='rascunho')track('fx',[glyph.animate([{transform:'translateY(0)'},{transform:'translateY(-6px)',offset:.45},{transform:'translateY(0)'}],{duration:FX.rascunho,easing:E.chega})]);
}
function think(){const fig=figureOf(STEP_COMPANIONS[lab.step]);if(!fig||fig.dataset.state!=='welcome'||mapRuns.get(fig.dataset.character)?.some(a=>a.playState==='running'))return;fig.dataset.state='thinking';later(()=>{if(fig.dataset.state==='thinking')fig.dataset.state='welcome';},FX.pensar,fig.dataset.character);}
function paintWorld(){
 const d=worldDomain(),done=d.recorded&&!lab.started,focus=done?6:lab.step,stop=STOPS[focus];
 // Lote 5.5: a linha cabe ao lado do botão de alternativa; o grau sai no celular e "Você está aqui" já está na fila.
 const focusState=shownState(d.steps[focus]);
 $('world-place-zone').innerHTML=`${stop.mark.id} · <span class="place-deg">${stop.mark.deg} · </span>${stop.place}`;
 // Lote 5.7: a barra de passos da fase fica no topo do painel, separada da fila das sete paradas.
 const n=PARTS[focus].length,k=Math.min(part,n-1);
 $('world-place-state').innerHTML=done?'Exercício guardado':`<span class="part-bar" aria-hidden="true">${PARTS[focus].map((_,j)=>`<i${j<=k?' data-on':''}></i>`).join('')}</span><span class="part-text">${n===1?'Passo único':`Passo ${k+1} de ${n}`}</span>`+(focusState==='foco'?'':`<span class="place-state"> · ${STATE_TEXT[focusState]}</span>`);
 $('world-question').hidden=done;$('world-done').hidden=!done;$('world-example').hidden=done;
 // Lote 5.7: com uma fase aberta o mapa fica curto e cresce na passagem; a faixa curta enquadra Rumo e parada (deitado, o
 // enquadramento do 5.6 já cabe). data-stop: no celular em pé, a linha do exemplo fictício fica na primeira parada.
 $('world-stage').toggleAttribute('data-phase',!done);$('world-stage').dataset.stop=focus;syncCompact();
 // Update the stop buttons in place: rebuilding them on a field's blur would swallow the click that caused it.
 const list=$('world-nodes');
 if(list.children.length!==STOPS.length)list.innerHTML=STOPS.map((s,i)=>`<li><button type="button" class="world-node land-${s.mark.land}" data-world-stop="${i}"></button></li>`).join('');
 STOPS.forEach((s,i)=>{const b=list.children[i].firstChild,state=shownState(d.steps[i]),glyph={guardado:'✓',rascunho:'✎',adiado:'↷',bloqueada:LOCK}[state]||String(i+1);
  const prev=b.dataset.state;b.dataset.state=state;b.toggleAttribute('aria-current',i===focus);if(i===focus)b.setAttribute('aria-current','step');
  b.setAttribute('aria-label',`${i+1}. ${s.name}, ${s.place}, ${s.mark.id}: ${STATE_TEXT[state]}`);b.title=`${s.mark.id} · ${s.name} · ${STATE_TEXT[state]}`;
  const key=state==='bloqueada'?'lock':glyph;if(b.dataset.glyph!==key){b.innerHTML=`<span class="node-glyph">${glyph}</span>`;b.dataset.glyph=key;}
  if(prev!==state)nodeEffects(b,i,prev,state);});
 worldView?.paintStops(d.steps.map(s=>({state:shownState(s),zone:STOPS[s.index].mark.land})));
}
function setWorldStatus(text){$('world-status').textContent=text;}
function goStop(i){
 const d=worldDomain(),s=d.steps[i];if(!s)return;finishPassage();closeMap();setWorldStatus(worldFailed||'');tapRing(i);
 if(d.recorded&&!lab.started){worldView?.select(i);return;}
 if(!s.available){setWorldStatus(`${STOPS[i].name} abre depois de ${STOPS[i-1].name}. Responda a pergunta anterior ou deixe-a para depois.`);return;}
 worldAutoStart=false;
 // A parada tocada abre a fase no passo 1, também a parada atual; o Rumo vai até lá sem a passagem de fase.
 if(i!==lab.step){collectLab();const old=lab.step;lab.step=i;labStore();renderLabStep(i<old?-1:1);}else if(part)showPart(0);
 const h=$('experiment-fields').querySelector('h1');if(h){h.tabIndex=-1;h.focus({preventScroll:true});}
 h?.scrollIntoView({block:'nearest',behavior:'instant'});
}
function startLabInWorld(){
 reconcileLab();
 if(!lab.started&&!worldDomain().recorded){lab.started=true;worldAutoStart=true;}
 worldEntering=true;if(lab.started)renderLabStep(0);else paintWorld();worldEntering=false;
}
// ponytail: the form moves between the map panel and the lab page; ids and handlers stay the same.
function placeLab(inWorld){
 const form=$('experiment-form');
 if(inWorld&&!worldOwnsForm()){$('world-question').append(form);form.hidden=false;startLabInWorld();}
 if(!inWorld&&worldOwnsForm()){
  finishPassage();form.querySelectorAll('.experiment-actions :is(#lab-skip,#part-skip)').forEach(b=>b.remove());// a página do laboratório recria o seu no fim da pergunta
  LAB_HOME[0].insertBefore(form,LAB_HOME[1]);$('experiment-back').hidden=false;
  if(worldAutoStart&&!Object.keys(lab.data).length){lab.started=false;worldAutoStart=false;}
  if(current==='experimento')renderExperiment();
 }
}
// worldFailed keeps the message so a click on a stop does not erase why the map is a picture.
function worldFallback(message){worldFailed=message;worldView?.setActive(false);$('world-viewport').dataset.fallback='true';setWorldStatus(message);$('world-camera').hidden=true;}
function syncWorld(){
 if(worldCelebrationPending&&(worldCelebrationPending.owner!==owner()||worldCelebrationPending.programa!==programa))worldCelebrationPending=null;
 const visible=current==='trilha'&&programa==='filho';$('bosque').hidden=!visible;placeLab(visible);
 const off=motionOff();if(!visible||off&&!mapWasOff)stopMapMotion();mapWasOff=off;
 if(!visible){closeMap(true);worldView?.setActive(false);return;}
 if(worldFailed)return;
 if(!worldView){
  if(worldLoading)return;worldLoading=true;
  const script=document.createElement('script');script.src='media/world/bosque.bundle.js?v=9';
  script.onerror=()=>worldFallback('Não foi possível abrir o 3D. As paradas e as perguntas continuam disponíveis.');
  script.onload=()=>{try{buildMapLayer();worldView=Bosque.create($('world-viewport'),{onSelect:goStop,onError:worldFallback,onView:paintWorldCamera,onFrame:layoutMap,onWalk:onRumoWalk});window.mapWorld=worldView;measureInsets();$('world-viewport').dataset.ready='true';paintWorld();const done=worldDomain().recorded&&!lab.started;mapQuiet=true;worldView.select(done?6:lab.step,{instant:true});mapQuiet=false;if(done)worldView.camera('center');syncWorld();}catch{worldFallback('Seu navegador não abriu o 3D. Use a lista de paradas.');}};
  document.head.append(script);return;
 }
 worldView.setActive(true);worldView.setMotion(!motionOff());measureInsets();
 if(worldCelebrationPending)celebrateWorldIfPending();
}
window.refreshWorld=syncWorld;
// Lote 5.6: os botões da câmera ficam sobre a base do mapa; a câmera enquadra paradas e personagens acima deles.
// A grade de "Ajustar visão" aberta não conta: ela abre por cima e fecha logo.
function measureInsets(){
 const vp=$('world-viewport').getBoundingClientRect();if(!worldView||!vp.height)return;
 const tops=[...$('world-camera').querySelectorAll(':scope>button,.world-adjust>summary')].filter(e=>e.checkVisibility()).map(e=>e.getBoundingClientRect()).filter(r=>r.top<vp.bottom&&r.bottom>vp.top).map(r=>r.top);
 worldView.setInsets({bottom:tops.length?Math.max(0,vp.bottom-Math.min(...tops)):0});
}
addEventListener('resize',measureInsets);
function paintWorldCamera(state){
 $('world-overview').textContent=state.overview?'Voltar à parada':'Ver bosque';
 $('world-explore').setAttribute('aria-pressed',String(!!state.exploring));$('world-explore').innerHTML=state.exploring?'Sair<span class="cam-extra"> da exploração</span>':'Explorar<span class="cam-extra"> mapa</span>';
 const hint='Exploração livre: arraste em qualquer direção e use dois dedos para aproximar. Toque em Sair quando terminar.';
 if(worldFailed)return;measureInsets();if(state.exploring)setWorldStatus(hint);else if($('world-status').textContent===hint)setWorldStatus('');
}
// A vista já mudou quando show('experimento') redesenha a pergunta, antes de o formulário sair do bosque: aí não é o bosque.
window.addEventListener('lab:step',()=>{if(!worldOwnsForm()||current!=='trilha')return;
 // Lote 5.5: Voltar, Deixar para depois e Continuar ficam presos no rodapé do bloco; a pergunta nova começa do topo.
 const next=$('experiment-next'),skip=$('experiment-fields').querySelector('#lab-skip');next.parentElement.querySelector('#lab-skip')?.remove();
 if(skip){skip.textContent='Deixar para depois';next.before(skip);}
 // Lote 5.7: "Pular" fica no lugar de "Deixar para depois" nos passos opcionais e faz o mesmo caminho de Continuar.
 if(!$('part-skip')){const b=document.createElement('button');b.type='button';b.className='back';b.id='part-skip';b.textContent='Pular';b.onclick=()=>$('experiment-form').requestSubmit();next.before(b);}
 $('experiment-back').innerHTML=icon('back')+'<span class="back-label">Voltar</span>';
 // Passo em que a fase abre: o último ao voltar da fase seguinte, o do rascunho ao entrar na rota, senão o passo 1.
 const from=passing;passing=null;thoughtStep=-1;
 // QA B3: uma fase adiada ou sem o passo 1 respondido reabre pelo passo 1.
 showPart(enterLast&&stepValid()&&!lab.data['skip'+lab.step]?PARTS[lab.step].length-1:worldEntering&&lab.passo?.parada===lab.step?lab.passo.n:0);enterLast=false;
 if(from!==null&&lab.step===from+1&&!worldEntering)passPhase(from);
 else{mapQuiet=worldEntering;worldView?.select(lab.step,{instant:worldEntering});mapQuiet=false;}});
// Mostra um passo da fase atual: os blocos dos outros passos ficam com data-off (o CSS esconde), mas seguem no formulário.
function blockOf(name){
 if(name==='firstValue')return $('priority-first');if(name==='sourcePlan')return $('source-followup');// blocos que experiment.js redesenha por dentro
 const c=$('experiment-fields').querySelector(`[name="${name}"]`);return c&&(c.type==='checkbox'||c.type==='radio'?c.closest('fieldset'):c.closest('label'));
}
function partWhy(){
 if(lab.step!==2)return PART_WHY[lab.step+'.'+part]||'';
 const name=(lab.data[part===1?'aName':'bName']||'').trim();
 return `Opcional. Suas respostas viram perguntas sobre ${name?`“${name}”`:`a possibilidade ${part===1?'A':'B'}`}.`;
}
function showPart(k){
 closeMap();// QA O5: o mapa aberto por "Ver bosque" fecha ao trocar de passo
 const parts=PARTS[lab.step]||[[]],f=$('experiment-fields');part=Math.max(0,Math.min(parts.length-1,k));
 parts.forEach((names,j)=>names.forEach(name=>blockOf(name)?.toggleAttribute('data-off',j!==part)));
 // Quantos campos soltos o passo mostra: em tela larga ou deitada eles dividem a linha (data-cols), um passo por tela.
 f.dataset.part=part;f.dataset.cols=parts[part].map(blockOf).filter(b=>b&&b.tagName!=='FIELDSET'&&!b.closest('.compare-grid')&&(b.tagName==='LABEL'||b.childElementCount)).length;
 f.querySelectorAll('.compare-column').forEach(c=>c.style.setProperty('--n',c.querySelectorAll('label:not([data-off])').length||1));
 let why=f.querySelector('.part-why');if(!why){why=document.createElement('p');why.className='part-why';f.querySelector('h1')?.after(why);}
 why.textContent=part?partWhy():'';
 $('part-skip')&&($('part-skip').hidden=!part);if($('lab-skip'))$('lab-skip').hidden=!!part;$('experiment-back').hidden=lab.step===0&&!part;
 status('experiment-status','');f.scrollTop=0;
 if(lab.step===0)paintChoiceNote();if(lab.step===6)paintReviewStates();
 // Campo aditivo no rascunho da aba: quem sai e volta cai no mesmo passo. Só olhar o mapa, sem nenhuma resposta, não cria
 // rascunho nem retomada (QA A2: tocar na parada atual e sair da rota criava).
 lab.passo={parada:lab.step,n:part};if(Object.values(lab.data).some(v=>Array.isArray(v)?v.length:v))labStore();paintWorld();
}
// Atividades em duas colunas só com o título: a descrição da última opção marcada aparece numa linha abaixo das escolhas.
let lastActivity='';
function paintChoiceNote(){
 const set=$('experiment-fields').querySelector('[name=activities]')?.closest('fieldset');if(!set)return;
 let note=set.querySelector('.choice-note');if(!note){note=document.createElement('p');note.className='choice-note';set.append(note);}
 const checked=[...set.querySelectorAll('[name=activities]:checked')],pick=checked.find(i=>i.value===lastActivity)||checked.at(-1);
 note.textContent=pick?`${pick.closest('.choice').querySelector('strong').textContent}: ${pick.closest('.choice').querySelector('small').textContent}`:'';
}
document.addEventListener('change',e=>{if(worldOwnsForm()&&e.target.name==='activities'){if(e.target.checked)lastActivity=e.target.value;paintChoiceNote();}});
// Revisão compacta: cada bloco mostra o título, o estado e Editar; o texto completo sai em "Baixar meu resumo".
function paintReviewStates(){
 $('experiment-fields').querySelectorAll('.review-section').forEach((s,i)=>{let t=s.querySelector('.review-state');if(!t){t=document.createElement('span');t.className='review-state';s.querySelector('h2').after(t);}
  t.textContent=lab.data['skip'+i]?'Deixada para depois':Journey.validStep(i,lab.data)?'Respondida':'A investigar';});
}
function focusPart(){const f=$('experiment-fields'),t=part?f.querySelector('.part-why'):f.querySelector('h1');if(!t)return;t.tabIndex=-1;t.focus({preventScroll:true});
 $('world-live').textContent=`Passo ${part+1} de ${PARTS[lab.step].length}.`;}// QA O1: o leitor de tela ouve o passo
// Continuar e Pular dentro da fase. O passo 1 checa o obrigatório como hoje (checkStep); o último deixa o submit de
// experiment.js concluir a fase (rascunho guardado, próxima parada aberta) e marca a passagem para o evento lab:step.
document.addEventListener('submit',e=>{
 if(e.target.id!=='experiment-form'||!worldOwnsForm()||labSaved)return;passing=null;finishPassage();
 const last=PARTS[lab.step].length-1;
 if(part<last){e.preventDefault();e.stopImmediatePropagation();if(part===0&&!checkStep())return;collectLab();showPart(part+1);focusPart();return;}
 if(part>0&&!stepValid())showPart(0);// o obrigatório só muda no passo 1; se ficou vazio, experiment.js avisa com ele à vista
 if(lab.step<6&&stepValid())passing=lab.step;// QA A1: só passa de fase se o submit vai mesmo concluir a fase
},true);
// Voltar dentro da fase volta um passo; no passo 1, experiment.js abre a fase anterior e ela entra pelo último passo.
document.addEventListener('click',e=>{if(!worldOwnsForm()||e.detail>1||!e.target.closest('#experiment-back'))return;finishPassage();
 if(part>0){e.preventDefault();e.stopImmediatePropagation();collectLab();showPart(part-1);focusPart();return;}
 enterLast=true;},true);
// Passagem de fase: o painel desce, o mapa ocupa a área, o Rumo anda até a próxima parada, a concluída acende e o guia
// da terra comemora; o painel sobe com a fase seguinte, já desenhada. Tudo em até 1,75 s, nada em laço. Movimento
// reduzido ou pausa: troca direta, com o texto "Fase concluída". Um toque ou uma tecla pulam (finishPassage).
function passPhase(from){
 const to=from+1;closeMap(true);
 if(motionOff()||!worldView||worldFailed||!mapLayer){passage={from,to};worldView?.select(to,{instant:true});passage=null;
  if(!worldView||worldFailed)$('world-live').textContent=`Fase ${from+1} concluída.`;status('experiment-status','Fase concluída.');return;}
 stopCompanionMotion();// a entrada da pergunta nova não roda por trás do mapa
 const vp=$('world-viewport');let note=vp.querySelector('.passage-note');if(!note){note=document.createElement('p');note.className='passage-note';note.setAttribute('aria-hidden','true');vp.append(note);}
 note.textContent=`Fase ${from+1} concluída`;$('world-live').textContent=`Fase ${from+1} concluída.`;
 passage={from,to,timers:[],...growMap(FX.abre)};
 passage.timers.push(setTimeout(()=>worldView.select(to),FX.anda),setTimeout(closePassage,FX.passagem-FX.fecha));
}
// O mapa ocupa a área do bloco: deitado ele cresce para o lado, por cima da pergunta; em pé, para baixo, e empurra o painel
// para fora da tela. Devolve o elemento, a volta e a animação (com fill, desfeita no fim).
function growMap(duration){
 const stage=$('world-stage'),vp=$('world-viewport'),scene=vp.parentElement;stage.removeAttribute('data-typing');// o mapa recolhido pelo teclado volta
 const S=stage.getBoundingClientRect(),C=scene.getBoundingClientRect(),V=vp.getBoundingClientRect(),cs=getComputedStyle(stage),wide=SIDE.matches;
 const [el,a,b]=wide?[scene,{width:C.width+'px'},{width:S.width-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight)+'px'}]
  :[vp,{height:V.height+'px'},{height:V.height+S.bottom-parseFloat(cs.paddingBottom)-C.bottom-parseFloat(getComputedStyle(scene).marginBottom)+'px'}];
 stage.dataset.passage=wide?'wide':'open';
 return {el,back:[b,a],anims:[el.animate([a,b],{duration,easing:E.chega,fill:'forwards'})]};
}
// Lote 5.7: na faixa curta do celular em pé (fase aberta, abaixo de 170 px) o bosque inteiro não cabe sem os personagens
// encostarem: "Ver bosque" e "Explorar" devolvem ao mapa o tamanho do 5.6, onde o "Ver bosque" foi medido, e a pergunta fica
// menor embaixo, com rolagem própria; "Voltar à parada" ou "Sair" encolhem de novo. O bloco não cresce.
let mapOpen=null;
// QA M3: o modo de faixa curta acompanha a fase e a orientação; girar a tela no meio da fase refaz o enquadramento.
function syncCompact(){worldView?.setCompact($('world-stage').hasAttribute('data-phase')&&!SIDE.matches);}
addEventListener('resize',syncCompact);SIDE.addEventListener('change',()=>{finishPassage();closeMap(true);syncCompact();});
// QA M1: mensagens da pergunta ficam numa faixa sobre a base da área (CSS), sem empurrar o passo; o que não é erro sai sozinho
// em 2,5 s, depois de anunciado. O erro fica até a pessoa responder.
let statusTimer=0;
new MutationObserver(()=>{const s=$('experiment-status');clearTimeout(statusTimer);if(worldOwnsForm()&&s.textContent&&s.dataset.error!=='true')statusTimer=setTimeout(()=>{if(worldOwnsForm()&&s.dataset.error!=='true')s.textContent='';},2500);}).observe($('experiment-status'),{childList:true,characterData:true,subtree:true});
const shortMap=()=>!SIDE.matches&&$('world-stage').hasAttribute('data-phase')&&$('world-viewport').getBoundingClientRect().height<170;
function resizeMap(change,duration){const vp=$('world-viewport'),h0=vp.getBoundingClientRect().height;change();const h1=vp.getBoundingClientRect().height;
 return duration&&!motionOff()&&Math.abs(h1-h0)>1?vp.animate([{height:h0+'px'},{height:h1+'px'}],{duration,easing:E.chega}):null;}
function openMap(){if(mapOpen||!shortMap())return;finishPassage();mapOpen={a:resizeMap(()=>{$('world-stage').dataset.mapa='';},FX.abre)};}
function closeMap(instant=false){
 const p=mapOpen;if(!p)return;mapOpen=null;p.a?.cancel();const s=worldView?.state();if(s?.exploring)worldView.setExplore(false);if(s?.overview)worldView.camera('focus');
 resizeMap(()=>{delete $('world-stage').dataset.mapa;},instant?0:FX.fecha);
}
function celebratePhase(from){
 popRing(from,FX.destrava);const name=STEP_COMPANIONS[from],fig=figureOf(name);if(!fig)return;
 if(name!=='rumo'){stopRuns(name);faceTo(fig,mapAnchors.rumo.x,mapAnchors.guides[name].x);}// o pouso do Rumo continua quando ele é o guia
 fig.dataset.state='celebrate';const run=track(name,animarGesto(fig,'celebrar',1));
 Promise.allSettled(run.map(r=>r.finished)).then(r=>{if(r.every(x=>x.status==='fulfilled'))fig.dataset.state='welcome';});
}
function closePassage(){
 const p=passage;if(!p?.el||p.closing)return;p.closing=true;$('world-stage').dataset.closing='';
 const back=p.el.animate(p.back,{duration:FX.fecha,easing:E.chega,fill:'forwards'});p.anims.push(back);
 back.finished.then(()=>{if(passage===p)endPassage();},()=>{});
}
function endPassage(){const p=passage;if(!p)return;passage=null;p.timers?.forEach(clearTimeout);p.anims?.forEach(a=>a.cancel());const st=$('world-stage');delete st.dataset.passage;delete st.dataset.closing;}
// Pular: o Rumo fica na parada nova, o guia volta ao repouso e o painel aparece sem transição.
function finishPassage(){
 const p=passage;if(!p?.el)return;const st=$('world-stage');
 if(worldView?.state().hop||worldView?.state().selected!==p.to)worldView?.select(p.to,{instant:true});
 stopRuns(STEP_COMPANIONS[p.from]);stopRuns('fx');st.dataset.instant='';endPassage();void st.offsetHeight;delete st.dataset.instant;
}
// QA B6: tocar numa parada da fila durante a passagem abre essa parada (a fila muda de lugar quando o mapa encolhe).
addEventListener('pointerdown',e=>{if(!passage?.el)return;const s=e.target.closest?.('[data-world-stop]');finishPassage();if(s)goStop(Number(s.dataset.worldStop));},true);
// QA M2: a tecla que pula a passagem não rola a página (o foco está no título da fase nova).
addEventListener('keydown',e=>{if(!passage?.el)return;finishPassage();if([' ','Enter','ArrowDown','ArrowUp','PageDown','PageUp','Home','End'].includes(e.key))e.preventDefault();},true);
// On document, so experiment.js has already collected the field when the map repaints.
document.addEventListener('input',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form')){worldAutoStart=false;paintWorld();
 // Pessoa digitando: o guia da terra faz a pose de pensar uma vez por parada.
 if(thoughtStep!==lab.step&&e.target.matches('textarea,input:not([type=radio]):not([type=checkbox])')){thoughtStep=lab.step;think();}}});
document.addEventListener('change',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form'))paintWorld();});
$('world-nodes').onclick=e=>{const button=e.target.closest('[data-world-stop]');if(button)goStop(Number(button.dataset.worldStop));};
$('world-overview').onclick=()=>{if(!worldView)return;if(mapOpen&&worldView.state().overview){closeMap();return;}openMap();worldView.camera(worldView.state().overview?'focus':'center');};
$('world-explore').onclick=()=>{if(!worldView)return;if(mapOpen&&worldView.state().exploring){closeMap();return;}openMap();worldView.setExplore(!worldView.state().exploring);};
$('world-camera').querySelector('.world-adjust').onclick=e=>{const button=e.target.closest('[data-camera]');if(button)worldView?.camera(button.dataset.camera);};
$('world-example').onclick=()=>{worldAutoStart=false;$('experiment-example').click();};
$('world-restart').onclick=()=>{lab={owner:owner(),programa,step:0,data:{},started:true};labSaved=false;worldAutoStart=true;renderLabStep(0);focusLab();};
window.addEventListener('mapa:saved',e=>{if(e.detail?.programa==='filho')worldCelebrationPending=e.detail;});
// QA A1: as ações ficam no mesmo lugar ao trocar de pergunta. O segundo clique de um duplo clique (ou toque duplo), que o
// navegador marca com detail > 1, não avança de novo nem grava a revisão sem que ela apareça.
$('experiment-form').addEventListener('click',e=>{if(worldOwnsForm()&&e.detail>1&&e.target.closest('#experiment-next,#lab-skip,#part-skip,#experiment-back')){e.preventDefault();e.stopImmediatePropagation();}},true);
// Lote 5.5: o bosque ocupa uma tela na rota do Filho. --top-h é o cabeçalho preso no desktop (0 no celular, onde ele rola).
const topBar=document.querySelector('.top');
function measureTop(){const h=getComputedStyle(topBar).position==='sticky'?topBar.offsetHeight:0;document.documentElement.style.setProperty('--top-h',h+'px');return h;}
measureTop();addEventListener('resize',measureTop);
// Ao entrar na rota a página para no bloco. offsetTop ignora o transform da entrada da página, que deslocaria o bloco 10 px.
window.scrollToWorld=()=>{let y=0;for(let e=$('world-stage');e;e=e.offsetParent)y+=e.offsetTop;window.scrollTo({top:y-measureTop(),behavior:'instant'});};
// Celular em pé: com um campo de texto em foco, o mapa recolhe para a fila de paradas (CSS) e volta ao sair do campo.
// Saindo por um toque, espera o toque terminar: a fila desce quando o mapa volta, e o clique tem de cair onde a pessoa tocou.
const typingField=e=>!!e?.matches?.('#world-stage #experiment-fields :is(textarea,input:not([type=radio]):not([type=checkbox]))');
let pressing=false;
const syncTyping=()=>$('world-stage').toggleAttribute('data-typing',typingField(document.activeElement));
function afterPress(fn){const go=()=>{removeEventListener('pointerup',go,true);removeEventListener('pointercancel',go,true);setTimeout(fn);};addEventListener('pointerup',go,true);addEventListener('pointercancel',go,true);}
addEventListener('pointerdown',()=>{pressing=true;},true);addEventListener('pointerup',()=>{pressing=false;},true);addEventListener('pointercancel',()=>{pressing=false;},true);
const portrait=matchMedia('(max-width:899px) and (orientation:portrait)');
// O campo sobe para o alto da área da pergunta, acima de onde o teclado abre. Só a área interna rola, nunca a página.
document.addEventListener('focusin',e=>{if(!typingField(e.target))return;syncTyping();
 if(portrait.matches){const f=$('experiment-fields'),box=(e.target.closest('label')||e.target).getBoundingClientRect();f.scrollTop+=box.top-f.getBoundingClientRect().top-8;}});
document.addEventListener('focusout',e=>{if(!typingField(e.target))return;if(pressing)afterPress(syncTyping);else setTimeout(syncTyping);});
reduce.addEventListener('change',syncWorld);
new MutationObserver(syncWorld).observe(document.body,{attributes:true,attributeFilter:['data-motion','data-view']});
