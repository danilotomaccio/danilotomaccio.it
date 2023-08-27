(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uh(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Fe={},Fi=[],_n=()=>{},MC=()=>!1,xC=/^on[^a-z]/,wc=t=>xC.test(t),Bh=t=>t.startsWith("onUpdate:"),at=Object.assign,jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},LC=Object.prototype.hasOwnProperty,ye=(t,e)=>LC.call(t,e),se=Array.isArray,Ui=t=>Ec(t)==="[object Map]",w_=t=>Ec(t)==="[object Set]",ae=t=>typeof t=="function",ct=t=>typeof t=="string",Hh=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",E_=t=>ze(t)&&ae(t.then)&&ae(t.catch),b_=Object.prototype.toString,Ec=t=>b_.call(t),$C=t=>Ec(t).slice(8,-1),T_=t=>Ec(t)==="[object Object]",Vh=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wa=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FC=/-(\w)/g,Mn=bc(t=>t.replace(FC,(e,n)=>n?n.toUpperCase():"")),UC=/\B([A-Z])/g,ls=bc(t=>t.replace(UC,"-$1").toLowerCase()),Tc=bc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pl=bc(t=>t?`on${Tc(t)}`:""),no=(t,e)=>!Object.is(t,e),kl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Oa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},BC=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cp;const Su=()=>cp||(cp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wh(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ct(r)?WC(r):Wh(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ct(t))return t;if(ze(t))return t}}const jC=/;(?![^(]*\))/g,HC=/:([^]+)/,VC=/\/\*[^]*?\*\//g;function WC(t){const e={};return t.replace(VC,"").split(jC).forEach(n=>{if(n){const r=n.split(HC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cc(t){let e="";if(ct(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Cc(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",KC=Uh(zC);function C_(t){return!!t||t===""}const qC=t=>ct(t)?t:t==null?"":se(t)||ze(t)&&(t.toString===b_||!ae(t.toString))?JSON.stringify(t,I_,2):String(t),I_=(t,e)=>e&&e.__v_isRef?I_(t,e.value):Ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:w_(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!se(e)&&!T_(e)?String(e):e;let un;class S_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function A_(t){return new S_(t)}function GC(t,e=un){e&&e.active&&e.effects.push(t)}function YC(){return un}const zh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},R_=t=>(t.w&Mr)>0,P_=t=>(t.n&Mr)>0,JC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mr},XC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];R_(i)&&!P_(i)?i.delete(t):e[n++]=i,i.w&=~Mr,i.n&=~Mr}e.length=n}},Na=new WeakMap;let Fs=0,Mr=1;const Au=30;let dn;const ai=Symbol(""),Ru=Symbol("");class Kh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,GC(this,r)}run(){if(!this.active)return this.fn();let e=dn,n=Ar;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,Ar=!0,Mr=1<<++Fs,Fs<=Au?JC(this):lp(this),this.fn()}finally{Fs<=Au&&XC(this),Mr=1<<--Fs,dn=this.parent,Ar=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(lp(this),this.onStop&&this.onStop(),this.active=!1)}}function lp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ar=!0;const k_=[];function us(){k_.push(Ar),Ar=!1}function hs(){const t=k_.pop();Ar=t===void 0?!0:t}function Bt(t,e,n){if(Ar&&dn){let r=Na.get(t);r||Na.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=zh()),O_(i)}}function O_(t,e){let n=!1;Fs<=Au?P_(t)||(t.n|=Mr,n=!R_(t)):n=!t.has(dn),n&&(t.add(dn),dn.deps.push(t))}function rr(t,e,n,r,i,s){const o=Na.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&se(t)){const a=Number(r);o.forEach((l,h)=>{(h==="length"||h>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":se(t)?Vh(n)&&c.push(o.get("length")):(c.push(o.get(ai)),Ui(t)&&c.push(o.get(Ru)));break;case"delete":se(t)||(c.push(o.get(ai)),Ui(t)&&c.push(o.get(Ru)));break;case"set":Ui(t)&&c.push(o.get(ai));break}if(c.length===1)c[0]&&Pu(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Pu(zh(a))}}function Pu(t,e){const n=se(t)?t:[...t];for(const r of n)r.computed&&up(r);for(const r of n)r.computed||up(r)}function up(t,e){(t!==dn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function QC(t,e){var n;return(n=Na.get(t))==null?void 0:n.get(e)}const ZC=Uh("__proto__,__v_isRef,__isVue"),N_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hh)),eI=qh(),tI=qh(!1,!0),nI=qh(!0),hp=rI();function rI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ce(this);for(let s=0,o=this.length;s<o;s++)Bt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=Ce(this)[e].apply(this,n);return hs(),r}}),t}function iI(t){const e=Ce(this);return Bt(e,"has",t),e.hasOwnProperty(t)}function qh(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?wI:$_:e?L_:x_).get(r))return r;const o=se(r);if(!t){if(o&&ye(hp,i))return Reflect.get(hp,i,s);if(i==="hasOwnProperty")return iI}const c=Reflect.get(r,i,s);return(Hh(i)?N_.has(i):ZC(i))||(t||Bt(r,"get",i),e)?c:pt(c)?o&&Vh(i)?c:c.value:ze(c)?t?U_(c):Sc(c):c}}const sI=D_(),oI=D_(!0);function D_(t=!1){return function(n,r,i,s){let o=n[r];if(Yi(o)&&pt(o)&&!pt(i))return!1;if(!t&&(!Da(i)&&!Yi(i)&&(o=Ce(o),i=Ce(i)),!se(n)&&pt(o)&&!pt(i)))return o.value=i,!0;const c=se(n)&&Vh(r)?Number(r)<n.length:ye(n,r),a=Reflect.set(n,r,i,s);return n===Ce(s)&&(c?no(i,o)&&rr(n,"set",r,i):rr(n,"add",r,i)),a}}function aI(t,e){const n=ye(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rr(t,"delete",e,void 0),r}function cI(t,e){const n=Reflect.has(t,e);return(!Hh(e)||!N_.has(e))&&Bt(t,"has",e),n}function lI(t){return Bt(t,"iterate",se(t)?"length":ai),Reflect.ownKeys(t)}const M_={get:eI,set:sI,deleteProperty:aI,has:cI,ownKeys:lI},uI={get:nI,set(t,e){return!0},deleteProperty(t,e){return!0}},hI=at({},M_,{get:tI,set:oI}),Gh=t=>t,Ic=t=>Reflect.getPrototypeOf(t);function ea(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ce(t),s=Ce(e);n||(e!==s&&Bt(i,"get",e),Bt(i,"get",s));const{has:o}=Ic(i),c=r?Gh:n?Qh:ro;if(o.call(i,e))return c(t.get(e));if(o.call(i,s))return c(t.get(s));t!==i&&t.get(e)}function ta(t,e=!1){const n=this.__v_raw,r=Ce(n),i=Ce(t);return e||(t!==i&&Bt(r,"has",t),Bt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function na(t,e=!1){return t=t.__v_raw,!e&&Bt(Ce(t),"iterate",ai),Reflect.get(t,"size",t)}function dp(t){t=Ce(t);const e=Ce(this);return Ic(e).has.call(e,t)||(e.add(t),rr(e,"add",t,t)),this}function fp(t,e){e=Ce(e);const n=Ce(this),{has:r,get:i}=Ic(n);let s=r.call(n,t);s||(t=Ce(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?no(e,o)&&rr(n,"set",t,e):rr(n,"add",t,e),this}function pp(t){const e=Ce(this),{has:n,get:r}=Ic(e);let i=n.call(e,t);i||(t=Ce(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&rr(e,"delete",t,void 0),s}function gp(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&rr(t,"clear",void 0,void 0),n}function ra(t,e){return function(r,i){const s=this,o=s.__v_raw,c=Ce(o),a=e?Gh:t?Qh:ro;return!t&&Bt(c,"iterate",ai),o.forEach((l,h)=>r.call(i,a(l),a(h),s))}}function ia(t,e,n){return function(...r){const i=this.__v_raw,s=Ce(i),o=Ui(s),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=i[t](...r),h=n?Gh:e?Qh:ro;return!e&&Bt(s,"iterate",a?Ru:ai),{next(){const{value:f,done:g}=l.next();return g?{value:f,done:g}:{value:c?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function pr(t){return function(...e){return t==="delete"?!1:this}}function dI(){const t={get(s){return ea(this,s)},get size(){return na(this)},has:ta,add:dp,set:fp,delete:pp,clear:gp,forEach:ra(!1,!1)},e={get(s){return ea(this,s,!1,!0)},get size(){return na(this)},has:ta,add:dp,set:fp,delete:pp,clear:gp,forEach:ra(!1,!0)},n={get(s){return ea(this,s,!0)},get size(){return na(this,!0)},has(s){return ta.call(this,s,!0)},add:pr("add"),set:pr("set"),delete:pr("delete"),clear:pr("clear"),forEach:ra(!0,!1)},r={get(s){return ea(this,s,!0,!0)},get size(){return na(this,!0)},has(s){return ta.call(this,s,!0)},add:pr("add"),set:pr("set"),delete:pr("delete"),clear:pr("clear"),forEach:ra(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ia(s,!1,!1),n[s]=ia(s,!0,!1),e[s]=ia(s,!1,!0),r[s]=ia(s,!0,!0)}),[t,n,e,r]}const[fI,pI,gI,mI]=dI();function Yh(t,e){const n=e?t?mI:gI:t?pI:fI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,s)}const _I={get:Yh(!1,!1)},vI={get:Yh(!1,!0)},yI={get:Yh(!0,!1)},x_=new WeakMap,L_=new WeakMap,$_=new WeakMap,wI=new WeakMap;function EI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bI(t){return t.__v_skip||!Object.isExtensible(t)?0:EI($C(t))}function Sc(t){return Yi(t)?t:Jh(t,!1,M_,_I,x_)}function F_(t){return Jh(t,!1,hI,vI,L_)}function U_(t){return Jh(t,!0,uI,yI,$_)}function Jh(t,e,n,r,i){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=bI(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return i.set(t,c),c}function Bi(t){return Yi(t)?Bi(t.__v_raw):!!(t&&t.__v_isReactive)}function Yi(t){return!!(t&&t.__v_isReadonly)}function Da(t){return!!(t&&t.__v_isShallow)}function B_(t){return Bi(t)||Yi(t)}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Xh(t){return Oa(t,"__v_skip",!0),t}const ro=t=>ze(t)?Sc(t):t,Qh=t=>ze(t)?U_(t):t;function j_(t){Ar&&dn&&(t=Ce(t),O_(t.dep||(t.dep=zh())))}function H_(t,e){t=Ce(t);const n=t.dep;n&&Pu(n)}function pt(t){return!!(t&&t.__v_isRef===!0)}function Zt(t){return V_(t,!1)}function TI(t){return V_(t,!0)}function V_(t,e){return pt(t)?t:new CI(t,e)}class CI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ce(e),this._value=n?e:ro(e)}get value(){return j_(this),this._value}set value(e){const n=this.__v_isShallow||Da(e)||Yi(e);e=n?e:Ce(e),no(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ro(e),H_(this))}}function Rr(t){return pt(t)?t.value:t}const II={get:(t,e,n)=>Rr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return pt(i)&&!pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function W_(t){return Bi(t)?t:new Proxy(t,II)}function SI(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=RI(t,n);return e}class AI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return QC(Ce(this._object),this._key)}}function RI(t,e,n){const r=t[e];return pt(r)?r:new AI(t,e,n)}class PI{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kh(e,()=>{this._dirty||(this._dirty=!0,H_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ce(this);return j_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kI(t,e,n=!1){let r,i;const s=ae(t);return s?(r=t,i=_n):(r=t.get,i=t.set),new PI(r,i,s||!i,n)}function Pr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ac(s,e,n)}return i}function vn(t,e,n,r){if(ae(t)){const s=Pr(t,e,n,r);return s&&E_(s)&&s.catch(o=>{Ac(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(vn(t[s],e,n,r));return i}function Ac(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,c=n;for(;s;){const l=s.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](t,o,c)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){Pr(a,null,10,[t,o,c]);return}}OI(t,n,i,r)}function OI(t,e,n,r=!0){console.error(t)}let io=!1,ku=!1;const bt=[];let In=0;const ji=[];let Jn=null,Qr=0;const z_=Promise.resolve();let Zh=null;function K_(t){const e=Zh||z_;return t?e.then(this?t.bind(this):t):e}function NI(t){let e=In+1,n=bt.length;for(;e<n;){const r=e+n>>>1;so(bt[r])<t?e=r+1:n=r}return e}function ed(t){(!bt.length||!bt.includes(t,io&&t.allowRecurse?In+1:In))&&(t.id==null?bt.push(t):bt.splice(NI(t.id),0,t),q_())}function q_(){!io&&!ku&&(ku=!0,Zh=z_.then(Y_))}function DI(t){const e=bt.indexOf(t);e>In&&bt.splice(e,1)}function MI(t){se(t)?ji.push(...t):(!Jn||!Jn.includes(t,t.allowRecurse?Qr+1:Qr))&&ji.push(t),q_()}function mp(t,e=io?In+1:0){for(;e<bt.length;e++){const n=bt[e];n&&n.pre&&(bt.splice(e,1),e--,n())}}function G_(t){if(ji.length){const e=[...new Set(ji)];if(ji.length=0,Jn){Jn.push(...e);return}for(Jn=e,Jn.sort((n,r)=>so(n)-so(r)),Qr=0;Qr<Jn.length;Qr++)Jn[Qr]();Jn=null,Qr=0}}const so=t=>t.id==null?1/0:t.id,xI=(t,e)=>{const n=so(t)-so(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Y_(t){ku=!1,io=!0,bt.sort(xI);const e=_n;try{for(In=0;In<bt.length;In++){const n=bt[In];n&&n.active!==!1&&Pr(n,null,14)}}finally{In=0,bt.length=0,G_(),io=!1,Zh=null,(bt.length||ji.length)&&Y_()}}function LI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:g}=r[h]||Fe;g&&(i=n.map(_=>ct(_)?_.trim():_)),f&&(i=n.map(BC))}let c,a=r[c=Pl(e)]||r[c=Pl(Mn(e))];!a&&s&&(a=r[c=Pl(ls(e))]),a&&vn(a,t,6,i);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,vn(l,t,6,i)}}function J_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},c=!1;if(!ae(t)){const a=l=>{const h=J_(l,e,!0);h&&(c=!0,at(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!s&&!c?(ze(t)&&r.set(t,null),null):(se(s)?s.forEach(a=>o[a]=null):at(o,s),ze(t)&&r.set(t,o),o)}function Rc(t,e){return!t||!wc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,ls(e))||ye(t,e))}let gt=null,X_=null;function Ma(t){const e=gt;return gt=t,X_=t&&t.type.__scopeId||null,e}function Q_(t,e=gt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ap(-1);const s=Ma(e);let o;try{o=t(...i)}finally{Ma(s),r._d&&Ap(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ol(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:c,attrs:a,emit:l,render:h,renderCache:f,data:g,setupState:_,ctx:E,inheritAttrs:T}=t;let M,A;const N=Ma(t);try{if(n.shapeFlag&4){const P=i||r;M=Cn(h.call(P,P,f,s,_,g,E)),A=a}else{const P=e;M=Cn(P.length>1?P(s,{attrs:a,slots:c,emit:l}):P(s,null)),A=e.props?a:$I(a)}}catch(P){Ks.length=0,Ac(P,t,1),M=Tt(xr)}let L=M;if(A&&T!==!1){const P=Object.keys(A),{shapeFlag:z}=L;P.length&&z&7&&(o&&P.some(Bh)&&(A=FI(A,o)),L=Ji(L,A))}return n.dirs&&(L=Ji(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Ma(N),M}const $I=t=>{let e;for(const n in t)(n==="class"||n==="style"||wc(n))&&((e||(e={}))[n]=t[n]);return e},FI=(t,e)=>{const n={};for(const r in t)(!Bh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function UI(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:c,patchFlag:a}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?_p(r,o,l):!!o;if(a&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==r[g]&&!Rc(l,g))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_p(r,o,l):!0:!!o;return!1}function _p(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Rc(n,s))return!0}return!1}function BI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jI=t=>t.__isSuspense;function HI(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):MI(t)}const sa={};function ci(t,e,n){return Z_(t,e,n)}function Z_(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Fe){var c;const a=YC()===((c=st)==null?void 0:c.scope)?st:null;let l,h=!1,f=!1;if(pt(t)?(l=()=>t.value,h=Da(t)):Bi(t)?(l=()=>t,r=!0):se(t)?(f=!0,h=t.some(P=>Bi(P)||Da(P)),l=()=>t.map(P=>{if(pt(P))return P.value;if(Bi(P))return ei(P);if(ae(P))return Pr(P,a,2)})):ae(t)?e?l=()=>Pr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),vn(t,a,3,[_])}:l=_n,e&&r){const P=l;l=()=>ei(P())}let g,_=P=>{g=N.onStop=()=>{Pr(P,a,4)}},E;if(co)if(_=_n,e?n&&vn(e,a,3,[l(),f?[]:void 0,_]):l(),i==="sync"){const P=US();E=P.__watcherHandles||(P.__watcherHandles=[])}else return _n;let T=f?new Array(t.length).fill(sa):sa;const M=()=>{if(N.active)if(e){const P=N.run();(r||h||(f?P.some((z,G)=>no(z,T[G])):no(P,T)))&&(g&&g(),vn(e,a,3,[P,T===sa?void 0:f&&T[0]===sa?[]:T,_]),T=P)}else N.run()};M.allowRecurse=!!e;let A;i==="sync"?A=M:i==="post"?A=()=>Lt(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),A=()=>ed(M));const N=new Kh(l,A);e?n?M():T=N.run():i==="post"?Lt(N.run.bind(N),a&&a.suspense):N.run();const L=()=>{N.stop(),a&&a.scope&&jh(a.scope.effects,N)};return E&&E.push(L),L}function VI(t,e,n){const r=this.proxy,i=ct(t)?t.includes(".")?ev(r,t):()=>r[t]:t.bind(r,r);let s;ae(e)?s=e:(s=e.handler,n=e);const o=st;Xi(this);const c=Z_(i,s.bind(r),n);return o?Xi(o):li(),c}function ev(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ei(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pt(t))ei(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)ei(t[n],e);else if(w_(t)||Ui(t))t.forEach(n=>{ei(n,e)});else if(T_(t))for(const n in t)ei(t[n],e);return t}function WI(t,e){const n=gt;if(n===null)return t;const r=Nc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,c,a,l=Fe]=e[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&ei(c),i.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function qr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];s&&(c.oldValue=s[o].value);let a=c.dir[r];a&&(us(),vn(a,n,8,[t.el,c,t,e]),hs())}}function or(t,e){return ae(t)?(()=>at({name:t.name},e,{setup:t}))():t}const Ws=t=>!!t.type.__asyncLoader,tv=t=>t.type.__isKeepAlive;function zI(t,e){nv(t,"a",e)}function KI(t,e){nv(t,"da",e)}function nv(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)tv(i.parent.vnode)&&qI(r,e,n,i),i=i.parent}}function qI(t,e,n,r){const i=Pc(e,t,r,!0);nd(()=>{jh(r[e],i)},n)}function Pc(t,e,n=st,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Xi(n);const c=vn(e,n,t,o);return li(),hs(),c});return r?i.unshift(s):i.push(s),s}}const ar=t=>(e,n=st)=>(!co||t==="sp")&&Pc(t,(...r)=>e(...r),n),GI=ar("bm"),td=ar("m"),YI=ar("bu"),JI=ar("u"),XI=ar("bum"),nd=ar("um"),QI=ar("sp"),ZI=ar("rtg"),eS=ar("rtc");function tS(t,e=st){Pc("ec",t,e)}const rv="components";function nS(t,e){return iS(rv,t,!0,e)||t}const rS=Symbol.for("v-ndc");function iS(t,e,n=!0,r=!1){const i=gt||st;if(i){const s=i.type;if(t===rv){const c=LS(s,!1);if(c&&(c===e||c===Mn(e)||c===Tc(Mn(e))))return s}const o=vp(i[t]||s[t],e)||vp(i.appContext[t],e);return!o&&r?s:o}}function vp(t,e){return t&&(t[e]||t[Mn(e)]||t[Tc(Mn(e))])}function iv(t,e,n={},r,i){if(gt.isCE||gt.parent&&Ws(gt.parent)&&gt.parent.isCE)return e!=="default"&&(n.name=e),Tt("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),nn();const o=s&&sv(s(n)),c=ao(hn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function sv(t){return t.some(e=>$a(e)?!(e.type===xr||e.type===hn&&!sv(e.children)):!0)?t:null}const Ou=t=>t?mv(t)?Nc(t)||t.proxy:Ou(t.parent):null,zs=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ou(t.parent),$root:t=>Ou(t.root),$emit:t=>t.emit,$options:t=>rd(t),$forceUpdate:t=>t.f||(t.f=()=>ed(t.update)),$nextTick:t=>t.n||(t.n=K_.bind(t.proxy)),$watch:t=>VI.bind(t)}),Nl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&ye(t,e),sS={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Nl(r,e))return o[e]=1,r[e];if(i!==Fe&&ye(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ye(l,e))return o[e]=3,s[e];if(n!==Fe&&ye(n,e))return o[e]=4,n[e];Nu&&(o[e]=0)}}const h=zs[e];let f,g;if(h)return e==="$attrs"&&Bt(t,"get",e),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&ye(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,ye(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Nl(i,e)?(i[e]=n,!0):r!==Fe&&ye(r,e)?(r[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let c;return!!n[o]||t!==Fe&&ye(t,o)||Nl(e,o)||(c=s[0])&&ye(c,o)||ye(r,o)||ye(zs,o)||ye(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yp(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nu=!0;function oS(t){const e=rd(t),n=t.proxy,r=t.ctx;Nu=!1,e.beforeCreate&&wp(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:c,provide:a,inject:l,created:h,beforeMount:f,mounted:g,beforeUpdate:_,updated:E,activated:T,deactivated:M,beforeDestroy:A,beforeUnmount:N,destroyed:L,unmounted:P,render:z,renderTracked:G,renderTriggered:ce,errorCaptured:we,serverPrefetch:He,expose:Ne,inheritAttrs:Ke,components:ht,directives:xe,filters:Hn}=e;if(l&&aS(l,r,null),o)for(const Ie in o){const he=o[Ie];ae(he)&&(r[Ie]=he.bind(n))}if(i){const Ie=i.call(n,n);ze(Ie)&&(t.data=Sc(Ie))}if(Nu=!0,s)for(const Ie in s){const he=s[Ie],Vt=ae(he)?he.bind(n,n):ae(he.get)?he.get.bind(n,n):_n,Qe=!ae(he)&&ae(he.set)?he.set.bind(n):_n,Ze=zt({get:Vt,set:Qe});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:et=>Ze.value=et})}if(c)for(const Ie in c)ov(c[Ie],r,n,Ie);if(a){const Ie=ae(a)?a.call(n):a;Reflect.ownKeys(Ie).forEach(he=>{Ea(he,Ie[he])})}h&&wp(h,t,"c");function Pe(Ie,he){se(he)?he.forEach(Vt=>Ie(Vt.bind(n))):he&&Ie(he.bind(n))}if(Pe(GI,f),Pe(td,g),Pe(YI,_),Pe(JI,E),Pe(zI,T),Pe(KI,M),Pe(tS,we),Pe(eS,G),Pe(ZI,ce),Pe(XI,N),Pe(nd,P),Pe(QI,He),se(Ne))if(Ne.length){const Ie=t.exposed||(t.exposed={});Ne.forEach(he=>{Object.defineProperty(Ie,he,{get:()=>n[he],set:Vt=>n[he]=Vt})})}else t.exposed||(t.exposed={});z&&t.render===_n&&(t.render=z),Ke!=null&&(t.inheritAttrs=Ke),ht&&(t.components=ht),xe&&(t.directives=xe)}function aS(t,e,n=_n){se(t)&&(t=Du(t));for(const r in t){const i=t[r];let s;ze(i)?"default"in i?s=On(i.from||r,i.default,!0):s=On(i.from||r):s=On(i),pt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function wp(t,e,n){vn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ov(t,e,n,r){const i=r.includes(".")?ev(n,r):()=>n[r];if(ct(t)){const s=e[t];ae(s)&&ci(i,s)}else if(ae(t))ci(i,t.bind(n));else if(ze(t))if(se(t))t.forEach(s=>ov(s,e,n,r));else{const s=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(s)&&ci(i,s,t)}}function rd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,c=s.get(e);let a;return c?a=c:!i.length&&!n&&!r?a=e:(a={},i.length&&i.forEach(l=>xa(a,l,o,!0)),xa(a,e,o)),ze(e)&&s.set(e,a),a}function xa(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&xa(t,s,n,!0),i&&i.forEach(o=>xa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=cS[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const cS={data:Ep,props:bp,emits:bp,methods:Us,computed:Us,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Us,directives:Us,watch:uS,provide:Ep,inject:lS};function Ep(t,e){return e?t?function(){return at(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function lS(t,e){return Us(Du(t),Du(e))}function Du(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?at(Object.create(null),t,e):e}function bp(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:at(Object.create(null),yp(t),yp(e??{})):e}function uS(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function av(){return{app:null,config:{isNativeTag:MC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hS=0;function dS(t,e){return function(r,i=null){ae(r)||(r=at({},r)),i!=null&&!ze(i)&&(i=null);const s=av(),o=new Set;let c=!1;const a=s.app={_uid:hS++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:BS,get config(){return s.config},set config(l){},use(l,...h){return o.has(l)||(l&&ae(l.install)?(o.add(l),l.install(a,...h)):ae(l)&&(o.add(l),l(a,...h))),a},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),a},component(l,h){return h?(s.components[l]=h,a):s.components[l]},directive(l,h){return h?(s.directives[l]=h,a):s.directives[l]},mount(l,h,f){if(!c){const g=Tt(r,i);return g.appContext=s,h&&e?e(g,l):t(g,l,f),c=!0,a._container=l,l.__vue_app__=a,Nc(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,h){return s.provides[l]=h,a},runWithContext(l){La=a;try{return l()}finally{La=null}}};return a}}let La=null;function Ea(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function On(t,e,n=!1){const r=st||gt;if(r||La){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:La._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function fS(t,e,n,r=!1){const i={},s={};Oa(s,Oc,1),t.propsDefaults=Object.create(null),cv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:F_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function pS(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,c=Ce(i),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(Rc(t.emitsOptions,g))continue;const _=e[g];if(a)if(ye(s,g))_!==s[g]&&(s[g]=_,l=!0);else{const E=Mn(g);i[E]=Mu(a,c,E,_,t,!1)}else _!==s[g]&&(s[g]=_,l=!0)}}}else{cv(t,e,i,s)&&(l=!0);let h;for(const f in c)(!e||!ye(e,f)&&((h=ls(f))===f||!ye(e,h)))&&(a?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=Mu(a,c,f,void 0,t,!0)):delete i[f]);if(s!==c)for(const f in s)(!e||!ye(e,f))&&(delete s[f],l=!0)}l&&rr(t,"set","$attrs")}function cv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(wa(a))continue;const l=e[a];let h;i&&ye(i,h=Mn(a))?!s||!s.includes(h)?n[h]=l:(c||(c={}))[h]=l:Rc(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(s){const a=Ce(n),l=c||Fe;for(let h=0;h<s.length;h++){const f=s[h];n[f]=Mu(i,a,f,l[f],t,!ye(l,f))}}return o}function Mu(t,e,n,r,i,s){const o=t[n];if(o!=null){const c=ye(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&ae(a)){const{propsDefaults:l}=i;n in l?r=l[n]:(Xi(i),r=l[n]=a.call(null,e),li())}else r=a}o[0]&&(s&&!c?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function lv(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},c=[];let a=!1;if(!ae(t)){const h=f=>{a=!0;const[g,_]=lv(f,e,!0);at(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!a)return ze(t)&&r.set(t,Fi),Fi;if(se(s))for(let h=0;h<s.length;h++){const f=Mn(s[h]);Tp(f)&&(o[f]=Fe)}else if(s)for(const h in s){const f=Mn(h);if(Tp(f)){const g=s[h],_=o[f]=se(g)||ae(g)?{type:g}:at({},g);if(_){const E=Sp(Boolean,_.type),T=Sp(String,_.type);_[0]=E>-1,_[1]=T<0||E<T,(E>-1||ye(_,"default"))&&c.push(f)}}}const l=[o,c];return ze(t)&&r.set(t,l),l}function Tp(t){return t[0]!=="$"}function Cp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ip(t,e){return Cp(t)===Cp(e)}function Sp(t,e){return se(e)?e.findIndex(n=>Ip(n,t)):ae(e)&&Ip(e,t)?0:-1}const uv=t=>t[0]==="_"||t==="$stable",id=t=>se(t)?t.map(Cn):[Cn(t)],gS=(t,e,n)=>{if(e._n)return e;const r=Q_((...i)=>id(e(...i)),n);return r._c=!1,r},hv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(uv(i))continue;const s=t[i];if(ae(s))e[i]=gS(i,s,r);else if(s!=null){const o=id(s);e[i]=()=>o}}},dv=(t,e)=>{const n=id(e);t.slots.default=()=>n},mS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ce(e),Oa(e,"_",n)):hv(e,t.slots={})}else t.slots={},e&&dv(t,e);Oa(t.slots,Oc,1)},_S=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Fe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?s=!1:(at(i,e),!n&&c===1&&delete i._):(s=!e.$stable,hv(e,i)),o=e}else e&&(dv(t,e),o={default:1});if(s)for(const c in i)!uv(c)&&!(c in o)&&delete i[c]};function xu(t,e,n,r,i=!1){if(se(t)){t.forEach((g,_)=>xu(g,e&&(se(e)?e[_]:e),n,r,i));return}if(Ws(r)&&!i)return;const s=r.shapeFlag&4?Nc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:c,r:a}=t,l=e&&e.r,h=c.refs===Fe?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==a&&(ct(l)?(h[l]=null,ye(f,l)&&(f[l]=null)):pt(l)&&(l.value=null)),ae(a))Pr(a,c,12,[o,h]);else{const g=ct(a),_=pt(a);if(g||_){const E=()=>{if(t.f){const T=g?ye(f,a)?f[a]:h[a]:a.value;i?se(T)&&jh(T,s):se(T)?T.includes(s)||T.push(s):g?(h[a]=[s],ye(f,a)&&(f[a]=h[a])):(a.value=[s],t.k&&(h[t.k]=a.value))}else g?(h[a]=o,ye(f,a)&&(f[a]=o)):_&&(a.value=o,t.k&&(h[t.k]=o))};o?(E.id=-1,Lt(E,n)):E()}}}const Lt=HI;function vS(t){return yS(t)}function yS(t,e){const n=Su();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:c,createComment:a,setText:l,setElementText:h,parentNode:f,nextSibling:g,setScopeId:_=_n,insertStaticContent:E}=t,T=(v,y,C,R=null,D=null,x=null,K=!1,B=null,j=!!y.dynamicChildren)=>{if(v===y)return;v&&!Rs(v,y)&&(R=k(v),et(v,D,x,!0),v=null),y.patchFlag===-2&&(j=!1,y.dynamicChildren=null);const{type:$,ref:Z,shapeFlag:J}=y;switch($){case kc:M(v,y,C,R);break;case xr:A(v,y,C,R);break;case Dl:v==null&&N(y,C,R,K);break;case hn:ht(v,y,C,R,D,x,K,B,j);break;default:J&1?z(v,y,C,R,D,x,K,B,j):J&6?xe(v,y,C,R,D,x,K,B,j):(J&64||J&128)&&$.process(v,y,C,R,D,x,K,B,j,H)}Z!=null&&D&&xu(Z,v&&v.ref,x,y||v,!y)},M=(v,y,C,R)=>{if(v==null)r(y.el=c(y.children),C,R);else{const D=y.el=v.el;y.children!==v.children&&l(D,y.children)}},A=(v,y,C,R)=>{v==null?r(y.el=a(y.children||""),C,R):y.el=v.el},N=(v,y,C,R)=>{[v.el,v.anchor]=E(v.children,y,C,R,v.el,v.anchor)},L=({el:v,anchor:y},C,R)=>{let D;for(;v&&v!==y;)D=g(v),r(v,C,R),v=D;r(y,C,R)},P=({el:v,anchor:y})=>{let C;for(;v&&v!==y;)C=g(v),i(v),v=C;i(y)},z=(v,y,C,R,D,x,K,B,j)=>{K=K||y.type==="svg",v==null?G(y,C,R,D,x,K,B,j):He(v,y,D,x,K,B,j)},G=(v,y,C,R,D,x,K,B)=>{let j,$;const{type:Z,props:J,shapeFlag:ee,transition:re,dirs:le}=v;if(j=v.el=o(v.type,x,J&&J.is,J),ee&8?h(j,v.children):ee&16&&we(v.children,j,null,R,D,x&&Z!=="foreignObject",K,B),le&&qr(v,null,R,"created"),ce(j,v,v.scopeId,K,R),J){for(const Se in J)Se!=="value"&&!wa(Se)&&s(j,Se,null,J[Se],x,v.children,R,D,Ye);"value"in J&&s(j,"value",null,J.value),($=J.onVnodeBeforeMount)&&Tn($,R,v)}le&&qr(v,null,R,"beforeMount");const De=(!D||D&&!D.pendingBranch)&&re&&!re.persisted;De&&re.beforeEnter(j),r(j,y,C),(($=J&&J.onVnodeMounted)||De||le)&&Lt(()=>{$&&Tn($,R,v),De&&re.enter(j),le&&qr(v,null,R,"mounted")},D)},ce=(v,y,C,R,D)=>{if(C&&_(v,C),R)for(let x=0;x<R.length;x++)_(v,R[x]);if(D){let x=D.subTree;if(y===x){const K=D.vnode;ce(v,K,K.scopeId,K.slotScopeIds,D.parent)}}},we=(v,y,C,R,D,x,K,B,j=0)=>{for(let $=j;$<v.length;$++){const Z=v[$]=B?_r(v[$]):Cn(v[$]);T(null,Z,y,C,R,D,x,K,B)}},He=(v,y,C,R,D,x,K)=>{const B=y.el=v.el;let{patchFlag:j,dynamicChildren:$,dirs:Z}=y;j|=v.patchFlag&16;const J=v.props||Fe,ee=y.props||Fe;let re;C&&Gr(C,!1),(re=ee.onVnodeBeforeUpdate)&&Tn(re,C,y,v),Z&&qr(y,v,C,"beforeUpdate"),C&&Gr(C,!0);const le=D&&y.type!=="foreignObject";if($?Ne(v.dynamicChildren,$,B,C,R,le,x):K||he(v,y,B,null,C,R,le,x,!1),j>0){if(j&16)Ke(B,y,J,ee,C,R,D);else if(j&2&&J.class!==ee.class&&s(B,"class",null,ee.class,D),j&4&&s(B,"style",J.style,ee.style,D),j&8){const De=y.dynamicProps;for(let Se=0;Se<De.length;Se++){const Le=De[Se],xt=J[Le],Xt=ee[Le];(Xt!==xt||Le==="value")&&s(B,Le,xt,Xt,D,v.children,C,R,Ye)}}j&1&&v.children!==y.children&&h(B,y.children)}else!K&&$==null&&Ke(B,y,J,ee,C,R,D);((re=ee.onVnodeUpdated)||Z)&&Lt(()=>{re&&Tn(re,C,y,v),Z&&qr(y,v,C,"updated")},R)},Ne=(v,y,C,R,D,x,K)=>{for(let B=0;B<y.length;B++){const j=v[B],$=y[B],Z=j.el&&(j.type===hn||!Rs(j,$)||j.shapeFlag&70)?f(j.el):C;T(j,$,Z,null,R,D,x,K,!0)}},Ke=(v,y,C,R,D,x,K)=>{if(C!==R){if(C!==Fe)for(const B in C)!wa(B)&&!(B in R)&&s(v,B,C[B],null,K,y.children,D,x,Ye);for(const B in R){if(wa(B))continue;const j=R[B],$=C[B];j!==$&&B!=="value"&&s(v,B,$,j,K,y.children,D,x,Ye)}"value"in R&&s(v,"value",C.value,R.value)}},ht=(v,y,C,R,D,x,K,B,j)=>{const $=y.el=v?v.el:c(""),Z=y.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:re}=y;re&&(B=B?B.concat(re):re),v==null?(r($,C,R),r(Z,C,R),we(y.children,C,Z,D,x,K,B,j)):J>0&&J&64&&ee&&v.dynamicChildren?(Ne(v.dynamicChildren,ee,C,D,x,K,B),(y.key!=null||D&&y===D.subTree)&&fv(v,y,!0)):he(v,y,C,Z,D,x,K,B,j)},xe=(v,y,C,R,D,x,K,B,j)=>{y.slotScopeIds=B,v==null?y.shapeFlag&512?D.ctx.activate(y,C,R,K,j):Hn(y,C,R,D,x,K,j):Rt(v,y,j)},Hn=(v,y,C,R,D,x,K)=>{const B=v.component=kS(v,R,D);if(tv(v)&&(B.ctx.renderer=H),NS(B),B.asyncDep){if(D&&D.registerDep(B,Pe),!v.el){const j=B.subTree=Tt(xr);A(null,j,y,C)}return}Pe(B,v,y,C,D,x,K)},Rt=(v,y,C)=>{const R=y.component=v.component;if(UI(v,y,C))if(R.asyncDep&&!R.asyncResolved){Ie(R,y,C);return}else R.next=y,DI(R.update),R.update();else y.el=v.el,R.vnode=y},Pe=(v,y,C,R,D,x,K)=>{const B=()=>{if(v.isMounted){let{next:Z,bu:J,u:ee,parent:re,vnode:le}=v,De=Z,Se;Gr(v,!1),Z?(Z.el=le.el,Ie(v,Z,K)):Z=le,J&&kl(J),(Se=Z.props&&Z.props.onVnodeBeforeUpdate)&&Tn(Se,re,Z,le),Gr(v,!0);const Le=Ol(v),xt=v.subTree;v.subTree=Le,T(xt,Le,f(xt.el),k(xt),v,D,x),Z.el=Le.el,De===null&&BI(v,Le.el),ee&&Lt(ee,D),(Se=Z.props&&Z.props.onVnodeUpdated)&&Lt(()=>Tn(Se,re,Z,le),D)}else{let Z;const{el:J,props:ee}=y,{bm:re,m:le,parent:De}=v,Se=Ws(y);if(Gr(v,!1),re&&kl(re),!Se&&(Z=ee&&ee.onVnodeBeforeMount)&&Tn(Z,De,y),Gr(v,!0),J&&Ee){const Le=()=>{v.subTree=Ol(v),Ee(J,v.subTree,v,D,null)};Se?y.type.__asyncLoader().then(()=>!v.isUnmounted&&Le()):Le()}else{const Le=v.subTree=Ol(v);T(null,Le,C,R,v,D,x),y.el=Le.el}if(le&&Lt(le,D),!Se&&(Z=ee&&ee.onVnodeMounted)){const Le=y;Lt(()=>Tn(Z,De,Le),D)}(y.shapeFlag&256||De&&Ws(De.vnode)&&De.vnode.shapeFlag&256)&&v.a&&Lt(v.a,D),v.isMounted=!0,y=C=R=null}},j=v.effect=new Kh(B,()=>ed($),v.scope),$=v.update=()=>j.run();$.id=v.uid,Gr(v,!0),$()},Ie=(v,y,C)=>{y.component=v;const R=v.vnode.props;v.vnode=y,v.next=null,pS(v,y.props,R,C),_S(v,y.children,C),us(),mp(),hs()},he=(v,y,C,R,D,x,K,B,j=!1)=>{const $=v&&v.children,Z=v?v.shapeFlag:0,J=y.children,{patchFlag:ee,shapeFlag:re}=y;if(ee>0){if(ee&128){Qe($,J,C,R,D,x,K,B,j);return}else if(ee&256){Vt($,J,C,R,D,x,K,B,j);return}}re&8?(Z&16&&Ye($,D,x),J!==$&&h(C,J)):Z&16?re&16?Qe($,J,C,R,D,x,K,B,j):Ye($,D,x,!0):(Z&8&&h(C,""),re&16&&we(J,C,R,D,x,K,B,j))},Vt=(v,y,C,R,D,x,K,B,j)=>{v=v||Fi,y=y||Fi;const $=v.length,Z=y.length,J=Math.min($,Z);let ee;for(ee=0;ee<J;ee++){const re=y[ee]=j?_r(y[ee]):Cn(y[ee]);T(v[ee],re,C,null,D,x,K,B,j)}$>Z?Ye(v,D,x,!0,!1,J):we(y,C,R,D,x,K,B,j,J)},Qe=(v,y,C,R,D,x,K,B,j)=>{let $=0;const Z=y.length;let J=v.length-1,ee=Z-1;for(;$<=J&&$<=ee;){const re=v[$],le=y[$]=j?_r(y[$]):Cn(y[$]);if(Rs(re,le))T(re,le,C,null,D,x,K,B,j);else break;$++}for(;$<=J&&$<=ee;){const re=v[J],le=y[ee]=j?_r(y[ee]):Cn(y[ee]);if(Rs(re,le))T(re,le,C,null,D,x,K,B,j);else break;J--,ee--}if($>J){if($<=ee){const re=ee+1,le=re<Z?y[re].el:R;for(;$<=ee;)T(null,y[$]=j?_r(y[$]):Cn(y[$]),C,le,D,x,K,B,j),$++}}else if($>ee)for(;$<=J;)et(v[$],D,x,!0),$++;else{const re=$,le=$,De=new Map;for($=le;$<=ee;$++){const vt=y[$]=j?_r(y[$]):Cn(y[$]);vt.key!=null&&De.set(vt.key,$)}let Se,Le=0;const xt=ee-le+1;let Xt=!1,Vn=0;const Wt=new Array(xt);for($=0;$<xt;$++)Wt[$]=0;for($=re;$<=J;$++){const vt=v[$];if(Le>=xt){et(vt,D,x,!0);continue}let Pt;if(vt.key!=null)Pt=De.get(vt.key);else for(Se=le;Se<=ee;Se++)if(Wt[Se-le]===0&&Rs(vt,y[Se])){Pt=Se;break}Pt===void 0?et(vt,D,x,!0):(Wt[Pt-le]=$+1,Pt>=Vn?Vn=Pt:Xt=!0,T(vt,y[Pt],C,null,D,x,K,B,j),Le++)}const zr=Xt?wS(Wt):Fi;for(Se=zr.length-1,$=xt-1;$>=0;$--){const vt=le+$,Pt=y[vt],bn=vt+1<Z?y[vt+1].el:R;Wt[$]===0?T(null,Pt,C,bn,D,x,K,B,j):Xt&&(Se<0||$!==zr[Se]?Ze(Pt,C,bn,2):Se--)}}},Ze=(v,y,C,R,D=null)=>{const{el:x,type:K,transition:B,children:j,shapeFlag:$}=v;if($&6){Ze(v.component.subTree,y,C,R);return}if($&128){v.suspense.move(y,C,R);return}if($&64){K.move(v,y,C,H);return}if(K===hn){r(x,y,C);for(let J=0;J<j.length;J++)Ze(j[J],y,C,R);r(v.anchor,y,C);return}if(K===Dl){L(v,y,C);return}if(R!==2&&$&1&&B)if(R===0)B.beforeEnter(x),r(x,y,C),Lt(()=>B.enter(x),D);else{const{leave:J,delayLeave:ee,afterLeave:re}=B,le=()=>r(x,y,C),De=()=>{J(x,()=>{le(),re&&re()})};ee?ee(x,le,De):De()}else r(x,y,C)},et=(v,y,C,R=!1,D=!1)=>{const{type:x,props:K,ref:B,children:j,dynamicChildren:$,shapeFlag:Z,patchFlag:J,dirs:ee}=v;if(B!=null&&xu(B,null,C,v,!0),Z&256){y.ctx.deactivate(v);return}const re=Z&1&&ee,le=!Ws(v);let De;if(le&&(De=K&&K.onVnodeBeforeUnmount)&&Tn(De,y,v),Z&6)Ri(v.component,C,R);else{if(Z&128){v.suspense.unmount(C,R);return}re&&qr(v,null,y,"beforeUnmount"),Z&64?v.type.remove(v,y,C,D,H,R):$&&(x!==hn||J>0&&J&64)?Ye($,y,C,!1,!0):(x===hn&&J&384||!D&&Z&16)&&Ye(j,y,C),R&&hr(v)}(le&&(De=K&&K.onVnodeUnmounted)||re)&&Lt(()=>{De&&Tn(De,y,v),re&&qr(v,null,y,"unmounted")},C)},hr=v=>{const{type:y,el:C,anchor:R,transition:D}=v;if(y===hn){cn(C,R);return}if(y===Dl){P(v);return}const x=()=>{i(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:B}=D,j=()=>K(C,x);B?B(v.el,x,j):j()}else x()},cn=(v,y)=>{let C;for(;v!==y;)C=g(v),i(v),v=C;i(y)},Ri=(v,y,C)=>{const{bum:R,scope:D,update:x,subTree:K,um:B}=v;R&&kl(R),D.stop(),x&&(x.active=!1,et(K,v,y,C)),B&&Lt(B,y),Lt(()=>{v.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(v,y,C,R=!1,D=!1,x=0)=>{for(let K=x;K<v.length;K++)et(v[K],y,C,R,D)},k=v=>v.shapeFlag&6?k(v.component.subTree):v.shapeFlag&128?v.suspense.next():g(v.anchor||v.el),Y=(v,y,C)=>{v==null?y._vnode&&et(y._vnode,null,null,!0):T(y._vnode||null,v,y,null,null,null,C),mp(),G_(),y._vnode=v},H={p:T,um:et,m:Ze,r:hr,mt:Hn,mc:we,pc:he,pbc:Ne,n:k,o:t};let Q,Ee;return e&&([Q,Ee]=e(H)),{render:Y,hydrate:Q,createApp:dS(Y,Q)}}function Gr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fv(t,e,n=!1){const r=t.children,i=e.children;if(se(r)&&se(i))for(let s=0;s<r.length;s++){const o=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=_r(i[s]),c.el=o.el),n||fv(o,c)),c.type===kc&&(c.el=o.el)}}function wS(t){const e=t.slice(),n=[0];let r,i,s,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)c=s+o>>1,t[n[c]]<l?s=c+1:o=c;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ES=t=>t.__isTeleport,hn=Symbol.for("v-fgt"),kc=Symbol.for("v-txt"),xr=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),Ks=[];let pn=null;function nn(t=!1){Ks.push(pn=t?null:[])}function bS(){Ks.pop(),pn=Ks[Ks.length-1]||null}let oo=1;function Ap(t){oo+=t}function pv(t){return t.dynamicChildren=oo>0?pn||Fi:null,bS(),oo>0&&pn&&pn.push(t),t}function pi(t,e,n,r,i,s){return pv(An(t,e,n,r,i,s,!0))}function ao(t,e,n,r,i){return pv(Tt(t,e,n,r,i,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const Oc="__vInternal",gv=({key:t})=>t??null,ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||pt(t)||ae(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function An(t,e=null,n=null,r=0,i=null,s=t===hn?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gv(e),ref:e&&ba(e),scopeId:X_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:gt};return c?(sd(a,n),s&128&&t.normalize(a)):n&&(a.shapeFlag|=ct(n)?8:16),oo>0&&!o&&pn&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&pn.push(a),a}const Tt=TS;function TS(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===rS)&&(t=xr),$a(t)){const c=Ji(t,e,!0);return n&&sd(c,n),oo>0&&!s&&pn&&(c.shapeFlag&6?pn[pn.indexOf(t)]=c:pn.push(c)),c.patchFlag|=-2,c}if($S(t)&&(t=t.__vccOpts),e){e=CS(e);let{class:c,style:a}=e;c&&!ct(c)&&(e.class=Cc(c)),ze(a)&&(B_(a)&&!se(a)&&(a=at({},a)),e.style=Wh(a))}const o=ct(t)?1:jI(t)?128:ES(t)?64:ze(t)?4:ae(t)?2:0;return An(t,e,n,r,i,o,s,!0)}function CS(t){return t?B_(t)||Oc in t?at({},t):t:null}function Ji(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,c=e?AS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&gv(c),ref:e&&e.ref?n&&i?se(i)?i.concat(ba(e)):[i,ba(e)]:ba(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ji(t.ssContent),ssFallback:t.ssFallback&&Ji(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function IS(t=" ",e=0){return Tt(kc,null,t,e)}function SS(t="",e=!1){return e?(nn(),ao(xr,null,t)):Tt(xr,null,t)}function Cn(t){return t==null||typeof t=="boolean"?Tt(xr):se(t)?Tt(hn,null,t.slice()):typeof t=="object"?_r(t):Tt(kc,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ji(t)}function sd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),sd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Oc in e)?e._ctx=gt:i===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[IS(e)]):n=8);t.children=e,t.shapeFlag|=n}function AS(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Cc([e.class,r.class]));else if(i==="style")e.style=Wh([e.style,r.style]);else if(wc(i)){const s=e[i],o=r[i];o&&s!==o&&!(se(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Tn(t,e,n,r=null){vn(t,e,7,[n,r])}const RS=av();let PS=0;function kS(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||RS,s={uid:PS++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new S_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lv(r,i),emitsOptions:J_(r,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=LI.bind(null,s),t.ce&&t.ce(s),s}let st=null;const OS=()=>st||gt;let od,ki,Rp="__VUE_INSTANCE_SETTERS__";(ki=Su()[Rp])||(ki=Su()[Rp]=[]),ki.push(t=>st=t),od=t=>{ki.length>1?ki.forEach(e=>e(t)):ki[0](t)};const Xi=t=>{od(t),t.scope.on()},li=()=>{st&&st.scope.off(),od(null)};function mv(t){return t.vnode.shapeFlag&4}let co=!1;function NS(t,e=!1){co=e;const{props:n,children:r}=t.vnode,i=mv(t);fS(t,n,i,e),mS(t,r);const s=i?DS(t,e):void 0;return co=!1,s}function DS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xh(new Proxy(t.ctx,sS));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?xS(t):null;Xi(t),us();const s=Pr(r,t,0,[t.props,i]);if(hs(),li(),E_(s)){if(s.then(li,li),e)return s.then(o=>{Pp(t,o,e)}).catch(o=>{Ac(o,t,0)});t.asyncDep=s}else Pp(t,s,e)}else _v(t,e)}function Pp(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=W_(e)),_v(t,n)}let kp;function _v(t,e,n){const r=t.type;if(!t.render){if(!e&&kp&&!r.render){const i=r.template||rd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=at(at({isCustomElement:s,delimiters:c},o),a);r.render=kp(i,l)}}t.render=r.render||_n}Xi(t),us(),oS(t),hs(),li()}function MS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}}))}function xS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return MS(t)},slots:t.slots,emit:t.emit,expose:e}}function Nc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(W_(Xh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}}))}function LS(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function $S(t){return ae(t)&&"__vccOpts"in t}const zt=(t,e)=>kI(t,e,co);function vv(t,e,n){const r=arguments.length;return r===2?ze(e)&&!se(e)?$a(e)?Tt(t,null,[e]):Tt(t,e):Tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),Tt(t,e,n))}const FS=Symbol.for("v-scx"),US=()=>On(FS),BS="3.3.4",jS="http://www.w3.org/2000/svg",Zr=typeof document<"u"?document:null,Op=Zr&&Zr.createElement("template"),HS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Zr.createElementNS(jS,t):Zr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Zr.createTextNode(t),createComment:t=>Zr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Op.innerHTML=r?`<svg>${t}</svg>`:t;const c=Op.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function VS(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function WS(t,e,n){const r=t.style,i=ct(n);if(n&&!i){if(e&&!ct(e))for(const s in e)n[s]==null&&Lu(r,s,"");for(const s in n)Lu(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Np=/\s*!important$/;function Lu(t,e,n){if(se(n))n.forEach(r=>Lu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=zS(t,e);Np.test(n)?t.setProperty(ls(r),n.replace(Np,""),"important"):t[r]=n}}const Dp=["Webkit","Moz","ms"],Ml={};function zS(t,e){const n=Ml[e];if(n)return n;let r=Mn(e);if(r!=="filter"&&r in t)return Ml[e]=r;r=Tc(r);for(let i=0;i<Dp.length;i++){const s=Dp[i]+r;if(s in t)return Ml[e]=s}return e}const Mp="http://www.w3.org/1999/xlink";function KS(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mp,e.slice(6,e.length)):t.setAttributeNS(Mp,e,n);else{const s=KC(e);n==null||s&&!C_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function qS(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,h=n??"";l!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=C_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function GS(t,e,n,r){t.addEventListener(e,n,r)}function YS(t,e,n,r){t.removeEventListener(e,n,r)}function JS(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[c,a]=XS(e);if(r){const l=s[e]=e1(r,i);GS(t,c,l,a)}else o&&(YS(t,c,o,a),s[e]=void 0)}}const xp=/(?:Once|Passive|Capture)$/;function XS(t){let e;if(xp.test(t)){e={};let r;for(;r=t.match(xp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let xl=0;const QS=Promise.resolve(),ZS=()=>xl||(QS.then(()=>xl=0),xl=Date.now());function e1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vn(t1(r,n.value),e,5,[r])};return n.value=t,n.attached=ZS(),n}function t1(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Lp=/^on[a-z]/,n1=(t,e,n,r,i=!1,s,o,c,a)=>{e==="class"?VS(t,r,i):e==="style"?WS(t,n,r):wc(e)?Bh(e)||JS(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):r1(t,e,r,i))?qS(t,e,r,s,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),KS(t,e,r,i))};function r1(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Lp.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lp.test(e)&&ct(n)?!1:e in t}const i1=["ctrl","shift","alt","meta"],s1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i1.some(n=>t[`${n}Key`]&&!e.includes(n))},oa=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=s1[e[i]];if(s&&s(n,e))return}return t(n,...r)},o1={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ps(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ps(t,!0),r.enter(t)):r.leave(t,()=>{Ps(t,!1)}):Ps(t,e))},beforeUnmount(t,{value:e}){Ps(t,e)}};function Ps(t,e){t.style.display=e?t._vod:"none"}const a1=at({patchProp:n1},HS);let $p;function c1(){return $p||($p=vS(a1))}const l1=(...t)=>{const e=c1().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=u1(r);if(!i)return;const s=e._component;!ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function u1(t){return ct(t)?document.querySelector(t):t}var h1=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const d1=Symbol();var Fp;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fp||(Fp={}));function f1(){const t=A_(!0),e=t.run(()=>Zt({}));let n=[],r=[];const i=Xh({install(s){i._a=s,s.provide(d1,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!h1?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Di=typeof window<"u";function p1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Ll(t,e){const n={};for(const r in e){const i=e[r];n[r]=wn(i)?i.map(t):t(i)}return n}const qs=()=>{},wn=Array.isArray,g1=/\/$/,m1=t=>t.replace(g1,"");function $l(t,e,n="/"){let r,i={},s="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=w1(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function _1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Up(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function v1(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Qi(e.matched[r],n.matched[i])&&yv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!y1(t[n],e[n]))return!1;return!0}function y1(t,e){return wn(t)?Bp(t,e):wn(e)?Bp(e,t):t===e}function Bp(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function w1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var lo;(function(t){t.pop="pop",t.push="push"})(lo||(lo={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function E1(t){if(!t)if(Di){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m1(t)}const b1=/^[^#]+#/;function T1(t,e){return t.replace(b1,"#")+e}function C1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dc=()=>({left:window.pageXOffset,top:window.pageYOffset});function I1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=C1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jp(t,e){return(history.state?history.state.position-e:-1)+t}const $u=new Map;function S1(t,e){$u.set(t,e)}function A1(t){const e=$u.get(t);return $u.delete(t),e}let R1=()=>location.protocol+"//"+location.host;function wv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let c=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(c);return a[0]!=="/"&&(a="/"+a),Up(a,"")}return Up(n,t)+r+i}function P1(t,e,n,r){let i=[],s=[],o=null;const c=({state:g})=>{const _=wv(t,location),E=n.value,T=e.value;let M=0;if(g){if(n.value=_,e.value=g,o&&o===E){o=null;return}M=T?g.position-T.position:0}else r(_);i.forEach(A=>{A(n.value,E,{delta:M,type:lo.pop,direction:M?M>0?Gs.forward:Gs.back:Gs.unknown})})};function a(){o=n.value}function l(g){i.push(g);const _=()=>{const E=i.indexOf(g);E>-1&&i.splice(E,1)};return s.push(_),_}function h(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Dc()}),"")}function f(){for(const g of s)g();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function Hp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Dc():null}}function k1(t){const{history:e,location:n}=window,r={value:wv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(a,l,h){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:R1()+t+a;try{e[h?"replaceState":"pushState"](l,"",g),i.value=l}catch(_){console.error(_),n[h?"replace":"assign"](g)}}function o(a,l){const h=ke({},e.state,Hp(i.value.back,a,i.value.forward,!0),l,{position:i.value.position});s(a,h,!0),r.value=a}function c(a,l){const h=ke({},i.value,e.state,{forward:a,scroll:Dc()});s(h.current,h,!0);const f=ke({},Hp(r.value,a,null),{position:h.position+1},l);s(a,f,!1),r.value=a}return{location:r,state:i,push:c,replace:o}}function O1(t){t=E1(t);const e=k1(t),n=P1(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ke({location:"",base:t,go:r,createHref:T1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function N1(t){return typeof t=="string"||t&&typeof t=="object"}function Ev(t){return typeof t=="string"||typeof t=="symbol"}const gr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bv=Symbol("");var Vp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vp||(Vp={}));function Zi(t,e){return ke(new Error,{type:t,[bv]:!0},e)}function qn(t,e){return t instanceof Error&&bv in t&&(e==null||!!(t.type&e))}const Wp="[^/]+?",D1={sensitive:!1,strict:!1,start:!0,end:!0},M1=/[.+*?^${}()[\]/\\]/g;function x1(t,e){const n=ke({},D1,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const h=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const g=l[f];let _=40+(n.sensitive?.25:0);if(g.type===0)f||(i+="/"),i+=g.value.replace(M1,"\\$&"),_+=40;else if(g.type===1){const{value:E,repeatable:T,optional:M,regexp:A}=g;s.push({name:E,repeatable:T,optional:M});const N=A||Wp;if(N!==Wp){_+=10;try{new RegExp(`(${N})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${E}" (${N}): `+P.message)}}let L=T?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(L=M&&l.length<2?`(?:/${L})`:"/"+L),M&&(L+="?"),i+=L,_+=20,M&&(_+=-8),T&&(_+=-20),N===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(l){const h=l.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",E=s[g-1];f[E.name]=_&&E.repeatable?_.split("/"):_}return f}function a(l){let h="",f=!1;for(const g of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of g)if(_.type===0)h+=_.value;else if(_.type===1){const{value:E,repeatable:T,optional:M}=_,A=E in l?l[E]:"";if(wn(A)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const N=wn(A)?A.join("/"):A;if(!N)if(M)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:s,parse:c,stringify:a}}function L1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $1(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=L1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(zp(r))return 1;if(zp(i))return-1}return i.length-r.length}function zp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const F1={type:0,value:""},U1=/[a-zA-Z0-9_]/;function B1(t){if(!t)return[[]];if(t==="/")return[[F1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let c=0,a,l="",h="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:h,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:U1.test(a)?g():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+a:n=3:h+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function j1(t,e,n){const r=x1(B1(t.path),n),i=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function H1(t,e){const n=[],r=new Map;e=Gp({strict:!1,end:!0,sensitive:!1},e);function i(h){return r.get(h)}function s(h,f,g){const _=!g,E=V1(h);E.aliasOf=g&&g.record;const T=Gp(e,h),M=[E];if("alias"in h){const L=typeof h.alias=="string"?[h.alias]:h.alias;for(const P of L)M.push(ke({},E,{components:g?g.record.components:E.components,path:P,aliasOf:g?g.record:E}))}let A,N;for(const L of M){const{path:P}=L;if(f&&P[0]!=="/"){const z=f.record.path,G=z[z.length-1]==="/"?"":"/";L.path=f.record.path+(P&&G+P)}if(A=j1(L,f,T),g?g.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),_&&h.name&&!qp(A)&&o(h.name)),E.children){const z=E.children;for(let G=0;G<z.length;G++)s(z[G],A,g&&g.children[G])}g=g||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return N?()=>{o(N)}:qs}function o(h){if(Ev(h)){const f=r.get(h);f&&(r.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){let f=0;for(;f<n.length&&$1(h,n[f])>=0&&(h.record.path!==n[f].record.path||!Tv(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!qp(h)&&r.set(h.record.name,h)}function l(h,f){let g,_={},E,T;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw Zi(1,{location:h});T=g.record.name,_=ke(Kp(f.params,g.keys.filter(N=>!N.optional).map(N=>N.name)),h.params&&Kp(h.params,g.keys.map(N=>N.name))),E=g.stringify(_)}else if("path"in h)E=h.path,g=n.find(N=>N.re.test(E)),g&&(_=g.parse(E),T=g.record.name);else{if(g=f.name?r.get(f.name):n.find(N=>N.re.test(f.path)),!g)throw Zi(1,{location:h,currentLocation:f});T=g.record.name,_=ke({},f.params,h.params),E=g.stringify(_)}const M=[];let A=g;for(;A;)M.unshift(A.record),A=A.parent;return{name:T,path:E,params:_,matched:M,meta:z1(M)}}return t.forEach(h=>s(h)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function Kp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function V1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:W1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function W1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function z1(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Gp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tv(t,e){return e.children.some(n=>n===t||Tv(t,n))}const Cv=/#/g,K1=/&/g,q1=/\//g,G1=/=/g,Y1=/\?/g,Iv=/\+/g,J1=/%5B/g,X1=/%5D/g,Sv=/%5E/g,Q1=/%60/g,Av=/%7B/g,Z1=/%7C/g,Rv=/%7D/g,eA=/%20/g;function ad(t){return encodeURI(""+t).replace(Z1,"|").replace(J1,"[").replace(X1,"]")}function tA(t){return ad(t).replace(Av,"{").replace(Rv,"}").replace(Sv,"^")}function Fu(t){return ad(t).replace(Iv,"%2B").replace(eA,"+").replace(Cv,"%23").replace(K1,"%26").replace(Q1,"`").replace(Av,"{").replace(Rv,"}").replace(Sv,"^")}function nA(t){return Fu(t).replace(G1,"%3D")}function rA(t){return ad(t).replace(Cv,"%23").replace(Y1,"%3F")}function iA(t){return t==null?"":rA(t).replace(q1,"%2F")}function Fa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Iv," "),o=s.indexOf("="),c=Fa(o<0?s:s.slice(0,o)),a=o<0?null:Fa(s.slice(o+1));if(c in e){let l=e[c];wn(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Yp(t){let e="";for(let n in t){const r=t[n];if(n=nA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(s=>s&&Fu(s)):[r&&Fu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function oA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const aA=Symbol(""),Jp=Symbol(""),cd=Symbol(""),Pv=Symbol(""),Uu=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const a=f=>{f===!1?c(Zi(4,{from:n,to:e})):f instanceof Error?c(f):N1(f)?c(Zi(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,a);let h=Promise.resolve(l);t.length<3&&(h=h.then(a)),h.catch(f=>c(f))})}function Fl(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let c=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(cA(c)){const l=(c.__vccOpts||c)[e];l&&i.push(vr(l,n,r,s,o))}else{let a=c();i.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const h=p1(l)?l.default:l;s.components[o]=h;const g=(h.__vccOpts||h)[e];return g&&vr(g,n,r,s,o)()}))}}return i}function cA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xp(t){const e=On(cd),n=On(Pv),r=zt(()=>e.resolve(Rr(t.to))),i=zt(()=>{const{matched:a}=r.value,{length:l}=a,h=a[l-1],f=n.matched;if(!h||!f.length)return-1;const g=f.findIndex(Qi.bind(null,h));if(g>-1)return g;const _=Qp(a[l-2]);return l>1&&Qp(h)===_&&f[f.length-1].path!==_?f.findIndex(Qi.bind(null,a[l-2])):g}),s=zt(()=>i.value>-1&&dA(n.params,r.value.params)),o=zt(()=>i.value>-1&&i.value===n.matched.length-1&&yv(n.params,r.value.params));function c(a={}){return hA(a)?e[Rr(t.replace)?"replace":"push"](Rr(t.to)).catch(qs):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:c}}const lA=or({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xp,setup(t,{slots:e}){const n=Sc(Xp(t)),{options:r}=On(cd),i=zt(()=>({[Zp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:vv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),uA=lA;function hA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dA(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!wn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Qp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zp=(t,e,n)=>t??e??n,fA=or({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=On(Uu),i=zt(()=>t.route||r.value),s=On(Jp,0),o=zt(()=>{let l=Rr(s);const{matched:h}=i.value;let f;for(;(f=h[l])&&!f.components;)l++;return l}),c=zt(()=>i.value.matched[o.value]);Ea(Jp,zt(()=>o.value+1)),Ea(aA,c),Ea(Uu,i);const a=Zt();return ci(()=>[a.value,c.value,t.name],([l,h,f],[g,_,E])=>{h&&(h.instances[f]=l,_&&_!==h&&l&&l===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),l&&h&&(!_||!Qi(h,_)||!g)&&(h.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=i.value,h=t.name,f=c.value,g=f&&f.components[h];if(!g)return eg(n.default,{Component:g,route:l});const _=f.props[h],E=_?_===!0?l.params:typeof _=="function"?_(l):_:null,M=vv(g,ke({},E,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[h]=null)},ref:a}));return eg(n.default,{Component:M,route:l})||M}}});function eg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kv=fA;function pA(t){const e=H1(t.routes,t),n=t.parseQuery||sA,r=t.stringifyQuery||Yp,i=t.history,s=ks(),o=ks(),c=ks(),a=TI(gr);let l=gr;Di&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ll.bind(null,k=>""+k),f=Ll.bind(null,iA),g=Ll.bind(null,Fa);function _(k,Y){let H,Q;return Ev(k)?(H=e.getRecordMatcher(k),Q=Y):Q=k,e.addRoute(Q,H)}function E(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function T(){return e.getRoutes().map(k=>k.record)}function M(k){return!!e.getRecordMatcher(k)}function A(k,Y){if(Y=ke({},Y||a.value),typeof k=="string"){const C=$l(n,k,Y.path),R=e.resolve({path:C.path},Y),D=i.createHref(C.fullPath);return ke(C,R,{params:g(R.params),hash:Fa(C.hash),redirectedFrom:void 0,href:D})}let H;if("path"in k)H=ke({},k,{path:$l(n,k.path,Y.path).path});else{const C=ke({},k.params);for(const R in C)C[R]==null&&delete C[R];H=ke({},k,{params:f(C)}),Y.params=f(Y.params)}const Q=e.resolve(H,Y),Ee=k.hash||"";Q.params=h(g(Q.params));const v=_1(r,ke({},k,{hash:tA(Ee),path:Q.path})),y=i.createHref(v);return ke({fullPath:v,hash:Ee,query:r===Yp?oA(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:y})}function N(k){return typeof k=="string"?$l(n,k,a.value.path):ke({},k)}function L(k,Y){if(l!==k)return Zi(8,{from:Y,to:k})}function P(k){return ce(k)}function z(k){return P(ke(N(k),{replace:!0}))}function G(k){const Y=k.matched[k.matched.length-1];if(Y&&Y.redirect){const{redirect:H}=Y;let Q=typeof H=="function"?H(k):H;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=N(Q):{path:Q},Q.params={}),ke({query:k.query,hash:k.hash,params:"path"in Q?{}:k.params},Q)}}function ce(k,Y){const H=l=A(k),Q=a.value,Ee=k.state,v=k.force,y=k.replace===!0,C=G(H);if(C)return ce(ke(N(C),{state:typeof C=="object"?ke({},Ee,C.state):Ee,force:v,replace:y}),Y||H);const R=H;R.redirectedFrom=Y;let D;return!v&&v1(r,Q,H)&&(D=Zi(16,{to:R,from:Q}),Ze(Q,Q,!0,!1)),(D?Promise.resolve(D):Ne(R,Q)).catch(x=>qn(x)?qn(x,2)?x:Qe(x):he(x,R,Q)).then(x=>{if(x){if(qn(x,2))return ce(ke({replace:y},N(x.to),{state:typeof x.to=="object"?ke({},Ee,x.to.state):Ee,force:v}),Y||R)}else x=ht(R,Q,!0,y,Ee);return Ke(R,Q,x),x})}function we(k,Y){const H=L(k,Y);return H?Promise.reject(H):Promise.resolve()}function He(k){const Y=cn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function Ne(k,Y){let H;const[Q,Ee,v]=gA(k,Y);H=Fl(Q.reverse(),"beforeRouteLeave",k,Y);for(const C of Q)C.leaveGuards.forEach(R=>{H.push(vr(R,k,Y))});const y=we.bind(null,k,Y);return H.push(y),Ye(H).then(()=>{H=[];for(const C of s.list())H.push(vr(C,k,Y));return H.push(y),Ye(H)}).then(()=>{H=Fl(Ee,"beforeRouteUpdate",k,Y);for(const C of Ee)C.updateGuards.forEach(R=>{H.push(vr(R,k,Y))});return H.push(y),Ye(H)}).then(()=>{H=[];for(const C of v)if(C.beforeEnter)if(wn(C.beforeEnter))for(const R of C.beforeEnter)H.push(vr(R,k,Y));else H.push(vr(C.beforeEnter,k,Y));return H.push(y),Ye(H)}).then(()=>(k.matched.forEach(C=>C.enterCallbacks={}),H=Fl(v,"beforeRouteEnter",k,Y),H.push(y),Ye(H))).then(()=>{H=[];for(const C of o.list())H.push(vr(C,k,Y));return H.push(y),Ye(H)}).catch(C=>qn(C,8)?C:Promise.reject(C))}function Ke(k,Y,H){c.list().forEach(Q=>He(()=>Q(k,Y,H)))}function ht(k,Y,H,Q,Ee){const v=L(k,Y);if(v)return v;const y=Y===gr,C=Di?history.state:{};H&&(Q||y?i.replace(k.fullPath,ke({scroll:y&&C&&C.scroll},Ee)):i.push(k.fullPath,Ee)),a.value=k,Ze(k,Y,H,y),Qe()}let xe;function Hn(){xe||(xe=i.listen((k,Y,H)=>{if(!Ri.listening)return;const Q=A(k),Ee=G(Q);if(Ee){ce(ke(Ee,{replace:!0}),Q).catch(qs);return}l=Q;const v=a.value;Di&&S1(jp(v.fullPath,H.delta),Dc()),Ne(Q,v).catch(y=>qn(y,12)?y:qn(y,2)?(ce(y.to,Q).then(C=>{qn(C,20)&&!H.delta&&H.type===lo.pop&&i.go(-1,!1)}).catch(qs),Promise.reject()):(H.delta&&i.go(-H.delta,!1),he(y,Q,v))).then(y=>{y=y||ht(Q,v,!1),y&&(H.delta&&!qn(y,8)?i.go(-H.delta,!1):H.type===lo.pop&&qn(y,20)&&i.go(-1,!1)),Ke(Q,v,y)}).catch(qs)}))}let Rt=ks(),Pe=ks(),Ie;function he(k,Y,H){Qe(k);const Q=Pe.list();return Q.length?Q.forEach(Ee=>Ee(k,Y,H)):console.error(k),Promise.reject(k)}function Vt(){return Ie&&a.value!==gr?Promise.resolve():new Promise((k,Y)=>{Rt.add([k,Y])})}function Qe(k){return Ie||(Ie=!k,Hn(),Rt.list().forEach(([Y,H])=>k?H(k):Y()),Rt.reset()),k}function Ze(k,Y,H,Q){const{scrollBehavior:Ee}=t;if(!Di||!Ee)return Promise.resolve();const v=!H&&A1(jp(k.fullPath,0))||(Q||!H)&&history.state&&history.state.scroll||null;return K_().then(()=>Ee(k,Y,v)).then(y=>y&&I1(y)).catch(y=>he(y,k,Y))}const et=k=>i.go(k);let hr;const cn=new Set,Ri={currentRoute:a,listening:!0,addRoute:_,removeRoute:E,hasRoute:M,getRoutes:T,resolve:A,options:t,push:P,replace:z,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:c.add,onError:Pe.add,isReady:Vt,install(k){const Y=this;k.component("RouterLink",uA),k.component("RouterView",kv),k.config.globalProperties.$router=Y,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Rr(a)}),Di&&!hr&&a.value===gr&&(hr=!0,P(i.location).catch(Ee=>{}));const H={};for(const Ee in gr)Object.defineProperty(H,Ee,{get:()=>a.value[Ee],enumerable:!0});k.provide(cd,Y),k.provide(Pv,F_(H)),k.provide(Uu,a);const Q=k.unmount;cn.add(k),k.unmount=function(){cn.delete(k),cn.size<1&&(l=gr,xe&&xe(),xe=null,a.value=gr,hr=!1,Ie=!1),Q()}}};function Ye(k){return k.reduce((Y,H)=>Y.then(()=>He(H)),Promise.resolve())}return Ri}function gA(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const c=e.matched[o];c&&(t.matched.find(l=>Qi(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Qi(l,a))||i.push(a))}return[n,r,i]}const mA=or({__name:"App",setup(t){return(e,n)=>(nn(),ao(Rr(kv)))}}),_A="modulepreload",vA=function(t){return"/"+t},tg={},yA=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=vA(s),s in tg)return;tg[s]=!0;const o=s.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":_A,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((h,f)=>{l.addEventListener("load",h),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var wA=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ov={},Jt={};let ld;const EA=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Jt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Jt.getSymbolTotalCodewords=function(e){return EA[e]};Jt.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Jt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ld=e};Jt.isKanjiModeEnabled=function(){return typeof ld<"u"};Jt.toSJIS=function(e){return ld(e)};var Mc={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Mc);function Nv(){this.buffer=[],this.length=0}Nv.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var bA=Nv;function ko(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ko.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};ko.prototype.get=function(t,e){return this.data[t*this.size+e]};ko.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};ko.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var TA=ko,Dv={};(function(t){const e=Jt.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,c=[s-7];for(let a=1;a<i-1;a++)c[a]=c[a-1]-o;return c.push(6),c.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let c=0;c<o;c++)for(let a=0;a<o;a++)c===0&&a===0||c===0&&a===o-1||c===o-1&&a===0||i.push([s[c],s[a]]);return i}})(Dv);var Mv={};const CA=Jt.getSymbolSize,ng=7;Mv.getPositions=function(e){const n=CA(e);return[[0,0],[n-ng,0],[0,n-ng]]};var xv={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,c=0,a=0,l=null,h=null;for(let f=0;f<s;f++){c=a=0,l=h=null;for(let g=0;g<s;g++){let _=i.get(f,g);_===l?c++:(c>=5&&(o+=e.N1+(c-5)),l=_,c=1),_=i.get(g,f),_===h?a++:(a>=5&&(o+=e.N1+(a-5)),h=_,a=1)}c>=5&&(o+=e.N1+(c-5)),a>=5&&(o+=e.N1+(a-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let c=0;c<s-1;c++)for(let a=0;a<s-1;a++){const l=i.get(c,a)+i.get(c,a+1)+i.get(c+1,a)+i.get(c+1,a+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,c=0,a=0;for(let l=0;l<s;l++){c=a=0;for(let h=0;h<s;h++)c=c<<1&2047|i.get(l,h),h>=10&&(c===1488||c===93)&&o++,a=a<<1&2047|i.get(h,l),h>=10&&(a===1488||a===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let a=0;a<o;a++)s+=i.data[a];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let c=0;c<o;c++)for(let a=0;a<o;a++)s.isReserved(a,c)||s.xor(a,c,n(i,a,c))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let l=0;l<o;l++){s(l),t.applyMask(l,i);const h=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),h<a&&(a=h,c=l)}return c}})(xv);var xc={};const Ir=Mc,aa=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ca=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];xc.getBlocksCount=function(e,n){switch(n){case Ir.L:return aa[(e-1)*4+0];case Ir.M:return aa[(e-1)*4+1];case Ir.Q:return aa[(e-1)*4+2];case Ir.H:return aa[(e-1)*4+3];default:return}};xc.getTotalCodewordsCount=function(e,n){switch(n){case Ir.L:return ca[(e-1)*4+0];case Ir.M:return ca[(e-1)*4+1];case Ir.Q:return ca[(e-1)*4+2];case Ir.H:return ca[(e-1)*4+3];default:return}};var Lv={},Lc={};const Ys=new Uint8Array(512),Ua=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Ys[n]=e,Ua[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Ys[n]=Ys[n-255]})();Lc.log=function(e){if(e<1)throw new Error("log("+e+")");return Ua[e]};Lc.exp=function(e){return Ys[e]};Lc.mul=function(e,n){return e===0||n===0?0:Ys[Ua[e]+Ua[n]]};(function(t){const e=Lc;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let c=0;c<i.length;c++)s[o+c]^=e.mul(r[o],i[c]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let a=0;a<i.length;a++)s[a]^=e.mul(i[a],o);let c=0;for(;c<s.length&&s[c]===0;)c++;s=s.slice(c)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Lv);const $v=Lv;function ud(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ud.prototype.initialize=function(e){this.degree=e,this.genPoly=$v.generateECPolynomial(this.degree)};ud.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=$v.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var IA=ud,Fv={},Ur={},hd={};hd.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Fn={};const Uv="[0-9]+",SA="[A-Z $%*+\\-./:]+";let uo="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";uo=uo.replace(/u/g,"\\u");const AA="(?:(?![A-Z0-9 $%*+\\-./:]|"+uo+`)(?:.|[\r
]))+`;Fn.KANJI=new RegExp(uo,"g");Fn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Fn.BYTE=new RegExp(AA,"g");Fn.NUMERIC=new RegExp(Uv,"g");Fn.ALPHANUMERIC=new RegExp(SA,"g");const RA=new RegExp("^"+uo+"$"),PA=new RegExp("^"+Uv+"$"),kA=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Fn.testKanji=function(e){return RA.test(e)};Fn.testNumeric=function(e){return PA.test(e)};Fn.testAlphanumeric=function(e){return kA.test(e)};(function(t){const e=hd,n=Fn;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Ur);(function(t){const e=Jt,n=xc,r=Mc,i=Ur,s=hd,o=7973,c=e.getBCHDigit(o);function a(g,_,E){for(let T=1;T<=40;T++)if(_<=t.getCapacity(T,E,g))return T}function l(g,_){return i.getCharCountIndicator(g,_)+4}function h(g,_){let E=0;return g.forEach(function(T){const M=l(T.mode,_);E+=M+T.getBitsLength()}),E}function f(g,_){for(let E=1;E<=40;E++)if(h(g,E)<=t.getCapacity(E,_,i.MIXED))return E}t.from=function(_,E){return s.isValid(_)?parseInt(_,10):E},t.getCapacity=function(_,E,T){if(!s.isValid(_))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=i.BYTE);const M=e.getSymbolTotalCodewords(_),A=n.getTotalCodewordsCount(_,E),N=(M-A)*8;if(T===i.MIXED)return N;const L=N-l(T,_);switch(T){case i.NUMERIC:return Math.floor(L/10*3);case i.ALPHANUMERIC:return Math.floor(L/11*2);case i.KANJI:return Math.floor(L/13);case i.BYTE:default:return Math.floor(L/8)}},t.getBestVersionForData=function(_,E){let T;const M=r.from(E,r.M);if(Array.isArray(_)){if(_.length>1)return f(_,M);if(_.length===0)return 1;T=_[0]}else T=_;return a(T.mode,T.getLength(),M)},t.getEncodedBits=function(_){if(!s.isValid(_)||_<7)throw new Error("Invalid QR Code version");let E=_<<12;for(;e.getBCHDigit(E)-c>=0;)E^=o<<e.getBCHDigit(E)-c;return _<<12|E}})(Fv);var Bv={};const Bu=Jt,jv=1335,OA=21522,rg=Bu.getBCHDigit(jv);Bv.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;Bu.getBCHDigit(i)-rg>=0;)i^=jv<<Bu.getBCHDigit(i)-rg;return(r<<10|i)^OA};var Hv={};const NA=Ur;function es(t){this.mode=NA.NUMERIC,this.data=t.toString()}es.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};es.prototype.getLength=function(){return this.data.length};es.prototype.getBitsLength=function(){return es.getBitsLength(this.data.length)};es.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var DA=es;const MA=Ur,Ul=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ts(t){this.mode=MA.ALPHANUMERIC,this.data=t}ts.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};ts.prototype.getLength=function(){return this.data.length};ts.prototype.getBitsLength=function(){return ts.getBitsLength(this.data.length)};ts.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Ul.indexOf(this.data[n])*45;r+=Ul.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Ul.indexOf(this.data[n]),6)};var xA=ts,LA=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(s=(s-55296)*1024+o-56320+65536,i+=1)}if(s<128){n.push(s);continue}if(s<2048){n.push(s>>6|192),n.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128);continue}if(s>=65536&&s<=1114111){n.push(s>>18|240),n.push(s>>12&63|128),n.push(s>>6&63|128),n.push(s&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const $A=LA,FA=Ur;function ns(t){this.mode=FA.BYTE,typeof t=="string"&&(t=$A(t)),this.data=new Uint8Array(t)}ns.getBitsLength=function(e){return e*8};ns.prototype.getLength=function(){return this.data.length};ns.prototype.getBitsLength=function(){return ns.getBitsLength(this.data.length)};ns.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var UA=ns;const BA=Ur,jA=Jt;function rs(t){this.mode=BA.KANJI,this.data=t}rs.getBitsLength=function(e){return e*13};rs.prototype.getLength=function(){return this.data.length};rs.prototype.getBitsLength=function(){return rs.getBitsLength(this.data.length)};rs.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=jA.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var HA=rs,Vv={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var c=e.PriorityQueue.make();c.push(r,0);for(var a,l,h,f,g,_,E,T,M;!c.empty();){a=c.pop(),l=a.value,f=a.cost,g=n[l]||{};for(h in g)g.hasOwnProperty(h)&&(_=g[h],E=f+_,T=o[h],M=typeof o[h]>"u",(M||T>E)&&(o[h]=E,c.push(h,E),s[h]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var A=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(A)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Vv);var VA=Vv.exports;(function(t){const e=Ur,n=DA,r=xA,i=UA,s=HA,o=Fn,c=Jt,a=VA;function l(A){return unescape(encodeURIComponent(A)).length}function h(A,N,L){const P=[];let z;for(;(z=A.exec(L))!==null;)P.push({data:z[0],index:z.index,mode:N,length:z[0].length});return P}function f(A){const N=h(o.NUMERIC,e.NUMERIC,A),L=h(o.ALPHANUMERIC,e.ALPHANUMERIC,A);let P,z;return c.isKanjiModeEnabled()?(P=h(o.BYTE,e.BYTE,A),z=h(o.KANJI,e.KANJI,A)):(P=h(o.BYTE_KANJI,e.BYTE,A),z=[]),N.concat(L,P,z).sort(function(ce,we){return ce.index-we.index}).map(function(ce){return{data:ce.data,mode:ce.mode,length:ce.length}})}function g(A,N){switch(N){case e.NUMERIC:return n.getBitsLength(A);case e.ALPHANUMERIC:return r.getBitsLength(A);case e.KANJI:return s.getBitsLength(A);case e.BYTE:return i.getBitsLength(A)}}function _(A){return A.reduce(function(N,L){const P=N.length-1>=0?N[N.length-1]:null;return P&&P.mode===L.mode?(N[N.length-1].data+=L.data,N):(N.push(L),N)},[])}function E(A){const N=[];for(let L=0;L<A.length;L++){const P=A[L];switch(P.mode){case e.NUMERIC:N.push([P,{data:P.data,mode:e.ALPHANUMERIC,length:P.length},{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.ALPHANUMERIC:N.push([P,{data:P.data,mode:e.BYTE,length:P.length}]);break;case e.KANJI:N.push([P,{data:P.data,mode:e.BYTE,length:l(P.data)}]);break;case e.BYTE:N.push([{data:P.data,mode:e.BYTE,length:l(P.data)}])}}return N}function T(A,N){const L={},P={start:{}};let z=["start"];for(let G=0;G<A.length;G++){const ce=A[G],we=[];for(let He=0;He<ce.length;He++){const Ne=ce[He],Ke=""+G+He;we.push(Ke),L[Ke]={node:Ne,lastCount:0},P[Ke]={};for(let ht=0;ht<z.length;ht++){const xe=z[ht];L[xe]&&L[xe].node.mode===Ne.mode?(P[xe][Ke]=g(L[xe].lastCount+Ne.length,Ne.mode)-g(L[xe].lastCount,Ne.mode),L[xe].lastCount+=Ne.length):(L[xe]&&(L[xe].lastCount=Ne.length),P[xe][Ke]=g(Ne.length,Ne.mode)+4+e.getCharCountIndicator(Ne.mode,N))}}z=we}for(let G=0;G<z.length;G++)P[z[G]].end=0;return{map:P,table:L}}function M(A,N){let L;const P=e.getBestModeForData(A);if(L=e.from(N,P),L!==e.BYTE&&L.bit<P.bit)throw new Error('"'+A+'" cannot be encoded with mode '+e.toString(L)+`.
 Suggested mode is: `+e.toString(P));switch(L===e.KANJI&&!c.isKanjiModeEnabled()&&(L=e.BYTE),L){case e.NUMERIC:return new n(A);case e.ALPHANUMERIC:return new r(A);case e.KANJI:return new s(A);case e.BYTE:return new i(A)}}t.fromArray=function(N){return N.reduce(function(L,P){return typeof P=="string"?L.push(M(P,null)):P.data&&L.push(M(P.data,P.mode)),L},[])},t.fromString=function(N,L){const P=f(N,c.isKanjiModeEnabled()),z=E(P),G=T(z,L),ce=a.find_path(G.map,"start","end"),we=[];for(let He=1;He<ce.length-1;He++)we.push(G.table[ce[He]].node);return t.fromArray(_(we))},t.rawSplit=function(N){return t.fromArray(f(N,c.isKanjiModeEnabled()))}})(Hv);const $c=Jt,Bl=Mc,WA=bA,zA=TA,KA=Dv,qA=Mv,ju=xv,Hu=xc,GA=IA,Ba=Fv,YA=Bv,JA=Ur,jl=Hv;function XA(t,e){const n=t.size,r=qA.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let c=-1;c<=7;c++)if(!(s+c<=-1||n<=s+c))for(let a=-1;a<=7;a++)o+a<=-1||n<=o+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(s+c,o+a,!0,!0):t.set(s+c,o+a,!1,!0))}}function QA(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function ZA(t,e){const n=KA.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++)o===-2||o===2||c===-2||c===2||o===0&&c===0?t.set(i+o,s+c,!0,!0):t.set(i+o,s+c,!1,!0)}}function eR(t,e){const n=t.size,r=Ba.getEncodedBits(e);let i,s,o;for(let c=0;c<18;c++)i=Math.floor(c/3),s=c%3+n-8-3,o=(r>>c&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function Hl(t,e,n){const r=t.size,i=YA.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function tR(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let c=n-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(i,c-a)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(i,c-a,l),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function nR(t,e,n){const r=new WA;n.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),JA.getCharCountIndicator(a.mode,t)),a.write(r)});const i=$c.getSymbolTotalCodewords(t),s=Hu.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(o-r.getLengthInBits())/8;for(let a=0;a<c;a++)r.put(a%2?17:236,8);return rR(r,t,e)}function rR(t,e,n){const r=$c.getSymbolTotalCodewords(e),i=Hu.getTotalCodewordsCount(e,n),s=r-i,o=Hu.getBlocksCount(e,n),c=r%o,a=o-c,l=Math.floor(r/o),h=Math.floor(s/o),f=h+1,g=l-h,_=new GA(g);let E=0;const T=new Array(o),M=new Array(o);let A=0;const N=new Uint8Array(t.buffer);for(let ce=0;ce<o;ce++){const we=ce<a?h:f;T[ce]=N.slice(E,E+we),M[ce]=_.encode(T[ce]),E+=we,A=Math.max(A,we)}const L=new Uint8Array(r);let P=0,z,G;for(z=0;z<A;z++)for(G=0;G<o;G++)z<T[G].length&&(L[P++]=T[G][z]);for(z=0;z<g;z++)for(G=0;G<o;G++)L[P++]=M[G][z];return L}function iR(t,e,n,r){let i;if(Array.isArray(t))i=jl.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const h=jl.rawSplit(t);l=Ba.getBestVersionForData(h,n)}i=jl.fromString(t,l||40)}else throw new Error("Invalid data");const s=Ba.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=nR(e,n,i),c=$c.getSymbolSize(e),a=new zA(c);return XA(a,e),QA(a),ZA(a,e),Hl(a,n,0),e>=7&&eR(a,e),tR(a,o),isNaN(r)&&(r=ju.getBestMask(a,Hl.bind(null,a,n))),ju.applyMask(r,a),Hl(a,n,r),{modules:a,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}Ov.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Bl.M,i,s;return typeof n<"u"&&(r=Bl.from(n.errorCorrectionLevel,Bl.M),i=Ba.from(n.version),s=ju.from(n.maskPattern),n.toSJISFunc&&$c.setToSJISFunction(n.toSJISFunc)),iR(e,i,r,s)};var Wv={},dd={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,c=i.modules.data,a=t.getScale(o,s),l=Math.floor((o+s.margin*2)*a),h=s.margin*a,f=[s.color.light,s.color.dark];for(let g=0;g<l;g++)for(let _=0;_<l;_++){let E=(g*l+_)*4,T=s.color.light;if(g>=h&&_>=h&&g<l-h&&_<l-h){const M=Math.floor((g-h)/a),A=Math.floor((_-h)/a);T=f[c[M*o+A]?1:0]}r[E++]=T.r,r[E++]=T.g,r[E++]=T.b,r[E]=T.a}}})(dd);(function(t){const e=dd;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,c){let a=c,l=o;typeof a>"u"&&(!o||!o.getContext)&&(a=o,o=void 0),o||(l=r()),a=e.getOptions(a);const h=e.getImageWidth(s.modules.size,a),f=l.getContext("2d"),g=f.createImageData(h,h);return e.qrToImageData(g.data,s,a),n(f,l,h),f.putImageData(g,0,0),l},t.renderToDataURL=function(s,o,c){let a=c;typeof a>"u"&&(!o||!o.getContext)&&(a=o,o=void 0),a||(a={});const l=t.render(s,o,a),h=a.type||"image/png",f=a.rendererOpts||{};return l.toDataURL(h,f.quality)}})(Wv);var zv={};const sR=dd;function ig(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Vl(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function oR(t,e,n){let r="",i=0,s=!1,o=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),l=Math.floor(c/e);!a&&!s&&(s=!0),t[c]?(o++,c>0&&a>0&&t[c-1]||(r+=s?Vl("M",a+n,.5+l+n):Vl("m",i,0),i=0,s=!1),a+1<e&&t[c+1]||(r+=Vl("h",o),o=0)):i++}return r}zv.render=function(e,n,r){const i=sR.getOptions(n),s=e.modules.size,o=e.modules.data,c=s+i.margin*2,a=i.color.light.a?"<path "+ig(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+ig(i.color.dark,"stroke")+' d="'+oR(o,s,i.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+h+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof r=="function"&&r(null,g),g};const aR=wA,Vu=Ov,Kv=Wv,cR=zv;function fd(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,c=typeof s[o-1]=="function";if(!c&&!aR())throw new Error("Callback required as last argument");if(c){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(a,l){try{const h=Vu.create(n,r);a(t(h,e,r))}catch(h){l(h)}})}try{const a=Vu.create(n,r);i(null,t(a,e,r))}catch(a){i(a)}}Vu.create;var lR=fd.bind(null,Kv.render);fd.bind(null,Kv.renderToDataURL);fd.bind(null,function(t,e,n){return cR.render(t,n)});const uR=or({__name:"QrCode",props:{codeString:{}},setup(t){const e=t,n=Zt(null);return td(()=>{lR(n.value,e.codeString)}),(r,i)=>(nn(),pi("div",null,[An("canvas",{ref_key:"canvas",ref:n},null,512)]))}});var qv=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},hR=(t,e,n)=>(qv(t,e,"read from private field"),n?n.call(t):e.get(t)),dR=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},fR=(t,e,n,r)=>(qv(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const sg=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function pR(t){if(Gv(t))return{width:t.naturalWidth,height:t.naturalHeight};if(Yv(t))return{width:t.width.baseVal.value,height:t.height.baseVal.value};if(Jv(t))return{width:t.videoWidth,height:t.videoHeight};if(gR(t))return{width:t.width,height:t.height};if(Xv(t))return{width:t.width,height:t.height};if(mR(t))return{width:t.width,height:t.height};if(Qv(t))return{width:t.displayWidth,height:t.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function Gv(t){try{return t instanceof HTMLImageElement}catch{return!1}}function Yv(t){try{return t instanceof SVGImageElement}catch{return!1}}function Jv(t){try{return t instanceof HTMLVideoElement}catch{return!1}}function gR(t){try{return t instanceof HTMLCanvasElement}catch{return!1}}function Xv(t){try{return t instanceof ImageBitmap}catch{return!1}}function mR(t){try{return t instanceof OffscreenCanvas}catch{return!1}}function Qv(t){try{return t instanceof VideoFrame}catch{return!1}}function _R(t){try{return t instanceof Blob}catch{return!1}}function vR(t){try{return t instanceof ImageData}catch{return!1}}function yR(t,e){try{const n=new OffscreenCanvas(t,e);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch{const r=document.createElement("canvas");return r.width=t,r.height=e,r}}async function Zv(t){if(Gv(t)&&!await bR(t))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(Yv(t)&&!await TR(t))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(Qv(t)&&CR(t))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(Jv(t)&&(t.readyState===0||t.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(Xv(t)&&SR(t))throw new DOMException("The image source is detached.","InvalidStateError");const{width:e,height:n}=pR(t);if(e===0||n===0)return null;const r=yR(e,n).getContext("2d");r.drawImage(t,0,0);try{return r.getImageData(0,0,e,n)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function wR(t){let e;try{e=await createImageBitmap(t)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await Zv(e)}async function ER(t){if(_R(t))return await wR(t);if(vR(t)){if(IR(t))throw new DOMException("The image data has been detached.","InvalidStateError");return t}return await Zv(t)}async function bR(t){try{return await t.decode(),!0}catch{return!1}}async function TR(t){var e;try{return await((e=t.decode)==null?void 0:e.call(t)),!0}catch{return!1}}function CR(t){return t.format===null}function IR(t){return t.data.buffer.byteLength===0}function SR(t){return t.width===0&&t.height===0}function og(t,e){return t instanceof DOMException?new DOMException(`${e}: ${t.message}`,t.name):t instanceof Error?new t.constructor(`${e}: ${t.message}`):new Error(`${e}: ${t}`)}const ag=t=>{let e;const n=new Set,r=(o,c)=>{const a=typeof o=="function"?o(e):o;if(!Object.is(a,e)){const l=e;e=c??typeof a!="object"?a:Object.assign({},e,a),n.forEach(h=>h(e,l))}},i=()=>e,s={setState:r,getState:i,subscribe:o=>(n.add(o),()=>n.delete(o)),destroy:()=>{n.clear()}};return e=t(r,i,s),s},AR=t=>t?ag(t):ag,RR={locateFile:(t,e)=>{var n;const r=(n=t.match(/_(.+?)\.wasm$/))==null?void 0:n[1];return r?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${r}/${t}`:e+t}},Bs=AR()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:RR}));function ey(t,e=Bs.getState().zxingModuleOverrides){const{zxingModuleWeakMap:n}=Bs.getState(),r=n.get(t);if(r&&Object.is(e,Bs.getState().zxingModuleOverrides))return r;{Bs.setState({zxingModuleOverrides:e});const i=t(e);return n.set(t,i),i}}const cg=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],Sr={tryHarder:!0,formats:[],maxSymbols:255};async function PR(t,{tryHarder:e=Sr.tryHarder,formats:n=Sr.formats,maxSymbols:r=Sr.maxSymbols}=Sr,i){const s=await ey(i,Bs.getState().zxingModuleOverrides),{data:o,width:c,height:a,data:{byteLength:l}}=t,h=s._malloc(l);s.HEAP8.set(o,h);const f=s.readBarcodesFromPixmap(h,c,a,e,kR(n),r);s._free(h);const g=[];for(let _=0;_<f.size();++_){const E=f.get(_);g.push({...E,format:OR(E.format)})}return g}function kR(t){return t.join("|")}function OR(t){const e=lg(t);let n=0,r=cg.length-1;for(;n<=r;){const i=Math.floor((n+r)/2),s=cg[i],o=lg(s);if(o===e)return s;o<e?n=i+1:r=i-1}return"None"}function lg(t){return t.toLowerCase().replace(/_-\[\]/g,"")}var ty=(()=>{var t=import.meta.url;return function(e={}){var n=e,r,i;n.ready=new Promise((u,d)=>{r=u,i=d});var s=Object.assign({},n),o="./this.program",c=typeof window=="object",a=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function h(u){return n.locateFile?n.locateFile(u,l):l+u}var f;(c||a)&&(a?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),t&&(l=t),l.indexOf("blob:")!==0?l=l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):l="",a&&(f=u=>{var d=new XMLHttpRequest;return d.open("GET",u,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)})),n.print||console.log.bind(console);var g=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit;var _;n.wasmBinary&&(_=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&cn("no native wasm support detected");var E,T,M=!1,A,N,L,P,z,G,ce,we;function He(){var u=E.buffer;n.HEAP8=A=new Int8Array(u),n.HEAP16=L=new Int16Array(u),n.HEAP32=z=new Int32Array(u),n.HEAPU8=N=new Uint8Array(u),n.HEAPU16=P=new Uint16Array(u),n.HEAPU32=G=new Uint32Array(u),n.HEAPF32=ce=new Float32Array(u),n.HEAPF64=we=new Float64Array(u)}var Ne,Ke=[],ht=[],xe=[];function Hn(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ie(n.preRun.shift());y(Ke)}function Rt(){y(ht)}function Pe(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Vt(n.postRun.shift());y(xe)}function Ie(u){Ke.unshift(u)}function he(u){ht.unshift(u)}function Vt(u){xe.unshift(u)}var Qe=0,Ze=null;function et(u){Qe++,n.monitorRunDependencies&&n.monitorRunDependencies(Qe)}function hr(u){if(Qe--,n.monitorRunDependencies&&n.monitorRunDependencies(Qe),Qe==0&&Ze){var d=Ze;Ze=null,d()}}function cn(u){n.onAbort&&n.onAbort(u),u="Aborted("+u+")",g(u),M=!0,u+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(u);throw i(d),d}var Ri="data:application/octet-stream;base64,";function Ye(u){return u.startsWith(Ri)}var k;n.locateFile?(k="zxing_reader.wasm",Ye(k)||(k=h(k))):k=new URL("/reader/zxing_reader.wasm",self.location).href;function Y(u){if(u==k&&_)return new Uint8Array(_);if(f)return f(u);throw"both async and sync fetching of the wasm failed"}function H(u){return!_&&(c||a)&&typeof fetch=="function"?fetch(u,{credentials:"same-origin"}).then(d=>{if(!d.ok)throw"failed to load wasm binary file at '"+u+"'";return d.arrayBuffer()}).catch(()=>Y(u)):Promise.resolve().then(()=>Y(u))}function Q(u,d,p){return H(u).then(m=>WebAssembly.instantiate(m,d)).then(m=>m).then(p,m=>{g("failed to asynchronously prepare wasm: "+m),cn(m)})}function Ee(u,d,p,m){return!u&&typeof WebAssembly.instantiateStreaming=="function"&&!Ye(d)&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(w=>{var b=WebAssembly.instantiateStreaming(w,p);return b.then(m,function(I){return g("wasm streaming compile failed: "+I),g("falling back to ArrayBuffer instantiation"),Q(d,p,m)})}):Q(d,p,m)}function v(){var u={a:tC};function d(m,w){var b=m.exports;return T=b,E=T.qa,He(),Ne=T.ua,he(T.ra),hr(),b}et();function p(m){d(m.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(u,d)}catch(m){g("Module.instantiateWasm callback failed with error: "+m),i(m)}return Ee(_,k,u,p).catch(i),{}}var y=u=>{for(;u.length>0;)u.shift()(n)},C=[],R=0;function D(u){var d=new B(u);return d.get_caught()||(d.set_caught(!0),R--),d.set_rethrown(!1),C.push(d),np(d.excPtr),d.get_exception_ptr()}var x=0;function K(){de(0,0);var u=C.pop();tp(u.excPtr),x=0}function B(u){this.excPtr=u,this.ptr=u-24,this.set_type=function(d){G[this.ptr+4>>2]=d},this.get_type=function(){return G[this.ptr+4>>2]},this.set_destructor=function(d){G[this.ptr+8>>2]=d},this.get_destructor=function(){return G[this.ptr+8>>2]},this.set_caught=function(d){d=d?1:0,A[this.ptr+12>>0]=d},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(d){d=d?1:0,A[this.ptr+13>>0]=d},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(d,p){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(p)},this.set_adjusted_ptr=function(d){G[this.ptr+16>>2]=d},this.get_adjusted_ptr=function(){return G[this.ptr+16>>2]},this.get_exception_ptr=function(){var d=ip(this.get_type());if(d)return G[this.excPtr>>2];var p=this.get_adjusted_ptr();return p!==0?p:this.excPtr}}function j(u){throw x||(x=u),x}var $=u=>{var d=x;if(!d)return As(0),0;var p=new B(d);p.set_adjusted_ptr(d);var m=p.get_type();if(!m)return As(0),d;for(var w in u){var b=u[w];if(b===0||b===m)break;var I=p.ptr+16;if(rp(b,m,I))return As(b),d}return As(m),d},Z=()=>$([]),J=u=>$([u]),ee=(u,d)=>$([u,d]);function re(u){var d=new B(u).get_exception_ptr();return d}function le(){var u=C.pop();u||cn("no exception to throw");var d=u.excPtr;throw u.get_rethrown()||(C.push(u),u.set_rethrown(!0),u.set_caught(!1),R++),x=d,x}function De(u,d,p){var m=new B(u);throw m.init(d,p),x=u,R++,x}function Se(){return R}var Le={};function xt(u){for(;u.length;){var d=u.pop(),p=u.pop();p(d)}}function Xt(u){return this.fromWireType(z[u>>2])}var Vn={},Wt={},zr={},vt=void 0;function Pt(u){throw new vt(u)}function bn(u,d,p){u.forEach(function(S){zr[S]=d});function m(S){var O=p(S);O.length!==u.length&&Pt("Mismatched type converter count");for(var F=0;F<u.length;++F)Wn(u[F],O[F])}var w=new Array(d.length),b=[],I=0;d.forEach((S,O)=>{Wt.hasOwnProperty(S)?w[O]=Wt[S]:(b.push(S),Vn.hasOwnProperty(S)||(Vn[S]=[]),Vn[S].push(()=>{w[O]=Wt[S],++I,I===b.length&&m(w)}))}),b.length===0&&m(w)}var Sb=function(u){var d=Le[u];delete Le[u];var p=d.rawConstructor,m=d.rawDestructor,w=d.fields,b=w.map(I=>I.getterReturnType).concat(w.map(I=>I.setterArgumentType));bn([u],b,I=>{var S={};return w.forEach((O,F)=>{var q=O.fieldName,te=I[F],ne=O.getter,ve=O.getterContext,Ve=I[F+w.length],tt=O.setter,We=O.setterContext;S[q]={read:nt=>te.fromWireType(ne(ve,nt)),write:(nt,U)=>{var X=[];tt(We,nt,Ve.toWireType(X,U)),xt(X)}}}),[{name:d.name,fromWireType:function(O){var F={};for(var q in S)F[q]=S[q].read(O);return m(O),F},toWireType:function(O,F){for(var q in S)if(!(q in F))throw new TypeError(`Missing field: "${q}"`);var te=p();for(q in S)S[q].write(te,F[q]);return O!==null&&O.push(m,te),te},argPackAdvance:8,readValueFromPointer:Xt,destructorFunction:m}]})};function Ab(u,d,p,m,w){}function vl(u){switch(u){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${u}`)}}function Rb(){for(var u=new Array(256),d=0;d<256;++d)u[d]=String.fromCharCode(d);Of=u}var Of=void 0;function yt(u){for(var d="",p=u;N[p];)d+=Of[N[p++]];return d}var Pi=void 0;function be(u){throw new Pi(u)}function Pb(u,d,p={}){var m=d.name;if(u||be(`type "${m}" must have a positive integer typeid pointer`),Wt.hasOwnProperty(u)){if(p.ignoreDuplicateRegistrations)return;be(`Cannot register type '${m}' twice`)}if(Wt[u]=d,delete zr[u],Vn.hasOwnProperty(u)){var w=Vn[u];delete Vn[u],w.forEach(b=>b())}}function Wn(u,d,p={}){if(!("argPackAdvance"in d))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Pb(u,d,p)}function kb(u,d,p,m,w){var b=vl(p);d=yt(d),Wn(u,{name:d,fromWireType:function(I){return!!I},toWireType:function(I,S){return S?m:w},argPackAdvance:8,readValueFromPointer:function(I){var S;if(p===1)S=A;else if(p===2)S=L;else if(p===4)S=z;else throw new TypeError("Unknown boolean type size: "+d);return this.fromWireType(S[I>>b])},destructorFunction:null})}function Ob(u){if(!(this instanceof dr)||!(u instanceof dr))return!1;for(var d=this.$$.ptrType.registeredClass,p=this.$$.ptr,m=u.$$.ptrType.registeredClass,w=u.$$.ptr;d.baseClass;)p=d.upcast(p),d=d.baseClass;for(;m.baseClass;)w=m.upcast(w),m=m.baseClass;return d===m&&p===w}function Nb(u){return{count:u.count,deleteScheduled:u.deleteScheduled,preservePointerOnDelete:u.preservePointerOnDelete,ptr:u.ptr,ptrType:u.ptrType,smartPtr:u.smartPtr,smartPtrType:u.smartPtrType}}function yl(u){function d(p){return p.$$.ptrType.registeredClass.name}be(d(u)+" instance already deleted")}var wl=!1;function Nf(u){}function Db(u){u.smartPtr?u.smartPtrType.rawDestructor(u.smartPtr):u.ptrType.registeredClass.rawDestructor(u.ptr)}function Df(u){u.count.value-=1;var d=u.count.value===0;d&&Db(u)}function Mf(u,d,p){if(d===p)return u;if(p.baseClass===void 0)return null;var m=Mf(u,d,p.baseClass);return m===null?null:p.downcast(m)}var xf={};function Mb(){return Object.keys(Cs).length}function xb(){var u=[];for(var d in Cs)Cs.hasOwnProperty(d)&&u.push(Cs[d]);return u}var bs=[];function El(){for(;bs.length;){var u=bs.pop();u.$$.deleteScheduled=!1,u.delete()}}var Ts=void 0;function Lb(u){Ts=u,bs.length&&Ts&&Ts(El)}function $b(){n.getInheritedInstanceCount=Mb,n.getLiveInheritedInstances=xb,n.flushPendingDeletes=El,n.setDelayFunction=Lb}var Cs={};function Fb(u,d){for(d===void 0&&be("ptr should not be undefined");u.baseClass;)d=u.upcast(d),u=u.baseClass;return d}function Ub(u,d){return d=Fb(u,d),Cs[d]}function Go(u,d){(!d.ptrType||!d.ptr)&&Pt("makeClassHandle requires ptr and ptrType");var p=!!d.smartPtrType,m=!!d.smartPtr;return p!==m&&Pt("Both smartPtrType and smartPtr must be specified"),d.count={value:1},Is(Object.create(u,{$$:{value:d}}))}function Bb(u){var d=this.getPointee(u);if(!d)return this.destructor(u),null;var p=Ub(this.registeredClass,d);if(p!==void 0){if(p.$$.count.value===0)return p.$$.ptr=d,p.$$.smartPtr=u,p.clone();var m=p.clone();return this.destructor(u),m}function w(){return this.isSmartPointer?Go(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:u}):Go(this.registeredClass.instancePrototype,{ptrType:this,ptr:u})}var b=this.registeredClass.getActualType(d),I=xf[b];if(!I)return w.call(this);var S;this.isConst?S=I.constPointerType:S=I.pointerType;var O=Mf(d,this.registeredClass,S.registeredClass);return O===null?w.call(this):this.isSmartPointer?Go(S.registeredClass.instancePrototype,{ptrType:S,ptr:O,smartPtrType:this,smartPtr:u}):Go(S.registeredClass.instancePrototype,{ptrType:S,ptr:O})}var Is=function(u){return typeof FinalizationRegistry>"u"?(Is=d=>d,u):(wl=new FinalizationRegistry(d=>{Df(d.$$)}),Is=d=>{var p=d.$$,m=!!p.smartPtr;if(m){var w={$$:p};wl.register(d,w,d)}return d},Nf=d=>wl.unregister(d),Is(u))};function jb(){if(this.$$.ptr||yl(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Is(Object.create(Object.getPrototypeOf(this),{$$:{value:Nb(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u}function Hb(){this.$$.ptr||yl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&be("Object already scheduled for deletion"),Nf(this),Df(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Vb(){return!this.$$.ptr}function Wb(){return this.$$.ptr||yl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&be("Object already scheduled for deletion"),bs.push(this),bs.length===1&&Ts&&Ts(El),this.$$.deleteScheduled=!0,this}function zb(){dr.prototype.isAliasOf=Ob,dr.prototype.clone=jb,dr.prototype.delete=Hb,dr.prototype.isDeleted=Vb,dr.prototype.deleteLater=Wb}function dr(){}var Kb=48,qb=57;function Lf(u){if(u===void 0)return"_unknown";u=u.replace(/[^a-zA-Z0-9_]/g,"$");var d=u.charCodeAt(0);return d>=Kb&&d<=qb?`_${u}`:u}function $f(u,d){return u=Lf(u),{[u]:function(){return d.apply(this,arguments)}}[u]}function Ff(u,d,p){if(u[d].overloadTable===void 0){var m=u[d];u[d]=function(){return u[d].overloadTable.hasOwnProperty(arguments.length)||be(`Function '${p}' called with an invalid number of arguments (${arguments.length}) - expects one of (${u[d].overloadTable})!`),u[d].overloadTable[arguments.length].apply(this,arguments)},u[d].overloadTable=[],u[d].overloadTable[m.argCount]=m}}function Uf(u,d,p){n.hasOwnProperty(u)?((p===void 0||n[u].overloadTable!==void 0&&n[u].overloadTable[p]!==void 0)&&be(`Cannot register public name '${u}' twice`),Ff(n,u,u),n.hasOwnProperty(p)&&be(`Cannot register multiple overloads of a function with the same number of arguments (${p})!`),n[u].overloadTable[p]=d):(n[u]=d,p!==void 0&&(n[u].numArguments=p))}function Gb(u,d,p,m,w,b,I,S){this.name=u,this.constructor=d,this.instancePrototype=p,this.rawDestructor=m,this.baseClass=w,this.getActualType=b,this.upcast=I,this.downcast=S,this.pureVirtualFunctions=[]}function bl(u,d,p){for(;d!==p;)d.upcast||be(`Expected null or instance of ${p.name}, got an instance of ${d.name}`),u=d.upcast(u),d=d.baseClass;return u}function Yb(u,d){if(d===null)return this.isReference&&be(`null is not a valid ${this.name}`),0;d.$$||be(`Cannot pass "${Il(d)}" as a ${this.name}`),d.$$.ptr||be(`Cannot pass deleted object as a pointer of type ${this.name}`);var p=d.$$.ptrType.registeredClass,m=bl(d.$$.ptr,p,this.registeredClass);return m}function Jb(u,d){var p;if(d===null)return this.isReference&&be(`null is not a valid ${this.name}`),this.isSmartPointer?(p=this.rawConstructor(),u!==null&&u.push(this.rawDestructor,p),p):0;d.$$||be(`Cannot pass "${Il(d)}" as a ${this.name}`),d.$$.ptr||be(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&d.$$.ptrType.isConst&&be(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);var m=d.$$.ptrType.registeredClass;if(p=bl(d.$$.ptr,m,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&be("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?p=d.$$.smartPtr:be(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:p=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)p=d.$$.smartPtr;else{var w=d.clone();p=this.rawShare(p,fr.toHandle(function(){w.delete()})),u!==null&&u.push(this.rawDestructor,p)}break;default:be("Unsupporting sharing policy")}return p}function Xb(u,d){if(d===null)return this.isReference&&be(`null is not a valid ${this.name}`),0;d.$$||be(`Cannot pass "${Il(d)}" as a ${this.name}`),d.$$.ptr||be(`Cannot pass deleted object as a pointer of type ${this.name}`),d.$$.ptrType.isConst&&be(`Cannot convert argument of type ${d.$$.ptrType.name} to parameter type ${this.name}`);var p=d.$$.ptrType.registeredClass,m=bl(d.$$.ptr,p,this.registeredClass);return m}function Qb(u){return this.rawGetPointee&&(u=this.rawGetPointee(u)),u}function Zb(u){this.rawDestructor&&this.rawDestructor(u)}function eT(u){u!==null&&u.delete()}function tT(){zn.prototype.getPointee=Qb,zn.prototype.destructor=Zb,zn.prototype.argPackAdvance=8,zn.prototype.readValueFromPointer=Xt,zn.prototype.deleteObject=eT,zn.prototype.fromWireType=Bb}function zn(u,d,p,m,w,b,I,S,O,F,q){this.name=u,this.registeredClass=d,this.isReference=p,this.isConst=m,this.isSmartPointer=w,this.pointeeType=b,this.sharingPolicy=I,this.rawGetPointee=S,this.rawConstructor=O,this.rawShare=F,this.rawDestructor=q,!w&&d.baseClass===void 0?m?(this.toWireType=Yb,this.destructorFunction=null):(this.toWireType=Xb,this.destructorFunction=null):this.toWireType=Jb}function Bf(u,d,p){n.hasOwnProperty(u)||Pt("Replacing nonexistant public symbol"),n[u].overloadTable!==void 0&&p!==void 0?n[u].overloadTable[p]=d:(n[u]=d,n[u].argCount=p)}var nT=(u,d,p)=>{var m=n["dynCall_"+u];return p&&p.length?m.apply(null,[d].concat(p)):m.call(null,d)},Yo=[],Te=u=>{var d=Yo[u];return d||(u>=Yo.length&&(Yo.length=u+1),Yo[u]=d=Ne.get(u)),d},rT=(u,d,p)=>{if(u.includes("j"))return nT(u,d,p);var m=Te(d).apply(null,p);return m},iT=(u,d)=>{var p=[];return function(){return p.length=0,Object.assign(p,arguments),rT(u,d,p)}};function ln(u,d){u=yt(u);function p(){return u.includes("j")?iT(u,d):Te(d)}var m=p();return typeof m!="function"&&be(`unknown function pointer with signature ${u}: ${d}`),m}function sT(u,d){var p=$f(d,function(m){this.name=d,this.message=m;var w=new Error(m).stack;w!==void 0&&(this.stack=this.toString()+`
`+w.replace(/^Error(:[^\n]*)?\n/,""))});return p.prototype=Object.create(u.prototype),p.prototype.constructor=p,p.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},p}var jf=void 0;function Hf(u){var d=ep(u),p=yt(d);return Kn(d),p}function Jo(u,d){var p=[],m={};function w(b){if(!m[b]&&!Wt[b]){if(zr[b]){zr[b].forEach(w);return}p.push(b),m[b]=!0}}throw d.forEach(w),new jf(`${u}: `+p.map(Hf).join([", "]))}function oT(u,d,p,m,w,b,I,S,O,F,q,te,ne){q=yt(q),b=ln(w,b),S&&(S=ln(I,S)),F&&(F=ln(O,F)),ne=ln(te,ne);var ve=Lf(q);Uf(ve,function(){Jo(`Cannot construct ${q} due to unbound types`,[m])}),bn([u,d,p],m?[m]:[],function(Ve){Ve=Ve[0];var tt,We;m?(tt=Ve.registeredClass,We=tt.instancePrototype):We=dr.prototype;var nt=$f(ve,function(){if(Object.getPrototypeOf(this)!==U)throw new Pi("Use 'new' to construct "+q);if(X.constructor_body===void 0)throw new Pi(q+" has no accessible constructor");var Zo=X.constructor_body[arguments.length];if(Zo===void 0)throw new Pi(`Tried to invoke ctor of ${q} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(X.constructor_body).toString()}) parameters instead!`);return Zo.apply(this,arguments)}),U=Object.create(We,{constructor:{value:nt}});nt.prototype=U;var X=new Gb(q,nt,U,ne,tt,b,S,F);X.baseClass&&(X.baseClass.__derivedClasses===void 0&&(X.baseClass.__derivedClasses=[]),X.baseClass.__derivedClasses.push(X));var qe=new zn(q,X,!0,!1,!1),Je=new zn(q+"*",X,!1,!1,!1),Kr=new zn(q+" const*",X,!1,!0,!1);return xf[u]={pointerType:Je,constPointerType:Kr},Bf(ve,nt),[qe,Je,Kr]})}function Tl(u,d){for(var p=[],m=0;m<u;m++)p.push(G[d+m*4>>2]);return p}function Cl(u,d,p,m,w,b){var I=d.length;I<2&&be("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var S=d[1]!==null&&p!==null,O=!1,F=1;F<d.length;++F)if(d[F]!==null&&d[F].destructorFunction===void 0){O=!0;break}var q=d[0].name!=="void",te=I-2,ne=new Array(te),ve=[],Ve=[];return function(){arguments.length!==te&&be(`function ${u} called with ${arguments.length} arguments, expected ${te} args!`),Ve.length=0;var tt;ve.length=S?2:1,ve[0]=w,S&&(tt=d[1].toWireType(Ve,this),ve[1]=tt);for(var We=0;We<te;++We)ne[We]=d[We+2].toWireType(Ve,arguments[We]),ve.push(ne[We]);var nt=m.apply(null,ve);function U(X){if(O)xt(Ve);else for(var qe=S?1:2;qe<d.length;qe++){var Je=qe===1?tt:ne[qe-2];d[qe].destructorFunction!==null&&d[qe].destructorFunction(Je)}if(q)return d[0].fromWireType(X)}return U(nt)}}function aT(u,d,p,m,w,b){var I=Tl(d,p);w=ln(m,w),bn([],[u],function(S){S=S[0];var O=`constructor ${S.name}`;if(S.registeredClass.constructor_body===void 0&&(S.registeredClass.constructor_body=[]),S.registeredClass.constructor_body[d-1]!==void 0)throw new Pi(`Cannot register multiple constructors with identical number of parameters (${d-1}) for class '${S.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return S.registeredClass.constructor_body[d-1]=()=>{Jo(`Cannot construct ${S.name} due to unbound types`,I)},bn([],I,function(F){return F.splice(1,0,null),S.registeredClass.constructor_body[d-1]=Cl(O,F,null,w,b),[]}),[]})}function cT(u,d,p,m,w,b,I,S,O){var F=Tl(p,m);d=yt(d),b=ln(w,b),bn([],[u],function(q){q=q[0];var te=`${q.name}.${d}`;d.startsWith("@@")&&(d=Symbol[d.substring(2)]),S&&q.registeredClass.pureVirtualFunctions.push(d);function ne(){Jo(`Cannot call ${te} due to unbound types`,F)}var ve=q.registeredClass.instancePrototype,Ve=ve[d];return Ve===void 0||Ve.overloadTable===void 0&&Ve.className!==q.name&&Ve.argCount===p-2?(ne.argCount=p-2,ne.className=q.name,ve[d]=ne):(Ff(ve,d,te),ve[d].overloadTable[p-2]=ne),bn([],F,function(tt){var We=Cl(te,tt,q,b,I);return ve[d].overloadTable===void 0?(We.argCount=p-2,ve[d]=We):ve[d].overloadTable[p-2]=We,[]}),[]})}function lT(){Object.assign(Vf.prototype,{get(u){return this.allocated[u]},has(u){return this.allocated[u]!==void 0},allocate(u){var d=this.freelist.pop()||this.allocated.length;return this.allocated[d]=u,d},free(u){this.allocated[u]=void 0,this.freelist.push(u)}})}function Vf(){this.allocated=[void 0],this.freelist=[]}var Qt=new Vf;function Wf(u){u>=Qt.reserved&&--Qt.get(u).refcount===0&&Qt.free(u)}function uT(){for(var u=0,d=Qt.reserved;d<Qt.allocated.length;++d)Qt.allocated[d]!==void 0&&++u;return u}function hT(){Qt.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Qt.reserved=Qt.allocated.length,n.count_emval_handles=uT}var fr={toValue:u=>(u||be("Cannot use deleted val. handle = "+u),Qt.get(u).value),toHandle:u=>{switch(u){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Qt.allocate({refcount:1,value:u})}}};function dT(u,d){d=yt(d),Wn(u,{name:d,fromWireType:function(p){var m=fr.toValue(p);return Wf(p),m},toWireType:function(p,m){return fr.toHandle(m)},argPackAdvance:8,readValueFromPointer:Xt,destructorFunction:null})}function Il(u){if(u===null)return"null";var d=typeof u;return d==="object"||d==="array"||d==="function"?u.toString():""+u}function fT(u,d){switch(d){case 2:return function(p){return this.fromWireType(ce[p>>2])};case 3:return function(p){return this.fromWireType(we[p>>3])};default:throw new TypeError("Unknown float type: "+u)}}function pT(u,d,p){var m=vl(p);d=yt(d),Wn(u,{name:d,fromWireType:function(w){return w},toWireType:function(w,b){return b},argPackAdvance:8,readValueFromPointer:fT(d,m),destructorFunction:null})}function gT(u,d,p,m,w,b,I){var S=Tl(d,p);u=yt(u),w=ln(m,w),Uf(u,function(){Jo(`Cannot call ${u} due to unbound types`,S)},d-1),bn([],S,function(O){var F=[O[0],null].concat(O.slice(1));return Bf(u,Cl(u,F,null,w,b),d-1),[]})}function mT(u,d,p){switch(d){case 0:return p?function(m){return A[m]}:function(m){return N[m]};case 1:return p?function(m){return L[m>>1]}:function(m){return P[m>>1]};case 2:return p?function(m){return z[m>>2]}:function(m){return G[m>>2]};default:throw new TypeError("Unknown integer type: "+u)}}function _T(u,d,p,m,w){d=yt(d);var b=vl(p),I=te=>te;if(m===0){var S=32-8*p;I=te=>te<<S>>>S}var O=d.includes("unsigned"),F=(te,ne)=>{},q;O?q=function(te,ne){return F(ne,this.name),ne>>>0}:q=function(te,ne){return F(ne,this.name),ne},Wn(u,{name:d,fromWireType:I,toWireType:q,argPackAdvance:8,readValueFromPointer:mT(d,b,m!==0),destructorFunction:null})}function vT(u,d,p){var m=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],w=m[d];function b(I){I=I>>2;var S=G,O=S[I],F=S[I+1];return new w(S.buffer,F,O)}p=yt(p),Wn(u,{name:p,fromWireType:b,argPackAdvance:8,readValueFromPointer:b},{ignoreDuplicateRegistrations:!0})}var zf=(u,d,p,m)=>{if(!(m>0))return 0;for(var w=p,b=p+m-1,I=0;I<u.length;++I){var S=u.charCodeAt(I);if(S>=55296&&S<=57343){var O=u.charCodeAt(++I);S=65536+((S&1023)<<10)|O&1023}if(S<=127){if(p>=b)break;d[p++]=S}else if(S<=2047){if(p+1>=b)break;d[p++]=192|S>>6,d[p++]=128|S&63}else if(S<=65535){if(p+2>=b)break;d[p++]=224|S>>12,d[p++]=128|S>>6&63,d[p++]=128|S&63}else{if(p+3>=b)break;d[p++]=240|S>>18,d[p++]=128|S>>12&63,d[p++]=128|S>>6&63,d[p++]=128|S&63}}return d[p]=0,p-w},yT=(u,d,p)=>zf(u,N,d,p),Kf=u=>{for(var d=0,p=0;p<u.length;++p){var m=u.charCodeAt(p);m<=127?d++:m<=2047?d+=2:m>=55296&&m<=57343?(d+=4,++p):d+=3}return d},qf=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,wT=(u,d,p)=>{for(var m=d+p,w=d;u[w]&&!(w>=m);)++w;if(w-d>16&&u.buffer&&qf)return qf.decode(u.subarray(d,w));for(var b="";d<w;){var I=u[d++];if(!(I&128)){b+=String.fromCharCode(I);continue}var S=u[d++]&63;if((I&224)==192){b+=String.fromCharCode((I&31)<<6|S);continue}var O=u[d++]&63;if((I&240)==224?I=(I&15)<<12|S<<6|O:I=(I&7)<<18|S<<12|O<<6|u[d++]&63,I<65536)b+=String.fromCharCode(I);else{var F=I-65536;b+=String.fromCharCode(55296|F>>10,56320|F&1023)}}return b},Sl=(u,d)=>u?wT(N,u,d):"";function ET(u,d){d=yt(d);var p=d==="std::string";Wn(u,{name:d,fromWireType:function(m){var w=G[m>>2],b=m+4,I;if(p)for(var S=b,O=0;O<=w;++O){var F=b+O;if(O==w||N[F]==0){var q=F-S,te=Sl(S,q);I===void 0?I=te:(I+=String.fromCharCode(0),I+=te),S=F+1}}else{for(var ne=new Array(w),O=0;O<w;++O)ne[O]=String.fromCharCode(N[b+O]);I=ne.join("")}return Kn(m),I},toWireType:function(m,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var b,I=typeof w=="string";I||w instanceof Uint8Array||w instanceof Uint8ClampedArray||w instanceof Int8Array||be("Cannot pass non-string to std::string"),p&&I?b=Kf(w):b=w.length;var S=Rl(4+b+1),O=S+4;if(G[S>>2]=b,p&&I)yT(w,O,b+1);else if(I)for(var F=0;F<b;++F){var q=w.charCodeAt(F);q>255&&(Kn(O),be("String has UTF-16 code units that do not fit in 8 bits")),N[O+F]=q}else for(var F=0;F<b;++F)N[O+F]=w[F];return m!==null&&m.push(Kn,S),S},argPackAdvance:8,readValueFromPointer:Xt,destructorFunction:function(m){Kn(m)}})}var Gf=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,bT=(u,d)=>{for(var p=u,m=p>>1,w=m+d/2;!(m>=w)&&P[m];)++m;if(p=m<<1,p-u>32&&Gf)return Gf.decode(N.subarray(u,p));for(var b="",I=0;!(I>=d/2);++I){var S=L[u+I*2>>1];if(S==0)break;b+=String.fromCharCode(S)}return b},TT=(u,d,p)=>{if(p===void 0&&(p=2147483647),p<2)return 0;p-=2;for(var m=d,w=p<u.length*2?p/2:u.length,b=0;b<w;++b){var I=u.charCodeAt(b);L[d>>1]=I,d+=2}return L[d>>1]=0,d-m},CT=u=>u.length*2,IT=(u,d)=>{for(var p=0,m="";!(p>=d/4);){var w=z[u+p*4>>2];if(w==0)break;if(++p,w>=65536){var b=w-65536;m+=String.fromCharCode(55296|b>>10,56320|b&1023)}else m+=String.fromCharCode(w)}return m},ST=(u,d,p)=>{if(p===void 0&&(p=2147483647),p<4)return 0;for(var m=d,w=m+p-4,b=0;b<u.length;++b){var I=u.charCodeAt(b);if(I>=55296&&I<=57343){var S=u.charCodeAt(++b);I=65536+((I&1023)<<10)|S&1023}if(z[d>>2]=I,d+=4,d+4>w)break}return z[d>>2]=0,d-m},AT=u=>{for(var d=0,p=0;p<u.length;++p){var m=u.charCodeAt(p);m>=55296&&m<=57343&&++p,d+=4}return d},RT=function(u,d,p){p=yt(p);var m,w,b,I,S;d===2?(m=bT,w=TT,I=CT,b=()=>P,S=1):d===4&&(m=IT,w=ST,I=AT,b=()=>G,S=2),Wn(u,{name:p,fromWireType:function(O){for(var F=G[O>>2],q=b(),te,ne=O+4,ve=0;ve<=F;++ve){var Ve=O+4+ve*d;if(ve==F||q[Ve>>S]==0){var tt=Ve-ne,We=m(ne,tt);te===void 0?te=We:(te+=String.fromCharCode(0),te+=We),ne=Ve+d}}return Kn(O),te},toWireType:function(O,F){typeof F!="string"&&be(`Cannot pass non-string to C++ string type ${p}`);var q=I(F),te=Rl(4+q+d);return G[te>>2]=q>>S,w(F,te+4,q+d),O!==null&&O.push(Kn,te),te},argPackAdvance:8,readValueFromPointer:Xt,destructorFunction:function(O){Kn(O)}})};function PT(u,d,p,m,w,b){Le[u]={name:yt(d),rawConstructor:ln(p,m),rawDestructor:ln(w,b),fields:[]}}function kT(u,d,p,m,w,b,I,S,O,F){Le[u].fields.push({fieldName:yt(d),getterReturnType:p,getter:ln(m,w),getterContext:b,setterArgumentType:I,setter:ln(S,O),setterContext:F})}function OT(u,d){d=yt(d),Wn(u,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:function(){},toWireType:function(p,m){}})}var NT={};function DT(u){var d=NT[u];return d===void 0?yt(u):d}function Yf(){if(typeof globalThis=="object")return globalThis;function u(d){d.$$$embind_global$$$=d;var p=typeof $$$embind_global$$$=="object"&&d.$$$embind_global$$$==d;return p||delete d.$$$embind_global$$$,p}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&u(global)?$$$embind_global$$$=global:typeof self=="object"&&u(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function MT(u){return u===0?fr.toHandle(Yf()):(u=DT(u),fr.toHandle(Yf()[u]))}function xT(u){u>4&&(Qt.get(u).refcount+=1)}function Jf(u,d){var p=Wt[u];return p===void 0&&be(d+" has unknown type "+Hf(u)),p}function LT(u){var d=new Array(u+1);return function(p,m,w){d[0]=p;for(var b=0;b<u;++b){var I=Jf(G[m+b*4>>2],"parameter "+b);d[b+1]=I.readValueFromPointer(w),w+=I.argPackAdvance}var S=new(p.bind.apply(p,d));return fr.toHandle(S)}}var Xf={};function $T(u,d,p,m){u=fr.toValue(u);var w=Xf[d];return w||(w=LT(d),Xf[d]=w),w(u,p,m)}function FT(u,d){u=Jf(u,"_emval_take_value");var p=u.readValueFromPointer(d);return fr.toHandle(p)}var UT=()=>{cn("")},BT=(u,d,p)=>N.copyWithin(u,d,d+p),jT=()=>2147483648,HT=u=>{var d=E.buffer,p=u-d.byteLength+65535>>>16;try{return E.grow(p),He(),1}catch{}},VT=u=>{var d=N.length;u>>>=0;var p=jT();if(u>p)return!1;for(var m=(O,F)=>O+(F-O%F)%F,w=1;w<=4;w*=2){var b=d*(1+.2/w);b=Math.min(b,u+100663296);var I=Math.min(p,m(Math.max(u,b),65536)),S=HT(I);if(S)return!0}return!1},Al={},WT=()=>o||"./this.program",Ss=()=>{if(!Ss.strings){var u=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:u,_:WT()};for(var p in Al)Al[p]===void 0?delete d[p]:d[p]=Al[p];var m=[];for(var p in d)m.push(`${p}=${d[p]}`);Ss.strings=m}return Ss.strings},zT=(u,d)=>{for(var p=0;p<u.length;++p)A[d++>>0]=u.charCodeAt(p);A[d>>0]=0},KT=(u,d)=>{var p=0;return Ss().forEach(function(m,w){var b=d+p;G[u+w*4>>2]=b,zT(m,b),p+=m.length+1}),0},qT=(u,d)=>{var p=Ss();G[u>>2]=p.length;var m=0;return p.forEach(function(w){m+=w.length+1}),G[d>>2]=m,0};function GT(u){return u}var Xo=u=>u%4===0&&(u%100!==0||u%400===0),YT=(u,d)=>{for(var p=0,m=0;m<=d;p+=u[m++]);return p},Qf=[31,29,31,30,31,30,31,31,30,31,30,31],Zf=[31,28,31,30,31,30,31,31,30,31,30,31],JT=(u,d)=>{for(var p=new Date(u.getTime());d>0;){var m=Xo(p.getFullYear()),w=p.getMonth(),b=(m?Qf:Zf)[w];if(d>b-p.getDate())d-=b-p.getDate()+1,p.setDate(1),w<11?p.setMonth(w+1):(p.setMonth(0),p.setFullYear(p.getFullYear()+1));else return p.setDate(p.getDate()+d),p}return p};function XT(u,d,p){var m=p>0?p:Kf(u)+1,w=new Array(m),b=zf(u,w,0,w.length);return d&&(w.length=b),w}var QT=(u,d)=>{A.set(u,d)},ZT=(u,d,p,m)=>{var w=z[m+40>>2],b={tm_sec:z[m>>2],tm_min:z[m+4>>2],tm_hour:z[m+8>>2],tm_mday:z[m+12>>2],tm_mon:z[m+16>>2],tm_year:z[m+20>>2],tm_wday:z[m+24>>2],tm_yday:z[m+28>>2],tm_isdst:z[m+32>>2],tm_gmtoff:z[m+36>>2],tm_zone:w?Sl(w):""},I=Sl(p),S={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var O in S)I=I.replace(new RegExp(O,"g"),S[O]);var F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],q=["January","February","March","April","May","June","July","August","September","October","November","December"];function te(U,X,qe){for(var Je=typeof U=="number"?U.toString():U||"";Je.length<X;)Je=qe[0]+Je;return Je}function ne(U,X){return te(U,X,"0")}function ve(U,X){function qe(Kr){return Kr<0?-1:Kr>0?1:0}var Je;return(Je=qe(U.getFullYear()-X.getFullYear()))===0&&(Je=qe(U.getMonth()-X.getMonth()))===0&&(Je=qe(U.getDate()-X.getDate())),Je}function Ve(U){switch(U.getDay()){case 0:return new Date(U.getFullYear()-1,11,29);case 1:return U;case 2:return new Date(U.getFullYear(),0,3);case 3:return new Date(U.getFullYear(),0,2);case 4:return new Date(U.getFullYear(),0,1);case 5:return new Date(U.getFullYear()-1,11,31);case 6:return new Date(U.getFullYear()-1,11,30)}}function tt(U){var X=JT(new Date(U.tm_year+1900,0,1),U.tm_yday),qe=new Date(X.getFullYear(),0,4),Je=new Date(X.getFullYear()+1,0,4),Kr=Ve(qe),Zo=Ve(Je);return ve(Kr,X)<=0?ve(Zo,X)<=0?X.getFullYear()+1:X.getFullYear():X.getFullYear()-1}var We={"%a":U=>F[U.tm_wday].substring(0,3),"%A":U=>F[U.tm_wday],"%b":U=>q[U.tm_mon].substring(0,3),"%B":U=>q[U.tm_mon],"%C":U=>{var X=U.tm_year+1900;return ne(X/100|0,2)},"%d":U=>ne(U.tm_mday,2),"%e":U=>te(U.tm_mday,2," "),"%g":U=>tt(U).toString().substring(2),"%G":U=>tt(U),"%H":U=>ne(U.tm_hour,2),"%I":U=>{var X=U.tm_hour;return X==0?X=12:X>12&&(X-=12),ne(X,2)},"%j":U=>ne(U.tm_mday+YT(Xo(U.tm_year+1900)?Qf:Zf,U.tm_mon-1),3),"%m":U=>ne(U.tm_mon+1,2),"%M":U=>ne(U.tm_min,2),"%n":()=>`
`,"%p":U=>U.tm_hour>=0&&U.tm_hour<12?"AM":"PM","%S":U=>ne(U.tm_sec,2),"%t":()=>"	","%u":U=>U.tm_wday||7,"%U":U=>{var X=U.tm_yday+7-U.tm_wday;return ne(Math.floor(X/7),2)},"%V":U=>{var X=Math.floor((U.tm_yday+7-(U.tm_wday+6)%7)/7);if((U.tm_wday+371-U.tm_yday-2)%7<=2&&X++,X){if(X==53){var qe=(U.tm_wday+371-U.tm_yday)%7;qe!=4&&(qe!=3||!Xo(U.tm_year))&&(X=1)}}else{X=52;var Je=(U.tm_wday+7-U.tm_yday-1)%7;(Je==4||Je==5&&Xo(U.tm_year%400-1))&&X++}return ne(X,2)},"%w":U=>U.tm_wday,"%W":U=>{var X=U.tm_yday+7-(U.tm_wday+6)%7;return ne(Math.floor(X/7),2)},"%y":U=>(U.tm_year+1900).toString().substring(2),"%Y":U=>U.tm_year+1900,"%z":U=>{var X=U.tm_gmtoff,qe=X>=0;return X=Math.abs(X)/60,X=X/60*100+X%60,(qe?"+":"-")+("0000"+X).slice(-4)},"%Z":U=>U.tm_zone,"%%":()=>"%"};I=I.replace(/%%/g,"\0\0");for(var O in We)I.includes(O)&&(I=I.replace(new RegExp(O,"g"),We[O](b)));I=I.replace(/\0\0/g,"%");var nt=XT(I,!1);return nt.length>d?0:(QT(nt,u),nt.length-1)},eC=(u,d,p,m,w)=>ZT(u,d,p,m);vt=n.InternalError=class extends Error{constructor(u){super(u),this.name="InternalError"}},Rb(),Pi=n.BindingError=class extends Error{constructor(u){super(u),this.name="BindingError"}},zb(),$b(),tT(),jf=n.UnboundTypeError=sT(Error,"UnboundTypeError"),lT(),hT();var tC={q:D,u:K,a:Z,h:J,l:ee,I:re,P:le,n:De,ba:Se,d:j,oa:Sb,Y:Ab,fa:kb,na:oT,ma:aT,D:cT,ea:dT,W:pT,J:gT,w:_T,s:vT,V:ET,L:RT,Q:PT,pa:kT,ga:OT,U:Wf,la:MT,R:xT,ia:$T,ka:FT,K:UT,da:BT,ca:VT,$:KT,aa:qT,H:wC,T:PC,B:bC,p:_C,b:nC,C:yC,ha:CC,c:aC,j:lC,i:sC,x:EC,O:vC,v:gC,G:SC,N:AC,A:TC,F:kC,Z:NC,X:DC,k:cC,f:oC,e:iC,g:rC,M:RC,m:pC,o:uC,S:hC,t:fC,ja:mC,y:IC,r:dC,E:OC,z:GT,_:eC};v();var Kn=n._free=u=>(Kn=n._free=T.sa)(u),Rl=n._malloc=u=>(Rl=n._malloc=T.ta)(u),ep=u=>(ep=T.va)(u);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=T.wa)();var de=(u,d)=>(de=T.xa)(u,d),As=u=>(As=T.ya)(u),me=()=>(me=T.za)(),_e=u=>(_e=T.Aa)(u),tp=u=>(tp=T.Ba)(u),np=u=>(np=T.Ca)(u),rp=(u,d,p)=>(rp=T.Da)(u,d,p),ip=u=>(ip=T.Ea)(u);n.dynCall_viijii=(u,d,p,m,w,b,I)=>(n.dynCall_viijii=T.Fa)(u,d,p,m,w,b,I);var sp=n.dynCall_jiii=(u,d,p,m)=>(sp=n.dynCall_jiii=T.Ga)(u,d,p,m),op=n.dynCall_jiiii=(u,d,p,m,w)=>(op=n.dynCall_jiiii=T.Ha)(u,d,p,m,w);n.dynCall_iiiiij=(u,d,p,m,w,b,I)=>(n.dynCall_iiiiij=T.Ia)(u,d,p,m,w,b,I),n.dynCall_iiiiijj=(u,d,p,m,w,b,I,S,O)=>(n.dynCall_iiiiijj=T.Ja)(u,d,p,m,w,b,I,S,O),n.dynCall_iiiiiijj=(u,d,p,m,w,b,I,S,O,F)=>(n.dynCall_iiiiiijj=T.Ka)(u,d,p,m,w,b,I,S,O,F);function nC(u,d){var p=me();try{return Te(u)(d)}catch(m){if(_e(p),m!==m+0)throw m;de(1,0)}}function rC(u,d,p,m){var w=me();try{Te(u)(d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function iC(u,d,p){var m=me();try{Te(u)(d,p)}catch(w){if(_e(m),w!==w+0)throw w;de(1,0)}}function sC(u,d,p,m,w){var b=me();try{return Te(u)(d,p,m,w)}catch(I){if(_e(b),I!==I+0)throw I;de(1,0)}}function oC(u,d){var p=me();try{Te(u)(d)}catch(m){if(_e(p),m!==m+0)throw m;de(1,0)}}function aC(u,d,p){var m=me();try{return Te(u)(d,p)}catch(w){if(_e(m),w!==w+0)throw w;de(1,0)}}function cC(u){var d=me();try{Te(u)()}catch(p){if(_e(d),p!==p+0)throw p;de(1,0)}}function lC(u,d,p,m){var w=me();try{return Te(u)(d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function uC(u,d,p,m,w,b){var I=me();try{Te(u)(d,p,m,w,b)}catch(S){if(_e(I),S!==S+0)throw S;de(1,0)}}function hC(u,d,p,m,w,b,I){var S=me();try{Te(u)(d,p,m,w,b,I)}catch(O){if(_e(S),O!==O+0)throw O;de(1,0)}}function dC(u,d,p,m,w,b,I,S,O,F,q){var te=me();try{Te(u)(d,p,m,w,b,I,S,O,F,q)}catch(ne){if(_e(te),ne!==ne+0)throw ne;de(1,0)}}function fC(u,d,p,m,w,b,I,S){var O=me();try{Te(u)(d,p,m,w,b,I,S)}catch(F){if(_e(O),F!==F+0)throw F;de(1,0)}}function pC(u,d,p,m,w){var b=me();try{Te(u)(d,p,m,w)}catch(I){if(_e(b),I!==I+0)throw I;de(1,0)}}function gC(u,d,p,m,w,b,I){var S=me();try{return Te(u)(d,p,m,w,b,I)}catch(O){if(_e(S),O!==O+0)throw O;de(1,0)}}function mC(u,d,p,m,w,b,I,S,O){var F=me();try{Te(u)(d,p,m,w,b,I,S,O)}catch(q){if(_e(F),q!==q+0)throw q;de(1,0)}}function _C(u){var d=me();try{return Te(u)()}catch(p){if(_e(d),p!==p+0)throw p;de(1,0)}}function vC(u,d,p,m,w,b,I){var S=me();try{return Te(u)(d,p,m,w,b,I)}catch(O){if(_e(S),O!==O+0)throw O;de(1,0)}}function yC(u,d,p,m){var w=me();try{return Te(u)(d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function wC(u,d,p,m){var w=me();try{return Te(u)(d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function EC(u,d,p,m,w,b){var I=me();try{return Te(u)(d,p,m,w,b)}catch(S){if(_e(I),S!==S+0)throw S;de(1,0)}}function bC(u,d,p,m,w,b){var I=me();try{return Te(u)(d,p,m,w,b)}catch(S){if(_e(I),S!==S+0)throw S;de(1,0)}}function TC(u,d,p,m,w,b,I,S,O,F){var q=me();try{return Te(u)(d,p,m,w,b,I,S,O,F)}catch(te){if(_e(q),te!==te+0)throw te;de(1,0)}}function CC(u,d,p){var m=me();try{return Te(u)(d,p)}catch(w){if(_e(m),w!==w+0)throw w;de(1,0)}}function IC(u,d,p,m,w,b,I,S,O,F){var q=me();try{Te(u)(d,p,m,w,b,I,S,O,F)}catch(te){if(_e(q),te!==te+0)throw te;de(1,0)}}function SC(u,d,p,m,w,b,I,S){var O=me();try{return Te(u)(d,p,m,w,b,I,S)}catch(F){if(_e(O),F!==F+0)throw F;de(1,0)}}function AC(u,d,p,m,w,b,I,S,O){var F=me();try{return Te(u)(d,p,m,w,b,I,S,O)}catch(q){if(_e(F),q!==q+0)throw q;de(1,0)}}function RC(u,d,p,m,w,b,I){var S=me();try{Te(u)(d,p,m,w,b,I)}catch(O){if(_e(S),O!==O+0)throw O;de(1,0)}}function PC(u,d,p,m){var w=me();try{return Te(u)(d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function kC(u,d,p,m,w,b,I,S,O,F,q,te){var ne=me();try{return Te(u)(d,p,m,w,b,I,S,O,F,q,te)}catch(ve){if(_e(ne),ve!==ve+0)throw ve;de(1,0)}}function OC(u,d,p,m,w,b,I,S,O,F,q,te,ne,ve,Ve,tt){var We=me();try{Te(u)(d,p,m,w,b,I,S,O,F,q,te,ne,ve,Ve,tt)}catch(nt){if(_e(We),nt!==nt+0)throw nt;de(1,0)}}function NC(u,d,p,m){var w=me();try{return sp(u,d,p,m)}catch(b){if(_e(w),b!==b+0)throw b;de(1,0)}}function DC(u,d,p,m,w){var b=me();try{return op(u,d,p,m,w)}catch(I){if(_e(b),I!==I+0)throw I;de(1,0)}}var Qo;Ze=function u(){Qo||ap(),Qo||(Ze=u)};function ap(){if(Qe>0||(Hn(),Qe>0))return;function u(){Qo||(Qo=!0,n.calledRun=!0,!M&&(Rt(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),Pe()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),u()},1)):u()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return ap(),e.ready}})();function NR(t){return ey(ty,t)}async function DR(t,{tryHarder:e=Sr.tryHarder,formats:n=Sr.formats,maxSymbols:r=Sr.maxSymbols}=Sr){return PR(t,{tryHarder:e,formats:n,maxSymbols:r},ty)}const ny=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function MR(t){for(const[e,n]of ny)if(t===n)return e;return"unknown"}var Ta;class Fc{constructor(e={}){dR(this,Ta,void 0);var n;try{const r=(n=e==null?void 0:e.formats)==null?void 0:n.filter(i=>i!=="unknown");if((r==null?void 0:r.length)===0)throw new TypeError("Hint option provided, but is empty.");r==null||r.forEach(i=>{if(!sg.includes(i))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${i}' is not a valid enum value of type BarcodeFormat.`)}),NR().catch(()=>{}),fR(this,Ta,r??[])}catch(r){throw og(r,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return sg.filter(e=>e!=="unknown")}async detect(e){try{const n=await ER(e);if(n===null)return[];let r;try{r=await DR(n,{tryHarder:!0,formats:hR(this,Ta).map(i=>ny.get(i))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return r.map(i=>{const{topLeft:{x:s,y:o},topRight:{x:c,y:a},bottomLeft:{x:l,y:h},bottomRight:{x:f,y:g}}=i.position,_=Math.min(s,c,l,f),E=Math.min(o,a,h,g),T=Math.max(s,c,l,f),M=Math.max(o,a,h,g);return{boundingBox:new DOMRectReadOnly(_,E,T-_,M-E),rawValue:new TextDecoder().decode(i.bytes),format:MR(i.format),cornerPoints:[{x:s,y:o},{x:c,y:a},{x:f,y:g},{x:l,y:h}]}})}catch(n){throw og(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}Ta=new WeakMap;const ry=(t,e,n="error")=>{let r,i;const s=new Promise((o,c)=>{r=o,i=c,t.addEventListener(e,r),t.addEventListener(n,i)});return s.finally(()=>{t.removeEventListener(e,r),t.removeEventListener(n,i)}),s},ug=t=>new Promise(e=>setTimeout(e,t));let xR=class extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}};class iy extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}let LR=class extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}},$R=class extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}},Wu;const FR=t=>{Wu=new Fc({formats:t})},UR=async(t,{detectHandler:e,locateHandler:n,minDelay:r,formats:i})=>{Wu=new Fc({formats:i});const s=o=>async c=>{if(t.readyState>1){const{lastScanned:a,contentBefore:l,lastScanHadContent:h}=o;if(c-a<r)window.requestAnimationFrame(s(o));else{const f=await Wu.detect(t),g=f.some(T=>!l.includes(T.rawValue));g&&e(f);const _=f.length>0;_&&n(f),!_&&h&&n(f);const E={lastScanned:c,lastScanHadContent:_,contentBefore:g?f.map(T=>T.rawValue):l};window.requestAnimationFrame(s(E))}}};s({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},BR=async t=>{if(t.startsWith("http")&&t.includes(location.host)===!1)throw new xR;const e=document.createElement("img");return e.src=t,await ry(e,"load"),e},sy=async(t,e=["qr_code"])=>await new Fc({formats:e}).detect(t),jR=async(t,e=["qr_code"])=>{const n=new Fc({formats:e}),r=await BR(t);return await n.detect(r)};var oy={},Ht={};Object.defineProperty(Ht,"__esModule",{value:!0});Ht.compactObject=ly;Ht.deprecated=JR;var HR=Ht.detectBrowser=XR;Ht.disableLog=qR;Ht.disableWarnings=GR;Ht.extractVersion=Ca;Ht.filterStats=QR;Ht.log=YR;Ht.walkStats=ja;Ht.wrapPeerConnectionEvent=KR;function VR(t,e,n){return e=WR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WR(t){var e=zR(t,"string");return Lr(e)==="symbol"?e:String(e)}function zR(t,e){if(Lr(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Lr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Lr(t){"@babel/helpers - typeof";return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lr(t)}var ay=!0,cy=!0;function Ca(t,e,n){var r=t.match(e);return r&&r.length>=n&&parseInt(r[n],10)}function KR(t,e,n){if(t.RTCPeerConnection){var r=t.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(o,c){if(o!==e)return i.apply(this,arguments);var a=function(l){var h=n(l);h&&(c.handleEvent?c.handleEvent(h):c(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,a),i.apply(this,[o,a])};var s=r.removeEventListener;r.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(c))return s.apply(this,arguments);var a=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,a])},Object.defineProperty(r,"on"+e,{get:function(){return this["_on"+e]},set:function(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}}function qR(t){return typeof t!="boolean"?new Error("Argument type: "+Lr(t)+". Please use a boolean."):(ay=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function GR(t){return typeof t!="boolean"?new Error("Argument type: "+Lr(t)+". Please use a boolean."):(cy=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function YR(){if((typeof window>"u"?"undefined":Lr(window))==="object"){if(ay)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function JR(t,e){cy&&console.warn(t+" is deprecated, please use "+e+" instead.")}function XR(t){var e={browser:null,version:null};if(typeof t>"u"||!t.navigator)return e.browser="Not a browser.",e;var n=t.navigator;if(n.mozGetUserMedia)e.browser="firefox",e.version=Ca(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||t.isSecureContext===!1&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=Ca(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Ca(n.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function hg(t){return Object.prototype.toString.call(t)==="[object Object]"}function ly(t){return hg(t)?Object.keys(t).reduce(function(e,n){var r=hg(t[n]),i=r?ly(t[n]):t[n],s=r&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,VR({},n,i))},{}):t}function ja(t,e,n){!e||n.has(e.id)||(n.set(e.id,e),Object.keys(e).forEach(function(r){r.endsWith("Id")?ja(t,t.get(e[r]),n):r.endsWith("Ids")&&e[r].forEach(function(i){ja(t,t.get(i),n)})}))}function QR(t,e,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;var s=[];return t.forEach(function(o){o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(function(o){t.forEach(function(c){c.type===r&&c.trackId===o.id&&ja(t,c,i)})}),i}Object.defineProperty(oy,"__esModule",{value:!0});var ZR=oy.shimGetUserMedia=nP,eP=tP(Ht);function uy(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(uy=function(r){return r?n:e})(t)}function tP(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||yr(t)!=="object"&&typeof t!="function")return{default:t};var n=uy(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function yr(t){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yr(t)}var dg=eP.log;function nP(t,e){var n=t&&t.navigator;if(n.mediaDevices){var r=function(a){if(yr(a)!=="object"||a.mandatory||a.optional)return a;var l={};return Object.keys(a).forEach(function(h){if(!(h==="require"||h==="advanced"||h==="mediaSource")){var f=yr(a[h])==="object"?a[h]:{ideal:a[h]};f.exact!==void 0&&typeof f.exact=="number"&&(f.min=f.max=f.exact);var g=function(E,T){return E?E+T.charAt(0).toUpperCase()+T.slice(1):T==="deviceId"?"sourceId":T};if(f.ideal!==void 0){l.optional=l.optional||[];var _={};typeof f.ideal=="number"?(_[g("min",h)]=f.ideal,l.optional.push(_),_={},_[g("max",h)]=f.ideal,l.optional.push(_)):(_[g("",h)]=f.ideal,l.optional.push(_))}f.exact!==void 0&&typeof f.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[g("",h)]=f.exact):["min","max"].forEach(function(E){f[E]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[g(E,h)]=f[E])})}}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},i=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&yr(a.audio)==="object"){var h=function(E,T,M){T in E&&!(M in E)&&(E[M]=E[T],delete E[T])};a=JSON.parse(JSON.stringify(a)),h(a.audio,"autoGainControl","googAutoGainControl"),h(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=r(a.audio)}if(a&&yr(a.video)==="object"){var f=a.video.facingMode;f=f&&(yr(f)==="object"?f:{ideal:f});var g=e.version<66;if(f&&(f.exact==="user"||f.exact==="environment"||f.ideal==="user"||f.ideal==="environment")&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!g)){delete a.video.facingMode;var _;if(f.exact==="environment"||f.ideal==="environment"?_=["back","rear"]:(f.exact==="user"||f.ideal==="user")&&(_=["front"]),_)return n.mediaDevices.enumerateDevices().then(function(E){E=E.filter(function(M){return M.kind==="videoinput"});var T=E.find(function(M){return _.some(function(A){return M.label.toLowerCase().includes(A)})});return!T&&E.length&&_.includes("back")&&(T=E[E.length-1]),T&&(a.video.deviceId=f.exact?{exact:T.deviceId}:{ideal:T.deviceId}),a.video=r(a.video),dg("chrome: "+JSON.stringify(a)),l(a)})}a.video=r(a.video)}return dg("chrome: "+JSON.stringify(a)),l(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(a,l,h){i(a,function(f){n.webkitGetUserMedia(f,l,function(g){h&&h(s(g))})})};if(n.getUserMedia=o.bind(n),n.mediaDevices.getUserMedia){var c=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(a){return i(a,function(l){return c(l).then(function(h){if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(function(f){f.stop()}),new DOMException("","NotFoundError");return h},function(h){return Promise.reject(s(h))})})}}}}var hy={};Object.defineProperty(hy,"__esModule",{value:!0});var rP=hy.shimGetUserMedia=oP,iP=sP(Ht);function dy(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(dy=function(r){return r?n:e})(t)}function sP(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Hi(t)!=="object"&&typeof t!="function")return{default:t};var n=dy(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function Hi(t){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hi(t)}function oP(t,e){var n=t&&t.navigator,r=t&&t.MediaStreamTrack;if(n.getUserMedia=function(a,l,h){iP.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(a).then(l,h)},!(e.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(a,l,h){l in a&&!(h in a)&&(a[h]=a[l],delete a[l])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(a){return Hi(a)==="object"&&Hi(a.audio)==="object"&&(a=JSON.parse(JSON.stringify(a)),i(a.audio,"autoGainControl","mozAutoGainControl"),i(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},r&&r.prototype.getSettings){var o=r.prototype.getSettings;r.prototype.getSettings=function(){var a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(r&&r.prototype.applyConstraints){var c=r.prototype.applyConstraints;r.prototype.applyConstraints=function(a){return this.kind==="audio"&&Hi(a)==="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),c.apply(this,[a])}}}}var Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.shimAudioContext=mP;Un.shimCallbacksAPI=hP;Un.shimConstraints=gy;Un.shimCreateOfferLegacy=gP;var aP=Un.shimGetUserMedia=dP;Un.shimLocalStreamsAPI=lP;Un.shimRTCIceServerUrls=fP;Un.shimRemoteStreamsAPI=uP;Un.shimTrackEventTransceiver=pP;var fy=cP(Ht);function py(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(py=function(r){return r?n:e})(t)}function cP(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||$r(t)!=="object"&&typeof t!="function")return{default:t};var n=py(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function $r(t){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$r(t)}function lP(t){if(!($r(t)!=="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){var e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(function(i){return e.call(r,i,n)}),n.getVideoTracks().forEach(function(i){return e.call(r,i,n)})},t.RTCPeerConnection.prototype.addTrack=function(n){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s&&s.forEach(function(c){r._localStreams?r._localStreams.includes(c)||r._localStreams.push(c):r._localStreams=[c]}),e.apply(this,arguments)}}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(n){var r=this;this._localStreams||(this._localStreams=[]);var i=this._localStreams.indexOf(n);if(i!==-1){this._localStreams.splice(i,1);var s=n.getTracks();this.getSenders().forEach(function(o){s.includes(o.track)&&r.removeTrack(o)})}})}}function uP(t){if(!($r(t)!=="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(n){var r=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=n),this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(function(s){if(r._remoteStreams||(r._remoteStreams=[]),!r._remoteStreams.includes(s)){r._remoteStreams.push(s);var o=new Event("addstream");o.stream=s,r.dispatchEvent(o)}})})}});var e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(function(i){if(n._remoteStreams||(n._remoteStreams=[]),!(n._remoteStreams.indexOf(i)>=0)){n._remoteStreams.push(i);var s=new Event("addstream");s.stream=i,n.dispatchEvent(s)}})}),e.apply(n,arguments)}}}function hP(t){if(!($r(t)!=="object"||!t.RTCPeerConnection)){var e=t.RTCPeerConnection.prototype,n=e.createOffer,r=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(a,l){var h=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[h]);return l?(f.then(a,l),Promise.resolve()):f},e.createAnswer=function(a,l){var h=arguments.length>=2?arguments[2]:arguments[0],f=r.apply(this,[h]);return l?(f.then(a,l),Promise.resolve()):f};var c=function(a,l,h){var f=i.apply(this,[a]);return h?(f.then(l,h),Promise.resolve()):f};e.setLocalDescription=c,c=function(a,l,h){var f=s.apply(this,[a]);return h?(f.then(l,h),Promise.resolve()):f},e.setRemoteDescription=c,c=function(a,l,h){var f=o.apply(this,[a]);return h?(f.then(l,h),Promise.resolve()):f},e.addIceCandidate=c}}function dP(t){var e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){var n=e.mediaDevices,r=n.getUserMedia.bind(n);e.mediaDevices.getUserMedia=function(i){return r(gy(i))}}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,s,o){e.mediaDevices.getUserMedia(i).then(s,o)}).bind(e))}function gy(t){return t&&t.video!==void 0?Object.assign({},t,{video:fy.compactObject(t.video)}):t}function fP(t){if(t.RTCPeerConnection){var e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,r){if(n&&n.iceServers){for(var i=[],s=0;s<n.iceServers.length;s++){var o=n.iceServers[s];o.urls===void 0&&o.url?(fy.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,i.push(o)):i.push(n.iceServers[s])}n.iceServers=i}return new e(n,r)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return e.generateCertificate}})}}function pP(t){$r(t)==="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function gP(t){var e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);var r=this.getTransceivers().find(function(s){return s.receiver.track.kind==="audio"});n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);var i=this.getTransceivers().find(function(s){return s.receiver.track.kind==="video"});n.offerToReceiveVideo===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveVideo===!0&&!i&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function mP(t){$r(t)!=="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext)}const _P=t=>{let e=!1,n;return(...r)=>(e||(n=t(r),e=!0),n)};function Gn(t,e){if(t===!1)throw new Error(e??"assertion failure")}const vP=_P(()=>{const t=HR(window);switch(t.browser){case"chrome":ZR(window,t);break;case"firefox":rP(window,t);break;case"safari":aP(window,t);break;default:throw new iy}});let Xn={isActive:!1};function Wl(){if(Xn.isActive){Xn.videoEl.src="",Xn.videoEl.srcObject=null,Xn.videoEl.load();for(const t of Xn.stream.getTracks())Xn.stream.removeTrack(t),t.stop();Xn={isActive:!1}}}async function yP(t,{constraints:e,torch:n}){var r,i;if(window.isSecureContext!==!0)throw new LR;if(((r=navigator==null?void 0:navigator.mediaDevices)==null?void 0:r.getUserMedia)===void 0)throw new iy;vP();const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:e});if(t.srcObject!==void 0?t.srcObject=s:t.mozSrcObject!==void 0?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s.id,await Promise.race([ry(t,"loadeddata"),ug(3e3).then(()=>{throw new $R})]),await ug(500),n){const[c]=s.getVideoTracks();c.getCapabilities().torch?c.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}Xn={videoEl:t,stream:s,isActive:!0};const[o]=Xn.stream.getVideoTracks();return((i=o==null?void 0:o.getCapabilities)==null?void 0:i.call(o))??{}}const wP={class:"qrcode-stream-wrapper"},EP={class:"qrcode-stream-overlay"},bP=or({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(t,{emit:e}){const n=t,r=Zt(),i=Zt(),s=Zt(),o=Zt(!1),c=Zt(!1);td(()=>{c.value=!0}),nd(()=>{Wl()});const a=zt(()=>({torch:n.torch,constraints:n.constraints,shouldStream:c.value&&!n.paused}));ci(a,async _=>{const E=s.value;Gn(E!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const T=r.value;Gn(T!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const M=T.getContext("2d");if(Gn(M!==null,"if cavnas is defined, canvas 2d context should also be non-null"),_.shouldStream)try{const A=await yP(E,_);c.value?(o.value=!0,e("camera-on",A)):Wl()}catch(A){e("error",A)}else T.width=E.videoWidth,T.height=E.videoHeight,M.drawImage(E,0,0,E.videoWidth,E.videoHeight),Wl(),o.value=!1,e("camera-off")},{deep:!0});const{formats:l}=SI(n);ci(l,_=>{c.value&&FR(_)});const h=zt(()=>a.value.shouldStream&&o.value);ci(h,_=>{if(_){Gn(r.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),f(r.value),Gn(i.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),f(i.value);const E=()=>n.track===void 0?500:40;Gn(s.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),UR(s.value,{detectHandler:T=>e("detect",T),formats:n.formats,locateHandler:g,minDelay:E()})}});const f=_=>{const E=_.getContext("2d");Gn(E!==null,"canvas 2d context should always be non-null"),E.clearRect(0,0,_.width,_.height)},g=_=>{const E=i.value;Gn(E!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const T=s.value;if(Gn(T!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),_.length===0||n.track===void 0)f(E);else{const M=T.offsetWidth,A=T.offsetHeight,N=T.videoWidth,L=T.videoHeight,P=Math.max(M/N,A/L),z=N*P,G=L*P,ce=z/N,we=G/L,He=(M-z)/2,Ne=(A-G)/2,Ke=({x:Rt,y:Pe})=>({x:Math.floor(Rt*ce),y:Math.floor(Pe*we)}),ht=({x:Rt,y:Pe})=>({x:Math.floor(Rt+He),y:Math.floor(Pe+Ne)}),xe=_.map(Rt=>{const{boundingBox:Pe,cornerPoints:Ie}=Rt,{x:he,y:Vt}=ht(Ke({x:Pe.x,y:Pe.y})),{x:Qe,y:Ze}=Ke({x:Pe.width,y:Pe.height});return{...Rt,cornerPoints:Ie.map(et=>ht(Ke(et))),boundingBox:DOMRectReadOnly.fromRect({x:he,y:Vt,width:Qe,height:Ze})}});E.width=T.offsetWidth,E.height=T.offsetHeight;const Hn=E.getContext("2d");n.track(xe,Hn)}};return(_,E)=>(nn(),pi("div",wP,[An("video",{ref_key:"videoRef",ref:s,class:Cc([{"qrcode-stream-camera--hidden":!h.value},"qrcode-stream-camera"]),autoplay:"",muted:"",playsinline:""},null,2),WI(An("canvas",{ref_key:"pauseFrameRef",ref:r,class:"qrcode-stream-camera"},null,512),[[o1,!h.value]]),An("canvas",{ref_key:"trackingLayerRef",ref:i,class:"qrcode-stream-overlay"},null,512),An("div",EP,[iv(_.$slots,"default",{},void 0,!0)])]))}}),TP=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},my=TP(bP,[["__scopeId","data-v-dfa4038c"]]),CP=or({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(t,{emit:e}){const n=t,r=i=>{if(!(!(i.target instanceof HTMLInputElement)||!i.target.files))for(const s of Array.from(i.target.files))sy(s,n.formats).then(o=>{e("detect",o)})};return(i,s)=>(nn(),pi("input",{onChange:r,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),IP=["onDrop"],SP=or({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(t,{emit:e}){const n=t,r=async o=>{try{const c=await o;e("detect",c)}catch(c){e("error",c)}},i=o=>{e("dragover",o)},s=({dataTransfer:o})=>{if(!o)return;i(!1);const c=[...Array.from(o.files)],a=o.getData("text/uri-list");c.forEach(l=>{r(sy(l))}),a!==""&&r(jR(a,n.formats))};return(o,c)=>(nn(),pi("div",{onDrop:oa(s,["prevent","stop"]),onDragenter:c[0]||(c[0]=oa(a=>i(!0),["prevent","stop"])),onDragleave:c[1]||(c[1]=oa(a=>i(!1),["prevent","stop"])),onDragover:c[2]||(c[2]=oa(()=>{},["prevent","stop"]))},[iv(o.$slots,"default")],40,IP))}});function AP(t){t.component("qrcode-stream",my),t.component("qrcode-capture",CP),t.component("qrcode-drop-zone",SP)}const RP={install:AP};let Ha=null;typeof window<"u"?Ha=window.Vue:typeof global<"u"&&(Ha=global.Vue);Ha&&Ha.use(RP);const PP={class:"qrScanner"},kP=or({__name:"ScanQr",emits:["codeFound"],setup(t,{emit:e}){const n=Zt(!0);Zt();function r(s){s.length>=1&&e("codeFound",s[0].rawValue)}function i(){n.value=!1}return(s,o)=>(nn(),pi("div",PP,[Tt(Rr(my),{onDetect:r,constraints:{facingMode:"environment"},onCameraOn:i},{default:Q_(()=>[n.value?(nn(),pi("div",{key:0,class:"loading-indicator","on:cameraOn":i},"Caricamento...",32)):SS("",!0)]),_:1})]))}});function pd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Mt(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gd=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const OP=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},NP=(t,e,n)=>{e.constructor.createProperty(n,t)};function cr(t){return(e,n)=>n!==void 0?NP(t,e,n):OP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _y(t){return cr({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vy=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(c){t(c,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yy(t,e){return vy({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zl;const DP=((zl=window.HTMLSlotElement)===null||zl===void 0?void 0:zl.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function j4(t){const{slot:e,selector:n}=t??{};return vy({descriptor:r=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),c=o!=null?DP(o,t):[];return n?c.filter(a=>a.matches(n)):c},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia=window,md=Ia.ShadowRoot&&(Ia.ShadyCSS===void 0||Ia.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_d=Symbol(),fg=new WeakMap;let wy=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==_d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(md&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=fg.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&fg.set(n,e))}return e}toString(){return this.cssText}};const MP=t=>new wy(typeof t=="string"?t:t+"",void 0,_d),Uc=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new wy(n,t,_d)},xP=(t,e)=>{md?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Ia.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},pg=md?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return MP(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kl;const Va=window,gg=Va.trustedTypes,LP=gg?gg.emptyScript:"",mg=Va.reactiveElementPolyfillSupport,zu={toAttribute(t,e){switch(e){case Boolean:t=t?LP:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ey=(t,e)=>e!==t&&(e==e||t==t),ql={attribute:!0,type:String,converter:zu,reflect:!1,hasChanged:Ey},Ku="finalized";let Mi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=ql){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ql}static finalize(){if(this.hasOwnProperty(Ku))return!1;this[Ku]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(pg(i))}else e!==void 0&&n.push(pg(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xP(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=ql){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:zu).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:zu;this._$El=s,this[s]=c.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ey)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Mi[Ku]=!0,Mi.elementProperties=new Map,Mi.elementStyles=[],Mi.shadowRootOptions={mode:"open"},mg==null||mg({ReactiveElement:Mi}),((Kl=Va.reactiveElementVersions)!==null&&Kl!==void 0?Kl:Va.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gl;const Wa=window,is=Wa.trustedTypes,_g=is?is.createPolicy("lit-html",{createHTML:t=>t}):void 0,qu="$lit$",wr=`lit$${(Math.random()+"").slice(9)}$`,by="?"+wr,$P=`<${by}>`,gi=document,ho=()=>gi.createComment(""),fo=t=>t===null||typeof t!="object"&&typeof t!="function",Ty=Array.isArray,FP=t=>Ty(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Yl=`[ 	
\f\r]`,Os=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vg=/-->/g,yg=/>/g,Yr=RegExp(`>|${Yl}(?:([^\\s"'>=/]+)(${Yl}*=${Yl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wg=/'/g,Eg=/"/g,Cy=/^(?:script|style|textarea|title)$/i,UP=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Yn=UP(1),mi=Symbol.for("lit-noChange"),Xe=Symbol.for("lit-nothing"),bg=new WeakMap,ti=gi.createTreeWalker(gi,129,null,!1);function Iy(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _g!==void 0?_g.createHTML(e):e}const BP=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=Os;for(let c=0;c<n;c++){const a=t[c];let l,h,f=-1,g=0;for(;g<a.length&&(o.lastIndex=g,h=o.exec(a),h!==null);)g=o.lastIndex,o===Os?h[1]==="!--"?o=vg:h[1]!==void 0?o=yg:h[2]!==void 0?(Cy.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Yr):h[3]!==void 0&&(o=Yr):o===Yr?h[0]===">"?(o=i??Os,f=-1):h[1]===void 0?f=-2:(f=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?Yr:h[3]==='"'?Eg:wg):o===Eg||o===wg?o=Yr:o===vg||o===yg?o=Os:(o=Yr,i=void 0);const _=o===Yr&&t[c+1].startsWith("/>")?" ":"";s+=o===Os?a+$P:f>=0?(r.push(l),a.slice(0,f)+qu+a.slice(f)+wr+_):a+wr+(f===-2?(r.push(void 0),c):_)}return[Iy(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let Gu=class Sy{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=BP(e,n);if(this.el=Sy.createElement(l,r),ti.currentNode=this.el.content,n===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(i=ti.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const f=[];for(const g of i.getAttributeNames())if(g.endsWith(qu)||g.startsWith(wr)){const _=h[o++];if(f.push(g),_!==void 0){const E=i.getAttribute(_.toLowerCase()+qu).split(wr),T=/([.?@])?(.*)/.exec(_);a.push({type:1,index:s,name:T[2],strings:E,ctor:T[1]==="."?HP:T[1]==="?"?WP:T[1]==="@"?zP:Bc})}else a.push({type:6,index:s})}for(const g of f)i.removeAttribute(g)}if(Cy.test(i.tagName)){const f=i.textContent.split(wr),g=f.length-1;if(g>0){i.textContent=is?is.emptyScript:"";for(let _=0;_<g;_++)i.append(f[_],ho()),ti.nextNode(),a.push({type:2,index:++s});i.append(f[g],ho())}}}else if(i.nodeType===8)if(i.data===by)a.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(wr,f+1))!==-1;)a.push({type:7,index:s}),f+=wr.length-1}s++}}static createElement(e,n){const r=gi.createElement("template");return r.innerHTML=e,r}};function ss(t,e,n=t,r){var i,s,o,c;if(e===mi)return e;let a=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=fo(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(t),a._$AT(t,n,r)),r!==void 0?((o=(c=n)._$Co)!==null&&o!==void 0?o:c._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=ss(t,a._$AS(t,e.values),a,r)),e}let jP=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:gi).importNode(r,!0);ti.currentNode=s;let o=ti.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new vd(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new KP(o,this,e)),this._$AV.push(h),l=i[++a]}c!==(l==null?void 0:l.index)&&(o=ti.nextNode(),c++)}return ti.currentNode=gi,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},vd=class Ay{constructor(e,n,r,i){var s;this.type=2,this._$AH=Xe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ss(this,e,n),fo(e)?e===Xe||e==null||e===""?(this._$AH!==Xe&&this._$AR(),this._$AH=Xe):e!==this._$AH&&e!==mi&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):FP(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Xe&&fo(this._$AH)?this._$AA.nextSibling.data=e:this.$(gi.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Gu.createElement(Iy(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new jP(s,this),c=o.u(this.options);o.v(r),this.$(c),this._$AH=o}}_$AC(e){let n=bg.get(e.strings);return n===void 0&&bg.set(e.strings,n=new Gu(e)),n}T(e){Ty(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new Ay(this.k(ho()),this.k(ho()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Bc=class{constructor(e,n,r,i,s){this.type=1,this._$AH=Xe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Xe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=ss(this,e,n,0),o=!fo(e)||e!==this._$AH&&e!==mi,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=ss(this,c[r+a],n,a),l===mi&&(l=this._$AH[a]),o||(o=!fo(l)||l!==this._$AH[a]),l===Xe?e=Xe:e!==Xe&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===Xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},HP=class extends Bc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Xe?void 0:e}};const VP=is?is.emptyScript:"";class WP extends Bc{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Xe?this.element.setAttribute(this.name,VP):this.element.removeAttribute(this.name)}}let zP=class extends Bc{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=ss(this,e,n,0))!==null&&r!==void 0?r:Xe)===mi)return;const i=this._$AH,s=e===Xe&&i!==Xe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Xe&&(i===Xe||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},KP=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ss(this,e)}};const Tg=Wa.litHtmlPolyfillSupport;Tg==null||Tg(Gu,vd),((Gl=Wa.litHtmlVersions)!==null&&Gl!==void 0?Gl:Wa.litHtmlVersions=[]).push("2.8.0");const qP=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const c=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new vd(e.insertBefore(ho(),c),c,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jl,Xl;class ui extends Mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qP(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return mi}}ui.finalized=!0,ui._$litElement$=!0,(Jl=globalThis.litElementHydrateSupport)===null||Jl===void 0||Jl.call(globalThis,{LitElement:ui});const Cg=globalThis.litElementPolyfillSupport;Cg==null||Cg({LitElement:ui});((Xl=globalThis.litElementVersions)!==null&&Xl!==void 0?Xl:globalThis.litElementVersions=[]).push("3.3.3");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const GP=Uc`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-handle-color: GrayText;--md-switch-disabled-handle-opacity: 1;--md-switch-disabled-icon-color: Canvas;--md-switch-disabled-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-focus-handle-color: ButtonText;--md-switch-handle-color: ButtonText;--md-switch-hover-handle-color: ButtonText;--md-switch-icon-color: Canvas;--md-switch-hover-icon-color: Canvas;--md-switch-focus-icon-color: Canvas;--md-switch-pressed-icon-color: Canvas;--md-switch-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ry=Symbol("attachableController");let Sa;Sa=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[Ry])==null||e.hostConnected()});class Py{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[Ry]=this,Sa==null||Sa.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const YP=["focusin","focusout","pointerdown"];class yd extends ui{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Py(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[Ig]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Ig]=!0}}onControlChange(e,n){for(const r of YP)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}Mt([cr({type:Boolean,reflect:!0})],yd.prototype,"visible",void 0);Mt([cr({type:Boolean,reflect:!0})],yd.prototype,"inward",void 0);const Ig=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const JP=Uc`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yu=class extends yd{};Yu.styles=[JP];Yu=Mt([gd("md-focus-ring")],Yu);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const XP={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},QP=t=>(...e)=>({_$litDirective$:t,values:e});class ZP{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ju=QP(class extends ZP{constructor(t){var e;if(super(t),t.type!==XP.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return mi}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ek={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tk=450,Sg=225,nk=.2,rk=10,ik=75,sk=.35,ok="::after",ak="forwards";var Ot;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Ot||(Ot={}));const ck=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],lk=150;class Oo extends ui{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Ot.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Py(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Yn`<div class="surface ${Ju(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Ot.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Ot.HOLDING){this.state=Ot.WAITING_FOR_CLICK;return}if(this.state===Ot.TOUCH_DELAY){this.state=Ot.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Ot.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Ot.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,lk)}),this.state===Ot.TOUCH_DELAY&&(this.state=Ot.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Ot.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Ot.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),r=Math.max(e,n),i=Math.max(sk*r,ik),s=Math.floor(r*nk),c=Math.sqrt(n**2+e**2)+rk;this.initialSize=s,this.rippleScale=`${(c+i)/s}`,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:r}=window,{left:i,top:s}=this.getBoundingClientRect(),o=n+i,c=r+s,{pageX:a,pageY:l}=e;return{x:a-o,y:l-c}}getTranslationCoordinates(e){const{height:n,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(n-this.initialSize)/2};let s;return e instanceof PointerEvent?s=this.getNormalizedPointerEventCoords(e):s={x:r/2,y:n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:r}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,s=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:ok,duration:tk,easing:ek.STANDARD,fill:ak})}async endPressAnimation(){this.state=Ot.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Sg){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,Sg-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:r,left:i,bottom:s,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=r&&n<=s}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const r of ck)e==null||e.removeEventListener(r,this),n==null||n.addEventListener(r,this)}}Mt([cr({type:Boolean,reflect:!0})],Oo.prototype,"disabled",void 0);Mt([_y()],Oo.prototype,"hovered",void 0);Mt([_y()],Oo.prototype,"pressed",void 0);Mt([yy(".surface")],Oo.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const uk=Uc`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xu=class extends Oo{};Xu.styles=[uk];Xu=Mt([gd("md-ripple")],Xu);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ky=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];ky.map(Oy);function Oy(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function hk(t){for(const e of ky)t.createProperty(e,{attribute:Oy(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function X4(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}function dk(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function fk(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!pk(t)}function pk(t){const e=Qu;return e&&(t.preventDefault(),t.stopImmediatePropagation()),gk(),e}let Qu=!1;async function gk(){Qu=!0,await null,Qu=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Bn extends ui{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var n;fk(e)&&((n=this.button)==null||n.focus(),this.button!=null&&dk(this.button))})}update(e){const n=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,n),super.update(e)}render(){return Yn`
      <button
        id="switch"
        type="button"
        class="switch ${Ju(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||Xe}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Yn`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Ju(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Yn``}
        </span>
      </span>
    `}renderIcons(){return Yn`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Yn``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Yn`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return Yn`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return Yn`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}}hk(Bn);Bn.shadowRootOptions={mode:"open",delegatesFocus:!0};Bn.formAssociated=!0;Mt([cr({type:Boolean,reflect:!0})],Bn.prototype,"disabled",void 0);Mt([cr({type:Boolean})],Bn.prototype,"selected",void 0);Mt([cr({type:Boolean})],Bn.prototype,"icons",void 0);Mt([cr({type:Boolean,attribute:"show-only-selected-icon"})],Bn.prototype,"showOnlySelectedIcon",void 0);Mt([yy("button")],Bn.prototype,"button",void 0);Mt([cr()],Bn.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const mk=Uc`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_disabled-handle-color: var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-icon-color: var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-icon-opacity: var(--md-switch-disabled-icon-opacity, 0.38);--_disabled-track-color: var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-track-outline-color: var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-handle-color: var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-color: var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_focus-track-outline-color: var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-color: var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e));--_handle-height: var(--md-switch-handle-height, 16px);--_handle-width: var(--md-switch-handle-width, 16px);--_hover-handle-color: var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-state-layer-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--_hover-track-color: var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_hover-track-outline-color: var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_icon-color: var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_icon-size: var(--md-switch-icon-size, 16px);--_pressed-handle-color: var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-state-layer-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12);--_pressed-track-color: var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_pressed-track-outline-color: var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_track-color: var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-outline-color: var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_track-height))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:100%}:host([touch-target=none]) .touch{display:none}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_track-color);border-color:var(--_track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_hover-track-color);border-color:var(--_hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_focus-track-color);border-color:var(--_focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_pressed-track-color);border-color:var(--_pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-track-color);border-color:var(--_disabled-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-handle-color);opacity:var(--_disabled-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_icon-size);height:var(--_icon-size);fill:var(--_icon-color)}.switch--unselected:hover .icon--off{fill:var(--_hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zu=class extends Bn{};Zu.styles=[mk,GP];Zu=Mt([gd("md-switch")],Zu);const _k={class:"mode"},vk={for:"switch"},yk={class:"section"},wk=or({__name:"HomeView",setup(t){const e=Zt(!1);return(n,r)=>{const i=nS("md-switch");return nn(),pi("main",null,[An("div",_k,[An("label",vk,qC(e.value?"Modalità genera":"Modalità scansione"),1),Tt(i,{id:"switch",onChange:r[0]||(r[0]=s=>e.value=!e.value)})]),An("div",yk,[e.value?(nn(),ao(kP,{key:1})):(nn(),ao(uR,{key:0,codeString:"asdas"}))])])}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+Ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ek=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,a=i+2<t.length,l=a?t[i+2]:0,h=s>>2,f=(s&3)<<4|c>>4;let g=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(g=64)),r.push(n[h],n[f],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ek(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||l==null||f==null)throw new bk;const g=s<<2|c>>4;if(r.push(g),l!==64){const _=c<<4&240|l>>2;if(r.push(_),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(t){const e=Dy(t);return jc.encodeByteArray(e,!0)},xy=function(t){return My(t).replace(/\./g,"")},za=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return Ly(void 0,t)}function Ly(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ck(n)||(t[n]=Ly(t[n],e[n]));return t}function Ck(t){return t!=="__proto__"}/**
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
 */function Ik(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sk=()=>Ik().__FIREBASE_DEFAULTS__,Ak=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&za(t[1]);return e&&JSON.parse(e)},wd=()=>{try{return Sk()||Ak()||Rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pk=t=>{var e,n;return(n=(e=wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$y=()=>{var t;return(t=wd())===null||t===void 0?void 0:t.config},Fy=t=>{var e;return(e=wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Uy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function By(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kk(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jy(){return Ny.NODE_ADMIN===!0}function bd(){try{return typeof indexedDB=="object"}catch{return!1}}function Hy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ok(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nk,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Dk(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new an(i,c,r)}}function Dk(t,e){return t.replace(Mk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Mk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){return JSON.parse(t)}function ft(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=go(za(s[0])||""),n=go(za(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xk=function(t){const e=Vy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lk=function(t){const e=Vy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ka(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ag(s)&&Ag(o)){if(!qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ag(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],a=this.chain_[4],l,h;for(let f=0;f<80;f++){f<40?f<20?(l=c^s&(o^c),h=1518500249):(l=s^o^c,h=1859775393):f<60?(l=s&o|c&(s|o),h=2400959708):(l=s^o^c,h=3395469782);const g=(i<<5|i>>>27)+l+a+h+r[f]&4294967295;a=c,c=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Fk(t,e){const n=new Uk(t,e);return n.subscribe.bind(n)}class Uk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ql(){}function jk(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,V(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Vk=1e3,Wk=2,zk=4*60*60*1e3,Kk=.5;function Rg(t,e=Vk,n=Wk){const r=e*Math.pow(n,t),i=Math.round(Kk*r*(Math.random()-.5)*2);return Math.min(zk,r+i)}/**
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
 */function jr(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new po;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yk(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gk(t){return t===Jr?void 0:t}function Yk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const Xk={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},Qk=Ae.INFO,Zk={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},eO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ps{constructor(e){this.name=e,this._logLevel=Qk,this._logHandler=eO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const tO=(t,e)=>e.some(n=>t instanceof n);let Pg,kg;function nO(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rO(){return kg||(kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wy=new WeakMap,th=new WeakMap,zy=new WeakMap,Zl=new WeakMap,Td=new WeakMap;function iO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wy.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function sO(t){if(th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});th.set(t,e)}let nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oO(t){nh=t(nh)}function aO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eu(this),e,...n);return zy.set(r,e.sort?e.sort():[e]),kr(r)}:rO().includes(t)?function(...e){return t.apply(eu(this),e),kr(Wy.get(this))}:function(...e){return kr(t.apply(eu(this),e))}}function cO(t){return typeof t=="function"?aO(t):(t instanceof IDBTransaction&&sO(t),tO(t,nO())?new Proxy(t,nh):t)}function kr(t){if(t instanceof IDBRequest)return iO(t);if(Zl.has(t))return Zl.get(t);const e=cO(t);return e!==t&&(Zl.set(t,e),Td.set(e,t)),e}const eu=t=>Td.get(t);function lO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=kr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(kr(o.result),a.oldVersion,a.newVersion,kr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const uO=["get","getKey","getAll","getAllKeys","count"],hO=["put","add","delete","clear"],tu=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uO.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&a.done]))[0]};return tu.set(e,s),s}oO(t=>({...t,get:(e,n,r)=>Og(e,n)||t.get(e,n,r),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));/**
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
 */class dO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rh="@firebase/app",Ng="0.9.17";/**
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
 */const _i=new ps("@firebase/app"),pO="@firebase/app-compat",gO="@firebase/analytics-compat",mO="@firebase/analytics",_O="@firebase/app-check-compat",vO="@firebase/app-check",yO="@firebase/auth",wO="@firebase/auth-compat",EO="@firebase/database",bO="@firebase/database-compat",TO="@firebase/functions",CO="@firebase/functions-compat",IO="@firebase/installations",SO="@firebase/installations-compat",AO="@firebase/messaging",RO="@firebase/messaging-compat",PO="@firebase/performance",kO="@firebase/performance-compat",OO="@firebase/remote-config",NO="@firebase/remote-config-compat",DO="@firebase/storage",MO="@firebase/storage-compat",xO="@firebase/firestore",LO="@firebase/firestore-compat",$O="firebase",FO="10.3.0";/**
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
 */const ih="[DEFAULT]",UO={[rh]:"fire-core",[pO]:"fire-core-compat",[mO]:"fire-analytics",[gO]:"fire-analytics-compat",[vO]:"fire-app-check",[_O]:"fire-app-check-compat",[yO]:"fire-auth",[wO]:"fire-auth-compat",[EO]:"fire-rtdb",[bO]:"fire-rtdb-compat",[TO]:"fire-fn",[CO]:"fire-fn-compat",[IO]:"fire-iid",[SO]:"fire-iid-compat",[AO]:"fire-fcm",[RO]:"fire-fcm-compat",[PO]:"fire-perf",[kO]:"fire-perf-compat",[OO]:"fire-rc",[NO]:"fire-rc-compat",[DO]:"fire-gcs",[MO]:"fire-gcs-compat",[xO]:"fire-fst",[LO]:"fire-fst-compat","fire-js":"fire-js",[$O]:"fire-js-all"};/**
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
 */const Ga=new Map,sh=new Map;function BO(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(sh.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of Ga.values())BO(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Or=new Br("app","Firebase",jO);/**
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
 */class HO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=FO;function Ky(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=$y()),!n)throw Or.create("no-options");const s=Ga.get(i);if(s){if(qa(n,s.options)&&qa(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new Jk(i);for(const a of sh.values())o.addComponent(a);const c=new HO(n,r,o);return Ga.set(i,c),c}function qy(t=ih){const e=Ga.get(t);if(!e&&t===ih&&$y())return Ky();if(!e)throw Or.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let i=(r=UO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(c.join(" "));return}jt(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VO="firebase-heartbeat-database",WO=1,mo="firebase-heartbeat-store";let nu=null;function Gy(){return nu||(nu=lO(VO,WO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mo)}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),nu}async function zO(t){try{return await(await Gy()).transaction(mo).objectStore(mo).get(Yy(t))}catch(e){if(e instanceof an)_i.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(n.message)}}}async function Dg(t,e){try{const r=(await Gy()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,Yy(t)),await r.done}catch(n){if(n instanceof an)_i.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_i.warn(r.message)}}}function Yy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KO=1024,qO=30*24*60*60*1e3;class GO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mg(),{heartbeatsToSend:n,unsentEntries:r}=YO(this._heartbeatsCache.heartbeats),i=xy(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mg(){return new Date().toISOString().substring(0,10)}function YO(t,e=KO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?Hy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xg(t){return xy(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XO(t){jt(new Dt("platform-logger",e=>new dO(e),"PRIVATE")),jt(new Dt("heartbeat",e=>new GO(e),"PRIVATE")),mt(rh,Ng,t),mt(rh,Ng,"esm2017"),mt("fire-js","")}XO("");function Lg(t){return t!==void 0&&t.enterprise!==void 0}class QO{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZO=Jy,Xy=new Br("auth","Firebase",Jy());/**
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
 */const Ya=new ps("@firebase/auth");function eN(t,...e){Ya.logLevel<=Ae.WARN&&Ya.warn(`Auth (${Hr}): ${t}`,...e)}function Aa(t,...e){Ya.logLevel<=Ae.ERROR&&Ya.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw Cd(t,...e)}function Nn(t,...e){return Cd(t,...e)}function Qy(t,e,n){const r=Object.assign(Object.assign({},ZO()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function Zy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xn(t,"argument-error"),Qy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xy.create(t,...e)}function oe(t,e,...n){if(!t)throw Cd(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function ir(t,e){t||Qn(e)}/**
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
 */function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tN(){return $g()==="http:"||$g()==="https:"}function $g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tN()||Uy()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||By()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Id(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class e0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sN=new No(3e4,6e4);function Wc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return t0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=fs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),e0.fetch()(r0(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function t0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iN),e);try{const i=new oN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw la(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qy(t,h,l);xn(t,h)}}catch(i){if(i instanceof an)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function n0(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function r0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Id(t.config,i):`${t.config.apiScheme}://${i}`}class oN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),sN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}async function aN(t,e){return gs(t,"GET","/v2/recaptchaConfig",Wc(t,e))}/**
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
 */async function cN(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function lN(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uN(t,e=!1){const n=jr(t),r=await n.getIdToken(e),i=Sd(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(ru(i.auth_time)),issuedAtTime:Js(ru(i.iat)),expirationTime:Js(ru(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ru(t){return Number(t)*1e3}function Sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=za(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hN(t){const e=Sd(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class i0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _o(t,lN(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mN(s.providerUserInfo):[],c=gN(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),h=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new i0(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function pN(t){const e=jr(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mN(t){return t.map(e=>{var{providerId:n}=e,r=pd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _N(t,e){const n=await t0(t,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=r0(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",e0.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _N(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function mr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new i0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _o(this,cN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,a,l,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:P,isAnonymous:z,providerData:G,stsTokenManager:ce}=n;oe(L&&ce,e,"internal-error");const we=vo.fromJSON(this.name,ce);oe(typeof L=="string",e,"internal-error"),mr(f,e.name),mr(g,e.name),oe(typeof P=="boolean",e,"internal-error"),oe(typeof z=="boolean",e,"internal-error"),mr(_,e.name),mr(E,e.name),mr(T,e.name),mr(M,e.name),mr(A,e.name),mr(N,e.name);const He=new hi({uid:L,auth:e,email:g,emailVerified:P,displayName:f,isAnonymous:z,photoURL:E,phoneNumber:_,tenantId:T,stsTokenManager:we,createdAt:A,lastLoginAt:N});return G&&Array.isArray(G)&&(He.providerData=G.map(Ne=>Object.assign({},Ne))),M&&(He._redirectEventId=M),He}static async _fromIdTokenResponse(e,n,r=!1){const i=new vo;i.updateFromServerResponse(n);const s=new hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ja(s),s}}/**
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
 */const Fg=new Map;function Zn(t){ir(t instanceof Function,"Expected a class definition");let e=Fg.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fg.set(t,e),e)}/**
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
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s0.type="NONE";const Ug=s0;/**
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
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(Zn(Ug),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Zn(Ug);const o=Ra(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const h=await l._get(o);if(h){const f=hi._fromJSON(e,h);l!==s&&(c=f),s=l;break}}catch{}const a=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Vi(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Vi(s,e,r))}}/**
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
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(h0(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||a0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o0(t=At()){return/firefox\//i.test(t)}function Ad(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a0(t=At()){return/crios\//i.test(t)}function c0(t=At()){return/iemobile/i.test(t)}function l0(t=At()){return/android/i.test(t)}function u0(t=At()){return/blackberry/i.test(t)}function h0(t=At()){return/webos/i.test(t)}function zc(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vN(t=At()){var e;return zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yN(){return kk()&&document.documentMode===10}function d0(t=At()){return zc(t)||l0(t)||h0(t)||u0(t)||/windows phone/i.test(t)||c0(t)}function wN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function f0(t,e=[]){let n;switch(t){case"Browser":n=Bg(At());break;case"Worker":n=`${Bg(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class EN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bN(t,e={}){return gs(t,"GET","/v2/passwordPolicy",Wc(t,e))}/**
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
 */const TN=6;class CN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class IN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new EN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jr(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bN(this),n=new CN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return jr(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fk(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function SN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function p0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SN().appendChild(r)})}function AN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RN="https://www.google.com/recaptcha/enterprise.js?render=",PN="recaptcha-enterprise",kN="NO_RECAPTCHA";class ON{constructor(e){this.type=PN,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{aN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new QO(a);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;Lg(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(kN)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!n&&Lg(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}p0(RN+c).then(()=>{i(c,s,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function Hg(t,e,n,r=!1){const i=new ON(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function NN(t,e){const n=Vc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qa(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function DN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MN(t,e,n){const r=ur(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=g0(e),{host:o,port:c}=xN(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LN()}function g0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xN(t){const e=g0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vg(o)}}}function Vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class m0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function Wi(t,e){return n0(t,"POST","/v1/accounts:signInWithIdp",Wc(t,e))}/**
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
 */const $N="http://localhost";class vi extends m0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
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
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends Do{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class br extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Tr extends Do{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Do{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function iu(t,e){return n0(t,"POST","/v1/accounts:signUp",Wc(t,e))}/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hi._fromIdTokenResponse(e,r,i),o=Wg(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wg(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xa extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xa(e,n,r,i)}}function _0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(t,s,e,r):s})}async function FN(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function UN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _o(t,_0(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=Sd(s.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
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
 */async function BN(t,e,n=!1){const r="signIn",i=await _0(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function jN(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Z4(t,e,n){var r;const i=ur(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Hg(i,s,"signUpPassword");o=iu(i,l)}else o=iu(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await Hg(i,s,"signUpPassword");return iu(i,h)}throw l});const c=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jN(t),l}),a=await yi._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(a.user),a}function v0(t,e,n,r){return jr(t).onIdTokenChanged(e,n,r)}function HN(t,e,n){return jr(t).beforeAuthStateChanged(e,n)}const Qa="__sak";/**
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
 */class y0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qa,"1"),this.storage.removeItem(Qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function VN(){const t=At();return Ad(t)||zc(t)}const WN=1e3,zN=10;class w0 extends y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VN()&&wN(),this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w0.type="LOCAL";const KN=w0;/**
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
 */class E0 extends y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E0.type="SESSION";const b0=E0;/**
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
 */function qN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(n.origin,s)),a=await qN(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function Rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const l=Rd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function YN(t){Dn().location.href=t}/**
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
 */function T0(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function JN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QN(){return T0()?self:null}/**
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
 */const C0="firebaseLocalStorageDb",ZN=1,Za="firebaseLocalStorage",I0="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function eD(){const t=indexedDB.deleteDatabase(C0);return new Mo(t).toPromise()}function ah(){const t=indexedDB.open(C0,ZN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:I0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await eD(),e(await ah()))})})}async function zg(t,e,n){const r=Gc(t,!0).put({[I0]:e,value:n});return new Mo(r).toPromise()}async function tD(t,e){const n=Gc(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Kg(t,e){const n=Gc(t,!0).delete(e);return new Mo(n).toPromise()}const nD=800,rD=3;class S0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(QN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JN(),!this.activeServiceWorker)return;this.sender=new GN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await zg(e,Qa,"1"),await Kg(e,Qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gc(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S0.type="LOCAL";const iD=S0;new No(3e4,6e4);/**
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
 */function Pd(t,e){return e?Zn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kd extends m0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sD(t){return BN(t.auth,new kd(t),t.bypassAuthState)}function oD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),UN(n,new kd(t),t.bypassAuthState)}async function aD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),FN(n,new kd(t),t.bypassAuthState)}/**
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
 */class A0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sD;case"linkViaPopup":case"linkViaRedirect":return aD;case"reauthViaPopup":case"reauthViaRedirect":return oD;default:xn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cD=new No(2e3,1e4);async function eU(t,e,n){const r=ur(t);Zy(t,e,Kc);const i=Pd(r,n);return new ni(r,"signInViaPopup",e,i).executeNotNull()}class ni extends A0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cD.get())};e()}}ni.currentPopupAction=null;/**
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
 */const lD="pendingRedirect",Pa=new Map;class uD extends A0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const r=await hD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hD(t,e){const n=P0(e),r=R0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function dD(t,e){return R0(t)._set(P0(e),"true")}function fD(t,e){Pa.set(t._key(),e)}function R0(t){return Zn(t._redirectPersistence)}function P0(t){return Ra(lD,t.config.apiKey,t.name)}/**
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
 */function tU(t,e,n){return pD(t,e,n)}async function pD(t,e,n){const r=ur(t);Zy(t,e,Kc),await r._initializationPromise;const i=Pd(r,n);return await dD(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function nU(t,e){return await ur(t)._initializationPromise,k0(t,e,!1)}async function k0(t,e,n=!1){const r=ur(t),i=Pd(r,e),o=await new uD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gD=10*60*1e3;class mD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_D(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gD&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _D(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
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
 */async function vD(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const yD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wD=/^https?/;async function ED(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vD(t);for(const n of e)try{if(bD(n))return}catch{}xn(t,"unauthorized-domain")}function bD(t){const e=oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wD.test(n))return!1;if(yD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TD=new No(3e4,6e4);function Gg(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CD(t){return new Promise((e,n)=>{var r,i,s;function o(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),n(Nn(t,"network-request-failed"))},timeout:TD.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const c=AN("iframefcb");return Dn()[c]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},p0(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw ka=null,e})}let ka=null;function ID(t){return ka=ka||CD(t),ka}/**
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
 */const SD=new No(5e3,15e3),AD="__/auth/iframe",RD="emulator/auth/iframe",PD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OD(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Id(e,RD):`https://${t.config.authDomain}/${AD}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=kD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fs(r).slice(1)}`}async function ND(t){const e=await ID(t),n=Dn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:OD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),c=Dn().setTimeout(()=>{s(o)},SD.get());function a(){Dn().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MD=500,xD=600,LD="_blank",$D="http://localhost";class Yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FD(t,e,n,r=MD,i=xD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},DD),{width:r.toString(),height:i.toString(),top:s,left:o}),l=At().toLowerCase();n&&(c=a0(l)?LD:n),o0(l)&&(e=e||$D,a.scrollbars="yes");const h=Object.entries(a).reduce((g,[_,E])=>`${g}${_}=${E},`,"");if(vN(l)&&c!=="_self")return UD(e||"",c),new Yg(null);const f=window.open(e||"",c,h);oe(f,t,"popup-blocked");try{f.focus()}catch{}return new Yg(f)}function UD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BD="__/auth/handler",jD="emulator/auth/handler",HD=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof Do){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const a=await t._getAppCheckToken(),l=a?`#${HD}=${encodeURIComponent(a)}`:"";return`${VD(t)}?${fs(c).slice(1)}${l}`}function VD({config:t}){return t.emulator?Id(t,jD):`https://${t.authDomain}/${BD}`}/**
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
 */const su="webStorageSupport";class WD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=k0,this._overrideRedirectResult=fD}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jg(e,n,r,oh(),i);return FD(e,o,Rd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,oh(),i);return YN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ND(e),r=new mD(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[su];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ED(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d0()||Ad()||zc()}}const zD=WD;var Xg="@firebase/auth",Qg="1.3.0";/**
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
 */class KD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GD(t){jt(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(t)},l=new IN(r,i,s,a);return DN(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jt(new Dt("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new KD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Xg,Qg,qD(t)),mt(Xg,Qg,"esm2017")}/**
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
 */const YD=5*60,JD=Fy("authIdTokenMaxAge")||YD;let Zg=null;const XD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JD)return;const i=n==null?void 0:n.token;Zg!==i&&(Zg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function N0(t=qy()){const e=Vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NN(t,{popupRedirectResolver:zD,persistence:[iD,KN,b0]}),r=Fy("authTokenSyncURL");if(r){const s=XD(r);HN(n,s,()=>s(n.currentUser)),v0(n,o=>s(o))}const i=Pk("auth");return i&&MN(n,`http://${i}`),n}GD("Browser");/**
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
 */const QD=new Map,ZD={activated:!1,tokenObservers:[]};function En(t){return QD.get(t)||Object.assign({},ZD)}const em={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class eM{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new po,await tM(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new po,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function tM(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const nM={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ec=new Br("appCheck","AppCheck",nM);function D0(t){if(!En(t).activated)throw ec.create("use-before-activation",{appName:t.name})}/**
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
 */const rM="firebase-app-check-database",iM=1,ch="firebase-app-check-store";let ua=null;function sM(){return ua||(ua=new Promise((t,e)=>{try{const n=indexedDB.open(rM,iM);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(ec.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(ch,{keyPath:"compositeKey"})}}}catch(n){e(ec.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ua)}function oM(t,e){return aM(cM(t),e)}async function aM(t,e){const r=(await sM()).transaction(ch,"readwrite"),s=r.objectStore(ch).put({compositeKey:t,value:e});return new Promise((o,c)=>{s.onsuccess=a=>{o()},r.onerror=a=>{var l;c(ec.create("storage-set",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function cM(t){return`${t.options.appId}-${t.name}`}/**
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
 */const lh=new ps("@firebase/app-check");function tm(t,e){return bd()?oM(t,e).catch(n=>{lh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const lM={error:"UNKNOWN_ERROR"};function uM(t){return jc.encodeString(JSON.stringify(t),!1)}async function uh(t,e=!1){const n=t.app;D0(n);const r=En(n);let i=r.token,s;if(i&&!js(i)&&(r.token=void 0,i=void 0),!i){const a=await r.cachedTokenPromise;a&&(js(a)?i=a:await tm(n,void 0))}if(!e&&i&&js(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await En(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?lh.warn(a.message):lh.error(a),s=a}let c;return i?s?js(i)?c={token:i.token,internalError:s}:c=rm(s):(c={token:i.token},r.token=i,await tm(n,i)):c=rm(s),o&&pM(n,c),c}async function hM(t){const e=t.app;D0(e);const{provider:n}=En(e);{const{token:r}=await n.getToken();return{token:r}}}function dM(t,e,n,r){const{app:i}=t,s=En(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&js(s.token)){const c=s.token;Promise.resolve().then(()=>{n({token:c.token}),nm(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>nm(t))}function M0(t,e){const n=En(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function nm(t){const{app:e}=t,n=En(e);let r=n.tokenRefresher;r||(r=fM(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function fM(t){const{app:e}=t;return new eM(async()=>{const n=En(e);let r;if(n.token?r=await uh(t,!0):r=await uh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=En(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},em.RETRIAL_MIN_WAIT,em.RETRIAL_MAX_WAIT)}function pM(t,e){const n=En(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function js(t){return t.expireTimeMillis-Date.now()>0}function rm(t){return{token:uM(lM),error:t}}/**
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
 */class gM{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=En(this.app);for(const n of e)M0(this.app,n.next);return Promise.resolve()}}function mM(t,e){return new gM(t,e)}function _M(t){return{getToken:e=>uh(t,e),getLimitedUseToken:()=>hM(t),addTokenListener:e=>dM(t,"INTERNAL",e),removeTokenListener:e=>M0(t.app,e)}}const vM="@firebase/app-check",yM="0.8.0",wM="app-check",im="app-check-internal";function EM(){jt(new Dt(wM,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return mM(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(im).initialize()})),jt(new Dt(im,t=>{const e=t.getProvider("app-check").getImmediate();return _M(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),mt(vM,yM)}EM();var bM="firebase",TM="10.3.0";/**
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
 */mt(bM,TM,"app");const x0=Symbol("firebaseApp");function L0(t){return OS()&&On(x0,null)||qy(t)}const CM=typeof window<"u",ha=new WeakMap;function IM(t,e){if(!ha.has(t)){const n=A_(!0);ha.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),ha.delete(t)}}return ha.get(t)}const SM=new WeakMap,da=new WeakMap;function $0(t){const e=L0(t);if(!da.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{da.set(e,s),n(s.value)}];da.set(e,i)}return da.get(e)}function AM(t){const e=$0(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function RM(t,e){const n=N0(e);v0(n,r=>{const i=$0();t.value=r,Array.isArray(i)&&i[1](t)})}const sm="@firebase/database",om="1.0.1";/**
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
 */let F0="";function PM(t){F0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kM(e)}}catch{}return new OM},ri=U0("localStorage"),hh=U0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new ps("@firebase/database"),NM=function(){let t=1;return function(){return t++}}(),B0=function(t){const e=Hk(t),n=new $k;n.update(e);const r=n.digest();return jc.encodeByteArray(r)},xo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xo.apply(null,r):typeof r=="object"?e+=ft(r):e+=r,e+=" "}return e};let di=null,am=!0;const DM=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zi.logLevel=Ae.VERBOSE,di=zi.log.bind(zi),e&&hh.set("logging_enabled",!0)):typeof t=="function"?di=t:(di=null,hh.remove("logging_enabled"))},wt=function(...t){if(am===!0&&(am=!1,di===null&&hh.get("logging_enabled")===!0&&DM(!0)),di){const e=xo.apply(null,t);di(e)}},Lo=function(t){return function(...e){wt(t,...e)}},dh=function(...t){const e="FIREBASE INTERNAL ERROR: "+xo(...t);zi.error(e)},wi=function(...t){const e=`FIREBASE FATAL ERROR: ${xo(...t)}`;throw zi.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+xo(...t);zi.warn(e)},MM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},j0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},as="[MIN_NAME]",Ei="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===as||e===Ei)return-1;if(e===as||t===Ei)return 1;{const n=cm(t),r=cm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LM=function(t,e){return t===e?0:t<e?-1:1},Ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ft(e))},Od=function(t){if(typeof t!="object"||t===null)return ft(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ft(e[r]),n+=":",n+=Od(t[e[r]]);return n+="}",n},H0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function sn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const V0=function(t){V(!j0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,c,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=c+r,o=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(a=n;a;a-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let f="";for(a=0;a<64;a+=8){let g=parseInt(h.substr(a,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},$M=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},UM=new RegExp("^-?(0*)\\d{1,10}$"),BM=-2147483648,jM=2147483647,cm=function(t){if(UM.test(t)){const e=Number(t);if(e>=BM&&e<=jM)return e}return null},$o=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},HM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class VM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class fh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="5",W0="v",z0="s",K0="r",q0="f",G0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y0="ls",J0="p",ph="ac",X0="websocket",Q0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n,r,i,s=!1,o="",c=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Z0(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let r;if(e===X0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Q0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KM(t)&&(n.ns=t.namespace);const i=[];return sn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.counters_={}}incrementCounter(e,n=1){lr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={},au={};function Dd(t){const e=t.toString();return ou[e]||(ou[e]=new qM),ou[e]}function GM(t,e){const n=t.toString();return au[n]||(au[n]=e()),au[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$o(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="start",JM="close",XM="pLPCommand",QM="pRTLPCB",ew="id",tw="pw",nw="ser",ZM="cb",e2="seg",t2="ts",n2="d",r2="dframe",rw=1870,iw=30,i2=rw-iw,s2=25e3,o2=3e4;class xi{constructor(e,n,r,i,s,o,c){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=Dd(n),this.urlFn=a=>(this.appCheckToken&&(a[ph]=this.appCheckToken),Z0(n,Q0,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(o2)),xM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...s)=>{const[o,c,a,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lm)this.id=c,this.password=a;else if(o===JM)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[lm]="t",r[nw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[W0]=Nd,this.transportSessionId&&(r[z0]=this.transportSessionId),this.lastSessionId&&(r[Y0]=this.lastSessionId),this.applicationId&&(r[J0]=this.applicationId),this.appCheckToken&&(r[ph]=this.appCheckToken),typeof location<"u"&&location.hostname&&G0.test(location.hostname)&&(r[K0]=q0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$M()&&!FM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=My(n),i=H0(r,i2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[r2]="t",r[ew]=e,r[tw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NM(),window[XM+this.uniqueCallbackIdentifier]=e,window[QM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){wt("frame writing exception"),c.stack&&wt(c.stack),wt(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ew]=this.myID,e[tw]=this.myPW,e[nw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iw+r.length<=rw;){const o=this.pendingSegs.shift();r=r+"&"+e2+i+"="+o.seg+"&"+t2+i+"="+o.ts+"&"+n2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(s2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=16384,c2=45e3;let tc=null;typeof MozWebSocket<"u"?tc=MozWebSocket:typeof WebSocket<"u"&&(tc=WebSocket);class fn{constructor(e,n,r,i,s,o,c){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=Dd(n),this.connURL=fn.connectionURL_(n,o,c,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[W0]=Nd,typeof location<"u"&&location.hostname&&G0.test(location.hostname)&&(o[K0]=q0),n&&(o[z0]=n),r&&(o[Y0]=r),i&&(o[ph]=i),s&&(o[J0]=s),Z0(e,X0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;jy(),this.mySock=new tc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tc!==null&&!fn.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=go(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=H0(n,a2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xi,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const i=this.transports_=[];for(const s of yo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=6e4,u2=5e3,h2=10*1024,d2=100*1024,cu="t",um="d",f2="s",hm="r",p2="e",dm="o",fm="a",pm="n",gm="p",g2="h";class m2{constructor(e,n,r,i,s,o,c,a,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>d2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cu in e){const n=e[cu];n===fm?this.upgradeIfSecondaryHealthy_():n===hm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ns("t",e),r=Ns("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ns("t",e),r=Ns("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ns(cu,e);if(um in e){const r=e[um];if(n===g2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===f2?this.onConnectionShutdown_(r):n===hm?this.onReset_(r):n===p2?dh("Server Error: "+r):n===dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nd!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(l2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(u2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends ow{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nc}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=32,_m=768;class je{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new je("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new je(t.pieces_,e)}function aw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new je(e,0)}function ot(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof je)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new je(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function tn(t,e){const n=pe(t),r=pe(e);if(n===null)return e;if(n===r)return tn(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uw(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class v2{constructor(e,n){this.errorPrefix_=n,this.parts_=cw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Hc(this.parts_[r]);hw(this)}}function y2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hc(e),hw(t)}function w2(t){const e=t.parts_.pop();t.byteLength_-=Hc(e),t.parts_.length>0&&(t.byteLength_-=1)}function hw(t){if(t.byteLength_>_m)throw new Error(t.errorPrefix_+"has a key path longer than "+_m+" bytes ("+t.byteLength_+").");if(t.parts_.length>mm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mm+") or object contains a cycle "+Xr(t))}function Xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends ow{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xd}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,E2=60*5*1e3,vm=30*1e3,b2=1.3,T2=3e4,C2="server_kill",ym=3;class nr extends sw{constructor(e,n,r,i,s,o,c,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=a,this.id=nr.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ds,this.maxReconnectDelay_=E2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!jy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ft(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new po,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?n.resolve(c):n.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,c=>{const a=c.d,l=c.s;nr.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",c),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lr(e,"w")){const r=os(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dh("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T2&&(this.reconnectDelay_=Ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,c=null;const a=function(){c?c.close():(o=!0,r())},l=function(f){V(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(f)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,c=new m2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Yt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(C2)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),a())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eh(this.interruptReasons_)&&(this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Od(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new je(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ym&&(this.reconnectDelay_=vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ym&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+F0.replace(/\./g,"-")]=1,Ed()?e["framework.cordova"]=1:By()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nc.getInstance().currentlyOnline();return eh(this.interruptReasons_)&&e}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ge(as,e),i=new ge(as,n);return this.compare(r,i)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class dw extends Yc{static get __EMPTY_NODE(){return fa}static set __EMPTY_NODE(e){fa=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Ei,fa)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,fa)}toString(){return".key"}}const Ki=new dw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Ft.EMPTY_NODE,this.right=s??Ft.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ft.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class I2{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,n=Ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pa(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new I2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e){return ms(t.name,e.name)}function Ld(t,e){return ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh;function A2(t){gh=t}const fw=function(t){return typeof t=="number"?"number:"+V0(t):"string:"+t},pw=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lr(e,".sv"),"Priority must be a string or number.")}else V(t===gh||t.isEmpty(),"priority of unexpected type.");V(t===gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pw(this.priorityNode_)}static set __childrenNodeConstructor(e){wm=e}static get __childrenNodeConstructor(){return wm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:pe(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=pe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=V0(this.value_):e+=this.value_,this.lazyHash_=B0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(r);return V(i>=0,"Unknown leaf type: "+n),V(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gw,mw;function R2(t){gw=t}function P2(t){mw=t}class k2 extends Yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Ei,new rt("[PRIORITY-POST]",mw))}makePost(e,n){const r=gw(e);return new ge(n,new rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ct=new k2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=Math.log(2);class N2{constructor(e){const n=s=>parseInt(Math.log(s)/O2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rc=function(t,e,n,r){t.sort(e);const i=function(a,l){const h=l-a;let f,g;if(h===0)return null;if(h===1)return f=t[a],g=n?n(f):f,new it(g,f.node,it.BLACK,null,null);{const _=parseInt(h/2,10)+a,E=i(a,_),T=i(_+1,l);return f=t[_],g=n?n(f):f,new it(g,f.node,it.BLACK,E,T)}},s=function(a){let l=null,h=null,f=t.length;const g=function(E,T){const M=f-E,A=f;f-=E;const N=i(M+1,A),L=t[M],P=n?n(L):L;_(new it(P,L.node,T,null,N))},_=function(E){l?(l.left=E,l=E):(h=E,l=E)};for(let E=0;E<a.count;++E){const T=a.nextBitIsOne(),M=Math.pow(2,a.count-(E+1));T?g(M,it.BLACK):(g(M,it.BLACK),g(M,it.RED))}return h},o=new N2(t.length),c=s(o);return new Ft(r||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu;const Oi={};class er{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(Oi&&Ct,"ChildrenNode.ts has not been loaded"),lu=lu||new er({".priority":Oi},{".priority":Ct}),lu}get(e){const n=os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ft?n:null}hasIndex(e){return lr(this.indexSet_,e.toString())}addIndex(e,n){V(e!==Ki,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ge.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let c;i?c=rc(r,e.getCompare()):c=Oi;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const h=Object.assign({},this.indexes_);return h[a]=c,new er(h,l)}addToIndexes(e,n){const r=Ka(this.indexes_,(i,s)=>{const o=os(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),i===Oi)if(o.isDefinedOn(e.node)){const c=[],a=n.getIterator(ge.Wrap);let l=a.getNext();for(;l;)l.name!==e.name&&c.push(l),l=a.getNext();return c.push(e),rc(c,o.getCompare())}else return Oi;else{const c=n.get(e.name);let a=i;return c&&(a=a.remove(new ge(e.name,c))),a.insert(e,e.node)}});return new er(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ka(this.indexes_,i=>{if(i===Oi)return i;{const s=n.get(e.name);return s?i.remove(new ge(e.name,s)):i}});return new er(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Re{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pw(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ms||(Ms=new Re(new Ft(Ld),null,er.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ms}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ms:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ge(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ms:this.priorityNode_;return new Re(i,o,s)}}updateChild(e,n){const r=pe(e);if(r===null)return n;{V(pe(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ct,(o,c)=>{n[o]=c.val(e),r++,s&&Re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const c in n)o[c]=n[c];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fw(this.getPriority().val())+":"),this.forEachChild(Ct,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":B0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ge(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===Ki||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ki||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ct),i=n.getIterator(Ct);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ki?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class D2 extends Re{constructor(){super(new Ft(Ld),Re.EMPTY_NODE,er.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const Fo=new D2;Object.defineProperties(ge,{MIN:{value:new ge(as,Re.EMPTY_NODE)},MAX:{value:new ge(Ei,Fo)}});dw.__EMPTY_NODE=Re.EMPTY_NODE;rt.__childrenNodeConstructor=Re;A2(Fo);P2(Fo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=!0;function Et(t,e=null){if(t===null)return Re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,Et(e))}if(!(t instanceof Array)&&M2){const n=[];let r=!1;if(sn(t,(o,c)=>{if(o.substring(0,1)!=="."){const a=Et(c);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new ge(o,a)))}}),n.length===0)return Re.EMPTY_NODE;const s=rc(n,S2,o=>o.name,Ld);if(r){const o=rc(n,Ct.getCompare());return new Re(s,Et(e),new er({".priority":o},{".priority":Ct}))}else return new Re(s,Et(e),er.Default)}else{let n=Re.EMPTY_NODE;return sn(t,(r,i)=>{if(lr(t,r)&&r.substring(0,1)!=="."){const s=Et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Et(e))}}R2(Et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2 extends Yc{constructor(e){super(),this.indexPath_=e,V(!ue(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}makePost(e,n){const r=Et(e),i=Re.EMPTY_NODE.updateChild(this.indexPath_,r);return new ge(n,i)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new ge(Ei,e)}toString(){return cw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2 extends Yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ms(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const r=Et(e);return new ge(n,r)}toString(){return".value"}}const $2=new L2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){return{type:"value",snapshotNode:t}}function U2(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function B2(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Em(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function j2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:as}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ct}copy(){const e=new $d;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ct?n="$priority":t.index_===$2?n="$value":t.index_===Ki?n="$key":(V(t.index_ instanceof x2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ft(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ft(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ft(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ft(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ct&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends sw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Lo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ic.getListenId_(e,r),c={};this.listens_[o]=c;const a=bm(e._queryParams);this.restRequest_(s+".json",a,(l,h)=>{let f=h;if(l===404&&(f=null,l=null),l===null&&this.onDataUpdate_(s,f,!1,r),os(this.listens_,o)===c){let g;l?l===401?g="permission_denied":g="rest_error:"+l:g="ok",i(g,null)}})}unlisten(e,n){const r=ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=bm(e._queryParams),r=e._path.toString(),i=new po;return this.restRequest_(r+".json",n,(s,o)=>{let c=o;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(r,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let a=null;if(c.status>=200&&c.status<300){try{a=go(c.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+c.responseText)}r(null,a)}else c.status!==401&&c.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+c.status),r(c.status);r=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){return{value:null,children:new Map}}function _w(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=pe(e);t.children.has(r)||t.children.set(r,sc());const i=t.children.get(r);e=Ue(e),_w(i,e,n)}}function mh(t,e,n){t.value!==null?n(e,t.value):V2(t,(r,i)=>{const s=new je(e.toString()+"/"+r);mh(i,s,n)})}function V2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&sn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=10*1e3,z2=30*1e3,K2=5*60*1e3;class q2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new W2(e);const r=Cm+(z2-Cm)*Math.random();Xs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;sn(e,(i,s)=>{s>0&&lr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*K2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function vw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ww(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=vw()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new je(e));return new oc(Me(),n,this.revert)}}else return V(pe(this.path)===e,"operationForChild called for unrelated child."),new oc(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return ue(this.path)?new bi(this.source,Me(),this.snap.getImmediateChild(e)):new bi(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new je(e));return n.isEmpty()?null:n.value?new bi(this.source,Me(),n.value):new wo(this.source,Me(),n)}else return V(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wo(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function G2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(j2(o.childName,o.snapshotNode))}),xs(t,i,"child_removed",e,r,n),xs(t,i,"child_added",e,r,n),xs(t,i,"child_moved",s,r,n),xs(t,i,"child_changed",e,r,n),xs(t,i,"value",e,r,n),i}function xs(t,e,n,r,i,s){const o=r.filter(c=>c.type===n);o.sort((c,a)=>J2(t,c,a)),o.forEach(c=>{const a=Y2(t,c,s);i.forEach(l=>{l.respondsTo(c.type)&&e.push(l.createEvent(a,t.query_))})})}function Y2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function J2(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new ge(e.childName,e.snapshotNode),i=new ge(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e){return{eventCache:t,serverCache:e}}function Qs(t,e,n,r){return Ew(new Fd(e,n,r),t.serverCache)}function bw(t,e,n,r){return Ew(t.eventCache,new Fd(e,n,r))}function _h(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;const X2=()=>(uu||(uu=new Ft(LM)),uu);class $e{constructor(e,n=X2()){this.value=e,this.children=n}static fromObject(e){let n=new $e(null);return sn(e,(r,i)=>{n=n.set(new je(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(ue(e))return null;{const r=pe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ue(e),n);return s!=null?{path:ot(new je(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=pe(e),r=this.children.get(n);return r!==null?r.subtree(Ue(e)):new $e(null)}}set(e,n){if(ue(e))return new $e(n,this.children);{const r=pe(e),s=(this.children.get(r)||new $e(null)).set(Ue(e),n),o=this.children.insert(r,s);return new $e(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=pe(e),r=this.children.get(n);if(r){const i=r.remove(Ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new $e(null):new $e(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=pe(e),r=this.children.get(n);return r?r.get(Ue(e)):null}}setTree(e,n){if(ue(e))return n;{const r=pe(e),s=(this.children.get(r)||new $e(null)).setTree(Ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $e(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ot(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=pe(e),o=this.children.get(s);return o?o.findOnPath_(Ue(e),ot(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=pe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ue(e),ot(n,i),r):new $e(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ot(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new $e(null))}}function Zs(t,e,n){if(ue(e))return new yn(new $e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tn(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new $e(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function Im(t,e,n){let r=t;return sn(n,(i,s)=>{r=Zs(r,ot(e,i),s)}),r}function Sm(t,e){if(ue(e))return yn.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new yn(n)}}function vh(t,e){return Si(t,e)!=null}function Si(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tn(n.path,e)):null}function Am(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ct,(r,i)=>{e.push(new ge(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ge(r,i.value))}),e}function Nr(t,e){if(ue(e))return t;{const n=Si(t,e);return n!=null?new yn(new $e(n)):new yn(t.writeTree_.subtree(e))}}function yh(t){return t.writeTree_.isEmpty()}function cs(t,e){return Tw(Me(),t.writeTree_,e)}function Tw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Tw(ot(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ot(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){return Pw(e,t)}function Q2(t,e,n,r,i){V(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=r}function Z2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ex(t,e){const n=t.allWrites.findIndex(c=>c.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const c=t.allWrites[o];c.visible&&(o>=n&&tx(c,r.path)?i=!1:gn(r.path,c.path)&&(s=!0)),o--}if(i){if(s)return nx(t),!0;if(r.snap)t.visibleWrites=Sm(t.visibleWrites,r.path);else{const c=r.children;sn(c,a=>{t.visibleWrites=Sm(t.visibleWrites,ot(r.path,a))})}return!0}else return!1}function tx(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(ot(t.path,n),e))return!0;return!1}function nx(t){t.visibleWrites=Iw(t.allWrites,rx,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rx(t){return t.visible}function Iw(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let c;if(s.snap)gn(n,o)?(c=tn(n,o),r=Zs(r,c,s.snap)):gn(o,n)&&(c=tn(o,n),r=Zs(r,Me(),s.snap.getChild(c)));else if(s.children){if(gn(n,o))c=tn(n,o),r=Im(r,c,s.children);else if(gn(o,n))if(c=tn(o,n),ue(c))r=Im(r,Me(),s.children);else{const a=os(s.children,pe(c));if(a){const l=a.getChild(Ue(c));r=Zs(r,Me(),l)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function Sw(t,e,n,r,i){if(!r&&!i){const s=Si(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(yh(o))return n;if(n==null&&!vh(o,Me()))return null;{const c=n||Re.EMPTY_NODE;return cs(o,c)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&yh(s))return n;if(!i&&n==null&&!vh(s,Me()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(gn(l.path,e)||gn(e,l.path))},c=Iw(t.allWrites,o,e),a=n||Re.EMPTY_NODE;return cs(c,a)}}}function ix(t,e,n){let r=Re.EMPTY_NODE;const i=Si(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ct,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(Ct,(o,c)=>{const a=cs(Nr(s,new je(o)),c);r=r.updateImmediateChild(o,a)}),Am(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return Am(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function sx(t,e,n,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ot(e,n);if(vh(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return yh(o)?i.getChild(n):cs(o,i.getChild(n))}}function ox(t,e,n,r){const i=ot(e,n),s=Si(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return cs(o,r.getNode().getImmediateChild(n))}else return null}function ax(t,e){return Si(t.visibleWrites,e)}function cx(t,e,n,r,i,s,o){let c;const a=Nr(t.visibleWrites,e),l=Si(a,Me());if(l!=null)c=l;else if(n!=null)c=cs(a,n);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const h=[],f=o.getCompare(),g=s?c.getReverseIteratorFrom(r,o):c.getIteratorFrom(r,o);let _=g.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=g.getNext();return h}else return[]}function lx(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function wh(t,e,n,r){return Sw(t.writeTree,t.treePath,e,n,r)}function Aw(t,e){return ix(t.writeTree,t.treePath,e)}function Rm(t,e,n,r){return sx(t.writeTree,t.treePath,e,n,r)}function ac(t,e){return ax(t.writeTree,ot(t.treePath,e))}function ux(t,e,n,r,i,s){return cx(t.writeTree,t.treePath,e,n,r,i,s)}function Ud(t,e,n){return ox(t.writeTree,t.treePath,e,n)}function Rw(t,e){return Pw(ot(t.treePath,e),t.writeTree)}function Pw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Em(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,B2(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,U2(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Em(r,e.snapshotNode,i.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kw=new dx;class Bd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ud(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),s=ux(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function fx(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function px(t,e,n,r,i){const s=new hx;let o,c;if(n.type===Rn.OVERWRITE){const l=n;l.source.fromUser?o=Eh(t,e,l.path,l.snap,r,i,s):(V(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ue(l.path),o=cc(t,e,l.path,l.snap,r,i,c,s))}else if(n.type===Rn.MERGE){const l=n;l.source.fromUser?o=mx(t,e,l.path,l.children,r,i,s):(V(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),o=bh(t,e,l.path,l.children,r,i,c,s))}else if(n.type===Rn.ACK_USER_WRITE){const l=n;l.revert?o=yx(t,e,l.path,r,i,s):o=_x(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Rn.LISTEN_COMPLETE)o=vx(t,e,n.path,r,s);else throw ds("Unknown operation type: "+n.type);const a=s.getChanges();return gx(e,o,a),{viewCache:o,changes:a}}function gx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_h(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(F2(_h(e)))}}function Ow(t,e,n,r,i,s){const o=e.eventCache;if(ac(r,n)!=null)return e;{let c,a;if(ue(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ti(e),h=l instanceof Re?l:Re.EMPTY_NODE,f=Aw(r,h);c=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const l=wh(r,Ti(e));c=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=pe(n);if(l===".priority"){V(Fr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const f=Rm(r,n,h,a);f!=null?c=t.filter.updatePriority(h,f):c=o.getNode()}else{const h=Ue(n);let f;if(o.isCompleteForChild(l)){a=e.serverCache.getNode();const g=Rm(r,n,o.getNode(),a);g!=null?f=o.getNode().getImmediateChild(l).updateChild(h,g):f=o.getNode().getImmediateChild(l)}else f=Ud(r,l,e.serverCache);f!=null?c=t.filter.updateChild(o.getNode(),l,f,h,i,s):c=o.getNode()}}return Qs(e,c,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function cc(t,e,n,r,i,s,o,c){const a=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(ue(n))l=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);l=h.updateFullNode(a.getNode(),_,null)}else{const _=pe(n);if(!a.isCompleteForPath(n)&&Fr(n)>1)return e;const E=Ue(n),M=a.getNode().getImmediateChild(_).updateChild(E,r);_===".priority"?l=h.updatePriority(a.getNode(),M):l=h.updateChild(a.getNode(),_,M,E,kw,null)}const f=bw(e,l,a.isFullyInitialized()||ue(n),h.filtersNodes()),g=new Bd(i,f,s);return Ow(t,f,n,i,g,c)}function Eh(t,e,n,r,i,s,o){const c=e.eventCache;let a,l;const h=new Bd(i,e,s);if(ue(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Qs(e,l,!0,t.filter.filtersNodes());else{const f=pe(n);if(f===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),a=Qs(e,l,c.isFullyInitialized(),c.isFiltered());else{const g=Ue(n),_=c.getNode().getImmediateChild(f);let E;if(ue(g))E=r;else{const T=h.getCompleteChild(f);T!=null?aw(g)===".priority"&&T.getChild(lw(g)).isEmpty()?E=T:E=T.updateChild(g,r):E=Re.EMPTY_NODE}if(_.equals(E))a=e;else{const T=t.filter.updateChild(c.getNode(),f,E,g,h,o);a=Qs(e,T,c.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Pm(t,e){return t.eventCache.isCompleteForChild(e)}function mx(t,e,n,r,i,s,o){let c=e;return r.foreach((a,l)=>{const h=ot(n,a);Pm(e,pe(h))&&(c=Eh(t,c,h,l,i,s,o))}),r.foreach((a,l)=>{const h=ot(n,a);Pm(e,pe(h))||(c=Eh(t,c,h,l,i,s,o))}),c}function km(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bh(t,e,n,r,i,s,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,l;ue(n)?l=r:l=new $e(null).setTree(n,r);const h=e.serverCache.getNode();return l.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),E=km(t,_,g);a=cc(t,a,new je(f),E,i,s,o,c)}}),l.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!_){const E=e.serverCache.getNode().getImmediateChild(f),T=km(t,E,g);a=cc(t,a,new je(f),T,i,s,o,c)}}),a}function _x(t,e,n,r,i,s,o){if(ac(i,n)!=null)return e;const c=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(ue(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return cc(t,e,n,a.getNode().getChild(n),i,s,c,o);if(ue(n)){let l=new $e(null);return a.getNode().forEachChild(Ki,(h,f)=>{l=l.set(new je(h),f)}),bh(t,e,n,l,i,s,c,o)}else return e}else{let l=new $e(null);return r.foreach((h,f)=>{const g=ot(n,h);a.isCompleteForPath(g)&&(l=l.set(h,a.getNode().getChild(g)))}),bh(t,e,n,l,i,s,c,o)}}function vx(t,e,n,r,i){const s=e.serverCache,o=bw(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return Ow(t,o,n,r,kw,i)}function yx(t,e,n,r,i,s){let o;if(ac(r,n)!=null)return e;{const c=new Bd(r,e,i),a=e.eventCache.getNode();let l;if(ue(n)||pe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=wh(r,Ti(e));else{const f=e.serverCache.getNode();V(f instanceof Re,"serverChildren would be complete if leaf node"),h=Aw(r,f)}h=h,l=t.filter.updateFullNode(a,h,s)}else{const h=pe(n);let f=Ud(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=a.getImmediateChild(h)),f!=null?l=t.filter.updateChild(a,h,f,Ue(n),c,s):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(a,h,Re.EMPTY_NODE,Ue(n),c,s):l=a,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wh(r,Ti(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||ac(r,Me())!=null,Qs(e,l,o,t.filter.filtersNodes())}}function wx(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function Om(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&(V(Ti(t.viewCache_),"We should always have a full cache before handling merges"),V(_h(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=px(t.processor_,i,e,n,r);return fx(t.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ex(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ex(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return G2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm;function bx(t){V(!Nm,"__referenceConstructor has already been defined"),Nm=t}function jd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return V(s!=null,"SyncTree gave us an op for an invalid query."),Om(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Om(o,e,n,r));return s}}function Hd(t,e){let n=null;for(const r of t.views.values())n=n||wx(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm;function Tx(t){V(!Dm,"__referenceConstructor has already been defined"),Dm=t}class Mm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=lx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cx(t,e,n,r,i){return Q2(t.pendingWriteTree_,e,n,r,i),i?Xc(t,new bi(vw(),e,n)):[]}function Li(t,e,n=!1){const r=Z2(t.pendingWriteTree_,e);if(ex(t.pendingWriteTree_,e)){let s=new $e(null);return r.snap!=null?s=s.set(Me(),!0):sn(r.children,o=>{s=s.set(new je(o),!0)}),Xc(t,new oc(r.path,s,n))}else return[]}function Jc(t,e,n){return Xc(t,new bi(yw(),e,n))}function Ix(t,e,n){const r=$e.fromObject(n);return Xc(t,new wo(yw(),e,r))}function Sx(t,e,n,r){const i=xw(t,r);if(i!=null){const s=Lw(i),o=s.path,c=s.queryId,a=tn(o,e),l=new bi(ww(c),a,n);return $w(t,o,l)}else return[]}function Ax(t,e,n,r){const i=xw(t,r);if(i){const s=Lw(i),o=s.path,c=s.queryId,a=tn(o,e),l=$e.fromObject(n),h=new wo(ww(c),a,l);return $w(t,o,h)}else return[]}function Nw(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,c)=>{const a=tn(o,e),l=Hd(c,a);if(l)return l});return Sw(i,e,s,n,!0)}function Xc(t,e){return Dw(e,t.syncPointTree_,null,Cw(t.pendingWriteTree_,Me()))}function Dw(t,e,n,r){if(ue(t.path))return Mw(t,e,n,r);{const i=e.get(Me());n==null&&i!=null&&(n=Hd(i,Me()));let s=[];const o=pe(t.path),c=t.operationForChild(o),a=e.children.get(o);if(a&&c){const l=n?n.getImmediateChild(o):null,h=Rw(r,o);s=s.concat(Dw(c,a,l,h))}return i&&(s=s.concat(jd(i,t,r,n))),s}}function Mw(t,e,n,r){const i=e.get(Me());n==null&&i!=null&&(n=Hd(i,Me()));let s=[];return e.children.inorderTraversal((o,c)=>{const a=n?n.getImmediateChild(o):null,l=Rw(r,o),h=t.operationForChild(o);h&&(s=s.concat(Mw(h,c,a,l)))}),i&&(s=s.concat(jd(i,t,r,n))),s}function xw(t,e){return t.tagToQueryMap.get(e)}function Lw(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new je(t.substr(0,e))}}function $w(t,e,n){const r=t.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const i=Cw(t.pendingWriteTree_,e);return jd(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vd(n)}node(){return this.node_}}class Wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ot(this.path_,e);return new Wd(this.syncTree_,n)}node(){return Nw(this.syncTree_,this.path_)}}const Rx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xm=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Px(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kx(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Px=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},kx=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ox=function(t,e,n,r){return zd(e,new Wd(n,t),r)},Nx=function(t,e,n){return zd(t,new Vd(e),n)};function zd(t,e,n){const r=t.getPriority().val(),i=xm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,c=xm(o.getValue(),e,n);return c!==o.getValue()||i!==o.getPriority().val()?new rt(c,Et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new rt(i))),o.forEachChild(Ct,(c,a)=>{const l=zd(a,e.getImmediateChild(c),n);l!==a&&(s=s.updateImmediateChild(c,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qd(t,e){let n=e instanceof je?e:new je(e),r=t,i=pe(n);for(;i!==null;){const s=os(r.node.children,i)||{children:{},childCount:0};r=new Kd(i,r,s),n=Ue(n),i=pe(n)}return r}function _s(t){return t.node.value}function Fw(t,e){t.node.value=e,Th(t)}function Uw(t){return t.node.childCount>0}function Dx(t){return _s(t)===void 0&&!Uw(t)}function Qc(t,e){sn(t.node.children,(n,r)=>{e(new Kd(n,t,r))})}function Bw(t,e,n,r){n&&!r&&e(t),Qc(t,i=>{Bw(i,e,!0,r)}),n&&r&&e(t)}function Mx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uo(t){return new je(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function Th(t){t.parent!==null&&xx(t.parent,t.name,t)}function xx(t,e,n){const r=Dx(n),i=lr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Th(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Th(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=/[\[\].#$\/\u0000-\u001F\u007F]/,$x=/[\[\].#$\u0000-\u001F\u007F]/,hu=10*1024*1024,jw=function(t){return typeof t=="string"&&t.length!==0&&!Lx.test(t)},Fx=function(t){return typeof t=="string"&&t.length!==0&&!$x.test(t)},Ux=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fx(t)},Hw=function(t,e,n){const r=n instanceof je?new v2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xr(r)+" with contents = "+e.toString());if(j0(e))throw new Error(t+"contains "+e.toString()+" "+Xr(r));if(typeof e=="string"&&e.length>hu/3&&Hc(e)>hu)throw new Error(t+"contains a string greater than "+hu+" utf8 bytes "+Xr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(sn(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);y2(r,o),Hw(t,c,r),w2(r)}),i&&s)throw new Error(t+' contains ".value" child '+Xr(r)+" in addition to actual children.")}},Bx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ux(n))throw new Error(jk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hx(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!uw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ai(t,e,n){Hx(t,n),Vx(t,r=>gn(r,e)||gn(e,r))}function Vx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Wx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Wx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();di&&wt("event: "+n.toString()),$o(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="repo_interrupt",Kx=25;class qx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sc(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gx(t,e,n){if(t.stats_=Dd(t.repoInfo_),t.forceRestClient_||HM())t.server_=new ic(t.repoInfo_,(r,i,s,o)=>{Lm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$m(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nr(t.repoInfo_,e,(r,i,s,o)=>{Lm(t,r,i,s,o)},r=>{$m(t,r)},r=>{Jx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GM(t.repoInfo_,()=>new q2(t.stats_,t.server_)),t.infoData_=new H2,t.infoSyncTree_=new Mm({startListening:(r,i,s,o)=>{let c=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(c=Jc(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Gd(t,"connected",!1),t.serverSyncTree_=new Mm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(c,a)=>{const l=o(c,a);Ai(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Yx(t){const n=t.infoData_.getNode(new je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vw(t){return Rx({timestamp:Yx(t)})}function Lm(t,e,n,r,i){t.dataUpdateCount++;const s=new je(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ka(n,l=>Et(l));o=Ax(t.serverSyncTree_,s,a,i)}else{const a=Et(n);o=Sx(t.serverSyncTree_,s,a,i)}else if(r){const a=Ka(n,l=>Et(l));o=Ix(t.serverSyncTree_,s,a)}else{const a=Et(n);o=Jc(t.serverSyncTree_,s,a)}let c=s;o.length>0&&(c=Jd(t,s)),Ai(t.eventQueue_,c,o)}function $m(t,e){Gd(t,"connected",e),e===!1&&Qx(t)}function Jx(t,e){sn(e,(n,r)=>{Gd(t,n,r)})}function Gd(t,e,n){const r=new je("/.info/"+e),i=Et(n);t.infoData_.updateSnapshot(r,i);const s=Jc(t.infoSyncTree_,r,i);Ai(t.eventQueue_,r,s)}function Xx(t){return t.nextWriteId_++}function Qx(t){Ww(t,"onDisconnectEvents");const e=Vw(t),n=sc();mh(t.onDisconnect_,Me(),(i,s)=>{const o=Ox(i,s,t.serverSyncTree_,e);_w(n,i,o)});let r=[];mh(n,Me(),(i,s)=>{r=r.concat(Jc(t.serverSyncTree_,i,s));const o=nL(t,i);Jd(t,o)}),t.onDisconnect_=sc(),Ai(t.eventQueue_,Me(),r)}function Zx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zx)}function Ww(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function zw(t,e,n){return Nw(t.serverSyncTree_,e,n)||Re.EMPTY_NODE}function Yd(t,e=t.transactionQueueTree_){if(e||Zc(t,e),_s(e)){const n=qw(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eL(t,Uo(e),n)}else Uw(e)&&Qc(e,n=>{Yd(t,n)})}function eL(t,e,n){const r=n.map(l=>l.currentWriteId),i=zw(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const h=n[l];V(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=tn(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const c=s.val(!0),a=e;t.server_.put(a.toString(),c,l=>{Ww(t,"transaction put response",{path:a.toString(),status:l});let h=[];if(l==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(Li(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Zc(t,qd(t.transactionQueueTree_,e)),Yd(t,t.transactionQueueTree_),Ai(t.eventQueue_,e,h);for(let g=0;g<f.length;g++)$o(f[g])}else{if(l==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yt("transaction at "+a.toString()+" failed: "+l);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=l}Jd(t,e)}},o)}function Jd(t,e){const n=Kw(t,e),r=Uo(n),i=qw(t,n);return tL(t,i,r),r}function tL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const a=e[c],l=tn(n,a.path);let h=!1,f;if(V(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,f=a.abortReason,i=i.concat(Li(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Kx)h=!0,f="maxretry",i=i.concat(Li(t.serverSyncTree_,a.currentWriteId,!0));else{const g=zw(t,a.path,o);a.currentInputSnapshot=g;const _=e[c].update(g.val());if(_!==void 0){Hw("transaction failed: Data returned ",_,a.path);let E=Et(_);typeof _=="object"&&_!=null&&lr(_,".priority")||(E=E.updatePriority(g.getPriority()));const M=a.currentWriteId,A=Vw(t),N=Nx(E,g,A);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=N,a.currentWriteId=Xx(t),o.splice(o.indexOf(M),1),i=i.concat(Cx(t.serverSyncTree_,a.path,N,a.currentWriteId,a.applyLocally)),i=i.concat(Li(t.serverSyncTree_,M,!0))}else h=!0,f="nodata",i=i.concat(Li(t.serverSyncTree_,a.currentWriteId,!0))}Ai(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(g){setTimeout(g,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(f==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(f),!1,null))))}Zc(t,t.transactionQueueTree_);for(let c=0;c<r.length;c++)$o(r[c]);Yd(t,t.transactionQueueTree_)}function Kw(t,e){let n,r=t.transactionQueueTree_;for(n=pe(e);n!==null&&_s(r)===void 0;)r=qd(r,n),e=Ue(e),n=pe(e);return r}function qw(t,e){const n=[];return Gw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Gw(t,e,n){const r=_s(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qc(e,i=>{Gw(t,i,n)})}function Zc(t,e){const n=_s(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Fw(e,n.length>0?n:void 0)}Qc(e,r=>{Zc(t,r)})}function nL(t,e){const n=Uo(Kw(t,e)),r=qd(t.transactionQueueTree_,e);return Mx(r,i=>{du(t,i)}),du(t,r),Bw(r,i=>{du(t,i)}),n}function du(t,e){const n=_s(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Li(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Fw(e,void 0):n.length=s+1,Ai(t.eventQueue_,Uo(e),i);for(let o=0;o<r.length;o++)$o(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fm=function(t,e){const n=sL(t),r=n.namespace;n.domain==="firebase.com"&&wi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zM(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new je(n.pathString)}},sL=function(t){let e="",n="",r="",i="",s="",o=!0,c="https",a=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(c=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=rL(t.substring(h,f)));const g=iL(t.substring(Math.min(t.length,f)));l=e.indexOf(":"),l>=0?(o=c==="https"||c==="wss",a=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:c,pathString:i,namespace:s}};/**
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
 */class Xd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:aw(this._path)}get ref(){return new vs(this._repo,this._path)}get _queryIdentifier(){const e=Tm(this._queryParams),n=Od(e);return n==="{}"?"default":n}get _queryObject(){return Tm(this._queryParams)}isEqual(e){if(e=jr(e),!(e instanceof Xd))return!1;const n=this._repo===e._repo,r=uw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_2(this._path)}}class vs extends Xd{constructor(e,n){super(e,n,new $d,!1)}get parent(){const e=lw(this._path);return e===null?null:new vs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bx(vs);Tx(vs);/**
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
 */const oL="FIREBASE_DATABASE_EMULATOR_HOST",Ch={};let aL=!1;function cL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||wi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fm(s,i),c=o.repoInfo,a,l;typeof process<"u"&&process.env&&(l=process.env[oL]),l?(a=!0,s=`http://${l}?ns=${c.namespace}`,o=Fm(s,i),c=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new fh(fh.OWNER):new WM(t.name,t.options,e);Bx("Invalid Firebase Database URL",o),ue(o.path)||wi("Database URL must point to the root of a Firebase Database (not including a child path).");const f=uL(c,t,h,new VM(t.name,n));return new hL(f,t)}function lL(t,e){const n=Ch[e];(!n||n[t.key]!==t)&&wi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Zx(t),delete n[t.key]}function uL(t,e,n,r){let i=Ch[e.name];i||(i={},Ch[e.name]=i);let s=i[t.toURLString()];return s&&wi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qx(t,aL,n,r),i[t.toURLString()]=s,s}class hL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vs(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function dL(t){PM(Hr),jt(new Dt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return cL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mt(sm,om,t),mt(sm,om,"esm2017")}nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dL();var fL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W,Qd=Qd||{},ie=fL||self;function el(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pL(t){return Object.prototype.hasOwnProperty.call(t,fu)&&t[fu]||(t[fu]=++gL)}var fu="closure_uid_"+(1e9*Math.random()>>>0),gL=0;function mL(t,e,n){return t.call.apply(t.bind,arguments)}function _L(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=mL:It=_L,It.apply(null,arguments)}function ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[i].apply(r,o)}}function Vr(){this.s=this.s,this.o=this.o}var vL=0;Vr.prototype.s=!1;Vr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vL!=0)&&pL(this)};Vr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Um(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(el(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var yL=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",()=>{},e),ie.removeEventListener("test",()=>{},e)}catch{}return t}();function Eo(t){return/^[\s\xa0]*$/.test(t)}function tl(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return tl().indexOf(t)!=-1}function ef(t){return ef[" "](t),t}ef[" "]=function(){};function wL(t,e){var n=f$;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var EL=Sn("Opera"),bo=Sn("Trident")||Sn("MSIE"),Jw=Sn("Edge"),Ih=Jw||bo,Xw=Sn("Gecko")&&!(tl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),bL=tl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function Qw(){var t=ie.document;return t?t.documentMode:void 0}e:{var Bm="",pu=function(){var t=tl();if(Xw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jw)return/Edge\/([\d\.]+)/.exec(t);if(bo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bL)return/WebKit\/(\S+)/.exec(t);if(EL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pu&&(Bm=pu?pu[1]:""),bo){var jm=Qw();if(jm!=null&&jm>parseFloat(Bm))break e}}ie.document&&bo&&Qw();function To(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xw){e:{try{ef(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&To.$.h.call(this)}}ut(To,St);var TL={2:"touch",3:"pen",4:"mouse"};To.prototype.h=function(){To.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jo="closure_listenable_"+(1e6*Math.random()|0),CL=0;function IL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++CL,this.fa=this.ia=!1}function nl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function SL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zw(t){const e={};for(const n in t)e[n]=t[n];return e}const Hm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Hm.length;s++)n=Hm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rl(t){this.src=t,this.g={},this.h=0}rl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ah(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new IL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Yw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ah(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var nf="closure_lm_"+(1e6*Math.random()|0),gu={};function tE(t,e,n,r,i){if(r&&r.once)return rE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tE(t,e[s],n,r,i);return null}return n=of(n),t&&t[jo]?t.O(e,n,Bo(r)?!!r.capture:!!r,i):nE(t,e,n,!1,r,i)}function nE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Bo(i)?!!i.capture:!!i,c=sf(t);if(c||(t[nf]=c=new rl(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=AL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)yL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AL(){function t(n){return e.call(t.src,t.listener,n)}const e=RL;return t}function rE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rE(t,e[s],n,r,i);return null}return n=of(n),t&&t[jo]?t.P(e,n,Bo(r)?!!r.capture:!!r,i):nE(t,e,n,!0,r,i)}function iE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iE(t,e[s],n,r,i);else r=Bo(r)?!!r.capture:!!r,n=of(n),t&&t[jo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ah(s,n,r,i),-1<n&&(nl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=sf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ah(e,n,r,i)),(n=-1<t?e[t]:null)&&rf(n))}function rf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[jo])Sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=sf(e))?(Sh(n,t),n.h==0&&(n.src=null,e[nf]=null)):nl(t)}}}function sE(t){return t in gu?gu[t]:gu[t]="on"+t}function RL(t,e){if(t.fa)t=!0;else{e=new To(e,this);var n=t.listener,r=t.la||t.src;t.ia&&rf(t),t=n.call(r,e)}return t}function sf(t){return t=t[nf],t instanceof rl?t:null}var mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function of(t){return typeof t=="function"?t:(t[mu]||(t[mu]=function(e){return t.handleEvent(e)}),t[mu])}function lt(){Vr.call(this),this.i=new rl(this),this.S=this,this.J=null}ut(lt,Vr);lt.prototype[jo]=!0;lt.prototype.removeEventListener=function(t,e,n,r){iE(this,t,e,n,r)};function _t(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),eE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ma(o,r,!0,e)&&i}if(o=e.g=t,i=ma(o,r,!0,e)&&i,i=ma(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ma(o,r,!1,e)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nl(n[r]);delete t.g[e],t.h--}}this.J=null};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ma(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var c=o.listener,a=o.la||o.src;o.ia&&Sh(t.i,o),i=c.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var af=ie.JSON.stringify;class PL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kL(){var t=cf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OL{constructor(){this.h=this.g=null}add(e,n){const r=oE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oE=new PL(()=>new NL,t=>t.reset());class NL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ML(t){ie.setTimeout(()=>{throw t},0)}let Co,Io=!1,cf=new OL,aE=()=>{const t=ie.Promise.resolve(void 0);Co=()=>{t.then(xL)}};var xL=()=>{for(var t;t=kL();){try{t.h.call(t.g)}catch(n){ML(n)}var e=oE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Io=!1};function il(t,e){lt.call(this),this.h=t||1,this.g=e||ie,this.j=It(this.qb,this),this.l=Date.now()}ut(il,lt);W=il.prototype;W.ga=!1;W.T=null;W.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(lf(this),this.start()))}};W.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}W.N=function(){il.$.N.call(this),lf(this),delete this.g};function uf(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function cE(t){t.g=uf(()=>{t.g=null,t.i&&(t.i=!1,cE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LL extends Vr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cE(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function So(t){Vr.call(this),this.h=t,this.g={}}ut(So,Vr);var Vm=[];function lE(t,e,n,r){Array.isArray(n)||(n&&(Vm[0]=n.toString()),n=Vm);for(var i=0;i<n.length;i++){var s=tE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uE(t){tf(t.g,function(e,n){this.g.hasOwnProperty(n)&&rf(e)},t),t.g={}}So.prototype.N=function(){So.$.N.call(this),uE(this)};So.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sl(){this.g=!0}sl.prototype.Ea=function(){this.g=!1};function $L(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",c=s.split("&"),a=0;a<c.length;a++){var l=c[a].split("=");if(1<l.length){var h=l[0];l=l[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $i(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BL(t,n)+(r?" "+r:"")})}function UL(t,e){t.info(function(){return"TIMEOUT: "+e})}sl.prototype.info=function(){};function BL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return af(n)}catch{return e}}var ys={},Wm=null;function hf(){return Wm=Wm||new lt}ys.Ta="serverreachability";function hE(t){St.call(this,ys.Ta,t)}ut(hE,St);function Ao(t){const e=hf();_t(e,new hE(e))}ys.STAT_EVENT="statevent";function dE(t,e){St.call(this,ys.STAT_EVENT,t),this.stat=e}ut(dE,St);function Nt(t){const e=hf();_t(e,new dE(e,t))}ys.Ua="timingevent";function fE(t,e){St.call(this,ys.Ua,t),this.size=e}ut(fE,St);function Ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var df={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jL={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ff(){}ff.prototype.h=null;function zm(t){return t.h||(t.h=t.i())}function HL(){}var Vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pf(){St.call(this,"d")}ut(pf,St);function gf(){St.call(this,"c")}ut(gf,St);var Rh;function ol(){}ut(ol,ff);ol.prototype.g=function(){return new XMLHttpRequest};ol.prototype.i=function(){return{}};Rh=new ol;function Wo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new So(this),this.P=VL,t=Ih?125:void 0,this.V=new il(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pE}function pE(){this.i=null,this.g="",this.h=!1}var VL=45e3,Ph={},lc={};W=Wo.prototype;W.setTimeout=function(t){this.P=t};function kh(t,e,n){t.L=1,t.v=cl(sr(e)),t.s=n,t.S=!0,gE(t,null)}function gE(t,e){t.G=Date.now(),zo(t),t.A=sr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),TE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new pE,t.g=WE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new LL(It(t.Pa,t,t.g),t.O)),lE(t.U,t.g,"readystatechange",t.nb),e=t.I?Zw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ao(),$L(t.j,t.u,t.A,t.m,t.W,t.s)}W.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};W.Pa=function(t){try{if(t==this.g)e:{const h=Pn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>h)&&(h!=3||Ih||this.g&&(this.h.h||this.g.ja()||Ym(this.g)))){this.J||h!=4||e==7||(e==8||0>=f?Ao(3):Ao(2)),al(this);var n=this.g.da();this.ca=n;t:if(mE(this)){var r=Ym(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),eo(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,FL(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,a=this.g;if((c=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eo(c)){var l=c;break t}}l=null}if(n=l)$i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oh(this,n);else{this.i=!1,this.o=3,Nt(12),ii(this),eo(this);break e}}this.S?(_E(this,h,o),Ih&&this.i&&h==3&&(lE(this.U,this.V,"tick",this.mb),this.V.start())):($i(this.j,this.m,o,null),Oh(this,o)),h==4&&ii(this),this.i&&!this.J&&(h==4?BE(this.l,this):(this.i=!1,zo(this)))}else u$(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),ii(this),eo(this)}}}catch{}finally{}};function mE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _E(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=WL(t,n),i==lc){e==4&&(t.o=4,Nt(14),r=!1),$i(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ph){t.o=4,Nt(15),$i(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $i(t.j,t.m,i,null),Oh(t,i);mE(t)&&i!=lc&&i!=Ph&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ef(e),e.M=!0,Nt(11))):($i(t.j,t.m,n,"[Invalid Chunked Response]"),ii(t),eo(t))}W.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(al(this),_E(this,t,e),this.i&&t!=4&&zo(this))}};function WL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lc:(n=Number(e.substring(n,r)),isNaN(n)?Ph:(r+=1,r+n>e.length?lc:(e=e.slice(r,r+n),t.C=r+n,e)))}W.cancel=function(){this.J=!0,ii(this)};function zo(t){t.Y=Date.now()+t.P,vE(t,t.P)}function vE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ho(It(t.lb,t),e)}function al(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}W.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(UL(this.j,this.A),this.L!=2&&(Ao(),Nt(17)),ii(this),this.o=2,eo(this)):vE(this,this.Y-t)};function eo(t){t.l.H==0||t.J||BE(t.l,t)}function ii(t){al(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,lf(t.V),uE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nh(n.i,t))){if(!t.K&&Nh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)dc(n),dl(n);else break e;wf(n),Nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ho(It(n.ib,n),6e3));if(1>=SE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else si(n,11)}else if((t.K||n.g==t)&&dc(n),!Eo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const _=t.g;if(_){const E=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mf(s,s.h),s.h=null))}if(r.F){const T=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Be(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=VE(r,r.J?r.pa:null,r.Y),o.K){AE(r.i,o);var c=o,a=r.L;a&&c.setTimeout(a),c.B&&(al(c),zo(c)),r.g=o}else FE(r);0<n.j.length&&fl(n)}else l[0]!="stop"&&l[0]!="close"||si(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?si(n,7):yf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ao(4)}catch{}}function zL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(el(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(el(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function yE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(el(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KL(t),r=zL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var wE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fi){this.h=t.h,uc(this,t.j),this.s=t.s,this.g=t.g,hc(this,t.m),this.l=t.l;var e=t.i,n=new Ro;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Km(this,n),this.o=t.o}else t&&(e=String(t).match(wE))?(this.h=!1,uc(this,e[1]||"",!0),this.s=Hs(e[2]||""),this.g=Hs(e[3]||"",!0),hc(this,e[4]),this.l=Hs(e[5]||"",!0),Km(this,e[6]||"",!0),this.o=Hs(e[7]||"")):(this.h=!1,this.i=new Ro(null,this.h))}fi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,qm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,qm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?JL:YL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,QL)),t.join("")};function sr(t){return new fi(t)}function uc(t,e,n){t.j=n?Hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Km(t,e,n){e instanceof Ro?(t.i=e,ZL(t.i,t.h)):(n||(e=Vs(e,XL)),t.i=new Ro(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function cl(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qm=/[#\/\?@]/g,YL=/[#\?:]/g,JL=/[#\?]/g,XL=/[#\?@]/g,QL=/#/g;function Ro(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wr(t){t.g||(t.g=new Map,t.h=0,t.i&&qL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=Ro.prototype;W.add=function(t,e){Wr(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EE(t,e){Wr(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bE(t,e){return Wr(t),e=ws(t,e),t.g.has(e)}W.forEach=function(t,e){Wr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};W.ta=function(){Wr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};W.Z=function(t){Wr(this);let e=[];if(typeof t=="string")bE(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return Wr(this),this.i=null,t=ws(this,t),bE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function TE(t,e,n){EE(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),Zd(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZL(t,e){e&&!t.j&&(Wr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EE(this,r),TE(this,i,n))},t)),t.j=e}var e$=class{constructor(t,e){this.g=t,this.map=e}};function CE(t){this.l=t||t$,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var t$=10;function IE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function SE(t){return t.h?1:t.g?t.g.size:0}function Nh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mf(t,e){t.g?t.g.add(e):t.h=e}function AE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}CE.prototype.cancel=function(){if(this.i=RE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zd(t.i)}var n$=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function r$(){this.g=new n$}function i$(t,e,n){const r=n||"";try{yE(t,function(i,s){let o=i;Bo(i)&&(o=af(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function s$(t,e){const n=new sl;if(ie.Image){const r=new Image;r.onload=ga(_a,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ga(_a,n,r,"TestLoadImage: error",!1,e),r.onabort=ga(_a,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ga(_a,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _a(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ll(t){this.l=t.fc||null,this.j=t.ob||!1}ut(ll,ff);ll.prototype.g=function(){return new ul(this.l,this.j)};ll.prototype.i=function(t){return function(){return t}}({});function ul(t,e){lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_f,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(ul,lt);var _f=0;W=ul.prototype;W.open=function(t,e){if(this.readyState!=_f)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Po(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=_f};W.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;PE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function PE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}W.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ko(this):Po(this),this.readyState==3&&PE(this)}};W.Za=function(t){this.g&&(this.response=this.responseText=t,Ko(this))};W.Ya=function(t){this.g&&(this.response=t,Ko(this))};W.ka=function(){this.g&&Ko(this)};function Ko(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Po(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var o$=ie.JSON.parse;function Ge(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kE,this.L=this.M=!1}ut(Ge,lt);var kE="",a$=/^https?$/i,c$=["POST","PUT"];W=Ge.prototype;W.Oa=function(t){this.M=t};W.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rh.g(),this.C=this.u?zm(this.u):zm(Rh),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Gm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Yw(c$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{DE(this),0<this.B&&((this.L=l$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=uf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gm(this,s)}};function l$(t){return bo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.ua=function(){typeof Qd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function Gm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,OE(t),hl(t)}function OE(t){t.F||(t.F=!0,_t(t,"complete"),_t(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),hl(this))};W.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hl(this,!0)),Ge.$.N.call(this)};W.La=function(){this.s||(this.G||this.v||this.l?NE(this):this.kb())};W.kb=function(){NE(this)};function NE(t){if(t.h&&typeof Qd<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)uf(t.La,0,t);else if(_t(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(wE)[1]||null;!i&&ie.self&&ie.self.location&&(i=ie.self.location.protocol.slice(0,-1)),r=!a$.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var s=2<Pn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",OE(t)}}finally{hl(t)}}}}function hl(t,e){if(t.g){DE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function DE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}W.isActive=function(){return!!this.g};function Pn(t){return t.g?t.g.readyState:0}W.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};W.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),o$(e)}};function Ym(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function u$(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Eo(t[r]))continue;var n=DL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}SL(e,function(r){return r.join(", ")})}W.Ia=function(){return this.m};W.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ME(t){let e="";return tf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ME(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Be(t,e,n))}function Ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xE(t){this.Ga=0,this.j=[],this.l=new sl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ls("baseRetryDelayMs",5e3,t),this.hb=Ls("retryDelaySeedMs",1e4,t),this.eb=Ls("forwardChannelMaxRetries",2,t),this.xa=Ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new CE(t&&t.concurrentRequestLimit),this.Ja=new r$,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}W=xE.prototype;W.ra=8;W.H=1;function yf(t){if(LE(t),t.H==3){var e=t.W++,n=sr(t.I);if(Be(n,"SID",t.K),Be(n,"RID",e),Be(n,"TYPE","terminate"),qo(t,n),e=new Wo(t,t.l,e),e.L=2,e.v=cl(sr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=WE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zo(e)}HE(t)}function dl(t){t.g&&(Ef(t),t.g.cancel(),t.g=null)}function LE(t){dl(t),t.u&&(ie.clearTimeout(t.u),t.u=null),dc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function fl(t){if(!IE(t.i)&&!t.m){t.m=!0;var e=t.Na;Co||aE(),Io||(Co(),Io=!0),cf.add(e,t),t.C=0}}function h$(t,e){return SE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ho(It(t.Na,t,e),jE(t,t.C)),t.C++,!0)}W.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Zw(s),eE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$E(this,i,e),n=sr(this.I),Be(n,"RID",t),Be(n,"CVER",22),this.F&&Be(n,"X-HTTP-Session-Id",this.F),qo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ME(s)))+"&"+e:this.o&&vf(n,this.o,s)),mf(this.i,i),this.bb&&Be(n,"TYPE","init"),this.P?(Be(n,"$req",e),Be(n,"SID","null"),i.aa=!0,kh(i,n,null)):kh(i,n,e),this.H=2}}else this.H==3&&(t?Jm(this,t):this.j.length==0||IE(this.i)||Jm(this))};function Jm(t,e){var n;e?n=e.m:n=t.W++;const r=sr(t.I);Be(r,"SID",t.K),Be(r,"RID",n),Be(r,"AID",t.V),qo(t,r),t.o&&t.s&&vf(r,t.o,t.s),n=new Wo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$E(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mf(t.i,n),kh(n,r,e)}function qo(t,e){t.na&&tf(t.na,function(n,r){Be(e,r,n)}),t.h&&yE({},function(n,r){Be(e,r,n)})}function $E(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let c=!0;for(let a=0;a<n;a++){let l=i[a].g;const h=i[a].map;if(l-=s,0>l)s=Math.max(0,i[a].g-100),c=!1;else try{i$(h,o,"req"+l+"_")}catch{r&&r(h)}}if(c){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function FE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Co||aE(),Io||(Co(),Io=!0),cf.add(e,t),t.A=0}}function wf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ho(It(t.Ma,t),jE(t,t.A)),t.A++,!0)}W.Ma=function(){if(this.u=null,UE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ho(It(this.jb,this),t)}};W.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),dl(this),UE(this))};function Ef(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function UE(t){t.g=new Wo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sr(t.wa);Be(e,"RID","rpc"),Be(e,"SID",t.K),Be(e,"AID",t.V),Be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Be(e,"TO",t.qa),Be(e,"TYPE","xmlhttp"),qo(t,e),t.o&&t.s&&vf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cl(sr(e)),n.s=null,n.S=!0,gE(n,t)}W.ib=function(){this.v!=null&&(this.v=null,dl(this),wf(this),Nt(19))};function dc(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function BE(t,e){var n=null;if(t.g==e){dc(t),Ef(t),t.g=null;var r=2}else if(Nh(t.i,e))n=e.F,AE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=hf(),_t(r,new fE(r,n)),fl(t)}else FE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&h$(t,e)||r==2&&wf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:si(t,5);break;case 4:si(t,10);break;case 3:si(t,6);break;default:si(t,2)}}}function jE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function si(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new fi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||uc(n,"https"),cl(n)),s$(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),HE(t),LE(t)}W.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function HE(t){if(t.H=0,t.ma=[],t.h){const e=RE(t.i);(e.length!=0||t.j.length!=0)&&(Um(t.ma,e),Um(t.ma,t.j),t.i.i.length=0,Zd(t.j),t.j.length=0),t.h.ya()}}function VE(t,e,n){var r=n instanceof fi?sr(n):new fi(n);if(r.g!="")e&&(r.g=e+"."+r.g),hc(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fi(null);r&&uc(s,r),e&&(s.g=e),i&&hc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Be(r,n,e),Be(r,"VER",t.ra),qo(t,r),r}function WE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ge(new ll({ob:!0})):new Ge(t.va),e.Oa(t.J),e}W.isActive=function(){return!!this.h&&this.h.isActive(this)};function zE(){}W=zE.prototype;W.Ba=function(){};W.Aa=function(){};W.za=function(){};W.ya=function(){};W.isActive=function(){return!0};W.Va=function(){};function on(t,e){lt.call(this),this.g=new xE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Es(this)}ut(on,lt);on.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=VE(t,null,t.Y),fl(t)};on.prototype.close=function(){yf(this.g)};on.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=af(t),t=n);e.j.push(new e$(e.fb++,t)),e.H==3&&fl(e)};on.prototype.N=function(){this.g.h=null,delete this.j,yf(this.g),delete this.g,on.$.N.call(this)};function KE(t){pf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(KE,pf);function qE(){gf.call(this),this.status=1}ut(qE,gf);function Es(t){this.g=t}ut(Es,zE);Es.prototype.Ba=function(){_t(this.g,"a")};Es.prototype.Aa=function(t){_t(this.g,new KE(t))};Es.prototype.za=function(t){_t(this.g,new qE)};Es.prototype.ya=function(){_t(this.g,"b")};function d$(){this.blockSize=-1}function Ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(Ln,d$);Ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _u(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_u(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_u(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_u(this,r),i=0;break}}this.h=i,this.i+=e};Ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var f$={};function bf(t){return-128<=t&&128>t?wL(t,function(e){return new Oe([e|0],0>e?-1:0)}):new Oe([t|0],0>t?-1:0)}function kn(t){if(isNaN(t)||!isFinite(t))return qi;if(0>t)return dt(kn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dh;return new Oe(e,0)}function GE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return dt(GE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kn(Math.pow(e,8)),r=qi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=kn(Math.pow(e,s)),r=r.R(s).add(kn(o))):(r=r.R(n),r=r.add(kn(o)))}return r}var Dh=4294967296,qi=bf(0),Mh=bf(1),Xm=bf(16777216);W=Oe.prototype;W.ea=function(){if(en(this))return-dt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dh+r)*e,e*=Dh}return t};W.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tr(this))return"0";if(en(this))return"-"+dt(this).toString(t);for(var e=kn(Math.pow(t,6)),n=this,r="";;){var i=pc(n,e).g;n=fc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};W.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}W.X=function(t){return t=fc(this,t),en(t)?-1:tr(t)?0:1};function dt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Oe(n,~t.h).add(Mh)}W.abs=function(){return en(this)?dt(this):this};W.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Oe(n,n[n.length-1]&-2147483648?-1:0)};function fc(t,e){return t.add(dt(e))}W.R=function(t){if(tr(this)||tr(t))return qi;if(en(this))return en(t)?dt(this).R(dt(t)):dt(dt(this).R(t));if(en(t))return dt(this.R(dt(t)));if(0>this.X(Xm)&&0>t.X(Xm))return kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,c=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,va(n,2*r+2*i),n[2*r+2*i+1]+=s*a,va(n,2*r+2*i+1),n[2*r+2*i+1]+=o*c,va(n,2*r+2*i+1),n[2*r+2*i+2]+=s*c,va(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Oe(n,0)};function va(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $s(t,e){this.g=t,this.h=e}function pc(t,e){if(tr(e))throw Error("division by zero");if(tr(t))return new $s(qi,qi);if(en(t))return e=pc(dt(t),e),new $s(dt(e.g),dt(e.h));if(en(e))return e=pc(t,dt(e)),new $s(dt(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mh,r=e;0>=r.X(t);)n=Qm(n),r=Qm(r);var i=Ni(n,1),s=Ni(r,1);for(r=Ni(r,2),n=Ni(n,2);!tr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ni(r,1),n=Ni(n,1)}return e=fc(t,i.R(e)),new $s(i,e)}for(i=qi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=kn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=kn(n),o=s.R(e);tr(s)&&(s=Mh),i=i.add(s),t=fc(t,o)}return new $s(i,t)}W.gb=function(t){return pc(this,t).h};W.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Oe(n,this.h&t.h)};W.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Oe(n,this.h|t.h)};W.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Oe(n,this.h^t.h)};function Qm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Oe(n,t.h)}function Ni(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Oe(i,t.h)}on.prototype.send=on.prototype.u;on.prototype.open=on.prototype.m;on.prototype.close=on.prototype.close;df.NO_ERROR=0;df.TIMEOUT=8;df.HTTP_ERROR=6;jL.COMPLETE="complete";HL.EventType=Vo;Vo.OPEN="a";Vo.CLOSE="b";Vo.ERROR="c";Vo.MESSAGE="d";lt.prototype.listen=lt.prototype.O;Ge.prototype.listenOnce=Ge.prototype.P;Ge.prototype.getLastError=Ge.prototype.Sa;Ge.prototype.getLastErrorCode=Ge.prototype.Ia;Ge.prototype.getStatus=Ge.prototype.da;Ge.prototype.getResponseJson=Ge.prototype.Wa;Ge.prototype.getResponseText=Ge.prototype.ja;Ge.prototype.send=Ge.prototype.ha;Ge.prototype.setWithCredentials=Ge.prototype.Oa;Ln.prototype.digest=Ln.prototype.l;Ln.prototype.reset=Ln.prototype.reset;Ln.prototype.update=Ln.prototype.j;Oe.prototype.add=Oe.prototype.add;Oe.prototype.multiply=Oe.prototype.R;Oe.prototype.modulo=Oe.prototype.gb;Oe.prototype.compare=Oe.prototype.X;Oe.prototype.toNumber=Oe.prototype.ea;Oe.prototype.toString=Oe.prototype.toString;Oe.prototype.getBits=Oe.prototype.D;Oe.fromNumber=kn;Oe.fromString=GE;var p$=Oe;const Zm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new ps("@firebase/firestore");function Gt(t,...e){if(gc.logLevel<=Ae.DEBUG){const n=e.map(YE);gc.debug(`Firestore (${pl}): ${t}`,...n)}}function Tf(t,...e){if(gc.logLevel<=Ae.ERROR){const n=e.map(YE);gc.error(`Firestore (${pl}): ${t}`,...n)}}function YE(t){if(typeof t=="string")return t;try{/**
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
 */function JE(t="Unexpected state"){const e=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: `+t;throw Tf(e),new Error(e)}function xh(t,e){t||JE()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qt extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class _${constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},c=a=>{Gt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>c(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?c(a):(Gt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Gt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xh(typeof r.accessToken=="string"),new g$(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xh(e===null||typeof e=="string"),new $t(e)}}class v${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class y${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new v$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Gt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Gt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Gt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Gt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xh(typeof n.token=="string"),this.R=n.token,new w$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=b$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function XE(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(e,n,r,i,s,o,c,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=a,this.useFetchStreams=l}}class mc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e_,fe;(fe=e_||(e_={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new p$([4294967295,4294967295],0);function vu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&Gt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,c=new Cf(e,n,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qt(Kt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function S$(t,e){if(Tf("AsyncQueue",`${e}: ${t}`),XE(t))return new qt(Kt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=T$.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Gt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Gt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qt(Kt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=S$(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function QE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const t_=new Map;function R$(t,e,n,r){if(e===!0&&r===!0)throw new qt(Kt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class n_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new qt(Kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new qt(Kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new qt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new qt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new qt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class P${constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qt(Kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new qt(Kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m$;switch(r.type){case"firstParty":return new y$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qt(Kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(Gt("ComponentProvider","Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class k${constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new I$(this,"async_queue_retry"),this.tu=()=>{const n=vu();n&&Gt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Gi;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!XE(e))throw e;Gt("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Tf("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&JE()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}class O$ extends P${constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new k$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||N$(this),this._firestoreClient.terminate()}}function N$(t){var e,n,r;const i=t._freezeSettings(),s=function(c,a,l,h){return new C$(c,a,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,QE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new A$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){pl=i})(Hr),jt(new Dt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new O$(new _$(r.getProvider("auth-internal")),new E$(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new qt(Kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mc(l.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),mt(Zm,"4.1.2",e),mt(Zm,"4.1.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="firebasestorage.googleapis.com",D$="storageBucket",M$=2*60*1e3,x$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends an{constructor(e,n,r=0){super(yu(e),`Firebase Storage: ${n} (${yu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($n||($n={}));function yu(t){return"storage/"+t}function L$(){const t="An unknown error occurred, please check the error payload for server response.";return new jn($n.UNKNOWN,t)}function $$(){return new jn($n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function F$(){return new jn($n.CANCELED,"User canceled the upload/download.")}function U$(t){return new jn($n.INVALID_URL,"Invalid URL '"+t+"'.")}function B$(t){return new jn($n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function r_(t){return new jn($n.INVALID_ARGUMENT,t)}function eb(){return new jn($n.APP_DELETED,"The Firebase app was deleted.")}function j$(t){return new jn($n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw B$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${g}`,"i"),E={bucket:1,path:3},T=n===ZE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",A=new RegExp(`^https?://${T}/${i}/${M}`,"i"),L=[{regex:c,indices:a,postModify:s},{regex:_,indices:E,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<L.length;P++){const z=L[P],G=z.regex.exec(e);if(G){const ce=G[z.indices.bucket];let we=G[z.indices.path];we||(we=""),r=new mn(ce,we),z.postModify(r);break}}if(r==null)throw U$(e);return r}}class H${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V$(t,e,n){let r=1,i=null,s=null,o=!1,c=0;function a(){return c===2}let l=!1;function h(...M){l||(l=!0,e.apply(null,M))}function f(M){i=setTimeout(()=>{i=null,t(_,a())},M)}function g(){s&&clearTimeout(s)}function _(M,...A){if(l){g();return}if(M){g(),h.call(null,M,...A);return}if(a()||o){g(),h.call(null,M,...A);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,f(L)}let E=!1;function T(M){E||(E=!0,g(),!l&&(i!==null?(M||(c=2),clearTimeout(i),f(0)):M||(c=1)))}return f(0),s=setTimeout(()=>{o=!0,T(!0)},n),T}function W$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z$(t){return t!==void 0}function i_(t,e,n,r){if(r<e)throw r_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw r_(`Invalid value for '${t}'. Expected ${n} or less.`)}function K$(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_c||(_c={}));/**
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
 */function q$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e,n,r,i,s,o,c,a,l,h,f,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ya(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===_c.NO_ERROR,a=s.getStatus();if(!c||q$(a,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===_c.ABORT;r(!1,new ya(!1,null,h));return}const l=this.successCodes_.indexOf(a)!==-1;r(!0,new ya(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());z$(a)?s(a):s()}catch(a){o(a)}else if(c!==null){const a=L$();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(i.canceled){const a=this.appDelete_?eb():F$();o(a)}else{const a=$$();o(a)}};this.canceled_?n(!1,new ya(!1,null,!0)):this.backoffId_=V$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&W$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Y$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function J$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function X$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Z$(t,e,n,r,i,s,o=!0){const c=K$(t.urlParams),a=t.url+c,l=Object.assign({},t.headers);return X$(l,e),Y$(l,n),J$(l,s),Q$(l,r),new G$(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vc{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vc(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tF(this._location.path)}get storage(){return this._service}get parent(){const e=eF(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new vc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw j$(e)}}function s_(t,e){const n=e==null?void 0:e[D$];return n==null?null:mn.makeFromBucketSpec(n,t)}class nF{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=M$,this._maxUploadRetryTime=x$,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=s_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=s_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){i_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){i_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new H$(eb());{const o=Z$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const o_="@firebase/storage",a_="0.11.2";/**
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
 */const rF="storage";function iF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nF(n,r,i,e,Hr)}function sF(){jt(new Dt(rF,iF,"PUBLIC").setMultipleInstances(!0)),mt(o_,a_,""),mt(o_,a_,"esm2017")}sF();function oF(t){return(e,n)=>{const r=IM(e,n).run(()=>Zt(t));SM.set(e,r),RM(r,e)}}function rU(t){return CM?N0(L0(t)):null}function aF(t,{firebaseApp:e,modules:n=[]}){t.provide(x0,e);for(const r of n)r(e,t)}const tb=pA({history:O1("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:wk},{path:"/login",name:"login",component:()=>yA(()=>import("./LoginView-0e49aa7d.js"),["assets/LoginView-0e49aa7d.js","assets/LoginView-94d3cc2c.css"])}]});tb.beforeEach(async t=>{if(t.meta.requiresAuth&&!await AM())return{path:"/login",query:{redirect:t.fullPath}}});const cF=(t,e)=>e.some(n=>t instanceof n);let c_,l_;function lF(){return c_||(c_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uF(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nb=new WeakMap,Lh=new WeakMap,rb=new WeakMap,wu=new WeakMap,If=new WeakMap;function hF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nb.set(n,t)}).catch(()=>{}),If.set(e,t),e}function dF(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fF(t){$h=t($h)}function pF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eu(this),e,...n);return rb.set(r,e.sort?e.sort():[e]),Dr(r)}:uF().includes(t)?function(...e){return t.apply(Eu(this),e),Dr(nb.get(this))}:function(...e){return Dr(t.apply(Eu(this),e))}}function gF(t){return typeof t=="function"?pF(t):(t instanceof IDBTransaction&&dF(t),cF(t,lF())?new Proxy(t,$h):t)}function Dr(t){if(t instanceof IDBRequest)return hF(t);if(wu.has(t))return wu.get(t);const e=gF(t);return e!==t&&(wu.set(t,e),If.set(e,t)),e}const Eu=t=>If.get(t);function mF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=Dr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Dr(o.result),a.oldVersion,a.newVersion,Dr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}const _F=["get","getKey","getAll","getAllKeys","count"],vF=["put","add","delete","clear"],bu=new Map;function u_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bu.get(e))return bu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_F.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&a.done]))[0]};return bu.set(e,s),s}fF(t=>({...t,get:(e,n,r)=>u_(e,n)||t.get(e,n,r),has:(e,n)=>!!u_(e,n)||t.has(e,n)}));const ib="@firebase/installations",Sf="0.6.4";/**
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
 */const sb=1e4,ob=`w:${Sf}`,ab="FIS_v2",yF="https://firebaseinstallations.googleapis.com/v1",wF=60*60*1e3,EF="installations",bF="Installations";/**
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
 */const TF={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new Br(EF,bF,TF);function cb(t){return t instanceof an&&t.code.includes("request-failed")}/**
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
 */function lb({projectId:t}){return`${yF}/projects/${t}/installations`}function ub(t){return{token:t.token,requestStatus:2,expiresIn:IF(t.expiresIn),creationTime:Date.now()}}async function hb(t,e){const r=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function db({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function CF(t,{refreshToken:e}){const n=db(t);return n.append("Authorization",SF(e)),n}async function fb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function IF(t){return Number(t.replace("s","000"))}function SF(t){return`${ab} ${t}`}/**
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
 */async function AF({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lb(t),i=db(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:ab,appId:t.appId,sdkVersion:ob},c={method:"POST",headers:i,body:JSON.stringify(o)},a=await fb(()=>fetch(r,c));if(a.ok){const l=await a.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ub(l.authToken)}}else throw await hb("Create Installation",a)}/**
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
 */function pb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function RF(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const PF=/^[cdef][\w-]{21}$/,Fh="";function kF(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=OF(t);return PF.test(n)?n:Fh}catch{return Fh}}function OF(t){return RF(t).substr(0,22)}/**
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
 */function gl(t){return`${t.appName}!${t.appId}`}/**
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
 */const gb=new Map;function mb(t,e){const n=gl(t);_b(n,e),NF(n,e)}function _b(t,e){const n=gb.get(t);if(n)for(const r of n)r(e)}function NF(t,e){const n=DF();n&&n.postMessage({key:t,fid:e}),MF()}let oi=null;function DF(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{_b(t.data.key,t.data.fid)}),oi}function MF(){gb.size===0&&oi&&(oi.close(),oi=null)}/**
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
 */const xF="firebase-installations-database",LF=1,Ii="firebase-installations-store";let Tu=null;function Af(){return Tu||(Tu=mF(xF,LF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),Tu}async function yc(t,e){const n=gl(t),i=(await Af()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mb(t,e.fid),e}async function vb(t){const e=gl(t),r=(await Af()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function ml(t,e){const n=gl(t),i=(await Af()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),c=e(o);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!o||o.fid!==c.fid)&&mb(t,c.fid),c}/**
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
 */async function Rf(t){let e;const n=await ml(t.appConfig,r=>{const i=$F(r),s=FF(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Fh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $F(t){const e=t||{fid:kF(),registrationStatus:0};return yb(e)}function FF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=UF(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BF(t)}:{installationEntry:e}}async function UF(t,e){try{const n=await AF(t,e);return yc(t.appConfig,n)}catch(n){throw cb(n)&&n.customData.serverCode===409?await vb(t.appConfig):await yc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BF(t){let e=await h_(t.appConfig);for(;e.registrationStatus===1;)await pb(100),e=await h_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rf(t);return r||n}return e}function h_(t){return ml(t,e=>{if(!e)throw Ci.create("installation-not-found");return yb(e)})}function yb(t){return jF(t)?{fid:t.fid,registrationStatus:0}:t}function jF(t){return t.registrationStatus===1&&t.registrationTime+sb<Date.now()}/**
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
 */async function HF({appConfig:t,heartbeatServiceProvider:e},n){const r=VF(t,n),i=CF(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ob,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},a=await fb(()=>fetch(r,c));if(a.ok){const l=await a.json();return ub(l)}else throw await hb("Generate Auth Token",a)}function VF(t,{fid:e}){return`${lb(t)}/${e}/authTokens:generate`}/**
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
 */async function Pf(t,e=!1){let n;const r=await ml(t.appConfig,s=>{if(!wb(s))throw Ci.create("not-registered");const o=s.authToken;if(!e&&KF(o))return s;if(o.requestStatus===1)return n=WF(t,e),s;{if(!navigator.onLine)throw Ci.create("app-offline");const c=GF(s);return n=zF(t,c),c}});return n?await n:r.authToken}async function WF(t,e){let n=await d_(t.appConfig);for(;n.authToken.requestStatus===1;)await pb(100),n=await d_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pf(t,e):r}function d_(t){return ml(t,e=>{if(!wb(e))throw Ci.create("not-registered");const n=e.authToken;return YF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function zF(t,e){try{const n=await HF(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await yc(t.appConfig,r),n}catch(n){if(cb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yc(t.appConfig,r)}throw n}}function wb(t){return t!==void 0&&t.registrationStatus===2}function KF(t){return t.requestStatus===2&&!qF(t)}function qF(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wF}function GF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YF(t){return t.requestStatus===1&&t.requestTime+sb<Date.now()}/**
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
 */async function JF(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rf(e);return r?r.catch(console.error):Pf(e).catch(console.error),n.fid}/**
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
 */async function XF(t,e=!1){const n=t;return await QF(n),(await Pf(n,e)).token}async function QF(t){const{registrationPromise:e}=await Rf(t);e&&await e}/**
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
 */function ZF(t){if(!t||!t.options)throw Cu("App Configuration");if(!t.name)throw Cu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cu(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
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
 */const Eb="installations",e4="installations-internal",t4=t=>{const e=t.getProvider("app").getImmediate(),n=ZF(e),r=Vc(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},n4=t=>{const e=t.getProvider("app").getImmediate(),n=Vc(e,Eb).getImmediate();return{getId:()=>JF(n),getToken:i=>XF(n,i)}};function r4(){jt(new Dt(Eb,t4,"PUBLIC")),jt(new Dt(e4,n4,"PRIVATE"))}r4();mt(ib,Sf);mt(ib,Sf,"esm2017");/**
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
 */const f_="analytics",i4="firebase_id",s4="origin",o4=60*1e3,a4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ut=new ps("@firebase/analytics");/**
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
 */const c4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rn=new Br("analytics","Analytics",c4);/**
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
 */function l4(t){if(!t.startsWith(kf)){const e=rn.create("invalid-gtag-resource",{gtagURL:t});return Ut.warn(e.message),""}return t}function bb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function u4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function h4(t,e){const n=u4("firebase-js-sdk-policy",{createScriptURL:l4}),r=document.createElement("script"),i=`${kf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function d4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function f4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await bb(n)).find(l=>l.measurementId===i);a&&await e[a.appId]}}catch(c){Ut.error(c)}t("config",i,s)}async function p4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await bb(n);for(const a of o){const l=c.find(f=>f.measurementId===a),h=l&&e[l.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ut.error(s)}}function g4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[c,a]=o;await p4(t,e,n,c,a)}else if(s==="config"){const[c,a]=o;await f4(t,e,n,r,c,a)}else if(s==="consent"){const[c]=o;t("consent","update",c)}else if(s==="get"){const[c,a,l]=o;t("get",c,a,l)}else if(s==="set"){const[c]=o;t("set",c)}else t(s,...o)}catch(c){Ut.error(c)}}return i}function m4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=g4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function _4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kf)&&n.src.includes(t))return n;return null}/**
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
 */const v4=30,y4=1e3;class w4{constructor(e={},n=y4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tb=new w4;function E4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function b4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:E4(r)},s=a4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let c="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(c=a.error.message)}catch{}throw rn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function T4(t,e=Tb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw rn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw rn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new S4;return setTimeout(async()=>{c.abort()},n!==void 0?n:o4),Cb({appId:r,apiKey:i,measurementId:s},o,c,e)}async function Cb(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Tb){var s;const{appId:o,measurementId:c}=t;try{await C4(r,e)}catch(a){if(c)return Ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:c};throw a}try{const a=await b4(t);return i.deleteThrottleMetadata(o),a}catch(a){const l=a;if(!I4(l)){if(i.deleteThrottleMetadata(o),c)return Ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw a}const h=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Rg(n,i.intervalMillis,v4):Rg(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ut.debug(`Calling attemptFetch again in ${h} millis`),Cb(t,f,r,i)}}function C4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function I4(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class S4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function A4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function R4(){if(bd())try{await Hy()}catch(t){return Ut.warn(rn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ut.warn(rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function P4(t,e,n,r,i,s,o){var c;const a=T4(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ut.error(_)),e.push(a);const l=R4().then(_=>{if(_)return r.getId()}),[h,f]=await Promise.all([a,l]);_4(s)||h4(s,h.measurementId),i("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[s4]="firebase",g.update=!0,f!=null&&(g[i4]=f),i("config",h.measurementId,g),h.measurementId}/**
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
 */class k4{constructor(e){this.app=e}_delete(){return delete to[this.app.options.appId],Promise.resolve()}}let to={},p_=[];const g_={};let Iu="dataLayer",O4="gtag",m_,Ib,__=!1;function N4(){const t=[];if(Uy()&&t.push("This is a browser extension environment."),Ok()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rn.create("invalid-analytics-context",{errorInfo:e});Ut.warn(n.message)}}function D4(t,e,n){N4();const r=t.options.appId;if(!r)throw rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rn.create("no-api-key");if(to[r]!=null)throw rn.create("already-exists",{id:r});if(!__){d4(Iu);const{wrappedGtag:s,gtagCore:o}=m4(to,p_,g_,Iu,O4);Ib=s,m_=o,__=!0}return to[r]=P4(t,p_,g_,e,m_,Iu,n),new k4(t)}function M4(t,e,n,r){t=jr(t),A4(Ib,to[t.app.options.appId],e,n,r).catch(i=>Ut.error(i))}const v_="@firebase/analytics",y_="0.10.0";function x4(){jt(new Dt(f_,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return D4(r,i,n)},"PUBLIC")),jt(new Dt("analytics-internal",t,"PRIVATE")),mt(v_,y_),mt(v_,y_,"esm2017");function t(e){try{const n=e.getProvider(f_).getImmediate();return{logEvent:(r,i,s)=>M4(n,r,i,s)}}catch(n){throw rn.create("interop-component-reg-failed",{reason:n})}}}x4();const L4={apiKey:"AIzaSyBBi5IzyoAfCGZPdIjY_Unn13awXzMY3QQ",authDomain:"presenzapp.firebaseapp.com",projectId:"presenzapp",storageBucket:"presenzapp.appspot.com",messagingSenderId:"121965141290",appId:"1:121965141290:web:5bda310c5531b4849b9253",measurementId:"G-X4JEPSW9DH"},$4=Ky(L4),_l=l1(mA);_l.use(f1());_l.use(tb);_l.use(aF,{firebaseApp:$4,modules:[oF()]});_l.mount("#app");export{Xe as A,Z4 as B,td as C,qP as D,ek as E,nU as F,br as G,ao as H,eU as I,tU as J,An as K,mi as T,Mt as _,Uc as a,QP as b,ZP as c,XP as d,gd as e,X4 as f,fk as g,dk as h,yy as i,or as j,Zt as k,j4 as l,nS as m,cr as n,Ju as o,nn as p,pi as q,hk as r,ui as s,_y as t,rU as u,Tt as v,Q_ as w,Yn as x,oa as y,IS as z};
