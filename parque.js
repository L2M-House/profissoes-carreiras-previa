// Lote 6.1: o mundo 1 da exploração, o parque aquático. A regra é a de mundos.js; o conteúdo, o de site/mundos/parque-aquatico.js.
// Tocar a parada abre o mapa do parque no lugar do bosque (mesmo quadro, mesmo motor, parque-renderer.js) e, no painel, os lugares
// em qualquer ordem. Em cada lugar a criança monta a equipe da atividade: arrastando o profissional, tocando nele e depois na
// equipe, ou com Enter no teclado. Cada um diz o que faria ali; o fora do esperado ganha a explicação; o prioritário que falta
// se oferece uma vez ("não esquece de mim"). Nenhuma escolha é errada, não há pontos. Com todos os lugares com equipe, o
// fechamento pergunta sim ou não, mostra a lista do que ela montou e conclui o mundo com a comemoração do 5.11.
// Lote 6.2: entrar e sair do mundo têm uma passagem de até 0,8 s (a câmera do bosque aproxima da miniatura e o parque abre por cima; ao
// sair, o inverso, com o Rumo no lugar). O painel já está pronto no primeiro quadro, e um toque ou uma tecla terminam a passagem;
// movimento reduzido e pausa trocam direto. Os rótulos do mapa nunca cobrem as peças: do cartão ao selo, o que couber.
const PARK_ID='parque-aquatico';
const park={open:false,view:'parque',lugar:-1,pick:null,fala:null,key:'',novas:[],desc:null,foto:''};
// Lote 6.3: a vista "equipe" é o card do lugar; no mapa, o lugar continua aberto.
const noLugar=()=>park.view==='lugar'||park.view==='equipe';
let parkView=null,parkFailed=false;
const parkContent=()=>Mundos.conteudo(0);
const PRO_COLOR={administrador:'#1c2744',psicologo:'#f2534a',publicitario:'#ffc83d',fisioterapeuta:'#2ebe6a'};
const proFig=id=>`<svg class="pro-fig" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="6" fill="#fffdf9" stroke="#1c2744" stroke-width="2"/><path d="M5 30c0-7 5-11 11-11s11 4 11 11Z" fill="${PRO_COLOR[id]||'#5e6880'}" stroke="#1c2744" stroke-width="2"/></svg>`;
const proName=(c,id)=>c.profissionais.find(p=>p.id===id)?.nome||id;
// Painel do mundo e do parque. Rebuild só quando a vista muda; o foco volta ao mesmo controle (data-k).
function paintMundoPanel(d=mundosDomain()){
 const host=$('mundo-fields');if(!host)return;const c=parkContent(),p=d.p,m=Mundos.doMundo(p,PARK_ID);
 const view=park.open?park.view:'mundo',key=JSON.stringify([view,d.atual,park.lugar,park.pick,park.fala,m,owner(),park.novas,park.desc]);
 if(key===park.key)return;park.key=key;if(tipStep>=0&&view!=='lugar')endTips();// a dica do gesto não fica solta fora do lugar
 const had=document.activeElement?.closest?.('#world-stage')?document.activeElement.dataset.k:null;
 $('world-stage').toggleAttribute('data-park',park.open);$('park-places').hidden=!park.open;$('world-nodes').hidden=park.open;
 const [fields,actions]=view==='mundo'?mundoCard(d,c,m):view==='lugar'?lugarView(c,m):view==='equipe'?Cel.lugar(c,m,c.lugares[park.lugar],park.novas,Mundos.parqueCompleto(c,m),park.desc):view==='fechamento'?fechamentoView(c,m):parqueView(c,m);
 $('world-place-state').innerHTML=CONDUZ&&(view!=='mundo'||d.atual===0)&&c?.exemplo?EXEMPLO:'';
 host.style.paddingBottom='';host.dataset.view=view;host.innerHTML=fields;$('mundo-actions').innerHTML=actions;fillIcons(host);fillIcons($('mundo-actions'));
 if(park.open)paintPlaces(c,m);
 if(had){const e=$('world-stage').querySelector(`[data-k="${had}"]`);if(e&&!e.disabled)e.focus({preventScroll:true});}
}
// Lote R1a: o selo de exemplo e as lacunas ("a Dra. Anaí vai escrever") são bastidor e só aparecem para quem conduz (?conduz, site.js).
// O selo fica no topo, na linha do "Mundo 1 de 7", em toda vista do parque (não toma a altura da atividade).
const EXEMPLO='<span class="mundo-exemplo" title="A lista de atividades e profissionais da Dra. Anaí ainda vai chegar.">Conteúdo de exemplo</span>';
const lacuna=t=>`<span class="mundo-lacuna">${t}</span>`,bastidor=t=>CONDUZ?lacuna(t):'';
// A numeração do Pelletier e a frase do método, inteira, ficam recolhidas; quem conduz já as vê abertas.
const metodo=(i,texto)=>`<details class="mundo-metodo"${CONDUZ?' open':''}><summary data-k="metodo">Sobre o método</summary><p>Subtarefa ${i+1} de 7</p>${texto?`<p>${texto}</p>`:''}</details>`;
// Cartão do mundo: o nome, o convite (texto de jogo, da L2M) e o botão.
function mundoCard(d,c,m){
 const i=d.atual,s=d.steps[i],L=Mundos.LISTA[i];
 if(!c||i>0)return [`<h1 tabindex="-1">${esc(L.nome)}</h1><p class="mundo-prep"><span class="node-glyph" aria-hidden="true">${LOOK_GLYPH.preparo}</span> Este mundo está em obras.${CONDUZ?' A Dra. Anaí está preparando o exercício deste mundo.':''}</p>`+
  metodo(i,L.subtarefa?esc(L.subtarefa):bastidor('O nome desta subtarefa ainda vai chegar.')),`<button type="button" class="back" data-park="mundo1" data-k="mundo1"><span data-icon="back"></span>Voltar ao parque aquático</button>`];
 const k=Mundos.contagem(c,m);
 return [`<h1 tabindex="-1">${esc(c.titulo)}</h1><p class="mundo-convite">Todo lugar tem um problema. Quem resolve?</p>`+
  (s.done||k.feitos?`<p class="mundo-conta">${s.done?'Mundo terminado. ':''}${k.feitos} de ${k.de} lugares com equipe.</p>`:'')+metodo(0,esc(c.subtarefa)),
  `<button type="button" class="btn" data-park="abrir" data-k="abrir">${s.done||k.feitos?'Voltar ao parque':'Entrar no parque'} <span data-icon="arrow"></span></button>`];
}
// A lista diz a atividade de cada lugar, inteira, como está no arquivo do mundo. Lugar sem atividade aparece em obras e não abre.
function parqueView(c,m){
 const k=Mundos.contagem(c,m),all=k.feitos===k.de;
 return [`<h1 tabindex="-1">${all?'O parque está pronto para abrir.':'Por onde você quer começar?'}</h1><p class="mundo-enunciado">${esc(c.enunciado)}</p>`+
  `<ul class="mundo-lugares">${c.lugares.map((l,i)=>{const t=Mundos.equipe(m,l.id).length;
   return Mundos.emObras(l)?`<li data-obra><div class="mundo-lugar"><span class="node-glyph" aria-hidden="true">${LOOK_GLYPH.preparo}</span><span><b>${esc(l.nome)}</b><small>Em obras</small>${bastidor('A Dra. Anaí vai escrever a atividade deste lugar.')}</span></div></li>`
    :`<li><button type="button" class="mundo-lugar" data-lugar="${i}" data-k="lugar-${i}" data-feito="${t>0}"><span class="node-glyph" aria-hidden="true">${t?'✓':i+1}</span><span><b>${esc(l.nome)}</b><small>${t?`Equipe com ${t}`:'Sem equipe'}</small><span class="mundo-ativ">${esc(l.atividade)}</span></span></button></li>`;}).join('')}</ul>`,
  `<button type="button" class="back" data-park="trilha" data-k="trilha"><span data-icon="back"></span>Voltar à trilha</button>`+(all?`<button type="button" class="btn" data-park="fechar" data-k="fechar">Ver o parque completo <span data-icon="arrow"></span></button>`:'')];
}
function lugarView(c,m){
 const l=c.lugares[park.lugar],team=Mundos.equipe(m,l.id),f=park.fala;
 const pick=park.pick&&!team.includes(park.pick)?park.pick:null;
 const fala=!f?'':f.vol?`<div class="mundo-fala" data-vol><p><b>${esc(proName(c,f.prof))}:</b> ${esc(f.texto)}</p><div class="mundo-vol"><button type="button" class="btn" data-vol="sim" data-k="vol-sim">Pôr na equipe</button><button type="button" class="back" data-vol="nao" data-k="vol-nao">Seguir sem</button></div></div>`
  :`<div class="mundo-fala"><p><b>${esc(proName(c,f.prof))}:</b> ${esc(f.texto)}${f.lacuna&&CONDUZ?' '+lacuna('O que eu faria aqui: a Dra. Anaí vai escrever.'):''}</p>${f.explicacao?`<p class="mundo-explica">${esc(f.explicacao)}</p>`:''}</div>`;
 // O gesto se ensina uma vez, na dica do Rumo (world-bridge.js); aqui fica a pergunta do jogo. Lugar em obras não chega a esta vista.
 return [`<p class="eyebrow">${esc(l.nome)}</p><h1 tabindex="-1">${esc(l.atividade)}</h1>`+
  `<p class="mundo-dica" id="mundo-dica">Quem pode ajudar aqui?<span class="visually-hidden"> Arraste o profissional até a equipe, ou toque nele e depois na equipe. No teclado, Enter no profissional.</span></p><ul class="mundo-pros" aria-describedby="mundo-dica">${c.profissionais.map(p=>{const on=team.includes(p.id);return `<li><button type="button" class="mundo-pro" data-pro="${p.id}" data-k="pro-${p.id}" aria-pressed="${pick===p.id}" ${on?'data-on':''} aria-label="${esc(p.nome)}${on?', na equipe':''}">${proFig(p.id)}<span>${esc(p.nome)}${on?'<small>Na equipe ✓</small>':pick===p.id?'<small>Escolhido: toque na equipe</small>':''}</span></button></li>`;}).join('')}</ul>`+
  `<div class="mundo-equipe" data-drop data-k="equipe" ${pick?'data-pick':''}><p class="mundo-equipe-titulo">${team.length?'<b>Equipe:</b>':'<b>Sua equipe</b>'}</p>`+
  `<ul class="mundo-time">${team.map(id=>`<li>${proFig(id)}<span>${esc(proName(c,id))}</span><button type="button" class="mundo-tirar" data-tirar="${id}" data-k="tirar-${id}" aria-label="Tirar ${esc(proName(c,id))} da equipe">×</button></li>`).join('')}</ul>`+
  (pick?`<button type="button" class="btn mundo-por" data-por data-k="por">Pôr ${esc(proName(c,pick))} na equipe</button>`:'')+`</div>${fala}`,
  `<button type="button" class="back" data-park="parque" data-k="parque"><span data-icon="back"></span>Voltar ao parque</button><button type="button" class="btn" data-park="pronto" data-k="pronto">Fechar a equipe <span data-icon="arrow"></span></button>`];
}
function fechamentoView(c,m){
 const a=m.fechamento,resp=c.respostaFechamento?.[a];
 return [`<p class="eyebrow">Parque completo</p><h1 tabindex="-1">O parque está pronto para abrir.</h1>`+
  `<fieldset class="mundo-pergunta"><legend>${esc(c.fechamento)}</legend><div class="mundo-simnao"><button type="button" class="back" data-fecho="sim" data-k="sim" aria-pressed="${a==='sim'}">${a==='sim'?'✓ ':''}Sim</button><button type="button" class="back" data-fecho="nao" data-k="nao" aria-pressed="${a==='nao'}">${a==='nao'?'✓ ':''}Não</button></div></fieldset>`+
  // A lista só tem os lugares com equipe: lugar em obras não entra, e a equipe que alguém já tinha posto nele continua aqui.
  (a?`${resp?`<p>${esc(resp)}</p>`:CONDUZ?`<p>${lacuna('A conversa da Dra. Anaí depois do sim ou do não vai entrar aqui.')}</p>`:''}<h2 class="mundo-sintese-titulo">O que você montou</h2><dl class="mundo-sintese">${Mundos.sintese(c,m).filter(s=>s.equipe.length).map(s=>`<div><dt>${esc(s.lugar)}</dt><dd>${esc(s.equipe.join(', '))}</dd></div>`).join('')}</dl>`:''),
  `<button type="button" class="back" data-park="parque" data-k="parque"><span data-icon="back"></span>Voltar ao parque</button><button type="button" class="btn" data-park="concluir" data-k="concluir">Abrir o parque <span data-icon="arrow"></span></button>`];
}
// Lista de lugares na base do mapa (a mesma fila das paradas, com os lugares) e rótulos sobre o 3D.
function paintPlaces(c,m){
 const list=$('park-places');if(list.children.length!==c.lugares.length)list.innerHTML=c.lugares.map((l,i)=>`<li><button type="button" class="world-node land-leaf" data-park-lugar="${i}" data-k="place-${i}"></button><span class="node-name" aria-hidden="true"><b>${esc(l.nome)}</b><small></small></span></li>`).join('');
 // Lote R1a: lugar em obras fica na fila e no mapa com "…" e "Em obras", tracejado; tocar nele diz que está em obras (openLugar).
 c.lugares.forEach((l,i)=>{const b=list.children[i].firstChild,t=Mundos.equipe(m,l.id).length,obra=Mundos.emObras(l),look=obra?'obras':noLugar()&&park.lugar===i?'aqui':t?'feita':'aberta';b.dataset.look=look;b.innerHTML=`<span class="node-glyph">${obra?LOOK_GLYPH.preparo:t?'✓':i+1}</span>`;
  b.toggleAttribute('aria-current',look==='aqui');b.toggleAttribute('aria-disabled',obra);b.setAttribute('aria-label',`Lugar ${i+1} de ${c.lugares.length}, ${l.nome}: ${obra?'em obras':t?`equipe com ${t}`:'sem equipe'}`);list.children[i].lastChild.lastChild.textContent=obra?'Em obras':look==='aqui'?'Você está aqui':t?'Com equipe':'Sem equipe';});
 parkView?.paint(c.lugares.map(l=>({feito:Mundos.lugarFeito(m,l.id),equipe:Mundos.equipe(m,l.id).map(id=>PRO_COLOR[id]||'#5e6880')})));parkView?.select(noLugar()?park.lugar:-1);
 const tags=$('world-viewport').querySelector('.park-tags');if(tags&&!tags.children.length)tags.innerHTML=c.lugares.map((l,i)=>`<span class="park-tag" data-i="${i}"><b>${esc(l.nome)}</b><small></small><i></i></span>`).join('');
 tags?.querySelectorAll('.park-tag').forEach((t,i)=>{const n=Mundos.equipe(m,c.lugares[i].id).length,obra=Mundos.emObras(c.lugares[i]),aqui=noLugar()&&park.lugar===i;t.children[1].textContent=obra?'Em obras':aqui?'Você está aqui':n?'✓ Com equipe':'Sem equipe';t.children[2].textContent=obra?LOOK_GLYPH.preparo:n?'✓':i+1;t.dataset.feito=String(n>0&&!obra);t.toggleAttribute('data-obra',obra);t.toggleAttribute('data-aqui',aqui);});
 if(parkView)layoutParkTags(parkView.anchors());
}
// Lote 6.2: um rótulo nunca cobre as peças de um lugar nem outro rótulo. Em cima do lugar, embaixo, dos lados ou nos cantos, o que primeiro
// couber, do mais completo ao menor: cartão com o nome e o estado, só o nome, ou o selo com o número ou o ✓ (o mesmo da fila). O lugar aberto vem
// primeiro. O que não couber em nenhum lugar não aparece: a lista e a fila têm todos.
function layoutParkTags(a){
 const tags=$('world-viewport').querySelector('.park-tags');if(!tags||!park.open)return;const boxes=a.lugares.map(p=>p.box),order=a.lugares.map((_,k)=>k).sort((x,y)=>(y===a.selected)-(x===a.selected));
 const gapTo=(c,q)=>Math.hypot(Math.max(0,q.x0-c.x-c.w,c.x-q.x1),Math.max(0,q.y0-c.y-c.h,c.y-q.y1)),over=(r,q)=>r.x<q.x1+2&&q.x0-2<r.x+r.w&&r.y<q.y1+2&&q.y0-2<r.y+r.h;
 // QA A3 e M12: o rótulo fica colado no lugar. Vale o mais perto, com um pouco de vantagem para o mais completo; longe do lugar (mais de
 // 28 px da caixa dele) ele nomeava o vizinho, e então não aparece; nem quando outro lugar fica tão perto dele quanto o dele (medido com a
 // largura de tela sem arredondar, a mesma do teste; com offsetWidth, 1 px de arredondamento virava a decisão em 1440×900). 4ª rodada
 // do Y: no celular em pé metade dos lugares ficava sem rótulo; se faltar rótulo, a mesma busca só com selos, que ocupam menos, fica
 // valendo quando mostra mais lugares.
 const run=levels=>{const taken=[],out=[],free=r=>r.x>=2&&r.y>=2&&r.x+r.w<=a.width-2&&r.y+r.h<=a.height-2&&!boxes.some(q=>over(r,q))&&!taken.some(q=>over(r,q));
  for(const i of order){const t=tags.children[i],q=boxes[i];if(!t)continue;let best=null;
   for(const [n,nivel] of ['cheio','nome','selo'].entries()){if(!levels.includes(nivel))continue;t.dataset.nivel=nivel;const {width:w,height:h}=t.getBoundingClientRect(),mx=(q.x0+q.x1)/2,my=(q.y0+q.y1)/2;
    for(let d=-120;d<=120;d+=12)for(const [x,y] of [[mx-w/2+d,q.y0-h-3],[mx-w/2+d,q.y1+3],[q.x1+3,my-h/2+d/3],[q.x0-w-3,my-h/2+d/3]]){const c={x:Math.round(x),y:Math.round(y),w,h},gap=gapTo(c,q),score=gap+n*8+Math.abs(c.x+w/2-mx)/20+(c.y>q.y1?6:0);
     if(gap<=28&&boxes.every((o,k)=>k===i||gapTo(c,o)>gap)&&(!best||score<best.score)&&free(c))best={...c,score,nivel};}}
   out[i]=best;if(best)taken.push({x0:best.x,x1:best.x+best.w,y0:best.y,y1:best.y+best.h});}
  return out;};
 const shown=r=>r.filter(Boolean).length;let r=run(['cheio','nome','selo']);if(shown(r)<order.length){const s=run(['selo']);if(shown(s)>shown(r))r=s;}
 order.forEach(i=>{const t=tags.children[i],b=r[i];if(!t)return;if(b)t.dataset.nivel=b.nivel;t.style.visibility=b?'':'hidden';if(b)t.style.transform=`translate(${b.x}px,${b.y}px)`;});
}
// A passagem: uma só de cada vez, e terminar é sempre o mesmo caminho (fim natural, toque, tecla, pausa, sair da rota).
// Os 0,8 s contam do toque: a primeira montagem do parque sai do tempo da passagem (1ª volta do Y: 873 ms com 800 fixos), que não fica abaixo de 0,35 s.
const PASS_MS=760;let parkPass=null,passMs=PASS_MS;
function endParkPass(){const p=parkPass;if(!p)return;parkPass=null;p.anims.forEach(x=>x.cancel());delete $('world-stage').dataset.parkPass;p.done();}
function startParkPass(dir,anims,done){$('world-stage').dataset.parkPass=dir;parkPass={anims:anims.filter(Boolean),done};parkPass.anims[0].onfinish=endParkPass;}
const passAnim=(e,frames)=>e?.animate(frames,{duration:passMs,easing:E.chega,fill:'both'});
const canPass=()=>!motionOff()&&worldView&&!worldFailed&&parkView&&!parkFailed&&mapLayer;
addEventListener('pointerdown',endParkPass,true);addEventListener('keydown',endParkPass,true);
function openPark(){
 const c=parkContent();if(!c)return;const t0=performance.now();endTips();closeNote(true);finishPassage();park.open=true;park.view='parque';park.lugar=-1;park.pick=null;park.fala=null;park.foto='';
 const vp=$('world-viewport');
 if(!vp.querySelector('.park-tags')){const t=document.createElement('div');t.className='park-tags';t.setAttribute('aria-hidden','true');vp.append(t);}
 if(!parkView&&!parkFailed&&window.Parque&&!worldFailed){try{parkView=Parque.create(vp,{lugares:c.lugares,onPick:i=>openLugar(i),onFrame:layoutParkTags,onError:m=>{parkFailed=true;setWorldStatus(m);}});window.parkWorld=parkView;}catch{parkFailed=true;}}
 if(!parkView&&!worldFailed)setWorldStatus('O mapa 3D do parque não abriu. Os lugares estão na lista.');
 parkView?.setMotion(!motionOff());parkView?.setActive(true);paintWorld();parkView?.render();focusMundo();$('world-live').textContent='Você entrou no parque aquático.';
 passMs=Math.max(350,PASS_MS-(performance.now()-t0));if(canPass()&&worldView.dive(0,passMs/1000-.06)){const c=vp.querySelector('.park-canvas'),tags=vp.querySelector('.park-tags'),closed={opacity:0,transform:'scale(1.16)'},open={opacity:1,transform:'scale(1)'};
  startParkPass('in',[passAnim(c,[closed,{...closed,offset:.4},open]),passAnim(tags,[{opacity:0},{opacity:0,offset:.7},{opacity:1}]),passAnim(mapLayer,[{opacity:1},{opacity:0,offset:.25},{opacity:0}])],()=>worldView.setActive(false));}
 else worldView?.setActive(false);
}
function closePark(instant=false){
 if(!park.open)return;endParkPass();const pass=!instant&&canPass();park.open=false;park.pick=null;park.fala=null;$('world-stage').removeAttribute('data-park');$('park-places').hidden=true;$('world-nodes').hidden=false;parkView?.setActive(false);
 if(instant){worldView?.emerge(0);return;}if(worldView&&!worldFailed){worldView.setActive(true);passMs=PASS_MS;worldView.emerge(0,pass?passMs/1000-.06:0);}paintWorld();
 if(pass){const c=$('world-viewport').querySelector('.park-canvas'),open={opacity:1,transform:'scale(1)'},closed={opacity:0,transform:'scale(1.16)'};
  startParkPass('out',[passAnim(c,[open,{...closed,offset:.6},closed]),passAnim(mapLayer,[{opacity:0},{opacity:0,offset:.6},{opacity:1}])],()=>worldView.emerge(0));}
}
// Lote R1a: lugar em obras não abre, por nenhum caminho (lista, fila, rótulo ou toque no 3D): a faixa de mensagens diz por quê.
// Na primeira vez que um lugar abre, o Rumo mostra o gesto de montar a equipe (a única dica, world-bridge.js).
function openLugar(i){if(!park.open)return;const l=parkContent().lugares[i];if(Mundos.emObras(l)){status('mundo-status',`${l.nome} está em obras.`);mundoSay(`${l.nome} está em obras.`);return;}
 park.view='lugar';park.lugar=i;park.pick=null;park.fala=null;if($('mundo-status').dataset.error!=='true')status('mundo-status','');paintWorld();focusMundo();maybeTip();}
// QA B5: quando a fala (ou a oferta) abre e não cabe, o painel desce até ela; se o corte cairia no meio do lugar ou da atividade,
// desce até a linha da dica, com uma folga no fim do painel se precisar, e o título sai inteiro.
function showFala(){const f=$('mundo-fields'),fala=f.querySelector('.mundo-fala');if(!fala)return;const fr=f.getBoundingClientRect(),b=fala.getBoundingClientRect();if(b.bottom<=fr.bottom+1&&b.top>=fr.top-1)return;
 const top=e=>e.getBoundingClientRect().top-fr.top+f.scrollTop;let y=f.scrollTop+b.bottom-fr.bottom+4;
 const cut=[...f.querySelectorAll(':scope>.eyebrow,:scope>h1,:scope>p:not(.mundo-dica)')].filter(e=>e.checkVisibility()).some(e=>top(e)<y&&top(e)+e.offsetHeight>y);
 if(cut){const dica=f.querySelector('.mundo-dica');if(dica)y=Math.max(y,top(dica)-4);}const max=f.scrollHeight-f.clientHeight;if(y>max)f.style.paddingBottom=(parseFloat(getComputedStyle(f).paddingBottom)+y-max)+'px';f.scrollTop=y;}
function focusMundo(){const h=$('mundo-fields')?.querySelector('h1');if(!h)return;$('mundo-fields').scrollTop=0;h.focus({preventScroll:true});}
// A faixa de mensagens do mundo: o que não é erro sai sozinho em 2,5 s (6 s com data-hold), como a da pergunta no 5.7; o erro fica
// até a criança agir. (Achado ao reproduzir o B8: "Mundo 1 de 7 concluído" ficava preso nela no celular com movimento reduzido.)
let mundoTimer=0;new MutationObserver(()=>{const s=$('mundo-status');if(!s)return;const ms='hold' in s.dataset?6000:2500;delete s.dataset.hold;clearTimeout(mundoTimer);if(s.textContent&&s.dataset.error!=='true')mundoTimer=setTimeout(()=>{if(s.dataset.error!=='true')s.textContent='';},ms);}).observe($('world-question'),{childList:true,characterData:true,subtree:true});
function mundoSay(text){$('world-live').textContent=text;}
// Pôr na equipe: grava, a fala do profissional aparece e é lida no leitor de tela.
function addPro(id){
 const c=parkContent(),l=c.lugares[park.lugar],p=mundosNow(),m=Mundos.doMundo(p,PARK_ID);if(Mundos.equipe(m,l.id).includes(id)){park.pick=null;paintWorld();return;}
 p.mundos={...p.mundos,[PARK_ID]:Mundos.incluir(m,l.id,id)};const ok=saveMundos(p);
 const f=Mundos.fala(c,l.id,id);park.pick=null;park.fala={prof:id,...f};paintWorld();
 status('mundo-status',ok?'':'Não deu para guardar neste navegador. A equipe fica nesta tela enquanto ela estiver aberta.',!ok);
 mundoSay(`${proName(c,id)} entrou na equipe. ${f.texto}${f.explicacao?' '+f.explicacao:''}`);
 const fala=$('mundo-fields').querySelector('.mundo-fala');if(fala&&!motionOff())fala.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],{duration:160,easing:E.chega});
 showFala();
 // QA B6: depois de um arrasto com o dedo o foco ficava no corpo da página; ele vai para o cartão de quem entrou.
 if(!document.activeElement?.closest?.('#world-stage'))$('mundo-fields').querySelector(`[data-k="pro-${id}"]`)?.focus({preventScroll:true});
}
// QA B8: tirar a última pessoa de um lugar de um mundo terminado avisa na hora que o mundo deixou de estar terminado.
function removePro(id){const c=parkContent(),l=c.lugares[park.lugar],p=mundosNow(),was=Mundos.feito(p,0);p.mundos={...p.mundos,[PARK_ID]:Mundos.retirar(Mundos.doMundo(p,PARK_ID),l.id,id)};saveMundos(p);park.fala=null;paintWorld();
 const undone=was&&!Mundos.feito(mundosNow(),0),warn=`${l.nome} ficou sem equipe. O mundo 1 volta a ficar terminado quando este lugar tiver alguém.`;if(undone){$('mundo-status').dataset.hold='';status('mundo-status',warn);}mundoSay(`${proName(c,id)} saiu da equipe.${undone?' '+warn:''}`);
 $('mundo-fields').querySelector('[data-k="equipe"]')?.scrollIntoView({block:'nearest',behavior:'instant'});$('mundo-fields').querySelector(`[data-k="pro-${id}"]`)?.focus({preventScroll:true});}
// Pronto: sem ninguém, diz o que falta junto da equipe (como o 5.11); faltando o prioritário, ele se oferece uma vez; senão, volta ao
// parque, que diz quantos lugares têm equipe. O último lugar leva ao fechamento.
function donePlace(){
 const c=parkContent(),l=c.lugares[park.lugar],p=mundosNow(),m=Mundos.doMundo(p,PARK_ID);
 // QA B3: com um profissional escolhido e a equipe vazia, a mensagem aponta o segundo toque, e o foco vai para "Pôr ... na equipe".
 if(!Mundos.lugarFeito(m,l.id)&&park.pick){status('mundo-status',`Toque na equipe para pôr ${proName(c,park.pick)}.`,true);const z=$('mundo-fields').querySelector('[data-drop]');z?.setAttribute('data-falta','');$('mundo-fields').querySelector('[data-por]')?.focus({preventScroll:true});z?.scrollIntoView({block:'nearest',behavior:'instant'});return;}
 if(!Mundos.lugarFeito(m,l.id)){status('mundo-status','Ponha pelo menos um profissional na equipe para seguir.',true);const z=$('mundo-fields').querySelector('[data-drop]');z?.setAttribute('data-falta','');z?.scrollIntoView({block:'nearest',behavior:'instant'});$('mundo-fields').querySelector('.mundo-pro:not([data-on])')?.focus({preventScroll:true});return;}
 const v=Mundos.voluntario(c,m,l.id);
 // QA M1: a oferta só conta quando a criança responde (Pôr na equipe ou Seguir sem); Esc ou Voltar no meio não a gastam.
 if(v){park.fala={prof:v.prof,texto:v.texto,vol:true};paintWorld();mundoSay(`${proName(c,v.prof)}: ${v.texto}`);$('mundo-fields').querySelector('[data-vol=sim]')?.focus({preventScroll:true});showFala();return;}
 leavePlace(c,mundosNow());
}
// Lote 6.3: ao terminar um lugar, a equipe entra na coleção e só depois de gravar o card do lugar aparece. Sem gravar, não há card.
function leavePlace(c,p){
 const l=c.lugares[park.lugar],r=Mundos.colecionar(p,PARK_ID,l.id),m=Mundos.doMundo(r.p,PARK_ID),ok=saveMundos(r.p);park.fala=null;park.pick=null;park.desc=null;park.novas=r.novas;
 const k=Mundos.contagem(c,m),dito=`${l.nome} com equipe. ${k.feitos} de ${k.de} lugares.`;
 if(ok){park.view='equipe';status('mundo-status','');paintWorld();mundoSay(dito+(r.novas.length?` Carta nova: ${r.novas.map(x=>proName(c,x)).join(', ')}.`:''));focusMundo();Cel.entrar($('mundo-fields'),60);return;}
 park.view=Mundos.parqueCompleto(c,m)?'fechamento':'parque';const from=park.lugar;park.lugar=-1;paintWorld();status('mundo-status','Não deu para guardar neste navegador. A equipe fica nesta tela enquanto ela estiver aberta.',true);
 mundoSay(dito);if(park.view!=='parque'||!focusLugar(from))focusMundo();
}
// O que a criança escreve é gravado ao sair do campo, com Enter ou em "Guardar"; Esc fecha sem gravar.
function saveDesc(i){const c=parkContent(),l=c.lugares[park.lugar],p=mundosNow();p.mundos={...p.mundos,[PARK_ID]:Mundos.descrever(Mundos.doMundo(p,PARK_ID),l.id,i.dataset.desc,i.value)};
 if(!saveMundos(p))status('mundo-status','Não deu para guardar neste navegador. O texto fica nesta tela enquanto ela estiver aberta.',true);}
function closeDesc(){const id=park.desc;if(!id)return;park.desc=null;paintWorld();$('mundo-fields').scrollTop=park.rola;$('mundo-fields').querySelector(`[data-k="escrever-${id}"]`)?.focus({preventScroll:true});}
// O foco volta ao lugar de onde a criança veio e o painel rola até ele (deitado, o painel tem uns 180 px e o lugar ficava fora: 1ª volta do Y).
function focusLugar(i){const b=$('mundo-fields').querySelector(`[data-lugar="${i}"]`);if(!b)return false;b.focus({preventScroll:true});b.scrollIntoView({block:'nearest',behavior:'instant'});return true;}
function answerClosing(a){const p=mundosNow(),m=Mundos.doMundo(p,PARK_ID);p.mundos={...p.mundos,[PARK_ID]:{...m,fechamento:a}};saveMundos(p);status('mundo-status','');paintWorld();$('mundo-fields').querySelector(`[data-fecho="${a}"]`)?.focus({preventScroll:true});mundoSay(a==='sim'?'Você respondeu sim.':'Você respondeu não.');park.foto=Cel.foto();}
function concludeWorld(){
 const c=parkContent(),p=mundosNow(),m=Mundos.doMundo(p,PARK_ID);
 if(!['sim','nao'].includes(m.fechamento)){status('mundo-status','Responda sim ou não para concluir.',true);$('mundo-fields').querySelector('[data-fecho]')?.focus({preventScroll:true});return;}
 // Lote 6.3: cards depois da passagem, na primeira conclusão; a foto foi lida ao responder sim ou não.
 const first=!m.concluido,img=first?park.foto||Cel.foto():'',after=first?()=>Cel.mundo(0,img):null;p.mundos={...p.mundos,[PARK_ID]:{...m,concluido:true}};p.atual=1;
 // A conclusão só vale gravada: com a gravação recusada, a memória da tela volta ao que era (equipes e resposta ficam; mundo atual e
 // concluído, não), senão a trilha passava ao mundo 2 sem nada guardado (1ª volta do Y, mapa-clique).
 const mem=mundosMem;
 if(!saveMundos(p)){mundosMem=mem;status('mundo-status','Não deu para guardar neste navegador. Tente de novo.',true);return;}
 closePark(true);paintWorld();
 if(!worldView||worldFailed){$('world-live').textContent='Mundo 1 de 7 concluído.';focusMundo();after?.();return;}
 worldView.setActive(true);if(!first)cheered.add(0);// a comemoração vem uma vez por mundo, como no 5.11
 passPhase(0,{title:'Mundo 1 de 7 concluído',done:`${Mundos.fatos(c,m).lugares} lugares com equipe`,guard:400,after});// o que ela montou: 4 hoje, 6 em quem tinha equipe nos lugares em obras
}
// Arrastar: o profissional segue o dedo ou o ponteiro numa cópia; solto sobre a equipe, entra nela. Um toque sem arrastar escolhe
// o profissional, e o toque seguinte na equipe o põe lá. No teclado (clique sem ponteiro), Enter põe direto.
let drag=null;
function dropZone(x,y){return document.elementFromPoint(x,y)?.closest?.('#world-stage [data-drop]');}
function dragStart(e){const b=e.target.closest('.mundo-pro');if(!b||b.hasAttribute('data-on')||e.button>0)return;drag={id:b.dataset.pro,b,x:e.clientX,y:e.clientY,on:false,pid:e.pointerId};}
// QA M3: com a equipe fora da área (tela baixa, deitado), o dedo parado perto da borda do painel faz ele rolar até ela.
function edgeScroll(){if(!drag?.on)return;const f=$('mundo-fields'),r=f.getBoundingClientRect(),y=drag.lastY,v=y>r.bottom-48?Math.min(14,(y-(r.bottom-48))/3+4):y<r.top+48?-Math.min(14,(r.top+48-y)/3+4):0;
 if(v){f.scrollTop+=v;f.querySelector('[data-drop]')?.toggleAttribute('data-over',!!dropZone(drag.lastX,drag.lastY));}drag.raf=requestAnimationFrame(edgeScroll);}
function dragMove(e){if(!drag||e.pointerId!==drag.pid)return;drag.lastX=e.clientX;drag.lastY=e.clientY;if(!drag.on){if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<8)return;drag.on=true;
  const g=drag.b.cloneNode(true),r=drag.b.getBoundingClientRect();g.className='mundo-pro mundo-ghost';g.removeAttribute('data-k');g.style.width=r.width+'px';drag.dx=e.clientX-r.left;drag.dy=e.clientY-r.top;document.body.append(g);drag.g=g;drag.b.dataset.dragging='';drag.raf=requestAnimationFrame(edgeScroll);}
 e.preventDefault();drag.g.style.transform=`translate(${e.clientX-drag.dx}px,${e.clientY-drag.dy}px)`;
 const z=dropZone(e.clientX,e.clientY);$('mundo-fields').querySelector('[data-drop]')?.toggleAttribute('data-over',!!z);}
function dragEnd(e){const d=drag;if(!d||e.pointerId!==d.pid)return;drag=null;cancelAnimationFrame(d.raf);if(!d.on)return;d.g.remove();delete d.b.dataset.dragging;$('mundo-fields').querySelector('[data-drop]')?.removeAttribute('data-over');
 eatClick=true;if(e.type==='pointerup'&&dropZone(e.clientX,e.clientY))addPro(d.id);}
// O arrasto termina com um clique no que estava embaixo do dedo: só esse é ignorado; o próximo toque começa outro gesto.
let eatClick=false;
addEventListener('pointerdown',e=>{eatClick=false;if(park.open&&park.view==='lugar')dragStart(e);},true);addEventListener('keydown',()=>{eatClick=false;},true);
addEventListener('pointermove',dragMove,{passive:false});addEventListener('pointerup',dragEnd);addEventListener('pointercancel',dragEnd);
$('world-stage').addEventListener('click',e=>{
 if(!bosqueOn())return;
 if(eatClick){eatClick=false;return;}
 // QA M1, B1 e B2: o segundo clique de um toque duplo (detail > 1) não repete a ação nem cai no botão que apareceu embaixo.
 if(e.detail>1&&e.target.closest('[data-park],[data-vol],[data-lugar],[data-park-lugar],[data-fecho],[data-por],[data-tirar],[data-escrever]'))return;
 const t=e.target;
 if(t.closest('.park-tag')){openLugar(Number(t.closest('.park-tag').dataset.i));return;}
 if(t.closest('[data-park-lugar]')){openLugar(Number(t.closest('[data-park-lugar]').dataset.parkLugar));return;}
 const a=t.closest('[data-park]')?.dataset.park;
 if(a==='lugar'){openLugar(park.lugar);return;}if(a==='guardar'){closeDesc();return;}
 const escrever=t.closest('[data-escrever]');if(escrever){park.desc||(park.rola=$('mundo-fields').scrollTop);park.desc=escrever.dataset.escrever;paintWorld();const i=$('cel-desc');i?.focus({preventScroll:true});i?.parentNode.scrollIntoView({block:'nearest',behavior:'instant'});return;}// o bloco inteiro: campo e Guardar à vista
 if(a==='abrir'){openPark();return;}if(a==='mundo1'){goStop(0);return;}if(a==='trilha'){closePark();focusMundo();return;}if(a==='parque'){park.view='parque';const was=park.lugar;park.lugar=-1;park.fala=null;park.pick=null;status('mundo-status','');paintWorld();if(!focusLugar(was))focusMundo();return;}
 if(a==='pronto'){donePlace();return;}if(a==='fechar'){park.view='fechamento';paintWorld();focusMundo();return;}if(a==='concluir'){concludeWorld();return;}
 if(t.closest('[data-lugar]')){openLugar(Number(t.closest('[data-lugar]').dataset.lugar));return;}
 const tirar=t.closest('[data-tirar]');if(tirar){removePro(tirar.dataset.tirar);return;}
 const vol=t.closest('[data-vol]');if(vol){const c=parkContent(),l=c.lugares[park.lugar],p=mundosNow(),m=Mundos.doMundo(p,PARK_ID);p.mundos={...p.mundos,[PARK_ID]:{...m,ofertas:[...new Set([...(m.ofertas||[]),l.id])]}};saveMundos(p);
  if(vol.dataset.vol==='sim')addPro(park.fala.prof);else{park.fala=null;leavePlace(c,mundosNow());}return;}
 const fecho=t.closest('[data-fecho]');if(fecho){answerClosing(fecho.dataset.fecho);return;}
 const pro=t.closest('.mundo-pro');if(pro){if(pro.hasAttribute('data-on'))return;if(e.detail===0){addPro(pro.dataset.pro);return;}park.pick=park.pick===pro.dataset.pro?null:pro.dataset.pro;paintWorld();
  if(park.pick){$('mundo-fields').querySelector('[data-por]')?.scrollIntoView({block:'nearest',behavior:'instant'});mundoSay(`${proName(parkContent(),park.pick)} escolhido. Toque na equipe para pôr.`);}return;}
 if(t.closest('[data-por]')||park.pick&&t.closest('[data-drop]')){if(park.pick)addPro(park.pick);return;}
});
// A fila do parque responde ao teclado como a das paradas (botões); Esc dentro de um lugar volta ao parque.
$('world-stage').addEventListener('change',e=>{if(e.target.dataset?.desc===park.desc)saveDesc(e.target);});// Esc fecha sem gravar
$('world-stage').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches?.('[data-desc]')){e.preventDefault();saveDesc(e.target);closeDesc();}});
addEventListener('keydown',e=>{if(e.key!=='Escape'||!park.open||!bosqueOn()||note)return;if(park.desc){closeDesc();return;}if(park.pick){park.pick=null;paintWorld();return;}if(park.view!=='parque'){$('mundo-actions').querySelector('[data-park=parque]')?.click();}});
{const q=$('world-question'),f=document.createElement('div');f.id='mundo-fields';f.className='mundo-fields';q.append(f);
 const s=document.createElement('p');s.id='mundo-status';s.className='status mundo-status';s.setAttribute('role','status');s.setAttribute('aria-live','polite');q.append(s);
 const a=document.createElement('div');a.id='mundo-actions';a.className='mundo-actions';q.append(a);
 const l=document.createElement('ol');l.id='park-places';l.className='world-steps park-places';l.setAttribute('aria-label','Lugares do parque');l.hidden=true;$('world-nodes').after(l);}
