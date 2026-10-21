// Product adapter: contracts and canonical records stay outside the renderer.
// The lab form itself is shown beside the map; validation, drafts and saveAnswer stay in experiment.js.
const PLACES=['Clareira','Moinho','Ponte','Placa','Bifurcação','Acampamento','Mirante'];
const STOPS=Journey.steps.map((s,i)=>({...s,place:PLACES[i],mark:MARCAS.find(m=>m.id===s.stage)}));
const LOCK='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="7" width="9" height="7" rx="1.5" fill="currentColor"/></svg>';
// Lote 5.10: cada estado tem o mesmo nome e o mesmo símbolo no mapa, na fila e na legenda. O contrato não muda: a ponte lê o
// estado dele e o rascunho. Lote 5.11: feita é a fase com todos os passos respondidos (ou o exercício guardado); começada, a que
// tem alguma resposta e ainda falta passo; aberta, a que ainda não tem nenhuma. "Deixada para depois" só vem de rascunho ou
// registro de antes do 5.11: na rota do Filho não há mais "Responder depois".
const LOOK_TEXT={aqui:'Você está aqui',feita:'Feita',comecada:'Começada',depois:'Deixada para depois',fechada:'Fechada',aberta:'Aberta'};
const LOOK_GLYPH={feita:'✓',comecada:'✎',depois:'↷'};
const filled=v=>Array.isArray(v)?v.length>0:!!String(v??'').trim();
const LAB_HOME=[$('experiment-form').parentElement,$('experiment-form').nextSibling];
let worldView,worldLoading=false,worldFailed=false,worldCelebrationPending=null,worldAutoStart=false,worldEntering=false;
// Lote 5.7: cada parada é uma fase de passos curtos, um por tela. Campos, perguntas e gravação são os de experiment.js: o passo
// só mostra uma parte da pergunta, que continua inteira no formulário. Os nomes são dos campos; cada um aponta para o bloco que o
// contém.
const PARTS=[[['activities'],['activityNote','activityExperience']],[['values'],['firstValue','valueNote']],[['aName','bName'],['aAttract','aRoutine','aRethink'],['bAttract','bRoutine','bRethink']],
 [['claim','evidence'],['checked','change']],[['path','topic','question'],['searchType','sourcePlan']],[['action','actionPlan'],['when','obstacle','smaller']],[[]]];
const PART_WHY={'0.1':'Um exemplo real ajuda você a lembrar dessa curiosidade.','1.1':'Ajuda a ver essa prioridade num dia comum.',
 '3.1':'Mostra o que ainda vale investigar.','4.1':'Ajuda a escolher o próximo passo.','5.1':'Pensar no que pode atrapalhar ajuda a cumprir o passo.'};
// Lote 5.11: na rota do Filho todo passo pede uma resposta antes de seguir. O passo 1 pede o que o contrato pede e, na Bifurcação,
// também a primeira pergunta, "Qual possibilidade?" (QA B4: ela não era pedida nem marcada como opcional). Nos outros passos, a
// primeira pergunta; as demais ficam "(opcional)". No passo 2 do Acampamento a primeira pergunta é uma data, que não aceita "Ainda
// não sei" e que o exemplo fictício não preenche: ali vale a primeira de texto, "O que pode dificultar?".
const NEED=[[['activities'],['activityNote']],[['values'],['firstValue']],[['aName','bName'],['aAttract'],['bAttract']],[['claim','evidence'],['checked']],[['path','topic','question'],['searchType']],[['action','actionPlan'],['obstacle']],[[]]];
const NEED_MSG={activities:'Escolha pelo menos uma atividade para seguir.',activityNote:'Escreva uma situação para seguir.',values:'Escolha pelo menos uma prioridade para seguir.',firstValue:'Escolha a prioridade que quer investigar primeiro.',
 aName:'Escreva o nome da possibilidade A para seguir.',bName:'Escreva o nome da possibilidade B para seguir.',aAttract:'Escreva o que atrai você nessa possibilidade para seguir.',bAttract:'Escreva o que atrai você nessa possibilidade para seguir.',
 path:'Escolha a possibilidade da sua dúvida para seguir.',claim:'Escreva uma ideia que quer conferir para seguir.',evidence:'Escolha como você chegou a essa ideia.',checked:'Escolha quanto você conseguiu conferir.',topic:'Escolha um tema para seguir.',
 question:'Escreva a pergunta que quer responder para seguir.',searchType:'Escolha como poderia buscar essa informação.',action:'Escolha como quer começar.',actionPlan:'Escreva o que você vai fazer para seguir.',obstacle:'Escreva o que pode dificultar para seguir.'};
const DUNNO='Ainda não sei';
// O que falta num passo, na ordem da tela; vazio quando ele está respondido.
function missing(i,k,d){
 const m=(NEED[i][k]||[]).filter(n=>!filled(d[n])&&!(n==='actionPlan'&&d.action==='Definir depois'));
 return k||m.length||Journey.validStep(i,d)?m:NEED[i][0].slice(0,1);// o passo 1 nunca fica aquém do contrato
}
// Fase completa: todos os passos respondidos. O Mirante só fica feito com o exercício guardado.
const phaseDone=(i,d)=>i<6&&PARTS[i].every((_,k)=>!missing(i,k,d).length);
const SIDE=matchMedia('(max-height:640px) and (min-aspect-ratio:4/3)');// o mesmo corte do CSS: mapa à esquerda, pergunta à direita
let part=0,passing=null,enterLast=false,passage=null;
const worldOwnsForm=()=>$('world-question').contains($('experiment-form'));
const shownState=s=>s.available?s.state:'bloqueada';
const lookOf=(s,data)=>!s.available?'fechada':s.state==='guardado'?(data['skip'+s.index]?'depois':'feita'):s.state==='foco'?'aqui':phaseDone(s.index,data)?'feita':s.state==='adiado'?'depois':PARTS[s.index].flat().some(n=>filled(data[n]))?'comecada':'aberta';
function worldDomain(){
 const snapshot=lab.owner===owner()&&lab.programa===programa?lab:journeys()[journeyKey('experiment')]?.snapshot||{owner:owner(),programa,step:0,data:{},started:false};
 const recorded=!snapshot.started&&answers().some(a=>a.quem===owner()&&a.programa===programa&&a.experimento?.versao===1);
 // Lote 5.10: com o exercício guardado, a aparência de cada fase vem das respostas guardadas: deixada para depois continua assim
 // (achado do QA: tudo adiado e guardado aparecia como "Feita").
 const saved=recorded?answers().filter(a=>a.quem===owner()&&a.programa===programa&&a.experimento?.versao===1).at(-1)?.experimento?.respostas:null,data=saved||snapshot.data||{};
 // Lote 5.11: uma fase abre quando todas as anteriores estão completas, com todos os passos; o contrato (congelado) só conhece o
 // passo 1, então a ponte decide. A fase em que a pessoa está fica aberta; com o exercício guardado, todas, como no contrato.
 const open=i=>recorded||i===snapshot.step||STOPS.slice(0,i).every((_,j)=>phaseDone(j,data));
 return {snapshot,recorded,steps:Journey.project(snapshot,recorded).map(s=>({...s,available:open(s.index)})),data};
}
// A primeira fase incompleta antes da fase i: é ela que a fase i espera.
const blocker=(i,data)=>STOPS.findIndex((_,j)=>j<i&&!phaseDone(j,data));
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
 abre:300,anda:240,fecha:300,passagem:2400};// Lote 5.7: o mapa abre em 300 ms, o Rumo sai aos 240 ms. Lote 5.11: com a comemoração, tudo volta até 2,4 s
const FIGURE_UNITS=1.55;// altura do desenho (viewBox de 260) em unidades do mundo: Rumo com 56 a 72 px no foco do celular
const ZOOM_OUT='<svg class="cam-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.5 7h5M11 11l3.5 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',ZOOM_IN=ZOOM_OUT.replace('M4.5 7h5','M4.5 7h5M7 4.5v5');
const LOCK_OPEN='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M11 7V4a3 3 0 0 0-6 0v1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="7" width="9" height="7" rx="1.5" fill="currentColor"/></svg>';
let mapLayer=null,mapAnchors=null,mapQuiet=false,mapWasOff=false,thoughtStep=-1;
const mapRuns=new Map(),mapTimers=new Map();
const figureOf=name=>mapLayer?.querySelector(`[data-figure=${name}] .companion`);
function buildMapLayer(){
 mapLayer=document.createElement('div');mapLayer.className='world-layer';mapLayer.id='world-layer';mapLayer.setAttribute('aria-hidden','true');mapLayer.dataset.celebrations='0';
 mapLayer.innerHTML=MAP_CAST.map(n=>`<div class="map-figure" data-figure="${n}"><div class="map-body">${companion(n)}</div></div>`).join('')+
  // Lote 5.10: o nome curto de cada um e o "Você está aqui", em texto de tamanho fixo, presos aos mesmos pontos.
  `<div class="map-tags">${MAP_CAST.map(n=>`<span class="map-name" data-name="${n}">${ELENCO[n].name}</span>`).join('')}<span class="map-here"><b></b><small>${LOOK_TEXT.aqui}</small></span></div>`;
 // Tocar num personagem (ou no nome dele) faz ele dizer, num balão, para que serve.
 mapLayer.addEventListener('click',e=>{const t=e.target.closest('[data-figure],[data-name]');if(t)roleNote(t.dataset.figure||t.dataset.name);});
 $('world-viewport').append(mapLayer);
}
// Lote 5.8: no desktop o desenho pode chegar a 200 px (a.figMax), para acompanhar o foco perto do Rumo; no resto, 130 px.
const fxScale=a=>Math.min(a.figMax||130,Math.max(46,a.unit*FIGURE_UNITS))/130;
// Anéis seguem a escala do mundo; confete e poeira têm piso, para continuarem visíveis com o bosque inteiro na tela.
function placeFx(e){const a=mapAnchors,p=e.dataset.at==='rumo'?a.rumo:a.stops[e.dataset.at];e.style.transform=`translate(${p.x}px,${p.y}px) scale(${Math.max(fxScale(a),Number(e.dataset.min||0))})`;}
// Base do desenho: caixa de 120×130 px com os pés em (60, 119); a escala segue o zoom, com piso e teto para leitura.
function layoutMap(a){
 mapAnchors=a;if(!mapLayer)return;const k=fxScale(a);
 for(const f of mapLayer.querySelectorAll('.map-figure')){const p=f.dataset.figure==='rumo'?a.rumo:a.guides[f.dataset.figure];f.style.transform=`translate(${p.x-60*k}px,${p.y-119*k}px) scale(${k})`;f.style.zIndex=Math.round((1-p.z)*1e4);}// o mais perto da câmera fica por cima
 // Lote 5.7: na faixa curta o quadro fica no Rumo e na parada; guia que não cabe inteiro na faixa não aparece, em vez de cortado.
 // Lote 5.8: o mesmo no foco perto do desktop (a.close), onde inteiro é também acima da faixa dos botões da câmera.
 const short=a.short||a.close,floor=a.height-(a.close?a.inset||0:0);for(const f of mapLayer.querySelectorAll('.map-figure:not([data-figure=rumo])')){const p=a.guides[f.dataset.figure],out=short&&(p.x-60*k<0||p.x+60*k>a.width||p.y-119*k<0||p.y+11*k>floor);f.style.visibility=out?'hidden':'';f.style.opacity=out?'0':'';}
 mapLayer.querySelectorAll('.map-fx').forEach(placeFx);layoutTags(a);if(note)placeNote();
}
// Lote 5.10: os rótulos têm texto de tamanho fixo (14 px) e ficam fora do desenho: embaixo dos pés, em cima da cabeça ou do
// lado, dentro da faixa acima dos botões, sem cobrir um personagem, o botão de dicas nem outro rótulo. Primeiro o "Você está
// aqui", depois os nomes; um nome que não cabe em lugar nenhum, ou cujo personagem saiu do quadro, não aparece.
let guideBox=null;
// Lote 5.11 (QA M3 e B8): o aviso da comemoração fica na base do mapa (no celular em pé, sobre a faixa dos botões da câmera, que o
// enquadramento deixa livre) e sobe para o alto quando o Rumo ficaria embaixo dele (deitado não há essa faixa). Os nomes desviam dele.
function cheerBox(a){
 const n=$('world-viewport').querySelector('.passage-note'),st=$('world-stage');if(!n||!('cheer' in st.dataset)&&!(st.dataset.passage&&!('closing' in st.dataset)))return null;
 const k=fxScale(a),h=n.offsetHeight,w=n.offsetWidth,low=a.height-8-h;n.dataset.at=a.rumo.y+11*k>low&&a.rumo.y-119*k>h+16?'top':'bottom';
 return {x:a.width/2-w/2,y:n.dataset.at==='top'?12:low,w,h};
}
function layoutTags(a){
 const tags=mapLayer?.querySelector('.map-tags');if(!tags)return;const k=fxScale(a),floor=a.height-(a.inset||0),cheer=cheerBox(a),taken=[guideBox,cheer].filter(Boolean);
 const figs=MAP_CAST.map(n=>{const f=mapLayer.querySelector(`[data-figure=${n}]`),p=n==='rumo'?a.rumo:a.guides[n];return {n,p,on:f.style.visibility!=='hidden',box:{x:p.x-45*k,y:p.y-112*k,w:90*k,h:120*k}};});
 // QA M6 (17/10): o nome de um personagem fica a pelo menos 10 px dos outros desenhos, para não parecer o nome do vizinho. O
 // "Você está aqui" não tem essa margem: no mapa curto do celular ele deixava de caber.
 figs.forEach(f=>f.on&&taken.push({...f.box,dono:f.n}));
 const free=(r,dono,pad)=>r.x>=2&&r.y>=2&&r.x+r.w<=a.width-2&&r.y+r.h<=floor-2&&!taken.some(q=>{const g=q.dono&&q.dono!==dono?pad:0;return r.x<q.x+q.w+g&&q.x-g<r.x+r.w&&r.y<q.y+q.h+g&&q.y-g<r.y+r.h;});
 const place=(el,f,order,pad=10)=>{const w=el.offsetWidth,h=el.offsetHeight,{p,box}=f,mid=box.y+box.h/2-h/2;
  const spots={below:{x:p.x-w/2,y:box.y+box.h+2},above:{x:p.x-w/2,y:box.y-h-2},right:{x:box.x+box.w+2,y:mid},left:{x:box.x-w-2,y:mid}};
  const r=f.on&&order.map(s=>({...spots[s],w,h})).find(q=>free(q,f.n,pad));el.style.visibility=r?'':'hidden';if(!r)return;taken.push(r);el.style.transform=`translate(${Math.round(r.x)}px,${Math.round(r.y)}px)`;};
 place(tags.querySelector('.map-here'),figs[3],['above','left','right','below'],0);
 figs.forEach(f=>place(tags.querySelector(`[data-name=${f.n}]`),f,['below','above','right','left']));
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
 finishPassage();endCheer();for(const key of [...mapRuns.keys()])stopRuns(key);mapTimers.forEach(clearTimeout);mapTimers.clear();
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
 $('world-live').textContent=(passed===null?'':`Fase ${passed+1} de 7 concluída. `)+`Rumo chegou à fase ${e.index+1}, ${STOPS[e.index].place}.`;
 stopRuns('rumo');pose(rumo,'repouso');if(e.stopped)return;
 if(e.walked&&!motionOff()){track('rumo',[body.animate([{transform:from},{transform:'scale(1.08,.92)',offset:.25},{transform:'scale(.97,1.03)',offset:.55},{transform:'scale(1.01,.99)',offset:.8},{transform:'scale(1)'}],{duration:FX.pouso,easing:E.meio})]);dust();}
 else if(motionOff())track('rumo',[body.animate([{opacity:0},{opacity:1}],{duration:FX.fade})]);
 // Lote 5.7: na passagem de fase, a parada concluída acende e o guia da terra dela comemora, no lugar da reação de chegada.
 // Lote 5.11: o Rumo também, com o confete; com movimento reduzido ou pausa, os dois em pose parada.
 if(passed!==null){if(e.walked&&!motionOff())celebratePhase(passed,e.index);else if(motionOff())quietCheer(passed);}
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
 const d=worldDomain(),done=d.recorded&&!lab.started,focus=done?6:lab.step,stop=STOPS[focus],data=d.data;
 // Lote 5.10: o topo da pergunta diz "Fase 4 de 7 · Placa" e, embaixo, a etapa ("Analisar"), com os nomes da fila e do mapa.
 // O grau da bússola fica só na rota dos Pais.
 const focusLook=lookOf(d.steps[focus],data);
 $('world-place-zone').textContent=`Fase ${focus+1} de 7 · ${stop.place}`;$('world-place-stage').textContent=stop.mark.id;
 // Lote 5.7: a barra de passos da fase fica no topo do painel, separada da fila das sete paradas.
 const n=PARTS[focus].length,k=Math.min(part,n-1);
 $('world-place-state').innerHTML=done?'Exercício guardado':`<span class="part-bar" aria-hidden="true">${PARTS[focus].map((_,j)=>`<i${j<=k?' data-on':''}></i>`).join('')}</span><span class="part-text">${n===1?'Passo único':`Passo ${k+1} de ${n}`}</span>`+(focusLook==='aqui'?'':`<span class="place-state"> · ${LOOK_TEXT[focusLook]}</span>`);
 $('world-question').hidden=done;$('world-done').hidden=!done;$('world-example').hidden=done;
 // Lote 5.7: com uma fase aberta o mapa fica curto e cresce na passagem; a faixa curta enquadra Rumo e parada (deitado, o
 // enquadramento do 5.6 já cabe). data-stop: no celular em pé, a linha do exemplo fictício fica na primeira parada.
 $('world-stage').toggleAttribute('data-phase',!done);$('world-stage').dataset.stop=focus;syncCompact();
 // Update the stop buttons in place: rebuilding them on a field's blur would swallow the click that caused it.
 const list=$('world-nodes');
 // Lote 5.10: o nome da parada fica ao lado do círculo (no desktop todos; no tablet em pé, o da atual), com o estado embaixo.
 if(list.children.length!==STOPS.length)list.innerHTML=STOPS.map((s,i)=>`<li><button type="button" class="world-node land-${s.mark.land}" data-world-stop="${i}"></button><span class="node-name" data-name-of="${i}" aria-hidden="true"><b>${s.place}</b><small></small></span></li>`).join('');
 STOPS.forEach((s,i)=>{const b=list.children[i].firstChild,state=shownState(d.steps[i]),look=lookOf(d.steps[i],data),glyph=look==='fechada'?LOCK:LOOK_GLYPH[look]||String(i+1);
  const prev=b.dataset.state;b.dataset.state=state;b.dataset.look=look;b.toggleAttribute('aria-current',i===focus);if(i===focus)b.setAttribute('aria-current','step');
  b.setAttribute('aria-label',`Fase ${i+1} de 7, ${s.place}: ${LOOK_TEXT[look]}`);b.title=`Fase ${i+1} de 7 · ${s.place} · ${LOOK_TEXT[look]}`;
  const key=look==='fechada'?'lock':glyph;if(b.dataset.glyph!==key){b.innerHTML=`<span class="node-glyph">${glyph}</span>`;b.dataset.glyph=key;}
  const name=list.children[i].lastChild;name.dataset.look=look;name.lastChild.textContent=LOOK_TEXT[look];
  if(prev!==state)nodeEffects(b,i,prev,state);});
 worldView?.paintStops(d.steps.map(s=>({state:shownState(s),zone:STOPS[s.index].mark.land,glyph:LOOK_GLYPH[lookOf(s,data)]})));
 // QA B1 (17/10): com o exercício guardado, o rótulo do mapa diz o mesmo estado da fila ("Feita"), não "Você está aqui".
 const here=mapLayer?.querySelector('.map-here');if(here){here.firstChild.textContent=stop.place;here.lastChild.textContent=done?LOOK_TEXT[focusLook]:LOOK_TEXT.aqui;}if(mapAnchors)layoutTags(mapAnchors);
}
function setWorldStatus(text){$('world-status').textContent=text;}
function goStop(i,from=null){
 const d=worldDomain(),s=d.steps[i];if(!s)return;finishPassage();endCheer();
 // Lote 5.10: a fase fechada diz, ao lado dela (na fila ou no mapa), por que ainda não abre. O mapa fica como está: no celular,
 // fechar o mapa aberto levava a parada para fora da tela e o balão apontava para o vazio. Lote 5.11: todo caminho até uma fase
 // (fila, toque no mapa e em "Mover o mapa", teclado, toque durante a passagem) passa por aqui, com a trava de fase completa.
 if(!s.available&&!(d.recorded&&!lab.started)){worldView?.gust(i);tapRing(i);lockedNote(i,from,phaseDone(i-1,d.data)?blocker(i,d.data):i-1);return;}
 closeMap();worldView?.gust(i);// Lote 5.9: o vento sopra na parada tocada
 setWorldStatus(worldFailed||'');tapRing(i);
 if(d.recorded&&!lab.started){worldView?.select(i);return;}
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
  finishPassage();clearMissing();
  LAB_HOME[0].insertBefore(form,LAB_HOME[1]);$('experiment-back').hidden=false;
  if(worldAutoStart&&!Object.keys(lab.data).length){lab.started=false;worldAutoStart=false;}
  if(current==='experimento')renderExperiment();
 }
}
// worldFailed keeps the message so a click on a stop does not erase why the map is a picture.
function worldFallback(message){worldFailed=message;worldView?.setActive(false);$('world-viewport').dataset.fallback='true';setWorldStatus(message);$('world-camera').hidden=true;maybeTips();}
function syncWorld(){
 if(worldCelebrationPending&&(worldCelebrationPending.owner!==owner()||worldCelebrationPending.programa!==programa))worldCelebrationPending=null;
 const visible=current==='trilha'&&programa==='filho';$('bosque').hidden=!visible;placeLab(visible);
 const off=motionOff();if(!visible||off&&!mapWasOff)stopMapMotion();mapWasOff=off;
 if(!visible){closeMap(true);worldView?.setActive(false);if(tipStep>=0){tipStep=-1;closeNote(true);}else closeNote();if(guide.matches(':popover-open'))guide.hidePopover();return;}
 if(worldFailed){maybeTips();return;}
 if(!worldView){
  if(worldLoading)return;worldLoading=true;
  const script=document.createElement('script');script.src='media/world/bosque.bundle.js?v=16';
  script.onerror=()=>worldFallback('Não foi possível abrir o 3D. As paradas e as perguntas continuam disponíveis.');
  script.onload=()=>{try{buildMapLayer();worldView=Bosque.create($('world-viewport'),{onSelect:goStop,onError:worldFallback,onView:paintWorldCamera,onFrame:layoutMap,onWalk:onRumoWalk});window.mapWorld=worldView;measureInsets();$('world-viewport').dataset.ready='true';paintWorld();const done=worldDomain().recorded&&!lab.started;mapQuiet=true;worldView.select(done?6:lab.step,{instant:true});mapQuiet=false;if(done)worldView.camera('center');syncWorld();if(!done)worldView.intro();maybeTips();}catch{worldFallback('Seu navegador não abriu o 3D. Use a lista de paradas.');}};
  document.head.append(script);return;
 }
 worldView.setActive(true);worldView.setMotion(!motionOff());measureInsets();
 if(worldCelebrationPending)celebrateWorldIfPending();
 maybeTips();
}
window.refreshWorld=syncWorld;
// Lote 5.6: os botões da câmera ficam sobre a base do mapa; a câmera enquadra paradas e personagens acima deles.
// A grade de "Ajustar visão" aberta não conta: ela abre por cima e fecha logo.
function measureInsets(){
 const vp=$('world-viewport').getBoundingClientRect();if(!worldView||!vp.height)return;
 const tops=[...$('world-camera').querySelectorAll(':scope>button,.world-adjust>summary')].filter(e=>e.checkVisibility()).map(e=>e.getBoundingClientRect()).filter(r=>r.top<vp.bottom&&r.bottom>vp.top).map(r=>r.top);
 // Lote 5.10: os rótulos do mapa não ficam sob o botão "Dicas", no canto de cima.
 const g=$('world-guide-open').getBoundingClientRect();guideBox=g.width?{x:g.left-vp.left-4,y:g.top-vp.top-4,w:g.width+8,h:g.height+8}:null;
 worldView.setInsets({bottom:tops.length?Math.max(0,vp.bottom-Math.min(...tops)):0});
}
addEventListener('resize',measureInsets);
function paintWorldCamera(state){
 // Lote 5.8: uma lupa diz o que o botão faz: afastar para ver o bosque inteiro, aproximar para voltar à parada.
 // Lote 5.10: cada botão diz o que acontece ao tocar, com o mesmo texto em todo tamanho de tela.
 $('world-overview').innerHTML=(state.overview?ZOOM_IN:ZOOM_OUT)+(state.overview?'Voltar para onde estou':'Ver a trilha toda');
 $('world-explore').setAttribute('aria-pressed',String(!!state.exploring));$('world-explore').textContent=state.exploring?'Parar de mover':'Mover o mapa';
 const hint='Para mover o mapa, arraste em qualquer direção e use dois dedos para aproximar. Toque em Parar de mover quando terminar.';
 if(worldFailed)return;measureInsets();if(state.exploring)setWorldStatus(hint);else if($('world-status').textContent===hint)setWorldStatus('');
}
// A vista já mudou quando show('experimento') redesenha a pergunta, antes de o formulário sair do bosque: aí não é o bosque.
window.addEventListener('lab:step',()=>{if(!worldOwnsForm()||current!=='trilha')return;
 // Lote 5.5: Voltar e Continuar ficam presos no rodapé do bloco; a pergunta nova começa do topo. Lote 5.11: na rota do Filho
 // todo passo é respondido: "Responder depois" (que abria a fase seguinte) e "Pular" saem. O que foi escrito continua no rascunho.
 $('experiment-fields').querySelector('#lab-skip')?.remove();
 $('experiment-back').innerHTML=icon('back')+'<span class="back-label">Voltar</span>';
 // Lote 5.10: o botão de ajuda leva o nome de quem ajuda nesta fase (o guia da terra), no mesmo lugar em toda fase.
 const g=STEP_COMPANIONS[lab.step];$('lab-help').querySelector('.help-world').lastChild.textContent=`${g==='pipa'?'à':'ao'} ${ELENCO[g].name}`;
 // Passo em que a fase abre: o último ao voltar da fase seguinte, o do rascunho ao entrar na rota, senão o passo 1.
 const from=passing;passing=null;thoughtStep=-1;
 // QA B3: uma fase adiada ou sem o passo 1 respondido reabre pelo passo 1.
 showPart(enterLast&&stepValid()&&!lab.data['skip'+lab.step]?PARTS[lab.step].length-1:worldEntering&&lab.passo?.parada===lab.step?lab.passo.n:0);enterLast=false;
 if(from!==null&&lab.step===from+1&&!worldEntering)passPhase(from);
 else{mapQuiet=worldEntering;worldView?.select(lab.step,{instant:worldEntering});mapQuiet=false;}
 // Lote 5.10: a etapa nova se explica na primeira vez.
 stageNote();});
// Mostra um passo da fase atual: os blocos dos outros passos ficam com data-off (o CSS esconde), mas seguem no formulário.
function blockOf(name){
 if(name==='firstValue')return $('priority-first');if(name==='sourcePlan')return $('source-followup');// blocos que experiment.js redesenha por dentro
 const c=$('experiment-fields').querySelector(`[name="${name}"]`);return c&&(c.type==='checkbox'||c.type==='radio'?c.closest('fieldset'):c.closest('label'));
}
function partWhy(){
 if(lab.step!==2)return PART_WHY[lab.step+'.'+part]||'';
 const name=(lab.data[part===1?'aName':'bName']||'').trim();
 return `Suas respostas viram perguntas sobre ${name&&name!==DUNNO?`“${name}”`:`a possibilidade ${part===1?'A':'B'}`}.`;
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
 // Lote 5.11: o campo que o passo pede perde o "(opcional)"; os outros do passo ficam marcados. A mensagem do que faltava sai.
 f.querySelectorAll('[data-req]').forEach(b=>b.removeAttribute('data-req'));(NEED[lab.step]?.[part]||[]).forEach(n=>blockOf(n)?.setAttribute('data-req',''));clearMissing();
 $('experiment-back').hidden=lab.step===0&&!part;
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
  t.textContent=lab.data['skip'+i]?'Deixada para depois':phaseDone(i,lab.data)?'Respondida':'A investigar';});
}
function focusPart(){const f=$('experiment-fields'),t=part?f.querySelector('.part-why'):f.querySelector('h1');if(!t)return;t.tabIndex=-1;t.focus({preventScroll:true});
 $('world-live').textContent=`Passo ${part+1} de ${PARTS[lab.step].length}.`;}// QA O1: o leitor de tela ouve o passo
// Continuar dentro da fase. Lote 5.11: cada passo pede a sua resposta antes de seguir, e a fase só termina completa (um passo
// anterior que ficou vazio volta à tela com a mensagem). O último passo deixa o submit de experiment.js concluir a fase
// (rascunho guardado, próxima parada aberta) e marca a passagem para o evento lab:step. No Mirante, guardar pede as seis fases.
document.addEventListener('submit',e=>{
 // lab.data já está em dia: experiment.js o atualiza a cada input e change (ler o formulário de novo custava um quadro no celular lento).
 if(e.target.id!=='experiment-form'||!worldOwnsForm()||labSaved)return;passing=null;finishPassage();
 const last=PARTS[lab.step].length-1,hold=()=>{e.preventDefault();e.stopImmediatePropagation();};
 const k=PARTS[lab.step].findIndex((_,j)=>j<=part&&missing(lab.step,j,lab.data).length);
 if(k>=0){hold();if(k!==part)showPart(k);showMissing(missing(lab.step,k,lab.data)[0]);return;}
 if(part<last){hold();showPart(part+1);focusPart();return;}
 if(lab.step===6){const j=blocker(6,lab.data);if(j>=0){hold();reactCompanion('encourage');status('experiment-status',`Para guardar, termine a fase ${j+1} · ${STOPS[j].place}. Toque em Editar nela.`,true);return;}}
 if(lab.step<6)passing=lab.step;// QA A1: só passa de fase se o submit vai mesmo concluir a fase
},true);
// Lote 5.11: o que falta aparece junto do campo, um por vez, com ícone e texto, e o foco vai para ele; nada é conferido enquanto a
// pessoa digita. Nos campos de texto, a mensagem traz "Ainda não sei", que responde só aquele campo e não avança: se faltar outro,
// o próximo Continuar mostra a mensagem nele. Nas escolhas valem as opções que já existem ("Ainda não sei", "Definir depois").
const ALERT='<svg class="field-alert" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true"><circle cx="8" cy="8" r="7.5" fill="currentColor"/><path d="M8 4v5M8 11.6v.4" stroke="#fffdf9" stroke-width="2.2" stroke-linecap="round"/></svg>';
const control=n=>$('experiment-fields').querySelector(`[name="${n}"]`),isText=c=>!!c?.matches('textarea,input[type=text]');
function showMissing(n){
 clearMissing();reactCompanion('encourage');const c=control(n);if(!c)return;const set=c.closest('fieldset'),block=set||blockOf(n),m=document.createElement('p');
 // QA B10: no campo, o leitor de tela ouve o que falta e que existe "Ainda não sei", logo depois dele.
 m.className='field-error';m.dataset.name=n;m.innerHTML=`${ALERT}<span class="field-error-text" id="falta-${n}">${NEED_MSG[n]}</span>`+(isText(c)?`<span class="visually-hidden" id="falta-${n}-dica">Se ainda não souber, use o botão ${DUNNO}, logo depois do campo.</span>`:'');
 // Com campos lado a lado (tela larga e deitado), a mensagem fica acima da linha toda (no meio dela, quebrava a linha e descia os
 // campos) e começa na coluna do campo.
 let at=block;const top=block.getBoundingClientRect().top;for(let p=block.previousElementSibling;p;p=p.previousElementSibling){if(!p.checkVisibility())continue;if(Math.abs(p.getBoundingClientRect().top-top)<2)at=p;else break;}
 at.before(m);if(at!==block)m.style.paddingLeft=Math.max(0,Math.round(block.getBoundingClientRect().left-m.getBoundingClientRect().left))+'px';
 // QA M4: "Ainda não sei" fica no canto do próprio campo vazio, logo depois dele na ordem do teclado: na linha da mensagem ele caía
 // sobre outra pergunta, e preso à coluna estreita a mensagem crescia e fazia o passo rolar. Some quando o campo ganha resposta.
 if(isText(c)){const b=document.createElement('button'),f=$('experiment-fields');b.type='button';b.className='back field-dunno';b.dataset.for=n;b.textContent=DUNNO;block.after(b);
  const fr=f.getBoundingClientRect(),cr=c.getBoundingClientRect();b.style.maxWidth=Math.round(cr.width-8)+'px';b.style.top=Math.round(cr.top-fr.top+f.scrollTop+(cr.height-b.offsetHeight)/2)+'px';b.style.left=Math.round(cr.right-fr.left+f.scrollLeft-b.offsetWidth-4)+'px';}
 (set||c).setAttribute('aria-describedby','falta-'+n+(isText(c)?` falta-${n}-dica`:''));if(!set)c.setAttribute('aria-invalid','true');
 (set?set.querySelector('input:not(:disabled)'):c).focus({preventScroll:true});m.scrollIntoView({block:'nearest',behavior:'instant'});
}
function clearMissing(only){$('experiment-fields').querySelectorAll('.field-error').forEach(m=>{const n=m.dataset.name;if(only&&!only(n))return;const c=control(n);c?.removeAttribute('aria-invalid');(c?.closest('fieldset')||c)?.removeAttribute('aria-describedby');$('experiment-fields').querySelector(`.field-dunno[data-for="${n}"]`)?.remove();m.remove();});}
$('experiment-fields').addEventListener('click',e=>{const b=e.target.closest('.field-dunno');if(!b||!worldOwnsForm())return;const c=control(b.dataset.for);
 c.value=DUNNO;c.dispatchEvent(new Event('input',{bubbles:true}));$('experiment-next').focus({preventScroll:true});});
// Voltar dentro da fase volta um passo; no passo 1, experiment.js abre a fase anterior e ela entra pelo último passo.
document.addEventListener('click',e=>{if(!worldOwnsForm()||e.detail>1||!e.target.closest('#experiment-back'))return;finishPassage();
 if(part>0){e.preventDefault();e.stopImmediatePropagation();collectLab();showPart(part-1);focusPart();return;}
 enterLast=true;},true);
// Passagem de fase: o painel desce, o mapa ocupa a área, o Rumo anda até a próxima parada, a concluída acende e o guia
// da terra comemora; o painel sobe com a fase seguinte, já desenhada. Nada em laço. Um toque ou uma tecla pulam (finishPassage).
// Lote 5.11: a passagem comemora o que a pessoa fez: na chegada, um estouro único de confete no 3D, o Rumo e o guia comemoram,
// e o aviso diz "Fase 2 de 7 concluída" e quantos passos ela respondeu; tudo volta em 2,4 s. Movimento reduzido ou pausa trocam a
// comemoração, sem apagá-la: o mesmo aviso num fade curto, o Rumo e o guia em pose parada, sem confete, mapa crescendo ou caminhada.
function passPhase(from){
 const to=from+1,title=`Fase ${from+1} de 7 concluída`,done=`${PARTS[from].length} passos respondidos`;closeMap(true);endTips();closeNote(true);
 const vp=$('world-viewport');let note=vp.querySelector('.passage-note');if(!note){note=document.createElement('p');note.className='passage-note';note.setAttribute('aria-hidden','true');vp.append(note);}
 note.innerHTML=`<b>${title}</b><small>${done}</small>`;$('world-live').textContent=`${title}. ${done}.`;
 if(motionOff()||!worldView||worldFailed||!mapLayer){passage={from,to};worldView?.select(to,{instant:true});passage=null;if(!worldView||worldFailed||!mapLayer)quietCheer(from);return;}
 stopCompanionMotion();// a entrada da pergunta nova não roda por trás do mapa
 // QA B1: o confete e o Rumo comemorando vêm uma vez por fase concluída; voltar e terminar a fase de novo só faz a passagem.
 passage={from,to,timers:[],first:!cheered.has(from),...growMap(FX.abre)};cheered.add(from);if(mapAnchors)layoutTags(mapAnchors);
 // Lote 5.8: no desktop o quadro da caminhada guarda o guia da terra concluída, para ele aparecer comemorando.
 // Lote 5.9: a passagem acorda a parada nova (pássaros, fogueira em Agir, flores ao sair da Clareira).
 passage.timers.push(setTimeout(()=>worldView.select(to,{keep:STEP_COMPANIONS[from],passage:from}),FX.anda),setTimeout(closePassage,FX.passagem-FX.fecha));
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
new MutationObserver(()=>{const s=$('experiment-status'),ms='hold' in s.dataset?6000:2500;delete s.dataset.hold;clearTimeout(statusTimer);if(worldOwnsForm()&&s.textContent&&s.dataset.error!=='true')statusTimer=setTimeout(()=>{if(worldOwnsForm()&&s.dataset.error!=='true')s.textContent='';},ms);}).observe($('experiment-status'),{childList:true,characterData:true,subtree:true});
// Lote 5.8: o tablet em pé também. Com a trilha subindo, o bosque inteiro na faixa de 20% ficava menor que no 5.7 (paradas a
// 68 px, eram 84); com o mapa do tamanho do 5.6 elas voltam a ter espaço.
const TABLET=matchMedia('(min-width:600px) and (max-width:899px) and (orientation:portrait)');TABLET.addEventListener('change',()=>closeMap(true));// girar fecha, como no celular
const shortMap=()=>!SIDE.matches&&$('world-stage').hasAttribute('data-phase')&&($('world-viewport').getBoundingClientRect().height<170||TABLET.matches);
function resizeMap(change,duration){const vp=$('world-viewport'),h0=vp.getBoundingClientRect().height;change();const h1=vp.getBoundingClientRect().height;
 return duration&&!motionOff()&&Math.abs(h1-h0)>1?vp.animate([{height:h0+'px'},{height:h1+'px'}],{duration,easing:E.chega}):null;}
function openMap(){if(mapOpen||!shortMap())return;finishPassage();mapOpen={a:resizeMap(()=>{$('world-stage').dataset.mapa='';},FX.abre)};}
function closeMap(instant=false){
 const p=mapOpen;if(!p)return;mapOpen=null;p.a?.cancel();const s=worldView?.state();if(s?.exploring)worldView.setExplore(false);if(s?.overview)worldView.camera('focus');
 resizeMap(()=>{delete $('world-stage').dataset.mapa;},instant?0:FX.fecha);
}
function cheerOnce(name){const fig=figureOf(name);if(!fig)return;fig.dataset.state='celebrate';const run=track(name,animarGesto(fig,'celebrar',1));
 Promise.allSettled(run.map(r=>r.finished)).then(r=>{if(r.every(x=>x.status==='fulfilled'))fig.dataset.state='welcome';});}
// Na chegada (at, a parada nova): a parada concluída acende, o confete estoura sobre o Rumo e o guia da terra concluída comemora;
// o Rumo comemora depois do pouso (quando ele é o guia, o gesto já é dele).
const cheered=new Set();// fases já comemoradas nesta visita
function celebratePhase(from,at){
 const first=passage?.first!==false;popRing(from,FX.destrava);if(first)worldView?.confetti(at);const name=STEP_COMPANIONS[from],fig=figureOf(name);
 if(fig&&name!=='rumo'){stopRuns(name);faceTo(fig,mapAnchors.rumo.x,mapAnchors.guides[name].x);}// o pouso do Rumo continua quando ele é o guia
 cheerOnce(name);if(first&&name!=='rumo')later(()=>{if(passage)cheerOnce('rumo');},FX.pouso,'festa-rumo');
}
// Movimento reduzido ou pausa: o aviso aparece num fade curto (o mesmo do Rumo) e fica o tempo da passagem; Rumo e guia em pose.
// QA M3: no mapa curto do celular (abaixo de 200 px) o aviso cobria o Rumo em qualquer lugar; ali o mesmo texto vai para a faixa de
// mensagens da pergunta, que sai sozinha em 2,5 s.
function quietCheer(from){
 const st=$('world-stage'),note=$('world-viewport').querySelector('.passage-note'),figs=[...new Set(['rumo',STEP_COMPANIONS[from]])].map(figureOf).filter(Boolean);
 if(shortStrip())status('experiment-status',`${note.firstChild.textContent}. ${note.lastChild.textContent}.`);
 else{st.dataset.cheer='';note?.animate([{opacity:0},{opacity:1}],{duration:FX.fade});if(mapAnchors)layoutTags(mapAnchors);}
 figs.forEach(f=>pose(f,'celebrar'));
 later(()=>{delete st.dataset.cheer;figs.forEach(f=>pose(f,'repouso'));if(mapAnchors)layoutTags(mapAnchors);},FX.passagem,'festa-fase');
}
function endCheer(){const st=$('world-stage');if(!('cheer' in st.dataset))return;delete st.dataset.cheer;clearTimeout(mapTimers.get('festa-fase'));mapTimers.delete('festa-fase');MAP_CAST.map(figureOf).forEach(f=>f&&pose(f,'repouso'));if(mapAnchors)layoutTags(mapAnchors);}
function closePassage(){
 const p=passage;if(!p?.el||p.closing)return;p.closing=true;worldView?.setKeep(null);$('world-stage').dataset.closing='';
 const back=p.el.animate(p.back,{duration:FX.fecha,easing:E.chega,fill:'forwards'});p.anims.push(back);
 back.finished.then(()=>{if(passage===p)endPassage();},()=>{});
}
function endPassage(){const p=passage;if(!p)return;passage=null;p.timers?.forEach(clearTimeout);p.anims?.forEach(a=>a.cancel());const st=$('world-stage');delete st.dataset.passage;delete st.dataset.closing;if(mapAnchors)layoutTags(mapAnchors);setTimeout(stageNote);}
// Pular: o Rumo fica na parada nova, o guia volta ao repouso, o confete sai e o painel aparece sem transição.
function finishPassage(){
 const p=passage;if(!p?.el)return;const st=$('world-stage');
 if(worldView?.state().hop||worldView?.state().selected!==p.to)worldView?.select(p.to,{instant:true});
 clearTimeout(mapTimers.get('festa-rumo'));mapTimers.delete('festa-rumo');worldView?.endConfetti();
 stopRuns(STEP_COMPANIONS[p.from]);stopRuns('rumo');stopRuns('fx');st.dataset.instant='';endPassage();void st.offsetHeight;delete st.dataset.instant;
}
// Lote 5.8: um toque ou uma tecla terminam a entrada do desktop na parada atual, aproximando em 0,5 s. Toque no 3D e nos
// botões da câmera fica com eles: o renderer escolhe a parada com a câmera que está na tela (QA A1) e "Voltar à parada" aproxima
// de onde a câmera está (QA A2).
addEventListener('pointerdown',e=>{if(!e.target.closest?.('#world-camera,#world-viewport canvas'))worldView?.skipIntro();},true);addEventListener('keydown',()=>worldView?.skipIntro(),true);
// QA B6: tocar numa parada da fila durante a passagem abre essa parada (a fila muda de lugar quando o mapa encolhe).
addEventListener('pointerdown',e=>{if(!passage?.el)return;const s=e.target.closest?.('[data-world-stop]');finishPassage();if(s)goStop(Number(s.dataset.worldStop),s);},true);
// QA M2: a tecla que pula a passagem não rola a página (o foco está no título da fase nova).
addEventListener('keydown',e=>{if(!passage?.el)return;finishPassage();if([' ','Enter','ArrowDown','ArrowUp','PageDown','PageUp','Home','End'].includes(e.key))e.preventDefault();},true);
// On document, so experiment.js has already collected the field when the map repaints.
// Lote 5.11: respondido o campo, a mensagem do que faltava nele sai; nenhuma mensagem nova aparece enquanto se digita.
document.addEventListener('input',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form')){worldAutoStart=false;clearMissing(n=>filled(lab.data[n]));paintWorld();
 // Pessoa digitando: o guia da terra faz a pose de pensar uma vez por parada.
 if(thoughtStep!==lab.step&&e.target.matches('textarea,input:not([type=radio]):not([type=checkbox])')){thoughtStep=lab.step;think();}}});
document.addEventListener('change',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form')){clearMissing(n=>filled(lab.data[n]));paintWorld();}});
$('world-nodes').onclick=e=>{const name=e.target.closest('[data-name-of]'),button=name?name.previousSibling:e.target.closest('[data-world-stop]');if(button)goStop(Number(button.dataset.worldStop),button);};
$('world-overview').onclick=()=>{if(!worldView)return;if(mapOpen&&worldView.state().overview){closeMap();return;}openMap();worldView.camera(worldView.state().overview?'focus':'center',{animate:true});};// Lote 5.8: no desktop, com zoom em movimento
$('world-explore').onclick=()=>{if(!worldView)return;if(mapOpen&&worldView.state().exploring){closeMap();return;}openMap();worldView.setExplore(!worldView.state().exploring);};
$('world-camera').querySelector('.world-adjust').onclick=e=>{const button=e.target.closest('[data-camera]');if(button)worldView?.camera(button.dataset.camera);};
$('world-example').onclick=()=>{worldAutoStart=false;$('experiment-example').click();};
$('world-restart').onclick=()=>{cheered.clear();lab={owner:owner(),programa,step:0,data:{},started:true};labSaved=false;worldAutoStart=true;renderLabStep(0);focusLab();};
// Lote 5.11: guardar a trilha inteira no bosque abre, depois de gravar, a comemoração de tela cheia sobre a tela "Resposta
// guardada" (experiment.js já foi para ela quando a microtarefa roda). Falha ao gravar não dispara o evento e não comemora.
window.addEventListener('mapa:saved',e=>{if(e.detail?.programa!=='filho')return;worldCelebrationPending=e.detail;if(worldOwnsForm()&&current==='trilha')queueMicrotask(()=>openTrail(e.detail.recordId));});
// O Rumo grande comemora (pop e o gesto do 5.3, duas vezes), o confete cai por até 5 s e o quadro fica parado, com o que a pessoa
// fez: as duas possibilidades, a pergunta e o pequeno passo. "Continuar" está à vista desde o primeiro quadro e leva à tela
// "Resposta guardada"; Esc também. Movimento reduzido ou pausa: o mesmo quadro, parado, com o Rumo na pose de comemorar.
const trail=$('trail-done');let trailRuns=[];trail.querySelector('.trail-rumo').innerHTML=companion('rumo','welcome');
function openTrail(id){
 const r=answers().find(a=>a.id===id)?.experimento?.respostas;if(!r||current!=='pronta'||trail.open)return;
 // QA M1: "Ainda não sei" não vira nome, pergunta nem passo no resumo: o nome volta a "Possibilidade A" (ou B), a pergunta sai e o
 // passo fica com a ação escolhida.
 const known=v=>filled(v)&&v!==DUNNO,plan=known(r.actionPlan)?r.actionPlan:r.action;
 $('trail-done-summary').innerHTML=[['Você comparou',`${known(r.aName)?r.aName:'Possibilidade A'} e ${known(r.bName)?r.bName:'Possibilidade B'}`],['Sua pergunta',known(r.question)&&r.question],['Seu pequeno passo',plan]].filter(([,v])=>v).map(([t,v])=>`<div><dt>${t}</dt><dd>${esc(v)}</dd></div>`).join('');
 trail.showModal();const fig=trail.querySelector('.trail-rumo .companion');
 if(motionOff()){pose(fig,'celebrar');return;}
 pose(fig,'repouso');const H=trail.clientHeight,layer=trail.querySelector('.trail-confetti');
 layer.innerHTML=Array.from({length:48},(_,j)=>`<i style="left:${(j*37+11)%100}%;background:${LOW[j%5]}"></i>`).join('');
 trailRuns=[trail.querySelector('.trail-rumo').animate([{transform:'scale(.6)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:300,easing:E.mola}),
  ...animarGesto(fig,'celebrar',1).map(a=>(a.effect.updateTiming({delay:300}),a)),...animarGesto(fig,'celebrar',1).map(a=>(a.effect.updateTiming({delay:1100}),a)),
  // Cada peça cai uma vez, girando no plano (sem virar de face), e some ao chegar embaixo: a última termina antes de 5 s.
  ...[...layer.children].map((p,j)=>{const dx=(j%7-3)*16;return p.animate([{transform:'translate(0,-24px) rotate(0deg)',opacity:1},{transform:`translate(${dx}px,${Math.round(H*.6)}px) rotate(${160+j*19}deg)`,opacity:1,offset:.65},{transform:`translate(${dx*1.4}px,${H+24}px) rotate(${260+j*29}deg)`,opacity:0}],{duration:2600+(j*173)%1500,delay:(j*97)%700,easing:'linear',fill:'both'});})];
 // Depois do confete o Rumo fica parado na pose de comemorar.
 Promise.allSettled(trailRuns.map(a=>a.finished)).then(r=>{if(trail.open&&r.every(x=>x.status==='fulfilled'))pose(fig,'celebrar');});
}
$('trail-done-ok').onclick=()=>trail.close();
trail.addEventListener('close',()=>{trailRuns.forEach(a=>a.cancel());trailRuns=[];trail.querySelector('.trail-confetti').innerHTML='';
 if(current==='pronta'){const h=$('pronta').querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true});}});
// QA A1: as ações ficam no mesmo lugar ao trocar de pergunta. O segundo clique de um duplo clique (ou toque duplo), que o
// navegador marca com detail > 1, não avança de novo nem grava a revisão sem que ela apareça.
$('experiment-form').addEventListener('click',e=>{if(worldOwnsForm()&&e.detail>1&&e.target.closest('#experiment-next,.field-dunno,#experiment-back')){e.preventDefault();e.stopImmediatePropagation();}},true);
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
// Lote 5.9: com um campo de texto em foco, o cenário entra em calmaria (vento e bichos no mínimo), em qualquer tela.
const syncTyping=()=>{const on=typingField(document.activeElement);$('world-stage').toggleAttribute('data-typing',on);worldView?.setCalm(on);};
function afterPress(fn){const go=()=>{removeEventListener('pointerup',go,true);removeEventListener('pointercancel',go,true);setTimeout(fn);};addEventListener('pointerup',go,true);addEventListener('pointercancel',go,true);}
addEventListener('pointerdown',()=>{pressing=true;},true);addEventListener('pointerup',()=>{pressing=false;},true);addEventListener('pointercancel',()=>{pressing=false;},true);
const portrait=matchMedia('(max-width:899px) and (orientation:portrait)');
// O campo sobe para o alto da área da pergunta, acima de onde o teclado abre. Só a área interna rola, nunca a página.
document.addEventListener('focusin',e=>{if(!typingField(e.target))return;syncTyping();
 if(portrait.matches){const f=$('experiment-fields'),box=(e.target.closest('label')||e.target).getBoundingClientRect();f.scrollTop+=box.top-f.getBoundingClientRect().top-8;}});
document.addEventListener('focusout',e=>{if(!typingField(e.target))return;if(pressing)afterPress(syncTyping);else setTimeout(syncTyping);});
reduce.addEventListener('change',syncWorld);
new MutationObserver(syncWorld).observe(document.body,{attributes:true,attributeFilter:['data-motion','data-view']});

// Lote 5.10: balão de fala. O Rumo dá as dicas da primeira visita e explica cada etapa na primeira vez; o personagem tocado diz
// para que serve; a fase fechada diz por que não abre. Fica na camada de cima (popover), ao lado do elemento real, sem mudar o
// layout nem a rolagem. Some com "Entendi", com um toque em qualquer lugar (que segue para o que foi tocado) ou com Esc; com
// movimento reduzido ou pausa, aparece sem animação. Nada volta sozinho: o que já foi visto fica guardado neste navegador
// (pc-dicas-v1, chave nova) e o botão "Dicas" reabre as dicas e a legenda.
const SEEN_KEY='pc-dicas-v1',seenNow={};
const isSeen=k=>!!(read(SEEN_KEY,{})?.[k]||seenNow[k]);
function markSeen(...keys){keys.forEach(k=>seenNow[k]=true);const v=read(SEEN_KEY,{});write(SEEN_KEY,{...(v&&typeof v==='object'&&!Array.isArray(v)?v:{}),...seenNow});}
const STAGE_WHY={Mapear:'conhecer possibilidades antes de escolher',Analisar:'reunir informações e ver o que ainda falta saber',Priorizar:'escolher a dúvida que vale investigar primeiro',Agir:'planejar um passo pequeno e testar'};
const ROLE={rumo:'eu ando com você pela trilha e ajudo na fase da Bifurcação.',bino:'eu ajudo nas fases da Clareira e do Moinho, a reparar no que te dá curiosidade.',
 pipa:'eu ajudo nas fases da Ponte e da Placa, a comparar possibilidades.',teo:'eu ajudo nas fases do Acampamento e do Mirante, a planejar um passo de cada vez.'};
// A legenda mostra os estados que a rota do Filho produz (Lote 5.11: sem "Deixada para depois").
const LOOK_HELP={aqui:'A fase aberta agora.',feita:'Todos os passos estão respondidos.',comecada:'Tem resposta, mas ainda falta passo.',fechada:'Abre quando você terminar a fase anterior.',aberta:'Ainda sem resposta. O número é a ordem da fase.'};
const tip=document.createElement('div');tip.id='world-tip';tip.className='world-tip';tip.popover='manual';tip.setAttribute('role','dialog');tip.setAttribute('aria-labelledby','world-tip-text');
tip.innerHTML='<span class="tip-face" aria-hidden="true"></span><div class="tip-body"><p id="world-tip-text" class="tip-text"></p><div class="tip-foot"><span class="tip-count"></span><button type="button" class="tip-ok">Entendi</button></div></div>';
$('bosque').append(tip);
let note=null,tipStep=-1;
const bosqueOn=()=>current==='trilha'&&programa==='filho'&&!$('bosque').hidden;
const rectOf=e=>e?.getBoundingClientRect();
function openNote(n){
 // Um toque numa fase fechada ou num personagem no meio das dicas encerra as dicas como vistas: a sequência ficava pela metade,
 // sem balão e sem marcar nada (achado reproduzido em 390×844). "Dicas" reabre.
 if(n.kind!=='dica'&&tipStep>=0)endTips();
 closeNote(true);note=n;tip.dataset.kind=n.kind;const face=tip.querySelector('.tip-face');face.hidden=!n.face;face.innerHTML=n.face?companion(n.face,'welcome'):'';
 tip.querySelector('.tip-text').innerHTML=n.html;tip.querySelector('.tip-count').textContent=n.count||'';tip.querySelector('.tip-foot').hidden=!n.ok;
 tip.showPopover();placeNote();$('world-live').textContent=tip.querySelector('.tip-text').textContent;
 if(!motionOff())tip.animate([{opacity:0,translate:'0 6px'},{opacity:1,translate:'0 0'}],{duration:160,easing:E.chega});
}
function closeNote(silent=false){const n=note;if(!n)return;note=null;if(tip.matches(':popover-open'))tip.hidePopover();if(!silent)n.onClose?.();}
// Ao lado do alvo: embaixo ou em cima (na ordem pedida), e por cima dele só se não couber; a ponta aponta para o alvo.
function placeNote(){
 if(!note)return;const r=note.target();if(!r||!r.width&&!r.height){closeNote(true);return;}
 const vw=document.documentElement.clientWidth,vh=innerHeight,b=tip.getBoundingClientRect(),g=14,m=8,ax=note.x?.()??r.left+r.width/2;
 const spots={below:r.bottom+g,above:r.top-g-b.height},side=(note.prefer||['below','above']).find(s=>spots[s]>=m&&spots[s]+b.height<=vh-m)||'over';
 const top=side==='over'?Math.max(m,Math.min(vh-m-b.height,r.top+r.height/2-b.height/2)):spots[side],left=Math.max(m,Math.min(vw-m-b.width,ax-b.width/2));
 tip.style.left=left+'px';tip.style.top=top+'px';tip.dataset.side=side;tip.style.setProperty('--tail',Math.max(22,Math.min(b.width-22,ax-left))+'px');
}
addEventListener('resize',placeNote);addEventListener('scroll',placeNote,{passive:true,capture:true});
// As três dicas: o bosque (pelo Rumo), as fases com a atual e o topo da pergunta, que também explica a etapa.
const centerX=e=>()=>{const r=rectOf(e());return r.left+r.width/2;};
const rumoEl=()=>figureOf('rumo')||$('world-viewport'),nodeEl=()=>$('world-nodes').querySelector('[aria-current]')||$('world-nodes'),stageEl=()=>$('world-place-stage');
function tipList(){
 const s=STOPS[lab.step].mark.id,list=[
  // QA M3 (17/10): no mapa curto do celular em pé, a dica 1 fica abaixo do cartão do mapa, e o bosque e a fila ficam à vista.
  // QA M5: só "fase" para cada parada da trilha na rota do Filho.
  {html:'Este é o bosque. Eu sou o Rumo e ando com você pela trilha, de uma fase para a outra.',target:()=>shortStrip()?rectOf($('world-viewport').parentElement):rectOf(rumoEl()),x:centerX(rumoEl),prefer:['below','above']},
  {html:'Estas são as 7 fases. Você está nesta.',target:()=>rectOf(nodeEl()),x:centerX(nodeEl),prefer:['above','below']},
  {html:`Esta fase é de ${s}: ${STAGE_WHY[s]}. Responda aqui embaixo e toque em Continuar para seguir.`,target:()=>rectOf(stageEl()),x:centerX(stageEl),prefer:['below','above']}];
 return worldDomain().recorded&&!lab.started?list.slice(0,2):list;// exercício guardado: não há o que responder
}
let tipAt=0;// QA M2 (17/10): o balão muda de lugar ao passar a dica, e o segundo toque de um toque duplo caía fora dele
function showTip(i){const list=tipList();tipStep=i;tipAt=performance.now();openNote({kind:'dica',face:'rumo',ok:true,count:`Dica ${i+1} de ${list.length}`,...list[i]});}
function nextTip(){if(tipStep<0)return;if(tipStep+1<tipList().length)showTip(tipStep+1);else endTips();}
function endTips(){if(tipStep<0)return;tipStep=-1;closeNote(true);markSeen('dicas','etapa-'+STOPS[lab.step].mark.id);}
// Depois da câmera de entrada (5.8), que já mostra o bosque inteiro: as dicas esperam a câmera e o Rumo pararem.
function whenStill(fn,t0=performance.now()){const s=worldView?.state();if(s&&(s.intro||s.cam||s.hop)&&performance.now()-t0<8000){setTimeout(()=>whenStill(fn,t0),120);return;}fn();}
function maybeTips(){if(isSeen('dicas')||tipStep>=0||!bosqueOn())return;setTimeout(whenStill,60,()=>{if(!isSeen('dicas')&&tipStep<0&&!note&&bosqueOn()&&!passage?.el)showTip(0);});}
// A etapa nova (Analisar, Priorizar, Agir) se explica numa frase na primeira vez, depois da passagem de fase.
function stageNote(){
 if(!bosqueOn()||tipStep>=0||note||passage?.el||!isSeen('dicas')||worldDomain().recorded&&!lab.started)return;
 const s=STOPS[lab.step].mark.id;if(isSeen('etapa-'+s))return;
 openNote({kind:'etapa',face:'rumo',ok:true,html:`Agora começa ${s}: ${STAGE_WHY[s]}.`,target:()=>rectOf(stageEl()),x:centerX(stageEl),prefer:['below','above'],onClose:()=>markSeen('etapa-'+s)});
}
function roleNote(name){
 const fig=figureOf(name);if(!fig)return;
 openNote({kind:'papel',face:name,html:`<b>${ELENCO[name].name}:</b> ${ROLE[name]}`,target:()=>rectOf(fig),prefer:['above','below']});
 if(!motionOff()&&!mapRuns.get(name)?.some(a=>a.playState==='running'))track(name,animarGesto(fig,'acolher',1));
}
// Lote 5.11: a fase espera todas as anteriores completas; quando a anterior está feita e falta uma mais atrás, o balão diz qual.
function lockedNote(i,from,j=i-1){
 const target=from?()=>rectOf(from):()=>{const v=rectOf($('world-viewport')),p=mapAnchors?.stops[i];return p?new DOMRect(v.left+p.x-22,v.top+p.y-44,44,44):v;};
 openNote({kind:'fechada',html:`<b>Fase ${i+1} de 7 · ${STOPS[i].place}</b> Abre quando você terminar ${j<0||j===i-1?'a fase anterior':`a fase ${j+1}, ${STOPS[j].place}`}.`,target,prefer:['above','below']});
}
// QA M2 (17/10): o segundo clique de um duplo clique (ou toque duplo) em "Entendi" não pula a dica seguinte.
tip.querySelector('.tip-ok').onclick=e=>{if(e.detail>1)return;if(note?.kind==='dica')nextTip();else closeNote();};
const shortStrip=()=>!SIDE.matches&&$('world-viewport').getBoundingClientRect().height<200;
// Um toque em qualquer lugar, menos no "Entendi", passa a dica ou fecha o balão. Os balões só de informação (fase fechada,
// papel do personagem) não recebem toque: ele segue para o que está embaixo, como o "Ver a trilha toda" no mapa curto do
// celular, que o balão da fase fechada cobria (achado da suíte rota-uma-tela, A2 em 360×660).
addEventListener('pointerdown',e=>{if(!note||e.target.closest?.('.tip-ok'))return;if(note.kind==='dica'){if(performance.now()-tipAt>400)nextTip();}else closeNote();},true);
addEventListener('keydown',e=>{if(e.key!=='Escape'||!note)return;if(note.kind==='dica')endTips();else closeNote();});
// Legenda: os estados com o mesmo símbolo e o mesmo nome da fila e do mapa, as etapas e quem é quem; e as dicas de novo.
const guide=$('world-guide');
function paintGuide(){
 const sample=l=>`<span class="world-node" data-look="${l}" aria-hidden="true"><span class="node-glyph">${l==='fechada'?LOCK:LOOK_GLYPH[l]||(l==='aqui'?'1':'2')}</span></span>`;
 // QA M8 (17/10): "Fechar" fica preso no topo da legenda, à vista sem rolar. QA M10: a cor de cada etapa ao lado do nome, a
 // mesma da borda das fases na fila.
 guide.innerHTML=`<div class="guide-head"><h2 id="world-guide-title">Como ler a trilha</h2><button type="button" class="back" id="guide-close">Fechar</button></div><ul class="guide-looks">${Object.keys(LOOK_HELP).map(l=>`<li>${sample(l)}<span><b>${LOOK_TEXT[l]}</b><small>${LOOK_HELP[l]}</small></span></li>`).join('')}</ul>`+
  `<h3>As 4 etapas</h3><p class="guide-note">A borda de cada fase na fila tem a cor da etapa dela.</p><ul class="guide-stages">${MARCAS.map(m=>`<li><span class="stage-dot land-${m.land}" aria-hidden="true"></span><span><b>${m.id}:</b> ${STAGE_WHY[m.id]}.</span></li>`).join('')}</ul>`+
  `<h3>Quem é quem</h3><ul class="guide-cast">${['rumo','bino','pipa','teo'].map(n=>`<li><span class="tip-face" aria-hidden="true">${companion(n,'welcome')}</span><span><b>${ELENCO[n].name}:</b> ${ROLE[n]}</span></li>`).join('')}</ul>`+
  '<div class="guide-actions"><button type="button" class="btn" id="guide-tips">Ver as dicas de novo</button></div>';
}
guide.addEventListener('beforetoggle',e=>{if(e.newState!=='open')return;endTips();closeNote(true);paintGuide();});
guide.addEventListener('toggle',e=>{if(e.newState!=='open')return;const b=rectOf($('world-guide-open')),g=guide.getBoundingClientRect(),m=8,vw=document.documentElement.clientWidth;
 guide.style.left=Math.max(m,Math.min(vw-m-g.width,b.left))+'px';guide.style.top=Math.max(m,Math.min(innerHeight-m-g.height,b.bottom+8))+'px';});
guide.addEventListener('click',e=>{if(e.target.closest('#guide-close'))guide.hidePopover();if(e.target.closest('#guide-tips')){guide.hidePopover();showTip(0);}});
