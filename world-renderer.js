import * as T from 'three';

// Renderer only. One curve owns the visible trail and the seven stops; state comes from the bridge.
// Lote 5.4: the characters are an SVG layer drawn by the bridge; the renderer only projects their anchors.
const STOP_U=[0,.42,.551,.665,.775,.885,1];
const ZONES={leaf:'#2ebe6a',coral:'#f2534a',sun:'#ffc83d',ink:'#1c2744'};
// Where Bino, Pipa and Téo stand in their lands (x, z), on low ground and clear of the stop flags and badges. Chosen so
// that, in the focus of each of their stops, they stand beside Rumo on screen, never in front of him, and nothing taller
// stands between them and the camera: Bino in front of the mill, Pipa flying over the river above the bridge, Téo on the
// meadow below Acampamento and Mirante, above the camera buttons.
const GUIDE_AT={bino:[-1.8,2.6],pipa:[.1,-1.2],teo:[3.95,-.15]};
// Rumo's walk: a short crouch, then a run whose duration grows slower than the distance (farther = faster).
const ANTES=.09,runTime=du=>.22+.24*Math.sqrt(du);
window.Bosque={create(host,{onSelect,onError,onView=()=>{},onFrame=()=>{},onWalk=()=>{}}){
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-6,6,4,-4,.1,80);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<600?1.5:2));renderer.outputColorSpace=T.SRGBColorSpace;
 const canvas=renderer.domElement;canvas.style.removeProperty('display');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Bosque em três dimensões com sete paradas numa trilha. Use também a lista de paradas.');host.prepend(canvas);
 scene.add(new T.HemisphereLight('#fffdf9','#245b39',1.8));const sun=new T.DirectionalLight('#fff1d0',2.2);sun.position.set(-4,8,5);scene.add(sun);
 const mat=(color,extra={})=>new T.MeshStandardMaterial({color,roughness:1,flatShading:true,...extra});
 // water: lighter ink so the river reads as water, not as a hole (DESIGN.md, Lote 5.2)
 const colors={grass:'#69ae72',light:'#90be7c',high:'#51925d',earth:'#2b6946',rock:'#9b9a77',wood:'#8e603b',plank:'#bb8c52',leaf:'#1d6b49',leaf2:'#38935b',water:'#3a6690',path:'#fff5de',ivory:'#fffdf9',coral:'#f2534a',coralDeep:'#d63c38',sun:'#ffc83d',ink:'#1c2744'};
 const palette=Object.fromEntries(Object.entries(colors).map(([k,c])=>[k,mat(c)]));
 const box=new T.BoxGeometry(1,1,1),hex=new T.CylinderGeometry(.58,.58,1,6),crown=new T.ConeGeometry(.6,1.4,6),trunk=new T.CylinderGeometry(.07,.1,1,5),rock=new T.IcosahedronGeometry(.4,0),round=new T.DodecahedronGeometry(.6,0),prism=new T.CylinderGeometry(.34,.34,.62,3);
 const batches=new Map(),dummy=new T.Object3D();
 function part(g,m,x,y,z,sx=1,sy=1,sz=1,ry=0,rz=0,rx=0){const key=g.uuid+m.uuid;if(!batches.has(key))batches.set(key,{g,m,items:[]});batches.get(key).items.push([x,y,z,sx,sy,sz,rx,ry,rz]);}
 function beam(x,y,z,sx,sy,sz,m=palette.wood,ry=0,rz=0,rx=0){part(box,m,x,y,z,sx,sy,sz,ry,rz,rx);}
 const curve=new T.CatmullRomCurve3([[-3.6,1.45],[-3.15,.55],[-2.35,-.35],[-1.5,-.35],[-.9,.45],[0,.45],[.9,.45],[1.8,-.05],[2.6,-1.05],[3.35,-1.5]].map(([x,z])=>new T.Vector3(x,.35,z)),false,'centripetal');
 const trail=Array.from({length:181},(_,i)=>curve.getPointAt(i/180));
 const stops=STOP_U.map((u,index)=>{const p=curve.getPointAt(u),t=curve.getTangentAt(u);return {index,u,x:p.x,z:p.z,side:new T.Vector3(-t.z,0,t.x)};}),targets=[];
 const nearTrail=(x,z)=>Math.min(...trail.map(p=>Math.hypot(p.x-x,p.z-z)));
 const guides=Object.fromEntries(Object.entries(GUIDE_AT).map(([name,[x,z]])=>[name,new T.Vector3(x,.35,z)]));
 const clearSpots=[...stops,...Object.values(guides)];
 const tiles=[];
 for(let q=-5;q<=5;q++)for(let r=-5;r<=5;r++){
  if(Math.max(Math.abs(q),Math.abs(r),Math.abs(q+r))>5)continue;
  const x=Math.sqrt(3)*.58*(q+r/2),z=.87*r,river=Math.abs(x)<.54,near=nearTrail(x,z),h=near<.94?.35:z< -1.6?1.6:z< -.45?.95:.35;
  tiles.push({x,z,height:river?.13:h});
  part(hex,palette.earth,x,((river?.03:h)-.85)/2,z,1,(river?.03:h)+.85,1);
  part(hex,river?palette.water:h>1?palette.high:h>.5?palette.grass:palette.light,x,river?.13:h-.025,z,1,.05,1);
  // Keep the camera side of every stop and every character clear: the SVG layer has no occlusion (Lote 5.4).
  if(river||near<1.55||clearSpots.some(s=>{const dx=x-s.x,dz=z-s.z;return Math.hypot(dx,dz)<2.4&&dx*Math.sin(.55)+dz*Math.cos(.55)>0;}))continue;
  const seed=Math.abs(q*13+r*7),s=.7+(seed%4)*.12;
  if(seed%5<2){
   part(trunk,palette.wood,x,h+.4*s,z,1,.8*s,1);
   if(seed%3===1){part(crown,palette.leaf,x,h+1.05*s,z,s,s,s,seed);part(crown,palette.leaf2,x,h+1.5*s,z,s*.64,s*.64,s*.64,seed+.3);}
   else if(seed%3===2){part(round,palette.leaf2,x,h+1.04*s,z,s,s*1.2,s,seed);part(round,palette.leaf,x+.25*s,h+.8*s,z+.12,s*.65,s*.7,s*.65,seed);}
   else{part(round,palette.leaf,x,h+1.15*s,z,s*.65,s*1.5,s*.65,seed);part(round,palette.leaf2,x-.15,h+.8*s,z,s*.75,s*.6,s*.75,seed);}
  }else part(rock,palette.rock,x+.1,h+.18,z,.9,.7,1.1,seed);
 }
 for(const g of Object.values(guides)){const t=tiles.reduce((a,b)=>Math.hypot(b.x-g.x,b.z-g.z)<Math.hypot(a.x-g.x,a.z-g.z)?b:a);g.y=Math.max(.35,t.height);}
 // A ribbon, not disconnected stepping stones.
 const vertices=[],normals=[];
 for(let i=0;i<180;i++){
  const p=trail[i],p2=trail[i+1];if(Math.abs((p.x+p2.x)/2)<.78)continue;
  const t=curve.getTangentAt(i/180),t2=curve.getTangentAt((i+1)/180),w=.43;
  const a=[p.x-t.z*w,.357,p.z+t.x*w],b=[p.x+t.z*w,.357,p.z-t.x*w],c=[p2.x-t2.z*w,.357,p2.z+t2.x*w],d=[p2.x+t2.z*w,.357,p2.z-t2.x*w];
  vertices.push(...a,...c,...b,...b,...c,...d);for(let k=0;k<6;k++)normals.push(0,1,0);
 }
 const ribbon=new T.BufferGeometry();ribbon.setAttribute('position',new T.Float32BufferAttribute(vertices,3));ribbon.setAttribute('normal',new T.Float32BufferAttribute(normals,3));const road=new T.Mesh(ribbon,palette.path);road.name='trilha-contínua';scene.add(road);
 // Bridge (Possibilidades: one bank for each possibility) and bank furniture.
 for(let i=-6;i<=6;i++)beam(i*.125,.315,.45,.12,.07,1.05,palette.plank);
 for(const z of [-.15,1.05]){beam(0,.77,z,1.85,.065,.065);for(const x of [-.84,0,.84])beam(x,.51,z,.075,.65,.075);}
 for(const x of [-.6,.6])beam(x,-.05,.45,.12,.75,.7);
 function bench(x,z,ry){beam(x,.58,z,.85,.09,.35,palette.plank,ry);beam(x,.86,z-.16,.85,.29,.07,palette.plank,ry);for(const dx of [-.3,.3])beam(x+dx,.43,z,.07,.3,.25,palette.wood,ry);}
 bench(-2.55,1.7,.1);
 // Mill by the river (Prioridades).
 const mx=-1.1,mz=1.9;
 beam(mx,.9,mz,.9,1.1,.8,palette.ivory);beam(mx,.42,mz,.98,.16,.88,palette.rock);
 for(const [z,rot]of [[mz-.28,-.62],[mz+.28,.62]])beam(mx,1.56,z,1.12,.08,.68,palette.coral,0,0,rot);
 beam(mx,1.09,mz+.411,.25,.38,.025,palette.ink);beam(mx+.27,.67,mz+.416,.22,.52,.03);
 beam(mx-.33,1.75,mz-.15,.15,.45,.17,palette.ivory);
 const wheel=new T.Group();wheel.name='roda-do-moinho';wheel.position.set(mx+.5,.63,mz+.18);scene.add(wheel);
 const wheelShape=new T.BufferGeometry(),wv=[],wi=[];
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;wv.push(0,Math.cos(a)*.43,Math.sin(a)*.43,0,Math.cos(a)*.32,Math.sin(a)*.32);const j=i*2,k=(j+2)%24;wi.push(j,k,j+1,j+1,k,k+1);}
 wheelShape.setAttribute('position',new T.Float32BufferAttribute(wv,3));wheelShape.setIndex(wi);wheelShape.computeVertexNormals();
 wheel.add(new T.Mesh(wheelShape,mat(colors.wood,{side:T.DoubleSide})));
 const spokes=new T.InstancedMesh(box,palette.plank,6);for(let i=0;i<6;i++){dummy.position.set(0,0,0);dummy.scale.set(.14,.84,.055);dummy.rotation.set(i*Math.PI/3,0,0);dummy.updateMatrix();spokes.setMatrixAt(i,dummy.matrix);}wheel.add(spokes);
 // Lookout deck and binoculars (Revisão: looking back at the whole trail).
 const look=stops[6];
 for(const dx of [-.58,.58])for(const dz of [-.52,.52])beam(look.x+dx,.19,look.z+dz,.09,.55,.09);
 for(let i=-4;i<=4;i++)beam(look.x+i*.14,.321,look.z,.13,.065,1.3,palette.plank);
 for(const dz of [-.66,.66]){beam(look.x+.66,.67,look.z+dz,.07,.67,.07);beam(look.x+.66,1.01,look.z,.07,.07,1.4);}
 const bx=look.x+.35,bz=look.z-.35;
 beam(bx,.88,bz,.09,1,.09);beam(bx,1.36,bz,.48,.08,.14,palette.ink);
 const tube=new T.CylinderGeometry(.14,.16,.45,8),lens=new T.CylinderGeometry(.1,.1,.02,8);
 for(const dz of [-.16,.16]){part(tube,palette.ink,bx,1.4,bz+dz,1,1,1,0,Math.PI/2);part(lens,palette.sun,bx+.23,1.4,bz+dz,1,1,1,0,Math.PI/2);}
 // Clearing compass sign (Curiosidades).
 const sign=stops[0];beam(sign.x+.68,.63,sign.z+.1,.045,.55,.045);part(new T.CylinderGeometry(.16,.16,.03,8),palette.ivory,sign.x+.68,.94,sign.z+.1,1,1,1,0,0,Math.PI/2);part(new T.ConeGeometry(.07,.22,3),palette.sun,sign.x+.68,.94,sign.z+.12);
 // Notice board (Informações), fork with three arrows (Uma dúvida), camp (Próximo passo).
 const at=(stop,d)=>[stop.x-stop.side.x*d,stop.z-stop.side.z*d];
 {const [x,z]=at(stops[3],.78);for(const dx of [-.22,.22])beam(x+dx,.62,z,.06,.6,.06);beam(x,.84,z,.62,.36,.05,palette.ivory);for(const dy of [-.07,.05])beam(x,.84+dy,z+.03,.42,.035,.02,palette.ink);}
 {const s=stops[4],[x,z]=at(s,.78);beam(x,.75,z,.06,.8,.06);[[palette.coral,.25,1.05],[palette.sun,-.6,.9],[palette.leaf2,1.3,.75]].forEach(([m,ry,y])=>beam(x+Math.cos(ry)*.16,y,z-Math.sin(ry)*.16,.38,.1,.05,m,ry));
  for(const ry of [.7,-.5]){const d=new T.Vector3(1,0,0).applyAxisAngle(new T.Vector3(0,1,0),Math.atan2(-curve.getTangentAt(s.u).z,curve.getTangentAt(s.u).x)+ry);beam(s.x+d.x*.75,.358,s.z+d.z*.75,.7,.012,.34,palette.path,Math.atan2(-d.z,d.x));}}
 {const [x,z]=at(stops[5],.8);part(prism,palette.sun,x,.62,z,1,1,1,.4,Math.PI/2);beam(x+.32,.56,z-.12,.05,.36,.05);part(new T.CylinderGeometry(.09,.12,.08,6),palette.rock,x-.1,.4,z+.5);part(new T.ConeGeometry(.06,.14,5),palette.coral,x-.1,.5,z+.5);}
 // Reeds, meadow stones and tiny ivory flowers keep the route readable.
 for(let i=0;i<26;i++){const z=-3.3+i*.25,x=(i%2?-.7:.7);if(Math.abs(z-.45)<.9)continue;for(let k=0;k<3;k++)beam(x+k*.06,.29+(k%2)*.04,z,.025,.3+(k%2)*.08,.025,palette.high,0,(k-1)*.16);}
 for(const p of trail.filter((_,i)=>i%15===0)){if(Math.abs(p.x)<1)continue;part(rock,palette.rock,p.x+.65,.42,p.z+.48,.28,.2,.3,p.x);part(round,palette.ivory,p.x-.62,.43,p.z-.4,.06,.045,.06);}
 beam(.25,-.27,4.85,.58,.85,.025,palette.water);beam(.25,-.71,4.87,.72,.07,.12,palette.ivory);
 const stream=new T.Group();stream.name='corrente';scene.add(stream);
 const currents=new T.InstancedMesh(box,palette.ivory,8);for(let i=0;i<8;i++){dummy.position.set((i%3-1)*.16,.163,-3+i*.77);dummy.scale.set(.09,.009,.18);dummy.rotation.set(0,0,0);dummy.updateMatrix();currents.setMatrixAt(i,dummy.matrix);}stream.add(currents);
 // Static parts become one mesh per material (Lote 5.4: draw calls); the reeds keep their instances to sway.
 let reeds;const reedBase=batches.get(box.uuid+palette.high.uuid)?.items,flat=new Map(),byMat=new Map();
 const matrixOf=([x,y,z,sx,sy,sz,rx,ry,rz])=>{dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry,rz);dummy.updateMatrix();return dummy.matrix;};
 for(const b of batches.values()){
  if(b.g===box&&b.m===palette.high){reeds=new T.InstancedMesh(b.g,b.m,b.items.length);b.items.forEach((it,i)=>reeds.setMatrixAt(i,matrixOf(it)));scene.add(reeds);continue;}
  if(!flat.has(b.g))flat.set(b.g,b.g.index?b.g.toNonIndexed():b.g);
  const pos=flat.get(b.g).attributes.position;if(!byMat.has(b.m))byMat.set(b.m,[]);for(const it of b.items)byMat.get(b.m).push(pos.clone().applyMatrix4(matrixOf(it)).array);
 }
 for(const [m,arrays] of byMat){const all=new Float32Array(arrays.reduce((n,a)=>n+a.length,0));let o=0;for(const a of arrays){all.set(a,o);o+=a.length;}const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(all,3));g.computeVertexNormals();scene.add(new T.Mesh(g,m));}
 // Stop markers: plaza, zone ring, pole, flag, lantern and a badge whose glyph names the state.
 // Lote 5.4: one InstancedMesh per part and one quad set for the seven badges (6 draw calls instead of 42).
 // Each stop keeps plain Object3D handles (ring, flag, lamp, badge...) that the code and the tests move as before.
 const plazaGeo=new T.CylinderGeometry(.38,.38,.03,8),ringGeo=new T.TorusGeometry(.38,.045,5,24),poleGeo=new T.CylinderGeometry(.025,.025,.85,5),flagGeo=new T.PlaneGeometry(.3,.19),lampGeo=new T.SphereGeometry(.08,8,6),lampMat=mat(colors.sun,{emissive:colors.sun,emissiveIntensity:.9});
 const PARTS={plaza:[plazaGeo,palette.path],ring:[ringGeo,mat('#ffffff')],pole:[poleGeo,palette.wood],flag:[flagGeo,mat('#ffffff',{side:T.DoubleSide})],lamp:[lampGeo,lampMat]};
 const tint=new T.Color('#ffffff'),marks=Object.fromEntries(Object.entries(PARTS).map(([k,[g,m]])=>{const mesh=new T.InstancedMesh(g,m,stops.length);mesh.name='paradas-'+k;mesh.frustumCulled=false;if(k==='ring'||k==='flag')stops.forEach((_,i)=>mesh.setColorAt(i,tint));scene.add(mesh);return [k,mesh];}));
 const atlas=document.createElement('canvas');atlas.width=128*stops.length;atlas.height=128;const atlasTexture=new T.CanvasTexture(atlas);atlasTexture.colorSpace=T.SRGBColorSpace;
 const badgeGeo=new T.BufferGeometry(),badgePos=new Float32Array(stops.length*12),uv=[],quads=[];
 stops.forEach((_,i)=>{const a=i/stops.length,b=(i+1)/stops.length;uv.push(a,0,b,0,b,1,a,1);quads.push(i*4,i*4+1,i*4+2,i*4,i*4+2,i*4+3);});
 badgeGeo.setAttribute('position',new T.BufferAttribute(badgePos,3));badgeGeo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));badgeGeo.setIndex(quads);
 const badges=new T.Mesh(badgeGeo,new T.MeshBasicMaterial({map:atlasTexture,transparent:true,depthTest:false}));badges.name='paradas-selos';badges.renderOrder=2;badges.frustumCulled=false;scene.add(badges);
 const flags=[],hidden=new T.Matrix4().makeScale(0,0,0);
 for(const stop of stops){
  const g=stop.group=new T.Group();g.position.set(stop.x,0,stop.z);
  const handle=(k,x,y,z)=>{const o=stop[k]=new T.Object3D();o.position.set(x,y,z);g.add(o);return o;};
  const px=stop.side.x*.6,pz=stop.side.z*.6;
  handle('plaza',0,.362,0);handle('ring',0,.39,0).rotation.x=Math.PI/2;handle('pole',px,.78,pz);flags.push(handle('flag',px+.16,1.12,pz));
  handle('lamp',px,1.24,pz).visible=false;handle('badge',px,1.5,pz).scale.setScalar(.5);
  stop.markers=[stop.badge,stop.pole,stop.flag,stop.lamp];
  const hit=new T.Mesh(new T.CylinderGeometry(.5,.5,1.4,8),new T.MeshBasicMaterial({visible:false}));hit.userData.stop=stop.index;hit.position.set(stop.x,.9,stop.z);scene.add(hit);targets.push(hit);
 }
 const camRight=new T.Vector3(),camUp=new T.Vector3(),spot=new T.Vector3();
 // Writes the handles into the instances and turns the badges to the camera, like sprites.
 function syncStops(){
  camRight.setFromMatrixColumn(camera.matrixWorld,0);camUp.setFromMatrixColumn(camera.matrixWorld,1);
  for(const s of stops){
   s.group.updateMatrixWorld(true);for(const k in marks)marks[k].setMatrixAt(s.index,s[k].visible?s[k].matrixWorld:hidden);
   const c=s.badge.getWorldPosition(spot),h=s.badge.visible?s.badge.scale.x/2:0;
   [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b],j)=>{for(let k=0;k<3;k++)badgePos[s.index*12+j*3+k]=c.getComponent(k)+(camRight.getComponent(k)*a+camUp.getComponent(k)*b)*h;});
  }
  for(const k in marks)marks[k].instanceMatrix.needsUpdate=true;badgeGeo.attributes.position.needsUpdate=true;
 }
 function drawBadge(stop,{state,zone}){
  const c=atlas.getContext('2d'),locked=state==='bloqueada',focus=state==='foco';
  c.save();c.translate(stop.index*128,0);
  c.clearRect(0,0,128,128);c.beginPath();c.arc(64,64,54,0,Math.PI*2);c.fillStyle=focus?colors.sun:colors.ivory;c.fill();c.lineWidth=12;c.strokeStyle=ZONES[zone]||colors.ink;c.stroke();
  c.fillStyle=colors.ink;c.strokeStyle=colors.ink;c.textAlign='center';c.textBaseline='middle';
  if(locked){c.lineWidth=7;c.beginPath();c.arc(64,54,14,Math.PI,0);c.stroke();c.fillRect(44,56,40,30);}
  else{const glyph={guardado:'✓',rascunho:'✎',adiado:'↷'}[state]||String(stop.index+1);c.font=`900 ${glyph.length>1?40:58}px Nunito, sans-serif`;c.fillText(glyph,64,68);}
  c.restore();atlasTexture.needsUpdate=true;
 }
 // Rumo replaced the compass piece (Lote 5.4): the bridge draws him in SVG; the scene keeps only his anchor, with no mesh.
 const piece=new T.Object3D();piece.name='rumo';scene.add(piece);
 let selected=0,activeScene=false,visible=true,motion=true,manual=false,raf=0,last=0,frames=0,ambient=12,ambientPhase=0,states=stops.map(()=>({state:'disponível',zone:'leaf'}));
 let walk=null,cam=null,pieceU=STOP_U[0],frameKey='';
 const piecePos=new T.Vector3(stops[0].x,.35,stops[0].z);
 // Overview frames the island ground and crowns, not the waterfall or empty air.
 const corners=[];for(const t of tiles)for(const dx of [-.58,.58])for(const dz of [-.58,.58])for(const y of [-.85,t.height+1.3])corners.push(new T.Vector3(t.x+dx,y,t.z+dz));
 let fitKey='',fitHalf=5;
 const center=new T.Vector3(0,0,0);let angle=.55,zoom=1,lost=false,disposed=false,overview=true,exploring=false;
 const metrics={maxCalls:0,maxTriangles:0};
 const focusCenter=i=>new T.Vector3(stops[i].x*.6,0,stops[i].z*.6);
 function goTo(u){pieceU=u;piecePos.copy(curve.getPointAt(u));piecePos.y=.35;}
 function settle(){if(cam){center.copy(cam.to);cam=null;}if(walk){goTo(walk.to);const index=walk.index;walk=null;render();onWalk({type:'arrive',index,walked:false,moved:true,stopped:true});}}
 function stop(){cancelAnimationFrame(raf);raf=0;last=0;}
 const running=()=>!disposed&&!lost&&activeScene&&visible&&motion&&!document.hidden;
 const busy=()=>walk||cam||ambient<12;
 // Screen points for the SVG layer, in CSS pixels of the canvas; unit = pixels per world unit at the current zoom.
 const toScreen=(v,rect)=>{const p=v.clone().project(camera);return {x:(p.x+1)/2*rect.width,y:(1-p.y)/2*rect.height,z:p.z};};
 function anchors(rect=host.getBoundingClientRect()){return {width:rect.width,height:rect.height,unit:rect.height/(camera.top-camera.bottom),rumo:toScreen(piecePos,rect),
  guides:Object.fromEntries(Object.entries(guides).map(([n,v])=>[n,toScreen(v,rect)])),stops:stops.map(s=>toScreen(new T.Vector3(s.x,.36,s.z),rect))};}
 const direction=(a,b)=>curve.getPointAt(b).project(camera).x>=curve.getPointAt(a).project(camera).x?1:-1;
 function schedule(){if(!manual&&!raf&&running()&&busy())raf=requestAnimationFrame(tick);}
 function view(){onView({overview,exploring,selected});}
 function render(){
  if(lost||disposed)return;
  const rect=host.getBoundingClientRect(),aspect=Math.max(.2,rect.width/Math.max(1,rect.height));
  camera.position.set(center.x+Math.sin(angle)*10,10,center.z+Math.cos(angle)*10);camera.lookAt(center.x,.45,center.z);camera.updateMatrixWorld();
  const key=angle+':'+aspect;if(key!==fitKey){fitKey=key;fitHalf=0;for(const p of corners){const v=p.clone().add(center).applyMatrix4(camera.matrixWorldInverse);fitHalf=Math.max(fitHalf,Math.abs(v.y),Math.abs(v.x)/aspect);}fitHalf*=1.04;}
  const half=(overview?fitHalf:rect.width<600?2.6:3.1)/zoom;
  camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
  piece.position.copy(piecePos);
  // Markers yield to Rumo so his silhouette stays readable.
  const actor=piecePos.clone();actor.y+=.6;actor.project(camera);
  for(const s of stops){const p=s.badge.getWorldPosition(new T.Vector3()).project(camera),clear=Math.abs(p.x-actor.x)>.75/(half*aspect)||Math.abs(p.y-actor.y)>.95/half;s.markers.forEach(o=>o.visible=clear&&(o!==s.lamp||states[s.index].state==='guardado'));}
  syncStops();renderer.render(scene,camera);frames++;metrics.maxCalls=Math.max(metrics.maxCalls,renderer.info.render.calls);metrics.maxTriangles=Math.max(metrics.maxTriangles,renderer.info.render.triangles);
  // The SVG layer moves only when the camera or Rumo moved.
  const layoutKey=[center.x,center.z,angle,half,rect.width,rect.height,piecePos.x,piecePos.y,piecePos.z].join();if(layoutKey!==frameKey){frameKey=layoutKey;onFrame(anchors(rect));}
 }
 function resize(){if(disposed)return;const rect=host.getBoundingClientRect();renderer.setSize(Math.max(1,rect.width),Math.max(1,rect.height),false);fitKey='';render();}
 const ease=t=>1-Math.pow(1-t,3);
 // Rumo walks the trail curve to the stop (Lote 5.4): crouch, run with short hops, arrive. The question is already open.
 // Events let the bridge animate his body and the guide of the land; changing destination mid-walk starts from where he is.
 function select(index,{instant=false}={}){
  if(!stops[index])return;
  selected=index;overview=false;ambient=0;
  stops.forEach(s=>{s.ring.scale.setScalar(s.index===index?1.15:1);});
  const target=focusCenter(index),u=STOP_U[index],du=Math.abs(u-pieceU),moved=du>1e-6;
  if(instant||!motion||!running()){walk=null;cam=null;goTo(u);center.copy(target);render();view();onWalk({type:'arrive',index,walked:false,moved});return;}
  // While Rumo walks, the camera waits for the crouch and eases in and out with him, so he stays in the frame (QA M1).
  const was=!!walk;cam=moved?{from:center.clone(),to:target,t:was?0:-ANTES,dur:.29,ease:k=>k<.5?2*k*k:1-2*(1-k)*(1-k)}:{from:center.clone(),to:target,t:0,dur:.35,ease};
  walk=moved?{from:pieceU,to:u,index,t:was?0:-ANTES,dur:runTime(du),hops:Math.max(1,Math.round(du*curve.getLength()/.8)),dir:direction(pieceU,u),running:was}:null;
  if(walk){onWalk({type:'start',index,dir:walk.dir,antes:was?0:ANTES*1000,run:walk.dur*1000});if(was)onWalk({type:'run',index,dir:walk.dir,run:walk.dur*1000});}
  schedule();render();view();
  if(!walk)onWalk({type:'arrive',index,walked:false,moved:false});
 }
 const ringColor=new T.Color(),flagColor=new T.Color();
 function paintStops(next){states=next.map((s,i)=>({...states[i],...s}));for(const s of stops){const st=states[s.index];drawBadge(s,st);marks.ring.setColorAt(s.index,ringColor.set(st.state==='foco'?colors.sun:ZONES[st.zone]||colors.ivory));marks.flag.setColorAt(s.index,flagColor.set(st.state==='guardado'?colors.sun:ZONES[st.zone]||colors.coral));const down=st.state==='bloqueada';s.flag.position.y=down?.62:1.12;s.flag.scale.x=down?.55:1;}marks.ring.instanceColor.needsUpdate=true;marks.flag.instanceColor.needsUpdate=true;render();}
 function advance(dt){
  if(!running())return;const ambientDt=Math.min(dt,12-ambient);ambient+=ambientDt;ambientPhase+=ambientDt;wheel.rotation.x=ambientPhase*.7;stream.position.z=(ambientPhase*.18)%.65;flags.forEach((f,i)=>f.rotation.y=Math.sin(ambientPhase*2+i*1.8)*.18);
  if(reeds){for(let i=0;i<6;i++){const [x,y,z,sx,sy,sz,rx,ry,rz]=reedBase[i];dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry,rz+Math.sin(ambientPhase*1.4+i)*.08);dummy.updateMatrix();reeds.setMatrixAt(i,dummy.matrix);}reeds.instanceMatrix.needsUpdate=true;}
  if(walk){walk.t=Math.min(walk.dur,walk.t+dt);
   if(walk.t>0){if(!walk.running){walk.running=true;onWalk({type:'run',index:walk.index,dir:walk.dir,run:walk.dur*1000});}
    const k=walk.t/walk.dur,e=k<.5?2*k*k:1-2*(1-k)*(1-k);goTo(walk.from+(walk.to-walk.from)*e);piecePos.y+=.12*Math.abs(Math.sin(Math.PI*walk.hops*k));
    if(k>=1){goTo(walk.to);const index=walk.index;walk=null;onWalk({type:'arrive',index,walked:true,moved:true});}}}
  if(cam){cam.t=Math.min(cam.dur,cam.t+dt);center.lerpVectors(cam.from,cam.to,cam.ease(Math.max(0,cam.t)/cam.dur));if(cam.t>=cam.dur)cam=null;}
  render();
 }
 function tick(time){raf=0;if(!running())return;const dt=last?Math.min((time-last)/1000,.05):0;last=time;advance(dt);if(!busy())view();schedule();}
 function release(object){const gs=new Set(),ms=new Set();object.traverse(o=>{if(o.isMesh||o.isSprite){if(o.geometry)gs.add(o.geometry);for(const m of(Array.isArray(o.material)?o.material:[o.material]))ms.add(m)}});gs.forEach(g=>g.dispose());ms.forEach(m=>{m.map?.dispose();m.dispose()});}
 function clampCenter(){center.x=T.MathUtils.clamp(center.x,-4.5,4.5);center.z=T.MathUtils.clamp(center.z,-3.5,3.5);}
 function pan(dx,dy){const k=(camera.top-camera.bottom)/Math.max(1,canvas.clientHeight);cam=null;center.x-=dx*k*Math.cos(angle)-dy*k*Math.sin(angle);center.z+=dx*k*Math.sin(angle)+dy*k*Math.cos(angle);clampCenter();render();view();}
 function cameraAction(action){
  cam=null;
  if(['left','right','up','down'].includes(action))pan(action==='left'?70:action==='right'?-70:0,action==='up'?70:action==='down'?-70:0);
  if(action==='in')zoom=Math.min(1.6,zoom+.15);if(action==='out')zoom=Math.max(.7,zoom-.15);
  if(action==='rotate')angle=Math.min(1.15,angle+.18);if(action==='rotate-back')angle=Math.max(-.3,angle-.18);
  if(action==='center'){overview=true;center.set(0,0,0);angle=.55;zoom=1;}
  if(action==='focus'){overview=false;center.copy(focusCenter(selected));zoom=1;}
  render();view();
 }
 const pointers=new Map(),ray=new T.Raycaster();let pinch=0;
 const pick=e=>{const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);return ray.intersectObjects(targets)[0]?.object.userData.stop;};
 function down(e){if(e.pointerType==='mouse'&&e.button!==0)return;if(e.pointerType!=='mouse')e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,dragged:false});canvas.setPointerCapture(e.pointerId);if(pointers.size>1){pointers.forEach(p=>p.dragged=true);const p=[...pointers.values()];pinch=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);}}
 function move(e){const p=pointers.get(e.pointerId);if(!p){if(e.pointerType==='mouse')canvas.style.cursor=pick(e)===undefined?'grab':'pointer';return;}const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
  if(pointers.size===2&&exploring){const a=[...pointers.values()],next=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);if(pinch>0)zoom=T.MathUtils.clamp(zoom*next/pinch,.7,1.6);pinch=next;render();view();return;}
  if(Math.hypot(p.x-p.startX,p.y-p.startY)>6)p.dragged=true;
  if(p.dragged)pan(dx,exploring||e.pointerType==='mouse'?dy:0);
 }
 function up(e){const p=pointers.get(e.pointerId);pointers.delete(e.pointerId);pinch=0;if(!p||p.dragged)return;const hit=pick(e);if(hit!==undefined)onSelect(hit);}
 function setExplore(value){exploring=!!value;pointers.clear();pinch=0;host.dataset.exploring=String(exploring);host.style.touchAction=exploring?'none':'pan-y';view();}
 function wheelZoom(e){if(!exploring)return;e.preventDefault();zoom=T.MathUtils.clamp(zoom*Math.exp(-e.deltaY*.0015),.7,1.6);render();view();}
 canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',e=>pointers.delete(e.pointerId));canvas.addEventListener('wheel',wheelZoom,{passive:false});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;stop();onError('A visualização 3D foi interrompida. Continue pela lista de paradas.');});
 // Scrolling the scene away or hiding the tab ends a walk at its stop instead of freezing it halfway (QA M4).
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);const observer=new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(!visible){stop();settle();}else schedule()});observer.observe(host);const visibility=()=>{if(document.hidden){stop();settle();}else schedule()};document.addEventListener('visibilitychange',visibility);
 stops.forEach(s=>drawBadge(s,states[s.index]));resize();
 return {select,paintStops,advance,render,anchors,camera:cameraAction,setExplore,
  // Leaving the view or pausing ends the walk at its stop: it never resumes later in the middle of something else.
  setActive(value){activeScene=value;if(value)schedule();else{stop();setExplore(false);settle();}},
  setMotion(value){motion=value;if(!value){stop();settle();render();}else schedule();},setManual(value){manual=value;stop();if(!value)schedule();},
  state:()=>({ready:true,selected,piece:piecePos.toArray(),stopPositions:stops.map(s=>[s.x,s.z]),states:states.map(s=>s.state),hop:!!walk,cam:!!cam,frames,active:activeScene,visible,motion,lost,tiles:tiles.length,heights:[...new Set(tiles.map(t=>t.height))],zoom,angle,center:center.toArray(),overview,exploring,ambient,metrics:{...metrics},triangles:renderer.info.render.triangles,calls:renderer.info.render.calls}),
  raw:()=>({renderer,scene,camera,piece,stops,targets,curve,trail,wheel,stream,flags,guides}),
  dispose(){disposed=true;stop();resizeObserver.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',visibility);release(scene);renderer.dispose();canvas.remove();}
 };
}};
