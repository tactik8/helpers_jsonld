var oa=Object.defineProperty;var m=(e,t)=>{for(var r in t)oa(e,r,{get:t[r],enumerable:!0})};var fe={get:Ne,set:Qe,flatten:aa,expand:la};function Ne(e,t){if(!t||typeof t!="string")return;let r=di(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function Qe(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=di(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let o=e;for(let a=0;a<n.length-1;a++){let l=n[a],d=n[a+1],u=!isNaN(d);u==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),u==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,e}function aa(e){function t(s,o){let a=[];return Array.isArray(o)?(s=s||"",o.map((d,u)=>t(`${s}[${String(u)}]`,d)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(d=>t(`${s}${d}`,o[d])).flat()):[{propertyID:s,value:o}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function la(e){let t={};return Object.keys(e).forEach(r=>Qe(t,r,e?.[r])),t}function di(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var Jt={};m(Jt,{eq:()=>ga,ge:()=>ba,getDiff:()=>fi,getHash:()=>ci,getHashNested:()=>Va,gt:()=>xa,isEqual:()=>ma,isSame:()=>pa,le:()=>ya,lt:()=>ha});var et={};m(et,{expand:()=>da,flatten:()=>ca,getChildren:()=>fa,handleRelationships:()=>Ft,simplify:()=>Wt,strip:()=>Lt});function da(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(b=>o(b));let l=i.record_id(a);if(l&&s.has(l)){let b=s.get(l);return r?b:i.ref?i.ref(b):{"@id":l}}let u=(l&&n instanceof Map?n.get(l):null)||a,f=Array.isArray(u)?[...u]:{...u};l&&s.set(l,f);for(let b of Object.keys(f))b==="previousItem"||b==="nextItem"||(f[b]=o(f[b]));return f}return typeof t=="string"&&(t={"@id":t}),o(t)}function Lt(e){function t(r,n,s){if(Array.isArray(r))return r.map(o=>t(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=t(r?.[a],n,s+1);return o}}return r}return t(e,0,0)}function ca(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let a of n)o=o.concat(t(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let a=n[o];a=i.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),s=s.concat(t(l))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=Ft(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Ft(e){if(i.isArray(e))return e.map(r=>Ft(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function Wt(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>t(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=t(n?.[a],s);a=="itemListElement"&&(l=i.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return e=i.clone(e),t(e)}function fa(e){function t(r,n){if(i.isArray(r)){let o=[];for(let a of r){let l=t(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(t(r[o],n+1));return s=s.filter(o=>o),s}return t(e,0)}function pa(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function ga(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function ma(e,t){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function ha(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function ya(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function xa(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function ba(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function ci(e,t=!1){e=Wt(e),t==!1&&(e=Lt(e));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((d,u)=>({...d,[u]:r(l[u])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function Va(e){return ci(e,!0)}function fi(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=fi(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var qt={};m(qt,{evaluate:()=>zt});function zt(e,t){let r=[];for(let s of Object.keys(t)){let o=s,a=t?.[s];if(a=i.toArray(a),o=="$and")return a.every(l=>zt(e,l));if(o=="$or")return a.some(l=>zt(e,l));for(let l of a){let d=Aa(e,o,l);r.push(d)}}return r.every(s=>wa(s.r,s.p,s.o,s.v))}function wa(e,t,r,n){try{let s=fe.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Aa(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var $r={};m($r,{assignId:()=>nl,getGenericRecordID:()=>rl,normalizeRecordId:()=>el,replaceIds:()=>Ni,setTempID:()=>Ti});var Kt={};m(Kt,{clean:()=>$a,isArray:()=>ie,isNotArray:()=>Gt,isValid:()=>Sa,toArray:()=>tt});function $a(e){return tt(e)}function Sa(e){return ie(e)}function ie(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function Gt(e){return!ie(e)}function tt(e){return e==null?[]:(e=ie(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var Zt={};m(Zt,{clean:()=>Yt,format:()=>ka,formatDate:()=>pi,isDate:()=>G,isNotDate:()=>Xt,isValid:()=>_a,toDate:()=>pe});function Yt(e,t=void 0){return pe(e)||t}function _a(e){return G(e)}function ka(e,t=!1){return pi(e,t)}function G(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Xt(e){return!G(e)}function pe(e){if(e===void 0)return;if(G(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=G(e)?e:void 0,e}function pi(e,t=!1){if(console.log("vv",e,pe(e)),e=pe(e),G(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${s}-${o}`;if(t==!0){let l=String(r.getHours()).padStart(2,0),d=String(r.getMinutes()).padStart(2,0),u=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${d}:${u}`}return a}var er={};m(er,{clean:()=>Ia,isNotNull:()=>Qt,isNull:()=>me,isValid:()=>Ta});function Ia(e,t=void 0){}function Ta(e){return me(e)}function Qt(e){return!me(e)}function me(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||ge.array.isValid(e)?e.length==0:e instanceof Date?ge.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var nr={};m(nr,{clean:()=>tr,format:()=>Pa,formatDecimals:()=>gi,isNotNumber:()=>rr,isNumber:()=>Pe,isValid:()=>Na,toNumber:()=>rt});function tr(e,t=void 0){return rt(e)??t}function Na(e){return Pe(e)}function Pa(e,t){return gi(e,t)}function gi(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function Pe(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function rr(e){return!Pe(e)}function rt(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var sr={};m(sr,{clean:()=>Ca,cleanObject:()=>Ce,isNotObject:()=>ir,isObject:()=>je,isValid:()=>ja});function Ca(e,t=void 0){return Ce(e)||t}function ja(e){return je(e)}function je(e){return typeof e!="object"||e===null||Array.isArray(e)||e===void 0||c.isString(e)==!0||c.isDate(e)==!0||c.isNumber(e)==!0||c.isArray(e)==!0?!1:Object.keys(e).length>0}function ir(e){return!je(e)}function Ce(e){if(c.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Ce(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Ce(x));t=t.filter(r=>c.isNotNull(r))}}if(c.object.isValid(e))for(let t of Object.keys(e))e[t]=Ce(e[t]),ge.isNull(e[t])&&delete e[t];return ge.isNotNull(e)?e:void 0}var lr={};m(lr,{clean:()=>va,cleanString:()=>mi,isNotString:()=>or,isString:()=>he,isValid:()=>Ra,maxLengthEnd:()=>Da,maxLengthMiddle:()=>Oa,toString:()=>ar});function va(e,t=""){return mi(e)||t}function Ra(e){return he(e)&&e.trim().length>=0}function Oa(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Da(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function he(e){return typeof e=="string"||e instanceof String}function or(e){return!he(e)}function ar(e){return e==null?"":String(e)}function mi(e){return he(e)?e.trim():void 0}var fr={};m(fr,{clean:()=>hi,cleanUrl:()=>xi,getDomain:()=>Ba,getParams:()=>Ua,getPath:()=>Vi,getUrl:()=>yi,isNotUrl:()=>cr,isUrl:()=>ve,isValid:()=>ur,setParams:()=>bi,setPath:()=>wi,toUrl:()=>dr});function ur(e){return ve(e)}function hi(e,t=void 0){return xi(e)??t}function dr(e,t,r,n=void 0){return yi(e,t,r)||n}function yi(e,t,r){let n=wi(e,t);return r&&(n=bi(n,r)),n}function ve(e){return e=hi(e),!!e}function cr(e){return!ve(e)}function xi(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=t;try{let l=new URL(e);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let d=l.pathname;if(d=d.replace(/\/+/g,"/"),o&&(d=d.toLowerCase()),s&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),l.pathname=d,r){let u=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],f=Array.from(l.searchParams.keys());for(let b of f){let y=u.some(M=>b.toLowerCase().startsWith(M)),A=a.includes(b);y&&!A&&l.searchParams.delete(b)}}return l.searchParams.sort(),l.toString()}catch{return}}function Ba(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function Ua(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function bi(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function Vi(e){try{return new URL(e).pathname}catch{return}}function wi(e,t){t=t??"";let r=[],n=Vi(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let o of t)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(o){console.log(o,s,e);return}}var mr={};m(mr,{clean:()=>Ha,format:()=>Ea,isDuration:()=>ye,isNotDuration:()=>pr,isValid:()=>Ma,toDuration:()=>gr});function Ha(e,t=void 0){return toDate(e)||t}function Ma(e){return ye(e)}function Ea(e){return Fa(e)}function ye(e){return La(e)}function pr(e){return!ye(e)}function gr(e){return e}function La(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function Fa(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,o,a,l,d,u,f]=r.map(A=>parseInt(A,10)||0),b=[d,u,f].map(A=>String(A).padStart(2,"0")).join(":"),y=[];return s&&y.push(`${s}y`),o&&y.push(`${o}m`),a&&y.push(`${a}w`),l&&y.push(`${l}d`),y.length>0?`${y.join(" ")} ${b}`:b}var yr={};m(yr,{clean:()=>Wa,format:()=>za,isBoolean:()=>Re,isNotBoolean:()=>hr,isValid:()=>Ja,toBoolean:()=>Oe,toString:()=>qa});function Wa(e){return Oe(e)}function Ja(e){return Re(e)}function za(e){return Oe(e)}function qa(e){return String(e)}function Re(e){return typeof e=="boolean"}function hr(e){return typeof e!="boolean"}function Oe(e){if(Re(e))return e;if(typeof e=="string"){if(e.toLowerCase()=="true")return!0;if(e.toLowerCase()=="false")return!1}if(!isNaN(e)){if(e==0)return!1;if(valeu==1)return!0}}var Vr={};m(Vr,{clean:()=>Ga,format:()=>Ya,fromJson:()=>br,isJson:()=>De,isNotJson:()=>xr,isValid:()=>Ka,toJson:()=>Be});function Ga(e){return Be(e)}function Ka(e){return De(e)}function Ya(e){return Be(e)}function De(e){if(!e)return!1;if(typeof e=="string"){try{if(JSON.parse(e))return!0}catch{}return!1}}function xr(e){return!De(e)}function Be(e){let t=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(e,t(),4)}catch{}}function br(e){try{return JSON.parse(e)}catch{}}var c={isNull:me,isNotNull:Qt,isArray:ie,isNotArray:Gt,toArray:tt,isDate:G,isNotDate:Xt,toDate:pe,isDuration:ye,isNotDuration:pr,toDuration:gr,isObject:je,isNotObject:ir,isNumber:Pe,isNotNumber:rr,toNumber:rt,isString:he,isNotString:or,toString:ar,isUrl:ve,isNotUrl:cr,toUrl:dr,isBoolean:Re,isNotBoolean:hr,toBoolean:Oe,isJson:De,isNotJson:xr,toJson:Be,fromJson:br,array:Kt,boolean:yr,date:Zt,duration:mr,json:Vr,null:er,number:nr,object:sr,string:lr,url:fr,getDataType:Ai,getType:Ai,getJsonSchema:Xa},ge=c;function Ai(e){if(me(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(ie(e))return"Array";if(G(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(ur(e))return"URL";if(Yt(e))return"DateTime";if(ye(e))return"Duration";if(tr(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function Xa(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),c.isString(r))return s.type="string",s;if(c.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=t(r[o],n+1);return s}if(c.isNumber(r))return s.type="number",s;if(c.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var Sg=globalThis.crypto.randomUUID;var nt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function xe(e,t){if(!e||!e?.["@type"])return;let r=_i(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=nt?.[n];if(s=="url")return ki(n,it(e));if(s=="domain")return Ii(n,it(e))}return Ar(t)}function $i(e,t){if(!e||!e?.["@type"])return;let r=_i(e);for(let n of r){let s=nt?.[n];if(s=="url")return ki(n,it(e));if(s=="domain")return Ii(n,it(e))}}function Si(e,t){let r=e?.["@id"];return r?Za(e)?getStandardizedRecordId(e,t)==r:wr(e?.["@id"],t)==r:!1}function Za(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if(nt?.[r])return nt?.[r]}function _i(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function it(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function Ar(e){return e=wr(e),e?(e.endsWith("/")||(e=e+"/"),wr(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function ki(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>c.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function Ii(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>Qa(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function Qa(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function wr(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function el(e,t){e=Ti(e);let r=tl(e,t);return Ni(e,r)}function tl(e,t){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let l=[];for(let d of s)l=l.concat(r(d));return l}if(i.isObject(s)==!1)return[];let a=[{replacee:i.record_id(s),replacer:xe(s,o)}];for(let l of Object.keys(s))a=a.concat(r(s[l],o));return a}let n=r(e,t);return n=n.filter(s=>s),n}function Ti(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function rl(e){return Ar(e)}function nl(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function Ni(e,t){function r(n,s){if(Array.isArray(n))return n.map(l=>i.replaceIds(l,s));if(!n?.["@id"])return n;let o=n?.["@id"],a=s.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=i.replaceIds(n?.[l],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var _r={};m(_r,{DB:()=>Sr,_storeToMap:()=>se,_storeToOriginal:()=>al,deleteRecord:()=>il,getRecord:()=>Ue,getRecords:()=>Ve,length:()=>sl,patchRecord:()=>Ci,postRecord:()=>Pi});var Sr=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,Ue(this._store,t,r)}getAll(t=!0){return Ve(this._store,{},t)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return Ve(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>Ue(this._store,i.record_id(s),!1));for(let s of r)this._store=Pi(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(o=>Ue(this._store,i.record_id(o),!1));for(let o of n)this._store=Ci(this._store,o,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let o=this.get(t);return i.getValue(o,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return Ve(this._store)}getRecords(t=!1){return Ve(this._store,void 0,t)}get record_ids(){return ol(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t,r);return!s||i.isRef(s)?n:s}updateRefs(t,r={},n={}){if(!t)return t;if(i.isArray(t))return t.map(s=>this.updateRefs(s,r,n));if(i.isObject(t)){if(i.isRef(t)){if(r?.[i.record_id(t)])return r[i.record_id(t)];t=this.get(t,!0)||t,r[i.record_id(t)]=t}else{if(n?.[i.record_id(t)])return t;n[i.record_id(t)]=t}for(let s of Object.keys(t))["previousItem","nextItem"].includes(s)||(t[s]=this.updateRefs(t[s],r,n));return t}return t}execute(t){let r=i.toArray(t);r=r.map(o=>this.updateRefs(o));let n=new i.DB;n.set(r);let s=[];for(let o of r){o=n.get(o),o=i.execute(o),s.push(o);let a=i.getValues(o,"hasPart");for(let l of a){let d=i.list.toItemList(l);i.list.getItems(d).forEach(f=>n.set(i.getResults(f)))}n.set(i.getResults(o))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let o=t.find(a=>i.record_id(a)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(t,r){try{return t(r)}catch{return}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return fe}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function Pi(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=se(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function Ci(e,t){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=se(e);for(let n of t){let s=r.get(i.record_id(n));n=i.patch(s,n),r.set(i.record_id(n),n)}return e=i._storeToOriginal(r),e}function Ue(e,t,r=!0){if(i.isArray(t))return t.map(a=>Ue(e,a,r));let n=i._utilGetId(t),s=se(e),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function Ve(e,t,r=!0){let n=se(e),s=Array.from(n.values());return t&&(s=s.filter(o=>i.evaluate(o,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function il(e,t){let r=i._utilGetId(t),n=se(e);return r=Array.isArray(r)?r:[r],r.map(s=>n.delete(s)),e}function sl(e){return se(e).size}function ol(e){return Ve(e).map(n=>i.record_id(n))}function se(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function al(e){return e=Array.from(e.values()),e}var Ir={};m(Ir,{JSON_parse:()=>dl,JSON_stringify:()=>Di,clean:()=>vi,clone:()=>Bi,contractAtValue:()=>st,expandAtValue:()=>cl,getRecordUrl:()=>gl,isJsonld:()=>ji,isValid:()=>ll,merge:()=>fl,patch:()=>pl,removeCircularRefs:()=>Ri,sortedReplacer:()=>Oi,stringify:()=>ul});function ll(e){return ji(e)}function ji(e){return e?.["@type"]||e?.["@id"]}function vi(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>vi(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=Bi(e)}catch{}e=(void 0)(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Si(s)==!0)continue;let o=$i(s,t);if(o&&s?.["@id"]!=o){let a={replacer:o,replacee:s?.["@id"]};n.push(a)}if(!o&&s?.["@id"].startsWith("_:")){let a={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(a)}}return e=i.replaceIds(e,n),e}function Ri(e){return kr(e,new Set)}function kr(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>kr(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=kr(e[n],t);return e}function Oi(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function Di(e){return e=Ri(e),JSON.stringify(e,Oi,4)}function ul(e){return Di(e)}function dl(e){return JSON.parse(e)}function cl(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(o=>t(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,t(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function st(e){let t=i.getAtValue(e);if(t&&t.length>0)return st(i.getAtValue(e));if(i.isArray(e))return e.map(r=>st(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,st(i.getValues(e,r)));return e}return e}function Bi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function fl(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let o of n){if(o=="@id")continue;let a=i.toArray(e?.[o]||void 0),l=i.toArray(t?.[o]||void 0),d=a.concat(l);r==!0&&(d=i.dedupe(d)),s[o]=d}return s}function pl(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{},t=t?.record||t;for(let r of i.keys(t)){let n=i.toArray(t?.[r]);e=i.setValues(e,r,n)}return e}function gl(e,t){t=t?.baseUrl??t;try{return c.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var Cr={};m(Cr,{ID:()=>jl,Id:()=>Ol,Type:()=>wl,actionStatus:()=>Kl,addValue:()=>Li,addValues:()=>Fi,contentUrl:()=>Zl,description:()=>tu,email:()=>iu,getActionStatus:()=>Yl,getAdditionalProperty:()=>Jl,getAtValue:()=>ql,getContentUrl:()=>Ql,getDescription:()=>ru,getEmail:()=>su,getID:()=>vl,getId:()=>Dl,getImageName:()=>dd,getImageUrl:()=>ud,getItem:()=>lu,getItemListElement:()=>gu,getItems:()=>cu,getName:()=>yu,getNumberOfItems:()=>Vu,getObject:()=>$u,getObjects:()=>ku,getPosition:()=>Nu,getPotentialAction:()=>ju,getPotentialActions:()=>Ou,getRecordID:()=>Pl,getRecordId:()=>Il,getRecordType:()=>bl,getRecord_id:()=>Sl,getRecord_type:()=>hl,getResult:()=>Uu,getResults:()=>Eu,getTargetCollection:()=>Wu,getTargetCollections:()=>qu,getText:()=>Yu,getType:()=>Al,getUrl:()=>Qu,getValue:()=>I,getValues:()=>Pr,hasValue:()=>Wi,insertValue:()=>Wl,isActive:()=>rd,isCompleted:()=>nd,isFailed:()=>id,isPotential:()=>td,isRef:()=>Ml,item:()=>au,itemListElement:()=>pu,items:()=>du,keys:()=>Ll,name:()=>hu,numberOfItems:()=>bu,object:()=>Au,objects:()=>_u,position:()=>Tu,potentialAction:()=>Cu,potentialActions:()=>Ru,properties:()=>Nr,recordID:()=>Nl,recordId:()=>kl,recordType:()=>xl,record_id:()=>Ui,record_type:()=>ml,ref:()=>El,result:()=>Bu,results:()=>Mu,setActionStatus:()=>Xl,setActive:()=>od,setAdditionalProperty:()=>zl,setAtValue:()=>Gl,setCompleted:()=>ad,setContentUrl:()=>eu,setDescription:()=>nu,setEmail:()=>ou,setFailed:()=>ld,setID:()=>Rl,setId:()=>Bl,setIfNull:()=>Fl,setItem:()=>uu,setItemListElement:()=>mu,setItems:()=>fu,setName:()=>xu,setNumberOfItems:()=>wu,setObject:()=>Su,setObjects:()=>Iu,setPosition:()=>Pu,setPotential:()=>sd,setPotentialAction:()=>vu,setPotentialActions:()=>Du,setRecordID:()=>Cl,setRecordId:()=>Tl,setRecordType:()=>Vl,setRecord_id:()=>_l,setRecord_type:()=>yl,setResult:()=>Hu,setResults:()=>Lu,setTargetCollection:()=>Ju,setTargetCollections:()=>Gu,setText:()=>Xu,setType:()=>$l,setUrl:()=>ed,setValue:()=>R,setValueIfNull:()=>Ei,setValues:()=>Me,targetCollection:()=>Fu,targetCollections:()=>zu,text:()=>Ku,toRecordID:()=>Hi,toRecordId:()=>Hl,toRecord_id:()=>He,toRecord_ids:()=>Ul,toRef:()=>Mi,url:()=>Zu});var we="en-CA";function ml(e){return I(e,"@type")}function hl(e){return I(e,"@type")}function yl(e,t){return R(e,"@type",t)}function xl(e){return I(e,"@type")}function bl(e){return I(e,"@type")}function Vl(e,t){return R(e,"@type",t)}function wl(e){return I(e,"@type")}function Al(e){return I(e,"@type")}function $l(e,t){return R(e,"@type",t)}function Ui(e){return I(e,"@id")}function Sl(e){return I(e,"@id")}function _l(e,t){return R(e,"@id",t)}function kl(e){return I(e,"@id")}function Il(e){return I(e,"@id")}function Tl(e,t){return R(e,"@id",t)}function Nl(e){return I(e,"@id")}function Pl(e){return I(e,"@id")}function Cl(e,t){return R(e,"@id",t)}function jl(e){return I(e,"@id")}function vl(e){return I(e,"@id")}function Rl(e,t){return R(e,"@id",t)}function Ol(e){return I(e,"@id")}function Dl(e){return I(e,"@id")}function Bl(e,t){return R(e,"@id",t)}function He(e){return i.isArray(e)?e.map(t=>He(t)):typeof e=="string"?e:Ui(e)}function Ul(e){return He(e)}function Hi(e){return He(e)}function Hl(e){return He(e)}function Ml(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function El(e){if(e?._isThingClass==!0)return e.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function Mi(e){return i.isArray(e)?e.map(t=>Mi(t)):{"@id":Hi(e)}}function Ll(e){return Nr(e)}function Nr(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(Nr(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function I(e,t,r,n,s){let o=Pr(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function R(e,t,r,n,s){if(n!==void 0){let o=i.getValues(e,t);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return Me(e,t,r,s)}function Ei(e,t,r,n,s){let o=I(e,t,n);return i.isNull(o)==!1?e:R(e,t,r,n,s)}function Fl(e,t,r,n,s){return Ei(e,t,r,n,s)}function Li(e,t,r){return Fi(e,t,r)}function Fi(e,t,r){return r=i.getValues(e,t).concat(r),Me(e,t,r)}function Pr(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),o=e;for(let l=0;l<s.length;l++){let[d,u]=Tr(s[l]);d&&(o=o?.[d],o=i.toArray(o)),o=o.filter(f=>f?.["@language"]==n||f?.["@language"]==we||f?.["@language"]===void 0),o=o.map(f=>f?.["@value"]??f),o=i.toArray(o),o=o.map(f=>f?.[n]??f?.[we]??f),o=i.toArray(o),l<s.length-1&&(o=o?.[u])}let a=i.toArray(o);return a.length==0&&r!==void 0?r:a}function Me(e,t,r,n){e=e?.record||e;let s=t.split("."),o=e||{};for(let d=0;d<s.length-1;d++){let[u,f]=Tr(s[d]);o[u]=i.toArray(o?.[u]||[]);let b;for(o?.[u]?.[n]?(o[u][n]=i.toArray(o?.[u]?.[n]),b=o[u][n]):o?.[u]?.[we]?(o[u][we]=i.toArray(o?.[u]?.[we]),b=o[u][we]):(o[u]=i.toArray(o?.[u])||[],b=o[u]);b.length-1<f;)b.push({"@type":"Thing"});o=b?.[f]}let[a,l]=Tr(s[s.length-1]);return o[a]=i.toArray(r),e}function Wl(e,t,r){return Wi(e,t,r)==!0?e:Li(e,t,r)}function Wi(e,t,r){let n=Pr(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function Tr(e){if(e===void 0)return[void 0,0];let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function Jl(e,t){let n=i.getValues(e,"additionalProperty").find(o=>i.getValue(o,"propertyID")==t);return i.getValue(n,"value")}function zl(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(a=>i.getValue(a,"propertyID")!=t);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r,unitText:n};return s.push(o),e=i.setValues(e,"additionalProperty",s),e}function ql(e){return i.getValues(e,"@value")}function Gl(e,t){return i.setValues(e,"@value",t)}function Kl(e){return i.getValue(e,"actionStatus")}function Yl(e){return i.getValue(e,"actionStatus")}function Xl(e,t){return i.setValue(e,"actionStatus",t)}function Zl(e){return i.getValue(e,"contentUrl")}function Ql(e){return i.getValue(e,"contentUrl")}function eu(e,t){return i.setValue(e,"contentUrl",t)}function tu(e){return i.getValue(e,"description")}function ru(e){return i.getValue(e,"description")}function nu(e,t){return i.setValue(e,"description",t)}function iu(e){return i.getValue(e,"email")}function su(e){return i.getValue(e,"email")}function ou(e,t){return i.setValue(e,"email",t)}function au(e){return i.getValue(e,"item")}function lu(e){return i.getValue(e,"item")}function uu(e,t){return i.setValue(e,"item",t)}function du(e){return i.list.getItems(e)}function cu(e){return i.list.getItems(e)}function fu(e,t){return i.list.setItems(e,t)}function pu(e){return i.list.getItemListElement(e)}function gu(e){return i.list.getItemListElement(e)}function mu(e,t){return i.list.setItemListElement(e,t)}function hu(e){return i.getValue(e,"name")}function yu(e){return i.getValue(e,"name")}function xu(e,t){return i.setValue(e,"name",t)}function bu(e){return i.getValue(e,"numberOfItems")}function Vu(e){return i.getValue(e,"numberOfItems")}function wu(e,t){return i.setValue(e,"numberOfItems",t)}function Au(e){return i.getValue(e,"object")}function $u(e){return i.getValue(e,"object")}function Su(e,t){return R(e,"object",t)}function _u(e){return i.getValues(e,"object")}function ku(e){return i.getValues(e,"object")}function Iu(e,t){return Me(e,"object",t)}function Tu(e){return i.list.getPosition(e)}function Nu(e){return i.list.getPosition(e)}function Pu(e,t){return i.list.setPosition(e,t)}function Cu(e){return i.getValues(e,"potentialAction")}function ju(e){return i.getValues(e,"potentialAction")}function vu(e,t){return i.setValues(e,"potentialAction",t)}function Ru(e){return i.getValues(e,"potentialAction")}function Ou(e){return i.getValues(e,"potentialAction")}function Du(e,t){return i.setValues(e,"potentialAction",t)}function Bu(e){return i.getValue(e,"result")}function Uu(e){return i.getValue(e,"result")}function Hu(e,t){return R(e,"result",t)}function Mu(e){return i.getValues(e,"result")}function Eu(e){return i.getValues(e,"result")}function Lu(e,t){return Me(e,"result",t)}function Fu(e){return i.getValue(e,"targetCollection")}function Wu(e){return i.getValue(e,"targetCollection")}function Ju(e,t){return i.setValue(e,"targetCollection",t)}function zu(e){return i.getValues(e,"targetCollection")}function qu(e){return i.getValues(e,"targetCollection")}function Gu(e,t){return i.setValues(e,"targetCollection",t)}function Ku(e){return i.getValue(e,"text")}function Yu(e){return i.getValue(e,"text")}function Xu(e,t){return i.setValue(e,"text",t)}function Zu(e){return i.getValue(e,"url")}function Qu(e){return i.getValue(e,"url")}function ed(e,t){return i.setValue(e,"url",t)}function td(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function rd(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function nd(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function id(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function sd(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function od(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function ad(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")||new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")||new Date().toISOString()),e=i.setValue(e,"error",void 0),i.isNotNull(t)&&(e=i.setValue(e,"result",t)),e}function ld(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date().toISOString()),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function ud(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function dd(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var vr={};m(vr,{_utilGetId:()=>Sd,getDataType:()=>fd,isArray:()=>Qi,isBoolean:()=>Ji,isDate:()=>Ki,isJsonld:()=>Zi,isNotArray:()=>Ad,isNotBoolean:()=>gd,isNotDate:()=>bd,isNotNull:()=>pd,isNotNumber:()=>hd,isNotObject:()=>Vd,isNotString:()=>yd,isNull:()=>jr,isNumber:()=>zi,isObject:()=>Xi,isString:()=>Gi,randomUUID:()=>cd,toArray:()=>es,toBoolean:()=>md,toDate:()=>Yi,toNumber:()=>qi,toObject:()=>wd,toSingle:()=>$d,toString:()=>xd});function cd(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function fd(e){if(jr(e))return"Undefined";if(Qi(e))return"Array";if(Zi(e))return"Jsonld";let t=Yi(e);if(Ki(t))return"Date";let r=qi(e);return zi(r)?"Number":Xi(e)?"Object":Gi(e)?'String"':Ji(e)?"Boolean":"Undefined"}function jr(e){return c.isNull(e)}function pd(e){return c.isNotNull(e)}function Ji(e){return c.isBoolean(e)}function gd(e){return c.isNotBoolean(e)}function md(e){return c.toBoolean(e)}function zi(e){return c.isNumber(e)}function hd(e){return c.isNotNumber(e)}function qi(e){return c.toNumber(e)}function Gi(e){return c.isString(e)}function yd(e){return c.isNotString(e)}function xd(e){return c.toString(e)}function Ki(e){return c.isDate(e)}function bd(e){return c.isNotDate(e)}function Yi(e){return c.toDate(e)}function Xi(e){return c.isObject(e)}function Vd(e){return c.isNotObject(e)}function wd(e){return c.toObject(e)}function Zi(e){return jr(e)?!1:!!(e?.["@id"]||e?.["@type"])}function Qi(e){return c.isArray(e)}function Ad(e){return c.isNotArray(e)}function es(e){return c.toArray(e)}function $d(e){return e=es(e),e?.[0]??void 0}function Sd(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var Rr={};m(Rr,{concat:()=>_d,dedupe:()=>ts,deleteItem:()=>Td,diff:()=>Id,filter:()=>jd,find:()=>Cd,includes:()=>ot,insertItem:()=>Nd,intersection:()=>kd,length:()=>Pd,search:()=>ns,sort:()=>Ae,upsertItem:()=>rs});function ts(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)ot(r,n)==!1&&(t==!0&&i.isValid(n)&&ns(e,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=Ae(r),r}function ot(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function _d(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=ts(n)),n=Ae(n),n}function Ae(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function kd(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!0&&r.push(n);return r=Ae(r),r}function Id(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!1&&r.push(n);return r=Ae(r),r}function Td(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function rs(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function Nd(e,t){return rs(e,t)}function Pd(e){return e=i.toArray(e),e.length}function Cd(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function ns(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function jd(e,t,r,n,s,o){return e=i.toArray(e),e.length==0||(i.isNotNull(t)&&(e=e.filter(a=>i.evaluate(a,t))),e=Ae(e,r,n),e.length==0)||(o=i.toNumber(o),i.isNumber(o)&&(e=e.slice(o)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=e.slice(0,s))),e}var Or={};m(Or,{exportToString:()=>is});function is(e){return Array.isArray(e)?vd(e):i.record_type(e)=="ListItem"?Rd(e):i.record_type(e)=="ItemList"?Od(e):i.record_type(e)=="Action"?Dd(e):i.getValue(e,"name")||i.getValue(e,"@id")}function vd(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=is(r)+`
`),t}function Rd(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function Od(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function Dd(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var Br={};m(Br,{DatabaseHelper:()=>Dr,testDB:()=>Bd});var Dr=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Bd(){}var qr={};m(qr,{add:()=>Ld,append:()=>Ee,clean:()=>Ur,decrementPositions:()=>Jr,duplicate:()=>Kd,ensurePositions:()=>Se,ensurePreviousNextItem:()=>ut,filter:()=>Yd,find:()=>F,findByItem:()=>Mr,findByListItem:()=>Hr,findByPosition:()=>cs,getILE:()=>Ed,getItem:()=>We,getItemListElement:()=>_,getItems:()=>fs,getListItems:()=>Xd,getMaxPosition:()=>Fe,getMinPosition:()=>zr,getPosition:()=>T,gt:()=>ds,incrementPositions:()=>Wr,insert:()=>j,insertAfter:()=>Fr,insertBefore:()=>Lr,isItemList:()=>C,isListItem:()=>at,length:()=>Md,lt:()=>us,move:()=>Fd,moveAfter:()=>qd,moveBefore:()=>zd,moveDown:()=>Jd,moveUp:()=>Wd,prepend:()=>os,remove:()=>ls,replace:()=>as,replaceItem:()=>Zd,setItem:()=>gs,setItemListElement:()=>O,setItems:()=>ps,setPosition:()=>lt,sort:()=>Le,toItemList:()=>Hd,toListItem:()=>$e,toString:()=>Ud,toStringItemList:()=>ss,toStringListItem:()=>Er,upsert:()=>Gd});function Ud(e){return C(e)?ss(e):Er(e)}function ss(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=_(e);return t=t.concat(r.map(n=>Er(n))),t.join(`
`)}function Er(e){return`${T(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function C(e){return i.record_type(e)==="ItemList"}function Hd(e){if(C(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>$e(r,n))},Ur(e)}return Ur(e)}function Ur(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=_(e);return t=t.map(r=>$e(r)),t=Se(t),t=ut(t),e=O(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function Md(e){return _(e).length}function _(e){return i.getValues(e,"itemListElement")||[]}function Ed(e){return _(e)}function O(e,t){return t=i.toArray(t),t=t.map(n=>$e(n)),t=Se(t),t=ut(t),e=i.setValues(e,"itemListElement",t),i.getValue(e,"numberOfItems")!=t.length&&(e=i.setValue(e,"numberOfItems",t.length)),e}function j(e,t,r){if(e=Se(e),i.isArray(t)){let s=r;for(let o of t)e=j(e,o,s),(s||s===0)&&(s+=1);return e}t=$e(t,r);let n=_(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??Fe(n),r=r??n.length,r=r>=0?r:0,n=Wr(n,r),n=Le(n),n.push(t),e=O(e,n),e}function Lr(e,t,r){if(i.isArray(t)){for(let o of t)e=Lr(e,o,r);return e}let n=F(e,r);if(!n)return j(e,t);let s=T(n);return j(e,t,s)}function Fr(e,t,r){if(i.isArray(t)){for(let o of t)e=Fr(e,o,r);return e}let n=F(e,r);if(!n)return j(e,t);let s=T(n);return j(e,t,s+1)}function os(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=os(e,t?.[r]);return e}return j(e,t,0)}function Ee(e,t){if(i.isArray(t)){for(let s of t)e=Ee(e,s);return e}let r=_(e);if(r.length==0)return j(e,t,0);let n=Fe(e);return n||n===0?j(e,t,n+1):j(e,t,r.length)}function Ld(e,t){return Ee(e,t)}function Fd(e,t,r){return j(e,t,r)}function Wd(e,t){let r=F(e,t),n=T(r);return n==0?e:j(e,r,n-1)}function Jd(e,t){let r=F(e,t),n=T(r),s=Fe(e);return n==s?e:j(e,r,n+1)}function zd(e,t,r){return Lr(e,t,r)}function qd(e,t,r){return Fr(e,t,r)}function as(e,t,r){let n=_(e),s=[];for(let o of n){let a=We(o);i.isSame(a,r)&&(o=gs(o,t)),s.push(o)}return O(e,s)}function Gd(e,t){return F(e,t)?as(e,t,i.ref(t)):Ee(e,t)}function Kd(e,t){if(at(t)){let r=F(t);t=We(r)}return Ee(e,t)}function ls(e,t){if(i.isArray(t)){for(let o of t)e=ls(e,o);return e}e=Se(e);let r=_(e),n=F(r,t),s=T(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=Jr(r,s),e=O(e,r),e}function Yd(e,t){return C(e)&&(e=i.getItemListElement(e)),t&&(e=i.filter(e,t)),e}function at(e){return i.record_type(e)==="ListItem"}function $e(e,t){return at(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function us(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function ds(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Le(e){if(C(e)){let r=e,n=_(r),s=Le(n);return O(r,s)}function t(r,n){return us(r,n)==!0?-1:ds(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function F(e,t){if(!i.isNull(t))return i.isNumber(t)?cs(e,t):at(t)?Hr(e,t):i.record_type(t)?Mr(e,t):Mr(e,t)||Hr(e,t)}function cs(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(T(r)==t)return r}}function Hr(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function Mr(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=We(r);if(i.isSame(n,t))return r}}function T(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function lt(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,T(e)==t||(e=i.setValue(e,"position",t)),e}function Wr(e,t){if(t=t??0,C(e)){let n=e;e=_(n);let s=Wr(e,t);return O(n,s)}let r=[];for(let n of e){let s=T(n);s>=t&&(n=lt(n,s+1)),r.push(n)}return r}function Jr(e,t){if(t=t??0,C(e)){let n=e;e=_(n);let s=Jr(e,t);return O(n,s)}let r=[];for(let n of e){let s=T(n);s!=0&&s>=t&&(n=lt(n,s-1)),r.push(n)}return r}function Se(e,t){if(C(e)){let s=e;e=_(s);let o=Se(e);return O(s,o)}if(e=i.toArray(e),e.length==0)return e;e=Le(e);let r=t??zr(e)??0,n=[];for(let s of e)s=lt(s,r),r+=1,n.push(s);return n}function zr(e){if(C(e)){let s=_(s);return zr(s)}e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function Fe(e){if(C(e))return e=_(e),Fe(e);e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function ut(e){if(C(e)){let r=e;e=_(r);let n=ut(e);return O(r,n)}e=i.toArray(e),e=Le(e);let t=[];for(let r of e){let n=T(r),s=F(e,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let a=F(e,n+1),l=a?i.ref(a):void 0;r=i.setValue(r,"nextItem",l),t.push(r)}return t}function fs(e){if(C(e)){let n=_(e);return fs(n)}return e.map(r=>We(r))}function ps(e,t){if(C(e)){let n=e;e=_(n);let s=ps(e);return O(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>$e(n)),e.concat(t)}function Xd(e){return _(e)}function We(e){return i.getValue(e,"item")}function gs(e,t){return i.setValue(e,"item",t)}function Zd(e,t,r){let n=_(e),s=i.toRecordID(t);for(let o=0;o<n.length;o++){let a=n[o];i.record_id(a)==s&&(n[o]=i.setItem(a,r))}return e=O(n),e}var Yr={};m(Yr,{appendAction:()=>bs,deleteAction:()=>$s,duplicateAction:()=>As,execute:()=>Gr,insertAction:()=>ms,insertAfterAction:()=>ys,insertBeforeAction:()=>hs,moveDownAction:()=>ws,moveUpAction:()=>Vs,prependAction:()=>xs,replaceAction:()=>Kr,searchAction:()=>tc});function Gr(e){if(i.isArray(e)){let n=new i.DB;n.set(e);let s=[];for(let o of e){o=n.get(o);let a=Gr(o);s.push(a),n.set(i.getResults(a))}return s}let t=i.getValues(e,"hasPart");if(t.length>0){let n=t.map(u=>i.list.toItemList(u)),s=new i.DB;s.set(n);let o=[],a,l=!1;for(let u of n){let f=i.list.getItemListElement(u);for(let b of f){let y=i.getItem(b);y=s.get(y),l==!0&&(y=i.setFailed(y,"Previous step failed"),u=i.list.replaceItem(u,b,a)),l==!1&&(a=Gr(y),l=i.isFailed(a),u=i.list.replaceItem(u,b,a),s.set(i.getResults(a)))}o.push(u)}e=i.setValues(e,"hasPart",o);let d=i.getResults(a);return e=i.setCompleted(e,d),e}let r=i.record_type(e);if(r=="UpsertAction")return ec(e);if(r=="ReplaceAction")return Kr(e);if(r=="UpdateAction")return Qd(e);if(r=="InsertAction")return ms(e);if(r=="InsertBeforeAction")return hs(e);if(r=="InsertAfterAction")return ys(e);if(r=="MoveUpAction")return Vs(e);if(r=="MoveDownAction")return ws(e);if(r=="AppendAction")return bs(e);if(r=="PrependAction")return xs(e);if(r=="ReplaceAction")return Kr(e);if(r=="DuplicateAction")return As(e);if(r=="DeleteAction")return $s(e)}function Qd(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t){let o=i.getValue(s,"propertyID"),a=i.getValue(s,"value");n=i.setValues(n,o,a)}e=i.addValue(e,"result",n)}return r.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function ec(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r)n=i.list.upsert(n,t),e=i.addValue(e,"result",n);return r.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function ms(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let o of t)s=i.list.insert(s,o,r);e=i.addValue(e,"result",s)}return n.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function hs(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let o of t)s=i.list.insertBefore(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function ys(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let o of t)s=i.list.insertAfter(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function xs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function bs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Vs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function ws(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Kr(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee");return n.length==0?(e=i.setFailed(e,"No replacee provided in action"),e):(t=i.list.replace(t,r,n),e=i.addValue(e,"result",t),e=i.setCompleted(e),e)}function As(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function $s(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function tc(e){let t=i.getValues(e,"query"),r=i.targetCollections(e);for(let n of r){let s=i.list.getItemListElement(n);for(let a of t)s=i.list.filter(s,a);let o=i.list.toItemList(s);e=i.addValue(e,"result",o)}return e=i.setCompleted(e),e}var Zr={};m(Zr,{add:()=>rc,addAppendAction:()=>Ds,addDeleteAction:()=>js,addDuplicateAction:()=>Rs,addMoveDownAction:()=>Ps,addMoveUpAction:()=>Ts,addPotentialActions:()=>ft,addPropertyUpdateAction:()=>N,addSetActiveActionStatus:()=>Xr,addSetCompletedActionStatus:()=>dt,addSetFailedActionStatus:()=>ct,addSetPotentialActionStatus:()=>ks,defineActionsForAction:()=>_s,defineActionsForItemList:()=>Ss,getAppendAction:()=>Bs,getDeleteAction:()=>vs,getDuplicateAction:()=>Os,getMoveDownAction:()=>Cs,getMoveUpAction:()=>Ns,getPropertyUpdateAction:()=>Is});function rc(e,t){return ft(e,t)}function ft(e,t){if(!e||typeof e=="string")return e;if(i.isArray(e))return e.map(n=>ft(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=_s(e,t)),r=="ItemList"&&(e=Ss(e,t));for(let n of Object.keys(e))e[n]=ft(e[n],t);return e}function Ss(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let o=0;o<r.length;o++){let a=i.getPosition(r[o]);a>0&&(r[o]=Ts(r[o],e,t)),a<n-1&&(r[o]=Ps(r[o],e,t)),r[o]=js(r[o],e,t),r[o]=Rs(r[o],e,t)}e=i.setValues(e,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=Ds(e,s,t),e}function _s(e,t){return i.getValue(e,"actionStatus")||(e=ks(e,t),e=Xr(e,t),e=dt(e,t),e=ct(e,t)),i.isPotential(e)&&(e=Xr(e,t),e=dt(e,t),e=ct(e,t)),i.isActive(e)&&(e=dt(e,t),e=ct(e,t)),e}function ks(e,t){return e=N(e,t,"actionStatus","PotentialActionStatus"),e=N(e,t,"startTime",""),e=N(e,t,"endTime",""),e=N(e,t,"error",""),e}function Xr(e,t){let r=i.getValue(e,"startTime");return e=N(e,t,"actionStatus","ActiveActionStatus"),e=N(e,t,"startTime",r??new Date),e=N(e,t,"endTime",""),e=N(e,t,"error",""),e}function dt(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=N(e,t,"actionStatus","CompletedActionStatus"),e=N(e,t,"startTime",r??new Date),e=N(e,t,"endTime",n??new Date),e=N(e,t,"error",""),e}function ct(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=N(e,t,"actionStatus","FailedActionStatus"),e=N(e,t,"startTime",r??new Date),e=N(e,t,"endTime",n??new Date),e=N(e,t,"error",""),e}function N(e,t,r,n,s){let o=Is(e,t,r,n,s);return e=i.addValue(e,"potentialAction",o),e}function Is(e,t,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(e),url:t}}function Ts(e,t,r,n){let s=Ns(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Ns(e,t,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ps(e,t,r,n){let s=Cs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Cs(e,t,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function js(e,t,r,n){let s=vs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function vs(e,t,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Rs(e,t,r,n){let s=Os(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Os(e,t,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ds(e,t,r,n){let s=Bs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Bs(e,t,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:t,targetCollection:i.ref(e),url:r}}var i={dot:fe,...Jt,...qt,...et,...$r,..._r,...Ir,...Cr,...vr,...Rr,...Or,...Br,list:qr,...Yr,potentialActionHelpers:Zr};var Sn={};m(Sn,{default:()=>Mc,things:()=>S});var Qr={};m(Qr,{getContent:()=>ic,getIcon:()=>lc,getTitle1:()=>Hs,getTitle2:()=>nc,imageUrl:()=>oc,imageUrls:()=>ac,thumbnailUrl:()=>sc});function Hs(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),o=i.getValue(e,"familyName"),a=i.getValue(e,"name");if(r=="Person"){let l=[s,o];if(l=l.filter(d=>d!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=i.getValue(e,"item");return Hs(l)}return a||n||""}function nc(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let a=i.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function ic(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o;return o=i.getValue(e,"abstract"),o&&typeof o=="string"||(o=i.getValue(e,"text"),o&&typeof o=="string")||(o=i.getValue(e,"description"),o&&typeof o=="string")?o:""}function sc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function oc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function ac(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function lc(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Us;case"action":return uc;case"person":return dc;case"organization":return cc;case"itemlist":return fc;case"listitem":return pc;case"postaladdress":return gc;case"product":return mc;case"webapi":return hc;case"website":return yc;case"webpage":return xc;default:return Us}}var Us='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',uc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',dc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',cc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',fc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',pc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',gc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',mc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',hc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',yc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',xc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Fg=globalThis.crypto.randomUUID;function gt(e,t){if(Array.isArray(e))return e.map(n=>gt(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=gt(e);let r=i.record_type(e);return e=pt(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=pt(e,"MoveUpAction","Move Up",t),e=pt(e,"MoveDownAction","Move Down",t),e=pt(e,"DeleteAction","Delete",t)),e}function pt(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=bc(e,s),e}function bc(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var en={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function mt(e){let t=[];return t=t.concat(en?.[e]?.properties||[]),en?.[e]?.parent&&(t=t.concat(mt(en[e].parent))),t}function ht(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:$.thing("Object thing"),instrument:$.thing("Instrument thing"),agent:$.person("Agent thing"),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(ht(a,t-1))}return s}function tn(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function yt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:Vc(),image:$.image(),hasPart:[]};if(r==0&&(o.author=$.person(),o.datePublished=new Date().toISOString()),r<t)for(let a=0;a<3;a++){let l=e+"_"+String(a);o.hasPart.push(yt(l,t,r+1))}return o}function Vc(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Je(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var im=globalThis.crypto.randomUUID;function rn(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let o=0;o<e;o++){let a=wc($.thing(o),o);s&&(s.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(a),s=a}return n}function wc(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function nn(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:$.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:$.organization("org_a")}}function sn(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:$.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function on(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:$.address()}}function an(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function ln(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function un(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let a=$.product(`variant ${s} ${o}`);a.size=s,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function xt(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:Je(e),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(xt(a,t-1))}return s}function dn(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:$.person(0),recipient:[$.person(10),$.person(11),$.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function cn(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<t;o++){let a=e+"_"+String(o),l=$.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-t+o),l.dateSent=d,l.dateReceived=d,s.hasPart.push(l)}return s}var $={action:ht,article:yt,address:tn,conversation:cn,image:Je,itemList:rn,message:dn,offer:nn,organization:sn,person:on,postalAddress:an,product:ln,productGroup:un,thing:xt,Action:ht,Article:yt,Address:tn,Conversation:cn,Image:Je,ItemList:rn,Message:dn,Offer:nn,Organization:sn,Person:on,PostalAddress:an,Product:ln,ProductGroup:un,Thing:xt};var pn={};m(pn,{jsonToMarkdown:()=>fn});function fn(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${a+1}:**
`,n+=fn(o,t+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${s}* **${o}:**
`,n+=fn(a,t+1)):n+=`${s}* **${o}:** ${a}
`}):n+=`${s}* ${r}
`;return n}var mn={};m(mn,{jsonToYaml:()=>ze,yamlToJson:()=>Ac});function ze(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=ze(o,t+2).trimStart();n+=a}else n+=ze(o,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(o=>{let a=e[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+ze(a,t+2):n+=" "+ze(a,0)}),n)}function Ac(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),a=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let d=n[n.length-1],u=a.substring(1).trim();if(u.includes(":")){let[f,...b]=u.split(":"),y=f.trim(),A=b.join(":").trim(),M=gn(A),te={[y]:M};d.value.push(te),n.push({indent:o+2,value:te,type:"object",lastKey:y})}else d.value.push(gn(u))}else if(a.includes(":")){let[d,...u]=a.split(":"),f=d.trim(),b=u.join(":").trim();l.lastKey=f,b===""?(l.value[f]={},n.push({indent:o,value:l.value[f],type:"object",lastKey:f})):l.value[f]=gn(b)}}return r}function gn(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var Ms={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Es="DesignToken",Ls={css:{get:kc},get:hn,set:Fs,getValue:Sc,setValue:_c,sampleRecord:Ws};function hn(e){if(!e)return;let t=i.getAdditionalProperty(e,Es);return t=t||{},t}function Fs(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,Es,t),e}function Sc(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=hn(e),n=Ne(r,t);return Ne(n,"$value")}function _c(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=hn(),s=Ws(),o=Ne(s,t);return o.$value=r,n=Qe(n,t,o),e=Fs(e,n),e}function kc(e,t="dt"){let r=[];function n(a,l=[]){for(let[d,u]of Object.entries(a)){if(u==null)continue;let f=[...l,d];if(typeof u=="object"&&"value"in u){let b=`--${f.map(A=>A.toLowerCase()).join("-")}`,y=s(u.value);r.push(`  ${b}: ${y};`)}else if(typeof u=="object"&&!Array.isArray(u))n(u,f);else{let b=`--${f.map(A=>A.toLowerCase()).join("-")}`,y=s(u);r.push(`  ${b}: ${y};`)}}}function s(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function Ws(){return Ms}var p={markdown:pn,yaml:mn,designToken:Ls};var Vt=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return yn(this.record)}toJSON(){return this.record}toMD(){return p.markdown.jsonToMarkdown(this.record)}toYaml(){return p.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=xe(bt(this._record),this.baseUrl)),i.simplify(bt(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(bt(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=Z(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(bt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return mt(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(a){console.log("Callback failed: ",o,String(a),s)}}static toString(t){return yn(t)}static toMD(t){return p.markdown.jsonToMarkdown(t)}static toYaml(t){return p.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new S[r](p.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return Z(t)}static example(t=0,r=5){let n=this.name;return new S[n]($[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return mt(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,Z(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,Z(n))}static addValue(t,r,n){return i.addValue(t,r,Z(n))}static addValues(t,r,n){return i.addValues(t,r,Z(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return gt(t)}static addAdditionalProperty(t,r,n){return Ic(t,"additionalProperty",r,n)}};function bt(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=t(n?.[o]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function Z(e){if(Array.isArray(e))return e.map(t=>Z(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=S?.[t]||S.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=Z(e._record?.[t]);return e}function yn(e){if(Array.isArray(e)){let o=e.map(a=>yn(a));return o=o.join(`
`),o}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Ic(e,t,r,n){let s=new S.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var V=class extends Vt{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=c.url.clean(value),t}set cleanUrl(t){url=c.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=xe(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var oe=class extends V{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(this.record,t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,o,a){return search(t,r,n,s,o,a)}};var v=class extends V{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return Js(this.record,t)}static test(t,r){return Js(t,r)}};function Js(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",o=new RegExp(t.valuePattern,"gi");if(e.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var qe=class extends V{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=Ks(this.record,t,r)}addMaxValue(t,r){this.record=Ys(this.record,t,r)}addMinLength(t,r){this.record=Xs(this.record,t,r)}addMaxLength(t,r){this.record=Zs(this.record,t,r)}addDefaultValue(t,r){this.record=Qs(this.record,t,r)}addValueRequired(t,r){this.record=eo(this.record,t,r)}addValuePattern(t,r){this.record=zs(this.record,t,r)}addMultipleValues(t,r){this.record=qs(this.record,t,r)}addStepValue(t,r){this.record=Gs(this.record,t,r)}testConditions(){return xn(this.record)}getInputconditions(){return B(this.record)}addInputCondition(t,r){return this.addValues(t+"-input",r)}getOutputConditions(){return Tc(this.record)}addOutputCondition(t,r){return this.addValues(t+"-output",r)}test(){return xn(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return Ks(t,r,n)}static addMaxValue(t,r,n){return Ys(t,r,n)}static addMinLength(t,r,n){return Xs(t,r,n)}static addMaxLength(t,r,n){return Zs(t,r,n)}static addDefaultValue(t,r,n){return Qs(t,r,n)}static addValueRequired(t,r,n){return eo(t,r,n)}static addValuePattern(t,r,n){return zs(t,r,n)}static addMultipleValues(t,r,n){return qs(t,r,n)}static addStepValue(t,r,n){return Gs(t,r,n)}static test(t){return xn(t)}};function B(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function K(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function Tc(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function zs(e,t,r){let n=B(e,t)||new v;return n.valuePattern=r,e=K(e,t,n),e}function qs(e,t,r){let n=B(e,t)||new v;return n.multipleValues=r,e=K(e,t,n),e}function Gs(e,t,r){let n=B(e,t)||new v;return n.stepValue=r,e=K(e,t,n),e}function Ks(e,t,r){let n=B(e,t)||new v;return n.minValue=r,e=K(e,t,n),e}function Ys(e,t,r){let n=B(e,t)||new v;return n.maxValue=r,e=K(n.record,t,r),e}function Xs(e,t,r){let n=B(e,t)||new v;return n.valueMinLength=r,e=K(e,t,n),e}function Zs(e,t,r){let n=B(e,t)||new v;return n.valueMaxLength=r,e=K(e,t,n),e}function Qs(e,t,r){let n=B(e,t)||new v;return n.defaultValue=r,e=K(e,t,n),e}function eo(e,t,r){let n=B(e,t)||new v;return n.valueRequired=r,e=K(e,t,n),e}function xn(e){let t=B(e);for(let r of t)if(v.test(r,e?.[r.propertyID])==!1)return!1;return!0}var W=class extends qe{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(t){return this.setValues("targetCollection",t)}get toLocation(){return this.getValues("toLocation")}set toLocation(t){return this.setValues("toLocation",t)}},wt=class extends W{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},At=class extends W{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},$t=class extends W{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(t){return this.setValues("replacer",t)}get replacee(){return this.getValues("replacee")}set replacee(t){return this.setValues("replacee",t)}},St=class extends W{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},_t=class extends W{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},kt=class extends W{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var It=class extends V{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return Nc(this.record)}get(t){return p.designToken.getValue(this.record,t)}set(t,r){return p.designToken.setValue(this.record,t,r)}get token(){return p.designToken.get(this.record)}set token(t){this.record=p.designToken.set(this.record,t)}get primary(){return p.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=p.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return p.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=p.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return p.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=p.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return p.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=p.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return p.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=p.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return p.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=p.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return p.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=p.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new Tt(this,"typography.heading-lg")}get body(){return new Tt(this,"typography.body-md")}get spacingSm(){return p.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return p.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return p.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return p.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return p.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return p.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return p.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return p.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return p.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return p.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new bn(this,"shadow.elevation-md")}sample(){return p.designToken.getSampleRecord()}},Tt=class{constructor(t,r){this.base=t,this.basePath=w(r)}get fontFamily(){return p.designToken.getValue(record,w(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get fontWeight(){return p.designToken.getValue(record,w(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get fontSize(){return p.designToken.getValue(record,w(this.basePath,"fontSize"))}set fontSize(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get lineHeight(){return p.designToken.getValue(record,w(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get letterSpacing(){return p.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}get family(){return p.designToken.getValue(record,w(this.basePath,"fontFamily"))}set family(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get weight(){return p.designToken.getValue(record,w(this.basePath,"fontWeight"))}set weight(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get size(){return p.designToken.getValue(record,w(this.basePath,"fontSize"))}set size(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get height(){return p.designToken.getValue(record,w(this.basePath,"lineHeight"))}set height(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get spacing(){return p.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}},bn=class{constructor(t,r){this.base=t,this.basePath=w(r)}get color(){return p.designToken.getValue(record,w(this.basePath,"color"))}set color(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"color"),t)}get offsetX(){return p.designToken.getValue(record,w(this.basePath,"offsetX"))}set offsetX(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"offsetX"),t)}get offsetY(){return p.designToken.getValue(record,w(this.basePath,"offsetY"))}set offsetY(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"offsetY"),t)}get blur(){return p.designToken.getValue(record,w(this.basePath,"blur"))}set blur(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"blur"),t)}get spread(){return p.designToken.getValue(record,w(this.basePath,"spread"))}set spread(t){this.base.record=p.designToken.setValue(record,w(this.basePath,"spread"),t)}};function w(e,t,r){let n=[e,t,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Nc(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var D=class extends V{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var U=class extends D{constructor(t,r,n,s,o,a){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=a)}toString(){return wn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",_e(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",_e(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",_e(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",_e(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",_e(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return ro(this.record)}set gmail(t){this.record=to(t)}get outlook(){return io(this.record)}set outlook(t){this.record=no(t)}static toString(t){return wn(t)}static fromGmail(t){return to(t)}static toGmail(t){return ro(t)}static fromOutlook(t){return no(t)}static toOutlook(t){return io(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),t}};function wn(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(u=>wn(u)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=Vn(r,20);let s=i.getValues(e,"recipient").map(u=>u?.email||u?.name||"");s=Vn(s,25);let o=i.getValue(e,"headline")||"";o.length>20&&(o=Vn(o,30));let a=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${s} | ${o} | ${l}`}function Vn(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function _e(e){return e?Array.isArray(e)?e.map(t=>_e(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function to(e){let t=new U;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function ro(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function no(e){let t=new U;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function io(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var Pt=class extends D{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Pc(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=U.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return so(this.record)}add(t,r,n,s,o,a){this.record=Nt(this.record,t,r,n,s,o,a)}addMessage(t,r,n,s,o,a){this.record=Nt(this.record,t,r,n,s,o,a)}newMessage(t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);this.messages=this.messages.push(l)}static getParticipants(t){return so(t)}static newMessage(t,r,n,s,o,a,l){return Nt(t,r,n,s,o,a,l)}static addMessage(t,r,n,s,o,a,l){return Nt(t,r,n,s,o,a,l)}static getMessages(t){return Ge(t)}static getFirstMessage(t){let r=Ge(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=Ge(t);return r.length>0?r[r.length-1]:void 0}};function Pc(e){let t=Ge(e),r=`Conversation with ${t.length} messages:
`;return r+=U.toString(t),r}function Nt(e,t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);return e=i.addValues(e,"hasPart",l),e}function Ge(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=Cc(t),t}function Cc(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function so(e){let t=Ge(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var ke=class extends V{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return jc(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function jc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var Ct=class extends V{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return vc(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new ke(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function vc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var ae=class extends V{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return oo(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=V.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=V.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=V.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=V.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=V.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=V.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=V.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=V.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=V.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=V.setValues(this._record,"validThrough",t)}};function oo(e){if(Array.isArray(e))return e.map(s=>oo(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var le=class extends D{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return An(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new ae(t,r))}static addOffer(t,r,n="CAD"){return Rc(t,r,n)}static toString(t){return An(t)}};function An(e){if(Array.isArray(e))return e.map(r=>An(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function Rc(e,t,r){let n=new ae(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var jt=class extends le{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return $n(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=Oc(this.record,t)}generateVariants(t){this.record=Dc(this.record,t)}static toString(t){return $n(t)}};function $n(e){if(Array.isArray(e))return e.map(n=>$n(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+le.toString(n)+`
`;return t}function Oc(e,t){return e=i.addValues(e,"hasVariant",t),e}function Dc(e,t){if(Array.isArray(t)){let o={};for(let a of t)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);t=o}let r=Bc(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=V.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(e));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":e?.["@id"]};let l=[];for(let u of Object.keys(o))l.push(o?.[u]),s.includes(u)?a=i.setValue(a,u,o[u]):a=V.addAdditionalProperty(a,u,o[u]);let d=V.getValue(a,"name")+" "+l.join(" ");a=V.setValue(a,"name",d),e=V.addValue(e,"hasVariant",a)}return e}function Bc(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],o=[];for(let a of r)for(let l of s)o.push({...a,[n]:l});return o},[{}])}var vt=class extends V{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return ao(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function ao(e){if(Array.isArray(e))return e.map(r=>ao(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var ue=class extends D{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new oe(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=Ke(this.record,"WPHeader"),J(this.record,"WPHeader")}set WPHeader(t){this.record=z(this.record,"WPHeader",t)}get WPFooter(){return this.record=Ke(this.record,"WPFooter"),J(this.record,"WPFooter")}set WPFooter(t){this.record=z(this.record,"WPFooter",t)}get WPSideBar(){return this.record=Ke(this.record,"WPSideBar"),J(this.record,"WPSideBar")}set WPSideBar(t){this.record=z(this.record,"WPSideBar",t)}get Table(){return J(this.record,"Table")}set Table(t){this.record=z(this.record,"Table",t)}addHeaderLink(t,r){this.record=lo(this.record,t,r)}addFooterLink(t,r){this.record=uo(this.record,t,r)}domain(){return co(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=Uc(t,this.url)}static getWPHeader(t){return J(t,"WPHeader")}static getWPFooter(t){return J(t,"WPFooter")}static getWPSideBar(t){return J(t,"WPSideBar")}static getTable(t){return J(t,"Table")}static setWPHeader(t,r){return z(t,"WPHeader",r)}static setWPFooter(t,r){return z(t,"WPFooter",r)}static setWPSideBar(t,r){return z(t,"WPSideBar",r)}static setTable(t,r){return z(t,"Table",r)}static addHeaderLink(t,r,n){return lo(t,r,n)}static addFooterLink(t,r,n){return uo(t,r,n)}static getDomain(t){return co(i.getValue(t,"url")||t)}};function Ke(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function J(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function z(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function lo(e,t,r){e=Ke(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=z(e,"WPHeader",s),e}function uo(e,t,r){e=Ke(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=z(e,"WPFooter",s),e}function co(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function Uc(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(Hc(e)=="Product"){let l=n.filter(y=>i.record_type(y)=="Product")[0];s.push({replacee:i.record_id(l),replacer:t+"#product"}),l=i.setValue(l,"url",t);let d=i.getValues(l,"brand");d=d.map(y=>y?.["@type"]?{"@type":"brand",name:y}:y),l=i.setValues(l,"brand",d);let u=n.filter(y=>i.record_type(y)=="Offer");u=u.map(y=>i.setValues(y,"itemOffered",i.ref(l))),l=i.setValues(l,"offers",u);let f=n.filter(y=>i.record_type(y)=="Review");u=u.map(y=>i.setValues(y,"itemReviewed",i.ref(l))),l=i.setValues(l,"review",f);let b=n.filter(y=>i.record_type(y)=="AggregateRating");return b=b.map(y=>i.setValues(y,"itemReviewed",i.ref(l))),l=i.setValues(l,"aggregateRating",b),l=i.replaceIds(l,s),l}return e}function Hc(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var Rt=class extends ue{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new ue(this);return n.url=t,n.name=r,n}domain(){return fo(this.url)}static getDomain(t){return fo(i.getValue(t,"url")||t)}};function fo(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var Ot=class extends V{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var S={get:V.toThing,toThing:V.toThing,Action:qe,AddAction:wt,AppendAction:_t,BrandDesign:It,Conversation:Pt,CreativeWork:D,DataFeed:Ct,DataFeedItem:ke,DeleteAction:At,InsertAction:St,ItemList:oe,Message:U,Offer:ae,Product:le,ProductGroup:jt,PropertyValue:vt,Thing:V,PrependAction:kt,ReplaceAction:$t,UpdateAction:W,WebAPI:Ot,WebPage:ue,WebSite:Rt,format:Qr,toThing:Ec},Mc=S;function Ec(e){let t=i.record_type(e);return S?.[t]?new S[t](e):new S.Thing(e)}var kn={};m(kn,{Button:()=>Fc,DropdownMenu:()=>po,MenuItem:()=>Wc,escapeHtml:()=>Q});function Q(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Fc({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function _n(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?_n(n,s):`<input type="hidden" name="${Q(s)}" value="${Q(String(n))}">`}).join("")}function po({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},f=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),b=e?`<span class="mr-2">${Q(e)}</span>${f}`:`${f}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let y=t.map(A=>{if(A.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let M=_n(A.object),te=A.disabled?"disabled":"";return`
        <form method="POST" action="${Q(A.url||"")}" class="m-0 p-0">
          ${M}
          <button
            type="submit"
            ${te}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${Q(A.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${a}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${d[n]||d.ghost} ${u[s]||u.icon}"
      >
        ${b}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${y}
      </div>
    </details>
  `.trim()}function Wc(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=_n(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${Q(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${Q(h.getName(item)||"")}
          </button>
        </form>`}var Y={};m(Y,{components:()=>g});var In={};m(In,{Accordion:()=>Jc});function Jc({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var Tn={};m(Tn,{Alert:()=>zc});function zc({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var Nn={};m(Nn,{Article:()=>qc,ArticleBody:()=>Qc,ArticleCard:()=>tf,ArticleCardBody:()=>nf,ArticleCardFooter:()=>sf,ArticleCardHeader:()=>rf,ArticleCardMedia:()=>af,ArticleCardTitle:()=>of,ArticleCategory:()=>Kc,ArticleFooter:()=>ef,ArticleHeader:()=>Gc,ArticleMedia:()=>Zc,ArticleSubTitle:()=>Xc,ArticleTitle:()=>Yc});function qc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${t||""}"
    >
    
        ${e||""}
    
    </article>
    
    `}function Gc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <header 
        class="${t||""}"
    >
    
        ${e||""}
    
    </header>
    
    `}function Kc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${t||""}"
     >
        ${e||""}
     
     </p>

    `}function Yc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${t||""}"
        >
            ${e||""}
        </h1>

    `}function Xc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${t||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${e||""}</span>

        </div>

    `}function Zc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${t||""}"
        >

            ${e||""}
        
        </div>

    `}function Qc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${t||""}"
        >
            ${e||""}
        </div>
    `}function ef(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="${t||""}"
        >
            
            ${e||""}

        </div>

    
    `}function tf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}

    </article>
    
    `}function rf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}
            
    </article>
    
    `}function nf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <div class="p-5 ${t||""}">


            ${e||""}
            
    </div>
    
    `}function sf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${t||""}">
          ${e||""}
    </div>
    
    `}function of(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${t||""}">


            ${e||""}
            
    </h3>
    
    `}function af(e,t){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${t||""}"
    >


            ${e||""}
            
    </div>
    
    `}var Pn={};m(Pn,{Badge:()=>lf,Badges:()=>uf});function lf(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function uf(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
        <span class="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          ${e||""}
        </span>
        `:r=="destructive"?`
        <span class="inline-flex items-center rounded-md border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground transition-colors hover:bg-destructive/80">
          ${e||""}
        </span>

    `:r=="outline"?`

        <span class="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">
            ${e||""}
        </span>

    `:`
     <span class="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      ${e||""}
    </span>
    `}var Cn={};m(Cn,{Breadcrumb:()=>df,BreadcrumbEllipsis:()=>ff,BreadcrumbItem:()=>ho,BreadcrumbLink:()=>yo,BreadcrumbList:()=>mo,BreadcrumbMain:()=>go,BreadcrumbPage:()=>cf,BreadcrumbSeparator:()=>xo});function df({urls:e,titles:t,links:r}){let n=new S.ItemList(r);if(e)for(let a=0;a<e.length;a++){let l=t?.[a]||e[a].split("/")?.[e[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[a],name:l})}let s=n.items;return console.log("items",s),go({children:mo({children:s.map(a=>ho({children:yo({href:a?.url,children:a?.name})})).join(xo())})})}function go({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function mo({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function ho({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function yo({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function cf({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function xo({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function ff({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var jn={};m(jn,{Button:()=>pf});function pf({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.primary} ${a[r]||a.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var vn={};m(vn,{Card:()=>gf,CardBody:()=>yf,CardContent:()=>wf,CardDescription:()=>Vf,CardFooter:()=>xf,CardHeader:()=>mf,CardMain:()=>hf,CardMedia:()=>Af,CardTitle:()=>bf});function gf(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function mf(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function hf(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function yf(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function xf(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function bf(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function Vf(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function wf(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function Af(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var Rn={};m(Rn,{Dialog:()=>$f});function $f({id:e,title:t,description:r="",content:n,footer:s="",className:o=""}){return`
      <dialog id="${e}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${o}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${t}</h3>
            ${r?`<p class="text-sm text-muted-foreground">${r}</p>`:""}
          </div>
          <div class="py-2 text-sm">
            ${n}
          </div>
          ${s?`<div class="flex justify-end gap-3 pt-4">${s}</div>`:""}
        </div>
      </dialog>
    `.trim()}var On={};m(On,{Footer:()=>Sf});function Sf({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
      <div class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground tracking-tight">${o.title}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          ${o.links.map(a=>`
            <li>
              <a href="${a.url||"#"}" class="transition-colors hover:text-foreground">
                ${a.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");return`
      <footer class="w-full border-t border-border bg-background/95 py-8 md:py-12 ${n}">
        <div class="container mx-auto px-4 space-y-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div class="space-y-3">
              <div class="font-bold text-lg tracking-tight">${e}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${s}
          </div>
          <div class="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>${t}</div>
            <div class="flex gap-4">
              <a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `.trim()}var Dn={};m(Dn,{Header:()=>_f});function _f({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
          <div class="relative inline-block text-left">
            <button 
              onclick="toggleDropdown('${l}')" 
              class="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer py-2 px-3 rounded-md hover:bg-accent"
            >
              <span>${o.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              id="${l}" 
              class="hidden absolute left-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-80"
            >
              ${o.dropdown.map(d=>`
                <a href="${d.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${d.name}
                </a>
              `).join("")}
            </div>
          </div>
        `}return`
        <a href="${o.url||"#"}" class="text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-accent">
          ${o.name}
        </a>
      `}).join("");return`
      <header class="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${n}">
        <div class="container mx-auto flex h-14 items-center justify-between px-4">
          <div class="flex items-center gap-6">
            <a href="#" class="flex items-center space-x-2 font-bold text-lg tracking-tight">
              ${e}
            </a>
            <nav class="hidden md:flex items-center gap-1">
              ${s}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${r}
          </div>
        </div>
      </header>
    `.trim()}var Bn={};m(Bn,{H1:()=>kf,H2:()=>If,H3:()=>Tf,H4:()=>Nf,H5:()=>Pf,H6:()=>Cf,Heading:()=>de,P:()=>jf,Text:()=>vf});function kf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function If(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function Tf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function Nf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function Pf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function Cf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function de({title:e,level:t,options:r,record_id:n,propertyID:s,className:o}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${e}</h${t}>
    
    `}function jf(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}function vf(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}var Un={};m(Un,{Input:()=>H,InputCheckbox:()=>Rf,InputDate:()=>Of,InputDateTime:()=>Bf,InputEmail:()=>Uf,InputNumber:()=>Df,InputPassword:()=>Hf,InputTel:()=>Mf,InputText:()=>Ef,InputTime:()=>Lf,InputUrl:()=>Ff});function H({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:a=""}){let l=s?`id="${s}"`:"";return`
      <div class="space-y-2 w-full">
        ${e?`<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${s?`for="${s}"`:""}>${e}</label>`:""}
        <input 
          type="${t||"text"}" 
          id=${s||""} 
          placeholder="${r||""}" 
          value=${n||""} 
          class="
            flex h-9 w-full rounded-md border border-input bg-transparent 
            px-3 py-1 text-sm shadow-sm transition-colors 
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 
            ${o||""}"
          ${a||""}
        />
      </div>
    `.trim()}function Rf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function Of({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function Df({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function Bf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function Uf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function Hf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function Mf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function Ef({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function Lf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function Ff({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var Hn={};m(Hn,{Pagination:()=>Wf,PaginationComponent:()=>Vo,PaginationContent:()=>wo,PaginationEllipsis:()=>So,PaginationItem:()=>Ye,PaginationLink:()=>Dt,PaginationNext:()=>$o,PaginationPrevious:()=>Ao,buildPaginationUrl:()=>bo});function bo(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function Vo({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function wo({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function Ye({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function Dt({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${d} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Ao({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Dt({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function $o({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Dt({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function So({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Wf({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:a=""}={}){let l=Math.ceil(t/r)||1,d=Math.floor(n/r)+1,u=E=>{let L=(E-1)*r;return bo(e,r,L)},f=(E,L)=>{let ne=L-E+1;return Array.from({length:ne},(Xe,Ze)=>E+Ze)},b=s+5,y=[];if(b>=l)y=f(1,l);else{let E=Math.max(d-s,1),L=Math.min(d+s,l),ne=E>2,Xe=L<l-2,Ze=1,sa=l;if(!ne&&Xe){let Te=3+2*s;y=[...f(1,Te),"ellipsis",l]}else if(ne&&!Xe){let Te=3+2*s,ui=f(l-Te+1,l);y=[Ze,"ellipsis",...ui]}else if(ne&&Xe){let Te=f(E,L);y=[Ze,"ellipsis",...Te,"ellipsis",sa]}}let A=[],M=d>1,te=M?u(d-1):"#";A.push(Ye({children:Ao({href:te,disabled:!M})})),y.forEach(E=>{if(E==="ellipsis")A.push(Ye({children:So()}));else{let L=Number(E),ne=L===d;A.push(Ye({children:Dt({href:u(L),isActive:ne,children:String(L)})}))}});let re=d<l,Mt=re?u(d+1):"#";A.push(Ye({children:$o({href:Mt,disabled:!re})}));let Et=Vo({className:o,attrs:a,children:wo({children:A.join("")})});return Et=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Et}
    </div>`,Et}var Mn={};m(Mn,{Section:()=>Jf,SectionHeader:()=>zf});function Jf({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=a[t]||a.default,u=l[r]!==void 0?l[r]:l.default,f=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${u} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${d} ${n}" ${o}>
      ${f}
    </section>
  `.trim()}function zf({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var En={};m(En,{Table:()=>Gf,TableBody:()=>Io,TableCell:()=>q,TableCellCenter:()=>Qf,TableCellLeft:()=>Zf,TableCellLink:()=>tp,TableCellNumber:()=>ep,TableCellRight:()=>No,TableCellText:()=>rp,TableColumnHeader:()=>ko,TableColumnHeaderCenter:()=>Xf,TableColumnHeaderLeft:()=>Kf,TableColumnHeaderRight:()=>Yf,TableFooter:()=>Po,TableHeader:()=>_o,TableRow:()=>To,getTable:()=>qf});function qf({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${_o(e.map(n=>ko(n)))}
      
        ${Io(t.map(n=>To(n.map(s=>q(s)))))}
        
        ${Po()}

      </table>

    </div>
  
  
  `}function Gf(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function _o(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function ko(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Kf(e,t){return q(e,t)}function Yf(e,t){return t=t+" text-right ",q(e,t)}function Xf(e,t){return t=t+" text-center ",q(e,t)}function Io(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function To(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
    <tr 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${e}</tr>
  `}function q(e,t,r,n){return e||(e=""),Array.isArray(e)&&(e=e.join(" ")),`
    <td 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${e}</td>
  `}function Zf(e,t,r,n){return q(e,t,r,n)}function No(e,t,r,n){return n=n+" text-right ",q(e,t,r,n)}function Qf(e,t,r,n){return n=n+" text-center ",q(e,t,r,n)}function ep(e,t,r,n,s,o){return e=i.toNumber(e),e=c.number.format(e,t),No(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function tp(e,t,r,n,s,o){return q(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function rp(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return q(s)}function Po(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var Ln={};m(Ln,{Webpage:()=>np});function np({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:o}){return`
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${e||""}</title>
  <script src="https://cdn.tailwindcss.com"></script>
      
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">


     <script>
    // Configure Tailwind theme to match shadcn/ui design tokens
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
        },
      },
    }
  </script>

  <style>
    /* CSS Variables matching shadcn/ui Theme Specification */
    :root {
      --background: 0 0% 100%;
      --foreground: 240 10% 3.9%;
      --card: 0 0% 100%;
      --card-foreground: 240 10% 3.9%;
      --primary: 240 5.9% 10%;
      --primary-foreground: 0 0% 98%;
      --secondary: 240 4.8% 95.9%;
      --secondary-foreground: 240 5.9% 10%;
      --muted: 240 4.8% 95.9%;
      --muted-foreground: 240 3.8% 46.1%;
      --accent: 240 4.8% 95.9%;
      --accent-foreground: 240 5.9% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 5.9% 90%;
      --input: 240 5.9% 90%;
      --ring: 240 5.9% 10%;
      --radius: 0.5rem;
    }

    .dark {
      --background: 240 10% 3.9%;
      --foreground: 0 0% 98%;
      --card: 240 10% 3.9%;
      --card-foreground: 0 0% 98%;
      --primary: 0 0% 98%;
      --primary-foreground: 240 5.9% 10%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --muted: 240 3.7% 15.9%;
      --muted-foreground: 240 5% 64.9%;
      --accent: 240 3.7% 15.9%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --ring: 240 4.9% 83.9%;
    }


    :root {
  --brand-color: #0284c7;
  --surface-bg: #ffffff;
  --surface-border: #1e293b;
}

.dark {
  --brand-color: #38bdf8;
  --surface-bg: #0f172a;
  --surface-border: #334155;
}

    /* 1. Base .selectable element */
    .selectable > * {
      /* Default states derived from base variables */
      --card-bg: var(--surface-bg);
      --card-border: var(--surface-border);

      background-color: var(--card-bg);
      border-color: var(--card-border);
      transition: background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
    }

    /* 2. Hover state ratio (5% blend of brand color) */
    .selectable:hover > * {
      --card-bg: color-mix(in srgb, var(--surface-bg) 95%, var(--brand-color));
    }

    /* 3. Selected state ratio (12% blend of brand color + full brand border) */
    .selectable[aria-selected="true"] > *, 
    .selectable.selected > * {
      --card-bg: color-mix(in srgb, var(--surface-bg) 88%, var(--brand-color));
      --card-border: var(--brand-color);
      
      /* Optional: subtle focus/selected glow ring derived from brand */
      box-shadow: 0 0 0 1px var(--brand-color);
    }


    /* 3. Force inner .card element to inherit the variables from .selectable */
.selectable .card {
  background-color: var(--card-bg) !important;
  border-color: var(--card-border) !important;
  transition: background-color 150ms ease, border-color 150ms ease;
}

   
    
    /* Scrollbar Styling */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: hsl(var(--border));
      border-radius: 9999px;
    }

    /* Code Block Custom Styling */
    pre code {
      font-family: 'JetBrains Mono', monospace;
    }
  </style>


      ${t||""}
    </head>
    <body class="bg-background text-foreground min-h-screen w-full flex flex-col justify-between antialiased">

      <!-- Header Target: Spans full width -->
      <div id="header-container" class="w-full">${r||""}</div>

      <!-- Main Content Target: Flex-1 fills available vertical space -->
      <main class="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-8">
        <div id="main-content" class="w-full max-w-6xl space-y-8">
          ${o||""}
          ${s||""}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${n||""}</div>


      <script type="module" src="library.js"></script>

    </body>
    </html>
  `.trim()}var Fn={};m(Fn,{CardGrid:()=>ip});function ip({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var Wn={};m(Wn,{JsonEditor:()=>op});function Co({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function sp({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${s}" ${o}>
      ${e||t?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${e?`<h3 class="font-semibold leading-none tracking-tight text-xl">${e}</h3>`:""}
          ${t?`<p class="text-sm text-muted-foreground">${t}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${r}</div>
      ${n?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${n}</div>`:""}
    </div>
  `.trim()}function op({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let a=e.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),d=JSON.stringify(n,null,2),u=`
    <script>
      (function() {
        var safeId = "${a}";
        
        window[safeId + "_validate"] = function() {
          var textarea = document.getElementById(safeId + "_textarea");
          var statusBadge = document.getElementById(safeId + "_status");
          var submitBtn = document.getElementById(safeId + "_submit_btn");

          try {
            JSON.parse(textarea.value);
            statusBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400";
            statusBadge.innerText = "Valid JSON";
            if (submitBtn) submitBtn.removeAttribute("disabled");
            return true;
          } catch (err) {
            statusBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-destructive/15 text-destructive";
            statusBadge.innerText = "Invalid JSON";
            if (submitBtn) submitBtn.setAttribute("disabled", "true");
            return false;
          }
        };

        window[safeId + "_format"] = function() {
          var textarea = document.getElementById(safeId + "_textarea");
          try {
            var parsed = JSON.parse(textarea.value);
            textarea.value = JSON.stringify(parsed, null, 2);
            window[safeId + "_validate"]();
          } catch (err) {
            alert("Cannot format invalid JSON.");
          }
        };

        window[safeId + "_submit"] = async function(event) {
          event.preventDefault();

          var textarea = document.getElementById(safeId + "_textarea");
          var endpointInput = document.getElementById(safeId + "_endpoint");
          var headersTextarea = document.getElementById(safeId + "_headers");
          var responseContainer = document.getElementById(safeId + "_response_container");
          var responseOutput = document.getElementById(safeId + "_response");
          var responseBadge = document.getElementById(safeId + "_response_badge");
          var submitBtn = document.getElementById(safeId + "_submit_btn");

          if (!window[safeId + "_validate"]()) return;

          var payload;
          var customHeaders = {};

          try {
            payload = JSON.parse(textarea.value);
          } catch (e) {
            alert("Invalid JSON Body");
            return;
          }

          try {
            if (headersTextarea.value.trim()) {
              customHeaders = JSON.parse(headersTextarea.value);
            }
          } catch (e) {
            alert("Invalid Custom Headers JSON");
            return;
          }

          var targetUrl = endpointInput.value.trim();
          if (!targetUrl) {
            alert("Please specify a valid POST URL endpoint.");
            return;
          }

          submitBtn.setAttribute("disabled", "true");
          var originalBtnText = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span class="animate-spin inline-block mr-2">\u2699</span> Posting...';

          try {
            var response = await fetch(targetUrl, {
              method: "POST",
              headers: Object.assign({ "Content-Type": "application/json" }, customHeaders),
              body: JSON.stringify(payload)
            });

            var statusText = response.status + " " + response.statusText;
            var responseData;

            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              responseData = JSON.stringify(await response.json(), null, 2);
            } else {
              responseData = await response.text();
            }

            responseContainer.classList.remove("hidden");
            responseOutput.textContent = responseData || "(Empty Response)";

            if (response.ok) {
              responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400";
              responseBadge.textContent = statusText;
            } else {
              responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-destructive/15 text-destructive";
              responseBadge.textContent = statusText;
            }
          } catch (err) {
            responseContainer.classList.remove("hidden");
            responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-destructive/15 text-destructive";
            responseBadge.textContent = "Network Error";
            responseOutput.textContent = err.message || "Failed to execute fetch request.";
          } finally {
            submitBtn.removeAttribute("disabled");
            submitBtn.innerHTML = originalBtnText;
          }
        };
      })();
    </script>
  `.trim(),f=`
    <form id="${a}_form" onsubmit="window.${a}_submit(event)" class="space-y-4">
      <div>
        <label for="${a}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${a}_endpoint"
          value="${t}"
          required
          placeholder="https://api.example.com/v1/records" 
          class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <details class="group">
        <summary class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground select-none py-1">
          \u25B6 Request Headers (JSON)
        </summary>
        <div class="mt-2">
          <textarea 
            id="${a}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${d}</textarea>
        </div>
      </details>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="${a}_textarea" class="block text-sm font-medium text-foreground">
            JSON Payload
          </label>
          <div class="flex items-center space-x-2">
            <span id="${a}_status" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              Valid JSON
            </span>
            ${Co({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
          </div>
        </div>
        <textarea 
          id="${a}_textarea"
          rows="10"
          oninput="window.${a}_validate()"
          class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >${l}</textarea>
      </div>

      <div class="flex justify-end space-x-2">
        ${Co({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${a}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${a}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${a}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${u}
  `.trim();return sp({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:f,className:s,attrs:o})}var Jn={};m(Jn,{Modal:()=>ap,ModalBody:()=>up,ModalTrigger:()=>lp});function ap(e,t){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${t||""}" 
      
    >
        ${e||""}
    </div>
    
    
    `}function lp(e,t,r){return`
    
     <button 
        type="button"
        onclick="document.getElementById('${r}').showModal()"
        aria-label="Enlarge image:"
        class="w-full block relative text-left"
      >
        <div class="relative w-full  overflow-hidden bg-muted">
         ${e||""}
        </div>
        <!-- Hover Overlay Icon -->
        <div class="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div class="rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" x2="14" y1="3" y2="10"></line>
              <line x1="3" x2="10" y1="21" y2="14"></line>
            </svg>
          </div>
        </div>
      </button>
    
    `}function up(e,t,r){return`
    
      <dialog 
        id="${r}" 
        onclick="if (event.target === this) this.close()"
        class="w-full fixed inset-0 m-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col w-full p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${r}').close()" 
            aria-label="Close modal"
            class="absolute -top-0 -right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <div class="w-full rounded-lg">
            
            ${e||""}
          </div>

         
        </div>
      </dialog>
    
    
    `}var zn={};m(zn,{DropdownMenu:()=>cp,DropdownMenuIcon:()=>fp,Menu:()=>dp,MenuItemLink:()=>pp,MenuItemPost:()=>gp,MenuItemSeparator:()=>mp});function dp(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function cp(e,t,r){return`
    <details class="relative inline-block text-left ${r||""}" >
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden "
      >
        ${e}
      </summary>

      <div class="absolute  z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
    </details>

    `}function fp(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function pp(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function gp(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function mp(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var qn={};m(qn,{Kanban:()=>hp,KanbanBody:()=>xp,KanbanCard:()=>_p,KanbanCardBody:()=>Ip,KanbanCardFooter:()=>Tp,KanbanCardHeader:()=>kp,KanbanColumn:()=>wp,KanbanColumnBody:()=>$p,KanbanColumnFooter:()=>Sp,KanbanColumnHeader:()=>Ap,KanbanFooter:()=>bp,KanbanHeader:()=>yp,KanbanTitle:()=>Vp});function hp(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function yp(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function xp(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function bp(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function Vp(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function wp(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function Ap(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function $p(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function Sp(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function _p(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function kp(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function Ip(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function Tp(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var Gn={};m(Gn,{StarRating:()=>Np,StarRatingEmpty:()=>jp,StarRatingFull:()=>Pp,StarRatingHalf:()=>Cp});function Np(e,t){return`
    
    <div class="flex items-center space-x-1 ${t||""}">
        ${e||""}
    </div>
    
    `}function Pp(e,t){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Cp(e,t){return`
    
       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://w3.org" viewBox="0 0 22 20">
    <defs>
      <!-- Gradient defining the half-fill split -->
      <linearGradient id="half-star-gradient">
        <stop offset="50%" stop-color="#FACC15" /> <!-- Tailwind yellow-400 -->
        <stop offset="50%" stop-color="#D1D5DB" /> <!-- Tailwind gray-300 -->
      </linearGradient>
    </defs>
    <path fill="url(#half-star-gradient)" d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}function jp(e,t){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var g={...In,...Tn,...Nn,...Pn,...Cn,...jn,...vn,...Fn,...Rn,...kn,...On,...Dn,...qn,...zn,...Jn,...Un,...Wn,...Hn,...Mn,...Gn,...En,...Bn,...Ln};var Qn={};m(Qn,{Card:()=>Mp,Cards:()=>Ep});var Zn={};m(Zn,{Media:()=>ce,MediaImage:()=>Oo,MediaVideo:()=>Ro});var Ut={};m(Ut,{fixedLength:()=>Bt,textCenter:()=>Kn});function Bt(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let o=e.length;o==0&&(e=""),o==1&&(e=e[0]),o>1&&(e=`(${e.length})`)}let s=c.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=c.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=c.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let o="",a=Math.round(t/3),l=t-a-3;o+=e.slice(0,a),o+="...",o+=e.slice(-l),e=o}return t!=null&&(e=e.padEnd(t," ")),e}function Kn(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var Xn={};m(Xn,{toTextRecord:()=>vp,toTextTable:()=>Dp});function vp(e,t=80){let r=Rp(e,t),n=Op(e),s="";s+=jo(r),s+=`
`,n.length>0?s+=n.map(o=>vo(o,r)).join(""):s+=`(no records)
`}function Rp(e,t=80){let n=Yn(e).map(a=>(a||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function Op(e){let t=Yn(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:c.getValues(e,n)};r.push(s)}return r}function Dp(e,t,r=!0,n=80){t=Bp(e,t,r),e=Up(e,t,r);let s="";if(s+=jo(t),s+=`
`,e.length>0){let o=e.map(a=>vo(a,t));s+=o.join("")}else s+=Kn("(no records to display.)",n);return s}function Bp(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=Yn(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function Up(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function jo(e){let t="",r=[];for(let s of e){let o=`${Bt(s.title,s.width,s.rounding)}`;r.push(o)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return t+=n.join(" "),t+=`
`,t}function vo(e,t){let r="",n=[];for(let s of t){let o=i.getValues(e,s.propertyID),a=`${Bt(o,s.width,s.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function Yn(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=Hp(t),t}function Hp(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var cx={...Ut,...Xn};function ce(e,t){if(!i.getValue(e,"contentUrl"))return"";let n="";return i.record_type(e)=="VideoObject"?Ro(e,t):Oo(e,t)}function Ro(e,t){let r=i.getValue(e,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Oo(e,t){let r=i.getValue(e,"contentUrl");return r?g.Modal(g.ImageModal(r)):""}function ee({website:e,webpage:t,title:r,headContent:n,content:s,options:o}){t=new S.WebPage(t),e=new S.WebSite(e);let a={};a.title=r,a.title=a.title||i.getValue(t,"title"),a.title=a.title||i.getValue(t,"name"),a.title=a.title||i.getValue(e,"title"),a.title=a.title||i.getValue(e,"name"),a.headContent=n,a.breadcrumb=g.Breadcrumb({links:i.getValue(t,"breadcrumb")});let l=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),d=t.WPHeader.hasPart||[],u=t.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],u=Array.isArray(u)?u:[u],a.header=g.Header({brand:l,navItems:d}),a.footer=g.Footer({brand:l,navItems:u}),a.content=s,g.Webpage(a)}function Do({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:f,options:b}){return o=o??"",o+=P.Cards({url:n,records:a,offset:u,limit:f,nbOfColumns:3,options:b}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:b})}function Mp(e,t,r,n=!0){let s=S.format.getTitle1(e),o=S.format.getContent(e),a=i.getRecordUrl(e,t),l=n==!0?S.format.imageUrl(e):void 0;return g.Card({title:s,description:o,url:a,media:l,className:r})}function Ep({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:a,includePagination:l,options:d,layoutClasses:u,className:f,attrs:b}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let y=new S.ItemList(t);y=y.record,y.numberOfItems=y?.numberOfItems??y.itemListElement.length,y=Ht({record:y,options:d}),y.itemListElement=y.itemListElement.filter(re=>i.getValue(re,"position")>=r&&i.getValue(re,"position")<r+n);let A="";for(let re of i.getValues(y,"itemListElement")){let Mt=i.getValue(re,"item");A+=Lp({url:e,item:Mt,options:d})}A=g.CardGrid({content:A,nbOfColumns:a});let M=g.Pagination({url:e,limit:n,offset:r,total:y.numberOfItems,options:d});return`

        <div class="${u} ${f}" ${b}>
        <div class="flex-1">
            ${A}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${M}
        </div>
        </div>

    `}function Lp({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),o=i.getValues(t,"keywords");o=o.map(u=>`<a href="/?keywords=${u}">${u}</a>`);let a=g.Badges({text:o,variant:"secondary"}),l={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:a,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:ce({record:t,options:r})};return g.Card(l)}var ei={};m(ei,{Input:()=>Wp});function Wp({record:e,propertyID:t,value:r}){return g.Input({value:r})}var ri={};m(ri,{Table:()=>Jp,TableBody:()=>Uo,TableCell:()=>Mo,TableHeader:()=>Bo,TableRow:()=>Ho,getDataType:()=>Eo,getHeadersFromProperties:()=>ti,getPropertiesFromRecords:()=>Ie});function Jp(e,t,r,n,s,o){let a=e;r=r||Ie(a),n=n||ti(r);let l=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),g.Table(Bo(a,r,n,l)+Uo(a,r,t,l))}function Bo(e,t,r,n){return t=t||Ie(e),r=r||ti(t),n=n||[],t=t||Ie(e),g.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return g.TableColumnHeaderRight(s);default:return g.TableColumnHeader(s)}}).join(" "))}function Uo(e,t,r,n){t=t||Ie(e),n=n||[];let s=i.getValues(new S.ItemList(e),"itemListElement");return g.TableBody(s.map(o=>Ho(o,t,r,n)).join(" "))}function Ho(e,t,r,n){return t=t||Ie(e),n=n||[],g.TableRow(t.map((a,l)=>Mo(e,i.getValues(e,a),a,r,n,l)).join(" "),i.record_id(e),void 0,"kr-listitem")}function Mo(e,t,r,n,s,o){let a=t,l=r,d=e;if(a=i.isArray(a)&&a.length==0?"":a,a=i.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let u=c.url.getUrl(n||"","/"+a);return g.TableCellLink(u,a)}if((l||"").endsWith("@id")){let u=i.getRecordUrl(d,n);return g.TableCellLink(u,a)}switch(s?.[o]||Eo(a)){case"array":return g.TableCellCenter(`(${a.length})`);case"text":return g.TableCellText(a);case"number":return g.TableCellNumber(a,2);case"link":return g.TableCellLink(a,a);case"thumbnail":return g.TableCell(ce({record:a}));case"position":return g.TableCellNumber(a,0);case"object":return g.TableCellLink(i.getRecordUrl(a,n),i.record_id(a));default:return g.TableCellText(a)}}function Ie(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function ti(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function Eo(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?c.isNumber(e)?"number":c.isUrl(e)?"link":c.isDate(e)?"date":c.isArray(e)?"array":c.isObject(e)?"object":"text":"text"}var ni={};m(ni,{Record:()=>zp});function zp(e,t,r,n="",s="",o=!1,a=0,l={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),l.baseUrl=t||l?.baseUrl;let d={rows:[]},u=Lo({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${ce({record:e,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${u||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${g.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function Lo({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){t=t||Object.keys(e);let l=t.filter(b=>b.startsWith("@")),d=t.filter(b=>!b.startsWith("@"));t=l.sort().concat(d.sort());let u={rows:[]};return g.Table(g.TableHeader(g.TableRow(g.TableCellRight("")+g.TableCellRight(P.DropdownMenu(i.getPotentialActions(e)))))+g.TableBody(t.map(b=>g.TableRow([g.TableCell(b+":"),g.TableCell(Fo({record:e,propertyID:b,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))].join(" "))).join(" ")))}function qp({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t),d=[];for(let u of l){let f=i.clone(e);f=i.setValue(f,t,u),d.push(Fo({record:f,propertyID:t,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${d.map(u=>`
            <li>
              ${u}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Fo({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t);return i.isArray(l)&&l.length==1&&(l=l[0]),i.isArray(l)&&l.length==0?"":i.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(l,t,a?.baseUrl)}</summary>
      
                ${qp({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(l,t,a?.baseUrl)}</summary>
      
            ${Lo({record:l,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":P.Value(l,t,a?.baseUrl)}var ii={};m(ii,{DropdownMenu:()=>Kp,Menu:()=>Gp});function Gp(e){return e=i.toArray(e),!e||e.length==0?"":g.DropdownMenu(g.DropdownMenuIcon(),e.map(t=>g.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function Kp(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>g.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return g.DropdownMenu(g.DropdownMenuIcon(),t)}var si={};m(si,{Value:()=>Yp,ValueArray:()=>zo,ValueDateTime:()=>Go,ValueDuration:()=>Xp,ValueMonetaryAmount:()=>Zp,ValueNumber:()=>Ko,ValueRecordId:()=>Wo,ValueRecordType:()=>Jo,ValueText:()=>Yo,ValueThing:()=>Xo,ValueUrl:()=>qo});function Yp(e,t,r){return!e&&e!==0?"":i.isArray(e)?zo(e,t,r):t=="@type"?Jo(e,t,r):t=="@id"?Wo(e,t,r):i.isObject(e)?Xo(e,t,r):i.isNumber(e)?Ko(e,t,r):i.isDate(e)?Go(e,t,r):c.isUrl(e)?qo(e,t,r):Yo(e,t,r)}function Wo(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return X(s,t)}function Jo(e,t,r){let n=c.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return X(s,t)}function zo(e,t,r){let n=e.length>0?`(${e.length})`:"";return X(n,t)}function qo(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return X(n,t)}function Go(e,t,r){e=i.toDate(e);let n=c.date.format(e);return X(n,t)}function Xp(e,t,r){return c.duration.format(e)}function Ko(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=c.number.format(e,n),X(e,t)}function Yo(e,t,r){return X(e,t)}function Xo(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return X(o,t)}function Zp(e,t,r){let n=c.toNumber(i.getValue(e,"value"));if(n===void 0)return n;let s=c.number.format(n,2),o=i.getValue(e,"currency");o=(o||"").toUpperCase();let a=o+" $"+s;return o=="USD"&&(a=o+" $"+s),o=="CAD"&&(a=o+" $"+s),o=="EUR"&&(a=o+" "+s+" \u20AC"),o=="GBP"&&(a=o+" "+s+" \xA3"),X(a,t)}function X(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var oi={};m(oi,{Kanban:()=>Qp,KanbanCard:()=>Qo,KanbanColumn:()=>Zo});function Qp(e,t){let r=i.getItems(e);return g.Kanban(g.KanbanHeader(g.KanbanTitle("Awesome Kanban","Fuck yeah"))+g.KanbanBody(propertyValues.map(n=>Zo(e,t,n)).join(" "))+g.KanbanFooter(""))}function Zo(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),g.KanbanColumn(g.KanbanColumnHeader(r)+g.KanbanColumnBody(n.map(s=>Qo(s)).join(" "))+g.KanbanColumnFooter())}function Qo(e){return g.KanbanCard(g.KanbanCardHeader("xx")+g.KanbanCardBody(P.Value(i.getName(e),"name"))+g.KanbanCardFooter(P.Value(i.getActionStatus(e),"actionStatus")))}var P={...Qn,...ei,...Zn,...ni,...ri,...ii,...si,...oi};function Ht({record:e,options:t}){if(i.isArray(e))return e.map(o=>Ht({record:o,options:t}));let r=i.record_type(e);if(!r)return e;let n=c.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let o of Object.keys(e?.record||e))e=i.setValues(e,o,Ht({record:i.getValues(e,o),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function ea({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:f,options:b}){return o=o??"",o+=P.Table({url:n,records:a,properties:l,headers:d,offset:u,limit:f,options:b}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:b})}function ta({website:e,webpage:t,title:r,url:n,headContent:s,content:o,record:a,properties:l,headers:d,options:u}){return o=o??"",o+=P.Record({url:n,record:a,options:u}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:u})}var ra={blankPage:ee,recordsPage:ea,recordPage:ta,cardsPage:Do};var na={blocks:P,...ra,components:Y,...Y};var ai={};m(ai,{getParsedRequest:()=>eg});function eg(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var ia={shadcn:na,express:ai};var li={...i,...Sn,html:ia},mV=li,hV=li,yV=li;export{li as _h,yV as default,mV as h,hV as helpers};
//# sourceMappingURL=jsonldCore.js.map
