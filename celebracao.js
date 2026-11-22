// Lote 6.3: celebração, cards e coleção. A regra fica em mundos.js; aqui, só a tela: o card do lugar (no painel do parque), os cards do
// mundo (camada sobre o mapa, depois do fechamento e da passagem) e a tela cheia do fim da etapa (hoje só com dados de exemplo).
// Tudo é gravado antes de abrir. Nenhum card avança sozinho, pular está sempre à vista e cada card mostra o que a criança fez, sem ponto,
// nota nem tempo. Só transform e opacity animam (WAAPI), até 12 peças de uma vez; toque ou tecla levam ao estado final; movimento
// reduzido e pausa mostram tudo pronto, com um fade de 150 ms.
const Cel=(()=>{
 const dlg=$('world-celebration'),pl=(n,um,mais)=>`${n} ${n===1?um:mais}`,SAIDAS=`<button type="button" class="back" data-cel="ir">Voltar à trilha</button><button type="button" class="back" data-cel="parar">Ver meu espaço</button>`;
 // Lote R1a, fim honesto: sem mundo seguinte pronto, o caminho termina no que a criança fez, e o panorama é o botão principal.
 const FIM=`<button type="button" class="back" data-cel="ir">Voltar à trilha</button><button type="button" class="btn" data-cel="panorama">Ver meu panorama ${icon('arrow')}</button>`;
 let runs=[],root=null,seq=null,por='mapa';
 function settle(){runs.forEach(a=>{try{a.finish();}catch{}});runs=[];root?.querySelectorAll('[data-n]').forEach(e=>e.textContent=e.dataset.n);}
 // Cada [data-in] entra com mola, em cascata (até 6); "vira" é a carta que começa de costas. Os números ([data-n]) contam de 0 ao valor
 // enquanto entram (0,6 s). O personagem faz um gesto do elenco, uma vez; parado, fica na pose-chave.
 function entrar(el,passo=80){
  settle();root=el;const h=el.querySelector('[data-heroi]'),f=h?.firstChild;
  if(motionOff()){if(f)pose(f,h.dataset.heroi);runs=[el.animate([{opacity:0},{opacity:1}],{duration:150})];return;}
  runs=[...el.querySelectorAll('[data-in]')].slice(0,6).map((e,i)=>e.dataset.in==='vira'?e.animate([{transform:'rotateY(180deg)'},{transform:'rotateY(0deg)'}],{duration:520,delay:i*passo,easing:E.chega,fill:'backwards'})
   :e.animate([{opacity:0,transform:'translateY(16px) scale(.9)',easing:E.mola},{opacity:1,transform:'none',offset:.6},{opacity:1,transform:'none'}],{duration:600,delay:i*passo,fill:'backwards'}));
  const ns=runs.filter(a=>a.effect.target.dataset.n),tick=()=>{let on=false;for(const a of ns){const e=a.effect.target,t=a.effect.getComputedTiming().progress;e.textContent=Math.ceil(e.dataset.n*(t??1))||1;on||=t!==null;}if(on&&runs.length)requestAnimationFrame(tick);};
  if(ns.length)tick();if(f)runs.push(...animarGesto(f,h.dataset.heroi,1));
 }
 const heroi=(n,g)=>`<div class="trail-rumo" data-heroi="${g}">${companion(n)}</div>`;
 // Carta: o que o profissional faz (só o que a Dra. escreveu), onde a criança o pôs e o que ela escreveu. A figura vem de proFig
 // (parque.js), o único ponto que desenha o profissional (revisão de 20/11).
 const carta=(x,vira,guardar)=>`<li class="carta"${vira?' data-in="vira"':''}>${vira?'<i class="carta-v"></i>':''}<div class="carta-f">${proFig(x.id)}<b>${esc(x.nome)}</b>`+
  `${x.fala?`<p>“${esc(x.fala)}”</p>`:CONDUZ?`<p>${lacuna('O que este profissional faz: a Dra. Anaí vai escrever.')}</p>`:''}<p>Você pôs em: ${esc(x.lugares.join(', '))}.${x.ofereceu.length?` Ofereceu ajuda em: ${esc(x.ofereceu.join(', '))}.`:''}</p>`+
  x.escritas.map(d=>`<p class="carta-sua">Você escreveu: “${esc(d.texto)}”</p>`).join('')+(guardar?`<button type="button" class="back" data-cel="lembrar" data-id="${x.id}" aria-pressed="${x.lembrar}">${x.lembrar?'✓ ':''}Quero lembrar</button>`:'')+`</div></li>`;
 const linha=(x,curta)=>`<b>Mundo ${x.n} · ${esc(x.nome)}</b><p>${curta?pl(x.lugares.length,'lugar','lugares')+' com equipe.':x.lugares.map(s=>`${esc(s.lugar)}: ${esc(s.equipe.join(', '))}`).join('<br>')}</p>`+
  (x.resposta?`<p>${esc(x.pergunta)} Você respondeu: <b>${x.resposta}</b>.</p>`:'')+x.escritas.map(d=>`<p class="carta-sua">${esc(d.prof)}, ${esc(d.lugar)}: “${esc(d.texto)}”</p>`).join('');
 // Acessório neutro do Rumo: um entre três, e dá para trocar ou tirar. Nunca de profissão.
 function vestir(k){
  if(k!==undefined){const p=mundosNow();p.acessorio=p.acessorio===k?'':k;saveMundos(p);}const a=window.rumoAcc=mundosNow().acessorio||'';
  document.querySelectorAll('.companion[data-character=rumo]:not([data-prova])').forEach(e=>e.dataset.acc=a);
  document.querySelectorAll('[data-cel=acc]').forEach(b=>{const on=b.dataset.id===a;b.setAttribute('aria-pressed',on);b.lastChild.lastChild.textContent=on?'✓ Escolhido':'';});
 }
 const acessorios=()=>`<fieldset class="cel-acc"><legend>Escolha um acessório para o Rumo, se quiser.</legend>${Object.entries(Mundos.ACESSORIOS).map(([k,t])=>
  `<button type="button" class="back" data-cel="acc" data-id="${k}" data-in aria-pressed="false"><span class="companion" data-character="rumo" data-prova data-acc="${k}" aria-hidden="true">${castSVG('rumo')}</span><span>${t}<small></small></span></button>`).join('')}</fieldset>`;
 // Um card por vez: "n de N" e pular no topo, a ação embaixo, e o meio rola por dentro se não couber. O foco vai para o título.
 function mostra(){
  const s=seq,k=s.cards[s.i](),n=`${s.i+1} de ${s.cards.length}`;
  dlg.innerHTML=`<article class="trail-card cel" data-card="${s.i+1}"><div class="cel-topo"><p aria-hidden="true">${n}</p><button type="button" class="back" data-cel="pular">${s.pular}</button></div><div class="cel-corpo">${k.html.replace('</h2>',`<span class="visually-hidden">, ${n}</span></h2>`)}</div>`+
   `<div class="cel-pe">${k.acoes||`<button type="button" class="btn" data-cel="seguir">Continuar ${icon('arrow')}</button>`}</div></article>`;
  const h=dlg.querySelector('h2');h.id='cel-t';h.tabIndex=-1;h.focus({preventScroll:true});entrar(dlg.firstChild,k.passo);vestir();k.depois?.();
 }
 // Quando a camada abre dentro de um toque (quem pula a passagem), o clique desse mesmo gesto não age no card: "ev" guarda o toque que
 // abriu, e o toque seguinte o limpa. Teclado e um toque novo nunca são engolidos.
 function abrir(cards,fim,pular='Pular para o mapa',cheio=false){seq={cards:cards.filter(Boolean),i:0,fim,pular,ev:window.event};por='mapa';dlg.toggleAttribute('data-cheio',cheio);if(!dlg.open)dlg.showModal();mostra();}
 function fechar(){if(!dlg.open)return;seq=null;settle();dlg.close();dlg.innerHTML='';}
 dlg.addEventListener('close',()=>{const s=seq;if(!s||dlg.open)return;seq=null;settle();dlg.innerHTML='';s.fim?.(por);});
 // O segundo toque de um toque duplo não passa o card seguinte.
 document.addEventListener('click',e=>{
  const b=e.target.closest('[data-cel]');if(!b)return;const a=b.dataset.cel;
  if(a==='acc'){vestir(b.dataset.id);return;}
  if(a==='lembrar'){saveMundos(Mundos.lembrar(mundosNow(),b.dataset.id));espaco();document.querySelector(`[data-cel=lembrar][data-id="${b.dataset.id}"]`)?.focus();return;}
  if(!seq||e.detail>1)return;if(seq.ev?.type==='pointerdown'&&e.detail){seq.ev=0;return;}
  if(a==='seguir'&&seq.i+1<seq.cards.length){seq.i++;mostra();}else{por=a;dlg.close();}
 });
 addEventListener('pointerdown',e=>{settle();if(seq&&e!==seq.ev)seq.ev=0;},true);addEventListener('keydown',e=>{if(e.key!=='Tab'&&e.key!=='Shift')settle();},true);reduce.addEventListener('change',settle);
 // Card do lugar: a equipe, o que cada um diz, o selo de carta nova e o campo opcional, que nasce fechado e abre um por vez
 // (origem, 20/11). Sem mínimo e sem validar; quem não escreve vê o mesmo card.
 function lugar(c,m,l,novas,todos,aberto){
  return [`<p class="eyebrow">${esc(l.nome)}</p><h1 tabindex="-1">Equipe montada.</h1><ul class="cel-equipe">${Mundos.equipe(m,l.id).map(id=>{const f=Mundos.fala(c,l.id,id),d=Mundos.descricao(m,l.id,id);
   return `<li data-in>${proFig(id)}<div><b>${esc(proName(c,id))}</b>${novas.includes(id)?' <span class="cel-novo">Carta nova</span>':''}<p>“${esc(f.texto)}”</p>`+
    (aberto===id?`<div class="cel-desc"><label for="cel-desc">O que ele faria aqui?</label><textarea id="cel-desc" data-desc="${id}" data-k="desc" maxlength="140" rows="2">${esc(d)}</textarea><button type="button" class="back" data-park="guardar" data-k="guardar">Guardar</button></div>`
     :`${d?`<p class="carta-sua">Você escreveu: “${esc(d)}”</p>`:''}<button type="button" class="back" data-escrever="${id}" data-k="escrever-${id}">${d?'Mudar o que escrevi':'Escrever o que ele faria aqui'}</button>`)+`</div></li>`;}).join('')}</ul>`,
   `<button type="button" class="back" data-park="lugar" data-k="lugar"><span data-icon="back"></span>Mudar a equipe</button><button type="button" class="btn" data-park="${todos?'fechar':'parque'}" data-k="seguir">${todos?'Ver o parque completo':'Escolher outro lugar'} <span data-icon="arrow"></span></button>`];
 }
 // A foto do parque é o quadro do 3D, lido logo depois de desenhar.
 const foto=()=>{try{parkView.render();return $('world-viewport').querySelector('.park-canvas').toDataURL('image/jpeg',.85);}catch{return '';}};
 // Cards do mundo. "pronto" diz se o mundo seguinte já tem exercício (hoje só o mundo 1 tem; o teste passa true).
 function mundo(i,img,pronto=!!Mundos.conteudo(i+1)){
  if(!bosqueOn())return;const prox=Mundos.LISTA[i+1],L=Mundos.LISTA[i],c=Mundos.conteudo(i),p=mundosNow(),f=Mundos.fatos(c,Mundos.doMundo(p,L.conteudo)),cs=Mundos.cartas(p).filter(x=>x.mundo===L.conteudo),pan=Mundos.panorama(p).find(x=>x.n===i+1);
  abrir([
   // Fato com zero não aparece: "0 descrições" viraria cobrança.
   ()=>({passo:150,html:heroi('rumo','celebrar')+`<h2>${i?'O mundo':'O parque'} que você montou</h2>${img?`<img class="cel-foto" data-in src="${img}" alt="O seu parque, com as equipes nos lugares.">`:''}<ul class="cel-fatos">`+
    [[f.lugares,'lugares com equipe'],[f.profissionais,'profissionais nas equipes'],[f.descricoes,f.descricoes===1?'descrição sua':'descrições suas']].filter(x=>x[0]).map(([n,t])=>`<li><b data-in data-n="${n}" aria-hidden="true">${n}</b><span><span class="visually-hidden">${n} </span>${t}</span></li>`).join('')+'</ul>'}),
   cs.length&&(()=>({html:heroi('bino','apontar')+`<h2>Cartas novas</h2><p class="trail-lead">${pl(cs.length,'carta entrou','cartas entraram')} na sua coleção.</p><ul class="cartas">${cs.slice(0,6).map(x=>carta(x,1)).join('')}</ul>${cs.length>6?`<p class="trail-lead">+ ${pl(cs.length-6,'carta','cartas')}</p>`:''}`})),
   pan&&(()=>({html:heroi('teo','acolher')+`<h2>Seu panorama cresceu</h2><div class="cel-linha" data-in><span class="cel-novo">Novo</span> ${linha(pan,1)}</div><p class="trail-lead">Tudo no panorama veio de você.</p>`})),
   // O card lê o mundo seguinte (revisão de 20/11): sem exercício, não promete entrada; oferece a trilha ou o Meu espaço.
   ()=>({html:heroi('rumo','apontar')+(pronto?`<h2>Mundo ${i+2} está aberto</h2><p class="trail-lead">${esc(prox.nome)} é o próximo. Você entra quando quiser.</p>`
     :`<h2>O próximo mundo está em obras</h2><p class="trail-lead">${CONDUZ?'A Dra. Anaí está preparando o exercício dele. ':''}Ele já aparece na trilha.</p>`)+acessorios(),
    acoes:pronto?`<button type="button" class="back" data-cel="parar">Parar por aqui</button><button type="button" class="back" data-cel="ir">Ir para o mundo ${i+2}</button>`
     :FIM})
  ],a=>{if(a==='parar')show('painel');else if(a==='panorama'){show('painel');const h=$('pan-t');h.scrollIntoView({block:'start',behavior:'instant'});h.focus({preventScroll:true});}else focusMundo();});
 }
 // Fim da etapa: tela cheia, cinco passos. Ninguém chega aqui hoje; "p" vem de quem chama (dados de exemplo no teste).
 function etapa(p){
  const cs=Mundos.cartas(p),pan=Mundos.panorama(p),mais=cs.reduce((a,x)=>x.lugares.length>a.lugares.length?x:a),lug=pan.reduce((n,x)=>n+x.lugares.length,0),es=pan.reduce((n,x)=>n+x.escritas.length,0);
  abrir([
   ()=>({html:`<div class="cel-bosque"><p aria-hidden="true">${'<span class="world-node land-leaf" data-look="feita">✓</span>'.repeat(7)}</p><div>${['bino','pipa','rumo','teo'].map(n=>companion(n,'celebrate')).join('')}</div></div><h2>Exploração completa</h2><p class="trail-lead">Você construiu os 7 mundos da etapa 1.</p>`,
    // Os quatro comemoram em fila e o confete cai em quatro levas de seis, até 4,4 s: nunca mais de 12 peças.
    depois(){if(motionOff())return;dlg.querySelectorAll('.cel-bosque .companion').forEach((f,j)=>{const g=animarGesto(f,'celebrar',1);g.forEach(a=>a.effect.updateTiming({delay:j*700}));runs.push(...g);});
     const box=document.createElement('div');box.className='trail-confetti';dlg.append(box);
     for(let j=0;j<24;j++){const e=document.createElement('i');e.style.cssText=`left:${j*37%96+2}%;background:${LOW[j%5]};opacity:0`;box.append(e);
      runs.push(e.animate([{opacity:1,transform:'translateY(-20px) rotate(0deg)'},{opacity:1,transform:`translateY(${innerHeight*.9}px) rotate(${j%2?300:-260}deg)`,offset:.9},{opacity:0,transform:`translateY(${innerHeight}px) rotate(${j%2?330:-290}deg)`}],{duration:1100,delay:(j/6|0)*1100,easing:E.antes}));}}}),
   ()=>({html:`<h2>Sua coleção</h2><p class="trail-lead">${pl(cs.length,'carta','cartas')}</p><ul class="cartas">${cs.map(x=>carta(x)).join('')}</ul>`}),
   ()=>({passo:200,html:`<h2>O que os guias viram</h2><ul class="cel-guias">${[['rumo',`Você montou equipes em ${pl(lug,'lugar','lugares')}.`],['bino',`${mais.nome} entrou em ${pl(mais.lugares.length,'equipe','equipes')}.`],
     ['pipa',es?`Você escreveu ${pl(es,'descrição','descrições')} com as suas palavras.`:`Você respondeu ao fechamento de ${pl(pan.length,'mundo','mundos')}.`],['teo',`Sua coleção chegou a ${pl(cs.length,'carta','cartas')}.`]]
     .map(([n,t])=>`<li data-in>${companion(n)}<p><b>${ELENCO[n].name}:</b> ${esc(t)}</p></li>`).join('')}</ul>`}),
   ()=>({html:`<h2>Seu panorama da exploração</h2><a class="back" download="meu-panorama.txt">Baixar meu resumo</a><div class="panorama">${pan.map(x=>`<article>${linha(x)}</article>`).join('')}</div>`,
    depois(){dlg.querySelector('a[download]').href='data:text/plain;charset=utf-8,'+encodeURIComponent(dlg.querySelector('.panorama').innerText);}}),
   ()=>({html:heroi('rumo','apontar')+`<h2>Próxima etapa: Cristalização</h2><p class="trail-lead">É a etapa 2 de 4. Ela ainda está em preparação.</p>`,
    acoes:SAIDAS})
  ],a=>{if(a==='parar')show('painel');},'Pular',true);
 }
 // Meu espaço: a coleção (total sem denominador, "quero lembrar") e o panorama. Na vista do Filho vêm primeiro e o passaporte do
 // laboratório sai da vista, sem apagar nada (revisão de 20/11).
 function espaco(){
  const p=mundosNow(),cs=Mundos.cartas(p),pan=Mundos.panorama(p),lem=cs.filter(x=>x.lembrar).map(x=>x.nome),filho=programa==='filho';$('painel').toggleAttribute('data-filho',filho);
  $('colecao').innerHTML=!filho&&!cs.length&&!pan.length?'':`<div class="passport-heading"><h2>Minha coleção</h2><p>${cs.length?pl(cs.length,'carta','cartas')+'. ':''}Uma carta para cada profissional que você pôs numa equipe.</p></div>${cs.length?'':'<button type="button" class="btn" data-go="trilha" data-programa="filho">Ir para a trilha</button>'}<ul class="cartas">${cs.map(x=>carta(x,0,1)).join('')}</ul>${pan.length?acessorios():''}`+
   `<div class="passport-heading"><h2 id="pan-t" tabindex="-1">Meu panorama</h2><p>O que você montou e escreveu. Tudo aqui veio de você.${pan.length?'':' Ele começa quando você terminar o primeiro mundo.'}</p></div><div class="panorama">${pan.map(x=>`<article>${linha(x)}</article>`).join('')}${lem.length?`<p>Cartas que você quer lembrar: ${esc(lem.join(', '))}.</p>`:''}</div>`;
  vestir();
 }
 vestir();
 return {entrar,settle,lugar,foto,mundo,etapa,espaco,vestir,fechar};
})();
