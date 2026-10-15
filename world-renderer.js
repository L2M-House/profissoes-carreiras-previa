import * as T from 'three';

// Renderer only. One curve owns the visible trail and the seven stops; state comes from the bridge.
// Lote 5.4: the characters are an SVG layer drawn by the bridge; the renderer only projects their anchors.
// Lote 5.6: a wide forest. The trail crosses it from left to right on screen, through the four lands, with the same
// distance between stops; the forest goes past any frame the camera can show, so the strip never shows empty background.
const ZONES={leaf:'#2ebe6a',coral:'#f2534a',sun:'#ffc83d',ink:'#1c2744'};
// Trail frame: s runs left to right on screen at the default camera angle, t runs toward the camera (down on screen).
const A0=.55,R0=[Math.cos(A0),-Math.sin(A0)],N0=[Math.sin(A0),Math.cos(A0)];
const W=(s,t)=>[s*R0[0]+t*N0[0],s*R0[1]+t*N0[1]],ST=(x,z)=>[x*R0[0]+z*R0[1],x*N0[0]+z*N0[1]];
// Stops k = 0..6 sit on the sway of the trail; five more points on each side carry it past the forest edge. The pattern repeats,
// so every stop-to-stop stretch has the same length (about 2.6, against 1.0–1.2 between most stops in Lote 5.5).
const DX=2.45,SWAY=.42,FIELD={s:[-18,18],t:[-11,12]};
const TRAIL=Array.from({length:17},(_,i)=>{const k=i-5;return W((k-3)*DX,SWAY*((k&1)?-1:1));});
// Guides stand behind the trail (up on screen), in a clearing, right behind a stop of their land that sits on the near side
// of the sway: Bino behind Clareira, Pipa over the river behind Ponte, Téo behind Mirante. With the whole trail on a phone
// (box floor 46 px) the drawings would touch if a guide stood between two stops (QA M1); behind a near stop, the next stop is
// a whole stretch away on screen and Rumo there never reaches the guide; Bino and Téo also step a little away from it.
// [stop, behind, sideways]
const GUIDE_AT={bino:[0,3,-.2],teo:[6,3,.2]},PIPA_UP=2.3;
const FIGURE_UNITS=1.55;// same as the bridge: drawing height in world units, with a box of 46 to 130 px
// Rumo's walk: a short crouch, then a run whose duration grows slower than the distance (farther = faster).
const ANTES=.09,runTime=du=>.22+.24*Math.sqrt(du);
const hash=(a,b)=>{const h=Math.sin(a*127.1+b*311.7)*43758.5453;return h-Math.floor(h);};
window.Bosque={create(host,{onSelect,onError,onView=()=>{},onFrame=()=>{},onWalk=()=>{}}){
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-6,6,4,-4,.1,80);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2));// phone in either orientation: 1.5 (QA B5)renderer.outputColorSpace=T.SRGBColorSpace;
 const canvas=renderer.domElement;canvas.style.removeProperty('display');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Bosque em três dimensões com sete paradas numa trilha. Use também a lista de paradas.');host.prepend(canvas);
 scene.add(new T.HemisphereLight('#fffdf9','#245b39',1.8));const sun=new T.DirectionalLight('#fff1d0',2.2);sun.position.set(-4,8,5);scene.add(sun);
 const mat=(color,extra={})=>new T.MeshStandardMaterial({color,roughness:1,flatShading:true,...extra});
 // water: lighter ink so the river reads as water, not as a hole (DESIGN.md, Lote 5.2)
 const colors={grass:'#69ae72',light:'#90be7c',high:'#51925d',earth:'#2b6946',rock:'#9b9a77',wood:'#8e603b',plank:'#bb8c52',leaf:'#1d6b49',leaf2:'#38935b',water:'#3a6690',path:'#fff5de',ivory:'#fffdf9',coral:'#f2534a',coralDeep:'#d63c38',sun:'#ffc83d',ink:'#1c2744'};
 const palette=Object.fromEntries(Object.entries(colors).map(([k,c])=>[k,mat(c)]));
 const box=new T.BoxGeometry(1,1,1),round=new T.DodecahedronGeometry(.6,0),prism=new T.CylinderGeometry(.34,.34,.62,3);
 const batches=new Map(),dummy=new T.Object3D();
 function part(g,m,x,y,z,sx=1,sy=1,sz=1,ry=0,rz=0,rx=0){const key=g.uuid+m.uuid;if(!batches.has(key))batches.set(key,{g,m,items:[]});batches.get(key).items.push([x,y,z,sx,sy,sz,rx,ry,rz]);}
 function beam(x,y,z,sx,sy,sz,m=palette.wood,ry=0,rz=0,rx=0){part(box,m,x,y,z,sx,sy,sz,ry,rz,rx);}
 const matrixOf=([x,y,z,sx,sy,sz,rx,ry,rz])=>{dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry,rz);dummy.updateMatrix();return dummy.matrix;};
 // One InstancedMesh per repeated shape (Lote 5.6): hexagons, trunks, crowns and rocks cost one draw call each.
 function instanced(name,g,m,items,tint){const mesh=new T.InstancedMesh(g,m,Math.max(1,items.length));mesh.name=name;mesh.count=items.length;items.forEach((it,i)=>{mesh.setMatrixAt(i,matrixOf(it));if(tint)mesh.setColorAt(i,new T.Color(it[9]));});mesh.frustumCulled=false;scene.add(mesh);return mesh;}
 const curve=new T.CatmullRomCurve3(TRAIL.map(([x,z])=>new T.Vector3(x,.35,z)),false,'centripetal');curve.arcLengthDivisions=1600;
 // Stops at the sway points (k = 0..6 of the 17 control points), on the curve by construction.
 const lengths=curve.getLengths(1600),STOP_U=[0,1,2,3,4,5,6].map(k=>lengths[(k+5)*100]/lengths[1600]);
 const trail=Array.from({length:601},(_,i)=>curve.getPointAt(i/600));
 const stops=STOP_U.map((u,index)=>{const p=curve.getPointAt(u),t=curve.getTangentAt(u);return {index,u,x:p.x,z:p.z,side:new T.Vector3(-t.z,0,t.x)};}),targets=[];
 const span=STOP_U[6]-STOP_U[0];
 const nearest=(x,z)=>{let d=1e9,i=0;for(let k=0;k<trail.length;k+=2){const q=Math.hypot(trail[k].x-x,trail[k].z-z);if(q<d){d=q;i=k;}}return {d,p:trail[i]};};
 // Behind the trail = farther from the camera than the closest trail point (t smaller).
 const behind=(x,z,p)=>ST(x,z)[1]<ST(p.x,p.z)[1];
 // The river follows the 60° axis of the hexagons: on screen it runs straight up and down and meets the trail square on, under
 // the bridge of Ponte. `fromRiver` is the distance across it, from the middle of its two rows of hexagons.
 const RV=[.5,Math.sqrt(3)/2],RN=[Math.sqrt(3)/2,-.5],riverP=stops[2].x*RN[0]+stops[2].z*RN[1],fromRiver=(x,z)=>Math.abs(x*RN[0]+z*RN[1]-riverP);
 const guides=Object.fromEntries(Object.entries(GUIDE_AT).map(([name,[a,back,side]])=>{const p=curve.getPointAt(STOP_U[a]),[s,t]=ST(p.x,p.z),[x,z]=W(s+side,t-back);return [name,new T.Vector3(x,.35,z)];}));
 guides.pipa=new T.Vector3(stops[2].x-RV[0]*PIPA_UP,.35,stops[2].z-RV[1]*PIPA_UP);const order=['bino','pipa','teo'];for(const n of order){const v=guides[n];delete guides[n];guides[n]=v;}
 const clearSpots=[...stops,...Object.values(guides)];
 // Hex field shifted so the river line falls between two rows of hexagons: the river is two hexagons wide.
 const HX=Math.sqrt(3)*.58,ox=(riverP-.87*(Math.round(riverP/.87-.5)+.5))/RN[0],tiles=[],tileAt=new Map();
 const height=(x,z)=>{const river=fromRiver(x,z)<.5;if(river)return .13;const {d,p}=nearest(x,z);if(d<1)return .35;
  if(behind(x,z,p))return d<1.9?.35:d<4.6?.95:1.6;return d>5&&hash(Math.round(x),Math.round(z))<.3?.95:.35;};
 for(let r=-40;r<=40;r++)for(let q=-40;q<=40;q++){const x=HX*(q+r/2)+ox,z=.87*r,[s,t]=ST(x,z);if(s<FIELD.s[0]-1||s>FIELD.s[1]+1||t<FIELD.t[0]-1||t>FIELD.t[1]+1)continue;
  const tile={q,r,x,z,s,t,height:height(x,z)};tiles.push(tile);tileAt.set(q+','+r,tile);}
 const NB=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],caps=[],columns=[];
 for(const tile of tiles){const low=Math.min(...NB.map(([dq,dr])=>tileAt.get((tile.q+dq)+','+(tile.r+dr))?.height??0));
  caps.push([tile.x,tile.height,tile.z,1,1,1,0,0,0,tile.height<.2?colors.water:tile.height>1?colors.high:tile.height>.5?colors.grass:colors.light]);
  if(low<tile.height-.01)columns.push([tile.x,tile.height/2,tile.z,1,tile.height,1,0,0,0]);}
 // Flat hexagon tops (6 triangles) and open columns (12): the sides show only where a neighbour is lower.
 const capGeo=new T.CircleGeometry(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),colGeo=new T.CylinderGeometry(.58,.58,1,6,1,true);
 instanced('hexagonos-topos',capGeo,mat('#ffffff'),caps,true);instanced('hexagonos-colunas',colGeo,palette.earth,columns);
 // Under everything, forest floor: never shown inside the camera limits; it only keeps a missing tile from being a hole.
 const floor=new T.Mesh(new T.PlaneGeometry(400,400).rotateX(-Math.PI/2),palette.earth);floor.position.y=0;scene.add(floor);
 // A ribbon, not disconnected stepping stones; it leaves the frame on both sides, into the forest.
 const vertices=[],normals=[];
 for(let i=0;i<600;i++){
  const p=trail[i],p2=trail[i+1];if(fromRiver((p.x+p2.x)/2,(p.z+p2.z)/2)<.95)continue;
  const t=curve.getTangentAt(i/600),t2=curve.getTangentAt((i+1)/600),w=.43;
  const a=[p.x-t.z*w,.357,p.z+t.x*w],b=[p.x+t.z*w,.357,p.z-t.x*w],c=[p2.x-t2.z*w,.357,p2.z+t2.x*w],d=[p2.x+t2.z*w,.357,p2.z-t2.x*w];
  vertices.push(...a,...c,...b,...b,...c,...d);for(let k=0;k<6;k++)normals.push(0,1,0);
 }
 const ribbon=new T.BufferGeometry();ribbon.setAttribute('position',new T.Float32BufferAttribute(vertices,3));ribbon.setAttribute('normal',new T.Float32BufferAttribute(normals,3));const road=new T.Mesh(ribbon,palette.path);road.name='trilha-contínua';scene.add(road);
 // Landmarks in a frame turned like the trail at their stop: u along the trail, v toward the camera.
 const frameAt=(s,ry=Math.atan2(-curve.getTangentAt(s.u).z,curve.getTangentAt(s.u).x))=>({ry,at:(u,v)=>[s.x+u*Math.cos(ry)+v*Math.sin(ry),s.z-u*Math.sin(ry)+v*Math.cos(ry)]});
 const landmarks={};
 // Bridge (Possibilidades: one bank for each possibility), long enough to cross the river on the slant of the trail.
 {const s=stops[2],{ry,at}=frameAt(s);landmarks.ponte=[s.x,s.z];
  for(let i=-10;i<=10;i++){const [x,z]=at(i*.125,0);beam(x,.315,z,.12,.07,1.05,palette.plank,ry);}
  for(const v of [-.6,.6]){const [x,z]=at(0,v);beam(x,.77,z,2.6,.065,.065,palette.wood,ry);for(const u of [-1.2,-.4,.4,1.2]){const [px,pz]=at(u,v);beam(px,.51,pz,.075,.65,.075,palette.wood,ry);}}
  for(const u of [-1.05,1.05]){const [x,z]=at(u,0);beam(x,-.05,z,.12,.75,.7,palette.wood,ry);}}
 function bench(x,z,ry){const c=Math.cos(ry),sn=Math.sin(ry);beam(x,.58,z,.85,.09,.35,palette.plank,ry);beam(x-.16*sn,.86,z-.16*c,.85,.29,.07,palette.plank,ry);for(const dx of [-.3,.3])beam(x+dx*c,.43,z-dx*sn,.07,.3,.25,palette.wood,ry);}
 // Clearing: bench and compass sign behind the trail (Curiosidades).
 {const s=stops[0],{ry,at}=frameAt(s),[bx,bz]=at(-.75,-.95);bench(bx,bz,ry);landmarks.banco=[bx,bz];
  const [x,z]=at(.75,-.55);beam(x,.63,z,.045,.55,.045);part(new T.CylinderGeometry(.16,.16,.03,8),palette.ivory,x,.94,z,1,1,1,0,0,Math.PI/2);part(new T.ConeGeometry(.07,.22,3),palette.sun,x,.94,z+.02);}
 // Mill behind Moinho, to the right of the stop (Prioridades).
 const {at:millAt}=frameAt(stops[1]),[mx,mz]=millAt(.35,-1.75);landmarks.moinho=[mx,mz];
 beam(mx,.9,mz,.9,1.1,.8,palette.ivory);beam(mx,.42,mz,.98,.16,.88,palette.rock);
 for(const [z,rot]of [[mz-.28,-.62],[mz+.28,.62]])beam(mx,1.56,z,1.12,.08,.68,palette.coral,0,0,rot);
 beam(mx,1.09,mz+.411,.25,.38,.025,palette.ink);beam(mx+.27,.67,mz+.416,.22,.52,.03);
 beam(mx-.33,1.75,mz-.15,.15,.45,.17,palette.ivory);
 const millBox={x:[mx-.62,mx+1.05],z:[mz-.5,mz+.6],y:[.35,2.05]};
 const wheel=new T.Group();wheel.name='roda-do-moinho';wheel.position.set(mx+.5,.63,mz+.18);scene.add(wheel);
 const wheelShape=new T.BufferGeometry(),wv=[],wi=[];
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;wv.push(0,Math.cos(a)*.43,Math.sin(a)*.43,0,Math.cos(a)*.32,Math.sin(a)*.32);const j=i*2,k=(j+2)%24;wi.push(j,k,j+1,j+1,k,k+1);}
 wheelShape.setAttribute('position',new T.Float32BufferAttribute(wv,3));wheelShape.setIndex(wi);wheelShape.computeVertexNormals();
 wheel.add(new T.Mesh(wheelShape,mat(colors.wood,{side:T.DoubleSide})));
 const spokes=new T.InstancedMesh(box,palette.plank,6);for(let i=0;i<6;i++){dummy.position.set(0,0,0);dummy.scale.set(.14,.84,.055);dummy.rotation.set(i*Math.PI/3,0,0);dummy.updateMatrix();spokes.setMatrixAt(i,dummy.matrix);}wheel.add(spokes);
 // Lookout deck and binoculars (Revisão: looking back at the whole trail), beside the trail behind the last stop: the trail
 // goes on past it now, and would cover a deck built on the stop (QA B1).
 const [lx,lz]=frameAt(stops[6]).at(-.6,-1.35),look={x:lx,z:lz};landmarks.mirante=[look.x,look.z];
 for(const dx of [-.58,.58])for(const dz of [-.52,.52])beam(look.x+dx,.19,look.z+dz,.09,.55,.09);
 for(let i=-4;i<=4;i++)beam(look.x+i*.14,.321,look.z,.13,.065,1.3,palette.plank);
 for(const dz of [-.66,.66]){beam(look.x+.66,.67,look.z+dz,.07,.67,.07);beam(look.x+.66,1.01,look.z,.07,.07,1.4);}
 const bx=look.x+.35,bz=look.z-.35;
 beam(bx,.88,bz,.09,1,.09);beam(bx,1.36,bz,.48,.08,.14,palette.ink);
 const tube=new T.CylinderGeometry(.14,.16,.45,8),lens=new T.CylinderGeometry(.1,.1,.02,8);
 for(const dz of [-.16,.16]){part(tube,palette.ink,bx,1.4,bz+dz,1,1,1,0,Math.PI/2);part(lens,palette.sun,bx+.23,1.4,bz+dz,1,1,1,0,Math.PI/2);}
 // Notice board (Informações), fork with three arrows (Uma dúvida), camp (Próximo passo), behind their stops.
 const at=(stop,d)=>[stop.x-stop.side.x*d,stop.z-stop.side.z*d];
 {const [x,z]=at(stops[3],.78);landmarks.placa=[x,z];for(const dx of [-.22,.22])beam(x+dx,.62,z,.06,.6,.06);beam(x,.84,z,.62,.36,.05,palette.ivory);for(const dy of [-.07,.05])beam(x,.84+dy,z+.03,.42,.035,.02,palette.ink);}
 {const s=stops[4],[x,z]=at(s,.78);landmarks.bifurcacao=[x,z];beam(x,.75,z,.06,.8,.06);[[palette.coral,.25,1.05],[palette.sun,-.6,.9],[palette.leaf2,1.3,.75]].forEach(([m,ry,y])=>beam(x+Math.cos(ry)*.16,y,z-Math.sin(ry)*.16,.38,.1,.05,m,ry));
  for(const ry of [.7,-.5]){const d=new T.Vector3(1,0,0).applyAxisAngle(new T.Vector3(0,1,0),Math.atan2(-curve.getTangentAt(s.u).z,curve.getTangentAt(s.u).x)+ry);beam(s.x+d.x*.75,.358,s.z+d.z*.75,.7,.012,.34,palette.path,Math.atan2(-d.z,d.x));}}
 {const [x,z]=at(stops[5],.8);landmarks.acampamento=[x,z];part(prism,palette.sun,x,.62,z,1,1,1,.4,Math.PI/2);beam(x+.32,.56,z-.12,.05,.36,.05);part(new T.CylinderGeometry(.09,.12,.08,6),palette.rock,x-.1,.4,z+.5);part(new T.ConeGeometry(.06,.14,5),palette.coral,x-.1,.5,z+.5);}
 // The forest. One tree at most per hexagon, never on the trail, the river banks, a clearing or a landmark; nothing tall
 // between a stop or a guide and the camera (the SVG layer has no occlusion), nor in front of the trail where it would hide it.
 // Each land has its stretch: young round trees in Mapear, mixed in Analisar, golden crowns at the fork of Priorizar, pines in Agir.
 const marks=Object.values(landmarks),landOf=s=>{const mid=i=>(ST(stops[i].x,stops[i].z)[0]+ST(stops[i+1].x,stops[i+1].z)[0])/2;return s<mid(1)?0:s<mid(3)?1:s<mid(4)?2:3;};
 const trunks=[],cones=[],crowns=[],buds=[],rocks=[];
 const CROWN=[[colors.leaf2,colors.leaf],[colors.leaf,colors.leaf2],[colors.leaf2,colors.leaf],[colors.leaf,colors.earth]];
 for(const tile of tiles){
  const {x,z,s,height:h}=tile;if(h<.2||fromRiver(x,z)<1.3)continue;
  const {d,p}=nearest(x,z),front=!behind(x,z,p),seed=hash(tile.q,tile.r),k=hash(tile.r+7,tile.q-3);
  if(d<1.35||marks.some(([mx2,mz2])=>Math.hypot(x-mx2,z-mz2)<1.15)||clearSpots.some(c=>{const dx=x-c.x,dz=z-c.z,q=Math.hypot(dx,dz);return q<1.25||q<2.7&&dx*N0[0]+dz*N0[1]>0;}))continue;
  if(front&&d<3.4){if(seed<.12)rocks.push([x+.1,h+.18,z,.9,.7,1.1,0,seed*6,0]);continue;}
  if(seed>(front?.8:d<2.6?.5:.85)){if(k<.3)rocks.push([x+.1,h+.16,z,.8,.6,1,0,seed*6,0]);continue;}
  const jx=(k-.5)*.35,jz=(hash(tile.q*3,tile.r*5)-.5)*.35,tx=x+jx,tz=z+jz,sc=.75+k*.35,land=landOf(s),[c1,c2]=CROWN[land],pine=land===3?k<.75:land===1?k<.4:k<.15;
  trunks.push([tx,h+.4*sc,tz,1,.8*sc,1,0,0,0]);
  if(pine){cones.push([tx,h+1.05*sc,tz,sc,sc,sc,0,seed*6,0,c1]);cones.push([tx,h+1.5*sc,tz,sc*.64,sc*.64,sc*.64,0,seed*6+.3,0,c2]);}
  else{const gold=land===2&&k>.75;crowns.push([tx,h+1.1*sc,tz,sc,sc*1.15,sc,0,seed*6,0,gold?colors.sun:c1]);if(k>.3)buds.push([tx+.22*sc,h+.82*sc,tz+.1,sc*.62,sc*.66,sc*.62,0,seed*6,0,gold?c1:c2]);}
 }
 // Meadow stones and tiny ivory flowers along the trail keep the route readable.
 for(const p of trail.filter((_,i)=>i%24===0)){if(fromRiver(p.x,p.z)<1.4)continue;const [s,t]=ST(p.x,p.z),[ax,az]=W(s+.2,t+.75),[fx,fz]=W(s-.3,t-.6);rocks.push([ax,.42,az,.28,.2,.3,0,p.x,0]);part(round,palette.ivory,fx,.43,fz,.06,.045,.06);}
 const trunkGeo=new T.CylinderGeometry(.07,.1,1,4,1,true),budGeo=new T.OctahedronGeometry(.62,0),coneGeo=new T.ConeGeometry(.6,1.4,6,1,true),crownGeo=new T.IcosahedronGeometry(.62,0),rockGeo=new T.IcosahedronGeometry(.4,0);
 instanced('arvores-troncos',trunkGeo,palette.wood,trunks);instanced('arvores-copas-pinheiro',coneGeo,mat('#ffffff'),cones,true);instanced('arvores-copas-redondas',crownGeo,mat('#ffffff'),crowns,true);instanced('arvores-copas-menores',budGeo,mat('#ffffff'),buds,true);instanced('pedras',rockGeo,palette.rock,rocks);
 // Reeds stand in the shallow water by both banks, away from the bridge; a few sway.
 for(let i=0;i<40;i++){const d=-8+i*.4,side=i%2?-.72:.66,x=stops[2].x+RV[0]*d+RN[0]*side,z=stops[2].z+RV[1]*d+RN[1]*side;if(Math.abs(d)<1.4)continue;for(let k=0;k<3;k++)beam(x+k*.06,.28+(k%2)*.04,z,.025,.3+(k%2)*.08,.025,palette.high,0,(k-1)*.16);}
 const stream=new T.Group();stream.name='corrente';const streamBase=new T.Group();streamBase.position.set(stops[2].x,0,stops[2].z);streamBase.rotation.y=Math.atan2(RV[0],RV[1]);streamBase.add(stream);scene.add(streamBase);
 const currents=new T.InstancedMesh(box,palette.ivory,20);for(let i=0;i<20;i++){dummy.position.set((i%3-1)*.16,.163,-8+i*.82);dummy.scale.set(.09,.009,.18);dummy.rotation.set(0,0,0);dummy.updateMatrix();currents.setMatrixAt(i,dummy.matrix);}stream.add(currents);
 // Static parts become one mesh per material (Lote 5.4: draw calls); the reeds keep their instances to sway.
 let reeds;const reedBase=batches.get(box.uuid+palette.high.uuid)?.items,flat=new Map(),byMat=new Map();
 for(const b of batches.values()){
  if(b.g===box&&b.m===palette.high){reeds=new T.InstancedMesh(b.g,b.m,b.items.length);b.items.forEach((it,i)=>reeds.setMatrixAt(i,matrixOf(it)));scene.add(reeds);continue;}
  if(!flat.has(b.g))flat.set(b.g,b.g.index?b.g.toNonIndexed():b.g);
  const pos=flat.get(b.g).attributes.position;if(!byMat.has(b.m))byMat.set(b.m,[]);for(const it of b.items)byMat.get(b.m).push(pos.clone().applyMatrix4(matrixOf(it)).array);
 }
 for(const [m,arrays] of byMat){const all=new Float32Array(arrays.reduce((n,a)=>n+a.length,0));let o=0;for(const a of arrays){all.set(a,o);o+=a.length;}const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(all,3));g.computeVertexNormals();scene.add(new T.Mesh(g,m));}
 // Bino and Téo stand on the ground of their hexagon; Pipa flies a little above the water.
 for(const [n,g] of Object.entries(guides)){const t=tiles.reduce((a,b)=>Math.hypot(b.x-g.x,b.z-g.z)<Math.hypot(a.x-g.x,a.z-g.z)?b:a);g.y=Math.max(n==='pipa'?.95:.35,t.height);}
 // Stop markers: plaza, zone ring, pole, flag, lantern and a badge whose glyph names the state.
 // Lote 5.4: one InstancedMesh per part and one quad set for the seven badges (6 draw calls instead of 42).
 // Each stop keeps plain Object3D handles (ring, flag, lamp, badge...) that the code and the tests move as before.
 const plazaGeo=new T.CylinderGeometry(.38,.38,.03,8),ringGeo=new T.TorusGeometry(.38,.045,5,24),poleGeo=new T.CylinderGeometry(.025,.025,.85,5),flagGeo=new T.PlaneGeometry(.3,.19),lampGeo=new T.SphereGeometry(.08,8,6),lampMat=mat(colors.sun,{emissive:colors.sun,emissiveIntensity:.9});
 const PARTS={plaza:[plazaGeo,palette.path],ring:[ringGeo,mat('#ffffff')],pole:[poleGeo,palette.wood],flag:[flagGeo,mat('#ffffff',{side:T.DoubleSide})],lamp:[lampGeo,lampMat]};
 const tint=new T.Color('#ffffff'),markers=Object.fromEntries(Object.entries(PARTS).map(([k,[g,m]])=>{const mesh=new T.InstancedMesh(g,m,stops.length);mesh.name='paradas-'+k;mesh.frustumCulled=false;if(k==='ring'||k==='flag')stops.forEach((_,i)=>mesh.setColorAt(i,tint));scene.add(mesh);return [k,mesh];}));
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
   s.group.updateMatrixWorld(true);for(const k in markers)markers[k].setMatrixAt(s.index,s[k].visible?s[k].matrixWorld:hidden);
   const c=s.badge.getWorldPosition(spot),h=s.badge.visible?s.badge.scale.x/2:0;
   [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b],j)=>{for(let k=0;k<3;k++)badgePos[s.index*12+j*3+k]=c.getComponent(k)+(camRight.getComponent(k)*a+camUp.getComponent(k)*b)*h;});
  }
  for(const k in markers)markers[k].instanceMatrix.needsUpdate=true;badgeGeo.attributes.position.needsUpdate=true;
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
 let walk=null,cam=null,aim=null,pieceU=STOP_U[0],frameKey='';
 const piecePos=new T.Vector3(stops[0].x,.35,stops[0].z);
 const center=new T.Vector3(0,0,0);let angle=A0,zoom=1,lost=false,disposed=false,overview=true,exploring=false,framed=true,insetBottom=0,compact=false,shortNow=false;
 const metrics={maxCalls:0,maxTriangles:0};
 function goTo(u){pieceU=u;piecePos.copy(curve.getPointAt(u));piecePos.y=.35;}
 // Camera basis at the current angle: screen right (horizontal), screen up, and toward the camera on the ground. The camera
 // sits 10 above the ground and 10 away, looking at y = .45, so it looks down at 43.7°, not 45°: SP and CP are its sine and
 // cosine (with 45° the frame missed the field edge by .2 at the top of a tall strip).
 const Rh=new T.Vector3(),Nh=new T.Vector3(),Up=new T.Vector3(),SP=9.55/Math.hypot(10,9.55),CP=10/Math.hypot(10,9.55);
 function basis(){Rh.set(Math.cos(angle),0,-Math.sin(angle));Nh.set(Math.sin(angle),0,Math.cos(angle));Up.set(-Math.sin(angle)*SP,CP,-Math.cos(angle)*SP);}
 const sx=v=>v.x*Rh.x+v.z*Rh.z,sy=v=>v.x*Up.x+v.y*Up.y+v.z*Up.z;
 // The ground point under the look-at whose view has the screen point (cx, cy) in the middle.
 const centerAt=(cx,cy)=>new T.Vector3().addScaledVector(Rh,cx).addScaledVector(Nh,(.45*CP-cy)/SP);
 const rectOf=()=>{const r=host.getBoundingClientRect();return {width:Math.max(1,r.width),height:Math.max(1,r.height)};};
 // Lote 5.6: the camera frames boxes in screen units. A character box is the drawing (120×130, feet at 119), whose height
 // follows the zoom between 46 and 130 px: from the shadow under the feet to 5% above the box, where the kite of Pipa
 // passes it. A stop is its point and its badge.
 function figureBox(p,unit){const hb=Math.min(130,Math.max(46,unit*FIGURE_UNITS))/unit,x=sx(p),y=sy(p);return [x-hb*60/130,x+hb*60/130,y-hb*4/130,y+hb*125/130];}
 function stopBoxes(i){const s=stops[i],p=new T.Vector3(s.x,.35,s.z),b=new T.Vector3(s.x+s.side.x*.6,1.5,s.z+s.side.z*.6);return [[sx(p)-.3,sx(p)+.3,sy(p)-.2,sy(p)+.2],[sx(b)-.3,sx(b)+.3,sy(b)-.3,sy(b)+.3]];}
 const LAND_GUIDE=['bino','bino','pipa','pipa',null,'teo','teo'];
 // Fits the boxes of `make(unit)` inside the strip above the camera controls, between `lo` and `hi` half-heights, with
 // `side` px free on the left and right (more in "Ver bosque", so the end stops do not touch the edge).
 // The box size depends on the zoom (floor of 46 px), so the half-height is a fixed point: iterate until it settles.
 function fit(make,lo,hi,side=8){const r=rectOf(),aspect=r.width/r.height;let half=Math.min(hi,Math.max(lo,3)),out=null;
  for(let k=0,used=0;k<(lo===hi?1:30)&&!(out&&Math.abs(out.need-used)<1e-4);k++){used=half;const unit=r.height/(2*half),bs=make(unit),bx0=Math.min(...bs.map(b=>b[0])),bx1=Math.max(...bs.map(b=>b[1])),by0=Math.min(...bs.map(b=>b[2])),by1=Math.max(...bs.map(b=>b[3]));
   const ib=insetBottom/unit,pad=4/unit,need=Math.max((by1-by0)/2+pad+ib/2,((bx1-bx0)/2+side/unit)/aspect);half=Math.min(hi,Math.max(lo,need));
   out={cx:(bx0+bx1)/2,cy:(by0+by1)/2-ib/2,half,need};}
  return out;}
 // Phones in portrait keep Rumo between 56 and 72 px (Lote 5.4); elsewhere the drawing stops at 130 px. A strip under 200 px
 // (portrait with 601 to 700 px of window) cannot hold 56 px with the guide above and the buttons below: there the frame
 // fits stop, guide and Rumo above the buttons and Rumo gets smaller (QA A1).
 // Lote 5.7: the short map of an open phase (the bridge sets compact; it applies under 170 px) holds Rumo and the stop at 30 to 84 px per unit,
 // so no drawing drops to the 46 px floor, where Rumo and the guide above him overlap. The frame stays on Rumo and the stop (the
 // guides stand above its top edge there); the bridge hides a guide that is not whole in the frame.
 function bounds(){const r=rectOf();shortNow=compact&&r.height<170;if(shortNow)return {lo:r.height/168,hi:r.height/60};return r.width<600&&r.height>=170?{lo:r.height/116,hi:r.height>=200?r.height/91:9}:{lo:Math.max(1.6,r.height*FIGURE_UNITS/260),hi:9};}
 const rumoAt=i=>new T.Vector3(stops[i].x,.35,stops[i].z);
 function focusBoxes(i,unit,neighbours){const g=shortNow?null:LAND_GUIDE[i],bs=[figureBox(rumoAt(i),unit),...stopBoxes(i)];if(g)bs.push(figureBox(guides[g],unit));if(neighbours)for(const j of [i-1,i+1])if(stops[j])bs.push(stopBoxes(j)[0]);return bs;}
 // One zoom for the seven stops (the frame does not breathe between them): the largest that fits each stop with its guide.
 function frameFocus(i){basis();const {lo,hi}=bounds();let half=lo;for(let j=0;j<7;j++)half=Math.max(half,fit(u=>focusBoxes(j,u,false),lo,hi).half);
  const wide=fit(u=>focusBoxes(i,u,true),half,half),near=wide.need<=half*1.001;let f=near?wide:fit(u=>focusBoxes(i,u,false),half,half);
  // A guide of another land whose middle falls in the frame comes in whole, when it fits: at Bifurcação on a wide screen the
  // frame shows all three, and none may lose the head at the top edge (QA M2).
  const r=rectOf(),w=half*r.width/r.height,extra=Object.entries(guides).filter(([n,g])=>!shortNow&&n!==LAND_GUIDE[i]&&Math.abs(sx(g)-f.cx)<w).map(([,g])=>g);
  if(extra.length){const e=fit(u=>[...focusBoxes(i,u,near),...extra.map(g=>figureBox(g,u))],half,half,2);if(e.need<=half*1.001)f=e;}
  // No character cut by a side edge either: the frame slides sideways, as little as it can and keeping Rumo, the stop and
  // the guide of the land inside, until each other guide is either whole in the frame or out of it.
  const unit=r.height/(2*half),pad=4/unit,req=focusBoxes(i,unit,false),lo2=Math.max(...req.map(b=>b[1]))+pad-w,hi2=Math.min(...req.map(b=>b[0]))-pad+w,top=f.cy+half-pad,bottom=f.cy-half+insetBottom/unit+pad;
  const others=Object.entries(guides).filter(([n])=>!shortNow&&n!==LAND_GUIDE[i]).map(([,g])=>figureBox(g,unit)).filter(([,,y0,y1])=>y1>f.cy-half&&y0<f.cy+half);
  const clear=cx=>others.every(([x0,x1,y0,y1])=>x1<=cx-w||x0>=cx+w||x0>=cx-w+pad&&x1<=cx+w-pad&&y0>=bottom&&y1<=top);
  const tries=[f.cx,...others.flatMap(([x0,x1])=>[x0-w,x1+w,x1+pad-w,x0-pad+w])].filter(cx=>cx>=lo2-1e-6&&cx<=hi2+1e-6&&clear(cx)).sort((a,b)=>Math.abs(a-f.cx)-Math.abs(b-f.cx));
  return {center:centerAt(tries.length?tries[0]:f.cx,f.cy),half};}
 // "Ver bosque": the seven stops and the four characters; on wider strips also the landmarks at both ends, with 20 px free on
 // each side. A phone keeps 6 px and leaves the end landmarks out: the scale grows and the stops stand farther apart, so
 // the guides keep clear of Rumo at any stop (QA M1).
 function frameOverview(){basis();const r=rumoAt(selected),wide=rectOf().width>=600;return fit(u=>[figureBox(walk?piecePos:r,u),...Object.values(guides).map(g=>figureBox(g,u)),...stops.flatMap((_,i)=>stopBoxes(i)),...(wide?Object.values(landmarks):[]).map(([x,z])=>{const p=new T.Vector3(x,.35,z),q=new T.Vector3(x,1.5,z);return [sx(p)-.8,sx(p)+.8,sy(p),sy(q)];})],1.6,30,wide?20:6);}
 let focusHalf=2.6,overviewHalf=6;
 function reframe(){const o=frameOverview(),f=frameFocus(selected);overviewHalf=o.half;focusHalf=f.half;if(!framed)return;if(overview)center.copy(centerAt(o.cx,o.cy));else{aim=f.center;if(!cam&&!walk)center.copy(f.center);}}
 function settle(){if(cam){center.copy(cam.to);cam=null;}if(walk){goTo(walk.to);const index=walk.index;walk=null;if(aim)center.copy(aim);render();onWalk({type:'arrive',index,walked:false,moved:true,stopped:true});}}
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
 // Keeps the frame inside the forest: the ground seen at the four corners never leaves the field. A frame wider than the
 // field (zooming out on a tall strip) shrinks until it fits.
 function footprint(half,aspect){let s0=1e9,s1=-1e9,t0=1e9,t1=-1e9;for(const x of [-half*aspect,half*aspect])for(const y of [-half,half])for(const h of [0,.4]){const b=-(y+CP*(.45-h))/SP,px=x*Rh.x+b*Nh.x,pz=x*Rh.z+b*Nh.z,[s,t]=ST(px,pz);s0=Math.min(s0,s);s1=Math.max(s1,s);t0=Math.min(t0,t);t1=Math.max(t1,t);}return {s0,s1,t0,t1};}
 function limit(half,aspect){
  for(let k=0;k<3;k++){const f=footprint(half,aspect),scale=Math.min(1,(FIELD.s[1]-FIELD.s[0])/(f.s1-f.s0),(FIELD.t[1]-FIELD.t[0])/(f.t1-f.t0));if(scale>=1)break;half*=scale*.995;}
  const f=footprint(half,aspect);let [s,t]=ST(center.x,center.z);s=T.MathUtils.clamp(s,FIELD.s[0]+.05-f.s0,FIELD.s[1]-.05-f.s1);t=T.MathUtils.clamp(t,FIELD.t[0]+.05-f.t0,FIELD.t[1]-.05-f.t1);const [x,z]=W(s,t);center.x=x;center.z=z;return half;}
 // While Rumo walks, the camera leads to the stop but never lets him leave the frame (a long walk is wider than the frame).
 function keepRumo(half,aspect,unit){const [x0,x1,y0,y1]=figureBox(piecePos,unit),rel=new T.Vector3(center.x,.45,center.z),cx=sx(rel),cy=sy(rel),w=half*aspect-8/unit,top=half-4/unit,bottom=-half+(insetBottom+4)/unit;
  let dx=0,dy=0;if(x1-cx>w)dx=x1-cx-w;else if(x0-cx<-w)dx=x0-cx+w;if(y1-cy>top)dy=y1-cy-top;else if(y0-cy<bottom)dy=y0-cy-bottom;
  if(dx||dy)center.addScaledVector(Rh,dx).addScaledVector(Nh,-dy/SP);}
 function render(){
  if(lost||disposed)return;
  const rect=host.getBoundingClientRect(),aspect=Math.max(.2,rect.width/Math.max(1,rect.height));basis();
  let half=Math.min((overview?overviewHalf:focusHalf)/zoom,overviewHalf*1.25);
  if(walk&&aim&&!overview)keepRumo(half,aspect,Math.max(1,rect.height)/(2*half));
  half=limit(half,aspect);
  camera.position.set(center.x+Math.sin(angle)*10,10,center.z+Math.cos(angle)*10);camera.lookAt(center.x,.45,center.z);camera.updateMatrixWorld();
  camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
  piece.position.copy(piecePos);
  // Markers yield to Rumo so his silhouette stays readable.
  const actor=piecePos.clone();actor.y+=.6;actor.project(camera);
  for(const s of stops){const p=s.badge.getWorldPosition(new T.Vector3()).project(camera),clear=Math.abs(p.x-actor.x)>.75/(half*aspect)||Math.abs(p.y-actor.y)>.95/half;s.markers.forEach(o=>o.visible=clear&&(o!==s.lamp||states[s.index].state==='guardado'));}
  syncStops();renderer.render(scene,camera);frames++;metrics.maxCalls=Math.max(metrics.maxCalls,renderer.info.render.calls);metrics.maxTriangles=Math.max(metrics.maxTriangles,renderer.info.render.triangles);
  // The SVG layer moves only when the camera or Rumo moved.
  const layoutKey=[center.x,center.z,angle,half,rect.width,rect.height,piecePos.x,piecePos.y,piecePos.z].join();if(layoutKey!==frameKey){frameKey=layoutKey;onFrame(anchors(rect));}
 }
 function resize(){if(disposed)return;const rect=host.getBoundingClientRect();renderer.setSize(Math.max(1,rect.width),Math.max(1,rect.height),false);if(rect.width>1&&rect.height>1){reframe();if(cam&&!overview&&aim)cam.to=aim;}render();}
 const ease=t=>1-Math.pow(1-t,3);
 // Rumo walks the trail curve to the stop (Lote 5.4): crouch, run with short hops, arrive. The question is already open.
 // Events let the bridge animate his body and the guide of the land; changing destination mid-walk starts from where he is.
 function select(index,{instant=false}={}){
  if(!stops[index])return;
  selected=index;overview=false;framed=true;ambient=0;
  stops.forEach(s=>{s.ring.scale.setScalar(s.index===index?1.15:1);});
  const f=frameFocus(index),target=f.center,u=STOP_U[index],du=Math.abs(u-pieceU)/span,moved=du>1e-6;focusHalf=f.half;aim=target;
  if(instant||!motion||!running()){walk=null;cam=null;goTo(u);center.copy(target);render();view();onWalk({type:'arrive',index,walked:false,moved});return;}
  // While Rumo walks, the camera waits for the crouch and eases in and out with him, so he stays in the frame (QA M1).
  const was=!!walk;cam=moved?{from:center.clone(),to:target,t:was?0:-ANTES,dur:.29,ease:k=>k<.5?2*k*k:1-2*(1-k)*(1-k)}:{from:center.clone(),to:target,t:0,dur:.35,ease};
  walk=moved?{from:pieceU,to:u,index,t:was?0:-ANTES,dur:runTime(du),hops:Math.min(10,Math.max(1,Math.round(du*6*1.2))),dir:direction(pieceU,u),running:was}:null;
  if(walk){onWalk({type:'start',index,dir:walk.dir,antes:was?0:ANTES*1000,run:walk.dur*1000});if(was)onWalk({type:'run',index,dir:walk.dir,run:walk.dur*1000});}
  schedule();render();view();
  if(!walk)onWalk({type:'arrive',index,walked:false,moved:false});
 }
 const ringColor=new T.Color(),flagColor=new T.Color();
 function paintStops(next){states=next.map((s,i)=>({...states[i],...s}));for(const s of stops){const st=states[s.index];drawBadge(s,st);markers.ring.setColorAt(s.index,ringColor.set(st.state==='foco'?colors.sun:ZONES[st.zone]||colors.ivory));markers.flag.setColorAt(s.index,flagColor.set(st.state==='guardado'?colors.sun:ZONES[st.zone]||colors.coral));const down=st.state==='bloqueada';s.flag.position.y=down?.62:1.12;s.flag.scale.x=down?.55:1;}markers.ring.instanceColor.needsUpdate=true;markers.flag.instanceColor.needsUpdate=true;render();}
 function advance(dt){
  if(!running())return;const ambientDt=Math.min(dt,12-ambient);ambient+=ambientDt;ambientPhase+=ambientDt;wheel.rotation.x=ambientPhase*.7;stream.position.z=(ambientPhase*.18)%.82;flags.forEach((f,i)=>f.rotation.y=Math.sin(ambientPhase*2+i*1.8)*.18);
  if(reeds){for(let i=0;i<6;i++){const [x,y,z,sx2,sy2,sz,rx,ry,rz]=reedBase[i];dummy.position.set(x,y,z);dummy.scale.set(sx2,sy2,sz);dummy.rotation.set(rx,ry,rz+Math.sin(ambientPhase*1.4+i)*.08);dummy.updateMatrix();reeds.setMatrixAt(i,dummy.matrix);}reeds.instanceMatrix.needsUpdate=true;}
  const following=!!walk;
  if(walk){walk.t=Math.min(walk.dur,walk.t+dt);
   if(walk.t>0){if(!walk.running){walk.running=true;onWalk({type:'run',index:walk.index,dir:walk.dir,run:walk.dur*1000});}
    const k=walk.t/walk.dur,e=k<.5?2*k*k:1-2*(1-k)*(1-k);goTo(walk.from+(walk.to-walk.from)*e);piecePos.y+=.12*Math.abs(Math.sin(Math.PI*walk.hops*k));
    if(k>=1){goTo(walk.to);const index=walk.index;walk=null;onWalk({type:'arrive',index,walked:true,moved:true});}}}
  if(cam){cam.t=Math.min(cam.dur,cam.t+dt);center.lerpVectors(cam.from,cam.to,cam.ease(Math.max(0,cam.t)/cam.dur));if(cam.t>=cam.dur)cam=null;}
  else if(following&&aim)center.copy(aim);
  render();
 }
 function tick(time){raf=0;if(!running())return;const dt=last?Math.min((time-last)/1000,.05):0;last=time;advance(dt);if(!busy())view();schedule();}
 function release(object){const gs=new Set(),ms=new Set();object.traverse(o=>{if(o.isMesh||o.isSprite){if(o.geometry)gs.add(o.geometry);for(const m of(Array.isArray(o.material)?o.material:[o.material]))ms.add(m)}});gs.forEach(g=>g.dispose());ms.forEach(m=>{m.map?.dispose();m.dispose()});}
 function pan(dx,dy){const k=(camera.top-camera.bottom)/Math.max(1,canvas.clientHeight);cam=null;aim=null;framed=false;center.x-=dx*k*Math.cos(angle)-dy*k*Math.sin(angle);center.z+=dx*k*Math.sin(angle)+dy*k*Math.cos(angle);render();view();}
 function cameraAction(action){
  cam=null;
  if(['left','right','up','down'].includes(action))pan(action==='left'?70:action==='right'?-70:0,action==='up'?70:action==='down'?-70:0);
  if(action==='in')zoom=Math.min(1.6,zoom+.15);if(action==='out')zoom=Math.max(.7,zoom-.15);
  if(action==='rotate'){angle=Math.min(1.15,angle+.18);framed=false;}if(action==='rotate-back'){angle=Math.max(-.3,angle-.18);framed=false;}
  if(action==='center'){overview=true;angle=A0;zoom=1;framed=true;aim=null;reframe();}
  if(action==='focus'){overview=false;zoom=1;framed=true;const f=frameFocus(selected);focusHalf=f.half;center.copy(f.center);aim=f.center;}
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
  // The camera controls drawn over the bottom of the strip (px): the frame keeps stops and characters above them.
  setInsets({bottom=0}={}){if(Math.abs(bottom-insetBottom)<1)return;insetBottom=bottom;reframe();render();},
  // Lote 5.7: the bridge marks an open phase; under 170 px the focus then frames Rumo and the stop (see bounds).
  setCompact(value){if(compact===!!value)return;compact=!!value;reframe();render();},
  // Leaving the view or pausing ends the walk at its stop: it never resumes later in the middle of something else.
  setActive(value){activeScene=value;if(value)schedule();else{stop();setExplore(false);settle();}},
  setMotion(value){motion=value;if(!value){stop();settle();render();}else schedule();},setManual(value){manual=value;stop();if(!value)schedule();},
  state:()=>({ready:true,compact,short:shortNow,selected,piece:piecePos.toArray(),stopPositions:stops.map(s=>[s.x,s.z]),states:states.map(s=>s.state),hop:!!walk,cam:!!cam,frames,active:activeScene,visible,motion,lost,tiles:tiles.length,heights:[...new Set(tiles.map(t=>t.height))],zoom,angle,center:center.toArray(),overview,exploring,ambient,metrics:{...metrics},triangles:renderer.info.render.triangles,calls:renderer.info.render.calls}),
  raw:()=>({renderer,scene,camera,piece,stops,targets,curve,trail,wheel,stream,flags,guides,landmarks,millBox,field:FIELD,toTrail:ST}),
  dispose(){disposed=true;stop();resizeObserver.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',visibility);release(scene);renderer.dispose();canvas.remove();}
 };
}};
