(()=>{var ud=0,gh=1,dd=2;var _h=1,fd=2,ci=3,Ci=0,_n=1,cn=2,Jn=0,As=1,Da=2,xh=3,vh=4,pd=5,Ki=100,md=101,gd=102,_d=103,xd=104,vd=200,yd=201,Md=202,Sd=203,Go=204,Ho=205,bd=206,Td=207,wd=208,Ed=209,Ad=210,Cd=211,Rd=212,Id=213,Pd=214,dl=0,fl=1,pl=2,Cs=3,ml=4,gl=5,_l=6,xl=7,vl=0,Ld=1,Dd=2,Li=0,Ud=1,Nd=2,Fd=3,Od=4,yl=5,Bd=6,zd=7;var yh=300,Ns=301,Fs=302,Ml=303,Sl=304,Ua=306,Wo=1e3,$i=1001,Xo=1002,an=1003,kd=1004;var Na=1005;var qn=1006,bl=1007;var rs=1008;var $n=1009,Mh=1010,Sh=1011,Cr=1012,Tl=1013,as=1014,Kn=1015,Rr=1016,wl=1017,El=1018,Ir=1020,bh=35902,Th=35899,wh=1021,Eh=1022,Dn=1023,_r=1026,Pr=1027,Al=1028,Cl=1029,Ah=1030,Rl=1031;var Il=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,Pl=35840,Ll=35841,Dl=35842,Ul=35843,Nl=36196,Fl=37492,Ol=37496,Bl=37808,zl=37809,kl=37810,Vl=37811,Gl=37812,Hl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,Jl=37819,$l=37820,Kl=37821,jl=36492,Ql=36494,tc=36495,ec=36283,nc=36284,ic=36285,sc=36286;var da=2300,qo=2301,Vo=2302,oh=2400,lh=2401,ch=2402;var Vd=3200,Gd=3201;var Ch=0,Hd=1,Di="",mn="srgb",Rs="srgb-linear",fa="linear",Me="srgb";var Es=7680;var hh=519,Wd=512,Xd=513,qd=514,Rh=515,Yd=516,Zd=517,Jd=518,$d=519,uh=35044;var Ih="300 es",Xn=2e3,pa=2001;var Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=1234567,ha=Math.PI/180,xr=180/Math.PI;function Lr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Ph(i,t){return(i%t+t)%t}function Mp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sp(i,t,e){return i!==t?(e-i)/(t-i):0}function ua(i,t,e){return(1-e)*i+e*t}function bp(i,t,e,n){return ua(i,t,1-Math.exp(-e*n))}function Tp(i,t=1){return t-Math.abs(Ph(i,t*2)-t)}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ap(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cp(i,t){return i+Math.random()*(t-i)}function Rp(i){return i*(.5-Math.random())}function Ip(i){i!==void 0&&(Vu=i);let t=Vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pp(i){return i*ha}function Lp(i){return i*xr}function Dp(i){return(i&i-1)===0&&i!==0}function Up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),p=a((t-n)/2),m=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*u,h*d,h*p,o*c);break;case"YZY":i.set(h*p,o*u,h*d,o*c);break;case"ZXZ":i.set(h*d,h*p,o*u,o*c);break;case"XZX":i.set(o*u,h*y,h*m,o*c);break;case"YXY":i.set(h*m,o*u,h*y,o*c);break;case"ZYZ":i.set(h*y,h*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jn={DEG2RAD:ha,RAD2DEG:xr,generateUUID:Lr,clamp:ae,euclideanModulo:Ph,mapLinear:Mp,inverseLerp:Sp,lerp:ua,damp:bp,pingpong:Tp,smoothstep:wp,smootherstep:Ep,randInt:Ap,randFloat:Cp,randFloatSpread:Rp,seededRandom:Ip,degToRad:Pp,radToDeg:Lp,isPowerOfTwo:Dp,ceilPowerOfTwo:Up,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Fp,normalize:pn,denormalize:mr},te=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ii=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],m=r[a+1],y=r[a+2],w=r[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=y,t[e+3]=w;return}if(d!==w||h!==p||c!==m||u!==y){let _=1-o,f=h*p+c*m+u*y+d*w,P=f>=0?1:-1,I=1-f*f;if(I>Number.EPSILON){let D=Math.sqrt(I),A=Math.atan2(D,f*P);_=Math.sin(_*A)/D,o=Math.sin(o*A)/D}let T=o*P;if(h=h*_+p*T,c=c*_+m*T,u=u*_+y*T,d=d*_+w*T,_===1-o){let D=1/Math.sqrt(h*h+c*c+u*u+d*d);h*=D,c*=D,u*=D,d*=D}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],m=r[a+2],y=r[a+3];return t[e]=o*y+u*d+h*m-c*p,t[e+1]=h*y+u*p+c*d-o*m,t[e+2]=c*y+u*m+o*p-h*d,t[e+3]=u*y-o*d-h*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=h(n/2),m=h(s/2),y=h(r/2);switch(a){case"XYZ":this._x=p*u*d+c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d-p*m*y;break;case"YXZ":this._x=p*u*d+c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d+p*m*y;break;case"ZXY":this._x=p*u*d-c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d-p*m*y;break;case"ZYX":this._x=p*u*d-c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d+p*m*y;break;case"YZX":this._x=p*u*d+c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d-p*m*y;break;case"XZY":this._x=p*u*d-c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d+p*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],c=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-h)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-h)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(h+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(h+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*h,this._y=s*u+a*h+r*o-n*c,this._z=r*u+a*c+n*h-s*o,this._w=a*u-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let h=1-o*o;if(h<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(h),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+h*c+a*d-o*u,this.y=n+h*u+o*c-r*d,this.z=s+h*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new B,Gu=new Ii,ee=class i{constructor(t,e,n,s,r,a,o,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c)}set(t,e,n,s,r,a,o,h,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],y=n[8],w=s[0],_=s[3],f=s[6],P=s[1],I=s[4],T=s[7],D=s[2],A=s[5],L=s[8];return r[0]=a*w+o*P+h*D,r[3]=a*_+o*I+h*A,r[6]=a*f+o*T+h*L,r[1]=c*w+u*P+d*D,r[4]=c*_+u*I+d*A,r[7]=c*f+u*T+d*L,r[2]=p*w+m*P+y*D,r[5]=p*_+m*I+y*A,r[8]=p*f+m*T+y*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*h+s*r*c-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*h-u*r,m=c*r-a*h,y=e*d+n*p+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=d*w,t[1]=(s*c-u*n)*w,t[2]=(o*n-s*a)*w,t[3]=p*w,t[4]=(u*e-s*h)*w,t[5]=(s*r-o*e)*w,t[6]=m*w,t[7]=(n*h-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+t,-s*c,s*h,-s*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new ee;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=ma("canvas");return i.style.display="block",i}var Hu={};function vr(i){i in Hu||(Hu[i]=!0,console.warn(i))}function jd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wu=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:t,whitePoint:n,transfer:fa,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var me=Op();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nr===void 0&&(nr=ma("canvas")),nr.width=t.width,nr.height=t.height;let s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ma("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bc(s[a].image)):r.push(Bc(s[a]))}else r=Bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zp=0,zc=new B,on=class i extends Ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=qn,a=rs,o=Dn,h=$n,c=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Lr(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=yh;on.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,c=h[0],u=h[4],d=h[8],p=h[1],m=h[5],y=h[9],w=h[2],_=h[6],f=h[10];if(Math.abs(u-p)<.01&&Math.abs(d-w)<.01&&Math.abs(y-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+w)<.1&&Math.abs(y+_)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,T=(m+1)/2,D=(f+1)/2,A=(u+p)/4,L=(d+w)/4,z=(y+_)/4;return I>T&&I>D?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=A/n,r=L/n):T>D?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=z/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=z/r),this.set(n,s,r,e),this}let P=Math.sqrt((_-y)*(_-y)+(d-w)*(d-w)+(p-u)*(p-u));return Math.abs(P)<.001&&(P=1),this.x=(_-y)/P,this.y=(d-w)/P,this.z=(p-u)/P,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends Ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new on(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ga=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),So.subVectors(this.max,sa),ir.subVectors(t.a,sa),sr.subVectors(t.b,sa),rr.subVectors(t.c,sa),Hi.subVectors(sr,ir),Wi.subVectors(rr,sr),Ss.subVectors(ir,rr);let e=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-Ss.z,Ss.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,Ss.z,0,-Ss.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-Ss.y,Ss.x,0];return!kc(e,ir,sr,rr,So)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,ir,sr,rr,So))?!1:(bo.crossVectors(Hi,Wi),e=[bo.x,bo.y,bo.z],kc(e,ir,sr,rr,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new B,new B,new B,new B,new B,new B,new B,new B],Gn=new B,Mo=new li,ir=new B,sr=new B,rr=new B,Hi=new B,Wi=new B,Ss=new B,sa=new B,So=new B,bo=new B,bs=new B;function kc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),h=t.dot(bs),c=e.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var kp=new li,ra=new B,Vc=new B,ji=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);let e=ra.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ra,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(Vc)),this.expandByPoint(ra.copy(t.center).sub(Vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bi=new B,Gc=new B,To=new B,Xi=new B,Hc=new B,wo=new B,Wc=new B,_a=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Gc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(To),o=Xi.dot(this.direction),h=-Xi.dot(To),c=Xi.lengthSq(),u=Math.abs(1-a*a),d,p,m,y;if(u>0)if(d=a*h-o,p=a*o-h,y=r*u,d>=0)if(p>=-y)if(p<=y){let w=1/u;d*=w,p*=w,m=d*(d+a*p+2*o)+p*(a*d+p+2*h)+c}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*h)+c;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*h)+c;else p<=-y?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-h),r),m=-d*d+p*(p+2*h)+c):p<=y?(d=0,p=Math.min(Math.max(-r,-h),r),m=p*(p+2*h)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-h),r),m=-d*d+p*(p+2*h)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gc).addScaledVector(To,p),m}intersectSphere(t,e){bi.subVectors(t.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,h=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,h=(t.min.z-p.z)*d),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){Hc.subVectors(e,t),wo.subVectors(n,t),Wc.crossVectors(Hc,wo);let a=this.direction.dot(Wc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);let h=o*this.direction.dot(wo.crossVectors(Xi,wo));if(h<0)return null;let c=o*this.direction.dot(Hc.cross(Xi));if(c<0||h+c>a)return null;let u=-o*Xi.dot(Wc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,a,o,h,c,u,d,p,m,y,w,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c,u,d,p,m,y,w,_)}set(t,e,n,s,r,a,o,h,c,u,d,p,m,y,w,_){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=h,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=m,f[7]=y,f[11]=w,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*u,m=a*d,y=o*u,w=o*d;e[0]=h*u,e[4]=-h*d,e[8]=c,e[1]=m+y*c,e[5]=p-w*c,e[9]=-o*h,e[2]=w-p*c,e[6]=y+m*c,e[10]=a*h}else if(t.order==="YXZ"){let p=h*u,m=h*d,y=c*u,w=c*d;e[0]=p+w*o,e[4]=y*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-y,e[6]=w+p*o,e[10]=a*h}else if(t.order==="ZXY"){let p=h*u,m=h*d,y=c*u,w=c*d;e[0]=p-w*o,e[4]=-a*d,e[8]=y+m*o,e[1]=m+y*o,e[5]=a*u,e[9]=w-p*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let p=a*u,m=a*d,y=o*u,w=o*d;e[0]=h*u,e[4]=y*c-m,e[8]=p*c+w,e[1]=h*d,e[5]=w*c+p,e[9]=m*c-y,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let p=a*h,m=a*c,y=o*h,w=o*c;e[0]=h*u,e[4]=w-p*d,e[8]=y*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+y,e[10]=p-w*d}else if(t.order==="XZY"){let p=a*h,m=a*c,y=o*h,w=o*c;e[0]=h*u,e[4]=-d,e[8]=c*u,e[1]=p*d+w,e[5]=a*u,e[9]=m*d-y,e[2]=y*d-m,e[6]=o*u,e[10]=w*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Gp)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),qi.crossVectors(n,Tn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),qi.crossVectors(n,Tn)),qi.normalize(),Eo.crossVectors(Tn,qi),s[0]=qi.x,s[4]=Eo.x,s[8]=Tn.x,s[1]=qi.y,s[5]=Eo.y,s[9]=Tn.y,s[2]=qi.z,s[6]=Eo.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],y=n[2],w=n[6],_=n[10],f=n[14],P=n[3],I=n[7],T=n[11],D=n[15],A=s[0],L=s[4],z=s[8],E=s[12],b=s[1],F=s[5],G=s[9],q=s[13],Z=s[2],nt=s[6],Q=s[10],dt=s[14],K=s[3],pt=s[7],rt=s[11],At=s[15];return r[0]=a*A+o*b+h*Z+c*K,r[4]=a*L+o*F+h*nt+c*pt,r[8]=a*z+o*G+h*Q+c*rt,r[12]=a*E+o*q+h*dt+c*At,r[1]=u*A+d*b+p*Z+m*K,r[5]=u*L+d*F+p*nt+m*pt,r[9]=u*z+d*G+p*Q+m*rt,r[13]=u*E+d*q+p*dt+m*At,r[2]=y*A+w*b+_*Z+f*K,r[6]=y*L+w*F+_*nt+f*pt,r[10]=y*z+w*G+_*Q+f*rt,r[14]=y*E+w*q+_*dt+f*At,r[3]=P*A+I*b+T*Z+D*K,r[7]=P*L+I*F+T*nt+D*pt,r[11]=P*z+I*G+T*Q+D*rt,r[15]=P*E+I*q+T*dt+D*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],y=t[3],w=t[7],_=t[11],f=t[15];return y*(+r*h*d-s*c*d-r*o*p+n*c*p+s*o*m-n*h*m)+w*(+e*h*m-e*c*p+r*a*p-s*a*m+s*c*u-r*h*u)+_*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+f*(-s*o*u-e*h*d+e*o*p+s*a*d-n*a*p+n*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],y=t[12],w=t[13],_=t[14],f=t[15],P=d*_*c-w*p*c+w*h*m-o*_*m-d*h*f+o*p*f,I=y*p*c-u*_*c-y*h*m+a*_*m+u*h*f-a*p*f,T=u*w*c-y*d*c+y*o*m-a*w*m-u*o*f+a*d*f,D=y*d*h-u*w*h-y*o*p+a*w*p+u*o*_-a*d*_,A=e*P+n*I+s*T+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return t[0]=P*L,t[1]=(w*p*r-d*_*r-w*s*m+n*_*m+d*s*f-n*p*f)*L,t[2]=(o*_*r-w*h*r+w*s*c-n*_*c-o*s*f+n*h*f)*L,t[3]=(d*h*r-o*p*r-d*s*c+n*p*c+o*s*m-n*h*m)*L,t[4]=I*L,t[5]=(u*_*r-y*p*r+y*s*m-e*_*m-u*s*f+e*p*f)*L,t[6]=(y*h*r-a*_*r-y*s*c+e*_*c+a*s*f-e*h*f)*L,t[7]=(a*p*r-u*h*r+u*s*c-e*p*c-a*s*m+e*h*m)*L,t[8]=T*L,t[9]=(y*d*r-u*w*r-y*n*m+e*w*m+u*n*f-e*d*f)*L,t[10]=(a*w*r-y*o*r+y*n*c-e*w*c-a*n*f+e*o*f)*L,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*m-e*o*m)*L,t[12]=D*L,t[13]=(u*w*s-y*d*s+y*n*p-e*w*p-u*n*_+e*d*_)*L,t[14]=(y*o*s-a*w*s-y*n*h+e*w*h+a*n*_-e*o*_)*L,t[15]=(a*d*s-u*o*s+u*n*h-e*d*h-a*n*p+e*o*p)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,u*o+n,u*h-s*a,0,c*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,c=r+r,u=a+a,d=o+o,p=r*c,m=r*u,y=r*d,w=a*u,_=a*d,f=o*d,P=h*c,I=h*u,T=h*d,D=n.x,A=n.y,L=n.z;return s[0]=(1-(w+f))*D,s[1]=(m+T)*D,s[2]=(y-I)*D,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(p+f))*A,s[6]=(_+P)*A,s[7]=0,s[8]=(y+I)*L,s[9]=(_-P)*L,s[10]=(1-(p+w))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ar.set(s[0],s[1],s[2]).length(),a=ar.set(s[4],s[5],s[6]).length(),o=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);let c=1/r,u=1/a,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Xn,h=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),y,w;if(h)y=r/(a-r),w=a*r/(a-r);else if(o===Xn)y=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===pa)y=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn,h=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s),y,w;if(h)y=1/(a-r),w=a/(a-r);else if(o===Xn)y=-2/(a-r),w=-(a+r)/(a-r);else if(o===pa)y=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ar=new B,Hn=new Se,Vp=new B(0,0,0),Gp=new B(1,1,1),qi=new B,Eo=new B,Tn=new B,qu=new Se,Yu=new Ii,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,Zu=new B,or=new Ii,Ti=new Se,Ao=new B,aa=new B,Wp=new B,Xp=new Ii,Ju=new B(1,0,0),$u=new B(0,1,0),Ku=new B(0,0,1),ju={type:"added"},qp={type:"removed"},lr={type:"childadded",child:null},Xc={type:"childremoved",child:null},Ne=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Yn,n=new Ii,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ee}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis($u,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis($u,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(aa,Ao,this.up):Ti.lookAt(Ao,aa,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Ti),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),Xc.child=t,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let d=h[c];r(t.shapes,d)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new B(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new B,wi=new B,qc=new B,Ei=new B,cr=new B,hr=new B,Qu=new B,Yc=new B,Zc=new B,Jc=new B,$c=new we,Kc=new we,jc=new we,Ji=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),wi.subVectors(n,e),qc.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(wi),h=Wn.dot(qc),c=wi.dot(wi),u=wi.dot(qc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*h-o*u)*p,y=(a*u-o*h)*p;return r.set(1-m-y,y,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,Ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ei.x),h.addScaledVector(a,Ei.y),h.addScaledVector(o,Ei.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return $c.setScalar(0),Kc.setScalar(0),jc.setScalar(0),$c.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,n),jc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($c,r.x),a.addScaledVector(Kc,r.y),a.addScaledVector(jc,r.z),a}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),wi.subVectors(t,e),Wn.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Wn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),Yc.subVectors(t,n);let h=cr.dot(Yc),c=hr.dot(Yc);if(h<=0&&c<=0)return e.copy(n);Zc.subVectors(t,s);let u=cr.dot(Zc),d=hr.dot(Zc);if(u>=0&&d<=u)return e.copy(s);let p=h*d-u*c;if(p<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(cr,a);Jc.subVectors(t,r);let m=cr.dot(Jc),y=hr.dot(Jc);if(y>=0&&m<=y)return e.copy(r);let w=m*c-h*y;if(w<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(hr,o);let _=u*y-m*d;if(_<=0&&d-u>=0&&m-y>=0)return Qu.subVectors(r,s),o=(d-u)/(d-u+(m-y)),e.copy(s).addScaledVector(Qu,o);let f=1/(_+w+p);return a=w*f,o=p*f,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Ph(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qc(a,r,t+1/3),this.g=Qc(a,r,t),this.b=Qc(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return me.workingToColorSpace(rn.copy(this),t),Math.round(ae(rn.r*255,0,255))*65536+Math.round(ae(rn.g*255,0,255))*256+Math.round(ae(rn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,u=(o+a)/2;if(o===a)h=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=mn){me.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Co);let n=ua(Yi.h,Co.h,e),s=ua(Yi.s,Co.s,e),r=ua(Yi.l,Co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Yt;Yt.NAMES=Qd;var Yp=0,Qi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=As,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Zn=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new B,Ro=new te,Zp=0,Be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}};var xa=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var va=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jp=0,Pn=new Se,th=new Ne,ur=new B,wn=new li,oa=new li,Je=new B,ze=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?va:xa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(wn.min,oa.min),wn.expandByPoint(Je),Je.addVectors(wn.max,oa.max),wn.expandByPoint(Je)):(wn.expandByPoint(oa.min),wn.expandByPoint(oa.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),h&&(ur.fromBufferAttribute(t,c),Je.add(ur)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],h=[];for(let z=0;z<n.count;z++)o[z]=new B,h[z]=new B;let c=new B,u=new B,d=new B,p=new te,m=new te,y=new te,w=new B,_=new B;function f(z,E,b){c.fromBufferAttribute(n,z),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),p.fromBufferAttribute(r,z),m.fromBufferAttribute(r,E),y.fromBufferAttribute(r,b),u.sub(c),d.sub(c),m.sub(p),y.sub(p);let F=1/(m.x*y.y-y.x*m.y);isFinite(F)&&(w.copy(u).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(F),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(F),o[z].add(w),o[E].add(w),o[b].add(w),h[z].add(_),h[E].add(_),h[b].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let z=0,E=P.length;z<E;++z){let b=P[z],F=b.start,G=b.count;for(let q=F,Z=F+G;q<Z;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let I=new B,T=new B,D=new B,A=new B;function L(z){D.fromBufferAttribute(s,z),A.copy(D);let E=o[z];I.copy(E),I.sub(D.multiplyScalar(D.dot(E))).normalize(),T.crossVectors(A,E);let F=T.dot(h[z])<0?-1:1;a.setXYZW(z,I.x,I.y,I.z,F)}for(let z=0,E=P.length;z<E;++z){let b=P[z],F=b.start,G=b.count;for(let q=F,Z=F+G;q<Z;q+=3)L(t.getX(q+0)),L(t.getX(q+1)),L(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,a=new B,o=new B,h=new B,c=new B,u=new B,d=new B;if(t)for(let p=0,m=t.count;p<m;p+=3){let y=t.getX(p+0),w=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,_),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),c.fromBufferAttribute(n,_),o.add(u),h.add(u),c.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,h){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(h.length*u),m=0,y=0;for(let w=0,_=h.length;w<_;w++){o.isInterleavedBufferAttribute?m=h[w]*o.data.stride+o.offset:m=h[w]*u;for(let f=0;f<u;f++)p[y++]=c[m++]}return new Be(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=t(h,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],m=t(p,n);h.push(m)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let c=n[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},td=new Se,Ts=new _a,Io=new ji,ed=new B,Po=new B,Lo=new B,Do=new B,eh=new B,Uo=new B,nd=new B,No=new B,Ie=class extends Ne{constructor(t=new ze,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=o[h],d=r[h];u!==0&&(eh.fromBufferAttribute(d,t),a?Uo.addScaledVector(eh,u):Uo.addScaledVector(eh.sub(e),u))}e.add(Uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(Io.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Io,ed)===null||Ts.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,w=p.length;y<w;y++){let _=p[y],f=a[_.materialIndex],P=Math.max(_.start,m.start),I=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let T=P,D=I;T<D;T+=3){let A=o.getX(T),L=o.getX(T+1),z=o.getX(T+2);s=Fo(this,f,t,n,c,u,d,A,L,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let _=y,f=w;_<f;_+=3){let P=o.getX(_),I=o.getX(_+1),T=o.getX(_+2);s=Fo(this,a,t,n,c,u,d,P,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let y=0,w=p.length;y<w;y++){let _=p[y],f=a[_.materialIndex],P=Math.max(_.start,m.start),I=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let T=P,D=I;T<D;T+=3){let A=T,L=T+1,z=T+2;s=Fo(this,f,t,n,c,u,d,A,L,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),w=Math.min(h.count,m.start+m.count);for(let _=y,f=w;_<f;_+=3){let P=_,I=_+1,T=_+2;s=Fo(this,a,t,n,c,u,d,P,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function $p(i,t,e,n,s,r,a,o){let h;if(t.side===_n?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Ci,o),h===null)return null;No.copy(o),No.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:i}}function Fo(i,t,e,n,s,r,a,o,h,c){i.getVertexPosition(o,Po),i.getVertexPosition(h,Lo),i.getVertexPosition(c,Do);let u=$p(i,t,e,n,Po,Lo,Do,nd);if(u){let d=new B;Ji.getBarycoord(nd,Po,Lo,Do,d),s&&(u.uv=Ji.getInterpolatedAttribute(s,o,h,c,d,new te)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,o,h,c,d,new te)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,h,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:h,c,normal:new B,materialIndex:0};Ji.getNormal(Po,Lo,Do,p.normal),u.face=p,u.barycoord=d}return u}var ts=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],d=[],p=0,m=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function y(w,_,f,P,I,T,D,A,L,z,E){let b=T/L,F=D/z,G=T/2,q=D/2,Z=A/2,nt=L+1,Q=z+1,dt=0,K=0,pt=new B;for(let rt=0;rt<Q;rt++){let At=rt*F-q;for(let Ft=0;Ft<nt;Ft++){let le=Ft*b-G;pt[w]=le*P,pt[_]=At*I,pt[f]=Z,c.push(pt.x,pt.y,pt.z),pt[w]=0,pt[_]=0,pt[f]=A>0?1:-1,u.push(pt.x,pt.y,pt.z),d.push(Ft/L),d.push(1-rt/z),dt+=1}}for(let rt=0;rt<z;rt++)for(let At=0;At<L;At++){let Ft=p+At+nt*rt,le=p+At+nt*(rt+1),Wt=p+(At+1)+nt*(rt+1),fe=p+(At+1)+nt*rt;h.push(Ft,le,fe),h.push(le,Wt,fe),K+=6}o.addGroup(m,K,E),m+=K,p+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Kp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var tf={clone:Os,merge:hn},jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Is=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new B,id=new te,sd=new te,Mn=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},dr=-90,fr=1,$o=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new Mn(dr,fr,t,e);r.layers=this.layers,this.add(r);let a=new Mn(dr,fr,t,e);a.layers=this.layers,this.add(a);let o=new Mn(dr,fr,t,e);o.layers=this.layers,this.add(o);let h=new Mn(dr,fr,t,e);h.layers=this.layers,this.add(h);let c=new Mn(dr,fr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ya=class extends on{constructor(t=[],e=Ns,n,s,r,a,o,h,c,u){super(t,e,n,s,r,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ts(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Jn});r.uniforms.tEquirect.value=e;let a=new Ie(s,r),o=e.minFilter;return e.minFilter===rs&&(e.minFilter=qn),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},En=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let _=e.getJointPose(w,n),f=this._getHandJoint(c,w);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,y=.005;c.inputState.pinching&&p>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ps=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var jo=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,h,c=an,u=an,d,p){super(null,a,o,h,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new Se,rd=new Se,Oo=[],ad=new li,em=new Se,la=new Ie,ca=new ji,ln=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,em)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),ad.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(ad)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),ca.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),t.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),rd.multiplyMatrices(n,pr),la.matrixWorld=rd,la.raycast(t,Oo);for(let a=0,o=Oo.length;a<o;a++){let h=Oo[a];h.instanceId=r,h.object=this,e.push(h)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(s*this.count),s,this.count,Al,Kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;r[h]=o,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nh=new B,nm=new B,im=new ee,ai=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nh.subVectors(n,e).cross(nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||im.getNormalMatrix(t),s=this.coplanarPoint(nh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new ji,sm=new te(.5,.5),Bo=new B,br=class{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],c=r[3],u=r[4],d=r[5],p=r[6],m=r[7],y=r[8],w=r[9],_=r[10],f=r[11],P=r[12],I=r[13],T=r[14],D=r[15];if(s[0].setComponents(c-a,m-u,f-y,D-P).normalize(),s[1].setComponents(c+a,m+u,f+y,D+P).normalize(),s[2].setComponents(c+o,m+d,f+w,D+I).normalize(),s[3].setComponents(c-o,m-d,f-w,D-I).normalize(),n)s[4].setComponents(h,p,_,T).normalize(),s[5].setComponents(c-h,m-p,f-_,D-T).normalize();else if(s[4].setComponents(c-h,m-p,f-_,D-T).normalize(),e===Xn)s[5].setComponents(c+h,m+p,f+_,D+T).normalize();else if(e===pa)s[5].setComponents(h,p,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);let e=sm.distanceTo(t.center);return ws.radius=.7071067811865476+e,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ma=class extends on{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=an,this.minFilter=an,this.generateMipmaps=!1,this.needsUpdate=!0}};var Tr=class extends on{constructor(t,e,n,s,r,a,o,h,c){super(t,e,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sa=class extends on{constructor(t,e,n=as,s,r,a,o=an,h=an,c,u=_r,d=1){if(u!==_r&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ba=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ta=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],h=[],c=new B,u=new te;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,h.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gn=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],m=[],y=0,w=[],_=n/2,f=0;P(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(m,2));function P(){let T=new B,D=new B,A=0,L=(e-t)/n;for(let z=0;z<=r;z++){let E=[],b=z/r,F=b*(e-t)+t;for(let G=0;G<=s;G++){let q=G/s,Z=q*h+o,nt=Math.sin(Z),Q=Math.cos(Z);D.x=F*nt,D.y=-b*n+_,D.z=F*Q,d.push(D.x,D.y,D.z),T.set(nt,L,Q).normalize(),p.push(T.x,T.y,T.z),m.push(q,1-b),E.push(y++)}w.push(E)}for(let z=0;z<s;z++)for(let E=0;E<r;E++){let b=w[E][z],F=w[E+1][z],G=w[E+1][z+1],q=w[E][z+1];(t>0||E!==0)&&(u.push(b,F,q),A+=3),(e>0||E!==r-1)&&(u.push(F,G,q),A+=3)}c.addGroup(f,A,0),f+=A}function I(T){let D=y,A=new te,L=new B,z=0,E=T===!0?t:e,b=T===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,_*b,0),p.push(0,b,0),m.push(.5,.5),y++;let F=y;for(let G=0;G<=s;G++){let Z=G/s*h+o,nt=Math.cos(Z),Q=Math.sin(Z);L.x=E*Q,L.y=_*b,L.z=E*nt,d.push(L.x,L.y,L.z),p.push(0,b,0),A.x=nt*.5+.5,A.y=Q*.5*b+.5,m.push(A.x,A.y),y++}for(let G=0;G<s;G++){let q=D+G,Z=F+G;T===!0?u.push(Z,Z+1,q):u.push(Z+1,Z,q),z+=3}c.addGroup(f,z,T===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},es=class i extends gn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(P){let I=new B,T=new B,D=new B;for(let A=0;A<e.length;A+=3)m(e[A+0],I),m(e[A+1],T),m(e[A+2],D),h(I,T,D,P)}function h(P,I,T,D){let A=D+1,L=[];for(let z=0;z<=A;z++){L[z]=[];let E=P.clone().lerp(T,z/A),b=I.clone().lerp(T,z/A),F=A-z;for(let G=0;G<=F;G++)G===0&&z===A?L[z][G]=E:L[z][G]=E.clone().lerp(b,G/F)}for(let z=0;z<A;z++)for(let E=0;E<2*(A-z)-1;E++){let b=Math.floor(E/2);E%2===0?(p(L[z][b+1]),p(L[z+1][b]),p(L[z][b])):(p(L[z][b+1]),p(L[z+1][b+1]),p(L[z+1][b]))}}function c(P){let I=new B;for(let T=0;T<r.length;T+=3)I.x=r[T+0],I.y=r[T+1],I.z=r[T+2],I.normalize().multiplyScalar(P),r[T+0]=I.x,r[T+1]=I.y,r[T+2]=I.z}function u(){let P=new B;for(let I=0;I<r.length;I+=3){P.x=r[I+0],P.y=r[I+1],P.z=r[I+2];let T=_(P)/2/Math.PI+.5,D=f(P)/Math.PI+.5;a.push(T,1-D)}y(),d()}function d(){for(let P=0;P<a.length;P+=6){let I=a[P+0],T=a[P+2],D=a[P+4],A=Math.max(I,T,D),L=Math.min(I,T,D);A>.9&&L<.1&&(I<.2&&(a[P+0]+=1),T<.2&&(a[P+2]+=1),D<.2&&(a[P+4]+=1))}}function p(P){r.push(P.x,P.y,P.z)}function m(P,I){let T=P*3;I.x=t[T+0],I.y=t[T+1],I.z=t[T+2]}function y(){let P=new B,I=new B,T=new B,D=new B,A=new te,L=new te,z=new te;for(let E=0,b=0;E<r.length;E+=9,b+=6){P.set(r[E+0],r[E+1],r[E+2]),I.set(r[E+3],r[E+4],r[E+5]),T.set(r[E+6],r[E+7],r[E+8]),A.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),z.set(a[b+4],a[b+5]),D.copy(P).add(I).add(T).divideScalar(3);let F=_(D);w(A,b+0,P,F),w(L,b+2,I,F),w(z,b+4,T,F)}}function w(P,I,T,D){D<0&&P.x===1&&(a[I]=P.x-1),T.x===0&&T.z===0&&(a[I]=D/2/Math.PI+.5)}function _(P){return Math.atan2(P.z,-P.x)}function f(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Er=class i extends wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,h=r-1,c;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(a-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new te:new B);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,h=new Se;for(let m=0;m<=t;m++){let y=m/t;s[m]=this.getTangentAt(y,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(ae(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(h.makeRotationAxis(o,y))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ae(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let y=1;y<=t;y++)r[y].applyMatrix4(h.makeRotationAxis(s[y],m*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Uh(){let i=0,t=0,e=0,n=0;function s(r,a,o,h){i=r,t=o,e=-3*r+3*a-2*o-h,n=2*r-2*a+o+h}return{initCatmullRom:function(r,a,o,h,c){s(a,o,c*(o-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,o,h,c,u,d){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(h-a)/(u+d)+(h-o)/d;p*=u,m*=u,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var zo=new B,ih=new Uh,sh=new Uh,rh=new Uh,wa=class extends Qo{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(d),m),w=Math.pow(d.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(u),m);w<1e-4&&(w=1),y<1e-4&&(y=w),_<1e-4&&(_=w),ih.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,y,w,_),sh.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,y,w,_),rh.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,y,w,_)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),sh.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),rh.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(ih.calc(h),sh.calc(h),rh.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var ns=class i extends wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ar=class i extends wr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ln=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),c=o+1,u=h+1,d=t/o,p=e/h,m=[],y=[],w=[],_=[];for(let f=0;f<u;f++){let P=f*p-a;for(let I=0;I<c;I++){let T=I*d-r;y.push(T,-P,0),w.push(0,0,1),_.push(I/o),_.push(1-f/h)}}for(let f=0;f<h;f++)for(let P=0;P<o;P++){let I=P+c*f,T=P+c*(f+1),D=P+1+c*(f+1),A=P+1+c*f;m.push(I,T,A),m.push(T,D,A)}this.setIndex(m),this.setAttribute("position",new de(y,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ea=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,u=[],d=new B,p=new B,m=[],y=[],w=[],_=[];for(let f=0;f<=n;f++){let P=[],I=f/n,T=0;f===0&&a===0?T=.5/e:f===n&&h===Math.PI&&(T=-.5/e);for(let D=0;D<=e;D++){let A=D/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+I*o),d.y=t*Math.cos(a+I*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+I*o),y.push(d.x,d.y,d.z),p.copy(d).normalize(),w.push(p.x,p.y,p.z),_.push(A+T,1-I),P.push(c++)}u.push(P)}for(let f=0;f<n;f++)for(let P=0;P<e;P++){let I=u[f][P+1],T=u[f][P],D=u[f+1][P],A=u[f+1][P+1];(f!==0||a>0)&&m.push(I,T,A),(f!==n-1||h<Math.PI)&&m.push(T,D,A)}this.setIndex(m),this.setAttribute("position",new de(y,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Aa=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],h=[],c=[],u=new B,d=new B,p=new B;for(let m=0;m<=n;m++)for(let y=0;y<=s;y++){let w=y/s*r,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(w),d.y=(t+e*Math.cos(_))*Math.sin(w),d.z=e*Math.sin(_),o.push(d.x,d.y,d.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),c.push(y/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let y=1;y<=s;y++){let w=(s+1)*m+y-1,_=(s+1)*(m-1)+y-1,f=(s+1)*(m-1)+y,P=(s+1)*m+y;a.push(w,_,P),a.push(_,f,P)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ls=class extends Qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tl=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ko(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lh:r=t,o=2*e-n;break;case ch:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case lh:a=t,h=2*n-e;break;case ch:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,y=(n-e)/(s-e),w=y*y,_=w*y,f=-p*_+2*p*w-p*y,P=(1+p)*_+(-1.5-2*p)*w+(-.5+p)*y+1,I=(-1-m)*_+(1.5+m)*w+.5*y,T=m*_-m*w;for(let D=0;D!==o;++D)r[D]=f*a[u+D]+P*a[c+D]+I*a[h+D]+T*a[d+D];return r}},il=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[h+p]*u;return r}},sl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&rm(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)h=!0;else{let d=o*n,p=d-n,m=d+n;for(let y=0;y!==n;++y){let w=e[d+y];if(w!==e[p+y]||w!==e[m+y]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let d=o*n,p=a*n;for(let m=0;m!==n;++m)e[p+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=qo;var is=class extends Cn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=da;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="color";var al=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="number";var ol=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ii.slerpFlat(r,0,a,c-o,a,c,h);return r}},Ca=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Cn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=da;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],y=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ef=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ia=class extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ah=new Se,od=new B,ld=new B,dh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),ld.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ld),e.updateMatrixWorld(),ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Us=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fh=class extends dh{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ul=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Nh="\\[\\]\\.:\\/",am=new RegExp("["+Nh+"]","g"),Fh="[^"+Nh+"]",om="[^"+Nh.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",Fh),cm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],ph=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(am,"")}static parseTrackName(t){let e=dm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=ph;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var cd=new Se,La=class{constructor(t,e,n=0,s=1/0){this.ray=new _a(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(hd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mh(t[s],this,n,e);return n.sort(hd),n}};function hd(i,t){return i.distance-t.distance}function mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)mh(r[a],t,e,!0)}}function Oh(i,t,e,n){let s=pm(n);switch(e){case wh:return i*t;case Al:return i*t/s.components*s.byteLength;case Cl:return i*t/s.components*s.byteLength;case Ah:return i*t*2/s.components*s.byteLength;case Rl:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case Il:return i*t*4/s.components*s.byteLength;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Ul:return Math.max(i,16)*Math.max(t,8)/4;case Pl:case Dl:return Math.max(i,8)*Math.max(t,8)/2;case Nl:case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jl:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(i){switch(i){case $n:case Mh:return{byteLength:1,components:1};case Cr:case Sh:case Rr:return{byteLength:2,components:1};case wl:case El:return{byteLength:2,components:4};case as:case Tl:case Kn:return{byteLength:4,components:1};case bh:case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ef(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gm(i){let t=new WeakMap;function e(o,h){let c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,h,c){let u=h.array,d=h.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,y)=>m.start-y.start);let p=0;for(let m=1;m<d.length;m++){let y=d[p],w=d[m];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++p,d[p]=w)}d.length=p+1;for(let m=0,y=d.length;m<y;m++){let w=d[m];i.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`struct PhysicalMaterial {
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
}`,gg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,H0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:_m,alphahash_pars_fragment:xm,alphamap_fragment:vm,alphamap_pars_fragment:ym,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:Tm,batching_pars_vertex:wm,batching_vertex:Em,begin_vertex:Am,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Im,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Nm,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:km,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Km,envmap_pars_vertex:jm,envmap_physical_pars_fragment:cg,envmap_vertex:Qm,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:xg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:bg,map_pars_fragment:Tg,map_particle_fragment:wg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Ig,morphnormal_vertex:Pg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ug,normal_fragment_maps:Ng,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Hg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:y0,cube_frag:M0,depth_vert:S0,depth_frag:b0,distanceRGBA_vert:T0,distanceRGBA_frag:w0,equirect_vert:E0,equirect_frag:A0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:I0,meshbasic_frag:P0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:H0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},hi={basic:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:hn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:hn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:hn([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:hn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:hn([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:hn([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:hn([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:hn([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};hi.physical={uniforms:hn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var rc={r:0,b:0,g:0},Bs=new Yn,$0=new Se;function K0(i,t,e,n,s,r,a){let o=new Yt(0),h=r===!0?0:1,c,u,d=null,p=0,m=null;function y(I){let T=I.isScene===!0?I.background:null;return T&&T.isTexture&&(T=(I.backgroundBlurriness>0?e:t).get(T)),T}function w(I){let T=!1,D=y(I);D===null?f(o,h):D&&D.isColor&&(f(D,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(I,T){let D=y(T);D&&(D.isCubeTexture||D.mapping===Ua)?(u===void 0&&(u=new Ie(new ts(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Os(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bs.copy(T.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Bs)),u.material.toneMapped=me.getTransfer(D.colorSpace)!==Me,(d!==D||p!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,p=D.version,m=i.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Ie(new Ln(2,2),new An({name:"BackgroundMaterial",uniforms:Os(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=me.getTransfer(D.colorSpace)!==Me,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||p!==D.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=D,p=D.version,m=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function f(I,T){I.getRGB(rc,Dh(i)),n.buffers.color.setClear(rc.r,rc.g,rc.b,T,a)}function P(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(I,T=1){o.set(I),h=T,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,f(o,h)},render:w,addToRenderList:_,dispose:P}}function j0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(b,F,G,q,Z){let nt=!1,Q=d(q,G,F);r!==Q&&(r=Q,c(r.object)),nt=m(b,q,G,Z),nt&&y(b,q,G,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,T(b,F,G,q),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function h(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,F,G){let q=G.wireframe===!0,Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let nt=Z[F.id];nt===void 0&&(nt={},Z[F.id]=nt);let Q=nt[q];return Q===void 0&&(Q=p(h()),nt[q]=Q),Q}function p(b){let F=[],G=[],q=[];for(let Z=0;Z<e;Z++)F[Z]=0,G[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:q,object:b,attributes:{},index:null}}function m(b,F,G,q){let Z=r.attributes,nt=F.attributes,Q=0,dt=G.getAttributes();for(let K in dt)if(dt[K].location>=0){let rt=Z[K],At=nt[K];if(At===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(At=b.instanceColor)),rt===void 0||rt.attribute!==At||At&&rt.data!==At.data)return!0;Q++}return r.attributesNum!==Q||r.index!==q}function y(b,F,G,q){let Z={},nt=F.attributes,Q=0,dt=G.getAttributes();for(let K in dt)if(dt[K].location>=0){let rt=nt[K];rt===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));let At={};At.attribute=rt,rt&&rt.data&&(At.data=rt.data),Z[K]=At,Q++}r.attributes=Z,r.attributesNum=Q,r.index=q}function w(){let b=r.newAttributes;for(let F=0,G=b.length;F<G;F++)b[F]=0}function _(b){f(b,0)}function f(b,F){let G=r.newAttributes,q=r.enabledAttributes,Z=r.attributeDivisors;G[b]=1,q[b]===0&&(i.enableVertexAttribArray(b),q[b]=1),Z[b]!==F&&(i.vertexAttribDivisor(b,F),Z[b]=F)}function P(){let b=r.newAttributes,F=r.enabledAttributes;for(let G=0,q=F.length;G<q;G++)F[G]!==b[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function I(b,F,G,q,Z,nt,Q){Q===!0?i.vertexAttribIPointer(b,F,G,Z,nt):i.vertexAttribPointer(b,F,G,q,Z,nt)}function T(b,F,G,q){w();let Z=q.attributes,nt=G.getAttributes(),Q=F.defaultAttributeValues;for(let dt in nt){let K=nt[dt];if(K.location>=0){let pt=Z[dt];if(pt===void 0&&(dt==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),dt==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),pt!==void 0){let rt=pt.normalized,At=pt.itemSize,Ft=t.get(pt);if(Ft===void 0)continue;let le=Ft.buffer,Wt=Ft.type,fe=Ft.bytesPerElement,$=Wt===i.INT||Wt===i.UNSIGNED_INT||pt.gpuType===Tl;if(pt.isInterleavedBufferAttribute){let st=pt.data,J=st.stride,Gt=pt.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<K.locationSize;Ut++)f(K.location+Ut,st.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)_(K.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Ut=0;Ut<K.locationSize;Ut++)I(K.location+Ut,At/K.locationSize,Wt,rt,J*fe,(Gt+At/K.locationSize*Ut)*fe,$)}else{if(pt.isInstancedBufferAttribute){for(let st=0;st<K.locationSize;st++)f(K.location+st,pt.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<K.locationSize;st++)_(K.location+st);i.bindBuffer(i.ARRAY_BUFFER,le);for(let st=0;st<K.locationSize;st++)I(K.location+st,At/K.locationSize,Wt,rt,At*fe,At/K.locationSize*st*fe,$)}}else if(Q!==void 0){let rt=Q[dt];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(K.location,rt);break;case 3:i.vertexAttrib3fv(K.location,rt);break;case 4:i.vertexAttrib4fv(K.location,rt);break;default:i.vertexAttrib1fv(K.location,rt)}}}}P()}function D(){z();for(let b in n){let F=n[b];for(let G in F){let q=F[G];for(let Z in q)u(q[Z].object),delete q[Z];delete F[G]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let G in F){let q=F[G];for(let Z in q)u(q[Z].object),delete q[Z];delete F[G]}delete n[b.id]}function L(b){for(let F in n){let G=n[F];if(G[b.id]===void 0)continue;let q=G[b.id];for(let Z in q)u(q[Z].object),delete q[Z];delete G[b.id]}}function z(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:P}}function Q0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y];e.update(m,n,1)}function h(c,u,d,p){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)a(c[y],u[y],p[y]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let y=0;for(let w=0;w<d;w++)y+=u[w]*p[w];e.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function t_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===Rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==$n&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!z)}function h(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=h(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:T,vertexTextures:D,maxSamples:A}}function e_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ai,o=new ee,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){let y=d.clippingPlanes,w=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||y===null||y.length===0||r&&!_)r?u(null):c();else{let P=r?0:n,I=P*4,T=f.clippingState||null;h.value=T,T=u(y,p,I,m);for(let D=0;D!==I;++D)T[D]=e[D];f.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,y){let w=d!==null?d.length:0,_=null;if(w!==0){if(_=h.value,y!==!0||_===null){let f=m+w*4,P=p.matrixWorldInverse;o.getNormalMatrix(P),(_===null||_.length<f)&&(_=new Float32Array(f));for(let I=0,T=m;I!==w;++I,T+=4)a.copy(d[I]).applyMatrix4(P,o),a.normal.toArray(_,T),_[T+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,_}}function n_(i){let t=new WeakMap;function e(a,o){return o===Ml?a.mapping=Ns:o===Sl&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ml||o===Sl)if(t.has(a)){let h=t.get(a).texture;return e(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new Ko(h.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ur=4,nf=[.125,.215,.35,.446,.526,.582],Vs=20,Bh=new Us,sf=new Yt,zh=null,kh=0,Vh=0,Gh=!1,ks=(1+Math.sqrt(5))/2,Dr=1/ks,rf=[new B(-ks,Dr,0),new B(ks,Dr,0),new B(-Dr,0,ks),new B(Dr,0,ks),new B(0,ks,-Dr),new B(0,ks,Dr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],i_=new B,lc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=i_}=r;zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,kh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,ac(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Rr,format:Dn,colorSpace:Rs,depthBuffer:!1},s=af(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(r)),this._blurMaterial=r_(r,t,e)}return s}_compileMaterial(t){let e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Bh)}_sceneToCubeUV(t,e,n,s,r){let h=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(sf),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let w=new Zn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new Ie(new ts,w),f=!1,P=t.background;P?P.isColor&&(w.color.copy(P),t.background=null,f=!0):(w.color.copy(sf),f=!0);for(let I=0;I<6;I++){let T=I%3;T===0?(h.up.set(0,c[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[I],r.y,r.z)):T===1?(h.up.set(0,0,c[I]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[I],r.z)):(h.up.set(0,c[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[I]));let D=this._cubeSize;ac(s,T*D,I>2?D:0,D,D),d.setRenderTarget(s),f&&d.render(_,h),d.render(t,h)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=P}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ns||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;ac(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Bh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rf[(s-r-1)%rf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ie(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vs-1),w=r/y,_=isFinite(r)?1+Math.floor(u*w):Vs;_>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vs}`);let f=[],P=0;for(let L=0;L<Vs;++L){let z=L/w,E=Math.exp(-z*z/2);f.push(E),L===0?P+=E:L<_&&(P+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/P;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:I}=this;p.dTheta.value=y,p.mipInt.value=I-n;let T=this._sizeLods[s],D=3*T*(s>I-Ur?s-I+Ur:0),A=4*(this._cubeSize-T);ac(e,D,A,3*T,2*T),h.setRenderTarget(e),h.render(d,Bh)}};function s_(i){let t=[],e=[],n=[],s=i,r=i-Ur+1+nf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let h=1/o;a>i-Ur?h=nf[a-i+Ur-1]:a===0&&(h=0),n.push(h);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,w=3,_=2,f=1,P=new Float32Array(w*y*m),I=new Float32Array(_*y*m),T=new Float32Array(f*y*m);for(let A=0;A<m;A++){let L=A%3*2/3-1,z=A>2?0:-1,E=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];P.set(E,w*y*A),I.set(p,_*y*A);let b=[A,A,A,A,A,A];T.set(b,f*y*A)}let D=new ze;D.setAttribute("position",new Be(P,w)),D.setAttribute("uv",new Be(I,_)),D.setAttribute("faceIndex",new Be(T,f)),t.push(D),s>Ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function af(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ac(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r_(i,t,e){let n=new Float32Array(Vs),s=new B(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function of(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function a_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let h=o.mapping,c=h===Ml||h===Sl,u=h===Ns||h===Fs;if(c||u){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new lc(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new lc(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let h=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&h++;return h===c}function r(o){let h=o.target;h.removeEventListener("dispose",r);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function o_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function l_(i,t,e,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let y in p.attributes)t.remove(p.attributes[y]);p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function h(d){let p=d.attributes;for(let m in p)t.update(p[m],i.ARRAY_BUFFER)}function c(d){let p=[],m=d.index,y=d.attributes.position,w=0;if(m!==null){let P=m.array;w=m.version;for(let I=0,T=P.length;I<T;I+=3){let D=P[I+0],A=P[I+1],L=P[I+2];p.push(D,A,A,L,L,D)}}else if(y!==void 0){let P=y.array;w=y.version;for(let I=0,T=P.length/3-1;I<T;I+=3){let D=I+0,A=I+1,L=I+2;p.push(D,A,A,L,L,D)}}else return;let _=new(Lh(p)?va:xa)(p,1);_.version=w;let f=r.get(d);f&&t.remove(f),r.set(d,_)}function u(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:h,getWireframeAttribute:u}}function c_(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,y){y!==0&&(i.drawElementsInstanced(n,m,r,p*a,y),e.update(m,n,y))}function u(p,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,y);let _=0;for(let f=0;f<y;f++)_+=m[f];e.update(_,n,1)}function d(p,m,y,w){if(y===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],w[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,w,0,y);let f=0;for(let P=0;P<y;P++)f+=m[P]*w[P];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function h_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function u_(i,t,e){let n=new WeakMap,s=new we;function r(a,o,h){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],P=o.morphAttributes.color||[],I=0;m===!0&&(I=1),y===!0&&(I=2),w===!0&&(I=3);let T=o.attributes.position.count*I,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*D*4*d),L=new ga(A,T,D,d);L.type=Kn,L.needsUpdate=!0;let z=I*4;for(let b=0;b<d;b++){let F=_[b],G=f[b],q=P[b],Z=T*D*4*b;for(let nt=0;nt<F.count;nt++){let Q=nt*z;m===!0&&(s.fromBufferAttribute(F,nt),A[Z+Q+0]=s.x,A[Z+Q+1]=s.y,A[Z+Q+2]=s.z,A[Z+Q+3]=0),y===!0&&(s.fromBufferAttribute(G,nt),A[Z+Q+4]=s.x,A[Z+Q+5]=s.y,A[Z+Q+6]=s.z,A[Z+Q+7]=0),w===!0&&(s.fromBufferAttribute(q,nt),A[Z+Q+8]=s.x,A[Z+Q+9]=s.y,A[Z+Q+10]=s.z,A[Z+Q+11]=q.itemSize===4?s.w:1)}}p={count:d,texture:L,size:new te(T,D)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let y=o.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function d_(i,t,e,n){let s=new WeakMap;function r(h){let c=n.render.frame,u=h.geometry,d=t.get(h,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Af=new on,cf=new Sa(1,1),Cf=new ga,Rf=new Jo,If=new ya,hf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hc(i,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function __(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),Xe(e,n)}}function x_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ff.set(n),i.uniformMatrix3fv(this.addr,!1,ff),Xe(e,n)}}function v_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Xe(e,n)}}function y_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function T_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function C_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cf.compareFunction=Rh,r=cf):r=Af,e.setTexture2D(t||r,s)}function R_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function I_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||If,s)}function P_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cf,s)}function L_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return T_;case 36294:return w_;case 36295:return E_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(i,t){i.uniform1fv(this.addr,t)}function U_(i,t){let e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function N_(i,t){let e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function F_(i,t){let e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function O_(i,t){let e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B_(i,t){let e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function z_(i,t){let e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k_(i,t){i.uniform1iv(this.addr,t)}function V_(i,t){i.uniform2iv(this.addr,t)}function G_(i,t){i.uniform3iv(this.addr,t)}function H_(i,t){i.uniform4iv(this.addr,t)}function W_(i,t){i.uniform1uiv(this.addr,t)}function X_(i,t){i.uniform2uiv(this.addr,t)}function q_(i,t){i.uniform3uiv(this.addr,t)}function Y_(i,t){i.uniform4uiv(this.addr,t)}function Z_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Af,r[a])}function J_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rf,r[a])}function $_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||If,r[a])}function K_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cf,r[a])}function j_(i){switch(i){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return K_}}var Wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}},Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}},qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function Q_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),a=Hh.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){mf(e,c===void 0?new Wh(o,i,t):new Xh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new qh(o),mf(e,d)),e=d}}}var Nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Q_(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tx=37297,ex=0;function nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _f=new ee;function ix(i){me._getMatrix(_f,me.workingColorSpace,i);let t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case fa:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+nx(i.getShaderSource(t),o)}else return r}function sx(i,t){let e=ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rx(i,t){let e;switch(t){case Ud:e="Linear";break;case Nd:e="Reinhard";break;case Fd:e="Cineon";break;case Od:e="ACESFilmic";break;case Bd:e="AgX";break;case zd:e="Neutral";break;case yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new B;function ax(){me.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function lx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ka(i){return i!==""}function vf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(i){return i.replace(hx,dx)}var ux=new Map;function dx(i,t){let e=Kt[t];if(e===void 0){let n=ux.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yh(e)}var fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(fx,px)}function px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function mx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function gx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Fs:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _x(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function xx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ld:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function vx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=mx(e),c=gx(e),u=_x(e),d=xx(e),p=vx(e),m=ox(e),y=lx(r),w=s.createProgram(),_,f,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ka).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ka).join(`
`),f.length>0&&(f+=`
`)):(_=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),f=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Li?rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),a=Yh(a),a=vf(a,e),a=yf(a,e),o=Yh(o),o=vf(o,e),o=yf(o,e),a=Mf(a),o=Mf(o),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=P+_+a,T=P+f+o,D=gf(s,s.VERTEX_SHADER,I),A=gf(s,s.FRAGMENT_SHADER,T);s.attachShader(w,D),s.attachShader(w,A),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function L(F){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(w)||"",q=s.getShaderInfoLog(D)||"",Z=s.getShaderInfoLog(A)||"",nt=G.trim(),Q=q.trim(),dt=Z.trim(),K=!0,pt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,D,A);else{let rt=xf(s,D,"vertex"),At=xf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+nt+`
`+rt+`
`+At)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(Q===""||dt==="")&&(pt=!1);pt&&(F.diagnostics={runnable:K,programLog:nt,vertexShader:{log:Q,prefix:_},fragmentShader:{log:dt,prefix:f}})}s.deleteShader(D),s.deleteShader(A),z=new Nr(s,w),E=cx(s,w)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(w,tx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=A,this}var Mx=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jh(t),e.set(t,n)),n}},Jh=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function Sx(i,t,e,n,s,r,a){let o=new Mr,h=new Zh,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function _(E,b,F,G,q){let Z=G.fog,nt=q.geometry,Q=E.isMeshStandardMaterial?G.environment:null,dt=(E.isMeshStandardMaterial?e:t).get(E.envMap||Q),K=dt&&dt.mapping===Ua?dt.image.height:null,pt=y[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let rt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,At=rt!==void 0?rt.length:0,Ft=0;nt.morphAttributes.position!==void 0&&(Ft=1),nt.morphAttributes.normal!==void 0&&(Ft=2),nt.morphAttributes.color!==void 0&&(Ft=3);let le,Wt,fe,$;if(pt){let pe=hi[pt];le=pe.vertexShader,Wt=pe.fragmentShader}else le=E.vertexShader,Wt=E.fragmentShader,h.update(E),fe=h.getVertexShaderID(E),$=h.getFragmentShaderID(E);let st=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),Gt=q.isInstancedMesh===!0,Ut=q.isBatchedMesh===!0,re=!!E.map,qe=!!E.matcap,U=!!dt,oe=!!E.aoMap,Lt=!!E.lightMap,zt=!!E.bumpMap,Tt=!!E.normalMap,ne=!!E.displacementMap,Ct=!!E.emissiveMap,Jt=!!E.metalnessMap,Fe=!!E.roughnessMap,Ce=E.anisotropy>0,R=E.clearcoat>0,v=E.dispersion>0,H=E.iridescence>0,et=E.sheen>0,at=E.transmission>0,tt=Ce&&!!E.anisotropyMap,Dt=R&&!!E.clearcoatMap,ft=R&&!!E.clearcoatNormalMap,Mt=R&&!!E.clearcoatRoughnessMap,Rt=H&&!!E.iridescenceMap,ht=H&&!!E.iridescenceThicknessMap,vt=et&&!!E.sheenColorMap,kt=et&&!!E.sheenRoughnessMap,It=!!E.specularMap,gt=!!E.specularColorMap,Zt=!!E.specularIntensityMap,O=at&&!!E.transmissionMap,ut=at&&!!E.thicknessMap,mt=!!E.gradientMap,bt=!!E.alphaMap,ot=E.alphaTest>0,it=!!E.alphaHash,Et=!!E.extensions,Xt=Li;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let xe={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:Wt,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ut,batchingColor:Ut&&q._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&q.instanceColor!==null,instancingMorph:Gt&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Rs,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:qe,envMap:U,envMapMode:U&&dt.mapping,envMapCubeUVHeight:K,aoMap:oe,lightMap:Lt,bumpMap:zt,normalMap:Tt,displacementMap:p&&ne,emissiveMap:Ct,normalMapObjectSpace:Tt&&E.normalMapType===Hd,normalMapTangentSpace:Tt&&E.normalMapType===Ch,metalnessMap:Jt,roughnessMap:Fe,anisotropy:Ce,anisotropyMap:tt,clearcoat:R,clearcoatMap:Dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Mt,dispersion:v,iridescence:H,iridescenceMap:Rt,iridescenceThicknessMap:ht,sheen:et,sheenColorMap:vt,sheenRoughnessMap:kt,specularMap:It,specularColorMap:gt,specularIntensityMap:Zt,transmission:at,transmissionMap:O,thicknessMap:ut,gradientMap:mt,opaque:E.transparent===!1&&E.blending===As&&E.alphaToCoverage===!1,alphaMap:bt,alphaTest:ot,alphaHash:it,combine:E.combine,mapUv:re&&w(E.map.channel),aoMapUv:oe&&w(E.aoMap.channel),lightMapUv:Lt&&w(E.lightMap.channel),bumpMapUv:zt&&w(E.bumpMap.channel),normalMapUv:Tt&&w(E.normalMap.channel),displacementMapUv:ne&&w(E.displacementMap.channel),emissiveMapUv:Ct&&w(E.emissiveMap.channel),metalnessMapUv:Jt&&w(E.metalnessMap.channel),roughnessMapUv:Fe&&w(E.roughnessMap.channel),anisotropyMapUv:tt&&w(E.anisotropyMap.channel),clearcoatMapUv:Dt&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&w(E.sheenRoughnessMap.channel),specularMapUv:It&&w(E.specularMap.channel),specularColorMapUv:gt&&w(E.specularColorMap.channel),specularIntensityMapUv:Zt&&w(E.specularIntensityMap.channel),transmissionMapUv:O&&w(E.transmissionMap.channel),thicknessMapUv:ut&&w(E.thicknessMap.channel),alphaMapUv:bt&&w(E.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Tt||Ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!nt.attributes.uv&&(re||bt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:J,skinning:q.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&me.getTransfer(E.map.colorSpace)===Me,decodeVideoTextureEmissive:Ct&&E.emissiveMap.isVideoTexture===!0&&me.getTransfer(E.emissiveMap.colorSpace)===Me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)b.push(F),b.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(P(b,E),I(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function P(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function I(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function T(E){let b=y[E.type],F;if(b){let G=hi[b];F=tf.clone(G.uniforms)}else F=E.uniforms;return F}function D(E,b){let F;for(let G=0,q=u.length;G<q;G++){let Z=u[G];if(Z.cacheKey===b){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new yx(i,b,E,r),u.push(F)),F}function A(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function L(E){h.remove(E)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:z}}function bx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,m,y,w,_){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:y,renderOrder:d.renderOrder,z:w,group:_},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=w,f.group=_),t++,f}function o(d,p,m,y,w,_){let f=a(d,p,m,y,w,_);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function h(d,p,m,y,w,_){let f=a(d,p,m,y,w,_);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,p){e.length>1&&e.sort(d||Tx),n.length>1&&n.sort(p||bf),s.length>1&&s.sort(p||bf)}function u(){for(let d=t,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:u,sort:c}}function wx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Tf,i.set(n,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ex(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Yt};break;case"SpotLight":e={position:new B,direction:new B,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cx=0;function Rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ix(i){let t=new Ex,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Se,a=new Se;function o(c){let u=0,d=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,y=0,w=0,_=0,f=0,P=0,I=0,T=0,D=0,A=0,L=0;c.sort(Rx);for(let E=0,b=c.length;E<b;E++){let F=c[E],G=F.color,q=F.intensity,Z=F.distance,nt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=G.r*q,d+=G.g*q,p+=G.b*q;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],q);L++}else if(F.isDirectionalLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let dt=F.shadow,K=e.get(F);K.shadowIntensity=dt.intensity,K.shadowBias=dt.bias,K.shadowNormalBias=dt.normalBias,K.shadowRadius=dt.radius,K.shadowMapSize=dt.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=F.shadow.matrix,P++}n.directional[m]=Q,m++}else if(F.isSpotLight){let Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(G).multiplyScalar(q),Q.distance=Z,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[w]=Q;let dt=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,dt.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[w]=dt.matrix,F.castShadow){let K=e.get(F);K.shadowIntensity=dt.intensity,K.shadowBias=dt.bias,K.shadowNormalBias=dt.normalBias,K.shadowRadius=dt.radius,K.shadowMapSize=dt.mapSize,n.spotShadow[w]=K,n.spotShadowMap[w]=nt,T++}w++}else if(F.isRectAreaLight){let Q=t.get(F);Q.color.copy(G).multiplyScalar(q),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=Q,_++}else if(F.isPointLight){let Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let dt=F.shadow,K=e.get(F);K.shadowIntensity=dt.intensity,K.shadowBias=dt.bias,K.shadowNormalBias=dt.normalBias,K.shadowRadius=dt.radius,K.shadowMapSize=dt.mapSize,K.shadowCameraNear=dt.camera.near,K.shadowCameraFar=dt.camera.far,n.pointShadow[y]=K,n.pointShadowMap[y]=nt,n.pointShadowMatrix[y]=F.shadow.matrix,I++}n.point[y]=Q,y++}else if(F.isHemisphereLight){let Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar(q),Q.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[f]=Q,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let z=n.hash;(z.directionalLength!==m||z.pointLength!==y||z.spotLength!==w||z.rectAreaLength!==_||z.hemiLength!==f||z.numDirectionalShadows!==P||z.numPointShadows!==I||z.numSpotShadows!==T||z.numSpotMaps!==D||z.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=w,n.rectArea.length=_,n.point.length=y,n.hemi.length=f,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=T+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,z.directionalLength=m,z.pointLength=y,z.spotLength=w,z.rectAreaLength=_,z.hemiLength=f,z.numDirectionalShadows=P,z.numPointShadows=I,z.numSpotShadows=T,z.numSpotMaps=D,z.numLightProbes=L,n.version=Cx++)}function h(c,u){let d=0,p=0,m=0,y=0,w=0,_=u.matrixWorldInverse;for(let f=0,P=c.length;f<P;f++){let I=c[f];if(I.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),d++}else if(I.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),m++}else if(I.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(_),a.identity(),r.copy(I.matrixWorld),r.premultiply(_),a.extractRotation(r),T.halfWidth.set(I.width*.5,0,0),T.halfHeight.set(0,I.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(I.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(_),p++}else if(I.isHemisphereLight){let T=n.hemi[w];T.direction.setFromMatrixPosition(I.matrixWorld),T.direction.transformDirection(_),w++}}}return{setup:o,setupView:h,state:n}}function wf(i){let t=new Ix(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function Px(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new wf(i),t.set(s,[o])):r>=a.length?(o=new wf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function Ux(i,t,e){let n=new br,s=new te,r=new te,a=new we,o=new tl({depthPacking:Gd}),h=new el,c={},u=e.maxTextureSize,d={[Ci]:_n,[_n]:Ci,[cn]:cn},p=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let y=new ze;y.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Ie(y,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let f=this.type;this.render=function(A,L,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Jn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=f!==ci&&this.type===ci,Z=f===ci&&this.type!==ci;for(let nt=0,Q=A.length;nt<Q;nt++){let dt=A[nt],K=dt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let pt=K.getFrameExtents();if(s.multiply(pt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,K.mapSize.y=r.y)),K.map===null||q===!0||Z===!0){let At=this.type!==ci?{minFilter:an,magFilter:an}:{};K.map!==null&&K.map.dispose(),K.map=new oi(s.x,s.y,At),K.map.texture.name=dt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let rt=K.getViewportCount();for(let At=0;At<rt;At++){let Ft=K.getViewport(At);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(a),K.updateMatrices(dt,At),n=K.getFrustum(),T(L,z,K.camera,dt,this.type)}K.isPointLightShadow!==!0&&this.type===ci&&P(K,z),K.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(E,b,F)};function P(A,L){let z=t.update(w);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,z,p,w,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,z,m,w,null)}function I(A,L,z,E){let b=null,F=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)b=F;else if(b=z.isPointLight===!0?h:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=b.uuid,q=L.uuid,Z=c[G];Z===void 0&&(Z={},c[G]=Z);let nt=Z[q];nt===void 0&&(nt=b.clone(),Z[q]=nt,L.addEventListener("dispose",D)),b=nt}if(b.visible=L.visible,b.wireframe=L.wireframe,E===ci?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=z}return b}function T(A,L,z,E,b){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ci)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let q=t.update(A),Z=A.material;if(Array.isArray(Z)){let nt=q.groups;for(let Q=0,dt=nt.length;Q<dt;Q++){let K=nt[Q],pt=Z[K.materialIndex];if(pt&&pt.visible){let rt=I(A,pt,E,b);A.onBeforeShadow(i,A,L,z,q,rt,K),i.renderBufferDirect(z,null,q,rt,A,K),A.onAfterShadow(i,A,L,z,q,rt,K)}}}else if(Z.visible){let nt=I(A,Z,E,b);A.onBeforeShadow(i,A,L,z,q,nt,null),i.renderBufferDirect(z,null,q,nt,A,null),A.onAfterShadow(i,A,L,z,q,nt,null)}}let G=A.children;for(let q=0,Z=G.length;q<Z;q++)T(G[q],L,z,E,b)}function D(A){A.target.removeEventListener("dispose",D);for(let z in c){let E=c[z],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var Nx={[dl]:fl,[pl]:_l,[ml]:xl,[Cs]:gl,[fl]:dl,[_l]:pl,[xl]:ml,[gl]:Cs};function Fx(i,t){function e(){let O=!1,ut=new we,mt=null,bt=new we(0,0,0,0);return{setMask:function(ot){mt!==ot&&!O&&(i.colorMask(ot,ot,ot,ot),mt=ot)},setLocked:function(ot){O=ot},setClear:function(ot,it,Et,Xt,xe){xe===!0&&(ot*=Xt,it*=Xt,Et*=Xt),ut.set(ot,it,Et,Xt),bt.equals(ut)===!1&&(i.clearColor(ot,it,Et,Xt),bt.copy(ut))},reset:function(){O=!1,mt=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,ut=!1,mt=null,bt=null,ot=null;return{setReversed:function(it){if(ut!==it){let Et=t.get("EXT_clip_control");it?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let Xt=ot;ot=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(it){it?st(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(it){mt!==it&&!O&&(i.depthMask(it),mt=it)},setFunc:function(it){if(ut&&(it=Nx[it]),bt!==it){switch(it){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=it}},setLocked:function(it){O=it},setClear:function(it){ot!==it&&(ut&&(it=1-it),i.clearDepth(it),ot=it)},reset:function(){O=!1,mt=null,bt=null,ot=null,ut=!1}}}function s(){let O=!1,ut=null,mt=null,bt=null,ot=null,it=null,Et=null,Xt=null,xe=null;return{setTest:function(pe){O||(pe?st(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(pe){ut!==pe&&!O&&(i.stencilMask(pe),ut=pe)},setFunc:function(pe,xn,ue){(mt!==pe||bt!==xn||ot!==ue)&&(i.stencilFunc(pe,xn,ue),mt=pe,bt=xn,ot=ue)},setOp:function(pe,xn,ue){(it!==pe||Et!==xn||Xt!==ue)&&(i.stencilOp(pe,xn,ue),it=pe,Et=xn,Xt=ue)},setLocked:function(pe){O=pe},setClear:function(pe){xe!==pe&&(i.clearStencil(pe),xe=pe)},reset:function(){O=!1,ut=null,mt=null,bt=null,ot=null,it=null,Et=null,Xt=null,xe=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,m=[],y=null,w=!1,_=null,f=null,P=null,I=null,T=null,D=null,A=null,L=new Yt(0,0,0),z=0,E=!1,b=null,F=null,G=null,q=null,Z=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,dt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=dt>=1):K.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=dt>=2);let pt=null,rt={},At=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),le=new we().fromArray(At),Wt=new we().fromArray(Ft);function fe(O,ut,mt,bt){let ot=new Uint8Array(4),it=i.createTexture();i.bindTexture(O,it),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<mt;Et++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ut+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return it}let $={};$[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Cs),zt(!1),Tt(gh),st(i.CULL_FACE),oe(Jn);function st(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function J(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Gt(O,ut){return d[O]!==ut?(i.bindFramebuffer(O,ut),d[O]=ut,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(O,ut){let mt=m,bt=!1;if(O){mt=p.get(ut),mt===void 0&&(mt=[],p.set(ut,mt));let ot=O.textures;if(mt.length!==ot.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Et=ot.length;it<Et;it++)mt[it]=i.COLOR_ATTACHMENT0+it;mt.length=ot.length,bt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(mt)}function re(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let qe={[Ki]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};qe[_d]=i.MIN,qe[xd]=i.MAX;let U={[vd]:i.ZERO,[yd]:i.ONE,[Md]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(O,ut,mt,bt,ot,it,Et,Xt,xe,pe){if(O===Jn){w===!0&&(J(i.BLEND),w=!1);return}if(w===!1&&(st(i.BLEND),w=!0),O!==pd){if(O!==_||pe!==E){if((f!==Ki||T!==Ki)&&(i.blendEquation(i.FUNC_ADD),f=Ki,T=Ki),pe)switch(O){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}P=null,I=null,D=null,A=null,L.set(0,0,0),z=0,_=O,E=pe}return}ot=ot||ut,it=it||mt,Et=Et||bt,(ut!==f||ot!==T)&&(i.blendEquationSeparate(qe[ut],qe[ot]),f=ut,T=ot),(mt!==P||bt!==I||it!==D||Et!==A)&&(i.blendFuncSeparate(U[mt],U[bt],U[it],U[Et]),P=mt,I=bt,D=it,A=Et),(Xt.equals(L)===!1||xe!==z)&&(i.blendColor(Xt.r,Xt.g,Xt.b,xe),L.copy(Xt),z=xe),_=O,E=!1}function Lt(O,ut){O.side===cn?J(i.CULL_FACE):st(i.CULL_FACE);let mt=O.side===_n;ut&&(mt=!mt),zt(mt),O.blending===As&&O.transparent===!1?oe(Jn):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;o.setTest(bt),bt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Tt(O){O!==ud?(st(i.CULL_FACE),O!==F&&(O===gh?i.cullFace(i.BACK):O===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),F=O}function ne(O){O!==G&&(Q&&i.lineWidth(O),G=O)}function Ct(O,ut,mt){O?(st(i.POLYGON_OFFSET_FILL),(q!==ut||Z!==mt)&&(i.polygonOffset(ut,mt),q=ut,Z=mt)):J(i.POLYGON_OFFSET_FILL)}function Jt(O){O?st(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function Fe(O){O===void 0&&(O=i.TEXTURE0+nt-1),pt!==O&&(i.activeTexture(O),pt=O)}function Ce(O,ut,mt){mt===void 0&&(pt===null?mt=i.TEXTURE0+nt-1:mt=pt);let bt=rt[mt];bt===void 0&&(bt={type:void 0,texture:void 0},rt[mt]=bt),(bt.type!==O||bt.texture!==ut)&&(pt!==mt&&(i.activeTexture(mt),pt=mt),i.bindTexture(O,ut||$[O]),bt.type=O,bt.texture=ut)}function R(){let O=rt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function kt(O){Wt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Wt.copy(O))}function It(O,ut){let mt=c.get(ut);mt===void 0&&(mt=new WeakMap,c.set(ut,mt));let bt=mt.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(ut,O.name),mt.set(O,bt))}function gt(O,ut){let bt=c.get(ut).get(O);h.get(ut)!==bt&&(i.uniformBlockBinding(ut,bt,O.__bindingPointIndex),h.set(ut,bt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pt=null,rt={},d={},p=new WeakMap,m=[],y=null,w=!1,_=null,f=null,P=null,I=null,T=null,D=null,A=null,L=new Yt(0,0,0),z=0,E=!1,b=null,F=null,G=null,q=null,Z=null,le.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:J,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:re,setBlending:oe,setMaterial:Lt,setFlipSided:zt,setCullFace:Tt,setLineWidth:ne,setPolygonOffset:Ct,setScissorTest:Jt,activeTexture:Fe,bindTexture:Ce,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Rt,texImage3D:ht,updateUBOMapping:It,uniformBlockBinding:gt,texStorage2D:ft,texStorage3D:Mt,texSubImage2D:et,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:Dt,scissor:vt,viewport:kt,reset:Zt}}function Ox(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,v){return m?new OffscreenCanvas(R,v):ma("canvas")}function w(R,v,H){let et=1,at=Ce(R);if((at.width>H||at.height>H)&&(et=H/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let tt=Math.floor(et*at.width),Dt=Math.floor(et*at.height);d===void 0&&(d=y(tt,Dt));let ft=v?y(tt,Dt):d;return ft.width=tt,ft.height=Dt,ft.getContext("2d").drawImage(R,0,0,tt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Dt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function _(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(R,v,H,et,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=v;if(v===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),v===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),v===i.RGBA){let Dt=at?fa:me.getTransfer(et);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=Dt===Me?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(R,v){let H;return R?v===null||v===as||v===Ir?H=i.DEPTH24_STENCIL8:v===Kn?H=i.DEPTH32F_STENCIL8:v===Cr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===as||v===Ir?H=i.DEPTH_COMPONENT24:v===Kn?H=i.DEPTH_COMPONENT32F:v===Cr&&(H=i.DEPTH_COMPONENT16),H}function D(R,v){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==qn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),z(v),v.isVideoTexture&&u.delete(v)}function L(R){let v=R.target;v.removeEventListener("dispose",L),b(v)}function z(R){let v=n.get(R);if(v.__webglInit===void 0)return;let H=R.source,et=p.get(H);if(et){let at=et[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(R),Object.keys(et).length===0&&p.delete(H)}n.remove(R)}function E(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let H=R.source,et=p.get(H);delete et[v.__cacheKey],a.memory.textures--}function b(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let at=0;at<v.__webglFramebuffer[et].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[et][at]);else i.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)i.deleteFramebuffer(v.__webglFramebuffer[et]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=R.textures;for(let et=0,at=H.length;et<at;et++){let tt=n.get(H[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(H[et])}n.remove(R)}let F=0;function G(){F=0}function q(){let R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function Z(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function nt(R,v){let H=n.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Q(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){$(H,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function dt(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){$(H,R,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function K(R,v){let H=n.get(R);if(R.version>0&&H.__version!==R.version){st(H,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let pt={[Wo]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},rt={[an]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},At={[Wd]:i.NEVER,[$d]:i.ALWAYS,[Xd]:i.LESS,[Rh]:i.LEQUAL,[qd]:i.EQUAL,[Jd]:i.GEQUAL,[Yd]:i.GREATER,[Zd]:i.NOTEQUAL};function Ft(R,v){if(v.type===Kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qn||v.magFilter===bl||v.magFilter===Na||v.magFilter===rs||v.minFilter===qn||v.minFilter===bl||v.minFilter===Na||v.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,rt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,rt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Na&&v.minFilter!==rs||v.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function le(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let et=v.source,at=p.get(et);at===void 0&&(at={},p.set(et,at));let tt=Z(v);if(tt!==R.__cacheKey){at[tt]===void 0&&(at[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),at[tt].usedTimes++;let Dt=at[R.__cacheKey];Dt!==void 0&&(at[R.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(v)),R.__cacheKey=tt,R.__webglTexture=at[tt].texture}return H}function Wt(R,v,H){return Math.floor(Math.floor(R/H)/v)}function fe(R,v,H,et){let tt=R.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,et,v.data);else{tt.sort((ht,vt)=>ht.start-vt.start);let Dt=0;for(let ht=1;ht<tt.length;ht++){let vt=tt[Dt],kt=tt[ht],It=vt.start+vt.count,gt=Wt(kt.start,v.width,4),Zt=Wt(vt.start,v.width,4);kt.start<=It+1&&gt===Zt&&Wt(kt.start+kt.count-1,v.width,4)===gt?vt.count=Math.max(vt.count,kt.start+kt.count-vt.start):(++Dt,tt[Dt]=kt)}tt.length=Dt+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ht=0,vt=tt.length;ht<vt;ht++){let kt=tt[ht],It=Math.floor(kt.start/4),gt=Math.ceil(kt.count/4),Zt=It%v.width,O=Math.floor(It/v.width),ut=gt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Zt,O,ut,mt,H,et,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function $(R,v,H){let et=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=i.TEXTURE_3D);let at=le(R,v),tt=v.source;e.bindTexture(et,R.__webglTexture,i.TEXTURE0+H);let Dt=n.get(tt);if(tt.version!==Dt.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let ft=me.getPrimaries(me.workingColorSpace),Mt=v.colorSpace===Di?null:me.getPrimaries(v.colorSpace),Rt=v.colorSpace===Di||ft===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ht=w(v.image,!1,s.maxTextureSize);ht=Fe(v,ht);let vt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),It=I(v.internalFormat,vt,kt,v.colorSpace,v.isVideoTexture);Ft(et,v);let gt,Zt=v.mipmaps,O=v.isVideoTexture!==!0,ut=Dt.__version===void 0||at===!0,mt=tt.dataReady,bt=D(v,ht);if(v.isDepthTexture)It=T(v.format===Pr,v.type),ut&&(O?e.texStorage2D(i.TEXTURE_2D,1,It,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,It,ht.width,ht.height,0,vt,kt,null));else if(v.isDataTexture)if(Zt.length>0){O&&ut&&e.texStorage2D(i.TEXTURE_2D,bt,It,Zt[0].width,Zt[0].height);for(let ot=0,it=Zt.length;ot<it;ot++)gt=Zt[ot],O?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,kt,gt.data):e.texImage2D(i.TEXTURE_2D,ot,It,gt.width,gt.height,0,vt,kt,gt.data);v.generateMipmaps=!1}else O?(ut&&e.texStorage2D(i.TEXTURE_2D,bt,It,ht.width,ht.height),mt&&fe(v,ht,vt,kt)):e.texImage2D(i.TEXTURE_2D,0,It,ht.width,ht.height,0,vt,kt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){O&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,It,Zt[0].width,Zt[0].height,ht.depth);for(let ot=0,it=Zt.length;ot<it;ot++)if(gt=Zt[ot],v.format!==Dn)if(vt!==null)if(O){if(mt)if(v.layerUpdates.size>0){let Et=Oh(gt.width,gt.height,v.format,v.type);for(let Xt of v.layerUpdates){let xe=gt.data.subarray(Xt*Et/gt.data.BYTES_PER_ELEMENT,(Xt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Xt,gt.width,gt.height,1,vt,xe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,ht.depth,vt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,It,gt.width,gt.height,ht.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,ht.depth,vt,kt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,It,gt.width,gt.height,ht.depth,0,vt,kt,gt.data)}else{O&&ut&&e.texStorage2D(i.TEXTURE_2D,bt,It,Zt[0].width,Zt[0].height);for(let ot=0,it=Zt.length;ot<it;ot++)gt=Zt[ot],v.format!==Dn?vt!==null?O?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,kt,gt.data):e.texImage2D(i.TEXTURE_2D,ot,It,gt.width,gt.height,0,vt,kt,gt.data)}else if(v.isDataArrayTexture)if(O){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,It,ht.width,ht.height,ht.depth),mt)if(v.layerUpdates.size>0){let ot=Oh(ht.width,ht.height,v.format,v.type);for(let it of v.layerUpdates){let Et=ht.data.subarray(it*ot/ht.data.BYTES_PER_ELEMENT,(it+1)*ot/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ht.width,ht.height,1,vt,kt,Et)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,vt,kt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ht.width,ht.height,ht.depth,0,vt,kt,ht.data);else if(v.isData3DTexture)O?(ut&&e.texStorage3D(i.TEXTURE_3D,bt,It,ht.width,ht.height,ht.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,vt,kt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,It,ht.width,ht.height,ht.depth,0,vt,kt,ht.data);else if(v.isFramebufferTexture){if(ut)if(O)e.texStorage2D(i.TEXTURE_2D,bt,It,ht.width,ht.height);else{let ot=ht.width,it=ht.height;for(let Et=0;Et<bt;Et++)e.texImage2D(i.TEXTURE_2D,Et,It,ot,it,0,vt,kt,null),ot>>=1,it>>=1}}else if(Zt.length>0){if(O&&ut){let ot=Ce(Zt[0]);e.texStorage2D(i.TEXTURE_2D,bt,It,ot.width,ot.height)}for(let ot=0,it=Zt.length;ot<it;ot++)gt=Zt[ot],O?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt,kt,gt):e.texImage2D(i.TEXTURE_2D,ot,It,vt,kt,gt);v.generateMipmaps=!1}else if(O){if(ut){let ot=Ce(ht);e.texStorage2D(i.TEXTURE_2D,bt,It,ot.width,ot.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,kt,ht)}else e.texImage2D(i.TEXTURE_2D,0,It,vt,kt,ht);_(v)&&f(et),Dt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function st(R,v,H){if(v.image.length!==6)return;let et=le(R,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);let tt=n.get(at);if(at.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);let Dt=me.getPrimaries(me.workingColorSpace),ft=v.colorSpace===Di?null:me.getPrimaries(v.colorSpace),Mt=v.colorSpace===Di||Dt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!Rt&&!ht?vt[it]=w(v.image[it],!0,s.maxCubemapSize):vt[it]=ht?v.image[it].image:v.image[it],vt[it]=Fe(v,vt[it]);let kt=vt[0],It=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Zt=I(v.internalFormat,It,gt,v.colorSpace),O=v.isVideoTexture!==!0,ut=tt.__version===void 0||et===!0,mt=at.dataReady,bt=D(v,kt);Ft(i.TEXTURE_CUBE_MAP,v);let ot;if(Rt){O&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Zt,kt.width,kt.height);for(let it=0;it<6;it++){ot=vt[it].mipmaps;for(let Et=0;Et<ot.length;Et++){let Xt=ot[Et];v.format!==Dn?It!==null?O?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Zt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Xt.width,Xt.height,It,gt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Zt,Xt.width,Xt.height,0,It,gt,Xt.data)}}}else{if(ot=v.mipmaps,O&&ut){ot.length>0&&bt++;let it=Ce(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Zt,it.width,it.height)}for(let it=0;it<6;it++)if(ht){O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,It,gt,vt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,vt[it].width,vt[it].height,0,It,gt,vt[it].data);for(let Et=0;Et<ot.length;Et++){let xe=ot[Et].image[it].image;O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,xe.width,xe.height,It,gt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Zt,xe.width,xe.height,0,It,gt,xe.data)}}else{O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,gt,vt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,It,gt,vt[it]);for(let Et=0;Et<ot.length;Et++){let Xt=ot[Et];O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,It,gt,Xt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Zt,It,gt,Xt.image[it])}}}_(v)&&f(i.TEXTURE_CUBE_MAP),tt.__version=at.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,H,et,at,tt){let Dt=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),Mt=I(H.internalFormat,Dt,ft,H.colorSpace),Rt=n.get(v),ht=n.get(H);if(ht.__renderTarget=v,!Rt.__hasExternalTextures){let vt=Math.max(1,v.width>>tt),kt=Math.max(1,v.height>>tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Mt,vt,kt,v.depth,0,Dt,ft,null):e.texImage2D(at,tt,Mt,vt,kt,0,Dt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,at,ht.__webglTexture,0,ne(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,at,ht.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let et=v.depthTexture,at=et&&et.isDepthTexture?et.type:null,tt=T(v.stencilBuffer,at),Dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ne(v);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,tt,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,R)}else{let et=v.textures;for(let at=0;at<et.length;at++){let tt=et[at],Dt=r.convert(tt.format,tt.colorSpace),ft=r.convert(tt.type),Mt=I(tt.internalFormat,Dt,ft,tt.colorSpace),Rt=ne(v);H&&Ct(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Mt,v.width,v.height):Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(v.depthTexture);et.__renderTarget=v,(!et.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt(v.depthTexture,0);let at=et.__webglTexture,tt=ne(v);if(v.depthTexture.format===_r)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Pr)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function re(R){let v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let et=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=et}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let et=R.texture.mipmaps;et&&et.length>0?Ut(v.__webglFramebuffer[0],R):Ut(v.__webglFramebuffer,R)}else if(H){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=i.createRenderbuffer(),Gt(v.__webglDepthbuffer[et],R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}else{let et=R.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Gt(v.__webglDepthbuffer,R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,v,H){let et=n.get(R);v!==void 0&&J(et.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&re(R)}function U(R){let v=R.texture,H=n.get(R),et=n.get(v);R.addEventListener("dispose",L);let at=R.textures,tt=R.isWebGLCubeRenderTarget===!0,Dt=at.length>1;if(Dt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=v.version,a.memory.textures++),tt){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)H.__webglFramebuffer[ft][Mt]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let ft=0,Mt=at.length;ft<Mt;ft++){let Rt=n.get(at[ft]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ct(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){let Mt=at[ft];H.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);let Rt=r.convert(Mt.format,Mt.colorSpace),ht=r.convert(Mt.type),vt=I(Mt.internalFormat,Rt,ht,Mt.colorSpace,R.isXRRenderTarget===!0),kt=ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,vt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)J(H.__webglFramebuffer[ft][Mt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else J(H.__webglFramebuffer[ft],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ft=0,Mt=at.length;ft<Mt;ft++){let Rt=at[ft],ht=n.get(Rt),vt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,ht.__webglTexture),Ft(vt,Rt),J(H.__webglFramebuffer,R,Rt,i.COLOR_ATTACHMENT0+ft,vt,0),_(Rt)&&f(vt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,et.__webglTexture),Ft(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)J(H.__webglFramebuffer[Mt],R,v,i.COLOR_ATTACHMENT0,ft,Mt);else J(H.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ft,0);_(v)&&f(ft),e.unbindTexture()}R.depthBuffer&&re(R)}function oe(R){let v=R.textures;for(let H=0,et=v.length;H<et;H++){let at=v[H];if(_(at)){let tt=P(R),Dt=n.get(at).__webglTexture;e.bindTexture(tt,Dt),f(tt),e.unbindTexture()}}}let Lt=[],zt=[];function Tt(R){if(R.samples>0){if(Ct(R)===!1){let v=R.textures,H=R.width,et=R.height,at=i.COLOR_BUFFER_BIT,tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(R),ft=v.length>1;if(ft)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);let Mt=R.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let ht=n.get(v[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,at,i.NEAREST),h===!0&&(Lt.length=0,zt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Lt.push(tt),zt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let ht=n.get(v[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ne(R){return Math.min(s.maxSamples,R.samples)}function Ct(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Jt(R){let v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Fe(R,v){let H=R.colorSpace,et=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Rs&&H!==Di&&(me.getTransfer(H)===Me?(et!==Dn||at!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=Q,this.setTexture3D=dt,this.setTextureCube=K,this.rebindTextures=qe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ct}function Bx(i,t){function e(n,s=Di){let r,a=me.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===Dn)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===za)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Ll||n===Dl||n===Ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Fl)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends Ri{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,u=null,d=null,p=null,m=null,y=null,w=typeof XRWebGLBinding<"u",_=new $h,f={},P=e.getContextAttributes(),I=null,T=null,D=[],A=[],L=new te,z=null,E=new Mn;E.viewport=new we;let b=new Mn;b.viewport=new we;let F=[E,b],G=new ul,q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=D[$];return st===void 0&&(st=new Sr,D[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=D[$];return st===void 0&&(st=new Sr,D[$]=st),st.getGripSpace()},this.getHand=function($){let st=D[$];return st===void 0&&(st=new Sr,D[$]=st),st.getHandSpace()};function nt($){let st=A.indexOf($.inputSource);if(st===-1)return;let J=D[st];J!==void 0&&(J.update($.inputSource,$.frame,c||a),J.dispatchEvent({type:$.type,data:$.inputSource}))}function Q(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",dt);for(let $=0;$<D.length;$++){let st=A[$];st!==null&&(A[$]=null,D[$].disconnect(st))}q=null,Z=null,_.reset();for(let $ in f)delete f[$];t.setRenderTarget(I),m=null,p=null,d=null,s=null,T=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&w&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",dt),P.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Gt=null,Ut=null;P.depth&&(Ut=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=P.stencil?Pr:_r,Gt=P.stencil?Ir:as);let re={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(re),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new oi(p.textureWidth,p.textureHeight,{format:Dn,type:$n,depthTexture:new Sa(p.textureWidth,p.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let J={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new oi(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function dt($){for(let st=0;st<$.removed.length;st++){let J=$.removed[st],Gt=A.indexOf(J);Gt>=0&&(A[Gt]=null,D[Gt].disconnect(J))}for(let st=0;st<$.added.length;st++){let J=$.added[st],Gt=A.indexOf(J);if(Gt===-1){for(let re=0;re<D.length;re++)if(re>=A.length){A.push(J),Gt=re;break}else if(A[re]===null){A[re]=J,Gt=re;break}if(Gt===-1)break}let Ut=D[Gt];Ut&&Ut.connect(J)}}let K=new B,pt=new B;function rt($,st,J){K.setFromMatrixPosition(st.matrixWorld),pt.setFromMatrixPosition(J.matrixWorld);let Gt=K.distanceTo(pt),Ut=st.projectionMatrix.elements,re=J.projectionMatrix.elements,qe=Ut[14]/(Ut[10]-1),U=Ut[14]/(Ut[10]+1),oe=(Ut[9]+1)/Ut[5],Lt=(Ut[9]-1)/Ut[5],zt=(Ut[8]-1)/Ut[0],Tt=(re[8]+1)/re[0],ne=qe*zt,Ct=qe*Tt,Jt=Gt/(-zt+Tt),Fe=Jt*-zt;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(Jt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ut[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Ce=qe+Jt,R=U+Jt,v=ne-Fe,H=Ct+(Gt-Fe),et=oe*U/R*Ce,at=Lt*U/R*Ce;$.projectionMatrix.makePerspective(v,H,et,at,Ce,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function At($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,J=$.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(J=_.depthFar)),G.near=b.near=E.near=st,G.far=b.far=E.far=J,(q!==G.near||Z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,Z=G.far),G.layers.mask=$.layers.mask|6,E.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let Gt=$.parent,Ut=G.cameras;At(G,Gt);for(let re=0;re<Ut.length;re++)At(Ut[re],Gt);Ut.length===2?rt(G,E,b):G.projectionMatrix.copy(E.projectionMatrix),Ft($,G,Gt)};function Ft($,st,J){J===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(J.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function($){h=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function($){return f[$]};let le=null;function Wt($,st){if(u=st.getViewerPose(c||a),y=st,u!==null){let J=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let Gt=!1;J.length!==G.cameras.length&&(G.cameras.length=0,Gt=!0);for(let U=0;U<J.length;U++){let oe=J[U],Lt=null;if(m!==null)Lt=m.getViewport(oe);else{let Tt=d.getViewSubImage(p,oe);Lt=Tt.viewport,U===0&&(t.setRenderTargetTextures(T,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(T))}let zt=F[U];zt===void 0&&(zt=new Mn,zt.layers.enable(U),zt.viewport=new we,F[U]=zt),zt.matrix.fromArray(oe.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(oe.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),U===0&&(G.matrix.copy(zt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Gt===!0&&G.cameras.push(zt)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){d=n.getBinding();let U=d.getDepthInformation(J[0]);U&&U.isValid&&U.texture&&_.init(U,s.renderState)}if(Ut&&Ut.includes("camera-access")&&w){t.state.unbindTexture(),d=n.getBinding();for(let U=0;U<J.length;U++){let oe=J[U].camera;if(oe){let Lt=f[oe];Lt||(Lt=new ba,f[oe]=Lt);let zt=d.getCameraImage(oe);Lt.sourceTexture=zt}}}}for(let J=0;J<D.length;J++){let Gt=A[J],Ut=D[J];Gt!==null&&Ut!==void 0&&Ut.update(Gt,st,c||a)}le&&le($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),y=null}let fe=new Ef;fe.setAnimationLoop(Wt),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}},zs=new Yn,Vx=new Se;function Gx(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Dh(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,P,I,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),u(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&m(_,f,T)):f.isMeshMatcapMaterial?(r(_,f),y(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),w(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?h(_,f,P,I):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===_n&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===_n&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let P=t.get(f),I=P.envMap,T=P.envMapRotation;I&&(_.envMap.value=I,zs.copy(T),zs.x*=-1,zs.y*=-1,zs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),_.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(zs)),_.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function h(_,f,P,I){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*P,_.scale.value=I*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,P){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,f){f.matcap&&(_.matcap.value=f.matcap)}function w(_,f){let P=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,I){let T=I.program;n.uniformBlockBinding(P,T)}function c(P,I){let T=s[P.id];T===void 0&&(y(P),T=u(P),s[P.id]=T,P.addEventListener("dispose",_));let D=I.program;n.updateUBOMapping(P,D);let A=t.render.frame;r[P.id]!==A&&(p(P),r[P.id]=A)}function u(P){let I=d();P.__bindingPointIndex=I;let T=i.createBuffer(),D=P.__size,A=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,T),T}function d(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(P){let I=s[P.id],T=P.uniforms,D=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let A=0,L=T.length;A<L;A++){let z=Array.isArray(T[A])?T[A]:[T[A]];for(let E=0,b=z.length;E<b;E++){let F=z[E];if(m(F,A,E,D)===!0){let G=F.__offset,q=Array.isArray(F.value)?F.value:[F.value],Z=0;for(let nt=0;nt<q.length;nt++){let Q=q[nt],dt=w(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,Z),Z+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(P,I,T,D){let A=P.value,L=I+"_"+T;if(D[L]===void 0)return typeof A=="number"||typeof A=="boolean"?D[L]=A:D[L]=A.clone(),!0;{let z=D[L];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return D[L]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function y(P){let I=P.uniforms,T=0,D=16;for(let L=0,z=I.length;L<z;L++){let E=Array.isArray(I[L])?I[L]:[I[L]];for(let b=0,F=E.length;b<F;b++){let G=E[b],q=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,nt=q.length;Z<nt;Z++){let Q=q[Z],dt=w(Q),K=T%D,pt=K%dt.boundary,rt=K+pt;T+=pt,rt!==0&&D-rt<dt.storage&&(T+=D-rt),G.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=dt.storage}}}let A=T%D;return A>0&&(T+=D-A),P.__size=T,P.__cache={},this}function w(P){let I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=48,I.storage=48):P.isMatrix4?(I.boundary=64,I.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),I}function _(P){let I=P.target;I.removeEventListener("dispose",_);let T=a.indexOf(I.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function f(){for(let P in s)i.deleteBuffer(s[P]);a=[],s={},r={}}return{bind:h,update:c,dispose:f}}var cc=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=new Uint32Array(4),w=new Int32Array(4),_=null,f=null,P=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,D=!1;this._outputColorSpace=mn;let A=0,L=0,z=null,E=-1,b=null,F=new we,G=new we,q=null,Z=new Yt(0),nt=0,Q=e.width,dt=e.height,K=1,pt=null,rt=null,At=new we(0,0,Q,dt),Ft=new we(0,0,Q,dt),le=!1,Wt=new br,fe=!1,$=!1,st=new Se,J=new B,Gt=new we,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function qe(){return z===null?K:1}let U=n;function oe(S,k){return e.getContext(S,k)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){let k="webgl2";if(U=oe(k,S),U===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Lt,zt,Tt,ne,Ct,Jt,Fe,Ce,R,v,H,et,at,tt,Dt,ft,Mt,Rt,ht,vt,kt,It,gt,Zt;function O(){Lt=new o_(U),Lt.init(),It=new Bx(U,Lt),zt=new t_(U,Lt,t,It),Tt=new Fx(U,Lt),zt.reversedDepthBuffer&&p&&Tt.buffers.depth.setReversed(!0),ne=new h_(U),Ct=new bx,Jt=new Ox(U,Lt,Tt,Ct,zt,It,ne),Fe=new n_(T),Ce=new a_(T),R=new gm(U),gt=new j0(U,R),v=new l_(U,R,ne,gt),H=new d_(U,v,R,ne),ht=new u_(U,zt,Jt),ft=new e_(Ct),et=new Sx(T,Fe,Ce,Lt,zt,gt,ft),at=new Gx(T,Ct),tt=new wx,Dt=new Px(Lt),Rt=new K0(T,Fe,Ce,Tt,H,m,h),Mt=new Ux(T,H,zt),Zt=new Hx(U,ne,zt,Tt),vt=new Q0(U,Lt,ne),kt=new c_(U,Lt,ne),ne.programs=et.programs,T.capabilities=zt,T.extensions=Lt,T.properties=Ct,T.renderLists=tt,T.shadowMap=Mt,T.state=Tt,T.info=ne}O();let ut=new Kh(T,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(Q,dt,!1))},this.getSize=function(S){return S.set(Q,dt)},this.setSize=function(S,k,W=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,dt=k,e.width=Math.floor(S*K),e.height=Math.floor(k*K),W===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(Q*K,dt*K).floor()},this.setDrawingBufferSize=function(S,k,W){Q=S,dt=k,K=W,e.width=Math.floor(S*W),e.height=Math.floor(k*W),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,k,W,Y){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,k,W,Y),Tt.viewport(F.copy(At).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,k,W,Y){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,k,W,Y),Tt.scissor(G.copy(Ft).multiplyScalar(K).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){Tt.setScissorTest(le=S)},this.setOpaqueSort=function(S){pt=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,W=!0){let Y=0;if(S){let V=!1;if(z!==null){let lt=z.texture.format;V=lt===Il||lt===Rl||lt===Cl}if(V){let lt=z.texture.type,xt=lt===$n||lt===as||lt===Cr||lt===Ir||lt===wl||lt===El,wt=Rt.getClearColor(),St=Rt.getClearAlpha(),Bt=wt.r,Vt=wt.g,Nt=wt.b;xt?(y[0]=Bt,y[1]=Vt,y[2]=Nt,y[3]=St,U.clearBufferuiv(U.COLOR,0,y)):(w[0]=Bt,w[1]=Vt,w[2]=Nt,w[3]=St,U.clearBufferiv(U.COLOR,0,w))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT),W&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Rt.dispose(),tt.dispose(),Dt.dispose(),Ct.dispose(),Fe.dispose(),Ce.dispose(),H.dispose(),gt.dispose(),Zt.dispose(),et.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ue),ut.removeEventListener("sessionend",Ni),$e.stop()};function mt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let S=ne.autoReset,k=Mt.enabled,W=Mt.autoUpdate,Y=Mt.needsUpdate,V=Mt.type;O(),ne.autoReset=S,Mt.enabled=k,Mt.autoUpdate=W,Mt.needsUpdate=Y,Mt.type=V}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){let k=S.target;k.removeEventListener("dispose",it),Et(k)}function Et(S){Xt(S),Ct.remove(S)}function Xt(S){let k=Ct.get(S).programs;k!==void 0&&(k.forEach(function(W){et.releaseProgram(W)}),S.isShaderMaterial&&et.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,W,Y,V,lt){k===null&&(k=Ut);let xt=V.isMesh&&V.matrixWorld.determinant()<0,wt=fc(S,k,W,Y,V);Tt.setMaterial(Y,xt);let St=W.index,Bt=1;if(Y.wireframe===!0){if(St=v.getWireframeAttribute(W),St===void 0)return;Bt=2}let Vt=W.drawRange,Nt=W.attributes.position,se=Vt.start*Bt,ge=(Vt.start+Vt.count)*Bt;lt!==null&&(se=Math.max(se,lt.start*Bt),ge=Math.min(ge,(lt.start+lt.count)*Bt)),St!==null?(se=Math.max(se,0),ge=Math.min(ge,St.count)):Nt!=null&&(se=Math.max(se,0),ge=Math.min(ge,Nt.count));let be=ge-se;if(be<0||be===1/0)return;gt.setup(V,Y,wt,W,St);let ve,ye=vt;if(St!==null&&(ve=R.get(St),ye=kt,ye.setIndex(ve)),V.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*qe()),ye.setMode(U.LINES)):ye.setMode(U.TRIANGLES);else if(V.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),Tt.setLineWidth(Ot*qe()),V.isLineSegments?ye.setMode(U.LINES):V.isLineLoop?ye.setMode(U.LINE_LOOP):ye.setMode(U.LINE_STRIP)}else V.isPoints?ye.setMode(U.POINTS):V.isSprite&&ye.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))ye.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ot=V._multiDrawStarts,Ee=V._multiDrawCounts,ce=V._multiDrawCount,tn=St?R.get(St).bytesPerElement:1,pi=Ct.get(Y).currentProgram.getUniforms();for(let en=0;en<ce;en++)pi.setValue(U,"_gl_DrawID",en),ye.render(Ot[en]/tn,Ee[en])}else if(V.isInstancedMesh)ye.renderInstances(se,be,V.count);else if(W.isInstancedBufferGeometry){let Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Ot);ye.renderInstances(se,be,Ee)}else ye.render(se,be)};function xe(S,k,W){S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=_n,S.needsUpdate=!0,Oi(S,k,W),S.side=Ci,S.needsUpdate=!0,Oi(S,k,W),S.side=cn):Oi(S,k,W)}this.compile=function(S,k,W=null){W===null&&(W=S),f=Dt.get(W),f.init(k),I.push(f),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();let Y=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let lt=V.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){let wt=lt[xt];xe(wt,W,V),Y.add(wt)}else xe(lt,W,V),Y.add(lt)}),f=I.pop(),Y},this.compileAsync=function(S,k,W=null){let Y=this.compile(S,k,W);return new Promise(V=>{function lt(){if(Y.forEach(function(xt){Ct.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){V(S);return}setTimeout(lt,10)}Lt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let pe=null;function xn(S){pe&&pe(S)}function ue(){$e.stop()}function Ni(){$e.start()}let $e=new Ef;$e.setAnimationLoop(xn),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(S){pe=S,ut.setAnimationLoop(S),S===null?$e.stop():$e.start()},ut.addEventListener("sessionstart",ue),ut.addEventListener("sessionend",Ni),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,k,z),f=Dt.get(S,I.length),f.init(k),I.push(f),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Wt.setFromProjectionMatrix(st,Xn,k.reversedDepth),$=this.localClippingEnabled,fe=ft.init(this.clippingPlanes,$),_=tt.get(S,P.length),_.init(),P.push(_),ut.enabled===!0&&ut.isPresenting===!0){let lt=T.xr.getDepthSensingMesh();lt!==null&&Rn(lt,k,-1/0,T.sortObjects)}Rn(S,k,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(pt,rt),re=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,re&&Rt.addToRenderList(_,S),this.info.render.frame++,fe===!0&&ft.beginShadows();let W=f.state.shadowsArray;Mt.render(W,S,k),fe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,V=_.transmissive;if(f.setupLights(),k.isArrayCamera){let lt=k.cameras;if(V.length>0)for(let xt=0,wt=lt.length;xt<wt;xt++){let St=lt[xt];cs(Y,V,S,St)}re&&Rt.render(S);for(let xt=0,wt=lt.length;xt<wt;xt++){let St=lt[xt];Fi(_,S,St,St.viewport)}}else V.length>0&&cs(Y,V,S,k),re&&Rt.render(S),Fi(_,S,k);z!==null&&L===0&&(Jt.updateMultisampleRenderTarget(z),Jt.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(T,S,k),gt.resetDefaultState(),E=-1,b=null,I.pop(),I.length>0?(f=I[I.length-1],fe===!0&&ft.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function Rn(S,k,W,Y){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Wt.intersectsSprite(S)){Y&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);let xt=H.update(S),wt=S.material;wt.visible&&_.push(S,xt,wt,W,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Wt.intersectsObject(S))){let xt=H.update(S),wt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Gt.copy(xt.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(wt)){let St=xt.groups;for(let Bt=0,Vt=St.length;Bt<Vt;Bt++){let Nt=St[Bt],se=wt[Nt.materialIndex];se&&se.visible&&_.push(S,xt,se,W,Gt.z,Nt)}}else wt.visible&&_.push(S,xt,wt,W,Gt.z,null)}}let lt=S.children;for(let xt=0,wt=lt.length;xt<wt;xt++)Rn(lt[xt],k,W,Y)}function Fi(S,k,W,Y){let V=S.opaque,lt=S.transmissive,xt=S.transparent;f.setupLightsView(W),fe===!0&&ft.setGlobalState(T.clippingPlanes,W),Y&&Tt.viewport(F.copy(Y)),V.length>0&&di(V,k,W),lt.length>0&&di(lt,k,W),xt.length>0&&di(xt,k,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function cs(S,k,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new oi(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Rr:$n,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let lt=f.state.transmissionRenderTarget[Y.id],xt=Y.viewport||F;lt.setSize(xt.z*T.transmissionResolutionScale,xt.w*T.transmissionResolutionScale);let wt=T.getRenderTarget(),St=T.getActiveCubeFace(),Bt=T.getActiveMipmapLevel();T.setRenderTarget(lt),T.getClearColor(Z),nt=T.getClearAlpha(),nt<1&&T.setClearColor(16777215,.5),T.clear(),re&&Rt.render(W);let Vt=T.toneMapping;T.toneMapping=Li;let Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),fe===!0&&ft.setGlobalState(T.clippingPlanes,Y),di(S,W,Y),Jt.updateMultisampleRenderTarget(lt),Jt.updateRenderTargetMipmap(lt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ge=0,be=k.length;ge<be;ge++){let ve=k[ge],ye=ve.object,Ot=ve.geometry,Ee=ve.material,ce=ve.group;if(Ee.side===cn&&ye.layers.test(Y.layers)){let tn=Ee.side;Ee.side=_n,Ee.needsUpdate=!0,Va(ye,W,Y,Ot,Ee,ce),Ee.side=tn,Ee.needsUpdate=!0,se=!0}}se===!0&&(Jt.updateMultisampleRenderTarget(lt),Jt.updateRenderTargetMipmap(lt))}T.setRenderTarget(wt,St,Bt),T.setClearColor(Z,nt),Nt!==void 0&&(Y.viewport=Nt),T.toneMapping=Vt}function di(S,k,W){let Y=k.isScene===!0?k.overrideMaterial:null;for(let V=0,lt=S.length;V<lt;V++){let xt=S[V],wt=xt.object,St=xt.geometry,Bt=xt.group,Vt=xt.material;Vt.allowOverride===!0&&Y!==null&&(Vt=Y),wt.layers.test(W.layers)&&Va(wt,k,W,St,Vt,Bt)}}function Va(S,k,W,Y,V,lt){S.onBeforeRender(T,k,W,Y,V,lt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(T,k,W,Y,S,lt),V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,T.renderBufferDirect(W,k,Y,V,S,lt),V.side=Ci,V.needsUpdate=!0,T.renderBufferDirect(W,k,Y,V,S,lt),V.side=cn):T.renderBufferDirect(W,k,Y,V,S,lt),S.onAfterRender(T,k,W,Y,V,lt)}function Oi(S,k,W){k.isScene!==!0&&(k=Ut);let Y=Ct.get(S),V=f.state.lights,lt=f.state.shadowsArray,xt=V.state.version,wt=et.getParameters(S,V.state,lt,k,W),St=et.getProgramCacheKey(wt),Bt=Y.programs;Y.environment=S.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(S.isMeshStandardMaterial?Ce:Fe).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",it),Bt=new Map,Y.programs=Bt);let Vt=Bt.get(St);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===xt)return un(S,wt),Vt}else wt.uniforms=et.getUniforms(S),S.onBeforeCompile(wt,T),Vt=et.acquireProgram(wt,St),Bt.set(St,Vt),Y.uniforms=wt.uniforms;let Nt=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),un(S,wt),Y.needsLights=Gs(S),Y.lightsStateVersion=xt,Y.needsLights&&(Nt.ambientLightColor.value=V.state.ambient,Nt.lightProbe.value=V.state.probe,Nt.directionalLights.value=V.state.directional,Nt.directionalLightShadows.value=V.state.directionalShadow,Nt.spotLights.value=V.state.spot,Nt.spotLightShadows.value=V.state.spotShadow,Nt.rectAreaLights.value=V.state.rectArea,Nt.ltc_1.value=V.state.rectAreaLTC1,Nt.ltc_2.value=V.state.rectAreaLTC2,Nt.pointLights.value=V.state.point,Nt.pointLightShadows.value=V.state.pointShadow,Nt.hemisphereLights.value=V.state.hemi,Nt.directionalShadowMap.value=V.state.directionalShadowMap,Nt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Nt.spotShadowMap.value=V.state.spotShadowMap,Nt.spotLightMatrix.value=V.state.spotLightMatrix,Nt.spotLightMap.value=V.state.spotLightMap,Nt.pointShadowMap.value=V.state.pointShadowMap,Nt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function vn(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Nr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function un(S,k){let W=Ct.get(S);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function fc(S,k,W,Y,V){k.isScene!==!0&&(k=Ut),Jt.resetTextureUnits();let lt=k.fog,xt=Y.isMeshStandardMaterial?k.environment:null,wt=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Rs,St=(Y.isMeshStandardMaterial?Ce:Fe).get(Y.envMap||xt),Bt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,ge=!!W.morphAttributes.color,be=Li;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(be=T.toneMapping);let ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=ve!==void 0?ve.length:0,Ot=Ct.get(Y),Ee=f.state.lights;if(fe===!0&&($===!0||S!==b)){let Ke=S===b&&Y.id===E;ft.setState(Y,S,Ke)}let ce=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ee.state.version||Ot.outputColorSpace!==wt||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isBatchedMesh&&Ot.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ot.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ot.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ot.instancingMorph===!1&&V.morphTexture!==null||Ot.envMap!==St||Y.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ft.numPlanes||Ot.numIntersection!==ft.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==Vt||Ot.morphTargets!==Nt||Ot.morphNormals!==se||Ot.morphColors!==ge||Ot.toneMapping!==be||Ot.morphTargetsCount!==ye)&&(ce=!0):(ce=!0,Ot.__version=Y.version);let tn=Ot.currentProgram;ce===!0&&(tn=Oi(Y,k,V));let pi=!1,en=!1,Bi=!1,Te=tn.getUniforms(),Ve=Ot.uniforms;if(Tt.useProgram(tn.program)&&(pi=!0,en=!0,Bi=!0),Y.id!==E&&(E=Y.id,en=!0),pi||b!==S){Tt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Te.setValue(U,"projectionMatrix",S.projectionMatrix),Te.setValue(U,"viewMatrix",S.matrixWorldInverse);let Le=Te.map.cameraPosition;Le!==void 0&&Le.setValue(U,J.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&Te.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,en=!0,Bi=!0)}if(V.isSkinnedMesh){Te.setOptional(U,V,"bindMatrix"),Te.setOptional(U,V,"bindMatrixInverse");let Ke=V.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Te.setValue(U,"boneTexture",Ke.boneTexture,Jt))}V.isBatchedMesh&&(Te.setOptional(U,V,"batchingTexture"),Te.setValue(U,"batchingTexture",V._matricesTexture,Jt),Te.setOptional(U,V,"batchingIdTexture"),Te.setValue(U,"batchingIdTexture",V._indirectTexture,Jt),Te.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Te.setValue(U,"batchingColorTexture",V._colorsTexture,Jt));let nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ht.update(V,W,tn),(en||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,Te.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ve.envMap.value=St,Ve.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ve.envMapIntensity.value=k.environmentIntensity),en&&(Te.setValue(U,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&fi(Ve,Bi),lt&&Y.fog===!0&&at.refreshFogUniforms(Ve,lt),at.refreshMaterialUniforms(Ve,Y,K,dt,f.state.transmissionRenderTarget[S.id]),Nr.upload(U,vn(Ot),Ve,Jt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Nr.upload(U,vn(Ot),Ve,Jt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(U,"center",V.center),Te.setValue(U,"modelViewMatrix",V.modelViewMatrix),Te.setValue(U,"normalMatrix",V.normalMatrix),Te.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Ke=Y.uniformsGroups;for(let Le=0,Hs=Ke.length;Le<Hs;Le++){let Pe=Ke[Le];Zt.update(Pe,tn),Zt.bind(Pe,tn)}}return tn}function fi(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Gs(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,k,W){let Y=Ct.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ct.get(S.texture).__webglTexture=k,Ct.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:W,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let W=Ct.get(S);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};let Ga=U.createFramebuffer();this.setRenderTarget=function(S,k=0,W=0){z=S,A=k,L=W;let Y=!0,V=null,lt=!1,xt=!1;if(S){let St=Ct.get(S);if(St.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(St.__webglFramebuffer===void 0)Jt.setupRenderTarget(S);else if(St.__hasExternalTextures)Jt.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Nt=S.depthTexture;if(St.__boundDepthTexture!==Nt){if(Nt!==null&&Ct.has(Nt)&&(S.width!==Nt.image.width||S.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(S)}}let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);let Vt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?V=Vt[k][W]:V=Vt[k],lt=!0):S.samples>0&&Jt.useMultisampledRTT(S)===!1?V=Ct.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[W]:V=Vt,F.copy(S.viewport),G.copy(S.scissor),q=S.scissorTest}else F.copy(At).multiplyScalar(K).floor(),G.copy(Ft).multiplyScalar(K).floor(),q=le;if(W!==0&&(V=Ga),Tt.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&Tt.drawBuffers(S,V),Tt.viewport(F),Tt.scissor(G),Tt.setScissorTest(q),lt){let St=Ct.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,W)}else if(xt){let St=k;for(let Bt=0;Bt<S.textures.length;Bt++){let Vt=Ct.get(S.textures[Bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,W,St)}}else if(S!==null&&W!==0){let St=Ct.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(S,k,W,Y,V,lt,xt,wt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){Tt.bindFramebuffer(U.FRAMEBUFFER,St);try{let Bt=S.textures[wt],Vt=Bt.format,Nt=Bt.type;if(!zt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Y&&W>=0&&W<=S.height-V&&(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt),U.readPixels(k,W,Y,V,It.convert(Vt),It.convert(Nt),lt))}finally{let Bt=z!==null?Ct.get(z).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,k,W,Y,V,lt,xt,wt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(k>=0&&k<=S.width-Y&&W>=0&&W<=S.height-V){Tt.bindFramebuffer(U.FRAMEBUFFER,St);let Bt=S.textures[wt],Vt=Bt.format,Nt=Bt.type;if(!zt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt),U.readPixels(k,W,Y,V,It.convert(Vt),It.convert(Nt),0);let ge=z!==null?Ct.get(z).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,ge);let be=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jd(U,be,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt),U.deleteBuffer(se),U.deleteSync(be),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,W=0){let Y=Math.pow(2,-W),V=Math.floor(S.image.width*Y),lt=Math.floor(S.image.height*Y),xt=k!==null?k.x:0,wt=k!==null?k.y:0;Jt.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,xt,wt,V,lt),Tt.unbindTexture()};let Ha=U.createFramebuffer(),Wa=U.createFramebuffer();this.copyTextureToTexture=function(S,k,W=null,Y=null,V=0,lt=null){lt===null&&(V!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=V,V=0):lt=0);let xt,wt,St,Bt,Vt,Nt,se,ge,be,ve=S.isCompressedTexture?S.mipmaps[lt]:S.image;if(W!==null)xt=W.max.x-W.min.x,wt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,Vt=W.min.y,Nt=W.isBox3?W.min.z:0;else{let nn=Math.pow(2,-V);xt=Math.floor(ve.width*nn),wt=Math.floor(ve.height*nn),S.isDataArrayTexture?St=ve.depth:S.isData3DTexture?St=Math.floor(ve.depth*nn):St=1,Bt=0,Vt=0,Nt=0}Y!==null?(se=Y.x,ge=Y.y,be=Y.z):(se=0,ge=0,be=0);let ye=It.convert(k.format),Ot=It.convert(k.type),Ee;k.isData3DTexture?(Jt.setTexture3D(k,0),Ee=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Jt.setTexture2DArray(k,0),Ee=U.TEXTURE_2D_ARRAY):(Jt.setTexture2D(k,0),Ee=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let ce=U.getParameter(U.UNPACK_ROW_LENGTH),tn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pi=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),Bi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt);let Te=S.isDataArrayTexture||S.isData3DTexture,Ve=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let nn=Ct.get(S),Ke=Ct.get(k),Le=Ct.get(nn.__renderTarget),Hs=Ct.get(Ke.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Le.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Pe=0;Pe<St;Pe++)Te&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(S).__webglTexture,V,Nt+Pe),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(k).__webglTexture,lt,be+Pe)),U.blitFramebuffer(Bt,Vt,xt,wt,se,ge,xt,wt,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Ct.has(S)){let nn=Ct.get(S),Ke=Ct.get(k);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Ha),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wa);for(let Le=0;Le<St;Le++)Te?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nn.__webglTexture,V,Nt+Le):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nn.__webglTexture,V),Ve?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ke.__webglTexture,lt,be+Le):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ke.__webglTexture,lt),V!==0?U.blitFramebuffer(Bt,Vt,xt,wt,se,ge,xt,wt,U.COLOR_BUFFER_BIT,U.NEAREST):Ve?U.copyTexSubImage3D(Ee,lt,se,ge,be+Le,Bt,Vt,xt,wt):U.copyTexSubImage2D(Ee,lt,se,ge,Bt,Vt,xt,wt);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ve?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Ee,lt,se,ge,be,xt,wt,St,ye,Ot,ve.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,lt,se,ge,be,xt,wt,St,ye,ve.data):U.texSubImage3D(Ee,lt,se,ge,be,xt,wt,St,ye,Ot,ve):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,lt,se,ge,xt,wt,ye,Ot,ve.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,lt,se,ge,ve.width,ve.height,ye,ve.data):U.texSubImage2D(U.TEXTURE_2D,lt,se,ge,xt,wt,ye,Ot,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pi),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bi),lt===0&&k.generateMipmaps&&U.generateMipmap(Ee),Tt.unbindTexture()},this.initRenderTarget=function(S){Ct.get(S).__webglFramebuffer===void 0&&Jt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Jt.setTextureCube(S,0):S.isData3DTexture?Jt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Jt.setTexture2DArray(S,0):Jt.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){A=0,L=0,z=null,Tt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};Kt.tonemapping_pars_fragment=Kt.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }","vec3 CustomToneMapping( vec3 color ) { vec3 c=color*toneMappingExposure;c=mix(c,.85+.15*(1.-exp(-(c-.85)/.15)),step(.85,c));float l=dot(c,vec3(.2126,.7152,.0722));return clamp(c+mix(vec3(-.008,0.,.016)*smoothstep(0.,.3,l),vec3(.008,.004,-.006),l),0.,1.); }");var Qh={leaf:"#2ebe6a",coral:"#f2534a",sun:"#ffc83d",ink:"#1c2744"},Sn=.55,ls=[Math.cos(Sn),-Math.sin(Sn)],ui=[Math.sin(Sn),Math.cos(Sn)],os=(i,t)=>[i*ls[0]+t*ui[0],i*ls[1]+t*ui[1]],Ui=(i,t)=>[i*ls[0]+t*ls[1],i*ui[0]+t*ui[1]],Uf=2.45,Xx=.42,dc=.22,tu=[0,.08,.16,.36,.6,.88,1.2],Qe={s:[-20,20],t:[-11,12]},Or=[Math.cos(dc),-Math.sin(dc)],Pf=[Math.sin(dc),Math.cos(dc)],Nf=i=>{let t=Math.max(0,Math.min(6,Math.floor(i))),e=Math.min(6,t+1),n=Math.max(0,Math.min(1,i-t));return tu[t]+(tu[e]-tu[t])*n},qx=Array.from({length:37},(i,t)=>{let e=(t-12)/2,n=(e-3)*Uf,s=t%2?Xx*(Math.floor(e)&1?-1:1):0;return[...os(n*Or[0]+s*Pf[0],n*Or[1]+s*Pf[1]),.35+Nf(e)]}),Yx={bino:[0,3,-.2],teo:[6,-2.6,.3]},Lf=2.3,Zx=.45,Df=1.55,uc=.09,Jx=i=>.22+.24*Math.sqrt(i),ke=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};window.Bosque={create(i,{onSelect:t,onError:e,onView:n=()=>{},onFrame:s=()=>{},onWalk:r=()=>{}}){let a=new Ps,o=new Us(-6,6,4,-4,.1,80),h=new cc({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,Math.min(innerWidth,innerHeight)<600?1.5:2)),h.toneMapping=yl,h.info.autoReset=!1;let c=h.domElement;c.style.removeProperty("display"),c.setAttribute("role","img"),c.setAttribute("aria-label","Bosque em tr\xEAs dimens\xF5es com sete paradas numa trilha. Use tamb\xE9m a lista de paradas."),i.prepend(c),a.add(new Ia("#fffdf9","#245b39",1.8));let u=new Pa("#fff1d0",2.2);u.position.set(-4,8,5),a.add(u);let d={uT:{value:0},uAmp:{value:0},uGust:{value:new we(0,0,0,9)},uBloom:{value:new we(0,0,0,9)},uCloud:{value:[0,1,2].map(()=>new B(0,-99,1))},uLake:{value:new te(0,-99)},uFog:{value:new Yt("#dfe8e4")}},p=`uniform float uT,uAmp,uK;uniform vec4 uGust,uBloom;varying vec3 vWorld;const vec2 WD=vec2(.85,-.52);
vec2 windAt(vec3 p,float h){float b=.5+.5*sin(dot(p.xz,WD)*.8-uT*1.7);vec2 g=p.xz-uGust.xy;float d=length(g),gu=uGust.z*exp(-d*d*.25)*(.55+.45*sin(d*2.4-uGust.w*6.));
 return (WD*uAmp*(.25+.75*b*b+.18*sin(uT*2.9+p.x*1.9+p.z*1.3))+(d>.001?g/d:WD)*gu)*h*uK;}
`,m=`uniform float uT;uniform vec3 uCloud[3],uFog;uniform vec2 uLake;varying vec3 vWorld;
float cloudShade(vec2 p){float s=1.;for(int i=0;i<3;i++){vec2 q=(p-uCloud[i].xy)/uCloud[i].z;s-=.14*(1.-smoothstep(.45,1.,length(q*vec2(1.,1.35))));}return s;}
vec3 glint(vec3 p){float a=sin(dot(p.xz,vec2(.5,.866))*9.-uT*2.4+sin(dot(p.xz,vec2(.866,-.5))*3.7+uT*.8)*1.6);
 if(length(p.xz-uLake)<1.2)a=sin(dot(p.xz,vec2(.8,.6))*8.+uT*1.2)*sin(dot(p.xz,vec2(-.6,.8))*7.-uT*.9)*1.15;return vec3(.2,.24,.28)*smoothstep(.8,1.,a);}
`,y={wind:"attribute float aGround;",bloom:"attribute float aGround;",sway:"attribute float aSway;",critter:"attribute float aWing;attribute vec3 aFly;",particle:"attribute float aGlow;varying float vGlow;"},w={bloom:"{vec3 ip=instanceMatrix[3].xyz;float k=clamp((uBloom.w-length(ip.xz-uBloom.xy)*.25)/.7,0.,1.);transformed*=1.+uBloom.z*.9*sin(k*3.14159);}",flag:"transformed.z+=sin(position.x*21.-uT*6.+float(gl_InstanceID)*1.9)*.035*(position.x+.15)/.3*uAmp;",critter:"{float f=sin(uT*aFly.z+aFly.y)*aFly.x;transformed.y+=abs(aWing)*f*.45;transformed.z*=1.-abs(aWing)*abs(f)*.3;}",particle:"vGlow=aGlow;"},_={wind:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",bloom:"wp.xz+=windAt(wp.xyz,max(0.,wp.y-aGround));",sway:"wp.xyz+=vec3(WD.x,.5,WD.y)*aSway*uAmp*uK*sin(uT*3.3+wp.x*7.+wp.z*5.);"},f={water:"outgoingLight+=glint(vWorld);","ground-water":"outgoingLight+=glint(vWorld)*step(vWorld.y,.2);",cloud:"outgoingLight=mix(outgoingLight/cloudShade(vWorld.xz),diffuseColor.rgb,.55);",glow:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.1,.65);",particle:"outgoingLight=mix(outgoingLight,diffuseColor.rgb*1.15,vGlow*.8);"},P=`varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};
void RE_Direct_Lambert(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
 float w=floor((dot(geometryNormal,directLight.direction)*.5+.5)*4.+.5)/4.;reflectedLight.directDiffuse+=mix(directLight.color*vec3(.3,.34,.52),directLight.color,w)*BRDF_Lambert(material.diffuseColor);}
void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,I="{float fd=clamp((-vViewPosition.z-14.5)/9.,0.,1.);outgoingLight=mix(outgoingLight,uFog,max(fd*fd*.5,(1.-smoothstep(.1,.5,vWorld.y))*.14));}";function T(l,g="",x=1){return l.onBeforeCompile=M=>{Object.assign(M.uniforms,d,{uK:{value:x}}),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
`+p+(y[g]||"")).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(w[g]||"")).replace("#include <project_vertex>",`vec4 wp=vec4(transformed,1.);
#ifdef USE_INSTANCING
wp=instanceMatrix*wp;
#endif
wp=modelMatrix*wp;${_[g]||""}vWorld=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
`+m+(g==="particle"?"varying float vGlow;":"")).replace("#include <lights_lambert_pars_fragment>",P).replace("#include <opaque_fragment>","outgoingLight*=cloudShade(vWorld.xz);"+(f[g]||"")+I+`
#include <opaque_fragment>`)},l.customProgramCacheKey=()=>"vivo-"+g,l}let D=(l,g={})=>T(new Ls({color:l,flatShading:!0,...g})),A={grass:"#69ae72",light:"#90be7c",high:"#51925d",earth:"#2b6946",rock:"#9b9a77",wood:"#8e603b",plank:"#bb8c52",leaf:"#1d6b49",leaf2:"#38935b",water:"#3a6690",path:"#fff5de",ivory:"#fffdf9",coral:"#f2534a",coralDeep:"#d63c38",sun:"#ffc83d",ink:"#1c2744"},L=Object.fromEntries(Object.entries(A).map(([l,g])=>[l,D(g)])),z=new ts(1,1,1),E=new Er(.6,0),b=new gn(.34,.34,.62,3);function F(l,g=.55,x=.7){let M=l.attributes.position,C=new Float32Array(M.count*3);l.computeBoundingBox();let{min:N,max:X}=l.boundingBox;for(let j=0;j<M.count;j++)C.fill(g+(1-g)*jn.smoothstep(M.getY(j),N.y,N.y+(X.y-N.y)*x),j*3,j*3+3);return l.setAttribute("color",new Be(C,3)),l}let G=new Map,q=new Ne,Z=0,nt=null,Q=0,dt=new Map,K=l=>(dt.has(l)||(l.computeBoundingBox(),dt.set(l,l.boundingBox)),dt.get(l));function pt(l,g,x,M,C,N=1,X=1,j=1,ct=0,yt=0,Ht=0){let Qt=l.uuid+g.uuid,he=[x,M+Z,C,N,X,j,Ht,ct,yt,Q,nt?.35+Z:null];G.has(Qt)||G.set(Qt,{g:l,m:g,items:[]}),G.get(Qt).items.push(he),nt&&nt.push(K(l).clone().applyMatrix4(At(he)))}function rt(l,g,x,M,C,N,X=L.wood,j=0,ct=0,yt=0){pt(z,X,l,g,x,M,C,N,j,ct,yt)}let At=([l,g,x,M,C,N,X,j,ct])=>(q.position.set(l,g,x),q.scale.set(M,C,N),q.rotation.set(X,j,ct),q.updateMatrix(),q.matrix);function Ft(l,g,x,M,C){let N=new ln(g,x,Math.max(1,M.length));return N.name=l,N.count=M.length,N.userData.items=M,M.forEach((X,j)=>{N.setMatrixAt(j,At(X)),C&&N.setColorAt(j,new Yt(X[9]))}),N.frustumCulled=!1,a.add(N),N}function le(l,g,x="wind",M=C=>C[10]){return l.geometry.setAttribute("aGround",new Pi(Float32Array.from(l.userData.items,M),1)),T(l.material,x,g),l}let Wt=new wa(qx.map(([l,g,x])=>new B(l,x,g)),!1,"centripetal");Wt.arcLengthDivisions=3600;let fe=Wt.getLengths(3600),$=[0,1,2,3,4,5,6].map(l=>fe[(l+6)*200]/fe[3600]),st=Array.from({length:601},(l,g)=>Wt.getPointAt(g/600)),J=$.map((l,g)=>{let x=Wt.getPointAt(l),M=Wt.getTangentAt(l);return{index:g,u:l,x:x.x,y:x.y,z:x.z,side:new B(-M.z,0,M.x).normalize()}}),Gt=[],Ut=$[6]-$[0],re=(l,g)=>{let x=1e9,M=0;for(let C=0;C<st.length;C+=2){let N=Math.hypot(st[C].x-l,st[C].z-g);N<x&&(x=N,M=C)}return{d:x,p:st[M],i:M}},qe=st.map((l,g)=>{let x=st[Math.max(0,g-1)],M=st[Math.min(600,g+1)];return .005+.6*Math.abs(M.y-x.y)/Math.hypot(M.x-x.x,M.z-x.z)}),U=(l,g,x)=>Ui(l,g)[1]<Ui(x.x,x.z)[1],oe=[.5,Math.sqrt(3)/2],Lt=[Math.sqrt(3)/2,-.5],zt=J[2].x*Lt[0]+J[2].z*Lt[1],Tt=(l,g)=>Math.abs(l*Lt[0]+g*Lt[1]-zt),ne=Object.fromEntries(Object.entries(Yx).map(([l,[g,x,M]])=>{let C=Wt.getPointAt($[g]),[N,X]=Ui(C.x,C.z),[j,ct]=os(N+M,X-x);return[l,new B(j,.35,ct)]}));ne.pipa=new B(J[2].x-oe[0]*Lf,.35,J[2].z-oe[1]*Lf);let Ct=["bino","pipa","teo"];for(let l of Ct){let g=ne[l];delete ne[l],ne[l]=g}let Jt=[...J,...Object.values(ne)],[Fe,Ce]=Ui(J[0].x,J[0].z),[R,v]=os(Fe-2.4,Ce-2.7),H=J[0].y+.48,et=(l,g)=>Math.hypot(l-R,g-v)<1.05,at=(l,g,x,M)=>{let C=J[l],N=Wt.getTangentAt(C.u),X=Math.atan2(-N.z,N.x);return{x:C.x+g*Math.cos(X)+x*Math.sin(X),z:C.z-g*Math.sin(X)+x*Math.cos(X),r:M,y:C.y}},tt=[at(1,.35,-1.75,1.7),at(6,-.6,-1.2,1.45)],Dt=Math.sqrt(3)*.58,ft=(zt-.87*(Math.round(zt/.87-.5)+.5))/Lt[0],Mt=[],Rt=new Map,ht=(l,g)=>{if(Tt(l,g)<.5)return .13;if(et(l,g))return H;let x=tt.find(ct=>Math.hypot(l-ct.x,g-ct.z)<ct.r);if(x)return x.y;let{d:M,p:C,i:N}=re(l,g),X=C.y;if(M<1)return X-qe[N];if(U(l,g,C))return M<1.9?X:M<4.6?X+.6:X+1.25;let j=M<1.9?X:Math.max(.35,X-.55*Math.ceil((M-1.9)/1.5));return M>5&&ke(Math.round(l),Math.round(g))<.3?Math.max(j,.95):j};for(let l=-40;l<=40;l++)for(let g=-40;g<=40;g++){let x=Dt*(g+l/2)+ft,M=.87*l,[C,N]=Ui(x,M);if(C<Qe.s[0]-1||C>Qe.s[1]+1||N<Qe.t[0]-1||N>Qe.t[1]+1)continue;let X={q:g,r:l,x,z:M,s:C,t:N,height:ht(x,M)};Mt.push(X),Rt.set(g+","+l,X)}let vt=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],kt=[],It=[],gt=[],Zt=(l,g)=>Mt.reduce((x,M)=>(M.x-l)**2+(M.z-g)**2<(x.x-l)**2+(x.z-g)**2?M:x),O=($[1]-$[0])/2,ut=l=>l<$[1]+O?0:l<$[3]+O?1:l<$[4]+O?2:3,mt=[];for(let l of Mt){let g=Math.min(...vt.map(([j,ct])=>Rt.get(l.q+j+","+(l.r+ct))?.height??0)),{d:x,p:M,i:C}=re(l.x,l.z),N=l.height-M.y;l.u=C/600,l.land=ut(l.u),l.front=!U(l.x,l.z,M),l.d=x,l.field=l.land===2&&l.front&&x>1.55&&x<4.3&&Math.hypot(l.x-J[4].x,l.z-J[4].z)>1.4&&l.height>.2,l.field&&mt.push(l);let X=l.height<.2?A.water:l.field?"#d6c35f":N>1?A.high:N>.4||N<-.3&&l.height>.5?A.grass:A.light;l.lake=et(l.x,l.z),(l.lake?gt:kt).push([l.x,l.height,l.z,1,1,1,0,0,0,l.lake?A.water:X]),g<l.height-.01&&It.push([l.x,l.height/2,l.z,1,l.height,1,0,0,0])}let bt=new Ta(.58,6).rotateX(-Math.PI/2).rotateY(Math.PI/6),ot=new gn(.58,.58,1,6,1,!0);T(Ft("hexagonos-topos",bt,D("#ffffff"),kt,!0).material,"ground-water"),Ft("hexagonos-colunas",F(ot,.5,1),D(A.earth,{vertexColors:!0}),It),d.uLake.value.set(R,v);let it=new Ie(new Ln(400,400).rotateX(-Math.PI/2),L.earth);it.position.y=0,a.add(it);let Et=[],Xt=[];for(let l=0;l<600;l++){let g=st[l],x=st[l+1];if(Tt((g.x+x.x)/2,(g.z+x.z)/2)<.95)continue;let M=Wt.getTangentAt(l/600),C=Wt.getTangentAt((l+1)/600),N=.43/Math.hypot(M.x,M.z),X=.43/Math.hypot(C.x,C.z),j=g.y+.007,ct=x.y+.007,yt=[g.x-M.z*N,j,g.z+M.x*N],Ht=[g.x+M.z*N,j,g.z-M.x*N],Qt=[x.x-C.z*X,ct,x.z+C.x*X],he=[x.x+C.z*X,ct,x.z-C.x*X];Et.push(...yt,...Qt,...Ht,...Ht,...Qt,...he);for(let _e=0;_e<6;_e++)Xt.push(0,1,0)}let xe=new ze;xe.setAttribute("position",new de(Et,3)),xe.setAttribute("normal",new de(Xt,3));let pe=new Ie(xe,L.path);pe.name="trilha-cont\xEDnua",a.add(pe);let xn=(l,g=Math.atan2(-Wt.getTangentAt(l.u).z,Wt.getTangentAt(l.u).x))=>({ry:g,at:(x,M)=>[l.x+x*Math.cos(g)+M*Math.sin(g),l.z-x*Math.sin(g)+M*Math.cos(g)]}),ue={},Ni={},$e=(l,g)=>{Z=l<0?0:J[l].y-.35,nt=g?Ni[g]??(Ni[g]=[]):null},Rn=J.map(()=>[]),Fi=[],cs,di;{let l=J[2],{ry:g,at:x}=xn(l);ue.ponte=[l.x,l.z],$e(-1,"ponte");for(let M=-10;M<=10;M++){let[C,N]=x(M*.125,0);rt(C,re(C,N).p.y-.035,N,.12,.07,1.05,L.plank,g)}$e(2,"ponte");for(let M of[-.6,.6]){let[C,N]=x(0,M);rt(C,.77,N,2.6,.065,.065,L.wood,g);for(let X of[-1.2,-.4,.4,1.2]){let[j,ct]=x(X,M);rt(j,.51,ct,.075,.65,.075,L.wood,g)}}for(let M of[-1.05,1.05]){let[C,N]=x(M,0);rt(C,-.05,N,.12,.75,.7,L.wood,g)}for(let M of[-.75,.5]){let[C,N]=x(M,-.6);Rn[2].push([C,.81+Z,N,g+(M<0?0:Math.PI)])}}function Va(l,g,x){let M=Math.cos(x),C=Math.sin(x);rt(l,.58,g,.85,.09,.35,L.plank,x),rt(l-.16*C,.86,g-.16*M,.85,.29,.07,L.plank,x);for(let N of[-.3,.3])rt(l+N*M,.43,g-N*C,.07,.3,.25,L.wood,x)}{$e(0,"banco");let l=J[0],{ry:g,at:x}=xn(l),[M,C]=x(-.75,-.95);Va(M,C,g),ue.banco=[M,C];for(let j of[-.22,.2])Rn[0].push([M+j*Math.cos(g)-.16*Math.sin(g),1.01+Z,C-j*Math.sin(g)-.16*Math.cos(g),g+(j<0?Math.PI:0)]);let[N,X]=x(.75,-.55);rt(N,.63,X,.045,.55,.045),pt(new gn(.16,.16,.03,8),L.ivory,N,.94,X,1,1,1,0,0,Math.PI/2),pt(new es(.07,.22,3),L.sun,N,.94,X+.02)}$e(1,"moinho");let{at:Oi}=xn(J[1]),[vn,un]=Oi(.35,-1.75);ue.moinho=[vn,un],rt(vn,.9,un,.9,1.1,.8,L.ivory),rt(vn,.42,un,.98,.16,.88,L.rock);for(let[l,g]of[[un-.28,-.62],[un+.28,.62]])rt(vn,1.56,l,1.12,.08,.68,L.coral,0,0,g);rt(vn,1.09,un+.411,.25,.38,.025,L.ink),rt(vn+.27,.67,un+.416,.22,.52,.03),rt(vn-.33,1.75,un-.15,.15,.45,.17,L.ivory),cs=[vn-.33,2+Z,un-.15];{let[l,g]=Oi(.1,-1),[x,M]=Oi(.55,-.95);Rn[1].push([l,J[1].y+.02,g,Sn],[x,J[1].y+.02,M,Sn+Math.PI])}let fc={x:[vn-.62,vn+1.05],z:[un-.5,un+.6],y:[.35+Z,2.05+Z]},fi=new En;fi.name="roda-do-moinho",fi.position.set(vn+.5,.63+Z,un+.18),a.add(fi);let Gs=new ze,Ga=[],Ha=[];for(let l=0;l<12;l++){let g=l/12*Math.PI*2;Ga.push(0,Math.cos(g)*.43,Math.sin(g)*.43,0,Math.cos(g)*.32,Math.sin(g)*.32);let x=l*2,M=(x+2)%24;Ha.push(x,M,x+1,x+1,M,M+1)}Gs.setAttribute("position",new de(Ga,3)),Gs.setIndex(Ha),Gs.computeVertexNormals(),fi.add(new Ie(Gs,D(A.wood,{side:cn})));let Wa=new ln(z,L.plank,6);for(let l=0;l<6;l++)q.position.set(0,0,0),q.scale.set(.14,.84,.055),q.rotation.set(l*Math.PI/3,0,0),q.updateMatrix(),Wa.setMatrixAt(l,q.matrix);fi.add(Wa),$e(6,"mirante");let[S,k]=xn(J[6]).at(-.6,-1.2),W={x:S,z:k};ue.mirante=[W.x,W.z];for(let l of[-.58,.58])for(let g of[-.52,.52])rt(W.x+l,.19,W.z+g,.09,.55,.09);for(let l=-4;l<=4;l++)rt(W.x+l*.14,.321,W.z,.13,.065,1.3,L.plank);for(let l of[-.56,.56])rt(W.x+.66,.58,W.z+l,.07,.5,.07),rt(W.x+.66,.84,W.z,.07,.07,1.2);Rn[6].push([W.x+.66,.885+Z,W.z-.3,Sn],[W.x+.66,.885+Z,W.z+.28,Sn+Math.PI]);let Y=W.x+.35,V=W.z-.15;rt(Y,.655,V,.09,.55,.09),rt(Y,.91,V,.48,.08,.14,L.ink);let lt=new gn(.14,.16,.45,8),xt=new gn(.1,.1,.02,8);for(let l of[-.16,.16])pt(lt,L.ink,Y,.95,V+l,1,1,1,0,Math.PI/2),pt(xt,L.sun,Y+.23,.95,V+l,1,1,1,0,Math.PI/2);let wt=(l,g)=>[l.x-l.side.x*g,l.z-l.side.z*g];{$e(3,"placa");let[l,g]=wt(J[3],.78);ue.placa=[l,g];for(let x of[-.22,.22])rt(l+x,.62,g,.06,.6,.06);rt(l,.84,g,.62,.36,.05,L.ivory);for(let x of[-.07,.05])rt(l,.84+x,g+.03,.42,.035,.02,L.ink);for(let[x,M,C,N]of[[-.13,.97,.17,L.sun],[.15,.95,.13,L.coral]]){let X=M+Z;Q=(j,ct)=>Math.max(0,Math.min(1,(X-ct)/C)),rt(l+x,M-C/2,g+.04,.13,C,.012,N)}Q=0,Rn[3].push([l-.2,1.03+Z,g,Sn],[l+.18,1.03+Z,g,Sn+Math.PI])}{$e(4,"bifurcacao");let l=J[4],[g,x]=wt(l,.78);ue.bifurcacao=[g,x],rt(g,.75,x,.06,.8,.06),[[L.coral,.25,1.05],[L.sun,-.6,.9],[L.leaf2,1.3,.75]].forEach(([M,C,N])=>rt(g+Math.cos(C)*.16,N,x-Math.sin(C)*.16,.38,.1,.05,M,C)),rt(g,1.2,x,.03,.16,.03),di=[g,1.29+Z,x+.03];for(let M of[.7,-.5]){let C=new B(1,0,0).applyAxisAngle(new B(0,1,0),Math.atan2(-Wt.getTangentAt(l.u).z,Wt.getTangentAt(l.u).x)+M);rt(l.x+C.x*.75,.358,l.z+C.z*.75,.7,.012,.34,L.path,Math.atan2(-C.z,C.x))}}{$e(5,"acampamento");let[l,g]=wt(J[5],.8),x=.3+Z;ue.acampamento=[l,g],Q=(M,C)=>Math.max(0,Math.min(1,(C-x)/.66))*.7,pt(b,L.sun,l,.62,g,1,1,1,.4,Math.PI/2),Q=0,rt(l+.32,.56,g-.12,.05,.36,.05),pt(new gn(.09,.12,.08,6),L.rock,l-.1,.4,g+.5),rt(l-.55,.41,g+.42,.42,.1,.12,L.wood,.7),rt(l+.22,.41,g+.8,.42,.1,.12,L.wood,-.5);for(let[M,C]of[[.62,-.2],[-.6,-.12]])rt(l+M,.52,g+C,.04,.5,.04),Fi.push([l+M,.82+Z,g+C]);Rn[5].push([l-.55,.47+Z,g+.42,.7],[l+.22,.47+Z,g+.8,Math.PI-.5])}$e(-1);let St=Object.values(ue),Bt=[],Vt=[],Nt=[],se=[],ge=[],be=[],ve=[],ye=[[A.leaf2,A.leaf],[A.leaf,A.leaf2],[A.leaf2,A.leaf],[A.leaf,A.earth]],Ot=[A.sun,"#f0a32e","#d98a2b"],Ee=[A.leaf2,A.high,"#5c9a52"],ce=[[.12,.86],[.4,.9],[.1,.45],[.72,.86]];for(let l of Mt){let{x:g,z:x,height:M,d:C,front:N,land:X}=l;if(M<.2||Tt(g,x)<1.3||l.field||Math.hypot(g-R,x-v)<1.6)continue;let j=ke(l.q,l.r),ct=ke(l.r+7,l.q-3),yt=()=>ve.push([g+(ct-.5)*.4,M+.12,x+(j-.5)*.4,.8+.4*ct,.6,.8+.4*j,0,j*6,0,Ee[Math.floor(ct*2.999)],M]);if(C<1.35||St.some(([je,Ms])=>Math.hypot(g-je,x-Ms)<1.15)||Jt.some(je=>{let Ms=g-je.x,yo=x-je.z,ia=Math.hypot(Ms,yo);return ia<1.25||ia<2.7&&Ms*ui[0]+yo*ui[1]>0}))continue;if(N&&C<3.4){j<.12?be.push([g+.1,M+.18,x,.9,.7,1.1,0,j*6,0]):j>.68&&yt();continue}if(j>(N?.8:C<2.6?.5:.85)){ct<.3?be.push([g+.1,M+.16,x,.8,.6,1,0,j*6,0]):ct>.55&&yt();continue}let Ht=(ct-.5)*.35,Qt=(ke(l.q*3,l.r*5)-.5)*.35,he=g+Ht,_e=x+Qt,Pt=.75+ct*.35,[Vi,ys]=ye[X],tr=ct<ce[X][0],er=!tr&&ct>ce[X][1];if(Bt.push([he,M+.4*Pt,_e,1,.8*Pt,1,0,0,0,0,M]),tr)Vt.push([he,M+1.05*Pt,_e,Pt,Pt,Pt,0,j*6,0,Vi,M]),Vt.push([he,M+1.5*Pt,_e,Pt*.64,Pt*.64,Pt*.64,0,j*6+.3,0,ys,M]);else if(er){let je=Math.floor(j*2.999);se.push([he,M+1.1*Pt,_e,Pt*.95,Pt*1.15,Pt*.95,0,j*6,0,Ot[je],M]),ge.push([he-.2*Pt,M+.85*Pt,_e+.12,Pt*.6,Pt*.62,Pt*.6,0,j*6,0,Ot[(je+1)%3],M])}else Nt.push([he,M+1.1*Pt,_e,Pt,Pt*1.15,Pt,0,j*6,0,Vi,M]),ct>.5&&ge.push([he+.22*Pt,M+.82*Pt,_e+.1,Pt*.62,Pt*.66,Pt*.62,0,j*6,0,ys,M])}for(let l of st.filter((g,x)=>x%24===0)){if(Tt(l.x,l.z)<1.4)continue;let[g,x]=Ui(l.x,l.z),[M,C]=os(g+.2,x+.75),[N,X]=os(g-.3,x-.6);be.push([M,Zt(M,C).height+.06,C,.28,.2,.3,0,l.x,0]),pt(E,L.ivory,N,Zt(N,X).height+.04,X,.06,.045,.06)}let tn=new gn(.07,.1,1,3,1,!0),pi=new Ar(.62,0),en=new es(.6,1.4,6,1,!0),Bi=new ns(.62,0),Te=new ns(.4,0),Ve={vertexColors:!0};[tn,en,Bi,pi].forEach(l=>F(l)),F(Te,.6),L.rock.vertexColors=!0,le(Ft("arvores-troncos",tn,D(A.wood,Ve),Bt),.035),le(Ft("arvores-copas-pinheiro",en,D("#ffffff",Ve),Vt,!0),.035),le(Ft("arvores-copas-redondas",Bi,D("#ffffff",Ve),Nt,!0),.035),le(Ft("arvores-copas-outono",F(new Er(.6,0)),D("#ffffff",Ve),se,!0),.035),le(Ft("arvores-copas-menores",pi,D("#ffffff",Ve),ge,!0),.035),Ft("pedras",Te,L.rock,be),le(Ft("arbustos",F(new ns(.3,0)),D("#ffffff",Ve),ve,!0),.15);let nn=[],Ke=Wt.getLength(),Le=$[1]-$[0];for(let[l,g,x]of[[$[0]-.3*Le,$[1]-.2*Le,1.25],[$[4]-.6*Le,$[4]+.5*Le,1.3],[$[4]+.6*Le,$[6]+.45*Le,1.65]]){let M=[],C=()=>{M.length>1&&M.forEach((N,X)=>{if(nn.push([N.x,N.h+.17,N.z,.06,.34,.06,0,0,0]),X){let j=M[X-1],ct=N.x-j.x,yt=N.z-j.z;for(let Ht of[.13,.27])nn.push([(N.x+j.x)/2,N.h+Ht,(N.z+j.z)/2,Math.hypot(ct,yt),.035,.035,0,Math.atan2(-yt,ct),0])}}),M=[]};for(let N=l;N<=g;N+=.55/Ke){let X=Wt.getPointAt(N),j=Wt.getTangentAt(N),ct=new B(-j.z,0,j.x).normalize();ct.x*ui[0]+ct.z*ui[1]<0&&ct.negate();let yt=X.x+ct.x*x,Ht=X.z+ct.z*x,Qt=Zt(yt,Ht);if(Jt.some(he=>Math.hypot(yt-he.x,Ht-he.z)<1.35)||Tt(yt,Ht)<1.2||Math.hypot(yt-R,Ht-v)<1.5||Qt.height<.2){C();continue}M.length&&Math.abs(M.at(-1).h-Qt.height)>=.05&&C(),M.push({x:yt,z:Ht,h:Qt.height})}C()}Ft("cercas",z,L.wood,nn);let Hs={mapear:{},analisar:{},priorizar:{},agir:{}},Pe=(l,g,x,M=null)=>{Hs[l][g]={mesh:M,count:x.length,at:x.map(([C,N])=>[+C.toFixed(2),+N.toFixed(2)])}},Br=l=>l.map(([g,,x])=>[g,x]),Ws=[],Ff=[A.ivory,A.sun,"#ffb4a8"];for(let l of Mt)if(!(l.land!==0||l.u>$[1]+.85*O||l.height<.2||l.d<1.1||l.d>3.8||Math.hypot(l.x-R,l.z-v)<1.6||St.some(([g,x])=>Math.hypot(l.x-g,l.z-x)<.9)||Jt.some(g=>Math.hypot(l.x-g.x,l.z-g.z)<.8)))for(let g=0;g<4;g++){let x=ke(l.q+g,l.r-g)*6.28,M=.12+.32*ke(l.r+g,l.q);ke(l.q*7+g,l.r)<.5&&Ws.push([l.x+Math.cos(x)*M,l.height+.05,l.z+Math.sin(x)*M,1,.7,1,0,x,0,Ff[g%3],l.height])}for(let l=0;l<7;l++){let g=l/7*Math.PI*2+.4,x=R+Math.cos(g)*.9,M=v+Math.sin(g)*.9;for(let C=0;C<3;C++)rt(x+C*.06,H+.15+C%2*.04,M,.025,.3+C%2*.08,.025,L.high,0,(C-1)*.16)}T(Ft("cenario-lago",bt,D("#ffffff"),gt,!0).material,"water"),le(Ft("cenario-flores",new Ar(.1,0),D("#ffffff"),Ws,!0),.5,"bloom"),Pe("mapear","banco",[ue.banco]),Pe("mapear","moinho",[ue.moinho]),Pe("mapear","flores",Br(Ws),"cenario-flores"),Pe("mapear","lago",Br(gt),"cenario-lago");let pc=[];for(let l=0;l<30;l++){let g=-3.4+l*.24,x=(ke(l,3)-.5)*.7;Math.abs(g)<1.3||ke(3,l)<.3||pc.push([J[2].x+oe[0]*g+Lt[0]*x,.15,J[2].z+oe[1]*g+Lt[1]*x,.5+.4*ke(l,5),.3,.45+.4*ke(5,l),0,l,0,ke(l,l)<.5?A.rock:"#c8c2a4"])}Ft("cenario-seixos",Te,D("#ffffff",{vertexColors:!0}),pc,!0),Pe("analisar","ponte",[ue.ponte]),Pe("analisar","quadro de avisos",[ue.placa]),Pe("analisar","pedras do rio",Br(pc),"cenario-seixos");let eu=[],mc=[];for(let l of mt)for(let g=0;g<9;g++){let x=ke(l.q+g*3,l.r)*6.28,M=.08+.4*ke(l.r,l.q+g);eu.push([l.x+Math.cos(x)*M,l.height+.14,l.z+Math.sin(x)*M,1,.8+.5*ke(g,l.q),1,0,x,0,g%3?A.sun:"#e8a93a",l.height])}{let l=J[4],g=Math.atan2(-Wt.getTangentAt(l.u).z,Wt.getTangentAt(l.u).x);for(let[x,M]of[[.7,A.coral],[-.5,A.sun]]){let C=l.x+Math.cos(g+x)*1.3,N=l.z-Math.sin(g+x)*1.3;mc.push([C,l.y+.25,N,.05,.5,.05,0,0,0,A.wood],[C,l.y+.45,N,.34,.13,.035,0,g+x,0,M]),Rn[4].push([C,l.y+.53,N,g+x])}}le(Ft("cenario-campo",new es(.06,.3,4,1,!0),D("#ffffff"),eu,!0),.25),Ft("cenario-placas",z,D("#ffffff"),mc,!0),Pe("priorizar","encruzilhada",[ue.bifurcacao]),Pe("priorizar","placas",Br(mc.filter((l,g)=>g%2)),"cenario-placas"),Pe("priorizar","campo amarelo",mt.map(l=>[l.x,l.z]),"cenario-campo");let[Xa,qa]=ue.acampamento,Ya=J[5].y,gc=[[Xa-.1,Ya+.17,qa+.5,1,1,1,0,0,0,A.coral],[Xa-.05,Ya+.14,qa+.45,.7,.75,.7,0,1,0,A.sun],[Xa-.15,Ya+.13,qa+.55,.6,.65,.6,0,2,0,"#ff8a3d"]],Za=Ft("cenario-fogueira",new es(.07,.2,5),D("#ffffff"),gc,!0);T(Za.material,"glow"),Pe("agir","acampamento",[ue.acampamento]),Pe("agir","fogueira",Br(gc),"cenario-fogueira"),Pe("agir","mirante",[ue.mirante]),Pe("agir","colinas",Mt.filter(l=>l.u>$[4]+O+.01&&l.front&&l.d>=1.9&&l.d<5&&l.height>.44).map(l=>[l.x,l.z]));for(let l=0;l<40;l++){let g=-8+l*.4,x=l%2?-.72:.66,M=J[2].x+oe[0]*g+Lt[0]*x,C=J[2].z+oe[1]*g+Lt[1]*x;if(!(Math.abs(g)<1.4))for(let N=0;N<3;N++)rt(M+N*.06,.28+N%2*.04,C,.025,.3+N%2*.08,.025,L.high,0,(N-1)*.16)}let zr=new En;zr.name="corrente";let Ja=new En;Ja.position.set(J[2].x,0,J[2].z),Ja.rotation.y=Math.atan2(oe[0],oe[1]),Ja.add(zr),a.add(Ja);let nu=new ln(z,L.ivory,20);for(let l=0;l<20;l++)q.position.set((l%3-1)*.16,.163,-8+l*.82),q.scale.set(.09,.009,.18),q.rotation.set(0,0,0),q.updateMatrix(),nu.setMatrixAt(l,q.matrix);zr.add(nu);let hs,_c=new Map,$a=new Map;for(let l of G.values()){if(l.g===z&&l.m===L.high){hs=new ln(z.clone(),l.m,l.items.length),hs.name="juncos",hs.userData.items=l.items,l.items.forEach((x,M)=>hs.setMatrixAt(M,At(x))),le(hs,.2,"wind",x=>x[1]-x[4]/2),a.add(hs);continue}_c.has(l.g)||_c.set(l.g,l.g.index?l.g.toNonIndexed():l.g);let g=_c.get(l.g).attributes.position;$a.has(l.m)||$a.set(l.m,[]);for(let x of l.items)$a.get(l.m).push([g.clone().applyMatrix4(At(x)).array,x[9],x[10]])}for(let[l,g]of $a){let x=g.reduce((yt,[Ht])=>yt+Ht.length,0),M=new Float32Array(x),C=new Float32Array(x/3),N=new Float32Array(x),X=0;for(let[yt,Ht,Qt]of g){M.set(yt,X);let he=1e9;for(let Pt=1;Pt<yt.length;Pt+=3)he=Math.min(he,yt[Pt]);let _e=Math.max(he,Qt??-1e9);for(let Pt=0;Pt<yt.length;Pt+=3)N.fill(.62+.38*jn.smoothstep(yt[Pt+1],_e,_e+.32),X+Pt,X+Pt+3),Ht&&(C[(X+Pt)/3]=Ht(yt[Pt],yt[Pt+1],yt[Pt+2]));X+=yt.length}let j=new ze,ct=T(l.clone(),"sway",.05);ct.vertexColors=!0,j.setAttribute("position",new Be(M,3)),j.setAttribute("aSway",new Be(C,1)),j.setAttribute("color",new Be(N,3)),j.computeVertexNormals(),a.add(new Ie(j,ct))}for(let[l,g]of Object.entries(ne)){let x=Mt.reduce((M,C)=>Math.hypot(C.x-g.x,C.z-g.z)<Math.hypot(M.x-g.x,M.z-g.z)?C:M);g.y=l==="pipa"?Math.max(J[2].y+Zx,x.height):x.height}let Of=new gn(.38,.38,.03,8),Bf=new Aa(.38,.045,5,24),zf=new gn(.025,.025,.85,5),kf=new Ln(.3,.19,8,1),Vf=new Ea(.08,8,6),Gf=D(A.sun,{emissive:A.sun,emissiveIntensity:.9}),Hf={plaza:[Of,L.path],ring:[Bf,D("#ffffff")],pole:[zf,L.wood],flag:[kf,T(new Ls({color:"#ffffff",flatShading:!0,side:cn}),"flag")],lamp:[Vf,Gf]},Wf=new Yt("#ffffff"),mi=Object.fromEntries(Object.entries(Hf).map(([l,[g,x]])=>{let M=new ln(g,x,J.length+(l==="lamp"?Fi.length:0));return M.name="paradas-"+l,M.frustumCulled=!1,(l==="ring"||l==="flag")&&J.forEach((C,N)=>M.setColorAt(N,Wf)),a.add(M),[l,M]})),Ka=document.createElement("canvas");Ka.width=128*J.length,Ka.height=128;let xc=new Tr(Ka);xc.colorSpace=mn;let kr=new ze,iu=new Float32Array(J.length*12),su=[],ru=[];J.forEach((l,g)=>{let x=g/J.length,M=(g+1)/J.length;su.push(x,0,M,0,M,1,x,1),ru.push(g*4,g*4+1,g*4+2,g*4,g*4+2,g*4+3)}),kr.setAttribute("position",new Be(iu,3)),kr.setAttribute("uv",new de(su,2)),kr.setIndex(ru);let Vr=new Ie(kr,new Zn({map:xc,transparent:!0,depthTest:!1,toneMapped:!1}));Vr.layers.set(1),o.layers.enable(1),Vr.name="paradas-selos",Vr.renderOrder=2,Vr.frustumCulled=!1,a.add(Vr);let au=[],vc=new Se().makeScale(0,0,0);for(let l of J){let g=l.group=new En;g.position.set(l.x,l.y-.35,l.z);let x=(X,j,ct,yt)=>{let Ht=l[X]=new Ne;return Ht.position.set(j,ct,yt),g.add(Ht),Ht},M=l.side.x*.6,C=l.side.z*.6;x("plaza",0,.362,0),x("ring",0,.39,0).rotation.x=Math.PI/2,x("pole",M,.78,C),au.push(x("flag",M+.16,1.12,C)),x("lamp",M,1.24,C).visible=!1,x("badge",M,1.5,C).scale.setScalar(.5),l.markers=[l.badge,l.pole,l.flag,l.lamp];let N=new Ie(new gn(.5,.5,1.4,8),new Zn({visible:!1}));N.userData.stop=l.index,N.position.set(l.x,l.y+.55,l.z),a.add(N),Gt.push(N)}let ou=()=>{let l=document.createElement("canvas");l.width=l.height=64;let g=l.getContext("2d"),x=g.createRadialGradient(32,32,0,32,32,32);return x.addColorStop(0,"#fff"),x.addColorStop(.45,"rgba(255,255,255,.6)"),x.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=x,g.fillRect(0,0,64,64),new Tr(l)},yc=[...Bt.map(l=>[l[0],l[10]+.014,l[2],1.15*l[4]/.8,1,l[4]/.8]),...ve.map(l=>[l[0],l[10]+.014,l[2],.6*l[3],1,.6*l[5]]),...[[ue.moinho,1,1.7],[ue.mirante,6,1.5],[ue.acampamento,5,1.1],[ue.banco,0,.9],[ue.placa,3,.7],[ue.bifurcacao,4,.55]].map(([[l,g],x,M])=>[l,J[x].y+.014,g,M,1,M*.85])],Gr=new ln(new Ln(1,1).rotateX(-Math.PI/2),new Zn({map:ou(),color:"#14301f",transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1}),yc.length);Gr.name="sombras",yc.forEach((l,g)=>Gr.setMatrixAt(g,At([...l.slice(0,3),l[3],1,l[5],0,0,0]))),Gr.userData.items=yc,a.add(Gr);let Mc=new Zn({map:ou(),color:"#ffc83d",transparent:!0,opacity:.32,blending:Da,depthWrite:!1,toneMapped:!1});Mc.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <project_vertex>","vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);mvPosition.xy+=position.xy*length(instanceMatrix[0].xyz);gl_Position=projectionMatrix*mvPosition;")},Mc.customProgramCacheKey=()=>"brilho";let Qn=new ln(new Ln(1,1),Mc,3+J.length),gi=[Xa-.1,Ya+.28,qa+.5];Qn.name="brilhos",Qn.frustumCulled=!1,a.add(Qn),Fi.forEach((l,g)=>Qn.setMatrixAt(g,At([...l,.34,.34,.34,0,0,0]))),J.forEach((l,g)=>Qn.setMatrixAt(3+g,vc)),Fi.forEach((l,g)=>{q.position.set(...l),q.scale.set(1,1,1),q.rotation.set(0,0,0),q.updateMatrix(),mi.lamp.setMatrixAt(J.length+g,q.matrix)});let ja=new ze;{let l=[.5,0,0],g=[-.5,0,0],x=[0,.14,0],M=[0,-.1,0],C=[0,0,.12],N=[0,0,-.12],X=[l,x,C,l,N,x,l,C,M,l,M,N,g,C,x,g,x,N,g,M,C,g,N,M],j=X.map(()=>0);for(let ct of[1,-1])X.push([.18,.04,.06*ct],[-.22,.04,.06*ct],[-.04,.06,.62*ct]),j.push(0,0,1);ja.setAttribute("position",new de(X.flat(),3)),ja.setAttribute("aWing",new de(j,1))}let Sc=(l,g={})=>T(new Ls({color:"#ffffff",flatShading:!0,...g}),l),_i=16,us=Rn.flat(),De=new ln(ja,Sc("critter",{side:cn}),_i+us.length),Hr=new Float32Array(De.count*3);De.name="bichos",De.frustumCulled=!1,ja.setAttribute("aFly",new Pi(Hr,3)),a.add(De);let bc=new ns(.5,0),ti=new ln(bc,Sc("particle"),24),lu=new Float32Array(24);ti.name="particulas",ti.frustumCulled=!1,bc.setAttribute("aGlow",new Pi(lu,1)),a.add(ti);let ds=new ln(bc,Sc("cloud",{color:"#f7f9fb",transparent:!0,opacity:.62,depthWrite:!1}),6);ds.name="nuvens",ds.frustumCulled=!1,a.add(ds);for(let l=0;l<De.count;l++)De.setColorAt(l,new Yt(l<5?[A.sun,"#ffb4a8",A.ivory,"#ffb4a8",A.sun][l]:l<8?l<7?A.ivory:"#e9dfc3":l===8?"#a9c2d6":l<_i||l%2?A.ink:"#4a5a7d")),Hr.set(l<5?[1,l*1.3,12]:l>8&&l<_i?[1,l*.8,9]:[0,l*.9,10],l*3);for(let l=0;l<24;l++)ti.setColorAt(l,new Yt(l<5?"#f4f1ea":l<10?"#d8d2c8":l<15?l%2?A.sun:"#ff8a3d":l<21?[A.leaf2,A.sun,"#d98a2b"][l%3]:A.ivory)),lu[l]=l>=10&&l<15?1:0;let Qa=new En,Xs=new Ie(new ze,D("#ffffff",{vertexColors:!0,side:cn}));Qa.position.set(...di),Qa.rotation.y=Sn,Xs.name="cata-vento",Qa.add(Xs),a.add(Qa);{let l=[],g=[];[A.coral,A.sun,A.leaf2,A.ivory].forEach((x,M)=>{let C=M*Math.PI/2,N=new Yt(x);l.push(0,0,0,Math.cos(C)*.17,Math.sin(C)*.17,0,Math.cos(C+1.2)*.09,Math.sin(C+1.2)*.09,.03);for(let X=0;X<3;X++)g.push(N.r,N.g,N.b)}),Xs.geometry.setAttribute("position",new de(l,3)),Xs.geometry.setAttribute("color",new de(g,3))}let Xf=[0,1,2,3,4].map(l=>Ws.length?Ws[Math.floor((l+.5)/5*Ws.length)]:[J[0].x,J[0].y,J[0].z]),xi=us.map(()=>null),vi=0,cu=0,Wr=0,Xr=!1,to=1,eo=0,hu=0,qs=9,Ys=9,qr=9,zi=-1,uu=4,no=!1,yi=null,du=0,fu=5,Tc=0,io=!1,Un=new Ne;Un.rotation.order="YZX";let dn=(l,g,x,M,C,N,X,j,ct=0,yt=0,Ht=0)=>{Un.position.set(x,M,C),Un.scale.set(N,X,j),Un.rotation.set(Ht,ct,yt),Un.updateMatrix(),l.setMatrixAt(g,Un.matrix),Tc++},Yr=l=>l-Math.floor(l),so=(l,g)=>Math.atan2(-g,l),Zr=(l,g)=>dn(l,g,0,-9,0,0,0,0),wc=()=>Ys<3.5?Math.min(1,Ys/.25)*Math.exp(-Math.max(0,Ys-.25)*1.1):0;function Ec(l){let[g,x,M,C]=us[l];dn(De,_i+l,g,x,M,.17,.17,.07,C),Hr[(_i+l)*3]=0,io=!0}let qf=2.6,pu=(l,g)=>{let[x,M,C]=us[l],N=Math.sin(Math.PI*g),X=Math.sin(2*Math.PI*g)*(l%2?.9:-.9);return[x+ui[0]*.35*N+ls[0]*X,M+.6*N,C+ui[1]*.35*N+ls[1]*X]};function Ac(){Tc=0;let l=vi,g=wc();for(let x=0;x<5;x++){let[M,C,N]=Xf[x],X=l+x*7.3;dn(De,x,M+.38*Math.sin(X*.7+x)+.12*Math.sin(X*1.9+x*2),C+.3+.1*Math.sin(X*1.3+x),N+.3*Math.cos(X*.53+x*1.7),.07,.1,.22,so(.27*Math.cos(X*.7+x)+.23*Math.cos(X*1.9+x*2),-.16*Math.sin(X*.53+x*1.7)))}for(let x=0;x<3;x++){let M=l*.2+x*2.1,C=.35+.15*x;dn(De,5+x,R+Math.cos(M)*C,H+.04+.012*Math.sin(l*1.7+x),v+Math.sin(M)*C,.22,.26,.1,so(-Math.sin(M),Math.cos(M)))}if(yi!==null&&yi>=.9&&(Zr(De,8),yi=null,no=!1),yi!==null){let x=yi/.9,M=du%2?-2.6:3.1,C=-.3+.6*x;dn(De,8,J[2].x+oe[0]*M+Lt[0]*C,.12+.5*Math.sin(Math.PI*x),J[2].z+oe[1]*M+Lt[1]*C,.2,.16,.12,so(Lt[0],Lt[1]),Math.atan2(Math.PI*Math.cos(Math.PI*x),.6),Math.PI/2),no=!0}if(zi>=0){let x=zi/8;if(x>=1){for(let M=0;M<7;M++)Zr(De,9+M);zi=-1}else for(let M=0;M<7;M++){let C=Math.ceil(M/2),N=-26+52*x-C*.45,[X,j]=os(N,N*Or[1]/Or[0]-1.4+(M%2?1:-1)*C*.42);dn(De,9+M,X,4.3+.15*Math.sin(x*9+M),j,.22,.2,.22,Sn)}}xi.forEach((x,M)=>{if(x===null||x<0)return;let C=x/qf;if(C>=1){xi[M]=null,Ec(M);return}let N=pu(M,C),X=pu(M,Math.min(1,C+.02));dn(De,_i+M,N[0],N[1],N[2],.17,.17,.17,C>.97?us[M][3]:so(X[0]-N[0],X[2]-N[2]));let j=C<.9?1:0;Hr[(_i+M)*3]!==j&&(Hr[(_i+M)*3]=j,io=!0)});for(let x=0;x<5;x++){let M=Yr(l*.3+x/5),C=.2*Math.pow(Math.sin(Math.PI*M),.8)*(.6+M);dn(ti,x,cs[0]+.85*M*.5+.05*Math.sin(M*7+x),cs[1]+M*1.1,cs[2]-.52*M*.5,C,C,C,x)}for(let x=0;x<5;x++){let M=Yr(l*.36+x/5+.1),C=.15*(1+.6*g)*Math.pow(Math.sin(Math.PI*M),.8)*(.6+M);dn(ti,5+x,gi[0]+.85*M*.35+.04*Math.sin(M*6+x),gi[1]+.1+M*(.9+.4*g),gi[2]-.52*M*.35,C,C,C,x)}for(let x=0;x<5;x++){let M=Yr(cu+x*.37),C=.045*(1+.5*g)*Math.sin(Math.PI*M);dn(ti,10+x,gi[0]+.14*Math.sin(x*2.3+M*5),gi[1]+M*(.75+.6*g),gi[2]+.14*Math.cos(x*1.7+M*4),C,C,C,M*6)}for(let x=0;x<9;x++){let M=-7+Yr(l*.05+x*.137)*14,C=(ke(x,9)-.5)*.75,N=Math.min(1,(7-Math.abs(M))/1.5),X=x<6;dn(ti,15+x,J[2].x+oe[0]*M+Lt[0]*C,.145,J[2].z+oe[1]*M+Lt[1]*C,(X?.13:.16)*N,(X?.03:.012)*N,(X?.08:.12)*N,l*.6+x)}for(let x=0;x<3;x++){let M=Yr((x*16+l*.18)/48)*48-24,[C,N]=os(M,M*Or[1]/Or[0]+[-1,-.4,-1.4][x]),X=7+.2*x+Nf(Math.max(0,Math.min(6,M/Uf+3))),j=.8+.15*x;dn(ds,x*2,C,X,N,2*j,.9*j,1.4*j,x),dn(ds,x*2+1,C+ls[0]*.85*j,X-.15,N+ls[1]*.85*j,1.2*j,.6*j,j,x+1),d.uCloud.value[x].set(C,N,1.25*j)}dn(Qn,2,gi[0],gi[1]-.05,gi[2],.62*(1+.07*Math.sin(l*5)+.5*g),1,1),Qn.instanceMatrix.needsUpdate=!0;for(let x=0;x<3;x++){let M=gc[x],C=1+.16*Math.sin(l*7+x*2.1)+.6*g;dn(Za,x,M[0],M[1]+.1*M[4]*(C-1),M[2],M[3]*(1+.3*g),M[4]*C,M[5]*(1+.3*g),M[7])}return De.instanceMatrix.needsUpdate=!0,ti.instanceMatrix.needsUpdate=!0,ds.instanceMatrix.needsUpdate=!0,Za.instanceMatrix.needsUpdate=!0,io&&(De.geometry.attributes.aFly.needsUpdate=!0,io=!1),Tc}function Yf(l){let g=1-Math.exp(-l/.45);Wr+=((On<10?1:0)-Wr)*g,to+=((Xr?.15:1)-to)*g;let x=Wr*(.25+.75*(to-.15)/.85);vi+=l*x,cu+=l*x*(.95+.5*wc()),d.uT.value=vi,d.uAmp.value=Wr*to,qs+=l,Ys+=l,qr+=l,d.uGust.value.z=qs<4?1.6*Math.exp(-qs*1.3):0,d.uGust.value.w=qs,d.uBloom.value.z=qr<3.5?1:0,d.uBloom.value.w=qr,xi.forEach((C,N)=>{C!==null&&(xi[N]=C+l)}),zi>=0?zi+=l:On<2&&!Xr&&vi>=uu&&(zi=0,uu=vi+26),yi!==null?yi+=l:On<9&&vi>=fu&&(yi=0,du++,fu=vi+6),eo+=((On<9?.7:0)-eo)*(1-Math.exp(-l/.8)),fi.rotation.x+=eo*l,zr.position.z=vi*.18%.82;let M=d.uGust.value;hu+=l*(d.uAmp.value*1.6+4*M.z*Math.exp(-((di[0]-M.x)**2+(di[2]-M.y)**2)/4)),Xs.rotation.z=hu,bn.maxLife=Math.max(bn.maxLife,Ac())}function Zf(l,g){!Fn||!zn()||(xi[l*2]=0,xi[l*2+1]=-.15,l>=5&&(Ys=0),g===0&&(qr=0,d.uBloom.value.set(J[g].x,J[g].z,1,0)))}function Jf(l){let g=J[l];!g||!Fn||!zn()||(qs=0,d.uGust.value.set(g.x,g.z,1.6,0),On=0,yn())}let mu=1,gu=80,_u=[A.coral,A.sun,A.leaf2,"#ffb4a8",A.ivory],Cc=new Ln(.18,.12),Rc=new Zn({side:cn,toneMapped:!1,fog:!1}),Nn=null;function $f(l){Jr();let g=J[l];if(!g||!Fn||!zn())return!1;let x=new ln(Cc,Rc,gu),M=new Yt;x.name="confete",x.frustumCulled=!1;let C=Array.from({length:gu},(N,X)=>{x.setColorAt(X,M.set(_u[X%_u.length]));let j=X*2.39996,ct=.35+.65*ke(X,1);return[Math.cos(j)*ct*3.6,1.6+1.6*ke(X,2),Math.sin(j)*ct*3.6,ke(X,3)*6,1.6+3.4*ke(X,4)]});return Nn={mesh:x,p:C,t:0,at:[g.x,g.y+2.3,g.z]},xu(0),a.add(x),yn(),!0}function xu(l){let g=Nn;if(g.t+=l,g.t>=mu){Jr();return}let x=g.t,[M,C,N]=g.at,X=(1-Math.exp(-2.4*x))/2.4,j=Math.min(1,(mu-x)/.25);g.p.forEach(([ct,yt,Ht,Qt,he],_e)=>{Un.position.set(M+ct*X,C+yt*X-2.2*x*x,N+Ht*X),Un.scale.setScalar(j),Un.rotation.set(Qt+he*x,Qt*.7+he*.6*x,he*.3*x),Un.updateMatrix(),g.mesh.setMatrixAt(_e,Un.matrix)}),g.mesh.instanceMatrix.needsUpdate=!0,bn.maxConfetti=Math.max(bn.maxConfetti,g.p.length)}function Jr(){Nn&&(a.remove(Nn.mesh),Nn.mesh.dispose(),Nn=null)}function Kf(){xi.forEach((l,g)=>{l!==null&&(xi[g]=null,Ec(g))}),qs=Ys=qr=9,d.uGust.value.z=0,d.uBloom.value.z=0,zi=-1,yi=null,Ac(),Zr(De,8),no=!1;for(let l=0;l<7;l++)Zr(De,9+l);De.instanceMatrix.needsUpdate=!0}us.forEach((l,g)=>Ec(g));for(let l=8;l<_i;l++)Zr(De,l);Ac();let Ue={scene:new Ps,cam:new Is,tex:null,on:!1,off:!1,u:{tMap:{value:null},uPx:{value:new te},uR:{value:0},uB:{value:.28}}};{let l=new Ie(new Ln(2,2),new An({uniforms:Ue.u,depthTest:!1,depthWrite:!1,blending:Jn,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D tMap;uniform vec2 uPx;uniform float uR,uB;varying vec2 vUv;void main(){float r=uR*smoothstep(uB,.5,abs(vUv.y-.52));if(r<.35)discard;vec4 c=vec4(0.);for(int i=0;i<12;i++){float a=float(i)*2.39996,s=sqrt((float(i)+.5)/12.);c+=texture2D(tMap,vUv+vec2(cos(a),sin(a))*s*r*uPx);}gl_FragColor=c/12.;}"}));l.frustumCulled=!1,Ue.scene.add(l)}let vu=new B,yu=new B,Mu=new B;function jf(){vu.setFromMatrixColumn(o.matrixWorld,0),yu.setFromMatrixColumn(o.matrixWorld,1);for(let l of J){l.group.updateMatrixWorld(!0);for(let M in mi)mi[M].setMatrixAt(l.index,l[M].visible?l[M].matrixWorld:vc);let g=l.badge.getWorldPosition(Mu),x=l.badge.visible?l.badge.scale.x/2:0;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([M,C],N)=>{for(let X=0;X<3;X++)iu[l.index*12+N*3+X]=g.getComponent(X)+(vu.getComponent(X)*M+yu.getComponent(X)*C)*x})}for(let l of J)Qn.setMatrixAt(3+l.index,l.lamp.visible?At([...l.lamp.getWorldPosition(Mu).toArray(),.36,.36,.36,0,0,0]):vc);Qn.instanceMatrix.needsUpdate=!0;for(let l in mi)mi[l].instanceMatrix.needsUpdate=!0;kr.attributes.position.needsUpdate=!0}function Su(l,{state:g,zone:x,glyph:M}){let C=Ka.getContext("2d"),N=g==="bloqueada",X=g==="foco";if(C.save(),C.translate(l.index*128,0),C.clearRect(0,0,128,128),C.beginPath(),C.arc(64,64,54,0,Math.PI*2),C.fillStyle=X?A.sun:A.ivory,C.fill(),C.lineWidth=12,C.strokeStyle=Qh[x]||A.ink,C.stroke(),C.fillStyle=A.ink,C.strokeStyle=A.ink,C.textAlign="center",C.textBaseline="middle",N)C.lineWidth=7,C.beginPath(),C.arc(64,54,14,Math.PI,0),C.stroke(),C.fillRect(44,56,40,30);else{let j=M||{guardado:"\u2713",rascunho:"\u270E",adiado:"\u21B7"}[g]||String(l.index+1);C.font=`900 ${j.length>1?40:58}px Nunito, sans-serif`,C.fillText(j,64,68)}C.restore(),xc.needsUpdate=!0}let ro=new Ne;ro.name="rumo",a.add(ro);let Mi=0,Ic=!1,ao=!0,Fn=!0,bu=!1,$r=0,oo=0,Tu=0,On=12,Qf=0,Zs=J.map(()=>({state:"dispon\xEDvel",zone:"leaf"})),$t=null,jt=null,fn=null,lo=$[0],wu="",Bn=new B(J[0].x,J[0].y,J[0].z),ie=new B(0,0,0),Ge=Sn,In=1,co=!1,ho=!1,He=!0,ki=!1,fs=!0,Js=0,uo=!1,ei=!1,$s=!1,Kr=null,Ye=null,ps=0,bn={maxCalls:0,maxTriangles:0,maxLife:0,maxConfetti:0,cpuMax:0,cpuSum:0,cpuN:0};function fo(l){lo=l,Bn.copy(Wt.getPointAt(l))}let ms=new B,jr=new B,po=new B,Qr=9.55/Math.hypot(10,9.55),Pc=10/Math.hypot(10,9.55);function Lc(){ms.set(Math.cos(Ge),0,-Math.sin(Ge)),jr.set(Math.sin(Ge),0,Math.cos(Ge)),po.set(-Math.sin(Ge)*Qr,Pc,-Math.cos(Ge)*Qr)}let ni=l=>l.x*ms.x+l.z*ms.z,gs=l=>l.x*po.x+l.y*po.y+l.z*po.z,mo=(l,g)=>new B().addScaledVector(ms,l).addScaledVector(jr,(.45*Pc-g)/Qr),ii=()=>{let l=i.getBoundingClientRect();return{width:Math.max(1,l.width),height:Math.max(1,l.height)}},Eu=()=>{let l=ii();return l.width>=900?jn.clamp(.33*l.height,200,280):130};function si(l,g){let x=Math.min(Eu(),Math.max(46,g*Df))/g,M=ni(l),C=gs(l);return[M-x*60/130,M+x*60/130,C-x*4/130,C+x*125/130]}function Ks(l){let g=J[l],x=new B(g.x,g.y,g.z),M=new B(g.x+g.side.x*.6,g.y+1.15,g.z+g.side.z*.6);return[[ni(x)-.3,ni(x)+.3,gs(x)-.2,gs(x)+.2],[ni(M)-.3,ni(M)+.3,gs(M)-.3,gs(M)+.3]]}let go=["bino","bino","pipa","pipa",null,"teo","teo"];function _s(l,g,x,M=8){let C=ii(),N=C.width/C.height,X=Math.min(x,Math.max(g,3)),j=null;for(let ct=0,yt=0;ct<(g===x?1:30)&&!(j&&Math.abs(j.need-yt)<1e-4);ct++){yt=X;let Ht=C.height/(2*X),Qt=l(Ht),he=Math.min(...Qt.map(je=>je[0])),_e=Math.max(...Qt.map(je=>je[1])),Pt=Math.min(...Qt.map(je=>je[2])),Vi=Math.max(...Qt.map(je=>je[3])),ys=Js/Ht,tr=4/Ht,er=Math.max((Vi-Pt)/2+tr+ys/2,((_e-he)/2+M/Ht)/N);X=Math.min(x,Math.max(g,er)),j={cx:(he+_e)/2,cy:(Pt+Vi)/2-ys/2,half:X,need:er}}return j}function tp(){let l=ii();return ei=uo&&l.height<170,$s=!ei&&l.width>=900,ei?{lo:l.height/168,hi:l.height/60}:$s?{lo:l.height/(2*jn.clamp(.3*l.height,80,240)),hi:9}:l.width<600&&l.height>=170?{lo:l.height/116,hi:l.height>=200?l.height/91:9}:{lo:Math.max(1.6,l.height*Df/260),hi:9}}let _o=l=>new B(J[l].x,J[l].y,J[l].z);function ta(l,g,x){let M=ei?null:go[l],C=[si(_o(l),g),...Ks(l)];if(M&&C.push(si(ne[M],g)),x)for(let N of[l-1,l+1])J[N]&&C.push(Ks(N)[0]);return!x&&!ei&&J[l+1]&&ii().width>=900&&C.push(Ks(l+1)[0]),C}let ep=(l,g)=>[si(_o(l),g),...Ks(l),...J[l+1]?[Ks(l+1)[0]]:[],...ne[Kr]?[si(ne[Kr],g)]:[]];function js(l){Lc();let{lo:g,hi:x}=tp(),M=ii();if($s){let qt=_s(Re=>ep(l,Re),g,x);return{center:mo(qt.cx,qt.cy),half:qt.half}}let C=M.width>=600&&!ei?g*M.width/M.height:0,N=g,X=qt=>Object.entries(ne).filter(([Re,Gi])=>Re!==go[qt]&&Math.abs(ni(Gi)-ni(_o(qt)))<C).map(([,Re])=>Re);for(let qt=0;qt<7;qt++)N=Math.max(N,_s(Re=>[...ta(qt,Re,!1),...X(qt).map(Gi=>si(Gi,Re))],g,x).half);let j=_s(qt=>ta(l,qt,!0),N,N),ct=j.need<=N*1.001,yt=ct?j:_s(qt=>ta(l,qt,!1),N,N),Ht=ii(),Qt=N*Ht.width/Ht.height,he=Object.entries(ne).filter(([qt,Re])=>!ei&&qt!==go[l]&&Math.abs(ni(Re)-yt.cx)<Qt).map(([,qt])=>qt);if(he.length){let qt=_s(Re=>[...ta(l,Re,ct),...he.map(Gi=>si(Gi,Re))],N,N,2);qt.need<=N*1.001&&(yt=qt)}let _e=Ht.height/(2*N),Pt=4/_e,Vi=ta(l,_e,!1),ys=Math.max(...Vi.map(qt=>qt[1]))+Pt-Qt,tr=Math.min(...Vi.map(qt=>qt[0]))-Pt+Qt,er=yt.cy+N-Pt,je=yt.cy-N+Js/_e+Pt,Ms=Object.entries(ne).filter(([qt])=>!ei&&qt!==go[l]).map(([,qt])=>si(qt,_e)).filter(([,,qt,Re])=>Re>yt.cy-N&&qt<yt.cy+N),yo=qt=>Ms.every(([Re,Gi,vp,yp])=>Gi<=qt-Qt||Re>=qt+Qt||Re>=qt-Qt+Pt&&Gi<=qt+Qt-Pt&&vp>=je&&yp<=er),ia=[yt.cx,...Ms.flatMap(([qt,Re])=>[qt-Qt,Re+Qt,Re+Pt-Qt,qt-Pt+Qt])].filter(qt=>qt>=ys-1e-6&&qt<=tr+1e-6&&yo(qt)).sort((qt,Re)=>Math.abs(qt-yt.cx)-Math.abs(Re-yt.cx));return{center:mo(ia.length?ia[0]:yt.cx,yt.cy),half:N}}let Dc=new B,np=l=>{let g=1e9,x=-1e9,M=1e9,C=-1e9;for(let N of l)for(let X=0;X<8;X++){Dc.set(X&1?N.max.x:N.min.x,X&2?N.max.y:Math.max(.13,N.min.y),X&4?N.max.z:N.min.z);let j=ni(Dc),ct=gs(Dc);g=Math.min(g,j),x=Math.max(x,j),M=Math.min(M,ct),C=Math.max(C,ct)}return[g,x,M,C]};function Au(){Lc();let l=_o(Mi),g=ii(),x=g.width>=600,M=X=>[si($t?Bn:l,X),...Object.values(ne).map(j=>si(j,X)),...J.flatMap((j,ct)=>Ks(ct))],C=_s(X=>[...M(X),...x?Object.values(Ni).map(np):[]],1.6,30,x?20:6),N=sp(g.width/g.height);return C.half<=N?C:_s(M,1.6,Math.max(1.6,N),x?20:6)}let ri=2.6,xs=6;function ea(){let l=Au(),g=js(Mi);xs=l.half,ri=g.half,fs&&(He?ie.copy(mo(l.cx,l.cy)):(fn=g.center,!jt&&!$t&&ie.copy(g.center)))}function xo(){if(Kf(),Jr(),jt&&(ie.copy(jt.to),jt=null),Ye){Ye=null,He=!1;let l=js(Mi);ri=l.half,fn=l.center,ie.copy(l.center)}if($t){fo($t.to);let l=$t.index;$t=null,fn&&ie.copy(fn),Ze(),r({type:"arrive",index:l,walked:!1,moved:!0,stopped:!0})}}function vs(){cancelAnimationFrame($r),$r=0,oo=0}let zn=()=>!ho&&!co&&Ic&&ao&&Fn&&!document.hidden,Cu=()=>$t||jt||Ye||Nn||On<12,Uc=(l,g)=>{let x=l.clone().project(o);return{x:(x.x+1)/2*g.width,y:(1-x.y)/2*g.height,z:x.z}};function Ru(l=i.getBoundingClientRect()){return{width:l.width,height:l.height,unit:l.height/(o.top-o.bottom),figMax:Eu(),short:ei,close:$s&&(!He||!!jt),inset:Js,rumo:Uc(Bn,l),guides:Object.fromEntries(Object.entries(ne).map(([g,x])=>[g,Uc(x,l)])),stops:J.map(g=>Uc(new B(g.x,g.y+.01,g.z),l))}}let ip=(l,g)=>Wt.getPointAt(g).project(o).x>=Wt.getPointAt(l).project(o).x?1:-1;function yn(){!bu&&!$r&&zn()&&Cu()&&($r=requestAnimationFrame(fp))}function kn(){n({overview:He,exploring:ki,selected:Mi})}function Nc(l,g){let x=1e9,M=-1e9,C=1e9,N=-1e9;for(let X of[-l*g,l*g])for(let j of[-l,l])for(let ct of[0,.4]){let yt=-(j+Pc*(.45-ct))/Qr,Ht=X*ms.x+yt*jr.x,Qt=X*ms.z+yt*jr.z,[he,_e]=Ui(Ht,Qt);x=Math.min(x,he),M=Math.max(M,he),C=Math.min(C,_e),N=Math.max(N,_e)}return{s0:x,s1:M,t0:C,t1:N}}function sp(l){let g=30;for(let x=0;x<4;x++){let M=Nc(g,l),C=Math.min(1,(Qe.s[1]-Qe.s[0]-.1)/(M.s1-M.s0),(Qe.t[1]-Qe.t[0]-.1)/(M.t1-M.t0));if(C>=1)break;g*=C*.995}return g}function rp(l,g){for(let j=0;j<3;j++){let ct=Nc(l,g),yt=Math.min(1,(Qe.s[1]-Qe.s[0])/(ct.s1-ct.s0),(Qe.t[1]-Qe.t[0])/(ct.t1-ct.t0));if(yt>=1)break;l*=yt*.995}let x=Nc(l,g),[M,C]=Ui(ie.x,ie.z);M=jn.clamp(M,Qe.s[0]+.05-x.s0,Qe.s[1]-.05-x.s1),C=jn.clamp(C,Qe.t[0]+.05-x.t0,Qe.t[1]-.05-x.t1);let[N,X]=os(M,C);return ie.x=N,ie.z=X,l}function ap(l,g,x){let[M,C,N,X]=si(Bn,x),j=new B(ie.x,.45,ie.z),ct=ni(j),yt=gs(j),Ht=l*g-8/x,Qt=l-4/x,he=-l+(Js+4)/x,_e=0,Pt=0;C-ct>Ht?_e=C-ct-Ht:M-ct<-Ht&&(_e=M-ct+Ht),X-yt>Qt?Pt=X-yt-Qt:N-yt<he&&(Pt=N-yt-he),(_e||Pt)&&ie.addScaledVector(ms,_e).addScaledVector(jr,-Pt/Qr)}function Ze(){if(co||ho)return;let l=i.getBoundingClientRect(),g=Math.max(.2,l.width/Math.max(1,l.height));Lc();let x=He?xs:ri,M=jt&&jt.h1!=null?jt.h0+(jt.h1-jt.h0)*(jt.e||0):x,C=Math.min(M/In,Math.max(xs,M)*1.25);$t&&fn&&!He&&ap(C,g,Math.max(1,l.height)/(2*C)),C=rp(C,g),ps=C,o.position.set(ie.x+Math.sin(Ge)*10,10,ie.z+Math.cos(Ge)*10),o.lookAt(ie.x,.45,ie.z),o.updateMatrixWorld(),o.left=-C*g,o.right=C*g,o.top=C,o.bottom=-C,o.updateProjectionMatrix(),ro.position.copy(Bn);let N=Bn.clone();N.y+=.6,N.project(o);for(let j of J){let ct=j.badge.getWorldPosition(new B).project(o),yt=Math.abs(ct.x-N.x)>.75/(C*g)||Math.abs(ct.y-N.y)>.95/C;j.markers.forEach(Ht=>Ht.visible=yt&&(Ht!==j.lamp||Zs[j.index].state==="guardado"))}if(jf(),h.info.reset(),Ue.on=l.width>=900&&!Ue.off,Ue.on){let j=c.width,ct=c.height;(Ue.tex?.image.width!==j||Ue.tex?.image.height!==ct)&&(Ue.tex?.dispose(),Ue.tex=new Ma(j,ct),Ue.u.tMap.value=Ue.tex),Ue.u.uPx.value.set(1/j,1/ct),Ue.u.uB.value=He?.36:.28,Ue.u.uR.value=jn.clamp(l.height/160,1.2,3.4)*h.getPixelRatio()*(He?.6:1),o.layers.set(0),h.render(a,o),h.copyFramebufferToTexture(Ue.tex),h.autoClear=!1,h.render(Ue.scene,Ue.cam),o.layers.set(1),h.render(a,o),h.autoClear=!0,o.layers.enable(0)}else h.render(a,o);Tu++,bn.maxCalls=Math.max(bn.maxCalls,h.info.render.calls),bn.maxTriangles=Math.max(bn.maxTriangles,h.info.render.triangles);let X=[ie.x,ie.z,Ge,C,l.width,l.height,Bn.x,Bn.y,Bn.z].join();X!==wu&&(wu=X,s(Ru(l)))}function Iu(){if(ho)return;let l=i.getBoundingClientRect();h.setSize(Math.max(1,l.width),Math.max(1,l.height),!1),l.width>1&&l.height>1&&(ea(),jt&&!He&&fn&&(jt.to=fn),jt&&jt.h1!=null&&(jt.h1=He?xs:ri)),Ze()}let na=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,op=na,Pu=l=>l<.5?2*l*l:1-2*(1-l)*(1-l);function vo(l=!1){if(!Ye)return;Ye=null;let g=ie.clone(),x=ps;jt=null,He=!1;let M=js(Mi);ri=M.half,fn=M.center,ie.copy(M.center),l&&Fn&&zn()&&x&&(jt={from:g,to:M.center,t:0,dur:.5,ease:op,h0:x,h1:M.half},ie.copy(g),yn()),Ze(),kn()}let lp=l=>1-Math.pow(1-l,3);function cp(l,{instant:g=!1,keep:x=null,passage:M=null}={}){if(!J[l])return;Ye=null,Kr=x,Mi=l,He=!1,fs=!0,On=0,J.forEach(Qt=>{Qt.ring.scale.setScalar(Qt.index===l?1.15:1)});let C=js(l),N=C.center,X=$[l],j=Math.abs(X-lo)/Ut,ct=j>1e-6;if(ri=C.half,fn=N,g||!Fn||!zn()){$t=null,jt=null,fo(X),ie.copy(N),Ze(),kn(),r({type:"arrive",index:l,walked:!1,moved:ct});return}let yt=!!$t,Ht=Jx(j);jt=ct?{from:ie.clone(),to:N,t:yt?0:-uc,dur:.29,ease:Pu}:{from:ie.clone(),to:N,t:0,dur:.35,ease:lp},$s&&(jt=ct?{from:ie.clone(),to:N,t:yt?0:-uc,dur:Ht,ease:Pu,h0:ps||C.half,h1:C.half}:{from:ie.clone(),to:N,t:0,dur:.5,ease:na,h0:ps||C.half,h1:C.half}),$t=ct?{from:lo,to:X,index:l,t:yt?0:-uc,dur:Ht,hops:Math.min(10,Math.max(1,Math.round(j*6*1.2))),dir:ip(lo,X),running:yt,wake:M===null?null:{to:l,from:M}}:null,$t&&(r({type:"start",index:l,dir:$t.dir,antes:yt?0:uc*1e3,run:$t.dur*1e3}),yt&&r({type:"run",index:l,dir:$t.dir,run:$t.dur*1e3})),yn(),Ze(),kn(),$t||r({type:"arrive",index:l,walked:!1,moved:!1})}let hp=new Yt,up=new Yt;function dp(l){Zs=l.map((g,x)=>({...Zs[x],...g}));for(let g of J){let x=Zs[g.index];Su(g,x),mi.ring.setColorAt(g.index,hp.set(x.state==="foco"?A.sun:Qh[x.zone]||A.ivory)),mi.flag.setColorAt(g.index,up.set(x.state==="guardado"?A.sun:Qh[x.zone]||A.coral));let M=x.state==="bloqueada";g.flag.position.y=M?.62:1.12,g.flag.scale.x=M?.55:1}mi.ring.instanceColor.needsUpdate=!0,mi.flag.instanceColor.needsUpdate=!0,Ze()}function Lu(l){if(!zn())return;let g=performance.now(),x=Math.min(l,12-On);On+=x,Qf+=x,x>0&&Yf(x),Nn&&xu(l);let M=!!$t;if($t&&($t.t=Math.min($t.dur,$t.t+l),$t.t>0)){$t.running||($t.running=!0,r({type:"run",index:$t.index,dir:$t.dir,run:$t.dur*1e3}));let N=$t.t/$t.dur,X=N<.5?2*N*N:1-2*(1-N)*(1-N);if(fo($t.from+($t.to-$t.from)*X),Bn.y+=.12*Math.abs(Math.sin(Math.PI*$t.hops*N)),$t.wake&&(Zf($t.wake.to,$t.wake.from),$t.wake=null),N>=1){fo($t.to);let j=$t.index;$t=null,r({type:"arrive",index:j,walked:!0,moved:!0})}}if(Ye&&(Ye.t+=l,Ye.t>=0&&!Ye.go)){Ye.go=!0,He=!1;let N=js(Mi);ri=N.half,fn=N.center,jt={from:ie.clone(),to:N.center,t:0,dur:Ye.dur,ease:na,h0:ps||xs,h1:N.half},kn()}jt?(jt.t=Math.min(jt.dur,jt.t+l),jt.e=jt.ease(Math.max(0,jt.t)/jt.dur),ie.lerpVectors(jt.from,jt.to,jt.e),jt.t>=jt.dur&&(jt=null,Ye?.go&&(Ye=null))):M&&fn&&ie.copy(fn),Ze();let C=performance.now()-g;bn.cpuMax=Math.max(bn.cpuMax,C),bn.cpuSum+=C,bn.cpuN++}function fp(l){if($r=0,!zn())return;let g=oo?Math.min((l-oo)/1e3,.05):0;oo=l,Lu(g),Cu()||kn(),yn()}function Du(l){let g=new Set,x=new Set;l.traverse(M=>{if(M.isMesh||M.isSprite){M.geometry&&g.add(M.geometry);for(let C of Array.isArray(M.material)?M.material:[M.material])x.add(C)}}),g.forEach(M=>M.dispose()),x.forEach(M=>{M.map?.dispose(),M.dispose()})}function Uu(l,g){let x=(o.top-o.bottom)/Math.max(1,c.clientHeight);Ye=null,jt=null,fn=null,fs=!1,ie.x-=l*x*Math.cos(Ge)-g*x*Math.sin(Ge),ie.z+=l*x*Math.sin(Ge)+g*x*Math.cos(Ge),Ze(),kn()}function pp(l,{animate:g=!1}={}){let x=ie.clone(),M=ps;if(Ye=null,jt=null,["left","right","up","down"].includes(l)&&Uu(l==="left"?70:l==="right"?-70:0,l==="up"?70:l==="down"?-70:0),l==="in"&&(In=Math.min(1.6,In+.15)),l==="out"&&(In=Math.max(.7,In-.15)),l==="rotate"&&(Ge=Math.min(1.15,Ge+.18),fs=!1),l==="rotate-back"&&(Ge=Math.max(-.3,Ge-.18),fs=!1),l==="center"&&(He=!0,Ge=Sn,In=1,fs=!0,fn=null,ea()),l==="focus"){He=!1,In=1,fs=!0;let C=js(Mi);ri=C.half,ie.copy(C.center),fn=C.center}g&&(l==="center"||l==="focus")&&ii().width>=900&&Fn&&zn()&&M&&(jt={from:x,to:ie.clone(),t:0,dur:.6,ease:na,h0:M,h1:He?xs:ri},ie.copy(x),yn()),Ze(),kn()}let Vn=new Map,Nu=new La,Qs=0,Fu=l=>{let g=c.getBoundingClientRect();return Nu.setFromCamera(new te((l.clientX-g.left)/g.width*2-1,-(l.clientY-g.top)/g.height*2+1),o),Nu.intersectObjects(Gt)[0]?.object.userData.stop};function mp(l){if(!(l.pointerType==="mouse"&&l.button!==0)&&(l.pointerType!=="mouse"&&l.preventDefault(),Vn.set(l.pointerId,{x:l.clientX,y:l.clientY,startX:l.clientX,startY:l.clientY,dragged:!1}),c.setPointerCapture(l.pointerId),Vn.size>1)){Vn.forEach(x=>x.dragged=!0);let g=[...Vn.values()];Qs=Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y)}}function gp(l){let g=Vn.get(l.pointerId);if(!g){l.pointerType==="mouse"&&(c.style.cursor=Fu(l)===void 0?"grab":"pointer");return}let x=l.clientX-g.x,M=l.clientY-g.y;if(g.x=l.clientX,g.y=l.clientY,Vn.size===2&&ki){let C=[...Vn.values()],N=Math.hypot(C[0].x-C[1].x,C[0].y-C[1].y);Qs>0&&(In=jn.clamp(In*N/Qs,.7,1.6)),Qs=N,Ze(),kn();return}Math.hypot(g.x-g.startX,g.y-g.startY)>6&&(g.dragged=!0),g.dragged&&Uu(x,ki||l.pointerType==="mouse"?M:0)}function _p(l){let g=Vn.get(l.pointerId);if(Vn.delete(l.pointerId),Qs=0,!g||g.dragged)return;let x=Fu(l);x!==void 0?t(x):vo(!0)}function Ou(l){ki=!!l,Vn.clear(),Qs=0,i.dataset.exploring=String(ki),i.style.touchAction=ki?"none":"pan-y",kn()}function xp(l){ki&&(l.preventDefault(),In=jn.clamp(In*Math.exp(-l.deltaY*.0015),.7,1.6),Ze(),kn())}c.addEventListener("pointerdown",mp),c.addEventListener("pointermove",gp),c.addEventListener("pointerup",_p),c.addEventListener("pointercancel",l=>Vn.delete(l.pointerId)),c.addEventListener("wheel",xp,{passive:!1}),c.addEventListener("webglcontextlost",l=>{l.preventDefault(),co=!0,vs(),e("A visualiza\xE7\xE3o 3D foi interrompida. Continue pela lista de paradas.")});let Bu=new ResizeObserver(Iu);Bu.observe(i);let zu=new IntersectionObserver(l=>{ao=l[0].isIntersecting,ao?yn():(vs(),xo())});zu.observe(i);let ku=()=>{document.hidden?(vs(),xo()):yn()};document.addEventListener("visibilitychange",ku),J.forEach(l=>Su(l,Zs[l.index])),Iu();{let l=new Ps,g=new ln(Cc,Rc,1);g.setColorAt(0,new Yt),l.add(g),h.compile(l,o),g.dispose()}return{select:cp,paintStops:dp,advance:Lu,render:Ze,anchors:Ru,camera:pp,setExplore:Ou,setInsets({bottom:l=0}={}){Math.abs(l-Js)<1||(Js=l,ea(),Ze())},setCompact(l){uo!==!!l&&(uo=!!l,ea(),Ze())},setActive(l){Ic=l,l?yn():(vs(),Ou(!1),xo(),vo())},intro({hold:l=1.6,dur:g=1.3}={}){if(ii().width<900||!Fn||!zn())return!1;let x=Au();return He=!0,xs=x.half,ie.copy(mo(x.cx,x.cy)),Ye={t:-l,dur:g,go:!1},Ze(),kn(),yn(),!0},skipIntro:()=>vo(!0),confetti:$f,endConfetti(){Nn&&(Jr(),Ze())},gust:Jf,setCalm(l){Xr!==!!l&&(Xr=!!l,On<12&&yn())},setKeep(l=null){if(Kr===l)return;let g=ie.clone(),x=ps;Kr=l,ea(),ii().width>=900&&Fn&&zn()&&!He&&x&&!$t&&(jt={from:g,to:ie.clone(),t:0,dur:.3,ease:na,h0:x,h1:ri},ie.copy(g),yn()),Ze()},setMotion(l){Fn=l,l?yn():(vs(),xo(),vo(),Ze())},setManual(l){bu=l,vs(),l||yn()},state:()=>({ready:!0,confetti:Nn?Nn.p.length:0,compact:uo,short:ei,close:$s,intro:!!Ye,selected:Mi,piece:Bn.toArray(),stopPositions:J.map(l=>[l.x,l.z]),stopHeights:J.map(l=>l.y),states:Zs.map(l=>l.state),hop:!!$t,cam:!!jt,frames:Tu,active:Ic,visible:ao,motion:Fn,lost:co,tiles:Mt.length,heights:[...new Set(Mt.map(l=>l.height))],zoom:In,angle:Ge,center:ie.toArray(),overview:He,exploring:ki,ambient:On,tilt:Ue.on,metrics:{...bn},life:{t:vi,live:Wr,amp:d.uAmp.value,calm:Xr,gust:d.uGust.value.z,fire:wc(),bloom:d.uBloom.value.z,birdsAway:xi.filter(l=>l!==null).length,flock:zi>=0,fish:no,wheel:eo},triangles:h.info.render.triangles,calls:h.info.render.calls}),raw:()=>({renderer:h,scene:a,camera:o,piece:ro,stops:J,targets:Gt,curve:Wt,trail:st,wheel:fi,stream:zr,flags:au,guides:ne,landmarks:ue,markBox:Ni,millBox:fc,scenery:Hs,tilt:Ue,life:{uniforms:d,critters:De,puffs:ti,clouds:ds,flames:Za,blades:Xs,perches:us,lanterns:Fi,reeds:hs,blobs:Gr,glow:Qn},field:Qe,toTrail:Ui}),dispose(){ho=!0,vs(),Jr(),Cc.dispose(),Rc.dispose(),Bu.disconnect(),zu.disconnect(),document.removeEventListener("visibilitychange",ku),Du(a),Du(Ue.scene),Ue.tex?.dispose(),h.dispose(),c.remove()}}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
