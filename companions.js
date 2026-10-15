// Elenco do Lote 5.3: desenhos e gestos ficam em elenco.js; aqui só os nomes que o site já usa.
const CAST={bino:ELENCO.bino,pipa:ELENCO.pipa,teo:ELENCO.teo};
function companion(name='rumo',state='welcome'){
 return `<span class="companion" data-character="${name}" data-state="${state}" aria-hidden="true">${castSVG(name)}</span>`;
}
const JOURNEY='pc-journey-v1';
function journeys(){const v=read(JOURNEY,{},sessionStorage);return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}
function journeyKey(type,id='',person=owner(),program=programa){return JSON.stringify([person,program,type,id]);}
function rememberJourney(type,details){const all=journeys();all[journeyKey(type,details.lesson?.id)]={owner:owner(),programa,type,at:Date.now(),...details};return write(JOURNEY,all,sessionStorage);}
function finishJourney(type,id=''){const all=journeys();delete all[journeyKey(type,id)];write(JOURNEY,all,sessionStorage);}
function resumeCandidate(){
 const drafts=read(DRAFT,{},sessionStorage),candidates=Object.values(journeys());
 // Older drafts are read in place; a journey entry is not required to resume them.
 const legacy=read('pc-experiment-v1',null,sessionStorage);
 if(legacy?.owner===owner()&&(legacy.started||Object.keys(legacy.data||{}).length))candidates.push({owner:owner(),programa:legacy.programa||'pais',type:'experiment',at:0,snapshot:legacy});
 for(const [key,text] of Object.entries(drafts)){try{
  const [person,id,program,stage]=JSON.parse(key);if(person!==owner()||typeof text!=='string'||!text.trim())continue;
  const mark=MARCAS.find(m=>m.id===stage),lesson=aulas().find(a=>a.id===id&&a.programa===program)||(mark&&id===`preview-${program}-${stage}`?{id,programa:program,etapa:stage,nome:mark.nome,texto:mark.purpose,preview:true}:null);
  if(lesson)candidates.push({owner:person,programa:program,type:'lesson',at:0,lesson});
 }catch{}}
 return candidates.filter(j=>j?.owner===owner()&&(j.type==='experiment'?j.snapshot?.started||Object.keys(j.snapshot?.data||{}).length:j.lesson&&drafts[JSON.stringify([owner(),j.lesson.id,j.lesson.programa,j.lesson.etapa])]?.trim())).sort((a,b)=>b.at-a.at)[0];
}
const BADGES=[
 {id:'registro',title:'Primeira descoberta',condition:'Guardar seu primeiro registro.'},
 {id:'comparacao',title:'Olhar lado a lado',condition:'Guardar duas possibilidades na comparação, sem adiá-la.'},
 {id:'passo',title:'Um passo possível',condition:'Guardar uma ação concreta com seu plano, sem adiar.'}
];
function earnedBadges(records,person){const own=records.filter(a=>a&&a.quem===person),data=own.map(a=>a.experimento?.respostas).filter(Boolean);return BADGES.map((b,i)=>({...b,earned:[own.length>0,data.some(d=>!d.skip2&&typeof d.aName==='string'&&d.aName.trim()&&typeof d.bName==='string'&&d.bName.trim()),data.some(d=>!d.skip5&&['Conversar','Pesquisar uma fonte','Observar uma atividade','Experimentar uma tarefa simples'].includes(d.action)&&typeof d.actionPlan==='string'&&d.actionPlan.trim())][i]}));}
function badgeHTML(b){return `<img src="media/mapa/selo-${b.id}.svg" width="88" height="88" alt=""><div><strong>${b.title}</strong><span>${b.earned?'Conquistado':'A explorar'}</span><p>${b.condition}</p></div>`;}
function paintJourney(){
 const next=resumeCandidate();$('resume-character').innerHTML=companion('teo','welcome');
 $('resume-title').textContent=next?'Seu caminho continua aqui.':'Um pequeno começo já abre caminho.';
 $('resume-description').textContent=next?`${next.type==='experiment'?'Laboratório · '+STEP_NAMES[next.snapshot.step||0]:next.lesson.nome} · ${next.programa==='filho'?'Filho':'Pais'}. Rascunho nesta aba.`:'Experimente as perguntas, conheça possibilidades e volte quando quiser.';
 $('resume-action').innerHTML=(next?'Retomar meu rascunho':'Experimentar perguntas')+' '+icon('arrow');
 $('resume-action').onclick=()=>{if(!next){show('experimento');return;}setPrograma(next.programa);if(next.type==='experiment'){lab=structuredClone(next.snapshot);lab.started=true;labSaved=false;labStore();show('experimento');focusLab();}else openAula(next.lesson);};
 $('passport').innerHTML=earnedBadges(answers(),owner()).map(b=>`<li class="passport-stamp" data-earned="${!!b.earned}">${badgeHTML(b)}</li>`).join('');playGesture($('resume-character').querySelector('.companion')); 
}
let companionAnimations=[];
const gestureRuns=new Map();
function stopGesture(figure){gestureRuns.get(figure)?.forEach(a=>a.cancel());gestureRuns.delete(figure);}
function stopCompanionMotion(){companionAnimations.forEach(a=>a.cancel());companionAnimations=[];for(const figure of gestureRuns.keys())stopGesture(figure);}
function playGesture(figure,kind='welcome',direction=1){
 if(!figure)return;stopGesture(figure);if(motionOff()||!figure.isConnected||!figure.getClientRects().length)return;
 // Um grupo interno por peça, composite padrão e só transform: o gesto fica elegível para o compositor (Lote 5.3).
 const run=animarGesto(figure,kind,direction);
 gestureRuns.set(figure,run);
 Promise.allSettled(run.map(a=>a.finished)).then(()=>{if(gestureRuns.get(figure)===run)gestureRuns.delete(figure);});
}
// The lab form lives on #experimento or beside the map in the Filho route (Lote 5.2).
const labOpen=()=>current==='experimento'||current==='trilha'&&!!$('experiment-form').closest('#world-question');
function reactCompanion(state,{replay=false,animate=true,target=null}={}){
 if(!labOpen()&&current!=='licao')return;
 const host=$(labOpen()?'lab-companion':'lesson-companion'),figure=host?.querySelector('.companion');
 if(figure&&(figure.dataset.state!==state||replay)){figure.dataset.state=state;if(animate){const bounds=target?.getBoundingClientRect(),form=target?.closest('form')?.getBoundingClientRect();playGesture(figure,state,bounds&&form&&bounds.x+bounds.width/2<form.x+form.width/2?-1:1);}}
}
function transitionQuestion(direction=1){stopCompanionMotion();const figure=$('lab-companion').querySelector('.companion');if(!direction){playGesture(figure);return;}if(motionOff())return;reactCompanion(direction===2?'welcome':lab.step===5?'thinking':'point',{animate:false});const opts={duration:360,easing:'cubic-bezier(.2,.8,.2,1)'};const sign=direction<0?-1:1;
 companionAnimations.push($('experiment-fields').animate([{opacity:.35,transform:`translateX(${sign*18}px)`},{opacity:1,transform:'translateX(0)'}],opts));
 playGesture(figure,direction===2?'welcome':'advance',sign);
 companionAnimations.push($('question-path').animate([{transform:`scaleX(0)`,transformOrigin:sign>0?'left':'right'},{transform:'scaleX(1)',transformOrigin:sign>0?'left':'right'}],opts));
}
// Guia de cada parada pela terra (decisão 3 do plano 5.3): Mapear com Bino, Analisar com Pipa, Bifurcação com Rumo, Agir com Téo.
const STEP_COMPANIONS=['bino','bino','pipa','pipa','rumo','teo','teo'];
const STEP_ART=['explorar','selecionar','filho','organizar','bussola','planejar','pais'];
const STEP_NOTES=['Bino observa com você. Vale seguir uma curiosidade.','Bino ajuda a reparar no que você quer manter na rotina.','Pipa abre espaço para mais de uma possibilidade.','Pipa convida a olhar de onde veio cada ideia.','Na bifurcação, Rumo ajuda a transformar a dúvida numa pergunta.','Téo acompanha um passo que caiba no seu ritmo.','Téo acompanha a revisão, sem pressa. Você pode ajustar tudo.'];
function paintLabCompanion(direction){const name=STEP_COMPANIONS[lab.step];$('lab-companion').innerHTML=companion(name,lab.step===5?'thinking':'welcome');$('companion-name').textContent=ELENCO[name].name;$('companion-note').textContent=STEP_NOTES[lab.step];$('question-art').src=`media/mapa/${STEP_ART[lab.step]}.svg`;$('lab-help').hidden=lab.step===6;transitionQuestion(direction);}
// Prepared alternatives, never generated from or written over a person's answers.
const HELP=[
 ['Uma curiosidade pode ser pequena: algo que você gostaria de ver, testar ou entender.','Exemplo fictício: Joana quer entender como uma ponte de papel suporta peso. Ela escolheu “Testar uma explicação”.','Olhe uma opção por vez. Pense numa situação em que a viu. Escolha uma que gostaria de conhecer; depois veja se quer acrescentar outra.'],
 ['Pense no que gostaria de ter na rotina, mesmo que ainda não saiba em que atividade encontrar isso.','Exemplo fictício: Caio quer aprender uma ferramenta nova e continuar treinando vôlei. Escolheu aprender e ter tempo fora do trabalho.','Imagine um dia comum. Escolha uma coisa que gostaria de manter nele. Acrescente até duas prioridades e, se quiser, explique como perceberia isso.'],
 ['Dê nome a dois caminhos que gostaria de conhecer melhor. Podem ser atividades, projetos ou cursos.','Exemplo fictício: Lia comparou uma oficina de fotografia com um projeto de robótica. Gostaria de observar como cada grupo resolve problemas.','Escreva o nome da possibilidade A. Depois, o da B. Olhe os campos opcionais e anote uma coisa que gostaria de descobrir em cada caminho.'],
 ['Escolha algo que acredita sobre uma possibilidade e lembre como chegou a essa ideia. Uma impressão também pode ser registrada.','Exemplo fictício: “Acho que fotografia envolve viajar”. Lia viu um vídeo e percebeu que ainda não conferiu como é a rotina de outras pessoas.','Escreva uma ideia. Marque de onde ela veio. Indique quanto conseguiu conferir. Se quiser, anote o que ainda precisa conhecer.'],
 ['Transforme algo que ainda não sabe numa pergunta que possa ser respondida com uma situação real.','Exemplo fictício: “Quando um protótipo falha, o que o grupo faz primeiro?” Lia poderia observar uma oficina aberta.','Escolha uma possibilidade e um tema. Escreva uma pergunta começando com “como”, “quais” ou “o que”. Depois pense onde poderia buscar uma resposta.'],
 ['Escolha uma experiência pequena que ajude a aprender algo sobre a sua dúvida. Você pode deixar a decisão para depois.','Exemplo fictício: Caio quer observar uma atividade pública durante vinte minutos e anotar uma tarefa que não conhecia. Se não conseguir ir, vai ler um relato.','Escolha uma ação possível. Escreva o que pretende fazer. Data, obstáculo e versão menor são opcionais; use-os se ajudarem a tornar o passo viável.']
];
let helpTrigger=null;
function openHelp(trigger){stopCompanionMotion();helpTrigger=trigger;$('helper-character').innerHTML=companion('pipa','curious');const isLab=labOpen();$('helper-title').textContent=isLab?'Uma alternativa para '+STEP_NAMES[lab.step].toLowerCase():'Um espaço para a sua dúvida';$('helper-options').hidden=!isLab;$('helper-copy').textContent=isLab?HELP[lab.step][0]:'As alternativas desta aula ainda não foram fornecidas pela Anaí. Você pode anotar o que gostaria de perguntar no seu registro e voltar à rota quando quiser.';$('helper-dialog').showModal();$('helper-options').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',i===0));playGesture($('helper-character').querySelector('.companion'));}
document.body.addEventListener('click',e=>{const t=e.target.closest('[data-help]');if(t)openHelp(t);const option=e.target.closest('[data-helper-option]');if(option){$('helper-copy').textContent=HELP[lab.step][Number(option.dataset.helperOption)];const figure=$('helper-character').querySelector('.companion'),kind=['rephrase','example','steps'][Number(option.dataset.helperOption)];figure.dataset.state=kind==='steps'?'point':kind==='rephrase'?'thinking':'curious';playGesture(figure,kind);$('helper-options').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===option));}});
$('helper-close').onclick=()=>$('helper-dialog').close();
$('helper-dialog').addEventListener('close',()=>{stopGesture($('helper-character').querySelector('.companion'));if(helpTrigger?.isConnected)helpTrigger.focus({preventScroll:true});});
document.body.addEventListener('focusin',e=>{if(e.target.matches('textarea,input:not([type=radio]):not([type=checkbox])'))reactCompanion('thinking');else if(e.target.matches('select,input[type=radio],input[type=checkbox],#experiment-next,#enviar'))reactCompanion('curious');});
document.body.addEventListener('change',e=>{if(e.target.closest('#experiment-form'))reactCompanion('attentive',{replay:true,target:e.target});});
document.body.addEventListener('pointerover',e=>{if(e.target.closest('#experiment-next,#enviar'))reactCompanion('curious');});
$('motion-toggle').addEventListener('click',()=>{if(motionOff())stopCompanionMotion();});
reduce.addEventListener('change',()=>{if(motionOff())stopCompanionMotion();});

// Portraits offer the same gesture through touch, keyboard and mouse.
document.body.addEventListener('click',e=>{const button=e.target.closest('.character-replay');if(button)playGesture(button.querySelector('.companion'));});
document.body.addEventListener('focusin',e=>{if(e.target.matches('.character-replay'))playGesture(e.target.querySelector('.companion'));});
document.body.addEventListener('pointerover',e=>{const button=e.target.closest('.character-replay');if(button&&!button.contains(e.relatedTarget))playGesture(button.querySelector('.companion'));});
