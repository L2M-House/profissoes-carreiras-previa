// Lote 6.1: a etapa de exploração do Pelletier tem sete subtarefas, e cada parada da trilha do Filho é um mundo. A regra dos
// mundos fica aqui, uma vez, sem tela nem storage (a ponte lê e grava pc-mundos-v1). O contrato do L4 não muda.
const Mundos=(()=>{
 const ETAPA={n:1,de:4,nome:'Exploração'};
 // Por subtarefa: o id do conteúdo (site/mundos/<id>.js) e o nome da subtarefa quando a Dra. Anaí já o disse (30/10). Sem
 // conteúdo, o mundo fica em preparação.
 const LISTA=Object.freeze([
  {conteudo:'parque-aquatico',nome:'Parque aquático'},
  {conteudo:null,nome:'Mundo 2',subtarefa:'Dispor de uma vasta gama de informações sobre si e sobre o meio.'},
  {conteudo:null,nome:'Mundo 3',subtarefa:'Ter um repertório diversificado.'},
  {conteudo:null,nome:'Mundo 4',subtarefa:null},{conteudo:null,nome:'Mundo 5',subtarefa:null},{conteudo:null,nome:'Mundo 6',subtarefa:null},{conteudo:null,nome:'Mundo 7',subtarefa:null}
 ].map(Object.freeze));
 const conteudo=(i,todos=globalThis.MUNDOS||{})=>LISTA[i]?.conteudo?todos[LISTA[i].conteudo]||null:null;
 const vazio=()=>({atual:0,mundos:{}});
 const mundoVazio=()=>({equipes:{},ofertas:[],fechamento:null,concluido:false});
 // Guardado: {versao:1,pessoas:{'["nome","filho"]':{atual,mundos:{id:{equipes:{lugar:[profissionais]},ofertas,fechamento,concluido}}}}}.
 function decode(raw){
  if(raw===null||raw===undefined)return {versao:1,pessoas:{}};
  const v=JSON.parse(raw);
  if(!v||v.versao!==1||!v.pessoas||typeof v.pessoas!=='object'||Array.isArray(v.pessoas))throw Error('Mundos incompatíveis');
  return v;
 }
 const chave=pessoa=>JSON.stringify([pessoa,'filho']);
 function pessoa(raw,nome){
  try{const p=decode(raw).pessoas[chave(nome)];return {...vazio(),...(p&&typeof p==='object'?p:{}),legivel:true};}
  catch{return {...vazio(),legivel:false};}
 }
 function gravar(raw,nome,estado){const v=decode(raw),{legivel,...p}=estado;return JSON.stringify({...v,pessoas:{...v.pessoas,[chave(nome)]:p}});}
 const doMundo=(p,id)=>({...mundoVazio(),...(p.mundos?.[id]||{})});
 const equipe=(m,lugar)=>Array.isArray(m.equipes?.[lugar])?m.equipes[lugar]:[];
 // Um lugar está resolvido com pelo menos um profissional na equipe; não há escolha errada nem quantidade certa.
 const lugarFeito=(m,lugar)=>equipe(m,lugar).length>0;
 const parqueCompleto=(c,m)=>!!c&&c.lugares.every(l=>lugarFeito(m,l.id));
 // Editar depois de concluir não reabre nada: o mundo segue feito enquanto todo lugar tiver equipe (tirar a última pessoa de um
 // lugar desfaz, como apagar uma resposta no 5.11).
 // O mundo termina com todos os lugares resolvidos e a pergunta do fechamento respondida (sim ou não).
 const mundoFeito=(c,m)=>parqueCompleto(c,m)&&['sim','nao'].includes(m.fechamento)&&m.concluido===true;
 function feito(p,i,todos){const c=conteudo(i,todos);return !!c&&mundoFeito(c,doMundo(p,LISTA[i].conteudo));}
 // Um mundo abre quando o anterior terminou; o primeiro está sempre aberto. Sem conteúdo, ele abre e fica em preparação.
 const aberto=(p,i,todos)=>i===0||feito(p,i-1,todos);
 function incluir(m,lugar,prof){const t=equipe(m,lugar);if(t.includes(prof))return m;return {...m,equipes:{...m.equipes,[lugar]:[...t,prof]}};}
 function retirar(m,lugar,prof){return {...m,equipes:{...m.equipes,[lugar]:equipe(m,lugar).filter(x=>x!==prof)}};}
 // O que o profissional diz ao entrar na equipe. Sem a fala dela, a frase geral que ela disse e a lacuna marcada.
 function fala(c,lugar,prof){
  const l=c.lugares.find(x=>x.id===lugar),e=l?.equipe?.[prof]||{};
  return {texto:e.fala||'Sim, eu posso ajudar nesta atividade.',lacuna:!e.fala,fora:e.encaixe==='fora',explicacao:e.explicacao||null};
 }
 // O prioritário que falta e ainda não se ofereceu neste lugar (ele se oferece uma vez).
 function voluntario(c,m,lugar){const l=c.lugares.find(x=>x.id===lugar);if(!l?.prioritario||equipe(m,lugar).includes(l.prioritario)||(m.ofertas||[]).includes(lugar))return null;return {prof:l.prioritario,texto:l.voluntario};}
 const sintese=(c,m)=>c.lugares.map(l=>({lugar:l.nome,atividade:l.atividade,equipe:equipe(m,l.id).map(id=>c.profissionais.find(p=>p.id===id)?.nome||id)}));
 return Object.freeze({ETAPA,LISTA,conteudo,decode,pessoa,gravar,doMundo,equipe,lugarFeito,parqueCompleto,mundoFeito,feito,aberto,incluir,retirar,fala,voluntario,sintese});
})();
if(typeof module!=='undefined')module.exports=Mundos;
