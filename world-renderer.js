import * as T from 'three';
import './parque-renderer.js';// Lote 6.1: o mapa do parque aquatico, no mesmo bundle
// Lote 5.9 (adendo): the colour grade runs in the tone mapping of each material, with no extra pass. A soft shoulder per channel
// above .85 rolls off the lit tops that used to clip, and leaves every colour below it as the kit has it (PBR Neutral, tried
// first, took the trail from #fff5de to #f2e7cd and the blue out of the sun); on top, cool shadows and warm lights, the cool kept
// out of the darkest colours (QA A7: the ink of the kit went from (28,39,68) to (8,35,66)).
T.ShaderChunk.tonemapping_pars_fragment=T.ShaderChunk.tonemapping_pars_fragment.replace('vec3 CustomToneMapping( vec3 color ) { return color; }',
 'vec3 CustomToneMapping( vec3 color ) { vec3 c=color*toneMappingExposure;c=mix(c,.85+.15*(1.-exp(-(c-.85)/.15)),step(.85,c));float l=dot(c,vec3(.2126,.7152,.0722));return clamp(c+mix(vec3(-.008,0.,.016)*smoothstep(0.,.3,l),vec3(.008,.004,-.006),l),0.,1.); }');

// Renderer only. One curve owns the visible trail and the seven stops; state comes from the bridge.
// Lote 5.4: the characters are an SVG layer drawn by the bridge; the renderer only projects their anchors.
// Lote 5.6: a wide forest. The trail crosses it from left to right on screen, through the four lands, with the same
// distance between stops; the forest goes past any frame the camera can show, so the strip never shows empty background.
const ZONES={leaf:'#2ebe6a',coral:'#f2534a',sun:'#ffc83d',ink:'#1c2744'};
// Trail frame: s runs left to right on screen at the default camera angle, t runs toward the camera (down on screen).
const A0=.55,R0=[Math.cos(A0),-Math.sin(A0)],N0=[Math.sin(A0),Math.cos(A0)];
const W=(s,t)=>[s*R0[0]+t*N0[0],s*R0[1]+t*N0[1]],ST=(x,z)=>[x*R0[0]+z*R0[1],x*N0[0]+z*N0[1]];
// Stops k = 0..6; six more stretches on each side carry the trail past the forest edge. The pattern repeats, so every
// stop-to-stop stretch has the same length (about 2.6, against 1.0–1.2 between most stops in Lote 5.5).
// Lote 5.8: the trail climbs. Its axis turns PHI away from the camera, so on screen it rises from Clareira (bottom left) to
// Mirante (top right), and the ground rises along it: RISE is each stop above Clareira; level before Clareira and after
// Mirante, on the high point. The stops sit on the axis and the trail swings out between them, to alternate sides: every
// stretch keeps the same shape and length, and each stop is higher on screen than the one before (with the stops on the
// swing, as in Lote 5.6, Ponte came out lower than Moinho).
const DX=2.45,SWAY=.42,PHI=.22,RISE=[0,.08,.16,.36,.6,.88,1.2],FIELD={s:[-20,20],t:[-11,12]};
const AX=[Math.cos(PHI),-Math.sin(PHI)],PX=[Math.sin(PHI),Math.cos(PHI)],rise=k=>{const a=Math.max(0,Math.min(6,Math.floor(k))),b=Math.min(6,a+1),f=Math.max(0,Math.min(1,k-a));return RISE[a]+(RISE[b]-RISE[a])*f;};
const TRAIL=Array.from({length:37},(_,i)=>{const k=(i-12)/2,a=(k-3)*DX,b=i%2?SWAY*((Math.floor(k)&1)?-1:1):0;return [...W(a*AX[0]+b*PX[0],a*AX[1]+b*PX[1]),.35+rise(k)];});
// Guides stand in a clearing beside a stop of their land: Bino behind Clareira and Pipa over the river behind Ponte (up on
// screen), Téo in front of Mirante (down on screen). With the whole trail on a phone (box floor 46 px) the drawings would
// touch if a guide stood between two stops (QA M1); beside a stop, the next one is a whole stretch away on screen.
// Lote 5.8: behind Mirante, Téo was the top of "Ver bosque" and squeezed the climb; in front, he stands below it.
// Pipa flies .45 above the bridge (it was .6): with the climb she stands higher than Bino, and the focus of Clareira and
// Moinho zooms out to keep her whole on wide strips (see frameFocus); lower, it zooms out less.
// Lote 6.2: the river moved to the stretch after stop 2; Pipa stays behind that stop, in the same place, by its bank. Over the moved river she
// touched Rumo at stop 3 in "Ver a trilha toda" on a phone (a body cannot be 1.3 from two stops at the 46 px floor).
// [stop, behind (negative: in front), sideways]
const GUIDE_AT={bino:[0,3,-.2],teo:[6,-2.6,.3]},PIPA_UP=2.3,PIPA_Y=.45;
const FIGURE_UNITS=1.55;// same as the bridge: drawing height in world units, with a box of 46 to 130 px
// Rumo's walk: a short crouch, then a run whose duration grows slower than the distance (farther = faster).
const ANTES=.09,runTime=du=>.22+.24*Math.sqrt(du);
const hash=(a,b)=>{const h=Math.sin(a*127.1+b*311.7)*43758.5453;return h-Math.floor(h);};
// Lote 6.2: the park of world 1 uses the same shaders, light and foot shade as the forest: one set per scene, from here.
const vivo=()=>{
 // Lote 5.9: the scene lives in its shaders, on one set of uniforms. uT is the life clock (it slows in the calm and stops with
 // the ambient), uAmp the wind (0 still, 1 full), uGust the gust of a tapped stop (x, z, strength, age), uBloom the flowers
 // opening in a phase passage (x, z, on, age), uCloud the shadows of three clouds (x, z, radius) and uLake the middle of the
 // lake. Every lit material gets the cloud shadows (mode ''); a mode adds wind to vegetation (bent from its own ground,
 // aGround), cloth (aSway, on the merged parts), flags, wings, glints on the water or a glow. No CPU work per vertex.
 const U={uT:{value:0},uAmp:{value:0},uGust:{value:new T.Vector4(0,0,0,9)},uBloom:{value:new T.Vector4(0,0,0,9)},uCloud:{value:[0,1,2].map(()=>new T.Vector3(0,-99,1))},uLake:{value:new T.Vector2(0,-99)},uFog:{value:new T.Color('#dfe8e4')}};
 const WIND=`uniform float uT,uAmp,uK;uniform vec4 uGust,uBloom;varying vec3 vWorld;const vec2 WD=vec2(.85,-.52);
vec2 windAt(vec3 p,float h){float b=.5+.5*sin(dot(p.xz,WD)*.8-uT*1.7);vec2 g=p.xz-uGust.xy;float d=length(g),gu=uGust.z*exp(-d*d*.25)*(.55+.45*sin(d*2.4-uGust.w*6.));
 return (WD*uAmp*(.25+.75*b*b+.18*sin(uT*2.9+p.x*1.9+p.z*1.3))+(d>.001?g/d:WD)*gu)*h*uK;}
`,SHADE=`uniform float uT;uniform vec3 uCloud[3],uFog;uniform vec2 uLake;varying vec3 vWorld;
float cloudShade(vec2 p){float s=1.;for(int i=0;i<3;i++){vec2 q=(p-uCloud[i].xy)/uCloud[i].z;s-=.14*(1.-smoothstep(.45,1.,length(q*vec2(1.,1.35))));}return s;}
vec3 glint(vec3 p){float a=sin(dot(p.xz,vec2(.5,.866))*9.-uT*2.4+sin(dot(p.xz,vec2(.866,-.5))*3.7+uT*.8)*1.6);
 if(length(p.xz-uLake)<1.2)a=sin(dot(p.xz,vec2(.8,.6))*8.+uT*1.2)*sin(dot(p.xz,vec2(-.6,.8))*7.-uT*.9)*1.15;return vec3(.2,.24,.28)*smoothstep(.8,1.,a);}
`;
 const VDECL={wind:'attribute float aGround;',bloom:'attribute float aGround;',sway:'attribute float aSway;',critter:'attribute float aWing;attribute vec3 aFly;',particle:'attribute float aGlow;varying float vGlow;'};
 const BEGIN={bloom:'{vec3 ip=instanceMatrix[3].xyz;float k=clamp((uBloom.w-length(ip.xz-uBloom.xy)*.25)/.7,0.,1.);transformed*=1.+uBloom.z*.9*sin(k*3.14159);}',
  flag:'transformed.z+=sin(position.x*21.-uT*6.+float(gl_InstanceID)*1.9)*.035*(position.x+.15)/.3*uAmp;',
  critter:'{float f=sin(uT*aFly.z+aFly.y)*aFly.x;transformed.y+=abs(aWing)*f*.45;transformed.z*=1.-abs(aWing)*abs(f)*.3;}',particle:'vGlow=aGlow;'};
 const MOVE={wind:'wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));',bloom:'wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));',sway:'wp.xyz+=vec3(WD.x,.5,WD.y)*aSway*uAmp*uK*sin(uT*3.3+wp.x*7.+wp.z*5.);'};
 const FRAG={water:'outgoingLight+=glint(vWorld);','ground-water':'outgoingLight+=glint(vWorld)*step(vWorld.y,.2);',cloud:'outgoingLight=mix(outgoingLight/cloudShade(vWorld.xz),diffuseColor.rgb,.55);',glow:'outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.1,.65);',particle:'outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.15,vGlow*.8);'};
 // Lote 5.9 (adendo): light in steps. Half-Lambert (Valve) wraps the light around the shape, four steps per face read as toon on
 // the flat-shaded facets, and the side away from the sun keeps a cool colour instead of going grey (Monument Valley).
 const LIGHT=`varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};
void RE_Direct_Lambert(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
 float w=floor((dot(geometryNormal,directLight.direction)*.5+.5)*4.+.5)/4.;reflectedLight.directDiffuse+=mix(directLight.color*vec3(.3,.34,.52),directLight.color,w)*BRDF_Lambert(material.diffuseColor);}
void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`;
 // Fog: low over the river and the meadow, and the far edge of the board fades in "Ver bosque" (the camera looks at the trail from
 // 13.8 away; farther than 14.5 starts to fade).
 const FOG='{float fd=clamp((-vViewPosition.z-14.5)/9.,0.,1.);outgoingLight=mix(outgoingLight,uFog,max(fd*fd*.5,(1.-smoothstep(.1,.5,vWorld.y))*.14));}';
 function patch(m,mode='',k=1){m.onBeforeCompile=s=>{Object.assign(s.uniforms,U,{uK:{value:k}});
  s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\n'+WIND+(VDECL[mode]||'')).replace('#include <begin_vertex>','#include <begin_vertex>\n'+(BEGIN[mode]||''))
   .replace('#include <project_vertex>',`vec4 wp=vec4(transformed,1.);\n#ifdef USE_INSTANCING\nwp=instanceMatrix*wp;\n#endif\nwp=modelMatrix*wp;${MOVE[mode]||''}vWorld=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;`);
  s.fragmentShader=s.fragmentShader.replace('#include <common>','#include <common>\n'+SHADE+(mode==='particle'?'varying float vGlow;':'')).replace('#include <lights_lambert_pars_fragment>',LIGHT).replace('#include <opaque_fragment>','outgoingLight*=cloudShade(vWorld.xz);'+(FRAG[mode]||'')+FOG+'\n#include <opaque_fragment>');};
  m.customProgramCacheKey=()=>'vivo-'+mode;return m;}
 return {U,patch};
};
// Lote 5.9 (adendo): false occlusion per vertex, darker toward the foot of a shape. Sloan et al. (2013) bake it per class of
 // instanced tree; here it is the local height, on the vertex colours: no cost in the shader.
function footShade(g,k0=.55,top=.7){const p=g.attributes.position,c=new Float32Array(p.count*3);g.computeBoundingBox();const {min,max}=g.boundingBox;for(let i=0;i<p.count;i++)c.fill(k0+(1-k0)*T.MathUtils.smoothstep(p.getY(i),min.y,min.y+(max.y-min.y)*top),i*3,i*3+3);g.setAttribute('color',new T.BufferAttribute(c,3));return g;}
const radial=()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'#fff');r.addColorStop(.45,'rgba(255,255,255,.6)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);return new T.CanvasTexture(c);};
window.BosqueKit={vivo,footShade,radial};
window.Bosque={create(host,{onSelect,onError,onView=()=>{},onFrame=()=>{},onWalk=()=>{}}){
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-6,6,4,-4,.1,80);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2));// phone in either orientation: 1.5 (QA B5)renderer.outputColorSpace=T.SRGBColorSpace;
 renderer.toneMapping=T.CustomToneMapping;renderer.info.autoReset=false;// Lote 5.9: the grade above; render() sums the draw calls of its passes
 const canvas=renderer.domElement;canvas.style.removeProperty('display');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Bosque em três dimensões com sete paradas numa trilha. Use também a lista de paradas.');host.prepend(canvas);
 scene.add(new T.HemisphereLight('#fffdf9','#245b39',1.8));const sun=new T.DirectionalLight('#fff1d0',2.2);sun.position.set(-4,8,5);scene.add(sun);
 const {U,patch}=vivo();
 const mat=(color,extra={})=>patch(new T.MeshLambertMaterial({color,flatShading:true,...extra}));
 // water: lighter ink so the river reads as water, not as a hole (DESIGN.md, Lote 5.2)
 const colors={grass:'#69ae72',light:'#90be7c',high:'#51925d',earth:'#2b6946',rock:'#9b9a77',wood:'#8e603b',plank:'#bb8c52',leaf:'#1d6b49',leaf2:'#38935b',water:'#3a6690',path:'#fff5de',ivory:'#fffdf9',coral:'#f2534a',coralDeep:'#d63c38',sun:'#ffc83d',ink:'#1c2744'};
 const palette=Object.fromEntries(Object.entries(colors).map(([k,c])=>[k,mat(c)]));
 const box=new T.BoxGeometry(1,1,1),round=new T.DodecahedronGeometry(.6,0),prism=new T.CylinderGeometry(.34,.34,.62,3);
 const batches=new Map(),dummy=new T.Object3D();
 // Lote 5.8: LIFT is the ground of the stop whose landmark is being placed, above .35, and MARK that landmark's box (see on()):
 // every piece placed while it holds adds its box, and "Ver bosque" frames them all whole (QA M2: the binoculars of the Mirante left
 // the top edge when the landmark was framed as a fixed box over its point).
 // Lote 5.9: SWAY, when set, gives each vertex of the pieces placed while it holds a cloth weight (0 fixed, 1 free) from its
 // world position: the tent and the notes on the board move in the wind, the rest of the merged parts stays still.
 let LIFT=0,MARK=null,SWAY=0;const geoBox=new Map(),boxOf=g=>{if(!geoBox.has(g)){g.computeBoundingBox();geoBox.set(g,g.boundingBox);}return geoBox.get(g);};
 function part(g,m,x,y,z,sx=1,sy=1,sz=1,ry=0,rz=0,rx=0){const key=g.uuid+m.uuid,it=[x,y+LIFT,z,sx,sy,sz,rx,ry,rz,SWAY,MARK?.35+LIFT:null];if(!batches.has(key))batches.set(key,{g,m,items:[]});batches.get(key).items.push(it);if(MARK)MARK.push(boxOf(g).clone().applyMatrix4(matrixOf(it)));}
 function beam(x,y,z,sx,sy,sz,m=palette.wood,ry=0,rz=0,rx=0){part(box,m,x,y,z,sx,sy,sz,ry,rz,rx);}
 const matrixOf=([x,y,z,sx,sy,sz,rx,ry,rz])=>{dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(rx,ry,rz);dummy.updateMatrix();return dummy.matrix;};
 // One InstancedMesh per repeated shape (Lote 5.6): hexagons, trunks, crowns and rocks cost one draw call each.
 // userData.items keeps each placement [x, y, z, scale xyz, rotation xyz, colour] (Lote 5.8, for Lote 5.9 to animate from).
 function instanced(name,g,m,items,tint){const mesh=new T.InstancedMesh(g,m,Math.max(1,items.length));mesh.name=name;mesh.count=items.length;mesh.userData.items=items;items.forEach((it,i)=>{mesh.setMatrixAt(i,matrixOf(it));if(tint)mesh.setColorAt(i,new T.Color(it[9]));});mesh.frustumCulled=false;scene.add(mesh);return mesh;}
 // Lote 5.9: wind on an instanced kind. Each instance bends from its own ground (items[10], or the base the caller gives), so
 // a trunk keeps its foot and a crown sways more at the top; uK sets how far.
 function windy(mesh,k,mode='wind',ground=it=>it[10]){mesh.geometry.setAttribute('aGround',new T.InstancedBufferAttribute(Float32Array.from(mesh.userData.items,ground),1));patch(mesh.material,mode,k);return mesh;}
 const curve=new T.CatmullRomCurve3(TRAIL.map(([x,z,y])=>new T.Vector3(x,y,z)),false,'centripetal');curve.arcLengthDivisions=3600;
 // Stops at the axis points of k = 0..6 (every other one of the 37 control points), on the curve by construction.
 const lengths=curve.getLengths(3600),STOP_U=[0,1,2,3,4,5,6].map(k=>lengths[(k+6)*200]/lengths[3600]);
 const trail=Array.from({length:601},(_,i)=>curve.getPointAt(i/600));
 const stops=STOP_U.map((u,index)=>{const p=curve.getPointAt(u),t=curve.getTangentAt(u);return {index,u,x:p.x,y:p.y,z:p.z,side:new T.Vector3(-t.z,0,t.x).normalize()};}),targets=[];
 const span=STOP_U[6]-STOP_U[0];
 // Lote 6.2 (decision 1 of the plan): the river and the bridge stay as scenery away from the stops, on the stretch between the worlds 3
 // and 4, at the swing of the trail, where it runs almost square to the river. BR is that point; stop 2 used to stand on the bridge.
 const BR={u:lengths[1700]/lengths[3600]};{const p=curve.getPointAt(BR.u);BR.x=p.x;BR.y=p.y;BR.z=p.z;}
 const nearest=(x,z)=>{let d=1e9,i=0;for(let k=0;k<trail.length;k+=2){const q=Math.hypot(trail[k].x-x,trail[k].z-z);if(q<d){d=q;i=k;}}return {d,p:trail[i],i};};
 // Lote 5.8: where the trail climbs, the hexagons under it sit a little lower than its middle, by the rise over the .6 that a
 // cap spans each way, so no cap comes up through the trail.
 const drop=trail.map((p,i)=>{const a=trail[Math.max(0,i-1)],b=trail[Math.min(600,i+1)];return .005+.6*Math.abs(b.y-a.y)/Math.hypot(b.x-a.x,b.z-a.z);});
 // Behind the trail = farther from the camera than the closest trail point (t smaller).
 const behind=(x,z,p)=>ST(x,z)[1]<ST(p.x,p.z)[1];
 // The river follows the 60° axis of the hexagons: on screen it runs straight up and down and meets the trail square on, under
 // the bridge of Ponte. `fromRiver` is the distance across it, from the middle of its two rows of hexagons.
 const RV=[.5,Math.sqrt(3)/2],RN=[Math.sqrt(3)/2,-.5],riverP=BR.x*RN[0]+BR.z*RN[1],fromRiver=(x,z)=>Math.abs(x*RN[0]+z*RN[1]-riverP);
 const guides=Object.fromEntries(Object.entries(GUIDE_AT).map(([name,[a,back,side]])=>{const p=curve.getPointAt(STOP_U[a]),[s,t]=ST(p.x,p.z),[x,z]=W(s+side,t-back);return [name,new T.Vector3(x,.35,z)];}));
 guides.pipa=new T.Vector3(stops[2].x-RV[0]*PIPA_UP,.35,stops[2].z-RV[1]*PIPA_UP);const order=['bino','pipa','teo'];for(const n of order){const v=guides[n];delete guides[n];guides[n]=v;}
 const clearSpots=[...stops,...Object.values(guides)];
 // Lote 5.8: a small lake on the terrace behind Clareira, left of Bino (Mapear); in front of the trail it fell out of the frame.
 const [lakeS,lakeT]=ST(stops[0].x,stops[0].z),[lakeX,lakeZ]=W(lakeS-2.4,lakeT-2.7),LAKE_Y=stops[0].y+.48,inLake=(x,z)=>Math.hypot(x-lakeX,z-lakeZ)<1.05;
 // The mill and the lookout deck reach past the path level onto the first terrace behind their stop; the ground under them
 // stays at the stop's level, so no terrace hexagon comes up through them (QA B3 of Lote 5.8).
 // Lote 6.2: the place of each world beside its stop, behind the trail and to the right of it on screen, so Rumo in front of his stop does not
 // hide it: [right on screen, toward the camera, radius]. The river takes the right of stop 2. The mill stands behind the site of world 2, on
 // the ground of its stop, as scenery; the ground under each place keeps the level of its stop (QA B3 of Lote 5.8).
 const SITE=[[.95,-1.15,.8],[.8,-1.7,.62],[-.1,-1.34,.56],[.8,-1.7,.62],[.85,-1.16,.62],[.8,-1.7,.62],[.85,-1.16,.62]],besideStop=(i,ds,dt)=>{const [s,t]=ST(stops[i].x,stops[i].z);return W(s+ds,t+dt);};
 const siteAt=SITE.map(([ds,dt,r],i)=>{const [x,z]=besideStop(i,ds,dt);return {x,z,r,y:stops[i].y};}),[mx,mz]=besideStop(1,-.35,-3),FLAT=[{x:mx,z:mz,r:1.6,y:stops[1].y},...siteAt.map(p=>({...p,r:p.r+.85}))];
 // Hex field shifted so the river line falls between two rows of hexagons: the river is two hexagons wide.
 const HX=Math.sqrt(3)*.58,ox=(riverP-.87*(Math.round(riverP/.87-.5)+.5))/RN[0],tiles=[],tileAt=new Map();
 // Ground heights follow the trail (Lote 5.8): terraces behind it, and in front the ground steps down .55 at a time to the
 // meadow, so the climb of Analisar to Agir shows as hills with the Mirante on top.
 const height=(x,z)=>{if(fromRiver(x,z)<.5)return .13;if(inLake(x,z))return LAKE_Y;const {d,p,i}=nearest(x,z),g=p.y;if(d<1)return g-drop[i];const flat=FLAT.find(q=>Math.hypot(x-q.x,z-q.z)<q.r);if(flat)return flat.y;
  if(behind(x,z,p))return d<1.9?g:d<4.6?g+.6:g+1.25;const f=d<1.9?g:Math.max(.35,g-.55*Math.ceil((d-1.9)/1.5));return d>5&&hash(Math.round(x),Math.round(z))<.3?Math.max(f,.95):f;};
 for(let r=-40;r<=40;r++)for(let q=-40;q<=40;q++){const x=HX*(q+r/2)+ox,z=.87*r,[s,t]=ST(x,z);if(s<FIELD.s[0]-1||s>FIELD.s[1]+1||t<FIELD.t[0]-1||t>FIELD.t[1]+1)continue;
  const tile={q,r,x,z,s,t,height:height(x,z)};tiles.push(tile);tileAt.set(q+','+r,tile);}
 const NB=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],caps=[],columns=[],lake=[],tileUnder=(x,z)=>tiles.reduce((a,b)=>(b.x-x)**2+(b.z-z)**2<(a.x-x)**2+(a.z-z)**2?b:a);
 // A hexagon belongs to the land of the trail point nearest to it, up to halfway to the next land's stop.
 const halfU=(STOP_U[1]-STOP_U[0])/2,landAt=u=>u<STOP_U[1]+halfU?0:u<STOP_U[3]+halfU?1:u<STOP_U[4]+halfU?2:3;
 // The colour follows the level against the trail (Lote 5.8: the ground climbs with it): path level, terrace, high terrace;
 // the steps down in front of the climb read as grass, the meadow as light grass.
 const field=[];// Priorizar: the yellow field in front of Bifurcação (Lote 5.8)
 for(const tile of tiles){const low=Math.min(...NB.map(([dq,dr])=>tileAt.get((tile.q+dq)+','+(tile.r+dr))?.height??0)),{d,p,i}=nearest(tile.x,tile.z),rel=tile.height-p.y;
  tile.u=i/600;tile.land=landAt(tile.u);tile.front=!behind(tile.x,tile.z,p);tile.d=d;
  tile.field=tile.land===2&&tile.front&&d>1.55&&d<4.3&&Math.hypot(tile.x-stops[4].x,tile.z-stops[4].z)>1.4&&tile.height>.2;if(tile.field)field.push(tile);
  const color=tile.height<.2?colors.water:tile.field?'#d6c35f':rel>1?colors.high:rel>.4||rel<-.3&&tile.height>.5?colors.grass:colors.light;
  tile.lake=inLake(tile.x,tile.z);(tile.lake?lake:caps).push([tile.x,tile.height,tile.z,1,1,1,0,0,0,tile.lake?colors.water:color]);
  if(low<tile.height-.01)columns.push([tile.x,tile.height/2,tile.z,1,tile.height,1,0,0,0]);}
 // Flat hexagon tops (6 triangles) and open columns (12): the sides show only where a neighbour is lower.
 const capGeo=new T.CircleGeometry(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),colGeo=new T.CylinderGeometry(.58,.58,1,6,1,true);
 patch(instanced('hexagonos-topos',capGeo,mat('#ffffff'),caps,true).material,'ground-water');instanced('hexagonos-colunas',footShade(colGeo,.5,1),mat(colors.earth,{vertexColors:true}),columns);U.uLake.value.set(lakeX,lakeZ);// Lote 5.9: glints run on the river
 // Under everything, forest floor: never shown inside the camera limits; it only keeps a missing tile from being a hole.
 const floor=new T.Mesh(new T.PlaneGeometry(400,400).rotateX(-Math.PI/2),palette.earth);floor.position.y=0;scene.add(floor);
 // A ribbon, not disconnected stepping stones; it leaves the frame on both sides, into the forest.
 const vertices=[],normals=[];
 for(let i=0;i<600;i++){
  const p=trail[i],p2=trail[i+1];if(fromRiver((p.x+p2.x)/2,(p.z+p2.z)/2)<.95)continue;
  const t=curve.getTangentAt(i/600),t2=curve.getTangentAt((i+1)/600),w=.43/Math.hypot(t.x,t.z),w2=.43/Math.hypot(t2.x,t2.z),y=p.y+.007,y2=p2.y+.007;
  const a=[p.x-t.z*w,y,p.z+t.x*w],b=[p.x+t.z*w,y,p.z-t.x*w],c=[p2.x-t2.z*w2,y2,p2.z+t2.x*w2],d=[p2.x+t2.z*w2,y2,p2.z-t2.x*w2];
  vertices.push(...a,...c,...b,...b,...c,...d);for(let k=0;k<6;k++)normals.push(0,1,0);
 }
 const ribbon=new T.BufferGeometry();ribbon.setAttribute('position',new T.Float32BufferAttribute(vertices,3));ribbon.setAttribute('normal',new T.Float32BufferAttribute(normals,3));const road=new T.Mesh(ribbon,palette.path);road.name='trilha-contínua';scene.add(road);
 // Landmarks in a frame turned like the trail at their stop: u along the trail, v toward the camera. Lote 5.8: each one stands
 // on the ground of its stop; part() adds LIFT to every piece placed while on(i) holds it.
 const frameAt=(s,ry=Math.atan2(-curve.getTangentAt(s.u).z,curve.getTangentAt(s.u).x))=>({ry,at:(u,v)=>[s.x+u*Math.cos(ry)+v*Math.sin(ry),s.z-u*Math.sin(ry)+v*Math.cos(ry)]});
 const landmarks={},markBox={},on=(i,name,y=stops[i]?.y)=>{LIFT=i<0?0:y-.35;MARK=name?(markBox[name]??=[]):null;};
 // Lote 5.9: two birds perch on the landmark of each stop ([x, y, z, facing]); the camp has two lanterns on posts.
 const perch=stops.map(()=>[]),lanterns=[];let chimney,pinAt;
 // Bridge between the worlds 3 and 4: planks over the river, following the climb of the trail, with rails and posts on the same slope.
 {const {ry,at}=frameAt(BR),slope=(stops[3].y-stops[2].y)/(2*DX);landmarks.ponte=[BR.x,BR.z];on(-1,'ponte');
  for(let i=-8;i<=8;i++){const [x,z]=at(i*.125,0);beam(x,nearest(x,z).p.y-.035,z,.12,.07,1.05,palette.plank,ry);}on(2,'ponte',BR.y);
  for(const v of [-.6,.6]){const [x,z]=at(0,v);beam(x,.77,z,2.1,.065,.065,palette.wood,ry,slope);for(const u of [-.95,-.32,.32,.95]){const [px,pz]=at(u,v);beam(px,.51+u*slope,pz,.075,.65,.075,palette.wood,ry);}}
  for(const u of [-.9,.9]){const [x,z]=at(u,0);beam(x,-.05+u*slope,z,.12,.75,.7,palette.wood,ry);}}
 // Mill behind the stop and the site of world 2: scenery, away from the stop since Lote 6.2.
 on(1,'moinho');landmarks.moinho=[mx,mz];
 beam(mx,.9,mz,.9,1.1,.8,palette.ivory);beam(mx,.42,mz,.98,.16,.88,palette.rock);
 for(const [z,rot]of [[mz-.28,-.62],[mz+.28,.62]])beam(mx,1.56,z,1.12,.08,.68,palette.coral,0,0,rot);
 beam(mx,1.09,mz+.411,.25,.38,.025,palette.ink);beam(mx+.27,.67,mz+.416,.22,.52,.03);
 beam(mx-.33,1.75,mz-.15,.15,.45,.17,palette.ivory);chimney=[mx-.33,2+LIFT,mz-.15];
 const millBox={x:[mx-.62,mx+1.05],z:[mz-.5,mz+.6],y:[.35+LIFT,2.05+LIFT]};
 const wheel=new T.Group();wheel.name='roda-do-moinho';wheel.position.set(mx+.5,.63+LIFT,mz+.18);scene.add(wheel);
 const wheelShape=new T.BufferGeometry(),wv=[],wi=[];
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;wv.push(0,Math.cos(a)*.43,Math.sin(a)*.43,0,Math.cos(a)*.32,Math.sin(a)*.32);const j=i*2,k=(j+2)%24;wi.push(j,k,j+1,j+1,k,k+1);}
 wheelShape.setAttribute('position',new T.Float32BufferAttribute(wv,3));wheelShape.setIndex(wi);wheelShape.computeVertexNormals();
 wheel.add(new T.Mesh(wheelShape,mat(colors.wood,{side:T.DoubleSide})));
 const spokes=new T.InstancedMesh(box,palette.plank,6);for(let i=0;i<6;i++){dummy.position.set(0,0,0);dummy.scale.set(.14,.84,.055);dummy.rotation.set(i*Math.PI/3,0,0);dummy.updateMatrix();spokes.setMatrixAt(i,dummy.matrix);}wheel.add(spokes);
 // Lote 6.2 (decision 1): the stops hold only what is built on them. The notice board, the fork, the camp and the lookout left, and
 // each world has a construction site with its sign. What lived on the old landmarks stays on the site of the same land: the notes in
 // the wind on the sign of world 4, the pinwheel on world 5, the cloth over the materials and the two lanterns on world 6.
 // Every piece faces the camera, in screen axes around the site (du to the right, dv toward the camera); y is above the pad.
 const sand=mat('#d3b27c'),hexPad=new T.CylinderGeometry(1,1,1,6).rotateY(Math.PI/6),coneSite=new T.ConeGeometry(.5,1,6);
 const siteY=siteAt.map(({x,z},i)=>Math.max(stops[i].y,...tiles.filter(t=>Math.hypot(t.x-x,t.z-z)<SITE[i][2]+.3).map(t=>t.height)));
 function onSite(i){const c=siteAt[i],at=(du,dv)=>[c.x+du*R0[0]+dv*N0[0],c.z+du*R0[1]+dv*N0[1]];on(i,'mundo'+(i+1),siteY[i]);landmarks['mundo'+(i+1)]=[c.x,c.z];
  return {at,box(du,dv,y,sx,sy,sz,m,rz=0){const [x,z]=at(du,dv);part(box,m,x,.35+y,z,sx,sy,sz,A0,rz);},geo(g,du,dv,y,sx,sy,sz,m){const [x,z]=at(du,dv);part(g,m,x,.35+y,z,sx,sy,sz,A0);},
   // Two birds perch on each place ([du, dv, y, turn]).
   perch(a,b){for(const [du,dv,y,turn] of [a,b]){const [x,z]=at(du,dv);perch[i].push([x,siteY[i]+y+.01,z,A0+turn]);}}};}
 function canteiro(i){const S=onSite(i),r=SITE[i][2],f=i%2?1:-1,{coral,ivory,ink,wood,plank,sun}=palette;
  S.geo(hexPad,0,0,-.14,r,.3,r,sand);
  // Barriers along the front, striped; the gap in the middle is the way in.
  for(const s of [-1,1]){for(let k=0;k<3;k++)S.box(s*(.2+k*.11),r*.72,.2,.11,.07,.035,k%2?ivory:coral);for(const d of [.15,.42])S.box(s*d,r*.72,.1,.03,.2,.03,ink);}
  // A half-built wall with a scaffold in front of it, at the back on one side.
  S.box(-f*.16,-.2,.2,.62,.4,.09,ivory);S.box(-f*.32,-.2,.46,.3,.14,.09,ivory);for(const k of [-.31,.01,.29])S.box(-f*.16+k,-.08,.27,.03,.54,.03,wood);S.box(-f*.16,-.08,.3,.66,.03,.12,plank);
  // The crane: mast, jib turned over the site, counterweight, cable and hook. Two birds sit on the jib.
  // In world 7, on the high point, it is lower, so "Ver a trilha toda" keeps it whole (QA M2 of Lote 5.8).
  const mx=f*.32,my=-.12,ch=i===6?.76:1;S.box(mx,my,ch/2,.07,ch,.07,sun);S.box(mx,my,.04,.24,.08,.24,ink);S.box(mx-f*.2,my,ch-.04,.72,.05,.06,sun);S.box(mx+f*.2,my,ch-.1,.12,.1,.09,ink);S.box(mx-f*.42,my,ch-.24,.012,.36,.012,ink);S.box(mx-f*.42,my,ch-.43,.07,.05,.05,coral);
  S.perch([mx-f*.1,my,ch-.01,0],[mx-f*.32,my,ch-.01,Math.PI]);
  // Pile of planks and a traffic cone by the entrance.
  for(const [k,y] of [[0,.05],[1,.05],[.5,.1]])S.box(-f*.1+k*.13,.2,y,.12,.05,.34,plank);S.geo(coneSite,f*.36,.24,.09,.09,.18,.09,coral);S.box(f*.36,.24,.012,.13,.024,.13,ivory);
  // The sign of the site: a board on two posts, with a warning square and two lines of "text".
  const bx=-f*.4,by=.3;for(const d of [-.13,.13])S.box(bx+d,by,.2,.03,.4,.03,wood);S.box(bx,by,.34,.36,.24,.03,ivory);S.box(bx,by+.018,.44,.36,.03,.012,sun);S.box(bx-.1,by+.02,.32,.09,.09,.012,coral);for(const y of [.35,.3])S.box(bx+.06,by+.02,y,.14,.02,.012,ink);
  return {S,f,bx,by};}
 for(let i=1;i<7;i++){const {S,f,bx,by}=canteiro(i),{sun,coral,ink}=palette;
  // World 4: two notes pinned by the top edge of the sign flutter in the wind.
  if(i===3)for(const [dx,top,h,m] of [[-.09,.45,.1,sun],[.07,.44,.08,coral]]){const y0=.35+top+LIFT;SWAY=(vx,vy)=>Math.max(0,Math.min(1,(y0-vy)/h));S.box(bx+dx,by+.03,top-h/2,.1,h,.012,m);SWAY=0;}
  // World 5: the post of the pinwheel, in front of the wall.
  if(i===4){const [x,z]=S.at(-.52,.02);beam(x,.35+.45,z,.03,.9,.03,ink);pinAt=[x+N0[0]*.03,.35+.9+LIFT,z+N0[1]*.03];}
  // World 6: a tarp over the materials (the cloth ripples, the higher the freer) and two lanterns on posts.
  if(i===5){const y0=.3+LIFT;SWAY=(vx,vy)=>Math.max(0,Math.min(1,(vy-y0)/.4))*.7;const [x,z]=S.at(f*.02,.16);part(prism,sun,x,.35+.14,z,.7,.5,.7,A0+.4,Math.PI/2);SWAY=0;
   for(const du of [-.5,.5]){const [x2,z2]=S.at(du,-.05);beam(x2,.35+.25,z2,.03,.5,.03,ink);lanterns.push([x2,.35+.52+LIFT,z2]);}}}
 // World 1: the miniature of the water park, in its own place beside the first stop. Under works and finished share the pad, the frame of
 // the pool and the gate; each state is one instanced box mesh (tinted) and the bridge says which one shows (setBuilt). Finished, it also has
 // the water running (the shader of the river), a flag in the wind and parasols: a few more draw calls, only then.
 const mini={obras:[],pronta:[],cones:[],water:[],flag:null};
 {const S=onSite(0),{ivory,coral,sun}=palette,r=SITE[0][2];S.geo(hexPad,0,0,-.14,r,.3,r,palette.high);S.box(-.04,.1,.012,1.08,.03,.72,ivory);
  for(const [du,dv,sx,sz] of [[-.04,-.17,.86,.06],[-.04,.37,.86,.06],[-.44,.1,.06,.48],[.36,.1,.06,.48]])S.box(du,dv,.05,sx,.05,sz,ivory);
  // The way in, with its arch, stays in both states: from the trail the place reads as a gate.
  for(const s of [-1,1])S.box(.48+s*.13,.42,.2,.05,.4,.05,coral);S.box(.48,.42,.42,.36,.08,.06,sun);
  S.perch([.35,.42,.46,0],[.6,.42,.46,Math.PI]);
  // The tallest piece of the finished state, so "Ver a trilha toda" keeps it whole.
  {const [x,z]=S.at(.08,-.38);markBox.mundo1.push(new T.Box3(new T.Vector3(x-.2,.35+LIFT,z-.2),new T.Vector3(x+.2,.35+LIFT+1.1,z+.2)));}
  const add=(list,du,dv,y,sx,sy,sz,c,tilt=0)=>{const [x,z]=S.at(du,dv);list.push(tilt?[x,.35+y+LIFT,z,sz,sy,sx,0,A0-Math.PI/2,-tilt,c]:[x,.35+y+LIFT,z,sx,sy,sz,0,A0,0,c]);},{coral:CO,sun:SU,ivory:IV,ink:IN,wood:WO,plank:PL,leaf2:LE}=colors;
  // Under works: sand in the empty pool, the tower as scaffolding, planks, barriers and a small crane.
  add(mini.obras,-.04,.1,.03,.82,.03,.44,'#d3b27c');for(const [a,b] of [[-.1,-.5],[.2,-.5],[-.1,-.26],[.2,-.26]])add(mini.obras,a,b,.4,.04,.8,.04,WO);for(const y of [.3,.6,.8])add(mini.obras,.05,-.38,y,.38,.03,.3,PL);
  for(const [a,y] of [[-.22,.09],[-.1,.09],[-.16,.15]])add(mini.obras,a,.1,y,.1,.06,.34,PL);for(const s of [-1,1])for(let k=0;k<3;k++)add(mini.obras,-.3+s*(.1+k*.1),.56,.16,.1,.06,.03,k%2?IV:CO);
  add(mini.obras,-.58,-.3,.5,.05,1,.05,SU);add(mini.obras,-.36,-.3,.96,.56,.05,.05,SU);add(mini.obras,-.16,-.3,.76,.01,.36,.01,IN);add(mini.obras,-.16,-.3,.57,.06,.05,.05,CO);
  // Finished: tower and platform in colour, two chutes into the pool, stairs, loungers and people on the deck and in the water.
  add(mini.pronta,.08,-.38,.4,.2,.8,.2,CO);add(mini.pronta,.08,-.38,.82,.32,.04,.3,IV);add(mini.pronta,.08,-.38,1.02,.36,.03,.34,SU);for(const s of [-1,1])add(mini.pronta,.08+s*.15,-.38,.92,.02,.2,.02,IV);
  add(mini.pronta,-.08,-.02,.46,.13,.03,.86,SU,.68);add(mini.pronta,.2,-.04,.42,.13,.03,.76,IV,.78);for(let k=0;k<5;k++)add(mini.pronta,.3,-.43+k*.0,.12+k*.14,.12,.03,.1,WO);
  for(const a of [-.42,-.24])add(mini.pronta,a,.46,.05,.13,.03,.07,CO);add(mini.pronta,.3,.46,.05,.13,.03,.07,SU);
  for(const [a,b,c,water] of [[-.56,.2,CO,0],[.45,.22,LE,0],[-.3,.05,IN,1],[.05,.28,SU,1]]){if(!water)add(mini.pronta,a,b,.09,.05,.14,.05,c);add(mini.pronta,a,b,water?.09:.2,.06,.06,.06,water?c:'#ffe2c8');}
  add(mini.water,-.04,.1,.05,.8,.02,.42,'#4f9fd0');
  for(const [a,b,c] of [[-.56,-.12,CO],[-.56,.42,SU]]){add(mini.pronta,a,b,.17,.02,.34,.02,IV);add(mini.cones,a,b,.38,.34,.12,.34,c);}
  mini.flag=[...S.at(.08,-.38),siteY[0]+1.02];}
 on(-1);
 // The forest. One tree at most per hexagon, never on the trail, the river banks, a clearing or a landmark; nothing tall
 // between a stop or a guide and the camera (the SVG layer has no occlusion), nor in front of the trail where it would hide it.
 // Lote 5.8: three kinds of tree (round, pine, autumn) mixed in every land, each land with its own mix: round in Mapear, round
 // and pine in Analisar, autumn at the fork of Priorizar, pines in Agir. Bushes where a tree does not grow, low enough to
 // stand in front of the trail. Still no coral crown: Rumo is coral and passes over them. Triangles (the forest is wider, Lote
 // 5.8): trunks have three sides, mostly hidden by the crown, and fewer round trees carry a second, smaller crown.
 const marks=Object.values(landmarks),trunks=[],cones=[],crowns=[],autumn=[],buds=[],rocks=[],bushes=[];
 const CROWN=[[colors.leaf2,colors.leaf],[colors.leaf,colors.leaf2],[colors.leaf2,colors.leaf],[colors.leaf,colors.earth]],FALL=[colors.sun,'#f0a32e','#d98a2b'],BUSH=[colors.leaf2,colors.high,'#5c9a52'];
 const KIND=[[.12,.86],[.4,.9],[.1,.45],[.72,.86]];// per land: pine below the first value of k, autumn above the second, round between
 for(const tile of tiles){
  const {x,z,height:h,d,front,land}=tile;if(h<.2||fromRiver(x,z)<1.3||tile.field||Math.hypot(x-lakeX,z-lakeZ)<1.6)continue;
  const seed=hash(tile.q,tile.r),k=hash(tile.r+7,tile.q-3),bush=()=>bushes.push([x+(k-.5)*.4,h+.12,z+(seed-.5)*.4,.8+.4*k,.6,.8+.4*seed,0,seed*6,0,BUSH[Math.floor(k*2.999)],h]);
  if(d<1.35||marks.some(([mx2,mz2])=>Math.hypot(x-mx2,z-mz2)<1.15)||clearSpots.some(c=>{const dx=x-c.x,dz=z-c.z,q=Math.hypot(dx,dz);return q<1.25||q<2.7&&dx*N0[0]+dz*N0[1]>0;}))continue;
  if(front&&d<3.4){if(seed<.12)rocks.push([x+.1,h+.18,z,.9,.7,1.1,0,seed*6,0]);else if(seed>.68)bush();continue;}
  if(seed>(front?.8:d<2.6?.5:.85)){if(k<.3)rocks.push([x+.1,h+.16,z,.8,.6,1,0,seed*6,0]);else if(k>.55)bush();continue;}
  const jx=(k-.5)*.35,jz=(hash(tile.q*3,tile.r*5)-.5)*.35,tx=x+jx,tz=z+jz,sc=.75+k*.35,[c1,c2]=CROWN[land],pine=k<KIND[land][0],fall=!pine&&k>KIND[land][1];
  trunks.push([tx,h+.4*sc,tz,1,.8*sc,1,0,0,0,0,h]);
  if(pine){cones.push([tx,h+1.05*sc,tz,sc,sc,sc,0,seed*6,0,c1,h]);cones.push([tx,h+1.5*sc,tz,sc*.64,sc*.64,sc*.64,0,seed*6+.3,0,c2,h]);}
  else if(fall){const f=Math.floor(seed*2.999);autumn.push([tx,h+1.1*sc,tz,sc*.95,sc*1.15,sc*.95,0,seed*6,0,FALL[f],h]);buds.push([tx-.2*sc,h+.85*sc,tz+.12,sc*.6,sc*.62,sc*.6,0,seed*6,0,FALL[(f+1)%3],h]);}
  else{crowns.push([tx,h+1.1*sc,tz,sc,sc*1.15,sc,0,seed*6,0,c1,h]);if(k>.5)buds.push([tx+.22*sc,h+.82*sc,tz+.1,sc*.62,sc*.66,sc*.62,0,seed*6,0,c2,h]);}
 }
 // Meadow stones and tiny ivory flowers along the trail keep the route readable.
 for(const p of trail.filter((_,i)=>i%24===0)){if(fromRiver(p.x,p.z)<1.4)continue;const [s,t]=ST(p.x,p.z),[ax,az]=W(s+.2,t+.75),[fx,fz]=W(s-.3,t-.6);rocks.push([ax,tileUnder(ax,az).height+.06,az,.28,.2,.3,0,p.x,0]);part(round,palette.ivory,fx,tileUnder(fx,fz).height+.04,fz,.06,.045,.06);}
 const trunkGeo=new T.CylinderGeometry(.07,.1,1,3,1,true),budGeo=new T.OctahedronGeometry(.62,0),coneGeo=new T.ConeGeometry(.6,1.4,6,1,true),crownGeo=new T.IcosahedronGeometry(.62,0),rockGeo=new T.IcosahedronGeometry(.4,0);
 // Lote 5.9: trees and bushes bend in the wind from their own ground (the trunks have their own material for it).
 const V={vertexColors:true};[trunkGeo,coneGeo,crownGeo,budGeo].forEach(g=>footShade(g));footShade(rockGeo,.6);palette.rock.vertexColors=true;
 windy(instanced('arvores-troncos',trunkGeo,mat(colors.wood,V),trunks),.035);windy(instanced('arvores-copas-pinheiro',coneGeo,mat('#ffffff',V),cones,true),.035);windy(instanced('arvores-copas-redondas',crownGeo,mat('#ffffff',V),crowns,true),.035);windy(instanced('arvores-copas-outono',footShade(new T.DodecahedronGeometry(.6,0)),mat('#ffffff',V),autumn,true),.035);windy(instanced('arvores-copas-menores',budGeo,mat('#ffffff',V),buds,true),.035);instanced('pedras',rockGeo,palette.rock,rocks);
 windy(instanced('arbustos',footShade(new T.IcosahedronGeometry(.3,0)),mat('#ffffff',V),bushes,true),.15);
 // Fences on the edge of the path shelf, in front of the trail: by the lake, by the yellow field and up the climb of Agir.
 // A post every .55 and two rails to the next one on the same step; none near a stop, a guide, the river or the lake.
 const fence=[],arc=curve.getLength(),st=STOP_U[1]-STOP_U[0];
 for(const [u0,u1,off] of [[STOP_U[0]-.3*st,STOP_U[1]-.2*st,1.25],[STOP_U[4]-.6*st,STOP_U[4]+.5*st,1.3],[STOP_U[4]+.6*st,STOP_U[6]+.45*st,1.65]]){let run=[];
  // A run of posts on one step becomes a fence with rails; a lone post (one between a stop and a step) is left out.
  const close=()=>{if(run.length>1)run.forEach((q,k)=>{fence.push([q.x,q.h+.17,q.z,.06,.34,.06,0,0,0]);if(k){const o=run[k-1],dx=q.x-o.x,dz=q.z-o.z;for(const y of [.13,.27])fence.push([(q.x+o.x)/2,q.h+y,(q.z+o.z)/2,Math.hypot(dx,dz),.035,.035,0,Math.atan2(-dz,dx),0]);}});run=[];};
  for(let u=u0;u<=u1;u+=.55/arc){const p=curve.getPointAt(u),t=curve.getTangentAt(u),n=new T.Vector3(-t.z,0,t.x).normalize();if(n.x*N0[0]+n.z*N0[1]<0)n.negate();
   const x=p.x+n.x*off,z=p.z+n.z*off,tile=tileUnder(x,z);
   if(clearSpots.some(c=>Math.hypot(x-c.x,z-c.z)<1.35)||fromRiver(x,z)<1.2||Math.hypot(x-lakeX,z-lakeZ)<1.5||tile.height<.2){close();continue;}
   if(run.length&&Math.abs(run.at(-1).h-tile.height)>=.05)close();run.push({x,z,h:tile.height});}
  close();}
 instanced('cercas',box,palette.wood,fence);
 // Lote 5.8: scenery that only one land has, besides the shared trees, bushes and fences. One InstancedMesh per kind, each
 // keeping its placements in userData.items (Lote 5.9 animates them); `scenery` lists, per land, what it has and where.
 const scenery={mapear:{},analisar:{},priorizar:{},agir:{}},own=(land,name,at,mesh=null)=>{scenery[land][name]={mesh,count:at.length,at:at.map(([x,z])=>[+x.toFixed(2),+z.toFixed(2)])};},xz=items=>items.map(([x,,z])=>[x,z]);
 // Mapear: the bench, the mill, flowers in the clearing and along the meadow, and the lake with reeds on its bank.
 const flowers=[],FLOWER=[colors.ivory,colors.sun,'#ffb4a8'];
 for(const tile of tiles){if(tile.land!==0||tile.u>STOP_U[1]+.85*halfU||tile.height<.2||tile.d<1.1||tile.d>3.8||Math.hypot(tile.x-lakeX,tile.z-lakeZ)<1.6||marks.some(([a,b])=>Math.hypot(tile.x-a,tile.z-b)<.9)||clearSpots.some(c=>Math.hypot(tile.x-c.x,tile.z-c.z)<.8))continue;
  for(let j=0;j<4;j++){const a=hash(tile.q+j,tile.r-j)*6.28,r=.12+.32*hash(tile.r+j,tile.q);const fx=tile.x+Math.cos(a)*r,fz=tile.z+Math.sin(a)*r;if(hash(tile.q*7+j,tile.r)<.5&&nearest(fx,fz).i/600<=STOP_U[1]+.85*halfU)flowers.push([fx,tile.height+.05,fz,1,.7,1,0,a,0,FLOWER[j%3],tile.height]);}}
 for(let i=0;i<7;i++){const a=i/7*Math.PI*2+.4,x=lakeX+Math.cos(a)*.9,z=lakeZ+Math.sin(a)*.9;for(let k=0;k<3;k++)beam(x+k*.06,LAKE_Y+.15+(k%2)*.04,z,.025,.3+(k%2)*.08,.025,palette.high,0,(k-1)*.16);}
 patch(instanced('cenario-lago',capGeo,mat('#ffffff'),lake,true).material,'water');windy(instanced('cenario-flores',new T.OctahedronGeometry(.1,0),mat('#ffffff'),flowers,true),.5,'bloom');
 own('mapear','miniatura do parque',[landmarks.mundo1]);own('mapear','canteiro do mundo 2',[landmarks.mundo2]);own('mapear','moinho',[landmarks.moinho]);own('mapear','flores',xz(flowers),'cenario-flores');own('mapear','lago',xz(lake),'cenario-lago');
 // Analisar: the bridge, the notice board and stones in the river on both sides of the bridge.
 const pebbles=[];for(let i=0;i<30;i++){const d=-3.4+i*.24,side=(hash(i,3)-.5)*.7;if(Math.abs(d)<1.3||hash(3,i)<.3)continue;pebbles.push([BR.x+RV[0]*d+RN[0]*side,.15,BR.z+RV[1]*d+RN[1]*side,.5+.4*hash(i,5),.3,.45+.4*hash(5,i),0,i,0,hash(i,i)<.5?colors.rock:'#c8c2a4']);}
 instanced('cenario-seixos',rockGeo,mat('#ffffff',{vertexColors:true}),pebbles,true);
 own('analisar','ponte',[landmarks.ponte]);own('analisar','canteiros',[landmarks.mundo3,landmarks.mundo4]);own('analisar','pedras do rio',xz(pebbles),'cenario-seixos');
 // Priorizar: the site of world 5, with the pinwheel, and the yellow field in front of it.
 const stalks=[];for(const tile of field)for(let j=0;j<9;j++){const a=hash(tile.q+j*3,tile.r)*6.28,r=.08+.4*hash(tile.r,tile.q+j);stalks.push([tile.x+Math.cos(a)*r,tile.height+.14,tile.z+Math.sin(a)*r,1,.8+.5*hash(j,tile.q),1,0,a,0,j%3?colors.sun:'#e8a93a',tile.height]);}
 windy(instanced('cenario-campo',new T.ConeGeometry(.06,.3,4,1,true),mat('#ffffff'),stalks,true),.25);
 own('priorizar','canteiro do mundo 5',[landmarks.mundo5]);own('priorizar','cata-vento',[[pinAt[0],pinAt[2]]]);own('priorizar','campo amarelo',field.map(t=>[t.x,t.z]),'cenario-campo');
 // Agir: the sites of the worlds 6 and 7, with the lanterns, and the hills down in front of the climb.
 own('agir','canteiro do mundo 6',[landmarks.mundo6]);own('agir','canteiro do mundo 7',[landmarks.mundo7]);own('agir','lanternas',lanterns.map(([x,,z])=>[x,z]));own('agir','colinas',tiles.filter(t=>t.u>STOP_U[4]+halfU+.01&&t.front&&t.d>=1.9&&t.d<5&&t.height>.44).map(t=>[t.x,t.z]));
 // Reeds stand in the shallow water by both banks, away from the bridge; a few sway.
 for(let i=0;i<40;i++){const d=-8+i*.4,side=i%2?-.72:.66,x=BR.x+RV[0]*d+RN[0]*side,z=BR.z+RV[1]*d+RN[1]*side;if(Math.abs(d)<1.4)continue;for(let k=0;k<3;k++)beam(x+k*.06,.28+(k%2)*.04,z,.025,.3+(k%2)*.08,.025,palette.high,0,(k-1)*.16);}
 const stream=new T.Group();stream.name='corrente';const streamBase=new T.Group();streamBase.position.set(BR.x,0,BR.z);streamBase.rotation.y=Math.atan2(RV[0],RV[1]);streamBase.add(stream);scene.add(streamBase);
 const currents=new T.InstancedMesh(box,palette.ivory,20);for(let i=0;i<20;i++){dummy.position.set((i%3-1)*.16,.163,-8+i*.82);dummy.scale.set(.09,.009,.18);dummy.rotation.set(0,0,0);dummy.updateMatrix();currents.setMatrixAt(i,dummy.matrix);}stream.add(currents);
 // Static parts become one mesh per material (Lote 5.4: draw calls); the reeds keep their instances to sway.
 // Lote 5.9: each merged mesh keeps a cloth weight per vertex (aSway, from SWAY) on its own copy of the material, so the
 // shared palette stays still elsewhere; the reeds bend in the shader like the grass (they used to sway on the CPU).
 let reeds;const flat=new Map(),byMat=new Map();
 for(const b of batches.values()){
  if(b.g===box&&b.m===palette.high){reeds=new T.InstancedMesh(box.clone(),b.m,b.items.length);reeds.name='juncos';reeds.userData.items=b.items;b.items.forEach((it,i)=>reeds.setMatrixAt(i,matrixOf(it)));windy(reeds,.2,'wind',it=>it[1]-it[4]/2);scene.add(reeds);continue;}
  if(!flat.has(b.g))flat.set(b.g,b.g.index?b.g.toNonIndexed():b.g);
  const pos=flat.get(b.g).attributes.position;if(!byMat.has(b.m))byMat.set(b.m,[]);for(const it of b.items)byMat.get(b.m).push([pos.clone().applyMatrix4(matrixOf(it)).array,it[9],it[10]]);
 }
 // Adendo: each piece darkens toward its foot, measured from the ground of its landmark or from its own lowest point.
 for(const [m,arrays] of byMat){const n=arrays.reduce((n,[a])=>n+a.length,0),all=new Float32Array(n),sway=new Float32Array(n/3),shade=new Float32Array(n);let o=0;
  for(const [a,f,g0] of arrays){all.set(a,o);let lo=1e9;for(let k=1;k<a.length;k+=3)lo=Math.min(lo,a[k]);const base=Math.max(lo,g0??-1e9);
   for(let k=0;k<a.length;k+=3){shade.fill(.62+.38*T.MathUtils.smoothstep(a[k+1],base,base+.32),o+k,o+k+3);if(f)sway[(o+k)/3]=f(a[k],a[k+1],a[k+2]);}o+=a.length;}
  const g=new T.BufferGeometry(),mm=patch(m.clone(),'sway',.05);mm.vertexColors=true;g.setAttribute('position',new T.BufferAttribute(all,3));g.setAttribute('aSway',new T.BufferAttribute(sway,1));g.setAttribute('color',new T.BufferAttribute(shade,3));g.computeVertexNormals();scene.add(new T.Mesh(g,mm));}
 // Lote 6.2: the two states of the miniature, its water and its parasols, and the flag on the tower (below, with the flags of the stops).
 const miniMesh={obras:instanced('mini-obras',box,mat('#ffffff'),mini.obras,true),pronta:instanced('mini-pronta',box,mat('#ffffff'),mini.pronta,true),cones:instanced('mini-guarda-sois',coneSite,mat('#ffffff'),mini.cones,true),water:instanced('mini-agua',box,patch(new T.MeshLambertMaterial({color:'#ffffff',flatShading:true}),'water'),mini.water,true)};
 // Bino and Téo stand on the ground of their hexagon; Pipa flies a little above the water.
 for(const [n,g] of Object.entries(guides)){const t=tiles.reduce((a,b)=>Math.hypot(b.x-g.x,b.z-g.z)<Math.hypot(a.x-g.x,a.z-g.z)?b:a);g.y=n==='pipa'?Math.max(stops[2].y+PIPA_Y,t.height):t.height;}
 // Stop markers: plaza, zone ring, pole, flag, lantern and a badge whose glyph names the state.
 // Lote 5.4: one InstancedMesh per part and one quad set for the seven badges (6 draw calls instead of 42).
 // Each stop keeps plain Object3D handles (ring, flag, lamp, badge...) that the code and the tests move as before.
 const plazaGeo=new T.CylinderGeometry(.38,.38,.03,8),ringGeo=new T.TorusGeometry(.38,.045,5,24),poleGeo=new T.CylinderGeometry(.025,.025,.85,5),flagGeo=new T.PlaneGeometry(.3,.19,8,1),lampGeo=new T.SphereGeometry(.08,8,6),lampMat=mat(colors.sun,{emissive:colors.sun,emissiveIntensity:.9});
 const PARTS={plaza:[plazaGeo,palette.path],ring:[ringGeo,mat('#ffffff')],pole:[poleGeo,palette.wood],flag:[flagGeo,patch(new T.MeshLambertMaterial({color:'#ffffff',flatShading:true,side:T.DoubleSide}),'flag')],lamp:[lampGeo,lampMat]};
 const miniFlag=new T.InstancedMesh(flagGeo,PARTS.flag[1],1);miniFlag.name='mini-bandeira';miniFlag.frustumCulled=false;miniFlag.setMatrixAt(0,matrixOf([mini.flag[0]+R0[0]*.16,mini.flag[2],mini.flag[1]+R0[1]*.16,.9,.9,.9,0,A0,0]));miniFlag.setColorAt(0,new T.Color(colors.leaf2));scene.add(miniFlag);
 const tint=new T.Color('#ffffff'),markers=Object.fromEntries(Object.entries(PARTS).map(([k,[g,m]])=>{const mesh=new T.InstancedMesh(g,m,stops.length+(k==='lamp'?lanterns.length:0));mesh.name='paradas-'+k;mesh.frustumCulled=false;if(k==='ring'||k==='flag')stops.forEach((_,i)=>mesh.setColorAt(i,tint));scene.add(mesh);return [k,mesh];}));
 const atlas=document.createElement('canvas');atlas.width=128*stops.length;atlas.height=128;const atlasTexture=new T.CanvasTexture(atlas);atlasTexture.colorSpace=T.SRGBColorSpace;
 const badgeGeo=new T.BufferGeometry(),badgePos=new Float32Array(stops.length*12),uv=[],quads=[];
 stops.forEach((_,i)=>{const a=i/stops.length,b=(i+1)/stops.length;uv.push(a,0,b,0,b,1,a,1);quads.push(i*4,i*4+1,i*4+2,i*4,i*4+2,i*4+3);});
 badgeGeo.setAttribute('position',new T.BufferAttribute(badgePos,3));badgeGeo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));badgeGeo.setIndex(quads);
 const badges=new T.Mesh(badgeGeo,new T.MeshBasicMaterial({map:atlasTexture,transparent:true,depthTest:false,toneMapped:false}));badges.layers.set(1);camera.layers.enable(1);badges.name='paradas-selos';badges.renderOrder=2;badges.frustumCulled=false;scene.add(badges);
 const flags=[],hidden=new T.Matrix4().makeScale(0,0,0);
 for(const stop of stops){
  const g=stop.group=new T.Group();g.position.set(stop.x,stop.y-.35,stop.z);// handles keep the heights of the level trail
  const handle=(k,x,y,z)=>{const o=stop[k]=new T.Object3D();o.position.set(x,y,z);g.add(o);return o;};
  const px=stop.side.x*.6,pz=stop.side.z*.6;
  handle('plaza',0,.362,0);handle('ring',0,.39,0).rotation.x=Math.PI/2;handle('pole',px,.78,pz);flags.push(handle('flag',px+.16,1.12,pz));
  handle('lamp',px,1.24,pz).visible=false;handle('badge',px,1.5,pz).scale.setScalar(.5);
  stop.markers=[stop.badge,stop.pole,stop.flag,stop.lamp];
  const hit=new T.Mesh(new T.CylinderGeometry(.5,.5,1.4,8),new T.MeshBasicMaterial({visible:false}));hit.userData.stop=stop.index;hit.position.set(stop.x,stop.y+.55,stop.z);scene.add(hit);targets.push(hit);
 }
 // Lote 6.2: a tap on the place of a world also picks its stop. They come after the seven targets of the stops, which keep their index.
 for(const stop of stops){const place=targets[stop.index].clone(),k=SITE[stop.index][2]/.5;place.scale.set(k,1,k);place.position.set(siteAt[stop.index].x,siteY[stop.index]+.55,siteAt[stop.index].z);scene.add(place);targets.push(place);}
 // Lote 5.9 (adendo): soft blob shadows ground the trees, bushes and landmarks on the hexagons (three.js manual, "Shadows": a
 // plane with a radial texture, no depth write), and a false glow lights the lanterns, the saved stops and the campfire (additive
 // quads turned to the camera in the vertex shader). One InstancedMesh each; the textures are drawn on a canvas, 0 bytes.
 const blobItems=[...trunks.map(t=>[t[0],t[10]+.014,t[2],1.15*t[4]/.8,1,t[4]/.8]),...bushes.map(b=>[b[0],b[10]+.014,b[2],.6*b[3],1,.6*b[5]]),
  [landmarks.moinho[0],stops[1].y+.014,landmarks.moinho[1],1.7,1,1.45]];
 const blobs=new T.InstancedMesh(new T.PlaneGeometry(1,1).rotateX(-Math.PI/2),new T.MeshBasicMaterial({map:radial(),color:'#14301f',transparent:true,opacity:.34,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:false}),blobItems.length);
 blobs.name='sombras';blobItems.forEach((it,i)=>blobs.setMatrixAt(i,matrixOf([...it.slice(0,3),it[3],1,it[5],0,0,0])));blobs.userData.items=blobItems;scene.add(blobs);
 const glowMat=new T.MeshBasicMaterial({map:radial(),color:'#ffc83d',transparent:true,opacity:.32,blending:T.AdditiveBlending,depthWrite:false,toneMapped:false});
 glowMat.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace('#include <project_vertex>','vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;');};glowMat.customProgramCacheKey=()=>'brilho';
 // Glows: [0,2) lanterns of world 6, [2,9) the lamp of each stop (shown when its lamp is lit, see syncStops).
 const glow=new T.InstancedMesh(new T.PlaneGeometry(1,1),glowMat,2+stops.length);glow.name='brilhos';glow.frustumCulled=false;scene.add(glow);
 lanterns.forEach((p,i)=>glow.setMatrixAt(i,matrixOf([...p,.34,.34,.34,0,0,0])));stops.forEach((_,i)=>glow.setMatrixAt(2+i,hidden));
 // Lote 5.9: living things. Critters share one winged shape (body along +x, wings along ±z; the shader flaps the tips):
 // butterflies over the flowers of Mapear, ducks on the lake, a fish that jumps in the river now and then, a flock that crosses
 // the sky and two birds perched on the landmark of each stop, which fly off and come back when a phase passage brings Rumo
 // there. Particles share one low ball: smoke of the chimney, leaves and foam down the river, and
 // the clouds. Only these are written on the CPU (state().metrics.maxLife counts the instances of a frame, 60 at
 // most); wind, water, cloth, flags and wings move in the shaders.
 // Critters: [0,5) butterflies, [5,8) ducks, 8 the fish, [9,16) the flock, [16,30) perched birds, two per stop in stop order.
 // Particles: [0,5) chimney smoke, [5,11) leaves, [11,14) foam; clouds: three of two puffs. Lote 6.2: the campfire left with the camp.
 lanterns.forEach((p,i)=>{dummy.position.set(...p);dummy.scale.set(1,1,1);dummy.rotation.set(0,0,0);dummy.updateMatrix();markers.lamp.setMatrixAt(stops.length+i,dummy.matrix);});
 const wingGeo=new T.BufferGeometry();{const N=[.5,0,0],B=[-.5,0,0],P=[0,.14,0],D=[0,-.1,0],L=[0,0,.12],R=[0,0,-.12],v=[N,P,L,N,R,P,N,L,D,N,D,R,B,L,P,B,P,R,B,D,L,B,R,D],w=v.map(()=>0);
  for(const s of [1,-1]){v.push([.18,.04,.06*s],[-.22,.04,.06*s],[-.04,.06,.62*s]);w.push(0,0,1);}
  wingGeo.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));wingGeo.setAttribute('aWing',new T.Float32BufferAttribute(w,1));}
 const lifeMat=(mode,extra={})=>patch(new T.MeshLambertMaterial({color:'#ffffff',flatShading:true,...extra}),mode),PERCHED=16,perches=perch.flat();
 const critters=new T.InstancedMesh(wingGeo,lifeMat('critter',{side:T.DoubleSide}),PERCHED+perches.length),flap=new Float32Array(critters.count*3);
 critters.name='bichos';critters.frustumCulled=false;wingGeo.setAttribute('aFly',new T.InstancedBufferAttribute(flap,3));scene.add(critters);
 const puffGeo=new T.IcosahedronGeometry(.5,0),puffs=new T.InstancedMesh(puffGeo,lifeMat('particle'),14),glows=new Float32Array(14);
 puffs.name='particulas';puffs.frustumCulled=false;puffGeo.setAttribute('aGlow',new T.InstancedBufferAttribute(glows,1));scene.add(puffs);
 const clouds=new T.InstancedMesh(puffGeo,lifeMat('cloud',{color:'#f7f9fb',transparent:true,opacity:.62,depthWrite:false}),6);clouds.name='nuvens';clouds.frustumCulled=false;scene.add(clouds);
 for(let i=0;i<critters.count;i++){critters.setColorAt(i,new T.Color(i<5?[colors.sun,'#ffb4a8',colors.ivory,'#ffb4a8',colors.sun][i]:i<8?(i<7?colors.ivory:'#e9dfc3'):i===8?'#a9c2d6':i<PERCHED||i%2?colors.ink:'#4a5a7d'));
  flap.set(i<5?[1,i*1.3,12]:i>8&&i<PERCHED?[1,i*.8,9]:[0,i*.9,10],i*3);}
 for(let i=0;i<14;i++)puffs.setColorAt(i,new T.Color(i<5?'#f4f1ea':i<11?[colors.leaf2,colors.sun,'#d98a2b'][i%3]:colors.ivory));
 // The pinwheel on the post of world 5: four blades facing the camera, turning with the wind and faster in a gust.
 const pinwheel=new T.Group(),blades=new T.Mesh(new T.BufferGeometry(),mat('#ffffff',{vertexColors:true,side:T.DoubleSide}));pinwheel.position.set(...pinAt);pinwheel.rotation.y=A0;blades.name='cata-vento';pinwheel.add(blades);scene.add(pinwheel);
 {const v=[],c=[];[colors.coral,colors.sun,colors.leaf2,colors.ivory].forEach((col,k)=>{const a=k*Math.PI/2,cc=new T.Color(col);v.push(0,0,0,Math.cos(a)*.17,Math.sin(a)*.17,0,Math.cos(a+1.2)*.09,Math.sin(a+1.2)*.09,.03);for(let j=0;j<3;j++)c.push(cc.r,cc.g,cc.b);});
  blades.geometry.setAttribute('position',new T.Float32BufferAttribute(v,3));blades.geometry.setAttribute('color',new T.Float32BufferAttribute(c,3));}
 const bfAt=[0,1,2,3,4].map(i=>flowers.length?flowers[Math.floor((i+.5)/5*flowers.length)]:[stops[0].x,stops[0].y,stops[0].z]),birdAge=perches.map(()=>null);
 let lifeT=0,live=0,calm=false,calmNow=1,wheelSpeed=0,pinAngle=0,gustAge=9,bloomAge=9,flock=-1,nextFlock=4,fishOn=false,fishAge=null,fishN=0,nextFish=5,lifeCount=0,flapDirty=false;
 const body=new T.Object3D();body.rotation.order='YZX';// roll first (the fish turns its wings into fins), then pitch, then heading
 const put=(mesh,i,x,y,z,sx,sy,sz,ry=0,rz=0,rx=0)=>{body.position.set(x,y,z);body.scale.set(sx,sy,sz);body.rotation.set(rx,ry,rz);body.updateMatrix();mesh.setMatrixAt(i,body.matrix);lifeCount++;};
 const frac=v=>v-Math.floor(v),face=(dx,dz)=>Math.atan2(-dz,dx),hide=(mesh,i)=>put(mesh,i,0,-9,0,0,0,0);
 function perchBird(i){const [x,y,z,ry]=perches[i];put(critters,PERCHED+i,x,y,z,.17,.17,.07,ry);flap[(PERCHED+i)*3]=0;flapDirty=true;}
 // A bird of a stop flies a short loop over 2.6 s, sideways and a little up, and lands where it was. QA A3: the loop of 4.6 s up
 // and away from the camera left the frame of a short map; this one stays beside the stop.
 const FLIGHT=2.6,loop=(i,q)=>{const [px,py,pz]=perches[i],o=Math.sin(Math.PI*q),w=Math.sin(2*Math.PI*q)*(i%2?.9:-.9);return [px+N0[0]*.35*o+R0[0]*w,py+.6*o,pz+N0[1]*.35*o+R0[1]*w];};
 function updateLife(){lifeCount=0;const t=lifeT;
  for(let i=0;i<5;i++){const [ax,ay,az]=bfAt[i],p=t+i*7.3;put(critters,i,ax+.38*Math.sin(p*.7+i)+.12*Math.sin(p*1.9+i*2),ay+.3+.1*Math.sin(p*1.3+i),az+.3*Math.cos(p*.53+i*1.7),.07,.1,.22,face(.27*Math.cos(p*.7+i)+.23*Math.cos(p*1.9+i*2),-.16*Math.sin(p*.53+i*1.7)));}
  for(let i=0;i<3;i++){const a=t*.2+i*2.1,r=.35+.15*i;put(critters,5+i,lakeX+Math.cos(a)*r,LAKE_Y+.04+.012*Math.sin(t*1.7+i),lakeZ+Math.sin(a)*r,.22,.26,.1,face(-Math.sin(a),Math.cos(a)));}
  // The fish jumps across the river now and then, at two places away from the bridge; between jumps it is hidden. QA A5: a jump
  // runs 0.9 s in real time and starts only before the ambient slows down, so it never stops in the air.
  {if(fishAge!==null&&fishAge>=.9){hide(critters,8);fishAge=null;fishOn=false;}if(fishAge!==null){const k=fishAge/.9,d=fishN%2?-2.6:3.1,c=-.3+.6*k;put(critters,8,BR.x+RV[0]*d+RN[0]*c,.12+.5*Math.sin(Math.PI*k),BR.z+RV[1]*d+RN[1]*c,.2,.16,.12,face(RN[0],RN[1]),Math.atan2(Math.PI*Math.cos(Math.PI*k),.6),Math.PI/2);fishOn=true;}}
  // The flock: seven birds in a V crossing the sky from left to right over 8 s, above the trail and a little behind it, in real time
  // (QA A5: in the calm it took 32 s and stopped in the sky).
  if(flock>=0){const q=flock/8;if(q>=1){for(let j=0;j<7;j++)hide(critters,9+j);flock=-1;}
   else for(let j=0;j<7;j++){const r=Math.ceil(j/2),s=-26+52*q-r*.45,[x,z]=W(s,s*AX[1]/AX[0]-1.4+(j%2?1:-1)*r*.42);put(critters,9+j,x,4.3+.15*Math.sin(q*9+j),z,.22,.2,.22,A0);}}
  birdAge.forEach((a,i)=>{if(a===null||a<0)return;const q=a/FLIGHT;if(q>=1){birdAge[i]=null;perchBird(i);return;}const p=loop(i,q),p2=loop(i,Math.min(1,q+.02));
   put(critters,PERCHED+i,p[0],p[1],p[2],.17,.17,.17,q>.97?perches[i][3]:face(p2[0]-p[0],p2[2]-p[2]));const on=q<.9?1:0;if(flap[(PERCHED+i)*3]!==on){flap[(PERCHED+i)*3]=on;flapDirty=true;}});
  // Smoke grows and shrinks (no fade, no pop), leaning with the wind.
  for(let i=0;i<5;i++){const a=frac(t*.3+i/5),s=.2*Math.pow(Math.sin(Math.PI*a),.8)*(.6+a);put(puffs,i,chimney[0]+.85*a*.5+.05*Math.sin(a*7+i),chimney[1]+a*1.1,chimney[2]-.52*a*.5,s,s,s,i);}
  for(let i=0;i<9;i++){const d=-7+frac(t*.05+i*.137)*14,side=(hash(i,9)-.5)*.75,f=Math.min(1,(7-Math.abs(d))/1.5),leaf=i<6;put(puffs,5+i,BR.x+RV[0]*d+RN[0]*side,.145,BR.z+RV[1]*d+RN[1]*side,(leaf?.13:.16)*f,(leaf?.03:.012)*f,(leaf?.08:.12)*f,t*.6+i);}
  // Clouds drift left to right just behind the trail, 6.7 above it: on screen they pass over the far forest, behind the landmarks
  // and the guides (QA A1, A2: 2.6 above, they crossed the mill, Pipa and Bino; 5.4 above, the head of Bino), and their shadows (shader) fall straight under
  // them, over the edge of the trail.
  for(let c=0;c<3;c++){const s=frac((c*16+t*.18)/48)*48-24,[x,z]=W(s,s*AX[1]/AX[0]+[-1,-.4,-1.4][c]),y=7+.2*c+rise(Math.max(0,Math.min(6,s/DX+3))),k=.8+.15*c;
   put(clouds,c*2,x,y,z,2*k,.9*k,1.4*k,c);put(clouds,c*2+1,x+R0[0]*.85*k,y-.15,z+R0[1]*.85*k,1.2*k,.6*k,k,c+1);U.uCloud.value[c].set(x,z,1.25*k);}
  critters.instanceMatrix.needsUpdate=true;puffs.instanceMatrix.needsUpdate=true;clouds.instanceMatrix.needsUpdate=true;if(flapDirty){critters.geometry.attributes.aFly.needsUpdate=true;flapDirty=false;}
  return lifeCount;}
 // One step of the ambient (adt: real seconds while it runs). live eases to 0 in its last 2 s, so everything slows to a stop
 // instead of freezing, and back to 1 at the next touch; the calm (a text field in focus) eases the wind to 15% and the
 // critters to a quarter of their pace. The mill wheel speeds up and slows down the same way.
 function lifeStep(adt){const k=1-Math.exp(-adt/.45);live+=((ambient<10?1:0)-live)*k;calmNow+=((calm?.15:1)-calmNow)*k;
  const pace=live*(.25+.75*(calmNow-.15)/.85);lifeT+=adt*pace;U.uT.value=lifeT;U.uAmp.value=live*calmNow;
  gustAge+=adt;bloomAge+=adt;U.uGust.value.z=gustAge<4?1.6*Math.exp(-gustAge*1.3):0;U.uGust.value.w=gustAge;U.uBloom.value.z=bloomAge<3.5?1:0;U.uBloom.value.w=bloomAge;
  birdAge.forEach((a,i)=>{if(a!==null)birdAge[i]=a+adt;});if(flock>=0)flock+=adt;else if(ambient<2&&!calm&&lifeT>=nextFlock){flock=0;nextFlock=lifeT+26;}
  if(fishAge!==null)fishAge+=adt;else if(ambient<9&&lifeT>=nextFish){fishAge=0;fishN++;nextFish=lifeT+6;}
  wheelSpeed+=((ambient<9?.7:0)-wheelSpeed)*(1-Math.exp(-adt/.8));wheel.rotation.x+=wheelSpeed*adt;stream.position.z=(lifeT*.18)%.82;
  const g=U.uGust.value;pinAngle+=adt*(U.uAmp.value*1.6+4*g.z*Math.exp(-((pinAt[0]-g.x)**2+(pinAt[2]-g.y)**2)/4));blades.rotation.z=pinAngle;
  metrics.maxLife=Math.max(metrics.maxLife,updateLife());}
 // A phase passage wakes the place where Rumo arrives: the birds of the new stop fly off and come back, and leaving the Clareira the flowers of Mapear open in a wave from it. It all starts as Rumo sets off, while the camera still
 // holds the stop he leaves (QA A3: at half the walk it had left). A tap on a stop sends a gust there.
 function wake(to,from){if(!motion||!running())return;birdAge[to*2]=0;birdAge[to*2+1]=-.15;if(from===0){bloomAge=0;U.uBloom.value.set(stops[from].x,stops[from].z,1,0);}}
 function gust(i){const s=stops[i];if(!s||!motion||!running())return;gustAge=0;U.uGust.value.set(s.x,s.z,1.6,0);ambient=0;schedule();}
 // Lote 5.11: when a phase ends, one burst of confetti over Rumo at the new stop: 80 flat pieces in the colors of the kit for 1 s,
 // thrown up and falling with drag, no loop, created and disposed in each passage (one draw call while it lasts). Unlit, with the
 // same color on both faces, a piece that turns never flashes; it turns less than once a second and shrinks in the last 0.25 s.
 // The plane and the material stay (the shader is compiled once, at load: compiling it on arrival cost a 48 ms frame on a slow
 // phone); each burst creates its own instances and disposes of them.
 const BURST=1,PIECES=80,KIT=[colors.coral,colors.sun,colors.leaf2,'#ffb4a8',colors.ivory],burstGeo=new T.PlaneGeometry(.18,.12),burstMat=new T.MeshBasicMaterial({side:T.DoubleSide,toneMapped:false,fog:false});let burst=null;
 function confetti(i){endBurst();const s=stops[i];if(!s||!motion||!running())return false;
  const mesh=new T.InstancedMesh(burstGeo,burstMat,PIECES),col=new T.Color();mesh.name='confete';mesh.frustumCulled=false;
  const p=Array.from({length:PIECES},(_,k)=>{mesh.setColorAt(k,col.set(KIT[k%KIT.length]));const a=k*2.39996,r=.35+.65*hash(k,1);return [Math.cos(a)*r*3.6,1.6+1.6*hash(k,2),Math.sin(a)*r*3.6,hash(k,3)*6,1.6+3.4*hash(k,4)];});
  // QA M2: it bursts just above the "you are here" label and opens wide, then falls beside Rumo; from his head, the drawing and the
  // label (SVG, over the canvas) hid every piece on a phone.
  burst={mesh,p,t:0,at:[s.x,s.y+2.3,s.z]};stepBurst(0);scene.add(mesh);schedule();return true;}
 function stepBurst(dt){const b=burst;b.t+=dt;if(b.t>=BURST){endBurst();return;}const t=b.t,[x,y,z]=b.at,drag=(1-Math.exp(-2.4*t))/2.4,k=Math.min(1,(BURST-t)/.25);
  b.p.forEach(([vx,vy,vz,ph,w],j)=>{body.position.set(x+vx*drag,y+vy*drag-2.2*t*t,z+vz*drag);body.scale.setScalar(k);body.rotation.set(ph+w*t,ph*.7+w*.6*t,w*.3*t);body.updateMatrix();b.mesh.setMatrixAt(j,body.matrix);});
  b.mesh.instanceMatrix.needsUpdate=true;metrics.maxConfetti=Math.max(metrics.maxConfetti,b.p.length);}
 function endBurst(){if(!burst)return;scene.remove(burst.mesh);burst.mesh.dispose();burst=null;}
 // Pause, reduced motion or leaving the view: birds back on their perch, the fish and the flock away, no gust, flare or bloom.
 function settleLife(){birdAge.forEach((a,i)=>{if(a!==null){birdAge[i]=null;perchBird(i);}});gustAge=bloomAge=9;U.uGust.value.z=0;U.uBloom.value.z=0;flock=-1;fishAge=null;updateLife();hide(critters,8);fishOn=false;for(let j=0;j<7;j++)hide(critters,9+j);critters.instanceMatrix.needsUpdate=true;}
 perches.forEach((_,i)=>perchBird(i));for(let j=8;j<PERCHED;j++)hide(critters,j);updateLife();
 // Lote 5.9 (adendo): tilt-shift on a desktop strip (900 px or more), the miniature look of a diorama. The scene is drawn with the
 // antialias of the canvas and copied to a texture; one quad blurs only the bands at the top and the bottom (12 taps on a spiral,
 // the radius growing away from the middle) and the badges are drawn after it, so their numbers stay sharp. No EffectComposer: one
 // copy and one quad instead of three full-screen passes.
 const tilt={scene:new T.Scene(),cam:new T.Camera(),tex:null,on:false,off:false,u:{tMap:{value:null},uPx:{value:new T.Vector2()},uR:{value:0},uB:{value:.28}}};
 {const q=new T.Mesh(new T.PlaneGeometry(2,2),new T.ShaderMaterial({uniforms:tilt.u,depthTest:false,depthWrite:false,blending:T.NoBlending,toneMapped:false,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:'uniform sampler2D tMap;uniform vec2 uPx;uniform float uR,uB;varying vec2 vUv;void main(){float r=uR*smoothstep(uB,.5,abs(vUv.y-.52));if(r<.35)discard;vec4 c=vec4(0.);for(int i=0;i<12;i++){float a=float(i)*2.39996,s=sqrt((float(i)+.5)/12.);c+=texture2D(tMap,vUv+vec2(cos(a),sin(a))*s*r*uPx);}gl_FragColor=c/12.;}'}));
  q.frustumCulled=false;tilt.scene.add(q);}
 const camRight=new T.Vector3(),camUp=new T.Vector3(),spot=new T.Vector3();
 // Writes the handles into the instances and turns the badges to the camera, like sprites.
 function syncStops(){
  camRight.setFromMatrixColumn(camera.matrixWorld,0);camUp.setFromMatrixColumn(camera.matrixWorld,1);
  for(const s of stops){
   s.group.updateMatrixWorld(true);for(const k in markers)markers[k].setMatrixAt(s.index,s[k].visible?s[k].matrixWorld:hidden);
   const c=s.badge.getWorldPosition(spot),h=s.badge.visible?s.badge.scale.x/2:0;
   [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b],j)=>{for(let k=0;k<3;k++)badgePos[s.index*12+j*3+k]=c.getComponent(k)+(camRight.getComponent(k)*a+camUp.getComponent(k)*b)*h;});
  }
  for(const s of stops)glow.setMatrixAt(2+s.index,s.lamp.visible?matrixOf([...s.lamp.getWorldPosition(spot).toArray(),.36,.36,.36,0,0,0]):hidden);glow.instanceMatrix.needsUpdate=true;
  for(const k in markers)markers[k].instanceMatrix.needsUpdate=true;badgeGeo.attributes.position.needsUpdate=true;
 }
 function drawBadge(stop,{state,zone,glyph:mark}){// Lote 5.10: the bridge may pass the symbol, the same as in the list and the legend
  const c=atlas.getContext('2d'),locked=state==='bloqueada',focus=state==='foco';
  c.save();c.translate(stop.index*128,0);
  c.clearRect(0,0,128,128);c.beginPath();c.arc(64,64,54,0,Math.PI*2);c.fillStyle=focus?colors.sun:colors.ivory;c.fill();c.lineWidth=12;c.strokeStyle=ZONES[zone]||colors.ink;c.stroke();
  c.fillStyle=colors.ink;c.strokeStyle=colors.ink;c.textAlign='center';c.textBaseline='middle';
  if(locked){c.lineWidth=7;c.beginPath();c.arc(64,54,14,Math.PI,0);c.stroke();c.fillRect(44,56,40,30);}
  else{const glyph=mark||{guardado:'✓',rascunho:'✎',adiado:'↷'}[state]||String(stop.index+1);c.font=`900 ${glyph.length>1?40:58}px Nunito, sans-serif`;c.fillText(glyph,64,68);}
  c.restore();atlasTexture.needsUpdate=true;
 }
 // Rumo replaced the compass piece (Lote 5.4): the bridge draws him in SVG; the scene keeps only his anchor, with no mesh.
 const piece=new T.Object3D();piece.name='rumo';scene.add(piece);
 let selected=0,activeScene=false,visible=true,motion=true,manual=false,raf=0,last=0,frames=0,ambient=12,ambientPhase=0,states=stops.map(()=>({state:'disponível',zone:'leaf'}));
 let walk=null,cam=null,aim=null,pieceU=STOP_U[0],frameKey='';
 const piecePos=new T.Vector3(stops[0].x,stops[0].y,stops[0].z);
 const center=new T.Vector3(0,0,0);let angle=A0,zoom=1,lost=false,disposed=false,overview=true,exploring=false,framed=true,insetBottom=0,compact=false,shortNow=false,closeNow=false,keepGuide=null,intro=null,lastHalf=0;
 // Lote 5.9: maxLife = instances written on the CPU in one frame; cpu = time of advance() (ambient, camera and the draw call
 // submission), the reference for a frame on the CPU.
 const metrics={maxCalls:0,maxTriangles:0,maxLife:0,maxConfetti:0,cpuMax:0,cpuSum:0,cpuN:0};
 function goTo(u){pieceU=u;piecePos.copy(curve.getPointAt(u));}
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
 // Lote 5.8: on a desktop strip (900 px or more) the drawing may grow to 200 px (280 on a strip of 850 px or more), so it keeps
 // the scale of the world when the focus comes close; elsewhere it stops at 130 px.
 const figMax=()=>{const r=rectOf();return r.width>=900?T.MathUtils.clamp(.33*r.height,200,280):130;};
 function figureBox(p,unit){const hb=Math.min(figMax(),Math.max(46,unit*FIGURE_UNITS))/unit,x=sx(p),y=sy(p);return [x-hb*60/130,x+hb*60/130,y-hb*4/130,y+hb*125/130];}
 function stopBoxes(i){const s=stops[i],p=new T.Vector3(s.x,s.y,s.z),b=new T.Vector3(s.x+s.side.x*.6,s.y+1.15,s.z+s.side.z*.6);return [[sx(p)-.3,sx(p)+.3,sy(p)-.2,sy(p)+.2],[sx(b)-.3,sx(b)+.3,sy(b)-.3,sy(b)+.3]];}
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
 // Lote 5.8: on a desktop strip the focus comes close to Rumo (80 to 240 px per unit, 30% of the strip height): it frames him, his
 // stop and the next one, with the scenery around; a guide that is not whole in the frame is hidden (the bridge), as in the short
 // strip. Before, the focus there held the guides too and came out almost the same as "Ver bosque" (B2 of Lote 5.6).
 function bounds(){const r=rectOf();shortNow=compact&&r.height<170;closeNow=!shortNow&&r.width>=900;if(shortNow)return {lo:r.height/168,hi:r.height/60};if(closeNow)return {lo:r.height/(2*T.MathUtils.clamp(.3*r.height,80,240)),hi:9};return r.width<600&&r.height>=170?{lo:r.height/116,hi:r.height>=200?r.height/91:9}:{lo:Math.max(1.6,r.height*FIGURE_UNITS/260),hi:9};}
 const rumoAt=i=>new T.Vector3(stops[i].x,stops[i].y,stops[i].z);
 // Lote 5.8: on a desktop strip the focus also holds the next stop, so the frame shows the stretch of the climb ahead.
 // Lote 6.2 (QA A1, A2 e M14): the place of the world is framed too, and with the neighbours the one built before it. 4th Y round:
 // the place does not set the zoom (in a short strip it pushed Rumo below the sizes of 5.7 and 5.8 and under the camera buttons);
 // it only moves the centre, as far as every box the zoom was fitted on stays whole above the buttons.
 function lean(c,make,pull){if(!pull.length)return c;const r=rectOf(),half=c.half,w=half*r.width/r.height,unit=r.height/(2*half),pad=4/unit,ib=insetBottom/unit,req=make(unit),all=[...req,...pull];
  const lo=(bs,k)=>Math.min(...bs.map(b=>b[k])),hi=(bs,k)=>Math.max(...bs.map(b=>b[k])),x0=hi(req,1)+pad-w,x1=lo(req,0)-pad+w,y0=hi(req,3)+pad-half,y1=lo(req,2)-pad-ib+half;
  if(x0>x1+1e-6||y0>y1+1e-6)return c;return {...c,cx:T.MathUtils.clamp((lo(all,0)+hi(all,1))/2,x0,x1),cy:T.MathUtils.clamp((lo(all,2)+hi(all,3))/2-ib/2,y0,y1)};}
 function focusBoxes(i,unit,neighbours){const g=shortNow?null:LAND_GUIDE[i],bs=[figureBox(rumoAt(i),unit),...stopBoxes(i)];if(g)bs.push(figureBox(guides[g],unit));if(neighbours)for(const j of [i-1,i+1])if(stops[j])bs.push(stopBoxes(j)[0]);if(!neighbours&&!shortNow&&stops[i+1]&&rectOf().width>=900)bs.push(stopBoxes(i+1)[0]);return bs;}
 // One zoom for the seven stops (the frame does not breathe between them): the largest that fits each stop with its guide.
 // Lote 5.8: on a strip of 600 px or more, the one zoom also counts, for each stop, the guides of other lands that fall within
 // the frame width: with the climb, Pipa (over Ponte) stands higher than Bino and would lose her head at the top of the
 // Clareira and Moinho focus. Phones and the short strips keep the zoom of Lote 5.7.
 // In a phase passage the bridge keeps the guide of the finished land in the frame (keepGuide), to see him celebrate.
 const closeBoxes=(i,u)=>[figureBox(rumoAt(i),u),...stopBoxes(i),...(stops[i+1]?[stopBoxes(i+1)[0]]:[]),...(guides[keepGuide]?[figureBox(guides[keepGuide],u)]:[])];
 function frameFocus(i){basis();const {lo,hi}=bounds(),strip=rectOf();if(closeNow){const c=lean(fit(u=>closeBoxes(i,u),lo,hi),u=>closeBoxes(i,u),siteScreen(i));return {center:centerAt(c.cx,c.cy),half:c.half};}const reach=strip.width>=600&&!shortNow?lo*strip.width/strip.height:0;let half=lo;
  const reachable=j=>Object.entries(guides).filter(([n,g])=>n!==LAND_GUIDE[j]&&Math.abs(sx(g)-sx(rumoAt(j)))<reach).map(([,g])=>g);
  for(let j=0;j<7;j++)half=Math.max(half,fit(u=>[...focusBoxes(j,u,false),...reachable(j).map(g=>figureBox(g,u))],lo,hi).half);
  const wide=fit(u=>focusBoxes(i,u,true),half,half),near=wide.need<=half*1.001;let fb=u=>focusBoxes(i,u,near),f=near?wide:fit(fb,half,half);
  // A guide of another land whose middle falls in the frame comes in whole, when it fits: at Bifurcação on a wide screen the
  // frame shows all three, and none may lose the head at the top edge (QA M2).
  const r=rectOf(),w=half*r.width/r.height,extra=Object.entries(guides).filter(([n,g])=>!shortNow&&n!==LAND_GUIDE[i]&&Math.abs(sx(g)-f.cx)<w).map(([,g])=>g);
  if(extra.length){const eb=u=>[...focusBoxes(i,u,near),...extra.map(g=>figureBox(g,u))],e=fit(eb,half,half,2);if(e.need<=half*1.001){f=e;fb=eb;}}
  f=lean(f,fb,[...siteScreen(i),...(near&&i>0?siteScreen(i-1):[])]);
  // No character cut by a side edge either: the frame slides sideways, as little as it can and keeping Rumo, the stop and
  // the guide of the land inside, until each other guide is either whole in the frame or out of it.
  const unit=r.height/(2*half),pad=4/unit,req=focusBoxes(i,unit,false),lo2=Math.max(...req.map(b=>b[1]))+pad-w,hi2=Math.min(...req.map(b=>b[0]))-pad+w,top=f.cy+half-pad,bottom=f.cy-half+insetBottom/unit+pad;
  const others=Object.entries(guides).filter(([n])=>!shortNow&&n!==LAND_GUIDE[i]).map(([,g])=>figureBox(g,unit)).filter(([,,y0,y1])=>y1>f.cy-half&&y0<f.cy+half);
  const clear=cx=>others.every(([x0,x1,y0,y1])=>x1<=cx-w||x0>=cx+w||x0>=cx-w+pad&&x1<=cx+w-pad&&y0>=bottom&&y1<=top);
  const tries=[f.cx,...others.flatMap(([x0,x1])=>[x0-w,x1+w,x1+pad-w,x0-pad+w])].filter(cx=>cx>=lo2-1e-6&&cx<=hi2+1e-6&&clear(cx)).sort((a,b)=>Math.abs(a-f.cx)-Math.abs(b-f.cx));
  return {center:centerAt(tries.length?tries[0]:f.cx,f.cy),half};}
 // "Ver bosque": the seven stops and the four characters; on wider strips also the landmarks at both ends, with 20 px free on
 // each side. A phone keeps 6 px and leaves the end landmarks out: the scale grows and the stops stand farther apart, so
 // the guides keep clear of Rumo at any stop (QA M1). Lote 5.8: a landmark is framed by the box of its pieces, so the
 // binoculars of the Mirante, at the top right of the climb, stay whole.
 // Lote 6.2: the box of each place, in the screen units of the frame and (for the labels of the bridge) in one world box.
 const siteScreen=i=>markBox['mundo'+(i+1)]?.length?[screenBox(markBox['mundo'+(i+1)])]:[];let sites=null;const siteBoxes=()=>sites??=stops.map((_,i)=>(markBox['mundo'+(i+1)]||[]).reduce((u,b)=>u.union(b),new T.Box3()));
 const corner=new T.Vector3(),screenBox=parts=>{let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const b of parts)for(let k=0;k<8;k++){corner.set(k&1?b.max.x:b.min.x,k&2?b.max.y:Math.max(.13,b.min.y),k&4?b.max.z:b.min.z);const a=sx(corner),c=sy(corner);x0=Math.min(x0,a);x1=Math.max(x1,a);y0=Math.min(y0,c);y1=Math.max(y1,c);}return [x0,x1,y0,y1];};
 // A strip so wide that the frame with the end landmarks would pass the width of the forest (with the climb, 1280×720 and
 // 1366×768) frames the stops and the four without them: the limit of the forest then never cuts a stop or a character.
 function frameOverview(){basis();const r=rumoAt(selected),rect=rectOf(),wide=rect.width>=600,core=u=>[figureBox(walk?piecePos:r,u),...Object.values(guides).map(g=>figureBox(g,u)),...stops.flatMap((_,i)=>stopBoxes(i))];
  const all=fit(u=>[...core(u),...(wide?Object.values(markBox).map(screenBox):[])],1.6,30,wide?20:6),room=fieldHalf(rect.width/rect.height);
  return all.half<=room?all:fit(core,1.6,Math.max(1.6,room),wide?20:6);}
 let focusHalf=2.6,overviewHalf=6;
 function reframe(){const o=frameOverview(),f=frameFocus(selected);overviewHalf=o.half;focusHalf=f.half;if(!framed)return;if(overview)center.copy(centerAt(o.cx,o.cy));else{aim=f.center;if(!cam&&!walk)center.copy(f.center);}}
 function settle(){settleLife();endBurst();if(cam){center.copy(cam.to);cam=null;}if(intro){intro=null;overview=false;const f=frameFocus(selected);focusHalf=f.half;aim=f.center;center.copy(f.center);}if(walk){goTo(walk.to);const index=walk.index;walk=null;if(aim)center.copy(aim);render();onWalk({type:'arrive',index,walked:false,moved:true,stopped:true});}}
 function stop(){cancelAnimationFrame(raf);raf=0;last=0;}
 const running=()=>!disposed&&!lost&&activeScene&&visible&&motion&&!document.hidden;
 const busy=()=>walk||cam||intro||burst||ambient<12;
 // Screen points for the SVG layer, in CSS pixels of the canvas; unit = pixels per world unit at the current zoom.
 const toScreen=(v,rect)=>{const p=v.clone().project(camera);return {x:(p.x+1)/2*rect.width,y:(1-p.y)/2*rect.height,z:p.z};};
 function anchors(rect=host.getBoundingClientRect()){return {width:rect.width,height:rect.height,unit:rect.height/(camera.top-camera.bottom),figMax:figMax(),short:shortNow,close:closeNow&&(!overview||!!cam),inset:insetBottom,rumo:toScreen(piecePos,rect),
  guides:Object.fromEntries(Object.entries(guides).map(([n,v])=>[n,toScreen(v,rect)])),stops:stops.map(s=>toScreen(new T.Vector3(s.x,s.y+.01,s.z),rect)),
  sites:siteBoxes().map(b=>{let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(let k=0;k<8;k++){const p=toScreen(corner.set(k&1?b.max.x:b.min.x,k&2?b.max.y:b.min.y,k&4?b.max.z:b.min.z),rect);x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y);}return {x:x0,y:y0,w:x1-x0,h:y1-y0};})};}
 const direction=(a,b)=>curve.getPointAt(b).project(camera).x>=curve.getPointAt(a).project(camera).x?1:-1;
 function schedule(){if(!manual&&!raf&&running()&&busy())raf=requestAnimationFrame(tick);}
 function view(){onView({overview,exploring,selected});}
 // Keeps the frame inside the forest: the ground seen at the four corners never leaves the field. A frame wider than the
 // field (zooming out on a tall strip) shrinks until it fits.
 function footprint(half,aspect){let s0=1e9,s1=-1e9,t0=1e9,t1=-1e9;for(const x of [-half*aspect,half*aspect])for(const y of [-half,half])for(const h of [0,.4]){const b=-(y+CP*(.45-h))/SP,px=x*Rh.x+b*Nh.x,pz=x*Rh.z+b*Nh.z,[s,t]=ST(px,pz);s0=Math.min(s0,s);s1=Math.max(s1,s);t0=Math.min(t0,t);t1=Math.max(t1,t);}return {s0,s1,t0,t1};}
 // The largest half-height whose frame still fits the forest (the same shrink as limit, for a frame not yet placed).
 function fieldHalf(aspect){let h=30;for(let k=0;k<4;k++){const f=footprint(h,aspect),sc=Math.min(1,(FIELD.s[1]-FIELD.s[0]-.1)/(f.s1-f.s0),(FIELD.t[1]-FIELD.t[0]-.1)/(f.t1-f.t0));if(sc>=1)break;h*=sc*.995;}return h;}
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
  // Lote 5.8: a camera move may carry a zoom (h0 to h1, with the same curve as the move).
  const goal=overview?overviewHalf:focusHalf,base=cam&&cam.h1!=null?cam.h0+(cam.h1-cam.h0)*(cam.e||0):goal;let half=Math.min(base/zoom,Math.max(overviewHalf,base)*1.25);
  if(walk&&aim&&!overview)keepRumo(half,aspect,Math.max(1,rect.height)/(2*half));
  half=limit(half,aspect);lastHalf=half;
  camera.position.set(center.x+Math.sin(angle)*10,10,center.z+Math.cos(angle)*10);camera.lookAt(center.x,.45,center.z);camera.updateMatrixWorld();
  camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
  piece.position.copy(piecePos);
  // Markers yield to Rumo so his silhouette stays readable.
  const actor=piecePos.clone();actor.y+=.6;actor.project(camera);
  for(const s of stops){const p=s.badge.getWorldPosition(new T.Vector3()).project(camera),clear=Math.abs(p.x-actor.x)>.75/(half*aspect)||Math.abs(p.y-actor.y)>.95/half;s.markers.forEach(o=>o.visible=clear&&(o!==s.lamp||states[s.index].state==='guardado'));}
  syncStops();renderer.info.reset();tilt.on=rect.width>=900&&!tilt.off;
  if(tilt.on){const w=canvas.width,h=canvas.height;if(tilt.tex?.image.width!==w||tilt.tex?.image.height!==h){tilt.tex?.dispose();tilt.tex=new T.FramebufferTexture(w,h);tilt.u.tMap.value=tilt.tex;}
   // QA A6: in "Ver bosque" the stops reach the bottom of the strip; there the sharp band is wider and the blur softer.
   tilt.u.uPx.value.set(1/w,1/h);tilt.u.uB.value=overview?.36:.28;tilt.u.uR.value=T.MathUtils.clamp(rect.height/160,1.2,3.4)*renderer.getPixelRatio()*(overview?.6:1);
   camera.layers.set(0);renderer.render(scene,camera);renderer.copyFramebufferToTexture(tilt.tex);renderer.autoClear=false;renderer.render(tilt.scene,tilt.cam);camera.layers.set(1);renderer.render(scene,camera);renderer.autoClear=true;camera.layers.enable(0);}
  else renderer.render(scene,camera);
  frames++;metrics.maxCalls=Math.max(metrics.maxCalls,renderer.info.render.calls);metrics.maxTriangles=Math.max(metrics.maxTriangles,renderer.info.render.triangles);
  // The SVG layer moves only when the camera or Rumo moved.
  const layoutKey=[center.x,center.z,angle,half,rect.width,rect.height,piecePos.x,piecePos.y,piecePos.z].join();if(layoutKey!==frameKey){frameKey=layoutKey;onFrame(anchors(rect));}
 }
 function resize(){if(disposed)return;const rect=host.getBoundingClientRect();renderer.setSize(Math.max(1,rect.width),Math.max(1,rect.height),false);if(rect.width>1&&rect.height>1){reframe();if(cam&&!overview&&aim)cam.to=aim;if(cam&&cam.h1!=null)cam.h1=overview?overviewHalf:focusHalf;}render();}
 const smooth=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,smooth3=smooth,walkEase=k=>k<.5?2*k*k:1-2*(1-k)*(1-k);
 // Lote 5.8: the entrance on a desktop strip. The bosque opens whole, waits, then comes close to the current stop; a touch, a key,
 // a stop, the pause or leaving the view end it at the stop.
 function endIntro(smooth=false){if(!intro)return;intro=null;const from=center.clone(),h0=lastHalf;cam=null;overview=false;const f=frameFocus(selected);focusHalf=f.half;aim=f.center;center.copy(f.center);
  if(smooth&&motion&&running()&&h0){cam={from,to:f.center,t:0,dur:.5,ease:smooth3,h0,h1:f.half};center.copy(from);schedule();}render();view();}
 const ease=t=>1-Math.pow(1-t,3);
 // Rumo walks the trail curve to the stop (Lote 5.4): crouch, run with short hops, arrive. The question is already open.
 // Events let the bridge animate his body and the guide of the land; changing destination mid-walk starts from where he is.
 function select(index,{instant=false,keep=null,passage=null}={}){
  if(!stops[index])return;
  intro=null;keepGuide=keep;selected=index;overview=false;framed=true;ambient=0;
  stops.forEach(s=>{s.ring.scale.setScalar(s.index===index?1.15:1);});
  const f=frameFocus(index),target=f.center,u=STOP_U[index],du=Math.abs(u-pieceU)/span,moved=du>1e-6;focusHalf=f.half;aim=target;
  if(instant||!motion||!running()){walk=null;cam=null;goTo(u);center.copy(target);render();view();onWalk({type:'arrive',index,walked:false,moved});return;}
  // While Rumo walks, the camera waits for the crouch and eases in and out with him, so he stays in the frame (QA M1).
  const was=!!walk,dur=runTime(du);cam=moved?{from:center.clone(),to:target,t:was?0:-ANTES,dur:.29,ease:walkEase}:{from:center.clone(),to:target,t:0,dur:.35,ease};
  // Lote 5.8: on a desktop strip the camera moves with Rumo, from start to end with his curve, and comes close if it was far
  // ("Ver bosque", the entrance): the walk is seen from near, with the scenery around.
  if(closeNow)cam=moved?{from:center.clone(),to:target,t:was?0:-ANTES,dur,ease:walkEase,h0:lastHalf||f.half,h1:f.half}:{from:center.clone(),to:target,t:0,dur:.5,ease:smooth,h0:lastHalf||f.half,h1:f.half};
  walk=moved?{from:pieceU,to:u,index,t:was?0:-ANTES,dur,hops:Math.min(10,Math.max(1,Math.round(du*6*1.2))),dir:direction(pieceU,u),running:was,wake:passage===null?null:{to:index,from:passage}}:null;
  if(walk){onWalk({type:'start',index,dir:walk.dir,antes:was?0:ANTES*1000,run:walk.dur*1000});if(was)onWalk({type:'run',index,dir:walk.dir,run:walk.dur*1000});}
  schedule();render();view();
  if(!walk)onWalk({type:'arrive',index,walked:false,moved:false});
 }
 const ringColor=new T.Color(),flagColor=new T.Color();
 // Lote 6.2: world 1 under works or finished. The bridge says which, with the state of the stops.
 function setBuilt(on){miniMesh.obras.visible=!on;miniMesh.pronta.visible=miniMesh.cones.visible=miniMesh.water.visible=miniFlag.visible=on;}
 // Lote 6.2: entering a world, the camera closes on its place (the bridge fades the world in over it, and a touch ends both); leaving, it
 // comes back from there to the stop, with Rumo in his place. Without motion, the camera just goes back.
 // QA M8: the place stands above the camera buttons, as in the focus, so Rumo in front of it does not pass behind them.
 const siteFrame=i=>{basis();const {x,z}=siteAt[i],p=new T.Vector3(x,siteY[i]+.3,z),r=rectOf(),half=Math.max(.95,1.15/(r.width/r.height));return {to:centerAt(sx(p),sy(p)-insetBottom*half/r.height),half};};
 function dive(i,dur){if(!motion||!running()||!siteAt[i])return false;walk=null;intro=null;const {to,half}=siteFrame(i);cam={from:center.clone(),to,t:0,dur,ease:smooth,h0:lastHalf||focusHalf,h1:half};schedule();return true;}
 function emerge(i,dur=0){const s=siteFrame(i);overview=false;zoom=1;framed=true;const f=frameFocus(selected);focusHalf=f.half;aim=f.center;center.copy(f.center);cam=null;
  if(dur&&motion&&running()){center.copy(s.to);cam={from:s.to,to:f.center,t:0,dur,ease:smooth,h0:s.half,h1:f.half};schedule();}render();view();}
 function paintStops(next){states=next.map((s,i)=>({...states[i],...s}));setBuilt(!!states[0].built);for(const s of stops){const st=states[s.index];drawBadge(s,st);markers.ring.setColorAt(s.index,ringColor.set(st.state==='foco'?colors.sun:ZONES[st.zone]||colors.ivory));markers.flag.setColorAt(s.index,flagColor.set(st.state==='guardado'?colors.sun:ZONES[st.zone]||colors.coral));const down=st.state==='bloqueada';s.flag.position.y=down?.62:1.12;s.flag.scale.x=down?.55:1;}markers.ring.instanceColor.needsUpdate=true;markers.flag.instanceColor.needsUpdate=true;render();}
 function advance(dt){
  if(!running())return;const c0=performance.now(),ambientDt=Math.min(dt,12-ambient);ambient+=ambientDt;ambientPhase+=ambientDt;if(ambientDt>0)lifeStep(ambientDt);
  if(burst)stepBurst(dt);
  const following=!!walk;
  if(walk){walk.t=Math.min(walk.dur,walk.t+dt);
   if(walk.t>0){if(!walk.running){walk.running=true;onWalk({type:'run',index:walk.index,dir:walk.dir,run:walk.dur*1000});}
    const k=walk.t/walk.dur,e=k<.5?2*k*k:1-2*(1-k)*(1-k);goTo(walk.from+(walk.to-walk.from)*e);piecePos.y+=.12*Math.abs(Math.sin(Math.PI*walk.hops*k));
    if(walk.wake){wake(walk.wake.to,walk.wake.from);walk.wake=null;}// Lote 5.9: the place wakes as Rumo sets off (QA A3: at half the walk the camera had left)
    if(k>=1){goTo(walk.to);const index=walk.index;walk=null;onWalk({type:'arrive',index,walked:true,moved:true});}}}
  if(intro){intro.t+=dt;if(intro.t>=0&&!intro.go){intro.go=true;overview=false;const f=frameFocus(selected);focusHalf=f.half;aim=f.center;cam={from:center.clone(),to:f.center,t:0,dur:intro.dur,ease:smooth,h0:lastHalf||overviewHalf,h1:f.half};view();}}
  if(cam){cam.t=Math.min(cam.dur,cam.t+dt);cam.e=cam.ease(Math.max(0,cam.t)/cam.dur);center.lerpVectors(cam.from,cam.to,cam.e);if(cam.t>=cam.dur){cam=null;if(intro?.go)intro=null;}}
  else if(following&&aim)center.copy(aim);
  render();const c=performance.now()-c0;metrics.cpuMax=Math.max(metrics.cpuMax,c);metrics.cpuSum+=c;metrics.cpuN++;
 }
 function tick(time){raf=0;if(!running())return;const dt=last?Math.min((time-last)/1000,.05):0;last=time;advance(dt);if(!busy())view();schedule();}
 function release(object){const gs=new Set(),ms=new Set();object.traverse(o=>{if(o.isMesh||o.isSprite){if(o.geometry)gs.add(o.geometry);for(const m of(Array.isArray(o.material)?o.material:[o.material]))ms.add(m)}});gs.forEach(g=>g.dispose());ms.forEach(m=>{m.map?.dispose();m.dispose()});}
 function pan(dx,dy){const k=(camera.top-camera.bottom)/Math.max(1,canvas.clientHeight);intro=null;cam=null;aim=null;framed=false;center.x-=dx*k*Math.cos(angle)-dy*k*Math.sin(angle);center.z+=dx*k*Math.sin(angle)+dy*k*Math.cos(angle);render();view();}
 function cameraAction(action,{animate=false}={}){
  const from=center.clone(),h0=lastHalf;intro=null;cam=null;
  if(['left','right','up','down'].includes(action))pan(action==='left'?70:action==='right'?-70:0,action==='up'?70:action==='down'?-70:0);
  if(action==='in')zoom=Math.min(1.6,zoom+.15);if(action==='out')zoom=Math.max(.7,zoom-.15);
  if(action==='rotate'){angle=Math.min(1.15,angle+.18);framed=false;}if(action==='rotate-back'){angle=Math.max(-.3,angle-.18);framed=false;}
  if(action==='center'){overview=true;angle=A0;zoom=1;framed=true;aim=null;reframe();}
  if(action==='focus'){overview=false;zoom=1;framed=true;const f=frameFocus(selected);focusHalf=f.half;center.copy(f.center);aim=f.center;}
  // Lote 5.8: on a desktop strip, the "Ver bosque" button zooms out and in over .6 s instead of jumping (the bridge asks).
  if(animate&&(action==='center'||action==='focus')&&rectOf().width>=900&&motion&&running()&&h0){cam={from,to:center.clone(),t:0,dur:.6,ease:smooth,h0,h1:overview?overviewHalf:focusHalf};center.copy(from);schedule();}
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
 function up(e){const p=pointers.get(e.pointerId);pointers.delete(e.pointerId);pinch=0;if(!p||p.dragged)return;const hit=pick(e);if(hit!==undefined)onSelect(hit);else endIntro(true);}
 function setExplore(value){exploring=!!value;pointers.clear();pinch=0;host.dataset.exploring=String(exploring);host.style.touchAction=exploring?'none':'pan-y';view();}
 function wheelZoom(e){if(!exploring)return;e.preventDefault();zoom=T.MathUtils.clamp(zoom*Math.exp(-e.deltaY*.0015),.7,1.6);render();view();}
 canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',e=>pointers.delete(e.pointerId));canvas.addEventListener('wheel',wheelZoom,{passive:false});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;stop();onError('A visualização 3D foi interrompida. Continue pela lista de paradas.');});
 // Scrolling the scene away or hiding the tab ends a walk at its stop instead of freezing it halfway (QA M4).
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);const observer=new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(!visible){stop();settle();}else schedule()});observer.observe(host);const visibility=()=>{if(document.hidden){stop();settle();}else schedule()};document.addEventListener('visibilitychange',visibility);
 stops.forEach(s=>drawBadge(s,states[s.index]));resize();
 {const warm=new T.Scene(),m=new T.InstancedMesh(burstGeo,burstMat,1);m.setColorAt(0,new T.Color());warm.add(m);renderer.compile(warm,camera);m.dispose();}// Lote 5.11: the confetti shader, ready before the first phase ends
 return {select,paintStops,advance,render,anchors,camera:cameraAction,setExplore,
  // The camera controls drawn over the bottom of the strip (px): the frame keeps stops and characters above them.
  setInsets({bottom=0}={}){if(Math.abs(bottom-insetBottom)<1)return;insetBottom=bottom;reframe();render();},
  // Lote 5.7: the bridge marks an open phase; under 170 px the focus then frames Rumo and the stop (see bounds).
  setCompact(value){if(compact===!!value)return;compact=!!value;reframe();render();},
  // Leaving the view or pausing ends the walk at its stop: it never resumes later in the middle of something else.
  setActive(value){activeScene=value;if(value)schedule();else{stop();setExplore(false);settle();endIntro();}},
  // Lote 5.8: the entrance (desktop strip, with motion): returns false when it does not run.
  intro({hold=1.6,dur=1.3}={}){if(rectOf().width<900||!motion||!running())return false;const o=frameOverview();overview=true;overviewHalf=o.half;center.copy(centerAt(o.cx,o.cy));intro={t:-hold,dur,go:false};render();view();schedule();return true;},
  skipIntro:()=>endIntro(true),
  // Lote 5.9: a tap on a stop sends a gust there; with a text field in focus the scene goes calm (wind 15%, critters slower).
  // Lote 5.11: the confetti of a finished phase; a tap that skips the passage ends it at once.
  dive,emerge,confetti,endConfetti(){if(!burst)return;endBurst();render();},
  gust,setCalm(value){if(calm===!!value)return;calm=!!value;if(ambient<12)schedule();},
  // The passage ends: the guide of the finished land no longer holds the frame.
  setKeep(name=null){if(keepGuide===name)return;const from=center.clone(),h0=lastHalf;keepGuide=name;reframe();
   if(rectOf().width>=900&&motion&&running()&&!overview&&h0&&!walk){cam={from,to:center.clone(),t:0,dur:.3,ease:smooth,h0,h1:focusHalf};center.copy(from);schedule();}render();},
  setMotion(value){motion=value;if(!value){stop();settle();endIntro();render();}else schedule();},setManual(value){manual=value;stop();if(!value)schedule();},
  state:()=>({ready:true,confetti:burst?burst.p.length:0,compact,short:shortNow,close:closeNow,intro:!!intro,selected,piece:piecePos.toArray(),stopPositions:stops.map(s=>[s.x,s.z]),stopHeights:stops.map(s=>s.y),states:states.map(s=>s.state),hop:!!walk,cam:!!cam,frames,active:activeScene,visible,motion,lost,tiles:tiles.length,heights:[...new Set(tiles.map(t=>t.height))],zoom,angle,center:center.toArray(),overview,exploring,ambient,tilt:tilt.on,metrics:{...metrics},life:{t:lifeT,live,amp:U.uAmp.value,calm,gust:U.uGust.value.z,bloom:U.uBloom.value.z,birdsAway:birdAge.filter(a=>a!==null).length,flock:flock>=0,fish:fishOn,wheel:wheelSpeed},triangles:renderer.info.render.triangles,calls:renderer.info.render.calls}),
  raw:()=>({renderer,scene,camera,piece,stops,targets,curve,trail,wheel,stream,flags,guides,landmarks,markBox,millBox,scenery,tilt,life:{uniforms:U,critters,puffs,clouds,blades,perches,lanterns,reeds,blobs,glow},mini:{...miniMesh,flag:miniFlag},siteAt,siteY,bridge:BR,field:FIELD,toTrail:ST}),
  dispose(){disposed=true;stop();endBurst();burstGeo.dispose();burstMat.dispose();resizeObserver.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',visibility);release(scene);release(tilt.scene);tilt.tex?.dispose();renderer.dispose();canvas.remove();}
 };
}};
