import * as T from 'three';
// Lote 6.1: o mapa do parque aquático, no mesmo motor do bosque. Renderer só: os lugares, o estado de cada um e o que se escreve vêm da
// ponte; nada de storage. Cada forma é um InstancedMesh com a cor por instância, como no bosque.
// Lote 6.2: o parque no nível do bosque (item 6 do plano). Mesmos shaders, luz em degraus e sombra no pé (BosqueKit); o terreno de hexágonos
// passa de qualquer quadro, com terraços e mata atrás, prado na frente e o rio de lado, e o fundo nunca aparece. Os seis lugares ficam em duas
// fileiras largas, porque a faixa do mapa é larga em quase toda tela. Cada lugar resolvido acende: janelas e lâmpadas, a bandeira, a gente dele
// e a equipe em pé na frente. O ambiente roda como o do bosque, 12 s depois de um toque, e para; parado, nada é desenhado.
const A0=.55,R=new T.Vector3(Math.cos(A0),0,-Math.sin(A0)),N=new T.Vector3(Math.sin(A0),0,Math.cos(A0));
const C={grass:'#69ae72',light:'#90be7c',high:'#51925d',earth:'#2b6946',water:'#3a6690',path:'#fff5de',ivory:'#fffdf9',coral:'#f2534a',sun:'#ffc83d',leaf:'#2ebe6a',ink:'#1c2744',rock:'#9b9a77',wood:'#8e603b',plank:'#bb8c52',deep:'#1d6b49',mid:'#38935b',skin:'#ffe2c8',pool:'#4f9fd0',off:'#5e6880',asphalt:'#7f8279'};
// Lugares em (u para a direita da tela, v para a frente): duas fileiras, com a entrada e a piscina na frente, o toboágua atrás da piscina.
const AT={estacionamento:[-6.2,.75],bilheteria:[-2.75,1.05],enfermaria:[-4.1,-1.75],piscina:[1.25,.95],toboagua:[.75,-1.8],lanchonete:[5.15,-.55]};
const W=(u,v)=>[u*R.x+v*N.x,u*R.z+v*N.z],GROUND=.5,FIELD={u:[-25,25],v:[-11,11]},PLOT={u:[-8,7.4],v:[-3.2,2.9]};
const hash=(a,b)=>{const h=Math.sin(a*127.1+b*311.7)*43758.5453;return h-Math.floor(h);};
const near=(u,v,[ax,az],[bx,bz],r)=>{const dx=bx-ax,dz=bz-az,t=Math.max(0,Math.min(1,((u-ax)*dx+(v-az)*dz)/(dx*dx+dz*dz)));return Math.hypot(u-ax-dx*t,v-az-dz*t)<r;};
window.Parque={create(host,{lugares,onPick=()=>{},onFrame=()=>{},onError=()=>{}}){
 const {U,patch}=BosqueKit.vivo(),{footShade,radial}=BosqueKit;
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-6,6,4,-4,.1,80);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2));renderer.toneMapping=T.CustomToneMapping;
 const canvas=renderer.domElement;canvas.style.removeProperty('display');canvas.className='park-canvas';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Mapa do parque aquático em três dimensões. Os lugares também estão na lista abaixo do mapa.');host.prepend(canvas);
 scene.add(new T.HemisphereLight('#fffdf9','#245b39',1.8));const sun=new T.DirectionalLight('#fff1d0',2.2);sun.position.set(-4,8,5);scene.add(sun);
 const lit=(mode='',k=1)=>patch(new T.MeshLambertMaterial({color:'#ffffff',flatShading:true,vertexColors:true}),mode,k);
 const box=footShade(new T.BoxGeometry(1,1,1),.62),cone=footShade(new T.ConeGeometry(.5,1,6),.8),cyl=footShade(new T.CylinderGeometry(.5,.5,1,12),.72),prism=footShade(new T.CylinderGeometry(.5,.5,1,3),.8),ball=footShade(new T.IcosahedronGeometry(.5,0),.8);
 const kinds=new Map(),bin=(g,mode='',k=1)=>{const key=g.uuid+mode;if(!kinds.has(key))kinds.set(key,{g,mode,k,items:[]});return kinds.get(key).items;};
 const put=(list,x,y,z,sx,sy,sz,ry,rz,rx,color,ground=GROUND)=>{list.push([x,y,z,sx,sy,sz,rx,ry,rz,color,ground]);return list.length-1;};
 // O que acende: cada lugar guarda as instâncias de janela e lâmpada (cor de apagada e acesa), e o que só aparece com ele resolvido.
 const ids=lugares.map(l=>l.id),glowAt=Object.fromEntries(ids.map(id=>[id,[]])),piecesOf=Object.fromEntries(ids.map(id=>[id,[]])),aliveOf=Object.fromEntries(ids.map(id=>[id,[]])),ext=Object.fromEntries(ids.map(id=>[id,{u0:1e9,u1:-1e9,v0:1e9,v1:-1e9,top:0}]));
 let cur=null,cu=0,cv=0,alive=false;
 const place=id=>{cur=id;[cu,cv]=AT[id];};
 // Uma peça em volta do lugar atual: du para a direita da tela, dv para a frente, y acima do chão. Conta na caixa do lugar (a que os rótulos não cobrem).
 function piece(g,du,dv,y,sx,sy,sz,color,{rx=0,rz=0,rot=0,mode='',light=null}={}){const [x,z]=W(cu+du,cv+dv),list=bin(g,mode),k=put(list,x,GROUND+y,z,sx,sy,sz,A0+rot,rz,rx,color);
  const e=ext[cur];if(e){const hx=Math.max(sx*Math.abs(Math.cos(rot))+sz*Math.abs(Math.sin(rot)),.01)/2,hz=Math.max(sz*Math.abs(Math.cos(rx))+sy*Math.abs(Math.sin(rx)),.01)/2,hy=(sy*Math.abs(Math.cos(rx))+sz*Math.abs(Math.sin(rx)))/2;e.u0=Math.min(e.u0,cu+du-hx);e.u1=Math.max(e.u1,cu+du+hx);e.v0=Math.min(e.v0,cv+dv-hz);e.v1=Math.max(e.v1,cv+dv+hz);e.top=Math.max(e.top,y+hy);}
  if(cur&&mode!=='water')piecesOf[cur].push({list,k,on:light});if(alive)aliveOf[cur].push({list,k});return k;}
 const b=(...a)=>piece(box,...a);
 // Terreno: como no bosque, hexágonos que passam da borda de qualquer quadro. O lote do parque é plano; atrás dele a terra sobe em terraços, na
 // frente desce em degraus até o prado, e o rio passa de lado, em pé na tela.
 const HX=Math.sqrt(3)*.58,RV=[.5,Math.sqrt(3)/2],RN=[Math.sqrt(3)/2,-.5],riverP=[...W(9.2,0)].reduce((a,c,i)=>a+c*RN[i],0),fromRiver=(x,z)=>Math.abs(x*RN[0]+z*RN[1]-riverP),ox=(riverP-.87*(Math.round(riverP/.87-.5)+.5))/RN[0];
 const uv=(x,z)=>[x*R.x+z*R.z,x*N.x+z*N.z],at=id=>W(...AT[id]);
 const PATHS=[['estacionamento','bilheteria'],['bilheteria','piscina'],['piscina','lanchonete'],['bilheteria','enfermaria']].map(([a,c])=>[AT[a],AT[c]]);
 const heightAt=(x,z,u,v)=>{if(fromRiver(x,z)<.5)return .13;const out=Math.max(PLOT.u[0]-u,u-PLOT.u[1],0);if(v<PLOT.v[0]-out)return v<PLOT.v[0]-3?GROUND+1.25:GROUND+.6;if(v>PLOT.v[1]+out)return Math.max(.3,GROUND-.2*Math.ceil((v-PLOT.v[1])/1.5));return out>2&&hash(Math.round(x),Math.round(z))<.25?GROUND+.5:GROUND;};
 const tiles=[],tileAt=new Map();for(let r=-40;r<=40;r++)for(let q=-40;q<=40;q++){const x=HX*(q+r/2)+ox,z=.87*r,[u,v]=uv(x,z);if(u<FIELD.u[0]||u>FIELD.u[1]||v<FIELD.v[0]||v>FIELD.v[1])continue;const t={q,r,x,z,u,v,h:heightAt(x,z,u,v)};tiles.push(t);tileAt.set(q+','+r,t);}
 const capGeo=new T.CircleGeometry(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),colGeo=footShade(new T.CylinderGeometry(.58,.58,1,6,1,true),.5,1),NB=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],caps=[],cols=[];
 for(const t of tiles){const low=Math.min(...NB.map(([a,c])=>tileAt.get((t.q+a)+','+(t.r+c))?.h??0)),rel=t.h-GROUND,inPlot=rel===0&&t.u>PLOT.u[0]&&t.u<PLOT.u[1];
  put(caps,t.x,t.h,t.z,1,1,1,0,0,0,t.h<.2?C.water:rel>1?C.high:rel>.4?C.grass:inPlot&&(t.q*7+t.r*3)%5===0?C.grass:C.light);if(low<t.h-.01)put(cols,t.x,t.h/2,t.z,1,t.h,1,0,0,0,C.earth);}
 // Caminhos de pedra clara entre os lugares, sobre o gramado: uma tira e um disco em cada ponta.
 {const flat=bin(box),disc=bin(cyl);for(const [a,c] of PATHS){const [ax,az]=W(...a),[cx,cz]=W(...c),[du,dv]=[c[0]-a[0],c[1]-a[1]];put(flat,(ax+cx)/2,GROUND+.012,(az+cz)/2,Math.hypot(du,dv),.024,.72,A0-Math.atan2(dv,du),0,0,C.path);for(const [x,z] of [[ax,az],[cx,cz]])put(disc,x,GROUND+.012,z,.72,.024,.72,0,0,0,C.path);}}
 // A mata: uma árvore por hexágono, fora do lote e nunca entre a câmera e ele (na frente só arbustos baixos). Como no bosque, de três tipos.
 const trunks=[],pines=[],crowns=[],bushes=[],rocks=[];
 for(const t of tiles){if(t.h<.2||fromRiver(t.x,t.z)<1.3)continue;const inside=t.u>PLOT.u[0]-.2&&t.u<PLOT.u[1]+.2&&t.v>PLOT.v[0]-.2&&t.v<PLOT.v[1]+.2;if(inside)continue;
  const s=hash(t.q,t.r),k=hash(t.r+7,t.q-3),front=t.v>PLOT.v[1],x=t.x+(k-.5)*.35,z=t.z+(s-.5)*.35,sc=.8+k*.4;
  if(front){if(s>.7)put(bushes,x,t.h+.12,z,.9+k*.5,.7,.9+s*.5,s*6,0,0,k<.5?C.mid:C.high,t.h);else if(s<.08)put(rocks,x,t.h+.12,z,.8,.6,1,s*6,0,0,C.rock,t.h);continue;}
  if(s>.86){put(rocks,x,t.h+.14,z,.8,.6,1,s*6,0,0,C.rock,t.h);continue;}if(s>.72){put(bushes,x,t.h+.12,z,.9+k*.5,.7,.9+s*.5,s*6,0,0,C.mid,t.h);continue;}
  put(trunks,x,t.h+.4*sc,z,.12,.8*sc,.12,0,0,0,C.wood,t.h);if(k<.4){put(pines,x,t.h+1.05*sc,z,1.15*sc,1.4*sc,1.15*sc,s*6,0,0,C.deep,t.h);put(pines,x,t.h+1.55*sc,z,.74*sc,.9*sc,.74*sc,s*6,0,0,C.mid,t.h);}else put(crowns,x,t.h+1.15*sc,z,1.25*sc,1.4*sc,1.25*sc,s*6,0,0,k>.8?C.sun:s<.4?C.mid:C.deep,t.h);}
 // A cerca-viva em volta do lote, com a abertura na frente da entrada.
 {const edge=(u,v)=>{if(Math.abs(u-AT.bilheteria[0])<1.3&&v>0)return;const [x,z]=W(u,v);put(bushes,x,GROUND+.13,z,1.1,.8,1.1,u*3,0,0,hash(u,v)<.5?C.mid:C.high);};for(let u=PLOT.u[0];u<=PLOT.u[1];u+=.62){edge(u,PLOT.v[1]);edge(u,PLOT.v[0]);}for(let v=PLOT.v[0]+.62;v<PLOT.v[1];v+=.62){edge(PLOT.u[0],v);edge(PLOT.u[1],v);}}
 const lamp=(du,dv,y,on=C.sun)=>{piece(ball,du,dv,y,.11,.11,.11,'#d8d3c2',{light:on});glowAt[cur].push([du,dv,y]);};
 const person=(du,dv,c,y=0)=>{alive=true;piece(cyl,du,dv,y+.17,.13,.34,.13,c);piece(ball,du,dv,y+.41,.16,.16,.16,C.skin);alive=false;};
 const parasol=(du,dv,c,scale=1)=>{b(du,dv,.4*scale,.04,.8*scale,.04,C.ivory);piece(cone,du,dv,.86*scale,.8*scale,.28*scale,.8*scale,c);};
 const palm=(du,dv,h=1)=>{piece(cyl,du,dv,.55*h,.1,1.1*h,.1,C.wood);for(let i=0;i<5;i++){const a=i/5*Math.PI*2+.3;b(du+Math.cos(a)*.3,dv+Math.sin(a)*.3,1.12*h,.62,.03,.17,i%2?C.leaf:C.mid,{rot:-a,rz:-.32});}};
 // Bilheteria: o portal da entrada, com duas torres, a placa, dois guichês, catracas, cordão de lâmpadas e fila.
 place('bilheteria');{b(0,0,.015,2.9,.03,1.5,C.path);for(const s of [-1,1]){b(s*1.12,-.05,.68,.42,1.36,.42,C.coral);b(s*1.12,.17,.62,.26,.2,.02,C.ivory);piece(cone,s*1.12,-.05,1.58,.62,.44,.62,C.sun);}
  b(0,-.05,1.3,2,.2,.2,C.sun);b(0,.07,1.34,1.24,.34,.05,C.ivory);for(const [d,c] of [[-.34,C.pool],[0,C.coral],[.34,C.pool]])b(d,.1,1.34,.26,.1,.02,c);
  for(const s of [-1,1]){const d=s*.62;b(d,-.3,.36,.62,.72,.56,C.ivory);piece(prism,d,-.3,.86,.5,.82,.5,C.coral,{rz:Math.PI/2});b(d,-.015,.42,.36,.22,.02,C.off,{light:C.sun});b(d,.06,.26,.5,.05,.18,C.plank);}
  for(const d of [-.14,.14])b(d,.35,.14,.04,.28,.3,C.ink);for(let i=0;i<5;i++)lamp(-.8+i*.4,.08,1.16-.05*Math.sin(i*Math.PI/4));for(const [d,c] of [[-.38,C.coral],[.42,C.sun]])person(d,.72,c);person(.08,1.05,C.mid);}
 // Piscina: deque, água em dois lobos, boia, escada, trampolim, espreguiçadeiras, guarda-sóis e palmeiras; banhistas com o lugar resolvido.
 place('piscina');{piece(cyl,0,0,.03,4.1,.06,2.5,C.ivory);piece(cyl,1.55,.42,.03,1.5,.06,1.5,C.ivory);const water={mode:'water'};piece(cyl,0,0,.065,3.5,.03,1.95,C.pool,water);piece(cyl,1.55,.42,.065,1.05,.03,1.05,'#6db6df',water);
  for(const d of [-.8,.3])b(d,0,.08,1.1,.012,.03,C.ivory);for(const [d,e,c] of [[-1.05,.34,C.coral],[.6,-.42,C.sun]])piece(cyl,d,e,.09,.34,.05,.34,c);
  for(const s of [-.09,.09])b(1.72+s,-.42,.2,.025,.32,.025,C.ivory);b(-1.72,-.4,.22,.5,.04,.14,C.plank);b(-1.92,-.4,.12,.08,.24,.08,C.ink);
  for(const [d,e] of [[-1.2,1.02],[-.75,1.08],[.45,1.06],[.9,1]]){b(d,e,.07,.34,.05,.16,d<0?C.coral:C.sun);b(d-.14,e,.11,.08,.08,.16,C.ivory);}parasol(-.98,1.28,C.coral);parasol(.68,1.3,C.sun);parasol(-2.05,.28,C.leaf);palm(2.5,-.45);palm(-2.25,-.75,.85);
  for(const d of [-1.5,1])lamp(d,-1.05,1.05);for(const d of [-1.5,1])b(d,-1.05,.5,.03,1,.03,C.ink);for(const [d,e,c] of [[-.3,.1,C.coral],[.5,.3,C.sun],[-.75,-.2,C.ink],[1.55,.45,C.leaf]])person(d,e,c,-.2);person(-1.72,-.4,C.mid,.2);person(1.4,1.2,C.coral);}
 // Toboágua: torre com patamares e escada, cobertura, duas descidas até a piscina com água correndo.
 place('toboagua');{for(const [d,e] of [[-.32,-.32],[.32,-.32],[-.32,.32],[.32,.32]])b(d,e,1.15,.08,2.3,.08,C.ivory);for(const y of [.8,1.55,2.3])b(0,0,y,.92,.07,.92,y>2?C.sun:C.plank);piece(cone,0,0,2.75,1.3,.72,1.3,C.coral);for(let i=0;i<7;i++)b(.56,-.28+(i%2)*.3,.12+i*.32,.3,.05,.2,C.wood);
  const chute=(du,e0,e1,y0,y1,c)=>{const dv=e1-e0,dy=y0-y1,len=Math.hypot(dv,dy),rx=Math.atan2(dy,dv),opt={rx};b(du,(e0+e1)/2,(y0+y1)/2,.42,.05,len,c,opt);for(const s of [-.2,.2])b(du+s,(e0+e1)/2,(y0+y1)/2+.04,.03,.09,len,c,opt);b(du,(e0+e1)/2,(y0+y1)/2+.032,.26,.012,len,C.pool,{rx,mode:'water'});};
  chute(-.3,.44,2.05,2.25,.25,C.sun);chute(.3,.44,1.05,1.55,.95,C.coral);chute(.3,1.05,2.1,.95,.25,C.coral);lamp(-.46,.46,2.4);lamp(.46,.46,2.4);person(.1,.1,C.coral,2.33);person(-.2,-.2,C.sun,1.58);}
 // Lanchonete: quiosque com toldo listrado, balcão, sorvete gigante no teto, cardápio, mesas com guarda-sol.
 place('lanchonete');{b(0,-.1,.48,1.7,.96,1,C.ivory);b(0,-.1,1,1.84,.08,1.14,C.coral);b(0,.42,.25,1.62,.5,.1,C.sun);b(0,.5,.5,1.72,.05,.24,C.plank);for(const d of [-.5,0,.5])b(d,.405,.68,.36,.3,.02,C.off,{light:C.sun});
  for(let i=0;i<7;i++)b(-.84+i*.28,.62,.94,.28,.03,.46,i%2?C.ivory:C.coral,{rx:.32});piece(cone,0,-.1,1.32,.42,.6,.42,C.plank);piece(ball,0,-.1,1.74,.48,.48,.48,'#ffb4a8');piece(ball,.02,-.08,2.02,.34,.34,.34,C.ivory);b(-1.02,.3,.36,.06,.72,.06,C.ink);b(-1.02,.31,.62,.34,.36,.03,C.ink);for(const y of [.68,.6,.52])b(-1.02,.33,y,.22,.025,.01,C.ivory);
  for(const [d,e,c] of [[-.72,1.22,C.sun],[.72,1.28,C.coral]]){piece(cyl,d,e,.26,.42,.04,.42,C.ivory);b(d,e,.13,.04,.26,.04,C.ink);for(const s of [-.32,.32])piece(cyl,d+s,e,.09,.17,.18,.17,C.plank);parasol(d,e,c,.9);}for(const d of [-.65,.65])lamp(d,.68,.86,C.sun);person(.1,1.02,C.coral);person(-.4,.92,C.mid);person(.42,.86,C.sun);palm(1.32,-.3,.9);}
 // Estacionamento: piso, vagas, guarita com cancela, carros (os outros chegam com o lugar resolvido) e postes.
 place('estacionamento');{b(0,0,.02,3,.04,2.3,C.asphalt);for(const d of [-1.05,-.35,.35,1.05]){b(d,-.65,.045,.05,.01,.9,C.ivory);b(d,.65,.045,.05,.01,.9,C.ivory);}
  const car=(du,dv,c)=>{b(du,dv,.18,.44,.2,.76,c);b(du,dv-.04,.33,.38,.14,.38,C.ink);b(du,dv+.39,.16,.3,.06,.02,C.sun);for(const s of [-.23,.23])for(const e of [-.24,.24])b(du+s,dv+e,.08,.05,.15,.15,C.ink);};
  car(-.7,-.65,C.coral);car(.7,.65,C.sun);alive=true;car(0,-.65,C.leaf);car(.7,-.65,C.pool);car(-.7,.65,C.ivory);alive=false;
  b(1.4,.05,.3,.42,.6,.42,C.ivory);b(1.4,.05,.62,.5,.05,.5,C.coral);b(1.4,.265,.36,.26,.16,.02,C.off,{light:C.sun});b(.8,.1,.34,1,.05,.05,C.sun);for(const [d,e] of [[-1.45,-1.1],[-1.45,1.1]]){b(d,e,.55,.04,1.1,.04,C.ink);lamp(d,e,1.14);}}
 // Enfermaria: casa com telhado, a cruz na frente e no teto, porta, janelas, rampa e a ambulância.
 place('enfermaria');{b(0,0,.56,1.9,1.12,1.25,C.ivory);piece(prism,0,0,1.4,1.05,2.05,1.05,C.ink,{rz:Math.PI/2});b(0,.64,.82,.42,.12,.02,C.coral);b(0,.64,.82,.12,.42,.02,C.coral);b(0,.3,1.56,.34,.1,.04,C.coral,{rx:-.5});b(0,.3,1.56,.1,.3,.04,C.coral,{rx:-.5});
  b(-.36,.64,.3,.32,.6,.02,C.ink);for(const d of [.42,.76])b(d,.635,.42,.24,.26,.02,C.off,{light:C.sun});b(-.36,.86,.04,.5,.06,.46,C.path);b(-1.42,.2,.26,.78,.4,.42,C.ivory);b(-1.42,.2,.5,.46,.1,.4,C.off,{light:C.sun});b(-1.42,.415,.28,.24,.06,.01,C.coral);b(-1.42,.415,.28,.06,.22,.01,C.coral);for(const d of [-.28,.28])b(-1.42+d,.2,.07,.13,.14,.46,C.ink);lamp(-.94,.5,1.1);b(-.94,.5,.54,.03,1.08,.03,C.ink);person(.1,.92,C.ivory);palm(1.32,-.25,.85);}
 cur=null;
 // A equipe fica em pé na frente de cada lugar: ela conta na caixa dele, e o quadro e os rótulos a respeitam.
 // A bandeira sobe atrás do meio do lugar, acima da peça mais alta, e também conta na caixa (QA M2: na borda direita ela parecia ser do vizinho).
 for(const id of ids){ext[id].v1+=.62;ext[id].flag=ext[id].top+.5;ext[id].top+=.55;}
 // Tudo que é igual vira uma malha só, com a cor por instância; o vento entra nas árvores e nos arbustos, como no bosque.
 const dummy=new T.Object3D();dummy.rotation.order='YXZ';const hidden=new T.Matrix4().makeScale(0,0,0),tmp=new T.Color(),meshes=new Map();
 const matrixOf=([x,y,z,sx,sy,sz,rx,ry,rz])=>{dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry,rz);dummy.updateMatrix();return dummy.matrix;};
 const instanced=(name,g,m,items)=>{const mesh=new T.InstancedMesh(g,m,Math.max(1,items.length));mesh.name=name;mesh.count=items.length;mesh.userData.items=items;items.forEach((it,i)=>{mesh.setMatrixAt(i,matrixOf(it));mesh.setColorAt(i,tmp.set(it[9]));});mesh.frustumCulled=false;scene.add(mesh);meshes.set(items,mesh);return mesh;};
 const windy=(name,g,items,k)=>{const m=lit('wind',k);g.setAttribute('aGround',new T.InstancedBufferAttribute(Float32Array.from(items,it=>it[10]),1));return instanced(name,g,m,items);};
 instanced('parque-chao',capGeo,patch(new T.MeshLambertMaterial({color:'#ffffff',flatShading:true}),'ground-water'),caps);instanced('parque-colunas',colGeo,lit(),cols);
 windy('parque-troncos',footShade(new T.CylinderGeometry(.5,.8,1,3,1,true)),trunks,.035);windy('parque-pinheiros',footShade(new T.ConeGeometry(.52,1,6,1,true)),pines,.035);windy('parque-copas',footShade(new T.IcosahedronGeometry(.5,0)),crowns,.035);windy('parque-arbustos',footShade(new T.IcosahedronGeometry(.3,0)),bushes,.15);instanced('parque-pedras',footShade(new T.IcosahedronGeometry(.4,0),.6),lit(),rocks);
 {let n=0;for(const {g,mode,items} of kinds.values())instanced('parque-pecas-'+n++,g,lit(mode),items);}
 // Sob tudo, o chão da mata, como no bosque: nunca aparece no quadro, só impede que uma emenda de hexágonos fure.
 const floor=new T.Mesh(new T.PlaneGeometry(400,400).rotateX(-Math.PI/2),new T.MeshBasicMaterial({color:C.earth}));floor.name='parque-piso';scene.add(floor);
 // Sombras de bolha, como no bosque: elas põem as peças no chão.
 const blobItems=[...ids.map(id=>{const e=ext[id],[x,z]=W((e.u0+e.u1)/2,(e.v0+e.v1)/2);return [x,GROUND+.008,z,(e.u1-e.u0)*1.15,1,(e.v1-e.v0)*1.2,0,A0,0];}),...trunks.map(t=>[t[0],t[10]+.012,t[2],1.1,1,1,0,0,0])];
 const blobs=new T.InstancedMesh(new T.PlaneGeometry(1,1).rotateX(-Math.PI/2),new T.MeshBasicMaterial({map:radial(),color:'#14301f',transparent:true,opacity:.32,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:false}),blobItems.length);blobItems.forEach((it,i)=>blobs.setMatrixAt(i,matrixOf(it)));blobs.name='parque-sombras';scene.add(blobs);
 // Marcador de cada lugar: o anel no chão (lugar aberto ou resolvido), a bandeira e a equipe em pé na frente. O estado também está escrito
 // no rótulo e na lista, com o símbolo (nunca só pela cor). As lâmpadas acesas ganham um brilho, como as lanternas do bosque.
 const SIZE=Object.fromEntries(ids.map(id=>{const e=ext[id],u=(e.u0+e.u1)/2-AT[id][0],v=(e.v0+e.v1)/2-AT[id][1];return [id,{u,v,r:Math.max(e.u1-e.u0,e.v1-e.v0)/2+.2}];}));
 const ring=new T.InstancedMesh(new T.TorusGeometry(1,.035,5,36).rotateX(Math.PI/2),new T.MeshBasicMaterial({toneMapped:false}),ids.length),pole=new T.InstancedMesh(cyl,lit(),ids.length),flag=new T.InstancedMesh(new T.PlaneGeometry(.46,.3,8,1),patch(new T.MeshLambertMaterial({color:C.leaf,flatShading:true,side:T.DoubleSide}),'flag'),ids.length);
 const TEAM=4,people=new T.InstancedMesh(cyl,lit(),ids.length*TEAM),heads=new T.InstancedMesh(ball,lit(),ids.length*TEAM);
 const glowItems=ids.flatMap(id=>glowAt[id].map(([du,dv,y])=>{const [x,z]=W(AT[id][0]+du,AT[id][1]+dv);return [id,x,GROUND+y,z];}));
 const glowMat=new T.MeshBasicMaterial({map:radial(),color:C.sun,transparent:true,opacity:.42,blending:T.AdditiveBlending,depthWrite:false,toneMapped:false});glowMat.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace('#include <project_vertex>','vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;');};glowMat.customProgramCacheKey=()=>'brilho-parque';
 const glow=new T.InstancedMesh(new T.PlaneGeometry(1,1),glowMat,Math.max(1,glowItems.length));
 [ring,pole,flag,people,heads,glow].forEach(m=>{m.frustumCulled=false;scene.add(m);});ring.name='parque-aneis';pole.name='parque-mastros';flag.name='parque-bandeiras';people.name='parque-equipe';heads.name='parque-equipe-cabecas';glow.name='parque-brilhos';
 const targets=ids.map((id,i)=>{const s=SIZE[id],e=ext[id],[x,z]=W(AT[id][0]+s.u,AT[id][1]+s.v),hit=new T.Mesh(new T.CylinderGeometry(s.r,s.r,e.top+.4,8),new T.MeshBasicMaterial({visible:false}));hit.position.set(x,GROUND+(e.top+.4)/2,z);hit.userData.lugar=i;scene.add(hit);return hit;});
 const GRAY=new T.Color('#9a9c98'),paintedDone=[];
 let states=ids.map(()=>({feito:false,equipe:[]})),selected=-1,lost=false,disposed=false,frames=0,motion=true,active=true,ambient=12,live=0,lifeT=0,last=0,raf=0;
 function paintMarks(){ids.forEach((id,i)=>{const s=states[i],o=SIZE[id],[a,c]=AT[id],[x,z]=W(a+o.u,c+o.v),show=i===selected;
  // QA M3: o anel é a elipse da caixa do lugar, no giro do parque, e não um círculo do maior lado, que entrava nos vizinhos.
  const e=ext[id];dummy.rotation.set(0,A0,0);dummy.position.set(x,GROUND+.05,z);dummy.scale.set((e.u1-e.u0)/2+.15,1,(e.v1-e.v0)/2+.15);dummy.updateMatrix();ring.setMatrixAt(i,show?dummy.matrix:hidden);ring.setColorAt(i,tmp.set(C.sun));
  const [px,pz]=W((e.u0+e.u1)/2,e.v0+.15),h=e.flag;dummy.rotation.set(0,0,0);dummy.scale.set(.04,h,.04);dummy.position.set(px,GROUND+h/2,pz);dummy.updateMatrix();pole.setMatrixAt(i,s.feito?dummy.matrix:hidden);pole.setColorAt(i,tmp.set(C.ink));
  dummy.scale.set(1,1,1);dummy.position.set(px+R.x*.25,GROUND+h-.16,pz+R.z*.25);dummy.rotation.set(0,A0,0);dummy.updateMatrix();flag.setMatrixAt(i,s.feito?dummy.matrix:hidden);
  // A equipe: uma figura para cada profissional, com a cor dele, na faixa da frente que a caixa do lugar reserva (QA M1: fora dela, caía na sebe ou fora do quadro).
  for(let k=0;k<TEAM;k++){const c2=s.equipe?.[k],[fx,fz]=W((e.u0+e.u1)/2+(k-1.5)*.36,e.v1-.31);dummy.rotation.set(0,0,0);dummy.scale.set(.17,.42,.17);dummy.position.set(fx,GROUND+.21,fz);dummy.updateMatrix();people.setMatrixAt(i*TEAM+k,c2?dummy.matrix:hidden);if(c2)people.setColorAt(i*TEAM+k,tmp.set(c2));dummy.scale.setScalar(.2);dummy.position.y=GROUND+.5;dummy.updateMatrix();heads.setMatrixAt(i*TEAM+k,c2?dummy.matrix:hidden);if(c2)heads.setColorAt(i*TEAM+k,tmp.set(C.skin));}
  // Aceso: as cores cheias, com janelas e lâmpadas ligadas. Apagado: um pouco mais cinza. A gente e os carros do lugar só aparecem com ele resolvido.
  if(paintedDone[i]!==s.feito){paintedDone[i]=s.feito;for(const {list,k,on} of piecesOf[id]){const m=meshes.get(list);tmp.set(s.feito?on||list[k][9]:list[k][9]);if(!s.feito)tmp.lerp(GRAY,.3);m.setColorAt(k,tmp);m.instanceColor.needsUpdate=true;}}
  for(const {list,k} of aliveOf[id]){const m=meshes.get(list);m.setMatrixAt(k,s.feito?matrixOf(list[k]):hidden);m.instanceMatrix.needsUpdate=true;}});
  glowItems.forEach(([id,x,y,z],i)=>{glow.setMatrixAt(i,states[ids.indexOf(id)].feito?matrixOf([x,y,z,.5,.5,.5,0,0,0]):hidden);});
  for(const m of [ring,pole,flag,people,heads,glow])m.instanceMatrix.needsUpdate=true;for(const m of [ring,pole,people,heads])if(m.instanceColor)m.instanceColor.needsUpdate=true;}
 // Câmera do bosque (43,7° de cima, mesmo giro), enquadrando os lugares inteiros, com folga em cima para um selo; o terreno passa de qualquer quadro.
 const Up=new T.Vector3(),Rc=new T.Vector3(),corners=id=>{const e=ext[id],out=[];for(const u of [e.u0,e.u1])for(const v of [e.v0,e.v1])for(const y of [0,e.top]){const [x,z]=W(u,v);out.push(new T.Vector3(x,GROUND+y,z));}return out;},pts=ids.flatMap(corners);
 let half=4;
 function frame(rect){camera.position.set(Math.sin(A0)*10,10,Math.cos(A0)*10);camera.lookAt(0,.45,0);camera.updateMatrixWorld();Rc.setFromMatrixColumn(camera.matrixWorld,0);Up.setFromMatrixColumn(camera.matrixWorld,1);
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const p of pts){const x=p.dot(Rc),y=p.dot(Up);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
  const aspect=rect.width/rect.height,top=Math.min(34,rect.height*.2)/rect.height;half=Math.max((y1-y0)/2/(1-top-.03),(x1-x0)/2/aspect/.97);
  camera.position.addScaledVector(Rc,(x0+x1)/2).addScaledVector(Up,(y0+y1)/2+half*top-(new T.Vector3(0,.45,0)).dot(Up));
  camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();camera.updateMatrixWorld();}
 const rectOf=()=>{const r=host.getBoundingClientRect();return {width:Math.max(1,r.width),height:Math.max(1,r.height)};};
 const toScreen=(v,rect)=>{const p=v.clone().project(camera);return {x:(p.x+1)/2*rect.width,y:(1-p.y)/2*rect.height};};
 // Para os rótulos: o topo e a base de cada lugar, e a caixa de tela das peças dele (os rótulos não a cobrem).
 function anchors(rect=rectOf()){return {width:rect.width,height:rect.height,selected,lugares:ids.map(id=>{const [x,z]=at(id),c=corners(id).map(p=>toScreen(p,rect)),xs=c.map(p=>p.x),ys=c.map(p=>p.y);return {id,...toScreen(new T.Vector3(x,GROUND+ext[id].top,z),rect),base:toScreen(new T.Vector3(x,GROUND,z),rect),box:{x0:Math.min(...xs),x1:Math.max(...xs),y0:Math.min(...ys),y1:Math.max(...ys)}};})};}
 let frameKey='',marksDirty=true;
 function render(){if(lost||disposed||host.hidden)return;const rect=rectOf();frame(rect);if(marksDirty){marksDirty=false;paintMarks();}renderer.render(scene,camera);frames++;const key=rect.width+'x'+rect.height;if(key!==frameKey||render.force){frameKey=key;render.force=false;onFrame(anchors(rect));}}
 function resize(){if(disposed)return;const r=rectOf();renderer.setSize(r.width,r.height,false);render();}
 // O ambiente, como o do bosque: roda depois de um toque e para em 12 s, desacelerando nos 2 últimos; a água e o vento ficam no shader.
 const running=()=>motion&&active&&!lost&&!disposed&&!host.hidden&&!document.hidden;
 function step(dt){const adt=Math.min(dt,12-ambient);if(adt<=0)return;ambient+=adt;live+=((ambient<10?1:0)-live)*(1-Math.exp(-adt/.45));lifeT+=adt*live;U.uT.value=lifeT;U.uAmp.value=live;render();}
 function tick(time){raf=0;if(!running())return;const dt=last?Math.min((time-last)/1000,.05):0;last=time;step(dt);if(ambient<12)raf=requestAnimationFrame(tick);else last=0;}
 function wake(){ambient=0;if(!raf&&running())raf=requestAnimationFrame(tick);}
 const ray=new T.Raycaster(),start={x:0,y:0};
 canvas.addEventListener('pointerdown',e=>{start.x=e.clientX;start.y=e.clientY;wake();});
 canvas.addEventListener('pointerup',e=>{if(Math.hypot(e.clientX-start.x,e.clientY-start.y)>8)return;const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const hit=ray.intersectObjects(targets)[0];if(hit)onPick(hit.object.userData.lugar);});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;onError('O mapa 3D do parque foi interrompido. Use a lista de lugares.');});
 const observer=new ResizeObserver(resize);observer.observe(host);resize();
 return {render,anchors,advance:step,
  paint(next){const changed=JSON.stringify(next)!==JSON.stringify(states);states=next.map((s,i)=>({...states[i],...s}));marksDirty=render.force=true;render();if(changed)wake();},
  select(i){if(selected===i)return;selected=i;marksDirty=render.force=true;render();},
  // A ponte liga o ambiente quando o parque abre e desliga quando ele fecha; movimento reduzido e pausa deixam a cena parada e completa.
  setActive(v){active=v;if(v)wake();else{cancelAnimationFrame(raf);raf=0;last=0;}},
  setMotion(v){motion=v;if(!v){cancelAnimationFrame(raf);raf=0;last=0;ambient=12;live=0;U.uAmp.value=0;render();}else wake();},
  state:()=>({ready:true,frames,selected,states:states.map(s=>({...s})),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,lost,half,ambient,motion,active,life:{t:lifeT,amp:U.uAmp.value}}),
  raw:()=>({renderer,scene,camera,targets,floor,uniforms:U,field:FIELD,plot:PLOT,toUV:uv,meshes:Object.fromEntries([...meshes.values()].map(m=>[m.name,m])),team:people,glow,flag,ext,piecesOf,aliveOf}),
  dispose(){disposed=true;cancelAnimationFrame(raf);observer.disconnect();scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose?.();});renderer.dispose();canvas.remove();}};
}};
