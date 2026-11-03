var oa=Object.defineProperty;var y=(e,t)=>{for(var r in t)oa(e,r,{get:t[r],enumerable:!0})};var fe={get:Te,set:Qe,flatten:aa,expand:la};function Te(e,t){if(!t||typeof t!="string")return;let r=ci(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function Qe(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=ci(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let o=e;for(let l=0;l<n.length-1;l++){let u=n[l],c=n[l+1],d=!isNaN(c);d==!0&&(o[u]=Array.isArray(o[u])?o[u]:[o[u]],o=o?.[u]),d==!1&&(o[u]=o?.[u]||{},o=Array.isArray(o?.[u])?o?.[u][0]:o?.[u])}return o[n[n.length-1]]=r,e}function aa(e){function t(s,o){let l=[];return Array.isArray(o)?(s=s||"",o.map((c,d)=>t(`${s}[${String(d)}]`,c)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(c=>t(`${s}${c}`,o[c])).flat()):[{propertyID:s,value:o}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function la(e){let t={};return Object.keys(e).forEach(r=>Qe(t,r,e?.[r])),t}function ci(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var qt={};y(qt,{eq:()=>ga,ge:()=>ba,getDiff:()=>pi,getHash:()=>fi,getHashNested:()=>Va,gt:()=>xa,isEqual:()=>ma,isSame:()=>pa,le:()=>ya,lt:()=>ha});var et={};y(et,{expand:()=>da,flatten:()=>ca,getChildren:()=>fa,handleRelationships:()=>Jt,simplify:()=>zt,strip:()=>Wt});function da(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function o(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(b=>o(b));let u=i.record_id(l);if(u&&s.has(u)){let b=s.get(u);return r?b:i.ref?i.ref(b):{"@id":u}}let d=(u&&n instanceof Map?n.get(u):null)||l,p=Array.isArray(d)?[...d]:{...d};u&&s.set(u,p);for(let b of Object.keys(p))b==="previousItem"||b==="nextItem"||(p[b]=o(p[b]));return p}return typeof t=="string"&&(t={"@id":t}),o(t)}function Wt(e){function t(r,n,s){if(Array.isArray(r))return r.map(o=>t(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let l of Object.keys(r).sort())o[l]=t(r?.[l],n,s+1);return o}}return r}return t(e,0,0)}function ca(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let l of n)o=o.concat(t(l));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let l=n[o];l=i.toArray(l),n[o]=[];for(let u of l)u?.["@id"]?n[o].push({"@id":u?.["@id"]}):n[o].push(u),s=s.concat(t(u))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=Jt(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Jt(e){if(i.isArray(e))return e.map(r=>Jt(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function zt(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>t(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let l of Object.keys(n)){let u=t(n?.[l],s);l=="itemListElement"&&(u=i.toArray(u)),u!==void 0&&(o[l]=u)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return e=i.clone(e),t(e)}function fa(e){function t(r,n){if(i.isArray(r)){let o=[];for(let l of r){let u=t(l,n);o=o.concat(u)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(t(r[o],n+1));return s=s.filter(o=>o),s}return t(e,0)}function pa(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function ga(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function ma(e,t){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((l,u)=>(l[u]=o[u],l),{}):o;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function ha(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function ya(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function xa(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function ba(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function fi(e,t=!1){e=zt(e),t==!1&&(e=Wt(e));let r=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((c,d)=>({...c,[d]:r(u[d])}),{}):Array.isArray(u)?u.map(r):u,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,l=n.length;for(;l;)o=o*33^n.charCodeAt(--l);return(o>>>0).toString(16)}function Va(e){return fi(e,!0)}function pi(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=pi(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var Kt={};y(Kt,{evaluate:()=>Gt});function Gt(e,t){let r=[];for(let s of Object.keys(t)){let o=s,l=t?.[s];if(l=i.toArray(l),o=="$and")return l.every(u=>Gt(e,u));if(o=="$or")return l.some(u=>Gt(e,u));for(let u of l){let c=Aa(e,o,u);r.push(c)}}return r.every(s=>wa(s.r,s.p,s.o,s.v))}function wa(e,t,r,n){try{let s=fe.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Aa(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var kr={};y(kr,{assignId:()=>nl,getGenericRecordID:()=>rl,normalizeRecordId:()=>el,replaceIds:()=>Pi,setTempID:()=>Ni});var Xt={};y(Xt,{clean:()=>$a,isArray:()=>se,isNotArray:()=>Yt,isValid:()=>Sa,toArray:()=>tt});function $a(e){return tt(e)}function Sa(e){return se(e)}function se(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function Yt(e){return!se(e)}function tt(e){return e==null?[]:(e=se(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var er={};y(er,{clean:()=>Zt,format:()=>_a,formatDate:()=>gi,isDate:()=>K,isNotDate:()=>Qt,isValid:()=>ka,toDate:()=>pe});function Zt(e,t=void 0){return pe(e)||t}function ka(e){return K(e)}function _a(e,t=!1){return gi(e,t)}function K(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Qt(e){return!K(e)}function pe(e){if(e===void 0)return;if(K(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=K(e)?e:void 0,e}function gi(e,t=!1){if(console.log("vv",e,pe(e)),e=pe(e),K(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),l=`${n}-${s}-${o}`;if(t==!0){let u=String(r.getHours()).padStart(2,0),c=String(r.getMinutes()).padStart(2,0),d=String(r.getSeconds()).padStart(2,0);l=l+` ${u}:${c}:${d}`}return l}var rr={};y(rr,{clean:()=>Ia,isNotNull:()=>tr,isNull:()=>me,isValid:()=>Ta});function Ia(e,t=void 0){}function Ta(e){return me(e)}function tr(e){return!me(e)}function me(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||ge.array.isValid(e)?e.length==0:e instanceof Date?ge.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var sr={};y(sr,{clean:()=>nr,format:()=>Pa,formatDecimals:()=>mi,isNotNumber:()=>ir,isNumber:()=>Ne,isValid:()=>Na,toNumber:()=>rt});function nr(e,t=void 0){return rt(e)??t}function Na(e){return Ne(e)}function Pa(e,t){return mi(e,t)}function mi(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function Ne(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function ir(e){return!Ne(e)}function rt(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var ar={};y(ar,{clean:()=>Ca,cleanObject:()=>Pe,isNotObject:()=>or,isObject:()=>Ce,isValid:()=>va});function Ca(e,t=void 0){return Pe(e)||t}function va(e){return Ce(e)}function Ce(e){return typeof e!="object"||e===null||Array.isArray(e)||e===void 0||f.isString(e)==!0||f.isDate(e)==!0||f.isNumber(e)==!0||f.isArray(e)==!0?!1:Object.keys(e).length>0}function or(e){return!Ce(e)}function Pe(e){if(f.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Pe(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Pe(x));t=t.filter(r=>f.isNotNull(r))}}if(f.object.isValid(e))for(let t of Object.keys(e))e[t]=Pe(e[t]),ge.isNull(e[t])&&delete e[t];return ge.isNotNull(e)?e:void 0}var dr={};y(dr,{clean:()=>Ra,cleanString:()=>hi,isNotString:()=>lr,isString:()=>he,isValid:()=>ja,maxLengthEnd:()=>Oa,maxLengthMiddle:()=>Da,toString:()=>ur});function Ra(e,t=""){return hi(e)||t}function ja(e){return he(e)&&e.trim().length>=0}function Da(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Oa(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function he(e){return typeof e=="string"||e instanceof String}function lr(e){return!he(e)}function ur(e){return e==null?"":String(e)}function hi(e){return he(e)?e.trim():void 0}var gr={};y(gr,{clean:()=>yi,cleanUrl:()=>bi,getDomain:()=>Ba,getParams:()=>Ua,getPath:()=>wi,getUrl:()=>xi,isNotUrl:()=>pr,isUrl:()=>ve,isValid:()=>cr,setParams:()=>Vi,setPath:()=>Ai,toUrl:()=>fr});function cr(e){return ve(e)}function yi(e,t=void 0){return bi(e)??t}function fr(e,t,r,n=void 0){return xi(e,t,r)||n}function xi(e,t,r){let n=Ai(e,t);return r&&(n=Vi(n,r)),n}function ve(e){return e=yi(e),!!e}function pr(e){return!ve(e)}function bi(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:l=[]}=t;try{let u=new URL(e);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),n&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let c=u.pathname;if(c=c.replace(/\/+/g,"/"),o&&(c=c.toLowerCase()),s&&c.length>1&&c.endsWith("/")&&(c=c.slice(0,-1)),u.pathname=c,r){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],p=Array.from(u.searchParams.keys());for(let b of p){let V=d.some(E=>b.toLowerCase().startsWith(E)),$=l.includes(b);V&&!$&&u.searchParams.delete(b)}}return u.searchParams.sort(),u.toString()}catch{return}}function Ba(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function Ua(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function Vi(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function wi(e){try{return new URL(e).pathname}catch{return}}function Ai(e,t){t=t??"";let r=[],n=wi(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let o of t)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(o){console.log(o,s,e);return}}var yr={};y(yr,{clean:()=>Ha,format:()=>Ea,isDuration:()=>ye,isNotDuration:()=>mr,isValid:()=>Ma,toDuration:()=>hr});function Ha(e,t=void 0){return toDate(e)||t}function Ma(e){return ye(e)}function Ea(e){return Fa(e)}function ye(e){return La(e)}function mr(e){return!ye(e)}function hr(e){return e}function La(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function Fa(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,o,l,u,c,d,p]=r.map($=>parseInt($,10)||0),b=[c,d,p].map($=>String($).padStart(2,"0")).join(":"),V=[];return s&&V.push(`${s}y`),o&&V.push(`${o}m`),l&&V.push(`${l}w`),u&&V.push(`${u}d`),V.length>0?`${V.join(" ")} ${b}`:b}var br={};y(br,{clean:()=>Wa,format:()=>za,isBoolean:()=>Re,isNotBoolean:()=>xr,isValid:()=>Ja,toBoolean:()=>je,toString:()=>qa});function Wa(e){return je(e)}function Ja(e){return Re(e)}function za(e){return je(e)}function qa(e){return String(e)}function Re(e){return typeof e=="boolean"}function xr(e){return typeof e!="boolean"}function je(e){if(Re(e))return e;if(typeof e=="string"){if(e.toLowerCase()=="true")return!0;if(e.toLowerCase()=="false")return!1}if(!isNaN(e)){if(e==0)return!1;if(valeu==1)return!0}}var Ar={};y(Ar,{clean:()=>Ga,format:()=>Ya,fromJson:()=>wr,isJson:()=>De,isNotJson:()=>Vr,isValid:()=>Ka,toJson:()=>Oe});function Ga(e){return Oe(e)}function Ka(e){return De(e)}function Ya(e){return Oe(e)}function De(e){if(!e)return!1;if(typeof e=="string"){try{if(JSON.parse(e))return!0}catch{}return!1}}function Vr(e){return!De(e)}function Oe(e){let t=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(e,t(),4)}catch{}}function wr(e){try{return JSON.parse(e)}catch{}}var f={isNull:me,isNotNull:tr,isArray:se,isNotArray:Yt,toArray:tt,isDate:K,isNotDate:Qt,toDate:pe,isDuration:ye,isNotDuration:mr,toDuration:hr,isObject:Ce,isNotObject:or,isNumber:Ne,isNotNumber:ir,toNumber:rt,isString:he,isNotString:lr,toString:ur,isUrl:ve,isNotUrl:pr,toUrl:fr,isBoolean:Re,isNotBoolean:xr,toBoolean:je,isJson:De,isNotJson:Vr,toJson:Oe,fromJson:wr,array:Xt,boolean:br,date:er,duration:yr,json:Ar,null:rr,number:sr,object:ar,string:dr,url:gr,getDataType:$i,getType:$i,getJsonSchema:Xa},ge=f;function $i(e){if(me(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(se(e))return"Array";if(K(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(cr(e))return"URL";if(Zt(e))return"DateTime";if(ye(e))return"Duration";if(nr(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function Xa(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),f.isString(r))return s.type="string",s;if(f.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=t(r[o],n+1);return s}if(f.isNumber(r))return s.type="number",s;if(f.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var Ag=globalThis.crypto.randomUUID;var nt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function xe(e,t){if(!e||!e?.["@type"])return;let r=_i(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=nt?.[n];if(s=="url")return Ii(n,it(e));if(s=="domain")return Ti(n,it(e))}return Sr(t)}function Si(e,t){if(!e||!e?.["@type"])return;let r=_i(e);for(let n of r){let s=nt?.[n];if(s=="url")return Ii(n,it(e));if(s=="domain")return Ti(n,it(e))}}function ki(e,t){let r=e?.["@id"];return r?Za(e)?getStandardizedRecordId(e,t)==r:$r(e?.["@id"],t)==r:!1}function Za(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if(nt?.[r])return nt?.[r]}function _i(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function it(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function Sr(e){return e=$r(e),e?(e.endsWith("/")||(e=e+"/"),$r(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Ii(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>f.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function Ti(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>Qa(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function Qa(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function $r(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function el(e,t){e=Ni(e);let r=tl(e,t);return Pi(e,r)}function tl(e,t){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let u=[];for(let c of s)u=u.concat(r(c));return u}if(i.isObject(s)==!1)return[];let l=[{replacee:i.record_id(s),replacer:xe(s,o)}];for(let u of Object.keys(s))l=l.concat(r(s[u],o));return l}let n=r(e,t);return n=n.filter(s=>s),n}function Ni(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function rl(e){return Sr(e)}function nl(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function Pi(e,t){function r(n,s){if(Array.isArray(n))return n.map(u=>i.replaceIds(u,s));if(!n?.["@id"])return n;let o=n?.["@id"],l=s.get(o);l&&(n["@id"]=l);for(let u of Object.keys(n))n[u]=i.replaceIds(n?.[u],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var Tr={};y(Tr,{DB:()=>Ir,_storeToMap:()=>Ue,_storeToOriginal:()=>ll,getRecord:()=>Be,getRecords:()=>be,patchRecord:()=>Mi,postRecord:()=>Hi});var _r={};y(_r,{Value:()=>il,ValueArray:()=>Ri,ValueDateTime:()=>Di,ValueDuration:()=>sl,ValueMonetaryAmount:()=>ol,ValueNumber:()=>Oi,ValueRecordId:()=>Ci,ValueRecordType:()=>vi,ValueText:()=>Bi,ValueThing:()=>Ui,ValueUrl:()=>ji});function il(e,t,r){return!e&&e!==0?"":i.isArray(e)?Ri(e,t,r):t=="@type"?vi(e,t,r):t=="@id"?Ci(e,t,r):i.isObject(e)?Ui(e,t,r):i.isNumber(e)?Oi(e,t,r):i.isDate(e)?Di(e,t,r):f.isUrl(e)?ji(e,t,r):Bi(e,t,r)}function Ci(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return Y(s,t)}function vi(e,t,r){let n=f.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return Y(s,t)}function Ri(e,t,r){let n=e.length>0?`(${e.length})`:"";return Y(n,t)}function ji(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return Y(n,t)}function Di(e,t,r){e=i.toDate(e);let n=f.date.format(e);return Y(n,t)}function sl(e,t,r){return f.duration.format(pv.value)}function Oi(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=f.number.format(e,n),Y(e,t)}function Bi(e,t,r){return Y(e,t)}function Ui(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return Y(o,t)}function ol(e,t,r){let n=f.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=f.number.format(n,2),o=i.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+s,o=="USD"&&(pv.htmlValue=o+" $"+s),o=="CAD"&&(pv.htmlValue=o+" $"+s),o=="EUR"&&(pv.htmlValue=o+" "+s+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",Y(pv,t)}function Y(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var Ir=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,Be(this._store,t,r)}getAll(t=!0){return be(this._store,{},t)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return be(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>Be(this._store,i.record_id(s),!1));for(let s of r)this._store=Hi(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(o=>Be(this._store,i.record_id(o),!1));for(let o of n)this._store=Mi(this._store,o,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let o=this.get(t);return i.getValue(o,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return be(this._store)}getRecords(t=!1){return be(this._store,void 0,!1)}get record_ids(){return al(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t);return!s||i.isRef(s)?n:s}updateRefs(t,r={},n={}){if(!t)return t;if(i.isArray(t))return t.map(s=>this.updateRefs(s,r,n));if(i.isObject(t)){if(i.isRef(t)){if(r?.[i.record_id(t)])return r[i.record_id(t)];t=this.get(t,!0)||t,r[i.record_id(t)]=t}else{if(n?.[i.record_id(t)])return t;n[i.record_id(t)]=t}for(let s of Object.keys(t))["previousItem","nextItem"].includes(s)||(t[s]=this.updateRefs(t[s],r,n));return t}return t}execute(t){let r=i.toArray(t);r=r.map(o=>this.updateRefs(o));let n=new i.DB;n.set(r);let s=[];for(let o of r){o=n.get(o),o=i.execute(o),s.push(o);let l=i.getValues(o,"hasPart");for(let u of l){let c=i.list.toItemList(u);i.list.getItems(c).forEach(p=>n.set(i.getResults(p)))}n.set(i.getResults(o))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let o=t.find(l=>i.record_id(l)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(t,r){try{return t(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return fe}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function Hi(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=Ue(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function Mi(e,t,r=!0){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let n=Ue(e);for(let s of t){let o=n.get(i.record_id(s));s=i.patch(o,s),n.set(i.record_id(s),s)}return e=i._storeToOriginal(n),e}function Be(e,t,r=!0){if(i.isArray(t))return t.map(l=>Be(e,l,r));let n=i._utilGetId(t),s=Ue(e),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function be(e,t,r=!0){let n=Ue(e),s=Array.from(n.values());return t&&(s=s.filter(o=>i.evaluate(o,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function al(e){return be(e).map(n=>i.record_id(n))}function Ue(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function ll(e){return e=Array.from(e.values()),e}var Pr={};y(Pr,{JSON_parse:()=>cl,JSON_stringify:()=>Ji,clean:()=>Li,clone:()=>zi,contractAtValue:()=>ot,expandAtValue:()=>fl,getRecordUrl:()=>ml,isJsonld:()=>Ei,isValid:()=>ul,merge:()=>pl,patch:()=>gl,removeCircularRefs:()=>Fi,sortedReplacer:()=>Wi,stringify:()=>dl});function ul(e){return Ei(e)}function Ei(e){return e?.["@type"]||e?.["@id"]}function Li(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>Li(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=zi(e)}catch{}e=setTempID(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],ki(s)==!0)continue;let o=Si(s,t);if(o&&s?.["@id"]!=o){let l={replacer:o,replacee:s?.["@id"]};n.push(l)}if(!o&&s?.["@id"].startsWith("_:")){let l={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(l)}}return e=i.replaceIds(e,n),e}function Fi(e){return Nr(e,new Set)}function Nr(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>Nr(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=Nr(e[n],t);return e}function Wi(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function Ji(e){return e=Fi(e),JSON.stringify(e,Wi,4)}function dl(e){return Ji(e)}function cl(e){return JSON.parse(e)}function fl(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(o=>t(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,t(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function ot(e){let t=i.getAtValue(e);if(t&&t.length>0)return ot(i.getAtValue(e));if(i.isArray(e))return e.map(r=>ot(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,ot(i.getValues(e,r)));return e}return e}function zi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function pl(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let o of n){if(o=="@id")continue;let l=i.toArray(e?.[o]||void 0),u=i.toArray(t?.[o]||void 0),c=l.concat(u);r==!0&&(c=i.dedupe(c)),s[o]=c}return s}function gl(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{},t=t?.record||t;for(let r of i.keys(t)){let n=i.toArray(t?.[r]);e=i.setValues(e,r,n)}return e}function ml(e,t){t=t?.baseUrl??t;try{return f.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var jr={};y(jr,{ID:()=>Rl,Id:()=>Ol,Type:()=>Al,actionStatus:()=>Yl,addValue:()=>Xi,addValues:()=>Zi,contentUrl:()=>Ql,description:()=>ru,email:()=>su,getActionStatus:()=>Xl,getAdditionalProperty:()=>zl,getAtValue:()=>Gl,getContentUrl:()=>eu,getDescription:()=>nu,getEmail:()=>ou,getID:()=>jl,getId:()=>Bl,getImageName:()=>cd,getImageUrl:()=>dd,getItem:()=>uu,getItemListElement:()=>mu,getItems:()=>fu,getName:()=>xu,getNumberOfItems:()=>wu,getObject:()=>Su,getObjects:()=>Iu,getPosition:()=>Pu,getPotentialAction:()=>Ru,getPotentialActions:()=>Ou,getRecordID:()=>Cl,getRecordId:()=>Tl,getRecordType:()=>Vl,getRecord_id:()=>kl,getRecord_type:()=>yl,getResult:()=>Hu,getResults:()=>Lu,getTargetCollection:()=>Ju,getTargetCollections:()=>Gu,getText:()=>Xu,getType:()=>$l,getUrl:()=>ed,getValue:()=>T,getValues:()=>Rr,hasValue:()=>Qi,insertValue:()=>Jl,isActive:()=>nd,isCompleted:()=>id,isFailed:()=>sd,isPotential:()=>rd,isRef:()=>El,item:()=>lu,itemListElement:()=>gu,items:()=>cu,keys:()=>Fl,name:()=>yu,numberOfItems:()=>Vu,object:()=>$u,objects:()=>_u,position:()=>Nu,potentialAction:()=>vu,potentialActions:()=>Du,properties:()=>vr,recordID:()=>Pl,recordId:()=>Il,recordType:()=>bl,record_id:()=>qi,record_type:()=>hl,ref:()=>Ll,result:()=>Uu,results:()=>Eu,setActionStatus:()=>Zl,setActive:()=>ad,setAdditionalProperty:()=>ql,setAtValue:()=>Kl,setCompleted:()=>ld,setContentUrl:()=>tu,setDescription:()=>iu,setEmail:()=>au,setFailed:()=>ud,setID:()=>Dl,setId:()=>Ul,setIfNull:()=>Wl,setItem:()=>du,setItemListElement:()=>hu,setItems:()=>pu,setName:()=>bu,setNumberOfItems:()=>Au,setObject:()=>ku,setObjects:()=>Tu,setPosition:()=>Cu,setPotential:()=>od,setPotentialAction:()=>ju,setPotentialActions:()=>Bu,setRecordID:()=>vl,setRecordId:()=>Nl,setRecordType:()=>wl,setRecord_id:()=>_l,setRecord_type:()=>xl,setResult:()=>Mu,setResults:()=>Fu,setTargetCollection:()=>zu,setTargetCollections:()=>Ku,setText:()=>Zu,setType:()=>Sl,setUrl:()=>td,setValue:()=>D,setValueIfNull:()=>Yi,setValues:()=>Me,targetCollection:()=>Wu,targetCollections:()=>qu,text:()=>Yu,toRecordID:()=>Gi,toRecordId:()=>Ml,toRecord_id:()=>He,toRecord_ids:()=>Hl,toRef:()=>Ki,url:()=>Qu});var Ve="en-CA";function hl(e){return T(e,"@type")}function yl(e){return T(e,"@type")}function xl(e,t){return D(e,"@type",t)}function bl(e){return T(e,"@type")}function Vl(e){return T(e,"@type")}function wl(e,t){return D(e,"@type",t)}function Al(e){return T(e,"@type")}function $l(e){return T(e,"@type")}function Sl(e,t){return D(e,"@type",t)}function qi(e){return T(e,"@id")}function kl(e){return T(e,"@id")}function _l(e,t){return D(e,"@id",t)}function Il(e){return T(e,"@id")}function Tl(e){return T(e,"@id")}function Nl(e,t){return D(e,"@id",t)}function Pl(e){return T(e,"@id")}function Cl(e){return T(e,"@id")}function vl(e,t){return D(e,"@id",t)}function Rl(e){return T(e,"@id")}function jl(e){return T(e,"@id")}function Dl(e,t){return D(e,"@id",t)}function Ol(e){return T(e,"@id")}function Bl(e){return T(e,"@id")}function Ul(e,t){return D(e,"@id",t)}function He(e){return i.isArray(e)?e.map(t=>He(t)):typeof e=="string"?e:qi(e)}function Hl(e){return He(e)}function Gi(e){return He(e)}function Ml(e){return He(e)}function El(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function Ll(e){if(e?._isThingClass==!0)return e.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function Ki(e){return i.isArray(e)?e.map(t=>Ki(t)):{"@id":Gi(e)}}function Fl(e){return vr(e)}function vr(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(vr(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function T(e,t,r,n,s){let o=Rr(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function D(e,t,r,n,s){if(n!==void 0){let o=i.getValues(e,t);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return Me(e,t,r,s)}function Yi(e,t,r,n,s){let o=T(e,t,n);return i.isNull(o)==!1?e:D(e,t,r,n,s)}function Wl(e,t,r,n,s){return Yi(e,t,r,n,s)}function Xi(e,t,r){return Zi(e,t,r)}function Zi(e,t,r){return r=i.getValues(e,t).concat(r),Me(e,t,r)}function Rr(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),o=e;for(let u=0;u<s.length;u++){let[c,d]=Cr(s[u]);c&&(o=o?.[c],o=i.toArray(o)),o=o.filter(p=>p?.["@language"]==n||p?.["@language"]==Ve||p?.["@language"]===void 0),o=o.map(p=>p?.["@value"]??p),o=i.toArray(o),o=o.map(p=>p?.[n]??p?.[Ve]??p),o=i.toArray(o),u<s.length-1&&(o=o?.[d])}let l=i.toArray(o);return l.length==0&&r!==void 0?r:l}function Me(e,t,r,n){e=e?.record||e;let s=t.split("."),o=e||{};for(let c=0;c<s.length-1;c++){let[d,p]=Cr(s[c]);o[d]=i.toArray(o?.[d]||[]);let b;for(o?.[d]?.[n]?(o[d][n]=i.toArray(o?.[d]?.[n]),b=o[d][n]):o?.[d]?.[Ve]?(o[d][Ve]=i.toArray(o?.[d]?.[Ve]),b=o[d][Ve]):(o[d]=i.toArray(o?.[d])||[],b=o[d]);b.length-1<p;)b.push({"@type":"Thing"});o=b?.[p]}let[l,u]=Cr(s[s.length-1]);return o[l]=i.toArray(r),e}function Jl(e,t,r){return Qi(e,t,r)==!0?e:Xi(e,t,r)}function Qi(e,t,r){let n=Rr(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function Cr(e){if(e===void 0)return[void 0,0];let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function zl(e,t){let n=i.getValues(e,"additionalProperty").find(o=>i.getValue(o,"propertyID")==t);return i.getValue(n,"value")}function ql(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(l=>i.getValue(l,"propertyID")!=t);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r};return e=i.addValue(e,"additionalProperty",o),e}function Gl(e){return i.getValues(e,"@value")}function Kl(e,t){return i.setValues(e,"@value",t)}function Yl(e){return i.getValue(e,"actionStatus")}function Xl(e){return i.getValue(e,"actionStatus")}function Zl(e,t){return i.setValue(e,"actionStatus",t)}function Ql(e){return i.getValue(e,"contentUrl")}function eu(e){return i.getValue(e,"contentUrl")}function tu(e,t){return i.setValue(e,"contentUrl",t)}function ru(e){return i.getValue(e,"description")}function nu(e){return i.getValue(e,"description")}function iu(e,t){return i.setValue(e,"description",t)}function su(e){return i.getValue(e,"email")}function ou(e){return i.getValue(e,"email")}function au(e,t){return i.setValue(e,"email",t)}function lu(e){return i.getValue(e,"item")}function uu(e){return i.getValue(e,"item")}function du(e,t){return i.setValue(e,"item",t)}function cu(e){return i.list.getItems(e)}function fu(e){return i.list.getItems(e)}function pu(e,t){return i.list.setItems(e,t)}function gu(e){return i.list.getItemListElement(e)}function mu(e){return i.list.getItemListElement(e)}function hu(e,t){return i.list.setItemListElement(e,t)}function yu(e){return i.getValue(e,"name")}function xu(e){return i.getValue(e,"name")}function bu(e,t){return i.setValue(e,"name",t)}function Vu(e){return i.getValue(e,"numberOfItems")}function wu(e){return i.getValue(e,"numberOfItems")}function Au(e,t){return i.setValue(e,"numberOfItems",t)}function $u(e){return i.getValue(e,"object")}function Su(e){return i.getValue(e,"object")}function ku(e,t){return D(e,"object",t)}function _u(e){return i.getValues(e,"object")}function Iu(e){return i.getValues(e,"object")}function Tu(e,t){return Me(e,"object",t)}function Nu(e){return i.list.getPosition(e)}function Pu(e){return i.list.getPosition(e)}function Cu(e,t){return i.list.setPosition(e,t)}function vu(e){return i.getValues(e,"potentialAction")}function Ru(e){return i.getValues(e,"potentialAction")}function ju(e,t){return i.setValues(e,"potentialAction",t)}function Du(e){return i.getValues(e,"potentialAction")}function Ou(e){return i.getValues(e,"potentialAction")}function Bu(e,t){return i.setValues(e,"potentialAction",t)}function Uu(e){return i.getValue(e,"result")}function Hu(e){return i.getValue(e,"result")}function Mu(e,t){return D(e,"result",t)}function Eu(e){return i.getValues(e,"result")}function Lu(e){return i.getValues(e,"result")}function Fu(e,t){return Me(e,"result",t)}function Wu(e){return i.getValue(e,"targetCollection")}function Ju(e){return i.getValue(e,"targetCollection")}function zu(e,t){return i.setValue(e,"targetCollection",t)}function qu(e){return i.getValues(e,"targetCollection")}function Gu(e){return i.getValues(e,"targetCollection")}function Ku(e,t){return i.setValues(e,"targetCollection",t)}function Yu(e){return i.getValue(e,"text")}function Xu(e){return i.getValue(e,"text")}function Zu(e,t){return i.setValue(e,"text",t)}function Qu(e){return i.getValue(e,"url")}function ed(e){return i.getValue(e,"url")}function td(e,t){return i.setValue(e,"url",t)}function rd(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function nd(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function id(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function sd(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function od(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function ad(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function ld(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")||new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")||new Date().toISOString()),e=i.setValue(e,"error",void 0),i.isNotNull(t)&&(e=i.setValue(e,"result",t)),e}function ud(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date().toISOString()),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function dd(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function cd(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var Or={};y(Or,{_utilGetId:()=>kd,getDataType:()=>pd,isArray:()=>ls,isBoolean:()=>es,isDate:()=>is,isJsonld:()=>as,isNotArray:()=>$d,isNotBoolean:()=>md,isNotDate:()=>Vd,isNotNull:()=>gd,isNotNumber:()=>yd,isNotObject:()=>wd,isNotString:()=>xd,isNull:()=>Dr,isNumber:()=>ts,isObject:()=>os,isString:()=>ns,randomUUID:()=>fd,toArray:()=>us,toBoolean:()=>hd,toDate:()=>ss,toNumber:()=>rs,toObject:()=>Ad,toSingle:()=>Sd,toString:()=>bd});function fd(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function pd(e){if(Dr(e))return"Undefined";if(ls(e))return"Array";if(as(e))return"Jsonld";let t=ss(e);if(is(t))return"Date";let r=rs(e);return ts(r)?"Number":os(e)?"Object":ns(e)?'String"':es(e)?"Boolean":"Undefined"}function Dr(e){return f.isNull(e)}function gd(e){return f.isNotNull(e)}function es(e){return f.isBoolean(e)}function md(e){return f.isNotBoolean(e)}function hd(e){return f.toBoolean(e)}function ts(e){return f.isNumber(e)}function yd(e){return f.isNotNumber(e)}function rs(e){return f.toNumber(e)}function ns(e){return f.isString(e)}function xd(e){return f.isNotString(e)}function bd(e){return f.toString(e)}function is(e){return f.isDate(e)}function Vd(e){return f.isNotDate(e)}function ss(e){return f.toDate(e)}function os(e){return f.isObject(e)}function wd(e){return f.isNotObject(e)}function Ad(e){return f.toObject(e)}function as(e){return Dr(e)?!1:!!(e?.["@id"]||e?.["@type"])}function ls(e){return f.isArray(e)}function $d(e){return f.isNotArray(e)}function us(e){return f.toArray(e)}function Sd(e){return e=us(e),e?.[0]??void 0}function kd(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var Br={};y(Br,{concat:()=>_d,dedupe:()=>ds,deleteItem:()=>Nd,diff:()=>Td,filter:()=>Rd,find:()=>vd,includes:()=>at,insertItem:()=>Pd,intersection:()=>Id,length:()=>Cd,search:()=>fs,sort:()=>we,upsertItem:()=>cs});function ds(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)at(r,n)==!1&&(t==!0&&i.isValid(n)&&fs(e,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=we(r),r}function at(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function _d(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=ds(n)),n=we(n),n}function we(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function Id(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)at(t,n)==!0&&r.push(n);return r=we(r),r}function Td(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)at(t,n)==!1&&r.push(n);return r=we(r),r}function Nd(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function cs(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function Pd(e,t){return cs(e,t)}function Cd(e){return e=i.toArray(e),e.length}function vd(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function fs(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function Rd(e,t,r,n,s,o){return e=i.toArray(e),e.length==0?itemList:(i.isNotNull(t)&&(e=e.filter(l=>i.evaluate(l,t))),e=we(e,r,n),e.length==0||(o=i.toNumber(o),i.isNumber(o)&&(e=e.slice(o)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=slice(0,s))),e)}var Ur={};y(Ur,{exportToString:()=>ps});function ps(e){return Array.isArray(e)?jd(e):i.record_type(e)=="ListItem"?Dd(e):i.record_type(e)=="ItemList"?Od(e):i.record_type(e)=="Action"?Bd(e):i.getValue(e,"name")||i.getValue(e,"@id")}function jd(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=ps(r)+`
`),t}function Dd(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function Od(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function Bd(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var Mr={};y(Mr,{DatabaseHelper:()=>Hr,testDB:()=>Ud});var Hr=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Ud(){}var Kr={};y(Kr,{add:()=>Fd,append:()=>Ee,clean:()=>Er,decrementPositions:()=>qr,duplicate:()=>Yd,ensurePositions:()=>$e,ensurePreviousNextItem:()=>ct,filter:()=>Xd,find:()=>W,findByItem:()=>Lr,findByListItem:()=>lt,findByPosition:()=>Vs,getILE:()=>Ld,getItem:()=>We,getItemListElement:()=>I,getItems:()=>ws,getListItems:()=>Zd,getMaxPosition:()=>Fe,getMinPosition:()=>Gr,getPosition:()=>N,gt:()=>bs,incrementPositions:()=>zr,insert:()=>R,insertAfter:()=>Jr,insertBefore:()=>Wr,isItemList:()=>v,isListItem:()=>ut,length:()=>Ed,lt:()=>xs,move:()=>Wd,moveAfter:()=>Gd,moveBefore:()=>qd,moveDown:()=>zd,moveUp:()=>Jd,prepend:()=>ms,remove:()=>ys,replace:()=>hs,replaceItem:()=>ec,setItem:()=>$s,setItemListElement:()=>O,setItems:()=>As,setPosition:()=>dt,sort:()=>Le,toItemList:()=>Md,toListItem:()=>Ae,toString:()=>Hd,toStringItemList:()=>gs,toStringListItem:()=>Fr,updateItem:()=>Qd,upsert:()=>Kd});function Hd(e){return v(e)?gs(e):Fr(e)}function gs(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=I(e);return t=t.concat(r.map(n=>Fr(n))),t.join(`
`)}function Fr(e){return`${N(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function v(e){return i.record_type(e)==="ItemList"}function Md(e){if(v(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>Ae(r,n))},Er(e)}return Er(e)}function Er(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=I(e);return t=t.map(r=>Ae(r)),t=$e(t),t=ct(t),e=O(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function Ed(e){return I(e).length}function I(e){return i.getValues(e,"itemListElement")||[]}function Ld(e){return I(e)}function O(e,t){return t=i.toArray(t),t=t.map((n,s)=>Ae(n)),t=$e(t),t=ct(t),e=i.setValues(e,"itemListElement",t),i.getValue(e,"numberOfItems")!=t.length&&(e=i.setValue(e,"numberOfItems",t.length)),e}function R(e,t,r){if(e=$e(e),i.isArray(t)){let s=r;for(let o of t)e=R(e,o,s),(s||s===0)&&(s+=1);return e}t=Ae(t,r);let n=I(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??Fe(n),r=r??n.length,r=r>=0?r:0,n=zr(n,r),n=Le(n),n.push(t),e=O(e,n),e}function Wr(e,t,r){if(i.isArray(t)){for(let o of t)e=Wr(e,o,r);return e}let n=W(e,r);if(!n)return R(e,t);let s=N(n);return R(e,t,s)}function Jr(e,t,r){if(i.isArray(t)){for(let o of t)e=Jr(e,o,r);return e}let n=W(e,r);if(!n)return R(e,t);let s=N(n);return R(e,t,s+1)}function ms(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=ms(e,t?.[r],referenceItem);return e}return R(e,t,0)}function Ee(e,t){if(i.isArray(t)){for(let s of t)e=Ee(e,s,referenceItem);return e}let r=I(e);if(r.length==0)return R(e,t,0);let n=Fe(e);return n||n===0?R(e,t,n+1):R(e,t,r.length)}function Fd(e,t){return Ee(e,t)}function Wd(e,t,r){return R(e,t,r)}function Jd(e,t){let r=W(e,t),n=N(r);return n==0?e:R(e,r,n-1)}function zd(e,t){let r=W(e,t),n=N(r),s=Fe(e);return n==s?e:R(e,r,n+1)}function qd(e,t,r){return Wr(e,t,r)}function Gd(e,t,r){return Jr(e,t,r)}function hs(e,t,r){let n=I(e),s=[];for(let o of n){let l=We(o);i.isSame(l,r)&&(l=$s(o,t)),s.push(o)}return O(e,s)}function Kd(e,t){return W(e,t)?hs(e,t,i.ref(t)):Ee(e,t)}function Yd(e,t){if(ut(t)){let r=W(t);t=We(r)}return Ee(e,t)}function ys(e,t){if(i.isArray(t)){for(let o of t)e=ys(e,o);return e}e=$e(e);let r=I(e),n=W(r,t),s=N(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=qr(r,s),e=O(e,r),e}function Xd(e,t){let r=i.getItemListElement(e);return t&&(r=i.filter(r,t)),r}function ut(e){return i.record_type(e)==="ListItem"}function Ae(e,t){return ut(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function xs(e,t){let r=N(e)??void 0,n=N(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function bs(e,t){let r=N(e)??void 0,n=N(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Le(e){if(v(e)){let r=e,n=I(r),s=Le(n);return O(r,s)}function t(r,n){return xs(r,n)==!0?-1:bs(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function W(e,t){if(!i.isNull(t))return i.isNumber(t)?Vs(e,t):ut(t)?lt(e,t):i.record_type(t)?Lr(e,t):Lr(e,t)||lt(e,t)}function Vs(e,t){if(v(e)&&(e=I(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(N(r)==t)return r}}function lt(e,t){if(v(e)&&(e=I(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function Lr(e,t){if(v(e)&&(e=I(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=We(r);if(i.isSame(n,t))return r}}function N(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function dt(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,N(e)==t||(e=i.setValue(e,"position",t)),e}function zr(e,t){if(t=t??0,v(e)){let n=e;e=I(n);let s=zr(e,t);return O(n,s)}let r=[];for(let n of e){let s=N(n);s>=t&&(n=dt(n,s+1)),r.push(n)}return r}function qr(e,t){if(t=t??0,v(e)){let n=e;e=I(n);let s=qr(e,t);return O(n,s)}let r=[];for(let n of e){let s=N(n);s!=0&&s>=t&&(n=dt(n,s-1)),r.push(n)}return r}function $e(e,t){if(v(e)){let s=e;e=I(s);let o=$e(e);return O(s,o)}if(e=i.toArray(e),e.length==0)return e;e=Le(e);let r=t??Gr(e)??0,n=[];for(let s of e)s=dt(s,r),r+=1,n.push(s);return n}function Gr(e){if(v(e)){let s=I(s);return Gr(s)}e=i.toArray(e);let t=e.map(n=>N(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function Fe(e){if(v(e))return e=I(e),Fe(e);e=i.toArray(e);let t=e.map(n=>N(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function ct(e){if(v(e)){let r=e;e=I(r);let n=ct(e);return O(r,n)}e=i.toArray(e),e=Le(e);let t=[];for(let r of e){let n=N(r),s=W(e,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let l=W(e,n+1),u=l?i.ref(l):void 0;r=i.setValue(r,"nextItem",u),t.push(r)}return t}function ws(e){if(v(e)){let n=I(e);return ws(n)}return e.map(r=>We(r))}function As(e,t){if(v(e)){let n=e;e=I(n);let s=As(e);return O(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>Ae(n)),e.concat(t)}function Zd(e){return I(listItems)}function We(e){return i.getValue(e,"item")}function $s(e,t){return i.setValue(e,"item",t)}function Qd(e,t,r){let n=lt(e,t);n=i.setValue(n,"item",r)}function ec(e,t,r){let n=I(e),s=i.toRecordID(t);for(let o=0;o<n.length;o++){let l=n[o];i.record_id(l)==s&&(n[o]=i.setItem(l,r))}return e=O(n),e}var Zr={};y(Zr,{appendAction:()=>Ts,deleteAction:()=>vs,duplicateAction:()=>Cs,execute:()=>Yr,insertAction:()=>Ss,insertAfterAction:()=>_s,insertBeforeAction:()=>ks,moveDownAction:()=>Ps,moveUpAction:()=>Ns,prependAction:()=>Is,replaceAction:()=>Xr});function Yr(e){if(i.isArray(e)){let n=new i.DB;n.set(e);let s=[];for(let o of e){o=n.get(o);let l=Yr(o);s.push(l),n.set(i.getResults(l))}return s}let t=i.getValues(e,"hasPart");if(t.length>0){let n=t.map(d=>i.list.toItemList(d)),s=new i.DB;s.set(n);let o=[],l,u=!1;for(let d of n){let p=i.list.getItemListElement(d);for(let b of p)a=i.getItem(b),a=s.get(a),u==!0&&(a=i.setFailed(a,"Previous step failed"),d=i.list.replaceItem(d,b,l)),u==!1&&(l=Yr(a),u=i.isFailed(l),d=i.list.replaceItem(d,b,l),s.set(i.getResults(l)));o.push(d)}e=i.setValues(e,"hasPart",o);let c=i.getResults(l);return e=i.setCompleted(e,c),e}let r=i.record_type(e);if(r=="ReplaceAction")return Xr(e);if(r=="UpdateAction")return tc(e);if(r=="InsertAction")return Ss(e);if(r=="InsertBeforeAction")return ks(e);if(r=="InsertAfterAction")return _s(e);if(r=="MoveUpAction")return Ns(e);if(r=="MoveDownAction")return Ps(e);if(r=="AppendAction")return Ts(e);if(r=="PrependAction")return Is(e);if(r=="ReplaceAction")return Xr(e);if(r=="DuplicateAction")return Cs(e);if(r=="DeleteAction")return vs(e)}function tc(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t){let o=i.getValue(s,"propertyID"),l=i.getValue(s,"value");n=i.setValues(n,o,l)}e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ss(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insert(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function ks(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertBefore(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function _s(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertAfter(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Is(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ts(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ns(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ps(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Xr(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee"),s=i.list.replace(s,r,n);return e=i.addValue(e,"result",t),e=i.setCompleted(e),e}function Cs(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function vs(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}var en={};y(en,{add:()=>rc,addAppendAction:()=>Ws,addDeleteAction:()=>Ms,addDuplicateAction:()=>Ls,addMoveDownAction:()=>Hs,addMoveUpAction:()=>Bs,addPotentialActions:()=>gt,addPropertyUpdateAction:()=>P,addSetActiveActionStatus:()=>Qr,addSetCompletedActionStatus:()=>ft,addSetFailedActionStatus:()=>pt,addSetPotentialActionStatus:()=>Ds,defineActionsForAction:()=>js,defineActionsForItemList:()=>Rs,getAppendAction:()=>Js,getDeleteAction:()=>Es,getDuplicateAction:()=>Fs,getMoveDownAction:()=>nc,getMoveUpAction:()=>Us,getPropertyUpdateAction:()=>Os});function rc(e,t){return gt(e,t)}function gt(e,t){if(!e||typeof e=="string")return e;if(i.isArray(e))return e.map(n=>gt(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=js(e,t)),r=="ItemList"&&(e=Rs(e,t));for(let n of Object.keys(e))e[n]=gt(e[n],t);return e}function Rs(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let o=0;o<r.length;o++){let l=i.getPosition(r[o]);l>0&&(r[o]=Bs(r[o],e,t)),l<n-1&&(r[o]=Hs(r[o],e,t)),r[o]=Ms(r[o],e,t),r[o]=Ls(r[o],e,t)}e=i.setValues(e,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=Ws(e,s,t),e}function js(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return i.getValue(e,"actionStatus")||(e=Ds(e,t),e=Qr(e,t),e=ft(e,t),e=pt(e,t)),i.isPotential(e)&&(e=Qr(e,t),e=ft(e,t),e=pt(e,t)),i.isActive(e)&&(e=ft(e,t),e=pt(e,t)),e}function Ds(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","PotentialActionStatus"),e=P(e,t,"startTime",""),e=P(e,t,"endTime",""),e=P(e,t,"error",""),e}function Qr(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","ActiveActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",""),e=P(e,t,"error",""),e}function ft(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","CompletedActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",n??new Date),e=P(e,t,"error",""),e}function pt(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","FailedActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",n??new Date),e=P(e,t,"error",""),e}function P(e,t,r,n,s){let o=Os(e,t,r,n,s);return e=i.addValue(e,"potentialAction",o),e}function Os(e,t,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(e),url:t}}function Bs(e,t,r,n){let s=Us(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Us(e,t,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Hs(e,t,r,n){let s=etMoveDownAction(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function nc(e,t,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ms(e,t,r,n){let s=Es(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Es(e,t,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ls(e,t,r,n){let s=Fs(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Fs(e,t,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Ws(e,t,r,n){let s=Js(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Js(e,t,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:t,targetCollection:i.ref(e),url:r}}var i={dot:fe,...qt,...Kt,...et,...kr,...Tr,...Pr,...jr,...Or,...Br,...Ur,...Mr,list:Kr,...Zr,potentialActionHelpers:en};var _n={};y(_n,{default:()=>Ec,things:()=>_});var tn={};y(tn,{getContent:()=>sc,getIcon:()=>uc,getTitle1:()=>qs,getTitle2:()=>ic,imageUrl:()=>ac,imageUrls:()=>lc,thumbnailUrl:()=>oc});function qs(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),o=i.getValue(e,"familyName"),l=i.getValue(e,"name");if(r=="Person"){let u=[s,o];if(u=u.filter(c=>c!==void 0),u.length>0)return u.join(" ")}if(r=="ListItem"){let u=i.getValue(e,"item");return qs(u)}return l||n||""}function ic(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let l=i.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return o||""}function sc(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o;return o=i.getValue(e,"abstract"),o&&typeof o=="string"||(o=i.getValue(e,"text"),o&&typeof o=="string")||(o=i.getValue(e,"description"),o&&typeof o=="string")?o:""}function oc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function ac(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function lc(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function uc(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return zs;case"action":return dc;case"person":return cc;case"organization":return fc;case"itemlist":return pc;case"listitem":return gc;case"postaladdress":return mc;case"product":return hc;case"webapi":return yc;case"website":return xc;case"webpage":return bc;default:return zs}}var zs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',dc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',cc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',fc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',pc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',gc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',mc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',hc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',yc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',xc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',bc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Yg=globalThis.crypto.randomUUID;function ht(e,t){if(Array.isArray(e))return e.map(n=>ht(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=ht(e);let r=i.record_type(e);return e=mt(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=mt(e,"MoveUpAction","Move Up",t),e=mt(e,"MoveDownAction","Move Down",t),e=mt(e,"DeleteAction","Delete",t)),e}function mt(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=Vc(e,s),e}function Vc(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var rn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function yt(e){let t=[];return t=t.concat(rn?.[e]?.properties||[]),rn?.[e]?.parent&&(t=t.concat(yt(rn[e].parent))),t}function xt(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:S.thing("Object thing"),instrument:S.thing("Instrument thing"),agent:S.person("Agent thing"),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let l=e+"_"+String(o);s.hasPart.push(xt(l,t-1))}return s}function nn(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function bt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:wc(),image:S.image(),hasPart:[]};if(r==0&&(o.author=S.person(),o.datePublished=new Date().toISOString()),r<t)for(let l=0;l<3;l++){let u=e+"_"+String(l);o.hasPart.push(bt(u,t,r+1))}return o}function wc(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Je(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var cm=globalThis.crypto.randomUUID;function sn(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let o=0;o<e;o++){let l=Ac(S.thing(o),o);s&&(s.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(l),s=l}return n}function Ac(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function on(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:S.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:S.organization("org_a")}}function an(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:S.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function ln(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:S.address()}}function un(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function dn(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function cn(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let l=S.product(`variant ${s} ${o}`);l.size=s,l.color=o,l.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(l)}return n}function Vt(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:Je(e),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let l=e+"_"+String(o);s.hasPart.push(Vt(l,t-1))}return s}function fn(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:S.person(0),recipient:[S.person(10),S.person(11),S.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function pn(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<t;o++){let l=e+"_"+String(o),u=S.message(l);u.sender=o%2==0?u.recipient[0]:u.recipient[1],u.recipient=o%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let c=new Date;c.setDate(c.getDate()-t+o),u.dateSent=c,u.dateReceived=c,s.hasPart.push(u)}return s}var S={action:xt,article:bt,address:nn,conversation:pn,image:Je,itemList:sn,message:fn,offer:on,organization:an,person:ln,postalAddress:un,product:dn,productGroup:cn,thing:Vt,Action:xt,Article:bt,Address:nn,Conversation:pn,Image:Je,ItemList:sn,Message:fn,Offer:on,Organization:an,Person:ln,PostalAddress:un,Product:dn,ProductGroup:cn,Thing:Vt};var mn={};y(mn,{jsonToMarkdown:()=>gn});function gn(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,l)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${l+1}:**
`,n+=gn(o,t+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,l])=>{l!==null&&typeof l=="object"?(n+=`${s}* **${o}:**
`,n+=gn(l,t+1)):n+=`${s}* **${o}:** ${l}
`}):n+=`${s}* ${r}
`;return n}var yn={};y(yn,{jsonToYaml:()=>ze,yamlToJson:()=>$c});function ze(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let l=ze(o,t+2).trimStart();n+=l}else n+=ze(o,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(o=>{let l=e[o];n+=`${r}${o}:`,typeof l=="object"&&l!==null?n+=`
`+ze(l,t+2):n+=" "+ze(l,0)}),n)}function $c(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),l=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let u=n[n.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],n.push({indent:o,value:u.value[u.lastKey],type:"array"}));let c=n[n.length-1],d=l.substring(1).trim();if(d.includes(":")){let[p,...b]=d.split(":"),V=p.trim(),$=b.join(":").trim(),E=hn($),re={[V]:E};c.value.push(re),n.push({indent:o+2,value:re,type:"object",lastKey:V})}else c.value.push(hn(d))}else if(l.includes(":")){let[c,...d]=l.split(":"),p=c.trim(),b=d.join(":").trim();u.lastKey=p,b===""?(u.value[p]={},n.push({indent:o,value:u.value[p],type:"object",lastKey:p})):u.value[p]=hn(b)}}return r}function hn(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var Gs={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Ks="DesignToken",Ys={css:{get:Ic},get:xn,set:Xs,getValue:kc,setValue:_c,sampleRecord:Zs};function xn(e){if(!e)return;let t=i.getAdditionalProperty(e,Ks);return t=t||{},t}function Xs(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,Ks,t),e}function kc(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=xn(e),n=Te(r,t);return Te(n,"$value")}function _c(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=xn(),s=Zs(),o=Te(s,t);return o.$value=r,n=Qe(n,t,o),e=Xs(e,n),e}function Ic(e,t="dt"){let r=[];function n(l,u=[]){for(let[c,d]of Object.entries(l)){if(d==null)continue;let p=[...u,c];if(typeof d=="object"&&"value"in d){let b=`--${p.map($=>$.toLowerCase()).join("-")}`,V=s(d.value);r.push(`  ${b}: ${V};`)}else if(typeof d=="object"&&!Array.isArray(d))n(d,p);else{let b=`--${p.map($=>$.toLowerCase()).join("-")}`,V=s(d);r.push(`  ${b}: ${V};`)}}}function s(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function Zs(){return Gs}var g={markdown:mn,yaml:yn,designToken:Ys};var At=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return bn(this.record)}toJSON(){return this.record}toMD(){return g.markdown.jsonToMarkdown(this.record)}toYaml(){return g.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=xe(wt(this._record),this.baseUrl)),i.simplify(wt(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(wt(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=Q(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(wt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return yt(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(l){console.log("Callback failed: ",o,String(l),s)}}static toString(t){return bn(t)}static toMD(t){return g.markdown.jsonToMarkdown(t)}static toYaml(t){return g.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new _[r](g.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return Q(t)}static example(t=0,r=5){let n=this.name;return new _[n](S[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return yt(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,Q(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,Q(n))}static addValue(t,r,n){return i.addValue(t,r,Q(n))}static addValues(t,r,n){return i.addValues(t,r,Q(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return ht(t)}static addAdditionalProperty(t,r,n){return Tc(t,"additionalProperty",r,n)}};function wt(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=t(n?.[o]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function Q(e){if(Array.isArray(e))return e.map(t=>Q(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=_?.[t]||_.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=Q(e._record?.[t]);return e}function bn(e){if(Array.isArray(e)){let o=e.map(l=>bn(l));return o=o.join(`
`),o}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Tc(e,t,r,n){let s=new _.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var w=class extends At{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=f.url.clean(value),t}set cleanUrl(t){url=f.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=xe(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var oe=class extends w{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(this.record,t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,o,l){return search(t,r,n,s,o,l)}};var j=class extends w{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return Qs(this.record,t)}static test(t,r){return Qs(t,r)}};function Qs(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",o=new RegExp(t.valuePattern,"gi");if(e.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var qe=class extends w{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=no(this.record,t,r)}addMaxValue(t,r){this.record=io(this.record,t,r)}addMinLength(t,r){this.record=so(this.record,t,r)}addMaxLength(t,r){this.record=oo(this.record,t,r)}addDefaultValue(t,r){this.record=ao(this.record,t,r)}addValueRequired(t,r){this.record=lo(this.record,t,r)}addValuePattern(t,r){this.record=eo(this.record,t,r)}addMultipleValues(t,r){this.record=to(this.record,t,r)}addStepValue(t,r){this.record=ro(this.record,t,r)}testConditions(){return Vn(this.record)}getInputconditions(){return U(this.record)}addInputCondition(t,r){return this.addValues(t+"-input",r)}getOutputConditions(){return Nc(this.record)}addOutputCondition(t,r){return this.addValues(t+"-output",r)}test(){return Vn(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return no(t,r,n)}static addMaxValue(t,r,n){return io(t,r,n)}static addMinLength(t,r,n){return so(t,r,n)}static addMaxLength(t,r,n){return oo(t,r,n)}static addDefaultValue(t,r,n){return ao(t,r,n)}static addValueRequired(t,r,n){return lo(t,r,n)}static addValuePattern(t,r,n){return eo(t,r,n)}static addMultipleValues(t,r,n){return to(t,r,n)}static addStepValue(t,r,n){return ro(t,r,n)}static test(t){return Vn(t)}};function U(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function X(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function Nc(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function eo(e,t,r){let n=U(e,t)||new j;return n.valuePattern=r,e=X(e,t,n),e}function to(e,t,r){let n=U(e,t)||new j;return n.multipleValues=r,e=X(e,t,n),e}function ro(e,t,r){let n=U(e,t)||new j;return n.stepValue=r,e=X(e,t,n),e}function no(e,t,r){let n=U(e,t)||new j;return n.minValue=r,e=X(e,t,n),e}function io(e,t,r){let n=U(e,t)||new j;return n.maxValue=r,e=X(n.record,t,r),e}function so(e,t,r){let n=U(e,t)||new j;return n.valueMinLength=r,e=X(e,t,n),e}function oo(e,t,r){let n=U(e,t)||new j;return n.valueMaxLength=r,e=X(e,t,n),e}function ao(e,t,r){let n=U(e,t)||new j;return n.defaultValue=r,e=X(e,t,n),e}function lo(e,t,r){let n=U(e,t)||new j;return n.valueRequired=r,e=X(e,t,n),e}function Vn(e){let t=U(e);for(let r of t)if(j.test(r,e?.[r.propertyID])==!1)return!1;return!0}var J=class extends qe{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(t){return this.setValues("targetCollection",t)}get toLocation(){return this.getValues("toLocation")}set toLocation(t){return this.setValues("toLocation",t)}},$t=class extends J{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},St=class extends J{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},kt=class extends J{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(t){return this.setValues("replacer",t)}get replacee(){return this.getValues("replacee")}set replacee(t){return this.setValues("replacee",t)}},_t=class extends J{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},It=class extends J{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Tt=class extends J{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var Nt=class extends w{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return Pc(this.record)}get(t){return g.designToken.getValue(this.record,t)}set(t,r){return g.designToken.setValue(this.record,t,r)}get token(){return g.designToken.get(this.record)}set token(t){this.record=g.designToken.set(this.record,t)}get primary(){return g.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=g.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return g.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=g.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return g.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=g.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return g.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=g.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return g.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=g.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return g.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=g.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return g.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=g.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new Pt(this,"typography.heading-lg")}get body(){return new Pt(this,"typography.body-md")}get spacingSm(){return g.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return g.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return g.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return g.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return g.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return g.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return g.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return g.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return g.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return g.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new wn(this,"shadow.elevation-md")}sample(){return g.designToken.getSampleRecord()}},Pt=class{constructor(t,r){this.base=t,this.basePath=A(r)}get fontFamily(){return g.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontFamily"),t)}get fontWeight(){return g.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontWeight"),t)}get fontSize(){return g.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontSize"),t)}get lineHeight(){return g.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"lineHeight"),t)}get letterSpacing(){return g.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"letterSpacing"),t)}get family(){return g.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontFamily"),t)}get weight(){return g.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontWeight"),t)}get size(){return g.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontSize"),t)}get height(){return g.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"lineHeight"),t)}get spacing(){return g.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"letterSpacing"),t)}},wn=class{constructor(t,r){this.base=t,this.basePath=A(r)}get color(){return g.designToken.getValue(record,A(this.basePath,"color"))}set color(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"color"),t)}get offsetX(){return g.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"offsetX"),t)}get offsetY(){return g.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"offsetY"),t)}get blur(){return g.designToken.getValue(record,A(this.basePath,"blur"))}set blur(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"blur"),t)}get spread(){return g.designToken.getValue(record,A(this.basePath,"spread"))}set spread(t){this.base.record=g.designToken.setValue(record,A(this.basePath,"spread"),t)}};function A(e,t,r){let n=[e,t,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Pc(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var B=class extends w{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var H=class extends B{constructor(t,r,n,s,o,l){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=l)}toString(){return $n(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",Se(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",Se(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",Se(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",Se(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",Se(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return co(this.record)}set gmail(t){this.record=uo(t)}get outlook(){return po(this.record)}set outlook(t){this.record=fo(t)}static toString(t){return $n(t)}static fromGmail(t){return uo(t)}static toGmail(t){return co(t)}static fromOutlook(t){return fo(t)}static toOutlook(t){return po(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),t}};function $n(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(d=>$n(d)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=An(r,20);let s=i.getValues(e,"recipient").map(d=>d?.email||d?.name||"");s=An(s,25);let o=i.getValue(e,"headline")||"";o.length>20&&(o=An(o,30));let l=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${r} | ${s} | ${o} | ${u}`}function An(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function Se(e){return e?Array.isArray(e)?e.map(t=>Se(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function uo(e){let t=new H;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function co(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function fo(e){let t=new H;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function po(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var vt=class extends B{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Cc(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=H.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return go(this.record)}add(t,r,n,s,o,l){this.record=Ct(this.record,t,r,n,s,o,l)}addMessage(t,r,n,s,o,l){this.record=Ct(this.record,t,r,n,s,o,l)}newMessage(t,r,n,s,o,l){let u=new H(t,r,n,s,o,l);this.messages=this.messages.push(u)}static getParticipants(t){return go(t)}static newMessage(t,r,n,s,o,l,u){return Ct(t,r,n,s,o,l,u)}static addMessage(t,r,n,s,o,l,u){return Ct(t,r,n,s,o,l,u)}static getMessages(t){return Ge(t)}static getFirstMessage(t){let r=Ge(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=Ge(t);return r.length>0?r[r.length-1]:void 0}};function Cc(e){let t=Ge(e),r=`Conversation with ${t.length} messages:
`;return r+=H.toString(t),r}function Ct(e,t,r,n,s,o,l){let u=new H(t,r,n,s,o,l);return e=i.addValues(e,"hasPart",u),e}function Ge(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=vc(t),t}function vc(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function go(e){let t=Ge(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(l=>{r.add(l)})}),Array.from(r)}var ke=class extends w{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Rc(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Rc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var Rt=class extends w{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return jc(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new ke(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function jc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var ae=class extends w{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return mo(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=w.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=w.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=w.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=w.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=w.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=w.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=w.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=w.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=w.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=w.setValues(this._record,"validThrough",t)}};function mo(e){if(Array.isArray(e))return e.map(s=>mo(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var le=class extends B{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return Sn(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new ae(t,r))}static addOffer(t,r,n="CAD"){return Dc(t,r,n)}static toString(t){return Sn(t)}};function Sn(e){if(Array.isArray(e))return e.map(r=>Sn(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function Dc(e,t,r){let n=new ae(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var jt=class extends le{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return kn(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=Oc(this.record,t)}generateVariants(t){this.record=Bc(this.record,t)}static toString(t){return kn(t)}};function kn(e){if(Array.isArray(e))return e.map(n=>kn(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+le.toString(n)+`
`;return t}function Oc(e,t){return e=i.addValues(e,"hasVariant",t),e}function Bc(e,t){if(Array.isArray(t)){let o={};for(let l of t)o[l.propertyID]=o?.[l.propertyID]||[],o[l.propertyID].push(o.value);t=o}let r=Uc(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=w.getProperties("Product");for(let o of r){let l=JSON.parse(JSON.stringify(e));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":e?.["@id"]};let u=[];for(let d of Object.keys(o))u.push(o?.[d]),s.includes(d)?l=i.setValue(l,d,o[d]):l=w.addAdditionalProperty(l,d,o[d]);let c=w.getValue(l,"name")+" "+u.join(" ");l=w.setValue(l,"name",c),e=w.addValue(e,"hasVariant",l)}return e}function Uc(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],o=[];for(let l of r)for(let u of s)o.push({...l,[n]:u});return o},[{}])}var Dt=class extends w{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return ho(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function ho(e){if(Array.isArray(e))return e.map(r=>ho(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var ue=class extends B{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new oe(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=Ke(this.record,"WPHeader"),z(this.record,"WPHeader")}set WPHeader(t){this.record=q(this.record,"WPHeader",t)}get WPFooter(){return this.record=Ke(this.record,"WPFooter"),z(this.record,"WPFooter")}set WPFooter(t){this.record=q(this.record,"WPFooter",t)}get WPSideBar(){return this.record=Ke(this.record,"WPSideBar"),z(this.record,"WPSideBar")}set WPSideBar(t){this.record=q(this.record,"WPSideBar",t)}get Table(){return z(this.record,"Table")}set Table(t){this.record=q(this.record,"Table",t)}addHeaderLink(t,r){this.record=yo(this.record,t,r)}addFooterLink(t,r){this.record=xo(this.record,t,r)}domain(){return bo(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=Hc(t,this.url)}static getWPHeader(t){return z(t,"WPHeader")}static getWPFooter(t){return z(t,"WPFooter")}static getWPSideBar(t){return z(t,"WPSideBar")}static getTable(t){return z(t,"Table")}static setWPHeader(t,r){return q(t,"WPHeader",r)}static setWPFooter(t,r){return q(t,"WPFooter",r)}static setWPSideBar(t,r){return q(t,"WPSideBar",r)}static setTable(t,r){return q(t,"Table",r)}static addHeaderLink(t,r,n){return yo(t,r,n)}static addFooterLink(t,r,n){return xo(t,r,n)}static getDomain(t){return bo(i.getValue(t,"url")||t)}};function Ke(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function z(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function q(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function yo(e,t,r){e=Ke(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=z(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=q(e,"WPHeader",s),e}function xo(e,t,r){e=Ke(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=z(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=q(e,"WPFooter",s),e}function bo(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function Hc(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(Mc(e)=="Product"){let u=n.filter(V=>i.record_type(V)=="Product")[0];s.push({replacee:i.record_id(u),replacer:t+"#product"}),u=i.setValue(u,"url",t);let c=i.getValues(u,"brand");c=c.map(V=>V?.["@type"]?{"@type":"brand",name:V}:V),u=i.setValues(u,"brand",c);let d=n.filter(V=>i.record_type(V)=="Offer");d=d.map(V=>i.setValues(V,"itemOffered",i.ref(u))),u=i.setValues(u,"offers",d);let p=n.filter(V=>i.record_type(V)=="Review");d=d.map(V=>i.setValues(V,"itemReviewed",i.ref(u))),u=i.setValues(u,"review",p);let b=n.filter(V=>i.record_type(V)=="AggregateRating");return b=b.map(V=>i.setValues(V,"itemReviewed",i.ref(u))),u=i.setValues(u,"aggregateRating",b),u=i.replaceIds(u,s),u}return e}function Mc(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var Ot=class extends ue{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new ue(this);return n.url=t,n.name=r,n}domain(){return Vo(this.url)}static getDomain(t){return Vo(i.getValue(t,"url")||t)}};function Vo(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var Bt=class extends w{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var _={get:w.toThing,toThing:w.toThing,Action:qe,AddAction:$t,AppendAction:It,BrandDesign:Nt,Conversation:vt,CreativeWork:B,DataFeed:Rt,DataFeedItem:ke,DeleteAction:St,InsertAction:_t,ItemList:oe,Message:H,Offer:ae,Product:le,ProductGroup:jt,PropertyValue:Dt,Thing:w,PrependAction:Tt,ReplaceAction:kt,UpdateAction:J,WebAPI:Bt,WebPage:ue,WebSite:Ot,format:tn,toThing:Lc},Ec=_;function Lc(e){let t=i.record_type(e);return _?.[t]?new _[t](e):new _.Thing(e)}var Tn={};y(Tn,{Button:()=>Wc,DropdownMenu:()=>wo,MenuItem:()=>Jc,escapeHtml:()=>ee});function ee(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Wc({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[t]||o.default} ${l[r]||l.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function In(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?In(n,s):`<input type="hidden" name="${ee(s)}" value="${ee(String(n))}">`}).join("")}function wo({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},c={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},p=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),b=e?`<span class="mr-2">${ee(e)}</span>${p}`:`${p}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let V=t.map($=>{if($.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let E=In($.object),re=$.disabled?"disabled":"";return`
        <form method="POST" action="${ee($.url||"")}" class="m-0 p-0">
          ${E}
          <button
            type="submit"
            ${re}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ee($.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${l}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${c[n]||c.ghost} ${d[s]||d.icon}"
      >
        ${b}
      </summary>

      <div class="absolute ${u[r]||u.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${V}
      </div>
    </details>
  `.trim()}function Jc(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=In(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ee(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ee(h.getName(item)||"")}
          </button>
        </form>`}var Z={};y(Z,{components:()=>m});var Nn={};y(Nn,{Accordion:()=>zc});function zc({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var Pn={};y(Pn,{Alert:()=>qc});function qc({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var Cn={};y(Cn,{Article:()=>Gc,ArticleBody:()=>ef,ArticleCard:()=>rf,ArticleCardBody:()=>sf,ArticleCardFooter:()=>of,ArticleCardHeader:()=>nf,ArticleCardMedia:()=>lf,ArticleCardTitle:()=>af,ArticleCategory:()=>Yc,ArticleFooter:()=>tf,ArticleHeader:()=>Kc,ArticleMedia:()=>Qc,ArticleSubTitle:()=>Zc,ArticleTitle:()=>Xc});function Gc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${t||""}"
    >
    
        ${e||""}
    
    </article>
    
    `}function Kc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <header 
        class="${t||""}"
    >
    
        ${e||""}
    
    </header>
    
    `}function Yc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${t||""}"
     >
        ${e||""}
     
     </p>

    `}function Xc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${t||""}"
        >
            ${e||""}
        </h1>

    `}function Zc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${t||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${e||""}</span>

        </div>

    `}function Qc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${t||""}"
        >

            ${e||""}
        
        </div>

    `}function ef(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${t||""}"
        >
            ${e||""}
        </div>
    `}function tf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="${t||""}"
        >
            
            ${e||""}

        </div>

    
    `}function rf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}

    </article>
    
    `}function nf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}
            
    </article>
    
    `}function sf(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <div class="p-5 ${t||""}">


            ${e||""}
            
    </div>
    
    `}function of(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${t||""}">
          ${e||""}
    </div>
    
    `}function af(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${t||""}">


            ${e||""}
            
    </h3>
    
    `}function lf(e,t){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${t||""}"
    >


            ${e||""}
            
    </div>
    
    `}var vn={};y(vn,{Badge:()=>uf,Badges:()=>df});function uf(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function df(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var Rn={};y(Rn,{Breadcrumb:()=>cf,BreadcrumbEllipsis:()=>pf,BreadcrumbItem:()=>So,BreadcrumbLink:()=>ko,BreadcrumbList:()=>$o,BreadcrumbMain:()=>Ao,BreadcrumbPage:()=>ff,BreadcrumbSeparator:()=>_o});function cf({urls:e,titles:t,links:r}){let n=new _.ItemList(r);if(e)for(let l=0;l<e.length;l++){let u=t?.[l]||e[l].split("/")?.[e[l].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[l],name:u})}let s=n.items;return console.log("items",s),Ao({children:$o({children:s.map(l=>So({children:ko({href:l?.url,children:l?.name})})).join(_o())})})}function Ao({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function $o({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function So({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function ko({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function ff({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function _o({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function pf({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var jn={};y(jn,{Button:()=>gf});function gf({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.primary} ${l[r]||l.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var Dn={};y(Dn,{Card:()=>mf,CardBody:()=>xf,CardContent:()=>Af,CardDescription:()=>wf,CardFooter:()=>bf,CardHeader:()=>hf,CardMain:()=>yf,CardMedia:()=>$f,CardTitle:()=>Vf});function mf(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function hf(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function yf(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function xf(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function bf(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function Vf(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function wf(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function Af(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function $f(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var On={};y(On,{Dialog:()=>Sf});function Sf({id:e,title:t,description:r="",content:n,footer:s="",className:o=""}){return`
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
    `.trim()}var Bn={};y(Bn,{Footer:()=>kf});function kf({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
      <div class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground tracking-tight">${o.title}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          ${o.links.map(l=>`
            <li>
              <a href="${l.url||"#"}" class="transition-colors hover:text-foreground">
                ${l.name}
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
    `.trim()}var Un={};y(Un,{Header:()=>_f});function _f({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((o,l)=>{if(o.dropdown&&o.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
          <div class="relative inline-block text-left">
            <button 
              onclick="toggleDropdown('${u}')" 
              class="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer py-2 px-3 rounded-md hover:bg-accent"
            >
              <span>${o.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              id="${u}" 
              class="hidden absolute left-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-80"
            >
              ${o.dropdown.map(c=>`
                <a href="${c.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${c.name}
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
    `.trim()}var Hn={};y(Hn,{H1:()=>If,H2:()=>Tf,H3:()=>Nf,H4:()=>Pf,H5:()=>Cf,H6:()=>vf,Heading:()=>de,P:()=>Rf,Text:()=>jf});function If(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function Tf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function Nf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function Pf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function Cf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function vf(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function de({title:e,level:t,options:r,record_id:n,propertyID:s,className:o}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${e}</h${t}>
    
    `}function Rf(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}function jf(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}var Mn={};y(Mn,{Input:()=>M,InputCheckbox:()=>Df,InputDate:()=>Of,InputDateTime:()=>Uf,InputEmail:()=>Hf,InputNumber:()=>Bf,InputPassword:()=>Mf,InputTel:()=>Ef,InputText:()=>Lf,InputTime:()=>Ff,InputUrl:()=>Wf});function M({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:l=""}){let u=s?`id="${s}"`:"";return`
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
          ${l||""}
        />
      </div>
    `.trim()}function Df({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function Of({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function Bf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function Uf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function Hf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function Mf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function Ef({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function Lf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function Ff({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function Wf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return M({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var En={};y(En,{Pagination:()=>Jf,PaginationComponent:()=>To,PaginationContent:()=>No,PaginationEllipsis:()=>vo,PaginationItem:()=>Ye,PaginationLink:()=>Ut,PaginationNext:()=>Co,PaginationPrevious:()=>Po,buildPaginationUrl:()=>Io});function Io(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function To({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function No({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function Ye({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function Ut({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",c=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${u} ${l[r]||l.icon} ${c} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Po({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Ut({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Co({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Ut({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function vo({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Jf({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:l=""}={}){let u=Math.ceil(t/r)||1,c=Math.floor(n/r)+1,d=L=>{let F=(L-1)*r;return Io(e,r,F)},p=(L,F)=>{let ie=F-L+1;return Array.from({length:ie},(Xe,Ze)=>L+Ze)},b=s+5,V=[];if(b>=u)V=p(1,u);else{let L=Math.max(c-s,1),F=Math.min(c+s,u),ie=L>2,Xe=F<u-2,Ze=1,sa=u;if(!ie&&Xe){let Ie=3+2*s;V=[...p(1,Ie),"ellipsis",u]}else if(ie&&!Xe){let Ie=3+2*s,di=p(u-Ie+1,u);V=[Ze,"ellipsis",...di]}else if(ie&&Xe){let Ie=p(L,F);V=[Ze,"ellipsis",...Ie,"ellipsis",sa]}}let $=[],E=c>1,re=E?d(c-1):"#";$.push(Ye({children:Po({href:re,disabled:!E})})),V.forEach(L=>{if(L==="ellipsis")$.push(Ye({children:vo()}));else{let F=Number(L),ie=F===c;$.push(Ye({children:Ut({href:d(F),isActive:ie,children:String(F)})}))}});let ne=c<u,Lt=ne?d(c+1):"#";$.push(Ye({children:Co({href:Lt,disabled:!ne})}));let Ft=To({className:o,attrs:l,children:No({children:$.join("")})});return Ft=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ft}
    </div>`,Ft}var Ln={};y(Ln,{Section:()=>zf,SectionHeader:()=>qf});function zf({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},c=l[t]||l.default,d=u[r]!==void 0?u[r]:u.default,p=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${c} ${n}" ${o}>
      ${p}
    </section>
  `.trim()}function qf({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var Fn={};y(Fn,{Table:()=>Kf,TableBody:()=>Do,TableCell:()=>G,TableCellCenter:()=>ep,TableCellLeft:()=>Qf,TableCellLink:()=>rp,TableCellNumber:()=>tp,TableCellRight:()=>Bo,TableCellText:()=>np,TableColumnHeader:()=>jo,TableColumnHeaderCenter:()=>Zf,TableColumnHeaderLeft:()=>Yf,TableColumnHeaderRight:()=>Xf,TableFooter:()=>Uo,TableHeader:()=>Ro,TableRow:()=>Oo,getTable:()=>Gf});function Gf({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Ro(e.map(n=>jo(n)))}
      
        ${Do(t.map(n=>Oo(n.map(s=>G(s)))))}
        
        ${Uo()}

      </table>

    </div>
  
  
  `}function Kf(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function Ro(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function jo(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Yf(e,t){return G(e,t)}function Xf(e,t){return t=t+" text-right ",G(e,t)}function Zf(e,t){return t=t+" text-center ",G(e,t)}function Do(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Oo(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
    <tr 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${e}</tr>
  `}function G(e,t,r,n){return e||(e=""),Array.isArray(e)&&(e=e.join(" ")),`
    <td 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${e}</td>
  `}function Qf(e,t,r,n){return G(e,t,r,n)}function Bo(e,t,r,n){return n=n+" text-right ",G(e,t,r,n)}function ep(e,t,r,n){return n=n+" text-center ",G(e,t,r,n)}function tp(e,t,r,n,s,o){return e=i.toNumber(e),e=f.number.format(e,t),Bo(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function rp(e,t,r,n,s,o){return G(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function np(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return G(s)}function Uo(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var Wn={};y(Wn,{Webpage:()=>ip});function ip({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:o}){return`
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
  `.trim()}var Jn={};y(Jn,{CardGrid:()=>sp});function sp({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var zn={};y(zn,{JsonEditor:()=>ap});function Ho({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.default} ${l[r]||l.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function op({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
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
  `.trim()}function ap({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let l=e.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof r=="string"?r:JSON.stringify(r,null,2),c=JSON.stringify(n,null,2),d=`
    <script>
      (function() {
        var safeId = "${l}";
        
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
  `.trim(),p=`
    <form id="${l}_form" onsubmit="window.${l}_submit(event)" class="space-y-4">
      <div>
        <label for="${l}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${l}_endpoint"
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
            id="${l}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${c}</textarea>
        </div>
      </details>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="${l}_textarea" class="block text-sm font-medium text-foreground">
            JSON Payload
          </label>
          <div class="flex items-center space-x-2">
            <span id="${l}_status" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              Valid JSON
            </span>
            ${Ho({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
          </div>
        </div>
        <textarea 
          id="${l}_textarea"
          rows="10"
          oninput="window.${l}_validate()"
          class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >${u}</textarea>
      </div>

      <div class="flex justify-end space-x-2">
        ${Ho({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${l}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${l}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${l}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${d}
  `.trim();return op({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:p,className:s,attrs:o})}var qn={};y(qn,{Modal:()=>lp,ModalBody:()=>dp,ModalTrigger:()=>up});function lp(e,t,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${e||""}
    </div>
    
    
    `}function up(e,t,r){return`
    
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
    
    `}function dp(e,t,r){return`
    
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
    
    
    `}var Gn={};y(Gn,{DropdownMenu:()=>fp,DropdownMenuIcon:()=>pp,Menu:()=>cp,MenuItemLink:()=>gp,MenuItemPost:()=>mp,MenuItemSeparator:()=>hp});function cp(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function fp(e,t,r){return`
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

    `}function pp(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function gp(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function mp(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function hp(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Kn={};y(Kn,{Kanban:()=>yp,KanbanBody:()=>bp,KanbanCard:()=>_p,KanbanCardBody:()=>Tp,KanbanCardFooter:()=>Np,KanbanCardHeader:()=>Ip,KanbanColumn:()=>Ap,KanbanColumnBody:()=>Sp,KanbanColumnFooter:()=>kp,KanbanColumnHeader:()=>$p,KanbanFooter:()=>Vp,KanbanHeader:()=>xp,KanbanTitle:()=>wp});function yp(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function xp(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function bp(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function Vp(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function wp(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function Ap(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function $p(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Sp(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function kp(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function _p(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function Ip(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function Tp(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function Np(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var Yn={};y(Yn,{StarRating:()=>Pp,StarRatingEmpty:()=>Rp,StarRatingFull:()=>Cp,StarRatingHalf:()=>vp});function Pp(e,t){return`
    
    <div class="flex items-center space-x-1 ${t||""}">
        ${e||""}
    </div>
    
    `}function Cp(e,t){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function vp(e,t){return`
    
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


    `}function Rp(e,t){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var m={...Nn,...Pn,...Cn,...vn,...Rn,...jn,...Dn,...Jn,...On,...Tn,...Bn,...Un,...Kn,...Gn,...qn,...Mn,...zn,...En,...Ln,...Yn,...Fn,...Hn,...Wn};var ti={};y(ti,{Card:()=>Ep,Cards:()=>Lp});var ei={};y(ei,{Media:()=>ce,MediaImage:()=>Fo,MediaVideo:()=>Lo});var Mt={};y(Mt,{fixedLength:()=>Ht,textCenter:()=>Xn});function Ht(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let o=e.length;o==0&&(e=""),o==1&&(e=e[0]),o>1&&(e=`(${e.length})`)}let s=f.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=f.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=f.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let o="",l=Math.round(t/3),u=t-l-3;o+=e.slice(0,l),o+="...",o+=e.slice(-u),e=o}return t!=null&&(e=e.padEnd(t," ")),e}function Xn(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var Qn={};y(Qn,{toTextRecord:()=>jp,toTextTable:()=>Bp});function jp(e,t=80){let r=Dp(e,t),n=Op(e),s="";s+=Mo(r),s+=`
`,n.length>0?s+=n.map(o=>Eo(o,r)).join(""):s+=`(no records)
`}function Dp(e,t=80){let n=Zn(e).map(l=>(l||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function Op(e){let t=Zn(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:f.getValues(e,n)};r.push(s)}return r}function Bp(e,t,r=!0,n=80){t=Up(e,t,r),e=Hp(e,t,r);let s="";if(s+=Mo(t),s+=`
`,e.length>0){let o=e.map(l=>Eo(l,t));s+=o.join("")}else s+=Xn("(no records to display.)",n);return s}function Up(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=Zn(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function Hp(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function Mo(e){let t="",r=[];for(let s of e){let o=`${Ht(s.title,s.width,s.rounding)}`;r.push(o)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return t+=n.join(" "),t+=`
`,t}function Eo(e,t){let r="",n=[];for(let s of t){let o=i.getValues(e,s.propertyID),l=`${Ht(o,s.width,s.rounding)}`;n.push(l)}return r+=n.join(" "),r+=`
`,r}function Zn(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=Mp(t),t}function Mp(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var xx={...Mt,...Qn};function ce(e,t){if(!i.getValue(e,"contentUrl"))return"";let n="";return i.record_type(e)=="VideoObject"?Lo(e,t):Fo(e,t)}function Lo(e,t){let r=i.getValue(e,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Fo(e,t){let r=i.getValue(e,"contentUrl");return r?m.Modal(m.ImageModal(r)):""}function te({website:e,webpage:t,title:r,headContent:n,content:s,options:o}){t=new _.WebPage(t),e=new _.WebSite(e);let l={};l.title=r,l.title=l.title||i.getValue(t,"title"),l.title=l.title||i.getValue(t,"name"),l.title=l.title||i.getValue(e,"title"),l.title=l.title||i.getValue(e,"name"),l.headContent=n,l.breadcrumb=m.Breadcrumb({links:i.getValue(t,"breadcrumb")});let u=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),c=t.WPHeader.hasPart||[],d=t.WPFooter.hasPart||[];return c=Array.isArray(c)?c:[c],d=Array.isArray(d)?d:[d],l.header=m.Header({brand:u,navItems:c}),l.footer=m.Footer({brand:u,navItems:d}),l.content=s,m.Webpage(l)}function Wo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:l,properties:u,headers:c,offset:d,limit:p,options:b}){return o=o??"",o+=C.Cards({url:n,records:l,offset:d,limit:p,nbOfColumns:3,options:b}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:b})}function Ep(e,t,r,n=!0){let s=_.format.getTitle1(e),o=_.format.getContent(e),l=i.getRecordUrl(e,t),u=n==!0?_.format.imageUrl(e):void 0;return m.Card({title:s,description:o,url:l,media:u,className:r})}function Lp({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:l,includePagination:u,options:c,layoutClasses:d,className:p,attrs:b}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let V=new _.ItemList(t);V=V.record,V.numberOfItems=V?.numberOfItems??V.itemListElement.length,V=Et({record:V,options:c}),V.itemListElement=V.itemListElement.filter(ne=>i.getValue(ne,"position")>=r&&i.getValue(ne,"position")<r+n);let $="";for(let ne of i.getValues(V,"itemListElement")){let Lt=i.getValue(ne,"item");$+=Fp({url:e,item:Lt,options:c})}$=m.CardGrid({content:$,nbOfColumns:l});let E=m.Pagination({url:e,limit:n,offset:r,total:V.numberOfItems,options:c});return`

        <div class="${d} ${p}" ${b}>
        <div class="flex-1">
            ${$}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${E}
        </div>
        </div>

    `}function Fp({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),o=i.getValues(t,"keywords");o=o.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let l=m.Badges({text:o,variant:"secondary"}),u={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:l,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:ce({record:t,options:r})};return m.Card(u)}var ri={};y(ri,{Input:()=>Jp});function Jp({record:e,propertyID:t,value:r}){return m.Input({value:r})}var ii={};y(ii,{Table:()=>zp,TableBody:()=>zo,TableCell:()=>Go,TableHeader:()=>Jo,TableRow:()=>qo,getDataType:()=>Ko,getHeadersFromProperties:()=>ni,getPropertiesFromRecords:()=>_e});function zp(e,t,r,n,s,o){let l=e;r=r||_e(l),n=n||ni(r);let u=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),u=["thumbnail"].concat(u)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),u=["position"].concat(u)),m.Table(Jo(l,r,n,u)+zo(l,r,t,u))}function Jo(e,t,r,n){return t=t||_e(e),r=r||ni(t),n=n||[],t=t||_e(e),m.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return m.TableColumnHeaderRight(s);default:return m.TableColumnHeader(s)}}).join(" "))}function zo(e,t,r,n){t=t||_e(e),n=n||[];let s=i.getValues(new _.ItemList(e),"itemListElement");return m.TableBody(s.map(o=>qo(o,t,r,n)).join(" "))}function qo(e,t,r,n){return t=t||_e(e),n=n||[],m.TableRow(t.map((l,u)=>Go(e,i.getValues(e,l),l,r,n,u)).join(" "),i.record_id(e),void 0,"kr-listitem")}function Go(e,t,r,n,s,o){let l=t,u=r,c=e;if(l=i.isArray(l)&&l.length==0?"":l,l=i.isArray(l)&&l.length==1?l[0]:l,(u||"").endsWith("@type")){let d=f.url.getUrl(n||"","/"+l);return m.TableCellLink(d,l)}if((u||"").endsWith("@id")){let d=i.getRecordUrl(c,n);return m.TableCellLink(d,l)}switch(s?.[o]||Ko(l)){case"array":return m.TableCellCenter(`(${l.length})`);case"text":return m.TableCellText(l);case"number":return m.TableCellNumber(l,2);case"link":return m.TableCellLink(l,l);case"thumbnail":return m.TableCell(ce({record:l}));case"position":return m.TableCellNumber(l,0);case"object":return m.TableCellLink(i.getRecordUrl(l,n),i.record_id(l));default:return m.TableCellText(l)}}function _e(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function ni(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function Ko(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?f.isNumber(e)?"number":f.isUrl(e)?"link":f.isDate(e)?"date":f.isArray(e)?"array":f.isObject(e)?"object":"text":"text"}var si={};y(si,{Record:()=>qp});function qp(e,t,r,n="",s="",o=!1,l=0,u={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),u.baseUrl=t||u?.baseUrl;let c={rows:[]},d=Yo({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:u});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${ce({record:e,options:u})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${m.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function Yo({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){t=t||Object.keys(e);let u=t.filter(b=>b.startsWith("@")),c=t.filter(b=>!b.startsWith("@"));t=u.sort().concat(c.sort());let d={rows:[]};return m.Table(m.TableHeader(m.TableRow(m.TableCellRight("")+m.TableCellRight(C.DropdownMenu(i.getPotentialActions(e)))))+m.TableBody(t.map(b=>m.TableRow([m.TableCell(b+":"),m.TableCell(Xo({record:e,propertyID:b,className:r,attrs:n,expandAll:s,depth:o+1,options:l}))].join(" "))).join(" ")))}function Gp({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){let u=i.getValues(e,t),c=[];for(let d of u){let p=i.clone(e);p=i.setValue(p,t,d),c.push(Xo({record:p,propertyID:t,className:r,attrs:n,expandAll:s,depth:o+1,options:l}))}return`
        <ul class="space-y-4 ">
          ${c.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Xo({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){let u=i.getValues(e,t);return i.isArray(u)&&u.length==1&&(u=u[0]),i.isArray(u)&&u.length==0?"":i.isArray(u)&&u.length>0?`
            <details class="space-y-4"> 
            
                <summary>${C.ValueArray(u,t,l?.baseUrl)}</summary>
      
                ${Gp({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:o,options:l})}
            
            </details>
      `:u?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${C.ValueThing(u,t,l?.baseUrl)}</summary>
      
            ${Yo({record:u,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:l})}
        
        </details>
      `:u===void 0?"":C.Value(u,t,l?.baseUrl)}var oi={};y(oi,{DropdownMenu:()=>Yp,Menu:()=>Kp});function Kp(e){return e=i.toArray(e),!e||e.length==0?"":m.DropdownMenu(m.DropdownMenuIcon(),e.map(t=>m.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function Yp(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>m.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return m.DropdownMenu(m.DropdownMenuIcon(),t)}var ai={};y(ai,{Kanban:()=>Xp,KanbanCard:()=>Qo,KanbanColumn:()=>Zo});function Xp(e,t){let r=i.getItems(e);return m.Kanban(m.KanbanHeader(m.KanbanTitle("Awesome Kanban","Fuck yeah"))+m.KanbanBody(propertyValues.map(n=>Zo(e,t,n)).join(" "))+m.KanbanFooter(""))}function Zo(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),m.KanbanColumn(m.KanbanColumnHeader(r)+m.KanbanColumnBody(n.map(s=>Qo(s)).join(" "))+m.KanbanColumnFooter())}function Qo(e){return m.KanbanCard(m.KanbanCardHeader("xx")+m.KanbanCardBody(C.Value(i.getName(e),"name"))+m.KanbanCardFooter(C.Value(i.getActionStatus(e),"actionStatus")))}var C={...ti,...ri,...ei,...si,...ii,...oi,..._r,...ai};function Et({record:e,options:t}){if(i.isArray(e))return e.map(o=>Et({record:o,options:t}));let r=i.record_type(e);if(!r)return e;let n=f.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let o of Object.keys(e?.record||e))e=i.setValues(e,o,Et({record:i.getValues(e,o),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function ea({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:l,properties:u,headers:c,offset:d,limit:p,options:b}){return o=o??"",o+=C.Table({url:n,records:l,properties:u,headers:c,offset:d,limit:p,options:b}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:b})}function ta({website:e,webpage:t,title:r,url:n,headContent:s,content:o,record:l,properties:u,headers:c,options:d}){return o=o??"",o+=C.Record({url:n,record:l,options:d}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:d})}var ra={blankPage:te,recordsPage:ea,recordPage:ta,cardsPage:Wo};var na={blocks:C,...ra,components:Z,...Z};var li={};y(li,{getParsedRequest:()=>Zp});function Zp(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var ia={shadcn:na,express:li};var ui={...i,..._n,html:ia},VV=ui,wV=ui,AV=ui;export{ui as _h,AV as default,VV as h,wV as helpers};
//# sourceMappingURL=jsonldCore.js.map
