(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function qo(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Xo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=rt(i)?Uu(i):Xo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(rt(n))return n;if(Ke(n))return n}}const Iu=/;(?![^(]*\))/g,Fu=/:([^]+)/,Nu=/\/\*.*?\*\//gs;function Uu(n){const e={};return n.replace(Nu,"").split(Iu).forEach(t=>{if(t){const i=t.split(Fu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function jo(n){let e="";if(rt(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=jo(n[t]);i&&(e+=i+" ")}else if(Ke(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zu=qo(Ou);function lc(n){return!!n||n===""}function Bu(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=gs(n[i],e[i]);return t}function gs(n,e){if(n===e)return!0;let t=_a(n),i=_a(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=cr(n),i=cr(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Bu(n,e):!1;if(t=Ke(n),i=Ke(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!gs(n[a],e[a]))return!1}}return String(n)===String(e)}function Gu(n,e){return n.findIndex(t=>gs(t,e))}const Ti=n=>rt(n)?n:n==null?"":Le(n)||Ke(n)&&(n.toString===fc||!Ie(n.toString))?JSON.stringify(n,cc,2):String(n),cc=(n,e)=>e&&e.__v_isRef?cc(n,e.value):Ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()]}:Ke(e)&&!Le(e)&&!hc(e)?String(e):e,$e={},Li=[],Zt=()=>{},Vu=()=>!1,ku=/^on[^a-z]/,_s=n=>ku.test(n),Yo=n=>n.startsWith("onUpdate:"),_t=Object.assign,$o=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hu=Object.prototype.hasOwnProperty,ke=(n,e)=>Hu.call(n,e),Le=Array.isArray,Ri=n=>Mr(n)==="[object Map]",xs=n=>Mr(n)==="[object Set]",_a=n=>Mr(n)==="[object Date]",Ie=n=>typeof n=="function",rt=n=>typeof n=="string",cr=n=>typeof n=="symbol",Ke=n=>n!==null&&typeof n=="object",uc=n=>Ke(n)&&Ie(n.then)&&Ie(n.catch),fc=Object.prototype.toString,Mr=n=>fc.call(n),Wu=n=>Mr(n).slice(8,-1),hc=n=>Mr(n)==="[object Object]",Ko=n=>rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ts=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qu=/-(\w)/g,Ni=vs(n=>n.replace(qu,(e,t)=>t?t.toUpperCase():"")),Xu=/\B([A-Z])/g,ki=vs(n=>n.replace(Xu,"-$1").toLowerCase()),dc=vs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Us=vs(n=>n?`on${dc(n)}`:""),ur=(n,e)=>!Object.is(n,e),ns=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},cs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},fr=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xa;const ju=()=>xa||(xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let en;class Yu{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}run(e){if(this.active){const t=en;try{return en=this,e()}finally{en=t}}}on(){en=this}off(){en=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function $u(n,e=en){e&&e.active&&e.effects.push(n)}const Zo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},pc=n=>(n.w&Dn)>0,mc=n=>(n.n&Dn)>0,Ku=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Dn},Zu=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];pc(r)&&!mc(r)?r.delete(n):e[t++]=r,r.w&=~Dn,r.n&=~Dn}e.length=t}},So=new WeakMap;let nr=0,Dn=1;const wo=30;let jt;const ei=Symbol(""),To=Symbol("");class Jo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,$u(this,i)}run(){if(!this.active)return this.fn();let e=jt,t=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Cn=!0,Dn=1<<++nr,nr<=wo?Ku(this):va(this),this.fn()}finally{nr<=wo&&Zu(this),Dn=1<<--nr,jt=this.parent,Cn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Cn=!0;const gc=[];function Hi(){gc.push(Cn),Cn=!1}function Wi(){const n=gc.pop();Cn=n===void 0?!0:n}function Ft(n,e,t){if(Cn&&jt){let i=So.get(n);i||So.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Zo()),_c(r)}}function _c(n,e){let t=!1;nr<=wo?mc(n)||(n.n|=Dn,t=!pc(n)):t=!n.has(jt),t&&(n.add(jt),jt.deps.push(n))}function vn(n,e,t,i,r,s){const a=So.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Le(n)){const l=fr(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Le(n)?Ko(t)&&o.push(a.get("length")):(o.push(a.get(ei)),Ri(n)&&o.push(a.get(To)));break;case"delete":Le(n)||(o.push(a.get(ei)),Ri(n)&&o.push(a.get(To)));break;case"set":Ri(n)&&o.push(a.get(ei));break}if(o.length===1)o[0]&&Eo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Eo(Zo(l))}}function Eo(n,e){const t=Le(n)?n:[...n];for(const i of t)i.computed&&Ma(i);for(const i of t)i.computed||Ma(i)}function Ma(n,e){(n!==jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ju=qo("__proto__,__v_isRef,__isVue"),xc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cr)),Qu=Qo(),ef=Qo(!1,!0),tf=Qo(!0),ya=nf();function nf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=qe(this);for(let s=0,a=this.length;s<a;s++)Ft(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Hi();const i=qe(this)[e].apply(this,t);return Wi(),i}}),n}function Qo(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?vf:Sc:e?bc:yc).get(i))return i;const a=Le(i);if(!n&&a&&ke(ya,r))return Reflect.get(ya,r,s);const o=Reflect.get(i,r,s);return(cr(r)?xc.has(r):Ju(r))||(n||Ft(i,"get",r),e)?o:gt(o)?a&&Ko(r)?o:o.value:Ke(o)?n?wc(o):na(o):o}}const rf=vc(),sf=vc(!0);function vc(n=!1){return function(t,i,r,s){let a=t[i];if(Ui(a)&&gt(a)&&!gt(r))return!1;if(!n&&(!us(r)&&!Ui(r)&&(a=qe(a),r=qe(r)),!Le(t)&&gt(a)&&!gt(r)))return a.value=r,!0;const o=Le(t)&&Ko(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,r,s);return t===qe(s)&&(o?ur(r,a)&&vn(t,"set",i,r):vn(t,"add",i,r)),l}}function of(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&vn(n,"delete",e,void 0),i}function af(n,e){const t=Reflect.has(n,e);return(!cr(e)||!xc.has(e))&&Ft(n,"has",e),t}function lf(n){return Ft(n,"iterate",Le(n)?"length":ei),Reflect.ownKeys(n)}const Mc={get:Qu,set:rf,deleteProperty:of,has:af,ownKeys:lf},cf={get:tf,set(n,e){return!0},deleteProperty(n,e){return!0}},uf=_t({},Mc,{get:ef,set:sf}),ea=n=>n,Ms=n=>Reflect.getPrototypeOf(n);function Ar(n,e,t=!1,i=!1){n=n.__v_raw;const r=qe(n),s=qe(e);t||(e!==s&&Ft(r,"get",e),Ft(r,"get",s));const{has:a}=Ms(r),o=i?ea:t?ra:hr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Cr(n,e=!1){const t=this.__v_raw,i=qe(t),r=qe(n);return e||(n!==r&&Ft(i,"has",n),Ft(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Lr(n,e=!1){return n=n.__v_raw,!e&&Ft(qe(n),"iterate",ei),Reflect.get(n,"size",n)}function ba(n){n=qe(n);const e=qe(this);return Ms(e).has.call(e,n)||(e.add(n),vn(e,"add",n,n)),this}function Sa(n,e){e=qe(e);const t=qe(this),{has:i,get:r}=Ms(t);let s=i.call(t,n);s||(n=qe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?ur(e,a)&&vn(t,"set",n,e):vn(t,"add",n,e),this}function wa(n){const e=qe(this),{has:t,get:i}=Ms(e);let r=t.call(e,n);r||(n=qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&vn(e,"delete",n,void 0),s}function Ta(){const n=qe(this),e=n.size!==0,t=n.clear();return e&&vn(n,"clear",void 0,void 0),t}function Rr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=qe(a),l=e?ea:n?ra:hr;return!n&&Ft(o,"iterate",ei),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Pr(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),a=Ri(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ea:e?ra:hr;return!e&&Ft(s,"iterate",l?To:ei),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function yn(n){return function(...e){return n==="delete"?!1:this}}function ff(){const n={get(s){return Ar(this,s)},get size(){return Lr(this)},has:Cr,add:ba,set:Sa,delete:wa,clear:Ta,forEach:Rr(!1,!1)},e={get(s){return Ar(this,s,!1,!0)},get size(){return Lr(this)},has:Cr,add:ba,set:Sa,delete:wa,clear:Ta,forEach:Rr(!1,!0)},t={get(s){return Ar(this,s,!0)},get size(){return Lr(this,!0)},has(s){return Cr.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Rr(!0,!1)},i={get(s){return Ar(this,s,!0,!0)},get size(){return Lr(this,!0)},has(s){return Cr.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pr(s,!1,!1),t[s]=Pr(s,!0,!1),e[s]=Pr(s,!1,!0),i[s]=Pr(s,!0,!0)}),[n,t,e,i]}const[hf,df,pf,mf]=ff();function ta(n,e){const t=e?n?mf:pf:n?df:hf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ke(t,r)&&r in i?t:i,r,s)}const gf={get:ta(!1,!1)},_f={get:ta(!1,!0)},xf={get:ta(!0,!1)},yc=new WeakMap,bc=new WeakMap,Sc=new WeakMap,vf=new WeakMap;function Mf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yf(n){return n.__v_skip||!Object.isExtensible(n)?0:Mf(Wu(n))}function na(n){return Ui(n)?n:ia(n,!1,Mc,gf,yc)}function bf(n){return ia(n,!1,uf,_f,bc)}function wc(n){return ia(n,!0,cf,xf,Sc)}function ia(n,e,t,i,r){if(!Ke(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=yf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Pi(n){return Ui(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ui(n){return!!(n&&n.__v_isReadonly)}function us(n){return!!(n&&n.__v_isShallow)}function Tc(n){return Pi(n)||Ui(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function Ec(n){return cs(n,"__v_skip",!0),n}const hr=n=>Ke(n)?na(n):n,ra=n=>Ke(n)?wc(n):n;function Ac(n){Cn&&jt&&(n=qe(n),_c(n.dep||(n.dep=Zo())))}function Cc(n,e){n=qe(n),n.dep&&Eo(n.dep)}function gt(n){return!!(n&&n.__v_isRef===!0)}function mn(n){return Sf(n,!1)}function Sf(n,e){return gt(n)?n:new wf(n,e)}class wf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:hr(e)}get value(){return Ac(this),this._value}set value(e){const t=this.__v_isShallow||us(e)||Ui(e);e=t?e:qe(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:hr(e),Cc(this))}}function Ao(n){return gt(n)?n.value:n}const Tf={get:(n,e,t)=>Ao(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Lc(n){return Pi(n)?n:new Proxy(n,Tf)}var Rc;class Ef{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Rc]=!1,this._dirty=!0,this.effect=new Jo(e,()=>{this._dirty||(this._dirty=!0,Cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return Ac(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rc="__v_isReadonly";function Af(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=Zt):(i=n.get,r=n.set),new Ef(i,r,s||!r,t)}function Ln(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ys(s,e,t)}return r}function kt(n,e,t,i){if(Ie(n)){const s=Ln(n,e,t,i);return s&&uc(s)&&s.catch(a=>{ys(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(kt(n[s],e,t,i));return r}function ys(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[n,a,o]);return}}Cf(n,t,r,i)}function Cf(n,e,t,i=!0){console.error(n)}let dr=!1,Co=!1;const mt=[];let sn=0;const Di=[];let gn=null,Xn=0;const Pc=Promise.resolve();let sa=null;function Lf(n){const e=sa||Pc;return n?e.then(this?n.bind(this):n):e}function Rf(n){let e=sn+1,t=mt.length;for(;e<t;){const i=e+t>>>1;pr(mt[i])<n?e=i+1:t=i}return e}function oa(n){(!mt.length||!mt.includes(n,dr&&n.allowRecurse?sn+1:sn))&&(n.id==null?mt.push(n):mt.splice(Rf(n.id),0,n),Dc())}function Dc(){!dr&&!Co&&(Co=!0,sa=Pc.then(Fc))}function Pf(n){const e=mt.indexOf(n);e>sn&&mt.splice(e,1)}function Df(n){Le(n)?Di.push(...n):(!gn||!gn.includes(n,n.allowRecurse?Xn+1:Xn))&&Di.push(n),Dc()}function Ea(n,e=dr?sn+1:0){for(;e<mt.length;e++){const t=mt[e];t&&t.pre&&(mt.splice(e,1),e--,t())}}function Ic(n){if(Di.length){const e=[...new Set(Di)];if(Di.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((t,i)=>pr(t)-pr(i)),Xn=0;Xn<gn.length;Xn++)gn[Xn]();gn=null,Xn=0}}const pr=n=>n.id==null?1/0:n.id,If=(n,e)=>{const t=pr(n)-pr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Fc(n){Co=!1,dr=!0,mt.sort(If);const e=Zt;try{for(sn=0;sn<mt.length;sn++){const t=mt[sn];t&&t.active!==!1&&Ln(t,null,14)}}finally{sn=0,mt.length=0,Ic(),dr=!1,sa=null,(mt.length||Di.length)&&Fc()}}function Ff(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||$e;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||$e;h&&(r=t.map(m=>rt(m)?m.trim():m)),f&&(r=t.map(fr))}let o,l=i[o=Us(e)]||i[o=Us(Ni(e))];!l&&s&&(l=i[o=Us(ki(e))]),l&&kt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,kt(c,n,6,r)}}function Nc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const u=Nc(c,e,!0);u&&(o=!0,_t(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Ke(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):_t(a,s),Ke(n)&&i.set(n,a),a)}function bs(n,e){return!n||!_s(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,ki(e))||ke(n,e))}let Vt=null,Uc=null;function fs(n){const e=Vt;return Vt=n,Uc=n&&n.type.__scopeId||null,e}function Nf(n,e=Vt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Na(-1);const s=fs(e);let a;try{a=n(...r)}finally{fs(s),i._d&&Na(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Os(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:x,inheritAttrs:p}=n;let d,y;const T=fs(n);try{if(t.shapeFlag&4){const S=r||i;d=nn(u.call(S,S,f,s,m,h,x)),y=l}else{const S=e;d=nn(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),y=e.props?l:Uf(l)}}catch(S){lr.length=0,ys(S,n,1),d=on(Jt)}let v=d;if(y&&p!==!1){const S=Object.keys(y),{shapeFlag:A}=v;S.length&&A&7&&(a&&S.some(Yo)&&(y=Of(y,a)),v=In(v,y))}return t.dirs&&(v=In(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),d=v,fs(T),d}const Uf=n=>{let e;for(const t in n)(t==="class"||t==="style"||_s(t))&&((e||(e={}))[t]=n[t]);return e},Of=(n,e)=>{const t={};for(const i in n)(!Yo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Aa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!bs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Aa(i,a,c):!0:!!a;return!1}function Aa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!bs(t,s))return!0}return!1}function Bf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Gf=n=>n.__isSuspense;function Vf(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):Df(n)}function kf(n,e){if(ft){let t=ft.provides;const i=ft.parent&&ft.parent.provides;i===t&&(t=ft.provides=Object.create(i)),t[n]=e}}function is(n,e,t=!1){const i=ft||Vt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const Dr={};function or(n,e,t){return Oc(n,e,t)}function Oc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=$e){const o=ft;let l,c=!1,u=!1;if(gt(n)?(l=()=>n.value,c=us(n)):Pi(n)?(l=()=>n,i=!0):Le(n)?(u=!0,c=n.some(v=>Pi(v)||us(v)),l=()=>n.map(v=>{if(gt(v))return v.value;if(Pi(v))return Zn(v);if(Ie(v))return Ln(v,o,2)})):Ie(n)?e?l=()=>Ln(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),kt(n,o,3,[h])}:l=Zt,e&&i){const v=l;l=()=>Zn(v())}let f,h=v=>{f=y.onStop=()=>{Ln(v,o,4)}},m;if(gr)if(h=Zt,e?t&&kt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const v=Vh();m=v.__watcherHandles||(v.__watcherHandles=[])}else return Zt;let x=u?new Array(n.length).fill(Dr):Dr;const p=()=>{if(y.active)if(e){const v=y.run();(i||c||(u?v.some((S,A)=>ur(S,x[A])):ur(v,x)))&&(f&&f(),kt(e,o,3,[v,x===Dr?void 0:u&&x[0]===Dr?[]:x,h]),x=v)}else y.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>wt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),d=()=>oa(p));const y=new Jo(l,d);e?t?p():x=y.run():r==="post"?wt(y.run.bind(y),o&&o.suspense):y.run();const T=()=>{y.stop(),o&&o.scope&&$o(o.scope.effects,y)};return m&&m.push(T),T}function Hf(n,e,t){const i=this.proxy,r=rt(n)?n.includes(".")?zc(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=ft;Oi(this);const o=Oc(r,s.bind(i),t);return a?Oi(a):ti(),o}function zc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Zn(n,e){if(!Ke(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),gt(n))Zn(n.value,e);else if(Le(n))for(let t=0;t<n.length;t++)Zn(n[t],e);else if(xs(n)||Ri(n))n.forEach(t=>{Zn(t,e)});else if(hc(n))for(const t in n)Zn(n[t],e);return n}function Wf(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ts(()=>{n.isMounted=!0}),Hc(()=>{n.isUnmounting=!0}),n}const Ut=[Function,Array],qf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},setup(n,{slots:e}){const t=Ih(),i=Wf();let r;return()=>{const s=e.default&&Gc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==Jt){a=p;break}}const o=qe(n),{mode:l}=o;if(i.isLeaving)return zs(a);const c=Ca(a);if(!c)return zs(a);const u=Lo(c,o,i,t);Ro(c,u);const f=t.subTree,h=f&&Ca(f);let m=!1;const{getTransitionKey:x}=c.type;if(x){const p=x();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==Jt&&(!jn(c,h)||m)){const p=Lo(h,o,i,t);if(Ro(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},zs(a);l==="in-out"&&c.type!==Jt&&(p.delayLeave=(d,y,T)=>{const v=Bc(i,h);v[String(h.key)]=h,d._leaveCb=()=>{y(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return a}}},Xf=qf;function Bc(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Lo(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:y,onAppearCancelled:T}=e,v=String(n.key),S=Bc(t,n),A=(_,C)=>{_&&kt(_,i,9,C)},R=(_,C)=>{const D=C[1];A(_,C),Le(_)?_.every(Y=>Y.length<=1)&&D():_.length<=1&&D()},I={mode:s,persisted:a,beforeEnter(_){let C=o;if(!t.isMounted)if(r)C=p||o;else return;_._leaveCb&&_._leaveCb(!0);const D=S[v];D&&jn(n,D)&&D.el._leaveCb&&D.el._leaveCb(),A(C,[_])},enter(_){let C=l,D=c,Y=u;if(!t.isMounted)if(r)C=d||l,D=y||c,Y=T||u;else return;let se=!1;const O=_._enterCb=N=>{se||(se=!0,N?A(Y,[_]):A(D,[_]),I.delayedLeave&&I.delayedLeave(),_._enterCb=void 0)};C?R(C,[_,O]):O()},leave(_,C){const D=String(n.key);if(_._enterCb&&_._enterCb(!0),t.isUnmounting)return C();A(f,[_]);let Y=!1;const se=_._leaveCb=O=>{Y||(Y=!0,C(),O?A(x,[_]):A(m,[_]),_._leaveCb=void 0,S[D]===n&&delete S[D])};S[D]=n,h?R(h,[_,se]):se()},clone(_){return Lo(_,e,t,i)}};return I}function zs(n){if(Ss(n))return n=In(n),n.children=null,n}function Ca(n){return Ss(n)?n.children?n.children[0]:void 0:n}function Ro(n,e){n.shapeFlag&6&&n.component?Ro(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gc(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===zt?(a.patchFlag&128&&r++,i=i.concat(Gc(a.children,e,o))):(e||a.type!==Jt)&&i.push(o!=null?In(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Vc(n){return Ie(n)?{setup:n,name:n.name}:n}const rs=n=>!!n.type.__asyncLoader,Ss=n=>n.type.__isKeepAlive;function jf(n,e){kc(n,"a",e)}function Yf(n,e){kc(n,"da",e)}function kc(n,e,t=ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ws(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ss(r.parent.vnode)&&$f(i,e,t,r),r=r.parent}}function $f(n,e,t,i){const r=ws(e,n,i,!0);Wc(()=>{$o(i[e],r)},t)}function ws(n,e,t=ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Hi(),Oi(t);const o=kt(e,t,n,a);return ti(),Wi(),o});return i?r.unshift(s):r.push(s),s}}const Mn=n=>(e,t=ft)=>(!gr||n==="sp")&&ws(n,(...i)=>e(...i),t),Kf=Mn("bm"),Ts=Mn("m"),Zf=Mn("bu"),Jf=Mn("u"),Hc=Mn("bum"),Wc=Mn("um"),Qf=Mn("sp"),eh=Mn("rtg"),th=Mn("rtc");function nh(n,e=ft){ws("ec",n,e)}function ci(n,e){const t=Vt;if(t===null)return n;const i=Cs(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=$e]=e[s];a&&(Ie(a)&&(a={mounted:a,updated:a}),a.deep&&Zn(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function zn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Hi(),kt(l,t,8,[n.el,o,n,e]),Wi())}}const ih=Symbol();function rh(n,e,t,i){let r;const s=t&&t[i];if(Le(n)||rt(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(Ke(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const Po=n=>n?tu(n)?Cs(n)||n.proxy:Po(n.parent):null,ar=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Po(n.parent),$root:n=>Po(n.root),$emit:n=>n.emit,$options:n=>aa(n),$forceUpdate:n=>n.f||(n.f=()=>oa(n.update)),$nextTick:n=>n.n||(n.n=Lf.bind(n.proxy)),$watch:n=>Hf.bind(n)}),Bs=(n,e)=>n!==$e&&!n.__isScriptSetup&&ke(n,e),sh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Bs(i,e))return a[e]=1,i[e];if(r!==$e&&ke(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ke(c,e))return a[e]=3,s[e];if(t!==$e&&ke(t,e))return a[e]=4,t[e];Do&&(a[e]=0)}}const u=ar[e];let f,h;if(u)return e==="$attrs"&&Ft(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==$e&&ke(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Bs(r,e)?(r[e]=t,!0):i!==$e&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==$e&&ke(n,a)||Bs(e,a)||(o=s[0])&&ke(o,a)||ke(i,a)||ke(ar,a)||ke(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Do=!0;function oh(n){const e=aa(n),t=n.proxy,i=n.ctx;Do=!1,e.beforeCreate&&La(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:p,deactivated:d,beforeDestroy:y,beforeUnmount:T,destroyed:v,unmounted:S,render:A,renderTracked:R,renderTriggered:I,errorCaptured:_,serverPrefetch:C,expose:D,inheritAttrs:Y,components:se,directives:O,filters:N}=e;if(c&&ah(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const ee in a){const G=a[ee];Ie(G)&&(i[ee]=G.bind(t))}if(r){const ee=r.call(t,t);Ke(ee)&&(n.data=na(ee))}if(Do=!0,s)for(const ee in s){const G=s[ee],le=Ie(G)?G.bind(t,t):Ie(G.get)?G.get.bind(t,t):Zt,re=!Ie(G)&&Ie(G.set)?G.set.bind(t):Zt,H=Bh({get:le,set:re});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>H.value,set:V=>H.value=V})}if(o)for(const ee in o)qc(o[ee],i,t,ee);if(l){const ee=Ie(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(G=>{kf(G,ee[G])})}u&&La(u,n,"c");function ne(ee,G){Le(G)?G.forEach(le=>ee(le.bind(t))):G&&ee(G.bind(t))}if(ne(Kf,f),ne(Ts,h),ne(Zf,m),ne(Jf,x),ne(jf,p),ne(Yf,d),ne(nh,_),ne(th,R),ne(eh,I),ne(Hc,T),ne(Wc,S),ne(Qf,C),Le(D))if(D.length){const ee=n.exposed||(n.exposed={});D.forEach(G=>{Object.defineProperty(ee,G,{get:()=>t[G],set:le=>t[G]=le})})}else n.exposed||(n.exposed={});A&&n.render===Zt&&(n.render=A),Y!=null&&(n.inheritAttrs=Y),se&&(n.components=se),O&&(n.directives=O)}function ah(n,e,t=Zt,i=!1){Le(n)&&(n=Io(n));for(const r in n){const s=n[r];let a;Ke(s)?"default"in s?a=is(s.from||r,s.default,!0):a=is(s.from||r):a=is(s),gt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function La(n,e,t){kt(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qc(n,e,t,i){const r=i.includes(".")?zc(t,i):()=>t[i];if(rt(n)){const s=e[n];Ie(s)&&or(r,s)}else if(Ie(n))or(r,n.bind(t));else if(Ke(n))if(Le(n))n.forEach(s=>qc(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&or(r,s,n)}}function aa(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>hs(l,c,a,!0)),hs(l,e,a)),Ke(e)&&s.set(e,l),l}function hs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&hs(n,s,t,!0),r&&r.forEach(a=>hs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=lh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const lh={data:Ra,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Hn,directives:Hn,watch:uh,provide:Ra,inject:ch};function Ra(n,e){return e?n?function(){return _t(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function ch(n,e){return Hn(Io(n),Io(e))}function Io(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hn(n,e){return n?_t(_t(Object.create(null),n),e):e}function uh(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Mt(n[i],e[i]);return t}function fh(n,e,t,i=!1){const r={},s={};cs(s,As,1),n.propsDefaults=Object.create(null),Xc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:bf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function hh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(bs(n.emitsOptions,h))continue;const m=e[h];if(l)if(ke(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Ni(h);r[x]=Fo(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Xc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ke(e,f)&&((u=ki(f))===f||!ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Fo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ke(e,f))&&(delete s[f],c=!0)}c&&vn(n,"set","$attrs")}function Xc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ts(l))continue;const c=e[l];let u;r&&ke(r,u=Ni(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:bs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(t),c=o||$e;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Fo(r,l,f,c[f],n,!ke(c,f))}}return a}function Fo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Oi(r),i=c[t]=l.call(null,e),ti())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ki(t))&&(i=!0))}return i}function jc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=jc(f,e,!0);_t(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ke(n)&&i.set(n,Li),Li;if(Le(s))for(let u=0;u<s.length;u++){const f=Ni(s[u]);Pa(f)&&(a[f]=$e)}else if(s)for(const u in s){const f=Ni(u);if(Pa(f)){const h=s[u],m=a[f]=Le(h)||Ie(h)?{type:h}:Object.assign({},h);if(m){const x=Fa(Boolean,m.type),p=Fa(String,m.type);m[0]=x>-1,m[1]=p<0||x<p,(x>-1||ke(m,"default"))&&o.push(f)}}}const c=[a,o];return Ke(n)&&i.set(n,c),c}function Pa(n){return n[0]!=="$"}function Da(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Ia(n,e){return Da(n)===Da(e)}function Fa(n,e){return Le(e)?e.findIndex(t=>Ia(t,n)):Ie(e)&&Ia(e,n)?0:-1}const Yc=n=>n[0]==="_"||n==="$stable",la=n=>Le(n)?n.map(nn):[nn(n)],dh=(n,e,t)=>{if(e._n)return e;const i=Nf((...r)=>la(e(...r)),t);return i._c=!1,i},$c=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Yc(r))continue;const s=n[r];if(Ie(s))e[r]=dh(r,s,i);else if(s!=null){const a=la(s);e[r]=()=>a}}},Kc=(n,e)=>{const t=la(e);n.slots.default=()=>t},ph=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),cs(e,"_",t)):$c(e,n.slots={})}else n.slots={},e&&Kc(n,e);cs(n.slots,As,1)},mh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=$e;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(_t(r,e),!t&&o===1&&delete r._):(s=!e.$stable,$c(e,r)),a=e}else e&&(Kc(n,e),a={default:1});if(s)for(const o in r)!Yc(o)&&!(o in a)&&delete r[o]};function Zc(){return{app:null,config:{isNativeTag:Vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gh=0;function _h(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!Ke(r)&&(r=null);const s=Zc(),a=new Set;let o=!1;const l=s.app={_uid:gh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=on(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Cs(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function No(n,e,t,i,r=!1){if(Le(n)){n.forEach((h,m)=>No(h,e&&(Le(e)?e[m]:e),t,i,r));return}if(rs(i)&&!r)return;const s=i.shapeFlag&4?Cs(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===$e?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(rt(c)?(u[c]=null,ke(f,c)&&(f[c]=null)):gt(c)&&(c.value=null)),Ie(l))Ln(l,o,12,[a,u]);else{const h=rt(l),m=gt(l);if(h||m){const x=()=>{if(n.f){const p=h?ke(f,l)?f[l]:u[l]:l.value;r?Le(p)&&$o(p,s):Le(p)?p.includes(s)||p.push(s):h?(u[l]=[s],ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,ke(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,wt(x,t)):x()}}}const wt=Vf;function xh(n){return vh(n)}function vh(n,e){const t=ju();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Zt,insertStaticContent:x}=n,p=(w,E,B,Z=null,K=null,oe=null,ce=!1,te=null,he=!!E.dynamicChildren)=>{if(w===E)return;w&&!jn(w,E)&&(Z=Ne(w),V(w,K,oe,!0),w=null),E.patchFlag===-2&&(he=!1,E.dynamicChildren=null);const{type:ie,ref:M,shapeFlag:g}=E;switch(ie){case Es:d(w,E,B,Z);break;case Jt:y(w,E,B,Z);break;case Gs:w==null&&T(E,B,Z,ce);break;case zt:se(w,E,B,Z,K,oe,ce,te,he);break;default:g&1?A(w,E,B,Z,K,oe,ce,te,he):g&6?O(w,E,B,Z,K,oe,ce,te,he):(g&64||g&128)&&ie.process(w,E,B,Z,K,oe,ce,te,he,Ee)}M!=null&&K&&No(M,w&&w.ref,oe,E||w,!E)},d=(w,E,B,Z)=>{if(w==null)i(E.el=o(E.children),B,Z);else{const K=E.el=w.el;E.children!==w.children&&c(K,E.children)}},y=(w,E,B,Z)=>{w==null?i(E.el=l(E.children||""),B,Z):E.el=w.el},T=(w,E,B,Z)=>{[w.el,w.anchor]=x(w.children,E,B,Z,w.el,w.anchor)},v=({el:w,anchor:E},B,Z)=>{let K;for(;w&&w!==E;)K=h(w),i(w,B,Z),w=K;i(E,B,Z)},S=({el:w,anchor:E})=>{let B;for(;w&&w!==E;)B=h(w),r(w),w=B;r(E)},A=(w,E,B,Z,K,oe,ce,te,he)=>{ce=ce||E.type==="svg",w==null?R(E,B,Z,K,oe,ce,te,he):C(w,E,K,oe,ce,te,he)},R=(w,E,B,Z,K,oe,ce,te)=>{let he,ie;const{type:M,props:g,shapeFlag:P,transition:k,dirs:J}=w;if(he=w.el=a(w.type,oe,g&&g.is,g),P&8?u(he,w.children):P&16&&_(w.children,he,null,Z,K,oe&&M!=="foreignObject",ce,te),J&&zn(w,null,Z,"created"),g){for(const _e in g)_e!=="value"&&!ts(_e)&&s(he,_e,null,g[_e],oe,w.children,Z,K,W);"value"in g&&s(he,"value",null,g.value),(ie=g.onVnodeBeforeMount)&&Qt(ie,Z,w)}I(he,w,w.scopeId,ce,Z),J&&zn(w,null,Z,"beforeMount");const ae=(!K||K&&!K.pendingBranch)&&k&&!k.persisted;ae&&k.beforeEnter(he),i(he,E,B),((ie=g&&g.onVnodeMounted)||ae||J)&&wt(()=>{ie&&Qt(ie,Z,w),ae&&k.enter(he),J&&zn(w,null,Z,"mounted")},K)},I=(w,E,B,Z,K)=>{if(B&&m(w,B),Z)for(let oe=0;oe<Z.length;oe++)m(w,Z[oe]);if(K){let oe=K.subTree;if(E===oe){const ce=K.vnode;I(w,ce,ce.scopeId,ce.slotScopeIds,K.parent)}}},_=(w,E,B,Z,K,oe,ce,te,he=0)=>{for(let ie=he;ie<w.length;ie++){const M=w[ie]=te?En(w[ie]):nn(w[ie]);p(null,M,E,B,Z,K,oe,ce,te)}},C=(w,E,B,Z,K,oe,ce)=>{const te=E.el=w.el;let{patchFlag:he,dynamicChildren:ie,dirs:M}=E;he|=w.patchFlag&16;const g=w.props||$e,P=E.props||$e;let k;B&&Bn(B,!1),(k=P.onVnodeBeforeUpdate)&&Qt(k,B,E,w),M&&zn(E,w,B,"beforeUpdate"),B&&Bn(B,!0);const J=K&&E.type!=="foreignObject";if(ie?D(w.dynamicChildren,ie,te,B,Z,J,oe):ce||G(w,E,te,null,B,Z,J,oe,!1),he>0){if(he&16)Y(te,E,g,P,B,Z,K);else if(he&2&&g.class!==P.class&&s(te,"class",null,P.class,K),he&4&&s(te,"style",g.style,P.style,K),he&8){const ae=E.dynamicProps;for(let _e=0;_e<ae.length;_e++){const fe=ae[_e],q=g[fe],Se=P[fe];(Se!==q||fe==="value")&&s(te,fe,q,Se,K,w.children,B,Z,W)}}he&1&&w.children!==E.children&&u(te,E.children)}else!ce&&ie==null&&Y(te,E,g,P,B,Z,K);((k=P.onVnodeUpdated)||M)&&wt(()=>{k&&Qt(k,B,E,w),M&&zn(E,w,B,"updated")},Z)},D=(w,E,B,Z,K,oe,ce)=>{for(let te=0;te<E.length;te++){const he=w[te],ie=E[te],M=he.el&&(he.type===zt||!jn(he,ie)||he.shapeFlag&70)?f(he.el):B;p(he,ie,M,null,Z,K,oe,ce,!0)}},Y=(w,E,B,Z,K,oe,ce)=>{if(B!==Z){if(B!==$e)for(const te in B)!ts(te)&&!(te in Z)&&s(w,te,B[te],null,ce,E.children,K,oe,W);for(const te in Z){if(ts(te))continue;const he=Z[te],ie=B[te];he!==ie&&te!=="value"&&s(w,te,ie,he,ce,E.children,K,oe,W)}"value"in Z&&s(w,"value",B.value,Z.value)}},se=(w,E,B,Z,K,oe,ce,te,he)=>{const ie=E.el=w?w.el:o(""),M=E.anchor=w?w.anchor:o("");let{patchFlag:g,dynamicChildren:P,slotScopeIds:k}=E;k&&(te=te?te.concat(k):k),w==null?(i(ie,B,Z),i(M,B,Z),_(E.children,B,M,K,oe,ce,te,he)):g>0&&g&64&&P&&w.dynamicChildren?(D(w.dynamicChildren,P,B,K,oe,ce,te),(E.key!=null||K&&E===K.subTree)&&Jc(w,E,!0)):G(w,E,B,M,K,oe,ce,te,he)},O=(w,E,B,Z,K,oe,ce,te,he)=>{E.slotScopeIds=te,w==null?E.shapeFlag&512?K.ctx.activate(E,B,Z,ce,he):N(E,B,Z,K,oe,ce,he):$(w,E,he)},N=(w,E,B,Z,K,oe,ce)=>{const te=w.component=Dh(w,Z,K);if(Ss(w)&&(te.ctx.renderer=Ee),Fh(te),te.asyncDep){if(K&&K.registerDep(te,ne),!w.el){const he=te.subTree=on(Jt);y(null,he,E,B)}return}ne(te,w,E,B,K,oe,ce)},$=(w,E,B)=>{const Z=E.component=w.component;if(zf(w,E,B))if(Z.asyncDep&&!Z.asyncResolved){ee(Z,E,B);return}else Z.next=E,Pf(Z.update),Z.update();else E.el=w.el,Z.vnode=E},ne=(w,E,B,Z,K,oe,ce)=>{const te=()=>{if(w.isMounted){let{next:M,bu:g,u:P,parent:k,vnode:J}=w,ae=M,_e;Bn(w,!1),M?(M.el=J.el,ee(w,M,ce)):M=J,g&&ns(g),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&Qt(_e,k,M,J),Bn(w,!0);const fe=Os(w),q=w.subTree;w.subTree=fe,p(q,fe,f(q.el),Ne(q),w,K,oe),M.el=fe.el,ae===null&&Bf(w,fe.el),P&&wt(P,K),(_e=M.props&&M.props.onVnodeUpdated)&&wt(()=>Qt(_e,k,M,J),K)}else{let M;const{el:g,props:P}=E,{bm:k,m:J,parent:ae}=w,_e=rs(E);if(Bn(w,!1),k&&ns(k),!_e&&(M=P&&P.onVnodeBeforeMount)&&Qt(M,ae,E),Bn(w,!0),g&&He){const fe=()=>{w.subTree=Os(w),He(g,w.subTree,w,K,null)};_e?E.type.__asyncLoader().then(()=>!w.isUnmounted&&fe()):fe()}else{const fe=w.subTree=Os(w);p(null,fe,B,Z,w,K,oe),E.el=fe.el}if(J&&wt(J,K),!_e&&(M=P&&P.onVnodeMounted)){const fe=E;wt(()=>Qt(M,ae,fe),K)}(E.shapeFlag&256||ae&&rs(ae.vnode)&&ae.vnode.shapeFlag&256)&&w.a&&wt(w.a,K),w.isMounted=!0,E=B=Z=null}},he=w.effect=new Jo(te,()=>oa(ie),w.scope),ie=w.update=()=>he.run();ie.id=w.uid,Bn(w,!0),ie()},ee=(w,E,B)=>{E.component=w;const Z=w.vnode.props;w.vnode=E,w.next=null,hh(w,E.props,Z,B),mh(w,E.children,B),Hi(),Ea(),Wi()},G=(w,E,B,Z,K,oe,ce,te,he=!1)=>{const ie=w&&w.children,M=w?w.shapeFlag:0,g=E.children,{patchFlag:P,shapeFlag:k}=E;if(P>0){if(P&128){re(ie,g,B,Z,K,oe,ce,te,he);return}else if(P&256){le(ie,g,B,Z,K,oe,ce,te,he);return}}k&8?(M&16&&W(ie,K,oe),g!==ie&&u(B,g)):M&16?k&16?re(ie,g,B,Z,K,oe,ce,te,he):W(ie,K,oe,!0):(M&8&&u(B,""),k&16&&_(g,B,Z,K,oe,ce,te,he))},le=(w,E,B,Z,K,oe,ce,te,he)=>{w=w||Li,E=E||Li;const ie=w.length,M=E.length,g=Math.min(ie,M);let P;for(P=0;P<g;P++){const k=E[P]=he?En(E[P]):nn(E[P]);p(w[P],k,B,null,K,oe,ce,te,he)}ie>M?W(w,K,oe,!0,!1,g):_(E,B,Z,K,oe,ce,te,he,g)},re=(w,E,B,Z,K,oe,ce,te,he)=>{let ie=0;const M=E.length;let g=w.length-1,P=M-1;for(;ie<=g&&ie<=P;){const k=w[ie],J=E[ie]=he?En(E[ie]):nn(E[ie]);if(jn(k,J))p(k,J,B,null,K,oe,ce,te,he);else break;ie++}for(;ie<=g&&ie<=P;){const k=w[g],J=E[P]=he?En(E[P]):nn(E[P]);if(jn(k,J))p(k,J,B,null,K,oe,ce,te,he);else break;g--,P--}if(ie>g){if(ie<=P){const k=P+1,J=k<M?E[k].el:Z;for(;ie<=P;)p(null,E[ie]=he?En(E[ie]):nn(E[ie]),B,J,K,oe,ce,te,he),ie++}}else if(ie>P)for(;ie<=g;)V(w[ie],K,oe,!0),ie++;else{const k=ie,J=ie,ae=new Map;for(ie=J;ie<=P;ie++){const xe=E[ie]=he?En(E[ie]):nn(E[ie]);xe.key!=null&&ae.set(xe.key,ie)}let _e,fe=0;const q=P-J+1;let Se=!1,Ce=0;const ye=new Array(q);for(ie=0;ie<q;ie++)ye[ie]=0;for(ie=k;ie<=g;ie++){const xe=w[ie];if(fe>=q){V(xe,K,oe,!0);continue}let Pe;if(xe.key!=null)Pe=ae.get(xe.key);else for(_e=J;_e<=P;_e++)if(ye[_e-J]===0&&jn(xe,E[_e])){Pe=_e;break}Pe===void 0?V(xe,K,oe,!0):(ye[Pe-J]=ie+1,Pe>=Ce?Ce=Pe:Se=!0,p(xe,E[Pe],B,null,K,oe,ce,te,he),fe++)}const Te=Se?Mh(ye):Li;for(_e=Te.length-1,ie=q-1;ie>=0;ie--){const xe=J+ie,Pe=E[xe],je=xe+1<M?E[xe+1].el:Z;ye[ie]===0?p(null,Pe,B,je,K,oe,ce,te,he):Se&&(_e<0||ie!==Te[_e]?H(Pe,B,je,2):_e--)}}},H=(w,E,B,Z,K=null)=>{const{el:oe,type:ce,transition:te,children:he,shapeFlag:ie}=w;if(ie&6){H(w.component.subTree,E,B,Z);return}if(ie&128){w.suspense.move(E,B,Z);return}if(ie&64){ce.move(w,E,B,Ee);return}if(ce===zt){i(oe,E,B);for(let g=0;g<he.length;g++)H(he[g],E,B,Z);i(w.anchor,E,B);return}if(ce===Gs){v(w,E,B);return}if(Z!==2&&ie&1&&te)if(Z===0)te.beforeEnter(oe),i(oe,E,B),wt(()=>te.enter(oe),K);else{const{leave:g,delayLeave:P,afterLeave:k}=te,J=()=>i(oe,E,B),ae=()=>{g(oe,()=>{J(),k&&k()})};P?P(oe,J,ae):ae()}else i(oe,E,B)},V=(w,E,B,Z=!1,K=!1)=>{const{type:oe,props:ce,ref:te,children:he,dynamicChildren:ie,shapeFlag:M,patchFlag:g,dirs:P}=w;if(te!=null&&No(te,null,B,w,!0),M&256){E.ctx.deactivate(w);return}const k=M&1&&P,J=!rs(w);let ae;if(J&&(ae=ce&&ce.onVnodeBeforeUnmount)&&Qt(ae,E,w),M&6)ge(w.component,B,Z);else{if(M&128){w.suspense.unmount(B,Z);return}k&&zn(w,null,E,"beforeUnmount"),M&64?w.type.remove(w,E,B,K,Ee,Z):ie&&(oe!==zt||g>0&&g&64)?W(ie,E,B,!1,!0):(oe===zt&&g&384||!K&&M&16)&&W(he,E,B),Z&&pe(w)}(J&&(ae=ce&&ce.onVnodeUnmounted)||k)&&wt(()=>{ae&&Qt(ae,E,w),k&&zn(w,null,E,"unmounted")},B)},pe=w=>{const{type:E,el:B,anchor:Z,transition:K}=w;if(E===zt){de(B,Z);return}if(E===Gs){S(w);return}const oe=()=>{r(B),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:ce,delayLeave:te}=K,he=()=>ce(B,oe);te?te(w.el,oe,he):he()}else oe()},de=(w,E)=>{let B;for(;w!==E;)B=h(w),r(w),w=B;r(E)},ge=(w,E,B)=>{const{bum:Z,scope:K,update:oe,subTree:ce,um:te}=w;Z&&ns(Z),K.stop(),oe&&(oe.active=!1,V(ce,w,E,B)),te&&wt(te,E),wt(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},W=(w,E,B,Z=!1,K=!1,oe=0)=>{for(let ce=oe;ce<w.length;ce++)V(w[ce],E,B,Z,K)},Ne=w=>w.shapeFlag&6?Ne(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),be=(w,E,B)=>{w==null?E._vnode&&V(E._vnode,null,null,!0):p(E._vnode||null,w,E,null,null,null,B),Ea(),Ic(),E._vnode=w},Ee={p,um:V,m:H,r:pe,mt:N,mc:_,pc:G,pbc:D,n:Ne,o:n};let Me,He;return e&&([Me,He]=e(Ee)),{render:be,hydrate:Me,createApp:_h(be,Me)}}function Bn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Jc(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=En(r[s]),o.el=a.el),t||Jc(a,o)),o.type===Es&&(o.el=a.el)}}function Mh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const yh=n=>n.__isTeleport,zt=Symbol(void 0),Es=Symbol(void 0),Jt=Symbol(void 0),Gs=Symbol(void 0),lr=[];let Kt=null;function Ai(n=!1){lr.push(Kt=n?null:[])}function bh(){lr.pop(),Kt=lr[lr.length-1]||null}let mr=1;function Na(n){mr+=n}function Qc(n){return n.dynamicChildren=mr>0?Kt||Li:null,bh(),mr>0&&Kt&&Kt.push(n),n}function ir(n,e,t,i,r,s){return Qc(Ve(n,e,t,i,r,s,!0))}function Sh(n,e,t,i,r){return Qc(on(n,e,t,i,r,!0))}function wh(n){return n?n.__v_isVNode===!0:!1}function jn(n,e){return n.type===e.type&&n.key===e.key}const As="__vInternal",eu=({key:n})=>n??null,ss=({ref:n,ref_key:e,ref_for:t})=>n!=null?rt(n)||gt(n)||Ie(n)?{i:Vt,r:n,k:e,f:!!t}:n:null;function Ve(n,e=null,t=null,i=0,r=null,s=n===zt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&eu(e),ref:e&&ss(e),scopeId:Uc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return o?(ca(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=rt(t)?8:16),mr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const on=Th;function Th(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ih)&&(n=Jt),wh(n)){const o=In(n,e,!0);return t&&ca(o,t),mr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag|=-2,o}if(zh(n)&&(n=n.__vccOpts),e){e=Eh(e);let{class:o,style:l}=e;o&&!rt(o)&&(e.class=jo(o)),Ke(l)&&(Tc(l)&&!Le(l)&&(l=_t({},l)),e.style=Xo(l))}const a=rt(n)?1:Gf(n)?128:yh(n)?64:Ke(n)?4:Ie(n)?2:0;return Ve(n,e,t,i,r,a,s,!0)}function Eh(n){return n?Tc(n)||As in n?_t({},n):n:null}function In(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Lh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&eu(o),ref:e&&e.ref?t&&r?Le(r)?r.concat(ss(e)):[r,ss(e)]:ss(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&In(n.ssContent),ssFallback:n.ssFallback&&In(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function Ah(n=" ",e=0){return on(Es,null,n,e)}function Ch(n="",e=!1){return e?(Ai(),Sh(Jt,null,n)):on(Jt,null,n)}function nn(n){return n==null||typeof n=="boolean"?on(Jt):Le(n)?on(zt,null,n.slice()):typeof n=="object"?En(n):on(Es,null,String(n))}function En(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:In(n)}function ca(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ca(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(As in e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),i&64?(t=16,e=[Ah(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=jo([e.class,i.class]));else if(r==="style")e.style=Xo([e.style,i.style]);else if(_s(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Qt(n,e,t,i=null){kt(n,e,7,[t,i])}const Rh=Zc();let Ph=0;function Dh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rh,s={uid:Ph++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(i,r),emitsOptions:Nc(i,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:i.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ff.bind(null,s),n.ce&&n.ce(s),s}let ft=null;const Ih=()=>ft||Vt,Oi=n=>{ft=n,n.scope.on()},ti=()=>{ft&&ft.scope.off(),ft=null};function tu(n){return n.vnode.shapeFlag&4}let gr=!1;function Fh(n,e=!1){gr=e;const{props:t,children:i}=n.vnode,r=tu(n);fh(n,t,r,e),ph(n,i);const s=r?Nh(n,e):void 0;return gr=!1,s}function Nh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ec(new Proxy(n.ctx,sh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Oh(n):null;Oi(n),Hi();const s=Ln(i,n,0,[n.props,r]);if(Wi(),ti(),uc(s)){if(s.then(ti,ti),e)return s.then(a=>{Ua(n,a,e)}).catch(a=>{ys(a,n,0)});n.asyncDep=s}else Ua(n,s,e)}else nu(n,e)}function Ua(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ke(e)&&(n.setupState=Lc(e)),nu(n,t)}let Oa;function nu(n,e,t){const i=n.type;if(!n.render){if(!e&&Oa&&!i.render){const r=i.template||aa(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:o},a),l);i.render=Oa(r,c)}}n.render=i.render||Zt}Oi(n),Hi(),oh(n),Wi(),ti()}function Uh(n){return new Proxy(n.attrs,{get(e,t){return Ft(n,"get","$attrs"),e[t]}})}function Oh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Uh(n))},slots:n.slots,emit:n.emit,expose:e}}function Cs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Lc(Ec(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](n)},has(e,t){return t in e||t in ar}}))}function zh(n){return Ie(n)&&"__vccOpts"in n}const Bh=(n,e)=>Af(n,e,gr),Gh=Symbol(""),Vh=()=>is(Gh),kh="3.2.45",Hh="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,za=Yn&&Yn.createElement("template"),Wh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Yn.createElementNS(Hh,n):Yn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{za.innerHTML=i?`<svg>${n}</svg>`:n;const o=za.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function qh(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Xh(n,e,t){const i=n.style,r=rt(t);if(t&&!r){for(const s in t)Uo(i,s,t[s]);if(e&&!rt(e))for(const s in e)t[s]==null&&Uo(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ba=/\s*!important$/;function Uo(n,e,t){if(Le(t))t.forEach(i=>Uo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=jh(n,e);Ba.test(t)?n.setProperty(ki(i),t.replace(Ba,""),"important"):n[i]=t}}const Ga=["Webkit","Moz","ms"],Vs={};function jh(n,e){const t=Vs[e];if(t)return t;let i=Ni(e);if(i!=="filter"&&i in n)return Vs[e]=i;i=dc(i);for(let r=0;r<Ga.length;r++){const s=Ga[r]+i;if(s in n)return Vs[e]=s}return e}const Va="http://www.w3.org/1999/xlink";function Yh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Va,e.slice(6,e.length)):n.setAttributeNS(Va,e,t);else{const s=zu(e);t==null||s&&!lc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function $h(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=lc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function $n(n,e,t,i){n.addEventListener(e,t,i)}function Kh(n,e,t,i){n.removeEventListener(e,t,i)}function Zh(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Jh(e);if(i){const c=s[e]=td(i,r);$n(n,o,c,l)}else a&&(Kh(n,o,a,l),s[e]=void 0)}}const ka=/(?:Once|Passive|Capture)$/;function Jh(n){let e;if(ka.test(n)){e={};let i;for(;i=n.match(ka);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let ks=0;const Qh=Promise.resolve(),ed=()=>ks||(Qh.then(()=>ks=0),ks=Date.now());function td(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;kt(nd(i,t.value),e,5,[i])};return t.value=n,t.attached=ed(),t}function nd(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ha=/^on[a-z]/,id=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?qh(n,i,r):e==="style"?Xh(n,t,i):_s(e)?Yo(e)||Zh(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rd(n,e,i,r))?$h(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Yh(n,e,i,r))};function rd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Ha.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Ha.test(e)&&rt(t)?!1:e in n}const sd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xf.props;const ds=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>ns(e,t):e};function od(n){n.target.composing=!0}function Wa(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yi={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=ds(r);const s=i||r.props&&r.props.type==="number";$n(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=fr(o)),n._assign(o)}),t&&$n(n,"change",()=>{n.value=n.value.trim()}),e||($n(n,"compositionstart",od),$n(n,"compositionend",Wa),$n(n,"change",Wa))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=ds(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&fr(n.value)===e))return;const a=e??"";n.value!==a&&(n.value=a)}},ad={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=xs(e);$n(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?fr(ps(a)):ps(a));n._assign(n.multiple?r?new Set(s):s:s[0])}),n._assign=ds(i)},mounted(n,{value:e}){qa(n,e)},beforeUpdate(n,e,t){n._assign=ds(t)},updated(n,{value:e}){qa(n,e)}};function qa(n,e){const t=n.multiple;if(!(t&&!Le(e)&&!xs(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],a=ps(s);if(t)Le(e)?s.selected=Gu(e,a)>-1:s.selected=e.has(a);else if(gs(ps(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ps(n){return"_value"in n?n._value:n.value}const ld=_t({patchProp:id},Wh);let Xa;function cd(){return Xa||(Xa=xh(ld))}const ud=(...n)=>{const e=cd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fd(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function fd(n){return rt(n)?document.querySelector(n):n}const hd=""+new URL("logo-ae88b775.jpeg",import.meta.url).href;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="148",dd=0,ja=1,pd=2,iu=1,md=2,rr=3,ri=0,Ht=1,fa=2,Ir=3,Rn=0,Ii=1,Ya=2,$a=3,Ka=4,gd=5,Ei=100,_d=101,xd=102,Za=103,Ja=104,vd=200,Md=201,yd=202,bd=203,ru=204,su=205,Sd=206,wd=207,Td=208,Ed=209,Ad=210,Cd=0,Ld=1,Rd=2,Oo=3,Pd=4,Dd=5,Id=6,Fd=7,ou=0,Nd=1,Ud=2,xn=0,Od=1,zd=2,Bd=3,Gd=4,Vd=5,au=300,zi=301,Bi=302,zo=303,Bo=304,Ls=306,Go=1e3,Yt=1001,Vo=1002,bt=1003,Qa=1004,Hs=1005,Bt=1006,kd=1007,_r=1008,si=1009,Hd=1010,Wd=1011,lu=1012,qd=1013,Jn=1014,Qn=1015,xr=1016,Xd=1017,jd=1018,Fi=1020,Yd=1021,$d=1022,$t=1023,Kd=1024,Zd=1025,ni=1026,Gi=1027,Jd=1028,Qd=1029,ep=1030,tp=1031,np=1033,Ws=33776,qs=33777,Xs=33778,js=33779,el=35840,tl=35841,nl=35842,il=35843,ip=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,vl=37821,Ml=36492,oi=3e3,Ye=3001,rp=3200,sp=3201,op=0,ap=1,tn="srgb",vr="srgb-linear",Ys=7680,lp=519,yl=35044,bl="300 es",ko=1035;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,Sl=180/Math.PI;function yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function cp(n,e){return(n%e+e)%e}function Ks(n,e,t){return(1-t)*n+t*e}function wl(n){return(n&n-1)===0&&n!==0}function Ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],y=r[6],T=r[1],v=r[4],S=r[7],A=r[2],R=r[5],I=r[8];return s[0]=a*p+o*T+l*A,s[3]=a*d+o*v+l*R,s[6]=a*y+o*S+l*I,s[1]=c*p+u*T+f*A,s[4]=c*d+u*v+f*R,s[7]=c*y+u*S+f*I,s[2]=h*p+m*T+x*A,s[5]=h*d+m*v+x*R,s[8]=h*y+m*S+x*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Dt;function cu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Js={[tn]:{[vr]:ii},[vr]:{[tn]:os}},vt={legacyMode:!0,get workingColorSpace(){return vr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Js[e]&&Js[e][t]!==void 0){const i=Js[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Wt={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Qs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ur(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=cp(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Qs(a,s,e+1/3),this.g=Qs(a,s,e),this.b=Qs(a,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=tn){const i=uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return vt.fromWorkingColorSpace(Ur(this,nt),e),St(nt.r*255,0,255)<<16^St(nt.g*255,0,255)<<8^St(nt.b*255,0,255)<<0}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Ur(this,nt),t);const i=nt.r,r=nt.g,s=nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Ur(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=tn){return vt.fromWorkingColorSpace(Ur(this,nt),e),e!==tn?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Nr);const i=Ks(Wt.h,Nr.h,t),r=Ks(Wt.s,Nr.s,t),s=Ks(Wt.l,Nr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Je.NAMES=uu;let ui;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ms("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hu{constructor(e=null){this.isSource=!0,this.uuid=yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eo(r[a].image)):s.push(eo(r[a]))}else s=eo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class It extends qi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Yt,r=Yt,s=Bt,a=_r,o=$t,l=si,c=It.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=yr(),this.name="",this.source=new hu(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=au;It.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],y=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,A=(y+1)/2,R=(u+h)/4,I=(f+p)/4,_=(x+d)/4;return v>S&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=I/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=I/s,r=_/s),this.set(i,r,s,t),this}let T=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-x)/T,this.y=(f-p)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends qi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class du extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==x){let d=1-o;const y=l*h+c*m+u*x+f*p,T=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){const A=Math.sqrt(v),R=Math.atan2(A,y*T);d=Math.sin(d*R)/A,o=Math.sin(o*R)/A}const S=o*T;if(l=l*d+h*S,c=c*d+m*S,u=u*d+x*S,f=f*d+p*S,d===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new z,Tl=new br;class Sr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox),no.applyMatrix4(e.matrixWorld),this.union(no);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Or.subVectors(this.max,$i),fi.subVectors(e.a,$i),hi.subVectors(e.b,$i),di.subVectors(e.c,$i),bn.subVectors(hi,fi),Sn.subVectors(di,hi),Vn.subVectors(fi,di);let t=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-Vn.y,Vn.x,0];return!io(t,fi,hi,di,Or)||(t=[1,0,0,0,1,0,0,0,1],!io(t,fi,hi,di,Or))?!1:(zr.crossVectors(bn,Sn),t=[zr.x,zr.y,zr.z],io(t,fi,hi,di,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new z,new z,new z,new z,new z,new z,new z,new z],Gn=new z,no=new Sr,fi=new z,hi=new z,di=new z,bn=new z,Sn=new z,Vn=new z,$i=new z,Or=new z,zr=new z,kn=new z;function io(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kn.fromArray(n,s);const o=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),u=i.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hp=new Sr,Ki=new z,ro=new z;class Rs{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ki,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(ro)),this.expandByPoint(Ki.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new z,so=new z,Br=new z,wn=new z,oo=new z,Gr=new z,ao=new z;class pu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.direction).multiplyScalar(t).add(this.origin),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){so.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(so);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=wn.dot(this.direction),l=-wn.dot(Br),c=wn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Br).multiplyScalar(h).add(so),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,s){oo.subVectors(t,e),Gr.subVectors(i,e),ao.crossVectors(oo,Gr);let a=this.direction.dot(ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(Gr.crossVectors(wn,Gr));if(l<0)return null;const c=o*this.direction.dot(oo.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(ao);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,p,d){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=f,y[14]=h,y[3]=m,y[7]=x,y[11]=p,y[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,pp)}lookAt(e,t,i){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Tn.crossVectors(i,Rt),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Tn.crossVectors(i,Rt)),Tn.normalize(),Vr.crossVectors(Rt,Tn),r[0]=Tn.x,r[4]=Vr.x,r[8]=Rt.x,r[1]=Tn.y,r[5]=Vr.y,r[9]=Rt.y,r[2]=Tn.z,r[6]=Vr.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],y=i[14],T=i[3],v=i[7],S=i[11],A=i[15],R=r[0],I=r[4],_=r[8],C=r[12],D=r[1],Y=r[5],se=r[9],O=r[13],N=r[2],$=r[6],ne=r[10],ee=r[14],G=r[3],le=r[7],re=r[11],H=r[15];return s[0]=a*R+o*D+l*N+c*G,s[4]=a*I+o*Y+l*$+c*le,s[8]=a*_+o*se+l*ne+c*re,s[12]=a*C+o*O+l*ee+c*H,s[1]=u*R+f*D+h*N+m*G,s[5]=u*I+f*Y+h*$+m*le,s[9]=u*_+f*se+h*ne+m*re,s[13]=u*C+f*O+h*ee+m*H,s[2]=x*R+p*D+d*N+y*G,s[6]=x*I+p*Y+d*$+y*le,s[10]=x*_+p*se+d*ne+y*re,s[14]=x*C+p*O+d*ee+y*H,s[3]=T*R+v*D+S*N+A*G,s[7]=T*I+v*Y+S*$+A*le,s[11]=T*_+v*se+S*ne+A*re,s[15]=T*C+v*O+S*ee+A*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],y=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+y*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],y=e[15],T=f*d*c-p*h*c+p*l*m-o*d*m-f*l*y+o*h*y,v=x*h*c-u*d*c-x*l*m+a*d*m+u*l*y-a*h*y,S=u*p*c-x*f*c+x*o*m-a*p*m-u*o*y+a*f*y,A=x*f*l-u*p*l-x*o*h+a*p*h+u*o*d-a*f*d,R=t*T+i*v+r*S+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=T*I,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*y-i*h*y)*I,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*y+i*l*y)*I,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*I,e[4]=v*I,e[5]=(u*d*s-x*h*s+x*r*m-t*d*m-u*r*y+t*h*y)*I,e[6]=(x*l*s-a*d*s-x*r*c+t*d*c+a*r*y-t*l*y)*I,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*I,e[8]=S*I,e[9]=(x*f*s-u*p*s-x*i*m+t*p*m+u*i*y-t*f*y)*I,e[10]=(a*p*s-x*o*s+x*i*c-t*p*c-a*i*y+t*o*y)*I,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*I,e[12]=A*I,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*I,e[14]=(x*o*r-a*p*r-x*i*l+t*p*l+a*i*d-t*o*d)*I,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,p=a*u,d=a*f,y=o*f,T=l*c,v=l*u,S=l*f,A=i.x,R=i.y,I=i.z;return r[0]=(1-(p+y))*A,r[1]=(m+S)*A,r[2]=(x-v)*A,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+y))*R,r[6]=(d+T)*R,r[7]=0,r[8]=(x+v)*I,r[9]=(d-T)*I,r[10]=(1-(h+p))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/a,f=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new z,qt=new it,dp=new z(0,0,0),pp=new z(1,1,1),Tn=new z,Vr=new z,Rt=new z,El=new it,Al=new br;class wr{constructor(e=0,t=0,i=0,r=wr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wr.DefaultOrder="XYZ";wr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Cl=new z,mi=new br,hn=new it,kr=new z,Zi=new z,gp=new z,_p=new br,Ll=new z(1,0,0),Rl=new z(0,1,0),Pl=new z(0,0,1),xp={type:"added"},Dl={type:"removed"};class Et extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DefaultUp.clone();const e=new z,t=new wr,i=new br,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Dt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DefaultMatrixWorldAutoUpdate,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Zi,kr,this.up):hn.lookAt(kr,Zi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(hn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DefaultUp=new z(0,1,0);Et.DefaultMatrixAutoUpdate=!0;Et.DefaultMatrixWorldAutoUpdate=!0;const Xt=new z,dn=new z,lo=new z,pn=new z,gi=new z,_i=new z,Il=new z,co=new z,uo=new z,fo=new z;class _n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),dn.subVectors(i,t),lo.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(dn),l=Xt.dot(lo),c=dn.dot(dn),u=dn.dot(lo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,pn),l.set(0,0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),dn.subVectors(e,t),Xt.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return _n.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,i),_i.subVectors(s,i),co.subVectors(e,i);const l=gi.dot(co),c=_i.dot(co);if(l<=0&&c<=0)return t.copy(i);uo.subVectors(e,r);const u=gi.dot(uo),f=_i.dot(uo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gi,a);fo.subVectors(e,s);const m=gi.dot(fo),x=_i.dot(fo);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(_i,o);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return Il.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Il,o);const y=1/(d+p+h);return a=p*y,o=h*y,t.copy(i).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vp=0;class Tr extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Ii,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gu extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new z,Hr=new Re;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _u extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xu extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pn extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mp=0;const Ot=new it,ho=new Et,xi=new z,Pt=new Sr,Ji=new Sr,ut=new z;class Tt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?xu:_u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Pt.min,Ji.min),Pt.expandByPoint(ut),ut.addVectors(Pt.max,Ji.max),Pt.expandByPoint(ut)):(Pt.expandByPoint(Ji.min),Pt.expandByPoint(Ji.max))}Pt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),ut.add(xi)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new z,u[D]=new z;const f=new z,h=new z,m=new z,x=new Re,p=new Re,d=new Re,y=new z,T=new z;function v(D,Y,se){f.fromArray(r,D*3),h.fromArray(r,Y*3),m.fromArray(r,se*3),x.fromArray(a,D*2),p.fromArray(a,Y*2),d.fromArray(a,se*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const O=1/(p.x*d.y-d.x*p.y);isFinite(O)&&(y.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(O),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(O),c[D].add(y),c[Y].add(y),c[se].add(y),u[D].add(T),u[Y].add(T),u[se].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,Y=S.length;D<Y;++D){const se=S[D],O=se.start,N=se.count;for(let $=O,ne=O+N;$<ne;$+=3)v(i[$+0],i[$+1],i[$+2])}const A=new z,R=new z,I=new z,_=new z;function C(D){I.fromArray(s,D*3),_.copy(I);const Y=c[D];A.copy(Y),A.sub(I.multiplyScalar(I.dot(Y))).normalize(),R.crossVectors(_,Y);const O=R.dot(u[D])<0?-1:1;l[D*4]=A.x,l[D*4+1]=A.y,l[D*4+2]=A.z,l[D*4+3]=O}for(let D=0,Y=S.length;D<Y;++D){const se=S[D],O=se.start,N=se.count;for(let $=O,ne=O+N;$<ne;$+=3)C(i[$+0]),C(i[$+1]),C(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let y=0;y<u;y++)h[x++]=c[m++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new it,vi=new pu,po=new Rs,Qi=new z,er=new z,tr=new z,mo=new z,Wr=new z,qr=new Re,Xr=new Re,jr=new Re,go=new z,Yr=new z;class An extends Et{constructor(e=new Tt,t=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(mo.fromBufferAttribute(f,e),a?Wr.addScaledVector(mo,u):Wr.addScaledVector(mo.sub(t),u))}t.add(Wr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),e.ray.intersectsSphere(po)===!1)||(Fl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Fl),i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let v=y,S=T;v<S;v+=3){const A=o.getX(v),R=o.getX(v+1),I=o.getX(v+2);a=$r(this,d,e,vi,c,u,A,R,I),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const y=o.getX(p),T=o.getX(p+1),v=o.getX(p+2);a=$r(this,r,e,vi,c,u,y,T,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=y,S=T;v<S;v+=3){const A=v,R=v+1,I=v+2;a=$r(this,d,e,vi,c,u,A,R,I),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const y=p,T=p+1,v=p+2;a=$r(this,r,e,vi,c,u,y,T,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function yp(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ri,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function $r(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Qi),n.getVertexPosition(o,er),n.getVertexPosition(l,tr);const c=yp(n,e,t,i,Qi,er,tr,go);if(c){r&&(qr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),c.uv=_n.getUV(go,Qi,er,tr,qr,Xr,jr,new Re)),s&&(qr.fromBufferAttribute(s,a),Xr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),c.uv2=_n.getUV(go,Qi,er,tr,qr,Xr,jr,new Re));const u={a,b:o,c:l,normal:new z,materialIndex:0};_n.getNormal(Qi,er,tr,u.normal),c.face=u}return c}class Er extends Tt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(f,2));function x(p,d,y,T,v,S,A,R,I,_,C){const D=S/I,Y=A/_,se=S/2,O=A/2,N=R/2,$=I+1,ne=_+1;let ee=0,G=0;const le=new z;for(let re=0;re<ne;re++){const H=re*Y-O;for(let V=0;V<$;V++){const pe=V*D-se;le[p]=pe*T,le[d]=H*v,le[y]=N,c.push(le.x,le.y,le.z),le[p]=0,le[d]=0,le[y]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(V/I),f.push(1-re/_),ee+=1}}for(let re=0;re<_;re++)for(let H=0;H<I;H++){const V=h+H+$*re,pe=h+H+$*(re+1),de=h+(H+1)+$*(re+1),ge=h+(H+1)+$*re;l.push(V,pe,ge),l.push(pe,de,ge),G+=6}o.addGroup(m,G,C),m+=G,h+=ee}}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Vi(n[t]);for(const r in i)e[r]=i[r]}return e}function bp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vu(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?tn:vr}const Sp={clone:Vi,merge:yt};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,yi=1;class Ep extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Gt(Mi,yi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Gt(Mi,yi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Gt(Mi,yi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Gt(Mi,yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Gt(Mi,yi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Gt(Mi,yi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=xn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class yu extends It{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Rn});s.uniforms.tEquirect.value=t;const a=new An(r,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=Bt),new Ep(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const _o=new z,Cp=new z,Lp=new Dt;class Wn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_o.subVectors(i,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(_o),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(_o).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Rs,Kr=new z;class bu{constructor(e=new Wn,t=new Wn,i=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],y=i[13],T=i[14],v=i[15];return t[0].setComponents(o-r,f-l,p-h,v-d).normalize(),t[1].setComponents(o+r,f+l,p+h,v+d).normalize(),t[2].setComponents(o+s,f+c,p+m,v+y).normalize(),t[3].setComponents(o-s,f-c,p-m,v-y).normalize(),t[4].setComponents(o-a,f-u,p-x,v-T).normalize(),t[5].setComponents(o+a,f+u,p+x,v+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Su(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ha extends Tt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],p=[],d=[];for(let y=0;y<u;y++){const T=y*h-a;for(let v=0;v<c;v++){const S=v*f-s;x.push(S,-T,0),p.push(0,0,1),d.push(v/o),d.push(1-y/l)}}for(let y=0;y<l;y++)for(let T=0;T<o;T++){const v=T+c*y,S=T+c*(y+1),A=T+1+c*(y+1),R=T+1+c*y;m.push(v,S,R),m.push(S,A,R)}this.setIndex(m),this.setAttribute("position",new Pn(x,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(d,2))}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op="vec3 transformed = vec3( position );",zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Gp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Mm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,km=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ug=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,zg=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Yg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,e_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:Pp,alphamap_pars_fragment:Dp,alphatest_fragment:Ip,alphatest_pars_fragment:Fp,aomap_fragment:Np,aomap_pars_fragment:Up,begin_vertex:Op,beginnormal_vertex:zp,bsdfs:Bp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:qp,color_fragment:Xp,color_pars_fragment:jp,color_pars_vertex:Yp,color_vertex:$p,common:Kp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,encodings_fragment:im,encodings_pars_fragment:rm,envmap_fragment:sm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:Mm,envmap_vertex:cm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:hm,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:ym,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Em,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Lm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Im,map_fragment:Fm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Om,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Bm,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:km,morphtarget_vertex:Hm,normal_fragment_begin:Wm,normal_fragment_maps:qm,normal_pars_fragment:Xm,normal_pars_vertex:jm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Qm,output_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:rg,dithering_pars_fragment:sg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:ug,shadowmask_pars_fragment:fg,skinbase_vertex:hg,skinning_pars_vertex:dg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:yg,uv_pars_fragment:bg,uv_pars_vertex:Sg,uv_vertex:wg,uv2_pars_fragment:Tg,uv2_pars_vertex:Eg,uv2_vertex:Ag,worldpos_vertex:Cg,background_vert:Lg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Dg,cube_vert:Ig,cube_frag:Fg,depth_vert:Ng,depth_frag:Ug,distanceRGBA_vert:Og,distanceRGBA_frag:zg,equirect_vert:Bg,equirect_frag:Gg,linedashed_vert:Vg,linedashed_frag:kg,meshbasic_vert:Hg,meshbasic_frag:Wg,meshlambert_vert:qg,meshlambert_frag:Xg,meshmatcap_vert:jg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:Kg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:r_,shadow_vert:s_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},rn={basic:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:yt([me.points,me.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:yt([me.common,me.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:yt([me.sprite,me.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:yt([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:yt([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};rn.physical={uniforms:yt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Zr={r:0,b:0,g:0};function c_(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(d,y){let T=!1,v=y.isScene===!0?y.background:null;v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v));const S=n.xr,A=S.getSession&&S.getSession();A&&A.environmentBlendMode==="additive"&&(v=null),v===null?p(o,l):v&&v.isColor&&(p(v,1),T=!0),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ls)?(u===void 0&&(u=new An(new Er(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Vi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=v.encoding!==Ye,(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new An(new ha(2,2),new li({name:"BackgroundMaterial",uniforms:Vi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=v.encoding!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,y){d.getRGB(Zr,vu(n)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(d,y=1){o.set(d),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:x}}function u_(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(N,$,ne,ee,G){let le=!1;if(a){const re=p(ee,ne,$);c!==re&&(c=re,m(c.object)),le=y(N,ee,ne,G),le&&T(N,ee,ne,G)}else{const re=$.wireframe===!0;(c.geometry!==ee.id||c.program!==ne.id||c.wireframe!==re)&&(c.geometry=ee.id,c.program=ne.id,c.wireframe=re,le=!0)}G!==null&&t.update(G,34963),(le||u)&&(u=!1,_(N,$,ne,ee),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,$,ne){const ee=ne.wireframe===!0;let G=o[N.id];G===void 0&&(G={},o[N.id]=G);let le=G[$.id];le===void 0&&(le={},G[$.id]=le);let re=le[ee];return re===void 0&&(re=d(h()),le[ee]=re),re}function d(N){const $=[],ne=[],ee=[];for(let G=0;G<r;G++)$[G]=0,ne[G]=0,ee[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ne,attributeDivisors:ee,object:N,attributes:{},index:null}}function y(N,$,ne,ee){const G=c.attributes,le=$.attributes;let re=0;const H=ne.getAttributes();for(const V in H)if(H[V].location>=0){const de=G[V];let ge=le[V];if(ge===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),de===void 0||de.attribute!==ge||ge&&de.data!==ge.data)return!0;re++}return c.attributesNum!==re||c.index!==ee}function T(N,$,ne,ee){const G={},le=$.attributes;let re=0;const H=ne.getAttributes();for(const V in H)if(H[V].location>=0){let de=le[V];de===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(de=N.instanceColor));const ge={};ge.attribute=de,de&&de.data&&(ge.data=de.data),G[V]=ge,re++}c.attributes=G,c.attributesNum=re,c.index=ee}function v(){const N=c.newAttributes;for(let $=0,ne=N.length;$<ne;$++)N[$]=0}function S(N){A(N,0)}function A(N,$){const ne=c.newAttributes,ee=c.enabledAttributes,G=c.attributeDivisors;ne[N]=1,ee[N]===0&&(n.enableVertexAttribArray(N),ee[N]=1),G[N]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),G[N]=$)}function R(){const N=c.newAttributes,$=c.enabledAttributes;for(let ne=0,ee=$.length;ne<ee;ne++)$[ne]!==N[ne]&&(n.disableVertexAttribArray(ne),$[ne]=0)}function I(N,$,ne,ee,G,le){i.isWebGL2===!0&&(ne===5124||ne===5125)?n.vertexAttribIPointer(N,$,ne,G,le):n.vertexAttribPointer(N,$,ne,ee,G,le)}function _(N,$,ne,ee){if(i.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=ee.attributes,le=ne.getAttributes(),re=$.defaultAttributeValues;for(const H in le){const V=le[H];if(V.location>=0){let pe=G[H];if(pe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),pe!==void 0){const de=pe.normalized,ge=pe.itemSize,W=t.get(pe);if(W===void 0)continue;const Ne=W.buffer,be=W.type,Ee=W.bytesPerElement;if(pe.isInterleavedBufferAttribute){const Me=pe.data,He=Me.stride,w=pe.offset;if(Me.isInstancedInterleavedBuffer){for(let E=0;E<V.locationSize;E++)A(V.location+E,Me.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let E=0;E<V.locationSize;E++)S(V.location+E);n.bindBuffer(34962,Ne);for(let E=0;E<V.locationSize;E++)I(V.location+E,ge/V.locationSize,be,de,He*Ee,(w+ge/V.locationSize*E)*Ee)}else{if(pe.isInstancedBufferAttribute){for(let Me=0;Me<V.locationSize;Me++)A(V.location+Me,pe.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Me=0;Me<V.locationSize;Me++)S(V.location+Me);n.bindBuffer(34962,Ne);for(let Me=0;Me<V.locationSize;Me++)I(V.location+Me,ge/V.locationSize,be,de,ge*Ee,ge/V.locationSize*Me*Ee)}}else if(re!==void 0){const de=re[H];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}R()}function C(){se();for(const N in o){const $=o[N];for(const ne in $){const ee=$[ne];for(const G in ee)x(ee[G].object),delete ee[G];delete $[ne]}delete o[N]}}function D(N){if(o[N.id]===void 0)return;const $=o[N.id];for(const ne in $){const ee=$[ne];for(const G in ee)x(ee[G].object),delete ee[G];delete $[ne]}delete o[N.id]}function Y(N){for(const $ in o){const ne=o[$];if(ne[N.id]===void 0)continue;const ee=ne[N.id];for(const G in ee)x(ee[G].object),delete ee[G];delete ne[N.id]}}function se(){O(),u=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:se,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function f_(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function h_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),y=n.getParameter(36348),T=n.getParameter(36349),v=h>0,S=a||e.has("OES_texture_float"),A=v&&S,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:R}}function d_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Wn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,y=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const T=s?0:i,v=T*4;let S=y.clippingState||null;l.value=S,S=u(x,h,v,m);for(let A=0;A!==v;++A)S[A]=t[A];y.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const y=m+p*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<y)&&(d=new Float32Array(y));for(let v=0,S=m;v!==p;++v,S+=4)a.copy(f[v]).applyMatrix4(T,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function p_(n){let e=new WeakMap;function t(a,o){return o===zo?a.mapping=zi:o===Bo&&(a.mapping=Bi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zo||o===Bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ap(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends Mu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,Nl=[.125,.215,.35,.446,.526,.582],Kn=20,xo=new m_,Ul=new Je;let vo=null;const qn=(1+Math.sqrt(5))/2,Si=1/qn,Ol=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,qn,Si),new z(0,qn,-Si),new z(Si,0,qn),new z(-Si,0,qn),new z(qn,Si,0),new z(-qn,Si,0)];class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:xr,format:$t,encoding:oi,depthBuffer:!1},r=Bl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g_(s)),this._blurMaterial=__(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ul),u.toneMapping=xn,u.autoClear=!1;const m=new gu({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),x=new An(new Er,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Ul),p=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(o.up.set(0,l[y],0),o.lookAt(c[y],0,0)):T===1?(o.up.set(0,0,l[y]),o.lookAt(0,c[y],0)):(o.up.set(0,l[y],0),o.lookAt(0,0,c[y]));const v=this._cubeSize;Jr(r,T*v,y>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new An(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(r-1)%Ol.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):Kn;d>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const y=[];let T=0;for(let I=0;I<Kn;++I){const _=I/p,C=Math.exp(-_*_/2);y.push(C),I===0?T+=C:I<d&&(T+=2*C)}for(let I=0;I<y.length;I++)y[I]=y[I]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=y,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const S=this._sizeLods[r],A=3*S*(r>v-Ci?r-v+Ci:0),R=4*(this._cubeSize-S);Jr(t,A,R,3*S,2*S),l.setRenderTarget(t),l.render(f,xo)}}function g_(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+Nl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ci?l=Nl[a-n+Ci-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,y=1,T=new Float32Array(p*x*m),v=new Float32Array(d*x*m),S=new Float32Array(y*x*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,_=R>2?0:-1,C=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];T.set(C,p*x*R),v.set(h,d*x*R);const D=[R,R,R,R,R,R];S.set(D,y*x*R)}const A=new Tt;A.setAttribute("position",new an(T,p)),A.setAttribute("uv",new an(v,d)),A.setAttribute("faceIndex",new an(S,y)),e.push(A),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bl(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function __(n,e,t){const i=new Float32Array(Kn),r=new z(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Gl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function x_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===zo||l===Bo,u=l===zi||l===Bi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new zl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new zl(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function v_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M_(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,y=p.length;d<y;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let v=0,S=T.length;v<S;v+=3){const A=T[v+0],R=T[v+1],I=T[v+2];h.push(A,R,R,I,I,A)}}else{const T=x.array;p=x.version;for(let v=0,S=T.length/3-1;v<S;v+=3){const A=v+0,R=v+1,I=v+2;h.push(A,R,R,I,I,A)}}const d=new(cu(h)?xu:_u)(h,1);d.version=p;const y=s.get(f);y&&e.remove(y),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function y_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function b_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function S_(n,e){return n[0]-e[0]}function w_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function T_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=x!==void 0?x.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let $=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",$)};d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let C=0;v===!0&&(C=1),S===!0&&(C=2),A===!0&&(C=3);let D=u.attributes.position.count*C,Y=1;D>e.maxTextureSize&&(Y=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const se=new Float32Array(D*Y*4*p),O=new du(se,D,Y,p);O.type=Qn,O.needsUpdate=!0;const N=C*4;for(let ne=0;ne<p;ne++){const ee=R[ne],G=I[ne],le=_[ne],re=D*Y*4*ne;for(let H=0;H<ee.count;H++){const V=H*N;v===!0&&(a.fromBufferAttribute(ee,H),se[re+V+0]=a.x,se[re+V+1]=a.y,se[re+V+2]=a.z,se[re+V+3]=0),S===!0&&(a.fromBufferAttribute(G,H),se[re+V+4]=a.x,se[re+V+5]=a.y,se[re+V+6]=a.z,se[re+V+7]=0),A===!0&&(a.fromBufferAttribute(le,H),se[re+V+8]=a.x,se[re+V+9]=a.y,se[re+V+10]=a.z,se[re+V+11]=le.itemSize===4?a.w:1)}}d={count:p,texture:O,size:new Re(D,Y)},s.set(u,d),u.addEventListener("dispose",$)}let y=0;for(let v=0;v<m.length;v++)y+=m[v];const T=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const x=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==x){p=[];for(let S=0;S<x;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<x;S++){const A=p[S];A[0]=S,A[1]=m[S]}p.sort(w_);for(let S=0;S<8;S++)S<x&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(S_);const d=u.morphAttributes.position,y=u.morphAttributes.normal;let T=0;for(let S=0;S<8;S++){const A=o[S],R=A[0],I=A[1];R!==Number.MAX_SAFE_INTEGER&&I?(d&&u.getAttribute("morphTarget"+S)!==d[R]&&u.setAttribute("morphTarget"+S,d[R]),y&&u.getAttribute("morphNormal"+S)!==y[R]&&u.setAttribute("morphNormal"+S,y[R]),r[S]=I,T+=I):(d&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),y&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function E_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const wu=new It,Tu=new du,Eu=new fp,Au=new yu,kl=[],Hl=[],Wl=new Float32Array(16),ql=new Float32Array(9),Xl=new Float32Array(4);function Xi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kl[r];if(s===void 0&&(s=new Float32Array(r),kl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ps(n,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Xl.set(i),n.uniformMatrix2fv(this.addr,!1,Xl),ot(t,i)}}function D_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),ot(t,i)}}function I_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Wl.set(i),n.uniformMatrix4fv(this.addr,!1,Wl),ot(t,i)}}function F_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function z_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function k_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||wu,r)}function H_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eu,r)}function W_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Au,r)}function q_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tu,r)}function X_(n){switch(n){case 5126:return A_;case 35664:return C_;case 35665:return L_;case 35666:return R_;case 35674:return P_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return F_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return O_;case 5125:return z_;case 36294:return B_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return q_}}function j_(n,e){n.uniform1fv(this.addr,e)}function Y_(n,e){const t=Xi(e,this.size,2);n.uniform2fv(this.addr,t)}function $_(n,e){const t=Xi(e,this.size,3);n.uniform3fv(this.addr,t)}function K_(n,e){const t=Xi(e,this.size,4);n.uniform4fv(this.addr,t)}function Z_(n,e){const t=Xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J_(n,e){const t=Xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q_(n,e){const t=Xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ex(n,e){n.uniform1iv(this.addr,e)}function tx(n,e){n.uniform2iv(this.addr,e)}function nx(n,e){n.uniform3iv(this.addr,e)}function ix(n,e){n.uniform4iv(this.addr,e)}function rx(n,e){n.uniform1uiv(this.addr,e)}function sx(n,e){n.uniform2uiv(this.addr,e)}function ox(n,e){n.uniform3uiv(this.addr,e)}function ax(n,e){n.uniform4uiv(this.addr,e)}function lx(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wu,s[a])}function cx(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Eu,s[a])}function ux(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Au,s[a])}function fx(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tu,s[a])}function hx(n){switch(n){case 5126:return j_;case 35664:return Y_;case 35665:return $_;case 35666:return K_;case 35674:return Z_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}class dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=X_(t.type)}}class px{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=hx(t.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function jl(n,e){n.seq.push(e),n.map[e.id]=e}function gx(n,e,t){const i=n.name,r=i.length;for(Mo.lastIndex=0;;){const s=Mo.exec(i),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jl(t,c===void 0?new dx(o,n,e):new px(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new mx(o),jl(t,f)),t=f}}}class as{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);gx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let _x=0;function xx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function vx(n){switch(n){case oi:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $l(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xx(n.getShaderSource(e),a)}else return r}function Mx(n,e){const t=vx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yx(n,e){let t;switch(e){case Od:t="Linear";break;case zd:t="Reinhard";break;case Bd:t="OptimizedCineon";break;case Gd:t="ACESFilmic";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function Sx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wx(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sr(n){return n!==""}function Kl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(n){return n.replace(Tx,Ex)}function Ex(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wo(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(n){return n.replace(Ax,Cx)}function Cx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ql(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===md?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function Rx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Bi:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Dx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lx(t),c=Rx(t),u=Px(t),f=Dx(t),h=Ix(t),m=t.isWebGL2?"":bx(t),x=Sx(s),p=r.createProgram();let d,y,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(sr).join(`
`),d.length>0&&(d+=`
`),y=[m,x].filter(sr).join(`
`),y.length>0&&(y+=`
`)):(d=[Ql(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),y=[m,Ql(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xn?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Mx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Wo(a),a=Kl(a,t),a=Zl(a,t),o=Wo(o),o=Kl(o,t),o=Zl(o,t),a=Jl(a),o=Jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=T+d+a,S=T+y+o,A=Yl(r,35633,v),R=Yl(r,35632,S);if(r.attachShader(p,A),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(R).trim();let se=!0,O=!0;if(r.getProgramParameter(p,35714)===!1){se=!1;const N=$l(r,A,"vertex"),$=$l(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+N+`
`+$)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:se,programLog:C,vertexShader:{log:D,prefix:d},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(A),r.deleteShader(R);let I;this.getUniforms=function(){return I===void 0&&(I=new as(r,p)),I};let _;return this.getAttributes=function(){return _===void 0&&(_=wx(r,p)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=R,this}let Nx=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ox(e),t.set(e,i)),i}}class Ox{constructor(e){this.id=Nx++,this.code=e,this.usedTimes=0}}function zx(n,e,t,i,r,s,a){const o=new mu,l=new Ux,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,C,D,Y,se){const O=Y.fog,N=se.geometry,$=_.isMeshStandardMaterial?Y.environment:null,ne=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),ee=ne&&ne.mapping===Ls?ne.image.height:null,G=x[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=le!==void 0?le.length:0;let H=0;N.morphAttributes.position!==void 0&&(H=1),N.morphAttributes.normal!==void 0&&(H=2),N.morphAttributes.color!==void 0&&(H=3);let V,pe,de,ge;if(G){const He=rn[G];V=He.vertexShader,pe=He.fragmentShader}else V=_.vertexShader,pe=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),ge=l.getFragmentShaderID(_);const W=n.getRenderTarget(),Ne=_.alphaTest>0,be=_.clearcoat>0,Ee=_.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:_.type,vertexShader:V,fragmentShader:pe,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:se.isInstancedMesh===!0,instancingColor:se.isInstancedMesh===!0&&se.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:oi,map:!!_.map,matcap:!!_.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:ee,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ap,tangentSpaceNormalMap:_.normalMapType===op,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ye,clearcoat:be,clearcoatMap:be&&!!_.clearcoatMap,clearcoatRoughnessMap:be&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!_.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!_.iridescenceMap,iridescenceThicknessMap:Ee&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Ii,alphaMap:!!_.alphaMap,alphaTest:Ne,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!N.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:H,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:xn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fa,flipSided:_.side===Ht,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)C.push(D),C.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(y(C,_),T(C,_),C.push(n.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function y(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function T(_,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),_.push(o.mask)}function v(_){const C=x[_.type];let D;if(C){const Y=rn[C];D=Sp.clone(Y.uniforms)}else D=_.uniforms;return D}function S(_,C){let D;for(let Y=0,se=c.length;Y<se;Y++){const O=c[Y];if(O.cacheKey===C){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Fx(n,C,_,s),c.push(D)),D}function A(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function R(_){l.remove(_)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:I}}function Bx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Gx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ec(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,p,d){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=m,y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=p,y.group=d),e++,y}function o(f,h,m,x,p,d){const y=a(f,h,m,x,p,d);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function l(f,h,m,x,p,d){const y=a(f,h,m,x,p,d);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function c(f,h){t.length>1&&t.sort(f||Gx),i.length>1&&i.sort(h||ec),r.length>1&&r.sort(h||ec)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Vx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new tc,n.set(i,[a])):r>=s.length?(a=new tc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Hx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wx=0;function qx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xx(n,e){const t=new kx,i=Hx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new it,o=new it;function l(u,f){let h=0,m=0,x=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let p=0,d=0,y=0,T=0,v=0,S=0,A=0,R=0,I=0,_=0;u.sort(qx);const C=f!==!0?Math.PI:1;for(let Y=0,se=u.length;Y<se;Y++){const O=u[Y],N=O.color,$=O.intensity,ne=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=N.r*$*C,m+=N.g*$*C,x+=N.b*$*C;else if(O.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(O.sh.coefficients[G],$);else if(O.isDirectionalLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*C),O.castShadow){const le=O.shadow,re=i.get(O);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,r.directionalShadow[p]=re,r.directionalShadowMap[p]=ee,r.directionalShadowMatrix[p]=O.shadow.matrix,S++}r.directional[p]=G,p++}else if(O.isSpotLight){const G=t.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(N).multiplyScalar($*C),G.distance=ne,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,r.spot[y]=G;const le=O.shadow;if(O.map&&(r.spotLightMap[I]=O.map,I++,le.updateMatrices(O),O.castShadow&&_++),r.spotLightMatrix[y]=le.matrix,O.castShadow){const re=i.get(O);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,r.spotShadow[y]=re,r.spotShadowMap[y]=ee,R++}y++}else if(O.isRectAreaLight){const G=t.get(O);G.color.copy(N).multiplyScalar($),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),r.rectArea[T]=G,T++}else if(O.isPointLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*C),G.distance=O.distance,G.decay=O.decay,O.castShadow){const le=O.shadow,re=i.get(O);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,re.shadowCameraNear=le.camera.near,re.shadowCameraFar=le.camera.far,r.pointShadow[d]=re,r.pointShadowMap[d]=ee,r.pointShadowMatrix[d]=O.shadow.matrix,A++}r.point[d]=G,d++}else if(O.isHemisphereLight){const G=t.get(O);G.skyColor.copy(O.color).multiplyScalar($*C),G.groundColor.copy(O.groundColor).multiplyScalar($*C),r.hemi[v]=G,v++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const D=r.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==v||D.numDirectionalShadows!==S||D.numPointShadows!==A||D.numSpotShadows!==R||D.numSpotMaps!==I)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=T,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+I-_,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=_,D.directionalLength=p,D.pointLength=d,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=v,D.numDirectionalShadows=S,D.numPointShadows=A,D.numSpotShadows=R,D.numSpotMaps=I,r.version=Wx++)}function c(u,f){let h=0,m=0,x=0,p=0,d=0;const y=f.matrixWorldInverse;for(let T=0,v=u.length;T<v;T++){const S=u[T];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),h++}else if(S.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),x++}else if(S.isRectAreaLight){const A=r.rectArea[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(y),o.identity(),a.copy(S.matrixWorld),a.premultiply(y),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(y),m++}else if(S.isHemisphereLight){const A=r.hemi[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(y),d++}}}return{setup:l,setupView:c,state:r}}function nc(n,e){const t=new Xx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new nc(n,e),t.set(s,[l])):a>=o.length?(l=new nc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yx extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $x extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`;function Jx(n,e,t){let i=new bu;const r=new Re,s=new Re,a=new ht,o=new Yx({depthPacking:sp}),l=new $x,c={},u=t.maxTextureSize,f={0:Ht,1:ri,2:fa},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Tt;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new An(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu,this.render=function(S,A,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const I=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Rn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let Y=0,se=S.length;Y<se;Y++){const O=S[Y],N=O.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,N.mapSize.y=s.y)),N.map===null){const ee=this.type!==rr?{minFilter:bt,magFilter:bt}:{};N.map=new ai(r.x,r.y,ee),N.map.texture.name=O.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ne=N.getViewportCount();for(let ee=0;ee<ne;ee++){const G=N.getViewport(ee);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),D.viewport(a),N.updateMatrices(O,ee),i=N.getFrustum(),v(A,R,N.camera,O,this.type)}N.isPointLightShadow!==!0&&this.type===rr&&y(N,R),N.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(I,_,C)};function y(S,A){const R=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ai(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,R,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,R,m,p,null)}function T(S,A,R,I,_,C){let D=null;const Y=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Y!==void 0)D=Y;else if(D=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const se=D.uuid,O=A.uuid;let N=c[se];N===void 0&&(N={},c[se]=N);let $=N[O];$===void 0&&($=D.clone(),N[O]=$),D=$}return D.visible=A.visible,D.wireframe=A.wireframe,C===rr?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:f[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,R.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(R.matrixWorld),D.nearDistance=I,D.farDistance=_),D}function v(S,A,R,I,_){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===rr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),se=S.material;if(Array.isArray(se)){const O=Y.groups;for(let N=0,$=O.length;N<$;N++){const ne=O[N],ee=se[ne.materialIndex];if(ee&&ee.visible){const G=T(S,ee,I,R.near,R.far,_);n.renderBufferDirect(R,null,Y,G,S,ne)}}}else if(se.visible){const O=T(S,se,I,R.near,R.far,_);n.renderBufferDirect(R,null,Y,O,S,null)}}const D=S.children;for(let Y=0,se=D.length;Y<se;Y++)v(D[Y],A,R,I,_)}}function Qx(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const X=new ht;let ue=null;const ve=new ht(0,0,0,0);return{setMask:function(we){ue!==we&&!L&&(n.colorMask(we,we,we,we),ue=we)},setLocked:function(we){L=we},setClear:function(we,Xe,lt,dt,Fn){Fn===!0&&(we*=dt,Xe*=dt,lt*=dt),X.set(we,Xe,lt,dt),ve.equals(X)===!1&&(n.clearColor(we,Xe,lt,dt),ve.copy(X))},reset:function(){L=!1,ue=null,ve.set(-1,0,0,0)}}}function s(){let L=!1,X=null,ue=null,ve=null;return{setTest:function(we){we?Ne(2929):be(2929)},setMask:function(we){X!==we&&!L&&(n.depthMask(we),X=we)},setFunc:function(we){if(ue!==we){switch(we){case Cd:n.depthFunc(512);break;case Ld:n.depthFunc(519);break;case Rd:n.depthFunc(513);break;case Oo:n.depthFunc(515);break;case Pd:n.depthFunc(514);break;case Dd:n.depthFunc(518);break;case Id:n.depthFunc(516);break;case Fd:n.depthFunc(517);break;default:n.depthFunc(515)}ue=we}},setLocked:function(we){L=we},setClear:function(we){ve!==we&&(n.clearDepth(we),ve=we)},reset:function(){L=!1,X=null,ue=null,ve=null}}}function a(){let L=!1,X=null,ue=null,ve=null,we=null,Xe=null,lt=null,dt=null,Fn=null;return{setTest:function(Ze){L||(Ze?Ne(2960):be(2960))},setMask:function(Ze){X!==Ze&&!L&&(n.stencilMask(Ze),X=Ze)},setFunc:function(Ze,ln,Nt){(ue!==Ze||ve!==ln||we!==Nt)&&(n.stencilFunc(Ze,ln,Nt),ue=Ze,ve=ln,we=Nt)},setOp:function(Ze,ln,Nt){(Xe!==Ze||lt!==ln||dt!==Nt)&&(n.stencilOp(Ze,ln,Nt),Xe=Ze,lt=ln,dt=Nt)},setLocked:function(Ze){L=Ze},setClear:function(Ze){Fn!==Ze&&(n.clearStencil(Ze),Fn=Ze)},reset:function(){L=!1,X=null,ue=null,ve=null,we=null,Xe=null,lt=null,dt=null,Fn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,y=!1,T=null,v=null,S=null,A=null,R=null,I=null,_=null,C=!1,D=null,Y=null,se=null,O=null,N=null;const $=n.getParameter(35661);let ne=!1,ee=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=ee>=2);let le=null,re={};const H=n.getParameter(3088),V=n.getParameter(2978),pe=new ht().fromArray(H),de=new ht().fromArray(V);function ge(L,X,ue){const ve=new Uint8Array(4),we=n.createTexture();n.bindTexture(L,we),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let Xe=0;Xe<ue;Xe++)n.texImage2D(X+Xe,0,6408,1,1,0,6408,5121,ve);return we}const W={};W[3553]=ge(3553,3553,1),W[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(2929),l.setFunc(Oo),K(!1),oe(ja),Ne(2884),B(Rn);function Ne(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ee(L,X){return m[L]!==X?(n.bindFramebuffer(L,X),m[L]=X,i&&(L===36009&&(m[36160]=X),L===36160&&(m[36009]=X)),!0):!1}function Me(L,X){let ue=p,ve=!1;if(L)if(ue=x.get(X),ue===void 0&&(ue=[],x.set(X,ue)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(ue.length!==we.length||ue[0]!==36064){for(let Xe=0,lt=we.length;Xe<lt;Xe++)ue[Xe]=36064+Xe;ue.length=we.length,ve=!0}}else ue[0]!==36064&&(ue[0]=36064,ve=!0);else ue[0]!==1029&&(ue[0]=1029,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function He(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const w={[Ei]:32774,[_d]:32778,[xd]:32779};if(i)w[Za]=32775,w[Ja]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(w[Za]=L.MIN_EXT,w[Ja]=L.MAX_EXT)}const E={[vd]:0,[Md]:1,[yd]:768,[ru]:770,[Ad]:776,[Td]:774,[Sd]:772,[bd]:769,[su]:771,[Ed]:775,[wd]:773};function B(L,X,ue,ve,we,Xe,lt,dt){if(L===Rn){y===!0&&(be(3042),y=!1);return}if(y===!1&&(Ne(3042),y=!0),L!==gd){if(L!==T||dt!==C){if((v!==Ei||R!==Ei)&&(n.blendEquation(32774),v=Ei,R=Ei),dt)switch(L){case Ii:n.blendFuncSeparate(1,771,1,771);break;case Ya:n.blendFunc(1,1);break;case $a:n.blendFuncSeparate(0,769,0,1);break;case Ka:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:n.blendFuncSeparate(770,771,1,771);break;case Ya:n.blendFunc(770,1);break;case $a:n.blendFuncSeparate(0,769,0,1);break;case Ka:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,A=null,I=null,_=null,T=L,C=dt}return}we=we||X,Xe=Xe||ue,lt=lt||ve,(X!==v||we!==R)&&(n.blendEquationSeparate(w[X],w[we]),v=X,R=we),(ue!==S||ve!==A||Xe!==I||lt!==_)&&(n.blendFuncSeparate(E[ue],E[ve],E[Xe],E[lt]),S=ue,A=ve,I=Xe,_=lt),T=L,C=!1}function Z(L,X){L.side===fa?be(2884):Ne(2884);let ue=L.side===Ht;X&&(ue=!ue),K(ue),L.blending===Ii&&L.transparent===!1?B(Rn):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ve=L.stencilWrite;c.setTest(ve),ve&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ne(32926):be(32926)}function K(L){D!==L&&(L?n.frontFace(2304):n.frontFace(2305),D=L)}function oe(L){L!==dd?(Ne(2884),L!==Y&&(L===ja?n.cullFace(1029):L===pd?n.cullFace(1028):n.cullFace(1032))):be(2884),Y=L}function ce(L){L!==se&&(ne&&n.lineWidth(L),se=L)}function te(L,X,ue){L?(Ne(32823),(O!==X||N!==ue)&&(n.polygonOffset(X,ue),O=X,N=ue)):be(32823)}function he(L){L?Ne(3089):be(3089)}function ie(L){L===void 0&&(L=33984+$-1),le!==L&&(n.activeTexture(L),le=L)}function M(L,X,ue){ue===void 0&&(le===null?ue=33984+$-1:ue=le);let ve=re[ue];ve===void 0&&(ve={type:void 0,texture:void 0},re[ue]=ve),(ve.type!==L||ve.texture!==X)&&(le!==ue&&(n.activeTexture(ue),le=ue),n.bindTexture(L,X||W[L]),ve.type=L,ve.texture=X)}function g(){const L=re[le];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function P(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){pe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),pe.copy(L))}function xe(L){de.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function Pe(L,X){let ue=f.get(X);ue===void 0&&(ue=new WeakMap,f.set(X,ue));let ve=ue.get(L);ve===void 0&&(ve=n.getUniformBlockIndex(X,L.name),ue.set(L,ve))}function je(L,X){const ve=f.get(X).get(L);u.get(X)!==ve&&(n.uniformBlockBinding(X,ve,L.__bindingPointIndex),u.set(X,ve))}function at(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},le=null,re={},m={},x=new WeakMap,p=[],d=null,y=!1,T=null,v=null,S=null,A=null,R=null,I=null,_=null,C=!1,D=null,Y=null,se=null,O=null,N=null,pe.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:be,bindFramebuffer:Ee,drawBuffers:Me,useProgram:He,setBlending:B,setMaterial:Z,setFlipSided:K,setCullFace:oe,setLineWidth:ce,setPolygonOffset:te,setScissorTest:he,activeTexture:ie,bindTexture:M,unbindTexture:g,compressedTexImage2D:P,compressedTexImage3D:k,texImage2D:Ce,texImage3D:ye,updateUBOMapping:Pe,uniformBlockBinding:je,texStorage2D:q,texStorage3D:Se,texSubImage2D:J,texSubImage3D:ae,compressedTexSubImage2D:_e,compressedTexSubImage3D:fe,scissor:Te,viewport:xe,reset:at}}function e0(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,g){return y?new OffscreenCanvas(M,g):ms("canvas")}function v(M,g,P,k){let J=1;if((M.width>k||M.height>k)&&(J=k/Math.max(M.width,M.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ae=g?Ho:Math.floor,_e=ae(J*M.width),fe=ae(J*M.height);p===void 0&&(p=T(_e,fe));const q=P?T(_e,fe):p;return q.width=_e,q.height=fe,q.getContext("2d").drawImage(M,0,0,_e,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+fe+")."),q}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return wl(M.width)&&wl(M.height)}function A(M){return o?!1:M.wrapS!==Yt||M.wrapT!==Yt||M.minFilter!==bt&&M.minFilter!==Bt}function R(M,g){return M.generateMipmaps&&g&&M.minFilter!==bt&&M.minFilter!==Bt}function I(M){n.generateMipmap(M)}function _(M,g,P,k,J=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae=g;return g===6403&&(P===5126&&(ae=33326),P===5131&&(ae=33325),P===5121&&(ae=33321)),g===33319&&(P===5126&&(ae=33328),P===5131&&(ae=33327),P===5121&&(ae=33323)),g===6408&&(P===5126&&(ae=34836),P===5131&&(ae=34842),P===5121&&(ae=k===Ye&&J===!1?35907:32856),P===32819&&(ae=32854),P===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(M,g,P){return R(M,P)===!0||M.isFramebufferTexture&&M.minFilter!==bt&&M.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function D(M){return M===bt||M===Qa||M===Hs?9728:9729}function Y(M){const g=M.target;g.removeEventListener("dispose",Y),O(g),g.isVideoTexture&&x.delete(g)}function se(M){const g=M.target;g.removeEventListener("dispose",se),$(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const P=M.source,k=d.get(P);if(k){const J=k[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(M),Object.keys(k).length===0&&d.delete(P)}i.remove(M)}function N(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const P=M.source,k=d.get(P);delete k[g.__cacheKey],a.memory.textures--}function $(M){const g=M.texture,P=i.get(M),k=i.get(g);if(k.__webglTexture!==void 0&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)n.deleteFramebuffer(P.__webglFramebuffer[J]),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[J]);else{if(n.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let J=0;J<P.__webglColorRenderbuffer.length;J++)P.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[J]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,ae=g.length;J<ae;J++){const _e=i.get(g[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[J])}i.remove(g),i.remove(M)}let ne=0;function ee(){ne=0}function G(){const M=ne;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ne+=1,M}function le(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function re(M,g){const P=i.get(M);if(M.isVideoTexture&&he(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(P,M,g);return}}t.bindTexture(3553,P.__webglTexture,33984+g)}function H(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}t.bindTexture(35866,P.__webglTexture,33984+g)}function V(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}t.bindTexture(32879,P.__webglTexture,33984+g)}function pe(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ee(P,M,g);return}t.bindTexture(34067,P.__webglTexture,33984+g)}const de={[Go]:10497,[Yt]:33071,[Vo]:33648},ge={[bt]:9728,[Qa]:9984,[Hs]:9986,[Bt]:9729,[kd]:9985,[_r]:9987};function W(M,g,P){if(P?(n.texParameteri(M,10242,de[g.wrapS]),n.texParameteri(M,10243,de[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,de[g.wrapR]),n.texParameteri(M,10240,ge[g.magFilter]),n.texParameteri(M,10241,ge[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==Yt||g.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,D(g.magFilter)),n.texParameteri(M,10241,D(g.minFilter)),g.minFilter!==bt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===bt||g.minFilter!==Hs&&g.minFilter!==_r||g.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Ne(M,g){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",Y));const k=g.source;let J=d.get(k);J===void 0&&(J={},d.set(k,J));const ae=le(g);if(ae!==M.__cacheKey){J[ae]===void 0&&(J[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),J[ae].usedTimes++;const _e=J[M.__cacheKey];_e!==void 0&&(J[M.__cacheKey].usedTimes--,_e.usedTimes===0&&N(g)),M.__cacheKey=ae,M.__webglTexture=J[ae].texture}return P}function be(M,g,P){let k=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=35866),g.isData3DTexture&&(k=32879);const J=Ne(M,g),ae=g.source;t.bindTexture(k,M.__webglTexture,33984+P);const _e=i.get(ae);if(ae.version!==_e.__version||J===!0){t.activeTexture(33984+P),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const fe=A(g)&&S(g.image)===!1;let q=v(g.image,fe,!1,u);q=ie(g,q);const Se=S(q)||o,Ce=s.convert(g.format,g.encoding);let ye=s.convert(g.type),Te=_(g.internalFormat,Ce,ye,g.encoding,g.isVideoTexture);W(k,g,Se);let xe;const Pe=g.mipmaps,je=o&&g.isVideoTexture!==!0,at=_e.__version===void 0||J===!0,L=C(g,q,Se);if(g.isDepthTexture)Te=6402,o?g.type===Qn?Te=36012:g.type===Jn?Te=33190:g.type===Fi?Te=35056:Te=33189:g.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ni&&Te===6402&&g.type!==lu&&g.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Jn,ye=s.convert(g.type)),g.format===Gi&&Te===6402&&(Te=34041,g.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Fi,ye=s.convert(g.type))),at&&(je?t.texStorage2D(3553,1,Te,q.width,q.height):t.texImage2D(3553,0,Te,q.width,q.height,0,Ce,ye,null));else if(g.isDataTexture)if(Pe.length>0&&Se){je&&at&&t.texStorage2D(3553,L,Te,Pe[0].width,Pe[0].height);for(let X=0,ue=Pe.length;X<ue;X++)xe=Pe[X],je?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,ye,xe.data):t.texImage2D(3553,X,Te,xe.width,xe.height,0,Ce,ye,xe.data);g.generateMipmaps=!1}else je?(at&&t.texStorage2D(3553,L,Te,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Ce,ye,q.data)):t.texImage2D(3553,0,Te,q.width,q.height,0,Ce,ye,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&at&&t.texStorage3D(35866,L,Te,Pe[0].width,Pe[0].height,q.depth);for(let X=0,ue=Pe.length;X<ue;X++)xe=Pe[X],g.format!==$t?Ce!==null?je?t.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,q.depth,Ce,xe.data,0,0):t.compressedTexImage3D(35866,X,Te,xe.width,xe.height,q.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,q.depth,Ce,ye,xe.data):t.texImage3D(35866,X,Te,xe.width,xe.height,q.depth,0,Ce,ye,xe.data)}else{je&&at&&t.texStorage2D(3553,L,Te,Pe[0].width,Pe[0].height);for(let X=0,ue=Pe.length;X<ue;X++)xe=Pe[X],g.format!==$t?Ce!==null?je?t.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(3553,X,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,ye,xe.data):t.texImage2D(3553,X,Te,xe.width,xe.height,0,Ce,ye,xe.data)}else if(g.isDataArrayTexture)je?(at&&t.texStorage3D(35866,L,Te,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Ce,ye,q.data)):t.texImage3D(35866,0,Te,q.width,q.height,q.depth,0,Ce,ye,q.data);else if(g.isData3DTexture)je?(at&&t.texStorage3D(32879,L,Te,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Ce,ye,q.data)):t.texImage3D(32879,0,Te,q.width,q.height,q.depth,0,Ce,ye,q.data);else if(g.isFramebufferTexture){if(at)if(je)t.texStorage2D(3553,L,Te,q.width,q.height);else{let X=q.width,ue=q.height;for(let ve=0;ve<L;ve++)t.texImage2D(3553,ve,Te,X,ue,0,Ce,ye,null),X>>=1,ue>>=1}}else if(Pe.length>0&&Se){je&&at&&t.texStorage2D(3553,L,Te,Pe[0].width,Pe[0].height);for(let X=0,ue=Pe.length;X<ue;X++)xe=Pe[X],je?t.texSubImage2D(3553,X,0,0,Ce,ye,xe):t.texImage2D(3553,X,Te,Ce,ye,xe);g.generateMipmaps=!1}else je?(at&&t.texStorage2D(3553,L,Te,q.width,q.height),t.texSubImage2D(3553,0,0,0,Ce,ye,q)):t.texImage2D(3553,0,Te,Ce,ye,q);R(g,Se)&&I(k),_e.__version=ae.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ee(M,g,P){if(g.image.length!==6)return;const k=Ne(M,g),J=g.source;t.bindTexture(34067,M.__webglTexture,33984+P);const ae=i.get(J);if(J.version!==ae.__version||k===!0){t.activeTexture(33984+P),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,q=[];for(let X=0;X<6;X++)!_e&&!fe?q[X]=v(g.image[X],!1,!0,c):q[X]=fe?g.image[X].image:g.image[X],q[X]=ie(g,q[X]);const Se=q[0],Ce=S(Se)||o,ye=s.convert(g.format,g.encoding),Te=s.convert(g.type),xe=_(g.internalFormat,ye,Te,g.encoding),Pe=o&&g.isVideoTexture!==!0,je=ae.__version===void 0||k===!0;let at=C(g,Se,Ce);W(34067,g,Ce);let L;if(_e){Pe&&je&&t.texStorage2D(34067,at,xe,Se.width,Se.height);for(let X=0;X<6;X++){L=q[X].mipmaps;for(let ue=0;ue<L.length;ue++){const ve=L[ue];g.format!==$t?ye!==null?Pe?t.compressedTexSubImage2D(34069+X,ue,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(34069+X,ue,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+X,ue,0,0,ve.width,ve.height,ye,Te,ve.data):t.texImage2D(34069+X,ue,xe,ve.width,ve.height,0,ye,Te,ve.data)}}}else{L=g.mipmaps,Pe&&je&&(L.length>0&&at++,t.texStorage2D(34067,at,xe,q[0].width,q[0].height));for(let X=0;X<6;X++)if(fe){Pe?t.texSubImage2D(34069+X,0,0,0,q[X].width,q[X].height,ye,Te,q[X].data):t.texImage2D(34069+X,0,xe,q[X].width,q[X].height,0,ye,Te,q[X].data);for(let ue=0;ue<L.length;ue++){const we=L[ue].image[X].image;Pe?t.texSubImage2D(34069+X,ue+1,0,0,we.width,we.height,ye,Te,we.data):t.texImage2D(34069+X,ue+1,xe,we.width,we.height,0,ye,Te,we.data)}}else{Pe?t.texSubImage2D(34069+X,0,0,0,ye,Te,q[X]):t.texImage2D(34069+X,0,xe,ye,Te,q[X]);for(let ue=0;ue<L.length;ue++){const ve=L[ue];Pe?t.texSubImage2D(34069+X,ue+1,0,0,ye,Te,ve.image[X]):t.texImage2D(34069+X,ue+1,xe,ye,Te,ve.image[X])}}}R(g,Ce)&&I(34067),ae.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Me(M,g,P,k,J){const ae=s.convert(P.format,P.encoding),_e=s.convert(P.type),fe=_(P.internalFormat,ae,_e,P.encoding);i.get(g).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,fe,g.width,g.height,g.depth,0,ae,_e,null):t.texImage2D(J,0,fe,g.width,g.height,0,ae,_e,null)),t.bindFramebuffer(36160,M),te(g)?h.framebufferTexture2DMultisampleEXT(36160,k,J,i.get(P).__webglTexture,0,ce(g)):(J===3553||J>=34069&&J<=34074)&&n.framebufferTexture2D(36160,k,J,i.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(M,g,P){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let k=33189;if(P||te(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===Qn?k=36012:J.type===Jn&&(k=33190));const ae=ce(g);te(g)?h.renderbufferStorageMultisampleEXT(36161,ae,k,g.width,g.height):n.renderbufferStorageMultisample(36161,ae,k,g.width,g.height)}else n.renderbufferStorage(36161,k,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const k=ce(g);P&&te(g)===!1?n.renderbufferStorageMultisample(36161,k,35056,g.width,g.height):te(g)?h.renderbufferStorageMultisampleEXT(36161,k,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const k=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<k.length;J++){const ae=k[J],_e=s.convert(ae.format,ae.encoding),fe=s.convert(ae.type),q=_(ae.internalFormat,_e,fe,ae.encoding),Se=ce(g);P&&te(g)===!1?n.renderbufferStorageMultisample(36161,Se,q,g.width,g.height):te(g)?h.renderbufferStorageMultisampleEXT(36161,Se,q,g.width,g.height):n.renderbufferStorage(36161,q,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function w(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const k=i.get(g.depthTexture).__webglTexture,J=ce(g);if(g.depthTexture.format===ni)te(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,k,0,J):n.framebufferTexture2D(36160,36096,3553,k,0);else if(g.depthTexture.format===Gi)te(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,k,0,J):n.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function E(M){const g=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");w(g.__webglFramebuffer,M)}else if(P){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]=n.createRenderbuffer(),He(g.__webglDepthbuffer[k],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),He(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function B(M,g,P){const k=i.get(M);g!==void 0&&Me(k.__webglFramebuffer,M,M.texture,36064,3553),P!==void 0&&E(M)}function Z(M){const g=M.texture,P=i.get(M),k=i.get(g);M.addEventListener("dispose",se),M.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,ae=M.isWebGLMultipleRenderTargets===!0,_e=S(M)||o;if(J){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)P.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(P.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const fe=M.texture;for(let q=0,Se=fe.length;q<Se;q++){const Ce=i.get(fe[q]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&te(M)===!1){const fe=ae?g:[g];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let q=0;q<fe.length;q++){const Se=fe[q];P.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(36161,P.__webglColorRenderbuffer[q]);const Ce=s.convert(Se.format,Se.encoding),ye=s.convert(Se.type),Te=_(Se.internalFormat,Ce,ye,Se.encoding,M.isXRRenderTarget===!0),xe=ce(M);n.renderbufferStorageMultisample(36161,xe,Te,M.width,M.height),n.framebufferRenderbuffer(36160,36064+q,36161,P.__webglColorRenderbuffer[q])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),He(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,k.__webglTexture),W(34067,g,_e);for(let fe=0;fe<6;fe++)Me(P.__webglFramebuffer[fe],M,g,36064,34069+fe);R(g,_e)&&I(34067),t.unbindTexture()}else if(ae){const fe=M.texture;for(let q=0,Se=fe.length;q<Se;q++){const Ce=fe[q],ye=i.get(Ce);t.bindTexture(3553,ye.__webglTexture),W(3553,Ce,_e),Me(P.__webglFramebuffer,M,Ce,36064+q,3553),R(Ce,_e)&&I(3553)}t.unbindTexture()}else{let fe=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?fe=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,k.__webglTexture),W(fe,g,_e),Me(P.__webglFramebuffer,M,g,36064,fe),R(g,_e)&&I(fe),t.unbindTexture()}M.depthBuffer&&E(M)}function K(M){const g=S(M)||o,P=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let k=0,J=P.length;k<J;k++){const ae=P[k];if(R(ae,g)){const _e=M.isWebGLCubeRenderTarget?34067:3553,fe=i.get(ae).__webglTexture;t.bindTexture(_e,fe),I(_e),t.unbindTexture()}}}function oe(M){if(o&&M.samples>0&&te(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],P=M.width,k=M.height;let J=16384;const ae=[],_e=M.stencilBuffer?33306:36096,fe=i.get(M),q=M.isWebGLMultipleRenderTargets===!0;if(q)for(let Se=0;Se<g.length;Se++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){ae.push(36064+Se),M.depthBuffer&&ae.push(_e);const Ce=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ce===!1&&(M.depthBuffer&&(J|=256),M.stencilBuffer&&(J|=1024)),q&&n.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Se]),Ce===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),q){const ye=i.get(g[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,J,9728),m&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let Se=0;Se<g.length;Se++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,fe.__webglColorRenderbuffer[Se]);const Ce=i.get(g[Se]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function ce(M){return Math.min(f,M.samples)}function te(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function ie(M,g){const P=M.encoding,k=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ko||P!==oi&&(P===Ye?o===!1?e.has("EXT_sRGB")===!0&&k===$t?(M.format=ko,M.minFilter=Bt,M.generateMipmaps=!1):g=fu.sRGBToLinear(g):(k!==$t||J!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),g}this.allocateTextureUnit=G,this.resetTextureUnits=ee,this.setTexture2D=re,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=pe,this.rebindTextures=B,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=te}function t0(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===si)return 5121;if(s===Xd)return 32819;if(s===jd)return 32820;if(s===Hd)return 5120;if(s===Wd)return 5122;if(s===lu)return 5123;if(s===qd)return 5124;if(s===Jn)return 5125;if(s===Qn)return 5126;if(s===xr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yd)return 6406;if(s===$t)return 6408;if(s===Kd)return 6409;if(s===Zd)return 6410;if(s===ni)return 6402;if(s===Gi)return 34041;if(s===$d)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ko)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jd)return 6403;if(s===Qd)return 36244;if(s===ep)return 33319;if(s===tp)return 33320;if(s===np)return 36249;if(s===Ws||s===qs||s===Xs||s===js)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ip)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rl)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ol||s===al||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ol)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===al)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ll)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ul)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ml)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_l)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ml)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Fi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class n0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),y=this._getHandJoint(c,p);d!==null&&(y.matrix.fromArray(d.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=d.radius),y.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class r0 extends It{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ni&&(i=Jn),i===void 0&&u===Gi&&(i=Fi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class s0 extends qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const y=[],T=[],v=new Set,S=new Map,A=new Gt;A.layers.enable(1),A.viewport=new ht;const R=new Gt;R.layers.enable(2),R.viewport=new ht;const I=[A,R],_=new n0;_.layers.enable(1),_.layers.enable(2);let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=y[H];return V===void 0&&(V=new yo,y[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=y[H];return V===void 0&&(V=new yo,y[H]=V),V.getGripSpace()},this.getHand=function(H){let V=y[H];return V===void 0&&(V=new yo,y[H]=V),V.getHandSpace()};function Y(H){const V=T.indexOf(H.inputSource);if(V===-1)return;const pe=y[V];pe!==void 0&&pe.dispatchEvent({type:H.type,data:H.inputSource})}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",O);for(let H=0;H<y.length;H++){const V=T[H];V!==null&&(T[H]=null,y[H].disconnect(V))}C=null,D=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:h}),d=new ai(h.framebufferWidth,h.framebufferHeight,{format:$t,type:si,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let V=null,pe=null,de=null;x.depth&&(de=x.stencil?35056:33190,V=x.stencil?Gi:ni,pe=x.stencil?Fi:Jn);const ge={colorFormat:32856,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),d=new ai(f.textureWidth,f.textureHeight,{format:$t,type:si,depthTexture:new r0(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const W=e.properties.get(d);W.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(H){for(let V=0;V<H.removed.length;V++){const pe=H.removed[V],de=T.indexOf(pe);de>=0&&(T[de]=null,y[de].disconnect(pe))}for(let V=0;V<H.added.length;V++){const pe=H.added[V];let de=T.indexOf(pe);if(de===-1){for(let W=0;W<y.length;W++)if(W>=T.length){T.push(pe),de=W;break}else if(T[W]===null){T[W]=pe,de=W;break}if(de===-1)break}const ge=y[de];ge&&ge.connect(pe)}}const N=new z,$=new z;function ne(H,V,pe){N.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const de=N.distanceTo($),ge=V.projectionMatrix.elements,W=pe.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Ee=(ge[9]+1)/ge[5],Me=(ge[9]-1)/ge[5],He=(ge[8]-1)/ge[0],w=(W[8]+1)/W[0],E=Ne*He,B=Ne*w,Z=de/(-He+w),K=Z*-He;V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(K),H.translateZ(Z),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const oe=Ne+Z,ce=be+Z,te=E-K,he=B+(de-K),ie=Ee*be/ce*oe,M=Me*be/ce*oe;H.projectionMatrix.makePerspective(te,he,ie,M,oe,ce)}function ee(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;_.near=R.near=A.near=H.near,_.far=R.far=A.far=H.far,(C!==_.near||D!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,D=_.far);const V=H.parent,pe=_.cameras;ee(_,V);for(let ge=0;ge<pe.length;ge++)ee(pe[ge],V);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),H.matrix.copy(_.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const de=H.children;for(let ge=0,W=de.length;ge<W;ge++)de[ge].updateMatrixWorld(!0);pe.length===2?ne(_,A,R):_.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(H){f!==null&&(f.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.getPlanes=function(){return v};let G=null;function le(H,V){if(c=V.getViewerPose(l||a),m=V,c!==null){const pe=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let de=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let ge=0;ge<pe.length;ge++){const W=pe[ge];let Ne=null;if(h!==null)Ne=h.getViewport(W);else{const Ee=u.getViewSubImage(f,W);Ne=Ee.viewport,ge===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}let be=I[ge];be===void 0&&(be=new Gt,be.layers.enable(ge),be.viewport=new ht,I[ge]=be),be.matrix.fromArray(W.transform.matrix),be.projectionMatrix.fromArray(W.projectionMatrix),be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&_.matrix.copy(be.matrix),de===!0&&_.cameras.push(be)}}for(let pe=0;pe<y.length;pe++){const de=T[pe],ge=y[pe];de!==null&&ge!==void 0&&ge.update(de,V,l||a)}if(G&&G(H,V),V.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let pe=null;for(const de of v)V.detectedPlanes.has(de)||(pe===null&&(pe=[]),pe.push(de));if(pe!==null)for(const de of pe)v.delete(de),S.delete(de),i.dispatchEvent({type:"planeremoved",data:de});for(const de of V.detectedPlanes)if(!v.has(de))v.add(de),S.set(de,V.lastChangedTime),i.dispatchEvent({type:"planeadded",data:de});else{const ge=S.get(de);de.lastChangedTime>ge&&(S.set(de,de.lastChangedTime),i.dispatchEvent({type:"planechanged",data:de}))}}m=null}const re=new Su;re.setAnimationLoop(le),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function o0(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,vu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,T,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,y,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,y,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function a0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(T,v){const S=v.program;i.uniformBlockBinding(T,S)}function c(T,v){let S=r[T.id];S===void 0&&(x(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",d));const A=v.program;i.updateUBOMapping(T,A);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const v=f();T.__bindingPointIndex=v;const S=n.createBuffer(),A=T.__size,R=T.usage;return n.bindBuffer(35345,S),n.bufferData(35345,A,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const v=r[T.id],S=T.uniforms,A=T.__cache;n.bindBuffer(35345,v);for(let R=0,I=S.length;R<I;R++){const _=S[R];if(m(_,R,A)===!0){const C=_.__offset,D=Array.isArray(_.value)?_.value:[_.value];let Y=0;for(let se=0;se<D.length;se++){const O=D[se],N=p(O);typeof O=="number"?(_.__data[0]=O,n.bufferSubData(35345,C+Y,_.__data)):O.isMatrix3?(_.__data[0]=O.elements[0],_.__data[1]=O.elements[1],_.__data[2]=O.elements[2],_.__data[3]=O.elements[0],_.__data[4]=O.elements[3],_.__data[5]=O.elements[4],_.__data[6]=O.elements[5],_.__data[7]=O.elements[0],_.__data[8]=O.elements[6],_.__data[9]=O.elements[7],_.__data[10]=O.elements[8],_.__data[11]=O.elements[0]):(O.toArray(_.__data,Y),Y+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,_.__data)}}n.bindBuffer(35345,null)}function m(T,v,S){const A=T.value;if(S[v]===void 0){if(typeof A=="number")S[v]=A;else{const R=Array.isArray(A)?A:[A],I=[];for(let _=0;_<R.length;_++)I.push(R[_].clone());S[v]=I}return!0}else if(typeof A=="number"){if(S[v]!==A)return S[v]=A,!0}else{const R=Array.isArray(S[v])?S[v]:[S[v]],I=Array.isArray(A)?A:[A];for(let _=0;_<R.length;_++){const C=R[_];if(C.equals(I[_])===!1)return C.copy(I[_]),!0}}return!1}function x(T){const v=T.uniforms;let S=0;const A=16;let R=0;for(let I=0,_=v.length;I<_;I++){const C=v[I],D={boundary:0,storage:0},Y=Array.isArray(C.value)?C.value:[C.value];for(let se=0,O=Y.length;se<O;se++){const N=Y[se],$=p(N);D.boundary+=$.boundary,D.storage+=$.storage}if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,I>0){R=S%A;const se=A-R;R!==0&&se-D.boundary<0&&(S+=A-R,C.__offset=S)}S+=D.storage}return R=S%A,R>0&&(S+=A-R),T.__size=S,T.__cache={},this}function p(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function d(T){const v=T.target;v.removeEventListener("dispose",d);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function y(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}function l0(){const n=ms("canvas");return n.style.display="block",n}function Cu(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:l0(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oi,this.physicallyCorrectLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const p=this;let d=!1,y=0,T=0,v=null,S=-1,A=null;const R=new ht,I=new ht;let _=null,C=e.width,D=e.height,Y=1,se=null,O=null;const N=new ht(0,0,C,D),$=new ht(0,0,C,D);let ne=!1;const ee=new bu;let G=!1,le=!1,re=null;const H=new it,V=new Re,pe=new z,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return v===null?Y:1}let W=t;function Ne(b,U){for(let j=0;j<b.length;j++){const F=b[j],Q=e.getContext(F,U);if(Q!==null)return Q}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),W===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),W=Ne(U,b),W===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,Ee,Me,He,w,E,B,Z,K,oe,ce,te,he,ie,M,g,P,k,J,ae,_e,fe,q,Se;function Ce(){be=new v_(W),Ee=new h_(W,be,n),be.init(Ee),fe=new t0(W,be,Ee),Me=new Qx(W,be,Ee),He=new b_,w=new Bx,E=new e0(W,be,Me,w,Ee,fe,He),B=new p_(p),Z=new x_(p),K=new Rp(W,Ee),q=new u_(W,be,K,Ee),oe=new M_(W,K,He,q),ce=new E_(W,oe,K,He),J=new T_(W,Ee,E),g=new d_(w),te=new zx(p,B,Z,be,Ee,q,g),he=new o0(p,w),ie=new Vx,M=new jx(be,Ee),k=new c_(p,B,Z,Me,ce,u,a),P=new Jx(p,ce,Ee),Se=new a0(W,He,Ee,Me),ae=new f_(W,be,He,Ee),_e=new y_(W,be,He,Ee),He.programs=te.programs,p.capabilities=Ee,p.extensions=be,p.properties=w,p.renderLists=ie,p.shadowMap=P,p.state=Me,p.info=He}Ce();const ye=new s0(p,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(C,D,!1))},this.getSize=function(b){return b.set(C,D)},this.setSize=function(b,U,j){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=b,D=U,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),j!==!1&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(C*Y,D*Y).floor()},this.setDrawingBufferSize=function(b,U,j){C=b,D=U,Y=j,e.width=Math.floor(b*j),e.height=Math.floor(U*j),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,U,j,F){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,U,j,F),Me.viewport(R.copy(N).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,U,j,F){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,U,j,F),Me.scissor(I.copy($).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){Me.setScissorTest(ne=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(b=!0,U=!0,j=!0){let F=0;b&&(F|=16384),U&&(F|=256),j&&(F|=1024),W.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),ie.dispose(),M.dispose(),w.dispose(),B.dispose(),Z.dispose(),ce.dispose(),q.dispose(),Se.dispose(),te.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ve),ye.removeEventListener("sessionend",we),re&&(re.dispose(),re=null),Xe.stop()};function Te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=He.autoReset,U=P.enabled,j=P.autoUpdate,F=P.needsUpdate,Q=P.type;Ce(),He.autoReset=b,P.enabled=U,P.autoUpdate=j,P.needsUpdate=F,P.type=Q}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function je(b){const U=b.target;U.removeEventListener("dispose",je),at(U)}function at(b){L(b),w.remove(b)}function L(b){const U=w.get(b).programs;U!==void 0&&(U.forEach(function(j){te.releaseProgram(j)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,j,F,Q,Ae){U===null&&(U=de);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=Lu(b,U,j,F,Q);Me.setMaterial(F,De);let Oe=j.index,We=1;F.wireframe===!0&&(Oe=oe.getWireframeAttribute(j),We=2);const ze=j.drawRange,Be=j.attributes.position;let Qe=ze.start*We,At=(ze.start+ze.count)*We;Ae!==null&&(Qe=Math.max(Qe,Ae.start*We),At=Math.min(At,(Ae.start+Ae.count)*We)),Oe!==null?(Qe=Math.max(Qe,0),At=Math.min(At,Oe.count)):Be!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,Be.count));const cn=At-Qe;if(cn<0||cn===1/0)return;q.setup(Q,F,Ue,j,Oe);let Nn,et=ae;if(Oe!==null&&(Nn=K.get(Oe),et=_e,et.setIndex(Nn)),Q.isMesh)F.wireframe===!0?(Me.setLineWidth(F.wireframeLinewidth*ge()),et.setMode(1)):et.setMode(4);else if(Q.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),Me.setLineWidth(Ge*ge()),Q.isLineSegments?et.setMode(1):Q.isLineLoop?et.setMode(2):et.setMode(3)}else Q.isPoints?et.setMode(0):Q.isSprite&&et.setMode(4);if(Q.isInstancedMesh)et.renderInstances(Qe,cn,Q.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ds=Math.min(j.instanceCount,Ge);et.renderInstances(Qe,cn,Ds)}else et.render(Qe,cn)},this.compile=function(b,U){function j(F,Q,Ae){F.transparent===!0&&F.side===Ir?(F.side=Ht,F.needsUpdate=!0,Nt(F,Q,Ae),F.side=ri,F.needsUpdate=!0,Nt(F,Q,Ae),F.side=Ir):Nt(F,Q,Ae)}h=M.get(b),h.init(),x.push(h),b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function(F){const Q=F.material;if(Q)if(Array.isArray(Q))for(let Ae=0;Ae<Q.length;Ae++){const De=Q[Ae];j(De,b,F)}else j(Q,b,F)}),x.pop(),h=null};let X=null;function ue(b){X&&X(b)}function ve(){Xe.stop()}function we(){Xe.start()}const Xe=new Su;Xe.setAnimationLoop(ue),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(b){X=b,ye.setAnimationLoop(b),b===null?Xe.stop():Xe.start()},ye.addEventListener("sessionstart",ve),ye.addEventListener("sessionend",we),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(U),U=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,U,v),h=M.get(b,x.length),h.init(),x.push(h),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(H),le=this.localClippingEnabled,G=g.init(this.clippingPlanes,le,U),f=ie.get(b,m.length),f.init(),m.push(f),lt(b,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(se,O),G===!0&&g.beginShadows();const j=h.state.shadowsArray;if(P.render(j,b,U),G===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(f,b),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let Q=0,Ae=F.length;Q<Ae;Q++){const De=F[Q];dt(f,b,De,De.viewport)}}else dt(f,b,U);v!==null&&(E.updateMultisampleRenderTarget(v),E.updateRenderTargetMipmap(v)),b.isScene===!0&&b.onAfterRender(p,b,U),q.resetDefaultState(),S=-1,A=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function lt(b,U,j,F){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){F&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const De=ce.update(b),Ue=b.material;Ue.visible&&f.push(b,De,Ue,j,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==He.render.frame&&(b.skeleton.update(),b.skeleton.frame=He.render.frame),!b.frustumCulled||ee.intersectsObject(b))){F&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const De=ce.update(b),Ue=b.material;if(Array.isArray(Ue)){const Oe=De.groups;for(let We=0,ze=Oe.length;We<ze;We++){const Be=Oe[We],Qe=Ue[Be.materialIndex];Qe&&Qe.visible&&f.push(b,De,Qe,j,pe.z,Be)}}else Ue.visible&&f.push(b,De,Ue,j,pe.z,null)}}const Ae=b.children;for(let De=0,Ue=Ae.length;De<Ue;De++)lt(Ae[De],U,j,F)}function dt(b,U,j,F){const Q=b.opaque,Ae=b.transmissive,De=b.transparent;h.setupLightsView(j),Ae.length>0&&Fn(Q,U,j),F&&Me.viewport(R.copy(F)),Q.length>0&&Ze(Q,U,j),Ae.length>0&&Ze(Ae,U,j),De.length>0&&Ze(De,U,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Fn(b,U,j){const F=Ee.isWebGL2;re===null&&(re=new ai(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?xr:si,minFilter:_r,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(V),F?re.setSize(V.x,V.y):re.setSize(Ho(V.x),Ho(V.y));const Q=p.getRenderTarget();p.setRenderTarget(re),p.clear();const Ae=p.toneMapping;p.toneMapping=xn,Ze(b,U,j),p.toneMapping=Ae,E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re),p.setRenderTarget(Q)}function Ze(b,U,j){const F=U.isScene===!0?U.overrideMaterial:null;for(let Q=0,Ae=b.length;Q<Ae;Q++){const De=b[Q],Ue=De.object,Oe=De.geometry,We=F===null?De.material:F,ze=De.group;Ue.layers.test(j.layers)&&ln(Ue,U,j,Oe,We,ze)}}function ln(b,U,j,F,Q,Ae){b.onBeforeRender(p,U,j,F,Q,Ae),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(p,U,j,F,b,Ae),Q.transparent===!0&&Q.side===Ir?(Q.side=Ht,Q.needsUpdate=!0,p.renderBufferDirect(j,U,F,Q,b,Ae),Q.side=ri,Q.needsUpdate=!0,p.renderBufferDirect(j,U,F,Q,b,Ae),Q.side=Ir):p.renderBufferDirect(j,U,F,Q,b,Ae),b.onAfterRender(p,U,j,F,Q,Ae)}function Nt(b,U,j){U.isScene!==!0&&(U=de);const F=w.get(b),Q=h.state.lights,Ae=h.state.shadowsArray,De=Q.state.version,Ue=te.getParameters(b,Q.state,Ae,U,j),Oe=te.getProgramCacheKey(Ue);let We=F.programs;F.environment=b.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(b.isMeshStandardMaterial?Z:B).get(b.envMap||F.environment),We===void 0&&(b.addEventListener("dispose",je),We=new Map,F.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===De)return pa(b,Ue),ze}else Ue.uniforms=te.getUniforms(b),b.onBuild(j,Ue,p),b.onBeforeCompile(Ue,p),ze=te.acquireProgram(Ue,Oe),We.set(Oe,ze),F.uniforms=Ue.uniforms;const Be=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=g.uniform),pa(b,Ue),F.needsLights=Pu(b),F.lightsStateVersion=De,F.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMap.value=Q.state.directionalShadowMap,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotShadowMap.value=Q.state.spotShadowMap,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMap.value=Q.state.pointShadowMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Qe=ze.getUniforms(),At=as.seqWithValue(Qe.seq,Be);return F.currentProgram=ze,F.uniformsList=At,ze}function pa(b,U){const j=w.get(b);j.outputEncoding=U.outputEncoding,j.instancing=U.instancing,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function Lu(b,U,j,F,Q){U.isScene!==!0&&(U=de),E.resetTextureUnits();const Ae=U.fog,De=F.isMeshStandardMaterial?U.environment:null,Ue=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:oi,Oe=(F.isMeshStandardMaterial?Z:B).get(F.envMap||De),We=F.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!F.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,At=!!j.morphAttributes.color,cn=F.toneMapped?p.toneMapping:xn,Nn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=Nn!==void 0?Nn.length:0,Ge=w.get(F),Ds=h.state.lights;if(G===!0&&(le===!0||b!==A)){const Ct=b===A&&F.id===S;g.setState(F,b,Ct)}let ct=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ds.state.version||Ge.outputEncoding!==Ue||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Oe||F.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==g.numPlanes||Ge.numIntersection!==g.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==ze||Ge.morphTargets!==Be||Ge.morphNormals!==Qe||Ge.morphColors!==At||Ge.toneMapping!==cn||Ee.isWebGL2===!0&&Ge.morphTargetsCount!==et)&&(ct=!0):(ct=!0,Ge.__version=F.version);let Un=Ge.currentProgram;ct===!0&&(Un=Nt(F,U,Q));let ma=!1,ji=!1,Is=!1;const xt=Un.getUniforms(),On=Ge.uniforms;if(Me.useProgram(Un.program)&&(ma=!0,ji=!0,Is=!0),F.id!==S&&(S=F.id,ji=!0),ma||A!==b){if(xt.setValue(W,"projectionMatrix",b.projectionMatrix),Ee.logarithmicDepthBuffer&&xt.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),A!==b&&(A=b,ji=!0,Is=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Ct=xt.map.cameraPosition;Ct!==void 0&&Ct.setValue(W,pe.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&xt.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Q.isSkinnedMesh)&&xt.setValue(W,"viewMatrix",b.matrixWorldInverse)}if(Q.isSkinnedMesh){xt.setOptional(W,Q,"bindMatrix"),xt.setOptional(W,Q,"bindMatrixInverse");const Ct=Q.skeleton;Ct&&(Ee.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),xt.setValue(W,"boneTexture",Ct.boneTexture,E),xt.setValue(W,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fs=j.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0&&Ee.isWebGL2===!0)&&J.update(Q,j,F,Un),(ji||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,xt.setValue(W,"receiveShadow",Q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(On.envMap.value=Oe,On.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ji&&(xt.setValue(W,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Ru(On,Is),Ae&&F.fog===!0&&he.refreshFogUniforms(On,Ae),he.refreshMaterialUniforms(On,F,Y,D,re),as.upload(W,Ge.uniformsList,On,E)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(as.upload(W,Ge.uniformsList,On,E),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&xt.setValue(W,"center",Q.center),xt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),xt.setValue(W,"normalMatrix",Q.normalMatrix),xt.setValue(W,"modelMatrix",Q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ct=F.uniformsGroups;for(let Ns=0,Du=Ct.length;Ns<Du;Ns++)if(Ee.isWebGL2){const ga=Ct[Ns];Se.update(ga,Un),Se.bind(ga,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function Ru(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Pu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(b,U,j){w.get(b.texture).__webglTexture=U,w.get(b.depthTexture).__webglTexture=j;const F=w.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=j===void 0,F.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const j=w.get(b);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,j=0){v=b,y=U,T=j;let F=!0,Q=null,Ae=!1,De=!1;if(b){const Oe=w.get(b);Oe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),F=!1):Oe.__webglFramebuffer===void 0?E.setupRenderTarget(b):Oe.__hasExternalTextures&&E.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const ze=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Q=ze[U],Ae=!0):Ee.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?Q=w.get(b).__webglMultisampledFramebuffer:Q=ze,R.copy(b.viewport),I.copy(b.scissor),_=b.scissorTest}else R.copy(N).multiplyScalar(Y).floor(),I.copy($).multiplyScalar(Y).floor(),_=ne;if(Me.bindFramebuffer(36160,Q)&&Ee.drawBuffers&&F&&Me.drawBuffers(b,Q),Me.viewport(R),Me.scissor(I),Me.setScissorTest(_),Ae){const Oe=w.get(b.texture);W.framebufferTexture2D(36160,36064,34069+U,Oe.__webglTexture,j)}else if(De){const Oe=w.get(b.texture),We=U||0;W.framebufferTextureLayer(36160,36064,Oe.__webglTexture,j||0,We)}S=-1},this.readRenderTargetPixels=function(b,U,j,F,Q,Ae,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){Me.bindFramebuffer(36160,Ue);try{const Oe=b.texture,We=Oe.format,ze=Oe.type;if(We!==$t&&fe.convert(We)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===xr&&(be.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&be.has("EXT_color_buffer_float"));if(ze!==si&&fe.convert(ze)!==W.getParameter(35738)&&!(ze===Qn&&(Ee.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-F&&j>=0&&j<=b.height-Q&&W.readPixels(U,j,F,Q,fe.convert(We),fe.convert(ze),Ae)}finally{const Oe=v!==null?w.get(v).__webglFramebuffer:null;Me.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(b,U,j=0){const F=Math.pow(2,-j),Q=Math.floor(U.image.width*F),Ae=Math.floor(U.image.height*F);E.setTexture2D(U,0),W.copyTexSubImage2D(3553,j,0,0,b.x,b.y,Q,Ae),Me.unbindTexture()},this.copyTextureToTexture=function(b,U,j,F=0){const Q=U.image.width,Ae=U.image.height,De=fe.convert(j.format),Ue=fe.convert(j.type);E.setTexture2D(j,0),W.pixelStorei(37440,j.flipY),W.pixelStorei(37441,j.premultiplyAlpha),W.pixelStorei(3317,j.unpackAlignment),U.isDataTexture?W.texSubImage2D(3553,F,b.x,b.y,Q,Ae,De,Ue,U.image.data):U.isCompressedTexture?W.compressedTexSubImage2D(3553,F,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):W.texSubImage2D(3553,F,b.x,b.y,De,Ue,U.image),F===0&&j.generateMipmaps&&W.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,U,j,F,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Ue=b.max.z-b.min.z+1,Oe=fe.convert(F.format),We=fe.convert(F.type);let ze;if(F.isData3DTexture)E.setTexture3D(F,0),ze=32879;else if(F.isDataArrayTexture)E.setTexture2DArray(F,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,F.flipY),W.pixelStorei(37441,F.premultiplyAlpha),W.pixelStorei(3317,F.unpackAlignment);const Be=W.getParameter(3314),Qe=W.getParameter(32878),At=W.getParameter(3316),cn=W.getParameter(3315),Nn=W.getParameter(32877),et=j.isCompressedTexture?j.mipmaps[0]:j.image;W.pixelStorei(3314,et.width),W.pixelStorei(32878,et.height),W.pixelStorei(3316,b.min.x),W.pixelStorei(3315,b.min.y),W.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(ze,Q,U.x,U.y,U.z,Ae,De,Ue,Oe,We,et.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(ze,Q,U.x,U.y,U.z,Ae,De,Ue,Oe,et.data)):W.texSubImage3D(ze,Q,U.x,U.y,U.z,Ae,De,Ue,Oe,We,et),W.pixelStorei(3314,Be),W.pixelStorei(32878,Qe),W.pixelStorei(3316,At),W.pixelStorei(3315,cn),W.pixelStorei(32877,Nn),Q===0&&F.generateMipmaps&&W.generateMipmap(ze),Me.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){y=0,T=0,v=null,Me.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class c0 extends Cu{}c0.prototype.isWebGL1Renderer=!0;class u0 extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ls extends Tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new z,rc=new z,sc=new it,bo=new pu,es=new Rs;class wi extends Et{constructor(e=new Tt,t=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ic.fromBufferAttribute(t,r-1),rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new Pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;sc.copy(r).invert(),bo.copy(e.ray).applyMatrix4(sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new z,u=new z,f=new z,h=new z,m=this.isLineSegments?2:1,x=i.index,d=i.attributes.position;if(x!==null){const y=Math.max(0,a.start),T=Math.min(x.count,a.start+a.count);for(let v=y,S=T-1;v<S;v+=m){const A=x.getX(v),R=x.getX(v+1);if(c.fromBufferAttribute(d,A),u.fromBufferAttribute(d,R),bo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(h);_<e.near||_>e.far||t.push({distance:_,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,a.start),T=Math.min(d.count,a.start+a.count);for(let v=y,S=T-1;v<S;v+=m){if(c.fromBufferAttribute(d,v),u.fromBufferAttribute(d,v+1),bo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class f0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(a-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Re:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new z,r=[],s=[],a=[],o=new z,l=new it;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(St(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(St(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function oc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}class ac extends f0{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(oc(o,l.x,c.x,u.x,f.x),oc(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const h0={class:"h-24 flex p-4"},d0={class:"text-xs w-1/4"},p0={class:"w-3/4"},m0={class:"border w-fit m-2 p-2"},g0=Vc({__name:"LensDraw",props:{leftRadius:null,rightRadius:null,thickness:null,refractiveIndex:null},setup(n){const e=n,t=(f,h,m,x)=>{const p=m>-.1&&m<.1?1/0:m,d=x>-.1&&x<.1?-1*(1/0):x;return 1/((f-1)*(1/p-1/d+(f-1)*h/(f*p*d)))},i=mn(null);let r;const s=new u0,a=new Gt(45,window.innerWidth/window.innerHeight,1,500),o=new Re(0,0),l=30;let c=mn(NaN);const u=f=>{const{thickness:h,leftRadius:m,rightRadius:x,refractiveIndex:p}=f,d=Number(h)/2,y=Number(x)/-10,T=Number(m)/-10,v=[];v.push(new Re(-1*d,l/2)),v.push(new Re(d,l/2));const S=new Tt().setFromPoints(v),A=[new Re(v[0].x,v[0].y*-1),new Re(v[1].x,v[1].y*-1)],R=new Tt().setFromPoints(A),I=[new Re(d,l/2*-1),new Re(y+d,o.y),new Re(d,l/2)],_=new ac(I).getPoints(500),C=new Tt().setFromPoints(_),D=[new Re(I[0].x*-1,I[0].y),new Re(T-d,I[1].y),new Re(I[2].x*-1,I[2].y)],Y=new ac(D).getPoints(500),se=new Tt().setFromPoints(Y),O=[];O.push(new Re(-80,o.y)),O.push(new Re(80,o.y));const N=new Tt().setFromPoints(O);c.value=t(Number(p),Number(h),Number(m),Number(x));const $=[];$.push(new Re(-80,l/4)),$.push(new Re((D[1].x+I[1].x)/2,l/4)),c.value>0?$.push(new Re(c.value*2,l/4*-1)):$.push(new Re(c.value*-2,l/2+l/4));const ne=new Tt().setFromPoints($),ee=new ls({color:16711680}),G=new ls({color:65280}),le=new ls({color:16777215}),re=new wi(se,ee),H=new wi(C,ee),V=new wi(S,ee),pe=new wi(R,ee),de=new wi(N,G),ge=new wi(ne,le);a.position.set(0,0,100),a.lookAt(0,0,0),s.add(re),s.add(H),s.add(V),s.add(pe),s.add(de),s.add(ge),r.render(s,a)};return Ts(()=>{r=new Cu({canvas:i.value}),r.setSize(window.innerWidth*.75,window.innerHeight),u(e)}),or(e,f=>{r&&(s.clear(),u(f))}),(f,h)=>(Ai(),ir(zt,null,[Ve("div",h0,[Ve("div",d0,[Ve("p",null,"left-radius: "+Ti(Number(n.leftRadius)>-.1&&Number(n.leftRadius)<.1?"∞":Number(n.leftRadius))+" cm",1),Ve("p",null,"right-radius: "+Ti(Number(n.rightRadius)>-.1&&Number(n.rightRadius)<.1?"-∞":Number(n.rightRadius))+" cm",1),Ve("p",null,"lens-thickness: "+Ti(Number(n.thickness))+" cm",1),Ve("p",null,"ref. index: "+Ti(Number(n.refractiveIndex)),1)]),Ve("div",p0,[Ve("p",m0,[Ve("strong",null,"focal point: "+Ti(Ao(c)===1/0?"∞":Ao(c).toFixed(2))+" cm",1)])])]),Ve("canvas",{ref_key:"lensContainer",ref:i},null,512)],64))}}),_0={class:"flex"},x0={class:"w-1/4"},v0=Ve("div",{class:"bg-black h-24"},[Ve("img",{alt:"Meetoptics logo",src:hd})],-1),M0={class:"p-6 font-bold text-gray-600"},y0=Ve("label",{for:"leftRadiusInput"},"Left Radius (cm)",-1),b0=Ve("hr",{class:"my-4"},null,-1),S0=Ve("label",{for:"rightRadiusInput"},"Right Radius (cm)",-1),w0=Ve("hr",{class:"my-4"},null,-1),T0=Ve("label",{for:"thicknessInput"},"Lens Thickness (cm)",-1),E0=Ve("hr",{class:"my-4"},null,-1),A0=Ve("label",{for:"refractiveIndexInput"},"Refractive Index (dimensionless)",-1),C0=Ve("hr",{class:"my-6 h-2"},null,-1),L0=Ve("label",{for:"newConfigLabelInput"},"Save template as",-1),R0={class:"flex mb-4 mt-1"},P0=Ve("label",{for:"configSelect"},"Load template",-1),D0=["id"],I0=Vc({__name:"App",setup(n){const e=mn("50.0"),t=mn("-50"),i=mn("5"),r=mn("1.52"),s=mn(""),a=mn(""),o=mn({});or(a,c=>{const u=o.value[c];u&&(e.value=u.leftRadius,t.value=u.rightRadius,i.value=u.thickness,r.value=u.refractiveIndex)});const l=()=>{const c={label:s.value,leftRadius:e.value,rightRadius:t.value,thickness:i.value,refractiveIndex:r.value};fetch("https://rffx7spcmx63iv6hoh5iyg54ly0yymkc.lambda-url.us-east-1.on.aws/save_config",{method:"POST",body:JSON.stringify(c)}).then(()=>{o.value[c.label]=c,s.value="",a.value=c.label}).catch(()=>{o.value[c.label]=c,s.value="",a.value=c.label})};return Ts(()=>{fetch("https://zqucebsqtr3ll7tvx2jkukpohm0ihqrx.lambda-url.us-east-1.on.aws/list_configs").then(c=>c.json()).then(c=>{o.value=c.Items.reduce((u,f)=>({...u,[f.label]:f}),{}),a.value="default"}).catch(()=>{o.value={}})}),(c,u)=>(Ai(),ir("div",_0,[Ve("header",x0,[v0,Ve("div",M0,[y0,ci(Ve("input",{id:"leftRadiusInput",type:"range",min:"-100",max:"100",step:"0.5","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),class:"w-full h-2 bg-red-100 appearance-none"},null,512),[[Yi,e.value]]),b0,S0,ci(Ve("input",{id:"rightRadiusInput",type:"range",min:"-100",max:"100",step:"0.5","onUpdate:modelValue":u[1]||(u[1]=f=>t.value=f),class:"w-full h-2 bg-red-100 appearance-none"},null,512),[[Yi,t.value]]),w0,T0,ci(Ve("input",{id:"thicknessInput",type:"range",min:"0.1",max:"10",step:"0.1","onUpdate:modelValue":u[2]||(u[2]=f=>i.value=f),class:"w-full h-2 bg-red-100 appearance-none"},null,512),[[Yi,i.value]]),E0,A0,ci(Ve("input",{id:"refractiveIndexInput",type:"range",min:"1.01",max:"2",step:"0.01","onUpdate:modelValue":u[3]||(u[3]=f=>r.value=f),class:"w-full h-2"},null,512),[[Yi,r.value]]),C0,L0,Ve("div",R0,[ci(Ve("input",{id:"newConfigLabelInput",type:"text","onUpdate:modelValue":u[4]||(u[4]=f=>s.value=f),class:"w-full h-8 px-2 mr-2 border"},null,512),[[Yi,s.value]]),s.value.length>0&&!Object.keys(o.value).includes(s.value.trim())?(Ai(),ir("button",{key:0,onClick:l,class:"border px-2"},"Save")):Ch("",!0)]),P0,ci(Ve("select",{id:"configSelect","onUpdate:modelValue":u[5]||(u[5]=f=>a.value=f),class:"w-full h-fit p-1 border mt-1"},[(Ai(!0),ir(zt,null,rh(o.value,({id:f,label:h})=>(Ai(),ir("option",{id:f,key:f},Ti(h),9,D0))),128))],512),[[ad,a.value]])])]),Ve("main",null,[on(g0,{leftRadius:e.value,rightRadius:t.value,thickness:i.value,refractiveIndex:r.value},null,8,["leftRadius","rightRadius","thickness","refractiveIndex"])])]))}});ud(I0).mount("#app");
