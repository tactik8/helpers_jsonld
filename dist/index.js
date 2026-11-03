var pl=Object.defineProperty;var m=(t,e)=>{for(var r in e)pl(t,r,{get:e[r],enumerable:!0})};var $e={get:Ee,set:Vt,flatten:gl,expand:hl};function Ee(t,e){if(!e||typeof e!="string")return;let r=ds(e),n=t;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function Vt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=ds(e);if(n.length==0)return r;let s=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let o=t;for(let l=0;l<n.length-1;l++){let u=n[l],d=n[l+1],c=!isNaN(d);c==!0&&(o[u]=Array.isArray(o[u])?o[u]:[o[u]],o=o?.[u]),c==!1&&(o[u]=o?.[u]||{},o=Array.isArray(o?.[u])?o?.[u][0]:o?.[u])}return o[n[n.length-1]]=r,t}function gl(t){function e(s,o){let l=[];return Array.isArray(o)?(s=s||"",o.map((d,c)=>e(`${s}[${String(c)}]`,d)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(d=>e(`${s}${d}`,o[d])).flat()):[{propertyID:s,value:o}]}let r=e("",t),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function hl(t){let e={};return Object.keys(t).forEach(r=>Vt(e,r,t?.[r])),e}function ds(t){let e=[],r="",n=["[","]","."];for(let s of t)if(n.includes(s)){r!=""&&e.push(r),r="";continue}else r=r+s;return e.push(r),e=e.filter(s=>s!=""),e=e.map(s=>isNaN(Number(s))?s:Number(s)),e}var Pr={};m(Pr,{eq:()=>wl,ge:()=>$l,getDiff:()=>fs,getHash:()=>cs,getHashNested:()=>kl,gt:()=>Il,isEqual:()=>Al,isSame:()=>Vl,le:()=>Sl,lt:()=>_l});var wt={};m(wt,{expand:()=>yl,flatten:()=>bl,getChildren:()=>xl,handleRelationships:()=>kr,simplify:()=>Tr,strip:()=>$r});function yl(t,e,r=!0){let n=i._storeToMap(t),s=new Map;function o(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(g=>o(g));let u=i.record_id(l);if(u&&s.has(u)){let g=s.get(u);return r?g:i.ref?i.ref(g):{"@id":u}}let c=(u&&n instanceof Map?n.get(u):null)||l,f=Array.isArray(c)?[...c]:{...c};u&&s.set(u,f);for(let g of Object.keys(f))g==="previousItem"||g==="nextItem"||(f[g]=o(f[g]));return f}return typeof e=="string"&&(e={"@id":e}),o(e)}function $r(t){function e(r,n,s){if(Array.isArray(r))return r.map(o=>e(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let l of Object.keys(r).sort())o[l]=e(r?.[l],n,s+1);return o}}return r}return e(t,0,0)}function bl(t){function e(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let l of n)o=o.concat(e(l));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let l=n[o];l=i.toArray(l),n[o]=[];for(let u of l)u?.["@id"]?n[o].push({"@id":u?.["@id"]}):n[o].push(u),s=s.concat(e(u))}return s=[n].concat(s),s}t=i.clone(t),t=i.setTempID(t),t=kr(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function kr(t){if(i.isArray(t))return t.map(r=>kr(r));let e=t;if(i.record_type(e)=="Product"){let r=i.getValues(e,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(e))),e=i.setValues(e,"offers",r);let n=i.getValues(e,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}if(i.record_type(e)=="Offer"){let r=i.getValues(e,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(e))),e=i.setValues(e,"itemOffered",r);let n=i.getValues(e,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}return e}function Tr(t){function e(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>e(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let l of Object.keys(n)){let u=e(n?.[l],s);l=="itemListElement"&&(u=i.toArray(u)),u!==void 0&&(o[l]=u)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return t=i.clone(t),e(t)}function xl(t){function e(r,n){if(i.isArray(r)){let o=[];for(let l of r){let u=e(l,n);o=o.concat(u)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(e(r[o],n+1));return s=s.filter(o=>o),s}return e(t,0)}function Vl(t,e){if(t=i.record_id(t)??t,e=i.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function wl(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=i.clean(t),e=i.clean(e),t=i.strip(t),e=i.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function Al(t,e){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((l,u)=>(l[u]=o[u],l),{}):o;try{t=i.JSON_stringify(t)}catch{}try{e=i.JSON_stringify(e)}catch{}return t==e}function _l(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function Sl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function Il(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function $l(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function cs(t,e=!1){t=Tr(t),e==!1&&(t=$r(t));let r=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((d,c)=>({...d,[c]:r(u[c])}),{}):Array.isArray(u)?u.map(r):u,n=JSON.stringify(r(t)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,l=n.length;for(;l;)o=o*33^n.charCodeAt(--l);return(o>>>0).toString(16)}function kl(t){return cs(t,!0)}function fs(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let s=fs(t[n],e[n]);s!==null&&(r[n]=s)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var Dr={};m(Dr,{evaluate:()=>Nr});function Nr(t,e){let r=[];for(let s of Object.keys(e)){let o=s,l=e?.[s];if(l=i.toArray(l),o=="$and")return l.every(u=>Nr(t,u));if(o=="$or")return l.some(u=>Nr(t,u));for(let u of l){let d=Pl(t,o,u);r.push(d)}}return r.every(s=>Tl(s.r,s.p,s.o,s.v))}function Tl(t,e,r,n){try{let s=$e.get(t,e);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Pl(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var an={};m(an,{assignId:()=>cu,getGenericRecordID:()=>du,normalizeRecordId:()=>lu,replaceIds:()=>ks,setTempID:()=>$s});var oe={};m(oe,{default:()=>su,get:()=>Q,getGenericRecordID:()=>Ze,getStandardID:()=>Tt,recordIdHelpers:()=>kt,set:()=>It,validate:()=>Xe});var jr={};m(jr,{clean:()=>Nl,isArray:()=>he,isNotArray:()=>Cr,isValid:()=>Dl,toArray:()=>At});function Nl(t){return At(t)}function Dl(t){return he(t)}function he(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function Cr(t){return!he(t)}function At(t){return t==null?[]:(t=he(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var vr={};m(vr,{clean:()=>Rr,format:()=>jl,formatDate:()=>ps,isDate:()=>Z,isNotDate:()=>Or,isValid:()=>Cl,toDate:()=>ke});function Rr(t,e=void 0){return ke(t)||e}function Cl(t){return Z(t)}function jl(t,e=!1){return ps(t,e)}function Z(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Or(t){return!Z(t)}function ke(t){if(t===void 0)return;if(Z(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=Z(t)?t:void 0,t}function ps(t,e=!1){if(console.log("vv",t,ke(t)),t=ke(t),Z(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),l=`${n}-${s}-${o}`;if(e==!0){let u=String(r.getHours()).padStart(2,0),d=String(r.getMinutes()).padStart(2,0),c=String(r.getSeconds()).padStart(2,0);l=l+` ${u}:${d}:${c}`}return l}var Br={};m(Br,{clean:()=>Rl,isNotNull:()=>Ur,isNull:()=>Pe,isValid:()=>Ol});function Rl(t,e=void 0){}function Ol(t){return Pe(t)}function Ur(t){return!Pe(t)}function Pe(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||Te.array.isValid(t)?t.length==0:t instanceof Date?Te.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Mr={};m(Mr,{clean:()=>Hr,format:()=>Ul,formatDecimals:()=>gs,isNotNumber:()=>Fr,isNumber:()=>Le,isValid:()=>vl,toNumber:()=>_t});function Hr(t,e=void 0){return _t(t)??e}function vl(t){return Le(t)}function Ul(t,e){return gs(t,e)}function gs(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function Le(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function Fr(t){return!Le(t)}function _t(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Lr={};m(Lr,{clean:()=>Bl,cleanObject:()=>We,isNotObject:()=>Er,isObject:()=>Je,isValid:()=>Hl});function Bl(t,e=void 0){return We(t)||e}function Hl(t){return Je(t)}function Je(t){return typeof t!="object"||t===null||Array.isArray(t)||t===void 0||p.isString(t)==!0||p.isDate(t)==!0||p.isNumber(t)==!0||p.isArray(t)==!0?!1:Object.keys(t).length>0}function Er(t){return!Je(t)}function We(t){if(p.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],We(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(We(x));e=e.filter(r=>p.isNotNull(r))}}if(p.object.isValid(t))for(let e of Object.keys(t))t[e]=We(t[e]),Te.isNull(t[e])&&delete t[e];return Te.isNotNull(t)?t:void 0}var zr={};m(zr,{clean:()=>Fl,cleanString:()=>hs,isNotString:()=>Wr,isString:()=>Ne,isValid:()=>Ml,maxLengthEnd:()=>Ll,maxLengthMiddle:()=>El,toString:()=>Jr});function Fl(t,e=""){return hs(t)||e}function Ml(t){return Ne(t)&&t.trim().length>=0}function El(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),s=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Ll(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function Ne(t){return typeof t=="string"||t instanceof String}function Wr(t){return!Ne(t)}function Jr(t){return t==null?"":String(t)}function hs(t){return Ne(t)?t.trim():void 0}var Yr={};m(Yr,{clean:()=>ms,cleanUrl:()=>bs,getDomain:()=>Wl,getParams:()=>Jl,getPath:()=>Vs,getUrl:()=>ys,isNotUrl:()=>Kr,isUrl:()=>ze,isValid:()=>qr,setParams:()=>xs,setPath:()=>ws,toUrl:()=>Gr});function qr(t){return ze(t)}function ms(t,e=void 0){return bs(t)??e}function Gr(t,e,r,n=void 0){return ys(t,e,r)||n}function ys(t,e,r){let n=ws(t,e);return r&&(n=xs(n,r)),n}function ze(t){return t=ms(t),!!t}function Kr(t){return!ze(t)}function bs(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:l=[]}=e;try{let u=new URL(t);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),n&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let d=u.pathname;if(d=d.replace(/\/+/g,"/"),o&&(d=d.toLowerCase()),s&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),u.pathname=d,r){let c=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],f=Array.from(u.searchParams.keys());for(let g of f){let V=c.some(W=>g.toLowerCase().startsWith(W)),I=l.includes(g);V&&!I&&u.searchParams.delete(g)}}return u.searchParams.sort(),u.toString()}catch{return}}function Wl(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function Jl(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function xs(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function Vs(t){try{return new URL(t).pathname}catch{return}}function ws(t,e){e=e??"";let r=[],n=Vs(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let o of e)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,t).toString()}catch(o){console.log(o,s,t);return}}var Qr={};m(Qr,{clean:()=>zl,format:()=>Gl,isDuration:()=>De,isNotDuration:()=>Xr,isValid:()=>ql,toDuration:()=>Zr});function zl(t,e=void 0){return toDate(t)||e}function ql(t){return De(t)}function Gl(t){return Yl(t)}function De(t){return Kl(t)}function Xr(t){return!De(t)}function Zr(t){return t}function Kl(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function Yl(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,s,o,l,u,d,c,f]=r.map(I=>parseInt(I,10)||0),g=[d,c,f].map(I=>String(I).padStart(2,"0")).join(":"),V=[];return s&&V.push(`${s}y`),o&&V.push(`${o}m`),l&&V.push(`${l}w`),u&&V.push(`${u}d`),V.length>0?`${V.join(" ")} ${g}`:g}var tn={};m(tn,{clean:()=>Xl,format:()=>Ql,isBoolean:()=>qe,isNotBoolean:()=>en,isValid:()=>Zl,toBoolean:()=>Ge,toString:()=>eu});function Xl(t){return Ge(t)}function Zl(t){return qe(t)}function Ql(t){return Ge(t)}function eu(t){return String(t)}function qe(t){return typeof t=="boolean"}function en(t){return typeof t!="boolean"}function Ge(t){if(qe(t))return t;if(typeof t=="string"){if(t.toLowerCase()=="true")return!0;if(t.toLowerCase()=="false")return!1}if(!isNaN(t)){if(t==0)return!1;if(valeu==1)return!0}}var sn={};m(sn,{clean:()=>tu,format:()=>nu,fromJson:()=>nn,isJson:()=>Ke,isNotJson:()=>rn,isValid:()=>ru,toJson:()=>Ye});function tu(t){return Ye(t)}function ru(t){return Ke(t)}function nu(t){return Ye(t)}function Ke(t){if(!t)return!1;if(typeof t=="string"){try{if(JSON.parse(t))return!0}catch{}return!1}}function rn(t){return!Ke(t)}function Ye(t){let e=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(t,e(),4)}catch{}}function nn(t){try{return JSON.parse(t)}catch{}}var p={isNull:Pe,isNotNull:Ur,isArray:he,isNotArray:Cr,toArray:At,isDate:Z,isNotDate:Or,toDate:ke,isDuration:De,isNotDuration:Xr,toDuration:Zr,isObject:Je,isNotObject:Er,isNumber:Le,isNotNumber:Fr,toNumber:_t,isString:Ne,isNotString:Wr,toString:Jr,isUrl:ze,isNotUrl:Kr,toUrl:Gr,isBoolean:qe,isNotBoolean:en,toBoolean:Ge,isJson:Ke,isNotJson:rn,toJson:Ye,fromJson:nn,array:jr,boolean:tn,date:vr,duration:Qr,json:sn,null:Br,number:Mr,object:Lr,string:zr,url:Yr,getDataType:As,getType:As,getJsonSchema:iu},Te=p;function As(t){if(Pe(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(he(t))return"Array";if(Z(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(qr(t))return"URL";if(Rr(t))return"DateTime";if(De(t))return"Duration";if(Hr(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function iu(t){function e(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),p.isString(r))return s.type="string",s;if(p.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=e(r[o],n+1);return s}if(p.isNumber(r))return s.type="number",s;if(p.isArray(r))return s.type="array",s.items=e(r?.[0],n+1),s}return e(t,0)}var nm=globalThis.crypto.randomUUID,kt={get:Q,set:It,validate:Xe,getGenericRecordID:Ze,getStandardID:Tt},su=kt,St={website:"domain",webpage:"url",offer:"url",brand:"domain"};function Q(t,e){if(!t||!t?.["@type"])return;let r=_s(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=St?.[n];if(s=="url")return Ss(n,$t(t));if(s=="domain")return Is(n,$t(t))}return Ze(e)}function Tt(t,e){if(!t||!t?.["@type"])return;let r=_s(t);for(let n of r){let s=St?.[n];if(s=="url")return Ss(n,$t(t));if(s=="domain")return Is(n,$t(t))}}function It(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>It(r,e));if(t?.["@type"]||t?.["@id"]){Xe(t)==!1&&(t["@id"]=Q(t,e));for(let r of Object.keys(t))t[r]=It(t?.[r],e)}return t}function Xe(t,e){let r=t?.["@id"];return r?ou(t)?getStandardizedRecordId(t,e)==r:on(t?.["@id"],e)==r:!1}function ou(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(St?.[r])return St?.[r]}function _s(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function $t(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function Ze(t){return t=on(t),t?(t.endsWith("/")||(t=t+"/"),on(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Ss(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>p.url.clean(s)),e=e.filter(s=>s);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function Is(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>au(s)),e=e.map(s=>"https://"+s),e=e.filter(s=>s);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function au(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function on(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!t.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function lu(t,e){t=$s(t);let r=uu(t,e);return ks(t,r)}function uu(t,e){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let u=[];for(let d of s)u=u.concat(r(d));return u}if(i.isObject(s)==!1)return[];let l=[{replacee:i.record_id(s),replacer:Q(s,o)}];for(let u of Object.keys(s))l=l.concat(r(s[u],o));return l}let n=r(t,e);return n=n.filter(s=>s),n}function $s(t){if(Array.isArray(t))return t.map(e=>i.assignId(e));if(i.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+i.randomUUID();for(let e of Object.keys(t))t[e]=i.assignId(t[e]);return t}function du(t){return Ze(t)}function cu(t,e=[]){if(i.isArray(t))return t.map(r=>i.assignId(r,e));if(i.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+i.randomUUID(),t[r]=i.assignId(t[r],e);return t}function ks(t,e){function r(n,s){if(Array.isArray(n))return n.map(u=>i.replaceIds(u,s));if(!n?.["@id"])return n;let o=n?.["@id"],l=s.get(o);l&&(n["@id"]=l);for(let u of Object.keys(n))n[u]=i.replaceIds(n?.[u],s);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(s=>n.set(s.replacee,s.replacer)),e=n}return r(t,e)}var dn={};m(dn,{DB:()=>un,_storeToMap:()=>et,_storeToOriginal:()=>mu,getRecord:()=>Qe,getRecords:()=>Ce,patchRecord:()=>Us,postRecord:()=>vs});var ln={};m(ln,{Value:()=>fu,ValueArray:()=>Ns,ValueDateTime:()=>Cs,ValueDuration:()=>pu,ValueMonetaryAmount:()=>gu,ValueNumber:()=>js,ValueRecordId:()=>Ts,ValueRecordType:()=>Ps,ValueText:()=>Rs,ValueThing:()=>Os,ValueUrl:()=>Ds});function fu(t,e,r){return!t&&t!==0?"":i.isArray(t)?Ns(t,e,r):e=="@type"?Ps(t,e,r):e=="@id"?Ts(t,e,r):i.isObject(t)?Os(t,e,r):i.isNumber(t)?js(t,e,r):i.isDate(t)?Cs(t,e,r):p.isUrl(t)?Ds(t,e,r):Rs(t,e,r)}function Ts(t,e,r){let n=i.getRecordUrl({"@id":t},r),s=`<a title="${t}" href="${n}">${t}</a>`;return ee(s,e)}function Ps(t,e,r){let n=p.url.getUrl(r,t),s=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return ee(s,e)}function Ns(t,e,r){let n=t.length>0?`(${t.length})`:"";return ee(n,e)}function Ds(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return ee(n,e)}function Cs(t,e,r){t=i.toDate(t);let n=p.date.format(t);return ee(n,e)}function pu(t,e,r){return p.duration.format(pv.value)}function js(t,e,r){let n=e=="position"?0:2;return t=i.toNumber(t),t=p.number.format(t,n),ee(t,e)}function Rs(t,e,r){return ee(t,e)}function Os(t,e,r){let n=i.getRecordUrl(t,r),s=i.getName(t)||i.record_id(t);i.record_type(t)=="ListItem"&&(s=`ListItem ${i.getPosition(t)} - ${i.getValue(t,"item.name")||i.getValue(t,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return ee(o,e)}function gu(t,e,r){let n=p.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=p.number.format(n,2),o=i.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+s,o=="USD"&&(pv.htmlValue=o+" $"+s),o=="CAD"&&(pv.htmlValue=o+" $"+s),o=="EUR"&&(pv.htmlValue=o+" "+s+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",ee(pv,e)}function ee(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var un=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,Qe(this._store,e,r)}getAll(e=!0){return Ce(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||i.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return Ce(this._store,e,r)}set(e){let r=i.flatten(e),n=r.map(s=>Qe(this._store,i.record_id(s),!1));for(let s of r)this._store=vs(this._store,s);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=i.flatten(e),s=n.map(o=>Qe(this._store,i.record_id(o),!1));for(let o of n)this._store=Us(this._store,o,r);return this._broadcastIfChanged(s,n),e}delete(e){let r=[this.get(e)];this._store=i.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,s){let o=this.get(e);return i.getValue(o,r,n,s)}getValues(e,r,n){let s=this.get(e);return i.getValues(s,r,n)}setValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return Ce(this._store)}getRecords(e=!1){return Ce(this._store,void 0,!1)}get record_ids(){return hu(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=i.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=i.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let s=this.get(e);return!s||i.isRef(s)?n:s}updateRefs(e,r={},n={}){if(!e)return e;if(i.isArray(e))return e.map(s=>this.updateRefs(s,r,n));if(i.isObject(e)){if(i.isRef(e)){if(r?.[i.record_id(e)])return r[i.record_id(e)];e=this.get(e,!0)||e,r[i.record_id(e)]=e}else{if(n?.[i.record_id(e)])return e;n[i.record_id(e)]=e}for(let s of Object.keys(e))["previousItem","nextItem"].includes(s)||(e[s]=this.updateRefs(e[s],r,n));return e}return e}execute(e){let r=i.toArray(e);r=r.map(o=>this.updateRefs(o));let n=new i.DB;n.set(r);let s=[];for(let o of r){o=n.get(o),o=i.execute(o),s.push(o);let l=i.getValues(o,"hasPart");for(let u of l){let d=i.list.toItemList(u);i.list.getItems(d).forEach(f=>n.set(i.getResults(f)))}n.set(i.getResults(o))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(s=>s!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let s of r){let o=e.find(l=>i.record_id(l)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(e){e=i.toArray(e),e=i.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(e,r){try{return e(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(e,r){return i.clean(e,r)}static flatten(e){return i.flatten(e)}static getValue(e,r,n,s){return i.getValue(e,r,n,s)}static getValues(e,r,n){return i.getValues(e,r,n)}static setValue(e,r,n,s){return i.setValue(e,r,n,s)}static setValues(e,r,n){return i.setValues(e,r,n)}static addValue(e,r,n){return i.addValue(e,r,n)}static addValues(e,r,n){return i.addValues(e,r,n)}static strip(e){return i.strip(e)}static get dot(){return $e}static ref(e){return i.ref(e)}static simplify(e){return i.simplify(e)}static isJsonld(e){return i.isJsonld(e)}static isValid(e){return i.isValid(e)}static isArray(e){return i.isArray(e)}static setAdditionalProperty(e,r,n,s){return i.setAdditionalProperty(e,r,n,s)}static getAdditionalProperty(e,r){return i.getAdditionalProperty(e,r)}};function vs(t,e){if(!e)return;e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let r=et(t);for(let n of e)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return t=i._storeToOriginal(r),t}function Us(t,e,r=!0){e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let n=et(t);for(let s of e){let o=n.get(i.record_id(s));s=i.patch(o,s),n.set(i.record_id(s),s)}return t=i._storeToOriginal(n),t}function Qe(t,e,r=!0){if(i.isArray(e))return e.map(l=>Qe(t,l,r));let n=i._utilGetId(e),s=et(t),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function Ce(t,e,r=!0){let n=et(t),s=Array.from(n.values());return e&&(s=s.filter(o=>i.evaluate(o,e))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function hu(t){return Ce(t).map(n=>i.record_id(n))}function et(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=i.toArray(t),t=t.filter(r=>i.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=i.record_id(r);n&&(e.has(n)&&(r=i.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function mu(t){return t=Array.from(t.values()),t}var fn={};m(fn,{JSON_parse:()=>xu,JSON_stringify:()=>Es,clean:()=>Hs,clone:()=>Ls,contractAtValue:()=>Pt,expandAtValue:()=>Vu,getRecordUrl:()=>_u,isJsonld:()=>Bs,isValid:()=>yu,merge:()=>wu,patch:()=>Au,removeCircularRefs:()=>Fs,sortedReplacer:()=>Ms,stringify:()=>bu});function yu(t){return Bs(t)}function Bs(t){return t?.["@type"]||t?.["@id"]}function Hs(t,e){if(Array.isArray(t)&&t.length>1)return t.map(s=>Hs(s,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Ls(t)}catch{}t=setTempID(t);let r=i.flatten(t);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Xe(s)==!0)continue;let o=Tt(s,e);if(o&&s?.["@id"]!=o){let l={replacer:o,replacee:s?.["@id"]};n.push(l)}if(!o&&s?.["@id"].startsWith("_:")){let l={replacer:i.getGenericRecordID(e),replacee:s?.["@id"]};n.push(l)}}return t=i.replaceIds(t,n),t}function Fs(t){return cn(t,new Set)}function cn(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(i.isArray(t))return t.map(n=>cn(n,e));if(!i.isObject(t))return t;let r=i.record_id(t);if(e.has(r))return i.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=cn(t[n],e);return t}function Ms(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function Es(t){return t=Fs(t),JSON.stringify(t,Ms,4)}function bu(t){return Es(t)}function xu(t){return JSON.parse(t)}function Vu(t){function e(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,e(s,!0));if(i.isArray(r))return r.map(o=>e(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,e(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function Pt(t){let e=i.getAtValue(t);if(e&&e.length>0)return Pt(i.getAtValue(t));if(i.isArray(t))return t.map(r=>Pt(r));if(i.isJsonld(t)){for(let r of Object.keys(t?.record||t))i.setValues(t,r,Pt(i.getValues(t,r)));return t}return t}function Ls(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function wu(t,e,r=!0){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let s={"@id":t?.["@id"]||e?.["@id"]};for(let o of n){if(o=="@id")continue;let l=i.toArray(t?.[o]||void 0),u=i.toArray(e?.[o]||void 0),d=l.concat(u);r==!0&&(d=i.dedupe(d)),s[o]=d}return s}function Au(t,e){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of i.keys(e)){let n=i.toArray(e?.[r]);t=i.setValues(t,r,n)}return t}function _u(t,e){e=e?.baseUrl??e;try{return p.url.getUrl(e,encodeURIComponent(i.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var mn={};m(mn,{ID:()=>Mu,Id:()=>Wu,Type:()=>Nu,actionStatus:()=>id,addValue:()=>Gs,addValues:()=>Ks,contentUrl:()=>ad,description:()=>dd,email:()=>pd,getActionStatus:()=>sd,getAdditionalProperty:()=>ed,getAtValue:()=>rd,getContentUrl:()=>ld,getDescription:()=>cd,getEmail:()=>gd,getID:()=>Eu,getId:()=>Ju,getImageName:()=>xc,getImageUrl:()=>bc,getItem:()=>yd,getItemListElement:()=>_d,getItems:()=>Vd,getName:()=>$d,getNumberOfItems:()=>Pd,getObject:()=>Cd,getObjects:()=>Od,getPosition:()=>Bd,getPotentialAction:()=>Md,getPotentialActions:()=>Wd,getRecordID:()=>Hu,getRecordId:()=>vu,getRecordType:()=>Tu,getRecord_id:()=>ju,getRecord_type:()=>Iu,getResult:()=>qd,getResults:()=>Yd,getTargetCollection:()=>Qd,getTargetCollections:()=>rc,getText:()=>sc,getType:()=>Du,getUrl:()=>lc,getValue:()=>T,getValues:()=>hn,hasValue:()=>Ys,insertValue:()=>Qu,isActive:()=>cc,isCompleted:()=>fc,isFailed:()=>pc,isPotential:()=>dc,isRef:()=>Ku,item:()=>md,itemListElement:()=>Ad,items:()=>xd,keys:()=>Xu,name:()=>Id,numberOfItems:()=>Td,object:()=>Dd,objects:()=>Rd,position:()=>Ud,potentialAction:()=>Fd,potentialActions:()=>Ld,properties:()=>gn,recordID:()=>Bu,recordId:()=>Ou,recordType:()=>ku,record_id:()=>Ws,record_type:()=>Su,ref:()=>Yu,result:()=>zd,results:()=>Kd,setActionStatus:()=>od,setActive:()=>hc,setAdditionalProperty:()=>td,setAtValue:()=>nd,setCompleted:()=>mc,setContentUrl:()=>ud,setDescription:()=>fd,setEmail:()=>hd,setFailed:()=>yc,setID:()=>Lu,setId:()=>zu,setIfNull:()=>Zu,setItem:()=>bd,setItemListElement:()=>Sd,setItems:()=>wd,setName:()=>kd,setNumberOfItems:()=>Nd,setObject:()=>jd,setObjects:()=>vd,setPosition:()=>Hd,setPotential:()=>gc,setPotentialAction:()=>Ed,setPotentialActions:()=>Jd,setRecordID:()=>Fu,setRecordId:()=>Uu,setRecordType:()=>Pu,setRecord_id:()=>Ru,setRecord_type:()=>$u,setResult:()=>Gd,setResults:()=>Xd,setTargetCollection:()=>ec,setTargetCollections:()=>nc,setText:()=>oc,setType:()=>Cu,setUrl:()=>uc,setValue:()=>v,setValueIfNull:()=>qs,setValues:()=>rt,targetCollection:()=>Zd,targetCollections:()=>tc,text:()=>ic,toRecordID:()=>Js,toRecordId:()=>Gu,toRecord_id:()=>tt,toRecord_ids:()=>qu,toRef:()=>zs,url:()=>ac});var je="en-CA";function Su(t){return T(t,"@type")}function Iu(t){return T(t,"@type")}function $u(t,e){return v(t,"@type",e)}function ku(t){return T(t,"@type")}function Tu(t){return T(t,"@type")}function Pu(t,e){return v(t,"@type",e)}function Nu(t){return T(t,"@type")}function Du(t){return T(t,"@type")}function Cu(t,e){return v(t,"@type",e)}function Ws(t){return T(t,"@id")}function ju(t){return T(t,"@id")}function Ru(t,e){return v(t,"@id",e)}function Ou(t){return T(t,"@id")}function vu(t){return T(t,"@id")}function Uu(t,e){return v(t,"@id",e)}function Bu(t){return T(t,"@id")}function Hu(t){return T(t,"@id")}function Fu(t,e){return v(t,"@id",e)}function Mu(t){return T(t,"@id")}function Eu(t){return T(t,"@id")}function Lu(t,e){return v(t,"@id",e)}function Wu(t){return T(t,"@id")}function Ju(t){return T(t,"@id")}function zu(t,e){return v(t,"@id",e)}function tt(t){return i.isArray(t)?t.map(e=>tt(e)):typeof t=="string"?t:Ws(t)}function qu(t){return tt(t)}function Js(t){return tt(t)}function Gu(t){return tt(t)}function Ku(t){return!i.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function Yu(t){if(t?._isThingClass==!0)return t.ref;if(!t)return;let e=i._utilGetId(t);if(e)return{"@id":e}}function zs(t){return i.isArray(t)?t.map(e=>zs(e)):{"@id":Js(t)}}function Xu(t){return gn(t)}function gn(t){if(!t)return[];if(i.isArray(t)){let r=[];for(let n of t)r=r.concat(gn(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function T(t,e,r,n,s){let o=hn(t,e,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function v(t,e,r,n,s){if(n!==void 0){let o=i.getValues(t,e);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return rt(t,e,r,s)}function qs(t,e,r,n,s){let o=T(t,e,n);return i.isNull(o)==!1?t:v(t,e,r,n,s)}function Zu(t,e,r,n,s){return qs(t,e,r,n,s)}function Gs(t,e,r){return Ks(t,e,r)}function Ks(t,e,r){return r=i.getValues(t,e).concat(r),rt(t,e,r)}function hn(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let s=e.split("."),o=t;for(let u=0;u<s.length;u++){let[d,c]=pn(s[u]);d&&(o=o?.[d],o=i.toArray(o)),o=o.filter(f=>f?.["@language"]==n||f?.["@language"]==je||f?.["@language"]===void 0),o=o.map(f=>f?.["@value"]??f),o=i.toArray(o),o=o.map(f=>f?.[n]??f?.[je]??f),o=i.toArray(o),u<s.length-1&&(o=o?.[c])}let l=i.toArray(o);return l.length==0&&r!==void 0?r:l}function rt(t,e,r,n){t=t?.record||t;let s=e.split("."),o=t||{};for(let d=0;d<s.length-1;d++){let[c,f]=pn(s[d]);o[c]=i.toArray(o?.[c]||[]);let g;for(o?.[c]?.[n]?(o[c][n]=i.toArray(o?.[c]?.[n]),g=o[c][n]):o?.[c]?.[je]?(o[c][je]=i.toArray(o?.[c]?.[je]),g=o[c][je]):(o[c]=i.toArray(o?.[c])||[],g=o[c]);g.length-1<f;)g.push({"@type":"Thing"});o=g?.[f]}let[l,u]=pn(s[s.length-1]);return o[l]=i.toArray(r),t}function Qu(t,e,r){return Ys(t,e,r)==!0?t:Gs(t,e,r)}function Ys(t,e,r){let n=hn(t,e);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function pn(t){if(t===void 0)return[void 0,0];let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function ed(t,e){let n=i.getValues(t,"additionalProperty").find(o=>i.getValue(o,"propertyID")==e);return i.getValue(n,"value")}function td(t,e,r,n){let s=i.getValues(t,"additionalProperty");s=s.filter(l=>i.getValue(l,"propertyID")!=e);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:e,value:r};return t=i.addValue(t,"additionalProperty",o),t}function rd(t){return i.getValues(t,"@value")}function nd(t,e){return i.setValues(t,"@value",e)}function id(t){return i.getValue(t,"actionStatus")}function sd(t){return i.getValue(t,"actionStatus")}function od(t,e){return i.setValue(t,"actionStatus",e)}function ad(t){return i.getValue(t,"contentUrl")}function ld(t){return i.getValue(t,"contentUrl")}function ud(t,e){return i.setValue(t,"contentUrl",e)}function dd(t){return i.getValue(t,"description")}function cd(t){return i.getValue(t,"description")}function fd(t,e){return i.setValue(t,"description",e)}function pd(t){return i.getValue(t,"email")}function gd(t){return i.getValue(t,"email")}function hd(t,e){return i.setValue(t,"email",e)}function md(t){return i.getValue(t,"item")}function yd(t){return i.getValue(t,"item")}function bd(t,e){return i.setValue(t,"item",e)}function xd(t){return i.list.getItems(t)}function Vd(t){return i.list.getItems(t)}function wd(t,e){return i.list.setItems(t,e)}function Ad(t){return i.list.getItemListElement(t)}function _d(t){return i.list.getItemListElement(t)}function Sd(t,e){return i.list.setItemListElement(t,e)}function Id(t){return i.getValue(t,"name")}function $d(t){return i.getValue(t,"name")}function kd(t,e){return i.setValue(t,"name",e)}function Td(t){return i.getValue(t,"numberOfItems")}function Pd(t){return i.getValue(t,"numberOfItems")}function Nd(t,e){return i.setValue(t,"numberOfItems",e)}function Dd(t){return i.getValue(t,"object")}function Cd(t){return i.getValue(t,"object")}function jd(t,e){return v(t,"object",e)}function Rd(t){return i.getValues(t,"object")}function Od(t){return i.getValues(t,"object")}function vd(t,e){return rt(t,"object",e)}function Ud(t){return i.list.getPosition(t)}function Bd(t){return i.list.getPosition(t)}function Hd(t,e){return i.list.setPosition(t,e)}function Fd(t){return i.getValues(t,"potentialAction")}function Md(t){return i.getValues(t,"potentialAction")}function Ed(t,e){return i.setValues(t,"potentialAction",e)}function Ld(t){return i.getValues(t,"potentialAction")}function Wd(t){return i.getValues(t,"potentialAction")}function Jd(t,e){return i.setValues(t,"potentialAction",e)}function zd(t){return i.getValue(t,"result")}function qd(t){return i.getValue(t,"result")}function Gd(t,e){return v(t,"result",e)}function Kd(t){return i.getValues(t,"result")}function Yd(t){return i.getValues(t,"result")}function Xd(t,e){return rt(t,"result",e)}function Zd(t){return i.getValue(t,"targetCollection")}function Qd(t){return i.getValue(t,"targetCollection")}function ec(t,e){return i.setValue(t,"targetCollection",e)}function tc(t){return i.getValues(t,"targetCollection")}function rc(t){return i.getValues(t,"targetCollection")}function nc(t,e){return i.setValues(t,"targetCollection",e)}function ic(t){return i.getValue(t,"text")}function sc(t){return i.getValue(t,"text")}function oc(t,e){return i.setValue(t,"text",e)}function ac(t){return i.getValue(t,"url")}function lc(t){return i.getValue(t,"url")}function uc(t,e){return i.setValue(t,"url",e)}function dc(t){return i.getValue(t,"actionStatus")=="PotentialActionStatus"}function cc(t){return i.getValue(t,"actionStatus")=="ActiveActionStatus"}function fc(t){return i.getValue(t,"actionStatus")=="CompletedActionStatus"}function pc(t){return i.getValue(t,"actionStatus")=="FailedActionStatus"}function gc(t){return t=i.setValue(t,"actionStatus","PotentialActionStatus"),t=i.setValue(t,"startTime",void 0),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function hc(t){return t=i.setValue(t,"actionStatus","ActiveActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function mc(t,e){return t=i.setValue(t,"actionStatus","CompletedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")||new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")||new Date().toISOString()),t=i.setValue(t,"error",void 0),i.isNotNull(e)&&(t=i.setValue(t,"result",e)),t}function yc(t,e){return t=i.setValue(t,"actionStatus","FailedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")??new Date().toISOString()),t=i.setValue(t,"error",String(e)),t=i.setValue(t,"result",void 0),t}function bc(t){if(i.record_type(t)=="ImageObject")return i.getValue(t,"contentUrl");let e=i.getValue(t,"image.contentUrl");return e=e??i.getValue(t,"image.url"),e=e??i.getValue(t,"image"),e=typeof e=="string"?e:"",e}function xc(t){let e=i.getValue(t,"image.name");return e=e??i.getValue(t,"name"),e=e??i.record_id(t),e=typeof e=="string"?e:"",e}var bn={};m(bn,{_utilGetId:()=>jc,getDataType:()=>wc,isArray:()=>so,isBoolean:()=>Xs,isDate:()=>to,isJsonld:()=>io,isNotArray:()=>Dc,isNotBoolean:()=>_c,isNotDate:()=>Tc,isNotNull:()=>Ac,isNotNumber:()=>Ic,isNotObject:()=>Pc,isNotString:()=>$c,isNull:()=>yn,isNumber:()=>Zs,isObject:()=>no,isString:()=>eo,randomUUID:()=>Vc,toArray:()=>oo,toBoolean:()=>Sc,toDate:()=>ro,toNumber:()=>Qs,toObject:()=>Nc,toSingle:()=>Cc,toString:()=>kc});function Vc(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function wc(t){if(yn(t))return"Undefined";if(so(t))return"Array";if(io(t))return"Jsonld";let e=ro(t);if(to(e))return"Date";let r=Qs(t);return Zs(r)?"Number":no(t)?"Object":eo(t)?'String"':Xs(t)?"Boolean":"Undefined"}function yn(t){return p.isNull(t)}function Ac(t){return p.isNotNull(t)}function Xs(t){return p.isBoolean(t)}function _c(t){return p.isNotBoolean(t)}function Sc(t){return p.toBoolean(t)}function Zs(t){return p.isNumber(t)}function Ic(t){return p.isNotNumber(t)}function Qs(t){return p.toNumber(t)}function eo(t){return p.isString(t)}function $c(t){return p.isNotString(t)}function kc(t){return p.toString(t)}function to(t){return p.isDate(t)}function Tc(t){return p.isNotDate(t)}function ro(t){return p.toDate(t)}function no(t){return p.isObject(t)}function Pc(t){return p.isNotObject(t)}function Nc(t){return p.toObject(t)}function io(t){return yn(t)?!1:!!(t?.["@id"]||t?.["@type"])}function so(t){return p.isArray(t)}function Dc(t){return p.isNotArray(t)}function oo(t){return p.toArray(t)}function Cc(t){return t=oo(t),t?.[0]??void 0}function jc(t){let e=t;if(e!==void 0&&e!==null)return i.isArray(e)&&e.length==1&&(e=e[0]),i.isString(e)?e:(e=i.record_id(e),e??void 0)}var xn={};m(xn,{concat:()=>Rc,dedupe:()=>ao,deleteItem:()=>Uc,diff:()=>vc,filter:()=>Mc,find:()=>Fc,includes:()=>Nt,insertItem:()=>Bc,intersection:()=>Oc,length:()=>Hc,search:()=>uo,sort:()=>Re,upsertItem:()=>lo});function ao(t,e=!0){if(t=i.toArray(t),t.length<2)return t;let r=[];for(let n of t)Nt(r,n)==!1&&(e==!0&&i.isValid(n)&&uo(t,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=Re(r),r}function Nt(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e)==!0)return!0;return!1}function Rc(t,e,r=!0){t=i.toArray(t),e=i.toArray(e);let n=t.concat(e);return n=n.filter(s=>s!=null),r==!0&&(n=ao(n)),n=Re(n),n}function Re(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=i.toArray(t),t.length<2||(e==null?r==1?t.sort((n,s)=>i.lt(n,s)==!0?-1:1):t.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?t.sort((n,s)=>i.lt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1):t.sort((n,s)=>i.gt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1)),t}function Oc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Nt(e,n)==!0&&r.push(n);return r=Re(r),r}function vc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Nt(e,n)==!1&&r.push(n);return r=Re(r),r}function Uc(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!1&&r.push(n);return r}function lo(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!0?r.push(e):r.push(n);return r}function Bc(t,e){return lo(t,e)}function Hc(t){return t=i.toArray(t),t.length}function Fc(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e))return r}function uo(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)&&r.push(n);return r}function Mc(t,e,r,n,s,o){return t=i.toArray(t),t.length==0?itemList:(i.isNotNull(e)&&(t=t.filter(l=>i.evaluate(l,e))),t=Re(t,r,n),t.length==0||(o=i.toNumber(o),i.isNumber(o)&&(t=t.slice(o)),s=i.toNumber(s),i.isNumber(s)&&t.length>=s&&(t=slice(0,s))),t)}var Vn={};m(Vn,{exportToString:()=>co});function co(t){return Array.isArray(t)?Ec(t):i.record_type(t)=="ListItem"?Lc(t):i.record_type(t)=="ItemList"?Wc(t):i.record_type(t)=="Action"?Jc(t):i.getValue(t,"name")||i.getValue(t,"@id")}function Ec(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=co(r)+`
`),e}function Lc(t){return`${i.getValue(t,"position")} - ${i.getValue(t,"item.name")||i.getValue(t,"item.@id")}`}function Wc(t){let e=i.getValues(t,"itemListElement"),r=`ItemList${i.getValue(t,"name")||i.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function Jc(t){return`${i.getValue(t,"name")||i.getValue(t,"@id")} - ${i.getValue(t,"actionStatus")}`}var An={};m(An,{DatabaseHelper:()=>wn,testDB:()=>zc});var wn=class{constructor(e){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=i.toArray(e);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(e){let r=i.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(e){let r=i.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function zc(){}var Dn={};m(Dn,{add:()=>Xc,append:()=>nt,clean:()=>_n,decrementPositions:()=>Pn,duplicate:()=>sf,ensurePositions:()=>ve,ensurePreviousNextItem:()=>Rt,filter:()=>of,find:()=>q,findByItem:()=>Sn,findByListItem:()=>Dt,findByPosition:()=>bo,getILE:()=>Yc,getItem:()=>ot,getItemListElement:()=>$,getItems:()=>xo,getListItems:()=>af,getMaxPosition:()=>st,getMinPosition:()=>Nn,getPosition:()=>P,gt:()=>yo,incrementPositions:()=>Tn,insert:()=>R,insertAfter:()=>kn,insertBefore:()=>$n,isItemList:()=>j,isListItem:()=>Ct,length:()=>Kc,lt:()=>mo,move:()=>Zc,moveAfter:()=>rf,moveBefore:()=>tf,moveDown:()=>ef,moveUp:()=>Qc,prepend:()=>po,remove:()=>ho,replace:()=>go,replaceItem:()=>uf,setItem:()=>wo,setItemListElement:()=>U,setItems:()=>Vo,setPosition:()=>jt,sort:()=>it,toItemList:()=>Gc,toListItem:()=>Oe,toString:()=>qc,toStringItemList:()=>fo,toStringListItem:()=>In,updateItem:()=>lf,upsert:()=>nf});function qc(t){return j(t)?fo(t):In(t)}function fo(t){let e=[`ItemList ${i.getValue(t,"name")||i.record_id(t)}`],r=$(t);return e=e.concat(r.map(n=>In(n))),e.join(`
`)}function In(t){return`${P(t)} - ${i.getValue(t,"item.name")||i.record_id(t)}`}function j(t){return i.record_type(t)==="ItemList"}function Gc(t){if(j(t)==!1){let e=i.toArray(t);return t={"@type":"ItemList","@id":i.randomUUID(),itemListElement:e.map((r,n)=>Oe(r,n))},_n(t)}return _n(t)}function _n(t){t=i.setValueIfNull(t,"@id",i.randomUUID());let e=$(t);return e=e.map(r=>Oe(r)),e=ve(e),e=Rt(e),t=U(t,e),t=i.setValue(t,"numberOfItems",e.length),t}function Kc(t){return $(t).length}function $(t){return i.getValues(t,"itemListElement")||[]}function Yc(t){return $(t)}function U(t,e){return e=i.toArray(e),e=e.map((n,s)=>Oe(n)),e=ve(e),e=Rt(e),t=i.setValues(t,"itemListElement",e),i.getValue(t,"numberOfItems")!=e.length&&(t=i.setValue(t,"numberOfItems",e.length)),t}function R(t,e,r){if(t=ve(t),i.isArray(e)){let s=r;for(let o of e)t=R(t,o,s),(s||s===0)&&(s+=1);return t}e=Oe(e,r);let n=$(t);return n=n.filter(s=>i.record_id(s)!=i.record_id(e)),r=r??st(n),r=r??n.length,r=r>=0?r:0,n=Tn(n,r),n=it(n),n.push(e),t=U(t,n),t}function $n(t,e,r){if(i.isArray(e)){for(let o of e)t=$n(t,o,r);return t}let n=q(t,r);if(!n)return R(t,e);let s=P(n);return R(t,e,s)}function kn(t,e,r){if(i.isArray(e)){for(let o of e)t=kn(t,o,r);return t}let n=q(t,r);if(!n)return R(t,e);let s=P(n);return R(t,e,s+1)}function po(t,e){if(i.isArray(e)){for(let r=e.length-1;r>=0;r--)t=po(t,e?.[r],referenceItem);return t}return R(t,e,0)}function nt(t,e){if(i.isArray(e)){for(let s of e)t=nt(t,s,referenceItem);return t}let r=$(t);if(r.length==0)return R(t,e,0);let n=st(t);return n||n===0?R(t,e,n+1):R(t,e,r.length)}function Xc(t,e){return nt(t,e)}function Zc(t,e,r){return R(t,e,r)}function Qc(t,e){let r=q(t,e),n=P(r);return n==0?t:R(t,r,n-1)}function ef(t,e){let r=q(t,e),n=P(r),s=st(t);return n==s?t:R(t,r,n+1)}function tf(t,e,r){return $n(t,e,r)}function rf(t,e,r){return kn(t,e,r)}function go(t,e,r){let n=$(t),s=[];for(let o of n){let l=ot(o);i.isSame(l,r)&&(l=wo(o,e)),s.push(o)}return U(t,s)}function nf(t,e){return q(t,e)?go(t,e,i.ref(e)):nt(t,e)}function sf(t,e){if(Ct(e)){let r=q(e);e=ot(r)}return nt(t,e)}function ho(t,e){if(i.isArray(e)){for(let o of e)t=ho(t,o);return t}t=ve(t);let r=$(t),n=q(r,e),s=P(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=Pn(r,s),t=U(t,r),t}function of(t,e){let r=i.getItemListElement(t);return e&&(r=i.filter(r,e)),r}function Ct(t){return i.record_type(t)==="ListItem"}function Oe(t,e){return Ct(t)==!1&&(t={"@type":"ListItem","@id":i.randomUUID(),item:t}),t=i.setIfNull(t,"@id",i.randomUUID()),(e||e===0)&&(t=i.setValue(t,"position",e)),t}function mo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function yo(t,e){let r=P(t)??void 0,n=P(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function it(t){if(j(t)){let r=t,n=$(r),s=it(n);return U(r,s)}function e(r,n){return mo(r,n)==!0?-1:yo(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function q(t,e){if(!i.isNull(e))return i.isNumber(e)?bo(t,e):Ct(e)?Dt(t,e):i.record_type(e)?Sn(t,e):Sn(t,e)||Dt(t,e)}function bo(t,e){if(j(t)&&(t=$(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(P(r)==e)return r}}function Dt(t,e){if(j(t)&&(t=$(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(i.isSame(r,e))return r}}function Sn(t,e){if(j(t)&&(t=$(t)),t=i.toArray(t),t.length!=0)for(let r of t){let n=ot(r);if(i.isSame(n,e))return r}}function P(t){let e=i.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function jt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,P(t)==e||(t=i.setValue(t,"position",e)),t}function Tn(t,e){if(e=e??0,j(t)){let n=t;t=$(n);let s=Tn(t,e);return U(n,s)}let r=[];for(let n of t){let s=P(n);s>=e&&(n=jt(n,s+1)),r.push(n)}return r}function Pn(t,e){if(e=e??0,j(t)){let n=t;t=$(n);let s=Pn(t,e);return U(n,s)}let r=[];for(let n of t){let s=P(n);s!=0&&s>=e&&(n=jt(n,s-1)),r.push(n)}return r}function ve(t,e){if(j(t)){let s=t;t=$(s);let o=ve(t);return U(s,o)}if(t=i.toArray(t),t.length==0)return t;t=it(t);let r=e??Nn(t)??0,n=[];for(let s of t)s=jt(s,r),r+=1,n.push(s);return n}function Nn(t){if(j(t)){let s=$(s);return Nn(s)}t=i.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function st(t){if(j(t))return t=$(t),st(t);t=i.toArray(t);let e=t.map(n=>P(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function Rt(t){if(j(t)){let r=t;t=$(r);let n=Rt(t);return U(r,n)}t=i.toArray(t),t=it(t);let e=[];for(let r of t){let n=P(r),s=q(t,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let l=q(t,n+1),u=l?i.ref(l):void 0;r=i.setValue(r,"nextItem",u),e.push(r)}return e}function xo(t){if(j(t)){let n=$(t);return xo(n)}return t.map(r=>ot(r))}function Vo(t,e){if(j(t)){let n=t;t=$(n);let s=Vo(t);return U(n,s)}return t=i.toArray(t),e=i.toArray(e),e=e.map(n=>Oe(n)),t.concat(e)}function af(t){return $(listItems)}function ot(t){return i.getValue(t,"item")}function wo(t,e){return i.setValue(t,"item",e)}function lf(t,e,r){let n=Dt(t,e);n=i.setValue(n,"item",r)}function uf(t,e,r){let n=$(t),s=i.toRecordID(e);for(let o=0;o<n.length;o++){let l=n[o];i.record_id(l)==s&&(n[o]=i.setItem(l,r))}return t=U(n),t}var Rn={};m(Rn,{appendAction:()=>$o,deleteAction:()=>No,duplicateAction:()=>Po,execute:()=>Cn,insertAction:()=>Ao,insertAfterAction:()=>So,insertBeforeAction:()=>_o,moveDownAction:()=>To,moveUpAction:()=>ko,prependAction:()=>Io,replaceAction:()=>jn});function Cn(t){if(i.isArray(t)){let n=new i.DB;n.set(t);let s=[];for(let o of t){o=n.get(o);let l=Cn(o);s.push(l),n.set(i.getResults(l))}return s}let e=i.getValues(t,"hasPart");if(e.length>0){let n=e.map(c=>i.list.toItemList(c)),s=new i.DB;s.set(n);let o=[],l,u=!1;for(let c of n){let f=i.list.getItemListElement(c);for(let g of f)a=i.getItem(g),a=s.get(a),u==!0&&(a=i.setFailed(a,"Previous step failed"),c=i.list.replaceItem(c,g,l)),u==!1&&(l=Cn(a),u=i.isFailed(l),c=i.list.replaceItem(c,g,l),s.set(i.getResults(l)));o.push(c)}t=i.setValues(t,"hasPart",o);let d=i.getResults(l);return t=i.setCompleted(t,d),t}let r=i.record_type(t);if(r=="ReplaceAction")return jn(t);if(r=="UpdateAction")return df(t);if(r=="InsertAction")return Ao(t);if(r=="InsertBeforeAction")return _o(t);if(r=="InsertAfterAction")return So(t);if(r=="MoveUpAction")return ko(t);if(r=="MoveDownAction")return To(t);if(r=="AppendAction")return $o(t);if(r=="PrependAction")return Io(t);if(r=="ReplaceAction")return jn(t);if(r=="DuplicateAction")return Po(t);if(r=="DeleteAction")return No(t)}function df(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e){let o=i.getValue(s,"propertyID"),l=i.getValue(s,"value");n=i.setValues(n,o,l)}t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function Ao(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);for(let s of n){for(let o of e)s=i.list.insert(s,o,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function _o(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);for(let s of n){for(let o of e)s=i.list.insertBefore(s,o,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function So(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);for(let s of n){for(let o of e)s=i.list.insertAfter(s,o,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function Io(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.prepend(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function $o(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.append(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function ko(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.moveUp(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function To(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.moveDown(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function jn(t){let e=i.targetCollection(t),r=i.getValue(t,"replacer"),n=i.getValue(t,"replacee"),s=i.list.replace(s,r,n);return t=i.addValue(t,"result",e),t=i.setCompleted(t),t}function Po(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.duplicate(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function No(t){let e=i.getObjects(t),r=i.targetCollections(t);for(let n of r){for(let s of e)n=i.list.remove(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}var vn={};m(vn,{add:()=>cf,addAppendAction:()=>Eo,addDeleteAction:()=>Bo,addDuplicateAction:()=>Fo,addMoveDownAction:()=>Uo,addMoveUpAction:()=>Oo,addPotentialActions:()=>Ut,addPropertyUpdateAction:()=>N,addSetActiveActionStatus:()=>On,addSetCompletedActionStatus:()=>Ot,addSetFailedActionStatus:()=>vt,addSetPotentialActionStatus:()=>jo,defineActionsForAction:()=>Co,defineActionsForItemList:()=>Do,getAppendAction:()=>Lo,getDeleteAction:()=>Ho,getDuplicateAction:()=>Mo,getMoveDownAction:()=>ff,getMoveUpAction:()=>vo,getPropertyUpdateAction:()=>Ro});function cf(t,e){return Ut(t,e)}function Ut(t,e){if(!t||typeof t=="string")return t;if(i.isArray(t))return t.map(n=>Ut(n,e));if(i.isObject(t)==!1)return t;let r=i.record_type(t);if(!r)return t;r=="Action"&&(t=Co(t,e)),r=="ItemList"&&(t=Do(t,e));for(let n of Object.keys(t))t[n]=Ut(t[n],e);return t}function Do(t,e){let r=i.getValues(t,"itemListElement"),n=i.getValues(t,"numberOfItems");for(let o=0;o<r.length;o++){let l=i.getPosition(r[o]);l>0&&(r[o]=Oo(r[o],t,e)),l<n-1&&(r[o]=Uo(r[o],t,e)),r[o]=Bo(r[o],t,e),r[o]=Fo(r[o],t,e)}t=i.setValues(t,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return t=Eo(t,s,e),t}function Co(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return i.getValue(t,"actionStatus")||(t=jo(t,e),t=On(t,e),t=Ot(t,e),t=vt(t,e)),i.isPotential(t)&&(t=On(t,e),t=Ot(t,e),t=vt(t,e)),i.isActive(t)&&(t=Ot(t,e),t=vt(t,e)),t}function jo(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","PotentialActionStatus"),t=N(t,e,"startTime",""),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function On(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","ActiveActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function Ot(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","CompletedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function vt(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","FailedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function N(t,e,r,n,s){let o=Ro(t,e,r,n,s);return t=i.addValue(t,"potentialAction",o),t}function Ro(t,e,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(t),url:e}}function Oo(t,e,r,n){let s=vo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function vo(t,e,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Uo(t,e,r,n){let s=etMoveDownAction(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function ff(t,e,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Bo(t,e,r,n){let s=Ho(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Ho(t,e,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Fo(t,e,r,n){let s=Mo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Mo(t,e,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Eo(t,e,r,n){let s=Lo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Lo(t,e,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:e,targetCollection:i.ref(t),url:r}}var i={dot:$e,...Pr,...Dr,...wt,...an,...dn,...fn,...mn,...bn,...xn,...Vn,...An,list:Dn,...Rn,potentialActionHelpers:vn};var Un={};m(Un,{getContent:()=>gf,getIcon:()=>bf,getTitle1:()=>Jo,getTitle2:()=>pf,imageUrl:()=>mf,imageUrls:()=>yf,thumbnailUrl:()=>hf});function Jo(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"givenName"),o=i.getValue(t,"familyName"),l=i.getValue(t,"name");if(r=="Person"){let u=[s,o];if(u=u.filter(d=>d!==void 0),u.length>0)return u.join(" ")}if(r=="ListItem"){let u=i.getValue(t,"item");return Jo(u)}return l||n||""}function pf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),o=i.getValue(t,"description");if(r=="Person")return s??"";if(r=="Action"){let l=i.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return o||""}function gf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),o;return o=i.getValue(t,"abstract"),o&&typeof o=="string"||(o=i.getValue(t,"text"),o&&typeof o=="string")||(o=i.getValue(t,"description"),o&&typeof o=="string")?o:""}function hf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(t,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")?s:""}function mf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function yf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValues(t,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(t,"image"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function bf(t){let e=i.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Wo;case"action":return xf;case"person":return Vf;case"organization":return wf;case"itemlist":return Af;case"listitem":return _f;case"postaladdress":return Sf;case"product":return If;case"webapi":return $f;case"website":return kf;case"webpage":return Tf;default:return Wo}}var Wo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',xf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',Vf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',wf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Af='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',_f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Sf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',If='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',$f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',kf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Tf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Dm=globalThis.crypto.randomUUID;function Ht(t,e){if(Array.isArray(t))return t.map(n=>Ht(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=Ht(t);let r=i.record_type(t);return t=Bt(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=Bt(t,"MoveUpAction","Move Up",e),t=Bt(t,"MoveDownAction","Move Down",e),t=Bt(t,"DeleteAction","Delete",e)),t}function Bt(t,e,r,n){let s={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(t)},url:n};return t=Pf(t,s),t}function Pf(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var Bn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function Ft(t){let e=[];return e=e.concat(Bn?.[t]?.properties||[]),Bn?.[t]?.parent&&(e=e.concat(Ft(Bn[t].parent))),e}function Mt(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:S.thing("Object thing"),instrument:S.thing("Instrument thing"),agent:S.person("Agent thing"),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let l=t+"_"+String(o);s.hasPart.push(Mt(l,e-1))}return s}function Hn(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Et(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let s="https://www.testrecord.com/"+t+"#"+n,o={"@type":n,"@id":s,name:t,headline:"Headline "+t,text:Nf(),image:S.image(),hasPart:[]};if(r==0&&(o.author=S.person(),o.datePublished=new Date().toISOString()),r<e)for(let l=0;l<3;l++){let u=t+"_"+String(l);o.hasPart.push(Et(u,e,r+1))}return o}function Nf(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function at(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var zm=globalThis.crypto.randomUUID;function Fn(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},s;for(let o=0;o<t;o++){let l=Df(S.thing(o),o);s&&(s.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(l),s=l}return n}function Df(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function Mn(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:S.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:S.organization("org_a")}}function En(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:S.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function Ln(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:S.address()}}function Wn(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Jn(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function zn(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let l=S.product(`variant ${s} ${o}`);l.size=s,l.color=o,l.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(l)}return n}function Lt(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,image:at(t),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let l=t+"_"+String(o);s.hasPart.push(Lt(l,e-1))}return s}function qn(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:S.person(0),recipient:[S.person(10),S.person(11),S.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function Gn(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<e;o++){let l=t+"_"+String(o),u=S.message(l);u.sender=o%2==0?u.recipient[0]:u.recipient[1],u.recipient=o%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-e+o),u.dateSent=d,u.dateReceived=d,s.hasPart.push(u)}return s}var S={action:Mt,article:Et,address:Hn,conversation:Gn,image:at,itemList:Fn,message:qn,offer:Mn,organization:En,person:Ln,postalAddress:Wn,product:Jn,productGroup:zn,thing:Lt,Action:Mt,Article:Et,Address:Hn,Conversation:Gn,Image:at,ItemList:Fn,Message:qn,Offer:Mn,Organization:En,Person:Ln,PostalAddress:Wn,Product:Jn,ProductGroup:zn,Thing:Lt};var Wt={};m(Wt,{transformHelpers:()=>y});var Yn={};m(Yn,{jsonToMarkdown:()=>Kn});function Kn(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,l)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${l+1}:**
`,n+=Kn(o,e+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,l])=>{l!==null&&typeof l=="object"?(n+=`${s}* **${o}:**
`,n+=Kn(l,e+1)):n+=`${s}* **${o}:** ${l}
`}):n+=`${s}* ${r}
`;return n}var Zn={};m(Zn,{jsonToYaml:()=>lt,yamlToJson:()=>Cf});function lt(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let l=lt(o,e+2).trimStart();n+=l}else n+=lt(o,0)}),n);let s=Object.keys(t);return s.length===0?`{}
`:(s.forEach(o=>{let l=t[o];n+=`${r}${o}:`,typeof l=="object"&&l!==null?n+=`
`+lt(l,e+2):n+=" "+lt(l,0)}),n)}function Cf(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of e){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),l=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let u=n[n.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],n.push({indent:o,value:u.value[u.lastKey],type:"array"}));let d=n[n.length-1],c=l.substring(1).trim();if(c.includes(":")){let[f,...g]=c.split(":"),V=f.trim(),I=g.join(":").trim(),W=Xn(I),fe={[V]:W};d.value.push(fe),n.push({indent:o+2,value:fe,type:"object",lastKey:V})}else d.value.push(Xn(c))}else if(l.includes(":")){let[d,...c]=l.split(":"),f=d.trim(),g=c.join(":").trim();u.lastKey=f,g===""?(u.value[f]={},n.push({indent:o,value:u.value[f],type:"object",lastKey:f})):u.value[f]=Xn(g)}}return r}function Xn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var zo={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var qo="DesignToken",Go={css:{get:vf},get:Qn,set:Ko,getValue:Rf,setValue:Of,sampleRecord:Yo};function Qn(t){if(!t)return;let e=i.getAdditionalProperty(t,qo);return e=e||{},e}function Ko(t,e){if(t)return e=e||{},t=i.setAdditionalProperty(t,qo,e),t}function Rf(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=Qn(t),n=Ee(r,e);return Ee(n,"$value")}function Of(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=Qn(),s=Yo(),o=Ee(s,e);return o.$value=r,n=Vt(n,e,o),t=Ko(t,n),t}function vf(t,e="dt"){let r=[];function n(l,u=[]){for(let[d,c]of Object.entries(l)){if(c==null)continue;let f=[...u,d];if(typeof c=="object"&&"value"in c){let g=`--${f.map(I=>I.toLowerCase()).join("-")}`,V=s(c.value);r.push(`  ${g}: ${V};`)}else if(typeof c=="object"&&!Array.isArray(c))n(c,f);else{let g=`--${f.map(I=>I.toLowerCase()).join("-")}`,V=s(c);r.push(`  ${g}: ${V};`)}}}function s(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function Yo(){return zo}var y={markdown:Yn,yaml:Zn,designToken:Go};var zt=class{constructor(e){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return ei(this.record)}toJSON(){return this.record}toMD(){return y.markdown.jsonToMarkdown(this.record)}toYaml(){return y.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return i.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(i.setValue(this._record,e,r))}getValues(e){return i.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(i.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(i.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(i.addValues(this._record,e,r))}_setValueIfNotNull(e,r){i.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=Q(Jt(this._record),this.baseUrl)),i.simplify(Jt(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=i.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=i.clone(Jt(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=ae(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(Jt(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return Ft(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(l){console.log("Callback failed: ",o,String(l),s)}}static toString(e){return ei(e)}static toMD(e){return y.markdown.jsonToMarkdown(e)}static toYaml(e){return y.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new w[r](y.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return ae(e)}static example(e=0,r=5){let n=this.name;return new w[n](S[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return Ft(e)}static getValue(e,r){return i.getValue(e,r)}static setValue(e,r,n){return i.setValue(e,r,ae(n))}static getValues(e,r){return i.getValues(e,r)}static setValues(e,r,n){return i.setValues(e,r,ae(n))}static addValue(e,r,n){return i.addValue(e,r,ae(n))}static addValues(e,r,n){return i.addValues(e,r,ae(n))}static flatten(e){return i.flatten(e)}static addPotentialActions(e){return Ht(e)}static addAdditionalProperty(e,r,n){return Uf(e,"additionalProperty",r,n)}};function Jt(t){function e(n){if(Array.isArray(n))return n.map(s=>e(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=e(n?.[o]);return s}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function ae(t){if(Array.isArray(t))return t.map(e=>ae(e));if(t?._isThingClass!=!0){let e=i.record_type(t);if(e){let r=w?.[e]||w.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=ae(t._record?.[e]);return t}function ei(t){if(Array.isArray(t)){let o=t.map(l=>ei(l));return o=o.join(`
`),o}let e=i.getValue(t,"@type"),r=i.getValue(t,"@id"),n=i.getValue(t,"name"),s=`${e||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Uf(t,e,r,n){let s=new w.PropertyValue;return s.propertyID=r,s.value=n,t=i.addValues(t,e,s.record),t}var A=class extends zt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=p.url.clean(value),e}set cleanUrl(e){url=p.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=Q(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=e);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=e,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==e)&&(r=r.filter(s=>s?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(s=>s?.propertyID==e)?.value}};var me=class extends A{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of i.toArray(e))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(e){this.record=i.list.setItemListElement(this.record,e)}get items(){return i.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=i.list.insert(this.record,e,0)}append(e){this.record=i.list.append(this.record,e)}add(e){this.record=i.list.append(this.record,e)}insert(e,r){this.record=i.list.insert(this.record,e,r)}delete(e){this.record=i.list.remove(this.record,e)}replace(e,r){this.record=i.list.replace(this.record,e,r)}move(e,r){this.record=i.list.move(this.record,e,r)}moveUp(e){this.record=i.list.moveUp(this.record,e)}moveDown(e){this.record=i.list.moveDown(this.record,e)}upsert(e){this.record=i.list.upsert(this.record,e)}static clean(e){return i.list.clean(e)}static length(e){return i.list.length(e)}static getItem(e,r){return i.list.getItem(e,r)}static prepend(e,r){return i.list.insert(e,r,0)}static append(e,r){return i.list.append(e,r)}static add(e,r){return i.list.insert(e,r,getLength(e))}static insert(e,r,n){return i.list.insert(e,r,n)}static delete(e,r){return i.list.remove(e,r)}static replace(e,r,n){return i.list.replace(e,r,n)}static move(e,r,n){return i.list.move(e,r,n)}static moveUp(e,r){return i.list.moveUp(e,r)}static moveDown(e,r){return i.list.moveDown(e,r)}static moveBefore(e,r,n){return i.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return i.list.moveAfter(e,r,n)}static upsert(e,r){return i.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,s,o,l){return search(e,r,n,s,o,l)}};var O=class extends A{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Xo(this.record,e)}static test(e,r){return Xo(e,r)}};function Xo(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",o=new RegExp(e.valuePattern,"gi");if(t.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var ut=class extends A{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(e){this.record=i.setCompleted(this.record,e)}setFailed(e){this.record=i.setFailed(this.record,e)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=ta(this.record,e,r)}addMaxValue(e,r){this.record=ra(this.record,e,r)}addMinLength(e,r){this.record=na(this.record,e,r)}addMaxLength(e,r){this.record=ia(this.record,e,r)}addDefaultValue(e,r){this.record=sa(this.record,e,r)}addValueRequired(e,r){this.record=oa(this.record,e,r)}addValuePattern(e,r){this.record=Zo(this.record,e,r)}addMultipleValues(e,r){this.record=Qo(this.record,e,r)}addStepValue(e,r){this.record=ea(this.record,e,r)}testConditions(){return ti(this.record)}getInputconditions(){return H(this.record)}addInputCondition(e,r){return this.addValues(e+"-input",r)}getOutputConditions(){return Bf(this.record)}addOutputCondition(e,r){return this.addValues(e+"-output",r)}test(){return ti(this.record)}static setPotential(e){return i.setPotential(e)}static setActive(e){return i.setActive(e)}static setCompleted(e,r){return i.setCompleted(e,r)}static setFailed(e,r){return i.setFailed(e,r)}static isPotential(e){return i.isPotential(e)}static isActive(e){return i.isActive(e)}static isCompleted(e){return i.isCompleted(e)}static isFailed(e){return i.isFailed(e)}static addMinValue(e,r,n){return ta(e,r,n)}static addMaxValue(e,r,n){return ra(e,r,n)}static addMinLength(e,r,n){return na(e,r,n)}static addMaxLength(e,r,n){return ia(e,r,n)}static addDefaultValue(e,r,n){return sa(e,r,n)}static addValueRequired(e,r,n){return oa(e,r,n)}static addValuePattern(e,r,n){return Zo(e,r,n)}static addMultipleValues(e,r,n){return Qo(e,r,n)}static addStepValue(e,r,n){return ea(e,r,n)}static test(e){return ti(e)}};function H(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function te(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function Bf(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function Zo(t,e,r){let n=H(t,e)||new O;return n.valuePattern=r,t=te(t,e,n),t}function Qo(t,e,r){let n=H(t,e)||new O;return n.multipleValues=r,t=te(t,e,n),t}function ea(t,e,r){let n=H(t,e)||new O;return n.stepValue=r,t=te(t,e,n),t}function ta(t,e,r){let n=H(t,e)||new O;return n.minValue=r,t=te(t,e,n),t}function ra(t,e,r){let n=H(t,e)||new O;return n.maxValue=r,t=te(n.record,e,r),t}function na(t,e,r){let n=H(t,e)||new O;return n.valueMinLength=r,t=te(t,e,n),t}function ia(t,e,r){let n=H(t,e)||new O;return n.valueMaxLength=r,t=te(t,e,n),t}function sa(t,e,r){let n=H(t,e)||new O;return n.defaultValue=r,t=te(t,e,n),t}function oa(t,e,r){let n=H(t,e)||new O;return n.valueRequired=r,t=te(t,e,n),t}function ti(t){let e=H(t);for(let r of e)if(O.test(r,t?.[r.propertyID])==!1)return!1;return!0}var G=class extends ut{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(e){return this.setValues("targetCollection",e)}get toLocation(){return this.getValues("toLocation")}set toLocation(e){return this.setValues("toLocation",e)}},qt=class extends G{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Gt=class extends G{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Kt=class extends G{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(e){return this.setValues("replacer",e)}get replacee(){return this.getValues("replacee")}set replacee(e){return this.setValues("replacee",e)}},Yt=class extends G{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Xt=class extends G{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Zt=class extends G{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var Qt=class extends A{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Hf(this.record)}get(e){return y.designToken.getValue(this.record,e)}set(e,r){return y.designToken.setValue(this.record,e,r)}get token(){return y.designToken.get(this.record)}set token(e){this.record=y.designToken.set(this.record,e)}get primary(){return y.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=y.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return y.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=y.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return y.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=y.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return y.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=y.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return y.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=y.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return y.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=y.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return y.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=y.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new er(this,"typography.heading-lg")}get body(){return new er(this,"typography.body-md")}get spacingSm(){return y.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return y.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return y.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return y.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return y.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return y.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return y.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return y.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return y.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return y.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new ri(this,"shadow.elevation-md")}sample(){return y.designToken.getSampleRecord()}},er=class{constructor(e,r){this.base=e,this.basePath=_(r)}get fontFamily(){return y.designToken.getValue(record,_(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontFamily"),e)}get fontWeight(){return y.designToken.getValue(record,_(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontWeight"),e)}get fontSize(){return y.designToken.getValue(record,_(this.basePath,"fontSize"))}set fontSize(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontSize"),e)}get lineHeight(){return y.designToken.getValue(record,_(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"lineHeight"),e)}get letterSpacing(){return y.designToken.getValue(record,_(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"letterSpacing"),e)}get family(){return y.designToken.getValue(record,_(this.basePath,"fontFamily"))}set family(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontFamily"),e)}get weight(){return y.designToken.getValue(record,_(this.basePath,"fontWeight"))}set weight(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontWeight"),e)}get size(){return y.designToken.getValue(record,_(this.basePath,"fontSize"))}set size(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"fontSize"),e)}get height(){return y.designToken.getValue(record,_(this.basePath,"lineHeight"))}set height(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"lineHeight"),e)}get spacing(){return y.designToken.getValue(record,_(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"letterSpacing"),e)}},ri=class{constructor(e,r){this.base=e,this.basePath=_(r)}get color(){return y.designToken.getValue(record,_(this.basePath,"color"))}set color(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"color"),e)}get offsetX(){return y.designToken.getValue(record,_(this.basePath,"offsetX"))}set offsetX(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"offsetX"),e)}get offsetY(){return y.designToken.getValue(record,_(this.basePath,"offsetY"))}set offsetY(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"offsetY"),e)}get blur(){return y.designToken.getValue(record,_(this.basePath,"blur"))}set blur(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"blur"),e)}get spread(){return y.designToken.getValue(record,_(this.basePath,"spread"))}set spread(e){this.base.record=y.designToken.setValue(record,_(this.basePath,"spread"),e)}};function _(t,e,r){let n=[t,e,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Hf(t){return`${i.record_type(t)} for ${i.getValue(t,url)}
    
    `}var B=class extends A{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var F=class extends B{constructor(e,r,n,s,o,l){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=l)}toString(){return ii(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",Ue(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",Ue(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",Ue(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",Ue(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",Ue(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return la(this.record)}set gmail(e){this.record=aa(e)}get outlook(){return da(this.record)}set outlook(e){this.record=ua(e)}static toString(e){return ii(e)}static fromGmail(e){return aa(e)}static toGmail(e){return la(e)}static fromOutlook(e){return ua(e)}static toOutlook(e){return da(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),e}};function ii(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(c=>ii(c)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=i.getValue(t,"sender"),r=e?.email||e?.name||"";r=ni(r,20);let s=i.getValues(t,"recipient").map(c=>c?.email||c?.name||"");s=ni(s,25);let o=i.getValue(t,"headline")||"";o.length>20&&(o=ni(o,30));let l=i.getValue(t,"dateSent")||i.getValue(t,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${r} | ${s} | ${o} | ${u}`}function ni(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function Ue(t){return t?Array.isArray(t)?t.map(e=>Ue(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function aa(t){let e=new F;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function la(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function ua(t){let e=new F;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function da(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var rr=class extends B{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Ff(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return e=F.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ca(this.record)}add(e,r,n,s,o,l){this.record=tr(this.record,e,r,n,s,o,l)}addMessage(e,r,n,s,o,l){this.record=tr(this.record,e,r,n,s,o,l)}newMessage(e,r,n,s,o,l){let u=new F(e,r,n,s,o,l);this.messages=this.messages.push(u)}static getParticipants(e){return ca(e)}static newMessage(e,r,n,s,o,l,u){return tr(e,r,n,s,o,l,u)}static addMessage(e,r,n,s,o,l,u){return tr(e,r,n,s,o,l,u)}static getMessages(e){return dt(e)}static getFirstMessage(e){let r=dt(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=dt(e);return r.length>0?r[r.length-1]:void 0}};function Ff(t){let e=dt(t),r=`Conversation with ${e.length} messages:
`;return r+=F.toString(e),r}function tr(t,e,r,n,s,o,l){let u=new F(e,r,n,s,o,l);return t=i.addValues(t,"hasPart",u),t}function dt(t){let e=i.getValues(t,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return e=Mf(e),e}function Mf(t){return t.sort((e,r)=>{let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),t}function ca(t){let e=dt(t),r=new Set;return e.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(l=>{r.add(l)})}),Array.from(r)}var Be=class extends A{constructor(e,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Ef(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Ef(t){let e="";e+=`${t?.name||t?.["@id"]} `}var nr=class extends A{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Lf(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new Be(e,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Lf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var ye=class extends A{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return fa(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=A.setValues(this._record,"additionalProperty",e)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(e){this._record=A.setValues(this._record,"areaServed",e)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=A.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=A.setValues(this._record,"inventoryLevel",e)}get price(){return i.getValue(this._record,"price")}set price(e){this._record=A.setValues(this._record,"price",e)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=A.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=A.setValues(this._record,"priceValidUntil",e)}get seller(){return i.getValue(this._record,"seller")}set seller(e){this._record=A.setValues(this._record,"seller",e)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(e){this._record=A.setValues(this._record,"validFrom",e)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(e){this._record=A.setValues(this._record,"validThrough",e)}};function fa(t){if(Array.isArray(t))return t.map(s=>fa(s));let e="",r=i.getValue(t,"itemOffered")||{},n=i.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${i.getValue(r,"name")||""} - ${i.getValue(t,"priceCurrency")||""} $${n}`,e}var be=class extends B{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return si(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new ye(e,r))}static addOffer(e,r,n="CAD"){return Wf(e,r,n)}static toString(e){return si(e)}};function si(t){if(Array.isArray(t))return t.map(r=>si(r));let e="";return e+=`${i.getValue(t,"name")||""}`,e}function Wf(t,e,r){let n=new ye(e,r);return n.itemOffered={"@id":t?.["@id"]},t=i.addValue(t,"itemOffered",n.record),record}var ir=class extends be{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return oi(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Jf(this.record,e)}generateVariants(e){this.record=zf(this.record,e)}static toString(e){return oi(e)}};function oi(t){if(Array.isArray(t))return t.map(n=>oi(n));let e="";e+=`${i.getValue(t,"name")||""}
`;let r=i.getValues(t,"hasVariant");for(let n of r)e+=" - "+be.toString(n)+`
`;return e}function Jf(t,e){return t=i.addValues(t,"hasVariant",e),t}function zf(t,e){if(Array.isArray(e)){let o={};for(let l of e)o[l.propertyID]=o?.[l.propertyID]||[],o[l.propertyID].push(o.value);e=o}let r=qf(e),n=Object.keys(r[0]);t=i.addValues(t,"variesBy",n);let s=A.getProperties("Product");for(let o of r){let l=JSON.parse(JSON.stringify(t));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":t?.["@id"]};let u=[];for(let c of Object.keys(o))u.push(o?.[c]),s.includes(c)?l=i.setValue(l,c,o[c]):l=A.addAdditionalProperty(l,c,o[c]);let d=A.getValue(l,"name")+" "+u.join(" ");l=A.setValue(l,"name",d),t=A.addValue(t,"hasVariant",l)}return t}function qf(t){return Object.keys(t).reduce((r,n)=>{let s=t[n],o=[];for(let l of r)for(let u of s)o.push({...l,[n]:u});return o},[{}])}var sr=class extends A{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return pa(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return i.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return i.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return i.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return i.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return i.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function pa(t){if(Array.isArray(t))return t.map(r=>pa(r));let e="";return e+=`${i.getValue(t,"propertyID")||""}: ${i.getValue(t,"value")||""} ${i.getValue(t,"unitText")||""}`,e}var xe=class extends B{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),i.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new me(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=ct(this.record,"WPHeader"),K(this.record,"WPHeader")}set WPHeader(e){this.record=Y(this.record,"WPHeader",e)}get WPFooter(){return this.record=ct(this.record,"WPFooter"),K(this.record,"WPFooter")}set WPFooter(e){this.record=Y(this.record,"WPFooter",e)}get WPSideBar(){return this.record=ct(this.record,"WPSideBar"),K(this.record,"WPSideBar")}set WPSideBar(e){this.record=Y(this.record,"WPSideBar",e)}get Table(){return K(this.record,"Table")}set Table(e){this.record=Y(this.record,"Table",e)}addHeaderLink(e,r){this.record=ga(this.record,e,r)}addFooterLink(e,r){this.record=ha(this.record,e,r)}domain(){return ma(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Gf(e,this.url)}static getWPHeader(e){return K(e,"WPHeader")}static getWPFooter(e){return K(e,"WPFooter")}static getWPSideBar(e){return K(e,"WPSideBar")}static getTable(e){return K(e,"Table")}static setWPHeader(e,r){return Y(e,"WPHeader",r)}static setWPFooter(e,r){return Y(e,"WPFooter",r)}static setWPSideBar(e,r){return Y(e,"WPSideBar",r)}static setTable(e,r){return Y(e,"Table",r)}static addHeaderLink(e,r,n){return ga(e,r,n)}static addFooterLink(e,r,n){return ha(e,r,n)}static getDomain(e){return ma(i.getValue(e,"url")||e)}};function ct(t,e){let n=i.getValues(t,"hasPart").find(s=>i.getValue(s,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=i.addValue(t,"hasPart",n)),t}function K(t,e){return i.getValues(t,"hasPart").find(s=>i.record_type(s)==e)}function Y(t,e,r){let n=i.getValues(t,"hasPart");return n=n.filter(s=>i.record_type(s)!=e),n.push(r),t=i.setValues(t,"hasPart",n),t}function ga(t,e,r){t=ct(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},s=K(t,"WPHeader");return s=i.addValue(s,"hasPart",n),t=Y(t,"WPHeader",s),t}function ha(t,e,r){t=ct(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},s=K(t,"WPFooter");return s=i.addValue(s,"hasPart",n),t=Y(t,"WPFooter",s),t}function ma(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Gf(t,e){let r=new i.DB;r.post(t);let n=r.records,s=[];if(Kf(t)=="Product"){let u=n.filter(V=>i.record_type(V)=="Product")[0];s.push({replacee:i.record_id(u),replacer:e+"#product"}),u=i.setValue(u,"url",e);let d=i.getValues(u,"brand");d=d.map(V=>V?.["@type"]?{"@type":"brand",name:V}:V),u=i.setValues(u,"brand",d);let c=n.filter(V=>i.record_type(V)=="Offer");c=c.map(V=>i.setValues(V,"itemOffered",i.ref(u))),u=i.setValues(u,"offers",c);let f=n.filter(V=>i.record_type(V)=="Review");c=c.map(V=>i.setValues(V,"itemReviewed",i.ref(u))),u=i.setValues(u,"review",f);let g=n.filter(V=>i.record_type(V)=="AggregateRating");return g=g.map(V=>i.setValues(V,"itemReviewed",i.ref(u))),u=i.setValues(u,"aggregateRating",g),u=i.replaceIds(u,s),u}return t}function Kf(t){if(t=i.toArray(t),t=t.filter(r=>i.record_type(r)!="BreadcrumbList"),t.length==1&&i.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&i.record_type(t[0]=="WebPage")&&(t=i.getValues(t,"mainEntity")),t.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var or=class extends xe{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new xe(this);return n.url=e,n.name=r,n}domain(){return ya(this.url)}static getDomain(e){return ya(i.getValue(e,"url")||e)}};function ya(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var ar=class extends A{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var w={get:A.toThing,toThing:A.toThing,Action:ut,AddAction:qt,AppendAction:Xt,BrandDesign:Qt,Conversation:rr,CreativeWork:B,DataFeed:nr,DataFeedItem:Be,DeleteAction:Gt,InsertAction:Yt,ItemList:me,Message:F,Offer:ye,Product:be,ProductGroup:ir,PropertyValue:sr,Thing:A,PrependAction:Zt,ReplaceAction:Kt,UpdateAction:G,WebAPI:ar,WebPage:xe,WebSite:or,format:Un,toThing:Yf};function Yf(t){let e=i.record_type(t);return w?.[e]?new w[e](t):new w.Thing(t)}var di={};m(di,{RdfDB:()=>lr,default:()=>Xf,fromRDF:()=>ui,toRDF:()=>li});var vx=globalThis.crypto.randomUUID,lr=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return ui(this.getRdf(e))}post(e,r){e=li(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},Xf={RdfDB:lr,toRDF:li,fromRDF:ui};function li(t,e){function r(s,o,l,u){let d=[];if(Array.isArray(l))return d=d.concat(l.map((f,g)=>r(s,o,f,u))),d.flat();if(l?.subject&&l?.predicate&&l?.object)return[l];if(u&&typeof u=="object"&&(typeof l!="object"&&(l={"@value":l}),l["@annotation"]={...l?.["@annotation"]||{},...u}),o=="@annotation")return[];if(l?.["@value"]){let f=l?.["@annotation"];if(f&&typeof f=="object"){f["@id"]=f?.["@id"]||"_:"+globalThis.crypto.randomUUID();let g=Object.keys(f).map(V=>r(f["@id"],V,f[V]));d=d.concat(g),f=f?.["@id"]}return d=d.concat([{subject:s,predicate:o,object:l?.["@value"],label:u}]),d}if(typeof l=="object"){l["@id"]=l?.["@id"]||"_:"+globalThis.crypto.randomUUID();let f={subject:s,predicate:o,object:l?.["@id"],label:u};return d=d.concat([f]),d=d.concat(Object.keys(l).map(g=>r(l?.["@id"],g,l?.[g],u))),d.flat()}let c={subject:s,predicate:o,object:l,label:u};return d.concat([c])}let n=[];if(e){let s=ai(e);s.length>1&&(n=n.concat(s.slice(1))),e=s?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(s=>s.subject),n}function ui(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let s=e.get(n.subject),o=n?.object,l=e.get(n?.object);l&&(o={"@id":l?.["@id"]}),n.label&&(o?.["@id"]||(o={"@value":o}),o["@annotation"]=n?.label),s[n.predicate]=s?.[n.predicate]||[],s[n.predicate]=Array.isArray(s[n.predicate])?s[n.predicate]:[s[n.predicate]],s[n.predicate].push(o)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function ai(t){let e=[];if(Array.isArray(t))return e=t.map(r=>ai(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let s=[];for(let o of n)typeof o=="object"?(o["@id"]=o?.["@id"]||"_:"+globalThis.crypto.randomUUID(),s.push({"@id":o?.["@id"]}),e=e.concat(ai(o))):s.push(o);t[r]=s,e=[t].concat(e)}return e}import Ve from"fs/promises";var re={load:xa,save:ba,exists:ur,list:wa,delete:Va,file:{load:xa,save:ba,delete:Va,exists:ur},dir:{list:wa,exists:ur,delete:Qf},getFilePath:ft};async function ur(t,e){t=ft(t,e);try{return await Ve.access(t),!0}catch{return!1}}async function Zf(t){try{await Ve.mkdir(t,{recursive:!0})}catch(e){throw e}}async function ba(t,e,r){await Zf(t),t=ft(t,e);try{await Ve.writeFile(t,r,"utf8")}catch(n){throw n}}async function xa(t,e){t=ft(t,e);try{return await Ve.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function Va(t,e){t=ft(t,e);try{await Ve.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function Qf(t){try{await Ve.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function wa(t){if(await ur(t)==!1)return[];try{return await Ve.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function ft(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var fi={};m(fi,{Button:()=>tp,DropdownMenu:()=>Aa,MenuItem:()=>rp,escapeHtml:()=>le});function le(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function tp({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[e]||o.default} ${l[r]||l.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function ci(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let s=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?ci(n,s):`<input type="hidden" name="${le(s)}" value="${le(String(n))}">`}).join("")}function Aa({label:t="",items:e=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},c={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},f=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),g=t?`<span class="mr-2">${le(t)}</span>${f}`:`${f}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let V=e.map(I=>{if(I.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let W=ci(I.object),fe=I.disabled?"disabled":"";return`
        <form method="POST" action="${le(I.url||"")}" class="m-0 p-0">
          ${W}
          <button
            type="submit"
            ${fe}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${le(I.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${l}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${d[n]||d.ghost} ${c[s]||c.icon}"
      >
        ${g}
      </summary>

      <div class="absolute ${u[r]||u.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${V}
      </div>
    </details>
  `.trim()}function rp(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=ci(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${le(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${le(h.getName(item)||"")}
          </button>
        </form>`}var ne={};m(ne,{components:()=>b});var pi={};m(pi,{Accordion:()=>np});function np({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var gi={};m(gi,{Alert:()=>ip});function ip({title:t,description:e="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var hi={};m(hi,{Article:()=>sp,ArticleBody:()=>cp,ArticleCard:()=>pp,ArticleCardBody:()=>hp,ArticleCardFooter:()=>mp,ArticleCardHeader:()=>gp,ArticleCardMedia:()=>bp,ArticleCardTitle:()=>yp,ArticleCategory:()=>ap,ArticleFooter:()=>fp,ArticleHeader:()=>op,ArticleMedia:()=>dp,ArticleSubTitle:()=>up,ArticleTitle:()=>lp});function sp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function op(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function ap(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function lp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function up(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function dp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function cp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function fp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function pp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function gp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function hp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function mp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function yp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function bp(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var mi={};m(mi,{Badge:()=>xp,Badges:()=>Vp});function xp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function Vp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var yi={};m(yi,{Breadcrumb:()=>wp,BreadcrumbEllipsis:()=>_p,BreadcrumbItem:()=>Ia,BreadcrumbLink:()=>$a,BreadcrumbList:()=>Sa,BreadcrumbMain:()=>_a,BreadcrumbPage:()=>Ap,BreadcrumbSeparator:()=>ka});function wp({urls:t,titles:e,links:r}){let n=new w.ItemList(r);if(t)for(let l=0;l<t.length;l++){let u=e?.[l]||t[l].split("/")?.[t[l].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[l],name:u})}let s=n.items;return console.log("items",s),_a({children:Sa({children:s.map(l=>Ia({children:$a({href:l?.url,children:l?.name})})).join(ka())})})}function _a({children:t="",className:e="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${r}>
        ${t}
      </nav>
    `.trim()}function Sa({children:t="",className:e="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${r}>
        ${t}
      </ol>
    `.trim()}function Ia({children:t="",className:e="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${r}>
        ${t}
      </li>
    `.trim()}function $a({children:t="",href:e="#",className:r="",attrs:n=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${t}
      </a>
    `.trim()}function Ap({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function ka({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function _p({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var bi={};m(bi,{Button:()=>Sp});function Sp({text:t,variant:e="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.primary} ${l[r]||l.default} ${n}" ${s}>
        ${t}
      </button>
    `.trim()}var xi={};m(xi,{Card:()=>Ip,CardBody:()=>Tp,CardContent:()=>Cp,CardDescription:()=>Dp,CardFooter:()=>Pp,CardHeader:()=>$p,CardMain:()=>kp,CardMedia:()=>jp,CardTitle:()=>Np});function Ip(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function $p(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function kp(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function Tp(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function Pp(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function Np(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function Dp(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function Cp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function jp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var Vi={};m(Vi,{Dialog:()=>Rp});function Rp({id:t,title:e,description:r="",content:n,footer:s="",className:o=""}){return`
      <dialog id="${t}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${o}">
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
    `.trim()}var wi={};m(wi,{Footer:()=>Op});function Op({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
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
    `.trim()}var Ai={};m(Ai,{Header:()=>vp});function vp({brand:t="",navItems:e=[],actions:r="",className:n=""}){let s=e.map((o,l)=>{if(o.dropdown&&o.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
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
              ${s}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${r}
          </div>
        </div>
      </header>
    `.trim()}var _i={};m(_i,{H1:()=>Up,H2:()=>Bp,H3:()=>Hp,H4:()=>Fp,H5:()=>Mp,H6:()=>Ep,Heading:()=>we,P:()=>Lp,Text:()=>Wp});function Up(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"1",options:e,record_id:r,propertyID:n,className:s})}function Bp(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"2",options:e,record_id:r,propertyID:n,className:s})}function Hp(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"3",options:e,record_id:r,propertyID:n,className:s})}function Fp(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"4",options:e,record_id:r,propertyID:n,className:s})}function Mp(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"5",options:e,record_id:r,propertyID:n,className:s})}function Ep(t,{options:e,record_id:r,propertyID:n,className:s}){return we({title:t,level:"6",options:e,record_id:r,propertyID:n,className:s})}function we({title:t,level:e,options:r,record_id:n,propertyID:s,className:o}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${t}</h${e}>
    
    `}function Lp(t,e,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}function Wp(t,e,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}var Si={};m(Si,{Input:()=>M,InputCheckbox:()=>Jp,InputDate:()=>zp,InputDateTime:()=>Gp,InputEmail:()=>Kp,InputNumber:()=>qp,InputPassword:()=>Yp,InputTel:()=>Xp,InputText:()=>Zp,InputTime:()=>Qp,InputUrl:()=>eg});function M({label:t="",type:e="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:l=""}){let u=s?`id="${s}"`:"";return`
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
            ${o||""}"
          ${l||""}
        />
      </div>
    `.trim()}function Jp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:s})}function zp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"date",label:t,value:e,propertyID:r,id:n,className:s})}function qp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"number",label:t,value:e,propertyID:r,id:n,className:s})}function Gp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:s})}function Kp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"email",label:t,value:e,propertyID:r,id:n,className:s})}function Yp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"password",label:t,value:e,propertyID:r,id:n,className:s})}function Xp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"tel",label:t,value:e,propertyID:r,id:n,className:s})}function Zp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"text",label:t,value:e,propertyID:r,id:n,className:s})}function Qp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"time",label:t,value:e,propertyID:r,id:n,className:s})}function eg({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return M({type:"url",label:t,value:e,propertyID:r,id:n,className:s})}var Ii={};m(Ii,{Pagination:()=>tg,PaginationComponent:()=>Pa,PaginationContent:()=>Na,PaginationEllipsis:()=>ja,PaginationItem:()=>pt,PaginationLink:()=>dr,PaginationNext:()=>Ca,PaginationPrevious:()=>Da,buildPaginationUrl:()=>Ta});function Ta(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function Pa({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function Na({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function pt({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function dr({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${u} ${l[r]||l.icon} ${d} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Da({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return dr({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Ca({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return dr({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function ja({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function tg({url:t,total:e,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:l=""}={}){let u=Math.ceil(e/r)||1,d=Math.floor(n/r)+1,c=J=>{let z=(J-1)*r;return Ta(t,r,z)},f=(J,z)=>{let ge=z-J+1;return Array.from({length:ge},(bt,xt)=>J+xt)},g=s+5,V=[];if(g>=u)V=f(1,u);else{let J=Math.max(d-s,1),z=Math.min(d+s,u),ge=J>2,bt=z<u-2,xt=1,fl=u;if(!ge&&bt){let Me=3+2*s;V=[...f(1,Me),"ellipsis",u]}else if(ge&&!bt){let Me=3+2*s,us=f(u-Me+1,u);V=[xt,"ellipsis",...us]}else if(ge&&bt){let Me=f(J,z);V=[xt,"ellipsis",...Me,"ellipsis",fl]}}let I=[],W=d>1,fe=W?c(d-1):"#";I.push(pt({children:Da({href:fe,disabled:!W})})),V.forEach(J=>{if(J==="ellipsis")I.push(pt({children:ja()}));else{let z=Number(J),ge=z===d;I.push(pt({children:dr({href:c(z),isActive:ge,children:String(z)})}))}});let pe=d<u,Sr=pe?c(d+1):"#";I.push(pt({children:Ca({href:Sr,disabled:!pe})}));let Ir=Pa({className:o,attrs:l,children:Na({children:I.join("")})});return Ir=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ir}
    </div>`,Ir}var $i={};m($i,{Section:()=>rg,SectionHeader:()=>ng});function rg({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=l[e]||l.default,c=u[r]!==void 0?u[r]:u.default,f=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${c} ${s}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${d} ${n}" ${o}>
      ${f}
    </section>
  `.trim()}function ng({title:t="",description:e="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var ki={};m(ki,{Table:()=>sg,TableBody:()=>va,TableCell:()=>X,TableCellCenter:()=>dg,TableCellLeft:()=>ug,TableCellLink:()=>fg,TableCellNumber:()=>cg,TableCellRight:()=>Ba,TableCellText:()=>pg,TableColumnHeader:()=>Oa,TableColumnHeaderCenter:()=>lg,TableColumnHeaderLeft:()=>og,TableColumnHeaderRight:()=>ag,TableFooter:()=>Ha,TableHeader:()=>Ra,TableRow:()=>Ua,getTable:()=>ig});function ig({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Ra(t.map(n=>Oa(n)))}
      
        ${va(e.map(n=>Ua(n.map(s=>X(s)))))}
        
        ${Ha()}

      </table>

    </div>
  
  
  `}function sg(t,e,r,n,s=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function Ra(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function Oa(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function og(t,e){return X(t,e)}function ag(t,e){return e=e+" text-right ",X(t,e)}function lg(t,e){return e=e+" text-center ",X(t,e)}function va(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function Ua(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
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
  `}function ug(t,e,r,n){return X(t,e,r,n)}function Ba(t,e,r,n){return n=n+" text-right ",X(t,e,r,n)}function dg(t,e,r,n){return n=n+" text-center ",X(t,e,r,n)}function cg(t,e,r,n,s,o){return t=i.toNumber(t),t=p.number.format(t,e),Ba(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function fg(t,e,r,n,s,o){return X(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function pg(t,e,r,n){let s=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return X(s)}function Ha(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var Ti={};m(Ti,{Webpage:()=>gg});function gg({title:t,headContent:e,header:r,footer:n,content:s,breadcrumb:o}){return`
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
          ${s||""}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${n||""}</div>


      <script type="module" src="library.js"></script>

    </body>
    </html>
  `.trim()}var Pi={};m(Pi,{CardGrid:()=>hg});function hg({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),s=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${e}
    </div>
  `}var Ni={};m(Ni,{JsonEditor:()=>yg});function Fa({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.default} ${l[r]||l.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function mg({title:t="",description:e="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${s}" ${o}>
      ${t||e?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${t?`<h3 class="font-semibold leading-none tracking-tight text-xl">${t}</h3>`:""}
          ${e?`<p class="text-sm text-muted-foreground">${e}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${r}</div>
      ${n?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${n}</div>`:""}
    </div>
  `.trim()}function yg({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let l=t.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof r=="string"?r:JSON.stringify(r,null,2),d=JSON.stringify(n,null,2),c=`
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
            ${Fa({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
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
        ${Fa({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
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
  `.trim();return mg({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:f,className:s,attrs:o})}var Di={};m(Di,{Modal:()=>bg,ModalBody:()=>Vg,ModalTrigger:()=>xg});function bg(t,e,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${t||""}
    </div>
    
    
    `}function xg(t,e,r){return`
    
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
    
    `}function Vg(t,e,r){return`
    
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
    
    
    `}var Ci={};m(Ci,{DropdownMenu:()=>Ag,DropdownMenuIcon:()=>_g,Menu:()=>wg,MenuItemLink:()=>Sg,MenuItemPost:()=>Ig,MenuItemSeparator:()=>$g});function wg(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function Ag(t,e,r){return`
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

    `}function _g(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Sg(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function Ig(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function $g(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var ji={};m(ji,{Kanban:()=>kg,KanbanBody:()=>Pg,KanbanCard:()=>vg,KanbanCardBody:()=>Bg,KanbanCardFooter:()=>Hg,KanbanCardHeader:()=>Ug,KanbanColumn:()=>Cg,KanbanColumnBody:()=>Rg,KanbanColumnFooter:()=>Og,KanbanColumnHeader:()=>jg,KanbanFooter:()=>Ng,KanbanHeader:()=>Tg,KanbanTitle:()=>Dg});function kg(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function Tg(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function Pg(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function Ng(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function Dg(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function Cg(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function jg(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Rg(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function Og(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function vg(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function Ug(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function Bg(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function Hg(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var Ri={};m(Ri,{StarRating:()=>Fg,StarRatingEmpty:()=>Lg,StarRatingFull:()=>Mg,StarRatingHalf:()=>Eg});function Fg(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function Mg(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Eg(t,e){return`
    
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


    `}function Lg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var b={...pi,...gi,...hi,...mi,...yi,...bi,...xi,...Pi,...Vi,...fi,...wi,...Ai,...ji,...Ci,...Di,...Si,...Ni,...Ii,...$i,...Ri,...ki,..._i,...Ti};var Hi={};m(Hi,{Card:()=>Xg,Cards:()=>Zg});var Bi={};m(Bi,{Media:()=>Ae,MediaImage:()=>Wa,MediaVideo:()=>La});var fr={};m(fr,{fixedLength:()=>cr,textCenter:()=>Oi});function cr(t,e=void 0,r=0){let n=t;if(i.isArray(t)){let o=t.length;o==0&&(t=""),o==1&&(t=t[0]),o>1&&(t=`(${t.length})`)}let s=p.getDataType(t);if(s=="Undefined"&&(t=""),s=="Jsonld"&&(t=t?.["@id"]),s=="Number"&&(t=p.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),s=="Date"&&(t=p.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let o="",l=Math.round(e/3),u=e-l-3;o+=t.slice(0,l),o+="...",o+=t.slice(-u),t=o}return e!=null&&(t=t.padEnd(e," ")),t}function Oi(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var Ui={};m(Ui,{toTextRecord:()=>Wg,toTextTable:()=>qg});function Wg(t,e=80){let r=Jg(t,e),n=zg(t),s="";s+=Ma(r),s+=`
`,n.length>0?s+=n.map(o=>Ea(o,r)).join(""):s+=`(no records)
`}function Jg(t,e=80){let n=vi(t).map(l=>(l||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:e-Math.max(s,11)}]}function zg(t){let e=vi(t),r=[];for(let n of e){let s={"@type":"PropertyValue",propertyID:n,value:p.getValues(t,n)};r.push(s)}return r}function qg(t,e,r=!0,n=80){e=Gg(t,e,r),t=Kg(t,e,r);let s="";if(s+=Ma(e),s+=`
`,t.length>0){let o=t.map(l=>Ea(l,e));s+=o.join("")}else s+=Oi("(no records to display.)",n);return s}function Gg(t,e,r=!0){e=i.toArray(e),(!e||e.length==0)&&(e=vi(t).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(e.map(s=>s?.propertyID||s?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function Kg(t,e,r=!0){if(t=i.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,s]of t.entries())s.position=s?.position??n;return t}function Ma(t){let e="",r=[];for(let s of t){let o=`${cr(s.title,s.width,s.rounding)}`;r.push(o)}e+=r.join(" "),e+=`
`;let n=[];for(let s of t){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return e+=n.join(" "),e+=`
`,e}function Ea(t,e){let r="",n=[];for(let s of e){let o=i.getValues(t,s.propertyID),l=`${cr(o,s.width,s.rounding)}`;n.push(l)}return r+=n.join(" "),r+=`
`,r}function vi(t){t=i.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=Yg(e),e}function Yg(t){t=i.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let s of e){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var gt={...fr,...Ui};function Ae(t,e){if(!i.getValue(t,"contentUrl"))return"";let n="";return i.record_type(t)=="VideoObject"?La(t,e):Wa(t,e)}function La(t,e){let r=i.getValue(t,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Wa(t,e){let r=i.getValue(t,"contentUrl");return r?b.Modal(b.ImageModal(r)):""}function ue({website:t,webpage:e,title:r,headContent:n,content:s,options:o}){e=new w.WebPage(e),t=new w.WebSite(t);let l={};l.title=r,l.title=l.title||i.getValue(e,"title"),l.title=l.title||i.getValue(e,"name"),l.title=l.title||i.getValue(t,"title"),l.title=l.title||i.getValue(t,"name"),l.headContent=n,l.breadcrumb=b.Breadcrumb({links:i.getValue(e,"breadcrumb")});let u=i.getValue(t,"about.name")??i.getValue(t,"name")??i.getValue(e,"about.name")??i.webpage(t,"name"),d=e.WPHeader.hasPart||[],c=e.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],c=Array.isArray(c)?c:[c],l.header=b.Header({brand:u,navItems:d}),l.footer=b.Footer({brand:u,navItems:c}),l.content=s,b.Webpage(l)}function Ja({website:t,webpage:e,title:r,url:n,headContent:s,content:o,records:l,properties:u,headers:d,offset:c,limit:f,options:g}){return o=o??"",o+=D.Cards({url:n,records:l,offset:c,limit:f,nbOfColumns:3,options:g}),ue({website:t,webpage:e,title:r,headContent:s,content:o,options:g})}function Xg(t,e,r,n=!0){let s=w.format.getTitle1(t),o=w.format.getContent(t),l=i.getRecordUrl(t,e),u=n==!0?w.format.imageUrl(t):void 0;return b.Card({title:s,description:o,url:l,media:u,className:r})}function Zg({url:t,records:e,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:l,includePagination:u,options:d,layoutClasses:c,className:f,attrs:g}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let V=new w.ItemList(e);V=V.record,V.numberOfItems=V?.numberOfItems??V.itemListElement.length,V=pr({record:V,options:d}),V.itemListElement=V.itemListElement.filter(pe=>i.getValue(pe,"position")>=r&&i.getValue(pe,"position")<r+n);let I="";for(let pe of i.getValues(V,"itemListElement")){let Sr=i.getValue(pe,"item");I+=Qg({url:t,item:Sr,options:d})}I=b.CardGrid({content:I,nbOfColumns:l});let W=b.Pagination({url:t,limit:n,offset:r,total:V.numberOfItems,options:d});return`

        <div class="${c} ${f}" ${g}>
        <div class="flex-1">
            ${I}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${W}
        </div>
        </div>

    `}function Qg({url:t,item:e,options:r}){let n=i.getImageUrl(e),s=i.getImageName(e),o=i.getValues(e,"keywords");o=o.map(c=>`<a href="/?keywords=${c}">${c}</a>`);let l=b.Badges({text:o,variant:"secondary"}),u={title:i.getValue(e,"name"),url:i.getRecordUrl(e,r?.baseUrl),description:i.getValue(e,"description"),footer:l,image:i.getImageUrl(e),imageAlt:i.getImageName(e),media:Ae({record:e,options:r})};return b.Card(u)}var Fi={};m(Fi,{Input:()=>th});function th({record:t,propertyID:e,value:r}){return b.Input({value:r})}var Ei={};m(Ei,{Table:()=>rh,TableBody:()=>qa,TableCell:()=>Ka,TableHeader:()=>za,TableRow:()=>Ga,getDataType:()=>Ya,getHeadersFromProperties:()=>Mi,getPropertiesFromRecords:()=>He});function rh(t,e,r,n,s,o){let l=t;r=r||He(l),n=n||Mi(r);let u=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),u=["thumbnail"].concat(u)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),u=["position"].concat(u)),b.Table(za(l,r,n,u)+qa(l,r,e,u))}function za(t,e,r,n){return e=e||He(t),r=r||Mi(e),n=n||[],e=e||He(t),b.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return b.TableColumnHeaderRight(s);default:return b.TableColumnHeader(s)}}).join(" "))}function qa(t,e,r,n){e=e||He(t),n=n||[];let s=i.getValues(new w.ItemList(t),"itemListElement");return b.TableBody(s.map(o=>Ga(o,e,r,n)).join(" "))}function Ga(t,e,r,n){return e=e||He(t),n=n||[],b.TableRow(e.map((l,u)=>Ka(t,i.getValues(t,l),l,r,n,u)).join(" "),i.record_id(t),void 0,"kr-listitem")}function Ka(t,e,r,n,s,o){let l=e,u=r,d=t;if(l=i.isArray(l)&&l.length==0?"":l,l=i.isArray(l)&&l.length==1?l[0]:l,(u||"").endsWith("@type")){let c=p.url.getUrl(n||"","/"+l);return b.TableCellLink(c,l)}if((u||"").endsWith("@id")){let c=i.getRecordUrl(d,n);return b.TableCellLink(c,l)}switch(s?.[o]||Ya(l)){case"array":return b.TableCellCenter(`(${l.length})`);case"text":return b.TableCellText(l);case"number":return b.TableCellNumber(l,2);case"link":return b.TableCellLink(l,l);case"thumbnail":return b.TableCell(Ae({record:l}));case"position":return b.TableCellNumber(l,0);case"object":return b.TableCellLink(i.getRecordUrl(l,n),i.record_id(l));default:return b.TableCellText(l)}}function He(t){let r=i.getValues(t,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function Mi(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function Ya(t){return t=i.isArray(t)&&t.length==0?void 0:t,t=i.isArray(t)&&t.length==1?t[0]:t,t?p.isNumber(t)?"number":p.isUrl(t)?"link":p.isDate(t)?"date":p.isArray(t)?"array":p.isObject(t)?"object":"text":"text"}var Li={};m(Li,{Record:()=>nh});function nh(t,e,r,n="",s="",o=!1,l=0,u={}){t=i.removeCircularRefs(t),r=r||Object.keys(t),u.baseUrl=e||u?.baseUrl;let d={rows:[]},c=Xa({record:t,baseUrl:e,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:u});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
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

    `}function Xa({record:t,properties:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){e=e||Object.keys(t);let u=e.filter(g=>g.startsWith("@")),d=e.filter(g=>!g.startsWith("@"));e=u.sort().concat(d.sort());let c={rows:[]};return b.Table(b.TableHeader(b.TableRow(b.TableCellRight("")+b.TableCellRight(D.DropdownMenu(i.getPotentialActions(t)))))+b.TableBody(e.map(g=>b.TableRow([b.TableCell(g+":"),b.TableCell(Za({record:t,propertyID:g,className:r,attrs:n,expandAll:s,depth:o+1,options:l}))].join(" "))).join(" ")))}function ih({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){let u=i.getValues(t,e),d=[];for(let c of u){let f=i.clone(t);f=i.setValue(f,e,c),d.push(Za({record:f,propertyID:e,className:r,attrs:n,expandAll:s,depth:o+1,options:l}))}return`
        <ul class="space-y-4 ">
          ${d.map(c=>`
            <li>
              ${c}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Za({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:l}){let u=i.getValues(t,e);return i.isArray(u)&&u.length==1&&(u=u[0]),i.isArray(u)&&u.length==0?"":i.isArray(u)&&u.length>0?`
            <details class="space-y-4"> 
            
                <summary>${D.ValueArray(u,e,l?.baseUrl)}</summary>
      
                ${ih({record:t,propertyID:e,className:r,attrs:n,expandAll:s,depth:o,options:l})}
            
            </details>
      `:u?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${D.ValueThing(u,e,l?.baseUrl)}</summary>
      
            ${Xa({record:u,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:l})}
        
        </details>
      `:u===void 0?"":D.Value(u,e,l?.baseUrl)}var Wi={};m(Wi,{DropdownMenu:()=>oh,Menu:()=>sh});function sh(t){return t=i.toArray(t),!t||t.length==0?"":b.DropdownMenu(b.DropdownMenuIcon(),t.map(e=>b.MenuItemPost(i.getImageUrl(e),i.getName(e),i.getUrl(e))).join(" "))}function oh(t){if(t=i.toArray(t),!t||t.length==0)return"";let e=t.map(n=>b.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return b.DropdownMenu(b.DropdownMenuIcon(),e)}var Ji={};m(Ji,{Kanban:()=>ah,KanbanCard:()=>el,KanbanColumn:()=>Qa});function ah(t,e){let r=i.getItems(t);return b.Kanban(b.KanbanHeader(b.KanbanTitle("Awesome Kanban","Fuck yeah"))+b.KanbanBody(propertyValues.map(n=>Qa(t,e,n)).join(" "))+b.KanbanFooter(""))}function Qa(t,e,r){let n=i.getItems(t);return n=n.filter(s=>i.getValue(s,e)==r),b.KanbanColumn(b.KanbanColumnHeader(r)+b.KanbanColumnBody(n.map(s=>el(s)).join(" "))+b.KanbanColumnFooter())}function el(t){return b.KanbanCard(b.KanbanCardHeader("xx")+b.KanbanCardBody(D.Value(i.getName(t),"name"))+b.KanbanCardFooter(D.Value(i.getActionStatus(t),"actionStatus")))}var D={...Hi,...Fi,...Bi,...Li,...Ei,...Wi,...ln,...Ji};function pr({record:t,options:e}){if(i.isArray(t))return t.map(o=>pr({record:o,options:e}));let r=i.record_type(t);if(!r)return t;let n=p.url.getUrl(e.baseUrl,"/execute"),s=i.ref(t);for(let o of Object.keys(t?.record||t))t=i.setValues(t,o,pr({record:i.getValues(t,o),options:e}));return r=="Action"&&i.isPotential(t)&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),t}function tl({website:t,webpage:e,title:r,url:n,headContent:s,content:o,records:l,properties:u,headers:d,offset:c,limit:f,options:g}){return o=o??"",o+=D.Table({url:n,records:l,properties:u,headers:d,offset:c,limit:f,options:g}),ue({website:t,webpage:e,title:r,headContent:s,content:o,options:g})}function rl({website:t,webpage:e,title:r,url:n,headContent:s,content:o,record:l,properties:u,headers:d,options:c}){return o=o??"",o+=D.Record({url:n,record:l,options:c}),ue({website:t,webpage:e,title:r,headContent:s,content:o,options:c})}var nl={blankPage:ue,recordsPage:tl,recordPage:rl,cardsPage:Ja};var il={blocks:D,...nl,components:ne,...ne};var zi={};m(zi,{getParsedRequest:()=>lh});function lh(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var sl={shadcn:il,express:zi};var Se={};m(Se,{_getDate:()=>ht,compile:()=>hr,compileOverwrite:()=>al,datapointsToRecord:()=>Qi,dedupe:()=>Xi,eq:()=>uh,ge:()=>Yi,getConfidence:()=>E,getDataFeedItem:()=>ph,getDatapoint:()=>qi,getExecutionID:()=>fh,getModifiedDate:()=>L,gt:()=>Fe,isEqual:()=>mt,le:()=>Ki,lt:()=>Gi,merge:()=>ch,recordToDatapoints:()=>Zi,sameObject:()=>ol,sameObjectAndProperty:()=>ie,sort:()=>gr,toString:()=>_e});function _e(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return i.isArray(t)?i.format.toTextTable(t,e):i.format.toTextRecord(t,e)}function mt(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r,n;return r=i.getValue(t,"value"),n=i.getValue(e,"value"),!(i.record_id(r)!=i.record_id(n)||r!=n||(r=i.getValue(t,"instrument"),n=i.getValue(e,"instrument"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"agent"),n=i.getValue(e,"agent"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"execution"),n=i.getValue(e,"execution"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeed"),n=i.getValue(e,"datafeed"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeedItem"),n=i.getValue(e,"datafeedItem"),i.record_id(r)!=i.record_id(n)))}function ol(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"object"),n=i.getValue(e,"object");return i.record_id(r)==i.record_id(n)}function ie(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"propertyID"),n=i.getValue(e,"propertyID");return ol(t,e)&&r==n}function uh(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let s=L(t),o=L(e);return!(s==null&&o!=null||s!=null&&o==null||+s!=+o)}function Gi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let s=L(t),o=L(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s<+o:!1}function Ki(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let s=L(t),o=L(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s<=+o:!0}function Fe(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let s=L(t),o=L(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s>+o:!1}function Yi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let s=L(t),o=L(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s>=+o:!0}function dh(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e))return Fe(t,e);let r=i.getValue(t,"object"),n=i.getValue(e,"object"),s=r?.["@id"]||"",o=n?.["@id"]||"",l=s.split("#")?.[1],u=o.split("#")?.[1];if(l!=u)return l<u?-1:1;if(s!=o)return r<n?-1:1;let d=i.getValue(t,"propertyID"),c=i.getValue(e,"propertyID");return d!=c?d<c?-1:1:0}function gr(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,dh(e,r))),t}function ch(t,e){if(mt(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function Xi(t){t=i.toArray(t);let e=[];for(let r of t)e.find(s=>mt(r,s))||e.push(r);return e}function E(t){t=t?.record??t;let e=i.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function fh(t){t=t?.record??t;let e=i.getValue(t,"execution");return i.record_id(e)}function L(t){t=t?.record??t;let e;return e=e||ht(t,"dataFeedItem.dateDeleted"),e=e||ht(t,"dataFeedItem.dateModified"),e=e||ht(t,"dataFeedItem.dateCreated"),e=e||ht(t,"observationDate"),e}function ht(t,e){let r=i.getValue(t,e);return p.toDate(r)}function Zi(t,e,r){function n(s,o,l,u,d){let c=[];if(i.isArray(l)){for(let f of l)c=c.concat(n(s,o,f,u,d));return c}if(l?.["@id"]){o&&c.push(qi(s,o,{"@id":l?.["@id"]},u,d));let f={"@id":l?.["@id"]};for(let g of Object.keys(l))g!="@id"&&(c=c.concat(n(f,g,l[g],u,d)));return c}return[qi(s,o,l,u,d)]}return r=r??i.randomUUID(),n(void 0,void 0,t,e,r)}function Qi(t){t=i.toArray(t),t=t.map(n=>n?.record??n);let e={};t=hr(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let s=i.getValue(n,"object"),o=i.record_id(s),l=i.getValue(n,"propertyID"),u=i.getValue(n,"value");e[o]=e?.[o]||{"@id":o},e[o]=i.addValues(e[o],l,u)}e=Object.keys(e).map(n=>e[n]);let r=new i.DB;return r.set(e),e=r.search(),e=i.simplify(e),e}function qi(t,e,r,n={},s=i.randomUUID()){return{"@type":"Datapoint","@id":i.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:s,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function hr(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(s=>!al(r,s)),e=e.slice(1);let n=t.map(s=>s?.["@id"]);e=e.filter(s=>n.includes(s?.["@id"]))}return t}function al(t,e){if(t=t?.record??t,e=e?.record??e,i.getValue(t,"operation")=="AddAction"||ie(t,e)==!1||i.getValue(t,"valueGroupID")==i.getValue(e,"valueGroupID"))return!1;if(i.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&Fe(t,e)}return Fe(t,e)}function ph(t,e,r,n,s){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:s}}var C=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=kt.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=i.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var de=class extends C{constructor(e,r,n,s,o,l,u){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=s??this.dataFeed,this.dataFeedItem=o??this.dataFeedItem,this.agent=l??this.agent,this.instrument=u??this.instrument)}toString(){return _e(this.record)}set(e,r,n,s,o,l,u){this.c=e,this.d=r,this.execution=n,this.dataFeed=s,this.dataFeedItem=o,this.agent=l,this.instrument=u}get dataFeed(){return new C(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new C(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new C(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new C(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new C(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new C(e,"Person"),this.setValue("agent",e)}get instrument(){return new C(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new C(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new C(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new C(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var ce=class extends de{constructor(e,r,n,s){super({},"DataPoint"),i.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),s&&(this.metadata=s)}toString(){return _e(this.record)}lt(e){return Gi(this.record,e?.record??e)}le(e){return Ki(this.record,e?.record??e)}gt(e){return Fe(this.record,e?.record??e)}ge(e){return Yi(this.record,e?.record??e)}get object(){return new C(this.getValue("object"))}set object(e){e=e?.record?e:new C(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var mr=class extends de{constructor(e,r,n,s,o,l,u){super(e,r,n,s,o,l,u),this._dataPoints=[]}get dataPoints(){return gr(this._dataPoints)}set dataPoints(e){this._dataPoints=gr(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return _e(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return i.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,s){if(s=s??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let o=new ce(e,void 0,void 0,s);return this._dataPoints.push(o),o}if(e&&!r)return this.#e(void 0,void 0,e,s);if(e&&r){let o=new ce(e,r,n,s);return this._dataPoints.push(o),o}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return Qi(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,s){let l=Zi(n,s).map(u=>new ce(u));this.dataPoints=this.dataPoints.concat(l)}#t(e){if(i.isArray(e))return e=Xi(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>mt(n,e))||this._dataPoints.push(e)}};var es={};m(es,{analyzeDataPoints:()=>hh,toString:()=>gh});function gh(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return i.isArray(t)?gt.toTextTable(t,e):gt.toTextRecord(t,e)}function hh(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(mh(t,n));return r}function mh(t,e){t=t.filter(s=>s.object["@id"]==e);let r=t.map(s=>s.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let s of r)console.log("rr",e,s),n=n.concat(yh(t,e,s));return n}function yh(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],s=t.filter(d=>d.object["@id"]==e&&d.propertyID==r),o=hr(s),l,u=[];for(let d of n){l=s.map(g=>i.getValue(g,d));let c={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:d,dataPointType:"ALL",N:l.length,uniqueN:[...new Set(l)].length};u.push(c),l=o.map(g=>i.getValue(g,d));let f={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:d,dataPointType:"ACTIVE",N:l.length,uniqueN:[...new Set(l)].length};u.push(f)}return u}var ll={...Se,DataPoint:ce,DataPointDB:mr,Metadata:de,analysis:es};function ts(t,e){if(i.isArray(t))return t.map(n=>ts(n,e));let r=i.record_type(t);if(r=="ReplaceAction")return bh(t,e);if(r=="UpdateAction")return xh(t,e);if(r=="MoveUpAction")return Vh(t,e);if(r=="MoveDownAction")return wh(t,e)}function bh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let o of n)s["@id"]=i.record_id(o)||i.record_id(s),e.set(s),i.addValue(t,"result",s);return t=i.setCompleted(t),t}function xh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let o of n){let l=e.get(o);o=o||{"@id":i.record_id(o)},o=i.patch(o,s),e.set(o),t=i.addValue(t,"result",o)}return t=i.setCompleted(t),t}function Vh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let o of n){let l=e.get(o);l=helpers.things.ItemList.moveUp(l,s),e.set(l),t=i.addValue(t,"result",l)}return i.setCompleted(t),t}function wh(t,e){let r=i.getValues(t,"object"),n=i.getValues(t,"targetCollection");for(let s of r)for(let o of n){let l=e.get(o);l=helpers.things.ItemList.moveDown(l,s),e.set(l),t=i.addValue(t,"result",l)}return i.setCompleted(t),t}function yr(t,e){if(!t)return t;if(i.isArray(t))return t.map(n=>yr(n,e));if(i.isObject(t)==!1)return t;let r=i.record_type(t);if(!r)return t;r=="Action"&&(t=Sh(t,e)),r=="ItemList"&&(t=_h(t,e));for(let n of Object.keys(t))t[n]=yr(t[n],e);return t}function _h(t,e){let r=i.getValues(t,"itemListElement"),n=i.getValues(t,"numberOfItems");for(let s=0;s<r.length;s++){let o=i.getValue(r[s],"position");o>0&&(r[s]=Ih(r[s],t,e)),o<n-1&&(r[s]=$h(r[s],t,e)),r[s]=kh(r[s],t,e),r[s]=Th(r[s],t,e)}return t}function Sh(t,e){let r;return i.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=se(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),i.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),i.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),t}function se(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=i.record_id(t);let s={"@type":"UpdateAction",name:n,object:r,targetCollection:i.ref(t),url:e};return t=i.addValue(t,"potentialAction",s),t}function Ih(t,e,r,n){n=n||"Move up";let s={"@type":"MoveUpAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function $h(t,e,r,n){n=n||"Move down";let s={"@type":"MoveDownAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function kh(t,e,r,n){n=n||"Delete";let s={"@type":"DeleteAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}function Th(t,e,r,n){n=n||"Duplicate";let s={"@type":"DuplicateAction",name:n,object:i.ref(t),targetCollection:i.ref(e),url:r};return t=i.addValue(t,"potentialAction",s),t}var ul={add:yr,execute:ts};var dl={...i,jsonldBase:i,...w,things:w,rdf:di,...oe,recordIDHelpers:oe,dataHelpers:p,...Wt,transformHelpers:Wt,records:S,disk:re,datapointHelpers:ll,format:gt,html:sl,potentialAction:ul},rs=dl,Ie=dl;var xr={};m(xr,{ApiDB:()=>ns});var br={};m(br,{CacheDB:()=>yt});var yt=class{constructor(e){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(e))?void 0:Number(e)}getAll(e=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,e));return r}get(e,r=!0){if(i.isArray(e))return e.map(l=>this.get(l));if(e=i.toRecordID(e),!this._cache?.[e]||!this._cache?.[e]?.modifiedDate)return;let s=new Date-this._cache[e].modifiedDate;if(this._expiryDuration===void 0&&s>this._expiryDuration){this._cache[e]=void 0;return}let o=this._cache[e]?.value;return r===!0&&(o=i.expand(this.getAll(!1),o)),o=i.simplify(o),o}set(e){let r=i.flatten(e);for(let n of r){let s=i.record_id(n);this._cache[s]=this._cache?.[s]||{},this._cache[s].value=i.isRef(n)&&this._cache[s]?.value||n,this._cache[s].modifiedDate=new Date}}post(e){return this.set(e)}getSearch(e){if(e=e||"all",!this._searchCache?.[e])return[];if(!this._searchCache?.[e]?.modifiedDate)return;let n=new Date-this._searchCache[e].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[e]=void 0;return}let s=this._searchCache[e]?.value;return s=i.expand(this.getAll(!1),s),s}setSearch(e,r){r=i.toArray(r),this.set(r),this._searchCache[e]=this._searchCache?.[e]||{},this._searchCache[e].value=r,this._searchCache[e].records=i.flatten(r),this._searchCache[e].modifiedDate=new Date}};var ns=class{constructor(e,r,n){this._base_url=e,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new yt}async get(e){e=Ie.toRecordID(e);let r=this._cacheDB.get(e);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,s=Ie.dataHelpers.url.getUrl(this._base_url,n,{record_id:e}),l=await(await fetch(s)).json();return this._cacheDB.set(l),console.log("record retrieved from db"),l}async search(e,r,n,s,o){let l={...e};r&&(l.offset=r),n&&(l.limit=n),s&&(l.orderBy=s),o&&(l.orderDirection=o),console.log("pp",l);let u="/"+this._databaseID+"/"+this._tenantID,d=Ie.dataHelpers.url.getUrl(this._base_url,u,l);console.log("url",d);let f=await(await fetch(d)).json(),g=Ie.getResult(f);return this._cacheDB.setSearch(l,g),console.log("record retrieved from db"),g}async post(e){let n=Ie.dataHelpers.url.getUrl(this._base_url,"/"),o=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),l=Ie.getResults(o);return this._cache.set(l),l.length==1?l[0]:l}};var wr={};m(wr,{ApiClient:()=>Vr,default:()=>Nh});var Vr=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await is(this.headers,this.baseUrl,e,r)}async post(e,r){return await cl(this.headers,this.baseUrl,e,r)}async patch(e,r){return await Dh(this.headers,this.baseUrl,e,r)}async delete(e,r){return await ss(this.headers,this.baseUrl,e,r)}async test(e){return await Ch(this.headers,this.baseUrl,e)}},Nh={ApiClient:Vr};async function is(t,e,r,n){let s=new w.Action;s.name="API Get",s.instrument=new w.WebAPI(e),s.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=p.url.getUrl(e,r,n),u={headers:{...t||{},...{}},method:"GET"},d=await fetch(o,u);if(d.status>=300)return s.setFailed(d.statusText),s;let c=await d.json();return s.setCompleted(c),s}catch(o){return s.setFailed(String(o)),s}}async function cl(t,e,r,n){let s=new w.Action;s.name="API Post",s.instrument=new w.WebAPI(e);try{let o=p.url.getUrl(e,r,{}),u={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},d=await fetch(o,u);if(d.status>=300)return console.log(o),console.log(d.statusText),s.setFailed(d.statusText),s;let c=await d.json();return s.setCompleted(c),s}catch(o){return console.log(url),console.log(o),s.setFailed(String(o)),s}}async function Dh(t,e,r,n){let s=new w.Action;s.name="API Post",s.instrument=new w.WebAPI(e);try{let o=p.url.getUrl(e,r,{}),u={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},d=await fetch(o,u);if(d.status>=300)return s.setFailed(d.statusText),s;let c=await d.json();return s.setCompleted(c),s}catch(o){return s.setFailed(String(o)),s}}async function ss(t,e,r,n){let s=new w.Action;s.name="API Get",s.instrument=new w.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=p.url.getUrl(e,r,n),u={headers:{...t||{},...{}},method:"DELETE"},d=await fetch(o,u);if(d.status>=300)return s.setFailed(d.statusText),s;let c=await d.json();return s.setCompleted(c),s}catch(o){return s.setFailed(String(o)),s}}async function Ch(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},s=new w.Action,o={filter:{"@id":n["@id"]}},l;return l=await ss(t,e,r,o),s.hasPart=s.hasPart.concat(l.record),(await l).isFailed?(s.setFailed("Error step1 delete record"),s.record):(l=await cl(t,e,r,n),s.hasPart=s.hasPart.concat(l.record),(await l).isFailed?(s.setFailed("Error step2 create record"),s.record):(l=await is(t,e,r,o),s.hasPart=s.hasPart.concat(l.record),(await l).isFailed?(s.setFailed("Error step3 get record"),s.record):l.result[0]?.["@id"]!=n?.["@id"]?(s.setFailed("Error step3 got wrong record"),s.record):(l=await ss(t,e,r,o),s.hasPart=s.hasPart.concat(l.record),(await l).isFailed?(s.setFailed("Error step4 delete record"),s.record):(l=await is(t,e,r,o),s.hasPart=s.hasPart.concat(l.record),(await l).isFailed?(s.setFailed("Error step5 get record"),s):l.result?.name==n?.name?(s.setFailed("Error step5 record still exist"),s):(s.setCompleted(),s.record)))))}var _r={};m(_r,{DiskDB:()=>os});var os=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new w.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(i.isArray(e)){for(let n of e){let s=await this._set(n);r.addPart(s)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),s=i.record_id(e),o=Ar(s),l=await re.save(this.path,o,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new w.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new i.DB;n.set(e);for(let s of n){let o=new w.Action("Saving record "+i.record_id(s));try{let l=JSON.stringify(s,null,4),u=i.record_id(s),d=Ar(u),c=await re.save(this.path,d,l);o.setCompleted(s),r.addPart(o)}catch(l){o.setFailed(String(l)),r.addPart(o)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new w.Action("Get record from db");if(r.object=i.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(i.isArray(e)){let o=[];for(let l of e){let u=await this._get(l);r.addPart(u),o=o.concat(i.toArray(u.result))}return r.setCompleted(o),r.record}let n=Ar(e),s=await re.load(this.path,n);if(!s||s=="")return r.setFailed("No records found"),r.record;try{let o=JSON.parse(s);return o=i.simplify(o),r.setCompleted(o),r.record}catch(o){return r.setFailed(o),r.record}}async _getNested(e){let r=new w.Action("Get nested record");r.object=i.ref(e);let n=new i.DatabaseHelper({"@id":e});for(;n.isActive;){let s=n.next,o=await this._get(s);r.addPart(o),o?.result?i.toArray(o.result).map(l=>n.add(l||i.ref(l))):n.add(i.ref(s))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new w.Action("Get all records"),n;try{n=await re.dir.list(this.path),n=n||[],n=i.toArray(n)}catch(l){return r.setFailed(l),r.record}if(n.length==0)return r.setCompleted([]),r.record;let s=n.map(l=>jh(l)),o=await this.get(s,e);return r.addPart(o),r.setCompleted(o.result),r.record}async exists(e){let r=await this.get(e,!1);return i.isCompleted(r)}async delete(e){let r=new w.Action("Delete record");if(r.object=i.ref(e),!e)return r.setCompleted(),r.record;if(i.isArray(e)){for(let n of e){let s=await this.delete(n);r.addPart(s)}return r.setCompleted(),r.record}e=i.toRecord_id(e);try{let n=Ar(e),s=await re.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new w.Action("Purge database");try{let r=await re.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function Ar(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function jh(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}var as={apiDB:xr,...xr,apiClient:wr,...wr,cacheDB:br,...br,diskDB:_r,..._r};var ls={...rs,helpers:rs,...as,tools:as},oA=ls,aA=ls,lA=ls;export{ls as _h,lA as default,aA as h,oA as helpers,S as records,y as transformHelpers};
//# sourceMappingURL=index.js.map
