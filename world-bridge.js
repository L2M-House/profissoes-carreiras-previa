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
 if(pending?.owner===owner()&&pending.programa===programa&&answers().some(a=>a.id===pending.recordId&&a.quem===owner()&&a.programa===programa&&a.experimento)){worldView.camera('center');worldView.gesture('celebrate');return true;}
 return false;
}
function paintWorld(){
 const d=worldDomain(),done=d.recorded&&!lab.started,focus=done?6:lab.step,stop=STOPS[focus];
 $('world-place-zone').textContent=`${stop.mark.id} · ${stop.mark.deg} · ${stop.place}`;
 $('world-place-state').textContent=done?'Exercício guardado':`Parada ${focus+1} de 7 · ${STATE_TEXT[shownState(d.steps[focus])]}`;
 $('world-question').hidden=done;$('world-done').hidden=!done;$('world-example').hidden=done;
 // Update the stop buttons in place: rebuilding them on a field's blur would swallow the click that caused it.
 const list=$('world-nodes');
 if(list.children.length!==STOPS.length)list.innerHTML=STOPS.map((s,i)=>`<li><button type="button" class="world-node land-${s.mark.land}" data-world-stop="${i}"></button></li>`).join('');
 STOPS.forEach((s,i)=>{const b=list.children[i].firstChild,state=shownState(d.steps[i]),glyph={guardado:'✓',rascunho:'✎',adiado:'↷',bloqueada:LOCK}[state]||String(i+1);
  b.dataset.state=state;b.toggleAttribute('aria-current',i===focus);if(i===focus)b.setAttribute('aria-current','step');
  b.setAttribute('aria-label',`${i+1}. ${s.name}, ${s.place}, ${s.mark.id}: ${STATE_TEXT[state]}`);b.title=`${s.mark.id} · ${s.name} · ${STATE_TEXT[state]}`;
  const key=state==='bloqueada'?'lock':glyph;if(b.dataset.glyph!==key){b.innerHTML=glyph;b.dataset.glyph=key;}});
 worldView?.paintStops(d.steps.map(s=>({state:shownState(s),zone:STOPS[s.index].mark.land})));
}
function setWorldStatus(text){$('world-status').textContent=text;}
function goStop(i){
 const d=worldDomain(),s=d.steps[i];if(!s)return;setWorldStatus(worldFailed||'');
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
 if(!visible){worldView?.setActive(false);return;}
 if(worldFailed)return;
 if(!worldView){
  if(worldLoading)return;worldLoading=true;
  const script=document.createElement('script');script.src='media/world/bosque.bundle.js?v=5';
  script.onerror=()=>worldFallback('Não foi possível abrir o 3D. As paradas e as perguntas continuam disponíveis.');
  script.onload=()=>{try{worldView=Bosque.create($('world-viewport'),{onSelect:goStop,onError:worldFallback,onView:paintWorldCamera});window.mapWorld=worldView;$('world-viewport').dataset.ready='true';paintWorld();const done=worldDomain().recorded&&!lab.started;worldView.select(done?6:lab.step,{instant:true});if(done)worldView.camera('center');syncWorld();}catch{worldFallback('Seu navegador não abriu o 3D. Use a lista de paradas.');}};
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
window.addEventListener('lab:step',()=>{if(!worldOwnsForm())return;$('experiment-back').hidden=lab.step===0;paintWorld();worldView?.select(lab.step,{instant:worldEntering});});
// On document, so experiment.js has already collected the field when the map repaints.
document.addEventListener('input',e=>{if(worldOwnsForm()&&e.target.closest('#experiment-form')){worldAutoStart=false;paintWorld();}});
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
