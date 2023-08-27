(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ye={},Ps=[],$n=()=>{},cP=()=>!1,lP=/^on[^a-z]/,ru=t=>lP.test(t),op=t=>t.startsWith("onUpdate:"),bt=Object.assign,ap=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uP=Object.prototype.hasOwnProperty,Re=(t,e)=>uP.call(t,e),he=Array.isArray,ks=t=>iu(t)==="[object Map]",zw=t=>iu(t)==="[object Set]",ge=t=>typeof t=="function",Ct=t=>typeof t=="string",cp=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",qw=t=>tt(t)&&ge(t.then)&&ge(t.catch),Kw=Object.prototype.toString,iu=t=>Kw.call(t),hP=t=>iu(t).slice(8,-1),Gw=t=>iu(t)==="[object Object]",lp=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gc=sp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),su=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dP=/-(\w)/g,ir=su(t=>t.replace(dP,(e,n)=>n?n.toUpperCase():"")),fP=/\B([A-Z])/g,lo=su(t=>t.replace(fP,"-$1").toLowerCase()),ou=su(t=>t.charAt(0).toUpperCase()+t.slice(1)),Th=su(t=>t?`on${ou(t)}`:""),fa=(t,e)=>!Object.is(t,e),Ih=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pP=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let e_;const Rd=()=>e_||(e_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function up(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ct(r)?yP(r):up(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ct(t))return t;if(tt(t))return t}}const gP=/;(?![^(]*\))/g,mP=/:([^]+)/,_P=/\/\*[^]*?\*\//g;function yP(t){const e={};return t.replace(_P,"").split(gP).forEach(n=>{if(n){const r=n.split(mP);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function au(t){let e="";if(Ct(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=au(t[n]);r&&(e+=r+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wP=sp(vP);function Yw(t){return!!t||t===""}const EP=t=>Ct(t)?t:t==null?"":he(t)||tt(t)&&(t.toString===Kw||!ge(t.toString))?JSON.stringify(t,Qw,2):String(t),Qw=(t,e)=>e&&e.__v_isRef?Qw(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:zw(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!he(e)&&!Gw(e)?String(e):e;let vn;class Jw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vn;try{return vn=this,e()}finally{vn=n}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Xw(t){return new Jw(t)}function TP(t,e=vn){e&&e.active&&e.effects.push(t)}function Zw(){return vn}function IP(t){vn&&vn.cleanups.push(t)}const hp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},e0=t=>(t.w&mi)>0,t0=t=>(t.n&mi)>0,bP=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mi},CP=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];e0(i)&&!t0(i)?i.delete(t):e[n++]=i,i.w&=~mi,i.n&=~mi}e.length=n}},ll=new WeakMap;let Bo=0,mi=1;const Pd=30;let Dn;const qi=Symbol(""),kd=Symbol("");class dp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,TP(this,r)}run(){if(!this.active)return this.fn();let e=Dn,n=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dn,Dn=this,oi=!0,mi=1<<++Bo,Bo<=Pd?bP(this):t_(this),this.fn()}finally{Bo<=Pd&&CP(this),mi=1<<--Bo,Dn=this.parent,oi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dn===this?this.deferStop=!0:this.active&&(t_(this),this.onStop&&this.onStop(),this.active=!1)}}function t_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let oi=!0;const n0=[];function uo(){n0.push(oi),oi=!1}function ho(){const t=n0.pop();oi=t===void 0?!0:t}function pn(t,e,n){if(oi&&Dn){let r=ll.get(t);r||ll.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=hp()),r0(i)}}function r0(t,e){let n=!1;Bo<=Pd?t0(t)||(t.n|=mi,n=!e0(t)):n=!t.has(Dn),n&&(t.add(Dn),Dn.deps.push(t))}function Nr(t,e,n,r,i,s){const o=ll.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&he(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":he(t)?lp(n)&&a.push(o.get("length")):(a.push(o.get(qi)),ks(t)&&a.push(o.get(kd)));break;case"delete":he(t)||(a.push(o.get(qi)),ks(t)&&a.push(o.get(kd)));break;case"set":ks(t)&&a.push(o.get(qi));break}if(a.length===1)a[0]&&Nd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Nd(hp(c))}}function Nd(t,e){const n=he(t)?t:[...t];for(const r of n)r.computed&&n_(r);for(const r of n)r.computed||n_(r)}function n_(t,e){(t!==Dn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function AP(t,e){var n;return(n=ll.get(t))==null?void 0:n.get(e)}const SP=sp("__proto__,__v_isRef,__isVue"),i0=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cp)),RP=fp(),PP=fp(!1,!0),kP=fp(!0),r_=NP();function NP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Me(this);for(let s=0,o=this.length;s<o;s++)pn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Me)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){uo();const r=Me(this)[e].apply(this,n);return ho(),r}}),t}function OP(t){const e=Me(this);return pn(e,"has",t),e.hasOwnProperty(t)}function fp(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?GP:l0:e?c0:a0).get(r))return r;const o=he(r);if(!t){if(o&&Re(r_,i))return Reflect.get(r_,i,s);if(i==="hasOwnProperty")return OP}const a=Reflect.get(r,i,s);return(cp(i)?i0.has(i):SP(i))||(t||pn(r,"get",i),e)?a:It(a)?o&&lp(i)?a:a.value:tt(a)?t?h0(a):lu(a):a}}const DP=s0(),MP=s0(!0);function s0(t=!1){return function(n,r,i,s){let o=n[r];if(js(o)&&It(o)&&!It(i))return!1;if(!t&&(!ul(i)&&!js(i)&&(o=Me(o),i=Me(i)),!he(n)&&It(o)&&!It(i)))return o.value=i,!0;const a=he(n)&&lp(r)?Number(r)<n.length:Re(n,r),c=Reflect.set(n,r,i,s);return n===Me(s)&&(a?fa(i,o)&&Nr(n,"set",r,i):Nr(n,"add",r,i)),c}}function xP(t,e){const n=Re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nr(t,"delete",e,void 0),r}function LP(t,e){const n=Reflect.has(t,e);return(!cp(e)||!i0.has(e))&&pn(t,"has",e),n}function FP(t){return pn(t,"iterate",he(t)?"length":qi),Reflect.ownKeys(t)}const o0={get:RP,set:DP,deleteProperty:xP,has:LP,ownKeys:FP},$P={get:kP,set(t,e){return!0},deleteProperty(t,e){return!0}},VP=bt({},o0,{get:PP,set:MP}),pp=t=>t,cu=t=>Reflect.getPrototypeOf(t);function bc(t,e,n=!1,r=!1){t=t.__v_raw;const i=Me(t),s=Me(e);n||(e!==s&&pn(i,"get",e),pn(i,"get",s));const{has:o}=cu(i),a=r?pp:n?yp:pa;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Cc(t,e=!1){const n=this.__v_raw,r=Me(n),i=Me(t);return e||(t!==i&&pn(r,"has",t),pn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ac(t,e=!1){return t=t.__v_raw,!e&&pn(Me(t),"iterate",qi),Reflect.get(t,"size",t)}function i_(t){t=Me(t);const e=Me(this);return cu(e).has.call(e,t)||(e.add(t),Nr(e,"add",t,t)),this}function s_(t,e){e=Me(e);const n=Me(this),{has:r,get:i}=cu(n);let s=r.call(n,t);s||(t=Me(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?fa(e,o)&&Nr(n,"set",t,e):Nr(n,"add",t,e),this}function o_(t){const e=Me(this),{has:n,get:r}=cu(e);let i=n.call(e,t);i||(t=Me(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Nr(e,"delete",t,void 0),s}function a_(){const t=Me(this),e=t.size!==0,n=t.clear();return e&&Nr(t,"clear",void 0,void 0),n}function Sc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Me(o),c=e?pp:t?yp:pa;return!t&&pn(a,"iterate",qi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Rc(t,e,n){return function(...r){const i=this.__v_raw,s=Me(i),o=ks(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?pp:e?yp:pa;return!e&&pn(s,"iterate",c?kd:qi),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Wr(t){return function(...e){return t==="delete"?!1:this}}function UP(){const t={get(s){return bc(this,s)},get size(){return Ac(this)},has:Cc,add:i_,set:s_,delete:o_,clear:a_,forEach:Sc(!1,!1)},e={get(s){return bc(this,s,!1,!0)},get size(){return Ac(this)},has:Cc,add:i_,set:s_,delete:o_,clear:a_,forEach:Sc(!1,!0)},n={get(s){return bc(this,s,!0)},get size(){return Ac(this,!0)},has(s){return Cc.call(this,s,!0)},add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear"),forEach:Sc(!0,!1)},r={get(s){return bc(this,s,!0,!0)},get size(){return Ac(this,!0)},has(s){return Cc.call(this,s,!0)},add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear"),forEach:Sc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Rc(s,!1,!1),n[s]=Rc(s,!0,!1),e[s]=Rc(s,!1,!0),r[s]=Rc(s,!0,!0)}),[t,n,e,r]}const[BP,jP,HP,WP]=UP();function gp(t,e){const n=e?t?WP:HP:t?jP:BP;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Re(n,i)&&i in r?n:r,i,s)}const zP={get:gp(!1,!1)},qP={get:gp(!1,!0)},KP={get:gp(!0,!1)},a0=new WeakMap,c0=new WeakMap,l0=new WeakMap,GP=new WeakMap;function YP(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QP(t){return t.__v_skip||!Object.isExtensible(t)?0:YP(hP(t))}function lu(t){return js(t)?t:mp(t,!1,o0,zP,a0)}function u0(t){return mp(t,!1,VP,qP,c0)}function h0(t){return mp(t,!0,$P,KP,l0)}function mp(t,e,n,r,i){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=QP(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ns(t){return js(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function ul(t){return!!(t&&t.__v_isShallow)}function d0(t){return Ns(t)||js(t)}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function _p(t){return cl(t,"__v_skip",!0),t}const pa=t=>tt(t)?lu(t):t,yp=t=>tt(t)?h0(t):t;function f0(t){oi&&Dn&&(t=Me(t),r0(t.dep||(t.dep=hp())))}function p0(t,e){t=Me(t);const n=t.dep;n&&Nd(n)}function It(t){return!!(t&&t.__v_isRef===!0)}function Ht(t){return m0(t,!1)}function g0(t){return m0(t,!0)}function m0(t,e){return It(t)?t:new JP(t,e)}class JP{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Me(e),this._value=n?e:pa(e)}get value(){return f0(this),this._value}set value(e){const n=this.__v_isShallow||ul(e)||js(e);e=n?e:Me(e),fa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pa(e),p0(this))}}function kt(t){return It(t)?t.value:t}const XP={get:(t,e,n)=>kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return It(i)&&!It(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _0(t){return Ns(t)?t:new Proxy(t,XP)}function ZP(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=t1(t,n);return e}class e1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return AP(Me(this._object),this._key)}}function t1(t,e,n){const r=t[e];return It(r)?r:new e1(t,e,n)}class n1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dp(e,()=>{this._dirty||(this._dirty=!0,p0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Me(this);return f0(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function r1(t,e,n=!1){let r,i;const s=ge(t);return s?(r=t,i=$n):(r=t.get,i=t.set),new n1(r,i,s||!i,n)}function ai(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){uu(s,e,n)}return i}function Vn(t,e,n,r){if(ge(t)){const s=ai(t,e,n,r);return s&&qw(s)&&s.catch(o=>{uu(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Vn(t[s],e,n,r));return i}function uu(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){ai(c,null,10,[t,o,a]);return}}i1(t,n,i,r)}function i1(t,e,n,r=!0){console.error(t)}let ga=!1,Od=!1;const Wt=[];let Gn=0;const Os=[];let br=null,Li=0;const y0=Promise.resolve();let vp=null;function v0(t){const e=vp||y0;return t?e.then(this?t.bind(this):t):e}function s1(t){let e=Gn+1,n=Wt.length;for(;e<n;){const r=e+n>>>1;ma(Wt[r])<t?e=r+1:n=r}return e}function wp(t){(!Wt.length||!Wt.includes(t,ga&&t.allowRecurse?Gn+1:Gn))&&(t.id==null?Wt.push(t):Wt.splice(s1(t.id),0,t),w0())}function w0(){!ga&&!Od&&(Od=!0,vp=y0.then(T0))}function o1(t){const e=Wt.indexOf(t);e>Gn&&Wt.splice(e,1)}function a1(t){he(t)?Os.push(...t):(!br||!br.includes(t,t.allowRecurse?Li+1:Li))&&Os.push(t),w0()}function c_(t,e=ga?Gn+1:0){for(;e<Wt.length;e++){const n=Wt[e];n&&n.pre&&(Wt.splice(e,1),e--,n())}}function E0(t){if(Os.length){const e=[...new Set(Os)];if(Os.length=0,br){br.push(...e);return}for(br=e,br.sort((n,r)=>ma(n)-ma(r)),Li=0;Li<br.length;Li++)br[Li]();br=null,Li=0}}const ma=t=>t.id==null?1/0:t.id,c1=(t,e)=>{const n=ma(t)-ma(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function T0(t){Od=!1,ga=!0,Wt.sort(c1);const e=$n;try{for(Gn=0;Gn<Wt.length;Gn++){const n=Wt[Gn];n&&n.active!==!1&&ai(n,null,14)}}finally{Gn=0,Wt.length=0,E0(),ga=!1,vp=null,(Wt.length||Os.length)&&T0()}}function l1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ye;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Ye;p&&(i=n.map(m=>Ct(m)?m.trim():m)),h&&(i=n.map(pP))}let a,c=r[a=Th(e)]||r[a=Th(ir(e))];!c&&s&&(c=r[a=Th(lo(e))]),c&&Vn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(l,t,6,i)}}function I0(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ge(t)){const c=l=>{const u=I0(l,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(tt(t)&&r.set(t,null),null):(he(s)?s.forEach(c=>o[c]=null):bt(o,s),tt(t)&&r.set(t,o),o)}function hu(t,e){return!t||!ru(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,lo(e))||Re(t,e))}let Dt=null,b0=null;function hl(t){const e=Dt;return Dt=t,b0=t&&t.type.__scopeId||null,e}function C0(t,e=Dt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&v_(-1);const s=hl(e);let o;try{o=t(...i)}finally{hl(s),r._d&&v_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:w}=t;let C,R;const N=hl(t);try{if(n.shapeFlag&4){const P=i||r;C=Kn(u.call(P,P,h,s,m,p,y)),R=c}else{const P=e;C=Kn(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),R=e.props?c:u1(c)}}catch(P){Xo.length=0,uu(P,t,1),C=qt(_i)}let k=C;if(R&&w!==!1){const P=Object.keys(R),{shapeFlag:B}=k;P.length&&B&7&&(o&&P.some(op)&&(R=h1(R,o)),k=Hs(k,R))}return n.dirs&&(k=Hs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),C=k,hl(N),C}const u1=t=>{let e;for(const n in t)(n==="class"||n==="style"||ru(n))&&((e||(e={}))[n]=t[n]);return e},h1=(t,e)=>{const n={};for(const r in t)(!op(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function d1(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?l_(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!hu(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?l_(r,o,l):!0:!!o;return!1}function l_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!hu(n,s))return!0}return!1}function f1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const p1=t=>t.__isSuspense;function g1(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):a1(t)}const Pc={};function ci(t,e,n){return A0(t,e,n)}function A0(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ye){var a;const c=Zw()===((a=Et)==null?void 0:a.scope)?Et:null;let l,u=!1,h=!1;if(It(t)?(l=()=>t.value,u=ul(t)):Ns(t)?(l=()=>t,r=!0):he(t)?(h=!0,u=t.some(P=>Ns(P)||ul(P)),l=()=>t.map(P=>{if(It(P))return P.value;if(Ns(P))return $i(P);if(ge(P))return ai(P,c,2)})):ge(t)?e?l=()=>ai(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Vn(t,c,3,[m])}:l=$n,e&&r){const P=l;l=()=>$i(P())}let p,m=P=>{p=N.onStop=()=>{ai(P,c,4)}},y;if(va)if(m=$n,e?n&&Vn(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=ck();y=P.__watcherHandles||(P.__watcherHandles=[])}else return $n;let w=h?new Array(t.length).fill(Pc):Pc;const C=()=>{if(N.active)if(e){const P=N.run();(r||u||(h?P.some((B,H)=>fa(B,w[H])):fa(P,w)))&&(p&&p(),Vn(e,c,3,[P,w===Pc?void 0:h&&w[0]===Pc?[]:w,m]),w=P)}else N.run()};C.allowRecurse=!!e;let R;i==="sync"?R=C:i==="post"?R=()=>ln(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),R=()=>wp(C));const N=new dp(l,R);e?n?C():w=N.run():i==="post"?ln(N.run.bind(N),c&&c.suspense):N.run();const k=()=>{N.stop(),c&&c.scope&&ap(c.scope.effects,N)};return y&&y.push(k),k}function m1(t,e,n){const r=this.proxy,i=Ct(t)?t.includes(".")?S0(r,t):()=>r[t]:t.bind(r,r);let s;ge(e)?s=e:(s=e.handler,n=e);const o=Et;Ws(this);const a=A0(i,s.bind(r),n);return o?Ws(o):Ki(),a}function S0(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $i(t,e){if(!tt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))$i(t.value,e);else if(he(t))for(let n=0;n<t.length;n++)$i(t[n],e);else if(zw(t)||ks(t))t.forEach(n=>{$i(n,e)});else if(Gw(t))for(const n in t)$i(t[n],e);return t}function _1(t,e){const n=Dt;if(n===null)return t;const r=gu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ye]=e[s];o&&(ge(o)&&(o={mounted:o,updated:o}),o.deep&&$i(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ni(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(uo(),Vn(c,n,8,[t.el,a,t,e]),ho())}}function lr(t,e){return ge(t)?(()=>bt({name:t.name},e,{setup:t}))():t}const Qo=t=>!!t.type.__asyncLoader,R0=t=>t.type.__isKeepAlive;function y1(t,e){P0(t,"a",e)}function v1(t,e){P0(t,"da",e)}function P0(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(du(e,r,n),n){let i=n.parent;for(;i&&i.parent;)R0(i.parent.vnode)&&w1(r,e,n,i),i=i.parent}}function w1(t,e,n,r){const i=du(e,t,r,!0);Tp(()=>{ap(r[e],i)},n)}function du(t,e,n=Et,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;uo(),Ws(n);const a=Vn(e,n,t,o);return Ki(),ho(),a});return r?i.unshift(s):i.push(s),s}}const Fr=t=>(e,n=Et)=>(!va||t==="sp")&&du(t,(...r)=>e(...r),n),E1=Fr("bm"),Ep=Fr("m"),T1=Fr("bu"),I1=Fr("u"),b1=Fr("bum"),Tp=Fr("um"),k0=Fr("sp"),C1=Fr("rtg"),A1=Fr("rtc");function S1(t,e=Et){du("ec",t,e)}const N0="components";function q3(t,e){return P1(N0,t,!0,e)||t}const R1=Symbol.for("v-ndc");function P1(t,e,n=!0,r=!1){const i=Dt||Et;if(i){const s=i.type;if(t===N0){const a=sk(s,!1);if(a&&(a===e||a===ir(e)||a===ou(ir(e))))return s}const o=u_(i[t]||s[t],e)||u_(i.appContext[t],e);return!o&&r?s:o}}function u_(t,e){return t&&(t[e]||t[ir(e)]||t[ou(ir(e))])}function O0(t,e,n={},r,i){if(Dt.isCE||Dt.parent&&Qo(Dt.parent)&&Dt.parent.isCE)return e!=="default"&&(n.name=e),qt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),dn();const o=s&&D0(s(n)),a=ya(Cn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function D0(t){return t.some(e=>pl(e)?!(e.type===_i||e.type===Cn&&!D0(e.children)):!0)?t:null}const Dd=t=>t?q0(t)?gu(t)||t.proxy:Dd(t.parent):null,Jo=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dd(t.parent),$root:t=>Dd(t.root),$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>t.f||(t.f=()=>wp(t.update)),$nextTick:t=>t.n||(t.n=v0.bind(t.proxy)),$watch:t=>m1.bind(t)}),Ch=(t,e)=>t!==Ye&&!t.__isScriptSetup&&Re(t,e),k1={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Ch(r,e))return o[e]=1,r[e];if(i!==Ye&&Re(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Re(l,e))return o[e]=3,s[e];if(n!==Ye&&Re(n,e))return o[e]=4,n[e];Md&&(o[e]=0)}}const u=Jo[e];let h,p;if(u)return e==="$attrs"&&pn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ye&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Ch(i,e)?(i[e]=n,!0):r!==Ye&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ye&&Re(t,o)||Ch(e,o)||(a=s[0])&&Re(a,o)||Re(r,o)||Re(Jo,o)||Re(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function h_(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Md=!0;function N1(t){const e=Ip(t),n=t.proxy,r=t.ctx;Md=!1,e.beforeCreate&&d_(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:w,deactivated:C,beforeDestroy:R,beforeUnmount:N,destroyed:k,unmounted:P,render:B,renderTracked:H,renderTriggered:oe,errorCaptured:pe,serverPrefetch:He,expose:be,inheritAttrs:it,components:Pt,directives:qe,filters:gr}=e;if(l&&O1(l,r,null),o)for(const Le in o){const ve=o[Le];ge(ve)&&(r[Le]=ve.bind(n))}if(i){const Le=i.call(n,n);tt(Le)&&(t.data=lu(Le))}if(Md=!0,s)for(const Le in s){const ve=s[Le],_n=ge(ve)?ve.bind(n,n):ge(ve.get)?ve.get.bind(n,n):$n,ft=!ge(ve)&&ge(ve.set)?ve.set.bind(n):$n,pt=zt({get:_n,set:ft});Object.defineProperty(r,Le,{enumerable:!0,configurable:!0,get:()=>pt.value,set:gt=>pt.value=gt})}if(a)for(const Le in a)M0(a[Le],r,n,Le);if(c){const Le=ge(c)?c.call(n):c;Reflect.ownKeys(Le).forEach(ve=>{Yc(ve,Le[ve])})}u&&d_(u,t,"c");function Ue(Le,ve){he(ve)?ve.forEach(_n=>Le(_n.bind(n))):ve&&Le(ve.bind(n))}if(Ue(E1,h),Ue(Ep,p),Ue(T1,m),Ue(I1,y),Ue(y1,w),Ue(v1,C),Ue(S1,pe),Ue(A1,H),Ue(C1,oe),Ue(b1,N),Ue(Tp,P),Ue(k0,He),he(be))if(be.length){const Le=t.exposed||(t.exposed={});be.forEach(ve=>{Object.defineProperty(Le,ve,{get:()=>n[ve],set:_n=>n[ve]=_n})})}else t.exposed||(t.exposed={});B&&t.render===$n&&(t.render=B),it!=null&&(t.inheritAttrs=it),Pt&&(t.components=Pt),qe&&(t.directives=qe)}function O1(t,e,n=$n){he(t)&&(t=xd(t));for(const r in t){const i=t[r];let s;tt(i)?"default"in i?s=Un(i.from||r,i.default,!0):s=Un(i.from||r):s=Un(i),It(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function d_(t,e,n){Vn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function M0(t,e,n,r){const i=r.includes(".")?S0(n,r):()=>n[r];if(Ct(t)){const s=e[t];ge(s)&&ci(i,s)}else if(ge(t))ci(i,t.bind(n));else if(tt(t))if(he(t))t.forEach(s=>M0(s,e,n,r));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&ci(i,s,t)}}function Ip(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>dl(c,l,o,!0)),dl(c,e,o)),tt(e)&&s.set(e,c),c}function dl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&dl(t,s,n,!0),i&&i.forEach(o=>dl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=D1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D1={data:f_,props:p_,emits:p_,methods:jo,computed:jo,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:jo,directives:jo,watch:x1,provide:f_,inject:M1};function f_(t,e){return e?t?function(){return bt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function M1(t,e){return jo(xd(t),xd(e))}function xd(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function jo(t,e){return t?bt(Object.create(null),t,e):e}function p_(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:bt(Object.create(null),h_(t),h_(e??{})):e}function x1(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function x0(){return{app:null,config:{isNativeTag:cP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L1=0;function F1(t,e){return function(r,i=null){ge(r)||(r=bt({},r)),i!=null&&!tt(i)&&(i=null);const s=x0(),o=new Set;let a=!1;const c=s.app={_uid:L1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:lk,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ge(l.install)?(o.add(l),l.install(c,...u)):ge(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=qt(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,gu(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){fl=c;try{return l()}finally{fl=null}}};return c}}let fl=null;function Yc(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function Un(t,e,n=!1){const r=Et||Dt;if(r||fl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function $1(t,e,n,r=!1){const i={},s={};cl(s,pu,1),t.propsDefaults=Object.create(null),L0(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:u0(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function V1(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Me(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(hu(t.emitsOptions,p))continue;const m=e[p];if(c)if(Re(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=ir(p);i[y]=Ld(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{L0(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Re(e,h)&&((u=lo(h))===h||!Re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ld(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Re(e,h))&&(delete s[h],l=!0)}l&&Nr(t,"set","$attrs")}function L0(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Gc(c))continue;const l=e[c];let u;i&&Re(i,u=ir(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:hu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Me(n),l=a||Ye;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ld(i,c,h,l[h],t,!Re(l,h))}}return o}function Ld(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Ws(i),r=l[n]=c.call(null,e),Ki())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===lo(n))&&(r=!0))}return r}function F0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ge(t)){const u=h=>{c=!0;const[p,m]=F0(h,e,!0);bt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return tt(t)&&r.set(t,Ps),Ps;if(he(s))for(let u=0;u<s.length;u++){const h=ir(s[u]);g_(h)&&(o[h]=Ye)}else if(s)for(const u in s){const h=ir(u);if(g_(h)){const p=s[u],m=o[h]=he(p)||ge(p)?{type:p}:bt({},p);if(m){const y=y_(Boolean,m.type),w=y_(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||Re(m,"default"))&&a.push(h)}}}const l=[o,a];return tt(t)&&r.set(t,l),l}function g_(t){return t[0]!=="$"}function m_(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function __(t,e){return m_(t)===m_(e)}function y_(t,e){return he(e)?e.findIndex(n=>__(n,t)):ge(e)&&__(e,t)?0:-1}const $0=t=>t[0]==="_"||t==="$stable",bp=t=>he(t)?t.map(Kn):[Kn(t)],U1=(t,e,n)=>{if(e._n)return e;const r=C0((...i)=>bp(e(...i)),n);return r._c=!1,r},V0=(t,e,n)=>{const r=t._ctx;for(const i in t){if($0(i))continue;const s=t[i];if(ge(s))e[i]=U1(i,s,r);else if(s!=null){const o=bp(s);e[i]=()=>o}}},U0=(t,e)=>{const n=bp(e);t.slots.default=()=>n},B1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Me(e),cl(e,"_",n)):V0(e,t.slots={})}else t.slots={},e&&U0(t,e);cl(t.slots,pu,1)},j1=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ye;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(bt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,V0(e,i)),o=e}else e&&(U0(t,e),o={default:1});if(s)for(const a in i)!$0(a)&&!(a in o)&&delete i[a]};function Fd(t,e,n,r,i=!1){if(he(t)){t.forEach((p,m)=>Fd(p,e&&(he(e)?e[m]:e),n,r,i));return}if(Qo(r)&&!i)return;const s=r.shapeFlag&4?gu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ye?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ct(l)?(u[l]=null,Re(h,l)&&(h[l]=null)):It(l)&&(l.value=null)),ge(c))ai(c,a,12,[o,u]);else{const p=Ct(c),m=It(c);if(p||m){const y=()=>{if(t.f){const w=p?Re(h,c)?h[c]:u[c]:c.value;i?he(w)&&ap(w,s):he(w)?w.includes(s)||w.push(s):p?(u[c]=[s],Re(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Re(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ln(y,n)):y()}}}const ln=g1;function H1(t){return W1(t)}function W1(t,e){const n=Rd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=$n,insertStaticContent:y}=t,w=(v,E,b,O=null,x=null,L=null,Y=!1,j=null,W=!!E.dynamicChildren)=>{if(v===E)return;v&&!No(v,E)&&(O=D(v),gt(v,x,L,!0),v=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:X}=E;switch(F){case fu:C(v,E,b,O);break;case _i:R(v,E,b,O);break;case Ah:v==null&&N(E,b,O,Y);break;case Cn:Pt(v,E,b,O,x,L,Y,j,W);break;default:X&1?B(v,E,b,O,x,L,Y,j,W):X&6?qe(v,E,b,O,x,L,Y,j,W):(X&64||X&128)&&F.process(v,E,b,O,x,L,Y,j,W,z)}ne!=null&&x&&Fd(ne,v&&v.ref,L,E||v,!E)},C=(v,E,b,O)=>{if(v==null)r(E.el=a(E.children),b,O);else{const x=E.el=v.el;E.children!==v.children&&l(x,E.children)}},R=(v,E,b,O)=>{v==null?r(E.el=c(E.children||""),b,O):E.el=v.el},N=(v,E,b,O)=>{[v.el,v.anchor]=y(v.children,E,b,O,v.el,v.anchor)},k=({el:v,anchor:E},b,O)=>{let x;for(;v&&v!==E;)x=p(v),r(v,b,O),v=x;r(E,b,O)},P=({el:v,anchor:E})=>{let b;for(;v&&v!==E;)b=p(v),i(v),v=b;i(E)},B=(v,E,b,O,x,L,Y,j,W)=>{Y=Y||E.type==="svg",v==null?H(E,b,O,x,L,Y,j,W):He(v,E,x,L,Y,j,W)},H=(v,E,b,O,x,L,Y,j)=>{let W,F;const{type:ne,props:X,shapeFlag:re,transition:le,dirs:_e}=v;if(W=v.el=o(v.type,L,X&&X.is,X),re&8?u(W,v.children):re&16&&pe(v.children,W,null,O,x,L&&ne!=="foreignObject",Y,j),_e&&Ni(v,null,O,"created"),oe(W,v,v.scopeId,Y,O),X){for(const Fe in X)Fe!=="value"&&!Gc(Fe)&&s(W,Fe,null,X[Fe],L,v.children,O,x,ct);"value"in X&&s(W,"value",null,X.value),(F=X.onVnodeBeforeMount)&&qn(F,O,v)}_e&&Ni(v,null,O,"beforeMount");const We=(!x||x&&!x.pendingBranch)&&le&&!le.persisted;We&&le.beforeEnter(W),r(W,E,b),((F=X&&X.onVnodeMounted)||We||_e)&&ln(()=>{F&&qn(F,O,v),We&&le.enter(W),_e&&Ni(v,null,O,"mounted")},x)},oe=(v,E,b,O,x)=>{if(b&&m(v,b),O)for(let L=0;L<O.length;L++)m(v,O[L]);if(x){let L=x.subTree;if(E===L){const Y=x.vnode;oe(v,Y,Y.scopeId,Y.slotScopeIds,x.parent)}}},pe=(v,E,b,O,x,L,Y,j,W=0)=>{for(let F=W;F<v.length;F++){const ne=v[F]=j?Kr(v[F]):Kn(v[F]);w(null,ne,E,b,O,x,L,Y,j)}},He=(v,E,b,O,x,L,Y)=>{const j=E.el=v.el;let{patchFlag:W,dynamicChildren:F,dirs:ne}=E;W|=v.patchFlag&16;const X=v.props||Ye,re=E.props||Ye;let le;b&&Oi(b,!1),(le=re.onVnodeBeforeUpdate)&&qn(le,b,E,v),ne&&Ni(E,v,b,"beforeUpdate"),b&&Oi(b,!0);const _e=x&&E.type!=="foreignObject";if(F?be(v.dynamicChildren,F,j,b,O,_e,L):Y||ve(v,E,j,null,b,O,_e,L,!1),W>0){if(W&16)it(j,E,X,re,b,O,x);else if(W&2&&X.class!==re.class&&s(j,"class",null,re.class,x),W&4&&s(j,"style",X.style,re.style,x),W&8){const We=E.dynamicProps;for(let Fe=0;Fe<We.length;Fe++){const Ke=We[Fe],cn=X[Ke],In=re[Ke];(In!==cn||Ke==="value")&&s(j,Ke,cn,In,x,v.children,b,O,ct)}}W&1&&v.children!==E.children&&u(j,E.children)}else!Y&&F==null&&it(j,E,X,re,b,O,x);((le=re.onVnodeUpdated)||ne)&&ln(()=>{le&&qn(le,b,E,v),ne&&Ni(E,v,b,"updated")},O)},be=(v,E,b,O,x,L,Y)=>{for(let j=0;j<E.length;j++){const W=v[j],F=E[j],ne=W.el&&(W.type===Cn||!No(W,F)||W.shapeFlag&70)?h(W.el):b;w(W,F,ne,null,O,x,L,Y,!0)}},it=(v,E,b,O,x,L,Y)=>{if(b!==O){if(b!==Ye)for(const j in b)!Gc(j)&&!(j in O)&&s(v,j,b[j],null,Y,E.children,x,L,ct);for(const j in O){if(Gc(j))continue;const W=O[j],F=b[j];W!==F&&j!=="value"&&s(v,j,F,W,Y,E.children,x,L,ct)}"value"in O&&s(v,"value",b.value,O.value)}},Pt=(v,E,b,O,x,L,Y,j,W)=>{const F=E.el=v?v.el:a(""),ne=E.anchor=v?v.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:le}=E;le&&(j=j?j.concat(le):le),v==null?(r(F,b,O),r(ne,b,O),pe(E.children,b,ne,x,L,Y,j,W)):X>0&&X&64&&re&&v.dynamicChildren?(be(v.dynamicChildren,re,b,x,L,Y,j),(E.key!=null||x&&E===x.subTree)&&B0(v,E,!0)):ve(v,E,b,ne,x,L,Y,j,W)},qe=(v,E,b,O,x,L,Y,j,W)=>{E.slotScopeIds=j,v==null?E.shapeFlag&512?x.ctx.activate(E,b,O,Y,W):gr(E,b,O,x,L,Y,W):Zt(v,E,W)},gr=(v,E,b,O,x,L,Y)=>{const j=v.component=ek(v,O,x);if(R0(v)&&(j.ctx.renderer=z),tk(j),j.asyncDep){if(x&&x.registerDep(j,Ue),!v.el){const W=j.subTree=qt(_i);R(null,W,E,b)}return}Ue(j,v,E,b,x,L,Y)},Zt=(v,E,b)=>{const O=E.component=v.component;if(d1(v,E,b))if(O.asyncDep&&!O.asyncResolved){Le(O,E,b);return}else O.next=E,o1(O.update),O.update();else E.el=v.el,O.vnode=E},Ue=(v,E,b,O,x,L,Y)=>{const j=()=>{if(v.isMounted){let{next:ne,bu:X,u:re,parent:le,vnode:_e}=v,We=ne,Fe;Oi(v,!1),ne?(ne.el=_e.el,Le(v,ne,Y)):ne=_e,X&&Ih(X),(Fe=ne.props&&ne.props.onVnodeBeforeUpdate)&&qn(Fe,le,ne,_e),Oi(v,!0);const Ke=bh(v),cn=v.subTree;v.subTree=Ke,w(cn,Ke,h(cn.el),D(cn),v,x,L),ne.el=Ke.el,We===null&&f1(v,Ke.el),re&&ln(re,x),(Fe=ne.props&&ne.props.onVnodeUpdated)&&ln(()=>qn(Fe,le,ne,_e),x)}else{let ne;const{el:X,props:re}=E,{bm:le,m:_e,parent:We}=v,Fe=Qo(E);if(Oi(v,!1),le&&Ih(le),!Fe&&(ne=re&&re.onVnodeBeforeMount)&&qn(ne,We,E),Oi(v,!0),X&&Ne){const Ke=()=>{v.subTree=bh(v),Ne(X,v.subTree,v,x,null)};Fe?E.type.__asyncLoader().then(()=>!v.isUnmounted&&Ke()):Ke()}else{const Ke=v.subTree=bh(v);w(null,Ke,b,O,v,x,L),E.el=Ke.el}if(_e&&ln(_e,x),!Fe&&(ne=re&&re.onVnodeMounted)){const Ke=E;ln(()=>qn(ne,We,Ke),x)}(E.shapeFlag&256||We&&Qo(We.vnode)&&We.vnode.shapeFlag&256)&&v.a&&ln(v.a,x),v.isMounted=!0,E=b=O=null}},W=v.effect=new dp(j,()=>wp(F),v.scope),F=v.update=()=>W.run();F.id=v.uid,Oi(v,!0),F()},Le=(v,E,b)=>{E.component=v;const O=v.vnode.props;v.vnode=E,v.next=null,V1(v,E.props,O,b),j1(v,E.children,b),uo(),c_(),ho()},ve=(v,E,b,O,x,L,Y,j,W=!1)=>{const F=v&&v.children,ne=v?v.shapeFlag:0,X=E.children,{patchFlag:re,shapeFlag:le}=E;if(re>0){if(re&128){ft(F,X,b,O,x,L,Y,j,W);return}else if(re&256){_n(F,X,b,O,x,L,Y,j,W);return}}le&8?(ne&16&&ct(F,x,L),X!==F&&u(b,X)):ne&16?le&16?ft(F,X,b,O,x,L,Y,j,W):ct(F,x,L,!0):(ne&8&&u(b,""),le&16&&pe(X,b,O,x,L,Y,j,W))},_n=(v,E,b,O,x,L,Y,j,W)=>{v=v||Ps,E=E||Ps;const F=v.length,ne=E.length,X=Math.min(F,ne);let re;for(re=0;re<X;re++){const le=E[re]=W?Kr(E[re]):Kn(E[re]);w(v[re],le,b,null,x,L,Y,j,W)}F>ne?ct(v,x,L,!0,!1,X):pe(E,b,O,x,L,Y,j,W,X)},ft=(v,E,b,O,x,L,Y,j,W)=>{let F=0;const ne=E.length;let X=v.length-1,re=ne-1;for(;F<=X&&F<=re;){const le=v[F],_e=E[F]=W?Kr(E[F]):Kn(E[F]);if(No(le,_e))w(le,_e,b,null,x,L,Y,j,W);else break;F++}for(;F<=X&&F<=re;){const le=v[X],_e=E[re]=W?Kr(E[re]):Kn(E[re]);if(No(le,_e))w(le,_e,b,null,x,L,Y,j,W);else break;X--,re--}if(F>X){if(F<=re){const le=re+1,_e=le<ne?E[le].el:O;for(;F<=re;)w(null,E[F]=W?Kr(E[F]):Kn(E[F]),b,_e,x,L,Y,j,W),F++}}else if(F>re)for(;F<=X;)gt(v[F],x,L,!0),F++;else{const le=F,_e=F,We=new Map;for(F=_e;F<=re;F++){const Lt=E[F]=W?Kr(E[F]):Kn(E[F]);Lt.key!=null&&We.set(Lt.key,F)}let Fe,Ke=0;const cn=re-_e+1;let In=!1,mr=0;const yn=new Array(cn);for(F=0;F<cn;F++)yn[F]=0;for(F=le;F<=X;F++){const Lt=v[F];if(Ke>=cn){gt(Lt,x,L,!0);continue}let en;if(Lt.key!=null)en=We.get(Lt.key);else for(Fe=_e;Fe<=re;Fe++)if(yn[Fe-_e]===0&&No(Lt,E[Fe])){en=Fe;break}en===void 0?gt(Lt,x,L,!0):(yn[en-_e]=F+1,en>=mr?mr=en:In=!0,w(Lt,E[en],b,null,x,L,Y,j,W),Ke++)}const Pi=In?z1(yn):Ps;for(Fe=Pi.length-1,F=cn-1;F>=0;F--){const Lt=_e+F,en=E[Lt],zn=Lt+1<ne?E[Lt+1].el:O;yn[F]===0?w(null,en,b,zn,x,L,Y,j,W):In&&(Fe<0||F!==Pi[Fe]?pt(en,b,zn,2):Fe--)}}},pt=(v,E,b,O,x=null)=>{const{el:L,type:Y,transition:j,children:W,shapeFlag:F}=v;if(F&6){pt(v.component.subTree,E,b,O);return}if(F&128){v.suspense.move(E,b,O);return}if(F&64){Y.move(v,E,b,z);return}if(Y===Cn){r(L,E,b);for(let X=0;X<W.length;X++)pt(W[X],E,b,O);r(v.anchor,E,b);return}if(Y===Ah){k(v,E,b);return}if(O!==2&&F&1&&j)if(O===0)j.beforeEnter(L),r(L,E,b),ln(()=>j.enter(L),x);else{const{leave:X,delayLeave:re,afterLeave:le}=j,_e=()=>r(L,E,b),We=()=>{X(L,()=>{_e(),le&&le()})};re?re(L,_e,We):We()}else r(L,E,b)},gt=(v,E,b,O=!1,x=!1)=>{const{type:L,props:Y,ref:j,children:W,dynamicChildren:F,shapeFlag:ne,patchFlag:X,dirs:re}=v;if(j!=null&&Fd(j,null,b,v,!0),ne&256){E.ctx.deactivate(v);return}const le=ne&1&&re,_e=!Qo(v);let We;if(_e&&(We=Y&&Y.onVnodeBeforeUnmount)&&qn(We,E,v),ne&6)_s(v.component,b,O);else{if(ne&128){v.suspense.unmount(b,O);return}le&&Ni(v,null,E,"beforeUnmount"),ne&64?v.type.remove(v,E,b,x,z,O):F&&(L!==Cn||X>0&&X&64)?ct(F,E,b,!1,!0):(L===Cn&&X&384||!x&&ne&16)&&ct(W,E,b),O&&Br(v)}(_e&&(We=Y&&Y.onVnodeUnmounted)||le)&&ln(()=>{We&&qn(We,E,v),le&&Ni(v,null,E,"unmounted")},b)},Br=v=>{const{type:E,el:b,anchor:O,transition:x}=v;if(E===Cn){Nn(b,O);return}if(E===Ah){P(v);return}const L=()=>{i(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:Y,delayLeave:j}=x,W=()=>Y(b,L);j?j(v.el,L,W):W()}else L()},Nn=(v,E)=>{let b;for(;v!==E;)b=p(v),i(v),v=b;i(E)},_s=(v,E,b)=>{const{bum:O,scope:x,update:L,subTree:Y,um:j}=v;O&&Ih(O),x.stop(),L&&(L.active=!1,gt(Y,v,E,b)),j&&ln(j,E),ln(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ct=(v,E,b,O=!1,x=!1,L=0)=>{for(let Y=L;Y<v.length;Y++)gt(v[Y],E,b,O,x)},D=v=>v.shapeFlag&6?D(v.component.subTree):v.shapeFlag&128?v.suspense.next():p(v.anchor||v.el),J=(v,E,b)=>{v==null?E._vnode&&gt(E._vnode,null,null,!0):w(E._vnode||null,v,E,null,null,null,b),c_(),E0(),E._vnode=v},z={p:w,um:gt,m:pt,r:Br,mt:gr,mc:pe,pc:ve,pbc:be,n:D,o:t};let ee,Ne;return e&&([ee,Ne]=e(z)),{render:J,hydrate:ee,createApp:F1(J,ee)}}function Oi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function B0(t,e,n=!1){const r=t.children,i=e.children;if(he(r)&&he(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Kr(i[s]),a.el=o.el),n||B0(o,a)),a.type===fu&&(a.el=o.el)}}function z1(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const q1=t=>t.__isTeleport,Cn=Symbol.for("v-fgt"),fu=Symbol.for("v-txt"),_i=Symbol.for("v-cmt"),Ah=Symbol.for("v-stc"),Xo=[];let xn=null;function dn(t=!1){Xo.push(xn=t?null:[])}function K1(){Xo.pop(),xn=Xo[Xo.length-1]||null}let _a=1;function v_(t){_a+=t}function j0(t){return t.dynamicChildren=_a>0?xn||Ps:null,K1(),_a>0&&xn&&xn.push(t),t}function Or(t,e,n,r,i,s){return j0(ti(t,e,n,r,i,s,!0))}function ya(t,e,n,r,i){return j0(qt(t,e,n,r,i,!0))}function pl(t){return t?t.__v_isVNode===!0:!1}function No(t,e){return t.type===e.type&&t.key===e.key}const pu="__vInternal",H0=({key:t})=>t??null,Qc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||It(t)||ge(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function ti(t,e=null,n=null,r=0,i=null,s=t===Cn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&H0(e),ref:e&&Qc(e),scopeId:b0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Cp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ct(n)?8:16),_a>0&&!o&&xn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&xn.push(c),c}const qt=G1;function G1(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===R1)&&(t=_i),pl(t)){const a=Hs(t,e,!0);return n&&Cp(a,n),_a>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag|=-2,a}if(ok(t)&&(t=t.__vccOpts),e){e=Y1(e);let{class:a,style:c}=e;a&&!Ct(a)&&(e.class=au(a)),tt(c)&&(d0(c)&&!he(c)&&(c=bt({},c)),e.style=up(c))}const o=Ct(t)?1:p1(t)?128:q1(t)?64:tt(t)?4:ge(t)?2:0;return ti(t,e,n,r,i,o,s,!0)}function Y1(t){return t?d0(t)||pu in t?bt({},t):t:null}function Hs(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?J1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&H0(a),ref:e&&e.ref?n&&i?he(i)?i.concat(Qc(e)):[i,Qc(e)]:Qc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Cn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hs(t.ssContent),ssFallback:t.ssFallback&&Hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Q1(t=" ",e=0){return qt(fu,null,t,e)}function W0(t="",e=!1){return e?(dn(),ya(_i,null,t)):qt(_i,null,t)}function Kn(t){return t==null||typeof t=="boolean"?qt(_i):he(t)?qt(Cn,null,t.slice()):typeof t=="object"?Kr(t):qt(fu,null,String(t))}function Kr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hs(t)}function Cp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Cp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pu in e)?e._ctx=Dt:i===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[Q1(e)]):n=8);t.children=e,t.shapeFlag|=n}function J1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=au([e.class,r.class]));else if(i==="style")e.style=up([e.style,r.style]);else if(ru(i)){const s=e[i],o=r[i];o&&s!==o&&!(he(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function qn(t,e,n,r=null){Vn(t,e,7,[n,r])}const X1=x0();let Z1=0;function ek(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||X1,s={uid:Z1++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:F0(r,i),emitsOptions:I0(r,i),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:r.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=l1.bind(null,s),t.ce&&t.ce(s),s}let Et=null;const z0=()=>Et||Dt;let Ap,vs,w_="__VUE_INSTANCE_SETTERS__";(vs=Rd()[w_])||(vs=Rd()[w_]=[]),vs.push(t=>Et=t),Ap=t=>{vs.length>1?vs.forEach(e=>e(t)):vs[0](t)};const Ws=t=>{Ap(t),t.scope.on()},Ki=()=>{Et&&Et.scope.off(),Ap(null)};function q0(t){return t.vnode.shapeFlag&4}let va=!1;function tk(t,e=!1){va=e;const{props:n,children:r}=t.vnode,i=q0(t);$1(t,n,i,e),B1(t,r);const s=i?nk(t,e):void 0;return va=!1,s}function nk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_p(new Proxy(t.ctx,k1));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ik(t):null;Ws(t),uo();const s=ai(r,t,0,[t.props,i]);if(ho(),Ki(),qw(s)){if(s.then(Ki,Ki),e)return s.then(o=>{E_(t,o,e)}).catch(o=>{uu(o,t,0)});t.asyncDep=s}else E_(t,s,e)}else K0(t,e)}function E_(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=_0(e)),K0(t,n)}let T_;function K0(t,e,n){const r=t.type;if(!t.render){if(!e&&T_&&!r.render){const i=r.template||Ip(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=bt(bt({isCustomElement:s,delimiters:a},o),c);r.render=T_(i,l)}}t.render=r.render||$n}Ws(t),uo(),N1(t),ho(),Ki()}function rk(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pn(t,"get","$attrs"),e[n]}}))}function ik(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rk(t)},slots:t.slots,emit:t.emit,expose:e}}function gu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_0(_p(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jo)return Jo[n](t)},has(e,n){return n in e||n in Jo}}))}function sk(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function ok(t){return ge(t)&&"__vccOpts"in t}const zt=(t,e)=>r1(t,e,va);function G0(t,e,n){const r=arguments.length;return r===2?tt(e)&&!he(e)?pl(e)?qt(t,null,[e]):qt(t,e):qt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pl(n)&&(n=[n]),qt(t,e,n))}const ak=Symbol.for("v-scx"),ck=()=>Un(ak),lk="3.3.4",uk="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,I_=Fi&&Fi.createElement("template"),hk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Fi.createElementNS(uk,t):Fi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Fi.createTextNode(t),createComment:t=>Fi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{I_.innerHTML=r?`<svg>${t}</svg>`:t;const a=I_.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fk(t,e,n){const r=t.style,i=Ct(n);if(n&&!i){if(e&&!Ct(e))for(const s in e)n[s]==null&&$d(r,s,"");for(const s in n)$d(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const b_=/\s*!important$/;function $d(t,e,n){if(he(n))n.forEach(r=>$d(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pk(t,e);b_.test(n)?t.setProperty(lo(r),n.replace(b_,""),"important"):t[r]=n}}const C_=["Webkit","Moz","ms"],Sh={};function pk(t,e){const n=Sh[e];if(n)return n;let r=ir(e);if(r!=="filter"&&r in t)return Sh[e]=r;r=ou(r);for(let i=0;i<C_.length;i++){const s=C_[i]+r;if(s in t)return Sh[e]=s}return e}const A_="http://www.w3.org/1999/xlink";function gk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(A_,e.slice(6,e.length)):t.setAttributeNS(A_,e,n);else{const s=wP(e);n==null||s&&!Yw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function mk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Yw(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function _k(t,e,n,r){t.addEventListener(e,n,r)}function yk(t,e,n,r){t.removeEventListener(e,n,r)}function vk(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=wk(e);if(r){const l=s[e]=Ik(r,i);_k(t,a,l,c)}else o&&(yk(t,a,o,c),s[e]=void 0)}}const S_=/(?:Once|Passive|Capture)$/;function wk(t){let e;if(S_.test(t)){e={};let r;for(;r=t.match(S_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lo(t.slice(2)),e]}let Rh=0;const Ek=Promise.resolve(),Tk=()=>Rh||(Ek.then(()=>Rh=0),Rh=Date.now());function Ik(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Vn(bk(r,n.value),e,5,[r])};return n.value=t,n.attached=Tk(),n}function bk(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const R_=/^on[a-z]/,Ck=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?dk(t,r,i):e==="style"?fk(t,n,r):ru(e)?op(e)||vk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ak(t,e,r,i))?mk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gk(t,e,r,i))};function Ak(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&R_.test(e)&&ge(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||R_.test(e)&&Ct(n)?!1:e in t}const Sk=["ctrl","shift","alt","meta"],Rk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sk.some(n=>t[`${n}Key`]&&!e.includes(n))},kc=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Rk[e[i]];if(s&&s(n,e))return}return t(n,...r)},Pk={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Oo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Oo(t,!0),r.enter(t)):r.leave(t,()=>{Oo(t,!1)}):Oo(t,e))},beforeUnmount(t,{value:e}){Oo(t,e)}};function Oo(t,e){t.style.display=e?t._vod:"none"}const kk=bt({patchProp:Ck},hk);let P_;function Nk(){return P_||(P_=H1(kk))}const Ok=(...t)=>{const e=Nk().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Dk(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dk(t){return Ct(t)?document.querySelector(t):t}var Mk=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const xk=Symbol();var k_;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k_||(k_={}));function Lk(){const t=Xw(!0),e=t.run(()=>Ht({}));let n=[],r=[];const i=_p({install(s){i._a=s,s.provide(xk,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Mk?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof window<"u";function Fk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Ph(t,e){const n={};for(const r in e){const i=e[r];n[r]=jn(i)?i.map(t):t(i)}return n}const Zo=()=>{},jn=Array.isArray,$k=/\/$/,Vk=t=>t.replace($k,"");function kh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Hk(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Uk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function N_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&zs(e.matched[r],n.matched[i])&&Y0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Y0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jk(t[n],e[n]))return!1;return!0}function jk(t,e){return jn(t)?O_(t,e):jn(e)?O_(e,t):t===e}function O_(t,e){return jn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Hk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wa;(function(t){t.pop="pop",t.push="push"})(wa||(wa={}));var ea;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ea||(ea={}));function Wk(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vk(t)}const zk=/^[^#]+#/;function qk(t,e){return t.replace(zk,"#")+e}function Kk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const mu=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Kk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function D_(t,e){return(history.state?history.state.position-e:-1)+t}const Vd=new Map;function Yk(t,e){Vd.set(t,e)}function Qk(t){const e=Vd.get(t);return Vd.delete(t),e}let Jk=()=>location.protocol+"//"+location.host;function Q0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),N_(c,"")}return N_(n,t)+r+i}function Xk(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=Q0(t,location),y=n.value,w=e.value;let C=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}C=w?p.position-w.position:0}else r(m);i.forEach(R=>{R(n.value,y,{delta:C,type:wa.pop,direction:C?C>0?ea.forward:ea.back:ea.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Be({},p.state,{scroll:mu()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function M_(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?mu():null}}function Zk(t){const{history:e,location:n}=window,r={value:Q0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Jk()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Be({},e.state,M_(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Be({},i.value,e.state,{forward:c,scroll:mu()});s(u.current,u,!0);const h=Be({},M_(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function eN(t){t=Wk(t);const e=Zk(t),n=Xk(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Be({location:"",base:t,go:r,createHref:qk.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function tN(t){return typeof t=="string"||t&&typeof t=="object"}function J0(t){return typeof t=="string"||typeof t=="symbol"}const zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X0=Symbol("");var x_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(x_||(x_={}));function qs(t,e){return Be(new Error,{type:t,[X0]:!0},e)}function wr(t,e){return t instanceof Error&&X0 in t&&(e==null||!!(t.type&e))}const L_="[^/]+?",nN={sensitive:!1,strict:!1,start:!0,end:!0},rN=/[.+*?^${}()[\]/\\]/g;function iN(t,e){const n=Be({},nN,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(rN,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:w,optional:C,regexp:R}=p;s.push({name:y,repeatable:w,optional:C});const N=R||L_;if(N!==L_){m+=10;try{new RegExp(`(${N})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+P.message)}}let k=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(k=C&&l.length<2?`(?:/${k})`:"/"+k),C&&(k+="?"),i+=k,m+=20,C&&(m+=-8),w&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:C}=m,R=y in l?l[y]:"";if(jn(R)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=jn(R)?R.join("/"):R;if(!N)if(C)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function sN(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oN(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=sN(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(F_(r))return 1;if(F_(i))return-1}return i.length-r.length}function F_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aN={type:0,value:""},cN=/[a-zA-Z0-9_]/;function lN(t){if(!t)return[[]];if(t==="/")return[[aN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:cN.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function uN(t,e,n){const r=iN(lN(t.path),n),i=Be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hN(t,e){const n=[],r=new Map;e=U_({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=dN(u);y.aliasOf=p&&p.record;const w=U_(e,u),C=[y];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of k)C.push(Be({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let R,N;for(const k of C){const{path:P}=k;if(h&&P[0]!=="/"){const B=h.record.path,H=B[B.length-1]==="/"?"":"/";k.path=h.record.path+(P&&H+P)}if(R=uN(k,h,w),p?p.alias.push(R):(N=N||R,N!==R&&N.alias.push(R),m&&u.name&&!V_(R)&&o(u.name)),y.children){const B=y.children;for(let H=0;H<B.length;H++)s(B[H],R,p&&p.children[H])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return N?()=>{o(N)}:Zo}function o(u){if(J0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&oN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Z0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!V_(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw qs(1,{location:u});w=p.record.name,m=Be($_(h.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&$_(u.params,p.keys.map(N=>N.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(N=>N.re.test(y)),p&&(m=p.parse(y),w=p.record.name);else{if(p=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!p)throw qs(1,{location:u,currentLocation:h});w=p.record.name,m=Be({},h.params,u.params),y=p.stringify(m)}const C=[];let R=p;for(;R;)C.unshift(R.record),R=R.parent;return{name:w,path:y,params:m,matched:C,meta:pN(C)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function $_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function V_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pN(t){return t.reduce((e,n)=>Be(e,n.meta),{})}function U_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Z0(t,e){return e.children.some(n=>n===t||Z0(t,n))}const eE=/#/g,gN=/&/g,mN=/\//g,_N=/=/g,yN=/\?/g,tE=/\+/g,vN=/%5B/g,wN=/%5D/g,nE=/%5E/g,EN=/%60/g,rE=/%7B/g,TN=/%7C/g,iE=/%7D/g,IN=/%20/g;function Sp(t){return encodeURI(""+t).replace(TN,"|").replace(vN,"[").replace(wN,"]")}function bN(t){return Sp(t).replace(rE,"{").replace(iE,"}").replace(nE,"^")}function Ud(t){return Sp(t).replace(tE,"%2B").replace(IN,"+").replace(eE,"%23").replace(gN,"%26").replace(EN,"`").replace(rE,"{").replace(iE,"}").replace(nE,"^")}function CN(t){return Ud(t).replace(_N,"%3D")}function AN(t){return Sp(t).replace(eE,"%23").replace(yN,"%3F")}function SN(t){return t==null?"":AN(t).replace(mN,"%2F")}function gl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function RN(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(tE," "),o=s.indexOf("="),a=gl(o<0?s:s.slice(0,o)),c=o<0?null:gl(s.slice(o+1));if(a in e){let l=e[a];jn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function B_(t){let e="";for(let n in t){const r=t[n];if(n=CN(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jn(r)?r.map(s=>s&&Ud(s)):[r&&Ud(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function PN(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const kN=Symbol(""),j_=Symbol(""),Rp=Symbol(""),sE=Symbol(""),Bd=Symbol("");function Do(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(qs(4,{from:n,to:e})):h instanceof Error?a(h):tN(h)?a(qs(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Nh(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(NN(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Gr(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Fk(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Gr(p,n,r,s,o)()}))}}return i}function NN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function H_(t){const e=Un(Rp),n=Un(sE),r=zt(()=>e.resolve(kt(t.to))),i=zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(zs.bind(null,u));if(p>-1)return p;const m=W_(c[l-2]);return l>1&&W_(u)===m&&h[h.length-1].path!==m?h.findIndex(zs.bind(null,c[l-2])):p}),s=zt(()=>i.value>-1&&xN(n.params,r.value.params)),o=zt(()=>i.value>-1&&i.value===n.matched.length-1&&Y0(n.params,r.value.params));function a(c={}){return MN(c)?e[kt(t.replace)?"replace":"push"](kt(t.to)).catch(Zo):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const ON=lr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:H_,setup(t,{slots:e}){const n=lu(H_(t)),{options:r}=Un(Rp),i=zt(()=>({[z_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[z_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:G0("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),DN=ON;function MN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xN(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!jn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function W_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const z_=(t,e,n)=>t??e??n,LN=lr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Un(Bd),i=zt(()=>t.route||r.value),s=Un(j_,0),o=zt(()=>{let l=kt(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=zt(()=>i.value.matched[o.value]);Yc(j_,zt(()=>o.value+1)),Yc(kN,a),Yc(Bd,i);const c=Ht();return ci(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!zs(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return q_(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=G0(p,Be({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return q_(n.default,{Component:C,route:l})||C}}});function q_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oE=LN;function FN(t){const e=hN(t.routes,t),n=t.parseQuery||RN,r=t.stringifyQuery||B_,i=t.history,s=Do(),o=Do(),a=Do(),c=g0(zr);let l=zr;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ph.bind(null,D=>""+D),h=Ph.bind(null,SN),p=Ph.bind(null,gl);function m(D,J){let z,ee;return J0(D)?(z=e.getRecordMatcher(D),ee=J):ee=D,e.addRoute(ee,z)}function y(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function w(){return e.getRoutes().map(D=>D.record)}function C(D){return!!e.getRecordMatcher(D)}function R(D,J){if(J=Be({},J||c.value),typeof D=="string"){const b=kh(n,D,J.path),O=e.resolve({path:b.path},J),x=i.createHref(b.fullPath);return Be(b,O,{params:p(O.params),hash:gl(b.hash),redirectedFrom:void 0,href:x})}let z;if("path"in D)z=Be({},D,{path:kh(n,D.path,J.path).path});else{const b=Be({},D.params);for(const O in b)b[O]==null&&delete b[O];z=Be({},D,{params:h(b)}),J.params=h(J.params)}const ee=e.resolve(z,J),Ne=D.hash||"";ee.params=u(p(ee.params));const v=Uk(r,Be({},D,{hash:bN(Ne),path:ee.path})),E=i.createHref(v);return Be({fullPath:v,hash:Ne,query:r===B_?PN(D.query):D.query||{}},ee,{redirectedFrom:void 0,href:E})}function N(D){return typeof D=="string"?kh(n,D,c.value.path):Be({},D)}function k(D,J){if(l!==D)return qs(8,{from:J,to:D})}function P(D){return oe(D)}function B(D){return P(Be(N(D),{replace:!0}))}function H(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:z}=J;let ee=typeof z=="function"?z(D):z;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=N(ee):{path:ee},ee.params={}),Be({query:D.query,hash:D.hash,params:"path"in ee?{}:D.params},ee)}}function oe(D,J){const z=l=R(D),ee=c.value,Ne=D.state,v=D.force,E=D.replace===!0,b=H(z);if(b)return oe(Be(N(b),{state:typeof b=="object"?Be({},Ne,b.state):Ne,force:v,replace:E}),J||z);const O=z;O.redirectedFrom=J;let x;return!v&&Bk(r,ee,z)&&(x=qs(16,{to:O,from:ee}),pt(ee,ee,!0,!1)),(x?Promise.resolve(x):be(O,ee)).catch(L=>wr(L)?wr(L,2)?L:ft(L):ve(L,O,ee)).then(L=>{if(L){if(wr(L,2))return oe(Be({replace:E},N(L.to),{state:typeof L.to=="object"?Be({},Ne,L.to.state):Ne,force:v}),J||O)}else L=Pt(O,ee,!0,E,Ne);return it(O,ee,L),L})}function pe(D,J){const z=k(D,J);return z?Promise.reject(z):Promise.resolve()}function He(D){const J=Nn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function be(D,J){let z;const[ee,Ne,v]=$N(D,J);z=Nh(ee.reverse(),"beforeRouteLeave",D,J);for(const b of ee)b.leaveGuards.forEach(O=>{z.push(Gr(O,D,J))});const E=pe.bind(null,D,J);return z.push(E),ct(z).then(()=>{z=[];for(const b of s.list())z.push(Gr(b,D,J));return z.push(E),ct(z)}).then(()=>{z=Nh(Ne,"beforeRouteUpdate",D,J);for(const b of Ne)b.updateGuards.forEach(O=>{z.push(Gr(O,D,J))});return z.push(E),ct(z)}).then(()=>{z=[];for(const b of v)if(b.beforeEnter)if(jn(b.beforeEnter))for(const O of b.beforeEnter)z.push(Gr(O,D,J));else z.push(Gr(b.beforeEnter,D,J));return z.push(E),ct(z)}).then(()=>(D.matched.forEach(b=>b.enterCallbacks={}),z=Nh(v,"beforeRouteEnter",D,J),z.push(E),ct(z))).then(()=>{z=[];for(const b of o.list())z.push(Gr(b,D,J));return z.push(E),ct(z)}).catch(b=>wr(b,8)?b:Promise.reject(b))}function it(D,J,z){a.list().forEach(ee=>He(()=>ee(D,J,z)))}function Pt(D,J,z,ee,Ne){const v=k(D,J);if(v)return v;const E=J===zr,b=Ts?history.state:{};z&&(ee||E?i.replace(D.fullPath,Be({scroll:E&&b&&b.scroll},Ne)):i.push(D.fullPath,Ne)),c.value=D,pt(D,J,z,E),ft()}let qe;function gr(){qe||(qe=i.listen((D,J,z)=>{if(!_s.listening)return;const ee=R(D),Ne=H(ee);if(Ne){oe(Be(Ne,{replace:!0}),ee).catch(Zo);return}l=ee;const v=c.value;Ts&&Yk(D_(v.fullPath,z.delta),mu()),be(ee,v).catch(E=>wr(E,12)?E:wr(E,2)?(oe(E.to,ee).then(b=>{wr(b,20)&&!z.delta&&z.type===wa.pop&&i.go(-1,!1)}).catch(Zo),Promise.reject()):(z.delta&&i.go(-z.delta,!1),ve(E,ee,v))).then(E=>{E=E||Pt(ee,v,!1),E&&(z.delta&&!wr(E,8)?i.go(-z.delta,!1):z.type===wa.pop&&wr(E,20)&&i.go(-1,!1)),it(ee,v,E)}).catch(Zo)}))}let Zt=Do(),Ue=Do(),Le;function ve(D,J,z){ft(D);const ee=Ue.list();return ee.length?ee.forEach(Ne=>Ne(D,J,z)):console.error(D),Promise.reject(D)}function _n(){return Le&&c.value!==zr?Promise.resolve():new Promise((D,J)=>{Zt.add([D,J])})}function ft(D){return Le||(Le=!D,gr(),Zt.list().forEach(([J,z])=>D?z(D):J()),Zt.reset()),D}function pt(D,J,z,ee){const{scrollBehavior:Ne}=t;if(!Ts||!Ne)return Promise.resolve();const v=!z&&Qk(D_(D.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return v0().then(()=>Ne(D,J,v)).then(E=>E&&Gk(E)).catch(E=>ve(E,D,J))}const gt=D=>i.go(D);let Br;const Nn=new Set,_s={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:C,getRoutes:w,resolve:R,options:t,push:P,replace:B,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:_n,install(D){const J=this;D.component("RouterLink",DN),D.component("RouterView",oE),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(c)}),Ts&&!Br&&c.value===zr&&(Br=!0,P(i.location).catch(Ne=>{}));const z={};for(const Ne in zr)Object.defineProperty(z,Ne,{get:()=>c.value[Ne],enumerable:!0});D.provide(Rp,J),D.provide(sE,u0(z)),D.provide(Bd,c);const ee=D.unmount;Nn.add(D),D.unmount=function(){Nn.delete(D),Nn.size<1&&(l=zr,qe&&qe(),qe=null,c.value=zr,Br=!1,Le=!1),ee()}}};function ct(D){return D.reduce((J,z)=>J.then(()=>He(z)),Promise.resolve())}return _s}function $N(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>zs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zs(l,c))||i.push(c))}return[n,r,i]}const VN=lr({__name:"App",setup(t){return(e,n)=>(dn(),ya(kt(oE)))}}),UN="modulepreload",BN=function(t){return"/"+t},K_={},jN=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=BN(s),s in K_)return;K_[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":UN,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var HN=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},aE={},Tn={};let Pp;const WN=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Tn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Tn.getSymbolTotalCodewords=function(e){return WN[e]};Tn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Tn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Pp=e};Tn.isKanjiModeEnabled=function(){return typeof Pp<"u"};Tn.toSJIS=function(e){return Pp(e)};var _u={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(_u);function cE(){this.buffer=[],this.length=0}cE.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var zN=cE;function qa(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}qa.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};qa.prototype.get=function(t,e){return this.data[t*this.size+e]};qa.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};qa.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var qN=qa,lE={};(function(t){const e=Tn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(lE);var uE={};const KN=Tn.getSymbolSize,G_=7;uE.getPositions=function(e){const n=KN(e);return[[0,0],[n-G_,0],[0,n-G_]]};var hE={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(hE);var yu={};const ni=_u,Nc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Oc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];yu.getBlocksCount=function(e,n){switch(n){case ni.L:return Nc[(e-1)*4+0];case ni.M:return Nc[(e-1)*4+1];case ni.Q:return Nc[(e-1)*4+2];case ni.H:return Nc[(e-1)*4+3];default:return}};yu.getTotalCodewordsCount=function(e,n){switch(n){case ni.L:return Oc[(e-1)*4+0];case ni.M:return Oc[(e-1)*4+1];case ni.Q:return Oc[(e-1)*4+2];case ni.H:return Oc[(e-1)*4+3];default:return}};var dE={},vu={};const ta=new Uint8Array(512),ml=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)ta[n]=e,ml[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)ta[n]=ta[n-255]})();vu.log=function(e){if(e<1)throw new Error("log("+e+")");return ml[e]};vu.exp=function(e){return ta[e]};vu.mul=function(e,n){return e===0||n===0?0:ta[ml[e]+ml[n]]};(function(t){const e=vu;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(dE);const fE=dE;function kp(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}kp.prototype.initialize=function(e){this.degree=e,this.genPoly=fE.generateECPolynomial(this.degree)};kp.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=fE.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var GN=kp,pE={},bi={},Np={};Np.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ur={};const gE="[0-9]+",YN="[A-Z $%*+\\-./:]+";let Ea="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ea=Ea.replace(/u/g,"\\u");const QN="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ea+`)(?:.|[\r
]))+`;ur.KANJI=new RegExp(Ea,"g");ur.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ur.BYTE=new RegExp(QN,"g");ur.NUMERIC=new RegExp(gE,"g");ur.ALPHANUMERIC=new RegExp(YN,"g");const JN=new RegExp("^"+Ea+"$"),XN=new RegExp("^"+gE+"$"),ZN=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ur.testKanji=function(e){return JN.test(e)};ur.testNumeric=function(e){return XN.test(e)};ur.testAlphanumeric=function(e){return ZN.test(e)};(function(t){const e=Np,n=ur;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(bi);(function(t){const e=Tn,n=yu,r=_u,i=bi,s=Np,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let w=1;w<=40;w++)if(m<=t.getCapacity(w,y,p))return w}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(w){const C=l(w.mode,m);y+=C+w.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,w){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=i.BYTE);const C=e.getSymbolTotalCodewords(m),R=n.getTotalCodewordsCount(m,y),N=(C-R)*8;if(w===i.MIXED)return N;const k=N-l(w,m);switch(w){case i.NUMERIC:return Math.floor(k/10*3);case i.ALPHANUMERIC:return Math.floor(k/11*2);case i.KANJI:return Math.floor(k/13);case i.BYTE:default:return Math.floor(k/8)}},t.getBestVersionForData=function(m,y){let w;const C=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,C);if(m.length===0)return 1;w=m[0]}else w=m;return c(w.mode,w.getLength(),C)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(pE);var mE={};const jd=Tn,_E=1335,eO=21522,Y_=jd.getBCHDigit(_E);mE.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;jd.getBCHDigit(i)-Y_>=0;)i^=_E<<jd.getBCHDigit(i)-Y_;return(r<<10|i)^eO};var yE={};const tO=bi;function Ks(t){this.mode=tO.NUMERIC,this.data=t.toString()}Ks.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ks.prototype.getLength=function(){return this.data.length};Ks.prototype.getBitsLength=function(){return Ks.getBitsLength(this.data.length)};Ks.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var nO=Ks;const rO=bi,Oh=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Gs(t){this.mode=rO.ALPHANUMERIC,this.data=t}Gs.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Gs.prototype.getLength=function(){return this.data.length};Gs.prototype.getBitsLength=function(){return Gs.getBitsLength(this.data.length)};Gs.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Oh.indexOf(this.data[n])*45;r+=Oh.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Oh.indexOf(this.data[n]),6)};var iO=Gs,sO=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const oO=sO,aO=bi;function Ys(t){this.mode=aO.BYTE,typeof t=="string"&&(t=oO(t)),this.data=new Uint8Array(t)}Ys.getBitsLength=function(e){return e*8};Ys.prototype.getLength=function(){return this.data.length};Ys.prototype.getBitsLength=function(){return Ys.getBitsLength(this.data.length)};Ys.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var cO=Ys;const lO=bi,uO=Tn;function Qs(t){this.mode=lO.KANJI,this.data=t}Qs.getBitsLength=function(e){return e*13};Qs.prototype.getLength=function(){return this.data.length};Qs.prototype.getBitsLength=function(){return Qs.getBitsLength(this.data.length)};Qs.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=uO.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var hO=Qs,vE={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,w,C;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,w=o[u],C=typeof o[u]>"u",(C||w>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var R=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(R)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(vE);var dO=vE.exports;(function(t){const e=bi,n=nO,r=iO,i=cO,s=hO,o=ur,a=Tn,c=dO;function l(R){return unescape(encodeURIComponent(R)).length}function u(R,N,k){const P=[];let B;for(;(B=R.exec(k))!==null;)P.push({data:B[0],index:B.index,mode:N,length:B[0].length});return P}function h(R){const N=u(o.NUMERIC,e.NUMERIC,R),k=u(o.ALPHANUMERIC,e.ALPHANUMERIC,R);let P,B;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,R),B=u(o.KANJI,e.KANJI,R)):(P=u(o.BYTE_KANJI,e.BYTE,R),B=[]),N.concat(k,P,B).sort(function(oe,pe){return oe.index-pe.index}).map(function(oe){return{data:oe.data,mode:oe.mode,length:oe.length}})}function p(R,N){switch(N){case e.NUMERIC:return n.getBitsLength(R);case e.ALPHANUMERIC:return r.getBitsLength(R);case e.KANJI:return s.getBitsLength(R);case e.BYTE:return i.getBitsLength(R)}}function m(R){return R.reduce(function(N,k){const P=N.length-1>=0?N[N.length-1]:null;return P&&P.mode===k.mode?(N[N.length-1].data+=k.data,N):(N.push(k),N)},[])}function y(R){const N=[];for(let k=0;k<R.length;k++){const P=R[k];switch(P.mode){case e.NUMERIC:N.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:N.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:N.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:N.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return N}function w(R,N){const k={},P={start:{}};let B=["start"];for(let H=0;H<R.length;H++){const oe=R[H],pe=[];for(let He=0;He<oe.length;He++){const be=oe[He],it=""+H+He;pe.push(it),k[it]={node:be,lastCount:0},P[it]={};for(let Pt=0;Pt<B.length;Pt++){const qe=B[Pt];k[qe]&&k[qe].node.mode===be.mode?(P[qe][it]=p(k[qe].lastCount+be.length,be.mode)-p(k[qe].lastCount,be.mode),k[qe].lastCount+=be.length):(k[qe]&&(k[qe].lastCount=be.length),P[qe][it]=p(be.length,be.mode)+4+e.getCharCountIndicator(be.mode,N))}}B=pe}for(let H=0;H<B.length;H++)P[B[H]].end=0;return{map:P,table:k}}function C(R,N){let k;const P=e.getBestModeForData(R);if(k=e.from(N,P),k!==e.BYTE&&k.bit<P.bit)throw new Error('"'+R+'" cannot be encoded with mode '+e.toString(k)+`.
 Suggested mode is: `+e.toString(P));switch(k===e.KANJI&&!a.isKanjiModeEnabled()&&(k=e.BYTE),k){case e.NUMERIC:return new n(R);case e.ALPHANUMERIC:return new r(R);case e.KANJI:return new s(R);case e.BYTE:return new i(R)}}t.fromArray=function(N){return N.reduce(function(k,P){return typeof P=="string"?k.push(C(P,null)):P.data&&k.push(C(P.data,P.mode)),k},[])},t.fromString=function(N,k){const P=h(N,a.isKanjiModeEnabled()),B=y(P),H=w(B,k),oe=c.find_path(H.map,"start","end"),pe=[];for(let He=1;He<oe.length-1;He++)pe.push(H.table[oe[He]].node);return t.fromArray(m(pe))},t.rawSplit=function(N){return t.fromArray(h(N,a.isKanjiModeEnabled()))}})(yE);const wu=Tn,Dh=_u,fO=zN,pO=qN,gO=lE,mO=uE,Hd=hE,Wd=yu,_O=GN,_l=pE,yO=mE,vO=bi,Mh=yE;function wO(t,e){const n=t.size,r=mO.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function EO(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function TO(t,e){const n=gO.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function IO(t,e){const n=t.size,r=_l.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function xh(t,e,n){const r=t.size,i=yO.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function bO(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function CO(t,e,n){const r=new fO;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),vO.getCharCountIndicator(c.mode,t)),c.write(r)});const i=wu.getSymbolTotalCodewords(t),s=Wd.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return AO(r,t,e)}function AO(t,e,n){const r=wu.getSymbolTotalCodewords(e),i=Wd.getTotalCodewordsCount(e,n),s=r-i,o=Wd.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new _O(p);let y=0;const w=new Array(o),C=new Array(o);let R=0;const N=new Uint8Array(t.buffer);for(let oe=0;oe<o;oe++){const pe=oe<c?u:h;w[oe]=N.slice(y,y+pe),C[oe]=m.encode(w[oe]),y+=pe,R=Math.max(R,pe)}const k=new Uint8Array(r);let P=0,B,H;for(B=0;B<R;B++)for(H=0;H<o;H++)B<w[H].length&&(k[P++]=w[H][B]);for(B=0;B<p;B++)for(H=0;H<o;H++)k[P++]=C[H][B];return k}function SO(t,e,n,r){let i;if(Array.isArray(t))i=Mh.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=Mh.rawSplit(t);l=_l.getBestVersionForData(u,n)}i=Mh.fromString(t,l||40)}else throw new Error("Invalid data");const s=_l.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=CO(e,n,i),a=wu.getSymbolSize(e),c=new pO(a);return wO(c,e),EO(c),TO(c,e),xh(c,n,0),e>=7&&IO(c,e),bO(c,o),isNaN(r)&&(r=Hd.getBestMask(c,xh.bind(null,c,n))),Hd.applyMask(r,c),xh(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}aE.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Dh.M,i,s;return typeof n<"u"&&(r=Dh.from(n.errorCorrectionLevel,Dh.M),i=_l.from(n.version),s=Hd.from(n.maskPattern),n.toSJISFunc&&wu.setToSJISFunction(n.toSJISFunc)),SO(e,i,r,s)};var wE={},Op={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,w=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const C=Math.floor((p-u)/c),R=Math.floor((m-u)/c);w=h[a[C*o+R]?1:0]}r[y++]=w.r,r[y++]=w.g,r[y++]=w.b,r[y]=w.a}}})(Op);(function(t){const e=Op;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(wE);var EE={};const RO=Op;function Q_(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Lh(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function PO(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?Lh("M",c+n,.5+l+n):Lh("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=Lh("h",o),o=0)):i++}return r}EE.render=function(e,n,r){const i=RO.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+Q_(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Q_(i.color.dark,"stroke")+' d="'+PO(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const kO=HN,zd=aE,TE=wE,NO=EE;function Dp(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!kO())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=zd.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=zd.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}zd.create;var OO=Dp.bind(null,TE.render);Dp.bind(null,TE.renderToDataURL);Dp.bind(null,function(t,e,n){return NO.render(t,n)});const DO=lr({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=Ht(null);return Ep(()=>{OO(n.value,e.codeString)}),(r,i)=>(dn(),Or("div",null,[ti("canvas",{ref_key:"canvas",ref:n},null,512)]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw fo(e)},fo=function(t){return new Error("Firebase Database ("+IE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new xO;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CE=function(t){const e=bE(t);return Eu.encodeByteArray(e,!0)},yl=function(t){return CE(t).replace(/\./g,"")},vl=function(t){try{return Eu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){return AE(void 0,t)}function AE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!FO(n)||(t[n]=AE(t[n],e[n]));return t}function FO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=()=>$O().__FIREBASE_DEFAULTS__,UO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},Mp=()=>{try{return VO()||UO()||BO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SE=t=>{var e,n;return(n=(e=Mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jO=t=>{const e=SE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RE=()=>{var t;return(t=Mp())===null||t===void 0?void 0:t.config},PE=t=>{var e;return(e=Mp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function kE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WO(){const t=Jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OE(){return IE.NODE_ADMIN===!0}function Lp(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function zO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qO,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function KO(t,e){return t.replace(GO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return JSON.parse(t)}function Ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ia(vl(s[0])||""),n=Ia(vl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},YO=function(t){const e=ME(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QO=function(t){const e=ME(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function El(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(J_(s)&&J_(o)){if(!El(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function J_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function XO(t,e){const n=new ZO(t,e);return n.subscribe.bind(n)}class ZO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}function tD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=1e3,iD=2,sD=4*60*60*1e3,oD=.5;function X_(t,e=rD,n=iD){const r=e*Math.pow(n,t),i=Math.round(oD*r*(Math.random()-.5)*2);return Math.min(sD,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lD(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cD(t){return t===Mi?void 0:t}function lD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const hD={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},dD=Pe.INFO,fD={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},pD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=dD,this._logHandler=pD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const gD=(t,e)=>e.some(n=>t instanceof n);let Z_,ey;function mD(){return Z_||(Z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _D(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xE=new WeakMap,Kd=new WeakMap,LE=new WeakMap,$h=new WeakMap,Fp=new WeakMap;function yD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xE.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function vD(t){if(Kd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kd.set(t,e)}let Gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wD(t){Gd=t(Gd)}function ED(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vh(this),e,...n);return LE.set(r,e.sort?e.sort():[e]),li(r)}:_D().includes(t)?function(...e){return t.apply(Vh(this),e),li(xE.get(this))}:function(...e){return li(t.apply(Vh(this),e))}}function TD(t){return typeof t=="function"?ED(t):(t instanceof IDBTransaction&&vD(t),gD(t,mD())?new Proxy(t,Gd):t)}function li(t){if(t instanceof IDBRequest)return yD(t);if($h.has(t))return $h.get(t);const e=TD(t);return e!==t&&($h.set(t,e),Fp.set(e,t)),e}const Vh=t=>Fp.get(t);function ID(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=li(o);return r&&o.addEventListener("upgradeneeded",c=>{r(li(o.result),c.oldVersion,c.newVersion,li(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bD=["get","getKey","getAll","getAllKeys","count"],CD=["put","add","delete","clear"],Uh=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bD.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Uh.set(e,s),s}wD(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yd="@firebase/app",ny="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new go("@firebase/app"),RD="@firebase/app-compat",PD="@firebase/analytics-compat",kD="@firebase/analytics",ND="@firebase/app-check-compat",OD="@firebase/app-check",DD="@firebase/auth",MD="@firebase/auth-compat",xD="@firebase/database",LD="@firebase/database-compat",FD="@firebase/functions",$D="@firebase/functions-compat",VD="@firebase/installations",UD="@firebase/installations-compat",BD="@firebase/messaging",jD="@firebase/messaging-compat",HD="@firebase/performance",WD="@firebase/performance-compat",zD="@firebase/remote-config",qD="@firebase/remote-config-compat",KD="@firebase/storage",GD="@firebase/storage-compat",YD="@firebase/firestore",QD="@firebase/firestore-compat",JD="firebase",XD="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",ZD={[Yd]:"fire-core",[RD]:"fire-core-compat",[kD]:"fire-analytics",[PD]:"fire-analytics-compat",[OD]:"fire-app-check",[ND]:"fire-app-check-compat",[DD]:"fire-auth",[MD]:"fire-auth-compat",[xD]:"fire-rtdb",[LD]:"fire-rtdb-compat",[FD]:"fire-fn",[$D]:"fire-fn-compat",[VD]:"fire-iid",[UD]:"fire-iid-compat",[BD]:"fire-fcm",[jD]:"fire-fcm-compat",[HD]:"fire-perf",[WD]:"fire-perf-compat",[zD]:"fire-rc",[qD]:"fire-rc-compat",[KD]:"fire-gcs",[GD]:"fire-gcs-compat",[YD]:"fire-fst",[QD]:"fire-fst-compat","fire-js":"fire-js",[JD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,Jd=new Map;function eM(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Jd.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;Jd.set(e,t);for(const n of Tl.values())eM(n,t);return!0}function Ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ui=new Ci("app","Firebase",tM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=XD;function FE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ui.create("bad-app-name",{appName:String(i)});if(n||(n=RE()),!n)throw ui.create("no-options");const s=Tl.get(i);if(s){if(El(n,s.options)&&El(r,s.config))return s;throw ui.create("duplicate-app",{appName:i})}const o=new uD(i);for(const c of Jd.values())o.addComponent(c);const a=new nM(n,r,o);return Tl.set(i,a),a}function $p(t=Qd){const e=Tl.get(t);if(!e&&t===Qd&&RE())return FE();if(!e)throw ui.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let i=(r=ZD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}gn(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM="firebase-heartbeat-database",iM=1,ba="firebase-heartbeat-store";let Bh=null;function $E(){return Bh||(Bh=ID(rM,iM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function sM(t){try{return await(await $E()).transaction(ba).objectStore(ba).get(VE(t))}catch(e){if(e instanceof kn)Zi.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function ry(t,e){try{const r=(await $E()).transaction(ba,"readwrite");await r.objectStore(ba).put(e,VE(t)),await r.done}catch(n){if(n instanceof kn)Zi.warn(n.message);else{const r=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function VE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=1024,aM=30*24*60*60*1e3;class cM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=aM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iy(),{heartbeatsToSend:n,unsentEntries:r}=lM(this._heartbeatsCache.heartbeats),i=yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iy(){return new Date().toISOString().substring(0,10)}function lM(t,e=oM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lp()?DE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){gn(new on("platform-logger",e=>new AD(e),"PRIVATE")),gn(new on("heartbeat",e=>new cM(e),"PRIVATE")),Mt(Yd,ny,t),Mt(Yd,ny,"esm2017"),Mt("fire-js","")}hM("");var dM="firebase",fM="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(dM,fM,"app");const pM=(t,e)=>e.some(n=>t instanceof n);let oy,ay;function gM(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mM(){return ay||(ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UE=new WeakMap,Xd=new WeakMap,BE=new WeakMap,jh=new WeakMap,Vp=new WeakMap;function _M(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&UE.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function yM(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vM(t){Zd=t(Zd)}function wM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return BE.set(r,e.sort?e.sort():[e]),hi(r)}:mM().includes(t)?function(...e){return t.apply(Hh(this),e),hi(UE.get(this))}:function(...e){return hi(t.apply(Hh(this),e))}}function EM(t){return typeof t=="function"?wM(t):(t instanceof IDBTransaction&&yM(t),pM(t,gM())?new Proxy(t,Zd):t)}function hi(t){if(t instanceof IDBRequest)return _M(t);if(jh.has(t))return jh.get(t);const e=EM(t);return e!==t&&(jh.set(t,e),Vp.set(e,t)),e}const Hh=t=>Vp.get(t);function TM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hi(o.result),c.oldVersion,c.newVersion,hi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const IM=["get","getKey","getAll","getAllKeys","count"],bM=["put","add","delete","clear"],Wh=new Map;function cy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IM.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Wh.set(e,s),s}vM(t=>({...t,get:(e,n,r)=>cy(e,n)||t.get(e,n,r),has:(e,n)=>!!cy(e,n)||t.has(e,n)}));const jE="@firebase/installations",Up="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1e4,WE=`w:${Up}`,zE="FIS_v2",CM="https://firebaseinstallations.googleapis.com/v1",AM=60*60*1e3,SM="installations",RM="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new Ci(SM,RM,PM);function qE(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE({projectId:t}){return`${CM}/projects/${t}/installations`}function GE(t){return{token:t.token,requestStatus:2,expiresIn:NM(t.expiresIn),creationTime:Date.now()}}async function YE(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function QE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kM(t,{refreshToken:e}){const n=QE(t);return n.append("Authorization",OM(e)),n}async function JE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NM(t){return Number(t.replace("s","000"))}function OM(t){return`${zE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KE(t),i=QE(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:zE,appId:t.appId,sdkVersion:WE},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await JE(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:GE(l.authToken)}}else throw await YE("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=/^[cdef][\w-]{21}$/,ef="";function LM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FM(t);return xM.test(n)?n:ef}catch{return ef}}function FM(t){return MM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=new Map;function eT(t,e){const n=Iu(t);tT(n,e),$M(n,e)}function tT(t,e){const n=ZE.get(t);if(n)for(const r of n)r(e)}function $M(t,e){const n=VM();n&&n.postMessage({key:t,fid:e}),UM()}let Vi=null;function VM(){return!Vi&&"BroadcastChannel"in self&&(Vi=new BroadcastChannel("[Firebase] FID Change"),Vi.onmessage=t=>{tT(t.data.key,t.data.fid)}),Vi}function UM(){ZE.size===0&&Vi&&(Vi.close(),Vi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM="firebase-installations-database",jM=1,ts="firebase-installations-store";let zh=null;function Bp(){return zh||(zh=TM(BM,jM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),zh}async function Il(t,e){const n=Iu(t),i=(await Bp()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&eT(t,e.fid),e}async function nT(t){const e=Iu(t),r=(await Bp()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function bu(t,e){const n=Iu(t),i=(await Bp()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&eT(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t){let e;const n=await bu(t.appConfig,r=>{const i=HM(r),s=WM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ef?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HM(t){const e=t||{fid:LM(),registrationStatus:0};return rT(e)}function WM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qM(t)}:{installationEntry:e}}async function zM(t,e){try{const n=await DM(t,e);return Il(t.appConfig,n)}catch(n){throw qE(n)&&n.customData.serverCode===409?await nT(t.appConfig):await Il(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qM(t){let e=await ly(t.appConfig);for(;e.registrationStatus===1;)await XE(100),e=await ly(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jp(t);return r||n}return e}function ly(t){return bu(t,e=>{if(!e)throw es.create("installation-not-found");return rT(e)})}function rT(t){return KM(t)?{fid:t.fid,registrationStatus:0}:t}function KM(t){return t.registrationStatus===1&&t.registrationTime+HE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM({appConfig:t,heartbeatServiceProvider:e},n){const r=YM(t,n),i=kM(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:WE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await JE(()=>fetch(r,a));if(c.ok){const l=await c.json();return GE(l)}else throw await YE("Generate Auth Token",c)}function YM(t,{fid:e}){return`${KE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e=!1){let n;const r=await bu(t.appConfig,s=>{if(!iT(s))throw es.create("not-registered");const o=s.authToken;if(!e&&XM(o))return s;if(o.requestStatus===1)return n=QM(t,e),s;{if(!navigator.onLine)throw es.create("app-offline");const a=ex(s);return n=JM(t,a),a}});return n?await n:r.authToken}async function QM(t,e){let n=await uy(t.appConfig);for(;n.authToken.requestStatus===1;)await XE(100),n=await uy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hp(t,e):r}function uy(t){return bu(t,e=>{if(!iT(e))throw es.create("not-registered");const n=e.authToken;return tx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JM(t,e){try{const n=await GM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Il(t.appConfig,r),n}catch(n){if(qE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Il(t.appConfig,r)}throw n}}function iT(t){return t!==void 0&&t.registrationStatus===2}function XM(t){return t.requestStatus===2&&!ZM(t)}function ZM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AM}function ex(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tx(t){return t.requestStatus===1&&t.requestTime+HE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t){const e=t,{installationEntry:n,registrationPromise:r}=await jp(e);return r?r.catch(console.error):Hp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t,e=!1){const n=t;return await ix(n),(await Hp(n,e)).token}async function ix(t){const{registrationPromise:e}=await jp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){if(!t||!t.options)throw qh("App Configuration");if(!t.name)throw qh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qh(t){return es.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="installations",ox="installations-internal",ax=t=>{const e=t.getProvider("app").getImmediate(),n=sx(e),r=Ka(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cx=t=>{const e=t.getProvider("app").getImmediate(),n=Ka(e,sT).getImmediate();return{getId:()=>nx(n),getToken:i=>rx(n,i)}};function lx(){gn(new on(sT,ax,"PUBLIC")),gn(new on(ox,cx,"PRIVATE"))}lx();Mt(jE,Up);Mt(jE,Up,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="analytics",ux="firebase_id",hx="origin",dx=60*1e3,fx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new go("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rn=new Ci("analytics","Analytics",px);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){if(!t.startsWith(Wp)){const e=Rn.create("invalid-gtag-resource",{gtagURL:t});return fn.warn(e.message),""}return t}function oT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _x(t,e){const n=mx("firebase-js-sdk-policy",{createScriptURL:gx}),r=document.createElement("script"),i=`${Wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await oT(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){fn.error(a)}t("config",i,s)}async function wx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await oT(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){fn.error(s)}}function Ex(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await wx(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await vx(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){fn.error(a)}}return i}function Tx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Ex(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ix(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=30,Cx=1e3;class Ax{constructor(e={},n=Cx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const aT=new Ax;function Sx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Rx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Sx(r)},s=fx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Rn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Px(t,e=aT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ox;return setTimeout(async()=>{a.abort()},n!==void 0?n:dx),cT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function cT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=aT){var s;const{appId:o,measurementId:a}=t;try{await kx(r,e)}catch(c){if(a)return fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Rx(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Nx(l)){if(i.deleteThrottleMetadata(o),a)return fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?X_(n,i.intervalMillis,bx):X_(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),fn.debug(`Calling attemptFetch again in ${u} millis`),cT(t,h,r,i)}}function kx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Nx(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ox{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(){if(Lp())try{await DE()}catch(t){return fn.warn(Rn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return fn.warn(Rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xx(t,e,n,r,i,s,o){var a;const c=Px(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&fn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>fn.error(m)),e.push(c);const l=Mx().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);Ix(s)||_x(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[hx]="firebase",p.update=!0,h!=null&&(p[ux]=h),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.app=e}_delete(){return delete na[this.app.options.appId],Promise.resolve()}}let na={},dy=[];const fy={};let Kh="dataLayer",Fx="gtag",py,lT,gy=!1;function $x(){const t=[];if(kE()&&t.push("This is a browser extension environment."),zO()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rn.create("invalid-analytics-context",{errorInfo:e});fn.warn(n.message)}}function Vx(t,e,n){$x();const r=t.options.appId;if(!r)throw Rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rn.create("no-api-key");if(na[r]!=null)throw Rn.create("already-exists",{id:r});if(!gy){yx(Kh);const{wrappedGtag:s,gtagCore:o}=Tx(na,dy,fy,Kh,Fx);lT=s,py=o,gy=!0}return na[r]=xx(t,dy,fy,e,py,Kh,n),new Lx(t)}function Ux(t,e,n,r){t=hr(t),Dx(lT,na[t.app.options.appId],e,n,r).catch(i=>fn.error(i))}const my="@firebase/analytics",_y="0.10.0";function Bx(){gn(new on(hy,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Vx(r,i,n)},"PUBLIC")),gn(new on("analytics-internal",t,"PRIVATE")),Mt(my,_y),Mt(my,_y,"esm2017");function t(e){try{const n=e.getProvider(hy).getImmediate();return{logEvent:(r,i,s)=>Ux(n,r,i,s)}}catch(n){throw Rn.create("interop-component-reg-failed",{reason:n})}}}Bx();var jx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,zp=zp||{},ue=jx||self;function Cu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ga(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Hx(t){return Object.prototype.hasOwnProperty.call(t,Gh)&&t[Gh]||(t[Gh]=++Wx)}var Gh="closure_uid_"+(1e9*Math.random()>>>0),Wx=0;function zx(t,e,n){return t.call.apply(t.bind,arguments)}function qx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=zx:Gt=qx,Gt.apply(null,arguments)}function Dc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Si(){this.s=this.s,this.o=this.o}var Kx=0;Si.prototype.s=!1;Si.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Kx!=0)&&Hx(this)};Si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Cu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var Gx=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",()=>{},e),ue.removeEventListener("test",()=>{},e)}catch{}return t}();function Ca(t){return/^[\s\xa0]*$/.test(t)}function Au(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function Yn(t){return Au().indexOf(t)!=-1}function Kp(t){return Kp[" "](t),t}Kp[" "]=function(){};function Yx(t,e){var n=BL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Qx=Yn("Opera"),Xs=Yn("Trident")||Yn("MSIE"),hT=Yn("Edge"),tf=hT||Xs,dT=Yn("Gecko")&&!(Au().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge"))&&!(Yn("Trident")||Yn("MSIE"))&&!Yn("Edge"),Jx=Au().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge");function fT(){var t=ue.document;return t?t.documentMode:void 0}var nf;e:{var Yh="",Qh=function(){var t=Au();if(dT)return/rv:([^\);]+)(\)|;)/.exec(t);if(hT)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jx)return/WebKit\/(\S+)/.exec(t);if(Qx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qh&&(Yh=Qh?Qh[1]:""),Xs){var Jh=fT();if(Jh!=null&&Jh>parseFloat(Yh)){nf=String(Jh);break e}}nf=Yh}var rf;if(ue.document&&Xs){var vy=fT();rf=vy||parseInt(nf,10)||void 0}else rf=void 0;var Xx=rf;function Aa(t,e){if(Yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dT){e:{try{Kp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Aa.$.h.call(this)}}Rt(Aa,Yt);var Zx={2:"touch",3:"pen",4:"mouse"};Aa.prototype.h=function(){Aa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ya="closure_listenable_"+(1e6*Math.random()|0),eL=0;function tL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++eL,this.fa=this.ia=!1}function Su(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pT(t){const e={};for(const n in t)e[n]=t[n];return e}const wy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wy.length;s++)n=wy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ru(t){this.src=t,this.g={},this.h=0}Ru.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=of(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new tL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function sf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Su(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function of(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Yp="closure_lm_"+(1e6*Math.random()|0),Xh={};function mT(t,e,n,r,i){if(r&&r.once)return yT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mT(t,e[s],n,r,i);return null}return n=Xp(n),t&&t[Ya]?t.O(e,n,Ga(r)?!!r.capture:!!r,i):_T(t,e,n,!1,r,i)}function _T(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ga(i)?!!i.capture:!!i,a=Jp(t);if(a||(t[Yp]=a=new Ru(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Gx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rL(){function t(n){return e.call(t.src,t.listener,n)}const e=iL;return t}function yT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yT(t,e[s],n,r,i);return null}return n=Xp(n),t&&t[Ya]?t.P(e,n,Ga(r)?!!r.capture:!!r,i):_T(t,e,n,!0,r,i)}function vT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vT(t,e[s],n,r,i);else r=Ga(r)?!!r.capture:!!r,n=Xp(n),t&&t[Ya]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=of(s,n,r,i),-1<n&&(Su(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=of(e,n,r,i)),(n=-1<t?e[t]:null)&&Qp(n))}function Qp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ya])sf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jp(e))?(sf(n,t),n.h==0&&(n.src=null,e[Yp]=null)):Su(t)}}}function wT(t){return t in Xh?Xh[t]:Xh[t]="on"+t}function iL(t,e){if(t.fa)t=!0;else{e=new Aa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Qp(t),t=n.call(r,e)}return t}function Jp(t){return t=t[Yp],t instanceof Ru?t:null}var Zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xp(t){return typeof t=="function"?t:(t[Zh]||(t[Zh]=function(e){return t.handleEvent(e)}),t[Zh])}function At(){Si.call(this),this.i=new Ru(this),this.S=this,this.J=null}Rt(At,Si);At.prototype[Ya]=!0;At.prototype.removeEventListener=function(t,e,n,r){vT(this,t,e,n,r)};function xt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Yt(e,t);else if(e instanceof Yt)e.target=e.target||t;else{var i=e;e=new Yt(r,t),gT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Mc(o,r,!0,e)&&i}if(o=e.g=t,i=Mc(o,r,!0,e)&&i,i=Mc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Mc(o,r,!1,e)&&i}At.prototype.N=function(){if(At.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Su(n[r]);delete t.g[e],t.h--}}this.J=null};At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};At.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&sf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zp=ue.JSON.stringify;class sL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function oL(){var t=eg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aL{constructor(){this.h=this.g=null}add(e,n){const r=ET.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ET=new sL(()=>new cL,t=>t.reset());class cL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uL(t){ue.setTimeout(()=>{throw t},0)}let Sa,Ra=!1,eg=new aL,TT=()=>{const t=ue.Promise.resolve(void 0);Sa=()=>{t.then(hL)}};var hL=()=>{for(var t;t=oL();){try{t.h.call(t.g)}catch(n){uL(n)}var e=ET;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ra=!1};function Pu(t,e){At.call(this),this.h=t||1,this.g=e||ue,this.j=Gt(this.qb,this),this.l=Date.now()}Rt(Pu,At);G=Pu.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(tg(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){Pu.$.N.call(this),tg(this),delete this.g};function ng(t,e,n){if(typeof t=="function")n&&(t=Gt(t,n));else if(t&&typeof t.handleEvent=="function")t=Gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function IT(t){t.g=ng(()=>{t.g=null,t.i&&(t.i=!1,IT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dL extends Si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:IT(this)}N(){super.N(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pa(t){Si.call(this),this.h=t,this.g={}}Rt(Pa,Si);var Ey=[];function bT(t,e,n,r){Array.isArray(n)||(n&&(Ey[0]=n.toString()),n=Ey);for(var i=0;i<n.length;i++){var s=mT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CT(t){Gp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qp(e)},t),t.g={}}Pa.prototype.N=function(){Pa.$.N.call(this),CT(this)};Pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ku(){this.g=!0}ku.prototype.Ea=function(){this.g=!1};function fL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function pL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function As(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mL(t,n)+(r?" "+r:"")})}function gL(t,e){t.info(function(){return"TIMEOUT: "+e})}ku.prototype.info=function(){};function mL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zp(n)}catch{return e}}var fs={},Ty=null;function Nu(){return Ty=Ty||new At}fs.Ta="serverreachability";function AT(t){Yt.call(this,fs.Ta,t)}Rt(AT,Yt);function ka(t){const e=Nu();xt(e,new AT(e))}fs.STAT_EVENT="statevent";function ST(t,e){Yt.call(this,fs.STAT_EVENT,t),this.stat=e}Rt(ST,Yt);function rn(t){const e=Nu();xt(e,new ST(e,t))}fs.Ua="timingevent";function RT(t,e){Yt.call(this,fs.Ua,t),this.size=e}Rt(RT,Yt);function Qa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var Ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},PT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rg(){}rg.prototype.h=null;function Iy(t){return t.h||(t.h=t.i())}function kT(){}var Ja={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ig(){Yt.call(this,"d")}Rt(ig,Yt);function sg(){Yt.call(this,"c")}Rt(sg,Yt);var af;function Du(){}Rt(Du,rg);Du.prototype.g=function(){return new XMLHttpRequest};Du.prototype.i=function(){return{}};af=new Du;function Xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Pa(this),this.P=_L,t=tf?125:void 0,this.V=new Pu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new NT}function NT(){this.i=null,this.g="",this.h=!1}var _L=45e3,cf={},bl={};G=Xa.prototype;G.setTimeout=function(t){this.P=t};function lf(t,e,n){t.L=1,t.v=xu(Dr(e)),t.s=n,t.S=!0,OT(t,null)}function OT(t,e){t.G=Date.now(),Za(t),t.A=Dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),UT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new NT,t.g=aI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dL(Gt(t.Pa,t,t.g),t.O)),bT(t.U,t.g,"readystatechange",t.nb),e=t.I?pT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ka(),fL(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&Jn(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=Jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||tf||this.g&&(this.h.h||this.g.ja()||Sy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ka(3):ka(2)),Mu(this);var n=this.g.da();this.ca=n;t:if(DT(this)){var r=Sy(this.g);t="";var i=r.length,s=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ui(this),ra(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,pL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ca(a)){var l=a;break t}}l=null}if(n=l)As(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,n);else{this.i=!1,this.o=3,rn(12),Ui(this),ra(this);break e}}this.S?(MT(this,u,o),tf&&this.i&&u==3&&(bT(this.U,this.V,"tick",this.mb),this.V.start())):(As(this.j,this.m,o,null),uf(this,o)),u==4&&Ui(this),this.i&&!this.J&&(u==4?rI(this.l,this):(this.i=!1,Za(this)))}else $L(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rn(12)):(this.o=0,rn(13)),Ui(this),ra(this)}}}catch{}finally{}};function DT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function MT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=yL(t,n),i==bl){e==4&&(t.o=4,rn(14),r=!1),As(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cf){t.o=4,rn(15),As(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else As(t.j,t.m,i,null),uf(t,i);DT(t)&&i!=bl&&i!=cf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hg(e),e.M=!0,rn(11))):(As(t.j,t.m,n,"[Invalid Chunked Response]"),Ui(t),ra(t))}G.mb=function(){if(this.g){var t=Jn(this.g),e=this.g.ja();this.C<e.length&&(Mu(this),MT(this,t,e),this.i&&t!=4&&Za(this))}};function yL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bl:(n=Number(e.substring(n,r)),isNaN(n)?cf:(r+=1,r+n>e.length?bl:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Ui(this)};function Za(t){t.Y=Date.now()+t.P,xT(t,t.P)}function xT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qa(Gt(t.lb,t),e)}function Mu(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gL(this.j,this.A),this.L!=2&&(ka(),rn(17)),Ui(this),this.o=2,ra(this)):xT(this,this.Y-t)};function ra(t){t.l.H==0||t.J||rI(t.l,t)}function Ui(t){Mu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tg(t.V),CT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hf(n.i,t))){if(!t.K&&hf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sl(n),Vu(n);else break e;ug(n),rn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qa(Gt(n.ib,n),6e3));if(1>=HT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Bi(n,11)}else if((t.K||n.g==t)&&Sl(n),!Ca(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(og(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Je(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=oI(r,r.J?r.pa:null,r.Y),o.K){WT(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Mu(a),Za(a)),r.g=o}else tI(r);0<n.j.length&&Uu(n)}else l[0]!="stop"&&l[0]!="close"||Bi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bi(n,7):lg(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ka(4)}catch{}}function vL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Cu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function wL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Cu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function LT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Cu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wL(t),r=vL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=t.h,Cl(this,t.j),this.s=t.s,this.g=t.g,Al(this,t.m),this.l=t.l;var e=t.i,n=new Na;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),by(this,n),this.o=t.o}else t&&(e=String(t).match(FT))?(this.h=!1,Cl(this,e[1]||"",!0),this.s=Ho(e[2]||""),this.g=Ho(e[3]||"",!0),Al(this,e[4]),this.l=Ho(e[5]||"",!0),by(this,e[6]||"",!0),this.o=Ho(e[7]||"")):(this.h=!1,this.i=new Na(null,this.h))}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wo(e,Cy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wo(e,Cy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wo(n,n.charAt(0)=="/"?bL:IL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wo(n,AL)),t.join("")};function Dr(t){return new Gi(t)}function Cl(t,e,n){t.j=n?Ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Al(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function by(t,e,n){e instanceof Na?(t.i=e,SL(t.i,t.h)):(n||(e=Wo(e,CL)),t.i=new Na(e,t.h))}function Je(t,e,n){t.i.set(e,n)}function xu(t){return Je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cy=/[#\/\?@]/g,IL=/[#\?:]/g,bL=/[#\?]/g,CL=/[#\?@]/g,AL=/#/g;function Na(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&EL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=Na.prototype;G.add=function(t,e){Ri(this),this.i=null,t=mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $T(t,e){Ri(t),e=mo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function VT(t,e){return Ri(t),e=mo(t,e),t.g.has(e)}G.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Ri(this);let e=[];if(typeof t=="string")VT(this,t)&&(e=e.concat(this.g.get(mo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Ri(this),this.i=null,t=mo(this,t),VT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function UT(t,e,n){$T(t,e),0<n.length&&(t.i=null,t.g.set(mo(t,e),qp(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SL(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($T(this,r),UT(this,i,n))},t)),t.j=e}var RL=class{constructor(t,e){this.g=t,this.map=e}};function BT(t){this.l=t||PL,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ka&&ue.g.Ka()&&ue.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PL=10;function jT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function HT(t){return t.h?1:t.g?t.g.size:0}function hf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function og(t,e){t.g?t.g.add(e):t.h=e}function WT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}BT.prototype.cancel=function(){if(this.i=zT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qp(t.i)}var kL=class{stringify(t){return ue.JSON.stringify(t,void 0)}parse(t){return ue.JSON.parse(t,void 0)}};function NL(){this.g=new kL}function OL(t,e,n){const r=n||"";try{LT(t,function(i,s){let o=i;Ga(i)&&(o=Zp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function DL(t,e){const n=new ku;if(ue.Image){const r=new Image;r.onload=Dc(xc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dc(xc,n,r,"TestLoadImage: error",!1,e),r.onabort=Dc(xc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dc(xc,n,r,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lu(t){this.l=t.fc||null,this.j=t.ob||!1}Rt(Lu,rg);Lu.prototype.g=function(){return new Fu(this.l,this.j)};Lu.prototype.i=function(t){return function(){return t}}({});function Fu(t,e){At.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ag,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Rt(Fu,At);var ag=0;G=Fu.prototype;G.open=function(t,e){if(this.readyState!=ag)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oa(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ue).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ec(this)),this.readyState=ag};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oa(this)),this.g&&(this.readyState=3,Oa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ec(this):Oa(this),this.readyState==3&&qT(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,ec(this))};G.Ya=function(t){this.g&&(this.response=t,ec(this))};G.ka=function(){this.g&&ec(this)};function ec(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oa(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ML=ue.JSON.parse;function rt(t){At.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=KT,this.L=this.M=!1}Rt(rt,At);var KT="",xL=/^https?$/i,LL=["POST","PUT"];G=rt.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():af.g(),this.C=this.u?Iy(this.u):Iy(af),this.g.onreadystatechange=Gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ay(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ue.FormData&&t instanceof ue.FormData,!(0<=uT(LL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{QT(this),0<this.B&&((this.L=FL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.ua,this)):this.A=ng(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ay(this,s)}};function FL(t){return Xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof zp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function Ay(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,GT(t),$u(t)}function GT(t){t.F||(t.F=!0,xt(t,"complete"),xt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),$u(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$u(this,!0)),rt.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?YT(this):this.kb())};G.kb=function(){YT(this)};function YT(t){if(t.h&&typeof zp<"u"&&(!t.C[1]||Jn(t)!=4||t.da()!=2)){if(t.v&&Jn(t)==4)ng(t.La,0,t);else if(xt(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(FT)[1]||null;!i&&ue.self&&ue.self.location&&(i=ue.self.location.protocol.slice(0,-1)),r=!xL.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var s=2<Jn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",GT(t)}}finally{$u(t)}}}}function $u(t,e){if(t.g){QT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function QT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function Jn(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ML(e)}};function Sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case KT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $L(t){const e={};t=(t.g&&2<=Jn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ca(t[r]))continue;var n=lL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}nL(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JT(t){let e="";return Gp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Je(t,e,n))}function Mo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XT(t){this.Ga=0,this.j=[],this.l=new ku,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Mo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Mo("baseRetryDelayMs",5e3,t),this.hb=Mo("retryDelaySeedMs",1e4,t),this.eb=Mo("forwardChannelMaxRetries",2,t),this.xa=Mo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new BT(t&&t.concurrentRequestLimit),this.Ja=new NL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=XT.prototype;G.ra=8;G.H=1;function lg(t){if(ZT(t),t.H==3){var e=t.W++,n=Dr(t.I);if(Je(n,"SID",t.K),Je(n,"RID",e),Je(n,"TYPE","terminate"),tc(t,n),e=new Xa(t,t.l,e),e.L=2,e.v=xu(Dr(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon)try{n=ue.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=aI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Za(e)}sI(t)}function Vu(t){t.g&&(hg(t),t.g.cancel(),t.g=null)}function ZT(t){Vu(t),t.u&&(ue.clearTimeout(t.u),t.u=null),Sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function Uu(t){if(!jT(t.i)&&!t.m){t.m=!0;var e=t.Na;Sa||TT(),Ra||(Sa(),Ra=!0),eg.add(e,t),t.C=0}}function VL(t,e){return HT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qa(Gt(t.Na,t,e),iI(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Xa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=pT(s),gT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eI(this,i,e),n=Dr(this.I),Je(n,"RID",t),Je(n,"CVER",22),this.F&&Je(n,"X-HTTP-Session-Id",this.F),tc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(JT(s)))+"&"+e:this.o&&cg(n,this.o,s)),og(this.i,i),this.bb&&Je(n,"TYPE","init"),this.P?(Je(n,"$req",e),Je(n,"SID","null"),i.aa=!0,lf(i,n,null)):lf(i,n,e),this.H=2}}else this.H==3&&(t?Ry(this,t):this.j.length==0||jT(this.i)||Ry(this))};function Ry(t,e){var n;e?n=e.m:n=t.W++;const r=Dr(t.I);Je(r,"SID",t.K),Je(r,"RID",n),Je(r,"AID",t.V),tc(t,r),t.o&&t.s&&cg(r,t.o,t.s),n=new Xa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=eI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),og(t.i,n),lf(n,r,e)}function tc(t,e){t.na&&Gp(t.na,function(n,r){Je(e,r,n)}),t.h&&LT({},function(n,r){Je(e,r,n)})}function eI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Gt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{OL(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function tI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sa||TT(),Ra||(Sa(),Ra=!0),eg.add(e,t),t.A=0}}function ug(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qa(Gt(t.Ma,t),iI(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,nI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qa(Gt(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rn(10),Vu(this),nI(this))};function hg(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function nI(t){t.g=new Xa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dr(t.wa);Je(e,"RID","rpc"),Je(e,"SID",t.K),Je(e,"AID",t.V),Je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Je(e,"TO",t.qa),Je(e,"TYPE","xmlhttp"),tc(t,e),t.o&&t.s&&cg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=xu(Dr(e)),n.s=null,n.S=!0,OT(n,t)}G.ib=function(){this.v!=null&&(this.v=null,Vu(this),ug(this),rn(19))};function Sl(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function rI(t,e){var n=null;if(t.g==e){Sl(t),hg(t),t.g=null;var r=2}else if(hf(t.i,e))n=e.F,WT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Nu(),xt(r,new RT(r,n)),Uu(t)}else tI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&VL(t,e)||r==2&&ug(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Bi(t,5);break;case 4:Bi(t,10);break;case 3:Bi(t,6);break;default:Bi(t,2)}}}function iI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Bi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Gt(t.pb,t);n||(n=new Gi("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||Cl(n,"https"),xu(n)),DL(n.toString(),r)}else rn(2);t.H=0,t.h&&t.h.za(e),sI(t),ZT(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rn(2)):(this.l.info("Failed to ping google.com"),rn(1))};function sI(t){if(t.H=0,t.ma=[],t.h){const e=zT(t.i);(e.length!=0||t.j.length!=0)&&(yy(t.ma,e),yy(t.ma,t.j),t.i.i.length=0,qp(t.j),t.j.length=0),t.h.ya()}}function oI(t,e,n){var r=n instanceof Gi?Dr(n):new Gi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Al(r,r.m);else{var i=ue.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gi(null);r&&Cl(s,r),e&&(s.g=e),i&&Al(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Je(r,n,e),Je(r,"VER",t.ra),tc(t,r),r}function aI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new rt(new Lu({ob:!0})):new rt(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function cI(){}G=cI.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Rl(){if(Xs&&!(10<=Number(Xx)))throw Error("Environmental error: no available transport.")}Rl.prototype.g=function(t,e){return new En(t,e)};function En(t,e){At.call(this),this.g=new XT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ca(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ca(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _o(this)}Rt(En,At);En.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=oI(t,null,t.Y),Uu(t)};En.prototype.close=function(){lg(this.g)};En.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zp(t),t=n);e.j.push(new RL(e.fb++,t)),e.H==3&&Uu(e)};En.prototype.N=function(){this.g.h=null,delete this.j,lg(this.g),delete this.g,En.$.N.call(this)};function lI(t){ig.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Rt(lI,ig);function uI(){sg.call(this),this.status=1}Rt(uI,sg);function _o(t){this.g=t}Rt(_o,cI);_o.prototype.Ba=function(){xt(this.g,"a")};_o.prototype.Aa=function(t){xt(this.g,new lI(t))};_o.prototype.za=function(t){xt(this.g,new uI)};_o.prototype.ya=function(){xt(this.g,"b")};function UL(){this.blockSize=-1}function Hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Rt(Hn,UL);Hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ed(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ed(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ed(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ed(this,r),i=0;break}}this.h=i,this.i+=e};Hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function je(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var BL={};function dg(t){return-128<=t&&128>t?Yx(t,function(e){return new je([e|0],0>e?-1:0)}):new je([t|0],0>t?-1:0)}function Xn(t){if(isNaN(t)||!isFinite(t))return Ds;if(0>t)return Nt(Xn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=df;return new je(e,0)}function hI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Nt(hI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xn(Math.pow(e,8)),r=Ds,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Xn(Math.pow(e,s)),r=r.R(s).add(Xn(o))):(r=r.R(n),r=r.add(Xn(o)))}return r}var df=4294967296,Ds=dg(0),ff=dg(1),Py=dg(16777216);G=je.prototype;G.ea=function(){if(An(this))return-Nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:df+r)*e,e*=df}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ar(this))return"0";if(An(this))return"-"+Nt(this).toString(t);for(var e=Xn(Math.pow(t,6)),n=this,r="";;){var i=kl(n,e).g;n=Pl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ar(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function An(t){return t.h==-1}G.X=function(t){return t=Pl(this,t),An(t)?-1:Ar(t)?0:1};function Nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new je(n,~t.h).add(ff)}G.abs=function(){return An(this)?Nt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new je(n,n[n.length-1]&-2147483648?-1:0)};function Pl(t,e){return t.add(Nt(e))}G.R=function(t){if(Ar(this)||Ar(t))return Ds;if(An(this))return An(t)?Nt(this).R(Nt(t)):Nt(Nt(this).R(t));if(An(t))return Nt(this.R(Nt(t)));if(0>this.X(Py)&&0>t.X(Py))return Xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Lc(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Lc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new je(n,0)};function Lc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xo(t,e){this.g=t,this.h=e}function kl(t,e){if(Ar(e))throw Error("division by zero");if(Ar(t))return new xo(Ds,Ds);if(An(t))return e=kl(Nt(t),e),new xo(Nt(e.g),Nt(e.h));if(An(e))return e=kl(t,Nt(e)),new xo(Nt(e.g),e.h);if(30<t.g.length){if(An(t)||An(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ff,r=e;0>=r.X(t);)n=ky(n),r=ky(r);var i=ws(n,1),s=ws(r,1);for(r=ws(r,2),n=ws(n,2);!Ar(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ws(r,1),n=ws(n,1)}return e=Pl(t,i.R(e)),new xo(i,e)}for(i=Ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Xn(n),o=s.R(e);An(o)||0<o.X(t);)n-=r,s=Xn(n),o=s.R(e);Ar(s)&&(s=ff),i=i.add(s),t=Pl(t,o)}return new xo(i,t)}G.gb=function(t){return kl(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new je(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new je(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new je(n,this.h^t.h)};function ky(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new je(n,t.h)}function ws(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new je(i,t.h)}Rl.prototype.createWebChannel=Rl.prototype.g;En.prototype.send=En.prototype.u;En.prototype.open=En.prototype.m;En.prototype.close=En.prototype.close;Ou.NO_ERROR=0;Ou.TIMEOUT=8;Ou.HTTP_ERROR=6;PT.COMPLETE="complete";kT.EventType=Ja;Ja.OPEN="a";Ja.CLOSE="b";Ja.ERROR="c";Ja.MESSAGE="d";At.prototype.listen=At.prototype.O;rt.prototype.listenOnce=rt.prototype.P;rt.prototype.getLastError=rt.prototype.Sa;rt.prototype.getLastErrorCode=rt.prototype.Ia;rt.prototype.getStatus=rt.prototype.da;rt.prototype.getResponseJson=rt.prototype.Wa;rt.prototype.getResponseText=rt.prototype.ja;rt.prototype.send=rt.prototype.ha;rt.prototype.setWithCredentials=rt.prototype.Oa;Hn.prototype.digest=Hn.prototype.l;Hn.prototype.reset=Hn.prototype.reset;Hn.prototype.update=Hn.prototype.j;je.prototype.add=je.prototype.add;je.prototype.multiply=je.prototype.R;je.prototype.modulo=je.prototype.gb;je.prototype.compare=je.prototype.X;je.prototype.toNumber=je.prototype.ea;je.prototype.toString=je.prototype.toString;je.prototype.getBits=je.prototype.D;je.fromNumber=Xn;je.fromString=hI;var jL=function(){return new Rl},HL=function(){return Nu()},td=Ou,WL=PT,zL=fs,Ny={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Fc=kT,qL=rt,KL=Hn,Ms=je;const Oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new go("@firebase/firestore");function Dy(){return ns.logLevel}function te(t,...e){if(ns.logLevel<=Pe.DEBUG){const n=e.map(fg);ns.debug(`Firestore (${yo}): ${t}`,...n)}}function Mr(t,...e){if(ns.logLevel<=Pe.ERROR){const n=e.map(fg);ns.error(`Firestore (${yo}): ${t}`,...n)}}function Zs(t,...e){if(ns.logLevel<=Pe.WARN){const n=e.map(fg);ns.warn(`Firestore (${yo}): ${t}`,...n)}}function fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+t;throw Mr(e),new Error(e)}function dt(t,e){t||me()}function xe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class YL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QL{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new di;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new di,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new di)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(dt(typeof r.accessToken=="string"),new dI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return dt(e===null||typeof e=="string"),new Vt(e)}}class JL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(dt(typeof n.token=="string"),this.R=n.token,new ZL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=t2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function $e(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return sn.fromMillis(Date.now())}static fromDate(e){return sn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new sn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new sn(0,0))}static max(){return new fe(new sn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Da?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends Da{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const n2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Da{construct(e,n,r){return new un(e,n,r)}static isValidIdentifier(e){return n2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new un(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new se(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(n)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(nt.fromString(e))}static fromName(e){return new ae(nt.fromString(e).popFirst(5))}static empty(){return new ae(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new nt(e.slice()))}}function r2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new sn(n+1,0):new sn(n,r));return new yi(i,ae.empty(),e)}function i2(t){return new yi(t.readTime,t.key,-1)}class yi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yi(fe.min(),ae.empty(),-1)}static max(){return new yi(fe.max(),ae.empty(),-1)}}function s2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==o2)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}gg.ae=-1;function Bu(t){return t==null}function pf(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ju(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class gf{constructor(e,n){this.comparator=e,this.root=n||fi.EMPTY}insert(e,n){return new gf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,fi.BLACK,null,null))}remove(e){return new gf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}},$c=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},fi=class Tr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tr.RED,this.left=i??Tr.EMPTY,this.right=s??Tr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}};fi.EMPTY=null,fi.RED=!0,fi.BLACK=!1;fi.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,i,s){return this}insert(e,n,r){return new fi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xy(this.data.getIterator())}getIteratorFrom(e){return new xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qt(this.comparator);return n.data=e,n}}class xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new ri([])}unionWith(e){let n=new Qt(un.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ri(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pI("Invalid base64 string: "+s):s}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const l2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(dt(!!t),typeof t=="string"){let e=0;const n=l2.exec(t);if(dt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _g(t){const e=t.mapValue.fields.__previous_value__;return mg(e)?_g(e):e}function Ma(t){const e=vi(t.mapValue.fields.__local_write_time__.timestampValue);return new sn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class xa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mg(t)?4:h2(t)?9007199254740991:10:me()}function sr(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),a=vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return rs(i.bytesValue).isEqual(rs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?pf(o)===pf(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(My(o)!==My(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!sr(o[c],a[c])))return!1;return!0}(t,e);default:return me()}}function La(t,e){return(t.values||[]).find(n=>sr(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return $e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),c=at(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ly(t.timestampValue,e.timestampValue);case 4:return Ly(Ma(t),Ma(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=rs(s),c=rs(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=$e(a[l],c[l]);if(u!==0)return u}return $e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=$e(at(s.latitude),at(o.latitude));return a!==0?a:$e(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=to(a[l],c[l]);if(u)return u}return $e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Vc.mapValue&&o===Vc.mapValue)return 0;if(s===Vc.mapValue)return 1;if(o===Vc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=$e(c[h],u[h]);if(p!==0)return p;const m=to(a[c[h]],l[u[h]]);if(m!==0)return m}return $e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw me()}}function Ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=vi(t),r=vi(e),i=$e(n.seconds,r.seconds);return i!==0?i:$e(n.nanos,r.nanos)}function no(t){return mf(t)}function mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mf(n.fields[o])}`;return i+"}"}(t.mapValue):me()}function _f(t){return!!t&&"integerValue"in t}function yg(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function $y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nd(t){return!!t&&"mapValue"in t}function ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ju(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function h2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ia(n)}setAll(e){let n=un.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ia(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ju(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qn(ia(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,fe.min(),fe.min(),fe.min(),Qn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,fe.min(),fe.min(),Qn.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,fe.min(),fe.min(),Qn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function Vy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=to(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function d2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{}class ht extends gI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new p2(e,n,r):n==="array-contains"?new _2(e,r):n==="in"?new y2(e,r):n==="not-in"?new v2(e,r):n==="array-contains-any"?new w2(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new g2(e,r):new m2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class or extends gI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new or(e,n)}matches(e){return mI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mI(t){return t.op==="and"}function _I(t){return f2(t)&&mI(t)}function f2(t){for(const e of t.filters)if(e instanceof or)return!1;return!0}function yf(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+no(t.value);if(_I(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function yI(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&sr(r.value,i.value)}(t,e):t instanceof or?function(r,i){return i instanceof or&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yI(o,i.filters[a]),!0):!1}(t,e):void me()}function vI(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof or?function(n){return n.op.toString()+" {"+n.getFilters().map(vI).join(" ,")+"}"}(t):"Filter"}class p2 extends ht{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class g2 extends ht{constructor(e,n){super(e,"in",n),this.keys=wI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class m2 extends ht{constructor(e,n){super(e,"not-in",n),this.keys=wI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class _2 extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yg(n)&&La(n.arrayValue,this.value)}}class y2 extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class v2 extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class w2 extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function By(t,e=null,n=[],r=[],i=null,s=null,o=null){return new E2(t,e,n,r,i,s,o)}function vg(t){const e=xe(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.he=n}return e.he}function wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!d2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uy(t.startAt,e.startAt)&&Uy(t.endAt,e.endAt)}function vf(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function T2(t,e,n,r,i,s,o,a){return new Hu(t,e,n,r,i,s,o,a)}function Wu(t){return new Hu(t)}function jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b2(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function C2(t){return t.collectionGroup!==null}function oa(t){const e=xe(t);if(e.Pe===null){e.Pe=[];const n=b2(e),r=I2(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new sa(n)),e.Pe.push(new sa(un.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new sa(un.keyField(),s))}}}return e.Pe}function xr(t){const e=xe(t);return e.Ie||(e.Ie=A2(e,oa(t))),e.Ie}function A2(t,e){if(t.limitType==="F")return By(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sa(i.field,s)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return By(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wf(t,e,n){return new Hu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zu(t,e){return wg(xr(t),xr(e))&&t.limitType===e.limitType}function EI(t){return`${vg(xr(t))}|lt:${t.limitType}`}function Ef(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vI(i)).join(", ")}]`),Bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(xr(t))}; limitType=${t.limitType})`}function qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Vy(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,oa(r),i)||r.endAt&&!function(o,a,c){const l=Vy(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,oa(r),i))}(t,e)}function S2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TI(t){return(e,n)=>{let r=!1;for(const i of oa(t)){const s=R2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function R2(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?to(c,l):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ju(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new St(ae.comparator);function wi(){return P2}const II=new St(ae.comparator);function zo(...t){let e=II;for(const n of t)e=e.insert(n.key,n);return e}function k2(t){let e=II;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ji(){return aa()}function bI(){return aa()}function aa(){return new vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const N2=new Qt(ae.comparator);function ke(...t){let e=N2;for(const n of t)e=e.add(n);return e}const O2=new Qt($e);function D2(){return O2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pf(e)?"-0":e}}function x2(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this._=void 0}}function L2(t,e,n){return t instanceof Tf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mg(s)&&(s=_g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ol?CI(t,e):t instanceof Dl?AI(t,e):function(i,s){const o=$2(i,s),a=Hy(o)+Hy(i.Ee);return _f(o)&&_f(i.Ee)?x2(a):M2(i.serializer,a)}(t,e)}function F2(t,e,n){return t instanceof Ol?CI(t,e):t instanceof Dl?AI(t,e):n}function $2(t,e){return t instanceof If?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tf extends Ku{}class Ol extends Ku{constructor(e){super(),this.elements=e}}function CI(t,e){const n=SI(e);for(const r of t.elements)n.some(i=>sr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Dl extends Ku{constructor(e){super(),this.elements=e}}function AI(t,e){let n=SI(e);for(const r of t.elements)n=n.filter(i=>!sr(i,r));return{arrayValue:{values:n}}}class If extends Ku{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Hy(t){return at(t.integerValue||t.doubleValue)}function SI(t){return yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function V2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ol&&i instanceof Ol||r instanceof Dl&&i instanceof Dl?eo(r.elements,i.elements,sr):r instanceof If&&i instanceof If?sr(r.Ee,i.Ee):r instanceof Tf&&i instanceof Tf}(t.transform,e.transform)}class Yi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yi}static exists(e){return new Yi(void 0,e)}static updateTime(e){return new Yi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eg{}function RI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new B2(t.key,Yi.none()):new Tg(t.key,t.data,Yi.none());{const n=t.data,r=Qn.empty();let i=new Qt(un.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gu(t.key,r,new ri(i.toArray()),Yi.none())}}function U2(t,e,n){t instanceof Tg?function(i,s,o){const a=i.value.clone(),c=zy(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gu?function(i,s,o){if(!Jc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zy(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(PI(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ca(t,e,n,r){return t instanceof Tg?function(s,o,a,c){if(!Jc(s.precondition,o))return a;const l=s.value.clone(),u=qy(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gu?function(s,o,a,c){if(!Jc(s.precondition,o))return a;const l=qy(s.fieldTransforms,c,o),u=o.data;return u.setAll(PI(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Jc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(s,o)=>V2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tg extends Eg{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gu extends Eg{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function PI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zy(t,e,n){const r=new Map;dt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,F2(o,a,n[i]))}return r}function qy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,L2(s,o,e))}return r}class B2 extends Eg{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&U2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=RI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>Wy(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>Wy(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ee;function kI(t){if(t===void 0)return Mr("GRPC error has no .code"),q.UNKNOWN;switch(t){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return me()}}(Ee=ot||(ot={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new Ms([4294967295,4294967295],0);function Ky(t){const e=z2().encode(t),n=new KL;return n.update(e),new Uint8Array(n.digest())}function Gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ms([n,r],0),new Ms([i,s],0)]}class Ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qo(`Invalid padding: ${n}`);if(r<0)throw new qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ms.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Ms.fromNumber(r)));return i.compare(q2)===1&&(i=new Ms([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Ky(e),[r,i]=Gy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ig(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Ky(e),[r,i]=Gy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yu(fe.min(),i,new St($e),wi(),ke())}}class rc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rc(r,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class NI{constructor(e,n){this.targetId=e,this.ye=n}}class OI{constructor(e,n,r=Xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yy{constructor(){this.we=0,this.Se=Jy(),this.be=Xt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ke(),n=ke(),r=ke();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me()}}),new rc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Jy()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class K2{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=wi(),this.Ue=Qy(),this.We=new St($e)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(vf(s))if(r===0){const o=new ae(s.path);this.je(n,o,Ut.newNoDocument(o,fe.min()))}else dt(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=rs(r).toUint8Array()}catch(c){if(c instanceof pI)return Zs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ig(o,i,s)}catch(c){return Zs(c instanceof qo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&vf(a.target)){const c=new ae(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Ut.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=ke();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Yu(e,n,this.We,this.$e,r);return this.$e=wi(),this.Ue=Qy(),this.We=new St($e),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Yy,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Qt($e),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Yy),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Qy(){return new St(ae.comparator)}function Jy(){return new St(ae.comparator)}const G2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Y2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q2=(()=>({and:"AND",or:"OR"}))();class J2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function X2(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xs(t){return dt(!!t),fe.fromTimestamp(function(n){const r=vi(n);return new sn(r.seconds,r.nanos)}(t))}function eF(t,e){return function(r){return new nt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function DI(t){const e=nt.fromString(t);return dt(FI(e)),e}function rd(t,e){const n=DI(e);if(n.get(1)!==t.databaseId.projectId)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(MI(n))}function Cf(t,e){return eF(t.databaseId,e)}function tF(t){const e=DI(t);return e.length===4?nt.emptyPath():MI(e)}function Xy(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MI(t){return dt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(dt(u===void 0||typeof u=="string"),Xt.fromBase64String(u||"")):(dt(u===void 0||u instanceof Uint8Array),Xt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?q.UNKNOWN:kI(l.code);return new se(u,l.message||"")}(o);n=new OI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rd(t,r.document.name),s=xs(r.document.updateTime),o=r.document.createTime?xs(r.document.createTime):fe.min(),a=new Qn({mapValue:{fields:r.document.fields}}),c=Ut.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Xc(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rd(t,r.document),s=r.readTime?xs(r.readTime):fe.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rd(t,r.document),s=r.removedTargetIds||[];n=new Xc([],s,i,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new W2(i,s),a=r.targetId;n=new NI(a,o)}}return n}function rF(t,e){return{documents:[Cf(t,e.path)]}}function iF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return LI(or.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Is(h.field),direction:aF(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function sF(t){let e=tF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){dt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=xI(h);return p instanceof or&&_I(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new sa(bs(y.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Bu(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Nl(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new Nl(m,p)}(n.endAt)),T2(e,i,o,s,a,"F",c,l)}function oF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bs(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bs(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return or.create(n.compositeFilter.filters.map(r=>xI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function aF(t){return G2[t]}function cF(t){return Y2[t]}function lF(t){return Q2[t]}function Is(t){return{fieldPath:t.canonicalString()}}function bs(t){return un.fromServerFormat(t.fieldPath)}function LI(t){return t instanceof ht?function(n){if(n.op==="=="){if($y(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(Fy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($y(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(Fy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:cF(n.op),value:n.value}}}(t):t instanceof or?function(n){const r=n.getFilters().map(i=>LI(i));return r.length===1?r[0]:{compositeFilter:{op:lF(n.op),filters:r}}}(t):me()}function FI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=Xt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e){this.ht=e}}function hF(t){const e=sF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(){this._n=new fF}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(yi.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class fF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qt(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ro(0)}static Bn(){return new ro(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.changes=new vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ca(r.mutation,i,ri.empty(),sn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const i=ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wi();const o=aa(),a=function(){return aa()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Gu)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ca(u.mutation,l,u.mutation.getFieldMask(),sn.now())):o.set(l.key,ri.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new gF(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=aa();let i=new St((o,a)=>o-a),s=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||ri.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ke()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bI();u.forEach(p=>{if(!s.has(p)){const m=RI(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ji());let a=-1,c=s;return o.next(l=>U.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?U.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ke())).next(u=>({batchId:a,changes:k2(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zo();return this.indexManager.getCollectionParents(e,i).next(o=>U.forEach(o,a=>{const c=function(u,h){return new Hu(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Ut.newInvalidDocument(l)))});let o=zo();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ca(l.mutation,c,ri.empty(),sn.now()),qu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:xs(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:hF(i.bundledQuery),readTime:xs(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(){this.overlays=new St(ae.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ji();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ji(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new St((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ji(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ji(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return U.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new H2(n,r));let s=this.hr.get(n);s===void 0&&(s=ke(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Pr=new Qt(vt.Ir),this.Tr=new Qt(vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new vt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new nt([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new nt([])),r=new vt(n,e),i=new vt(n,e+1);let s=ke();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||$e(e.pr,n.pr)}static Er(e,n){return $e(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Qt(vt.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new j2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qt($e);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new vt(new ae(s),0);let a=new Qt($e);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),U.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){dt(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new vt(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.Cr=e,this.docs=function(){return new St(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=wi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wi();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||s2(i2(u),r)<=0||(i.has(u.key)||qu(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EF(this)}getSize(e){return U.resolve(this.size)}}class EF extends pF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e){this.persistence=e,this.Mr=new vo(n=>vg(n),wg),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new bg,this.targetCount=0,this.Br=ro.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e,n){this.Lr={},this.overlays={},this.kr=new gg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new TF(this),this.indexManager=new dF,this.remoteDocumentCache=function(i){return new wF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uF(n),this.$r=new _F(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new vF(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new bF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class bF extends a2{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.zr=new bg,this.jr=null}static Hr(e){return new Cg(e)}get Jr(){if(this.jr)return this.jr;throw me()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ke(),i=ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ag(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(jy(n))return U.resolve(null);let r=xr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wf(n,null,"F"),r=xr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ke(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,wf(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return jy(n)||i.isEqual(fe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(Dy()<=Pe.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ef(n)),this.Ji(e,o,n,r2(i,-1)))})}ji(e,n){let r=new Qt(TI(e));return n.forEach((i,s)=>{qu(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return Dy()<=Pe.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Ef(n)),this.Ui.getDocumentsMatchingQuery(e,n,yi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new St($e),this.Xi=new vo(s=>vg(s),wg),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mF(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function SF(t,e,n,r){return new AF(t,e,n,r)}async function $I(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ke();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function VI(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function RF(t,e){const n=xe(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Xt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(w,C,R){return w.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=wi(),l=ke();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(PF(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(fe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function PF(t,e,n){let r=ke(),i=ke();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wi();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function kF(t,e){const n=xe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Af(t,e,n){const r=xe(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!nc(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function Zy(t,e,n){const r=xe(t);let i=fe.min(),s=ke();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=xe(c),p=h.Xi.get(u);return p!==void 0?U.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,xr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:ke())).next(a=>(NF(r,S2(e),a),{documents:a,_s:s})))}function NF(t,e,n){let r=t.es.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class ev{constructor(){this.activeTargetIds=D2()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OF{constructor(){this.Ys=new ev,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new ev,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=null;function id(){return Uc===null?Uc=function(){return 268435456+Math.round(2147483648*Math.random())}():Uc++,"0x"+Uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class LF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=id(),c=this.po(n,r);te("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(te("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Zs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=MF[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=id();return new Promise((o,a)=>{const c=new qL;c.setWithCredentials(!0),c.listenOnce(WL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case td.NO_ERROR:const u=c.getResponseJson();te($t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case td.TIMEOUT:te($t,`RPC '${e}' ${s} timed out`),a(new se(q.DEADLINE_EXCEEDED,"Request time out"));break;case td.HTTP_ERROR:const h=c.getStatus();if(te($t,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(R)>=0?R:q.UNKNOWN}(m.status);a(new se(y,m.message))}else a(new se(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new se(q.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te($t,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);te($t,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=id(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jL(),a=HL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");te($t,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new xF({_o:C=>{m?te($t,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(te($t,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),te($t,`RPC '${e}' stream ${i} sending:`,C),h.send(C))},ao:()=>h.close()}),w=(C,R,N)=>{C.listen(R,k=>{try{N(k)}catch(P){setTimeout(()=>{throw P},0)}})};return w(h,Fc.EventType.OPEN,()=>{m||te($t,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Fc.EventType.CLOSE,()=>{m||(m=!0,te($t,`RPC '${e}' stream ${i} transport closed`),y.To())}),w(h,Fc.EventType.ERROR,C=>{m||(m=!0,Zs($t,`RPC '${e}' stream ${i} transport errored:`,C),y.To(new se(q.UNAVAILABLE,"The operation could not be completed")))}),w(h,Fc.EventType.MESSAGE,C=>{var R;if(!m){const N=C.data[0];dt(!!N);const k=N,P=k.error||((R=k[0])===null||R===void 0?void 0:R.error);if(P){te($t,`RPC '${e}' stream ${i} received error:`,P);const B=P.status;let H=function(He){const be=ot[He];if(be!==void 0)return kI(be)}(B),oe=P.message;H===void 0&&(H=q.INTERNAL,oe="Unknown error status: "+B+" with message "+P.message),m=!0,y.To(new se(H,oe)),h.close()}else te($t,`RPC '${e}' stream ${i} received:`,N),y.Eo(N)}}),w(a,zL.STAT_EVENT,C=>{C.stat===Ny.PROXY?te($t,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ny.NOPROXY&&te($t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){return new J2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new BI(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new se(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $F extends FF{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=nF(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?xs(o.readTime):fe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Xy(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=vf(c)?{documents:rF(s,c)}:{query:iF(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Z2(s,o.resumeToken);const l=bf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=X2(s,o.snapshotVersion.toTimestamp());const l=bf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=oF(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Xy(this.serializer),n.removeTarget=e,this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(q.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(q.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class UF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Mr(n),this.R_=!1):te("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{sc(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=xe(c);l.S_.add(4),await ic(l),l.v_.set("Unknown"),l.S_.delete(4),await Qu(l)}(this))})}),this.v_=new UF(r,i)}}async function Qu(t){if(sc(t))for(const e of t.b_)await e(!0)}async function ic(t){for(const e of t.b_)await e(!1)}function jI(t,e){const n=xe(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),Pg(n)?Rg(n):wo(n).Go()&&Sg(n,e))}function HI(t,e){const n=xe(t),r=wo(n);n.w_.delete(e),r.Go()&&WI(n,e),n.w_.size===0&&(r.Go()?r.Ho():sc(n)&&n.v_.set("Unknown"))}function Sg(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wo(t).o_(e)}function WI(t,e){t.C_.Le(e),wo(t).__(e)}function Rg(t){t.C_=new K2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),wo(t).start(),t.v_.V_()}function Pg(t){return sc(t)&&!wo(t).Wo()&&t.w_.size>0}function sc(t){return xe(t).S_.size===0}function zI(t){t.C_=void 0}async function jF(t){t.w_.forEach((e,n)=>{Sg(t,e)})}async function HF(t,e){zI(t),Pg(t)?(t.v_.g_(e),Rg(t)):t.v_.set("Unknown")}async function WF(t,e,n){if(t.v_.set("Online"),e instanceof OI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nv(t,r)}else if(e instanceof Xc?t.C_.Ge(e):e instanceof NI?t.C_.Xe(e):t.C_.He(e),!n.isEqual(fe.min()))try{const r=await VI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(Xt.EMPTY_BYTE_STRING,u.snapshotVersion)),WI(s,c);const h=new ii(u.target,c,l,u.sequenceNumber);Sg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await nv(t,r)}}async function nv(t,e,n){if(!nc(e))throw e;t.S_.add(1),await ic(t),t.v_.set("Offline"),n||(n=()=>VI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Qu(t)})}async function rv(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=sc(n);n.S_.add(3),await ic(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Qu(n)}async function zF(t,e){const n=xe(t);e?(n.S_.delete(2),await Qu(n)):e||(n.S_.add(2),await ic(n),n.v_.set("Unknown"))}function wo(t){return t.F_||(t.F_=function(n,r,i){const s=xe(n);return s.T_(),new $F(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:jF.bind(null,t),lo:HF.bind(null,t),s_:WF.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),Pg(t)?Rg(t):t.v_.set("Unknown")):(await t.F_.stop(),zI(t))})),t.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qI(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),nc(t))return new se(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=zo(),this.sortedSet=new St(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.x_=new St(ae.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):me():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(){this.N_=void 0,this.listeners=[]}}class KF{constructor(){this.queries=new vo(e=>EI(e),zu),this.onlineState="Unknown",this.B_=new Set}}async function Ng(t,e){const n=xe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qF),i)try{s.N_=await n.onListen(r)}catch(o){const a=qI(o,`Initialization of query '${Ef(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&Dg(n)}async function Og(t,e){const n=xe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function GF(t,e){const n=xe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&Dg(n)}function YF(t,e,n){const r=xe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Dg(t){t.B_.forEach(e=>{e.next()})}class Mg{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.key=e}}class GI{constructor(e){this.key=e}}class QF{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ke(),this.mutatedKeys=ke(),this.ia=TI(e),this.sa=new Ls(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new iv,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=qu(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?y!==w&&(r.track({type:3,doc:m}),C=!0):this.ua(p,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),C=!0):p&&!m&&(r.track({type:1,doc:p}),C=!0,(c||l)&&(a=!0)),C&&(m?(o=o.add(m),s=w?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new io(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new iv,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=ke(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new GI(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new KI(r))}),n}Ia(e){this.ta=e._s,this.ra=ke();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return io.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class JF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XF{constructor(e){this.key=e,this.Ea=!1}}class ZF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new vo(a=>EI(a),zu),this.Ra=new Map,this.Va=new Set,this.ma=new St(ae.comparator),this.fa=new Map,this.ga=new bg,this.pa={},this.ya=new Map,this.wa=ro.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function e$(t,e){const n=a$(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await kF(n.localStore,xr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await t$(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jI(n.remoteStore,o)}return i}async function t$(t,e,n,r,i){t.ba=(h,p,m)=>async function(w,C,R,N){let k=C.view._a(R);k.Hi&&(k=await Zy(w.localStore,C.query,!1).then(({documents:H})=>C.view._a(H,k)));const P=N&&N.targetChanges.get(C.targetId),B=C.view.applyChanges(k,w.isPrimaryClient,P);return ov(w,C.targetId,B.ha),B.snapshot}(t,h,p,m);const s=await Zy(t.localStore,e,!0),o=new QF(e,s._s),a=o._a(s.documents),c=rc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);ov(t,n,l.ha);const u=new JF(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function n$(t,e){const n=xe(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!zu(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Af(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),HI(n.remoteStore,r.targetId),Sf(n,r.targetId)}).catch(pg)):(Sf(n,r.targetId),await Af(n.localStore,r.targetId,!0))}async function YI(t,e){const n=xe(t);try{const r=await RF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(dt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?dt(o.Ea):i.removedDocuments.size>0&&(dt(o.Ea),o.Ea=!1))}),await JI(n,r,e)}catch(r){await pg(r)}}function sv(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=xe(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&Dg(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function r$(t,e,n){const r=xe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new St(ae.comparator);o=o.insert(s,Ut.newNoDocument(s,fe.min()));const a=ke().add(s),c=new Yu(fe.min(),new Map,new St($e),o,a);await YI(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),xg(r)}else await Af(r.localStore,e,!1).then(()=>Sf(r,e,n)).catch(pg)}function Sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||QI(t,r)})}function QI(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(HI(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),xg(t))}function ov(t,e,n){for(const r of n)r instanceof KI?(t.ga.addReference(r.key,e),i$(t,r)):r instanceof GI?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||QI(t,r.key)):me()}function i$(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Va.add(r),xg(t))}function xg(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ae(nt.fromString(e)),r=t.wa.next();t.fa.set(r,new XF(n)),t.ma=t.ma.insert(n,r),jI(t.remoteStore,new ii(xr(Wu(n.path)),r,"TargetPurposeLimboResolution",gg.ae))}}async function JI(t,e,n){const r=xe(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Ag.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=xe(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(l,p=>U.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>U.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!nc(h))throw h;te("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,w)}}}(r.localStore,s))}async function s$(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await $I(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new se(q.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await JI(n,r.rs)}}function o$(t,e){const n=xe(t),r=n.fa.get(e);if(r&&r.Ea)return ke().add(r.key);{let i=ke();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function a$(t){const e=xe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r$.bind(null,e),e.da.s_=GF.bind(null,e.eventManager),e.da.Da=YF.bind(null,e.eventManager),e}class av{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=UI(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SF(this.persistence,new CF,e.initialUser,this.serializer)}createPersistence(e){return new IF(Cg.Hr,this.serializer)}createSharedClientState(e){return new OF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class c${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s$.bind(null,this.syncEngine),await zF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KF}()}createDatastore(e){const n=UI(e.databaseInfo.databaseId),r=function(s){return new LF(s)}(e.databaseInfo);return function(s,o,a,c){return new VF(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new BF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sv(this.syncEngine,n,0),function(){return tv.v()?new tv:new DF}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new ZF(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=xe(n);te("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await ic(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=fI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{te("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(te("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function od(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $I(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h$(t);te("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>rv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>rv(e.remoteStore,s)),t._onlineComponents=e}function u$(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function h$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!u$(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await od(t,new av)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await od(t,new av);return t._offlineComponents}async function d$(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await cv(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await cv(t,new c$))),t._onlineComponents}async function Ml(t){const e=await d$(t),n=e.eventManager;return n.onListen=e$.bind(null,e.syncEngine),n.onUnlisten=n$.bind(null,e.syncEngine),n}function f$(t,e,n={}){const r=new di;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Lg({next:p=>{o.enqueueAndForget(()=>Og(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new se(q.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new se(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Mg(Wu(a.path),u,{includeMetadataChanges:!0,z_:!0});return Ng(s,h)}(await Ml(t),t.asyncQueue,e,n,r)),r.promise}function p$(t,e,n={}){const r=new di;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Lg({next:p=>{o.enqueueAndForget(()=>Og(s,h)),p.fromCache&&c.source==="server"?l.reject(new se(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new Mg(a,u,{includeMetadataChanges:!0,z_:!0});return Ng(s,h)}(await Ml(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g$(t,e,n){if(!n)throw new se(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function m$(t,e,n,r){if(e===!0&&r===!0)throw new se(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uv(t){if(!ae.isDocumentKey(t))throw new se(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _$(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function pi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_$(t);throw new se(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GL;switch(r.type){case"firstParty":return new XL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lv.get(n);r&&(te("ComponentProvider","Removing Datastore"),lv.delete(n),r.terminate())}(this),Promise.resolve()}}function y$(t,e,n,r={}){var i;const s=(t=pi(t,Fg))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Vt.MOCK_USER;else{a=HO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new se(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Vt(l)}t._authCredentials=new YL(new dI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class tr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tr(this.firestore,e,this._key)}}class Fa extends oc{constructor(e,n,r){super(e,n,Wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tr(this.firestore,null,new ae(e))}withConverter(e){return new Fa(this.firestore,e,this._path)}}function ZI(t,e,...n){if(t=hr(t),arguments.length===1&&(e=fI.V()),g$("doc","path",e),t instanceof Fg){const r=nt.fromString(e,...n);return uv(r),new tr(t,null,new ae(r))}{if(!(t instanceof tr||t instanceof Fa))throw new se(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return uv(r),new tr(t.firestore,t instanceof Fa?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new BI(this,"async_queue_retry"),this.tu=()=>{const n=sd();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=sd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new di;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!nc(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=kg.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&me()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function dv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $a extends Fg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new v$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eb(this),this._firestoreClient.terminate()}}function w$(t,e){const n=typeof t=="object"?t:$p(),r=typeof t=="string"?t:e||"(default)",i=Ka(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jO("firestore");s&&y$(i,...s)}return i}function $g(t){return t._firestoreClient||eb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new u2(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,XI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new l$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xl(Xt.fromBase64String(e))}catch(n){throw new se(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xl(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}const E$=new RegExp("[~\\*/\\[\\]]");function T$(t,e,n){if(e.search(E$)>=0)throw fv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tb(...e.split("."))._internalPath}catch{throw fv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fv(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new se(q.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ib("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class I$ extends rb{data(){return super.data()}}function ib(t,e){return typeof e=="string"?T$(t,e):e instanceof tb?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b${convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ju(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new nb(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const n=vi(e);return new sn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);dt(FI(r));const i=new xa(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||Mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ob extends rb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ib("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zc extends ob{data(e={}){return super.data(e)}}class ab{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zc(this._firestore,this._userDataWriter,r.key,r,new Ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Zc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Zc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:C$(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function C$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){t=pi(t,tr);const e=pi(t.firestore,$a);return f$($g(e),t._key).then(n=>lb(e,t,n))}class Vg extends b${constructor(e){super(),this.firestore=e}convertBytes(e){return new xl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tr(this.firestore,null,n)}}function A$(t){t=pi(t,oc);const e=pi(t.firestore,$a),n=$g(e),r=new Vg(e);return sb(t._query),p$(n,t._query).then(i=>new ab(e,r,t,i))}function Ug(t,...e){var n,r,i;t=hr(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||dv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(dv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof tr)l=pi(t.firestore,$a),u=Wu(t._key.path),c={next:h=>{e[o]&&e[o](lb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=pi(t,oc);l=pi(h.firestore,$a),u=h._query;const p=new Vg(l);c={next:m=>{e[o]&&e[o](new ab(l,p,h,m))},error:e[o+1],complete:e[o+2]},sb(t._query)}return function(p,m,y,w){const C=new Lg(w),R=new Mg(m,C,y);return p.asyncQueue.enqueueAndForget(async()=>Ng(await Ml(p),R)),()=>{C.Ma(),p.asyncQueue.enqueueAndForget(async()=>Og(await Ml(p),R))}}($g(l),u,a,c)}function lb(t,e,n){const r=n.docs.get(e._key),i=new Vg(t);return new ob(t,i,e._key,r,new Ko(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){yo=i})(Ai),gn(new on("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $a(new QL(r.getProvider("auth-internal")),new e2(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new se(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mt(Oy,"4.1.2",e),Mt(Oy,"4.1.2","esm2017")})();const S$={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},ub=FE(S$),hb=w$(ub);var db=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},R$=(t,e,n)=>(db(t,e,"read from private field"),n?n.call(t):e.get(t)),P$=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},k$=(t,e,n,r)=>(db(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const pv=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function N$(t){if(fb(t))return{width:t.naturalWidth,height:t.naturalHeight};if(pb(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(gb(t))return{width:t.videoWidth,height:t.videoHeight};if(O$(t))return{width:t.width,height:t.height};if(mb(t))return{width:t.width,height:t.height};if(D$(t))return{width:t.width,height:t.height};if(_b(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function fb(t){try{return t instanceof HTMLImageElement}catch{return!1}}function pb(t){try{return t instanceof SVGImageElement}catch{return!1}}function gb(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function O$(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function mb(t){try{return t instanceof ImageBitmap}catch{return!1}}function D$(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function _b(t){try{return t instanceof VideoFrame}catch{return!1}}function M$(t){try{return t instanceof Blob}catch{return!1}}function x$(t){try{return t instanceof ImageData}catch{return!1}}function L$(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function yb(t){if(fb(t)&&!await V$(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(pb(t)&&!await U$(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(_b(t)&&B$(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(gb(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(mb(t)&&H$(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=N$(t);if(e===0||n===0)return null;const r=L$(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function F$(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await yb(e)}async function $$(t){if(M$(t))return await F$(t);if(x$(t)){if(j$(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await yb(t)}async function V$(t){try{return await t.decode(),!0}catch{return!1}}async function U$(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function B$(t){return t.format===null}function j$(t){return t.data.buffer.byteLength===0}function H$(t){return t.width===0&&t.height===0}function gv(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const mv=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},W$=t=>t?mv(t):mv,z$={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},Go=W$()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:z$}));function vb(t,e=Go.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=Go.getState(),r=n.get(t);if(r&&Object.is(e,Go.getState().zxingModuleOverrides))return r;{Go.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const _v=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],si={tryHarder:!0,formats:[],maxSymbols:255};async function q$(t,{tryHarder:e=si.tryHarder,formats:n=si.formats,maxSymbols:r=si.maxSymbols}=si,i){const s=await vb(i,Go.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,K$(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:G$(y.format)})}return p}function K$(t){return t.join("|")}function G$(t){const e=yv(t);let n=0,r=_v.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=_v[i],o=yv(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function yv(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var wb=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&Nn("no native wasm support detected");var y,w,C=!1,R,N,k,P,B,H,oe,pe;function He(){var d=y.buffer;n.HEAP8=R=new Int8Array(d),n.HEAP16=k=new Int16Array(d),n.HEAP32=B=new Int32Array(d),n.HEAPU8=N=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=H=new Uint32Array(d),n.HEAPF32=oe=new Float32Array(d),n.HEAPF64=pe=new Float64Array(d)}var be,it=[],Pt=[],qe=[];function gr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Le(n.preRun.shift());E(it)}function Zt(){E(Pt)}function Ue(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)_n(n.postRun.shift());E(qe)}function Le(d){it.unshift(d)}function ve(d){Pt.unshift(d)}function _n(d){qe.unshift(d)}var ft=0,pt=null;function gt(d){ft++,n.monitorRunDependencies&&n.monitorRunDependencies(ft)}function Br(d){if(ft--,n.monitorRunDependencies&&n.monitorRunDependencies(ft),ft==0&&pt){var f=pt;pt=null,f()}}function Nn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),C=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var _s="data:application/octet-stream;base64,";function ct(d){return d.startsWith(_s)}var D;n.locateFile?(D="zxing_reader.wasm",ct(D)||(D=u(D))):D=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==D&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function z(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function ee(d,f,g){return z(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),Nn(_)})}function Ne(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!ct(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(T=>{var I=WebAssembly.instantiateStreaming(T,g);return I.then(_,function(A){return p("wasm streaming compile failed: "+A),p("falling back to ArrayBuffer instantiation"),ee(f,g,_)})}):ee(f,g,_)}function v(){var d={a:PR};function f(_,T){var I=_.exports;return w=I,y=w.qa,He(),be=w.ua,ve(w.ra),Br(),I}gt();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return Ne(m,D,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},b=[],O=0;function x(d){var f=new j(d);return f.get_caught()||(f.set_caught(!0),O--),f.set_rethrown(!1),b.push(f),Gm(f.excPtr),f.get_exception_ptr()}var L=0;function Y(){we(0,0);var d=b.pop();Km(d.excPtr),L=0}function j(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){H[this.ptr+4>>2]=f},this.get_type=function(){return H[this.ptr+4>>2]},this.set_destructor=function(f){H[this.ptr+8>>2]=f},this.get_destructor=function(){return H[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,R[this.ptr+12>>0]=f},this.get_caught=function(){return R[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,R[this.ptr+13>>0]=f},this.get_rethrown=function(){return R[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){H[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return H[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=Qm(this.get_type());if(f)return H[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function W(d){throw L||(L=d),L}var F=d=>{var f=L;if(!f)return ko(0),0;var g=new j(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return ko(0),f;for(var T in d){var I=d[T];if(I===0||I===_)break;var A=g.ptr+16;if(Ym(I,_,A))return ko(I),f}return ko(_),f},ne=()=>F([]),X=d=>F([d]),re=(d,f)=>F([d,f]);function le(d){var f=new j(d).get_exception_ptr();return f}function _e(){var d=b.pop();d||Nn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(b.push(d),d.set_rethrown(!0),d.set_caught(!1),O++),L=f,L}function We(d,f,g){var _=new j(d);throw _.init(f,g),L=d,O++,L}function Fe(){return O}var Ke={};function cn(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function In(d){return this.fromWireType(B[d>>2])}var mr={},yn={},Pi={},Lt=void 0;function en(d){throw new Lt(d)}function zn(d,f,g){d.forEach(function(S){Pi[S]=f});function _(S){var M=g(S);M.length!==d.length&&en("Mismatched type converter count");for(var $=0;$<d.length;++$)_r(d[$],M[$])}var T=new Array(f.length),I=[],A=0;f.forEach((S,M)=>{yn.hasOwnProperty(S)?T[M]=yn[S]:(I.push(S),mr.hasOwnProperty(S)||(mr[S]=[]),mr[S].push(()=>{T[M]=yn[S],++A,A===I.length&&_(T)}))}),I.length===0&&_(T)}var eS=function(d){var f=Ke[d];delete Ke[d];var g=f.rawConstructor,_=f.rawDestructor,T=f.fields,I=T.map(A=>A.getterReturnType).concat(T.map(A=>A.setterArgumentType));zn([d],I,A=>{var S={};return T.forEach((M,$)=>{var Q=M.fieldName,ie=A[$],ce=M.getter,Se=M.getterContext,Ze=A[$+T.length],mt=M.setter,et=M.setterContext;S[Q]={read:_t=>ie.fromWireType(ce(Se,_t)),write:(_t,V)=>{var Z=[];mt(et,_t,Ze.toWireType(Z,V)),cn(Z)}}}),[{name:f.name,fromWireType:function(M){var $={};for(var Q in S)$[Q]=S[Q].read(M);return _(M),$},toWireType:function(M,$){for(var Q in S)if(!(Q in $))throw new TypeError(`Missing field: "${Q}"`);var ie=g();for(Q in S)S[Q].write(ie,$[Q]);return M!==null&&M.push(_,ie),ie},argPackAdvance:8,readValueFromPointer:In,destructorFunction:_}]})};function tS(d,f,g,_,T){}function hh(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function nS(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);Im=d}var Im=void 0;function Ft(d){for(var f="",g=d;N[g];)f+=Im[N[g++]];return f}var ys=void 0;function Oe(d){throw new ys(d)}function rS(d,f,g={}){var _=f.name;if(d||Oe(`type "${_}" must have a positive integer typeid pointer`),yn.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;Oe(`Cannot register type '${_}' twice`)}if(yn[d]=f,delete Pi[d],mr.hasOwnProperty(d)){var T=mr[d];delete mr[d],T.forEach(I=>I())}}function _r(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return rS(d,f,g)}function iS(d,f,g,_,T){var I=hh(g);f=Ft(f),_r(d,{name:f,fromWireType:function(A){return!!A},toWireType:function(A,S){return S?_:T},argPackAdvance:8,readValueFromPointer:function(A){var S;if(g===1)S=R;else if(g===2)S=k;else if(g===4)S=B;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[A>>I])},destructorFunction:null})}function sS(d){if(!(this instanceof jr)||!(d instanceof jr))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,T=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return f===_&&g===T}function oS(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function dh(d){function f(g){return g.$$.ptrType.registeredClass.name}Oe(f(d)+" instance already deleted")}var fh=!1;function bm(d){}function aS(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function Cm(d){d.count.value-=1;var f=d.count.value===0;f&&aS(d)}function Am(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=Am(d,f,g.baseClass);return _===null?null:g.downcast(_)}var Sm={};function cS(){return Object.keys(So).length}function lS(){var d=[];for(var f in So)So.hasOwnProperty(f)&&d.push(So[f]);return d}var Co=[];function ph(){for(;Co.length;){var d=Co.pop();d.$$.deleteScheduled=!1,d.delete()}}var Ao=void 0;function uS(d){Ao=d,Co.length&&Ao&&Ao(ph)}function hS(){n.getInheritedInstanceCount=cS,n.getLiveInheritedInstances=lS,n.flushPendingDeletes=ph,n.setDelayFunction=uS}var So={};function dS(d,f){for(f===void 0&&Oe("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function fS(d,f){return f=dS(d,f),So[f]}function yc(d,f){(!f.ptrType||!f.ptr)&&en("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&en("Both smartPtrType and smartPtr must be specified"),f.count={value:1},Ro(Object.create(d,{$$:{value:f}}))}function pS(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=fS(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function T(){return this.isSmartPointer?yc(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):yc(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var I=this.registeredClass.getActualType(f),A=Sm[I];if(!A)return T.call(this);var S;this.isConst?S=A.constPointerType:S=A.pointerType;var M=Am(f,this.registeredClass,S.registeredClass);return M===null?T.call(this):this.isSmartPointer?yc(S.registeredClass.instancePrototype,{ptrType:S,ptr:M,smartPtrType:this,smartPtr:d}):yc(S.registeredClass.instancePrototype,{ptrType:S,ptr:M})}var Ro=function(d){return typeof FinalizationRegistry>"u"?(Ro=f=>f,d):(fh=new FinalizationRegistry(f=>{Cm(f.$$)}),Ro=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var T={$$:g};fh.register(f,T,f)}return f},bm=f=>fh.unregister(f),Ro(d))};function gS(){if(this.$$.ptr||dh(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Ro(Object.create(Object.getPrototypeOf(this),{$$:{value:oS(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function mS(){this.$$.ptr||dh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Oe("Object already scheduled for deletion"),bm(this),Cm(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function _S(){return!this.$$.ptr}function yS(){return this.$$.ptr||dh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Oe("Object already scheduled for deletion"),Co.push(this),Co.length===1&&Ao&&Ao(ph),this.$$.deleteScheduled=!0,this}function vS(){jr.prototype.isAliasOf=sS,jr.prototype.clone=gS,jr.prototype.delete=mS,jr.prototype.isDeleted=_S,jr.prototype.deleteLater=yS}function jr(){}var wS=48,ES=57;function Rm(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=wS&&f<=ES?`_${d}`:d}function Pm(d,f){return d=Rm(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function km(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||Oe(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function Nm(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&Oe(`Cannot register public name '${d}' twice`),km(n,d,d),n.hasOwnProperty(g)&&Oe(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function TS(d,f,g,_,T,I,A,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=T,this.getActualType=I,this.upcast=A,this.downcast=S,this.pureVirtualFunctions=[]}function gh(d,f,g){for(;f!==g;)f.upcast||Oe(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function IS(d,f){if(f===null)return this.isReference&&Oe(`null is not a valid ${this.name}`),0;f.$$||Oe(`Cannot pass "${yh(f)}" as a ${this.name}`),f.$$.ptr||Oe(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=gh(f.$$.ptr,g,this.registeredClass);return _}function bS(d,f){var g;if(f===null)return this.isReference&&Oe(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||Oe(`Cannot pass "${yh(f)}" as a ${this.name}`),f.$$.ptr||Oe(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&Oe(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=gh(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&Oe("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:Oe(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var T=f.clone();g=this.rawShare(g,Hr.toHandle(function(){T.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:Oe("Unsupporting sharing policy")}return g}function CS(d,f){if(f===null)return this.isReference&&Oe(`null is not a valid ${this.name}`),0;f.$$||Oe(`Cannot pass "${yh(f)}" as a ${this.name}`),f.$$.ptr||Oe(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&Oe(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=gh(f.$$.ptr,g,this.registeredClass);return _}function AS(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function SS(d){this.rawDestructor&&this.rawDestructor(d)}function RS(d){d!==null&&d.delete()}function PS(){yr.prototype.getPointee=AS,yr.prototype.destructor=SS,yr.prototype.argPackAdvance=8,yr.prototype.readValueFromPointer=In,yr.prototype.deleteObject=RS,yr.prototype.fromWireType=pS}function yr(d,f,g,_,T,I,A,S,M,$,Q){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=T,this.pointeeType=I,this.sharingPolicy=A,this.rawGetPointee=S,this.rawConstructor=M,this.rawShare=$,this.rawDestructor=Q,!T&&f.baseClass===void 0?_?(this.toWireType=IS,this.destructorFunction=null):(this.toWireType=CS,this.destructorFunction=null):this.toWireType=bS}function Om(d,f,g){n.hasOwnProperty(d)||en("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var kS=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},vc=[],De=d=>{var f=vc[d];return f||(d>=vc.length&&(vc.length=d+1),vc[d]=f=be.get(d)),f},NS=(d,f,g)=>{if(d.includes("j"))return kS(d,f,g);var _=De(f).apply(null,g);return _},OS=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),NS(d,f,g)}};function On(d,f){d=Ft(d);function g(){return d.includes("j")?OS(d,f):De(f)}var _=g();return typeof _!="function"&&Oe(`unknown function pointer with signature ${d}: ${f}`),_}function DS(d,f){var g=Pm(f,function(_){this.name=f,this.message=_;var T=new Error(_).stack;T!==void 0&&(this.stack=this.toString()+`
`+T.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var Dm=void 0;function Mm(d){var f=qm(d),g=Ft(f);return vr(f),g}function wc(d,f){var g=[],_={};function T(I){if(!_[I]&&!yn[I]){if(Pi[I]){Pi[I].forEach(T);return}g.push(I),_[I]=!0}}throw f.forEach(T),new Dm(`${d}: `+g.map(Mm).join([", "]))}function MS(d,f,g,_,T,I,A,S,M,$,Q,ie,ce){Q=Ft(Q),I=On(T,I),S&&(S=On(A,S)),$&&($=On(M,$)),ce=On(ie,ce);var Se=Rm(Q);Nm(Se,function(){wc(`Cannot construct ${Q} due to unbound types`,[_])}),zn([d,f,g],_?[_]:[],function(Ze){Ze=Ze[0];var mt,et;_?(mt=Ze.registeredClass,et=mt.instancePrototype):et=jr.prototype;var _t=Pm(Se,function(){if(Object.getPrototypeOf(this)!==V)throw new ys("Use 'new' to construct "+Q);if(Z.constructor_body===void 0)throw new ys(Q+" has no accessible constructor");var Ic=Z.constructor_body[arguments.length];if(Ic===void 0)throw new ys(`Tried to invoke ctor of ${Q} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);return Ic.apply(this,arguments)}),V=Object.create(et,{constructor:{value:_t}});_t.prototype=V;var Z=new TS(Q,_t,V,ce,mt,I,S,$);Z.baseClass&&(Z.baseClass.__derivedClasses===void 0&&(Z.baseClass.__derivedClasses=[]),Z.baseClass.__derivedClasses.push(Z));var st=new yr(Q,Z,!0,!1,!1),lt=new yr(Q+"*",Z,!1,!1,!1),ki=new yr(Q+" const*",Z,!1,!0,!1);return Sm[d]={pointerType:lt,constPointerType:ki},Om(Se,_t),[st,lt,ki]})}function mh(d,f){for(var g=[],_=0;_<d;_++)g.push(H[f+_*4>>2]);return g}function _h(d,f,g,_,T,I){var A=f.length;A<2&&Oe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,M=!1,$=1;$<f.length;++$)if(f[$]!==null&&f[$].destructorFunction===void 0){M=!0;break}var Q=f[0].name!=="void",ie=A-2,ce=new Array(ie),Se=[],Ze=[];return function(){arguments.length!==ie&&Oe(`function ${d} called with ${arguments.length} arguments, expected ${ie} args!`),Ze.length=0;var mt;Se.length=S?2:1,Se[0]=T,S&&(mt=f[1].toWireType(Ze,this),Se[1]=mt);for(var et=0;et<ie;++et)ce[et]=f[et+2].toWireType(Ze,arguments[et]),Se.push(ce[et]);var _t=_.apply(null,Se);function V(Z){if(M)cn(Ze);else for(var st=S?1:2;st<f.length;st++){var lt=st===1?mt:ce[st-2];f[st].destructorFunction!==null&&f[st].destructorFunction(lt)}if(Q)return f[0].fromWireType(Z)}return V(_t)}}function xS(d,f,g,_,T,I){var A=mh(f,g);T=On(_,T),zn([],[d],function(S){S=S[0];var M=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new ys(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{wc(`Cannot construct ${S.name} due to unbound types`,A)},zn([],A,function($){return $.splice(1,0,null),S.registeredClass.constructor_body[f-1]=_h(M,$,null,T,I),[]}),[]})}function LS(d,f,g,_,T,I,A,S,M){var $=mh(g,_);f=Ft(f),I=On(T,I),zn([],[d],function(Q){Q=Q[0];var ie=`${Q.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Q.registeredClass.pureVirtualFunctions.push(f);function ce(){wc(`Cannot call ${ie} due to unbound types`,$)}var Se=Q.registeredClass.instancePrototype,Ze=Se[f];return Ze===void 0||Ze.overloadTable===void 0&&Ze.className!==Q.name&&Ze.argCount===g-2?(ce.argCount=g-2,ce.className=Q.name,Se[f]=ce):(km(Se,f,ie),Se[f].overloadTable[g-2]=ce),zn([],$,function(mt){var et=_h(ie,mt,Q,I,A);return Se[f].overloadTable===void 0?(et.argCount=g-2,Se[f]=et):Se[f].overloadTable[g-2]=et,[]}),[]})}function FS(){Object.assign(xm.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function xm(){this.allocated=[void 0],this.freelist=[]}var bn=new xm;function Lm(d){d>=bn.reserved&&--bn.get(d).refcount===0&&bn.free(d)}function $S(){for(var d=0,f=bn.reserved;f<bn.allocated.length;++f)bn.allocated[f]!==void 0&&++d;return d}function VS(){bn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),bn.reserved=bn.allocated.length,n.count_emval_handles=$S}var Hr={toValue:d=>(d||Oe("Cannot use deleted val. handle = "+d),bn.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return bn.allocate({refcount:1,value:d})}}};function US(d,f){f=Ft(f),_r(d,{name:f,fromWireType:function(g){var _=Hr.toValue(g);return Lm(g),_},toWireType:function(g,_){return Hr.toHandle(_)},argPackAdvance:8,readValueFromPointer:In,destructorFunction:null})}function yh(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function BS(d,f){switch(f){case 2:return function(g){return this.fromWireType(oe[g>>2])};case 3:return function(g){return this.fromWireType(pe[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function jS(d,f,g){var _=hh(g);f=Ft(f),_r(d,{name:f,fromWireType:function(T){return T},toWireType:function(T,I){return I},argPackAdvance:8,readValueFromPointer:BS(f,_),destructorFunction:null})}function HS(d,f,g,_,T,I,A){var S=mh(f,g);d=Ft(d),T=On(_,T),Nm(d,function(){wc(`Cannot call ${d} due to unbound types`,S)},f-1),zn([],S,function(M){var $=[M[0],null].concat(M.slice(1));return Om(d,_h(d,$,null,T,I),f-1),[]})}function WS(d,f,g){switch(f){case 0:return g?function(_){return R[_]}:function(_){return N[_]};case 1:return g?function(_){return k[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return B[_>>2]}:function(_){return H[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function zS(d,f,g,_,T){f=Ft(f);var I=hh(g),A=ie=>ie;if(_===0){var S=32-8*g;A=ie=>ie<<S>>>S}var M=f.includes("unsigned"),$=(ie,ce)=>{},Q;M?Q=function(ie,ce){return $(ce,this.name),ce>>>0}:Q=function(ie,ce){return $(ce,this.name),ce},_r(d,{name:f,fromWireType:A,toWireType:Q,argPackAdvance:8,readValueFromPointer:WS(f,I,_!==0),destructorFunction:null})}function qS(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],T=_[f];function I(A){A=A>>2;var S=H,M=S[A],$=S[A+1];return new T(S.buffer,$,M)}g=Ft(g),_r(d,{name:g,fromWireType:I,argPackAdvance:8,readValueFromPointer:I},{ignoreDuplicateRegistrations:!0})}var Fm=(d,f,g,_)=>{if(!(_>0))return 0;for(var T=g,I=g+_-1,A=0;A<d.length;++A){var S=d.charCodeAt(A);if(S>=55296&&S<=57343){var M=d.charCodeAt(++A);S=65536+((S&1023)<<10)|M&1023}if(S<=127){if(g>=I)break;f[g++]=S}else if(S<=2047){if(g+1>=I)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=I)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=I)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-T},KS=(d,f,g)=>Fm(d,N,f,g),$m=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},Vm=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,GS=(d,f,g)=>{for(var _=f+g,T=f;d[T]&&!(T>=_);)++T;if(T-f>16&&d.buffer&&Vm)return Vm.decode(d.subarray(f,T));for(var I="";f<T;){var A=d[f++];if(!(A&128)){I+=String.fromCharCode(A);continue}var S=d[f++]&63;if((A&224)==192){I+=String.fromCharCode((A&31)<<6|S);continue}var M=d[f++]&63;if((A&240)==224?A=(A&15)<<12|S<<6|M:A=(A&7)<<18|S<<12|M<<6|d[f++]&63,A<65536)I+=String.fromCharCode(A);else{var $=A-65536;I+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return I},vh=(d,f)=>d?GS(N,d,f):"";function YS(d,f){f=Ft(f);var g=f==="std::string";_r(d,{name:f,fromWireType:function(_){var T=H[_>>2],I=_+4,A;if(g)for(var S=I,M=0;M<=T;++M){var $=I+M;if(M==T||N[$]==0){var Q=$-S,ie=vh(S,Q);A===void 0?A=ie:(A+=String.fromCharCode(0),A+=ie),S=$+1}}else{for(var ce=new Array(T),M=0;M<T;++M)ce[M]=String.fromCharCode(N[I+M]);A=ce.join("")}return vr(_),A},toWireType:function(_,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var I,A=typeof T=="string";A||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array||Oe("Cannot pass non-string to std::string"),g&&A?I=$m(T):I=T.length;var S=Eh(4+I+1),M=S+4;if(H[S>>2]=I,g&&A)KS(T,M,I+1);else if(A)for(var $=0;$<I;++$){var Q=T.charCodeAt($);Q>255&&(vr(M),Oe("String has UTF-16 code units that do not fit in 8 bits")),N[M+$]=Q}else for(var $=0;$<I;++$)N[M+$]=T[$];return _!==null&&_.push(vr,S),S},argPackAdvance:8,readValueFromPointer:In,destructorFunction:function(_){vr(_)}})}var Um=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,QS=(d,f)=>{for(var g=d,_=g>>1,T=_+f/2;!(_>=T)&&P[_];)++_;if(g=_<<1,g-d>32&&Um)return Um.decode(N.subarray(d,g));for(var I="",A=0;!(A>=f/2);++A){var S=k[d+A*2>>1];if(S==0)break;I+=String.fromCharCode(S)}return I},JS=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,T=g<d.length*2?g/2:d.length,I=0;I<T;++I){var A=d.charCodeAt(I);k[f>>1]=A,f+=2}return k[f>>1]=0,f-_},XS=d=>d.length*2,ZS=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var T=B[d+g*4>>2];if(T==0)break;if(++g,T>=65536){var I=T-65536;_+=String.fromCharCode(55296|I>>10,56320|I&1023)}else _+=String.fromCharCode(T)}return _},eR=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,T=_+g-4,I=0;I<d.length;++I){var A=d.charCodeAt(I);if(A>=55296&&A<=57343){var S=d.charCodeAt(++I);A=65536+((A&1023)<<10)|S&1023}if(B[f>>2]=A,f+=4,f+4>T)break}return B[f>>2]=0,f-_},tR=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},nR=function(d,f,g){g=Ft(g);var _,T,I,A,S;f===2?(_=QS,T=JS,A=XS,I=()=>P,S=1):f===4&&(_=ZS,T=eR,A=tR,I=()=>H,S=2),_r(d,{name:g,fromWireType:function(M){for(var $=H[M>>2],Q=I(),ie,ce=M+4,Se=0;Se<=$;++Se){var Ze=M+4+Se*f;if(Se==$||Q[Ze>>S]==0){var mt=Ze-ce,et=_(ce,mt);ie===void 0?ie=et:(ie+=String.fromCharCode(0),ie+=et),ce=Ze+f}}return vr(M),ie},toWireType:function(M,$){typeof $!="string"&&Oe(`Cannot pass non-string to C++ string type ${g}`);var Q=A($),ie=Eh(4+Q+f);return H[ie>>2]=Q>>S,T($,ie+4,Q+f),M!==null&&M.push(vr,ie),ie},argPackAdvance:8,readValueFromPointer:In,destructorFunction:function(M){vr(M)}})};function rR(d,f,g,_,T,I){Ke[d]={name:Ft(f),rawConstructor:On(g,_),rawDestructor:On(T,I),fields:[]}}function iR(d,f,g,_,T,I,A,S,M,$){Ke[d].fields.push({fieldName:Ft(f),getterReturnType:g,getter:On(_,T),getterContext:I,setterArgumentType:A,setter:On(S,M),setterContext:$})}function sR(d,f){f=Ft(f),_r(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var oR={};function aR(d){var f=oR[d];return f===void 0?Ft(d):f}function Bm(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function cR(d){return d===0?Hr.toHandle(Bm()):(d=aR(d),Hr.toHandle(Bm()[d]))}function lR(d){d>4&&(bn.get(d).refcount+=1)}function jm(d,f){var g=yn[d];return g===void 0&&Oe(f+" has unknown type "+Mm(d)),g}function uR(d){var f=new Array(d+1);return function(g,_,T){f[0]=g;for(var I=0;I<d;++I){var A=jm(H[_+I*4>>2],"parameter "+I);f[I+1]=A.readValueFromPointer(T),T+=A.argPackAdvance}var S=new(g.bind.apply(g,f));return Hr.toHandle(S)}}var Hm={};function hR(d,f,g,_){d=Hr.toValue(d);var T=Hm[f];return T||(T=uR(f),Hm[f]=T),T(d,g,_)}function dR(d,f){d=jm(d,"_emval_take_value");var g=d.readValueFromPointer(f);return Hr.toHandle(g)}var fR=()=>{Nn("")},pR=(d,f,g)=>N.copyWithin(d,f,f+g),gR=()=>2147483648,mR=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),He(),1}catch{}},_R=d=>{var f=N.length;d>>>=0;var g=gR();if(d>g)return!1;for(var _=(M,$)=>M+($-M%$)%$,T=1;T<=4;T*=2){var I=f*(1+.2/T);I=Math.min(I,d+100663296);var A=Math.min(g,_(Math.max(d,I),65536)),S=mR(A);if(S)return!0}return!1},wh={},yR=()=>o||"./this.program",Po=()=>{if(!Po.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:yR()};for(var g in wh)wh[g]===void 0?delete f[g]:f[g]=wh[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);Po.strings=_}return Po.strings},vR=(d,f)=>{for(var g=0;g<d.length;++g)R[f++>>0]=d.charCodeAt(g);R[f>>0]=0},wR=(d,f)=>{var g=0;return Po().forEach(function(_,T){var I=f+g;H[d+T*4>>2]=I,vR(_,I),g+=_.length+1}),0},ER=(d,f)=>{var g=Po();H[d>>2]=g.length;var _=0;return g.forEach(function(T){_+=T.length+1}),H[f>>2]=_,0};function TR(d){return d}var Ec=d=>d%4===0&&(d%100!==0||d%400===0),IR=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},Wm=[31,29,31,30,31,30,31,31,30,31,30,31],zm=[31,28,31,30,31,30,31,31,30,31,30,31],bR=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=Ec(g.getFullYear()),T=g.getMonth(),I=(_?Wm:zm)[T];if(f>I-g.getDate())f-=I-g.getDate()+1,g.setDate(1),T<11?g.setMonth(T+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function CR(d,f,g){var _=g>0?g:$m(d)+1,T=new Array(_),I=Fm(d,T,0,T.length);return f&&(T.length=I),T}var AR=(d,f)=>{R.set(d,f)},SR=(d,f,g,_)=>{var T=B[_+40>>2],I={tm_sec:B[_>>2],tm_min:B[_+4>>2],tm_hour:B[_+8>>2],tm_mday:B[_+12>>2],tm_mon:B[_+16>>2],tm_year:B[_+20>>2],tm_wday:B[_+24>>2],tm_yday:B[_+28>>2],tm_isdst:B[_+32>>2],tm_gmtoff:B[_+36>>2],tm_zone:T?vh(T):""},A=vh(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var M in S)A=A.replace(new RegExp(M,"g"),S[M]);var $=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Q=["January","February","March","April","May","June","July","August","September","October","November","December"];function ie(V,Z,st){for(var lt=typeof V=="number"?V.toString():V||"";lt.length<Z;)lt=st[0]+lt;return lt}function ce(V,Z){return ie(V,Z,"0")}function Se(V,Z){function st(ki){return ki<0?-1:ki>0?1:0}var lt;return(lt=st(V.getFullYear()-Z.getFullYear()))===0&&(lt=st(V.getMonth()-Z.getMonth()))===0&&(lt=st(V.getDate()-Z.getDate())),lt}function Ze(V){switch(V.getDay()){case 0:return new Date(V.getFullYear()-1,11,29);case 1:return V;case 2:return new Date(V.getFullYear(),0,3);case 3:return new Date(V.getFullYear(),0,2);case 4:return new Date(V.getFullYear(),0,1);case 5:return new Date(V.getFullYear()-1,11,31);case 6:return new Date(V.getFullYear()-1,11,30)}}function mt(V){var Z=bR(new Date(V.tm_year+1900,0,1),V.tm_yday),st=new Date(Z.getFullYear(),0,4),lt=new Date(Z.getFullYear()+1,0,4),ki=Ze(st),Ic=Ze(lt);return Se(ki,Z)<=0?Se(Ic,Z)<=0?Z.getFullYear()+1:Z.getFullYear():Z.getFullYear()-1}var et={"%a":V=>$[V.tm_wday].substring(0,3),"%A":V=>$[V.tm_wday],"%b":V=>Q[V.tm_mon].substring(0,3),"%B":V=>Q[V.tm_mon],"%C":V=>{var Z=V.tm_year+1900;return ce(Z/100|0,2)},"%d":V=>ce(V.tm_mday,2),"%e":V=>ie(V.tm_mday,2," "),"%g":V=>mt(V).toString().substring(2),"%G":V=>mt(V),"%H":V=>ce(V.tm_hour,2),"%I":V=>{var Z=V.tm_hour;return Z==0?Z=12:Z>12&&(Z-=12),ce(Z,2)},"%j":V=>ce(V.tm_mday+IR(Ec(V.tm_year+1900)?Wm:zm,V.tm_mon-1),3),"%m":V=>ce(V.tm_mon+1,2),"%M":V=>ce(V.tm_min,2),"%n":()=>`
`,"%p":V=>V.tm_hour>=0&&V.tm_hour<12?"AM":"PM","%S":V=>ce(V.tm_sec,2),"%t":()=>"	","%u":V=>V.tm_wday||7,"%U":V=>{var Z=V.tm_yday+7-V.tm_wday;return ce(Math.floor(Z/7),2)},"%V":V=>{var Z=Math.floor((V.tm_yday+7-(V.tm_wday+6)%7)/7);if((V.tm_wday+371-V.tm_yday-2)%7<=2&&Z++,Z){if(Z==53){var st=(V.tm_wday+371-V.tm_yday)%7;st!=4&&(st!=3||!Ec(V.tm_year))&&(Z=1)}}else{Z=52;var lt=(V.tm_wday+7-V.tm_yday-1)%7;(lt==4||lt==5&&Ec(V.tm_year%400-1))&&Z++}return ce(Z,2)},"%w":V=>V.tm_wday,"%W":V=>{var Z=V.tm_yday+7-(V.tm_wday+6)%7;return ce(Math.floor(Z/7),2)},"%y":V=>(V.tm_year+1900).toString().substring(2),"%Y":V=>V.tm_year+1900,"%z":V=>{var Z=V.tm_gmtoff,st=Z>=0;return Z=Math.abs(Z)/60,Z=Z/60*100+Z%60,(st?"+":"-")+("0000"+Z).slice(-4)},"%Z":V=>V.tm_zone,"%%":()=>"%"};A=A.replace(/%%/g,"\0\0");for(var M in et)A.includes(M)&&(A=A.replace(new RegExp(M,"g"),et[M](I)));A=A.replace(/\0\0/g,"%");var _t=CR(A,!1);return _t.length>f?0:(AR(_t,d),_t.length-1)},RR=(d,f,g,_,T)=>SR(d,f,g,_);Lt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},nS(),ys=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},vS(),hS(),PS(),Dm=n.UnboundTypeError=DS(Error,"UnboundTypeError"),FS(),VS();var PR={q:x,u:Y,a:ne,h:X,l:re,I:le,P:_e,n:We,ba:Fe,d:W,oa:eS,Y:tS,fa:iS,na:MS,ma:xS,D:LS,ea:US,W:jS,J:HS,w:zS,s:qS,V:YS,L:nR,Q:rR,pa:iR,ga:sR,U:Lm,la:cR,R:lR,ia:hR,ka:dR,K:fR,da:pR,ca:_R,$:wR,aa:ER,H:GR,T:rP,B:QR,p:zR,b:kR,C:KR,ha:XR,c:xR,j:FR,i:DR,x:YR,O:qR,v:HR,G:eP,N:tP,A:JR,F:iP,Z:oP,X:aP,k:LR,f:MR,e:OR,g:NR,M:nP,m:jR,o:$R,S:VR,t:BR,ja:WR,y:ZR,r:UR,E:sP,z:TR,_:RR};v();var vr=n._free=d=>(vr=n._free=w.sa)(d),Eh=n._malloc=d=>(Eh=n._malloc=w.ta)(d),qm=d=>(qm=w.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=w.wa)();var we=(d,f)=>(we=w.xa)(d,f),ko=d=>(ko=w.ya)(d),Ce=()=>(Ce=w.za)(),Ae=d=>(Ae=w.Aa)(d),Km=d=>(Km=w.Ba)(d),Gm=d=>(Gm=w.Ca)(d),Ym=(d,f,g)=>(Ym=w.Da)(d,f,g),Qm=d=>(Qm=w.Ea)(d);n.dynCall_viijii=(d,f,g,_,T,I,A)=>(n.dynCall_viijii=w.Fa)(d,f,g,_,T,I,A);var Jm=n.dynCall_jiii=(d,f,g,_)=>(Jm=n.dynCall_jiii=w.Ga)(d,f,g,_),Xm=n.dynCall_jiiii=(d,f,g,_,T)=>(Xm=n.dynCall_jiiii=w.Ha)(d,f,g,_,T);n.dynCall_iiiiij=(d,f,g,_,T,I,A)=>(n.dynCall_iiiiij=w.Ia)(d,f,g,_,T,I,A),n.dynCall_iiiiijj=(d,f,g,_,T,I,A,S,M)=>(n.dynCall_iiiiijj=w.Ja)(d,f,g,_,T,I,A,S,M),n.dynCall_iiiiiijj=(d,f,g,_,T,I,A,S,M,$)=>(n.dynCall_iiiiiijj=w.Ka)(d,f,g,_,T,I,A,S,M,$);function kR(d,f){var g=Ce();try{return De(d)(f)}catch(_){if(Ae(g),_!==_+0)throw _;we(1,0)}}function NR(d,f,g,_){var T=Ce();try{De(d)(f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function OR(d,f,g){var _=Ce();try{De(d)(f,g)}catch(T){if(Ae(_),T!==T+0)throw T;we(1,0)}}function DR(d,f,g,_,T){var I=Ce();try{return De(d)(f,g,_,T)}catch(A){if(Ae(I),A!==A+0)throw A;we(1,0)}}function MR(d,f){var g=Ce();try{De(d)(f)}catch(_){if(Ae(g),_!==_+0)throw _;we(1,0)}}function xR(d,f,g){var _=Ce();try{return De(d)(f,g)}catch(T){if(Ae(_),T!==T+0)throw T;we(1,0)}}function LR(d){var f=Ce();try{De(d)()}catch(g){if(Ae(f),g!==g+0)throw g;we(1,0)}}function FR(d,f,g,_){var T=Ce();try{return De(d)(f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function $R(d,f,g,_,T,I){var A=Ce();try{De(d)(f,g,_,T,I)}catch(S){if(Ae(A),S!==S+0)throw S;we(1,0)}}function VR(d,f,g,_,T,I,A){var S=Ce();try{De(d)(f,g,_,T,I,A)}catch(M){if(Ae(S),M!==M+0)throw M;we(1,0)}}function UR(d,f,g,_,T,I,A,S,M,$,Q){var ie=Ce();try{De(d)(f,g,_,T,I,A,S,M,$,Q)}catch(ce){if(Ae(ie),ce!==ce+0)throw ce;we(1,0)}}function BR(d,f,g,_,T,I,A,S){var M=Ce();try{De(d)(f,g,_,T,I,A,S)}catch($){if(Ae(M),$!==$+0)throw $;we(1,0)}}function jR(d,f,g,_,T){var I=Ce();try{De(d)(f,g,_,T)}catch(A){if(Ae(I),A!==A+0)throw A;we(1,0)}}function HR(d,f,g,_,T,I,A){var S=Ce();try{return De(d)(f,g,_,T,I,A)}catch(M){if(Ae(S),M!==M+0)throw M;we(1,0)}}function WR(d,f,g,_,T,I,A,S,M){var $=Ce();try{De(d)(f,g,_,T,I,A,S,M)}catch(Q){if(Ae($),Q!==Q+0)throw Q;we(1,0)}}function zR(d){var f=Ce();try{return De(d)()}catch(g){if(Ae(f),g!==g+0)throw g;we(1,0)}}function qR(d,f,g,_,T,I,A){var S=Ce();try{return De(d)(f,g,_,T,I,A)}catch(M){if(Ae(S),M!==M+0)throw M;we(1,0)}}function KR(d,f,g,_){var T=Ce();try{return De(d)(f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function GR(d,f,g,_){var T=Ce();try{return De(d)(f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function YR(d,f,g,_,T,I){var A=Ce();try{return De(d)(f,g,_,T,I)}catch(S){if(Ae(A),S!==S+0)throw S;we(1,0)}}function QR(d,f,g,_,T,I){var A=Ce();try{return De(d)(f,g,_,T,I)}catch(S){if(Ae(A),S!==S+0)throw S;we(1,0)}}function JR(d,f,g,_,T,I,A,S,M,$){var Q=Ce();try{return De(d)(f,g,_,T,I,A,S,M,$)}catch(ie){if(Ae(Q),ie!==ie+0)throw ie;we(1,0)}}function XR(d,f,g){var _=Ce();try{return De(d)(f,g)}catch(T){if(Ae(_),T!==T+0)throw T;we(1,0)}}function ZR(d,f,g,_,T,I,A,S,M,$){var Q=Ce();try{De(d)(f,g,_,T,I,A,S,M,$)}catch(ie){if(Ae(Q),ie!==ie+0)throw ie;we(1,0)}}function eP(d,f,g,_,T,I,A,S){var M=Ce();try{return De(d)(f,g,_,T,I,A,S)}catch($){if(Ae(M),$!==$+0)throw $;we(1,0)}}function tP(d,f,g,_,T,I,A,S,M){var $=Ce();try{return De(d)(f,g,_,T,I,A,S,M)}catch(Q){if(Ae($),Q!==Q+0)throw Q;we(1,0)}}function nP(d,f,g,_,T,I,A){var S=Ce();try{De(d)(f,g,_,T,I,A)}catch(M){if(Ae(S),M!==M+0)throw M;we(1,0)}}function rP(d,f,g,_){var T=Ce();try{return De(d)(f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function iP(d,f,g,_,T,I,A,S,M,$,Q,ie){var ce=Ce();try{return De(d)(f,g,_,T,I,A,S,M,$,Q,ie)}catch(Se){if(Ae(ce),Se!==Se+0)throw Se;we(1,0)}}function sP(d,f,g,_,T,I,A,S,M,$,Q,ie,ce,Se,Ze,mt){var et=Ce();try{De(d)(f,g,_,T,I,A,S,M,$,Q,ie,ce,Se,Ze,mt)}catch(_t){if(Ae(et),_t!==_t+0)throw _t;we(1,0)}}function oP(d,f,g,_){var T=Ce();try{return Jm(d,f,g,_)}catch(I){if(Ae(T),I!==I+0)throw I;we(1,0)}}function aP(d,f,g,_,T){var I=Ce();try{return Xm(d,f,g,_,T)}catch(A){if(Ae(I),A!==A+0)throw A;we(1,0)}}var Tc;pt=function d(){Tc||Zm(),Tc||(pt=d)};function Zm(){if(ft>0||(gr(),ft>0))return;function d(){Tc||(Tc=!0,n.calledRun=!0,!C&&(Zt(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),Ue()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Zm(),e.ready}})();function Y$(t){return vb(wb,t)}async function Q$(t,{tryHarder:e=si.tryHarder,formats:n=si.formats,maxSymbols:r=si.maxSymbols}=si){return q$(t,{tryHarder:e,formats:n,maxSymbols:r},wb)}const Eb=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function J$(t){for(const[e,n]of Eb)if(t===n)return e;return"unknown"}var el;class Ju{constructor(e={}){P$(this,el,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!pv.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),Y$().catch(()=>{}),k$(this,el,r??[])}catch(r){throw gv(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return pv.filter(e=>e!=="unknown")}async detect(e){try{const n=await $$(e);if(n===null)return[];let r;try{r=await Q$(n,{tryHarder:!0,formats:R$(this,el).map(i=>Eb.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),w=Math.max(s,a,l,h),C=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,w-m,C-y),rawValue:new TextDecoder().decode(i.bytes),format:J$(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw gv(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}el=new WeakMap;const Tb=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},vv=t=>new Promise(e=>setTimeout(e,t));class X$ extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class Ib extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class Z$ extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class eV extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let Rf;const tV=t=>{Rf=new Ju({formats:t})},nV=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{Rf=new Ju({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await Rf.detect(t),p=h.some(w=>!l.includes(w.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(w=>w.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},rV=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new X$;const e=document.createElement("img");return e.src=t,await Tb(e,"load"),e},bb=async(t,e=["qr_code"])=>await new Ju({formats:e}).detect(t),iV=async(t,e=["qr_code"])=>{const n=new Ju({formats:e}),r=await rV(t);return await n.detect(r)};var Cb={},mn={};Object.defineProperty(mn,"__esModule",{value:!0});mn.compactObject=Rb;mn.deprecated=fV;var sV=mn.detectBrowser=pV;mn.disableLog=uV;mn.disableWarnings=hV;mn.extractVersion=tl;mn.filterStats=gV;mn.log=dV;mn.walkStats=Ll;mn.wrapPeerConnectionEvent=lV;function oV(t,e,n){return e=aV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aV(t){var e=cV(t,"string");return Ei(e)==="symbol"?e:String(e)}function cV(t,e){if(Ei(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ei(t){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(t)}var Ab=!0,Sb=!0;function tl(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function lV(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function uV(t){return typeof t!="boolean"?new Error("Argument type: "+Ei(t)+". Please use a boolean."):(Ab=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function hV(t){return typeof t!="boolean"?new Error("Argument type: "+Ei(t)+". Please use a boolean."):(Sb=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function dV(){if((typeof window>"u"?"undefined":Ei(window))==="object"){if(Ab)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function fV(t,e){Sb&&console.warn(t+" is deprecated, please use "+e+" instead.")}function pV(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=tl(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=tl(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=tl(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function wv(t){return Object.prototype.toString.call(t)==="[object Object]"}function Rb(t){return wv(t)?Object.keys(t).reduce(function(e,n){var r=wv(t[n]),i=r?Rb(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,oV({},n,i))},{}):t}function Ll(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?Ll(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){Ll(t,t.get(i),n)})}))}function gV(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&Ll(t,a,i)})}),i}Object.defineProperty(Cb,"__esModule",{value:!0});var mV=Cb.shimGetUserMedia=vV,_V=yV(mn);function Pb(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Pb=function(r){return r?n:e})(t)}function yV(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Yr(t)!=="object"&&typeof t!="function")return{default:t};var n=Pb(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Yr(t){"@babel/helpers - typeof";return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yr(t)}var Ev=_V.log;function vV(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(Yr(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=Yr(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,w){return y?y+w.charAt(0).toUpperCase()+w.slice(1):w==="deviceId"?"sourceId":w};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&Yr(c.audio)==="object"){var u=function(y,w,C){w in y&&!(C in y)&&(y[C]=y[w],delete y[w])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&Yr(c.video)==="object"){var h=c.video.facingMode;h=h&&(Yr(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(C){return C.kind==="videoinput"});var w=y.find(function(C){return m.some(function(R){return C.label.toLowerCase().includes(R)})});return!w&&y.length&&m.includes("back")&&(w=y[y.length-1]),w&&(c.video.deviceId=h.exact?{exact:w.deviceId}:{ideal:w.deviceId}),c.video=r(c.video),Ev("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return Ev("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var kb={};Object.defineProperty(kb,"__esModule",{value:!0});var wV=kb.shimGetUserMedia=IV,EV=TV(mn);function Nb(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Nb=function(r){return r?n:e})(t)}function TV(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Fs(t)!=="object"&&typeof t!="function")return{default:t};var n=Nb(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Fs(t){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(t)}function IV(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){EV.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return Fs(c)==="object"&&Fs(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&Fs(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.shimAudioContext=DV;dr.shimCallbacksAPI=RV;dr.shimConstraints=Mb;dr.shimCreateOfferLegacy=OV;var bV=dr.shimGetUserMedia=PV;dr.shimLocalStreamsAPI=AV;dr.shimRTCIceServerUrls=kV;dr.shimRemoteStreamsAPI=SV;dr.shimTrackEventTransceiver=NV;var Ob=CV(mn);function Db(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Db=function(r){return r?n:e})(t)}function CV(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Ti(t)!=="object"&&typeof t!="function")return{default:t};var n=Db(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Ti(t){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ti(t)}function AV(t){if(!(Ti(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function SV(t){if(!(Ti(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function RV(t){if(!(Ti(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function PV(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(Mb(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function Mb(t){return t&&t.video!==void 0?Object.assign({},t,{video:Ob.compactObject(t.video)}):t}function kV(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(Ob.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function NV(t){Ti(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function OV(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function DV(t){Ti(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const MV=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Er(t,e){if(t===!1)throw new Error(e??"assertion failure")}const xV=MV(()=>{const t=sV(window);switch(t.browser){case"chrome":mV(window,t);break;case"firefox":wV(window,t);break;case"safari":bV(window,t);break;default:throw new Ib}});let Cr={isActive:!1};function ad(){if(Cr.isActive){Cr.videoEl.src="",Cr.videoEl.srcObject=null,Cr.videoEl.load();for(const t of Cr.stream.getTracks())Cr.stream.removeTrack(t),t.stop();Cr={isActive:!1}}}async function LV(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new Z$;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new Ib;xV();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([Tb(t,"loadeddata"),vv(3e3).then(()=>{throw new eV})]),await vv(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Cr={videoEl:t,stream:s,isActive:!0};const[o]=Cr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const FV={class:"qrcode-stream-wrapper"},$V={class:"qrcode-stream-overlay"},VV=lr({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=Ht(),i=Ht(),s=Ht(),o=Ht(!1),a=Ht(!1);Ep(()=>{a.value=!0}),Tp(()=>{ad()});const c=zt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));ci(c,async m=>{const y=s.value;Er(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const w=r.value;Er(w!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const C=w.getContext("2d");if(Er(C!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const R=await LV(y,m);a.value?(o.value=!0,e("camera-on",R)):ad()}catch(R){e("error",R)}else w.width=y.videoWidth,w.height=y.videoHeight,C.drawImage(y,0,0,y.videoWidth,y.videoHeight),ad(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=ZP(n);ci(l,m=>{a.value&&tV(m)});const u=zt(()=>c.value.shouldStream&&o.value);ci(u,m=>{if(m){Er(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Er(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Er(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),nV(s.value,{detectHandler:w=>e("detect",w),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Er(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Er(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const w=s.value;if(Er(w!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const C=w.offsetWidth,R=w.offsetHeight,N=w.videoWidth,k=w.videoHeight,P=Math.max(C/N,R/k),B=N*P,H=k*P,oe=B/N,pe=H/k,He=(C-B)/2,be=(R-H)/2,it=({x:Zt,y:Ue})=>({x:Math.floor(Zt*oe),y:Math.floor(Ue*pe)}),Pt=({x:Zt,y:Ue})=>({x:Math.floor(Zt+He),y:Math.floor(Ue+be)}),qe=m.map(Zt=>{const{boundingBox:Ue,cornerPoints:Le}=Zt,{x:ve,y:_n}=Pt(it({x:Ue.x,y:Ue.y})),{x:ft,y:pt}=it({x:Ue.width,y:Ue.height});return{...Zt,cornerPoints:Le.map(gt=>Pt(it(gt))),boundingBox:DOMRectReadOnly.fromRect({x:ve,y:_n,width:ft,height:pt})}});y.width=w.offsetWidth,y.height=w.offsetHeight;const gr=y.getContext("2d");n.track(qe,gr)}};return(m,y)=>(dn(),Or("div",FV,[ti("video",{ref_key:"videoRef",ref:s,class:au([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),_1(ti("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[Pk,!u.value]]),ti("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),ti("div",$V,[O0(m.$slots,"default",{},void 0,!0)])]))}}),UV=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},xb=UV(VV,[["__scopeId","data-v-dfa4038c"]]),BV=lr({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))bb(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(dn(),Or("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),jV=["onDrop"],HV=lr({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(bb(l))}),c!==""&&r(iV(c,n.formats))};return(o,a)=>(dn(),Or("div",{onDrop:kc(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=kc(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=kc(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=kc(()=>{},["prevent","stop"]))},[O0(o.$slots,"default")],40,jV))}});function WV(t){t.component("qrcode-stream",xb),t.component("qrcode-capture",BV),t.component("qrcode-drop-zone",HV)}const zV={install:WV};let Fl=null;typeof window<"u"?Fl=window.Vue:typeof global<"u"&&(Fl=global.Vue);Fl&&Fl.use(zV);const qV={class:"qrScanner"},KV=lr({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=Ht(!0);Ht();function r(s){s.length>=1&&e("codeFound",s[0].rawValue)}function i(){n.value=!1}return(s,o)=>(dn(),Or("div",qV,[qt(kt(xb),{onDetect:r,constraints:{facingMode:"environment"},onCameraOn:i},{default:C0(()=>[n.value?(dn(),Or("div",{key:0,class:"loading-indicator","on:cameraOn":i},"Caricamento...",32)):W0("",!0)]),_:1})]))}});function Bg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function an(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function Tv(t){return t!==void 0&&t.enterprise!==void 0}class GV{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Lb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YV=Lb,Fb=new Ci("auth","Firebase",Lb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new go("@firebase/auth");function QV(t,...e){$l.logLevel<=Pe.WARN&&$l.warn(`Auth (${Ai}): ${t}`,...e)}function nl(t,...e){$l.logLevel<=Pe.ERROR&&$l.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,...e){throw jg(t,...e)}function nr(t,...e){return jg(t,...e)}function $b(t,e,n){const r=Object.assign(Object.assign({},YV()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function Vb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ar(t,"argument-error"),$b(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fb.create(t,...e)}function de(t,e,...n){if(!t)throw jg(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Lr(t,e){t||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JV(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JV()||kE()||"connection"in navigator)?navigator.onLine:!0}function ZV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=xp()||NE()}get(){return XV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU=new ac(3e4,6e4);function Xu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Eo(t,e,n,r,i={}){return Bb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ub.fetch()(Hb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Bb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eU),e);try{const i=new nU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bc(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $b(t,u,l);ar(t,u)}}catch(i){if(i instanceof kn)throw i;ar(t,"network-request-failed",{message:String(i)})}}async function jb(t,e,n,r,i={}){const s=await Eo(t,e,n,r,i);return"mfaPendingCredential"in s&&ar(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hg(t.config,i):`${t.config.apiScheme}://${i}`}class nU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nr(this.auth,"network-request-failed")),tU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nr(t,e,r);return i.customData._tokenResponse=n,i}async function rU(t,e){return Eo(t,"GET","/v2/recaptchaConfig",Xu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(t,e){return Eo(t,"POST","/v1/accounts:delete",e)}async function sU(t,e){return Eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oU(t,e=!1){const n=hr(t),r=await n.getIdToken(e),i=Wg(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la(cd(i.auth_time)),issuedAtTime:la(cd(i.iat)),expirationTime:la(cd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cd(t){return Number(t)*1e3}function Wg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=vl(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aU(t){const e=Wg(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&cU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Va(t,sU(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dU(s.providerUserInfo):[],a=hU(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wb(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function uU(t){const e=hr(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dU(t){return t.map(e=>{var{providerId:n}=e,r=Bg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fU(t,e){const n=await Bb(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ub.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aU(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ua;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oU(this,e)}reload(){return uU(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Va(this,iU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:P,isAnonymous:B,providerData:H,stsTokenManager:oe}=n;de(k&&oe,e,"internal-error");const pe=Ua.fromJSON(this.name,oe);de(typeof k=="string",e,"internal-error"),qr(h,e.name),qr(p,e.name),de(typeof P=="boolean",e,"internal-error"),de(typeof B=="boolean",e,"internal-error"),qr(m,e.name),qr(y,e.name),qr(w,e.name),qr(C,e.name),qr(R,e.name),qr(N,e.name);const He=new Qi({uid:k,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:B,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:pe,createdAt:R,lastLoginAt:N});return H&&Array.isArray(H)&&(He.providerData=H.map(be=>Object.assign({},be))),C&&(He._redirectEventId=C),He}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ua;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new Map;function Rr(t){Lr(t instanceof Function,"Expected a class definition");let e=bv.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zb.type="NONE";const Cv=zb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(Rr(Cv),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Rr(Cv);const o=rl(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Qi._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new $s(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new $s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qb(e))return"Blackberry";if(Jb(e))return"Webos";if(zg(e))return"Safari";if((e.includes("chrome/")||Kb(e))&&!e.includes("edge/"))return"Chrome";if(Yb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qb(t=Jt()){return/firefox\//i.test(t)}function zg(t=Jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kb(t=Jt()){return/crios\//i.test(t)}function Gb(t=Jt()){return/iemobile/i.test(t)}function Yb(t=Jt()){return/android/i.test(t)}function Qb(t=Jt()){return/blackberry/i.test(t)}function Jb(t=Jt()){return/webos/i.test(t)}function Zu(t=Jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pU(t=Jt()){var e;return Zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gU(){return WO()&&document.documentMode===10}function Xb(t=Jt()){return Zu(t)||Yb(t)||Jb(t)||Qb(t)||/windows phone/i.test(t)||Gb(t)}function mU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t,e=[]){let n;switch(t){case"Browser":n=Av(Jt());break;case"Worker":n=`${Av(Jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yU(t,e={}){return Eo(t,"GET","/v2/passwordPolicy",Xu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=6;class wU{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vU,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sv(this),this.idTokenSubscription=new Sv(this),this.beforeStateQueue=new _U(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?hr(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yU(this),n=new wU(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[Rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vr(t){return hr(t)}class Sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=XO(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TU().appendChild(r)})}function IU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bU="https://www.google.com/recaptcha/enterprise.js?render=",CU="recaptcha-enterprise",AU="NO_RECAPTCHA";class SU{constructor(e){this.type=CU,this.auth=Vr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new GV(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Tv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(AU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Tv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eC(bU+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Rv(t,e,n,r=!1){const i=new SU(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(El(s,e??{}))return i;ar(i,"already-initialized")}return n.initialize({options:e})}function PU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kU(t,e,n){const r=Vr(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tC(e),{host:o,port:a}=NU(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OU()}function tC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NU(t){const e=tC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pv(o)}}}function Pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OU(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return jb(t,"POST","/v1/accounts:signInWithIdp",Xu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU="http://localhost";class ss extends nC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ss(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:DU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends cc{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.GOOGLE_SIGN_IN_METHOD="google.com";Jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends cc{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends cc{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(t,e){return jb(t,"POST","/v1/accounts:signUp",Xu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=kv(r);return new os({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kv(r);return new os({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ul(e,n,r,i)}}function rC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,s,e,r):s})}async function MU(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xU(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Va(t,rC(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=Wg(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),os._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ar(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LU(t,e,n=!1){const r="signIn",i=await rC(t,r,e),s=await os._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FU(t){const e=Vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J3(t,e,n){var r;const i=Vr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Rv(i,s,"signUpPassword");o=ld(i,l)}else o=ld(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Rv(i,s,"signUpPassword");return ld(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&FU(t),l}),c=await os._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function iC(t,e,n,r){return hr(t).onIdTokenChanged(e,n,r)}function $U(t,e,n){return hr(t).beforeAuthStateChanged(e,n)}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(){const t=Jt();return zg(t)||Zu(t)}const UU=1e3,BU=10;class oC extends sC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VU()&&mU(),this.fallbackToPolling=Xb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oC.type="LOCAL";const jU=oC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC extends sC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aC.type="SESSION";const cC=aC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await HU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=qg("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function zU(t){rr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function qU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GU(){return lC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebaseLocalStorageDb",YU=1,jl="firebaseLocalStorage",hC="fbase_key";class lc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nh(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function QU(){const t=indexedDB.deleteDatabase(uC);return new lc(t).toPromise()}function kf(){const t=indexedDB.open(uC,YU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:hC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await QU(),e(await kf()))})})}async function Nv(t,e,n){const r=nh(t,!0).put({[hC]:e,value:n});return new lc(r).toPromise()}async function JU(t,e){const n=nh(t,!1).get(e),r=await new lc(n).toPromise();return r===void 0?null:r.value}function Ov(t,e){const n=nh(t,!0).delete(e);return new lc(n).toPromise()}const XU=800,ZU=3;class dC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=th._getInstance(GU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qU(),!this.activeServiceWorker)return;this.sender=new WU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await Nv(e,Bl,"1"),await Ov(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nh(i,!1).getAll();return new lc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dC.type="LOCAL";const e4=dC;new ac(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){return e?Rr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends nC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t4(t){return LU(t.auth,new Gg(t),t.bypassAuthState)}function n4(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),xU(n,new Gg(t),t.bypassAuthState)}async function r4(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),MU(n,new Gg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t4;case"linkViaPopup":case"linkViaRedirect":return r4;case"reauthViaPopup":case"reauthViaRedirect":return n4;default:ar(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=new ac(2e3,1e4);async function X3(t,e,n){const r=Vr(t);Vb(t,e,eh);const i=Kg(r,n);return new Hi(r,"signInViaPopup",e,i).executeNotNull()}class Hi extends fC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i4.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="pendingRedirect",il=new Map;class o4 extends fC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await a4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a4(t,e){const n=gC(e),r=pC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function c4(t,e){return pC(t)._set(gC(e),"true")}function l4(t,e){il.set(t._key(),e)}function pC(t){return Rr(t._redirectPersistence)}function gC(t){return rl(s4,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z3(t,e,n){return u4(t,e,n)}async function u4(t,e,n){const r=Vr(t);Vb(t,e,eh),await r._initializationPromise;const i=Kg(r,n);return await c4(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function eH(t,e){return await Vr(t)._initializationPromise,mC(t,e,!1)}async function mC(t,e,n=!1){const r=Vr(t),i=Kg(r,e),o=await new o4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=10*60*1e3;class d4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_C(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dv(e))}saveEventToCache(e){this.cachedEventUids.add(Dv(e)),this.lastProcessedEventTime=Date.now()}}function Dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _C({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _C(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p4(t,e={}){return Eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m4=/^https?/;async function _4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p4(t);for(const n of e)try{if(y4(n))return}catch{}ar(t,"unauthorized-domain")}function y4(t){const e=Pf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m4.test(n))return!1;if(g4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=new ac(3e4,6e4);function Mv(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w4(t){return new Promise((e,n)=>{var r,i,s;function o(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(nr(t,"network-request-failed"))},timeout:v4.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const a=IU("iframefcb");return rr()[a]=()=>{gapi.load?o():n(nr(t,"network-request-failed"))},eC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sl=null,e})}let sl=null;function E4(t){return sl=sl||w4(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4=new ac(5e3,15e3),I4="__/auth/iframe",b4="emulator/auth/iframe",C4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S4(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hg(e,b4):`https://${t.config.authDomain}/${I4}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=A4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function R4(t){const e=await E4(t),n=rr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:S4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nr(t,"network-request-failed"),a=rr().setTimeout(()=>{s(o)},T4.get());function c(){rr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k4=500,N4=600,O4="_blank",D4="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M4(t,e,n,r=k4,i=N4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},P4),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Jt().toLowerCase();n&&(a=Kb(l)?O4:n),qb(l)&&(e=e||D4,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(pU(l)&&a!=="_self")return x4(e||"",a),new xv(null);const h=window.open(e||"",a,u);de(h,t,"popup-blocked");try{h.focus()}catch{}return new xv(h)}function x4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4="__/auth/handler",F4="emulator/auth/handler",$4=encodeURIComponent("fac");async function Lv(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof cc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$4}=${encodeURIComponent(c)}`:"";return`${V4(t)}?${po(a).slice(1)}${l}`}function V4({config:t}){return t.emulator?Hg(t,F4):`https://${t.authDomain}/${L4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="webStorageSupport";class U4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cC,this._completeRedirectFn=mC,this._overrideRedirectResult=l4}async _openPopup(e,n,r,i){var s;Lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lv(e,n,r,Pf(),i);return M4(e,o,qg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Lv(e,n,r,Pf(),i);return zU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R4(e),r=new d4(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ud,{type:ud},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ud];o!==void 0&&n(!!o),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xb()||zg()||Zu()}}const B4=U4;var Fv="@firebase/auth",$v="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W4(t){gn(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zb(t)},l=new EU(r,i,s,c);return PU(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new on("auth-internal",e=>{const n=Vr(e.getProvider("auth").getImmediate());return(r=>new j4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Fv,$v,H4(t)),Mt(Fv,$v,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=5*60,q4=PE("authIdTokenMaxAge")||z4;let Vv=null;const K4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>q4)return;const i=n==null?void 0:n.token;Vv!==i&&(Vv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yC(t=$p()){const e=Ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RU(t,{popupRedirectResolver:B4,persistence:[e4,jU,cC]}),r=PE("authTokenSyncURL");if(r){const s=K4(r);$U(n,s,()=>s(n.currentUser)),iC(n,o=>s(o))}const i=SE("auth");return i&&kU(n,`http://${i}`),n}W4("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4=new Map,Y4={activated:!1,tokenObservers:[]};function Wn(t){return G4.get(t)||Object.assign({},Y4)}const Uv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ta,await J4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ta,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function J4(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Hl=new Ci("appCheck","AppCheck",X4);function vC(t){if(!Wn(t).activated)throw Hl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4="firebase-app-check-database",eB=1,Nf="firebase-app-check-store";let jc=null;function tB(){return jc||(jc=new Promise((t,e)=>{try{const n=indexedDB.open(Z4,eB);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Hl.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Nf,{keyPath:"compositeKey"})}}}catch(n){e(Hl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),jc)}function nB(t,e){return rB(iB(t),e)}async function rB(t,e){const r=(await tB()).transaction(Nf,"readwrite"),s=r.objectStore(Nf).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(Hl.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function iB(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new go("@firebase/app-check");function Bv(t,e){return Lp()?nB(t,e).catch(n=>{Of.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sB={error:"UNKNOWN_ERROR"};function oB(t){return Eu.encodeString(JSON.stringify(t),!1)}async function Df(t,e=!1){const n=t.app;vC(n);const r=Wn(n);let i=r.token,s;if(i&&!Yo(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(Yo(c)?i=c:await Bv(n,void 0))}if(!e&&i&&Yo(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await Wn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Of.warn(c.message):Of.error(c),s=c}let a;return i?s?Yo(i)?a={token:i.token,internalError:s}:a=Hv(s):(a={token:i.token},r.token=i,await Bv(n,i)):a=Hv(s),o&&uB(n,a),a}async function aB(t){const e=t.app;vC(e);const{provider:n}=Wn(e);{const{token:r}=await n.getToken();return{token:r}}}function cB(t,e,n,r){const{app:i}=t,s=Wn(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Yo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),jv(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>jv(t))}function wC(t,e){const n=Wn(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function jv(t){const{app:e}=t,n=Wn(e);let r=n.tokenRefresher;r||(r=lB(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function lB(t){const{app:e}=t;return new Q4(async()=>{const n=Wn(e);let r;if(n.token?r=await Df(t,!0):r=await Df(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Wn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Uv.RETRIAL_MIN_WAIT,Uv.RETRIAL_MAX_WAIT)}function uB(t,e){const n=Wn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Yo(t){return t.expireTimeMillis-Date.now()>0}function Hv(t){return{token:oB(sB),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Wn(this.app);for(const n of e)wC(this.app,n.next);return Promise.resolve()}}function dB(t,e){return new hB(t,e)}function fB(t){return{getToken:e=>Df(t,e),getLimitedUseToken:()=>aB(t),addTokenListener:e=>cB(t,"INTERNAL",e),removeTokenListener:e=>wC(t.app,e)}}const pB="@firebase/app-check",gB="0.8.0",mB="app-check",Wv="app-check-internal";function _B(){gn(new on(mB,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return dB(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Wv).initialize()})),gn(new on(Wv,t=>{const e=t.getProvider("app-check").getImmediate();return fB(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Mt(pB,gB)}_B();const EC=Symbol("firebaseApp");function uc(t){return z0()&&Un(EC,null)||$p(t)}const Zn=()=>{},yB=typeof window<"u";function Yg(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function vB(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function ps(t){return!!t&&typeof t=="object"}const wB=Object.prototype;function EB(t){return ps(t)&&Object.getPrototypeOf(t)===wB}function Qg(t){return ps(t)&&t.type==="document"}function TB(t){return ps(t)&&t.type==="collection"}function IB(t){return Qg(t)||TB(t)}function bB(t){return ps(t)&&t.type==="query"}function CB(t){return ps(t)&&"ref"in t}function AB(t){return ps(t)&&typeof t.bucket=="string"}function SB(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const RB=Symbol.for("v-scx");function PB(){return!!Un(RB,0)}const Hc=new WeakMap;function kB(t,e){if(!Hc.has(t)){const n=Xw(!0);Hc.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Hc.delete(t)}}return Hc.get(t)}const TC=new WeakMap;function NB(t){return TC.get(uc(t))}const Wc=new WeakMap;function IC(t){const e=uc(t);if(!Wc.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{Wc.set(e,s),n(s.value)}];Wc.set(e,i)}return Wc.get(e)}function OB(t){const e=IC(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function DB(t,e){const n=yC(e);iC(n,r=>{const i=IC();t.value=r,Array.isArray(i)&&i[1](t)})}const zv="@firebase/database",qv="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bC="";function MB(t){bC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ia(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $r(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xB(e)}}catch{}return new LB},Wi=CC("localStorage"),Mf=CC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new go("@firebase/database"),FB=function(){let t=1;return function(){return t++}}(),AC=function(t){const e=nD(t),n=new JO;n.update(e);const r=n.digest();return Eu.encodeByteArray(r)},hc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=hc.apply(null,r):typeof r=="object"?e+=Ot(r):e+=r,e+=" "}return e};let Ji=null,Kv=!0;const $B=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Us.logLevel=Pe.VERBOSE,Ji=Us.log.bind(Us),e&&Mf.set("logging_enabled",!0)):typeof t=="function"?Ji=t:(Ji=null,Mf.remove("logging_enabled"))},Bt=function(...t){if(Kv===!0&&(Kv=!1,Ji===null&&Mf.get("logging_enabled")===!0&&$B(!0)),Ji){const e=hc.apply(null,t);Ji(e)}},dc=function(t){return function(...e){Bt(t,...e)}},xf=function(...t){const e="FIREBASE INTERNAL ERROR: "+hc(...t);Us.error(e)},as=function(...t){const e=`FIREBASE FATAL ERROR: ${hc(...t)}`;throw Us.error(e),new Error(e)},wn=function(...t){const e="FIREBASE WARNING: "+hc(...t);Us.warn(e)},VB=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},SC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UB=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},so="[MIN_NAME]",cs="[MAX_NAME]",To=function(t,e){if(t===e)return 0;if(t===so||e===cs)return-1;if(e===so||t===cs)return 1;{const n=Gv(t),r=Gv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},BB=function(t,e){return t===e?0:t<e?-1:1},Lo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ot(e))},Jg=function(t){if(typeof t!="object"||t===null)return Ot(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ot(e[r]),n+=":",n+=Jg(t[e[r]]);return n+="}",n},RC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Pn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const PC=function(t){K(!SC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},jB=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HB=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},WB=new RegExp("^-?(0*)\\d{1,10}$"),zB=-2147483648,qB=2147483647,Gv=function(t){if(WB.test(t)){const e=Number(t);if(e>=zB&&e<=qB)return e}return null},fc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wn("Exception was thrown by user callback.",n),e},Math.floor(0))}},KB=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){wn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YB{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wn(e)}}class Lf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="5",kC="v",NC="s",OC="r",DC="f",MC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xC="ls",LC="p",Ff="ac",FC="websocket",$C="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JB(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function VC(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===FC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$C)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JB(t)&&(n.ns=t.namespace);const i=[];return Pn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(){this.counters_={}}incrementCounter(e,n=1){$r(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={},dd={};function Zg(t){const e=t.toString();return hd[e]||(hd[e]=new XB),hd[e]}function ZB(t,e){const n=t.toString();return dd[n]||(dd[n]=e()),dd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&fc(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="start",t6="close",n6="pLPCommand",r6="pRTLPCB",UC="id",BC="pw",jC="ser",i6="cb",s6="seg",o6="ts",a6="d",c6="dframe",HC=1870,WC=30,l6=HC-WC,u6=25e3,h6=3e4;class Ss{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dc(e),this.stats_=Zg(n),this.urlFn=c=>(this.appCheckToken&&(c[Ff]=this.appCheckToken),VC(n,$C,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new e6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(h6)),UB(()=>{if(this.isClosed_)return;this.scriptTagHolder=new em((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yv)this.id=a,this.password=c;else if(o===t6)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Yv]="t",r[jC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[i6]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kC]=Xg,this.transportSessionId&&(r[NC]=this.transportSessionId),this.lastSessionId&&(r[xC]=this.lastSessionId),this.applicationId&&(r[LC]=this.applicationId),this.appCheckToken&&(r[Ff]=this.appCheckToken),typeof location<"u"&&location.hostname&&MC.test(location.hostname)&&(r[OC]=DC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ss.forceAllow_=!0}static forceDisallow(){Ss.forceDisallow_=!0}static isAvailable(){return Ss.forceAllow_?!0:!Ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jB()&&!HB()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CE(n),i=RC(r,l6);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[c6]="t",r[UC]=e,r[BC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class em{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FB(),window[n6+this.uniqueCallbackIdentifier]=e,window[r6+this.uniqueCallbackIdentifier]=n,this.myIFrame=em.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Bt("frame writing exception"),a.stack&&Bt(a.stack),Bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[UC]=this.myID,e[BC]=this.myPW,e[jC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+WC+r.length<=HC;){const o=this.pendingSegs.shift();r=r+"&"+s6+i+"="+o.seg+"&"+o6+i+"="+o.ts+"&"+a6+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(u6)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6=16384,f6=45e3;let Wl=null;typeof MozWebSocket<"u"?Wl=MozWebSocket:typeof WebSocket<"u"&&(Wl=WebSocket);class Mn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dc(this.connId),this.stats_=Zg(n),this.connURL=Mn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kC]=Xg,typeof location<"u"&&location.hostname&&MC.test(location.hostname)&&(o[OC]=DC),n&&(o[NC]=n),r&&(o[xC]=r),i&&(o[Ff]=i),s&&(o[LC]=s),VC(e,FC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wi.set("previous_websocket_failure",!0);try{let r;OE(),this.mySock=new Wl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wl!==null&&!Mn.forceDisallow_}static previouslyFailed(){return Wi.isInMemoryStorage||Wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ia(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=RC(n,d6);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f6))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mn.responsesRequiredToBeHealthy=2;Mn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ss,Mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Mn&&Mn.isAvailable();let r=n&&!Mn.previouslyFailed();if(e.webSocketOnly&&(n||wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Mn];else{const i=this.transports_=[];for(const s of Ba.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ba.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ba.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p6=6e4,g6=5e3,m6=10*1024,_6=100*1024,fd="t",Qv="d",y6="s",Jv="r",v6="e",Xv="o",Zv="a",ew="n",tw="p",w6="h";class E6{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dc("c:"+this.id+":"),this.transportManager_=new Ba(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fd in e){const n=e[fd];n===Zv?this.upgradeIfSecondaryHealthy_():n===Jv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Lo("t",e),r=Lo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ew,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Lo("t",e),r=Lo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Lo(fd,e);if(Qv in e){const r=e[Qv];if(n===w6){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ew){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===y6?this.onConnectionShutdown_(r):n===Jv?this.onReset_(r):n===v6?xf("Server Error: "+r):n===Xv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xg!==r&&wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(p6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends qC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zl}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=32,rw=768;class Xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ze(){return new Xe("")}function Te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ii(t){return t.pieces_.length-t.pieceNum_}function Qe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Xe(t.pieces_,e)}function KC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function T6(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function GC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function YC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Xe(e,0)}function Tt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Xe(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Sn(t,e){const n=Te(t),r=Te(e);if(n===null)return e;if(n===r)return Sn(Qe(t),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QC(t,e){if(Ii(t)!==Ii(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ii(t)>Ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class I6{constructor(e,n){this.errorPrefix_=n,this.parts_=GC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Tu(this.parts_[r]);JC(this)}}function b6(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tu(e),JC(t)}function C6(t){const e=t.parts_.pop();t.byteLength_-=Tu(e),t.parts_.length>0&&(t.byteLength_-=1)}function JC(t){if(t.byteLength_>rw)throw new Error(t.errorPrefix_+"has a key path longer than "+rw+" bytes ("+t.byteLength_+").");if(t.parts_.length>nw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nw+") or object contains a cycle "+xi(t))}function xi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends qC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new tm}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=1e3,A6=60*5*1e3,iw=30*1e3,S6=1.3,R6=3e4,P6="server_kill",sw=3;class kr extends zC{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=kr.nextPersistentConnectionId_++,this.log_=dc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fo,this.maxReconnectDelay_=A6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!OE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ot(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ta,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;kr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$r(e,"w")){const r=Js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=iw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ot(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xf("Unrecognized action received from server: "+Ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>R6&&(this.reconnectDelay_=Fo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new E6(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{wn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(P6)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&wn(h),c())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qd(this.interruptReasons_)&&(this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Xe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sw&&(this.reconnectDelay_=iw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bC.replace(/\./g,"-")]=1,xp()?e["framework.cordova"]=1:NE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zl.getInstance().currentlyOnline();return qd(this.interruptReasons_)&&e}}kr.nextPersistentConnectionId_=0;kr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ie(so,e),i=new Ie(so,n);return this.compare(r,i)!==0}minPost(){return Ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;class XC extends rh{static get __EMPTY_NODE(){return zc}static set __EMPTY_NODE(e){zc=e}compare(e,n){return To(e.name,n.name)}isDefinedOn(e){throw fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ie.MIN}maxPost(){return new Ie(cs,zc)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Ie(e,zc)}toString(){return".key"}}const Bs=new XC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??hn.EMPTY_NODE,this.right=s??hn.EMPTY_NODE}copy(e,n,r,i,s){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return hn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}wt.RED=!0;wt.BLACK=!1;class k6{copy(e,n,r,i,s){return this}insert(e,n,r){return new wt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class hn{constructor(e,n=hn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,wt.BLACK,null,null))}remove(e){return new hn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qc(this.root_,null,this.comparator_,!0,e)}}hn.EMPTY_NODE=new k6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N6(t,e){return To(t.name,e.name)}function nm(t,e){return To(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;function O6(t){$f=t}const ZC=function(t){return typeof t=="number"?"number:"+PC(t):"string:"+t},eA=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$r(e,".sv"),"Priority must be a string or number.")}else K(t===$f||t.isEmpty(),"priority of unexpected type.");K(t===$f||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ow;class yt{constructor(e,n=yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eA(this.priorityNode_)}static set __childrenNodeConstructor(e){ow=e}static get __childrenNodeConstructor(){return ow}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:Te(e)===".priority"?this.priorityNode_:yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ZC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=PC(this.value_):e+=this.value_,this.lazyHash_=AC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof yt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=yt.VALUE_TYPE_ORDER.indexOf(n),s=yt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tA,nA;function D6(t){tA=t}function M6(t){nA=t}class x6 extends rh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?To(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ie.MIN}maxPost(){return new Ie(cs,new yt("[PRIORITY-POST]",nA))}makePost(e,n){const r=tA(e);return new Ie(n,new yt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Kt=new x6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6=Math.log(2);class F6{constructor(e){const n=s=>parseInt(Math.log(s)/L6,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ql=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new wt(p,h.node,wt.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),w=i(m+1,l);return h=t[m],p=n?n(h):h,new wt(p,h.node,wt.BLACK,y,w)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,w){const C=h-y,R=h;h-=y;const N=i(C+1,R),k=t[C],P=n?n(k):k;m(new wt(P,k.node,w,null,N))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const w=c.nextBitIsOne(),C=Math.pow(2,c.count-(y+1));w?p(C,wt.BLACK):(p(C,wt.BLACK),p(C,wt.RED))}return u},o=new F6(t.length),a=s(o);return new hn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;const Es={};class Pr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Es&&Kt,"ChildrenNode.ts has not been loaded"),pd=pd||new Pr({".priority":Es},{".priority":Kt}),pd}get(e){const n=Js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return $r(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ql(r,e.getCompare()):a=Es;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Pr(u,l)}addToIndexes(e,n){const r=wl(this.indexes_,(i,s)=>{const o=Js(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Es)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ie.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ql(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Ie(e.name,a))),c.insert(e,e.node)}});return new Pr(r,this.indexSet_)}removeFromIndexes(e,n){const r=wl(this.indexes_,i=>{if(i===Es)return i;{const s=n.get(e.name);return s?i.remove(new Ie(e.name,s)):i}});return new Pr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class Ve{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eA(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $o||($o=new Ve(new hn(nm),null,Pr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$o}updatePriority(e){return this.children_.isEmpty()?this:new Ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$o:n}}getChild(e){const n=Te(e);return n===null?this:this.getImmediateChild(n).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$o:this.priorityNode_;return new Ve(i,o,s)}}updateChild(e,n){const r=Te(e);if(r===null)return n;{K(Te(e)!==".priority"||Ii(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Qe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Kt,(o,a)=>{n[o]=a.val(e),r++,s&&Ve.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ZC(this.getPriority().val())+":"),this.forEachChild(Kt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":AC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===Bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Kt),i=n.getIterator(Kt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bs?null:this.indexMap_.get(e.toString())}}Ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $6 extends Ve{constructor(){super(new hn(nm),Ve.EMPTY_NODE,Pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ve.EMPTY_NODE}isEmpty(){return!1}}const pc=new $6;Object.defineProperties(Ie,{MIN:{value:new Ie(so,Ve.EMPTY_NODE)},MAX:{value:new Ie(cs,pc)}});XC.__EMPTY_NODE=Ve.EMPTY_NODE;yt.__childrenNodeConstructor=Ve;O6(pc);M6(pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6=!0;function jt(t,e=null){if(t===null)return Ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new yt(n,jt(e))}if(!(t instanceof Array)&&V6){const n=[];let r=!1;if(Pn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=jt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ie(o,c)))}}),n.length===0)return Ve.EMPTY_NODE;const s=ql(n,N6,o=>o.name,nm);if(r){const o=ql(n,Kt.getCompare());return new Ve(s,jt(e),new Pr({".priority":o},{".priority":Kt}))}else return new Ve(s,jt(e),Pr.Default)}else{let n=Ve.EMPTY_NODE;return Pn(t,(r,i)=>{if($r(t,r)&&r.substring(0,1)!=="."){const s=jt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(jt(e))}}D6(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U6 extends rh{constructor(e){super(),this.indexPath_=e,K(!ye(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?To(e.name,n.name):s}makePost(e,n){const r=jt(e),i=Ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ie(n,i)}maxPost(){const e=Ve.EMPTY_NODE.updateChild(this.indexPath_,pc);return new Ie(cs,e)}toString(){return GC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6 extends rh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?To(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ie.MIN}maxPost(){return Ie.MAX}makePost(e,n){const r=jt(e);return new Ie(n,r)}toString(){return".value"}}const j6=new B6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H6(t){return{type:"value",snapshotNode:t}}function W6(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function z6(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function aw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function q6(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:so}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kt}copy(){const e=new rm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Kt?n="$priority":t.index_===j6?n="$value":t.index_===Bs?n="$key":(K(t.index_ instanceof U6,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ot(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ot(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ot(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ot(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Kt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends zC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=dc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kl.getListenId_(e,r),a={};this.listens_[o]=a;const c=cw(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),Js(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=Kl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cw(e._queryParams),r=e._path.toString(),i=new Ta;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+po(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ia(a.responseText)}catch{wn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&wn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(){this.rootNode_=Ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return{value:null,children:new Map}}function rA(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Te(e);t.children.has(r)||t.children.set(r,Gl());const i=t.children.get(r);e=Qe(e),rA(i,e,n)}}function Vf(t,e,n){t.value!==null?n(e,t.value):G6(t,(r,i)=>{const s=new Xe(e.toString()+"/"+r);Vf(i,s,n)})}function G6(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=10*1e3,Q6=30*1e3,J6=5*60*1e3;class X6{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y6(e);const r=uw+(Q6-uw)*Math.random();ua(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Pn(e,(i,s)=>{s>0&&$r(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*J6))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(er||(er={}));function iA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=er.ACK_USER_WRITE,this.source=iA()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Xe(e));return new Yl(ze(),n,this.revert)}}else return K(Te(this.path)===e,"operationForChild called for unrelated child."),new Yl(Qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=er.OVERWRITE}operationForChild(e){return ye(this.path)?new ls(this.source,ze(),this.snap.getImmediateChild(e)):new ls(this.source,Qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=er.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Xe(e));return n.isEmpty()?null:n.value?new ls(this.source,ze(),n.value):new ja(this.source,ze(),n)}else return K(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ja(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=Te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Z6(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(q6(o.childName,o.snapshotNode))}),Vo(t,i,"child_removed",e,r,n),Vo(t,i,"child_added",e,r,n),Vo(t,i,"child_moved",s,r,n),Vo(t,i,"child_changed",e,r,n),Vo(t,i,"value",e,r,n),i}function Vo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>tj(t,a,c)),o.forEach(a=>{const c=ej(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function ej(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tj(t,e,n){if(e.childName==null||n.childName==null)throw fo("Should only compare child_ events.");const r=new Ie(e.childName,e.snapshotNode),i=new Ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){return{eventCache:t,serverCache:e}}function ha(t,e,n,r){return aA(new im(e,n,r),t.serverCache)}function cA(t,e,n,r){return aA(t.eventCache,new im(e,n,r))}function Uf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function us(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;const nj=()=>(gd||(gd=new hn(BB)),gd);class Ge{constructor(e,n=nj()){this.value=e,this.children=n}static fromObject(e){let n=new Ge(null);return Pn(e,(r,i)=>{n=n.set(new Xe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ze(),value:this.value};if(ye(e))return null;{const r=Te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Qe(e),n);return s!=null?{path:Tt(new Xe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=Te(e),r=this.children.get(n);return r!==null?r.subtree(Qe(e)):new Ge(null)}}set(e,n){if(ye(e))return new Ge(n,this.children);{const r=Te(e),s=(this.children.get(r)||new Ge(null)).set(Qe(e),n),o=this.children.insert(r,s);return new Ge(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const n=Te(e),r=this.children.get(n);if(r){const i=r.remove(Qe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ge(null):new Ge(this.value,s)}else return this}}get(e){if(ye(e))return this.value;{const n=Te(e),r=this.children.get(n);return r?r.get(Qe(e)):null}}setTree(e,n){if(ye(e))return n;{const r=Te(e),s=(this.children.get(r)||new Ge(null)).setTree(Qe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ge(this.value,o)}}fold(e){return this.fold_(ze(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Tt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ze(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(e))return null;{const s=Te(e),o=this.children.get(s);return o?o.findOnPath_(Qe(e),Tt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ze(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const i=Te(e),s=this.children.get(i);return s?s.foreachOnPath_(Qe(e),Tt(n,i),r):new Ge(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Tt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new Ge(null))}}function da(t,e,n){if(ye(e))return new Bn(new Ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Sn(i,e);return s=s.updateChild(o,n),new Bn(t.writeTree_.set(i,s))}else{const i=new Ge(n),s=t.writeTree_.setTree(e,i);return new Bn(s)}}}function hw(t,e,n){let r=t;return Pn(n,(i,s)=>{r=da(r,Tt(e,i),s)}),r}function dw(t,e){if(ye(e))return Bn.empty();{const n=t.writeTree_.setTree(e,new Ge(null));return new Bn(n)}}function Bf(t,e){return gs(t,e)!=null}function gs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Sn(n.path,e)):null}function fw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Kt,(r,i)=>{e.push(new Ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ie(r,i.value))}),e}function gi(t,e){if(ye(e))return t;{const n=gs(t,e);return n!=null?new Bn(new Ge(n)):new Bn(t.writeTree_.subtree(e))}}function jf(t){return t.writeTree_.isEmpty()}function oo(t,e){return lA(ze(),t.writeTree_,e)}function lA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lA(Tt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Tt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e){return gA(e,t)}function rj(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=da(t.visibleWrites,e,n)),t.lastWriteId=r}function ij(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function sj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&oj(a,r.path)?i=!1:Ln(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return aj(t),!0;if(r.snap)t.visibleWrites=dw(t.visibleWrites,r.path);else{const a=r.children;Pn(a,c=>{t.visibleWrites=dw(t.visibleWrites,Tt(r.path,c))})}return!0}else return!1}function oj(t,e){if(t.snap)return Ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ln(Tt(t.path,n),e))return!0;return!1}function aj(t){t.visibleWrites=hA(t.allWrites,cj,ze()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cj(t){return t.visible}function hA(t,e,n){let r=Bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ln(n,o)?(a=Sn(n,o),r=da(r,a,s.snap)):Ln(o,n)&&(a=Sn(o,n),r=da(r,ze(),s.snap.getChild(a)));else if(s.children){if(Ln(n,o))a=Sn(n,o),r=hw(r,a,s.children);else if(Ln(o,n))if(a=Sn(o,n),ye(a))r=hw(r,ze(),s.children);else{const c=Js(s.children,Te(a));if(c){const l=c.getChild(Qe(a));r=da(r,ze(),l)}}}else throw fo("WriteRecord should have .snap or .children")}}return r}function dA(t,e,n,r,i){if(!r&&!i){const s=gs(t.visibleWrites,e);if(s!=null)return s;{const o=gi(t.visibleWrites,e);if(jf(o))return n;if(n==null&&!Bf(o,ze()))return null;{const a=n||Ve.EMPTY_NODE;return oo(o,a)}}}else{const s=gi(t.visibleWrites,e);if(!i&&jf(s))return n;if(!i&&n==null&&!Bf(s,ze()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Ln(l.path,e)||Ln(e,l.path))},a=hA(t.allWrites,o,e),c=n||Ve.EMPTY_NODE;return oo(a,c)}}}function lj(t,e,n){let r=Ve.EMPTY_NODE;const i=gs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Kt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gi(t.visibleWrites,e);return n.forEachChild(Kt,(o,a)=>{const c=oo(gi(s,new Xe(o)),a);r=r.updateImmediateChild(o,c)}),fw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gi(t.visibleWrites,e);return fw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function uj(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Tt(e,n);if(Bf(t.visibleWrites,s))return null;{const o=gi(t.visibleWrites,s);return jf(o)?i.getChild(n):oo(o,i.getChild(n))}}function hj(t,e,n,r){const i=Tt(e,n),s=gs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gi(t.visibleWrites,i);return oo(o,r.getNode().getImmediateChild(n))}else return null}function dj(t,e){return gs(t.visibleWrites,e)}function fj(t,e,n,r,i,s,o){let a;const c=gi(t.visibleWrites,e),l=gs(c,ze());if(l!=null)a=l;else if(n!=null)a=oo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function pj(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function Hf(t,e,n,r){return dA(t.writeTree,t.treePath,e,n,r)}function fA(t,e){return lj(t.writeTree,t.treePath,e)}function pw(t,e,n,r){return uj(t.writeTree,t.treePath,e,n,r)}function Ql(t,e){return dj(t.writeTree,Tt(t.treePath,e))}function gj(t,e,n,r,i,s){return fj(t.writeTree,t.treePath,e,n,r,i,s)}function sm(t,e,n){return hj(t.writeTree,t.treePath,e,n)}function pA(t,e){return gA(Tt(t.treePath,e),t.writeTree)}function gA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,aw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,z6(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,W6(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,aw(r,e.snapshotNode,i.oldSnap));else throw fo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const mA=new _j;class om{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new im(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:us(this.viewCache_),s=gj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function yj(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vj(t,e,n,r,i){const s=new mj;let o,a;if(n.type===er.OVERWRITE){const l=n;l.source.fromUser?o=Wf(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),o=Jl(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===er.MERGE){const l=n;l.source.fromUser?o=Ej(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=zf(t,e,l.path,l.children,r,i,a,s))}else if(n.type===er.ACK_USER_WRITE){const l=n;l.revert?o=bj(t,e,l.path,r,i,s):o=Tj(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===er.LISTEN_COMPLETE)o=Ij(t,e,n.path,r,s);else throw fo("Unknown operation type: "+n.type);const c=s.getChanges();return wj(e,o,c),{viewCache:o,changes:c}}function wj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Uf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(H6(Uf(e)))}}function _A(t,e,n,r,i,s){const o=e.eventCache;if(Ql(r,n)!=null)return e;{let a,c;if(ye(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=us(e),u=l instanceof Ve?l:Ve.EMPTY_NODE,h=fA(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Hf(r,us(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Te(n);if(l===".priority"){K(Ii(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=pw(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Qe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=pw(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=sm(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return ha(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Jl(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=Te(n);if(!c.isCompleteForPath(n)&&Ii(n)>1)return e;const y=Qe(n),C=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),C):l=u.updateChild(c.getNode(),m,C,y,mA,null)}const h=cA(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),p=new om(i,h,s);return _A(t,h,n,i,p,a)}function Wf(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new om(i,e,s);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=ha(e,l,!0,t.filter.filtersNodes());else{const h=Te(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=ha(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=Qe(n),m=a.getNode().getImmediateChild(h);let y;if(ye(p))y=r;else{const w=u.getCompleteChild(h);w!=null?KC(p)===".priority"&&w.getChild(YC(p)).isEmpty()?y=w:y=w.updateChild(p,r):y=Ve.EMPTY_NODE}if(m.equals(y))c=e;else{const w=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=ha(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function gw(t,e){return t.eventCache.isCompleteForChild(e)}function Ej(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Tt(n,c);gw(e,Te(u))&&(a=Wf(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Tt(n,c);gw(e,Te(u))||(a=Wf(t,a,u,l,i,s,o))}),a}function mw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function zf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ye(n)?l=r:l=new Ge(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=mw(t,m,p);c=Jl(t,c,new Xe(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),w=mw(t,y,p);c=Jl(t,c,new Xe(h),w,i,s,o,a)}}),c}function Tj(t,e,n,r,i,s,o){if(Ql(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Jl(t,e,n,c.getNode().getChild(n),i,s,a,o);if(ye(n)){let l=new Ge(null);return c.getNode().forEachChild(Bs,(u,h)=>{l=l.set(new Xe(u),h)}),zf(t,e,n,l,i,s,a,o)}else return e}else{let l=new Ge(null);return r.foreach((u,h)=>{const p=Tt(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),zf(t,e,n,l,i,s,a,o)}}function Ij(t,e,n,r,i){const s=e.serverCache,o=cA(e,s.getNode(),s.isFullyInitialized()||ye(n),s.isFiltered());return _A(t,o,n,r,mA,i)}function bj(t,e,n,r,i,s){let o;if(Ql(r,n)!=null)return e;{const a=new om(r,e,i),c=e.eventCache.getNode();let l;if(ye(n)||Te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Hf(r,us(e));else{const h=e.serverCache.getNode();K(h instanceof Ve,"serverChildren would be complete if leaf node"),u=fA(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=Te(n);let h=sm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Qe(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Ve.EMPTY_NODE,Qe(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hf(r,us(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Ql(r,ze())!=null,ha(e,l,o,t.filter.filtersNodes())}}function Cj(t,e){const n=us(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(Te(e)).isEmpty())?n.getChild(e):null}function _w(t,e,n,r){e.type===er.MERGE&&e.source.queryId!==null&&(K(us(t.viewCache_),"We should always have a full cache before handling merges"),K(Uf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vj(t.processor_,i,e,n,r);return yj(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Aj(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Aj(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Z6(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yw;function Sj(t){K(!yw,"__referenceConstructor has already been defined"),yw=t}function am(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),_w(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_w(o,e,n,r));return s}}function cm(t,e){let n=null;for(const r of t.views.values())n=n||Cj(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vw;function Rj(t){K(!vw,"__referenceConstructor has already been defined"),vw=t}class ww{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=pj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pj(t,e,n,r,i){return rj(t.pendingWriteTree_,e,n,r,i),i?sh(t,new ls(iA(),e,n)):[]}function Rs(t,e,n=!1){const r=ij(t.pendingWriteTree_,e);if(sj(t.pendingWriteTree_,e)){let s=new Ge(null);return r.snap!=null?s=s.set(ze(),!0):Pn(r.children,o=>{s=s.set(new Xe(o),!0)}),sh(t,new Yl(r.path,s,n))}else return[]}function ih(t,e,n){return sh(t,new ls(sA(),e,n))}function kj(t,e,n){const r=Ge.fromObject(n);return sh(t,new ja(sA(),e,r))}function Nj(t,e,n,r){const i=EA(t,r);if(i!=null){const s=TA(i),o=s.path,a=s.queryId,c=Sn(o,e),l=new ls(oA(a),c,n);return IA(t,o,l)}else return[]}function Oj(t,e,n,r){const i=EA(t,r);if(i){const s=TA(i),o=s.path,a=s.queryId,c=Sn(o,e),l=Ge.fromObject(n),u=new ja(oA(a),c,l);return IA(t,o,u)}else return[]}function yA(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Sn(o,e),l=cm(a,c);if(l)return l});return dA(i,e,s,n,!0)}function sh(t,e){return vA(e,t.syncPointTree_,null,uA(t.pendingWriteTree_,ze()))}function vA(t,e,n,r){if(ye(t.path))return wA(t,e,n,r);{const i=e.get(ze());n==null&&i!=null&&(n=cm(i,ze()));let s=[];const o=Te(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=pA(r,o);s=s.concat(vA(a,c,l,u))}return i&&(s=s.concat(am(i,t,r,n))),s}}function wA(t,e,n,r){const i=e.get(ze());n==null&&i!=null&&(n=cm(i,ze()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=pA(r,o),u=t.operationForChild(o);u&&(s=s.concat(wA(u,a,c,l)))}),i&&(s=s.concat(am(i,t,r,n))),s}function EA(t,e){return t.tagToQueryMap.get(e)}function TA(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Xe(t.substr(0,e))}}function IA(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=uA(t.pendingWriteTree_,e);return am(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lm(n)}node(){return this.node_}}class um{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Tt(this.path_,e);return new um(this.syncTree_,n)}node(){return yA(this.syncTree_,this.path_)}}const Dj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ew=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Mj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xj(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Mj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},xj=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Lj=function(t,e,n,r){return hm(e,new um(n,t),r)},Fj=function(t,e,n){return hm(t,new lm(e),n)};function hm(t,e,n){const r=t.getPriority().val(),i=Ew(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ew(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new yt(a,jt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new yt(i))),o.forEachChild(Kt,(a,c)=>{const l=hm(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fm(t,e){let n=e instanceof Xe?e:new Xe(e),r=t,i=Te(n);for(;i!==null;){const s=Js(r.node.children,i)||{children:{},childCount:0};r=new dm(i,r,s),n=Qe(n),i=Te(n)}return r}function Io(t){return t.node.value}function bA(t,e){t.node.value=e,qf(t)}function CA(t){return t.node.childCount>0}function $j(t){return Io(t)===void 0&&!CA(t)}function oh(t,e){Pn(t.node.children,(n,r)=>{e(new dm(n,t,r))})}function AA(t,e,n,r){n&&!r&&e(t),oh(t,i=>{AA(i,e,!0,r)}),n&&r&&e(t)}function Vj(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function gc(t){return new Xe(t.parent===null?t.name:gc(t.parent)+"/"+t.name)}function qf(t){t.parent!==null&&Uj(t.parent,t.name,t)}function Uj(t,e,n){const r=$j(n),i=$r(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj=/[\[\].#$\/\u0000-\u001F\u007F]/,jj=/[\[\].#$\u0000-\u001F\u007F]/,md=10*1024*1024,SA=function(t){return typeof t=="string"&&t.length!==0&&!Bj.test(t)},Hj=function(t){return typeof t=="string"&&t.length!==0&&!jj.test(t)},Wj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hj(t)},RA=function(t,e,n){const r=n instanceof Xe?new I6(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xi(r));if(typeof e=="function")throw new Error(t+"contains a function "+xi(r)+" with contents = "+e.toString());if(SC(e))throw new Error(t+"contains "+e.toString()+" "+xi(r));if(typeof e=="string"&&e.length>md/3&&Tu(e)>md)throw new Error(t+"contains a string greater than "+md+" utf8 bytes "+xi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Pn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!SA(o)))throw new Error(t+" contains an invalid key ("+o+") "+xi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);b6(r,o),RA(t,a,r),C6(r)}),i&&s)throw new Error(t+' contains ".value" child '+xi(r)+" in addition to actual children.")}},zj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wj(n))throw new Error(tD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kj(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!QC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ms(t,e,n){Kj(t,n),Gj(t,r=>Ln(r,e)||Ln(e,r))}function Gj(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Yj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Yj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ji&&Bt("event: "+n.toString()),fc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qj="repo_interrupt",Jj=25;class Xj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gl(),this.transactionQueueTree_=new dm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zj(t,e,n){if(t.stats_=Zg(t.repoInfo_),t.forceRestClient_||KB())t.server_=new Kl(t.repoInfo_,(r,i,s,o)=>{Tw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Iw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ot(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new kr(t.repoInfo_,e,(r,i,s,o)=>{Tw(t,r,i,s,o)},r=>{Iw(t,r)},r=>{t9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZB(t.repoInfo_,()=>new X6(t.stats_,t.server_)),t.infoData_=new K6,t.infoSyncTree_=new ww({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=ih(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pm(t,"connected",!1),t.serverSyncTree_=new ww({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);ms(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function e9(t){const n=t.infoData_.getNode(new Xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function PA(t){return Dj({timestamp:e9(t)})}function Tw(t,e,n,r,i){t.dataUpdateCount++;const s=new Xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=wl(n,l=>jt(l));o=Oj(t.serverSyncTree_,s,c,i)}else{const c=jt(n);o=Nj(t.serverSyncTree_,s,c,i)}else if(r){const c=wl(n,l=>jt(l));o=kj(t.serverSyncTree_,s,c)}else{const c=jt(n);o=ih(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=mm(t,s)),ms(t.eventQueue_,a,o)}function Iw(t,e){pm(t,"connected",e),e===!1&&r9(t)}function t9(t,e){Pn(e,(n,r)=>{pm(t,n,r)})}function pm(t,e,n){const r=new Xe("/.info/"+e),i=jt(n);t.infoData_.updateSnapshot(r,i);const s=ih(t.infoSyncTree_,r,i);ms(t.eventQueue_,r,s)}function n9(t){return t.nextWriteId_++}function r9(t){kA(t,"onDisconnectEvents");const e=PA(t),n=Gl();Vf(t.onDisconnect_,ze(),(i,s)=>{const o=Lj(i,s,t.serverSyncTree_,e);rA(n,i,o)});let r=[];Vf(n,ze(),(i,s)=>{r=r.concat(ih(t.serverSyncTree_,i,s));const o=a9(t,i);mm(t,o)}),t.onDisconnect_=Gl(),ms(t.eventQueue_,ze(),r)}function i9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Qj)}function kA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Bt(n,...e)}function NA(t,e,n){return yA(t.serverSyncTree_,e,n)||Ve.EMPTY_NODE}function gm(t,e=t.transactionQueueTree_){if(e||ah(t,e),Io(e)){const n=DA(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&s9(t,gc(e),n)}else CA(e)&&oh(e,n=>{gm(t,n)})}function s9(t,e,n){const r=n.map(l=>l.currentWriteId),i=NA(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Sn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{kA(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Rs(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();ah(t,fm(t.transactionQueueTree_,e)),gm(t,t.transactionQueueTree_),ms(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)fc(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{wn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}mm(t,e)}},o)}function mm(t,e){const n=OA(t,e),r=gc(n),i=DA(t,n);return o9(t,i,r),r}function o9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Sn(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Rs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Jj)u=!0,h="maxretry",i=i.concat(Rs(t.serverSyncTree_,c.currentWriteId,!0));else{const p=NA(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){RA("transaction failed: Data returned ",m,c.path);let y=jt(m);typeof m=="object"&&m!=null&&$r(m,".priority")||(y=y.updatePriority(p.getPriority()));const C=c.currentWriteId,R=PA(t),N=Fj(y,p,R);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=N,c.currentWriteId=n9(t),o.splice(o.indexOf(C),1),i=i.concat(Pj(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(Rs(t.serverSyncTree_,C,!0))}else u=!0,h="nodata",i=i.concat(Rs(t.serverSyncTree_,c.currentWriteId,!0))}ms(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}ah(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)fc(r[a]);gm(t,t.transactionQueueTree_)}function OA(t,e){let n,r=t.transactionQueueTree_;for(n=Te(e);n!==null&&Io(r)===void 0;)r=fm(r,n),e=Qe(e),n=Te(e);return r}function DA(t,e){const n=[];return MA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function MA(t,e,n){const r=Io(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);oh(e,i=>{MA(t,i,n)})}function ah(t,e){const n=Io(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bA(e,n.length>0?n:void 0)}oh(e,r=>{ah(t,r)})}function a9(t,e){const n=gc(OA(t,e)),r=fm(t.transactionQueueTree_,e);return Vj(r,i=>{_d(t,i)}),_d(t,r),AA(r,i=>{_d(t,i)}),n}function _d(t,e){const n=Io(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bA(e,void 0):n.length=s+1,ms(t.eventQueue_,gc(e),i);for(let o=0;o<r.length;o++)fc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function l9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wn(`Invalid query segment '${n}' in query '${t}'`)}return e}const bw=function(t,e){const n=u9(t),r=n.namespace;n.domain==="firebase.com"&&as(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&as("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VB();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new QB(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Xe(n.pathString)}},u9=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=c9(t.substring(u,h)));const p=l9(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:KC(this._path)}get ref(){return new bo(this._repo,this._path)}get _queryIdentifier(){const e=lw(this._queryParams),n=Jg(e);return n==="{}"?"default":n}get _queryObject(){return lw(this._queryParams)}isEqual(e){if(e=hr(e),!(e instanceof _m))return!1;const n=this._repo===e._repo,r=QC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+T6(this._path)}}class bo extends _m{constructor(e,n){super(e,n,new rm,!1)}get parent(){const e=YC(this._path);return e===null?null:new bo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Sj(bo);Rj(bo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h9="FIREBASE_DATABASE_EMULATOR_HOST",Kf={};let d9=!1;function f9(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||as("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bw(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[h9]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=bw(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Lf(Lf.OWNER):new YB(t.name,t.options,e);zj("Invalid Firebase Database URL",o),ye(o.path)||as("Database URL must point to the root of a Firebase Database (not including a child path).");const h=g9(a,t,u,new GB(t.name,n));return new m9(h,t)}function p9(t,e){const n=Kf[e];(!n||n[t.key]!==t)&&as(`Database ${e}(${t.repoInfo_}) has already been deleted.`),i9(t),delete n[t.key]}function g9(t,e,n,r){let i=Kf[e.name];i||(i={},Kf[e.name]=i);let s=i[t.toURLString()];return s&&as("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xj(t,d9,n,r),i[t.toURLString()]=s,s}class m9{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bo(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(p9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&as("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(t){MB(Ai),gn(new on("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return f9(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Mt(zv,qv,t),Mt(zv,qv,"esm2017")}kr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_9();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="firebasestorage.googleapis.com",y9="storageBucket",v9=2*60*1e3,w9=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends kn{constructor(e,n,r=0){super(yd(e),`Firebase Storage: ${n} (${yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var cr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(cr||(cr={}));function yd(t){return"storage/"+t}function E9(){const t="An unknown error occurred, please check the error payload for server response.";return new fr(cr.UNKNOWN,t)}function T9(){return new fr(cr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function I9(){return new fr(cr.CANCELED,"User canceled the upload/download.")}function b9(t){return new fr(cr.INVALID_URL,"Invalid URL '"+t+"'.")}function C9(t){return new fr(cr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Cw(t){return new fr(cr.INVALID_ARGUMENT,t)}function LA(){return new fr(cr.APP_DELETED,"The Firebase app was deleted.")}function A9(t){return new fr(cr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Fn.makeFromUrl(e,n)}catch{return new Fn(e,"")}if(r.path==="")return r;throw C9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},w=n===xA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",R=new RegExp(`^https?://${w}/${i}/${C}`,"i"),k=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<k.length;P++){const B=k[P],H=B.regex.exec(e);if(H){const oe=H[B.indices.bucket];let pe=H[B.indices.path];pe||(pe=""),r=new Fn(oe,pe),B.postModify(r);break}}if(r==null)throw b9(e);return r}}class S9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...C){l||(l=!0,e.apply(null,C))}function h(C){i=setTimeout(()=>{i=null,t(m,c())},C)}function p(){s&&clearTimeout(s)}function m(C,...R){if(l){p();return}if(C){p(),u.call(null,C,...R);return}if(c()||o){p(),u.call(null,C,...R);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let y=!1;function w(C){y||(y=!0,p(),!l&&(i!==null?(C||(a=2),clearTimeout(i),h(0)):C||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function P9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k9(t){return t!==void 0}function Aw(t,e,n,r){if(r<e)throw Cw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cw(`Invalid value for '${t}'. Expected ${n} or less.`)}function N9(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xl||(Xl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D9{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Kc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xl.NO_ERROR,c=s.getStatus();if(!a||O9(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Xl.ABORT;r(!1,new Kc(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Kc(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());k9(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=E9();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?LA():I9();o(c)}else{const c=T9();o(c)}};this.canceled_?n(!1,new Kc(!1,null,!0)):this.backoffId_=R9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function M9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function x9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function F9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $9(t,e,n,r,i,s,o=!0){const a=N9(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return L9(l,e),M9(l,n),x9(l,s),F9(l,r),new D9(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this._service=e,n instanceof Fn?this._location=n:this._location=Fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zl(e,n)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U9(this._location.path)}get storage(){return this._service}get parent(){const e=V9(this._location.path);if(e===null)return null;const n=new Fn(this._location.bucket,e);return new Zl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A9(e)}}function Sw(t,e){const n=e==null?void 0:e[y9];return n==null?null:Fn.makeFromBucketSpec(n,t)}class B9{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=xA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v9,this._maxUploadRetryTime=w9,this._requests=new Set,i!=null?this._bucket=Fn.makeFromBucketSpec(i,this._host):this._bucket=Sw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=Sw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Aw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Aw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new S9(LA());{const o=$9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rw="@firebase/storage",Pw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j9="storage";function H9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new B9(n,r,i,e,Ai)}function W9(){gn(new on(j9,H9,"PUBLIC").setMultipleInstances(!0)),Mt(Rw,Pw,""),Mt(Rw,Pw,"esm2017")}W9();const vd=new WeakMap;function FA(t,e){return vd.has(e)||vd.set(e,t||{f:{},r:{},s:{},u:{}}),vd.get(e)}function z9(t,e,n,r){if(!t)return n;const[i,s]=$A(t);if(!i)return n;const o=FA(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function q9(t,e,n,r){if(!t)return;const[i,s]=$A(t);if(!i)return;const o=FA(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(Zn),a}function $A(t){return IB(t)||bB(t)?["f",t.path]:CB(t)?["r",t.toString()]:AB(t)?["s",t.toString()]:[]}const wd=new WeakMap;function K9(t,e,n){const r=uc();wd.has(r)||wd.set(r,new Map);const i=wd.get(r),s=q9(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):Zn}const G9={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Gf(t,e,n,r){if(!EB(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof sn||y instanceof nb)h[m]=y;else if(Qg(y)){const w=l+m;h[m]=w in n?c[m]:y.path,p[w]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let w=0;w<y.length;w++){const C=y[w];C&&C.path in s&&(h[m][w]=s[C.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else ps(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const ym={reset:!1,wait:!0,maxRefDepth:2,converter:G9,snapshotOptions:{serverTimestamps:"estimate"}};function eu(t){for(const e in t)t[e].unsub()}function Yf(t,e,n,r,i,s,o,a,c){const[l,u]=Gf(r.data(t.snapshotOptions),Yg(e,n),i,t);s.set(e,n,l),Qf(t,e,n,i,u,s,o,a,c)}function Y9({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=Zn;return a.once?cb(t).then(u=>{u.exists()?Yf(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=Ug(t,u=>{u.exists()?Yf(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),eu(c)}}function Qf(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(w=>l.indexOf(w)<0).forEach(w=>{r[w].unsub(),delete r[w]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(w){w in m&&++h>=p&&a(n)}l.forEach(w=>{const C=r[w],R=i[w],N=`${n}.${w}`;if(m[N]=!0,C)if(C.path!==R.path)C.unsub();else return;r[w]={data:()=>Yg(e,N),unsub:Y9({ref:R,target:e,path:N,depth:o,ops:s,resolve:y.bind(null,N),reject:c},t),path:R.path}})}function Q9(t,e,n,r,i,s){const o=Object.assign({},ym,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=Ht(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,w=Zn;const C=[],R={added:({newIndex:k,doc:P})=>{C.splice(k,0,Object.create(null));const B=C[k],[H,oe]=Gf(P.data(c),void 0,B,o);n.add(kt(p),k,H),Qf(o,p,`${h}.${k}`,B,oe,n,0,r.bind(null,P),i)},modified:({oldIndex:k,newIndex:P,doc:B})=>{const H=kt(p),oe=C[k],pe=H[k],[He,be]=Gf(B.data(c),pe,oe,o);C.splice(P,0,oe),n.remove(H,k),n.add(H,P,He),Qf(o,p,`${h}.${P}`,oe,be,n,0,r,i)},removed:({oldIndex:k})=>{const P=kt(p);n.remove(P,k),eu(C.splice(k,1)[0])}};function N(k){const P=k.docChanges(a);if(!y&&P.length){y=!0;let B=0;const H=P.length,oe=Object.create(null);for(let pe=0;pe<H;pe++)oe[P[pe].doc.id]=!0;r=pe=>{pe&&pe.id in oe&&++B>=H&&(l&&(n.set(t,h,kt(p)),p=t),m(kt(p)),r=Zn)}}P.forEach(B=>{R[B.type](B)}),P.length||(l&&(n.set(t,h,kt(p)),p=t),r(kt(p)))}return u?A$(e).then(N).catch(i):w=Ug(e,N,i),k=>{if(w(),k){const P=typeof k=="function"?k():[];n.set(t,h,P)}C.forEach(eu)}}function J9(t,e,n,r,i,s){const o=Object.assign({},ym,s),a="value",c=Object.create(null);r=SB(r,()=>Yg(t,a));let l=Zn;function u(h){h.exists()?Yf(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?cb(e).then(u).catch(i):l=Ug(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}eu(c)}}const kw=Symbol();function X9(t,e){let n=Zn;const r=Object.assign({},ym,e),i=kt(t),s=r.target||Ht();PB()&&(r.once=!0);const o=z9(i,r.ssrKey,kw,uc()),a=o!==kw;a&&(s.value=o);let c=!a;const l=Ht(!1),u=Ht(),h=g0(),p=Zw();let m=Zn;function y(){let R=kt(t);const N=new Promise((k,P)=>{if(n(r.reset),!R)return n=Zn,k(null);l.value=c,c=!0,R.converter||(R=R.withConverter(r.converter)),n=(Qg(R)?J9:Q9)(s,R,Z9,k,P,r)}).catch(k=>(h.value===N&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===N&&(l.value=!1)});h.value=N}let w=Zn;It(t)&&(w=ci(t,y)),y(),i&&(m=K9(h.value,i,r.ssrKey)),z0()&&k0(()=>h.value),p&&IP(C);function C(R=r.reset){w(),m(),n(R)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>C}})}const Z9={set:(t,e,n)=>vB(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function VA(t,e){return X9(t,e)}function e3(t){return(e,n)=>{const r=kB(e,n).run(()=>Ht(t));TC.set(e,r),DB(r,e)}}function tH(t){return yB?yC(uc(t)):null}function t3(t,{firebaseApp:e,modules:n=[]}){t.provide(EC,e);for(const r of n)r(e,t)}const n3={key:0,class:"userData"},r3=lr({__name:"Scanner",setup(t){const e=Ht();function n(r){const i=VA(ZI(hb,`codes/${r}`),{once:!0});e.value=zt(()=>{var s;return(s=i.value)==null?void 0:s.user})}return(r,i)=>(dn(),Or(Cn,null,[qt(KV,{"on-code-found":n}),e.value?(dn(),Or("div",n3,EP(e.value.email),1)):W0("",!0)],64))}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vm=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i3=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},s3=(t,e,n)=>{e.constructor.createProperty(n,t)};function Ur(t){return(e,n)=>n!==void 0?s3(t,e,n):i3(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function UA(t){return Ur({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const BA=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jA(t,e){return BA({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ed;const o3=((Ed=window.HTMLSlotElement)===null||Ed===void 0?void 0:Ed.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function nH(t){const{slot:e,selector:n}=t??{};return BA({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?o3(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ol=window,wm=ol.ShadowRoot&&(ol.ShadyCSS===void 0||ol.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Em=Symbol(),Nw=new WeakMap;let HA=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Em)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(wm&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Nw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Nw.set(n,e))}return e}toString(){return this.cssText}};const a3=t=>new HA(typeof t=="string"?t:t+"",void 0,Em),ch=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new HA(n,t,Em)},c3=(t,e)=>{wm?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=ol.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},Ow=wm?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return a3(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Td;const tu=window,Dw=tu.trustedTypes,l3=Dw?Dw.emptyScript:"",Mw=tu.reactiveElementPolyfillSupport,Jf={toAttribute(t,e){switch(e){case Boolean:t=t?l3:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},WA=(t,e)=>e!==t&&(e==e||t==t),Id={attribute:!0,type:String,converter:Jf,reflect:!1,hasChanged:WA},Xf="finalized";let Cs=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Id){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Id}static finalize(){if(this.hasOwnProperty(Xf))return!1;this[Xf]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Ow(i))}else e!==void 0&&n.push(Ow(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return c3(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Id){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Jf).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Jf;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||WA)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Cs[Xf]=!0,Cs.elementProperties=new Map,Cs.elementStyles=[],Cs.shadowRootOptions={mode:"open"},Mw==null||Mw({ReactiveElement:Cs}),((Td=tu.reactiveElementVersions)!==null&&Td!==void 0?Td:tu.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bd;const nu=window,ao=nu.trustedTypes,xw=ao?ao.createPolicy("lit-html",{createHTML:t=>t}):void 0,Zf="$lit$",ei=`lit$${(Math.random()+"").slice(9)}$`,zA="?"+ei,u3=`<${zA}>`,hs=document,Ha=()=>hs.createComment(""),Wa=t=>t===null||typeof t!="object"&&typeof t!="function",qA=Array.isArray,h3=t=>qA(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Cd=`[ 	
\f\r]`,Uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lw=/-->/g,Fw=/>/g,Di=RegExp(`>|${Cd}(?:([^\\s"'>=/]+)(${Cd}*=${Cd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$w=/'/g,Vw=/"/g,KA=/^(?:script|style|textarea|title)$/i,d3=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ir=d3(1),ds=Symbol.for("lit-noChange"),ut=Symbol.for("lit-nothing"),Uw=new WeakMap,zi=hs.createTreeWalker(hs,129,null,!1);function GA(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xw!==void 0?xw.createHTML(e):e}const f3=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=Uo;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===Uo?u[1]==="!--"?o=Lw:u[1]!==void 0?o=Fw:u[2]!==void 0?(KA.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Di):u[3]!==void 0&&(o=Di):o===Di?u[0]===">"?(o=i??Uo,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Di:u[3]==='"'?Vw:$w):o===Vw||o===$w?o=Di:o===Lw||o===Fw?o=Uo:(o=Di,i=void 0);const m=o===Di&&t[a+1].startsWith("/>")?" ":"";s+=o===Uo?c+u3:h>=0?(r.push(l),c.slice(0,h)+Zf+c.slice(h)+ei+m):c+ei+(h===-2?(r.push(void 0),a):m)}return[GA(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class za{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=f3(e,n);if(this.el=za.createElement(l,r),zi.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=zi.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(Zf)||p.startsWith(ei)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+Zf).split(ei),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:w[2],strings:y,ctor:w[1]==="."?g3:w[1]==="?"?_3:w[1]==="@"?y3:lh})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(KA.test(i.tagName)){const h=i.textContent.split(ei),p=h.length-1;if(p>0){i.textContent=ao?ao.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],Ha()),zi.nextNode(),c.push({type:2,index:++s});i.append(h[p],Ha())}}}else if(i.nodeType===8)if(i.data===zA)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(ei,h+1))!==-1;)c.push({type:7,index:s}),h+=ei.length-1}s++}}static createElement(e,n){const r=hs.createElement("template");return r.innerHTML=e,r}}function co(t,e,n=t,r){var i,s,o,a;if(e===ds)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=Wa(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=co(t,c._$AS(t,e.values),c,r)),e}class p3{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:hs).importNode(r,!0);zi.currentNode=s;let o=zi.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new mc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new v3(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=zi.nextNode(),a++)}return zi.currentNode=hs,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class mc{constructor(e,n,r,i){var s;this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=co(this,e,n),Wa(e)?e===ut||e==null||e===""?(this._$AH!==ut&&this._$AR(),this._$AH=ut):e!==this._$AH&&e!==ds&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):h3(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ut&&Wa(this._$AH)?this._$AA.nextSibling.data=e:this.$(hs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=za.createElement(GA(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new p3(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=Uw.get(e.strings);return n===void 0&&Uw.set(e.strings,n=new za(e)),n}T(e){qA(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new mc(this.k(Ha()),this.k(Ha()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class lh{constructor(e,n,r,i,s){this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ut}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=co(this,e,n,0),o=!Wa(e)||e!==this._$AH&&e!==ds,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=co(this,a[r+c],n,c),l===ds&&(l=this._$AH[c]),o||(o=!Wa(l)||l!==this._$AH[c]),l===ut?e=ut:e!==ut&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class g3 extends lh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ut?void 0:e}}const m3=ao?ao.emptyScript:"";class _3 extends lh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ut?this.element.setAttribute(this.name,m3):this.element.removeAttribute(this.name)}}class y3 extends lh{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=co(this,e,n,0))!==null&&r!==void 0?r:ut)===ds)return;const i=this._$AH,s=e===ut&&i!==ut||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ut&&(i===ut||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class v3{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){co(this,e)}}const Bw=nu.litHtmlPolyfillSupport;Bw==null||Bw(za,mc),((bd=nu.litHtmlVersions)!==null&&bd!==void 0?bd:nu.litHtmlVersions=[]).push("2.8.0");const w3=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new mc(e.insertBefore(Ha(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ad,Sd;class Xi extends Cs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=w3(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ds}}Xi.finalized=!0,Xi._$litElement$=!0,(Ad=globalThis.litElementHydrateSupport)===null||Ad===void 0||Ad.call(globalThis,{LitElement:Xi});const jw=globalThis.litElementPolyfillSupport;jw==null||jw({LitElement:Xi});((Sd=globalThis.litElementVersions)!==null&&Sd!==void 0?Sd:globalThis.litElementVersions=[]).push("3.3.3");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const E3=ch`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const YA=Symbol("attachableController");let al;al=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[YA])==null||e.hostConnected()});class QA{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[YA]=this,al==null||al.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T3=["focusin","focusout","pointerdown"];class Tm extends Xi{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new QA(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[Hw]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Hw]=!0}}onControlChange(e,n){for(const r of T3)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}an([Ur({type:Boolean,reflect:!0})],Tm.prototype,"visible",void 0);an([Ur({type:Boolean,reflect:!0})],Tm.prototype,"inward",void 0);const Hw=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const I3=ch`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ep=class extends Tm{};ep.styles=[I3];ep=an([vm("md-focus-ring")],ep);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},C3=t=>(...e)=>({_$litDirective$:t,values:e});class A3{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tp=C3(class extends A3{constructor(t){var e;if(super(t),t.type!==b3.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return ds}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S3={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const R3=450,Ww=225,P3=.2,k3=10,N3=75,O3=.35,D3="::after",M3="forwards";var nn;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(nn||(nn={}));const x3=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],L3=150;class _c extends Xi{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=nn.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new QA(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Ir`<div class="surface ${tp(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==nn.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===nn.HOLDING){this.state=nn.WAITING_FOR_CLICK;return}if(this.state===nn.TOUCH_DELAY){this.state=nn.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=nn.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=nn.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,L3)}),this.state===nn.TOUCH_DELAY&&(this.state=nn.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===nn.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===nn.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(O3*r,N3),s=Math.floor(r*P3),a=Math.sqrt(n**2+e**2)+k3;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:D3,duration:R3,easing:S3.STANDARD,fill:M3})}async endPressAnimation(){this.state=nn.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Ww){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,Ww-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of x3)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}an([Ur({type:Boolean,reflect:!0})],_c.prototype,"disabled",void 0);an([UA()],_c.prototype,"hovered",void 0);an([UA()],_c.prototype,"pressed",void 0);an([jA(".surface")],_c.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const F3=ch`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends _c{};np.styles=[F3];np=an([vm("md-ripple")],np);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const JA=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];JA.map(XA);function XA(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $3(t){for(const e of JA)t.createProperty(e,{attribute:XA(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function aH(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function V3(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function U3(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!B3(t)}function B3(t){const e=rp;return e&&(t.preventDefault(),t.stopImmediatePropagation()),j3(),e}let rp=!1;async function j3(){rp=!0,await null,rp=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class pr extends Xi{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;U3(e)&&((n=this.button)==null||n.focus(),this.button!=null&&V3(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return Ir`
      <button
        id="switch"
        type="button"
        class="switch ${tp(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||ut}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Ir`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${tp(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Ir``}
        </span>
      </span>
    `}renderIcons(){return Ir`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Ir``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Ir`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return Ir`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return Ir`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}$3(pr);pr.shadowRootOptions={mode:"open",delegatesFocus:!0};pr.formAssociated=!0;an([Ur({type:Boolean,reflect:!0})],pr.prototype,"disabled",void 0);an([Ur({type:Boolean})],pr.prototype,"selected",void 0);an([Ur({type:Boolean})],pr.prototype,"icons",void 0);an([Ur({type:Boolean,attribute:"show-only-selected-icon"})],pr.prototype,"showOnlySelectedIcon",void 0);an([jA("button")],pr.prototype,"button",void 0);an([Ur()],pr.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const H3=ch`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends pr{};ip.styles=[H3,E3];ip=an([vm("md-switch")],ip);const W3={class:"section"},z3=lr({__name:"HomeView",setup(t){var s;const e=NB(),n=VA(ZI(hb,`users/${(s=e.value)==null?void 0:s.uid}`)),r=zt(()=>{var o;return((o=n.value)==null?void 0:o.role)==="scanner"}),i=zt(()=>{var o;return(o=n.value)==null?void 0:o.actualCode});return(o,a)=>(dn(),Or("main",null,[ti("div",W3,[!r.value&&i.value?(dn(),ya(DO,{key:0,codeString:i.value},null,8,["codeString"])):(dn(),ya(r3,{key:1}))])]))}});const ZA=FN({history:eN("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:z3},{path:"/login",name:"login",component:()=>jN(()=>import("./LoginView-f43295ca.js"),["assets/LoginView-f43295ca.js","assets/LoginView-20aa7505.css"])}]});ZA.beforeEach(async t=>{if(t.meta.requiresAuth&&!await OB())return{path:"/login",query:{redirect:t.fullPath}}});const uh=Ok(VN);uh.use(Lk());uh.use(ZA);uh.use(t3,{firebaseApp:ub,modules:[e3()]});uh.mount("#app");export{ut as A,J3 as B,Ep as C,w3 as D,S3 as E,eH as F,Jr as G,ya as H,X3 as I,Z3 as J,ti as K,NB as L,kt as M,EP as N,ds as T,an as _,ch as a,C3 as b,A3 as c,b3 as d,vm as e,aH as f,U3 as g,V3 as h,jA as i,lr as j,Ht as k,nH as l,q3 as m,Ur as n,tp as o,dn as p,Or as q,$3 as r,Xi as s,UA as t,tH as u,qt as v,C0 as w,Ir as x,kc as y,Q1 as z};
