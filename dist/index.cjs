var yl=Object.create;var wt=Object.defineProperty;var bl=Object.getOwnPropertyDescriptor;var xl=Object.getOwnPropertyNames;var Vl=Object.getPrototypeOf,wl=Object.prototype.hasOwnProperty;var y=(e,t)=>{for(var r in t)wt(e,r,{get:t[r],enumerable:!0})},fs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xl(t))!wl.call(e,s)&&s!==r&&wt(e,s,{get:()=>t[s],enumerable:!(n=bl(t,s))||n.enumerable});return e};var Al=(e,t,r)=>(r=e!=null?yl(Vl(e)):{},fs(t||!e||!e.__esModule?wt(r,"default",{value:e,enumerable:!0}):r,e)),_l=e=>fs(wt({},"__esModule",{value:!0}),e);var qh={};y(qh,{_h:()=>$r,default:()=>zh,h:()=>Jh,helpers:()=>Wh,records:()=>S,transformHelpers:()=>b});module.exports=_l(qh);var ke={get:Le,set:At,flatten:Sl,expand:Il};function Le(e,t){if(!t||typeof t!="string")return;let r=ps(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function At(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=ps(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let l=e;for(let u=0;u<n.length-1;u++){let d=n[u],c=n[u+1],f=!isNaN(c);f==!0&&(l[d]=Array.isArray(l[d])?l[d]:[l[d]],l=l?.[d]),f==!1&&(l[d]=l?.[d]||{},l=Array.isArray(l?.[d])?l?.[d][0]:l?.[d])}return l[n[n.length-1]]=r,e}function Sl(e){function t(s,l){let u=[];return Array.isArray(l)?(s=s||"",l.map((c,f)=>t(`${s}[${String(f)}]`,c)).flat()):l?.["@type"]||l?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(l).map(c=>t(`${s}${c}`,l[c])).flat()):[{propertyID:s,value:l}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function Il(e){let t={};return Object.keys(e).forEach(r=>At(t,r,e?.[r])),t}function ps(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var jr={};y(jr,{eq:()=>Dl,ge:()=>Ol,getDiff:()=>hs,getHash:()=>gs,getHashNested:()=>Ul,gt:()=>vl,isEqual:()=>jl,isSame:()=>Pl,le:()=>Rl,lt:()=>Cl});var _t={};y(_t,{expand:()=>kl,flatten:()=>Tl,getChildren:()=>Nl,handleRelationships:()=>Pr,simplify:()=>Dr,strip:()=>Nr});function kl(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function l(u){if(!u||typeof u!="object")return u;if(Array.isArray(u))return u.map(m=>l(m));let d=i.record_id(u);if(d&&s.has(d)){let m=s.get(d);return r?m:i.ref?i.ref(m):{"@id":d}}let f=(d&&n instanceof Map?n.get(d):null)||u,p=Array.isArray(f)?[...f]:{...f};d&&s.set(d,p);for(let m of Object.keys(p))m==="previousItem"||m==="nextItem"||(p[m]=l(p[m]));return p}return typeof t=="string"&&(t={"@id":t}),l(t)}function Nr(e){function t(r,n,s){if(Array.isArray(r))return r.map(l=>t(l,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let l={};for(let u of Object.keys(r).sort())l[u]=t(r?.[u],n,s+1);return l}}return r}return t(e,0,0)}function Tl(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let l=[];for(let u of n)l=l.concat(t(u));return l}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let l of Object.keys(n)){if(l=="@id")continue;if(l=="previousItem"){n[l]=i.ref(n?.[l]);continue}if(l=="nextItem"){n[l]=i.ref(n?.[l]);continue}let u=n[l];u=i.toArray(u),n[l]=[];for(let d of u)d?.["@id"]?n[l].push({"@id":d?.["@id"]}):n[l].push(d),s=s.concat(t(d))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=Pr(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Pr(e){if(i.isArray(e))return e.map(r=>Pr(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(l=>i.insertValue(l,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(l=>i.insertValue(l,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(l=>i.insertValue(l,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function Dr(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(l=>t(l,s)),n=n.filter(l=>l!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let l={};for(let u of Object.keys(n)){let d=t(n?.[u],s);u=="itemListElement"&&(d=i.toArray(d)),d!==void 0&&(l[u]=d)}return l["@id"]=i.toArray(l?.["@id"])?.[0],l}return n}}return e=i.clone(e),t(e)}function Nl(e){function t(r,n){if(i.isArray(r)){let l=[];for(let u of r){let d=t(u,n);l=l.concat(d)}return l}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let l of Object.keys(r))s=s.concat(t(r[l],n+1));return s=s.filter(l=>l),s}return t(e,0)}function Pl(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function Dl(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function jl(e,t){let r=(s,l)=>l instanceof Object&&!(l instanceof Array)?Object.keys(l).sort().reduce((u,d)=>(u[d]=l[d],u),{}):l;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function Cl(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function Rl(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function vl(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function Ol(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function gs(e,t=!1){e=Dr(e),t==!1&&(e=Nr(e));let r=d=>d&&typeof d=="object"&&!Array.isArray(d)?Object.keys(d).sort().reduce((c,f)=>({...c,[f]:r(d[f])}),{}):Array.isArray(d)?d.map(r):d,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let l=5381,u=n.length;for(;u;)l=l*33^n.charCodeAt(--u);return(l>>>0).toString(16)}function Ul(e){return gs(e,!0)}function hs(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=hs(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var Rr={};y(Rr,{evaluate:()=>Cr});function Cr(e,t){let r=[];for(let s of Object.keys(t)){let l=s,u=t?.[s];if(u=i.toArray(u),l=="$and")return u.every(d=>Cr(e,d));if(l=="$or")return u.some(d=>Cr(e,d));for(let d of u){let c=Hl(e,l,d);r.push(c)}}return r.every(s=>Bl(s.r,s.p,s.o,s.v))}function Bl(e,t,r,n){try{let s=ke.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Hl(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var dn={};y(dn,{assignId:()=>wu,getGenericRecordID:()=>Vu,normalizeRecordId:()=>bu,replaceIds:()=>Ps,setTempID:()=>Ns});var ae={};y(ae,{default:()=>hu,get:()=>ee,getGenericRecordID:()=>Qe,getStandardID:()=>Pt,recordIdHelpers:()=>Nt,set:()=>kt,validate:()=>Ze});var Or={};y(Or,{clean:()=>Fl,isArray:()=>ye,isNotArray:()=>vr,isValid:()=>Ml,toArray:()=>St});function Fl(e){return St(e)}function Ml(e){return ye(e)}function ye(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function vr(e){return!ye(e)}function St(e){return e==null?[]:(e=ye(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var Hr={};y(Hr,{clean:()=>Ur,format:()=>Ll,formatDate:()=>ms,isDate:()=>Q,isNotDate:()=>Br,isValid:()=>El,toDate:()=>Te});function Ur(e,t=void 0){return Te(e)||t}function El(e){return Q(e)}function Ll(e,t=!1){return ms(e,t)}function Q(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Br(e){return!Q(e)}function Te(e){if(e===void 0)return;if(Q(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=Q(e)?e:void 0,e}function ms(e,t=!1){if(console.log("vv",e,Te(e)),e=Te(e),Q(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),u=`${n}-${s}-${l}`;if(t==!0){let d=String(r.getHours()).padStart(2,0),c=String(r.getMinutes()).padStart(2,0),f=String(r.getSeconds()).padStart(2,0);u=u+` ${d}:${c}:${f}`}return u}var Mr={};y(Mr,{clean:()=>Wl,isNotNull:()=>Fr,isNull:()=>Pe,isValid:()=>Jl});function Wl(e,t=void 0){}function Jl(e){return Pe(e)}function Fr(e){return!Pe(e)}function Pe(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||Ne.array.isValid(e)?e.length==0:e instanceof Date?Ne.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var Wr={};y(Wr,{clean:()=>Er,format:()=>ql,formatDecimals:()=>ys,isNotNumber:()=>Lr,isNumber:()=>We,isValid:()=>zl,toNumber:()=>It});function Er(e,t=void 0){return It(e)??t}function zl(e){return We(e)}function ql(e,t){return ys(e,t)}function ys(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function We(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function Lr(e){return!We(e)}function It(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var zr={};y(zr,{clean:()=>Gl,cleanObject:()=>Je,isNotObject:()=>Jr,isObject:()=>ze,isValid:()=>Kl});function Gl(e,t=void 0){return Je(e)||t}function Kl(e){return ze(e)}function ze(e){return typeof e!="object"||e===null||Array.isArray(e)||e===void 0||g.isString(e)==!0||g.isDate(e)==!0||g.isNumber(e)==!0||g.isArray(e)==!0?!1:Object.keys(e).length>0}function Jr(e){return!ze(e)}function Je(e){if(g.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Je(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Je(x));t=t.filter(r=>g.isNotNull(r))}}if(g.object.isValid(e))for(let t of Object.keys(e))e[t]=Je(e[t]),Ne.isNull(e[t])&&delete e[t];return Ne.isNotNull(e)?e:void 0}var Kr={};y(Kr,{clean:()=>Yl,cleanString:()=>bs,isNotString:()=>qr,isString:()=>De,isValid:()=>Xl,maxLengthEnd:()=>Ql,maxLengthMiddle:()=>Zl,toString:()=>Gr});function Yl(e,t=""){return bs(e)||t}function Xl(e){return De(e)&&e.trim().length>=0}function Zl(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Ql(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function De(e){return typeof e=="string"||e instanceof String}function qr(e){return!De(e)}function Gr(e){return e==null?"":String(e)}function bs(e){return De(e)?e.trim():void 0}var Qr={};y(Qr,{clean:()=>xs,cleanUrl:()=>ws,getDomain:()=>eu,getParams:()=>tu,getPath:()=>_s,getUrl:()=>Vs,isNotUrl:()=>Zr,isUrl:()=>qe,isValid:()=>Yr,setParams:()=>As,setPath:()=>Ss,toUrl:()=>Xr});function Yr(e){return qe(e)}function xs(e,t=void 0){return ws(e)??t}function Xr(e,t,r,n=void 0){return Vs(e,t,r)||n}function Vs(e,t,r){let n=Ss(e,t);return r&&(n=As(n,r)),n}function qe(e){return e=xs(e),!!e}function Zr(e){return!qe(e)}function ws(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:l=!1,allowedQueryParams:u=[]}=t;try{let d=new URL(e);d.protocol=d.protocol.toLowerCase(),d.hostname=d.hostname.toLowerCase(),n&&d.hostname.startsWith("www.")&&(d.hostname=d.hostname.slice(4)),(d.protocol==="http:"&&d.port==="80"||d.protocol==="https:"&&d.port==="443")&&(d.port="");let c=d.pathname;if(c=c.replace(/\/+/g,"/"),l&&(c=c.toLowerCase()),s&&c.length>1&&c.endsWith("/")&&(c=c.slice(0,-1)),d.pathname=c,r){let f=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],p=Array.from(d.searchParams.keys());for(let m of p){let w=f.some(J=>m.toLowerCase().startsWith(J)),$=u.includes(m);w&&!$&&d.searchParams.delete(m)}}return d.searchParams.sort(),d.toString()}catch{return}}function eu(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function tu(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function As(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function _s(e){try{return new URL(e).pathname}catch{return}}function Ss(e,t){t=t??"";let r=[],n=_s(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let l of t)r=r.concat(l.split("/"));r=r.filter(l=>l!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(l){console.log(l,s,e);return}}var rn={};y(rn,{clean:()=>ru,format:()=>iu,isDuration:()=>je,isNotDuration:()=>en,isValid:()=>nu,toDuration:()=>tn});function ru(e,t=void 0){return toDate(e)||t}function nu(e){return je(e)}function iu(e){return ou(e)}function je(e){return su(e)}function en(e){return!je(e)}function tn(e){return e}function su(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function ou(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,l,u,d,c,f,p]=r.map($=>parseInt($,10)||0),m=[c,f,p].map($=>String($).padStart(2,"0")).join(":"),w=[];return s&&w.push(`${s}y`),l&&w.push(`${l}m`),u&&w.push(`${u}w`),d&&w.push(`${d}d`),w.length>0?`${w.join(" ")} ${m}`:m}var sn={};y(sn,{clean:()=>au,format:()=>uu,isBoolean:()=>Ge,isNotBoolean:()=>nn,isValid:()=>lu,toBoolean:()=>Ke,toString:()=>du});function au(e){return Ke(e)}function lu(e){return Ge(e)}function uu(e){return Ke(e)}function du(e){return String(e)}function Ge(e){return typeof e=="boolean"}function nn(e){return typeof e!="boolean"}function Ke(e){if(Ge(e))return e;if(typeof e=="string"){if(e.toLowerCase()=="true")return!0;if(e.toLowerCase()=="false")return!1}if(!isNaN(e)){if(e==0)return!1;if(valeu==1)return!0}}var ln={};y(ln,{clean:()=>cu,format:()=>pu,fromJson:()=>an,isJson:()=>Ye,isNotJson:()=>on,isValid:()=>fu,toJson:()=>Xe});function cu(e){return Xe(e)}function fu(e){return Ye(e)}function pu(e){return Xe(e)}function Ye(e){if(!e)return!1;if(typeof e=="string"){try{if(JSON.parse(e))return!0}catch{}return!1}}function on(e){return!Ye(e)}function Xe(e){let t=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(e,t(),4)}catch{}}function an(e){try{return JSON.parse(e)}catch{}}var g={isNull:Pe,isNotNull:Fr,isArray:ye,isNotArray:vr,toArray:St,isDate:Q,isNotDate:Br,toDate:Te,isDuration:je,isNotDuration:en,toDuration:tn,isObject:ze,isNotObject:Jr,isNumber:We,isNotNumber:Lr,toNumber:It,isString:De,isNotString:qr,toString:Gr,isUrl:qe,isNotUrl:Zr,toUrl:Xr,isBoolean:Ge,isNotBoolean:nn,toBoolean:Ke,isJson:Ye,isNotJson:on,toJson:Xe,fromJson:an,array:Or,boolean:sn,date:Hr,duration:rn,json:ln,null:Mr,number:Wr,object:zr,string:Kr,url:Qr,getDataType:Is,getType:Is,getJsonSchema:gu},Ne=g;function Is(e){if(Pe(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(ye(e))return"Array";if(Q(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(Yr(e))return"URL";if(Ur(e))return"DateTime";if(je(e))return"Duration";if(Er(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function gu(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),g.isString(r))return s.type="string",s;if(g.isObject(r)){s.type="object",s.properties={};for(let l of Object.keys(r))s.properties[l]=t(r[l],n+1);return s}if(g.isNumber(r))return s.type="number",s;if(g.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var ym=globalThis.crypto.randomUUID,Nt={get:ee,set:kt,validate:Ze,getGenericRecordID:Qe,getStandardID:Pt},hu=Nt,$t={website:"domain",webpage:"url",offer:"url",brand:"domain"};function ee(e,t){if(!e||!e?.["@type"])return;let r=$s(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=$t?.[n];if(s=="url")return ks(n,Tt(e));if(s=="domain")return Ts(n,Tt(e))}return Qe(t)}function Pt(e,t){if(!e||!e?.["@type"])return;let r=$s(e);for(let n of r){let s=$t?.[n];if(s=="url")return ks(n,Tt(e));if(s=="domain")return Ts(n,Tt(e))}}function kt(e,t){if(Array.isArray(e)&&typeof e!="string")return e.map(r=>kt(r,t));if(e?.["@type"]||e?.["@id"]){Ze(e)==!1&&(e["@id"]=ee(e,t));for(let r of Object.keys(e))e[r]=kt(e?.[r],t)}return e}function Ze(e,t){let r=e?.["@id"];return r?mu(e)?getStandardizedRecordId(e,t)==r:un(e?.["@id"],t)==r:!1}function mu(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if($t?.[r])return $t?.[r]}function $s(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function Tt(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function Qe(e){return e=un(e),e?(e.endsWith("/")||(e=e+"/"),un(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function ks(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>g.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function Ts(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>yu(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function yu(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function un(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function bu(e,t){e=Ns(e);let r=xu(e,t);return Ps(e,r)}function xu(e,t){function r(s,l){if(l=l||"https://www.test.com/",i.isArray(s)){let d=[];for(let c of s)d=d.concat(r(c));return d}if(i.isObject(s)==!1)return[];let u=[{replacee:i.record_id(s),replacer:ee(s,l)}];for(let d of Object.keys(s))u=u.concat(r(s[d],l));return u}let n=r(e,t);return n=n.filter(s=>s),n}function Ns(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function Vu(e){return Qe(e)}function wu(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function Ps(e,t){function r(n,s){if(Array.isArray(n))return n.map(d=>i.replaceIds(d,s));if(!n?.["@id"])return n;let l=n?.["@id"],u=s.get(l);u&&(n["@id"]=u);for(let d of Object.keys(n))n[d]=i.replaceIds(n?.[d],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var pn={};y(pn,{DB:()=>fn,_storeToMap:()=>tt,_storeToOriginal:()=>$u,getRecord:()=>et,getRecords:()=>Ce,patchRecord:()=>Fs,postRecord:()=>Hs});var cn={};y(cn,{Value:()=>Au,ValueArray:()=>Cs,ValueDateTime:()=>vs,ValueDuration:()=>_u,ValueMonetaryAmount:()=>Su,ValueNumber:()=>Os,ValueRecordId:()=>Ds,ValueRecordType:()=>js,ValueText:()=>Us,ValueThing:()=>Bs,ValueUrl:()=>Rs});function Au(e,t,r){return!e&&e!==0?"":i.isArray(e)?Cs(e,t,r):t=="@type"?js(e,t,r):t=="@id"?Ds(e,t,r):i.isObject(e)?Bs(e,t,r):i.isNumber(e)?Os(e,t,r):i.isDate(e)?vs(e,t,r):g.isUrl(e)?Rs(e,t,r):Us(e,t,r)}function Ds(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return te(s,t)}function js(e,t,r){let n=g.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return te(s,t)}function Cs(e,t,r){let n=e.length>0?`(${e.length})`:"";return te(n,t)}function Rs(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return te(n,t)}function vs(e,t,r){e=i.toDate(e);let n=g.date.format(e);return te(n,t)}function _u(e,t,r){return g.duration.format(pv.value)}function Os(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=g.number.format(e,n),te(e,t)}function Us(e,t,r){return te(e,t)}function Bs(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let l=`<a title="${s}" href="${n}">${s}</a>`;return te(l,t)}function Su(e,t,r){let n=g.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=g.number.format(n,2),l=i.getValue(record,"currency");return l=(l||"").toUpperCase(),pv.htmlValue=l+" $"+s,l=="USD"&&(pv.htmlValue=l+" $"+s),l=="CAD"&&(pv.htmlValue=l+" $"+s),l=="EUR"&&(pv.htmlValue=l+" "+s+" \u20AC"),l=="GBP"&&(pv.htmlValue=l+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",te(pv,t)}function te(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var fn=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,et(this._store,t,r)}getAll(t=!0){return Ce(this._store,{},t)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return Ce(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>et(this._store,i.record_id(s),!1));for(let s of r)this._store=Hs(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(l=>et(this._store,i.record_id(l),!1));for(let l of n)this._store=Fs(this._store,l,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let l=this.get(t);return i.getValue(l,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return Ce(this._store)}getRecords(t=!1){return Ce(this._store,void 0,!1)}get record_ids(){return Iu(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t);return!s||i.isRef(s)?n:s}updateRefs(t,r={},n={}){if(!t)return t;if(i.isArray(t))return t.map(s=>this.updateRefs(s,r,n));if(i.isObject(t)){if(i.isRef(t)){if(r?.[i.record_id(t)])return r[i.record_id(t)];t=this.get(t,!0)||t,r[i.record_id(t)]=t}else{if(n?.[i.record_id(t)])return t;n[i.record_id(t)]=t}for(let s of Object.keys(t))["previousItem","nextItem"].includes(s)||(t[s]=this.updateRefs(t[s],r,n));return t}return t}execute(t){let r=i.toArray(t);r=r.map(l=>this.updateRefs(l));let n=new i.DB;n.set(r);let s=[];for(let l of r){l=n.get(l),l=i.execute(l),s.push(l);let u=i.getValues(l,"hasPart");for(let d of u){let c=i.list.toItemList(d);i.list.getItems(c).forEach(p=>n.set(i.getResults(p)))}n.set(i.getResults(l))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let l=t.find(u=>i.record_id(u)==i.record_id(s));i.isEqual(l,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let l of s)this._broadcastItem(l,n)}}async _broadcastItem(t,r){try{return t(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return ke}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function Hs(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=tt(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function Fs(e,t,r=!0){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let n=tt(e);for(let s of t){let l=n.get(i.record_id(s));s=i.patch(l,s),n.set(i.record_id(s),s)}return e=i._storeToOriginal(n),e}function et(e,t,r=!0){if(i.isArray(t))return t.map(u=>et(e,u,r));let n=i._utilGetId(t),s=tt(e),l=s.get(n);return r==!0&&(l=i.expand(s,l)),l=i.clone(l),l}function Ce(e,t,r=!0){let n=tt(e),s=Array.from(n.values());return t&&(s=s.filter(l=>i.evaluate(l,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function Iu(e){return Ce(e).map(n=>i.record_id(n))}function tt(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function $u(e){return e=Array.from(e.values()),e}var hn={};y(hn,{JSON_parse:()=>Nu,JSON_stringify:()=>Js,clean:()=>Es,clone:()=>zs,contractAtValue:()=>Dt,expandAtValue:()=>Pu,getRecordUrl:()=>Cu,isJsonld:()=>Ms,isValid:()=>ku,merge:()=>Du,patch:()=>ju,removeCircularRefs:()=>Ls,sortedReplacer:()=>Ws,stringify:()=>Tu});function ku(e){return Ms(e)}function Ms(e){return e?.["@type"]||e?.["@id"]}function Es(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>Es(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=zs(e)}catch{}e=setTempID(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Ze(s)==!0)continue;let l=Pt(s,t);if(l&&s?.["@id"]!=l){let u={replacer:l,replacee:s?.["@id"]};n.push(u)}if(!l&&s?.["@id"].startsWith("_:")){let u={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(u)}}return e=i.replaceIds(e,n),e}function Ls(e){return gn(e,new Set)}function gn(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>gn(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=gn(e[n],t);return e}function Ws(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function Js(e){return e=Ls(e),JSON.stringify(e,Ws,4)}function Tu(e){return Js(e)}function Nu(e){return JSON.parse(e)}function Pu(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(l=>t(l,n));if(i.isJsonld(r)){for(let l of Object.keys(r?.record||r))r=i.setValues(r,l,t(i.getValues(r,l),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function Dt(e){let t=i.getAtValue(e);if(t&&t.length>0)return Dt(i.getAtValue(e));if(i.isArray(e))return e.map(r=>Dt(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,Dt(i.getValues(e,r)));return e}return e}function zs(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function Du(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let l of n){if(l=="@id")continue;let u=i.toArray(e?.[l]||void 0),d=i.toArray(t?.[l]||void 0),c=u.concat(d);r==!0&&(c=i.dedupe(c)),s[l]=c}return s}function ju(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{},t=t?.record||t;for(let r of i.keys(t)){let n=i.toArray(t?.[r]);e=i.setValues(e,r,n)}return e}function Cu(e,t){t=t?.baseUrl??t;try{return g.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var xn={};y(xn,{ID:()=>Xu,Id:()=>ed,Type:()=>Fu,actionStatus:()=>gd,addValue:()=>Xs,addValues:()=>Zs,contentUrl:()=>yd,description:()=>Vd,email:()=>_d,getActionStatus:()=>hd,getAdditionalProperty:()=>dd,getAtValue:()=>fd,getContentUrl:()=>bd,getDescription:()=>wd,getEmail:()=>Sd,getID:()=>Zu,getId:()=>td,getImageName:()=>Nc,getImageUrl:()=>Tc,getItem:()=>kd,getItemListElement:()=>Cd,getItems:()=>Pd,getName:()=>Od,getNumberOfItems:()=>Hd,getObject:()=>Ed,getObjects:()=>Jd,getPosition:()=>Gd,getPotentialAction:()=>Xd,getPotentialActions:()=>ec,getRecordID:()=>Ku,getRecordId:()=>zu,getRecordType:()=>Bu,getRecord_id:()=>Lu,getRecord_type:()=>vu,getResult:()=>nc,getResults:()=>oc,getTargetCollection:()=>uc,getTargetCollections:()=>fc,getText:()=>hc,getType:()=>Mu,getUrl:()=>bc,getValue:()=>N,getValues:()=>bn,hasValue:()=>Qs,insertValue:()=>ud,isActive:()=>wc,isCompleted:()=>Ac,isFailed:()=>_c,isPotential:()=>Vc,isRef:()=>sd,item:()=>$d,itemListElement:()=>jd,items:()=>Nd,keys:()=>ad,name:()=>vd,numberOfItems:()=>Bd,object:()=>Md,objects:()=>Wd,position:()=>qd,potentialAction:()=>Yd,potentialActions:()=>Qd,properties:()=>yn,recordID:()=>Gu,recordId:()=>Ju,recordType:()=>Uu,record_id:()=>qs,record_type:()=>Ru,ref:()=>od,result:()=>rc,results:()=>sc,setActionStatus:()=>md,setActive:()=>Ic,setAdditionalProperty:()=>cd,setAtValue:()=>pd,setCompleted:()=>$c,setContentUrl:()=>xd,setDescription:()=>Ad,setEmail:()=>Id,setFailed:()=>kc,setID:()=>Qu,setId:()=>rd,setIfNull:()=>ld,setItem:()=>Td,setItemListElement:()=>Rd,setItems:()=>Dd,setName:()=>Ud,setNumberOfItems:()=>Fd,setObject:()=>Ld,setObjects:()=>zd,setPosition:()=>Kd,setPotential:()=>Sc,setPotentialAction:()=>Zd,setPotentialActions:()=>tc,setRecordID:()=>Yu,setRecordId:()=>qu,setRecordType:()=>Hu,setRecord_id:()=>Wu,setRecord_type:()=>Ou,setResult:()=>ic,setResults:()=>ac,setTargetCollection:()=>dc,setTargetCollections:()=>pc,setText:()=>mc,setType:()=>Eu,setUrl:()=>xc,setValue:()=>U,setValueIfNull:()=>Ys,setValues:()=>nt,targetCollection:()=>lc,targetCollections:()=>cc,text:()=>gc,toRecordID:()=>Gs,toRecordId:()=>id,toRecord_id:()=>rt,toRecord_ids:()=>nd,toRef:()=>Ks,url:()=>yc});var Re="en-CA";function Ru(e){return N(e,"@type")}function vu(e){return N(e,"@type")}function Ou(e,t){return U(e,"@type",t)}function Uu(e){return N(e,"@type")}function Bu(e){return N(e,"@type")}function Hu(e,t){return U(e,"@type",t)}function Fu(e){return N(e,"@type")}function Mu(e){return N(e,"@type")}function Eu(e,t){return U(e,"@type",t)}function qs(e){return N(e,"@id")}function Lu(e){return N(e,"@id")}function Wu(e,t){return U(e,"@id",t)}function Ju(e){return N(e,"@id")}function zu(e){return N(e,"@id")}function qu(e,t){return U(e,"@id",t)}function Gu(e){return N(e,"@id")}function Ku(e){return N(e,"@id")}function Yu(e,t){return U(e,"@id",t)}function Xu(e){return N(e,"@id")}function Zu(e){return N(e,"@id")}function Qu(e,t){return U(e,"@id",t)}function ed(e){return N(e,"@id")}function td(e){return N(e,"@id")}function rd(e,t){return U(e,"@id",t)}function rt(e){return i.isArray(e)?e.map(t=>rt(t)):typeof e=="string"?e:qs(e)}function nd(e){return rt(e)}function Gs(e){return rt(e)}function id(e){return rt(e)}function sd(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function od(e){if(e?._isThingClass==!0)return e.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function Ks(e){return i.isArray(e)?e.map(t=>Ks(t)):{"@id":Gs(e)}}function ad(e){return yn(e)}function yn(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(yn(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function N(e,t,r,n,s){let l=bn(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),l?.[r]??n}function U(e,t,r,n,s){if(n!==void 0){let l=i.getValues(e,t);for(;l.length-1<n;)l.push(null);l[n]=r,r=l}return nt(e,t,r,s)}function Ys(e,t,r,n,s){let l=N(e,t,n);return i.isNull(l)==!1?e:U(e,t,r,n,s)}function ld(e,t,r,n,s){return Ys(e,t,r,n,s)}function Xs(e,t,r){return Zs(e,t,r)}function Zs(e,t,r){return r=i.getValues(e,t).concat(r),nt(e,t,r)}function bn(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),l=e;for(let d=0;d<s.length;d++){let[c,f]=mn(s[d]);c&&(l=l?.[c],l=i.toArray(l)),l=l.filter(p=>p?.["@language"]==n||p?.["@language"]==Re||p?.["@language"]===void 0),l=l.map(p=>p?.["@value"]??p),l=i.toArray(l),l=l.map(p=>p?.[n]??p?.[Re]??p),l=i.toArray(l),d<s.length-1&&(l=l?.[f])}let u=i.toArray(l);return u.length==0&&r!==void 0?r:u}function nt(e,t,r,n){e=e?.record||e;let s=t.split("."),l=e||{};for(let c=0;c<s.length-1;c++){let[f,p]=mn(s[c]);l[f]=i.toArray(l?.[f]||[]);let m;for(l?.[f]?.[n]?(l[f][n]=i.toArray(l?.[f]?.[n]),m=l[f][n]):l?.[f]?.[Re]?(l[f][Re]=i.toArray(l?.[f]?.[Re]),m=l[f][Re]):(l[f]=i.toArray(l?.[f])||[],m=l[f]);m.length-1<p;)m.push({"@type":"Thing"});l=m?.[p]}let[u,d]=mn(s[s.length-1]);return l[u]=i.toArray(r),e}function ud(e,t,r){return Qs(e,t,r)==!0?e:Xs(e,t,r)}function Qs(e,t,r){let n=bn(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function mn(e){if(e===void 0)return[void 0,0];let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function dd(e,t){let n=i.getValues(e,"additionalProperty").find(l=>i.getValue(l,"propertyID")==t);return i.getValue(n,"value")}function cd(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(u=>i.getValue(u,"propertyID")!=t);let l={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r};return e=i.addValue(e,"additionalProperty",l),e}function fd(e){return i.getValues(e,"@value")}function pd(e,t){return i.setValues(e,"@value",t)}function gd(e){return i.getValue(e,"actionStatus")}function hd(e){return i.getValue(e,"actionStatus")}function md(e,t){return i.setValue(e,"actionStatus",t)}function yd(e){return i.getValue(e,"contentUrl")}function bd(e){return i.getValue(e,"contentUrl")}function xd(e,t){return i.setValue(e,"contentUrl",t)}function Vd(e){return i.getValue(e,"description")}function wd(e){return i.getValue(e,"description")}function Ad(e,t){return i.setValue(e,"description",t)}function _d(e){return i.getValue(e,"email")}function Sd(e){return i.getValue(e,"email")}function Id(e,t){return i.setValue(e,"email",t)}function $d(e){return i.getValue(e,"item")}function kd(e){return i.getValue(e,"item")}function Td(e,t){return i.setValue(e,"item",t)}function Nd(e){return i.list.getItems(e)}function Pd(e){return i.list.getItems(e)}function Dd(e,t){return i.list.setItems(e,t)}function jd(e){return i.list.getItemListElement(e)}function Cd(e){return i.list.getItemListElement(e)}function Rd(e,t){return i.list.setItemListElement(e,t)}function vd(e){return i.getValue(e,"name")}function Od(e){return i.getValue(e,"name")}function Ud(e,t){return i.setValue(e,"name",t)}function Bd(e){return i.getValue(e,"numberOfItems")}function Hd(e){return i.getValue(e,"numberOfItems")}function Fd(e,t){return i.setValue(e,"numberOfItems",t)}function Md(e){return i.getValue(e,"object")}function Ed(e){return i.getValue(e,"object")}function Ld(e,t){return U(e,"object",t)}function Wd(e){return i.getValues(e,"object")}function Jd(e){return i.getValues(e,"object")}function zd(e,t){return nt(e,"object",t)}function qd(e){return i.list.getPosition(e)}function Gd(e){return i.list.getPosition(e)}function Kd(e,t){return i.list.setPosition(e,t)}function Yd(e){return i.getValues(e,"potentialAction")}function Xd(e){return i.getValues(e,"potentialAction")}function Zd(e,t){return i.setValues(e,"potentialAction",t)}function Qd(e){return i.getValues(e,"potentialAction")}function ec(e){return i.getValues(e,"potentialAction")}function tc(e,t){return i.setValues(e,"potentialAction",t)}function rc(e){return i.getValue(e,"result")}function nc(e){return i.getValue(e,"result")}function ic(e,t){return U(e,"result",t)}function sc(e){return i.getValues(e,"result")}function oc(e){return i.getValues(e,"result")}function ac(e,t){return nt(e,"result",t)}function lc(e){return i.getValue(e,"targetCollection")}function uc(e){return i.getValue(e,"targetCollection")}function dc(e,t){return i.setValue(e,"targetCollection",t)}function cc(e){return i.getValues(e,"targetCollection")}function fc(e){return i.getValues(e,"targetCollection")}function pc(e,t){return i.setValues(e,"targetCollection",t)}function gc(e){return i.getValue(e,"text")}function hc(e){return i.getValue(e,"text")}function mc(e,t){return i.setValue(e,"text",t)}function yc(e){return i.getValue(e,"url")}function bc(e){return i.getValue(e,"url")}function xc(e,t){return i.setValue(e,"url",t)}function Vc(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function wc(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function Ac(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function _c(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function Sc(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function Ic(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function $c(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")||new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")||new Date().toISOString()),e=i.setValue(e,"error",void 0),i.isNotNull(t)&&(e=i.setValue(e,"result",t)),e}function kc(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date().toISOString()),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date().toISOString()),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function Tc(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function Nc(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var wn={};y(wn,{_utilGetId:()=>Lc,getDataType:()=>Dc,isArray:()=>lo,isBoolean:()=>eo,isDate:()=>io,isJsonld:()=>ao,isNotArray:()=>Mc,isNotBoolean:()=>Cc,isNotDate:()=>Bc,isNotNull:()=>jc,isNotNumber:()=>vc,isNotObject:()=>Hc,isNotString:()=>Oc,isNull:()=>Vn,isNumber:()=>to,isObject:()=>oo,isString:()=>no,randomUUID:()=>Pc,toArray:()=>uo,toBoolean:()=>Rc,toDate:()=>so,toNumber:()=>ro,toObject:()=>Fc,toSingle:()=>Ec,toString:()=>Uc});function Pc(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function Dc(e){if(Vn(e))return"Undefined";if(lo(e))return"Array";if(ao(e))return"Jsonld";let t=so(e);if(io(t))return"Date";let r=ro(e);return to(r)?"Number":oo(e)?"Object":no(e)?'String"':eo(e)?"Boolean":"Undefined"}function Vn(e){return g.isNull(e)}function jc(e){return g.isNotNull(e)}function eo(e){return g.isBoolean(e)}function Cc(e){return g.isNotBoolean(e)}function Rc(e){return g.toBoolean(e)}function to(e){return g.isNumber(e)}function vc(e){return g.isNotNumber(e)}function ro(e){return g.toNumber(e)}function no(e){return g.isString(e)}function Oc(e){return g.isNotString(e)}function Uc(e){return g.toString(e)}function io(e){return g.isDate(e)}function Bc(e){return g.isNotDate(e)}function so(e){return g.toDate(e)}function oo(e){return g.isObject(e)}function Hc(e){return g.isNotObject(e)}function Fc(e){return g.toObject(e)}function ao(e){return Vn(e)?!1:!!(e?.["@id"]||e?.["@type"])}function lo(e){return g.isArray(e)}function Mc(e){return g.isNotArray(e)}function uo(e){return g.toArray(e)}function Ec(e){return e=uo(e),e?.[0]??void 0}function Lc(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var An={};y(An,{concat:()=>Wc,dedupe:()=>co,deleteItem:()=>qc,diff:()=>zc,filter:()=>Xc,find:()=>Yc,includes:()=>jt,insertItem:()=>Gc,intersection:()=>Jc,length:()=>Kc,search:()=>po,sort:()=>ve,upsertItem:()=>fo});function co(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)jt(r,n)==!1&&(t==!0&&i.isValid(n)&&po(e,n).forEach(l=>n=i.merge(l,n)),r.push(n));return r=ve(r),r}function jt(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function Wc(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=co(n)),n=ve(n),n}function ve(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function Jc(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)jt(t,n)==!0&&r.push(n);return r=ve(r),r}function zc(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)jt(t,n)==!1&&r.push(n);return r=ve(r),r}function qc(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function fo(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function Gc(e,t){return fo(e,t)}function Kc(e){return e=i.toArray(e),e.length}function Yc(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function po(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function Xc(e,t,r,n,s,l){return e=i.toArray(e),e.length==0?itemList:(i.isNotNull(t)&&(e=e.filter(u=>i.evaluate(u,t))),e=ve(e,r,n),e.length==0||(l=i.toNumber(l),i.isNumber(l)&&(e=e.slice(l)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=slice(0,s))),e)}var _n={};y(_n,{exportToString:()=>go});function go(e){return Array.isArray(e)?Zc(e):i.record_type(e)=="ListItem"?Qc(e):i.record_type(e)=="ItemList"?ef(e):i.record_type(e)=="Action"?tf(e):i.getValue(e,"name")||i.getValue(e,"@id")}function Zc(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=go(r)+`
`),t}function Qc(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function ef(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function tf(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var In={};y(In,{DatabaseHelper:()=>Sn,testDB:()=>rf});var Sn=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(l=>typeof l=="string"?{"@id":l}:l),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(l=>l?.record||l),r=r.map(l=>l?.["@id"]||l),r=[...new Set(r)],r=r.filter(l=>l);let n=i.toArray(this._retrieved);r=r.filter(l=>n.includes(l)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function rf(){}var Rn={};y(Rn,{add:()=>lf,append:()=>it,clean:()=>$n,decrementPositions:()=>jn,duplicate:()=>hf,ensurePositions:()=>Ue,ensurePreviousNextItem:()=>Ot,filter:()=>mf,find:()=>G,findByItem:()=>kn,findByListItem:()=>Ct,findByPosition:()=>wo,getILE:()=>af,getItem:()=>at,getItemListElement:()=>T,getItems:()=>Ao,getListItems:()=>yf,getMaxPosition:()=>ot,getMinPosition:()=>Cn,getPosition:()=>P,gt:()=>Vo,incrementPositions:()=>Dn,insert:()=>v,insertAfter:()=>Pn,insertBefore:()=>Nn,isItemList:()=>R,isListItem:()=>Rt,length:()=>of,lt:()=>xo,move:()=>uf,moveAfter:()=>pf,moveBefore:()=>ff,moveDown:()=>cf,moveUp:()=>df,prepend:()=>mo,remove:()=>bo,replace:()=>yo,replaceItem:()=>xf,setItem:()=>So,setItemListElement:()=>B,setItems:()=>_o,setPosition:()=>vt,sort:()=>st,toItemList:()=>sf,toListItem:()=>Oe,toString:()=>nf,toStringItemList:()=>ho,toStringListItem:()=>Tn,updateItem:()=>bf,upsert:()=>gf});function nf(e){return R(e)?ho(e):Tn(e)}function ho(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=T(e);return t=t.concat(r.map(n=>Tn(n))),t.join(`
`)}function Tn(e){return`${P(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function R(e){return i.record_type(e)==="ItemList"}function sf(e){if(R(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>Oe(r,n))},$n(e)}return $n(e)}function $n(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=T(e);return t=t.map(r=>Oe(r)),t=Ue(t),t=Ot(t),e=B(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function of(e){return T(e).length}function T(e){return i.getValues(e,"itemListElement")||[]}function af(e){return T(e)}function B(e,t){return t=i.toArray(t),t=t.map((n,s)=>Oe(n)),t=Ue(t),t=Ot(t),e=i.setValues(e,"itemListElement",t),i.getValue(e,"numberOfItems")!=t.length&&(e=i.setValue(e,"numberOfItems",t.length)),e}function v(e,t,r){if(e=Ue(e),i.isArray(t)){let s=r;for(let l of t)e=v(e,l,s),(s||s===0)&&(s+=1);return e}t=Oe(t,r);let n=T(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??ot(n),r=r??n.length,r=r>=0?r:0,n=Dn(n,r),n=st(n),n.push(t),e=B(e,n),e}function Nn(e,t,r){if(i.isArray(t)){for(let l of t)e=Nn(e,l,r);return e}let n=G(e,r);if(!n)return v(e,t);let s=P(n);return v(e,t,s)}function Pn(e,t,r){if(i.isArray(t)){for(let l of t)e=Pn(e,l,r);return e}let n=G(e,r);if(!n)return v(e,t);let s=P(n);return v(e,t,s+1)}function mo(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=mo(e,t?.[r],referenceItem);return e}return v(e,t,0)}function it(e,t){if(i.isArray(t)){for(let s of t)e=it(e,s,referenceItem);return e}let r=T(e);if(r.length==0)return v(e,t,0);let n=ot(e);return n||n===0?v(e,t,n+1):v(e,t,r.length)}function lf(e,t){return it(e,t)}function uf(e,t,r){return v(e,t,r)}function df(e,t){let r=G(e,t),n=P(r);return n==0?e:v(e,r,n-1)}function cf(e,t){let r=G(e,t),n=P(r),s=ot(e);return n==s?e:v(e,r,n+1)}function ff(e,t,r){return Nn(e,t,r)}function pf(e,t,r){return Pn(e,t,r)}function yo(e,t,r){let n=T(e),s=[];for(let l of n){let u=at(l);i.isSame(u,r)&&(u=So(l,t)),s.push(l)}return B(e,s)}function gf(e,t){return G(e,t)?yo(e,t,i.ref(t)):it(e,t)}function hf(e,t){if(Rt(t)){let r=G(t);t=at(r)}return it(e,t)}function bo(e,t){if(i.isArray(t)){for(let l of t)e=bo(e,l);return e}e=Ue(e);let r=T(e),n=G(r,t),s=P(n);return r=r.filter(l=>i.isSame(l,n)==!1),r=jn(r,s),e=B(e,r),e}function mf(e,t){return R(e)&&(e=i.getItemListElement(e)),t&&(e=i.filter(e,t)),e}function Rt(e){return i.record_type(e)==="ListItem"}function Oe(e,t){return Rt(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function xo(e,t){let r=P(e)??void 0,n=P(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function Vo(e,t){let r=P(e)??void 0,n=P(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function st(e){if(R(e)){let r=e,n=T(r),s=st(n);return B(r,s)}function t(r,n){return xo(r,n)==!0?-1:Vo(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function G(e,t){if(!i.isNull(t))return i.isNumber(t)?wo(e,t):Rt(t)?Ct(e,t):i.record_type(t)?kn(e,t):kn(e,t)||Ct(e,t)}function wo(e,t){if(R(e)&&(e=T(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(P(r)==t)return r}}function Ct(e,t){if(R(e)&&(e=T(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function kn(e,t){if(R(e)&&(e=T(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=at(r);if(i.isSame(n,t))return r}}function P(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function vt(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,P(e)==t||(e=i.setValue(e,"position",t)),e}function Dn(e,t){if(t=t??0,R(e)){let n=e;e=T(n);let s=Dn(e,t);return B(n,s)}let r=[];for(let n of e){let s=P(n);s>=t&&(n=vt(n,s+1)),r.push(n)}return r}function jn(e,t){if(t=t??0,R(e)){let n=e;e=T(n);let s=jn(e,t);return B(n,s)}let r=[];for(let n of e){let s=P(n);s!=0&&s>=t&&(n=vt(n,s-1)),r.push(n)}return r}function Ue(e,t){if(R(e)){let s=e;e=T(s);let l=Ue(e);return B(s,l)}if(e=i.toArray(e),e.length==0)return e;e=st(e);let r=t??Cn(e)??0,n=[];for(let s of e)s=vt(s,r),r+=1,n.push(s);return n}function Cn(e){if(R(e)){let s=T(s);return Cn(s)}e=i.toArray(e);let t=e.map(n=>P(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function ot(e){if(R(e))return e=T(e),ot(e);e=i.toArray(e);let t=e.map(n=>P(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function Ot(e){if(R(e)){let r=e;e=T(r);let n=Ot(e);return B(r,n)}e=i.toArray(e),e=st(e);let t=[];for(let r of e){let n=P(r),s=G(e,n-1),l=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",l);let u=G(e,n+1),d=u?i.ref(u):void 0;r=i.setValue(r,"nextItem",d),t.push(r)}return t}function Ao(e){if(R(e)){let n=T(e);return Ao(n)}return e.map(r=>at(r))}function _o(e,t){if(R(e)){let n=e;e=T(n);let s=_o(e);return B(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>Oe(n)),e.concat(t)}function yf(e){return T(listItems)}function at(e){return i.getValue(e,"item")}function So(e,t){return i.setValue(e,"item",t)}function bf(e,t,r){let n=Ct(e,t);n=i.setValue(n,"item",r)}function xf(e,t,r){let n=T(e),s=i.toRecordID(t);for(let l=0;l<n.length;l++){let u=n[l];i.record_id(u)==s&&(n[l]=i.setItem(u,r))}return e=B(n),e}var Un={};y(Un,{appendAction:()=>Po,deleteAction:()=>Ro,duplicateAction:()=>Co,execute:()=>vn,insertAction:()=>$o,insertAfterAction:()=>To,insertBeforeAction:()=>ko,moveDownAction:()=>jo,moveUpAction:()=>Do,prependAction:()=>No,replaceAction:()=>On,searchAction:()=>Vf});function vn(e){if(i.isArray(e)){let n=new i.DB;n.set(e);let s=[];for(let l of e){l=n.get(l);let u=vn(l);s.push(u),n.set(i.getResults(u))}return s}let t=i.getValues(e,"hasPart");if(t.length>0){let n=t.map(f=>i.list.toItemList(f)),s=new i.DB;s.set(n);let l=[],u,d=!1;for(let f of n){let p=i.list.getItemListElement(f);for(let m of p)a=i.getItem(m),a=s.get(a),d==!0&&(a=i.setFailed(a,"Previous step failed"),f=i.list.replaceItem(f,m,u)),d==!1&&(u=vn(a),d=i.isFailed(u),f=i.list.replaceItem(f,m,u),s.set(i.getResults(u)));l.push(f)}e=i.setValues(e,"hasPart",l);let c=i.getResults(u);return e=i.setCompleted(e,c),e}let r=i.record_type(e);if(r=="UpsertAction")return Io(e);if(r=="ReplaceAction")return On(e);if(r=="UpdateAction")return Io(e);if(r=="InsertAction")return $o(e);if(r=="InsertBeforeAction")return ko(e);if(r=="InsertAfterAction")return To(e);if(r=="MoveUpAction")return Do(e);if(r=="MoveDownAction")return jo(e);if(r=="AppendAction")return Po(e);if(r=="PrependAction")return No(e);if(r=="ReplaceAction")return On(e);if(r=="DuplicateAction")return Co(e);if(r=="DeleteAction")return Ro(e)}function Io(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t){let l=i.getValue(s,"propertyID"),u=i.getValue(s,"value");n=i.setValues(n,l,u)}e=i.addValue(e,"result",n)}return r.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function $o(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insert(s,l,r);e=i.addValue(e,"result",s)}return n.length==0&&(e=i.addValues(e,"result",t)),e=i.setCompleted(e),e}function ko(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insertBefore(s,l,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function To(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let s of n){for(let l of t)s=i.list.insertAfter(s,l,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function No(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Po(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Do(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function jo(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function On(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee");if(n.length==0)return e=i.setFailed(e,"No replacee provided in action"),e;let s=i.list.replace(s,r,n);return e=i.addValue(e,"result",t),e=i.setCompleted(e),e}function Co(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Ro(e){let t=i.getObjects(e),r=i.targetCollections(e);if(t.length==0)return e=i.setFailed(e,"No object provided in action"),e;for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Vf(e){let t=i.getValues(e,"query"),r=i.targetCollections(e);for(let n of r){let s=i.list.getItemListElement(n);for(let u of t)s=i.list.filter(s,o);let l=i.list.toItemList(s);e=i.addValue(e,"result",l)}return e=i.setCompleted(e),e}var Hn={};y(Hn,{add:()=>wf,addAppendAction:()=>zo,addDeleteAction:()=>Eo,addDuplicateAction:()=>Wo,addMoveDownAction:()=>Mo,addMoveUpAction:()=>Ho,addPotentialActions:()=>Ht,addPropertyUpdateAction:()=>D,addSetActiveActionStatus:()=>Bn,addSetCompletedActionStatus:()=>Ut,addSetFailedActionStatus:()=>Bt,addSetPotentialActionStatus:()=>Uo,defineActionsForAction:()=>Oo,defineActionsForItemList:()=>vo,getAppendAction:()=>qo,getDeleteAction:()=>Lo,getDuplicateAction:()=>Jo,getMoveDownAction:()=>Af,getMoveUpAction:()=>Fo,getPropertyUpdateAction:()=>Bo});function wf(e,t){return Ht(e,t)}function Ht(e,t){if(!e||typeof e=="string")return e;if(i.isArray(e))return e.map(n=>Ht(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=Oo(e,t)),r=="ItemList"&&(e=vo(e,t));for(let n of Object.keys(e))e[n]=Ht(e[n],t);return e}function vo(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let l=0;l<r.length;l++){let u=i.getPosition(r[l]);u>0&&(r[l]=Ho(r[l],e,t)),u<n-1&&(r[l]=Mo(r[l],e,t)),r[l]=Eo(r[l],e,t),r[l]=Wo(r[l],e,t)}e=i.setValues(e,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=zo(e,s,t),e}function Oo(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return i.getValue(e,"actionStatus")||(e=Uo(e,t),e=Bn(e,t),e=Ut(e,t),e=Bt(e,t)),i.isPotential(e)&&(e=Bn(e,t),e=Ut(e,t),e=Bt(e,t)),i.isActive(e)&&(e=Ut(e,t),e=Bt(e,t)),e}function Uo(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=D(e,t,"actionStatus","PotentialActionStatus"),e=D(e,t,"startTime",""),e=D(e,t,"endTime",""),e=D(e,t,"error",""),e}function Bn(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=D(e,t,"actionStatus","ActiveActionStatus"),e=D(e,t,"startTime",r??new Date),e=D(e,t,"endTime",""),e=D(e,t,"error",""),e}function Ut(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=D(e,t,"actionStatus","CompletedActionStatus"),e=D(e,t,"startTime",r??new Date),e=D(e,t,"endTime",n??new Date),e=D(e,t,"error",""),e}function Bt(e,t){let r=i.getValue(e,"startTime"),n=i.getValue(e,"endTime");return e=D(e,t,"actionStatus","FailedActionStatus"),e=D(e,t,"startTime",r??new Date),e=D(e,t,"endTime",n??new Date),e=D(e,t,"error",""),e}function D(e,t,r,n,s){let l=Bo(e,t,r,n,s);return e=i.addValue(e,"potentialAction",l),e}function Bo(e,t,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(e),url:t}}function Ho(e,t,r,n){let s=Fo(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Fo(e,t,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Mo(e,t,r,n){let s=etMoveDownAction(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Af(e,t,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Eo(e,t,r,n){let s=Lo(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Lo(e,t,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function Wo(e,t,r,n){let s=Jo(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function Jo(e,t,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(e),targetCollection:i.ref(t),url:r}}function zo(e,t,r,n){let s=qo(e,t,r,n);return e=i.addValue(e,"potentialAction",s),e}function qo(e,t,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:t,targetCollection:i.ref(e),url:r}}var i={dot:ke,...jr,...Rr,..._t,...dn,...pn,...hn,...xn,...wn,...An,..._n,...In,list:Rn,...Un,potentialActionHelpers:Hn};var Fn={};y(Fn,{getContent:()=>Sf,getIcon:()=>Tf,getTitle1:()=>Ko,getTitle2:()=>_f,imageUrl:()=>$f,imageUrls:()=>kf,thumbnailUrl:()=>If});function Ko(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),l=i.getValue(e,"familyName"),u=i.getValue(e,"name");if(r=="Person"){let d=[s,l];if(d=d.filter(c=>c!==void 0),d.length>0)return d.join(" ")}if(r=="ListItem"){let d=i.getValue(e,"item");return Ko(d)}return u||n||""}function _f(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),l=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let u=i.getValue("actionStatus");return u=u||"",u=u.replace("ActionStatus",""),u??""}return l||""}function Sf(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),l;return l=i.getValue(e,"abstract"),l&&typeof l=="string"||(l=i.getValue(e,"text"),l&&typeof l=="string")||(l=i.getValue(e,"description"),l&&typeof l=="string")?l:""}function If(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function $f(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function kf(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(l=>l&&typeof l=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function Tf(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Go;case"action":return Nf;case"person":return Pf;case"organization":return Df;case"itemlist":return jf;case"listitem":return Cf;case"postaladdress":return Rf;case"product":return vf;case"webapi":return Of;case"website":return Uf;case"webpage":return Bf;default:return Go}}var Go='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',Nf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',Pf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',Df='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',jf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',Cf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Rf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',vf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',Of='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Uf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Bf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Jm=globalThis.crypto.randomUUID;function Mt(e,t){if(Array.isArray(e))return e.map(n=>Mt(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=Mt(e);let r=i.record_type(e);return e=Ft(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=Ft(e,"MoveUpAction","Move Up",t),e=Ft(e,"MoveDownAction","Move Down",t),e=Ft(e,"DeleteAction","Delete",t)),e}function Ft(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=Hf(e,s),e}function Hf(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var Mn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function Et(e){let t=[];return t=t.concat(Mn?.[e]?.properties||[]),Mn?.[e]?.parent&&(t=t.concat(Et(Mn[e].parent))),t}function Lt(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:S.thing("Object thing"),instrument:S.thing("Instrument thing"),agent:S.person("Agent thing"),hasPart:[]};if(t>0)for(let l=0;l<3;l++){let u=e+"_"+String(l);s.hasPart.push(Lt(u,t-1))}return s}function En(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Wt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,l={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:Ff(),image:S.image(),hasPart:[]};if(r==0&&(l.author=S.person(),l.datePublished=new Date().toISOString()),r<t)for(let u=0;u<3;u++){let d=e+"_"+String(u);l.hasPart.push(Wt(d,t,r+1))}return l}function Ff(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function lt(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var oy=globalThis.crypto.randomUUID;function Ln(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let l=0;l<e;l++){let u=Mf(S.thing(l),l);s&&(s.nextItem={"@id":u?.["@id"]},u.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(u),s=u}return n}function Mf(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function Wn(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:S.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:S.organization("org_a")}}function Jn(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:S.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function zn(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:S.address()}}function qn(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Gn(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function Kn(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let l of["blue","white","red"]){let u=S.product(`variant ${s} ${l}`);u.size=s,u.color=l,u.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(u)}return n}function Jt(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:lt(e),hasPart:[]};if(t>0)for(let l=0;l<3;l++){let u=e+"_"+String(l);s.hasPart.push(Jt(u,t-1))}return s}function Yn(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:S.person(0),recipient:[S.person(10),S.person(11),S.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function Xn(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let l=0;l<t;l++){let u=e+"_"+String(l),d=S.message(u);d.sender=l%2==0?d.recipient[0]:d.recipient[1],d.recipient=l%2==0?d.recipient.toSpliced(0,1):d.recipient.toSpliced(1,1);let c=new Date;c.setDate(c.getDate()-t+l),d.dateSent=c,d.dateReceived=c,s.hasPart.push(d)}return s}var S={action:Lt,article:Wt,address:En,conversation:Xn,image:lt,itemList:Ln,message:Yn,offer:Wn,organization:Jn,person:zn,postalAddress:qn,product:Gn,productGroup:Kn,thing:Jt,Action:Lt,Article:Wt,Address:En,Conversation:Xn,Image:lt,ItemList:Ln,Message:Yn,Offer:Wn,Organization:Jn,Person:zn,PostalAddress:qn,Product:Gn,ProductGroup:Kn,Thing:Jt};var zt={};y(zt,{transformHelpers:()=>b});var Qn={};y(Qn,{jsonToMarkdown:()=>Zn});function Zn(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((l,u)=>{typeof l=="object"&&l!==null?(n+=`${s}* **Record ${u+1}:**
`,n+=Zn(l,t+1)):n+=`${s}* ${l}
`})}else typeof r=="object"?Object.entries(r).forEach(([l,u])=>{u!==null&&typeof u=="object"?(n+=`${s}* **${l}:**
`,n+=Zn(u,t+1)):n+=`${s}* **${l}:** ${u}
`}):n+=`${s}* ${r}
`;return n}var ti={};y(ti,{jsonToYaml:()=>ut,yamlToJson:()=>Ef});function ut(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(l=>{if(n+=`${r}- `,typeof l=="object"&&l!==null){let u=ut(l,t+2).trimStart();n+=u}else n+=ut(l,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(l=>{let u=e[l];n+=`${r}${l}:`,typeof u=="object"&&u!==null?n+=`
`+ut(u,t+2):n+=" "+ut(u,0)}),n)}function Ef(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let l=s.search(/\S/),u=s.trim();for(;n.length>1&&l<=n[n.length-1].indent;)n.pop();let d=n[n.length-1];if(u.startsWith("-")){d.type!=="array"&&d.type==="object"&&d.lastKey&&(d.value[d.lastKey]=[],n.push({indent:l,value:d.value[d.lastKey],type:"array"}));let c=n[n.length-1],f=u.substring(1).trim();if(f.includes(":")){let[p,...m]=f.split(":"),w=p.trim(),$=m.join(":").trim(),J=ei($),ge={[w]:J};c.value.push(ge),n.push({indent:l+2,value:ge,type:"object",lastKey:w})}else c.value.push(ei(f))}else if(u.includes(":")){let[c,...f]=u.split(":"),p=c.trim(),m=f.join(":").trim();d.lastKey=p,m===""?(d.value[p]={},n.push({indent:l,value:d.value[p],type:"object",lastKey:p})):d.value[p]=ei(m)}}return r}function ei(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var Yo={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Xo="DesignToken",Zo={css:{get:zf},get:ri,set:Qo,getValue:Wf,setValue:Jf,sampleRecord:ea};function ri(e){if(!e)return;let t=i.getAdditionalProperty(e,Xo);return t=t||{},t}function Qo(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,Xo,t),e}function Wf(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=ri(e),n=Le(r,t);return Le(n,"$value")}function Jf(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=ri(),s=ea(),l=Le(s,t);return l.$value=r,n=At(n,t,l),e=Qo(e,n),e}function zf(e,t="dt"){let r=[];function n(u,d=[]){for(let[c,f]of Object.entries(u)){if(f==null)continue;let p=[...d,c];if(typeof f=="object"&&"value"in f){let m=`--${p.map($=>$.toLowerCase()).join("-")}`,w=s(f.value);r.push(`  ${m}: ${w};`)}else if(typeof f=="object"&&!Array.isArray(f))n(f,p);else{let m=`--${p.map($=>$.toLowerCase()).join("-")}`,w=s(f);r.push(`  ${m}: ${w};`)}}}function s(u){return Array.isArray(u)?u.join(", "):typeof u=="number"?u===0?"0":`${u}px`:String(u).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function ea(){return Yo}var b={markdown:Qn,yaml:ti,designToken:Zo};var Gt=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return ni(this.record)}toJSON(){return this.record}toMD(){return b.markdown.jsonToMarkdown(this.record)}toYaml(){return b.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=ee(qt(this._record),this.baseUrl)),i.simplify(qt(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(qt(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=le(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(qt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return Et(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let l of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[l]?.includeChildren==!1)continue;this._callbacks?.[l].callbackFn(s)}catch(u){console.log("Callback failed: ",l,String(u),s)}}static toString(t){return ni(t)}static toMD(t){return b.markdown.jsonToMarkdown(t)}static toYaml(t){return b.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new A[r](b.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return le(t)}static example(t=0,r=5){let n=this.name;return new A[n](S[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return Et(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,le(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,le(n))}static addValue(t,r,n){return i.addValue(t,r,le(n))}static addValues(t,r,n){return i.addValues(t,r,le(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return Mt(t)}static addAdditionalProperty(t,r,n){return qf(t,"additionalProperty",r,n)}};function qt(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let l of Object.keys(n))s[l]=t(n?.[l]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function le(e){if(Array.isArray(e))return e.map(t=>le(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=A?.[t]||A.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=le(e._record?.[t]);return e}function ni(e){if(Array.isArray(e)){let l=e.map(u=>ni(u));return l=l.join(`
`),l}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function qf(e,t,r,n){let s=new A.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var _=class extends Gt{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=g.url.clean(value),t}set cleanUrl(t){url=g.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=ee(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(l=>l?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var be=class extends _{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(this.record,t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,l,u){return search(t,r,n,s,l,u)}};var O=class extends _{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return ta(this.record,t)}static test(t,r){return ta(t,r)}};function ta(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",l=new RegExp(t.valuePattern,"gi");if(e.test(l)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var dt=class extends _{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=sa(this.record,t,r)}addMaxValue(t,r){this.record=oa(this.record,t,r)}addMinLength(t,r){this.record=aa(this.record,t,r)}addMaxLength(t,r){this.record=la(this.record,t,r)}addDefaultValue(t,r){this.record=ua(this.record,t,r)}addValueRequired(t,r){this.record=da(this.record,t,r)}addValuePattern(t,r){this.record=ra(this.record,t,r)}addMultipleValues(t,r){this.record=na(this.record,t,r)}addStepValue(t,r){this.record=ia(this.record,t,r)}testConditions(){return ii(this.record)}getInputconditions(){return F(this.record)}addInputCondition(t,r){return this.addValues(t+"-input",r)}getOutputConditions(){return Gf(this.record)}addOutputCondition(t,r){return this.addValues(t+"-output",r)}test(){return ii(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return sa(t,r,n)}static addMaxValue(t,r,n){return oa(t,r,n)}static addMinLength(t,r,n){return aa(t,r,n)}static addMaxLength(t,r,n){return la(t,r,n)}static addDefaultValue(t,r,n){return ua(t,r,n)}static addValueRequired(t,r,n){return da(t,r,n)}static addValuePattern(t,r,n){return ra(t,r,n)}static addMultipleValues(t,r,n){return na(t,r,n)}static addStepValue(t,r,n){return ia(t,r,n)}static test(t){return ii(t)}};function F(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function re(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function Gf(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function ra(e,t,r){let n=F(e,t)||new O;return n.valuePattern=r,e=re(e,t,n),e}function na(e,t,r){let n=F(e,t)||new O;return n.multipleValues=r,e=re(e,t,n),e}function ia(e,t,r){let n=F(e,t)||new O;return n.stepValue=r,e=re(e,t,n),e}function sa(e,t,r){let n=F(e,t)||new O;return n.minValue=r,e=re(e,t,n),e}function oa(e,t,r){let n=F(e,t)||new O;return n.maxValue=r,e=re(n.record,t,r),e}function aa(e,t,r){let n=F(e,t)||new O;return n.valueMinLength=r,e=re(e,t,n),e}function la(e,t,r){let n=F(e,t)||new O;return n.valueMaxLength=r,e=re(e,t,n),e}function ua(e,t,r){let n=F(e,t)||new O;return n.defaultValue=r,e=re(e,t,n),e}function da(e,t,r){let n=F(e,t)||new O;return n.valueRequired=r,e=re(e,t,n),e}function ii(e){let t=F(e);for(let r of t)if(O.test(r,e?.[r.propertyID])==!1)return!1;return!0}var K=class extends dt{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(t){return this.setValues("targetCollection",t)}get toLocation(){return this.getValues("toLocation")}set toLocation(t){return this.setValues("toLocation",t)}},Kt=class extends K{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Yt=class extends K{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Xt=class extends K{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(t){return this.setValues("replacer",t)}get replacee(){return this.getValues("replacee")}set replacee(t){return this.setValues("replacee",t)}},Zt=class extends K{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Qt=class extends K{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},er=class extends K{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var tr=class extends _{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return Kf(this.record)}get(t){return b.designToken.getValue(this.record,t)}set(t,r){return b.designToken.setValue(this.record,t,r)}get token(){return b.designToken.get(this.record)}set token(t){this.record=b.designToken.set(this.record,t)}get primary(){return b.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=b.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return b.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=b.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return b.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=b.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return b.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=b.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return b.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=b.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return b.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=b.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return b.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=b.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new rr(this,"typography.heading-lg")}get body(){return new rr(this,"typography.body-md")}get spacingSm(){return b.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return b.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return b.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return b.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return b.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return b.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return b.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return b.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return b.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return b.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new si(this,"shadow.elevation-md")}sample(){return b.designToken.getSampleRecord()}},rr=class{constructor(t,r){this.base=t,this.basePath=I(r)}get fontFamily(){return b.designToken.getValue(record,I(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontFamily"),t)}get fontWeight(){return b.designToken.getValue(record,I(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontWeight"),t)}get fontSize(){return b.designToken.getValue(record,I(this.basePath,"fontSize"))}set fontSize(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontSize"),t)}get lineHeight(){return b.designToken.getValue(record,I(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"lineHeight"),t)}get letterSpacing(){return b.designToken.getValue(record,I(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"letterSpacing"),t)}get family(){return b.designToken.getValue(record,I(this.basePath,"fontFamily"))}set family(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontFamily"),t)}get weight(){return b.designToken.getValue(record,I(this.basePath,"fontWeight"))}set weight(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontWeight"),t)}get size(){return b.designToken.getValue(record,I(this.basePath,"fontSize"))}set size(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"fontSize"),t)}get height(){return b.designToken.getValue(record,I(this.basePath,"lineHeight"))}set height(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"lineHeight"),t)}get spacing(){return b.designToken.getValue(record,I(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"letterSpacing"),t)}},si=class{constructor(t,r){this.base=t,this.basePath=I(r)}get color(){return b.designToken.getValue(record,I(this.basePath,"color"))}set color(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"color"),t)}get offsetX(){return b.designToken.getValue(record,I(this.basePath,"offsetX"))}set offsetX(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"offsetX"),t)}get offsetY(){return b.designToken.getValue(record,I(this.basePath,"offsetY"))}set offsetY(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"offsetY"),t)}get blur(){return b.designToken.getValue(record,I(this.basePath,"blur"))}set blur(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"blur"),t)}get spread(){return b.designToken.getValue(record,I(this.basePath,"spread"))}set spread(t){this.base.record=b.designToken.setValue(record,I(this.basePath,"spread"),t)}};function I(e,t,r){let n=[e,t,r];n=n.filter(l=>l!=null&&l!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Kf(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var H=class extends _{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var M=class extends H{constructor(t,r,n,s,l,u){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=l,this.dateReceived=u)}toString(){return ai(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",Be(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",Be(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",Be(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",Be(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",Be(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return fa(this.record)}set gmail(t){this.record=ca(t)}get outlook(){return ga(this.record)}set outlook(t){this.record=pa(t)}static toString(t){return ai(t)}static fromGmail(t){return ca(t)}static toGmail(t){return fa(t)}static fromOutlook(t){return pa(t)}static toOutlook(t){return ga(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),l=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-l.getTime()}),t}};function ai(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(f=>ai(f)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=oi(r,20);let s=i.getValues(e,"recipient").map(f=>f?.email||f?.name||"");s=oi(s,25);let l=i.getValue(e,"headline")||"";l.length>20&&(l=oi(l,30));let u=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",d="";try{d=new Intl.DateTimeFormat("en-US").format(u)}catch{}return`${r} | ${s} | ${l} | ${d}`}function oi(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function Be(e){return e?Array.isArray(e)?e.map(t=>Be(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function ca(e){let t=new M;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function fa(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function pa(e){let t=new M;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function ga(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var ir=class extends H{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Yf(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=M.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ha(this.record)}add(t,r,n,s,l,u){this.record=nr(this.record,t,r,n,s,l,u)}addMessage(t,r,n,s,l,u){this.record=nr(this.record,t,r,n,s,l,u)}newMessage(t,r,n,s,l,u){let d=new M(t,r,n,s,l,u);this.messages=this.messages.push(d)}static getParticipants(t){return ha(t)}static newMessage(t,r,n,s,l,u,d){return nr(t,r,n,s,l,u,d)}static addMessage(t,r,n,s,l,u,d){return nr(t,r,n,s,l,u,d)}static getMessages(t){return ct(t)}static getFirstMessage(t){let r=ct(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=ct(t);return r.length>0?r[r.length-1]:void 0}};function Yf(e){let t=ct(e),r=`Conversation with ${t.length} messages:
`;return r+=M.toString(t),r}function nr(e,t,r,n,s,l,u){let d=new M(t,r,n,s,l,u);return e=i.addValues(e,"hasPart",d),e}function ct(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=Xf(t),t}function Xf(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function ha(e){let t=ct(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(u=>{r.add(u)})}),Array.from(r)}var He=class extends _{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Zf(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Zf(e){let t="";t+=`${e?.name||e?.["@id"]} `}var sr=class extends _{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return Qf(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new He(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function Qf(e){let t="";t+=`${e?.name||e?.["@id"]} `}var xe=class extends _{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return ma(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=_.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=_.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=_.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=_.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=_.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=_.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=_.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=_.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=_.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=_.setValues(this._record,"validThrough",t)}};function ma(e){if(Array.isArray(e))return e.map(s=>ma(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var Ve=class extends H{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return li(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new xe(t,r))}static addOffer(t,r,n="CAD"){return ep(t,r,n)}static toString(t){return li(t)}};function li(e){if(Array.isArray(e))return e.map(r=>li(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function ep(e,t,r){let n=new xe(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var or=class extends Ve{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return ui(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=tp(this.record,t)}generateVariants(t){this.record=rp(this.record,t)}static toString(t){return ui(t)}};function ui(e){if(Array.isArray(e))return e.map(n=>ui(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+Ve.toString(n)+`
`;return t}function tp(e,t){return e=i.addValues(e,"hasVariant",t),e}function rp(e,t){if(Array.isArray(t)){let l={};for(let u of t)l[u.propertyID]=l?.[u.propertyID]||[],l[u.propertyID].push(l.value);t=l}let r=np(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=_.getProperties("Product");for(let l of r){let u=JSON.parse(JSON.stringify(e));u["@type"]="Product",delete u.hasVariant,delete u.productGroupID,delete u.variesBy,u["@id"]=void 0,u.isVariantOf={"@id":e?.["@id"]};let d=[];for(let f of Object.keys(l))d.push(l?.[f]),s.includes(f)?u=i.setValue(u,f,l[f]):u=_.addAdditionalProperty(u,f,l[f]);let c=_.getValue(u,"name")+" "+d.join(" ");u=_.setValue(u,"name",c),e=_.addValue(e,"hasVariant",u)}return e}function np(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],l=[];for(let u of r)for(let d of s)l.push({...u,[n]:d});return l},[{}])}var ar=class extends _{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return ya(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function ya(e){if(Array.isArray(e))return e.map(r=>ya(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var we=class extends H{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new be(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=ft(this.record,"WPHeader"),Y(this.record,"WPHeader")}set WPHeader(t){this.record=X(this.record,"WPHeader",t)}get WPFooter(){return this.record=ft(this.record,"WPFooter"),Y(this.record,"WPFooter")}set WPFooter(t){this.record=X(this.record,"WPFooter",t)}get WPSideBar(){return this.record=ft(this.record,"WPSideBar"),Y(this.record,"WPSideBar")}set WPSideBar(t){this.record=X(this.record,"WPSideBar",t)}get Table(){return Y(this.record,"Table")}set Table(t){this.record=X(this.record,"Table",t)}addHeaderLink(t,r){this.record=ba(this.record,t,r)}addFooterLink(t,r){this.record=xa(this.record,t,r)}domain(){return Va(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=ip(t,this.url)}static getWPHeader(t){return Y(t,"WPHeader")}static getWPFooter(t){return Y(t,"WPFooter")}static getWPSideBar(t){return Y(t,"WPSideBar")}static getTable(t){return Y(t,"Table")}static setWPHeader(t,r){return X(t,"WPHeader",r)}static setWPFooter(t,r){return X(t,"WPFooter",r)}static setWPSideBar(t,r){return X(t,"WPSideBar",r)}static setTable(t,r){return X(t,"Table",r)}static addHeaderLink(t,r,n){return ba(t,r,n)}static addFooterLink(t,r,n){return xa(t,r,n)}static getDomain(t){return Va(i.getValue(t,"url")||t)}};function ft(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function Y(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function X(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function ba(e,t,r){e=ft(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=Y(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=X(e,"WPHeader",s),e}function xa(e,t,r){e=ft(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=Y(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=X(e,"WPFooter",s),e}function Va(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function ip(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(sp(e)=="Product"){let d=n.filter(w=>i.record_type(w)=="Product")[0];s.push({replacee:i.record_id(d),replacer:t+"#product"}),d=i.setValue(d,"url",t);let c=i.getValues(d,"brand");c=c.map(w=>w?.["@type"]?{"@type":"brand",name:w}:w),d=i.setValues(d,"brand",c);let f=n.filter(w=>i.record_type(w)=="Offer");f=f.map(w=>i.setValues(w,"itemOffered",i.ref(d))),d=i.setValues(d,"offers",f);let p=n.filter(w=>i.record_type(w)=="Review");f=f.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"review",p);let m=n.filter(w=>i.record_type(w)=="AggregateRating");return m=m.map(w=>i.setValues(w,"itemReviewed",i.ref(d))),d=i.setValues(d,"aggregateRating",m),d=i.replaceIds(d,s),d}return e}function sp(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var lr=class extends we{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new we(this);return n.url=t,n.name=r,n}domain(){return wa(this.url)}static getDomain(t){return wa(i.getValue(t,"url")||t)}};function wa(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var ur=class extends _{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var A={get:_.toThing,toThing:_.toThing,Action:dt,AddAction:Kt,AppendAction:Qt,BrandDesign:tr,Conversation:ir,CreativeWork:H,DataFeed:sr,DataFeedItem:He,DeleteAction:Yt,InsertAction:Zt,ItemList:be,Message:M,Offer:xe,Product:Ve,ProductGroup:or,PropertyValue:ar,Thing:_,PrependAction:er,ReplaceAction:Xt,UpdateAction:K,WebAPI:ur,WebPage:we,WebSite:lr,format:Fn,toThing:op};function op(e){let t=i.record_type(e);return A?.[t]?new A[t](e):new A.Thing(e)}var pi={};y(pi,{RdfDB:()=>dr,default:()=>ap,fromRDF:()=>fi,toRDF:()=>ci});var Yx=globalThis.crypto.randomUUID,dr=class{constructor(){this._db=[]}getRdf(t){return this._db.filter(r=>!t||r.subject==t)}getRecord(t){return fi(this.getRdf(t))}post(t,r){t=ci(t,r),t=Array.isArray(t)?t:[t],t.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},ap={RdfDB:dr,toRDF:ci,fromRDF:fi};function ci(e,t){function r(s,l,u,d){let c=[];if(Array.isArray(u))return c=c.concat(u.map((p,m)=>r(s,l,p,d))),c.flat();if(u?.subject&&u?.predicate&&u?.object)return[u];if(d&&typeof d=="object"&&(typeof u!="object"&&(u={"@value":u}),u["@annotation"]={...u?.["@annotation"]||{},...d}),l=="@annotation")return[];if(u?.["@value"]){let p=u?.["@annotation"];if(p&&typeof p=="object"){p["@id"]=p?.["@id"]||"_:"+globalThis.crypto.randomUUID();let m=Object.keys(p).map(w=>r(p["@id"],w,p[w]));c=c.concat(m),p=p?.["@id"]}return c=c.concat([{subject:s,predicate:l,object:u?.["@value"],label:d}]),c}if(typeof u=="object"){u["@id"]=u?.["@id"]||"_:"+globalThis.crypto.randomUUID();let p={subject:s,predicate:l,object:u?.["@id"],label:d};return c=c.concat([p]),c=c.concat(Object.keys(u).map(m=>r(u?.["@id"],m,u?.[m],d))),c.flat()}let f={subject:s,predicate:l,object:u,label:d};return c.concat([f])}let n=[];if(t){let s=di(t);s.length>1&&(n=n.concat(s.slice(1))),t=s?.[0]}return n=n.concat(r(null,null,e,t)),n=n.flat(),n=n.filter(s=>s.subject),n}function fi(e){e=Array.isArray(e)?e:[e];let t=new Map;for(let n of e)t.set(n?.subject,{"@id":n?.subject});for(let n of e){if(n.predicate=="@id")continue;let s=t.get(n.subject),l=n?.object,u=t.get(n?.object);u&&(l={"@id":u?.["@id"]}),n.label&&(l?.["@id"]||(l={"@value":l}),l["@annotation"]=n?.label),s[n.predicate]=s?.[n.predicate]||[],s[n.predicate]=Array.isArray(s[n.predicate])?s[n.predicate]:[s[n.predicate]],s[n.predicate].push(l)}let r=[...t.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function di(e){let t=[];if(Array.isArray(e))return t=e.map(r=>di(r)),t.flat();if(typeof e=="object"&&Object.keys(e).length>0)for(let r of Object.keys(e)){let n=e?.[r];n=Array.isArray(n)?n:[n];let s=[];for(let l of n)typeof l=="object"?(l["@id"]=l?.["@id"]||"_:"+globalThis.crypto.randomUUID(),s.push({"@id":l?.["@id"]}),t=t.concat(di(l))):s.push(l);e[r]=s,t=[e].concat(t)}return t}var ue=Al(require("fs/promises"),1);var ne={load:_a,save:Aa,exists:cr,list:Ia,delete:Sa,file:{load:_a,save:Aa,delete:Sa,exists:cr},dir:{list:Ia,exists:cr,delete:up},getFilePath:pt};async function cr(e,t){e=pt(e,t);try{return await ue.default.access(e),!0}catch{return!1}}async function lp(e){try{await ue.default.mkdir(e,{recursive:!0})}catch(t){throw t}}async function Aa(e,t,r){await lp(e),e=pt(e,t);try{await ue.default.writeFile(e,r,"utf8")}catch(n){throw n}}async function _a(e,t){e=pt(e,t);try{return await ue.default.readFile(e,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function Sa(e,t){e=pt(e,t);try{await ue.default.rm(e,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function up(e){try{await ue.default.rm(e,{recursive:!0,force:!0})}catch(t){console.error(`Error deleting directory: ${t.message}`)}}async function Ia(e){if(await cr(e)==!1)return[];try{return await ue.default.readdir(e)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function pt(e,t){e=e??"",t=t??"";let r=[e,t];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var hi={};y(hi,{Button:()=>cp,DropdownMenu:()=>$a,MenuItem:()=>fp,escapeHtml:()=>de});function de(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function cp({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${l[t]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function gi(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?gi(n,s):`<input type="hidden" name="${de(s)}" value="${de(String(n))}">`}).join("")}function $a({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:l="",attrs:u=""}={}){let d={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},c={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},f={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},p=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),m=e?`<span class="mr-2">${de(e)}</span>${p}`:`${p}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let w=t.map($=>{if($.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let J=gi($.object),ge=$.disabled?"disabled":"";return`
        <form method="POST" action="${de($.url||"")}" class="m-0 p-0">
          ${J}
          <button
            type="submit"
            ${ge}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${de($.name||"")}
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
  `.trim()}function fp(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=gi(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${de(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${de(h.getName(item)||"")}
          </button>
        </form>`}var ie={};y(ie,{components:()=>V});var mi={};y(mi,{Accordion:()=>pp});function pp({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var yi={};y(yi,{Alert:()=>gp});function gp({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var bi={};y(bi,{Article:()=>hp,ArticleBody:()=>wp,ArticleCard:()=>_p,ArticleCardBody:()=>Ip,ArticleCardFooter:()=>$p,ArticleCardHeader:()=>Sp,ArticleCardMedia:()=>Tp,ArticleCardTitle:()=>kp,ArticleCategory:()=>yp,ArticleFooter:()=>Ap,ArticleHeader:()=>mp,ArticleMedia:()=>Vp,ArticleSubTitle:()=>xp,ArticleTitle:()=>bp});function hp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${t||""}"
    >
    
        ${e||""}
    
    </article>
    
    `}function mp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <header 
        class="${t||""}"
    >
    
        ${e||""}
    
    </header>
    
    `}function yp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${t||""}"
     >
        ${e||""}
     
     </p>

    `}function bp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${t||""}"
        >
            ${e||""}
        </h1>

    `}function xp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${t||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${e||""}</span>

        </div>

    `}function Vp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${t||""}"
        >

            ${e||""}
        
        </div>

    `}function wp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${t||""}"
        >
            ${e||""}
        </div>
    `}function Ap(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
        <div 
            class="${t||""}"
        >
            
            ${e||""}

        </div>

    
    `}function _p(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}

    </article>
    
    `}function Sp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${t||""}"
        >

            ${e||""}
            
    </article>
    
    `}function Ip(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <div class="p-5 ${t||""}">


            ${e||""}
            
    </div>
    
    `}function $p(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${t||""}">
          ${e||""}
    </div>
    
    `}function kp(e,t){return e=e||"",e=e.trim(),!e||e==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${t||""}">


            ${e||""}
            
    </h3>
    
    `}function Tp(e,t){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${t||""}"
    >


            ${e||""}
            
    </div>
    
    `}var xi={};y(xi,{Badge:()=>Np,Badges:()=>Pp});function Np(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function Pp(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var Vi={};y(Vi,{Breadcrumb:()=>Dp,BreadcrumbEllipsis:()=>Cp,BreadcrumbItem:()=>Na,BreadcrumbLink:()=>Pa,BreadcrumbList:()=>Ta,BreadcrumbMain:()=>ka,BreadcrumbPage:()=>jp,BreadcrumbSeparator:()=>Da});function Dp({urls:e,titles:t,links:r}){let n=new A.ItemList(r);if(e)for(let u=0;u<e.length;u++){let d=t?.[u]||e[u].split("/")?.[e[u].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[u],name:d})}let s=n.items;return console.log("items",s),ka({children:Ta({children:s.map(u=>Na({children:Pa({href:u?.url,children:u?.name})})).join(Da())})})}function ka({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function Ta({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function Na({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function Pa({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function jp({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function Da({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function Cp({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var wi={};y(wi,{Button:()=>Rp});function Rp({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let l={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},u={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[t]||l.primary} ${u[r]||u.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var Ai={};y(Ai,{Card:()=>vp,CardBody:()=>Bp,CardContent:()=>Ep,CardDescription:()=>Mp,CardFooter:()=>Hp,CardHeader:()=>Op,CardMain:()=>Up,CardMedia:()=>Lp,CardTitle:()=>Fp});function vp(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function Op(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function Up(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function Bp(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function Hp(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function Fp(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function Mp(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function Ep(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function Lp(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var _i={};y(_i,{Dialog:()=>Wp});function Wp({id:e,title:t,description:r="",content:n,footer:s="",className:l=""}){return`
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
    `.trim()}var Si={};y(Si,{Footer:()=>Jp});function Jp({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(l=>`
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
    `.trim()}var Ii={};y(Ii,{Header:()=>zp});function zp({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((l,u)=>{if(l.dropdown&&l.dropdown.length>0){let d=`dropdown-menu-${u}`;return`
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
    `.trim()}var $i={};y($i,{H1:()=>qp,H2:()=>Gp,H3:()=>Kp,H4:()=>Yp,H5:()=>Xp,H6:()=>Zp,Heading:()=>Ae,P:()=>Qp,Text:()=>eg});function qp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function Gp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function Kp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function Yp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function Xp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function Zp(e,{options:t,record_id:r,propertyID:n,className:s}){return Ae({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function Ae({title:e,level:t,options:r,record_id:n,propertyID:s,className:l}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${l||""}"
    >${e}</h${t}>
    
    `}function Qp(e,t,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${l??""} "
      >${e||""}</p>
    
    `}function eg(e,t,{options:r,record_id:n,propertyID:s,className:l}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${l??""} "
      >${e||""}</p>
    
    `}var ki={};y(ki,{Input:()=>E,InputCheckbox:()=>tg,InputDate:()=>rg,InputDateTime:()=>ig,InputEmail:()=>sg,InputNumber:()=>ng,InputPassword:()=>og,InputTel:()=>ag,InputText:()=>lg,InputTime:()=>ug,InputUrl:()=>dg});function E({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:l="",attrs:u=""}){let d=s?`id="${s}"`:"";return`
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
    `.trim()}function tg({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function rg({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function ng({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function ig({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function sg({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function og({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function ag({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function lg({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function ug({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function dg({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return E({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var Ti={};y(Ti,{Pagination:()=>cg,PaginationComponent:()=>Ca,PaginationContent:()=>Ra,PaginationEllipsis:()=>Ua,PaginationItem:()=>gt,PaginationLink:()=>fr,PaginationNext:()=>Oa,PaginationPrevious:()=>va,buildPaginationUrl:()=>ja});function ja(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function Ca({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function Ra({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function gt({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function fr({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:l=""}={}){let u={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},d="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",c=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${d} ${u[r]||u.icon} ${c} ${s}"
      ${l}
    >
      ${n}
    </a>
  `.trim()}function va({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return fr({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Oa({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return fr({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Ua({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function cg({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:l="",attrs:u=""}={}){let d=Math.ceil(t/r)||1,c=Math.floor(n/r)+1,f=z=>{let q=(z-1)*r;return ja(e,r,q)},p=(z,q)=>{let me=q-z+1;return Array.from({length:me},(xt,Vt)=>z+Vt)},m=s+5,w=[];if(m>=d)w=p(1,d);else{let z=Math.max(c-s,1),q=Math.min(c+s,d),me=z>2,xt=q<d-2,Vt=1,ml=d;if(!me&&xt){let Ee=3+2*s;w=[...p(1,Ee),"ellipsis",d]}else if(me&&!xt){let Ee=3+2*s,cs=p(d-Ee+1,d);w=[Vt,"ellipsis",...cs]}else if(me&&xt){let Ee=p(z,q);w=[Vt,"ellipsis",...Ee,"ellipsis",ml]}}let $=[],J=c>1,ge=J?f(c-1):"#";$.push(gt({children:va({href:ge,disabled:!J})})),w.forEach(z=>{if(z==="ellipsis")$.push(gt({children:Ua()}));else{let q=Number(z),me=q===c;$.push(gt({children:fr({href:f(q),isActive:me,children:String(q)})}))}});let he=c<d,kr=he?f(c+1):"#";$.push(gt({children:Oa({href:kr,disabled:!he})}));let Tr=Ca({className:l,attrs:u,children:Ra({children:$.join("")})});return Tr=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Tr}
    </div>`,Tr}var Ni={};y(Ni,{Section:()=>fg,SectionHeader:()=>pg});function fg({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:l=""}={}){let u={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},d={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},c=u[t]||u.default,f=d[r]!==void 0?d[r]:d.default,p=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${f} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${c} ${n}" ${l}>
      ${p}
    </section>
  `.trim()}function pg({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var Pi={};y(Pi,{Table:()=>hg,TableBody:()=>Fa,TableCell:()=>Z,TableCellCenter:()=>Vg,TableCellLeft:()=>xg,TableCellLink:()=>Ag,TableCellNumber:()=>wg,TableCellRight:()=>Ea,TableCellText:()=>_g,TableColumnHeader:()=>Ha,TableColumnHeaderCenter:()=>bg,TableColumnHeaderLeft:()=>mg,TableColumnHeaderRight:()=>yg,TableFooter:()=>La,TableHeader:()=>Ba,TableRow:()=>Ma,getTable:()=>gg});function gg({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Ba(e.map(n=>Ha(n)))}
      
        ${Fa(t.map(n=>Ma(n.map(s=>Z(s)))))}
        
        ${La()}

      </table>

    </div>
  
  
  `}function hg(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function Ba(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function Ha(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function mg(e,t){return Z(e,t)}function yg(e,t){return t=t+" text-right ",Z(e,t)}function bg(e,t){return t=t+" text-center ",Z(e,t)}function Fa(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Ma(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
    <tr 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${e}</tr>
  `}function Z(e,t,r,n){return e||(e=""),Array.isArray(e)&&(e=e.join(" ")),`
    <td 
      data-id="${t||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${e}</td>
  `}function xg(e,t,r,n){return Z(e,t,r,n)}function Ea(e,t,r,n){return n=n+" text-right ",Z(e,t,r,n)}function Vg(e,t,r,n){return n=n+" text-center ",Z(e,t,r,n)}function wg(e,t,r,n,s,l){return e=i.toNumber(e),e=g.number.format(e,t),Ea(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function Ag(e,t,r,n,s,l){return Z(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function _g(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return Z(s)}function La(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var Di={};y(Di,{Webpage:()=>Sg});function Sg({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:l}){return`
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
  `.trim()}var ji={};y(ji,{CardGrid:()=>Ig});function Ig({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var Ci={};y(Ci,{JsonEditor:()=>kg});function Wa({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let l={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${l[t]||l.default} ${u[r]||u.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function $g({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:l=""}={}){return`
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
  `.trim()}function kg({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:l=""}={}){let u=e.replace(/[^a-zA-Z0-9_]/g,"_"),d=typeof r=="string"?r:JSON.stringify(r,null,2),c=JSON.stringify(n,null,2),f=`
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
            ${Wa({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${u}_format()"`})}
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
        ${Wa({children:"Submit Record",variant:"default",attrs:`id="${u}_submit_btn" type="submit"`})}
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
  `.trim();return $g({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:p,className:s,attrs:l})}var Ri={};y(Ri,{Modal:()=>Tg,ModalBody:()=>Pg,ModalTrigger:()=>Ng});function Tg(e,t,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${e||""}
    </div>
    
    
    `}function Ng(e,t,r){return`
    
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
    
    `}function Pg(e,t,r){return`
    
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
    
    
    `}var vi={};y(vi,{DropdownMenu:()=>jg,DropdownMenuIcon:()=>Cg,Menu:()=>Dg,MenuItemLink:()=>Rg,MenuItemPost:()=>vg,MenuItemSeparator:()=>Og});function Dg(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function jg(e,t,r){return`
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

    `}function Cg(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Rg(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function vg(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function Og(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Oi={};y(Oi,{Kanban:()=>Ug,KanbanBody:()=>Hg,KanbanCard:()=>zg,KanbanCardBody:()=>Gg,KanbanCardFooter:()=>Kg,KanbanCardHeader:()=>qg,KanbanColumn:()=>Eg,KanbanColumnBody:()=>Wg,KanbanColumnFooter:()=>Jg,KanbanColumnHeader:()=>Lg,KanbanFooter:()=>Fg,KanbanHeader:()=>Bg,KanbanTitle:()=>Mg});function Ug(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function Bg(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function Hg(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function Fg(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function Mg(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function Eg(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function Lg(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Wg(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function Jg(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function zg(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function qg(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function Gg(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function Kg(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var Ui={};y(Ui,{StarRating:()=>Yg,StarRatingEmpty:()=>Qg,StarRatingFull:()=>Xg,StarRatingHalf:()=>Zg});function Yg(e,t){return`
    
    <div class="flex items-center space-x-1 ${t||""}">
        ${e||""}
    </div>
    
    `}function Xg(e,t){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Zg(e,t){return`
    
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


    `}function Qg(e,t){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var V={...mi,...yi,...bi,...xi,...Vi,...wi,...Ai,...ji,..._i,...hi,...Si,...Ii,...Oi,...vi,...Ri,...ki,...Ci,...Ti,...Ni,...Ui,...Pi,...$i,...Di};var Ei={};y(Ei,{Card:()=>ah,Cards:()=>lh});var Mi={};y(Mi,{Media:()=>_e,MediaImage:()=>Ga,MediaVideo:()=>qa});var gr={};y(gr,{fixedLength:()=>pr,textCenter:()=>Bi});function pr(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let l=e.length;l==0&&(e=""),l==1&&(e=e[0]),l>1&&(e=`(${e.length})`)}let s=g.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=g.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=g.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let l="",u=Math.round(t/3),d=t-u-3;l+=e.slice(0,u),l+="...",l+=e.slice(-d),e=l}return t!=null&&(e=e.padEnd(t," ")),e}function Bi(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var Fi={};y(Fi,{toTextRecord:()=>eh,toTextTable:()=>nh});function eh(e,t=80){let r=th(e,t),n=rh(e),s="";s+=Ja(r),s+=`
`,n.length>0?s+=n.map(l=>za(l,r)).join(""):s+=`(no records)
`}function th(e,t=80){let n=Hi(e).map(u=>(u||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function rh(e){let t=Hi(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:g.getValues(e,n)};r.push(s)}return r}function nh(e,t,r=!0,n=80){t=ih(e,t,r),e=sh(e,t,r);let s="";if(s+=Ja(t),s+=`
`,e.length>0){let l=e.map(u=>za(u,t));s+=l.join("")}else s+=Bi("(no records to display.)",n);return s}function ih(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=Hi(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function sh(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function Ja(e){let t="",r=[];for(let s of e){let l=`${pr(s.title,s.width,s.rounding)}`;r.push(l)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let l=`${"".padStart(s.width,"-")}`;n.push(l)}return t+=n.join(" "),t+=`
`,t}function za(e,t){let r="",n=[];for(let s of t){let l=i.getValues(e,s.propertyID),u=`${pr(l,s.width,s.rounding)}`;n.push(u)}return r+=n.join(" "),r+=`
`,r}function Hi(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=oh(t),t}function oh(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var ht={...gr,...Fi};function _e(e,t){if(!i.getValue(e,"contentUrl"))return"";let n="";return i.record_type(e)=="VideoObject"?qa(e,t):Ga(e,t)}function qa(e,t){let r=i.getValue(e,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Ga(e,t){let r=i.getValue(e,"contentUrl");return r?V.Modal(V.ImageModal(r)):""}function ce({website:e,webpage:t,title:r,headContent:n,content:s,options:l}){t=new A.WebPage(t),e=new A.WebSite(e);let u={};u.title=r,u.title=u.title||i.getValue(t,"title"),u.title=u.title||i.getValue(t,"name"),u.title=u.title||i.getValue(e,"title"),u.title=u.title||i.getValue(e,"name"),u.headContent=n,u.breadcrumb=V.Breadcrumb({links:i.getValue(t,"breadcrumb")});let d=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),c=t.WPHeader.hasPart||[],f=t.WPFooter.hasPart||[];return c=Array.isArray(c)?c:[c],f=Array.isArray(f)?f:[f],u.header=V.Header({brand:d,navItems:c}),u.footer=V.Footer({brand:d,navItems:f}),u.content=s,V.Webpage(u)}function Ka({website:e,webpage:t,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:c,offset:f,limit:p,options:m}){return l=l??"",l+=j.Cards({url:n,records:u,offset:f,limit:p,nbOfColumns:3,options:m}),ce({website:e,webpage:t,title:r,headContent:s,content:l,options:m})}function ah(e,t,r,n=!0){let s=A.format.getTitle1(e),l=A.format.getContent(e),u=i.getRecordUrl(e,t),d=n==!0?A.format.imageUrl(e):void 0;return V.Card({title:s,description:l,url:u,media:d,className:r})}function lh({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:l,nbOfColumns:u,includePagination:d,options:c,layoutClasses:f,className:p,attrs:m}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let w=new A.ItemList(t);w=w.record,w.numberOfItems=w?.numberOfItems??w.itemListElement.length,w=hr({record:w,options:c}),w.itemListElement=w.itemListElement.filter(he=>i.getValue(he,"position")>=r&&i.getValue(he,"position")<r+n);let $="";for(let he of i.getValues(w,"itemListElement")){let kr=i.getValue(he,"item");$+=uh({url:e,item:kr,options:c})}$=V.CardGrid({content:$,nbOfColumns:u});let J=V.Pagination({url:e,limit:n,offset:r,total:w.numberOfItems,options:c});return`

        <div class="${f} ${p}" ${m}>
        <div class="flex-1">
            ${$}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${J}
        </div>
        </div>

    `}function uh({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),l=i.getValues(t,"keywords");l=l.map(f=>`<a href="/?keywords=${f}">${f}</a>`);let u=V.Badges({text:l,variant:"secondary"}),d={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:u,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:_e({record:t,options:r})};return V.Card(d)}var Li={};y(Li,{Input:()=>ch});function ch({record:e,propertyID:t,value:r}){return V.Input({value:r})}var Ji={};y(Ji,{Table:()=>fh,TableBody:()=>Xa,TableCell:()=>Qa,TableHeader:()=>Ya,TableRow:()=>Za,getDataType:()=>el,getHeadersFromProperties:()=>Wi,getPropertiesFromRecords:()=>Fe});function fh(e,t,r,n,s,l){let u=e;r=r||Fe(u),n=n||Wi(r);let d=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),d=["thumbnail"].concat(d)),l==!0&&(n=["#"].concat(n),r=["position"].concat(r),d=["position"].concat(d)),V.Table(Ya(u,r,n,d)+Xa(u,r,t,d))}function Ya(e,t,r,n){return t=t||Fe(e),r=r||Wi(t),n=n||[],t=t||Fe(e),V.TableHeader(r.map((s,l)=>{switch(n?.[l]){case"number":return V.TableColumnHeaderRight(s);default:return V.TableColumnHeader(s)}}).join(" "))}function Xa(e,t,r,n){t=t||Fe(e),n=n||[];let s=i.getValues(new A.ItemList(e),"itemListElement");return V.TableBody(s.map(l=>Za(l,t,r,n)).join(" "))}function Za(e,t,r,n){return t=t||Fe(e),n=n||[],V.TableRow(t.map((u,d)=>Qa(e,i.getValues(e,u),u,r,n,d)).join(" "),i.record_id(e),void 0,"kr-listitem")}function Qa(e,t,r,n,s,l){let u=t,d=r,c=e;if(u=i.isArray(u)&&u.length==0?"":u,u=i.isArray(u)&&u.length==1?u[0]:u,(d||"").endsWith("@type")){let f=g.url.getUrl(n||"","/"+u);return V.TableCellLink(f,u)}if((d||"").endsWith("@id")){let f=i.getRecordUrl(c,n);return V.TableCellLink(f,u)}switch(s?.[l]||el(u)){case"array":return V.TableCellCenter(`(${u.length})`);case"text":return V.TableCellText(u);case"number":return V.TableCellNumber(u,2);case"link":return V.TableCellLink(u,u);case"thumbnail":return V.TableCell(_e({record:u}));case"position":return V.TableCellNumber(u,0);case"object":return V.TableCellLink(i.getRecordUrl(u,n),i.record_id(u));default:return V.TableCellText(u)}}function Fe(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function Wi(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function el(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?g.isNumber(e)?"number":g.isUrl(e)?"link":g.isDate(e)?"date":g.isArray(e)?"array":g.isObject(e)?"object":"text":"text"}var zi={};y(zi,{Record:()=>ph});function ph(e,t,r,n="",s="",l=!1,u=0,d={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),d.baseUrl=t||d?.baseUrl;let c={rows:[]},f=tl({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:l,depth:0,options:d});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${_e({record:e,options:d})||""}
            </div>
            
            <div class="flex-1">
                ${f||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${V.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function tl({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){t=t||Object.keys(e);let d=t.filter(m=>m.startsWith("@")),c=t.filter(m=>!m.startsWith("@"));t=d.sort().concat(c.sort());let f={rows:[]};return V.Table(V.TableHeader(V.TableRow(V.TableCellRight("")+V.TableCellRight(j.DropdownMenu(i.getPotentialActions(e)))))+V.TableBody(t.map(m=>V.TableRow([V.TableCell(m+":"),V.TableCell(rl({record:e,propertyID:m,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))].join(" "))).join(" ")))}function gh({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(e,t),c=[];for(let f of d){let p=i.clone(e);p=i.setValue(p,t,f),c.push(rl({record:p,propertyID:t,className:r,attrs:n,expandAll:s,depth:l+1,options:u}))}return`
        <ul class="space-y-4 ">
          ${c.map(f=>`
            <li>
              ${f}
            </li>
            `).join("")}

        </ul>
     
  
  `}function rl({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:l=0,options:u}){let d=i.getValues(e,t);return i.isArray(d)&&d.length==1&&(d=d[0]),i.isArray(d)&&d.length==0?"":i.isArray(d)&&d.length>0?`
            <details class="space-y-4"> 
            
                <summary>${j.ValueArray(d,t,u?.baseUrl)}</summary>
      
                ${gh({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:l,options:u})}
            
            </details>
      `:d?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${j.ValueThing(d,t,u?.baseUrl)}</summary>
      
            ${tl({record:d,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:l,options:u})}
        
        </details>
      `:d===void 0?"":j.Value(d,t,u?.baseUrl)}var qi={};y(qi,{DropdownMenu:()=>mh,Menu:()=>hh});function hh(e){return e=i.toArray(e),!e||e.length==0?"":V.DropdownMenu(V.DropdownMenuIcon(),e.map(t=>V.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function mh(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>V.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return V.DropdownMenu(V.DropdownMenuIcon(),t)}var Gi={};y(Gi,{Kanban:()=>yh,KanbanCard:()=>il,KanbanColumn:()=>nl});function yh(e,t){let r=i.getItems(e);return V.Kanban(V.KanbanHeader(V.KanbanTitle("Awesome Kanban","Fuck yeah"))+V.KanbanBody(propertyValues.map(n=>nl(e,t,n)).join(" "))+V.KanbanFooter(""))}function nl(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),V.KanbanColumn(V.KanbanColumnHeader(r)+V.KanbanColumnBody(n.map(s=>il(s)).join(" "))+V.KanbanColumnFooter())}function il(e){return V.KanbanCard(V.KanbanCardHeader("xx")+V.KanbanCardBody(j.Value(i.getName(e),"name"))+V.KanbanCardFooter(j.Value(i.getActionStatus(e),"actionStatus")))}var j={...Ei,...Li,...Mi,...zi,...Ji,...qi,...cn,...Gi};function hr({record:e,options:t}){if(i.isArray(e))return e.map(l=>hr({record:l,options:t}));let r=i.record_type(e);if(!r)return e;let n=g.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let l of Object.keys(e?.record||e))e=i.setValues(e,l,hr({record:i.getValues(e,l),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function sl({website:e,webpage:t,title:r,url:n,headContent:s,content:l,records:u,properties:d,headers:c,offset:f,limit:p,options:m}){return l=l??"",l+=j.Table({url:n,records:u,properties:d,headers:c,offset:f,limit:p,options:m}),ce({website:e,webpage:t,title:r,headContent:s,content:l,options:m})}function ol({website:e,webpage:t,title:r,url:n,headContent:s,content:l,record:u,properties:d,headers:c,options:f}){return l=l??"",l+=j.Record({url:n,record:u,options:f}),ce({website:e,webpage:t,title:r,headContent:s,content:l,options:f})}var al={blankPage:ce,recordsPage:sl,recordPage:ol,cardsPage:Ka};var ll={blocks:j,...al,components:ie,...ie};var Ki={};y(Ki,{getParsedRequest:()=>bh});function bh(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var ul={shadcn:ll,express:Ki};var Ie={};y(Ie,{_getDate:()=>mt,compile:()=>yr,compileOverwrite:()=>cl,datapointsToRecord:()=>rs,dedupe:()=>es,eq:()=>xh,ge:()=>Qi,getConfidence:()=>L,getDataFeedItem:()=>_h,getDatapoint:()=>Yi,getExecutionID:()=>Ah,getModifiedDate:()=>W,gt:()=>Me,isEqual:()=>yt,le:()=>Zi,lt:()=>Xi,merge:()=>wh,recordToDatapoints:()=>ts,sameObject:()=>dl,sameObjectAndProperty:()=>se,sort:()=>mr,toString:()=>Se});function Se(e){let t=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return i.isArray(e)?i.format.toTextTable(e,t):i.format.toTextRecord(e,t)}function yt(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r,n;return r=i.getValue(e,"value"),n=i.getValue(t,"value"),!(i.record_id(r)!=i.record_id(n)||r!=n||(r=i.getValue(e,"instrument"),n=i.getValue(t,"instrument"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(e,"agent"),n=i.getValue(t,"agent"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(e,"execution"),n=i.getValue(t,"execution"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(e,"datafeed"),n=i.getValue(t,"datafeed"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(e,"datafeedItem"),n=i.getValue(t,"datafeedItem"),i.record_id(r)!=i.record_id(n)))}function dl(e,t){e=e?.record??e,t=t?.record??t;let r=i.getValue(e,"object"),n=i.getValue(t,"object");return i.record_id(r)==i.record_id(n)}function se(e,t){e=e?.record??e,t=t?.record??t;let r=i.getValue(e,"propertyID"),n=i.getValue(t,"propertyID");return dl(e,t)&&r==n}function xh(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r=L(e),n=L(t);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let s=W(e),l=W(t);return!(s==null&&l!=null||s!=null&&l==null||+s!=+l)}function Xi(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r=L(e),n=L(t);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let s=W(e),l=W(t);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s<+l:!1}function Zi(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r=L(e),n=L(t);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let s=W(e),l=W(t);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s<=+l:!0}function Me(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r=L(e),n=L(t);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let s=W(e),l=W(t);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s>+l:!1}function Qi(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t)==!1)return!1;let r=L(e),n=L(t);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let s=W(e),l=W(t);return s==null&&l!=null||s!=null&&l==null?!1:+s!=+l?+s>=+l:!0}function Vh(e,t){if(e=e?.record??e,t=t?.record??t,se(e,t))return Me(e,t);let r=i.getValue(e,"object"),n=i.getValue(t,"object"),s=r?.["@id"]||"",l=n?.["@id"]||"",u=s.split("#")?.[1],d=l.split("#")?.[1];if(u!=d)return u<d?-1:1;if(s!=l)return r<n?-1:1;let c=i.getValue(e,"propertyID"),f=i.getValue(t,"propertyID");return c!=f?c<f?-1:1:0}function mr(e){return e.sort((t,r)=>(t=t?.record??t,r=r?.record??r,Vh(t,r))),e}function wh(e,t){if(yt(e,t)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return e}function es(e){e=i.toArray(e);let t=[];for(let r of e)t.find(s=>yt(r,s))||t.push(r);return t}function L(e){e=e?.record??e;let t=i.getValue(e,"confidence");for(t=Number(t),t=isNaN(t)?0:t;t>1;)t=t/100;return t=t.toFixed(2),t=Number(t),t}function Ah(e){e=e?.record??e;let t=i.getValue(e,"execution");return i.record_id(t)}function W(e){e=e?.record??e;let t;return t=t||mt(e,"dataFeedItem.dateDeleted"),t=t||mt(e,"dataFeedItem.dateModified"),t=t||mt(e,"dataFeedItem.dateCreated"),t=t||mt(e,"observationDate"),t}function mt(e,t){let r=i.getValue(e,t);return g.toDate(r)}function ts(e,t,r){function n(s,l,u,d,c){let f=[];if(i.isArray(u)){for(let p of u)f=f.concat(n(s,l,p,d,c));return f}if(u?.["@id"]){l&&f.push(Yi(s,l,{"@id":u?.["@id"]},d,c));let p={"@id":u?.["@id"]};for(let m of Object.keys(u))m!="@id"&&(f=f.concat(n(p,m,u[m],d,c)));return f}return[Yi(s,l,u,d,c)]}return r=r??i.randomUUID(),n(void 0,void 0,e,t,r)}function rs(e){e=i.toArray(e),e=e.map(n=>n?.record??n);let t={};e=yr(e);for(let n of e){if(n?.operation=="DeleteAction")continue;let s=i.getValue(n,"object"),l=i.record_id(s),u=i.getValue(n,"propertyID"),d=i.getValue(n,"value");t[l]=t?.[l]||{"@id":l},t[l]=i.addValues(t[l],u,d)}t=Object.keys(t).map(n=>t[n]);let r=new i.DB;return r.set(t),t=r.search(),t=i.simplify(t),t}function Yi(e,t,r,n={},s=i.randomUUID()){return{"@type":"Datapoint","@id":i.randomUUID(),operation:n?.operation||"UpdateAction",object:e,propertyID:t,value:r,valueGroupID:s,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function yr(e){let t=[...e];for(;t.length>0;){let r=t[0];e=e.filter(s=>!cl(r,s)),t=t.slice(1);let n=e.map(s=>s?.["@id"]);t=t.filter(s=>n.includes(s?.["@id"]))}return e}function cl(e,t){if(e=e?.record??e,t=t?.record??t,i.getValue(e,"operation")=="AddAction"||se(e,t)==!1||i.getValue(e,"valueGroupID")==i.getValue(t,"valueGroupID"))return!1;if(i.getValue(e,"operation")=="DeleteAction"){let r=e?.value,n=t?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&Me(e,t)}return Me(e,t)}function _h(e,t,r,n,s){return{"@type":"DataFeedItem","@id":"","item:":t,dateCreated:r,dateModified:n,dateDeleted:s}}var C=class{constructor(t,r){this._record={},this._baseRecordType=r,t?.record&&(this.record=t.record),t?.["@type"]&&(this.record=t),typeof t=="string"&&(this.record_id=t),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(t=>t!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=Nt.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let t={};Object.keys(this._record).forEach(r=>t[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(t))(t[r]===null||t[r]===void 0)&&delete t[r];return t}set record(t){this._record={},t=t??{},Object.keys(t).forEach(r=>this._record[r]=t[r]?.record??t[r]),this.init()}getValue(t){this.init();let r=this._record?.[t];return r=i.toArray(r)?.[0],r}setValue(t,r){this._record[t]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(t){return this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get url(){return this.getValue("url")}set url(t){return this.setValue("url",t)}get email(){return this.getValue("email")}set email(t){return this.setValue("email",t)}};var fe=class extends C{constructor(t,r,n,s,l,u,d){super({},"Metadata"),isNaN(Number(t))?this.record=t:(this.confidence=t??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=s??this.dataFeed,this.dataFeedItem=l??this.dataFeedItem,this.agent=u??this.agent,this.instrument=d??this.instrument)}toString(){return Se(this.record)}set(t,r,n,s,l,u,d){this.c=t,this.d=r,this.execution=n,this.dataFeed=s,this.dataFeedItem=l,this.agent=u,this.instrument=d}get dataFeed(){return new C(this.getValue("dataFeed"),"DataFeed")}set dataFeed(t){t=t?.record?t:new C(t,"DataFeed"),this.setValue("dataFeed",t)}get dataFeedItem(){return new C(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(t){t=t?.record?t:new C(t,"DataFeedItem"),this.setValue("dataFeedItem",t)}get agent(){return new C(this.getValue("agent"),"Person")}set agent(t){t=t?.record?t:new C(t,"Person"),this.setValue("agent",t)}get instrument(){return new C(this.getValue("instrument"),"WebAPI")}set instrument(t){t=t?.record?t:new C(t,"WebAPI"),this.setValue("instrument",t)}get execution(){return new C(this.getValue("execution"),"Action")}set execution(t){t=t?.record?t:new C(t,"Action"),this.setValue("execution",t)}get credibility(){return this.confidence}set credibility(t){this.confidence=t}get confidence(){return this._record?.confidence??0}set confidence(t){this._record.confidence=t}get c(){return this.confidence}set c(t){this.confidence=t}get observationDate(){return this._record?.observationDate??void 0}set observationDate(t){this._record.observationDate=new Date(t)}get d(){return this._record?.observationDate??void 0}set d(t){this._record.observationDate=t}get metadata(){let t=JSON.parse(JSON.stringify(this.record));return delete t.object,delete t.propertyID,delete t.value,t}set metadata(t){t=t?.record||t||{};let r=["object","propertyID","value"];for(let n of Object.keys(t))r.includes(n)||this.setValue(n,t[n])}get m(){return this.metadata}set m(t){return this.metadata=t}getDatapoint(t,r,n){return new DataPoint(t,r,n,this.record)}new(t,r,n){return this.getDatapoint(t,r,n)}};var pe=class extends fe{constructor(t,r,n,s){super({},"DataPoint"),i.record_type(t)=="Datapoint"?this.record=t:this.object=t,r&&(this.propertyID=r),n&&(this.value=n),s&&(this.metadata=s)}toString(){return Se(this.record)}lt(t){return Xi(this.record,t?.record??t)}le(t){return Zi(this.record,t?.record??t)}gt(t){return Me(this.record,t?.record??t)}ge(t){return Qi(this.record,t?.record??t)}get object(){return new C(this.getValue("object"))}set object(t){t=t?.record?t:new C(t),this.setValue("object",t)}get propertyID(){return this.getValue("propertyID")}set propertyID(t){return this.setValue("propertyID",t)}get value(){return this.getValue("value")}set value(t){return this.setValue("value",t)}get rdf(){let t={subject:this.object.record_id}}};var br=class extends fe{constructor(t,r,n,s,l,u,d){super(t,r,n,s,l,u,d),this._dataPoints=[]}get dataPoints(){return mr(this._dataPoints)}set dataPoints(t){this._dataPoints=mr(t)}get dp(){return this.dataPoints}set dp(t){this.dataPoints=t}toString(){return Se(this.dataPoints)}get(t){return this._dataPoints.filter(r=>r.object?.record_id==t)}search(t){return i.filter(this._dataPoints,t)}set(t,r){return r=r||this.metadata,this.#e(void 0,void 0,t,r)}add(t,r,n,s){if(s=s??this.metadata,t?.record_type=="DataPoint")return this._dataPoints.push(t),t;if(t?.["@type"]=="DataPoint"){let l=new pe(t,void 0,void 0,s);return this._dataPoints.push(l),l}if(t&&!r)return this.#e(void 0,void 0,t,s);if(t&&r){let l=new pe(t,r,n,s);return this._dataPoints.push(l),l}}addRecord(t,r){return this.#e(void 0,void 0,t,r??this.metadata)}get jsonld(){return rs(this.dataPoints)}set jsonld(t){return this.#e(void 0,void 0,t,this.metadata)}#e(t,r,n,s){let u=ts(n,s).map(d=>new pe(d));this.dataPoints=this.dataPoints.concat(u)}#t(t){if(i.isArray(t))return t=es(t),t.map(n=>this.#t(n));this.dataPoints.find(n=>yt(n,t))||this._dataPoints.push(t)}};var ns={};y(ns,{analyzeDataPoints:()=>Ih,toString:()=>Sh});function Sh(e){let t=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return i.isArray(e)?ht.toTextTable(e,t):ht.toTextRecord(e,t)}function Ih(e){e=e.map(n=>n?.record||n);let t=e.map(n=>n.object["@id"]);console.log("pp",t),t=[...new Set(t)],console.log("pp2",t);let r=[];for(let n of t)r=r.concat($h(e,n));return r}function $h(e,t){e=e.filter(s=>s.object["@id"]==t);let r=e.map(s=>s.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let s of r)console.log("rr",t,s),n=n.concat(kh(e,t,s));return n}function kh(e,t,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],s=e.filter(c=>c.object["@id"]==t&&c.propertyID==r),l=yr(s),u,d=[];for(let c of n){u=s.map(m=>i.getValue(m,c));let f={"@type":"Analysis",object:{"@id":t},propertyID:r,measuredProperty:c,dataPointType:"ALL",N:u.length,uniqueN:[...new Set(u)].length};d.push(f),u=l.map(m=>i.getValue(m,c));let p={"@type":"Analysis",object:{"@id":t},propertyID:r,measuredProperty:c,dataPointType:"ACTIVE",N:u.length,uniqueN:[...new Set(u)].length};d.push(p)}return d}var fl={...Ie,DataPoint:pe,DataPointDB:br,Metadata:fe,analysis:ns};function is(e,t){if(i.isArray(e))return e.map(n=>is(n,t));let r=i.record_type(e);if(r=="ReplaceAction")return Th(e,t);if(r=="UpdateAction")return Nh(e,t);if(r=="MoveUpAction")return Ph(e,t);if(r=="MoveDownAction")return Dh(e,t)}function Th(e,t){let r=i.getValues(e,"object"),n=i.getValues(e,"targetCollection");for(let s of r)for(let l of n)s["@id"]=i.record_id(l)||i.record_id(s),t.set(s),i.addValue(e,"result",s);return e=i.setCompleted(e),e}function Nh(e,t){let r=i.getValues(e,"object"),n=i.getValues(e,"targetCollection");for(let s of r)for(let l of n){let u=t.get(l);l=l||{"@id":i.record_id(l)},l=i.patch(l,s),t.set(l),e=i.addValue(e,"result",l)}return e=i.setCompleted(e),e}function Ph(e,t){let r=i.getValues(e,"object"),n=i.getValues(e,"targetCollection");for(let s of r)for(let l of n){let u=t.get(l);u=helpers.things.ItemList.moveUp(u,s),t.set(u),e=i.addValue(e,"result",u)}return i.setCompleted(e),e}function Dh(e,t){let r=i.getValues(e,"object"),n=i.getValues(e,"targetCollection");for(let s of r)for(let l of n){let u=t.get(l);u=helpers.things.ItemList.moveDown(u,s),t.set(u),e=i.addValue(e,"result",u)}return i.setCompleted(e),e}function xr(e,t){if(!e)return e;if(i.isArray(e))return e.map(n=>xr(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=Rh(e,t)),r=="ItemList"&&(e=Ch(e,t));for(let n of Object.keys(e))e[n]=xr(e[n],t);return e}function Ch(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let s=0;s<r.length;s++){let l=i.getValue(r[s],"position");l>0&&(r[s]=vh(r[s],e,t)),l<n-1&&(r[s]=Oh(r[s],e,t)),r[s]=Uh(r[s],e,t),r[s]=Bh(r[s],e,t)}return e}function Rh(e,t){let r;return i.getValue(e,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},e=oe(e,t,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=oe(e,t,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Failed")),i.isPotential(e)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=oe(e,t,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Failed")),i.isActive(e)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=oe(e,t,r,"Set Failed")),e}function oe(e,t,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=i.record_id(e);let s={"@type":"UpdateAction",name:n,object:r,targetCollection:i.ref(e),url:t};return e=i.addValue(e,"potentialAction",s),e}function vh(e,t,r,n){n=n||"Move up";let s={"@type":"MoveUpAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function Oh(e,t,r,n){n=n||"Move down";let s={"@type":"MoveDownAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function Uh(e,t,r,n){n=n||"Delete";let s={"@type":"DeleteAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function Bh(e,t,r,n){n=n||"Duplicate";let s={"@type":"DuplicateAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}var pl={add:xr,execute:is};var gl={...i,jsonldBase:i,...A,things:A,rdf:pi,...ae,recordIDHelpers:ae,dataHelpers:g,...zt,transformHelpers:zt,records:S,disk:ne,datapointHelpers:fl,format:ht,html:ul,potentialAction:pl},ss=gl,$e=gl;var wr={};y(wr,{ApiDB:()=>os});var Vr={};y(Vr,{CacheDB:()=>bt});var bt=class{constructor(t){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(t))?void 0:Number(t)}getAll(t=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,t));return r}get(t,r=!0){if(i.isArray(t))return t.map(u=>this.get(u));if(t=i.toRecordID(t),!this._cache?.[t]||!this._cache?.[t]?.modifiedDate)return;let s=new Date-this._cache[t].modifiedDate;if(this._expiryDuration===void 0&&s>this._expiryDuration){this._cache[t]=void 0;return}let l=this._cache[t]?.value;return r===!0&&(l=i.expand(this.getAll(!1),l)),l=i.simplify(l),l}set(t){let r=i.flatten(t);for(let n of r){let s=i.record_id(n);this._cache[s]=this._cache?.[s]||{},this._cache[s].value=i.isRef(n)&&this._cache[s]?.value||n,this._cache[s].modifiedDate=new Date}}post(t){return this.set(t)}getSearch(t){if(t=t||"all",!this._searchCache?.[t])return[];if(!this._searchCache?.[t]?.modifiedDate)return;let n=new Date-this._searchCache[t].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[t]=void 0;return}let s=this._searchCache[t]?.value;return s=i.expand(this.getAll(!1),s),s}setSearch(t,r){r=i.toArray(r),this.set(r),this._searchCache[t]=this._searchCache?.[t]||{},this._searchCache[t].value=r,this._searchCache[t].records=i.flatten(r),this._searchCache[t].modifiedDate=new Date}};var os=class{constructor(t,r,n){this._base_url=t,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new bt}async get(t){t=$e.toRecordID(t);let r=this._cacheDB.get(t);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,s=$e.dataHelpers.url.getUrl(this._base_url,n,{record_id:t}),u=await(await fetch(s)).json();return this._cacheDB.set(u),console.log("record retrieved from db"),u}async search(t,r,n,s,l){let u={...t};r&&(u.offset=r),n&&(u.limit=n),s&&(u.orderBy=s),l&&(u.orderDirection=l),console.log("pp",u);let d="/"+this._databaseID+"/"+this._tenantID,c=$e.dataHelpers.url.getUrl(this._base_url,d,u);console.log("url",c);let p=await(await fetch(c)).json(),m=$e.getResult(p);return this._cacheDB.setSearch(u,m),console.log("record retrieved from db"),m}async post(t){let n=$e.dataHelpers.url.getUrl(this._base_url,"/"),l=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json(),u=$e.getResults(l);return this._cache.set(u),u.length==1?u[0]:u}};var _r={};y(_r,{ApiClient:()=>Ar,default:()=>Fh});var Ar=class{constructor(t,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=t,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(t){this._baseUrl=t}get databaseID(){return this._databaseID}set databaseID(t){this._databaseID=t}get tenantID(){return this._tenantID}set tenantID(t){this._tenantID=t}get headers(){return this._headers}set headers(t){this._headers=t}async get(t,r){return await as(this.headers,this.baseUrl,t,r)}async post(t,r){return await hl(this.headers,this.baseUrl,t,r)}async patch(t,r){return await Mh(this.headers,this.baseUrl,t,r)}async delete(t,r){return await ls(this.headers,this.baseUrl,t,r)}async test(t){return await Eh(this.headers,this.baseUrl,t)}},Fh={ApiClient:Ar};async function as(e,t,r,n){let s=new A.Action;s.name="API Get",s.instrument=new A.WebAPI(t),s.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let l=g.url.getUrl(t,r,n),d={headers:{...e||{},...{}},method:"GET"},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function hl(e,t,r,n){let s=new A.Action;s.name="API Post",s.instrument=new A.WebAPI(t);try{let l=g.url.getUrl(t,r,{}),d={headers:{...e||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},c=await fetch(l,d);if(c.status>=300)return console.log(l),console.log(c.statusText),s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return console.log(url),console.log(l),s.setFailed(String(l)),s}}async function Mh(e,t,r,n){let s=new A.Action;s.name="API Post",s.instrument=new A.WebAPI(t);try{let l=g.url.getUrl(t,r,{}),d={headers:{...e||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function ls(e,t,r,n){let s=new A.Action;s.name="API Get",s.instrument=new A.WebAPI(t);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let l=g.url.getUrl(t,r,n),d={headers:{...e||{},...{}},method:"DELETE"},c=await fetch(l,d);if(c.status>=300)return s.setFailed(c.statusText),s;let f=await c.json();return s.setCompleted(f),s}catch(l){return s.setFailed(String(l)),s}}async function Eh(e,t,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},s=new A.Action,l={filter:{"@id":n["@id"]}},u;return u=await ls(e,t,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step1 delete record"),s.record):(u=await hl(e,t,r,n),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step2 create record"),s.record):(u=await as(e,t,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step3 get record"),s.record):u.result[0]?.["@id"]!=n?.["@id"]?(s.setFailed("Error step3 got wrong record"),s.record):(u=await ls(e,t,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step4 delete record"),s.record):(u=await as(e,t,r,l),s.hasPart=s.hasPart.concat(u.record),(await u).isFailed?(s.setFailed("Error step5 get record"),s):u.result?.name==n?.name?(s.setFailed("Error step5 record still exist"),s):(s.setCompleted(),s.record)))))}var Ir={};y(Ir,{DiskDB:()=>us});var us=class{constructor(t,r=!0){this.path=t,this.flattenRecords=r,this._isInitializedFlag=!1}async set(t){return this.flattenRecords===!0?await this._set_flattened(t):await this._set(t)}async _set(t){let r=new A.Action("Saving record");if(r.object=t,!t)return r.setFailed("No record provided"),r.record;if(i.isArray(t)){for(let n of t){let s=await this._set(n);r.addPart(s)}return r.setCompleted(t),r.record}try{let n=JSON.stringify(t,null,4),s=i.record_id(t),l=Sr(s),u=await ne.save(this.path,l,n);return r.setCompleted(t),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(t){let r=new A.Action("Saving record");if(r.object=t,!t)return r.setFailed("No record provided"),r.record;let n=new i.DB;n.set(t);for(let s of n){let l=new A.Action("Saving record "+i.record_id(s));try{let u=JSON.stringify(s,null,4),d=i.record_id(s),c=Sr(d),f=await ne.save(this.path,c,u);l.setCompleted(s),r.addPart(l)}catch(u){l.setFailed(String(u)),r.addPart(l)}}return r.setCompleted(t),r.record}async post(t){return await this.set(t)}async get(t,r=!0){return r==!1||this.flattenRecords==!1?await this._get(t):await this._getNested(t)}async _get(t){let r=new A.Action("Get record from db");if(r.object=i.ref(t),!t)return r.setFailed("No @id provided"),r.record;if(i.isArray(t)){let l=[];for(let u of t){let d=await this._get(u);r.addPart(d),l=l.concat(i.toArray(d.result))}return r.setCompleted(l),r.record}let n=Sr(t),s=await ne.load(this.path,n);if(!s||s=="")return r.setFailed("No records found"),r.record;try{let l=JSON.parse(s);return l=i.simplify(l),r.setCompleted(l),r.record}catch(l){return r.setFailed(l),r.record}}async _getNested(t){let r=new A.Action("Get nested record");r.object=i.ref(t);let n=new i.DatabaseHelper({"@id":t});for(;n.isActive;){let s=n.next,l=await this._get(s);r.addPart(l),l?.result?i.toArray(l.result).map(u=>n.add(u||i.ref(u))):n.add(i.ref(s))}return r.setCompleted(n.result),r.record}async getAll(t=!0){let r=new A.Action("Get all records"),n;try{n=await ne.dir.list(this.path),n=n||[],n=i.toArray(n)}catch(u){return r.setFailed(u),r.record}if(n.length==0)return r.setCompleted([]),r.record;let s=n.map(u=>Lh(u)),l=await this.get(s,t);return r.addPart(l),r.setCompleted(l.result),r.record}async exists(t){let r=await this.get(t,!1);return i.isCompleted(r)}async delete(t){let r=new A.Action("Delete record");if(r.object=i.ref(t),!t)return r.setCompleted(),r.record;if(i.isArray(t)){for(let n of t){let s=await this.delete(n);r.addPart(s)}return r.setCompleted(),r.record}t=i.toRecord_id(t);try{let n=Sr(t),s=await ne.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let t=new A.Action("Purge database");try{let r=await ne.dir.delete(this.path);return t.setCompleted(),t.record}catch(r){return t.setFailed(r),t.record}}};function Sr(e){return e?`${Buffer.from(e).toString("base64url")}.json`:"unnamed-file.json"}function Lh(e){if(!e||e==="unnamed-file.json")return"";let t=e.replace(/\.json$/,"");return Buffer.from(t,"base64url").toString("utf-8")}var ds={apiDB:wr,...wr,apiClient:_r,..._r,cacheDB:Vr,...Vr,diskDB:Ir,...Ir};var $r={...ss,helpers:ss,...ds,tools:ds},Wh=$r,Jh=$r,zh=$r;0&&(module.exports={_h,h,helpers,records,transformHelpers});
//# sourceMappingURL=index.cjs.map
