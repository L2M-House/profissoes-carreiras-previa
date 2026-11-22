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
 // Lote 6.3: coleção, descrições, panorama e acessório, aditivos em pc-mundos-v1 (versão 1). Na pessoa: colecao:{profissional:{mundo:
 // [lugares]}}, lembrar:[profissionais] e acessorio; no mundo: descricoes:{lugar:{profissional:texto}}. Só IDs e o texto dela, sem data
 // nem ponto. A coleção só cresce: tirar alguém da equipe não tira a carta.
 const ACESSORIOS=Object.freeze({chapeu:'Chapéu',mochila:'Mochila',lenco:'Lenço'});
 // Ao terminar um lugar, a equipe entra na coleção. Devolve a pessoa e as cartas novas.
 function colecionar(p,id,lugar){
  const col={...p.colecao},t=equipe(doMundo(p,id),lugar),novas=t.filter(x=>!col[x]);
  for(const x of t){const ls=col[x]?.[id]||[];if(!ls.includes(lugar))col[x]={...col[x],[id]:[...ls,lugar]};}
  return {p:{...p,colecao:col},novas};
 }
 const descricao=(m,lugar,prof)=>String(m.descricoes?.[lugar]?.[prof]??'').trim();
 const descrever=(m,lugar,prof,texto)=>({...m,descricoes:{...m.descricoes,[lugar]:{...m.descricoes?.[lugar],[prof]:String(texto).trim().slice(0,140)}}});
 const lembrar=(p,prof)=>{const l=p.lembrar||[];return {...p,lembrar:l.includes(prof)?l.filter(x=>x!==prof):[...l,prof]};};
 // O que a criança fez no mundo, contado. Nenhum número é nota.
 const fatos=(c,m)=>({lugares:c.lugares.filter(l=>lugarFeito(m,l.id)).length,profissionais:c.lugares.reduce((n,l)=>n+equipe(m,l.id).length,0),
  descricoes:c.lugares.reduce((n,l)=>n+equipe(m,l.id).filter(x=>descricao(m,l.id,x)).length,0)});
 // Uma carta por profissional: onde a criança o pôs, a fala que a Dra. escreveu (ou null: lacuna), o que ela escreveu e onde ele se ofereceu.
 function cartas(p,todos=globalThis.MUNDOS||{}){
  return Object.entries(p.colecao||{}).flatMap(([prof,onde])=>{
   const k={id:prof,nome:prof,mundo:Object.keys(onde)[0],lugares:[],fala:null,escritas:[],ofereceu:[],lembrar:(p.lembrar||[]).includes(prof)};
   for(const [id,ls] of Object.entries(onde)){const c=todos[id];if(!c)continue;const m=doMundo(p,id);k.nome=c.profissionais.find(x=>x.id===prof)?.nome||k.nome;
    for(const l of c.lugares.filter(l=>ls.includes(l.id))){k.lugares.push(l.nome);k.fala??=l.equipe?.[prof]?.fala||null;const d=descricao(m,l.id,prof);if(d)k.escritas.push({lugar:l.nome,texto:d});
     if(l.prioritario===prof&&(m.ofertas||[]).includes(l.id))k.ofereceu.push(l.nome);}}
   return k.lugares.length?[k]:[];});
 }
 // Panorama: uma linha por mundo concluído. "concluido" não volta atrás, então ele só cresce.
 function panorama(p,todos=globalThis.MUNDOS||{}){
  return LISTA.flatMap((L,i)=>{const c=conteudo(i,todos),m=c&&doMundo(p,L.conteudo);if(!m?.concluido)return [];
   return [{n:i+1,nome:c.titulo,lugares:sintese(c,m).filter(s=>s.equipe.length),pergunta:c.fechamento,resposta:{sim:'Sim',nao:'Não'}[m.fechamento]||null,
    escritas:c.lugares.flatMap(l=>equipe(m,l.id).map(x=>({lugar:l.nome,prof:c.profissionais.find(q=>q.id===x)?.nome||x,texto:descricao(m,l.id,x)})).filter(d=>d.texto))}];});
 }
 return Object.freeze({ETAPA,LISTA,conteudo,decode,pessoa,gravar,doMundo,equipe,lugarFeito,parqueCompleto,mundoFeito,feito,aberto,incluir,retirar,fala,voluntario,sintese,
  ACESSORIOS,colecionar,descricao,descrever,lembrar,fatos,cartas,panorama});
})();
if(typeof module!=='undefined')module.exports=Mundos;
