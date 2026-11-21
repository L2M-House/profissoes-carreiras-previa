(()=>{var _f=0,xh=1,xf=2;var vh=1,vf=2,Ui=3,Qi=0,In=1,dn=2,bi=0,Ks=1,ar=2,yh=3,Mh=4,yf=5,ws=100,Mf=101,Sf=102,bf=103,Tf=104,wf=200,Ef=201,Af=202,Cf=203,Ja=204,$a=205,Rf=206,If=207,Pf=208,Lf=209,Df=210,Uf=211,Nf=212,Ff=213,Of=214,vl=0,yl=1,Ml=2,js=3,Sl=4,bl=5,Tl=6,wl=7,El=0,Bf=1,zf=2,ss=0,kf=1,Vf=2,Gf=3,Hf=4,Yr=5,Wf=6,Xf=7;var Sh=300,lr=301,cr=302,Al=303,Cl=304,$o=306,Ka=1e3,Ts=1001,ja=1002,bn=1003,qf=1004;var Ko=1005;var yi=1006,Rl=1007;var Is=1008;var Ti=1009,bh=1010,Th=1011,Zr=1012,Il=1013,Ps=1014,wi=1015,Jr=1016,Pl=1017,Ll=1018,$r=1020,wh=35902,Eh=35899,Ah=1021,Ch=1022,oi=1023,Fr=1026,Kr=1027,Dl=1028,Ul=1029,Rh=1030,Nl=1031;var Fl=1033,jo=33776,Qo=33777,ta=33778,ea=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,Jl=37813,$l=37814,Kl=37815,jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,cc=36285,hc=36286;var Uo=2300,Qa=2301,Za=2302,ch=2400,hh=2401,uh=2402;var Yf=3200,Zf=3201;var Ih=0,Jf=1,rs="",Rn="srgb",Qs="srgb-linear",No="linear",Fe="srgb";var $s=7680;var fh=519,$f=512,Kf=513,jf=514,Ph=515,Qf=516,td=517,ed=518,nd=519,dh=35044;var Lh="300 es",vi=2e3,Fo=2001;var ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,Lo=Math.PI/180,Or=180/Math.PI;function jr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function Ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ap(i,t,e){return i!==t?(e-i)/(t-i):0}function Do(i,t,e){return(1-e)*i+e*t}function Cp(i,t,e,n){return Do(i,t,1-Math.exp(-e*n))}function Rp(i,t=1){return t-Math.abs(Dh(i,t*2)-t)}function Ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dp(i,t){return i+Math.random()*(t-i)}function Up(i){return i*(.5-Math.random())}function Np(i){i!==void 0&&(qu=i);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(i){return i*Lo}function Op(i){return i*Or}function Bp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),p=o((t-n)/2),m=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*u,h*f,h*p,a*c);break;case"YZY":i.set(h*p,a*u,h*f,a*c);break;case"ZXZ":i.set(h*f,h*p,a*u,a*c);break;case"XZX":i.set(a*u,h*x,h*m,a*c);break;case"YXY":i.set(h*m,a*u,h*x,a*c);break;case"ZYZ":i.set(h*x,h*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kn={DEG2RAD:Lo,RAD2DEG:Or,generateUUID:jr,clamp:Se,euclideanModulo:Dh,mapLinear:Ep,inverseLerp:Ap,lerp:Do,damp:Cp,pingpong:Rp,smoothstep:Ip,smootherstep:Pp,randInt:Lp,randFloat:Dp,randFloatSpread:Up,seededRandom:Np,degToRad:Fp,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:zp,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Vp,normalize:Cn,denormalize:Ur},he=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},es=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let h=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],p=r[o+0],m=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=h,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=x,t[e+3]=M;return}if(f!==M||h!==p||c!==m||u!==x){let _=1-a,d=h*p+c*m+u*x+f*M,I=d>=0?1:-1,R=1-d*d;if(R>Number.EPSILON){let U=Math.sqrt(R),D=Math.atan2(U,d*I);_=Math.sin(_*D)/U,a=Math.sin(a*D)/U}let b=a*I;if(h=h*_+p*b,c=c*_+m*b,u=u*_+x*b,f=f*_+M*b,_===1-a){let U=1/Math.sqrt(h*h+c*c+u*u+f*f);h*=U,c*=U,u*=U,f*=U}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],h=n[s+1],c=n[s+2],u=n[s+3],f=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*f+h*m-c*p,t[e+1]=h*x+u*p+c*f-a*m,t[e+2]=c*x+u*m+a*p-h*f,t[e+3]=u*x-a*f-h*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),p=h(n/2),m=h(s/2),x=h(r/2);switch(o){case"XYZ":this._x=p*u*f+c*m*x,this._y=c*m*f-p*u*x,this._z=c*u*x+p*m*f,this._w=c*u*f-p*m*x;break;case"YXZ":this._x=p*u*f+c*m*x,this._y=c*m*f-p*u*x,this._z=c*u*x-p*m*f,this._w=c*u*f+p*m*x;break;case"ZXY":this._x=p*u*f-c*m*x,this._y=c*m*f+p*u*x,this._z=c*u*x+p*m*f,this._w=c*u*f-p*m*x;break;case"ZYX":this._x=p*u*f-c*m*x,this._y=c*m*f+p*u*x,this._z=c*u*x-p*m*f,this._w=c*u*f+p*m*x;break;case"YZX":this._x=p*u*f+c*m*x,this._y=c*m*f+p*u*x,this._z=c*u*x-p*m*f,this._w=c*u*f-p*m*x;break;case"XZY":this._x=p*u*f-c*m*x,this._y=c*m*f-p*u*x,this._z=c*u*x+p*m*f,this._w=c*u*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],c=e[2],u=e[6],f=e[10],p=n+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-h)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(u-h)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(h+u)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(h+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*h,this._y=s*u+o*h+r*a-n*c,this._z=r*u+o*c+n*h-s*a,this._w=o*u-n*a-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let h=1-a*a;if(h<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(h),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+h*c+o*f-a*u,this.y=n+h*u+a*c-r*f,this.z=s+h*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new z,Yu=new es,pe=class i{constructor(t,e,n,s,r,o,a,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,c)}set(t,e,n,s,r,o,a,h,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],u=n[4],f=n[7],p=n[2],m=n[5],x=n[8],M=s[0],_=s[3],d=s[6],I=s[1],R=s[4],b=s[7],U=s[2],D=s[5],F=s[8];return r[0]=o*M+a*I+h*U,r[3]=o*_+a*R+h*D,r[6]=o*d+a*b+h*F,r[1]=c*M+u*I+f*U,r[4]=c*_+u*R+f*D,r[7]=c*d+u*b+f*F,r[2]=p*M+m*I+x*U,r[5]=p*_+m*R+x*D,r[8]=p*d+m*b+x*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*h+s*r*c-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],u=t[8],f=u*o-a*c,p=a*h-u*r,m=c*r-o*h,x=e*f+n*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=f*M,t[1]=(s*c-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=p*M,t[4]=(u*e-s*h)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(n*h-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+t,-s*c,s*h,-s*(-c*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zc.makeScale(t,e)),this}rotate(t){return this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new pe;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=Oo("canvas");return i.style.display="block",i}var Zu={};function Br(i){i in Zu||(Zu[i]=!0,console.warn(i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ju=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?No:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:t,whitePoint:n,transfer:No,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Ju,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var Ie=Gp();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mr===void 0&&(Mr=Oo("canvas")),Mr.width=t.width,Mr.height=t.height;let s=Mr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Mr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hp=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wp=0,Vc=new z,Tn=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ts,s=Ts,r=yi,o=Is,a=oi,h=Ti,c=i.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=jr(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Sh;Tn.DEFAULT_ANISOTROPY=1;var Be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,c=h[0],u=h[4],f=h[8],p=h[1],m=h[5],x=h[9],M=h[2],_=h[6],d=h[10];if(Math.abs(u-p)<.01&&Math.abs(f-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(m+1)/2,U=(d+1)/2,D=(u+p)/4,F=(f+M)/4,G=(x+_)/4;return R>b&&R>U?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=D/n,r=F/n):b>U?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=D/s,r=G/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=F/r,s=G/r),this.set(n,s,r,e),this}let I=Math.sqrt((_-x)*(_-x)+(f-M)*(f-M)+(p-u)*(p-u));return Math.abs(I)<.001&&(I=1),this.x=(_-x)/I,this.y=(f-M)/I,this.z=(p-u)/I,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Tn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends el{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bo=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gi):gi.fromBufferAttribute(r,o),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Ra.subVectors(this.max,Eo),Sr.subVectors(t.a,Eo),br.subVectors(t.b,Eo),Tr.subVectors(t.c,Eo),_s.subVectors(br,Sr),xs.subVectors(Tr,br),qs.subVectors(Sr,Tr);let e=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-qs.z,qs.y,_s.z,0,-_s.x,xs.z,0,-xs.x,qs.z,0,-qs.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-qs.y,qs.x,0];return!Gc(e,Sr,br,Tr,Ra)||(e=[1,0,0,0,1,0,0,0,1],!Gc(e,Sr,br,Tr,Ra))?!1:(Ia.crossVectors(_s,xs),e=[Ia.x,Ia.y,Ia.z],Gc(e,Sr,br,Tr,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yi=[new z,new z,new z,new z,new z,new z,new z,new z],gi=new z,Ca=new Yn,Sr=new z,br=new z,Tr=new z,_s=new z,xs=new z,qs=new z,Eo=new z,Ra=new z,Ia=new z,Ys=new z;function Gc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ys.fromArray(i,r);let a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),h=t.dot(Ys),c=e.dot(Ys),u=n.dot(Ys);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>a)return!1}return!0}var Xp=new Yn,Ao=new z,Hc=new z,Es=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);let e=Ao.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Hc)),this.expandByPoint(Ao.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zi=new z,Wc=new z,Pa=new z,vs=new z,Xc=new z,La=new z,qc=new z,zo=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),vs.copy(this.origin).sub(Wc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=vs.dot(this.direction),h=-vs.dot(Pa),c=vs.lengthSq(),u=Math.abs(1-o*o),f,p,m,x;if(u>0)if(f=o*h-a,p=o*a-h,x=r*u,f>=0)if(p>=-x)if(p<=x){let M=1/u;f*=M,p*=M,m=f*(f+o*p+2*a)+p*(o*f+p+2*h)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-h),r),m=p*(p+2*h)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wc).addScaledVector(Pa,p),m}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,h,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,h=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,h=(t.min.z-p.z)*f),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,s,r){Xc.subVectors(e,t),La.subVectors(n,t),qc.crossVectors(Xc,La);let o=this.direction.dot(qc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,t);let h=a*this.direction.dot(La.crossVectors(vs,La));if(h<0)return null;let c=a*this.direction.dot(Xc.cross(vs));if(c<0||h+c>o)return null;let u=-a*vs.dot(qc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(t,e,n,s,r,o,a,h,c,u,f,p,m,x,M,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,c,u,f,p,m,x,M,_)}set(t,e,n,s,r,o,a,h,c,u,f,p,m,x,M,_){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=h,d[2]=c,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=x,d[11]=M,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/wr.setFromMatrixColumn(t,0).length(),r=1/wr.setFromMatrixColumn(t,1).length(),o=1/wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*u,m=o*f,x=a*u,M=a*f;e[0]=h*u,e[4]=-h*f,e[8]=c,e[1]=m+x*c,e[5]=p-M*c,e[9]=-a*h,e[2]=M-p*c,e[6]=x+m*c,e[10]=o*h}else if(t.order==="YXZ"){let p=h*u,m=h*f,x=c*u,M=c*f;e[0]=p+M*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=M+p*a,e[10]=o*h}else if(t.order==="ZXY"){let p=h*u,m=h*f,x=c*u,M=c*f;e[0]=p-M*a,e[4]=-o*f,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=M-p*a,e[2]=-o*c,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let p=o*u,m=o*f,x=a*u,M=a*f;e[0]=h*u,e[4]=x*c-m,e[8]=p*c+M,e[1]=h*f,e[5]=M*c+p,e[9]=m*c-x,e[2]=-c,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let p=o*h,m=o*c,x=a*h,M=a*c;e[0]=h*u,e[4]=M-p*f,e[8]=x*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+x,e[10]=p-M*f}else if(t.order==="XZY"){let p=o*h,m=o*c,x=a*h,M=a*c;e[0]=h*u,e[4]=-f,e[8]=c*u,e[1]=p*f+M,e[5]=o*u,e[9]=m*f-x,e[2]=x*f-m,e[6]=a*u,e[10]=M*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qp,t,Yp)}lookAt(t,e,n){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ys.crossVectors(n,Wn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ys.crossVectors(n,Wn)),ys.normalize(),Da.crossVectors(Wn,ys),s[0]=ys.x,s[4]=Da.x,s[8]=Wn.x,s[1]=ys.y,s[5]=Da.y,s[9]=Wn.y,s[2]=ys.z,s[6]=Da.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],u=n[1],f=n[5],p=n[9],m=n[13],x=n[2],M=n[6],_=n[10],d=n[14],I=n[3],R=n[7],b=n[11],U=n[15],D=s[0],F=s[4],G=s[8],E=s[12],w=s[1],O=s[5],q=s[9],$=s[13],et=s[2],nt=s[6],it=s[10],ot=s[14],V=s[3],tt=s[7],It=s[11],qt=s[15];return r[0]=o*D+a*w+h*et+c*V,r[4]=o*F+a*O+h*nt+c*tt,r[8]=o*G+a*q+h*it+c*It,r[12]=o*E+a*$+h*ot+c*qt,r[1]=u*D+f*w+p*et+m*V,r[5]=u*F+f*O+p*nt+m*tt,r[9]=u*G+f*q+p*it+m*It,r[13]=u*E+f*$+p*ot+m*qt,r[2]=x*D+M*w+_*et+d*V,r[6]=x*F+M*O+_*nt+d*tt,r[10]=x*G+M*q+_*it+d*It,r[14]=x*E+M*$+_*ot+d*qt,r[3]=I*D+R*w+b*et+U*V,r[7]=I*F+R*O+b*nt+U*tt,r[11]=I*G+R*q+b*it+U*It,r[15]=I*E+R*$+b*ot+U*qt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],c=t[13],u=t[2],f=t[6],p=t[10],m=t[14],x=t[3],M=t[7],_=t[11],d=t[15];return x*(+r*h*f-s*c*f-r*a*p+n*c*p+s*a*m-n*h*m)+M*(+e*h*m-e*c*p+r*o*p-s*o*m+s*c*u-r*h*u)+_*(+e*c*f-e*a*m-r*o*f+n*o*m+r*a*u-n*c*u)+d*(-s*a*u-e*h*f+e*a*p+s*o*f-n*o*p+n*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],u=t[8],f=t[9],p=t[10],m=t[11],x=t[12],M=t[13],_=t[14],d=t[15],I=f*_*c-M*p*c+M*h*m-a*_*m-f*h*d+a*p*d,R=x*p*c-u*_*c-x*h*m+o*_*m+u*h*d-o*p*d,b=u*M*c-x*f*c+x*a*m-o*M*m-u*a*d+o*f*d,U=x*f*h-u*M*h-x*a*p+o*M*p+u*a*_-o*f*_,D=e*I+n*R+s*b+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=I*F,t[1]=(M*p*r-f*_*r-M*s*m+n*_*m+f*s*d-n*p*d)*F,t[2]=(a*_*r-M*h*r+M*s*c-n*_*c-a*s*d+n*h*d)*F,t[3]=(f*h*r-a*p*r-f*s*c+n*p*c+a*s*m-n*h*m)*F,t[4]=R*F,t[5]=(u*_*r-x*p*r+x*s*m-e*_*m-u*s*d+e*p*d)*F,t[6]=(x*h*r-o*_*r-x*s*c+e*_*c+o*s*d-e*h*d)*F,t[7]=(o*p*r-u*h*r+u*s*c-e*p*c-o*s*m+e*h*m)*F,t[8]=b*F,t[9]=(x*f*r-u*M*r-x*n*m+e*M*m+u*n*d-e*f*d)*F,t[10]=(o*M*r-x*a*r+x*n*c-e*M*c-o*n*d+e*a*d)*F,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*m-e*a*m)*F,t[12]=U*F,t[13]=(u*M*s-x*f*s+x*n*p-e*M*p-u*n*_+e*f*_)*F,t[14]=(x*a*s-o*M*s-x*n*h+e*M*h+o*n*_-e*a*_)*F,t[15]=(o*f*s-u*a*s+u*n*h-e*f*h-o*n*p+e*a*p)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*h,c*h+s*a,0,c*a+s*h,u*a+n,u*h-s*o,0,c*h-s*a,u*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,c=r+r,u=o+o,f=a+a,p=r*c,m=r*u,x=r*f,M=o*u,_=o*f,d=a*f,I=h*c,R=h*u,b=h*f,U=n.x,D=n.y,F=n.z;return s[0]=(1-(M+d))*U,s[1]=(m+b)*U,s[2]=(x-R)*U,s[3]=0,s[4]=(m-b)*D,s[5]=(1-(p+d))*D,s[6]=(_+I)*D,s[7]=0,s[8]=(x+R)*F,s[9]=(_-I)*F,s[10]=(1-(p+M))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=wr.set(s[0],s[1],s[2]).length(),o=wr.set(s[4],s[5],s[6]).length(),a=wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_i.copy(this);let c=1/r,u=1/o,f=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,e.setFromRotationMatrix(_i),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vi,h=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),x,M;if(h)x=r/(o-r),M=o*r/(o-r);else if(a===vi)x=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Fo)x=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vi,h=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s),x,M;if(h)x=1/(o-r),M=o/(o-r);else if(a===vi)x=-2/(o-r),M=-(o+r)/(o-r);else if(a===Fo)x=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},wr=new z,_i=new Le,qp=new z(0,0,0),Yp=new z(1,1,1),ys=new z,Da=new z,Wn=new z,Ku=new Le,ju=new es,Mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],c=s[5],u=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zp=0,Qu=new z,Er=new es,Ji=new Le,Ua=new z,Co=new z,Jp=new z,$p=new es,tf=new z(1,0,0),ef=new z(0,1,0),nf=new z(0,0,1),sf={type:"added"},Kp={type:"removed"},Ar={type:"childadded",child:null},Yc={type:"childremoved",child:null},qe=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Mi,n=new es,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new pe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(tf,t)}rotateY(t){return this.rotateOnAxis(ef,t)}rotateZ(t){return this.rotateOnAxis(nf,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tf,t)}translateY(t){return this.translateOnAxis(ef,t)}translateZ(t){return this.translateOnAxis(nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ua.copy(t):Ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Co,Ua,this.up):Ji.lookAt(Ua,Co,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Ji),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kp),Yc.child=t,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let f=h[c];r(t.shapes,f)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let h=[];for(let c in a){let u=a[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};qe.DEFAULT_UP=new z(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new z,$i=new z,Zc=new z,Ki=new z,Cr=new z,Rr=new z,rf=new z,Jc=new z,$c=new z,Kc=new z,jc=new Be,Qc=new Be,th=new Be,bs=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xi.subVectors(t,e),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xi.subVectors(s,e),$i.subVectors(n,e),Zc.subVectors(t,e);let o=xi.dot(xi),a=xi.dot($i),h=xi.dot(Zc),c=$i.dot($i),u=$i.dot(Zc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*h-a*u)*p,x=(o*u-a*h)*p;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,n,s,r,o,a,h){return this.getBarycoord(t,e,n,s,Ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ki.x),h.addScaledVector(o,Ki.y),h.addScaledVector(a,Ki.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return jc.setScalar(0),Qc.setScalar(0),th.setScalar(0),jc.fromBufferAttribute(t,e),Qc.fromBufferAttribute(t,n),th.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jc,r.x),o.addScaledVector(Qc,r.y),o.addScaledVector(th,r.z),o}static isFrontFacing(t,e,n,s){return xi.subVectors(n,e),$i.subVectors(t,e),xi.cross($i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Cr.subVectors(s,n),Rr.subVectors(r,n),Jc.subVectors(t,n);let h=Cr.dot(Jc),c=Rr.dot(Jc);if(h<=0&&c<=0)return e.copy(n);$c.subVectors(t,s);let u=Cr.dot($c),f=Rr.dot($c);if(u>=0&&f<=u)return e.copy(s);let p=h*f-u*c;if(p<=0&&h>=0&&u<=0)return o=h/(h-u),e.copy(n).addScaledVector(Cr,o);Kc.subVectors(t,r);let m=Cr.dot(Kc),x=Rr.dot(Kc);if(x>=0&&m<=x)return e.copy(r);let M=m*c-h*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Rr,a);let _=u*x-m*f;if(_<=0&&f-u>=0&&m-x>=0)return rf.subVectors(r,s),a=(f-u)/(f-u+(m-x)),e.copy(s).addScaledVector(rf,a);let d=1/(_+M+p);return o=M*d,a=p*d,e.copy(n).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Na={h:0,s:0,l:0};function eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Dh(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=eh(o,r,t+1/3),this.g=eh(o,r,t),this.b=eh(o,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return Ie.workingToColorSpace(Sn.copy(this),t),Math.round(Se(Sn.r*255,0,255))*65536+Math.round(Se(Sn.g*255,0,255))*256+Math.round(Se(Sn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),h,c,u=(a+o)/2;if(a===o)h=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-n)/f+2;break;case r:h=(n-s)/f+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Rn){Ie.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(Na);let n=Do(Ms.h,Na.h,e),s=Do(Ms.s,Na.s,e),r=Do(Ms.l,Na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ie;ie.NAMES=rd;var jp=0,As=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Ks,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=$a,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gn=class extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new z,Fa=new he,Qp=0,en=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fa.fromBufferAttribute(this,e),Fa.applyMatrix3(t),this.setXY(e,Fa.x,Fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dh&&(t.usage=this.usage),t}};var ko=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vo=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Re=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},tm=0,si=new Le,nh=new qe,Ir=new z,Xn=new Yn,Ro=new Yn,un=new z,nn=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Vo:ko)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Xn.min,Ro.min),Xn.expandByPoint(un),un.addVectors(Xn.max,Ro.max),Xn.expandByPoint(un)):(Xn.expandByPoint(Ro.min),Xn.expandByPoint(Ro.max))}Xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],h=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),h&&(Ir.fromBufferAttribute(t,c),un.add(Ir)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],h=[];for(let G=0;G<n.count;G++)a[G]=new z,h[G]=new z;let c=new z,u=new z,f=new z,p=new he,m=new he,x=new he,M=new z,_=new z;function d(G,E,w){c.fromBufferAttribute(n,G),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,w),p.fromBufferAttribute(r,G),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,w),u.sub(c),f.sub(c),m.sub(p),x.sub(p);let O=1/(m.x*x.y-x.x*m.y);isFinite(O)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(O),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(O),a[G].add(M),a[E].add(M),a[w].add(M),h[G].add(_),h[E].add(_),h[w].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let G=0,E=I.length;G<E;++G){let w=I[G],O=w.start,q=w.count;for(let $=O,et=O+q;$<et;$+=3)d(t.getX($+0),t.getX($+1),t.getX($+2))}let R=new z,b=new z,U=new z,D=new z;function F(G){U.fromBufferAttribute(s,G),D.copy(U);let E=a[G];R.copy(E),R.sub(U.multiplyScalar(U.dot(E))).normalize(),b.crossVectors(D,E);let O=b.dot(h[G])<0?-1:1;o.setXYZW(G,R.x,R.y,R.z,O)}for(let G=0,E=I.length;G<E;++G){let w=I[G],O=w.start,q=w.count;for(let $=O,et=O+q;$<et;$+=3)F(t.getX($+0)),F(t.getX($+1)),F(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new z,r=new z,o=new z,a=new z,h=new z,c=new z,u=new z,f=new z;if(t)for(let p=0,m=t.count;p<m;p+=3){let x=t.getX(p+0),M=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),c.fromBufferAttribute(n,_),a.add(u),h.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,h){let c=a.array,u=a.itemSize,f=a.normalized,p=new c.constructor(h.length*u),m=0,x=0;for(let M=0,_=h.length;M<_;M++){a.isInterleavedBufferAttribute?m=h[M]*a.data.stride+a.offset:m=h[M]*u;for(let d=0;d<u;d++)p[x++]=c[m++]}return new en(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],c=t(h,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let h=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let p=c[u],m=t(p,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let c=n[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},of=new Le,Zs=new zo,Oa=new Es,af=new z,Ba=new z,za=new z,ka=new z,ih=new z,Va=new z,lf=new z,Ga=new z,ze=class extends qe{constructor(t=new nn,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=a[h],f=r[h];u!==0&&(ih.fromBufferAttribute(f,t),o?Va.addScaledVector(ih,u):Va.addScaledVector(ih.sub(e),u))}e.add(Va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Zs.copy(t.ray).recast(t.near),!(Oa.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Oa,af)===null||Zs.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(of.copy(r).invert(),Zs.copy(t.ray).applyMatrix4(of),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){let _=p[x],d=o[_.materialIndex],I=Math.max(_.start,m.start),R=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let b=I,U=R;b<U;b+=3){let D=a.getX(b),F=a.getX(b+1),G=a.getX(b+2);s=Ha(this,d,t,n,c,u,f,D,F,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=x,d=M;_<d;_+=3){let I=a.getX(_),R=a.getX(_+1),b=a.getX(_+2);s=Ha(this,o,t,n,c,u,f,I,R,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){let _=p[x],d=o[_.materialIndex],I=Math.max(_.start,m.start),R=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let b=I,U=R;b<U;b+=3){let D=b,F=b+1,G=b+2;s=Ha(this,d,t,n,c,u,f,D,F,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(h.count,m.start+m.count);for(let _=x,d=M;_<d;_+=3){let I=_,R=_+1,b=_+2;s=Ha(this,o,t,n,c,u,f,I,R,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function em(i,t,e,n,s,r,o,a){let h;if(t.side===In?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,t.side===Qi,a),h===null)return null;Ga.copy(a),Ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ga);return c<e.near||c>e.far?null:{distance:c,point:Ga.clone(),object:i}}function Ha(i,t,e,n,s,r,o,a,h,c){i.getVertexPosition(a,Ba),i.getVertexPosition(h,za),i.getVertexPosition(c,ka);let u=em(i,t,e,n,Ba,za,ka,lf);if(u){let f=new z;bs.getBarycoord(lf,Ba,za,ka,f),s&&(u.uv=bs.getInterpolatedAttribute(s,a,h,c,f,new he)),r&&(u.uv1=bs.getInterpolatedAttribute(r,a,h,c,f,new he)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,h,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:h,c,normal:new z,materialIndex:0};bs.getNormal(Ba,za,ka,p.normal),u.face=p,u.barycoord=f}return u}var Li=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],c=[],u=[],f=[],p=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function x(M,_,d,I,R,b,U,D,F,G,E){let w=b/F,O=U/G,q=b/2,$=U/2,et=D/2,nt=F+1,it=G+1,ot=0,V=0,tt=new z;for(let It=0;It<it;It++){let qt=It*O-$;for(let Gt=0;Gt<nt;Gt++){let Ee=Gt*w-q;tt[M]=Ee*I,tt[_]=qt*R,tt[d]=et,c.push(tt.x,tt.y,tt.z),tt[M]=0,tt[_]=0,tt[d]=D>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(Gt/F),f.push(1-It/G),ot+=1}}for(let It=0;It<G;It++)for(let qt=0;qt<F;qt++){let Gt=p+qt+nt*It,Ee=p+qt+nt*(It+1),Oe=p+(qt+1)+nt*(It+1),Te=p+(qt+1)+nt*It;h.push(Gt,Ee,Te),h.push(Ee,Oe,Te),V+=6}a.addGroup(m,V,E),m+=V,p+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=hr(i[e]);for(let s in n)t[s]=n[s]}return t}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var od={clone:hr,merge:wn},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},tr=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ss=new z,cf=new he,hf=new he,Nn=class extends tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,e){return this.getViewBounds(t,cf,hf),e.subVectors(hf,cf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/c,s*=o.width/h,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pr=-90,Lr=1,il=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Pr,Lr,t,e);s.layers=this.layers,this.add(s);let r=new Nn(Pr,Lr,t,e);r.layers=this.layers,this.add(r);let o=new Nn(Pr,Lr,t,e);o.layers=this.layers,this.add(o);let a=new Nn(Pr,Lr,t,e);a.layers=this.layers,this.add(a);let h=new Nn(Pr,Lr,t,e);h.layers=this.layers,this.add(h);let c=new Nn(Pr,Lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,h]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Go=class extends Tn{constructor(t=[],e=lr,n,s,r,o,a,h,c,u){super(t,e,n,s,r,o,a,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sl=class extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:bi});r.uniforms.tEquirect.value=e;let o=new ze(s,r),a=e.minFilter;return e.minFilter===Is&&(e.minFilter=yi),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qn=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},rm={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let _=e.getJointPose(M,n),d=this._getHandJoint(c,M);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ns=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var rl=class extends Tn{constructor(t=null,e=1,n=1,s,r,o,a,h,c=bn,u=bn,f,p){super(null,o,a,h,c,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dr=new Le,uf=new Le,Wa=[],ff=new Yn,om=new Le,Io=new ze,Po=new Es,ke=class extends ze{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,om)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),ff.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(ff)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),Po.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),uf.multiplyMatrices(n,Dr),Io.matrixWorld=uf,Io.raycast(t,Wa);for(let o=0,a=Wa.length;o<a;o++){let h=Wa[o];h.instanceId=r,h.object=this,e.push(h)}Wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rl(new Float32Array(s*this.count),s,this.count,Dl,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sh=new z,am=new z,lm=new pe,Ii=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sh.subVectors(n,e).cross(am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),s=this.coplanarPoint(sh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Es,cm=new he(.5,.5),Xa=new z,Gr=class{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],c=r[3],u=r[4],f=r[5],p=r[6],m=r[7],x=r[8],M=r[9],_=r[10],d=r[11],I=r[12],R=r[13],b=r[14],U=r[15];if(s[0].setComponents(c-o,m-u,d-x,U-I).normalize(),s[1].setComponents(c+o,m+u,d+x,U+I).normalize(),s[2].setComponents(c+a,m+f,d+M,U+R).normalize(),s[3].setComponents(c-a,m-f,d-M,U-R).normalize(),n)s[4].setComponents(h,p,_,b).normalize(),s[5].setComponents(c-h,m-p,d-_,U-b).normalize();else if(s[4].setComponents(c-h,m-p,d-_,U-b).normalize(),e===vi)s[5].setComponents(c+h,m+p,d+_,U+b).normalize();else if(e===Fo)s[5].setComponents(h,p,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){Js.center.set(0,0,0);let e=cm.distanceTo(t.center);return Js.radius=.7071067811865476+e,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ho=class extends Tn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=bn,this.minFilter=bn,this.generateMipmaps=!1,this.needsUpdate=!0}};var Hr=class extends Tn{constructor(t,e,n,s,r,o,a,h,c){super(t,e,n,s,r,o,a,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wo=class extends Tn{constructor(t,e,n=Ps,s,r,o,a=bn,h=bn,c,u=Fr,f=1){if(u!==Fr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:f};super(p,s,r,o,a,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xo=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var er=class i extends nn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],h=[],c=new z,u=new he;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){let m=n+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,h.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class i extends nn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],m=[],x=0,M=[],_=n/2,d=0;I(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(p,3)),this.setAttribute("uv",new Re(m,2));function I(){let b=new z,U=new z,D=0,F=(e-t)/n;for(let G=0;G<=r;G++){let E=[],w=G/r,O=w*(e-t)+t;for(let q=0;q<=s;q++){let $=q/s,et=$*h+a,nt=Math.sin(et),it=Math.cos(et);U.x=O*nt,U.y=-w*n+_,U.z=O*it,f.push(U.x,U.y,U.z),b.set(nt,F,it).normalize(),p.push(b.x,b.y,b.z),m.push($,1-w),E.push(x++)}M.push(E)}for(let G=0;G<s;G++)for(let E=0;E<r;E++){let w=M[E][G],O=M[E+1][G],q=M[E+1][G+1],$=M[E][G+1];(t>0||E!==0)&&(u.push(w,O,$),D+=3),(e>0||E!==r-1)&&(u.push(O,q,$),D+=3)}c.addGroup(d,D,0),d+=D}function R(b){let U=x,D=new he,F=new z,G=0,E=b===!0?t:e,w=b===!0?1:-1;for(let q=1;q<=s;q++)f.push(0,_*w,0),p.push(0,w,0),m.push(.5,.5),x++;let O=x;for(let q=0;q<=s;q++){let et=q/s*h+a,nt=Math.cos(et),it=Math.sin(et);F.x=E*it,F.y=_*w,F.z=E*nt,f.push(F.x,F.y,F.z),p.push(0,w,0),D.x=nt*.5+.5,D.y=it*.5*w+.5,m.push(D.x,D.y),x++}for(let q=0;q<s;q++){let $=U+q,et=O+q;b===!0?u.push(et,et+1,$):u.push(et+1,et,$),G+=3}c.addGroup(d,G,b===!0?1:2),d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class i extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wr=class i extends nn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(I){let R=new z,b=new z,U=new z;for(let D=0;D<e.length;D+=3)m(e[D+0],R),m(e[D+1],b),m(e[D+2],U),h(R,b,U,I)}function h(I,R,b,U){let D=U+1,F=[];for(let G=0;G<=D;G++){F[G]=[];let E=I.clone().lerp(b,G/D),w=R.clone().lerp(b,G/D),O=D-G;for(let q=0;q<=O;q++)q===0&&G===D?F[G][q]=E:F[G][q]=E.clone().lerp(w,q/O)}for(let G=0;G<D;G++)for(let E=0;E<2*(D-G)-1;E++){let w=Math.floor(E/2);E%2===0?(p(F[G][w+1]),p(F[G+1][w]),p(F[G][w])):(p(F[G][w+1]),p(F[G+1][w+1]),p(F[G+1][w]))}}function c(I){let R=new z;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(I),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function u(){let I=new z;for(let R=0;R<r.length;R+=3){I.x=r[R+0],I.y=r[R+1],I.z=r[R+2];let b=_(I)/2/Math.PI+.5,U=d(I)/Math.PI+.5;o.push(b,1-U)}x(),f()}function f(){for(let I=0;I<o.length;I+=6){let R=o[I+0],b=o[I+2],U=o[I+4],D=Math.max(R,b,U),F=Math.min(R,b,U);D>.9&&F<.1&&(R<.2&&(o[I+0]+=1),b<.2&&(o[I+2]+=1),U<.2&&(o[I+4]+=1))}}function p(I){r.push(I.x,I.y,I.z)}function m(I,R){let b=I*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function x(){let I=new z,R=new z,b=new z,U=new z,D=new he,F=new he,G=new he;for(let E=0,w=0;E<r.length;E+=9,w+=6){I.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),D.set(o[w+0],o[w+1]),F.set(o[w+2],o[w+3]),G.set(o[w+4],o[w+5]),U.copy(I).add(R).add(b).divideScalar(3);let O=_(U);M(D,w+0,I,O),M(F,w+2,R,O),M(G,w+4,b,O)}}function M(I,R,b,U){U<0&&I.x===1&&(o[R]=I.x-1),b.x===0&&b.z===0&&(o[R]=U/2/Math.PI+.5)}function _(I){return Math.atan2(I.z,-I.x)}function d(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xr=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ol=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,h=r-1,c;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===o)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),h=e||(o.isVector2?new he:new z);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,h=new Le;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Se(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(h.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Se(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(h.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,h){i=r,t=a,e=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,c){s(o,a,c*(a-r),c*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,c,u,f){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(h-o)/(u+f)+(h-a)/f;p*=u,m*=u,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qa=new z,rh=new Fh,oh=new Fh,ah=new Fh,qo=class extends ol{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(qa.subVectors(s[0],s[1]).add(s[0]),c=qa);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),M=Math.pow(f.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(u),m);M<1e-4&&(M=1),x<1e-4&&(x=M),_<1e-4&&(_=M),rh.initNonuniformCatmullRom(c.x,f.x,p.x,u.x,x,M,_),oh.initNonuniformCatmullRom(c.y,f.y,p.y,u.y,x,M,_),ah.initNonuniformCatmullRom(c.z,f.z,p.z,u.z,x,M,_)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,f.x,p.x,u.x,this.tension),oh.initCatmullRom(c.y,f.y,p.y,u.y,this.tension),ah.initCatmullRom(c.z,f.z,p.z,u.z,this.tension));return n.set(rh.calc(h),oh.calc(h),ah.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Jn=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var qr=class i extends Wr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},_n=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(s),c=a+1,u=h+1,f=t/a,p=e/h,m=[],x=[],M=[],_=[];for(let d=0;d<u;d++){let I=d*p-o;for(let R=0;R<c;R++){let b=R*f-r;x.push(b,-I,0),M.push(0,0,1),_.push(R/a),_.push(1-d/h)}}for(let d=0;d<h;d++)for(let I=0;I<a;I++){let R=I+c*d,b=I+c*(d+1),U=I+1+c*(d+1),D=I+1+c*d;m.push(R,b,D),m.push(b,U,D)}this.setIndex(m),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(M,3)),this.setAttribute("uv",new Re(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yo=class i extends nn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+a,Math.PI),c=0,u=[],f=new z,p=new z,m=[],x=[],M=[],_=[];for(let d=0;d<=n;d++){let I=[],R=d/n,b=0;d===0&&o===0?b=.5/e:d===n&&h===Math.PI&&(b=-.5/e);for(let U=0;U<=e;U++){let D=U/e;f.x=-t*Math.cos(s+D*r)*Math.sin(o+R*a),f.y=t*Math.cos(o+R*a),f.z=t*Math.sin(s+D*r)*Math.sin(o+R*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),_.push(D+b,1-R),I.push(c++)}u.push(I)}for(let d=0;d<n;d++)for(let I=0;I<e;I++){let R=u[d][I+1],b=u[d][I],U=u[d+1][I],D=u[d+1][I+1];(d!==0||o>0)&&m.push(R,b,D),(d!==n-1||h<Math.PI)&&m.push(b,U,D)}this.setIndex(m),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(M,3)),this.setAttribute("uv",new Re(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var nr=class i extends nn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],h=[],c=[],u=new z,f=new z,p=new z;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let M=x/s*r,_=m/n*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(M),f.y=(t+e*Math.cos(_))*Math.sin(M),f.z=e*Math.sin(_),a.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),c.push(x/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let M=(s+1)*m+x-1,_=(s+1)*(m-1)+x-1,d=(s+1)*(m-1)+x,I=(s+1)*m+x;o.push(M,_,I),o.push(_,d,I)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ri=class extends As{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},al=class extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ya(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ir=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends ir{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,h=2*n-e;break;case uh:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,c=h-a,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),M=x*x,_=M*x,d=-p*_+2*p*M-p*x,I=(1+p)*_+(-1.5-2*p)*M+(-.5+p)*x+1,R=(-1-m)*_+(1.5+m)*M+.5*x,b=m*_-m*M;for(let U=0;U!==a;++U)r[U]=d*o[u+U]+I*o[c+U]+R*o[h+U]+b*o[f+U];return r}},hl=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,c=h-a,u=(n-e)/(s-e),f=1-u;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[h+p]*u;return r}},ul=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ya(e,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ya(t.times,Array),values:Ya(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Uo:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(s!==void 0&&hm(s))for(let a=0,h=s.length;a!==h;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,o=1;for(let a=1;a<r;++a){let h=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)h=!0;else{let f=a*n,p=f-n,m=f+n;for(let x=0;x!==n;++x){let M=e[f+x];if(M!==e[p+x]||M!==e[m+x]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let f=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,h=o*n,c=0;c!==n;++c)e[h+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Qa;var Cs=class extends $n{constructor(t,e,n){super(t,e,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Uo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};fl.prototype.ValueTypeName="color";var dl=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};dl.prototype.ValueTypeName="number";var pl=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)es.slerpFlat(r,0,o,c-a,o,c,h);return r}},Zo=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends $n{constructor(t,e,n){super(t,e,n)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Uo;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ad=new gl,_l=class{constructor(t){this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sr=class extends Jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lh=new Le,df=new z,pf=new z,ph=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pf),e.updateMatrixWorld(),lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var is=class extends tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mh=class extends ph{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xl=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oh="\\[\\]\\.:\\/",um=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",fm="[^"+Oh.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Bh),pm=/(WCOD+)?/.source.replace("WCOD",fm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),_m=new RegExp("^"+dm+pm+mm+gm+"$"),xm=["material","materials","bones","map"],gh=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(um,"")}static parseTrackName(t){let e=_m.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=gh;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var mf=new Le,or=class{constructor(t,e,n=0,s=1/0){this.ray=new zo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(t,e=!0,n=[]){return _h(t,this,n,e),n.sort(gf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_h(t[s],this,n,e);return n.sort(gf),n}};function gf(i,t){return i.distance-t.distance}function _h(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)_h(r[o],t,e,!0)}}function zh(i,t,e,n){let s=vm(n);switch(e){case Ah:return i*t;case Dl:return i*t/s.components*s.byteLength;case Ul:return i*t/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case Nl:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case kl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(i){switch(i){case Ti:case bh:return{byteLength:1,components:1};case Zr:case Th:case Jr:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case Ps:case Il:case wi:return{byteLength:4,components:1};case wh:case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mm(i){let t=new WeakMap;function e(a,h){let c=a.array,u=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,h,c){let u=h.array,f=h.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<f.length;m++){let x=f[p],M=f[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++p,f[p]=M)}f.length=p+1;for(let m=0,x=f.length;m<x;m++){let M=f[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,h),c.version=a.version}}return{get:s,remove:r,update:o}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,Mg=`
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,C0=`#if DEPTH_PACKING == 3200
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
}`,R0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,H0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Sm,alphahash_pars_fragment:bm,alphamap_fragment:Tm,alphamap_pars_fragment:wm,alphatest_fragment:Em,alphatest_pars_fragment:Am,aomap_fragment:Cm,aomap_pars_fragment:Rm,batching_pars_vertex:Im,batching_vertex:Pm,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Um,iridescence_fragment:Nm,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:km,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Hm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:$m,emissivemap_pars_fragment:Km,colorspace_fragment:jm,colorspace_pars_fragment:Qm,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:bg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Ig,map_particle_pars_fragment:Pg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Vg,normal_pars_vertex:Gg,normal_vertex:Hg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:Zg,opaque_fragment:Jg,packing:$g,premultiplied_alpha_fragment:Kg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:x0,uv_vertex:v0,worldpos_vertex:y0,background_vert:M0,background_frag:S0,backgroundCube_vert:b0,backgroundCube_frag:T0,cube_vert:w0,cube_frag:E0,depth_vert:A0,depth_frag:C0,distanceRGBA_vert:R0,distanceRGBA_frag:I0,equirect_vert:P0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:k0,meshnormal_vert:V0,meshnormal_frag:G0,meshphong_vert:H0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:Z0,points_vert:J0,points_frag:$0,shadow_vert:K0,shadow_frag:j0,sprite_vert:Q0,sprite_frag:t_},Ct={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ni={basic:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ie(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:wn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:wn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ie(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:wn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:wn([Ct.points,Ct.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:wn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:wn([Ct.common,Ct.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:wn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:wn([Ct.sprite,Ct.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:wn([Ct.common,Ct.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:wn([Ct.lights,Ct.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:wn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var uc={r:0,b:0,g:0},ur=new Mi,e_=new Le;function n_(i,t,e,n,s,r,o){let a=new ie(0),h=r===!0?0:1,c,u,f=null,p=0,m=null;function x(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function M(R){let b=!1,U=x(R);U===null?d(a,h):U&&U.isColor&&(d(U,1),b=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,b){let U=x(b);U&&(U.isCubeTexture||U.mapping===$o)?(u===void 0&&(u=new ze(new Li(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:hr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ur.copy(b.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(ur)),u.material.toneMapped=Ie.getTransfer(U.colorSpace)!==Fe,(f!==U||p!==U.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=U,p=U.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new ze(new _n(2,2),new Zn({name:"BackgroundMaterial",uniforms:hr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(U.colorSpace)!==Fe,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||p!==U.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=U,p=U.version,m=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,b){R.getRGB(uc,Nh(i)),n.buffers.color.setClear(uc.r,uc.g,uc.b,b,o)}function I(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),h=b,d(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,d(a,h)},render:M,addToRenderList:_,dispose:I}}function i_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(w,O,q,$,et){let nt=!1,it=f($,q,O);r!==it&&(r=it,c(r.object)),nt=m(w,$,q,et),nt&&x(w,$,q,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,b(w,O,q,$),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function h(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function f(w,O,q){let $=q.wireframe===!0,et=n[w.id];et===void 0&&(et={},n[w.id]=et);let nt=et[O.id];nt===void 0&&(nt={},et[O.id]=nt);let it=nt[$];return it===void 0&&(it=p(h()),nt[$]=it),it}function p(w){let O=[],q=[],$=[];for(let et=0;et<e;et++)O[et]=0,q[et]=0,$[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:$,object:w,attributes:{},index:null}}function m(w,O,q,$){let et=r.attributes,nt=O.attributes,it=0,ot=q.getAttributes();for(let V in ot)if(ot[V].location>=0){let It=et[V],qt=nt[V];if(qt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(qt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(qt=w.instanceColor)),It===void 0||It.attribute!==qt||qt&&It.data!==qt.data)return!0;it++}return r.attributesNum!==it||r.index!==$}function x(w,O,q,$){let et={},nt=O.attributes,it=0,ot=q.getAttributes();for(let V in ot)if(ot[V].location>=0){let It=nt[V];It===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(It=w.instanceColor));let qt={};qt.attribute=It,It&&It.data&&(qt.data=It.data),et[V]=qt,it++}r.attributes=et,r.attributesNum=it,r.index=$}function M(){let w=r.newAttributes;for(let O=0,q=w.length;O<q;O++)w[O]=0}function _(w){d(w,0)}function d(w,O){let q=r.newAttributes,$=r.enabledAttributes,et=r.attributeDivisors;q[w]=1,$[w]===0&&(i.enableVertexAttribArray(w),$[w]=1),et[w]!==O&&(i.vertexAttribDivisor(w,O),et[w]=O)}function I(){let w=r.newAttributes,O=r.enabledAttributes;for(let q=0,$=O.length;q<$;q++)O[q]!==w[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function R(w,O,q,$,et,nt,it){it===!0?i.vertexAttribIPointer(w,O,q,et,nt):i.vertexAttribPointer(w,O,q,$,et,nt)}function b(w,O,q,$){M();let et=$.attributes,nt=q.getAttributes(),it=O.defaultAttributeValues;for(let ot in nt){let V=nt[ot];if(V.location>=0){let tt=et[ot];if(tt===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),tt!==void 0){let It=tt.normalized,qt=tt.itemSize,Gt=t.get(tt);if(Gt===void 0)continue;let Ee=Gt.buffer,Oe=Gt.type,Te=Gt.bytesPerElement,lt=Oe===i.INT||Oe===i.UNSIGNED_INT||tt.gpuType===Il;if(tt.isInterleavedBufferAttribute){let ft=tt.data,Nt=ft.stride,jt=tt.offset;if(ft.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)d(V.location+Rt,ft.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)_(V.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Rt=0;Rt<V.locationSize;Rt++)R(V.location+Rt,qt/V.locationSize,Oe,It,Nt*Te,(jt+qt/V.locationSize*Rt)*Te,lt)}else{if(tt.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)d(V.location+ft,tt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<V.locationSize;ft++)_(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ft=0;ft<V.locationSize;ft++)R(V.location+ft,qt/V.locationSize,Oe,It,qt*Te,qt/V.locationSize*ft*Te,lt)}}else if(it!==void 0){let It=it[ot];if(It!==void 0)switch(It.length){case 2:i.vertexAttrib2fv(V.location,It);break;case 3:i.vertexAttrib3fv(V.location,It);break;case 4:i.vertexAttrib4fv(V.location,It);break;default:i.vertexAttrib1fv(V.location,It)}}}}I()}function U(){G();for(let w in n){let O=n[w];for(let q in O){let $=O[q];for(let et in $)u($[et].object),delete $[et];delete O[q]}delete n[w]}}function D(w){if(n[w.id]===void 0)return;let O=n[w.id];for(let q in O){let $=O[q];for(let et in $)u($[et].object),delete $[et];delete O[q]}delete n[w.id]}function F(w){for(let O in n){let q=n[O];if(q[w.id]===void 0)continue;let $=q[w.id];for(let et in $)u($[et].object),delete $[et];delete q[w.id]}}function G(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:_,disableUnusedAttributes:I}}function s_(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];e.update(m,n,1)}function h(c,u,f,p){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,f);let x=0;for(let M=0;M<f;M++)x+=u[M]*p[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function r_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==oi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let G=F===Jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Ti&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==wi&&!G)}function h(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=h(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:U,maxSamples:D}}function o_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ii,a=new pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){let x=f.clippingPlanes,M=f.clipIntersection,_=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!_)r?u(null):c();else{let I=r?0:n,R=I*4,b=d.clippingState||null;h.value=b,b=u(x,p,R,m);for(let U=0;U!==R;++U)b[U]=e[U];d.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,m,x){let M=f!==null?f.length:0,_=null;if(M!==0){if(_=h.value,x!==!0||_===null){let d=m+M*4,I=p.matrixWorldInverse;a.getNormalMatrix(I),(_===null||_.length<d)&&(_=new Float32Array(d));for(let R=0,b=m;R!==M;++R,b+=4)o.copy(f[R]).applyMatrix4(I,a),o.normal.toArray(_,b),_[b+3]=o.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function a_(i){let t=new WeakMap;function e(o,a){return a===Al?o.mapping=lr:a===Cl&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Al||a===Cl)if(t.has(o)){let h=t.get(o).texture;return e(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let c=new sl(h.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var to=4,ld=[.125,.215,.35,.446,.526,.582],pr=20,kh=new is,cd=new ie,Vh=null,Gh=0,Hh=0,Wh=!1,dr=(1+Math.sqrt(5))/2,Qr=1/dr,hd=[new z(-dr,Qr,0),new z(dr,Qr,0),new z(-Qr,0,dr),new z(Qr,0,dr),new z(0,dr,-Qr),new z(0,dr,Qr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],l_=new z,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=l_}=r;Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,Gh,Hh),this._renderer.xr.enabled=Wh,t.scissorTest=!1,fc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Jr,format:oi,colorSpace:Qs,depthBuffer:!1},s=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=h_(r,t,e)}return s}_compileMaterial(t){let e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,kh)}_sceneToCubeUV(t,e,n,s,r){let h=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(cd),f.toneMapping=ss,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let M=new gn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new ze(new Li,M),d=!1,I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,d=!0):(M.color.copy(cd),d=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(h.up.set(0,c[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[R],r.y,r.z)):b===1?(h.up.set(0,0,c[R]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[R],r.z)):(h.up.set(0,c[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[R]));let U=this._cubeSize;fc(s,b*U,R>2?U:0,U,U),f.setRenderTarget(s),d&&f.render(_,h),f.render(t,h)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===lr||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;fc(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,kh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hd[(s-r-1)%hd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ze(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pr-1),M=r/x,_=isFinite(r)?1+Math.floor(u*M):pr;_>pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${pr}`);let d=[],I=0;for(let F=0;F<pr;++F){let G=F/M,E=Math.exp(-G*G/2);d.push(E),F===0?I+=E:F<_&&(I+=2*E)}for(let F=0;F<d.length;F++)d[F]=d[F]/I;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:R}=this;p.dTheta.value=x,p.mipInt.value=R-n;let b=this._sizeLods[s],U=3*b*(s>R-to?s-R+to:0),D=4*(this._cubeSize-b);fc(e,U,D,3*b,2*b),h.setRenderTarget(e),h.render(f,kh)}};function c_(i){let t=[],e=[],n=[],s=i,r=i-to+1+ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let h=1/a;o>i-to?h=ld[o-i+to-1]:o===0&&(h=0),n.push(h);let c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,M=3,_=2,d=1,I=new Float32Array(M*x*m),R=new Float32Array(_*x*m),b=new Float32Array(d*x*m);for(let D=0;D<m;D++){let F=D%3*2/3-1,G=D>2?0:-1,E=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];I.set(E,M*x*D),R.set(p,_*x*D);let w=[D,D,D,D,D,D];b.set(w,d*x*D)}let U=new nn;U.setAttribute("position",new en(I,M)),U.setAttribute("uv",new en(R,_)),U.setAttribute("faceIndex",new en(b,d)),t.push(U),s>to&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ud(i,t,e){let n=new Pi(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function h_(i,t,e){let n=new Float32Array(pr),s=new z(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fd(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function dd(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}function u_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let h=a.mapping,c=h===Al||h===Cl,u=h===lr||h===cr;if(c||u){let f=t.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new pc(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new pc(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let h=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&h++;return h===c}function r(a){let h=a.target;h.removeEventListener("dispose",r);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function f_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,t,e,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function h(f){let p=f.attributes;for(let m in p)t.update(p[m],i.ARRAY_BUFFER)}function c(f){let p=[],m=f.index,x=f.attributes.position,M=0;if(m!==null){let I=m.array;M=m.version;for(let R=0,b=I.length;R<b;R+=3){let U=I[R+0],D=I[R+1],F=I[R+2];p.push(U,D,D,F,F,U)}}else if(x!==void 0){let I=x.array;M=x.version;for(let R=0,b=I.length/3-1;R<b;R+=3){let U=R+0,D=R+1,F=R+2;p.push(U,D,D,F,F,U)}}else return;let _=new(Uh(p)?Vo:ko)(p,1);_.version=M;let d=r.get(f);d&&t.remove(d),r.set(f,_)}function u(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:h,getWireframeAttribute:u}}function p_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function h(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),e.update(m,n,x))}function u(p,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let _=0;for(let d=0;d<x;d++)_+=m[d];e.update(_,n,1)}function f(p,m,x,M){if(x===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<p.length;d++)c(p[d]/o,m[d],M[d]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,M,0,x);let d=0;for(let I=0;I<x;I++)d+=m[I]*M[I];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function m_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function g_(i,t,e){let n=new WeakMap,s=new Be;function r(o,a,h){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==f){let E=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],I=a.morphAttributes.color||[],R=0;m===!0&&(R=1),x===!0&&(R=2),M===!0&&(R=3);let b=a.attributes.position.count*R,U=1;b>t.maxTextureSize&&(U=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let D=new Float32Array(b*U*4*f),F=new Bo(D,b,U,f);F.type=wi,F.needsUpdate=!0;let G=R*4;for(let w=0;w<f;w++){let O=_[w],q=d[w],$=I[w],et=b*U*4*w;for(let nt=0;nt<O.count;nt++){let it=nt*G;m===!0&&(s.fromBufferAttribute(O,nt),D[et+it+0]=s.x,D[et+it+1]=s.y,D[et+it+2]=s.z,D[et+it+3]=0),x===!0&&(s.fromBufferAttribute(q,nt),D[et+it+4]=s.x,D[et+it+5]=s.y,D[et+it+6]=s.z,D[et+it+7]=0),M===!0&&(s.fromBufferAttribute($,nt),D[et+it+8]=s.x,D[et+it+9]=s.y,D[et+it+10]=s.z,D[et+it+11]=$.itemSize===4?s.w:1)}}p={count:f,texture:F,size:new he(b,U)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let x=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function __(i,t,e,n){let s=new WeakMap;function r(h){let c=n.render.frame,u=h.geometry,f=t.get(h,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(h){let c=h.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ld=new Tn,pd=new Wo(1,1),Dd=new Bo,Ud=new nl,Nd=new Go,md=[],gd=[],_d=new Float32Array(16),xd=new Float32Array(9),vd=new Float32Array(4);function io(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mc(i,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function S_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),cn(e,n)}}function b_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),cn(e,n)}}function T_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;_d.set(n),i.uniformMatrix4fv(this.addr,!1,_d),cn(e,n)}}function w_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function R_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function D_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pd.compareFunction=Ph,r=pd):r=Ld,e.setTexture2D(t||r,s)}function U_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function N_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nd,s)}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dd,s)}function O_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return I_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return F_}}function B_(i,t){i.uniform1fv(this.addr,t)}function z_(i,t){let e=io(t,this.size,2);i.uniform2fv(this.addr,e)}function k_(i,t){let e=io(t,this.size,3);i.uniform3fv(this.addr,e)}function V_(i,t){let e=io(t,this.size,4);i.uniform4fv(this.addr,e)}function G_(i,t){let e=io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function H_(i,t){let e=io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W_(i,t){let e=io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function X_(i,t){i.uniform1iv(this.addr,t)}function q_(i,t){i.uniform2iv(this.addr,t)}function Y_(i,t){i.uniform3iv(this.addr,t)}function Z_(i,t){i.uniform4iv(this.addr,t)}function J_(i,t){i.uniform1uiv(this.addr,t)}function $_(i,t){i.uniform2uiv(this.addr,t)}function K_(i,t){i.uniform3uiv(this.addr,t)}function j_(i,t){i.uniform4uiv(this.addr,t)}function Q_(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ld,r[o])}function tx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ud,r[o])}function ex(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nd,r[o])}function nx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dd,r[o])}function ix(i){switch(i){case 5126:return B_;case 35664:return z_;case 35665:return k_;case 35666:return V_;case 35674:return G_;case 35675:return H_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return $_;case 36295:return K_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O_(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function yd(i,t){i.seq.push(t),i.map[t.id]=t}function sx(i,t,e){let n=i.name,s=n.length;for(Xh.lastIndex=0;;){let r=Xh.exec(n),o=Xh.lastIndex,a=r[1],h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(e,c===void 0?new qh(a,i,t):new Yh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Zh(a),yd(e,f)),e=f}}}var eo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);sx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Md(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var rx=37297,ox=0;function ax(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sd=new pe;function lx(i){Ie._getMatrix(Sd,Ie.workingColorSpace,i);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ax(i.getShaderSource(t),a)}else return r}function cx(i,t){let e=lx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hx(i,t){let e;switch(t){case kf:e="Linear";break;case Vf:e="Reinhard";break;case Gf:e="Cineon";break;case Hf:e="ACESFilmic";break;case Wf:e="AgX";break;case Xf:e="Neutral";break;case Yr:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dc=new z;function ux(){Ie.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),t=dc.y.toFixed(4),e=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function dx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function px(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function na(i){return i!==""}function Td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(mx,_x)}var gx=new Map;function _x(i,t){let e=de[t];if(e===void 0){let n=gx.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jh(e)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(xx,vx)}function vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Mx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case El:t="ENVMAP_BLENDING_MULTIPLY";break;case Bf:t="ENVMAP_BLENDING_MIX";break;case zf:t="ENVMAP_BLENDING_ADD";break}return t}function Tx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,h=yx(e),c=Mx(e),u=Sx(e),f=bx(e),p=Tx(e),m=fx(e),x=dx(r),M=s.createProgram(),_,d,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(na).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(na).join(`
`),d.length>0&&(d+=`
`)):(_=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),d=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?de.tonemapping_pars_fragment:"",e.toneMapping!==ss?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,cx("linearToOutputTexel",e.outputColorSpace),ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(na).join(`
`)),o=Jh(o),o=Td(o,e),o=wd(o,e),a=Jh(a),a=Td(a,e),a=wd(a,e),o=Ed(o),a=Ed(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=I+_+o,b=I+d+a,U=Md(s,s.VERTEX_SHADER,R),D=Md(s,s.FRAGMENT_SHADER,b);s.attachShader(M,U),s.attachShader(M,D),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function F(O){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(M)||"",$=s.getShaderInfoLog(U)||"",et=s.getShaderInfoLog(D)||"",nt=q.trim(),it=$.trim(),ot=et.trim(),V=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,U,D);else{let It=bd(s,U,"vertex"),qt=bd(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+nt+`
`+It+`
`+qt)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(it===""||ot==="")&&(tt=!1);tt&&(O.diagnostics={runnable:V,programLog:nt,vertexShader:{log:it,prefix:_},fragmentShader:{log:ot,prefix:d}})}s.deleteShader(U),s.deleteShader(D),G=new eo(s,M),E=px(s,M)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(M,rx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ox++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=D,this}var Ex=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kh(t),e.set(t,n)),n}},Kh=class{constructor(t){this.id=Ex++,this.code=t,this.usedTimes=0}};function Ax(i,t,e,n,s,r,o){let a=new kr,h=new $h,c=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,w,O,q,$){let et=q.fog,nt=$.geometry,it=E.isMeshStandardMaterial?q.environment:null,ot=(E.isMeshStandardMaterial?e:t).get(E.envMap||it),V=ot&&ot.mapping===$o?ot.image.height:null,tt=x[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let It=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,qt=It!==void 0?It.length:0,Gt=0;nt.morphAttributes.position!==void 0&&(Gt=1),nt.morphAttributes.normal!==void 0&&(Gt=2),nt.morphAttributes.color!==void 0&&(Gt=3);let Ee,Oe,Te,lt;if(tt){let ue=Ni[tt];Ee=ue.vertexShader,Oe=ue.fragmentShader}else Ee=E.vertexShader,Oe=E.fragmentShader,h.update(E),Te=h.getVertexShaderID(E),lt=h.getFragmentShaderID(E);let ft=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),jt=$.isInstancedMesh===!0,Rt=$.isBatchedMesh===!0,ve=!!E.map,Ye=!!E.matcap,B=!!ot,De=!!E.aoMap,ee=!!E.lightMap,Jt=!!E.bumpMap,Ft=!!E.normalMap,Pe=!!E.displacementMap,Dt=!!E.emissiveMap,se=!!E.metalnessMap,we=!!E.roughnessMap,re=E.anisotropy>0,C=E.clearcoat>0,v=E.dispersion>0,H=E.iridescence>0,at=E.sheen>0,ct=E.transmission>0,rt=re&&!!E.anisotropyMap,Ht=C&&!!E.clearcoatMap,vt=C&&!!E.clearcoatNormalMap,Ot=C&&!!E.clearcoatRoughnessMap,Vt=H&&!!E.iridescenceMap,gt=H&&!!E.iridescenceThicknessMap,wt=at&&!!E.sheenColorMap,Kt=at&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Tt=!!E.specularColorMap,ne=!!E.specularIntensityMap,k=ct&&!!E.transmissionMap,pt=ct&&!!E.thicknessMap,yt=!!E.gradientMap,Ut=!!E.alphaMap,mt=E.alphaTest>0,ht=!!E.alphaHash,kt=!!E.extensions,Wt=ss;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let ge={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:Oe,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Rt,batchingColor:Rt&&$._colorsTexture!==null,instancing:jt,instancingColor:jt&&$.instanceColor!==null,instancingMorph:jt&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Qs,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:Ye,envMap:B,envMapMode:B&&ot.mapping,envMapCubeUVHeight:V,aoMap:De,lightMap:ee,bumpMap:Jt,normalMap:Ft,displacementMap:p&&Pe,emissiveMap:Dt,normalMapObjectSpace:Ft&&E.normalMapType===Jf,normalMapTangentSpace:Ft&&E.normalMapType===Ih,metalnessMap:se,roughnessMap:we,anisotropy:re,anisotropyMap:rt,clearcoat:C,clearcoatMap:Ht,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ot,dispersion:v,iridescence:H,iridescenceMap:Vt,iridescenceThicknessMap:gt,sheen:at,sheenColorMap:wt,sheenRoughnessMap:Kt,specularMap:Bt,specularColorMap:Tt,specularIntensityMap:ne,transmission:ct,transmissionMap:k,thicknessMap:pt,gradientMap:yt,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:Ut,alphaTest:mt,alphaHash:ht,combine:E.combine,mapUv:ve&&M(E.map.channel),aoMapUv:De&&M(E.aoMap.channel),lightMapUv:ee&&M(E.lightMap.channel),bumpMapUv:Jt&&M(E.bumpMap.channel),normalMapUv:Ft&&M(E.normalMap.channel),displacementMapUv:Pe&&M(E.displacementMap.channel),emissiveMapUv:Dt&&M(E.emissiveMap.channel),metalnessMapUv:se&&M(E.metalnessMap.channel),roughnessMapUv:we&&M(E.roughnessMap.channel),anisotropyMapUv:rt&&M(E.anisotropyMap.channel),clearcoatMapUv:Ht&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:vt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&M(E.sheenRoughnessMap.channel),specularMapUv:Bt&&M(E.specularMap.channel),specularColorMapUv:Tt&&M(E.specularColorMap.channel),specularIntensityMapUv:ne&&M(E.specularIntensityMap.channel),transmissionMapUv:k&&M(E.transmissionMap.channel),thicknessMapUv:pt&&M(E.thicknessMap.channel),alphaMapUv:Ut&&M(E.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Ft||re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!nt.attributes.uv&&(ve||Ut),fog:!!et,useFog:E.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Nt,skinning:$.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&Ie.getTransfer(E.map.colorSpace)===Fe,decodeVideoTextureEmissive:Dt&&E.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(E.emissiveMap.colorSpace)===Fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===In,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function d(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let O in E.defines)w.push(O),w.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(I(w,E),R(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function I(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function R(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){let w=x[E.type],O;if(w){let q=Ni[w];O=od.clone(q.uniforms)}else O=E.uniforms;return O}function U(E,w){let O;for(let q=0,$=u.length;q<$;q++){let et=u[q];if(et.cacheKey===w){O=et,++O.usedTimes;break}}return O===void 0&&(O=new wx(i,w,E,r),u.push(O)),O}function D(E){if(--E.usedTimes===0){let w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function F(E){h.remove(E)}function G(){h.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:b,acquireProgram:U,releaseProgram:D,releaseShaderCache:F,programs:u,dispose:G}}function Cx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,m,x,M,_){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:M,group:_},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=M,d.group=_),t++,d}function a(f,p,m,x,M,_){let d=o(f,p,m,x,M,_);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function h(f,p,m,x,M,_){let d=o(f,p,m,x,M,_);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||Rx),n.length>1&&n.sort(p||Cd),s.length>1&&s.sort(p||Cd)}function u(){for(let f=t,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:u,sort:c}}function Ix(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Rd,i.set(n,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new ie};break;case"SpotLight":e={position:new z,direction:new z,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dx=0;function Ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nx(i){let t=new Px,e=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Le,o=new Le;function a(c){let u=0,f=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,x=0,M=0,_=0,d=0,I=0,R=0,b=0,U=0,D=0,F=0;c.sort(Ux);for(let E=0,w=c.length;E<w;E++){let O=c[E],q=O.color,$=O.intensity,et=O.distance,nt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=q.r*$,f+=q.g*$,p+=q.b*$;else if(O.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(O.sh.coefficients[it],$);F++}else if(O.isDirectionalLight){let it=t.get(O);if(it.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ot=O.shadow,V=e.get(O);V.shadowIntensity=ot.intensity,V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=O.shadow.matrix,I++}n.directional[m]=it,m++}else if(O.isSpotLight){let it=t.get(O);it.position.setFromMatrixPosition(O.matrixWorld),it.color.copy(q).multiplyScalar($),it.distance=et,it.coneCos=Math.cos(O.angle),it.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),it.decay=O.decay,n.spot[M]=it;let ot=O.shadow;if(O.map&&(n.spotLightMap[U]=O.map,U++,ot.updateMatrices(O),O.castShadow&&D++),n.spotLightMatrix[M]=ot.matrix,O.castShadow){let V=e.get(O);V.shadowIntensity=ot.intensity,V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=nt,b++}M++}else if(O.isRectAreaLight){let it=t.get(O);it.color.copy(q).multiplyScalar($),it.halfWidth.set(O.width*.5,0,0),it.halfHeight.set(0,O.height*.5,0),n.rectArea[_]=it,_++}else if(O.isPointLight){let it=t.get(O);if(it.color.copy(O.color).multiplyScalar(O.intensity),it.distance=O.distance,it.decay=O.decay,O.castShadow){let ot=O.shadow,V=e.get(O);V.shadowIntensity=ot.intensity,V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,V.shadowCameraNear=ot.camera.near,V.shadowCameraFar=ot.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=nt,n.pointShadowMatrix[x]=O.shadow.matrix,R++}n.point[x]=it,x++}else if(O.isHemisphereLight){let it=t.get(O);it.skyColor.copy(O.color).multiplyScalar($),it.groundColor.copy(O.groundColor).multiplyScalar($),n.hemi[d]=it,d++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;let G=n.hash;(G.directionalLength!==m||G.pointLength!==x||G.spotLength!==M||G.rectAreaLength!==_||G.hemiLength!==d||G.numDirectionalShadows!==I||G.numPointShadows!==R||G.numSpotShadows!==b||G.numSpotMaps!==U||G.numLightProbes!==F)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+U-D,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=F,G.directionalLength=m,G.pointLength=x,G.spotLength=M,G.rectAreaLength=_,G.hemiLength=d,G.numDirectionalShadows=I,G.numPointShadows=R,G.numSpotShadows=b,G.numSpotMaps=U,G.numLightProbes=F,n.version=Dx++)}function h(c,u){let f=0,p=0,m=0,x=0,M=0,_=u.matrixWorldInverse;for(let d=0,I=c.length;d<I;d++){let R=c[d];if(R.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),f++}else if(R.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),m++}else if(R.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(R.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(R.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),p++}else if(R.isHemisphereLight){let b=n.hemi[M];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(_),M++}}}return{setup:a,setupView:h,state:n}}function Id(i){let t=new Nx(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function Fx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Id(i),t.set(s,[a])):r>=o.length?(a=new Id(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;function zx(i,t,e){let n=new Gr,s=new he,r=new he,o=new Be,a=new al({depthPacking:Zf}),h=new ll,c={},u=e.maxTextureSize,f={[Qi]:In,[In]:Qi,[dn]:dn},p=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new nn;x.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ze(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let d=this.type;this.render=function(D,F,G){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;let E=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(bi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let $=d!==Ui&&this.type===Ui,et=d===Ui&&this.type!==Ui;for(let nt=0,it=D.length;nt<it;nt++){let ot=D[nt],V=ot.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let tt=V.getFrameExtents();if(s.multiply(tt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||$===!0||et===!0){let qt=this.type!==Ui?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new Pi(s.x,s.y,qt),V.map.texture.name=ot.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let It=V.getViewportCount();for(let qt=0;qt<It;qt++){let Gt=V.getViewport(qt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),q.viewport(o),V.updateMatrices(ot,qt),n=V.getFrustum(),b(F,G,V.camera,ot,this.type)}V.isPointLightShadow!==!0&&this.type===Ui&&I(V,G),V.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(E,w,O)};function I(D,F){let G=t.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Pi(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(F,null,G,p,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(F,null,G,m,M,null)}function R(D,F,G,E){let w=null,O=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)w=O;else if(w=G.isPointLight===!0?h:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let q=w.uuid,$=F.uuid,et=c[q];et===void 0&&(et={},c[q]=et);let nt=et[$];nt===void 0&&(nt=w.clone(),et[$]=nt,F.addEventListener("dispose",U)),w=nt}if(w.visible=F.visible,w.wireframe=F.wireframe,E===Ui?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:f[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=i.properties.get(w);q.light=G}return w}function b(D,F,G,E,w){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===Ui)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);let $=t.update(D),et=D.material;if(Array.isArray(et)){let nt=$.groups;for(let it=0,ot=nt.length;it<ot;it++){let V=nt[it],tt=et[V.materialIndex];if(tt&&tt.visible){let It=R(D,tt,E,w);D.onBeforeShadow(i,D,F,G,$,It,V),i.renderBufferDirect(G,null,$,It,D,V),D.onAfterShadow(i,D,F,G,$,It,V)}}}else if(et.visible){let nt=R(D,et,E,w);D.onBeforeShadow(i,D,F,G,$,nt,null),i.renderBufferDirect(G,null,$,nt,D,null),D.onAfterShadow(i,D,F,G,$,nt,null)}}let q=D.children;for(let $=0,et=q.length;$<et;$++)b(q[$],F,G,E,w)}function U(D){D.target.removeEventListener("dispose",U);for(let G in c){let E=c[G],w=D.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var kx={[vl]:yl,[Ml]:Tl,[Sl]:wl,[js]:bl,[yl]:vl,[Tl]:Ml,[wl]:Sl,[bl]:js};function Vx(i,t){function e(){let k=!1,pt=new Be,yt=null,Ut=new Be(0,0,0,0);return{setMask:function(mt){yt!==mt&&!k&&(i.colorMask(mt,mt,mt,mt),yt=mt)},setLocked:function(mt){k=mt},setClear:function(mt,ht,kt,Wt,ge){ge===!0&&(mt*=Wt,ht*=Wt,kt*=Wt),pt.set(mt,ht,kt,Wt),Ut.equals(pt)===!1&&(i.clearColor(mt,ht,kt,Wt),Ut.copy(pt))},reset:function(){k=!1,yt=null,Ut.set(-1,0,0,0)}}}function n(){let k=!1,pt=!1,yt=null,Ut=null,mt=null;return{setReversed:function(ht){if(pt!==ht){let kt=t.get("EXT_clip_control");ht?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),pt=ht;let Wt=mt;mt=null,this.setClear(Wt)}},getReversed:function(){return pt},setTest:function(ht){ht?ft(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(ht){yt!==ht&&!k&&(i.depthMask(ht),yt=ht)},setFunc:function(ht){if(pt&&(ht=kx[ht]),Ut!==ht){switch(ht){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=ht}},setLocked:function(ht){k=ht},setClear:function(ht){mt!==ht&&(pt&&(ht=1-ht),i.clearDepth(ht),mt=ht)},reset:function(){k=!1,yt=null,Ut=null,mt=null,pt=!1}}}function s(){let k=!1,pt=null,yt=null,Ut=null,mt=null,ht=null,kt=null,Wt=null,ge=null;return{setTest:function(ue){k||(ue?ft(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ue){pt!==ue&&!k&&(i.stencilMask(ue),pt=ue)},setFunc:function(ue,hn,Ze){(yt!==ue||Ut!==hn||mt!==Ze)&&(i.stencilFunc(ue,hn,Ze),yt=ue,Ut=hn,mt=Ze)},setOp:function(ue,hn,Ze){(ht!==ue||kt!==hn||Wt!==Ze)&&(i.stencilOp(ue,hn,Ze),ht=ue,kt=hn,Wt=Ze)},setLocked:function(ue){k=ue},setClear:function(ue){ge!==ue&&(i.clearStencil(ue),ge=ue)},reset:function(){k=!1,pt=null,yt=null,Ut=null,mt=null,ht=null,kt=null,Wt=null,ge=null}}}let r=new e,o=new n,a=new s,h=new WeakMap,c=new WeakMap,u={},f={},p=new WeakMap,m=[],x=null,M=!1,_=null,d=null,I=null,R=null,b=null,U=null,D=null,F=new ie(0,0,0),G=0,E=!1,w=null,O=null,q=null,$=null,et=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,ot=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(V)[1]),it=ot>=1):V.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),it=ot>=2);let tt=null,It={},qt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Ee=new Be().fromArray(qt),Oe=new Be().fromArray(Gt);function Te(k,pt,yt,Ut){let mt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(k,ht),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<yt;kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ht}let lt={};lt[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(js),Jt(!1),Ft(xh),ft(i.CULL_FACE),De(bi);function ft(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Nt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function jt(k,pt){return f[k]!==pt?(i.bindFramebuffer(k,pt),f[k]=pt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Rt(k,pt){let yt=m,Ut=!1;if(k){yt=p.get(pt),yt===void 0&&(yt=[],p.set(pt,yt));let mt=k.textures;if(yt.length!==mt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,kt=mt.length;ht<kt;ht++)yt[ht]=i.COLOR_ATTACHMENT0+ht;yt.length=mt.length,Ut=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(yt)}function ve(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let Ye={[ws]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};Ye[bf]=i.MIN,Ye[Tf]=i.MAX;let B={[wf]:i.ZERO,[Ef]:i.ONE,[Af]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Rf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Of]:i.ONE_MINUS_CONSTANT_ALPHA};function De(k,pt,yt,Ut,mt,ht,kt,Wt,ge,ue){if(k===bi){M===!0&&(Nt(i.BLEND),M=!1);return}if(M===!1&&(ft(i.BLEND),M=!0),k!==yf){if(k!==_||ue!==E){if((d!==ws||b!==ws)&&(i.blendEquation(i.FUNC_ADD),d=ws,b=ws),ue)switch(k){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,R=null,U=null,D=null,F.set(0,0,0),G=0,_=k,E=ue}return}mt=mt||pt,ht=ht||yt,kt=kt||Ut,(pt!==d||mt!==b)&&(i.blendEquationSeparate(Ye[pt],Ye[mt]),d=pt,b=mt),(yt!==I||Ut!==R||ht!==U||kt!==D)&&(i.blendFuncSeparate(B[yt],B[Ut],B[ht],B[kt]),I=yt,R=Ut,U=ht,D=kt),(Wt.equals(F)===!1||ge!==G)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ge),F.copy(Wt),G=ge),_=k,E=!1}function ee(k,pt){k.side===dn?Nt(i.CULL_FACE):ft(i.CULL_FACE);let yt=k.side===In;pt&&(yt=!yt),Jt(yt),k.blending===Ks&&k.transparent===!1?De(bi):De(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ut=k.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function Ft(k){k!==_f?(ft(i.CULL_FACE),k!==O&&(k===xh?i.cullFace(i.BACK):k===xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),O=k}function Pe(k){k!==q&&(it&&i.lineWidth(k),q=k)}function Dt(k,pt,yt){k?(ft(i.POLYGON_OFFSET_FILL),($!==pt||et!==yt)&&(i.polygonOffset(pt,yt),$=pt,et=yt)):Nt(i.POLYGON_OFFSET_FILL)}function se(k){k?ft(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function we(k){k===void 0&&(k=i.TEXTURE0+nt-1),tt!==k&&(i.activeTexture(k),tt=k)}function re(k,pt,yt){yt===void 0&&(tt===null?yt=i.TEXTURE0+nt-1:yt=tt);let Ut=It[yt];Ut===void 0&&(Ut={type:void 0,texture:void 0},It[yt]=Ut),(Ut.type!==k||Ut.texture!==pt)&&(tt!==yt&&(i.activeTexture(yt),tt=yt),i.bindTexture(k,pt||lt[k]),Ut.type=k,Ut.texture=pt)}function C(){let k=It[tt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(k){Ee.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ee.copy(k))}function Kt(k){Oe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function Bt(k,pt){let yt=c.get(pt);yt===void 0&&(yt=new WeakMap,c.set(pt,yt));let Ut=yt.get(k);Ut===void 0&&(Ut=i.getUniformBlockIndex(pt,k.name),yt.set(k,Ut))}function Tt(k,pt){let Ut=c.get(pt).get(k);h.get(pt)!==Ut&&(i.uniformBlockBinding(pt,Ut,k.__bindingPointIndex),h.set(pt,Ut))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,It={},f={},p=new WeakMap,m=[],x=null,M=!1,_=null,d=null,I=null,R=null,b=null,U=null,D=null,F=new ie(0,0,0),G=0,E=!1,w=null,O=null,q=null,$=null,et=null,Ee.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Nt,bindFramebuffer:jt,drawBuffers:Rt,useProgram:ve,setBlending:De,setMaterial:ee,setFlipSided:Jt,setCullFace:Ft,setLineWidth:Pe,setPolygonOffset:Dt,setScissorTest:se,activeTexture:we,bindTexture:re,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Vt,texImage3D:gt,updateUBOMapping:Bt,uniformBlockBinding:Tt,texStorage2D:vt,texStorage3D:Ot,texSubImage2D:at,texSubImage3D:ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ht,scissor:wt,viewport:Kt,reset:ne}}function Gx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return m?new OffscreenCanvas(C,v):Oo("canvas")}function M(C,v,H){let at=1,ct=re(C);if((ct.width>H||ct.height>H)&&(at=H/Math.max(ct.width,ct.height)),at<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(at*ct.width),Ht=Math.floor(at*ct.height);f===void 0&&(f=x(rt,Ht));let vt=v?x(rt,Ht):f;return vt.width=rt,vt.height=Ht,vt.getContext("2d").drawImage(C,0,0,rt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+rt+"x"+Ht+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function _(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(C,v,H,at,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=v;if(v===i.RED&&(H===i.FLOAT&&(rt=i.R32F),H===i.HALF_FLOAT&&(rt=i.R16F),H===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(rt=i.R8UI),H===i.UNSIGNED_SHORT&&(rt=i.R16UI),H===i.UNSIGNED_INT&&(rt=i.R32UI),H===i.BYTE&&(rt=i.R8I),H===i.SHORT&&(rt=i.R16I),H===i.INT&&(rt=i.R32I)),v===i.RG&&(H===i.FLOAT&&(rt=i.RG32F),H===i.HALF_FLOAT&&(rt=i.RG16F),H===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(rt=i.RG8UI),H===i.UNSIGNED_SHORT&&(rt=i.RG16UI),H===i.UNSIGNED_INT&&(rt=i.RG32UI),H===i.BYTE&&(rt=i.RG8I),H===i.SHORT&&(rt=i.RG16I),H===i.INT&&(rt=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),H===i.UNSIGNED_INT&&(rt=i.RGB32UI),H===i.BYTE&&(rt=i.RGB8I),H===i.SHORT&&(rt=i.RGB16I),H===i.INT&&(rt=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),H===i.UNSIGNED_INT&&(rt=i.RGBA32UI),H===i.BYTE&&(rt=i.RGBA8I),H===i.SHORT&&(rt=i.RGBA16I),H===i.INT&&(rt=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),v===i.RGBA){let Ht=ct?No:Ie.getTransfer(at);H===i.FLOAT&&(rt=i.RGBA32F),H===i.HALF_FLOAT&&(rt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(rt=Ht===Fe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function b(C,v){let H;return C?v===null||v===Ps||v===$r?H=i.DEPTH24_STENCIL8:v===wi?H=i.DEPTH32F_STENCIL8:v===Zr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ps||v===$r?H=i.DEPTH_COMPONENT24:v===wi?H=i.DEPTH_COMPONENT32F:v===Zr&&(H=i.DEPTH_COMPONENT16),H}function U(C,v){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==yi?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function D(C){let v=C.target;v.removeEventListener("dispose",D),G(v),v.isVideoTexture&&u.delete(v)}function F(C){let v=C.target;v.removeEventListener("dispose",F),w(v)}function G(C){let v=n.get(C);if(v.__webglInit===void 0)return;let H=C.source,at=p.get(H);if(at){let ct=at[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(C),Object.keys(at).length===0&&p.delete(H)}n.remove(C)}function E(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let H=C.source,at=p.get(H);delete at[v.__cacheKey],o.memory.textures--}function w(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(v.__webglFramebuffer[at]))for(let ct=0;ct<v.__webglFramebuffer[at].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[at][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[at]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[at])}else{if(Array.isArray(v.__webglFramebuffer))for(let at=0;at<v.__webglFramebuffer.length;at++)i.deleteFramebuffer(v.__webglFramebuffer[at]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let at=0;at<v.__webglColorRenderbuffer.length;at++)v.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[at]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=C.textures;for(let at=0,ct=H.length;at<ct;at++){let rt=n.get(H[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(H[at])}n.remove(C)}let O=0;function q(){O=0}function $(){let C=O;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function et(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function nt(C,v){let H=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let at=C.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function it(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){lt(H,C,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ot(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){lt(H,C,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function V(C,v){let H=n.get(C);if(C.version>0&&H.__version!==C.version){ft(H,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let tt={[Ka]:i.REPEAT,[Ts]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},It={[bn]:i.NEAREST,[qf]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},qt={[$f]:i.NEVER,[nd]:i.ALWAYS,[Kf]:i.LESS,[Ph]:i.LEQUAL,[jf]:i.EQUAL,[ed]:i.GEQUAL,[Qf]:i.GREATER,[td]:i.NOTEQUAL};function Gt(C,v){if(v.type===wi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===yi||v.magFilter===Rl||v.magFilter===Ko||v.magFilter===Is||v.minFilter===yi||v.minFilter===Rl||v.minFilter===Ko||v.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,It[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,It[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,qt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Ko&&v.minFilter!==Is||v.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",D));let at=v.source,ct=p.get(at);ct===void 0&&(ct={},p.set(at,ct));let rt=et(v);if(rt!==C.__cacheKey){ct[rt]===void 0&&(ct[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ct[rt].usedTimes++;let Ht=ct[C.__cacheKey];Ht!==void 0&&(ct[C.__cacheKey].usedTimes--,Ht.usedTimes===0&&E(v)),C.__cacheKey=rt,C.__webglTexture=ct[rt].texture}return H}function Oe(C,v,H){return Math.floor(Math.floor(C/H)/v)}function Te(C,v,H,at){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,at,v.data);else{rt.sort((gt,wt)=>gt.start-wt.start);let Ht=0;for(let gt=1;gt<rt.length;gt++){let wt=rt[Ht],Kt=rt[gt],Bt=wt.start+wt.count,Tt=Oe(Kt.start,v.width,4),ne=Oe(wt.start,v.width,4);Kt.start<=Bt+1&&Tt===ne&&Oe(Kt.start+Kt.count-1,v.width,4)===Tt?wt.count=Math.max(wt.count,Kt.start+Kt.count-wt.start):(++Ht,rt[Ht]=Kt)}rt.length=Ht+1;let vt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let gt=0,wt=rt.length;gt<wt;gt++){let Kt=rt[gt],Bt=Math.floor(Kt.start/4),Tt=Math.ceil(Kt.count/4),ne=Bt%v.width,k=Math.floor(Bt/v.width),pt=Tt,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,ne,k,pt,yt,H,at,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Vt)}}function lt(C,v,H){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);let ct=Ee(C,v),rt=v.source;e.bindTexture(at,C.__webglTexture,i.TEXTURE0+H);let Ht=n.get(rt);if(rt.version!==Ht.__version||ct===!0){e.activeTexture(i.TEXTURE0+H);let vt=Ie.getPrimaries(Ie.workingColorSpace),Ot=v.colorSpace===rs?null:Ie.getPrimaries(v.colorSpace),Vt=v.colorSpace===rs||vt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let gt=M(v.image,!1,s.maxTextureSize);gt=we(v,gt);let wt=r.convert(v.format,v.colorSpace),Kt=r.convert(v.type),Bt=R(v.internalFormat,wt,Kt,v.colorSpace,v.isVideoTexture);Gt(at,v);let Tt,ne=v.mipmaps,k=v.isVideoTexture!==!0,pt=Ht.__version===void 0||ct===!0,yt=rt.dataReady,Ut=U(v,gt);if(v.isDepthTexture)Bt=b(v.format===Kr,v.type),pt&&(k?e.texStorage2D(i.TEXTURE_2D,1,Bt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,gt.width,gt.height,0,wt,Kt,null));else if(v.isDataTexture)if(ne.length>0){k&&pt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ne[0].width,ne[0].height);for(let mt=0,ht=ne.length;mt<ht;mt++)Tt=ne[mt],k?yt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,wt,Kt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Bt,Tt.width,Tt.height,0,wt,Kt,Tt.data);v.generateMipmaps=!1}else k?(pt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,gt.width,gt.height),yt&&Te(v,gt,wt,Kt)):e.texImage2D(i.TEXTURE_2D,0,Bt,gt.width,gt.height,0,wt,Kt,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,ne[0].width,ne[0].height,gt.depth);for(let mt=0,ht=ne.length;mt<ht;mt++)if(Tt=ne[mt],v.format!==oi)if(wt!==null)if(k){if(yt)if(v.layerUpdates.size>0){let kt=zh(Tt.width,Tt.height,v.format,v.type);for(let Wt of v.layerUpdates){let ge=Tt.data.subarray(Wt*kt/Tt.data.BYTES_PER_ELEMENT,(Wt+1)*kt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Wt,Tt.width,Tt.height,1,wt,ge)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,gt.depth,wt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Bt,Tt.width,Tt.height,gt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,gt.depth,wt,Kt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Bt,Tt.width,Tt.height,gt.depth,0,wt,Kt,Tt.data)}else{k&&pt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ne[0].width,ne[0].height);for(let mt=0,ht=ne.length;mt<ht;mt++)Tt=ne[mt],v.format!==oi?wt!==null?k?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?yt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,wt,Kt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Bt,Tt.width,Tt.height,0,wt,Kt,Tt.data)}else if(v.isDataArrayTexture)if(k){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,gt.width,gt.height,gt.depth),yt)if(v.layerUpdates.size>0){let mt=zh(gt.width,gt.height,v.format,v.type);for(let ht of v.layerUpdates){let kt=gt.data.subarray(ht*mt/gt.data.BYTES_PER_ELEMENT,(ht+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,gt.width,gt.height,1,wt,Kt,kt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,wt,Kt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,gt.width,gt.height,gt.depth,0,wt,Kt,gt.data);else if(v.isData3DTexture)k?(pt&&e.texStorage3D(i.TEXTURE_3D,Ut,Bt,gt.width,gt.height,gt.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,wt,Kt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,gt.width,gt.height,gt.depth,0,wt,Kt,gt.data);else if(v.isFramebufferTexture){if(pt)if(k)e.texStorage2D(i.TEXTURE_2D,Ut,Bt,gt.width,gt.height);else{let mt=gt.width,ht=gt.height;for(let kt=0;kt<Ut;kt++)e.texImage2D(i.TEXTURE_2D,kt,Bt,mt,ht,0,wt,Kt,null),mt>>=1,ht>>=1}}else if(ne.length>0){if(k&&pt){let mt=re(ne[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,mt.width,mt.height)}for(let mt=0,ht=ne.length;mt<ht;mt++)Tt=ne[mt],k?yt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,wt,Kt,Tt):e.texImage2D(i.TEXTURE_2D,mt,Bt,wt,Kt,Tt);v.generateMipmaps=!1}else if(k){if(pt){let mt=re(gt);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,mt.width,mt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Kt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,wt,Kt,gt);_(v)&&d(at),Ht.__version=rt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ft(C,v,H){if(v.image.length!==6)return;let at=Ee(C,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let rt=n.get(ct);if(ct.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let Ht=Ie.getPrimaries(Ie.workingColorSpace),vt=v.colorSpace===rs?null:Ie.getPrimaries(v.colorSpace),Ot=v.colorSpace===rs||Ht===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let Vt=v.isCompressedTexture||v.image[0].isCompressedTexture,gt=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let ht=0;ht<6;ht++)!Vt&&!gt?wt[ht]=M(v.image[ht],!0,s.maxCubemapSize):wt[ht]=gt?v.image[ht].image:v.image[ht],wt[ht]=we(v,wt[ht]);let Kt=wt[0],Bt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type),ne=R(v.internalFormat,Bt,Tt,v.colorSpace),k=v.isVideoTexture!==!0,pt=rt.__version===void 0||at===!0,yt=ct.dataReady,Ut=U(v,Kt);Gt(i.TEXTURE_CUBE_MAP,v);let mt;if(Vt){k&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ne,Kt.width,Kt.height);for(let ht=0;ht<6;ht++){mt=wt[ht].mipmaps;for(let kt=0;kt<mt.length;kt++){let Wt=mt[kt];v.format!==oi?Bt!==null?k?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,Wt.width,Wt.height,Bt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ne,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,Wt.width,Wt.height,Bt,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ne,Wt.width,Wt.height,0,Bt,Tt,Wt.data)}}}else{if(mt=v.mipmaps,k&&pt){mt.length>0&&Ut++;let ht=re(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ne,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(gt){k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,wt[ht].width,wt[ht].height,Bt,Tt,wt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,wt[ht].width,wt[ht].height,0,Bt,Tt,wt[ht].data);for(let kt=0;kt<mt.length;kt++){let ge=mt[kt].image[ht].image;k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,ge.width,ge.height,Bt,Tt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ne,ge.width,ge.height,0,Bt,Tt,ge.data)}}else{k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Bt,Tt,wt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,Bt,Tt,wt[ht]);for(let kt=0;kt<mt.length;kt++){let Wt=mt[kt];k?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,Bt,Tt,Wt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ne,Bt,Tt,Wt.image[ht])}}}_(v)&&d(i.TEXTURE_CUBE_MAP),rt.__version=ct.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Nt(C,v,H,at,ct,rt){let Ht=r.convert(H.format,H.colorSpace),vt=r.convert(H.type),Ot=R(H.internalFormat,Ht,vt,H.colorSpace),Vt=n.get(v),gt=n.get(H);if(gt.__renderTarget=v,!Vt.__hasExternalTextures){let wt=Math.max(1,v.width>>rt),Kt=Math.max(1,v.height>>rt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,rt,Ot,wt,Kt,v.depth,0,Ht,vt,null):e.texImage2D(ct,rt,Ot,wt,Kt,0,Ht,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ct,gt.__webglTexture,0,Pe(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ct,gt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(C,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let at=v.depthTexture,ct=at&&at.isDepthTexture?at.type:null,rt=b(v.stencilBuffer,ct),Ht=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Pe(v);Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,rt,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,C)}else{let at=v.textures;for(let ct=0;ct<at.length;ct++){let rt=at[ct],Ht=r.convert(rt.format,rt.colorSpace),vt=r.convert(rt.type),Ot=R(rt.internalFormat,Ht,vt,rt.colorSpace),Vt=Pe(v);H&&Dt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Ot,v.width,v.height):Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,Ot,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(v.depthTexture);at.__renderTarget=v,(!at.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt(v.depthTexture,0);let ct=at.__webglTexture,rt=Pe(v);if(v.depthTexture.format===Fr)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(v.depthTexture.format===Kr)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function ve(C){let v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let at=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",ct)};at.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=at}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let at=C.texture.mipmaps;at&&at.length>0?Rt(v.__webglFramebuffer[0],C):Rt(v.__webglFramebuffer,C)}else if(H){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=i.createRenderbuffer(),jt(v.__webglDepthbuffer[at],C,!1);else{let ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,rt)}}else{let at=C.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),jt(v.__webglDepthbuffer,C,!1);else{let ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(C,v,H){let at=n.get(C);v!==void 0&&Nt(at.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ve(C)}function B(C){let v=C.texture,H=n.get(C),at=n.get(v);C.addEventListener("dispose",F);let ct=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ht=ct.length>1;if(Ht||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,o.memory.textures++),rt){H.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[vt]=[];for(let Ot=0;Ot<v.mipmaps.length;Ot++)H.__webglFramebuffer[vt][Ot]=i.createFramebuffer()}else H.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)H.__webglFramebuffer[vt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let vt=0,Ot=ct.length;vt<Ot;vt++){let Vt=n.get(ct[vt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Dt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<ct.length;vt++){let Ot=ct[vt];H.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);let Vt=r.convert(Ot.format,Ot.colorSpace),gt=r.convert(Ot.type),wt=R(Ot.internalFormat,Vt,gt,Ot.colorSpace,C.isXRRenderTarget===!0),Kt=Pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),jt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ot=0;Ot<v.mipmaps.length;Ot++)Nt(H.__webglFramebuffer[vt][Ot],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot);else Nt(H.__webglFramebuffer[vt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);_(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let vt=0,Ot=ct.length;vt<Ot;vt++){let Vt=ct[vt],gt=n.get(Vt),wt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,gt.__webglTexture),Gt(wt,Vt),Nt(H.__webglFramebuffer,C,Vt,i.COLOR_ATTACHMENT0+vt,wt,0),_(Vt)&&d(wt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,at.__webglTexture),Gt(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let Ot=0;Ot<v.mipmaps.length;Ot++)Nt(H.__webglFramebuffer[Ot],C,v,i.COLOR_ATTACHMENT0,vt,Ot);else Nt(H.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,vt,0);_(v)&&d(vt),e.unbindTexture()}C.depthBuffer&&ve(C)}function De(C){let v=C.textures;for(let H=0,at=v.length;H<at;H++){let ct=v[H];if(_(ct)){let rt=I(C),Ht=n.get(ct).__webglTexture;e.bindTexture(rt,Ht),d(rt),e.unbindTexture()}}}let ee=[],Jt=[];function Ft(C){if(C.samples>0){if(Dt(C)===!1){let v=C.textures,H=C.width,at=C.height,ct=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(C),vt=v.length>1;if(vt)for(let Vt=0;Vt<v.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let Ot=C.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Vt=0;Vt<v.length;Vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Vt]);let gt=n.get(v[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,H,at,0,0,H,at,ct,i.NEAREST),h===!0&&(ee.length=0,Jt.length=0,ee.push(i.COLOR_ATTACHMENT0+Vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(rt),Jt.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Vt=0;Vt<v.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Vt]);let gt=n.get(v[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Pe(C){return Math.min(s.maxSamples,C.samples)}function Dt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function se(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function we(C,v){let H=C.colorSpace,at=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Qs&&H!==rs&&(Ie.getTransfer(H)===Fe?(at!==oi||ct!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.setTexture2D=nt,this.setTexture2DArray=it,this.setTexture3D=ot,this.setTextureCube=V,this.rebindTextures=Ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Dt}function Hx(i,t){function e(n,s=rs){let r,o=Ie.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===Th)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Ps)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Jr)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Ch)return i.RGB;if(n===oi)return i.RGBA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===Kr)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===jo||n===Qo||n===ta||n===ea)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Zn({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",h=1,c=null,u=null,f=null,p=null,m=null,x=null,M=typeof XRWebGLBinding<"u",_=new jh,d={},I=e.getContextAttributes(),R=null,b=null,U=[],D=[],F=new he,G=null,E=new Nn;E.viewport=new Be;let w=new Nn;w.viewport=new Be;let O=[E,w],q=new xl,$=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ft=U[lt];return ft===void 0&&(ft=new Vr,U[lt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(lt){let ft=U[lt];return ft===void 0&&(ft=new Vr,U[lt]=ft),ft.getGripSpace()},this.getHand=function(lt){let ft=U[lt];return ft===void 0&&(ft=new Vr,U[lt]=ft),ft.getHandSpace()};function nt(lt){let ft=D.indexOf(lt.inputSource);if(ft===-1)return;let Nt=U[ft];Nt!==void 0&&(Nt.update(lt.inputSource,lt.frame,c||o),Nt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function it(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",ot);for(let lt=0;lt<U.length;lt++){let ft=D[lt];ft!==null&&(D[lt]=null,U[lt].disconnect(ft))}$=null,et=null,_.reset();for(let lt in d)delete d[lt];t.setRenderTarget(R),m=null,p=null,f=null,s=null,b=null,Te.stop(),n.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",it),s.addEventListener("inputsourceschange",ot),I.xrCompatible!==!0&&await e.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,jt=null,Rt=null;I.depth&&(Rt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=I.stencil?Kr:Fr,jt=I.stencil?$r:Ps);let ve={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(ve),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Pi(p.textureWidth,p.textureHeight,{format:oi,type:Ti,depthTexture:new Wo(p.textureWidth,p.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Nt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Pi(m.framebufferWidth,m.framebufferHeight,{format:oi,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ot(lt){for(let ft=0;ft<lt.removed.length;ft++){let Nt=lt.removed[ft],jt=D.indexOf(Nt);jt>=0&&(D[jt]=null,U[jt].disconnect(Nt))}for(let ft=0;ft<lt.added.length;ft++){let Nt=lt.added[ft],jt=D.indexOf(Nt);if(jt===-1){for(let ve=0;ve<U.length;ve++)if(ve>=D.length){D.push(Nt),jt=ve;break}else if(D[ve]===null){D[ve]=Nt,jt=ve;break}if(jt===-1)break}let Rt=U[jt];Rt&&Rt.connect(Nt)}}let V=new z,tt=new z;function It(lt,ft,Nt){V.setFromMatrixPosition(ft.matrixWorld),tt.setFromMatrixPosition(Nt.matrixWorld);let jt=V.distanceTo(tt),Rt=ft.projectionMatrix.elements,ve=Nt.projectionMatrix.elements,Ye=Rt[14]/(Rt[10]-1),B=Rt[14]/(Rt[10]+1),De=(Rt[9]+1)/Rt[5],ee=(Rt[9]-1)/Rt[5],Jt=(Rt[8]-1)/Rt[0],Ft=(ve[8]+1)/ve[0],Pe=Ye*Jt,Dt=Ye*Ft,se=jt/(-Jt+Ft),we=se*-Jt;if(ft.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(we),lt.translateZ(se),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Rt[10]===-1)lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let re=Ye+se,C=B+se,v=Pe-we,H=Dt+(jt-we),at=De*B/C*re,ct=ee*B/C*re;lt.projectionMatrix.makePerspective(v,H,at,ct,re,C),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function qt(lt,ft){ft===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ft.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ft=lt.near,Nt=lt.far;_.texture!==null&&(_.depthNear>0&&(ft=_.depthNear),_.depthFar>0&&(Nt=_.depthFar)),q.near=w.near=E.near=ft,q.far=w.far=E.far=Nt,($!==q.near||et!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),$=q.near,et=q.far),q.layers.mask=lt.layers.mask|6,E.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;let jt=lt.parent,Rt=q.cameras;qt(q,jt);for(let ve=0;ve<Rt.length;ve++)qt(Rt[ve],jt);Rt.length===2?It(q,E,w):q.projectionMatrix.copy(E.projectionMatrix),Gt(lt,q,jt)};function Gt(lt,ft,Nt){Nt===null?lt.matrix.copy(ft.matrixWorld):(lt.matrix.copy(Nt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ft.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Or*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(lt){h=lt,p!==null&&(p.fixedFoveation=lt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=lt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(lt){return d[lt]};let Ee=null;function Oe(lt,ft){if(u=ft.getViewerPose(c||o),x=ft,u!==null){let Nt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let jt=!1;Nt.length!==q.cameras.length&&(q.cameras.length=0,jt=!0);for(let B=0;B<Nt.length;B++){let De=Nt[B],ee=null;if(m!==null)ee=m.getViewport(De);else{let Ft=f.getViewSubImage(p,De);ee=Ft.viewport,B===0&&(t.setRenderTargetTextures(b,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(b))}let Jt=O[B];Jt===void 0&&(Jt=new Nn,Jt.layers.enable(B),Jt.viewport=new Be,O[B]=Jt),Jt.matrix.fromArray(De.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(De.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ee.x,ee.y,ee.width,ee.height),B===0&&(q.matrix.copy(Jt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),jt===!0&&q.cameras.push(Jt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let B=f.getDepthInformation(Nt[0]);B&&B.isValid&&B.texture&&_.init(B,s.renderState)}if(Rt&&Rt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let B=0;B<Nt.length;B++){let De=Nt[B].camera;if(De){let ee=d[De];ee||(ee=new Xo,d[De]=ee);let Jt=f.getCameraImage(De);ee.sourceTexture=Jt}}}}for(let Nt=0;Nt<U.length;Nt++){let jt=D[Nt],Rt=U[Nt];jt!==null&&Rt!==void 0&&Rt.update(jt,ft,c||o)}Ee&&Ee(lt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),x=null}let Te=new Pd;Te.setAnimationLoop(Oe),this.setAnimationLoop=function(lt){Ee=lt},this.dispose=function(){}}},fr=new Mi,qx=new Le;function Yx(i,t){function e(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Nh(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function s(_,d,I,R,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(_,d):d.isMeshToonMaterial?(r(_,d),f(_,d)):d.isMeshPhongMaterial?(r(_,d),u(_,d)):d.isMeshStandardMaterial?(r(_,d),p(_,d),d.isMeshPhysicalMaterial&&m(_,d,b)):d.isMeshMatcapMaterial?(r(_,d),x(_,d)):d.isMeshDepthMaterial?r(_,d):d.isMeshDistanceMaterial?(r(_,d),M(_,d)):d.isMeshNormalMaterial?r(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?h(_,d,I,R):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,e(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,e(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===In&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,e(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===In&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,e(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,e(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);let I=t.get(d),R=I.envMap,b=I.envMapRotation;R&&(_.envMap.value=R,fr.copy(b),fr.x*=-1,fr.y*=-1,fr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),_.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(fr)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,e(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function h(_,d,I,R){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*I,_.scale.value=R*.5,d.map&&(_.map.value=d.map,e(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,e(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function f(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function p(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function m(_,d,I){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,d){d.matcap&&(_.matcap.value=d.matcap)}function M(_,d){let I=t.get(d).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,R){let b=R.program;n.uniformBlockBinding(I,b)}function c(I,R){let b=s[I.id];b===void 0&&(x(I),b=u(I),s[I.id]=b,I.addEventListener("dispose",_));let U=R.program;n.updateUBOMapping(I,U);let D=t.render.frame;r[I.id]!==D&&(p(I),r[I.id]=D)}function u(I){let R=f();I.__bindingPointIndex=R;let b=i.createBuffer(),U=I.__size,D=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function f(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(I){let R=s[I.id],b=I.uniforms,U=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let D=0,F=b.length;D<F;D++){let G=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,w=G.length;E<w;E++){let O=G[E];if(m(O,D,E,U)===!0){let q=O.__offset,$=Array.isArray(O.value)?O.value:[O.value],et=0;for(let nt=0;nt<$.length;nt++){let it=$[nt],ot=M(it);typeof it=="number"||typeof it=="boolean"?(O.__data[0]=it,i.bufferSubData(i.UNIFORM_BUFFER,q+et,O.__data)):it.isMatrix3?(O.__data[0]=it.elements[0],O.__data[1]=it.elements[1],O.__data[2]=it.elements[2],O.__data[3]=0,O.__data[4]=it.elements[3],O.__data[5]=it.elements[4],O.__data[6]=it.elements[5],O.__data[7]=0,O.__data[8]=it.elements[6],O.__data[9]=it.elements[7],O.__data[10]=it.elements[8],O.__data[11]=0):(it.toArray(O.__data,et),et+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(I,R,b,U){let D=I.value,F=R+"_"+b;if(U[F]===void 0)return typeof D=="number"||typeof D=="boolean"?U[F]=D:U[F]=D.clone(),!0;{let G=U[F];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return U[F]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function x(I){let R=I.uniforms,b=0,U=16;for(let F=0,G=R.length;F<G;F++){let E=Array.isArray(R[F])?R[F]:[R[F]];for(let w=0,O=E.length;w<O;w++){let q=E[w],$=Array.isArray(q.value)?q.value:[q.value];for(let et=0,nt=$.length;et<nt;et++){let it=$[et],ot=M(it),V=b%U,tt=V%ot.boundary,It=V+tt;b+=tt,It!==0&&U-It<ot.storage&&(b+=U-It),q.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=ot.storage}}}let D=b%U;return D>0&&(b+=U-D),I.__size=b,I.__cache={},this}function M(I){let R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function _(I){let R=I.target;R.removeEventListener("dispose",_);let b=o.indexOf(R.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function d(){for(let I in s)i.deleteBuffer(s[I]);o=[],s={},r={}}return{bind:h,update:c,dispose:d}}var no=class{constructor(t={}){let{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=new Uint32Array(4),M=new Int32Array(4),_=null,d=null,I=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,U=!1;this._outputColorSpace=Rn;let D=0,F=0,G=null,E=-1,w=null,O=new Be,q=new Be,$=null,et=new ie(0),nt=0,it=e.width,ot=e.height,V=1,tt=null,It=null,qt=new Be(0,0,it,ot),Gt=new Be(0,0,it,ot),Ee=!1,Oe=new Gr,Te=!1,lt=!1,ft=new Le,Nt=new z,jt=new Be,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Ye(){return G===null?V:1}let B=n;function De(S,W){return e.getContext(S,W)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){let W="webgl2";if(B=De(W,S),B===null)throw De(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ee,Jt,Ft,Pe,Dt,se,we,re,C,v,H,at,ct,rt,Ht,vt,Ot,Vt,gt,wt,Kt,Bt,Tt,ne;function k(){ee=new f_(B),ee.init(),Bt=new Hx(B,ee),Jt=new r_(B,ee,t,Bt),Ft=new Vx(B,ee),Jt.reversedDepthBuffer&&p&&Ft.buffers.depth.setReversed(!0),Pe=new m_(B),Dt=new Cx,se=new Gx(B,ee,Ft,Dt,Jt,Bt,Pe),we=new a_(b),re=new u_(b),C=new Mm(B),Tt=new i_(B,C),v=new d_(B,C,Pe,Tt),H=new __(B,v,C,Pe),gt=new g_(B,Jt,se),vt=new o_(Dt),at=new Ax(b,we,re,ee,Jt,Tt,vt),ct=new Yx(b,Dt),rt=new Ix,Ht=new Fx(ee),Vt=new n_(b,we,re,Ft,H,m,h),Ot=new zx(b,H,Jt),ne=new Zx(B,Pe,Jt,Ft),wt=new s_(B,ee,Pe),Kt=new p_(B,ee,Pe),Pe.programs=at.programs,b.capabilities=Jt,b.extensions=ee,b.properties=Dt,b.renderLists=rt,b.shadowMap=Ot,b.state=Ft,b.info=Pe}k();let pt=new Qh(b,B);this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(it,ot,!1))},this.getSize=function(S){return S.set(it,ot)},this.setSize=function(S,W,K=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=S,ot=W,e.width=Math.floor(S*V),e.height=Math.floor(W*V),K===!0&&(e.style.width=S+"px",e.style.height=W+"px"),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(it*V,ot*V).floor()},this.setDrawingBufferSize=function(S,W,K){it=S,ot=W,V=K,e.width=Math.floor(S*K),e.height=Math.floor(W*K),this.setViewport(0,0,S,W)},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(qt)},this.setViewport=function(S,W,K,j){S.isVector4?qt.set(S.x,S.y,S.z,S.w):qt.set(S,W,K,j),Ft.viewport(O.copy(qt).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,W,K,j){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,W,K,j),Ft.scissor(q.copy(Gt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(S){Ft.setScissorTest(Ee=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,W=!0,K=!0){let j=0;if(S){let X=!1;if(G!==null){let dt=G.texture.format;X=dt===Fl||dt===Nl||dt===Ul}if(X){let dt=G.texture.type,Et=dt===Ti||dt===Ps||dt===Zr||dt===$r||dt===Pl||dt===Ll,zt=Vt.getClearColor(),Pt=Vt.getClearAlpha(),te=zt.r,Qt=zt.g,$t=zt.b;Et?(x[0]=te,x[1]=Qt,x[2]=$t,x[3]=Pt,B.clearBufferuiv(B.COLOR,0,x)):(M[0]=te,M[1]=Qt,M[2]=$t,M[3]=Pt,B.clearBufferiv(B.COLOR,0,M))}else j|=B.COLOR_BUFFER_BIT}W&&(j|=B.DEPTH_BUFFER_BIT),K&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Vt.dispose(),rt.dispose(),Ht.dispose(),Dt.dispose(),we.dispose(),re.dispose(),H.dispose(),Tt.dispose(),ne.dispose(),at.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ze),pt.removeEventListener("sessionend",Qn),pn.stop()};function yt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let S=Pe.autoReset,W=Ot.enabled,K=Ot.autoUpdate,j=Ot.needsUpdate,X=Ot.type;k(),Pe.autoReset=S,Ot.enabled=W,Ot.autoUpdate=K,Ot.needsUpdate=j,Ot.type=X}function mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){let W=S.target;W.removeEventListener("dispose",ht),kt(W)}function kt(S){Wt(S),Dt.remove(S)}function Wt(S){let W=Dt.get(S).programs;W!==void 0&&(W.forEach(function(K){at.releaseProgram(K)}),S.isShaderMaterial&&at.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,K,j,X,dt){W===null&&(W=Rt);let Et=X.isMesh&&X.matrixWorld.determinant()<0,zt=zi(S,W,K,j,X);Ft.setMaterial(j,Et);let Pt=K.index,te=1;if(j.wireframe===!0){if(Pt=v.getWireframeAttribute(K),Pt===void 0)return;te=2}let Qt=K.drawRange,$t=K.attributes.position,le=Qt.start*te,Ae=(Qt.start+Qt.count)*te;dt!==null&&(le=Math.max(le,dt.start*te),Ae=Math.min(Ae,(dt.start+dt.count)*te)),Pt!==null?(le=Math.max(le,0),Ae=Math.min(Ae,Pt.count)):$t!=null&&(le=Math.max(le,0),Ae=Math.min(Ae,$t.count));let A=Ae-le;if(A<0||A===1/0)return;Tt.setup(X,j,zt,K,Pt);let N,Y=wt;if(Pt!==null&&(N=C.get(Pt),Y=Kt,Y.setIndex(N)),X.isMesh)j.wireframe===!0?(Ft.setLineWidth(j.wireframeLinewidth*Ye()),Y.setMode(B.LINES)):Y.setMode(B.TRIANGLES);else if(X.isLine){let J=j.linewidth;J===void 0&&(J=1),Ft.setLineWidth(J*Ye()),X.isLineSegments?Y.setMode(B.LINES):X.isLineLoop?Y.setMode(B.LINE_LOOP):Y.setMode(B.LINE_STRIP)}else X.isPoints?Y.setMode(B.POINTS):X.isSprite&&Y.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Y.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Y.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let J=X._multiDrawStarts,xt=X._multiDrawCounts,_t=X._multiDrawCount,Yt=Pt?C.get(Pt).bytesPerElement:1,Xt=Dt.get(j).currentProgram.getUniforms();for(let ye=0;ye<_t;ye++)Xt.setValue(B,"_gl_DrawID",ye),Y.render(J[ye]/Yt,xt[ye])}else if(X.isInstancedMesh)Y.renderInstances(le,A,X.count);else if(K.isInstancedBufferGeometry){let J=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,xt=Math.min(K.instanceCount,J);Y.renderInstances(le,A,xt)}else Y.render(le,A)};function ge(S,W,K){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=In,S.needsUpdate=!0,Dn(S,W,K),S.side=Qi,S.needsUpdate=!0,Dn(S,W,K),S.side=dn):Dn(S,W,K)}this.compile=function(S,W,K=null){K===null&&(K=S),d=Ht.get(K),d.init(W),R.push(d),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),S!==K&&S.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();let j=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let dt=X.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){let zt=dt[Et];ge(zt,K,X),j.add(zt)}else ge(dt,K,X),j.add(dt)}),d=R.pop(),j},this.compileAsync=function(S,W,K=null){let j=this.compile(S,W,K);return new Promise(X=>{function dt(){if(j.forEach(function(Et){Dt.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){X(S);return}setTimeout(dt,10)}ee.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ue=null;function hn(S){ue&&ue(S)}function Ze(){pn.stop()}function Qn(){pn.start()}let pn=new Pd;pn.setAnimationLoop(hn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(S){ue=S,pt.setAnimationLoop(S),S===null?pn.stop():pn.start()},pt.addEventListener("sessionstart",Ze),pt.addEventListener("sessionend",Qn),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,W,G),d=Ht.get(S,R.length),d.init(W),R.push(d),ft.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Oe.setFromProjectionMatrix(ft,vi,W.reversedDepth),lt=this.localClippingEnabled,Te=vt.init(this.clippingPlanes,lt),_=rt.get(S,I.length),_.init(),I.push(_),pt.enabled===!0&&pt.isPresenting===!0){let dt=b.xr.getDepthSensingMesh();dt!==null&&Oi(dt,W,-1/0,b.sortObjects)}Oi(S,W,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(tt,It),ve=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ve&&Vt.addToRenderList(_,S),this.info.render.frame++,Te===!0&&vt.beginShadows();let K=d.state.shadowsArray;Ot.render(K,S,W),Te===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=_.opaque,X=_.transmissive;if(d.setupLights(),W.isArrayCamera){let dt=W.cameras;if(X.length>0)for(let Et=0,zt=dt.length;Et<zt;Et++){let Pt=dt[Et];En(j,X,S,Pt)}ve&&Vt.render(S);for(let Et=0,zt=dt.length;Et<zt;Et++){let Pt=dt[Et];Ln(_,S,Pt,Pt.viewport)}}else X.length>0&&En(j,X,S,W),ve&&Vt.render(S),Ln(_,S,W);G!==null&&F===0&&(se.updateMultisampleRenderTarget(G),se.updateRenderTargetMipmap(G)),S.isScene===!0&&S.onAfterRender(b,S,W),Tt.resetDefaultState(),E=-1,w=null,R.pop(),R.length>0?(d=R[R.length-1],Te===!0&&vt.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function Oi(S,W,K,j){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Oe.intersectsSprite(S)){j&&jt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);let Et=H.update(S),zt=S.material;zt.visible&&_.push(S,Et,zt,K,jt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Oe.intersectsObject(S))){let Et=H.update(S),zt=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),jt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),jt.copy(Et.boundingSphere.center)),jt.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(zt)){let Pt=Et.groups;for(let te=0,Qt=Pt.length;te<Qt;te++){let $t=Pt[te],le=zt[$t.materialIndex];le&&le.visible&&_.push(S,Et,le,K,jt.z,$t)}}else zt.visible&&_.push(S,Et,zt,K,jt.z,null)}}let dt=S.children;for(let Et=0,zt=dt.length;Et<zt;Et++)Oi(dt[Et],W,K,j)}function Ln(S,W,K,j){let X=S.opaque,dt=S.transmissive,Et=S.transparent;d.setupLightsView(K),Te===!0&&vt.setGlobalState(b.clippingPlanes,K),j&&Ft.viewport(O.copy(j)),X.length>0&&On(X,W,K),dt.length>0&&On(dt,W,K),Et.length>0&&On(Et,W,K),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function En(S,W,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Pi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Jr:Ti,minFilter:Is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));let dt=d.state.transmissionRenderTarget[j.id],Et=j.viewport||O;dt.setSize(Et.z*b.transmissionResolutionScale,Et.w*b.transmissionResolutionScale);let zt=b.getRenderTarget(),Pt=b.getActiveCubeFace(),te=b.getActiveMipmapLevel();b.setRenderTarget(dt),b.getClearColor(et),nt=b.getClearAlpha(),nt<1&&b.setClearColor(16777215,.5),b.clear(),ve&&Vt.render(K);let Qt=b.toneMapping;b.toneMapping=ss;let $t=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),Te===!0&&vt.setGlobalState(b.clippingPlanes,j),On(S,K,j),se.updateMultisampleRenderTarget(dt),se.updateRenderTargetMipmap(dt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ae=0,A=W.length;Ae<A;Ae++){let N=W[Ae],Y=N.object,J=N.geometry,xt=N.material,_t=N.group;if(xt.side===dn&&Y.layers.test(j.layers)){let Yt=xt.side;xt.side=In,xt.needsUpdate=!0,Bi(Y,K,j,J,xt,_t),xt.side=Yt,xt.needsUpdate=!0,le=!0}}le===!0&&(se.updateMultisampleRenderTarget(dt),se.updateRenderTargetMipmap(dt))}b.setRenderTarget(zt,Pt,te),b.setClearColor(et,nt),$t!==void 0&&(j.viewport=$t),b.toneMapping=Qt}function On(S,W,K){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,dt=S.length;X<dt;X++){let Et=S[X],zt=Et.object,Pt=Et.geometry,te=Et.group,Qt=Et.material;Qt.allowOverride===!0&&j!==null&&(Qt=j),zt.layers.test(K.layers)&&Bi(zt,W,K,Pt,Qt,te)}}function Bi(S,W,K,j,X,dt){S.onBeforeRender(b,W,K,j,X,dt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(b,W,K,j,S,dt),X.transparent===!0&&X.side===dn&&X.forceSinglePass===!1?(X.side=In,X.needsUpdate=!0,b.renderBufferDirect(K,W,j,X,S,dt),X.side=Qi,X.needsUpdate=!0,b.renderBufferDirect(K,W,j,X,S,dt),X.side=dn):b.renderBufferDirect(K,W,j,X,S,dt),S.onAfterRender(b,W,K,j,X,dt)}function Dn(S,W,K){W.isScene!==!0&&(W=Rt);let j=Dt.get(S),X=d.state.lights,dt=d.state.shadowsArray,Et=X.state.version,zt=at.getParameters(S,X.state,dt,W,K),Pt=at.getProgramCacheKey(zt),te=j.programs;j.environment=S.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(S.isMeshStandardMaterial?re:we).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?W.environmentRotation:S.envMapRotation,te===void 0&&(S.addEventListener("dispose",ht),te=new Map,j.programs=te);let Qt=te.get(Pt);if(Qt!==void 0){if(j.currentProgram===Qt&&j.lightsStateVersion===Et)return Ls(S,zt),Qt}else zt.uniforms=at.getUniforms(S),S.onBeforeCompile(zt,b),Qt=at.acquireProgram(zt,Pt),te.set(Pt,Qt),j.uniforms=zt.uniforms;let $t=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($t.clippingPlanes=vt.uniform),Ls(S,zt),j.needsLights=Ds(S),j.lightsStateVersion=Et,j.needsLights&&($t.ambientLightColor.value=X.state.ambient,$t.lightProbe.value=X.state.probe,$t.directionalLights.value=X.state.directional,$t.directionalLightShadows.value=X.state.directionalShadow,$t.spotLights.value=X.state.spot,$t.spotLightShadows.value=X.state.spotShadow,$t.rectAreaLights.value=X.state.rectArea,$t.ltc_1.value=X.state.rectAreaLTC1,$t.ltc_2.value=X.state.rectAreaLTC2,$t.pointLights.value=X.state.point,$t.pointLightShadows.value=X.state.pointShadow,$t.hemisphereLights.value=X.state.hemi,$t.directionalShadowMap.value=X.state.directionalShadowMap,$t.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$t.spotShadowMap.value=X.state.spotShadowMap,$t.spotLightMatrix.value=X.state.spotLightMatrix,$t.spotLightMap.value=X.state.spotLightMap,$t.pointShadowMap.value=X.state.pointShadowMap,$t.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Qt,j.uniformsList=null,Qt}function Un(S){if(S.uniformsList===null){let W=S.currentProgram.getUniforms();S.uniformsList=eo.seqWithValue(W.seq,S.uniforms)}return S.uniformsList}function Ls(S,W){let K=Dt.get(S);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function zi(S,W,K,j,X){W.isScene!==!0&&(W=Rt),se.resetTextureUnits();let dt=W.fog,Et=j.isMeshStandardMaterial?W.environment:null,zt=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qs,Pt=(j.isMeshStandardMaterial?re:we).get(j.envMap||Et),te=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),$t=!!K.morphAttributes.position,le=!!K.morphAttributes.normal,Ae=!!K.morphAttributes.color,A=ss;j.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(A=b.toneMapping);let N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Y=N!==void 0?N.length:0,J=Dt.get(j),xt=d.state.lights;if(Te===!0&&(lt===!0||S!==w)){let xe=S===w&&j.id===E;vt.setState(j,S,xe)}let _t=!1;j.version===J.__version?(J.needsLights&&J.lightsStateVersion!==xt.state.version||J.outputColorSpace!==zt||X.isBatchedMesh&&J.batching===!1||!X.isBatchedMesh&&J.batching===!0||X.isBatchedMesh&&J.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&J.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&J.instancing===!1||!X.isInstancedMesh&&J.instancing===!0||X.isSkinnedMesh&&J.skinning===!1||!X.isSkinnedMesh&&J.skinning===!0||X.isInstancedMesh&&J.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&J.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&J.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&J.instancingMorph===!1&&X.morphTexture!==null||J.envMap!==Pt||j.fog===!0&&J.fog!==dt||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==vt.numPlanes||J.numIntersection!==vt.numIntersection)||J.vertexAlphas!==te||J.vertexTangents!==Qt||J.morphTargets!==$t||J.morphNormals!==le||J.morphColors!==Ae||J.toneMapping!==A||J.morphTargetsCount!==Y)&&(_t=!0):(_t=!0,J.__version=j.version);let Yt=J.currentProgram;_t===!0&&(Yt=Dn(j,W,X));let Xt=!1,ye=!1,Me=!1,_e=Yt.getUniforms(),Ue=J.uniforms;if(Ft.useProgram(Yt.program)&&(Xt=!0,ye=!0,Me=!0),j.id!==E&&(E=j.id,ye=!0),Xt||w!==S){Ft.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(B,"projectionMatrix",S.projectionMatrix),_e.setValue(B,"viewMatrix",S.matrixWorldInverse);let Ce=_e.map.cameraPosition;Ce!==void 0&&Ce.setValue(B,Nt.setFromMatrixPosition(S.matrixWorld)),Jt.logarithmicDepthBuffer&&_e.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_e.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,ye=!0,Me=!0)}if(X.isSkinnedMesh){_e.setOptional(B,X,"bindMatrix"),_e.setOptional(B,X,"bindMatrixInverse");let xe=X.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),_e.setValue(B,"boneTexture",xe.boneTexture,se))}X.isBatchedMesh&&(_e.setOptional(B,X,"batchingTexture"),_e.setValue(B,"batchingTexture",X._matricesTexture,se),_e.setOptional(B,X,"batchingIdTexture"),_e.setValue(B,"batchingIdTexture",X._indirectTexture,se),_e.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&_e.setValue(B,"batchingColorTexture",X._colorsTexture,se));let Xe=K.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&gt.update(X,K,Yt),(ye||J.receiveShadow!==X.receiveShadow)&&(J.receiveShadow=X.receiveShadow,_e.setValue(B,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ue.envMap.value=Pt,Ue.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(Ue.envMapIntensity.value=W.environmentIntensity),ye&&(_e.setValue(B,"toneMappingExposure",b.toneMappingExposure),J.needsLights&&ti(Ue,Me),dt&&j.fog===!0&&ct.refreshFogUniforms(Ue,dt),ct.refreshMaterialUniforms(Ue,j,V,ot,d.state.transmissionRenderTarget[S.id]),eo.upload(B,Un(J),Ue,se)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(eo.upload(B,Un(J),Ue,se),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_e.setValue(B,"center",X.center),_e.setValue(B,"modelViewMatrix",X.modelViewMatrix),_e.setValue(B,"normalMatrix",X.normalMatrix),_e.setValue(B,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let xe=j.uniformsGroups;for(let Ce=0,mn=xe.length;Ce<mn;Ce++){let He=xe[Ce];ne.update(He,Yt),ne.bind(He,Yt)}}return Yt}function ti(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function Ds(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(S,W,K){let j=Dt.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Dt.get(S.texture).__webglTexture=W,Dt.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,W){let K=Dt.get(S);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};let ao=B.createFramebuffer();this.setRenderTarget=function(S,W=0,K=0){G=S,D=W,F=K;let j=!0,X=null,dt=!1,Et=!1;if(S){let Pt=Dt.get(S);if(Pt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)se.setupRenderTarget(S);else if(Pt.__hasExternalTextures)se.rebindTextures(S,Dt.get(S.texture).__webglTexture,Dt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let $t=S.depthTexture;if(Pt.__boundDepthTexture!==$t){if($t!==null&&Dt.has($t)&&(S.width!==$t.image.width||S.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(S)}}let te=S.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Et=!0);let Qt=Dt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?X=Qt[W][K]:X=Qt[W],dt=!0):S.samples>0&&se.useMultisampledRTT(S)===!1?X=Dt.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[K]:X=Qt,O.copy(S.viewport),q.copy(S.scissor),$=S.scissorTest}else O.copy(qt).multiplyScalar(V).floor(),q.copy(Gt).multiplyScalar(V).floor(),$=Ee;if(K!==0&&(X=ao),Ft.bindFramebuffer(B.FRAMEBUFFER,X)&&j&&Ft.drawBuffers(S,X),Ft.viewport(O),Ft.scissor(q),Ft.setScissorTest($),dt){let Pt=Dt.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,K)}else if(Et){let Pt=W;for(let te=0;te<S.textures.length;te++){let Qt=Dt.get(S.textures[te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+te,Qt.__webglTexture,K,Pt)}}else if(S!==null&&K!==0){let Pt=Dt.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,K)}E=-1},this.readRenderTargetPixels=function(S,W,K,j,X,dt,Et,zt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){Ft.bindFramebuffer(B.FRAMEBUFFER,Pt);try{let te=S.textures[zt],Qt=te.format,$t=te.type;if(!Jt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-j&&K>=0&&K<=S.height-X&&(S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(W,K,j,X,Bt.convert(Qt),Bt.convert($t),dt))}finally{let te=G!==null?Dt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(S,W,K,j,X,dt,Et,zt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt)if(W>=0&&W<=S.width-j&&K>=0&&K<=S.height-X){Ft.bindFramebuffer(B.FRAMEBUFFER,Pt);let te=S.textures[zt],Qt=te.format,$t=te.type;if(!Jt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(W,K,j,X,Bt.convert(Qt),Bt.convert($t),0);let Ae=G!==null?Dt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,Ae);let A=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sd(B,A,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.deleteBuffer(le),B.deleteSync(A),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,W=null,K=0){let j=Math.pow(2,-K),X=Math.floor(S.image.width*j),dt=Math.floor(S.image.height*j),Et=W!==null?W.x:0,zt=W!==null?W.y:0;se.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Et,zt,X,dt),Ft.unbindTexture()};let me=B.createFramebuffer(),mr=B.createFramebuffer();this.copyTextureToTexture=function(S,W,K=null,j=null,X=0,dt=null){dt===null&&(X!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=X,X=0):dt=0);let Et,zt,Pt,te,Qt,$t,le,Ae,A,N=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(K!==null)Et=K.max.x-K.min.x,zt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,te=K.min.x,Qt=K.min.y,$t=K.isBox3?K.min.z:0;else{let Xe=Math.pow(2,-X);Et=Math.floor(N.width*Xe),zt=Math.floor(N.height*Xe),S.isDataArrayTexture?Pt=N.depth:S.isData3DTexture?Pt=Math.floor(N.depth*Xe):Pt=1,te=0,Qt=0,$t=0}j!==null?(le=j.x,Ae=j.y,A=j.z):(le=0,Ae=0,A=0);let Y=Bt.convert(W.format),J=Bt.convert(W.type),xt;W.isData3DTexture?(se.setTexture3D(W,0),xt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),xt=B.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),xt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let _t=B.getParameter(B.UNPACK_ROW_LENGTH),Yt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xt=B.getParameter(B.UNPACK_SKIP_PIXELS),ye=B.getParameter(B.UNPACK_SKIP_ROWS),Me=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,N.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,N.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$t);let _e=S.isDataArrayTexture||S.isData3DTexture,Ue=W.isDataArrayTexture||W.isData3DTexture;if(S.isDepthTexture){let Xe=Dt.get(S),xe=Dt.get(W),Ce=Dt.get(Xe.__renderTarget),mn=Dt.get(xe.__renderTarget);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,Ce.__webglFramebuffer),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let He=0;He<Pt;He++)_e&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(S).__webglTexture,X,$t+He),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(W).__webglTexture,dt,A+He)),B.blitFramebuffer(te,Qt,Et,zt,le,Ae,Et,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Dt.has(S)){let Xe=Dt.get(S),xe=Dt.get(W);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,me),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,mr);for(let Ce=0;Ce<Pt;Ce++)_e?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,X,$t+Ce):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,X),Ue?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xe.__webglTexture,dt,A+Ce):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xe.__webglTexture,dt),X!==0?B.blitFramebuffer(te,Qt,Et,zt,le,Ae,Et,zt,B.COLOR_BUFFER_BIT,B.NEAREST):Ue?B.copyTexSubImage3D(xt,dt,le,Ae,A+Ce,te,Qt,Et,zt):B.copyTexSubImage2D(xt,dt,le,Ae,te,Qt,Et,zt);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ue?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(xt,dt,le,Ae,A,Et,zt,Pt,Y,J,N.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(xt,dt,le,Ae,A,Et,zt,Pt,Y,N.data):B.texSubImage3D(xt,dt,le,Ae,A,Et,zt,Pt,Y,J,N):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,dt,le,Ae,Et,zt,Y,J,N.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,dt,le,Ae,N.width,N.height,Y,N.data):B.texSubImage2D(B.TEXTURE_2D,dt,le,Ae,Et,zt,Y,J,N);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Me),dt===0&&W.generateMipmaps&&B.generateMipmap(xt),Ft.unbindTexture()},this.initRenderTarget=function(S){Dt.get(S).__webglFramebuffer===void 0&&se.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?se.setTextureCube(S,0):S.isData3DTexture?se.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?se.setTexture2DArray(S,0):se.setTexture2D(S,0),Ft.unbindTexture()},this.resetState=function(){D=0,F=0,G=null,Ft.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var Ei=.55,so=new z(Math.cos(Ei),0,-Math.sin(Ei)),_c=new z(Math.sin(Ei),0,Math.cos(Ei)),Q={grass:"#69ae72",light:"#90be7c",high:"#51925d",earth:"#2b6946",water:"#3a6690",path:"#fff5de",ivory:"#fffdf9",coral:"#f2534a",sun:"#ffc83d",leaf:"#2ebe6a",ink:"#1c2744",rock:"#9b9a77",wood:"#8e603b",plank:"#bb8c52",deep:"#1d6b49",mid:"#38935b",skin:"#ffe2c8",pool:"#4f9fd0",off:"#5e6880",asphalt:"#7f8279"},ai={estacionamento:[-6.2,.75],bilheteria:[-2.75,1.05],enfermaria:[-4.1,-1.75],piscina:[1.25,.95],toboagua:[.75,-1.8],lanchonete:[5.15,-.55]},jn=(i,t)=>[i*so.x+t*_c.x,i*so.z+t*_c.z],Je=.5,ia={u:[-25,25],v:[-11,11]},$e={u:[-8,7.4],v:[-3.2,2.9]},gc=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};window.Parque={create(i,{lugares:t,onPick:e=()=>{},onFrame:n=()=>{},onError:s=()=>{}}){let{U:r,patch:o}=BosqueKit.vivo(),{footShade:a,radial:h}=BosqueKit,c=new ns,u=new is(-6,6,4,-4,.1,80),f=new no({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2)),f.toneMapping=Yr;let p=f.domElement;p.style.removeProperty("display"),p.className="park-canvas",p.setAttribute("role","img"),p.setAttribute("aria-label","Mapa do parque aqu\xE1tico em tr\xEAs dimens\xF5es. Os lugares tamb\xE9m est\xE3o na lista abaixo do mapa."),i.prepend(p),c.add(new sr("#fffdf9","#245b39",1.8));let m=new rr("#fff1d0",2.2);m.position.set(-4,8,5),c.add(m);let x=(A="",N=1)=>o(new ri({color:"#ffffff",flatShading:!0,vertexColors:!0}),A,N),M=a(new Li(1,1,1),.62),_=a(new Di(.5,1,6),.8),d=a(new fn(.5,.5,1,12),.72),I=a(new fn(.5,.5,1,3),.8),R=a(new Jn(.5,0),.8),b=new Map,U=(A,N="",Y=1)=>{let J=A.uuid+N;return b.has(J)||b.set(J,{g:A,mode:N,k:Y,items:[]}),b.get(J).items},D=(A,N,Y,J,xt,_t,Yt,Xt,ye,Me,_e,Ue=Je)=>(A.push([N,Y,J,xt,_t,Yt,Me,Xt,ye,_e,Ue]),A.length-1),F=t.map(A=>A.id),G=Object.fromEntries(F.map(A=>[A,[]])),E=Object.fromEntries(F.map(A=>[A,[]])),w=Object.fromEntries(F.map(A=>[A,[]])),O=Object.fromEntries(F.map(A=>[A,{u0:1e9,u1:-1e9,v0:1e9,v1:-1e9,top:0}])),q=null,$=0,et=0,nt=!1,it=A=>{q=A,[$,et]=ai[A]};function ot(A,N,Y,J,xt,_t,Yt,Xt,{rx:ye=0,rz:Me=0,rot:_e=0,mode:Ue="",light:Xe=null}={}){let[xe,Ce]=jn($+N,et+Y),mn=U(A,Ue),He=D(mn,xe,Je+J,Ce,xt,_t,Yt,Ei+_e,Me,ye,Xt),An=O[q];if(An){let Us=Math.max(xt*Math.abs(Math.cos(_e))+Yt*Math.abs(Math.sin(_e)),.01)/2,as=Math.max(Yt*Math.abs(Math.cos(ye))+_t*Math.abs(Math.sin(ye)),.01)/2,yc=(_t*Math.abs(Math.cos(ye))+Yt*Math.abs(Math.sin(ye)))/2;An.u0=Math.min(An.u0,$+N-Us),An.u1=Math.max(An.u1,$+N+Us),An.v0=Math.min(An.v0,et+Y-as),An.v1=Math.max(An.v1,et+Y+as),An.top=Math.max(An.top,J+yc)}return q&&Ue!=="water"&&E[q].push({list:mn,k:He,on:Xe}),nt&&w[q].push({list:mn,k:He}),He}let V=(...A)=>ot(M,...A),tt=Math.sqrt(3)*.58,It=[.5,Math.sqrt(3)/2],qt=[Math.sqrt(3)/2,-.5],Gt=[...jn(9.2,0)].reduce((A,N,Y)=>A+N*qt[Y],0),Ee=(A,N)=>Math.abs(A*qt[0]+N*qt[1]-Gt),Oe=(Gt-.87*(Math.round(Gt/.87-.5)+.5))/qt[0],Te=(A,N)=>[A*so.x+N*so.z,A*_c.x+N*_c.z],lt=A=>jn(...ai[A]),ft=[["estacionamento","bilheteria"],["bilheteria","piscina"],["piscina","lanchonete"],["bilheteria","enfermaria"]].map(([A,N])=>[ai[A],ai[N]]),Nt=(A,N,Y,J)=>{if(Ee(A,N)<.5)return .13;let xt=Math.max($e.u[0]-Y,Y-$e.u[1],0);return J<$e.v[0]-xt?J<$e.v[0]-3?Je+1.25:Je+.6:J>$e.v[1]+xt?Math.max(.3,Je-.2*Math.ceil((J-$e.v[1])/1.5)):xt>2&&gc(Math.round(A),Math.round(N))<.25?Je+.5:Je},jt=[],Rt=new Map;for(let A=-40;A<=40;A++)for(let N=-40;N<=40;N++){let Y=tt*(N+A/2)+Oe,J=.87*A,[xt,_t]=Te(Y,J);if(xt<ia.u[0]||xt>ia.u[1]||_t<ia.v[0]||_t>ia.v[1])continue;let Yt={q:N,r:A,x:Y,z:J,u:xt,v:_t,h:Nt(Y,J,xt,_t)};jt.push(Yt),Rt.set(N+","+A,Yt)}let ve=new er(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),Ye=a(new fn(.58,.58,1,6,1,!0),.5,1),B=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],De=[],ee=[];for(let A of jt){let N=Math.min(...B.map(([xt,_t])=>Rt.get(A.q+xt+","+(A.r+_t))?.h??0)),Y=A.h-Je,J=Y===0&&A.u>$e.u[0]&&A.u<$e.u[1];D(De,A.x,A.h,A.z,1,1,1,0,0,0,A.h<.2?Q.water:Y>1?Q.high:Y>.4||J&&(A.q*7+A.r*3)%5===0?Q.grass:Q.light),N<A.h-.01&&D(ee,A.x,A.h/2,A.z,1,A.h,1,0,0,0,Q.earth)}{let A=U(M),N=U(d);for(let[Y,J]of ft){let[xt,_t]=jn(...Y),[Yt,Xt]=jn(...J),[ye,Me]=[J[0]-Y[0],J[1]-Y[1]];D(A,(xt+Yt)/2,Je+.012,(_t+Xt)/2,Math.hypot(ye,Me),.024,.72,Ei-Math.atan2(Me,ye),0,0,Q.path);for(let[_e,Ue]of[[xt,_t],[Yt,Xt]])D(N,_e,Je+.012,Ue,.72,.024,.72,0,0,0,Q.path)}}let Jt=[],Ft=[],Pe=[],Dt=[],se=[];for(let A of jt){if(A.h<.2||Ee(A.x,A.z)<1.3||A.u>$e.u[0]-.2&&A.u<$e.u[1]+.2&&A.v>$e.v[0]-.2&&A.v<$e.v[1]+.2)continue;let Y=gc(A.q,A.r),J=gc(A.r+7,A.q-3),xt=A.v>$e.v[1],_t=A.x+(J-.5)*.35,Yt=A.z+(Y-.5)*.35,Xt=.8+J*.4;if(xt){Y>.7?D(Dt,_t,A.h+.12,Yt,.9+J*.5,.7,.9+Y*.5,Y*6,0,0,J<.5?Q.mid:Q.high,A.h):Y<.08&&D(se,_t,A.h+.12,Yt,.8,.6,1,Y*6,0,0,Q.rock,A.h);continue}if(Y>.86){D(se,_t,A.h+.14,Yt,.8,.6,1,Y*6,0,0,Q.rock,A.h);continue}if(Y>.72){D(Dt,_t,A.h+.12,Yt,.9+J*.5,.7,.9+Y*.5,Y*6,0,0,Q.mid,A.h);continue}D(Jt,_t,A.h+.4*Xt,Yt,.12,.8*Xt,.12,0,0,0,Q.wood,A.h),J<.4?(D(Ft,_t,A.h+1.05*Xt,Yt,1.15*Xt,1.4*Xt,1.15*Xt,Y*6,0,0,Q.deep,A.h),D(Ft,_t,A.h+1.55*Xt,Yt,.74*Xt,.9*Xt,.74*Xt,Y*6,0,0,Q.mid,A.h)):D(Pe,_t,A.h+1.15*Xt,Yt,1.25*Xt,1.4*Xt,1.25*Xt,Y*6,0,0,J>.8?Q.sun:Y<.4?Q.mid:Q.deep,A.h)}{let A=(N,Y)=>{if(Math.abs(N-ai.bilheteria[0])<1.3&&Y>0)return;let[J,xt]=jn(N,Y);D(Dt,J,Je+.13,xt,1.1,.8,1.1,N*3,0,0,gc(N,Y)<.5?Q.mid:Q.high)};for(let N=$e.u[0];N<=$e.u[1];N+=.62)A(N,$e.v[1]),A(N,$e.v[0]);for(let N=$e.v[0]+.62;N<$e.v[1];N+=.62)A($e.u[0],N),A($e.u[1],N)}let we=(A,N,Y,J=Q.sun)=>{ot(R,A,N,Y,.11,.11,.11,"#d8d3c2",{light:J}),G[q].push([A,N,Y])},re=(A,N,Y,J=0)=>{nt=!0,ot(d,A,N,J+.17,.13,.34,.13,Y),ot(R,A,N,J+.41,.16,.16,.16,Q.skin),nt=!1},C=(A,N,Y,J=1)=>{V(A,N,.4*J,.04,.8*J,.04,Q.ivory),ot(_,A,N,.86*J,.8*J,.28*J,.8*J,Y)},v=(A,N,Y=1)=>{ot(d,A,N,.55*Y,.1,1.1*Y,.1,Q.wood);for(let J=0;J<5;J++){let xt=J/5*Math.PI*2+.3;V(A+Math.cos(xt)*.3,N+Math.sin(xt)*.3,1.12*Y,.62,.03,.17,J%2?Q.leaf:Q.mid,{rot:-xt,rz:-.32})}};it("bilheteria");{V(0,0,.015,2.9,.03,1.5,Q.path);for(let A of[-1,1])V(A*1.12,-.05,.68,.42,1.36,.42,Q.coral),V(A*1.12,.17,.62,.26,.2,.02,Q.ivory),ot(_,A*1.12,-.05,1.58,.62,.44,.62,Q.sun);V(0,-.05,1.3,2,.2,.2,Q.sun),V(0,.07,1.34,1.24,.34,.05,Q.ivory);for(let[A,N]of[[-.34,Q.pool],[0,Q.coral],[.34,Q.pool]])V(A,.1,1.34,.26,.1,.02,N);for(let A of[-1,1]){let N=A*.62;V(N,-.3,.36,.62,.72,.56,Q.ivory),ot(I,N,-.3,.86,.5,.82,.5,Q.coral,{rz:Math.PI/2}),V(N,-.015,.42,.36,.22,.02,Q.off,{light:Q.sun}),V(N,.06,.26,.5,.05,.18,Q.plank)}for(let A of[-.14,.14])V(A,.35,.14,.04,.28,.3,Q.ink);for(let A=0;A<5;A++)we(-.8+A*.4,.08,1.16-.05*Math.sin(A*Math.PI/4));for(let[A,N]of[[-.38,Q.coral],[.42,Q.sun]])re(A,.72,N);re(.08,1.05,Q.mid)}it("piscina");{ot(d,0,0,.03,4.1,.06,2.5,Q.ivory),ot(d,1.55,.42,.03,1.5,.06,1.5,Q.ivory);let A={mode:"water"};ot(d,0,0,.065,3.5,.03,1.95,Q.pool,A),ot(d,1.55,.42,.065,1.05,.03,1.05,"#6db6df",A);for(let N of[-.8,.3])V(N,0,.08,1.1,.012,.03,Q.ivory);for(let[N,Y,J]of[[-1.05,.34,Q.coral],[.6,-.42,Q.sun]])ot(d,N,Y,.09,.34,.05,.34,J);for(let N of[-.09,.09])V(1.72+N,-.42,.2,.025,.32,.025,Q.ivory);V(-1.72,-.4,.22,.5,.04,.14,Q.plank),V(-1.92,-.4,.12,.08,.24,.08,Q.ink);for(let[N,Y]of[[-1.2,1.02],[-.75,1.08],[.45,1.06],[.9,1]])V(N,Y,.07,.34,.05,.16,N<0?Q.coral:Q.sun),V(N-.14,Y,.11,.08,.08,.16,Q.ivory);C(-.98,1.28,Q.coral),C(.68,1.3,Q.sun),C(-2.05,.28,Q.leaf),v(2.5,-.45),v(-2.25,-.75,.85);for(let N of[-1.5,1])we(N,-1.05,1.05);for(let N of[-1.5,1])V(N,-1.05,.5,.03,1,.03,Q.ink);for(let[N,Y,J]of[[-.3,.1,Q.coral],[.5,.3,Q.sun],[-.75,-.2,Q.ink],[1.55,.45,Q.leaf]])re(N,Y,J,-.2);re(-1.72,-.4,Q.mid,.2),re(1.4,1.2,Q.coral)}it("toboagua");{for(let[N,Y]of[[-.32,-.32],[.32,-.32],[-.32,.32],[.32,.32]])V(N,Y,1.15,.08,2.3,.08,Q.ivory);for(let N of[.8,1.55,2.3])V(0,0,N,.92,.07,.92,N>2?Q.sun:Q.plank);ot(_,0,0,2.75,1.3,.72,1.3,Q.coral);for(let N=0;N<7;N++)V(.56,-.28+N%2*.3,.12+N*.32,.3,.05,.2,Q.wood);let A=(N,Y,J,xt,_t,Yt)=>{let Xt=J-Y,ye=xt-_t,Me=Math.hypot(Xt,ye),_e=Math.atan2(ye,Xt),Ue={rx:_e};V(N,(Y+J)/2,(xt+_t)/2,.42,.05,Me,Yt,Ue);for(let Xe of[-.2,.2])V(N+Xe,(Y+J)/2,(xt+_t)/2+.04,.03,.09,Me,Yt,Ue);V(N,(Y+J)/2,(xt+_t)/2+.032,.26,.012,Me,Q.pool,{rx:_e,mode:"water"})};A(-.3,.44,2.05,2.25,.25,Q.sun),A(.3,.44,1.05,1.55,.95,Q.coral),A(.3,1.05,2.1,.95,.25,Q.coral),we(-.46,.46,2.4),we(.46,.46,2.4),re(.1,.1,Q.coral,2.33),re(-.2,-.2,Q.sun,1.58)}it("lanchonete");{V(0,-.1,.48,1.7,.96,1,Q.ivory),V(0,-.1,1,1.84,.08,1.14,Q.coral),V(0,.42,.25,1.62,.5,.1,Q.sun),V(0,.5,.5,1.72,.05,.24,Q.plank);for(let A of[-.5,0,.5])V(A,.405,.68,.36,.3,.02,Q.off,{light:Q.sun});for(let A=0;A<7;A++)V(-.84+A*.28,.62,.94,.28,.03,.46,A%2?Q.ivory:Q.coral,{rx:.32});ot(_,0,-.1,1.32,.42,.6,.42,Q.plank),ot(R,0,-.1,1.74,.48,.48,.48,"#ffb4a8"),ot(R,.02,-.08,2.02,.34,.34,.34,Q.ivory),V(-1.02,.3,.36,.06,.72,.06,Q.ink),V(-1.02,.31,.62,.34,.36,.03,Q.ink);for(let A of[.68,.6,.52])V(-1.02,.33,A,.22,.025,.01,Q.ivory);for(let[A,N,Y]of[[-.72,1.22,Q.sun],[.72,1.28,Q.coral]]){ot(d,A,N,.26,.42,.04,.42,Q.ivory),V(A,N,.13,.04,.26,.04,Q.ink);for(let J of[-.32,.32])ot(d,A+J,N,.09,.17,.18,.17,Q.plank);C(A,N,Y,.9)}for(let A of[-.65,.65])we(A,.68,.86,Q.sun);re(.1,1.02,Q.coral),re(-.4,.92,Q.mid),re(.42,.86,Q.sun),v(1.32,-.3,.9)}it("estacionamento");{V(0,0,.02,3,.04,2.3,Q.asphalt);for(let N of[-1.05,-.35,.35,1.05])V(N,-.65,.045,.05,.01,.9,Q.ivory),V(N,.65,.045,.05,.01,.9,Q.ivory);let A=(N,Y,J)=>{V(N,Y,.18,.44,.2,.76,J),V(N,Y-.04,.33,.38,.14,.38,Q.ink),V(N,Y+.39,.16,.3,.06,.02,Q.sun);for(let xt of[-.23,.23])for(let _t of[-.24,.24])V(N+xt,Y+_t,.08,.05,.15,.15,Q.ink)};A(-.7,-.65,Q.coral),A(.7,.65,Q.sun),nt=!0,A(0,-.65,Q.leaf),A(.7,-.65,Q.pool),A(-.7,.65,Q.ivory),nt=!1,V(1.4,.05,.3,.42,.6,.42,Q.ivory),V(1.4,.05,.62,.5,.05,.5,Q.coral),V(1.4,.265,.36,.26,.16,.02,Q.off,{light:Q.sun}),V(.8,.1,.34,1,.05,.05,Q.sun);for(let[N,Y]of[[-1.45,-1.1],[-1.45,1.1]])V(N,Y,.55,.04,1.1,.04,Q.ink),we(N,Y,1.14)}it("enfermaria");{V(0,0,.56,1.9,1.12,1.25,Q.ivory),ot(I,0,0,1.4,1.05,2.05,1.05,Q.ink,{rz:Math.PI/2}),V(0,.64,.82,.42,.12,.02,Q.coral),V(0,.64,.82,.12,.42,.02,Q.coral),V(0,.3,1.56,.34,.1,.04,Q.coral,{rx:-.5}),V(0,.3,1.56,.1,.3,.04,Q.coral,{rx:-.5}),V(-.36,.64,.3,.32,.6,.02,Q.ink);for(let A of[.42,.76])V(A,.635,.42,.24,.26,.02,Q.off,{light:Q.sun});V(-.36,.86,.04,.5,.06,.46,Q.path),V(-1.42,.2,.26,.78,.4,.42,Q.ivory),V(-1.42,.2,.5,.46,.1,.4,Q.off,{light:Q.sun}),V(-1.42,.415,.28,.24,.06,.01,Q.coral),V(-1.42,.415,.28,.06,.22,.01,Q.coral);for(let A of[-.28,.28])V(-1.42+A,.2,.07,.13,.14,.46,Q.ink);we(-.94,.5,1.1),V(-.94,.5,.54,.03,1.08,.03,Q.ink),re(.1,.92,Q.ivory),v(1.32,-.25,.85)}q=null;for(let A of F)O[A].v1+=.62,O[A].flag=O[A].top+.5,O[A].top+=.55;let H=new qe;H.rotation.order="YXZ";let at=new Le().makeScale(0,0,0),ct=new ie,rt=new Map,Ht=([A,N,Y,J,xt,_t,Yt,Xt,ye])=>(H.position.set(A,N,Y),H.scale.set(J,xt,_t),H.rotation.set(Yt,Xt,ye),H.updateMatrix(),H.matrix),vt=(A,N,Y,J)=>{let xt=new ke(N,Y,Math.max(1,J.length));return xt.name=A,xt.count=J.length,xt.userData.items=J,J.forEach((_t,Yt)=>{xt.setMatrixAt(Yt,Ht(_t)),xt.setColorAt(Yt,ct.set(_t[9]))}),xt.frustumCulled=!1,c.add(xt),rt.set(J,xt),xt},Ot=(A,N,Y,J)=>{let xt=x("wind",J);return N.setAttribute("aGround",new Si(Float32Array.from(Y,_t=>_t[10]),1)),vt(A,N,xt,Y)};vt("parque-chao",ve,o(new ri({color:"#ffffff",flatShading:!0}),"ground-water"),De),vt("parque-colunas",Ye,x(),ee),Ot("parque-troncos",a(new fn(.5,.8,1,3,1,!0)),Jt,.035),Ot("parque-pinheiros",a(new Di(.52,1,6,1,!0)),Ft,.035),Ot("parque-copas",a(new Jn(.5,0)),Pe,.035),Ot("parque-arbustos",a(new Jn(.3,0)),Dt,.15),vt("parque-pedras",a(new Jn(.4,0),.6),x(),se);{let A=0;for(let{g:N,mode:Y,items:J}of b.values())vt("parque-pecas-"+A++,N,x(Y),J)}let Vt=new ze(new _n(400,400).rotateX(-Math.PI/2),new gn({color:Q.earth}));Vt.name="parque-piso",c.add(Vt);let gt=[...F.map(A=>{let N=O[A],[Y,J]=jn((N.u0+N.u1)/2,(N.v0+N.v1)/2);return[Y,Je+.008,J,(N.u1-N.u0)*1.15,1,(N.v1-N.v0)*1.2,0,Ei,0]}),...Jt.map(A=>[A[0],A[10]+.012,A[2],1.1,1,1,0,0,0])],wt=new ke(new _n(1,1).rotateX(-Math.PI/2),new gn({map:h(),color:"#14301f",transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1}),gt.length);gt.forEach((A,N)=>wt.setMatrixAt(N,Ht(A))),wt.name="parque-sombras",c.add(wt);let Kt=Object.fromEntries(F.map(A=>{let N=O[A],Y=(N.u0+N.u1)/2-ai[A][0],J=(N.v0+N.v1)/2-ai[A][1];return[A,{u:Y,v:J,r:Math.max(N.u1-N.u0,N.v1-N.v0)/2+.2}]})),Bt=new ke(new nr(1,.035,5,36).rotateX(Math.PI/2),new gn({toneMapped:!1}),F.length),Tt=new ke(d,x(),F.length),ne=new ke(new _n(.46,.3,8,1),o(new ri({color:Q.leaf,flatShading:!0,side:dn}),"flag"),F.length),k=4,pt=new ke(d,x(),F.length*k),yt=new ke(R,x(),F.length*k),Ut=F.flatMap(A=>G[A].map(([N,Y,J])=>{let[xt,_t]=jn(ai[A][0]+N,ai[A][1]+Y);return[A,xt,Je+J,_t]})),mt=new gn({map:h(),color:Q.sun,transparent:!0,opacity:.42,blending:ar,depthWrite:!1,toneMapped:!1});mt.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <project_vertex>","vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;")},mt.customProgramCacheKey=()=>"brilho-parque";let ht=new ke(new _n(1,1),mt,Math.max(1,Ut.length));[Bt,Tt,ne,pt,yt,ht].forEach(A=>{A.frustumCulled=!1,c.add(A)}),Bt.name="parque-aneis",Tt.name="parque-mastros",ne.name="parque-bandeiras",pt.name="parque-equipe",yt.name="parque-equipe-cabecas",ht.name="parque-brilhos";let kt=F.map((A,N)=>{let Y=Kt[A],J=O[A],[xt,_t]=jn(ai[A][0]+Y.u,ai[A][1]+Y.v),Yt=new ze(new fn(Y.r,Y.r,J.top+.4,8),new gn({visible:!1}));return Yt.position.set(xt,Je+(J.top+.4)/2,_t),Yt.userData.lugar=N,c.add(Yt),Yt}),Wt=new ie("#9a9c98"),ge=[],ue=F.map(()=>({feito:!1,equipe:[]})),hn=-1,Ze=!1,Qn=!1,pn=0,Oi=!0,Ln=!0,En=12,On=0,Bi=0,Dn=0,Un=0;function Ls(){F.forEach((A,N)=>{let Y=ue[N],J=Kt[A],[xt,_t]=ai[A],[Yt,Xt]=jn(xt+J.u,_t+J.v),ye=N===hn,Me=O[A];H.rotation.set(0,Ei,0),H.position.set(Yt,Je+.05,Xt),H.scale.set((Me.u1-Me.u0)/2+.15,1,(Me.v1-Me.v0)/2+.15),H.updateMatrix(),Bt.setMatrixAt(N,ye?H.matrix:at),Bt.setColorAt(N,ct.set(Q.sun));let[_e,Ue]=jn((Me.u0+Me.u1)/2,Me.v0+.15),Xe=Me.flag;H.rotation.set(0,0,0),H.scale.set(.04,Xe,.04),H.position.set(_e,Je+Xe/2,Ue),H.updateMatrix(),Tt.setMatrixAt(N,Y.feito?H.matrix:at),Tt.setColorAt(N,ct.set(Q.ink)),H.scale.set(1,1,1),H.position.set(_e+so.x*.25,Je+Xe-.16,Ue+so.z*.25),H.rotation.set(0,Ei,0),H.updateMatrix(),ne.setMatrixAt(N,Y.feito?H.matrix:at);for(let xe=0;xe<k;xe++){let Ce=Y.equipe?.[xe],[mn,He]=jn((Me.u0+Me.u1)/2+(xe-1.5)*.36,Me.v1-.31);H.rotation.set(0,0,0),H.scale.set(.17,.42,.17),H.position.set(mn,Je+.21,He),H.updateMatrix(),pt.setMatrixAt(N*k+xe,Ce?H.matrix:at),Ce&&pt.setColorAt(N*k+xe,ct.set(Ce)),H.scale.setScalar(.2),H.position.y=Je+.5,H.updateMatrix(),yt.setMatrixAt(N*k+xe,Ce?H.matrix:at),Ce&&yt.setColorAt(N*k+xe,ct.set(Q.skin))}if(ge[N]!==Y.feito){ge[N]=Y.feito;for(let{list:xe,k:Ce,on:mn}of E[A]){let He=rt.get(xe);ct.set(Y.feito&&mn||xe[Ce][9]),Y.feito||ct.lerp(Wt,.3),He.setColorAt(Ce,ct),He.instanceColor.needsUpdate=!0}}for(let{list:xe,k:Ce}of w[A]){let mn=rt.get(xe);mn.setMatrixAt(Ce,Y.feito?Ht(xe[Ce]):at),mn.instanceMatrix.needsUpdate=!0}}),Ut.forEach(([A,N,Y,J],xt)=>{ht.setMatrixAt(xt,ue[F.indexOf(A)].feito?Ht([N,Y,J,.5,.5,.5,0,0,0]):at)});for(let A of[Bt,Tt,ne,pt,yt,ht])A.instanceMatrix.needsUpdate=!0;for(let A of[Bt,Tt,pt,yt])A.instanceColor&&(A.instanceColor.needsUpdate=!0)}let zi=new z,ti=new z,Ds=A=>{let N=O[A],Y=[];for(let J of[N.u0,N.u1])for(let xt of[N.v0,N.v1])for(let _t of[0,N.top]){let[Yt,Xt]=jn(J,xt);Y.push(new z(Yt,Je+_t,Xt))}return Y},ao=F.flatMap(Ds),me=4;function mr(A){u.position.set(Math.sin(Ei)*10,10,Math.cos(Ei)*10),u.lookAt(0,.45,0),u.updateMatrixWorld(),ti.setFromMatrixColumn(u.matrixWorld,0),zi.setFromMatrixColumn(u.matrixWorld,1);let N=1e9,Y=-1e9,J=1e9,xt=-1e9;for(let Xt of ao){let ye=Xt.dot(ti),Me=Xt.dot(zi);N=Math.min(N,ye),Y=Math.max(Y,ye),J=Math.min(J,Me),xt=Math.max(xt,Me)}let _t=A.width/A.height,Yt=Math.min(34,A.height*.2)/A.height;me=Math.max((xt-J)/2/(1-Yt-.03),(Y-N)/2/_t/.97),u.position.addScaledVector(ti,(N+Y)/2).addScaledVector(zi,(J+xt)/2+me*Yt-new z(0,.45,0).dot(zi)),u.left=-me*_t,u.right=me*_t,u.top=me,u.bottom=-me,u.updateProjectionMatrix(),u.updateMatrixWorld()}let S=()=>{let A=i.getBoundingClientRect();return{width:Math.max(1,A.width),height:Math.max(1,A.height)}},W=(A,N)=>{let Y=A.clone().project(u);return{x:(Y.x+1)/2*N.width,y:(1-Y.y)/2*N.height}};function K(A=S()){return{width:A.width,height:A.height,selected:hn,lugares:F.map(N=>{let[Y,J]=lt(N),xt=Ds(N).map(Xt=>W(Xt,A)),_t=xt.map(Xt=>Xt.x),Yt=xt.map(Xt=>Xt.y);return{id:N,...W(new z(Y,Je+O[N].top,J),A),base:W(new z(Y,Je,J),A),box:{x0:Math.min(..._t),x1:Math.max(..._t),y0:Math.min(...Yt),y1:Math.max(...Yt)}}})}}let j="",X=!0;function dt(){if(Ze||Qn||i.hidden)return;let A=S();mr(A),X&&(X=!1,Ls()),f.render(c,u),pn++;let N=A.width+"x"+A.height;(N!==j||dt.force)&&(j=N,dt.force=!1,n(K(A)))}function Et(){if(Qn)return;let A=S();f.setSize(A.width,A.height,!1),dt()}let zt=()=>Oi&&Ln&&!Ze&&!Qn&&!i.hidden&&!document.hidden;function Pt(A){let N=Math.min(A,12-En);N<=0||(En+=N,On+=((En<10?1:0)-On)*(1-Math.exp(-N/.45)),Bi+=N*On,r.uT.value=Bi,r.uAmp.value=On,dt())}function te(A){if(Un=0,!zt())return;let N=Dn?Math.min((A-Dn)/1e3,.05):0;Dn=A,Pt(N),En<12?Un=requestAnimationFrame(te):Dn=0}function Qt(){En=0,!Un&&zt()&&(Un=requestAnimationFrame(te))}let $t=new or,le={x:0,y:0};p.addEventListener("pointerdown",A=>{le.x=A.clientX,le.y=A.clientY,Qt()}),p.addEventListener("pointerup",A=>{if(Math.hypot(A.clientX-le.x,A.clientY-le.y)>8)return;let N=p.getBoundingClientRect();$t.setFromCamera(new he((A.clientX-N.left)/N.width*2-1,-(A.clientY-N.top)/N.height*2+1),u);let Y=$t.intersectObjects(kt)[0];Y&&e(Y.object.userData.lugar)}),p.addEventListener("webglcontextlost",A=>{A.preventDefault(),Ze=!0,s("O mapa 3D do parque foi interrompido. Use a lista de lugares.")});let Ae=new ResizeObserver(Et);return Ae.observe(i),Et(),{render:dt,anchors:K,advance:Pt,paint(A){let N=JSON.stringify(A)!==JSON.stringify(ue);ue=A.map((Y,J)=>({...ue[J],...Y})),X=dt.force=!0,dt(),N&&Qt()},select(A){hn!==A&&(hn=A,X=dt.force=!0,dt())},setActive(A){Ln=A,A?Qt():(cancelAnimationFrame(Un),Un=0,Dn=0)},setMotion(A){Oi=A,A?Qt():(cancelAnimationFrame(Un),Un=0,Dn=0,En=12,On=0,r.uAmp.value=0,dt())},state:()=>({ready:!0,frames:pn,selected:hn,states:ue.map(A=>({...A})),calls:f.info.render.calls,triangles:f.info.render.triangles,lost:Ze,half:me,ambient:En,motion:Oi,active:Ln,life:{t:Bi,amp:r.uAmp.value}}),raw:()=>({renderer:f,scene:c,camera:u,targets:kt,floor:Vt,uniforms:r,field:ia,plot:$e,toUV:Te,meshes:Object.fromEntries([...rt.values()].map(A=>[A.name,A])),team:pt,glow:ht,flag:ne,ext:O,piecesOf:E,aliveOf:w}),dispose(){Qn=!0,cancelAnimationFrame(Un),Ae.disconnect(),c.traverse(A=>{A.geometry?.dispose(),A.material?.dispose?.()}),f.dispose(),p.remove()}}}};de.tonemapping_pars_fragment=de.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }","vec3 CustomToneMapping( vec3 color ) { vec3 c=color*toneMappingExposure;c=mix(c,.85+.15*(1.-exp(-(c-.85)/.15)),step(.85,c));float l=dot(c,vec3(.2126,.7152,.0722));return clamp(c+mix(vec3(-.008,0.,.016)*smoothstep(0.,.3,l),vec3(.008,.004,-.006),l),0.,1.); }");var eu={leaf:"#2ebe6a",coral:"#f2534a",sun:"#ffc83d",ink:"#1c2744"},Pn=.55,li=[Math.cos(Pn),-Math.sin(Pn)],Fn=[Math.sin(Pn),Math.cos(Pn)],os=(i,t)=>[i*li[0]+t*Fn[0],i*li[1]+t*Fn[1]],Fi=(i,t)=>[i*li[0]+t*li[1],i*Fn[0]+t*Fn[1]],iu=2.45,Jx=.42,vc=.22,nu=[0,.08,.16,.36,.6,.88,1.2],xn={s:[-20,20],t:[-11,12]},oo=[Math.cos(vc),-Math.sin(vc)],Od=[Math.sin(vc),Math.cos(vc)],kd=i=>{let t=Math.max(0,Math.min(6,Math.floor(i))),e=Math.min(6,t+1),n=Math.max(0,Math.min(1,i-t));return nu[t]+(nu[e]-nu[t])*n},$x=Array.from({length:37},(i,t)=>{let e=(t-12)/2,n=(e-3)*iu,s=t%2?Jx*(Math.floor(e)&1?-1:1):0;return[...os(n*oo[0]+s*Od[0],n*oo[1]+s*Od[1]),.35+kd(e)]}),Kx={bino:[0,3,-.2],teo:[6,-2.6,.3]},Bd=2.3,jx=.45,zd=1.55,xc=.09,Qx=i=>.22+.24*Math.sqrt(i),sn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Vd=()=>{let i={uT:{value:0},uAmp:{value:0},uGust:{value:new Be(0,0,0,9)},uBloom:{value:new Be(0,0,0,9)},uCloud:{value:[0,1,2].map(()=>new z(0,-99,1))},uLake:{value:new he(0,-99)},uFog:{value:new ie("#dfe8e4")}},t=`uniform float uT,uAmp,uK;uniform vec4 uGust,uBloom;varying vec3 vWorld;const vec2 WD=vec2(.85,-.52);
vec2 windAt(vec3 p,float h){float b=.5+.5*sin(dot(p.xz,WD)*.8-uT*1.7);vec2 g=p.xz-uGust.xy;float d=length(g),gu=uGust.z*exp(-d*d*.25)*(.55+.45*sin(d*2.4-uGust.w*6.));
 return (WD*uAmp*(.25+.75*b*b+.18*sin(uT*2.9+p.x*1.9+p.z*1.3))+(d>.001?g/d:WD)*gu)*h*uK;}
`,e=`uniform float uT;uniform vec3 uCloud[3],uFog;uniform vec2 uLake;varying vec3 vWorld;
float cloudShade(vec2 p){float s=1.;for(int i=0;i<3;i++){vec2 q=(p-uCloud[i].xy)/uCloud[i].z;s-=.14*(1.-smoothstep(.45,1.,length(q*vec2(1.,1.35))));}return s;}
vec3 glint(vec3 p){float a=sin(dot(p.xz,vec2(.5,.866))*9.-uT*2.4+sin(dot(p.xz,vec2(.866,-.5))*3.7+uT*.8)*1.6);
 if(length(p.xz-uLake)<1.2)a=sin(dot(p.xz,vec2(.8,.6))*8.+uT*1.2)*sin(dot(p.xz,vec2(-.6,.8))*7.-uT*.9)*1.15;return vec3(.2,.24,.28)*smoothstep(.8,1.,a);}
`,n={wind:"attribute float aGround;",bloom:"attribute float aGround;",sway:"attribute float aSway;",critter:"attribute float aWing;attribute vec3 aFly;",particle:"attribute float aGlow;varying float vGlow;"},s={bloom:"{vec3 ip=instanceMatrix[3].xyz;float k=clamp((uBloom.w-length(ip.xz-uBloom.xy)*.25)/.7,0.,1.);transformed*=1.+uBloom.z*.9*sin(k*3.14159);}",flag:"transformed.z+=sin(position.x*21.-uT*6.+float(gl_InstanceID)*1.9)*.035*(position.x+.15)/.3*uAmp;",critter:"{float f=sin(uT*aFly.z+aFly.y)*aFly.x;transformed.y+=abs(aWing)*f*.45;transformed.z*=1.-abs(aWing)*abs(f)*.3;}",particle:"vGlow=aGlow;"},r={wind:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",bloom:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",sway:"wp.xyz+=vec3(WD.x,.5,WD.y)*aSway*uAmp*uK*sin(uT*3.3+wp.x*7.+wp.z*5.);"},o={water:"outgoingLight+=glint(vWorld);","ground-water":"outgoingLight+=glint(vWorld)*step(vWorld.y,.2);",cloud:"outgoingLight=mix(outgoingLight/cloudShade(vWorld.xz),diffuseColor.rgb,.55);",glow:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.1,.65);",particle:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.15,vGlow*.8);"},a=`varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};
void RE_Direct_Lambert(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
 float w=floor((dot(geometryNormal,directLight.direction)*.5+.5)*4.+.5)/4.;reflectedLight.directDiffuse+=mix(directLight.color*vec3(.3,.34,.52),directLight.color,w)*BRDF_Lambert(material.diffuseColor);}
void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,h="{float fd=clamp((-vViewPosition.z-14.5)/9.,0.,1.);outgoingLight=mix(outgoingLight,uFog,max(fd*fd*.5,(1.-smoothstep(.1,.5,vWorld.y))*.14));}";function c(u,f="",p=1){return u.onBeforeCompile=m=>{Object.assign(m.uniforms,i,{uK:{value:p}}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
`+t+(n[f]||"")).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(s[f]||"")).replace("#include <project_vertex>",`vec4 wp=vec4(transformed,1.);
#ifdef USE_INSTANCING
wp=instanceMatrix*wp;
#endif
wp=modelMatrix*wp;${r[f]||""}vWorld=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
`+e+(f==="particle"?"varying float vGlow;":"")).replace("#include <lights_lambert_pars_fragment>",a).replace("#include <opaque_fragment>","outgoingLight*=cloudShade(vWorld.xz);"+(o[f]||"")+h+`
#include <opaque_fragment>`)},u.customProgramCacheKey=()=>"vivo-"+f,u}return{U:i,patch:c}};function ro(i,t=.55,e=.7){let n=i.attributes.position,s=new Float32Array(n.count*3);i.computeBoundingBox();let{min:r,max:o}=i.boundingBox;for(let a=0;a<n.count;a++)s.fill(t+(1-t)*Kn.smoothstep(n.getY(a),r.y,r.y+(o.y-r.y)*e),a*3,a*3+3);return i.setAttribute("color",new en(s,3)),i}var su=()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.45,"rgba(255,255,255,.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Hr(i)};window.BosqueKit={vivo:Vd,footShade:ro,radial:su};window.Bosque={create(i,{onSelect:t,onError:e,onView:n=()=>{},onFrame:s=()=>{},onWalk:r=()=>{}}){let o=new ns,a=new is(-6,6,4,-4,.1,80),h=new no({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2)),h.toneMapping=Yr,h.info.autoReset=!1;let c=h.domElement;c.style.removeProperty("display"),c.setAttribute("role","img"),c.setAttribute("aria-label","Bosque em tr\xEAs dimens\xF5es com sete paradas numa trilha. Use tamb\xE9m a lista de paradas."),i.prepend(c),o.add(new sr("#fffdf9","#245b39",1.8));let u=new rr("#fff1d0",2.2);u.position.set(-4,8,5),o.add(u);let{U:f,patch:p}=Vd(),m=(l,g={})=>p(new ri({color:l,flatShading:!0,...g})),x={grass:"#69ae72",light:"#90be7c",high:"#51925d",earth:"#2b6946",rock:"#9b9a77",wood:"#8e603b",plank:"#bb8c52",leaf:"#1d6b49",leaf2:"#38935b",water:"#3a6690",path:"#fff5de",ivory:"#fffdf9",coral:"#f2534a",coralDeep:"#d63c38",sun:"#ffc83d",ink:"#1c2744"},M=Object.fromEntries(Object.entries(x).map(([l,g])=>[l,m(g)])),_=new Li(1,1,1),d=new Xr(.6,0),I=new fn(.34,.34,.62,3),R=new Map,b=new qe,U=0,D=null,F=0,G=new Map,E=l=>(G.has(l)||(l.computeBoundingBox(),G.set(l,l.boundingBox)),G.get(l));function w(l,g,y,T,L,P=1,Z=1,st=1,ut=0,Mt=0,bt=0){let Zt=l.uuid+g.uuid,Lt=[y,T+U,L,P,Z,st,bt,ut,Mt,F,D?.35+U:null];R.has(Zt)||R.set(Zt,{g:l,m:g,items:[]}),R.get(Zt).items.push(Lt),D&&D.push(E(l).clone().applyMatrix4(q(Lt)))}function O(l,g,y,T,L,P,Z=M.wood,st=0,ut=0,Mt=0){w(_,Z,l,g,y,T,L,P,st,ut,Mt)}let q=([l,g,y,T,L,P,Z,st,ut])=>(b.position.set(l,g,y),b.scale.set(T,L,P),b.rotation.set(Z,st,ut),b.updateMatrix(),b.matrix);function $(l,g,y,T,L){let P=new ke(g,y,Math.max(1,T.length));return P.name=l,P.count=T.length,P.userData.items=T,T.forEach((Z,st)=>{P.setMatrixAt(st,q(Z)),L&&P.setColorAt(st,new ie(Z[9]))}),P.frustumCulled=!1,o.add(P),P}function et(l,g,y="wind",T=L=>L[10]){return l.geometry.setAttribute("aGround",new Si(Float32Array.from(l.userData.items,T),1)),p(l.material,y,g),l}let nt=new qo($x.map(([l,g,y])=>new z(l,y,g)),!1,"centripetal");nt.arcLengthDivisions=3600;let it=nt.getLengths(3600),ot=[0,1,2,3,4,5,6].map(l=>it[(l+6)*200]/it[3600]),V=Array.from({length:601},(l,g)=>nt.getPointAt(g/600)),tt=ot.map((l,g)=>{let y=nt.getPointAt(l),T=nt.getTangentAt(l);return{index:g,u:l,x:y.x,y:y.y,z:y.z,side:new z(-T.z,0,T.x).normalize()}}),It=[],qt=ot[6]-ot[0],Gt={u:it[1700]/it[3600]};{let l=nt.getPointAt(Gt.u);Gt.x=l.x,Gt.y=l.y,Gt.z=l.z}let Ee=(l,g)=>{let y=1e9,T=0;for(let L=0;L<V.length;L+=2){let P=Math.hypot(V[L].x-l,V[L].z-g);P<y&&(y=P,T=L)}return{d:y,p:V[T],i:T}},Oe=V.map((l,g)=>{let y=V[Math.max(0,g-1)],T=V[Math.min(600,g+1)];return .005+.6*Math.abs(T.y-y.y)/Math.hypot(T.x-y.x,T.z-y.z)}),Te=(l,g,y)=>Fi(l,g)[1]<Fi(y.x,y.z)[1],lt=[.5,Math.sqrt(3)/2],ft=[Math.sqrt(3)/2,-.5],Nt=Gt.x*ft[0]+Gt.z*ft[1],jt=(l,g)=>Math.abs(l*ft[0]+g*ft[1]-Nt),Rt=Object.fromEntries(Object.entries(Kx).map(([l,[g,y,T]])=>{let L=nt.getPointAt(ot[g]),[P,Z]=Fi(L.x,L.z),[st,ut]=os(P+T,Z-y);return[l,new z(st,.35,ut)]}));Rt.pipa=new z(tt[2].x-lt[0]*Bd,.35,tt[2].z-lt[1]*Bd);let ve=["bino","pipa","teo"];for(let l of ve){let g=Rt[l];delete Rt[l],Rt[l]=g}let Ye=[...tt,...Object.values(Rt)],[B,De]=Fi(tt[0].x,tt[0].z),[ee,Jt]=os(B-2.4,De-2.7),Ft=tt[0].y+.48,Pe=(l,g)=>Math.hypot(l-ee,g-Jt)<1.05,Dt=[[.95,-1.15,.8],[.8,-1.7,.62],[-.1,-1.34,.56],[.8,-1.7,.62],[.85,-1.16,.62],[.8,-1.7,.62],[.85,-1.16,.62]],se=(l,g,y)=>{let[T,L]=Fi(tt[l].x,tt[l].z);return os(T+g,L+y)},we=Dt.map(([l,g,y],T)=>{let[L,P]=se(T,l,g);return{x:L,z:P,r:y,y:tt[T].y}}),[re,C]=se(1,-.35,-3),v=[{x:re,z:C,r:1.6,y:tt[1].y},...we.map(l=>({...l,r:l.r+.85}))],H=Math.sqrt(3)*.58,at=(Nt-.87*(Math.round(Nt/.87-.5)+.5))/ft[0],ct=[],rt=new Map,Ht=(l,g)=>{if(jt(l,g)<.5)return .13;if(Pe(l,g))return Ft;let{d:y,p:T,i:L}=Ee(l,g),P=T.y;if(y<1)return P-Oe[L];let Z=v.find(ut=>Math.hypot(l-ut.x,g-ut.z)<ut.r);if(Z)return Z.y;if(Te(l,g,T))return y<1.9?P:y<4.6?P+.6:P+1.25;let st=y<1.9?P:Math.max(.35,P-.55*Math.ceil((y-1.9)/1.5));return y>5&&sn(Math.round(l),Math.round(g))<.3?Math.max(st,.95):st};for(let l=-40;l<=40;l++)for(let g=-40;g<=40;g++){let y=H*(g+l/2)+at,T=.87*l,[L,P]=Fi(y,T);if(L<xn.s[0]-1||L>xn.s[1]+1||P<xn.t[0]-1||P>xn.t[1]+1)continue;let Z={q:g,r:l,x:y,z:T,s:L,t:P,height:Ht(y,T)};ct.push(Z),rt.set(g+","+l,Z)}let vt=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],Ot=[],Vt=[],gt=[],wt=(l,g)=>ct.reduce((y,T)=>(T.x-l)**2+(T.z-g)**2<(y.x-l)**2+(y.z-g)**2?T:y),Kt=(ot[1]-ot[0])/2,Bt=l=>l<ot[1]+Kt?0:l<ot[3]+Kt?1:l<ot[4]+Kt?2:3,Tt=[];for(let l of ct){let g=Math.min(...vt.map(([st,ut])=>rt.get(l.q+st+","+(l.r+ut))?.height??0)),{d:y,p:T,i:L}=Ee(l.x,l.z),P=l.height-T.y;l.u=L/600,l.land=Bt(l.u),l.front=!Te(l.x,l.z,T),l.d=y,l.field=l.land===2&&l.front&&y>1.55&&y<4.3&&Math.hypot(l.x-tt[4].x,l.z-tt[4].z)>1.4&&l.height>.2,l.field&&Tt.push(l);let Z=l.height<.2?x.water:l.field?"#d6c35f":P>1?x.high:P>.4||P<-.3&&l.height>.5?x.grass:x.light;l.lake=Pe(l.x,l.z),(l.lake?gt:Ot).push([l.x,l.height,l.z,1,1,1,0,0,0,l.lake?x.water:Z]),g<l.height-.01&&Vt.push([l.x,l.height/2,l.z,1,l.height,1,0,0,0])}let ne=new er(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),k=new fn(.58,.58,1,6,1,!0);p($("hexagonos-topos",ne,m("#ffffff"),Ot,!0).material,"ground-water"),$("hexagonos-colunas",ro(k,.5,1),m(x.earth,{vertexColors:!0}),Vt),f.uLake.value.set(ee,Jt);let pt=new ze(new _n(400,400).rotateX(-Math.PI/2),M.earth);pt.position.y=0,o.add(pt);let yt=[],Ut=[];for(let l=0;l<600;l++){let g=V[l],y=V[l+1];if(jt((g.x+y.x)/2,(g.z+y.z)/2)<.95)continue;let T=nt.getTangentAt(l/600),L=nt.getTangentAt((l+1)/600),P=.43/Math.hypot(T.x,T.z),Z=.43/Math.hypot(L.x,L.z),st=g.y+.007,ut=y.y+.007,Mt=[g.x-T.z*P,st,g.z+T.x*P],bt=[g.x+T.z*P,st,g.z-T.x*P],Zt=[y.x-L.z*Z,ut,y.z+L.x*Z],Lt=[y.x+L.z*Z,ut,y.z-L.x*Z];yt.push(...Mt,...Zt,...bt,...bt,...Zt,...Lt);for(let At=0;At<6;At++)Ut.push(0,1,0)}let mt=new nn;mt.setAttribute("position",new Re(yt,3)),mt.setAttribute("normal",new Re(Ut,3));let ht=new ze(mt,M.path);ht.name="trilha-cont\xEDnua",o.add(ht);let kt=(l,g=Math.atan2(-nt.getTangentAt(l.u).z,nt.getTangentAt(l.u).x))=>({ry:g,at:(y,T)=>[l.x+y*Math.cos(g)+T*Math.sin(g),l.z-y*Math.sin(g)+T*Math.cos(g)]}),Wt={},ge={},ue=(l,g,y=tt[l]?.y)=>{U=l<0?0:y-.35,D=g?ge[g]??(ge[g]=[]):null},hn=tt.map(()=>[]),Ze=[],Qn,pn;{let{ry:l,at:g}=kt(Gt),y=(tt[3].y-tt[2].y)/(2*iu);Wt.ponte=[Gt.x,Gt.z],ue(-1,"ponte");for(let T=-8;T<=8;T++){let[L,P]=g(T*.125,0);O(L,Ee(L,P).p.y-.035,P,.12,.07,1.05,M.plank,l)}ue(2,"ponte",Gt.y);for(let T of[-.6,.6]){let[L,P]=g(0,T);O(L,.77,P,2.1,.065,.065,M.wood,l,y);for(let Z of[-.95,-.32,.32,.95]){let[st,ut]=g(Z,T);O(st,.51+Z*y,ut,.075,.65,.075,M.wood,l)}}for(let T of[-.9,.9]){let[L,P]=g(T,0);O(L,-.05+T*y,P,.12,.75,.7,M.wood,l)}}ue(1,"moinho"),Wt.moinho=[re,C],O(re,.9,C,.9,1.1,.8,M.ivory),O(re,.42,C,.98,.16,.88,M.rock);for(let[l,g]of[[C-.28,-.62],[C+.28,.62]])O(re,1.56,l,1.12,.08,.68,M.coral,0,0,g);O(re,1.09,C+.411,.25,.38,.025,M.ink),O(re+.27,.67,C+.416,.22,.52,.03),O(re-.33,1.75,C-.15,.15,.45,.17,M.ivory),Qn=[re-.33,2+U,C-.15];let Oi={x:[re-.62,re+1.05],z:[C-.5,C+.6],y:[.35+U,2.05+U]},Ln=new qn;Ln.name="roda-do-moinho",Ln.position.set(re+.5,.63+U,C+.18),o.add(Ln);let En=new nn,On=[],Bi=[];for(let l=0;l<12;l++){let g=l/12*Math.PI*2;On.push(0,Math.cos(g)*.43,Math.sin(g)*.43,0,Math.cos(g)*.32,Math.sin(g)*.32);let y=l*2,T=(y+2)%24;Bi.push(y,T,y+1,y+1,T,T+1)}En.setAttribute("position",new Re(On,3)),En.setIndex(Bi),En.computeVertexNormals(),Ln.add(new ze(En,m(x.wood,{side:dn})));let Dn=new ke(_,M.plank,6);for(let l=0;l<6;l++)b.position.set(0,0,0),b.scale.set(.14,.84,.055),b.rotation.set(l*Math.PI/3,0,0),b.updateMatrix(),Dn.setMatrixAt(l,b.matrix);Ln.add(Dn);let Un=m("#d3b27c"),Ls=new fn(1,1,1,6).rotateY(Math.PI/6),zi=new Di(.5,1,6),ti=we.map(({x:l,z:g},y)=>Math.max(tt[y].y,...ct.filter(T=>Math.hypot(T.x-l,T.z-g)<Dt[y][2]+.3).map(T=>T.height)));function Ds(l){let g=we[l],y=(T,L)=>[g.x+T*li[0]+L*Fn[0],g.z+T*li[1]+L*Fn[1]];return ue(l,"mundo"+(l+1),ti[l]),Wt["mundo"+(l+1)]=[g.x,g.z],{at:y,box(T,L,P,Z,st,ut,Mt,bt=0){let[Zt,Lt]=y(T,L);w(_,Mt,Zt,.35+P,Lt,Z,st,ut,Pn,bt)},geo(T,L,P,Z,st,ut,Mt,bt){let[Zt,Lt]=y(L,P);w(T,bt,Zt,.35+Z,Lt,st,ut,Mt,Pn)},perch(T,L){for(let[P,Z,st,ut]of[T,L]){let[Mt,bt]=y(P,Z);hn[l].push([Mt,ti[l]+st+.01,bt,Pn+ut])}}}}function ao(l){let g=Ds(l),y=Dt[l][2],T=l%2?1:-1,{coral:L,ivory:P,ink:Z,wood:st,plank:ut,sun:Mt}=M;g.geo(Ls,0,0,-.14,y,.3,y,Un);for(let be of[-1,1]){for(let Ne=0;Ne<3;Ne++)g.box(be*(.2+Ne*.11),y*.72,.2,.11,.07,.035,Ne%2?P:L);for(let Ne of[.15,.42])g.box(be*Ne,y*.72,.1,.03,.2,.03,Z)}g.box(-T*.16,-.2,.2,.62,.4,.09,P),g.box(-T*.32,-.2,.46,.3,.14,.09,P);for(let be of[-.31,.01,.29])g.box(-T*.16+be,-.08,.27,.03,.54,.03,st);g.box(-T*.16,-.08,.3,.66,.03,.12,ut);let bt=T*.32,Zt=-.12,Lt=l===6?.76:1;g.box(bt,Zt,Lt/2,.07,Lt,.07,Mt),g.box(bt,Zt,.04,.24,.08,.24,Z),g.box(bt-T*.2,Zt,Lt-.04,.72,.05,.06,Mt),g.box(bt+T*.2,Zt,Lt-.1,.12,.1,.09,Z),g.box(bt-T*.42,Zt,Lt-.24,.012,.36,.012,Z),g.box(bt-T*.42,Zt,Lt-.43,.07,.05,.05,L),g.perch([bt-T*.1,Zt,Lt-.01,0],[bt-T*.32,Zt,Lt-.01,Math.PI]);for(let[be,Ne]of[[0,.05],[1,.05],[.5,.1]])g.box(-T*.1+be*.13,.2,Ne,.12,.05,.34,ut);g.geo(zi,T*.36,.24,.09,.09,.18,.09,L),g.box(T*.36,.24,.012,.13,.024,.13,P);let At=-T*.4,St=.3;for(let be of[-.13,.13])g.box(At+be,St,.2,.03,.4,.03,st);g.box(At,St,.34,.36,.24,.03,P),g.box(At,St+.018,.44,.36,.03,.012,Mt),g.box(At-.1,St+.02,.32,.09,.09,.012,L);for(let be of[.35,.3])g.box(At+.06,St+.02,be,.14,.02,.012,Z);return{S:g,f:T,bx:At,by:St}}for(let l=1;l<7;l++){let{S:g,f:y,bx:T,by:L}=ao(l),{sun:P,coral:Z,ink:st}=M;if(l===3)for(let[ut,Mt,bt,Zt]of[[-.09,.45,.1,P],[.07,.44,.08,Z]]){let Lt=.35+Mt+U;F=(At,St)=>Math.max(0,Math.min(1,(Lt-St)/bt)),g.box(T+ut,L+.03,Mt-bt/2,.1,bt,.012,Zt),F=0}if(l===4){let[ut,Mt]=g.at(-.52,.02);O(ut,.35+.45,Mt,.03,.9,.03,st),pn=[ut+Fn[0]*.03,.35+.9+U,Mt+Fn[1]*.03]}if(l===5){let ut=.3+U;F=(Zt,Lt)=>Math.max(0,Math.min(1,(Lt-ut)/.4))*.7;let[Mt,bt]=g.at(y*.02,.16);w(I,P,Mt,.35+.14,bt,.7,.5,.7,Pn+.4,Math.PI/2),F=0;for(let Zt of[-.5,.5]){let[Lt,At]=g.at(Zt,-.05);O(Lt,.35+.25,At,.03,.5,.03,st),Ze.push([Lt,.35+.52+U,At])}}}let me={obras:[],pronta:[],cones:[],water:[],flag:null};{let l=Ds(0),{ivory:g,coral:y,sun:T}=M,L=Dt[0][2];l.geo(Ls,0,0,-.14,L,.3,L,M.high),l.box(-.04,.1,.012,1.08,.03,.72,g);for(let[At,St,be,Ne]of[[-.04,-.17,.86,.06],[-.04,.37,.86,.06],[-.44,.1,.06,.48],[.36,.1,.06,.48]])l.box(At,St,.05,be,.05,Ne,g);for(let At of[-1,1])l.box(.48+At*.13,.42,.2,.05,.4,.05,y);l.box(.48,.42,.42,.36,.08,.06,T),l.perch([.35,.42,.46,0],[.6,.42,.46,Math.PI]);{let[At,St]=l.at(.08,-.38);ge.mundo1.push(new Yn(new z(At-.2,.35+U,St-.2),new z(At+.2,.35+U+1.1,St+.2)))}let P=(At,St,be,Ne,Gn,Hn,We,Xi,gs=0)=>{let[Xs,wo]=l.at(St,be);At.push(gs?[Xs,.35+Ne+U,wo,We,Hn,Gn,0,Pn-Math.PI/2,-gs,Xi]:[Xs,.35+Ne+U,wo,Gn,Hn,We,0,Pn,0,Xi])},{coral:Z,sun:st,ivory:ut,ink:Mt,wood:bt,plank:Zt,leaf2:Lt}=x;P(me.obras,-.04,.1,.03,.82,.03,.44,"#d3b27c");for(let[At,St]of[[-.1,-.5],[.2,-.5],[-.1,-.26],[.2,-.26]])P(me.obras,At,St,.4,.04,.8,.04,bt);for(let At of[.3,.6,.8])P(me.obras,.05,-.38,At,.38,.03,.3,Zt);for(let[At,St]of[[-.22,.09],[-.1,.09],[-.16,.15]])P(me.obras,At,.1,St,.1,.06,.34,Zt);for(let At of[-1,1])for(let St=0;St<3;St++)P(me.obras,-.3+At*(.1+St*.1),.56,.16,.1,.06,.03,St%2?ut:Z);P(me.obras,-.58,-.3,.5,.05,1,.05,st),P(me.obras,-.36,-.3,.96,.56,.05,.05,st),P(me.obras,-.16,-.3,.76,.01,.36,.01,Mt),P(me.obras,-.16,-.3,.57,.06,.05,.05,Z),P(me.pronta,.08,-.38,.4,.2,.8,.2,Z),P(me.pronta,.08,-.38,.82,.32,.04,.3,ut),P(me.pronta,.08,-.38,1.02,.36,.03,.34,st);for(let At of[-1,1])P(me.pronta,.08+At*.15,-.38,.92,.02,.2,.02,ut);P(me.pronta,-.08,-.02,.46,.13,.03,.86,st,.68),P(me.pronta,.2,-.04,.42,.13,.03,.76,ut,.78);for(let At=0;At<5;At++)P(me.pronta,.3,-.43+At*0,.12+At*.14,.12,.03,.1,bt);for(let At of[-.42,-.24])P(me.pronta,At,.46,.05,.13,.03,.07,Z);P(me.pronta,.3,.46,.05,.13,.03,.07,st);for(let[At,St,be,Ne]of[[-.56,.2,Z,0],[.45,.22,Lt,0],[-.3,.05,Mt,1],[.05,.28,st,1]])Ne||P(me.pronta,At,St,.09,.05,.14,.05,be),P(me.pronta,At,St,Ne?.09:.2,.06,.06,.06,Ne?be:"#ffe2c8");P(me.water,-.04,.1,.05,.8,.02,.42,"#4f9fd0");for(let[At,St,be]of[[-.56,-.12,Z],[-.56,.42,st]])P(me.pronta,At,St,.17,.02,.34,.02,ut),P(me.cones,At,St,.38,.34,.12,.34,be);me.flag=[...l.at(.08,-.38),ti[0]+1.02]}ue(-1);let mr=Object.values(Wt),S=[],W=[],K=[],j=[],X=[],dt=[],Et=[],zt=[[x.leaf2,x.leaf],[x.leaf,x.leaf2],[x.leaf2,x.leaf],[x.leaf,x.earth]],Pt=[x.sun,"#f0a32e","#d98a2b"],te=[x.leaf2,x.high,"#5c9a52"],Qt=[[.12,.86],[.4,.9],[.1,.45],[.72,.86]];for(let l of ct){let{x:g,z:y,height:T,d:L,front:P,land:Z}=l;if(T<.2||jt(g,y)<1.3||l.field||Math.hypot(g-ee,y-Jt)<1.6)continue;let st=sn(l.q,l.r),ut=sn(l.r+7,l.q-3),Mt=()=>Et.push([g+(ut-.5)*.4,T+.12,y+(st-.5)*.4,.8+.4*ut,.6,.8+.4*st,0,st*6,0,te[Math.floor(ut*2.999)],T]);if(L<1.35||mr.some(([We,Xi])=>Math.hypot(g-We,y-Xi)<1.15)||Ye.some(We=>{let Xi=g-We.x,gs=y-We.z,Xs=Math.hypot(Xi,gs);return Xs<1.25||Xs<2.7&&Xi*Fn[0]+gs*Fn[1]>0}))continue;if(P&&L<3.4){st<.12?dt.push([g+.1,T+.18,y,.9,.7,1.1,0,st*6,0]):st>.68&&Mt();continue}if(st>(P?.8:L<2.6?.5:.85)){ut<.3?dt.push([g+.1,T+.16,y,.8,.6,1,0,st*6,0]):ut>.55&&Mt();continue}let bt=(ut-.5)*.35,Zt=(sn(l.q*3,l.r*5)-.5)*.35,Lt=g+bt,At=y+Zt,St=.75+ut*.35,[be,Ne]=zt[Z],Gn=ut<Qt[Z][0],Hn=!Gn&&ut>Qt[Z][1];if(S.push([Lt,T+.4*St,At,1,.8*St,1,0,0,0,0,T]),Gn)W.push([Lt,T+1.05*St,At,St,St,St,0,st*6,0,be,T]),W.push([Lt,T+1.5*St,At,St*.64,St*.64,St*.64,0,st*6+.3,0,Ne,T]);else if(Hn){let We=Math.floor(st*2.999);j.push([Lt,T+1.1*St,At,St*.95,St*1.15,St*.95,0,st*6,0,Pt[We],T]),X.push([Lt-.2*St,T+.85*St,At+.12,St*.6,St*.62,St*.6,0,st*6,0,Pt[(We+1)%3],T])}else K.push([Lt,T+1.1*St,At,St,St*1.15,St,0,st*6,0,be,T]),ut>.5&&X.push([Lt+.22*St,T+.82*St,At+.1,St*.62,St*.66,St*.62,0,st*6,0,Ne,T])}for(let l of V.filter((g,y)=>y%24===0)){if(jt(l.x,l.z)<1.4)continue;let[g,y]=Fi(l.x,l.z),[T,L]=os(g+.2,y+.75),[P,Z]=os(g-.3,y-.6);dt.push([T,wt(T,L).height+.06,L,.28,.2,.3,0,l.x,0]),w(d,M.ivory,P,wt(P,Z).height+.04,Z,.06,.045,.06)}let $t=new fn(.07,.1,1,3,1,!0),le=new qr(.62,0),Ae=new Di(.6,1.4,6,1,!0),A=new Jn(.62,0),N=new Jn(.4,0),Y={vertexColors:!0};[$t,Ae,A,le].forEach(l=>ro(l)),ro(N,.6),M.rock.vertexColors=!0,et($("arvores-troncos",$t,m(x.wood,Y),S),.035),et($("arvores-copas-pinheiro",Ae,m("#ffffff",Y),W,!0),.035),et($("arvores-copas-redondas",A,m("#ffffff",Y),K,!0),.035),et($("arvores-copas-outono",ro(new Xr(.6,0)),m("#ffffff",Y),j,!0),.035),et($("arvores-copas-menores",le,m("#ffffff",Y),X,!0),.035),$("pedras",N,M.rock,dt),et($("arbustos",ro(new Jn(.3,0)),m("#ffffff",Y),Et,!0),.15);let J=[],xt=nt.getLength(),_t=ot[1]-ot[0];for(let[l,g,y]of[[ot[0]-.3*_t,ot[1]-.2*_t,1.25],[ot[4]-.6*_t,ot[4]+.5*_t,1.3],[ot[4]+.6*_t,ot[6]+.45*_t,1.65]]){let T=[],L=()=>{T.length>1&&T.forEach((P,Z)=>{if(J.push([P.x,P.h+.17,P.z,.06,.34,.06,0,0,0]),Z){let st=T[Z-1],ut=P.x-st.x,Mt=P.z-st.z;for(let bt of[.13,.27])J.push([(P.x+st.x)/2,P.h+bt,(P.z+st.z)/2,Math.hypot(ut,Mt),.035,.035,0,Math.atan2(-Mt,ut),0])}}),T=[]};for(let P=l;P<=g;P+=.55/xt){let Z=nt.getPointAt(P),st=nt.getTangentAt(P),ut=new z(-st.z,0,st.x).normalize();ut.x*Fn[0]+ut.z*Fn[1]<0&&ut.negate();let Mt=Z.x+ut.x*y,bt=Z.z+ut.z*y,Zt=wt(Mt,bt);if(Ye.some(Lt=>Math.hypot(Mt-Lt.x,bt-Lt.z)<1.35)||jt(Mt,bt)<1.2||Math.hypot(Mt-ee,bt-Jt)<1.5||Zt.height<.2){L();continue}T.length&&Math.abs(T.at(-1).h-Zt.height)>=.05&&L(),T.push({x:Mt,z:bt,h:Zt.height})}L()}$("cercas",_,M.wood,J);let Yt={mapear:{},analisar:{},priorizar:{},agir:{}},Xt=(l,g,y,T=null)=>{Yt[l][g]={mesh:T,count:y.length,at:y.map(([L,P])=>[+L.toFixed(2),+P.toFixed(2)])}},ye=l=>l.map(([g,,y])=>[g,y]),Me=[],_e=[x.ivory,x.sun,"#ffb4a8"];for(let l of ct)if(!(l.land!==0||l.u>ot[1]+.85*Kt||l.height<.2||l.d<1.1||l.d>3.8||Math.hypot(l.x-ee,l.z-Jt)<1.6||mr.some(([g,y])=>Math.hypot(l.x-g,l.z-y)<.9)||Ye.some(g=>Math.hypot(l.x-g.x,l.z-g.z)<.8)))for(let g=0;g<4;g++){let y=sn(l.q+g,l.r-g)*6.28,T=.12+.32*sn(l.r+g,l.q),L=l.x+Math.cos(y)*T,P=l.z+Math.sin(y)*T;sn(l.q*7+g,l.r)<.5&&Ee(L,P).i/600<=ot[1]+.85*Kt&&Me.push([L,l.height+.05,P,1,.7,1,0,y,0,_e[g%3],l.height])}for(let l=0;l<7;l++){let g=l/7*Math.PI*2+.4,y=ee+Math.cos(g)*.9,T=Jt+Math.sin(g)*.9;for(let L=0;L<3;L++)O(y+L*.06,Ft+.15+L%2*.04,T,.025,.3+L%2*.08,.025,M.high,0,(L-1)*.16)}p($("cenario-lago",ne,m("#ffffff"),gt,!0).material,"water"),et($("cenario-flores",new qr(.1,0),m("#ffffff"),Me,!0),.5,"bloom"),Xt("mapear","miniatura do parque",[Wt.mundo1]),Xt("mapear","canteiro do mundo 2",[Wt.mundo2]),Xt("mapear","moinho",[Wt.moinho]),Xt("mapear","flores",ye(Me),"cenario-flores"),Xt("mapear","lago",ye(gt),"cenario-lago");let Ue=[];for(let l=0;l<30;l++){let g=-3.4+l*.24,y=(sn(l,3)-.5)*.7;Math.abs(g)<1.3||sn(3,l)<.3||Ue.push([Gt.x+lt[0]*g+ft[0]*y,.15,Gt.z+lt[1]*g+ft[1]*y,.5+.4*sn(l,5),.3,.45+.4*sn(5,l),0,l,0,sn(l,l)<.5?x.rock:"#c8c2a4"])}$("cenario-seixos",N,m("#ffffff",{vertexColors:!0}),Ue,!0),Xt("analisar","ponte",[Wt.ponte]),Xt("analisar","canteiros",[Wt.mundo3,Wt.mundo4]),Xt("analisar","pedras do rio",ye(Ue),"cenario-seixos");let Xe=[];for(let l of Tt)for(let g=0;g<9;g++){let y=sn(l.q+g*3,l.r)*6.28,T=.08+.4*sn(l.r,l.q+g);Xe.push([l.x+Math.cos(y)*T,l.height+.14,l.z+Math.sin(y)*T,1,.8+.5*sn(g,l.q),1,0,y,0,g%3?x.sun:"#e8a93a",l.height])}et($("cenario-campo",new Di(.06,.3,4,1,!0),m("#ffffff"),Xe,!0),.25),Xt("priorizar","canteiro do mundo 5",[Wt.mundo5]),Xt("priorizar","cata-vento",[[pn[0],pn[2]]]),Xt("priorizar","campo amarelo",Tt.map(l=>[l.x,l.z]),"cenario-campo"),Xt("agir","canteiro do mundo 6",[Wt.mundo6]),Xt("agir","canteiro do mundo 7",[Wt.mundo7]),Xt("agir","lanternas",Ze.map(([l,,g])=>[l,g])),Xt("agir","colinas",ct.filter(l=>l.u>ot[4]+Kt+.01&&l.front&&l.d>=1.9&&l.d<5&&l.height>.44).map(l=>[l.x,l.z]));for(let l=0;l<40;l++){let g=-8+l*.4,y=l%2?-.72:.66,T=Gt.x+lt[0]*g+ft[0]*y,L=Gt.z+lt[1]*g+ft[1]*y;if(!(Math.abs(g)<1.4))for(let P=0;P<3;P++)O(T+P*.06,.28+P%2*.04,L,.025,.3+P%2*.08,.025,M.high,0,(P-1)*.16)}let xe=new qn;xe.name="corrente";let Ce=new qn;Ce.position.set(Gt.x,0,Gt.z),Ce.rotation.y=Math.atan2(lt[0],lt[1]),Ce.add(xe),o.add(Ce);let mn=new ke(_,M.ivory,20);for(let l=0;l<20;l++)b.position.set((l%3-1)*.16,.163,-8+l*.82),b.scale.set(.09,.009,.18),b.rotation.set(0,0,0),b.updateMatrix(),mn.setMatrixAt(l,b.matrix);xe.add(mn);let He,An=new Map,Us=new Map;for(let l of R.values()){if(l.g===_&&l.m===M.high){He=new ke(_.clone(),l.m,l.items.length),He.name="juncos",He.userData.items=l.items,l.items.forEach((y,T)=>He.setMatrixAt(T,q(y))),et(He,.2,"wind",y=>y[1]-y[4]/2),o.add(He);continue}An.has(l.g)||An.set(l.g,l.g.index?l.g.toNonIndexed():l.g);let g=An.get(l.g).attributes.position;Us.has(l.m)||Us.set(l.m,[]);for(let y of l.items)Us.get(l.m).push([g.clone().applyMatrix4(q(y)).array,y[9],y[10]])}for(let[l,g]of Us){let y=g.reduce((Mt,[bt])=>Mt+bt.length,0),T=new Float32Array(y),L=new Float32Array(y/3),P=new Float32Array(y),Z=0;for(let[Mt,bt,Zt]of g){T.set(Mt,Z);let Lt=1e9;for(let St=1;St<Mt.length;St+=3)Lt=Math.min(Lt,Mt[St]);let At=Math.max(Lt,Zt??-1e9);for(let St=0;St<Mt.length;St+=3)P.fill(.62+.38*Kn.smoothstep(Mt[St+1],At,At+.32),Z+St,Z+St+3),bt&&(L[(Z+St)/3]=bt(Mt[St],Mt[St+1],Mt[St+2]));Z+=Mt.length}let st=new nn,ut=p(l.clone(),"sway",.05);ut.vertexColors=!0,st.setAttribute("position",new en(T,3)),st.setAttribute("aSway",new en(L,1)),st.setAttribute("color",new en(P,3)),st.computeVertexNormals(),o.add(new ze(st,ut))}let as={obras:$("mini-obras",_,m("#ffffff"),me.obras,!0),pronta:$("mini-pronta",_,m("#ffffff"),me.pronta,!0),cones:$("mini-guarda-sois",zi,m("#ffffff"),me.cones,!0),water:$("mini-agua",_,p(new ri({color:"#ffffff",flatShading:!0}),"water"),me.water,!0)};for(let[l,g]of Object.entries(Rt)){let y=ct.reduce((T,L)=>Math.hypot(L.x-g.x,L.z-g.z)<Math.hypot(T.x-g.x,T.z-g.z)?L:T);g.y=l==="pipa"?Math.max(tt[2].y+jx,y.height):y.height}let yc=new fn(.38,.38,.03,8),Gd=new nr(.38,.045,5,24),Hd=new fn(.025,.025,.85,5),ru=new _n(.3,.19,8,1),Wd=new Yo(.08,8,6),Xd=m(x.sun,{emissive:x.sun,emissiveIntensity:.9}),ou={plaza:[yc,M.path],ring:[Gd,m("#ffffff")],pole:[Hd,M.wood],flag:[ru,p(new ri({color:"#ffffff",flatShading:!0,side:dn}),"flag")],lamp:[Wd,Xd]},Ns=new ke(ru,ou.flag[1],1);Ns.name="mini-bandeira",Ns.frustumCulled=!1,Ns.setMatrixAt(0,q([me.flag[0]+li[0]*.16,me.flag[2],me.flag[1]+li[1]*.16,.9,.9,.9,0,Pn,0])),Ns.setColorAt(0,new ie(x.leaf2)),o.add(Ns);let qd=new ie("#ffffff"),ki=Object.fromEntries(Object.entries(ou).map(([l,[g,y]])=>{let T=new ke(g,y,tt.length+(l==="lamp"?Ze.length:0));return T.name="paradas-"+l,T.frustumCulled=!1,(l==="ring"||l==="flag")&&tt.forEach((L,P)=>T.setColorAt(P,qd)),o.add(T),[l,T]})),sa=document.createElement("canvas");sa.width=128*tt.length,sa.height=128;let Mc=new Hr(sa);Mc.colorSpace=Rn;let lo=new nn,au=new Float32Array(tt.length*12),lu=[],cu=[];tt.forEach((l,g)=>{let y=g/tt.length,T=(g+1)/tt.length;lu.push(y,0,T,0,T,1,y,1),cu.push(g*4,g*4+1,g*4+2,g*4,g*4+2,g*4+3)}),lo.setAttribute("position",new en(au,3)),lo.setAttribute("uv",new Re(lu,2)),lo.setIndex(cu);let co=new ze(lo,new gn({map:Mc,transparent:!0,depthTest:!1,toneMapped:!1}));co.layers.set(1),a.layers.enable(1),co.name="paradas-selos",co.renderOrder=2,co.frustumCulled=!1,o.add(co);let hu=[],Sc=new Le().makeScale(0,0,0);for(let l of tt){let g=l.group=new qn;g.position.set(l.x,l.y-.35,l.z);let y=(Z,st,ut,Mt)=>{let bt=l[Z]=new qe;return bt.position.set(st,ut,Mt),g.add(bt),bt},T=l.side.x*.6,L=l.side.z*.6;y("plaza",0,.362,0),y("ring",0,.39,0).rotation.x=Math.PI/2,y("pole",T,.78,L),hu.push(y("flag",T+.16,1.12,L)),y("lamp",T,1.24,L).visible=!1,y("badge",T,1.5,L).scale.setScalar(.5),l.markers=[l.badge,l.pole,l.flag,l.lamp];let P=new ze(new fn(.5,.5,1.4,8),new gn({visible:!1}));P.userData.stop=l.index,P.position.set(l.x,l.y+.55,l.z),o.add(P),It.push(P)}for(let l of tt){let g=It[l.index].clone(),y=Dt[l.index][2]/.5;g.scale.set(y,1,y),g.position.set(we[l.index].x,ti[l.index]+.55,we[l.index].z),o.add(g),It.push(g)}let bc=[...S.map(l=>[l[0],l[10]+.014,l[2],1.15*l[4]/.8,1,l[4]/.8]),...Et.map(l=>[l[0],l[10]+.014,l[2],.6*l[3],1,.6*l[5]]),[Wt.moinho[0],tt[1].y+.014,Wt.moinho[1],1.7,1,1.45]],ho=new ke(new _n(1,1).rotateX(-Math.PI/2),new gn({map:su(),color:"#14301f",transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1}),bc.length);ho.name="sombras",bc.forEach((l,g)=>ho.setMatrixAt(g,q([...l.slice(0,3),l[3],1,l[5],0,0,0]))),ho.userData.items=bc,o.add(ho);let Tc=new gn({map:su(),color:"#ffc83d",transparent:!0,opacity:.32,blending:ar,depthWrite:!1,toneMapped:!1});Tc.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <project_vertex>","vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;")},Tc.customProgramCacheKey=()=>"brilho";let ls=new ke(new _n(1,1),Tc,2+tt.length);ls.name="brilhos",ls.frustumCulled=!1,o.add(ls),Ze.forEach((l,g)=>ls.setMatrixAt(g,q([...l,.34,.34,.34,0,0,0]))),tt.forEach((l,g)=>ls.setMatrixAt(2+g,Sc)),Ze.forEach((l,g)=>{b.position.set(...l),b.scale.set(1,1,1),b.rotation.set(0,0,0),b.updateMatrix(),ki.lamp.setMatrixAt(tt.length+g,b.matrix)});let ra=new nn;{let l=[.5,0,0],g=[-.5,0,0],y=[0,.14,0],T=[0,-.1,0],L=[0,0,.12],P=[0,0,-.12],Z=[l,y,L,l,P,y,l,L,T,l,T,P,g,L,y,g,y,P,g,T,L,g,P,T],st=Z.map(()=>0);for(let ut of[1,-1])Z.push([.18,.04,.06*ut],[-.22,.04,.06*ut],[-.04,.06,.62*ut]),st.push(0,0,1);ra.setAttribute("position",new Re(Z.flat(),3)),ra.setAttribute("aWing",new Re(st,1))}let wc=(l,g={})=>p(new ri({color:"#ffffff",flatShading:!0,...g}),l),Vi=16,Fs=hn.flat(),Ke=new ke(ra,wc("critter",{side:dn}),Vi+Fs.length),uo=new Float32Array(Ke.count*3);Ke.name="bichos",Ke.frustumCulled=!1,ra.setAttribute("aFly",new Si(uo,3)),o.add(Ke);let Ec=new Jn(.5,0),cs=new ke(Ec,wc("particle"),14),Yd=new Float32Array(14);cs.name="particulas",cs.frustumCulled=!1,Ec.setAttribute("aGlow",new Si(Yd,1)),o.add(cs);let Os=new ke(Ec,wc("cloud",{color:"#f7f9fb",transparent:!0,opacity:.62,depthWrite:!1}),6);Os.name="nuvens",Os.frustumCulled=!1,o.add(Os);for(let l=0;l<Ke.count;l++)Ke.setColorAt(l,new ie(l<5?[x.sun,"#ffb4a8",x.ivory,"#ffb4a8",x.sun][l]:l<8?l<7?x.ivory:"#e9dfc3":l===8?"#a9c2d6":l<Vi||l%2?x.ink:"#4a5a7d")),uo.set(l<5?[1,l*1.3,12]:l>8&&l<Vi?[1,l*.8,9]:[0,l*.9,10],l*3);for(let l=0;l<14;l++)cs.setColorAt(l,new ie(l<5?"#f4f1ea":l<11?[x.leaf2,x.sun,"#d98a2b"][l%3]:x.ivory));let oa=new qn,gr=new ze(new nn,m("#ffffff",{vertexColors:!0,side:dn}));oa.position.set(...pn),oa.rotation.y=Pn,gr.name="cata-vento",oa.add(gr),o.add(oa);{let l=[],g=[];[x.coral,x.sun,x.leaf2,x.ivory].forEach((y,T)=>{let L=T*Math.PI/2,P=new ie(y);l.push(0,0,0,Math.cos(L)*.17,Math.sin(L)*.17,0,Math.cos(L+1.2)*.09,Math.sin(L+1.2)*.09,.03);for(let Z=0;Z<3;Z++)g.push(P.r,P.g,P.b)}),gr.geometry.setAttribute("position",new Re(l,3)),gr.geometry.setAttribute("color",new Re(g,3))}let Zd=[0,1,2,3,4].map(l=>Me.length?Me[Math.floor((l+.5)/5*Me.length)]:[tt[0].x,tt[0].y,tt[0].z]),Gi=Fs.map(()=>null),Hi=0,fo=0,po=!1,aa=1,la=0,uu=0,_r=9,mo=9,hs=-1,fu=4,ca=!1,Wi=null,du=0,pu=5,Ac=0,ha=!1,ci=new qe;ci.rotation.order="YZX";let hi=(l,g,y,T,L,P,Z,st,ut=0,Mt=0,bt=0)=>{ci.position.set(y,T,L),ci.scale.set(P,Z,st),ci.rotation.set(bt,ut,Mt),ci.updateMatrix(),l.setMatrixAt(g,ci.matrix),Ac++},Cc=l=>l-Math.floor(l),ua=(l,g)=>Math.atan2(-g,l),go=(l,g)=>hi(l,g,0,-9,0,0,0,0);function Rc(l){let[g,y,T,L]=Fs[l];hi(Ke,Vi+l,g,y,T,.17,.17,.07,L),uo[(Vi+l)*3]=0,ha=!0}let Jd=2.6,mu=(l,g)=>{let[y,T,L]=Fs[l],P=Math.sin(Math.PI*g),Z=Math.sin(2*Math.PI*g)*(l%2?.9:-.9);return[y+Fn[0]*.35*P+li[0]*Z,T+.6*P,L+Fn[1]*.35*P+li[1]*Z]};function Ic(){Ac=0;let l=Hi;for(let g=0;g<5;g++){let[y,T,L]=Zd[g],P=l+g*7.3;hi(Ke,g,y+.38*Math.sin(P*.7+g)+.12*Math.sin(P*1.9+g*2),T+.3+.1*Math.sin(P*1.3+g),L+.3*Math.cos(P*.53+g*1.7),.07,.1,.22,ua(.27*Math.cos(P*.7+g)+.23*Math.cos(P*1.9+g*2),-.16*Math.sin(P*.53+g*1.7)))}for(let g=0;g<3;g++){let y=l*.2+g*2.1,T=.35+.15*g;hi(Ke,5+g,ee+Math.cos(y)*T,Ft+.04+.012*Math.sin(l*1.7+g),Jt+Math.sin(y)*T,.22,.26,.1,ua(-Math.sin(y),Math.cos(y)))}if(Wi!==null&&Wi>=.9&&(go(Ke,8),Wi=null,ca=!1),Wi!==null){let g=Wi/.9,y=du%2?-2.6:3.1,T=-.3+.6*g;hi(Ke,8,Gt.x+lt[0]*y+ft[0]*T,.12+.5*Math.sin(Math.PI*g),Gt.z+lt[1]*y+ft[1]*T,.2,.16,.12,ua(ft[0],ft[1]),Math.atan2(Math.PI*Math.cos(Math.PI*g),.6),Math.PI/2),ca=!0}if(hs>=0){let g=hs/8;if(g>=1){for(let y=0;y<7;y++)go(Ke,9+y);hs=-1}else for(let y=0;y<7;y++){let T=Math.ceil(y/2),L=-26+52*g-T*.45,[P,Z]=os(L,L*oo[1]/oo[0]-1.4+(y%2?1:-1)*T*.42);hi(Ke,9+y,P,4.3+.15*Math.sin(g*9+y),Z,.22,.2,.22,Pn)}}Gi.forEach((g,y)=>{if(g===null||g<0)return;let T=g/Jd;if(T>=1){Gi[y]=null,Rc(y);return}let L=mu(y,T),P=mu(y,Math.min(1,T+.02));hi(Ke,Vi+y,L[0],L[1],L[2],.17,.17,.17,T>.97?Fs[y][3]:ua(P[0]-L[0],P[2]-L[2]));let Z=T<.9?1:0;uo[(Vi+y)*3]!==Z&&(uo[(Vi+y)*3]=Z,ha=!0)});for(let g=0;g<5;g++){let y=Cc(l*.3+g/5),T=.2*Math.pow(Math.sin(Math.PI*y),.8)*(.6+y);hi(cs,g,Qn[0]+.85*y*.5+.05*Math.sin(y*7+g),Qn[1]+y*1.1,Qn[2]-.52*y*.5,T,T,T,g)}for(let g=0;g<9;g++){let y=-7+Cc(l*.05+g*.137)*14,T=(sn(g,9)-.5)*.75,L=Math.min(1,(7-Math.abs(y))/1.5),P=g<6;hi(cs,5+g,Gt.x+lt[0]*y+ft[0]*T,.145,Gt.z+lt[1]*y+ft[1]*T,(P?.13:.16)*L,(P?.03:.012)*L,(P?.08:.12)*L,l*.6+g)}for(let g=0;g<3;g++){let y=Cc((g*16+l*.18)/48)*48-24,[T,L]=os(y,y*oo[1]/oo[0]+[-1,-.4,-1.4][g]),P=7+.2*g+kd(Math.max(0,Math.min(6,y/iu+3))),Z=.8+.15*g;hi(Os,g*2,T,P,L,2*Z,.9*Z,1.4*Z,g),hi(Os,g*2+1,T+li[0]*.85*Z,P-.15,L+li[1]*.85*Z,1.2*Z,.6*Z,Z,g+1),f.uCloud.value[g].set(T,L,1.25*Z)}return Ke.instanceMatrix.needsUpdate=!0,cs.instanceMatrix.needsUpdate=!0,Os.instanceMatrix.needsUpdate=!0,ha&&(Ke.geometry.attributes.aFly.needsUpdate=!0,ha=!1),Ac}function $d(l){let g=1-Math.exp(-l/.45);fo+=((fi<10?1:0)-fo)*g,aa+=((po?.15:1)-aa)*g;let y=fo*(.25+.75*(aa-.15)/.85);Hi+=l*y,f.uT.value=Hi,f.uAmp.value=fo*aa,_r+=l,mo+=l,f.uGust.value.z=_r<4?1.6*Math.exp(-_r*1.3):0,f.uGust.value.w=_r,f.uBloom.value.z=mo<3.5?1:0,f.uBloom.value.w=mo,Gi.forEach((L,P)=>{L!==null&&(Gi[P]=L+l)}),hs>=0?hs+=l:fi<2&&!po&&Hi>=fu&&(hs=0,fu=Hi+26),Wi!==null?Wi+=l:fi<9&&Hi>=pu&&(Wi=0,du++,pu=Hi+6),la+=((fi<9?.7:0)-la)*(1-Math.exp(-l/.8)),Ln.rotation.x+=la*l,xe.position.z=Hi*.18%.82;let T=f.uGust.value;uu+=l*(f.uAmp.value*1.6+4*T.z*Math.exp(-((pn[0]-T.x)**2+(pn[2]-T.y)**2)/4)),gr.rotation.z=uu,kn.maxLife=Math.max(kn.maxLife,Ic())}function Kd(l,g){!Bn||!Vn()||(Gi[l*2]=0,Gi[l*2+1]=-.15,g===0&&(mo=0,f.uBloom.value.set(tt[g].x,tt[g].z,1,0)))}function jd(l){let g=tt[l];!g||!Bn||!Vn()||(_r=0,f.uGust.value.set(g.x,g.z,1.6,0),fi=0,yn())}let gu=1,_u=80,xu=[x.coral,x.sun,x.leaf2,"#ffb4a8",x.ivory],Pc=new _n(.18,.12),Lc=new gn({side:dn,toneMapped:!1,fog:!1}),ui=null;function Qd(l){_o();let g=tt[l];if(!g||!Bn||!Vn())return!1;let y=new ke(Pc,Lc,_u),T=new ie;y.name="confete",y.frustumCulled=!1;let L=Array.from({length:_u},(P,Z)=>{y.setColorAt(Z,T.set(xu[Z%xu.length]));let st=Z*2.39996,ut=.35+.65*sn(Z,1);return[Math.cos(st)*ut*3.6,1.6+1.6*sn(Z,2),Math.sin(st)*ut*3.6,sn(Z,3)*6,1.6+3.4*sn(Z,4)]});return ui={mesh:y,p:L,t:0,at:[g.x,g.y+2.3,g.z]},vu(0),o.add(y),yn(),!0}function vu(l){let g=ui;if(g.t+=l,g.t>=gu){_o();return}let y=g.t,[T,L,P]=g.at,Z=(1-Math.exp(-2.4*y))/2.4,st=Math.min(1,(gu-y)/.25);g.p.forEach(([ut,Mt,bt,Zt,Lt],At)=>{ci.position.set(T+ut*Z,L+Mt*Z-2.2*y*y,P+bt*Z),ci.scale.setScalar(st),ci.rotation.set(Zt+Lt*y,Zt*.7+Lt*.6*y,Lt*.3*y),ci.updateMatrix(),g.mesh.setMatrixAt(At,ci.matrix)}),g.mesh.instanceMatrix.needsUpdate=!0,kn.maxConfetti=Math.max(kn.maxConfetti,g.p.length)}function _o(){ui&&(o.remove(ui.mesh),ui.mesh.dispose(),ui=null)}function tp(){Gi.forEach((l,g)=>{l!==null&&(Gi[g]=null,Rc(g))}),_r=mo=9,f.uGust.value.z=0,f.uBloom.value.z=0,hs=-1,Wi=null,Ic(),go(Ke,8),ca=!1;for(let l=0;l<7;l++)go(Ke,9+l);Ke.instanceMatrix.needsUpdate=!0}Fs.forEach((l,g)=>Rc(g));for(let l=8;l<Vi;l++)go(Ke,l);Ic();let je={scene:new ns,cam:new tr,tex:null,on:!1,off:!1,u:{tMap:{value:null},uPx:{value:new he},uR:{value:0},uB:{value:.28}}};{let l=new ze(new _n(2,2),new Zn({uniforms:je.u,depthTest:!1,depthWrite:!1,blending:bi,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tMap;uniform vec2 uPx;uniform float uR,uB;varying vec2 vUv;void main(){float r=uR*smoothstep(uB,.5,abs(vUv.y-.52));if(r<.35)discard;vec4 c=vec4(0.);for(int i=0;i<12;i++){float a=float(i)*2.39996,s=sqrt((float(i)+.5)/12.);c+=texture2D(tMap,vUv+vec2(cos(a),sin(a))*s*r*uPx);}gl_FragColor=c/12.;}"}));l.frustumCulled=!1,je.scene.add(l)}let yu=new z,Mu=new z,Su=new z;function ep(){yu.setFromMatrixColumn(a.matrixWorld,0),Mu.setFromMatrixColumn(a.matrixWorld,1);for(let l of tt){l.group.updateMatrixWorld(!0);for(let T in ki)ki[T].setMatrixAt(l.index,l[T].visible?l[T].matrixWorld:Sc);let g=l.badge.getWorldPosition(Su),y=l.badge.visible?l.badge.scale.x/2:0;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([T,L],P)=>{for(let Z=0;Z<3;Z++)au[l.index*12+P*3+Z]=g.getComponent(Z)+(yu.getComponent(Z)*T+Mu.getComponent(Z)*L)*y})}for(let l of tt)ls.setMatrixAt(2+l.index,l.lamp.visible?q([...l.lamp.getWorldPosition(Su).toArray(),.36,.36,.36,0,0,0]):Sc);ls.instanceMatrix.needsUpdate=!0;for(let l in ki)ki[l].instanceMatrix.needsUpdate=!0;lo.attributes.position.needsUpdate=!0}function bu(l,{state:g,zone:y,glyph:T}){let L=sa.getContext("2d"),P=g==="bloqueada",Z=g==="foco";if(L.save(),L.translate(l.index*128,0),L.clearRect(0,0,128,128),L.beginPath(),L.arc(64,64,54,0,Math.PI*2),L.fillStyle=Z?x.sun:x.ivory,L.fill(),L.lineWidth=12,L.strokeStyle=eu[y]||x.ink,L.stroke(),L.fillStyle=x.ink,L.strokeStyle=x.ink,L.textAlign="center",L.textBaseline="middle",P)L.lineWidth=7,L.beginPath(),L.arc(64,54,14,Math.PI,0),L.stroke(),L.fillRect(44,56,40,30);else{let st=T||{guardado:"\u2713",rascunho:"\u270E",adiado:"\u21B7"}[g]||String(l.index+1);L.font=`900 ${st.length>1?40:58}px Nunito, sans-serif`,L.fillText(st,64,68)}L.restore(),Mc.needsUpdate=!0}let fa=new qe;fa.name="rumo",o.add(fa);let Ai=0,Dc=!1,da=!0,Bn=!0,Tu=!1,xo=0,pa=0,wu=0,fi=12,np=0,Bs=tt.map(()=>({state:"dispon\xEDvel",zone:"leaf"})),ce=null,ae=null,vn=null,ma=ot[0],Eu="",di=new z(tt[0].x,tt[0].y,tt[0].z),fe=new z(0,0,0),rn=Pn,zn=1,ga=!1,_a=!1,Qe=!0,us=!1,fs=!0,ds=0,xa=!1,Ci=!1,xr=!1,vo=null,on=null,ps=0,kn={maxCalls:0,maxTriangles:0,maxLife:0,maxConfetti:0,cpuMax:0,cpuSum:0,cpuN:0};function va(l){ma=l,di.copy(nt.getPointAt(l))}let zs=new z,yo=new z,ya=new z,Mo=9.55/Math.hypot(10,9.55),Uc=10/Math.hypot(10,9.55);function Ma(){zs.set(Math.cos(rn),0,-Math.sin(rn)),yo.set(Math.sin(rn),0,Math.cos(rn)),ya.set(-Math.sin(rn)*Mo,Uc,-Math.cos(rn)*Mo)}let pi=l=>l.x*zs.x+l.z*zs.z,ms=l=>l.x*ya.x+l.y*ya.y+l.z*ya.z,So=(l,g)=>new z().addScaledVector(zs,l).addScaledVector(yo,(.45*Uc-g)/Mo),ei=()=>{let l=i.getBoundingClientRect();return{width:Math.max(1,l.width),height:Math.max(1,l.height)}},Au=()=>{let l=ei();return l.width>=900?Kn.clamp(.33*l.height,200,280):130};function Ri(l,g){let y=Math.min(Au(),Math.max(46,g*zd))/g,T=pi(l),L=ms(l);return[T-y*60/130,T+y*60/130,L-y*4/130,L+y*125/130]}function vr(l){let g=tt[l],y=new z(g.x,g.y,g.z),T=new z(g.x+g.side.x*.6,g.y+1.15,g.z+g.side.z*.6);return[[pi(y)-.3,pi(y)+.3,ms(y)-.2,ms(y)+.2],[pi(T)-.3,pi(T)+.3,ms(T)-.3,ms(T)+.3]]}let Sa=["bino","bino","pipa","pipa",null,"teo","teo"];function ks(l,g,y,T=8){let L=ei(),P=L.width/L.height,Z=Math.min(y,Math.max(g,3)),st=null;for(let ut=0,Mt=0;ut<(g===y?1:30)&&!(st&&Math.abs(st.need-Mt)<1e-4);ut++){Mt=Z;let bt=L.height/(2*Z),Zt=l(bt),Lt=Math.min(...Zt.map(We=>We[0])),At=Math.max(...Zt.map(We=>We[1])),St=Math.min(...Zt.map(We=>We[2])),be=Math.max(...Zt.map(We=>We[3])),Ne=ds/bt,Gn=4/bt,Hn=Math.max((be-St)/2+Gn+Ne/2,((At-Lt)/2+T/bt)/P);Z=Math.min(y,Math.max(g,Hn)),st={cx:(Lt+At)/2,cy:(St+be)/2-Ne/2,half:Z,need:Hn}}return st}function ip(){let l=ei();return Ci=xa&&l.height<170,xr=!Ci&&l.width>=900,Ci?{lo:l.height/168,hi:l.height/60}:xr?{lo:l.height/(2*Kn.clamp(.3*l.height,80,240)),hi:9}:l.width<600&&l.height>=170?{lo:l.height/116,hi:l.height>=200?l.height/91:9}:{lo:Math.max(1.6,l.height*zd/260),hi:9}}let ba=l=>new z(tt[l].x,tt[l].y,tt[l].z);function Cu(l,g,y){if(!y.length)return l;let T=ei(),L=l.half,P=L*T.width/T.height,Z=T.height/(2*L),st=4/Z,ut=ds/Z,Mt=g(Z),bt=[...Mt,...y],Zt=(Gn,Hn)=>Math.min(...Gn.map(We=>We[Hn])),Lt=(Gn,Hn)=>Math.max(...Gn.map(We=>We[Hn])),At=Lt(Mt,1)+st-P,St=Zt(Mt,0)-st+P,be=Lt(Mt,3)+st-L,Ne=Zt(Mt,2)-st-ut+L;return At>St+1e-6||be>Ne+1e-6?l:{...l,cx:Kn.clamp((Zt(bt,0)+Lt(bt,1))/2,At,St),cy:Kn.clamp((Zt(bt,2)+Lt(bt,3))/2-ut/2,be,Ne)}}function bo(l,g,y){let T=Ci?null:Sa[l],L=[Ri(ba(l),g),...vr(l)];if(T&&L.push(Ri(Rt[T],g)),y)for(let P of[l-1,l+1])tt[P]&&L.push(vr(P)[0]);return!y&&!Ci&&tt[l+1]&&ei().width>=900&&L.push(vr(l+1)[0]),L}let Ru=(l,g)=>[Ri(ba(l),g),...vr(l),...tt[l+1]?[vr(l+1)[0]]:[],...Rt[vo]?[Ri(Rt[vo],g)]:[]];function Vs(l){Ma();let{lo:g,hi:y}=ip(),T=ei();if(xr){let oe=Cu(ks(Ve=>Ru(l,Ve),g,y),Ve=>Ru(l,Ve),Nc(l));return{center:So(oe.cx,oe.cy),half:oe.half}}let L=T.width>=600&&!Ci?g*T.width/T.height:0,P=g,Z=oe=>Object.entries(Rt).filter(([Ve,qi])=>Ve!==Sa[oe]&&Math.abs(pi(qi)-pi(ba(oe)))<L).map(([,Ve])=>Ve);for(let oe=0;oe<7;oe++)P=Math.max(P,ks(Ve=>[...bo(oe,Ve,!1),...Z(oe).map(qi=>Ri(qi,Ve))],g,y).half);let st=ks(oe=>bo(l,oe,!0),P,P),ut=st.need<=P*1.001,Mt=oe=>bo(l,oe,ut),bt=ut?st:ks(Mt,P,P),Zt=ei(),Lt=P*Zt.width/Zt.height,At=Object.entries(Rt).filter(([oe,Ve])=>!Ci&&oe!==Sa[l]&&Math.abs(pi(Ve)-bt.cx)<Lt).map(([,oe])=>oe);if(At.length){let oe=qi=>[...bo(l,qi,ut),...At.map(Oc=>Ri(Oc,qi))],Ve=ks(oe,P,P,2);Ve.need<=P*1.001&&(bt=Ve,Mt=oe)}bt=Cu(bt,Mt,[...Nc(l),...ut&&l>0?Nc(l-1):[]]);let St=Zt.height/(2*P),be=4/St,Ne=bo(l,St,!1),Gn=Math.max(...Ne.map(oe=>oe[1]))+be-Lt,Hn=Math.min(...Ne.map(oe=>oe[0]))-be+Lt,We=bt.cy+P-be,Xi=bt.cy-P+ds/St+be,gs=Object.entries(Rt).filter(([oe])=>!Ci&&oe!==Sa[l]).map(([,oe])=>Ri(oe,St)).filter(([,,oe,Ve])=>Ve>bt.cy-P&&oe<bt.cy+P),Xs=oe=>gs.every(([Ve,qi,Oc,wp])=>qi<=oe-Lt||Ve>=oe+Lt||Ve>=oe-Lt+be&&qi<=oe+Lt-be&&Oc>=Xi&&wp<=We),wo=[bt.cx,...gs.flatMap(([oe,Ve])=>[oe-Lt,Ve+Lt,Ve+be-Lt,oe-be+Lt])].filter(oe=>oe>=Gn-1e-6&&oe<=Hn+1e-6&&Xs(oe)).sort((oe,Ve)=>Math.abs(oe-bt.cx)-Math.abs(Ve-bt.cx));return{center:So(wo.length?wo[0]:bt.cx,bt.cy),half:P}}let Nc=l=>ge["mundo"+(l+1)]?.length?[Iu(ge["mundo"+(l+1)])]:[],sp=null,rp=()=>sp??(sp=tt.map((l,g)=>(ge["mundo"+(g+1)]||[]).reduce((y,T)=>y.union(T),new Yn))),Ta=new z,Iu=l=>{let g=1e9,y=-1e9,T=1e9,L=-1e9;for(let P of l)for(let Z=0;Z<8;Z++){Ta.set(Z&1?P.max.x:P.min.x,Z&2?P.max.y:Math.max(.13,P.min.y),Z&4?P.max.z:P.min.z);let st=pi(Ta),ut=ms(Ta);g=Math.min(g,st),y=Math.max(y,st),T=Math.min(T,ut),L=Math.max(L,ut)}return[g,y,T,L]};function Pu(){Ma();let l=ba(Ai),g=ei(),y=g.width>=600,T=Z=>[Ri(ce?di:l,Z),...Object.values(Rt).map(st=>Ri(st,Z)),...tt.flatMap((st,ut)=>vr(ut))],L=ks(Z=>[...T(Z),...y?Object.values(ge).map(Iu):[]],1.6,30,y?20:6),P=ap(g.width/g.height);return L.half<=P?L:ks(T,1.6,Math.max(1.6,P),y?20:6)}let ni=2.6,Gs=6;function To(){let l=Pu(),g=Vs(Ai);Gs=l.half,ni=g.half,fs&&(Qe?fe.copy(So(l.cx,l.cy)):(vn=g.center,!ae&&!ce&&fe.copy(g.center)))}function wa(){if(tp(),_o(),ae&&(fe.copy(ae.to),ae=null),on){on=null,Qe=!1;let l=Vs(Ai);ni=l.half,vn=l.center,fe.copy(l.center)}if(ce){va(ce.to);let l=ce.index;ce=null,vn&&fe.copy(vn),an(),r({type:"arrive",index:l,walked:!1,moved:!0,stopped:!0})}}function Hs(){cancelAnimationFrame(xo),xo=0,pa=0}let Vn=()=>!_a&&!ga&&Dc&&da&&Bn&&!document.hidden,Lu=()=>ce||ae||on||ui||fi<12,Ea=(l,g)=>{let y=l.clone().project(a);return{x:(y.x+1)/2*g.width,y:(1-y.y)/2*g.height,z:y.z}};function Du(l=i.getBoundingClientRect()){return{width:l.width,height:l.height,unit:l.height/(a.top-a.bottom),figMax:Au(),short:Ci,close:xr&&(!Qe||!!ae),inset:ds,rumo:Ea(di,l),guides:Object.fromEntries(Object.entries(Rt).map(([g,y])=>[g,Ea(y,l)])),stops:tt.map(g=>Ea(new z(g.x,g.y+.01,g.z),l)),sites:rp().map(g=>{let y=1e9,T=-1e9,L=1e9,P=-1e9;for(let Z=0;Z<8;Z++){let st=Ea(Ta.set(Z&1?g.max.x:g.min.x,Z&2?g.max.y:g.min.y,Z&4?g.max.z:g.min.z),l);y=Math.min(y,st.x),T=Math.max(T,st.x),L=Math.min(L,st.y),P=Math.max(P,st.y)}return{x:y,y:L,w:T-y,h:P-L}})}}let op=(l,g)=>nt.getPointAt(g).project(a).x>=nt.getPointAt(l).project(a).x?1:-1;function yn(){!Tu&&!xo&&Vn()&&Lu()&&(xo=requestAnimationFrame(vp))}function ii(){n({overview:Qe,exploring:us,selected:Ai})}function Fc(l,g){let y=1e9,T=-1e9,L=1e9,P=-1e9;for(let Z of[-l*g,l*g])for(let st of[-l,l])for(let ut of[0,.4]){let Mt=-(st+Uc*(.45-ut))/Mo,bt=Z*zs.x+Mt*yo.x,Zt=Z*zs.z+Mt*yo.z,[Lt,At]=Fi(bt,Zt);y=Math.min(y,Lt),T=Math.max(T,Lt),L=Math.min(L,At),P=Math.max(P,At)}return{s0:y,s1:T,t0:L,t1:P}}function ap(l){let g=30;for(let y=0;y<4;y++){let T=Fc(g,l),L=Math.min(1,(xn.s[1]-xn.s[0]-.1)/(T.s1-T.s0),(xn.t[1]-xn.t[0]-.1)/(T.t1-T.t0));if(L>=1)break;g*=L*.995}return g}function lp(l,g){for(let st=0;st<3;st++){let ut=Fc(l,g),Mt=Math.min(1,(xn.s[1]-xn.s[0])/(ut.s1-ut.s0),(xn.t[1]-xn.t[0])/(ut.t1-ut.t0));if(Mt>=1)break;l*=Mt*.995}let y=Fc(l,g),[T,L]=Fi(fe.x,fe.z);T=Kn.clamp(T,xn.s[0]+.05-y.s0,xn.s[1]-.05-y.s1),L=Kn.clamp(L,xn.t[0]+.05-y.t0,xn.t[1]-.05-y.t1);let[P,Z]=os(T,L);return fe.x=P,fe.z=Z,l}function cp(l,g,y){let[T,L,P,Z]=Ri(di,y),st=new z(fe.x,.45,fe.z),ut=pi(st),Mt=ms(st),bt=l*g-8/y,Zt=l-4/y,Lt=-l+(ds+4)/y,At=0,St=0;L-ut>bt?At=L-ut-bt:T-ut<-bt&&(At=T-ut+bt),Z-Mt>Zt?St=Z-Mt-Zt:P-Mt<Lt&&(St=P-Mt-Lt),(At||St)&&fe.addScaledVector(zs,At).addScaledVector(yo,-St/Mo)}function an(){if(ga||_a)return;let l=i.getBoundingClientRect(),g=Math.max(.2,l.width/Math.max(1,l.height));Ma();let y=Qe?Gs:ni,T=ae&&ae.h1!=null?ae.h0+(ae.h1-ae.h0)*(ae.e||0):y,L=Math.min(T/zn,Math.max(Gs,T)*1.25);ce&&vn&&!Qe&&cp(L,g,Math.max(1,l.height)/(2*L)),L=lp(L,g),ps=L,a.position.set(fe.x+Math.sin(rn)*10,10,fe.z+Math.cos(rn)*10),a.lookAt(fe.x,.45,fe.z),a.updateMatrixWorld(),a.left=-L*g,a.right=L*g,a.top=L,a.bottom=-L,a.updateProjectionMatrix(),fa.position.copy(di);let P=di.clone();P.y+=.6,P.project(a);for(let st of tt){let ut=st.badge.getWorldPosition(new z).project(a),Mt=Math.abs(ut.x-P.x)>.75/(L*g)||Math.abs(ut.y-P.y)>.95/L;st.markers.forEach(bt=>bt.visible=Mt&&(bt!==st.lamp||Bs[st.index].state==="guardado"))}if(ep(),h.info.reset(),je.on=l.width>=900&&!je.off,je.on){let st=c.width,ut=c.height;(je.tex?.image.width!==st||je.tex?.image.height!==ut)&&(je.tex?.dispose(),je.tex=new Ho(st,ut),je.u.tMap.value=je.tex),je.u.uPx.value.set(1/st,1/ut),je.u.uB.value=Qe?.36:.28,je.u.uR.value=Kn.clamp(l.height/160,1.2,3.4)*h.getPixelRatio()*(Qe?.6:1),a.layers.set(0),h.render(o,a),h.copyFramebufferToTexture(je.tex),h.autoClear=!1,h.render(je.scene,je.cam),a.layers.set(1),h.render(o,a),h.autoClear=!0,a.layers.enable(0)}else h.render(o,a);wu++,kn.maxCalls=Math.max(kn.maxCalls,h.info.render.calls),kn.maxTriangles=Math.max(kn.maxTriangles,h.info.render.triangles);let Z=[fe.x,fe.z,rn,L,l.width,l.height,di.x,di.y,di.z].join();Z!==Eu&&(Eu=Z,s(Du(l)))}function Uu(){if(_a)return;let l=i.getBoundingClientRect();h.setSize(Math.max(1,l.width),Math.max(1,l.height),!1),l.width>1&&l.height>1&&(To(),ae&&!Qe&&vn&&(ae.to=vn),ae&&ae.h1!=null&&(ae.h1=Qe?Gs:ni)),an()}let Ws=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,hp=Ws,Nu=l=>l<.5?2*l*l:1-2*(1-l)*(1-l);function Aa(l=!1){if(!on)return;on=null;let g=fe.clone(),y=ps;ae=null,Qe=!1;let T=Vs(Ai);ni=T.half,vn=T.center,fe.copy(T.center),l&&Bn&&Vn()&&y&&(ae={from:g,to:T.center,t:0,dur:.5,ease:hp,h0:y,h1:T.half},fe.copy(g),yn()),an(),ii()}let up=l=>1-Math.pow(1-l,3);function fp(l,{instant:g=!1,keep:y=null,passage:T=null}={}){if(!tt[l])return;on=null,vo=y,Ai=l,Qe=!1,fs=!0,fi=0,tt.forEach(Zt=>{Zt.ring.scale.setScalar(Zt.index===l?1.15:1)});let L=Vs(l),P=L.center,Z=ot[l],st=Math.abs(Z-ma)/qt,ut=st>1e-6;if(ni=L.half,vn=P,g||!Bn||!Vn()){ce=null,ae=null,va(Z),fe.copy(P),an(),ii(),r({type:"arrive",index:l,walked:!1,moved:ut});return}let Mt=!!ce,bt=Qx(st);ae=ut?{from:fe.clone(),to:P,t:Mt?0:-xc,dur:.29,ease:Nu}:{from:fe.clone(),to:P,t:0,dur:.35,ease:up},xr&&(ae=ut?{from:fe.clone(),to:P,t:Mt?0:-xc,dur:bt,ease:Nu,h0:ps||L.half,h1:L.half}:{from:fe.clone(),to:P,t:0,dur:.5,ease:Ws,h0:ps||L.half,h1:L.half}),ce=ut?{from:ma,to:Z,index:l,t:Mt?0:-xc,dur:bt,hops:Math.min(10,Math.max(1,Math.round(st*6*1.2))),dir:op(ma,Z),running:Mt,wake:T===null?null:{to:l,from:T}}:null,ce&&(r({type:"start",index:l,dir:ce.dir,antes:Mt?0:xc*1e3,run:ce.dur*1e3}),Mt&&r({type:"run",index:l,dir:ce.dir,run:ce.dur*1e3})),yn(),an(),ii(),ce||r({type:"arrive",index:l,walked:!1,moved:!1})}let dp=new ie,pp=new ie;function mp(l){as.obras.visible=!l,as.pronta.visible=as.cones.visible=as.water.visible=Ns.visible=l}let Fu=l=>{Ma();let{x:g,z:y}=we[l],T=new z(g,ti[l]+.3,y),L=ei(),P=Math.max(.95,1.15/(L.width/L.height));return{to:So(pi(T),ms(T)-ds*P/L.height),half:P}};function gp(l,g){if(!Bn||!Vn()||!we[l])return!1;ce=null,on=null;let{to:y,half:T}=Fu(l);return ae={from:fe.clone(),to:y,t:0,dur:g,ease:Ws,h0:ps||ni,h1:T},yn(),!0}function _p(l,g=0){let y=Fu(l);Qe=!1,zn=1,fs=!0;let T=Vs(Ai);ni=T.half,vn=T.center,fe.copy(T.center),ae=null,g&&Bn&&Vn()&&(fe.copy(y.to),ae={from:y.to,to:T.center,t:0,dur:g,ease:Ws,h0:y.half,h1:T.half},yn()),an(),ii()}function xp(l){Bs=l.map((g,y)=>({...Bs[y],...g})),mp(!!Bs[0].built);for(let g of tt){let y=Bs[g.index];bu(g,y),ki.ring.setColorAt(g.index,dp.set(y.state==="foco"?x.sun:eu[y.zone]||x.ivory)),ki.flag.setColorAt(g.index,pp.set(y.state==="guardado"?x.sun:eu[y.zone]||x.coral));let T=y.state==="bloqueada";g.flag.position.y=T?.62:1.12,g.flag.scale.x=T?.55:1}ki.ring.instanceColor.needsUpdate=!0,ki.flag.instanceColor.needsUpdate=!0,an()}function Ou(l){if(!Vn())return;let g=performance.now(),y=Math.min(l,12-fi);fi+=y,np+=y,y>0&&$d(y),ui&&vu(l);let T=!!ce;if(ce&&(ce.t=Math.min(ce.dur,ce.t+l),ce.t>0)){ce.running||(ce.running=!0,r({type:"run",index:ce.index,dir:ce.dir,run:ce.dur*1e3}));let P=ce.t/ce.dur,Z=P<.5?2*P*P:1-2*(1-P)*(1-P);if(va(ce.from+(ce.to-ce.from)*Z),di.y+=.12*Math.abs(Math.sin(Math.PI*ce.hops*P)),ce.wake&&(Kd(ce.wake.to,ce.wake.from),ce.wake=null),P>=1){va(ce.to);let st=ce.index;ce=null,r({type:"arrive",index:st,walked:!0,moved:!0})}}if(on&&(on.t+=l,on.t>=0&&!on.go)){on.go=!0,Qe=!1;let P=Vs(Ai);ni=P.half,vn=P.center,ae={from:fe.clone(),to:P.center,t:0,dur:on.dur,ease:Ws,h0:ps||Gs,h1:P.half},ii()}ae?(ae.t=Math.min(ae.dur,ae.t+l),ae.e=ae.ease(Math.max(0,ae.t)/ae.dur),fe.lerpVectors(ae.from,ae.to,ae.e),ae.t>=ae.dur&&(ae=null,on?.go&&(on=null))):T&&vn&&fe.copy(vn),an();let L=performance.now()-g;kn.cpuMax=Math.max(kn.cpuMax,L),kn.cpuSum+=L,kn.cpuN++}function vp(l){if(xo=0,!Vn())return;let g=pa?Math.min((l-pa)/1e3,.05):0;pa=l,Ou(g),Lu()||ii(),yn()}function Bu(l){let g=new Set,y=new Set;l.traverse(T=>{if(T.isMesh||T.isSprite){T.geometry&&g.add(T.geometry);for(let L of Array.isArray(T.material)?T.material:[T.material])y.add(L)}}),g.forEach(T=>T.dispose()),y.forEach(T=>{T.map?.dispose(),T.dispose()})}function zu(l,g){let y=(a.top-a.bottom)/Math.max(1,c.clientHeight);on=null,ae=null,vn=null,fs=!1,fe.x-=l*y*Math.cos(rn)-g*y*Math.sin(rn),fe.z+=l*y*Math.sin(rn)+g*y*Math.cos(rn),an(),ii()}function yp(l,{animate:g=!1}={}){let y=fe.clone(),T=ps;if(on=null,ae=null,["left","right","up","down"].includes(l)&&zu(l==="left"?70:l==="right"?-70:0,l==="up"?70:l==="down"?-70:0),l==="in"&&(zn=Math.min(1.6,zn+.15)),l==="out"&&(zn=Math.max(.7,zn-.15)),l==="rotate"&&(rn=Math.min(1.15,rn+.18),fs=!1),l==="rotate-back"&&(rn=Math.max(-.3,rn-.18),fs=!1),l==="center"&&(Qe=!0,rn=Pn,zn=1,fs=!0,vn=null,To()),l==="focus"){Qe=!1,zn=1,fs=!0;let L=Vs(Ai);ni=L.half,fe.copy(L.center),vn=L.center}g&&(l==="center"||l==="focus")&&ei().width>=900&&Bn&&Vn()&&T&&(ae={from:y,to:fe.clone(),t:0,dur:.6,ease:Ws,h0:T,h1:Qe?Gs:ni},fe.copy(y),yn()),an(),ii()}let mi=new Map,ku=new or,yr=0,Vu=l=>{let g=c.getBoundingClientRect();return ku.setFromCamera(new he((l.clientX-g.left)/g.width*2-1,-(l.clientY-g.top)/g.height*2+1),a),ku.intersectObjects(It)[0]?.object.userData.stop};function Mp(l){if(!(l.pointerType==="mouse"&&l.button!==0)&&(l.pointerType!=="mouse"&&l.preventDefault(),mi.set(l.pointerId,{x:l.clientX,y:l.clientY,startX:l.clientX,startY:l.clientY,dragged:!1}),c.setPointerCapture(l.pointerId),mi.size>1)){mi.forEach(y=>y.dragged=!0);let g=[...mi.values()];yr=Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y)}}function Sp(l){let g=mi.get(l.pointerId);if(!g){l.pointerType==="mouse"&&(c.style.cursor=Vu(l)===void 0?"grab":"pointer");return}let y=l.clientX-g.x,T=l.clientY-g.y;if(g.x=l.clientX,g.y=l.clientY,mi.size===2&&us){let L=[...mi.values()],P=Math.hypot(L[0].x-L[1].x,L[0].y-L[1].y);yr>0&&(zn=Kn.clamp(zn*P/yr,.7,1.6)),yr=P,an(),ii();return}Math.hypot(g.x-g.startX,g.y-g.startY)>6&&(g.dragged=!0),g.dragged&&zu(y,us||l.pointerType==="mouse"?T:0)}function bp(l){let g=mi.get(l.pointerId);if(mi.delete(l.pointerId),yr=0,!g||g.dragged)return;let y=Vu(l);y!==void 0?t(y):Aa(!0)}function Gu(l){us=!!l,mi.clear(),yr=0,i.dataset.exploring=String(us),i.style.touchAction=us?"none":"pan-y",ii()}function Tp(l){us&&(l.preventDefault(),zn=Kn.clamp(zn*Math.exp(-l.deltaY*.0015),.7,1.6),an(),ii())}c.addEventListener("pointerdown",Mp),c.addEventListener("pointermove",Sp),c.addEventListener("pointerup",bp),c.addEventListener("pointercancel",l=>mi.delete(l.pointerId)),c.addEventListener("wheel",Tp,{passive:!1}),c.addEventListener("webglcontextlost",l=>{l.preventDefault(),ga=!0,Hs(),e("A visualiza\xE7\xE3o 3D foi interrompida. Continue pela lista de paradas.")});let Hu=new ResizeObserver(Uu);Hu.observe(i);let Wu=new IntersectionObserver(l=>{da=l[0].isIntersecting,da?yn():(Hs(),wa())});Wu.observe(i);let Xu=()=>{document.hidden?(Hs(),wa()):yn()};document.addEventListener("visibilitychange",Xu),tt.forEach(l=>bu(l,Bs[l.index])),Uu();{let l=new ns,g=new ke(Pc,Lc,1);g.setColorAt(0,new ie),l.add(g),h.compile(l,a),g.dispose()}return{select:fp,paintStops:xp,advance:Ou,render:an,anchors:Du,camera:yp,setExplore:Gu,setInsets({bottom:l=0}={}){Math.abs(l-ds)<1||(ds=l,To(),an())},setCompact(l){xa!==!!l&&(xa=!!l,To(),an())},setActive(l){Dc=l,l?yn():(Hs(),Gu(!1),wa(),Aa())},intro({hold:l=1.6,dur:g=1.3}={}){if(ei().width<900||!Bn||!Vn())return!1;let y=Pu();return Qe=!0,Gs=y.half,fe.copy(So(y.cx,y.cy)),on={t:-l,dur:g,go:!1},an(),ii(),yn(),!0},skipIntro:()=>Aa(!0),dive:gp,emerge:_p,confetti:Qd,endConfetti(){ui&&(_o(),an())},gust:jd,setCalm(l){po!==!!l&&(po=!!l,fi<12&&yn())},setKeep(l=null){if(vo===l)return;let g=fe.clone(),y=ps;vo=l,To(),ei().width>=900&&Bn&&Vn()&&!Qe&&y&&!ce&&(ae={from:g,to:fe.clone(),t:0,dur:.3,ease:Ws,h0:y,h1:ni},fe.copy(g),yn()),an()},setMotion(l){Bn=l,l?yn():(Hs(),wa(),Aa(),an())},setManual(l){Tu=l,Hs(),l||yn()},state:()=>({ready:!0,confetti:ui?ui.p.length:0,compact:xa,short:Ci,close:xr,intro:!!on,selected:Ai,piece:di.toArray(),stopPositions:tt.map(l=>[l.x,l.z]),stopHeights:tt.map(l=>l.y),states:Bs.map(l=>l.state),hop:!!ce,cam:!!ae,frames:wu,active:Dc,visible:da,motion:Bn,lost:ga,tiles:ct.length,heights:[...new Set(ct.map(l=>l.height))],zoom:zn,angle:rn,center:fe.toArray(),overview:Qe,exploring:us,ambient:fi,tilt:je.on,metrics:{...kn},life:{t:Hi,live:fo,amp:f.uAmp.value,calm:po,gust:f.uGust.value.z,bloom:f.uBloom.value.z,birdsAway:Gi.filter(l=>l!==null).length,flock:hs>=0,fish:ca,wheel:la},triangles:h.info.render.triangles,calls:h.info.render.calls}),raw:()=>({renderer:h,scene:o,camera:a,piece:fa,stops:tt,targets:It,curve:nt,trail:V,wheel:Ln,stream:xe,flags:hu,guides:Rt,landmarks:Wt,markBox:ge,millBox:Oi,scenery:Yt,tilt:je,life:{uniforms:f,critters:Ke,puffs:cs,clouds:Os,blades:gr,perches:Fs,lanterns:Ze,reeds:He,blobs:ho,glow:ls},mini:{...as,flag:Ns},siteAt:we,siteY:ti,bridge:Gt,field:xn,toTrail:Fi}),dispose(){_a=!0,Hs(),_o(),Pc.dispose(),Lc.dispose(),Hu.disconnect(),Wu.disconnect(),document.removeEventListener("visibilitychange",Xu),Bu(o),Bu(je.scene),je.tex?.dispose(),h.dispose(),c.remove()}}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
