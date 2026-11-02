var zo=Object.defineProperty;var m=(e,t)=>{for(var r in t)zo(e,r,{get:t[r],enumerable:!0})};var ce={get:Ie,set:Ze,flatten:qo,expand:Go};function Ie(e,t){if(!t||typeof t!="string")return;let r=li(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function Ze(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=li(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let o=e;for(let a=0;a<n.length-1;a++){let l=n[a],d=n[a+1],u=!isNaN(d);u==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),u==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,e}function qo(e){function t(s,o){let a=[];return Array.isArray(o)?(s=s||"",o.map((d,u)=>t(`${s}[${String(u)}]`,d)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(d=>t(`${s}${d}`,o[d])).flat()):[{propertyID:s,value:o}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function Go(e){let t={};return Object.keys(e).forEach(r=>Ze(t,r,e?.[r])),t}function li(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var Wt={};m(Wt,{eq:()=>ea,ge:()=>sa,getDiff:()=>di,getHash:()=>ui,getHashNested:()=>oa,gt:()=>ia,isEqual:()=>ta,isSame:()=>Qo,le:()=>na,lt:()=>ra});var Qe={};m(Qe,{expand:()=>Yo,flatten:()=>Xo,getChildren:()=>Zo,handleRelationships:()=>Et,simplify:()=>Lt,strip:()=>Mt});function Yo(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(y=>o(y));let l=i.record_id(a);if(l&&s.has(l)){let y=s.get(l);return r?y:i.ref?i.ref(y):{"@id":l}}let u=(l&&n instanceof Map?n.get(l):null)||a,g=Array.isArray(u)?[...u]:{...u};l&&s.set(l,g);for(let y of Object.keys(g))y==="previousItem"||y==="nextItem"||(g[y]=o(g[y]));return g}return typeof t=="string"&&(t={"@id":t}),o(t)}function Mt(e){function t(r,n,s){if(Array.isArray(r))return r.map(o=>t(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=t(r?.[a],n,s+1);return o}}return r}return t(e,0,0)}function Xo(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let a of n)o=o.concat(t(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let a=n[o];a=i.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),s=s.concat(t(l))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=Et(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Et(e){if(i.isArray(e))return e.map(r=>Et(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function Lt(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>t(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=t(n?.[a],s);a=="itemListElement"&&(l=i.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return e=i.clone(e),t(e)}function Zo(e){function t(r,n){if(i.isArray(r)){let o=[];for(let a of r){let l=t(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(t(r[o],n+1));return s=s.filter(o=>o),s}return t(e,0)}function Qo(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function ea(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function ta(e,t){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function ra(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function na(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function ia(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function sa(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function ui(e,t=!1){e=Lt(e),t==!1&&(e=Mt(e));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((d,u)=>({...d,[u]:r(l[u])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function oa(e){return ui(e,!0)}function di(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=di(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var Jt={};m(Jt,{evaluate:()=>Ft});function Ft(e,t){let r=[];for(let s of Object.keys(t)){let o=s,a=t?.[s];if(a=i.toArray(a),o=="$and")return a.every(l=>Ft(e,l));if(o=="$or")return a.some(l=>Ft(e,l));for(let l of a){let d=la(e,o,l);r.push(d)}}return r.every(s=>aa(s.r,s.p,s.o,s.v))}function aa(e,t,r,n){try{let s=ce.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function la(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var wr={};m(wr,{assignId:()=>Wa,getGenericRecordID:()=>La,normalizeRecordId:()=>Ma,replaceIds:()=>Ii,setTempID:()=>_i});var qt={};m(qt,{clean:()=>ua,isArray:()=>ie,isNotArray:()=>zt,isValid:()=>da,toArray:()=>et});function ua(e){return et(e)}function da(e){return ie(e)}function ie(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function zt(e){return!ie(e)}function et(e){return e==null?[]:(e=ie(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var Yt={};m(Yt,{clean:()=>Gt,format:()=>fa,formatDate:()=>ci,isDate:()=>G,isNotDate:()=>Kt,isValid:()=>ca,toDate:()=>fe});function Gt(e,t=void 0){return fe(e)||t}function ca(e){return G(e)}function fa(e,t=!1){return ci(e,t)}function G(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Kt(e){return!G(e)}function fe(e){if(e===void 0)return;if(G(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=G(e)?e:void 0,e}function ci(e,t=!1){if(console.log("vv",e,fe(e)),e=fe(e),G(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${s}-${o}`;if(t==!0){let l=String(r.getHours()).padStart(2,0),d=String(r.getMinutes()).padStart(2,0),u=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${d}:${u}`}return a}var Zt={};m(Zt,{clean:()=>pa,isNotNull:()=>Xt,isNull:()=>ge,isValid:()=>ga});function pa(e,t=void 0){}function ga(e){return ge(e)}function Xt(e){return!ge(e)}function ge(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||pe.array.isValid(e)?e.length==0:e instanceof Date?pe.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var tr={};m(tr,{clean:()=>Qt,format:()=>ha,formatDecimals:()=>fi,isNotNumber:()=>er,isNumber:()=>Te,isValid:()=>ma,toNumber:()=>tt});function Qt(e,t=void 0){return tt(e)??t}function ma(e){return Te(e)}function ha(e,t){return fi(e,t)}function fi(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function Te(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function er(e){return!Te(e)}function tt(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var nr={};m(nr,{clean:()=>ya,cleanObject:()=>Ne,isNotObject:()=>rr,isObject:()=>Pe,isValid:()=>xa});function ya(e,t=void 0){return Ne(e)||t}function xa(e){return Pe(e)}function Pe(e){return typeof e!="object"||e===null||Array.isArray(e)||e===void 0||c.isString(e)==!0||c.isDate(e)==!0||c.isNumber(e)==!0||c.isArray(e)==!0?!1:Object.keys(e).length>0}function rr(e){return!Pe(e)}function Ne(e){if(c.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Ne(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Ne(x));t=t.filter(r=>c.isNotNull(r))}}if(c.object.isValid(e))for(let t of Object.keys(e))e[t]=Ne(e[t]),pe.isNull(e[t])&&delete e[t];return pe.isNotNull(e)?e:void 0}var or={};m(or,{clean:()=>ba,cleanString:()=>pi,isNotString:()=>ir,isString:()=>me,isValid:()=>Va,maxLengthEnd:()=>Aa,maxLengthMiddle:()=>wa,toString:()=>sr});function ba(e,t=""){return pi(e)||t}function Va(e){return me(e)&&e.trim().length>=0}function wa(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Aa(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function me(e){return typeof e=="string"||e instanceof String}function ir(e){return!me(e)}function sr(e){return e==null?"":String(e)}function pi(e){return me(e)?e.trim():void 0}var dr={};m(dr,{clean:()=>gi,cleanUrl:()=>hi,getDomain:()=>$a,getParams:()=>Sa,getPath:()=>xi,getUrl:()=>mi,isNotUrl:()=>ur,isUrl:()=>Ce,isValid:()=>ar,setParams:()=>yi,setPath:()=>bi,toUrl:()=>lr});function ar(e){return Ce(e)}function gi(e,t=void 0){return hi(e)??t}function lr(e,t,r,n=void 0){return mi(e,t,r)||n}function mi(e,t,r){let n=bi(e,t);return r&&(n=yi(n,r)),n}function Ce(e){return e=gi(e),!!e}function ur(e){return!Ce(e)}function hi(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=t;try{let l=new URL(e);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let d=l.pathname;if(d=d.replace(/\/+/g,"/"),o&&(d=d.toLowerCase()),s&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),l.pathname=d,r){let u=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],g=Array.from(l.searchParams.keys());for(let y of g){let b=u.some(M=>y.toLowerCase().startsWith(M)),A=a.includes(y);b&&!A&&l.searchParams.delete(y)}}return l.searchParams.sort(),l.toString()}catch{return}}function $a(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function Sa(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function yi(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function xi(e){try{return new URL(e).pathname}catch{return}}function bi(e,t){t=t??"";let r=[],n=xi(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let o of t)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(o){console.log(o,s,e);return}}var pr={};m(pr,{clean:()=>ka,format:()=>Ia,isDuration:()=>he,isNotDuration:()=>cr,isValid:()=>_a,toDuration:()=>fr});function ka(e,t=void 0){return toDate(e)||t}function _a(e){return he(e)}function Ia(e){return Na(e)}function he(e){return Ta(e)}function cr(e){return!he(e)}function fr(e){return e}function Ta(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function Na(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,o,a,l,d,u,g]=r.map(A=>parseInt(A,10)||0),y=[d,u,g].map(A=>String(A).padStart(2,"0")).join(":"),b=[];return s&&b.push(`${s}y`),o&&b.push(`${o}m`),a&&b.push(`${a}w`),l&&b.push(`${l}d`),b.length>0?`${b.join(" ")} ${y}`:y}var mr={};m(mr,{clean:()=>Pa,format:()=>va,isBoolean:()=>ve,isNotBoolean:()=>gr,isValid:()=>Ca,toBoolean:()=>je,toString:()=>ja});function Pa(e){return je(e)}function Ca(e){return ve(e)}function va(e){return je(e)}function ja(e){return String(e)}function ve(e){return typeof e=="boolean"}function gr(e){return typeof e!="boolean"}function je(e){if(ve(e))return e;if(typeof e=="string"){if(e.toLowerCase()=="true")return!0;if(e.toLowerCase()=="false")return!1}if(!isNaN(e)){if(e==0)return!1;if(valeu==1)return!0}}var xr={};m(xr,{clean:()=>Ra,format:()=>Da,fromJson:()=>yr,isJson:()=>Re,isNotJson:()=>hr,isValid:()=>Oa,toJson:()=>Oe});function Ra(e){return Oe(e)}function Oa(e){return Re(e)}function Da(e){return Oe(e)}function Re(e){if(!e)return!1;if(typeof e=="string"){try{if(JSON.parse(e))return!0}catch{}return!1}}function hr(e){return!Re(e)}function Oe(e){let t=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(e,t(),4)}catch{}}function yr(e){try{return JSON.parse(e)}catch{}}var c={isNull:ge,isNotNull:Xt,isArray:ie,isNotArray:zt,toArray:et,isDate:G,isNotDate:Kt,toDate:fe,isDuration:he,isNotDuration:cr,toDuration:fr,isObject:Pe,isNotObject:rr,isNumber:Te,isNotNumber:er,toNumber:tt,isString:me,isNotString:ir,toString:sr,isUrl:Ce,isNotUrl:ur,toUrl:lr,isBoolean:ve,isNotBoolean:gr,toBoolean:je,isJson:Re,isNotJson:hr,toJson:Oe,fromJson:yr,array:qt,boolean:mr,date:Yt,duration:pr,json:xr,null:Zt,number:tr,object:nr,string:or,url:dr,getDataType:Vi,getType:Vi,getJsonSchema:Ba},pe=c;function Vi(e){if(ge(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(ie(e))return"Array";if(G(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(ar(e))return"URL";if(Gt(e))return"DateTime";if(he(e))return"Duration";if(Qt(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function Ba(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),c.isString(r))return s.type="string",s;if(c.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=t(r[o],n+1);return s}if(c.isNumber(r))return s.type="number",s;if(c.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var fg=globalThis.crypto.randomUUID;var rt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function ye(e,t){if(!e||!e?.["@type"])return;let r=$i(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=rt?.[n];if(s=="url")return Si(n,nt(e));if(s=="domain")return ki(n,nt(e))}return Vr(t)}function wi(e,t){if(!e||!e?.["@type"])return;let r=$i(e);for(let n of r){let s=rt?.[n];if(s=="url")return Si(n,nt(e));if(s=="domain")return ki(n,nt(e))}}function Ai(e,t){let r=e?.["@id"];return r?Ua(e)?getStandardizedRecordId(e,t)==r:br(e?.["@id"],t)==r:!1}function Ua(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if(rt?.[r])return rt?.[r]}function $i(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function nt(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function Vr(e){return e=br(e),e?(e.endsWith("/")||(e=e+"/"),br(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Si(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>c.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function ki(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>Ha(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function Ha(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function br(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function Ma(e,t){e=_i(e);let r=Ea(e,t);return Ii(e,r)}function Ea(e,t){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let l=[];for(let d of s)l=l.concat(r(d));return l}if(i.isObject(s)==!1)return[];let a=[{replacee:i.record_id(s),replacer:ye(s,o)}];for(let l of Object.keys(s))a=a.concat(r(s[l],o));return a}let n=r(e,t);return n=n.filter(s=>s),n}function _i(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function La(e){return Vr(e)}function Wa(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function Ii(e,t){function r(n,s){if(Array.isArray(n))return n.map(l=>i.replaceIds(l,s));if(!n?.["@id"])return n;let o=n?.["@id"],a=s.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=i.replaceIds(n?.[l],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var Sr={};m(Sr,{DB:()=>$r,_storeToMap:()=>Be,_storeToOriginal:()=>Ga,getRecord:()=>De,getRecords:()=>xe,patchRecord:()=>Bi,postRecord:()=>Di});var Ar={};m(Ar,{Value:()=>Fa,ValueArray:()=>Pi,ValueDateTime:()=>vi,ValueDuration:()=>Ja,ValueMonetaryAmount:()=>za,ValueNumber:()=>ji,ValueRecordId:()=>Ti,ValueRecordType:()=>Ni,ValueText:()=>Ri,ValueThing:()=>Oi,ValueUrl:()=>Ci});function Fa(e,t,r){return!e&&e!==0?"":i.isArray(e)?Pi(e,t,r):t=="@type"?Ni(e,t,r):t=="@id"?Ti(e,t,r):i.isObject(e)?Oi(e,t,r):i.isNumber(e)?ji(e,t,r):i.isDate(e)?vi(e,t,r):c.isUrl(e)?Ci(e,t,r):Ri(e,t,r)}function Ti(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return K(s,t)}function Ni(e,t,r){let n=c.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return K(s,t)}function Pi(e,t,r){let n=e.length>0?`(${e.length})`:"";return K(n,t)}function Ci(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return K(n,t)}function vi(e,t,r){e=i.toDate(e);let n=c.date.format(e);return K(n,t)}function Ja(e,t,r){return c.duration.format(pv.value)}function ji(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=c.number.format(e,n),K(e,t)}function Ri(e,t,r){return K(e,t)}function Oi(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return K(o,t)}function za(e,t,r){let n=c.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=c.number.format(n,2),o=i.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+s,o=="USD"&&(pv.htmlValue=o+" $"+s),o=="CAD"&&(pv.htmlValue=o+" $"+s),o=="EUR"&&(pv.htmlValue=o+" "+s+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",K(pv,t)}function K(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var $r=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,De(this._store,t,r)}getAll(t=!0){return xe(this._store,{},t)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return xe(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>De(this._store,i.record_id(s),!1));for(let s of r)this._store=Di(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(o=>De(this._store,i.record_id(o),!1));for(let o of n)this._store=Bi(this._store,o,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let o=this.get(t);return i.getValue(o,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return xe(this._store)}getRecords(t=!1){return xe(this._store,void 0,!1)}get record_ids(){return qa(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t);return!s||i.isRef(s)?n:s}updateRefs(t,r={},n={}){if(!t)return t;if(i.isArray(t))return t.map(s=>this.updateRefs(s,r,n));if(i.isObject(t)){if(i.isRef(t)){if(r?.[i.record_id(t)])return r[i.record_id(t)];t=this.get(t,!0)||t,r[i.record_id(t)]=t}else{if(n?.[i.record_id(t)])return t;n[i.record_id(t)]=t}for(let s of Object.keys(t))["previousItem","nextItem"].includes(s)||(t[s]=this.updateRefs(t[s],r,n));return t}return t}execute(t){let r=i.toArray(t);r=r.map(o=>this.updateRefs(o));let n=new i.DB;n.set(r);let s=[];for(let o of r)o=n.get(o),o=i.execute(o),s.push(o),n.set(i.getResults(o));return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let o=t.find(a=>i.record_id(a)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(t,r){try{return t(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return ce}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function Di(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=Be(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function Bi(e,t,r=!0){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let n=Be(e);for(let s of t){let o=n.get(i.record_id(s));s=i.patch(o,s),n.set(i.record_id(s),s)}return e=i._storeToOriginal(n),e}function De(e,t,r=!0){if(i.isArray(t))return t.map(a=>De(e,a,r));let n=i._utilGetId(t),s=Be(e),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function xe(e,t,r=!0){let n=Be(e),s=Array.from(n.values());return t&&(s=s.filter(o=>i.evaluate(o,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function qa(e){return xe(e).map(n=>i.record_id(n))}function Be(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function Ga(e){return e=Array.from(e.values()),e}var _r={};m(_r,{JSON_parse:()=>Xa,JSON_stringify:()=>Li,clean:()=>Hi,clone:()=>Wi,contractAtValue:()=>st,expandAtValue:()=>Za,getRecordUrl:()=>tl,isJsonld:()=>Ui,isValid:()=>Ka,merge:()=>Qa,patch:()=>el,removeCircularRefs:()=>Mi,sortedReplacer:()=>Ei,stringify:()=>Ya});function Ka(e){return Ui(e)}function Ui(e){return e?.["@type"]||e?.["@id"]}function Hi(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>Hi(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=Wi(e)}catch{}e=setTempID(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Ai(s)==!0)continue;let o=wi(s,t);if(o&&s?.["@id"]!=o){let a={replacer:o,replacee:s?.["@id"]};n.push(a)}if(!o&&s?.["@id"].startsWith("_:")){let a={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(a)}}return e=i.replaceIds(e,n),e}function Mi(e){return kr(e,new Set)}function kr(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>kr(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=kr(e[n],t);return e}function Ei(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function Li(e){return e=Mi(e),JSON.stringify(e,Ei,4)}function Ya(e){return Li(e)}function Xa(e){return JSON.parse(e)}function Za(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(o=>t(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,t(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function st(e){let t=i.getAtValue(e);if(t&&t.length>0)return st(i.getAtValue(e));if(i.isArray(e))return e.map(r=>st(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,st(i.getValues(e,r)));return e}return e}function Wi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function Qa(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let o of n){if(o=="@id")continue;let a=i.toArray(e?.[o]||void 0),l=i.toArray(t?.[o]||void 0),d=a.concat(l);r==!0&&(d=i.dedupe(d)),s[o]=d}return s}function el(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{},t=t?.record||t;for(let r of i.keys(t)){let n=i.toArray(t?.[r]);e=i.setValues(e,r,n)}return e}function tl(e,t){t=t?.baseUrl??t;try{return c.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var Pr={};m(Pr,{ID:()=>bl,Id:()=>Al,Type:()=>ll,actionStatus:()=>Dl,addValue:()=>Gi,addValues:()=>Ki,contentUrl:()=>Hl,description:()=>Ll,email:()=>Jl,getActionStatus:()=>Bl,getAdditionalProperty:()=>vl,getAtValue:()=>Rl,getContentUrl:()=>Ml,getDescription:()=>Wl,getEmail:()=>zl,getID:()=>Vl,getId:()=>$l,getImageName:()=>Xu,getImageUrl:()=>Yu,getItem:()=>Kl,getItemListElement:()=>tu,getItems:()=>Zl,getName:()=>iu,getNumberOfItems:()=>au,getObject:()=>du,getObjects:()=>pu,getPosition:()=>hu,getPotentialAction:()=>bu,getPotentialActions:()=>Au,getRecordID:()=>yl,getRecordId:()=>gl,getRecordType:()=>ol,getRecord_id:()=>cl,getRecord_type:()=>nl,getResult:()=>ku,getResults:()=>Tu,getTargetCollection:()=>Cu,getTargetCollections:()=>Ru,getText:()=>Bu,getType:()=>ul,getUrl:()=>Mu,getValue:()=>I,getValues:()=>Nr,hasValue:()=>Yi,insertValue:()=>Cl,isActive:()=>Wu,isCompleted:()=>Fu,isFailed:()=>Ju,isPotential:()=>Lu,isRef:()=>Il,item:()=>Gl,itemListElement:()=>eu,items:()=>Xl,keys:()=>Nl,name:()=>nu,numberOfItems:()=>ou,object:()=>uu,objects:()=>fu,position:()=>mu,potentialAction:()=>xu,potentialActions:()=>wu,properties:()=>Tr,recordID:()=>hl,recordId:()=>pl,recordType:()=>sl,record_id:()=>Fi,record_type:()=>rl,ref:()=>Tl,result:()=>Su,results:()=>Iu,setActionStatus:()=>Ul,setActive:()=>qu,setAdditionalProperty:()=>jl,setAtValue:()=>Ol,setCompleted:()=>Gu,setContentUrl:()=>El,setDescription:()=>Fl,setEmail:()=>ql,setFailed:()=>Ku,setID:()=>wl,setId:()=>Sl,setIfNull:()=>Pl,setItem:()=>Yl,setItemListElement:()=>ru,setItems:()=>Ql,setName:()=>su,setNumberOfItems:()=>lu,setObject:()=>cu,setObjects:()=>gu,setPosition:()=>yu,setPotential:()=>zu,setPotentialAction:()=>Vu,setPotentialActions:()=>$u,setRecordID:()=>xl,setRecordId:()=>ml,setRecordType:()=>al,setRecord_id:()=>fl,setRecord_type:()=>il,setResult:()=>_u,setResults:()=>Nu,setTargetCollection:()=>vu,setTargetCollections:()=>Ou,setText:()=>Uu,setType:()=>dl,setUrl:()=>Eu,setValue:()=>R,setValueIfNull:()=>qi,setValues:()=>He,targetCollection:()=>Pu,targetCollections:()=>ju,text:()=>Du,toRecordID:()=>Ji,toRecordId:()=>_l,toRecord_id:()=>Ue,toRecord_ids:()=>kl,toRef:()=>zi,url:()=>Hu});var be="en-CA";function rl(e){return I(e,"@type")}function nl(e){return I(e,"@type")}function il(e,t){return R(e,"@type",t)}function sl(e){return I(e,"@type")}function ol(e){return I(e,"@type")}function al(e,t){return R(e,"@type",t)}function ll(e){return I(e,"@type")}function ul(e){return I(e,"@type")}function dl(e,t){return R(e,"@type",t)}function Fi(e){return I(e,"@id")}function cl(e){return I(e,"@id")}function fl(e,t){return R(e,"@id",t)}function pl(e){return I(e,"@id")}function gl(e){return I(e,"@id")}function ml(e,t){return R(e,"@id",t)}function hl(e){return I(e,"@id")}function yl(e){return I(e,"@id")}function xl(e,t){return R(e,"@id",t)}function bl(e){return I(e,"@id")}function Vl(e){return I(e,"@id")}function wl(e,t){return R(e,"@id",t)}function Al(e){return I(e,"@id")}function $l(e){return I(e,"@id")}function Sl(e,t){return R(e,"@id",t)}function Ue(e){return i.isArray(e)?e.map(t=>Ue(t)):typeof e=="string"?e:Fi(e)}function kl(e){return Ue(e)}function Ji(e){return Ue(e)}function _l(e){return Ue(e)}function Il(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function Tl(e){if(e?._isThingClass==!0)return e.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function zi(e){return i.isArray(e)?e.map(t=>zi(t)):{"@id":Ji(e)}}function Nl(e){return Tr(e)}function Tr(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(Tr(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function I(e,t,r,n,s){let o=Nr(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function R(e,t,r,n,s){if(n!==void 0){let o=i.getValues(e,t);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return He(e,t,r,s)}function qi(e,t,r,n,s){let o=I(e,t,n);return i.isNull(o)==!1?e:R(e,t,r,n,s)}function Pl(e,t,r,n,s){return qi(e,t,r,n,s)}function Gi(e,t,r){return Ki(e,t,r)}function Ki(e,t,r){return r=i.getValues(e,t).concat(r),He(e,t,r)}function Nr(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),o=e;for(let l=0;l<s.length;l++){let[d,u]=Ir(s[l]);d&&(o=o?.[d],o=i.toArray(o)),o=o.filter(g=>g?.["@language"]==n||g?.["@language"]==be||g?.["@language"]===void 0),o=o.map(g=>g?.["@value"]??g),o=i.toArray(o),o=o.map(g=>g?.[n]??g?.[be]??g),o=i.toArray(o),l<s.length-1&&(o=o?.[u])}let a=i.toArray(o);return a.length==0&&r!==void 0?r:a}function He(e,t,r,n){e=e?.record||e;let s=t.split("."),o=e||{};for(let d=0;d<s.length-1;d++){let[u,g]=Ir(s[d]);o[u]=i.toArray(o?.[u]||[]);let y;for(o?.[u]?.[n]?(o[u][n]=i.toArray(o?.[u]?.[n]),y=o[u][n]):o?.[u]?.[be]?(o[u][be]=i.toArray(o?.[u]?.[be]),y=o[u][be]):(o[u]=i.toArray(o?.[u])||[],y=o[u]);y.length-1<g;)y.push({"@type":"Thing"});o=y?.[g]}let[a,l]=Ir(s[s.length-1]);return o[a]=i.toArray(r),e}function Cl(e,t,r){return Yi(e,t,r)==!0?e:Gi(e,t,r)}function Yi(e,t,r){let n=Nr(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function Ir(e){if(e===void 0)return[void 0,0];let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function vl(e,t){let n=i.getValues(e,"additionalProperty").find(o=>i.getValue(o,"propertyID")==t);return i.getValue(n,"value")}function jl(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(a=>i.getValue(a,"propertyID")!=t);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r};return e=i.addValue(e,"additionalProperty",o),e}function Rl(e){return i.getValues(e,"@value")}function Ol(e,t){return i.setValues(e,"@value",t)}function Dl(e){return i.getValue(e,"actionStatus")}function Bl(e){return i.getValue(e,"actionStatus")}function Ul(e,t){return i.setValue(e,"actionStatus",t)}function Hl(e){return i.getValue(e,"contentUrl")}function Ml(e){return i.getValue(e,"contentUrl")}function El(e,t){return i.setValue(e,"contentUrl",t)}function Ll(e){return i.getValue(e,"description")}function Wl(e){return i.getValue(e,"description")}function Fl(e,t){return i.setValue(e,"description",t)}function Jl(e){return i.getValue(e,"email")}function zl(e){return i.getValue(e,"email")}function ql(e,t){return i.setValue(e,"email",t)}function Gl(e){return i.getValue(e,"item")}function Kl(e){return i.getValue(e,"item")}function Yl(e,t){return i.setValue(e,"item",t)}function Xl(e){return i.list.getItems(e)}function Zl(e){return i.list.getItems(e)}function Ql(e,t){return i.list.setItems(e,t)}function eu(e){return i.list.getItemListElement(e)}function tu(e){return i.list.getItemListElement(e)}function ru(e,t){return i.list.setItemListElement(e,t)}function nu(e){return i.getValue(e,"name")}function iu(e){return i.getValue(e,"name")}function su(e,t){return i.setValue(e,"name",t)}function ou(e){return i.getValue(e,"numberOfItems")}function au(e){return i.getValue(e,"numberOfItems")}function lu(e,t){return i.setValue(e,"numberOfItems",t)}function uu(e){return i.getValue(e,"object")}function du(e){return i.getValue(e,"object")}function cu(e,t){return R(e,"object",t)}function fu(e){return i.getValues(e,"object")}function pu(e){return i.getValues(e,"object")}function gu(e,t){return He(e,"object",t)}function mu(e){return i.list.getPosition(e)}function hu(e){return i.list.getPosition(e)}function yu(e,t){return i.list.setPosition(e,t)}function xu(e){return i.getValues(e,"potentialAction")}function bu(e){return i.getValues(e,"potentialAction")}function Vu(e,t){return i.setValues(e,"potentialAction",t)}function wu(e){return i.getValues(e,"potentialAction")}function Au(e){return i.getValues(e,"potentialAction")}function $u(e,t){return i.setValues(e,"potentialAction",t)}function Su(e){return i.getValue(e,"result")}function ku(e){return i.getValue(e,"result")}function _u(e,t){return R(e,"result",t)}function Iu(e){return i.getValues(e,"result")}function Tu(e){return i.getValues(e,"result")}function Nu(e,t){return He(e,"result",t)}function Pu(e){return i.getValue(e,"targetCollection")}function Cu(e){return i.getValue(e,"targetCollection")}function vu(e,t){return i.setValue(e,"targetCollection",t)}function ju(e){return i.getValues(e,"targetCollection")}function Ru(e){return i.getValues(e,"targetCollection")}function Ou(e,t){return i.setValues(e,"targetCollection",t)}function Du(e){return i.getValue(e,"text")}function Bu(e){return i.getValue(e,"text")}function Uu(e,t){return i.setValue(e,"text",t)}function Hu(e){return i.getValue(e,"url")}function Mu(e){return i.getValue(e,"url")}function Eu(e,t){return i.setValue(e,"url",t)}function Lu(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function Wu(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function Fu(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function Ju(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function zu(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function qu(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function Gu(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")||new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")||new Date().toISOString()),e=i.setValue(e,"error",void 0),i.isNotNull(t)&&(e=i.setValue(e,"result",t)),e}function Ku(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date().toISOString()),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function Yu(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function Xu(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var vr={};m(vr,{_utilGetId:()=>cd,getDataType:()=>Qu,isArray:()=>ss,isBoolean:()=>Xi,isDate:()=>ts,isJsonld:()=>is,isNotArray:()=>ud,isNotBoolean:()=>td,isNotDate:()=>od,isNotNull:()=>ed,isNotNumber:()=>nd,isNotObject:()=>ad,isNotString:()=>id,isNull:()=>Cr,isNumber:()=>Zi,isObject:()=>ns,isString:()=>es,randomUUID:()=>Zu,toArray:()=>os,toBoolean:()=>rd,toDate:()=>rs,toNumber:()=>Qi,toObject:()=>ld,toSingle:()=>dd,toString:()=>sd});function Zu(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function Qu(e){if(Cr(e))return"Undefined";if(ss(e))return"Array";if(is(e))return"Jsonld";let t=rs(e);if(ts(t))return"Date";let r=Qi(e);return Zi(r)?"Number":ns(e)?"Object":es(e)?'String"':Xi(e)?"Boolean":"Undefined"}function Cr(e){return c.isNull(e)}function ed(e){return c.isNotNull(e)}function Xi(e){return c.isBoolean(e)}function td(e){return c.isNotBoolean(e)}function rd(e){return c.toBoolean(e)}function Zi(e){return c.isNumber(e)}function nd(e){return c.isNotNumber(e)}function Qi(e){return c.toNumber(e)}function es(e){return c.isString(e)}function id(e){return c.isNotString(e)}function sd(e){return c.toString(e)}function ts(e){return c.isDate(e)}function od(e){return c.isNotDate(e)}function rs(e){return c.toDate(e)}function ns(e){return c.isObject(e)}function ad(e){return c.isNotObject(e)}function ld(e){return c.toObject(e)}function is(e){return Cr(e)?!1:!!(e?.["@id"]||e?.["@type"])}function ss(e){return c.isArray(e)}function ud(e){return c.isNotArray(e)}function os(e){return c.toArray(e)}function dd(e){return e=os(e),e?.[0]??void 0}function cd(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var jr={};m(jr,{concat:()=>fd,dedupe:()=>as,deleteItem:()=>md,diff:()=>gd,filter:()=>bd,find:()=>xd,includes:()=>ot,insertItem:()=>hd,intersection:()=>pd,length:()=>yd,search:()=>us,sort:()=>Ve,upsertItem:()=>ls});function as(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)ot(r,n)==!1&&(t==!0&&i.isValid(n)&&us(e,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=Ve(r),r}function ot(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function fd(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=as(n)),n=Ve(n),n}function Ve(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function pd(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!0&&r.push(n);return r=Ve(r),r}function gd(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!1&&r.push(n);return r=Ve(r),r}function md(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function ls(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function hd(e,t){return ls(e,t)}function yd(e){return e=i.toArray(e),e.length}function xd(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function us(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function bd(e,t,r,n,s,o){return e=i.toArray(e),e.length==0?itemList:(i.isNotNull(t)&&(e=e.filter(a=>i.evaluate(a,t))),e=Ve(e,r,n),e.length==0||(o=i.toNumber(o),i.isNumber(o)&&(e=e.slice(o)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=slice(0,s))),e)}var Rr={};m(Rr,{exportToString:()=>ds});function ds(e){return Array.isArray(e)?Vd(e):i.record_type(e)=="ListItem"?wd(e):i.record_type(e)=="ItemList"?Ad(e):i.record_type(e)=="Action"?$d(e):i.getValue(e,"name")||i.getValue(e,"@id")}function Vd(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=ds(r)+`
`),t}function wd(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function Ad(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function $d(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var Dr={};m(Dr,{DatabaseHelper:()=>Or,testDB:()=>Sd});var Or=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Sd(){}var zr={};m(zr,{add:()=>Nd,append:()=>Me,clean:()=>Br,decrementPositions:()=>Fr,duplicate:()=>Dd,ensurePositions:()=>Ae,ensurePreviousNextItem:()=>ut,filter:()=>Bd,find:()=>W,findByItem:()=>Hr,findByListItem:()=>Ur,findByPosition:()=>ys,getILE:()=>Td,getItem:()=>We,getItemListElement:()=>_,getItems:()=>xs,getMaxPosition:()=>Le,getMinPosition:()=>Jr,getPosition:()=>T,gt:()=>hs,incrementPositions:()=>Wr,insert:()=>v,insertAfter:()=>Lr,insertBefore:()=>Er,isItemList:()=>C,isListItem:()=>at,length:()=>Id,lt:()=>ms,move:()=>Pd,moveAfter:()=>Rd,moveBefore:()=>jd,moveDown:()=>vd,moveUp:()=>Cd,prepend:()=>fs,remove:()=>gs,replace:()=>ps,setItem:()=>Vs,setItemListElement:()=>D,setItems:()=>bs,setPosition:()=>lt,sort:()=>Ee,toItemList:()=>_d,toListItem:()=>we,toString:()=>kd,toStringItemList:()=>cs,toStringListItem:()=>Mr,upsert:()=>Od});function kd(e){return C(e)?cs(e):Mr(e)}function cs(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=_(e);return t=t.concat(r.map(n=>Mr(n))),t.join(`
`)}function Mr(e){return`${T(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function C(e){return i.record_type(e)==="ItemList"}function _d(e){if(C(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>we(r,n))},Br(e)}return Br(e)}function Br(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=_(e);return t=t.map(r=>we(r)),t=Ae(t),t=ut(t),e=D(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function Id(e){return _(e).length}function _(e){return i.getValues(e,"itemListElement")||[]}function Td(e){return _(e)}function D(e,t){return t=i.toArray(t),t=t.map((r,n)=>we(r)),t=Ae(t),t=ut(t),e=i.setValues(e,"itemListElement",t),e=i.setValue(e,"numberOfItems",t.length),e}function v(e,t,r){if(e=Ae(e),i.isArray(t)){let s=r;for(let o of t)e=v(e,o,s),(s||s===0)&&(s+=1);return e}t=we(t,r);let n=_(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??Le(n),r=r??n.length,r=r>=0?r:0,n=Wr(n,r),n=Ee(n),n.push(t),e=D(e,n),e}function Er(e,t,r){if(i.isArray(t)){for(let o of t)e=Er(e,o,r);return e}let n=W(e,r);if(!n)return v(e,t);let s=T(n);return v(e,t,s)}function Lr(e,t,r){if(i.isArray(t)){for(let o of t)e=Lr(e,o,r);return e}let n=W(e,r);if(!n)return v(e,t);let s=T(n);return v(e,t,s+1)}function fs(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=fs(e,t?.[r],referenceItem);return e}return v(e,t,0)}function Me(e,t){if(i.isArray(t)){for(let s of t)e=Me(e,s,referenceItem);return e}let r=_(e);if(r.length==0)return v(e,t,0);let n=Le(e);return n||n===0?v(e,t,n+1):v(e,t,r.length)}function Nd(e,t){return Me(e,t)}function Pd(e,t,r){return v(e,t,r)}function Cd(e,t){let r=W(e,t),n=T(r);return n==0?e:v(e,r,n-1)}function vd(e,t){let r=W(e,t),n=T(r),s=Le(e);return n==s?e:v(e,r,n+1)}function jd(e,t,r){return Er(e,t,r)}function Rd(e,t,r){return Lr(e,t,r)}function ps(e,t,r){let n=_(e),s=[];for(let o of n){let a=We(o);i.isSame(a,r)&&(a=Vs(o,t)),s.push(o)}return D(e,s)}function Od(e,t){return W(e,t)?ps(e,t,i.ref(t)):Me(e,t)}function Dd(e,t){if(at(t)){let r=W(t);t=We(r)}return Me(e,t)}function gs(e,t){if(i.isArray(t)){for(let o of t)e=gs(e,o);return e}e=Ae(e);let r=_(e),n=W(r,t),s=T(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=Fr(r,s),e=D(e,r),e}function Bd(e,t){let r=i.getItemListElement(e);return t&&(r=i.filter(r,t)),r}function at(e){return i.record_type(e)==="ListItem"}function we(e,t){return at(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function ms(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function hs(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Ee(e){if(C(e)){let r=e,n=_(r),s=Ee(n);return D(r,s)}function t(r,n){return ms(r,n)==!0?-1:hs(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function W(e,t){if(!i.isNull(t))return i.isNumber(t)?ys(e,t):at(t)?Ur(e,t):i.record_type(t)?Hr(e,t):Hr(e,t)||Ur(e,t)}function ys(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(T(r)==t)return r}}function Ur(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function Hr(e,t){if(C(e)&&(e=_(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=We(r);if(i.isSame(n,t))return r}}function T(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function lt(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,T(e)==t||(e=i.setValue(e,"position",t)),e}function Wr(e,t){if(t=t??0,C(e)){let n=e;e=_(n);let s=Wr(e,t);return D(n,s)}let r=[];for(let n of e){let s=T(n);s>=t&&(n=lt(n,s+1)),r.push(n)}return r}function Fr(e,t){if(t=t??0,C(e)){let n=e;e=_(n);let s=Fr(e,t);return D(n,s)}let r=[];for(let n of e){let s=T(n);s!=0&&s>=t&&(n=lt(n,s-1)),r.push(n)}return r}function Ae(e,t){if(C(e)){let s=e;e=_(s);let o=Ae(e);return D(s,o)}if(e=i.toArray(e),e.length==0)return e;e=Ee(e);let r=t??Jr(e)??0,n=[];for(let s of e)s=lt(s,r),r+=1,n.push(s);return n}function Jr(e){if(C(e)){let s=_(s);return Jr(s)}e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function Le(e){if(C(e))return e=_(e),Le(e);e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function ut(e){if(C(e)){let r=e;e=_(r);let n=ut(e);return D(r,n)}e=i.toArray(e),e=Ee(e);let t=[];for(let r of e){let n=T(r),s=W(e,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let a=W(e,n+1),l=a?i.ref(a):void 0;r=i.setValue(r,"nextItem",l),t.push(r)}return t}function xs(e){if(C(e)){let n=_(e);return xs(n)}return e.map(r=>We(r))}function bs(e,t){if(C(e)){let n=e;e=_(n);let s=bs(e);return D(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>we(n)),e.concat(t)}function We(e){return i.getValue(e,"item")}function Vs(e,t){return i.setValue(e,"item",t)}var Gr={};m(Gr,{appendAction:()=>_s,deleteAction:()=>Ps,duplicateAction:()=>Ns,execute:()=>ws,insertAction:()=>As,insertAfterAction:()=>Ss,insertBeforeAction:()=>$s,moveDownAction:()=>Ts,moveUpAction:()=>Is,prependAction:()=>ks,replaceAction:()=>qr});function ws(e){if(i.isArray(e)){let r=new i.DB;r.set(e);let n=[];for(let s of e){s=r.get(s);let o=ws(s);n.push(o),r.set(i.getResults(o))}return n}let t=i.record_type(e);if(t=="ReplaceAction")return qr(e);if(t=="UpdateAction")return Ud(e);if(t=="InsertAction")return As(e);if(t=="InsertBeforeAction")return $s(e);if(t=="InsertAfterAction")return Ss(e);if(t=="MoveUpAction")return Is(e);if(t=="MoveDownAction")return Ts(e);if(t=="AppendAction")return _s(e);if(t=="PrependAction")return ks(e);if(t=="ReplaceAction")return qr(e);if(t=="DuplicateAction")return Ns(e);if(t=="DeleteAction")return Ps(e)}function Ud(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t){let o=i.getValue(s,"propertyID"),a=i.getValue(s,"value");n=i.setValues(n,o,a)}e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function As(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insert(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function $s(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertBefore(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Ss(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertAfter(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function ks(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function _s(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Is(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ts(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function qr(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee"),s=i.list.replace(s,r,n);return e=i.addValue(e,"result",t),e=i.setCompleted(e),e}function Ns(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ps(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}var Xr={};m(Xr,{add:()=>Hd,addPotentialActions:()=>dt});function Hd(e,t){return dt(e,t)}function dt(e,t){if(!e||typeof e=="string")return e;if(i.isArray(e))return e.map(n=>dt(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=Ed(e,t)),r=="ItemList"&&(e=Md(e,t));for(let n of Object.keys(e))e[n]=dt(e[n],t);return e}function Md(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let o=0;o<r.length;o++){let a=i.getPosition(r[o]);a>0&&(r[o]=Wd(r[o],e,t)),a<n-1&&(r[o]=Fd(r[o],e,t)),r[o]=Jd(r[o],e,t),r[o]=zd(r[o],e,t)}e=i.setValues(e,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=qd(e,s,t),e}function Ed(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return i.getValue(e,"actionStatus")||(e=Ld(e,t),e=Cs(e,t),e=Kr(e,t),e=Yr(e,t)),i.isPotential(e)&&(e=Cs(e,t),e=Kr(e,t),e=Yr(e,t)),i.isActive(e)&&(e=Kr(e,t),e=Yr(e,t)),e}function Ld(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","PotentialActionStatus"),e=P(e,t,"startTime",""),e=P(e,t,"endTime",""),e=P(e,t,"error",""),e}function Cs(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","ActiveActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",""),e=P(e,t,"error",""),e}function Kr(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","CompletedActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",n??new Date),e=P(e,t,"error",""),e}function Yr(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=P(e,t,"actionStatus","FailedActionStatus"),e=P(e,t,"startTime",r??new Date),e=P(e,t,"endTime",n??new Date),e=P(e,t,"error",""),e}function P(e,t,r,n,s){s=s||`Set ${r} ${String(n).slice(0,50)}`;let o={"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(e),url:t};return e=i.addValue(e,"potentialAction",o),e}function Wd(e,t,r,n){n=n||"Move up";let s={"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function Fd(e,t,r,n){n=n||"Move down";let s={"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function Jd(e,t,r,n){n=n||"Delete";let s={"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function zd(e,t,r,n){n=n||"Duplicate";let s={"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function qd(e,t,r,n){n=n||"Duplicate";let s={"@type":"AppendAction","@id":i.randomUUID(),name:n,object:t,targetCollection:i.ref(e),url:r};return e=i.addValue(e,"potentialAction",s),e}var i={dot:ce,...Wt,...Jt,...Qe,...wr,...Sr,..._r,...Pr,...vr,...jr,...Rr,...Dr,list:zr,...Gr,potentialActionHelpers:Xr};var $n={};m($n,{default:()=>Cc,things:()=>S});var Zr={};m(Zr,{getContent:()=>Kd,getIcon:()=>Qd,getTitle1:()=>js,getTitle2:()=>Gd,imageUrl:()=>Xd,imageUrls:()=>Zd,thumbnailUrl:()=>Yd});function js(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),o=i.getValue(e,"familyName"),a=i.getValue(e,"name");if(r=="Person"){let l=[s,o];if(l=l.filter(d=>d!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=i.getValue(e,"item");return js(l)}return a||n||""}function Gd(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let a=i.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function Kd(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o;return o=i.getValue(e,"abstract"),o&&typeof o=="string"||(o=i.getValue(e,"text"),o&&typeof o=="string")||(o=i.getValue(e,"description"),o&&typeof o=="string")?o:""}function Yd(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function Xd(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function Zd(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function Qd(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return vs;case"action":return ec;case"person":return tc;case"organization":return rc;case"itemlist":return nc;case"listitem":return ic;case"postaladdress":return sc;case"product":return oc;case"webapi":return ac;case"website":return lc;case"webpage":return uc;default:return vs}}var vs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',ec='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',tc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',rc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',nc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',ic='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',sc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',oc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',ac='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',lc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',uc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Mg=globalThis.crypto.randomUUID;function ft(e,t){if(Array.isArray(e))return e.map(n=>ft(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=ft(e);let r=i.record_type(e);return e=ct(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=ct(e,"MoveUpAction","Move Up",t),e=ct(e,"MoveDownAction","Move Down",t),e=ct(e,"DeleteAction","Delete",t)),e}function ct(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=dc(e,s),e}function dc(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var Qr={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function pt(e){let t=[];return t=t.concat(Qr?.[e]?.properties||[]),Qr?.[e]?.parent&&(t=t.concat(pt(Qr[e].parent))),t}function gt(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:$.thing("Object thing"),instrument:$.thing("Instrument thing"),agent:$.person("Agent thing"),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(gt(a,t-1))}return s}function en(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function mt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:cc(),image:$.image(),hasPart:[]};if(r==0&&(o.author=$.person(),o.datePublished=new Date().toISOString()),r<t)for(let a=0;a<3;a++){let l=e+"_"+String(a);o.hasPart.push(mt(l,t,r+1))}return o}function cc(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Fe(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var tm=globalThis.crypto.randomUUID;function tn(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let o=0;o<e;o++){let a=fc($.thing(o),o);s&&(s.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(a),s=a}return n}function fc(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function rn(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:$.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:$.organization("org_a")}}function nn(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:$.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function sn(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:$.address()}}function on(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function an(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function ln(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let a=$.product(`variant ${s} ${o}`);a.size=s,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function ht(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:Fe(e),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(ht(a,t-1))}return s}function un(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:$.person(0),recipient:[$.person(10),$.person(11),$.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function dn(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<t;o++){let a=e+"_"+String(o),l=$.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-t+o),l.dateSent=d,l.dateReceived=d,s.hasPart.push(l)}return s}var $={action:gt,article:mt,address:en,conversation:dn,image:Fe,itemList:tn,message:un,offer:rn,organization:nn,person:sn,postalAddress:on,product:an,productGroup:ln,thing:ht,Action:gt,Article:mt,Address:en,Conversation:dn,Image:Fe,ItemList:tn,Message:un,Offer:rn,Organization:nn,Person:sn,PostalAddress:on,Product:an,ProductGroup:ln,Thing:ht};var fn={};m(fn,{jsonToMarkdown:()=>cn});function cn(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${a+1}:**
`,n+=cn(o,t+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${s}* **${o}:**
`,n+=cn(a,t+1)):n+=`${s}* **${o}:** ${a}
`}):n+=`${s}* ${r}
`;return n}var gn={};m(gn,{jsonToYaml:()=>Je,yamlToJson:()=>pc});function Je(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=Je(o,t+2).trimStart();n+=a}else n+=Je(o,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(o=>{let a=e[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+Je(a,t+2):n+=" "+Je(a,0)}),n)}function pc(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),a=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let d=n[n.length-1],u=a.substring(1).trim();if(u.includes(":")){let[g,...y]=u.split(":"),b=g.trim(),A=y.join(":").trim(),M=pn(A),te={[b]:M};d.value.push(te),n.push({indent:o+2,value:te,type:"object",lastKey:b})}else d.value.push(pn(u))}else if(a.includes(":")){let[d,...u]=a.split(":"),g=d.trim(),y=u.join(":").trim();l.lastKey=g,y===""?(l.value[g]={},n.push({indent:o,value:l.value[g],type:"object",lastKey:g})):l.value[g]=pn(y)}}return r}function pn(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var Rs={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Os="DesignToken",Ds={css:{get:yc},get:mn,set:Bs,getValue:mc,setValue:hc,sampleRecord:Us};function mn(e){if(!e)return;let t=i.getAdditionalProperty(e,Os);return t=t||{},t}function Bs(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,Os,t),e}function mc(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=mn(e),n=Ie(r,t);return Ie(n,"$value")}function hc(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=mn(),s=Us(),o=Ie(s,t);return o.$value=r,n=Ze(n,t,o),e=Bs(e,n),e}function yc(e,t="dt"){let r=[];function n(a,l=[]){for(let[d,u]of Object.entries(a)){if(u==null)continue;let g=[...l,d];if(typeof u=="object"&&"value"in u){let y=`--${g.map(A=>A.toLowerCase()).join("-")}`,b=s(u.value);r.push(`  ${y}: ${b};`)}else if(typeof u=="object"&&!Array.isArray(u))n(u,g);else{let y=`--${g.map(A=>A.toLowerCase()).join("-")}`,b=s(u);r.push(`  ${y}: ${b};`)}}}function s(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function Us(){return Rs}var f={markdown:fn,yaml:gn,designToken:Ds};var xt=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return hn(this.record)}toJSON(){return this.record}toMD(){return f.markdown.jsonToMarkdown(this.record)}toYaml(){return f.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=ye(yt(this._record),this.baseUrl)),i.simplify(yt(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(yt(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=Z(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(yt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return pt(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(a){console.log("Callback failed: ",o,String(a),s)}}static toString(t){return hn(t)}static toMD(t){return f.markdown.jsonToMarkdown(t)}static toYaml(t){return f.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new S[r](f.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return Z(t)}static example(t=0,r=5){let n=this.name;return new S[n]($[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return pt(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,Z(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,Z(n))}static addValue(t,r,n){return i.addValue(t,r,Z(n))}static addValues(t,r,n){return i.addValues(t,r,Z(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return ft(t)}static addAdditionalProperty(t,r,n){return xc(t,"additionalProperty",r,n)}};function yt(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=t(n?.[o]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function Z(e){if(Array.isArray(e))return e.map(t=>Z(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=S?.[t]||S.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=Z(e._record?.[t]);return e}function hn(e){if(Array.isArray(e)){let o=e.map(a=>hn(a));return o=o.join(`
`),o}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function xc(e,t,r,n){let s=new S.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var V=class extends xt{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=c.url.clean(value),t}set cleanUrl(t){url=c.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=ye(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var se=class extends V{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(this.record,t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,o,a){return search(t,r,n,s,o,a)}};var j=class extends V{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return Hs(this.record,t)}static test(t,r){return Hs(t,r)}};function Hs(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",o=new RegExp(t.valuePattern,"gi");if(e.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var ze=class extends V{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=Ws(this.record,t,r)}addMaxValue(t,r){this.record=Fs(this.record,t,r)}addMinLength(t,r){this.record=Js(this.record,t,r)}addMaxLength(t,r){this.record=zs(this.record,t,r)}addDefaultValue(t,r){this.record=qs(this.record,t,r)}addValueRequired(t,r){this.record=Gs(this.record,t,r)}addValuePattern(t,r){this.record=Ms(this.record,t,r)}addMultipleValues(t,r){this.record=Es(this.record,t,r)}addStepValue(t,r){this.record=Ls(this.record,t,r)}testConditions(){return yn(this.record)}getInputconditions(){return B(this.record)}addInputCondition(t,r){return this.addValues(t+"-input",r)}getOutputConditions(){return bc(this.record)}addOutputCondition(t,r){return this.addValues(t+"-output",r)}test(){return yn(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return Ws(t,r,n)}static addMaxValue(t,r,n){return Fs(t,r,n)}static addMinLength(t,r,n){return Js(t,r,n)}static addMaxLength(t,r,n){return zs(t,r,n)}static addDefaultValue(t,r,n){return qs(t,r,n)}static addValueRequired(t,r,n){return Gs(t,r,n)}static addValuePattern(t,r,n){return Ms(t,r,n)}static addMultipleValues(t,r,n){return Es(t,r,n)}static addStepValue(t,r,n){return Ls(t,r,n)}static test(t){return yn(t)}};function B(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function Y(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function bc(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function Ms(e,t,r){let n=B(e,t)||new j;return n.valuePattern=r,e=Y(e,t,n),e}function Es(e,t,r){let n=B(e,t)||new j;return n.multipleValues=r,e=Y(e,t,n),e}function Ls(e,t,r){let n=B(e,t)||new j;return n.stepValue=r,e=Y(e,t,n),e}function Ws(e,t,r){let n=B(e,t)||new j;return n.minValue=r,e=Y(e,t,n),e}function Fs(e,t,r){let n=B(e,t)||new j;return n.maxValue=r,e=Y(n.record,t,r),e}function Js(e,t,r){let n=B(e,t)||new j;return n.valueMinLength=r,e=Y(e,t,n),e}function zs(e,t,r){let n=B(e,t)||new j;return n.valueMaxLength=r,e=Y(e,t,n),e}function qs(e,t,r){let n=B(e,t)||new j;return n.defaultValue=r,e=Y(e,t,n),e}function Gs(e,t,r){let n=B(e,t)||new j;return n.valueRequired=r,e=Y(e,t,n),e}function yn(e){let t=B(e);for(let r of t)if(j.test(r,e?.[r.propertyID])==!1)return!1;return!0}var F=class extends ze{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(t){return this.setValues("targetCollection",t)}get toLocation(){return this.getValues("toLocation")}set toLocation(t){return this.setValues("toLocation",t)}},bt=class extends F{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Vt=class extends F{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},wt=class extends F{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(t){return this.setValues("replacer",t)}get replacee(){return this.getValues("replacee")}set replacee(t){return this.setValues("replacee",t)}},At=class extends F{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},$t=class extends F{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},St=class extends F{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var kt=class extends V{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return Vc(this.record)}get(t){return f.designToken.getValue(this.record,t)}set(t,r){return f.designToken.setValue(this.record,t,r)}get token(){return f.designToken.get(this.record)}set token(t){this.record=f.designToken.set(this.record,t)}get primary(){return f.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=f.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return f.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=f.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return f.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=f.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return f.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=f.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return f.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=f.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return f.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=f.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return f.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=f.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new _t(this,"typography.heading-lg")}get body(){return new _t(this,"typography.body-md")}get spacingSm(){return f.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return f.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return f.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return f.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return f.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return f.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return f.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return f.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return f.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return f.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new xn(this,"shadow.elevation-md")}sample(){return f.designToken.getSampleRecord()}},_t=class{constructor(t,r){this.base=t,this.basePath=w(r)}get fontFamily(){return f.designToken.getValue(record,w(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get fontWeight(){return f.designToken.getValue(record,w(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get fontSize(){return f.designToken.getValue(record,w(this.basePath,"fontSize"))}set fontSize(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get lineHeight(){return f.designToken.getValue(record,w(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get letterSpacing(){return f.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}get family(){return f.designToken.getValue(record,w(this.basePath,"fontFamily"))}set family(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get weight(){return f.designToken.getValue(record,w(this.basePath,"fontWeight"))}set weight(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get size(){return f.designToken.getValue(record,w(this.basePath,"fontSize"))}set size(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get height(){return f.designToken.getValue(record,w(this.basePath,"lineHeight"))}set height(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get spacing(){return f.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}},xn=class{constructor(t,r){this.base=t,this.basePath=w(r)}get color(){return f.designToken.getValue(record,w(this.basePath,"color"))}set color(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"color"),t)}get offsetX(){return f.designToken.getValue(record,w(this.basePath,"offsetX"))}set offsetX(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"offsetX"),t)}get offsetY(){return f.designToken.getValue(record,w(this.basePath,"offsetY"))}set offsetY(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"offsetY"),t)}get blur(){return f.designToken.getValue(record,w(this.basePath,"blur"))}set blur(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"blur"),t)}get spread(){return f.designToken.getValue(record,w(this.basePath,"spread"))}set spread(t){this.base.record=f.designToken.setValue(record,w(this.basePath,"spread"),t)}};function w(e,t,r){let n=[e,t,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Vc(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var O=class extends V{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var U=class extends O{constructor(t,r,n,s,o,a){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=a)}toString(){return Vn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",$e(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",$e(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",$e(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",$e(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",$e(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return Ys(this.record)}set gmail(t){this.record=Ks(t)}get outlook(){return Zs(this.record)}set outlook(t){this.record=Xs(t)}static toString(t){return Vn(t)}static fromGmail(t){return Ks(t)}static toGmail(t){return Ys(t)}static fromOutlook(t){return Xs(t)}static toOutlook(t){return Zs(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),t}};function Vn(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(u=>Vn(u)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=bn(r,20);let s=i.getValues(e,"recipient").map(u=>u?.email||u?.name||"");s=bn(s,25);let o=i.getValue(e,"headline")||"";o.length>20&&(o=bn(o,30));let a=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${s} | ${o} | ${l}`}function bn(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function $e(e){return e?Array.isArray(e)?e.map(t=>$e(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function Ks(e){let t=new U;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function Ys(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function Xs(e){let t=new U;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function Zs(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var Tt=class extends O{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return wc(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=U.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return Qs(this.record)}add(t,r,n,s,o,a){this.record=It(this.record,t,r,n,s,o,a)}addMessage(t,r,n,s,o,a){this.record=It(this.record,t,r,n,s,o,a)}newMessage(t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);this.messages=this.messages.push(l)}static getParticipants(t){return Qs(t)}static newMessage(t,r,n,s,o,a,l){return It(t,r,n,s,o,a,l)}static addMessage(t,r,n,s,o,a,l){return It(t,r,n,s,o,a,l)}static getMessages(t){return qe(t)}static getFirstMessage(t){let r=qe(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=qe(t);return r.length>0?r[r.length-1]:void 0}};function wc(e){let t=qe(e),r=`Conversation with ${t.length} messages:
`;return r+=U.toString(t),r}function It(e,t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);return e=i.addValues(e,"hasPart",l),e}function qe(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=Ac(t),t}function Ac(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function Qs(e){let t=qe(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var Se=class extends V{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return $c(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function $c(e){let t="";t+=`${e?.name||e?.["@id"]} `}var Nt=class extends V{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return Sc(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new Se(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function Sc(e){let t="";t+=`${e?.name||e?.["@id"]} `}var oe=class extends V{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return eo(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=V.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=V.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=V.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=V.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=V.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=V.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=V.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=V.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=V.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=V.setValues(this._record,"validThrough",t)}};function eo(e){if(Array.isArray(e))return e.map(s=>eo(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var ae=class extends O{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return wn(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new oe(t,r))}static addOffer(t,r,n="CAD"){return kc(t,r,n)}static toString(t){return wn(t)}};function wn(e){if(Array.isArray(e))return e.map(r=>wn(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function kc(e,t,r){let n=new oe(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var Pt=class extends ae{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return An(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=_c(this.record,t)}generateVariants(t){this.record=Ic(this.record,t)}static toString(t){return An(t)}};function An(e){if(Array.isArray(e))return e.map(n=>An(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+ae.toString(n)+`
`;return t}function _c(e,t){return e=i.addValues(e,"hasVariant",t),e}function Ic(e,t){if(Array.isArray(t)){let o={};for(let a of t)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);t=o}let r=Tc(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=V.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(e));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":e?.["@id"]};let l=[];for(let u of Object.keys(o))l.push(o?.[u]),s.includes(u)?a=i.setValue(a,u,o[u]):a=V.addAdditionalProperty(a,u,o[u]);let d=V.getValue(a,"name")+" "+l.join(" ");a=V.setValue(a,"name",d),e=V.addValue(e,"hasVariant",a)}return e}function Tc(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],o=[];for(let a of r)for(let l of s)o.push({...a,[n]:l});return o},[{}])}var Ct=class extends V{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return to(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function to(e){if(Array.isArray(e))return e.map(r=>to(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var le=class extends O{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new se(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=Ge(this.record,"WPHeader"),J(this.record,"WPHeader")}set WPHeader(t){this.record=z(this.record,"WPHeader",t)}get WPFooter(){return this.record=Ge(this.record,"WPFooter"),J(this.record,"WPFooter")}set WPFooter(t){this.record=z(this.record,"WPFooter",t)}get WPSideBar(){return this.record=Ge(this.record,"WPSideBar"),J(this.record,"WPSideBar")}set WPSideBar(t){this.record=z(this.record,"WPSideBar",t)}get Table(){return J(this.record,"Table")}set Table(t){this.record=z(this.record,"Table",t)}addHeaderLink(t,r){this.record=ro(this.record,t,r)}addFooterLink(t,r){this.record=no(this.record,t,r)}domain(){return io(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=Nc(t,this.url)}static getWPHeader(t){return J(t,"WPHeader")}static getWPFooter(t){return J(t,"WPFooter")}static getWPSideBar(t){return J(t,"WPSideBar")}static getTable(t){return J(t,"Table")}static setWPHeader(t,r){return z(t,"WPHeader",r)}static setWPFooter(t,r){return z(t,"WPFooter",r)}static setWPSideBar(t,r){return z(t,"WPSideBar",r)}static setTable(t,r){return z(t,"Table",r)}static addHeaderLink(t,r,n){return ro(t,r,n)}static addFooterLink(t,r,n){return no(t,r,n)}static getDomain(t){return io(i.getValue(t,"url")||t)}};function Ge(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function J(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function z(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function ro(e,t,r){e=Ge(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=z(e,"WPHeader",s),e}function no(e,t,r){e=Ge(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=z(e,"WPFooter",s),e}function io(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function Nc(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(Pc(e)=="Product"){let l=n.filter(b=>i.record_type(b)=="Product")[0];s.push({replacee:i.record_id(l),replacer:t+"#product"}),l=i.setValue(l,"url",t);let d=i.getValues(l,"brand");d=d.map(b=>b?.["@type"]?{"@type":"brand",name:b}:b),l=i.setValues(l,"brand",d);let u=n.filter(b=>i.record_type(b)=="Offer");u=u.map(b=>i.setValues(b,"itemOffered",i.ref(l))),l=i.setValues(l,"offers",u);let g=n.filter(b=>i.record_type(b)=="Review");u=u.map(b=>i.setValues(b,"itemReviewed",i.ref(l))),l=i.setValues(l,"review",g);let y=n.filter(b=>i.record_type(b)=="AggregateRating");return y=y.map(b=>i.setValues(b,"itemReviewed",i.ref(l))),l=i.setValues(l,"aggregateRating",y),l=i.replaceIds(l,s),l}return e}function Pc(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var vt=class extends le{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new le(this);return n.url=t,n.name=r,n}domain(){return so(this.url)}static getDomain(t){return so(i.getValue(t,"url")||t)}};function so(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var jt=class extends V{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var S={get:V.toThing,toThing:V.toThing,Action:ze,AddAction:bt,AppendAction:$t,BrandDesign:kt,Conversation:Tt,CreativeWork:O,DataFeed:Nt,DataFeedItem:Se,DeleteAction:Vt,InsertAction:At,ItemList:se,Message:U,Offer:oe,Product:ae,ProductGroup:Pt,PropertyValue:Ct,Thing:V,PrependAction:St,ReplaceAction:wt,UpdateAction:F,WebAPI:jt,WebPage:le,WebSite:vt,format:Zr,toThing:vc},Cc=S;function vc(e){let t=i.record_type(e);return S?.[t]?new S[t](e):new S.Thing(e)}var kn={};m(kn,{Button:()=>Rc,DropdownMenu:()=>oo,MenuItem:()=>Oc,escapeHtml:()=>Q});function Q(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Rc({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function Sn(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?Sn(n,s):`<input type="hidden" name="${Q(s)}" value="${Q(String(n))}">`}).join("")}function oo({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},g=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),y=e?`<span class="mr-2">${Q(e)}</span>${g}`:`${g}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let b=t.map(A=>{if(A.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let M=Sn(A.object),te=A.disabled?"disabled":"";return`
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
        ${y}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${b}
      </div>
    </details>
  `.trim()}function Oc(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=Sn(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${Q(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${Q(h.getName(item)||"")}
          </button>
        </form>`}var X={};m(X,{components:()=>p});var _n={};m(_n,{Accordion:()=>Dc});function Dc({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var In={};m(In,{Alert:()=>Bc});function Bc({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var Tn={};m(Tn,{Article:()=>Uc,ArticleBody:()=>Fc,ArticleCard:()=>zc,ArticleCardBody:()=>Gc,ArticleCardFooter:()=>Kc,ArticleCardHeader:()=>qc,ArticleCardMedia:()=>Xc,ArticleCardTitle:()=>Yc,ArticleCategory:()=>Mc,ArticleFooter:()=>Jc,ArticleHeader:()=>Hc,ArticleMedia:()=>Wc,ArticleSubTitle:()=>Lc,ArticleTitle:()=>Ec});function Uc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${t||""}"
    >
    
        ${e||""}
    
    </article>
    
    `}function Hc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <header 
        class="${t||""}"
    >
    
        ${e||""}
    
    </header>
    
    `}function Mc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${t||""}"
     >
        ${e||""}
     
     </p>

    `}function Ec(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${t||""}"
        >
            ${e||""}
        </h1>

    `}function Lc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${t||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${e||""}</span>

        </div>

    `}function Wc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${t||""}"
        >

            ${e||""}
        
        </div>

    `}function Fc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${t||""}"
        >
            ${e||""}
        </div>
    `}function Jc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="${t||""}"
        >
            
            ${e||""}

        </div>

    
    `}function zc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}

    </article>
    
    `}function qc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}
            
    </article>
    
    `}function Gc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <div class="p-5 ${t||""}">


            ${e||""}
            
    </div>
    
    `}function Kc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${t||""}">
          ${e||""}
    </div>
    
    `}function Yc(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${t||""}">


            ${e||""}
            
    </h3>
    
    `}function Xc(e,t){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${t||""}"
    >


            ${e||""}
            
    </div>
    
    `}var Nn={};m(Nn,{Badge:()=>Zc,Badges:()=>Qc});function Zc(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function Qc(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var Pn={};m(Pn,{Breadcrumb:()=>ef,BreadcrumbEllipsis:()=>rf,BreadcrumbItem:()=>uo,BreadcrumbLink:()=>co,BreadcrumbList:()=>lo,BreadcrumbMain:()=>ao,BreadcrumbPage:()=>tf,BreadcrumbSeparator:()=>fo});function ef({urls:e,titles:t,links:r}){let n=new S.ItemList(r);if(e)for(let a=0;a<e.length;a++){let l=t?.[a]||e[a].split("/")?.[e[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[a],name:l})}let s=n.items;return console.log("items",s),ao({children:lo({children:s.map(a=>uo({children:co({href:a?.url,children:a?.name})})).join(fo())})})}function ao({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function lo({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function uo({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function co({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function tf({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function fo({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function rf({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var Cn={};m(Cn,{Button:()=>nf});function nf({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.primary} ${a[r]||a.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var vn={};m(vn,{Card:()=>sf,CardBody:()=>lf,CardContent:()=>ff,CardDescription:()=>cf,CardFooter:()=>uf,CardHeader:()=>of,CardMain:()=>af,CardMedia:()=>pf,CardTitle:()=>df});function sf(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function of(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function af(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function lf(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function uf(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function df(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function cf(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function ff(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function pf(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var jn={};m(jn,{Dialog:()=>gf});function gf({id:e,title:t,description:r="",content:n,footer:s="",className:o=""}){return`
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
    `.trim()}var Rn={};m(Rn,{Footer:()=>mf});function mf({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
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
    `.trim()}var On={};m(On,{Header:()=>hf});function hf({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
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
    `.trim()}var Dn={};m(Dn,{H1:()=>yf,H2:()=>xf,H3:()=>bf,H4:()=>Vf,H5:()=>wf,H6:()=>Af,Heading:()=>ue,P:()=>$f,Text:()=>Sf});function yf(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function xf(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function bf(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function Vf(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function wf(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function Af(e,{options:t,record_id:r,propertyID:n,className:s}){return ue({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function ue({title:e,level:t,options:r,record_id:n,propertyID:s,className:o}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${e}</h${t}>
    
    `}function $f(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}function Sf(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}var Bn={};m(Bn,{Input:()=>H,InputCheckbox:()=>kf,InputDate:()=>_f,InputDateTime:()=>Tf,InputEmail:()=>Nf,InputNumber:()=>If,InputPassword:()=>Pf,InputTel:()=>Cf,InputText:()=>vf,InputTime:()=>jf,InputUrl:()=>Rf});function H({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:a=""}){let l=s?`id="${s}"`:"";return`
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
    `.trim()}function kf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function _f({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function If({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function Tf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function Nf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function Pf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function Cf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function vf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function jf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function Rf({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var Un={};m(Un,{Pagination:()=>Of,PaginationComponent:()=>go,PaginationContent:()=>mo,PaginationEllipsis:()=>xo,PaginationItem:()=>Ke,PaginationLink:()=>Rt,PaginationNext:()=>yo,PaginationPrevious:()=>ho,buildPaginationUrl:()=>po});function po(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function go({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function mo({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function Ke({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function Rt({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${d} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function ho({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Rt({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function yo({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return Rt({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function xo({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Of({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:a=""}={}){let l=Math.ceil(t/r)||1,d=Math.floor(n/r)+1,u=E=>{let L=(E-1)*r;return po(e,r,L)},g=(E,L)=>{let ne=L-E+1;return Array.from({length:ne},(Ye,Xe)=>E+Xe)},y=s+5,b=[];if(y>=l)b=g(1,l);else{let E=Math.max(d-s,1),L=Math.min(d+s,l),ne=E>2,Ye=L<l-2,Xe=1,Jo=l;if(!ne&&Ye){let _e=3+2*s;b=[...g(1,_e),"ellipsis",l]}else if(ne&&!Ye){let _e=3+2*s,ai=g(l-_e+1,l);b=[Xe,"ellipsis",...ai]}else if(ne&&Ye){let _e=g(E,L);b=[Xe,"ellipsis",..._e,"ellipsis",Jo]}}let A=[],M=d>1,te=M?u(d-1):"#";A.push(Ke({children:ho({href:te,disabled:!M})})),b.forEach(E=>{if(E==="ellipsis")A.push(Ke({children:xo()}));else{let L=Number(E),ne=L===d;A.push(Ke({children:Rt({href:u(L),isActive:ne,children:String(L)})}))}});let re=d<l,Ut=re?u(d+1):"#";A.push(Ke({children:yo({href:Ut,disabled:!re})}));let Ht=go({className:o,attrs:a,children:mo({children:A.join("")})});return Ht=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ht}
    </div>`,Ht}var Hn={};m(Hn,{Section:()=>Df,SectionHeader:()=>Bf});function Df({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=a[t]||a.default,u=l[r]!==void 0?l[r]:l.default,g=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${u} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${d} ${n}" ${o}>
      ${g}
    </section>
  `.trim()}function Bf({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var Mn={};m(Mn,{Table:()=>Hf,TableBody:()=>wo,TableCell:()=>q,TableCellCenter:()=>Ff,TableCellLeft:()=>Wf,TableCellLink:()=>zf,TableCellNumber:()=>Jf,TableCellRight:()=>$o,TableCellText:()=>qf,TableColumnHeader:()=>Vo,TableColumnHeaderCenter:()=>Lf,TableColumnHeaderLeft:()=>Mf,TableColumnHeaderRight:()=>Ef,TableFooter:()=>So,TableHeader:()=>bo,TableRow:()=>Ao,getTable:()=>Uf});function Uf({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${bo(e.map(n=>Vo(n)))}
      
        ${wo(t.map(n=>Ao(n.map(s=>q(s)))))}
        
        ${So()}

      </table>

    </div>
  
  
  `}function Hf(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function bo(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function Vo(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Mf(e,t){return q(e,t)}function Ef(e,t){return t=t+" text-right ",q(e,t)}function Lf(e,t){return t=t+" text-center ",q(e,t)}function wo(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Ao(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
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
  `}function Wf(e,t,r,n){return q(e,t,r,n)}function $o(e,t,r,n){return n=n+" text-right ",q(e,t,r,n)}function Ff(e,t,r,n){return n=n+" text-center ",q(e,t,r,n)}function Jf(e,t,r,n,s,o){return e=i.toNumber(e),e=c.number.format(e,t),$o(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function zf(e,t,r,n,s,o){return q(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function qf(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return q(s)}function So(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var En={};m(En,{Webpage:()=>Gf});function Gf({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:o}){return`
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
  `.trim()}var Ln={};m(Ln,{CardGrid:()=>Kf});function Kf({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var Wn={};m(Wn,{JsonEditor:()=>Xf});function ko({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function Yf({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
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
  `.trim()}function Xf({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let a=e.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),d=JSON.stringify(n,null,2),u=`
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
  `.trim(),g=`
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
            ${ko({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
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
        ${ko({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
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
  `.trim();return Yf({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:g,className:s,attrs:o})}var Fn={};m(Fn,{Modal:()=>Zf,ModalBody:()=>ep,ModalTrigger:()=>Qf});function Zf(e,t,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${e||""}
    </div>
    
    
    `}function Qf(e,t,r){return`
    
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
    
    `}function ep(e,t,r){return`
    
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
    
    
    `}var Jn={};m(Jn,{DropdownMenu:()=>rp,DropdownMenuIcon:()=>np,Menu:()=>tp,MenuItemLink:()=>ip,MenuItemPost:()=>sp,MenuItemSeparator:()=>op});function tp(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function rp(e,t,r){return`
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

    `}function np(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function ip(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function sp(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function op(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var zn={};m(zn,{Kanban:()=>ap,KanbanBody:()=>up,KanbanCard:()=>hp,KanbanCardBody:()=>xp,KanbanCardFooter:()=>bp,KanbanCardHeader:()=>yp,KanbanColumn:()=>fp,KanbanColumnBody:()=>gp,KanbanColumnFooter:()=>mp,KanbanColumnHeader:()=>pp,KanbanFooter:()=>dp,KanbanHeader:()=>lp,KanbanTitle:()=>cp});function ap(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function lp(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function up(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function dp(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function cp(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function fp(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function pp(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function gp(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function mp(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function hp(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function yp(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function xp(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function bp(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var qn={};m(qn,{StarRating:()=>Vp,StarRatingEmpty:()=>$p,StarRatingFull:()=>wp,StarRatingHalf:()=>Ap});function Vp(e,t){return`
    
    <div class="flex items-center space-x-1 ${t||""}">
        ${e||""}
    </div>
    
    `}function wp(e,t){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Ap(e,t){return`
    
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


    `}function $p(e,t){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var p={..._n,...In,...Tn,...Nn,...Pn,...Cn,...vn,...Ln,...jn,...kn,...Rn,...On,...zn,...Jn,...Fn,...Bn,...Wn,...Un,...Hn,...qn,...Mn,...Dn,...En};var Zn={};m(Zn,{Card:()=>Cp,Cards:()=>vp});var Xn={};m(Xn,{Media:()=>de,MediaImage:()=>No,MediaVideo:()=>To});var Dt={};m(Dt,{fixedLength:()=>Ot,textCenter:()=>Gn});function Ot(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let o=e.length;o==0&&(e=""),o==1&&(e=e[0]),o>1&&(e=`(${e.length})`)}let s=c.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=c.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=c.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let o="",a=Math.round(t/3),l=t-a-3;o+=e.slice(0,a),o+="...",o+=e.slice(-l),e=o}return t!=null&&(e=e.padEnd(t," ")),e}function Gn(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var Yn={};m(Yn,{toTextRecord:()=>Sp,toTextTable:()=>Ip});function Sp(e,t=80){let r=kp(e,t),n=_p(e),s="";s+=_o(r),s+=`
`,n.length>0?s+=n.map(o=>Io(o,r)).join(""):s+=`(no records)
`}function kp(e,t=80){let n=Kn(e).map(a=>(a||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function _p(e){let t=Kn(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:c.getValues(e,n)};r.push(s)}return r}function Ip(e,t,r=!0,n=80){t=Tp(e,t,r),e=Np(e,t,r);let s="";if(s+=_o(t),s+=`
`,e.length>0){let o=e.map(a=>Io(a,t));s+=o.join("")}else s+=Gn("(no records to display.)",n);return s}function Tp(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=Kn(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function Np(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function _o(e){let t="",r=[];for(let s of e){let o=`${Ot(s.title,s.width,s.rounding)}`;r.push(o)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return t+=n.join(" "),t+=`
`,t}function Io(e,t){let r="",n=[];for(let s of t){let o=i.getValues(e,s.propertyID),a=`${Ot(o,s.width,s.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function Kn(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=Pp(t),t}function Pp(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var lx={...Dt,...Yn};function de(e,t){if(!i.getValue(e,"contentUrl"))return"";let n="";return i.record_type(e)=="VideoObject"?To(e,t):No(e,t)}function To(e,t){let r=i.getValue(e,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function No(e,t){let r=i.getValue(e,"contentUrl");return r?p.Modal(p.ImageModal(r)):""}function ee({website:e,webpage:t,title:r,headContent:n,content:s,options:o}){t=new S.WebPage(t),e=new S.WebSite(e);let a={};a.title=r,a.title=a.title||i.getValue(t,"title"),a.title=a.title||i.getValue(t,"name"),a.title=a.title||i.getValue(e,"title"),a.title=a.title||i.getValue(e,"name"),a.headContent=n,a.breadcrumb=p.Breadcrumb({links:i.getValue(t,"breadcrumb")});let l=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),d=t.WPHeader.hasPart||[],u=t.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],u=Array.isArray(u)?u:[u],a.header=p.Header({brand:l,navItems:d}),a.footer=p.Footer({brand:l,navItems:u}),a.content=s,p.Webpage(a)}function Po({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:g,options:y}){return o=o??"",o+=N.Cards({url:n,records:a,offset:u,limit:g,nbOfColumns:3,options:y}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:y})}function Cp(e,t,r,n=!0){let s=S.format.getTitle1(e),o=S.format.getContent(e),a=i.getRecordUrl(e,t),l=n==!0?S.format.imageUrl(e):void 0;return p.Card({title:s,description:o,url:a,media:l,className:r})}function vp({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:a,includePagination:l,options:d,layoutClasses:u,className:g,attrs:y}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let b=new S.ItemList(t);b=b.record,b.numberOfItems=b?.numberOfItems??b.itemListElement.length,b=Bt({record:b,options:d}),b.itemListElement=b.itemListElement.filter(re=>i.getValue(re,"position")>=r&&i.getValue(re,"position")<r+n);let A="";for(let re of i.getValues(b,"itemListElement")){let Ut=i.getValue(re,"item");A+=jp({url:e,item:Ut,options:d})}A=p.CardGrid({content:A,nbOfColumns:a});let M=p.Pagination({url:e,limit:n,offset:r,total:b.numberOfItems,options:d});return`

        <div class="${u} ${g}" ${y}>
        <div class="flex-1">
            ${A}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${M}
        </div>
        </div>

    `}function jp({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),o=i.getValues(t,"keywords");o=o.map(u=>`<a href="/?keywords=${u}">${u}</a>`);let a=p.Badges({text:o,variant:"secondary"}),l={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:a,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:de({record:t,options:r})};return p.Card(l)}var Qn={};m(Qn,{Input:()=>Op});function Op({record:e,propertyID:t,value:r}){return p.Input({value:r})}var ti={};m(ti,{Table:()=>Dp,TableBody:()=>vo,TableCell:()=>Ro,TableHeader:()=>Co,TableRow:()=>jo,getDataType:()=>Oo,getHeadersFromProperties:()=>ei,getPropertiesFromRecords:()=>ke});function Dp(e,t,r,n,s,o){let a=e;r=r||ke(a),n=n||ei(r);let l=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),p.Table(Co(a,r,n,l)+vo(a,r,t,l))}function Co(e,t,r,n){return t=t||ke(e),r=r||ei(t),n=n||[],t=t||ke(e),p.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return p.TableColumnHeaderRight(s);default:return p.TableColumnHeader(s)}}).join(" "))}function vo(e,t,r,n){t=t||ke(e),n=n||[];let s=i.getValues(new S.ItemList(e),"itemListElement");return p.TableBody(s.map(o=>jo(o,t,r,n)).join(" "))}function jo(e,t,r,n){return t=t||ke(e),n=n||[],p.TableRow(t.map((a,l)=>Ro(e,i.getValues(e,a),a,r,n,l)).join(" "),i.record_id(e),void 0,"kr-listitem")}function Ro(e,t,r,n,s,o){let a=t,l=r,d=e;if(a=i.isArray(a)&&a.length==0?"":a,a=i.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let u=c.url.getUrl(n||"","/"+a);return p.TableCellLink(u,a)}if((l||"").endsWith("@id")){let u=i.getRecordUrl(d,n);return p.TableCellLink(u,a)}switch(s?.[o]||Oo(a)){case"array":return p.TableCellCenter(`(${a.length})`);case"text":return p.TableCellText(a);case"number":return p.TableCellNumber(a,2);case"link":return p.TableCellLink(a,a);case"thumbnail":return p.TableCell(de({record:a}));case"position":return p.TableCellNumber(a,0);case"object":return p.TableCellLink(i.getRecordUrl(a,n),i.record_id(a));default:return p.TableCellText(a)}}function ke(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function ei(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function Oo(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?c.isNumber(e)?"number":c.isUrl(e)?"link":c.isDate(e)?"date":c.isArray(e)?"array":c.isObject(e)?"object":"text":"text"}var ri={};m(ri,{Record:()=>Bp});function Bp(e,t,r,n="",s="",o=!1,a=0,l={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),l.baseUrl=t||l?.baseUrl;let d={rows:[]},u=Do({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${de({record:e,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${u||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${p.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function Do({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){t=t||Object.keys(e);let l=t.filter(y=>y.startsWith("@")),d=t.filter(y=>!y.startsWith("@"));t=l.sort().concat(d.sort());let u={rows:[]};return p.Table(p.TableHeader(p.TableRow(p.TableCellRight("")+p.TableCellRight(N.DropdownMenu(i.getPotentialActions(e)))))+p.TableBody(t.map(y=>p.TableRow([p.TableCell(y+":"),p.TableCell(Bo({record:e,propertyID:y,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))].join(" "))).join(" ")))}function Up({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t),d=[];for(let u of l){let g=i.clone(e);g=i.setValue(g,t,u),d.push(Bo({record:g,propertyID:t,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${d.map(u=>`
            <li>
              ${u}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Bo({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t);return i.isArray(l)&&l.length==1&&(l=l[0]),i.isArray(l)&&l.length==0?"":i.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${N.ValueArray(l,t,a?.baseUrl)}</summary>
      
                ${Up({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${N.ValueThing(l,t,a?.baseUrl)}</summary>
      
            ${Do({record:l,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":N.Value(l,t,a?.baseUrl)}var ni={};m(ni,{DropdownMenu:()=>Mp,Menu:()=>Hp});function Hp(e){return e=i.toArray(e),!e||e.length==0?"":p.DropdownMenu(p.DropdownMenuIcon(),e.map(t=>p.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function Mp(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>p.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return p.DropdownMenu(p.DropdownMenuIcon(),t)}var ii={};m(ii,{Kanban:()=>Ep,KanbanCard:()=>Ho,KanbanColumn:()=>Uo});function Ep(e,t){let r=i.getItems(e);return p.Kanban(p.KanbanHeader(p.KanbanTitle("Awesome Kanban","Fuck yeah"))+p.KanbanBody(propertyValues.map(n=>Uo(e,t,n)).join(" "))+p.KanbanFooter(""))}function Uo(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),p.KanbanColumn(p.KanbanColumnHeader(r)+p.KanbanColumnBody(n.map(s=>Ho(s)).join(" "))+p.KanbanColumnFooter())}function Ho(e){return p.KanbanCard(p.KanbanCardHeader("xx")+p.KanbanCardBody(N.Value(i.getName(e),"name"))+p.KanbanCardFooter(N.Value(i.getActionStatus(e),"actionStatus")))}var N={...Zn,...Qn,...Xn,...ri,...ti,...ni,...Ar,...ii};function Bt({record:e,options:t}){if(i.isArray(e))return e.map(o=>Bt({record:o,options:t}));let r=i.record_type(e);if(!r)return e;let n=c.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let o of Object.keys(e?.record||e))e=i.setValues(e,o,Bt({record:i.getValues(e,o),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function Mo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:g,options:y}){return o=o??"",o+=N.Table({url:n,records:a,properties:l,headers:d,offset:u,limit:g,options:y}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:y})}function Eo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,record:a,properties:l,headers:d,options:u}){return o=o??"",o+=N.Record({url:n,record:a,options:u}),ee({website:e,webpage:t,title:r,headContent:s,content:o,options:u})}var Lo={blankPage:ee,recordsPage:Mo,recordPage:Eo,cardsPage:Po};var Wo={blocks:N,...Lo,components:X,...X};var si={};m(si,{getParsedRequest:()=>Lp});function Lp(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var Fo={shadcn:Wo,express:si};var oi={...i,...$n,html:Fo},dV=oi,cV=oi,fV=oi;export{oi as _h,fV as default,dV as h,cV as helpers};
//# sourceMappingURL=jsonldCore.js.map
