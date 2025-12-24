(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const x of s.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&e(x)}).observe(document,{childList:!0,subtree:!0});function R(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=R(o);fetch(o.href,s)}})();const j3=!1,_3=(L,n)=>L===n,Y={equals:_3};let e3=r3;const _=1,A=2,s3={owned:null,cleanups:null,context:null,owner:null};var m=null;let H=null,z3=null,p=null,d=null,w=null,U=0;function k3(L,n){const R=p,e=m,o=L.length===0,s=n===void 0?e:n,x=o?s3:{owned:null,cleanups:null,context:s?s.context:null,owner:s},t=o?L:()=>L(()=>Q(()=>E(x)));m=x,p=null;try{return M(t,!0)}finally{p=R,m=e}}function j(L,n){n=n?Object.assign({},Y,n):Y;const R={value:L,observers:null,observerSlots:null,comparator:n.equals||void 0},e=o=>(typeof o=="function"&&(o=o(R.value)),x3(R,o));return[S3.bind(R),e]}function z(L,n,R){const e=o3(L,n,!1,_);G(e)}function q3(L,n,R){e3=E3;const e=o3(L,n,!1,_);e.user=!0,w?w.push(e):G(e)}function Q(L){if(p===null)return L();const n=p;p=null;try{return L()}finally{p=n}}function S3(){if(this.sources&&this.state)if(this.state===_)G(this);else{const L=d;d=null,M(()=>I(this),!1),d=L}if(p){const L=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(L)):(p.sources=[this],p.sourceSlots=[L]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function x3(L,n,R){let e=L.value;return(!L.comparator||!L.comparator(e,n))&&(L.value=n,L.observers&&L.observers.length&&M(()=>{for(let o=0;o<L.observers.length;o+=1){const s=L.observers[o],x=H&&H.running;x&&H.disposed.has(s),(x?!s.tState:!s.state)&&(s.pure?d.push(s):w.push(s),s.observers&&i3(s)),x||(s.state=_)}if(d.length>1e6)throw d=[],new Error},!1)),n}function G(L){if(!L.fn)return;E(L);const n=U;$3(L,L.value,n)}function $3(L,n,R){let e;const o=m,s=p;p=m=L;try{e=L.fn(n)}catch(x){return L.pure&&(L.state=_,L.owned&&L.owned.forEach(E),L.owned=null),L.updatedAt=R+1,l3(x)}finally{p=s,m=o}(!L.updatedAt||L.updatedAt<=R)&&(L.updatedAt!=null&&"observers"in L?x3(L,e):L.value=e,L.updatedAt=R)}function o3(L,n,R,e=_,o){const s={fn:L,state:e,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:m,context:m?m.context:null,pure:R};return m===null||m!==s3&&(m.owned?m.owned.push(s):m.owned=[s]),s}function C(L){if(L.state===0)return;if(L.state===A)return I(L);if(L.suspense&&Q(L.suspense.inFallback))return L.suspense.effects.push(L);const n=[L];for(;(L=L.owner)&&(!L.updatedAt||L.updatedAt<U);)L.state&&n.push(L);for(let R=n.length-1;R>=0;R--)if(L=n[R],L.state===_)G(L);else if(L.state===A){const e=d;d=null,M(()=>I(L,n[0]),!1),d=e}}function M(L,n){if(d)return L();let R=!1;n||(d=[]),w?R=!0:w=[],U++;try{const e=L();return O3(R),e}catch(e){R||(w=null),d=null,l3(e)}}function O3(L){if(d&&(r3(d),d=null),L)return;const n=w;w=null,n.length&&M(()=>e3(n),!1)}function r3(L){for(let n=0;n<L.length;n++)C(L[n])}function E3(L){let n,R=0;for(n=0;n<L.length;n++){const e=L[n];e.user?L[R++]=e:C(e)}for(n=0;n<R;n++)C(L[n])}function I(L,n){L.state=0;for(let R=0;R<L.sources.length;R+=1){const e=L.sources[R];if(e.sources){const o=e.state;o===_?e!==n&&(!e.updatedAt||e.updatedAt<U)&&C(e):o===A&&I(e,n)}}}function i3(L){for(let n=0;n<L.observers.length;n+=1){const R=L.observers[n];R.state||(R.state=A,R.pure?d.push(R):w.push(R),R.observers&&i3(R))}}function E(L){let n;if(L.sources)for(;L.sources.length;){const R=L.sources.pop(),e=L.sourceSlots.pop(),o=R.observers;if(o&&o.length){const s=o.pop(),x=R.observerSlots.pop();e<o.length&&(s.sourceSlots[x]=e,o[e]=s,R.observerSlots[e]=x)}}if(L.tOwned){for(n=L.tOwned.length-1;n>=0;n--)E(L.tOwned[n]);delete L.tOwned}if(L.owned){for(n=L.owned.length-1;n>=0;n--)E(L.owned[n]);L.owned=null}if(L.cleanups){for(n=L.cleanups.length-1;n>=0;n--)L.cleanups[n]();L.cleanups=null}L.state=0}function M3(L){return L instanceof Error?L:new Error(typeof L=="string"?L:"Unknown error",{cause:L})}function l3(L,n=m){throw M3(L)}function h(L,n){return Q(()=>L(n||{}))}function T3(L,n,R){let e=R.length,o=n.length,s=e,x=0,t=0,r=n[o-1].nextSibling,i=null;for(;x<o||t<s;){if(n[x]===R[t]){x++,t++;continue}for(;n[o-1]===R[s-1];)o--,s--;if(o===x){const l=s<e?t?R[t-1].nextSibling:R[s-t]:r;for(;t<s;)L.insertBefore(R[t++],l)}else if(s===t)for(;x<o;)(!i||!i.has(n[x]))&&n[x].remove(),x++;else if(n[x]===R[s-1]&&R[t]===n[o-1]){const l=n[--o].nextSibling;L.insertBefore(R[t++],n[x++].nextSibling),L.insertBefore(R[--s],l),n[o]=R[s]}else{if(!i){i=new Map;let a=t;for(;a<s;)i.set(R[a],a++)}const l=i.get(n[x]);if(l!=null)if(t<l&&l<s){let a=x,c=1,u;for(;++a<o&&a<s&&!((u=i.get(n[a]))==null||u!==l+c);)c++;if(c>l-t){const f=n[x];for(;t<l;)L.insertBefore(R[t++],f)}else L.replaceChild(R[t++],n[x++])}else x++;else n[x++].remove()}}}const Z="_$DX_DELEGATE";function N3(L,n,R,e={}){let o;return k3(s=>{o=s,n===document?L():y(n,L(),n.firstChild?null:void 0,R)},e.owner),()=>{o(),n.textContent=""}}function k(L,n,R,e){let o;const s=()=>{const t=document.createElement("template");return t.innerHTML=L,t.content.firstChild},x=()=>(o||(o=s())).cloneNode(!0);return x.cloneNode=x,x}function a3(L,n=window.document){const R=n[Z]||(n[Z]=new Set);for(let e=0,o=L.length;e<o;e++){const s=L[e];R.has(s)||(R.add(s),n.addEventListener(s,P3))}}function A3(L,n,R){R==null?L.removeAttribute(n):L.setAttribute(n,R)}function C3(L,n,R,e){Array.isArray(R)?(L[`$$${n}`]=R[0],L[`$$${n}Data`]=R[1]):L[`$$${n}`]=R}function I3(L,n,R={}){const e=Object.keys(n||{}),o=Object.keys(R);let s,x;for(s=0,x=o.length;s<x;s++){const t=o[s];!t||t==="undefined"||n[t]||(n3(L,t,!1),delete R[t])}for(s=0,x=e.length;s<x;s++){const t=e[s],r=!!n[t];!t||t==="undefined"||R[t]===r||!r||(n3(L,t,!0),R[t]=r)}return R}function y(L,n,R,e){if(R!==void 0&&!e&&(e=[]),typeof n!="function")return P(L,n,e,R);z(o=>P(L,n(),o,R),e)}function n3(L,n,R){const e=n.trim().split(/\s+/);for(let o=0,s=e.length;o<s;o++)L.classList.toggle(e[o],R)}function P3(L){let n=L.target;const R=`$$${L.type}`,e=L.target,o=L.currentTarget,s=r=>Object.defineProperty(L,"target",{configurable:!0,value:r}),x=()=>{const r=n[R];if(r&&!n.disabled){const i=n[`${R}Data`];if(i!==void 0?r.call(n,i,L):r.call(n,L),L.cancelBubble)return}return n.host&&typeof n.host!="string"&&!n.host._$host&&n.contains(L.target)&&s(n.host),!0},t=()=>{for(;x()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(L,"currentTarget",{configurable:!0,get(){return n||document}}),L.composedPath){const r=L.composedPath();s(r[0]);for(let i=0;i<r.length-2&&(n=r[i],!!x());i++){if(n._$host){n=n._$host,t();break}if(n.parentNode===o)break}}else t();s(e)}function P(L,n,R,e,o){for(;typeof R=="function";)R=R();if(n===R)return R;const s=typeof n,x=e!==void 0;if(L=x&&R[0]&&R[0].parentNode||L,s==="string"||s==="number"){if(s==="number"&&(n=n.toString(),n===R))return R;if(x){let t=R[0];t&&t.nodeType===3?t.data!==n&&(t.data=n):t=document.createTextNode(n),R=q(L,R,e,t)}else R!==""&&typeof R=="string"?R=L.firstChild.data=n:R=L.textContent=n}else if(n==null||s==="boolean")R=q(L,R,e);else{if(s==="function")return z(()=>{let t=n();for(;typeof t=="function";)t=t();R=P(L,t,R,e)}),()=>R;if(Array.isArray(n)){const t=[],r=R&&Array.isArray(R);if(W(t,n,R,o))return z(()=>R=P(L,t,R,e,!0)),()=>R;if(t.length===0){if(R=q(L,R,e),x)return R}else r?R.length===0?L3(L,t,e):T3(L,R,t):(R&&q(L),L3(L,t));R=t}else if(n.nodeType){if(Array.isArray(R)){if(x)return R=q(L,R,e,n);q(L,R,null,n)}else R==null||R===""||!L.firstChild?L.appendChild(n):L.replaceChild(n,L.firstChild);R=n}}return R}function W(L,n,R,e){let o=!1;for(let s=0,x=n.length;s<x;s++){let t=n[s],r=R&&R[L.length],i;if(!(t==null||t===!0||t===!1))if((i=typeof t)=="object"&&t.nodeType)L.push(t);else if(Array.isArray(t))o=W(L,t,r)||o;else if(i==="function")if(e){for(;typeof t=="function";)t=t();o=W(L,Array.isArray(t)?t:[t],Array.isArray(r)?r:[r])||o}else L.push(t),o=!0;else{const l=String(t);r&&r.nodeType===3&&r.data===l?L.push(r):L.push(document.createTextNode(l))}}return o}function L3(L,n,R=null){for(let e=0,o=n.length;e<o;e++)L.insertBefore(n[e],R)}function q(L,n,R,e){if(R===void 0)return L.textContent="";const o=e||document.createTextNode("");if(n.length){let s=!1;for(let x=n.length-1;x>=0;x--){const t=n[x];if(o!==t){const r=t.parentNode===L;!s&&!x?r?L.replaceChild(o,t):L.insertBefore(o,R):r&&t.remove()}else s=!0}}else L.insertBefore(o,R);return[o]}const B3=[["1034","6166"],["3","6"]],D3=(L="")=>{let n=50;return L.split(`
`).reduce((R,e)=>{const o=e[0]==="R"?1:-1,s=parseInt(e.slice(1),10);return n+=o*s,n%100===0&&R++,R},0)},U3=L=>{const n=(e=0,o=1)=>(e%o+o)%o;let R=50;return L.split(`
`).reduce((e,o)=>{const s=o[0]==="R"?1:-1,x=parseInt(o.slice(1),10),t=R+s*x;return s>0?e+=Math.floor(t/100):(e-=Math.floor(t/100),n(R,100)===0&&e--,n(t,100)===0&&e++),R=n(t,100),e},0)},G3=Object.freeze(Object.defineProperty({__proto__:null,answers:B3,part1:D3,part2:U3},Symbol.toStringTag,{value:"Module"})),V3=[["12599655151","20942028255"],["1227775554","4174379265"]],K3=(L="")=>L.split(",").reduce((n,R)=>{const[e,o]=R.split("-").map(Number);for(let s=e;s<=o;s++){const x=s.toString();if(x.length%2!==0){s=10**x.length-1;continue}const t=x.slice(0,x.length/2),r=Number(t+t);if(r>o)break;r>=e&&(n+=r);const i=String(Number(t)+1);s=Number(i+i)-1}return n},0),H3=L=>L.split(",").reduce((n,R)=>{const[e,o]=R.split("-").map(Number);for(let s=e;s<=o;s++){const x=s.toString(),t=x.length;if(t<2)continue;const i=Array.from(Array(t-1),(l,a)=>a+1).filter(l=>t%l===0).flatMap(l=>{const a=x.slice(0,l),c=String(Number(a)+1);return[a.repeat(t/l),c.repeat(t/l)]}).map(Number).filter(l=>l>=s&&l<=o);if(i.length===0)break;s=Math.min(...i),n+=s}return n},0),F3=Object.freeze(Object.defineProperty({__proto__:null,answers:V3,part1:K3,part2:H3},Symbol.toStringTag,{value:"Module"})),W3=[["16973","168027167146027"],["357","3121910778619"]],Q3=(L="")=>c3(L,2),c3=(L,n=12)=>L.split(`
`).reduce((R,e)=>{const o=[];let s=e.length-n;return e.split("").forEach(x=>{for(;s>0&&o.length>0&&o[o.length-1]<x;)o.pop(),s--;o.push(x)}),R+Number(o.slice(0,n).join(""))},0),X3=Object.freeze(Object.defineProperty({__proto__:null,answers:W3,part1:Q3,part2:c3},Symbol.toStringTag,{value:"Module"})),J3=[["1351","8345"],["13","43"]],Y3=(L="")=>{const n=L.split(`
`).map(o=>o.split("")),R=[-1,0,1];let e=0;return n.forEach((o,s)=>{o.forEach((x,t)=>{if(x!=="@")return;let r=0;R.forEach(i=>{n[s+i]&&R.forEach(l=>{if(l===0&&i===0)return;n[s+i][t+l]==="@"&&r++})}),r<4&&e++})}),e},Z3=L=>{const n=L.split(`
`).map(s=>s.split("").map(x=>({ch:x,nabs:0}))),R=[-1,0,1],e=[[0,0]].slice(0,0);n.forEach((s,x)=>{s.forEach((t,r)=>{t.ch==="@"&&(e.push([r,x]),R.forEach(i=>{n[x+i]&&R.forEach(l=>{l===0&&i===0||n[x+i][r+l]?.ch==="@"&&t.nabs++})}))})});let o=0;for(;e.length>0;){const[s,x]=e.pop()||[-1,-1],t=n[x][s];t.ch==="@"&&(t.nabs>=4||(t.ch=".",o++,R.forEach(r=>{n[x+r]&&R.forEach(i=>{if(i===0&&r===0)return;const l=n[x+r][s+i];l?.ch==="@"&&(l.nabs--,l.nabs<4&&e.push([s+i,x+r]))})})))}return o},n2=Object.freeze(Object.defineProperty({__proto__:null,answers:J3,part1:Y3,part2:Z3},Symbol.toStringTag,{value:"Module"})),L2=[["640","365804144481581"],["3","14"]],R2=(L="")=>{const[n,R]=L.split(`

`).map(s=>s.split(`
`)),e=n.map(s=>s.split("-").map(Number));return R.map(Number).reduce((s,x)=>{const t=e.some(([r,i])=>x>=r&&x<=i);return s+(t?1:0)},0)},t2=(L="")=>{const[n]=L.split(`

`).map(e=>e.split(`
`)),R=n.map(e=>e.split("-").map(Number));for(;;){let e=!1;for(let o=0;o<R.length;o++)for(let s=o+1;s<R.length;s++){const[x,t]=R[o],[r,i]=R[s];t>=r&&i>=x&&(R[o]=[Math.min(x,r),Math.max(t,i)],R.splice(s,1),e=!0)}if(!e)break}return R.reduce((e,[o,s])=>e+(s-o+1),0)},e2=Object.freeze(Object.defineProperty({__proto__:null,answers:L2,part1:R2,part2:t2},Symbol.toStringTag,{value:"Module"})),s2=[["4648618073226","7329921182115"],["4277556","3263827"]],x2=(L="")=>{const n=L.split(`
`).map(s=>s.trim().split(/\s+/)),R=n.pop()||["*"],e=n.map(s=>s.map(Number)),o=R.map(s=>s==="*"?1:0);return R.forEach((s,x)=>{e.forEach((t,r)=>{o[x]=s==="*"?o[x]*e[r][x]:o[x]+e[r][x]})}),o.reduce((s,x)=>s+x,0)},o2=(L="")=>{const n=L.split(`
`),R=(n.pop()||"").trim().split(/\s+/),e=n.map(t=>t.split("")),s=e[0].map((t,r)=>e.map((i,l)=>e[l][r])).map(t=>t.join("").trim());let x=0;for(;R.length;){const t=R.pop()||"";let r=t==="*"?1:0;for(;;){const i=s.pop();if(!i)break;r=t==="*"?r*Number(i):r+Number(i)}x+=r}return x},r2=Object.freeze(Object.defineProperty({__proto__:null,answers:s2,part1:x2,part2:o2},Symbol.toStringTag,{value:"Module"})),i2=[["1518","25489586715621"],["21","40"]],l2=(L="")=>u3(L,!0),u3=(L="",n=!1)=>{const R=L.split(`
`).map(x=>x.split("")).filter(x=>x.find(t=>t!=="."));let e=R[0].map(x=>x==="S"?1:0),o=e.slice(),s=0;return R.forEach((x,t)=>{t!==0&&(o=e.slice(),x.forEach((r,i)=>{e[i]&&r==="^"&&(s++,i>0&&(o[i-1]+=e[i]),i<x.length-1&&(o[i+1]+=e[i]),o[i]=0)}),e=o)}),n?s:e.reduce((x,t)=>x+t,0)},a2=Object.freeze(Object.defineProperty({__proto__:null,answers:i2,part1:l2,part2:u3},Symbol.toStringTag,{value:"Module"})),c2=[["32103","8133642976"],["40","25272"]],u2=(L="")=>{const n=L.split(`
`).map(x=>x.split(",").map(Number)),e=n.length<100?10:1e3;n.sort((x,t)=>x[0]-t[0]);const o=f3((x,t)=>t[0]-x[0]);for(let x=0;x<n.length;x++){const[t,r,i]=n[x],l=Math.min(n.length,x+n.length/2);for(let a=x+1;a<l;a++){const[c,u,f]=n[a],[g,v,b]=[t-c,r-u,i-f],N=g*g+v*v+b*b;if(o.heap.length>=e){if(N>o.heap[0][0])continue;o.shift()}o.add([N,x,a])}}const s=[];for(let x=0;x<e;x++){const[t,r,i]=o.shift(),l=s.find(c=>c.has(r)),a=s.find(c=>c.has(i));if(l&&a){if(l===a)continue;for(const c of a)l.add(c);s.splice(s.indexOf(a),1)}else l?l.add(i):a?a.add(r):s.push(new Set([r,i]))}return s.sort((x,t)=>t.size-x.size),s.slice(0,3).reduce((x,t)=>x*t.size,1)},f2=(L="")=>{const n=L.split(`
`).map(s=>s.split(",").map(Number)),R=8e3;n.sort((s,x)=>s[0]-x[0]);const e=f3((s,x)=>x[0]-s[0]);for(let s=0;s<n.length;s++){const[x,t,r]=n[s],i=Math.min(n.length,s+n.length/2);for(let l=s+1;l<i;l++){const[a,c,u]=n[l],[f,g,v]=[x-a,t-c,r-u],b=f*f+g*g+v*v;if(e.heap.length>=R){if(b>e.heap[0][0])continue;e.shift()}e.add([b,s,l])}}e.heap.sort((s,x)=>s[0]-x[0]);const o=[];for(let s=0;s<R;s++){const[x,t,r]=e.heap[s],i=o.find(a=>a.has(t)),l=o.find(a=>a.has(r));if(i&&l){if(i===l)continue;for(const a of l)i.add(a);o.splice(o.indexOf(l),1)}else i?i.add(r):l?l.add(t):o.push(new Set([t,r]));if(o.length===1&&o[0].size===n.length)return n[t][0]*n[r][0]}return-1},f3=L=>{const n=[],R=t=>{if(t===0)return;const r=t-1>>1;L(n[r],n[t])<=0||(x(n,t,r),R(r))},e=t=>{const r=t*2+1,i=r+1;let l=t;r<n.length&&L(n[r],n[l])<0&&(l=r),i<n.length&&L(n[i],n[l])<0&&(l=i),l!==t&&(x(n,t,l),e(l))},o=t=>{n.push(t),R(n.length-1)},s=()=>{const t=n[0];return n[0]=n[n.length-1],n.length--,e(0),t},x=(t,r,i)=>{const l=t[r];t[r]=t[i],t[i]=l};return{add:o,shift:s,heap:n}},p2=Object.freeze(Object.defineProperty({__proto__:null,answers:c2,part1:u2,part2:f2},Symbol.toStringTag,{value:"Module"})),d2=[["4750176210","1574684850"],["50","24"]],m2=(L="")=>{const n=L.split(`
`).map(e=>e.split(",").map(Number));let R=0;for(let e=0;e<n.length;e++){const[o,s]=n[e];for(let x=e+1;x<n.length;x++){const[t,r]=n[x],i=Math.abs(o-t),l=Math.abs(s-r),a=(i+1)*(l+1);a>R&&(R=a)}}return R},g2=L=>{const n=L.split(`
`).map(t=>t.split(",").map(Number)),R=[],e=[];n.forEach(([t,r],i)=>{const[l,a]=n[(i+1)%n.length];r===a&&R.push([r,Math.min(t,l),Math.max(t,l)]),t===l&&e.push([t,Math.min(r,a),Math.max(r,a)])}),R.sort((t,r)=>t[0]-r[0]),e.sort((t,r)=>t[0]-r[0]);const o=(t=0,r=0,i=0,l=0)=>{for(let a=0;a<e.length;a++){const[c,u,f]=e[a];if(!(c<=t)){if(c>=r)break;if(i<f&&l>u)return!0}}for(let a=0;a<R.length;a++){const[c,u,f]=R[a];if(!(c<=i)){if(c>=l)break;if(t<f&&r>u)return!0}}return!1},s=(t=0,r=0)=>{const i=[0,0];for(let l=0;l<e.length;l++){const[a,c,u]=e[l];t!==a&&(r<=c||r>=u||(i[t<a?0:1]+=1))}return i.every(l=>l%2===1)};let x=0;for(let t=0;t<n.length;t++){const[r,i]=n[t];for(let l=t+1;l<n.length;l++){const[a,c]=n[l],u=(Math.abs(r-a)+1)*(Math.abs(i-c)+1);if(u<=x)continue;const f=Math.min(r,a),g=Math.max(r,a),v=Math.min(i,c),b=Math.max(i,c);o(f,g,v,b)||s(r+a>>1,i+c>>1)&&(x=u)}}return x},y2=Object.freeze(Object.defineProperty({__proto__:null,answers:d2,part1:m2,part2:g2},Symbol.toStringTag,{value:"Module"})),h2=[["488","18771"],["7","33"]],v2=(L="")=>{const n=L.split(`
`).map(o=>{const s=(/\[(.+)\]/.exec(o)?.[1]||"").split("").map(t=>t==="#"?1:0),x=o.split("(").slice(1).map(t=>t.split(")")[0]).map(t=>t.split(",").map(Number));return{target:s,buts:x}}),R=(o,s)=>s.forEach(x=>o[x]++),e=(o,s,x=0)=>{const t=x+1<s.length,r=t?e(o,s,x+1):1/0;R(o,s[x]);const i=o.every(a=>a%2===0)?1:1/0,l=t?1+e(o,s,x+1):1/0;return R(o,s[x]),Math.min(r,i,l)};return n.reduce((o,{target:s,buts:x})=>o+e(s,x),0)},b2=(L="")=>{const n=L.split(`
`).map(x=>{const t=(/\{(.+)\}/.exec(x)?.[1]||"").split(",").map(Number),r=x.split("(").slice(1).map(i=>i.split(")")[0]).map(i=>i.split(",").map(Number));return{target:t,buts:r}}),R=({target:x,buts:t})=>{const r=x.map((l,a)=>t.filter(c=>c.includes(a))),i=r.findIndex(l=>l.length===1);if(i>=0){const l=r[i][0],a=x[i];return l.forEach(c=>x[c]-=a),t.splice(t.indexOf(l),1),a+R({target:x,buts:t})}for(let l=0;l<r.length;l++){const a=r[l],c=a.map(f=>Math.min(...f.map(g=>x[g]))),u=c.reduce((f,g)=>f+g,0);for(let f=0;f<a.length;f++){const g=a[f],v=u-c[f];if(x[l]>v){const b=x[l]-v;return g.forEach(N=>x[N]-=b),b+R({target:x,buts:t})}}}return e={},o(x,t)};let e={};const o=(x,t)=>{if(x.every(i=>i===0))return 0;const r=x.join(",");return e[r]!==void 0?e[r]:e[r]=s(x,t)},s=(x,t,r=0)=>{const i=[];if(x.map(a=>a%2).every(a=>a===0)){const a=x.map(c=>c/2);i.push(2*o(a,t))}return r>=t.length?Math.min(...i,1/0):(i.push(s(x,t,r+1)),t[r].forEach(a=>x[a]--),x.every(a=>a===0)&&i.push(1),x.every(a=>a>=0)&&i.push(1+s(x,t,r+1)),t[r].forEach(a=>x[a]++),Math.min(...i))};return n.reduce((x,t)=>x+R(t),0)},w2=Object.freeze(Object.defineProperty({__proto__:null,answers:h2,part1:v2,part2:b2},Symbol.toStringTag,{value:"Module"})),j2=[["500","287039700129600"],["5","-1"],["-1","2"]],O=(L="",n="you",R="out")=>{const e={};if(L.split(`
`).forEach(x=>{const[t,r]=x.split(": ");e[t]||(e[t]={name:t,next:[],prev:[],data:{}});for(const i of r.split(" "))e[i]||(e[i]={name:i,next:[],prev:[],data:{}}),e[t].next.push(e[i]),e[i].prev.push(e[t])}),!e[n]||!e[R])return-1;const o=(x,t,r)=>{Object.values(e).forEach(l=>l.data.visited=!1);const i=[e[x]];for(;i.length;){const l=i.shift()||"";if(!l||l.data.visited)continue;l.data.visited=!0,r(l);const a=t===1?l.next:l.prev;i.push(...a)}};Object.values(e).forEach(x=>x.data.ct=0),o(n,1,x=>x.data.ct+=1),o(R,-1,x=>x.data.ct+=1),e[R].data.paths=1;const s=(x,t)=>t.data.ct<2?x:(t.data.paths>0||(t.data.paths=t.next.reduce(s,0)),x+t.data.paths);return s(0,e[n])},_2=(L,n="svr",R="out")=>{const e=["fft","dac"];let o=O(L,...e);return o===-1&&(e.reverse(),o=O(L,...e)),O(L,n,e[0])*o*O(L,e[1],R)},z2=Object.freeze(Object.defineProperty({__proto__:null,answers:j2,part1:O,part2:_2},Symbol.toStringTag,{value:"Module"})),k2=[["403","1"],["2","1"]],q2=(L="")=>{const n=L.split(`
`),e=Array.from(Array(6),(s,x)=>n.slice(x*5+1,x*5+4)).map(s=>s.join("").split("#").length-1);return n.slice(30).map(s=>{const[x,t]=s.split(":"),r=x.split("x").map(Number),i=t.trim().split(" ").map(Number),l=i.map((c,u)=>c*e[u]).reduce((c,u)=>c+u,0),a=r[0]*r[1]/l;return{loc:r,counts:i,tot:l,ratio:a}}).filter(s=>s.ratio>1.2).length},S2=()=>1,$2=Object.freeze(Object.defineProperty({__proto__:null,answers:k2,part1:q2,part2:S2},Symbol.toStringTag,{value:"Module"})),O2=`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`,E2=`R9
L8
L26
R45
R40
L45
R13
L20
L8
R5
R47
R38
L22
L26
L22
L19
L25
L21
L15
R19
R3
R33
R46
L9
R48
L21
R13
R10
L20
R48
L43
R44
R35
R23
L48
L21
L7
R26
L23
L50
L34
R22
L14
R21
L47
R16
R21
L5
L48
R85
R87
L82
R53
L22
L49
L92
L8
R36
R72
R92
R36
L13
R55
L85
L14
L74
L28
L65
L12
R24
R76
R13
L15
L31
L81
L86
L62
R37
L76
R8
R30
L84
L51
R67
R31
R14
R86
L89
R76
L16
R29
R47
R46
R14
R69
R24
R82
R18
R1
R92
L51
R44
L13
R87
R76
R64
L90
R66
L73
L26
R78
R86
L15
R74
L390
L510
R899
L67
R32
L935
L2
L27
L11
L889
L138
L6
L56
R25
L25
L2
R2
L13
L87
R68
L17
R49
R78
R17
L68
L14
L1
L780
R68
L29
L59
R971
L19
R57
L25
R33
L6
L81
R258
L3
L88
L909
R24
R53
L53
L24
R278
R37
R85
L17
R417
L58
R42
R45
R871
R48
R67
L715
R15
L77
R62
R50
R50
R363
L27
L9
R261
L62
R2
R99
R57
L684
R399
L447
L94
R97
R97
R75
R44
R42
L149
L536
L64
L11
R43
L196
L32
L75
L40
L360
R824
R912
L64
R135
R54
L33
R89
L30
L80
R82
R12
L90
L4
L56
R956
L662
L62
L43
L8
R76
L98
L8
R61
R344
L78
L37
L85
R73
L73
R260
R40
R33
L236
L11
R89
R25
L9
L91
L410
R97
R2
R261
R85
L957
L24
R95
L94
R41
R4
R112
R188
L34
R34
R32
L13
L26
L8
R17
R6
L8
L28
L28
R56
R79
R15
R606
R76
R224
L47
L77
R29
L5
L5
R773
R50
R82
R355
L77
L25
L43
R16
L726
R69
R16
L85
R86
L71
L82
R60
L11
L8
R524
L24
R26
R760
L60
L12
L88
L72
R317
R154
R96
L65
R66
L27
R3
L4
R36
L53
L51
L90
R90
R40
R89
L18
R34
R40
R15
R70
L270
L58
L42
L71
L27
L2
R942
L930
R19
R40
R29
R9
R54
L171
R8
L814
L86
L716
L84
L59
L41
L25
R25
L68
R51
R70
R39
L892
R60
R74
R93
R26
R47
R62
L55
R436
R31
R1
R25
R35
R65
L62
L38
R76
L678
L91
R93
L91
L9
L10
L90
L13
R92
L379
R54
R46
L81
L29
R95
L58
R61
R12
L12
R373
L71
L12
R77
L955
R6
R71
L19
L20
R475
L22
R9
R944
R2
L42
L85
R39
R38
L112
R16
R75
L375
R68
R32
L48
R98
R82
L60
R107
R358
L40
L97
R34
R66
L426
R9
L23
L66
L70
R7
R39
R30
L31
R548
L317
R39
R171
L59
R449
R61
L15
L97
L49
R78
L4
R26
R84
R893
L37
R32
R728
L93
L64
R357
L270
L69
R39
R76
L87
R94
R28
L620
R658
L49
L193
R4
L211
L43
R702
L29
L43
R20
L209
R34
L72
R3
R37
L89
L67
R783
L27
L52
R20
R37
R19
R476
R33
R56
L6
L58
L48
L9
R51
R64
R17
L7
L64
L29
R45
L845
L726
L12
L162
L91
R29
R38
L72
R96
R50
R53
L29
L63
L311
R201
R999
R88
R12
L593
L6
R51
R17
R434
L48
R999
R46
R79
L553
L26
L80
R836
R744
L905
L51
L69
L9
L85
R67
R52
L78
L822
L14
L8
L3
L75
L57
L49
R6
L75
R81
R694
L59
R959
R67
L67
R853
R47
R42
L919
L23
R11
L94
L78
R85
L39
L85
R26
L30
R4
L93
R51
L211
R53
R10
R90
R51
R95
R42
L103
L382
L3
L25
L75
L69
L766
R95
L260
L78
L23
R41
R66
L43
R78
L14
R94
L321
R23
R99
R76
R180
R58
L10
L26
L65
L35
R58
R42
R20
R41
R39
R8
L60
R22
L74
L72
R76
L31
R87
R44
R59
R69
L5
L57
L813
R881
R80
L14
L98
L60
R21
R37
L73
R66
R61
L54
L612
L56
R57
L26
R37
R745
R36
L76
L5
R152
L68
L714
L61
L32
R97
R49
L48
L75
R27
R88
R61
R506
L47
L90
L89
R45
L3
L20
R52
R70
R40
R867
L93
R82
L37
L5
R46
R30
R97
R73
L40
R60
L20
L705
L22
L73
L66
R713
L947
L39
R83
L54
R322
R97
R97
R49
R13
L68
L49
L73
R3
L50
L31
R83
R70
L85
L593
R37
R60
R28
L91
R91
R184
R16
R46
R33
L79
L80
L20
R19
L17
L27
R25
R9
L9
R21
R79
L20
L10
R72
L542
L43
R56
R87
L68
L32
R18
R82
L306
L68
L26
L51
R51
R79
L277
R45
R19
R44
R38
L233
L71
L17
L58
R703
R728
R26
R75
L44
L357
L31
R667
R64
R57
L57
L883
L817
R54
R10
L86
L75
L903
L55
R52
L97
R51
R49
R91
R15
L1
R95
R21
L22
L99
R51
R449
L45
R19
R26
L223
L677
L1
L399
L41
L59
R224
L24
R228
R26
L68
R238
R76
R85
L85
R99
R595
R872
R234
R24
L90
L34
R69
R58
L27
L99
L67
R66
L74
L26
L988
L12
R734
L43
L91
R46
R66
L12
L30
R53
L77
R54
R90
R10
L399
L16
L20
R85
L77
R841
R86
R13
L33
R3
R31
L85
R170
L99
R86
R14
L17
L83
L41
R16
L475
R946
R28
R66
R85
L25
L15
L85
R684
R65
L49
R69
R92
L72
R7
R4
R52
L55
R40
L356
L81
R348
L26
R778
L45
L30
R60
R17
R98
R435
R65
L618
R37
R81
R80
R20
R84
L77
L10
L40
L37
L20
L847
L47
L62
R32
L58
R716
R66
R63
R93
R44
R33
R60
L9
R70
L654
L48
L7
L70
L75
R96
R94
R60
L655
L795
R44
L44
L84
R55
R12
R17
L92
L51
R43
R54
R646
L987
R87
R34
R66
L80
L947
R320
L51
R79
L21
R90
L2
L32
R44
R12
R87
L4
R534
R265
L69
L47
L28
L60
R10
R54
R80
L35
R1
R91
R9
L7
R98
L55
L18
R782
R968
L383
L510
L178
L354
L40
R97
L39
L92
R31
L22
L23
L655
R33
L478
R25
L588
L15
L565
L50
R47
L10
L99
L2
L95
L582
L529
R8
R80
L51
R41
L55
L45
R898
R32
R411
L692
R248
R33
R41
R664
R95
R24
L74
L234
L816
R75
L17
R42
R989
R411
R165
L65
R47
L47
L480
R58
R76
L54
R17
R93
R78
R12
L62
R62
R13
L13
R90
R8
L75
R77
R11
L406
L90
R6
L73
R52
R91
R52
L88
L25
L8
L35
R94
L81
R17
L17
R51
R49
L414
R48
R46
R20
L95
L40
L532
L33
R97
R1
L95
L494
R60
L69
R33
L534
R1
L44
L474
R68
L61
L585
R96
R43
R79
R7
R48
L433
R49
L93
L60
R60
L24
R550
R74
R39
L39
L8
L420
R28
L99
R5
L20
L86
L80
R68
R58
R48
R934
R23
R48
L99
R59
L31
L28
R55
R23
R76
L86
L68
R24
L24
R97
R3
L1
R1
R1
R90
L89
L8
R39
L97
R64
L408
R8
R588
L488
L85
R85
R60
R40
L19
R719
L7
L65
R10
R72
L54
L56
L643
R247
L16
L60
L28
R392
R6
R502
R45
R245
R4
L67
R76
R10
R87
L17
R68
R95
L46
R21
L82
R17
L1
L19
R64
R1
R99
R89
L189
L91
R191
R145
L53
L98
L81
R87
R8
R37
L82
L6
R843
L19
L95
L332
R61
L305
R77
R69
R18
R68
R34
L69
L164
R946
R712
L1
L64
R64
L9
R32
R249
R99
R629
L56
R77
R98
R6
L67
L58
L237
L7
L56
L98
R199
L501
R44
L44
R26
L804
R32
L13
L67
R79
R66
L19
L46
L51
R49
L126
R74
R34
R66
L44
L98
L58
R17
L17
L69
L49
R18
L89
L60
L51
L65
L46
L589
R29
R71
L871
L76
R847
R3
L3
R31
L31
R16
R84
L3
L95
R40
L42
R939
R43
L75
L7
L69
R50
L515
R67
R67
L27
R59
L18
L169
R55
L31
R31
L49
R32
L97
R14
L63
R4
R42
L97
L86
R14
R86
R74
R91
R537
L2
R42
R58
L78
L31
L91
R51
R814
L65
L50
L88
L48
R51
L66
L29
L270
R563
L63
R15
L723
R7
R91
L44
R54
R5
R695
R45
L45
R598
L1
R3
L70
R70
L34
L18
R52
L16
R981
R340
L9
R4
R1
R44
R68
R11
R28
R43
R5
L235
R94
L59
R39
L62
L86
L20
R45
L16
L229
R12
L54
R71
L19
L41
L40
R99
L99
L71
L18
L11
R43
L17
R88
L14
R3
R90
R7
R459
L8
R95
R28
R26
R35
R11
R554
R7
R42
R9
R42
L327
R58
L763
R930
L698
R34
L877
R67
L24
L75
L325
R68
R85
R447
L94
L46
L60
R86
R274
R16
R44
R580
L45
R48
R868
R729
L35
L11
R77
R43
L74
R28
L28
L997
R97
L52
R89
L37
R77
L19
L58
L80
L20
R66
L65
L1
R92
L64
R923
R37
R465
L69
R39
R974
R37
R26
R31
R59
R36
L82
R81
L16
L69
L74
R85
R45
L92
L59
R95
R13
R73
L86
R266
L54
R59
L71
R97
L626
R391
R26
L49
L739
R60
R57
L747
R24
R17
L3
R92
R24
R22
R477
L86
L757
R42
R78
R15
L15
R98
R768
R412
R91
R31
L4
R775
R67
L38
L14
R4
R28
L18
R74
L57
R5
L21
R17
R51
L67
L260
L65
R55
L32
R12
R31
L996
L27
L20
R35
L20
R85
R902
R98
R92
R72
L1
L91
L69
L29
R76
R59
L509
R655
L6
L43
R846
L75
L93
L384
L689
L11
L279
L157
R36
L2
R402
R4
R14
R56
R657
R69
L27
L96
L22
L85
L477
R381
R85
L59
L82
R41
R71
L95
R84
L919
R31
R76
R6
R87
R86
L86
R85
R15
L62
L36
R98
L99
L54
L47
R45
R60
L30
L2
R5
L98
R20
R90
R91
R19
L26
R14
R12
R30
R48
L31
R36
R80
R694
L51
L16
L90
R5
L5
R120
R29
R84
L589
R56
R70
L41
L29
L363
L1
R83
R81
R22
L22
L532
R32
L777
L23
L88
R52
R36
L88
L88
L24
R4
R21
R41
R448
R86
R64
R36
R85
R64
L49
L43
R943
L48
L73
L379
L41
L84
L68
R193
L79
L21
L47
R847
R314
R86
R381
L40
L72
R704
L37
L533
R23
L29
R30
L27
R18
R382
R98
R102
R77
L77
R8
R92
R49
R51
L52
R452
L850
R23
R21
L94
R60
L5
R612
R354
L21
L33
L99
R6
L974
R868
R33
L66
L723
R88
L135
L5
L28
L53
R67
L46
R2
L47
L55
R9
R14
L55
R432
L313
R24
R28
R61
R512
R88
L37
L44
L461
R42
L33
R85
L23
L29
L90
L10
L11
R60
L41
L41
R33
R79
L10
L69
L271
R25
L94
R58
L845
L24
L12
R63
R86
L86
L45
R45
R76
L45
L17
R86
R380
L63
L17
L66
L16
R82
L40
L344
R49
L265
L905
R35
R62
L36
L79
L77
R24
L60
L64
R68
R1
L69
L18
L82
L34
R53
R671
L190
R64
L70
R6
L88
R488
L4
R65
R25
L86
R281
R19
R68
L94
L96
L29
L49
R23
L23
L84
R81
L36
L5
L656
L30
L72
L90
R15
R64
L44
L43
L34
L67
R89
R12
R269
L13
R44
R10
L10
L167
L33
R21
L94
R73
L67
L221
R909
R79
L64
R64
L8
R69
L810
R294
L25
R518
R52
R820
R646
R632
R29
R54
L371
L54
L48
L437
L637
L224
L57
R257
R2
R1
L2
L1
R93
L393
L765
R3
L85
L653
R88
L88
R47
R55
L89
R87
R74
R53
R73
R98
R2
L83
L67
L654
R4
L37
L63
L521
L85
L52
R87
R903
L32
R71
R29
L42
R132
L90
R21
R68
L89
R322
L22
R436
L34
R324
L26
R1
R361
L5
L57
R70
R333
L38
L50
R50
L85
R20
R35
R35
R730
R46
L49
R6
L53
L833
R83
L42
L337
R12
R67
R78
R45
L161
R83
R64
R991
L90
R42
L52
L71
R71
R31
L31
L501
L43
L42
R372
R14
L31
R15
L84
R21
L121
R4
L4
L12
L88
L80
R80
L6
L89
R51
L7
R65
R86
L57
L367
R24
R810
R479
L74
L790
R851
L16
R9
L74
L19
L76
R80
L80
R59
R2
R39
L931
L93
R74
L50
L48
R10
R38
R153
R85
R62
R32
L32
R54
R846
R82
R388
R77
R424
L871
L98
L71
R69
L349
R56
R93
R66
R68
L94
L15
R75
L36
R36
L50
L50
R39
R30
R31
L7
L93
L812
R12
R75
R25
L808
R30
L84
R62
L887
L448
R35
R314
L65
R24
L94
L79
R16
L73
R57
R1
L94
L7
R354
R46
R34
R766
L741
L984
R840
L22
L39
R863
L7
R98
L72
L97
L64
L59
R42
R392
L50
R93
L163
L46
R816
L28
R328
L80
L80
R28
L68
R20
R3
L23
L25
R19
R806
L32
L68
L39
R64
R19
R687
L31
L4
R82
L78
R737
R81
L18
R77
L965
L995
L17
R939
R1
L40
R584
R16
L26
L678
R31
L77
R50
L96
L56
L14
L25
R675
R904
L88
R99
L88
R40
L5
L85
R39
L96
L71
R867
L49
L86
L91
R20
R6
L15
L944
R4
L21
R64
L28
R40
R96
L96
L70
R92
L61
R75
L836
R62
R65
L273
R29
L683
L71
R71
L8
R8
R109
L35
R26
R4
R96
R10
L10
L95
L5
R48
R52
L5
L95
L56
R6
R645
L95
R95
L28
L94
R27
R33
R422
L290
R35
R94
R87
L81
L381
L19
L60
R30
L10
R840
L60
R84
L660
L222
L54
R868
L56
L552
L348
L21
R50
L18
L11
R61
L61
R82
L582
L799
L2
R1
L91
R7
L38
L37
R737
R18
R16
L50
L962
R16
R17
L521
R20
R97
L69
R6
L46
R68
L188
L69
R69
R64
L64
R342
R66
R27
R65
L583
L17
R161
L22
R661
L50
R68
L163
L25
R2
R168
R16
R884
L790
L70
L79
L20
R59
L317
R31
L9
R51
R44
R91
L67
R98
R678
R20
L4
L96
L43
R91
R12
L30
L550
L43
R43
R25
L25
R604
R17
L46
L76
L24
R5
R39
L819
R5
L85
R59
L99
R77
R4
L9
L72
R46
L526
R48
L878
R872
R99
R59
R750
R50
L59
R59
L569
R51
L8
L74
L67
L53
R26
L806
L81
L55
L11
R23
L199
R140
L45
R55
R45
R28
L91
L93
R11
L95
L41
L58
R967
L866
R49
L83
L62
R51
R90
L69
L60
L50
L13
L687
L10
L35
R555
R90
R873
R27
L37
L80
L590
L3
R81
R57
L991
R41
R13
L91
R78
R22
L34
R7
L73
L722
L78
L39
L60
R17
L20
L98
R35
L13
R461
R46
L56
R39
L12
L564
L350
L75
L63
R13
R39
R90
R730
R28
L10
R62
R88
L88
R22
R78
R219
R81
R947
R8
R664
R82
R9
R28
L652
L86
L81
R66
R96
L40
L41
L999
R99
L64
R64
R25
R950
L31
L61
R5
R12
R342
R58
R35
R65
R13
R449
L83
L79
L26
R26
L21
R25
L709
L95
R62
L79
R17
R63
L63
L84
L94
L11
L11
L55
R76
L21
L67
L68
R9
R68
R40
R859
R14
L6
R14
R39
R51
L47
R94
L739
R39
L82
L18
R82
R74
R44
R472
L20
L52
L899
R31
L25
L44
L51
L12
R93
L93
L40
R13
L7
R834
L57
R4
R10
L57
R480
L80
R17
L17
R95
L91
L168
L28
L53
R92
R273
R67
L87
L83
R783
L96
L946
R9
R33
L6
L220
R54
L98
L24
L94
R88
R17
L60
L392
L42
R77
L33
L67
L1
R901
L63
L37
L2
R568
L66
R27
L27
L4
L65
R307
L638
R36
R23
L50
L709
R86
L86
R77
L77
R147
R53
L75
R812
L539
L98
R33
L33
R43
R57
L30
R80
R50
R7
R307
L52
R22
L46
R62
L30
L94
L62
R47
R39
L90
R927
L37
L25
L453
L25
R76
L973
L641
L922
R63
L33
R37
L4
L69
R577
R92
L71
R24
L53
L2
L914
L684
R63
R62
R24
L129
L23
L97
L44
L56
L578
R78
L12
R12
L219
L681
L13
R313
L43
R56
L64
R51
R72
L66
L52
L822
R68
L45
R745
L39
R15
R24
R4
L4
L82
R54
R723
R8
L3
R59
R41
R58
L135
R77
R24
L24
L21
R44
R77
L24
R1
R24
L95
L6
L64
R64
R50
R62
L112
R853
R36
R14
L71
L848
R16
L70
L2
L28
L917
R84
R33
L321
L6
R327
R619
R71
L35
R45
R87
L927
L260
R934
R15
R6
R723
L82
L57
L27
L5
R436
L827
R884
R990
R84
L41
R41
L1
L673
L851
R83
L28
R9
R50
R37
L97
L86
R715
L32
R9
R31
R55
R56
R49
L73
R2
L3
L80
L288
R3
L344
L17
R15
R85
L277
R777
L773
L909
L18
R91
L53
L538
L74
L26
L39
R39
L93
R55
R18
R2
L82
R40
R23
L61
R63
R535
L206
R6
R19
L38
L5
L76
L18
R65
L21
R7
R867
L70
R82
L95
R56
L73
R90
L90
L69
R69
L461
L39
R89
L85
L8
R45
R159
R37
L73
R17
R986
R14
L81
L77
R19
L42
R801
L1
L334
L66
R96
R88
R16
L86
L14
R28
R527
L32
R50
L863
R57
L51
R84
L98
L2
L20
L680
R16
R62
L21
R23
L818
R38
L5
R5
R631
L56
R25
L330
L55
L15
R84
R22
R94
L32
R32
R81
R19
L1
L299
R92
R36
R10
L60
L88
R69
L91
R88
R58
L14
L59
R12
L5
L678
R30
R76
L12
R45
L60
R46
R99
L46
R52
R60
R940
L522
R71
R51
R83
L55
L15
L27
L91
L95
R68
R70
L34
R681
R826
R89
L94
R36
L42
L956
L44
R19
R94
R97
L54
R79
R65
L882
L18
R88
R403
R9
L39
L10
R49
L31
R65
L8
R43
L21
R543
R9
L78
L65
L57
L62
R18
L56
L507
R70
L57
R94
R46
L88
R248
R52
R42
R740
L304
L36
L2
L398
L25
R38
R869
L51
R69
L38
L478
L576
R32
R60
L66
R66
L95
L5
R98
R76
R14
L17
R87
R312
L81
L89
L62
L70
R132
R46
R88
L34
R56
R496
L52
L55
L41
R61
R35
R64
R72
R58
L52
L32
L74
L827
R91
L999
L1
R67
R33
L63
R63
L51
L249
L30
R42
L90
R78
R891
R23
L5
R91
R35
R89
R993
L67
R76
R374
L54
R19
L79
R68
L79
L756
L19
R31
R46
R18
R905
R222
R346
L64
R12
L88
R43
R86
R943
L66
L13
L81
R32
R30
L10
L949
R72
L33
L38
L53
L444
R32
R218
R3
L68
L54
R49
R22
L419
R710
L540
R14
R32
R49
L49
R654
L90
R90
L15
L33
L27
L79
L49
R39
L36
R10
R54
L64
L368
R49
R19
R57
L57
L33
R141
L8
L90
L10
L44
L739
R95
L812
R73
R93
L18
L39
R59
R3
R91
L62
R53
R35
L88
L69
L31
L38
L62
L87
R89
R298
R71
R606
R58
R73
L78
L30
R853
L76
R79
L56
L48
L330
L986
L36
L43
L2
L12
R57
L57
L95
R17
R33
L98
R933
R367
R65
R35
L69
L47
R416
L893
R68
R98
L78
L34
R27
R812
L7
L27
R9
R60
R65
L84
L316
L32
R811
R21
R46
R54
R63
R37
R704
R96
L86
R86
L38
L62
L52
L48
R96
R89
R45
R28
L158
L608
R29
R116
R563
R98
R56
R46
R48
R82
R515
R5
R31
R299
R20
L296
L304
R79
R21
L16
R16
R515
L15
L24
L97
L75
R42
L46
R41
R39
L75
R483
R52
R94
L65
L38
R24
L22
L92
L2
R8
L20
R73
R24
L90
R93
L57
R30
R7
R93
L931
R31
L42
L1
L57
L56
L88
R44
R55
L50
L50
L23
R811
L39
L19
L88
L97
L11
R63
R48
R9
R90
R674
L20
L49
R793
L29
L51
R83
R35
L35
L83
R88
L5
L373
L27
R19
L84
L335
L29
L28
R41
L84
L82
R83
L67
L34
R44
R83
L47
L480
R885
R817
R34
L36
L48
L52
R890
R10
R71
R29
R66
R72
L2
L99
R649
L86
L32
L44
R876
R32
L90
R1
L2
L41
L94
R16
L19
R47
R50
R57
L8
L6
R41
L13
R81
R647
R72
L71
R387
R13
L851
R33
L182
R820
R12
R68
R84
R68
L52
L12
R72
L740
L20
L28
R255
L9
R249
L66
L282
L25
L704
L72
L6
L438
L74
L24
R759
R40
L75
L92
R455
R344
L16
L19
R28
R67
R75
L48
L654
L40
R91
R63
L620
L86
L321
R668
L31
R252
L54
L62
R33
R36
R31
L42
L58
R35
R79
L54
R80
L883
L95
R71
R3
L36
R88
R28
R54
L70
R997
L5
R376
L68
L46
R37
R738
R71
L951
L346
R97
R90
R86
R18
R14
L2
R169
R225
R74
L54
R80
R401
L52
L49
L16
L21
R37
R97
R3
L489
R842
L36
R87
L79
L25
L9
L16
L247
R72
R24
R76
R75
R25
L63
L39
L4
L95
R85
L11
R47
L34
L78
R57
L65
L16
L77
R93
R4
R493
R21
R582
R42
L42
R56
L356
L94
L91
L31
L88
R82
L978
L1
R1
L273
R796
L18
R86
R9
L783
L817
L42
R442
L98
L52
L50
L45
L737
L18
R34
L34
L22
L2
L76
L316
R27
R155
R34
L61
L39
L94
R42
L626
R30
L44
R24
R774
L34
L81
L453
L65
R80
L53
R8
L6
R98
R41
L27
L934
L80
L84
R84
L72
L565
R37
L177
R31
L54
L73
L86
L68
L75
R5
R17
R18
R11
L40
R91
L45
R49
R96
L53
R53
L70
L42
L9
R75
R218
R28
R58
R42
L80
L792
L750
L78
R31
R36
L39
R68
R37
R5
L17
R74
R5
L627
L15
R842
R219
R795
R83
L36
R19
R276
L32
L362
L20
R58
L75
L125
R67
L667
L28
L972
R16
R7
L24
L99
L6
R49
R44
R935
R857
L679
L82
L18
R729
R55
L75
R91
L32
R299
R76
R93
R33
L70
L74
L25
R49
L49
R28
R490
L18
R66
R34
L89
L953
L26
L32
R58
L58
L15
R54
L66
R27
L55
R3
L13
R165
L88
R32
L24
L44
R24
L99
L50
L71
R769
L26
L29
L19
R276
L51
R528
R342
L94
R92
L25
R60
L167
L31
L5
L731
L969
L36
R94
L99
L464
R92
R40
L93
R68
R698
R73
L73
L16
L938
R422
L657
L61
R33
L83
R599
L13
L86
L51
L5
L72
R26
R2
L13
R54
R55
R4
L55
R965
L35
R67
L31
L606
R33
R56
R206
R38
L85
R61
L14
R15
L15
R34
L9
L83
L7
L33
L36
R44
L14
R4
R928
R758
R456
L72
R40
R69
L196
R28
R89
L72
L83
L34
L11
L9
R91
R54
R127
L87
R30
R80
R14
L688
L4
R92
R84
R16
L61
R61
L76
L414
R471
R132
L13
R59
R15
L198
L646
R70
R88
L88
R53
R90
L43
L177
R12
R65
R20
R75
L32
R940
L3
R51
L54
R10
R93
L804
L596
R45
L472
R48
L13
R43
R70
L13
R306
R86
L63
R8
L45
L27
L73
L84
R36
L48
R96
L25
R25
L69
L34
R24
L21
R480
L385
L99
R16
L612
L86
R34
L48
R58
R56
R29
L684
L59
L89
L72
R61
R43
L43
R420
R680
R44
R145
L506
L83
R420
L35
R93
L78
L10
L35
R30
R15
R66
R88
L2
R714
R34
L27
L27
R533
R21
R283
R717
L36
R20
R35
R87
R802
L8
R51
L95
R56
L847
R871
L37
L99
R56
R44
L11
R11
R38
L38
R9
R91
L33
R5
L72
L61
L1
L530
R92
R18
R69
R913
R67
R8
L49
R60
R504
L90
L1
R401
R125
R8
R6
L39
L98
R729
L72
R41
R46
R206
L982
R685
R945
L98
L664
R75
L614
R52
L89
R917
L79
L8
R99
L91
R290
L50
L30
L10
R35
R74
R891
L385
L49
R481
L181
L104
L62
R33
L41
L1
L64
R33
L89
L871
L88
R428
L40
L26
L45
L129
R84
L84
R31
L865
L739
R98
L325
L995
R34
R461
L122
R35
L48
L31
L20
R62
L76
R18
R82
L97
R97
R58
R58
R10
L26
L23
L77
R67
L767
L65
R23
R2
L146
L214
L34
L66
R32
L86
L346
R20
L20
L92
R692
L65
R67
R43
R55
R41
R769
R984
L98
L96
L50
R35
L89
R4
R319
R564
L9
R17
L870
L776
L1
L44
R922
L92
R71
R92
L58
R36
R808
L79
L42
L58
R5
L71
L88
R54
R973
L31
R58
L76
L24
L76
R43
L21
L853
L338
R5
L78
L182
L204
L13
R55
L2
L744
L92
R55
L555
L6
R6
L8
L3
R93
R29
R61
L74
R2
R18
R10
R72
L85
R31
L46
R23
R52
R8
R17
R93
R7
R30
L24
L6
R33
L11
R70
L52
L51
R11
R11
R89
L57
L21
R70
L92
L71
R71
R67
R963
R60
R13
R97
L83
R6
R77
R18
R6
L3
R79
L31
R69
R62
L21
L59
L20
L33
L15
R48
L69
R69
L94
R10
L97
R27
R63
R72
L15
L7
L821
R419
R80
L37
R50
R31
L19
L527
L764
R344
R97
L912
L2
R62
L54
R69
L18
L77
L80
L29
L777
L94
L185
L152
R57
L20
R25
L12
L2
R89
L19
L12
R31
R35
R1
R64
L52
L87
L69
L451
L41
R55
L55
L70
L390
L51
R7
R4
L73
R56
R17
R83
L37
L176
R530
L43
L51
R62
L10
R43
L1
L4
R4
L13
R13
R53
L53
L69
R63
R615
L39
L98
L87
L31
L42
R88
L640
R40
L3
L97
L78
L82
L691
L6
R30
R88
L561
R582
L82
R71
R99
L70
R172
L72
L231
R31
R86
L155
L31
R992
R97
R65
R74
L28
R20
L58
R43
L45
L960
R52
R48
L47
R68
R79
R65
L26
R68
R62
R726
L769
R11
R74
R53
R43
R92
R88
R45
L49
R65
R85
L33
R78
R86
R15
R15
L94
R67
L9
L58
L10
L42
L14
R66
L15
R93
R65
R86
R88
L67
L51
L78
L95
L83
R35
L97
L30
L70
R92
L73
R89
R11
R10
L19
L80
L41
R30
R30
L73
R42
R1
L20
R54
L84
R6
R59
L13
L23
R7
L33
L18
R37
L16
R24
L12
L30
L10
L17
R12
R11
L15
R35
R42
R41
R49
R20
L14
L20
R38
R47
R2
L40
R40
L47
L46
L31
L43
L31
L7
R36
L25
R39
R2
L45
R36
R23
R1
L27
L29
R41
R8
R49
L12
L20
L25
R16`,M2=`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`,T2="3335355312-3335478020,62597156-62638027,94888325-95016472,4653-6357,54-79,1-19,314-423,472-650,217886-298699,58843645-58909745,2799-3721,150748-178674,9084373-9176707,1744-2691,17039821-17193560,2140045-2264792,743-1030,6666577818-6666739950,22946-32222,58933-81008,714665437-714803123,9972438-10023331,120068-142180,101-120,726684-913526,7575737649-7575766026,8200-11903,81-96,540949-687222,35704-54213,991404-1009392,335082-425865,196-268,3278941-3383621,915593-991111,32-47,431725-452205",N2=`987654321111111
811111111111119
234234234234278
818181911112111`,A2=`2412122322321222252222221622332222221521261431723112634211232223232132154222214222211332229222231222
2465412223443523142221321262346323634242443342334242423242224362522642253213243122355223222254312232
3332242442321436631424453283363222444423355334373183244397472932323244521266474444834444476564344644
5533778667855399367659688956396486549458366658763989334992855699859653338632354754294593558359588565
2312242244513323142433243432334374124436822261433652333532361223332463425141733353743352723352424632
2463435113322351242525433222132425212412346422235542222312243232434122321245333145452231342224322242
4443441333222313185442732425344232323324253244343445323435344534462353233334333334444335424643323234
6332332335221132323423233332343239223463352335332994333333344333323243131333233222323333433231333323
6634359643333356544344443752437442545553543632465647658356445545465226444336353434534142564523244343
4746528567872668847725657384831488796526768764584526826627566774738668664834425777326157774645473885
8663344345496562256365476172394634334535382365643738343441687684864343373352342253313346356655544465
4157443345555145726545656693264664647267476954254654545336564646364671685244534666336225457666646654
8553334231333333322333224115242343435135523343222332535523213448433134323333943412253333331323323432
2422311235132222322323231221331222622421242123412112232417212326143222315322213213432332221236242211
2223141246211442325142232222432312222443423243222172226232333133332435223434262473382333223233347324
3534134442344544434444443243415334345265483654449444324259424544442244544244421454434653444472344444
7373421553434563343933225363385833345333355359585885965524725234465535457693324342955324343393233393
3544834677588252554443464444444343544546445445234344524454423479454455376445342434433437342574374475
3752446345473255417533244523252246224655432532555383445364564335455522833343544674435336363141265146
1125322422532222222321242225232231222222222222645423222313215125241243221221232222421222312249242424
3142242232112322423242322222223121234122542422123222414422221342211222223224231242121322611312332222
4332332212434144333633223223337233533243313322333312143333332333222334324132334243342242231233323332
2371523323344334222444324312324364322333138422334322352216223323123243323224243543243333432122274333
2343211123222343412412252331222221342124423222243212232212412322211222111212212132511332321223244231
3823364312635275652724522472633133222256524323562175366512355343255245345421374325624456484623341775
3322333433343353413431433363335339422363353323133383343333333343313365335353253233323232333433334333
3339527224135443944333321344513544423513393414193384146333353446215364539234434423329453273243346347
4332212342324422453341644344634227454342441442242463136343642457424474733346264472434314244174742234
2554433545352533343426412233253473423343444224422443335361426534765552635624434383433484456343445146
6448276228355336615345685425559361768253328243232352122597253422283522266452242246262227125252412362
2242226443366243222323462434322222154522442643123534446225424354222343432244334452332142132213422432
2322223222221122231211212421332221214211212212362222214222222211233222122723112242232222524322322222
5664415433244363444484955843355463235443538354344322453423234243644746379443434333454444423443141353
3233512453242234233331235323143333521223342321227244231241312253632333122232633323221334432234313132
4454445546344525353346454425444456544475445455555464564644312243455545245434414455334436345545334334
2434763675653531436334563439763371353744725344333346531521641522352546632375331432622422545354342443
2422334332324432422432433333332133333324353334322322333313233333323233433533232233343335232323332342
1232244433643363553453524442344335823633634434233353344243432233437223233364334724135145334553321634
4212431241221442114212311111332244214244133124224343433311144233432244342213131342111244133213456789
5635625446235555554565443655465635235456653524344442546749575335446444555457555412345652525454543364
5232221422122322133321223332213133122426232122212292333242222222313231231122222422323333232223332222
3324343233332334323323323333333313322243333313233235312233513253332333223223333433332333334323333333
3531633337232414223623322222315335112322334161232224234333223112233842242232212223314113342644121312
4223282432252227224225523279113341534245511222224212233222555251234241542112224222524221222742273224
5435473321213336336323265238422534334434344352423332344132241233333261234231372343132222333211313372
3444631241833345732218631528123232224353231222222352122574338133243352924362313426387364525325133222
2132422222212212242222221223222122122321512212222224522212132322222231212212222222423431222222221223
2334747445424422535643554554139464243524444235235132144424633444445245242262427425314442322414221545
3242243323121532313332412323542532352335223433331212244212225123323532222322333225233422131321232325
3658553234434443687515451512556374258526737455654586576522428567585525624464435426445235425523361774
6433336453533324735225345625844334323816238333333333636333333533323234433341544346333332464755674342
3233213122253525332133332234213323332332232317322232232122122322712413223552335221352524132213323323
4133344423114233225143335323433233444333423346533571434343264324433453644344443133333745644642424455
2323222833242122232132323323231413132222232522333323232322322333353333323232322231235221222323333233
1322241221222223221322222224222412222222222123231334342122222123322112235222222242213122222231213222
2422213222122421222221222222112222223213223123322232421242233223232283322112125222222232125333222233
5423244121223322432213321235342232221434342225263122247224232222424112624261211222124232121235232133
3423242522433492372442242362464444432692442453422445453144442829232424344244222544124233324237423224
3233933636833342323233433223624333127533419333436333333363339332533322183753223543343363843343238347
3332333233333233342333334343336333334333333233332213333323322234333353533234333333323313363323323242
3244423455553233223575432234153454733825336335224434624776422363244272324559544335324524342345233416
5662666676426366465566656665665626634475526434656662466686666244626645835563776648367456547756457627
2342363373334233435434333335321225243325323461634252325233253353355332463534123527413333523552312332
1445435454435453614454442443424425344244453542436642545434954459652432555525344554544422555553143444
3233333868131225227282239632823923137642313263312373228313345633314333633223223132329333354831325493
8265422528228226226231552573263258165232224285338242212251233465486222288225866466727612922687221823
9347542266641865581542452356842542299716345422983436294747149219485823513367243934129462942212474338
2433333631454524535463522533554596638354625554815445744325692525256331234429536445466426323345572344
2163533253343553442332292423236522251132353242364323373252521322248923533235334172534522253322353245
4232342335243313233433243212332443263343212123441723432421433334134322324332334115213212133221144213
2352733366235533324364333635344533754655623344333454434344452234759265443547636223545346162522323863
1122222122321222122222212222212222222223223222222222122232222222123122122223112232223231223233322222
3135252235449582765864633622226342258226215454635254445486524249133423363164594224552531523823934544
6498466444526855276314546634623896564522434618769514571454549685664342436426666163464446481365653666
5444443343967347563433477444344344444474444264453743444416124524344433464434344645444144563444352444
6734676658463767774855577375847797938739868743757782675976568684868949639756868786865676582688248675
4725272254332557543446933353344551426334328793375372778773632717452236584943558422283393239122454831
2221331231322222133211232833222424213312231322312212623233412223332222652222224232221212291222221222
2421226321422216212325123222242245222324225242622322527224243422232323125526125522322422226222222822
2434534735332553334355352624683334385364923424525638235554468474272357583373542553455436359133543315
3444335343354345142423125514532233455546527245324454224225285456258133434533432354234324456322832372
6567556544456574528576656455455654776464564554566446673384675634474442656566356667445457364466767543
2222223521222454312222223223112413226122323353211212332323421343244332223234112222233422222222134231
4126242125232222262521233224225322213112233252394322222334123322242221231315224223332224492323242222
3836223274337343323673438683294123222233332221852392532643432425355343443443763733533362733255938793
8792594587989145469675356475744348779896565484989955886744897678476778536543855558489557467459457736
2233422222334123235333332631347345432532533622332233362325332133736224332333863133333432333334323333
3332534324765443433353443434344331233533345353433433316242353234254333543233525344545532354334354333
3132222123312222232224122222423233322332231122213222212542212332222222222323222271221242223215222222
3585816537558484466343788755833446445764863425454336517565787427744777563633843536338663225962897349
4735694436967587853659433279337334927744347979597636337866523836939593386669763943325535455294427588
4243233233326322232122543223463515223343332343531231326142222322422245333436251318743362265322324338
2234355523322563434435332254245565173424124433572332332541113442254232445342228333312244522223553523
2213424644654535434453144245244444344445348492434534454152837335459545223444444473234654922534841644
2635527563344324344355685224456354448374424369433654436454767122626234444572533633353657555853763342
1222253112224314161122122223432243422212222232122233211332221711224231333412112222222232124221242221
2243334244232333434593143413452323322346242325232322242333632424414243421243356254345121243394444463
5743826332126933343331233323223243133862134323433311273338223221222573355713133322423223333212328343
5446468334345293465256565756351346686845434133634253253464763242461455483615556666454541453644654265
2211232326222221233213212262221222222222162222222321112222333224229722222224232222212212223222322114
4435113112253312523562255334221433324543422514433222953485325352443242221222345423533757525123545543
3532443512634644331532367333424323423333214326333344431263323256212244342334221344252313423415424113
2244212155222322314243242212272122212331235221222221224222122337232243213222222221222122842123222272
2221222134224221421433424542111242231222332221243252513222124324212542434222144222323222222334123344
6985325365461367324434522695356524813135345544676584245344253167343825624478555355623425939424445671
2222215422222424225334424414224231222212213342422224122232312231213117372224353332323244223121113324
3522322352263221653633242335334424545332146526336321324543242328423124524333234465326313424246136244
2353433364344454648637442643346423454364448554327446646454614355664543344345434662724332454343435644
2222222124132122121122231221232213121222221221242232542222122222322124323222212112222213322122122232
2233574237235423221242521632635337137212323242522527232224475123256215243344124222224441323326415322
2323113322324213423322422222631232213223242221323132332352223311333222322323422311223424242323423223
9125925554745135572556676138776553583576442536644765125662528964256163663634687752525354545569525685
1311533313231223332433333333333333332223332324113334422322323313313323333333333245234233343433334333
3221222212132222221212213222321425252413211412121222221621222342222222281421222324233122221222522222
4585235629548623769578643318859741864893419537263427339737544675655218663735379313667214766689643726
8355263654545845664444623373646675684452658665334478558634674346538646556475676256546546675657642786
2352252343245244223333424413323232434233323224232442254225354522324324744222536536521334444221242545
5329427755134542235562256954225422121443122222325252212326432528861861563227125386725575227342344227
3213152234412332421757423252223124445842731112231224711522444521436144234133289322725256293172743543
2222233121222222225236422233433222222424522221422233432244532222234124221241242222232422333222216257
1112227312112121322223134222233121223222232232231212322222422222462112122212232221222222124221225221
3852322524252353442542443556623246236633666422555645626754371425345343342256553544265346633667433654
2333232225325122522424224422233142222322522232212421622227322222233123191322241222122422222254452422
2211322222244223231122222242222312321221221232222224222133212222221222221222113222225212321232314122
4311232262551222244955224345343235452252244434453423446543232444222234262452253623225535112344372231
3346272653733234356843321635353473334424322444174332333316247374344358343347451744345335338632133833
4222112213333112232311221232322322324321223223222222222222232224323223422222122224332242222223231342
5432222225233134122222112112222223323212222443323241242322343112322412221222232331234232151122111223
7233427242643433344244522232723873624332433222634444323132741333227543312327222326434434224313466432
2262242228242222221322421222612211222222222524222222425225222138232321225121242222112412332323222252
5431532232312131241336322222642522362313333542121322342342224342212323433325622422222233363122322232
2513331221322822629133222296321124323183534223313333124313351232133322822213233934123332423233112333
1122421144222121542145525244226315233212223312222222222212222223222232231242223223324242252332222421
6647755446833324252715851259471426578124334523577766232257377578595687848987635662264244615796588477
4437887666642257365581334348645357833241558462183563638353824875132241288554168576456373825567757139
2372252232332224621341232323223322365332341142212242222121223352222221253132313532124211134232222122
8213332383226313622223412232343862345532222731622322293133364343825222234228534474331233232529294223
3227421454433557233353165443445324444585474346623731137113548636652263313253223674233366472443333422
3476266242123462384177533134323324643334346825333637632323376363915265463374936522643344533367235243
2336244325224269764144242353335366426224423433242542423231332433343464233335442123223223444243232234
5454322422343322478334224432332323233235743334334362133437424233322531223237343431453454454533324644
4224221514332333433213332447233132143334233341122343323242522342223122223224242414222533244226145133
2122221321221221222112222222211214321112232221424346222222222261221312251242282122242222122122322222
3132212293353342236224262531325122222151225472432224121226252632212622252214614212251362224744725441
4333333333332333243332343243345233133333233333345244122333334233235433333323323343333222423234333343
3523231226236614233638233124323427822351284225455724562382324643433225521347123425336512343321444643
6177277121772432364147513753561353751555654522176635151623326575171337663165277411277421642534633289
4626222244324454215422524322342154447542764222532532524542524533222213427421272252232555413422222744
7667665866698596576779777663688684978687787636767667465687558757764976798685375776856756659886764677
4222322323123243932123344211181222532321212422132382231322413222332322222222312232328382526212222422
2332313623333213122143222232432221323421222132221233331142333243343232732222522213568212325563221213
4124533231354347247233221424335133233334537223322222522734623646566623312233321225133211262167534227
1122225222416214822216141735252412221312527125532225523234222245522232421125255222241433232244252522
6522222462322443321122221222222224422322222422222324432222622212122232212222221121222223222132122232
2525225316222324314433244223544225636323522142343363443221521243232543236323114144353432226546221425
8235525222626236653113393573227226387454333764754233632612322253332434523232537528712225239512235331
5353546523235453234342546464323543453445742525265521537544584576343243433364533425545955634544663242
2332343334521341332362253343315234313231228144283342231212333523413243453273654444423232243342343234
2324445612544453493136442424414442236433423124472444544443233212544445424453544846542431343444453442
2162121212522332222222322232224323222252223242642232222424323123212223322222122111121221123343222122
2153283231425434213266221232344554541644233364433263242363333334473329524343215964432422243143243364
2446334453432444143322423443442644445433244344353334464344333343324421634343343343443443431344333344
7423337743652472432757777747252556325345344542767235244455475352773454344757532273675556583627332572
5431313324212216222242213242222232612222222112222442331621222212112222123311322222222442222222222222
3443143554452353355114215434521111222335423432242425145344235241424353521314445335522512524312456789
2434333323322232328327322333223237333736332182332233273322222222233239292232323133533631232223134222
2212223322221332413123242233532335332233223523226123332122232235251335522335333214332236444284323423
3261372356455633455337265566364312464454252265253432273734384224255363237775744742327636747465344842
2233214125434122323331333222524363213211632533221243253135242423255341553532221222541542122445522313
5344524142432312222241225312253242212524222243334122222241243394314214523134122324234242255242231263
4352313322342233132333324223222232123223323343212332433332333321542131323222121423332422232222223222
2322213723222222322322222222122232212232132112222222232122282222222222212513222231321223242232222222
6776654563662465675564455455746443136264467677155556526353636566567666447667556755634264573677476457
2443221215332324382223221433554323432323131662327332326223442233234113216428233322323321254132233443
1646421422125242212512615392422262215222212234222221422422222311212232422222111222242213122622222241
3332322312233222822333321373363333332334234423234372333323233226233631332343234123232133233423332332
2224335234224323313332334242323423334234422321423433223322541335325433324226332551454223428443723213
2522123218154323313471523422725231262372434522715633212427253232212252132142542222562322412583333222
8541825432537896736143234422514453235543434373726344244452375533176633234432232433439324243636342264
7322225123223626432221322221422222227211262222123642222224513127123362162142422222223332211212112415
6526544645566765544663224151443265451222347364554445545661652234424224554526654366245515655226434423
6364556559333745456542443445455247333325535435473868563343554228574233354435343443245363588522868348
3232354322232332221122352223422334232323452311422222232226273333221322232323321333224314522191323243
4343321322343313326393133134236222244123244354123443334325334253246333233224272922323432324331333333
3583332433353263613352394337313333342525833373383331327239323323439233713333341345233333322233722535
2231222223233347642222231542711233254241323115432234323225334252232231111555213542263541366353313122
2332523216213212114243322225326311243432122222131322283172343832111822243221335222222545229312252222
2113332232321221322122122312212322312212222222231222222333212221222243422422222334222332222222221232
3633533335433535658445336475644563733535553373635233573333335674333453464355413633334335354464363763
3312312337247213221263445272452372324223242522227162213961232842323435232222236273531382344292232722
2222221123222411222342223222232322222122222211322222122222222222222223222222122222112222332222122322
1412234442424142332324432133354334333522143344236312334222541334424423331234242133213623232343342344
4329424422246434642322468233366144623347323344285322433231333466434534562417339322622363342535232334
4663616535611513435323516234335342134544631343565436264451636222565334356426413214515616524251313789
2323233334222233322313272223213223171322362222231211222212323223323222325121223252222232233224232422
6124336322212152152441223342432334222263242122222422134225433262225632243211122211512223233523242322
4235224232323232123333423222242122322212222423133224223322112222222222222433223222231333342122112224
8417424333342443624824422362314223134336413224433144262533233559248235249334362332333442333242522562
5443335343234432453532334333333443434242514335441344423544443453434444344255444341442234743244242342
2221235222332215222222222212722222334222723221322222522222122222423212222222122124353332123442222223`,C2=`..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`,I2=`@@@@@@@@.@.@@@@.@@@@@@@@..@..@@@@.@.@.@..@@.@@@@@.@@.@@@@@@@@.....@.@.@..@@@.@@@@@@@.@@......@.@@@@...@.@@.@.@...@@@.@....@.@@@@..@@@.@@
@..@.@@@@@@@.@@@.@@@@@@.@@@@@@.@...@....@.@.@.@....@@@...@..@..@@@..@@@@@@@@@@.@..@.@..@.@.@@@.@.@@@.@@.@@@...@@.@@@.@@@@.@@.@.@@@@.@@.@
@.@@.@.@..@@@..@.@@@@@.@.@@.@@.@.@@...@.@.@.@@@@.@@@.@@@@@@@@@@@@.@@..@@.@@@@@@@..@@.@.@@@.@@..@@@@@@@.@@@.@..@@@@@@.@@@@..@@.@.@@..@@.@
@@..@@@@@..@@@@@..@@@.@@.@@.@@@@@@@.@@.@@.@@..@.@@.@..@.@@...@@@@@@@@.@@@.@@@.@@@@@@.@@@.@..@..@..@.@@.@.@@@@.@@@.....@@..@@...@@@.@@.@@
@..@..@@..@@.@@.@@@@@.@@@.@.@@@@@@.@@@..@.@@@@@..@.@@..@@@.@@@@@@.@@.@@@@@@@.@@@@@..@@.@@@.@@@@@@@.@..@.@@@@@@@@....@@@.@@@@..@@@@@@.@@.
@@@@.@@@.@.@@.@@..@@@@@.@.@..@.@..@@@@@@.@@.@@@@@@.@@@...@.@.@@...@.@@.@.@.@.@.@@...@@@..@@@@...@.@.@@..@@@.@@@@.@@@@.@@@.@@@..@....@@@@
@@@..@.@@@@@@@@@@...@@@@@@@@@@.@@.@....@.@@.@.@@..@@.@@@@@@@....@@@.@@@@.@.@@@@@@@@@@..@@.@@.@@.@@@.@.@@..@@@.@@..@@@@.@@@@@.@@.@@..@@.@
@@@.@@@@@..@..@.@..@@.@@.@@@@@.@@@@...@@@...@@@@@.@@@@@@@@@@..@@@@@@@@@@@@@.@@@@@@@@@.@..@.@@@.@...@@@@.@.@.@.@@@@@.@..@.@.@@@@.@.@@.@@@
@.@....@@@@@@@.@.@.@.@.@@@@...@....@@@.@@@.@@@@.@@..@@@@@@@@@@.@@@@.@@.@@.@@.@@@.@@@@....@@@@@@.@@@@@.....@.@.@@.@.@@@.@.@@@@.@@.....@@@
@@@@@...@..@@.@.@@@@.@@@@@@.@...@.@.@@.@..@@.@.@.@@@@@..@@.@.@@@@..@@@..@.@@..@@@@@@..@@@...@@@@@.@@@.@@@.@.@@@@.@@@@.@@@@@@@@@@.@@@..@@
@@@.@@.@@.@@@@@@@@..@@@.@@@@@@@@@.@@.@@@@@.@@@@@@@.....@@@@.@@@..@.@@....@@@@.@@..@@.@@.@@@@..@@@.@@@.@@@@@@@..@@@@@@@....@.@.@@@@@@.@@@
@@@@@@@...@@@.@@@.....@@@..@...@...@.@@@@.@@@@@@@@.@@.@.@@@@@.@..@@@@@@@@@@....@@@@@@@..@.@..@@@..@@..@@..@.@.@@...@@@@@..@@@..@@.@@@@@.
@@@@@@@@@@@.@@@@..@@.@@@.@@..@@..@@.@.@@@@@@.@@@.@@@@@...@@.@@@@...@@@@..@..@@@.@@.@@@@.@..@.@.@@@.@@@@@@@.@.@@.@@@@.@@.@@.@@.@...@@@...
@.@.....@@.@@@@@@@.@@@@@@@..@@..@@@..@@.@..@..@@@@.@.@@@@.@..@@@@@@.@@@.@@@@@@.@.@@@@@.@@@@@@.@@.@@..@@@@@@@@.@@@.@@@@@.@.@.@@..@..@@.@.
@@....@@.@@@.@.@@.@@@@@..@@@@@.@@@@@.@@@..@@@.@..@@@@@@.@.@.@@@@@.@@@.@@@@@@@@.@.@@.@.@@@@.@@@..@@.@@@@....@@@@@.@@@@.@@@@@@@@@.@@.@@...
@@...@@@@@@@.@@@.@..@..@@@..@@@@@@@.@@@@.@.@.@@@@@@@@..@@@@.@.@.@@.@@@..@.@@@.@@@@@@.@.@@@@...@.@@@.@..@@@@@@.@@@@@@@..@@..@.@..@@.@@..@
@@@@@@@.@@.@.@@@....@.@.@.@@@@@@@@@@@@@.@...@@.@@.@@..@@..@..@@@@@@@.@@..@@@@@@@@.@@@@@@..@.@@.@@@@@.@@...@...@@@@@@@..@@@@@@@..@@@.@.@@
@@@.@@@@@@@...@@@.@@.@@@@@.@.@@@...@...@@@@.@@.@@@..@@@.@@@.@@@@.@@@@@@.@@...@@@@@@@@@.@.@@.@.@@@@@.@..@@..@@..@.@@...@@@.@@@@@.@@@@@@..
@@@...@@@@@@@..@.@.@@@@@@@.@@@@@@@@@..@@@@...@@@@.@..@...@..@@@..@@@.@.@@.@@..@..@@..@@.@..@@.@..@@.@...@@@@@@...@@@@...@......@@@@@@@.@
..@.@@.@@@@.@.@@@@..@@@.@@..@.@@@.@.@..@.@@.@.@.@.@@.@..@.@.@@@@@@.@@@.@@@.@@@@@@..@..@..@@.@@@..@.@.......@.@..@..@@@..@..@@@@@@@@@.@@.
@...@.@.@@@@@@@.@@@@.@@.@@@@@.@...@@@@@.@@.@@@.....@@@@.@@@@.@@@..@@.....@@.@@@@@@@@...@@@@@@...@@.@@@@@@@@@@@@@.@@.@@@.@@@@@@@.@@@..@@@
@...@@.@@.@@.@@@@.@@@.@@@@@.@@.@.@.@@.@@.@@.@@..@@@@@@@.@.@@@.@@@.@@.@@.......@.@@@@.@@@..@@..@@@@@@..@@@@@.@@@@....@..@@@@.@@@....@@..@
.@@@@@@.@@@@@.@..@@.@@.@@.@.@@@.@.@..@@@@@@.@@@@@@@.@@.@.@@@.@@.@.@.@@..@..@@@@@@@.@@@@@.@@@@@..@@@@.@..@@.@.@@.@...@..@.@.@@@.@.@.@@@@.
..@@@@@@@.@.@.@@@@.@@..@@@@@.@@.@.@@..@@...@.@.@@.@@..@.@..@@@.@..@....@@@@.@.@.@.@.@@@@@..@.@@@.@@@@...@@@@@@@@@@@@.@@@@.@@@@.@.@@@...@
..@..@...@@@.@.@@@.@@@@@@@@@@@.@@...@@@@@.@@@@@...@.@@@@..@@@@.@@@@@.@@@@.@....@@@@@.@.@@@@@.@@@@.@..@.@@.@@@..@@.@@.@.@@@@@.@@@@@..@...
..@@@...@..@@@@..@.@@.....@@@@@@@.@@..@@@..@@@@@..@@@@@@@@@.@@.@@...@.@@@.@@.@.@@@..@@.@@@..@@.@....@@@.@.@@@.@.@@...@..@@.@@..@.@@@.@@@
@@@..@@@@.@@@.@.@.@@.@@@@@..@@.@@@@@..@..@@@.@@@..@.@@.@@@..@@@..@@.@@.@...@.@@@@@.@@@@@@@.@@..@..@@@@..@.@@..@.@@.@.@@@@@@@@..@..@@@@@@
@@.@@@@@.@@@@@.@@@@@@@.@@..@@.@@@@@@@@@@.@.@..@@@.@@...@.@@@@..@@@@.@.@...@.@@@.@.@@.@@@@@@@.@.@@.@@@@@@@@.@@@...@@@.@@@@@@.@....@@..@@@
@@@...@@@.@.@...@@@@@@@@@@@@@.@@.@@@@@.@@@@@@@@@@@.@@@..@@@@.@..@.@.@.@@@@@@.@..@@..@.@..@.@.@@...@.@@@.@@@@@@.@@..@@@.@.@..@@.@.@@@..@@
.@.@@.@.@.@@.@@@@.@@@..@@..@..@@.@.@.@.@@..@.@@@@@.@@@@@@@@@@.@.@@.@@@@@@@.@@@.@@@@..@@@@@@@.@@@@@.@@@@.@@@.@@@@@.@@@..@@@@@@@@@@..@@@@.
.@..@.@@..@@@..@@@...@@@@@@@@.@.@@@.@.@@.@@@@.@.@@@.@@@@.@@.@@@@...@@@@...@@.@@.@@.@@@@@@@@@@@@@.@.@@.@@@@@@@..@@@@@@..@...@.@.@@@@@@@@@
..@@..@@..@@.@@@@@@@@@@.@@@@@@@@@.@.@@..@.@@@@@@@@@@...@@@@..@@@@@@.@@@@@.@.@@.@@.@..@@@@@@@@@.@@@@..@@@...@@@@@..@@@@.@@@@@@.@@@.@.@.@.
..@.@.@...@@@@@@.@.@....@..@@@.@@@@@@@.@.@.@@@@.@.@@@.@@@@@.@.@@@@.@..@@@@.@@@@@.@.@@@@.@@@@@@..@@.@.@@@@@@@@@@@.@.@.@@.@...@@@@@...@@@@
@.@@@@@..@.@@@.@@@..@.@@@@@@..@.@..@.@@..@.@.@@@@@@.@.@@@@.@.@.@@@@@@@.@.@@@@.@.@@.@@@@..@@@.@@@...@.@@@@@.@@@....@@@......@....@@@@@@@@
@.@...@@@.@@@@@@.@@@@..@..@@@@@@.@@@@.@@.@.@.@@.@@@@.@.@.@@.@@.@.@..@....@@@@....@.@.@@@@.@.@.@@@..@@.@...@.@.@@@.@@@.@@@@@.@@@.@@@@...@
.@@.@@.@@@..@@@@@..@@.@@@@@@@.@@@@@@@@@@@@.@.@@@@@.@@.@@..@@@.@@@@@@@.@@@.@.@..@@@@@..@.@.@@..@..@@@.@@@@@@..@...@.@@@.@@@@@@@@.@...@...
.@@.@..@@@@@@@@@@@.@@@@..@.@@.@@@@@@@@...@.@@@.@@.@@...@@@@@@@@@@.@@.@..@@@.@..@@.@....@..@@@@@@@..@.@@@@.@@.@@@.@@@..@@@@@@.@@@@@@@.@.@
@@@@.@.@.@@@@.@@@@@@...@@@.@.@.@@....@@....@..@@@@.@.@@.@..@.@@@@.@@@@@....@@@.@@.@.@@@.@@@@.@.@@@@@...@...@@..@@..@.@@@@@@@@...@@..@@..
.@@@@.@@@@.@@@.@.@@@@.@@..@.@.@@@@@@@@@@...@@...@@.@@.@@.@@@@.@@.@@.@@.@@@.@@..@..@.@.@..@..@.@@.@.@@@@@@@@..@@.@@@@@@@.@.@.@.@..@.@@..@
.@@..@@..@@@@@@@@.@@@@@@.@.@@..@.@.@.@...@@@@@@@@@..@@@.@@@@@@@@@@@.@@@@.@@@.@@@@.@@@..@..@.@@.@..@@@@@@.@@.@@@@@.@@.@@@@@.@.@.@.@@@.@.@
@.@@@@.@@.....@@.@@@@@@@.@@@@.....@.@@@@.@@@@@@.@@@@..@.@@@..@@.@@@@@@@@@@@@@@....@@@.@@@@.@@@@@@@@..@..@@@@.@.@@...@.@@@@.@@@.@@.@@@@..
@@..@@@@@@@@@@.@.@..@@.@.@@@@...@@@..@@..@..@.@.@@@@@@.....@@.@@.@@.@...@@.@@@@...@@@..@@@@@@@@@@@@..@@.@@.@@.@.@..@@@.@@@..@@@.@....@.@
.@@@@@@@@@@@@.@@@.@.@@@@.@@@@.@.@.@.@@@@@.@..@..@@..@@@@@@.@.@..@..@@@@@@@.@@@@@@..@@.@@@...@@@@@.@....@@@@@.@@@@.@.@..@.@.@@.@.@@@@.@.@
@..@@@@.@@@@@@..@.@@..@@@.@@@@@@.@.@@@.@@@@@.@.@.@.@@.@@@@.@@.@@@.@@@@@@@..@@.@@..@@...@.@@@@@.@@.@@@.@@...@@@@.@@.@@@.@..@@.@.@@@@@..@@
@@@@.@@...@@..@.@@@@@@@.@.@@@@@@...@.@@.@@@@@@@.@@@...@@@@.@@....@@.@@@@@@.@@.@.@@.@.@@@..@@@@@....@@@@@...@@@@@@@@@@.@...@.@@@@...@.@@@
@@.@@@@...@.@@@@.@@.@..@@@@@.@@@.@...@@..@..@@@@@.@@@@@@@.@.@@.@@@@@@.@@@@@@@@@@..@.@@@@...@.@@.@@@@@@@@.@.@@@@@@.@..@.@@@@@.@@.@@.@.@..
@.@@@@@@@@@.@@@..@.@..@@.@@@...@@.@@@.@.@..@@@@.....@.@@.@.@@@@..@..@@..@..@@..@@...@@..@@@@@@@.@@.@...@@@@...@@@@.@@@@@.@..@@.@@@@@@...
@@@.@..@.@..@..@.@.@..@@.@..@@@@@.@..@@@@.@@@.@@@.@...@.@@.@.@@@@....@@.@.@@.@@...@@@..@@....@@@@@...@@...@.@.@@.@.@..@@@@..@@..@@..@@.@
@@.@@.@@@@@.@@@@@@@@@@@@.@.@@@@..@@@@@@@@@...@@@@@.@.@.@@@@.@..@@@.@....@@.@@@..@@@@..@@@.@.@@@@.@...@@.@@@..@.@..@@@@.@@..@@.@.@@..@@@.
@@@.@@@.@@@@@.@@@@..@.@.@@@..@..@@@@@@@@@@@@@@@@@@.@@.@.....@@@@@@@.@@@.@@@.@@@@@@@@.@@@..@@@.@.@@.@@.@.@@..@@@@...@@@@@.@@@.@@@@@@@@.@@
@@@@@.@..@@@.@.@.@.@@@...@@@.@@@@@@@.@@@@@@@@.@.@.@@@.@@.@@@.@.@@.@@@@@.@@@@@..@..@.@@@..@.@.@@.@@.@.@..@@@.@@@@@@.@.@...@@@@@@.@@.@@.@@
@@@@.@@.@@@@@@@..@...@@@.@@@.@@.@@@@@@@@@@.@@@.@@@@..@@...@@.@.@@.@@@@@.@@@.@@@@.@@.@..@@@@@@.@@.@@@@@@@@@@..@@.@@@@@@.@..@@.@@@@@@@.@.@
.@@@@@@@@@@.@@.@@@..@..@.@@@@@@@@....@@....@@.@@@@.@@@@.@.@@@@@@@.....@@@@@@.@...@..@@@.@.....@@.@@@.@@.@@.@...@@@@@@@.@@@@.@@@@...@.@@.
..@..@@.@@@.@..@@..@@@.@..@.@@....@@@@.@@.@.@@....@.@.@.........@@...@@@..@@@@...@@..@.@@@@@...@@.@@@...@.@..@.@@@@@@@.@@@@...@@..@.@@..
.@@@@@..@.@@@@@@.@@@.@@@@@.@@@@.@@@@@@@...@@.@.@@..@@@@@@.@@@@@.@@@..@@@@@@.@@.@.@@@@@...@@@@@@@@@@@@.@.@@.@.@@@.@@.@@.@.@@@.@@@@.@.@@.@
@@@@@@@@@.@.@@@@@.@..@@@...@@.@@@@..@.@.@@@.@@@@..@@.@@@@@.@@@@@..@@..@@@.@@@@@@@.@..@..@@.@@.@..@@@...@.@@.@@..@@@.@@@@.@.@...@@.@@..@.
@@...@@@@@..@@@.@@.@@@@.@@..@@..@@@@.@@@..@..@@@@@@.@@@.@@@@@@@@@...@.@.@@..@@@@.@@@..@...@...@@.@@@.@.@.@@.@.@@@@.@@@@..@@@@@@..@@@@@@@
..@.@...@@@@@@.@@.@@.@@@.@@..@@@.@@@...@.@@...@@@@.@@.@@@@@..@.@.@@@@..@@@@@@.@@..@.@...@.@.@@@.@@.@@.@@....@@.@@.@@@.@@@@.@@@@.@@@@@..@
@.....@@@@@..@@.@@@@@@@.@@@@@@..@@.@.@@.@@@@@@...@@..@..@@@.@.@@@.@@@@@@@..@@@..@.@@@@..@@@@@.@.@@...@@...@.@.@@.@@@.@@@.....@...@@@@@@@
@@..@@@@.@.@@@@@..@@@@@@@.@...@@@@@@.@@@...@@@@..@.@@@@.@..@@@.@@.@@@@.@.@@..@@..@..@@.@@@@@@@..@.@@...@....@@@.@@.@@@.@.@@@...@@@....@@
@.@@.@@.@..@@.@@.@@@.@@@@.@@@.@@.@@....@@@@.@@@@.@@.@.@.@@@.@.@@@@@@@@.@.@@.@@@.@.@@@@@@@.@@.@.@.@.@.@@@@.@@@@@.@@@.@..@.@@....@@..@@.@@
.@@@@.@@@.@@@@.@@...@@.@@@@.@@@.@@@@@.@..@.@.@@.@....@@@@@@.@@.@@@..@@.@.@@.@@.@.@@@@..@@@.@..@@@@@@.@@@@@@@@.@...@.@.@@.@@.@@....@@@@.@
@..@@@.@.@@@@@.@@...@@@@.@@@.@@.@@@@@.@@@@.@.@.@.@@.@.@.@@@@.@@.@@@@@@...@@@@.@@....@@@@...@@@...@...@@.@@...@.@@.@@@@..@@@@@@.@.@@..@.@
@.@.@..@..@....@@@@@@.@@@.@.@@@.@@@@@@@@@@@@@.@@@@@.@@...@.@@...@@@@@..@.@@.@@.@@@..@@@@.@@@.@@...@@@.@@.@@@.@@@.@@@@.@@@@@@@@@@@@@.@@@@
@@.@@.@@@@....@@@..@@.@@@@@@@.@@.@.@@@@@@@@@@@.@..@@.@@@.@.@@@@.@@@..@.@@..@@.@@.@@@@@@..@@@.@@.@@..@@@@.....@.....@.@.@.@.@@.@@.@@@@@@@
@@@@..@@..@@@@.@@@@.@.@@@@.@.@@.@.@@@.@.@@@.@@.@.@@@@.@@@@@..@..@..@.@.@@@.@.@@...@@.@@@@@@@@@@@@@@@.@@@@@@.@@.@@@@@@@@..@@@@@..@@.@@@@@
@@@@.@....@@@@..@@@@@@..@@@@@@@@@@@@@.@.@@@@@...@@...@@...@.@....@.@@.@.@@@@.@@.@@@@@..@.@@@@@@@..@@.@.@...@@@@.@@..@@@@@.@@@@@.@.@@.@.@
@..@@@@@@..@@@@@..@@.@@@..@.@@@....@@@@@@.@..@@..@.@@@@@.@.@@@...@.@@@..@..@@..@@@@.@@@@@....@.@@.@..@...@@@@@@@@@@@@.@@@.@......@@@..@.
@@..@@@@@@@.@.@@..@@..@@...@@..@@@..@.@@@@@.@.....@@@@@@@@@@...@@.@@@@..@@.@@@@@@@@.@.@.@@@.@@@@@@@.@@@@@.@.@@@@@@.@@.@@@@.....@...@@...
@.@.....@@@@@.@@@..@.@..@.@@@@@@@@@@@@.@.@.@.@..@@@.@.@.@@@@@..@@@.@...@@@....@@.@@@@@@@@@@@@.@@.@@@@..@@.@...@@@@@.@@.@...@@@..@@@@@@.@
..@@.@@@.@..@.@..@@@@.@@.@@@@@@..@.@@@@...@@.@@@.@..@@@.@.@@@@@@@@.@@.@@@@...@.@..@@@@@.@@@@@@@@@...@..@@@.@@...@@@@@@.@@@@@@..@.@.@.@..
@.@@@@@.@.@@@@@.@..@..@@@@...@@.@...@.@@@...@.@@@@@@@@@@@@@@.@@@@.@@.@..@....@@@.@@@@.@@@.@@..@...@.@@@@@.@@@@....@@@@..@@@.@..@.@.@.@@@
..@@@@.@..@@@@@.@@.@@@.@@@@@@.@@..@@@..@.@@@@@.@.@@@@.@..@@.@.@@@@.@@@@.@.@@@.@..@.....@.@@@.@@..@@.@..@@.@@@@@@..@.@..@@.@..@@@@@@.@..@
@@..@@..@.@.@@@@.@@@@.@@@@@@@@@...@@@..@@@.@@@@.@.@@@@@...@@.@..@.@@@@@@@.@@@@@@@@..@.@.@@@@@.@..@@.@@@@@@@..@@@@@.@@@.@@.@@.@.@....@@..
@.@@@..@@@@@.@@@@@@@.@@....@@@..@.@@.@.@@...@.@...@@.@@@@@@@@@@@@@.@@.@@@.@.@@...@@.@@@.@.@@@.@.@.@.@....@@@@.@@@@.@@@@@@@.@.@.@@@@@.@@@
@..@@..@.@.@@@@@@@..@.@@.@@@@@.@.@.....@@@..@.@@..@@@..@@.@..@.@@@.@.@@@@..@......@.@@..@@@.@@..@@.@@@@..@@@@@.@@@.@@..@@@@@@@@.@@@@@@@@
.@@..@...@@@@@@@.@@@@@@@..@...@@@..@@@.@@@@..@@@@@@@..@@.@.@@.@@@.@@@@......@......@.@@@@.@@@@@@...@.@@@...@.@.@@@@@@.@.@@@@@..@@@@.@@@@
..@@.@..@@@.@.@.@@.@.@@@@@...@@@..@.@@.@@.@@@@@@@@@.@@@.@..@...@.@.@@@@@.....@@@@@@@@..@@@@.@@@.@@@@@....@.@@.@.@@@@@@@@..@@@@...@@...@.
@@.@.@.@@.@@.@@..@@@@@@.....@..@@@.@@.@@@@@@.@@@@.@@@@@@@@.@@@..@.@@@.@..@...@..@@@@@.@@@@.@..@@.@@....@..@.@@@@@@.@..@@@@@@..@.@@@...@.
@@.@@@@@@..@@.....@@.@@@@@@@@@..@@.@@.@@@@@@...@@@@@.@.@@@@..@@@@.@@@.@.@.@@@@.@.@@@@@@.@@@@@@@@.@@@@@@@@@...@@.@@@..@.@@@.@.@..@@..@...
@@@.@...@.@@@@@@@.@@.@@@@@@@@@.@@.@@@@@@@.@.....@@@..@.@@.@.@@....@@@.@@@@..@@@...@...@@@@@@....@@@@.@@..@.@@@@@.@..@.@@@@@@@.@....@..@.
..@@@@@..@@.@.@..@@@.@@.@@@@@@.@@@.@.@@@@@@@@@@.@@.@@@@@..@@@@.@@.@.@@@@.@@.@@@@@@@.@@.@@.@@.@@@.@@@@.@@@.@@@@@..@.@.@..@@..@@@@@...@.@@
@@@@@@.@@@.@..@.@@@@@.@@...@..@.@@@@@..@@@..@@@.@.@@@..@@.@@@.@@..@@.@@.@@@@@.@@@@.@@.@.@@@........@@..@@.@@@.@@@..@@@@@@@.@@@@@@.@.@@.@
...@@@@@@@.@.@@...@@@.@..@@.@..@@@@@@@@@@@.@.@.@@@@@@@@@@@.@@..@@.@@@@@@@@....@@.@..@.@@..@.@.@@@.@.@.@.@@.@@@...@...@@@@@@@@@@@@.@@.@@@
@.@@@@..@@@@@@.@.@@..@@@@.@@@@@@@.@..@.@.@@.@@@.@@.@.....@@.@@@@@@@@.@@@@@@@@.@@.@@.@@@..@..@@@@.@@@..@@@@..@@..@@...@.@@@@@@@@.@...@.@@
.@@@@@@@@...@.@@.@@@@@@@@.@@.@.@@.@.@@@@@@@@..@@@.@@@@@.@@@@.@.@..@...@.@@.@@@@@@@@@.@.@@@@.@.@@..@@@@.@.@@@.@.@@..@@..@@@@@.@@@@..@...@
.@@@.@...@..@..@@.@@..@..@@@@.@.@@@@@@@@@@.@.@@.@..@.@@@@@@@@@..@@@@@..@@@@...@.@.@@@@.@.@.....@@..@@@@@@@.@@@@@.@.@@@.@@@@@@@@@@.@@@@@@
@@.@..@@@@.@.@@@@@@.@.@..@@@.@@@@@.@@.@@.@@@@@...@..@.@@.@@..@...@@@.@@.@.@@@.@.@@@@@@@@@@@@@..@....@@..@.@@..@@.@.@.@.@@..@.@@@@@@@@@@@
.@@.@@@@@.@.@@@.@@..@@@.@@@@@@.@@.@@@@@@@@.@@@@.@@...@.@.@@@@@....@@.....@.@.@.@@@@@.@@@@.@@@@@@@.@...@.@@.@.@.@.@@.@.@@@.@@...@@....@@@
@..@@@..@@@@..@@@@@@.@@@..@@@@@@@@@@@..@@@@@@.@@@@..@@..@@@@@..@@@.@.@@@@..@.@@..@@.@@@@@@@@..@@@@@@@@@@@.@@..@.@@.@@@@.@.@@@.@....@@@.@
.@@.@@...@.@@....@@.@.@@@@@.@@@@...@..@@@@@@@@@.@@@@@.@@.@@..@.@@...@.@@@@@.@@@@@...@....@@@@..@@@@@@@@@.@.@.@@@@@@..@...@..@@@@.@..@@@@
@@@@@@@@..@@@@.@.@@..@@@@..@.@@...@@.@@@...@@@.@@.@...@..@@@@@.@@@..@.@@@@@@@@..@..@..@..@@.@@@.@@.@@....@@@@@@.@@@.@@@@@.@....@@@@@@@@@
@.@@.@@@@@.@@@....@@@..@@..@.@@..@@@@@.@....@@@@@.@.@@.@@..@..@@..@@@@.@@@.@@@@@@@@@@.@@@@@.@.@.@@@.@.@@@.@@@@@..@@@@..@@...@..@@@@@@@@@
@@@@@.@.@@@@@@...@@....@@@.@@...@@.@@@@@@@.@.@@.@@..@@@..@.@..@@@@.@@.@.@..@@@..@.@.@.@.@@@@.@@@...@@.@@@@@@@@@@..@@..@.@@@@@@@.@...@.@.
.@.@..@@@@@@..@@@..@@..@@@@@..@@@.@@@@@.@..@.@.@@@.@...@@@@@..@...@@.@.@.@.@@@@@@@@@.@.@@@@.@...@@.@@@.@.@@@..@.@@@@.@.@@@.@...@...@..@@
.@@..@@@@@.@@@@@@@@@..@@@@@@.@@..@@@@@@@@@@@..@.@....@@.@@@.....@@.@@@@@@@@.@@@.@@@.@@@@@@@@@@@@@@@@...@@@@.@..@@...@.@@@@...@@.@.....@.
..@.@@@.@@@@@..@@@@@@@@...@@@.@.@@@.@@@@@.@@@.@.@@.@@@....@@...@@@.@@@@..@.@@@@.@@@@@@@@@@@..@@@.@@@@.@.@..@@@.@@@@.@.@..@@@@..@@@.@...@
@@.@.@@@@.@.@@.@@@@.@.@@.@.@@@@@..@@@@...@.@@@@@@@...@.@@.@@@@.@@@.@..@@.@..@@@@@.@.@@.@@@..@.@@@@..@.@@@@@@..@@@.@.@@.@@@.@@.@@@@.@.@@@
.@@.@.@@@@.@@..@@.@@.....@@@@@@@@@@..@@..@@@@...@@.@@..@.@@.@@@@@@..@@.@@@.@@@@@@...@@.@@@@@@..@@@@@.@@@@@..@@@@@.@..@@.@@@@@@@..@@@.@@@
@@@@@.@@.@@@.@.@@...@....@...@@@@..@@@@.@@@@...@@..@@@@@...@@@@@...@.....@@..@@@..@@@@@@.@.@@@@.@@@@.@.@@.@@.@@@.@.@@.@...@@..@@@@.@@.@@
..@@.@.@@@@@@.@@@@@.@@..@@.@@@...@.@@.@.@.@@.@@.@.@.@@@.@.@@@@@@@@@@.@.@.@.@@@@@....@@.@@@@@@@@@@@.@@@.@@@@@@.@@....@.@..@@...@..@@...@@
@@@.@@.@@...@@..@@..@@@.@@.@.@.@@...@.@.@..@..@..@@.@@@..@@@@@.@.@.@@..@@@@....@@.@@@@.@@.@@..@@..@@@..@@...@@@@....@@@.@@@@@...@@.@@.@@
.@.@.@@@.@@@@@@@@@.@@@@@@@@@@@...@@@@@@@@..@@@.@.@@.@@@@...@@@.@@.@.@@.@@@@@@@@@.@.@@..@@..@@@@@@..@@.@@@@@@.@@@@.@@@@@@@@@.@@@.@..@.@@@
@@...@@.@.@@...@.@.@@@@@@.@..@@@@..@...@@..@@@@..@@@@...@@@@..@.@@.@@.....@@@@@@.@@@@@@@@@@..@.@.@@@@@@@@...@.@.@@@@@@@.@@.@@@..@.@@@.@.
@@..@@@@.@@@@@.@.@.@@@@@@@@@..@@@@@@@@@@.@@@@@.@@@.@@@.@@.@@@@@@@.@@@..@@@.@.@@@.@.@.@@@@@@@..@@.@@@.@@.@@@.@@@@.@@@@.@@@@@@@@.@@@@.@.@@
@..@.@..@@@@@..@@..@.@@@.@@@.@.....@..@@..@.@..@@@@.@...@...@@@@..@@.@.@..@@@...@....@@.@@@..@..@@.@.@@@@@.@.@@@@@@@@@...@@@.@@.@.@..@@@
@@.@@@.@@@@@..@.@@@.@@@...@.@@@@.@@@@@.@@.@@.@@..@@@..@.@@@@.@@@@@@@@@@@.@@@.....@@@@@@......@@.@...@@@.@@@@.@.@@@@@@@@@.@...@..@@.@@.@@
.@..@.@@@.@@@@@@.@@@@.@@.@.@.@@@.@@@@@..@.@@@.@@@@@@@@@@.@.@@@@..@.....@.@@@.@...@@@@@@@@.@..@@.@..@.@@@...@@@@@..@@@.@.@@@.@@@.@...@@@.
.@.@..@@..@@....@.@@.@..@@.@.@....@@@...@.@@..@.@@.@@@...@@@.@.@@@.@@.@.@@@.@@@@...@@.@@@@@@..@@.@@.@@@@.@@@@@@@.@@@@@@.@@@@..@@@..@@@@@
@@@.@@.@@@@@@@@@@..@@@.@@@@@@..@@@.@@@@@.@@@@@@.@.@.@.@@@@.@@..@@..@@@.@.@@.@..@...@@@..@@.@@@@.@.@.@@@@.@@.@@@.@...@@.....@@.@.@@@@..@@
.@@...@@.@.@@@@.@@@@@@@@@@@...@@@@@.@@@.@@@@@@@@.@.@@@@@@@@@@@@@.@@...@@..@@@@@@.@@.@@@@@.@.@.@@@@@@@@...@..@@@@@@.@@@@@@..@.@..@@@.@.@@
.@@..@.@@.@.@.@.@@.@@@.@@@@.@@@.@.@@@@@..@...@@@.@@@@@..@@@@..@.@@@@.@.@@@@.@@@@@@@@@..@.@@.@@.@.@@@@@@@@@@@@@@@@..@@..@@@.@..@@@@.@@@@.
.@@@@@@.@@@.@@@@@....@@@.@@@@@.@@@@.@..@@@@.@@@.@@....@@@@@@..@@@@..@.@@@@@@.@@@@@@@@@...@@...@@@..@@@@@@@@@.@.@@@@.@..@@@.@@@@@@@..@...
@@.@@.@@@@@@@@@@....@@@@@@.@..@..@.@.@@.@@.@...@.@@@@.@@.@.@@@.@@..@.@@@@@@..@...@@@.@@.@@@.@.......@@@@..@@@..@@.@@@@..@@@..@@@@.....@.
.@.@@@@..@.@@@.@@..@..@@@.@.@@@@@@@@@@@@@.@@@@@@@@@...@.@@@@..@@@@@@......@@@@@.@@@@@.@@@..@.@.....@@.@@.@@@@@@.@.@@@.@@@.@@@.@.@.@...@@
.@@.@.@..@@@@@.@@@@@..@@@@@@@@@@@.....@.@@@@@..@@@.@@.@@..@..@@@@@@.....@@..@@@@@@..@@@.@.@...@@@..@@@@.@@@@@@.@.@..@@..@@..@.@@...@.@@.
@.@@@@@@....@...@@@.@@.@@@@..@@@@@@@@@.@@@..@@.@@@@@@@..@.@@@...@.@@@.@@@...@@@@@@@@@..@@@@@@@.@@@.@.@@..@.@@..@@@....@@@@....@@@@@.....
@@@@..@@.@.@@@@..@@@@@...@@@@.@@..@.@@@@@@..@@.@.@.@@@@@@.@.@..@@.@@.@@@@.@@..@......@@@@@.@@@@.@@@.@.@.@@@@@@@@@@@@@@@@.@@@@@@@@@.@@@@@
...@..@@@@@@@..@@.@@@@..@.@@.@@@@@@.@@@@@....@@..@@.@@@.@.@@.@@@.@@@@.@@@.@.....@@@@@@@@@@@@@@..@.@@@@.@@@@.@@..@.@@@@.@@@@@.@.@.@@@@@@@
@@@@.@@@@.@.@@@@@@@@@...@..@@@.@.@@@@.@@@.@..@@.@@@@..@@@@.@@@@@@@@.@.@@.@@@@.@@@.@@@@@..@@@.@.@.@..@.@.@.@@@@.@@@@@@@@..@@@@@..@..@.@@@
.@.@@@.@@..@@@@@..@@.@@@.@@.@@.@@@@@.@..@@@@@.@@@@@.@.@.@@@@@.@@..@@@@.@.@..@@..@@@.@@.@..@..@@.@..@@@@.@.@.@.@@@@@@@@@.@@@@@.@@@@..@.@@
@@@..@.@@.@@@.@.@@@...@.@@@.@@@..@@..@@@..@.@@@...@..@@@.@@.@...@@@.@@.@@@.@@.@@@.@@@@.@@@@@@@@.@...@.@.@.@@@.@@@.@@@@@@@..@@@.@@@@@.@@.
@@..@@@@@.@@@@@.@@@@@.@@@@..@@@@@.@@@.@@.@@@@@...@..@.@@@@@@@.@@.@@.@.@@@@..@@@@.@@.@@@.@.@...@@@..@.@.@@@.@@@.@@.@..@@@@@..@@@@.@.@@@@.
@@@..@.@@@@..@@.@@@.@.@@..@@@@@.@@@.@@@.@..@@@@@@@@.@@@@@@@.@@.@@@@.@@@.@@@@..@@@..@@@..@@@@...@@.@.@@@@@.@@.@@.@@@@@....@.@@.@@@.@@@.@@
@@.@@@..@@@@@@.....@@@@.@....@@@@.@@.@@@@@@.@@@.@@.@@@.@@@.@@@@@@@@.@..@@@@@.@.@@@@@..@@@@@@@@@....@@.@@@@.@@@@@@@...@.@..@@@@@@.@@@@@..
@@.@.@@.@@@@@@@.@@@@@@@@@@.@..@....@@@@..@.@@@@...@@.@.@@.@@.@@@@..@@@@.@..@@..@@@@@..@@@@.@.@.@..@@.@@@@.@...@@@@@@..@@.@.@@@..@@@@.@@@
@@@@@.@@.@@@.@@.@.@@.@@@.@@.@@@.@@...@@.@@@@@..@@.@@@@.@..@@@.@@.@@@@@@@@@.@.@@@@.@@.@@@@.@@@@@@..@@.@.@..@@@@@@@.@@@..@.@@@@@..@....@..
.@@@@@@..@@.@.@@.@@@@..@.@.@@@@@@@.@@.@..@@@@@@@.@@@@@....@.@..@.@@@@@.@@@.@.@..@@@..@@@..@@@@@@@@.@@@.@.@@@@..@.@...@@@@@@@.@@@.@@...@@
@@@@..@.@..@@@@@@.@@..@@..@.@@@.@@@@@@@@@@.@@@@@@@@@@.@.@@@@@.@@@...@@.@@@@.@@.@@.@.@.@.@.@@@...@@@@@@.@.@@.@.@.@@.@@@.@@@@.@.@@....@.@.
@.@@@@@.@@@@.@@..@@@.@@@.@@@@@@..@.@@.@@@@@@@@.@@@@@@..@@@@@@...@@..@.@@@.@@..@@@@@.@@@.@.@.@.@.@@@.@.@.@..@@..@@@..@@...@.@@@@@@@.@@@@@
@.@@.@..@@@@@.@.@@.@@.@@.@....@@@@..@@..@.@@.@..@@...@@@@@@.@@.@@@..@@@@@..@@..@@@.@@@....@@@@@@..@.@@@@.@@@....@@...@@@@...@@@@@@@..@.@
@@@...@@@@@.@....@@@@@@@..@@@@..@@@@@.@@.@..@@@@@@@.@.@.@@.@.@@.@.@..@@@@@@@@@@@.@..@..@@@@@@@@@@@..@..@@.@@.@@@@.@@@@@@..@@@@.@@@..@@@@
@@@.@@@@@@@@@@.@@.@@..@...@.@..@.@...@@.@..@@@@@..@.@@.@@@@@@@@...@@@@.@.@.@@@..@@.@...@@.@@@@.@@@@@@@@@..@..@.@.@.@.@@.@..@@...@.@.@...
.@@@@@@@..@.@..@@@.@@@@@..@@.@@.@@@.@@@@@@@.@@@@@@@@..@@@@.@@.@@.@.@@..@@@@.@@@@.@@@@@..@@@@@@@...@@@@.@@.@@@@.@@@..@@@@@@..@@@@..@..@@@
.@..@@@@@@.@....@@.@@@@@..@@@@..@@.@.@@@@...@@@@@@.@@@.@.@..@@@@.@@@@@...@@@@@@.@..@.@@.@.@@.@...@..@@@@@.@@@@@@.@@..@..@@@@@@@@@..@.@.@
@@@@@@@@@@@@.....@..@@@@@.@..@@.@.@.@.@@@.@.@@..@..@@.@@@@..@.@@@@@..@@@@@@..@.@@.@@.@@@@@@@@.@....@.@@@@@.@...@.@@@.@.@.@.@@@@@..@@@@@@`,P2=`3-5
10-14
16-20
12-18

1
5
8
11
17
32`,B2=`101012613040912-105113606231378
112873707283-2588072976190
143005819408722-145401547845947
384013134608808-390143577258709
51916414292070-51916414292070
293643445039097-300251037943656
244969360673134-245740157354383
247706331036724-248445866371758
522977891214923-524434819197204
242839529159664-243371231641831
204106082295383-206498935171254
479444043078390-479684172807966
81283750912059-89949992362428
92340278236275-98052923471049
404372716225650-406067924131981
176127392682690-178510357316731
252255429293010-255186908365219
15377872654647-15644435733276
526769409995219-527958537666453
128724674777679-128724674777679
135942661671261-138826794052738
214479480492058-220017483730661
231841401282011-239645488436474
326594765809482-327436267464330
489473141511901-489473141511901
1752048538382-3919577713656
410458602095666-412063170731063
113000677818465-115525954016206
480384437380924-481198606285875
327788252572518-328273064364690
192326821191117-199827355310318
363321531321063-370716436154113
131907151087339-135942661671260
544801412500266-544801412500266
544801412500266-552189629171754
325325747744144-326127049183255
241681816381073-242209696500269
243216041571048-243371231641831
181676143413441-189391540551098
434324052980656-438104292748636
375693739857609-375693739857609
207086557544226-209398521668196
553688776691385-561636050660162
513352841946732-519326999278376
15377872654647-15644435733276
493178119244148-496917339512734
62533303204105-67825553222762
424177362954936-430017394114844
480723598130141-480842610925116
242604971118812-242839529159664
326127049183255-326594765809482
553688776691385-561636050660162
473353945130508-473840321992177
145401547845948-147919354604983
356463066637154-359027334485929
171817542783488-178510357316731
33747881664671-39177332066824
474844528095631-475313510220334
243609259739363-244329586655721
524925392214961-526033666294218
446361586500378-450416147859760
530285370019595-531610688974413
10913492240530-11141173849760
6336208430862-8427784271949
10700163876290-10913492240530
496917339512736-501990926477060
275788255335869-280442644807279
479906576714841-480139742015776
243609259739363-243857642907182
282018373816974-290935019550276
14789680081867-15377872654647
242839529159664-243609259739363
242456502301919-242604971118812
11719715825754-11891948224878
19238235820357-19436864629631
42262220332700-49774914733748
249666852741241-250477543918374
472619837183282-473202226508093
527376617192257-528786585780429
330807634683642-331302629896521
523993692065864-525252620436861
334820819940854-334820819940854
328273064364690-328836803805980
247706331036724-248247173644637
325325747744144-325877713874747
330121706803818-330391836429096
478785319091156-479172259171934
328188028014249-328648944286494
201681752200444-203688734939131
538242012046524-541578569027953
409445547841638-410887041783375
485062599643151-489473141511900
314689366686850-318409435305114
4916521308175-6760678504079
504498824182245-511277797371593
323802322618167-324255140817928
89949992362429-89949992362429
403312336713981-404848116786337
101012613040912-110109748831416
10529281755859-10700163876290
528583454413730-529768360581553
481198606285875-481739141991847
395741420645981-400368761478414
327646151858731-328188028014249
334820819940855-339146512275577
31057494209505-35770946755026
531169211596879-532553773929606
18974910015890-19238235820357
242604971118812-242839529159664
202671783100120-204921650293794
189391540551098-189391540551098
164333237787352-169261708012208
205604652695071-208059523667885
11141173849760-11719715825754
534783469330199-538242012046523
151973005926579-156512797333693
222610347197017-226761529035272
18974910015890-19436864629631
7793841050984-9874556852261
247236949150615-247825829803630
353125715903228-356463066637153
402250640280403-403999259111523
64770028258698-67825553222762
326803007363219-327646151858731
17265650397759-17650802616418
343473027916816-350262769743361
264595086882696-268900975410491
264595086882696-268900975410491
252255429293010-259064149874903
465604211486206-465604211486206
330121706803818-330635178092489
246370522906344-247012266312972
327163211974355-327436267464330
242209696500269-242456502301919
244969360673134-245168014960248
208323970920417-210920021810153
212520780616681-216921370329434
407451845737404-409018633233603
17265650397759-17650802616418
390143577258709-390143577258709
323534659851048-323802322618167
472619837183282-473202226508093
455316354837082-460495879445666
476786713392008-477355327881092
375693739857609-377886335848362
249666852741241-250278025046055
17650802616418-18282199072199
15377872654647-16270031310196
22491266733591-22491266733591
195205358224320-196591500761696
327788252572518-328188028014249
10700163876290-10913492240530
504498824182245-507316038365589
13873322097363-14285954255194
392723744538717-395741420645979
323344303672829-323534659851048
122387896271845-128724674777679
92340278236275-98052923471049
16691967595915-17513426602670
3279007340166-5487289120805
456321866577563-460495879445666
406297516758018-407859239031659
465604211486207-468062434617162
43685928205799-45713896507228
323051956508723-323534659851048
302723808391950-307702898681281
71543464222777-78090762827058
424996483950154-428646358296115
363321531321063-367392394301803
304782618385696-311265807541651
293643445039097-300251037943656
472807978455963-473202226508093
164333237787352-164333237787352
17265650397759-18027368403513
516570344941891-521907911083669
245433062704698-246140019751069
51916414292070-59240999927250
115525954016208-119300139269163
405434536294523-406681662671274
413266123757676-419275913131686
479172259171934-479906576714841
290935019550277-290935019550277
231841401282010-231841401282010
226761529035273-226761529035273
11141173849760-11482054476269
417161310610323-419275913131686
473840321992177-474291566530776
322744224589760-323534659851048
450416147859760-450416147859760
525527345356281-526991096096103
480139742015776-480384437380924
475313510220334-475929089336059
529192218020855-530569506601086
22491266733592-27309934454174
329530178458593-330121706803818
156512797333695-158826055474391
345033347528058-347325314236846
245740157354383-246370522906344
472807978455963-473202226508093
408527231909583-409761733255722

527366069480345
143231950151921
517604275927359
245956757835048
158474640417026
15954177572050
74690535981785
250677210337961
52321261281571
558778239995049
271091380506778
320687464334927
146556423579240
551822713342242
56606195339024
549686148265261
353340345377095
489267427252725
184687462510525
206712746836120
437076918015393
275720150311157
18891075820546
178425434389194
460839717277315
474096119397589
334986396193912
111825022428943
482818221944010
107943854805583
253419406491229
407524979172692
479357245577733
503345658836317
418429766519840
511509706825479
115326915793982
361292336110438
85525635550570
94458060515489
249596805433404
445246386268646
347534257864270
208585919650437
1491916944279
391384602147368
279736405351476
474862688720952
349412429724798
277725749314716
211847054696980
140761402376815
546844662688514
91355398194493
538620043038410
131915979410784
273429571242662
503367093908984
182067025227716
128755265634612
403368894566743
470343241345346
468926964380318
29725012679586
460772119444659
226398929114058
477917976188681
296067047613795
13346575974555
3835586203295
240342260957577
201064907827115
499215697036865
370035382613279
203949647939567
462198131486813
360639730938455
536644261369677
166248082053295
37976089974984
531033385595896
86080201030802
423147492437786
148045766690128
207343852802314
319033720248503
48870342677520
450288393470973
417741279413854
323637822491614
451697547257731
84019531663461
421238596515676
36767707417285
161874280847457
340602084015545
443581081357724
177545725606059
109869484697822
134998990463735
229358351180121
475265482997047
282372999563989
19114446456791
119877291253192
75972725427886
267051833565687
208836416461110
15597363639606
246378543020565
334547792288537
169725219426684
558843202166143
189923149327001
527263197510835
8838323409163
401861545045987
453011119922571
313515392317558
32176663563781
147613365187081
119603974782848
178379296675419
364242690799496
220153960776177
214678760512939
146023018866991
288090047849910
131943755898762
434318132818971
291853642461202
37802889237958
396277919647986
69612037840164
310320355646639
323078149340657
183456131551259
245247631584583
249534239265170
417321931090620
517773718157753
529676824760609
134534579990513
162021462596466
75223406582328
410072495257324
448245261116041
238665212870923
512869317009862
486571186791971
308524623218320
72262495538034
81589418615712
46064287515339
146944009168675
174087904558992
476632996319340
320064927838726
369538757325531
324447031633121
125790566062671
523151896586815
326762506426607
389022755050127
230512646425894
462613964242920
431504212140637
336790099233071
426874824242549
540765372576413
438630437803337
134770612809201
240819166824614
17920139402266
135829258822347
558662984630426
163684823812408
160190626385807
408290361059643
107890528063338
282531057232655
162647356287005
281712113521309
31361458407396
525654516961107
158009342629071
102378909293371
226590606221030
111372485018655
154554547151764
352569220851885
207637509877224
445011015880271
129881699772936
454257229820604
358667494451810
371085024477329
169118219811610
526973231099108
446838631348751
244782776482705
134462381830063
219703702318056
340094278765571
357478931264600
337040232743831
24653026867991
25685603263303
242357979898440
174870358395137
9693180571289
465954299953160
249058545955563
187424778494923
264234611781293
421082605455651
404305176934027
62297152497416
147606532413265
45781612718520
323337621509762
250155810194062
313012944240862
194980654112404
342496497568189
432432026810072
88282111943178
402210459715865
172034488748181
41484867799431
370428369200981
93353631730885
342302243049781
369277815645398
410110525794694
8038248143970
72137401460884
129503002965640
14860997588910
535560096156392
518777851452646
160075546386975
98402895299753
398432634742859
348616393794920
470940715356371
408570886676507
134421807533340
274498339211436
268381706918104
6172236102857
179523931768202
479947145705985
56789013999008
269771010210488
548103475336690
23016124417900
261337440298878
47056104717487
378249029039771
377290374620751
447377011567139
110839869150623
517814936397751
510317382397081
353260507431845
345110726656631
125614643086620
498115770983610
517549183850335
300116094320824
500780699399371
558822657419686
345982787465004
159421000658362
50298369369156
162371289969755
259483488960446
561144067492246
507449628253521
401493782633839
243406781012609
49003955317176
270773022681849
535811367024103
457462531933615
425560060940024
555245554979865
186037735532174
334929268765728
560101294977823
531574833584288
538059962086238
323546890332704
13235248937829
502693370369473
347409787680620
124465121697162
480117430933500
534879574610089
165247888249843
501830161567242
280416109300859
206882552555826
407893924492250
468661486449324
474514731833273
526583789964687
88249258678647
444173381747964
263686379071910
231975865651099
30886552718131
259551147947501
435755047828678
137197885456863
549165130020272
323989034474989
468727629461003
217087739404163
536016676400553
436501049662821
241534556373968
112919619671817
482032824150173
17048247692287
423446409622868
427020306871284
28403422805304
547896721889552
253105918576022
200355292959489
272936005326793
276226142889442
256146066072267
324826506108968
378650558741978
95941843111200
106426633284847
251208778586101
517961583788428
33631576858621
147127382191200
168434092656455
369201879360625
384448426866494
259573948511996
376282734526607
413456795938122
347278494235147
194739125514084
284034473060653
197240423324904
207267277163058
268806926020422
480231495269107
245551225039197
302955771591273
34205814070775
86548570326226
495365202560857
118139336897818
522304052133549
557640226231943
459255634547968
21042395464886
497979047958074
371237616704739
138944881251426
345562119951191
367742305666030
309777675175278
45198200742533
174219993841082
351329597759644
415837482506422
169983722820826
482707276753621
317300388530940
473646763388503
239543648493715
469026344691374
370777749777592
307762988748832
439358582581564
408374050481559
197836695786793
377690543895033
336675730076920
282107874312860
144809961901477
476411259860050
17667030960957
435876909870808
363612976939841
427149082662670
516176509509672
289246479786465
450561447412679
33880197292101
131252252644104
374428189917283
388917465633221
65834043551107
177577865535529
502930407236876
401783915362025
415421797711536
162041551762708
285833124750759
226385787911494
409244586109397
93075477968707
428215731212095
235581789743780
186698193951502
434816910889177
476333948980951
511643280566158
535899370804881
188733513893557
284043614954245
534608991041615
255600749130082
499176147682288
539608426822486
391512284358435
244921975281287
107959610664357
515114974547650
262024999342273
99913875539697
139892519325412
347967159486709
522159070205744
479201584639852
277841746286407
123024767596672
140138231606609
32506086190471
249300952324565
548803165869064
544674408369540
508433012287940
306604847762178
432238400636098
532779172573266
559972289874682
331867831527474
43417034994404
127660579538448
562651644783205
36421503660741
330628708053403
129326583707418
361596103940197
499801694259303
167854514798836
439958796020919
345167289292834
79297899771777
470271944712732
66540847889388
473064174907913
537495087442525
2960563710286
351492447904961
12524263344022
256592539639201
267646665119066
272606572787357
479211423715595
391120696411615
81804778801740
471990967291935
538747087483806
295252094165428
197091099868848
172509727265048
311923680324902
474137266295175
531527418558099
350634251965557
530176715266227
135744432404355
531050645622876
302020125325403
482958486898034
145123518493712
408512092234985
190517211657049
170881429588047
366197280782083
543798982449444
366228382360778
191736736181382
89988824230260
91694509363999
294208123551941
50417247898747
300273594137744
94740473564852
26076590505255
61531586909318
27237903243549
375651675477646
360755306237654
81867591071174
76256866024454
243181033216015
485478013600782
441728337506444
404176775171464
509578040223131
471190943403900
248879158168075
309088621995384
293324706125263
348573138163243
106817832794541
236569852154773
368729666877320
516094547654504
448714615360603
504407700325290
313289419780296
221707541802785
522067995775104
412073496335689
443873197522948
366724352178359
413149943679439
274955791306265
506201363035898
416717046508053
79526245006981
540078446556511
271837766036998
373141860168138
304175456517851
399278295124044
325628119359226
356944630402365
303634733886394
114029097072240
168504342310747
71160376259298
352342442712521
440478678937695
177258006453688
554287389734831
335244424007390
313190661985407
213429783544539
390641647715628
276389993825401
261089417002651
265132190329385
265868491401362
273204708509427
426906475598464
53088038389771
161228718078760
229029713338127
457452640156611
312900178714388
106486953732194
481185353107461
440377498787714
490854646561256
302682367818585
116594086736210
502199085111851
341790086987488
190173999961807
419835427477886
505032860966166
363225693768011
410437726688309
457335709678428
439343089442962
518755330649717
88788191495710
11505871816978
130419688568691
532826078149432
408453981691985
465040289019528
252091603426241
386228529054443
55800358944508
215000463221913
16307799226868
62761542008534
230077022045999
142891213626038
416209768682755
444174443633028
133058420223322
74168215442835
499407995114604
426726088031772
476554198587547
174618202458716
276193409321223
334840906507312
177130749934500
132864744243846
299425517370820
71649894012383
382874583055277
17893987585612
243437187040855
27290385445575
332277556692311
107213849669198
527083013122361
253657069439482
329544766444663
336204020700104
196397645477064
36105311225620
250056335268281
107386268580974
300491288410186
215710498779788
117477278829562
422929075615452
476683792655964
286507282594506
258264815134693
233814801190794
325450375714217
120479858123179
275920932483106
368688297236873
36368981386364
272915487930129
462193843072295
95584856860769
101371505885056
394952636124623
493337197900504
122121881271222
489412458617187
326875870810652
187740915669167
162527636329885
164992895880325
223221071605214
273025630427940
483361467610150
198056066798699
179309759510233
511668880161182
255839624746807
334728113538987
323608156031582
301164729706164
537691268579020
205600154736880
550287528167728
190228530557068
452564781902059
107714196537123
412802837546295
130541160874776
188789254817442
177866457488367
257241260865977
383488525966000
387626521112092
97310875029080
546155148198603
380714270244143
467315113507105
121960258808175
10609854231596
201751776596691
236650319615333
308834988047416
204208540278839
421096222512133
640074770730
101383136243125
538482684356956
265343445471161
385531701277582
322026387273502
431621695273238
24773695928182
555994573298069
412105186419205
317762970514212
131656808393785
385700909389758
157224906082869
249982310000675
540113055930813
211326795030851
108559084051261
132994570530567
491050579742049
249487544448546
372060471891766
5587216909320
58027267727017
438877131696297
394599183143976
452514500663963
219465485239259
459335176333057
134622698072657
382250444688969
216804957562841
128805496602933
134465313196008
334229228535319
486229448600370
515468036927024
34879941650303
164940022413056
316080957104750
454844943846729
102798237060440
28239787298085
544256886016229
43609322706983
475979365152818
555571015349196
518119396159849
49438624014736
107913591456628
561286879897872
281274646350269
245885595502498
48817799279590
107513817223839
14505200827121
201293282637121
151163906332305
415305132551291
185262871216316
532565936216465
547011727944649
130713072002653
407801721135150
302465734227053
497606642390129
200994097546433
410067865702186
544433981255341
118364768964191
465219237228907
392915869086273
118410694406314
30019534801178
433774409075178
1820928432392
149300880235737
153313157744550
100360120564909
324385876482668
311442050567962
510635334816048
503912780787705
214819370320970
74221781840269
481440069331512
392281585457
391282599919492
83760394375686
217838053152854
66322543426898
552123420360602
245438112927360
80633443913672
356109495603124
482743682140208
49570852983620
262261186469744
29573167142971
199635197612618
138681640486317
146629674589083
108267616246736
483531753600601
87286315939195
373144832600794
340573498905019
499364267532198
28105163434919
304816232146771
56037326514850
323841397411685
81184647676707
12369317075798
16038265488588
296066833783799
312829463743672
47854978736393
272275041415638
125338306873585
205565450064398
554022199885168
290848358770058
513487338560851
63750517571789
194382186765306
14121660146218
452708369599702
171526525842259
497412105099847
341338004162771
169836606405059
11803632599740
548025454290067
420178990349103
36494733156542
287982520674294
107500749129382
145777421042092
387698863130128
319317606742468
403263577750843
58519159151129
355345248248119
205362405874518
468950311495690
497183090949666
23932557454486
279772798678775
49272965023599
322763678995981
161668349911750
173522297581897
404787118066592
71488206702489
323700710770869
301376666965752
247500270695045
74430233265144
159106661523964
239586011948691
51979364256154
205013096966122
194289436847152
20065542978876
296361865154220
96108090171934
176016404360643
509430209257235
367222444549743
470873367083085
324452226890984
466138359203275
147019806386710
346945233623261
392177790977149
257685323304261
317927746039425
283714972944991
84186349260179
7652734018519
383171158974062
343954259965565
159331719360987
42044229288660
490483727252104
139157870983918
535208951341481
119707367523551
424320155080046
355574292639277
448331524731122
463571187983594
271015042722927
446045571815864
241250038449011
430967787604533
372838890547164
400977757302674
469002915911318
58958955281300
473681202617009
211947594908772
555882954692515
432118129238391
295309835885643
282198116533371
540167111961398
104739252476257
458027383033987
143433978810982
297116081409523
109062277813649
542893234744445
128698494858168
372852799115803
549541548072296
523940325237212
505539125024946
529071604242640
333050709155676
146696479894004
52349349460218
258555851509939
85964918136132
19151816095507
320876575595225
337315385376916
537257004134614
149280571093198
75516181674914
177176858774500
309282740130696
349872041009741
536044165922481
533150473464728
509368101259610
130300141905343
290792078517877
335579896532472
396067692391773
213475146477813
5038542082220
510102731310958
90413261357229
390550185312740
339239574961557
450434320119660
450241899141380
478728860896907
94802807390002
424263380363052
288836791360227
264215191338936
21148244467979
143192213565024
13557896915351
528299118231504
513513475536808
464423298247402
358059097769826
58522746992688
111500862119203
167556808623592
421313424231574
480234056934316
299240544586245
278684474675904
436143053189805
56000326034310
409537123971919
512848723077210
405620331572827
443362732375209
63443458895424
342656153675755
457333092779288
319410879356846
3861329046523
222902565415674
344361895000418
415059783905619
331831253037166
171597826304384
448108135340257
399419021535008
536416190137832
473325202373388
355665795650758
560746735112096
326943432205109
203539160533211
489802675850429
221649386614530
165260021619858
498306246140931
525179925054671
222218749926791
68388076146235
223498218208530
456081330279788
78300327464860
447647084140914
393312729075472
469369836919739
417207567200652
493470951060950
523495899480767
207742519710881
444200917572941
373662885574079
4713616592127
302727133812489
100513845410474
433971256957957
311407025087900
421796250398427`,D2=`123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `,U2=`919 534 157 2  79 97 34  8932 5   51  6 289  18 939 34  187 51  9   23 66   6  14 68  6 2111 284 629 179 322 4  43 6232 852  468 498 84 88   29 133 189 9   8    7 7  37     8 6   8    3178 572  46 29 94  799 3   592 8   682  65 154 64  4  124 52 91 343 517 42 32 748 13 7   465 878 92 93 74  49 82  97 9562 96 845 857 67 26 76 5729 88 891 612 27 519  37 1359 4   95 9295 43 145 711 127  569 246 87 617 79 46  6 88 57 91 34 51 936 946   9 611 89  4 526 32 72 96  82 324 36 72 11 6462 168 225 75  6 288 75 247  1  9 16 6   523 43 78  3 23 72  9  27   34 757 62  98 32 9151 48  6 28 5432 36 56   83  25  2  1 193 5     9 2     39 93 6968 81 73 3185 5  28 4343 72 886 9   3544 96 3    4 31 416 928 14  18  3 7616 439 816 238 94 28 96 978 6  39  32 29 91 5  691 436 354 84   66  776 773 6  76 2137 312   6 37 1298 76   2 69 68 24 688 62 51 81  26  8546 89  77 93 68 928 9738 541 355 9379 46 88   3191  8 16 84  32   31 431 39 284  9 46 283 9942 54 84   429 887 435 37 86 95 58 51   17   38 591 19   4 16 464 289 345 512 32  353 683 13    55 12   93 358 43 41  28 7   67 35 9985 4144 819  11 751 6547 675  12 5331  8 484  94 97 35 948 127 12 758 4   68 447 891 329 563  99 4662   9 12 72 544  4 99  793 4   489   8   32 3  81  29 4   88 813 363 157 84  2757 949 8493 8586 38  22 37 976 55 253 896 22 9632 6  413 82   1 23 7   6 312 23   674 954 943 393 27 2  97 749  6 17 73 21 51  872  71 231 174 25  489 64 98 25  9  1 8    455   4 142  228 8  18 63 5  71  19 7  151 12  86 11 6     2 1  93  39 15  3    525 58  2  64 6  12 966 179 8  53 325 64 2  17 8329 633 77 8    44    7 298 89 74  1 127 913  6 92 46  18  63 794 647 31 4    2 779 4271 499 653  5 97 312 4  5383 32 28 18 19 62 9  95 2   33 4266 936   2 9  934 689  25 412 51 97 1435 434  59   91 698 97   479 71   34 7     4 968 4461 86 55 948 518 181 3    7 41 248 9742 1   38 2139 713 512 671 4   31 119 4  45   47 31 334 27 3844  39 27 16  44 663 41 25  1 989 512 55   24 17  68 219 181  92 76  96 438 863 747 12 95 67 26 73   21  33 37 733 723 56   8932 382 786 61 9927 2   63 6    37 82 85 894 431 755   29 4  47 722  96 323 7   57 318 77 59 52  7465 76  28 16 9  328 97  735 38 45 829 6  792 9  29   23 584  654 3984 5   13 6   931 7363  13   1 4   7 254    1 743 59  916  6 632  586    3 15 63 324 76 347 22 358 751 21 6156 55 248 64  7128  3 7177 754 822 4752 348 278 1692 8872 79 8459 77 89 359 7  216 592  475 16  728   1 567 722 45   9   5 7687 265 931 35 7235 52 46  24 242  559  76 698 4  71  4 83   7 915 8635 538 737 281 258 4116 294 51  54 99 163 158 423 68 412  81 79  38 1973 3799 12 14   8 12 78  64 85 86 468 69 35  79 171 5296   3   5  172  9  6 823 39 2824 93 242 94  3 792  625  71  5 96     1 138 4    568 51 98 35   5 423 3657   83 11   5  921 54 448   9 98 643  2 747 91 54 63 385 4632 4   62  53 47  9 727 4118 596 89 58  28 64 5919 73 2   32 297 2  94 42 38 98 775 81 28  766 41 495 345 5    6491 45 727 471 6276 51   415 81 8817 92   8 466 65 54  2  976   3 1657  3 16 1  19 98  3 5598 63 393   8 551 686 93 47  7 229 915 1649 468  9  194 74 32 6431   36 397 58   472 474  1 84 83 67 8   75 589 558 98 38 49  54 248 17 99 27 88   3255 27 95 69  3337 3968 48   72 931 184 517 57 957 3   7 89 43  39   38 39  1   32  78 3  812 516 76 724 12 97 455  12 314 27 436 878 369 8  1741 5  36   21 18 69 77 1861  94 23 55 7632 2233 54 39 8  1964 13  41 729 442 5263  88 68 396 24 912 162 74  342 91   85 1496 47 32   6 77  45  7 4  445 5  589   3 53 79 669 54 48  5  58  181 9582 49   88  4 592 2  923 13 84   65 428  6 5611 139 85 79  3 87  85  75 444 942  2  1   19  2 66 56  5 4379 51 6792   15  568  7  5 33 83 72  4238 14 744 4367 619 255 6618 452 249 84 24 1    395 5   9  75 65 91  1  6 4   2629 2   549 34 85 3421 19 819 888 76 99 965 444 7545 61 1    23 166 73
 81 324 95  3  14 48 98  6635 447 19 78 446 336 86  62  379 42  145 65 33  99 214 47 38 6297 524 991 928 911 1  69  157 5436 385 133 81 329 181 969 699 35 36  278 6  16   253 5   9744 1247 324 214 12 842 395 26  381 4   492  52 693 661 7  935 18 5  614 969 62 85 718 27 4   178 533 69 17 38  32 58 649  397 27 244 529 21 69 96 5123 41 539 235 74 343  95 2155 34  79 5875 29 288  51 319 6489 974 22 152 94 85 64 57 33 28 15  1 996 2214  8 572 68  2  22 77 21 576 94 955 67 42 91  483 463 988 47 74 287  1 496 74  3  2 77   97 32 96  4 58 824 42 587  75 863 75 696 23 1856 92  7 79 1374 32 2233 21  47  9 53 663 77  478 95  4979 31 4668 27 17  894 31 86  957 19 712 77  7664 25 83 224 19  92 531 323 85 45 6292 953 45  419  9 18 51 314 3  11  83 62 99 7  978 279 367 1   913  591 161 1  82 9621 874   8 47 2923 99  83 41 48 15 173 36 94 844 827 5554 25  26 24 58 178 688  595 773 6295 54 636  7284 57 86 23  9248 92 969 62 586 99 99 853 7744 71 317  624 559 353  5 76 55 34 56  487   54 823 43 346  8 985 638 459 233 49 9936 134 61   243 1673 61 636 88 75 966 87  23 25 519  5888 717 788 129 5965 1534 31 5824  5 465  81 54 16 365 411 79 478 36  82 137 556 55  397 111 7688  35 57 91 322 26 87  173 12  695 533 5279 7  68  95 566 98 272 759 253 934 3731 614 2267 8175 12 615 79  82 63 582 521 27 9847 1  345 88  31 37 15  7 754 5824  12 198 446 273 75 49 62 883 15 88 83 51 95  436  23 934 812 58  345 91 63 32  6  1 45   471   1 727  212 91 95 76 6  37 819 4  857 55 936 66 57    1 11 25  92 889 46   948 84  29 76 15 69 433 847 85 31 652 83 84 54 4519 722 64 89 8592   78 122 79  1  2 272 29  51 26 26  44  17 276 439 75 3    3 381  814 422 664  5 32 362 91 7855 25 68 13 61  2 81 51 45 189 8449 627  61 1  835 195 344 623 98 92 8141 423  93  379 328 7367 873 6662 54 793  85 318 2211 49 25 891 962 834 1   83 52 399  679 42  34 9819 638 429 154 38  18 757 3  97  433 15 983 99 1499  27 42 89  92 191 62 41  7 422 854 83  434 923 73 652 862 151 532 47 357 999 343 18 69 74 98 13 8576 659 94 736 748 5585 3551 389 434 97 9324 6    8 54   61 88 77 29  822 362  647 48 99 178 137 513 87  17 518 43 33 69  8958 34  71 93 2  119 75  49  48 12 878 78 846 99 63   78 991  445 9138 666 33 395 149 8957 396 725 55  2 854   43 932 426 33  44 163  453  817 33 87 39  56 158 64 141 895 13 4469 74 932 97  3943 45 3174 171 578 9314 191  22 1342 3992 31 2253 23 57 441 11 984 711 2457 46  879  45 221 21  52  23   3 5147 941 399 19 4395 93 47 352 165 1946  71 548 32 16 89 76  51 211 3715  84 943 374 281 1627 394 49  97 91 52   44 118 12 541 152 64  13 1524 6293 64 41  64 99 49 147 54 84 748 16 97  85 572 1142   2 537 4252 45  8 663 28 4474 73 854 48 82 177 9631 876  4 1944 252 735 92  8753 11 63 59 739 138 1553   35 27   8  419 37 971  32 68  53  7 356 66 67 17 676 2622 99  28  13 98 88 412 4822 652 27 81  11 27 3282 83 96  41 987 17 19 73 56 75 189 61 18 5849 87 252 191 798  5888 98 419 776 4532 75   497 84 4185 55 747 359 69 388 71 757  78  412  4 79 5  88 57  9 1524 59 126  79 389 179 87 15  2 92  999 7914 583  7  971 55 79 1783  271 564 9178 796 164  1 77 16 74 69  21 893 859 14 55 656 97 336 8  36 42 72   1255 88 39 62  2957 32   341 283 274 159 254 63 891 79 86 86 75  79 4367 278 86  96 549 5  785 383 6  117 87 66 195  63  32 51 351 958 736 6  4632 1  475  6  79 86 51 3381  85 51 39  139 5468 71 18 1  5972 291 99 615 223  592 246 79 768 21  85 645 772 153 243  48 6567 63 89 638 34 938 76 9  843 3  6422 25 15 83 991 53 483 4  31  838 9515 5563 67 33 574 92 822 91 12   16  37 59 7772 764 74 65  5 65  23  71 522 436 84 88 2977 84 17 36  8 6675 52 1823  988 1353  4  3 82 54 185 7948 71 297 8799 698 923 1543 758 294 19 85 323  356 54  63 38 28 14  7  5 128 1733 855  11 85 24 294  21 116 817 67 96 877 997 2433  3 49   61 335 83
  9 71  44  45 64 39 758  934 927 4  47 783 165 35  32 1187 362 166 85 36 466 753 66 28 1562  66 848 63   22 44 48   56 2262 652 95  41 476 359 542 779 91 17  139 52 881 5568 11  7389 9574 415 966 92 213 956 72  976 926 565  19 491 398 55 967 27 3  863 3   46 15 24  41 99  392 48  52 66 269 86 52 418  755 36 778 987 13 72 26 15   62 767  25 85  31 169 6832 663 74 661  54 27   24 582 2672 997 18 399 18 48 73 33 66 84 64  8 392 1922 54   1 43 36  25 87 22 922 64 354 5  58 85  966 479 69  14 86 433  3 312 49 75  5 16    4 73 14 41 47 137 51 855 729 982 62 456 48 4249 65 15 26  591 16 8236 62 865 34 47 117 67  344 954 9292 26 3764 57 95   38 27 14  795 52 252 178 484  39 12 651 81  86 55  277 63 34  554 199 16  447  9 58 23 68  2  889 27 97 51 3  849 182  51 6   866 8972 326 83 51 829  697 941  4 872  93 546  7 66 74 781 16 19 815 141 2519 11  66 41 68 482 989   15 672  516 27 7225    2 93 43 691 9189 66  71 69 112 97 64 22  5852 44 5163 989 331 549  4 75 56 83 721 228  185 472 94 332  8 646   1   5 784 1  3969 95  2716 223 2659 96 634 95 96 412 34 616 88 311   626 714 878 447 9475 1421 19 421  42  62 342 89 52 828 76   8 11  462 96  56 414 83  742 711 4695  98 62 89 899 38 889 594 415  31 255 4766 6  27  41 967 9  429 546  27 954 2142 128 2246 428  64 564 44  39 6    4  38 45 7244 6  198 352 62 95 89  2 42  5581   8 28   34 265 67 44 74 524 15  8 24 71 44 5122 492 938 358 853 494 31 83 42 46  3 293  331   1 717  816 56  6 79 9  37 553 39 756 78 547 79 597  39 57 78 983 114 677 6843 57  92 76 26 21 23  358 53 55 73  74 58 44 1465 897 99 78 3738 8923 829  1  3 63  98 9   43 69 87  87 377 196 568 67 951 59   4  678 544 455 44 88 286 13 1529 4  26 31 48  9 21 63 61 916  767 957 521 61 24  73  747 858 17 74 4816 333  67  718 856 4921 866 7589 49 296 792 36    65 94 65  25 943 713 2   53 37 442  845 545 64 2387 883 363 829 512 92 932 82 83 5935 46 165 65 6491 573 32 619  9 452 45 32 84 726 334 45  313 297 33 964 346 223 299 48  66  74 328 63 44 19 43 58 6394 852 71 52  219 2677 7773 679 72   6 4767 338  9 115  35 23 67 55  376  94 3858 27 82 226 211 961 85  87 376 97 47 679  326 487 17 1  3  488 719 84  58 63 76  47 24  94 6258 38 8714 457  656 169 31 813 58  538  272 949 37 37 331 9961 839 324 72  84  83 7488 3925 72 79 44  45  28 14 66  252 1  659  83 945 776 5389 62 45   456  19 9778 515  76 9661 2295 21 972  24 6  382 42 37  623 9958 86  68   31 359 72  16 289 255 6974 78  64   5 7993 25 58 672 158 7496 745 565 93 81 38 12 839 471 2324  91 422 772  24 187  715 26 852 5  28   72 186 5  525 819 537 6  533  557  29 7   34 86 36 473 34 35 948 43 51 792 561 6544  22 118 7161 66  2 845 85 1648 54 116 19 82 467 8636 842 78 7578 773 347 252 2917 63 49 86 117 191 3936 9617 6   43 4791 23 268 463 71  71 29 388 91 39 78 737 594  732 38  72 43 83  89  637 255 92 435 26 22 2826 14 226 69 21  15 16 82 64 51  87 59 53 8114 68 74  518 1867 9384 66 336 689 336  512  759 75 4725 79 695 277 42 396 71 888 679   37 96 86 57 69 13  8 9949 13   7  32 78  394 2  84 77 2   72  6764 1416 47 854 17 59 5924 8762 352 1546 94  221  8 81 33 67 24  53 54  294 68 59 256 81 868 5  89 57 1818 5435  4 54 456  647 58   188 872 829 793 795 92  22 11 19 55 75 637 9952 799 151 69 571 64 98  29  1  938 79 48 796 551  52 15 697 923 956 42 2753 45 9925 2  46 28 18 1432  42  4 58   82 5948 83 18 32  944 741 6  927 541  237 754 67 631 29  15 376 398  16 9149  2 3888 34 17 892 55 916 22 22 893 48 8989 15 3  99 189 68 368 91 29 5537 7982 3745 24 82 983 53 478 92 42  586  36 38 319  121 36  2 14 95  97  25 49  882 74 39 7198 66  9 94  6 9834 35   44 9164 4896  1 48 18 29 423 4926 34 38  3781 719 947 14   868 825 69 84 3713 78  12  42 97 13 84 77 74 171 1388 936  34 3  93 469  7  893 727 54 38 335 483 122   3 741  43  15 66
  2 51  48  39 91 71 574   77 138 5  98  56 664 1   62 7586 353 311  6 93 727 391 78 58 4149   2 3   6     7 88 37   92 7664  63 99  39 717 537 653 231 38 93 2387 42 874 3248 238 5641 85    76 437 75 161 676 353 5   374 154 656  99 834 67 717 4  2    2 5    4 85 46   9 441 597 22  6   5 671 58 52 791   43  3   4 349 45 79 52 9    29 24   86  6   2 874  484 766 17 59    7 43    6 894 7524  47 69 969 54 67 16 7  74 7  71  5 24  5126 49   6 85 62   9 75 37 273 29 36  4  29 95   94 544 5   56 27   5  2 41  77 47  6 429   9  5 61 68 9  766 91 695 577 895 73 181 44  598 41 27 43    3 1  5675 33 555 18 15 745 821 384 642 7927  4 4943 23 44    1 32  5   68 57 8   739 1    68 15 241 74   2 8   835 82 26   27  11 8   43   6  3 64 36  77 954 61  7 34 13  71 69   15 2  3254 4877 21  54 89 78   94  193  8 59   33 329  2 72 65 87  15  2 685 729 5    716 75 27 88   7 615    3 992    7  4 3225    5 54 57 559 4319 81   4 13 1   38 37 7   4618 24 8855 265  14 416  5 95 7  63 229 889 7483 799 62 311  4 378   5   5  55 5  7126 6   3666 962 8123 1   96 16 3  698 56 447  9 861    82 54  268 26   965 4913 19 1    21  27 646 92 72 342 45   4 35  734 75  87 9   61   49 716 393  114 37 85 293 59 682 238 522  63 198 8836 18 51 432 413 9  635 361  81 451 26    27   76 22   71 776 77   4 9    7   8  3  138 55 61  229 17 28 41 45 19  4922   4 64   22 15  9  81  5 9   33  5 82 74 47 9153 475 161  13 211 734 26 52 8  67 94 3278 2   119 91  1751 86  2 64 51 45 843 91  73 1  422 31 515 521 46 28 653 212 423 5451 581 98  1 17 67 15  71  93 98 4   5  53  4   39 165 81 51 6419 8913 962  6  1 94  84 9   19 98  4 688 358 885  37 12 525 18   1    6 249 226 97 34 78  83 386  4   5  8  1  1 43 41 68 586  338 926 312 52 6   24  313 318 95 87 499  88  362 9275 788 8633 62  6751 56 532 657 45    63 46 53  71 59  881 24 674 64   3   78 537 93 88   139   6  95 535 6   64 64 66 7688  3 379 82 2    556 58 479  7 914 22 85 91  45 12  33 7581 966 31 664  84 775 569 11   9   4  15 65  1 34  4 71 4648 956 32 79    3 3934 6494  15 7    9  261 664  3 131 798 16 53 5    31   8 2124 44 23  64 124  16 334 16 557  7 88 856  876 179 57 3  98  64 768 6    1 73 12  74 68  86 7462  7 7348   3  292 222 2  614 79  199  917 243 25 93  98 1124 476 112 6   85   6 2217 1425 23 16 76  95   1 96 81   94 9  4     2 147 939  151 62 97   86   41   78 171   2 3     479 11 411  32 6  882 45 77   31 3514 671 54  513   5 94  57 863 611  799 8   4    3 679  25 63 859 83  7781 444 266 83 16 38 85 341 888   96   9 724 184  73 73   5   5  413 7  58   14 622 4  672 371 143 1  42   8    99 9  363  1 61 464 19  5 644 81 82 153 552 24   211 315 8371 31 73 484 1  3475 36  91 81 31 99  9117 165 93 1923 157  32 767 5523 68 81 5  584 918 185  7689 5  857 6917 27 27  989 51  72 88 888 83 55 25 936 4    862 72 469 26 19   2  555  89  4 795 74 6  7     1 554 78 85  33 78 2  42 36   2 55 94 4381 6  82  739 8794 446  34 248 873 57   2227 384 3   659  3 531 993 31 468 36 835 553    9 78  6 44 63 62 28 8366  6   8 276 63   25 3  9  47 8   89  411  9232 33 133 21 64   64 4973 819 3841 1   271 91 98 78 51 927 46 71  334 92 84 473 58  68 5  89 55 9963   45  7 2  993   81 84   385 119  38  73 86  55  55 78 79 3  82 413 5867 491 237 69 814 27 22  7   3  554 51  3  48 594   9  4  71 78  443 53 352  72 1927 9  16 78 67 761  585  3 12   63 628   2 94 85  468 567 4  27    8   62 671 73  71 59   3 991 149   9 2225  1  851 79 27 578 39 249 93 25  23 42 9836 26 3  36 884 66 543 45 46 1287 25   8142  1 65 64  42 95  68 9  2835   8 77 4      8 28  9 82 758 48 164 5   81  18 55 6349 17  3 54 58   71  3   35 2494 5438 15 72 18 17 399 28   56 56  725  71   53 52   16  121 33 5  5671 3   834 33 2  72 98 56 82 261 4    119   5 4   3 9    2  9   76  31 9  61  12  725   4 878 447   3 11
+   *   +   *  +  +  +   +    *   *  +  +   *   *   +  +    +   +   +  +  +   +   +  *  +    *   +   +   *   *  +  +    +    *   *   +  +   *   +   *   +  +  +    *  +   +    +   +    +    +   *   +  *   +   *   *   *   *   +   +   *   +  *   *  +  *   *   *  *  *   +  *   +   *   +  +  *   *  *  +   +    *  *   +   *  *  *  +    *  *   *   *  +   *   +    +   *  +    *  *   +   *   +    *   *  *   *  *  *  *  +  +  *  *  *   +    *  +   *  *  +   *  +  *   *  +   +  *  *  +    *   +   +  *  +   +  *   *  +  *  *   *   +  +  +  *  *   *  *   *   *   *  *   *  +    *  *  +  +    +  +    +  +   *  +  *   *   *   *   +    *  +    *  *  +    *  +  +    +  +   +   +    *  +  *   *  +   +   *   *  *  +    *   *   *   +  +  +  +   +  *   *  *  *  +  +   +   +   +  +    +    *   *  +  +    *   *   +  +    *  +   *  *  *  +   +  *  *   +   +    *   +  *  +  *   +    +   *   +    *  +    +    +  +  +   +    +  +   +  *   *  *  +   +    +  +    +   *   *   *  *  +  *  +   +   +    *   +  *   +  +   *   +   *   +  +    *   +    *   +    *  *   *  *  *   +  *   *  +    +    +   *   +   +    +    *  +    +  *   *   *  *  +   *   *  *   *   +  *   *   *   *   *   +    *   +  +  *   *  *   +   *   *   *   +    +  +  *   *   +  +   *   *   *   +    +   +    +    *  +   +  +   +  +   *   +  +    *  *   *   *  +  +  +  +   +    *   +   *   *   *  *  +  +   *  +  *  *  +  +    +   *   *   *   +   +  +  *  *  *  +    *   *   *   +    +  +  *  +  +  +   +  *   +  +   +  *   *   *  *  *   *   *   +    *   *  *  *  *  *   +   *  *  *   *  *  *  +    *   *  *  +    +    *   *  +  *  *   *   *  *  *  +   +   +   *   +  +   *  *   +    +   +   *  *  +   +  +    *  *  *  *  *  +  *  *  +   +    *   +   *  +   +   *   *   *  *  +    +   +   +    *   +    +   +    *  *   *   +   +    *  *  +   *   +   *  *   *  *   +    *   *  +    *   *   +   *   +  +   *  *  +    *  *   +  +    +   *  *   *  *   *  *  *  *   *   *  +    *   *  *   +   +   *   +  *   *   +   *  +  *  *  *  +    +   *  +   +   +    +    +   *   +  +    *   +  *   *   +  *  *   +   +   +    *  +  *   *   *   +   +  +   *  *  +   +    *   *  *  +  +   +   +   *  *  +   +  *   *  +    *  +    *   +    *   *  +   *   +    +   *   *  +  +   +    +   +   +   +  *   +    +    *  +  *   *  +   *  +   +   *  +    *  +   *   +    +  +    +   *   +    *   +   +    +    *  +    *  *  +   *  *   +   +    *   *   *   +   +   *  *   +   +    +   *   *  +    *  *  *   *   +    *   *   +  +  +  *  *   *   +    *   *   *   +   +    *   *  +   +  *   *   *   *  *   +   +   +  +    +    +  +  +   *  *  *   *  +  +   +  *  +   *   +    *   *   +    +  +  +   *  +    *  *   *  +  +   +    *   *  +    *   +   *   +    *  *  +  *   *   +    +    *  +   +    +  *   *   *  *   *  +   +  *  +  +   +    +   *  +   +  *  *   +    *   *  +   +  +  +    *  +   *  +   +  *  +  *  *  *   *  *  +    *  *   *   +    +    +  *   +   +    +    *   *  +    +  +   *   +  *   +  *   +   +    *  *  *  *  +  *  +    +  *   *   +   *   +  *  *  *   +   +    +    *  +   +  +  +    +    *   +    *   +   *  *  +  +  +   *  *   *   *  +  *   *  *   *  *  *  +    +    +  *  +   +    +    *   *   *   *   +   *  *   +  +  +  +  *   +    *   *   *  *   *  *   *   +  *   *  *  +   *   *   *  *   *   *   *  +    *  +    +  +  *  +  +    +   *  *  +    +    +  +  +  +    *   *  +   *   +    *   *  +   *  *   +   *   +   +    *  +    *  +  +   +  *   *  *  *   *  +    *  +  *  *   *  *   *  *  +    +    +    +  +  *   *  +   +  +  +    *   *  +    *   *  *  *  *   *  *   *   +   *  *  +    *  *  *  +  +    +  +    +    +    *  *  *  +  *   +    *  *   +    *   *   +    *   *   +  *  +    +   *   +  +  +  *  +  *  +   +    +   *   +  +  +    +  *   *   +  *  +   *   +    *  *   +   *   * `,G2=`.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`,V2=`......................................................................S......................................................................
.............................................................................................................................................
......................................................................^......................................................................
.............................................................................................................................................
.....................................................................^.^.....................................................................
.............................................................................................................................................
....................................................................^.^.^....................................................................
.............................................................................................................................................
...................................................................^.^.^.^...................................................................
.............................................................................................................................................
..................................................................^...^.^.^..................................................................
.............................................................................................................................................
.................................................................^...^.^.^.^.................................................................
.............................................................................................................................................
................................................................^.^.........^................................................................
.............................................................................................................................................
...............................................................^.^.^.^.......^...............................................................
.............................................................................................................................................
..............................................................^.^...^.....^...^..............................................................
.............................................................................................................................................
.............................................................^.....^.^.^.^.^...^.............................................................
.............................................................................................................................................
............................................................^.^...^...^.^.^.^.^.^............................................................
.............................................................................................................................................
...........................................................^.^...^.^.^...^.^.^.^.^...........................................................
.............................................................................................................................................
..........................................................^.^.^.^.^.......^.^.^.^.^..........................................................
.............................................................................................................................................
.........................................................^...^.^.^...^.^.....^.....^.........................................................
.............................................................................................................................................
........................................................^.^.^.^...^.^.^...^...^.^...^........................................................
.............................................................................................................................................
.......................................................^...^.^.^.....^...^.^.^.^...^.^.......................................................
.............................................................................................................................................
......................................................^.....^.^.^.^.^...^.^...^.^.^.^.^......................................................
.............................................................................................................................................
.....................................................^.^...^.^.^.^.^...^.^.^...^...^.^.^.....................................................
.............................................................................................................................................
....................................................^.....^.^.^.^.^.^.^.^.^...^.^...^.^.^....................................................
.............................................................................................................................................
...................................................^.......^.^...^...^.^...^.^.^...^.^.^.^...................................................
.............................................................................................................................................
..................................................^.^.^.^.^.^.^...^...^.......^.....^.^.^.^..................................................
.............................................................................................................................................
.................................................^...^.^...........^.^.....^.^.^.........^.^.................................................
.............................................................................................................................................
................................................^.^.....^.^...^.^.^.......^.^.^...^.^.^.^.^.^................................................
.............................................................................................................................................
...............................................^.^.^.^.^.^.....^.^.^.......^.^...^.^.^...^.^.^...............................................
.............................................................................................................................................
..............................................^.^.^.....^...^...^.^.^.....^...........^.^.^.^.^..............................................
.............................................................................................................................................
.............................................^.^.....^.^.......^...^.^.^.^.^.^.^.....^.......^.^.............................................
.............................................................................................................................................
............................................^...^.^.^.^.^.^.^.^...^.^...^.^.......^.^.....^.^.^.^............................................
.............................................................................................................................................
...........................................^.^.^.^.^...^.^...^.^.^.^.^.^.^.^.^.....^.^.^.......^.^...........................................
.............................................................................................................................................
..........................................^.^...^.^...^.^.^...^.^...^.^.^.^.^...^.^...^.^.^.....^.^..........................................
.............................................................................................................................................
.........................................^...^...^.^.^.^.^.^...^.^.^.^.^...^.^.^.^.^...^.^...^...^.^.........................................
.............................................................................................................................................
........................................^.^.....^.^.^.^...^.^...^.^.^.^.^.^.^...^...^...^.....^.^.^.^........................................
.............................................................................................................................................
.......................................^.^...^.....^.^.^.^...^.^.^.^.^...^.^.^.^.^.^.^.^.^.^.^.^.^.^.^.......................................
.............................................................................................................................................
......................................^.^...^.^.....^.^...^.^.^.^...^.^.^.^.....^.^...^.^.^...^.......^......................................
.............................................................................................................................................
.....................................^.^.^...^.^.^.......^...^.^.^.^.^...^.^.^...^.^.....^.^.........^.^.....................................
.............................................................................................................................................
....................................^...^.....^.^...^.^.......^.^.....^.....^.^...^...^.^.^...^.^.....^.^....................................
.............................................................................................................................................
...................................^.....^.^.^.^.^.^.^...^.^...^.^...^...^...^.^.^...^.^.^.^...^.^.^.^.^.^...................................
.............................................................................................................................................
..................................^.^.^...^.^...^.^.^.......^.^...^.^.^...^.^.^.^.^.....^.^.^.^...^.^.^.^.^..................................
.............................................................................................................................................
.................................^.^.^.....^.....^...^...^.^.^.^.^.^.^.^...^.^.^.^...^...^.^...^.^...^.....^.................................
.............................................................................................................................................
................................^.........^...^...^.^.^.^...^.^...^.^.......^.^.^.^.^.^.^.^.^.^.............^................................
.............................................................................................................................................
...............................^...^.^...^.^.^...^.^.^.....^...^...^...^...^.^.^.^.....^...^.^.^.^.^.^...^.^.^...............................
.............................................................................................................................................
..............................^.^.^.^.^.^.....^.^.^...^...^.^.^...........^.^...^.^.^.^.^...^.^.^.^.....^.^...^..............................
.............................................................................................................................................
.............................^...^.^.^...^.^...^...^.^.....^.^.^...^.^.^...^...^.^.^...^.^.^.^.^.^.^.^...^.^.^.^.............................
.............................................................................................................................................
............................^...^...^...^.^.^...^...^...^.^...^.^.^.^.^.^.^.^...^.^.^.^.^...^.^...^.^.....^.^.^.^............................
.............................................................................................................................................
...........................^.^...^.^...^...^.^.^.^...^.^.^.^.^...^.^...^.^.^...^.^.^.^.^.^...^.^.^...^.^.^.^.^.^.^...........................
.............................................................................................................................................
..........................^.....^.^.^...^...^.^.^...^.^.^.^.^.^.^.^.^...^.^.....^.^.......^.....^.^.^.^.^.^.^.^.^.^..........................
.............................................................................................................................................
.........................^.^.^.^.^.^.^.^...^.^.....^.^.^...^.^.^.^.....^.^.^...^.^...^.^.^.^.^...^.^...^.^.^.^...^.^.........................
.............................................................................................................................................
........................^.^.^.^.^.^.^.^.....^.^.^.^...^.^.....^.^.^.^.^.^.^.^.^.^.^.....^.....^.^.....^...^.^.......^........................
.............................................................................................................................................
.......................^.....^.^.^.^...^.^...^.^.^.^.^.^...^.^.^.^...^...^.^.^.^...^.^.^.......^.^...^.^.^.^.^.^...^.^.......................
.............................................................................................................................................
......................^...^...^...^.^...^.^.^.....^.^.^...^.........^.^...^.^.^...^.^...........^.^.^.^.....^.^.....^.^......................
.............................................................................................................................................
.....................^...^.^...^.^...^.^.^...^.^.^.^.^.^...^.^.^.^.^.^.....^.^...^.^.^.^.^.^.^.......^.^.^.^.^...^...^.^.....................
.............................................................................................................................................
....................^.^.....^.^.^.^.^.^.^.....^.^...^...^.^.^.^.^.^.....^...^.^.^.^.^.^.^.^.^.^...^.....^.^.^.^.^.^...^.^....................
.............................................................................................................................................
...................^.^.^.^.^...^.^.^.^...^...^.^.^.....^.....^...^...^.^...^.^.^.^.^...^.....^...^.^...^.^.............^.^...................
.............................................................................................................................................
..................^.^.^.^.^.^.^.....^.^...^...^.^.......^.^.^.^.^.^...^.^.^...^.^.^.......^.^.^.^.^.^...^.^.^...^.^...^.^.^..................
.............................................................................................................................................
.................^.^.^...^.^.^.^.^.^...^.^.^.^.^.^.^...............^.^...^...^.^.^.....^.^...^.^.^.^.^...^.....^...^...^.^.^.................
.............................................................................................................................................
................^.^.^.^...^.^.....^.^.^.^.^.^...^.^.^.^...^...^.....^.^...^.^.^.^...^.^.^...^.^.^.....^.......^.^.^.....^.^.^................
.............................................................................................................................................
...............^.^.^.^.^...^.^.^...^.^...^.^.....^...^.^.^...^.....^.^.^.....^.^...^.^.^...^.^.^.^.^.^...^.^.^.^.^.^.......^.^...............
.............................................................................................................................................
..............^.^.^.^...^.^.^.^.^.........^.^.......^.^.....^.......^.^.^.^.^.^...^.......^.^.^.^.......^.....^.^...^.....^.^.^..............
.............................................................................................................................................
.............^.^...^.^.......^.....^.^.^...^.......^.....^.....^...^.^.^.^.^.^.....^.^.....^.^.^.^.^.^...........^.^.^.^...^...^.............
.............................................................................................................................................
............^.^...^...^.^.^.^.^...^...^.......^.....^.^.....^.^...^...^.^.^...^.^...^.....^.....^...^.^.^.^.^.^...^...^.^...^.^.^............
.............................................................................................................................................
...........^.....^.^.^.^...^.^.^.^.....^...........^.^.^...^.^.^.^.^.^.....^.^...^.^...^...^...^...^.^.^...^.^.^.^.^.^.^...^.^...^...........
.............................................................................................................................................
..........^.^.^.^...^.^.......^.^.^.^...^.^.^.^...^.^.....^.^.^.^...^...^...^.^...^.^...^.^...^.^.^.^.......^.^.^.^.^...^...^.^.^.^..........
.............................................................................................................................................
.........^.^.^.^...^.^...^.......^.^...^.^.^...^.^.^.^.^.^.^...^.^.^.^.^.^.^.^.^.......^...^.....^.^.^...^...^.........^...^.^...^.^.........
.............................................................................................................................................
........^.^.^...^...^...^.^.^.^.^.^.^.^.....^.^.^.......^.^.^.^.^.^.^.^.^.^.^...^...^...^.^.^.^...^.^.^.^...^...^.^.^...........^.^.^........
.............................................................................................................................................
.......^.^.^.^.^...^.^.^.^...^.^.....^.^.^.^.....^.^.....^.^.......^.^.^.^.^.^.......^.^.......^.^.^.^.....^...........^.^.^...^.^...^.......
.............................................................................................................................................
......^.^.^.^.^.^...^.^...^.^.^.^.....^.....^.^...^...^.^.^.....^...^.^.....^.^.^.^...^.^.^.^.....^...^.^.....^...^.......^.....^.....^......
.............................................................................................................................................
.....^.^.^...^.^.^.^.^.^.^...^.^...^.^.^.^.^.^.......^.^.^...^.........^.....^...^.^.^.^.........^.^.......^.^...^...^.^.^.....^.^...^.^.....
.............................................................................................................................................
....^...^.^.^.^.^.^.^.^.^.^...^.^...^.^...^.^.^.^.^.....^.^.......^.^...^.^...^.^.^.^.....^.^.^.....^.^...^.....^.^.^.^.^.........^.....^....
.............................................................................................................................................
...^.^.^.^...^...^.........^.^.^.^.^.^.^.^.^.^...^...........^.^...^...^.......^...^.^.^.^.^...^.^.^.^.......^.^...^.^...^.^.^.....^...^.^...
.............................................................................................................................................
..^.......^.......^.^.^...^.^.^.^.^.^.......^...^.^...^.^...^.^.^...^.^.....^...^.^.^.^.^...^...^...^.^.^.^.........^.^...^.^.^.^.^.^...^.^..
.............................................................................................................................................
.^.^.^.^.^.^.^.^.........^.........^...^.^.^.^...^...^.....^.......^...^.........^.^.^.^.^.^.^.^.^.^...^.^.^.^.......^.^.^...^.^.^.^.^.^...^.
.............................................................................................................................................`,K2=`162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`,H2=`76200,69285,28154
80994,76238,75528
87714,42939,90758
39904,26096,27477
92252,13780,79180
80691,81731,74779
76338,31195,64368
10685,85105,85267
19515,35544,93666
49722,41167,35731
56256,45060,38179
23696,77355,99371
10123,5087,37261
81998,9750,4841
7606,32053,79549
15484,84464,11322
3720,18604,87971
3849,51566,31997
70145,49559,40376
70848,11738,29766
9377,3392,19283
75369,48586,78424
95519,90267,51998
3784,10647,33120
81341,38277,54316
79554,10081,2609
75309,57495,25681
22564,88840,62951
67557,46212,42519
88905,67525,59330
18140,41391,95616
93872,15447,44102
36520,44321,18371
4597,77837,88656
7416,4165,61136
43681,22036,91449
68335,59215,33030
82895,10111,89567
91073,65946,78353
42507,27982,42674
82702,41114,1914
60186,31003,89374
66363,31933,37321
81726,70917,32084
58687,65025,54942
28689,15724,50340
4600,34749,43273
84668,10110,87934
28330,59060,80609
96978,15129,30926
65158,7203,15060
32515,52639,69827
33958,84095,12992
44232,85729,15290
25279,2935,71651
58943,62590,43437
74143,32959,63287
76105,5419,82434
76257,53754,10868
59545,83820,26574
8050,65648,59123
49426,31090,39600
29884,80444,91401
20099,92357,97444
85992,36687,38597
18009,19063,43787
37215,50601,18784
31666,98808,76940
54654,55521,88296
83485,99796,73989
39205,24820,53309
87399,21309,30266
89015,97122,233
13000,35645,54822
63105,27738,8924
45222,21013,57515
5874,10987,9978
14843,65754,22396
15866,79572,88715
58550,33884,90777
53021,68126,24159
78069,63359,35000
45738,87791,7629
82864,91888,99678
66992,10225,29881
71912,65920,76322
83734,18224,25241
34897,24500,45085
84694,87673,30302
34376,42392,56482
99049,85593,50515
31641,86830,59158
50351,76058,71593
30138,99575,57354
16860,50303,72039
53574,16539,70577
9927,67919,17176
29192,2313,81807
36341,11070,8042
37782,68823,17944
47432,39974,9574
7269,52518,82252
33046,1143,92771
6806,82106,88200
19111,78986,10718
34752,87678,59882
38179,43594,13359
14732,49172,96000
46224,13099,73802
44675,79755,32323
11298,92272,63142
47376,96187,54836
59685,82685,18321
24541,35297,71064
89777,78084,74287
44528,39938,31406
60806,5972,22012
87784,72975,60425
33281,23519,60291
32534,10066,76006
93491,52168,25633
54957,27705,43377
33599,64619,25181
20530,94939,68104
71828,48362,57926
23325,53611,5010
26821,91600,53736
46185,27052,46904
91707,77670,17154
67170,60412,27690
96650,54246,70227
71803,45235,30411
80186,4283,3351
85085,68736,995
64127,73096,61753
61188,8566,86877
17146,7023,41981
70098,45308,19741
12637,3883,87434
86092,40989,62723
51668,55534,8209
3277,25344,82057
39043,52088,3252
59941,30508,98969
42658,2549,83284
71087,29393,51387
66608,62860,2069
9385,14427,71578
77711,39723,5780
45327,78718,58108
16066,84596,13129
22140,48642,62055
75160,13227,24140
85734,36585,42300
44168,42663,99782
45457,78310,25266
96659,75694,90401
78081,92680,25218
9209,63137,98999
13717,17343,48293
97493,62652,33347
82675,40859,6542
68549,59774,32919
8592,70944,43647
11010,90615,11806
72865,13392,23200
11002,75268,98919
70409,38583,53312
4870,39405,22652
2809,51316,46076
57047,39324,78701
96800,52173,47650
99134,78730,44000
75767,44228,98317
50984,39949,53315
63292,97438,30504
99077,46792,51526
35518,34054,35216
23275,74340,35029
51437,45161,34097
54821,71847,97303
75746,76883,55277
19023,54864,29853
61788,66640,34198
11953,23751,77234
36882,11784,6369
93628,51920,88564
51986,5979,97089
94725,86137,99596
22782,23426,93656
41613,96528,37321
72312,35873,99245
59729,87856,66359
36681,70153,88173
95120,83498,60561
62106,87053,32116
52420,28645,77306
77315,5476,19370
49014,83076,33849
27636,41515,16660
82025,74886,99313
2216,59598,22196
7361,11691,28575
94651,41550,33368
28236,130,17860
10588,89925,1540
17678,37070,75888
33443,39422,6474
93063,57348,11556
7485,13260,93846
54014,10751,36764
99452,93546,28438
86450,18493,93530
23242,15851,9300
15866,72490,67386
44249,77125,39845
68574,16619,24309
96254,5149,57020
38434,51737,43885
98025,73585,87638
85594,8964,71596
6693,34281,11597
20689,76241,53427
40948,82453,22705
9492,20033,23560
26828,48205,10173
4459,66857,16397
94178,90770,97620
93796,63609,27613
38257,81433,55970
12012,60098,59368
16753,93117,22865
63100,15278,48914
45048,79275,94175
26480,20171,54291
78639,81025,803
79035,63429,17411
76923,26804,59568
82748,23936,5106
47110,6182,1503
43725,99875,53612
50101,97253,29217
2939,74026,39265
19367,36467,73284
74078,81412,49041
11906,80214,47322
36025,95421,24596
22412,27617,98332
78337,53296,93604
95167,11779,89417
44285,32046,18835
87105,83057,44510
97569,44393,28413
10723,6427,58230
67520,95025,93110
59921,50285,17512
7664,33435,97006
1740,22820,29507
10199,40403,85738
8049,32773,51884
66392,25390,31780
17598,82387,11136
56014,18284,8967
83297,83703,68464
388,37704,55605
62657,86385,28027
61529,39358,79691
62128,92491,72832
59892,66349,84489
66285,40460,76122
6731,29672,92553
64457,860,32324
87002,11886,67321
64458,28320,96005
49923,76658,28092
56460,64626,85546
93908,93796,98549
94269,71175,36863
10547,24292,53496
63229,56090,50540
90646,57223,42548
74570,46752,18873
72507,23420,53689
98935,24250,77647
31824,86873,41603
77316,11080,52763
97447,34732,36641
75361,63696,67488
24939,37837,68324
13228,94254,52630
70257,71467,10551
76677,4020,49517
925,88603,76768
44946,15199,37642
74837,41059,89286
8906,9494,3525
43382,26615,2062
63636,53153,82875
46835,38893,64831
8283,61693,45794
95380,16919,26612
88215,9416,64016
50367,81814,95712
52862,96864,88941
61328,48136,41301
67021,11635,77255
29692,67679,13879
87292,45336,94779
31994,32120,75120
31492,35755,78673
44939,63225,533
80166,5182,52647
29804,81963,87527
1606,14433,18277
87125,63791,36176
67219,8533,41033
81613,51869,29093
9484,43105,76276
4337,22525,89753
39745,61590,32176
20648,78803,90543
56393,99864,94111
53770,5971,85379
55806,62015,21377
27737,73707,14754
69868,37348,23146
17666,19323,17696
39275,97175,53723
84509,15570,25229
81822,44839,50150
2602,34742,84422
87772,79045,58871
4290,68271,86651
10144,88149,53158
47360,6459,58995
1695,75412,22432
67128,73294,14721
29926,21192,63506
34111,27788,40172
31406,99757,32987
36941,44010,74075
55176,94852,71850
68977,68524,27938
94179,44600,64037
15151,64116,73132
86562,20361,96557
32649,71799,85585
54736,4340,27281
56563,56168,85205
88977,40965,3350
9309,12478,42215
78440,76591,69205
70418,60240,96881
47607,28821,13782
66237,54363,64592
31804,46534,58313
69553,39126,31143
70784,15652,97689
58582,50332,14935
15645,11663,11564
41178,88785,86540
99697,34160,8798
79289,22119,5097
8730,57402,51383
57704,81959,20719
91377,51453,83305
16577,28816,37340
78114,33777,39388
50134,51861,30812
34160,10819,85447
47683,83616,77587
72800,44601,49811
40199,42129,12617
60846,20118,1228
13456,35250,65172
73195,51738,79334
92534,10999,30839
50220,75716,68143
32547,76775,10701
75691,24658,25116
62036,1705,93885
63602,42984,93455
23921,42573,43967
72257,59893,38310
92659,39200,86484
90396,16905,82387
82871,71719,30957
54261,34789,95316
76796,14387,83290
70500,8799,38470
68049,49480,2842
59787,97060,46743
24153,92446,6583
97178,83298,46505
97707,40038,11506
68989,76780,57958
67157,69791,34235
61240,50118,31590
63703,24138,12404
73879,14245,53003
58543,85365,42337
85634,80251,50082
66246,91141,54302
41159,48270,3122
93921,14068,35140
83045,9655,97031
63893,71700,40436
120,487,54588
27103,73088,77151
91580,44361,63445
58442,55376,91550
15325,16485,89743
83577,12900,75139
53674,29953,92110
77797,17078,48850
6015,1818,36977
23879,42955,37115
79208,71383,25764
40142,81958,75546
3364,86059,46038
55492,24280,59919
8392,23723,21876
36344,24962,57160
62525,833,85648
42274,5785,14210
75791,43484,96941
34795,17522,31240
80578,6039,91603
52867,64170,26226
91344,27945,24803
22357,69055,51318
93172,3767,40792
23991,46818,19006
44152,46308,30412
48873,38227,72876
2856,51470,74993
76409,98260,14258
2089,12557,16794
41202,11764,42266
19350,8254,77591
7427,51240,1200
5996,82460,30358
19996,24855,35009
96798,2228,76112
26438,77512,14662
27611,4055,91804
60720,64317,75904
33126,98065,17747
92822,58342,94803
91068,75964,97532
35533,96218,38973
42021,25769,37720
37749,54023,11248
19216,95800,72786
98943,65333,65419
25749,31168,10002
93488,21925,60118
8247,22148,43011
5115,51438,8586
16481,51504,64653
42049,66959,91801
12005,50093,86456
84648,43290,58031
31445,54316,58958
16358,62436,6848
15259,69124,58631
52979,16316,63392
11718,2259,63068
15125,75911,97527
32448,52267,99538
59292,15182,61206
11813,91186,32345
10950,88655,91785
3679,20681,76773
25503,42972,54200
45332,23061,85065
60174,41008,26682
96671,54118,2683
29166,19843,38248
6202,11681,37145
43449,43365,90444
15137,25826,30299
85498,75362,63943
2768,19020,96501
44818,5450,99811
68574,42871,61140
13867,89960,39896
7962,97558,24639
92214,88491,44870
63395,67667,36129
88048,65984,77100
29665,82556,97622
47305,26856,32849
22798,92741,68600
71201,31763,67225
95274,73952,63398
22408,90633,89539
54992,83478,72843
2628,11261,22935
69559,55557,97315
77296,28940,49880
42785,98770,42233
9646,5685,61557
48511,77595,7659
80770,97633,53880
78612,38969,4107
63186,64546,21748
99621,34235,72380
18333,4451,1
78829,57206,83002
27301,84979,89531
23661,80711,86255
56722,11066,33346
70142,42725,15377
91618,86629,9151
59426,83573,33127
92726,94210,21997
95008,43096,95763
40971,12355,35653
23340,84571,44437
83036,57988,11369
56581,21680,81507
50691,3808,81025
94377,84165,65945
75092,95290,26927
47257,44094,18410
13236,38586,87348
98246,48272,1680
37515,85186,67289
40037,63292,91393
46476,87111,32181
78088,13941,41748
57613,39606,48498
22837,97031,33205
72588,29582,99897
63746,71072,64583
77844,83907,81848
53197,4652,46848
20510,2342,70707
3201,75892,77237
81792,66524,79349
72425,10778,37977
42364,21576,52944
21243,35664,31735
59719,20187,61024
64964,4425,74492
33539,92295,79031
90497,37991,50274
8743,86638,65477
73194,66410,23655
44297,8833,50376
90727,97932,51793
75382,88975,39457
16456,98768,95515
19700,86377,34596
14272,10830,4360
81709,66700,29535
38399,32510,47008
87794,74441,25669
45614,34186,44023
35643,22579,96087
10304,46129,13590
10911,71908,64120
90615,99716,99593
57001,56935,73523
59913,22870,59864
59934,28745,18529
21175,78645,13118
20314,58443,26168
46932,54525,74386
45648,25300,17281
55159,35662,26625
54874,57341,77991
6261,78131,65706
2704,30957,90220
15627,48769,79196
58663,5251,87611
85561,15041,22831
80937,85744,46132
97059,51170,77449
69758,45516,68968
57583,9205,64743
56597,10771,78975
30746,74973,92709
29373,80345,95711
85376,20759,30617
54731,62102,83540
88254,71112,28223
85334,65082,81986
38205,61235,75773
62006,99961,50661
64261,43057,80503
29308,15230,37739
19480,77040,24534
67987,35463,1992
59590,60121,97665
63264,58874,49367
8169,34840,33824
33347,48341,12742
21231,75413,41245
37351,27639,18572
49119,29654,37166
70038,92981,90934
61715,29162,57797
2369,78558,89350
41050,66450,69170
62169,50991,34195
78859,71404,50813
58663,6779,1773
40827,50002,97194
74011,37939,93719
86327,51211,42833
41320,4575,64026
23879,20175,95478
11169,13543,12246
83505,40768,29746
64098,59680,24626
49903,53792,3521
86088,79238,14431
81880,50867,44195
5313,59442,34106
84438,6044,85195
14618,17991,58164
36635,44724,69714
84843,75188,235
16570,19030,98080
46791,48394,71782
33045,25415,31252
78123,71801,89123
4471,90766,48668
34050,31269,20956
53939,610,47360
89267,3631,93682
29075,81442,32807
14221,1537,59774
17875,69413,73413
58823,82218,53979
64863,65290,81234
73190,62992,11210
68655,18826,19544
82712,1062,55063
271,94506,66110
22788,7823,4188
10656,11300,59656
37081,74897,66990
90919,78444,99659
33185,27323,27714
96300,25762,94154
31625,47259,9867
80881,47224,23597
26473,3828,80267
61729,28797,16304
92616,71823,90719
22113,37881,55799
88119,96792,26670
83603,83097,5110
20935,16262,46769
93694,35603,16397
83007,6142,80101
58423,90103,13068
92779,37742,54860
81581,53227,7379
29382,42473,89003
7975,57239,4263
18313,83524,28577
54601,21317,88207
53260,69880,20885
27602,15516,40291
64950,2275,81844
87740,42570,19281
89388,75061,64102
37525,31884,40917
85921,5266,62537
91969,73701,40734
37200,12979,42985
83843,42000,95171
10130,12720,16132
44946,26426,23020
60875,87870,49989
30693,52241,79185
57643,95365,68095
31385,87386,7472
36490,64665,82936
18652,84512,27565
38447,72982,54625
56263,93587,62926
85675,82893,38093
55363,70043,39769
58620,21914,77185
69361,8606,46487
21985,53758,40044
49420,87282,44543
59696,49542,29909
13049,31323,29745
27852,85110,32428
22859,86485,21640
86290,39406,38730
39419,4652,33532
29232,25950,5116
90396,85775,83415
987,41176,12169
25351,23019,99068
84165,66261,39979
71164,98080,26458
68999,72238,14354
98105,65623,52349
27023,36286,23542
6777,66706,17268
93963,97370,46523
50777,11306,13154
94909,13426,24855
96134,89349,45314
32634,68346,33763
93939,74136,7206
78139,10700,724
19229,787,81379
27309,74150,95291
68002,4902,51405
80401,34281,2173
64259,81231,38720
64711,10444,84536
90312,35002,25636
14463,42942,74329
12532,94085,41276
72444,85268,82813
47471,62388,9829
11967,62751,59689
65526,76838,88326
8331,82117,393
37687,64321,79399
23568,47613,63204
10843,32500,32887
64882,75842,31597
73429,20134,54213
61627,10069,63288
45759,37000,93308
67738,82760,290
79088,51089,66433
23616,86620,38320
53630,5309,29885
70959,57620,40958
49441,31944,98799
85562,11856,66870
46071,58336,6569
57353,77558,84472
64630,9071,86888
74753,99706,81166
96793,40617,42569
13290,69922,50680
8254,17925,33965
96739,16829,47527
47327,40067,39716
25272,7142,9958
83468,34323,54403
24048,14117,53817
11578,60056,28849
24261,11206,7823
98993,54210,10820
75444,87962,96307
63999,40998,467
16192,48201,69831
46411,62870,74310
91227,40771,95427
591,91172,16430
63671,54112,82345
18614,17817,56787
65635,62927,82811
74734,52586,25190
14663,92190,55033
37121,86791,95634
98150,54031,75283
14176,84077,51531
3664,30261,34737
80148,15067,64989
10356,37675,96055
77089,22307,7060
29704,49144,99139
96219,92614,81876
89027,19080,82268
73095,82393,83469
7378,25802,59221
30626,48742,46417
26759,77764,94612
53414,37094,94332
29788,95719,8843
34671,57902,64137
23136,15394,21762
85276,97785,70843
56524,91605,43292
20837,28390,21554
74863,12988,29650
86191,52360,49315
85988,42853,77819
10577,89428,97850
32544,59528,69777
59738,43607,38801
17742,28735,45676
3533,46571,17171
37441,11687,38192
88057,13370,74963
39999,95010,98282
84402,24868,35267
93182,21581,78442
50030,1357,48481
52472,41858,90862
6595,2976,29587
36761,14020,88603
36985,98845,13840
22859,54802,29970
28859,78276,27544
79379,18151,19531
73248,99511,17021
84203,16514,79216
11903,20539,14230
14042,49708,14570
52314,17172,18501
80308,82807,9208
58214,70965,12729
1680,6262,70483
40961,32010,80111
13224,69637,76761
97883,80319,68463
6348,36956,16109
21424,42796,65141
28609,3014,85224
84496,57949,17200
95270,29756,30695
62679,4003,69049
87868,71538,65785
98717,38457,73342
49437,15028,3139
84524,25442,99470
81172,55676,96346
20082,79807,14085
81380,35554,74606
73190,25409,81347
31880,97394,65319
15015,83448,82900
76450,31539,38487
61591,99726,16847
87890,43970,42442
59360,70749,73155
67214,64353,48998
69050,63449,25179
70473,49968,1824
68552,89517,48073
36874,59935,81340
441,67033,89617
6833,34888,20626
52945,9897,60023
84654,39838,13028
63416,69202,92551
98481,67023,31239
17668,53352,51880
9179,22501,25077
56829,24135,19217
88855,61175,30232
78087,20863,41559
96633,40587,53450
67738,30149,25040
64663,91258,81147
11629,97089,67135
59523,54770,6869
81893,82059,15457
44339,93319,44118
52037,9062,42385
44215,41273,9782
47342,70212,77124
61324,51970,67238
61734,55503,5903
29390,60971,27305
83239,66347,8815
59275,974,63586
63527,92200,37471
72928,10186,37845
6268,75944,74536
76368,46314,63603
31794,6671,7379
74572,19634,49679
51455,54671,70024
62622,46604,9772
71484,44696,89656
62578,37753,21955
75715,24389,55589
20374,4371,10450
92587,32310,20373
61618,83501,72221
77130,55763,62698
4510,58406,64970
42353,19731,22009
24855,35943,77644
40853,61014,18901
27352,14640,66254
91319,39192,39407
37143,38794,31433
33690,76705,68319
70888,86883,13775
57263,52247,77083
11275,89360,80571
88292,63255,46173
73255,10433,19309
46184,84180,12714
85803,78958,3516
82900,96194,19964
71667,48841,97860
9728,44348,56785
96651,24067,60222
14055,21294,57850
29258,18401,34594
61886,7578,27318
23666,90760,82507
25036,43529,79937
43291,69190,80935
83576,71984,51432
2981,91810,57852
2760,64305,49662
33590,63887,50321
6450,8481,30384
16518,92135,51863
61132,56413,98175
68577,4143,55785
8485,29308,76297
7611,99332,34599
20907,11326,94265
27787,30109,28971
5516,44064,36536
38242,21244,19321
61855,3916,58029
10342,40806,41746
94139,8592,55178
16711,59107,80432
7364,85922,40216
77226,67263,43154
11737,30250,2449
53719,28118,85880
71558,46385,24623
2621,29348,5663
39810,87498,19683
62005,59221,87703
78303,40291,67088
13157,74351,96918
46958,45098,36284
7997,56994,28246
20662,78538,87009
63440,42269,20960
74446,22856,31116
4290,59217,30492
69948,39594,13101
61150,88204,36569
10168,56764,1850
18053,59021,79912
39529,98196,95575
81345,44159,33956
13394,57338,84813
23844,65319,89884
19895,10831,10281
69802,71539,14086
58836,91576,69574
65687,23355,16463
6545,20416,38059
34494,83172,78680
41566,19464,74607
61958,22652,86794
84888,87011,7859
901,91837,37585
8058,75053,93161
50989,57347,96823
11670,50766,40693
50414,82321,26639
8715,96605,48229
79460,6259,85523
59610,46472,92244
60017,17531,40291
56028,85428,10483
88409,18273,26374
22938,61200,88051
40787,49180,5914
32980,60909,63493
1165,53158,83675
32508,2770,80403
28154,10447,6851
30340,10063,50040
76034,88580,70463
39150,56968,18854
91711,29080,99242
3380,54339,18992
67813,9846,76039
60780,13296,78734
22159,29701,30960
25772,56524,92535
42924,1251,83923
92359,86185,67929
19809,47119,77787
87026,58711,39122
67941,5105,27266
9987,31587,39009
28764,96890,2104
69630,68629,72754
20013,94303,454
27109,71211,1089`,F2=`7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`,W2=`97889,50122
97889,51343
98146,51343
98146,52576
98367,52576
98367,53777
97984,53777
97984,54997
97927,54997
97927,56197
97692,56197
97692,57414
97589,57414
97589,58568
97111,58568
97111,59695
96575,59695
96575,61078
97193,61078
97193,62252
96830,62252
96830,63394
96362,63394
96362,64459
95677,64459
95677,65749
95695,65749
95695,66945
95398,66945
95398,68048
94849,68048
94849,69188
94400,69188
94400,70211
93694,70211
93694,71118
92776,71118
92776,72159
92158,72159
92158,73377
91866,73377
91866,74338
91105,74338
91105,75674
90958,75674
90958,76256
89619,76256
89619,77770
89682,77770
89682,78327
88370,78327
88370,79379
87755,79379
87755,80724
87484,80724
87484,81677
86710,81677
86710,81954
85188,81954
85188,82868
84401,82868
84401,84052
83879,84052
83879,85208
83297,85208
83297,85979
82340,85979
82340,86685
81330,86685
81330,87476
80399,87476
80399,87766
79079,87766
79079,88540
78149,88540
78149,89761
77524,89761
77524,89929
76169,89929
76169,91118
75483,91118
75483,91611
74352,91611
74352,92266
73318,92266
73318,92943
72292,92943
72292,93045
70978,93045
70978,93860
70017,93860
70017,93783
68656,93783
68656,94398
67603,94398
67603,94981
66528,94981
66528,94995
65251,94995
65251,95931
64282,95931
64282,95925
63014,95925
63014,96177
61830,96177
61830,97018
60784,97018
60784,96767
59486,96767
59486,97572
58401,97572
58401,97506
57153,97506
57153,97261
55896,97261
55896,98258
54782,98258
54782,97639
53505,97639
53505,98352
52328,98352
52328,98022
51094,98022
51094,97626
49878,97626
49878,97775
48667,97775
48667,98335
47424,98335
47424,97940
46226,97940
46226,97568
45040,97568
45040,97160
43871,97160
43871,97697
42568,97697
42568,97659
41332,97659
41332,97463
40119,97463
40119,96254
39141,96254
39141,96436
37850,96436
37850,96204
36651,96204
36651,95690
35536,95690
35536,95091
34458,95091
34458,94895
33241,94895
33241,94917
31924,94917
31924,93701
31113,93701
31113,93770
29753,93770
29753,92918
28811,92918
28811,92566
27626,92566
27626,91928
26587,91928
26587,91228
25588,91228
25588,90693
24491,90693
24491,89918
23545,89918
23545,89083
22648,89083
22648,88569
21526,88569
21526,88006
20425,88006
20425,87027
19650,87027
19650,86408
18582,86408
18582,85794
17494,85794
17494,84853
16699,84853
16699,83608
16219,83608
16219,83130
14968,83130
14968,82233
14139,82233
14139,81322
13324,81322
13324,80393
12530,80393
12530,79188
12092,79188
12092,78441
11060,78441
11060,77294
10569,77294
10569,76295
9877,76295
9877,75414
8993,75414
8993,74079
8854,74079
8854,73048
8223,73048
8223,72018
7584,72018
7584,71096
6713,71096
6713,69846
6512,69846
6512,68889
5670,68889
5670,67688
5388,67688
5388,66653
4679,66653
4679,65538
4158,65538
4158,64351
3847,64351
3847,63053
3935,63053
3935,61854
3727,61854
3727,60649
3568,60649
3568,59540
2966,59540
2966,58277
3127,58277
3127,57220
2047,57220
2047,55950
2308,55950
2308,54721
2365,54721
2365,53545
1816,53545
1816,52293
2366,52293
2366,51083
2456,51083
2456,50114
94985,50114
94985,48652
1712,48652
1712,47430
1766,47430
1766,46194
1659,46194
1659,45009
2134,45009
2134,43813
2392,43813
2392,42665
2924,42665
2924,41407
2753,41407
2753,40316
3480,40316
3480,39024
3244,39024
3244,37962
3991,37962
3991,36578
3541,36578
3541,35369
3781,35369
3781,34314
4491,34314
4491,33362
5428,33362
5428,32007
5289,32007
5289,30766
5494,30766
5494,29838
6414,29838
6414,28888
7237,28888
7237,27885
7926,27885
7926,26743
8350,26743
8350,25725
9002,25725
9002,24637
9540,24637
9540,23557
10100,23557
10100,22525
10740,22525
10740,21683
11643,21683
11643,20616
12238,20616
12238,19509
12800,19509
12800,18659
13680,18659
13680,17783
14524,17783
14524,17136
15603,17136
15603,16321
16493,16321
16493,15293
17177,15293
17177,14197
17819,14197
17819,13493
18821,13493
18821,12696
19741,12696
19741,11736
20537,11736
20537,11374
21788,11374
21788,10720
22808,10720
22808,9612
23529,9612
23529,8836
24488,8836
24488,8393
25650,8393
25650,7914
26781,7914
26781,7070
27714,7070
27714,6825
28958,6825
28958,6783
30276,6783
30276,5683
31115,5683
31115,5328
32288,5328
32288,5292
33571,5292
33571,4161
34462,4161
34462,4200
35758,4200
35758,3598
36850,3598
36850,3109
37986,3109
37986,3142
39252,3142
39252,2607
40386,2607
40386,2924
41686,2924
41686,2163
42796,2163
42796,1994
44010,1994
44010,1849
45227,1849
45227,2490
46504,2490
46504,2027
47689,2027
47689,2054
48907,2054
48907,2180
50122,2180
50122,2399
51327,2399
51327,1739
52571,1739
52571,1745
53798,1745
53798,2535
54949,2535
54949,2091
56225,2091
56225,2800
57354,2800
57354,2944
58557,2944
58557,3225
59737,3225
59737,2976
61038,2976
61038,3118
62266,3118
62266,3460
63445,3460
63445,4712
64336,4712
64336,4317
65745,4317
65745,5024
66787,5024
66787,5527
67896,5527
67896,5483
69238,5483
69238,5983
70360,5983
70360,6842
71306,6842
71306,7635
72267,7635
72267,7748
73592,7748
73592,8640
74489,8640
74489,9690
75268,9690
75268,10087
76450,10087
76450,10530
77621,10530
77621,11571
78370,11571
78370,11969
79593,11969
79593,12575
80674,12575
80674,13805
81232,13805
81232,14395
82332,14395
82332,15642
82826,15642
82826,16021
84152,16021
84152,17279
84598,17279
84598,17992
85609,17992
85609,18752
86587,18752
86587,19632
87436,19632
87436,20928
87756,20928
87756,21654
88809,21654
88809,22610
89567,22610
89567,23531
90385,23531
90385,24841
90593,24841
90593,25959
91077,25959
91077,26938
91800,26938
91800,27665
93024,27665
93024,28847
93402,28847
93402,30247
93281,30247
93281,31365
93731,31365
93731,32367
94471,32367
94471,33542
94786,33542
94786,34491
95753,34491
95753,35883
95397,35883
95397,36980
95942,36980
95942,38154
96235,38154
96235,39308
96613,39308
96613,40514
96761,40514
96761,41686
97077,41686
97077,42904
97119,42904
97119,44020
97923,44020
97923,45256
97858,45256
97858,46487
97727,46487
97727,47671
98359,47671
98359,48896
98432,48896
98432,50122`,Q2=`[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`,X2=`[...#...] (0,2,3,6) (0,1,4,6) (1,3,4,5) (1,2,4,6) (0,2,3,4,5) (2,3,6) (1,2) (2,3,4,5,6) {37,24,84,71,44,32,71}
[...##.] (0,3,4) (0,1,2,5) (0,1,3,4,5) (3,4) {53,34,17,42,42,34}
[###.] (1,3) (0,1,2) {4,13,4,9}
[.#.....] (0,1,6) (0,2,4) (1,3,4,6) (0,1,3,5) (4,5) {219,37,194,30,211,23,19}
[...##] (1,2) (0,2,3) (0,3) (1,3) (2,3,4) {10,20,23,37,14}
[#.##] (1,3) (2) (0,1,2) (2,3) {16,26,38,24}
[#...] (1,3) (0,1) (0,3) (1) (2,3) {2,13,11,15}
[.###.#.] (0,3,6) (0,1,2,5,6) (1,2,3,4,5) (0,1,2,3,4,5) (0,1,4,5) (0,4,6) {76,41,23,27,48,41,50}
[#...#..###] (2,3,5,6,7,8,9) (0,4,6,7,8,9) (1,7,8) (0,1,2,8) (0,1,2,3,4,5,6,9) (0,2,3,4,5,7) (1,6,8) (1,6,9) {56,71,48,29,37,29,50,54,76,31}
[####...] (0,1,2,3,4,6) (1,2,4) (1,3,5) (0,2,5) (4,6) (0,1,4,5,6) (3,5,6) (3) (0,1,2,5) {32,56,31,49,53,50,48}
[#...#.##] (0,4,6,7) (0,3,5,6) (0,1,3,4) (0,1,2,5,6,7) (0,1,2,5,7) (0,2,3,4,5,6) {202,164,169,27,19,189,185,175}
[##....#.#] (2,3,8) (3,4,7) (1) (1,2,3,5,6,8) (5,8) (0,1,5,6,8) (4,6,7,8) (0,3,4,5,7,8) {15,17,16,20,15,21,27,15,45}
[##.#] (0,1,2) (0,1) (1,3) (2,3) (0,2) {176,12,167,3}
[....#....#] (0,3,6) (1,3,4) (3,4,5,9) (0,1,3,5,6,7,8,9) (1,2,3,4,6,8,9) (1,2,3,4,6,7,8,9) (2,5) (4,5,6,7) {19,29,5,35,36,44,41,38,19,23}
[####.##] (2,4) (0,1,6) (0,1,2,3,6) (1,2,4) (0,2,4,5,6) {36,207,217,13,204,13,36}
[#.#..##.] (0,1,2,3,4,5) (0,1,6,7) (5,7) (2,3,5,7) (2) (0,1,4) (2,3,4) (4,5) (0,2,3,4,5,7) {62,44,46,37,54,48,19,45}
[#.#.#.] (0,2,4) (1,3,4,5) (2) (1,2,3,4,5) {2,21,31,21,23,21}
[#...##..#] (0,3,4,7,8) (0,1,2,3,4,5,7) (2,3,4,6,7,8) (4,6,7) (6,7) (0,1,2,3,4,5,8) (2,4,5,6,7) (1,2,4,5,6) {46,38,60,60,78,46,48,75,41}
[..##.##] (2,4) (3,4) (2,4,5) (2,3,5,6) (0,1,2,3,6) (0,1,6) {32,32,57,38,49,24,37}
[####.####.] (0,1,2,3,5,6,7,8) (0,1,3,4,6,8) (1,3) (0,1,3,4,5,6,7) (0,2,3,4,5,8) (0,3,4,5) (2,7) (1,3,4,7,8,9) (0,1,2,4,6,9) (0,1,2,4,5,6,7,8,9) {48,51,33,56,55,42,32,53,36,25}
[#.....] (0,1,2,4,5) (0,1,3,4) (1,2,3) (3,4,5) (0,3,4) (0,2,4,5) {56,38,35,48,73,47}
[#.###] (0,1,2) (0,1,3) (0,2,3) (0,2,3,4) (2,3,4) {24,14,24,24,16}
[#.##.#..##] (1,2,6,7,8) (0,1,2,4,5,6,8,9) (0,1,2,3,5,6,7,8,9) (0,1,2,3,6,7,8,9) (0,2,4,8) (0,1,2,3,4,5,6,7,9) (2,3,4,7,8) (0,3,4,5,7,8) {94,71,110,75,83,57,71,84,112,62}
[###..####] (2,3) (3,4,5,7,8) (3,4) (1,4) (2,3,4,5,6,7,8) (2,3,4,6,7,8) (0,1,3,5,7) (0,3,5,6,7) (1,3,5,6,7,8) (0,1,2,4,5,7,8) (1,2,5,8) {44,61,49,85,75,93,48,89,72}
[.#..#.] (0,2) (5) (0,2,3,5) (2,4,5) (1,4,5) (1,4) (0,2,3) (1,2,5) {25,167,41,18,161,196}
[#.##...] (0,4,5,6) (0,1,2,3,4,5) (3,5) (0,2,3,5,6) (0,3,4,5) (0,1) (2,3,4,5,6) (3,4,6) (0,4,6) {68,22,57,101,79,92,63}
[.###....#] (2) (0,3,7,8) (0,7,8) (1,8) (2,6,8) (0,3,5,6) (0,1,2,4,7) {151,19,28,36,14,20,34,131,136}
[######.] (1,3,5) (2,3,4,6) (2,4,5,6) (1,5,6) (0,1,3,5,6) (3,4) (0,1,5) (3,4,5) (0,1,2,3,5) {29,58,119,29,119,169,131}
[#.###.###] (1,3,5) (0,2,3,4,6,8) (0,2,3,4,5,6) (1,3,4,6,7,8) (1,2,4,5,6,7) (0,1,4,6,7) (0,3,4,5,7,8) (2,5) (1,2,3,4,6,7,8) (0,2,3,4,6,7,8) (3,5) {53,44,74,90,86,78,69,59,52}
[..#.#.#] (0,1,3,4,5,6) (1,2,4) (0,3,4) (1,6) (1,3,4,6) {31,59,13,44,57,18,46}
[...#..] (2,3,4,5) (1,2,4) (0,4) (1,2,3,4,5) (1,4) (2) (1,3,5) (0,4,5) {35,28,33,17,76,33}
[...##...##] (0,1,2,3,4,6,7,8,9) (2,3,4,5) (0,1,2,4,5,6,7,8) (0,3,5,6,7,8,9) (3,8,9) (0,2,3,4,9) (1,3,4,5,6,7,8,9) (0,1,5,6,7,8,9) (0,2,3,5,6,7) (5,8) (4,7) (0,1,7,8) {241,49,53,252,65,240,238,246,264,251}
[.##..#] (0,2,3,5) (0) (0,1,3) (1,2,4) (1,3) (0,1,2,4) {32,23,12,15,10,2}
[#####....#] (0,1,4,5,6,7,9) (1,2,3,9) (0,2,3,4,5,6,7,9) (2,4,5,6,8,9) (1,3,5,8) (0,2,3,4,6,7,8,9) (2,3,4,6,8,9) (2,3,8,9) (0,1,2,4,6,7,8,9) (3,5,8,9) (1,2,3,4,5,7,8,9) {39,52,92,86,82,78,73,48,110,114}
[######.##.] (2,3,4,5,6,7,8,9) (2,3,4,6,8) (7,8) (7) (3,7,9) (0,1,2,3,5,7,8) (6,7) (0,1,3,5,7,9) (2,4,5,6,9) (7,9) (0,1,2,4,6) (0,2,3,4,7,8) {32,13,71,65,69,47,69,88,54,62}
[.###......] (1,2,3) (1,2,5,7,9) (1,4,8,9) (2,3,4,5) (0,2,4,5,8) (2,4,8) (0,1,4,6,7,8) (0,6,9) {19,33,37,14,44,8,16,3,41,36}
[.#..#] (1,3) (0) (1,2,3,4) (3,4) (1,2,3) {11,26,22,42,33}
[.##..#] (2,3) (0,1,3,4) (1,3,4) (1,2,5) {20,33,9,24,24,9}
[##..##.] (1,5,6) (0,1,2,3) (0,5,6) (0,1,2,4) (2,3,4,5,6) (0,2,4,5) {19,19,20,19,12,33,32}
[.####] (1,3) (0,1,3) (1,4) (1,3,4) (1,2,3,4) (0,3,4) (0,2,4) {22,50,20,39,49}
[.#.#####] (1,5,6,7) (0,1,2,3,4,5) (1,2,5) (2,3) (2,3,4,5,6) (0,1,2,3,5,7) (0,2,3,4,5,7) (0,1,3,4,5) {58,68,63,82,57,92,34,44}
[..###.####] (0,1,3,7,9) (1,2,4,7,8) (0,1,2,5,7) (1,3,4,5,7,8,9) (0,1,5,6,7,8,9) (0,1,3,4,6,8,9) (1,8) (3,4,9) (0,1,4,5,6) (2,4,7) (2,3,5,6,7,8,9) (0,1,2,4,5,6,9) {27,44,21,21,34,36,30,28,30,32}
[.#.##.#..] (1,5,7,8) (0,2) (0,3,7,8) (0,1,2,4,5,6,7,8) (0,1,3,4,5,6,7) (4,5,8) (0,5,7) {46,33,31,9,33,55,17,48,58}
[##.######.] (0,1,3,4,5,6,7,8) (1,3,5,6,7) (0,3,4,5,6,7,9) (0,2,3,5,7,9) (0,1,7,8) (0,2,8,9) (2,7,8) (0,1,2,3,5,8,9) (4,5) {177,34,28,176,152,179,160,180,35,158}
[###..] (1,3,4) (0,4) (4) (0,2,3,4) (1,2) (2) (0,1,3) {32,22,20,19,31}
[.#.##] (0,1,4) (3,4) (1,2,3) (1,3,4) {173,191,7,25,191}
[#...###] (0,3,4,5,6) (0,1,3,4,5) (0,1,2,3,5) (1,3) (0,1) (0,2,3,4,6) (1,2,3) (3,4,6) (4) {34,42,16,67,64,23,31}
[.#.#..#..#] (0,2,3,4,5,7,8,9) (0,2,3,4,6,7,8,9) (1,3,6,9) (0,5,6,8,9) (1,2,3,4,9) (1,4,5,6,7,9) (0,1,2,3,5,7) (0,1,2,9) (0,1,2,3,4,6,7,8) (3,7) (0,1,2,4,5,7,8,9) {91,77,78,80,84,69,81,89,80,108}
[#....#.] (0,1,2) (1,4,5,6) (1,3,4,5) (2,3,5) (0,3,4,5,6) (0,2,6) (2,3,4,5,6) (1,2,3,4,5,6) {28,30,73,56,43,63,57}
[...###..#] (1,2,4,7,8) (0,1,4,8) (0,2,3,4,5,6,7,8) (2,3,5,6,7) (1,7) (0,4,5,7) (6,8) (0,4) (0,6) {198,54,44,24,210,25,32,64,54}
[....####] (1,3,4,5) (1,3,6) (1,4,5,7) (4,5,6,7) (0,1,3,4,5,6,7) (0,1,4,5,6,7) (0,1,2,3,5,6) {35,74,11,41,73,84,61,58}
[...#.###.] (0,2,3,4,7,8) (2,3,5,6) (0,1,3,4,6,7,8) (0,3,4,5,7) (0,3,4,5,7,8) (0,5) (0,1,2,5,6,7) (0,1,5,6,7,8) (0,2,3,5,6,7,8) {82,41,12,50,41,62,50,70,68}
[#....###.#] (1,2,4,5,6,7,8,9) (1,2,3,4,7) (4) (6,8,9) (0,2,3,4,6,7,9) (0,1,3,5,6) (0,3,4,5,6,8,9) (0,3,5,6,7,8,9) (2,4,7) (2,4,5,6) (4,8) (1,2,4,6,7,8,9) (2,5) {52,40,64,69,92,62,88,52,67,65}
[#.#..#.#] (0,2) (0,2,3,4,5,7) (0,4,5,6,7) (3,4,5) (0,1,3,4,5) (0,1,2,4,6,7) (1,4) (1,2,5,7) (3,4,7) (1,3) {63,63,42,53,91,59,25,46}
[##.###.###] (3,4,7,9) (0,2,3,4,6,7,9) (4,5,7,8,9) (0,4,5,6,7) (0,1,2,3,4,6) (0,1,3,4,5,7,8,9) (0,1,2) (3,4,5,6,7) (0,3,6,7,8,9) (0,2,3,4,5,7,9) (1,7) (0,1,2,3,4,5,7,8) (7,8) {84,63,53,88,96,67,55,104,39,48}
[.##..##..] (0,1,2,3,4,5,7) (0,5,8) (0,1,2,5,8) (0,1,3,4,7,8) (0,1,2,4,5,6,7) (0,1) (0,1,4,5,6,7,8) (2,3,5,6,7,8) (1,2,4,5,7,8) {171,173,65,59,167,180,138,187,170}
[.###.#..] (3,5,6,7) (3,5,7) (1,2,3,4,5,7) (0,1,3,4,5,7) (0,1,2) (0,1,3,4,6,7) (0,2,4) (0,3,4,6) {238,28,28,220,226,10,211,26}
[..##.] (0,1,2,3) (2,3) (1,4) {11,20,21,21,9}
[.###.#####] (0,4,5,6,7,8,9) (2,3,4,5,8,9) (1,2,4,5) (0,1,2,3,4,6,8,9) (1,2,3,5,6,7,8,9) (0,1,4,5,8,9) (0,2,3,4,5,6,7,9) (3,4,5,9) (1,2,3,4,5,6,7,8) {192,65,72,67,229,220,196,179,213,215}
[###..#.#] (2,3,5) (1,4) (1,2,5) (0,1,2,4,5,6) (0,4,6) (3,4) (0,1,2,5) (0,2,3,4,6,7) (2,4,6,7) (0,1,2,3,5,7) {73,48,232,50,216,55,206,190}
[.###..##] (0,1,3,4,5,6,7) (1,2,3,4,6,7) (0,3,4,5) (0,1,4,5,6) (0,2,3,4,6,7) (0,4,6,7) (2,3,6) (0,1,2,3,4,5) (0,7) (4,6) {49,29,39,54,62,33,53,27}
[####] (1,2) (2,3) (0,1,3) (3) (2) (0,1) {18,20,22,31}
[.......#] (0,1,3,4,5,7) (5) (0,2,3,4,5,6) (6) (2,3,4,5,7) (0,1,2,3,7) (0,2,4,6,7) (1,6) (0,1,2,4,5,6) {63,39,164,166,165,151,42,170}
[#.#.] (1,3) (1) (1,2) (0,1,2) (0,3) (3) {25,47,27,25}
[.###] (0,3) (2,3) (1,2,3) (1,3) {132,23,26,165}
[..#...] (0,3,4) (2) (1,2,3,5) (0,1,3,4,5) {19,9,17,25,19,9}
[##.#] (1,2,3) (0,1,3) (0,1,2) {123,138,15,138}
[..##...#.#] (0,1,3,4,6,8,9) (0,8,9) (0,2,4,5,7,8,9) (0,2,3,7) (2,3,5,8,9) (0,1,2,3,4,6,9) (0,3,4,6,8,9) (1,3,6,7,9) (1,2,3,8) (0,6,7,9) {57,57,53,74,43,19,50,39,53,77}
[.#.#..#.#] (1,3,4,5,6,7) (1,7) (2,8) (1,3,4,5,7,8) (0,1,2,4,5,6,7) (0,8) (3,5,8) (1,3,5,6) {8,23,4,17,3,19,6,19,21}
[...######.] (0,2,3,4,6,8,9) (1,3,9) (0,1,2,3,4,5,9) (0,2,4,6,7,9) (3,5) (0,4,5,8) (0,3,5,6,8) (1,2,3,5,6,7,8) {34,3,20,37,24,30,29,8,27,20}
[.#...] (0,2) (1,3) (2,3) (0,4) (2,4) (3) {19,5,152,10,155}
[##.##.#...] (2,4,6,7,8,9) (1,3,9) (2,4) (1,3,5,6) (0,2) (0,1,2,4,6,7,9) (1,6,8) (0,1,3,4,5,6,9) (0,2,3,4,5,6,8,9) (0,1,2,7,8) (2) {40,62,63,38,42,26,60,29,42,44}
[##.###.] (0,3,5,6) (0,1,3,4,5) (0,1,5) (0,3,4,6) (0,1,3,4,6) (0,2,3,5) (4,5) (1,2,5,6) (1,2,4) {50,28,22,34,27,47,21}
[.#.##..##] (3,5,7) (0,1,3) (1,2,5,6) (0,3,6,7,8) (4,6) (5,8) (3,8) (0,3,4,5) (1,2,3) (0,2,3,4,6,7,8) (8) {26,33,25,65,16,34,6,7,35}
[.#...#..] (0,3,7) (1,2,6) (0,1,4,5,6,7) (2,5,6) (0,7) (0,2,5) (1,3,4,5,7) {34,52,23,18,33,37,41,45}
[##..#..#..] (0,1,2,4,5,7,8,9) (3,4,6,9) (0,1,3,5,6,7,8) (0,2,3,4,6,7,8) (1,2,4) (1,3,4,5,6,7,8) (0,1,2,4,5,6) (0,1,5,8,9) (1,3,4,5,6,7,8,9) (0,4,7,9) (0,1,6,7,9) {71,59,35,53,80,48,57,75,63,62}
[###.#....#] (0,2,7,9) (0,5,6,8) (1,2,4,5,7,8,9) (3,7) (0,7,9) (4,6,8) (2,4,8) (3,5,7) (0,1,2,3,4,5,7) (0,1,3,4,5,8) (1,3,5,6,8,9) (2,8) {59,45,56,52,66,51,25,62,73,34}
[.###] (2,3) (0,3) (1,2,3) {107,18,36,143}
[....##] (3,4) (0,5) (0,1,3,5) (2,4) (3,4,5) (4,5) {143,8,16,32,59,173}
[.##.....] (1,4,5,6,7) (0,4,5,6,7) (1,2,4) (2,5,6) (1,2) (0,1,2,3,6,7) (1,2,3,6,7) (1,3,4,5,6,7) {23,167,69,33,139,144,165,148}
[...#..#.#.] (1,3,4) (3,6) (0,1,2,3,4,6,7,8,9) (0,1,3,5,6,7,8,9) (1,2,3,4,7) (2) (0,1,4,6,8,9) (0,1,2,3,4,9) (0,1,3,4,5,7,8,9) (0,3,8,9) (0,1,2,3,6,8,9) (1,2,3,4,6,7,8,9) {89,246,209,234,219,28,69,193,88,107}
[##...#] (1,2,4,5) (1,2,3,4) (0,2,4) (2,4) {15,20,204,17,204,3}
[##...##...] (0,5,9) (0,1) (6) (4,8) (0,1,5,8) (2,3,5,7,8) (0,1,2,4,5,7,9) (0,2,3,4,7,9) (2,3,4,5,6,7,8,9) (0,2,4,7) (0,1,3,4,5,6) (0,3,4,6,8,9) {74,35,52,41,64,60,22,52,38,60}
[.#.###] (2,5) (2,3,4) (1,2,3,4) (0,3,5) (1) {9,9,28,34,25,12}
[.##.#.#] (1,2,3,4) (1,2,4,5) (1,2,6) (0,1,4,6) (2,3,5) (1,2) (1,5,6) {12,48,50,29,36,26,20}
[..####..#] (0,1,2,4,5,7,8) (0,2,3,4,6,7) (0,1,2,3,4) (0,1,2,4,6,7,8) (0,2,3,5,6,8) (2,6,7,8) (1,4,8) (1,3,4,5,7,8) (0,6,8) (1,2,4,5,8) (0,7) {189,54,61,39,72,17,46,152,56}
[###.######] (1,2,4,5,7,8) (0,1,2,3,4,6,8,9) (0,1,2,3,4,5,6,9) (1,5,7,9) (2,3,4) (0,1,2,4,5,6,7,8,9) (3,5,6,7) (0,1,2,4,5,7,9) (0,1,3,4,5,8,9) {52,85,78,55,85,91,46,71,44,69}
[.###..###] (1,2,3,6,7) (2) (1,4,6) (1,2,5,6,8) (0,1,3,5,6,7,8) (1,3,5) (0,3,4,5,7) (0,5) {42,59,23,58,31,51,50,49,17}
[..#.] (0,1,2) (1,2,3) (0,3) (0) (1,2) (0,2,3) {30,27,34,20}
[##.#.#] (0,1,2,5) (0,1,4,5) (2,3) (1,3,4,5) {16,140,8,130,138,140}
[.##.####.#] (2,3,5,7) (0,1,2,6,8) (6) (1,2,4,5,7) (0,2,3,5,6,7,8,9) (1,2,4,5,6,7,9) (0,1,2,5,7,8) (0,3,4,5,6,9) (1,3) (0,1,4,5,7,8) {42,56,53,33,27,63,33,62,41,27}
[.#..#] (0,1,3,4) (1,2,3) (0,3) {23,29,14,37,15}
[#####.#.] (1,2,4,6) (0,1,4,5,6) (0,1,2,3,5,6) (0,1,2,6,7) (1,3,6,7) (0,2,4) (0,3,4,5,6) (6) (2,3,4,5,7) {48,56,30,46,58,43,91,24}
[.#....#] (0,1,5) (1,3,4,5,6) (0,4,6) (1,2,3,4,5) (0,1,2,3,4,6) {32,210,20,208,220,192,218}
[#.#...##] (0,1,2,3,5,6) (0,2,3,4,5,7) (0,2,4) (0,4,6,7) (1,2,7) (1,4,5) (0,2,6,7) {57,40,52,26,42,37,43,47}
[.#....###] (3,6,7,8) (1,2,3,4,5,6) (0,5,7) (2,4,5,6) (1,2,3,6) (2,3,4,5,6,7,8) (1,2,4,5,6,8) {17,38,59,40,40,57,60,26,16}
[#####] (0,1,2,4) (1,3) (2,3) (1,4) (2,3,4) (0,4) {27,33,24,25,32}
[.###] (0,2,3) (1,2,3) {3,3,6,6}
[##...#] (0,1,2,4,5) (0,5) (1,4) (0,2,3,5) (5) (0,1,4) (0,1,2) (2,3) {42,40,40,5,25,27}
[.###] (1,2,3) (0,1,2,3) {15,19,19,19}
[####.#.] (1,4,5,6) (0,1,2,3,5) (0,1,2,3,5,6) (2) (2,3) {35,44,68,51,9,44,26}
[#.####.#.] (1,4,5,6,8) (1,2,6,7) (0,2,3,6,7) (0,3,5,6,7,8) (1,4,7,8) (0,1,2,3,4,5,6,8) (1,4,8) {187,46,195,187,36,27,205,183,38}
[.#.##] (0,2,3,4) (2,3) (1,3,4) (0,1,3) {169,2,183,185,169}
[#.#.###] (0,2,5) (0,5,6) (1,2,3,4,5) (5) (1,4,6) (0,1,3,5,6) {29,31,12,19,19,56,36}
[####..#.##] (2,3,4,5,7,8) (0,1,2,3,5,6,7,8,9) (0,1,2,6) (0,4,5,6,9) (0,1,4,6,7,9) (2,7) (0,2,3,4,5,6,8) (0,1,4,6,8,9) {48,44,45,19,44,20,48,34,31,25}
[.#####.] (1,2,3,5,6) (3,6) (0,1,3,5,6) (1,5) (0,1) (0,2,5) (0,3,4) {43,37,29,55,9,52,46}
[#...#] (2,4) (0,1,2,3) (1,3,4) (0,4) {16,9,21,9,37}
[#.###.] (0,5) (0,3,4,5) (0,2) (0,1,2,3,4) (1,2) {65,34,53,36,36,27}
[.#..#.] (1,3,5) (1,2,3,4) (0,2,3,4,5) (0,1,3,4) (0,1,3) (3,4,5) (0,1,2,5) {45,50,21,45,32,15}
[..###] (2,3,4) (1,2,4) (0,3,4) (3,4) (0,1,3) {12,25,17,19,22}
[.###..##] (0,2,5,6) (1,4,5,6) (1,2,3,5,6) (0,4,5,6,7) (1,3,4,6) (1,3,7) (0,4,7) {38,34,22,21,42,37,45,29}
[####] (1,3) (0,1,2,3) {187,203,187,203}
[..#..##.] (0,1,2,4,5,6,7) (0,1,2,3,4,5) (4,6) (0,1,6,7) (1,3,5,7) (0,2,3,4,5,7) {37,38,30,38,42,48,29,52}
[..##] (0,3) (0,2) (1,3) {9,180,8,181}
[#.###.] (1,4,5) (2,3,4,5) (0,1,2,4) (0,1,2,5) (3,5) (1,3,4) (0,1,3) {46,59,45,48,40,44}
[#.#...] (0,1,3,4) (0,2) (0,2,3,4) (3,4,5) (1,2,4,5) (1,2,3) (2) {34,28,48,235,217,190}
[#...###.#] (1,2,4,5,6) (1,2,3,4,5,7,8) (2,3) (0,2,4,6) (0,5,7,8) (0,2,3,6,8) (1,2,4,5) {39,43,81,54,43,62,39,35,55}
[.###.#.##] (0,1,4,6,7,8) (0,4,6,7,8) (0,1,6,7) (0,3,4,5,8) (1,2,4,6,7,8) (0,1,3,4,5,6,7,8) (0,3,4,5) (1,2,3,5,7,8) (1,3,4,7) (4,7) (1,3,7,8) {40,34,17,42,57,32,27,51,54}
[#.#...##] (2,3,4,6) (1,2,4,5,6,7) (3,5,7) (0,6) (0,1,2,4,6) (1,3,4,6) (4,5,7) (1,4,5,6) (0,1,4,5,6,7) (0,1,2,3,6,7) {62,70,56,37,84,48,103,48}
[##..] (0,3) (1,2,3) (1,2) (0,2,3) (2) {20,12,48,32}
[.#.###] (1,2,4,5) (0,1,3) (0,2,3,4,5) (0,5) (0,3) (1,2,5) (0,1,5) (2,4) {50,45,29,27,18,48}
[.####] (1,3,4) (0,1,2,4) (0,2,3,4) (2,4) (0,1,2) {49,48,53,35,57}
[####..###] (0,1,3,4,7,8) (0,4,6,8) (1,7,8) (0,2,3,6) (0,1,3,4,8) (4,5) (2,7) (1,3,4,7,8) (1,5,6,8) (1,2) {39,76,24,56,72,25,13,51,66}
[##.#.#..] (2,3) (2,3,4) (0,3,5) (0,1,2,5) (0,4,6) (1,2,5,7) {55,30,39,25,20,46,20,11}
[#..#.#.#.] (0,3,5,6) (1,3,4,6,7,8) (1,2,6,8) (4,5) (0,1,3,4,8) (2,3,5,6,7,8) (0,2,5,6) (0,2,3,4,5,6,7) (0,3,4,5,7) (0,1,2,3,5,7,8) {258,55,58,283,84,265,273,70,68}
[#....##] (0,4) (0,1,3,5,6) (1,2,3) (0,1,2,3,6) (4,5,6) (0,1,3,4,5) (0,2,3,6) {43,37,21,45,47,42,32}
[..#...] (1,3,4,5) (0,1,2,3,5) (1,2,3,4) (0,4) {36,29,25,29,29,22}
[...##..] (0,1,4,5,6) (0,1,3,4,5,6) (0,1,2,3,5) (0,3,4,5) (3,5) (0,1,2,3) (1,3,4,6) {160,58,21,183,155,163,37}
[##..##..] (2,3,6) (0,1,4,7) (2,4,6,7) (2,4,6) (0,3,6) (1,4,6,7) (0,1,3,4,6,7) (3,4,5,6) (0,3,4,6) {21,24,33,36,48,5,62,38}
[#.....##] (1,2) (1,4,7) (2,3,4) (0,2,4,5) (1,3) (0,6,7) {7,27,35,19,28,5,2,10}
[##.....#.] (0,2,3,6,8) (1,3,4,5,7) (0,4,5,6) (1,2,3,4,6,7,8) (0,1,4,5,6,7,8) (1,2,5,8) (0,2,3,4,7) {33,65,38,41,62,57,41,56,50}
[#...###..] (2,3,4,5,7) (0,1,2,4,7,8) (0,1,2,3,5,6,7) (6,7,8) (4,5,8) (1,3,4,8) (5,8) (0,2) (0,2,3,5,6,7,8) {37,36,48,59,44,79,50,63,80}
[.##..] (1,3) (3) (0,1,2) (0,4) (0,1,3,4) (1,2) {9,28,12,22,5}
[###..#.#.#] (1,2,4,6,7,8) (4,6) (0,2,5,6,7,9) (0,1,2,3,5,6,8,9) (0,1,6,8) (0,2) (1,2,6,7) (0,3,5) (1,2,6,7,9) (3,7,9) (0,1,6,7,8) (1,2,3,4,7,8,9) (0,2,3,4,5,7,9) {182,75,172,36,36,140,203,188,59,167}
[....#..] (0,1,3) (0,4,6) (1,2) (0,2,4) (3,5,6) (1,4,5,6) (0,3) (0,1,3,4) {73,25,18,47,42,12,29}
[....#....#] (0,1,2,5,6,7,8) (0,1,2,3,4,6,7,8,9) (0,2) (0,1,4,5,6,8,9) (2,3,8,9) (4,9) (1,2,3,5,7,8,9) (2,6,7,8) (5,7,8) (0,1,2,3,4,6,7,9) (1,3,5,7,8,9) {37,49,63,30,20,49,52,67,75,41}
[..#.##..] (0,2,5,6) (0,4,7) (0,1,2,3,5,7) (6,7) (1,2,4,5) (0,1,2,4,5,7) (0,1,2,4,7) {197,178,198,155,23,185,40,197}
[###.#] (3,4) (0,2,3,4) (0,2,3) (1,3,4) (1,2,3) (0,1,2) {39,44,54,47,17}
[....#.#.] (3,6) (1,2,3,4) (2,3,6,7) (2,5,6,7) (0,1,2,3,5,7) (2,3,4) (2,3,5) (0,3,4,5,6,7) (3,4) (1,2,3,6) {17,13,48,86,56,34,44,26}
[..#.] (0,3) (1,2) (2,3) (1,2,3) {13,17,20,32}
[..#..] (0,1,2,4) (0,2,3) (2) {4,0,16,4,0}
[...##.] (3,4) (0,2,5) (1,3) (0,1,4) (0,3,5) (1,4) (1,2) {26,47,16,31,29,17}
[#.#.#..##] (2,3) (0,2,5,7,8) (0,6) (2,3,4,5,6,8) (1,3,4,5,6,8) (2,4,6,7) (1,8) (0,2) {42,22,58,39,39,43,54,28,45}
[##.#] (0,1,3) (0,2,3) {10,9,1,10}
[##....] (2,3) (2,3,4,5) (0,5) (1,2,3) (2,3,4) (0,2,3,5) {22,16,56,56,12,33}
[.#...#..] (0,2,3,6,7) (0,1,2,3,5,7) (6,7) (0,1,2,3,6,7) (0,1,2,3,5,6) (0,3,4,7) (4,5) (1,4,5,7) (0,1,2,3,5,6,7) {50,36,49,50,14,35,49,57}
[#.#..#] (2,4) (0,2,5) (2,3,4,5) (1,2,4) (0,2,3,4,5) (1,3,4,5) (2,3) {18,26,65,61,72,56}
[..##] (1,2) (0,2) (0,3) {22,1,11,12}
[.###.###..] (0,1,2,3,6,8,9) (0,5,9) (1,2,3,4,5,6,8,9) (0,1,2,4,5,7,8,9) (0,1,2,3,7,8,9) (2,4,7) (1,2,5,6,8) (3,4,5,8,9) (4,7,8,9) {218,225,238,230,43,42,202,36,239,243}
[.#...#.#.] (4,8) (0,2,3,7,8) (0,1,2,8) (0,2,3,4,5,6,8) (1,2,6) (2,6,7,8) (3,6,8) (0,2,3,4,5,7,8) {25,23,51,35,26,9,47,27,75}
[..#...###.] (0,1,4,5,6,9) (3,4,6,9) (1,2,3,6,8) (0,2,3,4,5,7,8,9) (1,3,8) (0,2,5,7,8,9) (1,2,3,5) (0,3,4,6,8) (3,5) (3,5,6) (2,7) (9) {37,30,35,65,44,39,60,26,38,40}
[..##...##.] (0,1,4,8,9) (2,3,7) (2,3,4,5,7) (4,6,7,8) (5,6) (1,5,9) (0,2,3,4,5,6,8,9) (2,5,6,9) (0,6) (1,8) (1,5,8,9) (2,9) (1,3,4,7) {17,38,39,24,32,49,18,24,35,55}
[###.#] (0,2) (4) (0,2,3) (3,4) (0,1,2,4) (0,1,2) {45,28,45,18,38}
[.###] (0,2) (1,2,3) {19,195,214,195}
[##.#] (3) (1,2) (2) (0,2,3) (0) {114,14,120,114}
[.##...] (1,2,5) (1,3,4) (0,2,4,5) (2) (0,3,5) {11,31,39,21,20,27}
[.##......] (0,2,4,5,6) (2,3,4,6,8) (0,1,2,3,5,6,7) (0,5,6,7,8) (2,3,4,5,8) (1,4,7) (8) (0,1,3,4,6,7,8) (3) (0,1,2,7) {46,32,56,51,44,47,34,43,52}
[.###] (0,2) (0,3) (1) (2,3) {12,3,15,15}
[#.#..##..#] (1,5,7) (0,1,2,3,4,6,7,8,9) (2,9) (0,5,6) (1,4,9) (1,2,5,7,9) (0,2,8,9) (4,9) {23,28,40,3,28,29,18,17,8,65}
[#..#.###.] (1,2,3) (0,2,3,4,7) (1,3,4,5,6,7,8) (0,2,4,5,6,8) (1,2,3,5,8) (0,2,4,5,6,7,8) (0,2,5,8) (0,1,2,3,4,5,7) (2,3,8) (1,3,6,7) {196,226,235,250,204,219,51,222,70}
[...#.] (2,3) (0,2,4) (0,2,3) (1,4) (1,2,4) {37,26,61,26,43}
[..#.#.##.#] (0,3,4,5,6,7,8,9) (0,1,2,5,6,7,8) (0,2,3,4,5,6,7,8,9) (1,2,4,7) (0,8) (5,6) (0,1,2,3,5,6,7,8) (0,1,2,3,4,5,6,7) (0,2,3,4,5,6,8,9) (1,3,6,8) (0,2,3,6,7,9) (1,2) (0,4,5,7,9) {91,200,210,76,78,74,83,76,72,48}
[..#.] (0) (0,2) (1,2,3) (2) (1) (2,3) {32,11,50,15}
[#.##.###..] (0,4,5,6,7,8,9) (2,3,4,5,6,7,9) (4,6,8) (0,1,3,4,6,7,8,9) (0,1,2,3,4,7) (1,2,4,8) (1,4) (0,1,2,3,4,5,6,8,9) (1,2,4,7,8) (0,2,3,5,8) (1,4,5,6,7) (1,4,9) {73,109,75,65,139,66,78,83,82,68}
[.####.#...] (0,3,4,6,7,8) (2,9) (0,1,2,3,4,5,6,8) (1,2,3,4,5,6,8,9) (0,1,2,3,7) (0,2,3,5,8) (0,1,2,3,4,5,6,7,9) (0,1,3,4,6) (0,1,4,6,9) (0,3,4,5,6,7,8,9) {60,44,35,48,45,24,45,33,27,29}
[.###..#] (0,1,2,3,6) (1,4) (3,6) (0,1,4,5) (1,2,4,5,6) (0,1,6) (1,2,5) (0,1,3,5) {47,80,22,28,41,41,43}
[.##..] (2,3) (0,1,2,3) (0,3,4) (0,1,2) (2,3,4) (3,4) (4) {50,37,65,71,59}
[.#..###.] (1,3,4) (0,1,4,5,6) (4,5) (0,1,7) (6) (1,2,3,4) (2,3,5,6) (0,3,4,5,6) {31,28,158,177,46,184,174,10}
[#..#.#....] (0,3,4) (1,4,5,6,7,8) (1,3,4,5,7,8) (0,5,7,8) (0,1,2,3,5,8,9) (0,3,4,5,6,7,8) (0,2,4,8,9) (0,6) (2,3,5,6,7,8,9) (0,2,3,4,5,7,9) (1,2,4,5,6,7,8,9) {84,45,59,70,73,75,52,57,78,59}
[#.#..] (1,3,4) (2,4) (0,2) (0,1,4) (2,3) (1,3) (0,4) {17,29,14,28,25}
[#.#.#.##] (1,4,7) (0,2,5,6) (4,7) (2,3,4,6,7) (1,3,5,6) (0,2,4,6,7) {19,200,38,24,237,17,43,237}
[..##.##...] (0,1,3,5,6,7,8,9) (0,2,4,5,6,8) (1,3,6,9) (0,1,2,3,4,5,7,8,9) (3,4,5) (2,3,4,5,9) (1,2,4,5,8) (0,2,3,7,9) (1,2,6,7,8,9) (1,2,5,9) (1,3) (1,7) {56,86,93,96,79,106,45,49,60,87}
[.#.###] (0,5) (0,4,5) (2,3,4,5) (0,1) (0,2) {247,198,18,4,22,39}
[##.#.] (0,2,3,4) (0,2) (0,1,2,3) (0,1,4) {53,29,33,14,25}
[#####] (1,3,4) (0,2,3,4) (0,2) {36,15,36,31,31}
[..###] (0,2,4) (1,2,4) (0,3) {13,5,9,9,9}
[.#..] (0,2) (1,2,3) (0,3) (1,2) (0,1,3) {29,14,18,21}`,J2=`svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`,Y2=`aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`,Z2=`etv: dfj
vzz: sjr
uyy: vxy
dkh: plc
wix: gix rid
afy: mcc qwm
gqs: jks
ajq: rum qsv
xtm: qdu fmv zle qua
edv: vtg ooa run
ptx: out
lrg: bkn jhm
sxy: hkq ewj uqo
azv: oyt fvy
pyi: gqs kyg qok
fsu: rty syv cyy
plb: xuz onj
rtc: dca iwl
oik: aib
wep: oig syd jzk wfj miu
vtg: aho pmk fyu ncz zay urm idm hir mog get fav yzd tod
lpa: qrk vtf
bld: giq tsm
dap: buc
mrs: izf mig upb
jgz: zlm lub
owr: ldt mmh atk hbl
xck: aon dxx qil
amo: xcr mii bjo vih
qrk: gew plm
qwm: jts jfm slu
jef: pln ekw kev gct bdn mbk aok owg oko
zfc: uof tnc cvp umv
aok: vsp ipu
wyi: lva wcy ehz cww
xlp: wxd uhm
ent: kdt iyl
nps: out
lbf: fct jgv fjv
xdw: wyi dkh lkl gej
zen: btr azo
ocw: ewg dje
cyr: gtn jft rgu
opc: lva wcy ehz
llq: wqs fye
wqp: hur zve gme bsq
cyy: kel
yvq: sqt eyl
wbn: run ooa vtg
trr: cvp
jgn: xdw enq kgm
dbv: zpe dac prb
mcv: fta
kyr: rum qsv gqx
bqm: enq kgm xdw
ocx: out
tzd: pvb
fcx: dca
onj: tam krr
hbf: kgm xdw kel
tam: enq
ucu: bxd bpp uhm wxd
anb: rmq azo btr
umv: tzd sjn lyt pyi tkr fmn fzq gys lej lue nds pfb vsn tly
nrk: tzi ovs fie
fqm: iwl dca
kxc: mxc buc
gnf: vmg
vrt: uof tnc umv cvp
sth: tcy uyy kyi jni
zoy: tse vnq
cvp: lyt pyi tkr tzd sjn tyz dbv jlv pfb lfp vsn lag tly cag gys lej llq lue fzq fmn
cjd: izf
dsh: pzd pkp
zwo: you
rip: zve bsq gme egx
lzm: nps tvp
iyl: fte eyn
ehf: hpu dmh tyj
ldt: zsl edv bye
ceu: aib nyd
wzs: tnc uof cvp
isj: you
she: bzz
ezy: dxz
uoy: zlv dje kuz
ftc: uof
ruq: run syn vtg
qil: yju abb cga
wfj: uof umv cvp
rfg: uoy
nix: you dca
jmk: dsh clr
mbk: ydl kma
vxn: cyr
jlv: dap cso cfg
kma: gwy yqe sjr
syv: kel xpi enq
jur: onj ywl
xrv: tnc uof umv
xuz: wjy
gxq: uxl zpb
fwo: gxq jic
wzp: uof tnc
mmw: pln qbi sod vld fia ekw bdn gct pnu qmb lsh ynt kez gqp mbk nzi owg rna ypn
iev: aon aro
fja: out
pyh: xdw
bza: ooa run
pgq: rgo vli
vsn: kyg gqs qok xyv
kev: ipu
wra: ygj qan wix
owg: rps ixy jtm
afd: meb smh fxy
yys: ajq vvu jft gtn
bsq: jpz kyr
nwj: bgb fvy bvx oyt
vih: yni oik tmb
xzr: ooa syn vtg
gme: kyr jpz gmr
ffx: pnu lsh nvi qmb pln wjg fia ypn oko rna nzi
sjr: kel xpi enq kgm xdw
sof: xdw kgm kel
ooa: xmx pmk cfa jmk arx aho ybp ncz fyu urm mog hir zay afd amo ipk gwv tod ssw yzd wdo get
fek: mkm rys msy rfg
ygj: gix rid jjq
qdv: pff vol yys kvu
mbn: pff yys vol kvu
nvi: dse uyr drp yib
abb: jpb zwo rtc oru
cfg: dtm buc qvu mxc fcx
heo: csx
dfj: qwm
hpu: dga
xfj: qdu fmv
kvu: vvu
qvu: iwl you
yqe: xpi xdw kel
ohw: ydf ftc trr ice
uza: out
fhr: gew ozc plm yin
jks: iwl dca
yci: vli
bxd: anb sqs zen
zpg: pwi biy oxs
lhe: jhm
zve: gmr
dxz: you dca iwl
zlv: yww xzr
bye: syn run
lbs: run
meb: oxh
gvs: pbf vkz kdl zpm xjc
ctg: rys mkm rfg
uzl: gxq ppc ftd
kyc: aro qil dxx
tgd: out
ipu: vtf fhr
xcf: kax rmq
rgu: rum
wcy: mbn vxn exo
jtm: gqb hns
msy: ocw
fta: msq opj pyh
qqp: pnt
fhs: sof vnq bqm
fkr: ooa run syn
oru: iwl
zay: ohw uwi ylt
fbw: gxq ftd
gkz: efh rjf ehf
ypn: ksm dse
smh: mbi
zod: tjc syv gur
clr: ekx pzd pkp
sal: bqm sof tse vnq
biy: msq
ydo: mzz lks
gwy: xpi enq
iul: wxd bpp uhm dpl
xtr: vtg syn
irs: aoy jfc gkz
npo: ecc plc
rgo: zoy ozf dlw sal
hkq: ovs tgd
rmq: ruq pmf
bry: fsu vfl
rbj: tnc
ydl: hbf yqe nur gwy
pwi: xod zad
log: wix ygj
pet: bry
ayv: gkz jfc
mlw: eyn fqb
fpz: ldt mmh
dse: mcv
dac: fsr dxz
wjy: enq xpi kgm xdw
ubn: xuz iiu ywl
qsv: ctg xlp iul sfr owr ucu she jbu rpd his qqe log wra ike qnq
qip: run syn
yag: tcy jni kyi uyy
eyn: hkq uqo
yco: yvq ehs pds
ftd: zpb uxl
hvx: out
tle: you
fyu: bte gvs duj
vkz: rbj
zsl: vtg
rsm: izf mig upb
tyj: vmg
oig: cvp umv
sod: rso ydl vzz
tek: mko dfj
iiu: wjy tam krr
gix: kdj xaf wbn
dtm: dca iwl
rhp: rkt wkx ent
com: you
aho: gvs kpp
tap: mrs zux rsm
gew: tid
ske: qiv
ivz: vtg syn run
xjc: vrt rbj xrv ciz
big: qsv rum
dzc: kel xdw enq xpi kgm
vxy: syn vtg run ooa
yka: kcq
ojj: xfj
fhw: run ooa syn
nns: wkx rkt
azo: itn pmf
slu: big qcc
ozw: tnc umv
cww: mbn vxn qdv
rpd: qns xlj bzz
rjf: lup dmh hpu
fia: rps dss pet jtm
fav: kpp gvs
ice: uof
sjn: bxq fye
jhm: vpv
kcg: jfc
asr: eyn sxy fte
oxh: jgz xpc
wls: nps
dss: xmj
npb: out
giq: pds yvq
qbi: kma xqv
ybp: meb
xod: enq kgm kel
pmk: xbg uwi ylt ohw
atk: zsl edv lbs
bqw: tvp tcs
zxl: out
jfm: qcc
epx: xpi enq kgm kel
miu: tnc umv
mig: qsv rum
ksm: mjd
kif: out
ewg: fhw
aao: gix
syn: yzd ipk pmk xmx ybp arx afd
vqs: bkn
ecx: bkn jhm
kui: tvp
xxk: ztv owl
msq: xpi xdw
ovs: out
fte: ewj uqo
fie: out
tjr: hnn ymb csx mne
ciz: cvp umv uof
vtt: lub zlm
kbi: khv vli
idm: xcr bjo mii
ztv: tjr adc kvg
bjo: yni lmp
sqs: kax btr azo
nds: kyc
tod: mii
vli: dlw ozf sal fhs zoy
jfc: efh
fzq: xck
wuz: kyi uyy tcy
wjg: ipu vsp
syd: cvp tnc
bvx: you iwl
uqo: tss fie
ecc: zux rsm yrg cjd
yzd: wse tjg
lub: uof umv cvp
wdo: bjo
kax: itn pmf
xaf: syn
tcy: qip fkr ivz euw
cuq: out
xej: afy
ojr: gxq ppc
xmj: zod
qnq: wix
plm: epx jgn dzc yzf
oko: jur plb ubn
cpb: lzm wls kui bqw
aro: abb
yqa: bvx
cuw: out
jzi: ovc jgv fjv fct
cso: qvu buc
uxl: cpb cua hpo
rps: xmj gqb hns bry
dhu: cpb
rty: kel enq xdw
pkp: wzs ozw rdz
yin: dzc jgn epx
dmh: ael vmg
tjg: lks mzz jiw
arx: ydo wse
znz: vqs ecx
gmr: rum qsv
oka: che lhe
lfp: kxc cso dap
tcs: out
ynm: rum gqx
lsh: vzz
yzf: xdw kgm xpi kel
vee: sai ent
mxc: iwl
opj: xdw kgm xpi enq
rso: hbf sjr yqe nur
hbl: zsl
btr: itn ruq
buc: you dca iwl
bbd: cuq ptx
ymb: rin
fxy: oxh hph mbi
ssw: cmp tjg wse
eyl: xzt aih ske
plc: mrs zux rsm cjd yrg
lmq: tsm yco
pmf: vtg ooa
mkm: uoy ocw
hir: fxy lmh
mko: mcc fft
xzt: jpt qiv npb
glm: flh lva
tid: xpi enq xdw
kvg: hnn
duj: pbf kdl zpm vkz
fye: ege meg nwj
flh: qdv
fap: biy dwu pwi
mmh: bye edv
bxq: ege yqa
yml: out
zad: xpi kel
ozf: vnq
kbt: yag
eqz: rfg rys
evp: rgo khv vli
vsp: qrk fhr
uwi: zfc ftc trr
his: aao ygj
fvy: iwl
ncz: ohw uwi agx xbg
gej: wcy flh
adc: csx mne ymb hnn
pzd: rdz ozw wzs
csx: bbd rin xli
xyv: fqm
bjw: rgo
cmp: mzz lks
wyc: xfj ghv
mog: gvs duj
qok: fqm zob jks nix
jni: ivz qip
jbu: qns
ipk: gvs duj bte
ooi: cuw zxl vpv
oxs: xod pyh opj msq
jpb: you iwl
hur: jpz
pyd: out
xli: ptx yml uza
kdt: sxy fte
qpq: ztv kcq
fqb: nrk
lyt: pvb cfg cso
owl: yva heo tjr adc
qan: rid gix
lag: bxq
tse: enq xpi kel
zux: upb mig
qet: ywl
yww: run syn vtg
enq: dkh lkl wyc jvl rip etv tek twe xej wqp wyi opc gej ojj glm
gys: dac prb
cua: fnn kui wls bqw
yju: oru rtc com jpb
lva: mbn exo
qiv: out
jiw: umv cvp uof
gqc: big
yni: aib nyd
jvl: xfj xtm ghv
gur: xdw xpi enq kgm kel
xbg: trr zfc
jts: big
fwa: fjv jgv ovc qqp
hns: zod fsu
lej: zpe prb ezy
dga: fja
ycs: ehs
zpb: cpb hpo
jpz: rum qsv
exo: vol kvu
kel: twe sjk gej npo xrh glm wyc lkl rip
ovc: znz pnt
qcc: rum qsv
tnc: jlv dbv tyz sjn tzd pyi fzq lue nds llq lej gys cag lag vsn lfp pfb
pnt: vqs lrg ecx
upb: gqx
kdj: syn ooa
pds: sqt lkn
jzk: umv uof
xlj: sth wuz
gqp: dss
fmv: gqx rum qsv
yva: mne csx
vnq: xdw xpi kgm kel
izf: gqx rum
rna: ubn qet
sfr: mmh ldt hbl
hph: ozy xpc vtt
cga: zwo com
bpp: zen sqs anb xcf
vol: rgu
kyg: zob fqm jks nix
che: ooi bkn
dpl: sqs anb
get: xcr
cfa: clr iua
vld: ubn jur qet
qdu: qsv gqx
afz: sai ent wkx
bdn: dse uyr drp
lue: xck rdy
efh: gnf lup tyj
gtn: gqx
pln: pgq
bte: vkz kdl
jnv: cua cpb hpo
ppc: dhu jnv uxl
lmh: oxh
mjd: pwi oxs dwu
egx: jpz
ekx: wzs rdz
ydf: umv tnc
vmg: fja meh
pvb: fcx buc dtm
ylt: ydf trr zfc ice
ujj: wxd uhm bpp bxd dpl
ktf: wix aao
vbp: qns kbt bzz xlj
kgm: wqp opc gej ojj npo glm xrh lkl wyc rip xej
ghv: qua zle
run: ncz fyu pmk cfa xmx ybp arx aho jmk tod ssw ipk gwv fav get wdo zay mog hir idm urm amo afd
yib: zpg mcv mjd
uof: tly lag vsn lfp lue nds llq gys lej cag fzq fmn tkr pyi sjn tzd dbv jlv
ixy: hns
ewj: tss tzi ovs fie
euw: syn run ooa
xqv: nur hbf yqe
fft: slu jts sqf
wqs: azv meg ege nwj
kuz: flj xzr xtr yww fhw
meh: out
tly: iev xck
vpv: out
zpe: isj ava
wxd: xcf
cag: xyv gqs qok
svr: ffx jef mmw
pff: vvu gtn jft
gct: lpa ipu
xia: ztv
mkk: aoy jfc
bkn: vpv kif cuw
agx: ftc ice
mii: ceu
lkn: xzt aih ske
hnn: rin bbd
czr: bzz xlj
khv: ozf dlw fhs zoy
ozy: lub
mbi: xpc vtt ddt ozy jgz
lmp: wep
xrh: ecc plc tap
yrg: upb
wwm: hbo yco tsm giq ycs
zlm: tnc uof
wse: lks mzz
tsm: pds
rid: kdj xaf wbn
ehs: sqt
jjq: wbn bza xaf
sjk: egx bsq gme zve
gqb: zod fsu
prb: isj fsr
jgv: znz oka
krr: kel xpi enq xdw
flj: ooa vtg syn
rdy: aro aon
uhm: sqs
nzi: lpa
ael: meh hvx
tzi: out
nyd: wfj miu jzk syd oig
rin: pyd uza
vvu: rum qsv
kpp: zpm xjc vkz
aon: yju
aih: jpt
urm: fxy
kez: kma xqv
nur: kel xdw enq
fmn: ezy zpe
rkt: kdt iyl asr
zpm: rbj ciz
tss: out
zob: iwl dca you
pfb: cso cfg pvb dap
hbo: ehs
gqx: fpz owr iul wra log qqe eqz rpd ike ujj
xpi: etv rip jvl lkl wyc dkh xrh tek xej glm npo gej ojj sjk wyi wqp opc
jft: rum qsv gqx
pbf: vrt ciz
tvp: out
bgb: iwl
lup: ael vmg dga
sqt: ske
lks: umv cvp uof
pnu: kbi yci evp pgq
dxx: cga
oyt: dca iwl
rum: ujj ike fek eqz qqe his rpd ktf ucu fpz czr owr sfr vbp ctg xlp
qua: rum
ozc: jgn
tjc: kgm
qns: yag sth
jpt: out
gwv: clr dsh
dca: yka fbw nns jzi irs uzl kcg ojr lmq rhp afz fwo lbf xxk xia wwm bld mkk qpq ayv
mcc: jts gqc
iwl: jzi kxt nns fwa uzl irs lmq afz xia xxk lbf vee ayv qpq bld
ehz: exo vxn mbn
dlw: tse sof
itn: syn ooa run
fjv: znz
qqe: rys sqo
zle: gqx rum
ike: wxd bpp bxd dpl
kyi: fkr
vtf: ozc gew
ava: iwl
fct: oka znz pnt
hpo: wls kui bqw fnn
xmx: dsh iua
lkl: mko
vfl: syv rty gur
wkx: kdt iyl
rys: mby ocw
tmb: wep nyd aib
sqo: uoy ocw
bzz: wuz
mby: ewg zlv
xcr: yni oik ceu tmb lmp
jic: dhu jnv uxl zpb
aoy: rjf ehf
tyz: iev
mzz: tnc umv cvp
rdz: uof tnc
xpc: lub zlm
uyr: zpg mcv fap
mne: bbd xli
kxt: sai
ekw: pgq evp bjw
sqf: ynm big
drp: mjd zpg fap
meg: tle oyt bvx bgb fvy
fsr: dca
dwu: opj zad xod pyh
ddt: wzp
tkr: dac prb ezy
you: nns ojr rhp yka fwa xxk xia wwm kcg
dje: flj
kdl: rbj vrt xrv ciz
fnn: ocx
kcq: kvg yva tjr adc
ynt: pet dss rps
aib: syd jzk miu
qmb: ubn
ege: fvy bgb tle
sai: mlw
twe: afy mko dfj
iua: pzd pkp
ywl: krr tam`,n4=`0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2`,L4=`0:
.##
##.
###

1:
##.
##.
###

2:
###
#..
###

3:
##.
.##
..#

4:
#..
##.
###

5:
###
.#.
###

47x39: 64 44 38 43 38 53
43x46: 55 51 38 49 56 56
43x45: 30 41 37 40 37 25
35x43: 27 22 32 22 29 22
39x41: 37 31 45 45 44 46
50x41: 57 56 52 58 58 37
47x39: 30 25 39 27 37 36
48x45: 33 32 41 39 46 49
47x48: 59 57 53 61 64 55
38x44: 29 36 18 22 29 34
46x44: 60 57 50 39 53 49
47x43: 45 60 51 49 48 57
36x42: 36 46 46 36 32 35
45x37: 42 42 38 48 49 40
43x41: 25 31 25 30 33 37
37x38: 36 33 40 33 44 31
49x40: 31 36 27 37 33 44
46x43: 30 36 34 36 33 40
38x38: 20 16 34 24 27 23
42x38: 27 30 29 34 24 24
43x38: 45 36 41 37 41 50
49x36: 42 51 37 48 43 51
38x46: 50 43 36 51 45 46
40x41: 31 45 46 45 53 35
40x50: 60 46 44 58 52 50
35x41: 31 24 21 21 22 24
44x40: 29 33 40 29 26 24
42x36: 35 39 52 37 42 28
45x45: 38 36 26 47 39 38
46x36: 39 38 45 43 40 50
36x36: 35 34 29 35 32 35
43x45: 44 63 40 45 44 60
44x47: 58 51 48 45 58 57
44x40: 36 47 54 49 43 43
37x45: 48 53 42 40 24 46
40x40: 46 36 39 46 49 33
41x36: 38 49 35 33 37 34
38x42: 38 44 42 47 45 32
37x43: 37 43 36 48 40 43
36x37: 33 35 46 35 32 24
40x47: 49 42 51 58 46 46
49x38: 52 47 45 58 51 37
49x42: 36 40 43 32 36 36
47x38: 46 45 47 40 57 40
47x48: 66 66 54 54 48 57
44x50: 61 59 51 61 48 59
38x42: 34 44 40 38 47 43
41x45: 51 50 44 45 52 42
40x40: 40 40 37 47 39 45
49x45: 43 29 38 41 44 45
45x39: 41 59 52 34 43 38
39x45: 42 48 47 40 45 47
45x35: 25 32 23 26 37 22
42x48: 54 40 49 54 64 52
39x43: 43 47 45 40 39 43
46x48: 54 60 52 53 70 52
48x39: 38 29 32 31 32 46
41x47: 30 33 36 27 29 39
46x44: 55 45 45 48 63 56
39x43: 50 46 35 41 46 40
38x37: 24 24 23 29 25 19
48x47: 33 41 49 47 36 34
45x44: 27 37 46 33 35 32
41x48: 27 36 34 40 37 34
36x39: 40 42 35 35 35 29
37x37: 34 26 20 24 20 19
37x39: 29 18 30 24 23 31
35x40: 33 39 37 44 22 41
46x41: 37 53 50 53 56 44
50x38: 29 31 30 30 35 37
39x39: 29 18 31 30 31 29
41x36: 38 42 30 38 35 44
44x36: 34 31 27 17 25 34
42x35: 35 51 42 25 31 38
38x42: 21 29 28 33 30 27
36x48: 43 44 44 44 51 41
36x47: 43 44 45 48 43 39
37x42: 58 30 41 34 41 34
42x42: 39 32 26 29 34 35
48x37: 24 29 34 35 37 33
38x41: 24 27 31 30 27 16
46x49: 58 71 47 57 58 56
48x35: 40 47 50 45 28 47
49x50: 56 72 74 49 67 56
37x39: 32 29 42 28 47 43
43x35: 31 51 37 40 36 37
38x39: 49 36 44 46 26 28
50x40: 43 34 26 26 37 42
45x43: 41 50 57 53 58 41
39x39: 37 32 54 43 30 38
40x44: 26 28 36 34 24 33
47x49: 34 36 47 35 40 48
48x39: 36 36 42 32 29 32
48x40: 53 46 49 55 54 41
39x45: 48 47 53 41 44 36
35x48: 24 29 29 37 28 28
41x36: 34 26 48 33 46 40
36x43: 32 27 34 31 26 17
48x41: 53 50 55 40 57 46
42x39: 33 47 52 40 37 42
36x41: 35 40 31 34 42 45
42x44: 47 62 53 31 33 52
48x42: 42 51 58 51 49 59
43x36: 44 43 31 38 46 37
39x50: 38 27 35 32 41 34
47x49: 58 54 55 59 63 66
43x50: 57 60 56 51 57 49
43x38: 32 44 41 50 49 39
44x38: 55 37 35 38 56 37
42x39: 41 41 41 37 49 43
41x38: 31 31 22 22 24 25
44x39: 40 49 51 36 37 48
49x50: 61 73 61 55 63 62
49x43: 38 44 40 42 29 31
44x41: 26 36 21 43 22 34
50x46: 59 58 72 47 61 54
35x49: 41 38 39 55 42 52
48x43: 61 50 45 63 47 54
46x35: 35 23 24 35 23 25
44x39: 32 32 22 27 32 36
41x41: 32 21 30 25 33 27
40x37: 42 36 34 47 33 38
40x36: 41 44 24 34 30 47
36x47: 55 45 35 39 47 39
49x49: 58 68 52 64 73 57
36x49: 59 47 32 48 42 44
35x35: 20 28 18 15 19 21
45x43: 52 48 61 52 39 45
49x43: 49 50 67 51 50 56
47x44: 58 38 51 45 60 65
48x42: 45 68 46 41 56 52
44x40: 34 42 21 25 24 36
45x44: 40 68 50 53 39 54
50x50: 46 42 37 45 46 39
45x35: 36 43 43 46 45 32
49x48: 34 43 48 41 43 46
42x36: 32 21 28 14 39 34
50x35: 39 47 43 40 51 49
39x37: 31 30 16 23 30 26
41x49: 43 55 56 56 54 47
45x48: 51 64 52 57 49 59
44x48: 42 52 70 58 53 51
46x41: 41 57 43 42 50 56
50x47: 58 61 60 52 65 64
35x48: 46 45 38 36 52 41
41x44: 42 45 44 56 49 45
44x43: 33 35 39 28 33 27
43x38: 36 39 32 53 49 47
44x35: 46 37 43 33 52 26
37x45: 31 27 35 23 35 28
41x48: 57 56 51 52 48 39
40x43: 41 44 53 38 36 50
50x43: 55 53 57 49 68 49
47x36: 46 43 41 47 39 45
45x40: 27 44 39 23 31 31
36x37: 22 26 25 22 26 23
36x42: 42 34 40 47 38 34
46x38: 51 39 54 45 36 43
36x40: 36 38 34 39 41 35
35x46: 42 45 46 32 45 36
43x49: 61 44 50 49 53 66
49x43: 25 32 46 45 44 31
35x45: 43 36 41 50 32 42
39x35: 30 42 35 30 42 31
45x45: 44 56 46 67 52 51
41x41: 34 36 45 46 45 54
38x43: 36 42 38 53 35 50
43x37: 42 48 40 41 32 41
45x48: 47 66 48 55 52 64
45x48: 60 64 47 53 49 58
46x36: 40 38 51 47 40 40
48x38: 37 45 41 62 45 55
35x35: 19 16 16 24 20 25
37x47: 45 40 48 40 48 46
41x40: 36 22 27 35 27 22
46x41: 48 55 50 39 50 46
43x35: 19 29 18 27 30 30
39x38: 37 35 47 40 33 36
46x35: 38 42 39 40 43 46
40x39: 30 21 30 21 29 38
48x40: 53 40 51 47 56 49
42x44: 51 45 37 59 54 43
38x45: 37 53 43 37 47 45
40x41: 24 23 33 33 26 30
37x49: 50 50 42 44 42 50
35x40: 38 39 35 41 27 36
36x42: 27 26 29 33 24 28
48x49: 37 50 42 39 49 38
44x35: 20 26 26 24 28 30
41x41: 31 33 26 28 24 26
48x44: 61 51 55 54 61 44
38x42: 39 22 25 27 31 23
45x44: 30 25 48 42 34 30
44x40: 53 43 41 45 51 39
41x35: 18 22 22 27 31 22
40x39: 31 30 29 29 22 28
37x50: 53 34 51 51 49 48
43x44: 30 31 34 36 37 28
38x36: 26 20 16 28 28 25
39x38: 36 33 41 41 37 41
45x40: 22 33 28 32 44 35
38x48: 25 35 31 33 33 35
45x48: 47 35 48 36 38 35
36x36: 27 39 29 37 41 29
35x50: 37 24 29 27 28 30
39x46: 43 43 50 51 48 43
44x49: 59 57 56 43 52 61
36x48: 53 44 42 38 42 45
46x36: 31 24 40 30 25 30
47x46: 47 52 54 61 66 56
42x41: 24 28 31 25 36 37
47x49: 45 29 36 44 41 45
44x48: 58 49 56 44 59 57
48x35: 49 42 41 35 39 50
45x45: 39 34 43 36 35 37
36x36: 24 26 31 35 40 45
48x48: 50 52 66 57 66 64
36x47: 44 30 57 32 49 46
50x41: 51 42 49 58 50 67
35x38: 38 26 43 30 29 37
49x35: 46 37 54 38 41 46
44x50: 61 69 61 41 53 49
37x49: 48 43 37 40 51 59
47x42: 47 44 55 58 58 45
35x40: 36 36 29 44 35 38
38x39: 30 31 44 36 41 46
48x40: 39 35 57 48 60 58
50x41: 57 61 60 55 50 33
43x39: 26 31 34 29 27 34
36x49: 42 56 45 51 37 41
46x39: 52 47 33 53 45 48
45x40: 27 36 44 23 29 35
50x50: 49 43 38 44 43 39
39x45: 34 24 33 37 38 29
35x48: 55 45 34 46 45 35
38x46: 25 28 36 33 30 28
36x38: 32 34 43 36 35 31
36x46: 31 54 40 46 49 37
44x50: 48 44 40 29 25 38
47x45: 43 41 35 35 39 31
35x45: 22 31 35 24 21 31
43x45: 51 44 62 44 54 42
42x43: 32 34 33 29 38 30
47x49: 68 61 51 54 57 62
50x38: 52 47 40 46 56 52
48x37: 25 33 40 35 30 29
45x35: 42 38 44 44 35 40
39x48: 52 55 46 44 47 43
43x49: 61 45 51 60 52 57
45x40: 45 47 54 32 44 51
46x38: 37 49 37 35 43 65
42x49: 68 51 45 55 43 54
44x44: 27 40 39 28 25 37
39x36: 30 26 26 20 25 28
46x47: 45 35 40 31 41 32
42x39: 47 45 29 51 44 39
40x50: 49 45 49 57 55 55
46x43: 52 52 42 58 60 44
50x36: 52 52 37 42 47 46
35x47: 35 37 48 35 48 49
48x47: 41 41 45 33 37 43
46x47: 36 40 34 47 26 41
41x47: 54 54 60 39 43 43
46x42: 35 32 29 43 34 36
45x36: 43 40 42 40 34 49
35x37: 34 27 26 47 44 27
37x49: 58 45 54 36 45 38
47x44: 33 23 41 39 42 31
41x36: 43 40 34 36 32 41
35x41: 19 26 28 31 19 19
48x46: 44 39 39 42 38 38
39x47: 32 29 39 33 27 35
49x42: 34 44 26 42 42 36
48x47: 37 36 44 41 35 47
46x43: 24 29 36 40 41 40
45x45: 56 47 54 57 44 54
35x50: 31 23 28 32 26 35
39x49: 35 46 30 32 31 33
47x35: 20 28 21 31 33 31
41x49: 48 56 57 54 50 45
44x44: 52 53 52 36 54 48
46x49: 50 42 32 39 37 39
45x47: 59 60 46 53 58 50
50x42: 53 46 57 62 49 58
47x48: 42 45 30 49 33 41
42x41: 30 28 30 34 29 31
42x38: 40 50 40 45 34 37
47x37: 34 28 33 31 25 28
46x37: 36 24 31 31 24 34
42x48: 40 51 31 30 36 36
41x35: 43 37 25 31 49 36
43x43: 40 35 37 22 29 33
43x43: 41 33 36 27 27 32
35x43: 28 23 24 31 28 20
42x50: 51 63 54 45 54 54
41x44: 23 36 31 26 31 34
43x40: 45 40 45 52 49 37
47x37: 48 40 43 47 49 42
46x47: 59 60 54 49 55 54
36x46: 28 32 40 25 30 24
45x48: 54 66 64 42 57 46
48x49: 46 36 35 49 44 45
46x38: 38 46 50 53 48 37
38x37: 25 19 29 24 21 26
35x48: 38 48 46 50 39 39
44x38: 30 27 28 24 28 30
50x39: 41 26 49 31 33 28
37x47: 32 49 51 47 55 36
44x49: 52 67 58 59 47 49
38x40: 30 39 29 48 47 45
46x44: 42 27 32 36 37 35
46x42: 38 29 36 34 44 28
50x37: 45 53 38 57 51 44
50x50: 53 70 72 61 51 75
36x46: 34 31 33 29 29 24
47x47: 55 61 47 57 56 64
44x41: 39 51 42 47 46 53
41x50: 30 31 42 32 44 29
45x43: 55 53 34 59 45 54
48x43: 58 36 58 77 56 40
47x37: 45 47 46 48 40 42
38x45: 41 46 38 45 47 47
40x48: 43 40 27 35 30 32
47x35: 57 39 43 49 39 28
41x38: 22 22 32 33 24 23
47x35: 23 28 32 22 24 35
43x46: 64 49 49 55 38 49
41x43: 29 25 34 25 33 36
49x35: 39 34 16 31 33 23
35x45: 32 26 24 21 36 25
36x50: 52 40 47 44 42 51
35x40: 20 30 23 25 23 22
44x40: 55 54 39 44 40 38
43x36: 32 50 36 42 38 41
47x44: 56 49 45 57 56 57
44x43: 26 42 38 33 31 26
41x39: 48 39 39 35 44 40
38x46: 39 54 45 52 44 37
37x35: 21 26 20 25 19 20
39x36: 40 41 26 32 36 40
40x40: 30 25 33 33 26 21
45x35: 39 40 34 42 40 48
47x42: 55 50 58 51 57 34
45x35: 34 48 37 56 34 37
44x38: 40 36 45 44 45 48
38x48: 44 47 53 48 38 50
38x36: 36 35 35 34 33 37
45x41: 43 51 47 45 45 52
36x36: 21 32 22 21 24 23
47x35: 43 43 43 48 42 36
37x35: 38 34 22 27 41 37
36x47: 28 30 35 29 33 24
39x39: 32 28 28 29 21 31
44x44: 44 55 49 59 51 43
38x35: 37 35 35 31 27 38
48x45: 41 37 39 36 46 41
44x49: 49 54 54 59 55 62
37x47: 45 53 43 41 47 38
46x37: 32 24 34 26 33 30
47x42: 39 40 35 28 34 34
47x39: 47 50 37 47 58 45
43x41: 38 42 53 48 36 54
40x42: 45 47 47 39 40 39
41x36: 34 30 47 41 42 35
43x39: 37 47 54 43 34 42
50x45: 49 63 67 56 58 53
40x37: 36 47 41 33 27 41
46x43: 34 39 24 30 37 46
48x39: 50 49 49 45 46 48
37x41: 26 32 22 26 20 30
39x35: 24 25 23 30 19 21
37x43: 27 24 23 34 33 27
35x35: 27 32 39 32 33 26
42x42: 33 35 25 36 34 32
49x39: 55 49 55 47 37 49
48x36: 23 39 35 31 31 32
44x38: 22 36 28 23 34 24
40x47: 49 51 46 41 46 54
50x40: 60 67 45 42 42 48
44x47: 35 43 28 25 37 42
42x39: 51 34 33 42 53 41
47x49: 38 44 36 40 33 48
42x44: 46 52 43 48 50 46
42x46: 45 45 44 45 56 62
47x42: 59 58 40 61 44 44
44x37: 33 24 23 32 20 35
38x38: 39 38 36 31 47 31
40x46: 43 38 42 49 63 51
44x50: 54 61 56 58 49 60
48x36: 31 30 29 30 40 31
36x46: 22 28 40 31 40 19
46x37: 34 24 31 25 30 36
40x43: 24 26 35 36 33 28
44x41: 35 31 29 33 25 28
48x37: 34 30 30 23 39 36
44x48: 58 61 60 37 44 59
36x40: 42 38 35 40 39 29
49x46: 55 68 48 62 62 54
49x37: 51 57 41 46 38 45
40x44: 42 46 40 49 51 45
40x37: 28 27 27 21 30 22
46x43: 48 59 49 44 54 49
47x50: 68 71 60 56 50 54
38x42: 56 39 39 36 39 35
49x36: 29 22 32 35 38 35
36x42: 34 29 26 31 17 31
36x42: 46 31 45 36 39 35
47x43: 46 34 33 26 37 34
42x42: 46 37 48 41 43 55
36x42: 43 41 34 32 39 42
49x41: 55 55 56 58 51 36
40x36: 41 34 37 38 35 37
43x42: 41 51 51 52 35 48
46x39: 28 35 36 30 34 31
45x39: 39 27 26 30 37 36
37x41: 28 24 28 30 17 28
44x39: 32 29 25 32 32 31
49x37: 43 53 40 55 49 42
43x43: 39 47 53 43 52 50
39x49: 28 53 27 38 30 31
38x39: 21 28 24 27 35 21
35x44: 25 33 24 27 19 25
47x49: 57 48 75 69 56 52
50x35: 32 25 28 24 32 34
38x37: 18 32 18 23 26 27
37x44: 22 29 27 29 32 28
50x50: 57 69 68 69 63 60
40x45: 43 51 42 51 56 37
44x37: 40 34 53 45 43 37
43x43: 41 33 23 29 34 35
41x37: 31 29 30 28 18 20
43x49: 58 56 50 44 63 52
45x39: 34 32 27 33 35 33
49x49: 55 72 59 77 54 56
50x47: 29 34 46 50 46 34
41x47: 50 50 48 49 52 48
45x50: 56 52 76 49 50 60
47x36: 42 52 37 38 50 41
42x36: 26 21 27 28 37 28
46x43: 50 54 41 44 67 49
36x46: 40 47 41 36 42 47
49x36: 60 35 41 40 50 45
35x49: 35 27 30 25 32 26
39x41: 29 28 22 27 31 32
35x46: 31 24 28 29 25 28
40x47: 51 54 37 44 54 49
45x49: 37 32 43 39 41 48
50x36: 44 39 50 44 50 50
46x43: 37 35 35 39 32 32
42x41: 44 55 42 41 50 33
50x44: 44 44 38 32 29 37
41x43: 35 47 38 45 49 58
44x36: 30 32 27 29 31 19
43x45: 54 58 43 52 46 45
38x43: 31 31 39 21 20 25
35x48: 34 60 39 39 46 40
41x38: 27 25 35 20 20 29
45x36: 61 41 40 46 37 25
36x43: 24 21 26 35 29 33
35x49: 29 30 32 22 34 29
44x39: 47 39 46 44 41 47
46x45: 53 60 49 49 48 58
40x41: 25 24 32 28 35 25
39x44: 27 35 27 28 33 31
42x50: 45 34 25 34 48 37
35x48: 29 25 32 34 28 28
50x48: 43 44 41 44 42 41
35x49: 50 39 46 34 43 49
47x47: 30 40 42 38 39 36
48x50: 59 56 68 58 66 62
43x49: 63 52 63 42 54 47
43x48: 42 40 30 44 33 35
45x43: 33 39 34 28 33 42
41x43: 54 41 43 39 46 47
41x50: 39 31 32 44 30 32
37x35: 40 30 38 25 24 39
49x36: 49 39 44 54 52 37
45x44: 32 36 31 36 38 36
40x37: 28 32 25 19 25 26
36x35: 27 28 33 38 33 37
49x40: 46 52 47 54 51 53
46x46: 47 66 49 45 60 57
49x42: 49 45 62 61 51 51
39x36: 19 28 26 28 31 24
48x43: 55 47 50 58 58 52
49x44: 36 38 33 34 35 48
35x41: 22 26 32 15 21 26
42x49: 52 50 52 47 66 50
46x38: 33 38 59 50 46 45
42x37: 34 35 49 41 43 38
46x37: 41 32 39 48 70 37
46x41: 38 49 54 48 54 48
39x36: 26 23 29 21 27 29
38x38: 37 39 35 36 43 33
39x41: 35 27 25 22 32 28
49x37: 29 29 37 41 35 21
45x50: 55 49 56 64 69 57
46x35: 52 35 40 38 54 30
49x37: 37 36 22 30 32 34
47x38: 46 42 42 47 44 54
38x37: 38 32 35 31 36 43
36x44: 41 46 45 28 44 37
40x49: 44 51 58 57 52 42
45x38: 40 27 31 28 24 30
36x47: 41 51 44 37 39 46
49x49: 45 33 40 40 47 50
40x39: 37 40 41 40 37 45
35x43: 42 33 45 45 34 34
45x45: 60 49 55 52 60 37
47x50: 30 44 38 42 53 32
49x44: 55 58 49 57 58 56
45x48: 69 45 59 47 55 55
37x37: 24 18 31 29 20 22
45x48: 65 52 51 52 58 54
40x50: 52 58 45 51 58 45
40x47: 44 45 60 54 46 42
43x39: 44 40 54 44 46 31
40x40: 43 31 44 42 44 43
45x35: 43 41 37 37 43 41
35x38: 36 36 32 24 42 33
42x35: 25 19 41 23 20 25
40x45: 32 31 34 33 27 37
48x42: 57 46 40 50 65 54
44x41: 43 49 50 46 48 42
42x48: 41 43 35 30 35 39
41x36: 21 27 21 30 30 26
35x48: 36 28 27 29 26 30
38x50: 47 51 41 56 52 48
37x36: 32 32 34 37 48 25
41x35: 39 46 46 35 26 27
47x39: 39 37 41 47 73 49
46x35: 47 44 39 48 34 37
44x42: 45 51 54 36 51 45
38x43: 22 33 34 23 25 31
42x47: 52 61 55 48 41 45
40x40: 45 43 39 37 45 37
50x37: 22 43 36 29 22 39
37x45: 42 54 35 49 40 38
35x41: 38 36 25 40 43 41
47x48: 62 53 53 54 57 67
36x44: 46 45 42 45 31 35
50x45: 73 53 38 65 53 66
47x47: 40 34 35 39 33 44
39x46: 46 40 37 49 51 55
40x44: 38 51 53 40 41 46
48x42: 40 48 68 60 54 43
47x35: 41 44 44 36 37 49
35x46: 39 49 38 51 36 37
42x42: 39 46 39 48 43 57
48x41: 56 41 52 52 55 48
39x48: 52 46 49 48 47 46
41x44: 55 48 44 53 47 33
39x38: 28 18 23 31 34 22
50x40: 33 35 40 33 31 36
49x46: 54 53 52 68 65 59
41x50: 58 59 69 45 49 33
41x48: 32 33 36 33 36 38
39x47: 25 31 33 35 46 24
40x36: 30 31 22 29 23 20
50x45: 38 45 35 42 41 39
43x43: 35 29 26 40 35 30
36x42: 30 24 25 26 27 36
50x44: 52 54 58 54 64 57
50x36: 31 32 35 27 25 42
44x44: 47 52 42 61 53 47
40x41: 45 49 44 32 37 42
48x37: 36 35 31 24 34 31
41x50: 37 32 30 24 36 49
42x38: 37 36 50 42 40 41
50x49: 36 52 46 39 44 39
44x48: 57 61 59 50 46 50
45x38: 43 42 41 48 47 44
47x42: 36 34 42 40 30 27
35x44: 20 21 24 32 26 31
47x44: 32 44 36 31 29 37
41x42: 47 42 44 35 55 41
46x37: 43 42 41 46 44 47
40x42: 50 44 44 38 40 41
38x44: 36 44 46 53 48 34
46x38: 34 32 25 29 28 31
50x41: 51 43 52 55 57 59
48x35: 23 21 36 26 39 31
50x41: 40 28 38 37 38 26
49x43: 59 51 58 58 43 55
35x36: 25 30 32 41 29 39
43x50: 60 46 65 56 61 44
46x39: 34 37 28 35 29 31
38x47: 31 34 26 31 24 33
45x45: 63 55 50 53 37 52
36x39: 39 31 32 40 32 43
46x47: 55 49 57 53 61 58
46x45: 41 43 37 32 35 36
44x48: 40 36 42 33 32 41
41x38: 38 44 46 38 38 35
43x35: 42 31 43 37 30 47
41x50: 39 26 41 32 35 34
35x39: 34 33 44 31 34 33
47x39: 35 41 33 27 31 27
40x36: 15 33 34 23 19 31
40x45: 39 48 53 38 53 45
38x36: 38 31 32 32 35 42
41x46: 28 30 29 35 38 35
46x39: 42 55 45 34 40 56
47x47: 33 39 42 35 32 44
50x50: 55 65 66 75 63 64
48x50: 38 42 52 47 43 34
46x39: 50 38 53 37 47 49
36x40: 27 27 27 31 21 23
46x37: 33 30 27 28 30 31
47x36: 53 44 43 47 32 41
49x45: 59 60 49 57 65 51
43x50: 43 66 55 56 61 51
50x39: 53 49 49 57 47 47
47x45: 46 63 51 50 58 57
49x41: 51 45 50 56 67 44
39x48: 56 47 52 35 51 44
35x35: 19 26 27 39 38 43
37x49: 42 44 50 55 42 48
40x48: 54 48 43 48 53 50
41x46: 36 33 31 37 29 29
41x46: 48 53 37 57 48 50
42x45: 39 55 42 53 66 40
46x45: 58 41 48 57 69 49
41x50: 58 46 61 55 57 40
46x36: 30 35 34 27 27 26
37x35: 36 32 28 27 41 35
37x48: 40 43 55 36 48 49
38x43: 34 24 26 23 36 24
48x42: 49 32 49 31 29 33
36x44: 26 22 27 32 32 28
38x45: 35 40 42 52 45 52
44x36: 36 53 39 39 43 34
48x35: 39 52 43 42 41 41
49x40: 49 51 45 61 45 53
50x45: 46 46 73 58 62 62
45x37: 49 36 46 38 43 43
44x35: 31 44 48 40 36 38
42x48: 47 41 41 39 23 32
42x35: 37 41 31 41 34 43
39x38: 25 21 27 31 28 24
47x42: 41 37 37 26 38 31
41x50: 41 67 48 57 46 57
37x42: 41 42 37 48 35 38
41x37: 40 36 31 47 39 43
43x41: 25 26 31 33 36 30
38x40: 44 30 38 37 42 43
44x44: 26 38 22 31 46 32
38x42: 37 38 39 48 35 50
41x37: 37 49 33 38 35 41
48x47: 57 58 48 61 70 56
38x44: 42 37 49 36 46 46
35x42: 29 26 30 23 24 22
46x45: 38 34 53 36 30 34
44x46: 31 36 42 27 38 36
36x46: 44 40 49 36 42 42
43x35: 28 33 32 20 21 20
38x35: 36 33 38 25 31 39
38x50: 47 39 63 45 52 46
38x47: 55 41 41 45 48 45
38x43: 39 40 48 41 46 38
36x38: 40 24 36 37 39 36
48x35: 23 33 37 30 22 30
50x41: 29 38 34 42 30 34
38x38: 48 30 39 35 37 33
47x48: 40 45 35 41 41 37
42x37: 33 44 41 35 48 38
40x39: 24 23 30 24 34 33
36x38: 29 20 34 16 23 22
38x49: 52 42 46 57 44 48
40x41: 37 37 40 38 46 54
45x44: 47 28 36 36 24 38
35x36: 28 40 27 32 31 36
48x41: 23 37 39 37 33 38
38x43: 40 42 45 34 46 43
38x36: 37 45 33 25 36 32
36x39: 28 29 22 31 14 31
49x47: 49 66 56 63 62 60
46x41: 31 35 32 34 27 35
43x39: 53 55 38 30 45 34
40x42: 45 49 43 35 46 39
50x36: 47 43 47 38 48 52
42x38: 44 39 39 38 48 38
38x41: 50 40 38 35 37 38
38x45: 33 30 33 25 33 25
48x46: 39 37 48 39 38 39
37x47: 47 50 39 34 46 49
40x37: 20 20 30 32 28 25
47x42: 46 58 45 60 45 52
39x37: 30 27 33 26 19 21
35x37: 36 38 33 32 32 28
47x46: 40 38 33 33 40 41
49x48: 34 44 41 47 39 50
38x40: 40 34 36 37 35 51
44x50: 52 67 47 50 65 57
40x35: 33 30 27 56 32 43
35x41: 38 46 29 35 53 22
44x43: 57 53 55 51 41 34
41x43: 50 37 31 51 52 53
47x49: 48 58 46 61 59 83
45x47: 65 68 52 49 47 42
40x36: 36 33 37 39 34 43
38x49: 38 45 58 49 48 49
50x35: 26 32 34 26 33 25
39x35: 25 26 19 23 30 20
44x48: 33 49 32 43 36 30
49x40: 51 60 45 44 50 50
44x35: 37 40 35 39 54 34
48x39: 53 35 33 31 24 32
36x36: 16 28 24 23 23 29
40x43: 21 31 29 33 40 28
37x44: 59 34 34 39 49 36
39x40: 27 29 26 36 23 28
37x44: 24 25 30 37 31 21
43x36: 26 26 27 37 27 24
49x42: 55 43 53 59 48 60
45x50: 38 44 45 36 37 40
49x40: 66 46 41 57 46 47
37x45: 50 30 41 57 38 44
44x35: 35 47 39 43 39 35
43x46: 42 59 41 49 49 64
36x49: 28 31 40 22 38 32
35x48: 31 29 29 27 30 29
47x35: 25 29 31 32 19 28
42x50: 52 52 61 55 49 54
47x48: 44 47 38 35 38 38
45x38: 35 27 29 31 31 26
36x45: 41 46 49 39 35 38
44x36: 21 22 34 34 23 33
35x48: 32 45 45 54 44 42
44x38: 26 25 26 36 29 26
47x40: 32 27 34 28 25 49
35x35: 38 30 24 32 32 33
49x44: 51 28 43 39 33 30
45x41: 51 46 56 51 54 28
48x46: 54 63 61 60 64 40
40x46: 46 47 39 64 47 45
37x40: 41 34 46 32 44 30
40x44: 37 29 32 29 31 23
37x48: 46 41 45 58 46 41
47x46: 51 58 52 66 57 52
40x50: 44 47 48 61 60 52
44x45: 30 41 38 35 29 37
42x47: 44 44 60 57 51 50
50x43: 48 34 26 34 38 43
48x41: 58 53 47 56 39 50
47x38: 31 27 25 27 34 35
50x47: 44 43 46 36 36 35
45x41: 43 43 46 48 58 48
40x43: 38 56 44 43 47 37
41x35: 30 30 42 39 38 43
37x42: 39 40 37 41 43 40
43x45: 31 32 38 42 33 33
49x45: 61 45 55 60 68 53
36x47: 43 36 48 40 46 47
43x46: 52 58 47 51 40 55
40x44: 44 45 47 46 42 47
38x47: 32 36 24 30 21 36
43x38: 28 32 31 30 27 19
41x43: 46 44 49 46 46 41
43x50: 50 53 48 61 63 59
42x40: 43 42 38 42 53 42
38x47: 37 52 52 40 42 50
35x35: 38 26 31 34 34 27
48x46: 43 45 45 42 28 36
46x44: 51 52 50 62 56 44
40x36: 34 48 32 37 38 33
41x48: 42 24 33 34 30 44
41x49: 30 41 21 34 45 37
47x43: 46 60 48 46 61 50
47x45: 47 50 60 58 50 61
48x49: 62 53 54 69 62 65
47x35: 52 45 44 44 35 33
49x44: 33 28 44 38 42 39
37x41: 40 37 37 28 42 47
43x39: 52 42 42 37 38 45
40x46: 44 53 37 54 52 46
50x39: 45 54 47 44 53 56
44x47: 46 59 58 47 54 53
48x45: 45 51 68 53 64 52
43x42: 45 54 45 48 49 38
40x46: 36 31 35 31 33 29
37x38: 24 24 26 24 17 29
45x48: 46 50 43 41 24 36
43x43: 38 31 24 39 28 36
35x35: 22 11 23 22 20 22
35x46: 42 43 32 40 37 53
38x50: 47 61 50 41 39 51
45x38: 33 29 28 30 26 34
49x46: 41 36 35 52 40 36
44x50: 50 35 39 37 33 29
42x42: 34 31 31 36 29 34
45x41: 32 29 43 35 29 26
43x36: 37 40 40 34 48 39
41x42: 47 39 48 43 44 44
49x35: 46 50 46 48 28 45
37x49: 56 35 32 55 50 54
48x50: 68 58 58 57 67 61
38x39: 35 42 35 36 40 40
46x45: 48 61 49 55 50 56
41x45: 41 31 44 28 22 29
46x50: 62 53 67 54 60 57
46x42: 49 54 57 45 42 48
47x41: 55 39 55 42 53 51
36x41: 32 48 34 35 35 42
39x37: 23 21 28 27 20 36
50x42: 48 60 63 47 51 52
41x46: 50 44 55 48 52 42
47x40: 33 35 34 27 32 34
46x48: 56 62 53 62 52 56
44x40: 35 49 49 45 52 42
35x47: 38 39 45 56 41 38
47x41: 38 27 37 36 25 31
48x40: 30 51 33 29 31 34
50x41: 39 44 61 47 67 58
45x37: 41 50 42 26 45 48
41x35: 34 40 43 36 38 30
45x37: 40 42 40 41 50 44
40x38: 32 35 45 41 34 47
40x45: 46 44 52 43 43 48
46x48: 63 53 51 48 67 57
49x37: 31 56 40 39 53 59
40x36: 45 29 47 29 39 31
36x43: 46 33 41 33 44 40
48x48: 41 45 41 36 42 50
45x36: 29 27 31 36 27 29
40x38: 23 30 26 24 28 25
35x46: 26 35 30 32 19 23
36x37: 38 34 35 34 27 36
45x45: 38 23 41 43 44 36
36x42: 37 48 31 37 42 38
47x38: 57 40 50 51 36 41
45x43: 48 57 51 45 59 38
39x48: 31 30 35 41 38 33
35x40: 37 29 40 31 42 36
45x40: 43 19 36 28 31 38
50x47: 42 40 32 42 41 42
43x42: 40 56 39 49 47 48
35x45: 37 42 36 52 40 39
35x48: 43 52 33 51 42 40
50x36: 44 30 28 25 34 30
39x39: 38 40 41 32 37 44
37x43: 36 34 54 43 35 43
40x49: 59 43 46 46 52 55
37x48: 19 36 33 38 31 35
37x40: 46 35 29 46 29 44
37x37: 37 35 39 37 33 30
43x43: 37 38 35 24 26 36
45x49: 36 31 37 42 54 40
38x46: 41 45 53 42 43 44
46x44: 35 36 31 27 43 37
39x50: 27 46 36 35 33 31
42x43: 38 33 30 24 41 30
43x37: 49 50 35 33 42 34
42x43: 25 33 38 39 31 30
36x40: 35 33 43 33 46 32
39x43: 50 32 49 46 41 41
37x47: 34 55 43 37 41 55
47x49: 54 67 74 62 49 48
39x49: 34 30 35 28 42 38
43x43: 51 45 53 42 38 53
41x36: 27 26 30 29 19 25
41x48: 34 34 40 28 32 39
38x48: 43 38 51 55 37 58
49x45: 56 66 66 66 41 45
40x49: 51 57 55 46 53 39
45x46: 58 58 45 50 46 60
42x47: 62 53 44 42 55 46
50x45: 46 37 39 31 41 45
39x45: 44 46 54 42 48 36
36x44: 37 41 42 40 48 37
48x35: 26 25 39 25 33 28
36x49: 39 34 37 28 31 22
49x41: 34 28 32 42 43 28
35x35: 23 20 15 21 25 16
43x46: 58 37 51 53 41 64
35x36: 20 28 18 23 22 21
47x49: 69 54 71 55 49 54
35x47: 25 47 54 45 41 42
42x47: 30 34 37 43 39 27
38x48: 43 44 48 56 50 43
35x42: 27 25 27 27 24 23
40x42: 32 35 26 24 33 32
38x45: 50 46 41 31 47 45
36x48: 55 42 50 35 41 40
39x46: 48 40 45 56 51 40
41x48: 39 47 53 49 54 61
50x48: 62 67 64 69 57 52
45x38: 26 27 44 34 24 25
47x40: 46 56 59 40 53 34
44x39: 28 36 36 29 32 20
48x43: 35 42 39 39 38 31
46x39: 27 27 35 34 35 37
37x41: 23 47 41 38 49 37
41x40: 49 43 37 45 54 27
38x45: 46 27 51 50 43 48
47x50: 66 54 71 53 48 66
38x37: 29 40 42 38 36 32
45x50: 52 55 55 67 56 64
50x45: 70 70 48 57 55 46
44x37: 26 24 25 38 22 32
46x48: 56 63 61 44 48 63
48x42: 42 43 49 61 52 66
48x41: 27 35 37 30 43 35
37x46: 30 32 23 22 38 35
43x48: 39 64 63 44 51 54
36x44: 45 43 36 44 40 37
44x39: 56 30 54 48 48 30
46x49: 47 63 63 68 52 56
42x39: 28 25 32 41 22 34
41x43: 54 39 33 50 46 51
42x37: 41 50 46 34 34 32
45x41: 55 52 44 46 49 38
45x47: 48 69 49 42 59 56
40x37: 24 23 32 30 23 24
37x41: 31 38 36 46 40 45
40x49: 60 42 52 47 44 55
36x47: 41 39 41 42 43 54
49x46: 40 38 34 41 42 45
36x37: 29 37 33 47 27 35
41x49: 55 59 52 46 52 44
50x41: 35 30 43 29 39 31
49x49: 60 66 61 59 69 55
50x50: 42 43 48 42 36 45
50x48: 42 46 45 43 43 37
43x35: 22 27 28 22 29 26
46x44: 32 34 41 40 31 32
36x38: 38 25 12 21 24 23
47x46: 45 40 35 33 31 41
41x42: 54 31 38 49 48 47
43x37: 42 42 45 42 39 35
44x38: 31 24 22 29 36 26
40x43: 28 33 36 19 35 30
46x40: 42 23 34 30 35 30
49x39: 55 50 50 51 42 46
41x46: 32 39 40 35 24 24
43x42: 24 39 34 37 31 31
50x48: 44 46 44 51 26 44
35x44: 24 19 23 24 32 31
49x43: 54 51 45 65 56 57
45x48: 35 34 43 42 47 38
48x47: 30 54 39 47 35 34
37x45: 30 25 33 32 22 37
45x49: 58 55 56 53 54 62
45x45: 63 46 44 62 41 57
37x43: 38 33 47 43 50 36
45x45: 55 51 65 50 42 47
48x46: 43 33 46 38 38 42
39x41: 40 35 47 46 37 42
43x39: 37 30 30 20 34 30
49x46: 37 46 37 43 36 41
44x43: 43 50 58 45 39 54
35x36: 37 33 34 22 31 34
39x37: 35 36 31 47 44 33
37x48: 31 52 54 45 44 47
44x40: 32 28 30 22 36 33
38x38: 23 24 23 25 25 23
38x43: 31 23 28 24 30 31
36x35: 28 31 36 34 28 37
36x38: 25 25 14 27 27 26
48x41: 44 55 48 52 62 44
35x50: 26 18 28 42 27 34
41x49: 60 47 54 57 44 48
35x45: 27 22 30 29 28 28
47x35: 34 39 44 55 49 37
44x42: 38 37 25 33 38 24
45x43: 33 30 39 37 31 39
44x50: 33 37 44 37 33 40
38x35: 38 31 36 42 34 26
36x36: 30 30 32 34 35 39
40x39: 39 42 37 38 29 53
40x45: 40 32 34 33 26 30
50x48: 42 46 43 43 43 39
43x37: 31 39 45 50 36 46
50x41: 37 28 37 27 37 41
49x35: 42 39 53 44 44 42
43x40: 42 22 24 28 34 32
40x45: 49 43 46 55 34 51
44x49: 43 41 35 38 34 33
35x48: 31 29 29 29 27 30
43x50: 63 53 58 56 54 47
46x43: 30 40 34 41 33 31
35x38: 35 35 38 35 27 34
42x41: 42 29 31 33 23 23
45x38: 51 45 42 43 43 39
42x36: 28 47 42 40 44 33
35x45: 46 44 40 37 43 32
49x42: 66 43 52 55 48 53
49x48: 55 56 57 60 59 75
47x40: 48 52 50 46 43 49
50x41: 35 32 33 22 39 46
40x45: 51 46 41 45 47 47
47x47: 50 36 32 33 29 45
40x45: 32 30 41 27 37 28
49x39: 46 44 44 60 40 62
48x35: 20 46 28 26 25 30
45x39: 41 43 50 39 48 48
38x40: 22 33 24 27 23 27
35x46: 22 32 17 30 28 35
50x40: 34 36 31 39 32 35
44x46: 34 32 40 30 40 34`,R4=Object.assign({"../advent/day01/solution.ts":G3,"../advent/day02/solution.ts":F3,"../advent/day03/solution.ts":X3,"../advent/day04/solution.ts":n2,"../advent/day05/solution.ts":e2,"../advent/day06/solution.ts":r2,"../advent/day07/solution.ts":a2,"../advent/day08/solution.ts":p2,"../advent/day09/solution.ts":y2,"../advent/day10/solution.ts":w2,"../advent/day11/solution.ts":z2,"../advent/day12/solution.ts":$2}),t4=Object.assign({"../advent/day01/input-test.md":O2,"../advent/day01/input.md":E2,"../advent/day02/input-test.md":M2,"../advent/day02/input.md":T2,"../advent/day03/input-test.md":N2,"../advent/day03/input.md":A2,"../advent/day04/input-test.md":C2,"../advent/day04/input.md":I2,"../advent/day05/input-test.md":P2,"../advent/day05/input.md":B2,"../advent/day06/input-test.md":D2,"../advent/day06/input.md":U2,"../advent/day07/input-test.md":G2,"../advent/day07/input.md":V2,"../advent/day08/input-test.md":K2,"../advent/day08/input.md":H2,"../advent/day09/input-test.md":F2,"../advent/day09/input.md":W2,"../advent/day10/input-test.md":Q2,"../advent/day10/input.md":X2,"../advent/day11/input-test-p2.md":J2,"../advent/day11/input-test.md":Y2,"../advent/day11/input.md":Z2,"../advent/day12/input-test.md":n4,"../advent/day12/input.md":L4}),e4=Object.freeze(Object.defineProperty({__proto__:null,inputMods:t4,solutionMods:R4},Symbol.toStringTag,{value:"Module"})),p3=L=>parseInt(L.split("day")[1]||"1",10),s4=(L,n)=>{const R=(L.match(/input-?(.+)\.md$/)||[])[1]||"Real";return{day:p3(L),name:R,raw:n}},x4=(L,n)=>{const R=!!(n.part1||n.part2),e=n.part1||(()=>"-"),o=n.part2||(()=>"-"),s=n.answers||[["",""]];return{day:p3(L),part1:e,part2:o,answers:s,hasSolution:R}},[X,o4]=j([]),[S,r4]=j([]),[V,d3]=j(1),[B,m3]=j(0),[g3,y3]=j(""),[i4,l4]=j({value:"",time:0,knownGood:!1}),[a4,c4]=j({value:"",time:0,knownGood:!1}),[h3,D]=j(!1),[v3,u4]=j(!0),F=()=>X().filter(L=>L.day===V()),b3=()=>S().find(L=>L.day===V()),$=(L,n="",R=0,e=!1)=>{L===1&&l4({value:n,time:R,knownGood:e}),L===2&&c4({value:n,time:R,knownGood:e})},J=()=>[$(1),$(2)],f4=()=>{q3(()=>{if(B()>=F().length)return m3(F().length-1);const L=F()[B()],n=b3();if(!L||!n)return J();y3(L.raw)})},T=async()=>{const L=b3(),n=g3();if(!L||!n)return J();const R=L.answers[B()]||["",""];$(1),$(2),setTimeout(R3,0,1,L.part1,n,R[0]),await p4(10),setTimeout(R3,5,2,L.part2,n,R[1])},p4=L=>new Promise(n=>setTimeout(n,L)),R3=async(L,n,R,e)=>{if(h3())return;D(!0);const{output:o,dt:s}=await w3(n,R,v3());$(L,o,s,o===e),D(!1)},w3=async(L,n,R)=>{const e=performance.now();return{output:(()=>{if(!R)return String(L(n));try{return String(L(n))}catch(s){return`Error: ${s}`}})(),dt:performance.now()-e}},d4=async()=>{if(h3())return;D(!0),J();const L=[],n=["",""],R=[0,0],e=[!0,!0];for(let o=0;o<S().length;o++){const s=S()[o],x=X().filter(t=>t.day===o+1)[0].raw;for(let t=0;t<2;t++){const{output:r,dt:i}=await w3(t===0?s.part1:s.part2,x,!0);L.push({dt:i,name:`Day ${s.day} part ${t+1}`}),R[t]+=i;const l=r===s.answers[0][t];e[t]&&=l,n[t]+=l?"★":"-",o===S().length-1&&(n[t]+=" done!"),$(t+1,n[t],R[t],e[t]),await new Promise(a=>setTimeout(a,0))}}L.sort((o,s)=>o.dt-s.dt),console.table(L.map(({name:o,dt:s})=>({name:o,ms:Math.round(s*10)/10}))),D(!1)},m4=L=>{o4(Object.keys(L.inputMods).map(n=>s4(n,L.inputMods[n])).sort((n,R)=>n.name.localeCompare(R.name))),r4(Object.keys(L.solutionMods).map(n=>x4(n,L.solutionMods[n])).filter(n=>n.hasSolution).sort((n,R)=>n.day-R.day)),T()};m4(e4);d3(S().at(-1)?.day||1);setTimeout(T,0);var g4=k("<button type=button>");const K=L=>{const n=()=>({...L.classes,button:!0,toggled:L.isToggled});return(()=>{var R=g4();return C3(R,"click",L.onClick),y(R,()=>L.label),z(e=>I3(R,n(),e)),R})()};a3(["click"]);var y4=k("<div class=catch-area>Catch errors");const h4=()=>(()=>{var L=y4();return L.firstChild,y(L,h(K,{label:"x",classes:{"input-toggle":!0,"catch-button":!0},get isToggled(){return v3()},onClick:()=>u4(n=>!n)}),null),L})(),v4=()=>S().map(L=>h(K,{get label(){return L.day.toString().padStart(2,"0")},get isToggled(){return L.day===V()},onClick:()=>{d3(L.day),T()}}));var b4=k("<textarea rows=14>");const w4=L=>(()=>{var n=b4();return n.$$input=R=>{L.onUpdate(R.target.value),T()},z(()=>n.value=L.value),n})(),j4=()=>h(w4,{get value(){return g3()},onUpdate:y3});a3(["input"]);var _4=k("<div class=label style=align-self:flex-start><h4>Input:</h4><br>");const z4=()=>{const L=()=>X().filter(n=>n.day===V()).map((n,R)=>({label:n.name,isToggled:R===B(),onClick:()=>{m3(R),T()},classes:{"input-toggle":!0}}));return(()=>{var n=_4(),R=n.firstChild;return R.nextSibling,y(n,()=>L().map(e=>h(K,e)),null),n})()};var k4=k("<div class=label><h4>Part <!>:</h4><div class=time>(<!>ms)"),q4=k("<textarea class=output disabled>");const S4=(L="")=>{const n=L.split(`
`).length;return Math.min(n,Math.max(n,1,10))},t3=({part:L=1})=>{const n=L===1?i4:a4;return[(()=>{var R=k4(),e=R.firstChild,o=e.firstChild,s=o.nextSibling;s.nextSibling;var x=e.nextSibling,t=x.firstChild,r=t.nextSibling;return r.nextSibling,y(e,L,s),y(x,()=>n().time.toFixed(0),r),R})(),(()=>{var R=q4();return z(e=>{var o=!!n().knownGood,s=S4(n().value);return o!==e.e&&R.classList.toggle("correct-answer",e.e=o),s!==e.t&&A3(R,"rows",e.t=s),e},{e:void 0,t:void 0}),z(()=>R.value=n().value),R})()]},$4=()=>h(K,{label:"Run all",classes:{"input-toggle":!1,"run-all-button":!0},isToggled:!1,onClick:()=>d4()});var O4=k("<main><header><h2>Advent 2025</h2></header><article class=layout><div class=label><h4>Days:</h4></div><div><br></div><div>");const E4=()=>(f4(),(()=>{var L=O4(),n=L.firstChild,R=n.nextSibling,e=R.firstChild,o=e.nextSibling,s=o.firstChild,x=o.nextSibling;return y(o,h(v4,{}),s),y(o,h($4,{}),null),y(R,h(t3,{part:1}),x),y(R,h(t3,{part:2}),x),y(R,h(z4,{}),x),y(R,h(j4,{}),x),y(R,h(h4,{}),null),L})()),M4=document.getElementById("root");N3(E4,M4);
//# sourceMappingURL=index-CgC5B3fA.js.map
