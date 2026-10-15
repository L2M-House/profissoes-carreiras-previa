// Product adapter: contracts and canonical records stay outside the renderer.
// The lab form itself is shown beside the map; validation, drafts and saveAnswer stay in experiment.js.
const PLACES=['Clareira','Moinho','Ponte','Placa','Bifurcação','Acampamento','Mirante'];
const STOPS=Journey.steps.map((s,i)=>({...s,place:PLACES[i],mark:MARCAS.find(m=>m.id===s.stage)}));
const LOCK='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="7" width="9" height="7" rx="1.5" fill="currentColor"/></svg>';
const STATE_TEXT={bloqueada:'Abre depois da parada anterior',foco:'Você está aqui',rascunho:'Rascunho guardado nesta aba',adiado:'Deixada para investigar depois',guardado:'Registro guardado',disponível:'Disponível'};
const LAB_HOME=[$('experiment-form').parentElement,$('experiment-form').nextSibling];
let worldView,worldLoading=false,worldFailed=false,worldCelebrationPending=null,worldAutoStart=false,worldEntering=false;
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
const FX={toque:100,someToque:150,antes:90,pouso:320,poeira:300,olhar:180,volta:700,destrava:400,rascunho:200,pensar:300,passo:55,acende:170,festa:900,fade:150};
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
 for(const key of [...mapRuns.keys()])stopRuns(key);mapTimers.forEach(clearTimeout);mapTimers.clear();
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
 $('world-live').textContent=`Rumo chegou à parada ${e.index+1}, ${STOPS[e.index].place}.`;
 stopRuns('rumo');pose(rumo,'repouso');if(e.stopped)return;
 if(e.walked&&!motionOff()){track('rumo',[body.animate([{transform:from},{transform:'scale(1.08,.92)',offset:.25},{transform:'scale(.97,1.03)',offset:.55},{transform:'scale(1.01,.99)',offset:.8},{transform:'scale(1)'}],{duration:FX.pouso,easing:E.meio})]);dust();}
 else if(motionOff())track('rumo',[body.animate([{opacity:0},{opacity:1}],{duration:FX.fade})]);
 if(e.walked||motionOff())guideReact(e.index);
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
 $('world-place-zone').textContent=`${stop.mark.id} · ${stop.mark.deg} · ${stop.place}`;
 $('world-place-state').textContent=done?'Exercício guardado':`Parada ${focus+1} de 7 · ${STATE_TEXT[shownState(d.steps[focus])]}`;
 $('world-question').hidden=done;$('world-done').hidden=!done;$('world-example').hidden=done;
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
 const d=worldDomain(),s=d.steps[i];if(!s)return;setWorldStatus(worldFailed||'');tapRing(i);
 if(d.recorded&&!lab.started){worldView?.select(i);return;}
 if(!s.available){setWorldStatus(`${STOPS[i].name} abre depois de ${STOPS[i-1].name}. Responda a pergunta anterior ou deixe-a para depois.`);return;}
 worldAutoStart=false;
 if(i!==lab.step){collectLab();const old=lab.step;lab.step=i;labStore();renderLabStep(i<old?-1:1);}
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
 if(!visible){worldView?.setActive(false);return;}
 if(worldFailed)return;
 if(!worldView){
  if(worldLoading)return;worldLoading=true;
  const script=document.createElement('script');script.src='media/world/bosque.bundle.js?v=6';
  script.onerror=()=>worldFallback('Não foi possível abrir o 3D. As paradas e as perguntas continuam disponíveis.');
  script.onload=()=>{try{buildMapLayer();worldView=Bosque.create($('world-viewport'),{onSelect:goStop,onError:worldFallback,onView:paintWorldCamera,onFrame:layoutMap,onWalk:onRumoWalk});window.mapWorld=worldView;$('world-viewport').dataset.ready='true';paintWorld();const done=worldDomain().recorded&&!lab.started;mapQuiet=true;worldView.select(done?6:lab.step,{instant:true});mapQuiet=false;if(done)worldView.camera('center');syncWorld();}catch{worldFallback('Seu navegador não abriu o 3D. Use a lista de paradas.');}};
  document.head.append(script);return;
 }
 worldView.setActive(true);worldView.setMotion(!motionOff());
 if(worldCelebrationPending)celebrateWorldIfPending();
}
window.refreshWorld=syncWorld;
function paintWorldCamera(state){
 $('world-overview').textContent=state.overview?'Voltar à parada':'Ver bosque';
 $('world-explore').setAttribute('aria-pressed',String(!!state.exploring));$('world-explore').textContent=state.exploring?'Sair da exploração':'Explorar mapa';
 const hint='Exploração livre: arraste em qualquer direção e use dois dedos para aproximar. Toque em Sair da exploração para voltar à rolagem da página.';
 if(worldFailed)return;if(state.exploring)setWorldStatus(hint);else if($('world-status').textContent===hint)setWorldStatus('');
}
window.addEventListener('lab:step',()=>{if(!worldOwnsForm())return;$('experiment-back').hidden=lab.step===0;paintWorld();thoughtStep=-1;mapQuiet=worldEntering;worldView?.select(lab.step,{instant:worldEntering});mapQuiet=false;});
// On document, so experiment.js has already collected the field when the map repaints.
document.addEventListener('input',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form')){worldAutoStart=false;paintWorld();
 // Pessoa digitando: o guia da terra faz a pose de pensar uma vez por parada.
 if(thoughtStep!==lab.step&&e.target.matches('textarea,input:not([type=radio]):not([type=checkbox])')){thoughtStep=lab.step;think();}}});
document.addEventListener('change',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form'))paintWorld();});
$('world-nodes').onclick=e=>{const button=e.target.closest('[data-world-stop]');if(button)goStop(Number(button.dataset.worldStop));};
$('world-overview').onclick=()=>worldView?.camera(worldView.state().overview?'focus':'center');
$('world-explore').onclick=()=>worldView?.setExplore(!worldView.state().exploring);
$('world-camera').querySelector('.world-adjust').onclick=e=>{const button=e.target.closest('[data-camera]');if(button)worldView?.camera(button.dataset.camera);};
$('world-example').onclick=()=>{worldAutoStart=false;$('experiment-example').click();};
$('world-restart').onclick=()=>{lab={owner:owner(),programa,step:0,data:{},started:true};labSaved=false;worldAutoStart=true;renderLabStep(0);focusLab();};
window.addEventListener('mapa:saved',e=>{if(e.detail?.programa==='filho')worldCelebrationPending=e.detail;});
reduce.addEventListener('change',syncWorld);
new MutationObserver(syncWorld).observe(document.body,{attributes:true,attributeFilter:['data-motion','data-view']});
