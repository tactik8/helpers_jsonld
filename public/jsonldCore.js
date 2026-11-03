var la=Object.defineProperty;var b=(e,t)=>{for(var r in t)la(e,r,{get:t[r],enumerable:!0})};var pe={get:Ne,set:et,flatten:ua,expand:da};function Ne(e,t){if(!t||typeof t!="string")return;let r=fi(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function et(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=fi(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let l=e;for(let u=0;u<n.length-1;u++){let d=n[u],f=n[u+1],c=!isNaN(f);c==!0&&(l[d]=Array.isArray(l[d])?l[d]:[l[d]],l=l?.[d]),c==!1&&(l[d]=l?.[d]||{},l=Array.isArray(l?.[d])?l?.[d][0]:l?.[d])}return l[n[n.length-1]]=r,e}function ua(e){function t(s,l){let u=[];return Array.isArray(l)?(s=s||"",l.map((f,c)=>t(`${s}[${String(c)}]`,f)).flat()):l?.["@type"]||l?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(l).map(f=>t(`${s}${f}`,l[f])).flat()):[{propertyID:s,value:l}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function da(e){let t={};return Object.keys(e).forEach(r=>et(t,r,e?.[r])),t}function fi(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var Gt={};b(Gt,{eq:()=>ha,ge:()=>wa,getDiff:()=>gi,getHash:()=>pi,getHashNested:()=>Aa,gt:()=>Va,isEqual:()=>ya,isSame:()=>ma,le:()=>ba,lt:()=>xa});var tt={};b(tt,{expand:()=>fa,flatten:()=>pa,getChildren:()=>ga,handleRelationships:()=>zt,simplify:()=>qt,strip:()=>Jt});function fa(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function l(u){if(!u||typeof u!="object")return u;if(Array.isArray(u))return u.map(V=>l(V));let d=i.record_id(u);if(d&&s.has(d)){let V=s.get(d);return r?V:i.ref?i.ref(V):{"@id":d}}let c=(d&&n instanceof Map?n.get(d):null)||u,g=Array.isArray(c)?[...c]:{...c};d&&s.set(d,g);for(let V of Object.keys(g))V==="previousItem"||V==="nextItem"||(g[V]=l(g[V]));return g}return typeof t=="string"&&(t={"@id":t}),l(t)}function Jt(e){function t(r,n,s){if(Array.isArray(r))return r.map(l=>t(l,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let l={};for(let u of Object.keys(r).sort())l[u]=t(r?.[u],n,s+1);return l}}return r}return t(e,0,0)}function pa(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let l=[];for(let u of n)l=l.concat(t(u));return l}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let l of Object.keys(n)){if(l=="@id")continue;if(l=="previousItem"){n[l]=i.ref(n?.[l]);continue}if(l=="nextItem"){n[l]=i.ref(n?.[l]);continue}let u=n[l];u=i.toArray(u),n[l]=[];for(let d of u)d?.["@id"]?n[l].push({"@id":d?.["@id"]}):n[l].push(d),s=s.concat(t(d))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=zt(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function zt(e){if(i.isArray(e))return e.map(r=>zt(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(l=>i.insertValue(l,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(l=>i.insertValue(l,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function qt(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(l=>t(l,s)),n=n.filter(l=>l!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let l={};for(let u of Object.keys(n)){let d=t(n?.[u],s);u=="itemListElement"&&(d=i.toArray(d)),d!==void 0&&(l[u]=d)}return l["@id"]=i.toArray(l?.["@id"])?.[0],l}return n}}return e=i.clone(e),t(e)}function ga(e){function t(r,n){if(i.isArray(r)){let l=[];for(let u of r){let d=t(u,n);l=l.concat(d)}return l}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let l of Object.keys(r))s=s.concat(t(r[l],n+1));return s=s.filter(l=>l),s}return t(e,0)}function ma(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function ha(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function ya(e,t){let r=(s,l)=>l instanceof Object&&!(l instanceof Array)?Object.keys(l).sort().reduce((u,d)=>(u[d]=l[d],u),{}):l;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function xa(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function ba(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function Va(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function wa(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function pi(e,t=!1){e=qt(e),t==!1&&(e=Jt(e));let r=d=>d&&typeof d=="object"&&!Array.isArray(d)?Object.keys(d).sort().reduce((f,c)=>({...f,[c]:r(d[c])}),{}):Array.isArray(d)?d.map(r):d,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let l=5381,u=n.length;for(;u;)l=l*33^n.charCodeAt(--u);return(l>>>0).toString(16)}function Aa(e){return pi(e,!0)}function gi(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=gi(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var Yt={};b(Yt,{evaluate:()=>Kt});function Kt(e,t){let r=[];for(let s of Object.keys(t)){let l=s,u=t?.[s];if(u=i.toArray(u),l=="$and")return u.every(d=>Kt(e,d));if(l=="$or")return u.some(d=>Kt(e,d));for(let d of u){let f=Sa(e,l,d);r.push(f)}}return r.every(s=>$a(s.r,s.p,s.o,s.v))}function $a(e,t,r,n){try{let s=pe.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Sa(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var _r={};b(_r,{assignId:()=>sl,getGenericRecordID:()=>il,normalizeRecordId:()=>rl,replaceIds:()=>Ci,setTempID:()=>Pi});var Zt={};b(Zt,{clean:()=>ka,isArray:()=>oe,isNotArray:()=>Xt,isValid:()=>_a,toArray:()=>rt});function ka(e){return rt(e)}function _a(e){return oe(e)}function oe(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function Xt(e){return!oe(e)}function rt(e){return e==null?[]:(e=oe(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var tr={};b(tr,{clean:()=>Qt,format:()=>Ta,formatDate:()=>mi,isDate:()=>Y,isNotDate:()=>er,isValid:()=>Ia,toDate:()=>ge});function Qt(e,t=void 0){return ge(e)||t}function Ia(e){return Y(e)}function Ta(e,t=!1){return mi(e,t)}function Y(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function er(e){return!Y(e)}function ge(e){if(e===void 0)return;if(Y(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=Y(e)?e:void 0,e}function mi(e,t=!1){if(console.log("vv",e,ge(e)),e=ge(e),Y(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),u=`${n}-${s}-${l}`;if(t==!0){let d=String(r.getHours()).padStart(2,0),f=String(r.getMinutes()).padStart(2,0),c=String(r.getSeconds()).padStart(2,0);u=u+` ${d}:${f}:${c}`}return u}var nr={};b(nr,{clean:()=>Na,isNotNull:()=>rr,isNull:()=>he,isValid:()=>Pa});function Na(e,t=void 0){}function Pa(e){return he(e)}function rr(e){return!he(e)}function he(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||me.array.isValid(e)?e.length==0:e instanceof Date?me.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var or={};b(or,{clean:()=>ir,format:()=>va,formatDecimals:()=>hi,isNotNumber:()=>sr,isNumber:()=>Pe,isValid:()=>Ca,toNumber:()=>nt});function ir(e,t=void 0){return nt(e)??t}function Ca(e){return Pe(e)}function va(e,t){return hi(e,t)}function hi(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function Pe(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function sr(e){return!Pe(e)}function nt(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var lr={};b(lr,{clean:()=>ja,cleanObject:()=>Ce,isNotObject:()=>ar,isObject:()=>ve,isValid:()=>Ra});function ja(e,t=void 0){return Ce(e)||t}function Ra(e){return ve(e)}function ve(e){return typeof e!="object"||e===null||Array.isArray(e)||e===void 0||p.isString(e)==!0||p.isDate(e)==!0||p.isNumber(e)==!0||p.isArray(e)==!0?!1:Object.keys(e).length>0}function ar(e){return!ve(e)}function Ce(e){if(p.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Ce(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Ce(x));t=t.filter(r=>p.isNotNull(r))}}if(p.object.isValid(e))for(let t of Object.keys(e))e[t]=Ce(e[t]),me.isNull(e[t])&&delete e[t];return me.isNotNull(e)?e:void 0}var cr={};b(cr,{clean:()=>Da,cleanString:()=>yi,isNotString:()=>ur,isString:()=>ye,isValid:()=>Oa,maxLengthEnd:()=>Ua,maxLengthMiddle:()=>Ba,toString:()=>dr});function Da(e,t=""){return yi(e)||t}function Oa(e){return ye(e)&&e.trim().length>=0}function Ba(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Ua(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function ye(e){return typeof e=="string"||e instanceof String}function ur(e){return!ye(e)}function dr(e){return e==null?"":String(e)}function yi(e){return ye(e)?e.trim():void 0}var mr={};b(mr,{clean:()=>xi,cleanUrl:()=>Vi,getDomain:()=>Ha,getParams:()=>Ma,getPath:()=>Ai,getUrl:()=>bi,isNotUrl:()=>gr,isUrl:()=>je,isValid:()=>fr,setParams:()=>wi,setPath:()=>$i,toUrl:()=>pr});function fr(e){return je(e)}function xi(e,t=void 0){return Vi(e)??t}function pr(e,t,r,n=void 0){return bi(e,t,r)||n}function bi(e,t,r){let n=$i(e,t);return r&&(n=wi(n,r)),n}function je(e){return e=xi(e),!!e}function gr(e){return!je(e)}function Vi(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:l=!1,allowedQueryParams:u=[]}=t;try{let d=new URL(e);d.protocol=d.protocol.toLowerCase(),d.hostname=d.hostname.toLowerCase(),n&&d.hostname.startsWith("www.")&&(d.hostname=d.hostname.slice(4)),(d.protocol==="http:"&&d.port==="80"||d.protocol==="https:"&&d.port==="443")&&(d.port="");let f=d.pathname;if(f=f.replace(/\/+/g,"/"),l&&(f=f.toLowerCase()),s&&f.length>1&&f.endsWith("/")&&(f=f.slice(0,-1)),d.pathname=f,r){let c=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],g=Array.from(d.searchParams.keys());for(let V of g){let w=c.some(E=>V.toLowerCase().startsWith(E)),S=u.includes(V);w&&!S&&d.searchParams.delete(V)}}return d.searchParams.sort(),d.toString()}catch{return}}function Ha(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function Ma(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function wi(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function Ai(e){try{return new URL(e).pathname}catch{return}}function $i(e,t){t=t??"";let r=[],n=Ai(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let l of t)r=r.concat(l.split("/"));r=r.filter(l=>l!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(l){console.log(l,s,e);return}}var xr={};b(xr,{clean:()=>La,format:()=>Fa,isDuration:()=>xe,isNotDuration:()=>hr,isValid:()=>Ea,toDuration:()=>yr});function La(e,t=void 0){return toDate(e)||t}function Ea(e){return xe(e)}function Fa(e){return Ja(e)}function xe(e){return Wa(e)}function hr(e){return!xe(e)}function yr(e){return e}function Wa(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function Ja(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,l,u,d,f,c,g]=r.map(S=>parseInt(S,10)||0),V=[f,c,g].map(S=>String(S).padStart(2,"0")).join(":"),w=[];return s&&w.push(`${s}y`),l&&w.push(`${l}m`),u&&w.push(`${u}w`),d&&w.push(`${d}d`),w.length>0?`${w.join(" ")} ${V}`:V}var Vr={};b(Vr,{clean:()=>za,format:()=>Ga,isBoolean:()=>Re,isNotBoolean:()=>br,isValid:()=>qa,toBoolean:()=>De,toString:()=>Ka});function za(e){return De(e)}function qa(e){return Re(e)}function Ga(e){return De(e)}function Ka(e){return String(e)}function Re(e){return typeof e=="boolean"}function br(e){return typeof e!="boolean"}function De(e){if(Re(e))return e;if(typeof e=="string"){if(e.toLowerCase()=="true")return!0;if(e.toLowerCase()=="false")return!1}if(!isNaN(e)){if(e==0)return!1;if(valeu==1)return!0}}var $r={};b($r,{clean:()=>Ya,format:()=>Za,fromJson:()=>Ar,isJson:()=>Oe,isNotJson:()=>wr,isValid:()=>Xa,toJson:()=>Be});function Ya(e){return Be(e)}function Xa(e){return Oe(e)}function Za(e){return Be(e)}function Oe(e){if(!e)return!1;if(typeof e=="string"){try{if(JSON.parse(e))return!0}catch{}return!1}}function wr(e){return!Oe(e)}function Be(e){let t=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(e,t(),4)}catch{}}function Ar(e){try{return JSON.parse(e)}catch{}}var p={isNull:he,isNotNull:rr,isArray:oe,isNotArray:Xt,toArray:rt,isDate:Y,isNotDate:er,toDate:ge,isDuration:xe,isNotDuration:hr,toDuration:yr,isObject:ve,isNotObject:ar,isNumber:Pe,isNotNumber:sr,toNumber:nt,isString:ye,isNotString:ur,toString:dr,isUrl:je,isNotUrl:gr,toUrl:pr,isBoolean:Re,isNotBoolean:br,toBoolean:De,isJson:Oe,isNotJson:wr,toJson:Be,fromJson:Ar,array:Zt,boolean:Vr,date:tr,duration:xr,json:$r,null:nr,number:or,object:lr,string:cr,url:mr,getDataType:Si,getType:Si,getJsonSchema:Qa},me=p;function Si(e){if(he(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(oe(e))return"Array";if(Y(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(fr(e))return"URL";if(Qt(e))return"DateTime";if(xe(e))return"Duration";if(ir(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function Qa(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),p.isString(r))return s.type="string",s;if(p.isObject(r)){s.type="object",s.properties={};for(let l of Object.keys(r))s.properties[l]=t(r[l],n+1);return s}if(p.isNumber(r))return s.type="number",s;if(p.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var Sg=globalThis.crypto.randomUUID;var it={website:"domain",webpage:"url",offer:"url",brand:"domain"};function be(e,t){if(!e||!e?.["@type"])return;let r=Ii(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=it?.[n];if(s=="url")return Ti(n,st(e));if(s=="domain")return Ni(n,st(e))}return kr(t)}function ki(e,t){if(!e||!e?.["@type"])return;let r=Ii(e);for(let n of r){let s=it?.[n];if(s=="url")return Ti(n,st(e));if(s=="domain")return Ni(n,st(e))}}function _i(e,t){let r=e?.["@id"];return r?el(e)?getStandardizedRecordId(e,t)==r:Sr(e?.["@id"],t)==r:!1}function el(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if(it?.[r])return it?.[r]}function Ii(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function st(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function kr(e){return e=Sr(e),e?(e.endsWith("/")||(e=e+"/"),Sr(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Ti(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>p.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function Ni(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>tl(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function tl(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function Sr(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function rl(e,t){e=Pi(e);let r=nl(e,t);return Ci(e,r)}function nl(e,t){function r(s,l){if(l=l||"https://www.test.com/",i.isArray(s)){let d=[];for(let f of s)d=d.concat(r(f));return d}if(i.isObject(s)==!1)return[];let u=[{replacee:i.record_id(s),replacer:be(s,l)}];for(let d of Object.keys(s))u=u.concat(r(s[d],l));return u}let n=r(e,t);return n=n.filter(s=>s),n}function Pi(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function il(e){return kr(e)}function sl(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function Ci(e,t){function r(n,s){if(Array.isArray(n))return n.map(d=>i.replaceIds(d,s));if(!n?.["@id"])return n;let l=n?.["@id"],u=s.get(l);u&&(n["@id"]=u);for(let d of Object.keys(n))n[d]=i.replaceIds(n?.[d],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var Nr={};b(Nr,{DB:()=>Tr,_storeToMap:()=>He,_storeToOriginal:()=>dl,getRecord:()=>Ue,getRecords:()=>Ve,patchRecord:()=>Li,postRecord:()=>Mi});var Ir={};b(Ir,{Value:()=>ol,ValueArray:()=>Ri,ValueDateTime:()=>Oi,ValueDuration:()=>al,ValueMonetaryAmount:()=>ll,ValueNumber:()=>Bi,ValueRecordId:()=>vi,ValueRecordType:()=>ji,ValueText:()=>Ui,ValueThing:()=>Hi,ValueUrl:()=>Di});function ol(e,t,r){return!e&&e!==0?"":i.isArray(e)?Ri(e,t,r):t=="@type"?ji(e,t,r):t=="@id"?vi(e,t,r):i.isObject(e)?Hi(e,t,r):i.isNumber(e)?Bi(e,t,r):i.isDate(e)?Oi(e,t,r):p.isUrl(e)?Di(e,t,r):Ui(e,t,r)}function vi(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return X(s,t)}function ji(e,t,r){let n=p.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return X(s,t)}function Ri(e,t,r){let n=e.length>0?`(${e.length})`:"";return X(n,t)}function Di(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return X(n,t)}function Oi(e,t,r){e=i.toDate(e);let n=p.date.format(e);return X(n,t)}function al(e,t,r){return p.duration.format(pv.value)}function Bi(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=p.number.format(e,n),X(e,t)}function Ui(e,t,r){return X(e,t)}function Hi(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let l=`<a title="${s}" href="${n}">${s}</a>`;return X(l,t)}function ll(e,t,r){let n=p.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=p.number.format(n,2),l=i.getValue(record,"currency");return l=(l||"").toUpperCase(),pv.htmlValue=l+" $"+s,l=="USD"&&(pv.htmlValue=l+" $"+s),l=="CAD"&&(pv.htmlValue=l+" $"+s),l=="EUR"&&(pv.htmlValue=l+" "+s+" \u20AC"),l=="GBP"&&(pv.htmlValue=l+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",X(pv,t)}function X(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var Tr=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,Ue(this._store,t,r)}getAll(t=!0){return Ve(this._store,{},t)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return Ve(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>Ue(this._store,i.record_id(s),!1));for(let s of r)this._store=Mi(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(l=>Ue(this._store,i.record_id(l),!1));for(let l of n)this._store=Li(this._store,l,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let l=this.get(t);return i.getValue(l,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return Ve(this._store)}getRecords(t=!1){return Ve(this._store,void 0,!1)}get record_ids(){return ul(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t);return!s||i.isRef(s)?n:s}updateRefs(t,r={},n={}){if(!t)return t;if(i.isArray(t))return t.map(s=>this.updateRefs(s,r,n));if(i.isObject(t)){if(i.isRef(t)){if(r?.[i.record_id(t)])return r[i.record_id(t)];t=this.get(t,!0)||t,r[i.record_id(t)]=t}else{if(n?.[i.record_id(t)])return t;n[i.record_id(t)]=t}for(let s of Object.keys(t))["previousItem","nextItem"].includes(s)||(t[s]=this.updateRefs(t[s],r,n));return t}return t}execute(t){let r=i.toArray(t);r=r.map(l=>this.updateRefs(l));let n=new i.DB;n.set(r);let s=[];for(let l of r){l=n.get(l),l=i.execute(l),s.push(l);let u=i.getValues(l,"hasPart");for(let d of u){let f=i.list.toItemList(d);i.list.getItems(f).forEach(g=>n.set(i.getResults(g)))}n.set(i.getResults(l))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let l=t.find(u=>i.record_id(u)==i.record_id(s));i.isEqual(l,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let l of s)this._broadcastItem(l,n)}}async _broadcastItem(t,r){try{return t(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return pe}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function Mi(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=He(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function Li(e,t,r=!0){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let n=He(e);for(let s of t){let l=n.get(i.record_id(s));s=i.patch(l,s),n.set(i.record_id(s),s)}return e=i._storeToOriginal(n),e}function Ue(e,t,r=!0){if(i.isArray(t))return t.map(u=>Ue(e,u,r));let n=i._utilGetId(t),s=He(e),l=s.get(n);return r==!0&&(l=i.expand(s,l)),l=i.clone(l),l}function Ve(e,t,r=!0){let n=He(e),s=Array.from(n.values());return t&&(s=s.filter(l=>i.evaluate(l,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function ul(e){return Ve(e).map(n=>i.record_id(n))}function He(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function dl(e){return e=Array.from(e.values()),e}var Cr={};b(Cr,{JSON_parse:()=>pl,JSON_stringify:()=>zi,clean:()=>Fi,clone:()=>qi,contractAtValue:()=>at,expandAtValue:()=>gl,getRecordUrl:()=>yl,isJsonld:()=>Ei,isValid:()=>cl,merge:()=>ml,patch:()=>hl,removeCircularRefs:()=>Wi,sortedReplacer:()=>Ji,stringify:()=>fl});function cl(e){return Ei(e)}function Ei(e){return e?.["@type"]||e?.["@id"]}function Fi(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>Fi(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=qi(e)}catch{}e=setTempID(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],_i(s)==!0)continue;let l=ki(s,t);if(l&&s?.["@id"]!=l){let u={replacer:l,replacee:s?.["@id"]};n.push(u)}if(!l&&s?.["@id"].startsWith("_:")){let u={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(u)}}return e=i.replaceIds(e,n),e}function Wi(e){return Pr(e,new Set)}function Pr(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>Pr(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=Pr(e[n],t);return e}function Ji(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function zi(e){return e=Wi(e),JSON.stringify(e,Ji,4)}function fl(e){return zi(e)}function pl(e){return JSON.parse(e)}function gl(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(l=>t(l,n));if(i.isJsonld(r)){for(let l of Object.keys(r?.record||r))r=i.setValues(r,l,t(i.getValues(r,l),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function at(e){let t=i.getAtValue(e);if(t&&t.length>0)return at(i.getAtValue(e));if(i.isArray(e))return e.map(r=>at(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,at(i.getValues(e,r)));return e}return e}function qi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function ml(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let l of n){if(l=="@id")continue;let u=i.toArray(e?.[l]||void 0),d=i.toArray(t?.[l]||void 0),f=u.concat(d);r==!0&&(f=i.dedupe(f)),s[l]=f}return s}function hl(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{},t=t?.record||t;for(let r of i.keys(t)){let n=i.toArray(t?.[r]);e=i.setValues(e,r,n)}return e}function yl(e,t){t=t?.baseUrl??t;try{return p.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var Dr={};b(Dr,{ID:()=>Dl,Id:()=>Ul,Type:()=>Sl,actionStatus:()=>Zl,addValue:()=>Zi,addValues:()=>Qi,contentUrl:()=>tu,description:()=>iu,email:()=>au,getActionStatus:()=>Ql,getAdditionalProperty:()=>Gl,getAtValue:()=>Yl,getContentUrl:()=>ru,getDescription:()=>su,getEmail:()=>lu,getID:()=>Ol,getId:()=>Hl,getImageName:()=>pd,getImageUrl:()=>fd,getItem:()=>cu,getItemListElement:()=>yu,getItems:()=>gu,getName:()=>Vu,getNumberOfItems:()=>$u,getObject:()=>_u,getObjects:()=>Nu,getPosition:()=>vu,getPotentialAction:()=>Du,getPotentialActions:()=>Uu,getRecordID:()=>jl,getRecordId:()=>Pl,getRecordType:()=>Al,getRecord_id:()=>Il,getRecord_type:()=>bl,getResult:()=>Lu,getResults:()=>Wu,getTargetCollection:()=>qu,getTargetCollections:()=>Yu,getText:()=>Qu,getType:()=>kl,getUrl:()=>rd,getValue:()=>N,getValues:()=>Rr,hasValue:()=>es,insertValue:()=>ql,isActive:()=>sd,isCompleted:()=>od,isFailed:()=>ad,isPotential:()=>id,isRef:()=>Fl,item:()=>du,itemListElement:()=>hu,items:()=>pu,keys:()=>Jl,name:()=>bu,numberOfItems:()=>Au,object:()=>ku,objects:()=>Tu,position:()=>Cu,potentialAction:()=>Ru,potentialActions:()=>Bu,properties:()=>jr,recordID:()=>vl,recordId:()=>Nl,recordType:()=>wl,record_id:()=>Gi,record_type:()=>xl,ref:()=>Wl,result:()=>Mu,results:()=>Fu,setActionStatus:()=>eu,setActive:()=>ud,setAdditionalProperty:()=>Kl,setAtValue:()=>Xl,setCompleted:()=>dd,setContentUrl:()=>nu,setDescription:()=>ou,setEmail:()=>uu,setFailed:()=>cd,setID:()=>Bl,setId:()=>Ml,setIfNull:()=>zl,setItem:()=>fu,setItemListElement:()=>xu,setItems:()=>mu,setName:()=>wu,setNumberOfItems:()=>Su,setObject:()=>Iu,setObjects:()=>Pu,setPosition:()=>ju,setPotential:()=>ld,setPotentialAction:()=>Ou,setPotentialActions:()=>Hu,setRecordID:()=>Rl,setRecordId:()=>Cl,setRecordType:()=>$l,setRecord_id:()=>Tl,setRecord_type:()=>Vl,setResult:()=>Eu,setResults:()=>Ju,setTargetCollection:()=>Gu,setTargetCollections:()=>Xu,setText:()=>ed,setType:()=>_l,setUrl:()=>nd,setValue:()=>O,setValueIfNull:()=>Xi,setValues:()=>Le,targetCollection:()=>zu,targetCollections:()=>Ku,text:()=>Zu,toRecordID:()=>Ki,toRecordId:()=>El,toRecord_id:()=>Me,toRecord_ids:()=>Ll,toRef:()=>Yi,url:()=>td});var we="en-CA";function xl(e){return N(e,"@type")}function bl(e){return N(e,"@type")}function Vl(e,t){return O(e,"@type",t)}function wl(e){return N(e,"@type")}function Al(e){return N(e,"@type")}function $l(e,t){return O(e,"@type",t)}function Sl(e){return N(e,"@type")}function kl(e){return N(e,"@type")}function _l(e,t){return O(e,"@type",t)}function Gi(e){return N(e,"@id")}function Il(e){return N(e,"@id")}function Tl(e,t){return O(e,"@id",t)}function Nl(e){return N(e,"@id")}function Pl(e){return N(e,"@id")}function Cl(e,t){return O(e,"@id",t)}function vl(e){return N(e,"@id")}function jl(e){return N(e,"@id")}function Rl(e,t){return O(e,"@id",t)}function Dl(e){return N(e,"@id")}function Ol(e){return N(e,"@id")}function Bl(e,t){return O(e,"@id",t)}function Ul(e){return N(e,"@id")}function Hl(e){return N(e,"@id")}function Ml(e,t){return O(e,"@id",t)}function Me(e){return i.isArray(e)?e.map(t=>Me(t)):typeof e=="string"?e:Gi(e)}function Ll(e){return Me(e)}function Ki(e){return Me(e)}function El(e){return Me(e)}function Fl(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function Wl(e){if(e?._isThingClass==!0)return e.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function Yi(e){return i.isArray(e)?e.map(t=>Yi(t)):{"@id":Ki(e)}}function Jl(e){return jr(e)}function jr(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(jr(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function N(e,t,r,n,s){let l=Rr(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),l?.[r]??n}function O(e,t,r,n,s){if(n!==void 0){let l=i.getValues(e,t);for(;l.length-1<n;)l.push(null);l[n]=r,r=l}return Le(e,t,r,s)}function Xi(e,t,r,n,s){let l=N(e,t,n);return i.isNull(l)==!1?e:O(e,t,r,n,s)}function zl(e,t,r,n,s){return Xi(e,t,r,n,s)}function Zi(e,t,r){return Qi(e,t,r)}function Qi(e,t,r){return r=i.getValues(e,t).concat(r),Le(e,t,r)}function Rr(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),l=e;for(let d=0;d<s.length;d++){let[f,c]=vr(s[d]);f&&(l=l?.[f],l=i.toArray(l)),l=l.filter(g=>g?.["@language"]==n||g?.["@language"]==we||g?.["@language"]===void 0),l=l.map(g=>g?.["@value"]??g),l=i.toArray(l),l=l.map(g=>g?.[n]??g?.[we]??g),l=i.toArray(l),d<s.length-1&&(l=l?.[c])}let u=i.toArray(l);return u.length==0&&r!==void 0?r:u}function Le(e,t,r,n){e=e?.record||e;let s=t.split("."),l=e||{};for(let f=0;f<s.length-1;f++){let[c,g]=vr(s[f]);l[c]=i.toArray(l?.[c]||[]);let V;for(l?.[c]?.[n]?(l[c][n]=i.toArray(l?.[c]?.[n]),V=l[c][n]):l?.[c]?.[we]?(l[c][we]=i.toArray(l?.[c]?.[we]),V=l[c][we]):(l[c]=i.toArray(l?.[c])||[],V=l[c]);V.length-1<g;)V.push({"@type":"Thing"});l=V?.[g]}let[u,d]=vr(s[s.length-1]);return l[u]=i.toArray(r),e}function ql(e,t,r){return es(e,t,r)==!0?e:Zi(e,t,r)}function es(e,t,r){let n=Rr(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function vr(e){if(e===void 0)return[void 0,0];let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function Gl(e,t){let n=i.getValues(e,"additionalProperty").find(l=>i.getValue(l,"propertyID")==t);return i.getValue(n,"value")}function Kl(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(u=>i.getValue(u,"propertyID")!=t);let l={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r};return e=i.addValue(e,"additionalProperty",l),e}function Yl(e){return i.getValues(e,"@value")}function Xl(e,t){return i.setValues(e,"@value",t)}function Zl(e){return i.getValue(e,"actionStatus")}function Ql(e){return i.getValue(e,"actionStatus")}function eu(e,t){return i.setValue(e,"actionStatus",t)}function tu(e){return i.getValue(e,"contentUrl")}function ru(e){return i.getValue(e,"contentUrl")}function nu(e,t){return i.setValue(e,"contentUrl",t)}function iu(e){return i.getValue(e,"description")}function su(e){return i.getValue(e,"description")}function ou(e,t){return i.setValue(e,"description",t)}function au(e){return i.getValue(e,"email")}function lu(e){return i.getValue(e,"email")}function uu(e,t){return i.setValue(e,"email",t)}function du(e){return i.getValue(e,"item")}function cu(e){return i.getValue(e,"item")}function fu(e,t){return i.setValue(e,"item",t)}function pu(e){return i.list.getItems(e)}function gu(e){return i.list.getItems(e)}function mu(e,t){return i.list.setItems(e,t)}function hu(e){return i.list.getItemListElement(e)}function yu(e){return i.list.getItemListElement(e)}function xu(e,t){return i.list.setItemListElement(e,t)}function bu(e){return i.getValue(e,"name")}function Vu(e){return i.getValue(e,"name")}function wu(e,t){return i.setValue(e,"name",t)}function Au(e){return i.getValue(e,"numberOfItems")}function $u(e){return i.getValue(e,"numberOfItems")}function Su(e,t){return i.setValue(e,"numberOfItems",t)}function ku(e){return i.getValue(e,"object")}function _u(e){return i.getValue(e,"object")}function Iu(e,t){return O(e,"object",t)}function Tu(e){return i.getValues(e,"object")}function Nu(e){return i.getValues(e,"object")}function Pu(e,t){return Le(e,"object",t)}function Cu(e){return i.list.getPosition(e)}function vu(e){return i.list.getPosition(e)}function ju(e,t){return i.list.setPosition(e,t)}function Ru(e){return i.getValues(e,"potentialAction")}function Du(e){return i.getValues(e,"potentialAction")}function Ou(e,t){return i.setValues(e,"potentialAction",t)}function Bu(e){return i.getValues(e,"potentialAction")}function Uu(e){return i.getValues(e,"potentialAction")}function Hu(e,t){return i.setValues(e,"potentialAction",t)}function Mu(e){return i.getValue(e,"result")}function Lu(e){return i.getValue(e,"result")}function Eu(e,t){return O(e,"result",t)}function Fu(e){return i.getValues(e,"result")}function Wu(e){return i.getValues(e,"result")}function Ju(e,t){return Le(e,"result",t)}function zu(e){return i.getValue(e,"targetCollection")}function qu(e){return i.getValue(e,"targetCollection")}function Gu(e,t){return i.setValue(e,"targetCollection",t)}function Ku(e){return i.getValues(e,"targetCollection")}function Yu(e){return i.getValues(e,"targetCollection")}function Xu(e,t){return i.setValues(e,"targetCollection",t)}function Zu(e){return i.getValue(e,"text")}function Qu(e){return i.getValue(e,"text")}function ed(e,t){return i.setValue(e,"text",t)}function td(e){return i.getValue(e,"url")}function rd(e){return i.getValue(e,"url")}function nd(e,t){return i.setValue(e,"url",t)}function id(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function sd(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function od(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function ad(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function ld(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function ud(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function dd(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")||new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")||new Date().toISOString()),e=i.setValue(e,"error",void 0),i.isNotNull(t)&&(e=i.setValue(e,"result",t)),e}function cd(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date().toISOString()),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function fd(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function pd(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var Br={};b(Br,{_utilGetId:()=>Id,getDataType:()=>md,isArray:()=>us,isBoolean:()=>ts,isDate:()=>ss,isJsonld:()=>ls,isNotArray:()=>kd,isNotBoolean:()=>yd,isNotDate:()=>Ad,isNotNull:()=>hd,isNotNumber:()=>bd,isNotObject:()=>$d,isNotString:()=>Vd,isNull:()=>Or,isNumber:()=>rs,isObject:()=>as,isString:()=>is,randomUUID:()=>gd,toArray:()=>ds,toBoolean:()=>xd,toDate:()=>os,toNumber:()=>ns,toObject:()=>Sd,toSingle:()=>_d,toString:()=>wd});function gd(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function md(e){if(Or(e))return"Undefined";if(us(e))return"Array";if(ls(e))return"Jsonld";let t=os(e);if(ss(t))return"Date";let r=ns(e);return rs(r)?"Number":as(e)?"Object":is(e)?'String"':ts(e)?"Boolean":"Undefined"}function Or(e){return p.isNull(e)}function hd(e){return p.isNotNull(e)}function ts(e){return p.isBoolean(e)}function yd(e){return p.isNotBoolean(e)}function xd(e){return p.toBoolean(e)}function rs(e){return p.isNumber(e)}function bd(e){return p.isNotNumber(e)}function ns(e){return p.toNumber(e)}function is(e){return p.isString(e)}function Vd(e){return p.isNotString(e)}function wd(e){return p.toString(e)}function ss(e){return p.isDate(e)}function Ad(e){return p.isNotDate(e)}function os(e){return p.toDate(e)}function as(e){return p.isObject(e)}function $d(e){return p.isNotObject(e)}function Sd(e){return p.toObject(e)}function ls(e){return Or(e)?!1:!!(e?.["@id"]||e?.["@type"])}function us(e){return p.isArray(e)}function kd(e){return p.isNotArray(e)}function ds(e){return p.toArray(e)}function _d(e){return e=ds(e),e?.[0]??void 0}function Id(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var Ur={};b(Ur,{concat:()=>Td,dedupe:()=>cs,deleteItem:()=>Cd,diff:()=>Pd,filter:()=>Dd,find:()=>Rd,includes:()=>lt,insertItem:()=>vd,intersection:()=>Nd,length:()=>jd,search:()=>ps,sort:()=>Ae,upsertItem:()=>fs});function cs(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)lt(r,n)==!1&&(t==!0&&i.isValid(n)&&ps(e,n).forEach(l=>n=i.merge(l,n)),r.push(n));return r=Ae(r),r}function lt(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function Td(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=cs(n)),n=Ae(n),n}function Ae(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function Nd(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)lt(t,n)==!0&&r.push(n);return r=Ae(r),r}function Pd(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)lt(t,n)==!1&&r.push(n);return r=Ae(r),r}function Cd(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function fs(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function vd(e,t){return fs(e,t)}function jd(e){return e=i.toArray(e),e.length}function Rd(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function ps(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function Dd(e,t,r,n,s,l){return e=i.toArray(e),e.length==0?itemList:(i.isNotNull(t)&&(e=e.filter(u=>i.evaluate(u,t))),e=Ae(e,r,n),e.length==0||(l=i.toNumber(l),i.isNumber(l)&&(e=e.slice(l)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=slice(0,s))),e)}var Hr={};b(Hr,{exportToString:()=>gs});function gs(e){return Array.isArray(e)?Od(e):i.record_type(e)=="ListItem"?Bd(e):i.record_type(e)=="ItemList"?Ud(e):i.record_type(e)=="Action"?Hd(e):i.getValue(e,"name")||i.getValue(e,"@id")}function Od(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=gs(r)+`
`),t}function Bd(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function Ud(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function Hd(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var Lr={};b(Lr,{DatabaseHelper:()=>Mr,testDB:()=>Md});var Mr=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(l=>typeof l=="string"?{"@id":l}:l),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let n=i.toArray(this._retrieved);r=r.filter(l=>n.includes(l)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Md(){}var Yr={};b(Yr,{add:()=>Jd,append:()=>Ee,clean:()=>Er,decrementPositions:()=>Gr,duplicate:()=>Zd,ensurePositions:()=>Se,ensurePreviousNextItem:()=>ft,filter:()=>Qd,find:()=>J,findByItem:()=>Fr,findByListItem:()=>ut,findByPosition:()=>ws,getILE:()=>Wd,getItem:()=>Je,getItemListElement:()=>T,getItems:()=>As,getListItems:()=>ec,getMaxPosition:()=>We,getMinPosition:()=>Kr,getPosition:()=>P,gt:()=>Vs,incrementPositions:()=>qr,insert:()=>R,insertAfter:()=>zr,insertBefore:()=>Jr,isItemList:()=>j,isListItem:()=>dt,length:()=>Fd,lt:()=>bs,move:()=>zd,moveAfter:()=>Yd,moveBefore:()=>Kd,moveDown:()=>Gd,moveUp:()=>qd,prepend:()=>hs,remove:()=>xs,replace:()=>ys,replaceItem:()=>rc,setItem:()=>Ss,setItemListElement:()=>B,setItems:()=>$s,setPosition:()=>ct,sort:()=>Fe,toItemList:()=>Ed,toListItem:()=>$e,toString:()=>Ld,toStringItemList:()=>ms,toStringListItem:()=>Wr,updateItem:()=>tc,upsert:()=>Xd});function Ld(e){return j(e)?ms(e):Wr(e)}function ms(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=T(e);return t=t.concat(r.map(n=>Wr(n))),t.join(`
`)}function Wr(e){return`${P(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function j(e){return i.record_type(e)==="ItemList"}function Ed(e){if(j(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>$e(r,n))},Er(e)}return Er(e)}function Er(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=T(e);return t=t.map(r=>$e(r)),t=Se(t),t=ft(t),e=B(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function Fd(e){return T(e).length}function T(e){return i.getValues(e,"itemListElement")||[]}function Wd(e){return T(e)}function B(e,t){return t=i.toArray(t),t=t.map((n,s)=>$e(n)),t=Se(t),t=ft(t),e=i.setValues(e,"itemListElement",t),i.getValue(e,"numberOfItems")!=t.length&&(e=i.setValue(e,"numberOfItems",t.length)),e}function R(e,t,r){if(e=Se(e),i.isArray(t)){let s=r;for(let l of t)e=R(e,l,s),(s||s===0)&&(s+=1);return e}t=$e(t,r);let n=T(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??We(n),r=r??n.length,r=r>=0?r:0,n=qr(n,r),n=Fe(n),n.push(t),e=B(e,n),e}function Jr(e,t,r){if(i.isArray(t)){for(let l of t)e=Jr(e,l,r);return e}let n=J(e,r);if(!n)return R(e,t);let s=P(n);return R(e,t,s)}function zr(e,t,r){if(i.isArray(t)){for(let l of t)e=zr(e,l,r);return e}let n=J(e,r);if(!n)return R(e,t);let s=P(n);return R(e,t,s+1)}function hs(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=hs(e,t?.[r],referenceItem);return e}return R(e,t,0)}function Ee(e,t){if(i.isArray(t)){for(let s of t)e=Ee(e,s,referenceItem);return e}let r=T(e);if(r.length==0)return R(e,t,0);let n=We(e);return n||n===0?R(e,t,n+1):R(e,t,r.length)}function Jd(e,t){return Ee(e,t)}function zd(e,t,r){return R(e,t,r)}function qd(e,t){let r=J(e,t),n=P(r);return n==0?e:R(e,r,n-1)}function Gd(e,t){let r=J(e,t),n=P(r),s=We(e);return n==s?e:R(e,r,n+1)}function Kd(e,t,r){return Jr(e,t,r)}function Yd(e,t,r){return zr(e,t,r)}function ys(e,t,r){let n=T(e),s=[];for(let l of n){let u=Je(l);i.isSame(u,r)&&(u=Ss(l,t)),s.push(l)}return B(e,s)}function Xd(e,t){return J(e,t)?ys(e,t,i.ref(t)):Ee(e,t)}function Zd(e,t){if(dt(t)){let r=J(t);t=Je(r)}return Ee(e,t)}function xs(e,t){if(i.isArray(t)){for(let l of t)e=xs(e,l);return e}e=Se(e);let r=T(e),n=J(r,t),s=P(n);return r=r.filter(l=>i.isSame(l,n)==!1),r=Gr(r,s),e=B(e,r),e}function Qd(e,t){return j(e)&&(e=i.getItemListElement(e)),t&&(e=i.filter(e,t)),e}function dt(e){return i.record_type(e)==="ListItem"}function $e(e,t){return dt(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function bs(e,t){let r=P(e)??void 0,n=P(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function Vs(e,t){let r=P(e)??void 0,n=P(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Fe(e){if(j(e)){let r=e,n=T(r),s=Fe(n);return B(r,s)}function t(r,n){return bs(r,n)==!0?-1:Vs(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function J(e,t){if(!i.isNull(t))return i.isNumber(t)?ws(e,t):dt(t)?ut(e,t):i.record_type(t)?Fr(e,t):Fr(e,t)||ut(e,t)}function ws(e,t){if(j(e)&&(e=T(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(P(r)==t)return r}}function ut(e,t){if(j(e)&&(e=T(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function Fr(e,t){if(j(e)&&(e=T(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=Je(r);if(i.isSame(n,t))return r}}function P(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function ct(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,P(e)==t||(e=i.setValue(e,"position",t)),e}function qr(e,t){if(t=t??0,j(e)){let n=e;e=T(n);let s=qr(e,t);return B(n,s)}let r=[];for(let n of e){let s=P(n);s>=t&&(n=ct(n,s+1)),r.push(n)}return r}function Gr(e,t){if(t=t??0,j(e)){let n=e;e=T(n);let s=Gr(e,t);return B(n,s)}let r=[];for(let n of e){let s=P(n);s!=0&&s>=t&&(n=ct(n,s-1)),r.push(n)}return r}function Se(e,t){if(j(e)){let s=e;e=T(s);let l=Se(e);return B(s,l)}if(e=i.toArray(e),e.length==0)return e;e=Fe(e);let r=t??Kr(e)??0,n=[];for(let s of e)s=ct(s,r),r+=1,n.push(s);return n}function Kr(e){if(j(e)){let s=T(s);return Kr(s)}e=i.toArray(e);let t=e.map(n=>P(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function We(e){if(j(e))return e=T(e),We(e);e=i.toArray(e);let t=e.map(n=>P(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function ft(e){if(j(e)){let r=e;e=T(r);let n=ft(e);return B(r,n)}e=i.toArray(e),e=Fe(e);let t=[];for(let r of e){let n=P(r),s=J(e,n-1),l=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",l);let u=J(e,n+1),d=u?i.ref(u):void 0;r=i.setValue(r,"nextItem",d),t.push(r)}return t}function As(e){if(j(e)){let n=T(e);return As(n)}return e.map(r=>Je(r))}function $s(e,t){if(j(e)){let n=e;e=T(n);let s=$s(e);return B(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>$e(n)),e.concat(t)}function ec(e){return T(listItems)}function Je(e){return i.getValue(e,"item")}function Ss(e,t){return i.setValue(e,"item",t)}function tc(e,t,r){let n=ut(e,t);n=i.setValue(n,"item",r)}function rc(e,t,r){let n=T(e),s=i.toRecordID(t);for(let l=0;l<n.length;l++){let u=n[l];i.record_id(u)==s&&(n[l]=i.setItem(u,r))}return e=B(n),e}var Qr={};b(Qr,{appendAction:()=>Ps,deleteAction:()=>Rs,duplicateAction:()=>js,execute:()=>Xr,insertAction:()=>_s,insertAfterAction:()=>Ts,insertBeforeAction:()=>Is,moveDownAction:()=>vs,moveUpAction:()=>Cs,prependAction:()=>Ns,replaceAction:()=>Zr,searchAction:()=>nc});function Xr(e){if(i.isArray(e)){let n=new i.DB;n.set(e);let s=[];for(let l of e){l=n.get(l);let u=Xr(l);s.push(u),n.set(i.getResults(u))}return s}let t=i.getValues(e,"hasPart");if(t.length>0){let n=t.map(c=>i.list.toItemList(c)),s=new i.DB;s.set(n);let l=[],u,d=!1;for(let c of n){let g=i.list.getItemListElement(c);for(let V of g)a=i.getItem(V),a=s.get(a),d==!0&&(a=i.setFailed(a,"Previous step failed"),c=i.list.replaceItem(c,V,u)),d==!1&&(u=Xr(a),d=i.isFailed(u),c=i.list.replaceItem(c,V,u),s.set(i.getResults(u)));l.push(c)}e=i.setValues(e,"hasPart",l);let f=i.getResults(u);return e=i.setCompleted(e,f),e}let r=i.record_type(e);if(r=="UpsertAction")return ks(e);if(r=="ReplaceAction")return Zr(e);if(r=="UpdateAction")return ks(e);if(r=="InsertAction")return _s(e);if(r=="InsertBeforeAction")return Is(e);if(r=="InsertAfterAction")return Ts(e);if(r=="MoveUpAction")return Cs(e);if(r=="MoveDownAction")return vs(e);if(r=="AppendAction")return Ps(e);if(r=="PrependAction")return Ns(e);if(r=="ReplaceAction")return Zr(e);if(r=="DuplicateAction")return js(e);if(r=="DeleteAction")return Rs(e)}function ks(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t){let l=i.getValue(s,"propertyID"),u=i.getValue(s,"value");n=i.setValues(n,l,u)}e=i.addValue(e,"result",n)}return r.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function _s(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insert(s,l,r);e=i.addValue(e,"result",s)}return n.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function Is(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insertBefore(s,l,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Ts(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insertAfter(s,l,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Ns(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ps(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Cs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function vs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Zr(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee");if(n.length==0)return e=i.setFailed(e,"No replacee provided in action"),e;let s=i.list.replace(s,r,n);return e=i.addValue(e,"result",t),e=i.setCompleted(e),e}function js(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Rs(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function nc(e){let t=i.getValues(e,"query"),r=i.targetCollections(e);for(let n of r){let s=i.list.getItemListElement(n);for(let u of t)s=i.list.filter(s,o);let l=i.list.toItemList(s);e=i.addValue(e,"result",l)}return e=i.setCompleted(e),e}var tn={};b(tn,{add:()=>ic,addAppendAction:()=>zs,addDeleteAction:()=>Es,addDuplicateAction:()=>Ws,addMoveDownAction:()=>Ls,addMoveUpAction:()=>Hs,addPotentialActions:()=>mt,addPropertyUpdateAction:()=>C,addSetActiveActionStatus:()=>en,addSetCompletedActionStatus:()=>pt,addSetFailedActionStatus:()=>gt,addSetPotentialActionStatus:()=>Bs,defineActionsForAction:()=>Os,defineActionsForItemList:()=>Ds,getAppendAction:()=>qs,getDeleteAction:()=>Fs,getDuplicateAction:()=>Js,getMoveDownAction:()=>sc,getMoveUpAction:()=>Ms,getPropertyUpdateAction:()=>Us});function ic(e,t){return mt(e,t)}function mt(e,t){if(!e||typeof e=="string")return e;if(i.isArray(e))return e.map(n=>mt(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=Os(e,t)),r=="ItemList"&&(e=Ds(e,t));for(let n of Object.keys(e))e[n]=mt(e[n],t);return e}function Ds(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let l=0;l<r.length;l++){let u=i.getPosition(r[l]);u>0&&(r[l]=Hs(r[l],e,t)),u<n-1&&(r[l]=Ls(r[l],e,t)),r[l]=Es(r[l],e,t),r[l]=Ws(r[l],e,t)}e=i.setValues(e,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=zs(e,s,t),e}function Os(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return i.getValue(e,"actionStatus")||(e=Bs(e,t),e=en(e,t),e=pt(e,t),e=gt(e,t)),i.isPotential(e)&&(e=en(e,t),e=pt(e,t),e=gt(e,t)),i.isActive(e)&&(e=pt(e,t),e=gt(e,t)),e}function Bs(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=C(e,t,"actionStatus","PotentialActionStatus"),e=C(e,t,"startTime",""),e=C(e,t,"endTime",""),e=C(e,t,"error",""),e}function en(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=C(e,t,"actionStatus","ActiveActionStatus"),e=C(e,t,"startTime",r??new Date),e=C(e,t,"endTime",""),e=C(e,t,"error",""),e}function pt(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=C(e,t,"actionStatus","CompletedActionStatus"),e=C(e,t,"startTime",r??new Date),e=C(e,t,"endTime",n??new Date),e=C(e,t,"error",""),e}function gt(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=C(e,t,"actionStatus","FailedActionStatus"),e=C(e,t,"startTime",r??new Date),e=C(e,t,"endTime",n??new Date),e=C(e,t,"error",""),e}function C(e,t,r,n,s){let l=Us(e,t,r,n,s);return e=i.addValue(e,"potentialAction",l),e}function Us(e,t,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(e),url:t}}function Hs(e,t,r,n){let s=Ms(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Ms(e,t,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ls(e,t,r,n){let s=etMoveDownAction(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function sc(e,t,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Es(e,t,r,n){let s=Fs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Fs(e,t,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ws(e,t,r,n){let s=Js(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Js(e,t,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function zs(e,t,r,n){let s=qs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function qs(e,t,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:t,targetCollection:i.ref(e),url:r}}var i={dot:pe,...Gt,...Yt,...tt,..._r,...Nr,...Cr,...Dr,...Br,...Ur,...Hr,...Lr,list:Yr,...Qr,potentialActionHelpers:tn};var In={};b(In,{default:()=>Fc,things:()=>I});var rn={};b(rn,{getContent:()=>ac,getIcon:()=>cc,getTitle1:()=>Ks,getTitle2:()=>oc,imageUrl:()=>uc,imageUrls:()=>dc,thumbnailUrl:()=>lc});function Ks(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),l=i.getValue(e,"familyName"),u=i.getValue(e,"name");if(r=="Person"){let d=[s,l];if(d=d.filter(f=>f!==void 0),d.length>0)return d.join(" ")}if(r=="ListItem"){let d=i.getValue(e,"item");return Ks(d)}return u||n||""}function oc(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),l=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let u=i.getValue("actionStatus");return u=u||"",u=u.replace("ActionStatus",""),u??""}return l||""}function ac(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),l;return l=i.getValue(e,"abstract"),l&&typeof l=="string"||(l=i.getValue(e,"text"),l&&typeof l=="string")||(l=i.getValue(e,"description"),l&&typeof l=="string")?l:""}function lc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function uc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function dc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(l=>l&&typeof l=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function cc(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Gs;case"action":return fc;case"person":return pc;case"organization":return gc;case"itemlist":return mc;case"listitem":return hc;case"postaladdress":return yc;case"product":return xc;case"webapi":return bc;case"website":return Vc;case"webpage":return wc;default:return Gs}}var Gs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',fc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',pc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',gc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',mc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',hc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',yc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',xc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',bc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Vc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',wc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Zg=globalThis.crypto.randomUUID;function yt(e,t){if(Array.isArray(e))return e.map(n=>yt(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=yt(e);let r=i.record_type(e);return e=ht(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=ht(e,"MoveUpAction","Move Up",t),e=ht(e,"MoveDownAction","Move Down",t),e=ht(e,"DeleteAction","Delete",t)),e}function ht(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=Ac(e,s),e}function Ac(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var nn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function xt(e){let t=[];return t=t.concat(nn?.[e]?.properties||[]),nn?.[e]?.parent&&(t=t.concat(xt(nn[e].parent))),t}function bt(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(t>0)for(let l=0;l<3;l++){let u=e+"_"+String(l);s.hasPart.push(bt(u,t-1))}return s}function sn(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Vt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,l={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:$c(),image:_.image(),hasPart:[]};if(r==0&&(l.author=_.person(),l.datePublished=new Date().toISOString()),r<t)for(let u=0;u<3;u++){let d=e+"_"+String(u);l.hasPart.push(Vt(d,t,r+1))}return l}function $c(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function ze(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var pm=globalThis.crypto.randomUUID;function on(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let l=0;l<e;l++){let u=Sc(_.thing(l),l);s&&(s.nextItem={"@id":u?.["@id"]},u.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(u),s=u}return n}function Sc(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function an(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:_.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function ln(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:_.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function un(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:_.address()}}function dn(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function cn(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function fn(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let l of["blue","white","red"]){let u=_.product(`variant ${s} ${l}`);u.size=s,u.color=l,u.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(u)}return n}function wt(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:ze(e),hasPart:[]};if(t>0)for(let l=0;l<3;l++){let u=e+"_"+String(l);s.hasPart.push(wt(u,t-1))}return s}function pn(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function gn(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let l=0;l<t;l++){let u=e+"_"+String(l),d=_.message(u);d.sender=l%2==0?d.recipient[0]:d.recipient[1],d.recipient=l%2==0?d.recipient.toSpliced(0,1):d.recipient.toSpliced(1,1);let f=new Date;f.setDate(f.getDate()-t+l),d.dateSent=f,d.dateReceived=f,s.hasPart.push(d)}return s}var _={action:bt,article:Vt,address:sn,conversation:gn,image:ze,itemList:on,message:pn,offer:an,organization:ln,person:un,postalAddress:dn,product:cn,productGroup:fn,thing:wt,Action:bt,Article:Vt,Address:sn,Conversation:gn,Image:ze,ItemList:on,Message:pn,Offer:an,Organization:ln,Person:un,PostalAddress:dn,Product:cn,ProductGroup:fn,Thing:wt};var hn={};b(hn,{jsonToMarkdown:()=>mn});function mn(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((l,u)=>{typeof l=="object"&&l!==null?(n+=`${s}* **Record ${u+1}:**
`,n+=mn(l,t+1)):n+=`${s}* ${l}
`})}else typeof r=="object"?Object.entries(r).forEach(([l,u])=>{u!==null&&typeof u=="object"?(n+=`${s}* **${l}:**
`,n+=mn(u,t+1)):n+=`${s}* **${l}:** ${u}
`}):n+=`${s}* ${r}
`;return n}var xn={};b(xn,{jsonToYaml:()=>qe,yamlToJson:()=>kc});function qe(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(l=>{if(n+=`${r}- `,typeof l=="object"&&l!==null){let u=qe(l,t+2).trimStart();n+=u}else n+=qe(l,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(l=>{let u=e[l];n+=`${r}${l}:`,typeof u=="object"&&u!==null?n+=`
`+qe(u,t+2):n+=" "+qe(u,0)}),n)}function kc(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let l=s.search(/\S/),u=s.trim();for(;n.length>1&&l<=n[n.length-1].indent;)n.pop();let d=n[n.length-1];if(u.startsWith("-")){d.type!=="array"&&d.type==="object"&&d.lastKey&&(d.value[d.lastKey]=[],n.push({indent:l,value:d.value[d.lastKey],type:"array"}));let f=n[n.length-1],c=u.substring(1).trim();if(c.includes(":")){let[g,...V]=c.split(":"),w=g.trim(),S=V.join(":").trim(),E=yn(S),ne={[w]:E};f.value.push(ne),n.push({indent:l+2,value:ne,type:"object",lastKey:w})}else f.value.push(yn(c))}else if(u.includes(":")){let[f,...c]=u.split(":"),g=f.trim(),V=c.join(":").trim();d.lastKey=g,V===""?(d.value[g]={},n.push({indent:l,value:d.value[g],type:"object",lastKey:g})):d.value[g]=yn(V)}}return r}function yn(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var Ys={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Xs="DesignToken",Zs={css:{get:Nc},get:bn,set:Qs,getValue:Ic,setValue:Tc,sampleRecord:eo};function bn(e){if(!e)return;let t=i.getAdditionalProperty(e,Xs);return t=t||{},t}function Qs(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,Xs,t),e}function Ic(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=bn(e),n=Ne(r,t);return Ne(n,"$value")}function Tc(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=bn(),s=eo(),l=Ne(s,t);return l.$value=r,n=et(n,t,l),e=Qs(e,n),e}function Nc(e,t="dt"){let r=[];function n(u,d=[]){for(let[f,c]of Object.entries(u)){if(c==null)continue;let g=[...d,f];if(typeof c=="object"&&"value"in c){let V=`--${g.map(S=>S.toLowerCase()).join("-")}`,w=s(c.value);r.push(`  ${V}: ${w};`)}else if(typeof c=="object"&&!Array.isArray(c))n(c,g);else{let V=`--${g.map(S=>S.toLowerCase()).join("-")}`,w=s(c);r.push(`  ${V}: ${w};`)}}}function s(u){return Array.isArray(u)?u.join(", "):typeof u=="number"?u===0?"0":`${u}px`:String(u).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function eo(){return Ys}var m={markdown:hn,yaml:xn,designToken:Zs};var $t=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return Vn(this.record)}toJSON(){return this.record}toMD(){return m.markdown.jsonToMarkdown(this.record)}toYaml(){return m.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=be(At(this._record),this.baseUrl)),i.simplify(At(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(At(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=ee(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(At(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return xt(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let l of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[l]?.includeChildren==!1)continue;this._callbacks?.[l].callbackFn(s)}catch(u){console.log("Callback failed: ",l,String(u),s)}}static toString(t){return Vn(t)}static toMD(t){return m.markdown.jsonToMarkdown(t)}static toYaml(t){return m.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new I[r](m.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return ee(t)}static example(t=0,r=5){let n=this.name;return new I[n](_[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return xt(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,ee(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,ee(n))}static addValue(t,r,n){return i.addValue(t,r,ee(n))}static addValues(t,r,n){return i.addValues(t,r,ee(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return yt(t)}static addAdditionalProperty(t,r,n){return Pc(t,"additionalProperty",r,n)}};function At(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let l of Object.keys(n))s[l]=t(n?.[l]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function ee(e){if(Array.isArray(e))return e.map(t=>ee(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=I?.[t]||I.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=ee(e._record?.[t]);return e}function Vn(e){if(Array.isArray(e)){let l=e.map(u=>Vn(u));return l=l.join(`
`),l}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Pc(e,t,r,n){let s=new I.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var A=class extends $t{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=p.url.clean(value),t}set cleanUrl(t){url=p.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=be(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(l=>l?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var ae=class extends A{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(this.record,t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,l,u){return search(t,r,n,s,l,u)}};var D=class extends A{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return to(this.record,t)}static test(t,r){return to(t,r)}};function to(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",l=new RegExp(t.valuePattern,"gi");if(e.test(l)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var Ge=class extends A{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=so(this.record,t,r)}addMaxValue(t,r){this.record=oo(this.record,t,r)}addMinLength(t,r){this.record=ao(this.record,t,r)}addMaxLength(t,r){this.record=lo(this.record,t,r)}addDefaultValue(t,r){this.record=uo(this.record,t,r)}addValueRequired(t,r){this.record=co(this.record,t,r)}addValuePattern(t,r){this.record=ro(this.record,t,r)}addMultipleValues(t,r){this.record=no(this.record,t,r)}addStepValue(t,r){this.record=io(this.record,t,r)}testConditions(){return wn(this.record)}getInputconditions(){return H(this.record)}addInputCondition(t,r){return this.addValues(t+"-input",r)}getOutputConditions(){return Cc(this.record)}addOutputCondition(t,r){return this.addValues(t+"-output",r)}test(){return wn(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return so(t,r,n)}static addMaxValue(t,r,n){return oo(t,r,n)}static addMinLength(t,r,n){return ao(t,r,n)}static addMaxLength(t,r,n){return lo(t,r,n)}static addDefaultValue(t,r,n){return uo(t,r,n)}static addValueRequired(t,r,n){return co(t,r,n)}static addValuePattern(t,r,n){return ro(t,r,n)}static addMultipleValues(t,r,n){return no(t,r,n)}static addStepValue(t,r,n){return io(t,r,n)}static test(t){return wn(t)}};function H(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function Z(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function Cc(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function ro(e,t,r){let n=H(e,t)||new D;return n.valuePattern=r,e=Z(e,t,n),e}function no(e,t,r){let n=H(e,t)||new D;return n.multipleValues=r,e=Z(e,t,n),e}function io(e,t,r){let n=H(e,t)||new D;return n.stepValue=r,e=Z(e,t,n),e}function so(e,t,r){let n=H(e,t)||new D;return n.minValue=r,e=Z(e,t,n),e}function oo(e,t,r){let n=H(e,t)||new D;return n.maxValue=r,e=Z(n.record,t,r),e}function ao(e,t,r){let n=H(e,t)||new D;return n.valueMinLength=r,e=Z(e,t,n),e}function lo(e,t,r){let n=H(e,t)||new D;return n.valueMaxLength=r,e=Z(e,t,n),e}function uo(e,t,r){let n=H(e,t)||new D;return n.defaultValue=r,e=Z(e,t,n),e}function co(e,t,r){let n=H(e,t)||new D;return n.valueRequired=r,e=Z(e,t,n),e}function wn(e){let t=H(e);for(let r of t)if(D.test(r,e?.[r.propertyID])==!1)return!1;return!0}var z=class extends Ge{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(t){return this.setValues("targetCollection",t)}get toLocation(){return this.getValues("toLocation")}set toLocation(t){return this.setValues("toLocation",t)}},St=class extends z{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},kt=class extends z{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},_t=class extends z{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(t){return this.setValues("replacer",t)}get replacee(){return this.getValues("replacee")}set replacee(t){return this.setValues("replacee",t)}},It=class extends z{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Tt=class extends z{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Nt=class extends z{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var Pt=class extends A{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return vc(this.record)}get(t){return m.designToken.getValue(this.record,t)}set(t,r){return m.designToken.setValue(this.record,t,r)}get token(){return m.designToken.get(this.record)}set token(t){this.record=m.designToken.set(this.record,t)}get primary(){return m.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=m.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return m.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=m.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return m.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=m.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return m.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=m.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return m.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=m.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return m.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=m.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return m.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=m.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new Ct(this,"typography.heading-lg")}get body(){return new Ct(this,"typography.body-md")}get spacingSm(){return m.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return m.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return m.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return m.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return m.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return m.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return m.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return m.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return m.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return m.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new An(this,"shadow.elevation-md")}sample(){return m.designToken.getSampleRecord()}},Ct=class{constructor(t,r){this.base=t,this.basePath=$(r)}get fontFamily(){return m.designToken.getValue(record,$(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontFamily"),t)}get fontWeight(){return m.designToken.getValue(record,$(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontWeight"),t)}get fontSize(){return m.designToken.getValue(record,$(this.basePath,"fontSize"))}set fontSize(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontSize"),t)}get lineHeight(){return m.designToken.getValue(record,$(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"lineHeight"),t)}get letterSpacing(){return m.designToken.getValue(record,$(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"letterSpacing"),t)}get family(){return m.designToken.getValue(record,$(this.basePath,"fontFamily"))}set family(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontFamily"),t)}get weight(){return m.designToken.getValue(record,$(this.basePath,"fontWeight"))}set weight(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontWeight"),t)}get size(){return m.designToken.getValue(record,$(this.basePath,"fontSize"))}set size(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"fontSize"),t)}get height(){return m.designToken.getValue(record,$(this.basePath,"lineHeight"))}set height(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"lineHeight"),t)}get spacing(){return m.designToken.getValue(record,$(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"letterSpacing"),t)}},An=class{constructor(t,r){this.base=t,this.basePath=$(r)}get color(){return m.designToken.getValue(record,$(this.basePath,"color"))}set color(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"color"),t)}get offsetX(){return m.designToken.getValue(record,$(this.basePath,"offsetX"))}set offsetX(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"offsetX"),t)}get offsetY(){return m.designToken.getValue(record,$(this.basePath,"offsetY"))}set offsetY(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"offsetY"),t)}get blur(){return m.designToken.getValue(record,$(this.basePath,"blur"))}set blur(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"blur"),t)}get spread(){return m.designToken.getValue(record,$(this.basePath,"spread"))}set spread(t){this.base.record=m.designToken.setValue(record,$(this.basePath,"spread"),t)}};function $(e,t,r){let n=[e,t,r];n=n.filter(l=>l!=null&&l!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function vc(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var U=class extends A{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var M=class extends U{constructor(t,r,n,s,l,u){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=l,this.dateReceived=u)}toString(){return Sn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",ke(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",ke(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",ke(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",ke(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",ke(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return po(this.record)}set gmail(t){this.record=fo(t)}get outlook(){return mo(this.record)}set outlook(t){this.record=go(t)}static toString(t){return Sn(t)}static fromGmail(t){return fo(t)}static toGmail(t){return po(t)}static fromOutlook(t){return go(t)}static toOutlook(t){return mo(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),l=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-l.getTime()}),t}};function Sn(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(c=>Sn(c)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=$n(r,20);let s=i.getValues(e,"recipient").map(c=>c?.email||c?.name||"");s=$n(s,25);let l=i.getValue(e,"headline")||"";l.length>20&&(l=$n(l,30));let u=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",d="";try{d=new Intl.DateTimeFormat("en-US").format(u)}catch{}return`${r} | ${s} | ${l} | ${d}`}function $n(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function ke(e){return e?Array.isArray(e)?e.map(t=>ke(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function fo(e){let t=new M;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function po(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function go(e){let t=new M;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function mo(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var jt=class extends U{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return jc(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=M.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ho(this.record)}add(t,r,n,s,l,u){this.record=vt(this.record,t,r,n,s,l,u)}addMessage(t,r,n,s,l,u){this.record=vt(this.record,t,r,n,s,l,u)}newMessage(t,r,n,s,l,u){let d=new M(t,r,n,s,l,u);this.messages=this.messages.push(d)}static getParticipants(t){return ho(t)}static newMessage(t,r,n,s,l,u,d){return vt(t,r,n,s,l,u,d)}static addMessage(t,r,n,s,l,u,d){return vt(t,r,n,s,l,u,d)}static getMessages(t){return Ke(t)}static getFirstMessage(t){let r=Ke(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=Ke(t);return r.length>0?r[r.length-1]:void 0}};function jc(e){let t=Ke(e),r=`Conversation with ${t.length} messages:
`;return r+=M.toString(t),r}function vt(e,t,r,n,s,l,u){let d=new M(t,r,n,s,l,u);return e=i.addValues(e,"hasPart",d),e}function Ke(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=Rc(t),t}function Rc(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function ho(e){let t=Ke(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(u=>{r.add(u)})}),Array.from(r)}var _e=class extends A{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Dc(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Dc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var Rt=class extends A{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return Oc(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new _e(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function Oc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var le=class extends A{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return yo(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=A.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=A.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=A.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=A.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=A.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=A.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=A.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=A.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=A.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=A.setValues(this._record,"validThrough",t)}};function yo(e){if(Array.isArray(e))return e.map(s=>yo(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var ue=class extends U{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return kn(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new le(t,r))}static addOffer(t,r,n="CAD"){return Bc(t,r,n)}static toString(t){return kn(t)}};function kn(e){if(Array.isArray(e))return e.map(r=>kn(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function Bc(e,t,r){let n=new le(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var Dt=class extends ue{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return _n(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=Uc(this.record,t)}generateVariants(t){this.record=Hc(this.record,t)}static toString(t){return _n(t)}};function _n(e){if(Array.isArray(e))return e.map(n=>_n(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+ue.toString(n)+`
`;return t}function Uc(e,t){return e=i.addValues(e,"hasVariant",t),e}function Hc(e,t){if(Array.isArray(t)){let l={};for(let u of t)l[u.propertyID]=l?.[u.propertyID]||[],l[u.propertyID].push(l.value);t=l}let r=Mc(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=A.getProperties("Product");for(let l of r){let u=JSON.parse(JSON.stringify(e));u["@type"]="Product",delete u.hasVariant,delete u.productGroupID,delete u.variesBy,u["@id"]=void 0,u.isVariantOf={"@id":e?.["@id"]};let d=[];for(let c of Object.keys(l))d.push(l?.[c]),s.includes(c)?u=i.setValue(u,c,l[c]):u=A.addAdditionalProperty(u,c,l[c]);let f=A.getValue(u,"name")+" "+d.join(" ");u=A.setValue(u,"name",f),e=A.addValue(e,"hasVariant",u)}return e}function Mc(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],l=[];for(let u of r)for(let d of s)l.push({...u,[n]:d});return l},[{}])}var Ot=class extends A{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return xo(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function xo(e){if(Array.isArray(e))return e.map(r=>xo(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var de=class extends U{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new ae(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=Ye(this.record,"WPHeader"),q(this.record,"WPHeader")}set WPHeader(t){this.record=G(this.record,"WPHeader",t)}get WPFooter(){return this.record=Ye(this.record,"WPFooter"),q(this.record,"WPFooter")}set WPFooter(t){this.record=G(this.record,"WPFooter",t)}get WPSideBar(){return this.record=Ye(this.record,"WPSideBar"),q(this.record,"WPSideBar")}set WPSideBar(t){this.record=G(this.record,"WPSideBar",t)}get Table(){return q(this.record,"Table")}set Table(t){this.record=G(this.record,"Table",t)}addHeaderLink(t,r){this.record=bo(this.record,t,r)}addFooterLink(t,r){this.record=Vo(this.record,t,r)}domain(){return wo(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=Lc(t,this.url)}static getWPHeader(t){return q(t,"WPHeader")}static getWPFooter(t){return q(t,"WPFooter")}static getWPSideBar(t){return q(t,"WPSideBar")}static getTable(t){return q(t,"Table")}static setWPHeader(t,r){return G(t,"WPHeader",r)}static setWPFooter(t,r){return G(t,"WPFooter",r)}static setWPSideBar(t,r){return G(t,"WPSideBar",r)}static setTable(t,r){return G(t,"Table",r)}static addHeaderLink(t,r,n){return bo(t,r,n)}static addFooterLink(t,r,n){return Vo(t,r,n)}static getDomain(t){return wo(i.getValue(t,"url")||t)}};function Ye(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function q(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function G(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function bo(e,t,r){e=Ye(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=q(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=G(e,"WPHeader",s),e}function Vo(e,t,r){e=Ye(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=q(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=G(e,"WPFooter",s),e}function wo(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function Lc(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(Ec(e)=="Product"){let d=n.filter(w=>i.record_type(w)=="Product")[0];s.push({replacee:i.record_id(d),replacer:t+"#product"}),d=i.setValue(d,"url",t);let f=i.getValues(d,"brand");f=f.map(w=>w?.["@type"]?{"@type":"brand",name:w}:w),d=i.setValues(d,"brand",f);let c=n.filter(w=>i.record_type(w)=="Offer");c=c.map(w=>i.setValues(w,"itemOffered",i.ref(d))),d=i.setValues(d,"offers",c);let g=n.filter(w=>i.record_type(w)=="Review");c=c.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"review",g);let V=n.filter(w=>i.record_type(w)=="AggregateRating");return V=V.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"aggregateRating",V),d=i.replaceIds(d,s),d}return e}function Ec(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var Bt=class extends de{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new de(this);return n.url=t,n.name=r,n}domain(){return Ao(this.url)}static getDomain(t){return Ao(i.getValue(t,"url")||t)}};function Ao(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var Ut=class extends A{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var I={get:A.toThing,toThing:A.toThing,Action:Ge,AddAction:St,AppendAction:Tt,BrandDesign:Pt,Conversation:jt,CreativeWork:U,DataFeed:Rt,DataFeedItem:_e,DeleteAction:kt,InsertAction:It,ItemList:ae,Message:M,Offer:le,Product:ue,ProductGroup:Dt,PropertyValue:Ot,Thing:A,PrependAction:Nt,ReplaceAction:_t,UpdateAction:z,WebAPI:Ut,WebPage:de,WebSite:Bt,format:rn,toThing:Wc},Fc=I;function Wc(e){let t=i.record_type(e);return I?.[t]?new I[t](e):new I.Thing(e)}var Nn={};b(Nn,{Button:()=>zc,DropdownMenu:()=>$o,MenuItem:()=>qc,escapeHtml:()=>te});function te(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function zc({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${l[t]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function Tn(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?Tn(n,s):`<input type="hidden" name="${te(s)}" value="${te(String(n))}">`}).join("")}function $o({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:l="",attrs:u=""}={}){let d={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},f={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},c={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},g=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),V=e?`<span class="mr-2">${te(e)}</span>${g}`:`${g}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let w=t.map(S=>{if(S.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let E=Tn(S.object),ne=S.disabled?"disabled":"";return`
        <form method="POST" action="${te(S.url||"")}" class="m-0 p-0">
          ${E}
          <button
            type="submit"
            ${ne}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${te(S.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${l}" ${u}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${f[n]||f.ghost} ${c[s]||c.icon}"
      >
        ${V}
      </summary>

      <div class="absolute ${d[r]||d.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${w}
      </div>
    </details>
  `.trim()}function qc(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=Tn(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${te(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${te(h.getName(item)||"")}
          </button>
        </form>`}var Q={};b(Q,{components:()=>y});var Pn={};b(Pn,{Accordion:()=>Gc});function Gc({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var Cn={};b(Cn,{Alert:()=>Kc});function Kc({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var vn={};b(vn,{Article:()=>Yc,ArticleBody:()=>rf,ArticleCard:()=>sf,ArticleCardBody:()=>af,ArticleCardFooter:()=>lf,ArticleCardHeader:()=>of,ArticleCardMedia:()=>df,ArticleCardTitle:()=>uf,ArticleCategory:()=>Zc,ArticleFooter:()=>nf,ArticleHeader:()=>Xc,ArticleMedia:()=>tf,ArticleSubTitle:()=>ef,ArticleTitle:()=>Qc});function Yc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${t||""}"
    >
    
        ${e||""}
    
    </article>
    
    `}function Xc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <header 
        class="${t||""}"
    >
    
        ${e||""}
    
    </header>
    
    `}function Zc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${t||""}"
     >
        ${e||""}
     
     </p>

    `}function Qc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${t||""}"
        >
            ${e||""}
        </h1>

    `}function ef(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${t||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${e||""}</span>

        </div>

    `}function tf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${t||""}"
        >

            ${e||""}
        
        </div>

    `}function rf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${t||""}"
        >
            ${e||""}
        </div>
    `}function nf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="${t||""}"
        >
            
            ${e||""}

        </div>

    
    `}function sf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}

    </article>
    
    `}function of(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}
            
    </article>
    
    `}function af(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <div class="p-5 ${t||""}">


            ${e||""}
            
    </div>
    
    `}function lf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${t||""}">
          ${e||""}
    </div>
    
    `}function uf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${t||""}">


            ${e||""}
            
    </h3>
    
    `}function df(e,t){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${t||""}"
    >


            ${e||""}
            
    </div>
    
    `}var jn={};b(jn,{Badge:()=>cf,Badges:()=>ff});function cf(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function ff(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var Rn={};b(Rn,{Breadcrumb:()=>pf,BreadcrumbEllipsis:()=>mf,BreadcrumbItem:()=>_o,BreadcrumbLink:()=>Io,BreadcrumbList:()=>ko,BreadcrumbMain:()=>So,BreadcrumbPage:()=>gf,BreadcrumbSeparator:()=>To});function pf({urls:e,titles:t,links:r}){let n=new I.ItemList(r);if(e)for(let u=0;u<e.length;u++){let d=t?.[u]||e[u].split("/")?.[e[u].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[u],name:d})}let s=n.items;return console.log("items",s),So({children:ko({children:s.map(u=>_o({children:Io({href:u?.url,children:u?.name})})).join(To())})})}function So({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function ko({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function _o({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function Io({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function gf({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function To({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function mf({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var Dn={};b(Dn,{Button:()=>hf});function hf({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let l={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},u={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[t]||l.primary} ${u[r]||u.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var On={};b(On,{Card:()=>yf,CardBody:()=>Vf,CardContent:()=>Sf,CardDescription:()=>$f,CardFooter:()=>wf,CardHeader:()=>xf,CardMain:()=>bf,CardMedia:()=>kf,CardTitle:()=>Af});function yf(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function xf(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function bf(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function Vf(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function wf(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function Af(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function $f(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function Sf(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function kf(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var Bn={};b(Bn,{Dialog:()=>_f});function _f({id:e,title:t,description:r="",content:n,footer:s="",className:l=""}){return`
      <dialog id="${e}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${l}">
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
    `.trim()}var Un={};b(Un,{Footer:()=>If});function If({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(l=>`
      <div class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground tracking-tight">${l.title}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          ${l.links.map(u=>`
            <li>
              <a href="${u.url||"#"}" class="transition-colors hover:text-foreground">
                ${u.name}
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
    `.trim()}var Hn={};b(Hn,{Header:()=>Tf});function Tf({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((l,u)=>{if(l.dropdown&&l.dropdown.length>0){let d=`dropdown-menu-${u}`;return`
          <div class="relative inline-block text-left">
            <button 
              onclick="toggleDropdown('${d}')" 
              class="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer py-2 px-3 rounded-md hover:bg-accent"
            >
              <span>${l.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              id="${d}" 
              class="hidden absolute left-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-80"
            >
              ${l.dropdown.map(f=>`
                <a href="${f.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${f.name}
                </a>
              `).join("")}
            </div>
          </div>
        `}return`
        <a href="${l.url||"#"}" class="text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-accent">
          ${l.name}
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
    `.trim()}var Mn={};b(Mn,{H1:()=>Nf,H2:()=>Pf,H3:()=>Cf,H4:()=>vf,H5:()=>jf,H6:()=>Rf,Heading:()=>ce,P:()=>Df,Text:()=>Of});function Nf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function Pf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function Cf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function vf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function jf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function Rf(e,{options:t,record_id:r,propertyID:n,className:s}){return ce({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function ce({title:e,level:t,options:r,record_id:n,propertyID:s,className:l}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${l||""}"
    >${e}</h${t}>
    
    `}function Df(e,t,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${l??""} "
      >${e||""}</p>
    
    `}function Of(e,t,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${l??""} "
      >${e||""}</p>
    
    `}var Ln={};b(Ln,{Input:()=>L,InputCheckbox:()=>Bf,InputDate:()=>Uf,InputDateTime:()=>Mf,InputEmail:()=>Lf,InputNumber:()=>Hf,InputPassword:()=>Ef,InputTel:()=>Ff,InputText:()=>Wf,InputTime:()=>Jf,InputUrl:()=>zf});function L({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:l="",attrs:u=""}){let d=s?`id="${s}"`:"";return`
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
            ${l||""}"
          ${u||""}
        />
      </div>
    `.trim()}function Bf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function Uf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function Hf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function Mf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function Lf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function Ef({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function Ff({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function Wf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function Jf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function zf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return L({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var En={};b(En,{Pagination:()=>qf,PaginationComponent:()=>Po,PaginationContent:()=>Co,PaginationEllipsis:()=>Ro,PaginationItem:()=>Xe,PaginationLink:()=>Ht,PaginationNext:()=>jo,PaginationPrevious:()=>vo,buildPaginationUrl:()=>No});function No(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function Po({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function Co({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function Xe({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function Ht({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:l=""}={}){let u={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},d="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",f=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${d} ${u[r]||u.icon} ${f} ${s}"
      ${l}
    >
      ${n}
    </a>
  `.trim()}function vo({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Ht({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function jo({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Ht({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Ro({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function qf({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:l="",attrs:u=""}={}){let d=Math.ceil(t/r)||1,f=Math.floor(n/r)+1,c=F=>{let W=(F-1)*r;return No(e,r,W)},g=(F,W)=>{let se=W-F+1;return Array.from({length:se},(Ze,Qe)=>F+Qe)},V=s+5,w=[];if(V>=d)w=g(1,d);else{let F=Math.max(f-s,1),W=Math.min(f+s,d),se=F>2,Ze=W<d-2,Qe=1,aa=d;if(!se&&Ze){let Te=3+2*s;w=[...g(1,Te),"ellipsis",d]}else if(se&&!Ze){let Te=3+2*s,ci=g(d-Te+1,d);w=[Qe,"ellipsis",...ci]}else if(se&&Ze){let Te=g(F,W);w=[Qe,"ellipsis",...Te,"ellipsis",aa]}}let S=[],E=f>1,ne=E?c(f-1):"#";S.push(Xe({children:vo({href:ne,disabled:!E})})),w.forEach(F=>{if(F==="ellipsis")S.push(Xe({children:Ro()}));else{let W=Number(F),se=W===f;S.push(Xe({children:Ht({href:c(W),isActive:se,children:String(W)})}))}});let ie=f<d,Ft=ie?c(f+1):"#";S.push(Xe({children:jo({href:Ft,disabled:!ie})}));let Wt=Po({className:l,attrs:u,children:Co({children:S.join("")})});return Wt=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Wt}
    </div>`,Wt}var Fn={};b(Fn,{Section:()=>Gf,SectionHeader:()=>Kf});function Gf({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:l=""}={}){let u={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},d={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},f=u[t]||u.default,c=d[r]!==void 0?d[r]:d.default,g=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${c} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${f} ${n}" ${l}>
      ${g}
    </section>
  `.trim()}function Kf({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var Wn={};b(Wn,{Table:()=>Xf,TableBody:()=>Bo,TableCell:()=>K,TableCellCenter:()=>rp,TableCellLeft:()=>tp,TableCellLink:()=>ip,TableCellNumber:()=>np,TableCellRight:()=>Ho,TableCellText:()=>sp,TableColumnHeader:()=>Oo,TableColumnHeaderCenter:()=>ep,TableColumnHeaderLeft:()=>Zf,TableColumnHeaderRight:()=>Qf,TableFooter:()=>Mo,TableHeader:()=>Do,TableRow:()=>Uo,getTable:()=>Yf});function Yf({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Do(e.map(n=>Oo(n)))}
      
        ${Bo(t.map(n=>Uo(n.map(s=>K(s)))))}
        
        ${Mo()}

      </table>

    </div>
  
  
  `}function Xf(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function Do(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function Oo(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Zf(e,t){return K(e,t)}function Qf(e,t){return t=t+" text-right ",K(e,t)}function ep(e,t){return t=t+" text-center ",K(e,t)}function Bo(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Uo(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
    <tr 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${e}</tr>
  `}function K(e,t,r,n){return e||(e=""),Array.isArray(e)&&(e=e.join(" ")),`
    <td 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${e}</td>
  `}function tp(e,t,r,n){return K(e,t,r,n)}function Ho(e,t,r,n){return n=n+" text-right ",K(e,t,r,n)}function rp(e,t,r,n){return n=n+" text-center ",K(e,t,r,n)}function np(e,t,r,n,s,l){return e=i.toNumber(e),e=p.number.format(e,t),Ho(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function ip(e,t,r,n,s,l){return K(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function sp(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return K(s)}function Mo(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var Jn={};b(Jn,{Webpage:()=>op});function op({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:l}){return`
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
          ${l||""}
          ${s||""}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${n||""}</div>


      <script type="module" src="library.js"></script>

    </body>
    </html>
  `.trim()}var zn={};b(zn,{CardGrid:()=>ap});function ap({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var qn={};b(qn,{JsonEditor:()=>up});function Lo({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[t]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function lp({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:l=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${s}" ${l}>
      ${e||t?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${e?`<h3 class="font-semibold leading-none tracking-tight text-xl">${e}</h3>`:""}
          ${t?`<p class="text-sm text-muted-foreground">${t}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${r}</div>
      ${n?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${n}</div>`:""}
    </div>
  `.trim()}function up({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:l=""}={}){let u=e.replace(/[^a-zA-Z0-9_]/g,"_"),d=typeof r=="string"?r:JSON.stringify(r,null,2),f=JSON.stringify(n,null,2),c=`
    <script>
      (function() {
        var safeId = "${u}";
        
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
  `.trim(),g=`
    <form id="${u}_form" onsubmit="window.${u}_submit(event)" class="space-y-4">
      <div>
        <label for="${u}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${u}_endpoint"
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
            id="${u}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${f}</textarea>
        </div>
      </details>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="${u}_textarea" class="block text-sm font-medium text-foreground">
            JSON Payload
          </label>
          <div class="flex items-center space-x-2">
            <span id="${u}_status" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              Valid JSON
            </span>
            ${Lo({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${u}_format()"`})}
          </div>
        </div>
        <textarea 
          id="${u}_textarea"
          rows="10"
          oninput="window.${u}_validate()"
          class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >${d}</textarea>
      </div>

      <div class="flex justify-end space-x-2">
        ${Lo({children:"Submit Record",variant:"default",attrs:`id="${u}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${u}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${u}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${u}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${c}
  `.trim();return lp({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:g,className:s,attrs:l})}var Gn={};b(Gn,{Modal:()=>dp,ModalBody:()=>fp,ModalTrigger:()=>cp});function dp(e,t,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${e||""}
    </div>
    
    
    `}function cp(e,t,r){return`
    
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
    
    `}function fp(e,t,r){return`
    
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
    
    
    `}var Kn={};b(Kn,{DropdownMenu:()=>gp,DropdownMenuIcon:()=>mp,Menu:()=>pp,MenuItemLink:()=>hp,MenuItemPost:()=>yp,MenuItemSeparator:()=>xp});function pp(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function gp(e,t,r){return`
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

    `}function mp(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function hp(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function yp(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function xp(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Yn={};b(Yn,{Kanban:()=>bp,KanbanBody:()=>wp,KanbanCard:()=>Tp,KanbanCardBody:()=>Pp,KanbanCardFooter:()=>Cp,KanbanCardHeader:()=>Np,KanbanColumn:()=>Sp,KanbanColumnBody:()=>_p,KanbanColumnFooter:()=>Ip,KanbanColumnHeader:()=>kp,KanbanFooter:()=>Ap,KanbanHeader:()=>Vp,KanbanTitle:()=>$p});function bp(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function Vp(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function wp(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function Ap(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function $p(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function Sp(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function kp(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function _p(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function Ip(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function Tp(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function Np(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function Pp(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function Cp(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var Xn={};b(Xn,{StarRating:()=>vp,StarRatingEmpty:()=>Dp,StarRatingFull:()=>jp,StarRatingHalf:()=>Rp});function vp(e,t){return`
    
    <div class="flex items-center space-x-1 ${t||""}">
        ${e||""}
    </div>
    
    `}function jp(e,t){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Rp(e,t){return`
    
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


    `}function Dp(e,t){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var y={...Pn,...Cn,...vn,...jn,...Rn,...Dn,...On,...zn,...Bn,...Nn,...Un,...Hn,...Yn,...Kn,...Gn,...Ln,...qn,...En,...Fn,...Xn,...Wn,...Mn,...Jn};var ri={};b(ri,{Card:()=>Fp,Cards:()=>Wp});var ti={};b(ti,{Media:()=>fe,MediaImage:()=>Jo,MediaVideo:()=>Wo});var Lt={};b(Lt,{fixedLength:()=>Mt,textCenter:()=>Zn});function Mt(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let l=e.length;l==0&&(e=""),l==1&&(e=e[0]),l>1&&(e=`(${e.length})`)}let s=p.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=p.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=p.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let l="",u=Math.round(t/3),d=t-u-3;l+=e.slice(0,u),l+="...",l+=e.slice(-d),e=l}return t!=null&&(e=e.padEnd(t," ")),e}function Zn(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var ei={};b(ei,{toTextRecord:()=>Op,toTextTable:()=>Hp});function Op(e,t=80){let r=Bp(e,t),n=Up(e),s="";s+=Eo(r),s+=`
`,n.length>0?s+=n.map(l=>Fo(l,r)).join(""):s+=`(no records)
`}function Bp(e,t=80){let n=Qn(e).map(u=>(u||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function Up(e){let t=Qn(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:p.getValues(e,n)};r.push(s)}return r}function Hp(e,t,r=!0,n=80){t=Mp(e,t,r),e=Lp(e,t,r);let s="";if(s+=Eo(t),s+=`
`,e.length>0){let l=e.map(u=>Fo(u,t));s+=l.join("")}else s+=Zn("(no records to display.)",n);return s}function Mp(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=Qn(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function Lp(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function Eo(e){let t="",r=[];for(let s of e){let l=`${Mt(s.title,s.width,s.rounding)}`;r.push(l)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let l=`${"".padStart(s.width,"-")}`;n.push(l)}return t+=n.join(" "),t+=`
`,t}function Fo(e,t){let r="",n=[];for(let s of t){let l=i.getValues(e,s.propertyID),u=`${Mt(l,s.width,s.rounding)}`;n.push(u)}return r+=n.join(" "),r+=`
`,r}function Qn(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=Ep(t),t}function Ep(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var Vx={...Lt,...ei};function fe(e,t){if(!i.getValue(e,"contentUrl"))return"";let n="";return i.record_type(e)=="VideoObject"?Wo(e,t):Jo(e,t)}function Wo(e,t){let r=i.getValue(e,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Jo(e,t){let r=i.getValue(e,"contentUrl");return r?y.Modal(y.ImageModal(r)):""}function re({website:e,webpage:t,title:r,headContent:n,content:s,options:l}){t=new I.WebPage(t),e=new I.WebSite(e);let u={};u.title=r,u.title=u.title||i.getValue(t,"title"),u.title=u.title||i.getValue(t,"name"),u.title=u.title||i.getValue(e,"title"),u.title=u.title||i.getValue(e,"name"),u.headContent=n,u.breadcrumb=y.Breadcrumb({links:i.getValue(t,"breadcrumb")});let d=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),f=t.WPHeader.hasPart||[],c=t.WPFooter.hasPart||[];return f=Array.isArray(f)?f:[f],c=Array.isArray(c)?c:[c],u.header=y.Header({brand:d,navItems:f}),u.footer=y.Footer({brand:d,navItems:c}),u.content=s,y.Webpage(u)}function zo({website:e,webpage:t,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:f,offset:c,limit:g,options:V}){return l=l??"",l+=v.Cards({url:n,records:u,offset:c,limit:g,nbOfColumns:3,options:V}),re({website:e,webpage:t,title:r,headContent:s,content:l,options:V})}function Fp(e,t,r,n=!0){let s=I.format.getTitle1(e),l=I.format.getContent(e),u=i.getRecordUrl(e,t),d=n==!0?I.format.imageUrl(e):void 0;return y.Card({title:s,description:l,url:u,media:d,className:r})}function Wp({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:l,nbOfColumns:u,includePagination:d,options:f,layoutClasses:c,className:g,attrs:V}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let w=new I.ItemList(t);w=w.record,w.numberOfItems=w?.numberOfItems??w.itemListElement.length,w=Et({record:w,options:f}),w.itemListElement=w.itemListElement.filter(ie=>i.getValue(ie,"position")>=r&&i.getValue(ie,"position")<r+n);let S="";for(let ie of i.getValues(w,"itemListElement")){let Ft=i.getValue(ie,"item");S+=Jp({url:e,item:Ft,options:f})}S=y.CardGrid({content:S,nbOfColumns:u});let E=y.Pagination({url:e,limit:n,offset:r,total:w.numberOfItems,options:f});return`

        <div class="${c} ${g}" ${V}>
        <div class="flex-1">
            ${S}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${E}
        </div>
        </div>

    `}function Jp({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),l=i.getValues(t,"keywords");l=l.map(c=>`<a href="/?keywords=${c}">${c}</a>`);let u=y.Badges({text:l,variant:"secondary"}),d={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:u,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:fe({record:t,options:r})};return y.Card(d)}var ni={};b(ni,{Input:()=>qp});function qp({record:e,propertyID:t,value:r}){return y.Input({value:r})}var si={};b(si,{Table:()=>Gp,TableBody:()=>Go,TableCell:()=>Yo,TableHeader:()=>qo,TableRow:()=>Ko,getDataType:()=>Xo,getHeadersFromProperties:()=>ii,getPropertiesFromRecords:()=>Ie});function Gp(e,t,r,n,s,l){let u=e;r=r||Ie(u),n=n||ii(r);let d=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),d=["thumbnail"].concat(d)),l==!0&&(n=["#"].concat(n),r=["position"].concat(r),d=["position"].concat(d)),y.Table(qo(u,r,n,d)+Go(u,r,t,d))}function qo(e,t,r,n){return t=t||Ie(e),r=r||ii(t),n=n||[],t=t||Ie(e),y.TableHeader(r.map((s,l)=>{switch(n?.[l]){case"number":return y.TableColumnHeaderRight(s);default:return y.TableColumnHeader(s)}}).join(" "))}function Go(e,t,r,n){t=t||Ie(e),n=n||[];let s=i.getValues(new I.ItemList(e),"itemListElement");return y.TableBody(s.map(l=>Ko(l,t,r,n)).join(" "))}function Ko(e,t,r,n){return t=t||Ie(e),n=n||[],y.TableRow(t.map((u,d)=>Yo(e,i.getValues(e,u),u,r,n,d)).join(" "),i.record_id(e),void 0,"kr-listitem")}function Yo(e,t,r,n,s,l){let u=t,d=r,f=e;if(u=i.isArray(u)&&u.length==0?"":u,u=i.isArray(u)&&u.length==1?u[0]:u,(d||"").endsWith("@type")){let c=p.url.getUrl(n||"","/"+u);return y.TableCellLink(c,u)}if((d||"").endsWith("@id")){let c=i.getRecordUrl(f,n);return y.TableCellLink(c,u)}switch(s?.[l]||Xo(u)){case"array":return y.TableCellCenter(`(${u.length})`);case"text":return y.TableCellText(u);case"number":return y.TableCellNumber(u,2);case"link":return y.TableCellLink(u,u);case"thumbnail":return y.TableCell(fe({record:u}));case"position":return y.TableCellNumber(u,0);case"object":return y.TableCellLink(i.getRecordUrl(u,n),i.record_id(u));default:return y.TableCellText(u)}}function Ie(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function ii(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function Xo(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?p.isNumber(e)?"number":p.isUrl(e)?"link":p.isDate(e)?"date":p.isArray(e)?"array":p.isObject(e)?"object":"text":"text"}var oi={};b(oi,{Record:()=>Kp});function Kp(e,t,r,n="",s="",l=!1,u=0,d={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),d.baseUrl=t||d?.baseUrl;let f={rows:[]},c=Zo({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:l,depth:0,options:d});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${fe({record:e,options:d})||""}
            </div>
            
            <div class="flex-1">
                ${c||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${y.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function Zo({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){t=t||Object.keys(e);let d=t.filter(V=>V.startsWith("@")),f=t.filter(V=>!V.startsWith("@"));t=d.sort().concat(f.sort());let c={rows:[]};return y.Table(y.TableHeader(y.TableRow(y.TableCellRight("")+y.TableCellRight(v.DropdownMenu(i.getPotentialActions(e)))))+y.TableBody(t.map(V=>y.TableRow([y.TableCell(V+":"),y.TableCell(Qo({record:e,propertyID:V,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))].join(" "))).join(" ")))}function Yp({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(e,t),f=[];for(let c of d){let g=i.clone(e);g=i.setValue(g,t,c),f.push(Qo({record:g,propertyID:t,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))}return`
        <ul class="space-y-4 ">
          ${f.map(c=>`
            <li>
              ${c}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Qo({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(e,t);return i.isArray(d)&&d.length==1&&(d=d[0]),i.isArray(d)&&d.length==0?"":i.isArray(d)&&d.length>0?`
            <details class="space-y-4"> 
            
                <summary>${v.ValueArray(d,t,u?.baseUrl)}</summary>
      
                ${Yp({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:l,options:u})}
            
            </details>
      `:d?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${v.ValueThing(d,t,u?.baseUrl)}</summary>
      
            ${Zo({record:d,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:l,options:u})}
        
        </details>
      `:d===void 0?"":v.Value(d,t,u?.baseUrl)}var ai={};b(ai,{DropdownMenu:()=>Zp,Menu:()=>Xp});function Xp(e){return e=i.toArray(e),!e||e.length==0?"":y.DropdownMenu(y.DropdownMenuIcon(),e.map(t=>y.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function Zp(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>y.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return y.DropdownMenu(y.DropdownMenuIcon(),t)}var li={};b(li,{Kanban:()=>Qp,KanbanCard:()=>ta,KanbanColumn:()=>ea});function Qp(e,t){let r=i.getItems(e);return y.Kanban(y.KanbanHeader(y.KanbanTitle("Awesome Kanban","Fuck yeah"))+y.KanbanBody(propertyValues.map(n=>ea(e,t,n)).join(" "))+y.KanbanFooter(""))}function ea(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),y.KanbanColumn(y.KanbanColumnHeader(r)+y.KanbanColumnBody(n.map(s=>ta(s)).join(" "))+y.KanbanColumnFooter())}function ta(e){return y.KanbanCard(y.KanbanCardHeader("xx")+y.KanbanCardBody(v.Value(i.getName(e),"name"))+y.KanbanCardFooter(v.Value(i.getActionStatus(e),"actionStatus")))}var v={...ri,...ni,...ti,...oi,...si,...ai,...Ir,...li};function Et({record:e,options:t}){if(i.isArray(e))return e.map(l=>Et({record:l,options:t}));let r=i.record_type(e);if(!r)return e;let n=p.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let l of Object.keys(e?.record||e))e=i.setValues(e,l,Et({record:i.getValues(e,l),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function ra({website:e,webpage:t,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:f,offset:c,limit:g,options:V}){return l=l??"",l+=v.Table({url:n,records:u,properties:d,headers:f,offset:c,limit:g,options:V}),re({website:e,webpage:t,title:r,headContent:s,content:l,options:V})}function na({website:e,webpage:t,title:r,url:n,headContent:s,content:l,record:u,properties:d,headers:f,options:c}){return l=l??"",l+=v.Record({url:n,record:u,options:c}),re({website:e,webpage:t,title:r,headContent:s,content:l,options:c})}var ia={blankPage:re,recordsPage:ra,recordPage:na,cardsPage:zo};var sa={blocks:v,...ia,components:Q,...Q};var ui={};b(ui,{getParsedRequest:()=>eg});function eg(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var oa={shadcn:sa,express:ui};var di={...i,...In,html:oa},AV=di,$V=di,SV=di;export{di as _h,SV as default,AV as h,$V as helpers};
//# sourceMappingURL=jsonldCore.js.map
