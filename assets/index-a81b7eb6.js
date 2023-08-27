(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Je={},Us=[],Yn=()=>{},h1=()=>!1,d1=/^on[^a-z]/,Lu=t=>d1.test(t),jp=t=>t.startsWith("onUpdate:"),kt=Object.assign,Hp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f1=Object.prototype.hasOwnProperty,Ne=(t,e)=>f1.call(t,e),fe=Array.isArray,Bs=t=>Vu(t)==="[object Map]",x0=t=>Vu(t)==="[object Set]",ye=t=>typeof t=="function",Nt=t=>typeof t=="string",Wp=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",D0=t=>it(t)&&ye(t.then)&&ye(t.catch),M0=Object.prototype.toString,Vu=t=>M0.call(t),p1=t=>Vu(t).slice(8,-1),L0=t=>Vu(t)==="[object Object]",zp=t=>Nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vl=Bp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$u=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},m1=/-(\w)/g,Xs=$u(t=>t.replace(m1,(e,n)=>n?n.toUpperCase():"")),g1=/\B([A-Z])/g,bo=$u(t=>t.replace(g1,"-$1").toLowerCase()),V0=$u(t=>t.charAt(0).toUpperCase()+t.slice(1)),rd=$u(t=>t?`on${V0(t)}`:""),Na=(t,e)=>!Object.is(t,e),wl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let B_;const uf=()=>B_||(B_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qp(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Nt(r)?w1(r):qp(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Nt(t))return t;if(it(t))return t}}const _1=/;(?![^(]*\))/g,y1=/:([^]+)/,v1=/\/\*[^]*?\*\//g;function w1(t){const e={};return t.replace(v1,"").split(_1).forEach(n=>{if(n){const r=n.split(y1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fu(t){let e="";if(Nt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Fu(t[n]);r&&(e+=r+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T1=Bp(E1);function $0(t){return!!t||t===""}const j_=t=>Nt(t)?t:t==null?"":fe(t)||it(t)&&(t.toString===M0||!ye(t.toString))?JSON.stringify(t,F0,2):String(t),F0=(t,e)=>e&&e.__v_isRef?F0(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:x0(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!fe(e)&&!L0(e)?String(e):e;let bn;class U0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bn;try{return bn=this,e()}finally{bn=n}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function B0(t){return new U0(t)}function I1(t,e=bn){e&&e.active&&e.effects.push(t)}function j0(){return bn}function b1(t){bn&&bn.cleanups.push(t)}const Kp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},H0=t=>(t.w&Ti)>0,W0=t=>(t.n&Ti)>0,A1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ti},C1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];H0(i)&&!W0(i)?i.delete(t):e[n++]=i,i.w&=~Ti,i.n&=~Ti}e.length=n}},$l=new WeakMap;let ra=0,Ti=1;const hf=30;let Hn;const es=Symbol(""),df=Symbol("");class Gp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,I1(this,r)}run(){if(!this.active)return this.fn();let e=Hn,n=pi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Hn,Hn=this,pi=!0,Ti=1<<++ra,ra<=hf?A1(this):H_(this),this.fn()}finally{ra<=hf&&C1(this),Ti=1<<--ra,Hn=this.parent,pi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hn===this?this.deferStop=!0:this.active&&(H_(this),this.onStop&&this.onStop(),this.active=!1)}}function H_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pi=!0;const z0=[];function Ao(){z0.push(pi),pi=!1}function Co(){const t=z0.pop();pi=t===void 0?!0:t}function yn(t,e,n){if(pi&&Hn){let r=$l.get(t);r||$l.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Kp()),q0(i)}}function q0(t,e){let n=!1;ra<=hf?W0(t)||(t.n|=Ti,n=!H0(t)):n=!t.has(Hn),n&&(t.add(Hn),Hn.deps.push(t))}function Hr(t,e,n,r,i,s){const o=$l.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&fe(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":fe(t)?zp(n)&&a.push(o.get("length")):(a.push(o.get(es)),Bs(t)&&a.push(o.get(df)));break;case"delete":fe(t)||(a.push(o.get(es)),Bs(t)&&a.push(o.get(df)));break;case"set":Bs(t)&&a.push(o.get(es));break}if(a.length===1)a[0]&&ff(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ff(Kp(c))}}function ff(t,e){const n=fe(t)?t:[...t];for(const r of n)r.computed&&W_(r);for(const r of n)r.computed||W_(r)}function W_(t,e){(t!==Hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function R1(t,e){var n;return(n=$l.get(t))==null?void 0:n.get(e)}const S1=Bp("__proto__,__v_isRef,__isVue"),K0=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wp)),P1=Yp(),k1=Yp(!1,!0),N1=Yp(!0),z_=O1();function O1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Le(this);for(let s=0,o=this.length;s<o;s++)yn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ao();const r=Le(this)[e].apply(this,n);return Co(),r}}),t}function x1(t){const e=Le(this);return yn(e,"has",t),e.hasOwnProperty(t)}function Yp(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Y1:X0:e?J0:Q0).get(r))return r;const o=fe(r);if(!t){if(o&&Ne(z_,i))return Reflect.get(z_,i,s);if(i==="hasOwnProperty")return x1}const a=Reflect.get(r,i,s);return(Wp(i)?K0.has(i):S1(i))||(t||yn(r,"get",i),e)?a:Pt(a)?o&&zp(i)?a:a.value:it(a)?t?eE(a):Bu(a):a}}const D1=G0(),M1=G0(!0);function G0(t=!1){return function(n,r,i,s){let o=n[r];if(Zs(o)&&Pt(o)&&!Pt(i))return!1;if(!t&&(!Fl(i)&&!Zs(i)&&(o=Le(o),i=Le(i)),!fe(n)&&Pt(o)&&!Pt(i)))return o.value=i,!0;const a=fe(n)&&zp(r)?Number(r)<n.length:Ne(n,r),c=Reflect.set(n,r,i,s);return n===Le(s)&&(a?Na(i,o)&&Hr(n,"set",r,i):Hr(n,"add",r,i)),c}}function L1(t,e){const n=Ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Hr(t,"delete",e,void 0),r}function V1(t,e){const n=Reflect.has(t,e);return(!Wp(e)||!K0.has(e))&&yn(t,"has",e),n}function $1(t){return yn(t,"iterate",fe(t)?"length":es),Reflect.ownKeys(t)}const Y0={get:P1,set:D1,deleteProperty:L1,has:V1,ownKeys:$1},F1={get:N1,set(t,e){return!0},deleteProperty(t,e){return!0}},U1=kt({},Y0,{get:k1,set:M1}),Qp=t=>t,Uu=t=>Reflect.getPrototypeOf(t);function Yc(t,e,n=!1,r=!1){t=t.__v_raw;const i=Le(t),s=Le(e);n||(e!==s&&yn(i,"get",e),yn(i,"get",s));const{has:o}=Uu(i),a=r?Qp:n?em:Oa;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Qc(t,e=!1){const n=this.__v_raw,r=Le(n),i=Le(t);return e||(t!==i&&yn(r,"has",t),yn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Jc(t,e=!1){return t=t.__v_raw,!e&&yn(Le(t),"iterate",es),Reflect.get(t,"size",t)}function q_(t){t=Le(t);const e=Le(this);return Uu(e).has.call(e,t)||(e.add(t),Hr(e,"add",t,t)),this}function K_(t,e){e=Le(e);const n=Le(this),{has:r,get:i}=Uu(n);let s=r.call(n,t);s||(t=Le(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Na(e,o)&&Hr(n,"set",t,e):Hr(n,"add",t,e),this}function G_(t){const e=Le(this),{has:n,get:r}=Uu(e);let i=n.call(e,t);i||(t=Le(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Hr(e,"delete",t,void 0),s}function Y_(){const t=Le(this),e=t.size!==0,n=t.clear();return e&&Hr(t,"clear",void 0,void 0),n}function Xc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Le(o),c=e?Qp:t?em:Oa;return!t&&yn(a,"iterate",es),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Zc(t,e,n){return function(...r){const i=this.__v_raw,s=Le(i),o=Bs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Qp:e?em:Oa;return!e&&yn(s,"iterate",c?df:es),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ei(t){return function(...e){return t==="delete"?!1:this}}function B1(){const t={get(s){return Yc(this,s)},get size(){return Jc(this)},has:Qc,add:q_,set:K_,delete:G_,clear:Y_,forEach:Xc(!1,!1)},e={get(s){return Yc(this,s,!1,!0)},get size(){return Jc(this)},has:Qc,add:q_,set:K_,delete:G_,clear:Y_,forEach:Xc(!1,!0)},n={get(s){return Yc(this,s,!0)},get size(){return Jc(this,!0)},has(s){return Qc.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Xc(!0,!1)},r={get(s){return Yc(this,s,!0,!0)},get size(){return Jc(this,!0)},has(s){return Qc.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Xc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Zc(s,!1,!1),n[s]=Zc(s,!0,!1),e[s]=Zc(s,!1,!0),r[s]=Zc(s,!0,!0)}),[t,n,e,r]}const[j1,H1,W1,z1]=B1();function Jp(t,e){const n=e?t?z1:W1:t?H1:j1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ne(n,i)&&i in r?n:r,i,s)}const q1={get:Jp(!1,!1)},K1={get:Jp(!1,!0)},G1={get:Jp(!0,!1)},Q0=new WeakMap,J0=new WeakMap,X0=new WeakMap,Y1=new WeakMap;function Q1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J1(t){return t.__v_skip||!Object.isExtensible(t)?0:Q1(p1(t))}function Bu(t){return Zs(t)?t:Xp(t,!1,Y0,q1,Q0)}function Z0(t){return Xp(t,!1,U1,K1,J0)}function eE(t){return Xp(t,!0,F1,G1,X0)}function Xp(t,e,n,r,i){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=J1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function js(t){return Zs(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function Fl(t){return!!(t&&t.__v_isShallow)}function tE(t){return js(t)||Zs(t)}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function Zp(t){return Vl(t,"__v_skip",!0),t}const Oa=t=>it(t)?Bu(t):t,em=t=>it(t)?eE(t):t;function nE(t){pi&&Hn&&(t=Le(t),q0(t.dep||(t.dep=Kp())))}function rE(t,e){t=Le(t);const n=t.dep;n&&ff(n)}function Pt(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return sE(t,!1)}function iE(t){return sE(t,!0)}function sE(t,e){return Pt(t)?t:new X1(t,e)}class X1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Le(e),this._value=n?e:Oa(e)}get value(){return nE(this),this._value}set value(e){const n=this.__v_isShallow||Fl(e)||Zs(e);e=n?e:Le(e),Na(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Oa(e),rE(this))}}function Mt(t){return Pt(t)?t.value:t}const Z1={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function oE(t){return js(t)?t:new Proxy(t,Z1)}function ek(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=nk(t,n);return e}class tk{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return R1(Le(this._object),this._key)}}function nk(t,e,n){const r=t[e];return Pt(r)?r:new tk(t,e,n)}class rk{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gp(e,()=>{this._dirty||(this._dirty=!0,rE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Le(this);return nE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ik(t,e,n=!1){let r,i;const s=ye(t);return s?(r=t,i=Yn):(r=t.get,i=t.set),new rk(r,i,s||!i,n)}function mi(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ju(s,e,n)}return i}function Qn(t,e,n,r){if(ye(t)){const s=mi(t,e,n,r);return s&&D0(s)&&s.catch(o=>{ju(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Qn(t[s],e,n,r));return i}function ju(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){mi(c,null,10,[t,o,a]);return}}sk(t,n,i,r)}function sk(t,e,n,r=!0){console.error(t)}let xa=!1,pf=!1;const Gt=[];let or=0;const Hs=[];let Dr=null,Wi=0;const aE=Promise.resolve();let tm=null;function cE(t){const e=tm||aE;return t?e.then(this?t.bind(this):t):e}function ok(t){let e=or+1,n=Gt.length;for(;e<n;){const r=e+n>>>1;Da(Gt[r])<t?e=r+1:n=r}return e}function nm(t){(!Gt.length||!Gt.includes(t,xa&&t.allowRecurse?or+1:or))&&(t.id==null?Gt.push(t):Gt.splice(ok(t.id),0,t),lE())}function lE(){!xa&&!pf&&(pf=!0,tm=aE.then(hE))}function ak(t){const e=Gt.indexOf(t);e>or&&Gt.splice(e,1)}function ck(t){fe(t)?Hs.push(...t):(!Dr||!Dr.includes(t,t.allowRecurse?Wi+1:Wi))&&Hs.push(t),lE()}function Q_(t,e=xa?or+1:0){for(;e<Gt.length;e++){const n=Gt[e];n&&n.pre&&(Gt.splice(e,1),e--,n())}}function uE(t){if(Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,Dr){Dr.push(...e);return}for(Dr=e,Dr.sort((n,r)=>Da(n)-Da(r)),Wi=0;Wi<Dr.length;Wi++)Dr[Wi]();Dr=null,Wi=0}}const Da=t=>t.id==null?1/0:t.id,lk=(t,e)=>{const n=Da(t)-Da(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hE(t){pf=!1,xa=!0,Gt.sort(lk);const e=Yn;try{for(or=0;or<Gt.length;or++){const n=Gt[or];n&&n.active!==!1&&mi(n,null,14)}}finally{or=0,Gt.length=0,uE(),xa=!1,tm=null,(Gt.length||Hs.length)&&hE()}}function uk(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Je;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Je;p&&(i=n.map(m=>Nt(m)?m.trim():m)),h&&(i=n.map(lf))}let a,c=r[a=rd(e)]||r[a=rd(Xs(e))];!c&&s&&(c=r[a=rd(bo(e))]),c&&Qn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qn(l,t,6,i)}}function dE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ye(t)){const c=l=>{const u=dE(l,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(it(t)&&r.set(t,null),null):(fe(s)?s.forEach(c=>o[c]=null):kt(o,s),it(t)&&r.set(t,o),o)}function Hu(t,e){return!t||!Lu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,bo(e))||Ne(t,e))}let Jt=null,Wu=null;function Ul(t){const e=Jt;return Jt=t,Wu=t&&t.type.__scopeId||null,e}function D5(t){Wu=t}function M5(){Wu=null}function fE(t,e=Jt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&oy(-1);const s=Ul(e);let o;try{o=t(...i)}finally{Ul(s),r._d&&oy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function id(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:y,inheritAttrs:v}=t;let b,A;const k=Ul(t);try{if(n.shapeFlag&4){const P=i||r;b=sr(u.call(P,P,h,s,m,p,y)),A=c}else{const P=e;b=sr(P.length>1?P(s,{attrs:c,slots:a,emit:l}):P(s,null)),A=e.props?c:hk(c)}}catch(P){ga.length=0,ju(P,t,1),b=Xt(Ii)}let N=b;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:j}=N;P.length&&j&7&&(o&&P.some(jp)&&(A=dk(A,o)),N=eo(N,A))}return n.dirs&&(N=eo(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),b=N,Ul(k),b}const hk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lu(n))&&((e||(e={}))[n]=t[n]);return e},dk=(t,e)=>{const n={};for(const r in t)(!jp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?J_(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Hu(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?J_(r,o,l):!0:!!o;return!1}function J_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Hu(n,s))return!0}return!1}function pk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mk=t=>t.__isSuspense;function gk(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):ck(t)}const el={};function gi(t,e,n){return pE(t,e,n)}function pE(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Je){var a;const c=j0()===((a=Vt)==null?void 0:a.scope)?Vt:null;let l,u=!1,h=!1;if(Pt(t)?(l=()=>t.value,u=Fl(t)):js(t)?(l=()=>t,r=!0):fe(t)?(h=!0,u=t.some(P=>js(P)||Fl(P)),l=()=>t.map(P=>{if(Pt(P))return P.value;if(js(P))return qi(P);if(ye(P))return mi(P,c,2)})):ye(t)?e?l=()=>mi(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Qn(t,c,3,[m])}:l=Yn,e&&r){const P=l;l=()=>qi(P())}let p,m=P=>{p=k.onStop=()=>{mi(P,c,4)}},y;if($a)if(m=Yn,e?n&&Qn(e,c,3,[l(),h?[]:void 0,m]):l(),i==="sync"){const P=aN();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Yn;let v=h?new Array(t.length).fill(el):el;const b=()=>{if(k.active)if(e){const P=k.run();(r||u||(h?P.some((j,W)=>Na(j,v[W])):Na(P,v)))&&(p&&p(),Qn(e,c,3,[P,v===el?void 0:h&&v[0]===el?[]:v,m]),v=P)}else k.run()};b.allowRecurse=!!e;let A;i==="sync"?A=b:i==="post"?A=()=>mn(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),A=()=>nm(b));const k=new Gp(l,A);e?n?b():v=k.run():i==="post"?mn(k.run.bind(k),c&&c.suspense):k.run();const N=()=>{k.stop(),c&&c.scope&&Hp(c.scope.effects,k)};return y&&y.push(N),N}function _k(t,e,n){const r=this.proxy,i=Nt(t)?t.includes(".")?mE(r,t):()=>r[t]:t.bind(r,r);let s;ye(e)?s=e:(s=e.handler,n=e);const o=Vt;to(this);const a=pE(i,s.bind(r),n);return o?to(o):ts(),a}function mE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function qi(t,e){if(!it(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pt(t))qi(t.value,e);else if(fe(t))for(let n=0;n<t.length;n++)qi(t[n],e);else if(x0(t)||Bs(t))t.forEach(n=>{qi(n,e)});else if(L0(t))for(const n in t)qi(t[n],e);return t}function yk(t,e){const n=Jt;if(n===null)return t;const r=Gu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Je]=e[s];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&qi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Fi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ao(),Qn(c,n,8,[t.el,a,t,e]),Co())}}function wr(t,e){return ye(t)?(()=>kt({name:t.name},e,{setup:t}))():t}const pa=t=>!!t.type.__asyncLoader,gE=t=>t.type.__isKeepAlive;function vk(t,e){_E(t,"a",e)}function wk(t,e){_E(t,"da",e)}function _E(t,e,n=Vt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(zu(e,r,n),n){let i=n.parent;for(;i&&i.parent;)gE(i.parent.vnode)&&Ek(r,e,n,i),i=i.parent}}function Ek(t,e,n,r){const i=zu(e,t,r,!0);im(()=>{Hp(r[e],i)},n)}function zu(t,e,n=Vt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ao(),to(n);const a=Qn(e,n,t,o);return ts(),Co(),a});return r?i.unshift(s):i.push(s),s}}const Yr=t=>(e,n=Vt)=>(!$a||t==="sp")&&zu(t,(...r)=>e(...r),n),Tk=Yr("bm"),rm=Yr("m"),Ik=Yr("bu"),bk=Yr("u"),Ak=Yr("bum"),im=Yr("um"),yE=Yr("sp"),Ck=Yr("rtg"),Rk=Yr("rtc");function Sk(t,e=Vt){zu("ec",t,e)}const Pk=Symbol.for("v-ndc");function vE(t,e,n={},r,i){if(Jt.isCE||Jt.parent&&pa(Jt.parent)&&Jt.parent.isCE)return e!=="default"&&(n.name=e),Xt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),hn();const o=s&&wE(s(n)),a=La(On,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function wE(t){return t.some(e=>Hl(e)?!(e.type===Ii||e.type===On&&!wE(e.children)):!0)?t:null}const mf=t=>t?OE(t)?Gu(t)||t.proxy:mf(t.parent):null,ma=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mf(t.parent),$root:t=>mf(t.root),$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>nm(t.update)),$nextTick:t=>t.n||(t.n=cE.bind(t.proxy)),$watch:t=>_k.bind(t)}),sd=(t,e)=>t!==Je&&!t.__isScriptSetup&&Ne(t,e),kk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(sd(r,e))return o[e]=1,r[e];if(i!==Je&&Ne(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Ne(l,e))return o[e]=3,s[e];if(n!==Je&&Ne(n,e))return o[e]=4,n[e];gf&&(o[e]=0)}}const u=ma[e];let h,p;if(u)return e==="$attrs"&&yn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Je&&Ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return sd(i,e)?(i[e]=n,!0):r!==Je&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Je&&Ne(t,o)||sd(e,o)||(a=s[0])&&Ne(a,o)||Ne(r,o)||Ne(ma,o)||Ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function X_(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gf=!0;function Nk(t){const e=sm(t),n=t.proxy,r=t.ctx;gf=!1,e.beforeCreate&&Z_(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:v,deactivated:b,beforeDestroy:A,beforeUnmount:k,destroyed:N,unmounted:P,render:j,renderTracked:W,renderTriggered:oe,errorCaptured:ge,serverPrefetch:ze,expose:Re,inheritAttrs:ct,components:Dt,directives:Ge,filters:Cr}=e;if(l&&Ok(l,r,null),o)for(const Ve in o){const Te=o[Ve];ye(Te)&&(r[Ve]=Te.bind(n))}if(i){const Ve=i.call(n,n);it(Ve)&&(t.data=Bu(Ve))}if(gf=!0,s)for(const Ve in s){const Te=s[Ve],Tn=ye(Te)?Te.bind(n,n):ye(Te.get)?Te.get.bind(n,n):Yn,wt=!ye(Te)&&ye(Te.set)?Te.set.bind(n):Yn,Et=Yt({get:Tn,set:wt});Object.defineProperty(r,Ve,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Tt=>Et.value=Tt})}if(a)for(const Ve in a)EE(a[Ve],r,n,Ve);if(c){const Ve=ye(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Te=>{El(Te,Ve[Te])})}u&&Z_(u,t,"c");function je(Ve,Te){fe(Te)?Te.forEach(Tn=>Ve(Tn.bind(n))):Te&&Ve(Te.bind(n))}if(je(Tk,h),je(rm,p),je(Ik,m),je(bk,y),je(vk,v),je(wk,b),je(Sk,ge),je(Rk,W),je(Ck,oe),je(Ak,k),je(im,P),je(yE,ze),fe(Re))if(Re.length){const Ve=t.exposed||(t.exposed={});Re.forEach(Te=>{Object.defineProperty(Ve,Te,{get:()=>n[Te],set:Tn=>n[Te]=Tn})})}else t.exposed||(t.exposed={});j&&t.render===Yn&&(t.render=j),ct!=null&&(t.inheritAttrs=ct),Dt&&(t.components=Dt),Ge&&(t.directives=Ge)}function Ok(t,e,n=Yn){fe(t)&&(t=_f(t));for(const r in t){const i=t[r];let s;it(i)?"default"in i?s=Jn(i.from||r,i.default,!0):s=Jn(i.from||r):s=Jn(i),Pt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Z_(t,e,n){Qn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function EE(t,e,n,r){const i=r.includes(".")?mE(n,r):()=>n[r];if(Nt(t)){const s=e[t];ye(s)&&gi(i,s)}else if(ye(t))gi(i,t.bind(n));else if(it(t))if(fe(t))t.forEach(s=>EE(s,e,n,r));else{const s=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(s)&&gi(i,s,t)}}function sm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Bl(c,l,o,!0)),Bl(c,e,o)),it(e)&&s.set(e,c),c}function Bl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Bl(t,s,n,!0),i&&i.forEach(o=>Bl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xk={data:ey,props:ty,emits:ty,methods:ia,computed:ia,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:ia,directives:ia,watch:Mk,provide:ey,inject:Dk};function ey(t,e){return e?t?function(){return kt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function Dk(t,e){return ia(_f(t),_f(e))}function _f(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function cn(t,e){return t?[...new Set([].concat(t,e))]:e}function ia(t,e){return t?kt(Object.create(null),t,e):e}function ty(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:kt(Object.create(null),X_(t),X_(e??{})):e}function Mk(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=cn(t[r],e[r]);return n}function TE(){return{app:null,config:{isNativeTag:h1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lk=0;function Vk(t,e){return function(r,i=null){ye(r)||(r=kt({},r)),i!=null&&!it(i)&&(i=null);const s=TE(),o=new Set;let a=!1;const c=s.app={_uid:Lk++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:cN,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ye(l.install)?(o.add(l),l.install(c,...u)):ye(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=Xt(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Gu(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){jl=c;try{return l()}finally{jl=null}}};return c}}let jl=null;function El(t,e){if(Vt){let n=Vt.provides;const r=Vt.parent&&Vt.parent.provides;r===n&&(n=Vt.provides=Object.create(r)),n[t]=e}}function Jn(t,e,n=!1){const r=Vt||Jt;if(r||jl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function $k(t,e,n,r=!1){const i={},s={};Vl(s,Ku,1),t.propsDefaults=Object.create(null),IE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Z0(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Fk(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Le(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Hu(t.emitsOptions,p))continue;const m=e[p];if(c)if(Ne(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const y=Xs(p);i[y]=yf(c,a,y,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{IE(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Ne(e,h)&&((u=bo(h))===h||!Ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=yf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ne(e,h))&&(delete s[h],l=!0)}l&&Hr(t,"set","$attrs")}function IE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vl(c))continue;const l=e[c];let u;i&&Ne(i,u=Xs(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Le(n),l=a||Je;for(let u=0;u<s.length;u++){const h=s[u];n[h]=yf(i,c,h,l[h],t,!Ne(l,h))}}return o}function yf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(to(i),r=l[n]=c.call(null,e),ts())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===bo(n))&&(r=!0))}return r}function bE(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ye(t)){const u=h=>{c=!0;const[p,m]=bE(h,e,!0);kt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return it(t)&&r.set(t,Us),Us;if(fe(s))for(let u=0;u<s.length;u++){const h=Xs(s[u]);ny(h)&&(o[h]=Je)}else if(s)for(const u in s){const h=Xs(u);if(ny(h)){const p=s[u],m=o[h]=fe(p)||ye(p)?{type:p}:kt({},p);if(m){const y=sy(Boolean,m.type),v=sy(String,m.type);m[0]=y>-1,m[1]=v<0||y<v,(y>-1||Ne(m,"default"))&&a.push(h)}}}const l=[o,a];return it(t)&&r.set(t,l),l}function ny(t){return t[0]!=="$"}function ry(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function iy(t,e){return ry(t)===ry(e)}function sy(t,e){return fe(e)?e.findIndex(n=>iy(n,t)):ye(e)&&iy(e,t)?0:-1}const AE=t=>t[0]==="_"||t==="$stable",om=t=>fe(t)?t.map(sr):[sr(t)],Uk=(t,e,n)=>{if(e._n)return e;const r=fE((...i)=>om(e(...i)),n);return r._c=!1,r},CE=(t,e,n)=>{const r=t._ctx;for(const i in t){if(AE(i))continue;const s=t[i];if(ye(s))e[i]=Uk(i,s,r);else if(s!=null){const o=om(s);e[i]=()=>o}}},RE=(t,e)=>{const n=om(e);t.slots.default=()=>n},Bk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Le(e),Vl(e,"_",n)):CE(e,t.slots={})}else t.slots={},e&&RE(t,e);Vl(t.slots,Ku,1)},jk=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(kt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,CE(e,i)),o=e}else e&&(RE(t,e),o={default:1});if(s)for(const a in i)!AE(a)&&!(a in o)&&delete i[a]};function vf(t,e,n,r,i=!1){if(fe(t)){t.forEach((p,m)=>vf(p,e&&(fe(e)?e[m]:e),n,r,i));return}if(pa(r)&&!i)return;const s=r.shapeFlag&4?Gu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Nt(l)?(u[l]=null,Ne(h,l)&&(h[l]=null)):Pt(l)&&(l.value=null)),ye(c))mi(c,a,12,[o,u]);else{const p=Nt(c),m=Pt(c);if(p||m){const y=()=>{if(t.f){const v=p?Ne(h,c)?h[c]:u[c]:c.value;i?fe(v)&&Hp(v,s):fe(v)?v.includes(s)||v.push(s):p?(u[c]=[s],Ne(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Ne(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,mn(y,n)):y()}}}const mn=gk;function Hk(t){return Wk(t)}function Wk(t,e){const n=uf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Yn,insertStaticContent:y}=t,v=(w,E,C,O=null,M=null,L=null,Y=!1,H=null,z=!!E.dynamicChildren)=>{if(w===E)return;w&&!Ko(w,E)&&(O=x(w),Tt(w,M,L,!0),w=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:V,ref:ne,shapeFlag:X}=E;switch(V){case qu:b(w,E,C,O);break;case Ii:A(w,E,C,O);break;case od:w==null&&k(E,C,O,Y);break;case On:Dt(w,E,C,O,M,L,Y,H,z);break;default:X&1?j(w,E,C,O,M,L,Y,H,z):X&6?Ge(w,E,C,O,M,L,Y,H,z):(X&64||X&128)&&V.process(w,E,C,O,M,L,Y,H,z,q)}ne!=null&&M&&vf(ne,w&&w.ref,L,E||w,!E)},b=(w,E,C,O)=>{if(w==null)r(E.el=a(E.children),C,O);else{const M=E.el=w.el;E.children!==w.children&&l(M,E.children)}},A=(w,E,C,O)=>{w==null?r(E.el=c(E.children||""),C,O):E.el=w.el},k=(w,E,C,O)=>{[w.el,w.anchor]=y(w.children,E,C,O,w.el,w.anchor)},N=({el:w,anchor:E},C,O)=>{let M;for(;w&&w!==E;)M=p(w),r(w,C,O),w=M;r(E,C,O)},P=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=p(w),i(w),w=C;i(E)},j=(w,E,C,O,M,L,Y,H,z)=>{Y=Y||E.type==="svg",w==null?W(E,C,O,M,L,Y,H,z):ze(w,E,M,L,Y,H,z)},W=(w,E,C,O,M,L,Y,H)=>{let z,V;const{type:ne,props:X,shapeFlag:re,transition:ue,dirs:ve}=w;if(z=w.el=o(w.type,L,X&&X.is,X),re&8?u(z,w.children):re&16&&ge(w.children,z,null,O,M,L&&ne!=="foreignObject",Y,H),ve&&Fi(w,null,O,"created"),oe(z,w,w.scopeId,Y,O),X){for(const Ue in X)Ue!=="value"&&!vl(Ue)&&s(z,Ue,null,X[Ue],L,w.children,O,M,mt);"value"in X&&s(z,"value",null,X.value),(V=X.onVnodeBeforeMount)&&ir(V,O,w)}ve&&Fi(w,null,O,"beforeMount");const qe=(!M||M&&!M.pendingBranch)&&ue&&!ue.persisted;qe&&ue.beforeEnter(z),r(z,E,C),((V=X&&X.onVnodeMounted)||qe||ve)&&mn(()=>{V&&ir(V,O,w),qe&&ue.enter(z),ve&&Fi(w,null,O,"mounted")},M)},oe=(w,E,C,O,M)=>{if(C&&m(w,C),O)for(let L=0;L<O.length;L++)m(w,O[L]);if(M){let L=M.subTree;if(E===L){const Y=M.vnode;oe(w,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},ge=(w,E,C,O,M,L,Y,H,z=0)=>{for(let V=z;V<w.length;V++){const ne=w[V]=H?ri(w[V]):sr(w[V]);v(null,ne,E,C,O,M,L,Y,H)}},ze=(w,E,C,O,M,L,Y)=>{const H=E.el=w.el;let{patchFlag:z,dynamicChildren:V,dirs:ne}=E;z|=w.patchFlag&16;const X=w.props||Je,re=E.props||Je;let ue;C&&Ui(C,!1),(ue=re.onVnodeBeforeUpdate)&&ir(ue,C,E,w),ne&&Fi(E,w,C,"beforeUpdate"),C&&Ui(C,!0);const ve=M&&E.type!=="foreignObject";if(V?Re(w.dynamicChildren,V,H,C,O,ve,L):Y||Te(w,E,H,null,C,O,ve,L,!1),z>0){if(z&16)ct(H,E,X,re,C,O,M);else if(z&2&&X.class!==re.class&&s(H,"class",null,re.class,M),z&4&&s(H,"style",X.style,re.style,M),z&8){const qe=E.dynamicProps;for(let Ue=0;Ue<qe.length;Ue++){const Ye=qe[Ue],pn=X[Ye],kn=re[Ye];(kn!==pn||Ye==="value")&&s(H,Ye,pn,kn,M,w.children,C,O,mt)}}z&1&&w.children!==E.children&&u(H,E.children)}else!Y&&V==null&&ct(H,E,X,re,C,O,M);((ue=re.onVnodeUpdated)||ne)&&mn(()=>{ue&&ir(ue,C,E,w),ne&&Fi(E,w,C,"updated")},O)},Re=(w,E,C,O,M,L,Y)=>{for(let H=0;H<E.length;H++){const z=w[H],V=E[H],ne=z.el&&(z.type===On||!Ko(z,V)||z.shapeFlag&70)?h(z.el):C;v(z,V,ne,null,O,M,L,Y,!0)}},ct=(w,E,C,O,M,L,Y)=>{if(C!==O){if(C!==Je)for(const H in C)!vl(H)&&!(H in O)&&s(w,H,C[H],null,Y,E.children,M,L,mt);for(const H in O){if(vl(H))continue;const z=O[H],V=C[H];z!==V&&H!=="value"&&s(w,H,V,z,Y,E.children,M,L,mt)}"value"in O&&s(w,"value",C.value,O.value)}},Dt=(w,E,C,O,M,L,Y,H,z)=>{const V=E.el=w?w.el:a(""),ne=E.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:ue}=E;ue&&(H=H?H.concat(ue):ue),w==null?(r(V,C,O),r(ne,C,O),ge(E.children,C,ne,M,L,Y,H,z)):X>0&&X&64&&re&&w.dynamicChildren?(Re(w.dynamicChildren,re,C,M,L,Y,H),(E.key!=null||M&&E===M.subTree)&&SE(w,E,!0)):Te(w,E,C,ne,M,L,Y,H,z)},Ge=(w,E,C,O,M,L,Y,H,z)=>{E.slotScopeIds=H,w==null?E.shapeFlag&512?M.ctx.activate(E,C,O,Y,z):Cr(E,C,O,M,L,Y,z):on(w,E,z)},Cr=(w,E,C,O,M,L,Y)=>{const H=w.component=eN(w,O,M);if(gE(w)&&(H.ctx.renderer=q),tN(H),H.asyncDep){if(M&&M.registerDep(H,je),!w.el){const z=H.subTree=Xt(Ii);A(null,z,E,C)}return}je(H,w,E,C,M,L,Y)},on=(w,E,C)=>{const O=E.component=w.component;if(fk(w,E,C))if(O.asyncDep&&!O.asyncResolved){Ve(O,E,C);return}else O.next=E,ak(O.update),O.update();else E.el=w.el,O.vnode=E},je=(w,E,C,O,M,L,Y)=>{const H=()=>{if(w.isMounted){let{next:ne,bu:X,u:re,parent:ue,vnode:ve}=w,qe=ne,Ue;Ui(w,!1),ne?(ne.el=ve.el,Ve(w,ne,Y)):ne=ve,X&&wl(X),(Ue=ne.props&&ne.props.onVnodeBeforeUpdate)&&ir(Ue,ue,ne,ve),Ui(w,!0);const Ye=id(w),pn=w.subTree;w.subTree=Ye,v(pn,Ye,h(pn.el),x(pn),w,M,L),ne.el=Ye.el,qe===null&&pk(w,Ye.el),re&&mn(re,M),(Ue=ne.props&&ne.props.onVnodeUpdated)&&mn(()=>ir(Ue,ue,ne,ve),M)}else{let ne;const{el:X,props:re}=E,{bm:ue,m:ve,parent:qe}=w,Ue=pa(E);if(Ui(w,!1),ue&&wl(ue),!Ue&&(ne=re&&re.onVnodeBeforeMount)&&ir(ne,qe,E),Ui(w,!0),X&&xe){const Ye=()=>{w.subTree=id(w),xe(X,w.subTree,w,M,null)};Ue?E.type.__asyncLoader().then(()=>!w.isUnmounted&&Ye()):Ye()}else{const Ye=w.subTree=id(w);v(null,Ye,C,O,w,M,L),E.el=Ye.el}if(ve&&mn(ve,M),!Ue&&(ne=re&&re.onVnodeMounted)){const Ye=E;mn(()=>ir(ne,qe,Ye),M)}(E.shapeFlag&256||qe&&pa(qe.vnode)&&qe.vnode.shapeFlag&256)&&w.a&&mn(w.a,M),w.isMounted=!0,E=C=O=null}},z=w.effect=new Gp(H,()=>nm(V),w.scope),V=w.update=()=>z.run();V.id=w.uid,Ui(w,!0),V()},Ve=(w,E,C)=>{E.component=w;const O=w.vnode.props;w.vnode=E,w.next=null,Fk(w,E.props,O,C),jk(w,E.children,C),Ao(),Q_(),Co()},Te=(w,E,C,O,M,L,Y,H,z=!1)=>{const V=w&&w.children,ne=w?w.shapeFlag:0,X=E.children,{patchFlag:re,shapeFlag:ue}=E;if(re>0){if(re&128){wt(V,X,C,O,M,L,Y,H,z);return}else if(re&256){Tn(V,X,C,O,M,L,Y,H,z);return}}ue&8?(ne&16&&mt(V,M,L),X!==V&&u(C,X)):ne&16?ue&16?wt(V,X,C,O,M,L,Y,H,z):mt(V,M,L,!0):(ne&8&&u(C,""),ue&16&&ge(X,C,O,M,L,Y,H,z))},Tn=(w,E,C,O,M,L,Y,H,z)=>{w=w||Us,E=E||Us;const V=w.length,ne=E.length,X=Math.min(V,ne);let re;for(re=0;re<X;re++){const ue=E[re]=z?ri(E[re]):sr(E[re]);v(w[re],ue,C,null,M,L,Y,H,z)}V>ne?mt(w,M,L,!0,!1,X):ge(E,C,O,M,L,Y,H,z,X)},wt=(w,E,C,O,M,L,Y,H,z)=>{let V=0;const ne=E.length;let X=w.length-1,re=ne-1;for(;V<=X&&V<=re;){const ue=w[V],ve=E[V]=z?ri(E[V]):sr(E[V]);if(Ko(ue,ve))v(ue,ve,C,null,M,L,Y,H,z);else break;V++}for(;V<=X&&V<=re;){const ue=w[X],ve=E[re]=z?ri(E[re]):sr(E[re]);if(Ko(ue,ve))v(ue,ve,C,null,M,L,Y,H,z);else break;X--,re--}if(V>X){if(V<=re){const ue=re+1,ve=ue<ne?E[ue].el:O;for(;V<=re;)v(null,E[V]=z?ri(E[V]):sr(E[V]),C,ve,M,L,Y,H,z),V++}}else if(V>re)for(;V<=X;)Tt(w[V],M,L,!0),V++;else{const ue=V,ve=V,qe=new Map;for(V=ve;V<=re;V++){const Bt=E[V]=z?ri(E[V]):sr(E[V]);Bt.key!=null&&qe.set(Bt.key,V)}let Ue,Ye=0;const pn=re-ve+1;let kn=!1,Rr=0;const In=new Array(pn);for(V=0;V<pn;V++)In[V]=0;for(V=ue;V<=X;V++){const Bt=w[V];if(Ye>=pn){Tt(Bt,M,L,!0);continue}let an;if(Bt.key!=null)an=qe.get(Bt.key);else for(Ue=ve;Ue<=re;Ue++)if(In[Ue-ve]===0&&Ko(Bt,E[Ue])){an=Ue;break}an===void 0?Tt(Bt,M,L,!0):(In[an-ve]=V+1,an>=Rr?Rr=an:kn=!0,v(Bt,E[an],C,null,M,L,Y,H,z),Ye++)}const Vi=kn?zk(In):Us;for(Ue=Vi.length-1,V=pn-1;V>=0;V--){const Bt=ve+V,an=E[Bt],rr=Bt+1<ne?E[Bt+1].el:O;In[V]===0?v(null,an,C,rr,M,L,Y,H,z):kn&&(Ue<0||V!==Vi[Ue]?Et(an,C,rr,2):Ue--)}}},Et=(w,E,C,O,M=null)=>{const{el:L,type:Y,transition:H,children:z,shapeFlag:V}=w;if(V&6){Et(w.component.subTree,E,C,O);return}if(V&128){w.suspense.move(E,C,O);return}if(V&64){Y.move(w,E,C,q);return}if(Y===On){r(L,E,C);for(let X=0;X<z.length;X++)Et(z[X],E,C,O);r(w.anchor,E,C);return}if(Y===od){N(w,E,C);return}if(O!==2&&V&1&&H)if(O===0)H.beforeEnter(L),r(L,E,C),mn(()=>H.enter(L),M);else{const{leave:X,delayLeave:re,afterLeave:ue}=H,ve=()=>r(L,E,C),qe=()=>{X(L,()=>{ve(),ue&&ue()})};re?re(L,ve,qe):qe()}else r(L,E,C)},Tt=(w,E,C,O=!1,M=!1)=>{const{type:L,props:Y,ref:H,children:z,dynamicChildren:V,shapeFlag:ne,patchFlag:X,dirs:re}=w;if(H!=null&&vf(H,null,C,w,!0),ne&256){E.ctx.deactivate(w);return}const ue=ne&1&&re,ve=!pa(w);let qe;if(ve&&(qe=Y&&Y.onVnodeBeforeUnmount)&&ir(qe,E,w),ne&6)Rs(w.component,C,O);else{if(ne&128){w.suspense.unmount(C,O);return}ue&&Fi(w,null,E,"beforeUnmount"),ne&64?w.type.remove(w,E,C,M,q,O):V&&(L!==On||X>0&&X&64)?mt(V,E,C,!1,!0):(L===On&&X&384||!M&&ne&16)&&mt(z,E,C),O&&Jr(w)}(ve&&(qe=Y&&Y.onVnodeUnmounted)||ue)&&mn(()=>{qe&&ir(qe,E,w),ue&&Fi(w,null,E,"unmounted")},C)},Jr=w=>{const{type:E,el:C,anchor:O,transition:M}=w;if(E===On){Bn(C,O);return}if(E===od){P(w);return}const L=()=>{i(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:H}=M,z=()=>Y(C,L);H?H(w.el,L,z):z()}else L()},Bn=(w,E)=>{let C;for(;w!==E;)C=p(w),i(w),w=C;i(E)},Rs=(w,E,C)=>{const{bum:O,scope:M,update:L,subTree:Y,um:H}=w;O&&wl(O),M.stop(),L&&(L.active=!1,Tt(Y,w,E,C)),H&&mn(H,E),mn(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},mt=(w,E,C,O=!1,M=!1,L=0)=>{for(let Y=L;Y<w.length;Y++)Tt(w[Y],E,C,O,M)},x=w=>w.shapeFlag&6?x(w.component.subTree):w.shapeFlag&128?w.suspense.next():p(w.anchor||w.el),J=(w,E,C)=>{w==null?E._vnode&&Tt(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,C),Q_(),uE(),E._vnode=w},q={p:v,um:Tt,m:Et,r:Jr,mt:Cr,mc:ge,pc:Te,pbc:Re,n:x,o:t};let te,xe;return e&&([te,xe]=e(q)),{render:J,hydrate:te,createApp:Vk(J,te)}}function Ui({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function SE(t,e,n=!1){const r=t.children,i=e.children;if(fe(r)&&fe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ri(i[s]),a.el=o.el),n||SE(o,a)),a.type===qu&&(a.el=o.el)}}function zk(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const qk=t=>t.__isTeleport,On=Symbol.for("v-fgt"),qu=Symbol.for("v-txt"),Ii=Symbol.for("v-cmt"),od=Symbol.for("v-stc"),ga=[];let zn=null;function hn(t=!1){ga.push(zn=t?null:[])}function Kk(){ga.pop(),zn=ga[ga.length-1]||null}let Ma=1;function oy(t){Ma+=t}function PE(t){return t.dynamicChildren=Ma>0?zn||Us:null,Kk(),Ma>0&&zn&&zn.push(t),t}function dr(t,e,n,r,i,s){return PE(_t(t,e,n,r,i,s,!0))}function La(t,e,n,r,i){return PE(Xt(t,e,n,r,i,!0))}function Hl(t){return t?t.__v_isVNode===!0:!1}function Ko(t,e){return t.type===e.type&&t.key===e.key}const Ku="__vInternal",kE=({key:t})=>t??null,Tl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Nt(t)||Pt(t)||ye(t)?{i:Jt,r:t,k:e,f:!!n}:t:null);function _t(t,e=null,n=null,r=0,i=null,s=t===On?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kE(e),ref:e&&Tl(e),scopeId:Wu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Jt};return a?(am(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Nt(n)?8:16),Ma>0&&!o&&zn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&zn.push(c),c}const Xt=Gk;function Gk(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Pk)&&(t=Ii),Hl(t)){const a=eo(t,e,!0);return n&&am(a,n),Ma>0&&!s&&zn&&(a.shapeFlag&6?zn[zn.indexOf(t)]=a:zn.push(a)),a.patchFlag|=-2,a}if(sN(t)&&(t=t.__vccOpts),e){e=Yk(e);let{class:a,style:c}=e;a&&!Nt(a)&&(e.class=Fu(a)),it(c)&&(tE(c)&&!fe(c)&&(c=kt({},c)),e.style=qp(c))}const o=Nt(t)?1:mk(t)?128:qk(t)?64:it(t)?4:ye(t)?2:0;return _t(t,e,n,r,i,o,s,!0)}function Yk(t){return t?tE(t)||Ku in t?kt({},t):t:null}function eo(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Jk(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&kE(a),ref:e&&e.ref?n&&i?fe(i)?i.concat(Tl(e)):[i,Tl(e)]:Tl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==On?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&eo(t.ssContent),ssFallback:t.ssFallback&&eo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qk(t=" ",e=0){return Xt(qu,null,t,e)}function Va(t="",e=!1){return e?(hn(),La(Ii,null,t)):Xt(Ii,null,t)}function sr(t){return t==null||typeof t=="boolean"?Xt(Ii):fe(t)?Xt(On,null,t.slice()):typeof t=="object"?ri(t):Xt(qu,null,String(t))}function ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:eo(t)}function am(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),am(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ku in e)?e._ctx=Jt:i===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),r&64?(n=16,e=[Qk(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fu([e.class,r.class]));else if(i==="style")e.style=qp([e.style,r.style]);else if(Lu(i)){const s=e[i],o=r[i];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function ir(t,e,n,r=null){Qn(t,e,7,[n,r])}const Xk=TE();let Zk=0;function eN(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Xk,s={uid:Zk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new U0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bE(r,i),emitsOptions:dE(r,i),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:r.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=uk.bind(null,s),t.ce&&t.ce(s),s}let Vt=null;const NE=()=>Vt||Jt;let cm,Ps,ay="__VUE_INSTANCE_SETTERS__";(Ps=uf()[ay])||(Ps=uf()[ay]=[]),Ps.push(t=>Vt=t),cm=t=>{Ps.length>1?Ps.forEach(e=>e(t)):Ps[0](t)};const to=t=>{cm(t),t.scope.on()},ts=()=>{Vt&&Vt.scope.off(),cm(null)};function OE(t){return t.vnode.shapeFlag&4}let $a=!1;function tN(t,e=!1){$a=e;const{props:n,children:r}=t.vnode,i=OE(t);$k(t,n,i,e),Bk(t,r);const s=i?nN(t,e):void 0;return $a=!1,s}function nN(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zp(new Proxy(t.ctx,kk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?iN(t):null;to(t),Ao();const s=mi(r,t,0,[t.props,i]);if(Co(),ts(),D0(s)){if(s.then(ts,ts),e)return s.then(o=>{cy(t,o,e)}).catch(o=>{ju(o,t,0)});t.asyncDep=s}else cy(t,s,e)}else xE(t,e)}function cy(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=oE(e)),xE(t,n)}let ly;function xE(t,e,n){const r=t.type;if(!t.render){if(!e&&ly&&!r.render){const i=r.template||sm(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=kt(kt({isCustomElement:s,delimiters:a},o),c);r.render=ly(i,l)}}t.render=r.render||Yn}to(t),Ao(),Nk(t),Co(),ts()}function rN(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return yn(t,"get","$attrs"),e[n]}}))}function iN(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rN(t)},slots:t.slots,emit:t.emit,expose:e}}function Gu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oE(Zp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ma)return ma[n](t)},has(e,n){return n in e||n in ma}}))}function sN(t){return ye(t)&&"__vccOpts"in t}const Yt=(t,e)=>ik(t,e,$a);function DE(t,e,n){const r=arguments.length;return r===2?it(e)&&!fe(e)?Hl(e)?Xt(t,null,[e]):Xt(t,e):Xt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hl(n)&&(n=[n]),Xt(t,e,n))}const oN=Symbol.for("v-scx"),aN=()=>Jn(oN),cN="3.3.4",lN="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,uy=zi&&zi.createElement("template"),uN={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?zi.createElementNS(lN,t):zi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>zi.createTextNode(t),createComment:t=>zi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{uy.innerHTML=r?`<svg>${t}</svg>`:t;const a=uy.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hN(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dN(t,e,n){const r=t.style,i=Nt(n);if(n&&!i){if(e&&!Nt(e))for(const s in e)n[s]==null&&wf(r,s,"");for(const s in n)wf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const hy=/\s*!important$/;function wf(t,e,n){if(fe(n))n.forEach(r=>wf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fN(t,e);hy.test(n)?t.setProperty(bo(r),n.replace(hy,""),"important"):t[r]=n}}const dy=["Webkit","Moz","ms"],ad={};function fN(t,e){const n=ad[e];if(n)return n;let r=Xs(e);if(r!=="filter"&&r in t)return ad[e]=r;r=V0(r);for(let i=0;i<dy.length;i++){const s=dy[i]+r;if(s in t)return ad[e]=s}return e}const fy="http://www.w3.org/1999/xlink";function pN(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fy,e.slice(6,e.length)):t.setAttributeNS(fy,e,n);else{const s=T1(e);n==null||s&&!$0(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function mN(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$0(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Os(t,e,n,r){t.addEventListener(e,n,r)}function gN(t,e,n,r){t.removeEventListener(e,n,r)}function _N(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=yN(e);if(r){const l=s[e]=EN(r,i);Os(t,a,l,c)}else o&&(gN(t,a,o,c),s[e]=void 0)}}const py=/(?:Once|Passive|Capture)$/;function yN(t){let e;if(py.test(t)){e={};let r;for(;r=t.match(py);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bo(t.slice(2)),e]}let cd=0;const vN=Promise.resolve(),wN=()=>cd||(vN.then(()=>cd=0),cd=Date.now());function EN(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qn(TN(r,n.value),e,5,[r])};return n.value=t,n.attached=wN(),n}function TN(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const my=/^on[a-z]/,IN=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?hN(t,r,i):e==="style"?dN(t,n,r):Lu(e)?jp(e)||_N(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bN(t,e,r,i))?mN(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pN(t,e,r,i))};function bN(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&my.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||my.test(e)&&Nt(n)?!1:e in t}const gy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>wl(e,n):e};function AN(t){t.target.composing=!0}function _y(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const L5={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=gy(i);const s=r||i.props&&i.props.type==="number";Os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=lf(a)),t._assign(a)}),n&&Os(t,"change",()=>{t.value=t.value.trim()}),e||(Os(t,"compositionstart",AN),Os(t,"compositionend",_y),Os(t,"change",_y))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=gy(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&lf(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},CN=["ctrl","shift","alt","meta"],RN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CN.some(n=>t[`${n}Key`]&&!e.includes(n))},tl=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=RN[e[i]];if(s&&s(n,e))return}return t(n,...r)},SN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Go(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Go(t,!0),r.enter(t)):r.leave(t,()=>{Go(t,!1)}):Go(t,e))},beforeUnmount(t,{value:e}){Go(t,e)}};function Go(t,e){t.style.display=e?t._vod:"none"}const PN=kt({patchProp:IN},uN);let yy;function kN(){return yy||(yy=Hk(PN))}const NN=(...t)=>{const e=kN().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=ON(r);if(!i)return;const s=e._component;!ye(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ON(t){return Nt(t)?document.querySelector(t):t}var xN=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const DN=Symbol();var vy;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vy||(vy={}));function MN(){const t=B0(!0),e=t.run(()=>yt({}));let n=[],r=[];const i=Zp({install(s){i._a=s,s.provide(DN,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!xN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof window<"u";function LN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function ld(t,e){const n={};for(const r in e){const i=e[r];n[r]=er(i)?i.map(t):t(i)}return n}const _a=()=>{},er=Array.isArray,VN=/\/$/,$N=t=>t.replace(VN,"");function ud(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jN(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function FN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UN(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&no(e.matched[r],n.matched[i])&&ME(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function no(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ME(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BN(t[n],e[n]))return!1;return!0}function BN(t,e){return er(t)?Ey(t,e):er(e)?Ey(e,t):t===e}function Ey(t,e){return er(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Fa;(function(t){t.pop="pop",t.push="push"})(Fa||(Fa={}));var ya;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ya||(ya={}));function HN(t){if(!t)if(xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$N(t)}const WN=/^[^#]+#/;function zN(t,e){return t.replace(WN,"#")+e}function qN(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yu=()=>({left:window.pageXOffset,top:window.pageYOffset});function KN(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=qN(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ty(t,e){return(history.state?history.state.position-e:-1)+t}const Ef=new Map;function GN(t,e){Ef.set(t,e)}function YN(t){const e=Ef.get(t);return Ef.delete(t),e}let QN=()=>location.protocol+"//"+location.host;function LE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),wy(c,"")}return wy(n,t)+r+i}function JN(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=LE(t,location),y=n.value,v=e.value;let b=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}b=v?p.position-v.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:b,type:Fa.pop,direction:b?b>0?ya.forward:ya.back:ya.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(He({},p.state,{scroll:Yu()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Iy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Yu():null}}function XN(t){const{history:e,location:n}=window,r={value:LE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:QN()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=He({},e.state,Iy(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=He({},i.value,e.state,{forward:c,scroll:Yu()});s(u.current,u,!0);const h=He({},Iy(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function ZN(t){t=HN(t);const e=XN(t),n=JN(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=He({location:"",base:t,go:r,createHref:zN.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function eO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ZN(t)}function tO(t){return typeof t=="string"||t&&typeof t=="object"}function VE(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$E=Symbol("");var by;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(by||(by={}));function ro(t,e){return He(new Error,{type:t,[$E]:!0},e)}function Nr(t,e){return t instanceof Error&&$E in t&&(e==null||!!(t.type&e))}const Ay="[^/]+?",nO={sensitive:!1,strict:!1,start:!0,end:!0},rO=/[.+*?^${}()[\]/\\]/g;function iO(t,e){const n=He({},nO,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(rO,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:v,optional:b,regexp:A}=p;s.push({name:y,repeatable:v,optional:b});const k=A||Ay;if(k!==Ay){m+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+P.message)}}let N=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=b&&l.length<2?`(?:/${N})`:"/"+N),b&&(N+="?"),i+=N,m+=20,b&&(m+=-8),v&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=s[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:b}=m,A=y in l?l[y]:"";if(er(A)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=er(A)?A.join("/"):A;if(!k)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function sO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oO(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=sO(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Cy(r))return 1;if(Cy(i))return-1}return i.length-r.length}function Cy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aO={type:0,value:""},cO=/[a-zA-Z0-9_]/;function lO(t){if(!t)return[[]];if(t==="/")return[[aO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:cO.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function uO(t,e,n){const r=iO(lO(t.path),n),i=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hO(t,e){const n=[],r=new Map;e=Py({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,p){const m=!p,y=dO(u);y.aliasOf=p&&p.record;const v=Py(e,u),b=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of N)b.push(He({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y}))}let A,k;for(const N of b){const{path:P}=N;if(h&&P[0]!=="/"){const j=h.record.path,W=j[j.length-1]==="/"?"":"/";N.path=h.record.path+(P&&W+P)}if(A=uO(N,h,v),p?p.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!Sy(A)&&o(u.name)),y.children){const j=y.children;for(let W=0;W<j.length;W++)s(j[W],A,p&&p.children[W])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{o(k)}:_a}function o(u){if(VE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&oO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!FE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sy(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},y,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw ro(1,{location:u});v=p.record.name,m=He(Ry(h.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Ry(u.params,p.keys.map(k=>k.name))),y=p.stringify(m)}else if("path"in u)y=u.path,p=n.find(k=>k.re.test(y)),p&&(m=p.parse(y),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw ro(1,{location:u,currentLocation:h});v=p.record.name,m=He({},h.params,u.params),y=p.stringify(m)}const b=[];let A=p;for(;A;)b.unshift(A.record),A=A.parent;return{name:v,path:y,params:m,matched:b,meta:pO(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ry(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pO(t){return t.reduce((e,n)=>He(e,n.meta),{})}function Py(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function FE(t,e){return e.children.some(n=>n===t||FE(t,n))}const UE=/#/g,mO=/&/g,gO=/\//g,_O=/=/g,yO=/\?/g,BE=/\+/g,vO=/%5B/g,wO=/%5D/g,jE=/%5E/g,EO=/%60/g,HE=/%7B/g,TO=/%7C/g,WE=/%7D/g,IO=/%20/g;function lm(t){return encodeURI(""+t).replace(TO,"|").replace(vO,"[").replace(wO,"]")}function bO(t){return lm(t).replace(HE,"{").replace(WE,"}").replace(jE,"^")}function Tf(t){return lm(t).replace(BE,"%2B").replace(IO,"+").replace(UE,"%23").replace(mO,"%26").replace(EO,"`").replace(HE,"{").replace(WE,"}").replace(jE,"^")}function AO(t){return Tf(t).replace(_O,"%3D")}function CO(t){return lm(t).replace(UE,"%23").replace(yO,"%3F")}function RO(t){return t==null?"":CO(t).replace(gO,"%2F")}function Wl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(BE," "),o=s.indexOf("="),a=Wl(o<0?s:s.slice(0,o)),c=o<0?null:Wl(s.slice(o+1));if(a in e){let l=e[a];er(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ky(t){let e="";for(let n in t){const r=t[n];if(n=AO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(er(r)?r.map(s=>s&&Tf(s)):[r&&Tf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function PO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=er(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const kO=Symbol(""),Ny=Symbol(""),um=Symbol(""),zE=Symbol(""),If=Symbol("");function Yo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ii(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ro(4,{from:n,to:e})):h instanceof Error?a(h):tO(h)?a(ro(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function hd(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(NO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(ii(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=LN(l)?l.default:l;s.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ii(p,n,r,s,o)()}))}}return i}function NO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Oy(t){const e=Jn(um),n=Jn(zE),r=Yt(()=>e.resolve(Mt(t.to))),i=Yt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(no.bind(null,u));if(p>-1)return p;const m=xy(c[l-2]);return l>1&&xy(u)===m&&h[h.length-1].path!==m?h.findIndex(no.bind(null,c[l-2])):p}),s=Yt(()=>i.value>-1&&MO(n.params,r.value.params)),o=Yt(()=>i.value>-1&&i.value===n.matched.length-1&&ME(n.params,r.value.params));function a(c={}){return DO(c)?e[Mt(t.replace)?"replace":"push"](Mt(t.to)).catch(_a):Promise.resolve()}return{route:r,href:Yt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const OO=wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oy,setup(t,{slots:e}){const n=Bu(Oy(t)),{options:r}=Jn(um),i=Yt(()=>({[Dy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:DE("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),xO=OO;function DO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MO(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!er(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function xy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dy=(t,e,n)=>t??e??n,LO=wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jn(If),i=Yt(()=>t.route||r.value),s=Jn(Ny,0),o=Yt(()=>{let l=Mt(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Yt(()=>i.value.matched[o.value]);El(Ny,Yt(()=>o.value+1)),El(kO,a),El(If,i);const c=yt();return gi(()=>[c.value,a.value,t.name],([l,u,h],[p,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!no(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return My(n.default,{Component:p,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=DE(p,He({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return My(n.default,{Component:b,route:l})||b}}});function My(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qE=LO;function VO(t){const e=hO(t.routes,t),n=t.parseQuery||SO,r=t.stringifyQuery||ky,i=t.history,s=Yo(),o=Yo(),a=Yo(),c=iE(ti);let l=ti;xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ld.bind(null,x=>""+x),h=ld.bind(null,RO),p=ld.bind(null,Wl);function m(x,J){let q,te;return VE(x)?(q=e.getRecordMatcher(x),te=J):te=x,e.addRoute(te,q)}function y(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function v(){return e.getRoutes().map(x=>x.record)}function b(x){return!!e.getRecordMatcher(x)}function A(x,J){if(J=He({},J||c.value),typeof x=="string"){const C=ud(n,x,J.path),O=e.resolve({path:C.path},J),M=i.createHref(C.fullPath);return He(C,O,{params:p(O.params),hash:Wl(C.hash),redirectedFrom:void 0,href:M})}let q;if("path"in x)q=He({},x,{path:ud(n,x.path,J.path).path});else{const C=He({},x.params);for(const O in C)C[O]==null&&delete C[O];q=He({},x,{params:h(C)}),J.params=h(J.params)}const te=e.resolve(q,J),xe=x.hash||"";te.params=u(p(te.params));const w=FN(r,He({},x,{hash:bO(xe),path:te.path})),E=i.createHref(w);return He({fullPath:w,hash:xe,query:r===ky?PO(x.query):x.query||{}},te,{redirectedFrom:void 0,href:E})}function k(x){return typeof x=="string"?ud(n,x,c.value.path):He({},x)}function N(x,J){if(l!==x)return ro(8,{from:J,to:x})}function P(x){return oe(x)}function j(x){return P(He(k(x),{replace:!0}))}function W(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let te=typeof q=="function"?q(x):q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=k(te):{path:te},te.params={}),He({query:x.query,hash:x.hash,params:"path"in te?{}:x.params},te)}}function oe(x,J){const q=l=A(x),te=c.value,xe=x.state,w=x.force,E=x.replace===!0,C=W(q);if(C)return oe(He(k(C),{state:typeof C=="object"?He({},xe,C.state):xe,force:w,replace:E}),J||q);const O=q;O.redirectedFrom=J;let M;return!w&&UN(r,te,q)&&(M=ro(16,{to:O,from:te}),Et(te,te,!0,!1)),(M?Promise.resolve(M):Re(O,te)).catch(L=>Nr(L)?Nr(L,2)?L:wt(L):Te(L,O,te)).then(L=>{if(L){if(Nr(L,2))return oe(He({replace:E},k(L.to),{state:typeof L.to=="object"?He({},xe,L.to.state):xe,force:w}),J||O)}else L=Dt(O,te,!0,E,xe);return ct(O,te,L),L})}function ge(x,J){const q=N(x,J);return q?Promise.reject(q):Promise.resolve()}function ze(x){const J=Bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function Re(x,J){let q;const[te,xe,w]=$O(x,J);q=hd(te.reverse(),"beforeRouteLeave",x,J);for(const C of te)C.leaveGuards.forEach(O=>{q.push(ii(O,x,J))});const E=ge.bind(null,x,J);return q.push(E),mt(q).then(()=>{q=[];for(const C of s.list())q.push(ii(C,x,J));return q.push(E),mt(q)}).then(()=>{q=hd(xe,"beforeRouteUpdate",x,J);for(const C of xe)C.updateGuards.forEach(O=>{q.push(ii(O,x,J))});return q.push(E),mt(q)}).then(()=>{q=[];for(const C of w)if(C.beforeEnter)if(er(C.beforeEnter))for(const O of C.beforeEnter)q.push(ii(O,x,J));else q.push(ii(C.beforeEnter,x,J));return q.push(E),mt(q)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),q=hd(w,"beforeRouteEnter",x,J),q.push(E),mt(q))).then(()=>{q=[];for(const C of o.list())q.push(ii(C,x,J));return q.push(E),mt(q)}).catch(C=>Nr(C,8)?C:Promise.reject(C))}function ct(x,J,q){a.list().forEach(te=>ze(()=>te(x,J,q)))}function Dt(x,J,q,te,xe){const w=N(x,J);if(w)return w;const E=J===ti,C=xs?history.state:{};q&&(te||E?i.replace(x.fullPath,He({scroll:E&&C&&C.scroll},xe)):i.push(x.fullPath,xe)),c.value=x,Et(x,J,q,E),wt()}let Ge;function Cr(){Ge||(Ge=i.listen((x,J,q)=>{if(!Rs.listening)return;const te=A(x),xe=W(te);if(xe){oe(He(xe,{replace:!0}),te).catch(_a);return}l=te;const w=c.value;xs&&GN(Ty(w.fullPath,q.delta),Yu()),Re(te,w).catch(E=>Nr(E,12)?E:Nr(E,2)?(oe(E.to,te).then(C=>{Nr(C,20)&&!q.delta&&q.type===Fa.pop&&i.go(-1,!1)}).catch(_a),Promise.reject()):(q.delta&&i.go(-q.delta,!1),Te(E,te,w))).then(E=>{E=E||Dt(te,w,!1),E&&(q.delta&&!Nr(E,8)?i.go(-q.delta,!1):q.type===Fa.pop&&Nr(E,20)&&i.go(-1,!1)),ct(te,w,E)}).catch(_a)}))}let on=Yo(),je=Yo(),Ve;function Te(x,J,q){wt(x);const te=je.list();return te.length?te.forEach(xe=>xe(x,J,q)):console.error(x),Promise.reject(x)}function Tn(){return Ve&&c.value!==ti?Promise.resolve():new Promise((x,J)=>{on.add([x,J])})}function wt(x){return Ve||(Ve=!x,Cr(),on.list().forEach(([J,q])=>x?q(x):J()),on.reset()),x}function Et(x,J,q,te){const{scrollBehavior:xe}=t;if(!xs||!xe)return Promise.resolve();const w=!q&&YN(Ty(x.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return cE().then(()=>xe(x,J,w)).then(E=>E&&KN(E)).catch(E=>Te(E,x,J))}const Tt=x=>i.go(x);let Jr;const Bn=new Set,Rs={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:v,resolve:A,options:t,push:P,replace:j,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:je.add,isReady:Tn,install(x){const J=this;x.component("RouterLink",xO),x.component("RouterView",qE),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(c)}),xs&&!Jr&&c.value===ti&&(Jr=!0,P(i.location).catch(xe=>{}));const q={};for(const xe in ti)Object.defineProperty(q,xe,{get:()=>c.value[xe],enumerable:!0});x.provide(um,J),x.provide(zE,Z0(q)),x.provide(If,c);const te=x.unmount;Bn.add(x),x.unmount=function(){Bn.delete(x),Bn.size<1&&(l=ti,Ge&&Ge(),Ge=null,c.value=ti,Jr=!1,Ve=!1),te()}}};function mt(x){return x.reduce((J,q)=>J.then(()=>ze(q)),Promise.resolve())}return Rs}function $O(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>no(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>no(l,c))||i.push(c))}return[n,r,i]}const FO=wr({__name:"App",setup(t){return(e,n)=>(hn(),La(Mt(qE)))}}),UO="modulepreload",BO=function(t){return"/"+t},Ly={},jO=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=BO(s),s in Ly)return;Ly[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":UO,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var HO=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},KE={},Pn={};let hm;const WO=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Pn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Pn.getSymbolTotalCodewords=function(e){return WO[e]};Pn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Pn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');hm=e};Pn.isKanjiModeEnabled=function(){return typeof hm<"u"};Pn.toSJIS=function(e){return hm(e)};var Qu={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Qu);function GE(){this.buffer=[],this.length=0}GE.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var zO=GE;function pc(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}pc.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};pc.prototype.get=function(t,e){return this.data[t*this.size+e]};pc.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};pc.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var qO=pc,YE={};(function(t){const e=Pn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(YE);var QE={};const KO=Pn.getSymbolSize,Vy=7;QE.getPositions=function(e){const n=KO(e);return[[0,0],[n-Vy,0],[0,n-Vy]]};var JE={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let h=0;h<s;h++){a=c=0,l=u=null;for(let p=0;p<s;p++){let m=i.get(h,p);m===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=m,a=1),m=i.get(p,h),m===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=m,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,n(i,c,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(JE);var Ju={};const hi=Qu,nl=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],rl=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ju.getBlocksCount=function(e,n){switch(n){case hi.L:return nl[(e-1)*4+0];case hi.M:return nl[(e-1)*4+1];case hi.Q:return nl[(e-1)*4+2];case hi.H:return nl[(e-1)*4+3];default:return}};Ju.getTotalCodewordsCount=function(e,n){switch(n){case hi.L:return rl[(e-1)*4+0];case hi.M:return rl[(e-1)*4+1];case hi.Q:return rl[(e-1)*4+2];case hi.H:return rl[(e-1)*4+3];default:return}};var XE={},Xu={};const va=new Uint8Array(512),zl=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)va[n]=e,zl[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)va[n]=va[n-255]})();Xu.log=function(e){if(e<1)throw new Error("log("+e+")");return zl[e]};Xu.exp=function(e){return va[e]};Xu.mul=function(e,n){return e===0||n===0?0:va[zl[e]+zl[n]]};(function(t){const e=Xu;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(XE);const ZE=XE;function dm(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}dm.prototype.initialize=function(e){this.degree=e,this.genPoly=ZE.generateECPolynomial(this.degree)};dm.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=ZE.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var GO=dm,eT={},ki={},fm={};fm.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Er={};const tT="[0-9]+",YO="[A-Z $%*+\\-./:]+";let Ua="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ua=Ua.replace(/u/g,"\\u");const QO="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ua+`)(?:.|[\r
]))+`;Er.KANJI=new RegExp(Ua,"g");Er.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Er.BYTE=new RegExp(QO,"g");Er.NUMERIC=new RegExp(tT,"g");Er.ALPHANUMERIC=new RegExp(YO,"g");const JO=new RegExp("^"+Ua+"$"),XO=new RegExp("^"+tT+"$"),ZO=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Er.testKanji=function(e){return JO.test(e)};Er.testNumeric=function(e){return XO.test(e)};Er.testAlphanumeric=function(e){return ZO.test(e)};(function(t){const e=fm,n=Er;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(ki);(function(t){const e=Pn,n=Ju,r=Qu,i=ki,s=fm,o=7973,a=e.getBCHDigit(o);function c(p,m,y){for(let v=1;v<=40;v++)if(m<=t.getCapacity(v,y,p))return v}function l(p,m){return i.getCharCountIndicator(p,m)+4}function u(p,m){let y=0;return p.forEach(function(v){const b=l(v.mode,m);y+=b+v.getBitsLength()}),y}function h(p,m){for(let y=1;y<=40;y++)if(u(p,y)<=t.getCapacity(y,m,i.MIXED))return y}t.from=function(m,y){return s.isValid(m)?parseInt(m,10):y},t.getCapacity=function(m,y,v){if(!s.isValid(m))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const b=e.getSymbolTotalCodewords(m),A=n.getTotalCodewordsCount(m,y),k=(b-A)*8;if(v===i.MIXED)return k;const N=k-l(v,m);switch(v){case i.NUMERIC:return Math.floor(N/10*3);case i.ALPHANUMERIC:return Math.floor(N/11*2);case i.KANJI:return Math.floor(N/13);case i.BYTE:default:return Math.floor(N/8)}},t.getBestVersionForData=function(m,y){let v;const b=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return h(m,b);if(m.length===0)return 1;v=m[0]}else v=m;return c(v.mode,v.getLength(),b)},t.getEncodedBits=function(m){if(!s.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=o<<e.getBCHDigit(y)-a;return m<<12|y}})(eT);var nT={};const bf=Pn,rT=1335,ex=21522,$y=bf.getBCHDigit(rT);nT.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;bf.getBCHDigit(i)-$y>=0;)i^=rT<<bf.getBCHDigit(i)-$y;return(r<<10|i)^ex};var iT={};const tx=ki;function io(t){this.mode=tx.NUMERIC,this.data=t.toString()}io.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};io.prototype.getLength=function(){return this.data.length};io.prototype.getBitsLength=function(){return io.getBitsLength(this.data.length)};io.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var nx=io;const rx=ki,dd=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function so(t){this.mode=rx.ALPHANUMERIC,this.data=t}so.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};so.prototype.getLength=function(){return this.data.length};so.prototype.getBitsLength=function(){return so.getBitsLength(this.data.length)};so.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=dd.indexOf(this.data[n])*45;r+=dd.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(dd.indexOf(this.data[n]),6)};var ix=so,sx=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const ox=sx,ax=ki;function oo(t){this.mode=ax.BYTE,typeof t=="string"&&(t=ox(t)),this.data=new Uint8Array(t)}oo.getBitsLength=function(e){return e*8};oo.prototype.getLength=function(){return this.data.length};oo.prototype.getBitsLength=function(){return oo.getBitsLength(this.data.length)};oo.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var cx=oo;const lx=ki,ux=Pn;function ao(t){this.mode=lx.KANJI,this.data=t}ao.getBitsLength=function(e){return e*13};ao.prototype.getLength=function(){return this.data.length};ao.prototype.getBitsLength=function(){return ao.getBitsLength(this.data.length)};ao.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=ux.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var hx=ao,sT={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,u,h,p,m,y,v,b;!a.empty();){c=a.pop(),l=c.value,h=c.cost,p=n[l]||{};for(u in p)p.hasOwnProperty(u)&&(m=p[u],y=h+m,v=o[u],b=typeof o[u]>"u",(b||v>y)&&(o[u]=y,a.push(u,y),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(sT);var dx=sT.exports;(function(t){const e=ki,n=nx,r=ix,i=cx,s=hx,o=Er,a=Pn,c=dx;function l(A){return unescape(encodeURIComponent(A)).length}function u(A,k,N){const P=[];let j;for(;(j=A.exec(N))!==null;)P.push({data:j[0],index:j.index,mode:k,length:j[0].length});return P}function h(A){const k=u(o.NUMERIC,e.NUMERIC,A),N=u(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,j;return a.isKanjiModeEnabled()?(P=u(o.BYTE,e.BYTE,A),j=u(o.KANJI,e.KANJI,A)):(P=u(o.BYTE_KANJI,e.BYTE,A),j=[]),k.concat(N,P,j).sort(function(oe,ge){return oe.index-ge.index}).map(function(oe){return{data:oe.data,mode:oe.mode,length:oe.length}})}function p(A,k){switch(k){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function m(A){return A.reduce(function(k,N){const P=k.length-1>=0?k[k.length-1]:null;return P&&P.mode===N.mode?(k[k.length-1].data+=N.data,k):(k.push(N),k)},[])}function y(A){const k=[];for(let N=0;N<A.length;N++){const P=A[N];switch(P.mode){case e.NUMERIC:k.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:k.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:k.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:k.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return k}function v(A,k){const N={},P={start:{}};let j=["start"];for(let W=0;W<A.length;W++){const oe=A[W],ge=[];for(let ze=0;ze<oe.length;ze++){const Re=oe[ze],ct=""+W+ze;ge.push(ct),N[ct]={node:Re,lastCount:0},P[ct]={};for(let Dt=0;Dt<j.length;Dt++){const Ge=j[Dt];N[Ge]&&N[Ge].node.mode===Re.mode?(P[Ge][ct]=p(N[Ge].lastCount+Re.length,Re.mode)-p(N[Ge].lastCount,Re.mode),N[Ge].lastCount+=Re.length):(N[Ge]&&(N[Ge].lastCount=Re.length),P[Ge][ct]=p(Re.length,Re.mode)+4+e.getCharCountIndicator(Re.mode,k))}}j=ge}for(let W=0;W<j.length;W++)P[j[W]].end=0;return{map:P,table:N}}function b(A,k){let N;const P=e.getBestModeForData(A);if(N=e.from(k,P),N!==e.BYTE&&N.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(N)+`.
 Suggested mode is: `+e.toString(P));switch(N===e.KANJI&&!a.isKanjiModeEnabled()&&(N=e.BYTE),N){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(k){return k.reduce(function(N,P){return typeof P=="string"?N.push(b(P,null)):P.data&&N.push(b(P.data,P.mode)),N},[])},t.fromString=function(k,N){const P=h(k,a.isKanjiModeEnabled()),j=y(P),W=v(j,N),oe=c.find_path(W.map,"start","end"),ge=[];for(let ze=1;ze<oe.length-1;ze++)ge.push(W.table[oe[ze]].node);return t.fromArray(m(ge))},t.rawSplit=function(k){return t.fromArray(h(k,a.isKanjiModeEnabled()))}})(iT);const Zu=Pn,fd=Qu,fx=zO,px=qO,mx=YE,gx=QE,Af=JE,Cf=Ju,_x=GO,ql=eT,yx=nT,vx=ki,pd=iT;function wx(t,e){const n=t.size,r=gx.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||n<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function Ex(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function Tx(t,e){const n=mx.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function Ix(t,e){const n=t.size,r=ql.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function md(t,e,n){const r=t.size,i=yx.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function bx(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function Ax(t,e,n){const r=new fx;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),vx.getCharCountIndicator(c.mode,t)),c.write(r)});const i=Zu.getSymbolTotalCodewords(t),s=Cf.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return Cx(r,t,e)}function Cx(t,e,n){const r=Zu.getSymbolTotalCodewords(e),i=Cf.getTotalCodewordsCount(e,n),s=r-i,o=Cf.getBlocksCount(e,n),a=r%o,c=o-a,l=Math.floor(r/o),u=Math.floor(s/o),h=u+1,p=l-u,m=new _x(p);let y=0;const v=new Array(o),b=new Array(o);let A=0;const k=new Uint8Array(t.buffer);for(let oe=0;oe<o;oe++){const ge=oe<c?u:h;v[oe]=k.slice(y,y+ge),b[oe]=m.encode(v[oe]),y+=ge,A=Math.max(A,ge)}const N=new Uint8Array(r);let P=0,j,W;for(j=0;j<A;j++)for(W=0;W<o;W++)j<v[W].length&&(N[P++]=v[W][j]);for(j=0;j<p;j++)for(W=0;W<o;W++)N[P++]=b[W][j];return N}function Rx(t,e,n,r){let i;if(Array.isArray(t))i=pd.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=pd.rawSplit(t);l=ql.getBestVersionForData(u,n)}i=pd.fromString(t,l||40)}else throw new Error("Invalid data");const s=ql.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=Ax(e,n,i),a=Zu.getSymbolSize(e),c=new px(a);return wx(c,e),Ex(c),Tx(c,e),md(c,n,0),e>=7&&Ix(c,e),bx(c,o),isNaN(r)&&(r=Af.getBestMask(c,md.bind(null,c,n))),Af.applyMask(r,c),md(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}KE.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=fd.M,i,s;return typeof n<"u"&&(r=fd.from(n.errorCorrectionLevel,fd.M),i=ql.from(n.version),s=Af.from(n.maskPattern),n.toSJISFunc&&Zu.setToSJISFunction(n.toSJISFunc)),Rx(e,i,r,s)};var oT={},pm={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,c=t.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let p=0;p<l;p++)for(let m=0;m<l;m++){let y=(p*l+m)*4,v=s.color.light;if(p>=u&&m>=u&&p<l-u&&m<l-u){const b=Math.floor((p-u)/c),A=Math.floor((m-u)/c);v=h[a[b*o+A]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(pm);(function(t){const e=pm;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),p=h.createImageData(u,u);return e.qrToImageData(p.data,s,c),n(h,l,u),h.putImageData(p,0,0),l},t.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(s,o,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(oT);var aT={};const Sx=pm;function Fy(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function gd(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function Px(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(r+=s?gd("M",c+n,.5+l+n):gd("m",i,0),i=0,s=!1),c+1<e&&t[a+1]||(r+=gd("h",o),o=0)):i++}return r}aT.render=function(e,n,r){const i=Sx.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+Fy(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Fy(i.color.dark,"stroke")+' d="'+Px(o,s,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const kx=HO,Rf=KE,cT=oT,Nx=aT;function mm(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!kx())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=Rf.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=Rf.create(n,r);i(null,t(c,e,r))}catch(c){i(c)}}Rf.create;var Ox=mm.bind(null,cT.render);mm.bind(null,cT.renderToDataURL);mm.bind(null,function(t,e,n){return Nx.render(t,n)});const xx=wr({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=yt(null);return rm(()=>{Ox(n.value,e.codeString)}),(r,i)=>(hn(),dr("div",null,[_t("canvas",{ref_key:"canvas",ref:n},null,512)]))}});/**
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
 */const lT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(t,e){if(!t)throw Ro(e)},Ro=function(t){return new Error("Firebase Database ("+lT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Mx;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hT=function(t){const e=uT(t);return eh.encodeByteArray(e,!0)},Kl=function(t){return hT(t).replace(/\./g,"")},Gl=function(t){try{return eh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lx(t){return dT(void 0,t)}function dT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vx(n)||(t[n]=dT(t[n],e[n]));return t}function Vx(t){return t!=="__proto__"}/**
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
 */function $x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fx=()=>$x().__FIREBASE_DEFAULTS__,Ux=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gl(t[1]);return e&&JSON.parse(e)},gm=()=>{try{return Fx()||Ux()||Bx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fT=t=>{var e,n;return(n=(e=gm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jx=t=>{const e=fT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pT=()=>{var t;return(t=gm())===null||t===void 0?void 0:t.config},mT=t=>{var e;return(e=gm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ba{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Hx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Kl(JSON.stringify(n)),Kl(JSON.stringify(o)),a].join(".")}/**
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function gT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yT(){return lT.NODE_ADMIN===!0}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function vT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function zx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qx="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qx,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function Kx(t,e){return t.replace(Gx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gx=/\{\$([^}]+)}/g;/**
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
 */function ja(t){return JSON.parse(t)}function $t(t){return JSON.stringify(t)}/**
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
 */const wT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ja(Gl(s[0])||""),n=ja(Gl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Yx=function(t){const e=wT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qx=function(t){const e=wT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function co(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uy(s)&&Uy(o)){if(!Ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uy(t){return t!==null&&typeof t=="object"}/**
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
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const p=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Xx(t,e){const n=new Zx(t,e);return n.subscribe.bind(n)}class Zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_d),i.error===void 0&&(i.error=_d),i.complete===void 0&&(i.complete=_d);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _d(){}function tD(t,e){return`${t} failed: ${e} argument `}/**
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
 */const nD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},th=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const rD=1e3,iD=2,sD=4*60*60*1e3,oD=.5;function By(t,e=rD,n=iD){const r=e*Math.pow(n,t),i=Math.round(oD*r*(Math.random()-.5)*2);return Math.min(sD,r+i)}/**
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
 */function dn(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class aD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ba;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lD(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cD(t){return t===ji?void 0:t}function lD(t){return t.instantiationMode==="EAGER"}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const hD={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},dD=Oe.INFO,fD={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},pD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=dD,this._logHandler=pD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const mD=(t,e)=>e.some(n=>t instanceof n);let jy,Hy;function gD(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _D(){return Hy||(Hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ET=new WeakMap,Pf=new WeakMap,TT=new WeakMap,yd=new WeakMap,vm=new WeakMap;function yD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ET.set(n,t)}).catch(()=>{}),vm.set(e,t),e}function vD(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wD(t){kf=t(kf)}function ED(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return TT.set(r,e.sort?e.sort():[e]),_i(r)}:_D().includes(t)?function(...e){return t.apply(vd(this),e),_i(ET.get(this))}:function(...e){return _i(t.apply(vd(this),e))}}function TD(t){return typeof t=="function"?ED(t):(t instanceof IDBTransaction&&vD(t),mD(t,gD())?new Proxy(t,kf):t)}function _i(t){if(t instanceof IDBRequest)return yD(t);if(yd.has(t))return yd.get(t);const e=TD(t);return e!==t&&(yd.set(t,e),vm.set(e,t)),e}const vd=t=>vm.get(t);function ID(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_i(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_i(o.result),c.oldVersion,c.newVersion,_i(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bD=["get","getKey","getAll","getAllKeys","count"],AD=["put","add","delete","clear"],wd=new Map;function Wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bD.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return wd.set(e,s),s}wD(t=>({...t,get:(e,n,r)=>Wy(e,n)||t.get(e,n,r),has:(e,n)=>!!Wy(e,n)||t.has(e,n)}));/**
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
 */class CD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nf="@firebase/app",zy="0.9.17";/**
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
 */const ss=new Po("@firebase/app"),SD="@firebase/app-compat",PD="@firebase/analytics-compat",kD="@firebase/analytics",ND="@firebase/app-check-compat",OD="@firebase/app-check",xD="@firebase/auth",DD="@firebase/auth-compat",MD="@firebase/database",LD="@firebase/database-compat",VD="@firebase/functions",$D="@firebase/functions-compat",FD="@firebase/installations",UD="@firebase/installations-compat",BD="@firebase/messaging",jD="@firebase/messaging-compat",HD="@firebase/performance",WD="@firebase/performance-compat",zD="@firebase/remote-config",qD="@firebase/remote-config-compat",KD="@firebase/storage",GD="@firebase/storage-compat",YD="@firebase/firestore",QD="@firebase/firestore-compat",JD="firebase",XD="10.3.0";/**
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
 */const Of="[DEFAULT]",ZD={[Nf]:"fire-core",[SD]:"fire-core-compat",[kD]:"fire-analytics",[PD]:"fire-analytics-compat",[OD]:"fire-app-check",[ND]:"fire-app-check-compat",[xD]:"fire-auth",[DD]:"fire-auth-compat",[MD]:"fire-rtdb",[LD]:"fire-rtdb-compat",[VD]:"fire-fn",[$D]:"fire-fn-compat",[FD]:"fire-iid",[UD]:"fire-iid-compat",[BD]:"fire-fcm",[jD]:"fire-fcm-compat",[HD]:"fire-perf",[WD]:"fire-perf-compat",[zD]:"fire-rc",[qD]:"fire-rc-compat",[KD]:"fire-gcs",[GD]:"fire-gcs-compat",[YD]:"fire-fst",[QD]:"fire-fst-compat","fire-js":"fire-js",[JD]:"fire-js-all"};/**
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
 */const Jl=new Map,xf=new Map;function eM(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(xf.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;xf.set(e,t);for(const n of Jl.values())eM(n,t);return!0}function mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yi=new Ni("app","Firebase",tM);/**
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
 */class nM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=XD;function IT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Of,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=pT()),!n)throw yi.create("no-options");const s=Jl.get(i);if(s){if(Ql(n,s.options)&&Ql(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new uD(i);for(const c of xf.values())o.addComponent(c);const a=new nM(n,r,o);return Jl.set(i,a),a}function wm(t=Of){const e=Jl.get(t);if(!e&&t===Of&&pT())return IT();if(!e)throw yi.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let i=(r=ZD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}vn(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rM="firebase-heartbeat-database",iM=1,Ha="firebase-heartbeat-store";let Ed=null;function bT(){return Ed||(Ed=ID(rM,iM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ha)}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function sM(t){try{return await(await bT()).transaction(Ha).objectStore(Ha).get(AT(t))}catch(e){if(e instanceof Fn)ss.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function qy(t,e){try{const r=(await bT()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,AT(t)),await r.done}catch(n){if(n instanceof Fn)ss.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oM=1024,aM=30*24*60*60*1e3;class cM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=aM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ky(),{heartbeatsToSend:n,unsentEntries:r}=lM(this._heartbeatsCache.heartbeats),i=Kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ky(){return new Date().toISOString().substring(0,10)}function lM(t,e=oM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?vT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gy(t){return Kl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hM(t){vn(new fn("platform-logger",e=>new CD(e),"PRIVATE")),vn(new fn("heartbeat",e=>new cM(e),"PRIVATE")),Ft(Nf,zy,t),Ft(Nf,zy,"esm2017"),Ft("fire-js","")}hM("");var dM="firebase",fM="10.3.0";/**
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
 */Ft(dM,fM,"app");const pM=(t,e)=>e.some(n=>t instanceof n);let Yy,Qy;function mM(){return Yy||(Yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gM(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Df=new WeakMap,RT=new WeakMap,Td=new WeakMap,Em=new WeakMap;function _M(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function yM(t){if(Df.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Df.set(t,e)}let Mf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vM(t){Mf=t(Mf)}function wM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Id(this),e,...n);return RT.set(r,e.sort?e.sort():[e]),vi(r)}:gM().includes(t)?function(...e){return t.apply(Id(this),e),vi(CT.get(this))}:function(...e){return vi(t.apply(Id(this),e))}}function EM(t){return typeof t=="function"?wM(t):(t instanceof IDBTransaction&&yM(t),pM(t,mM())?new Proxy(t,Mf):t)}function vi(t){if(t instanceof IDBRequest)return _M(t);if(Td.has(t))return Td.get(t);const e=EM(t);return e!==t&&(Td.set(t,e),Em.set(e,t)),e}const Id=t=>Em.get(t);function TM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vi(o.result),c.oldVersion,c.newVersion,vi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const IM=["get","getKey","getAll","getAllKeys","count"],bM=["put","add","delete","clear"],bd=new Map;function Jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IM.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return bd.set(e,s),s}vM(t=>({...t,get:(e,n,r)=>Jy(e,n)||t.get(e,n,r),has:(e,n)=>!!Jy(e,n)||t.has(e,n)}));const ST="@firebase/installations",Tm="0.6.4";/**
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
 */const PT=1e4,kT=`w:${Tm}`,NT="FIS_v2",AM="https://firebaseinstallations.googleapis.com/v1",CM=60*60*1e3,RM="installations",SM="Installations";/**
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
 */const PM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new Ni(RM,SM,PM);function OT(t){return t instanceof Fn&&t.code.includes("request-failed")}/**
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
 */function xT({projectId:t}){return`${AM}/projects/${t}/installations`}function DT(t){return{token:t.token,requestStatus:2,expiresIn:NM(t.expiresIn),creationTime:Date.now()}}async function MT(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kM(t,{refreshToken:e}){const n=LT(t);return n.append("Authorization",OM(e)),n}async function VT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NM(t){return Number(t.replace("s","000"))}function OM(t){return`${NT} ${t}`}/**
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
 */async function xM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xT(t),i=LT(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:NT,appId:t.appId,sdkVersion:kT},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await VT(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:DT(l.authToken)}}else throw await MT("Create Installation",c)}/**
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
 */function $T(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function DM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MM=/^[cdef][\w-]{21}$/,Lf="";function LM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VM(t);return MM.test(n)?n:Lf}catch{return Lf}}function VM(t){return DM(t).substr(0,22)}/**
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
 */function nh(t){return`${t.appName}!${t.appId}`}/**
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
 */const FT=new Map;function UT(t,e){const n=nh(t);BT(n,e),$M(n,e)}function BT(t,e){const n=FT.get(t);if(n)for(const r of n)r(e)}function $M(t,e){const n=FM();n&&n.postMessage({key:t,fid:e}),UM()}let Ki=null;function FM(){return!Ki&&"BroadcastChannel"in self&&(Ki=new BroadcastChannel("[Firebase] FID Change"),Ki.onmessage=t=>{BT(t.data.key,t.data.fid)}),Ki}function UM(){FT.size===0&&Ki&&(Ki.close(),Ki=null)}/**
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
 */const BM="firebase-installations-database",jM=1,as="firebase-installations-store";let Ad=null;function Im(){return Ad||(Ad=TM(BM,jM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),Ad}async function Xl(t,e){const n=nh(t),i=(await Im()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&UT(t,e.fid),e}async function jT(t){const e=nh(t),r=(await Im()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function rh(t,e){const n=nh(t),i=(await Im()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&UT(t,a.fid),a}/**
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
 */async function bm(t){let e;const n=await rh(t.appConfig,r=>{const i=HM(r),s=WM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HM(t){const e=t||{fid:LM(),registrationStatus:0};return HT(e)}function WM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qM(t)}:{installationEntry:e}}async function zM(t,e){try{const n=await xM(t,e);return Xl(t.appConfig,n)}catch(n){throw OT(n)&&n.customData.serverCode===409?await jT(t.appConfig):await Xl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qM(t){let e=await Xy(t.appConfig);for(;e.registrationStatus===1;)await $T(100),e=await Xy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bm(t);return r||n}return e}function Xy(t){return rh(t,e=>{if(!e)throw os.create("installation-not-found");return HT(e)})}function HT(t){return KM(t)?{fid:t.fid,registrationStatus:0}:t}function KM(t){return t.registrationStatus===1&&t.registrationTime+PT<Date.now()}/**
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
 */async function GM({appConfig:t,heartbeatServiceProvider:e},n){const r=YM(t,n),i=kM(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:kT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await VT(()=>fetch(r,a));if(c.ok){const l=await c.json();return DT(l)}else throw await MT("Generate Auth Token",c)}function YM(t,{fid:e}){return`${xT(t)}/${e}/authTokens:generate`}/**
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
 */async function Am(t,e=!1){let n;const r=await rh(t.appConfig,s=>{if(!WT(s))throw os.create("not-registered");const o=s.authToken;if(!e&&XM(o))return s;if(o.requestStatus===1)return n=QM(t,e),s;{if(!navigator.onLine)throw os.create("app-offline");const a=eL(s);return n=JM(t,a),a}});return n?await n:r.authToken}async function QM(t,e){let n=await Zy(t.appConfig);for(;n.authToken.requestStatus===1;)await $T(100),n=await Zy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Am(t,e):r}function Zy(t){return rh(t,e=>{if(!WT(e))throw os.create("not-registered");const n=e.authToken;return tL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JM(t,e){try{const n=await GM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Xl(t.appConfig,r),n}catch(n){if(OT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xl(t.appConfig,r)}throw n}}function WT(t){return t!==void 0&&t.registrationStatus===2}function XM(t){return t.requestStatus===2&&!ZM(t)}function ZM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CM}function eL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tL(t){return t.requestStatus===1&&t.requestTime+PT<Date.now()}/**
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
 */async function nL(t){const e=t,{installationEntry:n,registrationPromise:r}=await bm(e);return r?r.catch(console.error):Am(e).catch(console.error),n.fid}/**
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
 */async function rL(t,e=!1){const n=t;return await iL(n),(await Am(n,e)).token}async function iL(t){const{registrationPromise:e}=await bm(t);e&&await e}/**
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
 */function sL(t){if(!t||!t.options)throw Cd("App Configuration");if(!t.name)throw Cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cd(t){return os.create("missing-app-config-values",{valueName:t})}/**
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
 */const zT="installations",oL="installations-internal",aL=t=>{const e=t.getProvider("app").getImmediate(),n=sL(e),r=mc(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cL=t=>{const e=t.getProvider("app").getImmediate(),n=mc(e,zT).getImmediate();return{getId:()=>nL(n),getToken:i=>rL(n,i)}};function lL(){vn(new fn(zT,aL,"PUBLIC")),vn(new fn(oL,cL,"PRIVATE"))}lL();Ft(ST,Tm);Ft(ST,Tm,"esm2017");/**
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
 */const ev="analytics",uL="firebase_id",hL="origin",dL=60*1e3,fL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cm="https://www.googletagmanager.com/gtag/js";/**
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
 */const _n=new Po("@firebase/analytics");/**
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
 */const pL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new Ni("analytics","Analytics",pL);/**
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
 */function mL(t){if(!t.startsWith(Cm)){const e=Ln.create("invalid-gtag-resource",{gtagURL:t});return _n.warn(e.message),""}return t}function qT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _L(t,e){const n=gL("firebase-js-sdk-policy",{createScriptURL:mL}),r=document.createElement("script"),i=`${Cm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await qT(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function wL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await qT(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function EL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await wL(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await vL(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function TL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=EL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function IL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cm)&&n.src.includes(t))return n;return null}/**
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
 */const bL=30,AL=1e3;class CL{constructor(e={},n=AL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const KT=new CL;function RL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function SL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:RL(r)},s=fL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function PL(t,e=KT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ln.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ln.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new OL;return setTimeout(async()=>{a.abort()},n!==void 0?n:dL),GT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function GT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=KT){var s;const{appId:o,measurementId:a}=t;try{await kL(r,e)}catch(c){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await SL(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!NL(l)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?By(n,i.intervalMillis,bL):By(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),_n.debug(`Calling attemptFetch again in ${u} millis`),GT(t,h,r,i)}}function kL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function NL(t){if(!(t instanceof Fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class OL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function DL(){if(ym())try{await vT()}catch(t){return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ML(t,e,n,r,i,s,o){var a;const c=PL(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>_n.error(m)),e.push(c);const l=DL().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);IL(s)||_L(s,u.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[hL]="firebase",p.update=!0,h!=null&&(p[uL]=h),i("config",u.measurementId,p),u.measurementId}/**
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
 */class LL{constructor(e){this.app=e}_delete(){return delete wa[this.app.options.appId],Promise.resolve()}}let wa={},tv=[];const nv={};let Rd="dataLayer",VL="gtag",rv,YT,iv=!1;function $L(){const t=[];if(gT()&&t.push("This is a browser extension environment."),zx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ln.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function FL(t,e,n){$L();const r=t.options.appId;if(!r)throw Ln.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(wa[r]!=null)throw Ln.create("already-exists",{id:r});if(!iv){yL(Rd);const{wrappedGtag:s,gtagCore:o}=TL(wa,tv,nv,Rd,VL);YT=s,rv=o,iv=!0}return wa[r]=ML(t,tv,nv,e,rv,Rd,n),new LL(t)}function UL(t,e,n,r){t=dn(t),xL(YT,wa[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const sv="@firebase/analytics",ov="0.10.0";function BL(){vn(new fn(ev,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return FL(r,i,n)},"PUBLIC")),vn(new fn("analytics-internal",t,"PRIVATE")),Ft(sv,ov),Ft(sv,ov,"esm2017");function t(e){try{const n=e.getProvider(ev).getImmediate();return{logEvent:(r,i,s)=>UL(n,r,i,s)}}catch(n){throw Ln.create("interop-component-reg-failed",{reason:n})}}}BL();var jL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Rm=Rm||{},pe=jL||self;function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HL(t){return Object.prototype.hasOwnProperty.call(t,Sd)&&t[Sd]||(t[Sd]=++WL)}var Sd="closure_uid_"+(1e9*Math.random()>>>0),WL=0;function zL(t,e,n){return t.call.apply(t.bind,arguments)}function qL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function en(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=zL:en=qL,en.apply(null,arguments)}function il(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xi(){this.s=this.s,this.o=this.o}var KL=0;xi.prototype.s=!1;xi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),KL!=0)&&HL(this)};xi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const QT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function av(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};var GL=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",()=>{},e),pe.removeEventListener("test",()=>{},e)}catch{}return t}();function Wa(t){return/^[\s\xa0]*$/.test(t)}function sh(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function ar(t){return sh().indexOf(t)!=-1}function Pm(t){return Pm[" "](t),t}Pm[" "]=function(){};function YL(t,e){var n=B2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QL=ar("Opera"),lo=ar("Trident")||ar("MSIE"),JT=ar("Edge"),Vf=JT||lo,XT=ar("Gecko")&&!(sh().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge"))&&!(ar("Trident")||ar("MSIE"))&&!ar("Edge"),JL=sh().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge");function ZT(){var t=pe.document;return t?t.documentMode:void 0}var $f;e:{var Pd="",kd=function(){var t=sh();if(XT)return/rv:([^\);]+)(\)|;)/.exec(t);if(JT)return/Edge\/([\d\.]+)/.exec(t);if(lo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JL)return/WebKit\/(\S+)/.exec(t);if(QL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kd&&(Pd=kd?kd[1]:""),lo){var Nd=ZT();if(Nd!=null&&Nd>parseFloat(Pd)){$f=String(Nd);break e}}$f=Pd}var Ff;if(pe.document&&lo){var cv=ZT();Ff=cv||parseInt($f,10)||void 0}else Ff=void 0;var XL=Ff;function za(t,e){if(tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(XT){e:{try{Pm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&za.$.h.call(this)}}xt(za,tn);var ZL={2:"touch",3:"pen",4:"mouse"};za.prototype.h=function(){za.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _c="closure_listenable_"+(1e6*Math.random()|0),e2=0;function t2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++e2,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function km(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function n2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function eI(t){const e={};for(const n in t)e[n]=t[n];return e}const lv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lv.length;s++)n=lv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Bf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new t2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Uf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=QT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Nm="closure_lm_"+(1e6*Math.random()|0),Od={};function nI(t,e,n,r,i){if(r&&r.once)return iI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)nI(t,e[s],n,r,i);return null}return n=Dm(n),t&&t[_c]?t.O(e,n,gc(r)?!!r.capture:!!r,i):rI(t,e,n,!1,r,i)}function rI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=gc(i)?!!i.capture:!!i,a=xm(t);if(a||(t[Nm]=a=new ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=r2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(oI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function r2(){function t(n){return e.call(t.src,t.listener,n)}const e=i2;return t}function iI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)iI(t,e[s],n,r,i);return null}return n=Dm(n),t&&t[_c]?t.P(e,n,gc(r)?!!r.capture:!!r,i):rI(t,e,n,!0,r,i)}function sI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)sI(t,e[s],n,r,i);else r=gc(r)?!!r.capture:!!r,n=Dm(n),t&&t[_c]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Bf(s,n,r,i),-1<n&&(oh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=xm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bf(e,n,r,i)),(n=-1<t?e[t]:null)&&Om(n))}function Om(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_c])Uf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(oI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xm(e))?(Uf(n,t),n.h==0&&(n.src=null,e[Nm]=null)):oh(t)}}}function oI(t){return t in Od?Od[t]:Od[t]="on"+t}function i2(t,e){if(t.fa)t=!0;else{e=new za(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Om(t),t=n.call(r,e)}return t}function xm(t){return t=t[Nm],t instanceof ah?t:null}var xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dm(t){return typeof t=="function"?t:(t[xd]||(t[xd]=function(e){return t.handleEvent(e)}),t[xd])}function Ot(){xi.call(this),this.i=new ah(this),this.S=this,this.J=null}xt(Ot,xi);Ot.prototype[_c]=!0;Ot.prototype.removeEventListener=function(t,e,n,r){sI(this,t,e,n,r)};function Ut(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tn(e,t);else if(e instanceof tn)e.target=e.target||t;else{var i=e;e=new tn(r,t),tI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=sl(o,r,!0,e)&&i}if(o=e.g=t,i=sl(o,r,!0,e)&&i,i=sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=sl(o,r,!1,e)&&i}Ot.prototype.N=function(){if(Ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};Ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Uf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mm=pe.JSON.stringify;class s2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function o2(){var t=Lm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class a2{constructor(){this.h=this.g=null}add(e,n){const r=aI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var aI=new s2(()=>new c2,t=>t.reset());class c2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function l2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function u2(t){pe.setTimeout(()=>{throw t},0)}let qa,Ka=!1,Lm=new a2,cI=()=>{const t=pe.Promise.resolve(void 0);qa=()=>{t.then(h2)}};var h2=()=>{for(var t;t=o2();){try{t.h.call(t.g)}catch(n){u2(n)}var e=aI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ka=!1};function ch(t,e){Ot.call(this),this.h=t||1,this.g=e||pe,this.j=en(this.qb,this),this.l=Date.now()}xt(ch,Ot);G=ch.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ut(this,"tick"),this.ga&&(Vm(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){ch.$.N.call(this),Vm(this),delete this.g};function $m(t,e,n){if(typeof t=="function")n&&(t=en(t,n));else if(t&&typeof t.handleEvent=="function")t=en(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function lI(t){t.g=$m(()=>{t.g=null,t.i&&(t.i=!1,lI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class d2 extends xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lI(this)}N(){super.N(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ga(t){xi.call(this),this.h=t,this.g={}}xt(Ga,xi);var uv=[];function uI(t,e,n,r){Array.isArray(n)||(n&&(uv[0]=n.toString()),n=uv);for(var i=0;i<n.length;i++){var s=nI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function hI(t){km(t.g,function(e,n){this.g.hasOwnProperty(n)&&Om(e)},t),t.g={}}Ga.prototype.N=function(){Ga.$.N.call(this),hI(this)};Ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lh(){this.g=!0}lh.prototype.Ea=function(){this.g=!1};function f2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function p2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+g2(t,n)+(r?" "+r:"")})}function m2(t,e){t.info(function(){return"TIMEOUT: "+e})}lh.prototype.info=function(){};function g2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mm(n)}catch{return e}}var vs={},hv=null;function uh(){return hv=hv||new Ot}vs.Ta="serverreachability";function dI(t){tn.call(this,vs.Ta,t)}xt(dI,tn);function Ya(t){const e=uh();Ut(e,new dI(e))}vs.STAT_EVENT="statevent";function fI(t,e){tn.call(this,vs.STAT_EVENT,t),this.stat=e}xt(fI,tn);function un(t){const e=uh();Ut(e,new fI(e,t))}vs.Ua="timingevent";function pI(t,e){tn.call(this,vs.Ua,t),this.size=e}xt(pI,tn);function yc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fm(){}Fm.prototype.h=null;function dv(t){return t.h||(t.h=t.i())}function gI(){}var vc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Um(){tn.call(this,"d")}xt(Um,tn);function Bm(){tn.call(this,"c")}xt(Bm,tn);var jf;function dh(){}xt(dh,Fm);dh.prototype.g=function(){return new XMLHttpRequest};dh.prototype.i=function(){return{}};jf=new dh;function wc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ga(this),this.P=_2,t=Vf?125:void 0,this.V=new ch(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _I}function _I(){this.i=null,this.g="",this.h=!1}var _2=45e3,Hf={},Zl={};G=wc.prototype;G.setTimeout=function(t){this.P=t};function Wf(t,e,n){t.L=1,t.v=ph(Wr(e)),t.s=n,t.S=!0,yI(t,null)}function yI(t,e){t.G=Date.now(),Ec(t),t.A=Wr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),CI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new _I,t.g=KI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new d2(en(t.Pa,t,t.g),t.O)),uI(t.U,t.g,"readystatechange",t.nb),e=t.I?eI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ya(),f2(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&cr(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=cr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Vf||this.g&&(this.h.h||this.g.ja()||gv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ya(3):Ya(2)),fh(this);var n=this.g.da();this.ca=n;t:if(vI(this)){var r=gv(this.g);t="";var i=r.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gi(this),Ea(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,p2(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wa(a)){var l=a;break t}}l=null}if(n=l)Vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zf(this,n);else{this.i=!1,this.o=3,un(12),Gi(this),Ea(this);break e}}this.S?(wI(this,u,o),Vf&&this.i&&u==3&&(uI(this.U,this.V,"tick",this.mb),this.V.start())):(Vs(this.j,this.m,o,null),zf(this,o)),u==4&&Gi(this),this.i&&!this.J&&(u==4?HI(this.l,this):(this.i=!1,Ec(this)))}else $2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,un(12)):(this.o=0,un(13)),Gi(this),Ea(this)}}}catch{}finally{}};function vI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=y2(t,n),i==Zl){e==4&&(t.o=4,un(14),r=!1),Vs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hf){t.o=4,un(15),Vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vs(t.j,t.m,i,null),zf(t,i);vI(t)&&i!=Zl&&i!=Hf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,un(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Km(e),e.M=!0,un(11))):(Vs(t.j,t.m,n,"[Invalid Chunked Response]"),Gi(t),Ea(t))}G.mb=function(){if(this.g){var t=cr(this.g),e=this.g.ja();this.C<e.length&&(fh(this),wI(this,t,e),this.i&&t!=4&&Ec(this))}};function y2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zl:(n=Number(e.substring(n,r)),isNaN(n)?Hf:(r+=1,r+n>e.length?Zl:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Gi(this)};function Ec(t){t.Y=Date.now()+t.P,EI(t,t.P)}function EI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yc(en(t.lb,t),e)}function fh(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(m2(this.j,this.A),this.L!=2&&(Ya(),un(17)),Gi(this),this.o=2,Ea(this)):EI(this,this.Y-t)};function Ea(t){t.l.H==0||t.J||HI(t.l,t)}function Gi(t){fh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vm(t.V),hI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qf(n.i,t))){if(!t.K&&qf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nu(n),yh(n);else break e;qm(n),un(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=yc(en(n.ib,n),6e3));if(1>=PI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yi(n,11)}else if((t.K||n.g==t)&&nu(n),!Wa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jm(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ze(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=qI(r,r.J?r.pa:null,r.Y),o.K){kI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(fh(a),Ec(a)),r.g=o}else BI(r);0<n.j.length&&vh(n)}else l[0]!="stop"&&l[0]!="close"||Yi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yi(n,7):zm(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ya(4)}catch{}}function v2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function w2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function TI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=w2(t),r=v2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var II=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ns(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ns){this.h=t.h,eu(this,t.j),this.s=t.s,this.g=t.g,tu(this,t.m),this.l=t.l;var e=t.i,n=new Qa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fv(this,n),this.o=t.o}else t&&(e=String(t).match(II))?(this.h=!1,eu(this,e[1]||"",!0),this.s=aa(e[2]||""),this.g=aa(e[3]||"",!0),tu(this,e[4]),this.l=aa(e[5]||"",!0),fv(this,e[6]||"",!0),this.o=aa(e[7]||"")):(this.h=!1,this.i=new Qa(null,this.h))}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ca(e,pv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ca(e,pv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ca(n,n.charAt(0)=="/"?b2:I2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ca(n,C2)),t.join("")};function Wr(t){return new ns(t)}function eu(t,e,n){t.j=n?aa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fv(t,e,n){e instanceof Qa?(t.i=e,R2(t.i,t.h)):(n||(e=ca(e,A2)),t.i=new Qa(e,t.h))}function Ze(t,e,n){t.i.set(e,n)}function ph(t){return Ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function aa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ca(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,T2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pv=/[#\/\?@]/g,I2=/[#\?:]/g,b2=/[#\?]/g,A2=/[#\?@]/g,C2=/#/g;function Qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Di(t){t.g||(t.g=new Map,t.h=0,t.i&&E2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=Qa.prototype;G.add=function(t,e){Di(this),this.i=null,t=ko(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bI(t,e){Di(t),e=ko(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function AI(t,e){return Di(t),e=ko(t,e),t.g.has(e)}G.forEach=function(t,e){Di(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Di(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Di(this);let e=[];if(typeof t=="string")AI(this,t)&&(e=e.concat(this.g.get(ko(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Di(this),this.i=null,t=ko(this,t),AI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function CI(t,e,n){bI(t,e),0<n.length&&(t.i=null,t.g.set(ko(t,e),Sm(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ko(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function R2(t,e){e&&!t.j&&(Di(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bI(this,r),CI(this,i,n))},t)),t.j=e}var S2=class{constructor(t,e){this.g=t,this.map=e}};function RI(t){this.l=t||P2,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ka&&pe.g.Ka()&&pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P2=10;function SI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PI(t){return t.h?1:t.g?t.g.size:0}function qf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jm(t,e){t.g?t.g.add(e):t.h=e}function kI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RI.prototype.cancel=function(){if(this.i=NI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function NI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sm(t.i)}var k2=class{stringify(t){return pe.JSON.stringify(t,void 0)}parse(t){return pe.JSON.parse(t,void 0)}};function N2(){this.g=new k2}function O2(t,e,n){const r=n||"";try{TI(t,function(i,s){let o=i;gc(i)&&(o=Mm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function x2(t,e){const n=new lh;if(pe.Image){const r=new Image;r.onload=il(ol,n,r,"TestLoadImage: loaded",!0,e),r.onerror=il(ol,n,r,"TestLoadImage: error",!1,e),r.onabort=il(ol,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=il(ol,n,r,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ol(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function mh(t){this.l=t.fc||null,this.j=t.ob||!1}xt(mh,Fm);mh.prototype.g=function(){return new gh(this.l,this.j)};mh.prototype.i=function(t){return function(){return t}}({});function gh(t,e){Ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(gh,Ot);var Hm=0;G=gh.prototype;G.open=function(t,e){if(this.readyState!=Hm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ja(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tc(this)),this.readyState=Hm};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ja(this)),this.g&&(this.readyState=3,Ja(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tc(this):Ja(this),this.readyState==3&&OI(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Tc(this))};G.Ya=function(t){this.g&&(this.response=t,Tc(this))};G.ka=function(){this.g&&Tc(this)};function Tc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ja(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ja(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D2=pe.JSON.parse;function ot(t){Ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xI,this.L=this.M=!1}xt(ot,Ot);var xI="",M2=/^https?$/i,L2=["POST","PUT"];G=ot.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jf.g(),this.C=this.u?dv(this.u):dv(jf),this.g.onreadystatechange=en(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){mv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=QT(L2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LI(this),0<this.B&&((this.L=V2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.ua,this)):this.A=$m(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mv(this,s)}};function V2(t){return lo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof Rm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function mv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DI(t),_h(t)}function DI(t){t.F||(t.F=!0,Ut(t,"complete"),Ut(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ut(this,"complete"),Ut(this,"abort"),_h(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_h(this,!0)),ot.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?MI(this):this.kb())};G.kb=function(){MI(this)};function MI(t){if(t.h&&typeof Rm<"u"&&(!t.C[1]||cr(t)!=4||t.da()!=2)){if(t.v&&cr(t)==4)$m(t.La,0,t);else if(Ut(t,"readystatechange"),cr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(II)[1]||null;!i&&pe.self&&pe.self.location&&(i=pe.self.location.protocol.slice(0,-1)),r=!M2.test(i?i.toLowerCase():"")}n=r}if(n)Ut(t,"complete"),Ut(t,"success");else{t.m=6;try{var s=2<cr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",DI(t)}}finally{_h(t)}}}}function _h(t,e){if(t.g){LI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function LI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function cr(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D2(e)}};function gv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $2(t){const e={};t=(t.g&&2<=cr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Wa(t[r]))continue;var n=l2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}n2(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function VI(t){let e="";return km(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ze(t,e,n))}function Qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $I(t){this.Ga=0,this.j=[],this.l=new lh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qo("baseRetryDelayMs",5e3,t),this.hb=Qo("retryDelaySeedMs",1e4,t),this.eb=Qo("forwardChannelMaxRetries",2,t),this.xa=Qo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RI(t&&t.concurrentRequestLimit),this.Ja=new N2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=$I.prototype;G.ra=8;G.H=1;function zm(t){if(FI(t),t.H==3){var e=t.W++,n=Wr(t.I);if(Ze(n,"SID",t.K),Ze(n,"RID",e),Ze(n,"TYPE","terminate"),Ic(t,n),e=new wc(t,t.l,e),e.L=2,e.v=ph(Wr(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon)try{n=pe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=KI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ec(e)}zI(t)}function yh(t){t.g&&(Km(t),t.g.cancel(),t.g=null)}function FI(t){yh(t),t.u&&(pe.clearTimeout(t.u),t.u=null),nu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function vh(t){if(!SI(t.i)&&!t.m){t.m=!0;var e=t.Na;qa||cI(),Ka||(qa(),Ka=!0),Lm.add(e,t),t.C=0}}function F2(t,e){return PI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=yc(en(t.Na,t,e),WI(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=eI(s),tI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=UI(this,i,e),n=Wr(this.I),Ze(n,"RID",t),Ze(n,"CVER",22),this.F&&Ze(n,"X-HTTP-Session-Id",this.F),Ic(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(VI(s)))+"&"+e:this.o&&Wm(n,this.o,s)),jm(this.i,i),this.bb&&Ze(n,"TYPE","init"),this.P?(Ze(n,"$req",e),Ze(n,"SID","null"),i.aa=!0,Wf(i,n,null)):Wf(i,n,e),this.H=2}}else this.H==3&&(t?_v(this,t):this.j.length==0||SI(this.i)||_v(this))};function _v(t,e){var n;e?n=e.m:n=t.W++;const r=Wr(t.I);Ze(r,"SID",t.K),Ze(r,"RID",n),Ze(r,"AID",t.V),Ic(t,r),t.o&&t.s&&Wm(r,t.o,t.s),n=new wc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=UI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jm(t.i,n),Wf(n,r,e)}function Ic(t,e){t.na&&km(t.na,function(n,r){Ze(e,r,n)}),t.h&&TI({},function(n,r){Ze(e,r,n)})}function UI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?en(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{O2(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function BI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qa||cI(),Ka||(qa(),Ka=!0),Lm.add(e,t),t.A=0}}function qm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=yc(en(t.Ma,t),WI(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,jI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=yc(en(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,un(10),yh(this),jI(this))};function Km(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function jI(t){t.g=new wc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Wr(t.wa);Ze(e,"RID","rpc"),Ze(e,"SID",t.K),Ze(e,"AID",t.V),Ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ze(e,"TO",t.qa),Ze(e,"TYPE","xmlhttp"),Ic(t,e),t.o&&t.s&&Wm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ph(Wr(e)),n.s=null,n.S=!0,yI(n,t)}G.ib=function(){this.v!=null&&(this.v=null,yh(this),qm(this),un(19))};function nu(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function HI(t,e){var n=null;if(t.g==e){nu(t),Km(t),t.g=null;var r=2}else if(qf(t.i,e))n=e.F,kI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=uh(),Ut(r,new pI(r,n)),vh(t)}else BI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&F2(t,e)||r==2&&qm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yi(t,5);break;case 4:Yi(t,10);break;case 3:Yi(t,6);break;default:Yi(t,2)}}}function WI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Yi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=en(t.pb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||eu(n,"https"),ph(n)),x2(n.toString(),r)}else un(2);t.H=0,t.h&&t.h.za(e),zI(t),FI(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),un(2)):(this.l.info("Failed to ping google.com"),un(1))};function zI(t){if(t.H=0,t.ma=[],t.h){const e=NI(t.i);(e.length!=0||t.j.length!=0)&&(av(t.ma,e),av(t.ma,t.j),t.i.i.length=0,Sm(t.j),t.j.length=0),t.h.ya()}}function qI(t,e,n){var r=n instanceof ns?Wr(n):new ns(n);if(r.g!="")e&&(r.g=e+"."+r.g),tu(r,r.m);else{var i=pe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ns(null);r&&eu(s,r),e&&(s.g=e),i&&tu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ze(r,n,e),Ze(r,"VER",t.ra),Ic(t,r),r}function KI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ot(new mh({ob:!0})):new ot(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function GI(){}G=GI.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function ru(){if(lo&&!(10<=Number(XL)))throw Error("Environmental error: no available transport.")}ru.prototype.g=function(t,e){return new Sn(t,e)};function Sn(t,e){Ot.call(this),this.g=new $I(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new No(this)}xt(Sn,Ot);Sn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;un(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qI(t,null,t.Y),vh(t)};Sn.prototype.close=function(){zm(this.g)};Sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mm(t),t=n);e.j.push(new S2(e.fb++,t)),e.H==3&&vh(e)};Sn.prototype.N=function(){this.g.h=null,delete this.j,zm(this.g),delete this.g,Sn.$.N.call(this)};function YI(t){Um.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xt(YI,Um);function QI(){Bm.call(this),this.status=1}xt(QI,Bm);function No(t){this.g=t}xt(No,GI);No.prototype.Ba=function(){Ut(this.g,"a")};No.prototype.Aa=function(t){Ut(this.g,new YI(t))};No.prototype.za=function(t){Ut(this.g,new QI)};No.prototype.ya=function(){Ut(this.g,"b")};function U2(){this.blockSize=-1}function tr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(tr,U2);tr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}tr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Dd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Dd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Dd(this,r),i=0;break}}this.h=i,this.i+=e};tr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function We(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var B2={};function Gm(t){return-128<=t&&128>t?YL(t,function(e){return new We([e|0],0>e?-1:0)}):new We([t|0],0>t?-1:0)}function lr(t){if(isNaN(t)||!isFinite(t))return Ws;if(0>t)return Lt(lr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Kf;return new We(e,0)}function JI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Lt(JI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lr(Math.pow(e,8)),r=Ws,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=lr(Math.pow(e,s)),r=r.R(s).add(lr(o))):(r=r.R(n),r=r.add(lr(o)))}return r}var Kf=4294967296,Ws=Gm(0),Gf=Gm(1),yv=Gm(16777216);G=We.prototype;G.ea=function(){if(xn(this))return-Lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Kf+r)*e,e*=Kf}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Lr(this))return"0";if(xn(this))return"-"+Lt(this).toString(t);for(var e=lr(Math.pow(t,6)),n=this,r="";;){var i=su(n,e).g;n=iu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Lr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Lr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xn(t){return t.h==-1}G.X=function(t){return t=iu(this,t),xn(t)?-1:Lr(t)?0:1};function Lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new We(n,~t.h).add(Gf)}G.abs=function(){return xn(this)?Lt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new We(n,n[n.length-1]&-2147483648?-1:0)};function iu(t,e){return t.add(Lt(e))}G.R=function(t){if(Lr(this)||Lr(t))return Ws;if(xn(this))return xn(t)?Lt(this).R(Lt(t)):Lt(Lt(this).R(t));if(xn(t))return Lt(this.R(Lt(t)));if(0>this.X(yv)&&0>t.X(yv))return lr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,al(n,2*r+2*i),n[2*r+2*i+1]+=s*c,al(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,al(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,al(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new We(n,0)};function al(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Jo(t,e){this.g=t,this.h=e}function su(t,e){if(Lr(e))throw Error("division by zero");if(Lr(t))return new Jo(Ws,Ws);if(xn(t))return e=su(Lt(t),e),new Jo(Lt(e.g),Lt(e.h));if(xn(e))return e=su(t,Lt(e)),new Jo(Lt(e.g),e.h);if(30<t.g.length){if(xn(t)||xn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Gf,r=e;0>=r.X(t);)n=vv(n),r=vv(r);var i=ks(n,1),s=ks(r,1);for(r=ks(r,2),n=ks(n,2);!Lr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ks(r,1),n=ks(n,1)}return e=iu(t,i.R(e)),new Jo(i,e)}for(i=Ws;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lr(n),o=s.R(e);xn(o)||0<o.X(t);)n-=r,s=lr(n),o=s.R(e);Lr(s)&&(s=Gf),i=i.add(s),t=iu(t,o)}return new Jo(i,t)}G.gb=function(t){return su(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new We(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new We(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new We(n,this.h^t.h)};function vv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new We(n,t.h)}function ks(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new We(i,t.h)}ru.prototype.createWebChannel=ru.prototype.g;Sn.prototype.send=Sn.prototype.u;Sn.prototype.open=Sn.prototype.m;Sn.prototype.close=Sn.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;mI.COMPLETE="complete";gI.EventType=vc;vc.OPEN="a";vc.CLOSE="b";vc.ERROR="c";vc.MESSAGE="d";Ot.prototype.listen=Ot.prototype.O;ot.prototype.listenOnce=ot.prototype.P;ot.prototype.getLastError=ot.prototype.Sa;ot.prototype.getLastErrorCode=ot.prototype.Ia;ot.prototype.getStatus=ot.prototype.da;ot.prototype.getResponseJson=ot.prototype.Wa;ot.prototype.getResponseText=ot.prototype.ja;ot.prototype.send=ot.prototype.ha;ot.prototype.setWithCredentials=ot.prototype.Oa;tr.prototype.digest=tr.prototype.l;tr.prototype.reset=tr.prototype.reset;tr.prototype.update=tr.prototype.j;We.prototype.add=We.prototype.add;We.prototype.multiply=We.prototype.R;We.prototype.modulo=We.prototype.gb;We.prototype.compare=We.prototype.X;We.prototype.toNumber=We.prototype.ea;We.prototype.toString=We.prototype.toString;We.prototype.getBits=We.prototype.D;We.fromNumber=lr;We.fromString=JI;var j2=function(){return new ru},H2=function(){return uh()},Md=hh,W2=mI,z2=vs,wv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cl=gI,q2=ot,K2=tr,zs=We;const Ev="@firebase/firestore";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let Oo="10.3.0";/**
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
 */const cs=new Po("@firebase/firestore");function Tv(){return cs.logLevel}function ee(t,...e){if(cs.logLevel<=Oe.DEBUG){const n=e.map(Ym);cs.debug(`Firestore (${Oo}): ${t}`,...n)}}function zr(t,...e){if(cs.logLevel<=Oe.ERROR){const n=e.map(Ym);cs.error(`Firestore (${Oo}): ${t}`,...n)}}function uo(t,...e){if(cs.logLevel<=Oe.WARN){const n=e.map(Ym);cs.warn(`Firestore (${Oo}): ${t}`,...n)}}function Ym(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+t;throw zr(e),new Error(e)}function et(t,e){t||de()}function _e(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class Y2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Q2{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new XI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Wt(e)}}class J2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new J2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(et(typeof n.token=="string"),this.R=n.token,new Z2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ZI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function $e(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new dt(0,0))}static max(){return new me(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Xa{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const nV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Xa{construct(e,n,r){return new Qt(e,n,r)}static isValidIdentifier(e){return nV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(st.fromString(e))}static fromName(e){return new ae(st.fromString(e).popFirst(5))}static empty(){return new ae(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new st(e.slice()))}}function rV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new bi(i,ae.empty(),e)}function iV(t){return new bi(t.readTime,t.key,-1)}class bi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bi(me.min(),ae.empty(),-1)}static max(){return new bi(me.max(),ae.empty(),-1)}}function sV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
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
 */const oV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==oV)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ac(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Qm.ae=-1;function wh(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function cV(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ft=class Yf{constructor(e,n){this.comparator=e,this.root=n||wi.EMPTY}insert(e,n){return new Yf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wi.BLACK,null,null))}remove(e){return new Yf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ll(this.root,e,this.comparator,!0)}},ll=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},wi=class xr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xr.RED,this.left=i??xr.EMPTY,this.right=s??xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};wi.EMPTY=null,wi.RED=!0,wi.BLACK=!1;wi.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,s){return this}insert(e,n,r){return new wi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nn{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(e){return new bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nn(this.comparator);return n.data=e,n}}class bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new qn([])}unionWith(e){let n=new nn(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tb("Invalid base64 string: "+s):s}}(e);return new sn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const lV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(et(!!t),typeof t=="string"){let e=0;const n=lV.exec(t);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?sn.fromBase64String(t):sn.fromUint8Array(t)}/**
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
 */function Jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xm(t){const e=t.mapValue.fields.__previous_value__;return Jm(e)?Xm(e):e}function Za(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class uV{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ec{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ec("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ec&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jm(t)?4:hV(t)?9007199254740991:10:de()}function _r(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Za(t).isEqual(Za(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ai(i.timestampValue),a=Ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ls(i.bytesValue).isEqual(ls(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ht(i.geoPointValue.latitude)===ht(s.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ht(i.integerValue)===ht(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ht(i.doubleValue),a=ht(s.doubleValue);return o===a?ou(o)===ou(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Iv(o)!==Iv(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!_r(o[c],a[c])))return!1;return!0}(t,e);default:return de()}}function tc(t,e){return(t.values||[]).find(n=>_r(n,e))!==void 0}function fo(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return $e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ht(s.integerValue||s.doubleValue),c=ht(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Av(t.timestampValue,e.timestampValue);case 4:return Av(Za(t),Za(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ls(s),c=ls(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=$e(a[l],c[l]);if(u!==0)return u}return $e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=$e(ht(s.latitude),ht(o.latitude));return a!==0?a:$e(ht(s.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=fo(a[l],c[l]);if(u)return u}return $e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ul.mapValue&&o===ul.mapValue)return 0;if(s===ul.mapValue)return 1;if(o===ul.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=$e(c[h],u[h]);if(p!==0)return p;const m=fo(a[c[h]],l[u[h]]);if(m!==0)return m}return $e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw de()}}function Av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=Ai(t),r=Ai(e),i=$e(n.seconds,r.seconds);return i!==0?i:$e(n.nanos,r.nanos)}function po(t){return Qf(t)}function Qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Qf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qf(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Jf(t){return!!t&&"integerValue"in t}function Zm(t){return!!t&&"arrayValue"in t}function Cv(t){return!!t&&"nullValue"in t}function Rv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function Ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=Qt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dn(Ta(this.value))}}function nb(t){const e=[];return xo(t.fields,(n,r)=>{const i=new Qt([n]);if(Il(r)){const s=nb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qn(e)}/**
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
 */class zt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,me.min(),me.min(),me.min(),Dn.empty(),0)}static newFoundDocument(e,n,r,i){return new zt(e,1,n,me.min(),r,i,0)}static newNoDocument(e,n){return new zt(e,2,n,me.min(),me.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,me.min(),me.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function Sv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=fo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function dV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rb{}class vt extends rb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pV(e,n,r):n==="array-contains"?new _V(e,r):n==="in"?new yV(e,r):n==="not-in"?new vV(e,r):n==="array-contains-any"?new wV(e,r):new vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mV(e,r):new gV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fo(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(fo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yr extends rb{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new yr(e,n)}matches(e){return ib(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ib(t){return t.op==="and"}function sb(t){return fV(t)&&ib(t)}function fV(t){for(const e of t.filters)if(e instanceof yr)return!1;return!0}function Xf(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+po(t.value);if(sb(t))return t.filters.map(e=>Xf(e)).join(",");{const e=t.filters.map(n=>Xf(n)).join(",");return`${t.op}(${e})`}}function ob(t,e){return t instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.field.isEqual(i.field)&&_r(r.value,i.value)}(t,e):t instanceof yr?function(r,i){return i instanceof yr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ob(o,i.filters[a]),!0):!1}(t,e):void de()}function ab(t){return t instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`}(t):t instanceof yr?function(n){return n.op.toString()+" {"+n.getFilters().map(ab).join(" ,")+"}"}(t):"Filter"}class pV extends vt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class mV extends vt{constructor(e,n){super(e,"in",n),this.keys=cb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gV extends vt{constructor(e,n){super(e,"not-in",n),this.keys=cb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class _V extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zm(n)&&tc(n.arrayValue,this.value)}}class yV extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tc(this.value.arrayValue,n)}}class vV extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tc(this.value.arrayValue,n)}}class wV extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tc(this.value.arrayValue,r))}}/**
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
 */class EV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function kv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EV(t,e,n,r,i,s,o)}function eg(t){const e=_e(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>po(r)).join(",")),e.he=n}return e.he}function tg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ob(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pv(t.startAt,e.startAt)&&Pv(t.endAt,e.endAt)}function Zf(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Eh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function TV(t,e,n,r,i,s,o,a){return new Eh(t,e,n,r,i,s,o,a)}function Th(t){return new Eh(t)}function Nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IV(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bV(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function AV(t){return t.collectionGroup!==null}function ba(t){const e=_e(t);if(e.Pe===null){e.Pe=[];const n=bV(e),r=IV(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ia(n)),e.Pe.push(new Ia(Qt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ia(Qt.keyField(),s))}}}return e.Pe}function qr(t){const e=_e(t);return e.Ie||(e.Ie=CV(e,ba(t))),e.Ie}function CV(t,e){if(t.limitType==="F")return kv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ia(i.field,s)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return kv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ep(t,e,n){return new Eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ih(t,e){return tg(qr(t),qr(e))&&t.limitType===e.limitType}function lb(t){return`${eg(qr(t))}|lt:${t.limitType}`}function tp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ab(i)).join(", ")}]`),wh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>po(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>po(i)).join(",")),`Target(${r})`}(qr(t))}; limitType=${t.limitType})`}function bh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Sv(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ba(r),i)||r.endAt&&!function(o,a,c){const l=Sv(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ba(r),i))}(t,e)}function RV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ub(t){return(e,n)=>{let r=!1;for(const i of ba(t)){const s=SV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SV(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?fo(c,l):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return eb(this.inner)}size(){return this.innerSize}}/**
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
 */const PV=new ft(ae.comparator);function Kr(){return PV}const hb=new ft(ae.comparator);function la(...t){let e=hb;for(const n of t)e=e.insert(n.key,n);return e}function db(t){let e=hb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qi(){return Aa()}function fb(){return Aa()}function Aa(){return new Do(t=>t.toString(),(t,e)=>t.isEqual(e))}const kV=new ft(ae.comparator),NV=new nn(ae.comparator);function we(...t){let e=NV;for(const n of t)e=e.add(n);return e}const OV=new nn($e);function xV(){return OV}/**
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
 */function pb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function mb(t){return{integerValue:""+t}}function DV(t,e){return cV(e)?mb(e):pb(t,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function MV(t,e,n){return t instanceof cu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jm(s)&&(s=Xm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof nc?_b(t,e):t instanceof rc?yb(t,e):function(i,s){const o=gb(i,s),a=Ov(o)+Ov(i.Ee);return Jf(o)&&Jf(i.Ee)?mb(a):pb(i.serializer,a)}(t,e)}function LV(t,e,n){return t instanceof nc?_b(t,e):t instanceof rc?yb(t,e):n}function gb(t,e){return t instanceof lu?function(r){return Jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class cu extends Ah{}class nc extends Ah{constructor(e){super(),this.elements=e}}function _b(t,e){const n=vb(e);for(const r of t.elements)n.some(i=>_r(i,r))||n.push(r);return{arrayValue:{values:n}}}class rc extends Ah{constructor(e){super(),this.elements=e}}function yb(t,e){let n=vb(e);for(const r of t.elements)n=n.filter(i=>!_r(i,r));return{arrayValue:{values:n}}}class lu extends Ah{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ov(t){return ht(t.integerValue||t.doubleValue)}function vb(t){return Zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof nc&&i instanceof nc||r instanceof rc&&i instanceof rc?ho(r.elements,i.elements,_r):r instanceof lu&&i instanceof lu?_r(r.Ee,i.Ee):r instanceof cu&&i instanceof cu}(t.transform,e.transform)}class $V{constructor(e,n){this.version=e,this.transformResults=n}}class Br{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Br}static exists(e){return new Br(void 0,e)}static updateTime(e){return new Br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ch{}function wb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tb(t.key,Br.none()):new Cc(t.key,t.data,Br.none());{const n=t.data,r=Dn.empty();let i=new nn(Qt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ws(t.key,r,new qn(i.toArray()),Br.none())}}function FV(t,e,n){t instanceof Cc?function(i,s,o){const a=i.value.clone(),c=Dv(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(i,s,o){if(!bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dv(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Eb(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ca(t,e,n,r){return t instanceof Cc?function(s,o,a,c){if(!bl(s.precondition,o))return a;const l=s.value.clone(),u=Mv(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ws?function(s,o,a,c){if(!bl(s.precondition,o))return a;const l=Mv(s.fieldTransforms,c,o),u=o.data;return u.setAll(Eb(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function UV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gb(r.transform,i||null);s!=null&&(n===null&&(n=Dn.empty()),n.set(r.field,s))}return n||null}function xv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ho(r,i,(s,o)=>VV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cc extends Ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ws extends Ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Eb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dv(t,e,n){const r=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LV(o,a,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,MV(s,o,e))}return r}class Tb extends Ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BV extends Ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=wb(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>xv(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>xv(n,r))}}class ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){et(e.mutations.length===r.length);let i=function(){return kV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ng(e,n,r,i)}}/**
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
 */class HV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ut,be;function zV(t){switch(t){default:return de();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Ib(t){if(t===void 0)return zr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ut.OK:return $.OK;case ut.CANCELLED:return $.CANCELLED;case ut.UNKNOWN:return $.UNKNOWN;case ut.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ut.INTERNAL:return $.INTERNAL;case ut.UNAVAILABLE:return $.UNAVAILABLE;case ut.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ut.NOT_FOUND:return $.NOT_FOUND;case ut.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ut.ABORTED:return $.ABORTED;case ut.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ut.DATA_LOSS:return $.DATA_LOSS;default:return de()}}(be=ut||(ut={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qV(){return new TextEncoder}/**
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
 */const KV=new zs([4294967295,4294967295],0);function Lv(t){const e=qV().encode(t),n=new K2;return n.update(e),new Uint8Array(n.digest())}function Vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zs([n,r],0),new zs([i,s],0)]}class rg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ua(`Invalid padding: ${n}`);if(r<0)throw new ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ua(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=zs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(zs.fromNumber(r)));return i.compare(KV)===1&&(i=new zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Lv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Lv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Rc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(me.min(),i,new ft($e),Kr(),we())}}class Rc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Rc(r,n,we(),we(),we())}}/**
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
 */class Al{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class bb{constructor(e,n){this.targetId=e,this.ye=n}}class Ab{constructor(e,n,r=sn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $v{constructor(){this.we=0,this.Se=Uv(),this.be=sn.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=we(),n=we(),r=we();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de()}}),new Rc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Uv()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class GV{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Kr(),this.Ue=Fv(),this.We=new ft($e)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Zf(s))if(r===0){const o=new ae(s.path);this.je(n,o,zt.newNoDocument(o,me.min()))}else et(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ls(r).toUint8Array()}catch(c){if(c instanceof tb)return uo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new rg(o,i,s)}catch(c){return uo(c instanceof ua?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Zf(a.target)){const c=new ae(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,zt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=we();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Rh(e,n,this.We,this.$e,r);return this.$e=Kr(),this.Ue=Fv(),this.We=new ft($e),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new $v,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new nn($e),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new $v),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Fv(){return new ft(ae.comparator)}function Uv(){return new ft(ae.comparator)}const YV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JV=(()=>({and:"AND",or:"OR"}))();class XV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function np(t,e){return t.useProto3Json||wh(e)?e:{value:e}}function uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZV(t,e){return uu(t,e.toTimestamp())}function fr(t){return et(!!t),me.fromTimestamp(function(n){const r=Ai(n);return new dt(r.seconds,r.nanos)}(t))}function ig(t,e){return function(r){return new st(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Rb(t){const e=st.fromString(t);return et(Nb(e)),e}function rp(t,e){return ig(t.databaseId,e.path)}function Ld(t,e){const n=Rb(e);if(n.get(1)!==t.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Sb(n))}function ip(t,e){return ig(t.databaseId,e)}function e$(t){const e=Rb(t);return e.length===4?st.emptyPath():Sb(e)}function sp(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sb(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:rp(t,e),fields:n.value.mapValue.fields}}function t$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(et(u===void 0||typeof u=="string"),sn.fromBase64String(u||"")):(et(u===void 0||u instanceof Uint8Array),sn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:Ib(l.code);return new se(u,l.message||"")}(o);n=new Ab(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ld(t,r.document.name),s=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):me.min(),a=new Dn({mapValue:{fields:r.document.fields}}),c=zt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Al(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ld(t,r.document),s=r.readTime?fr(r.readTime):me.min(),o=zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Al([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ld(t,r.document),s=r.removedTargetIds||[];n=new Al([],s,i,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WV(i,s),a=r.targetId;n=new bb(a,o)}}return n}function n$(t,e){let n;if(e instanceof Cc)n={update:Bv(t,e.key,e.value)};else if(e instanceof Tb)n={delete:rp(t,e.key)};else if(e instanceof ws)n={update:Bv(t,e.key,e.data),updateMask:h$(e.fieldMask)};else{if(!(e instanceof BV))return de();n={verify:rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof cu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lu)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function r$(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fr(i.updateTime):fr(s);return o.isEqual(me.min())&&(o=fr(s)),new $V(o,i.transformResults||[])}(n,e))):[]}function i$(t,e){return{documents:[ip(t,e.path)]}}function s$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ip(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ip(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return kb(yr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ds(h.field),direction:c$(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=np(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function o$(t){let e=e$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){et(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const p=Pb(h);return p instanceof yr&&sb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new Ia(Ms(y.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,wh(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new au(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new au(m,p)}(n.endAt)),TV(e,i,o,s,a,"F",c,l)}function a$(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return vt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return vt.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yr.create(n.compositeFilter.filters.map(r=>Pb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function c$(t){return YV[t]}function l$(t){return QV[t]}function u$(t){return JV[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Ms(t){return Qt.fromServerFormat(t.fieldPath)}function kb(t){return t instanceof vt?function(n){if(n.op==="=="){if(Rv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:l$(n.op),value:n.value}}}(t):t instanceof yr?function(n){const r=n.getFilters().map(i=>kb(i));return r.length===1?r[0]:{compositeFilter:{op:u$(n.op),filters:r}}}(t):de()}function h$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class di{constructor(e,n,r,i,s=me.min(),o=me.min(),a=sn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class d${constructor(e){this.ht=e}}function f$(t){const e=o$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ep(e,e.limit,"L"):e}/**
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
 */class p${constructor(){this._n=new m$}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(bi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class m${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nn(st.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nn(st.comparator)).toArray()}}/**
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
 */class mo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new mo(0)}static Bn(){return new mo(-1)}}/**
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
 */class g${constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class y${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ca(r.mutation,i,qn.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const i=Qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Kr();const o=Aa(),a=function(){return Aa()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ws)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ca(u.mutation,l,u.mutation.getFieldMask(),dt.now())):o.set(l.key,qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new _$(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Aa();let i=new ft((o,a)=>o-a),s=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||qn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||we()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=fb();u.forEach(p=>{if(!s.has(p)){const m=wb(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ae.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Qi());let a=-1,c=s;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,we())).next(u=>({batchId:a,changes:db(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=la();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const c=function(u,h){return new Eh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,zt.newInvalidDocument(l)))});let o=la();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ca(l.mutation,c,qn.empty(),dt.now()),bh(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class v${constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:f$(i.bundledQuery),readTime:fr(i.readTime)}}(n)),B.resolve()}}/**
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
 */class w${constructor(){this.overlays=new ft(ae.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Qi(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Qi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return B.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HV(n,r));let s=this.hr.get(n);s===void 0&&(s=we(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class sg{constructor(){this.Pr=new nn(Ct.Ir),this.Tr=new nn(Ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new st([])),r=new Ct(n,e),i=new Ct(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new st([])),r=new Ct(n,e),i=new Ct(n,e+1);let s=we();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||$e(e.pr,n.pr)}static Er(e,n){return $e(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
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
 */class E${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new nn(Ct.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ct(n,0),i=new Ct(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nn($e);return n.forEach(i=>{const s=new Ct(i,0),o=new Ct(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new Ct(new ae(s),0);let a=new nn($e);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){et(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new Ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ct(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class T${constructor(e){this.Cr=e,this.docs=function(){return new ft(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():zt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kr();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||sV(iV(u),r)<=0||(i.has(u.key)||bh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new I$(this)}getSize(e){return B.resolve(this.size)}}class I$ extends g${constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class b${constructor(e){this.persistence=e,this.Mr=new Do(n=>eg(n),tg),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new sg,this.targetCount=0,this.Br=mo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
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
 */class A${constructor(e,n){this.Lr={},this.overlays={},this.kr=new Qm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new b$(this),this.indexManager=new p$,this.remoteDocumentCache=function(i){return new T$(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new d$(n),this.$r=new v$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new w$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new E$(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new C$(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class C$ extends aV{constructor(e){super(),this.currentSequenceNumber=e}}class og{constructor(e){this.persistence=e,this.zr=new sg,this.jr=null}static Hr(e){return new og(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=we(),i=we();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ag(e,n.fromCache,r,i)}}/**
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
 */class R${constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(Nv(n))return B.resolve(null);let r=qr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ep(n,null,"F"),r=qr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=we(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,ep(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,i){return Nv(n)||i.isEqual(me.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(Tv()<=Oe.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tp(n)),this.Ji(e,o,n,rV(i,-1)))})}ji(e,n){let r=new nn(ub(e));return n.forEach((i,s)=>{bh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return Tv()<=Oe.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",tp(n)),this.Ui.getDocumentsMatchingQuery(e,n,bi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class S${constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new ft($e),this.Xi=new Do(s=>eg(s),tg),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y$(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function P$(t,e,n,r){return new S$(t,e,n,r)}async function Ob(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=we();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function k$(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>u.getEntry(c,y)).next(v=>{const b=l.docVersions.get(y);et(b!==null),v.version.compareTo(b)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=we();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xb(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function N$(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(sn.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,b,A){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,u)&&a.push(n.Qr.updateTargetData(s,m))});let c=Kr(),l=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(O$(s,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(me.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Zi=i,s))}function O$(t,e,n){let r=we(),i=we();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kr();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function x$(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function D$(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new di(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function op(t,e,n){const r=_e(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ac(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function jv(t,e,n){const r=_e(t);let i=me.min(),s=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=_e(c),p=h.Xi.get(u);return p!==void 0?B.resolve(h.Zi.get(p)):h.Qr.getTargetData(l,u)}(r,o,qr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:we())).next(a=>(M$(r,RV(e),a),{documents:a,_s:s})))}function M$(t,e,n){let r=t.es.get(e)||me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class Hv{constructor(){this.activeTargetIds=xV()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L${constructor(){this.Ys=new Hv,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Hv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class V${Xs(e){}shutdown(){}}/**
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
 */class Wv{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hl=null;function Vd(){return hl===null?hl=function(){return 268435456+Math.round(2147483648*Math.random())}():hl++,"0x"+hl.toString(16)}/**
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
 */const $$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class F${constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const Ht="WebChannelConnection";class U$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=Vd(),c=this.po(n,r);ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(n,c,l,i).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw uo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=$$[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=Vd();return new Promise((o,a)=>{const c=new q2;c.setWithCredentials(!0),c.listenOnce(W2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Md.NO_ERROR:const u=c.getResponseJson();ee(Ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Md.TIMEOUT:ee(Ht,`RPC '${e}' ${s} timed out`),a(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case Md.HTTP_ERROR:const h=c.getStatus();if(ee(Ht,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(A)>=0?A:$.UNKNOWN}(m.status);a(new se(y,m.message))}else a(new se($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new se($.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ee(Ht,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);ee(Ht,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}bo(e,n,r){const i=Vd(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=j2(),a=H2(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");ee(Ht,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const y=new F$({_o:b=>{m?ee(Ht,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||(ee(Ht,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ee(Ht,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},ao:()=>h.close()}),v=(b,A,k)=>{b.listen(A,N=>{try{k(N)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,cl.EventType.OPEN,()=>{m||ee(Ht,`RPC '${e}' stream ${i} transport opened.`)}),v(h,cl.EventType.CLOSE,()=>{m||(m=!0,ee(Ht,`RPC '${e}' stream ${i} transport closed`),y.To())}),v(h,cl.EventType.ERROR,b=>{m||(m=!0,uo(Ht,`RPC '${e}' stream ${i} transport errored:`,b),y.To(new se($.UNAVAILABLE,"The operation could not be completed")))}),v(h,cl.EventType.MESSAGE,b=>{var A;if(!m){const k=b.data[0];et(!!k);const N=k,P=N.error||((A=N[0])===null||A===void 0?void 0:A.error);if(P){ee(Ht,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let W=function(ze){const Re=ut[ze];if(Re!==void 0)return Ib(Re)}(j),oe=P.message;W===void 0&&(W=$.INTERNAL,oe="Unknown error status: "+j+" with message "+P.message),m=!0,y.To(new se(W,oe)),h.close()}else ee(Ht,`RPC '${e}' stream ${i} received:`,k),y.Eo(k)}}),v(a,z2.STAT_EVENT,b=>{b.stat===wv.PROXY?ee(Ht,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===wv.NOPROXY&&ee(Ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function $d(){return typeof document<"u"?document:null}/**
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
 */function Sh(t){return new XV(t,!0)}/**
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
 */class Db{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class Mb{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Db(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(zr(n.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new se($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B$ extends Mb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=t$(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?fr(o.readTime):me.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=sp(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Zf(c)?{documents:i$(s,c)}:{query:s$(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cb(s,o.resumeToken);const l=np(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=uu(s,o.snapshotVersion.toTimestamp());const l=np(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=a$(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=sp(this.serializer),n.removeTarget=e,this.Yo(n)}}class j$ extends Mb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=r$(e.writeResults,e.commitTime),r=fr(e.commitTime);return this.listener.l_(r,n)}return et(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=sp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>n$(this.serializer,r))};this.Yo(n)}}/**
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
 */class H$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se($.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se($.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class W${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(zr(n),this.R_=!1):ee("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class z${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Es(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=_e(c);l.S_.add(4),await Sc(l),l.v_.set("Unknown"),l.S_.delete(4),await Ph(l)}(this))})}),this.v_=new W$(r,i)}}async function Ph(t){if(Es(t))for(const e of t.b_)await e(!0)}async function Sc(t){for(const e of t.b_)await e(!1)}function Lb(t,e){const n=_e(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),ug(n)?lg(n):Mo(n).Go()&&cg(n,e))}function Vb(t,e){const n=_e(t),r=Mo(n);n.w_.delete(e),r.Go()&&$b(n,e),n.w_.size===0&&(r.Go()?r.Ho():Es(n)&&n.v_.set("Unknown"))}function cg(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).o_(e)}function $b(t,e){t.C_.Le(e),Mo(t).__(e)}function lg(t){t.C_=new GV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.v_.V_()}function ug(t){return Es(t)&&!Mo(t).Wo()&&t.w_.size>0}function Es(t){return _e(t).S_.size===0}function Fb(t){t.C_=void 0}async function q$(t){t.w_.forEach((e,n)=>{cg(t,e)})}async function K$(t,e){Fb(t),ug(t)?(t.v_.g_(e),lg(t)):t.v_.set("Unknown")}async function G$(t,e,n){if(t.v_.set("Online"),e instanceof Ab&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hu(t,r)}else if(e instanceof Al?t.C_.Ge(e):e instanceof bb?t.C_.Xe(e):t.C_.He(e),!n.isEqual(me.min()))try{const r=await xb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(sn.EMPTY_BYTE_STRING,u.snapshotVersion)),$b(s,c);const h=new di(u.target,c,l,u.sequenceNumber);cg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await hu(t,r)}}async function hu(t,e,n){if(!Ac(e))throw e;t.S_.add(1),await Sc(t),t.v_.set("Offline"),n||(n=()=>xb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Ph(t)})}function Ub(t,e){return e().catch(n=>hu(t,n,e))}async function kh(t){const e=_e(t),n=Ci(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;Y$(e);)try{const i=await x$(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,Q$(e,i)}catch(i){await hu(e,i)}Bb(e)&&jb(e)}function Y$(t){return Es(t)&&t.y_.length<10}function Q$(t,e){t.y_.push(e);const n=Ci(t);n.Go()&&n.u_&&n.c_(e.mutations)}function Bb(t){return Es(t)&&!Ci(t).Wo()&&t.y_.length>0}function jb(t){Ci(t).start()}async function J$(t){Ci(t).P_()}async function X$(t){const e=Ci(t);for(const n of t.y_)e.c_(n.mutations)}async function Z$(t,e,n){const r=t.y_.shift(),i=ng.from(r,e,n);await Ub(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kh(t)}async function eF(t,e){e&&Ci(t).u_&&await async function(r,i){if(function(o){return zV(o)&&o!==$.ABORTED}(i.code)){const s=r.y_.shift();Ci(r).jo(),await Ub(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kh(r)}}(t,e),Bb(t)&&jb(t)}async function zv(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.S_.add(3),await Sc(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Ph(n)}async function tF(t,e){const n=_e(t);e?(n.S_.delete(2),await Ph(n)):e||(n.S_.add(2),await Sc(n),n.v_.set("Unknown"))}function Mo(t){return t.F_||(t.F_=function(n,r,i){const s=_e(n);return s.T_(),new B$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:q$.bind(null,t),lo:K$.bind(null,t),s_:G$.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),ug(t)?lg(t):t.v_.set("Unknown")):(await t.F_.stop(),Fb(t))})),t.F_}function Ci(t){return t.M_||(t.M_=function(n,r,i){const s=_e(n);return s.T_(),new j$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:J$.bind(null,t),lo:eF.bind(null,t),h_:X$.bind(null,t),l_:Z$.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await kh(t)):(await t.M_.stop(),t.y_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(zr("AsyncQueue",`${e}: ${t}`),Ac(t))return new se($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qv{constructor(){this.x_=new ft(ae.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):de():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class go{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new go(e,n,qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class nF{constructor(){this.N_=void 0,this.listeners=[]}}class rF{constructor(){this.queries=new Do(e=>lb(e),Ih),this.onlineState="Unknown",this.B_=new Set}}async function fg(t,e){const n=_e(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nF),i)try{s.N_=await n.onListen(r)}catch(o){const a=dg(o,`Initialization of query '${tp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&mg(n)}async function pg(t,e){const n=_e(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iF(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&mg(n)}function sF(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function mg(t){t.B_.forEach(e=>{e.next()})}class gg{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class Hb{constructor(e){this.key=e}}class Wb{constructor(e){this.key=e}}class oF{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=we(),this.mutatedKeys=we(),this.ia=ub(e),this.sa=new qs(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new qv,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=bh(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),b=!0):this.ua(p,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.ia(m,c)>0||l&&this.ia(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),b=!0):p&&!m&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((l,u)=>function(p,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return y(p)-y(m)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new go(this.query,e.sa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new qv,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=we(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new Wb(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new Hb(r))}),n}Ia(e){this.ta=e._s,this.ra=we();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return go.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class aF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cF{constructor(e){this.key=e,this.Ea=!1}}class lF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Do(a=>lb(a),Ih),this.Ra=new Map,this.Va=new Set,this.ma=new ft(ae.comparator),this.fa=new Map,this.ga=new sg,this.pa={},this.ya=new Map,this.wa=mo.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function uF(t,e){const n=wF(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await D$(n.localStore,qr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await hF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Lb(n.remoteStore,o)}return i}async function hF(t,e,n,r,i){t.ba=(h,p,m)=>async function(v,b,A,k){let N=b.view._a(A);N.Hi&&(N=await jv(v.localStore,b.query,!1).then(({documents:W})=>b.view._a(W,N)));const P=k&&k.targetChanges.get(b.targetId),j=b.view.applyChanges(N,v.isPrimaryClient,P);return Gv(v,b.targetId,j.ha),j.snapshot}(t,h,p,m);const s=await jv(t.localStore,e,!0),o=new oF(e,s._s),a=o._a(s.documents),c=Rc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Gv(t,n,l.ha);const u=new aF(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function dF(t,e){const n=_e(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!Ih(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await op(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vb(n.remoteStore,r.targetId),ap(n,r.targetId)}).catch(bc)):(ap(n,r.targetId),await op(n.localStore,r.targetId,!0))}async function fF(t,e,n){const r=EF(t);try{const i=await function(o,a){const c=_e(o),l=dt.now(),u=a.reduce((m,y)=>m.add(y.key),we());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Kr(),v=we();return c.ts.getEntries(m,u).next(b=>{y=b,y.forEach((A,k)=>{k.isValidDocument()||(v=v.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(b=>{h=b;const A=[];for(const k of a){const N=UV(k,h.get(k.key).overlayedDocument);N!=null&&A.push(new ws(k.key,N,nb(N.value.mapValue),Br.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,A,a)}).next(b=>{p=b;const A=b.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,b.batchId,A)})}).then(()=>({batchId:p.batchId,changes:db(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new ft($e)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,n),await Pc(r,i.changes),await kh(r.remoteStore)}catch(i){const s=dg(i,"Failed to persist write");n.reject(s)}}async function zb(t,e){const n=_e(t);try{const r=await N$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?et(o.Ea):i.removedDocuments.size>0&&(et(o.Ea),o.Ea=!1))}),await Pc(n,r,e)}catch(r){await bc(r)}}function Kv(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.L_(a)&&(l=!0)}),l&&mg(c)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pF(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new ft(ae.comparator);o=o.insert(s,zt.newNoDocument(s,me.min()));const a=we().add(s),c=new Rh(me.min(),new Map,new ft($e),o,a);await zb(r,c),r.ma=r.ma.remove(s),r.fa.delete(e),_g(r)}else await op(r.localStore,e,!1).then(()=>ap(r,e,n)).catch(bc)}async function mF(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await k$(n.localStore,e);Kb(n,r,null),qb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pc(n,i)}catch(i){await bc(i)}}async function gF(t,e,n){const r=_e(t);try{const i=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(et(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Kb(r,e,n),qb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pc(r,i)}catch(i){await bc(i)}}function qb(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function Kb(t,e,n){const r=_e(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||Gb(t,r)})}function Gb(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(Vb(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),_g(t))}function Gv(t,e,n){for(const r of n)r instanceof Hb?(t.ga.addReference(r.key,e),_F(t,r)):r instanceof Wb?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||Gb(t,r.key)):de()}function _F(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Va.add(r),_g(t))}function _g(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ae(st.fromString(e)),r=t.wa.next();t.fa.set(r,new cF(n)),t.ma=t.ma.insert(n,r),Lb(t.remoteStore,new di(qr(Th(n.path)),r,"TargetPurposeLimboResolution",Qm.ae))}}async function Pc(t,e,n){const r=_e(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ag.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=_e(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,p=>B.forEach(p.qi,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Ac(h))throw h;ee("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Zi.get(p),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(p,v)}}}(r.localStore,s))}async function yF(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Ob(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new se($.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pc(n,r.rs)}}function vF(t,e){const n=_e(t),r=n.fa.get(e);if(r&&r.Ea)return we().add(r.key);{let i=we();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function wF(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pF.bind(null,e),e.da.s_=iF.bind(null,e.eventManager),e.da.Da=sF.bind(null,e.eventManager),e}function EF(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gF.bind(null,e),e}class Yv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P$(this.persistence,new R$,e.initialUser,this.serializer)}createPersistence(e){return new A$(og.Hr,this.serializer)}createSharedClientState(e){return new L$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yF.bind(null,this.syncEngine),await tF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rF}()}createDatastore(e){const n=Sh(e.databaseInfo.databaseId),r=function(s){return new U$(s)}(e.databaseInfo);return function(s,o,a,c){return new H$(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new z$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Kv(this.syncEngine,n,0),function(){return Wv.v()?new Wv:new V$}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new lF(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=_e(n);ee("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Sc(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class yg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class IF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=ZI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ob(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AF(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>zv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>zv(e.remoteStore,s)),t._onlineComponents=e}function bF(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bF(n))throw n;uo("Error using user provided cache. Falling back to memory cache: "+n),await Fd(t,new Yv)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Fd(t,new Yv);return t._offlineComponents}async function Yb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Qv(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Qv(t,new TF))),t._onlineComponents}function CF(t){return Yb(t).then(e=>e.syncEngine)}async function du(t){const e=await Yb(t),n=e.eventManager;return n.onListen=uF.bind(null,e.syncEngine),n.onUnlisten=dF.bind(null,e.syncEngine),n}function RF(t,e,n={}){const r=new Ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new yg({next:p=>{o.enqueueAndForget(()=>pg(s,h));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new se($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new se($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new gg(Th(a.path),u,{includeMetadataChanges:!0,z_:!0});return fg(s,h)}(await du(t),t.asyncQueue,e,n,r)),r.promise}function SF(t,e,n={}){const r=new Ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new yg({next:p=>{o.enqueueAndForget(()=>pg(s,h)),p.fromCache&&c.source==="server"?l.reject(new se($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new gg(a,u,{includeMetadataChanges:!0,z_:!0});return fg(s,h)}(await du(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Qb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Jv=new Map;/**
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
 */function PF(t,e,n){if(!n)throw new se($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kF(t,e,n,r){if(e===!0&&r===!0)throw new se($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xv(t){if(!ae.isDocumentKey(t))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vg(t);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Zv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new G2;switch(r.type){case"firstParty":return new X2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jv.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Jv.delete(n),r.terminate())}(this),Promise.resolve()}}function NF(t,e,n,r={}){var i;const s=(t=pr(t,wg))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Wt.MOCK_USER;else{a=Hx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Wt(l)}t._authCredentials=new Y2(new XI(a,c))}}/**
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
 */class kc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kc(this.firestore,e,this._query)}}class Cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ic(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cn(this.firestore,e,this._key)}}class ic extends kc{constructor(e,n,r){super(e,n,Th(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cn(this.firestore,null,new ae(e))}withConverter(e){return new ic(this.firestore,e,this._path)}}function Cl(t,e,...n){if(t=dn(t),arguments.length===1&&(e=ZI.V()),PF("doc","path",e),t instanceof wg){const r=st.fromString(e,...n);return Xv(r),new Cn(t,null,new ae(r))}{if(!(t instanceof Cn||t instanceof ic))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Xv(r),new Cn(t.firestore,t instanceof ic?t.converter:null,new ae(r))}}/**
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
 */class OF{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Db(this,"async_queue_retry"),this.tu=()=>{const n=$d();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=$d();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ur;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Ac(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw zr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&de()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function ew(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _o extends wg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new OF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jb(this),this._firestoreClient.terminate()}}function xF(t,e){const n=typeof t=="object"?t:wm(),r=typeof t=="string"?t:e||"(default)",i=mc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jx("firestore");s&&NF(i,...s)}return i}function Nh(t){return t._firestoreClient||Jb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new uV(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Qb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new IF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yo(sn.fromBase64String(e))}catch(n){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yo(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Eg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xb{constructor(e){this._methodName=e}}/**
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
 */class Oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
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
 */const DF=/^__.*__$/;class MF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cc(e,this.data,n,this.fieldTransforms)}}function Zb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Tg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Tg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return fu(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(Zb(this.lu)&&DF.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class LF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sh(e)}mu(e,n,r,i=!1){return new Tg({lu:e,methodName:n,Vu:r,path:Qt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VF(t){const e=t._freezeSettings(),n=Sh(t._databaseId);return new LF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $F(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);rA("Data must be an object, but it was:",o,r);const a=tA(r,o);let c,l;if(s.merge)c=new qn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=FF(e,h,n);if(!o.contains(p))throw new se($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);BF(u,p)||u.push(p)}c=new qn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new MF(new Dn(a),c,l)}function eA(t,e){if(nA(t=dn(t)))return rA("Unsupported field value:",e,t),tA(t,e);if(t instanceof Xb)return function(r,i){if(!Zb(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=eA(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=dt.fromDate(r);return{timestampValue:uu(i.serializer,s)}}if(r instanceof dt){const s=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uu(i.serializer,s)}}if(r instanceof Oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yo)return{bytesValue:Cb(i.serializer,r._byteString)};if(r instanceof Cn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ig(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${vg(r)}`)}(t,e)}function tA(t,e){const n={};return eb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xo(t,(r,i)=>{const s=eA(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Oh||t instanceof yo||t instanceof Cn||t instanceof Xb)}function rA(t,e,n){if(!nA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vg(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function FF(t,e,n){if((e=dn(e))instanceof Eg)return e._internalPath;if(typeof e=="string")return iA(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const UF=new RegExp("[~\\*/\\[\\]]");function iA(t,e,n){if(e.search(UF)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Eg(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new se($.INVALID_ARGUMENT,a+t+c)}function BF(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jF extends sA{data(){return super.data()}}function oA(t,e){return typeof e=="string"?iA(t,e):e instanceof Eg?e._internalPath:e._delegate._internalPath}/**
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
 */function aA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HF{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Oh(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);et(Nb(r));const i=new ec(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||zr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WF(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ha{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cA extends sA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rl extends cA{data(e={}){return super.data(e)}}class lA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ha(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new ha(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ha(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ha(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:zF(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
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
 */function uA(t){t=pr(t,Cn);const e=pr(t.firestore,_o);return RF(Nh(e),t._key).then(n=>hA(e,t,n))}class Ig extends HF{constructor(e){super(),this.firestore=e}convertBytes(e){return new yo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Cn(this.firestore,null,n)}}function qF(t){t=pr(t,kc);const e=pr(t.firestore,_o),n=Nh(e),r=new Ig(e);return aA(t._query),SF(n,t._query).then(i=>new lA(e,r,t,i))}function KF(t,e,n){t=pr(t,Cn);const r=pr(t.firestore,_o),i=WF(t.converter,e,n);return GF(r,[$F(VF(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Br.none())])}function bg(t,...e){var n,r,i;t=dn(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ew(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ew(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Cn)l=pr(t.firestore,_o),u=Th(t._key.path),c={next:h=>{e[o]&&e[o](hA(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=pr(t,kc);l=pr(h.firestore,_o),u=h._query;const p=new Ig(l);c={next:m=>{e[o]&&e[o](new lA(l,p,h,m))},error:e[o+1],complete:e[o+2]},aA(t._query)}return function(p,m,y,v){const b=new yg(v),A=new gg(m,b,y);return p.asyncQueue.enqueueAndForget(async()=>fg(await du(p),A)),()=>{b.Ma(),p.asyncQueue.enqueueAndForget(async()=>pg(await du(p),A))}}(Nh(l),u,a,c)}function GF(t,e){return function(r,i){const s=new Ur;return r.asyncQueue.enqueueAndForget(async()=>fF(await CF(r),i,s)),s.promise}(Nh(t),e)}function hA(t,e,n){const r=n.docs.get(e._key),i=new Ig(t);return new cA(t,i,e._key,r,new ha(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Oo=i})(Oi),vn(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _o(new Q2(r.getProvider("auth-internal")),new eV(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ec(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ft(Ev,"4.1.2",e),Ft(Ev,"4.1.2","esm2017")})();const YF={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},dA=IT(YF),Sl=xF(dA);var fA=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},QF=(t,e,n)=>(fA(t,e,"read from private field"),n?n.call(t):e.get(t)),JF=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},XF=(t,e,n,r)=>(fA(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const tw=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function ZF(t){if(pA(t))return{width:t.naturalWidth,height:t.naturalHeight};if(mA(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(gA(t))return{width:t.videoWidth,height:t.videoHeight};if(eU(t))return{width:t.width,height:t.height};if(_A(t))return{width:t.width,height:t.height};if(tU(t))return{width:t.width,height:t.height};if(yA(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function pA(t){try{return t instanceof HTMLImageElement}catch{return!1}}function mA(t){try{return t instanceof SVGImageElement}catch{return!1}}function gA(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function eU(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function _A(t){try{return t instanceof ImageBitmap}catch{return!1}}function tU(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function yA(t){try{return t instanceof VideoFrame}catch{return!1}}function nU(t){try{return t instanceof Blob}catch{return!1}}function rU(t){try{return t instanceof ImageData}catch{return!1}}function iU(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function vA(t){if(pA(t)&&!await aU(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(mA(t)&&!await cU(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(yA(t)&&lU(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(gA(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(_A(t)&&hU(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=ZF(t);if(e===0||n===0)return null;const r=iU(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function sU(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await vA(e)}async function oU(t){if(nU(t))return await sU(t);if(rU(t)){if(uU(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await vA(t)}async function aU(t){try{return await t.decode(),!0}catch{return!1}}async function cU(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function lU(t){return t.format===null}function uU(t){return t.data.buffer.byteLength===0}function hU(t){return t.width===0&&t.height===0}function nw(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const rw=t=>{let e;const n=new Set,r=(o,a)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=a??typeof c!="object"?c:Object.assign({},e,c),n.forEach(u=>u(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},dU=t=>t?rw(t):rw,fU={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},da=dU()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:fU}));function wA(t,e=da.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=da.getState(),r=n.get(t);if(r&&Object.is(e,da.getState().zxingModuleOverrides))return r;{da.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const iw=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],fi={tryHarder:!0,formats:[],maxSymbols:255};async function pU(t,{tryHarder:e=fi.tryHarder,formats:n=fi.formats,maxSymbols:r=fi.maxSymbols}=fi,i){const s=await wA(i,da.getState().zxingModuleOverrides),{data:o,width:a,height:c,data:{byteLength:l}}=t,u=s._malloc(l);s.HEAP8.set(o,u);const h=s.readBarcodesFromPixmap(u,a,c,e,mU(n),r);s._free(u);const p=[];for(let m=0;m<h.size();++m){const y=h.get(m);p.push({...y,format:gU(y.format)})}return p}function mU(t){return t.join("|")}function gU(t){const e=sw(t);let n=0,r=iw.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=iw[i],o=sw(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function sw(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var EA=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((d,f)=>{r=d,i=f});var s=Object.assign({},n),o="./this.program",a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function u(d){return n.locateFile?n.locateFile(d,l):l+d}var h;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",c&&(h=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)})),n.print||console.log.bind(console);var p=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var m;n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&Bn("no native wasm support detected");var y,v,b=!1,A,k,N,P,j,W,oe,ge;function ze(){var d=y.buffer;n.HEAP8=A=new Int8Array(d),n.HEAP16=N=new Int16Array(d),n.HEAP32=j=new Int32Array(d),n.HEAPU8=k=new Uint8Array(d),n.HEAPU16=P=new Uint16Array(d),n.HEAPU32=W=new Uint32Array(d),n.HEAPF32=oe=new Float32Array(d),n.HEAPF64=ge=new Float64Array(d)}var Re,ct=[],Dt=[],Ge=[];function Cr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ve(n.preRun.shift());E(ct)}function on(){E(Dt)}function je(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Tn(n.postRun.shift());E(Ge)}function Ve(d){ct.unshift(d)}function Te(d){Dt.unshift(d)}function Tn(d){Ge.unshift(d)}var wt=0,Et=null;function Tt(d){wt++,n.monitorRunDependencies&&n.monitorRunDependencies(wt)}function Jr(d){if(wt--,n.monitorRunDependencies&&n.monitorRunDependencies(wt),wt==0&&Et){var f=Et;Et=null,f()}}function Bn(d){n.onAbort&&n.onAbort(d),d="Aborted("+d+")",p(d),b=!0,d+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(d);throw i(f),f}var Rs="data:application/octet-stream;base64,";function mt(d){return d.startsWith(Rs)}var x;n.locateFile?(x="zxing_reader.wasm",mt(x)||(x=u(x))):x=new URL("/reader/zxing_reader.wasm",self.location).href;function J(d){if(d==x&&m)return new Uint8Array(m);if(h)return h(d);throw"both async and sync fetching of the wasm failed"}function q(d){return!m&&(a||c)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+d+"'";return f.arrayBuffer()}).catch(()=>J(d)):Promise.resolve().then(()=>J(d))}function te(d,f,g){return q(d).then(_=>WebAssembly.instantiate(_,f)).then(_=>_).then(g,_=>{p("failed to asynchronously prepare wasm: "+_),Bn(_)})}function xe(d,f,g,_){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!mt(f)&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(T=>{var I=WebAssembly.instantiateStreaming(T,g);return I.then(_,function(R){return p("wasm streaming compile failed: "+R),p("falling back to ArrayBuffer instantiation"),te(f,g,_)})}):te(f,g,_)}function w(){var d={a:OP};function f(_,T){var I=_.exports;return v=I,y=v.qa,ze(),Re=v.ua,Te(v.ra),Jr(),I}Tt();function g(_){f(_.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(d,f)}catch(_){p("Module.instantiateWasm callback failed with error: "+_),i(_)}return xe(m,x,d,g).catch(i),{}}var E=d=>{for(;d.length>0;)d.shift()(n)},C=[],O=0;function M(d){var f=new H(d);return f.get_caught()||(f.set_caught(!0),O--),f.set_rethrown(!1),C.push(f),M_(f.excPtr),f.get_exception_ptr()}var L=0;function Y(){Ie(0,0);var d=C.pop();D_(d.excPtr),L=0}function H(d){this.excPtr=d,this.ptr=d-24,this.set_type=function(f){W[this.ptr+4>>2]=f},this.get_type=function(){return W[this.ptr+4>>2]},this.set_destructor=function(f){W[this.ptr+8>>2]=f},this.get_destructor=function(){return W[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,A[this.ptr+12>>0]=f},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,A[this.ptr+13>>0]=f},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){W[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return W[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=V_(this.get_type());if(f)return W[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}function z(d){throw L||(L=d),L}var V=d=>{var f=L;if(!f)return qo(0),0;var g=new H(f);g.set_adjusted_ptr(f);var _=g.get_type();if(!_)return qo(0),f;for(var T in d){var I=d[T];if(I===0||I===_)break;var R=g.ptr+16;if(L_(I,_,R))return qo(I),f}return qo(_),f},ne=()=>V([]),X=d=>V([d]),re=(d,f)=>V([d,f]);function ue(d){var f=new H(d).get_exception_ptr();return f}function ve(){var d=C.pop();d||Bn("no exception to throw");var f=d.excPtr;throw d.get_rethrown()||(C.push(d),d.set_rethrown(!0),d.set_caught(!1),O++),L=f,L}function qe(d,f,g){var _=new H(d);throw _.init(f,g),L=d,O++,L}function Ue(){return O}var Ye={};function pn(d){for(;d.length;){var f=d.pop(),g=d.pop();g(f)}}function kn(d){return this.fromWireType(j[d>>2])}var Rr={},In={},Vi={},Bt=void 0;function an(d){throw new Bt(d)}function rr(d,f,g){d.forEach(function(S){Vi[S]=f});function _(S){var D=g(S);D.length!==d.length&&an("Mismatched type converter count");for(var F=0;F<d.length;++F)Sr(d[F],D[F])}var T=new Array(f.length),I=[],R=0;f.forEach((S,D)=>{In.hasOwnProperty(S)?T[D]=In[S]:(I.push(S),Rr.hasOwnProperty(S)||(Rr[S]=[]),Rr[S].push(()=>{T[D]=In[S],++R,R===I.length&&_(T)}))}),I.length===0&&_(T)}var rS=function(d){var f=Ye[d];delete Ye[d];var g=f.rawConstructor,_=f.rawDestructor,T=f.fields,I=T.map(R=>R.getterReturnType).concat(T.map(R=>R.setterArgumentType));rr([d],I,R=>{var S={};return T.forEach((D,F)=>{var Q=D.fieldName,ie=R[F],ce=D.getter,ke=D.getterContext,nt=R[F+T.length],It=D.setter,rt=D.setterContext;S[Q]={read:bt=>ie.fromWireType(ce(ke,bt)),write:(bt,U)=>{var Z=[];It(rt,bt,nt.toWireType(Z,U)),pn(Z)}}}),[{name:f.name,fromWireType:function(D){var F={};for(var Q in S)F[Q]=S[Q].read(D);return _(D),F},toWireType:function(D,F){for(var Q in S)if(!(Q in F))throw new TypeError(`Missing field: "${Q}"`);var ie=g();for(Q in S)S[Q].write(ie,F[Q]);return D!==null&&D.push(_,ie),ie},argPackAdvance:8,readValueFromPointer:kn,destructorFunction:_}]})};function iS(d,f,g,_,T){}function qh(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function sS(){for(var d=new Array(256),f=0;f<256;++f)d[f]=String.fromCharCode(f);u_=d}var u_=void 0;function jt(d){for(var f="",g=d;k[g];)f+=u_[k[g++]];return f}var Ss=void 0;function De(d){throw new Ss(d)}function oS(d,f,g={}){var _=f.name;if(d||De(`type "${_}" must have a positive integer typeid pointer`),In.hasOwnProperty(d)){if(g.ignoreDuplicateRegistrations)return;De(`Cannot register type '${_}' twice`)}if(In[d]=f,delete Vi[d],Rr.hasOwnProperty(d)){var T=Rr[d];delete Rr[d],T.forEach(I=>I())}}function Sr(d,f,g={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return oS(d,f,g)}function aS(d,f,g,_,T){var I=qh(g);f=jt(f),Sr(d,{name:f,fromWireType:function(R){return!!R},toWireType:function(R,S){return S?_:T},argPackAdvance:8,readValueFromPointer:function(R){var S;if(g===1)S=A;else if(g===2)S=N;else if(g===4)S=j;else throw new TypeError("Unknown boolean type size: "+f);return this.fromWireType(S[R>>I])},destructorFunction:null})}function cS(d){if(!(this instanceof Xr)||!(d instanceof Xr))return!1;for(var f=this.$$.ptrType.registeredClass,g=this.$$.ptr,_=d.$$.ptrType.registeredClass,T=d.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return f===_&&g===T}function lS(d){return{count:d.count,deleteScheduled:d.deleteScheduled,preservePointerOnDelete:d.preservePointerOnDelete,ptr:d.ptr,ptrType:d.ptrType,smartPtr:d.smartPtr,smartPtrType:d.smartPtrType}}function Kh(d){function f(g){return g.$$.ptrType.registeredClass.name}De(f(d)+" instance already deleted")}var Gh=!1;function h_(d){}function uS(d){d.smartPtr?d.smartPtrType.rawDestructor(d.smartPtr):d.ptrType.registeredClass.rawDestructor(d.ptr)}function d_(d){d.count.value-=1;var f=d.count.value===0;f&&uS(d)}function f_(d,f,g){if(f===g)return d;if(g.baseClass===void 0)return null;var _=f_(d,f,g.baseClass);return _===null?null:g.downcast(_)}var p_={};function hS(){return Object.keys(Ho).length}function dS(){var d=[];for(var f in Ho)Ho.hasOwnProperty(f)&&d.push(Ho[f]);return d}var Bo=[];function Yh(){for(;Bo.length;){var d=Bo.pop();d.$$.deleteScheduled=!1,d.delete()}}var jo=void 0;function fS(d){jo=d,Bo.length&&jo&&jo(Yh)}function pS(){n.getInheritedInstanceCount=hS,n.getLiveInheritedInstances=dS,n.flushPendingDeletes=Yh,n.setDelayFunction=fS}var Ho={};function mS(d,f){for(f===void 0&&De("ptr should not be undefined");d.baseClass;)f=d.upcast(f),d=d.baseClass;return f}function gS(d,f){return f=mS(d,f),Ho[f]}function Hc(d,f){(!f.ptrType||!f.ptr)&&an("makeClassHandle requires ptr and ptrType");var g=!!f.smartPtrType,_=!!f.smartPtr;return g!==_&&an("Both smartPtrType and smartPtr must be specified"),f.count={value:1},Wo(Object.create(d,{$$:{value:f}}))}function _S(d){var f=this.getPointee(d);if(!f)return this.destructor(d),null;var g=gS(this.registeredClass,f);if(g!==void 0){if(g.$$.count.value===0)return g.$$.ptr=f,g.$$.smartPtr=d,g.clone();var _=g.clone();return this.destructor(d),_}function T(){return this.isSmartPointer?Hc(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:d}):Hc(this.registeredClass.instancePrototype,{ptrType:this,ptr:d})}var I=this.registeredClass.getActualType(f),R=p_[I];if(!R)return T.call(this);var S;this.isConst?S=R.constPointerType:S=R.pointerType;var D=f_(f,this.registeredClass,S.registeredClass);return D===null?T.call(this):this.isSmartPointer?Hc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D,smartPtrType:this,smartPtr:d}):Hc(S.registeredClass.instancePrototype,{ptrType:S,ptr:D})}var Wo=function(d){return typeof FinalizationRegistry>"u"?(Wo=f=>f,d):(Gh=new FinalizationRegistry(f=>{d_(f.$$)}),Wo=f=>{var g=f.$$,_=!!g.smartPtr;if(_){var T={$$:g};Gh.register(f,T,f)}return f},h_=f=>Gh.unregister(f),Wo(d))};function yS(){if(this.$$.ptr||Kh(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=Wo(Object.create(Object.getPrototypeOf(this),{$$:{value:lS(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d}function vS(){this.$$.ptr||Kh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),h_(this),d_(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function wS(){return!this.$$.ptr}function ES(){return this.$$.ptr||Kh(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&De("Object already scheduled for deletion"),Bo.push(this),Bo.length===1&&jo&&jo(Yh),this.$$.deleteScheduled=!0,this}function TS(){Xr.prototype.isAliasOf=cS,Xr.prototype.clone=yS,Xr.prototype.delete=vS,Xr.prototype.isDeleted=wS,Xr.prototype.deleteLater=ES}function Xr(){}var IS=48,bS=57;function m_(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var f=d.charCodeAt(0);return f>=IS&&f<=bS?`_${d}`:d}function g_(d,f){return d=m_(d),{[d]:function(){return f.apply(this,arguments)}}[d]}function __(d,f,g){if(d[f].overloadTable===void 0){var _=d[f];d[f]=function(){return d[f].overloadTable.hasOwnProperty(arguments.length)||De(`Function '${g}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[f].overloadTable})!`),d[f].overloadTable[arguments.length].apply(this,arguments)},d[f].overloadTable=[],d[f].overloadTable[_.argCount]=_}}function y_(d,f,g){n.hasOwnProperty(d)?((g===void 0||n[d].overloadTable!==void 0&&n[d].overloadTable[g]!==void 0)&&De(`Cannot register public name '${d}' twice`),__(n,d,d),n.hasOwnProperty(g)&&De(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),n[d].overloadTable[g]=f):(n[d]=f,g!==void 0&&(n[d].numArguments=g))}function AS(d,f,g,_,T,I,R,S){this.name=d,this.constructor=f,this.instancePrototype=g,this.rawDestructor=_,this.baseClass=T,this.getActualType=I,this.upcast=R,this.downcast=S,this.pureVirtualFunctions=[]}function Qh(d,f,g){for(;f!==g;)f.upcast||De(`Expected null or instance of ${g.name}, got an instance of ${f.name}`),d=f.upcast(d),f=f.baseClass;return d}function CS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${Zh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Qh(f.$$.ptr,g,this.registeredClass);return _}function RS(d,f){var g;if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),this.isSmartPointer?(g=this.rawConstructor(),d!==null&&d.push(this.rawDestructor,g),g):0;f.$$||De(`Cannot pass "${Zh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var _=f.$$.ptrType.registeredClass;if(g=Qh(f.$$.ptr,_,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&De("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?g=f.$$.smartPtr:De(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:g=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)g=f.$$.smartPtr;else{var T=f.clone();g=this.rawShare(g,Zr.toHandle(function(){T.delete()})),d!==null&&d.push(this.rawDestructor,g)}break;default:De("Unsupporting sharing policy")}return g}function SS(d,f){if(f===null)return this.isReference&&De(`null is not a valid ${this.name}`),0;f.$$||De(`Cannot pass "${Zh(f)}" as a ${this.name}`),f.$$.ptr||De(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&De(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var g=f.$$.ptrType.registeredClass,_=Qh(f.$$.ptr,g,this.registeredClass);return _}function PS(d){return this.rawGetPointee&&(d=this.rawGetPointee(d)),d}function kS(d){this.rawDestructor&&this.rawDestructor(d)}function NS(d){d!==null&&d.delete()}function OS(){Pr.prototype.getPointee=PS,Pr.prototype.destructor=kS,Pr.prototype.argPackAdvance=8,Pr.prototype.readValueFromPointer=kn,Pr.prototype.deleteObject=NS,Pr.prototype.fromWireType=_S}function Pr(d,f,g,_,T,I,R,S,D,F,Q){this.name=d,this.registeredClass=f,this.isReference=g,this.isConst=_,this.isSmartPointer=T,this.pointeeType=I,this.sharingPolicy=R,this.rawGetPointee=S,this.rawConstructor=D,this.rawShare=F,this.rawDestructor=Q,!T&&f.baseClass===void 0?_?(this.toWireType=CS,this.destructorFunction=null):(this.toWireType=SS,this.destructorFunction=null):this.toWireType=RS}function v_(d,f,g){n.hasOwnProperty(d)||an("Replacing nonexistant public symbol"),n[d].overloadTable!==void 0&&g!==void 0?n[d].overloadTable[g]=f:(n[d]=f,n[d].argCount=g)}var xS=(d,f,g)=>{var _=n["dynCall_"+d];return g&&g.length?_.apply(null,[f].concat(g)):_.call(null,f)},Wc=[],Me=d=>{var f=Wc[d];return f||(d>=Wc.length&&(Wc.length=d+1),Wc[d]=f=Re.get(d)),f},DS=(d,f,g)=>{if(d.includes("j"))return xS(d,f,g);var _=Me(f).apply(null,g);return _},MS=(d,f)=>{var g=[];return function(){return g.length=0,Object.assign(g,arguments),DS(d,f,g)}};function jn(d,f){d=jt(d);function g(){return d.includes("j")?MS(d,f):Me(f)}var _=g();return typeof _!="function"&&De(`unknown function pointer with signature ${d}: ${f}`),_}function LS(d,f){var g=g_(f,function(_){this.name=f,this.message=_;var T=new Error(_).stack;T!==void 0&&(this.stack=this.toString()+`
`+T.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(d.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g}var w_=void 0;function E_(d){var f=x_(d),g=jt(f);return kr(f),g}function zc(d,f){var g=[],_={};function T(I){if(!_[I]&&!In[I]){if(Vi[I]){Vi[I].forEach(T);return}g.push(I),_[I]=!0}}throw f.forEach(T),new w_(`${d}: `+g.map(E_).join([", "]))}function VS(d,f,g,_,T,I,R,S,D,F,Q,ie,ce){Q=jt(Q),I=jn(T,I),S&&(S=jn(R,S)),F&&(F=jn(D,F)),ce=jn(ie,ce);var ke=m_(Q);y_(ke,function(){zc(`Cannot construct ${Q} due to unbound types`,[_])}),rr([d,f,g],_?[_]:[],function(nt){nt=nt[0];var It,rt;_?(It=nt.registeredClass,rt=It.instancePrototype):rt=Xr.prototype;var bt=g_(ke,function(){if(Object.getPrototypeOf(this)!==U)throw new Ss("Use 'new' to construct "+Q);if(Z.constructor_body===void 0)throw new Ss(Q+" has no accessible constructor");var Gc=Z.constructor_body[arguments.length];if(Gc===void 0)throw new Ss(`Tried to invoke ctor of ${Q} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);return Gc.apply(this,arguments)}),U=Object.create(rt,{constructor:{value:bt}});bt.prototype=U;var Z=new AS(Q,bt,U,ce,It,I,S,F);Z.baseClass&&(Z.baseClass.__derivedClasses===void 0&&(Z.baseClass.__derivedClasses=[]),Z.baseClass.__derivedClasses.push(Z));var lt=new Pr(Q,Z,!0,!1,!1),gt=new Pr(Q+"*",Z,!1,!1,!1),$i=new Pr(Q+" const*",Z,!1,!0,!1);return p_[d]={pointerType:gt,constPointerType:$i},v_(ke,bt),[lt,gt,$i]})}function Jh(d,f){for(var g=[],_=0;_<d;_++)g.push(W[f+_*4>>2]);return g}function Xh(d,f,g,_,T,I){var R=f.length;R<2&&De("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=f[1]!==null&&g!==null,D=!1,F=1;F<f.length;++F)if(f[F]!==null&&f[F].destructorFunction===void 0){D=!0;break}var Q=f[0].name!=="void",ie=R-2,ce=new Array(ie),ke=[],nt=[];return function(){arguments.length!==ie&&De(`function ${d} called with ${arguments.length} arguments, expected ${ie} args!`),nt.length=0;var It;ke.length=S?2:1,ke[0]=T,S&&(It=f[1].toWireType(nt,this),ke[1]=It);for(var rt=0;rt<ie;++rt)ce[rt]=f[rt+2].toWireType(nt,arguments[rt]),ke.push(ce[rt]);var bt=_.apply(null,ke);function U(Z){if(D)pn(nt);else for(var lt=S?1:2;lt<f.length;lt++){var gt=lt===1?It:ce[lt-2];f[lt].destructorFunction!==null&&f[lt].destructorFunction(gt)}if(Q)return f[0].fromWireType(Z)}return U(bt)}}function $S(d,f,g,_,T,I){var R=Jh(f,g);T=jn(_,T),rr([],[d],function(S){S=S[0];var D=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[f-1]!==void 0)throw new Ss(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[f-1]=()=>{zc(`Cannot construct ${S.name} due to unbound types`,R)},rr([],R,function(F){return F.splice(1,0,null),S.registeredClass.constructor_body[f-1]=Xh(D,F,null,T,I),[]}),[]})}function FS(d,f,g,_,T,I,R,S,D){var F=Jh(g,_);f=jt(f),I=jn(T,I),rr([],[d],function(Q){Q=Q[0];var ie=`${Q.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),S&&Q.registeredClass.pureVirtualFunctions.push(f);function ce(){zc(`Cannot call ${ie} due to unbound types`,F)}var ke=Q.registeredClass.instancePrototype,nt=ke[f];return nt===void 0||nt.overloadTable===void 0&&nt.className!==Q.name&&nt.argCount===g-2?(ce.argCount=g-2,ce.className=Q.name,ke[f]=ce):(__(ke,f,ie),ke[f].overloadTable[g-2]=ce),rr([],F,function(It){var rt=Xh(ie,It,Q,I,R);return ke[f].overloadTable===void 0?(rt.argCount=g-2,ke[f]=rt):ke[f].overloadTable[g-2]=rt,[]}),[]})}function US(){Object.assign(T_.prototype,{get(d){return this.allocated[d]},has(d){return this.allocated[d]!==void 0},allocate(d){var f=this.freelist.pop()||this.allocated.length;return this.allocated[f]=d,f},free(d){this.allocated[d]=void 0,this.freelist.push(d)}})}function T_(){this.allocated=[void 0],this.freelist=[]}var Nn=new T_;function I_(d){d>=Nn.reserved&&--Nn.get(d).refcount===0&&Nn.free(d)}function BS(){for(var d=0,f=Nn.reserved;f<Nn.allocated.length;++f)Nn.allocated[f]!==void 0&&++d;return d}function jS(){Nn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Nn.reserved=Nn.allocated.length,n.count_emval_handles=BS}var Zr={toValue:d=>(d||De("Cannot use deleted val. handle = "+d),Nn.get(d).value),toHandle:d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Nn.allocate({refcount:1,value:d})}}};function HS(d,f){f=jt(f),Sr(d,{name:f,fromWireType:function(g){var _=Zr.toValue(g);return I_(g),_},toWireType:function(g,_){return Zr.toHandle(_)},argPackAdvance:8,readValueFromPointer:kn,destructorFunction:null})}function Zh(d){if(d===null)return"null";var f=typeof d;return f==="object"||f==="array"||f==="function"?d.toString():""+d}function WS(d,f){switch(f){case 2:return function(g){return this.fromWireType(oe[g>>2])};case 3:return function(g){return this.fromWireType(ge[g>>3])};default:throw new TypeError("Unknown float type: "+d)}}function zS(d,f,g){var _=qh(g);f=jt(f),Sr(d,{name:f,fromWireType:function(T){return T},toWireType:function(T,I){return I},argPackAdvance:8,readValueFromPointer:WS(f,_),destructorFunction:null})}function qS(d,f,g,_,T,I,R){var S=Jh(f,g);d=jt(d),T=jn(_,T),y_(d,function(){zc(`Cannot call ${d} due to unbound types`,S)},f-1),rr([],S,function(D){var F=[D[0],null].concat(D.slice(1));return v_(d,Xh(d,F,null,T,I),f-1),[]})}function KS(d,f,g){switch(f){case 0:return g?function(_){return A[_]}:function(_){return k[_]};case 1:return g?function(_){return N[_>>1]}:function(_){return P[_>>1]};case 2:return g?function(_){return j[_>>2]}:function(_){return W[_>>2]};default:throw new TypeError("Unknown integer type: "+d)}}function GS(d,f,g,_,T){f=jt(f);var I=qh(g),R=ie=>ie;if(_===0){var S=32-8*g;R=ie=>ie<<S>>>S}var D=f.includes("unsigned"),F=(ie,ce)=>{},Q;D?Q=function(ie,ce){return F(ce,this.name),ce>>>0}:Q=function(ie,ce){return F(ce,this.name),ce},Sr(d,{name:f,fromWireType:R,toWireType:Q,argPackAdvance:8,readValueFromPointer:KS(f,I,_!==0),destructorFunction:null})}function YS(d,f,g){var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],T=_[f];function I(R){R=R>>2;var S=W,D=S[R],F=S[R+1];return new T(S.buffer,F,D)}g=jt(g),Sr(d,{name:g,fromWireType:I,argPackAdvance:8,readValueFromPointer:I},{ignoreDuplicateRegistrations:!0})}var b_=(d,f,g,_)=>{if(!(_>0))return 0;for(var T=g,I=g+_-1,R=0;R<d.length;++R){var S=d.charCodeAt(R);if(S>=55296&&S<=57343){var D=d.charCodeAt(++R);S=65536+((S&1023)<<10)|D&1023}if(S<=127){if(g>=I)break;f[g++]=S}else if(S<=2047){if(g+1>=I)break;f[g++]=192|S>>6,f[g++]=128|S&63}else if(S<=65535){if(g+2>=I)break;f[g++]=224|S>>12,f[g++]=128|S>>6&63,f[g++]=128|S&63}else{if(g+3>=I)break;f[g++]=240|S>>18,f[g++]=128|S>>12&63,f[g++]=128|S>>6&63,f[g++]=128|S&63}}return f[g]=0,g-T},QS=(d,f,g)=>b_(d,k,f,g),A_=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_<=127?f++:_<=2047?f+=2:_>=55296&&_<=57343?(f+=4,++g):f+=3}return f},C_=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,JS=(d,f,g)=>{for(var _=f+g,T=f;d[T]&&!(T>=_);)++T;if(T-f>16&&d.buffer&&C_)return C_.decode(d.subarray(f,T));for(var I="";f<T;){var R=d[f++];if(!(R&128)){I+=String.fromCharCode(R);continue}var S=d[f++]&63;if((R&224)==192){I+=String.fromCharCode((R&31)<<6|S);continue}var D=d[f++]&63;if((R&240)==224?R=(R&15)<<12|S<<6|D:R=(R&7)<<18|S<<12|D<<6|d[f++]&63,R<65536)I+=String.fromCharCode(R);else{var F=R-65536;I+=String.fromCharCode(55296|F>>10,56320|F&1023)}}return I},ed=(d,f)=>d?JS(k,d,f):"";function XS(d,f){f=jt(f);var g=f==="std::string";Sr(d,{name:f,fromWireType:function(_){var T=W[_>>2],I=_+4,R;if(g)for(var S=I,D=0;D<=T;++D){var F=I+D;if(D==T||k[F]==0){var Q=F-S,ie=ed(S,Q);R===void 0?R=ie:(R+=String.fromCharCode(0),R+=ie),S=F+1}}else{for(var ce=new Array(T),D=0;D<T;++D)ce[D]=String.fromCharCode(k[I+D]);R=ce.join("")}return kr(_),R},toWireType:function(_,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var I,R=typeof T=="string";R||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array||De("Cannot pass non-string to std::string"),g&&R?I=A_(T):I=T.length;var S=nd(4+I+1),D=S+4;if(W[S>>2]=I,g&&R)QS(T,D,I+1);else if(R)for(var F=0;F<I;++F){var Q=T.charCodeAt(F);Q>255&&(kr(D),De("String has UTF-16 code units that do not fit in 8 bits")),k[D+F]=Q}else for(var F=0;F<I;++F)k[D+F]=T[F];return _!==null&&_.push(kr,S),S},argPackAdvance:8,readValueFromPointer:kn,destructorFunction:function(_){kr(_)}})}var R_=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ZS=(d,f)=>{for(var g=d,_=g>>1,T=_+f/2;!(_>=T)&&P[_];)++_;if(g=_<<1,g-d>32&&R_)return R_.decode(k.subarray(d,g));for(var I="",R=0;!(R>=f/2);++R){var S=N[d+R*2>>1];if(S==0)break;I+=String.fromCharCode(S)}return I},eP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<2)return 0;g-=2;for(var _=f,T=g<d.length*2?g/2:d.length,I=0;I<T;++I){var R=d.charCodeAt(I);N[f>>1]=R,f+=2}return N[f>>1]=0,f-_},tP=d=>d.length*2,nP=(d,f)=>{for(var g=0,_="";!(g>=f/4);){var T=j[d+g*4>>2];if(T==0)break;if(++g,T>=65536){var I=T-65536;_+=String.fromCharCode(55296|I>>10,56320|I&1023)}else _+=String.fromCharCode(T)}return _},rP=(d,f,g)=>{if(g===void 0&&(g=2147483647),g<4)return 0;for(var _=f,T=_+g-4,I=0;I<d.length;++I){var R=d.charCodeAt(I);if(R>=55296&&R<=57343){var S=d.charCodeAt(++I);R=65536+((R&1023)<<10)|S&1023}if(j[f>>2]=R,f+=4,f+4>T)break}return j[f>>2]=0,f-_},iP=d=>{for(var f=0,g=0;g<d.length;++g){var _=d.charCodeAt(g);_>=55296&&_<=57343&&++g,f+=4}return f},sP=function(d,f,g){g=jt(g);var _,T,I,R,S;f===2?(_=ZS,T=eP,R=tP,I=()=>P,S=1):f===4&&(_=nP,T=rP,R=iP,I=()=>W,S=2),Sr(d,{name:g,fromWireType:function(D){for(var F=W[D>>2],Q=I(),ie,ce=D+4,ke=0;ke<=F;++ke){var nt=D+4+ke*f;if(ke==F||Q[nt>>S]==0){var It=nt-ce,rt=_(ce,It);ie===void 0?ie=rt:(ie+=String.fromCharCode(0),ie+=rt),ce=nt+f}}return kr(D),ie},toWireType:function(D,F){typeof F!="string"&&De(`Cannot pass non-string to C++ string type ${g}`);var Q=R(F),ie=nd(4+Q+f);return W[ie>>2]=Q>>S,T(F,ie+4,Q+f),D!==null&&D.push(kr,ie),ie},argPackAdvance:8,readValueFromPointer:kn,destructorFunction:function(D){kr(D)}})};function oP(d,f,g,_,T,I){Ye[d]={name:jt(f),rawConstructor:jn(g,_),rawDestructor:jn(T,I),fields:[]}}function aP(d,f,g,_,T,I,R,S,D,F){Ye[d].fields.push({fieldName:jt(f),getterReturnType:g,getter:jn(_,T),getterContext:I,setterArgumentType:R,setter:jn(S,D),setterContext:F})}function cP(d,f){f=jt(f),Sr(d,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:function(){},toWireType:function(g,_){}})}var lP={};function uP(d){var f=lP[d];return f===void 0?jt(d):f}function S_(){if(typeof globalThis=="object")return globalThis;function d(f){f.$$$embind_global$$$=f;var g=typeof $$$embind_global$$$=="object"&&f.$$$embind_global$$$==f;return g||delete f.$$$embind_global$$$,g}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&d(global)?$$$embind_global$$$=global:typeof self=="object"&&d(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function hP(d){return d===0?Zr.toHandle(S_()):(d=uP(d),Zr.toHandle(S_()[d]))}function dP(d){d>4&&(Nn.get(d).refcount+=1)}function P_(d,f){var g=In[d];return g===void 0&&De(f+" has unknown type "+E_(d)),g}function fP(d){var f=new Array(d+1);return function(g,_,T){f[0]=g;for(var I=0;I<d;++I){var R=P_(W[_+I*4>>2],"parameter "+I);f[I+1]=R.readValueFromPointer(T),T+=R.argPackAdvance}var S=new(g.bind.apply(g,f));return Zr.toHandle(S)}}var k_={};function pP(d,f,g,_){d=Zr.toValue(d);var T=k_[f];return T||(T=fP(f),k_[f]=T),T(d,g,_)}function mP(d,f){d=P_(d,"_emval_take_value");var g=d.readValueFromPointer(f);return Zr.toHandle(g)}var gP=()=>{Bn("")},_P=(d,f,g)=>k.copyWithin(d,f,f+g),yP=()=>2147483648,vP=d=>{var f=y.buffer,g=d-f.byteLength+65535>>>16;try{return y.grow(g),ze(),1}catch{}},wP=d=>{var f=k.length;d>>>=0;var g=yP();if(d>g)return!1;for(var _=(D,F)=>D+(F-D%F)%F,T=1;T<=4;T*=2){var I=f*(1+.2/T);I=Math.min(I,d+100663296);var R=Math.min(g,_(Math.max(d,I),65536)),S=vP(R);if(S)return!0}return!1},td={},EP=()=>o||"./this.program",zo=()=>{if(!zo.strings){var d=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:d,_:EP()};for(var g in td)td[g]===void 0?delete f[g]:f[g]=td[g];var _=[];for(var g in f)_.push(`${g}=${f[g]}`);zo.strings=_}return zo.strings},TP=(d,f)=>{for(var g=0;g<d.length;++g)A[f++>>0]=d.charCodeAt(g);A[f>>0]=0},IP=(d,f)=>{var g=0;return zo().forEach(function(_,T){var I=f+g;W[d+T*4>>2]=I,TP(_,I),g+=_.length+1}),0},bP=(d,f)=>{var g=zo();W[d>>2]=g.length;var _=0;return g.forEach(function(T){_+=T.length+1}),W[f>>2]=_,0};function AP(d){return d}var qc=d=>d%4===0&&(d%100!==0||d%400===0),CP=(d,f)=>{for(var g=0,_=0;_<=f;g+=d[_++]);return g},N_=[31,29,31,30,31,30,31,31,30,31,30,31],O_=[31,28,31,30,31,30,31,31,30,31,30,31],RP=(d,f)=>{for(var g=new Date(d.getTime());f>0;){var _=qc(g.getFullYear()),T=g.getMonth(),I=(_?N_:O_)[T];if(f>I-g.getDate())f-=I-g.getDate()+1,g.setDate(1),T<11?g.setMonth(T+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g};function SP(d,f,g){var _=g>0?g:A_(d)+1,T=new Array(_),I=b_(d,T,0,T.length);return f&&(T.length=I),T}var PP=(d,f)=>{A.set(d,f)},kP=(d,f,g,_)=>{var T=j[_+40>>2],I={tm_sec:j[_>>2],tm_min:j[_+4>>2],tm_hour:j[_+8>>2],tm_mday:j[_+12>>2],tm_mon:j[_+16>>2],tm_year:j[_+20>>2],tm_wday:j[_+24>>2],tm_yday:j[_+28>>2],tm_isdst:j[_+32>>2],tm_gmtoff:j[_+36>>2],tm_zone:T?ed(T):""},R=ed(g),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var D in S)R=R.replace(new RegExp(D,"g"),S[D]);var F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Q=["January","February","March","April","May","June","July","August","September","October","November","December"];function ie(U,Z,lt){for(var gt=typeof U=="number"?U.toString():U||"";gt.length<Z;)gt=lt[0]+gt;return gt}function ce(U,Z){return ie(U,Z,"0")}function ke(U,Z){function lt($i){return $i<0?-1:$i>0?1:0}var gt;return(gt=lt(U.getFullYear()-Z.getFullYear()))===0&&(gt=lt(U.getMonth()-Z.getMonth()))===0&&(gt=lt(U.getDate()-Z.getDate())),gt}function nt(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function It(U){var Z=RP(new Date(U.tm_year+1900,0,1),U.tm_yday),lt=new Date(Z.getFullYear(),0,4),gt=new Date(Z.getFullYear()+1,0,4),$i=nt(lt),Gc=nt(gt);return ke($i,Z)<=0?ke(Gc,Z)<=0?Z.getFullYear()+1:Z.getFullYear():Z.getFullYear()-1}var rt={"%a":U=>F[U.tm_wday].substring(0,3),"%A":U=>F[U.tm_wday],"%b":U=>Q[U.tm_mon].substring(0,3),"%B":U=>Q[U.tm_mon],"%C":U=>{var Z=U.tm_year+1900;return ce(Z/100|0,2)},"%d":U=>ce(U.tm_mday,2),"%e":U=>ie(U.tm_mday,2," "),"%g":U=>It(U).toString().substring(2),"%G":U=>It(U),"%H":U=>ce(U.tm_hour,2),"%I":U=>{var Z=U.tm_hour;return Z==0?Z=12:Z>12&&(Z-=12),ce(Z,2)},"%j":U=>ce(U.tm_mday+CP(qc(U.tm_year+1900)?N_:O_,U.tm_mon-1),3),"%m":U=>ce(U.tm_mon+1,2),"%M":U=>ce(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>ce(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var Z=U.tm_yday+7-U.tm_wday;return ce(Math.floor(Z/7),2)},"%V":U=>{var Z=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&Z++,Z){if(Z==53){var lt=(U.tm_wday+371-U.tm_yday)%7;lt!=4&&(lt!=3||!qc(U.tm_year))&&(Z=1)}}else{Z=52;var gt=(U.tm_wday+7-U.tm_yday-1)%7;(gt==4||gt==5&&qc(U.tm_year%400-1))&&Z++}return ce(Z,2)},"%w":U=>U.tm_wday,"%W":U=>{var Z=U.tm_yday+7-(U.tm_wday+6)%7;return ce(Math.floor(Z/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var Z=U.tm_gmtoff,lt=Z>=0;return Z=Math.abs(Z)/60,Z=Z/60*100+Z%60,(lt?"+":"-")+("0000"+Z).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};R=R.replace(/%%/g,"\0\0");for(var D in rt)R.includes(D)&&(R=R.replace(new RegExp(D,"g"),rt[D](I)));R=R.replace(/\0\0/g,"%");var bt=SP(R,!1);return bt.length>f?0:(PP(bt,d),bt.length-1)},NP=(d,f,g,_,T)=>kP(d,f,g,_);Bt=n.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},sS(),Ss=n.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},TS(),pS(),OS(),w_=n.UnboundTypeError=LS(Error,"UnboundTypeError"),US(),jS();var OP={q:M,u:Y,a:ne,h:X,l:re,I:ue,P:ve,n:qe,ba:Ue,d:z,oa:rS,Y:iS,fa:aS,na:VS,ma:$S,D:FS,ea:HS,W:zS,J:qS,w:GS,s:YS,V:XS,L:sP,Q:oP,pa:aP,ga:cP,U:I_,la:hP,R:dP,ia:pP,ka:mP,K:gP,da:_P,ca:wP,$:IP,aa:bP,H:JP,T:o1,B:ZP,p:GP,b:xP,C:QP,ha:t1,c:$P,j:UP,i:LP,x:XP,O:YP,v:qP,G:r1,N:i1,A:e1,F:a1,Z:l1,X:u1,k:FP,f:VP,e:MP,g:DP,M:s1,m:zP,o:BP,S:jP,t:WP,ja:KP,y:n1,r:HP,E:c1,z:AP,_:NP};w();var kr=n._free=d=>(kr=n._free=v.sa)(d),nd=n._malloc=d=>(nd=n._malloc=v.ta)(d),x_=d=>(x_=v.va)(d);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=v.wa)();var Ie=(d,f)=>(Ie=v.xa)(d,f),qo=d=>(qo=v.ya)(d),Se=()=>(Se=v.za)(),Pe=d=>(Pe=v.Aa)(d),D_=d=>(D_=v.Ba)(d),M_=d=>(M_=v.Ca)(d),L_=(d,f,g)=>(L_=v.Da)(d,f,g),V_=d=>(V_=v.Ea)(d);n.dynCall_viijii=(d,f,g,_,T,I,R)=>(n.dynCall_viijii=v.Fa)(d,f,g,_,T,I,R);var $_=n.dynCall_jiii=(d,f,g,_)=>($_=n.dynCall_jiii=v.Ga)(d,f,g,_),F_=n.dynCall_jiiii=(d,f,g,_,T)=>(F_=n.dynCall_jiiii=v.Ha)(d,f,g,_,T);n.dynCall_iiiiij=(d,f,g,_,T,I,R)=>(n.dynCall_iiiiij=v.Ia)(d,f,g,_,T,I,R),n.dynCall_iiiiijj=(d,f,g,_,T,I,R,S,D)=>(n.dynCall_iiiiijj=v.Ja)(d,f,g,_,T,I,R,S,D),n.dynCall_iiiiiijj=(d,f,g,_,T,I,R,S,D,F)=>(n.dynCall_iiiiiijj=v.Ka)(d,f,g,_,T,I,R,S,D,F);function xP(d,f){var g=Se();try{return Me(d)(f)}catch(_){if(Pe(g),_!==_+0)throw _;Ie(1,0)}}function DP(d,f,g,_){var T=Se();try{Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function MP(d,f,g){var _=Se();try{Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function LP(d,f,g,_,T){var I=Se();try{return Me(d)(f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}function VP(d,f){var g=Se();try{Me(d)(f)}catch(_){if(Pe(g),_!==_+0)throw _;Ie(1,0)}}function $P(d,f,g){var _=Se();try{return Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function FP(d){var f=Se();try{Me(d)()}catch(g){if(Pe(f),g!==g+0)throw g;Ie(1,0)}}function UP(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function BP(d,f,g,_,T,I){var R=Se();try{Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function jP(d,f,g,_,T,I,R){var S=Se();try{Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function HP(d,f,g,_,T,I,R,S,D,F,Q){var ie=Se();try{Me(d)(f,g,_,T,I,R,S,D,F,Q)}catch(ce){if(Pe(ie),ce!==ce+0)throw ce;Ie(1,0)}}function WP(d,f,g,_,T,I,R,S){var D=Se();try{Me(d)(f,g,_,T,I,R,S)}catch(F){if(Pe(D),F!==F+0)throw F;Ie(1,0)}}function zP(d,f,g,_,T){var I=Se();try{Me(d)(f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}function qP(d,f,g,_,T,I,R){var S=Se();try{return Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function KP(d,f,g,_,T,I,R,S,D){var F=Se();try{Me(d)(f,g,_,T,I,R,S,D)}catch(Q){if(Pe(F),Q!==Q+0)throw Q;Ie(1,0)}}function GP(d){var f=Se();try{return Me(d)()}catch(g){if(Pe(f),g!==g+0)throw g;Ie(1,0)}}function YP(d,f,g,_,T,I,R){var S=Se();try{return Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function QP(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function JP(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function XP(d,f,g,_,T,I){var R=Se();try{return Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function ZP(d,f,g,_,T,I){var R=Se();try{return Me(d)(f,g,_,T,I)}catch(S){if(Pe(R),S!==S+0)throw S;Ie(1,0)}}function e1(d,f,g,_,T,I,R,S,D,F){var Q=Se();try{return Me(d)(f,g,_,T,I,R,S,D,F)}catch(ie){if(Pe(Q),ie!==ie+0)throw ie;Ie(1,0)}}function t1(d,f,g){var _=Se();try{return Me(d)(f,g)}catch(T){if(Pe(_),T!==T+0)throw T;Ie(1,0)}}function n1(d,f,g,_,T,I,R,S,D,F){var Q=Se();try{Me(d)(f,g,_,T,I,R,S,D,F)}catch(ie){if(Pe(Q),ie!==ie+0)throw ie;Ie(1,0)}}function r1(d,f,g,_,T,I,R,S){var D=Se();try{return Me(d)(f,g,_,T,I,R,S)}catch(F){if(Pe(D),F!==F+0)throw F;Ie(1,0)}}function i1(d,f,g,_,T,I,R,S,D){var F=Se();try{return Me(d)(f,g,_,T,I,R,S,D)}catch(Q){if(Pe(F),Q!==Q+0)throw Q;Ie(1,0)}}function s1(d,f,g,_,T,I,R){var S=Se();try{Me(d)(f,g,_,T,I,R)}catch(D){if(Pe(S),D!==D+0)throw D;Ie(1,0)}}function o1(d,f,g,_){var T=Se();try{return Me(d)(f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function a1(d,f,g,_,T,I,R,S,D,F,Q,ie){var ce=Se();try{return Me(d)(f,g,_,T,I,R,S,D,F,Q,ie)}catch(ke){if(Pe(ce),ke!==ke+0)throw ke;Ie(1,0)}}function c1(d,f,g,_,T,I,R,S,D,F,Q,ie,ce,ke,nt,It){var rt=Se();try{Me(d)(f,g,_,T,I,R,S,D,F,Q,ie,ce,ke,nt,It)}catch(bt){if(Pe(rt),bt!==bt+0)throw bt;Ie(1,0)}}function l1(d,f,g,_){var T=Se();try{return $_(d,f,g,_)}catch(I){if(Pe(T),I!==I+0)throw I;Ie(1,0)}}function u1(d,f,g,_,T){var I=Se();try{return F_(d,f,g,_,T)}catch(R){if(Pe(I),R!==R+0)throw R;Ie(1,0)}}var Kc;Et=function d(){Kc||U_(),Kc||(Et=d)};function U_(){if(wt>0||(Cr(),wt>0))return;function d(){Kc||(Kc=!0,n.calledRun=!0,!b&&(on(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),je()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),d()},1)):d()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return U_(),e.ready}})();function _U(t){return wA(EA,t)}async function yU(t,{tryHarder:e=fi.tryHarder,formats:n=fi.formats,maxSymbols:r=fi.maxSymbols}=fi){return pU(t,{tryHarder:e,formats:n,maxSymbols:r},EA)}const TA=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function vU(t){for(const[e,n]of TA)if(t===n)return e;return"unknown"}var Pl;class xh{constructor(e={}){JF(this,Pl,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!tw.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),_U().catch(()=>{}),XF(this,Pl,r??[])}catch(r){throw nw(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return tw.filter(e=>e!=="unknown")}async detect(e){try{const n=await oU(e);if(n===null)return[];let r;try{r=await yU(n,{tryHarder:!0,formats:QF(this,Pl).map(i=>TA.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:a,y:c},bottomLeft:{x:l,y:u},bottomRight:{x:h,y:p}}=i.position,m=Math.min(s,a,l,h),y=Math.min(o,c,u,p),v=Math.max(s,a,l,h),b=Math.max(o,c,u,p);return{boundingBox:new DOMRectReadOnly(m,y,v-m,b-y),rawValue:new TextDecoder().decode(i.bytes),format:vU(i.format),cornerPoints:[{x:s,y:o},{x:a,y:c},{x:h,y:p},{x:l,y:u}]}})}catch(n){throw nw(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}Pl=new WeakMap;const IA=(t,e,n="error")=>{let r,i;const s=new Promise((o,a)=>{r=o,i=a,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},ow=t=>new Promise(e=>setTimeout(e,t));class wU extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class bA extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class EU extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class TU extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let cp;const IU=t=>{cp=new xh({formats:t})},bU=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{cp=new xh({formats:i});const s=o=>async a=>{if(t.readyState>1){const{lastScanned:c,contentBefore:l,lastScanHadContent:u}=o;if(a-c<r)window.requestAnimationFrame(s(o));else{const h=await cp.detect(t),p=h.some(v=>!l.includes(v.rawValue));p&&e(h);const m=h.length>0;m&&n(h),!m&&u&&n(h);const y={lastScanned:a,lastScanHadContent:m,contentBefore:p?h.map(v=>v.rawValue):l};window.requestAnimationFrame(s(y))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},AU=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new wU;const e=document.createElement("img");return e.src=t,await IA(e,"load"),e},AA=async(t,e=["qr_code"])=>await new xh({formats:e}).detect(t),CU=async(t,e=["qr_code"])=>{const n=new xh({formats:e}),r=await AU(t);return await n.detect(r)};var CA={},En={};Object.defineProperty(En,"__esModule",{value:!0});En.compactObject=PA;En.deprecated=MU;var RU=En.detectBrowser=LU;En.disableLog=OU;En.disableWarnings=xU;En.extractVersion=kl;En.filterStats=VU;En.log=DU;En.walkStats=pu;En.wrapPeerConnectionEvent=NU;function SU(t,e,n){return e=PU(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PU(t){var e=kU(t,"string");return Ri(e)==="symbol"?e:String(e)}function kU(t,e){if(Ri(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ri(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ri(t){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ri(t)}var RA=!0,SA=!0;function kl(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function NU(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);var c=function(l){var u=n(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};var s=r.removeEventListener;r.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);var c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function OU(t){return typeof t!="boolean"?new Error("Argument type: "+Ri(t)+". Please use a boolean."):(RA=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function xU(t){return typeof t!="boolean"?new Error("Argument type: "+Ri(t)+". Please use a boolean."):(SA=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function DU(){if((typeof window>"u"?"undefined":Ri(window))==="object"){if(RA)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function MU(t,e){SA&&console.warn(t+" is deprecated, please use "+e+" instead.")}function LU(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=kl(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=kl(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=kl(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function aw(t){return Object.prototype.toString.call(t)==="[object Object]"}function PA(t){return aw(t)?Object.keys(t).reduce(function(e,n){var r=aw(t[n]),i=r?PA(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,SU({},n,i))},{}):t}function pu(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?pu(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){pu(t,t.get(i),n)})}))}function VU(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(a){a.type===r&&a.trackId===o.id&&pu(t,a,i)})}),i}Object.defineProperty(CA,"__esModule",{value:!0});var $U=CA.shimGetUserMedia=BU,FU=UU(En);function kA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(kA=function(r){return r?n:e})(t)}function UU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||si(t)!=="object"&&typeof t!="function")return{default:t};var n=kA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function si(t){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},si(t)}var cw=FU.log;function BU(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(c){if(si(c)!=="object"||c.mandatory||c.optional)return c;var l={};return Object.keys(c).forEach(function(u){if(!(u==="require"||u==="advanced"||u==="mediaSource")){var h=si(c[u])==="object"?c[u]:{ideal:c[u]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);var p=function(y,v){return y?y+v.charAt(0).toUpperCase()+v.slice(1):v==="deviceId"?"sourceId":v};if(h.ideal!==void 0){l.optional=l.optional||[];var m={};typeof h.ideal=="number"?(m[p("min",u)]=h.ideal,l.optional.push(m),m={},m[p("max",u)]=h.ideal,l.optional.push(m)):(m[p("",u)]=h.ideal,l.optional.push(m))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[p("",u)]=h.exact):["min","max"].forEach(function(y){h[y]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[p(y,u)]=h[y])})}}),c.advanced&&(l.optional=(l.optional||[]).concat(c.advanced)),l},i=function(c,l){if(e.version>=61)return l(c);if(c=JSON.parse(JSON.stringify(c)),c&&si(c.audio)==="object"){var u=function(y,v,b){v in y&&!(b in y)&&(y[b]=y[v],delete y[v])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=r(c.audio)}if(c&&si(c.video)==="object"){var h=c.video.facingMode;h=h&&(si(h)==="object"?h:{ideal:h});var p=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete c.video.facingMode;var m;if(h.exact==="environment"||h.ideal==="environment"?m=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(m=["front"]),m)return n.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(b){return b.kind==="videoinput"});var v=y.find(function(b){return m.some(function(A){return b.label.toLowerCase().includes(A)})});return!v&&y.length&&m.includes("back")&&(v=y[y.length-1]),v&&(c.video.deviceId=h.exact?{exact:v.deviceId}:{ideal:v.deviceId}),c.video=r(c.video),cw("chrome: "+JSON.stringify(c)),l(c)})}c.video=r(c.video)}return cw("chrome: "+JSON.stringify(c)),l(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(c,l,u){i(c,function(h){n.webkitGetUserMedia(h,l,function(p){u&&u(s(p))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(c){return i(c,function(l){return a(l).then(function(u){if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(function(h){h.stop()}),new DOMException("","NotFoundError");return u},function(u){return Promise.reject(s(u))})})}}}}var NA={};Object.defineProperty(NA,"__esModule",{value:!0});var jU=NA.shimGetUserMedia=zU,HU=WU(En);function OA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(OA=function(r){return r?n:e})(t)}function WU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Ks(t)!=="object"&&typeof t!="function")return{default:t};var n=OA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Ks(t){"@babel/helpers - typeof";return Ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ks(t)}function zU(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(c,l,u){HU.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(c).then(l,u)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(c,l,u){l in c&&!(u in c)&&(c[u]=c[l],delete c[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(c){return Ks(c)==="object"&&Ks(c.audio)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c.audio,"autoGainControl","mozAutoGainControl"),i(c.audio,"noiseSuppression","mozNoiseSuppression")),s(c)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var c=o.apply(this,arguments);return i(c,"mozAutoGainControl","autoGainControl"),i(c,"mozNoiseSuppression","noiseSuppression"),c}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(c){return this.kind==="audio"&&Ks(c)==="object"&&(c=JSON.parse(JSON.stringify(c)),i(c,"autoGainControl","mozAutoGainControl"),i(c,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[c])}}}}var Tr={};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.shimAudioContext=t4;Tr.shimCallbacksAPI=QU;Tr.shimConstraints=MA;Tr.shimCreateOfferLegacy=e4;var qU=Tr.shimGetUserMedia=JU;Tr.shimLocalStreamsAPI=GU;Tr.shimRTCIceServerUrls=XU;Tr.shimRemoteStreamsAPI=YU;Tr.shimTrackEventTransceiver=ZU;var xA=KU(En);function DA(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(DA=function(r){return r?n:e})(t)}function KU(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Si(t)!=="object"&&typeof t!="function")return{default:t};var n=DA(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Si(t){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Si(t)}function GU(t){if(!(Si(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(a){r._localStreams?r._localStreams.includes(a)||r._localStreams.push(a):r._localStreams=[a]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function YU(t){if(!(Si(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function QU(t){if(!(Si(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h},e.createAnswer=function(c,l){var u=arguments.length>=2?arguments[2]:arguments[0],h=r.apply(this,[u]);return l?(h.then(c,l),Promise.resolve()):h};var a=function(c,l,u){var h=i.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){var h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){var h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}}function JU(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(MA(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function MA(t){return t&&t.video!==void 0?Object.assign({},t,{video:xA.compactObject(t.video)}):t}function XU(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(xA.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function ZU(t){Si(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function e4(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function t4(t){Si(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const n4=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Or(t,e){if(t===!1)throw new Error(e??"assertion failure")}const r4=n4(()=>{const t=RU(window);switch(t.browser){case"chrome":$U(window,t);break;case"firefox":jU(window,t);break;case"safari":qU(window,t);break;default:throw new bA}});let Mr={isActive:!1};function Ud(){if(Mr.isActive){Mr.videoEl.src="",Mr.videoEl.srcObject=null,Mr.videoEl.load();for(const t of Mr.stream.getTracks())Mr.stream.removeTrack(t),t.stop();Mr={isActive:!1}}}async function i4(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new EU;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new bA;r4();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([IA(t,"loadeddata"),ow(3e3).then(()=>{throw new TU})]),await ow(500),n){const[a]=s.getVideoTracks();a.getCapabilities().torch?a.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Mr={videoEl:t,stream:s,isActive:!0};const[o]=Mr.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const s4={class:"qrcode-stream-wrapper"},o4={class:"qrcode-stream-overlay"},a4=wr({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=yt(),i=yt(),s=yt(),o=yt(!1),a=yt(!1);rm(()=>{a.value=!0}),im(()=>{Ud()});const c=Yt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:a.value&&!n.paused}));gi(c,async m=>{const y=s.value;Or(y!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const v=r.value;Or(v!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const b=v.getContext("2d");if(Or(b!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const A=await i4(y,m);a.value?(o.value=!0,e("camera-on",A)):Ud()}catch(A){e("error",A)}else v.width=y.videoWidth,v.height=y.videoHeight,b.drawImage(y,0,0,y.videoWidth,y.videoHeight),Ud(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=ek(n);gi(l,m=>{a.value&&IU(m)});const u=Yt(()=>c.value.shouldStream&&o.value);gi(u,m=>{if(m){Or(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),h(r.value),Or(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),h(i.value);const y=()=>n.track===void 0?500:40;Or(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),bU(s.value,{detectHandler:v=>e("detect",v),formats:n.formats,locateHandler:p,minDelay:y()})}});const h=m=>{const y=m.getContext("2d");Or(y!==null,"canvas 2d context should always be non-null"),y.clearRect(0,0,m.width,m.height)},p=m=>{const y=i.value;Or(y!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const v=s.value;if(Or(v!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||n.track===void 0)h(y);else{const b=v.offsetWidth,A=v.offsetHeight,k=v.videoWidth,N=v.videoHeight,P=Math.max(b/k,A/N),j=k*P,W=N*P,oe=j/k,ge=W/N,ze=(b-j)/2,Re=(A-W)/2,ct=({x:on,y:je})=>({x:Math.floor(on*oe),y:Math.floor(je*ge)}),Dt=({x:on,y:je})=>({x:Math.floor(on+ze),y:Math.floor(je+Re)}),Ge=m.map(on=>{const{boundingBox:je,cornerPoints:Ve}=on,{x:Te,y:Tn}=Dt(ct({x:je.x,y:je.y})),{x:wt,y:Et}=ct({x:je.width,y:je.height});return{...on,cornerPoints:Ve.map(Tt=>Dt(ct(Tt))),boundingBox:DOMRectReadOnly.fromRect({x:Te,y:Tn,width:wt,height:Et})}});y.width=v.offsetWidth,y.height=v.offsetHeight;const Cr=y.getContext("2d");n.track(Ge,Cr)}};return(m,y)=>(hn(),dr("div",s4,[_t("video",{ref_key:"videoRef",ref:s,class:Fu([{"qrcode-stream-camera--hidden":!u.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),yk(_t("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[SN,!u.value]]),_t("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),_t("div",o4,[vE(m.$slots,"default",{},void 0,!0)])]))}}),c4=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},LA=c4(a4,[["__scopeId","data-v-dfa4038c"]]),l4=wr({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))AA(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(hn(),dr("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),u4=["onDrop"],h4=wr({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const a=await o;e("detect",a)}catch(a){e("error",a)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const a=[...Array.from(o.files)],c=o.getData("text/uri-list");a.forEach(l=>{r(AA(l))}),c!==""&&r(CU(c,n.formats))};return(o,a)=>(hn(),dr("div",{onDrop:tl(s,["prevent","stop"]),onDragenter:a[0]||(a[0]=tl(c=>i(!0),["prevent","stop"])),onDragleave:a[1]||(a[1]=tl(c=>i(!1),["prevent","stop"])),onDragover:a[2]||(a[2]=tl(()=>{},["prevent","stop"]))},[vE(o.$slots,"default")],40,u4))}});function d4(t){t.component("qrcode-stream",LA),t.component("qrcode-capture",l4),t.component("qrcode-drop-zone",h4)}const f4={install:d4};let mu=null;typeof window<"u"?mu=window.Vue:typeof global<"u"&&(mu=global.Vue);mu&&mu.use(f4);const p4={class:"qrScanner"},m4=wr({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=yt(!0);yt();function r(s){s.length>=1&&e("codeFound",s[0].rawValue)}function i(){n.value=!1}return(s,o)=>(hn(),dr("div",p4,[Xt(Mt(LA),{onDetect:r,constraints:{facingMode:"environment"},onCameraOn:i},{default:fE(()=>[n.value?(hn(),dr("div",{key:0,class:"loading-indicator","on:cameraOn":i},"Caricamento...",32)):Va("",!0)]),_:1})]))}});function Ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function le(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function lw(t){return t!==void 0&&t.enterprise!==void 0}class g4{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function VA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _4=VA,$A=new Ni("auth","Firebase",VA());/**
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
 */const gu=new Po("@firebase/auth");function y4(t,...e){gu.logLevel<=Oe.WARN&&gu.warn(`Auth (${Oi}): ${t}`,...e)}function Nl(t,...e){gu.logLevel<=Oe.ERROR&&gu.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Cg(t,...e)}function mr(t,...e){return Cg(t,...e)}function FA(t,e,n){const r=Object.assign(Object.assign({},_4()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function UA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vn(t,"argument-error"),FA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $A.create(t,...e)}function he(t,e,...n){if(!t)throw Cg(e,...n)}function Vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function Gr(t,e){t||Vr(e)}/**
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
 */function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function v4(){return uw()==="http:"||uw()==="https:"}function uw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v4()||gT()||"connection"in navigator)?navigator.onLine:!0}function E4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gr(n>e,"Short delay should be less than long delay!"),this.isMobile=_m()||_T()}get(){return w4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rg(t,e){Gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class BA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const I4=new Nc(3e4,6e4);function Ts(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,i={}){return jA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=So(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),BA.fetch()(HA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function jA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T4),e);try{const i=new b4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw dl(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw FA(t,u,l);Vn(t,u)}}catch(i){if(i instanceof Fn)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function Oc(t,e,n,r,i={}){const s=await Mi(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function HA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rg(t.config,i):`${t.config.apiScheme}://${i}`}class b4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mr(this.auth,"network-request-failed")),I4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mr(t,e,r);return i.customData._tokenResponse=n,i}async function A4(t,e){return Mi(t,"GET","/v2/recaptchaConfig",Ts(t,e))}/**
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
 */async function C4(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function R4(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S4(t,e=!1){const n=dn(t),r=await n.getIdToken(e),i=Sg(r);he(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ra(Bd(i.auth_time)),issuedAtTime:Ra(Bd(i.iat)),expirationTime:Ra(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function Sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gl(n);return i?JSON.parse(i):(Nl("Failed to decode base64 JWT payload"),null)}catch(i){return Nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function P4(t){const e=Sg(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&k4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function k4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class N4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class WA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vo(t,R4(n,{idToken:r}));he(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D4(s.providerUserInfo):[],a=x4(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WA(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function O4(t){const e=dn(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D4(t){return t.map(e=>{var{providerId:n}=e,r=Ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function M4(t,e){const n=await jA(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=HA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class sc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return he(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await M4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sc;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(he(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sc,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function ni(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S4(this,e)}reload(){return O4(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vo(this,C4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:j,providerData:W,stsTokenManager:oe}=n;he(N&&oe,e,"internal-error");const ge=sc.fromJSON(this.name,oe);he(typeof N=="string",e,"internal-error"),ni(h,e.name),ni(p,e.name),he(typeof P=="boolean",e,"internal-error"),he(typeof j=="boolean",e,"internal-error"),ni(m,e.name),ni(y,e.name),ni(v,e.name),ni(b,e.name),ni(A,e.name),ni(k,e.name);const ze=new rs({uid:N,auth:e,email:p,emailVerified:P,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:ge,createdAt:A,lastLoginAt:k});return W&&Array.isArray(W)&&(ze.providerData=W.map(Re=>Object.assign({},Re))),b&&(ze._redirectEventId=b),ze}static async _fromIdTokenResponse(e,n,r=!1){const i=new sc;i.updateFromServerResponse(n);const s=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _u(s),s}}/**
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
 */const hw=new Map;function $r(t){Gr(t instanceof Function,"Expected a class definition");let e=hw.get(t);return e?(Gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hw.set(t,e),e)}/**
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
 */class zA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zA.type="NONE";const dw=zA;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs($r(dw),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||$r(dw);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Gs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Gs(s,e,r))}}/**
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
 */function fw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QA(e))return"Blackberry";if(JA(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||KA(e))&&!e.includes("edge/"))return"Chrome";if(YA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qA(t=rn()){return/firefox\//i.test(t)}function Pg(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KA(t=rn()){return/crios\//i.test(t)}function GA(t=rn()){return/iemobile/i.test(t)}function YA(t=rn()){return/android/i.test(t)}function QA(t=rn()){return/blackberry/i.test(t)}function JA(t=rn()){return/webos/i.test(t)}function Dh(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function L4(t=rn()){var e;return Dh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V4(){return Wx()&&document.documentMode===10}function XA(t=rn()){return Dh(t)||YA(t)||JA(t)||QA(t)||/windows phone/i.test(t)||GA(t)}function $4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ZA(t,e=[]){let n;switch(t){case"Browser":n=fw(rn());break;case"Worker":n=`${fw(rn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
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
 */class F4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function U4(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",Ts(t,e))}/**
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
 */const B4=6;class j4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:B4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class H4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pw(this),this.idTokenSubscription=new pw(this),this.beforeStateQueue=new F4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$A,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$r(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dn(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U4(this),n=new j4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$r(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[$r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&y4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return dn(t)}class pw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xx(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function W4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",W4().appendChild(r)})}function z4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const q4="https://www.google.com/recaptcha/enterprise.js?render=",K4="recaptcha-enterprise",G4="NO_RECAPTCHA";class Y4{constructor(e){this.type=K4,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{A4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new g4(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;lw(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(G4)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eC(q4+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yu(t,e,n,r=!1){const i=new Y4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function Q4(t,e){const n=mc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ql(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function J4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function X4(t,e,n){const r=Ir(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tC(e),{host:o,port:a}=Z4(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eB()}function tC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Z4(t){const e=tC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mw(o)}}}function mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eB(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,n){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function tB(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jd(t,e){return Oc(t,"POST","/v1/accounts:signInWithPassword",Ts(t,e))}/**
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
 */async function nB(t,e){return Oc(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}async function rB(t,e){return Oc(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}/**
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
 */class oc extends kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await yu(e,r,"signInWithPassword");return jd(e,i)}else return jd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await yu(e,r,"signInWithPassword");return jd(e,s)}else return Promise.reject(i)});case"emailLink":return nB(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tB(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rB(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Oc(t,"POST","/v1/accounts:signInWithIdp",Ts(t,e))}/**
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
 */const iB="http://localhost";class hs extends kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:iB,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
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
 */function sB(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oB(t){const e=sa(oa(t)).link,n=e?sa(oa(e)).deep_link_id:null,r=sa(oa(t)).deep_link_id;return(r?sa(oa(r)).link:null)||r||n||e||t}class Ng{constructor(e){var n,r,i,s,o,a;const c=sa(oa(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=sB((i=c.mode)!==null&&i!==void 0?i:null);he(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oB(e);try{return new Ng(n)}catch{return null}}}/**
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
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,n){return oc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ng.parseLink(n);return he(r,"argument-error"),oc._fromEmailAndCode(e,r.code,r.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xc extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends xc{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends xc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class ci extends xc{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class li extends xc{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return li.credential(n,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
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
 */async function Hd(t,e){return Oc(t,"POST","/v1/accounts:signUp",Ts(t,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rs._fromIdTokenResponse(e,r,i),o=gw(r);return new ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gw(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vu extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vu(e,n,r,i)}}function nC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,s,e,r):s})}async function aB(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function cB(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vo(t,nC(r,i,e,t),n);he(s.idToken,r,"internal-error");const o=Sg(s.idToken);he(o,r,"internal-error");const{sub:a}=o;return he(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function rC(t,e,n=!1){const r="signIn",i=await nC(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lB(t,e){return rC(Ir(t),e)}/**
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
 */async function iC(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B5(t,e,n){var r;const i=Ir(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await yu(i,s,"signUpPassword");o=Hd(i,l)}else o=Hd(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await yu(i,s,"signUpPassword");return Hd(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iC(t),l}),c=await ds._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function j5(t,e,n){return lB(dn(t),Lo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iC(t),r})}/**
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
 */async function uB(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function H5(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dn(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vo(r,uB(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sC(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function hB(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}const wu="__sak";/**
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
 */class oC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dB(){const t=rn();return Pg(t)||Dh(t)}const fB=1e3,pB=10;class aC extends oC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dB()&&$4(),this.fallbackToPolling=XA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);V4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pB):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aC.type="LOCAL";const mB=aC;/**
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
 */class cC extends oC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cC.type="SESSION";const lC=cC;/**
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
 */function gB(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await gB(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function Og(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _B{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Og("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gr(){return window}function yB(t){gr().location.href=t}/**
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
 */function uC(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function vB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wB(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function EB(){return uC()?self:null}/**
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
 */const hC="firebaseLocalStorageDb",TB=1,Eu="firebaseLocalStorage",dC="fbase_key";class Dc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function IB(){const t=indexedDB.deleteDatabase(hC);return new Dc(t).toPromise()}function up(){const t=indexedDB.open(hC,TB);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:dC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await IB(),e(await up()))})})}async function _w(t,e,n){const r=Vh(t,!0).put({[dC]:e,value:n});return new Dc(r).toPromise()}async function bB(t,e){const n=Vh(t,!1).get(e),r=await new Dc(n).toPromise();return r===void 0?null:r.value}function yw(t,e){const n=Vh(t,!0).delete(e);return new Dc(n).toPromise()}const AB=800,CB=3;class fC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(EB()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vB(),!this.activeServiceWorker)return;this.sender=new _B(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await _w(e,wu,"1"),await yw(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bB(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vh(i,!1).getAll();return new Dc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fC.type="LOCAL";const RB=fC;new Nc(3e4,6e4);/**
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
 */function xg(t,e){return e?$r(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dg extends kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SB(t){return rC(t.auth,new Dg(t),t.bypassAuthState)}function PB(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),cB(n,new Dg(t),t.bypassAuthState)}async function kB(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),aB(n,new Dg(t),t.bypassAuthState)}/**
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
 */class pC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SB;case"linkViaPopup":case"linkViaRedirect":return kB;case"reauthViaPopup":case"reauthViaRedirect":return PB;default:Vn(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NB=new Nc(2e3,1e4);async function W5(t,e,n){const r=Ir(t);UA(t,e,Mh);const i=xg(r,n);return new Ji(r,"signInViaPopup",e,i).executeNotNull()}class Ji extends pC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NB.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const OB="pendingRedirect",xl=new Map;class xB extends pC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await DB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DB(t,e){const n=gC(e),r=mC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function MB(t,e){return mC(t)._set(gC(e),"true")}function LB(t,e){xl.set(t._key(),e)}function mC(t){return $r(t._redirectPersistence)}function gC(t){return Ol(OB,t.config.apiKey,t.name)}/**
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
 */function z5(t,e,n){return VB(t,e,n)}async function VB(t,e,n){const r=Ir(t);UA(t,e,Mh),await r._initializationPromise;const i=xg(r,n);return await MB(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function q5(t,e){return await Ir(t)._initializationPromise,_C(t,e,!1)}async function _C(t,e,n=!1){const r=Ir(t),i=xg(r,e),o=await new xB(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $B=10*60*1e3;class FB{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$B&&this.cachedEventUids.clear(),this.cachedEventUids.has(vw(e))}saveEventToCache(e){this.cachedEventUids.add(vw(e)),this.lastProcessedEventTime=Date.now()}}function vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yC(t);default:return!1}}/**
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
 */async function BB(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
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
 */const jB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HB=/^https?/;async function WB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BB(t);for(const n of e)try{if(zB(n))return}catch{}Vn(t,"unauthorized-domain")}function zB(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HB.test(n))return!1;if(jB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qB=new Nc(3e4,6e4);function ww(){const t=gr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KB(t){return new Promise((e,n)=>{var r,i,s;function o(){ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ww(),n(mr(t,"network-request-failed"))},timeout:qB.get()})}if(!((i=(r=gr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gr().gapi)===null||s===void 0)&&s.load)o();else{const a=z4("iframefcb");return gr()[a]=()=>{gapi.load?o():n(mr(t,"network-request-failed"))},eC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function GB(t){return Dl=Dl||KB(t),Dl}/**
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
 */const YB=new Nc(5e3,15e3),QB="__/auth/iframe",JB="emulator/auth/iframe",XB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ej(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rg(e,JB):`https://${t.config.authDomain}/${QB}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=ZB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${So(r).slice(1)}`}async function tj(t){const e=await GB(t),n=gr().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:ej(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mr(t,"network-request-failed"),a=gr().setTimeout(()=>{s(o)},YB.get());function c(){gr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const nj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rj=500,ij=600,sj="_blank",oj="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aj(t,e,n,r=rj,i=ij){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nj),{width:r.toString(),height:i.toString(),top:s,left:o}),l=rn().toLowerCase();n&&(a=KA(l)?sj:n),qA(l)&&(e=e||oj,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(L4(l)&&a!=="_self")return cj(e||"",a),new Ew(null);const h=window.open(e||"",a,u);he(h,t,"popup-blocked");try{h.focus()}catch{}return new Ew(h)}function cj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lj="__/auth/handler",uj="emulator/auth/handler",hj=encodeURIComponent("fac");async function Tw(t,e,n,r,i,s){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof Mh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof xc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${hj}=${encodeURIComponent(c)}`:"";return`${dj(t)}?${So(a).slice(1)}${l}`}function dj({config:t}){return t.emulator?Rg(t,uj):`https://${t.authDomain}/${lj}`}/**
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
 */const Wd="webStorageSupport";class fj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lC,this._completeRedirectFn=_C,this._overrideRedirectResult=LB}async _openPopup(e,n,r,i){var s;Gr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tw(e,n,r,lp(),i);return aj(e,o,Og())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tw(e,n,r,lp(),i);return yB(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tj(e),r=new FB(e);return n.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wd];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XA()||Pg()||Dh()}}const pj=fj;var Iw="@firebase/auth",bw="1.3.0";/**
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
 */class mj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _j(t){vn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZA(t)},l=new H4(r,i,s,c);return J4(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new fn("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new mj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Iw,bw,gj(t)),Ft(Iw,bw,"esm2017")}/**
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
 */const yj=5*60,vj=mT("authIdTokenMaxAge")||yj;let Aw=null;const wj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vj)return;const i=n==null?void 0:n.token;Aw!==i&&(Aw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vC(t=wm()){const e=mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Q4(t,{popupRedirectResolver:pj,persistence:[RB,mB,lC]}),r=mT("authTokenSyncURL");if(r){const s=wj(r);hB(n,s,()=>s(n.currentUser)),sC(n,o=>s(o))}const i=fT("auth");return i&&X4(n,`http://${i}`),n}_j("Browser");/**
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
 */const Ej=new Map,Tj={activated:!1,tokenObservers:[]};function nr(t){return Ej.get(t)||Object.assign({},Tj)}const Cw={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class Ij{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ba,await bj(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ba,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function bj(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Aj={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Tu=new Ni("appCheck","AppCheck",Aj);function wC(t){if(!nr(t).activated)throw Tu.create("use-before-activation",{appName:t.name})}/**
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
 */const Cj="firebase-app-check-database",Rj=1,hp="firebase-app-check-store";let fl=null;function Sj(){return fl||(fl=new Promise((t,e)=>{try{const n=indexedDB.open(Cj,Rj);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Tu.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(hp,{keyPath:"compositeKey"})}}}catch(n){e(Tu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fl)}function Pj(t,e){return kj(Nj(t),e)}async function kj(t,e){const r=(await Sj()).transaction(hp,"readwrite"),s=r.objectStore(hp).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(Tu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function Nj(t){return`${t.options.appId}-${t.name}`}/**
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
 */const dp=new Po("@firebase/app-check");function Rw(t,e){return ym()?Pj(t,e).catch(n=>{dp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const Oj={error:"UNKNOWN_ERROR"};function xj(t){return eh.encodeString(JSON.stringify(t),!1)}async function fp(t,e=!1){const n=t.app;wC(n);const r=nr(n);let i=r.token,s;if(i&&!fa(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(fa(c)?i=c:await Rw(n,void 0))}if(!e&&i&&fa(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await nr(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?dp.warn(c.message):dp.error(c),s=c}let a;return i?s?fa(i)?a={token:i.token,internalError:s}:a=Pw(s):(a={token:i.token},r.token=i,await Rw(n,i)):a=Pw(s),o&&Vj(n,a),a}async function Dj(t){const e=t.app;wC(e);const{provider:n}=nr(e);{const{token:r}=await n.getToken();return{token:r}}}function Mj(t,e,n,r){const{app:i}=t,s=nr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&fa(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Sw(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Sw(t))}function EC(t,e){const n=nr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Sw(t){const{app:e}=t,n=nr(e);let r=n.tokenRefresher;r||(r=Lj(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Lj(t){const{app:e}=t;return new Ij(async()=>{const n=nr(e);let r;if(n.token?r=await fp(t,!0):r=await fp(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=nr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Cw.RETRIAL_MIN_WAIT,Cw.RETRIAL_MAX_WAIT)}function Vj(t,e){const n=nr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function fa(t){return t.expireTimeMillis-Date.now()>0}function Pw(t){return{token:xj(Oj),error:t}}/**
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
 */class $j{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=nr(this.app);for(const n of e)EC(this.app,n.next);return Promise.resolve()}}function Fj(t,e){return new $j(t,e)}function Uj(t){return{getToken:e=>fp(t,e),getLimitedUseToken:()=>Dj(t),addTokenListener:e=>Mj(t,"INTERNAL",e),removeTokenListener:e=>EC(t.app,e)}}const Bj="@firebase/app-check",jj="0.8.0",Hj="app-check",kw="app-check-internal";function Wj(){vn(new fn(Hj,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Fj(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(kw).initialize()})),vn(new fn(kw,t=>{const e=t.getProvider("app-check").getImmediate();return Uj(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ft(Bj,jj)}Wj();const TC=Symbol("firebaseApp");function Mc(t){return NE()&&Jn(TC,null)||wm(t)}const ur=()=>{},zj=typeof window<"u";function Mg(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function qj(t,e,n){const r=(""+e).split("."),i=r.pop(),s=r.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function Is(t){return!!t&&typeof t=="object"}const Kj=Object.prototype;function Gj(t){return Is(t)&&Object.getPrototypeOf(t)===Kj}function Lg(t){return Is(t)&&t.type==="document"}function Yj(t){return Is(t)&&t.type==="collection"}function Qj(t){return Lg(t)||Yj(t)}function Jj(t){return Is(t)&&t.type==="query"}function Xj(t){return Is(t)&&"ref"in t}function Zj(t){return Is(t)&&typeof t.bucket=="string"}function e6(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const t6=Symbol.for("v-scx");function n6(){return!!Jn(t6,0)}const pl=new WeakMap;function r6(t,e){if(!pl.has(t)){const n=B0(!0);pl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),pl.delete(t)}}return pl.get(t)}const IC=new WeakMap;function i6(t){return IC.get(Mc(t))}const ml=new WeakMap;function bC(t){const e=Mc(t);if(!ml.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{ml.set(e,s),n(s.value)}];ml.set(e,i)}return ml.get(e)}function s6(t){const e=bC(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function o6(t,e){const n=vC(e);sC(n,r=>{const i=bC();t.value=r,Array.isArray(i)&&i[1](t)})}const Nw="@firebase/database",Ow="1.0.1";/**
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
 */let AC="";function a6(t){AC=t}/**
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
 */class c6{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$t(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class l6{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const CC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new c6(e)}}catch{}return new l6},Xi=CC("localStorage"),pp=CC("sessionStorage");/**
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
 */const Qs=new Po("@firebase/database"),u6=function(){let t=1;return function(){return t++}}(),RC=function(t){const e=nD(t),n=new Jx;n.update(e);const r=n.digest();return eh.encodeByteArray(r)},Lc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Lc.apply(null,r):typeof r=="object"?e+=$t(r):e+=r,e+=" "}return e};let is=null,xw=!0;const h6=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qs.logLevel=Oe.VERBOSE,is=Qs.log.bind(Qs),e&&pp.set("logging_enabled",!0)):typeof t=="function"?is=t:(is=null,pp.remove("logging_enabled"))},qt=function(...t){if(xw===!0&&(xw=!1,is===null&&pp.get("logging_enabled")===!0&&h6(!0)),is){const e=Lc.apply(null,t);is(e)}},Vc=function(t){return function(...e){qt(t,...e)}},mp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lc(...t);Qs.error(e)},fs=function(...t){const e=`FIREBASE FATAL ERROR: ${Lc(...t)}`;throw Qs.error(e),new Error(e)},Rn=function(...t){const e="FIREBASE WARNING: "+Lc(...t);Qs.warn(e)},d6=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},SC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},f6=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wo="[MIN_NAME]",ps="[MAX_NAME]",Vo=function(t,e){if(t===e)return 0;if(t===wo||e===ps)return-1;if(e===wo||t===ps)return 1;{const n=Dw(t),r=Dw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},p6=function(t,e){return t===e?0:t<e?-1:1},Xo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$t(e))},Vg=function(t){if(typeof t!="object"||t===null)return $t(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$t(e[r]),n+=":",n+=Vg(t[e[r]]);return n+="}",n},PC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function $n(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kC=function(t){K(!SC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let p=parseInt(u.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},m6=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},g6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},_6=new RegExp("^-?(0*)\\d{1,10}$"),y6=-2147483648,v6=2147483647,Dw=function(t){if(_6.test(t)){const e=Number(t);if(e>=y6&&e<=v6)return e}return null},$c=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Rn("Exception was thrown by user callback.",n),e},Math.floor(0))}},w6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class E6{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Rn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class T6{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rn(e)}}class gp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gp.OWNER="owner";/**
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
 */const $g="5",NC="v",OC="s",xC="r",DC="f",MC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LC="ls",VC="p",_p="ac",$C="websocket",FC="long_polling";/**
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
 */class I6{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function b6(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function UC(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===$C)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);b6(t)&&(n.ns=t.namespace);const i=[];return $n(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class A6{constructor(){this.counters_={}}incrementCounter(e,n=1){Qr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lx(this.counters_)}}/**
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
 */const zd={},qd={};function Fg(t){const e=t.toString();return zd[e]||(zd[e]=new A6),zd[e]}function C6(t,e){const n=t.toString();return qd[n]||(qd[n]=e()),qd[n]}/**
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
 */class R6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$c(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mw="start",S6="close",P6="pLPCommand",k6="pRTLPCB",BC="id",jC="pw",HC="ser",N6="cb",O6="seg",x6="ts",D6="d",M6="dframe",WC=1870,zC=30,L6=WC-zC,V6=25e3,$6=3e4;class $s{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vc(e),this.stats_=Fg(n),this.urlFn=c=>(this.appCheckToken&&(c[_p]=this.appCheckToken),UC(n,FC,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new R6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($6)),f6(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ug((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mw)this.id=a,this.password=c;else if(o===S6)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mw]="t",r[HC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[N6]=this.scriptTagHolder.uniqueCallbackIdentifier),r[NC]=$g,this.transportSessionId&&(r[OC]=this.transportSessionId),this.lastSessionId&&(r[LC]=this.lastSessionId),this.applicationId&&(r[VC]=this.applicationId),this.appCheckToken&&(r[_p]=this.appCheckToken),typeof location<"u"&&location.hostname&&MC.test(location.hostname)&&(r[xC]=DC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$s.forceAllow_=!0}static forceDisallow(){$s.forceDisallow_=!0}static isAvailable(){return $s.forceAllow_?!0:!$s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!m6()&&!g6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hT(n),i=PC(r,L6);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[M6]="t",r[BC]=e,r[jC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$t(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ug{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=u6(),window[P6+this.uniqueCallbackIdentifier]=e,window[k6+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ug.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qt("frame writing exception"),a.stack&&qt(a.stack),qt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BC]=this.myID,e[jC]=this.myPW,e[HC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+r.length<=WC;){const o=this.pendingSegs.shift();r=r+"&"+O6+i+"="+o.seg+"&"+x6+i+"="+o.ts+"&"+D6+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(V6)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const F6=16384,U6=45e3;let Iu=null;typeof MozWebSocket<"u"?Iu=MozWebSocket:typeof WebSocket<"u"&&(Iu=WebSocket);class Wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vc(this.connId),this.stats_=Fg(n),this.connURL=Wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[NC]=$g,typeof location<"u"&&location.hostname&&MC.test(location.hostname)&&(o[xC]=DC),n&&(o[OC]=n),r&&(o[LC]=r),i&&(o[_p]=i),s&&(o[VC]=s),UC(e,$C,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xi.set("previous_websocket_failure",!0);try{let r;yT(),this.mySock=new Iu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Iu!==null&&!Wn.forceDisallow_}static previouslyFailed(){return Xi.isInMemoryStorage||Xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=PC(n,F6);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U6))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wn.responsesRequiredToBeHealthy=2;Wn.healthyTimeout=3e4;/**
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
 */class ac{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$s,Wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Wn&&Wn.isAvailable();let r=n&&!Wn.previouslyFailed();if(e.webSocketOnly&&(n||Rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Wn];else{const i=this.transports_=[];for(const s of ac.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ac.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ac.globalTransportInitialized_=!1;/**
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
 */const B6=6e4,j6=5e3,H6=10*1024,W6=100*1024,Kd="t",Lw="d",z6="s",Vw="r",q6="e",$w="o",Fw="a",Uw="n",Bw="p",K6="h";class G6{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vc("c:"+this.id+":"),this.transportManager_=new ac(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Sa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>H6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kd in e){const n=e[Kd];n===Fw?this.upgradeIfSecondaryHealthy_():n===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$w&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xo(Kd,e);if(Lw in e){const r=e[Lw];if(n===K6){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===z6?this.onConnectionShutdown_(r):n===Vw?this.onReset_(r):n===q6?mp("Server Error: "+r):n===$w?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$g!==r&&Rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Sa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(B6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(j6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class KC{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bu extends KC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_m()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bu}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jw=32,Hw=768;class tt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ke(){return new tt("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pi(t){return t.pieces_.length-t.pieceNum_}function Xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new tt(t.pieces_,e)}function GC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Y6(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function YC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function QC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new tt(e,0)}function St(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new tt(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function Mn(t,e){const n=Ae(t),r=Ae(e);if(n===null)return e;if(n===r)return Mn(Xe(t),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JC(t,e){if(Pi(t)!==Pi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Kn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pi(t)>Pi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Q6{constructor(e,n){this.errorPrefix_=n,this.parts_=YC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=th(this.parts_[r]);XC(this)}}function J6(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=th(e),XC(t)}function X6(t){const e=t.parts_.pop();t.byteLength_-=th(e),t.parts_.length>0&&(t.byteLength_-=1)}function XC(t){if(t.byteLength_>Hw)throw new Error(t.errorPrefix_+"has a key path longer than "+Hw+" bytes ("+t.byteLength_+").");if(t.parts_.length>jw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jw+") or object contains a cycle "+Hi(t))}function Hi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Bg extends KC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Bg}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zo=1e3,Z6=60*5*1e3,Ww=30*1e3,e9=1.3,t9=3e4,n9="server_kill",zw=3;class jr extends qC{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jr.nextPersistentConnectionId_++,this.log_=Vc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zo,this.maxReconnectDelay_=Z6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!yT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($t(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ba,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;jr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qr(e,"w")){const r=co(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$t(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mp("Unrecognized action received from server: "+$t(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>t9&&(this.reconnectDelay_=Zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*e9)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qt("getToken() completed but was canceled"):(qt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new G6(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Rn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(n9)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Rn(h),c())}}}interrupt(e){qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sf(this.interruptReasons_)&&(this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new tt(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zw&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+AC.replace(/\./g,"-")]=1,_m()?e["framework.cordova"]=1:_T()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bu.getInstance().currentlyOnline();return Sf(this.interruptReasons_)&&e}}jr.nextPersistentConnectionId_=0;jr.nextConnectionId_=0;/**
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
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
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
 */class $h{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ce(wo,e),i=new Ce(wo,n);return this.compare(r,i)!==0}minPost(){return Ce.MIN}}/**
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
 */let gl;class ZC extends $h{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Vo(e.name,n.name)}isDefinedOn(e){throw Ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(ps,gl)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,gl)}toString(){return".key"}}const Js=new ZC;/**
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
 */class _l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Rt.RED,this.left=i??gn.EMPTY_NODE,this.right=s??gn.EMPTY_NODE}copy(e,n,r,i,s){return new Rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Rt.RED=!0;Rt.BLACK=!1;class r9{copy(e,n,r,i,s){return this}insert(e,n,r){return new Rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gn{constructor(e,n=gn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rt.BLACK,null,null))}remove(e){return new gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _l(this.root_,null,this.comparator_,!0,e)}}gn.EMPTY_NODE=new r9;/**
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
 */function i9(t,e){return Vo(t.name,e.name)}function jg(t,e){return Vo(t,e)}/**
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
 */let yp;function s9(t){yp=t}const eR=function(t){return typeof t=="number"?"number:"+kC(t):"string:"+t},tR=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qr(e,".sv"),"Priority must be a string or number.")}else K(t===yp||t.isEmpty(),"priority of unexpected type.");K(t===yp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qw;class At{constructor(e,n=At.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tR(this.priorityNode_)}static set __childrenNodeConstructor(e){qw=e}static get __childrenNodeConstructor(){return qw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new At(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ae(e)===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:At.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,At.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kC(this.value_):e+=this.value_,this.lazyHash_=RC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===At.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof At.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=At.VALUE_TYPE_ORDER.indexOf(n),s=At.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}At.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let nR,rR;function o9(t){nR=t}function a9(t){rR=t}class c9 extends $h{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(ps,new At("[PRIORITY-POST]",rR))}makePost(e,n){const r=nR(e);return new Ce(n,new At("[PRIORITY-POST]",r))}toString(){return".priority"}}const Zt=new c9;/**
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
 */const l9=Math.log(2);class u9{constructor(e){const n=s=>parseInt(Math.log(s)/l9,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Au=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,p;if(u===0)return null;if(u===1)return h=t[c],p=n?n(h):h,new Rt(p,h.node,Rt.BLACK,null,null);{const m=parseInt(u/2,10)+c,y=i(c,m),v=i(m+1,l);return h=t[m],p=n?n(h):h,new Rt(p,h.node,Rt.BLACK,y,v)}},s=function(c){let l=null,u=null,h=t.length;const p=function(y,v){const b=h-y,A=h;h-=y;const k=i(b+1,A),N=t[b],P=n?n(N):N;m(new Rt(P,N.node,v,null,k))},m=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const v=c.nextBitIsOne(),b=Math.pow(2,c.count-(y+1));v?p(b,Rt.BLACK):(p(b,Rt.BLACK),p(b,Rt.RED))}return u},o=new u9(t.length),a=s(o);return new gn(r||e,a)};/**
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
 */let Gd;const Ns={};class Fr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(Ns&&Zt,"ChildrenNode.ts has not been loaded"),Gd=Gd||new Fr({".priority":Ns},{".priority":Zt}),Gd}get(e){const n=co(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gn?n:null}hasIndex(e){return Qr(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Au(r,e.getCompare()):a=Ns;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fr(u,l)}addToIndexes(e,n){const r=Yl(this.indexes_,(i,s)=>{const o=co(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Ns)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ce.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Au(a,o.getCompare())}else return Ns;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Ce(e.name,a))),c.insert(e,e.node)}});return new Fr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yl(this.indexes_,i=>{if(i===Ns)return i;{const s=n.get(e.name);return s?i.remove(new Ce(e.name,s)):i}});return new Fr(r,this.indexSet_)}}/**
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
 */let ea;class Be{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&tR(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ea||(ea=new Be(new gn(jg),null,Fr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ea}updatePriority(e){return this.children_.isEmpty()?this:new Be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ea:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ea:this.priorityNode_;return new Be(i,o,s)}}updateChild(e,n){const r=Ae(e);if(r===null)return n;{K(Ae(e)!==".priority"||Pi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Xe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Zt,(o,a)=>{n[o]=a.val(e),r++,s&&Be.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+eR(this.getPriority().val())+":"),this.forEachChild(Zt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":RC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fc?-1:0}withIndex(e){if(e===Js||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Be(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Js||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Zt),i=n.getIterator(Zt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Js?null:this.indexMap_.get(e.toString())}}Be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class h9 extends Be{constructor(){super(new gn(jg),Be.EMPTY_NODE,Fr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Be.EMPTY_NODE}isEmpty(){return!1}}const Fc=new h9;Object.defineProperties(Ce,{MIN:{value:new Ce(wo,Be.EMPTY_NODE)},MAX:{value:new Ce(ps,Fc)}});ZC.__EMPTY_NODE=Be.EMPTY_NODE;At.__childrenNodeConstructor=Be;s9(Fc);a9(Fc);/**
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
 */const d9=!0;function Kt(t,e=null){if(t===null)return Be.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new At(n,Kt(e))}if(!(t instanceof Array)&&d9){const n=[];let r=!1;if($n(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Kt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ce(o,c)))}}),n.length===0)return Be.EMPTY_NODE;const s=Au(n,i9,o=>o.name,jg);if(r){const o=Au(n,Zt.getCompare());return new Be(s,Kt(e),new Fr({".priority":o},{".priority":Zt}))}else return new Be(s,Kt(e),Fr.Default)}else{let n=Be.EMPTY_NODE;return $n(t,(r,i)=>{if(Qr(t,r)&&r.substring(0,1)!=="."){const s=Kt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Kt(e))}}o9(Kt);/**
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
 */class f9 extends $h{constructor(e){super(),this.indexPath_=e,K(!Ee(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}makePost(e,n){const r=Kt(e),i=Be.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ce(n,i)}maxPost(){const e=Be.EMPTY_NODE.updateChild(this.indexPath_,Fc);return new Ce(ps,e)}toString(){return YC(this.indexPath_,0).join("/")}}/**
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
 */class p9 extends $h{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const r=Kt(e);return new Ce(n,r)}toString(){return".value"}}const m9=new p9;/**
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
 */function g9(t){return{type:"value",snapshotNode:t}}function _9(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function y9(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Kw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function v9(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ps}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zt}copy(){const e=new Hg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Zt?n="$priority":t.index_===m9?n="$value":t.index_===Js?n="$key":(K(t.index_ instanceof f9,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$t(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=$t(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+$t(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=$t(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+$t(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Zt&&(e.i=t.index_.toString()),e}/**
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
 */class Cu extends qC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Vc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cu.getListenId_(e,r),a={};this.listens_[o]=a;const c=Gw(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),co(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=Cu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gw(e._queryParams),r=e._path.toString(),i=new Ba;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+So(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ja(a.responseText)}catch{Rn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Rn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class w9{constructor(){this.rootNode_=Be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ru(){return{value:null,children:new Map}}function iR(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ae(e);t.children.has(r)||t.children.set(r,Ru());const i=t.children.get(r);e=Xe(e),iR(i,e,n)}}function vp(t,e,n){t.value!==null?n(e,t.value):E9(t,(r,i)=>{const s=new tt(e.toString()+"/"+r);vp(i,s,n)})}function E9(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class T9{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$n(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Qw=10*1e3,I9=30*1e3,b9=5*60*1e3;class A9{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new T9(e);const r=Qw+(I9-Qw)*Math.random();Sa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;$n(e,(i,s)=>{s>0&&Qr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Sa(this.reportStats_.bind(this),Math.floor(Math.random()*2*b9))}}/**
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
 */var hr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hr||(hr={}));function sR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function aR(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Su{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=hr.ACK_USER_WRITE,this.source=sR()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new tt(e));return new Su(Ke(),n,this.revert)}}else return K(Ae(this.path)===e,"operationForChild called for unrelated child."),new Su(Xe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=hr.OVERWRITE}operationForChild(e){return Ee(this.path)?new ms(this.source,Ke(),this.snap.getImmediateChild(e)):new ms(this.source,Xe(this.path),this.snap)}}/**
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
 */class cc{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=hr.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new tt(e));return n.isEmpty()?null:n.value?new ms(this.source,Ke(),n.value):new cc(this.source,Ke(),n)}else return K(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cc(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function C9(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(v9(o.childName,o.snapshotNode))}),ta(t,i,"child_removed",e,r,n),ta(t,i,"child_added",e,r,n),ta(t,i,"child_moved",s,r,n),ta(t,i,"child_changed",e,r,n),ta(t,i,"value",e,r,n),i}function ta(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>S9(t,a,c)),o.forEach(a=>{const c=R9(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function R9(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function S9(t,e,n){if(e.childName==null||n.childName==null)throw Ro("Should only compare child_ events.");const r=new Ce(e.childName,e.snapshotNode),i=new Ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function cR(t,e){return{eventCache:t,serverCache:e}}function Pa(t,e,n,r){return cR(new Wg(e,n,r),t.serverCache)}function lR(t,e,n,r){return cR(t.eventCache,new Wg(e,n,r))}function wp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yd;const P9=()=>(Yd||(Yd=new gn(p6)),Yd);class Qe{constructor(e,n=P9()){this.value=e,this.children=n}static fromObject(e){let n=new Qe(null);return $n(e,(r,i)=>{n=n.set(new tt(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Ee(e))return null;{const r=Ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Xe(e),n);return s!=null?{path:St(new tt(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ae(e),r=this.children.get(n);return r!==null?r.subtree(Xe(e)):new Qe(null)}}set(e,n){if(Ee(e))return new Qe(n,this.children);{const r=Ae(e),s=(this.children.get(r)||new Qe(null)).set(Xe(e),n),o=this.children.insert(r,s);return new Qe(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new Qe(null):new Qe(null,this.children);{const n=Ae(e),r=this.children.get(n);if(r){const i=r.remove(Xe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Qe(null):new Qe(this.value,s)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ae(e),r=this.children.get(n);return r?r.get(Xe(e)):null}}setTree(e,n){if(Ee(e))return n;{const r=Ae(e),s=(this.children.get(r)||new Qe(null)).setTree(Xe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Qe(this.value,o)}}fold(e){return this.fold_(Ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(St(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ke(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ee(e))return null;{const s=Ae(e),o=this.children.get(s);return o?o.findOnPath_(Xe(e),St(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ke(),n)}foreachOnPath_(e,n,r){if(Ee(e))return this;{this.value&&r(n,this.value);const i=Ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Xe(e),St(n,i),r):new Qe(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(St(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Xn{constructor(e){this.writeTree_=e}static empty(){return new Xn(new Qe(null))}}function ka(t,e,n){if(Ee(e))return new Xn(new Qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Mn(i,e);return s=s.updateChild(o,n),new Xn(t.writeTree_.set(i,s))}else{const i=new Qe(n),s=t.writeTree_.setTree(e,i);return new Xn(s)}}}function Jw(t,e,n){let r=t;return $n(n,(i,s)=>{r=ka(r,St(e,i),s)}),r}function Xw(t,e){if(Ee(e))return Xn.empty();{const n=t.writeTree_.setTree(e,new Qe(null));return new Xn(n)}}function Ep(t,e){return bs(t,e)!=null}function bs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mn(n.path,e)):null}function Zw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Zt,(r,i)=>{e.push(new Ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ce(r,i.value))}),e}function Ei(t,e){if(Ee(e))return t;{const n=bs(t,e);return n!=null?new Xn(new Qe(n)):new Xn(t.writeTree_.subtree(e))}}function Tp(t){return t.writeTree_.isEmpty()}function Eo(t,e){return uR(Ke(),t.writeTree_,e)}function uR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=uR(St(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(St(t,".priority"),r)),n}}/**
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
 */function hR(t,e){return gR(e,t)}function k9(t,e,n,r,i){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ka(t.visibleWrites,e,n)),t.lastWriteId=r}function N9(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function O9(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&x9(a,r.path)?i=!1:Kn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return D9(t),!0;if(r.snap)t.visibleWrites=Xw(t.visibleWrites,r.path);else{const a=r.children;$n(a,c=>{t.visibleWrites=Xw(t.visibleWrites,St(r.path,c))})}return!0}else return!1}function x9(t,e){if(t.snap)return Kn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Kn(St(t.path,n),e))return!0;return!1}function D9(t){t.visibleWrites=dR(t.allWrites,M9,Ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function M9(t){return t.visible}function dR(t,e,n){let r=Xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Kn(n,o)?(a=Mn(n,o),r=ka(r,a,s.snap)):Kn(o,n)&&(a=Mn(o,n),r=ka(r,Ke(),s.snap.getChild(a)));else if(s.children){if(Kn(n,o))a=Mn(n,o),r=Jw(r,a,s.children);else if(Kn(o,n))if(a=Mn(o,n),Ee(a))r=Jw(r,Ke(),s.children);else{const c=co(s.children,Ae(a));if(c){const l=c.getChild(Xe(a));r=ka(r,Ke(),l)}}}else throw Ro("WriteRecord should have .snap or .children")}}return r}function fR(t,e,n,r,i){if(!r&&!i){const s=bs(t.visibleWrites,e);if(s!=null)return s;{const o=Ei(t.visibleWrites,e);if(Tp(o))return n;if(n==null&&!Ep(o,Ke()))return null;{const a=n||Be.EMPTY_NODE;return Eo(o,a)}}}else{const s=Ei(t.visibleWrites,e);if(!i&&Tp(s))return n;if(!i&&n==null&&!Ep(s,Ke()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Kn(l.path,e)||Kn(e,l.path))},a=dR(t.allWrites,o,e),c=n||Be.EMPTY_NODE;return Eo(a,c)}}}function L9(t,e,n){let r=Be.EMPTY_NODE;const i=bs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Zt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ei(t.visibleWrites,e);return n.forEachChild(Zt,(o,a)=>{const c=Eo(Ei(s,new tt(o)),a);r=r.updateImmediateChild(o,c)}),Zw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ei(t.visibleWrites,e);return Zw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function V9(t,e,n,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=St(e,n);if(Ep(t.visibleWrites,s))return null;{const o=Ei(t.visibleWrites,s);return Tp(o)?i.getChild(n):Eo(o,i.getChild(n))}}function $9(t,e,n,r){const i=St(e,n),s=bs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ei(t.visibleWrites,i);return Eo(o,r.getNode().getImmediateChild(n))}else return null}function F9(t,e){return bs(t.visibleWrites,e)}function U9(t,e,n,r,i,s,o){let a;const c=Ei(t.visibleWrites,e),l=bs(c,Ke());if(l!=null)a=l;else if(n!=null)a=Eo(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=p.getNext();return u}else return[]}function B9(){return{visibleWrites:Xn.empty(),allWrites:[],lastWriteId:-1}}function Ip(t,e,n,r){return fR(t.writeTree,t.treePath,e,n,r)}function pR(t,e){return L9(t.writeTree,t.treePath,e)}function e0(t,e,n,r){return V9(t.writeTree,t.treePath,e,n,r)}function Pu(t,e){return F9(t.writeTree,St(t.treePath,e))}function j9(t,e,n,r,i,s){return U9(t.writeTree,t.treePath,e,n,r,i,s)}function zg(t,e,n){return $9(t.writeTree,t.treePath,e,n)}function mR(t,e){return gR(St(t.treePath,e),t.writeTree)}function gR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class H9{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Kw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,y9(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,_9(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Kw(r,e.snapshotNode,i.oldSnap));else throw Ro("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class W9{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _R=new W9;class qg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gs(this.viewCache_),s=j9(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function z9(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function q9(t,e,n,r,i){const s=new H9;let o,a;if(n.type===hr.OVERWRITE){const l=n;l.source.fromUser?o=bp(t,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Ee(l.path),o=ku(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===hr.MERGE){const l=n;l.source.fromUser?o=G9(t,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ap(t,e,l.path,l.children,r,i,a,s))}else if(n.type===hr.ACK_USER_WRITE){const l=n;l.revert?o=J9(t,e,l.path,r,i,s):o=Y9(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===hr.LISTEN_COMPLETE)o=Q9(t,e,n.path,r,s);else throw Ro("Unknown operation type: "+n.type);const c=s.getChanges();return K9(e,o,c),{viewCache:o,changes:c}}function K9(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(g9(wp(e)))}}function yR(t,e,n,r,i,s){const o=e.eventCache;if(Pu(r,n)!=null)return e;{let a,c;if(Ee(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=gs(e),u=l instanceof Be?l:Be.EMPTY_NODE,h=pR(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Ip(r,gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Ae(n);if(l===".priority"){K(Pi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=e0(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Xe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=e0(r,n,o.getNode(),c);p!=null?h=o.getNode().getImmediateChild(l).updateChild(u,p):h=o.getNode().getImmediateChild(l)}else h=zg(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return Pa(e,a,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function ku(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),m,null)}else{const m=Ae(n);if(!c.isCompleteForPath(n)&&Pi(n)>1)return e;const y=Xe(n),b=c.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),m,b,y,_R,null)}const h=lR(e,l,c.isFullyInitialized()||Ee(n),u.filtersNodes()),p=new qg(i,h,s);return yR(t,h,n,i,p,a)}function bp(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new qg(i,e,s);if(Ee(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Pa(e,l,!0,t.filter.filtersNodes());else{const h=Ae(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Pa(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=Xe(n),m=a.getNode().getImmediateChild(h);let y;if(Ee(p))y=r;else{const v=u.getCompleteChild(h);v!=null?GC(p)===".priority"&&v.getChild(QC(p)).isEmpty()?y=v:y=v.updateChild(p,r):y=Be.EMPTY_NODE}if(m.equals(y))c=e;else{const v=t.filter.updateChild(a.getNode(),h,y,p,u,o);c=Pa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function t0(t,e){return t.eventCache.isCompleteForChild(e)}function G9(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=St(n,c);t0(e,Ae(u))&&(a=bp(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=St(n,c);t0(e,Ae(u))||(a=bp(t,a,u,l,i,s,o))}),a}function n0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ap(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Ee(n)?l=r:l=new Qe(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=n0(t,m,p);c=ku(t,c,new tt(h),y,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const m=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),v=n0(t,y,p);c=ku(t,c,new tt(h),v,i,s,o,a)}}),c}function Y9(t,e,n,r,i,s,o){if(Pu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ku(t,e,n,c.getNode().getChild(n),i,s,a,o);if(Ee(n)){let l=new Qe(null);return c.getNode().forEachChild(Js,(u,h)=>{l=l.set(new tt(u),h)}),Ap(t,e,n,l,i,s,a,o)}else return e}else{let l=new Qe(null);return r.foreach((u,h)=>{const p=St(n,u);c.isCompleteForPath(p)&&(l=l.set(u,c.getNode().getChild(p)))}),Ap(t,e,n,l,i,s,a,o)}}function Q9(t,e,n,r,i){const s=e.serverCache,o=lR(e,s.getNode(),s.isFullyInitialized()||Ee(n),s.isFiltered());return yR(t,o,n,r,_R,i)}function J9(t,e,n,r,i,s){let o;if(Pu(r,n)!=null)return e;{const a=new qg(r,e,i),c=e.eventCache.getNode();let l;if(Ee(n)||Ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ip(r,gs(e));else{const h=e.serverCache.getNode();K(h instanceof Be,"serverChildren would be complete if leaf node"),u=pR(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=Ae(n);let h=zg(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Xe(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Be.EMPTY_NODE,Xe(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ip(r,gs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Pu(r,Ke())!=null,Pa(e,l,o,t.filter.filtersNodes())}}function X9(t,e){const n=gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function r0(t,e,n,r){e.type===hr.MERGE&&e.source.queryId!==null&&(K(gs(t.viewCache_),"We should always have a full cache before handling merges"),K(wp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=q9(t.processor_,i,e,n,r);return z9(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Z9(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Z9(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return C9(t.eventGenerator_,e,n,i)}/**
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
 */let i0;function e3(t){K(!i0,"__referenceConstructor has already been defined"),i0=t}function Kg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),r0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(r0(o,e,n,r));return s}}function Gg(t,e){let n=null;for(const r of t.views.values())n=n||X9(r,e);return n}/**
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
 */let s0;function t3(t){K(!s0,"__referenceConstructor has already been defined"),s0=t}class o0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Qe(null),this.pendingWriteTree_=B9(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function n3(t,e,n,r,i){return k9(t.pendingWriteTree_,e,n,r,i),i?Uh(t,new ms(sR(),e,n)):[]}function Fs(t,e,n=!1){const r=N9(t.pendingWriteTree_,e);if(O9(t.pendingWriteTree_,e)){let s=new Qe(null);return r.snap!=null?s=s.set(Ke(),!0):$n(r.children,o=>{s=s.set(new tt(o),!0)}),Uh(t,new Su(r.path,s,n))}else return[]}function Fh(t,e,n){return Uh(t,new ms(oR(),e,n))}function r3(t,e,n){const r=Qe.fromObject(n);return Uh(t,new cc(oR(),e,r))}function i3(t,e,n,r){const i=TR(t,r);if(i!=null){const s=IR(i),o=s.path,a=s.queryId,c=Mn(o,e),l=new ms(aR(a),c,n);return bR(t,o,l)}else return[]}function s3(t,e,n,r){const i=TR(t,r);if(i){const s=IR(i),o=s.path,a=s.queryId,c=Mn(o,e),l=Qe.fromObject(n),u=new cc(aR(a),c,l);return bR(t,o,u)}else return[]}function vR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Mn(o,e),l=Gg(a,c);if(l)return l});return fR(i,e,s,n,!0)}function Uh(t,e){return wR(e,t.syncPointTree_,null,hR(t.pendingWriteTree_,Ke()))}function wR(t,e,n,r){if(Ee(t.path))return ER(t,e,n,r);{const i=e.get(Ke());n==null&&i!=null&&(n=Gg(i,Ke()));let s=[];const o=Ae(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=mR(r,o);s=s.concat(wR(a,c,l,u))}return i&&(s=s.concat(Kg(i,t,r,n))),s}}function ER(t,e,n,r){const i=e.get(Ke());n==null&&i!=null&&(n=Gg(i,Ke()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=mR(r,o),u=t.operationForChild(o);u&&(s=s.concat(ER(u,a,c,l)))}),i&&(s=s.concat(Kg(i,t,r,n))),s}function TR(t,e){return t.tagToQueryMap.get(e)}function IR(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new tt(t.substr(0,e))}}function bR(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=hR(t.pendingWriteTree_,e);return Kg(r,n,i,null)}/**
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
 */class Yg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yg(n)}node(){return this.node_}}class Qg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=St(this.path_,e);return new Qg(this.syncTree_,n)}node(){return vR(this.syncTree_,this.path_)}}const o3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},a0=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return a3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return c3(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},a3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},c3=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},l3=function(t,e,n,r){return Jg(e,new Qg(n,t),r)},u3=function(t,e,n){return Jg(t,new Yg(e),n)};function Jg(t,e,n){const r=t.getPriority().val(),i=a0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=a0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new At(a,Kt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new At(i))),o.forEachChild(Zt,(a,c)=>{const l=Jg(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class Xg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zg(t,e){let n=e instanceof tt?e:new tt(e),r=t,i=Ae(n);for(;i!==null;){const s=co(r.node.children,i)||{children:{},childCount:0};r=new Xg(i,r,s),n=Xe(n),i=Ae(n)}return r}function $o(t){return t.node.value}function AR(t,e){t.node.value=e,Cp(t)}function CR(t){return t.node.childCount>0}function h3(t){return $o(t)===void 0&&!CR(t)}function Bh(t,e){$n(t.node.children,(n,r)=>{e(new Xg(n,t,r))})}function RR(t,e,n,r){n&&!r&&e(t),Bh(t,i=>{RR(i,e,!0,r)}),n&&r&&e(t)}function d3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uc(t){return new tt(t.parent===null?t.name:Uc(t.parent)+"/"+t.name)}function Cp(t){t.parent!==null&&f3(t.parent,t.name,t)}function f3(t,e,n){const r=h3(n),i=Qr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cp(t))}/**
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
 */const p3=/[\[\].#$\/\u0000-\u001F\u007F]/,m3=/[\[\].#$\u0000-\u001F\u007F]/,Qd=10*1024*1024,SR=function(t){return typeof t=="string"&&t.length!==0&&!p3.test(t)},g3=function(t){return typeof t=="string"&&t.length!==0&&!m3.test(t)},_3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),g3(t)},PR=function(t,e,n){const r=n instanceof tt?new Q6(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hi(r)+" with contents = "+e.toString());if(SC(e))throw new Error(t+"contains "+e.toString()+" "+Hi(r));if(typeof e=="string"&&e.length>Qd/3&&th(e)>Qd)throw new Error(t+"contains a string greater than "+Qd+" utf8 bytes "+Hi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if($n(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!SR(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);J6(r,o),PR(t,a,r),X6(r)}),i&&s)throw new Error(t+' contains ".value" child '+Hi(r)+" in addition to actual children.")}},y3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_3(n))throw new Error(tD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class v3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function w3(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!JC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function As(t,e,n){w3(t,n),E3(t,r=>Kn(r,e)||Kn(e,r))}function E3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(T3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function T3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();is&&qt("event: "+n.toString()),$c(r)}}}/**
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
 */const I3="repo_interrupt",b3=25;class A3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ru(),this.transactionQueueTree_=new Xg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C3(t,e,n){if(t.stats_=Fg(t.repoInfo_),t.forceRestClient_||w6())t.server_=new Cu(t.repoInfo_,(r,i,s,o)=>{c0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>l0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jr(t.repoInfo_,e,(r,i,s,o)=>{c0(t,r,i,s,o)},r=>{l0(t,r)},r=>{S3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=C6(t.repoInfo_,()=>new A9(t.stats_,t.server_)),t.infoData_=new w9,t.infoSyncTree_=new o0({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Fh(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),e_(t,"connected",!1),t.serverSyncTree_=new o0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);As(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function R3(t){const n=t.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kR(t){return o3({timestamp:R3(t)})}function c0(t,e,n,r,i){t.dataUpdateCount++;const s=new tt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Yl(n,l=>Kt(l));o=s3(t.serverSyncTree_,s,c,i)}else{const c=Kt(n);o=i3(t.serverSyncTree_,s,c,i)}else if(r){const c=Yl(n,l=>Kt(l));o=r3(t.serverSyncTree_,s,c)}else{const c=Kt(n);o=Fh(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=n_(t,s)),As(t.eventQueue_,a,o)}function l0(t,e){e_(t,"connected",e),e===!1&&k3(t)}function S3(t,e){$n(e,(n,r)=>{e_(t,n,r)})}function e_(t,e,n){const r=new tt("/.info/"+e),i=Kt(n);t.infoData_.updateSnapshot(r,i);const s=Fh(t.infoSyncTree_,r,i);As(t.eventQueue_,r,s)}function P3(t){return t.nextWriteId_++}function k3(t){NR(t,"onDisconnectEvents");const e=kR(t),n=Ru();vp(t.onDisconnect_,Ke(),(i,s)=>{const o=l3(i,s,t.serverSyncTree_,e);iR(n,i,o)});let r=[];vp(n,Ke(),(i,s)=>{r=r.concat(Fh(t.serverSyncTree_,i,s));const o=D3(t,i);n_(t,o)}),t.onDisconnect_=Ru(),As(t.eventQueue_,Ke(),r)}function N3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(I3)}function NR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qt(n,...e)}function OR(t,e,n){return vR(t.serverSyncTree_,e,n)||Be.EMPTY_NODE}function t_(t,e=t.transactionQueueTree_){if(e||jh(t,e),$o(e)){const n=DR(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&O3(t,Uc(e),n)}else CR(e)&&Bh(e,n=>{t_(t,n)})}function O3(t,e,n){const r=n.map(l=>l.currentWriteId),i=OR(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Mn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{NR(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Fs(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();jh(t,Zg(t.transactionQueueTree_,e)),t_(t,t.transactionQueueTree_),As(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)$c(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Rn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}n_(t,e)}},o)}function n_(t,e){const n=xR(t,e),r=Uc(n),i=DR(t,n);return x3(t,i,r),r}function x3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Mn(n,c.path);let u=!1,h;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=b3)u=!0,h="maxretry",i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0));else{const p=OR(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){PR("transaction failed: Data returned ",m,c.path);let y=Kt(m);typeof m=="object"&&m!=null&&Qr(m,".priority")||(y=y.updatePriority(p.getPriority()));const b=c.currentWriteId,A=kR(t),k=u3(y,p,A);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=k,c.currentWriteId=P3(t),o.splice(o.indexOf(b),1),i=i.concat(n3(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Fs(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0))}As(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}jh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$c(r[a]);t_(t,t.transactionQueueTree_)}function xR(t,e){let n,r=t.transactionQueueTree_;for(n=Ae(e);n!==null&&$o(r)===void 0;)r=Zg(r,n),e=Xe(e),n=Ae(e);return r}function DR(t,e){const n=[];return MR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function MR(t,e,n){const r=$o(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Bh(e,i=>{MR(t,i,n)})}function jh(t,e){const n=$o(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AR(e,n.length>0?n:void 0)}Bh(e,r=>{jh(t,r)})}function D3(t,e){const n=Uc(xR(t,e)),r=Zg(t.transactionQueueTree_,e);return d3(r,i=>{Jd(t,i)}),Jd(t,r),RR(r,i=>{Jd(t,i)}),n}function Jd(t,e){const n=$o(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AR(e,void 0):n.length=s+1,As(t.eventQueue_,Uc(e),i);for(let o=0;o<r.length;o++)$c(r[o])}}/**
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
 */function M3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function L3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Rn(`Invalid query segment '${n}' in query '${t}'`)}return e}const u0=function(t,e){const n=V3(t),r=n.namespace;n.domain==="firebase.com"&&fs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||d6();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new I6(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new tt(n.pathString)}},V3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=M3(t.substring(u,h)));const p=L3(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class r_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ee(this._path)?null:GC(this._path)}get ref(){return new Fo(this._repo,this._path)}get _queryIdentifier(){const e=Yw(this._queryParams),n=Vg(e);return n==="{}"?"default":n}get _queryObject(){return Yw(this._queryParams)}isEqual(e){if(e=dn(e),!(e instanceof r_))return!1;const n=this._repo===e._repo,r=JC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Y6(this._path)}}class Fo extends r_{constructor(e,n){super(e,n,new Hg,!1)}get parent(){const e=QC(this._path);return e===null?null:new Fo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}e3(Fo);t3(Fo);/**
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
 */const $3="FIREBASE_DATABASE_EMULATOR_HOST",Rp={};let F3=!1;function U3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=u0(s,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[$3]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=u0(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new gp(gp.OWNER):new T6(t.name,t.options,e);y3("Invalid Firebase Database URL",o),Ee(o.path)||fs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=j3(a,t,u,new E6(t.name,n));return new H3(h,t)}function B3(t,e){const n=Rp[e];(!n||n[t.key]!==t)&&fs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),N3(t),delete n[t.key]}function j3(t,e,n,r){let i=Rp[e.name];i||(i={},Rp[e.name]=i);let s=i[t.toURLString()];return s&&fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new A3(t,F3,n,r),i[t.toURLString()]=s,s}class H3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fo(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function W3(t){a6(Oi),vn(new fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return U3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ft(Nw,Ow,t),Ft(Nw,Ow,"esm2017")}jr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};W3();/**
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
 */const LR="firebasestorage.googleapis.com",z3="storageBucket",q3=2*60*1e3,K3=10*60*1e3;/**
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
 */class br extends Fn{constructor(e,n,r=0){super(Xd(e),`Firebase Storage: ${n} (${Xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,br.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vr||(vr={}));function Xd(t){return"storage/"+t}function G3(){const t="An unknown error occurred, please check the error payload for server response.";return new br(vr.UNKNOWN,t)}function Y3(){return new br(vr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Q3(){return new br(vr.CANCELED,"User canceled the upload/download.")}function J3(t){return new br(vr.INVALID_URL,"Invalid URL '"+t+"'.")}function X3(t){return new br(vr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function h0(t){return new br(vr.INVALID_ARGUMENT,t)}function VR(){return new br(vr.APP_DELETED,"The Firebase app was deleted.")}function Z3(t){return new br(vr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gn.makeFromUrl(e,n)}catch{return new Gn(e,"")}if(r.path==="")return r;throw X3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},v=n===LR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${v}/${i}/${b}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:y,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<N.length;P++){const j=N[P],W=j.regex.exec(e);if(W){const oe=W[j.indices.bucket];let ge=W[j.indices.path];ge||(ge=""),r=new Gn(oe,ge),j.postModify(r);break}}if(r==null)throw J3(e);return r}}class eH{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tH(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(m,c())},b)}function p(){s&&clearTimeout(s)}function m(b,...A){if(l){p();return}if(b){p(),u.call(null,b,...A);return}if(c()||o){p(),u.call(null,b,...A);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function v(b){y||(y=!0,p(),!l&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function nH(t){t(!1)}/**
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
 */function rH(t){return t!==void 0}function d0(t,e,n,r){if(r<e)throw h0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw h0(`Invalid value for '${t}'. Expected ${n} or less.`)}function iH(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Nu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nu||(Nu={}));/**
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
 */function sH(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class oH{constructor(e,n,r,i,s,o,a,c,l,u,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nu.NO_ERROR,c=s.getStatus();if(!a||sH(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Nu.ABORT;r(!1,new yl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new yl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rH(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=G3();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?VR():Q3();o(c)}else{const c=Y3();o(c)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=tH(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nH(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aH(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cH(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lH(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uH(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hH(t,e,n,r,i,s,o=!0){const a=iH(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lH(l,e),aH(l,n),cH(l,s),uH(l,r),new oH(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function dH(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fH(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ou{constructor(e,n){this._service=e,n instanceof Gn?this._location=n:this._location=Gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ou(e,n)}get root(){const e=new Gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fH(this._location.path)}get storage(){return this._service}get parent(){const e=dH(this._location.path);if(e===null)return null;const n=new Gn(this._location.bucket,e);return new Ou(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Z3(e)}}function f0(t,e){const n=e==null?void 0:e[z3];return n==null?null:Gn.makeFromBucketSpec(n,t)}class pH{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q3,this._maxUploadRetryTime=K3,this._requests=new Set,i!=null?this._bucket=Gn.makeFromBucketSpec(i,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gn.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ou(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new eH(VR());{const o=hH(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p0="@firebase/storage",m0="0.11.2";/**
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
 */const mH="storage";function gH(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pH(n,r,i,e,Oi)}function _H(){vn(new fn(mH,gH,"PUBLIC").setMultipleInstances(!0)),Ft(p0,m0,""),Ft(p0,m0,"esm2017")}_H();const Zd=new WeakMap;function $R(t,e){return Zd.has(e)||Zd.set(e,t||{f:{},r:{},s:{},u:{}}),Zd.get(e)}function yH(t,e,n,r){if(!t)return n;const[i,s]=FR(t);if(!i)return n;const o=$R(void 0,r)[i]||{},a=e||s;return a&&a in o?o[a]:n}function vH(t,e,n,r){if(!t)return;const[i,s]=FR(t);if(!i)return;const o=$R(void 0,r)[i],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(ur),a}function FR(t){return Qj(t)||Jj(t)?["f",t.path]:Xj(t)?["r",t.toString()]:Zj(t)?["s",t.toString()]:[]}const ef=new WeakMap;function wH(t,e,n){const r=Mc();ef.has(r)||ef.set(r,new Map);const i=ef.get(r),s=vH(e,n,t,r);return s&&i.set(s,t),s?()=>i.delete(s):ur}const EH={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Sp(t,e,n,r){if(!Gj(t))return[t,{}];const i=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,p]=u;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(h,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof dt||y instanceof Oh)h[m]=y;else if(Lg(y)){const v=l+m;h[m]=v in n?c[m]:y.path,p[v]=y.converter?y:y.withConverter(r.converter)}else if(Array.isArray(y)){h[m]=Array(y.length);for(let v=0;v<y.length;v++){const b=y[v];b&&b.path in s&&(h[m][v]=s[b.path])}o(y,c[m]||h[m],l+m+".",[h[m],p])}else Is(y)?(h[m]={},o(y,c[m],l+m+".",[h[m],p])):h[m]=y}}return o(t,e,"",i),i}const i_={reset:!1,wait:!0,maxRefDepth:2,converter:EH,snapshotOptions:{serverTimestamps:"estimate"}};function xu(t){for(const e in t)t[e].unsub()}function Pp(t,e,n,r,i,s,o,a,c){const[l,u]=Sp(r.data(t.snapshotOptions),Mg(e,n),i,t);s.set(e,n,l),kp(t,e,n,i,u,s,o,a,c)}function TH({ref:t,target:e,path:n,depth:r,resolve:i,reject:s,ops:o},a){const c=Object.create(null);let l=ur;return a.once?uA(t).then(u=>{u.exists()?Pp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())}).catch(s):l=bg(t,u=>{u.exists()?Pp(a,e,n,u,c,o,r,i,s):(o.set(e,n,null),i())},s),()=>{l(),xu(c)}}function kp(t,e,n,r,i,s,o,a,c){const l=Object.keys(i);if(Object.keys(r).filter(v=>l.indexOf(v)<0).forEach(v=>{r[v].unsub(),delete r[v]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const p=l.length,m=Object.create(null);function y(v){v in m&&++h>=p&&a(n)}l.forEach(v=>{const b=r[v],A=i[v],k=`${n}.${v}`;if(m[k]=!0,b)if(b.path!==A.path)b.unsub();else return;r[v]={data:()=>Mg(e,k),unsub:TH({ref:A,target:e,path:k,depth:o,ops:s,resolve:y.bind(null,k),reject:c},t),path:A.path}})}function IH(t,e,n,r,i,s){const o=Object.assign({},i_,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let p=yt(l?[]:t.value);l||n.set(t,h,[]);const m=r;let y,v=ur;const b=[],A={added:({newIndex:N,doc:P})=>{b.splice(N,0,Object.create(null));const j=b[N],[W,oe]=Sp(P.data(c),void 0,j,o);n.add(Mt(p),N,W),kp(o,p,`${h}.${N}`,j,oe,n,0,r.bind(null,P),i)},modified:({oldIndex:N,newIndex:P,doc:j})=>{const W=Mt(p),oe=b[N],ge=W[N],[ze,Re]=Sp(j.data(c),ge,oe,o);b.splice(P,0,oe),n.remove(W,N),n.add(W,P,ze),kp(o,p,`${h}.${P}`,oe,Re,n,0,r,i)},removed:({oldIndex:N})=>{const P=Mt(p);n.remove(P,N),xu(b.splice(N,1)[0])}};function k(N){const P=N.docChanges(a);if(!y&&P.length){y=!0;let j=0;const W=P.length,oe=Object.create(null);for(let ge=0;ge<W;ge++)oe[P[ge].doc.id]=!0;r=ge=>{ge&&ge.id in oe&&++j>=W&&(l&&(n.set(t,h,Mt(p)),p=t),m(Mt(p)),r=ur)}}P.forEach(j=>{A[j.type](j)}),P.length||(l&&(n.set(t,h,Mt(p)),p=t),r(Mt(p)))}return u?qF(e).then(k).catch(i):v=bg(e,k,i),N=>{if(v(),N){const P=typeof N=="function"?N():[];n.set(t,h,P)}b.forEach(xu)}}function bH(t,e,n,r,i,s){const o=Object.assign({},i_,s),a="value",c=Object.create(null);r=e6(r,()=>Mg(t,a));let l=ur;function u(h){h.exists()?Pp(o,t,a,h,c,n,0,r,i):(n.set(t,a,null),r(null))}return o.once?uA(e).then(u).catch(i):l=bg(e,u,i),h=>{if(l(),h){const p=typeof h=="function"?h():null;n.set(t,a,p)}xu(c)}}const g0=Symbol();function AH(t,e){let n=ur;const r=Object.assign({},i_,e),i=Mt(t),s=r.target||yt();n6()&&(r.once=!0);const o=yH(i,r.ssrKey,g0,Mc()),a=o!==g0;a&&(s.value=o);let c=!a;const l=yt(!1),u=yt(),h=iE(),p=j0();let m=ur;function y(){let A=Mt(t);const k=new Promise((N,P)=>{if(n(r.reset),!A)return n=ur,N(null);l.value=c,c=!0,A.converter||(A=A.withConverter(r.converter)),n=(Lg(A)?bH:IH)(s,A,CH,N,P,r)}).catch(N=>(h.value===k&&(u.value=N),Promise.reject(N))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let v=ur;Pt(t)&&(v=gi(t,y)),y(),i&&(m=wH(h.value,i,r.ssrKey)),NE()&&yE(()=>h.value),p&&b1(b);function b(A=r.reset){v(),m(),n(A)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const CH={set:(t,e,n)=>qj(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function UR(t,e){return AH(t,e)}function RH(t){return(e,n)=>{const r=r6(e,n).run(()=>yt(t));IC.set(e,r),o6(r,e)}}function K5(t){return zj?vC(Mc(t)):null}function SH(t,{firebaseApp:e,modules:n=[]}){t.provide(TC,e);for(const r of n)r(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const PH=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},kH=(t,e,n)=>{e.constructor.createProperty(n,t)};function at(t){return(e,n)=>n!==void 0?kH(t,e,n):PH(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cs(t){return at({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const BR=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(a){t(a,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Un(t,e){return BR({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tf;const NH=((tf=window.HTMLSlotElement)===null||tf===void 0?void 0:tf.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function OH(t){const{slot:e,selector:n}=t??{};return BR({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),a=o!=null?NH(o,t):[];return n?a.filter(c=>c.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ml=window,s_=Ml.ShadowRoot&&(Ml.ShadyCSS===void 0||Ml.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o_=Symbol(),_0=new WeakMap;let jR=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==o_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(s_&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=_0.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&_0.set(n,e))}return e}toString(){return this.cssText}};const xH=t=>new jR(typeof t=="string"?t:t+"",void 0,o_),Li=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new jR(n,t,o_)},DH=(t,e)=>{s_?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Ml.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},y0=s_?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return xH(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nf;const Du=window,v0=Du.trustedTypes,MH=v0?v0.emptyScript:"",w0=Du.reactiveElementPolyfillSupport,Np={toAttribute(t,e){switch(e){case Boolean:t=t?MH:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},HR=(t,e)=>e!==t&&(e==e||t==t),rf={attribute:!0,type:String,converter:Np,reflect:!1,hasChanged:HR},Op="finalized";let Ls=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=rf){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||rf}static finalize(){if(this.hasOwnProperty(Op))return!1;this[Op]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(y0(i))}else e!==void 0&&n.push(y0(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return DH(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=rf){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Np).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Np;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||HR)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ls[Op]=!0,Ls.elementProperties=new Map,Ls.elementStyles=[],Ls.shadowRootOptions={mode:"open"},w0==null||w0({ReactiveElement:Ls}),((nf=Du.reactiveElementVersions)!==null&&nf!==void 0?nf:Du.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sf;const Mu=window,To=Mu.trustedTypes,E0=To?To.createPolicy("lit-html",{createHTML:t=>t}):void 0,xp="$lit$",ui=`lit$${(Math.random()+"").slice(9)}$`,WR="?"+ui,LH=`<${WR}>`,_s=document,lc=()=>_s.createComment(""),uc=t=>t===null||typeof t!="object"&&typeof t!="function",zR=Array.isArray,VH=t=>zR(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",of=`[ 	
\f\r]`,na=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T0=/-->/g,I0=/>/g,Bi=RegExp(`>|${of}(?:([^\\s"'>=/]+)(${of}*=${of}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b0=/'/g,A0=/"/g,qR=/^(?:script|style|textarea|title)$/i,$H=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),An=$H(1),ys=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),C0=new WeakMap,Zi=_s.createTreeWalker(_s,129,null,!1);function KR(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return E0!==void 0?E0.createHTML(e):e}const FH=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=na;for(let a=0;a<n;a++){const c=t[a];let l,u,h=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===na?u[1]==="!--"?o=T0:u[1]!==void 0?o=I0:u[2]!==void 0?(qR.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Bi):u[3]!==void 0&&(o=Bi):o===Bi?u[0]===">"?(o=i??na,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Bi:u[3]==='"'?A0:b0):o===A0||o===b0?o=Bi:o===T0||o===I0?o=na:(o=Bi,i=void 0);const m=o===Bi&&t[a+1].startsWith("/>")?" ":"";s+=o===na?c+LH:h>=0?(r.push(l),c.slice(0,h)+xp+c.slice(h)+ui+m):c+ui+(h===-2?(r.push(void 0),a):m)}return[KR(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class hc{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=FH(e,n);if(this.el=hc.createElement(l,r),Zi.currentNode=this.el.content,n===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=Zi.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith(xp)||p.startsWith(ui)){const m=u[o++];if(h.push(p),m!==void 0){const y=i.getAttribute(m.toLowerCase()+xp).split(ui),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?BH:v[1]==="?"?HH:v[1]==="@"?WH:Hh})}else c.push({type:6,index:s})}for(const p of h)i.removeAttribute(p)}if(qR.test(i.tagName)){const h=i.textContent.split(ui),p=h.length-1;if(p>0){i.textContent=To?To.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],lc()),Zi.nextNode(),c.push({type:2,index:++s});i.append(h[p],lc())}}}else if(i.nodeType===8)if(i.data===WR)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(ui,h+1))!==-1;)c.push({type:7,index:s}),h+=ui.length-1}s++}}static createElement(e,n){const r=_s.createElement("template");return r.innerHTML=e,r}}function Io(t,e,n=t,r){var i,s,o,a;if(e===ys)return e;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=uc(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(e=Io(t,c._$AS(t,e.values),c,r)),e}class UH{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:_s).importNode(r,!0);Zi.currentNode=s;let o=Zi.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Bc(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new zH(o,this,e)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=Zi.nextNode(),a++)}return Zi.currentNode=_s,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Bc{constructor(e,n,r,i){var s;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Io(this,e,n),uc(e)?e===Fe||e==null||e===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):e!==this._$AH&&e!==ys&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):VH(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Fe&&uc(this._$AH)?this._$AA.nextSibling.data=e:this.$(_s.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=hc.createElement(KR(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new UH(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=C0.get(e.strings);return n===void 0&&C0.set(e.strings,n=new hc(e)),n}T(e){zR(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Bc(this.k(lc()),this.k(lc()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Hh{constructor(e,n,r,i,s){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Io(this,e,n,0),o=!uc(e)||e!==this._$AH&&e!==ys,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=Io(this,a[r+c],n,c),l===ys&&(l=this._$AH[c]),o||(o=!uc(l)||l!==this._$AH[c]),l===Fe?e=Fe:e!==Fe&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class BH extends Hh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fe?void 0:e}}const jH=To?To.emptyScript:"";class HH extends Hh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Fe?this.element.setAttribute(this.name,jH):this.element.removeAttribute(this.name)}}class WH extends Hh{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=Io(this,e,n,0))!==null&&r!==void 0?r:Fe)===ys)return;const i=this._$AH,s=e===Fe&&i!==Fe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Fe&&(i===Fe||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class zH{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Io(this,e)}}const R0=Mu.litHtmlPolyfillSupport;R0==null||R0(hc,Bc),((sf=Mu.litHtmlVersions)!==null&&sf!==void 0?sf:Mu.litHtmlVersions=[]).push("2.8.0");const qH=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Bc(e.insertBefore(lc(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var af,cf;let Zn=class extends Ls{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qH(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ys}};Zn.finalized=!0,Zn._$litElement$=!0,(af=globalThis.litElementHydrateSupport)===null||af===void 0||af.call(globalThis,{LitElement:Zn});const S0=globalThis.litElementPolyfillSupport;S0==null||S0({LitElement:Zn});((cf=globalThis.litElementVersions)!==null&&cf!==void 0?cf:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Wh extends Zn{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}le([at({type:Boolean,reflect:!0})],Wh.prototype,"inset",void 0);le([at({type:Boolean,reflect:!0,attribute:"inset-start"})],Wh.prototype,"insetStart",void 0);le([at({type:Boolean,reflect:!0,attribute:"inset-end"})],Wh.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const KH=Li`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Dp=class extends Wh{};Dp.styles=[KH];Dp=le([Uo("md-divider")],Dp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const GH={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},YH=t=>(...e)=>({_$litDirective$:t,values:e});let QH=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dc=YH(class extends QH{constructor(t){var e;if(super(t),t.type!==GH.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return ys}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const GR=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];GR.map(YR);function YR(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function a_(t){for(const e of GR)t.createProperty(e,{attribute:YR(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function JH(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function QR(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function JR(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!XH(t)}function XH(t){const e=Mp;return e&&(t.preventDefault(),t.stopImmediatePropagation()),ZH(),e}let Mp=!1;async function ZH(){Mp=!0,await null,Mp=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fc={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const e5={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:fc.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:fc.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},t5={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:fc.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:fc.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class pt extends Zn{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>e5,this.getCloseAnimation=()=>t5,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:r}=this;if(!n||!r||!n.open)return;const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:r}=this;return An`
      <div class="scrim"></div>
      <dialog
        class=${dc(n)}
        aria-label=${r||Fe}
        aria-labelledby=${this.hasHeadline?"headline":Fe}
        role=${this.type==="alert"?"alertdialog":Fe}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||Fe}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||Fe}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:r}=e;n.method!=="dialog"||!r||this.close(r.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!JH(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:r,container:i,headline:s,content:o,actions:a}=this;if(!n||!r||!i||!s||!o||!a)return;const{container:c,dialog:l,scrim:u,headline:h,content:p,actions:m}=e,y=[[n,l??[]],[r,u??[]],[i,c??[]],[s,h??[]],[o,p??[]],[a,m??[]]],v=[];for(const[b,A]of y)for(const k of A)v.push(b.animate(...k));await Promise.all(v.map(b=>b.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:r}=e;n===this.topAnchor&&(this.isAtScrollTop=r),n===this.bottomAnchor&&(this.isAtScrollBottom=r)}}a_(pt);pt.shadowRootOptions={...Zn.shadowRootOptions,delegatesFocus:!0};le([at({type:Boolean})],pt.prototype,"open",null);le([at({attribute:!1})],pt.prototype,"returnValue",void 0);le([at()],pt.prototype,"type",void 0);le([Un("dialog")],pt.prototype,"dialog",void 0);le([Un(".scrim")],pt.prototype,"scrim",void 0);le([Un(".container")],pt.prototype,"container",void 0);le([Un(".headline")],pt.prototype,"headline",void 0);le([Un(".content")],pt.prototype,"content",void 0);le([Un(".actions")],pt.prototype,"actions",void 0);le([Cs()],pt.prototype,"isAtScrollTop",void 0);le([Cs()],pt.prototype,"isAtScrollBottom",void 0);le([Un(".scroller")],pt.prototype,"scroller",void 0);le([Un(".top.anchor")],pt.prototype,"topAnchor",void 0);le([Un(".bottom.anchor")],pt.prototype,"bottomAnchor",void 0);le([Cs()],pt.prototype,"hasHeadline",void 0);le([Cs()],pt.prototype,"hasActions",void 0);le([Cs()],pt.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const n5=Li`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Lp=class extends pt{};Lp.styles=[n5];Lp=le([Uo("md-dialog")],Lp);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const r5=Li`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XR=Symbol("attachableController");let Ll;Ll=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[XR])==null||e.hostConnected()});class ZR{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[XR]=this,Ll==null||Ll.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i5=["focusin","focusout","pointerdown"];class c_ extends Zn{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new ZR(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[P0]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[P0]=!0}}onControlChange(e,n){for(const r of i5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}le([at({type:Boolean,reflect:!0})],c_.prototype,"visible",void 0);le([at({type:Boolean,reflect:!0})],c_.prototype,"inward",void 0);const P0=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const s5=Li`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Vp=class extends c_{};Vp.styles=[s5];Vp=le([Uo("md-focus-ring")],Vp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o5=450,k0=225,a5=.2,c5=10,l5=75,u5=.35,h5="::after",d5="forwards";var ln;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ln||(ln={}));const f5=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],p5=150;class jc extends Zn{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ln.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new ZR(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return An`<div class="surface ${dc(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==ln.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===ln.HOLDING){this.state=ln.WAITING_FOR_CLICK;return}if(this.state===ln.TOUCH_DELAY){this.state=ln.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=ln.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=ln.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,p5)}),this.state===ln.TOUCH_DELAY&&(this.state=ln.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===ln.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===ln.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(u5*r,l5),s=Math.floor(r*a5),a=Math.sqrt(n**2+e**2)+c5;this.initialSize=s,this.rippleScale=`${(a+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,a=r+s,{pageX:c,pageY:l}=e;return{x:c-o,y:l-a}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:h5,duration:o5,easing:fc.STANDARD,fill:d5})}async endPressAnimation(){this.state=ln.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=k0){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,k0-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of f5)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}le([at({type:Boolean,reflect:!0})],jc.prototype,"disabled",void 0);le([Cs()],jc.prototype,"hovered",void 0);le([Cs()],jc.prototype,"pressed",void 0);le([Un(".surface")],jc.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const m5=Li`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let $p=class extends jc{};$p.styles=[m5];$p=le([Uo("md-ripple")],$p);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eS=Symbol.for(""),g5=t=>{if((t==null?void 0:t.r)===eS)return t==null?void 0:t._$litStatic$},N0=(t,...e)=>({_$litStatic$:e.reduce((n,r,i)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:eS}),O0=new Map,_5=t=>(e,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,l=0,u=!1;for(;l<r;){for(c=e[l];l<r&&(s=n[l],(i=g5(s))!==void 0);)c+=i+e[++l],u=!0;l!==r&&a.push(s),o.push(c),l++}if(l===r&&o.push(e[r]),u){const h=o.join("$$lit$$");(e=O0.get(h))===void 0&&(o.raw=o,O0.set(h,e=o)),n=a}return t(e,...n)},y5=_5(An);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l_=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function v5(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async r=>{const{type:i,[l_]:s}=n,{form:o}=s;if(!(!o||i==="button")&&(await new Promise(a=>{a()}),!r.defaultPrevented)){if(i==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),s.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var tS;class wn extends Zn{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[l_].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[tS]=this.attachInternals(),this.handleActivationClick=e=>{!JR(e)||!this.buttonElement||(this.focus(),QR(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?N0`a`:N0`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:s}=this;return y5`
      <${n}
        class="button ${dc(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${r||Fe}"
        aria-haspopup="${i||Fe}"
        aria-expanded="${s||Fe}"
        href=${this.href||Fe}
        target=${this.target||Fe}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var r,i;const e=this.disabled&&!this.href,n=An`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return An`
      ${(r=this.renderElevation)==null?void 0:r.call(this)}
      ${(i=this.renderOutline)==null?void 0:i.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?Fe:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:Fe}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}tS=l_;a_(wn),v5(wn);wn.formAssociated=!0;wn.shadowRootOptions={mode:"open",delegatesFocus:!0};le([at({type:Boolean,reflect:!0})],wn.prototype,"disabled",void 0);le([at()],wn.prototype,"href",void 0);le([at()],wn.prototype,"target",void 0);le([at({type:Boolean,attribute:"trailing-icon"})],wn.prototype,"trailingIcon",void 0);le([at({type:Boolean,attribute:"has-icon"})],wn.prototype,"hasIcon",void 0);le([at()],wn.prototype,"type",void 0);le([at()],wn.prototype,"value",void 0);le([Un(".button")],wn.prototype,"buttonElement",void 0);le([OH({slot:"icon",flatten:!0})],wn.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class w5 extends wn{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const E5=Li`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Fp=class extends w5{};Fp.styles=[r5,E5];Fp=le([Uo("md-text-button")],Fp);const T5=["open"],I5=_t("div",{slot:"headline"},"Conferma identità",-1),b5={key:0,slot:"content",id:"form-id",method:"dialog"},A5=["open"],C5=_t("div",{slot:"headline"},"Codice non trovato",-1),R5={key:0,slot:"content",id:"form-id",method:"dialog"},S5={slot:"actions"},P5=wr({__name:"Scanner",setup(t){const e=yt(),n=yt(),r=yt(!1),i=yt(!1);async function s(c){n.value=c;const l=await UR(Cl(Sl,`codes/${c}`),{once:!0}).promise.value;if(!l){i.value=!0;return}e.value=Yt(()=>l.user),r.value=!0}function o(){r.value=!1;const c=e.value.value;KF(Cl(Sl,`scans/${new Date().getTime()}`),{code:n.value,timestamp:new Date,username:c.username,userRef:Cl(Sl,`users/${c.id}`)})}function a(){r.value=!1}return(c,l)=>(hn(),dr(On,null,[Xt(m4,{onCodeFound:s}),_t("md-dialog",{onClose:l[0]||(l[0]=u=>r.value=!1),class:"removeDialog",type:"alert",open:r.value},[I5,e.value&&e.value.value?(hn(),dr("form",b5,[_t("div",null," Il codice corrisponde a: "+j_(e.value.value.username),1)])):Va("",!0),_t("div",{slot:"actions"},[_t("md-text-button",{form:"form-id",value:"cancel",onClick:a},"Annulla"),_t("md-text-button",{form:"form-id",value:"confirm",onClick:o},"Conferma")])],40,T5),_t("md-dialog",{onClose:l[2]||(l[2]=u=>i.value=!1),class:"removeDialog",type:"alert",open:i.value},[C5,n.value?(hn(),dr("form",R5,[_t("div",null," Il codice non corrisponde a nessun utente. Contatta gli sviluppatori con il seguente codice: "+j_(n.value),1)])):Va("",!0),_t("div",S5,[_t("md-text-button",{form:"form-id",value:"congirm",onClick:l[1]||(l[1]=u=>i.value=!1)},"Ok")])],40,A5)],64))}});/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const k5=Li`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ar extends Zn{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;JR(e)&&((n=this.button)==null||n.focus(),this.button!=null&&QR(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return An`
      <button
        id="switch"
        type="button"
        class="switch ${dc(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||Fe}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return An`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${dc(e)}">
          ${this.shouldShowIcons()?this.renderIcons():An``}
        </span>
      </span>
    `}renderIcons(){return An`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?An``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return An`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return An`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return An`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}a_(Ar);Ar.shadowRootOptions={mode:"open",delegatesFocus:!0};Ar.formAssociated=!0;le([at({type:Boolean,reflect:!0})],Ar.prototype,"disabled",void 0);le([at({type:Boolean})],Ar.prototype,"selected",void 0);le([at({type:Boolean})],Ar.prototype,"icons",void 0);le([at({type:Boolean,attribute:"show-only-selected-icon"})],Ar.prototype,"showOnlySelectedIcon",void 0);le([Un("button")],Ar.prototype,"button",void 0);le([at()],Ar.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const N5=Li`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Up=class extends Ar{};Up.styles=[N5,k5];Up=le([Uo("md-switch")],Up);const O5={class:"section"},x5=wr({__name:"HomeView",setup(t){var s;const e=i6(),n=UR(Cl(Sl,`users/${(s=e.value)==null?void 0:s.uid}`)),r=Yt(()=>{var o;return((o=n.value)==null?void 0:o.role)==="scanner"}),i=Yt(()=>{var o;return(o=n.value)==null?void 0:o.actualCode});return(o,a)=>(hn(),dr("main",null,[_t("div",O5,[r.value?(hn(),La(P5,{key:0})):Va("",!0),!r.value&&i.value?(hn(),La(xx,{key:1,codeString:i.value},null,8,["codeString"])):Va("",!0)])]))}});const nS=VO({history:eO("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:x5},{path:"/login",name:"login",component:()=>jO(()=>import("./LoginView-f4e280ab.js"),["assets/LoginView-f4e280ab.js","assets/LoginView-330dcfb6.css"])}]});nS.beforeEach(async t=>{if(t.meta.requiresAuth&&!await s6())return{path:"/login",query:{redirect:t.fullPath}}});const zh=NN(FO);zh.use(MN());zh.use(nS);zh.use(SH,{firebaseApp:dA,modules:[RH()]});zh.mount("#app");export{Fe as A,wn as B,j_ as C,qH as D,fc as E,Va as F,D5 as G,M5 as H,B5 as I,H5 as J,KF as K,Cl as L,Sl as M,j5 as N,ai as O,rm as P,q5 as Q,Qk as R,W5 as S,ys as T,z5 as U,i6 as V,Mt as W,Xt as X,le as _,Li as a,YH as b,QH as c,GH as d,Uo as e,y5 as f,JH as g,N0 as h,Un as i,r5 as j,wr as k,OH as l,yt as m,at as n,dc as o,hn as p,dr as q,a_ as r,Zn as s,Cs as t,K5 as u,_t as v,yk as w,An as x,L5 as y,tl as z};
