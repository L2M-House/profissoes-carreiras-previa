// Rumo vem do elenco do Lote 5.3 (elenco.js), o mesmo desenho em todo lugar.
const rumo=()=>castSVG('rumo');


const MARCAS = [
 {id:'Mapear',nome:'Mapear possibilidades',verbo:'Explorar',deg:'000°',land:'leaf',art:'explorar',purpose:'Abrir espaço para conhecer possibilidades antes de escolher.'},
 {id:'Analisar',nome:'Analisar informações',verbo:'Organizar',deg:'090°',land:'coral',art:'organizar',purpose:'Reunir informações e olhar para o que ainda precisa ser conhecido.'},
 {id:'Priorizar',nome:'Priorizar alternativas',verbo:'Selecionar',deg:'180°',land:'sun',art:'selecionar',purpose:'Olhar para as alternativas e para o que importa na escolha.'},
 {id:'Agir',nome:'Agir',verbo:'Planejar',deg:'270°',land:'ink',art:'planejar',purpose:'Pensar nos próximos passos para seguir explorando.'}
];
const SEED = [
  ["s1", "Mapear", "pais", "Visão geral de Mapear", "O texto da metodologia ainda não entrou. Os pais veem esta marca por cima: Mapear possibilidades, explorar."],
  ["s2", "Analisar", "pais", "Visão geral de Analisar", "O texto da metodologia ainda não entrou. Os pais veem esta marca por cima: Analisar informações, organizar."],
  ["s3", "Mapear", "filho", "Passo de Mapear", "O texto da metodologia ainda não entrou. O filho percorre Mapear possibilidades em etapas. As subtarefas ainda não têm nome."],
  ["s4", "Analisar", "filho", "Passo de Analisar", "O texto da metodologia ainda não entrou. O filho organiza a informação quando a Anaí mandar as subtarefas."],
].map(([id, etapa, programa, nome, texto]) => ({ id, etapa, programa, nome, texto }));

const KEY='pc-aulas-v1', SES='pc-session', ANS='pc-respostas-v1', RUMOS='pc-rumos-v1', DRAFT='pc-drafts-v1';
const VIEWS=['inicio','entrar','painel','trilha','aula','licao','pronta','experimento'];
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function read(key,fallback,store=localStorage){try{return JSON.parse(store.getItem(key))??fallback;}catch{return fallback;}}
function write(key,value,store=localStorage){try{store.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
function aulas(){const x=read(KEY,[]);return Array.isArray(x)?x.filter(a=>a&&typeof a.id==='string'&&MARCAS.some(m=>m.id===a.etapa)&&['pais','filho'].includes(a.programa)):[];}
function answers(){const x=read(ANS,[]);return Array.isArray(x)?x.filter(a=>a&&typeof a==='object'):[];}
function session(){return read(SES,null,sessionStorage);}
function rumos(){return Math.max(Number(read(RUMOS,0))||0,...answers().map(a=>Number(a.rumo)||0));}
function owner(){return session()?.nome||'Família';}
function status(id,text,error=false){$(id).textContent=text;$(id).dataset.error=String(error);}
const icons={home:'M3 10 12 3l9 7v11h-6v-7H9v7H3Z',map:'m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Zm6-2v16m6-14v16',book:'M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-2-7-1-10 1Zm0 0v16',edit:'m4 16 12-12 4 4L8 20H4Zm10-10 4 4',user:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-3a8 8 0 0 1 16 0v3',users:'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 21v-3a8 8 0 0 1 16 0v3m0-17a4 4 0 0 1 0 8m3 9v-3a7 7 0 0 0-3-6',arrow:'M4 12h16m-6-6 6 6-6 6',back:'M20 12H4m6-6-6 6 6 6',compass:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-6-3-2 4-4 2 2-4Z',sun:'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2',lock:'M6 10h12v11H6Zm2 0V6a4 4 0 0 1 8 0v4',info:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10v1',pause:'M8 4v16M16 4v16',check:'m5 12 4 4L19 6'};
function icon(name){return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[name]||icons.compass}"/></svg>`;}
function fillIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
let programa='pais',selectedMark='Analisar',aberta=null,saved=false;
let current='inicio';
history.scrollRestoration='manual';
function context(){return {view:current,programa,selectedMark,lesson:aberta,receipt:saved};}
function remember(){write('pc-view-v1',context(),sessionStorage);history.replaceState(context(),'',`#${current}`);}
function show(id,{replace=false,focus=true,fromHistory=false}={}){
 if(!VIEWS.includes(id))id='inicio';
 if(id==='aula'&&session()?.papel!=='anai')id='entrar';
 if((id==='licao'&&!aberta)||(id==='pronta'&&!saved))id='trilha';
 stopCompanionMotion();if($("helper-dialog").open)$("helper-dialog").close();if($('trail-done').open)$('trail-done').close();current=id;document.body.dataset.view=id;
 VIEWS.forEach(v=>$(v).hidden=v!==id);
 if(id==='trilha')renderCourse();
 if(id==='painel')paintPainel();
 if(id==='aula')renderAulas();
 if(id==='licao')paintLesson();
 if(id==='experimento')renderExperiment();
 // Lote 5.11: o vídeo do Rumo antigo saiu da tela (decisão 5); quem comemora é o Rumo do elenco, aqui e na tela cheia do bosque.
 if(id==='pronta'){ $('stat-rumos').textContent=rumos();$('stat-rumos-label').textContent=rumos()===1?'registro guardado':'registros guardados'; }
 document.querySelectorAll('nav [data-go]').forEach(b=>{if(b.dataset.go===id)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
 const heading=$(id).querySelector('h1');document.title=`${heading?.textContent||'MAPA'} · Anaí Auada`;
 if(!fromHistory){history[replace?'replaceState':'pushState'](context(),'',replace&&id==='inicio'&&!location.hash?location.href:`#${id}`);}
 write('pc-view-v1',context(),sessionStorage);
 window.scrollTo({top:0,behavior:'instant'});
 if(focus&&heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}window.refreshWorld?.();
 if(id==='trilha'&&programa==='filho')window.scrollToWorld?.();// Lote 5.5: a rota do Filho para no bloco do bosque
}
function setPrograma(p){programa=p==='filho'?'filho':'pais';document.body.dataset.programa=programa;document.querySelector('.map-overview-title').textContent=programa==='filho'?'Aulas da Anaí em cada etapa':'As quatro etapas do MAPA';$('dock-lab').hidden=programa==='filho';$('tab-pais').setAttribute('aria-pressed',programa==='pais');$('tab-filho').setAttribute('aria-pressed',programa==='filho');$('trail-description').textContent=programa==='pais'?'Pais · visão geral das quatro etapas.':'Filho · sete fases no bosque. Toque numa delas para responder.';}
function courseHTML(){return `<div class="row ${programa==='filho'?'has-substeps':''}">${MARCAS.map((m,i)=>`${i&&programa==='filho'?'<span class="tick" aria-hidden="true"></span><span class="tick" aria-hidden="true"></span>':''}<div class="stop land-${m.land}"><button type="button" class="station" data-stage="${m.id}" aria-pressed="${selectedMark===m.id}" aria-label="${m.nome}, ${m.verbo}">${m.id==='Analisar'?`<span class="pin">${rumo()}</span>`:''}<img src="media/mapa/${m.art}.svg" class="stage-art" width="72" height="72" alt=""><span class="gem"><em>${i+1}</em></span><span class="station-degree">${m.deg}</span><b>${m.id}</b><small>${m.verbo}</small></button></div>`).join('')}</div>`;}
function renderCourse(){setPrograma(programa);$('trail').innerHTML=courseHTML();paintDock();paintAvatar();paintScrollHint();window.refreshWorld?.();}
function paintScrollHint(){const t=$('trail');document.querySelector('.map-scroll-hint').hidden=t.scrollWidth<=t.clientWidth+1;}
addEventListener('resize',paintScrollHint);
function paintDock(){const m=MARCAS.find(m=>m.id===selectedMark);$('map-dock').className=`dock land-${m.land}`;$('dock-art').src=`media/mapa/${m.art}.svg`;$('dock-deg').textContent=m.deg;$('dock-verbo').textContent=m.verbo;$('dock-nome').textContent=m.nome;$('dock-purpose').textContent=m.purpose;$('dock-note').textContent=programa==='pais'?'Pais · visão geral':'Filho · passo a passo';const list=aulas().filter(a=>a.etapa===m.id&&a.programa===programa);$('dock-aulas').innerHTML=list.length?list.map(a=>`<button type="button" class="aula-link" data-lesson="${esc(a.id)}">${esc(a.nome)} ${icon('arrow')}</button>`).join(''):'<p class="fine">As aulas desta etapa ainda serão incluídas.</p>';$('dock-abrir').textContent='Conhecer esta etapa';$('dock-rumos').textContent=`${rumos()} ${rumos()===1?'rumo guardado':'rumos guardados'} neste navegador.`;}
function openAula(a){aberta=a;saved=false;show('licao');}
function draftKey(){return JSON.stringify([owner(),aberta.id,aberta.programa,aberta.etapa]);}
function paintLesson(){const m=MARCAS.find(m=>m.id===aberta.etapa)||MARCAS[0];$('form-resposta').className=`lesson land-${m.land}`;$('lesson-art').src=`media/mapa/${m.art}.svg`;$('lesson-program').textContent=aberta.programa==='pais'?'Pais · visão geral':'Filho · passo a passo';$('lesson-kicker').textContent=`${m.nome} · ${m.verbo}`;$('lesson-title').textContent=aberta.nome;$('lesson-text').textContent=aberta.texto;$('lesson-preview').hidden=!aberta.preview;$('resposta').value=read(DRAFT,{},sessionStorage)[draftKey()]||'';$('resposta').removeAttribute('aria-invalid');status('draft-status',$('resposta').value?'Rascunho recuperado nesta aba.':'');$('lesson-companion').innerHTML=companion('rumo','welcome');playGesture($('lesson-companion').querySelector('.companion'));}
function paintSession(){const s=session();$('nav-nome').textContent=s?.nome||'Entrar';$('nav-entrar').dataset.go=s?'painel':'entrar';$('sair').hidden=!s;document.querySelectorAll('[data-editor]').forEach(el=>el.hidden=s?.papel!=='anai');}
function paintPainel(){paintSession();paintJourney();$('ola').textContent=session()?`Olá, ${owner()}.`:'Seu espaço de exploração';$('painel-lead').textContent='Conheça a rota e volte aos seus registros. Tudo fica neste navegador.';$('painel-marca').textContent='Analisar · posição ilustrativa de Rumo.';$('painel-respostas').textContent=`${answers().filter(a=>a.quem===owner()).length} registros de ${owner()}.`;$('painel-contagem').textContent=`${aulas().length} aulas na prévia.`;$('painel-rumos').textContent=`${rumos()} rumos guardados.`;$('painel-course').innerHTML=courseHTML();$('saved-records').innerHTML=answers().filter(a=>a.quem===owner()).reverse().map(a=>`<details class="saved-record"><summary>${esc(a.nome)} <small>${esc(a.etapa)}</small></summary><p>${esc(a.texto)}</p></details>`).join('')||'<p class="fine">Seus registros aparecerão aqui depois de guardar uma resposta.</p>';}
// One canonical write: the optional rumo field preserves the legacy counter if its mirror fails.
function saveAnswer(data){let previous;try{previous=JSON.parse(localStorage.getItem(ANS)||'[]');if(!Array.isArray(previous))return false;}catch{return false;}const before=earnedBadges(previous,owner());const entry={...data,id:crypto.randomUUID(),quem:owner(),rumo:rumos()+1};if(!write(ANS,[...previous,entry]))return false;write(RUMOS,entry.rumo);$('earned-now').innerHTML=earnedBadges([...previous,entry],owner()).filter((b,i)=>b.earned&&!before[i].earned).map(b=>`<article class="new-stamp"><p class="eyebrow">Nova conquista</p>${badgeHTML(b)}</article>`).join('');saved=true;window.dispatchEvent(new CustomEvent('mapa:saved',{detail:{owner:entry.quem,programa:entry.programa,recordId:entry.id}}));$('done-context').textContent=`${entry.nome} · ${entry.quem}`;return true;}
function renderAulas(){$('aula-list').innerHTML=aulas().map(a=>`<li><div><strong>${esc(a.nome)}</strong><small>${esc(a.etapa)} · ${a.programa==='pais'?'Pais':'Filho'}</small></div><button type="button" class="back" data-edit="${esc(a.id)}">Editar</button><button type="button" class="back" data-delete="${esc(a.id)}">Excluir</button></li>`).join('')||'<li>Nenhuma aula guardada.</li>';}
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
function motionOff(){return reduce.matches||document.body.dataset.motion==='paused';}
document.querySelector('.skip').onclick=e=>{e.preventDefault();$('conteudo').focus();window.scrollTo({top:0,behavior:'instant'});};
document.body.addEventListener('click',e=>{
 const go=e.target.closest('[data-go]');if(go){e.preventDefault();if(go.dataset.programa)setPrograma(go.dataset.programa);if(go.dataset.marca)selectedMark=go.dataset.marca;show(go.dataset.go);if(go.dataset.programa==='filho'&&go.dataset.go==='trilha')offerAvatar();return;}
 const stage=e.target.closest('[data-stage]');if(stage){selectedMark=stage.dataset.stage;if(current==='painel')show('trilha');else{renderCourse();remember();document.querySelector(`#trail [data-stage="${selectedMark}"]`).focus({preventScroll:true});}return;}
 const lesson=e.target.closest('[data-lesson]');if(lesson){const a=aulas().find(a=>a.id===lesson.dataset.lesson);if(a)openAula(a);return;}
 if(session()?.papel!=='anai')return;
 const edit=e.target.closest('[data-edit]');if(edit){const a=aulas().find(a=>a.id===edit.dataset.edit);$('aula-id').value=a.id;$('aula-nome').value=a.nome;$('aula-etapa').value=a.etapa;$('aula-programa').value=a.programa;$('aula-texto').value=a.texto;$('aula-titulo').textContent='Editar aula';$('aula-nome').focus();return;}
 const del=e.target.closest('[data-delete]');if(del){if(!confirm('Excluir esta aula deste navegador? Não dá para desfazer.'))return;if(write(KEY,aulas().filter(a=>a.id!==del.dataset.delete))){renderAulas();status('aula-status','Aula excluída deste navegador.');}else status('aula-status','Não foi possível excluir. Seu navegador bloqueou a gravação.',true);}
});
$('tab-pais').onclick=()=>{setPrograma('pais');renderCourse();remember();};
$('tab-filho').onclick=()=>{setPrograma('filho');renderCourse();remember();offerAvatar();window.scrollToWorld?.();};
$('dock-abrir').onclick=()=>{const m=MARCAS.find(m=>m.id===selectedMark);openAula({id:`preview-${programa}-${m.id}`,programa,etapa:m.id,nome:m.nome,texto:m.purpose,preview:true});};
$('resposta').oninput=()=>{const drafts=read(DRAFT,{},sessionStorage);drafts[draftKey()]=$('resposta').value;rememberJourney('lesson',{lesson:aberta});$('resposta').removeAttribute('aria-invalid');status('draft-status',write(DRAFT,drafts,sessionStorage)?'Rascunho guardado nesta aba.':'Rascunho ainda não guardado. Mantenha esta tela aberta.',false);};
$('form-resposta').onsubmit=e=>{e.preventDefault();if(saved||current!=='licao'||!aberta)return;const texto=$('resposta').value.trim();if(!texto){reactCompanion('encourage');status('draft-status','Escreva uma resposta antes de guardar.',true);$('resposta').setAttribute('aria-invalid','true');$('resposta').focus();reactCompanion('encourage');return;}if(!saveAnswer({etapa:aberta.etapa,nome:aberta.nome,texto,programa:aberta.programa})){reactCompanion('encourage');status('draft-status','Não foi possível guardar. Seu texto continua aqui; tente novamente.',true);return;}const drafts=read(DRAFT,{},sessionStorage);delete drafts[draftKey()];write(DRAFT,drafts,sessionStorage);finishJourney('lesson',aberta.id);show('pronta');};
$('form-entrar').onchange=()=>{$('login-submit').innerHTML=`Entrar como ${new FormData($('form-entrar')).get('papel')==='anai'?'Anaí':'família'} ${icon('arrow')}`;};
$('form-entrar').onsubmit=e=>{e.preventDefault();const data=new FormData(e.currentTarget);const nome=String(data.get('nome')||'').trim()||String(data.get('email')).split('@')[0];if(!write(SES,{nome,papel:data.get('papel')},sessionStorage)){status('login-status','O navegador bloqueou a gravação. Você ainda pode explorar a rota sem entrar.',true);return;}e.currentTarget.reset();paintSession();show('painel');};
$('sair').onclick=()=>{try{sessionStorage.removeItem(SES);}catch{status('login-status','Não foi possível sair. A gravação está bloqueada.',true);show('entrar');return;}paintSession();show('inicio');};
$('form-aula').onsubmit=e=>{e.preventDefault();if(session()?.papel!=='anai')return;const nome=$('aula-nome').value.trim(),texto=$('aula-texto').value.trim();if(!nome||!texto){status('aula-status','Preencha o título e a pergunta.',true);return;}const id=$('aula-id').value||crypto.randomUUID();const items=aulas();const a={id,nome,texto,etapa:$('aula-etapa').value,programa:$('aula-programa').value};const index=items.findIndex(a=>a.id===id);if(index>=0)items[index]=a;else items.push(a);if(!write(KEY,items)){status('aula-status','Não foi possível guardar. Os campos continuam preenchidos.',true);return;}e.currentTarget.reset();$('aula-id').value='';$('aula-titulo').textContent='Nova aula';status('aula-status','Aula guardada na rota.');renderAulas();};
$('motion-toggle').onclick=()=>{const paused=document.body.dataset.motion!=='paused';document.body.dataset.motion=paused?'paused':'active';$('motion-toggle').setAttribute('aria-pressed',paused);$('motion-label').textContent=paused?'Retomar animações':'Pausar animações';};
function restore(state){if(state){programa=state.programa==='filho'?'filho':'pais';selectedMark=MARCAS.some(m=>m.id===state.selectedMark)?state.selectedMark:'Analisar';aberta=state.lesson||null;saved=!!state.receipt;}show(location.hash.slice(1)||'inicio',{fromHistory:true});}
window.addEventListener('popstate',e=>restore(e.state));
window.addEventListener('hashchange',()=>{if(location.hash!==`#${current}`)show(location.hash.slice(1),{replace:true});});
function init(){try{if(localStorage.getItem(KEY)===null)write(KEY,SEED);}catch{}fillIcons();['hero-rumo','gate-rumo','done-rumo'].forEach(id=>$(id).innerHTML=companion('rumo',id==='done-rumo'?'celebrate':'welcome'));$('cast-lineup').innerHTML=Object.entries(CAST).map(([key,c])=>`<div><button type="button" class="character-replay" aria-label="Ver gestos de ${c.name}">${companion(key)}</button><strong>${c.name}</strong><span>${c.role}</span></div>`).join('');paintSession();const last=read('pc-view-v1',null,sessionStorage);if(last&&last.view===location.hash.slice(1)){programa=last.programa;selectedMark=last.selectedMark;aberta=last.lesson;saved=last.receipt;}show(location.hash.slice(1)||'inicio',{replace:true,focus:false});}




const AVATAR='pc-avatar-v1';
function avatarPreference(){try{return Journey.preference(localStorage.getItem(AVATAR),owner());}catch{return {id:'rumo',exists:true,writable:false};}}
function paintAvatar(){
 const pref=avatarPreference(),a=Journey.animal(pref.id);
 $('avatar-selection-status').textContent='';
 $('avatar-bar').hidden=true; // ponytail: animals left the map in Lote 5.2; contract and picker code stay for a future character direction.
 $('avatar-name').textContent=a?.name||'Rumo';
 $('avatar-image').src=a?.image||'media/mapa/bussola.svg';
 $('avatar-options').innerHTML=Journey.animals.map(a=>`<label class="animal-option"><img src="${a.image}" width="128" height="128" alt=""><span><input type="radio" name="animal" value="${a.id}" ${pref.id===a.id?'checked':''}> ${a.name}</span><small>${a.note}</small></label>`).join('');
 $('avatar-status').textContent=pref.writable?'Escolher um acompanhante não muda suas respostas.':'A preferência salva não pôde ser lida. Você pode seguir com Rumo sem substituir esses dados.';
}
function offerAvatar(){if(programa==='filho'&&!avatarPreference().exists)$('avatar-picker').open=true;}
function saveAvatar(id){
 try{const value=Journey.choose(localStorage.getItem(AVATAR),owner(),id);if(!write(AVATAR,value))throw Error('Gravação bloqueada');}
 catch{$('avatar-status').textContent='Não foi possível guardar a escolha. Suas respostas continuam intactas. Use Agora não para seguir.';return false;}
 paintAvatar();$('avatar-picker').open=false;$('avatar-selection-status').textContent=`${Journey.animal(id)?.name||'Rumo'} acompanha sua rota.`;
 window.dispatchEvent(new Event('mapa:avatar'));return true;
}
$('avatar-confirm').onclick=()=>{const input=$('avatar-options').querySelector('input:checked');if(input)saveAvatar(input.value);else $('avatar-status').textContent='Escolha um animal ou siga com Rumo.';};
$('avatar-rumo').onclick=()=>saveAvatar('rumo');
$('avatar-later').onclick=()=>{$('avatar-picker').open=false;$('avatar-picker').querySelector('summary').focus();};
