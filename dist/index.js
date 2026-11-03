var hl=Object.defineProperty;var y=(t,e)=>{for(var r in e)hl(t,r,{get:e[r],enumerable:!0})};var ke={get:Le,set:wt,flatten:ml,expand:yl};function Le(t,e){if(!e||typeof e!="string")return;let r=cs(e),n=t;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function wt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=cs(e);if(n.length==0)return r;let s=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let l=t;for(let u=0;u<n.length-1;u++){let d=n[u],c=n[u+1],f=!isNaN(c);f==!0&&(l[d]=Array.isArray(l[d])?l[d]:[l[d]],l=l?.[d]),f==!1&&(l[d]=l?.[d]||{},l=Array.isArray(l?.[d])?l?.[d][0]:l?.[d])}return l[n[n.length-1]]=r,t}function ml(t){function e(s,l){let u=[];return Array.isArray(l)?(s=s||"",l.map((c,f)=>e(`${s}[${String(f)}]`,c)).flat()):l?.["@type"]||l?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(l).map(c=>e(`${s}${c}`,l[c])).flat()):[{propertyID:s,value:l}]}let r=e("",t),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function yl(t){let e={};return Object.keys(t).forEach(r=>wt(e,r,t?.[r])),e}function cs(t){let e=[],r="",n=["[","]","."];for(let s of t)if(n.includes(s)){r!=""&&e.push(r),r="";continue}else r=r+s;return e.push(r),e=e.filter(s=>s!=""),e=e.map(s=>isNaN(Number(s))?s:Number(s)),e}var Pr={};y(Pr,{eq:()=>_l,ge:()=>Tl,getDiff:()=>ps,getHash:()=>fs,getHashNested:()=>Nl,gt:()=>kl,isEqual:()=>Sl,isSame:()=>Al,le:()=>$l,lt:()=>Il});var At={};y(At,{expand:()=>xl,flatten:()=>Vl,getChildren:()=>wl,handleRelationships:()=>Tr,simplify:()=>Nr,strip:()=>kr});function xl(t,e,r=!0){let n=i._storeToMap(t),s=new Map;function l(u){if(!u||typeof u!="object")return u;if(Array.isArray(u))return u.map(m=>l(m));let d=i.record_id(u);if(d&&s.has(d)){let m=s.get(d);return r?m:i.ref?i.ref(m):{"@id":d}}let f=(d&&n instanceof Map?n.get(d):null)||u,p=Array.isArray(f)?[...f]:{...f};d&&s.set(d,p);for(let m of Object.keys(p))m==="previousItem"||m==="nextItem"||(p[m]=l(p[m]));return p}return typeof e=="string"&&(e={"@id":e}),l(e)}function kr(t){function e(r,n,s){if(Array.isArray(r))return r.map(l=>e(l,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let l={};for(let u of Object.keys(r).sort())l[u]=e(r?.[u],n,s+1);return l}}return r}return e(t,0,0)}function Vl(t){function e(n){let s=[];if(!n)return[];if(i.isArray(n)){let l=[];for(let u of n)l=l.concat(e(u));return l}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let l of Object.keys(n)){if(l=="@id")continue;if(l=="previousItem"){n[l]=i.ref(n?.[l]);continue}if(l=="nextItem"){n[l]=i.ref(n?.[l]);continue}let u=n[l];u=i.toArray(u),n[l]=[];for(let d of u)d?.["@id"]?n[l].push({"@id":d?.["@id"]}):n[l].push(d),s=s.concat(e(d))}return s=[n].concat(s),s}t=i.clone(t),t=i.setTempID(t),t=Tr(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Tr(t){if(i.isArray(t))return t.map(r=>Tr(r));let e=t;if(i.record_type(e)=="Product"){let r=i.getValues(e,"offers");r=r.map(l=>i.insertValue(l,"itemOffered",i.ref(e))),e=i.setValues(e,"offers",r);let n=i.getValues(e,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}if(i.record_type(e)=="Offer"){let r=i.getValues(e,"itemOffered");r=r.map(l=>i.insertValue(l,"offers",i.ref(e))),e=i.setValues(e,"itemOffered",r);let n=i.getValues(e,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}return e}function Nr(t){function e(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(l=>e(l,s)),n=n.filter(l=>l!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let l={};for(let u of Object.keys(n)){let d=e(n?.[u],s);u=="itemListElement"&&(d=i.toArray(d)),d!==void 0&&(l[u]=d)}return l["@id"]=i.toArray(l?.["@id"])?.[0],l}return n}}return t=i.clone(t),e(t)}function wl(t){function e(r,n){if(i.isArray(r)){let l=[];for(let u of r){let d=e(u,n);l=l.concat(d)}return l}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let l of Object.keys(r))s=s.concat(e(r[l],n+1));return s=s.filter(l=>l),s}return e(t,0)}function Al(t,e){if(t=i.record_id(t)??t,e=i.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function _l(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=i.clean(t),e=i.clean(e),t=i.strip(t),e=i.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function Sl(t,e){let r=(s,l)=>l instanceof Object&&!(l instanceof Array)?Object.keys(l).sort().reduce((u,d)=>(u[d]=l[d],u),{}):l;try{t=i.JSON_stringify(t)}catch{}try{e=i.JSON_stringify(e)}catch{}return t==e}function Il(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function $l(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function kl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function Tl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function fs(t,e=!1){t=Nr(t),e==!1&&(t=kr(t));let r=d=>d&&typeof d=="object"&&!Array.isArray(d)?Object.keys(d).sort().reduce((c,f)=>({...c,[f]:r(d[f])}),{}):Array.isArray(d)?d.map(r):d,n=JSON.stringify(r(t)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let l=5381,u=n.length;for(;u;)l=l*33^n.charCodeAt(--u);return(l>>>0).toString(16)}function Nl(t){return fs(t,!0)}function ps(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let s=ps(t[n],e[n]);s!==null&&(r[n]=s)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var jr={};y(jr,{evaluate:()=>Dr});function Dr(t,e){let r=[];for(let s of Object.keys(e)){let l=s,u=e?.[s];if(u=i.toArray(u),l=="$and")return u.every(d=>Dr(t,d));if(l=="$or")return u.some(d=>Dr(t,d));for(let d of u){let c=Dl(t,l,d);r.push(c)}}return r.every(s=>Pl(s.r,s.p,s.o,s.v))}function Pl(t,e,r,n){try{let s=ke.get(t,e);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Dl(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var ln={};y(ln,{assignId:()=>pu,getGenericRecordID:()=>fu,normalizeRecordId:()=>du,replaceIds:()=>Ts,setTempID:()=>ks});var ae={};y(ae,{default:()=>au,get:()=>ee,getGenericRecordID:()=>Qe,getStandardID:()=>Nt,recordIdHelpers:()=>Tt,set:()=>$t,validate:()=>Ze});var Rr={};y(Rr,{clean:()=>jl,isArray:()=>me,isNotArray:()=>Cr,isValid:()=>Cl,toArray:()=>_t});function jl(t){return _t(t)}function Cl(t){return me(t)}function me(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function Cr(t){return!me(t)}function _t(t){return t==null?[]:(t=me(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var Ur={};y(Ur,{clean:()=>vr,format:()=>vl,formatDate:()=>gs,isDate:()=>Q,isNotDate:()=>Or,isValid:()=>Rl,toDate:()=>Te});function vr(t,e=void 0){return Te(t)||e}function Rl(t){return Q(t)}function vl(t,e=!1){return gs(t,e)}function Q(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Or(t){return!Q(t)}function Te(t){if(t===void 0)return;if(Q(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=Q(t)?t:void 0,t}function gs(t,e=!1){if(console.log("vv",t,Te(t)),t=Te(t),Q(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),u=`${n}-${s}-${l}`;if(e==!0){let d=String(r.getHours()).padStart(2,0),c=String(r.getMinutes()).padStart(2,0),f=String(r.getSeconds()).padStart(2,0);u=u+` ${d}:${c}:${f}`}return u}var Hr={};y(Hr,{clean:()=>Ol,isNotNull:()=>Br,isNull:()=>Pe,isValid:()=>Ul});function Ol(t,e=void 0){}function Ul(t){return Pe(t)}function Br(t){return!Pe(t)}function Pe(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||Ne.array.isValid(t)?t.length==0:t instanceof Date?Ne.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Er={};y(Er,{clean:()=>Fr,format:()=>Hl,formatDecimals:()=>hs,isNotNumber:()=>Mr,isNumber:()=>We,isValid:()=>Bl,toNumber:()=>St});function Fr(t,e=void 0){return St(t)??e}function Bl(t){return We(t)}function Hl(t,e){return hs(t,e)}function hs(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function We(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function Mr(t){return!We(t)}function St(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Wr={};y(Wr,{clean:()=>Fl,cleanObject:()=>Je,isNotObject:()=>Lr,isObject:()=>ze,isValid:()=>Ml});function Fl(t,e=void 0){return Je(t)||e}function Ml(t){return ze(t)}function ze(t){return typeof t!="object"||t===null||Array.isArray(t)||t===void 0||g.isString(t)==!0||g.isDate(t)==!0||g.isNumber(t)==!0||g.isArray(t)==!0?!1:Object.keys(t).length>0}function Lr(t){return!ze(t)}function Je(t){if(g.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],Je(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(Je(x));e=e.filter(r=>g.isNotNull(r))}}if(g.object.isValid(t))for(let e of Object.keys(t))t[e]=Je(t[e]),Ne.isNull(t[e])&&delete t[e];return Ne.isNotNull(t)?t:void 0}var qr={};y(qr,{clean:()=>El,cleanString:()=>ms,isNotString:()=>Jr,isString:()=>De,isValid:()=>Ll,maxLengthEnd:()=>Jl,maxLengthMiddle:()=>Wl,toString:()=>zr});function El(t,e=""){return ms(t)||e}function Ll(t){return De(t)&&t.trim().length>=0}function Wl(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),s=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Jl(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function De(t){return typeof t=="string"||t instanceof String}function Jr(t){return!De(t)}function zr(t){return t==null?"":String(t)}function ms(t){return De(t)?t.trim():void 0}var Xr={};y(Xr,{clean:()=>ys,cleanUrl:()=>xs,getDomain:()=>zl,getParams:()=>ql,getPath:()=>ws,getUrl:()=>bs,isNotUrl:()=>Yr,isUrl:()=>qe,isValid:()=>Gr,setParams:()=>Vs,setPath:()=>As,toUrl:()=>Kr});function Gr(t){return qe(t)}function ys(t,e=void 0){return xs(t)??e}function Kr(t,e,r,n=void 0){return bs(t,e,r)||n}function bs(t,e,r){let n=As(t,e);return r&&(n=Vs(n,r)),n}function qe(t){return t=ys(t),!!t}function Yr(t){return!qe(t)}function xs(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:l=!1,allowedQueryParams:u=[]}=e;try{let d=new URL(t);d.protocol=d.protocol.toLowerCase(),d.hostname=d.hostname.toLowerCase(),n&&d.hostname.startsWith("www.")&&(d.hostname=d.hostname.slice(4)),(d.protocol==="http:"&&d.port==="80"||d.protocol==="https:"&&d.port==="443")&&(d.port="");let c=d.pathname;if(c=c.replace(/\/+/g,"/"),l&&(c=c.toLowerCase()),s&&c.length>1&&c.endsWith("/")&&(c=c.slice(0,-1)),d.pathname=c,r){let f=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],p=Array.from(d.searchParams.keys());for(let m of p){let w=f.some(J=>m.toLowerCase().startsWith(J)),$=u.includes(m);w&&!$&&d.searchParams.delete(m)}}return d.searchParams.sort(),d.toString()}catch{return}}function zl(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function ql(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function Vs(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function ws(t){try{return new URL(t).pathname}catch{return}}function As(t,e){e=e??"";let r=[],n=ws(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let l of e)r=r.concat(l.split("/"));r=r.filter(l=>l!="");let s="/"+r.join("/");try{return new URL(s,t).toString()}catch(l){console.log(l,s,t);return}}var en={};y(en,{clean:()=>Gl,format:()=>Yl,isDuration:()=>je,isNotDuration:()=>Zr,isValid:()=>Kl,toDuration:()=>Qr});function Gl(t,e=void 0){return toDate(t)||e}function Kl(t){return je(t)}function Yl(t){return Zl(t)}function je(t){return Xl(t)}function Zr(t){return!je(t)}function Qr(t){return t}function Xl(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function Zl(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,s,l,u,d,c,f,p]=r.map($=>parseInt($,10)||0),m=[c,f,p].map($=>String($).padStart(2,"0")).join(":"),w=[];return s&&w.push(`${s}y`),l&&w.push(`${l}m`),u&&w.push(`${u}w`),d&&w.push(`${d}d`),w.length>0?`${w.join(" ")} ${m}`:m}var rn={};y(rn,{clean:()=>Ql,format:()=>tu,isBoolean:()=>Ge,isNotBoolean:()=>tn,isValid:()=>eu,toBoolean:()=>Ke,toString:()=>ru});function Ql(t){return Ke(t)}function eu(t){return Ge(t)}function tu(t){return Ke(t)}function ru(t){return String(t)}function Ge(t){return typeof t=="boolean"}function tn(t){return typeof t!="boolean"}function Ke(t){if(Ge(t))return t;if(typeof t=="string"){if(t.toLowerCase()=="true")return!0;if(t.toLowerCase()=="false")return!1}if(!isNaN(t)){if(t==0)return!1;if(valeu==1)return!0}}var on={};y(on,{clean:()=>nu,format:()=>su,fromJson:()=>sn,isJson:()=>Ye,isNotJson:()=>nn,isValid:()=>iu,toJson:()=>Xe});function nu(t){return Xe(t)}function iu(t){return Ye(t)}function su(t){return Xe(t)}function Ye(t){if(!t)return!1;if(typeof t=="string"){try{if(JSON.parse(t))return!0}catch{}return!1}}function nn(t){return!Ye(t)}function Xe(t){let e=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(t,e(),4)}catch{}}function sn(t){try{return JSON.parse(t)}catch{}}var g={isNull:Pe,isNotNull:Br,isArray:me,isNotArray:Cr,toArray:_t,isDate:Q,isNotDate:Or,toDate:Te,isDuration:je,isNotDuration:Zr,toDuration:Qr,isObject:ze,isNotObject:Lr,isNumber:We,isNotNumber:Mr,toNumber:St,isString:De,isNotString:Jr,toString:zr,isUrl:qe,isNotUrl:Yr,toUrl:Kr,isBoolean:Ge,isNotBoolean:tn,toBoolean:Ke,isJson:Ye,isNotJson:nn,toJson:Xe,fromJson:sn,array:Rr,boolean:rn,date:Ur,duration:en,json:on,null:Hr,number:Er,object:Wr,string:qr,url:Xr,getDataType:_s,getType:_s,getJsonSchema:ou},Ne=g;function _s(t){if(Pe(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(me(t))return"Array";if(Q(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(Gr(t))return"URL";if(vr(t))return"DateTime";if(je(t))return"Duration";if(Fr(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function ou(t){function e(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),g.isString(r))return s.type="string",s;if(g.isObject(r)){s.type="object",s.properties={};for(let l of Object.keys(r))s.properties[l]=e(r[l],n+1);return s}if(g.isNumber(r))return s.type="number",s;if(g.isArray(r))return s.type="array",s.items=e(r?.[0],n+1),s}return e(t,0)}var sm=globalThis.crypto.randomUUID,Tt={get:ee,set:$t,validate:Ze,getGenericRecordID:Qe,getStandardID:Nt},au=Tt,It={website:"domain",webpage:"url",offer:"url",brand:"domain"};function ee(t,e){if(!t||!t?.["@type"])return;let r=Ss(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=It?.[n];if(s=="url")return Is(n,kt(t));if(s=="domain")return $s(n,kt(t))}return Qe(e)}function Nt(t,e){if(!t||!t?.["@type"])return;let r=Ss(t);for(let n of r){let s=It?.[n];if(s=="url")return Is(n,kt(t));if(s=="domain")return $s(n,kt(t))}}function $t(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>$t(r,e));if(t?.["@type"]||t?.["@id"]){Ze(t)==!1&&(t["@id"]=ee(t,e));for(let r of Object.keys(t))t[r]=$t(t?.[r],e)}return t}function Ze(t,e){let r=t?.["@id"];return r?lu(t)?getStandardizedRecordId(t,e)==r:an(t?.["@id"],e)==r:!1}function lu(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(It?.[r])return It?.[r]}function Ss(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function kt(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function Qe(t){return t=an(t),t?(t.endsWith("/")||(t=t+"/"),an(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Is(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>g.url.clean(s)),e=e.filter(s=>s);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function $s(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>uu(s)),e=e.map(s=>"https://"+s),e=e.filter(s=>s);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function uu(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function an(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!t.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function du(t,e){t=ks(t);let r=cu(t,e);return Ts(t,r)}function cu(t,e){function r(s,l){if(l=l||"https://www.test.com/",i.isArray(s)){let d=[];for(let c of s)d=d.concat(r(c));return d}if(i.isObject(s)==!1)return[];let u=[{replacee:i.record_id(s),replacer:ee(s,l)}];for(let d of Object.keys(s))u=u.concat(r(s[d],l));return u}let n=r(t,e);return n=n.filter(s=>s),n}function ks(t){if(Array.isArray(t))return t.map(e=>i.assignId(e));if(i.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+i.randomUUID();for(let e of Object.keys(t))t[e]=i.assignId(t[e]);return t}function fu(t){return Qe(t)}function pu(t,e=[]){if(i.isArray(t))return t.map(r=>i.assignId(r,e));if(i.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+i.randomUUID(),t[r]=i.assignId(t[r],e);return t}function Ts(t,e){function r(n,s){if(Array.isArray(n))return n.map(d=>i.replaceIds(d,s));if(!n?.["@id"])return n;let l=n?.["@id"],u=s.get(l);u&&(n["@id"]=u);for(let d of Object.keys(n))n[d]=i.replaceIds(n?.[d],s);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(s=>n.set(s.replacee,s.replacer)),e=n}return r(t,e)}var cn={};y(cn,{DB:()=>dn,_storeToMap:()=>tt,_storeToOriginal:()=>bu,getRecord:()=>et,getRecords:()=>Ce,patchRecord:()=>Bs,postRecord:()=>Us});var un={};y(un,{Value:()=>gu,ValueArray:()=>Ds,ValueDateTime:()=>Cs,ValueDuration:()=>hu,ValueMonetaryAmount:()=>mu,ValueNumber:()=>Rs,ValueRecordId:()=>Ns,ValueRecordType:()=>Ps,ValueText:()=>vs,ValueThing:()=>Os,ValueUrl:()=>js});function gu(t,e,r){return!t&&t!==0?"":i.isArray(t)?Ds(t,e,r):e=="@type"?Ps(t,e,r):e=="@id"?Ns(t,e,r):i.isObject(t)?Os(t,e,r):i.isNumber(t)?Rs(t,e,r):i.isDate(t)?Cs(t,e,r):g.isUrl(t)?js(t,e,r):vs(t,e,r)}function Ns(t,e,r){let n=i.getRecordUrl({"@id":t},r),s=`<a title="${t}" href="${n}">${t}</a>`;return te(s,e)}function Ps(t,e,r){let n=g.url.getUrl(r,t),s=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return te(s,e)}function Ds(t,e,r){let n=t.length>0?`(${t.length})`:"";return te(n,e)}function js(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return te(n,e)}function Cs(t,e,r){t=i.toDate(t);let n=g.date.format(t);return te(n,e)}function hu(t,e,r){return g.duration.format(pv.value)}function Rs(t,e,r){let n=e=="position"?0:2;return t=i.toNumber(t),t=g.number.format(t,n),te(t,e)}function vs(t,e,r){return te(t,e)}function Os(t,e,r){let n=i.getRecordUrl(t,r),s=i.getName(t)||i.record_id(t);i.record_type(t)=="ListItem"&&(s=`ListItem ${i.getPosition(t)} - ${i.getValue(t,"item.name")||i.getValue(t,"@id")}`);let l=`<a title="${s}" href="${n}">${s}</a>`;return te(l,e)}function mu(t,e,r){let n=g.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=g.number.format(n,2),l=i.getValue(record,"currency");return l=(l||"").toUpperCase(),pv.htmlValue=l+" $"+s,l=="USD"&&(pv.htmlValue=l+" $"+s),l=="CAD"&&(pv.htmlValue=l+" $"+s),l=="EUR"&&(pv.htmlValue=l+" "+s+" \u20AC"),l=="GBP"&&(pv.htmlValue=l+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",te(pv,e)}function te(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var dn=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,et(this._store,e,r)}getAll(e=!0){return Ce(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||i.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return Ce(this._store,e,r)}set(e){let r=i.flatten(e),n=r.map(s=>et(this._store,i.record_id(s),!1));for(let s of r)this._store=Us(this._store,s);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=i.flatten(e),s=n.map(l=>et(this._store,i.record_id(l),!1));for(let l of n)this._store=Bs(this._store,l,r);return this._broadcastIfChanged(s,n),e}delete(e){let r=[this.get(e)];this._store=i.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,s){let l=this.get(e);return i.getValue(l,r,n,s)}getValues(e,r,n){let s=this.get(e);return i.getValues(s,r,n)}setValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return Ce(this._store)}getRecords(e=!1){return Ce(this._store,void 0,!1)}get record_ids(){return yu(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=i.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=i.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let s=this.get(e);return!s||i.isRef(s)?n:s}updateRefs(e,r={},n={}){if(!e)return e;if(i.isArray(e))return e.map(s=>this.updateRefs(s,r,n));if(i.isObject(e)){if(i.isRef(e)){if(r?.[i.record_id(e)])return r[i.record_id(e)];e=this.get(e,!0)||e,r[i.record_id(e)]=e}else{if(n?.[i.record_id(e)])return e;n[i.record_id(e)]=e}for(let s of Object.keys(e))["previousItem","nextItem"].includes(s)||(e[s]=this.updateRefs(e[s],r,n));return e}return e}execute(e){let r=i.toArray(e);r=r.map(l=>this.updateRefs(l));let n=new i.DB;n.set(r);let s=[];for(let l of r){l=n.get(l),l=i.execute(l),s.push(l);let u=i.getValues(l,"hasPart");for(let d of u){let c=i.list.toItemList(d);i.list.getItems(c).forEach(p=>n.set(i.getResults(p)))}n.set(i.getResults(l))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(s=>s!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let s of r){let l=e.find(u=>i.record_id(u)==i.record_id(s));i.isEqual(l,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(e){e=i.toArray(e),e=i.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let l of s)this._broadcastItem(l,n)}}async _broadcastItem(e,r){try{return e(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(e,r){return i.clean(e,r)}static flatten(e){return i.flatten(e)}static getValue(e,r,n,s){return i.getValue(e,r,n,s)}static getValues(e,r,n){return i.getValues(e,r,n)}static setValue(e,r,n,s){return i.setValue(e,r,n,s)}static setValues(e,r,n){return i.setValues(e,r,n)}static addValue(e,r,n){return i.addValue(e,r,n)}static addValues(e,r,n){return i.addValues(e,r,n)}static strip(e){return i.strip(e)}static get dot(){return ke}static ref(e){return i.ref(e)}static simplify(e){return i.simplify(e)}static isJsonld(e){return i.isJsonld(e)}static isValid(e){return i.isValid(e)}static isArray(e){return i.isArray(e)}static setAdditionalProperty(e,r,n,s){return i.setAdditionalProperty(e,r,n,s)}static getAdditionalProperty(e,r){return i.getAdditionalProperty(e,r)}};function Us(t,e){if(!e)return;e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let r=tt(t);for(let n of e)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return t=i._storeToOriginal(r),t}function Bs(t,e,r=!0){e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let n=tt(t);for(let s of e){let l=n.get(i.record_id(s));s=i.patch(l,s),n.set(i.record_id(s),s)}return t=i._storeToOriginal(n),t}function et(t,e,r=!0){if(i.isArray(e))return e.map(u=>et(t,u,r));let n=i._utilGetId(e),s=tt(t),l=s.get(n);return r==!0&&(l=i.expand(s,l)),l=i.clone(l),l}function Ce(t,e,r=!0){let n=tt(t),s=Array.from(n.values());return e&&(s=s.filter(l=>i.evaluate(l,e))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function yu(t){return Ce(t).map(n=>i.record_id(n))}function tt(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=i.toArray(t),t=t.filter(r=>i.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=i.record_id(r);n&&(e.has(n)&&(r=i.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function bu(t){return t=Array.from(t.values()),t}var pn={};y(pn,{JSON_parse:()=>wu,JSON_stringify:()=>Ls,clean:()=>Fs,clone:()=>Ws,contractAtValue:()=>Pt,expandAtValue:()=>Au,getRecordUrl:()=>Iu,isJsonld:()=>Hs,isValid:()=>xu,merge:()=>_u,patch:()=>Su,removeCircularRefs:()=>Ms,sortedReplacer:()=>Es,stringify:()=>Vu});function xu(t){return Hs(t)}function Hs(t){return t?.["@type"]||t?.["@id"]}function Fs(t,e){if(Array.isArray(t)&&t.length>1)return t.map(s=>Fs(s,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Ws(t)}catch{}t=setTempID(t);let r=i.flatten(t);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Ze(s)==!0)continue;let l=Nt(s,e);if(l&&s?.["@id"]!=l){let u={replacer:l,replacee:s?.["@id"]};n.push(u)}if(!l&&s?.["@id"].startsWith("_:")){let u={replacer:i.getGenericRecordID(e),replacee:s?.["@id"]};n.push(u)}}return t=i.replaceIds(t,n),t}function Ms(t){return fn(t,new Set)}function fn(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(i.isArray(t))return t.map(n=>fn(n,e));if(!i.isObject(t))return t;let r=i.record_id(t);if(e.has(r))return i.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=fn(t[n],e);return t}function Es(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function Ls(t){return t=Ms(t),JSON.stringify(t,Es,4)}function Vu(t){return Ls(t)}function wu(t){return JSON.parse(t)}function Au(t){function e(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,e(s,!0));if(i.isArray(r))return r.map(l=>e(l,n));if(i.isJsonld(r)){for(let l of Object.keys(r?.record||r))r=i.setValues(r,l,e(i.getValues(r,l),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function Pt(t){let e=i.getAtValue(t);if(e&&e.length>0)return Pt(i.getAtValue(t));if(i.isArray(t))return t.map(r=>Pt(r));if(i.isJsonld(t)){for(let r of Object.keys(t?.record||t))i.setValues(t,r,Pt(i.getValues(t,r)));return t}return t}function Ws(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function _u(t,e,r=!0){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let s={"@id":t?.["@id"]||e?.["@id"]};for(let l of n){if(l=="@id")continue;let u=i.toArray(t?.[l]||void 0),d=i.toArray(e?.[l]||void 0),c=u.concat(d);r==!0&&(c=i.dedupe(c)),s[l]=c}return s}function Su(t,e){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of i.keys(e)){let n=i.toArray(e?.[r]);t=i.setValues(t,r,n)}return t}function Iu(t,e){e=e?.baseUrl??e;try{return g.url.getUrl(e,encodeURIComponent(i.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var yn={};y(yn,{ID:()=>Lu,Id:()=>zu,Type:()=>ju,actionStatus:()=>od,addValue:()=>Ks,addValues:()=>Ys,contentUrl:()=>ud,description:()=>fd,email:()=>hd,getActionStatus:()=>ad,getAdditionalProperty:()=>rd,getAtValue:()=>id,getContentUrl:()=>dd,getDescription:()=>pd,getEmail:()=>md,getID:()=>Wu,getId:()=>qu,getImageName:()=>wc,getImageUrl:()=>Vc,getItem:()=>xd,getItemListElement:()=>Id,getItems:()=>Ad,getName:()=>Td,getNumberOfItems:()=>Dd,getObject:()=>Rd,getObjects:()=>Ud,getPosition:()=>Fd,getPotentialAction:()=>Ld,getPotentialActions:()=>zd,getRecordID:()=>Mu,getRecordId:()=>Bu,getRecordType:()=>Pu,getRecord_id:()=>vu,getRecord_type:()=>ku,getResult:()=>Kd,getResults:()=>Zd,getTargetCollection:()=>tc,getTargetCollections:()=>ic,getText:()=>ac,getType:()=>Cu,getUrl:()=>dc,getValue:()=>N,getValues:()=>mn,hasValue:()=>Xs,insertValue:()=>td,isActive:()=>pc,isCompleted:()=>gc,isFailed:()=>hc,isPotential:()=>fc,isRef:()=>Xu,item:()=>bd,itemListElement:()=>Sd,items:()=>wd,keys:()=>Qu,name:()=>kd,numberOfItems:()=>Pd,object:()=>Cd,objects:()=>Od,position:()=>Hd,potentialAction:()=>Ed,potentialActions:()=>Jd,properties:()=>hn,recordID:()=>Fu,recordId:()=>Uu,recordType:()=>Nu,record_id:()=>Js,record_type:()=>$u,ref:()=>Zu,result:()=>Gd,results:()=>Xd,setActionStatus:()=>ld,setActive:()=>yc,setAdditionalProperty:()=>nd,setAtValue:()=>sd,setCompleted:()=>bc,setContentUrl:()=>cd,setDescription:()=>gd,setEmail:()=>yd,setFailed:()=>xc,setID:()=>Ju,setId:()=>Gu,setIfNull:()=>ed,setItem:()=>Vd,setItemListElement:()=>$d,setItems:()=>_d,setName:()=>Nd,setNumberOfItems:()=>jd,setObject:()=>vd,setObjects:()=>Bd,setPosition:()=>Md,setPotential:()=>mc,setPotentialAction:()=>Wd,setPotentialActions:()=>qd,setRecordID:()=>Eu,setRecordId:()=>Hu,setRecordType:()=>Du,setRecord_id:()=>Ou,setRecord_type:()=>Tu,setResult:()=>Yd,setResults:()=>Qd,setTargetCollection:()=>rc,setTargetCollections:()=>sc,setText:()=>lc,setType:()=>Ru,setUrl:()=>cc,setValue:()=>U,setValueIfNull:()=>Gs,setValues:()=>nt,targetCollection:()=>ec,targetCollections:()=>nc,text:()=>oc,toRecordID:()=>zs,toRecordId:()=>Yu,toRecord_id:()=>rt,toRecord_ids:()=>Ku,toRef:()=>qs,url:()=>uc});var Re="en-CA";function $u(t){return N(t,"@type")}function ku(t){return N(t,"@type")}function Tu(t,e){return U(t,"@type",e)}function Nu(t){return N(t,"@type")}function Pu(t){return N(t,"@type")}function Du(t,e){return U(t,"@type",e)}function ju(t){return N(t,"@type")}function Cu(t){return N(t,"@type")}function Ru(t,e){return U(t,"@type",e)}function Js(t){return N(t,"@id")}function vu(t){return N(t,"@id")}function Ou(t,e){return U(t,"@id",e)}function Uu(t){return N(t,"@id")}function Bu(t){return N(t,"@id")}function Hu(t,e){return U(t,"@id",e)}function Fu(t){return N(t,"@id")}function Mu(t){return N(t,"@id")}function Eu(t,e){return U(t,"@id",e)}function Lu(t){return N(t,"@id")}function Wu(t){return N(t,"@id")}function Ju(t,e){return U(t,"@id",e)}function zu(t){return N(t,"@id")}function qu(t){return N(t,"@id")}function Gu(t,e){return U(t,"@id",e)}function rt(t){return i.isArray(t)?t.map(e=>rt(e)):typeof t=="string"?t:Js(t)}function Ku(t){return rt(t)}function zs(t){return rt(t)}function Yu(t){return rt(t)}function Xu(t){return!i.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function Zu(t){if(t?._isThingClass==!0)return t.ref;if(!t)return;let e=i._utilGetId(t);if(e)return{"@id":e}}function qs(t){return i.isArray(t)?t.map(e=>qs(e)):{"@id":zs(t)}}function Qu(t){return hn(t)}function hn(t){if(!t)return[];if(i.isArray(t)){let r=[];for(let n of t)r=r.concat(hn(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function N(t,e,r,n,s){let l=mn(t,e,n,s);return r=Number(r),isNaN(r)&&(r=0),l?.[r]??n}function U(t,e,r,n,s){if(n!==void 0){let l=i.getValues(t,e);for(;l.length-1<n;)l.push(null);l[n]=r,r=l}return nt(t,e,r,s)}function Gs(t,e,r,n,s){let l=N(t,e,n);return i.isNull(l)==!1?t:U(t,e,r,n,s)}function ed(t,e,r,n,s){return Gs(t,e,r,n,s)}function Ks(t,e,r){return Ys(t,e,r)}function Ys(t,e,r){return r=i.getValues(t,e).concat(r),nt(t,e,r)}function mn(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let s=e.split("."),l=t;for(let d=0;d<s.length;d++){let[c,f]=gn(s[d]);c&&(l=l?.[c],l=i.toArray(l)),l=l.filter(p=>p?.["@language"]==n||p?.["@language"]==Re||p?.["@language"]===void 0),l=l.map(p=>p?.["@value"]??p),l=i.toArray(l),l=l.map(p=>p?.[n]??p?.[Re]??p),l=i.toArray(l),d<s.length-1&&(l=l?.[f])}let u=i.toArray(l);return u.length==0&&r!==void 0?r:u}function nt(t,e,r,n){t=t?.record||t;let s=e.split("."),l=t||{};for(let c=0;c<s.length-1;c++){let[f,p]=gn(s[c]);l[f]=i.toArray(l?.[f]||[]);let m;for(l?.[f]?.[n]?(l[f][n]=i.toArray(l?.[f]?.[n]),m=l[f][n]):l?.[f]?.[Re]?(l[f][Re]=i.toArray(l?.[f]?.[Re]),m=l[f][Re]):(l[f]=i.toArray(l?.[f])||[],m=l[f]);m.length-1<p;)m.push({"@type":"Thing"});l=m?.[p]}let[u,d]=gn(s[s.length-1]);return l[u]=i.toArray(r),t}function td(t,e,r){return Xs(t,e,r)==!0?t:Ks(t,e,r)}function Xs(t,e,r){let n=mn(t,e);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function gn(t){if(t===void 0)return[void 0,0];let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function rd(t,e){let n=i.getValues(t,"additionalProperty").find(l=>i.getValue(l,"propertyID")==e);return i.getValue(n,"value")}function nd(t,e,r,n){let s=i.getValues(t,"additionalProperty");s=s.filter(u=>i.getValue(u,"propertyID")!=e);let l={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:e,value:r};return t=i.addValue(t,"additionalProperty",l),t}function id(t){return i.getValues(t,"@value")}function sd(t,e){return i.setValues(t,"@value",e)}function od(t){return i.getValue(t,"actionStatus")}function ad(t){return i.getValue(t,"actionStatus")}function ld(t,e){return i.setValue(t,"actionStatus",e)}function ud(t){return i.getValue(t,"contentUrl")}function dd(t){return i.getValue(t,"contentUrl")}function cd(t,e){return i.setValue(t,"contentUrl",e)}function fd(t){return i.getValue(t,"description")}function pd(t){return i.getValue(t,"description")}function gd(t,e){return i.setValue(t,"description",e)}function hd(t){return i.getValue(t,"email")}function md(t){return i.getValue(t,"email")}function yd(t,e){return i.setValue(t,"email",e)}function bd(t){return i.getValue(t,"item")}function xd(t){return i.getValue(t,"item")}function Vd(t,e){return i.setValue(t,"item",e)}function wd(t){return i.list.getItems(t)}function Ad(t){return i.list.getItems(t)}function _d(t,e){return i.list.setItems(t,e)}function Sd(t){return i.list.getItemListElement(t)}function Id(t){return i.list.getItemListElement(t)}function $d(t,e){return i.list.setItemListElement(t,e)}function kd(t){return i.getValue(t,"name")}function Td(t){return i.getValue(t,"name")}function Nd(t,e){return i.setValue(t,"name",e)}function Pd(t){return i.getValue(t,"numberOfItems")}function Dd(t){return i.getValue(t,"numberOfItems")}function jd(t,e){return i.setValue(t,"numberOfItems",e)}function Cd(t){return i.getValue(t,"object")}function Rd(t){return i.getValue(t,"object")}function vd(t,e){return U(t,"object",e)}function Od(t){return i.getValues(t,"object")}function Ud(t){return i.getValues(t,"object")}function Bd(t,e){return nt(t,"object",e)}function Hd(t){return i.list.getPosition(t)}function Fd(t){return i.list.getPosition(t)}function Md(t,e){return i.list.setPosition(t,e)}function Ed(t){return i.getValues(t,"potentialAction")}function Ld(t){return i.getValues(t,"potentialAction")}function Wd(t,e){return i.setValues(t,"potentialAction",e)}function Jd(t){return i.getValues(t,"potentialAction")}function zd(t){return i.getValues(t,"potentialAction")}function qd(t,e){return i.setValues(t,"potentialAction",e)}function Gd(t){return i.getValue(t,"result")}function Kd(t){return i.getValue(t,"result")}function Yd(t,e){return U(t,"result",e)}function Xd(t){return i.getValues(t,"result")}function Zd(t){return i.getValues(t,"result")}function Qd(t,e){return nt(t,"result",e)}function ec(t){return i.getValue(t,"targetCollection")}function tc(t){return i.getValue(t,"targetCollection")}function rc(t,e){return i.setValue(t,"targetCollection",e)}function nc(t){return i.getValues(t,"targetCollection")}function ic(t){return i.getValues(t,"targetCollection")}function sc(t,e){return i.setValues(t,"targetCollection",e)}function oc(t){return i.getValue(t,"text")}function ac(t){return i.getValue(t,"text")}function lc(t,e){return i.setValue(t,"text",e)}function uc(t){return i.getValue(t,"url")}function dc(t){return i.getValue(t,"url")}function cc(t,e){return i.setValue(t,"url",e)}function fc(t){return i.getValue(t,"actionStatus")=="PotentialActionStatus"}function pc(t){return i.getValue(t,"actionStatus")=="ActiveActionStatus"}function gc(t){return i.getValue(t,"actionStatus")=="CompletedActionStatus"}function hc(t){return i.getValue(t,"actionStatus")=="FailedActionStatus"}function mc(t){return t=i.setValue(t,"actionStatus","PotentialActionStatus"),t=i.setValue(t,"startTime",void 0),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function yc(t){return t=i.setValue(t,"actionStatus","ActiveActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function bc(t,e){return t=i.setValue(t,"actionStatus","CompletedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")||new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")||new Date().toISOString()),t=i.setValue(t,"error",void 0),i.isNotNull(e)&&(t=i.setValue(t,"result",e)),t}function xc(t,e){return t=i.setValue(t,"actionStatus","FailedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")??new Date().toISOString()),t=i.setValue(t,"error",String(e)),t=i.setValue(t,"result",void 0),t}function Vc(t){if(i.record_type(t)=="ImageObject")return i.getValue(t,"contentUrl");let e=i.getValue(t,"image.contentUrl");return e=e??i.getValue(t,"image.url"),e=e??i.getValue(t,"image"),e=typeof e=="string"?e:"",e}function wc(t){let e=i.getValue(t,"image.name");return e=e??i.getValue(t,"name"),e=e??i.record_id(t),e=typeof e=="string"?e:"",e}var xn={};y(xn,{_utilGetId:()=>vc,getDataType:()=>_c,isArray:()=>oo,isBoolean:()=>Zs,isDate:()=>ro,isJsonld:()=>so,isNotArray:()=>Cc,isNotBoolean:()=>Ic,isNotDate:()=>Pc,isNotNull:()=>Sc,isNotNumber:()=>kc,isNotObject:()=>Dc,isNotString:()=>Tc,isNull:()=>bn,isNumber:()=>Qs,isObject:()=>io,isString:()=>to,randomUUID:()=>Ac,toArray:()=>ao,toBoolean:()=>$c,toDate:()=>no,toNumber:()=>eo,toObject:()=>jc,toSingle:()=>Rc,toString:()=>Nc});function Ac(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function _c(t){if(bn(t))return"Undefined";if(oo(t))return"Array";if(so(t))return"Jsonld";let e=no(t);if(ro(e))return"Date";let r=eo(t);return Qs(r)?"Number":io(t)?"Object":to(t)?'String"':Zs(t)?"Boolean":"Undefined"}function bn(t){return g.isNull(t)}function Sc(t){return g.isNotNull(t)}function Zs(t){return g.isBoolean(t)}function Ic(t){return g.isNotBoolean(t)}function $c(t){return g.toBoolean(t)}function Qs(t){return g.isNumber(t)}function kc(t){return g.isNotNumber(t)}function eo(t){return g.toNumber(t)}function to(t){return g.isString(t)}function Tc(t){return g.isNotString(t)}function Nc(t){return g.toString(t)}function ro(t){return g.isDate(t)}function Pc(t){return g.isNotDate(t)}function no(t){return g.toDate(t)}function io(t){return g.isObject(t)}function Dc(t){return g.isNotObject(t)}function jc(t){return g.toObject(t)}function so(t){return bn(t)?!1:!!(t?.["@id"]||t?.["@type"])}function oo(t){return g.isArray(t)}function Cc(t){return g.isNotArray(t)}function ao(t){return g.toArray(t)}function Rc(t){return t=ao(t),t?.[0]??void 0}function vc(t){let e=t;if(e!==void 0&&e!==null)return i.isArray(e)&&e.length==1&&(e=e[0]),i.isString(e)?e:(e=i.record_id(e),e??void 0)}var Vn={};y(Vn,{concat:()=>Oc,dedupe:()=>lo,deleteItem:()=>Hc,diff:()=>Bc,filter:()=>Lc,find:()=>Ec,includes:()=>Dt,insertItem:()=>Fc,intersection:()=>Uc,length:()=>Mc,search:()=>co,sort:()=>ve,upsertItem:()=>uo});function lo(t,e=!0){if(t=i.toArray(t),t.length<2)return t;let r=[];for(let n of t)Dt(r,n)==!1&&(e==!0&&i.isValid(n)&&co(t,n).forEach(l=>n=i.merge(l,n)),r.push(n));return r=ve(r),r}function Dt(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e)==!0)return!0;return!1}function Oc(t,e,r=!0){t=i.toArray(t),e=i.toArray(e);let n=t.concat(e);return n=n.filter(s=>s!=null),r==!0&&(n=lo(n)),n=ve(n),n}function ve(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=i.toArray(t),t.length<2||(e==null?r==1?t.sort((n,s)=>i.lt(n,s)==!0?-1:1):t.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?t.sort((n,s)=>i.lt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1):t.sort((n,s)=>i.gt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1)),t}function Uc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Dt(e,n)==!0&&r.push(n);return r=ve(r),r}function Bc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Dt(e,n)==!1&&r.push(n);return r=ve(r),r}function Hc(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!1&&r.push(n);return r}function uo(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!0?r.push(e):r.push(n);return r}function Fc(t,e){return uo(t,e)}function Mc(t){return t=i.toArray(t),t.length}function Ec(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e))return r}function co(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)&&r.push(n);return r}function Lc(t,e,r,n,s,l){return t=i.toArray(t),t.length==0?itemList:(i.isNotNull(e)&&(t=t.filter(u=>i.evaluate(u,e))),t=ve(t,r,n),t.length==0||(l=i.toNumber(l),i.isNumber(l)&&(t=t.slice(l)),s=i.toNumber(s),i.isNumber(s)&&t.length>=s&&(t=slice(0,s))),t)}var wn={};y(wn,{exportToString:()=>fo});function fo(t){return Array.isArray(t)?Wc(t):i.record_type(t)=="ListItem"?Jc(t):i.record_type(t)=="ItemList"?zc(t):i.record_type(t)=="Action"?qc(t):i.getValue(t,"name")||i.getValue(t,"@id")}function Wc(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=fo(r)+`
`),e}function Jc(t){return`${i.getValue(t,"position")} - ${i.getValue(t,"item.name")||i.getValue(t,"item.@id")}`}function zc(t){let e=i.getValues(t,"itemListElement"),r=`ItemList${i.getValue(t,"name")||i.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function qc(t){return`${i.getValue(t,"name")||i.getValue(t,"@id")} - ${i.getValue(t,"actionStatus")}`}var _n={};y(_n,{DatabaseHelper:()=>An,testDB:()=>Gc});var An=class{constructor(e){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=i.toArray(e);r=r.map(l=>typeof l=="string"?{"@id":l}:l),i.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(e){let r=i.toArray(e);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(e){let r=i.toArray(e);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let n=i.toArray(this._retrieved);r=r.filter(l=>n.includes(l)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Gc(){}var jn={};y(jn,{add:()=>Qc,append:()=>it,clean:()=>Sn,decrementPositions:()=>Pn,duplicate:()=>af,ensurePositions:()=>Ue,ensurePreviousNextItem:()=>vt,filter:()=>lf,find:()=>G,findByItem:()=>In,findByListItem:()=>jt,findByPosition:()=>xo,getILE:()=>Zc,getItem:()=>at,getItemListElement:()=>T,getItems:()=>Vo,getListItems:()=>uf,getMaxPosition:()=>ot,getMinPosition:()=>Dn,getPosition:()=>P,gt:()=>bo,incrementPositions:()=>Nn,insert:()=>v,insertAfter:()=>Tn,insertBefore:()=>kn,isItemList:()=>R,isListItem:()=>Ct,length:()=>Xc,lt:()=>yo,move:()=>ef,moveAfter:()=>sf,moveBefore:()=>nf,moveDown:()=>rf,moveUp:()=>tf,prepend:()=>go,remove:()=>mo,replace:()=>ho,replaceItem:()=>cf,setItem:()=>Ao,setItemListElement:()=>B,setItems:()=>wo,setPosition:()=>Rt,sort:()=>st,toItemList:()=>Yc,toListItem:()=>Oe,toString:()=>Kc,toStringItemList:()=>po,toStringListItem:()=>$n,updateItem:()=>df,upsert:()=>of});function Kc(t){return R(t)?po(t):$n(t)}function po(t){let e=[`ItemList ${i.getValue(t,"name")||i.record_id(t)}`],r=T(t);return e=e.concat(r.map(n=>$n(n))),e.join(`
`)}function $n(t){return`${P(t)} - ${i.getValue(t,"item.name")||i.record_id(t)}`}function R(t){return i.record_type(t)==="ItemList"}function Yc(t){if(R(t)==!1){let e=i.toArray(t);return t={"@type":"ItemList","@id":i.randomUUID(),itemListElement:e.map((r,n)=>Oe(r,n))},Sn(t)}return Sn(t)}function Sn(t){t=i.setValueIfNull(t,"@id",i.randomUUID());let e=T(t);return e=e.map(r=>Oe(r)),e=Ue(e),e=vt(e),t=B(t,e),t=i.setValue(t,"numberOfItems",e.length),t}function Xc(t){return T(t).length}function T(t){return i.getValues(t,"itemListElement")||[]}function Zc(t){return T(t)}function B(t,e){return e=i.toArray(e),e=e.map((n,s)=>Oe(n)),e=Ue(e),e=vt(e),t=i.setValues(t,"itemListElement",e),i.getValue(t,"numberOfItems")!=e.length&&(t=i.setValue(t,"numberOfItems",e.length)),t}function v(t,e,r){if(t=Ue(t),i.isArray(e)){let s=r;for(let l of e)t=v(t,l,s),(s||s===0)&&(s+=1);return t}e=Oe(e,r);let n=T(t);return n=n.filter(s=>i.record_id(s)!=i.record_id(e)),r=r??ot(n),r=r??n.length,r=r>=0?r:0,n=Nn(n,r),n=st(n),n.push(e),t=B(t,n),t}function kn(t,e,r){if(i.isArray(e)){for(let l of e)t=kn(t,l,r);return t}let n=G(t,r);if(!n)return v(t,e);let s=P(n);return v(t,e,s)}function Tn(t,e,r){if(i.isArray(e)){for(let l of e)t=Tn(t,l,r);return t}let n=G(t,r);if(!n)return v(t,e);let s=P(n);return v(t,e,s+1)}function go(t,e){if(i.isArray(e)){for(let r=e.length-1;r>=0;r--)t=go(t,e?.[r],referenceItem);return t}return v(t,e,0)}function it(t,e){if(i.isArray(e)){for(let s of e)t=it(t,s,referenceItem);return t}let r=T(t);if(r.length==0)return v(t,e,0);let n=ot(t);return n||n===0?v(t,e,n+1):v(t,e,r.length)}function Qc(t,e){return it(t,e)}function ef(t,e,r){return v(t,e,r)}function tf(t,e){let r=G(t,e),n=P(r);return n==0?t:v(t,r,n-1)}function rf(t,e){let r=G(t,e),n=P(r),s=ot(t);return n==s?t:v(t,r,n+1)}function nf(t,e,r){return kn(t,e,r)}function sf(t,e,r){return Tn(t,e,r)}function ho(t,e,r){let n=T(t),s=[];for(let l of n){let u=at(l);i.isSame(u,r)&&(u=Ao(l,e)),s.push(l)}return B(t,s)}function of(t,e){return G(t,e)?ho(t,e,i.ref(e)):it(t,e)}function af(t,e){if(Ct(e)){let r=G(e);e=at(r)}return it(t,e)}function mo(t,e){if(i.isArray(e)){for(let l of e)t=mo(t,l);return t}t=Ue(t);let r=T(t),n=G(r,e),s=P(n);return r=r.filter(l=>i.isSame(l,n)==!1),r=Pn(r,s),t=B(t,r),t}function lf(t,e){return R(t)&&(t=i.getItemListElement(t)),e&&(t=i.filter(t,e)),t}function Ct(t){return i.record_type(t)==="ListItem"}function Oe(t,e){return Ct(t)==!1&&(t={"@type":"ListItem","@id":i.randomUUID(),item:t}),t=i.setIfNull(t,"@id",i.randomUUID()),(e||e===0)&&(t=i.setValue(t,"position",e)),t}function yo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function bo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function st(t){if(R(t)){let r=t,n=T(r),s=st(n);return B(r,s)}function e(r,n){return yo(r,n)==!0?-1:bo(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function G(t,e){if(!i.isNull(e))return i.isNumber(e)?xo(t,e):Ct(e)?jt(t,e):i.record_type(e)?In(t,e):In(t,e)||jt(t,e)}function xo(t,e){if(R(t)&&(t=T(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(P(r)==e)return r}}function jt(t,e){if(R(t)&&(t=T(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(i.isSame(r,e))return r}}function In(t,e){if(R(t)&&(t=T(t)),t=i.toArray(t),t.length!=0)for(let r of t){let n=at(r);if(i.isSame(n,e))return r}}function P(t){let e=i.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function Rt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,P(t)==e||(t=i.setValue(t,"position",e)),t}function Nn(t,e){if(e=e??0,R(t)){let n=t;t=T(n);let s=Nn(t,e);return B(n,s)}let r=[];for(let n of t){let s=P(n);s>=e&&(n=Rt(n,s+1)),r.push(n)}return r}function Pn(t,e){if(e=e??0,R(t)){let n=t;t=T(n);let s=Pn(t,e);return B(n,s)}let r=[];for(let n of t){let s=P(n);s!=0&&s>=e&&(n=Rt(n,s-1)),r.push(n)}return r}function Ue(t,e){if(R(t)){let s=t;t=T(s);let l=Ue(t);return B(s,l)}if(t=i.toArray(t),t.length==0)return t;t=st(t);let r=e??Dn(t)??0,n=[];for(let s of t)s=Rt(s,r),r+=1,n.push(s);return n}function Dn(t){if(R(t)){let s=T(s);return Dn(s)}t=i.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function ot(t){if(R(t))return t=T(t),ot(t);t=i.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function vt(t){if(R(t)){let r=t;t=T(r);let n=vt(t);return B(r,n)}t=i.toArray(t),t=st(t);let e=[];for(let r of t){let n=P(r),s=G(t,n-1),l=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",l);let u=G(t,n+1),d=u?i.ref(u):void 0;r=i.setValue(r,"nextItem",d),e.push(r)}return e}function Vo(t){if(R(t)){let n=T(t);return Vo(n)}return t.map(r=>at(r))}function wo(t,e){if(R(t)){let n=t;t=T(n);let s=wo(t);return B(n,s)}return t=i.toArray(t),e=i.toArray(e),e=e.map(n=>Oe(n)),t.concat(e)}function uf(t){return T(listItems)}function at(t){return i.getValue(t,"item")}function Ao(t,e){return i.setValue(t,"item",e)}function df(t,e,r){let n=jt(t,e);n=i.setValue(n,"item",r)}function cf(t,e,r){let n=T(t),s=i.toRecordID(e);for(let l=0;l<n.length;l++){let u=n[l];i.record_id(u)==s&&(n[l]=i.setItem(u,r))}return t=B(n),t}var vn={};y(vn,{appendAction:()=>To,deleteAction:()=>jo,duplicateAction:()=>Do,execute:()=>Cn,insertAction:()=>So,insertAfterAction:()=>$o,insertBeforeAction:()=>Io,moveDownAction:()=>Po,moveUpAction:()=>No,prependAction:()=>ko,replaceAction:()=>Rn,searchAction:()=>ff});function Cn(t){if(i.isArray(t)){let n=new i.DB;n.set(t);let s=[];for(let l of t){l=n.get(l);let u=Cn(l);s.push(u),n.set(i.getResults(u))}return s}let e=i.getValues(t,"hasPart");if(e.length>0){let n=e.map(f=>i.list.toItemList(f)),s=new i.DB;s.set(n);let l=[],u,d=!1;for(let f of n){let p=i.list.getItemListElement(f);for(let m of p)a=i.getItem(m),a=s.get(a),d==!0&&(a=i.setFailed(a,"Previous step failed"),f=i.list.replaceItem(f,m,u)),d==!1&&(u=Cn(a),d=i.isFailed(u),f=i.list.replaceItem(f,m,u),s.set(i.getResults(u)));l.push(f)}t=i.setValues(t,"hasPart",l);let c=i.getResults(u);return t=i.setCompleted(t,c),t}let r=i.record_type(t);if(r=="UpsertAction")return _o(t);if(r=="ReplaceAction")return Rn(t);if(r=="UpdateAction")return _o(t);if(r=="InsertAction")return So(t);if(r=="InsertBeforeAction")return Io(t);if(r=="InsertAfterAction")return $o(t);if(r=="MoveUpAction")return No(t);if(r=="MoveDownAction")return Po(t);if(r=="AppendAction")return To(t);if(r=="PrependAction")return ko(t);if(r=="ReplaceAction")return Rn(t);if(r=="DuplicateAction")return Do(t);if(r=="DeleteAction")return jo(t)}function _o(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e){let l=i.getValue(s,"propertyID"),u=i.getValue(s,"value");n=i.setValues(n,l,u)}t=i.addValue(t,"result",n)}return r.length==0&&(t=i.addValues(t,"result",e)),t=i.setCompleted(t),t}function So(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let l of e)s=i.list.insert(s,l,r);t=i.addValue(t,"result",s)}return n.length==0&&(t=i.addValues(t,"result",e)),t=i.setCompleted(t),t}function Io(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let l of e)s=i.list.insertBefore(s,l,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function $o(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let l of e)s=i.list.insertAfter(s,l,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function ko(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.prepend(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function To(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.append(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function No(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.moveUp(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function Po(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.moveDown(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function Rn(t){let e=i.targetCollection(t),r=i.getValue(t,"replacer"),n=i.getValue(t,"replacee");if(n.length==0)return t=i.setFailed(t,"No replacee provided in action"),t;let s=i.list.replace(s,r,n);return t=i.addValue(t,"result",e),t=i.setCompleted(t),t}function Do(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.duplicate(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function jo(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.remove(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function ff(t){let e=i.getValues(t,"query"),r=i.targetCollections(t);for(let n of r){let s=i.list.getItemListElement(n);for(let u of e)s=i.list.filter(s,o);let l=i.list.toItemList(s);t=i.addValue(t,"result",l)}return t=i.setCompleted(t),t}var Un={};y(Un,{add:()=>pf,addAppendAction:()=>Wo,addDeleteAction:()=>Fo,addDuplicateAction:()=>Eo,addMoveDownAction:()=>Ho,addMoveUpAction:()=>Uo,addPotentialActions:()=>Bt,addPropertyUpdateAction:()=>D,addSetActiveActionStatus:()=>On,addSetCompletedActionStatus:()=>Ot,addSetFailedActionStatus:()=>Ut,addSetPotentialActionStatus:()=>vo,defineActionsForAction:()=>Ro,defineActionsForItemList:()=>Co,getAppendAction:()=>Jo,getDeleteAction:()=>Mo,getDuplicateAction:()=>Lo,getMoveDownAction:()=>gf,getMoveUpAction:()=>Bo,getPropertyUpdateAction:()=>Oo});function pf(t,e){return Bt(t,e)}function Bt(t,e){if(!t||typeof t=="string")return t;if(i.isArray(t))return t.map(n=>Bt(n,e));if(i.isObject(t)==!1)return t;let r=i.record_type(t);if(!r)return t;r=="Action"&&(t=Ro(t,e)),r=="ItemList"&&(t=Co(t,e));for(let n of Object.keys(t))t[n]=Bt(t[n],e);return t}function Co(t,e){let r=i.getValues(t,"itemListElement"),n=i.getValues(t,"numberOfItems");for(let l=0;l<r.length;l++){let u=i.getPosition(r[l]);u>0&&(r[l]=Uo(r[l],t,e)),u<n-1&&(r[l]=Ho(r[l],t,e)),r[l]=Fo(r[l],t,e),r[l]=Eo(r[l],t,e)}t=i.setValues(t,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return t=Wo(t,s,e),t}function Ro(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return i.getValue(t,"actionStatus")||(t=vo(t,e),t=On(t,e),t=Ot(t,e),t=Ut(t,e)),i.isPotential(t)&&(t=On(t,e),t=Ot(t,e),t=Ut(t,e)),i.isActive(t)&&(t=Ot(t,e),t=Ut(t,e)),t}function vo(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=D(t,e,"actionStatus","PotentialActionStatus"),t=D(t,e,"startTime",""),t=D(t,e,"endTime",""),t=D(t,e,"error",""),t}function On(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=D(t,e,"actionStatus","ActiveActionStatus"),t=D(t,e,"startTime",r??new Date),t=D(t,e,"endTime",""),t=D(t,e,"error",""),t}function Ot(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=D(t,e,"actionStatus","CompletedActionStatus"),t=D(t,e,"startTime",r??new Date),t=D(t,e,"endTime",n??new Date),t=D(t,e,"error",""),t}function Ut(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=D(t,e,"actionStatus","FailedActionStatus"),t=D(t,e,"startTime",r??new Date),t=D(t,e,"endTime",n??new Date),t=D(t,e,"error",""),t}function D(t,e,r,n,s){let l=Oo(t,e,r,n,s);return t=i.addValue(t,"potentialAction",l),t}function Oo(t,e,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(t),url:e}}function Uo(t,e,r,n){let s=Bo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Bo(t,e,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Ho(t,e,r,n){let s=etMoveDownAction(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function gf(t,e,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Fo(t,e,r,n){let s=Mo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Mo(t,e,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Eo(t,e,r,n){let s=Lo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Lo(t,e,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Wo(t,e,r,n){let s=Jo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Jo(t,e,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:e,targetCollection:i.ref(t),url:r}}var i={dot:ke,...Pr,...jr,...At,...ln,...cn,...pn,...yn,...xn,...Vn,...wn,..._n,list:jn,...vn,potentialActionHelpers:Un};var Bn={};y(Bn,{getContent:()=>mf,getIcon:()=>Vf,getTitle1:()=>qo,getTitle2:()=>hf,imageUrl:()=>bf,imageUrls:()=>xf,thumbnailUrl:()=>yf});function qo(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"givenName"),l=i.getValue(t,"familyName"),u=i.getValue(t,"name");if(r=="Person"){let d=[s,l];if(d=d.filter(c=>c!==void 0),d.length>0)return d.join(" ")}if(r=="ListItem"){let d=i.getValue(t,"item");return qo(d)}return u||n||""}function hf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),l=i.getValue(t,"description");if(r=="Person")return s??"";if(r=="Action"){let u=i.getValue("actionStatus");return u=u||"",u=u.replace("ActionStatus",""),u??""}return l||""}function mf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),l;return l=i.getValue(t,"abstract"),l&&typeof l=="string"||(l=i.getValue(t,"text"),l&&typeof l=="string")||(l=i.getValue(t,"description"),l&&typeof l=="string")?l:""}function yf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(t,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")?s:""}function bf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function xf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValues(t,"image.contentUrl"),s=s.filter(l=>l&&typeof l=="string"),s.length>0||(s=i.getValues(t,"image"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function Vf(t){let e=i.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return zo;case"action":return wf;case"person":return Af;case"organization":return _f;case"itemlist":return Sf;case"listitem":return If;case"postaladdress":return $f;case"product":return kf;case"webapi":return Tf;case"website":return Nf;case"webpage":return Pf;default:return zo}}var zo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',wf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',Af='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',_f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Sf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',If='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',$f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',kf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',Tf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Nf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Pf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Cm=globalThis.crypto.randomUUID;function Ft(t,e){if(Array.isArray(t))return t.map(n=>Ft(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=Ft(t);let r=i.record_type(t);return t=Ht(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=Ht(t,"MoveUpAction","Move Up",e),t=Ht(t,"MoveDownAction","Move Down",e),t=Ht(t,"DeleteAction","Delete",e)),t}function Ht(t,e,r,n){let s={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(t)},url:n};return t=Df(t,s),t}function Df(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var Hn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function Mt(t){let e=[];return e=e.concat(Hn?.[t]?.properties||[]),Hn?.[t]?.parent&&(e=e.concat(Mt(Hn[t].parent))),e}function Et(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:I.thing("Object thing"),instrument:I.thing("Instrument thing"),agent:I.person("Agent thing"),hasPart:[]};if(e>0)for(let l=0;l<3;l++){let u=t+"_"+String(l);s.hasPart.push(Et(u,e-1))}return s}function Fn(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Lt(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let s="https://www.testrecord.com/"+t+"#"+n,l={"@type":n,"@id":s,name:t,headline:"Headline "+t,text:jf(),image:I.image(),hasPart:[]};if(r==0&&(l.author=I.person(),l.datePublished=new Date().toISOString()),r<e)for(let u=0;u<3;u++){let d=t+"_"+String(u);l.hasPart.push(Lt(d,e,r+1))}return l}function jf(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function lt(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var Gm=globalThis.crypto.randomUUID;function Mn(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},s;for(let l=0;l<t;l++){let u=Cf(I.thing(l),l);s&&(s.nextItem={"@id":u?.["@id"]},u.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(u),s=u}return n}function Cf(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function En(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:I.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:I.organization("org_a")}}function Ln(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:I.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function Wn(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:I.address()}}function Jn(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function zn(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function qn(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let l of["blue","white","red"]){let u=I.product(`variant ${s} ${l}`);u.size=s,u.color=l,u.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(u)}return n}function Wt(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,image:lt(t),hasPart:[]};if(e>0)for(let l=0;l<3;l++){let u=t+"_"+String(l);s.hasPart.push(Wt(u,e-1))}return s}function Gn(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:I.person(0),recipient:[I.person(10),I.person(11),I.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function Kn(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let l=0;l<e;l++){let u=t+"_"+String(l),d=I.message(u);d.sender=l%2==0?d.recipient[0]:d.recipient[1],d.recipient=l%2==0?d.recipient.toSpliced(0,1):d.recipient.toSpliced(1,1);let c=new Date;c.setDate(c.getDate()-e+l),d.dateSent=c,d.dateReceived=c,s.hasPart.push(d)}return s}var I={action:Et,article:Lt,address:Fn,conversation:Kn,image:lt,itemList:Mn,message:Gn,offer:En,organization:Ln,person:Wn,postalAddress:Jn,product:zn,productGroup:qn,thing:Wt,Action:Et,Article:Lt,Address:Fn,Conversation:Kn,Image:lt,ItemList:Mn,Message:Gn,Offer:En,Organization:Ln,Person:Wn,PostalAddress:Jn,Product:zn,ProductGroup:qn,Thing:Wt};var Jt={};y(Jt,{transformHelpers:()=>b});var Xn={};y(Xn,{jsonToMarkdown:()=>Yn});function Yn(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((l,u)=>{typeof l=="object"&&l!==null?(n+=`${s}* **Record ${u+1}:**
`,n+=Yn(l,e+1)):n+=`${s}* ${l}
`})}else typeof r=="object"?Object.entries(r).forEach(([l,u])=>{u!==null&&typeof u=="object"?(n+=`${s}* **${l}:**
`,n+=Yn(u,e+1)):n+=`${s}* **${l}:** ${u}
`}):n+=`${s}* ${r}
`;return n}var Qn={};y(Qn,{jsonToYaml:()=>ut,yamlToJson:()=>Rf});function ut(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(l=>{if(n+=`${r}- `,typeof l=="object"&&l!==null){let u=ut(l,e+2).trimStart();n+=u}else n+=ut(l,0)}),n);let s=Object.keys(t);return s.length===0?`{}
`:(s.forEach(l=>{let u=t[l];n+=`${r}${l}:`,typeof u=="object"&&u!==null?n+=`
`+ut(u,e+2):n+=" "+ut(u,0)}),n)}function Rf(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of e){if(!s.trim()||s.trim().startsWith("#"))continue;let l=s.search(/\S/),u=s.trim();for(;n.length>1&&l<=n[n.length-1].indent;)n.pop();let d=n[n.length-1];if(u.startsWith("-")){d.type!=="array"&&d.type==="object"&&d.lastKey&&(d.value[d.lastKey]=[],n.push({indent:l,value:d.value[d.lastKey],type:"array"}));let c=n[n.length-1],f=u.substring(1).trim();if(f.includes(":")){let[p,...m]=f.split(":"),w=p.trim(),$=m.join(":").trim(),J=Zn($),pe={[w]:J};c.value.push(pe),n.push({indent:l+2,value:pe,type:"object",lastKey:w})}else c.value.push(Zn(f))}else if(u.includes(":")){let[c,...f]=u.split(":"),p=c.trim(),m=f.join(":").trim();d.lastKey=p,m===""?(d.value[p]={},n.push({indent:l,value:d.value[p],type:"object",lastKey:p})):d.value[p]=Zn(m)}}return r}function Zn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var Go={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Ko="DesignToken",Yo={css:{get:Bf},get:ei,set:Xo,getValue:Of,setValue:Uf,sampleRecord:Zo};function ei(t){if(!t)return;let e=i.getAdditionalProperty(t,Ko);return e=e||{},e}function Xo(t,e){if(t)return e=e||{},t=i.setAdditionalProperty(t,Ko,e),t}function Of(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=ei(t),n=Le(r,e);return Le(n,"$value")}function Uf(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=ei(),s=Zo(),l=Le(s,e);return l.$value=r,n=wt(n,e,l),t=Xo(t,n),t}function Bf(t,e="dt"){let r=[];function n(u,d=[]){for(let[c,f]of Object.entries(u)){if(f==null)continue;let p=[...d,c];if(typeof f=="object"&&"value"in f){let m=`--${p.map($=>$.toLowerCase()).join("-")}`,w=s(f.value);r.push(`  ${m}: ${w};`)}else if(typeof f=="object"&&!Array.isArray(f))n(f,p);else{let m=`--${p.map($=>$.toLowerCase()).join("-")}`,w=s(f);r.push(`  ${m}: ${w};`)}}}function s(u){return Array.isArray(u)?u.join(", "):typeof u=="number"?u===0?"0":`${u}px`:String(u).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function Zo(){return Go}var b={markdown:Xn,yaml:Qn,designToken:Yo};var qt=class{constructor(e){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return ti(this.record)}toJSON(){return this.record}toMD(){return b.markdown.jsonToMarkdown(this.record)}toYaml(){return b.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return i.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(i.setValue(this._record,e,r))}getValues(e){return i.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(i.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(i.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(i.addValues(this._record,e,r))}_setValueIfNotNull(e,r){i.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=ee(zt(this._record),this.baseUrl)),i.simplify(zt(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=i.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=i.clone(zt(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=le(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(zt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return Mt(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let l of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[l]?.includeChildren==!1)continue;this._callbacks?.[l].callbackFn(s)}catch(u){console.log("Callback failed: ",l,String(u),s)}}static toString(e){return ti(e)}static toMD(e){return b.markdown.jsonToMarkdown(e)}static toYaml(e){return b.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new A[r](b.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return le(e)}static example(e=0,r=5){let n=this.name;return new A[n](I[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return Mt(e)}static getValue(e,r){return i.getValue(e,r)}static setValue(e,r,n){return i.setValue(e,r,le(n))}static getValues(e,r){return i.getValues(e,r)}static setValues(e,r,n){return i.setValues(e,r,le(n))}static addValue(e,r,n){return i.addValue(e,r,le(n))}static addValues(e,r,n){return i.addValues(e,r,le(n))}static flatten(e){return i.flatten(e)}static addPotentialActions(e){return Ft(e)}static addAdditionalProperty(e,r,n){return Hf(e,"additionalProperty",r,n)}};function zt(t){function e(n){if(Array.isArray(n))return n.map(s=>e(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let l of Object.keys(n))s[l]=e(n?.[l]);return s}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function le(t){if(Array.isArray(t))return t.map(e=>le(e));if(t?._isThingClass!=!0){let e=i.record_type(t);if(e){let r=A?.[e]||A.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=le(t._record?.[e]);return t}function ti(t){if(Array.isArray(t)){let l=t.map(u=>ti(u));return l=l.join(`
`),l}let e=i.getValue(t,"@type"),r=i.getValue(t,"@id"),n=i.getValue(t,"name"),s=`${e||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Hf(t,e,r,n){let s=new A.PropertyValue;return s.propertyID=r,s.value=n,t=i.addValues(t,e,s.record),t}var _=class extends qt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=g.url.clean(value),e}set cleanUrl(e){url=g.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=ee(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(l=>l?.propertyID!=e);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=e,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==e)&&(r=r.filter(s=>s?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(s=>s?.propertyID==e)?.value}};var ye=class extends _{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of i.toArray(e))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(e){this.record=i.list.setItemListElement(this.record,e)}get items(){return i.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=i.list.insert(this.record,e,0)}append(e){this.record=i.list.append(this.record,e)}add(e){this.record=i.list.append(this.record,e)}insert(e,r){this.record=i.list.insert(this.record,e,r)}delete(e){this.record=i.list.remove(this.record,e)}replace(e,r){this.record=i.list.replace(this.record,e,r)}move(e,r){this.record=i.list.move(this.record,e,r)}moveUp(e){this.record=i.list.moveUp(this.record,e)}moveDown(e){this.record=i.list.moveDown(this.record,e)}upsert(e){this.record=i.list.upsert(this.record,e)}static clean(e){return i.list.clean(e)}static length(e){return i.list.length(e)}static getItem(e,r){return i.list.getItem(e,r)}static prepend(e,r){return i.list.insert(e,r,0)}static append(e,r){return i.list.append(e,r)}static add(e,r){return i.list.insert(e,r,getLength(e))}static insert(e,r,n){return i.list.insert(e,r,n)}static delete(e,r){return i.list.remove(e,r)}static replace(e,r,n){return i.list.replace(e,r,n)}static move(e,r,n){return i.list.move(e,r,n)}static moveUp(e,r){return i.list.moveUp(e,r)}static moveDown(e,r){return i.list.moveDown(e,r)}static moveBefore(e,r,n){return i.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return i.list.moveAfter(e,r,n)}static upsert(e,r){return i.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,s,l,u){return search(e,r,n,s,l,u)}};var O=class extends _{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Qo(this.record,e)}static test(e,r){return Qo(e,r)}};function Qo(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",l=new RegExp(e.valuePattern,"gi");if(t.test(l)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var dt=class extends _{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(e){this.record=i.setCompleted(this.record,e)}setFailed(e){this.record=i.setFailed(this.record,e)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=na(this.record,e,r)}addMaxValue(e,r){this.record=ia(this.record,e,r)}addMinLength(e,r){this.record=sa(this.record,e,r)}addMaxLength(e,r){this.record=oa(this.record,e,r)}addDefaultValue(e,r){this.record=aa(this.record,e,r)}addValueRequired(e,r){this.record=la(this.record,e,r)}addValuePattern(e,r){this.record=ea(this.record,e,r)}addMultipleValues(e,r){this.record=ta(this.record,e,r)}addStepValue(e,r){this.record=ra(this.record,e,r)}testConditions(){return ri(this.record)}getInputconditions(){return F(this.record)}addInputCondition(e,r){return this.addValues(e+"-input",r)}getOutputConditions(){return Ff(this.record)}addOutputCondition(e,r){return this.addValues(e+"-output",r)}test(){return ri(this.record)}static setPotential(e){return i.setPotential(e)}static setActive(e){return i.setActive(e)}static setCompleted(e,r){return i.setCompleted(e,r)}static setFailed(e,r){return i.setFailed(e,r)}static isPotential(e){return i.isPotential(e)}static isActive(e){return i.isActive(e)}static isCompleted(e){return i.isCompleted(e)}static isFailed(e){return i.isFailed(e)}static addMinValue(e,r,n){return na(e,r,n)}static addMaxValue(e,r,n){return ia(e,r,n)}static addMinLength(e,r,n){return sa(e,r,n)}static addMaxLength(e,r,n){return oa(e,r,n)}static addDefaultValue(e,r,n){return aa(e,r,n)}static addValueRequired(e,r,n){return la(e,r,n)}static addValuePattern(e,r,n){return ea(e,r,n)}static addMultipleValues(e,r,n){return ta(e,r,n)}static addStepValue(e,r,n){return ra(e,r,n)}static test(e){return ri(e)}};function F(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function re(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function Ff(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function ea(t,e,r){let n=F(t,e)||new O;return n.valuePattern=r,t=re(t,e,n),t}function ta(t,e,r){let n=F(t,e)||new O;return n.multipleValues=r,t=re(t,e,n),t}function ra(t,e,r){let n=F(t,e)||new O;return n.stepValue=r,t=re(t,e,n),t}function na(t,e,r){let n=F(t,e)||new O;return n.minValue=r,t=re(t,e,n),t}function ia(t,e,r){let n=F(t,e)||new O;return n.maxValue=r,t=re(n.record,e,r),t}function sa(t,e,r){let n=F(t,e)||new O;return n.valueMinLength=r,t=re(t,e,n),t}function oa(t,e,r){let n=F(t,e)||new O;return n.valueMaxLength=r,t=re(t,e,n),t}function aa(t,e,r){let n=F(t,e)||new O;return n.defaultValue=r,t=re(t,e,n),t}function la(t,e,r){let n=F(t,e)||new O;return n.valueRequired=r,t=re(t,e,n),t}function ri(t){let e=F(t);for(let r of e)if(O.test(r,t?.[r.propertyID])==!1)return!1;return!0}var K=class extends dt{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(e){return this.setValues("targetCollection",e)}get toLocation(){return this.getValues("toLocation")}set toLocation(e){return this.setValues("toLocation",e)}},Gt=class extends K{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Kt=class extends K{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Yt=class extends K{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(e){return this.setValues("replacer",e)}get replacee(){return this.getValues("replacee")}set replacee(e){return this.setValues("replacee",e)}},Xt=class extends K{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Zt=class extends K{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Qt=class extends K{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var er=class extends _{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Mf(this.record)}get(e){return b.designToken.getValue(this.record,e)}set(e,r){return b.designToken.setValue(this.record,e,r)}get token(){return b.designToken.get(this.record)}set token(e){this.record=b.designToken.set(this.record,e)}get primary(){return b.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=b.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return b.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=b.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return b.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=b.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return b.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=b.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return b.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=b.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return b.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=b.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return b.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=b.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new tr(this,"typography.heading-lg")}get body(){return new tr(this,"typography.body-md")}get spacingSm(){return b.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return b.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return b.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return b.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return b.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return b.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return b.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return b.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return b.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return b.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new ni(this,"shadow.elevation-md")}sample(){return b.designToken.getSampleRecord()}},tr=class{constructor(e,r){this.base=e,this.basePath=S(r)}get fontFamily(){return b.designToken.getValue(record,S(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontFamily"),e)}get fontWeight(){return b.designToken.getValue(record,S(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontWeight"),e)}get fontSize(){return b.designToken.getValue(record,S(this.basePath,"fontSize"))}set fontSize(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontSize"),e)}get lineHeight(){return b.designToken.getValue(record,S(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"lineHeight"),e)}get letterSpacing(){return b.designToken.getValue(record,S(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"letterSpacing"),e)}get family(){return b.designToken.getValue(record,S(this.basePath,"fontFamily"))}set family(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontFamily"),e)}get weight(){return b.designToken.getValue(record,S(this.basePath,"fontWeight"))}set weight(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontWeight"),e)}get size(){return b.designToken.getValue(record,S(this.basePath,"fontSize"))}set size(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"fontSize"),e)}get height(){return b.designToken.getValue(record,S(this.basePath,"lineHeight"))}set height(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"lineHeight"),e)}get spacing(){return b.designToken.getValue(record,S(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"letterSpacing"),e)}},ni=class{constructor(e,r){this.base=e,this.basePath=S(r)}get color(){return b.designToken.getValue(record,S(this.basePath,"color"))}set color(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"color"),e)}get offsetX(){return b.designToken.getValue(record,S(this.basePath,"offsetX"))}set offsetX(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"offsetX"),e)}get offsetY(){return b.designToken.getValue(record,S(this.basePath,"offsetY"))}set offsetY(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"offsetY"),e)}get blur(){return b.designToken.getValue(record,S(this.basePath,"blur"))}set blur(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"blur"),e)}get spread(){return b.designToken.getValue(record,S(this.basePath,"spread"))}set spread(e){this.base.record=b.designToken.setValue(record,S(this.basePath,"spread"),e)}};function S(t,e,r){let n=[t,e,r];n=n.filter(l=>l!=null&&l!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Mf(t){return`${i.record_type(t)} for ${i.getValue(t,url)}
    
    `}var H=class extends _{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var M=class extends H{constructor(e,r,n,s,l,u){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=s,this.dateSent=l,this.dateReceived=u)}toString(){return si(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",Be(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",Be(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",Be(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",Be(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",Be(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return da(this.record)}set gmail(e){this.record=ua(e)}get outlook(){return fa(this.record)}set outlook(e){this.record=ca(e)}static toString(e){return si(e)}static fromGmail(e){return ua(e)}static toGmail(e){return da(e)}static fromOutlook(e){return ca(e)}static toOutlook(e){return fa(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),l=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-l.getTime()}),e}};function si(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(f=>si(f)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=i.getValue(t,"sender"),r=e?.email||e?.name||"";r=ii(r,20);let s=i.getValues(t,"recipient").map(f=>f?.email||f?.name||"");s=ii(s,25);let l=i.getValue(t,"headline")||"";l.length>20&&(l=ii(l,30));let u=i.getValue(t,"dateSent")||i.getValue(t,"dateReceived")||"",d="";try{d=new Intl.DateTimeFormat("en-US").format(u)}catch{}return`${r} | ${s} | ${l} | ${d}`}function ii(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function Be(t){return t?Array.isArray(t)?t.map(e=>Be(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function ua(t){let e=new M;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function da(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function ca(t){let e=new M;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function fa(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var nr=class extends H{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Ef(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return e=M.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return pa(this.record)}add(e,r,n,s,l,u){this.record=rr(this.record,e,r,n,s,l,u)}addMessage(e,r,n,s,l,u){this.record=rr(this.record,e,r,n,s,l,u)}newMessage(e,r,n,s,l,u){let d=new M(e,r,n,s,l,u);this.messages=this.messages.push(d)}static getParticipants(e){return pa(e)}static newMessage(e,r,n,s,l,u,d){return rr(e,r,n,s,l,u,d)}static addMessage(e,r,n,s,l,u,d){return rr(e,r,n,s,l,u,d)}static getMessages(e){return ct(e)}static getFirstMessage(e){let r=ct(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=ct(e);return r.length>0?r[r.length-1]:void 0}};function Ef(t){let e=ct(t),r=`Conversation with ${e.length} messages:
`;return r+=M.toString(e),r}function rr(t,e,r,n,s,l,u){let d=new M(e,r,n,s,l,u);return t=i.addValues(t,"hasPart",d),t}function ct(t){let e=i.getValues(t,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return e=Lf(e),e}function Lf(t){return t.sort((e,r)=>{let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),t}function pa(t){let e=ct(t),r=new Set;return e.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(u=>{r.add(u)})}),Array.from(r)}var He=class extends _{constructor(e,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Wf(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Wf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var ir=class extends _{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Jf(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new He(e,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Jf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var be=class extends _{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return ga(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=_.setValues(this._record,"additionalProperty",e)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(e){this._record=_.setValues(this._record,"areaServed",e)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=_.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=_.setValues(this._record,"inventoryLevel",e)}get price(){return i.getValue(this._record,"price")}set price(e){this._record=_.setValues(this._record,"price",e)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=_.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=_.setValues(this._record,"priceValidUntil",e)}get seller(){return i.getValue(this._record,"seller")}set seller(e){this._record=_.setValues(this._record,"seller",e)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(e){this._record=_.setValues(this._record,"validFrom",e)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(e){this._record=_.setValues(this._record,"validThrough",e)}};function ga(t){if(Array.isArray(t))return t.map(s=>ga(s));let e="",r=i.getValue(t,"itemOffered")||{},n=i.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${i.getValue(r,"name")||""} - ${i.getValue(t,"priceCurrency")||""} $${n}`,e}var xe=class extends H{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return oi(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new be(e,r))}static addOffer(e,r,n="CAD"){return zf(e,r,n)}static toString(e){return oi(e)}};function oi(t){if(Array.isArray(t))return t.map(r=>oi(r));let e="";return e+=`${i.getValue(t,"name")||""}`,e}function zf(t,e,r){let n=new be(e,r);return n.itemOffered={"@id":t?.["@id"]},t=i.addValue(t,"itemOffered",n.record),record}var sr=class extends xe{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ai(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=qf(this.record,e)}generateVariants(e){this.record=Gf(this.record,e)}static toString(e){return ai(e)}};function ai(t){if(Array.isArray(t))return t.map(n=>ai(n));let e="";e+=`${i.getValue(t,"name")||""}
`;let r=i.getValues(t,"hasVariant");for(let n of r)e+=" - "+xe.toString(n)+`
`;return e}function qf(t,e){return t=i.addValues(t,"hasVariant",e),t}function Gf(t,e){if(Array.isArray(e)){let l={};for(let u of e)l[u.propertyID]=l?.[u.propertyID]||[],l[u.propertyID].push(l.value);e=l}let r=Kf(e),n=Object.keys(r[0]);t=i.addValues(t,"variesBy",n);let s=_.getProperties("Product");for(let l of r){let u=JSON.parse(JSON.stringify(t));u["@type"]="Product",delete u.hasVariant,delete u.productGroupID,delete u.variesBy,u["@id"]=void 0,u.isVariantOf={"@id":t?.["@id"]};let d=[];for(let f of Object.keys(l))d.push(l?.[f]),s.includes(f)?u=i.setValue(u,f,l[f]):u=_.addAdditionalProperty(u,f,l[f]);let c=_.getValue(u,"name")+" "+d.join(" ");u=_.setValue(u,"name",c),t=_.addValue(t,"hasVariant",u)}return t}function Kf(t){return Object.keys(t).reduce((r,n)=>{let s=t[n],l=[];for(let u of r)for(let d of s)l.push({...u,[n]:d});return l},[{}])}var or=class extends _{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return ha(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return i.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return i.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return i.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return i.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return i.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function ha(t){if(Array.isArray(t))return t.map(r=>ha(r));let e="";return e+=`${i.getValue(t,"propertyID")||""}: ${i.getValue(t,"value")||""} ${i.getValue(t,"unitText")||""}`,e}var Ve=class extends H{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),i.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new ye(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=ft(this.record,"WPHeader"),Y(this.record,"WPHeader")}set WPHeader(e){this.record=X(this.record,"WPHeader",e)}get WPFooter(){return this.record=ft(this.record,"WPFooter"),Y(this.record,"WPFooter")}set WPFooter(e){this.record=X(this.record,"WPFooter",e)}get WPSideBar(){return this.record=ft(this.record,"WPSideBar"),Y(this.record,"WPSideBar")}set WPSideBar(e){this.record=X(this.record,"WPSideBar",e)}get Table(){return Y(this.record,"Table")}set Table(e){this.record=X(this.record,"Table",e)}addHeaderLink(e,r){this.record=ma(this.record,e,r)}addFooterLink(e,r){this.record=ya(this.record,e,r)}domain(){return ba(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Yf(e,this.url)}static getWPHeader(e){return Y(e,"WPHeader")}static getWPFooter(e){return Y(e,"WPFooter")}static getWPSideBar(e){return Y(e,"WPSideBar")}static getTable(e){return Y(e,"Table")}static setWPHeader(e,r){return X(e,"WPHeader",r)}static setWPFooter(e,r){return X(e,"WPFooter",r)}static setWPSideBar(e,r){return X(e,"WPSideBar",r)}static setTable(e,r){return X(e,"Table",r)}static addHeaderLink(e,r,n){return ma(e,r,n)}static addFooterLink(e,r,n){return ya(e,r,n)}static getDomain(e){return ba(i.getValue(e,"url")||e)}};function ft(t,e){let n=i.getValues(t,"hasPart").find(s=>i.getValue(s,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=i.addValue(t,"hasPart",n)),t}function Y(t,e){return i.getValues(t,"hasPart").find(s=>i.record_type(s)==e)}function X(t,e,r){let n=i.getValues(t,"hasPart");return n=n.filter(s=>i.record_type(s)!=e),n.push(r),t=i.setValues(t,"hasPart",n),t}function ma(t,e,r){t=ft(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},s=Y(t,"WPHeader");return s=i.addValue(s,"hasPart",n),t=X(t,"WPHeader",s),t}function ya(t,e,r){t=ft(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},s=Y(t,"WPFooter");return s=i.addValue(s,"hasPart",n),t=X(t,"WPFooter",s),t}function ba(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Yf(t,e){let r=new i.DB;r.post(t);let n=r.records,s=[];if(Xf(t)=="Product"){let d=n.filter(w=>i.record_type(w)=="Product")[0];s.push({replacee:i.record_id(d),replacer:e+"#product"}),d=i.setValue(d,"url",e);let c=i.getValues(d,"brand");c=c.map(w=>w?.["@type"]?{"@type":"brand",name:w}:w),d=i.setValues(d,"brand",c);let f=n.filter(w=>i.record_type(w)=="Offer");f=f.map(w=>i.setValues(w,"itemOffered",i.ref(d))),d=i.setValues(d,"offers",f);let p=n.filter(w=>i.record_type(w)=="Review");f=f.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"review",p);let m=n.filter(w=>i.record_type(w)=="AggregateRating");return m=m.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"aggregateRating",m),d=i.replaceIds(d,s),d}return t}function Xf(t){if(t=i.toArray(t),t=t.filter(r=>i.record_type(r)!="BreadcrumbList"),t.length==1&&i.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&i.record_type(t[0]=="WebPage")&&(t=i.getValues(t,"mainEntity")),t.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var ar=class extends Ve{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new Ve(this);return n.url=e,n.name=r,n}domain(){return xa(this.url)}static getDomain(e){return xa(i.getValue(e,"url")||e)}};function xa(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var lr=class extends _{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var A={get:_.toThing,toThing:_.toThing,Action:dt,AddAction:Gt,AppendAction:Zt,BrandDesign:er,Conversation:nr,CreativeWork:H,DataFeed:ir,DataFeedItem:He,DeleteAction:Kt,InsertAction:Xt,ItemList:ye,Message:M,Offer:be,Product:xe,ProductGroup:sr,PropertyValue:or,Thing:_,PrependAction:Qt,ReplaceAction:Yt,UpdateAction:K,WebAPI:lr,WebPage:Ve,WebSite:ar,format:Bn,toThing:Zf};function Zf(t){let e=i.record_type(t);return A?.[e]?new A[e](t):new A.Thing(t)}var ci={};y(ci,{RdfDB:()=>ur,default:()=>Qf,fromRDF:()=>di,toRDF:()=>ui});var Bx=globalThis.crypto.randomUUID,ur=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return di(this.getRdf(e))}post(e,r){e=ui(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},Qf={RdfDB:ur,toRDF:ui,fromRDF:di};function ui(t,e){function r(s,l,u,d){let c=[];if(Array.isArray(u))return c=c.concat(u.map((p,m)=>r(s,l,p,d))),c.flat();if(u?.subject&&u?.predicate&&u?.object)return[u];if(d&&typeof d=="object"&&(typeof u!="object"&&(u={"@value":u}),u["@annotation"]={...u?.["@annotation"]||{},...d}),l=="@annotation")return[];if(u?.["@value"]){let p=u?.["@annotation"];if(p&&typeof p=="object"){p["@id"]=p?.["@id"]||"_:"+globalThis.crypto.randomUUID();let m=Object.keys(p).map(w=>r(p["@id"],w,p[w]));c=c.concat(m),p=p?.["@id"]}return c=c.concat([{subject:s,predicate:l,object:u?.["@value"],label:d}]),c}if(typeof u=="object"){u["@id"]=u?.["@id"]||"_:"+globalThis.crypto.randomUUID();let p={subject:s,predicate:l,object:u?.["@id"],label:d};return c=c.concat([p]),c=c.concat(Object.keys(u).map(m=>r(u?.["@id"],m,u?.[m],d))),c.flat()}let f={subject:s,predicate:l,object:u,label:d};return c.concat([f])}let n=[];if(e){let s=li(e);s.length>1&&(n=n.concat(s.slice(1))),e=s?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(s=>s.subject),n}function di(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let s=e.get(n.subject),l=n?.object,u=e.get(n?.object);u&&(l={"@id":u?.["@id"]}),n.label&&(l?.["@id"]||(l={"@value":l}),l["@annotation"]=n?.label),s[n.predicate]=s?.[n.predicate]||[],s[n.predicate]=Array.isArray(s[n.predicate])?s[n.predicate]:[s[n.predicate]],s[n.predicate].push(l)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function li(t){let e=[];if(Array.isArray(t))return e=t.map(r=>li(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let s=[];for(let l of n)typeof l=="object"?(l["@id"]=l?.["@id"]||"_:"+globalThis.crypto.randomUUID(),s.push({"@id":l?.["@id"]}),e=e.concat(li(l))):s.push(l);t[r]=s,e=[t].concat(e)}return e}import we from"fs/promises";var ne={load:wa,save:Va,exists:dr,list:_a,delete:Aa,file:{load:wa,save:Va,delete:Aa,exists:dr},dir:{list:_a,exists:dr,delete:tp},getFilePath:pt};async function dr(t,e){t=pt(t,e);try{return await we.access(t),!0}catch{return!1}}async function ep(t){try{await we.mkdir(t,{recursive:!0})}catch(e){throw e}}async function Va(t,e,r){await ep(t),t=pt(t,e);try{await we.writeFile(t,r,"utf8")}catch(n){throw n}}async function wa(t,e){t=pt(t,e);try{return await we.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function Aa(t,e){t=pt(t,e);try{await we.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function tp(t){try{await we.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function _a(t){if(await dr(t)==!1)return[];try{return await we.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function pt(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var pi={};y(pi,{Button:()=>np,DropdownMenu:()=>Sa,MenuItem:()=>ip,escapeHtml:()=>ue});function ue(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function np({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${l[e]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function fi(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let s=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?fi(n,s):`<input type="hidden" name="${ue(s)}" value="${ue(String(n))}">`}).join("")}function Sa({label:t="",items:e=[],align:r="end",variant:n="ghost",size:s="icon",className:l="",attrs:u=""}={}){let d={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},c={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},f={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},p=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),m=t?`<span class="mr-2">${ue(t)}</span>${p}`:`${p}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let w=e.map($=>{if($.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let J=fi($.object),pe=$.disabled?"disabled":"";return`
        <form method="POST" action="${ue($.url||"")}" class="m-0 p-0">
          ${J}
          <button
            type="submit"
            ${pe}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ue($.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${l}" ${u}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${c[n]||c.ghost} ${f[s]||f.icon}"
      >
        ${m}
      </summary>

      <div class="absolute ${d[r]||d.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${w}
      </div>
    </details>
  `.trim()}function ip(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=fi(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ue(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ue(h.getName(item)||"")}
          </button>
        </form>`}var ie={};y(ie,{components:()=>V});var gi={};y(gi,{Accordion:()=>sp});function sp({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var hi={};y(hi,{Alert:()=>op});function op({title:t,description:e="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var mi={};y(mi,{Article:()=>ap,ArticleBody:()=>pp,ArticleCard:()=>hp,ArticleCardBody:()=>yp,ArticleCardFooter:()=>bp,ArticleCardHeader:()=>mp,ArticleCardMedia:()=>Vp,ArticleCardTitle:()=>xp,ArticleCategory:()=>up,ArticleFooter:()=>gp,ArticleHeader:()=>lp,ArticleMedia:()=>fp,ArticleSubTitle:()=>cp,ArticleTitle:()=>dp});function ap(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function lp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function up(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function dp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function cp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function fp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function pp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function gp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function hp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function mp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function yp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function bp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function xp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function Vp(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var yi={};y(yi,{Badge:()=>wp,Badges:()=>Ap});function wp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function Ap(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
        <span class="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          ${t||""}
        </span>
        `:r=="destructive"?`
        <span class="inline-flex items-center rounded-md border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground transition-colors hover:bg-destructive/80">
          ${t||""}
        </span>

    `:r=="outline"?`

        <span class="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">
            ${t||""}
        </span>

    `:`
     <span class="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      ${t||""}
    </span>
    `}var bi={};y(bi,{Breadcrumb:()=>_p,BreadcrumbEllipsis:()=>Ip,BreadcrumbItem:()=>ka,BreadcrumbLink:()=>Ta,BreadcrumbList:()=>$a,BreadcrumbMain:()=>Ia,BreadcrumbPage:()=>Sp,BreadcrumbSeparator:()=>Na});function _p({urls:t,titles:e,links:r}){let n=new A.ItemList(r);if(t)for(let u=0;u<t.length;u++){let d=e?.[u]||t[u].split("/")?.[t[u].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[u],name:d})}let s=n.items;return console.log("items",s),Ia({children:$a({children:s.map(u=>ka({children:Ta({href:u?.url,children:u?.name})})).join(Na())})})}function Ia({children:t="",className:e="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${r}>
        ${t}
      </nav>
    `.trim()}function $a({children:t="",className:e="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${r}>
        ${t}
      </ol>
    `.trim()}function ka({children:t="",className:e="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${r}>
        ${t}
      </li>
    `.trim()}function Ta({children:t="",href:e="#",className:r="",attrs:n=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${t}
      </a>
    `.trim()}function Sp({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function Na({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function Ip({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var xi={};y(xi,{Button:()=>$p});function $p({text:t,variant:e="primary",size:r="default",className:n="",attrs:s=""}){let l={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},u={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[e]||l.primary} ${u[r]||u.default} ${n}" ${s}>
        ${t}
      </button>
    `.trim()}var Vi={};y(Vi,{Card:()=>kp,CardBody:()=>Pp,CardContent:()=>Rp,CardDescription:()=>Cp,CardFooter:()=>Dp,CardHeader:()=>Tp,CardMain:()=>Np,CardMedia:()=>vp,CardTitle:()=>jp});function kp(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function Tp(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function Np(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function Pp(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function Dp(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function jp(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function Cp(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function Rp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function vp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var wi={};y(wi,{Dialog:()=>Op});function Op({id:t,title:e,description:r="",content:n,footer:s="",className:l=""}){return`
      <dialog id="${t}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${l}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${e}</h3>
            ${r?`<p class="text-sm text-muted-foreground">${r}</p>`:""}
          </div>
          <div class="py-2 text-sm">
            ${n}
          </div>
          ${s?`<div class="flex justify-end gap-3 pt-4">${s}</div>`:""}
        </div>
      </dialog>
    `.trim()}var Ai={};y(Ai,{Footer:()=>Up});function Up({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(l=>`
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
              <div class="font-bold text-lg tracking-tight">${t}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${s}
          </div>
          <div class="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>${e}</div>
            <div class="flex gap-4">
              <a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `.trim()}var _i={};y(_i,{Header:()=>Bp});function Bp({brand:t="",navItems:e=[],actions:r="",className:n=""}){let s=e.map((l,u)=>{if(l.dropdown&&l.dropdown.length>0){let d=`dropdown-menu-${u}`;return`
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
              ${l.dropdown.map(c=>`
                <a href="${c.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${c.name}
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
              ${t}
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
    `.trim()}var Si={};y(Si,{H1:()=>Hp,H2:()=>Fp,H3:()=>Mp,H4:()=>Ep,H5:()=>Lp,H6:()=>Wp,Heading:()=>Ae,P:()=>Jp,Text:()=>zp});function Hp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"1",options:e,record_id:r,propertyID:n,className:s})}function Fp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"2",options:e,record_id:r,propertyID:n,className:s})}function Mp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"3",options:e,record_id:r,propertyID:n,className:s})}function Ep(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"4",options:e,record_id:r,propertyID:n,className:s})}function Lp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"5",options:e,record_id:r,propertyID:n,className:s})}function Wp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ae({title:t,level:"6",options:e,record_id:r,propertyID:n,className:s})}function Ae({title:t,level:e,options:r,record_id:n,propertyID:s,className:l}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${l||""}"
    >${t}</h${e}>
    
    `}function Jp(t,e,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${l??""} "
      >${t||""}</p>
    
    `}function zp(t,e,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${l??""} "
      >${t||""}</p>
    
    `}var Ii={};y(Ii,{Input:()=>E,InputCheckbox:()=>qp,InputDate:()=>Gp,InputDateTime:()=>Yp,InputEmail:()=>Xp,InputNumber:()=>Kp,InputPassword:()=>Zp,InputTel:()=>Qp,InputText:()=>eg,InputTime:()=>tg,InputUrl:()=>rg});function E({label:t="",type:e="text",placeholder:r="",value:n="",id:s="",className:l="",attrs:u=""}){let d=s?`id="${s}"`:"";return`
      <div class="space-y-2 w-full">
        ${t?`<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${s?`for="${s}"`:""}>${t}</label>`:""}
        <input 
          type="${e||"text"}" 
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
    `.trim()}function qp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:s})}function Gp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"date",label:t,value:e,propertyID:r,id:n,className:s})}function Kp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"number",label:t,value:e,propertyID:r,id:n,className:s})}function Yp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:s})}function Xp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"email",label:t,value:e,propertyID:r,id:n,className:s})}function Zp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"password",label:t,value:e,propertyID:r,id:n,className:s})}function Qp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"tel",label:t,value:e,propertyID:r,id:n,className:s})}function eg({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"text",label:t,value:e,propertyID:r,id:n,className:s})}function tg({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"time",label:t,value:e,propertyID:r,id:n,className:s})}function rg({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return E({type:"url",label:t,value:e,propertyID:r,id:n,className:s})}var $i={};y($i,{Pagination:()=>ng,PaginationComponent:()=>Da,PaginationContent:()=>ja,PaginationEllipsis:()=>va,PaginationItem:()=>gt,PaginationLink:()=>cr,PaginationNext:()=>Ra,PaginationPrevious:()=>Ca,buildPaginationUrl:()=>Pa});function Pa(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function Da({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function ja({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function gt({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function cr({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:s="",attrs:l=""}={}){let u={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},d="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",c=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${d} ${u[r]||u.icon} ${c} ${s}"
      ${l}
    >
      ${n}
    </a>
  `.trim()}function Ca({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return cr({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Ra({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return cr({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function va({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function ng({url:t,total:e,limit:r=10,offset:n=0,siblingCount:s=1,className:l="",attrs:u=""}={}){let d=Math.ceil(e/r)||1,c=Math.floor(n/r)+1,f=z=>{let q=(z-1)*r;return Pa(t,r,q)},p=(z,q)=>{let he=q-z+1;return Array.from({length:he},(xt,Vt)=>z+Vt)},m=s+5,w=[];if(m>=d)w=p(1,d);else{let z=Math.max(c-s,1),q=Math.min(c+s,d),he=z>2,xt=q<d-2,Vt=1,gl=d;if(!he&&xt){let Ee=3+2*s;w=[...p(1,Ee),"ellipsis",d]}else if(he&&!xt){let Ee=3+2*s,ds=p(d-Ee+1,d);w=[Vt,"ellipsis",...ds]}else if(he&&xt){let Ee=p(z,q);w=[Vt,"ellipsis",...Ee,"ellipsis",gl]}}let $=[],J=c>1,pe=J?f(c-1):"#";$.push(gt({children:Ca({href:pe,disabled:!J})})),w.forEach(z=>{if(z==="ellipsis")$.push(gt({children:va()}));else{let q=Number(z),he=q===c;$.push(gt({children:cr({href:f(q),isActive:he,children:String(q)})}))}});let ge=c<d,Ir=ge?f(c+1):"#";$.push(gt({children:Ra({href:Ir,disabled:!ge})}));let $r=Da({className:l,attrs:u,children:ja({children:$.join("")})});return $r=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${$r}
    </div>`,$r}var ki={};y(ki,{Section:()=>ig,SectionHeader:()=>sg});function ig({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:s="",attrs:l=""}={}){let u={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},d={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},c=u[e]||u.default,f=d[r]!==void 0?d[r]:d.default,p=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${f} ${s}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${c} ${n}" ${l}>
      ${p}
    </section>
  `.trim()}function sg({title:t="",description:e="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var Ti={};y(Ti,{Table:()=>ag,TableBody:()=>Ba,TableCell:()=>Z,TableCellCenter:()=>fg,TableCellLeft:()=>cg,TableCellLink:()=>gg,TableCellNumber:()=>pg,TableCellRight:()=>Fa,TableCellText:()=>hg,TableColumnHeader:()=>Ua,TableColumnHeaderCenter:()=>dg,TableColumnHeaderLeft:()=>lg,TableColumnHeaderRight:()=>ug,TableFooter:()=>Ma,TableHeader:()=>Oa,TableRow:()=>Ha,getTable:()=>og});function og({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Oa(t.map(n=>Ua(n)))}
      
        ${Ba(e.map(n=>Ha(n.map(s=>Z(s)))))}
        
        ${Ma()}

      </table>

    </div>
  
  
  `}function ag(t,e,r,n,s=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function Oa(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function Ua(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function lg(t,e){return Z(t,e)}function ug(t,e){return e=e+" text-right ",Z(t,e)}function dg(t,e){return e=e+" text-center ",Z(t,e)}function Ba(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function Ha(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
    <tr 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${t}</tr>
  `}function Z(t,e,r,n){return t||(t=""),Array.isArray(t)&&(t=t.join(" ")),`
    <td 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${t}</td>
  `}function cg(t,e,r,n){return Z(t,e,r,n)}function Fa(t,e,r,n){return n=n+" text-right ",Z(t,e,r,n)}function fg(t,e,r,n){return n=n+" text-center ",Z(t,e,r,n)}function pg(t,e,r,n,s,l){return t=i.toNumber(t),t=g.number.format(t,e),Fa(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function gg(t,e,r,n,s,l){return Z(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function hg(t,e,r,n){let s=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return Z(s)}function Ma(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var Ni={};y(Ni,{Webpage:()=>mg});function mg({title:t,headContent:e,header:r,footer:n,content:s,breadcrumb:l}){return`
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${t||""}</title>
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


      ${e||""}
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
  `.trim()}var Pi={};y(Pi,{CardGrid:()=>yg});function yg({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),s=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${e}
    </div>
  `}var Di={};y(Di,{JsonEditor:()=>xg});function Ea({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[e]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function bg({title:t="",description:e="",children:r="",footer:n="",className:s="",attrs:l=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${s}" ${l}>
      ${t||e?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${t?`<h3 class="font-semibold leading-none tracking-tight text-xl">${t}</h3>`:""}
          ${e?`<p class="text-sm text-muted-foreground">${e}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${r}</div>
      ${n?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${n}</div>`:""}
    </div>
  `.trim()}function xg({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:l=""}={}){let u=t.replace(/[^a-zA-Z0-9_]/g,"_"),d=typeof r=="string"?r:JSON.stringify(r,null,2),c=JSON.stringify(n,null,2),f=`
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
  `.trim(),p=`
    <form id="${u}_form" onsubmit="window.${u}_submit(event)" class="space-y-4">
      <div>
        <label for="${u}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${u}_endpoint"
          value="${e}"
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
          >${c}</textarea>
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
            ${Ea({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${u}_format()"`})}
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
        ${Ea({children:"Submit Record",variant:"default",attrs:`id="${u}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${u}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${u}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${u}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${f}
  `.trim();return bg({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:p,className:s,attrs:l})}var ji={};y(ji,{Modal:()=>Vg,ModalBody:()=>Ag,ModalTrigger:()=>wg});function Vg(t,e,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${t||""}
    </div>
    
    
    `}function wg(t,e,r){return`
    
     <button 
        type="button"
        onclick="document.getElementById('${r}').showModal()"
        aria-label="Enlarge image:"
        class="w-full block relative text-left"
      >
        <div class="relative w-full  overflow-hidden bg-muted">
         ${t||""}
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
    
    `}function Ag(t,e,r){return`
    
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
            
            ${t||""}
          </div>

         
        </div>
      </dialog>
    
    
    `}var Ci={};y(Ci,{DropdownMenu:()=>Sg,DropdownMenuIcon:()=>Ig,Menu:()=>_g,MenuItemLink:()=>$g,MenuItemPost:()=>kg,MenuItemSeparator:()=>Tg});function _g(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function Sg(t,e,r){return`
    <details class="relative inline-block text-left ${r||""}" >
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden "
      >
        ${t}
      </summary>

      <div class="absolute  z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
    </details>

    `}function Ig(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function $g(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function kg(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function Tg(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Ri={};y(Ri,{Kanban:()=>Ng,KanbanBody:()=>Dg,KanbanCard:()=>Bg,KanbanCardBody:()=>Fg,KanbanCardFooter:()=>Mg,KanbanCardHeader:()=>Hg,KanbanColumn:()=>Rg,KanbanColumnBody:()=>Og,KanbanColumnFooter:()=>Ug,KanbanColumnHeader:()=>vg,KanbanFooter:()=>jg,KanbanHeader:()=>Pg,KanbanTitle:()=>Cg});function Ng(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function Pg(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function Dg(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function jg(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function Cg(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function Rg(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function vg(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Og(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function Ug(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function Bg(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function Hg(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function Fg(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function Mg(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var vi={};y(vi,{StarRating:()=>Eg,StarRatingEmpty:()=>Jg,StarRatingFull:()=>Lg,StarRatingHalf:()=>Wg});function Eg(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function Lg(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Wg(t,e){return`
    
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


    `}function Jg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var V={...gi,...hi,...mi,...yi,...bi,...xi,...Vi,...Pi,...wi,...pi,...Ai,..._i,...Ri,...Ci,...ji,...Ii,...Di,...$i,...ki,...vi,...Ti,...Si,...Ni};var Fi={};y(Fi,{Card:()=>Qg,Cards:()=>eh});var Hi={};y(Hi,{Media:()=>_e,MediaImage:()=>za,MediaVideo:()=>Ja});var pr={};y(pr,{fixedLength:()=>fr,textCenter:()=>Oi});function fr(t,e=void 0,r=0){let n=t;if(i.isArray(t)){let l=t.length;l==0&&(t=""),l==1&&(t=t[0]),l>1&&(t=`(${t.length})`)}let s=g.getDataType(t);if(s=="Undefined"&&(t=""),s=="Jsonld"&&(t=t?.["@id"]),s=="Number"&&(t=g.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),s=="Date"&&(t=g.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let l="",u=Math.round(e/3),d=e-u-3;l+=t.slice(0,u),l+="...",l+=t.slice(-d),t=l}return e!=null&&(t=t.padEnd(e," ")),t}function Oi(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var Bi={};y(Bi,{toTextRecord:()=>zg,toTextTable:()=>Kg});function zg(t,e=80){let r=qg(t,e),n=Gg(t),s="";s+=La(r),s+=`
`,n.length>0?s+=n.map(l=>Wa(l,r)).join(""):s+=`(no records)
`}function qg(t,e=80){let n=Ui(t).map(u=>(u||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:e-Math.max(s,11)}]}function Gg(t){let e=Ui(t),r=[];for(let n of e){let s={"@type":"PropertyValue",propertyID:n,value:g.getValues(t,n)};r.push(s)}return r}function Kg(t,e,r=!0,n=80){e=Yg(t,e,r),t=Xg(t,e,r);let s="";if(s+=La(e),s+=`
`,t.length>0){let l=t.map(u=>Wa(u,e));s+=l.join("")}else s+=Oi("(no records to display.)",n);return s}function Yg(t,e,r=!0){e=i.toArray(e),(!e||e.length==0)&&(e=Ui(t).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(e.map(s=>s?.propertyID||s?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function Xg(t,e,r=!0){if(t=i.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,s]of t.entries())s.position=s?.position??n;return t}function La(t){let e="",r=[];for(let s of t){let l=`${fr(s.title,s.width,s.rounding)}`;r.push(l)}e+=r.join(" "),e+=`
`;let n=[];for(let s of t){let l=`${"".padStart(s.width,"-")}`;n.push(l)}return e+=n.join(" "),e+=`
`,e}function Wa(t,e){let r="",n=[];for(let s of e){let l=i.getValues(t,s.propertyID),u=`${fr(l,s.width,s.rounding)}`;n.push(u)}return r+=n.join(" "),r+=`
`,r}function Ui(t){t=i.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=Zg(e),e}function Zg(t){t=i.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let s of e){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var ht={...pr,...Bi};function _e(t,e){if(!i.getValue(t,"contentUrl"))return"";let n="";return i.record_type(t)=="VideoObject"?Ja(t,e):za(t,e)}function Ja(t,e){let r=i.getValue(t,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function za(t,e){let r=i.getValue(t,"contentUrl");return r?V.Modal(V.ImageModal(r)):""}function de({website:t,webpage:e,title:r,headContent:n,content:s,options:l}){e=new A.WebPage(e),t=new A.WebSite(t);let u={};u.title=r,u.title=u.title||i.getValue(e,"title"),u.title=u.title||i.getValue(e,"name"),u.title=u.title||i.getValue(t,"title"),u.title=u.title||i.getValue(t,"name"),u.headContent=n,u.breadcrumb=V.Breadcrumb({links:i.getValue(e,"breadcrumb")});let d=i.getValue(t,"about.name")??i.getValue(t,"name")??i.getValue(e,"about.name")??i.webpage(t,"name"),c=e.WPHeader.hasPart||[],f=e.WPFooter.hasPart||[];return c=Array.isArray(c)?c:[c],f=Array.isArray(f)?f:[f],u.header=V.Header({brand:d,navItems:c}),u.footer=V.Footer({brand:d,navItems:f}),u.content=s,V.Webpage(u)}function qa({website:t,webpage:e,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:c,offset:f,limit:p,options:m}){return l=l??"",l+=j.Cards({url:n,records:u,offset:f,limit:p,nbOfColumns:3,options:m}),de({website:t,webpage:e,title:r,headContent:s,content:l,options:m})}function Qg(t,e,r,n=!0){let s=A.format.getTitle1(t),l=A.format.getContent(t),u=i.getRecordUrl(t,e),d=n==!0?A.format.imageUrl(t):void 0;return V.Card({title:s,description:l,url:u,media:d,className:r})}function eh({url:t,records:e,offset:r,limit:n,orderBy:s,orderDirection:l,nbOfColumns:u,includePagination:d,options:c,layoutClasses:f,className:p,attrs:m}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let w=new A.ItemList(e);w=w.record,w.numberOfItems=w?.numberOfItems??w.itemListElement.length,w=gr({record:w,options:c}),w.itemListElement=w.itemListElement.filter(ge=>i.getValue(ge,"position")>=r&&i.getValue(ge,"position")<r+n);let $="";for(let ge of i.getValues(w,"itemListElement")){let Ir=i.getValue(ge,"item");$+=th({url:t,item:Ir,options:c})}$=V.CardGrid({content:$,nbOfColumns:u});let J=V.Pagination({url:t,limit:n,offset:r,total:w.numberOfItems,options:c});return`

        <div class="${f} ${p}" ${m}>
        <div class="flex-1">
            ${$}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${J}
        </div>
        </div>

    `}function th({url:t,item:e,options:r}){let n=i.getImageUrl(e),s=i.getImageName(e),l=i.getValues(e,"keywords");l=l.map(f=>`<a href="/?keywords=${f}">${f}</a>`);let u=V.Badges({text:l,variant:"secondary"}),d={title:i.getValue(e,"name"),url:i.getRecordUrl(e,r?.baseUrl),description:i.getValue(e,"description"),footer:u,image:i.getImageUrl(e),imageAlt:i.getImageName(e),media:_e({record:e,options:r})};return V.Card(d)}var Mi={};y(Mi,{Input:()=>nh});function nh({record:t,propertyID:e,value:r}){return V.Input({value:r})}var Li={};y(Li,{Table:()=>ih,TableBody:()=>Ka,TableCell:()=>Xa,TableHeader:()=>Ga,TableRow:()=>Ya,getDataType:()=>Za,getHeadersFromProperties:()=>Ei,getPropertiesFromRecords:()=>Fe});function ih(t,e,r,n,s,l){let u=t;r=r||Fe(u),n=n||Ei(r);let d=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),d=["thumbnail"].concat(d)),l==!0&&(n=["#"].concat(n),r=["position"].concat(r),d=["position"].concat(d)),V.Table(Ga(u,r,n,d)+Ka(u,r,e,d))}function Ga(t,e,r,n){return e=e||Fe(t),r=r||Ei(e),n=n||[],e=e||Fe(t),V.TableHeader(r.map((s,l)=>{switch(n?.[l]){case"number":return V.TableColumnHeaderRight(s);default:return V.TableColumnHeader(s)}}).join(" "))}function Ka(t,e,r,n){e=e||Fe(t),n=n||[];let s=i.getValues(new A.ItemList(t),"itemListElement");return V.TableBody(s.map(l=>Ya(l,e,r,n)).join(" "))}function Ya(t,e,r,n){return e=e||Fe(t),n=n||[],V.TableRow(e.map((u,d)=>Xa(t,i.getValues(t,u),u,r,n,d)).join(" "),i.record_id(t),void 0,"kr-listitem")}function Xa(t,e,r,n,s,l){let u=e,d=r,c=t;if(u=i.isArray(u)&&u.length==0?"":u,u=i.isArray(u)&&u.length==1?u[0]:u,(d||"").endsWith("@type")){let f=g.url.getUrl(n||"","/"+u);return V.TableCellLink(f,u)}if((d||"").endsWith("@id")){let f=i.getRecordUrl(c,n);return V.TableCellLink(f,u)}switch(s?.[l]||Za(u)){case"array":return V.TableCellCenter(`(${u.length})`);case"text":return V.TableCellText(u);case"number":return V.TableCellNumber(u,2);case"link":return V.TableCellLink(u,u);case"thumbnail":return V.TableCell(_e({record:u}));case"position":return V.TableCellNumber(u,0);case"object":return V.TableCellLink(i.getRecordUrl(u,n),i.record_id(u));default:return V.TableCellText(u)}}function Fe(t){let r=i.getValues(t,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function Ei(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function Za(t){return t=i.isArray(t)&&t.length==0?void 0:t,t=i.isArray(t)&&t.length==1?t[0]:t,t?g.isNumber(t)?"number":g.isUrl(t)?"link":g.isDate(t)?"date":g.isArray(t)?"array":g.isObject(t)?"object":"text":"text"}var Wi={};y(Wi,{Record:()=>sh});function sh(t,e,r,n="",s="",l=!1,u=0,d={}){t=i.removeCircularRefs(t),r=r||Object.keys(t),d.baseUrl=e||d?.baseUrl;let c={rows:[]},f=Qa({record:t,baseUrl:e,properties:r,className:n,attrs:s,expandAll:l,depth:0,options:d});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${_e({record:t,options:d})||""}
            </div>
            
            <div class="flex-1">
                ${f||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${V.JsonEditor({initialData:t,endpoint:e})}
              </details>
            </div>
        </div>

    `}function Qa({record:t,properties:e,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){e=e||Object.keys(t);let d=e.filter(m=>m.startsWith("@")),c=e.filter(m=>!m.startsWith("@"));e=d.sort().concat(c.sort());let f={rows:[]};return V.Table(V.TableHeader(V.TableRow(V.TableCellRight("")+V.TableCellRight(j.DropdownMenu(i.getPotentialActions(t)))))+V.TableBody(e.map(m=>V.TableRow([V.TableCell(m+":"),V.TableCell(el({record:t,propertyID:m,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))].join(" "))).join(" ")))}function oh({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(t,e),c=[];for(let f of d){let p=i.clone(t);p=i.setValue(p,e,f),c.push(el({record:p,propertyID:e,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))}return`
        <ul class="space-y-4 ">
          ${c.map(f=>`
            <li>
              ${f}
            </li>
            `).join("")}

        </ul>
     
  
  `}function el({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(t,e);return i.isArray(d)&&d.length==1&&(d=d[0]),i.isArray(d)&&d.length==0?"":i.isArray(d)&&d.length>0?`
            <details class="space-y-4"> 
            
                <summary>${j.ValueArray(d,e,u?.baseUrl)}</summary>
      
                ${oh({record:t,propertyID:e,className:r,attrs:n,expandAll:s,depth:l,options:u})}
            
            </details>
      `:d?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${j.ValueThing(d,e,u?.baseUrl)}</summary>
      
            ${Qa({record:d,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:l,options:u})}
        
        </details>
      `:d===void 0?"":j.Value(d,e,u?.baseUrl)}var Ji={};y(Ji,{DropdownMenu:()=>lh,Menu:()=>ah});function ah(t){return t=i.toArray(t),!t||t.length==0?"":V.DropdownMenu(V.DropdownMenuIcon(),t.map(e=>V.MenuItemPost(i.getImageUrl(e),i.getName(e),i.getUrl(e))).join(" "))}function lh(t){if(t=i.toArray(t),!t||t.length==0)return"";let e=t.map(n=>V.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return V.DropdownMenu(V.DropdownMenuIcon(),e)}var zi={};y(zi,{Kanban:()=>uh,KanbanCard:()=>rl,KanbanColumn:()=>tl});function uh(t,e){let r=i.getItems(t);return V.Kanban(V.KanbanHeader(V.KanbanTitle("Awesome Kanban","Fuck yeah"))+V.KanbanBody(propertyValues.map(n=>tl(t,e,n)).join(" "))+V.KanbanFooter(""))}function tl(t,e,r){let n=i.getItems(t);return n=n.filter(s=>i.getValue(s,e)==r),V.KanbanColumn(V.KanbanColumnHeader(r)+V.KanbanColumnBody(n.map(s=>rl(s)).join(" "))+V.KanbanColumnFooter())}function rl(t){return V.KanbanCard(V.KanbanCardHeader("xx")+V.KanbanCardBody(j.Value(i.getName(t),"name"))+V.KanbanCardFooter(j.Value(i.getActionStatus(t),"actionStatus")))}var j={...Fi,...Mi,...Hi,...Wi,...Li,...Ji,...un,...zi};function gr({record:t,options:e}){if(i.isArray(t))return t.map(l=>gr({record:l,options:e}));let r=i.record_type(t);if(!r)return t;let n=g.url.getUrl(e.baseUrl,"/execute"),s=i.ref(t);for(let l of Object.keys(t?.record||t))t=i.setValues(t,l,gr({record:i.getValues(t,l),options:e}));return r=="Action"&&i.isPotential(t)&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),t}function nl({website:t,webpage:e,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:c,offset:f,limit:p,options:m}){return l=l??"",l+=j.Table({url:n,records:u,properties:d,headers:c,offset:f,limit:p,options:m}),de({website:t,webpage:e,title:r,headContent:s,content:l,options:m})}function il({website:t,webpage:e,title:r,url:n,headContent:s,content:l,record:u,properties:d,headers:c,options:f}){return l=l??"",l+=j.Record({url:n,record:u,options:f}),de({website:t,webpage:e,title:r,headContent:s,content:l,options:f})}var sl={blankPage:de,recordsPage:nl,recordPage:il,cardsPage:qa};var ol={blocks:j,...sl,components:ie,...ie};var qi={};y(qi,{getParsedRequest:()=>dh});function dh(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var al={shadcn:ol,express:qi};var Ie={};y(Ie,{_getDate:()=>mt,compile:()=>mr,compileOverwrite:()=>ul,datapointsToRecord:()=>es,dedupe:()=>Zi,eq:()=>ch,ge:()=>Xi,getConfidence:()=>L,getDataFeedItem:()=>hh,getDatapoint:()=>Gi,getExecutionID:()=>gh,getModifiedDate:()=>W,gt:()=>Me,isEqual:()=>yt,le:()=>Yi,lt:()=>Ki,merge:()=>ph,recordToDatapoints:()=>Qi,sameObject:()=>ll,sameObjectAndProperty:()=>se,sort:()=>hr,toString:()=>Se});function Se(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return i.isArray(t)?i.format.toTextTable(t,e):i.format.toTextRecord(t,e)}function yt(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r,n;return r=i.getValue(t,"value"),n=i.getValue(e,"value"),!(i.record_id(r)!=i.record_id(n)||r!=n||(r=i.getValue(t,"instrument"),n=i.getValue(e,"instrument"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"agent"),n=i.getValue(e,"agent"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"execution"),n=i.getValue(e,"execution"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeed"),n=i.getValue(e,"datafeed"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeedItem"),n=i.getValue(e,"datafeedItem"),i.record_id(r)!=i.record_id(n)))}function ll(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"object"),n=i.getValue(e,"object");return i.record_id(r)==i.record_id(n)}function se(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"propertyID"),n=i.getValue(e,"propertyID");return ll(t,e)&&r==n}function ch(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r=L(t),n=L(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let s=W(t),l=W(e);return!(s==null&&l!=null||s!=null&&l==null||+s!=+l)}function Ki(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r=L(t),n=L(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let s=W(t),l=W(e);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s<+l:!1}function Yi(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r=L(t),n=L(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let s=W(t),l=W(e);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s<=+l:!0}function Me(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r=L(t),n=L(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let s=W(t),l=W(e);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s>+l:!1}function Xi(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e)==!1)return!1;let r=L(t),n=L(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let s=W(t),l=W(e);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s>=+l:!0}function fh(t,e){if(t=t?.record??t,e=e?.record??e,se(t,e))return Me(t,e);let r=i.getValue(t,"object"),n=i.getValue(e,"object"),s=r?.["@id"]||"",l=n?.["@id"]||"",u=s.split("#")?.[1],d=l.split("#")?.[1];if(u!=d)return u<d?-1:1;if(s!=l)return r<n?-1:1;let c=i.getValue(t,"propertyID"),f=i.getValue(e,"propertyID");return c!=f?c<f?-1:1:0}function hr(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,fh(e,r))),t}function ph(t,e){if(yt(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function Zi(t){t=i.toArray(t);let e=[];for(let r of t)e.find(s=>yt(r,s))||e.push(r);return e}function L(t){t=t?.record??t;let e=i.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function gh(t){t=t?.record??t;let e=i.getValue(t,"execution");return i.record_id(e)}function W(t){t=t?.record??t;let e;return e=e||mt(t,"dataFeedItem.dateDeleted"),e=e||mt(t,"dataFeedItem.dateModified"),e=e||mt(t,"dataFeedItem.dateCreated"),e=e||mt(t,"observationDate"),e}function mt(t,e){let r=i.getValue(t,e);return g.toDate(r)}function Qi(t,e,r){function n(s,l,u,d,c){let f=[];if(i.isArray(u)){for(let p of u)f=f.concat(n(s,l,p,d,c));return f}if(u?.["@id"]){l&&f.push(Gi(s,l,{"@id":u?.["@id"]},d,c));let p={"@id":u?.["@id"]};for(let m of Object.keys(u))m!="@id"&&(f=f.concat(n(p,m,u[m],d,c)));return f}return[Gi(s,l,u,d,c)]}return r=r??i.randomUUID(),n(void 0,void 0,t,e,r)}function es(t){t=i.toArray(t),t=t.map(n=>n?.record??n);let e={};t=mr(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let s=i.getValue(n,"object"),l=i.record_id(s),u=i.getValue(n,"propertyID"),d=i.getValue(n,"value");e[l]=e?.[l]||{"@id":l},e[l]=i.addValues(e[l],u,d)}e=Object.keys(e).map(n=>e[n]);let r=new i.DB;return r.set(e),e=r.search(),e=i.simplify(e),e}function Gi(t,e,r,n={},s=i.randomUUID()){return{"@type":"Datapoint","@id":i.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:s,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function mr(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(s=>!ul(r,s)),e=e.slice(1);let n=t.map(s=>s?.["@id"]);e=e.filter(s=>n.includes(s?.["@id"]))}return t}function ul(t,e){if(t=t?.record??t,e=e?.record??e,i.getValue(t,"operation")=="AddAction"||se(t,e)==!1||i.getValue(t,"valueGroupID")==i.getValue(e,"valueGroupID"))return!1;if(i.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&Me(t,e)}return Me(t,e)}function hh(t,e,r,n,s){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:s}}var C=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=Tt.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=i.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var ce=class extends C{constructor(e,r,n,s,l,u,d){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=s??this.dataFeed,this.dataFeedItem=l??this.dataFeedItem,this.agent=u??this.agent,this.instrument=d??this.instrument)}toString(){return Se(this.record)}set(e,r,n,s,l,u,d){this.c=e,this.d=r,this.execution=n,this.dataFeed=s,this.dataFeedItem=l,this.agent=u,this.instrument=d}get dataFeed(){return new C(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new C(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new C(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new C(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new C(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new C(e,"Person"),this.setValue("agent",e)}get instrument(){return new C(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new C(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new C(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new C(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var fe=class extends ce{constructor(e,r,n,s){super({},"DataPoint"),i.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),s&&(this.metadata=s)}toString(){return Se(this.record)}lt(e){return Ki(this.record,e?.record??e)}le(e){return Yi(this.record,e?.record??e)}gt(e){return Me(this.record,e?.record??e)}ge(e){return Xi(this.record,e?.record??e)}get object(){return new C(this.getValue("object"))}set object(e){e=e?.record?e:new C(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var yr=class extends ce{constructor(e,r,n,s,l,u,d){super(e,r,n,s,l,u,d),this._dataPoints=[]}get dataPoints(){return hr(this._dataPoints)}set dataPoints(e){this._dataPoints=hr(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return Se(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return i.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,s){if(s=s??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let l=new fe(e,void 0,void 0,s);return this._dataPoints.push(l),l}if(e&&!r)return this.#e(void 0,void 0,e,s);if(e&&r){let l=new fe(e,r,n,s);return this._dataPoints.push(l),l}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return es(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,s){let u=Qi(n,s).map(d=>new fe(d));this.dataPoints=this.dataPoints.concat(u)}#t(e){if(i.isArray(e))return e=Zi(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>yt(n,e))||this._dataPoints.push(e)}};var ts={};y(ts,{analyzeDataPoints:()=>yh,toString:()=>mh});function mh(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return i.isArray(t)?ht.toTextTable(t,e):ht.toTextRecord(t,e)}function yh(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(bh(t,n));return r}function bh(t,e){t=t.filter(s=>s.object["@id"]==e);let r=t.map(s=>s.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let s of r)console.log("rr",e,s),n=n.concat(xh(t,e,s));return n}function xh(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],s=t.filter(c=>c.object["@id"]==e&&c.propertyID==r),l=mr(s),u,d=[];for(let c of n){u=s.map(m=>i.getValue(m,c));let f={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:c,dataPointType:"ALL",N:u.length,uniqueN:[...new Set(u)].length};d.push(f),u=l.map(m=>i.getValue(m,c));let p={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:c,dataPointType:"ACTIVE",N:u.length,uniqueN:[...new Set(u)].length};d.push(p)}return d}var dl={...Ie,DataPoint:fe,DataPointDB:yr,Metadata:ce,analysis:ts};function rs(t,e){if(i.isArray(t))return t.map(n=>rs(n,e));let r=i.record_type(t);if(r=="ReplaceAction")return Vh(t,e);if(r=="UpdateAction")return wh(t,e);if(r=="MoveUpAction")return Ah(t,e);if(r=="MoveDownAction")return _h(t,e)}function Vh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let l of n)s["@id"]=i.record_id(l)||i.record_id(s),e.set(s),i.addValue(t,"result",s);return t=i.setCompleted(t),t}function wh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let l of n){let u=e.get(l);l=l||{"@id":i.record_id(l)},l=i.patch(l,s),e.set(l),t=i.addValue(t,"result",l)}return t=i.setCompleted(t),t}function Ah(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let l of n){let u=e.get(l);u=helpers.things.ItemList.moveUp(u,s),e.set(u),t=i.addValue(t,"result",u)}return i.setCompleted(t),t}function _h(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let l of n){let u=e.get(l);u=helpers.things.ItemList.moveDown(u,s),e.set(u),t=i.addValue(t,"result",u)}return i.setCompleted(t),t}function br(t,e){if(!t)return t;if(i.isArray(t))return t.map(n=>br(n,e));if(i.isObject(t)==!1)return t;let r=i.record_type(t);if(!r)return t;r=="Action"&&(t=$h(t,e)),r=="ItemList"&&(t=Ih(t,e));for(let n of Object.keys(t))t[n]=br(t[n],e);return t}function Ih(t,e){let r=i.getValues(t,"itemListElement"),n=i.getValues(t,"numberOfItems");for(let s=0;s<r.length;s++){let l=i.getValue(r[s],"position");l>0&&(r[s]=kh(r[s],t,e)),l<n-1&&(r[s]=Th(r[s],t,e)),r[s]=Nh(r[s],t,e),r[s]=Ph(r[s],t,e)}return t}function $h(t,e){let r;return i.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=oe(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=oe(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Failed")),i.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=oe(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Failed")),i.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=oe(t,e,r,"Set Failed")),t}function oe(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=i.record_id(t);let s={"@type":"UpdateAction",name:n,object:r,targetCollection:i.ref(t),url:e};return t=i.addValue(t,"potentialAction",s),t}function kh(t,e,r,n){n=n||"Move up";let s={"@type":"MoveUpAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function Th(t,e,r,n){n=n||"Move down";let s={"@type":"MoveDownAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function Nh(t,e,r,n){n=n||"Delete";let s={"@type":"DeleteAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function Ph(t,e,r,n){n=n||"Duplicate";let s={"@type":"DuplicateAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}var cl={add:br,execute:rs};var fl={...i,jsonldBase:i,...A,things:A,rdf:ci,...ae,recordIDHelpers:ae,dataHelpers:g,...Jt,transformHelpers:Jt,records:I,disk:ne,datapointHelpers:dl,format:ht,html:al,potentialAction:cl},ns=fl,$e=fl;var Vr={};y(Vr,{ApiDB:()=>is});var xr={};y(xr,{CacheDB:()=>bt});var bt=class{constructor(e){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(e))?void 0:Number(e)}getAll(e=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,e));return r}get(e,r=!0){if(i.isArray(e))return e.map(u=>this.get(u));if(e=i.toRecordID(e),!this._cache?.[e]||!this._cache?.[e]?.modifiedDate)return;let s=new Date-this._cache[e].modifiedDate;if(this._expiryDuration===void 0&&s>this._expiryDuration){this._cache[e]=void 0;return}let l=this._cache[e]?.value;return r===!0&&(l=i.expand(this.getAll(!1),l)),l=i.simplify(l),l}set(e){let r=i.flatten(e);for(let n of r){let s=i.record_id(n);this._cache[s]=this._cache?.[s]||{},this._cache[s].value=i.isRef(n)&&this._cache[s]?.value||n,this._cache[s].modifiedDate=new Date}}post(e){return this.set(e)}getSearch(e){if(e=e||"all",!this._searchCache?.[e])return[];if(!this._searchCache?.[e]?.modifiedDate)return;let n=new Date-this._searchCache[e].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[e]=void 0;return}let s=this._searchCache[e]?.value;return s=i.expand(this.getAll(!1),s),s}setSearch(e,r){r=i.toArray(r),this.set(r),this._searchCache[e]=this._searchCache?.[e]||{},this._searchCache[e].value=r,this._searchCache[e].records=i.flatten(r),this._searchCache[e].modifiedDate=new Date}};var is=class{constructor(e,r,n){this._base_url=e,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new bt}async get(e){e=$e.toRecordID(e);let r=this._cacheDB.get(e);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,s=$e.dataHelpers.url.getUrl(this._base_url,n,{record_id:e}),u=await(await fetch(s)).json();return this._cacheDB.set(u),console.log("record retrieved from db"),u}async search(e,r,n,s,l){let u={...e};r&&(u.offset=r),n&&(u.limit=n),s&&(u.orderBy=s),l&&(u.orderDirection=l),console.log("pp",u);let d="/"+this._databaseID+"/"+this._tenantID,c=$e.dataHelpers.url.getUrl(this._base_url,d,u);console.log("url",c);let p=await(await fetch(c)).json(),m=$e.getResult(p);return this._cacheDB.setSearch(u,m),console.log("record retrieved from db"),m}async post(e){let n=$e.dataHelpers.url.getUrl(this._base_url,"/"),l=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),u=$e.getResults(l);return this._cache.set(u),u.length==1?u[0]:u}};var Ar={};y(Ar,{ApiClient:()=>wr,default:()=>jh});var wr=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await ss(this.headers,this.baseUrl,e,r)}async post(e,r){return await pl(this.headers,this.baseUrl,e,r)}async patch(e,r){return await Ch(this.headers,this.baseUrl,e,r)}async delete(e,r){return await os(this.headers,this.baseUrl,e,r)}async test(e){return await Rh(this.headers,this.baseUrl,e)}},jh={ApiClient:wr};async function ss(t,e,r,n){let s=new A.Action;s.name="API Get",s.instrument=new A.WebAPI(e),s.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let l=g.url.getUrl(e,r,n),d={headers:{...t||{},...{}},method:"GET"},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function pl(t,e,r,n){let s=new A.Action;s.name="API Post",s.instrument=new A.WebAPI(e);try{let l=g.url.getUrl(e,r,{}),d={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},c=await fetch(l,d);if(c.status>=300)return console.log(l),console.log(c.statusText),s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return console.log(url),console.log(l),s.setFailed(String(l)),s}}async function Ch(t,e,r,n){let s=new A.Action;s.name="API Post",s.instrument=new A.WebAPI(e);try{let l=g.url.getUrl(e,r,{}),d={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function os(t,e,r,n){let s=new A.Action;s.name="API Get",s.instrument=new A.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let l=g.url.getUrl(e,r,n),d={headers:{...t||{},...{}},method:"DELETE"},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function Rh(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},s=new A.Action,l={filter:{"@id":n["@id"]}},u;return u=await os(t,e,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step1 delete record"),s.record):(u=await pl(t,e,r,n),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step2 create record"),s.record):(u=await ss(t,e,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step3 get record"),s.record):u.result[0]?.["@id"]!=n?.["@id"]?(s.setFailed("Error step3 got wrong record"),s.record):(u=await os(t,e,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step4 delete record"),s.record):(u=await ss(t,e,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step5 get record"),s):u.result?.name==n?.name?(s.setFailed("Error step5 record still exist"),s):(s.setCompleted(),s.record)))))}var Sr={};y(Sr,{DiskDB:()=>as});var as=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new A.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(i.isArray(e)){for(let n of e){let s=await this._set(n);r.addPart(s)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),s=i.record_id(e),l=_r(s),u=await ne.save(this.path,l,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new A.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new i.DB;n.set(e);for(let s of n){let l=new A.Action("Saving record "+i.record_id(s));try{let u=JSON.stringify(s,null,4),d=i.record_id(s),c=_r(d),f=await ne.save(this.path,c,u);l.setCompleted(s),r.addPart(l)}catch(u){l.setFailed(String(u)),r.addPart(l)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new A.Action("Get record from db");if(r.object=i.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(i.isArray(e)){let l=[];for(let u of e){let d=await this._get(u);r.addPart(d),l=l.concat(i.toArray(d.result))}return r.setCompleted(l),r.record}let n=_r(e),s=await ne.load(this.path,n);if(!s||s=="")return r.setFailed("No records found"),r.record;try{let l=JSON.parse(s);return l=i.simplify(l),r.setCompleted(l),r.record}catch(l){return r.setFailed(l),r.record}}async _getNested(e){let r=new A.Action("Get nested record");r.object=i.ref(e);let n=new i.DatabaseHelper({"@id":e});for(;n.isActive;){let s=n.next,l=await this._get(s);r.addPart(l),l?.result?i.toArray(l.result).map(u=>n.add(u||i.ref(u))):n.add(i.ref(s))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new A.Action("Get all records"),n;try{n=await ne.dir.list(this.path),n=n||[],n=i.toArray(n)}catch(u){return r.setFailed(u),r.record}if(n.length==0)return r.setCompleted([]),r.record;let s=n.map(u=>vh(u)),l=await this.get(s,e);return r.addPart(l),r.setCompleted(l.result),r.record}async exists(e){let r=await this.get(e,!1);return i.isCompleted(r)}async delete(e){let r=new A.Action("Delete record");if(r.object=i.ref(e),!e)return r.setCompleted(),r.record;if(i.isArray(e)){for(let n of e){let s=await this.delete(n);r.addPart(s)}return r.setCompleted(),r.record}e=i.toRecord_id(e);try{let n=_r(e),s=await ne.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new A.Action("Purge database");try{let r=await ne.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function _r(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function vh(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}var ls={apiDB:Vr,...Vr,apiClient:Ar,...Ar,cacheDB:xr,...xr,diskDB:Sr,...Sr};var us={...ns,helpers:ns,...ls,tools:ls},lA=us,uA=us,dA=us;export{us as _h,dA as default,uA as h,lA as helpers,I as records,b as transformHelpers};
//# sourceMappingURL=index.js.map
