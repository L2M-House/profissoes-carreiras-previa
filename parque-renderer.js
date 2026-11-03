import * as T from 'three';
// Lote 6.1: o mapa do parque aquático, no mesmo motor e no estilo do bosque (hexágonos, cores do kit, luz e câmera do bosque),
// com peças simples. Renderer só: os lugares, o estado de cada um e o que se escreve vêm da ponte; nada de storage. Desenha só
// quando algo muda (tamanho, estado, lugar escolhido). Cada forma repetida é um InstancedMesh, como no bosque.
// ponytail: peças simples por decisão 3 do plano; arte refinada fica para um lote próprio.
const A0=.55,R=new T.Vector3(Math.cos(A0),0,-Math.sin(A0)),N=new T.Vector3(Math.sin(A0),0,Math.cos(A0));
const C={grass:'#69ae72',light:'#90be7c',earth:'#2b6946',water:'#3a6690',path:'#fff5de',ivory:'#fffdf9',coral:'#f2534a',sun:'#ffc83d',leaf:'#2ebe6a',ink:'#1c2744',rock:'#9b9a77',wood:'#8e603b',deep:'#1d6b49'};
// Lugares em (u para a direita da tela, v para a frente): a entrada fica na frente, o toboágua atrás da piscina.
const AT={piscina:[0,0],toboagua:[-.5,-2.7],bilheteria:[.5,2.8],estacionamento:[-2.8,1.6],lanchonete:[2.8,.1],enfermaria:[-2.7,-1.3]};
const W=(u,v)=>[u*R.x+v*N.x,u*R.z+v*N.z],GROUND=.3;
window.Parque={create(host,{lugares,onPick=()=>{},onFrame=()=>{},onError=()=>{}}){
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-6,6,4,-4,.1,80);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:false});
 renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2));renderer.outputColorSpace=T.SRGBColorSpace;renderer.setClearColor(C.water);
 const canvas=renderer.domElement;canvas.className='park-canvas';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Mapa do parque aquático em três dimensões. Os lugares também estão na lista abaixo do mapa.');host.prepend(canvas);
 scene.add(new T.HemisphereLight('#fffdf9','#245b39',1.8));const sun=new T.DirectionalLight('#fff1d0',2.2);sun.position.set(-4,8,5);scene.add(sun);
 const mats=new Map(),mat=c=>{if(!mats.has(c))mats.set(c,new T.MeshLambertMaterial({color:c,flatShading:true}));return mats.get(c);};
 const box=new T.BoxGeometry(1,1,1),cone=new T.ConeGeometry(.5,1,6),cyl=new T.CylinderGeometry(.5,.5,1,8),prism=new T.CylinderGeometry(.5,.5,1,3);
 const cap=new T.CircleGeometry(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),col=new T.CylinderGeometry(.58,.58,1,6,1,true);
 const batches=new Map(),dummy=new T.Object3D();
 function part(g,color,x,y,z,sx=1,sy=1,sz=1,ry=0,rz=0,rx=0){const k=g.uuid+color;if(!batches.has(k))batches.set(k,{g,color,items:[]});batches.get(k).items.push([x,y,z,sx,sy,sz,rx,ry,rz]);}
 // Ilha de hexágonos (raio 4 em terra, um anel de água em volta) sobre um mar que passa da borda de qualquer quadro.
 const tiles=[],near=(x,z,[ax,az],[bx,bz],r)=>{const dx=bx-ax,dz=bz-az,t=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz)));return Math.hypot(x-ax-dx*t,z-az-dz*t)<r;};
 const at=id=>W(...AT[id]),paths=[['bilheteria','piscina'],['piscina','lanchonete'],['piscina','enfermaria'],['bilheteria','estacionamento']].map(([a,b])=>[at(a),at(b)]);
 for(let q=-6;q<=6;q++)for(let r=-6;r<=6;r++){const d=Math.max(Math.abs(q),Math.abs(r),Math.abs(q+r));if(d>5)continue;const x=Math.sqrt(3)*.6*(q+r/2),z=.9*r;
  const land=d<=4,path=land&&paths.some(([a,b])=>near(x,z,a,b,.5)),h=land?GROUND:.1;tiles.push({x,z,h,land});
  part(cap,land?path?C.path:(q*7+r*3)%5===0?C.grass:C.light:C.water,x,h,z);if(land)part(col,C.earth,x,h/2,z,1,h,1);}
 const sea=new T.Mesh(new T.PlaneGeometry(400,400).rotateX(-Math.PI/2),mat(C.water));sea.position.y=.05;scene.add(sea);
 // As peças de cada lugar, em volta do ponto dele, viradas para a câmera.
 const ry=A0,P=(id,du,dv,y)=>{const [a,b]=AT[id],[x,z]=W(a+du,b+dv);return [x,GROUND+y,z];};
 const piece=(id,g,color,du,dv,y,sx,sy,sz,rot=0,rz=0,rx=0)=>part(g,color,...P(id,du,dv,y),sx,sy,sz,ry+rot,rz,rx);
 // Piscina: borda marfim e água.
 piece('piscina',box,C.ivory,0,0,.03,2.6,.06,1.7);piece('piscina',box,C.water,0,0,.065,2.3,.04,1.4);piece('piscina',box,C.ivory,.9,-.55,.12,.08,.2,.08);
 // Toboágua: torre, plataforma e duas descidas até a piscina.
 piece('toboagua',box,C.coral,0,0,.8,.5,1.6,.5);piece('toboagua',box,C.ivory,0,0,1.62,.8,.06,.8);
 piece('toboagua',box,C.sun,.3,.82,1.25,.32,.06,1.35,0,0,.55);piece('toboagua',box,C.sun,.3,1.65,.62,.32,.06,.74,0,0,.83);
 // Bilheteria: guichê com telhado e janela.
 piece('bilheteria',box,C.ivory,0,0,.3,.9,.6,.6);piece('bilheteria',prism,C.coral,0,0,.75,.55,.95,.55,0,Math.PI/2);piece('bilheteria',box,C.ink,0,.31,.36,.4,.2,.02);
 // Lanchonete: balcão, toldo e um guarda-sol.
 piece('lanchonete',box,C.ivory,0,0,.28,.9,.55,.7);piece('lanchonete',box,C.sun,0,.42,.62,1,.05,.4);piece('lanchonete',cyl,C.wood,.75,.6,.35,.04,.7,.04);piece('lanchonete',cone,C.coral,.75,.6,.75,.9,.25,.9);
 // Estacionamento: piso, faixas e dois carros.
 piece('estacionamento',box,C.rock,0,0,.015,1.7,.03,1.3);for(const du of [-.55,0,.55])piece('estacionamento',box,C.ivory,du,0,.035,.05,.01,1);
 piece('estacionamento',box,C.coral,-.28,-.1,.13,.38,.2,.65);piece('estacionamento',box,C.sun,.28,.15,.13,.38,.2,.65);piece('estacionamento',box,C.ink,-.28,-.1,.26,.3,.08,.3);piece('estacionamento',box,C.ink,.28,.15,.26,.3,.08,.3);
 // Enfermaria: casa marfim com a cruz.
 piece('enfermaria',box,C.ivory,0,0,.33,.9,.65,.8);piece('enfermaria',box,C.coral,0,.41,.45,.36,.1,.02);piece('enfermaria',box,C.coral,0,.41,.45,.1,.36,.02);piece('enfermaria',box,C.ink,0,0,.68,.95,.04,.85);
 // Árvores na borda da terra, longe dos lugares.
 for(const t of tiles){if(!t.land||Math.hypot(t.x,t.z)<3.6||Object.keys(AT).some(id=>{const [x,z]=at(id);return Math.hypot(t.x-x,t.z-z)<1.3;})||(Math.round(t.x*3+t.z*5)&1))continue;part(cyl,C.wood,t.x,GROUND+.15,t.z,.08,.3,.08);part(cone,C.deep,t.x,GROUND+.55,t.z,.5,.7,.5);}
 for(const {g,color,items} of batches.values()){const m=new T.InstancedMesh(g,mat(color),items.length);items.forEach(([x,y,z,sx,sy,sz,rx,ry2,rz],i)=>{dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry2,rz,'YXZ');dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);});m.frustumCulled=false;scene.add(m);}
 // Marcador de cada lugar: anel no chão (sol no lugar aberto) e uma bandeira folha quando ele tem equipe. O estado também está
 // escrito no rótulo e na lista (nunca só pela cor).
 const ids=lugares.map(l=>l.id),ring=new T.InstancedMesh(new T.TorusGeometry(.75,.06,5,28).rotateX(Math.PI/2),new T.MeshBasicMaterial(),ids.length),flag=new T.InstancedMesh(new T.PlaneGeometry(.34,.22),new T.MeshLambertMaterial({color:C.leaf,side:T.DoubleSide}),ids.length),pole=new T.InstancedMesh(cyl,mat(C.ink),ids.length);
 [ring,flag,pole].forEach(m=>{m.frustumCulled=false;scene.add(m);});
 const TOP={piscina:.4,toboagua:1.9,bilheteria:1.2,estacionamento:.5,lanchonete:1,enfermaria:.9},targets=[];
 ids.forEach((id,i)=>{const [x,z]=at(id),hit=new T.Mesh(new T.CylinderGeometry(.9,.9,TOP[id]+.4,8),new T.MeshBasicMaterial({visible:false}));hit.position.set(x,GROUND+(TOP[id]+.4)/2,z);hit.userData.lugar=i;scene.add(hit);targets.push(hit);});
 let states=ids.map(()=>({feito:false})),selected=-1,lost=false,disposed=false,frames=0;
 const hidden=new T.Matrix4().makeScale(0,0,0),tmp=new T.Color();
 function paintMarks(){ids.forEach((id,i)=>{const [x,z]=at(id),s=states[i];
  dummy.position.set(x,GROUND+.02,z);dummy.rotation.set(0,0,0);dummy.scale.setScalar(i===selected?1.15:1);dummy.updateMatrix();ring.setMatrixAt(i,dummy.matrix);ring.setColorAt(i,tmp.set(i===selected?C.sun:s.feito?C.leaf:C.ivory));
  const [px,,pz]=P(id,.55,-.35,0);dummy.scale.set(.03,.75,.03);dummy.position.set(px,GROUND+TOP[id]*.5+.38,pz);dummy.updateMatrix();pole.setMatrixAt(i,s.feito?dummy.matrix:hidden);
  dummy.scale.set(1,1,1);dummy.position.set(px+R.x*.17,GROUND+TOP[id]*.5+.64,pz+R.z*.17);dummy.rotation.set(0,ry,0);dummy.updateMatrix();flag.setMatrixAt(i,s.feito?dummy.matrix:hidden);});
  ring.instanceMatrix.needsUpdate=pole.instanceMatrix.needsUpdate=flag.instanceMatrix.needsUpdate=true;ring.instanceColor.needsUpdate=true;}
 // Câmera do bosque (43,7° de cima, mesmo giro), enquadrando a terra da ilha e o alto das peças, com folga para os rótulos.
 const Up=new T.Vector3(),Rc=new T.Vector3(),pts=[];for(const t of tiles)if(t.land)pts.push(new T.Vector3(t.x,GROUND,t.z));ids.forEach(id=>{const [x,z]=at(id);pts.push(new T.Vector3(x,GROUND+TOP[id]+.5,z));});
 let half=4;
 function frame(rect){camera.position.set(Math.sin(A0)*10,10,Math.cos(A0)*10);camera.lookAt(0,.45,0);camera.updateMatrixWorld();Rc.setFromMatrixColumn(camera.matrixWorld,0);Up.setFromMatrixColumn(camera.matrixWorld,1);
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const p of pts){const x=p.dot(Rc),y=p.dot(Up);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
  const aspect=rect.width/rect.height;half=Math.max((y1-y0)/2,(x1-x0)/2/aspect)*1.06+.25;
  camera.position.addScaledVector(Rc,(x0+x1)/2).addScaledVector(Up,(y0+y1)/2-(new T.Vector3(0,.45,0)).dot(Up));
  camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();camera.updateMatrixWorld();}
 const rectOf=()=>{const r=host.getBoundingClientRect();return {width:Math.max(1,r.width),height:Math.max(1,r.height)};};
 const toScreen=(v,rect)=>{const p=v.clone().project(camera);return {x:(p.x+1)/2*rect.width,y:(1-p.y)/2*rect.height};};
 function anchors(rect=rectOf()){return {width:rect.width,height:rect.height,lugares:ids.map(id=>{const [x,z]=at(id);return {id,...toScreen(new T.Vector3(x,GROUND+TOP[id]+.15,z),rect),base:toScreen(new T.Vector3(x,GROUND,z),rect)};})};}
 function render(){if(lost||disposed||host.hidden)return;const rect=rectOf();frame(rect);paintMarks();renderer.render(scene,camera);frames++;onFrame(anchors(rect));}
 function resize(){if(disposed)return;const r=rectOf();renderer.setSize(r.width,r.height,false);render();}
 const ray=new T.Raycaster(),start={x:0,y:0};
 canvas.addEventListener('pointerdown',e=>{start.x=e.clientX;start.y=e.clientY;});
 canvas.addEventListener('pointerup',e=>{if(Math.hypot(e.clientX-start.x,e.clientY-start.y)>8)return;const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const hit=ray.intersectObjects(targets)[0];if(hit)onPick(hit.object.userData.lugar);});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;onError('O mapa 3D do parque foi interrompido. Use a lista de lugares.');});
 const observer=new ResizeObserver(resize);observer.observe(host);resize();
 return {render,anchors,
  paint(next){states=next.map((s,i)=>({...states[i],...s}));render();},
  select(i){selected=i;render();},
  state:()=>({ready:true,frames,selected,states:states.map(s=>({...s})),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,lost,half}),
  raw:()=>({renderer,scene,camera,targets}),
  dispose(){disposed=true;observer.disconnect();scene.traverse(o=>{o.geometry?.dispose();});mats.forEach(m=>m.dispose());renderer.dispose();canvas.remove();}};
}};
