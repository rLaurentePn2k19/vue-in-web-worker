let e=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(8);return{execute:(e,r,s)=>(o&&s&&(e=t.getNode(e[r+1]))&&(s=e.transferControlToOffscreen(),n.messageToWorker({12:9,13:[e._index_],38:s},[s])),r+2)}},t=[0,1,2,3,4,5,6,7,8,9,10,11,12,13],n=(e,t)=>Array.prototype.forEach.call(e,t);class r{constructor(e,t){this.createNodes=(e,t)=>{let n=(e=new Uint16Array(e)).length;for(let s=0;s<n;s+=5){var r=void 0;if(3===e[s+1])r=document.createTextNode(this.stringContext.get(e[s+3]));else if(8===e[s+1])r=document.createComment(this.stringContext.get(e[s+3]));else if(11===e[s+1])r=document.createDocumentFragment();else if(r=this.stringContext.get(e[s+2]),r=0!==e[s+4]?document.createElementNS(this.stringContext.get(e[s+4]),r):document.createElement(r),t&&!t.sanitize(r))continue;this.storeNode(r,e[s])}},this.getNode=e=>(e=this.nodes.get(e))&&"BODY"===e.nodeName?this.baseElement:e,this.storeNodes=e=>{this.storeNode(e,++this.count),n(e.childNodes,(e=>this.storeNodes(e)))},this.count=2,this.stringContext=e,this.nodes=new Map([[1,t],[2,t]]),this.baseElement=t,t._index_=2,n(t.childNodes,(e=>this.storeNodes(e)))}storeNode(e,t){e._index_=t,this.nodes.set(t,e)}}let s=new Map,o=(e,t)=>{t&&"value"in t&&null===t.oninput&&(t.oninput=()=>l(e,t))},i=(e,t)=>{t&&"value"in t&&!s.get(t)&&(new MutationObserver((t=>t.map((t=>l(e,t.target))))).observe(t,{attributes:!0}),s.set(t,!0))},l=(e,t)=>e.messageToWorker({12:4,40:{7:t._index_,21:t.value}}),u=e=>Object.values(e).map((e=>[e.identifier,e.screenX,e.screenY,e.clientX,e.clientY,e.pageX,e.pageY,e.target._index_])),a=(e,t,n,r,s)=>{const a=[],c=s.executorsAllowed.includes(4);let d=[window.innerWidth,window.innerHeight];const h=(e,t)=>r=>{t&&r.preventDefault();var s=r.currentTarget;if(s&&"value"in s)l(n,r.currentTarget);else if("resize"===r.type){const{innerWidth:e,innerHeight:t}=window;if(d[0]===e&&d[1]===t)return;d=[window.innerWidth,window.innerHeight],n.messageToWorker({12:5,40:d})}n.messageToWorker({12:1,39:{7:e,25:r.bubbles,26:r.cancelable,27:r.cancelBubble,28:[r.currentTarget._index_||0],29:r.defaultPrevented,30:r.eventPhase,31:r.isTrusted,32:r.returnValue,13:[r.target._index_||0],33:r.timeStamp,12:r.type,35:"keyCode"in r?r.keyCode:void 0,60:"pageX"in r?r.pageX:void 0,61:"pageY"in r?r.pageY:void 0,65:"offsetX"in r?r.offsetX:void 0,66:"offsetY"in r?r.offsetY:void 0,62:"touches"in r?u(r.touches):void 0,63:"changedTouches"in r?u(r.changedTouches):void 0}})};return{execute(r,s,l){var u=r[s+2];const d=s+4+2*u;if(u=s+4+6*r[s+3]+2*u,c&&l&&(l=t.getNode(r[s+1]))){let c=s+4;for(;c<u;){const u=c<=d;e:{s=l;var g=u,f=r,p=c;const d=e.get(f[p]),w=f[p+1];if(s===t.baseElement){g?addEventListener(d,a[w]=h(1,!!f[p+5])):removeEventListener(d,a[w]);break e}let m=null!==s.oninput;const x="change"===d;g?(x&&(m=!0,s.onchange=null),s.addEventListener(d,a[w]=h(s._index_,!!f[p+5]))):(x&&(m=!1),s.removeEventListener(d,a[w])),s&&"value"in s&&(m||o(n,s),i(n,s))}c+=u?2:6}}return u}}},c=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(5);return{execute:(e,r,s)=>(o&&s&&(e=t.getNode(e[r+1]))&&(s=e.getBoundingClientRect(),n.messageToWorker({12:6,13:[e._index_],38:[s.top,s.right,s.bottom,s.left,s.width,s.height]})),r+2)}},d=(e,{getNode:t},n,r,s)=>{const l=s.executorsAllowed.includes(2);return{execute(e,r,s){const u=e[r+4],a=e[r+5];if(l&&s){const s=t(e[r+1]);s&&(0<a&&e.slice(r+6+u,r+6+u+a).forEach((e=>{(e=t(e))&&e.remove()})),0<u&&e.slice(r+6,r+6+u).forEach((l=>{const u=e[r+2];(l=t(l))&&(s.insertBefore(l,u&&t(u)||null),o(n,l),i(n,l))})))}return r+6+u+a}}},h=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(0);return{execute(n,r,i){if(o&&i){i=t.getNode(n[r+1]);const o=e.get(n[r+2]);n=0!==(n=n[r+4])?e.get(n-1):null,i&&null!=o&&(s.sanitizer?s.sanitizer.setAttribute(i,o,n):null==n?i.removeAttribute(o):i.setAttribute(o,n))}return r+5}}},g=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(1);return{execute:(n,r,s)=>(o&&s&&(s=t.getNode(n[r+1]),n=n[r+2],s&&n&&(s.textContent=e.get(n))),r+3)}},f=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(3);return{execute(n,r,i){if(o&&i){i=t.getNode(n[r+1]);const o=e.get(n[r+2]);{const t=n[r+4];n=1===n[r+3]?1===t:0!==t?e.get(t):null}i&&o&&null!=n&&(s.sanitizer?s.sanitizer.setProperty(i,o,String(n)):i[o]=n)}return r+5}}},p=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(6);let i,l=0;return{execute:(e,t,n)=>(o&&n&&s.longTask&&(6===e[t]?(l++,i||s.longTask(new Promise((e=>i=e)))):7===e[t]&&(l--,i&&0>=l&&(i(),i=null,l=0))),t+2),get active(){return null!==i}}},w=new Float32Array(1),m=new Uint16Array(w.buffer);function x(e,t,n,r,s,o){let i=[];for(let u=0;u<n;u++)switch(e[t++]){case 1:i.push(e[t++]);break;case 2:m[0]=e[t++],m[1]=e[t++],i.push(w[0]);break;case 3:i.push(r.get(e[t++]));break;case 4:var l=e[t++];t=x(e,t,l,r,s,o),i.push(t.args),t=t.offset;break;case 5:if(!o)throw Error("objectContext not provided.");i.push(o.get(e[t++]));break;case 6:l=s.getNode(e[t++]),i.push(l.getContext("2d"));break;case 7:i.push(s.getNode(e[t++]));break;default:throw Error("Cannot deserialize argument.")}return{args:i,offset:t}}let k=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(9);return{execute(n,s,i){const l=e.get(n[s+1]),u=n[s+2],{offset:a,args:c}=x(n,s+3,1,e,t,r);s=c[0];const{offset:d,args:h}=x(n,a,u,e,t,r);return o&&i&&(v(s,l)?s[l]=h[0]:s[l](...h)),d}}};function v(e,t){if(!e)throw Error(`Property ${t} does not exist on ${e}.`);let n=Object.getOwnPropertyDescriptor(e,t);return void 0!==n?"set"in n:v(Object.getPrototypeOf(e),t)}let b=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(10);if(!r)throw Error("objectContext is not defined.");return{execute(n,s,i){const l=e.get(n[s+1]),u=n[s+2],a=n[s+3],{offset:c,args:d}=x(n,s+4,1,e,t,r);s=d[0];const{offset:h,args:g}=x(n,c,a,e,t,r);return o&&i&&"new"!==l&&r.store(u,s[l](...g)),h}}},y=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(11);return{execute:(e,r,s)=>(o&&s&&(s=t.getNode(e[r+1]))&&self.createImageBitmap(s).then((t=>{n.messageToWorker({12:10,73:e[r+2],38:t},[t])})),r+3)}},N=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(12),i=(e,t)=>{s.sanitizer&&2===e&&s.sanitizer.getStorage(e,t).then((r=>{n.messageToWorker({12:11,74:t||"",75:e,21:r})}))};return{execute(t,n,r){if(o&&r){r=t[n+1];var l=t[n+2],u=t[n+3];const o=t[n+4];if(t=0<u?e.get(u):null,u=0<o?e.get(o):null,1===r)i(l,t);else if(2===r)if(r=l,l=t,t=u,s.sanitizer)s.sanitizer.setStorage(r,l,t);else{let e;if(0===r?e=window.localStorage:1===r&&(e=window.sessionStorage),e)if(null==l){if(null!=t)throw Error("Unexpected storage operation.");e.clear()}else null==t?e.removeItem(l):e.setItem(l,t)}}return n+5}}},C=0,A={},O=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(13);return{execute(t,n){if(o){const r=t[n+1],s=t[n+2];t=t[n+3],t=e.hasIndex(t)?JSON.parse(e.get(t)):void 0,1===r?A[s].resolve(t):A[s].reject(t),delete A[s]}return n+4}}};class _{constructor(t,n,r,s,o){this.mutationQueue=[],this.pendingMutations=!1,this.syncFlush=(e=!0)=>{let t=[];return this.mutationQueue.forEach((n=>{let r=n.length,s=0;for(;s<r;){let r=n[s];var o;if(!(o=e)){e:switch(r){case 4:case 5:case 6:case 7:case 12:case 8:case 13:o=!1;break e;default:o=!0}o=!o}o||t.push(r),s=this.executors[r].execute(n,s,o)}})),this.mutationQueue=[],this.pendingMutations=!1,t},this.stringContext=t,this.nodeContext=n,this.sanitizer=s.sanitizer,this.mutationPumpFunction=s.mutationPump,n=p.apply(null,t=[t,n,r,o,s]),this.executors={2:d.apply(null,t),0:h.apply(null,t),1:g.apply(null,t),3:f.apply(null,t),4:a.apply(null,t),5:c.apply(null,t),6:n,7:n,8:e.apply(null,t),9:k.apply(null,t),10:b.apply(null,t),11:y.apply(null,t),12:N.apply(null,t),13:O.apply(null,t)}}mutate(e,t,n,r){this.stringContext.storeValues(n),this.nodeContext.createNodes(t,this.sanitizer),this.mutationQueue=this.mutationQueue.concat(r),this.pendingMutations||(this.pendingMutations=!0,this.mutationPumpFunction(this.syncFlush,e))}}class E{constructor(){this.strings=[]}get(e){return this.strings[e]||""}hasIndex(e){return void 0!==this.strings[e]}store(e){this.strings.push(e)}storeValues(e){e.forEach((e=>this.store(e)))}}let T=[8,3];function M(e,t,n,r){var s=[].slice.call(e.childNodes).filter(n);return s={7:e._index_,11:0,0:e.nodeType,1:t(e.localName||e.nodeName),4:s.map((e=>M(e,t,n,r))),2:[].map.call(e.attributes||[],(e=>[t(e.namespaceURI||"null"),t(e.name),t(e.value)]))},null!=e.namespaceURI&&(s[6]=t(e.namespaceURI)),T.includes(e.nodeType)&&null!==e.textContent&&(s[5]=t(e.textContent)),o(r,e),i(r,e),s}class S{constructor(e,t,n,r,s){this.nodeContext=t,this.config=s;let{skeleton:o,strings:i}=function(e,t,n){t=t.hydrateFilter||(()=>!0);let r=[],s=new Map;return{skeleton:M(e,(e=>{if(s.has(e))return s.get(e);const t=r.length;return s.set(e,t),r.push(e),t}),t,n),strings:r}}(e,s,this);t=[];let l=[],u=s.sanitizer?s.sanitizer.getStorage(0):window.localStorage,a=s.sanitizer?s.sanitizer.getStorage(1):window.sessionStorage;for(let n in e.style)t.push(n);for(let t in e)t.startsWith("on")&&l.push(t);n=`'use strict';(function(){${n}self['window']=self;var workerDOM=WorkerThread.workerDOM;WorkerThread.hydrate(workerDOM.document,${JSON.stringify(i)},${JSON.stringify(o)},${JSON.stringify(t)},${JSON.stringify(l)},[${window.innerWidth},${window.innerHeight}],${JSON.stringify(u)},${JSON.stringify(a)});workerDOM.document[59](this);Object.keys(workerDOM).forEach(function(k){self[k]=workerDOM[k]});}).call(self);${r}//# sourceURL=${encodeURI(s.authorURL)}`,this[55]=new Worker(URL.createObjectURL(new Blob([n]))),s.onCreateWorker&&s.onCreateWorker(e,i,o,t)}get worker(){return this[55]}messageToWorker(e,t){this.config.onSendMessage&&this.config.onSendMessage(e),this.worker.postMessage(e,t||[])}}class U{constructor(){this.objects=new Map}store(e,t){this.objects.set(e,t)}get(e){let t=this.objects.get(e);if(t)return t;throw Error("Object with id ("+e+") does not exist.")}}class W{constructor(e,t){this.workerContext_=e,this.config=t}callFunction(e,...t){if(!this.config.executorsAllowed.includes(13))throw Error(`[worker-dom]: Error calling ${e}. You must enable the FUNCTION_CALL executor within the config.`);let{promise:n,index:r}=function(){let e,t,n=new Promise(((n,r)=>{e=n,t=r}));C>=Number.MAX_VALUE&&(C=0);let r=C++;return A[r]={promise:n,resolve:e,reject:t},{promise:n,index:r}}();return e={12:12,77:e,78:JSON.stringify(t),7:r},this.workerContext_.messageToWorker(e),n}set onerror(e){this.workerContext_.worker.onerror=e}terminate(){this.workerContext_.worker.terminate()}}let z=[3,2];function j(e,n){return function(e,n,s){let o=new E,i=new U,l=new r(o,n),u=function(e){return Object.assign({},{mutationPump:requestAnimationFrame.bind(null),executorsAllowed:t},e)}(s);return e.then((([e,t])=>{if(e&&t&&s.authorURL){e=new S(n,l,e,t,u);let r=new _(o,l,e,u,i);return e.worker.onmessage=e=>{let{data:t}=e;z.includes(t[12])&&(r.mutate(t[54],t[37],t[41],new Uint16Array(t[36])),s.onReceiveMessage)&&s.onReceiveMessage(e)},new W(e,u)}return null}))}(Promise.all([fetch(n.domURL).then((e=>e.text())),fetch(n.authorURL).then((e=>e.text()))]),e,n)}!function(e,t){let n=e.getAttribute("src");n?j(e,{authorURL:n,domURL:t}):Promise.resolve(null)}(document.getElementsByTagName("main")[0],"node_modules/@ampproject/worker-dom/dist/worker/worker.mjs");