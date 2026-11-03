var hl=Object.create;var Vt=Object.defineProperty;var ml=Object.getOwnPropertyDescriptor;var yl=Object.getOwnPropertyNames;var bl=Object.getPrototypeOf,xl=Object.prototype.hasOwnProperty;var m=(t,e)=>{for(var r in e)Vt(t,r,{get:e[r],enumerable:!0})},cs=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of yl(e))!xl.call(t,i)&&i!==r&&Vt(t,i,{get:()=>e[i],enumerable:!(n=ml(e,i))||n.enumerable});return t};var Vl=(t,e,r)=>(r=t!=null?hl(bl(t)):{},cs(e||!t||!t.__esModule?Vt(r,"default",{value:t,enumerable:!0}):r,t)),wl=t=>cs(Vt({},"__esModule",{value:!0}),t);var Jh={};m(Jh,{_h:()=>Ir,default:()=>Wh,h:()=>Lh,helpers:()=>Eh,records:()=>_,transformHelpers:()=>y});module.exports=wl(Jh);var $e={get:Ee,set:wt,flatten:Al,expand:_l};function Ee(t,e){if(!e||typeof e!="string")return;let r=fs(e),n=t;for(let i of r)isNaN(i)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[i];return n}function wt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=fs(e);if(n.length==0)return r;let i=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let o=t;for(let l=0;l<n.length-1;l++){let u=n[l],d=n[l+1],c=!isNaN(d);c==!0&&(o[u]=Array.isArray(o[u])?o[u]:[o[u]],o=o?.[u]),c==!1&&(o[u]=o?.[u]||{},o=Array.isArray(o?.[u])?o?.[u][0]:o?.[u])}return o[n[n.length-1]]=r,t}function Al(t){function e(i,o){let l=[];return Array.isArray(o)?(i=i||"",o.map((d,c)=>e(`${i}[${String(c)}]`,d)).flat()):o?.["@type"]||o?.["@id"]?(i=i&&i!=""?i+".":"",Object.keys(o).map(d=>e(`${i}${d}`,o[d])).flat()):[{propertyID:i,value:o}]}let r=e("",t),n={};return r.forEach(i=>n[i.propertyID]=i.value),n}function _l(t){let e={};return Object.keys(t).forEach(r=>wt(e,r,t?.[r])),e}function fs(t){let e=[],r="",n=["[","]","."];for(let i of t)if(n.includes(i)){r!=""&&e.push(r),r="";continue}else r=r+i;return e.push(r),e=e.filter(i=>i!=""),e=e.map(i=>isNaN(Number(i))?i:Number(i)),e}var Dr={};m(Dr,{eq:()=>Pl,ge:()=>Rl,getDiff:()=>gs,getHash:()=>ps,getHashNested:()=>Ol,gt:()=>jl,isEqual:()=>Nl,isSame:()=>Tl,le:()=>Cl,lt:()=>Dl});var At={};m(At,{expand:()=>Il,flatten:()=>$l,getChildren:()=>kl,handleRelationships:()=>Pr,simplify:()=>Nr,strip:()=>Tr});function Il(t,e,r=!0){let n=s._storeToMap(t),i=new Map;function o(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(g=>o(g));let u=s.record_id(l);if(u&&i.has(u)){let g=i.get(u);return r?g:s.ref?s.ref(g):{"@id":u}}let c=(u&&n instanceof Map?n.get(u):null)||l,f=Array.isArray(c)?[...c]:{...c};u&&i.set(u,f);for(let g of Object.keys(f))g==="previousItem"||g==="nextItem"||(f[g]=o(f[g]));return f}return typeof e=="string"&&(e={"@id":e}),o(e)}function Tr(t){function e(r,n,i){if(Array.isArray(r))return r.map(o=>e(o,n,i));if(r?.["@type"]||r?.["@id"]){if(i>n)return{"@id":r?.["@id"]};{let o={};for(let l of Object.keys(r).sort())o[l]=e(r?.[l],n,i+1);return o}}return r}return e(t,0,0)}function $l(t){function e(n){let i=[];if(!n)return[];if(s.isArray(n)){let o=[];for(let l of n)o=o.concat(e(l));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=s.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=s.ref(n?.[o]);continue}let l=n[o];l=s.toArray(l),n[o]=[];for(let u of l)u?.["@id"]?n[o].push({"@id":u?.["@id"]}):n[o].push(u),i=i.concat(e(u))}return i=[n].concat(i),i}t=s.clone(t),t=s.setTempID(t),t=Pr(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>s.isRef(n)===!1),r}function Pr(t){if(s.isArray(t))return t.map(r=>Pr(r));let e=t;if(s.record_type(e)=="Product"){let r=s.getValues(e,"offers");r=r.map(o=>s.insertValue(o,"itemOffered",s.ref(e))),e=s.setValues(e,"offers",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}if(s.record_type(e)=="Offer"){let r=s.getValues(e,"itemOffered");r=r.map(o=>s.insertValue(o,"offers",s.ref(e))),e=s.setValues(e,"itemOffered",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}return e}function Nr(t){function e(n,i=0){if(i>20)return n;if(i+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>e(o,i)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let l of Object.keys(n)){let u=e(n?.[l],i);l=="itemListElement"&&(u=s.toArray(u)),u!==void 0&&(o[l]=u)}return o["@id"]=s.toArray(o?.["@id"])?.[0],o}return n}}return t=s.clone(t),e(t)}function kl(t){function e(r,n){if(s.isArray(r)){let o=[];for(let l of r){let u=e(l,n);o=o.concat(u)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let i=[];n>0&&i.push(r);for(let o of Object.keys(r))i=i.concat(e(r[o],n+1));return i=i.filter(o=>o),i}return e(t,0)}function Tl(t,e){if(t=s.record_id(t)??t,e=s.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function Pl(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=s.clean(t),e=s.clean(e),t=s.strip(t),e=s.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function Nl(t,e){let r=(i,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((l,u)=>(l[u]=o[u],l),{}):o;try{t=s.JSON_stringify(t)}catch{}try{e=s.JSON_stringify(e)}catch{}return t==e}function Dl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function Cl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function jl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function Rl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function ps(t,e=!1){t=Nr(t),e==!1&&(t=Tr(t));let r=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((d,c)=>({...d,[c]:r(u[c])}),{}):Array.isArray(u)?u.map(r):u,n=JSON.stringify(r(t)),i=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(i)return i.createHash("sha256").update(n).digest("hex");let o=5381,l=n.length;for(;l;)o=o*33^n.charCodeAt(--l);return(o>>>0).toString(16)}function Ol(t){return ps(t,!0)}function gs(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let i=gs(t[n],e[n]);i!==null&&(r[n]=i)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var jr={};m(jr,{evaluate:()=>Cr});function Cr(t,e){let r=[];for(let i of Object.keys(e)){let o=i,l=e?.[i];if(l=s.toArray(l),o=="$and")return l.every(u=>Cr(t,u));if(o=="$or")return l.some(u=>Cr(t,u));for(let u of l){let d=Ul(t,o,u);r.push(d)}}return r.every(i=>vl(i.r,i.p,i.o,i.v))}function vl(t,e,r,n){try{let i=$e.get(t,e);if(typeof i=="string"&&(i=i.trim()),typeof n=="string"&&(n=n.trim()),i=isNaN(Number(i))?i:Number(i),n=isNaN(Number(n))?n:Number(n),r=="$equal")return i==n;if(r=="$lt")return i<n;if(r=="$gt")return i>n;if(r=="$le")return i<=n;if(r=="$ge")return i>=n;if(r=="$same")return i?.["@id"]&&i?.["@id"]===n?.["@id"];if(r=="$includes")return i.includes(n)}catch(i){return console.log("err",i),!1}}function Ul(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var un={};m(un,{assignId:()=>xu,getGenericRecordID:()=>bu,normalizeRecordId:()=>mu,replaceIds:()=>Ps,setTempID:()=>Ts});var oe={};m(oe,{default:()=>pu,get:()=>Q,getGenericRecordID:()=>Ze,getStandardID:()=>Pt,recordIdHelpers:()=>Tt,set:()=>$t,validate:()=>Xe});var Or={};m(Or,{clean:()=>Bl,isArray:()=>me,isNotArray:()=>Rr,isValid:()=>Hl,toArray:()=>_t});function Bl(t){return _t(t)}function Hl(t){return me(t)}function me(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function Rr(t){return!me(t)}function _t(t){return t==null?[]:(t=me(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var Br={};m(Br,{clean:()=>vr,format:()=>Ml,formatDate:()=>hs,isDate:()=>Z,isNotDate:()=>Ur,isValid:()=>Fl,toDate:()=>ke});function vr(t,e=void 0){return ke(t)||e}function Fl(t){return Z(t)}function Ml(t,e=!1){return hs(t,e)}function Z(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Ur(t){return!Z(t)}function ke(t){if(t===void 0)return;if(Z(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=Z(t)?t:void 0,t}function hs(t,e=!1){if(console.log("vv",t,ke(t)),t=ke(t),Z(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),i=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),l=`${n}-${i}-${o}`;if(e==!0){let u=String(r.getHours()).padStart(2,0),d=String(r.getMinutes()).padStart(2,0),c=String(r.getSeconds()).padStart(2,0);l=l+` ${u}:${d}:${c}`}return l}var Fr={};m(Fr,{clean:()=>El,isNotNull:()=>Hr,isNull:()=>Pe,isValid:()=>Ll});function El(t,e=void 0){}function Ll(t){return Pe(t)}function Hr(t){return!Pe(t)}function Pe(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||Te.array.isValid(t)?t.length==0:t instanceof Date?Te.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Lr={};m(Lr,{clean:()=>Mr,format:()=>Jl,formatDecimals:()=>ms,isNotNumber:()=>Er,isNumber:()=>Le,isValid:()=>Wl,toNumber:()=>St});function Mr(t,e=void 0){return St(t)??e}function Wl(t){return Le(t)}function Jl(t,e){return ms(t,e)}function ms(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function Le(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function Er(t){return!Le(t)}function St(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Jr={};m(Jr,{clean:()=>zl,cleanObject:()=>We,isNotObject:()=>Wr,isObject:()=>Je,isValid:()=>ql});function zl(t,e=void 0){return We(t)||e}function ql(t){return Je(t)}function Je(t){return typeof t!="object"||t===null||Array.isArray(t)||t===void 0||p.isString(t)==!0||p.isDate(t)==!0||p.isNumber(t)==!0||p.isArray(t)==!0?!1:Object.keys(t).length>0}function Wr(t){return!Je(t)}function We(t){if(p.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],We(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(We(x));e=e.filter(r=>p.isNotNull(r))}}if(p.object.isValid(t))for(let e of Object.keys(t))t[e]=We(t[e]),Te.isNull(t[e])&&delete t[e];return Te.isNotNull(t)?t:void 0}var Gr={};m(Gr,{clean:()=>Gl,cleanString:()=>ys,isNotString:()=>zr,isString:()=>Ne,isValid:()=>Kl,maxLengthEnd:()=>Xl,maxLengthMiddle:()=>Yl,toString:()=>qr});function Gl(t,e=""){return ys(t)||e}function Kl(t){return Ne(t)&&t.trim().length>=0}function Yl(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),i=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-i)}function Xl(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function Ne(t){return typeof t=="string"||t instanceof String}function zr(t){return!Ne(t)}function qr(t){return t==null?"":String(t)}function ys(t){return Ne(t)?t.trim():void 0}var Zr={};m(Zr,{clean:()=>bs,cleanUrl:()=>Vs,getDomain:()=>Zl,getParams:()=>Ql,getPath:()=>As,getUrl:()=>xs,isNotUrl:()=>Xr,isUrl:()=>ze,isValid:()=>Kr,setParams:()=>ws,setPath:()=>_s,toUrl:()=>Yr});function Kr(t){return ze(t)}function bs(t,e=void 0){return Vs(t)??e}function Yr(t,e,r,n=void 0){return xs(t,e,r)||n}function xs(t,e,r){let n=_s(t,e);return r&&(n=ws(n,r)),n}function ze(t){return t=bs(t),!!t}function Xr(t){return!ze(t)}function Vs(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:i=!0,lowercasePath:o=!1,allowedQueryParams:l=[]}=e;try{let u=new URL(t);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),n&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let d=u.pathname;if(d=d.replace(/\/+/g,"/"),o&&(d=d.toLowerCase()),i&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),u.pathname=d,r){let c=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],f=Array.from(u.searchParams.keys());for(let g of f){let V=c.some(W=>g.toLowerCase().startsWith(W)),I=l.includes(g);V&&!I&&u.searchParams.delete(g)}}return u.searchParams.sort(),u.toString()}catch{return}}function Zl(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function Ql(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function ws(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function As(t){try{return new URL(t).pathname}catch{return}}function _s(t,e){e=e??"";let r=[],n=As(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let o of e)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let i="/"+r.join("/");try{return new URL(i,t).toString()}catch(o){console.log(o,i,t);return}}var tn={};m(tn,{clean:()=>eu,format:()=>ru,isDuration:()=>De,isNotDuration:()=>Qr,isValid:()=>tu,toDuration:()=>en});function eu(t,e=void 0){return toDate(t)||e}function tu(t){return De(t)}function ru(t){return iu(t)}function De(t){return nu(t)}function Qr(t){return!De(t)}function en(t){return t}function nu(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function iu(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,i,o,l,u,d,c,f]=r.map(I=>parseInt(I,10)||0),g=[d,c,f].map(I=>String(I).padStart(2,"0")).join(":"),V=[];return i&&V.push(`${i}y`),o&&V.push(`${o}m`),l&&V.push(`${l}w`),u&&V.push(`${u}d`),V.length>0?`${V.join(" ")} ${g}`:g}var nn={};m(nn,{clean:()=>su,format:()=>au,isBoolean:()=>qe,isNotBoolean:()=>rn,isValid:()=>ou,toBoolean:()=>Ge,toString:()=>lu});function su(t){return Ge(t)}function ou(t){return qe(t)}function au(t){return Ge(t)}function lu(t){return String(t)}function qe(t){return typeof t=="boolean"}function rn(t){return typeof t!="boolean"}function Ge(t){if(qe(t))return t;if(typeof t=="string"){if(t.toLowerCase()=="true")return!0;if(t.toLowerCase()=="false")return!1}if(!isNaN(t)){if(t==0)return!1;if(valeu==1)return!0}}var an={};m(an,{clean:()=>uu,format:()=>cu,fromJson:()=>on,isJson:()=>Ke,isNotJson:()=>sn,isValid:()=>du,toJson:()=>Ye});function uu(t){return Ye(t)}function du(t){return Ke(t)}function cu(t){return Ye(t)}function Ke(t){if(!t)return!1;if(typeof t=="string"){try{if(JSON.parse(t))return!0}catch{}return!1}}function sn(t){return!Ke(t)}function Ye(t){let e=()=>{let r=new WeakSet;return(n,i)=>{if(typeof i=="object"&&i!==null){if(r.has(i))return;r.add(i)}return i}};try{return JSON.stringify(t,e(),4)}catch{}}function on(t){try{return JSON.parse(t)}catch{}}var p={isNull:Pe,isNotNull:Hr,isArray:me,isNotArray:Rr,toArray:_t,isDate:Z,isNotDate:Ur,toDate:ke,isDuration:De,isNotDuration:Qr,toDuration:en,isObject:Je,isNotObject:Wr,isNumber:Le,isNotNumber:Er,toNumber:St,isString:Ne,isNotString:zr,toString:qr,isUrl:ze,isNotUrl:Xr,toUrl:Yr,isBoolean:qe,isNotBoolean:rn,toBoolean:Ge,isJson:Ke,isNotJson:sn,toJson:Ye,fromJson:on,array:Or,boolean:nn,date:Br,duration:tn,json:an,null:Fr,number:Lr,object:Jr,string:Gr,url:Zr,getDataType:Ss,getType:Ss,getJsonSchema:fu},Te=p;function Ss(t){if(Pe(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(me(t))return"Array";if(Z(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(Kr(t))return"URL";if(vr(t))return"DateTime";if(De(t))return"Duration";if(Mr(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function fu(t){function e(r,n=0){let i={};if(n==0&&(i.$schema="https://json-schema.org/draft/2020-12/schema",i.title=r?.["@type"]||""),p.isString(r))return i.type="string",i;if(p.isObject(r)){i.type="object",i.properties={};for(let o of Object.keys(r))i.properties[o]=e(r[o],n+1);return i}if(p.isNumber(r))return i.type="number",i;if(p.isArray(r))return i.type="array",i.items=e(r?.[0],n+1),i}return e(t,0)}var hm=globalThis.crypto.randomUUID,Tt={get:Q,set:$t,validate:Xe,getGenericRecordID:Ze,getStandardID:Pt},pu=Tt,It={website:"domain",webpage:"url",offer:"url",brand:"domain"};function Q(t,e){if(!t||!t?.["@type"])return;let r=Is(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let i=It?.[n];if(i=="url")return $s(n,kt(t));if(i=="domain")return ks(n,kt(t))}return Ze(e)}function Pt(t,e){if(!t||!t?.["@type"])return;let r=Is(t);for(let n of r){let i=It?.[n];if(i=="url")return $s(n,kt(t));if(i=="domain")return ks(n,kt(t))}}function $t(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>$t(r,e));if(t?.["@type"]||t?.["@id"]){Xe(t)==!1&&(t["@id"]=Q(t,e));for(let r of Object.keys(t))t[r]=$t(t?.[r],e)}return t}function Xe(t,e){let r=t?.["@id"];return r?gu(t)?getStandardizedRecordId(t,e)==r:ln(t?.["@id"],e)==r:!1}function gu(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(It?.[r])return It?.[r]}function Is(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function kt(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function Ze(t){return t=ln(t),t?(t.endsWith("/")||(t=t+"/"),ln(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function $s(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>p.url.clean(i)),e=e.filter(i=>i);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function ks(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>hu(i)),e=e.map(i=>"https://"+i),e=e.filter(i=>i);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function hu(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function ln(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let i=n.toString();return i.endsWith("/")&&!t.endsWith("/")&&(i=i.slice(0,-1)),i}catch{return null}}function mu(t,e){t=Ts(t);let r=yu(t,e);return Ps(t,r)}function yu(t,e){function r(i,o){if(o=o||"https://www.test.com/",s.isArray(i)){let u=[];for(let d of i)u=u.concat(r(d));return u}if(s.isObject(i)==!1)return[];let l=[{replacee:s.record_id(i),replacer:Q(i,o)}];for(let u of Object.keys(i))l=l.concat(r(i[u],o));return l}let n=r(t,e);return n=n.filter(i=>i),n}function Ts(t){if(Array.isArray(t))return t.map(e=>s.assignId(e));if(s.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+s.randomUUID();for(let e of Object.keys(t))t[e]=s.assignId(t[e]);return t}function bu(t){return Ze(t)}function xu(t,e=[]){if(s.isArray(t))return t.map(r=>s.assignId(r,e));if(s.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+s.randomUUID(),t[r]=s.assignId(t[r],e);return t}function Ps(t,e){function r(n,i){if(Array.isArray(n))return n.map(u=>s.replaceIds(u,i));if(!n?.["@id"])return n;let o=n?.["@id"],l=i.get(o);l&&(n["@id"]=l);for(let u of Object.keys(n))n[u]=s.replaceIds(n?.[u],i);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(i=>n.set(i.replacee,i.replacer)),e=n}return r(t,e)}var fn={};m(fn,{DB:()=>cn,_storeToMap:()=>et,_storeToOriginal:()=>Su,getRecord:()=>Qe,getRecords:()=>Ce,patchRecord:()=>Hs,postRecord:()=>Bs});var dn={};m(dn,{Value:()=>Vu,ValueArray:()=>Cs,ValueDateTime:()=>Rs,ValueDuration:()=>wu,ValueMonetaryAmount:()=>Au,ValueNumber:()=>Os,ValueRecordId:()=>Ns,ValueRecordType:()=>Ds,ValueText:()=>vs,ValueThing:()=>Us,ValueUrl:()=>js});function Vu(t,e,r){return!t&&t!==0?"":s.isArray(t)?Cs(t,e,r):e=="@type"?Ds(t,e,r):e=="@id"?Ns(t,e,r):s.isObject(t)?Us(t,e,r):s.isNumber(t)?Os(t,e,r):s.isDate(t)?Rs(t,e,r):p.isUrl(t)?js(t,e,r):vs(t,e,r)}function Ns(t,e,r){let n=s.getRecordUrl({"@id":t},r),i=`<a title="${t}" href="${n}">${t}</a>`;return ee(i,e)}function Ds(t,e,r){let n=p.url.getUrl(r,t),i=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return ee(i,e)}function Cs(t,e,r){let n=t.length>0?`(${t.length})`:"";return ee(n,e)}function js(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return ee(n,e)}function Rs(t,e,r){t=s.toDate(t);let n=p.date.format(t);return ee(n,e)}function wu(t,e,r){return p.duration.format(pv.value)}function Os(t,e,r){let n=e=="position"?0:2;return t=s.toNumber(t),t=p.number.format(t,n),ee(t,e)}function vs(t,e,r){return ee(t,e)}function Us(t,e,r){let n=s.getRecordUrl(t,r),i=s.getName(t)||s.record_id(t);s.record_type(t)=="ListItem"&&(i=`ListItem ${s.getPosition(t)} - ${s.getValue(t,"item.name")||s.getValue(t,"@id")}`);let o=`<a title="${i}" href="${n}">${i}</a>`;return ee(o,e)}function Au(t,e,r){let n=p.toNumber(s.getValue(pv.value,"value"));if(n===void 0)return pv;let i=p.number.format(n,2),o=s.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+i,o=="USD"&&(pv.htmlValue=o+" $"+i),o=="CAD"&&(pv.htmlValue=o+" $"+i),o=="EUR"&&(pv.htmlValue=o+" "+i+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+i+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",ee(pv,e)}function ee(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var cn=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,Qe(this._store,e,r)}getAll(e=!0){return Ce(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||s.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return Ce(this._store,e,r)}set(e){let r=s.flatten(e),n=r.map(i=>Qe(this._store,s.record_id(i),!1));for(let i of r)this._store=Bs(this._store,i);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=s.flatten(e),i=n.map(o=>Qe(this._store,s.record_id(o),!1));for(let o of n)this._store=Hs(this._store,o,r);return this._broadcastIfChanged(i,n),e}delete(e){let r=[this.get(e)];this._store=s.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,i){let o=this.get(e);return s.getValue(o,r,n,i)}getValues(e,r,n){let i=this.get(e);return s.getValues(i,r,n)}setValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}setValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}addValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValue(i,r,n),this.set(i)}addValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValues(i,r,n),this.set(i)}length(){return this._store.size}get records(){return Ce(this._store)}getRecords(e=!1){return Ce(this._store,void 0,!1)}get record_ids(){return _u(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=s.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=s.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let i=this.get(e);return!i||s.isRef(i)?n:i}updateRefs(e,r={},n={}){if(!e)return e;if(s.isArray(e))return e.map(i=>this.updateRefs(i,r,n));if(s.isObject(e)){if(s.isRef(e)){if(r?.[s.record_id(e)])return r[s.record_id(e)];e=this.get(e,!0)||e,r[s.record_id(e)]=e}else{if(n?.[s.record_id(e)])return e;n[s.record_id(e)]=e}for(let i of Object.keys(e))["previousItem","nextItem"].includes(i)||(e[i]=this.updateRefs(e[i],r,n));return e}return e}execute(e){let r=s.toArray(e);r=r.map(o=>this.updateRefs(o));let n=new s.DB;n.set(r);let i=[];for(let o of r){o=n.get(o),o=s.execute(o),i.push(o);let l=s.getValues(o,"hasPart");for(let u of l){let d=s.list.toItemList(u);s.list.getItems(d).forEach(f=>n.set(s.getResults(f)))}n.set(s.getResults(o))}return this.set(n.getAll()),i.length==1?i[0]:i}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(i=>i!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let i of r){let o=e.find(l=>s.record_id(l)==s.record_id(i));s.isEqual(o,i)||n.push(s.record_id(i))}this.broadcast(n)}broadcast(e){e=s.toArray(e),e=s.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),i=this._subscriptions.get(r)||[];i=i.concat(this._subscriptions.get("all")||[]),i=[...new Set(i)];for(let o of i)this._broadcastItem(o,n)}}async _broadcastItem(e,r){try{return e(r)}catch{}}static randomUUID(){return s.randomUUID()}static clean(e,r){return s.clean(e,r)}static flatten(e){return s.flatten(e)}static getValue(e,r,n,i){return s.getValue(e,r,n,i)}static getValues(e,r,n){return s.getValues(e,r,n)}static setValue(e,r,n,i){return s.setValue(e,r,n,i)}static setValues(e,r,n){return s.setValues(e,r,n)}static addValue(e,r,n){return s.addValue(e,r,n)}static addValues(e,r,n){return s.addValues(e,r,n)}static strip(e){return s.strip(e)}static get dot(){return $e}static ref(e){return s.ref(e)}static simplify(e){return s.simplify(e)}static isJsonld(e){return s.isJsonld(e)}static isValid(e){return s.isValid(e)}static isArray(e){return s.isArray(e)}static setAdditionalProperty(e,r,n,i){return s.setAdditionalProperty(e,r,n,i)}static getAdditionalProperty(e,r){return s.getAdditionalProperty(e,r)}};function Bs(t,e){if(!e)return;e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let r=et(t);for(let n of e)r.get(n?.["@id"])&&s.isRef(n)||r.set(n?.["@id"],n);return t=s._storeToOriginal(r),t}function Hs(t,e,r=!0){e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let n=et(t);for(let i of e){let o=n.get(s.record_id(i));i=s.patch(o,i),n.set(s.record_id(i),i)}return t=s._storeToOriginal(n),t}function Qe(t,e,r=!0){if(s.isArray(e))return e.map(l=>Qe(t,l,r));let n=s._utilGetId(e),i=et(t),o=i.get(n);return r==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function Ce(t,e,r=!0){let n=et(t),i=Array.from(n.values());return e&&(i=i.filter(o=>s.evaluate(o,e))),r==!0&&(i=s.expand(n,i)),i=s.clone(i),i}function _u(t){return Ce(t).map(n=>s.record_id(n))}function et(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=s.toArray(t),t=t.filter(r=>s.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=s.record_id(r);n&&(e.has(n)&&(r=s.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function Su(t){return t=Array.from(t.values()),t}var gn={};m(gn,{JSON_parse:()=>ku,JSON_stringify:()=>Ws,clean:()=>Ms,clone:()=>Js,contractAtValue:()=>Nt,expandAtValue:()=>Tu,getRecordUrl:()=>Du,isJsonld:()=>Fs,isValid:()=>Iu,merge:()=>Pu,patch:()=>Nu,removeCircularRefs:()=>Es,sortedReplacer:()=>Ls,stringify:()=>$u});function Iu(t){return Fs(t)}function Fs(t){return t?.["@type"]||t?.["@id"]}function Ms(t,e){if(Array.isArray(t)&&t.length>1)return t.map(i=>Ms(i,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Js(t)}catch{}t=setTempID(t);let r=s.flatten(t);r=r.map(i=>JSON.parse(JSON.stringify(i,Object.keys(i).sort(),4)));let n=[];for(let i of r){if(i["@id"]=Array.isArray(i?.["@id"])?i?.["@id"][0]:i?.["@id"],Xe(i)==!0)continue;let o=Pt(i,e);if(o&&i?.["@id"]!=o){let l={replacer:o,replacee:i?.["@id"]};n.push(l)}if(!o&&i?.["@id"].startsWith("_:")){let l={replacer:s.getGenericRecordID(e),replacee:i?.["@id"]};n.push(l)}}return t=s.replaceIds(t,n),t}function Es(t){return pn(t,new Set)}function pn(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(s.isArray(t))return t.map(n=>pn(n,e));if(!s.isObject(t))return t;let r=s.record_id(t);if(e.has(r))return s.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=pn(t[n],e);return t}function Ls(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function Ws(t){return t=Es(t),JSON.stringify(t,Ls,4)}function $u(t){return Ws(t)}function ku(t){return JSON.parse(t)}function Tu(t){function e(r,n=!1){let i=s.getAtValue(r);if(i&&i.length>0)return s.setAtValue(r,e(i,!0));if(s.isArray(r))return r.map(o=>e(o,n));if(s.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=s.setValues(r,o,e(s.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function Nt(t){let e=s.getAtValue(t);if(e&&e.length>0)return Nt(s.getAtValue(t));if(s.isArray(t))return t.map(r=>Nt(r));if(s.isJsonld(t)){for(let r of Object.keys(t?.record||t))s.setValues(t,r,Nt(s.getValues(t,r)));return t}return t}function Js(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function Pu(t,e,r=!0){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let i={"@id":t?.["@id"]||e?.["@id"]};for(let o of n){if(o=="@id")continue;let l=s.toArray(t?.[o]||void 0),u=s.toArray(e?.[o]||void 0),d=l.concat(u);r==!0&&(d=s.dedupe(d)),i[o]=d}return i}function Nu(t,e){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of s.keys(e)){let n=s.toArray(e?.[r]);t=s.setValues(t,r,n)}return t}function Du(t,e){e=e?.baseUrl??e;try{return p.url.getUrl(e,encodeURIComponent(s.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var bn={};m(bn,{ID:()=>Ku,Id:()=>Zu,Type:()=>Bu,actionStatus:()=>fd,addValue:()=>Ys,addValues:()=>Xs,contentUrl:()=>hd,description:()=>bd,email:()=>wd,getActionStatus:()=>pd,getAdditionalProperty:()=>ld,getAtValue:()=>dd,getContentUrl:()=>md,getDescription:()=>xd,getEmail:()=>Ad,getID:()=>Yu,getId:()=>Qu,getImageName:()=>kc,getImageUrl:()=>$c,getItem:()=>Id,getItemListElement:()=>Dd,getItems:()=>Td,getName:()=>Rd,getNumberOfItems:()=>Ud,getObject:()=>Fd,getObjects:()=>Ld,getPosition:()=>zd,getPotentialAction:()=>Kd,getPotentialActions:()=>Zd,getRecordID:()=>qu,getRecordId:()=>Wu,getRecordType:()=>vu,getRecord_id:()=>Mu,getRecord_type:()=>ju,getResult:()=>tc,getResults:()=>ic,getTargetCollection:()=>ac,getTargetCollections:()=>dc,getText:()=>pc,getType:()=>Hu,getUrl:()=>mc,getValue:()=>T,getValues:()=>yn,hasValue:()=>Zs,insertValue:()=>ad,isActive:()=>xc,isCompleted:()=>Vc,isFailed:()=>wc,isPotential:()=>bc,isRef:()=>nd,item:()=>Sd,itemListElement:()=>Nd,items:()=>kd,keys:()=>sd,name:()=>jd,numberOfItems:()=>vd,object:()=>Hd,objects:()=>Ed,position:()=>Jd,potentialAction:()=>Gd,potentialActions:()=>Xd,properties:()=>mn,recordID:()=>zu,recordId:()=>Lu,recordType:()=>Ou,record_id:()=>zs,record_type:()=>Cu,ref:()=>id,result:()=>ec,results:()=>nc,setActionStatus:()=>gd,setActive:()=>_c,setAdditionalProperty:()=>ud,setAtValue:()=>cd,setCompleted:()=>Sc,setContentUrl:()=>yd,setDescription:()=>Vd,setEmail:()=>_d,setFailed:()=>Ic,setID:()=>Xu,setId:()=>ed,setIfNull:()=>od,setItem:()=>$d,setItemListElement:()=>Cd,setItems:()=>Pd,setName:()=>Od,setNumberOfItems:()=>Bd,setObject:()=>Md,setObjects:()=>Wd,setPosition:()=>qd,setPotential:()=>Ac,setPotentialAction:()=>Yd,setPotentialActions:()=>Qd,setRecordID:()=>Gu,setRecordId:()=>Ju,setRecordType:()=>Uu,setRecord_id:()=>Eu,setRecord_type:()=>Ru,setResult:()=>rc,setResults:()=>sc,setTargetCollection:()=>lc,setTargetCollections:()=>cc,setText:()=>gc,setType:()=>Fu,setUrl:()=>yc,setValue:()=>v,setValueIfNull:()=>Ks,setValues:()=>rt,targetCollection:()=>oc,targetCollections:()=>uc,text:()=>fc,toRecordID:()=>qs,toRecordId:()=>rd,toRecord_id:()=>tt,toRecord_ids:()=>td,toRef:()=>Gs,url:()=>hc});var je="en-CA";function Cu(t){return T(t,"@type")}function ju(t){return T(t,"@type")}function Ru(t,e){return v(t,"@type",e)}function Ou(t){return T(t,"@type")}function vu(t){return T(t,"@type")}function Uu(t,e){return v(t,"@type",e)}function Bu(t){return T(t,"@type")}function Hu(t){return T(t,"@type")}function Fu(t,e){return v(t,"@type",e)}function zs(t){return T(t,"@id")}function Mu(t){return T(t,"@id")}function Eu(t,e){return v(t,"@id",e)}function Lu(t){return T(t,"@id")}function Wu(t){return T(t,"@id")}function Ju(t,e){return v(t,"@id",e)}function zu(t){return T(t,"@id")}function qu(t){return T(t,"@id")}function Gu(t,e){return v(t,"@id",e)}function Ku(t){return T(t,"@id")}function Yu(t){return T(t,"@id")}function Xu(t,e){return v(t,"@id",e)}function Zu(t){return T(t,"@id")}function Qu(t){return T(t,"@id")}function ed(t,e){return v(t,"@id",e)}function tt(t){return s.isArray(t)?t.map(e=>tt(e)):typeof t=="string"?t:zs(t)}function td(t){return tt(t)}function qs(t){return tt(t)}function rd(t){return tt(t)}function nd(t){return!s.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function id(t){if(t?._isThingClass==!0)return t.ref;if(!t)return;let e=s._utilGetId(t);if(e)return{"@id":e}}function Gs(t){return s.isArray(t)?t.map(e=>Gs(e)):{"@id":qs(t)}}function sd(t){return mn(t)}function mn(t){if(!t)return[];if(s.isArray(t)){let r=[];for(let n of t)r=r.concat(mn(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function T(t,e,r,n,i){let o=yn(t,e,n,i);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function v(t,e,r,n,i){if(n!==void 0){let o=s.getValues(t,e);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return rt(t,e,r,i)}function Ks(t,e,r,n,i){let o=T(t,e,n);return s.isNull(o)==!1?t:v(t,e,r,n,i)}function od(t,e,r,n,i){return Ks(t,e,r,n,i)}function Ys(t,e,r){return Xs(t,e,r)}function Xs(t,e,r){return r=s.getValues(t,e).concat(r),rt(t,e,r)}function yn(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let i=e.split("."),o=t;for(let u=0;u<i.length;u++){let[d,c]=hn(i[u]);d&&(o=o?.[d],o=s.toArray(o)),o=o.filter(f=>f?.["@language"]==n||f?.["@language"]==je||f?.["@language"]===void 0),o=o.map(f=>f?.["@value"]??f),o=s.toArray(o),o=o.map(f=>f?.[n]??f?.[je]??f),o=s.toArray(o),u<i.length-1&&(o=o?.[c])}let l=s.toArray(o);return l.length==0&&r!==void 0?r:l}function rt(t,e,r,n){t=t?.record||t;let i=e.split("."),o=t||{};for(let d=0;d<i.length-1;d++){let[c,f]=hn(i[d]);o[c]=s.toArray(o?.[c]||[]);let g;for(o?.[c]?.[n]?(o[c][n]=s.toArray(o?.[c]?.[n]),g=o[c][n]):o?.[c]?.[je]?(o[c][je]=s.toArray(o?.[c]?.[je]),g=o[c][je]):(o[c]=s.toArray(o?.[c])||[],g=o[c]);g.length-1<f;)g.push({"@type":"Thing"});o=g?.[f]}let[l,u]=hn(i[i.length-1]);return o[l]=s.toArray(r),t}function ad(t,e,r){return Zs(t,e,r)==!0?t:Ys(t,e,r)}function Zs(t,e,r){let n=yn(t,e);if(n.length==0)return!1;for(let i of n)if(s.isSame(i,r))return!0;return!1}function hn(t){if(t===void 0)return[void 0,0];let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function ld(t,e){let n=s.getValues(t,"additionalProperty").find(o=>s.getValue(o,"propertyID")==e);return s.getValue(n,"value")}function ud(t,e,r,n){let i=s.getValues(t,"additionalProperty");i=i.filter(l=>s.getValue(l,"propertyID")!=e);let o={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:e,value:r};return t=s.addValue(t,"additionalProperty",o),t}function dd(t){return s.getValues(t,"@value")}function cd(t,e){return s.setValues(t,"@value",e)}function fd(t){return s.getValue(t,"actionStatus")}function pd(t){return s.getValue(t,"actionStatus")}function gd(t,e){return s.setValue(t,"actionStatus",e)}function hd(t){return s.getValue(t,"contentUrl")}function md(t){return s.getValue(t,"contentUrl")}function yd(t,e){return s.setValue(t,"contentUrl",e)}function bd(t){return s.getValue(t,"description")}function xd(t){return s.getValue(t,"description")}function Vd(t,e){return s.setValue(t,"description",e)}function wd(t){return s.getValue(t,"email")}function Ad(t){return s.getValue(t,"email")}function _d(t,e){return s.setValue(t,"email",e)}function Sd(t){return s.getValue(t,"item")}function Id(t){return s.getValue(t,"item")}function $d(t,e){return s.setValue(t,"item",e)}function kd(t){return s.list.getItems(t)}function Td(t){return s.list.getItems(t)}function Pd(t,e){return s.list.setItems(t,e)}function Nd(t){return s.list.getItemListElement(t)}function Dd(t){return s.list.getItemListElement(t)}function Cd(t,e){return s.list.setItemListElement(t,e)}function jd(t){return s.getValue(t,"name")}function Rd(t){return s.getValue(t,"name")}function Od(t,e){return s.setValue(t,"name",e)}function vd(t){return s.getValue(t,"numberOfItems")}function Ud(t){return s.getValue(t,"numberOfItems")}function Bd(t,e){return s.setValue(t,"numberOfItems",e)}function Hd(t){return s.getValue(t,"object")}function Fd(t){return s.getValue(t,"object")}function Md(t,e){return v(t,"object",e)}function Ed(t){return s.getValues(t,"object")}function Ld(t){return s.getValues(t,"object")}function Wd(t,e){return rt(t,"object",e)}function Jd(t){return s.list.getPosition(t)}function zd(t){return s.list.getPosition(t)}function qd(t,e){return s.list.setPosition(t,e)}function Gd(t){return s.getValues(t,"potentialAction")}function Kd(t){return s.getValues(t,"potentialAction")}function Yd(t,e){return s.setValues(t,"potentialAction",e)}function Xd(t){return s.getValues(t,"potentialAction")}function Zd(t){return s.getValues(t,"potentialAction")}function Qd(t,e){return s.setValues(t,"potentialAction",e)}function ec(t){return s.getValue(t,"result")}function tc(t){return s.getValue(t,"result")}function rc(t,e){return v(t,"result",e)}function nc(t){return s.getValues(t,"result")}function ic(t){return s.getValues(t,"result")}function sc(t,e){return rt(t,"result",e)}function oc(t){return s.getValue(t,"targetCollection")}function ac(t){return s.getValue(t,"targetCollection")}function lc(t,e){return s.setValue(t,"targetCollection",e)}function uc(t){return s.getValues(t,"targetCollection")}function dc(t){return s.getValues(t,"targetCollection")}function cc(t,e){return s.setValues(t,"targetCollection",e)}function fc(t){return s.getValue(t,"text")}function pc(t){return s.getValue(t,"text")}function gc(t,e){return s.setValue(t,"text",e)}function hc(t){return s.getValue(t,"url")}function mc(t){return s.getValue(t,"url")}function yc(t,e){return s.setValue(t,"url",e)}function bc(t){return s.getValue(t,"actionStatus")=="PotentialActionStatus"}function xc(t){return s.getValue(t,"actionStatus")=="ActiveActionStatus"}function Vc(t){return s.getValue(t,"actionStatus")=="CompletedActionStatus"}function wc(t){return s.getValue(t,"actionStatus")=="FailedActionStatus"}function Ac(t){return t=s.setValue(t,"actionStatus","PotentialActionStatus"),t=s.setValue(t,"startTime",void 0),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function _c(t){return t=s.setValue(t,"actionStatus","ActiveActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date().toISOString()),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function Sc(t,e){return t=s.setValue(t,"actionStatus","CompletedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")||new Date().toISOString()),t=s.setValue(t,"endTime",s.getValue(t,"endTime")||new Date().toISOString()),t=s.setValue(t,"error",void 0),s.isNotNull(e)&&(t=s.setValue(t,"result",e)),t}function Ic(t,e){return t=s.setValue(t,"actionStatus","FailedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date().toISOString()),t=s.setValue(t,"endTime",s.getValue(t,"endTime")??new Date().toISOString()),t=s.setValue(t,"error",String(e)),t=s.setValue(t,"result",void 0),t}function $c(t){if(s.record_type(t)=="ImageObject")return s.getValue(t,"contentUrl");let e=s.getValue(t,"image.contentUrl");return e=e??s.getValue(t,"image.url"),e=e??s.getValue(t,"image"),e=typeof e=="string"?e:"",e}function kc(t){let e=s.getValue(t,"image.name");return e=e??s.getValue(t,"name"),e=e??s.record_id(t),e=typeof e=="string"?e:"",e}var Vn={};m(Vn,{_utilGetId:()=>Mc,getDataType:()=>Pc,isArray:()=>ao,isBoolean:()=>Qs,isDate:()=>no,isJsonld:()=>oo,isNotArray:()=>Hc,isNotBoolean:()=>Dc,isNotDate:()=>vc,isNotNull:()=>Nc,isNotNumber:()=>jc,isNotObject:()=>Uc,isNotString:()=>Rc,isNull:()=>xn,isNumber:()=>eo,isObject:()=>so,isString:()=>ro,randomUUID:()=>Tc,toArray:()=>lo,toBoolean:()=>Cc,toDate:()=>io,toNumber:()=>to,toObject:()=>Bc,toSingle:()=>Fc,toString:()=>Oc});function Tc(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function Pc(t){if(xn(t))return"Undefined";if(ao(t))return"Array";if(oo(t))return"Jsonld";let e=io(t);if(no(e))return"Date";let r=to(t);return eo(r)?"Number":so(t)?"Object":ro(t)?'String"':Qs(t)?"Boolean":"Undefined"}function xn(t){return p.isNull(t)}function Nc(t){return p.isNotNull(t)}function Qs(t){return p.isBoolean(t)}function Dc(t){return p.isNotBoolean(t)}function Cc(t){return p.toBoolean(t)}function eo(t){return p.isNumber(t)}function jc(t){return p.isNotNumber(t)}function to(t){return p.toNumber(t)}function ro(t){return p.isString(t)}function Rc(t){return p.isNotString(t)}function Oc(t){return p.toString(t)}function no(t){return p.isDate(t)}function vc(t){return p.isNotDate(t)}function io(t){return p.toDate(t)}function so(t){return p.isObject(t)}function Uc(t){return p.isNotObject(t)}function Bc(t){return p.toObject(t)}function oo(t){return xn(t)?!1:!!(t?.["@id"]||t?.["@type"])}function ao(t){return p.isArray(t)}function Hc(t){return p.isNotArray(t)}function lo(t){return p.toArray(t)}function Fc(t){return t=lo(t),t?.[0]??void 0}function Mc(t){let e=t;if(e!==void 0&&e!==null)return s.isArray(e)&&e.length==1&&(e=e[0]),s.isString(e)?e:(e=s.record_id(e),e??void 0)}var wn={};m(wn,{concat:()=>Ec,dedupe:()=>uo,deleteItem:()=>Jc,diff:()=>Wc,filter:()=>Kc,find:()=>Gc,includes:()=>Dt,insertItem:()=>zc,intersection:()=>Lc,length:()=>qc,search:()=>fo,sort:()=>Re,upsertItem:()=>co});function uo(t,e=!0){if(t=s.toArray(t),t.length<2)return t;let r=[];for(let n of t)Dt(r,n)==!1&&(e==!0&&s.isValid(n)&&fo(t,n).forEach(o=>n=s.merge(o,n)),r.push(n));return r=Re(r),r}function Dt(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e)==!0)return!0;return!1}function Ec(t,e,r=!0){t=s.toArray(t),e=s.toArray(e);let n=t.concat(e);return n=n.filter(i=>i!=null),r==!0&&(n=uo(n)),n=Re(n),n}function Re(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=s.toArray(t),t.length<2||(e==null?r==1?t.sort((n,i)=>s.lt(n,i)==!0?-1:1):t.sort((n,i)=>s.gt(n,i)==!0?-1:1):r==1?t.sort((n,i)=>s.lt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1):t.sort((n,i)=>s.gt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1)),t}function Lc(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)Dt(e,n)==!0&&r.push(n);return r=Re(r),r}function Wc(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)Dt(e,n)==!1&&r.push(n);return r=Re(r),r}function Jc(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!1&&r.push(n);return r}function co(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!0?r.push(e):r.push(n);return r}function zc(t,e){return co(t,e)}function qc(t){return t=s.toArray(t),t.length}function Gc(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e))return r}function fo(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)&&r.push(n);return r}function Kc(t,e,r,n,i,o){return t=s.toArray(t),t.length==0?itemList:(s.isNotNull(e)&&(t=t.filter(l=>s.evaluate(l,e))),t=Re(t,r,n),t.length==0||(o=s.toNumber(o),s.isNumber(o)&&(t=t.slice(o)),i=s.toNumber(i),s.isNumber(i)&&t.length>=i&&(t=slice(0,i))),t)}var An={};m(An,{exportToString:()=>po});function po(t){return Array.isArray(t)?Yc(t):s.record_type(t)=="ListItem"?Xc(t):s.record_type(t)=="ItemList"?Zc(t):s.record_type(t)=="Action"?Qc(t):s.getValue(t,"name")||s.getValue(t,"@id")}function Yc(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=po(r)+`
`),e}function Xc(t){return`${s.getValue(t,"position")} - ${s.getValue(t,"item.name")||s.getValue(t,"item.@id")}`}function Zc(t){let e=s.getValues(t,"itemListElement"),r=`ItemList${s.getValue(t,"name")||s.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function Qc(t){return`${s.getValue(t,"name")||s.getValue(t,"@id")} - ${s.getValue(t,"actionStatus")}`}var Sn={};m(Sn,{DatabaseHelper:()=>_n,testDB:()=>ef});var _n=class{constructor(e){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=s.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=s.simplify(r),r=s.toArray(r),s.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=s.toArray(e);r=r.map(o=>typeof o=="string"?{"@id":o}:o),s.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let i=s.getChildren(n);this.#r(i)}#s(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.filter(i=>i),this.tempDB.set(r),this.#n(r),this.#i(r);let n=s.getChildren(r);this.#r(n)}#n(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let i=s.toArray(this._retrieved).concat(r);i=[...new Set(i)],this._retrieved=s.toArray(i)}#r(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=s.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=s.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=s.toArray(r)}#i(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.map(i=>i?.["@id"]||i),r=[...new Set(r)],r=r.filter(i=>i);let n=s.toArray(this._toGet);this._toGet=n.filter(i=>r.includes(i)==!1)}};function ef(){}var jn={};m(jn,{add:()=>of,append:()=>nt,clean:()=>In,decrementPositions:()=>Dn,duplicate:()=>pf,ensurePositions:()=>ve,ensurePreviousNextItem:()=>Ot,filter:()=>gf,find:()=>q,findByItem:()=>$n,findByListItem:()=>Ct,findByPosition:()=>Vo,getILE:()=>sf,getItem:()=>ot,getItemListElement:()=>$,getItems:()=>wo,getListItems:()=>hf,getMaxPosition:()=>st,getMinPosition:()=>Cn,getPosition:()=>P,gt:()=>xo,incrementPositions:()=>Nn,insert:()=>R,insertAfter:()=>Pn,insertBefore:()=>Tn,isItemList:()=>j,isListItem:()=>jt,length:()=>nf,lt:()=>bo,move:()=>af,moveAfter:()=>cf,moveBefore:()=>df,moveDown:()=>uf,moveUp:()=>lf,prepend:()=>ho,remove:()=>yo,replace:()=>mo,replaceItem:()=>yf,setItem:()=>_o,setItemListElement:()=>U,setItems:()=>Ao,setPosition:()=>Rt,sort:()=>it,toItemList:()=>rf,toListItem:()=>Oe,toString:()=>tf,toStringItemList:()=>go,toStringListItem:()=>kn,updateItem:()=>mf,upsert:()=>ff});function tf(t){return j(t)?go(t):kn(t)}function go(t){let e=[`ItemList ${s.getValue(t,"name")||s.record_id(t)}`],r=$(t);return e=e.concat(r.map(n=>kn(n))),e.join(`
`)}function kn(t){return`${P(t)} - ${s.getValue(t,"item.name")||s.record_id(t)}`}function j(t){return s.record_type(t)==="ItemList"}function rf(t){if(j(t)==!1){let e=s.toArray(t);return t={"@type":"ItemList","@id":s.randomUUID(),itemListElement:e.map((r,n)=>Oe(r,n))},In(t)}return In(t)}function In(t){t=s.setValueIfNull(t,"@id",s.randomUUID());let e=$(t);return e=e.map(r=>Oe(r)),e=ve(e),e=Ot(e),t=U(t,e),t=s.setValue(t,"numberOfItems",e.length),t}function nf(t){return $(t).length}function $(t){return s.getValues(t,"itemListElement")||[]}function sf(t){return $(t)}function U(t,e){return e=s.toArray(e),e=e.map((n,i)=>Oe(n)),e=ve(e),e=Ot(e),t=s.setValues(t,"itemListElement",e),s.getValue(t,"numberOfItems")!=e.length&&(t=s.setValue(t,"numberOfItems",e.length)),t}function R(t,e,r){if(t=ve(t),s.isArray(e)){let i=r;for(let o of e)t=R(t,o,i),(i||i===0)&&(i+=1);return t}e=Oe(e,r);let n=$(t);return n=n.filter(i=>s.record_id(i)!=s.record_id(e)),r=r??st(n),r=r??n.length,r=r>=0?r:0,n=Nn(n,r),n=it(n),n.push(e),t=U(t,n),t}function Tn(t,e,r){if(s.isArray(e)){for(let o of e)t=Tn(t,o,r);return t}let n=q(t,r);if(!n)return R(t,e);let i=P(n);return R(t,e,i)}function Pn(t,e,r){if(s.isArray(e)){for(let o of e)t=Pn(t,o,r);return t}let n=q(t,r);if(!n)return R(t,e);let i=P(n);return R(t,e,i+1)}function ho(t,e){if(s.isArray(e)){for(let r=e.length-1;r>=0;r--)t=ho(t,e?.[r],referenceItem);return t}return R(t,e,0)}function nt(t,e){if(s.isArray(e)){for(let i of e)t=nt(t,i,referenceItem);return t}let r=$(t);if(r.length==0)return R(t,e,0);let n=st(t);return n||n===0?R(t,e,n+1):R(t,e,r.length)}function of(t,e){return nt(t,e)}function af(t,e,r){return R(t,e,r)}function lf(t,e){let r=q(t,e),n=P(r);return n==0?t:R(t,r,n-1)}function uf(t,e){let r=q(t,e),n=P(r),i=st(t);return n==i?t:R(t,r,n+1)}function df(t,e,r){return Tn(t,e,r)}function cf(t,e,r){return Pn(t,e,r)}function mo(t,e,r){let n=$(t),i=[];for(let o of n){let l=ot(o);s.isSame(l,r)&&(l=_o(o,e)),i.push(o)}return U(t,i)}function ff(t,e){return q(t,e)?mo(t,e,s.ref(e)):nt(t,e)}function pf(t,e){if(jt(e)){let r=q(e);e=ot(r)}return nt(t,e)}function yo(t,e){if(s.isArray(e)){for(let o of e)t=yo(t,o);return t}t=ve(t);let r=$(t),n=q(r,e),i=P(n);return r=r.filter(o=>s.isSame(o,n)==!1),r=Dn(r,i),t=U(t,r),t}function gf(t,e){let r=s.getItemListElement(t);return e&&(r=s.filter(r,e)),r}function jt(t){return s.record_type(t)==="ListItem"}function Oe(t,e){return jt(t)==!1&&(t={"@type":"ListItem","@id":s.randomUUID(),item:t}),t=s.setIfNull(t,"@id",s.randomUUID()),(e||e===0)&&(t=s.setValue(t,"position",e)),t}function bo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function xo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function it(t){if(j(t)){let r=t,n=$(r),i=it(n);return U(r,i)}function e(r,n){return bo(r,n)==!0?-1:xo(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function q(t,e){if(!s.isNull(e))return s.isNumber(e)?Vo(t,e):jt(e)?Ct(t,e):s.record_type(e)?$n(t,e):$n(t,e)||Ct(t,e)}function Vo(t,e){if(j(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(P(r)==e)return r}}function Ct(t,e){if(j(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(s.isSame(r,e))return r}}function $n(t,e){if(j(t)&&(t=$(t)),t=s.toArray(t),t.length!=0)for(let r of t){let n=ot(r);if(s.isSame(n,e))return r}}function P(t){let e=s.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function Rt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,P(t)==e||(t=s.setValue(t,"position",e)),t}function Nn(t,e){if(e=e??0,j(t)){let n=t;t=$(n);let i=Nn(t,e);return U(n,i)}let r=[];for(let n of t){let i=P(n);i>=e&&(n=Rt(n,i+1)),r.push(n)}return r}function Dn(t,e){if(e=e??0,j(t)){let n=t;t=$(n);let i=Dn(t,e);return U(n,i)}let r=[];for(let n of t){let i=P(n);i!=0&&i>=e&&(n=Rt(n,i-1)),r.push(n)}return r}function ve(t,e){if(j(t)){let i=t;t=$(i);let o=ve(t);return U(i,o)}if(t=s.toArray(t),t.length==0)return t;t=it(t);let r=e??Cn(t)??0,n=[];for(let i of t)i=Rt(i,r),r+=1,n.push(i);return n}function Cn(t){if(j(t)){let i=$(i);return Cn(i)}t=s.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function st(t){if(j(t))return t=$(t),st(t);t=s.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function Ot(t){if(j(t)){let r=t;t=$(r);let n=Ot(t);return U(r,n)}t=s.toArray(t),t=it(t);let e=[];for(let r of t){let n=P(r),i=q(t,n-1),o=i?s.ref(i):void 0;r=s.setValue(r,"previousItem",o);let l=q(t,n+1),u=l?s.ref(l):void 0;r=s.setValue(r,"nextItem",u),e.push(r)}return e}function wo(t){if(j(t)){let n=$(t);return wo(n)}return t.map(r=>ot(r))}function Ao(t,e){if(j(t)){let n=t;t=$(n);let i=Ao(t);return U(n,i)}return t=s.toArray(t),e=s.toArray(e),e=e.map(n=>Oe(n)),t.concat(e)}function hf(t){return $(listItems)}function ot(t){return s.getValue(t,"item")}function _o(t,e){return s.setValue(t,"item",e)}function mf(t,e,r){let n=Ct(t,e);n=s.setValue(n,"item",r)}function yf(t,e,r){let n=$(t),i=s.toRecordID(e);for(let o=0;o<n.length;o++){let l=n[o];s.record_id(l)==i&&(n[o]=s.setItem(l,r))}return t=U(n),t}var vn={};m(vn,{appendAction:()=>To,deleteAction:()=>Co,duplicateAction:()=>Do,execute:()=>Rn,insertAction:()=>So,insertAfterAction:()=>$o,insertBeforeAction:()=>Io,moveDownAction:()=>No,moveUpAction:()=>Po,prependAction:()=>ko,replaceAction:()=>On});function Rn(t){if(s.isArray(t)){let n=new s.DB;n.set(t);let i=[];for(let o of t){o=n.get(o);let l=Rn(o);i.push(l),n.set(s.getResults(l))}return i}let e=s.getValues(t,"hasPart");if(e.length>0){let n=e.map(c=>s.list.toItemList(c)),i=new s.DB;i.set(n);let o=[],l,u=!1;for(let c of n){let f=s.list.getItemListElement(c);for(let g of f)a=s.getItem(g),a=i.get(a),u==!0&&(a=s.setFailed(a,"Previous step failed"),c=s.list.replaceItem(c,g,l)),u==!1&&(l=Rn(a),u=s.isFailed(l),c=s.list.replaceItem(c,g,l),i.set(s.getResults(l)));o.push(c)}t=s.setValues(t,"hasPart",o);let d=s.getResults(l);return t=s.setCompleted(t,d),t}let r=s.record_type(t);if(r=="ReplaceAction")return On(t);if(r=="UpdateAction")return bf(t);if(r=="InsertAction")return So(t);if(r=="InsertBeforeAction")return Io(t);if(r=="InsertAfterAction")return $o(t);if(r=="MoveUpAction")return Po(t);if(r=="MoveDownAction")return No(t);if(r=="AppendAction")return To(t);if(r=="PrependAction")return ko(t);if(r=="ReplaceAction")return On(t);if(r=="DuplicateAction")return Do(t);if(r=="DeleteAction")return Co(t)}function bf(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e){let o=s.getValue(i,"propertyID"),l=s.getValue(i,"value");n=s.setValues(n,o,l)}t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function So(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insert(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function Io(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertBefore(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function $o(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertAfter(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function ko(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.prepend(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function To(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.append(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Po(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveUp(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function No(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveDown(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function On(t){let e=s.targetCollection(t),r=s.getValue(t,"replacer"),n=s.getValue(t,"replacee"),i=s.list.replace(i,r,n);return t=s.addValue(t,"result",e),t=s.setCompleted(t),t}function Do(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.duplicate(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Co(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.remove(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}var Bn={};m(Bn,{add:()=>xf,addAppendAction:()=>Wo,addDeleteAction:()=>Fo,addDuplicateAction:()=>Eo,addMoveDownAction:()=>Ho,addMoveUpAction:()=>Uo,addPotentialActions:()=>Bt,addPropertyUpdateAction:()=>N,addSetActiveActionStatus:()=>Un,addSetCompletedActionStatus:()=>vt,addSetFailedActionStatus:()=>Ut,addSetPotentialActionStatus:()=>Oo,defineActionsForAction:()=>Ro,defineActionsForItemList:()=>jo,getAppendAction:()=>Jo,getDeleteAction:()=>Mo,getDuplicateAction:()=>Lo,getMoveDownAction:()=>Vf,getMoveUpAction:()=>Bo,getPropertyUpdateAction:()=>vo});function xf(t,e){return Bt(t,e)}function Bt(t,e){if(!t||typeof t=="string")return t;if(s.isArray(t))return t.map(n=>Bt(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=Ro(t,e)),r=="ItemList"&&(t=jo(t,e));for(let n of Object.keys(t))t[n]=Bt(t[n],e);return t}function jo(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let o=0;o<r.length;o++){let l=s.getPosition(r[o]);l>0&&(r[o]=Uo(r[o],t,e)),l<n-1&&(r[o]=Ho(r[o],t,e)),r[o]=Fo(r[o],t,e),r[o]=Eo(r[o],t,e)}t=s.setValues(t,"itemListElement",r);let i={"@type":"Thing","@id":"_h:"+s.randomUUID(),name:"new record"};return t=Wo(t,i,e),t}function Ro(t,e){let r=s.getValue(t,"startTime"),n=s.getValue(t,"endTime");return s.getValue(t,"actionStatus")||(t=Oo(t,e),t=Un(t,e),t=vt(t,e),t=Ut(t,e)),s.isPotential(t)&&(t=Un(t,e),t=vt(t,e),t=Ut(t,e)),s.isActive(t)&&(t=vt(t,e),t=Ut(t,e)),t}function Oo(t,e){let r=s.getValue(t,"startTime"),n=s.getValue(t,"endTime");return t=N(t,e,"actionStatus","PotentialActionStatus"),t=N(t,e,"startTime",""),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function Un(t,e){let r=s.getValue(t,"startTime"),n=s.getValue(t,"endTime");return t=N(t,e,"actionStatus","ActiveActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function vt(t,e){let r=s.getValue(t,"startTime"),n=s.getValue(t,"endTime");return t=N(t,e,"actionStatus","CompletedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function Ut(t,e){let r=s.getValue(t,"startTime"),n=s.getValue(t,"endTime");return t=N(t,e,"actionStatus","FailedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function N(t,e,r,n,i){let o=vo(t,e,r,n,i);return t=s.addValue(t,"potentialAction",o),t}function vo(t,e,r,n,i){return i=i||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":s.randomUUID(),name:i,object:{"@type":"PropertyValue","@id":s.randomUUID(),propertyID:r,value:n},targetCollection:s.ref(t),url:e}}function Uo(t,e,r,n){let i=Bo(t,e,r,n);return t=s.addValue(t,"potentialAction",i),t}function Bo(t,e,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":s.randomUUID(),name:n,object:s.ref(t),targetCollection:s.ref(e),url:r}}function Ho(t,e,r,n){let i=etMoveDownAction(t,e,r,n);return t=s.addValue(t,"potentialAction",i),t}function Vf(t,e,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":s.randomUUID(),name:n,object:s.ref(t),targetCollection:s.ref(e),url:r}}function Fo(t,e,r,n){let i=Mo(t,e,r,n);return t=s.addValue(t,"potentialAction",i),t}function Mo(t,e,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":s.randomUUID(),name:n,object:s.ref(t),targetCollection:s.ref(e),url:r}}function Eo(t,e,r,n){let i=Lo(t,e,r,n);return t=s.addValue(t,"potentialAction",i),t}function Lo(t,e,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":s.randomUUID(),name:n,object:s.ref(t),targetCollection:s.ref(e),url:r}}function Wo(t,e,r,n){let i=Jo(t,e,r,n);return t=s.addValue(t,"potentialAction",i),t}function Jo(t,e,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":s.randomUUID(),name:n,object:e,targetCollection:s.ref(t),url:r}}var s={dot:$e,...Dr,...jr,...At,...un,...fn,...gn,...bn,...Vn,...wn,...An,...Sn,list:jn,...vn,potentialActionHelpers:Bn};var Hn={};m(Hn,{getContent:()=>Af,getIcon:()=>$f,getTitle1:()=>qo,getTitle2:()=>wf,imageUrl:()=>Sf,imageUrls:()=>If,thumbnailUrl:()=>_f});function qo(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"givenName"),o=s.getValue(t,"familyName"),l=s.getValue(t,"name");if(r=="Person"){let u=[i,o];if(u=u.filter(d=>d!==void 0),u.length>0)return u.join(" ")}if(r=="ListItem"){let u=s.getValue(t,"item");return qo(u)}return l||n||""}function wf(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o=s.getValue(t,"description");if(r=="Person")return i??"";if(r=="Action"){let l=s.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return o||""}function Af(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o;return o=s.getValue(t,"abstract"),o&&typeof o=="string"||(o=s.getValue(t,"text"),o&&typeof o=="string")||(o=s.getValue(t,"description"),o&&typeof o=="string")?o:""}function _f(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"thumbnail.contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"thumbnail"),i&&typeof i=="string")||(i=s.getValue(t,"thumbnailUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")?i:""}function Sf(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function If(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValues(t,"image.contentUrl"),i=i.filter(o=>o&&typeof o=="string"),i.length>0||(i=s.getValues(t,"image"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function $f(t){let e=s.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return zo;case"action":return kf;case"person":return Tf;case"organization":return Pf;case"itemlist":return Nf;case"listitem":return Df;case"postaladdress":return Cf;case"product":return jf;case"webapi":return Rf;case"website":return Of;case"webpage":return vf;default:return zo}}var zo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',kf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',Tf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',Pf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Nf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',Df='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Cf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',jf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',Rf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Of='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',vf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Lm=globalThis.crypto.randomUUID;function Ft(t,e){if(Array.isArray(t))return t.map(n=>Ft(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=Ft(t);let r=s.record_type(t);return t=Ht(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=Ht(t,"MoveUpAction","Move Up",e),t=Ht(t,"MoveDownAction","Move Down",e),t=Ht(t,"DeleteAction","Delete",e)),t}function Ht(t,e,r,n){let i={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(t)},url:n};return t=Uf(t,i),t}function Uf(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var Fn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function Mt(t){let e=[];return e=e.concat(Fn?.[t]?.properties||[]),Fn?.[t]?.parent&&(e=e.concat(Mt(Fn[t].parent))),e}function Et(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let l=t+"_"+String(o);i.hasPart.push(Et(l,e-1))}return i}function Mn(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Lt(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let i="https://www.testrecord.com/"+t+"#"+n,o={"@type":n,"@id":i,name:t,headline:"Headline "+t,text:Bf(),image:_.image(),hasPart:[]};if(r==0&&(o.author=_.person(),o.datePublished=new Date().toISOString()),r<e)for(let l=0;l<3;l++){let u=t+"_"+String(l);o.hasPart.push(Lt(u,e,r+1))}return o}function Bf(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function at(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var iy=globalThis.crypto.randomUUID;function En(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},i;for(let o=0;o<t;o++){let l=Hf(_.thing(o),o);i&&(i.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":i?.["@id"]}),n.itemListElement.push(l),i=l}return n}function Hf(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function Ln(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:_.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function Wn(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:_.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function Jn(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:_.address()}}function zn(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function qn(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function Gn(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let i of["small","medium","large"])for(let o of["blue","white","red"]){let l=_.product(`variant ${i} ${o}`);l.size=i,l.color=o,l.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(l)}return n}function Wt(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,image:at(t),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let l=t+"_"+String(o);i.hasPart.push(Wt(l,e-1))}return i}function Kn(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function Yn(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<e;o++){let l=t+"_"+String(o),u=_.message(l);u.sender=o%2==0?u.recipient[0]:u.recipient[1],u.recipient=o%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-e+o),u.dateSent=d,u.dateReceived=d,i.hasPart.push(u)}return i}var _={action:Et,article:Lt,address:Mn,conversation:Yn,image:at,itemList:En,message:Kn,offer:Ln,organization:Wn,person:Jn,postalAddress:zn,product:qn,productGroup:Gn,thing:Wt,Action:Et,Article:Lt,Address:Mn,Conversation:Yn,Image:at,ItemList:En,Message:Kn,Offer:Ln,Organization:Wn,Person:Jn,PostalAddress:zn,Product:qn,ProductGroup:Gn,Thing:Wt};var Jt={};m(Jt,{transformHelpers:()=>y});var Zn={};m(Zn,{jsonToMarkdown:()=>Xn});function Xn(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",i="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,l)=>{typeof o=="object"&&o!==null?(n+=`${i}* **Record ${l+1}:**
`,n+=Xn(o,e+1)):n+=`${i}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,l])=>{l!==null&&typeof l=="object"?(n+=`${i}* **${o}:**
`,n+=Xn(l,e+1)):n+=`${i}* **${o}:** ${l}
`}):n+=`${i}* ${r}
`;return n}var ei={};m(ei,{jsonToYaml:()=>lt,yamlToJson:()=>Ff});function lt(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let l=lt(o,e+2).trimStart();n+=l}else n+=lt(o,0)}),n);let i=Object.keys(t);return i.length===0?`{}
`:(i.forEach(o=>{let l=t[o];n+=`${r}${o}:`,typeof l=="object"&&l!==null?n+=`
`+lt(l,e+2):n+=" "+lt(l,0)}),n)}function Ff(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let i of e){if(!i.trim()||i.trim().startsWith("#"))continue;let o=i.search(/\S/),l=i.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let u=n[n.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],n.push({indent:o,value:u.value[u.lastKey],type:"array"}));let d=n[n.length-1],c=l.substring(1).trim();if(c.includes(":")){let[f,...g]=c.split(":"),V=f.trim(),I=g.join(":").trim(),W=Qn(I),pe={[V]:W};d.value.push(pe),n.push({indent:o+2,value:pe,type:"object",lastKey:V})}else d.value.push(Qn(c))}else if(l.includes(":")){let[d,...c]=l.split(":"),f=d.trim(),g=c.join(":").trim();u.lastKey=f,g===""?(u.value[f]={},n.push({indent:o,value:u.value[f],type:"object",lastKey:f})):u.value[f]=Qn(g)}}return r}function Qn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var Go={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Ko="DesignToken",Yo={css:{get:Wf},get:ti,set:Xo,getValue:Ef,setValue:Lf,sampleRecord:Zo};function ti(t){if(!t)return;let e=s.getAdditionalProperty(t,Ko);return e=e||{},e}function Xo(t,e){if(t)return e=e||{},t=s.setAdditionalProperty(t,Ko,e),t}function Ef(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=ti(t),n=Ee(r,e);return Ee(n,"$value")}function Lf(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=ti(),i=Zo(),o=Ee(i,e);return o.$value=r,n=wt(n,e,o),t=Xo(t,n),t}function Wf(t,e="dt"){let r=[];function n(l,u=[]){for(let[d,c]of Object.entries(l)){if(c==null)continue;let f=[...u,d];if(typeof c=="object"&&"value"in c){let g=`--${f.map(I=>I.toLowerCase()).join("-")}`,V=i(c.value);r.push(`  ${g}: ${V};`)}else if(typeof c=="object"&&!Array.isArray(c))n(c,f);else{let g=`--${f.map(I=>I.toLowerCase()).join("-")}`,V=i(c);r.push(`  ${g}: ${V};`)}}}function i(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function Zo(){return Go}var y={markdown:Zn,yaml:ei,designToken:Yo};var qt=class{constructor(e){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return ri(this.record)}toJSON(){return this.record}toMD(){return y.markdown.jsonToMarkdown(this.record)}toYaml(){return y.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return s.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(s.setValue(this._record,e,r))}getValues(e){return s.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(s.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(s.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(s.addValues(this._record,e,r))}_setValueIfNotNull(e,r){s.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){s.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){s.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)&&s.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=Q(zt(this._record),this.baseUrl)),s.simplify(zt(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=s.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=s.clone(zt(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=ae(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=s.clone(zt(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return Mt(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??s.randomUUID();let i={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=i,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),n=r==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let i={"@type":"UpdateAction","@id":s.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(i)}catch(l){console.log("Callback failed: ",o,String(l),i)}}static toString(e){return ri(e)}static toMD(e){return y.markdown.jsonToMarkdown(e)}static toYaml(e){return y.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new w[r](y.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return ae(e)}static example(e=0,r=5){let n=this.name;return new w[n](_[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return Mt(e)}static getValue(e,r){return s.getValue(e,r)}static setValue(e,r,n){return s.setValue(e,r,ae(n))}static getValues(e,r){return s.getValues(e,r)}static setValues(e,r,n){return s.setValues(e,r,ae(n))}static addValue(e,r,n){return s.addValue(e,r,ae(n))}static addValues(e,r,n){return s.addValues(e,r,ae(n))}static flatten(e){return s.flatten(e)}static addPotentialActions(e){return Ft(e)}static addAdditionalProperty(e,r,n){return Jf(e,"additionalProperty",r,n)}};function zt(t){function e(n){if(Array.isArray(n))return n.map(i=>e(i));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let i={};for(let o of Object.keys(n))i[o]=e(n?.[o]);return i}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function ae(t){if(Array.isArray(t))return t.map(e=>ae(e));if(t?._isThingClass!=!0){let e=s.record_type(t);if(e){let r=w?.[e]||w.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=ae(t._record?.[e]);return t}function ri(t){if(Array.isArray(t)){let o=t.map(l=>ri(l));return o=o.join(`
`),o}let e=s.getValue(t,"@type"),r=s.getValue(t,"@id"),n=s.getValue(t,"name"),i=`${e||""}/${r||""}`;return n&&(i=`${i} - ${n}`),i}function Jf(t,e,r,n){let i=new w.PropertyValue;return i.propertyID=r,i.value=n,t=s.addValues(t,e,i.record),t}var A=class extends qt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=p.url.clean(value),e}set cleanUrl(e){url=p.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=Q(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=e);let i={"@type":"PropertyValue","@id":s.randomUUID()};i.propertyID=e,i.value=r,n.push(i),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(i=>i?.propertyID==e)&&(r=r.filter(i=>i?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(i=>i?.propertyID==e)?.value}};var ye=class extends A{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of s.toArray(e))s.record_type(r)!=="ItemList"&&this.add(r)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(e){this.record=s.list.setItemListElement(this.record,e)}get items(){return s.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=s.list.insert(this.record,e,0)}append(e){this.record=s.list.append(this.record,e)}add(e){this.record=s.list.append(this.record,e)}insert(e,r){this.record=s.list.insert(this.record,e,r)}delete(e){this.record=s.list.remove(this.record,e)}replace(e,r){this.record=s.list.replace(this.record,e,r)}move(e,r){this.record=s.list.move(this.record,e,r)}moveUp(e){this.record=s.list.moveUp(this.record,e)}moveDown(e){this.record=s.list.moveDown(this.record,e)}upsert(e){this.record=s.list.upsert(this.record,e)}static clean(e){return s.list.clean(e)}static length(e){return s.list.length(e)}static getItem(e,r){return s.list.getItem(e,r)}static prepend(e,r){return s.list.insert(e,r,0)}static append(e,r){return s.list.append(e,r)}static add(e,r){return s.list.insert(e,r,getLength(e))}static insert(e,r,n){return s.list.insert(e,r,n)}static delete(e,r){return s.list.remove(e,r)}static replace(e,r,n){return s.list.replace(e,r,n)}static move(e,r,n){return s.list.move(e,r,n)}static moveUp(e,r){return s.list.moveUp(e,r)}static moveDown(e,r){return s.list.moveDown(e,r)}static moveBefore(e,r,n){return s.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return s.list.moveAfter(e,r,n)}static upsert(e,r){return s.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,i,o,l){return search(e,r,n,i,o,l)}};var O=class extends A{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Qo(this.record,e)}static test(e,r){return Qo(e,r)}};function Qo(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",o=new RegExp(e.valuePattern,"gi");if(t.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var ut=class extends A{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(e){this.record=s.setCompleted(this.record,e)}setFailed(e){this.record=s.setFailed(this.record,e)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=na(this.record,e,r)}addMaxValue(e,r){this.record=ia(this.record,e,r)}addMinLength(e,r){this.record=sa(this.record,e,r)}addMaxLength(e,r){this.record=oa(this.record,e,r)}addDefaultValue(e,r){this.record=aa(this.record,e,r)}addValueRequired(e,r){this.record=la(this.record,e,r)}addValuePattern(e,r){this.record=ea(this.record,e,r)}addMultipleValues(e,r){this.record=ta(this.record,e,r)}addStepValue(e,r){this.record=ra(this.record,e,r)}testConditions(){return ni(this.record)}getInputconditions(){return H(this.record)}addInputCondition(e,r){return this.addValues(e+"-input",r)}getOutputConditions(){return zf(this.record)}addOutputCondition(e,r){return this.addValues(e+"-output",r)}test(){return ni(this.record)}static setPotential(e){return s.setPotential(e)}static setActive(e){return s.setActive(e)}static setCompleted(e,r){return s.setCompleted(e,r)}static setFailed(e,r){return s.setFailed(e,r)}static isPotential(e){return s.isPotential(e)}static isActive(e){return s.isActive(e)}static isCompleted(e){return s.isCompleted(e)}static isFailed(e){return s.isFailed(e)}static addMinValue(e,r,n){return na(e,r,n)}static addMaxValue(e,r,n){return ia(e,r,n)}static addMinLength(e,r,n){return sa(e,r,n)}static addMaxLength(e,r,n){return oa(e,r,n)}static addDefaultValue(e,r,n){return aa(e,r,n)}static addValueRequired(e,r,n){return la(e,r,n)}static addValuePattern(e,r,n){return ea(e,r,n)}static addMultipleValues(e,r,n){return ta(e,r,n)}static addStepValue(e,r,n){return ra(e,r,n)}static test(e){return ni(e)}};function H(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function te(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function zf(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function ea(t,e,r){let n=H(t,e)||new O;return n.valuePattern=r,t=te(t,e,n),t}function ta(t,e,r){let n=H(t,e)||new O;return n.multipleValues=r,t=te(t,e,n),t}function ra(t,e,r){let n=H(t,e)||new O;return n.stepValue=r,t=te(t,e,n),t}function na(t,e,r){let n=H(t,e)||new O;return n.minValue=r,t=te(t,e,n),t}function ia(t,e,r){let n=H(t,e)||new O;return n.maxValue=r,t=te(n.record,e,r),t}function sa(t,e,r){let n=H(t,e)||new O;return n.valueMinLength=r,t=te(t,e,n),t}function oa(t,e,r){let n=H(t,e)||new O;return n.valueMaxLength=r,t=te(t,e,n),t}function aa(t,e,r){let n=H(t,e)||new O;return n.defaultValue=r,t=te(t,e,n),t}function la(t,e,r){let n=H(t,e)||new O;return n.valueRequired=r,t=te(t,e,n),t}function ni(t){let e=H(t);for(let r of e)if(O.test(r,t?.[r.propertyID])==!1)return!1;return!0}var G=class extends ut{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(e){return this.setValues("targetCollection",e)}get toLocation(){return this.getValues("toLocation")}set toLocation(e){return this.setValues("toLocation",e)}},Gt=class extends G{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Kt=class extends G{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Yt=class extends G{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(e){return this.setValues("replacer",e)}get replacee(){return this.getValues("replacee")}set replacee(e){return this.setValues("replacee",e)}},Xt=class extends G{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Zt=class extends G{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Qt=class extends G{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var er=class extends A{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return qf(this.record)}get(e){return y.designToken.getValue(this.record,e)}set(e,r){return y.designToken.setValue(this.record,e,r)}get token(){return y.designToken.get(this.record)}set token(e){this.record=y.designToken.set(this.record,e)}get primary(){return y.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=y.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return y.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=y.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return y.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=y.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return y.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=y.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return y.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=y.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return y.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=y.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return y.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=y.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new tr(this,"typography.heading-lg")}get body(){return new tr(this,"typography.body-md")}get spacingSm(){return y.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return y.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return y.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return y.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return y.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return y.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return y.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return y.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return y.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return y.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new ii(this,"shadow.elevation-md")}sample(){return y.designToken.getSampleRecord()}},tr=class{constructor(e,r){this.base=e,this.basePath=S(r)}get fontFamily(){return y.designToken.getValue(record,S(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontFamily"),e)}get fontWeight(){return y.designToken.getValue(record,S(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontWeight"),e)}get fontSize(){return y.designToken.getValue(record,S(this.basePath,"fontSize"))}set fontSize(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontSize"),e)}get lineHeight(){return y.designToken.getValue(record,S(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"lineHeight"),e)}get letterSpacing(){return y.designToken.getValue(record,S(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"letterSpacing"),e)}get family(){return y.designToken.getValue(record,S(this.basePath,"fontFamily"))}set family(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontFamily"),e)}get weight(){return y.designToken.getValue(record,S(this.basePath,"fontWeight"))}set weight(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontWeight"),e)}get size(){return y.designToken.getValue(record,S(this.basePath,"fontSize"))}set size(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"fontSize"),e)}get height(){return y.designToken.getValue(record,S(this.basePath,"lineHeight"))}set height(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"lineHeight"),e)}get spacing(){return y.designToken.getValue(record,S(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"letterSpacing"),e)}},ii=class{constructor(e,r){this.base=e,this.basePath=S(r)}get color(){return y.designToken.getValue(record,S(this.basePath,"color"))}set color(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"color"),e)}get offsetX(){return y.designToken.getValue(record,S(this.basePath,"offsetX"))}set offsetX(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"offsetX"),e)}get offsetY(){return y.designToken.getValue(record,S(this.basePath,"offsetY"))}set offsetY(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"offsetY"),e)}get blur(){return y.designToken.getValue(record,S(this.basePath,"blur"))}set blur(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"blur"),e)}get spread(){return y.designToken.getValue(record,S(this.basePath,"spread"))}set spread(e){this.base.record=y.designToken.setValue(record,S(this.basePath,"spread"),e)}};function S(t,e,r){let n=[t,e,r];n=n.filter(o=>o!=null&&o!="");let i=n.join(".");return i=i.replaceAll("..","."),i}function qf(t){return`${s.record_type(t)} for ${s.getValue(t,url)}
    
    `}var B=class extends A{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var F=class extends B{constructor(e,r,n,i,o,l){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=i,this.dateSent=o,this.dateReceived=l)}toString(){return oi(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",Ue(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",Ue(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",Ue(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",Ue(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",Ue(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return da(this.record)}set gmail(e){this.record=ua(e)}get outlook(){return fa(this.record)}set outlook(e){this.record=ca(e)}static toString(e){return oi(e)}static fromGmail(e){return ua(e)}static toGmail(e){return da(e)}static fromOutlook(e){return ca(e)}static toOutlook(e){return fa(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n<i}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n>i}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i.getTime()-o.getTime()}),e}};function oi(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(c=>oi(c)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=s.getValue(t,"sender"),r=e?.email||e?.name||"";r=si(r,20);let i=s.getValues(t,"recipient").map(c=>c?.email||c?.name||"");i=si(i,25);let o=s.getValue(t,"headline")||"";o.length>20&&(o=si(o,30));let l=s.getValue(t,"dateSent")||s.getValue(t,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${r} | ${i} | ${o} | ${u}`}function si(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function Ue(t){return t?Array.isArray(t)?t.map(e=>Ue(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function ua(t){let e=new F;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function da(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function ca(t){let e=new F;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function fa(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var nr=class extends B{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Gf(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>s.record_type(r)=="Message");return e=F.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return pa(this.record)}add(e,r,n,i,o,l){this.record=rr(this.record,e,r,n,i,o,l)}addMessage(e,r,n,i,o,l){this.record=rr(this.record,e,r,n,i,o,l)}newMessage(e,r,n,i,o,l){let u=new F(e,r,n,i,o,l);this.messages=this.messages.push(u)}static getParticipants(e){return pa(e)}static newMessage(e,r,n,i,o,l,u){return rr(e,r,n,i,o,l,u)}static addMessage(e,r,n,i,o,l,u){return rr(e,r,n,i,o,l,u)}static getMessages(e){return dt(e)}static getFirstMessage(e){let r=dt(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=dt(e);return r.length>0?r[r.length-1]:void 0}};function Gf(t){let e=dt(t),r=`Conversation with ${e.length} messages:
`;return r+=F.toString(e),r}function rr(t,e,r,n,i,o,l){let u=new F(e,r,n,i,o,l);return t=s.addValues(t,"hasPart",u),t}function dt(t){let e=s.getValues(t,"hasPart").filter(r=>s.getValue(r,"@type")=="Message");return e=Kf(e),e}function Kf(t){return t.sort((e,r)=>{let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n-i}),t}function pa(t){let e=dt(t),r=new Set;return e.forEach(n=>{let i=s.getValue(n,"sender");i&&r.add(i),s.getValues(n,"recipient").forEach(l=>{r.add(l)})}),Array.from(r)}var Be=class extends A{constructor(e,r,n,i){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=i)}toString(){return Yf(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Yf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var ir=class extends A{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Xf(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new Be(e,this.sourceSystemID,this.sourceTableID,r),i=this.getValues("dataFeedElement");return i.push(n),this.setValues("dataFeedElement",i),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Xf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var be=class extends A{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return ga(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=A.setValues(this._record,"additionalProperty",e)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(e){this._record=A.setValues(this._record,"areaServed",e)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=A.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=A.setValues(this._record,"inventoryLevel",e)}get price(){return s.getValue(this._record,"price")}set price(e){this._record=A.setValues(this._record,"price",e)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=A.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=A.setValues(this._record,"priceValidUntil",e)}get seller(){return s.getValue(this._record,"seller")}set seller(e){this._record=A.setValues(this._record,"seller",e)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(e){this._record=A.setValues(this._record,"validFrom",e)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(e){this._record=A.setValues(this._record,"validThrough",e)}};function ga(t){if(Array.isArray(t))return t.map(i=>ga(i));let e="",r=s.getValue(t,"itemOffered")||{},n=s.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${s.getValue(r,"name")||""} - ${s.getValue(t,"priceCurrency")||""} $${n}`,e}var xe=class extends B{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ai(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new be(e,r))}static addOffer(e,r,n="CAD"){return Zf(e,r,n)}static toString(e){return ai(e)}};function ai(t){if(Array.isArray(t))return t.map(r=>ai(r));let e="";return e+=`${s.getValue(t,"name")||""}`,e}function Zf(t,e,r){let n=new be(e,r);return n.itemOffered={"@id":t?.["@id"]},t=s.addValue(t,"itemOffered",n.record),record}var sr=class extends xe{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return li(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Qf(this.record,e)}generateVariants(e){this.record=ep(this.record,e)}static toString(e){return li(e)}};function li(t){if(Array.isArray(t))return t.map(n=>li(n));let e="";e+=`${s.getValue(t,"name")||""}
`;let r=s.getValues(t,"hasVariant");for(let n of r)e+=" - "+xe.toString(n)+`
`;return e}function Qf(t,e){return t=s.addValues(t,"hasVariant",e),t}function ep(t,e){if(Array.isArray(e)){let o={};for(let l of e)o[l.propertyID]=o?.[l.propertyID]||[],o[l.propertyID].push(o.value);e=o}let r=tp(e),n=Object.keys(r[0]);t=s.addValues(t,"variesBy",n);let i=A.getProperties("Product");for(let o of r){let l=JSON.parse(JSON.stringify(t));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":t?.["@id"]};let u=[];for(let c of Object.keys(o))u.push(o?.[c]),i.includes(c)?l=s.setValue(l,c,o[c]):l=A.addAdditionalProperty(l,c,o[c]);let d=A.getValue(l,"name")+" "+u.join(" ");l=A.setValue(l,"name",d),t=A.addValue(t,"hasVariant",l)}return t}function tp(t){return Object.keys(t).reduce((r,n)=>{let i=t[n],o=[];for(let l of r)for(let u of i)o.push({...l,[n]:u});return o},[{}])}var or=class extends A{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return ha(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return s.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return s.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return s.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return s.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return s.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function ha(t){if(Array.isArray(t))return t.map(r=>ha(r));let e="";return e+=`${s.getValue(t,"propertyID")||""}: ${s.getValue(t,"value")||""} ${s.getValue(t,"unitText")||""}`,e}var Ve=class extends B{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),s.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new ye(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=ct(this.record,"WPHeader"),K(this.record,"WPHeader")}set WPHeader(e){this.record=Y(this.record,"WPHeader",e)}get WPFooter(){return this.record=ct(this.record,"WPFooter"),K(this.record,"WPFooter")}set WPFooter(e){this.record=Y(this.record,"WPFooter",e)}get WPSideBar(){return this.record=ct(this.record,"WPSideBar"),K(this.record,"WPSideBar")}set WPSideBar(e){this.record=Y(this.record,"WPSideBar",e)}get Table(){return K(this.record,"Table")}set Table(e){this.record=Y(this.record,"Table",e)}addHeaderLink(e,r){this.record=ma(this.record,e,r)}addFooterLink(e,r){this.record=ya(this.record,e,r)}domain(){return ba(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=rp(e,this.url)}static getWPHeader(e){return K(e,"WPHeader")}static getWPFooter(e){return K(e,"WPFooter")}static getWPSideBar(e){return K(e,"WPSideBar")}static getTable(e){return K(e,"Table")}static setWPHeader(e,r){return Y(e,"WPHeader",r)}static setWPFooter(e,r){return Y(e,"WPFooter",r)}static setWPSideBar(e,r){return Y(e,"WPSideBar",r)}static setTable(e,r){return Y(e,"Table",r)}static addHeaderLink(e,r,n){return ma(e,r,n)}static addFooterLink(e,r,n){return ya(e,r,n)}static getDomain(e){return ba(s.getValue(e,"url")||e)}};function ct(t,e){let n=s.getValues(t,"hasPart").find(i=>s.getValue(i,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=s.addValue(t,"hasPart",n)),t}function K(t,e){return s.getValues(t,"hasPart").find(i=>s.record_type(i)==e)}function Y(t,e,r){let n=s.getValues(t,"hasPart");return n=n.filter(i=>s.record_type(i)!=e),n.push(r),t=s.setValues(t,"hasPart",n),t}function ma(t,e,r){t=ct(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},i=K(t,"WPHeader");return i=s.addValue(i,"hasPart",n),t=Y(t,"WPHeader",i),t}function ya(t,e,r){t=ct(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},i=K(t,"WPFooter");return i=s.addValue(i,"hasPart",n),t=Y(t,"WPFooter",i),t}function ba(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function rp(t,e){let r=new s.DB;r.post(t);let n=r.records,i=[];if(np(t)=="Product"){let u=n.filter(V=>s.record_type(V)=="Product")[0];i.push({replacee:s.record_id(u),replacer:e+"#product"}),u=s.setValue(u,"url",e);let d=s.getValues(u,"brand");d=d.map(V=>V?.["@type"]?{"@type":"brand",name:V}:V),u=s.setValues(u,"brand",d);let c=n.filter(V=>s.record_type(V)=="Offer");c=c.map(V=>s.setValues(V,"itemOffered",s.ref(u))),u=s.setValues(u,"offers",c);let f=n.filter(V=>s.record_type(V)=="Review");c=c.map(V=>s.setValues(V,"itemReviewed",s.ref(u))),u=s.setValues(u,"review",f);let g=n.filter(V=>s.record_type(V)=="AggregateRating");return g=g.map(V=>s.setValues(V,"itemReviewed",s.ref(u))),u=s.setValues(u,"aggregateRating",g),u=s.replaceIds(u,i),u}return t}function np(t){if(t=s.toArray(t),t=t.filter(r=>s.record_type(r)!="BreadcrumbList"),t.length==1&&s.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&s.record_type(t[0]=="WebPage")&&(t=s.getValues(t,"mainEntity")),t.filter(r=>s.record_type(r)=="Product").length==1)return"Product"}var ar=class extends Ve{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new Ve(this);return n.url=e,n.name=r,n}domain(){return xa(this.url)}static getDomain(e){return xa(s.getValue(e,"url")||e)}};function xa(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var lr=class extends A{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var w={get:A.toThing,toThing:A.toThing,Action:ut,AddAction:Gt,AppendAction:Zt,BrandDesign:er,Conversation:nr,CreativeWork:B,DataFeed:ir,DataFeedItem:Be,DeleteAction:Kt,InsertAction:Xt,ItemList:ye,Message:F,Offer:be,Product:xe,ProductGroup:sr,PropertyValue:or,Thing:A,PrependAction:Qt,ReplaceAction:Yt,UpdateAction:G,WebAPI:lr,WebPage:Ve,WebSite:ar,format:Hn,toThing:ip};function ip(t){let e=s.record_type(t);return w?.[e]?new w[e](t):new w.Thing(t)}var fi={};m(fi,{RdfDB:()=>ur,default:()=>sp,fromRDF:()=>ci,toRDF:()=>di});var Gx=globalThis.crypto.randomUUID,ur=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return ci(this.getRdf(e))}post(e,r){e=di(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},sp={RdfDB:ur,toRDF:di,fromRDF:ci};function di(t,e){function r(i,o,l,u){let d=[];if(Array.isArray(l))return d=d.concat(l.map((f,g)=>r(i,o,f,u))),d.flat();if(l?.subject&&l?.predicate&&l?.object)return[l];if(u&&typeof u=="object"&&(typeof l!="object"&&(l={"@value":l}),l["@annotation"]={...l?.["@annotation"]||{},...u}),o=="@annotation")return[];if(l?.["@value"]){let f=l?.["@annotation"];if(f&&typeof f=="object"){f["@id"]=f?.["@id"]||"_:"+globalThis.crypto.randomUUID();let g=Object.keys(f).map(V=>r(f["@id"],V,f[V]));d=d.concat(g),f=f?.["@id"]}return d=d.concat([{subject:i,predicate:o,object:l?.["@value"],label:u}]),d}if(typeof l=="object"){l["@id"]=l?.["@id"]||"_:"+globalThis.crypto.randomUUID();let f={subject:i,predicate:o,object:l?.["@id"],label:u};return d=d.concat([f]),d=d.concat(Object.keys(l).map(g=>r(l?.["@id"],g,l?.[g],u))),d.flat()}let c={subject:i,predicate:o,object:l,label:u};return d.concat([c])}let n=[];if(e){let i=ui(e);i.length>1&&(n=n.concat(i.slice(1))),e=i?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(i=>i.subject),n}function ci(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let i=e.get(n.subject),o=n?.object,l=e.get(n?.object);l&&(o={"@id":l?.["@id"]}),n.label&&(o?.["@id"]||(o={"@value":o}),o["@annotation"]=n?.label),i[n.predicate]=i?.[n.predicate]||[],i[n.predicate]=Array.isArray(i[n.predicate])?i[n.predicate]:[i[n.predicate]],i[n.predicate].push(o)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function ui(t){let e=[];if(Array.isArray(t))return e=t.map(r=>ui(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let i=[];for(let o of n)typeof o=="object"?(o["@id"]=o?.["@id"]||"_:"+globalThis.crypto.randomUUID(),i.push({"@id":o?.["@id"]}),e=e.concat(ui(o))):i.push(o);t[r]=i,e=[t].concat(e)}return e}var le=Vl(require("fs/promises"),1);var re={load:wa,save:Va,exists:dr,list:_a,delete:Aa,file:{load:wa,save:Va,delete:Aa,exists:dr},dir:{list:_a,exists:dr,delete:ap},getFilePath:ft};async function dr(t,e){t=ft(t,e);try{return await le.default.access(t),!0}catch{return!1}}async function op(t){try{await le.default.mkdir(t,{recursive:!0})}catch(e){throw e}}async function Va(t,e,r){await op(t),t=ft(t,e);try{await le.default.writeFile(t,r,"utf8")}catch(n){throw n}}async function wa(t,e){t=ft(t,e);try{return await le.default.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function Aa(t,e){t=ft(t,e);try{await le.default.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function ap(t){try{await le.default.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function _a(t){if(await dr(t)==!1)return[];try{return await le.default.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function ft(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var gi={};m(gi,{Button:()=>up,DropdownMenu:()=>Sa,MenuItem:()=>dp,escapeHtml:()=>ue});function ue(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function up({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[e]||o.default} ${l[r]||l.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function pi(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let i=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?pi(n,i):`<input type="hidden" name="${ue(i)}" value="${ue(String(n))}">`}).join("")}function Sa({label:t="",items:e=[],align:r="end",variant:n="ghost",size:i="icon",className:o="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},c={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},f=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),g=t?`<span class="mr-2">${ue(t)}</span>${f}`:`${f}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let V=e.map(I=>{if(I.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let W=pi(I.object),pe=I.disabled?"disabled":"";return`
        <form method="POST" action="${ue(I.url||"")}" class="m-0 p-0">
          ${W}
          <button
            type="submit"
            ${pe}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ue(I.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${l}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${d[n]||d.ghost} ${c[i]||c.icon}"
      >
        ${g}
      </summary>

      <div class="absolute ${u[r]||u.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${V}
      </div>
    </details>
  `.trim()}function dp(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=pi(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ue(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ue(h.getName(item)||"")}
          </button>
        </form>`}var ne={};m(ne,{components:()=>b});var hi={};m(hi,{Accordion:()=>cp});function cp({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var mi={};m(mi,{Alert:()=>fp});function fp({title:t,description:e="",variant:r="default",className:n=""}){let i={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${i[r]||i.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var yi={};m(yi,{Article:()=>pp,ArticleBody:()=>xp,ArticleCard:()=>wp,ArticleCardBody:()=>_p,ArticleCardFooter:()=>Sp,ArticleCardHeader:()=>Ap,ArticleCardMedia:()=>$p,ArticleCardTitle:()=>Ip,ArticleCategory:()=>hp,ArticleFooter:()=>Vp,ArticleHeader:()=>gp,ArticleMedia:()=>bp,ArticleSubTitle:()=>yp,ArticleTitle:()=>mp});function pp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function gp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function hp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function mp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function yp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function bp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function xp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function Vp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function wp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function Ap(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function _p(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function Sp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function Ip(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function $p(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var bi={};m(bi,{Badge:()=>kp,Badges:()=>Tp});function kp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function Tp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var xi={};m(xi,{Breadcrumb:()=>Pp,BreadcrumbEllipsis:()=>Dp,BreadcrumbItem:()=>ka,BreadcrumbLink:()=>Ta,BreadcrumbList:()=>$a,BreadcrumbMain:()=>Ia,BreadcrumbPage:()=>Np,BreadcrumbSeparator:()=>Pa});function Pp({urls:t,titles:e,links:r}){let n=new w.ItemList(r);if(t)for(let l=0;l<t.length;l++){let u=e?.[l]||t[l].split("/")?.[t[l].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[l],name:u})}let i=n.items;return console.log("items",i),Ia({children:$a({children:i.map(l=>ka({children:Ta({href:l?.url,children:l?.name})})).join(Pa())})})}function Ia({children:t="",className:e="",attrs:r=""}={}){return`
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
    `.trim()}function Np({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function Pa({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function Dp({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var Vi={};m(Vi,{Button:()=>Cp});function Cp({text:t,variant:e="primary",size:r="default",className:n="",attrs:i=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.primary} ${l[r]||l.default} ${n}" ${i}>
        ${t}
      </button>
    `.trim()}var wi={};m(wi,{Card:()=>jp,CardBody:()=>vp,CardContent:()=>Fp,CardDescription:()=>Hp,CardFooter:()=>Up,CardHeader:()=>Rp,CardMain:()=>Op,CardMedia:()=>Mp,CardTitle:()=>Bp});function jp(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function Rp(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function Op(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function vp(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function Up(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function Bp(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function Hp(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function Fp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function Mp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var Ai={};m(Ai,{Dialog:()=>Ep});function Ep({id:t,title:e,description:r="",content:n,footer:i="",className:o=""}){return`
      <dialog id="${t}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${o}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${e}</h3>
            ${r?`<p class="text-sm text-muted-foreground">${r}</p>`:""}
          </div>
          <div class="py-2 text-sm">
            ${n}
          </div>
          ${i?`<div class="flex justify-end gap-3 pt-4">${i}</div>`:""}
        </div>
      </dialog>
    `.trim()}var _i={};m(_i,{Footer:()=>Lp});function Lp({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let i=r.map(o=>`
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
              <div class="font-bold text-lg tracking-tight">${t}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${i}
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
    `.trim()}var Si={};m(Si,{Header:()=>Wp});function Wp({brand:t="",navItems:e=[],actions:r="",className:n=""}){let i=e.map((o,l)=>{if(o.dropdown&&o.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
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
              ${t}
            </a>
            <nav class="hidden md:flex items-center gap-1">
              ${i}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${r}
          </div>
        </div>
      </header>
    `.trim()}var Ii={};m(Ii,{H1:()=>Jp,H2:()=>zp,H3:()=>qp,H4:()=>Gp,H5:()=>Kp,H6:()=>Yp,Heading:()=>we,P:()=>Xp,Text:()=>Zp});function Jp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"1",options:e,record_id:r,propertyID:n,className:i})}function zp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"2",options:e,record_id:r,propertyID:n,className:i})}function qp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"3",options:e,record_id:r,propertyID:n,className:i})}function Gp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"4",options:e,record_id:r,propertyID:n,className:i})}function Kp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"5",options:e,record_id:r,propertyID:n,className:i})}function Yp(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"6",options:e,record_id:r,propertyID:n,className:i})}function we({title:t,level:e,options:r,record_id:n,propertyID:i,className:o}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${i}" 
    class="break-all ${o||""}"
    >${t}</h${e}>
    
    `}function Xp(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}function Zp(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}var $i={};m($i,{Input:()=>M,InputCheckbox:()=>Qp,InputDate:()=>eg,InputDateTime:()=>rg,InputEmail:()=>ng,InputNumber:()=>tg,InputPassword:()=>ig,InputTel:()=>sg,InputText:()=>og,InputTime:()=>ag,InputUrl:()=>lg});function M({label:t="",type:e="text",placeholder:r="",value:n="",id:i="",className:o="",attrs:l=""}){let u=i?`id="${i}"`:"";return`
      <div class="space-y-2 w-full">
        ${t?`<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${i?`for="${i}"`:""}>${t}</label>`:""}
        <input 
          type="${e||"text"}" 
          id=${i||""} 
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
    `.trim()}function Qp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:i})}function eg({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"date",label:t,value:e,propertyID:r,id:n,className:i})}function tg({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"number",label:t,value:e,propertyID:r,id:n,className:i})}function rg({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:i})}function ng({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"email",label:t,value:e,propertyID:r,id:n,className:i})}function ig({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"password",label:t,value:e,propertyID:r,id:n,className:i})}function sg({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"tel",label:t,value:e,propertyID:r,id:n,className:i})}function og({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"text",label:t,value:e,propertyID:r,id:n,className:i})}function ag({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"time",label:t,value:e,propertyID:r,id:n,className:i})}function lg({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"url",label:t,value:e,propertyID:r,id:n,className:i})}var ki={};m(ki,{Pagination:()=>ug,PaginationComponent:()=>Da,PaginationContent:()=>Ca,PaginationEllipsis:()=>Oa,PaginationItem:()=>pt,PaginationLink:()=>cr,PaginationNext:()=>Ra,PaginationPrevious:()=>ja,buildPaginationUrl:()=>Na});function Na(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function Da({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function Ca({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function pt({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function cr({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:i="",attrs:o=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${u} ${l[r]||l.icon} ${d} ${i}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function ja({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return cr({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Ra({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return cr({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Oa({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function ug({url:t,total:e,limit:r=10,offset:n=0,siblingCount:i=1,className:o="",attrs:l=""}={}){let u=Math.ceil(e/r)||1,d=Math.floor(n/r)+1,c=J=>{let z=(J-1)*r;return Na(t,r,z)},f=(J,z)=>{let he=z-J+1;return Array.from({length:he},(bt,xt)=>J+xt)},g=i+5,V=[];if(g>=u)V=f(1,u);else{let J=Math.max(d-i,1),z=Math.min(d+i,u),he=J>2,bt=z<u-2,xt=1,gl=u;if(!he&&bt){let Me=3+2*i;V=[...f(1,Me),"ellipsis",u]}else if(he&&!bt){let Me=3+2*i,ds=f(u-Me+1,u);V=[xt,"ellipsis",...ds]}else if(he&&bt){let Me=f(J,z);V=[xt,"ellipsis",...Me,"ellipsis",gl]}}let I=[],W=d>1,pe=W?c(d-1):"#";I.push(pt({children:ja({href:pe,disabled:!W})})),V.forEach(J=>{if(J==="ellipsis")I.push(pt({children:Oa()}));else{let z=Number(J),he=z===d;I.push(pt({children:cr({href:c(z),isActive:he,children:String(z)})}))}});let ge=d<u,$r=ge?c(d+1):"#";I.push(pt({children:Ra({href:$r,disabled:!ge})}));let kr=Da({className:o,attrs:l,children:Ca({children:I.join("")})});return kr=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${kr}
    </div>`,kr}var Ti={};m(Ti,{Section:()=>dg,SectionHeader:()=>cg});function dg({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:i="",attrs:o=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=l[e]||l.default,c=u[r]!==void 0?u[r]:u.default,f=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${c} ${i}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${d} ${n}" ${o}>
      ${f}
    </section>
  `.trim()}function cg({title:t="",description:e="",align:r="left",className:n=""}={}){let i={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${i[r]||i.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var Pi={};m(Pi,{Table:()=>pg,TableBody:()=>Ba,TableCell:()=>X,TableCellCenter:()=>bg,TableCellLeft:()=>yg,TableCellLink:()=>Vg,TableCellNumber:()=>xg,TableCellRight:()=>Fa,TableCellText:()=>wg,TableColumnHeader:()=>Ua,TableColumnHeaderCenter:()=>mg,TableColumnHeaderLeft:()=>gg,TableColumnHeaderRight:()=>hg,TableFooter:()=>Ma,TableHeader:()=>va,TableRow:()=>Ha,getTable:()=>fg});function fg({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${va(t.map(n=>Ua(n)))}
      
        ${Ba(e.map(n=>Ha(n.map(i=>X(i)))))}
        
        ${Ma()}

      </table>

    </div>
  
  
  `}function pg(t,e,r,n,i=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${i||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function va(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function Ua(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function gg(t,e){return X(t,e)}function hg(t,e){return e=e+" text-right ",X(t,e)}function mg(t,e){return e=e+" text-center ",X(t,e)}function Ba(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function Ha(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
    <tr 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${t}</tr>
  `}function X(t,e,r,n){return t||(t=""),Array.isArray(t)&&(t=t.join(" ")),`
    <td 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${t}</td>
  `}function yg(t,e,r,n){return X(t,e,r,n)}function Fa(t,e,r,n){return n=n+" text-right ",X(t,e,r,n)}function bg(t,e,r,n){return n=n+" text-center ",X(t,e,r,n)}function xg(t,e,r,n,i,o){return t=s.toNumber(t),t=p.number.format(t,e),Fa(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function Vg(t,e,r,n,i,o){return X(`
      
    <a data-id="${n||""}" data-property-id="${i||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function wg(t,e,r,n){let i=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return X(i)}function Ma(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var Ni={};m(Ni,{Webpage:()=>Ag});function Ag({title:t,headContent:e,header:r,footer:n,content:i,breadcrumb:o}){return`
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
          ${o||""}
          ${i||""}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${n||""}</div>


      <script type="module" src="library.js"></script>

    </body>
    </html>
  `.trim()}var Di={};m(Di,{CardGrid:()=>_g});function _g({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),i=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${i}">
      ${e}
    </div>
  `}var Ci={};m(Ci,{JsonEditor:()=>Ig});function Ea({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.default} ${l[r]||l.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function Sg({title:t="",description:e="",children:r="",footer:n="",className:i="",attrs:o=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${i}" ${o}>
      ${t||e?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${t?`<h3 class="font-semibold leading-none tracking-tight text-xl">${t}</h3>`:""}
          ${e?`<p class="text-sm text-muted-foreground">${e}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${r}</div>
      ${n?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${n}</div>`:""}
    </div>
  `.trim()}function Ig({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:i="",attrs:o=""}={}){let l=t.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof r=="string"?r:JSON.stringify(r,null,2),d=JSON.stringify(n,null,2),c=`
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
  `.trim(),f=`
    <form id="${l}_form" onsubmit="window.${l}_submit(event)" class="space-y-4">
      <div>
        <label for="${l}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${l}_endpoint"
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
            id="${l}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${d}</textarea>
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
            ${Ea({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
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
        ${Ea({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${l}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${l}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${l}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${c}
  `.trim();return Sg({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:f,className:i,attrs:o})}var ji={};m(ji,{Modal:()=>$g,ModalBody:()=>Tg,ModalTrigger:()=>kg});function $g(t,e,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${t||""}
    </div>
    
    
    `}function kg(t,e,r){return`
    
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
    
    `}function Tg(t,e,r){return`
    
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
    
    
    `}var Ri={};m(Ri,{DropdownMenu:()=>Ng,DropdownMenuIcon:()=>Dg,Menu:()=>Pg,MenuItemLink:()=>Cg,MenuItemPost:()=>jg,MenuItemSeparator:()=>Rg});function Pg(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function Ng(t,e,r){return`
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

    `}function Dg(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Cg(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function jg(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function Rg(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Oi={};m(Oi,{Kanban:()=>Og,KanbanBody:()=>Ug,KanbanCard:()=>Wg,KanbanCardBody:()=>zg,KanbanCardFooter:()=>qg,KanbanCardHeader:()=>Jg,KanbanColumn:()=>Fg,KanbanColumnBody:()=>Eg,KanbanColumnFooter:()=>Lg,KanbanColumnHeader:()=>Mg,KanbanFooter:()=>Bg,KanbanHeader:()=>vg,KanbanTitle:()=>Hg});function Og(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function vg(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function Ug(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function Bg(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function Hg(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function Fg(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function Mg(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Eg(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function Lg(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function Wg(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function Jg(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function zg(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function qg(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var vi={};m(vi,{StarRating:()=>Gg,StarRatingEmpty:()=>Xg,StarRatingFull:()=>Kg,StarRatingHalf:()=>Yg});function Gg(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function Kg(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Yg(t,e){return`
    
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


    `}function Xg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var b={...hi,...mi,...yi,...bi,...xi,...Vi,...wi,...Di,...Ai,...gi,..._i,...Si,...Oi,...Ri,...ji,...$i,...Ci,...ki,...Ti,...vi,...Pi,...Ii,...Ni};var Mi={};m(Mi,{Card:()=>sh,Cards:()=>oh});var Fi={};m(Fi,{Media:()=>Ae,MediaImage:()=>za,MediaVideo:()=>Ja});var pr={};m(pr,{fixedLength:()=>fr,textCenter:()=>Ui});function fr(t,e=void 0,r=0){let n=t;if(s.isArray(t)){let o=t.length;o==0&&(t=""),o==1&&(t=t[0]),o>1&&(t=`(${t.length})`)}let i=p.getDataType(t);if(i=="Undefined"&&(t=""),i=="Jsonld"&&(t=t?.["@id"]),i=="Number"&&(t=p.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),i=="Date"&&(t=p.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let o="",l=Math.round(e/3),u=e-l-3;o+=t.slice(0,l),o+="...",o+=t.slice(-u),t=o}return e!=null&&(t=t.padEnd(e," ")),t}function Ui(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var Hi={};m(Hi,{toTextRecord:()=>Zg,toTextTable:()=>th});function Zg(t,e=80){let r=Qg(t,e),n=eh(t),i="";i+=La(r),i+=`
`,n.length>0?i+=n.map(o=>Wa(o,r)).join(""):i+=`(no records)
`}function Qg(t,e=80){let n=Bi(t).map(l=>(l||"").length),i=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(i,11)},{t:"Value",p:"value",w:e-Math.max(i,11)}]}function eh(t){let e=Bi(t),r=[];for(let n of e){let i={"@type":"PropertyValue",propertyID:n,value:p.getValues(t,n)};r.push(i)}return r}function th(t,e,r=!0,n=80){e=rh(t,e,r),t=nh(t,e,r);let i="";if(i+=La(e),i+=`
`,t.length>0){let o=t.map(l=>Wa(l,e));i+=o.join("")}else i+=Ui("(no records to display.)",n);return i}function rh(t,e,r=!0){e=s.toArray(e),(!e||e.length==0)&&(e=Bi(t).map(i=>({title:i,propertyID:i,width:i.length}))),(r=!0)&&(e.map(i=>i?.propertyID||i?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function nh(t,e,r=!0){if(t=s.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,i]of t.entries())i.position=i?.position??n;return t}function La(t){let e="",r=[];for(let i of t){let o=`${fr(i.title,i.width,i.rounding)}`;r.push(o)}e+=r.join(" "),e+=`
`;let n=[];for(let i of t){let o=`${"".padStart(i.width,"-")}`;n.push(o)}return e+=n.join(" "),e+=`
`,e}function Wa(t,e){let r="",n=[];for(let i of e){let o=s.getValues(t,i.propertyID),l=`${fr(o,i.width,i.rounding)}`;n.push(l)}return r+=n.join(" "),r+=`
`,r}function Bi(t){t=s.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=ih(e),e}function ih(t){t=s.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let i of e){if(r==i&&n!=i)return-1;if(r!=i&&n==i)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var gt={...pr,...Hi};function Ae(t,e){if(!s.getValue(t,"contentUrl"))return"";let n="";return s.record_type(t)=="VideoObject"?Ja(t,e):za(t,e)}function Ja(t,e){let r=s.getValue(t,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function za(t,e){let r=s.getValue(t,"contentUrl");return r?b.Modal(b.ImageModal(r)):""}function de({website:t,webpage:e,title:r,headContent:n,content:i,options:o}){e=new w.WebPage(e),t=new w.WebSite(t);let l={};l.title=r,l.title=l.title||s.getValue(e,"title"),l.title=l.title||s.getValue(e,"name"),l.title=l.title||s.getValue(t,"title"),l.title=l.title||s.getValue(t,"name"),l.headContent=n,l.breadcrumb=b.Breadcrumb({links:s.getValue(e,"breadcrumb")});let u=s.getValue(t,"about.name")??s.getValue(t,"name")??s.getValue(e,"about.name")??s.webpage(t,"name"),d=e.WPHeader.hasPart||[],c=e.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],c=Array.isArray(c)?c:[c],l.header=b.Header({brand:u,navItems:d}),l.footer=b.Footer({brand:u,navItems:c}),l.content=i,b.Webpage(l)}function qa({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:l,properties:u,headers:d,offset:c,limit:f,options:g}){return o=o??"",o+=D.Cards({url:n,records:l,offset:c,limit:f,nbOfColumns:3,options:g}),de({website:t,webpage:e,title:r,headContent:i,content:o,options:g})}function sh(t,e,r,n=!0){let i=w.format.getTitle1(t),o=w.format.getContent(t),l=s.getRecordUrl(t,e),u=n==!0?w.format.imageUrl(t):void 0;return b.Card({title:i,description:o,url:l,media:u,className:r})}function oh({url:t,records:e,offset:r,limit:n,orderBy:i,orderDirection:o,nbOfColumns:l,includePagination:u,options:d,layoutClasses:c,className:f,attrs:g}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let V=new w.ItemList(e);V=V.record,V.numberOfItems=V?.numberOfItems??V.itemListElement.length,V=gr({record:V,options:d}),V.itemListElement=V.itemListElement.filter(ge=>s.getValue(ge,"position")>=r&&s.getValue(ge,"position")<r+n);let I="";for(let ge of s.getValues(V,"itemListElement")){let $r=s.getValue(ge,"item");I+=ah({url:t,item:$r,options:d})}I=b.CardGrid({content:I,nbOfColumns:l});let W=b.Pagination({url:t,limit:n,offset:r,total:V.numberOfItems,options:d});return`

        <div class="${c} ${f}" ${g}>
        <div class="flex-1">
            ${I}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${W}
        </div>
        </div>

    `}function ah({url:t,item:e,options:r}){let n=s.getImageUrl(e),i=s.getImageName(e),o=s.getValues(e,"keywords");o=o.map(c=>`<a href="/?keywords=${c}">${c}</a>`);let l=b.Badges({text:o,variant:"secondary"}),u={title:s.getValue(e,"name"),url:s.getRecordUrl(e,r?.baseUrl),description:s.getValue(e,"description"),footer:l,image:s.getImageUrl(e),imageAlt:s.getImageName(e),media:Ae({record:e,options:r})};return b.Card(u)}var Ei={};m(Ei,{Input:()=>uh});function uh({record:t,propertyID:e,value:r}){return b.Input({value:r})}var Wi={};m(Wi,{Table:()=>dh,TableBody:()=>Ka,TableCell:()=>Xa,TableHeader:()=>Ga,TableRow:()=>Ya,getDataType:()=>Za,getHeadersFromProperties:()=>Li,getPropertiesFromRecords:()=>He});function dh(t,e,r,n,i,o){let l=t;r=r||He(l),n=n||Li(r);let u=[];return i==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),u=["thumbnail"].concat(u)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),u=["position"].concat(u)),b.Table(Ga(l,r,n,u)+Ka(l,r,e,u))}function Ga(t,e,r,n){return e=e||He(t),r=r||Li(e),n=n||[],e=e||He(t),b.TableHeader(r.map((i,o)=>{switch(n?.[o]){case"number":return b.TableColumnHeaderRight(i);default:return b.TableColumnHeader(i)}}).join(" "))}function Ka(t,e,r,n){e=e||He(t),n=n||[];let i=s.getValues(new w.ItemList(t),"itemListElement");return b.TableBody(i.map(o=>Ya(o,e,r,n)).join(" "))}function Ya(t,e,r,n){return e=e||He(t),n=n||[],b.TableRow(e.map((l,u)=>Xa(t,s.getValues(t,l),l,r,n,u)).join(" "),s.record_id(t),void 0,"kr-listitem")}function Xa(t,e,r,n,i,o){let l=e,u=r,d=t;if(l=s.isArray(l)&&l.length==0?"":l,l=s.isArray(l)&&l.length==1?l[0]:l,(u||"").endsWith("@type")){let c=p.url.getUrl(n||"","/"+l);return b.TableCellLink(c,l)}if((u||"").endsWith("@id")){let c=s.getRecordUrl(d,n);return b.TableCellLink(c,l)}switch(i?.[o]||Za(l)){case"array":return b.TableCellCenter(`(${l.length})`);case"text":return b.TableCellText(l);case"number":return b.TableCellNumber(l,2);case"link":return b.TableCellLink(l,l);case"thumbnail":return b.TableCell(Ae({record:l}));case"position":return b.TableCellNumber(l,0);case"object":return b.TableCellLink(s.getRecordUrl(l,n),s.record_id(l));default:return b.TableCellText(l)}}function He(t){let r=s.getValues(t,"itemListElement").map(i=>s.getValue(i,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(i=>i.startsWith("@")===!1),n=n.map(i=>"item."+i),n=["item.@type","item.@id"].concat(n),n}function Li(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function Za(t){return t=s.isArray(t)&&t.length==0?void 0:t,t=s.isArray(t)&&t.length==1?t[0]:t,t?p.isNumber(t)?"number":p.isUrl(t)?"link":p.isDate(t)?"date":p.isArray(t)?"array":p.isObject(t)?"object":"text":"text"}var Ji={};m(Ji,{Record:()=>ch});function ch(t,e,r,n="",i="",o=!1,l=0,u={}){t=s.removeCircularRefs(t),r=r||Object.keys(t),u.baseUrl=e||u?.baseUrl;let d={rows:[]},c=Qa({record:t,baseUrl:e,properties:r,className:n,attrs:i,expandAll:o,depth:0,options:u});return`

        <div class="space-y-4 ${n||""}" ${i||""}>
            <div class="flex-1">
                ${Ae({record:t,options:u})||""}
            </div>
            
            <div class="flex-1">
                ${c||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${b.JsonEditor({initialData:t,endpoint:e})}
              </details>
            </div>
        </div>

    `}function Qa({record:t,properties:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:l}){e=e||Object.keys(t);let u=e.filter(g=>g.startsWith("@")),d=e.filter(g=>!g.startsWith("@"));e=u.sort().concat(d.sort());let c={rows:[]};return b.Table(b.TableHeader(b.TableRow(b.TableCellRight("")+b.TableCellRight(D.DropdownMenu(s.getPotentialActions(t)))))+b.TableBody(e.map(g=>b.TableRow([b.TableCell(g+":"),b.TableCell(el({record:t,propertyID:g,className:r,attrs:n,expandAll:i,depth:o+1,options:l}))].join(" "))).join(" ")))}function fh({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:l}){let u=s.getValues(t,e),d=[];for(let c of u){let f=s.clone(t);f=s.setValue(f,e,c),d.push(el({record:f,propertyID:e,className:r,attrs:n,expandAll:i,depth:o+1,options:l}))}return`
        <ul class="space-y-4 ">
          ${d.map(c=>`
            <li>
              ${c}
            </li>
            `).join("")}

        </ul>
     
  
  `}function el({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:l}){let u=s.getValues(t,e);return s.isArray(u)&&u.length==1&&(u=u[0]),s.isArray(u)&&u.length==0?"":s.isArray(u)&&u.length>0?`
            <details class="space-y-4"> 
            
                <summary>${D.ValueArray(u,e,l?.baseUrl)}</summary>
      
                ${fh({record:t,propertyID:e,className:r,attrs:n,expandAll:i,depth:o,options:l})}
            
            </details>
      `:u?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${D.ValueThing(u,e,l?.baseUrl)}</summary>
      
            ${Qa({record:u,propertyID:void 0,className:r,attrs:n,expandAll:i,depth:o,options:l})}
        
        </details>
      `:u===void 0?"":D.Value(u,e,l?.baseUrl)}var zi={};m(zi,{DropdownMenu:()=>gh,Menu:()=>ph});function ph(t){return t=s.toArray(t),!t||t.length==0?"":b.DropdownMenu(b.DropdownMenuIcon(),t.map(e=>b.MenuItemPost(s.getImageUrl(e),s.getName(e),s.getUrl(e))).join(" "))}function gh(t){if(t=s.toArray(t),!t||t.length==0)return"";let e=t.map(n=>b.MenuItemPost(s.getImageUrl(n),s.getName(n),s.getUrl(n),s.ref(n))).join(" ");return b.DropdownMenu(b.DropdownMenuIcon(),e)}var qi={};m(qi,{Kanban:()=>hh,KanbanCard:()=>rl,KanbanColumn:()=>tl});function hh(t,e){let r=s.getItems(t);return b.Kanban(b.KanbanHeader(b.KanbanTitle("Awesome Kanban","Fuck yeah"))+b.KanbanBody(propertyValues.map(n=>tl(t,e,n)).join(" "))+b.KanbanFooter(""))}function tl(t,e,r){let n=s.getItems(t);return n=n.filter(i=>s.getValue(i,e)==r),b.KanbanColumn(b.KanbanColumnHeader(r)+b.KanbanColumnBody(n.map(i=>rl(i)).join(" "))+b.KanbanColumnFooter())}function rl(t){return b.KanbanCard(b.KanbanCardHeader("xx")+b.KanbanCardBody(D.Value(s.getName(t),"name"))+b.KanbanCardFooter(D.Value(s.getActionStatus(t),"actionStatus")))}var D={...Mi,...Ei,...Fi,...Ji,...Wi,...zi,...dn,...qi};function gr({record:t,options:e}){if(s.isArray(t))return t.map(o=>gr({record:o,options:e}));let r=s.record_type(t);if(!r)return t;let n=p.url.getUrl(e.baseUrl,"/execute"),i=s.ref(t);for(let o of Object.keys(t?.record||t))t=s.setValues(t,o,gr({record:s.getValues(t,o),options:e}));return r=="Action"&&s.isPotential(t)&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n})),r=="ItemList"&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:i,url:n})),r=="ListItem"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),r=="Thing"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),t}function nl({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:l,properties:u,headers:d,offset:c,limit:f,options:g}){return o=o??"",o+=D.Table({url:n,records:l,properties:u,headers:d,offset:c,limit:f,options:g}),de({website:t,webpage:e,title:r,headContent:i,content:o,options:g})}function il({website:t,webpage:e,title:r,url:n,headContent:i,content:o,record:l,properties:u,headers:d,options:c}){return o=o??"",o+=D.Record({url:n,record:l,options:c}),de({website:t,webpage:e,title:r,headContent:i,content:o,options:c})}var sl={blankPage:de,recordsPage:nl,recordPage:il,cardsPage:qa};var ol={blocks:D,...sl,components:ne,...ne};var Gi={};m(Gi,{getParsedRequest:()=>mh});function mh(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var al={shadcn:ol,express:Gi};var Se={};m(Se,{_getDate:()=>ht,compile:()=>mr,compileOverwrite:()=>ul,datapointsToRecord:()=>ts,dedupe:()=>Qi,eq:()=>yh,ge:()=>Zi,getConfidence:()=>E,getDataFeedItem:()=>wh,getDatapoint:()=>Ki,getExecutionID:()=>Vh,getModifiedDate:()=>L,gt:()=>Fe,isEqual:()=>mt,le:()=>Xi,lt:()=>Yi,merge:()=>xh,recordToDatapoints:()=>es,sameObject:()=>ll,sameObjectAndProperty:()=>ie,sort:()=>hr,toString:()=>_e});function _e(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return s.isArray(t)?s.format.toTextTable(t,e):s.format.toTextRecord(t,e)}function mt(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r,n;return r=s.getValue(t,"value"),n=s.getValue(e,"value"),!(s.record_id(r)!=s.record_id(n)||r!=n||(r=s.getValue(t,"instrument"),n=s.getValue(e,"instrument"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"agent"),n=s.getValue(e,"agent"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"execution"),n=s.getValue(e,"execution"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeed"),n=s.getValue(e,"datafeed"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeedItem"),n=s.getValue(e,"datafeedItem"),s.record_id(r)!=s.record_id(n)))}function ll(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"object"),n=s.getValue(e,"object");return s.record_id(r)==s.record_id(n)}function ie(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"propertyID"),n=s.getValue(e,"propertyID");return ll(t,e)&&r==n}function yh(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let i=L(t),o=L(e);return!(i==null&&o!=null||i!=null&&o==null||+i!=+o)}function Yi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<+o:!1}function Xi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<=+o:!0}function Fe(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>+o:!1}function Zi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>=+o:!0}function bh(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e))return Fe(t,e);let r=s.getValue(t,"object"),n=s.getValue(e,"object"),i=r?.["@id"]||"",o=n?.["@id"]||"",l=i.split("#")?.[1],u=o.split("#")?.[1];if(l!=u)return l<u?-1:1;if(i!=o)return r<n?-1:1;let d=s.getValue(t,"propertyID"),c=s.getValue(e,"propertyID");return d!=c?d<c?-1:1:0}function hr(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,bh(e,r))),t}function xh(t,e){if(mt(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function Qi(t){t=s.toArray(t);let e=[];for(let r of t)e.find(i=>mt(r,i))||e.push(r);return e}function E(t){t=t?.record??t;let e=s.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function Vh(t){t=t?.record??t;let e=s.getValue(t,"execution");return s.record_id(e)}function L(t){t=t?.record??t;let e;return e=e||ht(t,"dataFeedItem.dateDeleted"),e=e||ht(t,"dataFeedItem.dateModified"),e=e||ht(t,"dataFeedItem.dateCreated"),e=e||ht(t,"observationDate"),e}function ht(t,e){let r=s.getValue(t,e);return p.toDate(r)}function es(t,e,r){function n(i,o,l,u,d){let c=[];if(s.isArray(l)){for(let f of l)c=c.concat(n(i,o,f,u,d));return c}if(l?.["@id"]){o&&c.push(Ki(i,o,{"@id":l?.["@id"]},u,d));let f={"@id":l?.["@id"]};for(let g of Object.keys(l))g!="@id"&&(c=c.concat(n(f,g,l[g],u,d)));return c}return[Ki(i,o,l,u,d)]}return r=r??s.randomUUID(),n(void 0,void 0,t,e,r)}function ts(t){t=s.toArray(t),t=t.map(n=>n?.record??n);let e={};t=mr(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let i=s.getValue(n,"object"),o=s.record_id(i),l=s.getValue(n,"propertyID"),u=s.getValue(n,"value");e[o]=e?.[o]||{"@id":o},e[o]=s.addValues(e[o],l,u)}e=Object.keys(e).map(n=>e[n]);let r=new s.DB;return r.set(e),e=r.search(),e=s.simplify(e),e}function Ki(t,e,r,n={},i=s.randomUUID()){return{"@type":"Datapoint","@id":s.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:i,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function mr(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(i=>!ul(r,i)),e=e.slice(1);let n=t.map(i=>i?.["@id"]);e=e.filter(i=>n.includes(i?.["@id"]))}return t}function ul(t,e){if(t=t?.record??t,e=e?.record??e,s.getValue(t,"operation")=="AddAction"||ie(t,e)==!1||s.getValue(t,"valueGroupID")==s.getValue(e,"valueGroupID"))return!1;if(s.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&Fe(t,e)}return Fe(t,e)}function wh(t,e,r,n,i){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:i}}var C=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=Tt.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=s.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var ce=class extends C{constructor(e,r,n,i,o,l,u){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=i??this.dataFeed,this.dataFeedItem=o??this.dataFeedItem,this.agent=l??this.agent,this.instrument=u??this.instrument)}toString(){return _e(this.record)}set(e,r,n,i,o,l,u){this.c=e,this.d=r,this.execution=n,this.dataFeed=i,this.dataFeedItem=o,this.agent=l,this.instrument=u}get dataFeed(){return new C(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new C(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new C(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new C(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new C(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new C(e,"Person"),this.setValue("agent",e)}get instrument(){return new C(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new C(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new C(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new C(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var fe=class extends ce{constructor(e,r,n,i){super({},"DataPoint"),s.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),i&&(this.metadata=i)}toString(){return _e(this.record)}lt(e){return Yi(this.record,e?.record??e)}le(e){return Xi(this.record,e?.record??e)}gt(e){return Fe(this.record,e?.record??e)}ge(e){return Zi(this.record,e?.record??e)}get object(){return new C(this.getValue("object"))}set object(e){e=e?.record?e:new C(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var yr=class extends ce{constructor(e,r,n,i,o,l,u){super(e,r,n,i,o,l,u),this._dataPoints=[]}get dataPoints(){return hr(this._dataPoints)}set dataPoints(e){this._dataPoints=hr(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return _e(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return s.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,i){if(i=i??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let o=new fe(e,void 0,void 0,i);return this._dataPoints.push(o),o}if(e&&!r)return this.#e(void 0,void 0,e,i);if(e&&r){let o=new fe(e,r,n,i);return this._dataPoints.push(o),o}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return ts(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,i){let l=es(n,i).map(u=>new fe(u));this.dataPoints=this.dataPoints.concat(l)}#t(e){if(s.isArray(e))return e=Qi(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>mt(n,e))||this._dataPoints.push(e)}};var rs={};m(rs,{analyzeDataPoints:()=>_h,toString:()=>Ah});function Ah(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return s.isArray(t)?gt.toTextTable(t,e):gt.toTextRecord(t,e)}function _h(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(Sh(t,n));return r}function Sh(t,e){t=t.filter(i=>i.object["@id"]==e);let r=t.map(i=>i.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let i of r)console.log("rr",e,i),n=n.concat(Ih(t,e,i));return n}function Ih(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],i=t.filter(d=>d.object["@id"]==e&&d.propertyID==r),o=mr(i),l,u=[];for(let d of n){l=i.map(g=>s.getValue(g,d));let c={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:d,dataPointType:"ALL",N:l.length,uniqueN:[...new Set(l)].length};u.push(c),l=o.map(g=>s.getValue(g,d));let f={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:d,dataPointType:"ACTIVE",N:l.length,uniqueN:[...new Set(l)].length};u.push(f)}return u}var dl={...Se,DataPoint:fe,DataPointDB:yr,Metadata:ce,analysis:rs};function ns(t,e){if(s.isArray(t))return t.map(n=>ns(n,e));let r=s.record_type(t);if(r=="ReplaceAction")return $h(t,e);if(r=="UpdateAction")return kh(t,e);if(r=="MoveUpAction")return Th(t,e);if(r=="MoveDownAction")return Ph(t,e)}function $h(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n)i["@id"]=s.record_id(o)||s.record_id(i),e.set(i),s.addValue(t,"result",i);return t=s.setCompleted(t),t}function kh(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let l=e.get(o);o=o||{"@id":s.record_id(o)},o=s.patch(o,i),e.set(o),t=s.addValue(t,"result",o)}return t=s.setCompleted(t),t}function Th(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let l=e.get(o);l=helpers.things.ItemList.moveUp(l,i),e.set(l),t=s.addValue(t,"result",l)}return s.setCompleted(t),t}function Ph(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let l=e.get(o);l=helpers.things.ItemList.moveDown(l,i),e.set(l),t=s.addValue(t,"result",l)}return s.setCompleted(t),t}function br(t,e){if(!t)return t;if(s.isArray(t))return t.map(n=>br(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=Ch(t,e)),r=="ItemList"&&(t=Dh(t,e));for(let n of Object.keys(t))t[n]=br(t[n],e);return t}function Dh(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let i=0;i<r.length;i++){let o=s.getValue(r[i],"position");o>0&&(r[i]=jh(r[i],t,e)),o<n-1&&(r[i]=Rh(r[i],t,e)),r[i]=Oh(r[i],t,e),r[i]=vh(r[i],t,e)}return t}function Ch(t,e){let r;return s.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=se(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),s.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),s.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),t}function se(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=s.record_id(t);let i={"@type":"UpdateAction",name:n,object:r,targetCollection:s.ref(t),url:e};return t=s.addValue(t,"potentialAction",i),t}function jh(t,e,r,n){n=n||"Move up";let i={"@type":"MoveUpAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Rh(t,e,r,n){n=n||"Move down";let i={"@type":"MoveDownAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Oh(t,e,r,n){n=n||"Delete";let i={"@type":"DeleteAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function vh(t,e,r,n){n=n||"Duplicate";let i={"@type":"DuplicateAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}var cl={add:br,execute:ns};var fl={...s,jsonldBase:s,...w,things:w,rdf:fi,...oe,recordIDHelpers:oe,dataHelpers:p,...Jt,transformHelpers:Jt,records:_,disk:re,datapointHelpers:dl,format:gt,html:al,potentialAction:cl},is=fl,Ie=fl;var Vr={};m(Vr,{ApiDB:()=>ss});var xr={};m(xr,{CacheDB:()=>yt});var yt=class{constructor(e){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(e))?void 0:Number(e)}getAll(e=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,e));return r}get(e,r=!0){if(s.isArray(e))return e.map(l=>this.get(l));if(e=s.toRecordID(e),!this._cache?.[e]||!this._cache?.[e]?.modifiedDate)return;let i=new Date-this._cache[e].modifiedDate;if(this._expiryDuration===void 0&&i>this._expiryDuration){this._cache[e]=void 0;return}let o=this._cache[e]?.value;return r===!0&&(o=s.expand(this.getAll(!1),o)),o=s.simplify(o),o}set(e){let r=s.flatten(e);for(let n of r){let i=s.record_id(n);this._cache[i]=this._cache?.[i]||{},this._cache[i].value=s.isRef(n)&&this._cache[i]?.value||n,this._cache[i].modifiedDate=new Date}}post(e){return this.set(e)}getSearch(e){if(e=e||"all",!this._searchCache?.[e])return[];if(!this._searchCache?.[e]?.modifiedDate)return;let n=new Date-this._searchCache[e].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[e]=void 0;return}let i=this._searchCache[e]?.value;return i=s.expand(this.getAll(!1),i),i}setSearch(e,r){r=s.toArray(r),this.set(r),this._searchCache[e]=this._searchCache?.[e]||{},this._searchCache[e].value=r,this._searchCache[e].records=s.flatten(r),this._searchCache[e].modifiedDate=new Date}};var ss=class{constructor(e,r,n){this._base_url=e,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new yt}async get(e){e=Ie.toRecordID(e);let r=this._cacheDB.get(e);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,i=Ie.dataHelpers.url.getUrl(this._base_url,n,{record_id:e}),l=await(await fetch(i)).json();return this._cacheDB.set(l),console.log("record retrieved from db"),l}async search(e,r,n,i,o){let l={...e};r&&(l.offset=r),n&&(l.limit=n),i&&(l.orderBy=i),o&&(l.orderDirection=o),console.log("pp",l);let u="/"+this._databaseID+"/"+this._tenantID,d=Ie.dataHelpers.url.getUrl(this._base_url,u,l);console.log("url",d);let f=await(await fetch(d)).json(),g=Ie.getResult(f);return this._cacheDB.setSearch(l,g),console.log("record retrieved from db"),g}async post(e){let n=Ie.dataHelpers.url.getUrl(this._base_url,"/"),o=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),l=Ie.getResults(o);return this._cache.set(l),l.length==1?l[0]:l}};var Ar={};m(Ar,{ApiClient:()=>wr,default:()=>Bh});var wr=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await os(this.headers,this.baseUrl,e,r)}async post(e,r){return await pl(this.headers,this.baseUrl,e,r)}async patch(e,r){return await Hh(this.headers,this.baseUrl,e,r)}async delete(e,r){return await as(this.headers,this.baseUrl,e,r)}async test(e){return await Fh(this.headers,this.baseUrl,e)}},Bh={ApiClient:wr};async function os(t,e,r,n){let i=new w.Action;i.name="API Get",i.instrument=new w.WebAPI(e),i.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=p.url.getUrl(e,r,n),u={headers:{...t||{},...{}},method:"GET"},d=await fetch(o,u);if(d.status>=300)return i.setFailed(d.statusText),i;let c=await d.json();return i.setCompleted(c),i}catch(o){return i.setFailed(String(o)),i}}async function pl(t,e,r,n){let i=new w.Action;i.name="API Post",i.instrument=new w.WebAPI(e);try{let o=p.url.getUrl(e,r,{}),u={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},d=await fetch(o,u);if(d.status>=300)return console.log(o),console.log(d.statusText),i.setFailed(d.statusText),i;let c=await d.json();return i.setCompleted(c),i}catch(o){return console.log(url),console.log(o),i.setFailed(String(o)),i}}async function Hh(t,e,r,n){let i=new w.Action;i.name="API Post",i.instrument=new w.WebAPI(e);try{let o=p.url.getUrl(e,r,{}),u={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},d=await fetch(o,u);if(d.status>=300)return i.setFailed(d.statusText),i;let c=await d.json();return i.setCompleted(c),i}catch(o){return i.setFailed(String(o)),i}}async function as(t,e,r,n){let i=new w.Action;i.name="API Get",i.instrument=new w.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=p.url.getUrl(e,r,n),u={headers:{...t||{},...{}},method:"DELETE"},d=await fetch(o,u);if(d.status>=300)return i.setFailed(d.statusText),i;let c=await d.json();return i.setCompleted(c),i}catch(o){return i.setFailed(String(o)),i}}async function Fh(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},i=new w.Action,o={filter:{"@id":n["@id"]}},l;return l=await as(t,e,r,o),i.hasPart=i.hasPart.concat(l.record),(await l).isFailed?(i.setFailed("Error step1 delete record"),i.record):(l=await pl(t,e,r,n),i.hasPart=i.hasPart.concat(l.record),(await l).isFailed?(i.setFailed("Error step2 create record"),i.record):(l=await os(t,e,r,o),i.hasPart=i.hasPart.concat(l.record),(await l).isFailed?(i.setFailed("Error step3 get record"),i.record):l.result[0]?.["@id"]!=n?.["@id"]?(i.setFailed("Error step3 got wrong record"),i.record):(l=await as(t,e,r,o),i.hasPart=i.hasPart.concat(l.record),(await l).isFailed?(i.setFailed("Error step4 delete record"),i.record):(l=await os(t,e,r,o),i.hasPart=i.hasPart.concat(l.record),(await l).isFailed?(i.setFailed("Error step5 get record"),i):l.result?.name==n?.name?(i.setFailed("Error step5 record still exist"),i):(i.setCompleted(),i.record)))))}var Sr={};m(Sr,{DiskDB:()=>ls});var ls=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new w.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(s.isArray(e)){for(let n of e){let i=await this._set(n);r.addPart(i)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),i=s.record_id(e),o=_r(i),l=await re.save(this.path,o,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new w.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new s.DB;n.set(e);for(let i of n){let o=new w.Action("Saving record "+s.record_id(i));try{let l=JSON.stringify(i,null,4),u=s.record_id(i),d=_r(u),c=await re.save(this.path,d,l);o.setCompleted(i),r.addPart(o)}catch(l){o.setFailed(String(l)),r.addPart(o)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new w.Action("Get record from db");if(r.object=s.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(s.isArray(e)){let o=[];for(let l of e){let u=await this._get(l);r.addPart(u),o=o.concat(s.toArray(u.result))}return r.setCompleted(o),r.record}let n=_r(e),i=await re.load(this.path,n);if(!i||i=="")return r.setFailed("No records found"),r.record;try{let o=JSON.parse(i);return o=s.simplify(o),r.setCompleted(o),r.record}catch(o){return r.setFailed(o),r.record}}async _getNested(e){let r=new w.Action("Get nested record");r.object=s.ref(e);let n=new s.DatabaseHelper({"@id":e});for(;n.isActive;){let i=n.next,o=await this._get(i);r.addPart(o),o?.result?s.toArray(o.result).map(l=>n.add(l||s.ref(l))):n.add(s.ref(i))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new w.Action("Get all records"),n;try{n=await re.dir.list(this.path),n=n||[],n=s.toArray(n)}catch(l){return r.setFailed(l),r.record}if(n.length==0)return r.setCompleted([]),r.record;let i=n.map(l=>Mh(l)),o=await this.get(i,e);return r.addPart(o),r.setCompleted(o.result),r.record}async exists(e){let r=await this.get(e,!1);return s.isCompleted(r)}async delete(e){let r=new w.Action("Delete record");if(r.object=s.ref(e),!e)return r.setCompleted(),r.record;if(s.isArray(e)){for(let n of e){let i=await this.delete(n);r.addPart(i)}return r.setCompleted(),r.record}e=s.toRecord_id(e);try{let n=_r(e),i=await re.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new w.Action("Purge database");try{let r=await re.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function _r(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function Mh(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}var us={apiDB:Vr,...Vr,apiClient:Ar,...Ar,cacheDB:xr,...xr,diskDB:Sr,...Sr};var Ir={...is,helpers:is,...us,tools:us},Eh=Ir,Lh=Ir,Wh=Ir;0&&(module.exports={_h,h,helpers,records,transformHelpers});
//# sourceMappingURL=index.cjs.map
