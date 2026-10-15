// Elenco do Lote 5.3: um desenho por personagem, montado em peças com pivô próprio.
// Cada junta tem dois grupos: o externo guarda o estado (data-state, CSS) e o .mov recebe os gestos (WAAPI, só transform).
// Vista de três quartos virada para a direita, espelhável. Luz de frente, do alto à direita; uma sombra por volume.
const TINTA='#1c2744',TINTA_FUNDO='#0e1628',CORAL='#f2534a',CORAL_FUNDO='#d63c38',BLUSH='#ffb4a8',SOL='#ffc83d',SOL_FUNDO='#f0a202',FOLHA='#2ebe6a',FOLHA_FUNDO='#14964c',BRANCO='#fffdf9',LINHA_FUNDO='#e7d8c4';
const r1=n=>Math.round(n*10)/10;
const junta=(cls,[x,y],inner)=>`<g class="${cls}" style="transform-origin:${x}px ${y}px"><g class="mov">${inner}</g></g>`;
// Volume com uma sombra: a forma clara fica dentro da escura, encostada no lado da luz (alto à direita).
const volume=(cx,cy,rx,ry,base,fundo,s)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fundo}"/><ellipse cx="${r1(cx+s*.55)}" cy="${r1(cy-s*.8)}" rx="${rx-s}" ry="${ry-s}" fill="${base}"/>`;
const olho=(cx,cy,rx,ry)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${TINTA}"/><circle cx="${r1(cx+rx*.32)}" cy="${r1(cy-ry*.36)}" r="${r1(rx*.42)}" fill="${BRANCO}"/>`;
const sombra=(cx,rx,o=.16)=>`<ellipse class="chao" cx="${cx}" cy="238" rx="${rx}" ry="${r1(rx*.17)}" fill="${TINTA}" opacity="${o}"/>`;
const traco=(d,w,cor=TINTA)=>`<path d="${d}" fill="none" stroke="${cor}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
// Traço tinta com borda clara por baixo: braços e linhas continuam legíveis na terra tinta e na mata.
const tracoC=(d,w,cor=TINTA)=>traco(d,w+5,BRANCO)+traco(d,w,cor);
const ponto=(x,y,r,cor=TINTA)=>`<circle cx="${x}" cy="${y}" r="${r+2.5}" fill="${BRANCO}"/><circle cx="${x}" cy="${y}" r="${r}" fill="${cor}"/>`;

// Marcas de mangá (manpu). Cada uma é uma junta escondida em escala 0; pose e gesto a fazem surgir no próprio pivô.
const brilho=(x,y,s)=>`<path d="M${x} ${y-s}Q${x} ${y} ${x+s} ${y}Q${x} ${y} ${x} ${y+s}Q${x} ${y} ${x-s} ${y}Q${x} ${y} ${x} ${y-s}Z" fill="${SOL}" stroke="${BRANCO}" stroke-width="2.5" stroke-linejoin="round"/>`;
const MARCA={
 exclama:([x,y])=>junta('marca marca-exclama',[x,y+14],`<g transform="rotate(12 ${x} ${y})">${tracoC(`M${x} ${y-14}L${x} ${y+3}`,7)}${ponto(x,y+12,4)}</g>${tracoC(`M${x-15} ${y-10}l-7 -6M${x+14} ${y-12}l6 -7M${x-17} ${y+3}h-8`,3.5)}`),
 pergunta:([x,y])=>junta('marca marca-pergunta',[x,y+14],`<g transform="rotate(10 ${x} ${y})">${tracoC(`M${x-8} ${y-8}Q${x-8} ${y-17} ${x} ${y-17}Q${x+9} ${y-17} ${x+9} ${y-8}Q${x+9} ${y-2} ${x+2} ${y+1}Q${x} ${y+3} ${x} ${y+5}`,6)}${ponto(x,y+13,3.6)}</g>`),
 brilho:([x,y])=>junta('marca marca-brilho',[x,y],brilho(x-30,y+8,15)+brilho(x+6,y-14,11)+brilho(x+28,y+14,8)),
 velocidade:([x,y])=>junta('marca marca-velocidade',[x+30,y],tracoC(`M${x} ${y-14}h26M${x+8} ${y}h24M${x} ${y+14}h20`,4)),
 poeira:([x,y])=>junta('marca marca-poeira',[x,y],`<circle cx="${x}" cy="${y}" r="9" fill="${LINHA_FUNDO}"/><circle cx="${x-14}" cy="${y+3}" r="6" fill="${LINHA_FUNDO}"/><circle cx="${x+1}" cy="${y-3}" r="6" fill="${BRANCO}"/>`),
 // Na mão: aceno e ênfase giram junto com o braço.
 aceno:([x,y])=>junta('marca marca-aceno',[x,y],tracoC(`M${x+6} ${y-12}Q${x+13} ${y} ${x+6} ${y+12}M${x+15} ${y-18}Q${x+25} ${y} ${x+15} ${y+18}`,4)),
 enfase:([x,y],a=0)=>junta('marca marca-enfase',[x,y],`<g transform="rotate(${a} ${x} ${y})">${tracoC(`M${x+8} ${y-9}l9 -8M${x+12} ${y}h12M${x+8} ${y+9}l9 8`,4)}</g>`)
};

// Rumo: a bússola. Corpo coral, rosto branco com a agulha, pés sol (o mesmo do vídeo de comemoração).
// Os braços nascem atrás da bola, como no vídeo: só antebraço e mão aparecem fora do contorno.
function rumoSVG(vista='34'){
 const [k,dx]=vista==='frente'?[1,0]:[.93,12];
 const rosto=`matrix(${k} 0 0 1 ${r1(120*(1-k)+dx)} 0)`;
 const pes=vista==='frente'?[[92,222],[148,222]]:[[98,224],[148,221]];
 const pe=([x,y])=>`<ellipse cx="${x}" cy="${y+4}" rx="21" ry="11" fill="${SOL_FUNDO}"/><ellipse cx="${x+1}" cy="${y}" rx="18" ry="9.5" fill="${SOL}"/>`;
 const braco=(cls,[x,y],[hx,hy])=>junta(cls,[x,y],traco(`M${x} ${y}L${hx} ${hy}`,16,CORAL_FUNDO)+`<circle cx="${hx}" cy="${hy}" r="11" fill="${CORAL_FUNDO}"/>`+(cls==='arm-r'?MARCA.aceno([hx+6,hy-4])+MARCA.enfase([hx+6,hy],30):''));
 const estrela=(cls,x,y,s,cor)=>`<polygon class="${cls}" points="${[0,1,2,3,4,5,6,7,8,9].map(i=>{const a=Math.PI/5*i-Math.PI/2,r=i%2?s*.45:s;return `${r1(x+Math.cos(a)*r)},${r1(y+Math.sin(a)*r)}`;}).join(' ')}" fill="${cor}"/>`;
 return `<g class="stars">${estrela('star',30,86,13,SOL)}${estrela('star star-b',208,58,11,FOLHA)}${estrela('star star-c',214,170,10,SOL)}<circle cx="56" cy="40" r="6" fill="${FOLHA}"/><circle cx="186" cy="28" r="5" fill="${SOL}"/></g>`
 +sombra(vista==='frente'?120:122,60)
 +`<g class="bob" style="transform-origin:120px 234px"><g class="mov">`
 +braco('arm-l',[62,150],[36,174])+braco('arm-r',[180,150],[206,174])
 +junta('foot-r',pes[1],pe(pes[1]))+junta('foot-l',pes[0],pe(pes[0]))
 +volume(120,134,78,78,CORAL,CORAL_FUNDO,12)
 +`<g class="face" transform="${rosto}"><circle cx="120" cy="142" r="50" fill="${BRANCO}"/>`
 +`<ellipse cx="89" cy="158" rx="10" ry="6" fill="${BLUSH}"/><ellipse cx="151" cy="158" rx="10" ry="6" fill="${BLUSH}"/>`
 +junta('eyes',[120,138],olho(103,139,8.5,11.5)+olho(141,139,8.5,11.5))
 +`<path class="mouth" d="M104 157Q121 172 138 157" fill="none" stroke="${TINTA}" stroke-width="6" stroke-linecap="round"/>`
 +junta('needle',[120,100],`<polygon points="120,32 133,100 107,100" fill="${SOL}"/><polygon points="120,32 107,100 120,100" fill="${SOL_FUNDO}"/><polygon points="109,100 131,100 120,130" fill="${TINTA}"/><polygon points="120,100 109,100 120,130" fill="${TINTA_FUNDO}"/><circle cx="120" cy="100" r="10" fill="${BRANCO}" stroke="${TINTA}" stroke-width="4.5"/>`)
 +`</g>`
 +`<g class="marcas">${MARCA.exclama([206,44])}${MARCA.pergunta([206,44])}${MARCA.velocidade([2,150])}${MARCA.poeira([70,232])}</g>`
 +`</g></g>`;
}

// Bino: binóculo verde de lentes viradas para quem olha. Só olhos: sem boca, nariz, sobrancelha ou bochecha.
// O braço do lado de lá nasce atrás do tubo; o do lado de cá fica na frente, sem cruzar as lentes.
function binoSVG(vista='34'){
 const k=vista==='frente'?1:.906,ds=vista==='frente'?0:14.4,dy=vista==='frente'?0:-12,R=42,lentes=[78,162],y0=118;
 const plano=`matrix(${k} 0 0 1 ${r1(120*(1-k)+ds)} 0)`;
 const tubo=x=>{ // o tubo aparece por trás da lente: elipse de trás + faixa tangente às duas
  const f=[120+k*(x-120)+ds,y0],b=[120+k*(x-120)-ds,y0+dy],vx=b[0]-f[0],vy=b[1]-f[1];
  if(Math.hypot(vx,vy)<1)return '';
  const t=Math.atan2(-R*vx,k*R*vy),p=[k*R*Math.cos(t),R*Math.sin(t)],pts=[[f,1],[b,1],[b,-1],[f,-1]].map(([c,s])=>`${r1(c[0]+s*p[0])},${r1(c[1]+s*p[1])}`).join(' ');
  return `<ellipse cx="${r1(b[0])}" cy="${b[1]}" rx="${r1(k*R)}" ry="${R}" fill="${FOLHA_FUNDO}"/><polygon points="${pts}" fill="${FOLHA_FUNDO}"/>`;
 };
 const lente=x=>`<circle cx="${x}" cy="${y0}" r="${R}" fill="${FOLHA}"/><circle cx="${x}" cy="${y0}" r="32" fill="${LINHA_FUNDO}"/><circle cx="${x-3}" cy="${y0+3.5}" r="28.5" fill="${BRANCO}"/>`;
 const perna=(cls,[x,y],[fx,fy])=>junta(cls,[x,y],tracoC(`M${x} ${y}L${fx} ${fy-6}`,11)+volume(fx+5,fy,22,11,FOLHA,FOLHA_FUNDO,4));
 const braco=(cls,o,d,m,extra='')=>junta(cls,o,tracoC(d,10)+`<circle cx="${m[0]}" cy="${m[1]}" r="13.5" fill="${BRANCO}"/>`+volume(m[0],m[1],11,11,FOLHA,FOLHA_FUNDO,3)+extra);
 const olhos=`<g class="eye-open">${olho(lentes[0]+5,y0+3,13,17)}${olho(lentes[1]+5,y0+3,13,17)}</g><g class="eye-happy" opacity="0">${traco(`M${lentes[0]-11} ${y0+7}Q${lentes[0]+5} ${y0-13} ${lentes[0]+21} ${y0+7}M${lentes[1]-11} ${y0+7}Q${lentes[1]+5} ${y0-13} ${lentes[1]+21} ${y0+7}`,8)}</g>`;
 return sombra(122,70)
 +`<g class="cast-body" style="transform-origin:120px 234px"><g class="mov">`
 +perna('foot-r',[158,154],[160,221])+perna('foot-l',[86,156],[86,225])
 +braco('limb-r',[200,126],'M200 126Q218 136 222 156',[223,160],MARCA.aceno([229,156])+MARCA.enfase([229,160],40))
 +tubo(lentes[1])+`<g transform="${plano}">${lente(lentes[1])}</g>`
 +`<rect x="102" y="${64+dy/2}" width="36" height="22" rx="7" fill="${FOLHA_FUNDO}"/><rect x="110" y="${58+dy/2}" width="20" height="12" rx="4" fill="${SOL}"/>`
 +tubo(lentes[0])+`<g transform="${plano}">${lente(lentes[0])}`
 +junta('gaze',[120,y0],olhos)+`</g>`
 +braco('limb-l',[50,126],'M50 126Q32 138 28 156',[27,160])
 +`<g class="marcas">${MARCA.exclama([214,46])}${MARCA.pergunta([214,46])}${MARCA.brilho([206,40])}${MARCA.velocidade([-6,120])}${MARCA.poeira([66,232])}</g>`
 +`</g></g>`;
}

// Pipa: pipa de quatro panos, rabiola de laços. Dobra no travessão vertical: metade de trás (esquerda) na sombra.
function pipaSVG(vista='34'){
 const k=vista==='frente'?1:.9,ds=vista==='frente'?0:8,plano=`matrix(${k} 0 0 .98 ${r1(120*(1-k)+ds)} 2)`;
 const T=[120,16],C=[120,84],D=[190,84],B=[120,164],E=[50,84],p=(...q)=>q.map(a=>a.join(',')).join(' ');
 const bx=r1(120+ds),by=r1(164*.98+2);
 const laco=(x,y,a,cor,s=1)=>`<path transform="rotate(${a} ${x} ${y})" d="M${x} ${y}l${-12*s} ${-8*s} ${1*s} ${16*s}Zm0 0 ${12*s} ${-8*s} ${-1*s} ${16*s}Z" fill="${cor}" stroke="${BRANCO}" stroke-width="2" stroke-linejoin="round"/>`;
 const braco=(cls,o,d,m,extra='')=>junta(cls,o,tracoC(d,9)+`<circle cx="${m[0]}" cy="${m[1]}" r="12.5" fill="${BRANCO}"/>`+volume(m[0],m[1],10,10,SOL,SOL_FUNDO,3)+extra);
 return sombra(126,34,.1)
 +`<g class="cast-body" style="transform-origin:${bx}px 92px"><g class="mov">`
 +junta('tail',[bx,by],tracoC(`M${bx} ${by}C${bx+20} ${by+18} ${bx-16} ${by+30} ${bx} ${by+44}S${bx+14} ${by+62} ${bx-2} ${by+72}`,3.5)+laco(bx+9,by+16,-20,CORAL)+laco(bx-5,by+38,10,SOL,.9)+laco(bx+6,by+60,-12,CORAL,.8))
 +braco('limb-l',[70,92],'M70 92Q48 104 40 122',[38,126])
 +braco('limb-r',[186,92],'M186 92Q208 102 214 120',[215,124],MARCA.aceno([221,120])+MARCA.enfase([221,124],40))
 +`<g transform="${plano}"><polygon points="${p(T,C,E)}" fill="${SOL_FUNDO}"/><polygon points="${p(E,C,B)}" fill="${FOLHA_FUNDO}"/><polygon points="${p(T,D,C)}" fill="${FOLHA}"/><polygon points="${p(C,D,B)}" fill="${SOL}"/>`
 +traco(`M120 18V162M52 84H188`,3.5,TINTA_FUNDO)
 +`<ellipse cx="120" cy="90" rx="35" ry="30" fill="${BRANCO}"/><ellipse cx="98" cy="101" rx="6" ry="3.5" fill="${BLUSH}"/><ellipse cx="142" cy="101" rx="6" ry="3.5" fill="${BLUSH}"/>`
 +junta('gaze',[120,88],`<g class="eye-open">${olho(108,87,6.5,9)}${olho(134,87,6.5,9)}</g>`)
 +`<path class="mouth" d="M110 103Q121 111 131 103" fill="none" stroke="${TINTA}" stroke-width="4.5" stroke-linecap="round"/></g>`
 +`<g class="marcas">${MARCA.exclama([200,22])}${MARCA.pergunta([200,22])}${MARCA.brilho([196,24])}${MARCA.velocidade([-4,96])}</g>`
 +`</g></g>`;
}

// Téo: tartaruga de quatro patas (prancha v3). Gesto com a pata dianteira tira essa pata do chão.
// Camadas, de trás para a frente: patas de trás, cauda, pata dianteira de lá, pescoço, barriga, casco, borda, cabeça, pata dianteira de cá.
function teoSVG(){
 // Pata curta: coluna que some sob o casco e termina num pé redondo com três dedos. Sombra do lado de trás (esquerda).
 const pata=(cls,[x,y],L,w,perto,extra='')=>{const h=w/2,cor=perto?FOLHA:FOLHA_FUNDO;
  return junta(cls,[x,y],`<g transform="translate(${x} ${y})"><path d="M${-h-2} -10H${h+2}L${h} ${L-9}H${-h}Z" fill="${cor}"/>${perto?`<path d="M${-h-2} 4H${r1(-h*.3)}V${L-9}H${-h}Z" fill="${FOLHA_FUNDO}"/>`+volume(3,L-9,h+4,12,FOLHA,FOLHA_FUNDO,3)+traco(`M${h+4} ${L-9}v5M${h-3} ${L-6}v5M${h-10} ${L-5}v5`,2.5,FOLHA_FUNDO):`<ellipse cx="3" cy="${L-8}" rx="${h+5}" ry="10" fill="${cor}"/>`}</g>${extra}`);};
 const placa=d=>`<path d="${d}" fill="${TINTA}" stroke="${TINTA}" stroke-width="8" stroke-linejoin="round" transform="translate(0 8)"/>`;
 return sombra(116,96)
 +`<g transform="matrix(1.06 0 0 1.06 -7 -14.3)"><g class="cast-body" style="transform-origin:116px 234px"><g class="mov">`
 +pata('leg-bf',[50,188],46,28,false)+pata('leg-bn',[80,194],42,32,true)
 +`<g class="torso" style="transform-origin:66px 204px"><g class="mov">`
 +`<path d="M32 178L6 194Q18 202 38 192Z" fill="${FOLHA_FUNDO}"/>`
 +pata('leg-ff',[190,178],54,28,false)
 +`<path d="M146 126C142 150 146 172 156 194L194 188C194 166 198 148 202 130Z" fill="${BRANCO}"/><path d="M146 126C142 150 146 172 156 194L166 193C160 172 158 150 160 128Z" fill="${LINHA_FUNDO}"/>`
 +`<path d="M28 184Q100 214 178 184L176 198Q100 230 32 200Z" fill="${BRANCO}"/><path d="M32 196Q100 226 176 194L176 198Q100 230 32 200Z" fill="${LINHA_FUNDO}"/>`
 +`<path d="M20 186C16 124 58 84 104 84C152 84 184 122 180 180Q100 210 20 186Z" fill="${FOLHA}"/><path d="M20 186C16 124 58 84 104 84C78 92 44 126 40 190Z" fill="${FOLHA_FUNDO}"/>`
 +placa('M84 96L106 87L128 93L131 114L108 125L86 118Z')+placa('M44 130L58 108L72 117L74 140L50 150Z')+placa('M88 142L112 135L134 141L133 160L90 164Z')+placa('M142 116L156 110L162 128L158 150L144 146Z')
 +`<path d="M20 176Q100 200 172 172Q180 178 172 186Q100 214 20 192Q12 184 20 176Z" fill="${FOLHA_FUNDO}"/>`
 +junta('head',[170,180],volume(170,118,45,42,BRANCO,LINHA_FUNDO,7)
  +`<ellipse cx="146" cy="133" rx="7" ry="4.5" fill="${BLUSH}"/><ellipse cx="198" cy="128" rx="5" ry="4" fill="${BLUSH}"/>`
  +`<path class="brows" d="M148 98Q155 93 162 97M181 95Q187 91 193 94" fill="none" stroke="${TINTA}" stroke-width="3.5" stroke-linecap="round"/>`
  +junta('gaze',[170,118],`<g class="eye-open">${olho(156,116,7.5,11)}${olho(187,114,6.5,10.5)}</g>`)
  +`<path class="mouth" d="M161 134Q173 142 185 133" fill="none" stroke="${TINTA}" stroke-width="4.5" stroke-linecap="round"/>`)
 +pata('leg-fn',[154,186],50,32,true,MARCA.aceno([174,236])+MARCA.enfase([172,240],90))
 +`</g></g>`
 +`<g class="marcas">${MARCA.exclama([218,58])}${MARCA.pergunta([218,58])}${MARCA.brilho([200,46])}${MARCA.velocidade([0,150])}${MARCA.poeira([50,232])}</g>`
 +`</g></g></g>`;
}

const ELENCO={
 rumo:{name:'Rumo',role:'Guiar o MAPA',draw:rumoSVG},
 bino:{name:'Bino',role:'Observar e descobrir',draw:binoSVG},
 pipa:{name:'Pipa',role:'Imaginar alternativas',draw:pipaSVG},
 teo:{name:'Téo',role:'Pensar e retomar com calma',draw:teoSVG}
};
function castSVG(name,vista='34'){return `<svg class="cast-svg${name==='rumo'?' rumo':''}" viewBox="0 0 240 260" aria-hidden="true" data-vista="${vista}">${ELENCO[name].draw(vista)}</svg>`;}

// Movimento: só transform, composite padrão, a mesma lista de funções em todos os quadros de uma peça.
const T=({x=0,y=0,r=0,sx=1,sy=sx}={})=>`translate(${x}px,${y}px) rotate(${r}deg) scale(${sx},${sy})`;
// Curvas: antes = acelera para a antecipação; chega = assinatura do produto; mola = passa um pouco e volta; meio = entra e sai suave.
// Molas convertidas em curva pela Material 3 Expressive (mola = fast spatial), padrão = M3 standard, efeito = M3 effects.
const E={antes:'cubic-bezier(.55,0,1,.45)',chega:'cubic-bezier(.2,.8,.2,1)',mola:'cubic-bezier(.42,1.67,.21,.9)',meio:'cubic-bezier(.45,0,.55,1)',padrao:'cubic-bezier(.2,0,0,1)',efeito:'cubic-bezier(.34,.8,.34,1)'};

// Poses-chave: o pico que cada gesto alcança, desenhado na prancha. state = expressão (CSS); parts = transform no .mov.
const V={};
const POSES={
 rumo:{
  repouso:{state:'welcome',parts:{}},
  acolher:{state:'welcome',parts:{'.arm-r':{r:-86},'.bob':{y:-6,r:-3},'.needle':{r:10},'.marca-aceno':V}},
  olhar:{state:'attentive',parts:{'.bob':{r:4},'.needle':{r:24},'.marca-exclama':V}},
  pensar:{state:'thinking',parts:{'.arm-l':{r:64},'.bob':{r:-5},'.needle':{r:-22},'.marca-pergunta':V}},
  apontar:{state:'point',parts:{'.arm-r':{r:-58},'.bob':{r:5},'.needle':{r:62},'.marca-enfase':V}},
  andar:{state:'welcome',parts:{'.bob':{x:4,y:-7,r:5},'.foot-l':{x:10,y:-10,r:-10},'.foot-r':{x:-6},'.arm-l':{r:30},'.arm-r':{r:-24},'.needle':{r:-8},'.marca-velocidade':V}},
  celebrar:{state:'celebrate',parts:{'.arm-l':{r:93},'.arm-r':{r:-93},'.bob':{y:-18,sx:.95,sy:1.06}}}
 },
 bino:{
  repouso:{state:'welcome',parts:{}},
  acolher:{state:'welcome',parts:{'.limb-r':{r:-118},'.cast-body':{y:-6,r:-2},'.marca-aceno':V}},
  olhar:{state:'attentive',parts:{'.cast-body':{r:4},'.limb-l':{r:16},'.limb-r':{r:-16},'.marca-exclama':V}},
  pensar:{state:'thinking',parts:{'.limb-l':{r:-56},'.cast-body':{r:-5},'.marca-pergunta':V}},
  apontar:{state:'point',parts:{'.limb-r':{r:-62},'.cast-body':{r:4},'.marca-enfase':V}},
  andar:{state:'welcome',parts:{'.cast-body':{x:4,y:-6,r:4},'.foot-l':{r:-14},'.foot-r':{r:10},'.limb-l':{r:24},'.limb-r':{r:-18},'.marca-velocidade':V}},
  celebrar:{state:'celebrate',parts:{'.limb-l':{r:128},'.limb-r':{r:-128},'.cast-body':{y:-16,sx:.95,sy:1.06},'.marca-brilho':V}}
 },
 pipa:{
  repouso:{state:'welcome',parts:{}},
  acolher:{state:'welcome',parts:{'.limb-r':{r:-105},'.cast-body':{y:-5,r:-5},'.tail':{r:12},'.marca-aceno':V}},
  olhar:{state:'attentive',parts:{'.cast-body':{y:-6,r:7},'.tail':{r:10},'.limb-l':{r:14},'.limb-r':{r:-14},'.marca-exclama':V}},
  pensar:{state:'thinking',parts:{'.limb-l':{r:112},'.cast-body':{r:-8},'.tail':{r:-8},'.marca-pergunta':V}},
  apontar:{state:'point',parts:{'.limb-r':{r:-40},'.cast-body':{r:9},'.tail':{r:-12},'.marca-enfase':V}},
  andar:{state:'welcome',parts:{'.cast-body':{x:8,y:-16,r:14},'.tail':{r:38},'.limb-l':{r:-30},'.limb-r':{r:20},'.marca-velocidade':V}},
  celebrar:{state:'celebrate',parts:{'.limb-l':{r:118},'.limb-r':{r:-118},'.cast-body':{y:-16},'.tail':{r:-34},'.marca-brilho':V}}
 },
 teo:{
  repouso:{state:'welcome',parts:{}},
  acolher:{state:'welcome',parts:{'.leg-fn':{r:-106},'.torso':{r:-6,y:-1},'.head':{r:-5},'.marca-aceno':V}},
  olhar:{state:'attentive',parts:{'.head':{r:7},'.torso':{r:1.5},'.marca-exclama':V}},
  pensar:{state:'thinking',parts:{'.leg-fn':{r:-150},'.head':{r:-9},'.torso':{r:-3},'.marca-pergunta':V}},
  apontar:{state:'point',parts:{'.leg-fn':{r:-92},'.head':{r:4},'.torso':{r:2},'.marca-enfase':V}},
  andar:{state:'welcome',parts:{'.leg-fn':{y:-8,r:-26},'.leg-bf':{y:-8,r:-26},'.leg-ff':{r:6},'.leg-bn':{r:6},'.torso':{y:-2,r:-1},'.marca-velocidade':V}},
  andarB:{state:'welcome',parts:{'.leg-ff':{y:-8,r:-26},'.leg-bn':{y:-8,r:-26},'.leg-fn':{r:6},'.leg-bf':{r:6},'.torso':{y:-2,r:1},'.marca-poeira':V}},
  celebrar:{state:'celebrate',parts:{'.torso':{r:-14},'.leg-fn':{r:-112},'.leg-ff':{r:-100},'.head':{r:-4},'.marca-brilho':V}}
 }
};

// Gestos. Cada peça é uma trilha [quando (0 a 1), pose, curva até o quadro seguinte]; todas as peças duram o mesmo,
// então cancelar a sequência cancela tudo junto. Regras: antecipação curta, peça secundária atrasada (sobreposição),
// olhos chegam antes do corpo e piscam na virada, mola na chegada, assentamento na volta, nada em laço.
const surge=(dur,a,b)=>{const e=180/dur,f=150/dur;b=Math.min(Math.max(b,a+e+.04),1-f-.02);a=Math.min(a,b-e-.04);return [[0,{sx:.6,o:0}],[a,{sx:.6,o:0},E.mola],[a+e,{o:1}],[b,{sx:.97,o:1},E.efeito],[b+f,{sx:.9,o:0}],[1,{sx:.9,o:0}]];};
const pisca=(dur,x=0,y=0)=>[[0,{},E.antes],[83/dur,{sy:.1}],[125/dur,{sy:.1},E.padrao],[250/dur,{x,y}],[.84,{x:x*.85,y:y*.85}],[1,{}]];
const olhaPara=(dur,x,y=0)=>{const t=125/dur;return [[0,{},E.padrao],[t,{x,y},E.antes],[t+83/dur,{x,y,sy:.1}],[t+125/dur,{x,y,sy:.1},E.padrao],[t+250/dur,{x,y}],[.86,{x:x*.88,y:y*.88}],[1,{}]];};
// Marca que fica atrás do movimento: na volta, espelha em torno do centro do corpo (dx = 2 × distância do pivô ao centro).
const atras=(pts,d,dx)=>d>0?pts:pts.map(([t,p,e])=>[t,{...p,x:(p.x||0)+dx,sx:-(p.sx??1),sy:p.sy??p.sx??1},e]);
const acena=(a,b,c)=>[[0,{},E.antes],[.12,{r:-a*.13},E.mola],[.34,{r:a}],[.48,{r:b}],[.62,{r:c}],[.76,{r:(a+b)/2}],[1,{}]];
const salta=alto=>[[0,{},E.antes],[.14,{y:3,sx:1.07,sy:.93},E.chega],[.36,{y:-alto,sx:.96,sy:1.05}],[.5,{y:-alto-2},E.antes],[.7,{y:2,sx:1.05,sy:.95},E.mola],[1,{}]];
const GESTOS={
 rumo:{
  acolher:(d,dur)=>({'.bob':[[0,{},E.antes],[.14,{y:2,sx:1.05,sy:.95},E.chega],[.36,{y:-6,r:-3,sx:.97,sy:1.03}],[.62,{y:-4,r:-2}],[.82,{y:1,sx:1.03,sy:.97},E.chega],[1,{}]],
   '.arm-r':acena(-86,-68,-94),'.needle':[[0,{}],[.2,{r:-8},E.mola],[.44,{r:16}],[.62,{r:6}],[.8,{r:-3}],[1,{}]],'.eyes':pisca(dur,2,-1),'.marca-aceno':surge(dur,.36,.8)}),
  olhar:(d,dur)=>({'.eyes':olhaPara(dur,5*d),'.bob':[[0,{}],[.1,{sx:1.04,sy:.96},E.chega],[.26,{y:-6,r:2*d,sx:.97,sy:1.04},E.mola],[.42,{r:5*d}],[.78,{r:4*d}],[1,{}]],
   '.needle':[[0,{}],[.16,{r:-6*d},E.mola],[.4,{r:30*d}],[.56,{r:20*d}],[.8,{r:24*d}],[1,{}]],'.marca-exclama':surge(dur,.2,.82)}),
  pensar:(d,dur)=>({'.eyes':[[0,{}],[.16,{x:-3,y:-5},E.chega],[.84,{x:-3,y:-5}],[1,{}]],'.bob':[[0,{}],[.2,{y:1,r:2}],[.44,{r:-5}],[.8,{r:-4}],[1,{}]],
   '.arm-l':[[0,{},E.antes],[.14,{r:-10},E.mola],[.42,{r:64}],[.6,{r:56}],[.82,{r:62}],[1,{}]],'.needle':[[0,{}],[.22,{r:6},E.mola],[.48,{r:-26}],[.66,{r:-18}],[.84,{r:-22}],[1,{}]],'.marca-pergunta':surge(dur,.32,.84)}),
  apontar:(d,dur)=>({'.bob':[[0,{}],[.14,{r:-2*d,sx:1.03,sy:.97},E.mola],[.36,{r:5*d}],[.8,{r:4*d}],[1,{}]],
   [d>0?'.arm-r':'.arm-l']:[[0,{},E.antes],[.14,{r:12*d},E.mola],[.36,{r:-58*d}],[.5,{r:-50*d}],[.8,{r:-56*d}],[1,{}]],
   '.needle':[[0,{}],[.2,{r:-10*d},E.mola],[.44,{r:70*d}],[.58,{r:56*d}],[.8,{r:62*d}],[1,{}]],'.eyes':[[0,{},E.chega],[.1,{x:5*d}],[.86,{x:5*d}],[1,{}]],...(d>0?{'.marca-enfase':surge(dur,.34,.8)}:{})}),
  andar:(d,dur)=>({'.bob':[[0,{}],[.12,{y:2,sx:1.04,sy:.96},E.chega],[.3,{x:4*d,y:-7,r:5*d}],[.5,{x:6*d,r:4*d,sx:1.02,sy:.98}],[.72,{x:4*d,y:-7,r:5*d}],[.9,{y:1,sx:1.02,sy:.98}],[1,{}]],
   '.foot-l':[[0,{}],[.14,{}],[.3,{x:10*d,y:-10,r:-10*d}],[.48,{x:8*d}],[.72,{x:8*d}],[.92,{}],[1,{}]],'.foot-r':[[0,{}],[.48,{}],[.66,{x:8*d,y:-10,r:-10*d}],[.86,{x:4*d}],[1,{}]],
   '.arm-l':[[0,{}],[.3,{r:30}],[.72,{r:-20}],[1,{}]],'.arm-r':[[0,{}],[.3,{r:-24}],[.72,{r:18}],[1,{}]],'.needle':[[0,{}],[.3,{r:-8}],[.56,{r:6}],[.8,{r:-4}],[1,{}]],
   '.marca-velocidade':atras(surge(dur,.2,.78),d,176),'.marca-poeira':atras(surge(dur,.46,.7),d,100)}),
  celebrar:(d,dur)=>({'.bob':salta(18),'.arm-l':[[0,{}],[.16,{r:-10},E.mola],[.38,{r:93}],[.52,{r:80}],[.66,{r:93}],[1,{}]],'.arm-r':[[0,{}],[.16,{r:10},E.mola],[.38,{r:-93}],[.52,{r:-80}],[.66,{r:-93}],[1,{}]],
   '.needle':[[0,{}],[.18,{r:-20},E.chega],[.72,{r:360}],[1,{r:360}]]})
 },
 bino:{
  acolher:(d,dur)=>({'.cast-body':[[0,{},E.antes],[.12,{y:2,sx:1.04,sy:.96},E.chega],[.32,{y:-6,r:-2,sx:.98,sy:1.02}],[.62,{y:-4,r:-1}],[.82,{y:1,sx:1.02,sy:.98},E.chega],[1,{}]],
   '.limb-r':acena(-118,-98,-124),'.limb-l':[[0,{}],[.3,{r:10}],[.7,{r:6}],[1,{}]],'.gaze':pisca(dur,3,-1),'.marca-aceno':surge(dur,.34,.8)}),
  olhar:(d,dur)=>({'.gaze':olhaPara(dur,6*d),'.cast-body':[[0,{}],[.1,{sx:1.04,sy:.96},E.chega],[.28,{y:-5,r:2*d,sx:.97,sy:1.04},E.mola],[.44,{r:4*d}],[.8,{r:4*d}],[1,{}]],
   '.limb-l':[[0,{}],[.3,{r:16},E.mola],[.8,{r:12}],[1,{}]],'.limb-r':[[0,{}],[.3,{r:-16},E.mola],[.8,{r:-12}],[1,{}]],'.marca-exclama':surge(dur,.18,.82)}),
  pensar:(d,dur)=>({'.gaze':[[0,{}],[.16,{x:-3,y:-5},E.chega],[.86,{x:-3,y:-5}],[1,{}]],'.cast-body':[[0,{}],[.2,{y:1,r:2}],[.44,{r:-5}],[.8,{r:-4}],[1,{}]],
   '.limb-l':[[0,{},E.antes],[.14,{r:10},E.mola],[.42,{r:-56}],[.6,{r:-50}],[.82,{r:-54}],[1,{}]],'.marca-pergunta':surge(dur,.3,.84)}),
  apontar:(d,dur)=>({'.cast-body':[[0,{}],[.14,{r:-2*d,sx:1.03,sy:.97},E.mola],[.36,{r:4*d}],[.8,{r:4*d}],[1,{}]],
   [d>0?'.limb-r':'.limb-l']:[[0,{},E.antes],[.14,{r:12*d},E.mola],[.36,{r:-62*d}],[.52,{r:-55*d}],[.8,{r:-60*d}],[1,{}]],
   '.gaze':[[0,{},E.chega],[.1,{x:6*d}],[.86,{x:6*d}],[1,{}]],...(d>0?{'.marca-enfase':surge(dur,.34,.8)}:{})}),
  andar:(d,dur)=>({'.cast-body':[[0,{}],[.12,{y:2,sx:1.03,sy:.97},E.chega],[.3,{x:4*d,y:-6,r:4*d}],[.5,{x:6*d,r:3*d,sx:1.02,sy:.98}],[.72,{x:4*d,y:-6,r:4*d}],[.9,{y:1}],[1,{}]],
   '.foot-l':[[0,{}],[.14,{}],[.3,{r:-14*d}],[.48,{r:-6*d}],[.66,{r:10*d}],[.86,{}],[1,{}]],'.foot-r':[[0,{}],[.3,{r:10*d}],[.48,{r:4*d}],[.66,{r:-14*d}],[.86,{}],[1,{}]],
   '.limb-l':[[0,{}],[.3,{r:24}],[.66,{r:-16}],[1,{}]],'.limb-r':[[0,{}],[.3,{r:-18}],[.66,{r:20}],[1,{}]],'.gaze':[[0,{}],[.12,{x:4*d}],[.88,{x:4*d}],[1,{}]],'.marca-velocidade':atras(surge(dur,.2,.78),d,192)}),
  celebrar:(d,dur)=>({'.cast-body':salta(16),'.limb-l':[[0,{}],[.16,{r:-10},E.mola],[.38,{r:128}],[.52,{r:112}],[.66,{r:128}],[1,{}]],'.limb-r':[[0,{}],[.16,{r:10},E.mola],[.38,{r:-128}],[.52,{r:-112}],[.66,{r:-128}],[1,{}]],
   '.foot-l':[[0,{}],[.3,{r:8}],[.6,{r:-6}],[.76,{}],[1,{}]],'.foot-r':[[0,{}],[.3,{r:-8}],[.6,{r:6}],[.76,{}],[1,{}]],'.marca-brilho':surge(dur,.34,.86)})
 },
 pipa:{
  acolher:(d,dur)=>({'.cast-body':[[0,{}],[.16,{y:3,r:3},E.chega],[.4,{y:-5,r:-5}],[.66,{y:-3,r:-3}],[1,{}]],'.limb-r':acena(-105,-86,-110),
   '.tail':[[0,{}],[.24,{r:-8}],[.48,{r:12}],[.7,{r:-5}],[.86,{r:3}],[1,{}]],'.gaze':pisca(dur,2,0),'.marca-aceno':surge(dur,.36,.8)}),
  olhar:(d,dur)=>({'.cast-body':[[0,{}],[.12,{y:2},E.chega],[.32,{y:-6,r:7*d},E.mola],[.8,{y:-4,r:6*d}],[1,{}]],'.tail':[[0,{}],[.3,{r:-6*d}],[.52,{r:10*d}],[.76,{r:6*d}],[1,{}]],
   '.gaze':olhaPara(dur,4*d),'.limb-l':[[0,{}],[.3,{r:14},E.mola],[.8,{r:10}],[1,{}]],'.limb-r':[[0,{}],[.3,{r:-14},E.mola],[.8,{r:-10}],[1,{}]],'.marca-exclama':surge(dur,.2,.82)}),
  pensar:(d,dur)=>({'.cast-body':[[0,{}],[.22,{y:1,r:2}],[.46,{r:-8}],[.8,{r:-7}],[1,{}]],'.limb-l':[[0,{},E.antes],[.14,{r:-12},E.mola],[.42,{r:112}],[.6,{r:104}],[.82,{r:110}],[1,{}]],
   '.tail':[[0,{}],[.3,{r:6}],[.56,{r:-8}],[.8,{r:-4}],[1,{}]],'.gaze':[[0,{}],[.16,{x:-3,y:-4},E.chega],[.86,{x:-3,y:-4}],[1,{}]],'.marca-pergunta':surge(dur,.32,.84)}),
  apontar:(d,dur)=>({'.cast-body':[[0,{}],[.14,{r:-3*d},E.mola],[.36,{r:9*d}],[.8,{r:8*d}],[1,{}]],[d>0?'.limb-r':'.limb-l']:[[0,{},E.antes],[.14,{r:14*d},E.mola],[.36,{r:-40*d}],[.5,{r:-32*d}],[.8,{r:-38*d}],[1,{}]],
   '.tail':[[0,{}],[.24,{r:6*d}],[.48,{r:-12*d}],[.72,{r:-6*d}],[1,{}]],'.gaze':[[0,{},E.chega],[.1,{x:4*d}],[.86,{x:4*d}],[1,{}]],...(d>0?{'.marca-enfase':surge(dur,.34,.8)}:{})}),
  andar:(d,dur)=>({'.cast-body':[[0,{},E.antes],[.14,{y:4,r:-4*d}],[.42,{x:8*d,y:-16,r:14*d}],[.64,{x:6*d,y:-12,r:10*d}],[.86,{y:2,r:-2*d},E.chega],[1,{}]],
   '.tail':[[0,{}],[.22,{r:-10*d}],[.5,{r:38*d}],[.7,{r:28*d}],[.9,{r:-6*d}],[1,{}]],'.limb-l':[[0,{}],[.4,{r:-30}],[.8,{r:-10}],[1,{}]],'.limb-r':[[0,{}],[.4,{r:20}],[.8,{r:6}],[1,{}]],'.marca-velocidade':atras(surge(dur,.3,.8),d,200)}),
  celebrar:(d,dur)=>({'.cast-body':[[0,{},E.antes],[.14,{y:4,sx:1.04,sy:.96},E.chega],[.36,{y:-18,r:-8}],[.52,{y:-20,r:6}],[.68,{y:-14,r:-3}],[.86,{y:1,sx:1.02,sy:.98},E.chega],[1,{}]],
   '.limb-l':[[0,{}],[.16,{r:-10},E.mola],[.38,{r:118}],[.56,{r:104}],[.74,{r:116}],[1,{}]],'.limb-r':[[0,{}],[.16,{r:10},E.mola],[.38,{r:-118}],[.56,{r:-104}],[.74,{r:-116}],[1,{}]],
   '.tail':[[0,{}],[.2,{r:10}],[.4,{r:-24}],[.58,{r:14}],[.76,{r:-8}],[.9,{r:3}],[1,{}]],'.marca-brilho':surge(dur,.38,.8)})
 },
 teo:{
  acolher:(d,dur)=>({'.torso':[[0,{}],[.2,{r:-6,y:-1}],[.7,{r:-5}],[.9,{y:1,r:1},E.chega],[1,{}]],'.leg-fn':[[0,{}],[.14,{},E.antes],[.34,{r:-106},E.mola],[.48,{r:-90}],[.6,{r:-112}],[.72,{r:-96}],[.9,{r:2},E.chega],[1,{}]],
   '.head':[[0,{}],[.24,{r:-5}],[.7,{r:-4}],[1,{}]],'.gaze':pisca(dur,2,-1),'.marca-aceno':surge(dur,.36,.78)}),
  olhar:(d,dur)=>({'.gaze':olhaPara(dur,4*d),'.head':[[0,{}],[.12,{}],[.36,{r:7*d},E.mola],[.82,{r:6*d}],[1,{}]],'.torso':[[0,{}],[.2,{}],[.44,{r:1.5*d}],[.8,{r:1.5*d}],[1,{}]],'.marca-exclama':surge(dur,.24,.82)}),
  pensar:(d,dur)=>({'.head':[[0,{}],[.3,{r:-9}],[.84,{r:-8}],[1,{}]],'.leg-fn':[[0,{}],[.12,{},E.antes],[.42,{r:-150},E.chega],[.7,{r:-146}],[.88,{r:2},E.chega],[1,{}]],
   '.torso':[[0,{}],[.3,{r:-3}],[.8,{r:-3}],[1,{}]],'.gaze':[[0,{}],[.2,{x:-2,y:-5},E.chega],[.86,{x:-2,y:-5}],[1,{}]],'.marca-pergunta':surge(dur,.36,.84)}),
  apontar:(d,dur)=>d>0?{'.torso':[[0,{}],[.14,{r:-2},E.mola],[.36,{r:2}],[.8,{r:1.5}],[1,{}]],'.leg-fn':[[0,{},E.antes],[.16,{r:8},E.mola],[.38,{r:-92}],[.52,{r:-84}],[.8,{r:-90}],[.92,{r:2},E.chega],[1,{}]],
   '.head':[[0,{}],[.4,{r:4}],[.8,{r:4}],[1,{}]],'.gaze':[[0,{},E.chega],[.1,{x:4}],[.86,{x:4}],[1,{}]],'.marca-enfase':surge(dur,.36,.8)}
   :{'.head':[[0,{}],[.3,{r:-8},E.mola],[.8,{r:-7}],[1,{}]],'.gaze':[[0,{},E.chega],[.1,{x:-4}],[.86,{x:-4}],[1,{}]]},
  andar:(d,dur)=>{const a=[[0,{}],[.06,{}],[.24,{y:-8,r:-26*d}],[.44,{r:-8*d}],[.7,{r:6*d}],[.92,{}],[1,{}]],b=[[0,{}],[.24,{r:6*d}],[.5,{}],[.7,{y:-8,r:-26*d}],[.9,{r:-4*d}],[1,{}]];
   return {'.leg-fn':a,'.leg-bf':a,'.leg-ff':b,'.leg-bn':b,'.torso':[[0,{}],[.24,{y:-2,r:-1*d}],[.46,{}],[.7,{y:-2,r:1*d}],[.92,{}],[1,{}]],'.head':[[0,{}],[.3,{r:2}],[.56,{r:-1}],[.8,{r:2}],[1,{}]],'.marca-poeira':atras(surge(dur,.42,.64),d,132)};},
  celebrar:(d,dur)=>({'.torso':[[0,{},E.antes],[.14,{y:1,r:1}],[.38,{r:-14},E.mola],[.7,{r:-12}],[.9,{y:1,r:1},E.chega],[1,{}]],'.leg-fn':[[0,{}],[.16,{}],[.4,{r:-112},E.mola],[.52,{r:-96}],[.64,{r:-114}],[.88,{r:2},E.chega],[1,{}]],
   '.leg-ff':[[0,{}],[.2,{}],[.44,{r:-100},E.mola],[.56,{r:-86}],[.68,{r:-102}],[.9,{}],[1,{}]],'.head':[[0,{}],[.4,{r:-4}],[.76,{r:-3}],[1,{}]],'.marca-brilho':surge(dur,.4,.84)})
 }
};
// Mesma duração dos gestos de antes (Lote 2.1), por personagem e tipo.
const DURACAO={rumo:{acolher:560,olhar:560,pensar:560,apontar:560,andar:600,celebrar:560},bino:{acolher:640,olhar:480,pensar:560,apontar:480,andar:600,celebrar:640},
 pipa:{acolher:680,olhar:680,pensar:560,apontar:680,andar:640,celebrar:680},teo:{acolher:640,olhar:640,pensar:640,apontar:640,andar:640,celebrar:640}};
// Os nomes de gesto que o site já usa apontam para os seis do elenco.
const GESTO_DE={welcome:'acolher',curious:'acolher',example:'acolher',encourage:'acolher',attentive:'olhar',point:'apontar',steps:'apontar',thinking:'pensar',rephrase:'pensar',advance:'andar',celebrate:'celebrar'};
function animarGesto(figure,kind='welcome',d=1){
 const name=figure.dataset.character,g=GESTOS[name]?.[kind]?kind:GESTO_DE[kind]||'acolher',def=GESTOS[name]?.[g];if(!def)return [];
 const duration=DURACAO[name][g];
 return Object.entries(def(d<0?-1:1,duration)).flatMap(([sel,pts])=>{const el=figure.querySelector(sel+'>.mov');return el?[el.animate(pts.map(([offset,p,easing=E.meio])=>({offset,transform:T(p),easing,...(p.o===undefined?{}:{opacity:p.o})})),{duration})]:[];});
}
