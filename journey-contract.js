// Shared, versioned domain contract. Storage and rendering stay with consumers.
const Journey = (() => {
 const animals=Object.freeze([
  ['capivara','Capivara','Um passo tranquilo.'],['lontra','Lontra','Curiosidade pelo caminho.'],
  ['lobo','Lobo','Atenção ao próximo passo.'],['panda-vermelho','Panda-vermelho','Novas possibilidades.'],['coruja','Coruja','Tempo para observar.']
 ].map(([id,name,note])=>Object.freeze({id,name,note,image:`media/animais/${id}.png`})));
 const steps=Object.freeze([
  ['curiosidades','Curiosidades','Mapear'],['prioridades','Prioridades','Mapear'],
  ['possibilidades','Possibilidades','Analisar'],['informacoes','Informações','Analisar'],
  ['duvida','Uma dúvida','Priorizar'],['proximo-passo','Próximo passo','Agir'],['revisao','Revisão','Agir']
 ].map(([id,name,stage],index)=>Object.freeze({id:'lab-'+id,name,stage,index,scope:'laboratorio'})));
 const animal=id=>animals.find(a=>a.id===id);
 const allowed=id=>id==='rumo'||!!animal(id);
 function validStep(index,d={}){
  return [(d.activities||[]).length>0,(d.values||[]).length>0,!!d.aName?.trim()&&!!d.bName?.trim(),!!d.claim?.trim()&&!!d.evidence,!!d.question?.trim()&&!!d.topic,!!d.action&&(d.action==='Definir depois'||!!d.actionPlan?.trim()),true][index]===true;
 }
 function decode(raw){
  if(raw===null)return {versao:1,perfis:{}};
  const v=JSON.parse(raw);
  if(!v||v.versao!==1||!v.perfis||typeof v.perfis!=='object'||Array.isArray(v.perfis))throw Error('Preferência incompatível');
  return v;
 }
 const profileKey=person=>JSON.stringify([person,'filho']);
 function preference(raw,person){
  try{const value=decode(raw).perfis[profileKey(person)];return {id:allowed(value?.animal)?value.animal:'rumo',exists:value!==undefined,writable:true};}
  catch{return {id:'rumo',exists:true,writable:false};}
 }
 function choose(raw,person,id){
  if(!allowed(id))throw Error('Animal inválido');
  const v=decode(raw);return {...v,perfis:{...v.perfis,[profileKey(person)]:{animal:id}}};
 }
 function project(snapshot={},recorded=false){
  const d=snapshot.data||{},focus=Number.isInteger(snapshot.step)?Math.max(0,Math.min(6,snapshot.step)):0;
  return steps.map(s=>{const skipped=!!d['skip'+s.index],draft=validStep(s.index,d)&&s.index<6;
   return {...s,available:recorded||s.index===0||s.index<=focus||validStep(s.index-1,d)||!!d['skip'+(s.index-1)],state:recorded?'guardado':skipped?'adiado':snapshot.started&&s.index===focus?'foco':draft?'rascunho':'disponível',draft,skipped,recorded};
  });
 }
 return Object.freeze({version:1,animals,steps,animal,validStep,preference,choose,project});
})();
if(typeof module!=='undefined')module.exports=Journey;
