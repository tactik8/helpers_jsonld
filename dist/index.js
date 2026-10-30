var Ya=Object.defineProperty;var g=(t,e)=>{for(var r in e)Ya(t,r,{get:e[r],enumerable:!0})};var $e={get:Me,set:xt,flatten:Xa,expand:Za};function Me(t,e){if(!e||typeof e!="string")return;let r=ss(e),n=t;for(let i of r)isNaN(i)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[i];return n}function xt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=ss(e);if(n.length==0)return r;let i=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let o=t;for(let a=0;a<n.length-1;a++){let l=n[a],u=n[a+1],d=!isNaN(u);d==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),d==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,t}function Xa(t){function e(i,o){let a=[];return Array.isArray(o)?(i=i||"",o.map((u,d)=>e(`${i}[${String(d)}]`,u)).flat()):o?.["@type"]||o?.["@id"]?(i=i&&i!=""?i+".":"",Object.keys(o).map(u=>e(`${i}${u}`,o[u])).flat()):[{propertyID:i,value:o}]}let r=e("",t),n={};return r.forEach(i=>n[i.propertyID]=i.value),n}function Za(t){let e={};return Object.keys(t).forEach(r=>xt(e,r,t?.[r])),e}function ss(t){let e=[],r="",n=["[","]","."];for(let i of t)if(n.includes(i)){r!=""&&e.push(r),r="";continue}else r=r+i;return e.push(r),e=e.filter(i=>i!=""),e=e.map(i=>isNaN(Number(i))?i:Number(i)),e}var Sr={};g(Sr,{eq:()=>il,ge:()=>ul,getDiff:()=>as,getHash:()=>os,getHashNested:()=>dl,gt:()=>ll,isEqual:()=>sl,isSame:()=>nl,le:()=>al,lt:()=>ol});var Vt={};g(Vt,{expand:()=>el,flatten:()=>tl,getChildren:()=>rl,handleRelationships:()=>Ar,simplify:()=>_r,strip:()=>wr});function el(t,e,r=!0){let n=s._storeToMap(t),i=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(p=>o(p));let l=s.record_id(a);if(l&&i.has(l)){let p=i.get(l);return r?p:s.ref?s.ref(p):{"@id":l}}let d=(l&&n instanceof Map?n.get(l):null)||a,c=Array.isArray(d)?[...d]:{...d};l&&i.set(l,c);for(let p of Object.keys(c))p==="previousItem"||p==="nextItem"||(c[p]=o(c[p]));return c}return typeof e=="string"&&(e={"@id":e}),o(e)}function wr(t){function e(r,n,i){if(Array.isArray(r))return r.map(o=>e(o,n,i));if(r?.["@type"]||r?.["@id"]){if(i>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=e(r?.[a],n,i+1);return o}}return r}return e(t,0,0)}function tl(t){function e(n){let i=[];if(!n)return[];if(s.isArray(n)){let o=[];for(let a of n)o=o.concat(e(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=s.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=s.ref(n?.[o]);continue}let a=n[o];a=s.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),i=i.concat(e(l))}return i=[n].concat(i),i}t=s.clone(t),t=s.setTempID(t),t=Ar(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>s.isRef(n)===!1),r}function Ar(t){if(s.isArray(t))return t.map(r=>Ar(r));let e=t;if(s.record_type(e)=="Product"){let r=s.getValues(e,"offers");r=r.map(o=>s.insertValue(o,"itemOffered",s.ref(e))),e=s.setValues(e,"offers",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}if(s.record_type(e)=="Offer"){let r=s.getValues(e,"itemOffered");r=r.map(o=>s.insertValue(o,"offers",s.ref(e))),e=s.setValues(e,"itemOffered",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}return e}function _r(t){function e(n,i=0){if(i>20)return n;if(i+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>e(o,i)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=e(n?.[a],i);a=="itemListElement"&&(l=s.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=s.toArray(o?.["@id"])?.[0],o}return n}}return t=s.clone(t),e(t)}function rl(t){function e(r,n){if(s.isArray(r)){let o=[];for(let a of r){let l=e(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let i=[];n>0&&i.push(r);for(let o of Object.keys(r))i=i.concat(e(r[o],n+1));return i=i.filter(o=>o),i}return e(t,0)}function nl(t,e){if(t=s.record_id(t)??t,e=s.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function il(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=s.clean(t),e=s.clean(e),t=s.strip(t),e=s.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function sl(t,e){let r=(i,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{t=s.JSON_stringify(t)}catch{}try{e=s.JSON_stringify(e)}catch{}return t==e}function ol(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function al(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function ll(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function ul(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function os(t,e=!1){t=_r(t),e==!1&&(t=wr(t));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((u,d)=>({...u,[d]:r(l[d])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(t)),i=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(i)return i.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function dl(t){return os(t,!0)}function as(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let i=as(t[n],e[n]);i!==null&&(r[n]=i)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var Ir={};g(Ir,{evaluate:()=>$r});function $r(t,e){let r=[];for(let i of Object.keys(e)){let o=i,a=e?.[i];if(a=s.toArray(a),o=="$and")return a.every(l=>$r(t,l));if(o=="$or")return a.some(l=>$r(t,l));for(let l of a){let u=fl(t,o,l);r.push(u)}}return r.every(i=>cl(i.r,i.p,i.o,i.v))}function cl(t,e,r,n){try{let i=$e.get(t,e);if(typeof i=="string"&&(i=i.trim()),typeof n=="string"&&(n=n.trim()),i=isNaN(Number(i))?i:Number(i),n=isNaN(Number(n))?n:Number(n),r=="$equal")return i==n;if(r=="$lt")return i<n;if(r=="$gt")return i>n;if(r=="$le")return i<=n;if(r=="$ge")return i>=n;if(r=="$same")return i?.["@id"]&&i?.["@id"]===n?.["@id"];if(r=="$includes")return i.includes(n)}catch(i){return console.log("err",i),!1}}function fl(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var tn={};g(tn,{assignId:()=>Gl,getGenericRecordID:()=>ql,normalizeRecordId:()=>Jl,replaceIds:()=>As,setTempID:()=>ws});var se={};g(se,{default:()=>El,get:()=>X,getGenericRecordID:()=>Xe,getStandardID:()=>kt,recordIdHelpers:()=>It,set:()=>St,validate:()=>Ye});var Tr={};g(Tr,{clean:()=>pl,isArray:()=>ge,isNotArray:()=>kr,isValid:()=>gl,toArray:()=>wt});function pl(t){return wt(t)}function gl(t){return ge(t)}function ge(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function kr(t){return!ge(t)}function wt(t){return t==null?[]:(t=ge(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var Dr={};g(Dr,{clean:()=>Pr,format:()=>ml,formatDate:()=>ls,isDate:()=>Y,isNotDate:()=>Nr,isValid:()=>hl,toDate:()=>Ie});function Pr(t,e=void 0){return Ie(t)||e}function hl(t){return Y(t)}function ml(t,e=!1){return ls(t,e)}function Y(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Nr(t){return!Y(t)}function Ie(t){if(t===void 0)return;if(Y(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=Y(t)?t:void 0,t}function ls(t,e=!1){if(console.log("vv",t,Ie(t)),t=Ie(t),Y(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),i=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${i}-${o}`;if(e==!0){let l=String(r.getHours()).padStart(2,0),u=String(r.getMinutes()).padStart(2,0),d=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${u}:${d}`}return a}var jr={};g(jr,{clean:()=>yl,isNotNull:()=>Cr,isNull:()=>Te,isValid:()=>bl});function yl(t,e=void 0){}function bl(t){return Te(t)}function Cr(t){return!Te(t)}function Te(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||ke.array.isValid(t)?t.length==0:t instanceof Date?ke.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Or={};g(Or,{clean:()=>Rr,format:()=>Vl,formatDecimals:()=>us,isNotNumber:()=>vr,isNumber:()=>Ee,isValid:()=>xl,toNumber:()=>At});function Rr(t,e=void 0){return At(t)??e}function xl(t){return Ee(t)}function Vl(t,e){return us(t,e)}function us(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function Ee(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function vr(t){return!Ee(t)}function At(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Br={};g(Br,{clean:()=>wl,cleanObject:()=>Le,isNotObject:()=>Ur,isObject:()=>We,isValid:()=>Al});function wl(t,e=void 0){return Le(t)||e}function Al(t){return We(t)}function We(t){return typeof t!="object"||t===null||Array.isArray(t)||t===void 0||f.isString(t)==!0||f.isDate(t)==!0||f.isNumber(t)==!0||f.isArray(t)==!0?!1:Object.keys(t).length>0}function Ur(t){return!We(t)}function Le(t){if(f.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],Le(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(Le(x));e=e.filter(r=>f.isNotNull(r))}}if(f.object.isValid(t))for(let e of Object.keys(t))t[e]=Le(t[e]),ke.isNull(t[e])&&delete t[e];return ke.isNotNull(t)?t:void 0}var Mr={};g(Mr,{clean:()=>_l,cleanString:()=>ds,isNotString:()=>Hr,isString:()=>Pe,isValid:()=>Sl,maxLengthEnd:()=>Il,maxLengthMiddle:()=>$l,toString:()=>Fr});function _l(t,e=""){return ds(t)||e}function Sl(t){return Pe(t)&&t.trim().length>=0}function $l(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),i=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-i)}function Il(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function Pe(t){return typeof t=="string"||t instanceof String}function Hr(t){return!Pe(t)}function Fr(t){return t==null?"":String(t)}function ds(t){return Pe(t)?t.trim():void 0}var Jr={};g(Jr,{clean:()=>cs,cleanUrl:()=>ps,getDomain:()=>kl,getParams:()=>Tl,getPath:()=>hs,getUrl:()=>fs,isNotUrl:()=>Wr,isUrl:()=>Je,isValid:()=>Er,setParams:()=>gs,setPath:()=>ms,toUrl:()=>Lr});function Er(t){return Je(t)}function cs(t,e=void 0){return ps(t)??e}function Lr(t,e,r,n=void 0){return fs(t,e,r)||n}function fs(t,e,r){let n=ms(t,e);return r&&(n=gs(n,r)),n}function Je(t){return t=cs(t),!!t}function Wr(t){return!Je(t)}function ps(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:i=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=e;try{let l=new URL(t);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let u=l.pathname;if(u=u.replace(/\/+/g,"/"),o&&(u=u.toLowerCase()),i&&u.length>1&&u.endsWith("/")&&(u=u.slice(0,-1)),l.pathname=u,r){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],c=Array.from(l.searchParams.keys());for(let p of c){let b=d.some(E=>p.toLowerCase().startsWith(E)),S=a.includes(p);b&&!S&&l.searchParams.delete(p)}}return l.searchParams.sort(),l.toString()}catch{return}}function kl(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function Tl(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function gs(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function hs(t){try{return new URL(t).pathname}catch{return}}function ms(t,e){e=e??"";let r=[],n=hs(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let o of e)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let i="/"+r.join("/");try{return new URL(i,t).toString()}catch(o){console.log(o,i,t);return}}var Gr={};g(Gr,{clean:()=>Pl,format:()=>Dl,isDuration:()=>Ne,isNotDuration:()=>zr,isValid:()=>Nl,toDuration:()=>qr});function Pl(t,e=void 0){return toDate(t)||e}function Nl(t){return Ne(t)}function Dl(t){return jl(t)}function Ne(t){return Cl(t)}function zr(t){return!Ne(t)}function qr(t){return t}function Cl(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function jl(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,i,o,a,l,u,d,c]=r.map(S=>parseInt(S,10)||0),p=[u,d,c].map(S=>String(S).padStart(2,"0")).join(":"),b=[];return i&&b.push(`${i}y`),o&&b.push(`${o}m`),a&&b.push(`${a}w`),l&&b.push(`${l}d`),b.length>0?`${b.join(" ")} ${p}`:p}var Yr={};g(Yr,{clean:()=>Rl,format:()=>Ol,isBoolean:()=>ze,isNotBoolean:()=>Kr,isValid:()=>vl,toBoolean:()=>qe,toString:()=>Ul});function Rl(t){return qe(t)}function vl(t){return ze(t)}function Ol(t){return qe(t)}function Ul(t){return String(t)}function ze(t){return typeof t=="boolean"}function Kr(t){return typeof t!="boolean"}function qe(t){if(ze(t))return t;if(typeof t=="string"){if(t.toLowerCase()=="true")return!0;if(t.toLowerCase()=="false")return!1}if(!isNaN(t)){if(t==0)return!1;if(valeu==1)return!0}}var Qr={};g(Qr,{clean:()=>Bl,format:()=>Fl,fromJson:()=>Zr,isJson:()=>Ge,isNotJson:()=>Xr,isValid:()=>Hl,toJson:()=>Ke});function Bl(t){return Ke(t)}function Hl(t){return Ge(t)}function Fl(t){return Ke(t)}function Ge(t){if(!t)return!1;if(typeof t=="string"){try{if(JSON.parse(t))return!0}catch{}return!1}}function Xr(t){return!Ge(t)}function Ke(t){let e=()=>{let r=new WeakSet;return(n,i)=>{if(typeof i=="object"&&i!==null){if(r.has(i))return;r.add(i)}return i}};try{return JSON.stringify(t,e(),4)}catch{}}function Zr(t){try{return JSON.parse(t)}catch{}}var f={isNull:Te,isNotNull:Cr,isArray:ge,isNotArray:kr,toArray:wt,isDate:Y,isNotDate:Nr,toDate:Ie,isDuration:Ne,isNotDuration:zr,toDuration:qr,isObject:We,isNotObject:Ur,isNumber:Ee,isNotNumber:vr,toNumber:At,isString:Pe,isNotString:Hr,toString:Fr,isUrl:Je,isNotUrl:Wr,toUrl:Lr,isBoolean:ze,isNotBoolean:Kr,toBoolean:qe,isJson:Ge,isNotJson:Xr,toJson:Ke,fromJson:Zr,array:Tr,boolean:Yr,date:Dr,duration:Gr,json:Qr,null:jr,number:Or,object:Br,string:Mr,url:Jr,getDataType:ys,getType:ys,getJsonSchema:Ml},ke=f;function ys(t){if(Te(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(ge(t))return"Array";if(Y(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(Er(t))return"URL";if(Pr(t))return"DateTime";if(Ne(t))return"Duration";if(Rr(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function Ml(t){function e(r,n=0){let i={};if(n==0&&(i.$schema="https://json-schema.org/draft/2020-12/schema",i.title=r?.["@type"]||""),f.isString(r))return i.type="string",i;if(f.isObject(r)){i.type="object",i.properties={};for(let o of Object.keys(r))i.properties[o]=e(r[o],n+1);return i}if(f.isNumber(r))return i.type="number",i;if(f.isArray(r))return i.type="array",i.items=e(r?.[0],n+1),i}return e(t,0)}var Eh=globalThis.crypto.randomUUID,It={get:X,set:St,validate:Ye,getGenericRecordID:Xe,getStandardID:kt},El=It,_t={website:"domain",webpage:"url",offer:"url",brand:"domain"};function X(t,e){if(!t||!t?.["@type"])return;let r=bs(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let i=_t?.[n];if(i=="url")return xs(n,$t(t));if(i=="domain")return Vs(n,$t(t))}return Xe(e)}function kt(t,e){if(!t||!t?.["@type"])return;let r=bs(t);for(let n of r){let i=_t?.[n];if(i=="url")return xs(n,$t(t));if(i=="domain")return Vs(n,$t(t))}}function St(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>St(r,e));if(t?.["@type"]||t?.["@id"]){Ye(t)==!1&&(t["@id"]=X(t,e));for(let r of Object.keys(t))t[r]=St(t?.[r],e)}return t}function Ye(t,e){let r=t?.["@id"];return r?Ll(t)?getStandardizedRecordId(t,e)==r:en(t?.["@id"],e)==r:!1}function Ll(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(_t?.[r])return _t?.[r]}function bs(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function $t(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function Xe(t){return t=en(t),t?(t.endsWith("/")||(t=t+"/"),en(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function xs(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>f.url.clean(i)),e=e.filter(i=>i);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function Vs(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>Wl(i)),e=e.map(i=>"https://"+i),e=e.filter(i=>i);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function Wl(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function en(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let i=n.toString();return i.endsWith("/")&&!t.endsWith("/")&&(i=i.slice(0,-1)),i}catch{return null}}function Jl(t,e){t=ws(t);let r=zl(t,e);return As(t,r)}function zl(t,e){function r(i,o){if(o=o||"https://www.test.com/",s.isArray(i)){let l=[];for(let u of i)l=l.concat(r(u));return l}if(s.isObject(i)==!1)return[];let a=[{replacee:s.record_id(i),replacer:X(i,o)}];for(let l of Object.keys(i))a=a.concat(r(i[l],o));return a}let n=r(t,e);return n=n.filter(i=>i),n}function ws(t){if(Array.isArray(t))return t.map(e=>s.assignId(e));if(s.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+s.randomUUID();for(let e of Object.keys(t))t[e]=s.assignId(t[e]);return t}function ql(t){return Xe(t)}function Gl(t,e=[]){if(s.isArray(t))return t.map(r=>s.assignId(r,e));if(s.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+s.randomUUID(),t[r]=s.assignId(t[r],e);return t}function As(t,e){function r(n,i){if(Array.isArray(n))return n.map(l=>s.replaceIds(l,i));if(!n?.["@id"])return n;let o=n?.["@id"],a=i.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=s.replaceIds(n?.[l],i);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(i=>n.set(i.replacee,i.replacer)),e=n}return r(t,e)}var sn={};g(sn,{DB:()=>nn,_storeToMap:()=>Qe,_storeToOriginal:()=>Ql,getRecord:()=>Ze,getRecords:()=>De,patchRecord:()=>Cs,postRecord:()=>Ds});var rn={};g(rn,{Value:()=>Kl,ValueArray:()=>$s,ValueDateTime:()=>ks,ValueDuration:()=>Yl,ValueMonetaryAmount:()=>Xl,ValueNumber:()=>Ts,ValueRecordId:()=>_s,ValueRecordType:()=>Ss,ValueText:()=>Ps,ValueThing:()=>Ns,ValueUrl:()=>Is});function Kl(t,e,r){return!t&&t!==0?"":s.isArray(t)?$s(t,e,r):e=="@type"?Ss(t,e,r):e=="@id"?_s(t,e,r):s.isObject(t)?Ns(t,e,r):s.isNumber(t)?Ts(t,e,r):s.isDate(t)?ks(t,e,r):f.isUrl(t)?Is(t,e,r):Ps(t,e,r)}function _s(t,e,r){let n=s.getRecordUrl({"@id":t},r),i=`<a title="${t}" href="${n}">${t}</a>`;return Z(i,e)}function Ss(t,e,r){let n=f.url.getUrl(r,t),i=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return Z(i,e)}function $s(t,e,r){let n=t.length>0?`(${t.length})`:"";return Z(n,e)}function Is(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return Z(n,e)}function ks(t,e,r){t=s.toDate(t);let n=f.date.format(t);return Z(n,e)}function Yl(t,e,r){return f.duration.format(pv.value)}function Ts(t,e,r){let n=e=="position"?0:2;return t=s.toNumber(t),t=f.number.format(t,n),Z(t,e)}function Ps(t,e,r){return Z(t,e)}function Ns(t,e,r){let n=s.getRecordUrl(t,r),i=s.getName(t)||s.record_id(t);s.record_type(t)=="ListItem"&&(i=`ListItem ${s.getPosition(t)} - ${s.getValue(t,"item.name")||s.getValue(t,"@id")}`);let o=`<a title="${i}" href="${n}">${i}</a>`;return Z(o,e)}function Xl(t,e,r){let n=f.toNumber(s.getValue(pv.value,"value"));if(n===void 0)return pv;let i=f.number.format(n,2),o=s.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+i,o=="USD"&&(pv.htmlValue=o+" $"+i),o=="CAD"&&(pv.htmlValue=o+" $"+i),o=="EUR"&&(pv.htmlValue=o+" "+i+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+i+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",Z(pv,e)}function Z(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var nn=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,Ze(this._store,e,r)}getAll(e=!0){return De(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||s.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return De(this._store,e,r)}set(e){let r=s.flatten(e),n=r.map(i=>Ze(this._store,s.record_id(i),!1));for(let i of r)this._store=Ds(this._store,i);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=s.flatten(e),i=n.map(o=>Ze(this._store,s.record_id(o),!1));for(let o of n)this._store=Cs(this._store,o,r);return this._broadcastIfChanged(i,n),e}delete(e){let r=[this.get(e)];this._store=s.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,i){let o=this.get(e);return s.getValue(o,r,n,i)}getValues(e,r,n){let i=this.get(e);return s.getValues(i,r,n)}setValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}setValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}addValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValue(i,r,n),this.set(i)}addValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValues(i,r,n),this.set(i)}length(){return this._store.size}get records(){return De(this._store)}getRecords(e=!1){return De(this._store,void 0,!1)}get record_ids(){return Zl(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=s.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=s.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let i=this.get(e);return!i||s.isRef(i)?n:i}updateRefs(e,r={}){if(!e)return e;if(s.isArray(e))return e.map(n=>this.updateRefs(n,r));if(s.isObject(e)){if(s.isRef(e)){if(r?.[s.record_id(e)])return r[s.record_id(e)];e=this.get(e,!0)||e,r[s.record_id(e)]=e}for(let n of Object.keys(e))["previousItem","nextItem"].includes(n)||(e[n]=this.updateRefs(e[n],r));return e}return e}execute(e){let r=s.toArray(e);r=r.map(o=>this.updateRefs(o));let n=new s.DB;n.set(r);let i=[];for(let o of r)o=n.get(o),o=s.execute(o),i.push(o),n.set(s.getResults(o));return this.set(n.getAll()),i.length==1?i[0]:i}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(i=>i!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let i of r){let o=e.find(a=>s.record_id(a)==s.record_id(i));s.isEqual(o,i)||n.push(s.record_id(i))}this.broadcast(n)}broadcast(e){e=s.toArray(e),e=s.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),i=this._subscriptions.get(r)||[];i=i.concat(this._subscriptions.get("all")||[]),i=[...new Set(i)];for(let o of i)this._broadcastItem(o,n)}}async _broadcastItem(e,r){try{return e(r)}catch{}}static randomUUID(){return s.randomUUID()}static clean(e,r){return s.clean(e,r)}static flatten(e){return s.flatten(e)}static getValue(e,r,n,i){return s.getValue(e,r,n,i)}static getValues(e,r,n){return s.getValues(e,r,n)}static setValue(e,r,n,i){return s.setValue(e,r,n,i)}static setValues(e,r,n){return s.setValues(e,r,n)}static addValue(e,r,n){return s.addValue(e,r,n)}static addValues(e,r,n){return s.addValues(e,r,n)}static strip(e){return s.strip(e)}static get dot(){return $e}static ref(e){return s.ref(e)}static simplify(e){return s.simplify(e)}static isJsonld(e){return s.isJsonld(e)}static isValid(e){return s.isValid(e)}static isArray(e){return s.isArray(e)}static setAdditionalProperty(e,r,n,i){return s.setAdditionalProperty(e,r,n,i)}static getAdditionalProperty(e,r){return s.getAdditionalProperty(e,r)}};function Ds(t,e){if(!e)return;e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let r=Qe(t);for(let n of e)r.get(n?.["@id"])&&s.isRef(n)||r.set(n?.["@id"],n);return t=s._storeToOriginal(r),t}function Cs(t,e,r=!0){e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let n=Qe(t);for(let i of e){let o=n.get(s.record_id(i));i=s.patch(o,i),n.set(s.record_id(i),i)}return t=s._storeToOriginal(n),t}function Ze(t,e,r=!0){if(s.isArray(e))return e.map(a=>Ze(t,a,r));let n=s._utilGetId(e),i=Qe(t),o=i.get(n);return r==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function De(t,e,r=!0){let n=Qe(t),i=Array.from(n.values());return e&&(i=i.filter(o=>s.evaluate(o,e))),r==!0&&(i=s.expand(n,i)),i=s.clone(i),i}function Zl(t){return De(t).map(n=>s.record_id(n))}function Qe(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=s.toArray(t),t=t.filter(r=>s.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=s.record_id(r);n&&(e.has(n)&&(r=s.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function Ql(t){return t=Array.from(t.values()),t}var an={};g(an,{JSON_parse:()=>ru,JSON_stringify:()=>Us,clean:()=>Rs,clone:()=>Bs,contractAtValue:()=>Tt,expandAtValue:()=>nu,getRecordUrl:()=>ou,isJsonld:()=>js,isValid:()=>eu,merge:()=>iu,patch:()=>su,removeCircularRefs:()=>vs,sortedReplacer:()=>Os,stringify:()=>tu});function eu(t){return js(t)}function js(t){return t?.["@type"]||t?.["@id"]}function Rs(t,e){if(Array.isArray(t)&&t.length>1)return t.map(i=>Rs(i,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Bs(t)}catch{}t=setTempID(t);let r=s.flatten(t);r=r.map(i=>JSON.parse(JSON.stringify(i,Object.keys(i).sort(),4)));let n=[];for(let i of r){if(i["@id"]=Array.isArray(i?.["@id"])?i?.["@id"][0]:i?.["@id"],Ye(i)==!0)continue;let o=kt(i,e);if(o&&i?.["@id"]!=o){let a={replacer:o,replacee:i?.["@id"]};n.push(a)}if(!o&&i?.["@id"].startsWith("_:")){let a={replacer:s.getGenericRecordID(e),replacee:i?.["@id"]};n.push(a)}}return t=s.replaceIds(t,n),t}function vs(t){return on(t,new Set)}function on(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(s.isArray(t))return t.map(n=>on(n,e));if(!s.isObject(t))return t;let r=s.record_id(t);if(e.has(r))return s.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=on(t[n],e);return t}function Os(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function Us(t){return t=vs(t),JSON.stringify(t,Os,4)}function tu(t){return Us(t)}function ru(t){return JSON.parse(t)}function nu(t){function e(r,n=!1){let i=s.getAtValue(r);if(i&&i.length>0)return s.setAtValue(r,e(i,!0));if(s.isArray(r))return r.map(o=>e(o,n));if(s.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=s.setValues(r,o,e(s.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function Tt(t){let e=s.getAtValue(t);if(e&&e.length>0)return Tt(s.getAtValue(t));if(s.isArray(t))return t.map(r=>Tt(r));if(s.isJsonld(t)){for(let r of Object.keys(t?.record||t))s.setValues(t,r,Tt(s.getValues(t,r)));return t}return t}function Bs(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function iu(t,e,r=!0){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let i={"@id":t?.["@id"]||e?.["@id"]};for(let o of n){if(o=="@id")continue;let a=s.toArray(t?.[o]||void 0),l=s.toArray(e?.[o]||void 0),u=a.concat(l);r==!0&&(u=s.dedupe(u)),i[o]=u}return i}function su(t,e){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of s.keys(e)){let n=s.toArray(e?.[r]);t=s.setValues(t,r,n)}return t}function ou(t,e){e=e?.baseUrl??e;try{return f.url.getUrl(e,encodeURIComponent(s.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var cn={};g(cn,{ID:()=>Su,Id:()=>ku,Type:()=>pu,actionStatus:()=>Mu,addValue:()=>Ls,addValues:()=>Ws,contentUrl:()=>Wu,description:()=>qu,email:()=>Yu,getActionStatus:()=>Eu,getAdditionalProperty:()=>Uu,getAtValue:()=>Hu,getContentUrl:()=>Ju,getDescription:()=>Gu,getEmail:()=>Xu,getID:()=>$u,getId:()=>Tu,getImageName:()=>rc,getImageUrl:()=>tc,getItem:()=>ed,getItemListElement:()=>od,getItems:()=>nd,getName:()=>ud,getNumberOfItems:()=>fd,getObject:()=>hd,getObjects:()=>bd,getPosition:()=>wd,getPotentialAction:()=>Sd,getPotentialActions:()=>kd,getRecordID:()=>Au,getRecordId:()=>xu,getRecordType:()=>cu,getRecord_id:()=>mu,getRecord_type:()=>lu,getResult:()=>Nd,getResults:()=>jd,getTargetCollection:()=>Od,getTargetCollections:()=>Hd,getText:()=>Ed,getType:()=>gu,getUrl:()=>Jd,getValue:()=>I,getValues:()=>dn,hasValue:()=>Js,insertValue:()=>Ou,isActive:()=>Gd,isCompleted:()=>Kd,isFailed:()=>Yd,isPotential:()=>qd,isRef:()=>Cu,item:()=>Qu,itemListElement:()=>sd,items:()=>rd,keys:()=>Ru,name:()=>ld,numberOfItems:()=>cd,object:()=>gd,objects:()=>yd,position:()=>Vd,potentialAction:()=>_d,potentialActions:()=>Id,properties:()=>un,recordID:()=>wu,recordId:()=>bu,recordType:()=>du,record_id:()=>Hs,record_type:()=>au,ref:()=>ju,result:()=>Pd,results:()=>Cd,setActionStatus:()=>Lu,setActive:()=>Zd,setAdditionalProperty:()=>Bu,setAtValue:()=>Fu,setCompleted:()=>Qd,setContentUrl:()=>zu,setDescription:()=>Ku,setEmail:()=>Zu,setFailed:()=>ec,setID:()=>Iu,setId:()=>Pu,setIfNull:()=>vu,setItem:()=>td,setItemListElement:()=>ad,setItems:()=>id,setName:()=>dd,setNumberOfItems:()=>pd,setObject:()=>md,setObjects:()=>xd,setPosition:()=>Ad,setPotential:()=>Xd,setPotentialAction:()=>$d,setPotentialActions:()=>Td,setRecordID:()=>_u,setRecordId:()=>Vu,setRecordType:()=>fu,setRecord_id:()=>yu,setRecord_type:()=>uu,setResult:()=>Dd,setResults:()=>Rd,setTargetCollection:()=>Ud,setTargetCollections:()=>Fd,setText:()=>Ld,setType:()=>hu,setUrl:()=>zd,setValue:()=>R,setValueIfNull:()=>Es,setValues:()=>tt,targetCollection:()=>vd,targetCollections:()=>Bd,text:()=>Md,toRecordID:()=>Fs,toRecordId:()=>Du,toRecord_id:()=>et,toRecord_ids:()=>Nu,toRef:()=>Ms,url:()=>Wd});var Ce="en-CA";function au(t){return I(t,"@type")}function lu(t){return I(t,"@type")}function uu(t,e){return R(t,"@type",e)}function du(t){return I(t,"@type")}function cu(t){return I(t,"@type")}function fu(t,e){return R(t,"@type",e)}function pu(t){return I(t,"@type")}function gu(t){return I(t,"@type")}function hu(t,e){return R(t,"@type",e)}function Hs(t){return I(t,"@id")}function mu(t){return I(t,"@id")}function yu(t,e){return R(t,"@id",e)}function bu(t){return I(t,"@id")}function xu(t){return I(t,"@id")}function Vu(t,e){return R(t,"@id",e)}function wu(t){return I(t,"@id")}function Au(t){return I(t,"@id")}function _u(t,e){return R(t,"@id",e)}function Su(t){return I(t,"@id")}function $u(t){return I(t,"@id")}function Iu(t,e){return R(t,"@id",e)}function ku(t){return I(t,"@id")}function Tu(t){return I(t,"@id")}function Pu(t,e){return R(t,"@id",e)}function et(t){return s.isArray(t)?t.map(e=>et(e)):typeof t=="string"?t:Hs(t)}function Nu(t){return et(t)}function Fs(t){return et(t)}function Du(t){return et(t)}function Cu(t){return!s.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function ju(t){if(t?._isThingClass==!0)return t.ref;if(!t)return;let e=s._utilGetId(t);if(e)return{"@id":e}}function Ms(t){return s.isArray(t)?t.map(e=>Ms(e)):{"@id":Fs(t)}}function Ru(t){return un(t)}function un(t){if(!t)return[];if(s.isArray(t)){let r=[];for(let n of t)r=r.concat(un(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function I(t,e,r,n,i){let o=dn(t,e,n,i);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function R(t,e,r,n,i){if(n!==void 0){let o=s.getValues(t,e);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return tt(t,e,r,i)}function Es(t,e,r,n,i){let o=I(t,e,n);return s.isNull(o)==!1?t:R(t,e,r,n,i)}function vu(t,e,r,n,i){return Es(t,e,r,n,i)}function Ls(t,e,r){return Ws(t,e,r)}function Ws(t,e,r){return r=s.getValues(t,e).concat(r),tt(t,e,r)}function dn(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let i=e.split("."),o=t;for(let l=0;l<i.length;l++){let[u,d]=ln(i[l]);u&&(o=o?.[u],o=s.toArray(o)),o=o.filter(c=>c?.["@language"]==n||c?.["@language"]==Ce||c?.["@language"]===void 0),o=o.map(c=>c?.["@value"]??c),o=s.toArray(o),o=o.map(c=>c?.[n]??c?.[Ce]??c),o=s.toArray(o),l<i.length-1&&(o=o?.[d])}let a=s.toArray(o);return a.length==0&&r!==void 0?r:a}function tt(t,e,r,n){t=t?.record||t;let i=e.split("."),o=t||{};for(let u=0;u<i.length-1;u++){let[d,c]=ln(i[u]);o[d]=s.toArray(o?.[d]||[]);let p;for(o?.[d]?.[n]?(o[d][n]=s.toArray(o?.[d]?.[n]),p=o[d][n]):o?.[d]?.[Ce]?(o[d][Ce]=s.toArray(o?.[d]?.[Ce]),p=o[d][Ce]):(o[d]=s.toArray(o?.[d])||[],p=o[d]);p.length-1<c;)p.push({"@type":"Thing"});o=p?.[c]}let[a,l]=ln(i[i.length-1]);return o[a]=s.toArray(r),t}function Ou(t,e,r){return Js(t,e,r)==!0?t:Ls(t,e,r)}function Js(t,e,r){let n=dn(t,e);if(n.length==0)return!1;for(let i of n)if(s.isSame(i,r))return!0;return!1}function ln(t){if(t===void 0)return[void 0,0];let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function Uu(t,e){let n=s.getValues(t,"additionalProperty").find(o=>s.getValue(o,"propertyID")==e);return s.getValue(n,"value")}function Bu(t,e,r,n){let i=s.getValues(t,"additionalProperty");i=i.filter(a=>s.getValue(a,"propertyID")!=e);let o={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:e,value:r};return t=s.addValue(t,"additionalProperty",o),t}function Hu(t){return s.getValues(t,"@value")}function Fu(t,e){return s.setValues(t,"@value",e)}function Mu(t){return s.getValue(t,"actionStatus")}function Eu(t){return s.getValue(t,"actionStatus")}function Lu(t,e){return s.setValue(t,"actionStatus",e)}function Wu(t){return s.getValue(t,"contentUrl")}function Ju(t){return s.getValue(t,"contentUrl")}function zu(t,e){return s.setValue(t,"contentUrl",e)}function qu(t){return s.getValue(t,"description")}function Gu(t){return s.getValue(t,"description")}function Ku(t,e){return s.setValue(t,"description",e)}function Yu(t){return s.getValue(t,"email")}function Xu(t){return s.getValue(t,"email")}function Zu(t,e){return s.setValue(t,"email",e)}function Qu(t){return s.getValue(t,"item")}function ed(t){return s.getValue(t,"item")}function td(t,e){return s.setValue(t,"item",e)}function rd(t){return s.list.getItems(t)}function nd(t){return s.list.getItems(t)}function id(t,e){return s.list.setItems(t,e)}function sd(t){return s.list.getItemListElement(t)}function od(t){return s.list.getItemListElement(t)}function ad(t,e){return s.list.setItemListElement(t,e)}function ld(t){return s.getValue(t,"name")}function ud(t){return s.getValue(t,"name")}function dd(t,e){return s.setValue(t,"name",e)}function cd(t){return s.getValue(t,"numberOfItems")}function fd(t){return s.getValue(t,"numberOfItems")}function pd(t,e){return s.setValue(t,"numberOfItems",e)}function gd(t){return s.getValue(t,"object")}function hd(t){return s.getValue(t,"object")}function md(t,e){return R(t,"object",e)}function yd(t){return s.getValues(t,"object")}function bd(t){return s.getValues(t,"object")}function xd(t,e){return tt(t,"object",e)}function Vd(t){return s.list.getPosition(t)}function wd(t){return s.list.getPosition(t)}function Ad(t,e){return s.list.setPosition(t,e)}function _d(t){return s.getValues(t,"potentialAction")}function Sd(t){return s.getValues(t,"potentialAction")}function $d(t,e){return s.setValues(t,"potentialAction",e)}function Id(t){return s.getValues(t,"potentialAction")}function kd(t){return s.getValues(t,"potentialAction")}function Td(t,e){return s.setValues(t,"potentialAction",e)}function Pd(t){return s.getValue(t,"result")}function Nd(t){return s.getValue(t,"result")}function Dd(t,e){return R(t,"result",e)}function Cd(t){return s.getValues(t,"result")}function jd(t){return s.getValues(t,"result")}function Rd(t,e){return tt(t,"result",e)}function vd(t){return s.getValue(t,"targetCollection")}function Od(t){return s.getValue(t,"targetCollection")}function Ud(t,e){return s.setValue(t,"targetCollection",e)}function Bd(t){return s.getValues(t,"targetCollection")}function Hd(t){return s.getValues(t,"targetCollection")}function Fd(t,e){return s.setValues(t,"targetCollection",e)}function Md(t){return s.getValue(t,"text")}function Ed(t){return s.getValue(t,"text")}function Ld(t,e){return s.setValue(t,"text",e)}function Wd(t){return s.getValue(t,"url")}function Jd(t){return s.getValue(t,"url")}function zd(t,e){return s.setValue(t,"url",e)}function qd(t){return s.getValue(t,"actionStatus")=="PotentialActionStatus"}function Gd(t){return s.getValue(t,"actionStatus")=="ActiveActionStatus"}function Kd(t){return s.getValue(t,"actionStatus")=="CompletedActionStatus"}function Yd(t){return s.getValue(t,"actionStatus")=="FailedActionStatus"}function Xd(t){return t=s.setValue(t,"actionStatus","PotentialActionStatus"),t=s.setValue(t,"startTime",void 0),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function Zd(t){return t=s.setValue(t,"actionStatus","ActiveActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date().toISOString()),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function Qd(t,e){return t=s.setValue(t,"actionStatus","CompletedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")||new Date().toISOString()),t=s.setValue(t,"endTime",s.getValue(t,"endTime")||new Date().toISOString()),t=s.setValue(t,"error",void 0),s.isNotNull(e)&&(t=s.setValue(t,"result",e)),t}function ec(t,e){return t=s.setValue(t,"actionStatus","FailedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date().toISOString()),t=s.setValue(t,"endTime",s.getValue(t,"endTime")??new Date().toISOString()),t=s.setValue(t,"error",String(e)),t=s.setValue(t,"result",void 0),t}function tc(t){if(s.record_type(t)=="ImageObject")return s.getValue(t,"contentUrl");let e=s.getValue(t,"image.contentUrl");return e=e??s.getValue(t,"image.url"),e=e??s.getValue(t,"image"),e=typeof e=="string"?e:"",e}function rc(t){let e=s.getValue(t,"image.name");return e=e??s.getValue(t,"name"),e=e??s.record_id(t),e=typeof e=="string"?e:"",e}var pn={};g(pn,{_utilGetId:()=>mc,getDataType:()=>ic,isArray:()=>eo,isBoolean:()=>zs,isDate:()=>Ys,isJsonld:()=>Qs,isNotArray:()=>gc,isNotBoolean:()=>oc,isNotDate:()=>cc,isNotNull:()=>sc,isNotNumber:()=>lc,isNotObject:()=>fc,isNotString:()=>uc,isNull:()=>fn,isNumber:()=>qs,isObject:()=>Zs,isString:()=>Ks,randomUUID:()=>nc,toArray:()=>to,toBoolean:()=>ac,toDate:()=>Xs,toNumber:()=>Gs,toObject:()=>pc,toSingle:()=>hc,toString:()=>dc});function nc(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function ic(t){if(fn(t))return"Undefined";if(eo(t))return"Array";if(Qs(t))return"Jsonld";let e=Xs(t);if(Ys(e))return"Date";let r=Gs(t);return qs(r)?"Number":Zs(t)?"Object":Ks(t)?'String"':zs(t)?"Boolean":"Undefined"}function fn(t){return f.isNull(t)}function sc(t){return f.isNotNull(t)}function zs(t){return f.isBoolean(t)}function oc(t){return f.isNotBoolean(t)}function ac(t){return f.toBoolean(t)}function qs(t){return f.isNumber(t)}function lc(t){return f.isNotNumber(t)}function Gs(t){return f.toNumber(t)}function Ks(t){return f.isString(t)}function uc(t){return f.isNotString(t)}function dc(t){return f.toString(t)}function Ys(t){return f.isDate(t)}function cc(t){return f.isNotDate(t)}function Xs(t){return f.toDate(t)}function Zs(t){return f.isObject(t)}function fc(t){return f.isNotObject(t)}function pc(t){return f.toObject(t)}function Qs(t){return fn(t)?!1:!!(t?.["@id"]||t?.["@type"])}function eo(t){return f.isArray(t)}function gc(t){return f.isNotArray(t)}function to(t){return f.toArray(t)}function hc(t){return t=to(t),t?.[0]??void 0}function mc(t){let e=t;if(e!==void 0&&e!==null)return s.isArray(e)&&e.length==1&&(e=e[0]),s.isString(e)?e:(e=s.record_id(e),e??void 0)}var gn={};g(gn,{concat:()=>yc,dedupe:()=>ro,deleteItem:()=>Vc,diff:()=>xc,filter:()=>Sc,find:()=>_c,includes:()=>Pt,insertItem:()=>wc,intersection:()=>bc,length:()=>Ac,search:()=>io,sort:()=>je,upsertItem:()=>no});function ro(t,e=!0){if(t=s.toArray(t),t.length<2)return t;let r=[];for(let n of t)Pt(r,n)==!1&&(e==!0&&s.isValid(n)&&io(t,n).forEach(o=>n=s.merge(o,n)),r.push(n));return r=je(r),r}function Pt(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e)==!0)return!0;return!1}function yc(t,e,r=!0){t=s.toArray(t),e=s.toArray(e);let n=t.concat(e);return n=n.filter(i=>i!=null),r==!0&&(n=ro(n)),n=je(n),n}function je(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=s.toArray(t),t.length<2||(e==null?r==1?t.sort((n,i)=>s.lt(n,i)==!0?-1:1):t.sort((n,i)=>s.gt(n,i)==!0?-1:1):r==1?t.sort((n,i)=>s.lt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1):t.sort((n,i)=>s.gt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1)),t}function bc(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)Pt(e,n)==!0&&r.push(n);return r=je(r),r}function xc(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)Pt(e,n)==!1&&r.push(n);return r=je(r),r}function Vc(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!1&&r.push(n);return r}function no(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!0?r.push(e):r.push(n);return r}function wc(t,e){return no(t,e)}function Ac(t){return t=s.toArray(t),t.length}function _c(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e))return r}function io(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)&&r.push(n);return r}function Sc(t,e,r,n,i,o){return t=s.toArray(t),t.length==0?itemList:(s.isNotNull(e)&&(t=t.filter(a=>s.evaluate(a,e))),t=je(t,r,n),t.length==0||(o=s.toNumber(o),s.isNumber(o)&&(t=t.slice(o)),i=s.toNumber(i),s.isNumber(i)&&t.length>=i&&(t=slice(0,i))),t)}var hn={};g(hn,{exportToString:()=>so});function so(t){return Array.isArray(t)?$c(t):s.record_type(t)=="ListItem"?Ic(t):s.record_type(t)=="ItemList"?kc(t):s.record_type(t)=="Action"?Tc(t):s.getValue(t,"name")||s.getValue(t,"@id")}function $c(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=so(r)+`
`),e}function Ic(t){return`${s.getValue(t,"position")} - ${s.getValue(t,"item.name")||s.getValue(t,"item.@id")}`}function kc(t){let e=s.getValues(t,"itemListElement"),r=`ItemList${s.getValue(t,"name")||s.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function Tc(t){return`${s.getValue(t,"name")||s.getValue(t,"@id")} - ${s.getValue(t,"actionStatus")}`}var yn={};g(yn,{DatabaseHelper:()=>mn,testDB:()=>Pc});var mn=class{constructor(e){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=s.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=s.simplify(r),r=s.toArray(r),s.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=s.toArray(e);r=r.map(o=>typeof o=="string"?{"@id":o}:o),s.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let i=s.getChildren(n);this.#r(i)}#s(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.filter(i=>i),this.tempDB.set(r),this.#n(r),this.#i(r);let n=s.getChildren(r);this.#r(n)}#n(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let i=s.toArray(this._retrieved).concat(r);i=[...new Set(i)],this._retrieved=s.toArray(i)}#r(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=s.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=s.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=s.toArray(r)}#i(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.map(i=>i?.["@id"]||i),r=[...new Set(r)],r=r.filter(i=>i);let n=s.toArray(this._toGet);this._toGet=n.filter(i=>r.includes(i)==!1)}};function Pc(){}var kn={};g(kn,{add:()=>Rc,append:()=>rt,clean:()=>bn,decrementPositions:()=>$n,duplicate:()=>Mc,ensurePositions:()=>ve,ensurePreviousNextItem:()=>Ct,filter:()=>Ec,find:()=>J,findByItem:()=>Vn,findByListItem:()=>xn,findByPosition:()=>po,getILE:()=>jc,getItem:()=>st,getItemListElement:()=>$,getItems:()=>go,getMaxPosition:()=>it,getMinPosition:()=>In,getPosition:()=>T,gt:()=>fo,incrementPositions:()=>Sn,insert:()=>C,insertAfter:()=>_n,insertBefore:()=>An,isItemList:()=>D,isListItem:()=>Nt,length:()=>Cc,lt:()=>co,move:()=>vc,moveAfter:()=>Hc,moveBefore:()=>Bc,moveDown:()=>Uc,moveUp:()=>Oc,prepend:()=>ao,remove:()=>uo,replace:()=>lo,setItem:()=>mo,setItemListElement:()=>O,setItems:()=>ho,setPosition:()=>Dt,sort:()=>nt,toItemList:()=>Dc,toListItem:()=>Re,toString:()=>Nc,toStringItemList:()=>oo,toStringListItem:()=>wn,upsert:()=>Fc});function Nc(t){return D(t)?oo(t):wn(t)}function oo(t){let e=[`ItemList ${s.getValue(t,"name")||s.record_id(t)}`],r=$(t);return e=e.concat(r.map(n=>wn(n))),e.join(`
`)}function wn(t){return`${T(t)} - ${s.getValue(t,"item.name")||s.record_id(t)}`}function D(t){return s.record_type(t)==="ItemList"}function Dc(t){if(D(t)==!1){let e=s.toArray(t);return t={"@type":"ItemList","@id":s.randomUUID(),itemListElement:e.map((r,n)=>Re(r,n))},bn(t)}return bn(t)}function bn(t){t=s.setValueIfNull(t,"@id",s.randomUUID());let e=$(t);return e=e.map(r=>Re(r)),e=ve(e),e=Ct(e),t=O(t,e),t=s.setValue(t,"numberOfItems",e.length),t}function Cc(t){return $(t).length}function $(t){return s.getValues(t,"itemListElement")||[]}function jc(t){return $(t)}function O(t,e){return e=s.toArray(e),e=e.map((r,n)=>Re(r)),e=ve(e),e=Ct(e),t=s.setValues(t,"itemListElement",e),t=s.setValue(t,"numberOfItems",e.length),t}function C(t,e,r){if(t=ve(t),s.isArray(e)){let i=r;for(let o of e)t=C(t,o,i),(i||i===0)&&(i+=1);return t}e=Re(e,r);let n=$(t);return n=n.filter(i=>s.record_id(i)!=s.record_id(e)),r=r??it(n),r=r??n.length,r=r>=0?r:0,n=Sn(n,r),n=nt(n),n.push(e),t=O(t,n),t}function An(t,e,r){if(s.isArray(e)){for(let o of e)t=An(t,o,r);return t}let n=J(t,r);if(!n)return C(t,e);let i=T(n);return C(t,e,i)}function _n(t,e,r){if(s.isArray(e)){for(let o of e)t=_n(t,o,r);return t}let n=J(t,r);if(!n)return C(t,e);let i=T(n);return C(t,e,i+1)}function ao(t,e){if(s.isArray(e)){for(let r=e.length-1;r>=0;r--)t=ao(t,e?.[r],referenceItem);return t}return C(t,e,0)}function rt(t,e){if(s.isArray(e)){for(let i of e)t=rt(t,i,referenceItem);return t}let r=$(t);if(r.length==0)return C(t,e,0);let n=it(t);return n||n===0?C(t,e,n+1):C(t,e,r.length)}function Rc(t,e){return rt(t,e)}function vc(t,e,r){return C(t,e,r)}function Oc(t,e){let r=J(t,e),n=T(r);return n==0?t:C(t,r,n-1)}function Uc(t,e){let r=J(t,e),n=T(r),i=it(t);return n==i?t:C(t,r,n+1)}function Bc(t,e,r){return An(t,e,r)}function Hc(t,e,r){return _n(t,e,r)}function lo(t,e,r){let n=$(t),i=[];for(let o of n){let a=st(o);s.isSame(a,r)&&(a=mo(o,e)),i.push(o)}return O(t,i)}function Fc(t,e){return J(t,e)?lo(t,e,s.ref(e)):rt(t,e)}function Mc(t,e){if(Nt(e)){let r=J(e);e=st(r)}return rt(t,e)}function uo(t,e){if(s.isArray(e)){for(let o of e)t=uo(t,o);return t}t=ve(t);let r=$(t),n=J(r,e),i=T(n);return r=r.filter(o=>s.isSame(o,n)==!1),r=$n(r,i),t=O(t,r),t}function Ec(t,e){let r=s.getItemListElement(t);return e&&(r=s.filter(r,e)),r}function Nt(t){return s.record_type(t)==="ListItem"}function Re(t,e){return Nt(t)==!1&&(t={"@type":"ListItem","@id":s.randomUUID(),item:t}),t=s.setIfNull(t,"@id",s.randomUUID()),(e||e===0)&&(t=s.setValue(t,"position",e)),t}function co(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function fo(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function nt(t){if(D(t)){let r=t,n=$(r),i=nt(n);return O(r,i)}function e(r,n){return co(r,n)==!0?-1:fo(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function J(t,e){if(!s.isNull(e))return s.isNumber(e)?po(t,e):Nt(e)?xn(t,e):s.record_type(e)?Vn(t,e):Vn(t,e)||xn(t,e)}function po(t,e){if(D(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(T(r)==e)return r}}function xn(t,e){if(D(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(s.isSame(r,e))return r}}function Vn(t,e){if(D(t)&&(t=$(t)),t=s.toArray(t),t.length!=0)for(let r of t){let n=st(r);if(s.isSame(n,e))return r}}function T(t){let e=s.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function Dt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,T(t)==e||(t=s.setValue(t,"position",e)),t}function Sn(t,e){if(e=e??0,D(t)){let n=t;t=$(n);let i=Sn(t,e);return O(n,i)}let r=[];for(let n of t){let i=T(n);i>=e&&(n=Dt(n,i+1)),r.push(n)}return r}function $n(t,e){if(e=e??0,D(t)){let n=t;t=$(n);let i=$n(t,e);return O(n,i)}let r=[];for(let n of t){let i=T(n);i!=0&&i>=e&&(n=Dt(n,i-1)),r.push(n)}return r}function ve(t,e){if(D(t)){let i=t;t=$(i);let o=ve(t);return O(i,o)}if(t=s.toArray(t),t.length==0)return t;t=nt(t);let r=e??In(t)??0,n=[];for(let i of t)i=Dt(i,r),r+=1,n.push(i);return n}function In(t){if(D(t)){let i=$(i);return In(i)}t=s.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function it(t){if(D(t))return t=$(t),it(t);t=s.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function Ct(t){if(D(t)){let r=t;t=$(r);let n=Ct(t);return O(r,n)}t=s.toArray(t),t=nt(t);let e=[];for(let r of t){let n=T(r),i=J(t,n-1),o=i?s.ref(i):void 0;r=s.setValue(r,"previousItem",o);let a=J(t,n+1),l=a?s.ref(a):void 0;r=s.setValue(r,"nextItem",l),e.push(r)}return e}function go(t){if(D(t)){let n=$(t);return go(n)}return t.map(r=>st(r))}function ho(t,e){if(D(t)){let n=t;t=$(n);let i=ho(t);return O(n,i)}return t=s.toArray(t),e=s.toArray(e),e=e.map(n=>Re(n)),t.concat(e)}function st(t){return s.getValue(t,"item")}function mo(t,e){return s.setValue(t,"item",e)}var Pn={};g(Pn,{appendAction:()=>Ao,deleteAction:()=>Io,duplicateAction:()=>$o,execute:()=>yo,insertAction:()=>bo,insertAfterAction:()=>Vo,insertBeforeAction:()=>xo,moveDownAction:()=>So,moveUpAction:()=>_o,prependAction:()=>wo,replaceAction:()=>Tn});function yo(t){if(s.isArray(t)){let r=new s.DB;r.set(t);let n=[];for(let i of t){i=r.get(i);let o=yo(i);n.push(o),r.set(s.getResults(o))}return n}let e=s.record_type(t);if(e=="ReplaceAction")return Tn(t);if(e=="UpdateAction")return Lc(t);if(e=="InsertAction")return bo(t);if(e=="InsertBeforeAction")return xo(t);if(e=="InsertAfterAction")return Vo(t);if(e=="MoveUpAction")return _o(t);if(e=="MoveDownAction")return So(t);if(e=="AppendAction")return Ao(t);if(e=="PrependAction")return wo(t);if(e=="ReplaceAction")return Tn(t);if(e=="DuplicateAction")return $o(t);if(e=="DeleteAction")return Io(t)}function Lc(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e){let o=s.getValue(i,"propertyID"),a=s.getValue(i,"value");n=s.setValues(n,o,a)}t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function bo(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insert(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function xo(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertBefore(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function Vo(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertAfter(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function wo(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.prepend(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Ao(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.append(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function _o(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveUp(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function So(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveDown(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Tn(t){let e=s.targetCollection(t),r=s.getValue(t,"replacer"),n=s.getValue(t,"replacee"),i=s.list.replace(i,r,n);return t=s.addValue(t,"result",e),t=s.setCompleted(t),t}function $o(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.duplicate(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Io(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.remove(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}var Dn={};g(Dn,{addPotentialActions:()=>Nn});function Nn(t,e){if(!t)return t;if(s.isArray(t))return t.map(n=>Nn(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=Jc(t,e)),r=="ItemList"&&(t=Wc(t,e));for(let n of Object.keys(t))t[n]=Nn(t[n],e);return t}function Wc(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let o=0;o<r.length;o++){let a=s.getValue(r[o],"position");a>0&&(r[o]=zc(r[o],t,e)),a<n-1&&(r[o]=qc(r[o],t,e)),r[o]=Gc(r[o],t,e),r[o]=Kc(r[o],t,e)}let i={"@type":"Thing","@id":"_h:"+s.randomUUID(),name:"new record"};return t=Yc(t,i,e),t}function Jc(t,e){let r;return s.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=Q(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=Q(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Failed")),s.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=Q(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Failed")),s.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=Q(t,e,r,"Set Failed")),t}function Q(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=s.record_id(t);let i={"@type":"UpdateAction",name:n,object:r,targetCollection:s.ref(t),url:e};return t=s.addValue(t,"potentialAction",i),t}function zc(t,e,r,n){n=n||"Move up";let i={"@type":"MoveUpAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function qc(t,e,r,n){n=n||"Move down";let i={"@type":"MoveDownAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Gc(t,e,r,n){n=n||"Delete";let i={"@type":"DeleteAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Kc(t,e,r,n){n=n||"Duplicate";let i={"@type":"DuplicateAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Yc(t,e,r,n){n=n||"Duplicate";let i={"@type":"AppendAction",name:n,object:e,targetCollection:s.ref(t),url:r};return t=s.addValue(t,"potentialAction",i),t}var s={dot:$e,...Sr,...Ir,...Vt,...tn,...sn,...an,...cn,...pn,...gn,...hn,...yn,list:kn,...Pn,potentialAction:Dn};var Cn={};g(Cn,{getContent:()=>Zc,getIcon:()=>rf,getTitle1:()=>To,getTitle2:()=>Xc,imageUrl:()=>ef,imageUrls:()=>tf,thumbnailUrl:()=>Qc});function To(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"givenName"),o=s.getValue(t,"familyName"),a=s.getValue(t,"name");if(r=="Person"){let l=[i,o];if(l=l.filter(u=>u!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=s.getValue(t,"item");return To(l)}return a||n||""}function Xc(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o=s.getValue(t,"description");if(r=="Person")return i??"";if(r=="Action"){let a=s.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function Zc(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o;return o=s.getValue(t,"abstract"),o&&typeof o=="string"||(o=s.getValue(t,"text"),o&&typeof o=="string")||(o=s.getValue(t,"description"),o&&typeof o=="string")?o:""}function Qc(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"thumbnail.contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"thumbnail"),i&&typeof i=="string")||(i=s.getValue(t,"thumbnailUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")?i:""}function ef(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function tf(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValues(t,"image.contentUrl"),i=i.filter(o=>o&&typeof o=="string"),i.length>0||(i=s.getValues(t,"image"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function rf(t){let e=s.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return ko;case"action":return nf;case"person":return sf;case"organization":return of;case"itemlist":return af;case"listitem":return lf;case"postaladdress":return uf;case"product":return df;case"webapi":return cf;case"website":return ff;case"webpage":return pf;default:return ko}}var ko='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',nf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',sf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',of='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',af='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',lf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',uf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',df='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',cf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',ff='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',pf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var mm=globalThis.crypto.randomUUID;function Rt(t,e){if(Array.isArray(t))return t.map(n=>Rt(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=Rt(t);let r=s.record_type(t);return t=jt(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=jt(t,"MoveUpAction","Move Up",e),t=jt(t,"MoveDownAction","Move Down",e),t=jt(t,"DeleteAction","Delete",e)),t}function jt(t,e,r,n){let i={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(t)},url:n};return t=gf(t,i),t}function gf(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var jn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function vt(t){let e=[];return e=e.concat(jn?.[t]?.properties||[]),jn?.[t]?.parent&&(e=e.concat(vt(jn[t].parent))),e}function Ot(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);i.hasPart.push(Ot(a,e-1))}return i}function Rn(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Ut(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let i="https://www.testrecord.com/"+t+"#"+n,o={"@type":n,"@id":i,name:t,headline:"Headline "+t,text:hf(),image:_.image(),hasPart:[]};if(r==0&&(o.author=_.person(),o.datePublished=new Date().toISOString()),r<e)for(let a=0;a<3;a++){let l=t+"_"+String(a);o.hasPart.push(Ut(l,e,r+1))}return o}function hf(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function ot(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var Dm=globalThis.crypto.randomUUID;function vn(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},i;for(let o=0;o<t;o++){let a=mf(_.thing(o),o);i&&(i.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":i?.["@id"]}),n.itemListElement.push(a),i=a}return n}function mf(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function On(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:_.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function Un(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:_.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function Bn(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:_.address()}}function Hn(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Fn(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function Mn(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let i of["small","medium","large"])for(let o of["blue","white","red"]){let a=_.product(`variant ${i} ${o}`);a.size=i,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function Bt(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,image:ot(t),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);i.hasPart.push(Bt(a,e-1))}return i}function En(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function Ln(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<e;o++){let a=t+"_"+String(o),l=_.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let u=new Date;u.setDate(u.getDate()-e+o),l.dateSent=u,l.dateReceived=u,i.hasPart.push(l)}return i}var _={action:Ot,article:Ut,address:Rn,conversation:Ln,image:ot,itemList:vn,message:En,offer:On,organization:Un,person:Bn,postalAddress:Hn,product:Fn,productGroup:Mn,thing:Bt,Action:Ot,Article:Ut,Address:Rn,Conversation:Ln,Image:ot,ItemList:vn,Message:En,Offer:On,Organization:Un,Person:Bn,PostalAddress:Hn,Product:Fn,ProductGroup:Mn,Thing:Bt};var Ht={};g(Ht,{transformHelpers:()=>m});var Jn={};g(Jn,{jsonToMarkdown:()=>Wn});function Wn(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",i="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${i}* **Record ${a+1}:**
`,n+=Wn(o,e+1)):n+=`${i}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${i}* **${o}:**
`,n+=Wn(a,e+1)):n+=`${i}* **${o}:** ${a}
`}):n+=`${i}* ${r}
`;return n}var qn={};g(qn,{jsonToYaml:()=>at,yamlToJson:()=>yf});function at(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=at(o,e+2).trimStart();n+=a}else n+=at(o,0)}),n);let i=Object.keys(t);return i.length===0?`{}
`:(i.forEach(o=>{let a=t[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+at(a,e+2):n+=" "+at(a,0)}),n)}function yf(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let i of e){if(!i.trim()||i.trim().startsWith("#"))continue;let o=i.search(/\S/),a=i.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let u=n[n.length-1],d=a.substring(1).trim();if(d.includes(":")){let[c,...p]=d.split(":"),b=c.trim(),S=p.join(":").trim(),E=zn(S),ce={[b]:E};u.value.push(ce),n.push({indent:o+2,value:ce,type:"object",lastKey:b})}else u.value.push(zn(d))}else if(a.includes(":")){let[u,...d]=a.split(":"),c=u.trim(),p=d.join(":").trim();l.lastKey=c,p===""?(l.value[c]={},n.push({indent:o,value:l.value[c],type:"object",lastKey:c})):l.value[c]=zn(p)}}return r}function zn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var Po={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var No="DesignToken",Do={css:{get:wf},get:Gn,set:Co,getValue:xf,setValue:Vf,sampleRecord:jo};function Gn(t){if(!t)return;let e=s.getAdditionalProperty(t,No);return e=e||{},e}function Co(t,e){if(t)return e=e||{},t=s.setAdditionalProperty(t,No,e),t}function xf(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=Gn(t),n=Me(r,e);return Me(n,"$value")}function Vf(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=Gn(),i=jo(),o=Me(i,e);return o.$value=r,n=xt(n,e,o),t=Co(t,n),t}function wf(t,e="dt"){let r=[];function n(a,l=[]){for(let[u,d]of Object.entries(a)){if(d==null)continue;let c=[...l,u];if(typeof d=="object"&&"value"in d){let p=`--${c.map(S=>S.toLowerCase()).join("-")}`,b=i(d.value);r.push(`  ${p}: ${b};`)}else if(typeof d=="object"&&!Array.isArray(d))n(d,c);else{let p=`--${c.map(S=>S.toLowerCase()).join("-")}`,b=i(d);r.push(`  ${p}: ${b};`)}}}function i(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function jo(){return Po}var m={markdown:Jn,yaml:qn,designToken:Do};var Mt=class{constructor(e){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return Kn(this.record)}toJSON(){return this.record}toMD(){return m.markdown.jsonToMarkdown(this.record)}toYaml(){return m.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return s.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(s.setValue(this._record,e,r))}getValues(e){return s.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(s.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(s.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(s.addValues(this._record,e,r))}_setValueIfNotNull(e,r){s.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){s.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){s.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)&&s.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=X(Ft(this._record),this.baseUrl)),s.simplify(Ft(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=s.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=s.clone(Ft(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=oe(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=s.clone(Ft(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return vt(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??s.randomUUID();let i={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=i,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),n=r==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let i={"@type":"UpdateAction","@id":s.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(i)}catch(a){console.log("Callback failed: ",o,String(a),i)}}static toString(e){return Kn(e)}static toMD(e){return m.markdown.jsonToMarkdown(e)}static toYaml(e){return m.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new V[r](m.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return oe(e)}static example(e=0,r=5){let n=this.name;return new V[n](_[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return vt(e)}static getValue(e,r){return s.getValue(e,r)}static setValue(e,r,n){return s.setValue(e,r,oe(n))}static getValues(e,r){return s.getValues(e,r)}static setValues(e,r,n){return s.setValues(e,r,oe(n))}static addValue(e,r,n){return s.addValue(e,r,oe(n))}static addValues(e,r,n){return s.addValues(e,r,oe(n))}static flatten(e){return s.flatten(e)}static addPotentialActions(e){return Rt(e)}static addAdditionalProperty(e,r,n){return Af(e,"additionalProperty",r,n)}};function Ft(t){function e(n){if(Array.isArray(n))return n.map(i=>e(i));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let i={};for(let o of Object.keys(n))i[o]=e(n?.[o]);return i}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function oe(t){if(Array.isArray(t))return t.map(e=>oe(e));if(t?._isThingClass!=!0){let e=s.record_type(t);if(e){let r=V?.[e]||V.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=oe(t._record?.[e]);return t}function Kn(t){if(Array.isArray(t)){let o=t.map(a=>Kn(a));return o=o.join(`
`),o}let e=s.getValue(t,"@type"),r=s.getValue(t,"@id"),n=s.getValue(t,"name"),i=`${e||""}/${r||""}`;return n&&(i=`${i} - ${n}`),i}function Af(t,e,r,n){let i=new V.PropertyValue;return i.propertyID=r,i.value=n,t=s.addValues(t,e,i.record),t}var w=class extends Mt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=f.url.clean(value),e}set cleanUrl(e){url=f.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=X(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=e);let i={"@type":"PropertyValue","@id":s.randomUUID()};i.propertyID=e,i.value=r,n.push(i),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(i=>i?.propertyID==e)&&(r=r.filter(i=>i?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(i=>i?.propertyID==e)?.value}};var he=class extends w{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of s.toArray(e))s.record_type(r)!=="ItemList"&&this.add(r)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(e){this.record=s.list.setItemListElement(this.record,e)}get items(){return s.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=s.list.insert(this.record,e,0)}append(e){this.record=s.list.append(this.record,e)}add(e){this.record=s.list.append(this.record,e)}insert(e,r){this.record=s.list.insert(this.record,e,r)}delete(e){this.record=s.list.remove(this.record,e)}replace(e,r){this.record=s.list.replace(this.record,e,r)}move(e,r){this.record=s.list.move(this.record,e,r)}moveUp(e){this.record=s.list.moveUp(this.record,e)}moveDown(e){this.record=s.list.moveDown(this.record,e)}upsert(e){this.record=s.list.upsert(this.record,e)}static clean(e){return s.list.clean(e)}static length(e){return s.list.length(e)}static getItem(e,r){return s.list.getItem(e,r)}static prepend(e,r){return s.list.insert(e,r,0)}static append(e,r){return s.list.append(e,r)}static add(e,r){return s.list.insert(e,r,getLength(e))}static insert(e,r,n){return s.list.insert(e,r,n)}static delete(e,r){return s.list.remove(e,r)}static replace(e,r,n){return s.list.replace(e,r,n)}static move(e,r,n){return s.list.move(e,r,n)}static moveUp(e,r){return s.list.moveUp(e,r)}static moveDown(e,r){return s.list.moveDown(e,r)}static moveBefore(e,r,n){return s.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return s.list.moveAfter(e,r,n)}static upsert(e,r){return s.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,i,o,a){return search(e,r,n,i,o,a)}};var j=class extends w{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Ro(this.record,e)}static test(e,r){return Ro(e,r)}};function Ro(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",o=new RegExp(e.valuePattern,"gi");if(t.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var lt=class extends w{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(e){this.record=s.setCompleted(this.record,e)}setFailed(e){this.record=s.setFailed(this.record,e)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=Bo(this.record,e,r)}addMaxValue(e,r){this.record=Ho(this.record,e,r)}addMinLength(e,r){this.record=Fo(this.record,e,r)}addMaxLength(e,r){this.record=Mo(this.record,e,r)}addDefaultValue(e,r){this.record=Eo(this.record,e,r)}addValueRequired(e,r){this.record=Lo(this.record,e,r)}addValuePattern(e,r){this.record=vo(this.record,e,r)}addMultipleValues(e,r){this.record=Oo(this.record,e,r)}addStepValue(e,r){this.record=Uo(this.record,e,r)}testConditions(){return Yn(this.record)}getInputconditions(){return U(this.record)}addInputCondition(e,r){return this.addValues(e+"-input",r)}getOutputConditions(){return _f(this.record)}addOutputCondition(e,r){return this.addValues(e+"-output",r)}test(){return Yn(this.record)}static setPotential(e){return s.setPotential(e)}static setActive(e){return s.setActive(e)}static setCompleted(e,r){return s.setCompleted(e,r)}static setFailed(e,r){return s.setFailed(e,r)}static isPotential(e){return s.isPotential(e)}static isActive(e){return s.isActive(e)}static isCompleted(e){return s.isCompleted(e)}static isFailed(e){return s.isFailed(e)}static addMinValue(e,r,n){return Bo(e,r,n)}static addMaxValue(e,r,n){return Ho(e,r,n)}static addMinLength(e,r,n){return Fo(e,r,n)}static addMaxLength(e,r,n){return Mo(e,r,n)}static addDefaultValue(e,r,n){return Eo(e,r,n)}static addValueRequired(e,r,n){return Lo(e,r,n)}static addValuePattern(e,r,n){return vo(e,r,n)}static addMultipleValues(e,r,n){return Oo(e,r,n)}static addStepValue(e,r,n){return Uo(e,r,n)}static test(e){return Yn(e)}};function U(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function ee(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function _f(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function vo(t,e,r){let n=U(t,e)||new j;return n.valuePattern=r,t=ee(t,e,n),t}function Oo(t,e,r){let n=U(t,e)||new j;return n.multipleValues=r,t=ee(t,e,n),t}function Uo(t,e,r){let n=U(t,e)||new j;return n.stepValue=r,t=ee(t,e,n),t}function Bo(t,e,r){let n=U(t,e)||new j;return n.minValue=r,t=ee(t,e,n),t}function Ho(t,e,r){let n=U(t,e)||new j;return n.maxValue=r,t=ee(n.record,e,r),t}function Fo(t,e,r){let n=U(t,e)||new j;return n.valueMinLength=r,t=ee(t,e,n),t}function Mo(t,e,r){let n=U(t,e)||new j;return n.valueMaxLength=r,t=ee(t,e,n),t}function Eo(t,e,r){let n=U(t,e)||new j;return n.defaultValue=r,t=ee(t,e,n),t}function Lo(t,e,r){let n=U(t,e)||new j;return n.valueRequired=r,t=ee(t,e,n),t}function Yn(t){let e=U(t);for(let r of e)if(j.test(r,t?.[r.propertyID])==!1)return!1;return!0}var z=class extends lt{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(e){return this.setValues("targetCollection",e)}get toLocation(){return this.getValues("toLocation")}set toLocation(e){return this.setValues("toLocation",e)}},Et=class extends z{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Lt=class extends z{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Wt=class extends z{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(e){return this.setValues("replacer",e)}get replacee(){return this.getValues("replacee")}set replacee(e){return this.setValues("replacee",e)}},Jt=class extends z{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},zt=class extends z{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},qt=class extends z{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var Gt=class extends w{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Sf(this.record)}get(e){return m.designToken.getValue(this.record,e)}set(e,r){return m.designToken.setValue(this.record,e,r)}get token(){return m.designToken.get(this.record)}set token(e){this.record=m.designToken.set(this.record,e)}get primary(){return m.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=m.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return m.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=m.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return m.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=m.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return m.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=m.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return m.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=m.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return m.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=m.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return m.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=m.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new Kt(this,"typography.heading-lg")}get body(){return new Kt(this,"typography.body-md")}get spacingSm(){return m.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return m.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return m.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return m.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return m.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return m.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return m.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return m.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return m.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return m.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new Xn(this,"shadow.elevation-md")}sample(){return m.designToken.getSampleRecord()}},Kt=class{constructor(e,r){this.base=e,this.basePath=A(r)}get fontFamily(){return m.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get fontWeight(){return m.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get fontSize(){return m.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get lineHeight(){return m.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get letterSpacing(){return m.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}get family(){return m.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get weight(){return m.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get size(){return m.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get height(){return m.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get spacing(){return m.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}},Xn=class{constructor(e,r){this.base=e,this.basePath=A(r)}get color(){return m.designToken.getValue(record,A(this.basePath,"color"))}set color(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"color"),e)}get offsetX(){return m.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"offsetX"),e)}get offsetY(){return m.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"offsetY"),e)}get blur(){return m.designToken.getValue(record,A(this.basePath,"blur"))}set blur(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"blur"),e)}get spread(){return m.designToken.getValue(record,A(this.basePath,"spread"))}set spread(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"spread"),e)}};function A(t,e,r){let n=[t,e,r];n=n.filter(o=>o!=null&&o!="");let i=n.join(".");return i=i.replaceAll("..","."),i}function Sf(t){return`${s.record_type(t)} for ${s.getValue(t,url)}
    
    `}var v=class extends w{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var B=class extends v{constructor(e,r,n,i,o,a){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=i,this.dateSent=o,this.dateReceived=a)}toString(){return Qn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",Oe(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",Oe(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",Oe(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",Oe(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",Oe(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return Jo(this.record)}set gmail(e){this.record=Wo(e)}get outlook(){return qo(this.record)}set outlook(e){this.record=zo(e)}static toString(e){return Qn(e)}static fromGmail(e){return Wo(e)}static toGmail(e){return Jo(e)}static fromOutlook(e){return zo(e)}static toOutlook(e){return qo(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n<i}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n>i}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i.getTime()-o.getTime()}),e}};function Qn(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(d=>Qn(d)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=s.getValue(t,"sender"),r=e?.email||e?.name||"";r=Zn(r,20);let i=s.getValues(t,"recipient").map(d=>d?.email||d?.name||"");i=Zn(i,25);let o=s.getValue(t,"headline")||"";o.length>20&&(o=Zn(o,30));let a=s.getValue(t,"dateSent")||s.getValue(t,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${i} | ${o} | ${l}`}function Zn(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function Oe(t){return t?Array.isArray(t)?t.map(e=>Oe(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function Wo(t){let e=new B;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function Jo(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function zo(t){let e=new B;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function qo(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var Xt=class extends v{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return $f(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>s.record_type(r)=="Message");return e=B.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return Go(this.record)}add(e,r,n,i,o,a){this.record=Yt(this.record,e,r,n,i,o,a)}addMessage(e,r,n,i,o,a){this.record=Yt(this.record,e,r,n,i,o,a)}newMessage(e,r,n,i,o,a){let l=new B(e,r,n,i,o,a);this.messages=this.messages.push(l)}static getParticipants(e){return Go(e)}static newMessage(e,r,n,i,o,a,l){return Yt(e,r,n,i,o,a,l)}static addMessage(e,r,n,i,o,a,l){return Yt(e,r,n,i,o,a,l)}static getMessages(e){return ut(e)}static getFirstMessage(e){let r=ut(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=ut(e);return r.length>0?r[r.length-1]:void 0}};function $f(t){let e=ut(t),r=`Conversation with ${e.length} messages:
`;return r+=B.toString(e),r}function Yt(t,e,r,n,i,o,a){let l=new B(e,r,n,i,o,a);return t=s.addValues(t,"hasPart",l),t}function ut(t){let e=s.getValues(t,"hasPart").filter(r=>s.getValue(r,"@type")=="Message");return e=If(e),e}function If(t){return t.sort((e,r)=>{let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n-i}),t}function Go(t){let e=ut(t),r=new Set;return e.forEach(n=>{let i=s.getValue(n,"sender");i&&r.add(i),s.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var Ue=class extends w{constructor(e,r,n,i){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=i)}toString(){return kf(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function kf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var Zt=class extends w{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Tf(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new Ue(e,this.sourceSystemID,this.sourceTableID,r),i=this.getValues("dataFeedElement");return i.push(n),this.setValues("dataFeedElement",i),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Tf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var me=class extends w{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return Ko(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=w.setValues(this._record,"additionalProperty",e)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(e){this._record=w.setValues(this._record,"areaServed",e)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=w.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=w.setValues(this._record,"inventoryLevel",e)}get price(){return s.getValue(this._record,"price")}set price(e){this._record=w.setValues(this._record,"price",e)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=w.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=w.setValues(this._record,"priceValidUntil",e)}get seller(){return s.getValue(this._record,"seller")}set seller(e){this._record=w.setValues(this._record,"seller",e)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(e){this._record=w.setValues(this._record,"validFrom",e)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(e){this._record=w.setValues(this._record,"validThrough",e)}};function Ko(t){if(Array.isArray(t))return t.map(i=>Ko(i));let e="",r=s.getValue(t,"itemOffered")||{},n=s.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${s.getValue(r,"name")||""} - ${s.getValue(t,"priceCurrency")||""} $${n}`,e}var ye=class extends v{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ei(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new me(e,r))}static addOffer(e,r,n="CAD"){return Pf(e,r,n)}static toString(e){return ei(e)}};function ei(t){if(Array.isArray(t))return t.map(r=>ei(r));let e="";return e+=`${s.getValue(t,"name")||""}`,e}function Pf(t,e,r){let n=new me(e,r);return n.itemOffered={"@id":t?.["@id"]},t=s.addValue(t,"itemOffered",n.record),record}var Qt=class extends ye{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ti(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Nf(this.record,e)}generateVariants(e){this.record=Df(this.record,e)}static toString(e){return ti(e)}};function ti(t){if(Array.isArray(t))return t.map(n=>ti(n));let e="";e+=`${s.getValue(t,"name")||""}
`;let r=s.getValues(t,"hasVariant");for(let n of r)e+=" - "+ye.toString(n)+`
`;return e}function Nf(t,e){return t=s.addValues(t,"hasVariant",e),t}function Df(t,e){if(Array.isArray(e)){let o={};for(let a of e)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);e=o}let r=Cf(e),n=Object.keys(r[0]);t=s.addValues(t,"variesBy",n);let i=w.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(t));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":t?.["@id"]};let l=[];for(let d of Object.keys(o))l.push(o?.[d]),i.includes(d)?a=s.setValue(a,d,o[d]):a=w.addAdditionalProperty(a,d,o[d]);let u=w.getValue(a,"name")+" "+l.join(" ");a=w.setValue(a,"name",u),t=w.addValue(t,"hasVariant",a)}return t}function Cf(t){return Object.keys(t).reduce((r,n)=>{let i=t[n],o=[];for(let a of r)for(let l of i)o.push({...a,[n]:l});return o},[{}])}var er=class extends w{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return Yo(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return s.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return s.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return s.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return s.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return s.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function Yo(t){if(Array.isArray(t))return t.map(r=>Yo(r));let e="";return e+=`${s.getValue(t,"propertyID")||""}: ${s.getValue(t,"value")||""} ${s.getValue(t,"unitText")||""}`,e}var be=class extends v{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),s.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new he(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=dt(this.record,"WPHeader"),q(this.record,"WPHeader")}set WPHeader(e){this.record=G(this.record,"WPHeader",e)}get WPFooter(){return this.record=dt(this.record,"WPFooter"),q(this.record,"WPFooter")}set WPFooter(e){this.record=G(this.record,"WPFooter",e)}get WPSideBar(){return this.record=dt(this.record,"WPSideBar"),q(this.record,"WPSideBar")}set WPSideBar(e){this.record=G(this.record,"WPSideBar",e)}get Table(){return q(this.record,"Table")}set Table(e){this.record=G(this.record,"Table",e)}addHeaderLink(e,r){this.record=Xo(this.record,e,r)}addFooterLink(e,r){this.record=Zo(this.record,e,r)}domain(){return Qo(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=jf(e,this.url)}static getWPHeader(e){return q(e,"WPHeader")}static getWPFooter(e){return q(e,"WPFooter")}static getWPSideBar(e){return q(e,"WPSideBar")}static getTable(e){return q(e,"Table")}static setWPHeader(e,r){return G(e,"WPHeader",r)}static setWPFooter(e,r){return G(e,"WPFooter",r)}static setWPSideBar(e,r){return G(e,"WPSideBar",r)}static setTable(e,r){return G(e,"Table",r)}static addHeaderLink(e,r,n){return Xo(e,r,n)}static addFooterLink(e,r,n){return Zo(e,r,n)}static getDomain(e){return Qo(s.getValue(e,"url")||e)}};function dt(t,e){let n=s.getValues(t,"hasPart").find(i=>s.getValue(i,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=s.addValue(t,"hasPart",n)),t}function q(t,e){return s.getValues(t,"hasPart").find(i=>s.record_type(i)==e)}function G(t,e,r){let n=s.getValues(t,"hasPart");return n=n.filter(i=>s.record_type(i)!=e),n.push(r),t=s.setValues(t,"hasPart",n),t}function Xo(t,e,r){t=dt(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},i=q(t,"WPHeader");return i=s.addValue(i,"hasPart",n),t=G(t,"WPHeader",i),t}function Zo(t,e,r){t=dt(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},i=q(t,"WPFooter");return i=s.addValue(i,"hasPart",n),t=G(t,"WPFooter",i),t}function Qo(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function jf(t,e){let r=new s.DB;r.post(t);let n=r.records,i=[];if(Rf(t)=="Product"){let l=n.filter(b=>s.record_type(b)=="Product")[0];i.push({replacee:s.record_id(l),replacer:e+"#product"}),l=s.setValue(l,"url",e);let u=s.getValues(l,"brand");u=u.map(b=>b?.["@type"]?{"@type":"brand",name:b}:b),l=s.setValues(l,"brand",u);let d=n.filter(b=>s.record_type(b)=="Offer");d=d.map(b=>s.setValues(b,"itemOffered",s.ref(l))),l=s.setValues(l,"offers",d);let c=n.filter(b=>s.record_type(b)=="Review");d=d.map(b=>s.setValues(b,"itemReviewed",s.ref(l))),l=s.setValues(l,"review",c);let p=n.filter(b=>s.record_type(b)=="AggregateRating");return p=p.map(b=>s.setValues(b,"itemReviewed",s.ref(l))),l=s.setValues(l,"aggregateRating",p),l=s.replaceIds(l,i),l}return t}function Rf(t){if(t=s.toArray(t),t=t.filter(r=>s.record_type(r)!="BreadcrumbList"),t.length==1&&s.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&s.record_type(t[0]=="WebPage")&&(t=s.getValues(t,"mainEntity")),t.filter(r=>s.record_type(r)=="Product").length==1)return"Product"}var tr=class extends be{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new be(this);return n.url=e,n.name=r,n}domain(){return ea(this.url)}static getDomain(e){return ea(s.getValue(e,"url")||e)}};function ea(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var rr=class extends w{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var V={get:w.toThing,toThing:w.toThing,Action:lt,AddAction:Et,AppendAction:zt,BrandDesign:Gt,Conversation:Xt,CreativeWork:v,DataFeed:Zt,DataFeedItem:Ue,DeleteAction:Lt,InsertAction:Jt,ItemList:he,Message:B,Offer:me,Product:ye,ProductGroup:Qt,PropertyValue:er,Thing:w,PrependAction:qt,ReplaceAction:Wt,UpdateAction:z,WebAPI:rr,WebPage:be,WebSite:tr,format:Cn,toThing:vf};function vf(t){let e=s.record_type(t);return V?.[e]?new V[e](t):new V.Thing(t)}var si={};g(si,{RdfDB:()=>nr,default:()=>Of,fromRDF:()=>ii,toRDF:()=>ni});var wx=globalThis.crypto.randomUUID,nr=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return ii(this.getRdf(e))}post(e,r){e=ni(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},Of={RdfDB:nr,toRDF:ni,fromRDF:ii};function ni(t,e){function r(i,o,a,l){let u=[];if(Array.isArray(a))return u=u.concat(a.map((c,p)=>r(i,o,c,l))),u.flat();if(a?.subject&&a?.predicate&&a?.object)return[a];if(l&&typeof l=="object"&&(typeof a!="object"&&(a={"@value":a}),a["@annotation"]={...a?.["@annotation"]||{},...l}),o=="@annotation")return[];if(a?.["@value"]){let c=a?.["@annotation"];if(c&&typeof c=="object"){c["@id"]=c?.["@id"]||"_:"+globalThis.crypto.randomUUID();let p=Object.keys(c).map(b=>r(c["@id"],b,c[b]));u=u.concat(p),c=c?.["@id"]}return u=u.concat([{subject:i,predicate:o,object:a?.["@value"],label:l}]),u}if(typeof a=="object"){a["@id"]=a?.["@id"]||"_:"+globalThis.crypto.randomUUID();let c={subject:i,predicate:o,object:a?.["@id"],label:l};return u=u.concat([c]),u=u.concat(Object.keys(a).map(p=>r(a?.["@id"],p,a?.[p],l))),u.flat()}let d={subject:i,predicate:o,object:a,label:l};return u.concat([d])}let n=[];if(e){let i=ri(e);i.length>1&&(n=n.concat(i.slice(1))),e=i?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(i=>i.subject),n}function ii(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let i=e.get(n.subject),o=n?.object,a=e.get(n?.object);a&&(o={"@id":a?.["@id"]}),n.label&&(o?.["@id"]||(o={"@value":o}),o["@annotation"]=n?.label),i[n.predicate]=i?.[n.predicate]||[],i[n.predicate]=Array.isArray(i[n.predicate])?i[n.predicate]:[i[n.predicate]],i[n.predicate].push(o)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function ri(t){let e=[];if(Array.isArray(t))return e=t.map(r=>ri(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let i=[];for(let o of n)typeof o=="object"?(o["@id"]=o?.["@id"]||"_:"+globalThis.crypto.randomUUID(),i.push({"@id":o?.["@id"]}),e=e.concat(ri(o))):i.push(o);t[r]=i,e=[t].concat(e)}return e}import xe from"fs/promises";var te={load:ra,save:ta,exists:ir,list:ia,delete:na,file:{load:ra,save:ta,delete:na,exists:ir},dir:{list:ia,exists:ir,delete:Bf},getFilePath:ct};async function ir(t,e){t=ct(t,e);try{return await xe.access(t),!0}catch{return!1}}async function Uf(t){try{await xe.mkdir(t,{recursive:!0})}catch(e){throw e}}async function ta(t,e,r){await Uf(t),t=ct(t,e);try{await xe.writeFile(t,r,"utf8")}catch(n){throw n}}async function ra(t,e){t=ct(t,e);try{return await xe.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function na(t,e){t=ct(t,e);try{await xe.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function Bf(t){try{await xe.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function ia(t){if(await ir(t)==!1)return[];try{return await xe.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function ct(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var ai={};g(ai,{Button:()=>Ff,DropdownMenu:()=>sa,MenuItem:()=>Mf,escapeHtml:()=>ae});function ae(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ff({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[e]||o.default} ${a[r]||a.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function oi(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let i=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?oi(n,i):`<input type="hidden" name="${ae(i)}" value="${ae(String(n))}">`}).join("")}function sa({label:t="",items:e=[],align:r="end",variant:n="ghost",size:i="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},u={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},c=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),p=t?`<span class="mr-2">${ae(t)}</span>${c}`:`${c}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let b=e.map(S=>{if(S.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let E=oi(S.object),ce=S.disabled?"disabled":"";return`
        <form method="POST" action="${ae(S.url||"")}" class="m-0 p-0">
          ${E}
          <button
            type="submit"
            ${ce}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ae(S.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${a}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${u[n]||u.ghost} ${d[i]||d.icon}"
      >
        ${p}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${b}
      </div>
    </details>
  `.trim()}function Mf(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=oi(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ae(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ae(h.getName(item)||"")}
          </button>
        </form>`}var re={};g(re,{components:()=>y});var li={};g(li,{Accordion:()=>Ef});function Ef({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var ui={};g(ui,{Alert:()=>Lf});function Lf({title:t,description:e="",variant:r="default",className:n=""}){let i={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${i[r]||i.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var di={};g(di,{Article:()=>Wf,ArticleBody:()=>Yf,ArticleCard:()=>Zf,ArticleCardBody:()=>ep,ArticleCardFooter:()=>tp,ArticleCardHeader:()=>Qf,ArticleCardMedia:()=>np,ArticleCardTitle:()=>rp,ArticleCategory:()=>zf,ArticleFooter:()=>Xf,ArticleHeader:()=>Jf,ArticleMedia:()=>Kf,ArticleSubTitle:()=>Gf,ArticleTitle:()=>qf});function Wf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function Jf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function zf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function qf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function Gf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function Kf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function Yf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function Xf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function Zf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function Qf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function ep(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function tp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function rp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function np(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var ci={};g(ci,{Badge:()=>ip,Badges:()=>sp});function ip(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function sp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var fi={};g(fi,{Breadcrumb:()=>op,BreadcrumbEllipsis:()=>lp,BreadcrumbItem:()=>la,BreadcrumbLink:()=>ua,BreadcrumbList:()=>aa,BreadcrumbMain:()=>oa,BreadcrumbPage:()=>ap,BreadcrumbSeparator:()=>da});function op({urls:t,titles:e,links:r}){let n=new V.ItemList(r);if(t)for(let a=0;a<t.length;a++){let l=e?.[a]||t[a].split("/")?.[t[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[a],name:l})}let i=n.items;return console.log("items",i),oa({children:aa({children:i.map(a=>la({children:ua({href:a?.url,children:a?.name})})).join(da())})})}function oa({children:t="",className:e="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${r}>
        ${t}
      </nav>
    `.trim()}function aa({children:t="",className:e="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${r}>
        ${t}
      </ol>
    `.trim()}function la({children:t="",className:e="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${r}>
        ${t}
      </li>
    `.trim()}function ua({children:t="",href:e="#",className:r="",attrs:n=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${t}
      </a>
    `.trim()}function ap({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function da({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function lp({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var pi={};g(pi,{Button:()=>up});function up({text:t,variant:e="primary",size:r="default",className:n="",attrs:i=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.primary} ${a[r]||a.default} ${n}" ${i}>
        ${t}
      </button>
    `.trim()}var gi={};g(gi,{Card:()=>dp,CardBody:()=>pp,CardContent:()=>yp,CardDescription:()=>mp,CardFooter:()=>gp,CardHeader:()=>cp,CardMain:()=>fp,CardMedia:()=>bp,CardTitle:()=>hp});function dp(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function cp(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function fp(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function pp(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function gp(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function hp(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function mp(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function yp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function bp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var hi={};g(hi,{Dialog:()=>xp});function xp({id:t,title:e,description:r="",content:n,footer:i="",className:o=""}){return`
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
    `.trim()}var mi={};g(mi,{Footer:()=>Vp});function Vp({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let i=r.map(o=>`
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
    `.trim()}var yi={};g(yi,{Header:()=>wp});function wp({brand:t="",navItems:e=[],actions:r="",className:n=""}){let i=e.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
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
              ${o.dropdown.map(u=>`
                <a href="${u.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${u.name}
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
    `.trim()}var bi={};g(bi,{H1:()=>Ap,H2:()=>_p,H3:()=>Sp,H4:()=>$p,H5:()=>Ip,H6:()=>kp,Heading:()=>Ve,P:()=>Tp,Text:()=>Pp});function Ap(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"1",options:e,record_id:r,propertyID:n,className:i})}function _p(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"2",options:e,record_id:r,propertyID:n,className:i})}function Sp(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"3",options:e,record_id:r,propertyID:n,className:i})}function $p(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"4",options:e,record_id:r,propertyID:n,className:i})}function Ip(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"5",options:e,record_id:r,propertyID:n,className:i})}function kp(t,{options:e,record_id:r,propertyID:n,className:i}){return Ve({title:t,level:"6",options:e,record_id:r,propertyID:n,className:i})}function Ve({title:t,level:e,options:r,record_id:n,propertyID:i,className:o}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${i}" 
    class="break-all ${o||""}"
    >${t}</h${e}>
    
    `}function Tp(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}function Pp(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}var xi={};g(xi,{Input:()=>H,InputCheckbox:()=>Np,InputDate:()=>Dp,InputDateTime:()=>jp,InputEmail:()=>Rp,InputNumber:()=>Cp,InputPassword:()=>vp,InputTel:()=>Op,InputText:()=>Up,InputTime:()=>Bp,InputUrl:()=>Hp});function H({label:t="",type:e="text",placeholder:r="",value:n="",id:i="",className:o="",attrs:a=""}){let l=i?`id="${i}"`:"";return`
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
          ${a||""}
        />
      </div>
    `.trim()}function Np({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:i})}function Dp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"date",label:t,value:e,propertyID:r,id:n,className:i})}function Cp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"number",label:t,value:e,propertyID:r,id:n,className:i})}function jp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:i})}function Rp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"email",label:t,value:e,propertyID:r,id:n,className:i})}function vp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"password",label:t,value:e,propertyID:r,id:n,className:i})}function Op({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"tel",label:t,value:e,propertyID:r,id:n,className:i})}function Up({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"text",label:t,value:e,propertyID:r,id:n,className:i})}function Bp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"time",label:t,value:e,propertyID:r,id:n,className:i})}function Hp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return H({type:"url",label:t,value:e,propertyID:r,id:n,className:i})}var Vi={};g(Vi,{Pagination:()=>Fp,PaginationComponent:()=>fa,PaginationContent:()=>pa,PaginationEllipsis:()=>ma,PaginationItem:()=>ft,PaginationLink:()=>sr,PaginationNext:()=>ha,PaginationPrevious:()=>ga,buildPaginationUrl:()=>ca});function ca(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function fa({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function pa({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function ft({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function sr({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:i="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",u=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${u} ${i}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function ga({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return sr({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function ha({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return sr({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function ma({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Fp({url:t,total:e,limit:r=10,offset:n=0,siblingCount:i=1,className:o="",attrs:a=""}={}){let l=Math.ceil(e/r)||1,u=Math.floor(n/r)+1,d=L=>{let W=(L-1)*r;return ca(t,r,W)},c=(L,W)=>{let pe=W-L+1;return Array.from({length:pe},(yt,bt)=>L+bt)},p=i+5,b=[];if(p>=l)b=c(1,l);else{let L=Math.max(u-i,1),W=Math.min(u+i,l),pe=L>2,yt=W<l-2,bt=1,Ka=l;if(!pe&&yt){let Fe=3+2*i;b=[...c(1,Fe),"ellipsis",l]}else if(pe&&!yt){let Fe=3+2*i,is=c(l-Fe+1,l);b=[bt,"ellipsis",...is]}else if(pe&&yt){let Fe=c(L,W);b=[bt,"ellipsis",...Fe,"ellipsis",Ka]}}let S=[],E=u>1,ce=E?d(u-1):"#";S.push(ft({children:ga({href:ce,disabled:!E})})),b.forEach(L=>{if(L==="ellipsis")S.push(ft({children:ma()}));else{let W=Number(L),pe=W===u;S.push(ft({children:sr({href:d(W),isActive:pe,children:String(W)})}))}});let fe=u<l,xr=fe?d(u+1):"#";S.push(ft({children:ha({href:xr,disabled:!fe})}));let Vr=fa({className:o,attrs:a,children:pa({children:S.join("")})});return Vr=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Vr}
    </div>`,Vr}var wi={};g(wi,{Section:()=>Mp,SectionHeader:()=>Ep});function Mp({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:i="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},u=a[e]||a.default,d=l[r]!==void 0?l[r]:l.default,c=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${i}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${u} ${n}" ${o}>
      ${c}
    </section>
  `.trim()}function Ep({title:t="",description:e="",align:r="left",className:n=""}={}){let i={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${i[r]||i.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var Ai={};g(Ai,{Table:()=>Wp,TableBody:()=>xa,TableCell:()=>K,TableCellCenter:()=>Kp,TableCellLeft:()=>Gp,TableCellLink:()=>Xp,TableCellNumber:()=>Yp,TableCellRight:()=>wa,TableCellText:()=>Zp,TableColumnHeader:()=>ba,TableColumnHeaderCenter:()=>qp,TableColumnHeaderLeft:()=>Jp,TableColumnHeaderRight:()=>zp,TableFooter:()=>Aa,TableHeader:()=>ya,TableRow:()=>Va,getTable:()=>Lp});function Lp({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${ya(t.map(n=>ba(n)))}
      
        ${xa(e.map(n=>Va(n.map(i=>K(i)))))}
        
        ${Aa()}

      </table>

    </div>
  
  
  `}function Wp(t,e,r,n,i=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${i||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function ya(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function ba(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function Jp(t,e){return K(t,e)}function zp(t,e){return e=e+" text-right ",K(t,e)}function qp(t,e){return e=e+" text-center ",K(t,e)}function xa(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function Va(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
    <tr 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="${n||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${t}</tr>
  `}function K(t,e,r,n){return t||(t=""),Array.isArray(t)&&(t=t.join(" ")),`
    <td 
      data-id="${e||""}" 
      data-property-id="${r||""}" 
      class="p-4 align-middle ${n||""}"
    >${t}</td>
  `}function Gp(t,e,r,n){return K(t,e,r,n)}function wa(t,e,r,n){return n=n+" text-right ",K(t,e,r,n)}function Kp(t,e,r,n){return n=n+" text-center ",K(t,e,r,n)}function Yp(t,e,r,n,i,o){return t=s.toNumber(t),t=f.number.format(t,e),wa(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function Xp(t,e,r,n,i,o){return K(`
      
    <a data-id="${n||""}" data-property-id="${i||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function Zp(t,e,r,n){let i=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return K(i)}function Aa(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var _i={};g(_i,{Webpage:()=>Qp});function Qp({title:t,headContent:e,header:r,footer:n,content:i,breadcrumb:o}){return`
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
  `.trim()}var Si={};g(Si,{CardGrid:()=>eg});function eg({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),i=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${i}">
      ${e}
    </div>
  `}var $i={};g($i,{JsonEditor:()=>rg});function _a({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.default} ${a[r]||a.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function tg({title:t="",description:e="",children:r="",footer:n="",className:i="",attrs:o=""}={}){return`
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
  `.trim()}function rg({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:i="",attrs:o=""}={}){let a=t.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),u=JSON.stringify(n,null,2),d=`
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
  `.trim(),c=`
    <form id="${a}_form" onsubmit="window.${a}_submit(event)" class="space-y-4">
      <div>
        <label for="${a}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${a}_endpoint"
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
            id="${a}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${u}</textarea>
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
            ${_a({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
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
        ${_a({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
      </div>
    </form>

    <div id="${a}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${a}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${a}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${d}
  `.trim();return tg({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:c,className:i,attrs:o})}var Ii={};g(Ii,{Modal:()=>ng,ModalBody:()=>sg,ModalTrigger:()=>ig});function ng(t,e,r){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2" 
      
    >
        ${t||""}
    </div>
    
    
    `}function ig(t,e,r){return`
    
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
    
    `}function sg(t,e,r){return`
    
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
            class="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
    
    
    `}var ki={};g(ki,{DropdownMenu:()=>ag,DropdownMenuIcon:()=>lg,Menu:()=>og,MenuItemLink:()=>ug,MenuItemPost:()=>dg,MenuItemSeparator:()=>cg});function og(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function ag(t,e,r){return`
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

    `}function lg(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function ug(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function dg(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function cg(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Ti={};g(Ti,{Kanban:()=>fg,KanbanBody:()=>gg,KanbanCard:()=>wg,KanbanCardBody:()=>_g,KanbanCardFooter:()=>Sg,KanbanCardHeader:()=>Ag,KanbanColumn:()=>yg,KanbanColumnBody:()=>xg,KanbanColumnFooter:()=>Vg,KanbanColumnHeader:()=>bg,KanbanFooter:()=>hg,KanbanHeader:()=>pg,KanbanTitle:()=>mg});function fg(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function pg(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function gg(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function hg(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function mg(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function yg(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function bg(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function xg(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function Vg(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function wg(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function Ag(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function _g(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function Sg(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var Pi={};g(Pi,{StarRating:()=>$g,StarRatingEmpty:()=>Tg,StarRatingFull:()=>Ig,StarRatingHalf:()=>kg});function $g(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function Ig(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function kg(t,e){return`
    
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


    `}function Tg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var y={...li,...ui,...di,...ci,...fi,...pi,...gi,...Si,...hi,...ai,...mi,...yi,...Ti,...ki,...Ii,...xi,...$i,...Vi,...wi,...Pi,...Ai,...bi,..._i};var Ri={};g(Ri,{Card:()=>Og,Cards:()=>Ug});var ji={};g(ji,{Media:()=>we,MediaImage:()=>ka,MediaVideo:()=>Ia});var ar={};g(ar,{fixedLength:()=>or,textCenter:()=>Ni});function or(t,e=void 0,r=0){let n=t;if(s.isArray(t)){let o=t.length;o==0&&(t=""),o==1&&(t=t[0]),o>1&&(t=`(${t.length})`)}let i=f.getDataType(t);if(i=="Undefined"&&(t=""),i=="Jsonld"&&(t=t?.["@id"]),i=="Number"&&(t=f.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),i=="Date"&&(t=f.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let o="",a=Math.round(e/3),l=e-a-3;o+=t.slice(0,a),o+="...",o+=t.slice(-l),t=o}return e!=null&&(t=t.padEnd(e," ")),t}function Ni(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var Ci={};g(Ci,{toTextRecord:()=>Pg,toTextTable:()=>Cg});function Pg(t,e=80){let r=Ng(t,e),n=Dg(t),i="";i+=Sa(r),i+=`
`,n.length>0?i+=n.map(o=>$a(o,r)).join(""):i+=`(no records)
`}function Ng(t,e=80){let n=Di(t).map(a=>(a||"").length),i=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(i,11)},{t:"Value",p:"value",w:e-Math.max(i,11)}]}function Dg(t){let e=Di(t),r=[];for(let n of e){let i={"@type":"PropertyValue",propertyID:n,value:f.getValues(t,n)};r.push(i)}return r}function Cg(t,e,r=!0,n=80){e=jg(t,e,r),t=Rg(t,e,r);let i="";if(i+=Sa(e),i+=`
`,t.length>0){let o=t.map(a=>$a(a,e));i+=o.join("")}else i+=Ni("(no records to display.)",n);return i}function jg(t,e,r=!0){e=s.toArray(e),(!e||e.length==0)&&(e=Di(t).map(i=>({title:i,propertyID:i,width:i.length}))),(r=!0)&&(e.map(i=>i?.propertyID||i?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function Rg(t,e,r=!0){if(t=s.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,i]of t.entries())i.position=i?.position??n;return t}function Sa(t){let e="",r=[];for(let i of t){let o=`${or(i.title,i.width,i.rounding)}`;r.push(o)}e+=r.join(" "),e+=`
`;let n=[];for(let i of t){let o=`${"".padStart(i.width,"-")}`;n.push(o)}return e+=n.join(" "),e+=`
`,e}function $a(t,e){let r="",n=[];for(let i of e){let o=s.getValues(t,i.propertyID),a=`${or(o,i.width,i.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function Di(t){t=s.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=vg(e),e}function vg(t){t=s.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let i of e){if(r==i&&n!=i)return-1;if(r!=i&&n==i)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var pt={...ar,...Ci};function we(t,e){if(!s.getValue(t,"contentUrl"))return"";let n="";return s.record_type(t)=="VideoObject"?Ia(t,e):ka(t,e)}function Ia(t,e){let r=s.getValue(t,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function ka(t,e){let r=s.getValue(t,"contentUrl");return r?y.Modal(y.ImageModal(r)):""}function le({website:t,webpage:e,title:r,headContent:n,content:i,options:o}){e=new V.WebPage(e),t=new V.WebSite(t);let a={};a.title=r,a.title=a.title||s.getValue(e,"title"),a.title=a.title||s.getValue(e,"name"),a.title=a.title||s.getValue(t,"title"),a.title=a.title||s.getValue(t,"name"),a.headContent=n,a.breadcrumb=y.Breadcrumb({links:s.getValue(e,"breadcrumb")});let l=s.getValue(t,"about.name")??s.getValue(t,"name")??s.getValue(e,"about.name")??s.webpage(t,"name"),u=e.WPHeader.hasPart||[],d=e.WPFooter.hasPart||[];return u=Array.isArray(u)?u:[u],d=Array.isArray(d)?d:[d],a.header=y.Header({brand:l,navItems:u}),a.footer=y.Footer({brand:l,navItems:d}),a.content=i,y.Webpage(a)}function Ta({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:p}){return o=o??"",o+=P.Cards({url:n,records:a,offset:d,limit:c,nbOfColumns:3,options:p}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:p})}function Og(t,e,r,n=!0){let i=V.format.getTitle1(t),o=V.format.getContent(t),a=s.getRecordUrl(t,e),l=n==!0?V.format.imageUrl(t):void 0;return y.Card({title:i,description:o,url:a,media:l,className:r})}function Ug({url:t,records:e,offset:r,limit:n,orderBy:i,orderDirection:o,nbOfColumns:a,includePagination:l,options:u,layoutClasses:d,className:c,attrs:p}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let b=new V.ItemList(e);b=b.record,b.numberOfItems=b?.numberOfItems??b.itemListElement.length,b=lr({record:b,options:u}),b.itemListElement=b.itemListElement.filter(fe=>s.getValue(fe,"position")>=r&&s.getValue(fe,"position")<r+n);let S="";for(let fe of s.getValues(b,"itemListElement")){let xr=s.getValue(fe,"item");S+=Bg({url:t,item:xr,options:u})}S=y.CardGrid({content:S,nbOfColumns:a});let E=y.Pagination({url:t,limit:n,offset:r,total:b.numberOfItems,options:u});return`

        <div class="${d} ${c}" ${p}>
        <div class="flex-1">
            ${S}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${E}
        </div>
        </div>

    `}function Bg({url:t,item:e,options:r}){let n=s.getImageUrl(e),i=s.getImageName(e),o=s.getValues(e,"keywords");o=o.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let a=y.Badges({text:o,variant:"secondary"}),l={title:s.getValue(e,"name"),url:s.getRecordUrl(e,r?.baseUrl),description:s.getValue(e,"description"),footer:a,image:s.getImageUrl(e),imageAlt:s.getImageName(e),media:we({record:e,options:r})};return y.Card(l)}var vi={};g(vi,{Input:()=>Fg});function Fg({record:t,propertyID:e,value:r}){return y.Input({value:r})}var Ui={};g(Ui,{Table:()=>Mg,TableBody:()=>Na,TableCell:()=>Ca,TableHeader:()=>Pa,TableRow:()=>Da,getDataType:()=>ja,getHeadersFromProperties:()=>Oi,getPropertiesFromRecords:()=>Be});function Mg(t,e,r,n,i,o){let a=t;r=r||Be(a),n=n||Oi(r);let l=[];return i==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),y.Table(Pa(a,r,n,l)+Na(a,r,e,l))}function Pa(t,e,r,n){return e=e||Be(t),r=r||Oi(e),n=n||[],e=e||Be(t),y.TableHeader(r.map((i,o)=>{switch(n?.[o]){case"number":return y.TableColumnHeaderRight(i);default:return y.TableColumnHeader(i)}}).join(" "))}function Na(t,e,r,n){e=e||Be(t),n=n||[];let i=s.getValues(new V.ItemList(t),"itemListElement");return y.TableBody(i.map(o=>Da(o,e,r,n)).join(" "))}function Da(t,e,r,n){return e=e||Be(t),n=n||[],y.TableRow(e.map((a,l)=>Ca(t,s.getValues(t,a),a,r,n,l)).join(" "),s.record_id(t),void 0,"kr-listitem")}function Ca(t,e,r,n,i,o){let a=e,l=r,u=t;if(a=s.isArray(a)&&a.length==0?"":a,a=s.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let d=f.url.getUrl(n||"","/"+a);return y.TableCellLink(d,a)}if((l||"").endsWith("@id")){let d=s.getRecordUrl(u,n);return y.TableCellLink(d,a)}switch(i?.[o]||ja(a)){case"array":return y.TableCellCenter(`(${a.length})`);case"text":return y.TableCellText(a);case"number":return y.TableCellNumber(a,2);case"link":return y.TableCellLink(a,a);case"thumbnail":return y.TableCell(we({record:a}));case"position":return y.TableCellNumber(a,0);case"object":return y.TableCellLink(s.getRecordUrl(a,n),s.record_id(a));default:return y.TableCellText(a)}}function Be(t){let r=s.getValues(t,"itemListElement").map(i=>s.getValue(i,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(i=>i.startsWith("@")===!1),n=n.map(i=>"item."+i),n=["item.@type","item.@id"].concat(n),n}function Oi(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function ja(t){return t=s.isArray(t)&&t.length==0?void 0:t,t=s.isArray(t)&&t.length==1?t[0]:t,t?f.isNumber(t)?"number":f.isUrl(t)?"link":f.isDate(t)?"date":f.isArray(t)?"array":f.isObject(t)?"object":"text":"text"}var Bi={};g(Bi,{Record:()=>Eg});function Eg(t,e,r,n="",i="",o=!1,a=0,l={}){t=s.removeCircularRefs(t),r=r||Object.keys(t),l.baseUrl=e||l?.baseUrl;let u={rows:[]},d=Ra({record:t,baseUrl:e,properties:r,className:n,attrs:i,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${i||""}>
            <div class="flex-1">
                ${we({record:t,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${y.JsonEditor({initialData:t,endpoint:e})}
              </details>
            </div>
        </div>

    `}function Ra({record:t,properties:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){e=e||Object.keys(t);let l=e.filter(p=>p.startsWith("@")),u=e.filter(p=>!p.startsWith("@"));e=l.sort().concat(u.sort());let d={rows:[]};return y.Table(y.TableHeader(y.TableRow(y.TableCellRight("")+y.TableCellRight(P.DropdownMenu(s.getPotentialActions(t)))))+y.TableBody(e.map(p=>y.TableRow([y.TableCell(p+":"),y.TableCell(va({record:t,propertyID:p,className:r,attrs:n,expandAll:i,depth:o+1,options:a}))].join(" "))).join(" ")))}function Lg({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){let l=s.getValues(t,e),u=[];for(let d of l){let c=s.clone(t);c=s.setValue(c,e,d),u.push(va({record:c,propertyID:e,className:r,attrs:n,expandAll:i,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${u.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function va({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){let l=s.getValues(t,e);return s.isArray(l)&&l.length==1&&(l=l[0]),s.isArray(l)&&l.length==0?"":s.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(l,e,a?.baseUrl)}</summary>
      
                ${Lg({record:t,propertyID:e,className:r,attrs:n,expandAll:i,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(l,e,a?.baseUrl)}</summary>
      
            ${Ra({record:l,propertyID:void 0,className:r,attrs:n,expandAll:i,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":P.Value(l,e,a?.baseUrl)}var Hi={};g(Hi,{DropdownMenu:()=>Jg,Menu:()=>Wg});function Wg(t){return t=s.toArray(t),!t||t.length==0?"":y.DropdownMenu(y.DropdownMenuIcon(),t.map(e=>y.MenuItemPost(s.getImageUrl(e),s.getName(e),s.getUrl(e))).join(" "))}function Jg(t){if(t=s.toArray(t),!t||t.length==0)return"";let e=t.map(n=>y.MenuItemPost(s.getImageUrl(n),s.getName(n),s.getUrl(n),s.ref(n))).join(" ");return y.DropdownMenu(y.DropdownMenuIcon(),e)}var Fi={};g(Fi,{Kanban:()=>zg,KanbanCard:()=>Ua,KanbanColumn:()=>Oa});function zg(t,e){let r=s.getItems(t);return y.Kanban(y.KanbanHeader(y.KanbanTitle("Awesome Kanban","Fuck yeah"))+y.KanbanBody(propertyValues.map(n=>Oa(t,e,n)).join(" "))+y.KanbanFooter(""))}function Oa(t,e,r){let n=s.getItems(t);return n=n.filter(i=>s.getValue(i,e)==r),y.KanbanColumn(y.KanbanColumnHeader(r)+y.KanbanColumnBody(n.map(i=>Ua(i)).join(" "))+y.KanbanColumnFooter())}function Ua(t){return y.KanbanCard(y.KanbanCardHeader("xx")+y.KanbanCardBody(P.Value(s.getName(t),"name"))+y.KanbanCardFooter(P.Value(s.getActionStatus(t),"actionStatus")))}var P={...Ri,...vi,...ji,...Bi,...Ui,...Hi,...rn,...Fi};function lr({record:t,options:e}){if(s.isArray(t))return t.map(o=>lr({record:o,options:e}));let r=s.record_type(t);if(!r)return t;let n=f.url.getUrl(e.baseUrl,"/execute"),i=s.ref(t);for(let o of Object.keys(t?.record||t))t=s.setValues(t,o,lr({record:s.getValues(t,o),options:e}));return r=="Action"&&s.isPotential(t)&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n})),r=="ItemList"&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:i,url:n})),r=="ListItem"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),r=="Thing"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),t}function Ba({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:p}){return o=o??"",o+=P.Table({url:n,records:a,properties:l,headers:u,offset:d,limit:c,options:p}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:p})}function Ha({website:t,webpage:e,title:r,url:n,headContent:i,content:o,record:a,properties:l,headers:u,options:d}){return o=o??"",o+=P.Record({url:n,record:a,options:d}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:d})}var Fa={blankPage:le,recordsPage:Ba,recordPage:Ha,cardsPage:Ta};var Ma={blocks:P,...Fa,components:re,...re};var Mi={};g(Mi,{getParsedRequest:()=>qg});function qg(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var Ea={shadcn:Ma,express:Mi};var _e={};g(_e,{_getDate:()=>gt,compile:()=>dr,compileOverwrite:()=>Wa,datapointsToRecord:()=>Gi,dedupe:()=>zi,eq:()=>Gg,ge:()=>Ji,getConfidence:()=>F,getDataFeedItem:()=>Zg,getDatapoint:()=>Ei,getExecutionID:()=>Xg,getModifiedDate:()=>M,gt:()=>He,isEqual:()=>ht,le:()=>Wi,lt:()=>Li,merge:()=>Yg,recordToDatapoints:()=>qi,sameObject:()=>La,sameObjectAndProperty:()=>ne,sort:()=>ur,toString:()=>Ae});function Ae(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return s.isArray(t)?s.format.toTextTable(t,e):s.format.toTextRecord(t,e)}function ht(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r,n;return r=s.getValue(t,"value"),n=s.getValue(e,"value"),!(s.record_id(r)!=s.record_id(n)||r!=n||(r=s.getValue(t,"instrument"),n=s.getValue(e,"instrument"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"agent"),n=s.getValue(e,"agent"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"execution"),n=s.getValue(e,"execution"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeed"),n=s.getValue(e,"datafeed"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeedItem"),n=s.getValue(e,"datafeedItem"),s.record_id(r)!=s.record_id(n)))}function La(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"object"),n=s.getValue(e,"object");return s.record_id(r)==s.record_id(n)}function ne(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"propertyID"),n=s.getValue(e,"propertyID");return La(t,e)&&r==n}function Gg(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r=F(t),n=F(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let i=M(t),o=M(e);return!(i==null&&o!=null||i!=null&&o==null||+i!=+o)}function Li(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r=F(t),n=F(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let i=M(t),o=M(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<+o:!1}function Wi(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r=F(t),n=F(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let i=M(t),o=M(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<=+o:!0}function He(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r=F(t),n=F(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let i=M(t),o=M(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>+o:!1}function Ji(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e)==!1)return!1;let r=F(t),n=F(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let i=M(t),o=M(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>=+o:!0}function Kg(t,e){if(t=t?.record??t,e=e?.record??e,ne(t,e))return He(t,e);let r=s.getValue(t,"object"),n=s.getValue(e,"object"),i=r?.["@id"]||"",o=n?.["@id"]||"",a=i.split("#")?.[1],l=o.split("#")?.[1];if(a!=l)return a<l?-1:1;if(i!=o)return r<n?-1:1;let u=s.getValue(t,"propertyID"),d=s.getValue(e,"propertyID");return u!=d?u<d?-1:1:0}function ur(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,Kg(e,r))),t}function Yg(t,e){if(ht(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function zi(t){t=s.toArray(t);let e=[];for(let r of t)e.find(i=>ht(r,i))||e.push(r);return e}function F(t){t=t?.record??t;let e=s.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function Xg(t){t=t?.record??t;let e=s.getValue(t,"execution");return s.record_id(e)}function M(t){t=t?.record??t;let e;return e=e||gt(t,"dataFeedItem.dateDeleted"),e=e||gt(t,"dataFeedItem.dateModified"),e=e||gt(t,"dataFeedItem.dateCreated"),e=e||gt(t,"observationDate"),e}function gt(t,e){let r=s.getValue(t,e);return f.toDate(r)}function qi(t,e,r){function n(i,o,a,l,u){let d=[];if(s.isArray(a)){for(let c of a)d=d.concat(n(i,o,c,l,u));return d}if(a?.["@id"]){o&&d.push(Ei(i,o,{"@id":a?.["@id"]},l,u));let c={"@id":a?.["@id"]};for(let p of Object.keys(a))p!="@id"&&(d=d.concat(n(c,p,a[p],l,u)));return d}return[Ei(i,o,a,l,u)]}return r=r??s.randomUUID(),n(void 0,void 0,t,e,r)}function Gi(t){t=s.toArray(t),t=t.map(n=>n?.record??n);let e={};t=dr(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let i=s.getValue(n,"object"),o=s.record_id(i),a=s.getValue(n,"propertyID"),l=s.getValue(n,"value");e[o]=e?.[o]||{"@id":o},e[o]=s.addValues(e[o],a,l)}e=Object.keys(e).map(n=>e[n]);let r=new s.DB;return r.set(e),e=r.search(),e=s.simplify(e),e}function Ei(t,e,r,n={},i=s.randomUUID()){return{"@type":"Datapoint","@id":s.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:i,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function dr(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(i=>!Wa(r,i)),e=e.slice(1);let n=t.map(i=>i?.["@id"]);e=e.filter(i=>n.includes(i?.["@id"]))}return t}function Wa(t,e){if(t=t?.record??t,e=e?.record??e,s.getValue(t,"operation")=="AddAction"||ne(t,e)==!1||s.getValue(t,"valueGroupID")==s.getValue(e,"valueGroupID"))return!1;if(s.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&He(t,e)}return He(t,e)}function Zg(t,e,r,n,i){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:i}}var N=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=It.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=s.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var ue=class extends N{constructor(e,r,n,i,o,a,l){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=i??this.dataFeed,this.dataFeedItem=o??this.dataFeedItem,this.agent=a??this.agent,this.instrument=l??this.instrument)}toString(){return Ae(this.record)}set(e,r,n,i,o,a,l){this.c=e,this.d=r,this.execution=n,this.dataFeed=i,this.dataFeedItem=o,this.agent=a,this.instrument=l}get dataFeed(){return new N(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new N(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new N(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new N(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new N(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new N(e,"Person"),this.setValue("agent",e)}get instrument(){return new N(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new N(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new N(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new N(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var de=class extends ue{constructor(e,r,n,i){super({},"DataPoint"),s.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),i&&(this.metadata=i)}toString(){return Ae(this.record)}lt(e){return Li(this.record,e?.record??e)}le(e){return Wi(this.record,e?.record??e)}gt(e){return He(this.record,e?.record??e)}ge(e){return Ji(this.record,e?.record??e)}get object(){return new N(this.getValue("object"))}set object(e){e=e?.record?e:new N(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var cr=class extends ue{constructor(e,r,n,i,o,a,l){super(e,r,n,i,o,a,l),this._dataPoints=[]}get dataPoints(){return ur(this._dataPoints)}set dataPoints(e){this._dataPoints=ur(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return Ae(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return s.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,i){if(i=i??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let o=new de(e,void 0,void 0,i);return this._dataPoints.push(o),o}if(e&&!r)return this.#e(void 0,void 0,e,i);if(e&&r){let o=new de(e,r,n,i);return this._dataPoints.push(o),o}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return Gi(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,i){let a=qi(n,i).map(l=>new de(l));this.dataPoints=this.dataPoints.concat(a)}#t(e){if(s.isArray(e))return e=zi(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>ht(n,e))||this._dataPoints.push(e)}};var Ki={};g(Ki,{analyzeDataPoints:()=>eh,toString:()=>Qg});function Qg(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return s.isArray(t)?pt.toTextTable(t,e):pt.toTextRecord(t,e)}function eh(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(th(t,n));return r}function th(t,e){t=t.filter(i=>i.object["@id"]==e);let r=t.map(i=>i.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let i of r)console.log("rr",e,i),n=n.concat(rh(t,e,i));return n}function rh(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],i=t.filter(u=>u.object["@id"]==e&&u.propertyID==r),o=dr(i),a,l=[];for(let u of n){a=i.map(p=>s.getValue(p,u));let d={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ALL",N:a.length,uniqueN:[...new Set(a)].length};l.push(d),a=o.map(p=>s.getValue(p,u));let c={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ACTIVE",N:a.length,uniqueN:[...new Set(a)].length};l.push(c)}return l}var Ja={..._e,DataPoint:de,DataPointDB:cr,Metadata:ue,analysis:Ki};function Yi(t,e){if(s.isArray(t))return t.map(n=>Yi(n,e));let r=s.record_type(t);if(r=="ReplaceAction")return nh(t,e);if(r=="UpdateAction")return ih(t,e);if(r=="MoveUpAction")return sh(t,e);if(r=="MoveDownAction")return oh(t,e)}function nh(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n)i["@id"]=s.record_id(o)||s.record_id(i),e.set(i),s.addValue(t,"result",i);return t=s.setCompleted(t),t}function ih(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);o=o||{"@id":s.record_id(o)},o=s.patch(o,i),e.set(o),t=s.addValue(t,"result",o)}return t=s.setCompleted(t),t}function sh(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);a=helpers.things.ItemList.moveUp(a,i),e.set(a),t=s.addValue(t,"result",a)}return s.setCompleted(t),t}function oh(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);a=helpers.things.ItemList.moveDown(a,i),e.set(a),t=s.addValue(t,"result",a)}return s.setCompleted(t),t}function fr(t,e){if(!t)return t;if(s.isArray(t))return t.map(n=>fr(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=uh(t,e)),r=="ItemList"&&(t=lh(t,e));for(let n of Object.keys(t))t[n]=fr(t[n],e);return t}function lh(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let i=0;i<r.length;i++){let o=s.getValue(r[i],"position");o>0&&(r[i]=dh(r[i],t,e)),o<n-1&&(r[i]=ch(r[i],t,e)),r[i]=fh(r[i],t,e),r[i]=ph(r[i],t,e)}return t}function uh(t,e){let r;return s.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=ie(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=ie(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Failed")),s.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=ie(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Failed")),s.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=ie(t,e,r,"Set Failed")),t}function ie(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=s.record_id(t);let i={"@type":"UpdateAction",name:n,object:r,targetCollection:s.ref(t),url:e};return t=s.addValue(t,"potentialAction",i),t}function dh(t,e,r,n){n=n||"Move up";let i={"@type":"MoveUpAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function ch(t,e,r,n){n=n||"Move down";let i={"@type":"MoveDownAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function fh(t,e,r,n){n=n||"Delete";let i={"@type":"DeleteAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function ph(t,e,r,n){n=n||"Duplicate";let i={"@type":"DuplicateAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}var za={add:fr,execute:Yi};var qa={...s,jsonldBase:s,...V,things:V,rdf:si,...se,recordIDHelpers:se,dataHelpers:f,...Ht,transformHelpers:Ht,records:_,disk:te,datapointHelpers:Ja,format:pt,html:Ea,potentialAction:za},Xi=qa,Se=qa;var gr={};g(gr,{ApiDB:()=>Zi});var pr={};g(pr,{CacheDB:()=>mt});var mt=class{constructor(e){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(e))?void 0:Number(e)}getAll(e=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,e));return r}get(e,r=!0){if(s.isArray(e))return e.map(a=>this.get(a));if(e=s.toRecordID(e),!this._cache?.[e]||!this._cache?.[e]?.modifiedDate)return;let i=new Date-this._cache[e].modifiedDate;if(this._expiryDuration===void 0&&i>this._expiryDuration){this._cache[e]=void 0;return}let o=this._cache[e]?.value;return r===!0&&(o=s.expand(this.getAll(!1),o)),o=s.simplify(o),o}set(e){let r=s.flatten(e);for(let n of r){let i=s.record_id(n);this._cache[i]=this._cache?.[i]||{},this._cache[i].value=s.isRef(n)&&this._cache[i]?.value||n,this._cache[i].modifiedDate=new Date}}post(e){return this.set(e)}getSearch(e){if(e=e||"all",!this._searchCache?.[e])return[];if(!this._searchCache?.[e]?.modifiedDate)return;let n=new Date-this._searchCache[e].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[e]=void 0;return}let i=this._searchCache[e]?.value;return i=s.expand(this.getAll(!1),i),i}setSearch(e,r){r=s.toArray(r),this.set(r),this._searchCache[e]=this._searchCache?.[e]||{},this._searchCache[e].value=r,this._searchCache[e].records=s.flatten(r),this._searchCache[e].modifiedDate=new Date}};var Zi=class{constructor(e,r,n){this._base_url=e,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new mt}async get(e){e=Se.toRecordID(e);let r=this._cacheDB.get(e);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,i=Se.dataHelpers.url.getUrl(this._base_url,n,{record_id:e}),a=await(await fetch(i)).json();return this._cacheDB.set(a),console.log("record retrieved from db"),a}async search(e,r,n,i,o){let a={...e};r&&(a.offset=r),n&&(a.limit=n),i&&(a.orderBy=i),o&&(a.orderDirection=o),console.log("pp",a);let l="/"+this._databaseID+"/"+this._tenantID,u=Se.dataHelpers.url.getUrl(this._base_url,l,a);console.log("url",u);let c=await(await fetch(u)).json(),p=Se.getResult(c);return this._cacheDB.setSearch(a,p),console.log("record retrieved from db"),p}async post(e){let n=Se.dataHelpers.url.getUrl(this._base_url,"/"),o=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),a=Se.getResults(o);return this._cache.set(a),a.length==1?a[0]:a}};var mr={};g(mr,{ApiClient:()=>hr,default:()=>hh});var hr=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await Qi(this.headers,this.baseUrl,e,r)}async post(e,r){return await Ga(this.headers,this.baseUrl,e,r)}async patch(e,r){return await mh(this.headers,this.baseUrl,e,r)}async delete(e,r){return await es(this.headers,this.baseUrl,e,r)}async test(e){return await yh(this.headers,this.baseUrl,e)}},hh={ApiClient:hr};async function Qi(t,e,r,n){let i=new V.Action;i.name="API Get",i.instrument=new V.WebAPI(e),i.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=f.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"GET"},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function Ga(t,e,r,n){let i=new V.Action;i.name="API Post",i.instrument=new V.WebAPI(e);try{let o=f.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return console.log(o),console.log(u.statusText),i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return console.log(url),console.log(o),i.setFailed(String(o)),i}}async function mh(t,e,r,n){let i=new V.Action;i.name="API Post",i.instrument=new V.WebAPI(e);try{let o=f.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function es(t,e,r,n){let i=new V.Action;i.name="API Get",i.instrument=new V.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=f.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"DELETE"},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function yh(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},i=new V.Action,o={filter:{"@id":n["@id"]}},a;return a=await es(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step1 delete record"),i.record):(a=await Ga(t,e,r,n),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step2 create record"),i.record):(a=await Qi(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step3 get record"),i.record):a.result[0]?.["@id"]!=n?.["@id"]?(i.setFailed("Error step3 got wrong record"),i.record):(a=await es(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step4 delete record"),i.record):(a=await Qi(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step5 get record"),i):a.result?.name==n?.name?(i.setFailed("Error step5 record still exist"),i):(i.setCompleted(),i.record)))))}var br={};g(br,{DiskDB:()=>ts});var ts=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(s.isArray(e)){for(let n of e){let i=await this._set(n);r.addPart(i)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),i=s.record_id(e),o=yr(i),a=await te.save(this.path,o,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new s.DB;n.set(e);for(let i of n){let o=new V.Action("Saving record "+s.record_id(i));try{let a=JSON.stringify(i,null,4),l=s.record_id(i),u=yr(l),d=await te.save(this.path,u,a);o.setCompleted(i),r.addPart(o)}catch(a){o.setFailed(String(a)),r.addPart(o)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new V.Action("Get record from db");if(r.object=s.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(s.isArray(e)){let o=[];for(let a of e){let l=await this._get(a);r.addPart(l),o=o.concat(s.toArray(l.result))}return r.setCompleted(o),r.record}let n=yr(e),i=await te.load(this.path,n);if(!i||i=="")return r.setFailed("No records found"),r.record;try{let o=JSON.parse(i);return o=s.simplify(o),r.setCompleted(o),r.record}catch(o){return r.setFailed(o),r.record}}async _getNested(e){let r=new V.Action("Get nested record");r.object=s.ref(e);let n=new s.DatabaseHelper({"@id":e});for(;n.isActive;){let i=n.next,o=await this._get(i);r.addPart(o),o?.result?s.toArray(o.result).map(a=>n.add(a||s.ref(a))):n.add(s.ref(i))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new V.Action("Get all records"),n;try{n=await te.dir.list(this.path),n=n||[],n=s.toArray(n)}catch(a){return r.setFailed(a),r.record}if(n.length==0)return r.setCompleted([]),r.record;let i=n.map(a=>bh(a)),o=await this.get(i,e);return r.addPart(o),r.setCompleted(o.result),r.record}async exists(e){let r=await this.get(e,!1);return s.isCompleted(r)}async delete(e){let r=new V.Action("Delete record");if(r.object=s.ref(e),!e)return r.setCompleted(),r.record;if(s.isArray(e)){for(let n of e){let i=await this.delete(n);r.addPart(i)}return r.setCompleted(),r.record}e=s.toRecord_id(e);try{let n=yr(e),i=await te.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new V.Action("Purge database");try{let r=await te.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function yr(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function bh(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}var rs={apiDB:gr,...gr,apiClient:mr,...mr,cacheDB:pr,...pr,diskDB:br,...br};var ns={...Xi,helpers:Xi,...rs,tools:rs},J0=ns,z0=ns,q0=ns;export{ns as _h,q0 as default,z0 as h,J0 as helpers,_ as records,m as transformHelpers};
//# sourceMappingURL=index.js.map
