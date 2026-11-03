(()=>{var gd=0,vh=1,_d=2;var Mh=1,xd=2,pi=3,Di=0,yn=1,Qe=2,Kn=0,Ls=1,Oa=2,Sh=3,bh=4,yd=5,ss=100,vd=101,Md=102,Sd=103,bd=104,Td=200,wd=201,Ed=202,Ad=203,qo=204,Yo=205,Cd=206,Rd=207,Id=208,Pd=209,Ld=210,Dd=211,Ud=212,Nd=213,Fd=214,gl=0,_l=1,xl=2,Ds=3,yl=4,vl=5,Ml=6,Sl=7,bl=0,Od=1,Bd=2,zi=0,zd=1,kd=2,Vd=3,Gd=4,Tl=5,Hd=6,Wd=7;var Th=300,Gs=301,Hs=302,wl=303,El=304,Ba=306,Zo=1e3,is=1001,Jo=1002,un=1003,Xd=1004;var za=1005;var Jn=1006,Al=1007;var hs=1008;var jn=1009,wh=1010,Eh=1011,Fr=1012,Cl=1013,us=1014,Qn=1015,Or=1016,Rl=1017,Il=1018,Br=1020,Ah=35902,Ch=35899,Rh=1021,Ih=1022,Nn=1023,wr=1026,zr=1027,Pl=1028,Ll=1029,Ph=1030,Dl=1031;var Ul=1033,ka=33776,Va=33777,Ga=33778,Ha=33779,Nl=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,kl=37492,Vl=37496,Gl=37808,Hl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Zl=37814,Jl=37815,$l=37816,Kl=37817,jl=37818,Ql=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,oc=36285,lc=36286;var Ma=2300,$o=2301,Xo=2302,uh=2400,dh=2401,fh=2402;var qd=3200,Yd=3201;var Lh=0,Zd=1,ki="",sn="srgb",Us="srgb-linear",Sa="linear",we="srgb";var Ps=7680;var ph=519,Jd=512,$d=513,Kd=514,Dh=515,jd=516,Qd=517,tf=518,ef=519,mh=35044;var Uh="300 es",Zn=2e3,ba=2001;var Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,ya=Math.PI/180,Er=180/Math.PI;function kr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Nh(i,t){return(i%t+t)%t}function Rp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function va(i,t,e){return(1-e)*i+e*t}function Pp(i,t,e,n){return va(i,t,1-Math.exp(-e*n))}function Lp(i,t=1){return t-Math.abs(Nh(i,t*2)-t)}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fp(i,t){return i+Math.random()*(t-i)}function Op(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(qu=i);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(i){return i*ya}function kp(i){return i*Er}function Vp(i){return(i&i-1)===0&&i!==0}function Gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,h*d,h*f,o*c);break;case"YZY":i.set(h*f,o*u,h*d,o*c);break;case"ZXZ":i.set(h*d,h*f,o*u,o*c);break;case"XZX":i.set(o*u,h*v,h*m,o*c);break;case"YXY":i.set(h*m,o*u,h*v,o*c);break;case"ZYZ":i.set(h*v,h*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function br(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ti={DEG2RAD:ya,RAD2DEG:Er,generateUUID:kr,clamp:he,euclideanModulo:Nh,mapLinear:Rp,inverseLerp:Ip,lerp:va,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:zp,radToDeg:kp,isPowerOfTwo:Vp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Wp,normalize:_n,denormalize:br},Qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],v=r[a+2],w=r[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=w;return}if(d!==w||h!==f||c!==m||u!==v){let _=1-o,p=h*f+c*m+u*v+d*w,P=p>=0?1:-1,R=1-p*p;if(R>Number.EPSILON){let D=Math.sqrt(R),C=Math.atan2(D,p*P);_=Math.sin(_*C)/D,o=Math.sin(o*C)/D}let b=o*P;if(h=h*_+f*b,c=c*_+m*b,u=u*_+v*b,d=d*_+w*b,_===1-o){let D=1/Math.sqrt(h*h+c*c+u*u+d*d);h*=D,c*=D,u*=D,d*=D}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+u*d+h*m-c*f,t[e+1]=h*v+u*f+c*d-o*m,t[e+2]=c*v+u*m+o*f-h*d,t[e+3]=u*v-o*d-h*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=h(n/2),m=h(s/2),v=h(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-h)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-h)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(h+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(h+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*h,this._y=s*u+a*h+r*o-n*c,this._z=r*u+a*c+n*h-s*o,this._w=a*u-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let h=1-o*o;if(h<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(h),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+h*c+a*d-o*u,this.y=n+h*u+o*c-r*d,this.z=s+h*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new O,Yu=new Ni,se=class i{constructor(t,e,n,s,r,a,o,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c)}set(t,e,n,s,r,a,o,h,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],w=s[0],_=s[3],p=s[6],P=s[1],R=s[4],b=s[7],D=s[2],C=s[5],L=s[8];return r[0]=a*w+o*P+h*D,r[3]=a*_+o*R+h*C,r[6]=a*p+o*b+h*L,r[1]=c*w+u*P+d*D,r[4]=c*_+u*R+d*C,r[7]=c*p+u*b+d*L,r[2]=f*w+m*P+v*D,r[5]=f*_+m*R+v*C,r[8]=f*p+m*b+v*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*h+s*r*c-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*h-u*r,m=c*r-a*h,v=e*d+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=d*w,t[1]=(s*c-u*n)*w,t[2]=(o*n-s*a)*w,t[3]=f*w,t[4]=(u*e-s*h)*w,t[5]=(s*r-o*e)*w,t[6]=m*w,t[7]=(n*h-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+t,-s*c,s*h,-s*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vc=new se;function Fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=Ta("canvas");return i.style.display="block",i}var Zu={};function Ar(i){i in Zu||(Zu[i]=!0,console.warn(i))}function sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ju=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){let i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===we&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var xe=Xp();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hr===void 0&&(hr=Ta("canvas")),hr.width=t.width,hr.height=t.height;let s=hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qp=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yp=0,Hc=new O,dn=class i extends Ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=is,s=is,r=Jn,a=hs,o=Nn,h=jn,c=i.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=kr(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Th;dn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,c=h[0],u=h[4],d=h[8],f=h[1],m=h[5],v=h[9],w=h[2],_=h[6],p=h[10];if(Math.abs(u-f)<.01&&Math.abs(d-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+w)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(m+1)/2,D=(p+1)/2,C=(u+f)/4,L=(d+w)/4,z=(v+_)/4;return R>b&&R>D?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=C/n,r=L/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=z/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=z/r),this.set(n,s,r,e),this}let P=Math.sqrt((_-v)*(_-v)+(d-w)*(d-w)+(f-u)*(f-u));return Math.abs(P)<.001&&(P=1),this.x=(_-v)/P,this.y=(d-w)/P,this.z=(f-u)/P,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new dn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wa=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),Eo.subVectors(this.max,fa),ur.subVectors(t.a,fa),dr.subVectors(t.b,fa),fr.subVectors(t.c,fa),$i.subVectors(dr,ur),Ki.subVectors(fr,dr),As.subVectors(ur,fr);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-As.z,As.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,As.z,0,-As.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-As.y,As.x,0];return!Wc(e,ur,dr,fr,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,ur,dr,fr,Eo))?!1:(Ao.crossVectors($i,Ki),e=[Ao.x,Ao.y,Ao.z],Wc(e,ur,dr,fr,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,wo=new hi,ur=new O,dr=new O,fr=new O,$i=new O,Ki=new O,As=new O,fa=new O,Eo=new O,Ao=new O,Cs=new O;function Wc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cs.fromArray(i,r);let o=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),h=t.dot(Cs),c=e.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var Zp=new hi,pa=new O,Xc=new O,rs=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pa.subVectors(t,this.center);let e=pa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pa.copy(t.center).add(Xc)),this.expandByPoint(pa.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ci=new O,qc=new O,Co=new O,ji=new O,Yc=new O,Ro=new O,Zc=new O,Ea=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qc.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(qc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Co),o=ji.dot(this.direction),h=-ji.dot(Co),c=ji.lengthSq(),u=Math.abs(1-a*a),d,f,m,v;if(u>0)if(d=a*h-o,f=a*o-h,v=r*u,d>=0)if(f>=-v)if(f<=v){let w=1/u;d*=w,f*=w,m=d*(d+a*f+2*o)+f*(a*d+f+2*h)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*h)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*h)+c;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-h),r),m=-d*d+f*(f+2*h)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-h),r),m=f*(f+2*h)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-h),r),m=-d*d+f*(f+2*h)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qc).addScaledVector(Co,f),m}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,h=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,h=(t.min.z-f.z)*d),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,r){Yc.subVectors(e,t),Ro.subVectors(n,t),Zc.crossVectors(Yc,Ro);let a=this.direction.dot(Zc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,t);let h=o*this.direction.dot(Ro.crossVectors(ji,Ro));if(h<0)return null;let c=o*this.direction.dot(Yc.cross(ji));if(c<0||h+c>a)return null;let u=-o*ji.dot(Zc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,a,o,h,c,u,d,f,m,v,w,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c,u,d,f,m,v,w,_)}set(t,e,n,s,r,a,o,h,c,u,d,f,m,v,w,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=w,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pr.setFromMatrixColumn(t,0).length(),r=1/pr.setFromMatrixColumn(t,1).length(),a=1/pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,m=a*d,v=o*u,w=o*d;e[0]=h*u,e[4]=-h*d,e[8]=c,e[1]=m+v*c,e[5]=f-w*c,e[9]=-o*h,e[2]=w-f*c,e[6]=v+m*c,e[10]=a*h}else if(t.order==="YXZ"){let f=h*u,m=h*d,v=c*u,w=c*d;e[0]=f+w*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=w+f*o,e[10]=a*h}else if(t.order==="ZXY"){let f=h*u,m=h*d,v=c*u,w=c*d;e[0]=f-w*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=w-f*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let f=a*u,m=a*d,v=o*u,w=o*d;e[0]=h*u,e[4]=v*c-m,e[8]=f*c+w,e[1]=h*d,e[5]=w*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let f=a*h,m=a*c,v=o*h,w=o*c;e[0]=h*u,e[4]=w-f*d,e[8]=v*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+v,e[10]=f-w*d}else if(t.order==="XZY"){let f=a*h,m=a*c,v=o*h,w=o*c;e[0]=h*u,e[4]=-d,e[8]=c*u,e[1]=f*d+w,e[5]=a*u,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*u,e[10]=w*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,$p)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Qi.crossVectors(n,An),Qi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Qi.crossVectors(n,An)),Qi.normalize(),Io.crossVectors(An,Qi),s[0]=Qi.x,s[4]=Io.x,s[8]=An.x,s[1]=Qi.y,s[5]=Io.y,s[9]=An.y,s[2]=Qi.z,s[6]=Io.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],w=n[6],_=n[10],p=n[14],P=n[3],R=n[7],b=n[11],D=n[15],C=s[0],L=s[4],z=s[8],E=s[12],T=s[1],F=s[5],k=s[9],W=s[13],Y=s[2],st=s[6],et=s[10],lt=s[14],tt=s[3],mt=s[7],ot=s[11],At=s[15];return r[0]=a*C+o*T+h*Y+c*tt,r[4]=a*L+o*F+h*st+c*mt,r[8]=a*z+o*k+h*et+c*ot,r[12]=a*E+o*W+h*lt+c*At,r[1]=u*C+d*T+f*Y+m*tt,r[5]=u*L+d*F+f*st+m*mt,r[9]=u*z+d*k+f*et+m*ot,r[13]=u*E+d*W+f*lt+m*At,r[2]=v*C+w*T+_*Y+p*tt,r[6]=v*L+w*F+_*st+p*mt,r[10]=v*z+w*k+_*et+p*ot,r[14]=v*E+w*W+_*lt+p*At,r[3]=P*C+R*T+b*Y+D*tt,r[7]=P*L+R*F+b*st+D*mt,r[11]=P*z+R*k+b*et+D*ot,r[15]=P*E+R*W+b*lt+D*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],v=t[3],w=t[7],_=t[11],p=t[15];return v*(+r*h*d-s*c*d-r*o*f+n*c*f+s*o*m-n*h*m)+w*(+e*h*m-e*c*f+r*a*f-s*a*m+s*c*u-r*h*u)+_*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+p*(-s*o*u-e*h*d+e*o*f+s*a*d-n*a*f+n*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],v=t[12],w=t[13],_=t[14],p=t[15],P=d*_*c-w*f*c+w*h*m-o*_*m-d*h*p+o*f*p,R=v*f*c-u*_*c-v*h*m+a*_*m+u*h*p-a*f*p,b=u*w*c-v*d*c+v*o*m-a*w*m-u*o*p+a*d*p,D=v*d*h-u*w*h-v*o*f+a*w*f+u*o*_-a*d*_,C=e*P+n*R+s*b+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=P*L,t[1]=(w*f*r-d*_*r-w*s*m+n*_*m+d*s*p-n*f*p)*L,t[2]=(o*_*r-w*h*r+w*s*c-n*_*c-o*s*p+n*h*p)*L,t[3]=(d*h*r-o*f*r-d*s*c+n*f*c+o*s*m-n*h*m)*L,t[4]=R*L,t[5]=(u*_*r-v*f*r+v*s*m-e*_*m-u*s*p+e*f*p)*L,t[6]=(v*h*r-a*_*r-v*s*c+e*_*c+a*s*p-e*h*p)*L,t[7]=(a*f*r-u*h*r+u*s*c-e*f*c-a*s*m+e*h*m)*L,t[8]=b*L,t[9]=(v*d*r-u*w*r-v*n*m+e*w*m+u*n*p-e*d*p)*L,t[10]=(a*w*r-v*o*r+v*n*c-e*w*c-a*n*p+e*o*p)*L,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*m-e*o*m)*L,t[12]=D*L,t[13]=(u*w*s-v*d*s+v*n*f-e*w*f-u*n*_+e*d*_)*L,t[14]=(v*o*s-a*w*s-v*n*h+e*w*h+a*n*_-e*o*_)*L,t[15]=(a*d*s-u*o*s+u*n*h-e*d*h-a*n*f+e*o*f)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,u*o+n,u*h-s*a,0,c*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,v=r*d,w=a*u,_=a*d,p=o*d,P=h*c,R=h*u,b=h*d,D=n.x,C=n.y,L=n.z;return s[0]=(1-(w+p))*D,s[1]=(m+b)*D,s[2]=(v-R)*D,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(f+p))*C,s[6]=(_+P)*C,s[7]=0,s[8]=(v+R)*L,s[9]=(_-P)*L,s[10]=(1-(f+w))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),o=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let c=1/r,u=1/a,d=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,e.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Zn,h=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),v,w;if(h)v=r/(a-r),w=a*r/(a-r);else if(o===Zn)v=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===ba)v=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Zn,h=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),v,w;if(h)v=1/(a-r),w=a/(a-r);else if(o===Zn)v=-2/(a-r),w=-(a+r)/(a-r);else if(o===ba)v=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pr=new O,qn=new Se,Jp=new O(0,0,0),$p=new O(1,1,1),Qi=new O,Io=new O,An=new O,Ku=new Se,ju=new Ni,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kp=0,Qu=new O,mr=new Ni,Ri=new Se,Po=new O,ma=new O,jp=new O,Qp=new Ni,td=new O(1,0,0),ed=new O(0,1,0),nd=new O(0,0,1),id={type:"added"},tm={type:"removed"},gr={type:"childadded",child:null},Jc={type:"childremoved",child:null},De=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new $n,n=new Ni,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new se}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ma,Po,this.up):Ri.lookAt(Po,ma,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ri),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tm),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let d=h[c];r(t.shapes,d)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new O(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new O,Ii=new O,$c=new O,Pi=new O,_r=new O,xr=new O,sd=new O,Kc=new O,jc=new O,Qc=new O,th=new Ce,eh=new Ce,nh=new Ce,ns=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),Ii.subVectors(n,e),$c.subVectors(t,e);let a=Yn.dot(Yn),o=Yn.dot(Ii),h=Yn.dot($c),c=Ii.dot(Ii),u=Ii.dot($c),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*h-o*u)*f,v=(a*u-o*h)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,Pi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Pi.x),h.addScaledVector(a,Pi.y),h.addScaledVector(o,Pi.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,e),eh.fromBufferAttribute(t,n),nh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(th,r.x),a.addScaledVector(eh,r.y),a.addScaledVector(nh,r.z),a}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),Ii.subVectors(t,e),Yn.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Yn.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_r.subVectors(s,n),xr.subVectors(r,n),Kc.subVectors(t,n);let h=_r.dot(Kc),c=xr.dot(Kc);if(h<=0&&c<=0)return e.copy(n);jc.subVectors(t,s);let u=_r.dot(jc),d=xr.dot(jc);if(u>=0&&d<=u)return e.copy(s);let f=h*d-u*c;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(_r,a);Qc.subVectors(t,r);let m=_r.dot(Qc),v=xr.dot(Qc);if(v>=0&&m<=v)return e.copy(r);let w=m*c-h*v;if(w<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(xr,o);let _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return sd.subVectors(r,s),o=(d-u)/(d-u+(m-v)),e.copy(s).addScaledVector(sd,o);let p=1/(_+w+f);return a=w*p,o=f*p,e.copy(n).addScaledVector(_r,a).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function ih(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Nh(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ih(a,r,t+1/3),this.g=ih(a,r,t),this.b=ih(a,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return xe.workingToColorSpace(hn.copy(this),t),Math.round(he(hn.r*255,0,255))*65536+Math.round(he(hn.g*255,0,255))*256+Math.round(he(hn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,u=(o+a)/2;if(o===a)h=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=sn){xe.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Lo);let n=va(ts.h,Lo.h,e),s=va(ts.s,Lo.s,e),r=va(ts.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Zt;Zt.NAMES=rf;var em=0,as=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Ls,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Tn=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new O,Do=new Qt,nm=0,Ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}};var Aa=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},im=0,Un=new Se,sh=new De,yr=new O,Cn=new hi,ga=new hi,je=new O,Ge=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Ca:Aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Cn.min,ga.min),Cn.expandByPoint(je),je.addVectors(Cn.max,ga.max),Cn.expandByPoint(je)):(Cn.expandByPoint(ga.min),Cn.expandByPoint(ga.max))}Cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),h&&(yr.fromBufferAttribute(t,c),je.add(yr)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],h=[];for(let z=0;z<n.count;z++)o[z]=new O,h[z]=new O;let c=new O,u=new O,d=new O,f=new Qt,m=new Qt,v=new Qt,w=new O,_=new O;function p(z,E,T){c.fromBufferAttribute(n,z),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,T),f.fromBufferAttribute(r,z),m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,T),u.sub(c),d.sub(c),m.sub(f),v.sub(f);let F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(w.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(F),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(F),o[z].add(w),o[E].add(w),o[T].add(w),h[z].add(_),h[E].add(_),h[T].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let z=0,E=P.length;z<E;++z){let T=P[z],F=T.start,k=T.count;for(let W=F,Y=F+k;W<Y;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let R=new O,b=new O,D=new O,C=new O;function L(z){D.fromBufferAttribute(s,z),C.copy(D);let E=o[z];R.copy(E),R.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(C,E);let F=b.dot(h[z])<0?-1:1;a.setXYZW(z,R.x,R.y,R.z,F)}for(let z=0,E=P.length;z<E;++z){let T=P[z],F=T.start,k=T.count;for(let W=F,Y=F+k;W<Y;W+=3)L(t.getX(W+0)),L(t.getX(W+1)),L(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,h=new O,c=new O,u=new O,d=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){let v=t.getX(f+0),w=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,_),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),c.fromBufferAttribute(n,_),o.add(u),h.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,h){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(h.length*u),m=0,v=0;for(let w=0,_=h.length;w<_;w++){o.isInterleavedBufferAttribute?m=h[w]*o.data.stride+o.offset:m=h[w]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Ve(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=t(h,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=t(f,n);h.push(m)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let c=n[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new Se,Rs=new Ea,Uo=new rs,ad=new O,No=new O,Fo=new O,Oo=new O,rh=new O,Bo=new O,od=new O,zo=new O,Re=class extends De{constructor(t=new Ge,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bo.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=o[h],d=r[h];u!==0&&(rh.fromBufferAttribute(d,t),a?Bo.addScaledVector(rh,u):Bo.addScaledVector(rh.sub(e),u))}e.add(Bo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(Uo.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Uo,ad)===null||Rs.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(rd.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){let _=f[v],p=a[_.materialIndex],P=Math.max(_.start,m.start),R=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let b=P,D=R;b<D;b+=3){let C=o.getX(b),L=o.getX(b+1),z=o.getX(b+2);s=ko(this,p,t,n,c,u,d,C,L,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let _=v,p=w;_<p;_+=3){let P=o.getX(_),R=o.getX(_+1),b=o.getX(_+2);s=ko(this,a,t,n,c,u,d,P,R,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){let _=f[v],p=a[_.materialIndex],P=Math.max(_.start,m.start),R=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let b=P,D=R;b<D;b+=3){let C=b,L=b+1,z=b+2;s=ko(this,p,t,n,c,u,d,C,L,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),w=Math.min(h.count,m.start+m.count);for(let _=v,p=w;_<p;_+=3){let P=_,R=_+1,b=_+2;s=ko(this,a,t,n,c,u,d,P,R,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function sm(i,t,e,n,s,r,a,o){let h;if(t.side===yn?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Di,o),h===null)return null;zo.copy(o),zo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function ko(i,t,e,n,s,r,a,o,h,c){i.getVertexPosition(o,No),i.getVertexPosition(h,Fo),i.getVertexPosition(c,Oo);let u=sm(i,t,e,n,No,Fo,Oo,od);if(u){let d=new O;ns.getBarycoord(od,No,Fo,Oo,d),s&&(u.uv=ns.getInterpolatedAttribute(s,o,h,c,d,new Qt)),r&&(u.uv1=ns.getInterpolatedAttribute(r,o,h,c,d,new Qt)),a&&(u.normal=ns.getInterpolatedAttribute(a,o,h,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:h,c,normal:new O,materialIndex:0};ns.getNormal(No,Fo,Oo,f.normal),u.face=f,u.barycoord=d}return u}var ui=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],d=[],f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function v(w,_,p,P,R,b,D,C,L,z,E){let T=b/L,F=D/z,k=b/2,W=D/2,Y=C/2,st=L+1,et=z+1,lt=0,tt=0,mt=new O;for(let ot=0;ot<et;ot++){let At=ot*F-W;for(let Bt=0;Bt<st;Bt++){let le=Bt*T-k;mt[w]=le*P,mt[_]=At*R,mt[p]=Y,c.push(mt.x,mt.y,mt.z),mt[w]=0,mt[_]=0,mt[p]=C>0?1:-1,u.push(mt.x,mt.y,mt.z),d.push(Bt/L),d.push(1-ot/z),lt+=1}}for(let ot=0;ot<z;ot++)for(let At=0;At<L;At++){let Bt=f+At+st*ot,le=f+At+st*(ot+1),qt=f+(At+1)+st*(ot+1),de=f+(At+1)+st*ot;h.push(Bt,le,de),h.push(le,qt,de),tt+=6}o.addGroup(m,tt,E),m+=tt,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ws(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){let t={};for(let e=0;e<i.length;e++){let n=Ws(i[e]);for(let s in n)t[s]=n[s]}return t}function rm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var af={clone:Ws,merge:fn},am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ns=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new O,ld=new Qt,cd=new Qt,bn=class extends Ns{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vr=-90,Mr=1,tl=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(vr,Mr,t,e);s.layers=this.layers,this.add(s);let r=new bn(vr,Mr,t,e);r.layers=this.layers,this.add(r);let a=new bn(vr,Mr,t,e);a.layers=this.layers,this.add(a);let o=new bn(vr,Mr,t,e);o.layers=this.layers,this.add(o);let h=new bn(vr,Mr,t,e);h.layers=this.layers,this.add(h);let c=new bn(vr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ra=class extends dn{constructor(t=[],e=Gs,n,s,r,a,o,h,c,u){super(t,e,n,s,r,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},el=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ra(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ui(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Kn});r.uniforms.tEquirect.value=e;let a=new Re(s,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=Jn),new tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Rn=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let _=e.getJointPose(w,n),p=this._getHandJoint(c,w);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Fi=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var nl=class extends dn{constructor(t=null,e=1,n=1,s,r,a,o,h,c=un,u=un,d,f){super(null,a,o,h,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Sr=new Se,hd=new Se,Vo=[],ud=new hi,cm=new Se,_a=new Re,xa=new rs,ze=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),ud.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),xa.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),t.ray.intersectsSphere(xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),hd.multiplyMatrices(n,Sr),_a.matrixWorld=hd,_a.raycast(t,Vo);for(let a=0,o=Vo.length;a<o;a++){let h=Vo[a];h.instanceId=r,h.object=this,e.push(h)}Vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(s*this.count),s,this.count,Pl,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;r[h]=o,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ah=new O,hm=new O,um=new se,li=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ah.subVectors(n,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ah),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||um.getNormalMatrix(t),s=this.coplanarPoint(ah).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new rs,dm=new Qt(.5,.5),Go=new O,Pr=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],c=r[3],u=r[4],d=r[5],f=r[6],m=r[7],v=r[8],w=r[9],_=r[10],p=r[11],P=r[12],R=r[13],b=r[14],D=r[15];if(s[0].setComponents(c-a,m-u,p-v,D-P).normalize(),s[1].setComponents(c+a,m+u,p+v,D+P).normalize(),s[2].setComponents(c+o,m+d,p+w,D+R).normalize(),s[3].setComponents(c-o,m-d,p-w,D-R).normalize(),n)s[4].setComponents(h,f,_,b).normalize(),s[5].setComponents(c-h,m-f,p-_,D-b).normalize();else if(s[4].setComponents(c-h,m-f,p-_,D-b).normalize(),e===Zn)s[5].setComponents(c+h,m+f,p+_,D+b).normalize();else if(e===ba)s[5].setComponents(h,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);let e=dm.distanceTo(t.center);return Is.radius=.7071067811865476+e,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ia=class extends dn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=un,this.minFilter=un,this.generateMipmaps=!1,this.needsUpdate=!0}};var Lr=class extends dn{constructor(t,e,n,s,r,a,o,h,c){super(t,e,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pa=class extends dn{constructor(t,e,n=us,s,r,a,o=un,h=un,c,u=wr,d=1){if(u!==wr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},La=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Fs=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],h=[],c=new O,u=new Qt;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,h.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},He=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],m=[],v=0,w=[],_=n/2,p=0;P(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(m,2));function P(){let b=new O,D=new O,C=0,L=(e-t)/n;for(let z=0;z<=r;z++){let E=[],T=z/r,F=T*(e-t)+t;for(let k=0;k<=s;k++){let W=k/s,Y=W*h+o,st=Math.sin(Y),et=Math.cos(Y);D.x=F*st,D.y=-T*n+_,D.z=F*et,d.push(D.x,D.y,D.z),b.set(st,L,et).normalize(),f.push(b.x,b.y,b.z),m.push(W,1-T),E.push(v++)}w.push(E)}for(let z=0;z<s;z++)for(let E=0;E<r;E++){let T=w[E][z],F=w[E+1][z],k=w[E+1][z+1],W=w[E][z+1];(t>0||E!==0)&&(u.push(T,F,W),C+=3),(e>0||E!==r-1)&&(u.push(F,k,W),C+=3)}c.addGroup(p,C,0),p+=C}function R(b){let D=v,C=new Qt,L=new O,z=0,E=b===!0?t:e,T=b===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,_*T,0),f.push(0,T,0),m.push(.5,.5),v++;let F=v;for(let k=0;k<=s;k++){let Y=k/s*h+o,st=Math.cos(Y),et=Math.sin(Y);L.x=E*et,L.y=_*T,L.z=E*st,d.push(L.x,L.y,L.z),f.push(0,T,0),C.x=st*.5+.5,C.y=et*.5*T+.5,m.push(C.x,C.y),v++}for(let k=0;k<s;k++){let W=D+k,Y=F+k;b===!0?u.push(Y,Y+1,W):u.push(Y+1,Y,W),z+=3}c.addGroup(p,z,b===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},di=class i extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dr=class i extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(P){let R=new O,b=new O,D=new O;for(let C=0;C<e.length;C+=3)m(e[C+0],R),m(e[C+1],b),m(e[C+2],D),h(R,b,D,P)}function h(P,R,b,D){let C=D+1,L=[];for(let z=0;z<=C;z++){L[z]=[];let E=P.clone().lerp(b,z/C),T=R.clone().lerp(b,z/C),F=C-z;for(let k=0;k<=F;k++)k===0&&z===C?L[z][k]=E:L[z][k]=E.clone().lerp(T,k/F)}for(let z=0;z<C;z++)for(let E=0;E<2*(C-z)-1;E++){let T=Math.floor(E/2);E%2===0?(f(L[z][T+1]),f(L[z+1][T]),f(L[z][T])):(f(L[z][T+1]),f(L[z+1][T+1]),f(L[z+1][T]))}}function c(P){let R=new O;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(P),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function u(){let P=new O;for(let R=0;R<r.length;R+=3){P.x=r[R+0],P.y=r[R+1],P.z=r[R+2];let b=_(P)/2/Math.PI+.5,D=p(P)/Math.PI+.5;a.push(b,1-D)}v(),d()}function d(){for(let P=0;P<a.length;P+=6){let R=a[P+0],b=a[P+2],D=a[P+4],C=Math.max(R,b,D),L=Math.min(R,b,D);C>.9&&L<.1&&(R<.2&&(a[P+0]+=1),b<.2&&(a[P+2]+=1),D<.2&&(a[P+4]+=1))}}function f(P){r.push(P.x,P.y,P.z)}function m(P,R){let b=P*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function v(){let P=new O,R=new O,b=new O,D=new O,C=new Qt,L=new Qt,z=new Qt;for(let E=0,T=0;E<r.length;E+=9,T+=6){P.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),C.set(a[T+0],a[T+1]),L.set(a[T+2],a[T+3]),z.set(a[T+4],a[T+5]),D.copy(P).add(R).add(b).divideScalar(3);let F=_(D);w(C,T+0,P,F),w(L,T+2,R,F),w(z,T+4,b,F)}}function w(P,R,b,D){D<0&&P.x===1&&(a[R]=P.x-1),b.x===0&&b.z===0&&(a[R]=D/2/Math.PI+.5)}function _(P){return Math.atan2(P.z,-P.x)}function p(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ur=class i extends Dr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var il=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,h=r-1,c;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new Qt:new O);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,h=new Se;for(let m=0;m<=t;m++){let v=m/t;s[m]=this.getTangentAt(v,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(he(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(h.makeRotationAxis(o,v))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(he(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let v=1;v<=t;v++)r[v].applyMatrix4(h.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Bh(){let i=0,t=0,e=0,n=0;function s(r,a,o,h){i=r,t=o,e=-3*r+3*a-2*o-h,n=2*r-2*a+o+h}return{initCatmullRom:function(r,a,o,h,c){s(a,o,c*(o-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,o,h,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(h-a)/(u+d)+(h-o)/d;f*=u,m*=u,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ho=new O,oh=new Bh,lh=new Bh,ch=new Bh,Da=class extends il{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),c=Ho);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(d),m),w=Math.pow(d.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(u),m);w<1e-4&&(w=1),v<1e-4&&(v=w),_<1e-4&&(_=w),oh.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,v,w,_),lh.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,v,w,_),ch.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,v,w,_)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),lh.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),ch.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(oh.calc(h),lh.calc(h),ch.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var os=class i extends Dr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Nr=class i extends Dr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},xn=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),c=o+1,u=h+1,d=t/o,f=e/h,m=[],v=[],w=[],_=[];for(let p=0;p<u;p++){let P=p*f-a;for(let R=0;R<c;R++){let b=R*d-r;v.push(b,-P,0),w.push(0,0,1),_.push(R/o),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let P=0;P<o;P++){let R=P+c*p,b=P+c*(p+1),D=P+1+c*(p+1),C=P+1+c*p;m.push(R,b,C),m.push(b,D,C)}this.setIndex(m),this.setAttribute("position",new ge(v,3)),this.setAttribute("normal",new ge(w,3)),this.setAttribute("uv",new ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ua=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,u=[],d=new O,f=new O,m=[],v=[],w=[],_=[];for(let p=0;p<=n;p++){let P=[],R=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&h===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let C=D/e;d.x=-t*Math.cos(s+C*r)*Math.sin(a+R*o),d.y=t*Math.cos(a+R*o),d.z=t*Math.sin(s+C*r)*Math.sin(a+R*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),w.push(f.x,f.y,f.z),_.push(C+b,1-R),P.push(c++)}u.push(P)}for(let p=0;p<n;p++)for(let P=0;P<e;P++){let R=u[p][P+1],b=u[p][P],D=u[p+1][P],C=u[p+1][P+1];(p!==0||a>0)&&m.push(R,b,C),(p!==n-1||h<Math.PI)&&m.push(b,D,C)}this.setIndex(m),this.setAttribute("position",new ge(v,3)),this.setAttribute("normal",new ge(w,3)),this.setAttribute("uv",new ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Os=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],h=[],c=[],u=new O,d=new O,f=new O;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){let w=v/s*r,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(w),d.y=(t+e*Math.cos(_))*Math.sin(w),d.z=e*Math.sin(_),o.push(d.x,d.y,d.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),f.subVectors(d,u).normalize(),h.push(f.x,f.y,f.z),c.push(v/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){let w=(s+1)*m+v-1,_=(s+1)*(m-1)+v-1,p=(s+1)*(m-1)+v,P=(s+1)*m+v;a.push(w,_,P),a.push(_,p,P)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fi=class extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sl=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends Bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dh:r=t,o=2*e-n;break;case fh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case dh:a=t,h=2*n-e;break;case fh:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),w=v*v,_=w*v,p=-f*_+2*f*w-f*v,P=(1+f)*_+(-1.5-2*f)*w+(-.5+f)*v+1,R=(-1-m)*_+(1.5+m)*w+.5*v,b=m*_-m*w;for(let D=0;D!==o;++D)r[D]=p*a[u+D]+P*a[c+D]+R*a[h+D]+b*a[d+D];return r}},ol=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[h+f]*u;return r}},ll=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ma:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&fm(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)h=!0;else{let d=o*n,f=d-n,m=d+n;for(let v=0;v!==n;++v){let w=e[d+v];if(w!==e[f+v]||w!==e[m+v]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=$o;var ls=class extends Pn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ma;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};cl.prototype.ValueTypeName="color";var hl=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};hl.prototype.ValueTypeName="number";var ul=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ni.slerpFlat(r,0,a,c-o,a,c,h);return r}},Na=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Pn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ma;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};dl.prototype.ValueTypeName="vector";var fl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},of=new fl,pl=class{constructor(t){this.manager=t!==void 0?t:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fa=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends Fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hh=new Se,dd=new O,fd=new O,gh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bi=class extends Ns{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_h=class extends gh{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new _h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ml=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zh="\\[\\]\\.:\\/",pm=new RegExp("["+zh+"]","g"),kh="[^"+zh+"]",mm="[^"+zh.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",kh),_m=/(WCOD+)?/.source.replace("WCOD",mm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),vm=new RegExp("^"+gm+_m+xm+ym+"$"),Mm=["material","materials","bones","map"],xh=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(t){let e=vm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=xh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var pd=new Se,Vs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ea(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(t,e=!0,n=[]){return yh(t,this,n,e),n.sort(md),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yh(t[s],this,n,e);return n.sort(md),n}};function md(i,t){return i.distance-t.distance}function yh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)yh(r[a],t,e,!0)}}function Vh(i,t,e,n){let s=Sm(n);switch(e){case Rh:return i*t;case Pl:return i*t/s.components*s.byteLength;case Ll:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Ul:return i*t*4/s.components*s.byteLength;case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(i,16)*Math.max(t,8)/4;case Nl:case Ol:return Math.max(i,8)*Math.max(t,8)/2;case zl:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sm(i){switch(i){case jn:case wh:return{byteLength:1,components:1};case Fr:case Eh:case Or:return{byteLength:2,components:1};case Rl:case Il:return{byteLength:2,components:4};case us:case Cl:case Qn:return{byteLength:4,components:1};case Ah:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tm(i){let t=new WeakMap;function e(o,h){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,h,c){let u=h.array,d=h.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){let v=d[f],w=d[m];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++f,d[f]=w)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){let w=d[m];i.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:wm,alphahash_pars_fragment:Em,alphamap_fragment:Am,alphamap_pars_fragment:Cm,alphatest_fragment:Rm,alphatest_pars_fragment:Im,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Um,begin_vertex:Nm,beginnormal_vertex:Fm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Hm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:Zm,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:tg,colorspace_fragment:eg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:yg,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:Tg,lights_fragment_maps:wg,lights_fragment_end:Eg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Ig,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:kg,morphtarget_vertex:Vg,normal_fragment_begin:Gg,normal_fragment_maps:Hg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Kg,opaque_fragment:jg,packing:Qg,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:v0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:b0,background_vert:T0,background_frag:w0,backgroundCube_vert:E0,backgroundCube_frag:A0,cube_vert:C0,cube_frag:R0,depth_vert:I0,depth_frag:P0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:k0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:H0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:j0,points_frag:Q0,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},vt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},mi={basic:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:fn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:fn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:fn([vt.points,vt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:fn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:fn([vt.common,vt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:fn([vt.sprite,vt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:fn([vt.common,vt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:fn([vt.lights,vt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var cc={r:0,b:0,g:0},Xs=new $n,s_=new Se;function r_(i,t,e,n,s,r,a){let o=new Zt(0),h=r===!0?0:1,c,u,d=null,f=0,m=null;function v(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function w(R){let b=!1,D=v(R);D===null?p(o,h):D&&D.isColor&&(p(D,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,b){let D=v(b);D&&(D.isCubeTexture||D.mapping===Ba)?(u===void 0&&(u=new Re(new ui(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ws(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xs.copy(b.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Xs)),u.material.toneMapped=xe.getTransfer(D.colorSpace)!==we,(d!==D||f!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Re(new xn(2,2),new In({name:"BackgroundMaterial",uniforms:Ws(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=xe.getTransfer(D.colorSpace)!==we,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,b){R.getRGB(cc,Oh(i)),n.buffers.color.setClear(cc.r,cc.g,cc.b,b,a)}function P(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,b=1){o.set(R),h=b,p(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,p(o,h)},render:w,addToRenderList:_,dispose:P}}function a_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(T,F,k,W,Y){let st=!1,et=d(W,k,F);r!==et&&(r=et,c(r.object)),st=m(T,W,k,Y),st&&v(T,W,k,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,b(T,F,k,W),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function d(T,F,k){let W=k.wireframe===!0,Y=n[T.id];Y===void 0&&(Y={},n[T.id]=Y);let st=Y[F.id];st===void 0&&(st={},Y[F.id]=st);let et=st[W];return et===void 0&&(et=f(h()),st[W]=et),et}function f(T){let F=[],k=[],W=[];for(let Y=0;Y<e;Y++)F[Y]=0,k[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:W,object:T,attributes:{},index:null}}function m(T,F,k,W){let Y=r.attributes,st=F.attributes,et=0,lt=k.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let ot=Y[tt],At=st[tt];if(At===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(At=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(At=T.instanceColor)),ot===void 0||ot.attribute!==At||At&&ot.data!==At.data)return!0;et++}return r.attributesNum!==et||r.index!==W}function v(T,F,k,W){let Y={},st=F.attributes,et=0,lt=k.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let ot=st[tt];ot===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor));let At={};At.attribute=ot,ot&&ot.data&&(At.data=ot.data),Y[tt]=At,et++}r.attributes=Y,r.attributesNum=et,r.index=W}function w(){let T=r.newAttributes;for(let F=0,k=T.length;F<k;F++)T[F]=0}function _(T){p(T,0)}function p(T,F){let k=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;k[T]=1,W[T]===0&&(i.enableVertexAttribArray(T),W[T]=1),Y[T]!==F&&(i.vertexAttribDivisor(T,F),Y[T]=F)}function P(){let T=r.newAttributes,F=r.enabledAttributes;for(let k=0,W=F.length;k<W;k++)F[k]!==T[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function R(T,F,k,W,Y,st,et){et===!0?i.vertexAttribIPointer(T,F,k,Y,st):i.vertexAttribPointer(T,F,k,W,Y,st)}function b(T,F,k,W){w();let Y=W.attributes,st=k.getAttributes(),et=F.defaultAttributeValues;for(let lt in st){let tt=st[lt];if(tt.location>=0){let mt=Y[lt];if(mt===void 0&&(lt==="instanceMatrix"&&T.instanceMatrix&&(mt=T.instanceMatrix),lt==="instanceColor"&&T.instanceColor&&(mt=T.instanceColor)),mt!==void 0){let ot=mt.normalized,At=mt.itemSize,Bt=t.get(mt);if(Bt===void 0)continue;let le=Bt.buffer,qt=Bt.type,de=Bt.bytesPerElement,Q=qt===i.INT||qt===i.UNSIGNED_INT||mt.gpuType===Cl;if(mt.isInterleavedBufferAttribute){let rt=mt.data,J=rt.stride,Gt=mt.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<tt.locationSize;It++)p(tt.location+It,rt.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<tt.locationSize;It++)_(tt.location+It);i.bindBuffer(i.ARRAY_BUFFER,le);for(let It=0;It<tt.locationSize;It++)R(tt.location+It,At/tt.locationSize,qt,ot,J*de,(Gt+At/tt.locationSize*It)*de,Q)}else{if(mt.isInstancedBufferAttribute){for(let rt=0;rt<tt.locationSize;rt++)p(tt.location+rt,mt.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let rt=0;rt<tt.locationSize;rt++)_(tt.location+rt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let rt=0;rt<tt.locationSize;rt++)R(tt.location+rt,At/tt.locationSize,qt,ot,At*de,At/tt.locationSize*rt*de,Q)}}else if(et!==void 0){let ot=et[lt];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(tt.location,ot);break;case 3:i.vertexAttrib3fv(tt.location,ot);break;case 4:i.vertexAttrib4fv(tt.location,ot);break;default:i.vertexAttrib1fv(tt.location,ot)}}}}P()}function D(){z();for(let T in n){let F=n[T];for(let k in F){let W=F[k];for(let Y in W)u(W[Y].object),delete W[Y];delete F[k]}delete n[T]}}function C(T){if(n[T.id]===void 0)return;let F=n[T.id];for(let k in F){let W=F[k];for(let Y in W)u(W[Y].object),delete W[Y];delete F[k]}delete n[T.id]}function L(T){for(let F in n){let k=n[F];if(k[T.id]===void 0)continue;let W=k[T.id];for(let Y in W)u(W[Y].object),delete W[Y];delete k[T.id]}}function z(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:P}}function o_(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];e.update(m,n,1)}function h(c,u,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let w=0;w<d;w++)v+=u[w]*f[w];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function l_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Nn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===Or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Qn&&!z)}function h(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=h(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:D,maxSamples:C}}function c_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new li,o=new se,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){let v=d.clippingPlanes,w=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!_)r?u(null):c();else{let P=r?0:n,R=P*4,b=p.clippingState||null;h.value=b,b=u(v,f,R,m);for(let D=0;D!==R;++D)b[D]=e[D];p.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,v){let w=d!==null?d.length:0,_=null;if(w!==0){if(_=h.value,v!==!0||_===null){let p=m+w*4,P=f.matrixWorldInverse;o.getNormalMatrix(P),(_===null||_.length<p)&&(_=new Float32Array(p));for(let R=0,b=m;R!==w;++R,b+=4)a.copy(d[R]).applyMatrix4(P,o),a.normal.toArray(_,b),_[b+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,_}}function h_(i){let t=new WeakMap;function e(a,o){return o===wl?a.mapping=Gs:o===El&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wl||o===El)if(t.has(a)){let h=t.get(a).texture;return e(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new el(h.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gr=4,lf=[.125,.215,.35,.446,.526,.582],Zs=20,Gh=new Bi,cf=new Zt,Hh=null,Wh=0,Xh=0,qh=!1,Ys=(1+Math.sqrt(5))/2,Vr=1/Ys,hf=[new O(-Ys,Vr,0),new O(Ys,Vr,0),new O(-Vr,0,Ys),new O(Vr,0,Ys),new O(0,Ys,-Vr),new O(0,Ys,Vr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],u_=new O,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=u_}=r;Hh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hh,Wh,Xh),this._renderer.xr.enabled=qh,t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Or,format:Nn,colorSpace:Us,depthBuffer:!1},s=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(r)),this._blurMaterial=f_(r,t,e)}return s}_compileMaterial(t){let e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Gh)}_sceneToCubeUV(t,e,n,s,r){let h=new bn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(cf),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let w=new Tn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new Re(new ui,w),p=!1,P=t.background;P?P.isColor&&(w.color.copy(P),t.background=null,p=!0):(w.color.copy(cf),p=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(h.up.set(0,c[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[R],r.y,r.z)):b===1?(h.up.set(0,0,c[R]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[R],r.z)):(h.up.set(0,c[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[R]));let D=this._cubeSize;hc(s,b*D,R>2?D:0,D,D),d.setRenderTarget(s),p&&d.render(_,h),d.render(t,h)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=P}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;hc(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Gh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hf[(s-r-1)%hf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Re(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zs-1),w=r/v,_=isFinite(r)?1+Math.floor(u*w):Zs;_>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zs}`);let p=[],P=0;for(let L=0;L<Zs;++L){let z=L/w,E=Math.exp(-z*z/2);p.push(E),L===0?P+=E:L<_&&(P+=2*E)}for(let L=0;L<p.length;L++)p[L]=p[L]/P;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-n;let b=this._sizeLods[s],D=3*b*(s>R-Gr?s-R+Gr:0),C=4*(this._cubeSize-b);hc(e,D,C,3*b,2*b),h.setRenderTarget(e),h.render(d,Gh)}};function d_(i){let t=[],e=[],n=[],s=i,r=i-Gr+1+lf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let h=1/o;a>i-Gr?h=lf[a-i+Gr-1]:a===0&&(h=0),n.push(h);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,w=3,_=2,p=1,P=new Float32Array(w*v*m),R=new Float32Array(_*v*m),b=new Float32Array(p*v*m);for(let C=0;C<m;C++){let L=C%3*2/3-1,z=C>2?0:-1,E=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];P.set(E,w*v*C),R.set(f,_*v*C);let T=[C,C,C,C,C,C];b.set(T,p*v*C)}let D=new Ge;D.setAttribute("position",new Ve(P,w)),D.setAttribute("uv",new Ve(R,_)),D.setAttribute("faceIndex",new Ve(b,p)),t.push(D),s>Gr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uf(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f_(i,t,e){let n=new Float32Array(Zs),s=new O(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function df(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ff(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let h=o.mapping,c=h===wl||h===El,u=h===Gs||h===Hs;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new dc(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new dc(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let h=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&h++;return h===c}function r(o){let h=o.target;h.removeEventListener("dispose",r);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function m_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g_(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(d){let f=[],m=d.index,v=d.attributes.position,w=0;if(m!==null){let P=m.array;w=m.version;for(let R=0,b=P.length;R<b;R+=3){let D=P[R+0],C=P[R+1],L=P[R+2];f.push(D,C,C,L,L,D)}}else if(v!==void 0){let P=v.array;w=v.version;for(let R=0,b=P.length/3-1;R<b;R+=3){let D=R+0,C=R+1,L=R+2;f.push(D,C,C,L,L,D)}}else return;let _=new(Fh(f)?Ca:Aa)(f,1);_.version=w;let p=r.get(d);p&&t.remove(p),r.set(d,_)}function u(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:h,getWireframeAttribute:u}}function __(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,f*a,v),e.update(m,n,v))}function u(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];e.update(_,n,1)}function d(f,m,v,w){if(v===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],w[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,w,0,v);let p=0;for(let P=0;P<v;P++)p+=m[P]*w[P];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function x_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y_(i,t,e){let n=new WeakMap,s=new Ce;function r(a,o,h){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],P=o.morphAttributes.color||[],R=0;m===!0&&(R=1),v===!0&&(R=2),w===!0&&(R=3);let b=o.attributes.position.count*R,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*D*4*d),L=new wa(C,b,D,d);L.type=Qn,L.needsUpdate=!0;let z=R*4;for(let T=0;T<d;T++){let F=_[T],k=p[T],W=P[T],Y=b*D*4*T;for(let st=0;st<F.count;st++){let et=st*z;m===!0&&(s.fromBufferAttribute(F,st),C[Y+et+0]=s.x,C[Y+et+1]=s.y,C[Y+et+2]=s.z,C[Y+et+3]=0),v===!0&&(s.fromBufferAttribute(k,st),C[Y+et+4]=s.x,C[Y+et+5]=s.y,C[Y+et+6]=s.z,C[Y+et+7]=0),w===!0&&(s.fromBufferAttribute(W,st),C[Y+et+8]=s.x,C[Y+et+9]=s.y,C[Y+et+10]=s.z,C[Y+et+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Qt(b,D)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let v=o.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function v_(i,t,e,n){let s=new WeakMap;function r(h){let c=n.render.frame,u=h.geometry,d=t.get(h,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Lf=new dn,pf=new Pa(1,1),Df=new wa,Uf=new Qo,Nf=new Ra,mf=[],gf=[],_f=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function Xr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mf[s];if(r===void 0&&(r=new Float32Array(s),mf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fc(i,t){let e=gf[t];e===void 0&&(e=new Int32Array(t),gf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function w_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),Je(e,n)}}function E_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;xf.set(n),i.uniformMatrix3fv(this.addr,!1,xf),Je(e,n)}}function A_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),Je(e,n)}}function C_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function L_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pf.compareFunction=Dh,r=pf):r=Lf,e.setTexture2D(t||r,s)}function O_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uf,s)}function B_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nf,s)}function z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Df,s)}function k_(i){switch(i){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return T_;case 35674:return w_;case 35675:return E_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return I_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return D_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}function V_(i,t){i.uniform1fv(this.addr,t)}function G_(i,t){let e=Xr(t,this.size,2);i.uniform2fv(this.addr,e)}function H_(i,t){let e=Xr(t,this.size,3);i.uniform3fv(this.addr,e)}function W_(i,t){let e=Xr(t,this.size,4);i.uniform4fv(this.addr,e)}function X_(i,t){let e=Xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q_(i,t){let e=Xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y_(i,t){let e=Xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z_(i,t){i.uniform1iv(this.addr,t)}function J_(i,t){i.uniform2iv(this.addr,t)}function $_(i,t){i.uniform3iv(this.addr,t)}function K_(i,t){i.uniform4iv(this.addr,t)}function j_(i,t){i.uniform1uiv(this.addr,t)}function Q_(i,t){i.uniform2uiv(this.addr,t)}function tx(i,t){i.uniform3uiv(this.addr,t)}function ex(i,t){i.uniform4uiv(this.addr,t)}function nx(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Lf,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uf,r[a])}function sx(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nf,r[a])}function rx(i,t,e){let n=this.cache,s=t.length,r=fc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Df,r[a])}function ax(i){switch(i){case 5126:return V_;case 35664:return G_;case 35665:return H_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Q_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k_(e.type)}},Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},$h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function vf(i,t){i.seq.push(t),i.map[t.id]=t}function ox(i,t,e){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),a=Yh.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){vf(e,c===void 0?new Zh(o,i,t):new Jh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new $h(o),vf(e,d)),e=d}}}var Hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ox(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Mf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,cx=0;function hx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sf=new se;function ux(i){xe._getMatrix(Sf,xe.workingColorSpace,i);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hx(i.getShaderSource(t),o)}else return r}function dx(i,t){let e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fx(i,t){let e;switch(t){case zd:e="Linear";break;case kd:e="Reinhard";break;case Vd:e="Cineon";break;case Gd:e="ACESFilmic";break;case Hd:e="AgX";break;case Wd:e="Neutral";break;case Tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new O;function px(){xe.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wa(i){return i!==""}function Tf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(xx,vx)}var yx=new Map;function vx(i,t){let e=ee[t];if(e===void 0){let n=yx.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kh(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(Mx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Af(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Tx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Hs:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ex(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function Ax(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=bx(e),c=Tx(e),u=wx(e),d=Ex(e),f=Ax(e),m=mx(e),v=gx(r),w=s.createProgram(),_,p,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Wa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Wa).join(`
`),p.length>0&&(p+=`
`)):(_=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),p=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?ee.tonemapping_pars_fragment:"",e.toneMapping!==zi?fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Kh(a),a=Tf(a,e),a=wf(a,e),o=Kh(o),o=Tf(o,e),o=wf(o,e),a=Ef(a),o=Ef(o),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=P+_+a,b=P+p+o,D=Mf(s,s.VERTEX_SHADER,R),C=Mf(s,s.FRAGMENT_SHADER,b);s.attachShader(w,D),s.attachShader(w,C),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function L(F){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(w)||"",W=s.getShaderInfoLog(D)||"",Y=s.getShaderInfoLog(C)||"",st=k.trim(),et=W.trim(),lt=Y.trim(),tt=!0,mt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,D,C);else{let ot=bf(s,D,"vertex"),At=bf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+st+`
`+ot+`
`+At)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(et===""||lt==="")&&(mt=!1);mt&&(F.diagnostics={runnable:tt,programLog:st,vertexShader:{log:et,prefix:_},fragmentShader:{log:lt,prefix:p}})}s.deleteShader(D),s.deleteShader(C),z=new Hr(s,w),E=_x(s,w)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(w,lx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=C,this}var Rx=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qh(t),e.set(t,n)),n}},Qh=class{constructor(t){this.id=Rx++,this.code=t,this.usedTimes=0}};function Ix(i,t,e,n,s,r,a){let o=new Rr,h=new jh,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,T,F,k,W){let Y=k.fog,st=W.geometry,et=E.isMeshStandardMaterial?k.environment:null,lt=(E.isMeshStandardMaterial?e:t).get(E.envMap||et),tt=lt&&lt.mapping===Ba?lt.image.height:null,mt=v[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let ot=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,At=ot!==void 0?ot.length:0,Bt=0;st.morphAttributes.position!==void 0&&(Bt=1),st.morphAttributes.normal!==void 0&&(Bt=2),st.morphAttributes.color!==void 0&&(Bt=3);let le,qt,de,Q;if(mt){let _e=mi[mt];le=_e.vertexShader,qt=_e.fragmentShader}else le=E.vertexShader,qt=E.fragmentShader,h.update(E),de=h.getVertexShaderID(E),Q=h.getFragmentShaderID(E);let rt=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),Gt=W.isInstancedMesh===!0,It=W.isBatchedMesh===!0,re=!!E.map,Ue=!!E.matcap,U=!!lt,ae=!!E.aoMap,Lt=!!E.lightMap,kt=!!E.bumpMap,wt=!!E.normalMap,Kt=!!E.displacementMap,Pt=!!E.emissiveMap,Z=!!E.metalnessMap,yt=!!E.roughnessMap,Dt=E.anisotropy>0,A=E.clearcoat>0,x=E.dispersion>0,V=E.iridescence>0,j=E.sheen>0,it=E.transmission>0,K=Dt&&!!E.anisotropyMap,Tt=A&&!!E.clearcoatMap,ft=A&&!!E.clearcoatNormalMap,xt=A&&!!E.clearcoatRoughnessMap,Nt=V&&!!E.iridescenceMap,ht=V&&!!E.iridescenceThicknessMap,St=j&&!!E.sheenColorMap,Wt=j&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,_t=!!E.specularColorMap,jt=!!E.specularIntensityMap,B=it&&!!E.transmissionMap,pt=it&&!!E.thicknessMap,gt=!!E.gradientMap,Ct=!!E.alphaMap,ct=E.alphaTest>0,at=!!E.alphaHash,Ut=!!E.extensions,Jt=zi;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let Me={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:qt,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:It,batchingColor:It&&W._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&W.instanceColor!==null,instancingMorph:Gt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Us,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Ue,envMap:U,envMapMode:U&&lt.mapping,envMapCubeUVHeight:tt,aoMap:ae,lightMap:Lt,bumpMap:kt,normalMap:wt,displacementMap:f&&Kt,emissiveMap:Pt,normalMapObjectSpace:wt&&E.normalMapType===Zd,normalMapTangentSpace:wt&&E.normalMapType===Lh,metalnessMap:Z,roughnessMap:yt,anisotropy:Dt,anisotropyMap:K,clearcoat:A,clearcoatMap:Tt,clearcoatNormalMap:ft,clearcoatRoughnessMap:xt,dispersion:x,iridescence:V,iridescenceMap:Nt,iridescenceThicknessMap:ht,sheen:j,sheenColorMap:St,sheenRoughnessMap:Wt,specularMap:Ft,specularColorMap:_t,specularIntensityMap:jt,transmission:it,transmissionMap:B,thicknessMap:pt,gradientMap:gt,opaque:E.transparent===!1&&E.blending===Ls&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ct,alphaHash:at,combine:E.combine,mapUv:re&&w(E.map.channel),aoMapUv:ae&&w(E.aoMap.channel),lightMapUv:Lt&&w(E.lightMap.channel),bumpMapUv:kt&&w(E.bumpMap.channel),normalMapUv:wt&&w(E.normalMap.channel),displacementMapUv:Kt&&w(E.displacementMap.channel),emissiveMapUv:Pt&&w(E.emissiveMap.channel),metalnessMapUv:Z&&w(E.metalnessMap.channel),roughnessMapUv:yt&&w(E.roughnessMap.channel),anisotropyMapUv:K&&w(E.anisotropyMap.channel),clearcoatMapUv:Tt&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&w(E.sheenRoughnessMap.channel),specularMapUv:Ft&&w(E.specularMap.channel),specularColorMapUv:_t&&w(E.specularColorMap.channel),specularIntensityMapUv:jt&&w(E.specularIntensityMap.channel),transmissionMapUv:B&&w(E.transmissionMap.channel),thicknessMapUv:pt&&w(E.thicknessMap.channel),alphaMapUv:Ct&&w(E.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(wt||Dt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!st.attributes.uv&&(re||Ct),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:J,skinning:W.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&xe.getTransfer(E.map.colorSpace)===we,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&xe.getTransfer(E.emissiveMap.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)T.push(F),T.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(P(T,E),R(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function P(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function R(E,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){let T=v[E.type],F;if(T){let k=mi[T];F=af.clone(k.uniforms)}else F=E.uniforms;return F}function D(E,T){let F;for(let k=0,W=u.length;k<W;k++){let Y=u[k];if(Y.cacheKey===T){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new Cx(i,T,E,r),u.push(F)),F}function C(E){if(--E.usedTimes===0){let T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function L(E){h.remove(E)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:z}}function Px(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,v,w,_){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:w,group:_},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=w,p.group=_),t++,p}function o(d,f,m,v,w,_){let p=a(d,f,m,v,w,_);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function h(d,f,m,v,w,_){let p=a(d,f,m,v,w,_);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||Lx),n.length>1&&n.sort(f||Cf),s.length>1&&s.sort(f||Cf)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:u,sort:c}}function Dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Rf,i.set(n,[a])):s>=r.length?(a=new Rf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fx=0;function Ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bx(i){let t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Se,a=new Se;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,v=0,w=0,_=0,p=0,P=0,R=0,b=0,D=0,C=0,L=0;c.sort(Ox);for(let E=0,T=c.length;E<T;E++){let F=c[E],k=F.color,W=F.intensity,Y=F.distance,st=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=k.r*W,d+=k.g*W,f+=k.b*W;else if(F.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(F.sh.coefficients[et],W);L++}else if(F.isDirectionalLight){let et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let lt=F.shadow,tt=e.get(F);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=F.shadow.matrix,P++}n.directional[m]=et,m++}else if(F.isSpotLight){let et=t.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(k).multiplyScalar(W),et.distance=Y,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,n.spot[w]=et;let lt=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,lt.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[w]=lt.matrix,F.castShadow){let tt=e.get(F);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,n.spotShadow[w]=tt,n.spotShadowMap[w]=st,b++}w++}else if(F.isRectAreaLight){let et=t.get(F);et.color.copy(k).multiplyScalar(W),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=et,_++}else if(F.isPointLight){let et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),et.distance=F.distance,et.decay=F.decay,F.castShadow){let lt=F.shadow,tt=e.get(F);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,tt.shadowCameraNear=lt.camera.near,tt.shadowCameraFar=lt.camera.far,n.pointShadow[v]=tt,n.pointShadowMap[v]=st,n.pointShadowMatrix[v]=F.shadow.matrix,R++}n.point[v]=et,v++}else if(F.isHemisphereLight){let et=t.get(F);et.skyColor.copy(F.color).multiplyScalar(W),et.groundColor.copy(F.groundColor).multiplyScalar(W),n.hemi[p]=et,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==w||z.rectAreaLength!==_||z.hemiLength!==p||z.numDirectionalShadows!==P||z.numPointShadows!==R||z.numSpotShadows!==b||z.numSpotMaps!==D||z.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=w,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,z.directionalLength=m,z.pointLength=v,z.spotLength=w,z.rectAreaLength=_,z.hemiLength=p,z.numDirectionalShadows=P,z.numPointShadows=R,z.numSpotShadows=b,z.numSpotMaps=D,z.numLightProbes=L,n.version=Fx++)}function h(c,u){let d=0,f=0,m=0,v=0,w=0,_=u.matrixWorldInverse;for(let p=0,P=c.length;p<P;p++){let R=c[p];if(R.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),d++}else if(R.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),m++}else if(R.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(R.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),f++}else if(R.isHemisphereLight){let b=n.hemi[w];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(_),w++}}}return{setup:o,setupView:h,state:n}}function If(i){let t=new Bx(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function zx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new If(i),t.set(s,[o])):r>=a.length?(o=new If(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(i,t,e){let n=new Pr,s=new Qt,r=new Qt,a=new Ce,o=new sl({depthPacking:Yd}),h=new rl,c={},u=e.maxTextureSize,d={[Di]:yn,[yn]:Di,[Qe]:Qe},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:kx,fragmentShader:Vx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Re(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(C,L,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Kn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let W=p!==pi&&this.type===pi,Y=p===pi&&this.type!==pi;for(let st=0,et=C.length;st<et;st++){let lt=C[st],tt=lt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let mt=tt.getFrameExtents();if(s.multiply(mt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,tt.mapSize.y=r.y)),tt.map===null||W===!0||Y===!0){let At=this.type!==pi?{minFilter:un,magFilter:un}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ci(s.x,s.y,At),tt.map.texture.name=lt.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let ot=tt.getViewportCount();for(let At=0;At<ot;At++){let Bt=tt.getViewport(At);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),k.viewport(a),tt.updateMatrices(lt,At),n=tt.getFrustum(),b(L,z,tt.camera,lt,this.type)}tt.isPointLightShadow!==!0&&this.type===pi&&P(tt,z),tt.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(E,T,F)};function P(C,L){let z=t.update(w);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,z,f,w,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,z,m,w,null)}function R(C,L,z,E){let T=null,F=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)T=F;else if(T=z.isPointLight===!0?h:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=T.uuid,W=L.uuid,Y=c[k];Y===void 0&&(Y={},c[k]=Y);let st=Y[W];st===void 0&&(st=T.clone(),Y[W]=st,L.addEventListener("dispose",D)),T=st}if(T.visible=L.visible,T.wireframe=L.wireframe,E===pi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:d[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let k=i.properties.get(T);k.light=z}return T}function b(C,L,z,E,T){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===pi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let W=t.update(C),Y=C.material;if(Array.isArray(Y)){let st=W.groups;for(let et=0,lt=st.length;et<lt;et++){let tt=st[et],mt=Y[tt.materialIndex];if(mt&&mt.visible){let ot=R(C,mt,E,T);C.onBeforeShadow(i,C,L,z,W,ot,tt),i.renderBufferDirect(z,null,W,ot,C,tt),C.onAfterShadow(i,C,L,z,W,ot,tt)}}}else if(Y.visible){let st=R(C,Y,E,T);C.onBeforeShadow(i,C,L,z,W,st,null),i.renderBufferDirect(z,null,W,st,C,null),C.onAfterShadow(i,C,L,z,W,st,null)}}let k=C.children;for(let W=0,Y=k.length;W<Y;W++)b(k[W],L,z,E,T)}function D(C){C.target.removeEventListener("dispose",D);for(let z in c){let E=c[z],T=C.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}var Hx={[gl]:_l,[xl]:Ml,[yl]:Sl,[Ds]:vl,[_l]:gl,[Ml]:xl,[Sl]:yl,[vl]:Ds};function Wx(i,t){function e(){let B=!1,pt=new Ce,gt=null,Ct=new Ce(0,0,0,0);return{setMask:function(ct){gt!==ct&&!B&&(i.colorMask(ct,ct,ct,ct),gt=ct)},setLocked:function(ct){B=ct},setClear:function(ct,at,Ut,Jt,Me){Me===!0&&(ct*=Jt,at*=Jt,Ut*=Jt),pt.set(ct,at,Ut,Jt),Ct.equals(pt)===!1&&(i.clearColor(ct,at,Ut,Jt),Ct.copy(pt))},reset:function(){B=!1,gt=null,Ct.set(-1,0,0,0)}}}function n(){let B=!1,pt=!1,gt=null,Ct=null,ct=null;return{setReversed:function(at){if(pt!==at){let Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),pt=at;let Jt=ct;ct=null,this.setClear(Jt)}},getReversed:function(){return pt},setTest:function(at){at?rt(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(at){gt!==at&&!B&&(i.depthMask(at),gt=at)},setFunc:function(at){if(pt&&(at=Hx[at]),Ct!==at){switch(at){case gl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=at}},setLocked:function(at){B=at},setClear:function(at){ct!==at&&(pt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){B=!1,gt=null,Ct=null,ct=null,pt=!1}}}function s(){let B=!1,pt=null,gt=null,Ct=null,ct=null,at=null,Ut=null,Jt=null,Me=null;return{setTest:function(_e){B||(_e?rt(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(_e){pt!==_e&&!B&&(i.stencilMask(_e),pt=_e)},setFunc:function(_e,vn,me){(gt!==_e||Ct!==vn||ct!==me)&&(i.stencilFunc(_e,vn,me),gt=_e,Ct=vn,ct=me)},setOp:function(_e,vn,me){(at!==_e||Ut!==vn||Jt!==me)&&(i.stencilOp(_e,vn,me),at=_e,Ut=vn,Jt=me)},setLocked:function(_e){B=_e},setClear:function(_e){Me!==_e&&(i.clearStencil(_e),Me=_e)},reset:function(){B=!1,pt=null,gt=null,Ct=null,ct=null,at=null,Ut=null,Jt=null,Me=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,m=[],v=null,w=!1,_=null,p=null,P=null,R=null,b=null,D=null,C=null,L=new Zt(0,0,0),z=0,E=!1,T=null,F=null,k=null,W=null,Y=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,lt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),et=lt>=1):tt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),et=lt>=2);let mt=null,ot={},At=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),le=new Ce().fromArray(At),qt=new Ce().fromArray(Bt);function de(B,pt,gt,Ct){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(B,at),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<gt;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(pt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let Q={};Q[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ds),kt(!1),wt(vh),rt(i.CULL_FACE),ae(Kn);function rt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function J(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Gt(B,pt){return d[B]!==pt?(i.bindFramebuffer(B,pt),d[B]=pt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function It(B,pt){let gt=m,Ct=!1;if(B){gt=f.get(pt),gt===void 0&&(gt=[],f.set(pt,gt));let ct=B.textures;if(gt.length!==ct.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ut=ct.length;at<Ut;at++)gt[at]=i.COLOR_ATTACHMENT0+at;gt.length=ct.length,Ct=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(gt)}function re(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let Ue={[ss]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};Ue[Sd]=i.MIN,Ue[bd]=i.MAX;let U={[Td]:i.ZERO,[wd]:i.ONE,[Ed]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(B,pt,gt,Ct,ct,at,Ut,Jt,Me,_e){if(B===Kn){w===!0&&(J(i.BLEND),w=!1);return}if(w===!1&&(rt(i.BLEND),w=!0),B!==yd){if(B!==_||_e!==E){if((p!==ss||b!==ss)&&(i.blendEquation(i.FUNC_ADD),p=ss,b=ss),_e)switch(B){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}P=null,R=null,D=null,C=null,L.set(0,0,0),z=0,_=B,E=_e}return}ct=ct||pt,at=at||gt,Ut=Ut||Ct,(pt!==p||ct!==b)&&(i.blendEquationSeparate(Ue[pt],Ue[ct]),p=pt,b=ct),(gt!==P||Ct!==R||at!==D||Ut!==C)&&(i.blendFuncSeparate(U[gt],U[Ct],U[at],U[Ut]),P=gt,R=Ct,D=at,C=Ut),(Jt.equals(L)===!1||Me!==z)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Me),L.copy(Jt),z=Me),_=B,E=!1}function Lt(B,pt){B.side===Qe?J(i.CULL_FACE):rt(i.CULL_FACE);let gt=B.side===yn;pt&&(gt=!gt),kt(gt),B.blending===Ls&&B.transparent===!1?ae(Kn):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ct=B.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(B){T!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),T=B)}function wt(B){B!==gd?(rt(i.CULL_FACE),B!==F&&(B===vh?i.cullFace(i.BACK):B===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),F=B}function Kt(B){B!==k&&(et&&i.lineWidth(B),k=B)}function Pt(B,pt,gt){B?(rt(i.POLYGON_OFFSET_FILL),(W!==pt||Y!==gt)&&(i.polygonOffset(pt,gt),W=pt,Y=gt)):J(i.POLYGON_OFFSET_FILL)}function Z(B){B?rt(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function yt(B){B===void 0&&(B=i.TEXTURE0+st-1),mt!==B&&(i.activeTexture(B),mt=B)}function Dt(B,pt,gt){gt===void 0&&(mt===null?gt=i.TEXTURE0+st-1:gt=mt);let Ct=ot[gt];Ct===void 0&&(Ct={type:void 0,texture:void 0},ot[gt]=Ct),(Ct.type!==B||Ct.texture!==pt)&&(mt!==gt&&(i.activeTexture(gt),mt=gt),i.bindTexture(B,pt||Q[B]),Ct.type=B,Ct.texture=pt)}function A(){let B=ot[mt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(B){le.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),le.copy(B))}function Wt(B){qt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),qt.copy(B))}function Ft(B,pt){let gt=c.get(pt);gt===void 0&&(gt=new WeakMap,c.set(pt,gt));let Ct=gt.get(B);Ct===void 0&&(Ct=i.getUniformBlockIndex(pt,B.name),gt.set(B,Ct))}function _t(B,pt){let Ct=c.get(pt).get(B);h.get(pt)!==Ct&&(i.uniformBlockBinding(pt,Ct,B.__bindingPointIndex),h.set(pt,Ct))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,ot={},d={},f=new WeakMap,m=[],v=null,w=!1,_=null,p=null,P=null,R=null,b=null,D=null,C=null,L=new Zt(0,0,0),z=0,E=!1,T=null,F=null,k=null,W=null,Y=null,le.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:J,bindFramebuffer:Gt,drawBuffers:It,useProgram:re,setBlending:ae,setMaterial:Lt,setFlipSided:kt,setCullFace:wt,setLineWidth:Kt,setPolygonOffset:Pt,setScissorTest:Z,activeTexture:yt,bindTexture:Dt,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:V,texImage2D:Nt,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:_t,texStorage2D:ft,texStorage3D:xt,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:K,compressedTexSubImage3D:Tt,scissor:St,viewport:Wt,reset:jt}}function Xx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return m?new OffscreenCanvas(A,x):Ta("canvas")}function w(A,x,V){let j=1,it=Dt(A);if((it.width>V||it.height>V)&&(j=V/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(j*it.width),Tt=Math.floor(j*it.height);d===void 0&&(d=v(K,Tt));let ft=x?v(K,Tt):d;return ft.width=K,ft.height=Tt,ft.getContext("2d").drawImage(A,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+Tt+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function _(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,x,V,j,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=x;if(x===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),x===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let Tt=it?Sa:xe.getTransfer(j);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Tt===we?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(A,x){let V;return A?x===null||x===us||x===Br?V=i.DEPTH24_STENCIL8:x===Qn?V=i.DEPTH32F_STENCIL8:x===Fr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===us||x===Br?V=i.DEPTH_COMPONENT24:x===Qn?V=i.DEPTH_COMPONENT32F:x===Fr&&(V=i.DEPTH_COMPONENT16),V}function D(A,x){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==Jn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),z(x),x.isVideoTexture&&u.delete(x)}function L(A){let x=A.target;x.removeEventListener("dispose",L),T(x)}function z(A){let x=n.get(A);if(x.__webglInit===void 0)return;let V=A.source,j=f.get(V);if(j){let it=j[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(A),Object.keys(j).length===0&&f.delete(V)}n.remove(A)}function E(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let V=A.source,j=f.get(V);delete j[x.__cacheKey],a.memory.textures--}function T(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let it=0;it<x.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(x.__webglFramebuffer[j][it]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let j=0,it=V.length;j<it;j++){let K=n.get(V[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(A)}let F=0;function k(){F=0}function W(){let A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function st(A,x){let V=n.get(A);if(A.isVideoTexture&&Z(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function et(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Q(V,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function lt(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Q(V,A,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function tt(A,x){let V=n.get(A);if(A.version>0&&V.__version!==A.version){rt(V,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let mt={[Zo]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},ot={[un]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Al]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},At={[Jd]:i.NEVER,[ef]:i.ALWAYS,[$d]:i.LESS,[Dh]:i.LEQUAL,[Kd]:i.EQUAL,[tf]:i.GEQUAL,[jd]:i.GREATER,[Qd]:i.NOTEQUAL};function Bt(A,x){if(x.type===Qn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Jn||x.magFilter===Al||x.magFilter===za||x.magFilter===hs||x.minFilter===Jn||x.minFilter===Al||x.minFilter===za||x.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,mt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,mt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,mt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ot[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===un||x.minFilter!==za&&x.minFilter!==hs||x.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let j=x.source,it=f.get(j);it===void 0&&(it={},f.set(j,it));let K=Y(x);if(K!==A.__cacheKey){it[K]===void 0&&(it[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[K].usedTimes++;let Tt=it[A.__cacheKey];Tt!==void 0&&(it[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(x)),A.__cacheKey=K,A.__webglTexture=it[K].texture}return V}function qt(A,x,V){return Math.floor(Math.floor(A/V)/x)}function de(A,x,V,j){let K=A.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,j,x.data);else{K.sort((ht,St)=>ht.start-St.start);let Tt=0;for(let ht=1;ht<K.length;ht++){let St=K[Tt],Wt=K[ht],Ft=St.start+St.count,_t=qt(Wt.start,x.width,4),jt=qt(St.start,x.width,4);Wt.start<=Ft+1&&_t===jt&&qt(Wt.start+Wt.count-1,x.width,4)===_t?St.count=Math.max(St.count,Wt.start+Wt.count-St.start):(++Tt,K[Tt]=Wt)}K.length=Tt+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),xt=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ht=0,St=K.length;ht<St;ht++){let Wt=K[ht],Ft=Math.floor(Wt.start/4),_t=Math.ceil(Wt.count/4),jt=Ft%x.width,B=Math.floor(Ft/x.width),pt=_t,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,jt,B,pt,gt,V,j,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function Q(A,x,V){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let it=le(A,x),K=x.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+V);let Tt=n.get(K);if(K.version!==Tt.__version||it===!0){e.activeTexture(i.TEXTURE0+V);let ft=xe.getPrimaries(xe.workingColorSpace),xt=x.colorSpace===ki?null:xe.getPrimaries(x.colorSpace),Nt=x.colorSpace===ki||ft===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ht=w(x.image,!1,s.maxTextureSize);ht=yt(x,ht);let St=r.convert(x.format,x.colorSpace),Wt=r.convert(x.type),Ft=R(x.internalFormat,St,Wt,x.colorSpace,x.isVideoTexture);Bt(j,x);let _t,jt=x.mipmaps,B=x.isVideoTexture!==!0,pt=Tt.__version===void 0||it===!0,gt=K.dataReady,Ct=D(x,ht);if(x.isDepthTexture)Ft=b(x.format===zr,x.type),pt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,St,Wt,null));else if(x.isDataTexture)if(jt.length>0){B&&pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,jt[0].width,jt[0].height);for(let ct=0,at=jt.length;ct<at;ct++)_t=jt[ct],B?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,St,Wt,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Ft,_t.width,_t.height,0,St,Wt,_t.data);x.generateMipmaps=!1}else B?(pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ht.width,ht.height),gt&&de(x,ht,St,Wt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,St,Wt,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,jt[0].width,jt[0].height,ht.depth);for(let ct=0,at=jt.length;ct<at;ct++)if(_t=jt[ct],x.format!==Nn)if(St!==null)if(B){if(gt)if(x.layerUpdates.size>0){let Ut=Vh(_t.width,_t.height,x.format,x.type);for(let Jt of x.layerUpdates){let Me=_t.data.subarray(Jt*Ut/_t.data.BYTES_PER_ELEMENT,(Jt+1)*Ut/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Jt,_t.width,_t.height,1,St,Me)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ht.depth,St,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Ft,_t.width,_t.height,ht.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ht.depth,St,Wt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Ft,_t.width,_t.height,ht.depth,0,St,Wt,_t.data)}else{B&&pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,jt[0].width,jt[0].height);for(let ct=0,at=jt.length;ct<at;ct++)_t=jt[ct],x.format!==Nn?St!==null?B?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,_t.width,_t.height,St,Wt,_t.data):e.texImage2D(i.TEXTURE_2D,ct,Ft,_t.width,_t.height,0,St,Wt,_t.data)}else if(x.isDataArrayTexture)if(B){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,ht.width,ht.height,ht.depth),gt)if(x.layerUpdates.size>0){let ct=Vh(ht.width,ht.height,x.format,x.type);for(let at of x.layerUpdates){let Ut=ht.data.subarray(at*ct/ht.data.BYTES_PER_ELEMENT,(at+1)*ct/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,St,Wt,Ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,St,Wt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,St,Wt,ht.data);else if(x.isData3DTexture)B?(pt&&e.texStorage3D(i.TEXTURE_3D,Ct,Ft,ht.width,ht.height,ht.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,St,Wt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,St,Wt,ht.data);else if(x.isFramebufferTexture){if(pt)if(B)e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ht.width,ht.height);else{let ct=ht.width,at=ht.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ft,ct,at,0,St,Wt,null),ct>>=1,at>>=1}}else if(jt.length>0){if(B&&pt){let ct=Dt(jt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ct.width,ct.height)}for(let ct=0,at=jt.length;ct<at;ct++)_t=jt[ct],B?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,St,Wt,_t):e.texImage2D(i.TEXTURE_2D,ct,Ft,St,Wt,_t);x.generateMipmaps=!1}else if(B){if(pt){let ct=Dt(ht);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ct.width,ct.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Wt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ft,St,Wt,ht);_(x)&&p(j),Tt.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function rt(A,x,V){if(x.image.length!==6)return;let j=le(A,x),it=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let K=n.get(it);if(it.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let Tt=xe.getPrimaries(xe.workingColorSpace),ft=x.colorSpace===ki?null:xe.getPrimaries(x.colorSpace),xt=x.colorSpace===ki||Tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Nt=x.isCompressedTexture||x.image[0].isCompressedTexture,ht=x.image[0]&&x.image[0].isDataTexture,St=[];for(let at=0;at<6;at++)!Nt&&!ht?St[at]=w(x.image[at],!0,s.maxCubemapSize):St[at]=ht?x.image[at].image:x.image[at],St[at]=yt(x,St[at]);let Wt=St[0],Ft=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),jt=R(x.internalFormat,Ft,_t,x.colorSpace),B=x.isVideoTexture!==!0,pt=K.__version===void 0||j===!0,gt=it.dataReady,Ct=D(x,Wt);Bt(i.TEXTURE_CUBE_MAP,x);let ct;if(Nt){B&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,jt,Wt.width,Wt.height);for(let at=0;at<6;at++){ct=St[at].mipmaps;for(let Ut=0;Ut<ct.length;Ut++){let Jt=ct[Ut];x.format!==Nn?Ft!==null?B?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,Jt.width,Jt.height,Ft,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,jt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,Jt.width,Jt.height,Ft,_t,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,jt,Jt.width,Jt.height,0,Ft,_t,Jt.data)}}}else{if(ct=x.mipmaps,B&&pt){ct.length>0&&Ct++;let at=Dt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,jt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){B?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,St[at].width,St[at].height,Ft,_t,St[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,St[at].width,St[at].height,0,Ft,_t,St[at].data);for(let Ut=0;Ut<ct.length;Ut++){let Me=ct[Ut].image[at].image;B?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,Me.width,Me.height,Ft,_t,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,jt,Me.width,Me.height,0,Ft,_t,Me.data)}}else{B?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ft,_t,St[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,Ft,_t,St[at]);for(let Ut=0;Ut<ct.length;Ut++){let Jt=ct[Ut];B?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,Ft,_t,Jt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,jt,Ft,_t,Jt.image[at])}}}_(x)&&p(i.TEXTURE_CUBE_MAP),K.__version=it.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function J(A,x,V,j,it,K){let Tt=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),xt=R(V.internalFormat,Tt,ft,V.colorSpace),Nt=n.get(x),ht=n.get(V);if(ht.__renderTarget=x,!Nt.__hasExternalTextures){let St=Math.max(1,x.width>>K),Wt=Math.max(1,x.height>>K);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,K,xt,St,Wt,x.depth,0,Tt,ft,null):e.texImage2D(it,K,xt,St,Wt,0,Tt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,ht.__webglTexture,0,Kt(x)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,ht.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let j=x.depthTexture,it=j&&j.isDepthTexture?j.type:null,K=b(x.stencilBuffer,it),Tt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Kt(x);Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,K,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,A)}else{let j=x.textures;for(let it=0;it<j.length;it++){let K=j[it],Tt=r.convert(K.format,K.colorSpace),ft=r.convert(K.type),xt=R(K.internalFormat,Tt,ft,K.colorSpace),Nt=Kt(x);V&&Pt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,x.width,x.height):Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),st(x.depthTexture,0);let it=j.__webglTexture,K=Kt(x);if(x.depthTexture.format===wr)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(x.depthTexture.format===zr)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function re(A){let x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let j=A.texture.mipmaps;j&&j.length>0?It(x.__webglFramebuffer[0],A):It(x.__webglFramebuffer,A)}else if(V){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),Gt(x.__webglDepthbuffer[j],A,!1);else{let it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}else{let j=A.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Gt(x.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,x,V){let j=n.get(A);x!==void 0&&J(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&re(A)}function U(A){let x=A.texture,V=n.get(A),j=n.get(x);A.addEventListener("dispose",L);let it=A.textures,K=A.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let xt=0;xt<x.mipmaps.length;xt++)V.__webglFramebuffer[ft][xt]=i.createFramebuffer()}else V.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<x.mipmaps.length;ft++)V.__webglFramebuffer[ft]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ft=0,xt=it.length;ft<xt;ft++){let Nt=n.get(it[ft]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Pt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){let xt=it[ft];V.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);let Nt=r.convert(xt.format,xt.colorSpace),ht=r.convert(xt.type),St=R(xt.internalFormat,Nt,ht,xt.colorSpace,A.isXRRenderTarget===!0),Wt=Kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)J(V.__webglFramebuffer[ft][xt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else J(V.__webglFramebuffer[ft],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=it.length;ft<xt;ft++){let Nt=it[ft],ht=n.get(Nt),St=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ht.__webglTexture),Bt(St,Nt),J(V.__webglFramebuffer,A,Nt,i.COLOR_ATTACHMENT0+ft,St,0),_(Nt)&&p(St)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),Bt(ft,x),x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)J(V.__webglFramebuffer[xt],A,x,i.COLOR_ATTACHMENT0,ft,xt);else J(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ft,0);_(x)&&p(ft),e.unbindTexture()}A.depthBuffer&&re(A)}function ae(A){let x=A.textures;for(let V=0,j=x.length;V<j;V++){let it=x[V];if(_(it)){let K=P(A),Tt=n.get(it).__webglTexture;e.bindTexture(K,Tt),p(K),e.unbindTexture()}}}let Lt=[],kt=[];function wt(A){if(A.samples>0){if(Pt(A)===!1){let x=A.textures,V=A.width,j=A.height,it=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(A),ft=x.length>1;if(ft)for(let Nt=0;Nt<x.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let xt=A.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Nt=0;Nt<x.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Nt]);let ht=n.get(x[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,it,i.NEAREST),h===!0&&(Lt.length=0,kt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Lt.push(K),kt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Nt=0;Nt<x.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Nt]);let ht=n.get(x[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&h){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Kt(A){return Math.min(s.maxSamples,A.samples)}function Pt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Z(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function yt(A,x){let V=A.colorSpace,j=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Us&&V!==ki&&(xe.getTransfer(V)===we?(j!==Nn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=et,this.setTexture3D=lt,this.setTextureCube=tt,this.rebindTextures=Ue,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Pt}function qx(i,t){function e(n,s=ki){let r,a=xe.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Or)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Nn)return i.RGBA;if(n===wr)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===ka||n===Va||n===Ga||n===Ha)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===kl||n===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===kl)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ac||n===oc||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new La(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:Yx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends Ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,u=null,d=null,f=null,m=null,v=null,w=typeof XRWebGLBinding<"u",_=new tu,p={},P=e.getContextAttributes(),R=null,b=null,D=[],C=[],L=new Qt,z=null,E=new bn;E.viewport=new Ce;let T=new bn;T.viewport=new Ce;let F=[E,T],k=new ml,W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Ir,D[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Ir,D[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=D[Q];return rt===void 0&&(rt=new Ir,D[Q]=rt),rt.getHandSpace()};function st(Q){let rt=C.indexOf(Q.inputSource);if(rt===-1)return;let J=D[rt];J!==void 0&&(J.update(Q.inputSource,Q.frame,c||a),J.dispatchEvent({type:Q.type,data:Q.inputSource}))}function et(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<D.length;Q++){let rt=C[Q];rt!==null&&(C[Q]=null,D[Q].disconnect(rt))}W=null,Y=null,_.reset();for(let Q in p)delete p[Q];t.setRenderTarget(R),m=null,f=null,d=null,s=null,b=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&w&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",et),s.addEventListener("inputsourceschange",lt),P.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Gt=null,It=null;P.depth&&(It=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=P.stencil?zr:wr,Gt=P.stencil?Br:us);let re={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(re),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ci(f.textureWidth,f.textureHeight,{format:Nn,type:jn,depthTexture:new Pa(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ci(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function lt(Q){for(let rt=0;rt<Q.removed.length;rt++){let J=Q.removed[rt],Gt=C.indexOf(J);Gt>=0&&(C[Gt]=null,D[Gt].disconnect(J))}for(let rt=0;rt<Q.added.length;rt++){let J=Q.added[rt],Gt=C.indexOf(J);if(Gt===-1){for(let re=0;re<D.length;re++)if(re>=C.length){C.push(J),Gt=re;break}else if(C[re]===null){C[re]=J,Gt=re;break}if(Gt===-1)break}let It=D[Gt];It&&It.connect(J)}}let tt=new O,mt=new O;function ot(Q,rt,J){tt.setFromMatrixPosition(rt.matrixWorld),mt.setFromMatrixPosition(J.matrixWorld);let Gt=tt.distanceTo(mt),It=rt.projectionMatrix.elements,re=J.projectionMatrix.elements,Ue=It[14]/(It[10]-1),U=It[14]/(It[10]+1),ae=(It[9]+1)/It[5],Lt=(It[9]-1)/It[5],kt=(It[8]-1)/It[0],wt=(re[8]+1)/re[0],Kt=Ue*kt,Pt=Ue*wt,Z=Gt/(-kt+wt),yt=Z*-kt;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(Z),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),It[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Dt=Ue+Z,A=U+Z,x=Kt-yt,V=Pt+(Gt-yt),j=ae*U/A*Dt,it=Lt*U/A*Dt;Q.projectionMatrix.makePerspective(x,V,j,it,Dt,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function At(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,J=Q.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(J=_.depthFar)),k.near=T.near=E.near=rt,k.far=T.far=E.far=J,(W!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),W=k.near,Y=k.far),k.layers.mask=Q.layers.mask|6,E.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;let Gt=Q.parent,It=k.cameras;At(k,Gt);for(let re=0;re<It.length;re++)At(It[re],Gt);It.length===2?ot(k,E,T):k.projectionMatrix.copy(E.projectionMatrix),Bt(Q,k,Gt)};function Bt(Q,rt,J){J===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(J.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Er*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(Q){h=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(Q){return p[Q]};let le=null;function qt(Q,rt){if(u=rt.getViewerPose(c||a),v=rt,u!==null){let J=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Gt=!1;J.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let U=0;U<J.length;U++){let ae=J[U],Lt=null;if(m!==null)Lt=m.getViewport(ae);else{let wt=d.getViewSubImage(f,ae);Lt=wt.viewport,U===0&&(t.setRenderTargetTextures(b,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(b))}let kt=F[U];kt===void 0&&(kt=new bn,kt.layers.enable(U),kt.viewport=new Ce,F[U]=kt),kt.matrix.fromArray(ae.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ae.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),U===0&&(k.matrix.copy(kt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(kt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){d=n.getBinding();let U=d.getDepthInformation(J[0]);U&&U.isValid&&U.texture&&_.init(U,s.renderState)}if(It&&It.includes("camera-access")&&w){t.state.unbindTexture(),d=n.getBinding();for(let U=0;U<J.length;U++){let ae=J[U].camera;if(ae){let Lt=p[ae];Lt||(Lt=new La,p[ae]=Lt);let kt=d.getCameraImage(ae);Lt.sourceTexture=kt}}}}for(let J=0;J<D.length;J++){let Gt=C[J],It=D[J];Gt!==null&&It!==void 0&&It.update(Gt,rt,c||a)}le&&le(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),v=null}let de=new Pf;de.setAnimationLoop(qt),this.setAnimationLoop=function(Q){le=Q},this.dispose=function(){}}},qs=new $n,Jx=new Se;function $x(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Oh(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,P,R,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),d(_,p)):p.isMeshPhongMaterial?(r(_,p),u(_,p)):p.isMeshStandardMaterial?(r(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,b)):p.isMeshMatcapMaterial?(r(_,p),v(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),w(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?h(_,p,P,R):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===yn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===yn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let P=t.get(p),R=P.envMap,b=P.envMapRotation;R&&(_.envMap.value=R,qs.copy(b),qs.x*=-1,qs.y*=-1,qs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),_.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(qs)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,P,R){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*P,_.scale.value=R*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,P){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function w(_,p){let P=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,R){let b=R.program;n.uniformBlockBinding(P,b)}function c(P,R){let b=s[P.id];b===void 0&&(v(P),b=u(P),s[P.id]=b,P.addEventListener("dispose",_));let D=R.program;n.updateUBOMapping(P,D);let C=t.render.frame;r[P.id]!==C&&(f(P),r[P.id]=C)}function u(P){let R=d();P.__bindingPointIndex=R;let b=i.createBuffer(),D=P.__size,C=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function d(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(P){let R=s[P.id],b=P.uniforms,D=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let C=0,L=b.length;C<L;C++){let z=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,T=z.length;E<T;E++){let F=z[E];if(m(F,C,E,D)===!0){let k=F.__offset,W=Array.isArray(F.value)?F.value:[F.value],Y=0;for(let st=0;st<W.length;st++){let et=W[st],lt=w(et);typeof et=="number"||typeof et=="boolean"?(F.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,F.__data)):et.isMatrix3?(F.__data[0]=et.elements[0],F.__data[1]=et.elements[1],F.__data[2]=et.elements[2],F.__data[3]=0,F.__data[4]=et.elements[3],F.__data[5]=et.elements[4],F.__data[6]=et.elements[5],F.__data[7]=0,F.__data[8]=et.elements[6],F.__data[9]=et.elements[7],F.__data[10]=et.elements[8],F.__data[11]=0):(et.toArray(F.__data,Y),Y+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(P,R,b,D){let C=P.value,L=R+"_"+b;if(D[L]===void 0)return typeof C=="number"||typeof C=="boolean"?D[L]=C:D[L]=C.clone(),!0;{let z=D[L];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return D[L]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function v(P){let R=P.uniforms,b=0,D=16;for(let L=0,z=R.length;L<z;L++){let E=Array.isArray(R[L])?R[L]:[R[L]];for(let T=0,F=E.length;T<F;T++){let k=E[T],W=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,st=W.length;Y<st;Y++){let et=W[Y],lt=w(et),tt=b%D,mt=tt%lt.boundary,ot=tt+mt;b+=mt,ot!==0&&D-ot<lt.storage&&(b+=D-ot),k.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=lt.storage}}}let C=b%D;return C>0&&(b+=D-C),P.__size=b,P.__cache={},this}function w(P){let R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function _(P){let R=P.target;R.removeEventListener("dispose",_);let b=a.indexOf(R.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(let P in s)i.deleteBuffer(s[P]);a=[],s={},r={}}return{bind:h,update:c,dispose:p}}var Wr=class{constructor(t={}){let{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=new Uint32Array(4),w=new Int32Array(4),_=null,p=null,P=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,D=!1;this._outputColorSpace=sn;let C=0,L=0,z=null,E=-1,T=null,F=new Ce,k=new Ce,W=null,Y=new Zt(0),st=0,et=e.width,lt=e.height,tt=1,mt=null,ot=null,At=new Ce(0,0,et,lt),Bt=new Ce(0,0,et,lt),le=!1,qt=new Pr,de=!1,Q=!1,rt=new Se,J=new O,Gt=new Ce,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Ue(){return z===null?tt:1}let U=n;function ae(S,G){return e.getContext(S,G)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){let G="webgl2";if(U=ae(G,S),U===null)throw ae(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Lt,kt,wt,Kt,Pt,Z,yt,Dt,A,x,V,j,it,K,Tt,ft,xt,Nt,ht,St,Wt,Ft,_t,jt;function B(){Lt=new m_(U),Lt.init(),Ft=new qx(U,Lt),kt=new l_(U,Lt,t,Ft),wt=new Wx(U,Lt),kt.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),Kt=new x_(U),Pt=new Px,Z=new Xx(U,Lt,wt,Pt,kt,Ft,Kt),yt=new h_(b),Dt=new p_(b),A=new Tm(U),_t=new a_(U,A),x=new g_(U,A,Kt,_t),V=new v_(U,x,A,Kt),ht=new y_(U,kt,Z),ft=new c_(Pt),j=new Ix(b,yt,Dt,Lt,kt,_t,ft),it=new $x(b,Pt),K=new Dx,Tt=new zx(Lt),Nt=new r_(b,yt,Dt,wt,V,m,h),xt=new Gx(b,V,kt),jt=new Kx(U,Kt,kt,wt),St=new o_(U,Lt,Kt),Wt=new __(U,Lt,Kt),Kt.programs=j.programs,b.capabilities=kt,b.extensions=Lt,b.properties=Pt,b.renderLists=K,b.shadowMap=xt,b.state=wt,b.info=Kt}B();let pt=new eu(b,U);this.xr=pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(et,lt,!1))},this.getSize=function(S){return S.set(et,lt)},this.setSize=function(S,G,X=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=S,lt=G,e.width=Math.floor(S*tt),e.height=Math.floor(G*tt),X===!0&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(et*tt,lt*tt).floor()},this.setDrawingBufferSize=function(S,G,X){et=S,lt=G,tt=X,e.width=Math.floor(S*X),e.height=Math.floor(G*X),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,G,X,$){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,G,X,$),wt.viewport(F.copy(At).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,G,X,$){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,G,X,$),wt.scissor(k.copy(Bt).multiplyScalar(tt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){wt.setScissorTest(le=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(S=!0,G=!0,X=!0){let $=0;if(S){let H=!1;if(z!==null){let ut=z.texture.format;H=ut===Ul||ut===Dl||ut===Ll}if(H){let ut=z.texture.type,Mt=ut===jn||ut===us||ut===Fr||ut===Br||ut===Rl||ut===Il,Rt=Nt.getClearColor(),Et=Nt.getClearAlpha(),Ht=Rt.r,Xt=Rt.g,zt=Rt.b;Mt?(v[0]=Ht,v[1]=Xt,v[2]=zt,v[3]=Et,U.clearBufferuiv(U.COLOR,0,v)):(w[0]=Ht,w[1]=Xt,w[2]=zt,w[3]=Et,U.clearBufferiv(U.COLOR,0,w))}else $|=U.COLOR_BUFFER_BIT}G&&($|=U.DEPTH_BUFFER_BIT),X&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Nt.dispose(),K.dispose(),Tt.dispose(),Pt.dispose(),yt.dispose(),Dt.dispose(),V.dispose(),_t.dispose(),jt.dispose(),j.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",me),pt.removeEventListener("sessionend",Gi),tn.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let S=Kt.autoReset,G=xt.enabled,X=xt.autoUpdate,$=xt.needsUpdate,H=xt.type;B(),Kt.autoReset=S,xt.enabled=G,xt.autoUpdate=X,xt.needsUpdate=$,xt.type=H}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){let G=S.target;G.removeEventListener("dispose",at),Ut(G)}function Ut(S){Jt(S),Pt.remove(S)}function Jt(S){let G=Pt.get(S).programs;G!==void 0&&(G.forEach(function(X){j.releaseProgram(X)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,X,$,H,ut){G===null&&(G=It);let Mt=H.isMesh&&H.matrixWorld.determinant()<0,Rt=_c(S,G,X,$,H);wt.setMaterial($,Mt);let Et=X.index,Ht=1;if($.wireframe===!0){if(Et=x.getWireframeAttribute(X),Et===void 0)return;Ht=2}let Xt=X.drawRange,zt=X.attributes.position,ce=Xt.start*Ht,ye=(Xt.start+Xt.count)*Ht;ut!==null&&(ce=Math.max(ce,ut.start*Ht),ye=Math.min(ye,(ut.start+ut.count)*Ht)),Et!==null?(ce=Math.max(ce,0),ye=Math.min(ye,Et.count)):zt!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,zt.count));let Ee=ye-ce;if(Ee<0||Ee===1/0)return;_t.setup(H,$,Rt,X,Et);let be,Te=St;if(Et!==null&&(be=A.get(Et),Te=Wt,Te.setIndex(be)),H.isMesh)$.wireframe===!0?(wt.setLineWidth($.wireframeLinewidth*Ue()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(H.isLine){let Vt=$.linewidth;Vt===void 0&&(Vt=1),wt.setLineWidth(Vt*Ue()),H.isLineSegments?Te.setMode(U.LINES):H.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else H.isPoints?Te.setMode(U.POINTS):H.isSprite&&Te.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Vt=H._multiDrawStarts,Ie=H._multiDrawCounts,fe=H._multiDrawCount,an=Et?A.get(Et).bytesPerElement:1,yi=Pt.get($).currentProgram.getUniforms();for(let on=0;on<fe;on++)yi.setValue(U,"_gl_DrawID",on),Te.render(Vt[on]/an,Ie[on])}else if(H.isInstancedMesh)Te.renderInstances(ce,Ee,H.count);else if(X.isInstancedBufferGeometry){let Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,Vt);Te.renderInstances(ce,Ee,Ie)}else Te.render(ce,Ee)};function Me(S,G,X){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,Wi(S,G,X),S.side=Di,S.needsUpdate=!0,Wi(S,G,X),S.side=Qe):Wi(S,G,X)}this.compile=function(S,G,X=null){X===null&&(X=S),p=Tt.get(X),p.init(G),R.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let $=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ut=H.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){let Rt=ut[Mt];Me(Rt,X,H),$.add(Rt)}else Me(ut,X,H),$.add(ut)}),p=R.pop(),$},this.compileAsync=function(S,G,X=null){let $=this.compile(S,G,X);return new Promise(H=>{function ut(){if($.forEach(function(Mt){Pt.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){H(S);return}setTimeout(ut,10)}Lt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let _e=null;function vn(S){_e&&_e(S)}function me(){tn.stop()}function Gi(){tn.start()}let tn=new Pf;tn.setAnimationLoop(vn),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(S){_e=S,pt.setAnimationLoop(S),S===null?tn.stop():tn.start()},pt.addEventListener("sessionstart",me),pt.addEventListener("sessionend",Gi),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,G,z),p=Tt.get(S,R.length),p.init(G),R.push(p),rt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),qt.setFromProjectionMatrix(rt,Zn,G.reversedDepth),Q=this.localClippingEnabled,de=ft.init(this.clippingPlanes,Q),_=K.get(S,P.length),_.init(),P.push(_),pt.enabled===!0&&pt.isPresenting===!0){let ut=b.xr.getDepthSensingMesh();ut!==null&&Ln(ut,G,-1/0,b.sortObjects)}Ln(S,G,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(mt,ot),re=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,re&&Nt.addToRenderList(_,S),this.info.render.frame++,de===!0&&ft.beginShadows();let X=p.state.shadowsArray;xt.render(X,S,G),de===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=_.opaque,H=_.transmissive;if(p.setupLights(),G.isArrayCamera){let ut=G.cameras;if(H.length>0)for(let Mt=0,Rt=ut.length;Mt<Rt;Mt++){let Et=ut[Mt];ps($,H,S,Et)}re&&Nt.render(S);for(let Mt=0,Rt=ut.length;Mt<Rt;Mt++){let Et=ut[Mt];Hi(_,S,Et,Et.viewport)}}else H.length>0&&ps($,H,S,G),re&&Nt.render(S),Hi(_,S,G);z!==null&&L===0&&(Z.updateMultisampleRenderTarget(z),Z.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(b,S,G),_t.resetDefaultState(),E=-1,T=null,R.pop(),R.length>0?(p=R[R.length-1],de===!0&&ft.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function Ln(S,G,X,$){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||qt.intersectsSprite(S)){$&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(rt);let Mt=V.update(S),Rt=S.material;Rt.visible&&_.push(S,Mt,Rt,X,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||qt.intersectsObject(S))){let Mt=V.update(S),Rt=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Gt.copy(Mt.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(rt)),Array.isArray(Rt)){let Et=Mt.groups;for(let Ht=0,Xt=Et.length;Ht<Xt;Ht++){let zt=Et[Ht],ce=Rt[zt.materialIndex];ce&&ce.visible&&_.push(S,Mt,ce,X,Gt.z,zt)}}else Rt.visible&&_.push(S,Mt,Rt,X,Gt.z,null)}}let ut=S.children;for(let Mt=0,Rt=ut.length;Mt<Rt;Mt++)Ln(ut[Mt],G,X,$)}function Hi(S,G,X,$){let H=S.opaque,ut=S.transmissive,Mt=S.transparent;p.setupLightsView(X),de===!0&&ft.setGlobalState(b.clippingPlanes,X),$&&wt.viewport(F.copy($)),H.length>0&&_i(H,G,X),ut.length>0&&_i(ut,G,X),Mt.length>0&&_i(Mt,G,X),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ps(S,G,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ci(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Or:jn,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));let ut=p.state.transmissionRenderTarget[$.id],Mt=$.viewport||F;ut.setSize(Mt.z*b.transmissionResolutionScale,Mt.w*b.transmissionResolutionScale);let Rt=b.getRenderTarget(),Et=b.getActiveCubeFace(),Ht=b.getActiveMipmapLevel();b.setRenderTarget(ut),b.getClearColor(Y),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),re&&Nt.render(X);let Xt=b.toneMapping;b.toneMapping=zi;let zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),de===!0&&ft.setGlobalState(b.clippingPlanes,$),_i(S,X,$),Z.updateMultisampleRenderTarget(ut),Z.updateRenderTargetMipmap(ut),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let ye=0,Ee=G.length;ye<Ee;ye++){let be=G[ye],Te=be.object,Vt=be.geometry,Ie=be.material,fe=be.group;if(Ie.side===Qe&&Te.layers.test($.layers)){let an=Ie.side;Ie.side=yn,Ie.needsUpdate=!0,Xa(Te,X,$,Vt,Ie,fe),Ie.side=an,Ie.needsUpdate=!0,ce=!0}}ce===!0&&(Z.updateMultisampleRenderTarget(ut),Z.updateRenderTargetMipmap(ut))}b.setRenderTarget(Rt,Et,Ht),b.setClearColor(Y,st),zt!==void 0&&($.viewport=zt),b.toneMapping=Xt}function _i(S,G,X){let $=G.isScene===!0?G.overrideMaterial:null;for(let H=0,ut=S.length;H<ut;H++){let Mt=S[H],Rt=Mt.object,Et=Mt.geometry,Ht=Mt.group,Xt=Mt.material;Xt.allowOverride===!0&&$!==null&&(Xt=$),Rt.layers.test(X.layers)&&Xa(Rt,G,X,Et,Xt,Ht)}}function Xa(S,G,X,$,H,ut){S.onBeforeRender(b,G,X,$,H,ut),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(b,G,X,$,S,ut),H.transparent===!0&&H.side===Qe&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,b.renderBufferDirect(X,G,$,H,S,ut),H.side=Di,H.needsUpdate=!0,b.renderBufferDirect(X,G,$,H,S,ut),H.side=Qe):b.renderBufferDirect(X,G,$,H,S,ut),S.onAfterRender(b,G,X,$,H,ut)}function Wi(S,G,X){G.isScene!==!0&&(G=It);let $=Pt.get(S),H=p.state.lights,ut=p.state.shadowsArray,Mt=H.state.version,Rt=j.getParameters(S,H.state,ut,G,X),Et=j.getProgramCacheKey(Rt),Ht=$.programs;$.environment=S.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(S.isMeshStandardMaterial?Dt:yt).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",at),Ht=new Map,$.programs=Ht);let Xt=Ht.get(Et);if(Xt!==void 0){if($.currentProgram===Xt&&$.lightsStateVersion===Mt)return pn(S,Rt),Xt}else Rt.uniforms=j.getUniforms(S),S.onBeforeCompile(Rt,b),Xt=j.acquireProgram(Rt,Et),Ht.set(Et,Xt),$.uniforms=Rt.uniforms;let zt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=ft.uniform),pn(S,Rt),$.needsLights=$s(S),$.lightsStateVersion=Mt,$.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Xt,$.uniformsList=null,Xt}function Mn(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=Hr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function pn(S,G){let X=Pt.get(S);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.batchingColor=G.batchingColor,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.instancingMorph=G.instancingMorph,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function _c(S,G,X,$,H){G.isScene!==!0&&(G=It),Z.resetTextureUnits();let ut=G.fog,Mt=$.isMeshStandardMaterial?G.environment:null,Rt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Us,Et=($.isMeshStandardMaterial?Dt:yt).get($.envMap||Mt),Ht=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),zt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,ye=!!X.morphAttributes.color,Ee=zi;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ee=b.toneMapping);let be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Te=be!==void 0?be.length:0,Vt=Pt.get($),Ie=p.state.lights;if(de===!0&&(Q===!0||S!==T)){let en=S===T&&$.id===E;ft.setState($,S,en)}let fe=!1;$.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ie.state.version||Vt.outputColorSpace!==Rt||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==Et||$.fog===!0&&Vt.fog!==ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ft.numPlanes||Vt.numIntersection!==ft.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Xt||Vt.morphTargets!==zt||Vt.morphNormals!==ce||Vt.morphColors!==ye||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==Te)&&(fe=!0):(fe=!0,Vt.__version=$.version);let an=Vt.currentProgram;fe===!0&&(an=Wi($,G,H));let yi=!1,on=!1,Xi=!1,Ae=an.getUniforms(),Xe=Vt.uniforms;if(wt.useProgram(an.program)&&(yi=!0,on=!0,Xi=!0),$.id!==E&&(E=$.id,on=!0),yi||T!==S){wt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ae.setValue(U,"projectionMatrix",S.projectionMatrix),Ae.setValue(U,"viewMatrix",S.matrixWorldInverse);let Fe=Ae.map.cameraPosition;Fe!==void 0&&Fe.setValue(U,J.setFromMatrixPosition(S.matrixWorld)),kt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,on=!0,Xi=!0)}if(H.isSkinnedMesh){Ae.setOptional(U,H,"bindMatrix"),Ae.setOptional(U,H,"bindMatrixInverse");let en=H.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ae.setValue(U,"boneTexture",en.boneTexture,Z))}H.isBatchedMesh&&(Ae.setOptional(U,H,"batchingTexture"),Ae.setValue(U,"batchingTexture",H._matricesTexture,Z),Ae.setOptional(U,H,"batchingIdTexture"),Ae.setValue(U,"batchingIdTexture",H._indirectTexture,Z),Ae.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Ae.setValue(U,"batchingColorTexture",H._colorsTexture,Z));let ln=X.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ht.update(H,X,an),(on||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Ae.setValue(U,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xe.envMap.value=Et,Xe.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Xe.envMapIntensity.value=G.environmentIntensity),on&&(Ae.setValue(U,"toneMappingExposure",b.toneMappingExposure),Vt.needsLights&&xi(Xe,Xi),ut&&$.fog===!0&&it.refreshFogUniforms(Xe,ut),it.refreshMaterialUniforms(Xe,$,tt,lt,p.state.transmissionRenderTarget[S.id]),Hr.upload(U,Mn(Vt),Xe,Z)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hr.upload(U,Mn(Vt),Xe,Z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(U,"center",H.center),Ae.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ae.setValue(U,"normalMatrix",H.normalMatrix),Ae.setValue(U,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let en=$.uniformsGroups;for(let Fe=0,Ks=en.length;Fe<Ks;Fe++){let Ne=en[Fe];jt.update(Ne,an),jt.bind(Ne,an)}}return an}function xi(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function $s(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,G,X){let $=Pt.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Pt.get(S.texture).__webglTexture=G,Pt.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,G){let X=Pt.get(S);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0};let qa=U.createFramebuffer();this.setRenderTarget=function(S,G=0,X=0){z=S,C=G,L=X;let $=!0,H=null,ut=!1,Mt=!1;if(S){let Et=Pt.get(S);if(Et.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Et.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(Et.__hasExternalTextures)Z.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let zt=S.depthTexture;if(Et.__boundDepthTexture!==zt){if(zt!==null&&Pt.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);let Xt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?H=Xt[G][X]:H=Xt[G],ut=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?H=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[X]:H=Xt,F.copy(S.viewport),k.copy(S.scissor),W=S.scissorTest}else F.copy(At).multiplyScalar(tt).floor(),k.copy(Bt).multiplyScalar(tt).floor(),W=le;if(X!==0&&(H=qa),wt.bindFramebuffer(U.FRAMEBUFFER,H)&&$&&wt.drawBuffers(S,H),wt.viewport(F),wt.scissor(k),wt.setScissorTest(W),ut){let Et=Pt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,X)}else if(Mt){let Et=G;for(let Ht=0;Ht<S.textures.length;Ht++){let Xt=Pt.get(S.textures[Ht]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,X,Et)}}else if(S!==null&&X!==0){let Et=Pt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(S,G,X,$,H,ut,Mt,Rt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){wt.bindFramebuffer(U.FRAMEBUFFER,Et);try{let Ht=S.textures[Rt],Xt=Ht.format,zt=Ht.type;if(!kt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-$&&X>=0&&X<=S.height-H&&(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Rt),U.readPixels(G,X,$,H,Ft.convert(Xt),Ft.convert(zt),ut))}finally{let Ht=z!==null?Pt.get(z).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(S,G,X,$,H,ut,Mt,Rt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(G>=0&&G<=S.width-$&&X>=0&&X<=S.height-H){wt.bindFramebuffer(U.FRAMEBUFFER,Et);let Ht=S.textures[Rt],Xt=Ht.format,zt=Ht.type;if(!kt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,ut.byteLength,U.STREAM_READ),S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Rt),U.readPixels(G,X,$,H,Ft.convert(Xt),Ft.convert(zt),0);let ye=z!==null?Pt.get(z).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,ye);let Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sf(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ut),U.deleteBuffer(ce),U.deleteSync(Ee),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,G=null,X=0){let $=Math.pow(2,-X),H=Math.floor(S.image.width*$),ut=Math.floor(S.image.height*$),Mt=G!==null?G.x:0,Rt=G!==null?G.y:0;Z.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Mt,Rt,H,ut),wt.unbindTexture()};let Ya=U.createFramebuffer(),Za=U.createFramebuffer();this.copyTextureToTexture=function(S,G,X=null,$=null,H=0,ut=null){ut===null&&(H!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=H,H=0):ut=0);let Mt,Rt,Et,Ht,Xt,zt,ce,ye,Ee,be=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(X!==null)Mt=X.max.x-X.min.x,Rt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Ht=X.min.x,Xt=X.min.y,zt=X.isBox3?X.min.z:0;else{let ln=Math.pow(2,-H);Mt=Math.floor(be.width*ln),Rt=Math.floor(be.height*ln),S.isDataArrayTexture?Et=be.depth:S.isData3DTexture?Et=Math.floor(be.depth*ln):Et=1,Ht=0,Xt=0,zt=0}$!==null?(ce=$.x,ye=$.y,Ee=$.z):(ce=0,ye=0,Ee=0);let Te=Ft.convert(G.format),Vt=Ft.convert(G.type),Ie;G.isData3DTexture?(Z.setTexture3D(G,0),Ie=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Z.setTexture2DArray(G,0),Ie=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(G,0),Ie=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);let fe=U.getParameter(U.UNPACK_ROW_LENGTH),an=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yi=U.getParameter(U.UNPACK_SKIP_PIXELS),on=U.getParameter(U.UNPACK_SKIP_ROWS),Xi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt);let Ae=S.isDataArrayTexture||S.isData3DTexture,Xe=G.isDataArrayTexture||G.isData3DTexture;if(S.isDepthTexture){let ln=Pt.get(S),en=Pt.get(G),Fe=Pt.get(ln.__renderTarget),Ks=Pt.get(en.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Fe.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let Ne=0;Ne<Et;Ne++)Ae&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,H,zt+Ne),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(G).__webglTexture,ut,Ee+Ne)),U.blitFramebuffer(Ht,Xt,Mt,Rt,ce,ye,Mt,Rt,U.DEPTH_BUFFER_BIT,U.NEAREST);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Pt.has(S)){let ln=Pt.get(S),en=Pt.get(G);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Ya),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Za);for(let Fe=0;Fe<Et;Fe++)Ae?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,H,zt+Fe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,H),Xe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,ut,Ee+Fe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,ut),H!==0?U.blitFramebuffer(Ht,Xt,Mt,Rt,ce,ye,Mt,Rt,U.COLOR_BUFFER_BIT,U.NEAREST):Xe?U.copyTexSubImage3D(Ie,ut,ce,ye,Ee+Fe,Ht,Xt,Mt,Rt):U.copyTexSubImage2D(Ie,ut,ce,ye,Ht,Xt,Mt,Rt);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Ie,ut,ce,ye,Ee,Mt,Rt,Et,Te,Vt,be.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,ut,ce,ye,Ee,Mt,Rt,Et,Te,be.data):U.texSubImage3D(Ie,ut,ce,ye,Ee,Mt,Rt,Et,Te,Vt,be):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ut,ce,ye,Mt,Rt,Te,Vt,be.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ut,ce,ye,be.width,be.height,Te,be.data):U.texSubImage2D(U.TEXTURE_2D,ut,ce,ye,Mt,Rt,Te,Vt,be);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,an),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yi),U.pixelStorei(U.UNPACK_SKIP_ROWS,on),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xi),ut===0&&G.generateMipmaps&&U.generateMipmap(Ie),wt.unbindTexture()},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){C=0,L=0,z=null,wt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Js=.55,pc=new O(Math.cos(Js),0,-Math.sin(Js)),Of=new O(Math.sin(Js),0,Math.cos(Js)),ue={grass:"#69ae72",light:"#90be7c",earth:"#2b6946",water:"#3a6690",path:"#fff5de",ivory:"#fffdf9",coral:"#f2534a",sun:"#ffc83d",leaf:"#2ebe6a",ink:"#1c2744",rock:"#9b9a77",wood:"#8e603b",deep:"#1d6b49"},iu={piscina:[0,0],toboagua:[-.5,-2.7],bilheteria:[.5,2.8],estacionamento:[-2.8,1.6],lanchonete:[2.8,.1],enfermaria:[-2.7,-1.3]},Bf=(i,t)=>[i*pc.x+t*Of.x,i*pc.z+t*Of.z],Fn=.3;window.Parque={create(i,{lugares:t,onPick:e=()=>{},onFrame:n=()=>{},onError:s=()=>{}}){let r=new Fi,a=new Bi(-6,6,4,-4,.1,80),o=new Wr({antialias:!0,alpha:!1});o.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2)),o.outputColorSpace=sn,o.setClearColor(ue.water);let h=o.domElement;h.className="park-canvas",h.setAttribute("role","img"),h.setAttribute("aria-label","Mapa do parque aqu\xE1tico em tr\xEAs dimens\xF5es. Os lugares tamb\xE9m est\xE3o na lista abaixo do mapa."),i.prepend(h),r.add(new zs("#fffdf9","#245b39",1.8));let c=new ks("#fff1d0",2.2);c.position.set(-4,8,5),r.add(c);let u=new Map,d=Z=>(u.has(Z)||u.set(Z,new fi({color:Z,flatShading:!0})),u.get(Z)),f=new ui(1,1,1),m=new di(.5,1,6),v=new He(.5,.5,1,8),w=new He(.5,.5,1,3),_=new Fs(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),p=new He(.58,.58,1,6,1,!0),P=new Map,R=new De;function b(Z,yt,Dt,A,x,V=1,j=1,it=1,K=0,Tt=0,ft=0){let xt=Z.uuid+yt;P.has(xt)||P.set(xt,{g:Z,color:yt,items:[]}),P.get(xt).items.push([Dt,A,x,V,j,it,ft,K,Tt])}let D=[],C=(Z,yt,[Dt,A],[x,V],j)=>{let it=x-Dt,K=V-A,Tt=Math.max(0,Math.min(1,((Z-Dt)*it+(yt-A)*K)/(it*it+K*K)));return Math.hypot(Z-Dt-it*Tt,yt-A-K*Tt)<j},L=Z=>Bf(...iu[Z]),z=[["bilheteria","piscina"],["piscina","lanchonete"],["piscina","enfermaria"],["bilheteria","estacionamento"]].map(([Z,yt])=>[L(Z),L(yt)]);for(let Z=-6;Z<=6;Z++)for(let yt=-6;yt<=6;yt++){let Dt=Math.max(Math.abs(Z),Math.abs(yt),Math.abs(Z+yt));if(Dt>5)continue;let A=Math.sqrt(3)*.6*(Z+yt/2),x=.9*yt,V=Dt<=4,j=V&&z.some(([K,Tt])=>C(A,x,K,Tt,.5)),it=V?Fn:.1;D.push({x:A,z:x,h:it,land:V}),b(_,V?j?ue.path:(Z*7+yt*3)%5===0?ue.grass:ue.light:ue.water,A,it,x),V&&b(p,ue.earth,A,it/2,x,1,it,1)}let E=new Re(new xn(400,400).rotateX(-Math.PI/2),d(ue.water));E.position.y=.05,r.add(E);let T=Js,F=(Z,yt,Dt,A)=>{let[x,V]=iu[Z],[j,it]=Bf(x+yt,V+Dt);return[j,Fn+A,it]},k=(Z,yt,Dt,A,x,V,j,it,K,Tt=0,ft=0,xt=0)=>b(yt,Dt,...F(Z,A,x,V),j,it,K,T+Tt,ft,xt);k("piscina",f,ue.ivory,0,0,.03,2.6,.06,1.7),k("piscina",f,ue.water,0,0,.065,2.3,.04,1.4),k("piscina",f,ue.ivory,.9,-.55,.12,.08,.2,.08),k("toboagua",f,ue.coral,0,0,.8,.5,1.6,.5),k("toboagua",f,ue.ivory,0,0,1.62,.8,.06,.8),k("toboagua",f,ue.sun,.3,.82,1.25,.32,.06,1.35,0,0,.55),k("toboagua",f,ue.sun,.3,1.65,.62,.32,.06,.74,0,0,.83),k("bilheteria",f,ue.ivory,0,0,.3,.9,.6,.6),k("bilheteria",w,ue.coral,0,0,.75,.55,.95,.55,0,Math.PI/2),k("bilheteria",f,ue.ink,0,.31,.36,.4,.2,.02),k("lanchonete",f,ue.ivory,0,0,.28,.9,.55,.7),k("lanchonete",f,ue.sun,0,.42,.62,1,.05,.4),k("lanchonete",v,ue.wood,.75,.6,.35,.04,.7,.04),k("lanchonete",m,ue.coral,.75,.6,.75,.9,.25,.9),k("estacionamento",f,ue.rock,0,0,.015,1.7,.03,1.3);for(let Z of[-.55,0,.55])k("estacionamento",f,ue.ivory,Z,0,.035,.05,.01,1);k("estacionamento",f,ue.coral,-.28,-.1,.13,.38,.2,.65),k("estacionamento",f,ue.sun,.28,.15,.13,.38,.2,.65),k("estacionamento",f,ue.ink,-.28,-.1,.26,.3,.08,.3),k("estacionamento",f,ue.ink,.28,.15,.26,.3,.08,.3),k("enfermaria",f,ue.ivory,0,0,.33,.9,.65,.8),k("enfermaria",f,ue.coral,0,.41,.45,.36,.1,.02),k("enfermaria",f,ue.coral,0,.41,.45,.1,.36,.02),k("enfermaria",f,ue.ink,0,0,.68,.95,.04,.85);for(let Z of D)!Z.land||Math.hypot(Z.x,Z.z)<3.6||Object.keys(iu).some(yt=>{let[Dt,A]=L(yt);return Math.hypot(Z.x-Dt,Z.z-A)<1.3})||Math.round(Z.x*3+Z.z*5)&1||(b(v,ue.wood,Z.x,Fn+.15,Z.z,.08,.3,.08),b(m,ue.deep,Z.x,Fn+.55,Z.z,.5,.7,.5));for(let{g:Z,color:yt,items:Dt}of P.values()){let A=new ze(Z,d(yt),Dt.length);Dt.forEach(([x,V,j,it,K,Tt,ft,xt,Nt],ht)=>{R.position.set(x,V,j),R.scale.set(it,K,Tt),R.rotation.set(ft,xt,Nt,"YXZ"),R.updateMatrix(),A.setMatrixAt(ht,R.matrix)}),A.frustumCulled=!1,r.add(A)}let W=t.map(Z=>Z.id),Y=new ze(new Os(.75,.06,5,28).rotateX(Math.PI/2),new Tn,W.length),st=new ze(new xn(.34,.22),new fi({color:ue.leaf,side:Qe}),W.length),et=new ze(v,d(ue.ink),W.length);[Y,st,et].forEach(Z=>{Z.frustumCulled=!1,r.add(Z)});let lt={piscina:.4,toboagua:1.9,bilheteria:1.2,estacionamento:.5,lanchonete:1,enfermaria:.9},tt=[];W.forEach((Z,yt)=>{let[Dt,A]=L(Z),x=new Re(new He(.9,.9,lt[Z]+.4,8),new Tn({visible:!1}));x.position.set(Dt,Fn+(lt[Z]+.4)/2,A),x.userData.lugar=yt,r.add(x),tt.push(x)});let mt=W.map(()=>({feito:!1})),ot=-1,At=!1,Bt=!1,le=0,qt=new Se().makeScale(0,0,0),de=new Zt;function Q(){W.forEach((Z,yt)=>{let[Dt,A]=L(Z),x=mt[yt];R.position.set(Dt,Fn+.02,A),R.rotation.set(0,0,0),R.scale.setScalar(yt===ot?1.15:1),R.updateMatrix(),Y.setMatrixAt(yt,R.matrix),Y.setColorAt(yt,de.set(yt===ot?ue.sun:x.feito?ue.leaf:ue.ivory));let[V,,j]=F(Z,.55,-.35,0);R.scale.set(.03,.75,.03),R.position.set(V,Fn+lt[Z]*.5+.38,j),R.updateMatrix(),et.setMatrixAt(yt,x.feito?R.matrix:qt),R.scale.set(1,1,1),R.position.set(V+pc.x*.17,Fn+lt[Z]*.5+.64,j+pc.z*.17),R.rotation.set(0,T,0),R.updateMatrix(),st.setMatrixAt(yt,x.feito?R.matrix:qt)}),Y.instanceMatrix.needsUpdate=et.instanceMatrix.needsUpdate=st.instanceMatrix.needsUpdate=!0,Y.instanceColor.needsUpdate=!0}let rt=new O,J=new O,Gt=[];for(let Z of D)Z.land&&Gt.push(new O(Z.x,Fn,Z.z));W.forEach(Z=>{let[yt,Dt]=L(Z);Gt.push(new O(yt,Fn+lt[Z]+.5,Dt))});let It=4;function re(Z){a.position.set(Math.sin(Js)*10,10,Math.cos(Js)*10),a.lookAt(0,.45,0),a.updateMatrixWorld(),J.setFromMatrixColumn(a.matrixWorld,0),rt.setFromMatrixColumn(a.matrixWorld,1);let yt=1e9,Dt=-1e9,A=1e9,x=-1e9;for(let j of Gt){let it=j.dot(J),K=j.dot(rt);yt=Math.min(yt,it),Dt=Math.max(Dt,it),A=Math.min(A,K),x=Math.max(x,K)}let V=Z.width/Z.height;It=Math.max((x-A)/2,(Dt-yt)/2/V)*1.06+.25,a.position.addScaledVector(J,(yt+Dt)/2).addScaledVector(rt,(A+x)/2-new O(0,.45,0).dot(rt)),a.left=-It*V,a.right=It*V,a.top=It,a.bottom=-It,a.updateProjectionMatrix(),a.updateMatrixWorld()}let Ue=()=>{let Z=i.getBoundingClientRect();return{width:Math.max(1,Z.width),height:Math.max(1,Z.height)}},U=(Z,yt)=>{let Dt=Z.clone().project(a);return{x:(Dt.x+1)/2*yt.width,y:(1-Dt.y)/2*yt.height}};function ae(Z=Ue()){return{width:Z.width,height:Z.height,lugares:W.map(yt=>{let[Dt,A]=L(yt);return{id:yt,...U(new O(Dt,Fn+lt[yt]+.15,A),Z),base:U(new O(Dt,Fn,A),Z)}})}}function Lt(){if(At||Bt||i.hidden)return;let Z=Ue();re(Z),Q(),o.render(r,a),le++,n(ae(Z))}function kt(){if(Bt)return;let Z=Ue();o.setSize(Z.width,Z.height,!1),Lt()}let wt=new Vs,Kt={x:0,y:0};h.addEventListener("pointerdown",Z=>{Kt.x=Z.clientX,Kt.y=Z.clientY}),h.addEventListener("pointerup",Z=>{if(Math.hypot(Z.clientX-Kt.x,Z.clientY-Kt.y)>8)return;let yt=h.getBoundingClientRect();wt.setFromCamera(new Qt((Z.clientX-yt.left)/yt.width*2-1,-(Z.clientY-yt.top)/yt.height*2+1),a);let Dt=wt.intersectObjects(tt)[0];Dt&&e(Dt.object.userData.lugar)}),h.addEventListener("webglcontextlost",Z=>{Z.preventDefault(),At=!0,s("O mapa 3D do parque foi interrompido. Use a lista de lugares.")});let Pt=new ResizeObserver(kt);return Pt.observe(i),kt(),{render:Lt,anchors:ae,paint(Z){mt=Z.map((yt,Dt)=>({...mt[Dt],...yt})),Lt()},select(Z){ot=Z,Lt()},state:()=>({ready:!0,frames:le,selected:ot,states:mt.map(Z=>({...Z})),calls:o.info.render.calls,triangles:o.info.render.triangles,lost:At,half:It}),raw:()=>({renderer:o,scene:r,camera:a,targets:tt}),dispose(){Bt=!0,Pt.disconnect(),r.traverse(Z=>{Z.geometry?.dispose()}),u.forEach(Z=>Z.dispose()),o.dispose(),h.remove()}}}};ee.tonemapping_pars_fragment=ee.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }","vec3 CustomToneMapping( vec3 color ) { vec3 c=color*toneMappingExposure;c=mix(c,.85+.15*(1.-exp(-(c-.85)/.15)),step(.85,c));float l=dot(c,vec3(.2126,.7152,.0722));return clamp(c+mix(vec3(-.008,0.,.016)*smoothstep(0.,.3,l),vec3(.008,.004,-.006),l),0.,1.); }");var su={leaf:"#2ebe6a",coral:"#f2534a",sun:"#ffc83d",ink:"#1c2744"},wn=.55,fs=[Math.cos(wn),-Math.sin(wn)],gi=[Math.sin(wn),Math.cos(wn)],ds=(i,t)=>[i*fs[0]+t*gi[0],i*fs[1]+t*gi[1]],Vi=(i,t)=>[i*fs[0]+t*fs[1],i*gi[0]+t*gi[1]],Gf=2.45,jx=.42,gc=.22,ru=[0,.08,.16,.36,.6,.88,1.2],rn={s:[-20,20],t:[-11,12]},qr=[Math.cos(gc),-Math.sin(gc)],zf=[Math.sin(gc),Math.cos(gc)],Hf=i=>{let t=Math.max(0,Math.min(6,Math.floor(i))),e=Math.min(6,t+1),n=Math.max(0,Math.min(1,i-t));return ru[t]+(ru[e]-ru[t])*n},Qx=Array.from({length:37},(i,t)=>{let e=(t-12)/2,n=(e-3)*Gf,s=t%2?jx*(Math.floor(e)&1?-1:1):0;return[...ds(n*qr[0]+s*zf[0],n*qr[1]+s*zf[1]),.35+Hf(e)]}),ty={bino:[0,3,-.2],teo:[6,-2.6,.3]},kf=2.3,ey=.45,Vf=1.55,mc=.09,ny=i=>.22+.24*Math.sqrt(i),We=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};window.Bosque={create(i,{onSelect:t,onError:e,onView:n=()=>{},onFrame:s=()=>{},onWalk:r=()=>{}}){let a=new Fi,o=new Bi(-6,6,4,-4,.1,80),h=new Wr({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2)),h.toneMapping=Tl,h.info.autoReset=!1;let c=h.domElement;c.style.removeProperty("display"),c.setAttribute("role","img"),c.setAttribute("aria-label","Bosque em tr\xEAs dimens\xF5es com sete paradas numa trilha. Use tamb\xE9m a lista de paradas."),i.prepend(c),a.add(new zs("#fffdf9","#245b39",1.8));let u=new ks("#fff1d0",2.2);u.position.set(-4,8,5),a.add(u);let d={uT:{value:0},uAmp:{value:0},uGust:{value:new Ce(0,0,0,9)},uBloom:{value:new Ce(0,0,0,9)},uCloud:{value:[0,1,2].map(()=>new O(0,-99,1))},uLake:{value:new Qt(0,-99)},uFog:{value:new Zt("#dfe8e4")}},f=`uniform float uT,uAmp,uK;uniform vec4 uGust,uBloom;varying vec3 vWorld;const vec2 WD=vec2(.85,-.52);
vec2 windAt(vec3 p,float h){float b=.5+.5*sin(dot(p.xz,WD)*.8-uT*1.7);vec2 g=p.xz-uGust.xy;float d=length(g),gu=uGust.z*exp(-d*d*.25)*(.55+.45*sin(d*2.4-uGust.w*6.));
 return (WD*uAmp*(.25+.75*b*b+.18*sin(uT*2.9+p.x*1.9+p.z*1.3))+(d>.001?g/d:WD)*gu)*h*uK;}
`,m=`uniform float uT;uniform vec3 uCloud[3],uFog;uniform vec2 uLake;varying vec3 vWorld;
float cloudShade(vec2 p){float s=1.;for(int i=0;i<3;i++){vec2 q=(p-uCloud[i].xy)/uCloud[i].z;s-=.14*(1.-smoothstep(.45,1.,length(q*vec2(1.,1.35))));}return s;}
vec3 glint(vec3 p){float a=sin(dot(p.xz,vec2(.5,.866))*9.-uT*2.4+sin(dot(p.xz,vec2(.866,-.5))*3.7+uT*.8)*1.6);
 if(length(p.xz-uLake)<1.2)a=sin(dot(p.xz,vec2(.8,.6))*8.+uT*1.2)*sin(dot(p.xz,vec2(-.6,.8))*7.-uT*.9)*1.15;return vec3(.2,.24,.28)*smoothstep(.8,1.,a);}
`,v={wind:"attribute float aGround;",bloom:"attribute float aGround;",sway:"attribute float aSway;",critter:"attribute float aWing;attribute vec3 aFly;",particle:"attribute float aGlow;varying float vGlow;"},w={bloom:"{vec3 ip=instanceMatrix[3].xyz;float k=clamp((uBloom.w-length(ip.xz-uBloom.xy)*.25)/.7,0.,1.);transformed*=1.+uBloom.z*.9*sin(k*3.14159);}",flag:"transformed.z+=sin(position.x*21.-uT*6.+float(gl_InstanceID)*1.9)*.035*(position.x+.15)/.3*uAmp;",critter:"{float f=sin(uT*aFly.z+aFly.y)*aFly.x;transformed.y+=abs(aWing)*f*.45;transformed.z*=1.-abs(aWing)*abs(f)*.3;}",particle:"vGlow=aGlow;"},_={wind:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",bloom:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",sway:"wp.xyz+=vec3(WD.x,.5,WD.y)*aSway*uAmp*uK*sin(uT*3.3+wp.x*7.+wp.z*5.);"},p={water:"outgoingLight+=glint(vWorld);","ground-water":"outgoingLight+=glint(vWorld)*step(vWorld.y,.2);",cloud:"outgoingLight=mix(outgoingLight/cloudShade(vWorld.xz),diffuseColor.rgb,.55);",glow:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.1,.65);",particle:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.15,vGlow*.8);"},P=`varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};
void RE_Direct_Lambert(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
 float w=floor((dot(geometryNormal,directLight.direction)*.5+.5)*4.+.5)/4.;reflectedLight.directDiffuse+=mix(directLight.color*vec3(.3,.34,.52),directLight.color,w)*BRDF_Lambert(material.diffuseColor);}
void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,R="{float fd=clamp((-vViewPosition.z-14.5)/9.,0.,1.);outgoingLight=mix(outgoingLight,uFog,max(fd*fd*.5,(1.-smoothstep(.1,.5,vWorld.y))*.14));}";function b(l,g="",y=1){return l.onBeforeCompile=M=>{Object.assign(M.uniforms,d,{uK:{value:y}}),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
`+f+(v[g]||"")).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(w[g]||"")).replace("#include <project_vertex>",`vec4 wp=vec4(transformed,1.);
#ifdef USE_INSTANCING
wp=instanceMatrix*wp;
#endif
wp=modelMatrix*wp;${_[g]||""}vWorld=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
`+m+(g==="particle"?"varying float vGlow;":"")).replace("#include <lights_lambert_pars_fragment>",P).replace("#include <opaque_fragment>","outgoingLight*=cloudShade(vWorld.xz);"+(p[g]||"")+R+`
#include <opaque_fragment>`)},l.customProgramCacheKey=()=>"vivo-"+g,l}let D=(l,g={})=>b(new fi({color:l,flatShading:!0,...g})),C={grass:"#69ae72",light:"#90be7c",high:"#51925d",earth:"#2b6946",rock:"#9b9a77",wood:"#8e603b",plank:"#bb8c52",leaf:"#1d6b49",leaf2:"#38935b",water:"#3a6690",path:"#fff5de",ivory:"#fffdf9",coral:"#f2534a",coralDeep:"#d63c38",sun:"#ffc83d",ink:"#1c2744"},L=Object.fromEntries(Object.entries(C).map(([l,g])=>[l,D(g)])),z=new ui(1,1,1),E=new Ur(.6,0),T=new He(.34,.34,.62,3);function F(l,g=.55,y=.7){let M=l.attributes.position,I=new Float32Array(M.count*3);l.computeBoundingBox();let{min:N,max:q}=l.boundingBox;for(let nt=0;nt<M.count;nt++)I.fill(g+(1-g)*ti.smoothstep(M.getY(nt),N.y,N.y+(q.y-N.y)*y),nt*3,nt*3+3);return l.setAttribute("color",new Ve(I,3)),l}let k=new Map,W=new De,Y=0,st=null,et=0,lt=new Map,tt=l=>(lt.has(l)||(l.computeBoundingBox(),lt.set(l,l.boundingBox)),lt.get(l));function mt(l,g,y,M,I,N=1,q=1,nt=1,dt=0,bt=0,Yt=0){let ie=l.uuid+g.uuid,pe=[y,M+Y,I,N,q,nt,Yt,dt,bt,et,st?.35+Y:null];k.has(ie)||k.set(ie,{g:l,m:g,items:[]}),k.get(ie).items.push(pe),st&&st.push(tt(l).clone().applyMatrix4(At(pe)))}function ot(l,g,y,M,I,N,q=L.wood,nt=0,dt=0,bt=0){mt(z,q,l,g,y,M,I,N,nt,dt,bt)}let At=([l,g,y,M,I,N,q,nt,dt])=>(W.position.set(l,g,y),W.scale.set(M,I,N),W.rotation.set(q,nt,dt),W.updateMatrix(),W.matrix);function Bt(l,g,y,M,I){let N=new ze(g,y,Math.max(1,M.length));return N.name=l,N.count=M.length,N.userData.items=M,M.forEach((q,nt)=>{N.setMatrixAt(nt,At(q)),I&&N.setColorAt(nt,new Zt(q[9]))}),N.frustumCulled=!1,a.add(N),N}function le(l,g,y="wind",M=I=>I[10]){return l.geometry.setAttribute("aGround",new Oi(Float32Array.from(l.userData.items,M),1)),b(l.material,y,g),l}let qt=new Da(Qx.map(([l,g,y])=>new O(l,y,g)),!1,"centripetal");qt.arcLengthDivisions=3600;let de=qt.getLengths(3600),Q=[0,1,2,3,4,5,6].map(l=>de[(l+6)*200]/de[3600]),rt=Array.from({length:601},(l,g)=>qt.getPointAt(g/600)),J=Q.map((l,g)=>{let y=qt.getPointAt(l),M=qt.getTangentAt(l);return{index:g,u:l,x:y.x,y:y.y,z:y.z,side:new O(-M.z,0,M.x).normalize()}}),Gt=[],It=Q[6]-Q[0],re=(l,g)=>{let y=1e9,M=0;for(let I=0;I<rt.length;I+=2){let N=Math.hypot(rt[I].x-l,rt[I].z-g);N<y&&(y=N,M=I)}return{d:y,p:rt[M],i:M}},Ue=rt.map((l,g)=>{let y=rt[Math.max(0,g-1)],M=rt[Math.min(600,g+1)];return .005+.6*Math.abs(M.y-y.y)/Math.hypot(M.x-y.x,M.z-y.z)}),U=(l,g,y)=>Vi(l,g)[1]<Vi(y.x,y.z)[1],ae=[.5,Math.sqrt(3)/2],Lt=[Math.sqrt(3)/2,-.5],kt=J[2].x*Lt[0]+J[2].z*Lt[1],wt=(l,g)=>Math.abs(l*Lt[0]+g*Lt[1]-kt),Kt=Object.fromEntries(Object.entries(ty).map(([l,[g,y,M]])=>{let I=qt.getPointAt(Q[g]),[N,q]=Vi(I.x,I.z),[nt,dt]=ds(N+M,q-y);return[l,new O(nt,.35,dt)]}));Kt.pipa=new O(J[2].x-ae[0]*kf,.35,J[2].z-ae[1]*kf);let Pt=["bino","pipa","teo"];for(let l of Pt){let g=Kt[l];delete Kt[l],Kt[l]=g}let Z=[...J,...Object.values(Kt)],[yt,Dt]=Vi(J[0].x,J[0].z),[A,x]=ds(yt-2.4,Dt-2.7),V=J[0].y+.48,j=(l,g)=>Math.hypot(l-A,g-x)<1.05,it=(l,g,y,M)=>{let I=J[l],N=qt.getTangentAt(I.u),q=Math.atan2(-N.z,N.x);return{x:I.x+g*Math.cos(q)+y*Math.sin(q),z:I.z-g*Math.sin(q)+y*Math.cos(q),r:M,y:I.y}},K=[it(1,.35,-1.75,1.7),it(6,-.6,-1.2,1.45)],Tt=Math.sqrt(3)*.58,ft=(kt-.87*(Math.round(kt/.87-.5)+.5))/Lt[0],xt=[],Nt=new Map,ht=(l,g)=>{if(wt(l,g)<.5)return .13;if(j(l,g))return V;let y=K.find(dt=>Math.hypot(l-dt.x,g-dt.z)<dt.r);if(y)return y.y;let{d:M,p:I,i:N}=re(l,g),q=I.y;if(M<1)return q-Ue[N];if(U(l,g,I))return M<1.9?q:M<4.6?q+.6:q+1.25;let nt=M<1.9?q:Math.max(.35,q-.55*Math.ceil((M-1.9)/1.5));return M>5&&We(Math.round(l),Math.round(g))<.3?Math.max(nt,.95):nt};for(let l=-40;l<=40;l++)for(let g=-40;g<=40;g++){let y=Tt*(g+l/2)+ft,M=.87*l,[I,N]=Vi(y,M);if(I<rn.s[0]-1||I>rn.s[1]+1||N<rn.t[0]-1||N>rn.t[1]+1)continue;let q={q:g,r:l,x:y,z:M,s:I,t:N,height:ht(y,M)};xt.push(q),Nt.set(g+","+l,q)}let St=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],Wt=[],Ft=[],_t=[],jt=(l,g)=>xt.reduce((y,M)=>(M.x-l)**2+(M.z-g)**2<(y.x-l)**2+(y.z-g)**2?M:y),B=(Q[1]-Q[0])/2,pt=l=>l<Q[1]+B?0:l<Q[3]+B?1:l<Q[4]+B?2:3,gt=[];for(let l of xt){let g=Math.min(...St.map(([nt,dt])=>Nt.get(l.q+nt+","+(l.r+dt))?.height??0)),{d:y,p:M,i:I}=re(l.x,l.z),N=l.height-M.y;l.u=I/600,l.land=pt(l.u),l.front=!U(l.x,l.z,M),l.d=y,l.field=l.land===2&&l.front&&y>1.55&&y<4.3&&Math.hypot(l.x-J[4].x,l.z-J[4].z)>1.4&&l.height>.2,l.field&&gt.push(l);let q=l.height<.2?C.water:l.field?"#d6c35f":N>1?C.high:N>.4||N<-.3&&l.height>.5?C.grass:C.light;l.lake=j(l.x,l.z),(l.lake?_t:Wt).push([l.x,l.height,l.z,1,1,1,0,0,0,l.lake?C.water:q]),g<l.height-.01&&Ft.push([l.x,l.height/2,l.z,1,l.height,1,0,0,0])}let Ct=new Fs(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),ct=new He(.58,.58,1,6,1,!0);b(Bt("hexagonos-topos",Ct,D("#ffffff"),Wt,!0).material,"ground-water"),Bt("hexagonos-colunas",F(ct,.5,1),D(C.earth,{vertexColors:!0}),Ft),d.uLake.value.set(A,x);let at=new Re(new xn(400,400).rotateX(-Math.PI/2),L.earth);at.position.y=0,a.add(at);let Ut=[],Jt=[];for(let l=0;l<600;l++){let g=rt[l],y=rt[l+1];if(wt((g.x+y.x)/2,(g.z+y.z)/2)<.95)continue;let M=qt.getTangentAt(l/600),I=qt.getTangentAt((l+1)/600),N=.43/Math.hypot(M.x,M.z),q=.43/Math.hypot(I.x,I.z),nt=g.y+.007,dt=y.y+.007,bt=[g.x-M.z*N,nt,g.z+M.x*N],Yt=[g.x+M.z*N,nt,g.z-M.x*N],ie=[y.x-I.z*q,dt,y.z+I.x*q],pe=[y.x+I.z*q,dt,y.z-I.x*q];Ut.push(...bt,...ie,...Yt,...Yt,...ie,...pe);for(let ve=0;ve<6;ve++)Jt.push(0,1,0)}let Me=new Ge;Me.setAttribute("position",new ge(Ut,3)),Me.setAttribute("normal",new ge(Jt,3));let _e=new Re(Me,L.path);_e.name="trilha-cont\xEDnua",a.add(_e);let vn=(l,g=Math.atan2(-qt.getTangentAt(l.u).z,qt.getTangentAt(l.u).x))=>({ry:g,at:(y,M)=>[l.x+y*Math.cos(g)+M*Math.sin(g),l.z-y*Math.sin(g)+M*Math.cos(g)]}),me={},Gi={},tn=(l,g)=>{Y=l<0?0:J[l].y-.35,st=g?Gi[g]??(Gi[g]=[]):null},Ln=J.map(()=>[]),Hi=[],ps,_i;{let l=J[2],{ry:g,at:y}=vn(l);me.ponte=[l.x,l.z],tn(-1,"ponte");for(let M=-10;M<=10;M++){let[I,N]=y(M*.125,0);ot(I,re(I,N).p.y-.035,N,.12,.07,1.05,L.plank,g)}tn(2,"ponte");for(let M of[-.6,.6]){let[I,N]=y(0,M);ot(I,.77,N,2.6,.065,.065,L.wood,g);for(let q of[-1.2,-.4,.4,1.2]){let[nt,dt]=y(q,M);ot(nt,.51,dt,.075,.65,.075,L.wood,g)}}for(let M of[-1.05,1.05]){let[I,N]=y(M,0);ot(I,-.05,N,.12,.75,.7,L.wood,g)}for(let M of[-.75,.5]){let[I,N]=y(M,-.6);Ln[2].push([I,.81+Y,N,g+(M<0?0:Math.PI)])}}function Xa(l,g,y){let M=Math.cos(y),I=Math.sin(y);ot(l,.58,g,.85,.09,.35,L.plank,y),ot(l-.16*I,.86,g-.16*M,.85,.29,.07,L.plank,y);for(let N of[-.3,.3])ot(l+N*M,.43,g-N*I,.07,.3,.25,L.wood,y)}{tn(0,"banco");let l=J[0],{ry:g,at:y}=vn(l),[M,I]=y(-.75,-.95);Xa(M,I,g),me.banco=[M,I];for(let nt of[-.22,.2])Ln[0].push([M+nt*Math.cos(g)-.16*Math.sin(g),1.01+Y,I-nt*Math.sin(g)-.16*Math.cos(g),g+(nt<0?Math.PI:0)]);let[N,q]=y(.75,-.55);ot(N,.63,q,.045,.55,.045),mt(new He(.16,.16,.03,8),L.ivory,N,.94,q,1,1,1,0,0,Math.PI/2),mt(new di(.07,.22,3),L.sun,N,.94,q+.02)}tn(1,"moinho");let{at:Wi}=vn(J[1]),[Mn,pn]=Wi(.35,-1.75);me.moinho=[Mn,pn],ot(Mn,.9,pn,.9,1.1,.8,L.ivory),ot(Mn,.42,pn,.98,.16,.88,L.rock);for(let[l,g]of[[pn-.28,-.62],[pn+.28,.62]])ot(Mn,1.56,l,1.12,.08,.68,L.coral,0,0,g);ot(Mn,1.09,pn+.411,.25,.38,.025,L.ink),ot(Mn+.27,.67,pn+.416,.22,.52,.03),ot(Mn-.33,1.75,pn-.15,.15,.45,.17,L.ivory),ps=[Mn-.33,2+Y,pn-.15];{let[l,g]=Wi(.1,-1),[y,M]=Wi(.55,-.95);Ln[1].push([l,J[1].y+.02,g,wn],[y,J[1].y+.02,M,wn+Math.PI])}let _c={x:[Mn-.62,Mn+1.05],z:[pn-.5,pn+.6],y:[.35+Y,2.05+Y]},xi=new Rn;xi.name="roda-do-moinho",xi.position.set(Mn+.5,.63+Y,pn+.18),a.add(xi);let $s=new Ge,qa=[],Ya=[];for(let l=0;l<12;l++){let g=l/12*Math.PI*2;qa.push(0,Math.cos(g)*.43,Math.sin(g)*.43,0,Math.cos(g)*.32,Math.sin(g)*.32);let y=l*2,M=(y+2)%24;Ya.push(y,M,y+1,y+1,M,M+1)}$s.setAttribute("position",new ge(qa,3)),$s.setIndex(Ya),$s.computeVertexNormals(),xi.add(new Re($s,D(C.wood,{side:Qe})));let Za=new ze(z,L.plank,6);for(let l=0;l<6;l++)W.position.set(0,0,0),W.scale.set(.14,.84,.055),W.rotation.set(l*Math.PI/3,0,0),W.updateMatrix(),Za.setMatrixAt(l,W.matrix);xi.add(Za),tn(6,"mirante");let[S,G]=vn(J[6]).at(-.6,-1.2),X={x:S,z:G};me.mirante=[X.x,X.z];for(let l of[-.58,.58])for(let g of[-.52,.52])ot(X.x+l,.19,X.z+g,.09,.55,.09);for(let l=-4;l<=4;l++)ot(X.x+l*.14,.321,X.z,.13,.065,1.3,L.plank);for(let l of[-.56,.56])ot(X.x+.66,.58,X.z+l,.07,.5,.07),ot(X.x+.66,.84,X.z,.07,.07,1.2);Ln[6].push([X.x+.66,.885+Y,X.z-.3,wn],[X.x+.66,.885+Y,X.z+.28,wn+Math.PI]);let $=X.x+.35,H=X.z-.15;ot($,.655,H,.09,.55,.09),ot($,.91,H,.48,.08,.14,L.ink);let ut=new He(.14,.16,.45,8),Mt=new He(.1,.1,.02,8);for(let l of[-.16,.16])mt(ut,L.ink,$,.95,H+l,1,1,1,0,Math.PI/2),mt(Mt,L.sun,$+.23,.95,H+l,1,1,1,0,Math.PI/2);let Rt=(l,g)=>[l.x-l.side.x*g,l.z-l.side.z*g];{tn(3,"placa");let[l,g]=Rt(J[3],.78);me.placa=[l,g];for(let y of[-.22,.22])ot(l+y,.62,g,.06,.6,.06);ot(l,.84,g,.62,.36,.05,L.ivory);for(let y of[-.07,.05])ot(l,.84+y,g+.03,.42,.035,.02,L.ink);for(let[y,M,I,N]of[[-.13,.97,.17,L.sun],[.15,.95,.13,L.coral]]){let q=M+Y;et=(nt,dt)=>Math.max(0,Math.min(1,(q-dt)/I)),ot(l+y,M-I/2,g+.04,.13,I,.012,N)}et=0,Ln[3].push([l-.2,1.03+Y,g,wn],[l+.18,1.03+Y,g,wn+Math.PI])}{tn(4,"bifurcacao");let l=J[4],[g,y]=Rt(l,.78);me.bifurcacao=[g,y],ot(g,.75,y,.06,.8,.06),[[L.coral,.25,1.05],[L.sun,-.6,.9],[L.leaf2,1.3,.75]].forEach(([M,I,N])=>ot(g+Math.cos(I)*.16,N,y-Math.sin(I)*.16,.38,.1,.05,M,I)),ot(g,1.2,y,.03,.16,.03),_i=[g,1.29+Y,y+.03];for(let M of[.7,-.5]){let I=new O(1,0,0).applyAxisAngle(new O(0,1,0),Math.atan2(-qt.getTangentAt(l.u).z,qt.getTangentAt(l.u).x)+M);ot(l.x+I.x*.75,.358,l.z+I.z*.75,.7,.012,.34,L.path,Math.atan2(-I.z,I.x))}}{tn(5,"acampamento");let[l,g]=Rt(J[5],.8),y=.3+Y;me.acampamento=[l,g],et=(M,I)=>Math.max(0,Math.min(1,(I-y)/.66))*.7,mt(T,L.sun,l,.62,g,1,1,1,.4,Math.PI/2),et=0,ot(l+.32,.56,g-.12,.05,.36,.05),mt(new He(.09,.12,.08,6),L.rock,l-.1,.4,g+.5),ot(l-.55,.41,g+.42,.42,.1,.12,L.wood,.7),ot(l+.22,.41,g+.8,.42,.1,.12,L.wood,-.5);for(let[M,I]of[[.62,-.2],[-.6,-.12]])ot(l+M,.52,g+I,.04,.5,.04),Hi.push([l+M,.82+Y,g+I]);Ln[5].push([l-.55,.47+Y,g+.42,.7],[l+.22,.47+Y,g+.8,Math.PI-.5])}tn(-1);let Et=Object.values(me),Ht=[],Xt=[],zt=[],ce=[],ye=[],Ee=[],be=[],Te=[[C.leaf2,C.leaf],[C.leaf,C.leaf2],[C.leaf2,C.leaf],[C.leaf,C.earth]],Vt=[C.sun,"#f0a32e","#d98a2b"],Ie=[C.leaf2,C.high,"#5c9a52"],fe=[[.12,.86],[.4,.9],[.1,.45],[.72,.86]];for(let l of xt){let{x:g,z:y,height:M,d:I,front:N,land:q}=l;if(M<.2||wt(g,y)<1.3||l.field||Math.hypot(g-A,y-x)<1.6)continue;let nt=We(l.q,l.r),dt=We(l.r+7,l.q-3),bt=()=>be.push([g+(dt-.5)*.4,M+.12,y+(nt-.5)*.4,.8+.4*dt,.6,.8+.4*nt,0,nt*6,0,Ie[Math.floor(dt*2.999)],M]);if(I<1.35||Et.some(([nn,Es])=>Math.hypot(g-nn,y-Es)<1.15)||Z.some(nn=>{let Es=g-nn.x,To=y-nn.z,da=Math.hypot(Es,To);return da<1.25||da<2.7&&Es*gi[0]+To*gi[1]>0}))continue;if(N&&I<3.4){nt<.12?Ee.push([g+.1,M+.18,y,.9,.7,1.1,0,nt*6,0]):nt>.68&&bt();continue}if(nt>(N?.8:I<2.6?.5:.85)){dt<.3?Ee.push([g+.1,M+.16,y,.8,.6,1,0,nt*6,0]):dt>.55&&bt();continue}let Yt=(dt-.5)*.35,ie=(We(l.q*3,l.r*5)-.5)*.35,pe=g+Yt,ve=y+ie,Ot=.75+dt*.35,[Zi,ws]=Te[q],lr=dt<fe[q][0],cr=!lr&&dt>fe[q][1];if(Ht.push([pe,M+.4*Ot,ve,1,.8*Ot,1,0,0,0,0,M]),lr)Xt.push([pe,M+1.05*Ot,ve,Ot,Ot,Ot,0,nt*6,0,Zi,M]),Xt.push([pe,M+1.5*Ot,ve,Ot*.64,Ot*.64,Ot*.64,0,nt*6+.3,0,ws,M]);else if(cr){let nn=Math.floor(nt*2.999);ce.push([pe,M+1.1*Ot,ve,Ot*.95,Ot*1.15,Ot*.95,0,nt*6,0,Vt[nn],M]),ye.push([pe-.2*Ot,M+.85*Ot,ve+.12,Ot*.6,Ot*.62,Ot*.6,0,nt*6,0,Vt[(nn+1)%3],M])}else zt.push([pe,M+1.1*Ot,ve,Ot,Ot*1.15,Ot,0,nt*6,0,Zi,M]),dt>.5&&ye.push([pe+.22*Ot,M+.82*Ot,ve+.1,Ot*.62,Ot*.66,Ot*.62,0,nt*6,0,ws,M])}for(let l of rt.filter((g,y)=>y%24===0)){if(wt(l.x,l.z)<1.4)continue;let[g,y]=Vi(l.x,l.z),[M,I]=ds(g+.2,y+.75),[N,q]=ds(g-.3,y-.6);Ee.push([M,jt(M,I).height+.06,I,.28,.2,.3,0,l.x,0]),mt(E,L.ivory,N,jt(N,q).height+.04,q,.06,.045,.06)}let an=new He(.07,.1,1,3,1,!0),yi=new Nr(.62,0),on=new di(.6,1.4,6,1,!0),Xi=new os(.62,0),Ae=new os(.4,0),Xe={vertexColors:!0};[an,on,Xi,yi].forEach(l=>F(l)),F(Ae,.6),L.rock.vertexColors=!0,le(Bt("arvores-troncos",an,D(C.wood,Xe),Ht),.035),le(Bt("arvores-copas-pinheiro",on,D("#ffffff",Xe),Xt,!0),.035),le(Bt("arvores-copas-redondas",Xi,D("#ffffff",Xe),zt,!0),.035),le(Bt("arvores-copas-outono",F(new Ur(.6,0)),D("#ffffff",Xe),ce,!0),.035),le(Bt("arvores-copas-menores",yi,D("#ffffff",Xe),ye,!0),.035),Bt("pedras",Ae,L.rock,Ee),le(Bt("arbustos",F(new os(.3,0)),D("#ffffff",Xe),be,!0),.15);let ln=[],en=qt.getLength(),Fe=Q[1]-Q[0];for(let[l,g,y]of[[Q[0]-.3*Fe,Q[1]-.2*Fe,1.25],[Q[4]-.6*Fe,Q[4]+.5*Fe,1.3],[Q[4]+.6*Fe,Q[6]+.45*Fe,1.65]]){let M=[],I=()=>{M.length>1&&M.forEach((N,q)=>{if(ln.push([N.x,N.h+.17,N.z,.06,.34,.06,0,0,0]),q){let nt=M[q-1],dt=N.x-nt.x,bt=N.z-nt.z;for(let Yt of[.13,.27])ln.push([(N.x+nt.x)/2,N.h+Yt,(N.z+nt.z)/2,Math.hypot(dt,bt),.035,.035,0,Math.atan2(-bt,dt),0])}}),M=[]};for(let N=l;N<=g;N+=.55/en){let q=qt.getPointAt(N),nt=qt.getTangentAt(N),dt=new O(-nt.z,0,nt.x).normalize();dt.x*gi[0]+dt.z*gi[1]<0&&dt.negate();let bt=q.x+dt.x*y,Yt=q.z+dt.z*y,ie=jt(bt,Yt);if(Z.some(pe=>Math.hypot(bt-pe.x,Yt-pe.z)<1.35)||wt(bt,Yt)<1.2||Math.hypot(bt-A,Yt-x)<1.5||ie.height<.2){I();continue}M.length&&Math.abs(M.at(-1).h-ie.height)>=.05&&I(),M.push({x:bt,z:Yt,h:ie.height})}I()}Bt("cercas",z,L.wood,ln);let Ks={mapear:{},analisar:{},priorizar:{},agir:{}},Ne=(l,g,y,M=null)=>{Ks[l][g]={mesh:M,count:y.length,at:y.map(([I,N])=>[+I.toFixed(2),+N.toFixed(2)])}},Yr=l=>l.map(([g,,y])=>[g,y]),js=[],Wf=[C.ivory,C.sun,"#ffb4a8"];for(let l of xt)if(!(l.land!==0||l.u>Q[1]+.85*B||l.height<.2||l.d<1.1||l.d>3.8||Math.hypot(l.x-A,l.z-x)<1.6||Et.some(([g,y])=>Math.hypot(l.x-g,l.z-y)<.9)||Z.some(g=>Math.hypot(l.x-g.x,l.z-g.z)<.8)))for(let g=0;g<4;g++){let y=We(l.q+g,l.r-g)*6.28,M=.12+.32*We(l.r+g,l.q);We(l.q*7+g,l.r)<.5&&js.push([l.x+Math.cos(y)*M,l.height+.05,l.z+Math.sin(y)*M,1,.7,1,0,y,0,Wf[g%3],l.height])}for(let l=0;l<7;l++){let g=l/7*Math.PI*2+.4,y=A+Math.cos(g)*.9,M=x+Math.sin(g)*.9;for(let I=0;I<3;I++)ot(y+I*.06,V+.15+I%2*.04,M,.025,.3+I%2*.08,.025,L.high,0,(I-1)*.16)}b(Bt("cenario-lago",Ct,D("#ffffff"),_t,!0).material,"water"),le(Bt("cenario-flores",new Nr(.1,0),D("#ffffff"),js,!0),.5,"bloom"),Ne("mapear","banco",[me.banco]),Ne("mapear","moinho",[me.moinho]),Ne("mapear","flores",Yr(js),"cenario-flores"),Ne("mapear","lago",Yr(_t),"cenario-lago");let xc=[];for(let l=0;l<30;l++){let g=-3.4+l*.24,y=(We(l,3)-.5)*.7;Math.abs(g)<1.3||We(3,l)<.3||xc.push([J[2].x+ae[0]*g+Lt[0]*y,.15,J[2].z+ae[1]*g+Lt[1]*y,.5+.4*We(l,5),.3,.45+.4*We(5,l),0,l,0,We(l,l)<.5?C.rock:"#c8c2a4"])}Bt("cenario-seixos",Ae,D("#ffffff",{vertexColors:!0}),xc,!0),Ne("analisar","ponte",[me.ponte]),Ne("analisar","quadro de avisos",[me.placa]),Ne("analisar","pedras do rio",Yr(xc),"cenario-seixos");let au=[],yc=[];for(let l of gt)for(let g=0;g<9;g++){let y=We(l.q+g*3,l.r)*6.28,M=.08+.4*We(l.r,l.q+g);au.push([l.x+Math.cos(y)*M,l.height+.14,l.z+Math.sin(y)*M,1,.8+.5*We(g,l.q),1,0,y,0,g%3?C.sun:"#e8a93a",l.height])}{let l=J[4],g=Math.atan2(-qt.getTangentAt(l.u).z,qt.getTangentAt(l.u).x);for(let[y,M]of[[.7,C.coral],[-.5,C.sun]]){let I=l.x+Math.cos(g+y)*1.3,N=l.z-Math.sin(g+y)*1.3;yc.push([I,l.y+.25,N,.05,.5,.05,0,0,0,C.wood],[I,l.y+.45,N,.34,.13,.035,0,g+y,0,M]),Ln[4].push([I,l.y+.53,N,g+y])}}le(Bt("cenario-campo",new di(.06,.3,4,1,!0),D("#ffffff"),au,!0),.25),Bt("cenario-placas",z,D("#ffffff"),yc,!0),Ne("priorizar","encruzilhada",[me.bifurcacao]),Ne("priorizar","placas",Yr(yc.filter((l,g)=>g%2)),"cenario-placas"),Ne("priorizar","campo amarelo",gt.map(l=>[l.x,l.z]),"cenario-campo");let[Ja,$a]=me.acampamento,Ka=J[5].y,vc=[[Ja-.1,Ka+.17,$a+.5,1,1,1,0,0,0,C.coral],[Ja-.05,Ka+.14,$a+.45,.7,.75,.7,0,1,0,C.sun],[Ja-.15,Ka+.13,$a+.55,.6,.65,.6,0,2,0,"#ff8a3d"]],ja=Bt("cenario-fogueira",new di(.07,.2,5),D("#ffffff"),vc,!0);b(ja.material,"glow"),Ne("agir","acampamento",[me.acampamento]),Ne("agir","fogueira",Yr(vc),"cenario-fogueira"),Ne("agir","mirante",[me.mirante]),Ne("agir","colinas",xt.filter(l=>l.u>Q[4]+B+.01&&l.front&&l.d>=1.9&&l.d<5&&l.height>.44).map(l=>[l.x,l.z]));for(let l=0;l<40;l++){let g=-8+l*.4,y=l%2?-.72:.66,M=J[2].x+ae[0]*g+Lt[0]*y,I=J[2].z+ae[1]*g+Lt[1]*y;if(!(Math.abs(g)<1.4))for(let N=0;N<3;N++)ot(M+N*.06,.28+N%2*.04,I,.025,.3+N%2*.08,.025,L.high,0,(N-1)*.16)}let Zr=new Rn;Zr.name="corrente";let Qa=new Rn;Qa.position.set(J[2].x,0,J[2].z),Qa.rotation.y=Math.atan2(ae[0],ae[1]),Qa.add(Zr),a.add(Qa);let ou=new ze(z,L.ivory,20);for(let l=0;l<20;l++)W.position.set((l%3-1)*.16,.163,-8+l*.82),W.scale.set(.09,.009,.18),W.rotation.set(0,0,0),W.updateMatrix(),ou.setMatrixAt(l,W.matrix);Zr.add(ou);let ms,Mc=new Map,to=new Map;for(let l of k.values()){if(l.g===z&&l.m===L.high){ms=new ze(z.clone(),l.m,l.items.length),ms.name="juncos",ms.userData.items=l.items,l.items.forEach((y,M)=>ms.setMatrixAt(M,At(y))),le(ms,.2,"wind",y=>y[1]-y[4]/2),a.add(ms);continue}Mc.has(l.g)||Mc.set(l.g,l.g.index?l.g.toNonIndexed():l.g);let g=Mc.get(l.g).attributes.position;to.has(l.m)||to.set(l.m,[]);for(let y of l.items)to.get(l.m).push([g.clone().applyMatrix4(At(y)).array,y[9],y[10]])}for(let[l,g]of to){let y=g.reduce((bt,[Yt])=>bt+Yt.length,0),M=new Float32Array(y),I=new Float32Array(y/3),N=new Float32Array(y),q=0;for(let[bt,Yt,ie]of g){M.set(bt,q);let pe=1e9;for(let Ot=1;Ot<bt.length;Ot+=3)pe=Math.min(pe,bt[Ot]);let ve=Math.max(pe,ie??-1e9);for(let Ot=0;Ot<bt.length;Ot+=3)N.fill(.62+.38*ti.smoothstep(bt[Ot+1],ve,ve+.32),q+Ot,q+Ot+3),Yt&&(I[(q+Ot)/3]=Yt(bt[Ot],bt[Ot+1],bt[Ot+2]));q+=bt.length}let nt=new Ge,dt=b(l.clone(),"sway",.05);dt.vertexColors=!0,nt.setAttribute("position",new Ve(M,3)),nt.setAttribute("aSway",new Ve(I,1)),nt.setAttribute("color",new Ve(N,3)),nt.computeVertexNormals(),a.add(new Re(nt,dt))}for(let[l,g]of Object.entries(Kt)){let y=xt.reduce((M,I)=>Math.hypot(I.x-g.x,I.z-g.z)<Math.hypot(M.x-g.x,M.z-g.z)?I:M);g.y=l==="pipa"?Math.max(J[2].y+ey,y.height):y.height}let Xf=new He(.38,.38,.03,8),qf=new Os(.38,.045,5,24),Yf=new He(.025,.025,.85,5),Zf=new xn(.3,.19,8,1),Jf=new Ua(.08,8,6),$f=D(C.sun,{emissive:C.sun,emissiveIntensity:.9}),Kf={plaza:[Xf,L.path],ring:[qf,D("#ffffff")],pole:[Yf,L.wood],flag:[Zf,b(new fi({color:"#ffffff",flatShading:!0,side:Qe}),"flag")],lamp:[Jf,$f]},jf=new Zt("#ffffff"),vi=Object.fromEntries(Object.entries(Kf).map(([l,[g,y]])=>{let M=new ze(g,y,J.length+(l==="lamp"?Hi.length:0));return M.name="paradas-"+l,M.frustumCulled=!1,(l==="ring"||l==="flag")&&J.forEach((I,N)=>M.setColorAt(N,jf)),a.add(M),[l,M]})),eo=document.createElement("canvas");eo.width=128*J.length,eo.height=128;let Sc=new Lr(eo);Sc.colorSpace=sn;let Jr=new Ge,lu=new Float32Array(J.length*12),cu=[],hu=[];J.forEach((l,g)=>{let y=g/J.length,M=(g+1)/J.length;cu.push(y,0,M,0,M,1,y,1),hu.push(g*4,g*4+1,g*4+2,g*4,g*4+2,g*4+3)}),Jr.setAttribute("position",new Ve(lu,3)),Jr.setAttribute("uv",new ge(cu,2)),Jr.setIndex(hu);let $r=new Re(Jr,new Tn({map:Sc,transparent:!0,depthTest:!1,toneMapped:!1}));$r.layers.set(1),o.layers.enable(1),$r.name="paradas-selos",$r.renderOrder=2,$r.frustumCulled=!1,a.add($r);let uu=[],bc=new Se().makeScale(0,0,0);for(let l of J){let g=l.group=new Rn;g.position.set(l.x,l.y-.35,l.z);let y=(q,nt,dt,bt)=>{let Yt=l[q]=new De;return Yt.position.set(nt,dt,bt),g.add(Yt),Yt},M=l.side.x*.6,I=l.side.z*.6;y("plaza",0,.362,0),y("ring",0,.39,0).rotation.x=Math.PI/2,y("pole",M,.78,I),uu.push(y("flag",M+.16,1.12,I)),y("lamp",M,1.24,I).visible=!1,y("badge",M,1.5,I).scale.setScalar(.5),l.markers=[l.badge,l.pole,l.flag,l.lamp];let N=new Re(new He(.5,.5,1.4,8),new Tn({visible:!1}));N.userData.stop=l.index,N.position.set(l.x,l.y+.55,l.z),a.add(N),Gt.push(N)}let du=()=>{let l=document.createElement("canvas");l.width=l.height=64;let g=l.getContext("2d"),y=g.createRadialGradient(32,32,0,32,32,32);return y.addColorStop(0,"#fff"),y.addColorStop(.45,"rgba(255,255,255,.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=y,g.fillRect(0,0,64,64),new Lr(l)},Tc=[...Ht.map(l=>[l[0],l[10]+.014,l[2],1.15*l[4]/.8,1,l[4]/.8]),...be.map(l=>[l[0],l[10]+.014,l[2],.6*l[3],1,.6*l[5]]),...[[me.moinho,1,1.7],[me.mirante,6,1.5],[me.acampamento,5,1.1],[me.banco,0,.9],[me.placa,3,.7],[me.bifurcacao,4,.55]].map(([[l,g],y,M])=>[l,J[y].y+.014,g,M,1,M*.85])],Kr=new ze(new xn(1,1).rotateX(-Math.PI/2),new Tn({map:du(),color:"#14301f",transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1}),Tc.length);Kr.name="sombras",Tc.forEach((l,g)=>Kr.setMatrixAt(g,At([...l.slice(0,3),l[3],1,l[5],0,0,0]))),Kr.userData.items=Tc,a.add(Kr);let wc=new Tn({map:du(),color:"#ffc83d",transparent:!0,opacity:.32,blending:Oa,depthWrite:!1,toneMapped:!1});wc.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <project_vertex>","vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;")},wc.customProgramCacheKey=()=>"brilho";let ei=new ze(new xn(1,1),wc,3+J.length),Mi=[Ja-.1,Ka+.28,$a+.5];ei.name="brilhos",ei.frustumCulled=!1,a.add(ei),Hi.forEach((l,g)=>ei.setMatrixAt(g,At([...l,.34,.34,.34,0,0,0]))),J.forEach((l,g)=>ei.setMatrixAt(3+g,bc)),Hi.forEach((l,g)=>{W.position.set(...l),W.scale.set(1,1,1),W.rotation.set(0,0,0),W.updateMatrix(),vi.lamp.setMatrixAt(J.length+g,W.matrix)});let no=new Ge;{let l=[.5,0,0],g=[-.5,0,0],y=[0,.14,0],M=[0,-.1,0],I=[0,0,.12],N=[0,0,-.12],q=[l,y,I,l,N,y,l,I,M,l,M,N,g,I,y,g,y,N,g,M,I,g,N,M],nt=q.map(()=>0);for(let dt of[1,-1])q.push([.18,.04,.06*dt],[-.22,.04,.06*dt],[-.04,.06,.62*dt]),nt.push(0,0,1);no.setAttribute("position",new ge(q.flat(),3)),no.setAttribute("aWing",new ge(nt,1))}let Ec=(l,g={})=>b(new fi({color:"#ffffff",flatShading:!0,...g}),l),Si=16,gs=Ln.flat(),Oe=new ze(no,Ec("critter",{side:Qe}),Si+gs.length),jr=new Float32Array(Oe.count*3);Oe.name="bichos",Oe.frustumCulled=!1,no.setAttribute("aFly",new Oi(jr,3)),a.add(Oe);let Ac=new os(.5,0),ni=new ze(Ac,Ec("particle"),24),fu=new Float32Array(24);ni.name="particulas",ni.frustumCulled=!1,Ac.setAttribute("aGlow",new Oi(fu,1)),a.add(ni);let _s=new ze(Ac,Ec("cloud",{color:"#f7f9fb",transparent:!0,opacity:.62,depthWrite:!1}),6);_s.name="nuvens",_s.frustumCulled=!1,a.add(_s);for(let l=0;l<Oe.count;l++)Oe.setColorAt(l,new Zt(l<5?[C.sun,"#ffb4a8",C.ivory,"#ffb4a8",C.sun][l]:l<8?l<7?C.ivory:"#e9dfc3":l===8?"#a9c2d6":l<Si||l%2?C.ink:"#4a5a7d")),jr.set(l<5?[1,l*1.3,12]:l>8&&l<Si?[1,l*.8,9]:[0,l*.9,10],l*3);for(let l=0;l<24;l++)ni.setColorAt(l,new Zt(l<5?"#f4f1ea":l<10?"#d8d2c8":l<15?l%2?C.sun:"#ff8a3d":l<21?[C.leaf2,C.sun,"#d98a2b"][l%3]:C.ivory)),fu[l]=l>=10&&l<15?1:0;let io=new Rn,Qs=new Re(new Ge,D("#ffffff",{vertexColors:!0,side:Qe}));io.position.set(..._i),io.rotation.y=wn,Qs.name="cata-vento",io.add(Qs),a.add(io);{let l=[],g=[];[C.coral,C.sun,C.leaf2,C.ivory].forEach((y,M)=>{let I=M*Math.PI/2,N=new Zt(y);l.push(0,0,0,Math.cos(I)*.17,Math.sin(I)*.17,0,Math.cos(I+1.2)*.09,Math.sin(I+1.2)*.09,.03);for(let q=0;q<3;q++)g.push(N.r,N.g,N.b)}),Qs.geometry.setAttribute("position",new ge(l,3)),Qs.geometry.setAttribute("color",new ge(g,3))}let Qf=[0,1,2,3,4].map(l=>js.length?js[Math.floor((l+.5)/5*js.length)]:[J[0].x,J[0].y,J[0].z]),bi=gs.map(()=>null),Ti=0,pu=0,Qr=0,ta=!1,so=1,ro=0,mu=0,tr=9,er=9,ea=9,qi=-1,gu=4,ao=!1,wi=null,_u=0,xu=5,Cc=0,oo=!1,On=new De;On.rotation.order="YZX";let mn=(l,g,y,M,I,N,q,nt,dt=0,bt=0,Yt=0)=>{On.position.set(y,M,I),On.scale.set(N,q,nt),On.rotation.set(Yt,dt,bt),On.updateMatrix(),l.setMatrixAt(g,On.matrix),Cc++},na=l=>l-Math.floor(l),lo=(l,g)=>Math.atan2(-g,l),ia=(l,g)=>mn(l,g,0,-9,0,0,0,0),Rc=()=>er<3.5?Math.min(1,er/.25)*Math.exp(-Math.max(0,er-.25)*1.1):0;function Ic(l){let[g,y,M,I]=gs[l];mn(Oe,Si+l,g,y,M,.17,.17,.07,I),jr[(Si+l)*3]=0,oo=!0}let tp=2.6,yu=(l,g)=>{let[y,M,I]=gs[l],N=Math.sin(Math.PI*g),q=Math.sin(2*Math.PI*g)*(l%2?.9:-.9);return[y+gi[0]*.35*N+fs[0]*q,M+.6*N,I+gi[1]*.35*N+fs[1]*q]};function Pc(){Cc=0;let l=Ti,g=Rc();for(let y=0;y<5;y++){let[M,I,N]=Qf[y],q=l+y*7.3;mn(Oe,y,M+.38*Math.sin(q*.7+y)+.12*Math.sin(q*1.9+y*2),I+.3+.1*Math.sin(q*1.3+y),N+.3*Math.cos(q*.53+y*1.7),.07,.1,.22,lo(.27*Math.cos(q*.7+y)+.23*Math.cos(q*1.9+y*2),-.16*Math.sin(q*.53+y*1.7)))}for(let y=0;y<3;y++){let M=l*.2+y*2.1,I=.35+.15*y;mn(Oe,5+y,A+Math.cos(M)*I,V+.04+.012*Math.sin(l*1.7+y),x+Math.sin(M)*I,.22,.26,.1,lo(-Math.sin(M),Math.cos(M)))}if(wi!==null&&wi>=.9&&(ia(Oe,8),wi=null,ao=!1),wi!==null){let y=wi/.9,M=_u%2?-2.6:3.1,I=-.3+.6*y;mn(Oe,8,J[2].x+ae[0]*M+Lt[0]*I,.12+.5*Math.sin(Math.PI*y),J[2].z+ae[1]*M+Lt[1]*I,.2,.16,.12,lo(Lt[0],Lt[1]),Math.atan2(Math.PI*Math.cos(Math.PI*y),.6),Math.PI/2),ao=!0}if(qi>=0){let y=qi/8;if(y>=1){for(let M=0;M<7;M++)ia(Oe,9+M);qi=-1}else for(let M=0;M<7;M++){let I=Math.ceil(M/2),N=-26+52*y-I*.45,[q,nt]=ds(N,N*qr[1]/qr[0]-1.4+(M%2?1:-1)*I*.42);mn(Oe,9+M,q,4.3+.15*Math.sin(y*9+M),nt,.22,.2,.22,wn)}}bi.forEach((y,M)=>{if(y===null||y<0)return;let I=y/tp;if(I>=1){bi[M]=null,Ic(M);return}let N=yu(M,I),q=yu(M,Math.min(1,I+.02));mn(Oe,Si+M,N[0],N[1],N[2],.17,.17,.17,I>.97?gs[M][3]:lo(q[0]-N[0],q[2]-N[2]));let nt=I<.9?1:0;jr[(Si+M)*3]!==nt&&(jr[(Si+M)*3]=nt,oo=!0)});for(let y=0;y<5;y++){let M=na(l*.3+y/5),I=.2*Math.pow(Math.sin(Math.PI*M),.8)*(.6+M);mn(ni,y,ps[0]+.85*M*.5+.05*Math.sin(M*7+y),ps[1]+M*1.1,ps[2]-.52*M*.5,I,I,I,y)}for(let y=0;y<5;y++){let M=na(l*.36+y/5+.1),I=.15*(1+.6*g)*Math.pow(Math.sin(Math.PI*M),.8)*(.6+M);mn(ni,5+y,Mi[0]+.85*M*.35+.04*Math.sin(M*6+y),Mi[1]+.1+M*(.9+.4*g),Mi[2]-.52*M*.35,I,I,I,y)}for(let y=0;y<5;y++){let M=na(pu+y*.37),I=.045*(1+.5*g)*Math.sin(Math.PI*M);mn(ni,10+y,Mi[0]+.14*Math.sin(y*2.3+M*5),Mi[1]+M*(.75+.6*g),Mi[2]+.14*Math.cos(y*1.7+M*4),I,I,I,M*6)}for(let y=0;y<9;y++){let M=-7+na(l*.05+y*.137)*14,I=(We(y,9)-.5)*.75,N=Math.min(1,(7-Math.abs(M))/1.5),q=y<6;mn(ni,15+y,J[2].x+ae[0]*M+Lt[0]*I,.145,J[2].z+ae[1]*M+Lt[1]*I,(q?.13:.16)*N,(q?.03:.012)*N,(q?.08:.12)*N,l*.6+y)}for(let y=0;y<3;y++){let M=na((y*16+l*.18)/48)*48-24,[I,N]=ds(M,M*qr[1]/qr[0]+[-1,-.4,-1.4][y]),q=7+.2*y+Hf(Math.max(0,Math.min(6,M/Gf+3))),nt=.8+.15*y;mn(_s,y*2,I,q,N,2*nt,.9*nt,1.4*nt,y),mn(_s,y*2+1,I+fs[0]*.85*nt,q-.15,N+fs[1]*.85*nt,1.2*nt,.6*nt,nt,y+1),d.uCloud.value[y].set(I,N,1.25*nt)}mn(ei,2,Mi[0],Mi[1]-.05,Mi[2],.62*(1+.07*Math.sin(l*5)+.5*g),1,1),ei.instanceMatrix.needsUpdate=!0;for(let y=0;y<3;y++){let M=vc[y],I=1+.16*Math.sin(l*7+y*2.1)+.6*g;mn(ja,y,M[0],M[1]+.1*M[4]*(I-1),M[2],M[3]*(1+.3*g),M[4]*I,M[5]*(1+.3*g),M[7])}return Oe.instanceMatrix.needsUpdate=!0,ni.instanceMatrix.needsUpdate=!0,_s.instanceMatrix.needsUpdate=!0,ja.instanceMatrix.needsUpdate=!0,oo&&(Oe.geometry.attributes.aFly.needsUpdate=!0,oo=!1),Cc}function ep(l){let g=1-Math.exp(-l/.45);Qr+=((kn<10?1:0)-Qr)*g,so+=((ta?.15:1)-so)*g;let y=Qr*(.25+.75*(so-.15)/.85);Ti+=l*y,pu+=l*y*(.95+.5*Rc()),d.uT.value=Ti,d.uAmp.value=Qr*so,tr+=l,er+=l,ea+=l,d.uGust.value.z=tr<4?1.6*Math.exp(-tr*1.3):0,d.uGust.value.w=tr,d.uBloom.value.z=ea<3.5?1:0,d.uBloom.value.w=ea,bi.forEach((I,N)=>{I!==null&&(bi[N]=I+l)}),qi>=0?qi+=l:kn<2&&!ta&&Ti>=gu&&(qi=0,gu=Ti+26),wi!==null?wi+=l:kn<9&&Ti>=xu&&(wi=0,_u++,xu=Ti+6),ro+=((kn<9?.7:0)-ro)*(1-Math.exp(-l/.8)),xi.rotation.x+=ro*l,Zr.position.z=Ti*.18%.82;let M=d.uGust.value;mu+=l*(d.uAmp.value*1.6+4*M.z*Math.exp(-((_i[0]-M.x)**2+(_i[2]-M.y)**2)/4)),Qs.rotation.z=mu,En.maxLife=Math.max(En.maxLife,Pc())}function np(l,g){!zn||!Gn()||(bi[l*2]=0,bi[l*2+1]=-.15,l>=5&&(er=0),g===0&&(ea=0,d.uBloom.value.set(J[g].x,J[g].z,1,0)))}function ip(l){let g=J[l];!g||!zn||!Gn()||(tr=0,d.uGust.value.set(g.x,g.z,1.6,0),kn=0,Sn())}let vu=1,Mu=80,Su=[C.coral,C.sun,C.leaf2,"#ffb4a8",C.ivory],Lc=new xn(.18,.12),Dc=new Tn({side:Qe,toneMapped:!1,fog:!1}),Bn=null;function sp(l){sa();let g=J[l];if(!g||!zn||!Gn())return!1;let y=new ze(Lc,Dc,Mu),M=new Zt;y.name="confete",y.frustumCulled=!1;let I=Array.from({length:Mu},(N,q)=>{y.setColorAt(q,M.set(Su[q%Su.length]));let nt=q*2.39996,dt=.35+.65*We(q,1);return[Math.cos(nt)*dt*3.6,1.6+1.6*We(q,2),Math.sin(nt)*dt*3.6,We(q,3)*6,1.6+3.4*We(q,4)]});return Bn={mesh:y,p:I,t:0,at:[g.x,g.y+2.3,g.z]},bu(0),a.add(y),Sn(),!0}function bu(l){let g=Bn;if(g.t+=l,g.t>=vu){sa();return}let y=g.t,[M,I,N]=g.at,q=(1-Math.exp(-2.4*y))/2.4,nt=Math.min(1,(vu-y)/.25);g.p.forEach(([dt,bt,Yt,ie,pe],ve)=>{On.position.set(M+dt*q,I+bt*q-2.2*y*y,N+Yt*q),On.scale.setScalar(nt),On.rotation.set(ie+pe*y,ie*.7+pe*.6*y,pe*.3*y),On.updateMatrix(),g.mesh.setMatrixAt(ve,On.matrix)}),g.mesh.instanceMatrix.needsUpdate=!0,En.maxConfetti=Math.max(En.maxConfetti,g.p.length)}function sa(){Bn&&(a.remove(Bn.mesh),Bn.mesh.dispose(),Bn=null)}function rp(){bi.forEach((l,g)=>{l!==null&&(bi[g]=null,Ic(g))}),tr=er=ea=9,d.uGust.value.z=0,d.uBloom.value.z=0,qi=-1,wi=null,Pc(),ia(Oe,8),ao=!1;for(let l=0;l<7;l++)ia(Oe,9+l);Oe.instanceMatrix.needsUpdate=!0}gs.forEach((l,g)=>Ic(g));for(let l=8;l<Si;l++)ia(Oe,l);Pc();let Be={scene:new Fi,cam:new Ns,tex:null,on:!1,off:!1,u:{tMap:{value:null},uPx:{value:new Qt},uR:{value:0},uB:{value:.28}}};{let l=new Re(new xn(2,2),new In({uniforms:Be.u,depthTest:!1,depthWrite:!1,blending:Kn,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tMap;uniform vec2 uPx;uniform float uR,uB;varying vec2 vUv;void main(){float r=uR*smoothstep(uB,.5,abs(vUv.y-.52));if(r<.35)discard;vec4 c=vec4(0.);for(int i=0;i<12;i++){float a=float(i)*2.39996,s=sqrt((float(i)+.5)/12.);c+=texture2D(tMap,vUv+vec2(cos(a),sin(a))*s*r*uPx);}gl_FragColor=c/12.;}"}));l.frustumCulled=!1,Be.scene.add(l)}let Tu=new O,wu=new O,Eu=new O;function ap(){Tu.setFromMatrixColumn(o.matrixWorld,0),wu.setFromMatrixColumn(o.matrixWorld,1);for(let l of J){l.group.updateMatrixWorld(!0);for(let M in vi)vi[M].setMatrixAt(l.index,l[M].visible?l[M].matrixWorld:bc);let g=l.badge.getWorldPosition(Eu),y=l.badge.visible?l.badge.scale.x/2:0;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([M,I],N)=>{for(let q=0;q<3;q++)lu[l.index*12+N*3+q]=g.getComponent(q)+(Tu.getComponent(q)*M+wu.getComponent(q)*I)*y})}for(let l of J)ei.setMatrixAt(3+l.index,l.lamp.visible?At([...l.lamp.getWorldPosition(Eu).toArray(),.36,.36,.36,0,0,0]):bc);ei.instanceMatrix.needsUpdate=!0;for(let l in vi)vi[l].instanceMatrix.needsUpdate=!0;Jr.attributes.position.needsUpdate=!0}function Au(l,{state:g,zone:y,glyph:M}){let I=eo.getContext("2d"),N=g==="bloqueada",q=g==="foco";if(I.save(),I.translate(l.index*128,0),I.clearRect(0,0,128,128),I.beginPath(),I.arc(64,64,54,0,Math.PI*2),I.fillStyle=q?C.sun:C.ivory,I.fill(),I.lineWidth=12,I.strokeStyle=su[y]||C.ink,I.stroke(),I.fillStyle=C.ink,I.strokeStyle=C.ink,I.textAlign="center",I.textBaseline="middle",N)I.lineWidth=7,I.beginPath(),I.arc(64,54,14,Math.PI,0),I.stroke(),I.fillRect(44,56,40,30);else{let nt=M||{guardado:"\u2713",rascunho:"\u270E",adiado:"\u21B7"}[g]||String(l.index+1);I.font=`900 ${nt.length>1?40:58}px Nunito, sans-serif`,I.fillText(nt,64,68)}I.restore(),Sc.needsUpdate=!0}let co=new De;co.name="rumo",a.add(co);let Ei=0,Uc=!1,ho=!0,zn=!0,Cu=!1,ra=0,uo=0,Ru=0,kn=12,op=0,nr=J.map(()=>({state:"dispon\xEDvel",zone:"leaf"})),te=null,ne=null,gn=null,fo=Q[0],Iu="",Vn=new O(J[0].x,J[0].y,J[0].z),oe=new O(0,0,0),qe=wn,Dn=1,po=!1,mo=!1,Ye=!0,Yi=!1,xs=!0,ir=0,go=!1,ii=!1,sr=!1,aa=null,$e=null,ys=0,En={maxCalls:0,maxTriangles:0,maxLife:0,maxConfetti:0,cpuMax:0,cpuSum:0,cpuN:0};function _o(l){fo=l,Vn.copy(qt.getPointAt(l))}let vs=new O,oa=new O,xo=new O,la=9.55/Math.hypot(10,9.55),Nc=10/Math.hypot(10,9.55);function Fc(){vs.set(Math.cos(qe),0,-Math.sin(qe)),oa.set(Math.sin(qe),0,Math.cos(qe)),xo.set(-Math.sin(qe)*la,Nc,-Math.cos(qe)*la)}let si=l=>l.x*vs.x+l.z*vs.z,Ms=l=>l.x*xo.x+l.y*xo.y+l.z*xo.z,yo=(l,g)=>new O().addScaledVector(vs,l).addScaledVector(oa,(.45*Nc-g)/la),ri=()=>{let l=i.getBoundingClientRect();return{width:Math.max(1,l.width),height:Math.max(1,l.height)}},Pu=()=>{let l=ri();return l.width>=900?ti.clamp(.33*l.height,200,280):130};function ai(l,g){let y=Math.min(Pu(),Math.max(46,g*Vf))/g,M=si(l),I=Ms(l);return[M-y*60/130,M+y*60/130,I-y*4/130,I+y*125/130]}function rr(l){let g=J[l],y=new O(g.x,g.y,g.z),M=new O(g.x+g.side.x*.6,g.y+1.15,g.z+g.side.z*.6);return[[si(y)-.3,si(y)+.3,Ms(y)-.2,Ms(y)+.2],[si(M)-.3,si(M)+.3,Ms(M)-.3,Ms(M)+.3]]}let vo=["bino","bino","pipa","pipa",null,"teo","teo"];function Ss(l,g,y,M=8){let I=ri(),N=I.width/I.height,q=Math.min(y,Math.max(g,3)),nt=null;for(let dt=0,bt=0;dt<(g===y?1:30)&&!(nt&&Math.abs(nt.need-bt)<1e-4);dt++){bt=q;let Yt=I.height/(2*q),ie=l(Yt),pe=Math.min(...ie.map(nn=>nn[0])),ve=Math.max(...ie.map(nn=>nn[1])),Ot=Math.min(...ie.map(nn=>nn[2])),Zi=Math.max(...ie.map(nn=>nn[3])),ws=ir/Yt,lr=4/Yt,cr=Math.max((Zi-Ot)/2+lr+ws/2,((ve-pe)/2+M/Yt)/N);q=Math.min(y,Math.max(g,cr)),nt={cx:(pe+ve)/2,cy:(Ot+Zi)/2-ws/2,half:q,need:cr}}return nt}function lp(){let l=ri();return ii=go&&l.height<170,sr=!ii&&l.width>=900,ii?{lo:l.height/168,hi:l.height/60}:sr?{lo:l.height/(2*ti.clamp(.3*l.height,80,240)),hi:9}:l.width<600&&l.height>=170?{lo:l.height/116,hi:l.height>=200?l.height/91:9}:{lo:Math.max(1.6,l.height*Vf/260),hi:9}}let Mo=l=>new O(J[l].x,J[l].y,J[l].z);function ca(l,g,y){let M=ii?null:vo[l],I=[ai(Mo(l),g),...rr(l)];if(M&&I.push(ai(Kt[M],g)),y)for(let N of[l-1,l+1])J[N]&&I.push(rr(N)[0]);return!y&&!ii&&J[l+1]&&ri().width>=900&&I.push(rr(l+1)[0]),I}let cp=(l,g)=>[ai(Mo(l),g),...rr(l),...J[l+1]?[rr(l+1)[0]]:[],...Kt[aa]?[ai(Kt[aa],g)]:[]];function ar(l){Fc();let{lo:g,hi:y}=lp(),M=ri();if(sr){let $t=Ss(Le=>cp(l,Le),g,y);return{center:yo($t.cx,$t.cy),half:$t.half}}let I=M.width>=600&&!ii?g*M.width/M.height:0,N=g,q=$t=>Object.entries(Kt).filter(([Le,Ji])=>Le!==vo[$t]&&Math.abs(si(Ji)-si(Mo($t)))<I).map(([,Le])=>Le);for(let $t=0;$t<7;$t++)N=Math.max(N,Ss(Le=>[...ca($t,Le,!1),...q($t).map(Ji=>ai(Ji,Le))],g,y).half);let nt=Ss($t=>ca(l,$t,!0),N,N),dt=nt.need<=N*1.001,bt=dt?nt:Ss($t=>ca(l,$t,!1),N,N),Yt=ri(),ie=N*Yt.width/Yt.height,pe=Object.entries(Kt).filter(([$t,Le])=>!ii&&$t!==vo[l]&&Math.abs(si(Le)-bt.cx)<ie).map(([,$t])=>$t);if(pe.length){let $t=Ss(Le=>[...ca(l,Le,dt),...pe.map(Ji=>ai(Ji,Le))],N,N,2);$t.need<=N*1.001&&(bt=$t)}let ve=Yt.height/(2*N),Ot=4/ve,Zi=ca(l,ve,!1),ws=Math.max(...Zi.map($t=>$t[1]))+Ot-ie,lr=Math.min(...Zi.map($t=>$t[0]))-Ot+ie,cr=bt.cy+N-Ot,nn=bt.cy-N+ir/ve+Ot,Es=Object.entries(Kt).filter(([$t])=>!ii&&$t!==vo[l]).map(([,$t])=>ai($t,ve)).filter(([,,$t,Le])=>Le>bt.cy-N&&$t<bt.cy+N),To=$t=>Es.every(([Le,Ji,Ap,Cp])=>Ji<=$t-ie||Le>=$t+ie||Le>=$t-ie+Ot&&Ji<=$t+ie-Ot&&Ap>=nn&&Cp<=cr),da=[bt.cx,...Es.flatMap(([$t,Le])=>[$t-ie,Le+ie,Le+Ot-ie,$t-Ot+ie])].filter($t=>$t>=ws-1e-6&&$t<=lr+1e-6&&To($t)).sort(($t,Le)=>Math.abs($t-bt.cx)-Math.abs(Le-bt.cx));return{center:yo(da.length?da[0]:bt.cx,bt.cy),half:N}}let Oc=new O,hp=l=>{let g=1e9,y=-1e9,M=1e9,I=-1e9;for(let N of l)for(let q=0;q<8;q++){Oc.set(q&1?N.max.x:N.min.x,q&2?N.max.y:Math.max(.13,N.min.y),q&4?N.max.z:N.min.z);let nt=si(Oc),dt=Ms(Oc);g=Math.min(g,nt),y=Math.max(y,nt),M=Math.min(M,dt),I=Math.max(I,dt)}return[g,y,M,I]};function Lu(){Fc();let l=Mo(Ei),g=ri(),y=g.width>=600,M=q=>[ai(te?Vn:l,q),...Object.values(Kt).map(nt=>ai(nt,q)),...J.flatMap((nt,dt)=>rr(dt))],I=Ss(q=>[...M(q),...y?Object.values(Gi).map(hp):[]],1.6,30,y?20:6),N=dp(g.width/g.height);return I.half<=N?I:Ss(M,1.6,Math.max(1.6,N),y?20:6)}let oi=2.6,bs=6;function ha(){let l=Lu(),g=ar(Ei);bs=l.half,oi=g.half,xs&&(Ye?oe.copy(yo(l.cx,l.cy)):(gn=g.center,!ne&&!te&&oe.copy(g.center)))}function So(){if(rp(),sa(),ne&&(oe.copy(ne.to),ne=null),$e){$e=null,Ye=!1;let l=ar(Ei);oi=l.half,gn=l.center,oe.copy(l.center)}if(te){_o(te.to);let l=te.index;te=null,gn&&oe.copy(gn),Ke(),r({type:"arrive",index:l,walked:!1,moved:!0,stopped:!0})}}function Ts(){cancelAnimationFrame(ra),ra=0,uo=0}let Gn=()=>!mo&&!po&&Uc&&ho&&zn&&!document.hidden,Du=()=>te||ne||$e||Bn||kn<12,Bc=(l,g)=>{let y=l.clone().project(o);return{x:(y.x+1)/2*g.width,y:(1-y.y)/2*g.height,z:y.z}};function Uu(l=i.getBoundingClientRect()){return{width:l.width,height:l.height,unit:l.height/(o.top-o.bottom),figMax:Pu(),short:ii,close:sr&&(!Ye||!!ne),inset:ir,rumo:Bc(Vn,l),guides:Object.fromEntries(Object.entries(Kt).map(([g,y])=>[g,Bc(y,l)])),stops:J.map(g=>Bc(new O(g.x,g.y+.01,g.z),l))}}let up=(l,g)=>qt.getPointAt(g).project(o).x>=qt.getPointAt(l).project(o).x?1:-1;function Sn(){!Cu&&!ra&&Gn()&&Du()&&(ra=requestAnimationFrame(Mp))}function Hn(){n({overview:Ye,exploring:Yi,selected:Ei})}function zc(l,g){let y=1e9,M=-1e9,I=1e9,N=-1e9;for(let q of[-l*g,l*g])for(let nt of[-l,l])for(let dt of[0,.4]){let bt=-(nt+Nc*(.45-dt))/la,Yt=q*vs.x+bt*oa.x,ie=q*vs.z+bt*oa.z,[pe,ve]=Vi(Yt,ie);y=Math.min(y,pe),M=Math.max(M,pe),I=Math.min(I,ve),N=Math.max(N,ve)}return{s0:y,s1:M,t0:I,t1:N}}function dp(l){let g=30;for(let y=0;y<4;y++){let M=zc(g,l),I=Math.min(1,(rn.s[1]-rn.s[0]-.1)/(M.s1-M.s0),(rn.t[1]-rn.t[0]-.1)/(M.t1-M.t0));if(I>=1)break;g*=I*.995}return g}function fp(l,g){for(let nt=0;nt<3;nt++){let dt=zc(l,g),bt=Math.min(1,(rn.s[1]-rn.s[0])/(dt.s1-dt.s0),(rn.t[1]-rn.t[0])/(dt.t1-dt.t0));if(bt>=1)break;l*=bt*.995}let y=zc(l,g),[M,I]=Vi(oe.x,oe.z);M=ti.clamp(M,rn.s[0]+.05-y.s0,rn.s[1]-.05-y.s1),I=ti.clamp(I,rn.t[0]+.05-y.t0,rn.t[1]-.05-y.t1);let[N,q]=ds(M,I);return oe.x=N,oe.z=q,l}function pp(l,g,y){let[M,I,N,q]=ai(Vn,y),nt=new O(oe.x,.45,oe.z),dt=si(nt),bt=Ms(nt),Yt=l*g-8/y,ie=l-4/y,pe=-l+(ir+4)/y,ve=0,Ot=0;I-dt>Yt?ve=I-dt-Yt:M-dt<-Yt&&(ve=M-dt+Yt),q-bt>ie?Ot=q-bt-ie:N-bt<pe&&(Ot=N-bt-pe),(ve||Ot)&&oe.addScaledVector(vs,ve).addScaledVector(oa,-Ot/la)}function Ke(){if(po||mo)return;let l=i.getBoundingClientRect(),g=Math.max(.2,l.width/Math.max(1,l.height));Fc();let y=Ye?bs:oi,M=ne&&ne.h1!=null?ne.h0+(ne.h1-ne.h0)*(ne.e||0):y,I=Math.min(M/Dn,Math.max(bs,M)*1.25);te&&gn&&!Ye&&pp(I,g,Math.max(1,l.height)/(2*I)),I=fp(I,g),ys=I,o.position.set(oe.x+Math.sin(qe)*10,10,oe.z+Math.cos(qe)*10),o.lookAt(oe.x,.45,oe.z),o.updateMatrixWorld(),o.left=-I*g,o.right=I*g,o.top=I,o.bottom=-I,o.updateProjectionMatrix(),co.position.copy(Vn);let N=Vn.clone();N.y+=.6,N.project(o);for(let nt of J){let dt=nt.badge.getWorldPosition(new O).project(o),bt=Math.abs(dt.x-N.x)>.75/(I*g)||Math.abs(dt.y-N.y)>.95/I;nt.markers.forEach(Yt=>Yt.visible=bt&&(Yt!==nt.lamp||nr[nt.index].state==="guardado"))}if(ap(),h.info.reset(),Be.on=l.width>=900&&!Be.off,Be.on){let nt=c.width,dt=c.height;(Be.tex?.image.width!==nt||Be.tex?.image.height!==dt)&&(Be.tex?.dispose(),Be.tex=new Ia(nt,dt),Be.u.tMap.value=Be.tex),Be.u.uPx.value.set(1/nt,1/dt),Be.u.uB.value=Ye?.36:.28,Be.u.uR.value=ti.clamp(l.height/160,1.2,3.4)*h.getPixelRatio()*(Ye?.6:1),o.layers.set(0),h.render(a,o),h.copyFramebufferToTexture(Be.tex),h.autoClear=!1,h.render(Be.scene,Be.cam),o.layers.set(1),h.render(a,o),h.autoClear=!0,o.layers.enable(0)}else h.render(a,o);Ru++,En.maxCalls=Math.max(En.maxCalls,h.info.render.calls),En.maxTriangles=Math.max(En.maxTriangles,h.info.render.triangles);let q=[oe.x,oe.z,qe,I,l.width,l.height,Vn.x,Vn.y,Vn.z].join();q!==Iu&&(Iu=q,s(Uu(l)))}function Nu(){if(mo)return;let l=i.getBoundingClientRect();h.setSize(Math.max(1,l.width),Math.max(1,l.height),!1),l.width>1&&l.height>1&&(ha(),ne&&!Ye&&gn&&(ne.to=gn),ne&&ne.h1!=null&&(ne.h1=Ye?bs:oi)),Ke()}let ua=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,mp=ua,Fu=l=>l<.5?2*l*l:1-2*(1-l)*(1-l);function bo(l=!1){if(!$e)return;$e=null;let g=oe.clone(),y=ys;ne=null,Ye=!1;let M=ar(Ei);oi=M.half,gn=M.center,oe.copy(M.center),l&&zn&&Gn()&&y&&(ne={from:g,to:M.center,t:0,dur:.5,ease:mp,h0:y,h1:M.half},oe.copy(g),Sn()),Ke(),Hn()}let gp=l=>1-Math.pow(1-l,3);function _p(l,{instant:g=!1,keep:y=null,passage:M=null}={}){if(!J[l])return;$e=null,aa=y,Ei=l,Ye=!1,xs=!0,kn=0,J.forEach(ie=>{ie.ring.scale.setScalar(ie.index===l?1.15:1)});let I=ar(l),N=I.center,q=Q[l],nt=Math.abs(q-fo)/It,dt=nt>1e-6;if(oi=I.half,gn=N,g||!zn||!Gn()){te=null,ne=null,_o(q),oe.copy(N),Ke(),Hn(),r({type:"arrive",index:l,walked:!1,moved:dt});return}let bt=!!te,Yt=ny(nt);ne=dt?{from:oe.clone(),to:N,t:bt?0:-mc,dur:.29,ease:Fu}:{from:oe.clone(),to:N,t:0,dur:.35,ease:gp},sr&&(ne=dt?{from:oe.clone(),to:N,t:bt?0:-mc,dur:Yt,ease:Fu,h0:ys||I.half,h1:I.half}:{from:oe.clone(),to:N,t:0,dur:.5,ease:ua,h0:ys||I.half,h1:I.half}),te=dt?{from:fo,to:q,index:l,t:bt?0:-mc,dur:Yt,hops:Math.min(10,Math.max(1,Math.round(nt*6*1.2))),dir:up(fo,q),running:bt,wake:M===null?null:{to:l,from:M}}:null,te&&(r({type:"start",index:l,dir:te.dir,antes:bt?0:mc*1e3,run:te.dur*1e3}),bt&&r({type:"run",index:l,dir:te.dir,run:te.dur*1e3})),Sn(),Ke(),Hn(),te||r({type:"arrive",index:l,walked:!1,moved:!1})}let xp=new Zt,yp=new Zt;function vp(l){nr=l.map((g,y)=>({...nr[y],...g}));for(let g of J){let y=nr[g.index];Au(g,y),vi.ring.setColorAt(g.index,xp.set(y.state==="foco"?C.sun:su[y.zone]||C.ivory)),vi.flag.setColorAt(g.index,yp.set(y.state==="guardado"?C.sun:su[y.zone]||C.coral));let M=y.state==="bloqueada";g.flag.position.y=M?.62:1.12,g.flag.scale.x=M?.55:1}vi.ring.instanceColor.needsUpdate=!0,vi.flag.instanceColor.needsUpdate=!0,Ke()}function Ou(l){if(!Gn())return;let g=performance.now(),y=Math.min(l,12-kn);kn+=y,op+=y,y>0&&ep(y),Bn&&bu(l);let M=!!te;if(te&&(te.t=Math.min(te.dur,te.t+l),te.t>0)){te.running||(te.running=!0,r({type:"run",index:te.index,dir:te.dir,run:te.dur*1e3}));let N=te.t/te.dur,q=N<.5?2*N*N:1-2*(1-N)*(1-N);if(_o(te.from+(te.to-te.from)*q),Vn.y+=.12*Math.abs(Math.sin(Math.PI*te.hops*N)),te.wake&&(np(te.wake.to,te.wake.from),te.wake=null),N>=1){_o(te.to);let nt=te.index;te=null,r({type:"arrive",index:nt,walked:!0,moved:!0})}}if($e&&($e.t+=l,$e.t>=0&&!$e.go)){$e.go=!0,Ye=!1;let N=ar(Ei);oi=N.half,gn=N.center,ne={from:oe.clone(),to:N.center,t:0,dur:$e.dur,ease:ua,h0:ys||bs,h1:N.half},Hn()}ne?(ne.t=Math.min(ne.dur,ne.t+l),ne.e=ne.ease(Math.max(0,ne.t)/ne.dur),oe.lerpVectors(ne.from,ne.to,ne.e),ne.t>=ne.dur&&(ne=null,$e?.go&&($e=null))):M&&gn&&oe.copy(gn),Ke();let I=performance.now()-g;En.cpuMax=Math.max(En.cpuMax,I),En.cpuSum+=I,En.cpuN++}function Mp(l){if(ra=0,!Gn())return;let g=uo?Math.min((l-uo)/1e3,.05):0;uo=l,Ou(g),Du()||Hn(),Sn()}function Bu(l){let g=new Set,y=new Set;l.traverse(M=>{if(M.isMesh||M.isSprite){M.geometry&&g.add(M.geometry);for(let I of Array.isArray(M.material)?M.material:[M.material])y.add(I)}}),g.forEach(M=>M.dispose()),y.forEach(M=>{M.map?.dispose(),M.dispose()})}function zu(l,g){let y=(o.top-o.bottom)/Math.max(1,c.clientHeight);$e=null,ne=null,gn=null,xs=!1,oe.x-=l*y*Math.cos(qe)-g*y*Math.sin(qe),oe.z+=l*y*Math.sin(qe)+g*y*Math.cos(qe),Ke(),Hn()}function Sp(l,{animate:g=!1}={}){let y=oe.clone(),M=ys;if($e=null,ne=null,["left","right","up","down"].includes(l)&&zu(l==="left"?70:l==="right"?-70:0,l==="up"?70:l==="down"?-70:0),l==="in"&&(Dn=Math.min(1.6,Dn+.15)),l==="out"&&(Dn=Math.max(.7,Dn-.15)),l==="rotate"&&(qe=Math.min(1.15,qe+.18),xs=!1),l==="rotate-back"&&(qe=Math.max(-.3,qe-.18),xs=!1),l==="center"&&(Ye=!0,qe=wn,Dn=1,xs=!0,gn=null,ha()),l==="focus"){Ye=!1,Dn=1,xs=!0;let I=ar(Ei);oi=I.half,oe.copy(I.center),gn=I.center}g&&(l==="center"||l==="focus")&&ri().width>=900&&zn&&Gn()&&M&&(ne={from:y,to:oe.clone(),t:0,dur:.6,ease:ua,h0:M,h1:Ye?bs:oi},oe.copy(y),Sn()),Ke(),Hn()}let Wn=new Map,ku=new Vs,or=0,Vu=l=>{let g=c.getBoundingClientRect();return ku.setFromCamera(new Qt((l.clientX-g.left)/g.width*2-1,-(l.clientY-g.top)/g.height*2+1),o),ku.intersectObjects(Gt)[0]?.object.userData.stop};function bp(l){if(!(l.pointerType==="mouse"&&l.button!==0)&&(l.pointerType!=="mouse"&&l.preventDefault(),Wn.set(l.pointerId,{x:l.clientX,y:l.clientY,startX:l.clientX,startY:l.clientY,dragged:!1}),c.setPointerCapture(l.pointerId),Wn.size>1)){Wn.forEach(y=>y.dragged=!0);let g=[...Wn.values()];or=Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y)}}function Tp(l){let g=Wn.get(l.pointerId);if(!g){l.pointerType==="mouse"&&(c.style.cursor=Vu(l)===void 0?"grab":"pointer");return}let y=l.clientX-g.x,M=l.clientY-g.y;if(g.x=l.clientX,g.y=l.clientY,Wn.size===2&&Yi){let I=[...Wn.values()],N=Math.hypot(I[0].x-I[1].x,I[0].y-I[1].y);or>0&&(Dn=ti.clamp(Dn*N/or,.7,1.6)),or=N,Ke(),Hn();return}Math.hypot(g.x-g.startX,g.y-g.startY)>6&&(g.dragged=!0),g.dragged&&zu(y,Yi||l.pointerType==="mouse"?M:0)}function wp(l){let g=Wn.get(l.pointerId);if(Wn.delete(l.pointerId),or=0,!g||g.dragged)return;let y=Vu(l);y!==void 0?t(y):bo(!0)}function Gu(l){Yi=!!l,Wn.clear(),or=0,i.dataset.exploring=String(Yi),i.style.touchAction=Yi?"none":"pan-y",Hn()}function Ep(l){Yi&&(l.preventDefault(),Dn=ti.clamp(Dn*Math.exp(-l.deltaY*.0015),.7,1.6),Ke(),Hn())}c.addEventListener("pointerdown",bp),c.addEventListener("pointermove",Tp),c.addEventListener("pointerup",wp),c.addEventListener("pointercancel",l=>Wn.delete(l.pointerId)),c.addEventListener("wheel",Ep,{passive:!1}),c.addEventListener("webglcontextlost",l=>{l.preventDefault(),po=!0,Ts(),e("A visualiza\xE7\xE3o 3D foi interrompida. Continue pela lista de paradas.")});let Hu=new ResizeObserver(Nu);Hu.observe(i);let Wu=new IntersectionObserver(l=>{ho=l[0].isIntersecting,ho?Sn():(Ts(),So())});Wu.observe(i);let Xu=()=>{document.hidden?(Ts(),So()):Sn()};document.addEventListener("visibilitychange",Xu),J.forEach(l=>Au(l,nr[l.index])),Nu();{let l=new Fi,g=new ze(Lc,Dc,1);g.setColorAt(0,new Zt),l.add(g),h.compile(l,o),g.dispose()}return{select:_p,paintStops:vp,advance:Ou,render:Ke,anchors:Uu,camera:Sp,setExplore:Gu,setInsets({bottom:l=0}={}){Math.abs(l-ir)<1||(ir=l,ha(),Ke())},setCompact(l){go!==!!l&&(go=!!l,ha(),Ke())},setActive(l){Uc=l,l?Sn():(Ts(),Gu(!1),So(),bo())},intro({hold:l=1.6,dur:g=1.3}={}){if(ri().width<900||!zn||!Gn())return!1;let y=Lu();return Ye=!0,bs=y.half,oe.copy(yo(y.cx,y.cy)),$e={t:-l,dur:g,go:!1},Ke(),Hn(),Sn(),!0},skipIntro:()=>bo(!0),confetti:sp,endConfetti(){Bn&&(sa(),Ke())},gust:ip,setCalm(l){ta!==!!l&&(ta=!!l,kn<12&&Sn())},setKeep(l=null){if(aa===l)return;let g=oe.clone(),y=ys;aa=l,ha(),ri().width>=900&&zn&&Gn()&&!Ye&&y&&!te&&(ne={from:g,to:oe.clone(),t:0,dur:.3,ease:ua,h0:y,h1:oi},oe.copy(g),Sn()),Ke()},setMotion(l){zn=l,l?Sn():(Ts(),So(),bo(),Ke())},setManual(l){Cu=l,Ts(),l||Sn()},state:()=>({ready:!0,confetti:Bn?Bn.p.length:0,compact:go,short:ii,close:sr,intro:!!$e,selected:Ei,piece:Vn.toArray(),stopPositions:J.map(l=>[l.x,l.z]),stopHeights:J.map(l=>l.y),states:nr.map(l=>l.state),hop:!!te,cam:!!ne,frames:Ru,active:Uc,visible:ho,motion:zn,lost:po,tiles:xt.length,heights:[...new Set(xt.map(l=>l.height))],zoom:Dn,angle:qe,center:oe.toArray(),overview:Ye,exploring:Yi,ambient:kn,tilt:Be.on,metrics:{...En},life:{t:Ti,live:Qr,amp:d.uAmp.value,calm:ta,gust:d.uGust.value.z,fire:Rc(),bloom:d.uBloom.value.z,birdsAway:bi.filter(l=>l!==null).length,flock:qi>=0,fish:ao,wheel:ro},triangles:h.info.render.triangles,calls:h.info.render.calls}),raw:()=>({renderer:h,scene:a,camera:o,piece:co,stops:J,targets:Gt,curve:qt,trail:rt,wheel:xi,stream:Zr,flags:uu,guides:Kt,landmarks:me,markBox:Gi,millBox:_c,scenery:Ks,tilt:Be,life:{uniforms:d,critters:Oe,puffs:ni,clouds:_s,flames:ja,blades:Qs,perches:gs,lanterns:Hi,reeds:ms,blobs:Kr,glow:ei},field:rn,toTrail:Vi}),dispose(){mo=!0,Ts(),sa(),Lc.dispose(),Dc.dispose(),Hu.disconnect(),Wu.disconnect(),document.removeEventListener("visibilitychange",Xu),Bu(a),Bu(Be.scene),Be.tex?.dispose(),h.dispose(),c.remove()}}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
