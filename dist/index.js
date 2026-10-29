var Ta=Object.defineProperty;var p=(t,e)=>{for(var r in e)Ta(t,r,{get:e[r],enumerable:!0})};var $e={get:Fe,set:gt,flatten:Pa,expand:Da};function Fe(t,e){if(!e||typeof e!="string")return;let r=Mi(e),n=t;for(let i of r)isNaN(i)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[i];return n}function gt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=Mi(e);if(n.length==0)return r;let i=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let o=t;for(let a=0;a<n.length-1;a++){let l=n[a],u=n[a+1],d=!isNaN(u);d==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),d==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,t}function Pa(t){function e(i,o){let a=[];return Array.isArray(o)?(i=i||"",o.map((u,d)=>e(`${i}[${String(d)}]`,u)).flat()):o?.["@type"]||o?.["@id"]?(i=i&&i!=""?i+".":"",Object.keys(o).map(u=>e(`${i}${u}`,o[u])).flat()):[{propertyID:i,value:o}]}let r=e("",t),n={};return r.forEach(i=>n[i.propertyID]=i.value),n}function Da(t){let e={};return Object.keys(t).forEach(r=>gt(e,r,t?.[r])),e}function Mi(t){let e=[],r="",n=["[","]","."];for(let i of t)if(n.includes(i)){r!=""&&e.push(r),r="";continue}else r=r+i;return e.push(r),e=e.filter(i=>i!=""),e=e.map(i=>isNaN(Number(i))?i:Number(i)),e}var xr={};p(xr,{eq:()=>Oa,ge:()=>Ma,getDiff:()=>Li,getHash:()=>Ei,getHashNested:()=>Ea,gt:()=>Fa,isEqual:()=>Ba,isSame:()=>Ra,le:()=>Ha,lt:()=>Ua});var ht={};p(ht,{expand:()=>Na,flatten:()=>ja,getChildren:()=>va,handleRelationships:()=>yr,simplify:()=>br,strip:()=>mr});function Na(t,e,r=!0){let n=s._storeToMap(t),i=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(f=>o(f));let l=s.record_id(a);if(l&&i.has(l)){let f=i.get(l);return r?f:s.ref?s.ref(f):{"@id":l}}let d=(l&&n instanceof Map?n.get(l):null)||a,c=Array.isArray(d)?[...d]:{...d};l&&i.set(l,c);for(let f of Object.keys(c))f==="previousItem"||f==="nextItem"||(c[f]=o(c[f]));return c}return typeof e=="string"&&(e={"@id":e}),o(e)}function mr(t){function e(r,n,i){if(Array.isArray(r))return r.map(o=>e(o,n,i));if(r?.["@type"]||r?.["@id"]){if(i>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=e(r?.[a],n,i+1);return o}}return r}return e(t,0,0)}function ja(t){function e(n){let i=[];if(!n)return[];if(s.isArray(n)){let o=[];for(let a of n)o=o.concat(e(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=s.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=s.ref(n?.[o]);continue}let a=n[o];a=s.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),i=i.concat(e(l))}return i=[n].concat(i),i}t=s.clone(t),t=s.setTempID(t),t=yr(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>s.isRef(n)===!1),r}function yr(t){if(s.isArray(t))return t.map(r=>yr(r));let e=t;if(s.record_type(e)=="Product"){let r=s.getValues(e,"offers");r=r.map(o=>s.insertValue(o,"itemOffered",s.ref(e))),e=s.setValues(e,"offers",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}if(s.record_type(e)=="Offer"){let r=s.getValues(e,"itemOffered");r=r.map(o=>s.insertValue(o,"offers",s.ref(e))),e=s.setValues(e,"itemOffered",r);let n=s.getValues(e,"review");n=n.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",n);let i=s.getValues(e,"aggregateRating");i=i.map(o=>s.insertValue(o,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",i)}return e}function br(t){function e(n,i=0){if(i>20)return n;if(i+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>e(o,i)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=e(n?.[a],i);a=="itemListElement"&&(l=s.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=s.toArray(o?.["@id"])?.[0],o}return n}}return t=s.clone(t),e(t)}function va(t){function e(r,n){if(s.isArray(r)){let o=[];for(let a of r){let l=e(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let i=[];n>0&&i.push(r);for(let o of Object.keys(r))i=i.concat(e(r[o],n+1));return i=i.filter(o=>o),i}return e(t,0)}function Ra(t,e){if(t=s.record_id(t)??t,e=s.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function Oa(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=s.clean(t),e=s.clean(e),t=s.strip(t),e=s.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function Ba(t,e){let r=(i,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{t=s.JSON_stringify(t)}catch{}try{e=s.JSON_stringify(e)}catch{}return t==e}function Ua(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function Ha(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function Fa(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function Ma(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function Ei(t,e=!1){t=br(t),e==!1&&(t=mr(t));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((u,d)=>({...u,[d]:r(l[d])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(t)),i=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(i)return i.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function Ea(t){return Ei(t,!0)}function Li(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let i=Li(t[n],e[n]);i!==null&&(r[n]=i)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var wr={};p(wr,{evaluate:()=>Vr});function Vr(t,e){let r=[];for(let i of Object.keys(e)){let o=i,a=e?.[i];if(a=s.toArray(a),o=="$and")return a.every(l=>Vr(t,l));if(o=="$or")return a.some(l=>Vr(t,l));for(let l of a){let u=Wa(t,o,l);r.push(u)}}return r.every(i=>La(i.r,i.p,i.o,i.v))}function La(t,e,r,n){try{let i=$e.get(t,e);if(typeof i=="string"&&(i=i.trim()),typeof n=="string"&&(n=n.trim()),i=isNaN(Number(i))?i:Number(i),n=isNaN(Number(n))?n:Number(n),r=="$equal")return i==n;if(r=="$lt")return i<n;if(r=="$gt")return i>n;if(r=="$le")return i<=n;if(r=="$ge")return i>=n;if(r=="$same")return i?.["@id"]&&i?.["@id"]===n?.["@id"];if(r=="$includes")return i.includes(n)}catch(i){return console.log("err",i),!1}}function Wa(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var Ur={};p(Ur,{assignId:()=>wl,getGenericRecordID:()=>Vl,normalizeRecordId:()=>bl,replaceIds:()=>is,setTempID:()=>ns});var ge={};p(ge,{default:()=>hl,get:()=>Q,getGenericRecordID:()=>ze,getStandardID:()=>St,recordIdHelpers:()=>_t,set:()=>wt,validate:()=>Je});var Ar={};p(Ar,{clean:()=>Ja,isArray:()=>ke,isValid:()=>za,toArray:()=>mt});function Ja(t){return mt(t)}function za(t){return ke(t)}function ke(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function mt(t){return isNull(t)?[]:(t=ke(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var Sr={};p(Sr,{clean:()=>_r,format:()=>Ga,formatDate:()=>Wi,isDate:()=>X,isNotDate:()=>Ka,isValid:()=>qa,toDate:()=>Ie});function _r(t,e=void 0){return Ie(t)||e}function qa(t){return X(t)}function Ga(t,e=!1){return Wi(t,e)}function X(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Ka(t){return!X(t)}function Ie(t){if(t===void 0)return;if(X(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=X(t)?t:void 0,t}function Wi(t,e=!1){if(console.log("vv",t,Ie(t)),t=Ie(t),X(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),i=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${i}-${o}`;if(e==!0){let l=String(r.getHours()).padStart(2,0),u=String(r.getMinutes()).padStart(2,0),d=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${u}:${d}`}return console.log("cc",a),a}var kr={};p(kr,{clean:()=>Ya,isNotNull:()=>$r,isNull:()=>Pe,isValid:()=>Za});function Ya(t,e=void 0){}function Za(t){return Pe(t)}function $r(t){return!Pe(t)}function Pe(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||Te.array.isValid(t)?t.length==0:t instanceof Date?Te.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Tr={};p(Tr,{clean:()=>Ir,format:()=>Qa,formatDecimals:()=>Ji,isNotNumber:()=>el,isNumber:()=>Me,isValid:()=>Xa,toNumber:()=>yt});function Ir(t,e=void 0){return yt(t)??e}function Xa(t){return Me(t)}function Qa(t,e){return Ji(t,e)}function Ji(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function Me(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function el(t){return!Me(t)}function yt(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Pr={};p(Pr,{clean:()=>tl,cleanObject:()=>Ee,isObject:()=>bt,isValid:()=>rl});function tl(t,e=void 0){return Ee(t)||e}function rl(t){return bt(t)}function bt(t){return t===void 0||b.isString(t)==!0||b.isDate(t)==!0||b.isNumber(t)==!0||b.isArray(t)==!0?!1:Object.keys(t).length>0}function Ee(t){if(b.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],Ee(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(Ee(x));e=e.filter(r=>b.isNotNull(r))}}if(b.object.isValid(t))for(let e of Object.keys(t))t[e]=Ee(t[e]),Te.isNull(t[e])&&delete t[e];return Te.isNotNull(t)?t:void 0}var Cr={};p(Cr,{clean:()=>nl,cleanString:()=>zi,isString:()=>Le,isValid:()=>il,maxLengthEnd:()=>ol,maxLengthMiddle:()=>sl,toString:()=>Dr});function nl(t,e=""){return zi(t)||e}function il(t){return Le(t)&&t.trim().length>=0}function sl(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),i=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-i)}function ol(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function Le(t){return typeof t=="string"||t instanceof String}function Dr(t){return t==null?"":String(t)}function zi(t){return Le(t)?t.trim():void 0}var vr={};p(vr,{clean:()=>qi,cleanUrl:()=>Ki,getDomain:()=>al,getParams:()=>ll,getPath:()=>Zi,getUrl:()=>Gi,isUrl:()=>xt,isValid:()=>Nr,setParams:()=>Yi,setPath:()=>Xi,toUrl:()=>jr});function Nr(t){return xt(t)}function qi(t,e=void 0){return Ki(t)??e}function jr(t,e,r,n=void 0){return Gi(t,e,r)||n}function Gi(t,e,r){let n=Xi(t,e);return r&&(n=Yi(n,r)),n}function xt(t){return t=qi(t),!!t}function Ki(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:i=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=e;try{let l=new URL(t);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let u=l.pathname;if(u=u.replace(/\/+/g,"/"),o&&(u=u.toLowerCase()),i&&u.length>1&&u.endsWith("/")&&(u=u.slice(0,-1)),l.pathname=u,r){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],c=Array.from(l.searchParams.keys());for(let f of c){let y=d.some(W=>f.toLowerCase().startsWith(W)),S=a.includes(f);y&&!S&&l.searchParams.delete(f)}}return l.searchParams.sort(),l.toString()}catch{return}}function al(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function ll(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function Yi(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function Zi(t){try{return new URL(t).pathname}catch{return}}function Xi(t,e){e=e??"";let r=[],n=Zi(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let o of e)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let i="/"+r.join("/");try{return new URL(i,t).toString()}catch(o){console.log(o,i,t);return}}var Or={};p(Or,{clean:()=>ul,format:()=>cl,isDuration:()=>We,isValid:()=>dl,toDuration:()=>Rr});function ul(t,e=void 0){return toDate(t)||e}function dl(t){return We(t)}function cl(t){return pl(t)}function We(t){return fl(t)}function Rr(t){return t}function fl(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function pl(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,i,o,a,l,u,d,c]=r.map(S=>parseInt(S,10)||0),f=[u,d,c].map(S=>String(S).padStart(2,"0")).join(":"),y=[];return i&&y.push(`${i}y`),o&&y.push(`${o}m`),a&&y.push(`${a}w`),l&&y.push(`${l}d`),y.length>0?`${y.join(" ")} ${f}`:f}var b={isNull:Pe,isNotNull:$r,isArray:ke,toArray:mt,isDate:X,toDate:Ie,isDuration:We,toDuration:Rr,isObject:bt,isNumber:Me,toNumber:yt,isString:Le,toString:Dr,isUrl:xt,toUrl:jr,array:Ar,date:Sr,duration:Or,null:kr,number:Tr,object:Pr,string:Cr,url:vr,getDataType:Qi,getType:Qi,getJsonSchema:gl},Te=b;function Qi(t){if(Pe(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(ke(t))return"Array";if(X(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(Nr(t))return"URL";if(_r(t))return"DateTime";if(We(t))return"Duration";if(Ir(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function gl(t){function e(r,n=0){let i={};if(n==0&&(i.$schema="https://json-schema.org/draft/2020-12/schema",i.title=r?.["@type"]||""),b.isString(r))return i.type="string",i;if(b.isObject(r)){i.type="object",i.properties={};for(let o of Object.keys(r))i.properties[o]=e(r[o],n+1);return i}if(b.isNumber(r))return i.type="number",i;if(b.isArray(r))return i.type="array",i.items=e(r?.[0],n+1),i}return e(t,0)}var fh=globalThis.crypto.randomUUID,_t={get:Q,set:wt,validate:Je,getGenericRecordID:ze,getStandardID:St},hl=_t,Vt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function Q(t,e){if(!t||!t?.["@type"])return;let r=es(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let i=Vt?.[n];if(i=="url")return ts(n,At(t));if(i=="domain")return rs(n,At(t))}return ze(e)}function St(t,e){if(!t||!t?.["@type"])return;let r=es(t);for(let n of r){let i=Vt?.[n];if(i=="url")return ts(n,At(t));if(i=="domain")return rs(n,At(t))}}function wt(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>wt(r,e));if(t?.["@type"]||t?.["@id"]){Je(t)==!1&&(t["@id"]=Q(t,e));for(let r of Object.keys(t))t[r]=wt(t?.[r],e)}return t}function Je(t,e){let r=t?.["@id"];return r?ml(t)?getStandardizedRecordId(t,e)==r:Br(t?.["@id"],e)==r:!1}function ml(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(Vt?.[r])return Vt?.[r]}function es(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function At(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function ze(t){return t=Br(t),t?(t.endsWith("/")||(t=t+"/"),Br(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function ts(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>b.url.clean(i)),e=e.filter(i=>i);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function rs(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(i=>yl(i)),e=e.map(i=>"https://"+i),e=e.filter(i=>i);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function yl(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function Br(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let i=n.toString();return i.endsWith("/")&&!t.endsWith("/")&&(i=i.slice(0,-1)),i}catch{return null}}function bl(t,e){t=ns(t);let r=xl(t,e);return is(t,r)}function xl(t,e){function r(i,o){if(o=o||"https://www.test.com/",s.isArray(i)){let l=[];for(let u of i)l=l.concat(r(u));return l}if(s.isObject(i)==!1)return[];let a=[{replacee:s.record_id(i),replacer:Q(i,o)}];for(let l of Object.keys(i))a=a.concat(r(i[l],o));return a}let n=r(t,e);return n=n.filter(i=>i),n}function ns(t){if(Array.isArray(t))return t.map(e=>s.assignId(e));if(s.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+s.randomUUID();for(let e of Object.keys(t))t[e]=s.assignId(t[e]);return t}function Vl(t){return ze(t)}function wl(t,e=[]){if(s.isArray(t))return t.map(r=>s.assignId(r,e));if(s.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+s.randomUUID(),t[r]=s.assignId(t[r],e);return t}function is(t,e){function r(n,i){if(Array.isArray(n))return n.map(l=>s.replaceIds(l,i));if(!n?.["@id"])return n;let o=n?.["@id"],a=i.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=s.replaceIds(n?.[l],i);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(i=>n.set(i.replacee,i.replacer)),e=n}return r(t,e)}var Mr={};p(Mr,{DB:()=>Fr,_storeToMap:()=>Ge,_storeToOriginal:()=>kl,getRecord:()=>qe,getRecords:()=>De,patchRecord:()=>gs,postRecord:()=>ps});var Hr={};p(Hr,{Value:()=>Al,ValueArray:()=>as,ValueDateTime:()=>us,ValueDuration:()=>_l,ValueMonetaryAmount:()=>Sl,ValueNumber:()=>ds,ValueRecordId:()=>ss,ValueRecordType:()=>os,ValueText:()=>cs,ValueThing:()=>fs,ValueUrl:()=>ls});function Al(t,e,r){return!t&&t!==0?"":s.isArray(t)?as(t,e,r):e=="@type"?os(t,e,r):e=="@id"?ss(t,e,r):s.isObject(t)?fs(t,e,r):s.isNumber(t)?ds(t,e,r):s.isDate(t)?us(t,e,r):b.isUrl(t)?ls(t,e,r):cs(t,e,r)}function ss(t,e,r){let n=s.getRecordUrl({"@id":t},r),i=`<a title="${t}" href="${n}">${t}</a>`;return ee(i,e)}function os(t,e,r){let n=b.url.getUrl(r,t),i=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return ee(i,e)}function as(t,e,r){let n=t.length>0?`(${t.length})`:"";return ee(n,e)}function ls(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return ee(n,e)}function us(t,e,r){t=s.toDate(t);let n=b.date.format(t);return ee(n,e)}function _l(t,e,r){return b.duration.format(pv.value)}function ds(t,e,r){let n=e=="position"?0:2;return t=s.toNumber(t),t=b.number.format(t,n),ee(t,e)}function cs(t,e,r){return ee(t,e)}function fs(t,e,r){let n=s.getRecordUrl(t,r),i=s.getName(t)||s.record_id(t);s.record_type(t)=="ListItem"&&(i=`ListItem ${s.getPosition(t)} - ${s.getValue(t,"item.name")||s.getValue(t,"@id")}`);let o=`<a title="${i}" href="${n}">${i}</a>`;return ee(o,e)}function Sl(t,e,r){let n=b.toNumber(s.getValue(pv.value,"value"));if(n===void 0)return pv;let i=b.number.format(n,2),o=s.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+i,o=="USD"&&(pv.htmlValue=o+" $"+i),o=="CAD"&&(pv.htmlValue=o+" $"+i),o=="EUR"&&(pv.htmlValue=o+" "+i+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+i+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",ee(pv,e)}function ee(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var Fr=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,qe(this._store,e,r)}getAll(e=!0){return De(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||s.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return De(this._store,e,r)}set(e){let r=s.flatten(e),n=r.map(i=>qe(this._store,s.record_id(i),!1));for(let i of r)this._store=ps(this._store,i);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=s.flatten(e),i=n.map(o=>qe(this._store,s.record_id(o),!1));for(let o of n)this._store=gs(this._store,o,r);return this._broadcastIfChanged(i,n),e}delete(e){let r=[this.get(e)];this._store=s.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,i){let o=this.get(e);return s.getValue(o,r,n,i)}getValues(e,r,n){let i=this.get(e);return s.getValues(i,r,n)}setValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}setValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.setValue(i,r,n),this.set(i)}addValue(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValue(i,r,n),this.set(i)}addValues(e,r,n){let i=this.get(e);return i||(i={"@id":e}),i=s.clone(i),i=s.addValues(i,r,n),this.set(i)}length(){return this._store.size}get records(){return De(this._store)}getRecords(e=!1){return De(this._store,void 0,!1)}get record_ids(){return $l(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=s.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=s.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=s.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=s.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=s.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let i=this.get(e);return!i||s.isRef(i)?n:i}updateRefs(e,r={}){if(!e)return e;if(s.isArray(e))return e.map(n=>this.updateRefs(n,r));if(s.isObject(e)){if(s.isRef(e)){if(r?.[s.record_id(e)])return r[s.record_id(e)];e=this.get(e,!0)||e,r[s.record_id(e)]=e}for(let n of Object.keys(e))["previousItem","nextItem"].includes(n)||(e[n]=this.updateRefs(e[n],r));return e}return e}execute(e){let r=s.toArray(e);r=r.map(o=>this.updateRefs(o));let n=new s.DB;n.set(r);let i=[];for(let o of r)o=n.get(o),o=s.execute(o),i.push(o),n.set(s.getResults(o));return this.set(n.getAll()),i.length==1?i[0]:i}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(i=>i!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let i of r){let o=e.find(a=>s.record_id(a)==s.record_id(i));s.isEqual(o,i)||n.push(s.record_id(i))}this.broadcast(n)}broadcast(e){e=s.toArray(e),e=s.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),i=this._subscriptions.get(r)||[];i=i.concat(this._subscriptions.get("all")||[]),i=[...new Set(i)];for(let o of i)this._broadcastItem(o,n)}}async _broadcastItem(e,r){try{return e(r)}catch{}}static randomUUID(){return s.randomUUID()}static clean(e,r){return s.clean(e,r)}static flatten(e){return s.flatten(e)}static getValue(e,r,n,i){return s.getValue(e,r,n,i)}static getValues(e,r,n){return s.getValues(e,r,n)}static setValue(e,r,n,i){return s.setValue(e,r,n,i)}static setValues(e,r,n){return s.setValues(e,r,n)}static addValue(e,r,n){return s.addValue(e,r,n)}static addValues(e,r,n){return s.addValues(e,r,n)}static strip(e){return s.strip(e)}static get dot(){return $e}static ref(e){return s.ref(e)}static simplify(e){return s.simplify(e)}static isJsonld(e){return s.isJsonld(e)}static isValid(e){return s.isValid(e)}static isArray(e){return s.isArray(e)}static setAdditionalProperty(e,r,n,i){return s.setAdditionalProperty(e,r,n,i)}static getAdditionalProperty(e,r){return s.getAdditionalProperty(e,r)}};function ps(t,e){if(!e)return;e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let r=Ge(t);for(let n of e)r.get(n?.["@id"])&&s.isRef(n)||r.set(n?.["@id"],n);return t=s._storeToOriginal(r),t}function gs(t,e,r=!0){e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let n=Ge(t);for(let i of e){let o=n.get(s.record_id(i));i=s.patch(o,i),n.set(s.record_id(i),i)}return t=s._storeToOriginal(n),t}function qe(t,e,r=!0){if(s.isArray(e))return e.map(a=>qe(t,a,r));let n=s._utilGetId(e),i=Ge(t),o=i.get(n);return r==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function De(t,e,r=!0){let n=Ge(t),i=Array.from(n.values());return e&&(i=i.filter(o=>s.evaluate(o,e))),r==!0&&(i=s.expand(n,i)),i=s.clone(i),i}function $l(t){return De(t).map(n=>s.record_id(n))}function Ge(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=s.toArray(t),t=t.filter(r=>s.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=s.record_id(r);n&&(e.has(n)&&(r=s.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function kl(t){return t=Array.from(t.values()),t}var Lr={};p(Lr,{JSON_parse:()=>Pl,JSON_stringify:()=>xs,clean:()=>ms,clone:()=>Vs,contractAtValue:()=>$t,expandAtValue:()=>Dl,getRecordUrl:()=>jl,isJsonld:()=>hs,isValid:()=>Il,merge:()=>Cl,patch:()=>Nl,removeCircularRefs:()=>ys,sortedReplacer:()=>bs,stringify:()=>Tl});function Il(t){return hs(t)}function hs(t){return t?.["@type"]||t?.["@id"]}function ms(t,e){if(Array.isArray(t)&&t.length>1)return t.map(i=>ms(i,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Vs(t)}catch{}t=setTempID(t);let r=s.flatten(t);r=r.map(i=>JSON.parse(JSON.stringify(i,Object.keys(i).sort(),4)));let n=[];for(let i of r){if(i["@id"]=Array.isArray(i?.["@id"])?i?.["@id"][0]:i?.["@id"],Je(i)==!0)continue;let o=St(i,e);if(o&&i?.["@id"]!=o){let a={replacer:o,replacee:i?.["@id"]};n.push(a)}if(!o&&i?.["@id"].startsWith("_:")){let a={replacer:s.getGenericRecordID(e),replacee:i?.["@id"]};n.push(a)}}return t=s.replaceIds(t,n),t}function ys(t){return Er(t,new Set)}function Er(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(s.isArray(t))return t.map(n=>Er(n,e));if(!s.isObject(t))return t;let r=s.record_id(t);if(e.has(r))return s.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=Er(t[n],e);return t}function bs(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function xs(t){return t=ys(t),JSON.stringify(t,bs,4)}function Tl(t){return xs(t)}function Pl(t){return JSON.parse(t)}function Dl(t){function e(r,n=!1){let i=s.getAtValue(r);if(i&&i.length>0)return s.setAtValue(r,e(i,!0));if(s.isArray(r))return r.map(o=>e(o,n));if(s.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=s.setValues(r,o,e(s.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function $t(t){let e=s.getAtValue(t);if(e&&e.length>0)return $t(s.getAtValue(t));if(s.isArray(t))return t.map(r=>$t(r));if(s.isJsonld(t)){for(let r of Object.keys(t?.record||t))s.setValues(t,r,$t(s.getValues(t,r)));return t}return t}function Vs(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function Cl(t,e,r=!0){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let i={"@id":t?.["@id"]||e?.["@id"]};for(let o of n){if(o=="@id")continue;let a=s.toArray(t?.[o]||void 0),l=s.toArray(e?.[o]||void 0),u=a.concat(l);r==!0&&(u=s.dedupe(u)),i[o]=u}return i}function Nl(t,e){t=s.isArray(t)&&t.length==1?t[0]:t,e=s.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of s.keys(e)){let n=s.toArray(e?.[r]);t=s.setValues(t,r,n)}return t}function jl(t,e){e=e?.baseUrl??e;try{return b.url.getUrl(e,encodeURIComponent(s.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var qr={};p(qr,{ID:()=>Zl,Id:()=>eu,Type:()=>Fl,actionStatus:()=>gu,addValue:()=>$s,addValues:()=>ks,contentUrl:()=>yu,description:()=>Vu,email:()=>_u,getActionStatus:()=>hu,getAdditionalProperty:()=>du,getAtValue:()=>fu,getContentUrl:()=>bu,getDescription:()=>wu,getEmail:()=>Su,getID:()=>Xl,getId:()=>tu,getImageName:()=>Pd,getImageUrl:()=>Td,getItem:()=>Iu,getItemListElement:()=>ju,getItems:()=>Du,getName:()=>Ou,getNumberOfItems:()=>Hu,getObject:()=>Eu,getObjects:()=>Ju,getPosition:()=>Gu,getPotentialAction:()=>Zu,getPotentialActions:()=>ed,getRecordID:()=>Kl,getRecordId:()=>zl,getRecordType:()=>Ul,getRecord_id:()=>Ll,getRecord_type:()=>Rl,getResult:()=>nd,getResults:()=>od,getTargetCollection:()=>ud,getTargetCollections:()=>fd,getText:()=>hd,getType:()=>Ml,getUrl:()=>bd,getValue:()=>I,getValues:()=>zr,hasValue:()=>Is,insertValue:()=>uu,isActive:()=>wd,isCompleted:()=>Ad,isFailed:()=>_d,isPotential:()=>Vd,isRef:()=>su,item:()=>ku,itemListElement:()=>Nu,items:()=>Pu,keys:()=>au,name:()=>Ru,numberOfItems:()=>Uu,object:()=>Mu,objects:()=>Wu,position:()=>qu,potentialAction:()=>Yu,potentialActions:()=>Qu,properties:()=>Jr,recordID:()=>Gl,recordId:()=>Jl,recordType:()=>Bl,record_id:()=>ws,record_type:()=>vl,ref:()=>ou,result:()=>rd,results:()=>sd,setActionStatus:()=>mu,setActive:()=>$d,setAdditionalProperty:()=>cu,setAtValue:()=>pu,setCompleted:()=>kd,setContentUrl:()=>xu,setDescription:()=>Au,setEmail:()=>$u,setFailed:()=>Id,setID:()=>Ql,setId:()=>ru,setIfNull:()=>lu,setItem:()=>Tu,setItemListElement:()=>vu,setItems:()=>Cu,setName:()=>Bu,setNumberOfItems:()=>Fu,setObject:()=>Lu,setObjects:()=>zu,setPosition:()=>Ku,setPotential:()=>Sd,setPotentialAction:()=>Xu,setPotentialActions:()=>td,setRecordID:()=>Yl,setRecordId:()=>ql,setRecordType:()=>Hl,setRecord_id:()=>Wl,setRecord_type:()=>Ol,setResult:()=>id,setResults:()=>ad,setTargetCollection:()=>dd,setTargetCollections:()=>pd,setText:()=>md,setType:()=>El,setUrl:()=>xd,setValue:()=>O,setValueIfNull:()=>Ss,setValues:()=>Ye,targetCollection:()=>ld,targetCollections:()=>cd,text:()=>gd,toRecordID:()=>As,toRecordId:()=>iu,toRecord_id:()=>Ke,toRecord_ids:()=>nu,toRef:()=>_s,url:()=>yd});var Ce="en-CA";function vl(t){return I(t,"@type")}function Rl(t){return I(t,"@type")}function Ol(t,e){return O(t,"@type",e)}function Bl(t){return I(t,"@type")}function Ul(t){return I(t,"@type")}function Hl(t,e){return O(t,"@type",e)}function Fl(t){return I(t,"@type")}function Ml(t){return I(t,"@type")}function El(t,e){return O(t,"@type",e)}function ws(t){return I(t,"@id")}function Ll(t){return I(t,"@id")}function Wl(t,e){return O(t,"@id",e)}function Jl(t){return I(t,"@id")}function zl(t){return I(t,"@id")}function ql(t,e){return O(t,"@id",e)}function Gl(t){return I(t,"@id")}function Kl(t){return I(t,"@id")}function Yl(t,e){return O(t,"@id",e)}function Zl(t){return I(t,"@id")}function Xl(t){return I(t,"@id")}function Ql(t,e){return O(t,"@id",e)}function eu(t){return I(t,"@id")}function tu(t){return I(t,"@id")}function ru(t,e){return O(t,"@id",e)}function Ke(t){return s.isArray(t)?t.map(e=>Ke(e)):typeof t=="string"?t:ws(t)}function nu(t){return Ke(t)}function As(t){return Ke(t)}function iu(t){return Ke(t)}function su(t){return!s.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function ou(t){if(t?._isThingClass==!0)return record.ref;if(!t)return;let e=s._utilGetId(t);if(e)return{"@id":e}}function _s(t){return s.isArray(t)?t.map(e=>_s(e)):{"@id":As(t)}}function au(t){return Jr(t)}function Jr(t){if(!t)return[];if(s.isArray(t)){let r=[];for(let n of t)r=r.concat(Jr(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function I(t,e,r,n,i){let o=zr(t,e,n,i);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function O(t,e,r,n,i){if(n!==void 0){let o=s.getValues(t,e);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return Ye(t,e,r,i)}function Ss(t,e,r,n,i){let o=I(t,e,n);return s.isNull(o)==!1?t:O(t,e,r,n,i)}function lu(t,e,r,n,i){return Ss(t,e,r,n,i)}function $s(t,e,r){return ks(t,e,r)}function ks(t,e,r){return r=s.getValues(t,e).concat(r),Ye(t,e,r)}function zr(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let i=e.split("."),o=t;for(let l=0;l<i.length;l++){let[u,d]=Wr(i[l]);u&&(o=o?.[u],o=s.toArray(o)),o=o.filter(c=>c?.["@language"]==n||c?.["@language"]==Ce||c?.["@lannguage"]===void 0),o=o.map(c=>c?.["@value"]??c),o=s.toArray(o),o=o.map(c=>c?.[n]??c?.[Ce]??c),o=s.toArray(o),l<i.length-1&&(o=o?.[d])}let a=s.toArray(o);return a.length==0&&r!==void 0?r:a}function Ye(t,e,r,n){t=t?.record||t;let i=e.split("."),o=t||{};for(let u=0;u<i.length-1;u++){let[d,c]=Wr(i[u]);o[d]=o?.[d]||[];let f;for(o?.[d]?.[n]?(o[d][n]=s.toArray(o?.[d]?.[n]),f=o[d][n]):o?.[d]?.[Ce]?(o[d][Ce]=s.toArray(o?.[d]?.[Ce]),f=o[d][Ce]):(o[d]=s.toArray(o?.[d])||[],f=o[d]);f.length-1<c;)f.push({"@type":"Thing"});o=f?.[c]}let[a,l]=Wr(i[i.length-1]);return o[a]=s.toArray(r),t}function uu(t,e,r){return Is(t,e,r)==!0?t:$s(t,e,r)}function Is(t,e,r){let n=zr(t,e);if(n.length==0)return!1;for(let i of n)if(s.isSame(i,r))return!0;return!1}function Wr(t){if(t===void 0)return 0;let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function du(t,e){let n=s.getValues(t,"additionalProperty").find(o=>s.getValue(o,"propertyID")==e);return s.getValue(n,"value")}function cu(t,e,r,n){let i=s.getValues(t,"additionalProperty");i=i.filter(a=>s.getValue(a,"propertyID")!=e);let o={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:e,value:r};return t=s.addValue(t,"additionalProperty",o),t}function fu(t){return s.getValues(t,"@value")}function pu(t,e){return s.setValues(t,"@value",e)}function gu(t){return s.getValue(t,"actionStatus")}function hu(t){return s.getValue(t,"actionStatus")}function mu(t,e){return s.setValue(t,"actionStatus",e)}function yu(t){return s.getValue(t,"contentUrl")}function bu(t){return s.getValue(t,"contentUrl")}function xu(t,e){return s.setValue(t,"contentUrl",e)}function Vu(t){return s.getValue(t,"description")}function wu(t){return s.getValue(t,"description")}function Au(t,e){return s.setValue(t,"description",e)}function _u(t){return s.getValue(t,"email")}function Su(t){return s.getValue(t,"email")}function $u(t,e){return s.setValue(t,"email",e)}function ku(t){return s.getValue(t,"item")}function Iu(t){return s.getValue(t,"item")}function Tu(t,e){return s.setValue(t,"item",e)}function Pu(t){return s.list.getItems(t)}function Du(t){return s.list.getItems(t)}function Cu(t,e){return s.list.setItems(t,e)}function Nu(t){return s.list.getItemListElement(t)}function ju(t){return s.list.getItemListElement(t)}function vu(t,e){return s.list.setItemListElement(t,e)}function Ru(t){return s.getValue(t,"name")}function Ou(t){return s.getValue(t,"name")}function Bu(t,e){return s.setValue(t,"name",e)}function Uu(t){return s.getValue(t,"numberOfItems")}function Hu(t){return s.getValue(t,"numberOfItems")}function Fu(t,e){return s.setValue(t,"numberOfItems",e)}function Mu(t){return s.getValue(t,"object")}function Eu(t){return s.getValue(t,"object")}function Lu(t,e){return O(t,"object",e)}function Wu(t){return s.getValues(t,"object")}function Ju(t){return s.getValues(t,"object")}function zu(t,e){return Ye(t,"object",e)}function qu(t){return s.list.getPosition(t)}function Gu(t){return s.list.getPosition(t)}function Ku(t,e){return s.list.setPosition(t,e)}function Yu(t){return s.getValues(t,"potentialAction")}function Zu(t){return s.getValues(t,"potentialAction")}function Xu(t,e){return s.setValues(t,"potentialAction",e)}function Qu(t){return s.getValues(t,"potentialAction")}function ed(t){return s.getValues(t,"potentialAction")}function td(t,e){return s.setValues(t,"potentialAction",e)}function rd(t){return s.getValue(t,"result")}function nd(t){return s.getValue(t,"result")}function id(t,e){return O(t,"result",e)}function sd(t){return s.getValues(t,"result")}function od(t){return s.getValues(t,"result")}function ad(t,e){return Ye(t,"result",e)}function ld(t){return s.getValue(t,"targetCollection")}function ud(t){return s.getValue(t,"targetCollection")}function dd(t,e){return s.setValue(t,"targetCollection",e)}function cd(t){return s.getValues(t,"targetCollection")}function fd(t){return s.getValues(t,"targetCollection")}function pd(t,e){return s.setValues(t,"targetCollection",e)}function gd(t){return s.getValue(t,"text")}function hd(t){return s.getValue(t,"text")}function md(t,e){return s.setValue(t,"text",e)}function yd(t){return s.getValue(t,"url")}function bd(t){return s.getValue(t,"url")}function xd(t,e){return s.setValue(t,"url",e)}function Vd(t){return s.getValue(t,"actionStatus")=="PotentialActionStatus"}function wd(t){return s.getValue(t,"actionStatus")=="ActiveActionStatus"}function Ad(t){return s.getValue(t,"actionStatus")=="CompletedActionStatus"}function _d(t){return s.getValue(t,"actionStatus")=="FailedActionStatus"}function Sd(t){return t=s.setValue(t,"actionStatus","PotentialActionStatus"),t=s.setValue(t,"startTime",void 0),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function $d(t){return t=s.setValue(t,"actionStatus","ActiveActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date),t=s.setValue(t,"endTime",void 0),t=s.setValue(t,"error",void 0),t=s.setValue(t,"result",void 0),t}function kd(t,e){return t=s.setValue(t,"actionStatus","CompletedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date),t=s.setValue(t,"endTime",s.getValue(t,"endTime")??new Date),t=s.setValue(t,"error",void 0),s.isNotNull(e)&&(t=s.setValue(t,"result",e)),t}function Id(t,e){return t=s.setValue(t,"actionStatus","FailedActionStatus"),t=s.setValue(t,"startTime",s.getValue(t,"startTime")??new Date),t=s.setValue(t,"endTime",s.getValue(t,"endTime")??new Date),t=s.setValue(t,"error",String(e)),t=s.setValue(t,"result",void 0),t}function Td(t){if(s.record_type(t)=="ImageObject")return s.getValue(t,"contentUrl");let e=s.getValue(t,"image.contentUrl");return e=e??s.getValue(t,"image.url"),e=e??s.getValue(t,"image"),e=typeof e=="string"?e:"",e}function Pd(t){let e=s.getValue(t,"image.name");return e=e??s.getValue(t,"image.name"),e=e??s.record_id(t),e=typeof e=="string"?e:"",e}var Kr={};p(Kr,{_utilGetId:()=>Bd,getDataType:()=>Cd,isArray:()=>Gr,isBoolean:()=>Ts,isDate:()=>he,isJsonld:()=>js,isNotDate:()=>Rd,isNotNull:()=>Nd,isNotNumber:()=>jd,isNotString:()=>vd,isNull:()=>j,isNumber:()=>kt,isObject:()=>Ns,isString:()=>Ze,randomUUID:()=>Dd,toArray:()=>vs,toDate:()=>Cs,toNumber:()=>Ps,toSingle:()=>Od,toString:()=>Ds});function Dd(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function Cd(t){if(j(t))return"Undefined";if(Gr(t))return"Array";if(js(t))return"Jsonld";let e=Cs(t);if(he(e))return"Date";let r=Ps(t);return kt(r)?"Number":Ns(t)?"Object":Ze(t)?'String"':Ts(t)?"Boolean":"Undefined"}function j(t,e=void 0){return t==null||typeof t=="string"&&t.length==0?!0:e==null?!1:s.getValues(t,e).length==0}function Nd(t,e=void 0){return!j(t,e)}function Ts(t){return t===!0||t===!1}function kt(t){return j(t)||t===""?!1:(t=Number(t),!isNaN(t))}function jd(t){return!kt(t)}function Ps(t){if(!j(t)&&(t=Number(t),!isNaN(t)))return t}function Ze(t){return j(t)?!1:typeof t=="string"}function vd(t){return!Ze(t)}function Ds(t){if(j(t))return"";if(Ze(t))return t;if(s.isValid(t))return s.exportToString(t);if(he(t))return t.toLocaleString();if(s.isArray(t)){let e=`Array of ${t.length} items.
--------------------
`,r=0,n=t.length-1;n=n>8?8:n;for(let i=0;i<n;i++)e+=Ds(t[i])+`
`;return e}return String(t)}function he(t){return j(t)||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Rd(t){return!he(t)}function Cs(t){if(j(t))return;if(he(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=he(t)?t:void 0,t}function Ns(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;let e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function js(t){return j(t)?!1:!!(t?.["@id"]||t?.["@type"])}function Gr(t){return j(t)?!1:Array.isArray(t)&&typeof t!="string"}function vs(t){return j(t)?[]:(t=Gr(t)?t:[t],t=t.filter(e=>e!=null),t)}function Od(t){return t=vs(t),t?.[0]??void 0}function Bd(t){let e=t;if(e!==void 0&&e!==null)return s.isArray(e)&&e.length==1&&(e=e[0]),s.isString(e)?e:(e=s.record_id(e),e??void 0)}var Yr={};p(Yr,{concat:()=>Ud,dedupe:()=>Rs,deleteItem:()=>Md,diff:()=>Fd,filter:()=>Jd,find:()=>Wd,includes:()=>It,insertItem:()=>Ed,intersection:()=>Hd,length:()=>Ld,search:()=>Bs,sort:()=>Ne,upsertItem:()=>Os});function Rs(t,e=!0){if(t=s.toArray(t),t.length<2)return t;let r=[];for(let n of t)It(r,n)==!1&&(e==!0&&s.isValid(n)&&Bs(t,n).forEach(o=>n=s.merge(o,n)),r.push(n));return r=Ne(r),r}function It(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e)==!0)return!0;return!1}function Ud(t,e,r=!0){t=s.toArray(t),e=s.toArray(e);let n=t.concat(e);return n=n.filter(i=>i!=null),r==!0&&(n=Rs(n)),n=Ne(n),n}function Ne(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=s.toArray(t),t.length<2||(e==null?r==1?t.sort((n,i)=>s.lt(n,i)==!0?-1:1):t.sort((n,i)=>s.gt(n,i)==!0?-1:1):r==1?t.sort((n,i)=>s.lt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1):t.sort((n,i)=>s.gt(s.getValue(n,e),s.getValue(i,e))==!0?-1:1)),t}function Hd(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)It(e,n)==!0&&r.push(n);return r=Ne(r),r}function Fd(t,e){t=s.toArray(t),e=s.toArray(e);let r=[];for(let n of t)It(e,n)==!1&&r.push(n);return r=Ne(r),r}function Md(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!1&&r.push(n);return r}function Os(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)==!0?r.push(e):r.push(n);return r}function Ed(t,e){return Os(t,e)}function Ld(t){return t=s.toArray(t),t.length}function Wd(t,e){t=s.toArray(t);for(let r of t)if(s.isSame(r,e))return r}function Bs(t,e){t=s.toArray(t);let r=[];for(let n of t)s.isSame(n,e)&&r.push(n);return r}function Jd(t,e,r,n,i,o){return t=s.toArray(t),t.length==0?itemList:(s.isNotNull(e)&&(t=t.filter(a=>s.evaluate(a,e))),t=Ne(t,r,n),t.length==0||(o=s.toNumber(o),s.isNumber(o)&&(t=t.slice(o)),i=s.toNumber(i),s.isNumber(i)&&t.length>=i&&(t=slice(0,i))),t)}var Zr={};p(Zr,{exportToString:()=>Us});function Us(t){return Array.isArray(t)?zd(t):s.record_type(t)=="ListItem"?qd(t):s.record_type(t)=="ItemList"?Gd(t):s.record_type(t)=="Action"?Kd(t):s.getValue(t,"name")||s.getValue(t,"@id")}function zd(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=Us(r)+`
`),e}function qd(t){return`${s.getValue(t,"position")} - ${s.getValue(t,"item.name")||s.getValue(t,"item.@id")}`}function Gd(t){let e=s.getValues(t,"itemListElement"),r=`ItemList${s.getValue(t,"name")||s.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function Kd(t){return`${s.getValue(t,"name")||s.getValue(t,"@id")} - ${s.getValue(t,"actionStatus")}`}var Qr={};p(Qr,{DatabaseHelper:()=>Xr,testDB:()=>Yd});var Xr=class{constructor(e){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=s.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=s.simplify(r),r=s.toArray(r),s.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=s.toArray(e);r=r.map(o=>typeof o=="string"?{"@id":o}:o),s.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let i=s.getChildren(n);this.#r(i)}#s(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.filter(i=>i),this.tempDB.set(r),this.#n(r),this.#i(r);let n=s.getChildren(r);this.#r(n)}#n(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let i=s.toArray(this._retrieved).concat(r);i=[...new Set(i)],this._retrieved=s.toArray(i)}#r(e){let r=s.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=s.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=s.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=s.toArray(r)}#i(e){let r=s.toArray(e);r=r.map(i=>i?.record||i),r=r.map(i=>i?.["@id"]||i),r=[...new Set(r)],r=r.filter(i=>i);let n=s.toArray(this._toGet);this._toGet=n.filter(i=>r.includes(i)==!1)}};function Yd(){}var dn={};p(dn,{add:()=>tc,append:()=>Xe,clean:()=>en,decrementPositions:()=>ln,duplicate:()=>lc,ensurePositions:()=>ve,ensurePreviousNextItem:()=>Dt,filter:()=>uc,find:()=>q,findByItem:()=>rn,findByListItem:()=>tn,findByPosition:()=>Js,getILE:()=>ec,getItem:()=>tt,getItemListElement:()=>$,getItems:()=>zs,getMaxPosition:()=>et,getMinPosition:()=>un,getPosition:()=>T,gt:()=>Ws,incrementPositions:()=>an,insert:()=>v,insertAfter:()=>on,insertBefore:()=>sn,isItemList:()=>C,isListItem:()=>Tt,length:()=>Qd,lt:()=>Ls,move:()=>rc,moveAfter:()=>oc,moveBefore:()=>sc,moveDown:()=>ic,moveUp:()=>nc,prepend:()=>Fs,remove:()=>Es,replace:()=>Ms,setItem:()=>Gs,setItemListElement:()=>U,setItems:()=>qs,setPosition:()=>Pt,sort:()=>Qe,toItemList:()=>Xd,toListItem:()=>je,toString:()=>Zd,toStringItemList:()=>Hs,toStringListItem:()=>nn,upsert:()=>ac});function Zd(t){return C(t)?Hs(t):nn(t)}function Hs(t){let e=[`ItemList ${s.getValue(t,"name")||s.record_id(t)}`],r=$(t);return e=e.concat(r.map(n=>nn(n))),e.join(`
`)}function nn(t){return`${T(t)} - ${s.getValue(t,"item.name")||s.record_id(t)}`}function C(t){return s.record_type(t)==="ItemList"}function Xd(t){if(C(t)==!1){let e=s.toArray(t);return t={"@type":"ItemList","@id":s.randomUUID(),itemListElement:e.map((r,n)=>je(r,n))},en(t)}return en(t)}function en(t){t=s.setValueIfNull(t,"@id",s.randomUUID());let e=$(t);return e=e.map(r=>je(r)),e=ve(e),e=Dt(e),t=U(t,e),t=s.setValue(t,"numberOfItems",e.length),t}function Qd(t){return $(t).length}function $(t){return s.getValues(t,"itemListElement")||[]}function ec(t){return $(t)}function U(t,e){return e=s.toArray(e),e=e.map((r,n)=>je(r)),e=ve(e),e=Dt(e),t=s.setValues(t,"itemListElement",e),t=s.setValue(t,"numberOfItems",e.length),t}function v(t,e,r){if(t=ve(t),s.isArray(e)){let i=r;for(let o of e)t=v(t,o,i),(i||i===0)&&(i+=1);return t}e=je(e,r);let n=$(t);return n=n.filter(i=>s.record_id(i)!=s.record_id(e)),r=r??et(n),r=r??n.length,r=r>=0?r:0,n=an(n,r),n=Qe(n),n.push(e),t=U(t,n),t}function sn(t,e,r){if(s.isArray(e)){for(let o of e)t=sn(t,o,r);return t}let n=q(t,r);if(!n)return v(t,e);let i=T(n);return v(t,e,i)}function on(t,e,r){if(s.isArray(e)){for(let o of e)t=on(t,o,r);return t}let n=q(t,r);if(!n)return v(t,e);let i=T(n);return v(t,e,i+1)}function Fs(t,e){if(s.isArray(e)){for(let r=e.length-1;r>=0;r--)t=Fs(t,e?.[r],referenceItem);return t}return v(t,e,0)}function Xe(t,e){if(s.isArray(e)){for(let i of e)t=Xe(t,i,referenceItem);return t}let r=$(t);if(r.length==0)return v(t,e,0);let n=et(t);return n||n===0?v(t,e,n+1):v(t,e,r.length)}function tc(t,e){return Xe(t,e)}function rc(t,e,r){return v(t,e,r)}function nc(t,e){let r=q(t,e),n=T(r);return n==0?t:v(t,r,n-1)}function ic(t,e){let r=q(t,e),n=T(r),i=et(t);return n==i?t:v(t,r,n+1)}function sc(t,e,r){return sn(t,e,r)}function oc(t,e,r){return on(t,e,r)}function Ms(t,e,r){let n=$(t),i=[];for(let o of n){let a=tt(o);s.isSame(a,r)&&(a=Gs(o,e)),i.push(o)}return U(t,i)}function ac(t,e){return q(t,e)?Ms(t,e,s.ref(e)):Xe(t,e)}function lc(t,e){if(Tt(e)){let r=q(e);e=tt(r)}return Xe(t,e)}function Es(t,e){if(s.isArray(e)){for(let o of e)t=Es(t,o);return t}t=ve(t);let r=$(t),n=q(r,e),i=T(n);return r=r.filter(o=>s.isSame(o,n)==!1),r=ln(r,i),t=U(t,r),t}function uc(t,e){let r=s.getItemListElement(t);return e&&(r=s.filter(r,e)),r}function Tt(t){return s.record_type(t)==="ListItem"}function je(t,e){return Tt(t)==!1&&(t={"@type":"ListItem","@id":s.randomUUID(),item:t}),t=s.setIfNull(t,"@id",s.randomUUID()),(e||e===0)&&(t=s.setValue(t,"position",e)),t}function Ls(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function Ws(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Qe(t){if(C(t)){let r=t,n=$(r),i=Qe(n);return U(r,i)}function e(r,n){return Ls(r,n)==!0?-1:Ws(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function q(t,e){if(!s.isNull(e))return s.isNumber(e)?Js(t,e):Tt(e)?tn(t,e):s.record_type(e)?rn(t,e):rn(t,e)||tn(t,e)}function Js(t,e){if(C(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(T(r)==e)return r}}function tn(t,e){if(C(t)&&(t=$(t)),t=s.toArray(t),t.length!=0){for(let r of t)if(s.isSame(r,e))return r}}function rn(t,e){if(C(t)&&(t=$(t)),t=s.toArray(t),t.length!=0)for(let r of t){let n=tt(r);if(s.isSame(n,e))return r}}function T(t){let e=s.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function Pt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,T(t)==e||(t=s.setValue(t,"position",e)),t}function an(t,e){if(e=e??0,C(t)){let n=t;t=$(n);let i=an(t,e);return U(n,i)}let r=[];for(let n of t){let i=T(n);i>=e&&(n=Pt(n,i+1)),r.push(n)}return r}function ln(t,e){if(e=e??0,C(t)){let n=t;t=$(n);let i=ln(t,e);return U(n,i)}let r=[];for(let n of t){let i=T(n);i!=0&&i>=e&&(n=Pt(n,i-1)),r.push(n)}return r}function ve(t,e){if(C(t)){let i=t;t=$(i);let o=ve(t);return U(i,o)}if(t=s.toArray(t),t.length==0)return t;t=Qe(t);let r=e??un(t)??0,n=[];for(let i of t)i=Pt(i,r),r+=1,n.push(i);return n}function un(t){if(C(t)){let i=$(i);return un(i)}t=s.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function et(t){if(C(t))return t=$(t),et(t);t=s.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function Dt(t){if(C(t)){let r=t;t=$(r);let n=Dt(t);return U(r,n)}t=s.toArray(t),t=Qe(t);let e=[];for(let r of t){let n=T(r),i=q(t,n-1),o=i?s.ref(i):void 0;r=s.setValue(r,"previousItem",o);let a=q(t,n+1),l=a?s.ref(a):void 0;r=s.setValue(r,"nextItem",l),e.push(r)}return e}function zs(t){if(C(t)){let n=$(t);return zs(n)}return t.map(r=>tt(r))}function qs(t,e){if(C(t)){let n=t;t=$(n);let i=qs(t);return U(n,i)}return t=s.toArray(t),e=s.toArray(e),e=e.map(n=>je(n)),t.concat(e)}function tt(t){return s.getValue(t,"item")}function Gs(t,e){return s.setValue(t,"item",e)}var fn={};p(fn,{appendAction:()=>eo,deleteAction:()=>io,duplicateAction:()=>no,execute:()=>Ks,insertAction:()=>Ys,insertAfterAction:()=>Xs,insertBeforeAction:()=>Zs,moveDownAction:()=>ro,moveUpAction:()=>to,prependAction:()=>Qs,replaceAction:()=>cn});function Ks(t){if(s.isArray(t)){let r=new s.DB;r.set(t);let n=[];for(let i of t){i=r.get(i);let o=Ks(i);n.push(o),r.set(s.getResults(o))}return n}let e=s.record_type(t);if(e=="ReplaceAction")return cn(t);if(e=="UpdateAction")return dc(t);if(e=="InsertAction")return Ys(t);if(e=="InsertBeforeAction")return Zs(t);if(e=="InsertAfterAction")return Xs(t);if(e=="MoveUpAction")return to(t);if(e=="MoveDownAction")return ro(t);if(e=="AppendAction")return eo(t);if(e=="PrependAction")return Qs(t);if(e=="ReplaceAction")return cn(t);if(e=="DuplicateAction")return no(t);if(e=="DeleteAction")return io(t)}function dc(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e){let o=s.getValue(i,"propertyID"),a=s.getValue(i,"value");n=s.setValues(n,o,a)}t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function Ys(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insert(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function Zs(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertBefore(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function Xs(t){let e=s.getObjects(t),r=s.getValue(t,"toLocation"),n=s.targetCollections(t);for(let i of n){for(let o of e)i=s.list.insertAfter(i,o,r);t=s.addValue(t,"result",i)}return t=s.setCompleted(t),t}function Qs(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.prepend(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function eo(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.append(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function to(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveUp(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function ro(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.moveDown(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function cn(t){let e=s.targetCollection(t),r=s.getValue(t,"replacer"),n=s.getValue(t,"replacee"),i=s.list.replace(i,r,n);return t=s.addValue(t,"result",e),t=s.setCompleted(t),t}function no(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.duplicate(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}function io(t){let e=s.getObjects(t),r=s.targetCollections(t);for(let n of r){for(let i of e)n=s.list.remove(n,i);t=s.addValue(t,"result",n)}return t=s.setCompleted(t),t}var gn={};p(gn,{addPotentialActions:()=>pn});function pn(t,e){if(!t)return t;if(s.isArray(t))return t.map(n=>pn(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=fc(t,e)),r=="ItemList"&&(t=cc(t,e));for(let n of Object.keys(t))t[n]=pn(t[n],e);return t}function cc(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let o=0;o<r.length;o++){let a=s.getValue(r[o],"position");a>0&&(r[o]=pc(r[o],t,e)),a<n-1&&(r[o]=gc(r[o],t,e)),r[o]=hc(r[o],t,e),r[o]=mc(r[o],t,e)}let i={"@type":"Thing","@id":"_h:"+s.randomUUID(),name:"new record"};return t=yc(t,i,e),t}function fc(t,e){let r;return s.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=te(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=te(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Failed")),s.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=te(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Failed")),s.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=te(t,e,r,"Set Failed")),t}function te(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=s.record_id(t);let i={"@type":"UpdateAction",name:n,object:r,targetCollection:s.ref(t),url:e};return t=s.addValue(t,"potentialAction",i),t}function pc(t,e,r,n){n=n||"Move up";let i={"@type":"MoveUpAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function gc(t,e,r,n){n=n||"Move down";let i={"@type":"MoveDownAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function hc(t,e,r,n){n=n||"Delete";let i={"@type":"DeleteAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function mc(t,e,r,n){n=n||"Duplicate";let i={"@type":"DuplicateAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function yc(t,e,r,n){n=n||"Duplicate";let i={"@type":"AppendAction",name:n,object:e,targetCollection:s.ref(t),url:r};return t=s.addValue(t,"potentialAction",i),t}var s={dot:$e,...xr,...wr,...ht,...Ur,...Mr,...Lr,...qr,...Kr,...Yr,...Zr,...Qr,list:dn,...fn,potentialAction:gn};var Fn={};p(Fn,{default:()=>tf,things:()=>V});var hn={};p(hn,{getContent:()=>xc,getIcon:()=>_c,getTitle1:()=>oo,getTitle2:()=>bc,imageUrl:()=>wc,imageUrls:()=>Ac,thumbnailUrl:()=>Vc});function oo(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"givenName"),o=s.getValue(t,"familyName"),a=s.getValue(t,"name");if(r=="Person"){let l=[i,o];if(l=l.filter(u=>u!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=s.getValue(t,"item");return oo(l)}return a||n||""}function bc(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o=s.getValue(t,"description");if(r=="Person")return i??"";if(r=="Action"){let a=s.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function xc(t){let e;if(!t)return"";let r=s.record_type(t),n=s.record_id(t),i=s.getValue(t,"email"),o;return o=s.getValue(t,"abstract"),o&&typeof o=="string"||(o=s.getValue(t,"text"),o&&typeof o=="string")||(o=s.getValue(t,"description"),o&&typeof o=="string")?o:""}function Vc(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"thumbnail.contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"thumbnail"),i&&typeof i=="string")||(i=s.getValue(t,"thumbnailUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")?i:""}function wc(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValue(t,"contentUrl"),i&&typeof i=="string"||(i=s.getValue(t,"image.contentUrl"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function Ac(t){let e=s.record_type(t),r=s.record_id(t),n,i;return i=s.getValues(t,"image.contentUrl"),i=i.filter(o=>o&&typeof o=="string"),i.length>0||(i=s.getValues(t,"image"),i&&typeof i=="string")||(i=s.getValue(t,"image"),i&&typeof i=="string")||i&&typeof i=="string"?i:""}function _c(t){let e=s.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return so;case"action":return Sc;case"person":return $c;case"organization":return kc;case"itemlist":return Ic;case"listitem":return Tc;case"postaladdress":return Pc;case"product":return Dc;case"webapi":return Cc;case"website":return Nc;case"webpage":return jc;default:return so}}var so='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',Sc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',$c='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',kc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Ic='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',Tc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Pc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',Dc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',Cc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Nc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',jc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Hh=globalThis.crypto.randomUUID;function Nt(t,e){if(Array.isArray(t))return t.map(n=>Nt(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=Nt(t);let r=s.record_type(t);return t=Ct(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=Ct(t,"MoveUpAction","Move Up",e),t=Ct(t,"MoveDownAction","Move Down",e),t=Ct(t,"DeleteAction","Delete",e)),t}function Ct(t,e,r,n){let i={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(t)},url:n};return t=vc(t,i),t}function vc(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var mn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function jt(t){let e=[];return e=e.concat(mn?.[t]?.properties||[]),mn?.[t]?.parent&&(e=e.concat(jt(mn[t].parent))),e}function vt(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);i.hasPart.push(vt(a,e-1))}return i}function yn(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Rt(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let i="https://www.testrecord.com/"+t+"#"+n,o={"@type":n,"@id":i,name:t,headline:"Headline "+t,text:Rc(),image:_.image(),hasPart:[]};if(r==0&&(o.author=_.person(),o.datePublished=new Date().toISOString()),r<e)for(let a=0;a<3;a++){let l=t+"_"+String(a);o.hasPart.push(Rt(l,e,r+1))}return o}function Rc(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function rt(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var em=globalThis.crypto.randomUUID;function bn(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},i;for(let o=0;o<t;o++){let a=Oc(_.thing(o),o);i&&(i.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":i?.["@id"]}),n.itemListElement.push(a),i=a}return n}function Oc(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function xn(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:_.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function Vn(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:_.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function wn(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:_.address()}}function An(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function _n(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function Sn(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let i of["small","medium","large"])for(let o of["blue","white","red"]){let a=_.product(`variant ${i} ${o}`);a.size=i,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function Ot(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,name:t,image:rt(t),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);i.hasPart.push(Ot(a,e-1))}return i}function $n(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function kn(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,i={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<e;o++){let a=t+"_"+String(o),l=_.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let u=new Date;u.setDate(u.getDate()-e+o),l.dateSent=u,l.dateReceived=u,i.hasPart.push(l)}return i}var _={action:vt,article:Rt,address:yn,conversation:kn,image:rt,itemList:bn,message:$n,offer:xn,organization:Vn,person:wn,postalAddress:An,product:_n,productGroup:Sn,thing:Ot,Action:vt,Article:Rt,Address:yn,Conversation:kn,Image:rt,ItemList:bn,Message:$n,Offer:xn,Organization:Vn,Person:wn,PostalAddress:An,Product:_n,ProductGroup:Sn,Thing:Ot};var Nn={};p(Nn,{transformHelpers:()=>g});var Tn={};p(Tn,{jsonToMarkdown:()=>In});function In(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",i="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${i}* **Record ${a+1}:**
`,n+=In(o,e+1)):n+=`${i}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${i}* **${o}:**
`,n+=In(a,e+1)):n+=`${i}* **${o}:** ${a}
`}):n+=`${i}* ${r}
`;return n}var Dn={};p(Dn,{jsonToYaml:()=>nt,yamlToJson:()=>Bc});function nt(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=nt(o,e+2).trimStart();n+=a}else n+=nt(o,0)}),n);let i=Object.keys(t);return i.length===0?`{}
`:(i.forEach(o=>{let a=t[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+nt(a,e+2):n+=" "+nt(a,0)}),n)}function Bc(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let i of e){if(!i.trim()||i.trim().startsWith("#"))continue;let o=i.search(/\S/),a=i.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let u=n[n.length-1],d=a.substring(1).trim();if(d.includes(":")){let[c,...f]=d.split(":"),y=c.trim(),S=f.join(":").trim(),W=Pn(S),ce={[y]:W};u.value.push(ce),n.push({indent:o+2,value:ce,type:"object",lastKey:y})}else u.value.push(Pn(d))}else if(a.includes(":")){let[u,...d]=a.split(":"),c=u.trim(),f=d.join(":").trim();l.lastKey=c,f===""?(l.value[c]={},n.push({indent:o,value:l.value[c],type:"object",lastKey:c})):l.value[c]=Pn(f)}}return r}function Pn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var ao={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var lo="DesignToken",uo={css:{get:Mc},get:Cn,set:co,getValue:Hc,setValue:Fc,sampleRecord:fo};function Cn(t){if(!t)return;let e=s.getAdditionalProperty(t,lo);return e=e||{},e}function co(t,e){if(t)return e=e||{},t=s.setAdditionalProperty(t,lo,e),t}function Hc(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=Cn(t),n=Fe(r,e);return Fe(n,"$value")}function Fc(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=Cn(),i=fo(),o=Fe(i,e);return o.$value=r,n=gt(n,e,o),t=co(t,n),t}function Mc(t,e="dt"){let r=[];function n(a,l=[]){for(let[u,d]of Object.entries(a)){if(d==null)continue;let c=[...l,u];if(typeof d=="object"&&"value"in d){let f=`--${c.map(S=>S.toLowerCase()).join("-")}`,y=i(d.value);r.push(`  ${f}: ${y};`)}else if(typeof d=="object"&&!Array.isArray(d))n(d,c);else{let f=`--${c.map(S=>S.toLowerCase()).join("-")}`,y=i(d);r.push(`  ${f}: ${y};`)}}}function i(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function fo(){return ao}var g={markdown:Tn,yaml:Dn,designToken:uo};var Ut=class{constructor(e){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return jn(this.record)}toJSON(){return this.record}toMD(){return g.markdown.jsonToMarkdown(this.record)}toYaml(){return g.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return s.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(s.setValue(this._record,e,r))}getValues(e){return s.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(s.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(s.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(s.addValues(this._record,e,r))}_setValueIfNotNull(e,r){s.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){s.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){s.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){s.isNotNull(n)&&s.record_type(n)&&s.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=Q(Bt(this._record),this.baseUrl)),s.simplify(Bt(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=s.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=s.clone(Bt(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=oe(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=s.clone(Bt(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return jt(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??s.randomUUID();let i={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=i,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),n=r==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let i={"@type":"UpdateAction","@id":s.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(i)}catch(a){console.log("Callback failed: ",o,String(a),i)}}static toString(e){return jn(e)}static toMD(e){return g.markdown.jsonToMarkdown(e)}static toYaml(e){return g.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new V[r](g.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return oe(e)}static example(e=0,r=5){let n=this.name;return new V[n](_[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return jt(e)}static getValue(e,r){return s.getValue(e,r)}static setValue(e,r,n){return s.setValue(e,r,oe(n))}static getValues(e,r){return s.getValues(e,r)}static setValues(e,r,n){return s.setValues(e,r,oe(n))}static addValue(e,r,n){return s.addValue(e,r,oe(n))}static addValues(e,r,n){return s.addValues(e,r,oe(n))}static flatten(e){return s.flatten(e)}static addPotentialActions(e){return Nt(e)}static addAdditionalProperty(e,r,n){return Ec(e,"additionalProperty",r,n)}};function Bt(t){function e(n){if(Array.isArray(n))return n.map(i=>e(i));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let i={};for(let o of Object.keys(n))i[o]=e(n?.[o]);return i}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function oe(t){if(Array.isArray(t))return t.map(e=>oe(e));if(t?._isThingClass!=!0){let e=s.record_type(t);if(e){let r=V?.[e]||V.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=oe(t._record?.[e]);return t}function jn(t){if(Array.isArray(t)){let o=t.map(a=>jn(a));return o=o.join(`
`),o}let e=s.getValue(t,"@type"),r=s.getValue(t,"@id"),n=s.getValue(t,"name"),i=`${e||""}/${r||""}`;return n&&(i=`${i} - ${n}`),i}function Ec(t,e,r,n){let i=new V.PropertyValue;return i.propertyID=r,i.value=n,t=s.addValues(t,e,i.record),t}var w=class extends Ut{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=b.url.clean(value),e}set cleanUrl(e){url=b.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=Q(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=e);let i={"@type":"PropertyValue","@id":s.randomUUID()};i.propertyID=e,i.value=r,n.push(i),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(i=>i?.propertyID==e)&&(r=r.filter(i=>i?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(i=>i?.propertyID==e)?.value}};var me=class extends w{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of s.toArray(e))s.record_type(r)!=="ItemList"&&this.add(r)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(e){this.record=s.list.setItemListElement(this.record,e)}get items(){return s.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=s.list.insert(this.record,e,0)}append(e){this.record=s.list.append(this.record,e)}add(e){this.record=s.list.append(this.record,e)}insert(e,r){this.record=s.list.insert(this.record,e,r)}delete(e){this.record=s.list.remove(this.record,e)}replace(e,r){this.record=s.list.replace(this.record,e,r)}move(e,r){this.record=s.list.move(this.record,e,r)}moveUp(e){this.record=s.list.moveUp(this.record,e)}moveDown(e){this.record=s.list.moveDown(this.record,e)}upsert(e){this.record=s.list.upsert(this.record,e)}static clean(e){return s.list.clean(e)}static length(e){return s.list.length(e)}static getItem(e,r){return s.list.getItem(e,r)}static prepend(e,r){return s.list.insert(e,r,0)}static append(e,r){return s.list.append(e,r)}static add(e,r){return s.list.insert(e,r,getLength(e))}static insert(e,r,n){return s.list.insert(e,r,n)}static delete(e,r){return s.list.remove(e,r)}static replace(e,r,n){return s.list.replace(e,r,n)}static move(e,r,n){return s.list.move(e,r,n)}static moveUp(e,r){return s.list.moveUp(e,r)}static moveDown(e,r){return s.list.moveDown(e,r)}static moveBefore(e,r,n){return s.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return s.list.moveAfter(e,r,n)}static upsert(e,r){return s.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,i,o,a){return search(e,r,n,i,o,a)}};var R=class extends w{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return po(this.record,e)}static test(e,r){return po(e,r)}};function po(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",o=new RegExp(e.valuePattern,"gi");if(t.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var it=class extends w{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(e){this.record=s.setCompleted(this.record,e)}setFailed(e){this.record=s.setFailed(this.record,e)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=yo(this.record,e,r)}addMaxValue(e,r){this.record=bo(this.record,e,r)}addMinLength(e,r){this.record=xo(this.record,e,r)}addMaxLength(e,r){this.record=Vo(this.record,e,r)}addDefaultValue(e,r){this.record=wo(this.record,e,r)}addValueRequired(e,r){this.record=Ao(this.record,e,r)}addValuePattern(e,r){this.record=go(this.record,e,r)}addMultipleValues(e,r){this.record=ho(this.record,e,r)}addStepValue(e,r){this.record=mo(this.record,e,r)}testConditions(){return vn(this.record)}getInputconditions(){return H(this.record)}addInputCondition(e,r){this.record=this.addValues(e+"-input",r)}getOutputConditions(){return Lc(this.record)}addOutputCondition(e,r){this.record=this.addValues(e+"-output",r)}test(){return vn(this.record)}static setPotential(e){return s.setPotential(e)}static setActive(e){return s.setActive(e)}static setCompleted(e,r){return s.setCompleted(e,r)}static setFailed(e,r){return s.setFailed(e,r)}static isPotential(e){return s.isPotential(e)}static isActive(e){return s.isActive(e)}static isCompleted(e){return s.isCompleted(e)}static isFailed(e){return s.isFailed(e)}static addMinValue(e,r,n){return yo(e,r,n)}static addMaxValue(e,r,n){return bo(e,r,n)}static addMinLength(e,r,n){return xo(e,r,n)}static addMaxLength(e,r,n){return Vo(e,r,n)}static addDefaultValue(e,r,n){return wo(e,r,n)}static addValueRequired(e,r,n){return Ao(e,r,n)}static addValuePattern(e,r,n){return go(e,r,n)}static addMultipleValues(e,r,n){return ho(e,r,n)}static addStepValue(e,r,n){return mo(e,r,n)}static test(e){return vn(e)}};function H(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n in Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function re(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function Lc(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n in Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function go(t,e,r){let n=H(t,e)||new R;return n.valuePattern=r,t=re(t,e,n),t}function ho(t,e,r){let n=H(t,e)||new R;return n.multipleValues=r,t=re(t,e,n),t}function mo(t,e,r){let n=H(t,e)||new R;return n.stepValue=r,t=re(t,e,n),t}function yo(t,e,r){let n=H(t,e)||new R;return n.minValue=r,t=re(t,e,n),t}function bo(t,e,r){let n=H(t,e)||new R;return n.maxValue=r,t=re(n.record),t}function xo(t,e,r){let n=H(t,e)||new R;return n.valueMinLength=r,t=re(t,e,n),t}function Vo(t,e,r){let n=H(t,e)||new R;return n.valueMaxLength=r,t=re(t,e,n),t}function wo(t,e,r){let n=H(t,e)||new R;return n.defaultValue=r,t=re(t,e,n),t}function Ao(t,e,r){let n=H(t,e)||new R;return n.valueRequired=r,t=re(t,e,n),t}function vn(t){let e=H(t);for(let r of Object.keys(e))if(R.test(e[r],t?.[r])==!1)return!1;return!0}var G=class extends it{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues(this.record,"targetCollection")}set targetCollection(e){this.record=this.setValues(this.record,"targetCollection",e)}get toLocation(){return this.getValues(this.record,"toLocation")}set toLocation(e){this.record=this.setValues(this.record,"toLocation",e)}},Ht=class extends G{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Ft=class extends G{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Mt=class extends G{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues(this.record,"replacer")}set replacer(e){this.record=this.setValues(this.record,"replacer",e)}get replacee(){return this.getValues(this.record,"replacee")}set replacee(e){this.record=this.setValues(this.record,"replacee",e)}},Et=class extends G{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Lt=class extends G{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Wt=class extends G{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var Jt=class extends w{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Wc(this.record)}get(e){return g.designToken.getValue(this.record,e)}set(e,r){return g.designToken.setValue(this.record,e,r)}get token(){return g.designToken.get(this.record)}set token(e){this.record=g.designToken.set(this.record,e)}get primary(){return g.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=g.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return g.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=g.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return g.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=g.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return g.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=g.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return g.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=g.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return g.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=g.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return g.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=g.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new zt(this,"typography.heading-lg")}get body(){return new zt(this,"typography.body-md")}get spacingSm(){return g.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return g.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return g.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return g.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return g.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return g.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return g.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return g.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return g.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return g.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new Rn(this,"shadow.elevation-md")}sample(){return g.designToken.getSampleRecord()}},zt=class{constructor(e,r){this.base=e,this.basePath=A(r)}get fontFamily(){return g.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get fontWeight(){return g.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get fontSize(){return g.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get lineHeight(){return g.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get letterSpacing(){return g.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}get family(){return g.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get weight(){return g.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get size(){return g.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get height(){return g.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get spacing(){return g.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}},Rn=class{constructor(e,r){this.base=e,this.basePath=A(r)}get color(){return g.designToken.getValue(record,A(this.basePath,"color"))}set color(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"color"),e)}get offsetX(){return g.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"offsetX"),e)}get offsetY(){return g.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"offsetY"),e)}get blur(){return g.designToken.getValue(record,A(this.basePath,"blur"))}set blur(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"blur"),e)}get spread(){return g.designToken.getValue(record,A(this.basePath,"spread"))}set spread(e){this.base.record=g.designToken.setValue(record,A(this.basePath,"spread"),e)}};function A(t,e,r){let n=[t,e,r];n=n.filter(o=>o!=null&&o!="");let i=n.join(".");return i=i.replaceAll("..","."),i}function Wc(t){return`${s.record_type(t)} for ${s.getValue(t,url)}
    
    `}var B=class extends w{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var F=class extends B{constructor(e,r,n,i,o,a){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=i,this.dateSent=o,this.dateReceived=a)}toString(){return Bn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",Re(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",Re(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",Re(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",Re(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",Re(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return So(this.record)}set gmail(e){this.record=_o(e)}get outlook(){return ko(this.record)}set outlook(e){this.record=$o(e)}static toString(e){return Bn(e)}static fromGmail(e){return _o(e)}static toGmail(e){return So(e)}static fromOutlook(e){return $o(e)}static toOutlook(e){return ko(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n<i}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n>i}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i.getTime()-o.getTime()}),e}};function Bn(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(d=>Bn(d)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=s.getValue(t,"sender"),r=e?.email||e?.name||"";r=On(r,20);let i=s.getValues(t,"recipient").map(d=>d?.email||d?.name||"");i=On(i,25);let o=s.getValue(t,"headline")||"";o.length>20&&(o=On(o,30));let a=s.getValue(t,"dateSent")||s.getValue(t,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${i} | ${o} | ${l}`}function On(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function Re(t){return t?Array.isArray(t)?t.map(e=>Re(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function _o(t){let e=new F;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function So(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function $o(t){let e=new F;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function ko(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var Gt=class extends B{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Jc(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>s.record_type(r)=="Message");return e=F.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return Io(this.record)}add(e,r,n,i,o,a){this.record=qt(this.record,e,r,n,i,o,a)}addMessage(e,r,n,i,o,a){this.record=qt(this.record,e,r,n,i,o,a)}newMessage(e,r,n,i,o,a){let l=new F(e,r,n,i,o,a);this.messages=this.messages.push(l)}static getParticipants(e){return Io(e)}static newMessage(e,r,n,i,o,a,l){return qt(e,r,n,i,o,a,l)}static addMessage(e,r,n,i,o,a,l){return qt(e,r,n,i,o,a,l)}static getMessages(e){return st(e)}static getFirstMessage(e){let r=st(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=st(e);return r.length>0?r[r.length-1]:void 0}};function Jc(t){let e=st(t),r=`Conversation with ${e.length} messages:
`;return r+=F.toString(e),r}function qt(t,e,r,n,i,o,a){let l=new F(e,r,n,i,o,a);return t=s.addValues(t,"hasPart",l),t}function st(t){let e=s.getValues(t,"hasPart").filter(r=>s.getValue(r,"@type")=="Message");return e=zc(e),e}function zc(t){return t.sort((e,r)=>{let n=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived"));return n-i}),t}function Io(t){let e=st(t),r=new Set;return e.forEach(n=>{let i=s.getValue(n,"sender");i&&r.add(i),s.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var Oe=class extends w{constructor(e,r,n,i){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=i)}toString(){return qc(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function qc(t){let e="";e+=`${t?.name||t?.["@id"]} `}var Kt=class extends w{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Gc(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new Oe(e,this.sourceSystemID,this.sourceTableID,r),i=this.getValues("dataFeedElement");return i.push(n),this.setValues("dataFeedElement",i),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Gc(t){let e="";e+=`${t?.name||t?.["@id"]} `}var ye=class extends w{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return To(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=w.setValues(this._record,"additionalProperty",e)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(e){this._record=w.setValues(this._record,"areaServed",e)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=w.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=w.setValues(this._record,"inventoryLevel",e)}get price(){return s.getValue(this._record,"price")}set price(e){this._record=w.setValues(this._record,"price",e)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=w.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=w.setValues(this._record,"priceValidUntil",e)}get seller(){return s.getValue(this._record,"seller")}set seller(e){this._record=w.setValues(this._record,"seller",e)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(e){this._record=w.setValues(this._record,"validFrom",e)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(e){this._record=w.setValues(this._record,"validThrough",e)}};function To(t){if(Array.isArray(t))return t.map(i=>To(i));let e="",r=s.getValue(t,"itemOffered")||{},n=s.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${s.getValue(r,"name")||""} - ${s.getValue(t,"priceCurrency")||""} $${n}`,e}var be=class extends B{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return Un(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new ye(e,r))}static addOffer(e,r,n="CAD"){return Kc(e,r,n)}static toString(e){return Un(e)}};function Un(t){if(Array.isArray(t))return t.map(r=>Un(r));let e="";return e+=`${s.getValue(t,"name")||""}`,e}function Kc(t,e,r){let n=new ye(e,r);return n.itemOffered={"@id":t?.["@id"]},t=s.addValue(t,"itemOffered",n.record),record}var Yt=class extends be{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return Hn(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Yc(this.record,e)}generateVariants(e){this.record=Zc(this.record,e)}static toString(e){return Hn(e)}};function Hn(t){if(Array.isArray(t))return t.map(n=>Hn(n));let e="";e+=`${s.getValue(t,"name")||""}
`;let r=s.getValues(t,"hasVariant");for(let n of r)e+=" - "+be.toString(n)+`
`;return e}function Yc(t,e){return t=s.addValues(t,"hasVariant",e),t}function Zc(t,e){if(Array.isArray(e)){let o={};for(let a of e)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);e=o}let r=Xc(e),n=Object.keys(r[0]);t=s.addValues(t,"variesBy",n);let i=w.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(t));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":t?.["@id"]};let l=[];for(let d of Object.keys(o))l.push(o?.[d]),i.includes(d)?a=s.setValue(a,d,o[d]):a=w.addAdditionalProperty(a,d,o[d]);let u=w.getValue(a,"name")+" "+l.join(" ");a=w.setValue(a,"name",u),t=w.addValue(t,"hasVariant",a)}return t}function Xc(t){return Object.keys(t).reduce((r,n)=>{let i=t[n],o=[];for(let a of r)for(let l of i)o.push({...a,[n]:l});return o},[{}])}var Zt=class extends w{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return Po(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return s.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return s.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return s.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return s.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return s.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function Po(t){if(Array.isArray(t))return t.map(r=>Po(r));let e="";return e+=`${s.getValue(t,"propertyID")||""}: ${s.getValue(t,"value")||""} ${s.getValue(t,"unitText")||""}`,e}var xe=class extends B{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),s.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new me(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=ot(this.record,"WPHeader"),K(this.record,"WPHeader")}set WPHeader(e){this.record=Y(this.record,"WPHeader",e)}get WPFooter(){return this.record=ot(this.record,"WPFooter"),K(this.record,"WPFooter")}set WPFooter(e){this.record=Y(this.record,"WPFooter",e)}get WPSideBar(){return this.record=ot(this.record,"WPSideBar"),K(this.record,"WPSideBar")}set WPSideBar(e){this.record=Y(this.record,"WPSideBar",e)}get Table(){return K(this.record,"Table")}set Table(e){this.record=Y(this.record,"Table",e)}addHeaderLink(e,r){this.record=Do(this.record,e,r)}addFooterLink(e,r){this.record=Co(this.record,e,r)}domain(){return No(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Qc(e,this.url)}static getWPHeader(e){return K(e,"WPHeader")}static getWPFooter(e){return K(e,"WPFooter")}static getWPSideBar(e){return K(e,"WPSideBar")}static getTable(e){return K(e,"Table")}static setWPHeader(e,r){return Y(e,"WPHeader",r)}static setWPFooter(e,r){return Y(e,"WPFooter",r)}static setWPSideBar(e,r){return Y(e,"WPSideBar",r)}static setTable(e,r){return Y(e,"Table",r)}static addHeaderLink(e,r,n){return Do(e,r,n)}static addFooterLink(e,r,n){return Co(e,r,n)}static getDomain(e){return No(s.getValue(e,"url")||e)}};function ot(t,e){let n=s.getValues(t,"hasPart").find(i=>s.getValue(i,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=s.addValue(t,"hasPart",n)),t}function K(t,e){return s.getValues(t,"hasPart").find(i=>s.record_type(i)==e)}function Y(t,e,r){let n=s.getValues(t,"hasPart");return n=n.filter(i=>s.record_type(i)!=e),n.push(r),t=s.setValues(t,"hasPart",n),t}function Do(t,e,r){t=ot(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},i=K(t,"WPHeader");return i=s.addValue(i,"hasPart",n),t=Y(t,"WPHeader",i),t}function Co(t,e,r){t=ot(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},i=K(t,"WPFooter");return i=s.addValue(i,"hasPart",n),t=Y(t,"WPFooter",i),t}function No(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Qc(t,e){let r=new s.DB;r.post(t);let n=r.records,i=[];if(ef(t)=="Product"){let l=n.filter(y=>s.record_type(y)=="Product")[0];i.push({replacee:s.record_id(l),replacer:e+"#product"}),l=s.setValue(l,"url",e);let u=s.getValues(l,"brand");u=u.map(y=>y?.["@type"]?{"@type":"brand",name:y}:y),l=s.setValues(l,"brand",u);let d=n.filter(y=>s.record_type(y)=="Offer");d=d.map(y=>s.setValues(y,"itemOffered",s.ref(l))),l=s.setValues(l,"offers",d);let c=n.filter(y=>s.record_type(y)=="Review");d=d.map(y=>s.setValues(y,"itemReviewed",s.ref(l))),l=s.setValues(l,"review",c);let f=n.filter(y=>s.record_type(y)=="AggregateRating");return f=f.map(y=>s.setValues(y,"itemReviewed",s.ref(l))),l=s.setValues(l,"aggregateRating",f),l=s.replaceIds(l,i),l}return t}function ef(t){if(t=s.toArray(t),t=t.filter(r=>s.record_type(r)!="BreadcrumbList"),t.length==1&&s.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&s.record_type(t[0]=="WebPage")&&(t=s.getValues(t,"mainEntity")),t.filter(r=>s.record_type(r)=="Product").length==1)return"Product"}var Xt=class extends xe{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new xe(this);return n.url=e,n.name=r,n}domain(){return jo(this.url)}static getDomain(e){return jo(s.getValue(e,"url")||e)}};function jo(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var Qt=class extends w{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var V={get:w.toThing,toThing:w.toThing,Action:it,AddAction:Ht,AppendAction:Lt,BrandDesign:Jt,Conversation:Gt,CreativeWork:B,DataFeed:Kt,DataFeedItem:Oe,DeleteAction:Ft,InsertAction:Et,ItemList:me,Message:F,Offer:ye,Product:be,ProductGroup:Yt,PropertyValue:Zt,Thing:w,PrependAction:Wt,ReplaceAction:Mt,UpdateAction:G,WebAPI:Qt,WebPage:xe,WebSite:Xt,format:hn,toThing:rf},tf=V;function rf(t){let e=s.record_type(t);return V?.[e]?new V[e](t):new V.Thing(t)}var Ln={};p(Ln,{ApiClient:()=>er,default:()=>nf});var er=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await Mn(this.headers,this.baseUrl,e,r)}async post(e,r){return await vo(this.headers,this.baseUrl,e,r)}async patch(e,r){return await sf(this.headers,this.baseUrl,e,r)}async delete(e,r){return await En(this.headers,this.baseUrl,e,r)}async test(e){return await of(this.headers,this.baseUrl,e)}},nf={ApiClient:er};async function Mn(t,e,r,n){let i=new V.Action;i.name="API Get",i.instrument=new V.WebAPI(e),i.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=b.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"GET"},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function vo(t,e,r,n){let i=new V.Action;i.name="API Post",i.instrument=new V.WebAPI(e);try{let o=b.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return console.log(o),console.log(u.statusText),i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return console.log(url),console.log(o),i.setFailed(String(o)),i}}async function sf(t,e,r,n){let i=new V.Action;i.name="API Post",i.instrument=new V.WebAPI(e);try{let o=b.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function En(t,e,r,n){let i=new V.Action;i.name="API Get",i.instrument=new V.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=b.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"DELETE"},u=await fetch(o,l);if(u.status>=300)return i.setFailed(u.statusText),i;let d=await u.json();return i.setCompleted(d),i}catch(o){return i.setFailed(String(o)),i}}async function of(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},i=new V.Action,o={filter:{"@id":n["@id"]}},a;return a=await En(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step1 delete record"),i.record):(a=await vo(t,e,r,n),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step2 create record"),i.record):(a=await Mn(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step3 get record"),i.record):a.result[0]?.["@id"]!=n?.["@id"]?(i.setFailed("Error step3 got wrong record"),i.record):(a=await En(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step4 delete record"),i.record):(a=await Mn(t,e,r,o),i.hasPart=i.hasPart.concat(a.record),(await a).isFailed?(i.setFailed("Error step5 get record"),i):a.result?.name==n?.name?(i.setFailed("Error step5 record still exist"),i):(i.setCompleted(),i.record)))))}var qn={};p(qn,{RdfDB:()=>tr,default:()=>af,fromRDF:()=>zn,toRDF:()=>Jn});var Jb=globalThis.crypto.randomUUID,tr=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return zn(this.getRdf(e))}post(e,r){e=Jn(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},af={RdfDB:tr,toRDF:Jn,fromRDF:zn};function Jn(t,e){function r(i,o,a,l){let u=[];if(Array.isArray(a))return u=u.concat(a.map((c,f)=>r(i,o,c,l))),u.flat();if(a?.subject&&a?.predicate&&a?.object)return[a];if(l&&typeof l=="object"&&(typeof a!="object"&&(a={"@value":a}),a["@annotation"]={...a?.["@annotation"]||{},...l}),o=="@annotation")return[];if(a?.["@value"]){let c=a?.["@annotation"];if(c&&typeof c=="object"){c["@id"]=c?.["@id"]||"_:"+globalThis.crypto.randomUUID();let f=Object.keys(c).map(y=>r(c["@id"],y,c[y]));u=u.concat(f),c=c?.["@id"]}return u=u.concat([{subject:i,predicate:o,object:a?.["@value"],label:l}]),u}if(typeof a=="object"){a["@id"]=a?.["@id"]||"_:"+globalThis.crypto.randomUUID();let c={subject:i,predicate:o,object:a?.["@id"],label:l};return u=u.concat([c]),u=u.concat(Object.keys(a).map(f=>r(a?.["@id"],f,a?.[f],l))),u.flat()}let d={subject:i,predicate:o,object:a,label:l};return u.concat([d])}let n=[];if(e){let i=Wn(e);i.length>1&&(n=n.concat(i.slice(1))),e=i?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(i=>i.subject),n}function zn(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let i=e.get(n.subject),o=n?.object,a=e.get(n?.object);a&&(o={"@id":a?.["@id"]}),n.label&&(o?.["@id"]||(o={"@value":o}),o["@annotation"]=n?.label),i[n.predicate]=i?.[n.predicate]||[],i[n.predicate]=Array.isArray(i[n.predicate])?i[n.predicate]:[i[n.predicate]],i[n.predicate].push(o)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function Wn(t){let e=[];if(Array.isArray(t))return e=t.map(r=>Wn(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let i=[];for(let o of n)typeof o=="object"?(o["@id"]=o?.["@id"]||"_:"+globalThis.crypto.randomUUID(),i.push({"@id":o?.["@id"]}),e=e.concat(Wn(o))):i.push(o);t[r]=i,e=[t].concat(e)}return e}import Ve from"fs/promises";var N={load:Oo,save:Ro,exists:rr,list:Uo,delete:Bo,file:{load:Oo,save:Ro,delete:Bo,exists:rr},dir:{list:Uo,exists:rr,delete:uf},getFilePath:at};async function rr(t,e){t=at(t,e);try{return await Ve.access(t),!0}catch{return!1}}async function lf(t){try{await Ve.mkdir(t,{recursive:!0})}catch(e){throw e}}async function Ro(t,e,r){await lf(t),t=at(t,e);try{await Ve.writeFile(t,r,"utf8")}catch(n){throw n}}async function Oo(t,e){t=at(t,e);try{return await Ve.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function Bo(t,e){t=at(t,e);try{await Ve.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function uf(t){try{await Ve.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function Uo(t){if(await rr(t)==!1)return[];try{return await Ve.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function at(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var Kn={};p(Kn,{Button:()=>cf,DropdownMenu:()=>Ho,MenuItem:()=>ff,escapeHtml:()=>ae});function ae(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function cf({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[e]||o.default} ${a[r]||a.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function Gn(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let i=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?Gn(n,i):`<input type="hidden" name="${ae(i)}" value="${ae(String(n))}">`}).join("")}function Ho({label:t="",items:e=[],align:r="end",variant:n="ghost",size:i="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},u={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},c=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),f=t?`<span class="mr-2">${ae(t)}</span>${c}`:`${c}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let y=e.map(S=>{if(S.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let W=Gn(S.object),ce=S.disabled?"disabled":"";return`
        <form method="POST" action="${ae(S.url||"")}" class="m-0 p-0">
          ${W}
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
        ${f}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${y}
      </div>
    </details>
  `.trim()}function ff(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=Gn(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ae(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ae(h.getName(item)||"")}
          </button>
        </form>`}var ne={};p(ne,{components:()=>m});var Yn={};p(Yn,{Accordion:()=>pf});function pf({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var Zn={};p(Zn,{Alert:()=>gf});function gf({title:t,description:e="",variant:r="default",className:n=""}){let i={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${i[r]||i.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var Xn={};p(Xn,{Article:()=>hf,ArticleBody:()=>wf,ArticleCard:()=>_f,ArticleCardBody:()=>$f,ArticleCardFooter:()=>kf,ArticleCardHeader:()=>Sf,ArticleCardMedia:()=>Tf,ArticleCardTitle:()=>If,ArticleCategory:()=>yf,ArticleFooter:()=>Af,ArticleHeader:()=>mf,ArticleMedia:()=>Vf,ArticleSubTitle:()=>xf,ArticleTitle:()=>bf});function hf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function mf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function yf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function bf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function xf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function Vf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function wf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function Af(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function _f(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function Sf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function $f(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function kf(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function If(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function Tf(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var Qn={};p(Qn,{Badge:()=>Pf,Badges:()=>Df});function Pf(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function Df(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var ei={};p(ei,{Breadcrumb:()=>Cf,BreadcrumbEllipsis:()=>jf,BreadcrumbItem:()=>Eo,BreadcrumbLink:()=>Lo,BreadcrumbList:()=>Mo,BreadcrumbMain:()=>Fo,BreadcrumbPage:()=>Nf,BreadcrumbSeparator:()=>Wo});function Cf({urls:t,titles:e,links:r}){let n=new V.ItemList(r);if(t)for(let a=0;a<t.length;a++){let l=e?.[a]||t[a].split("/")?.[t[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[a],name:l})}let i=n.items;return console.log("items",i),Fo({children:Mo({children:i.map(a=>Eo({children:Lo({href:a?.url,children:a?.name})})).join(Wo())})})}function Fo({children:t="",className:e="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${r}>
        ${t}
      </nav>
    `.trim()}function Mo({children:t="",className:e="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${r}>
        ${t}
      </ol>
    `.trim()}function Eo({children:t="",className:e="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${r}>
        ${t}
      </li>
    `.trim()}function Lo({children:t="",href:e="#",className:r="",attrs:n=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${t}
      </a>
    `.trim()}function Nf({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function Wo({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function jf({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var ti={};p(ti,{Button:()=>vf});function vf({text:t,variant:e="primary",size:r="default",className:n="",attrs:i=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.primary} ${a[r]||a.default} ${n}" ${i}>
        ${t}
      </button>
    `.trim()}var ri={};p(ri,{Card:()=>Rf,CardBody:()=>Uf,CardContent:()=>Ef,CardDescription:()=>Mf,CardFooter:()=>Hf,CardHeader:()=>Of,CardMain:()=>Bf,CardMedia:()=>Lf,CardTitle:()=>Ff});function Rf(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function Of(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function Bf(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function Uf(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function Hf(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function Ff(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function Mf(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function Ef(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function Lf(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var ni={};p(ni,{Dialog:()=>Wf});function Wf({id:t,title:e,description:r="",content:n,footer:i="",className:o=""}){return`
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
    `.trim()}var ii={};p(ii,{Footer:()=>Jf});function Jf({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let i=r.map(o=>`
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
    `.trim()}var si={};p(si,{Header:()=>zf});function zf({brand:t="",navItems:e=[],actions:r="",className:n=""}){let i=e.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
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
    `.trim()}var oi={};p(oi,{H1:()=>qf,H2:()=>Gf,H3:()=>Kf,H4:()=>Yf,H5:()=>Zf,H6:()=>Xf,Heading:()=>we,P:()=>Qf,Text:()=>ep});function qf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"1",options:e,record_id:r,propertyID:n,className:i})}function Gf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"2",options:e,record_id:r,propertyID:n,className:i})}function Kf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"3",options:e,record_id:r,propertyID:n,className:i})}function Yf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"4",options:e,record_id:r,propertyID:n,className:i})}function Zf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"5",options:e,record_id:r,propertyID:n,className:i})}function Xf(t,{options:e,record_id:r,propertyID:n,className:i}){return we({title:t,level:"6",options:e,record_id:r,propertyID:n,className:i})}function we({title:t,level:e,options:r,record_id:n,propertyID:i,className:o}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${i}" 
    class="break-all ${o||""}"
    >${t}</h${e}>
    
    `}function Qf(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}function ep(t,e,{options:r,record_id:n,propertyID:i,className:o}){return`
      <p data-id="${n||""}" data-property-id="${i}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}var ai={};p(ai,{ImageModal:()=>tp});function tp({src:t,alt:e="",caption:r="",aspectRatio:n="aspect-video",className:i="",imageClassName:o="",attrs:a=""}){let l=`img-modal-${Math.random().toString(36).substring(2,9)}`;return`
    <!-- Thumbnail Trigger -->
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${i}" 
      ${a}
    >
      <button 
        type="button"
        onclick="document.getElementById('${l}').showModal()"
        aria-label="Enlarge image: ${e||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full ${n} overflow-hidden bg-muted">
          <img 
            src="${t}" 
            alt="${e}" 
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${o}"
          />
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

      <!-- Native Dialog Modal -->
      <dialog 
        id="${l}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${l}').close()" 
            aria-label="Close modal"
            class="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <!-- High-Res Image Display -->
          <div class="max-h-[80vh] overflow-hidden rounded-lg">
            <img 
              src="${t}" 
              alt="${e}" 
              class="max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>

          <!-- Optional Caption -->
          ${r?`
            <div class="mt-3 w-full text-center text-sm text-muted-foreground">
              ${r}
            </div>
          `:""}
        </div>
      </dialog>
    </div>
  `.trim()}var li={};p(li,{Input:()=>M,InputCheckbox:()=>rp,InputDate:()=>np,InputDateTime:()=>sp,InputEmail:()=>op,InputNumber:()=>ip,InputPassword:()=>ap,InputTel:()=>lp,InputText:()=>up,InputTime:()=>dp,InputUrl:()=>cp});function M({label:t="",type:e="text",placeholder:r="",value:n="",id:i="",className:o="",attrs:a=""}){let l=i?`id="${i}"`:"";return`
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
    `.trim()}function rp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:i})}function np({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"date",label:t,value:e,propertyID:r,id:n,className:i})}function ip({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"number",label:t,value:e,propertyID:r,id:n,className:i})}function sp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:i})}function op({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"email",label:t,value:e,propertyID:r,id:n,className:i})}function ap({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"password",label:t,value:e,propertyID:r,id:n,className:i})}function lp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"tel",label:t,value:e,propertyID:r,id:n,className:i})}function up({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"text",label:t,value:e,propertyID:r,id:n,className:i})}function dp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"time",label:t,value:e,propertyID:r,id:n,className:i})}function cp({label:t="",value:e="",propertyID:r="",id:n="",className:i=""}){return M({type:"url",label:t,value:e,propertyID:r,id:n,className:i})}var ui={};p(ui,{Pagination:()=>fp,PaginationComponent:()=>zo,PaginationContent:()=>qo,PaginationEllipsis:()=>Yo,PaginationItem:()=>lt,PaginationLink:()=>nr,PaginationNext:()=>Ko,PaginationPrevious:()=>Go,buildPaginationUrl:()=>Jo});function Jo(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function zo({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function qo({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function lt({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function nr({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:i="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",u=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${u} ${i}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Go({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return nr({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Ko({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return nr({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Yo({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function fp({url:t,total:e,limit:r=10,offset:n=0,siblingCount:i=1,className:o="",attrs:a=""}={}){let l=Math.ceil(e/r)||1,u=Math.floor(n/r)+1,d=J=>{let z=(J-1)*r;return Jo(t,r,z)},c=(J,z)=>{let pe=z-J+1;return Array.from({length:pe},(ft,pt)=>J+pt)},f=i+5,y=[];if(f>=l)y=c(1,l);else{let J=Math.max(u-i,1),z=Math.min(u+i,l),pe=J>2,ft=z<l-2,pt=1,Ia=l;if(!pe&&ft){let He=3+2*i;y=[...c(1,He),"ellipsis",l]}else if(pe&&!ft){let He=3+2*i,Fi=c(l-He+1,l);y=[pt,"ellipsis",...Fi]}else if(pe&&ft){let He=c(J,z);y=[pt,"ellipsis",...He,"ellipsis",Ia]}}let S=[],W=u>1,ce=W?d(u-1):"#";S.push(lt({children:Go({href:ce,disabled:!W})})),y.forEach(J=>{if(J==="ellipsis")S.push(lt({children:Yo()}));else{let z=Number(J),pe=z===u;S.push(lt({children:nr({href:d(z),isActive:pe,children:String(z)})}))}});let fe=u<l,gr=fe?d(u+1):"#";S.push(lt({children:Ko({href:gr,disabled:!fe})}));let hr=zo({className:o,attrs:a,children:qo({children:S.join("")})});return hr=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${hr}
    </div>`,hr}var di={};p(di,{Section:()=>pp,SectionHeader:()=>gp});function pp({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:i="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},u=a[e]||a.default,d=l[r]!==void 0?l[r]:l.default,c=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${i}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${u} ${n}" ${o}>
      ${c}
    </section>
  `.trim()}function gp({title:t="",description:e="",align:r="left",className:n=""}={}){let i={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${i[r]||i.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var ci={};p(ci,{Table:()=>mp,TableBody:()=>Qo,TableCell:()=>Z,TableCellCenter:()=>wp,TableCellLeft:()=>Vp,TableCellLink:()=>_p,TableCellNumber:()=>Ap,TableCellRight:()=>ta,TableCellText:()=>Sp,TableColumnHeader:()=>Xo,TableColumnHeaderCenter:()=>xp,TableColumnHeaderLeft:()=>yp,TableColumnHeaderRight:()=>bp,TableFooter:()=>ra,TableHeader:()=>Zo,TableRow:()=>ea,getTable:()=>hp});function hp({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Zo(t.map(n=>Xo(n)))}
      
        ${Qo(e.map(n=>ea(n.map(i=>Z(i)))))}
        
        ${ra()}

      </table>

    </div>
  
  
  `}function mp(t,e,r,n,i=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${i||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function Zo(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function Xo(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function yp(t,e){return Z(t,e)}function bp(t,e){return e=e+" text-right ",Z(t,e)}function xp(t,e){return e=e+" text-center ",Z(t,e)}function Qo(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function ea(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
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
  `}function Vp(t,e,r,n){return Z(t,e,r,n)}function ta(t,e,r,n){return n=n+" text-right ",Z(t,e,r,n)}function wp(t,e,r,n){return n=n+" text-center ",Z(t,e,r,n)}function Ap(t,e,r,n,i,o){return t=s.toNumber(t),t=b.number.format(t,e),ta(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function _p(t,e,r,n,i,o){return Z(`
      
    <a data-id="${n||""}" data-property-id="${i||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function Sp(t,e,r,n){let i=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return Z(i)}function ra(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var fi={};p(fi,{Webpage:()=>$p});function $p({title:t,headContent:e,header:r,footer:n,content:i,breadcrumb:o}){return`
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
  `.trim()}var pi={};p(pi,{CardGrid:()=>kp});function kp({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),i=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${i}">
      ${e}
    </div>
  `}var gi={};p(gi,{JsonEditor:()=>Tp});function na({children:t="",variant:e="default",size:r="default",className:n="",attrs:i=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.default} ${a[r]||a.default} ${n}" ${i}>
      ${t}
    </button>
  `.trim()}function Ip({title:t="",description:e="",children:r="",footer:n="",className:i="",attrs:o=""}={}){return`
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
  `.trim()}function Tp({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:i="",attrs:o=""}={}){let a=t.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),u=JSON.stringify(n,null,2),d=`
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
            ${na({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
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
        ${na({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
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
  `.trim();return Ip({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:c,className:i,attrs:o})}var hi={};p(hi,{Modal:()=>Pp,ModalBody:()=>Cp,ModalTrigger:()=>Dp});function Pp(t,e,r){return`
     <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${e||""}" 
      
    >
        ${t||""}
    </div>
    
    
    `}function Dp(t,e,r){return`
    
     <button 
        type="button"
        onclick="document.getElementById('${r}').showModal()"
        aria-label="Enlarge image:"
        class="relative block w-full h-full cursor-zoom-in outline-none"
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
    
    `}function Cp(t,e,r){return`
    
      <dialog 
        id="${r}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
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

          <div class="max-h-[80vh] overflow-hidden rounded-lg">
            
            ${t||""}
          </div>

         
        </div>
      </dialog>
    
    
    `}var mi={};p(mi,{DropdownMenu:()=>jp,DropdownMenuIcon:()=>vp,Menu:()=>Np,MenuItemLink:()=>Rp,MenuItemPost:()=>Op,MenuItemSeparator:()=>Bp});function Np(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function jp(t,e,r){return`
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

    `}function vp(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Rp(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function Op(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function Bp(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var yi={};p(yi,{Kanban:()=>Up,KanbanBody:()=>Fp,KanbanCard:()=>qp,KanbanCardBody:()=>Kp,KanbanCardFooter:()=>Yp,KanbanCardHeader:()=>Gp,KanbanColumn:()=>Lp,KanbanColumnBody:()=>Jp,KanbanColumnFooter:()=>zp,KanbanColumnHeader:()=>Wp,KanbanFooter:()=>Mp,KanbanHeader:()=>Hp,KanbanTitle:()=>Ep});function Up(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function Hp(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function Fp(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function Mp(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function Ep(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function Lp(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function Wp(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Jp(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function zp(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function qp(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function Gp(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function Kp(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function Yp(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var bi={};p(bi,{StarRating:()=>Zp,StarRatingEmpty:()=>eg,StarRatingFull:()=>Xp,StarRatingHalf:()=>Qp});function Zp(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function Xp(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Qp(t,e){return`
    
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


    `}function eg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var m={...Yn,...Zn,...Xn,...Qn,...ei,...ti,...ri,...pi,...ni,...Kn,...ii,...si,...ai,...yi,...mi,...hi,...li,...gi,...ui,...di,...bi,...ci,...oi,...fi};var _i={};p(_i,{Card:()=>lg,Cards:()=>ug});var Ai={};p(Ai,{Media:()=>Ae});var sr={};p(sr,{fixedLength:()=>ir,textCenter:()=>xi});function ir(t,e=void 0,r=0){let n=t;if(s.isArray(t)){let o=t.length;o==0&&(t=""),o==1&&(t=t[0]),o>1&&(t=`(${t.length})`)}let i=b.getDataType(t);if(i=="Undefined"&&(t=""),i=="Jsonld"&&(t=t?.["@id"]),i=="Number"&&(t=b.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),i=="Date"&&(t=b.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let o="",a=Math.round(e/3),l=e-a-3;o+=t.slice(0,a),o+="...",o+=t.slice(-l),t=o}return e!=null&&(t=t.padEnd(e," ")),t}function xi(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var wi={};p(wi,{toTextRecord:()=>tg,toTextTable:()=>ig});function tg(t,e=80){let r=rg(t,e),n=ng(t),i="";i+=ia(r),i+=`
`,n.length>0?i+=n.map(o=>sa(o,r)).join(""):i+=`(no records)
`}function rg(t,e=80){let n=Vi(t).map(a=>(a||"").length),i=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(i,11)},{t:"Value",p:"value",w:e-Math.max(i,11)}]}function ng(t){let e=Vi(t),r=[];for(let n of e){let i={"@type":"PropertyValue",propertyID:n,value:b.getValues(t,n)};r.push(i)}return r}function ig(t,e,r=!0,n=80){e=sg(t,e,r),t=og(t,e,r);let i="";if(i+=ia(e),i+=`
`,t.length>0){let o=t.map(a=>sa(a,e));i+=o.join("")}else i+=xi("(no records to display.)",n);return i}function sg(t,e,r=!0){e=s.toArray(e),(!e||e.length==0)&&(e=Vi(t).map(i=>({title:i,propertyID:i,width:i.length}))),(r=!0)&&(e.map(i=>i?.propertyID||i?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function og(t,e,r=!0){if(t=s.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,i]of t.entries())i.position=i?.position??n;return t}function ia(t){let e="",r=[];for(let i of t){let o=`${ir(i.title,i.width,i.rounding)}`;r.push(o)}e+=r.join(" "),e+=`
`;let n=[];for(let i of t){let o=`${"".padStart(i.width,"-")}`;n.push(o)}return e+=n.join(" "),e+=`
`,e}function sa(t,e){let r="",n=[];for(let i of e){let o=s.getValues(t,i.propertyID),a=`${ir(o,i.width,i.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function Vi(t){t=s.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=ag(e),e}function ag(t){t=s.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let i of e){if(r==i&&n!=i)return-1;if(r!=i&&n==i)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var ut={...sr,...wi};function Ae({url:t,record:e,options:r,layoutClasses:n,className:i,attrs:o}){let a=s.getValue(e,"contentUrl");return a?s.record_type(e)=="VideoObject"?`  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${s.getValue(e,"thumbnailUrl")}">
                    <source src="${a}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `:`
        
                    <div class="block-media  ">

          
                ${m.ImageModal({src:s.getImageUrl(e),alt:s.getImageName(e)})}
         
                    </div>

        `:""}function le({website:t,webpage:e,title:r,headContent:n,content:i,options:o}){e=new V.WebPage(e),t=new V.WebSite(t);let a={};a.title=r,a.title=a.title||s.getValue(e,"title"),a.title=a.title||s.getValue(e,"name"),a.title=a.title||s.getValue(t,"title"),a.title=a.title||s.getValue(t,"name"),a.headContent=n,a.breadcrumb=m.Breadcrumb({links:s.getValue(e,"breadcrumb")});let l=s.getValue(t,"about.name")??s.getValue(t,"name")??s.getValue(e,"about.name")??s.webpage(t,"name"),u=e.WPHeader.hasPart||[],d=e.WPFooter.hasPart||[];return u=Array.isArray(u)?u:[u],d=Array.isArray(d)?d:[d],a.header=m.Header({brand:l,navItems:u}),a.footer=m.Footer({brand:l,navItems:d}),a.content=i,m.Webpage(a)}function oa({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:f}){return o=o??"",o+=P.Cards({url:n,records:a,offset:d,limit:c,nbOfColumns:3,options:f}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:f})}function lg(t,e,r,n=!0){let i=V.format.getTitle1(t),o=V.format.getContent(t),a=s.getRecordUrl(t,e),l=n==!0?V.format.imageUrl(t):void 0;return m.Card({title:i,description:o,url:a,media:l,className:r})}function ug({url:t,records:e,offset:r,limit:n,orderBy:i,orderDirection:o,nbOfColumns:a,includePagination:l,options:u,layoutClasses:d,className:c,attrs:f}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let y=new V.ItemList(e);y=y.record,y.numberOfItems=y?.numberOfItems??y.itemListElement.length,y=or({record:y,options:u}),y.itemListElement=y.itemListElement.filter(fe=>s.getValue(fe,"position")>=r&&s.getValue(fe,"position")<r+n);let S="";for(let fe of s.getValues(y,"itemListElement")){let gr=s.getValue(fe,"item");S+=dg({url:t,item:gr,options:u})}S=m.CardGrid({content:S,nbOfColumns:a});let W=m.Pagination({url:t,limit:n,offset:r,total:y.numberOfItems,options:u});return`

        <div class="${d} ${c}" ${f}>
        <div class="flex-1">
            ${S}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${W}
        </div>
        </div>

    `}function dg({url:t,item:e,options:r}){let n=s.getImageUrl(e),i=s.getImageName(e),o=s.getValues(e,"keywords");o=o.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let a=m.Badges({text:o,variant:"secondary"}),l={title:s.getValue(e,"name"),url:s.getRecordUrl(e,r?.baseUrl),description:s.getValue(e,"description"),footer:a,image:s.getImageUrl(e),imageAlt:s.getImageName(e),media:Ae({record:e,options:r})};return m.Card(l)}var Si={};p(Si,{Input:()=>fg});function fg({record:t,propertyID:e,value:r}){return m.Input({value:r})}var ki={};p(ki,{Table:()=>pg,TableBody:()=>la,TableCell:()=>da,TableHeader:()=>aa,TableRow:()=>ua,getDataType:()=>ca,getHeadersFromProperties:()=>$i,getPropertiesFromRecords:()=>Be});function pg(t,e,r,n,i,o){let a=t;r=r||Be(a),n=n||$i(r);let l=[];return i==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),m.Table(aa(a,r,n,l)+la(a,r,e,l))}function aa(t,e,r,n){return e=e||Be(t),r=r||$i(e),n=n||[],e=e||Be(t),m.TableHeader(r.map((i,o)=>{switch(n?.[o]){case"number":return m.TableColumnHeaderRight(i);default:return m.TableColumnHeader(i)}}).join(" "))}function la(t,e,r,n){e=e||Be(t),n=n||[];let i=s.getValues(new V.ItemList(t),"itemListElement");return m.TableBody(i.map(o=>ua(o,e,r,n)).join(" "))}function ua(t,e,r,n){return e=e||Be(t),n=n||[],m.TableRow(e.map((a,l)=>da(t,s.getValues(t,a),a,r,n,l)).join(" "),s.record_id(t),void 0,"kr-listitem")}function da(t,e,r,n,i,o){let a=e,l=r,u=t;if(a=s.isArray(a)&&a.length==0?"":a,a=s.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let d=b.url.getUrl(n||"","/"+a);return m.TableCellLink(d,a)}if((l||"").endsWith("@id")){let d=s.getRecordUrl(u,n);return m.TableCellLink(d,a)}switch(i?.[o]||ca(a)){case"array":return m.TableCellCenter(`(${a.length})`);case"text":return m.TableCellText(a);case"number":return m.TableCellNumber(a,2);case"link":return m.TableCellLink(a,a);case"thumbnail":return m.TableCell(Ae({record:a}));case"position":return m.TableCellNumber(a,0);case"object":return m.TableCellLink(s.getRecordUrl(a,n),s.record_id(a));default:return m.TableCellText(a)}}function Be(t){let r=s.getValues(t,"itemListElement").map(i=>s.getValue(i,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(i=>i.startsWith("@")===!1),n=n.map(i=>"item."+i),n=["item.@type","item.@id"].concat(n),n}function $i(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function ca(t){return t=s.isArray(t)&&t.length==0?void 0:t,t=s.isArray(t)&&t.length==1?t[0]:t,t?b.isNumber(t)?"number":b.isUrl(t)?"link":b.isDate(t)?"date":b.isArray(t)?"array":b.isObject(t)?"object":"text":"text"}var Ii={};p(Ii,{Record:()=>gg});function gg(t,e,r,n="",i="",o=!1,a=0,l={}){t=s.removeCircularRefs(t),r=r||Object.keys(t),l.baseUrl=e||l?.baseUrl;let u={rows:[]},d=fa({record:t,baseUrl:e,properties:r,className:n,attrs:i,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${i||""}>
            <div class="flex-1">
                ${Ae({record:t,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${m.JsonEditor({initialData:t,endpoint:e})}
              </details>
            </div>
        </div>

    `}function fa({record:t,properties:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){e=e||Object.keys(t);let l=e.filter(f=>f.startsWith("@")),u=e.filter(f=>!f.startsWith("@"));e=l.sort().concat(u.sort());let d={rows:[]};return m.Table(m.TableHeader(m.TableRow(m.TableCellRight("")+m.TableCellRight(P.DropdownMenu(s.getPotentialActions(t)))))+m.TableBody(e.map(f=>m.TableRow([m.TableCell(f+":"),m.TableCell(pa({record:t,propertyID:f,className:r,attrs:n,expandAll:i,depth:o+1,options:a}))].join(" "))).join(" ")))}function hg({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){let l=s.getValues(t,e),u=[];for(let d of l){let c=s.clone(t);c=s.setValue(c,e,d),u.push(pa({record:c,propertyID:e,className:r,attrs:n,expandAll:i,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${u.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function pa({record:t,propertyID:e,className:r="",attrs:n="",expandAll:i=!1,depth:o=0,options:a}){let l=s.getValues(t,e);return s.isArray(l)&&l.length==1&&(l=l[0]),s.isArray(l)&&l.length==0?"":s.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(l,e,a?.baseUrl)}</summary>
      
                ${hg({record:t,propertyID:e,className:r,attrs:n,expandAll:i,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(l,e,a?.baseUrl)}</summary>
      
            ${fa({record:l,propertyID:void 0,className:r,attrs:n,expandAll:i,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":P.Value(l,e,a?.baseUrl)}var Ti={};p(Ti,{DropdownMenu:()=>yg,Menu:()=>mg});function mg(t){return t=s.toArray(t),!t||t.length==0?"":m.DropdownMenu(m.DropdownMenuIcon(),t.map(e=>m.MenuItemPost(s.getImageUrl(e),s.getName(e),s.getUrl(e))).join(" "))}function yg(t){if(t=s.toArray(t),!t||t.length==0)return"";let e=t.map(n=>m.MenuItemPost(s.getImageUrl(n),s.getName(n),s.getUrl(n),s.ref(n))).join(" ");return m.DropdownMenu(m.DropdownMenuIcon(),e)}var Pi={};p(Pi,{Kanban:()=>bg,KanbanCard:()=>ha,KanbanColumn:()=>ga});function bg(t,e){let r=s.getItems(t);return m.Kanban(m.KanbanHeader(m.KanbanTitle("Awesome Kanban","Fuck yeah"))+m.KanbanBody(propertyValues.map(n=>ga(t,e,n)).join(" "))+m.KanbanFooter(""))}function ga(t,e,r){let n=s.getItems(t);return n=n.filter(i=>s.getValue(i,e)==r),m.KanbanColumn(m.KanbanColumnHeader(r)+m.KanbanColumnBody(n.map(i=>ha(i)).join(" "))+m.KanbanColumnFooter())}function ha(t){return m.KanbanCard(m.KanbanCardHeader("xx")+m.KanbanCardBody(P.Value(s.getName(t),"name"))+m.KanbanCardFooter(P.Value(s.getActionStatus(t),"actionStatus")))}var P={..._i,...Si,...Ai,...Ii,...ki,...Ti,...Hr,...Pi};function or({record:t,options:e}){if(s.isArray(t))return t.map(o=>or({record:o,options:e}));let r=s.record_type(t);if(!r)return t;let n=b.url.getUrl(e.baseUrl,"/execute"),i=s.ref(t);for(let o of Object.keys(t?.record||t))t=s.setValues(t,o,or({record:s.getValues(t,o),options:e}));return r=="Action"&&s.isPotential(t)&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n})),r=="ItemList"&&(t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:i,url:n})),r=="ListItem"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),r=="Thing"&&(t=s.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:i,url:n}),t=s.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:i,url:n})),t}function ma({website:t,webpage:e,title:r,url:n,headContent:i,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:f}){return o=o??"",o+=P.Table({url:n,records:a,properties:l,headers:u,offset:d,limit:c,options:f}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:f})}function ya({website:t,webpage:e,title:r,url:n,headContent:i,content:o,record:a,properties:l,headers:u,options:d}){return o=o??"",o+=P.Record({url:n,record:a,options:d}),le({website:t,webpage:e,title:r,headContent:i,content:o,options:d})}var ba={blankPage:le,recordsPage:ma,recordPage:ya,cardsPage:oa};var xa={blocks:P,...ba,components:ne,...ne};var Di={};p(Di,{getParsedRequest:()=>xg});function xg(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var Va={shadcn:xa,express:Di};var ar=class{constructor(e){this._objectID=s.randomUUID(),this._isInit=!1,this.dbpath=e||"./testdata/dblogs",this.indexFilename="indexdb.json",this.indexDB=[],this.objectDB={}}toString(){return s.exportToString(this.indexDB)}async init(){if(this._isInit==!0)return;let e=await N.load(this.dbpath,this.indexFilename);e=e??[];try{this.indexDB=JSON.parse(e)}catch{this.indexDB=[]}this._isInit=!0}async sync(){await this.init();let e=JSON.stringify(this.indexDB,null,4),r=await N.save(this.dbpath,this.indexFilename,e)}async get(e){if(await this.init(),e=e?.record_id||e?.["@id"]||e,!s.find(this.indexDB,{"@id":e}))return;let n=wa(e),i=await N.load(this.dbpath,n);try{let o=JSON.parse(i??{});return new V.Action(o)}catch(o){console.log("DbLogs Error get",e,i,o)}}async set(e){await this.init(),e?._isThingClass||(e=new V.Action(e)),this.objectDB[s.record_id(e)]=e,e.addListener(this.eventCallback.bind(this),this._objectID,!0);let r=this.objectDB?.[e.record_id];r&&(console.log("Action found, removing listener"),r.removeListener(this._objectID)),this.indexDB=this.indexDB.filter(l=>s.record_id(e)!=l?.["@id"]),this.indexDB.push(Vg(e));let n=wa(e.record_id),i=JSON.stringify(e.record,null,4),o=await N.save(this.dbpath,n,i),a=await this.sync()}async search(e){let r=s.filter(this.indexDB,e??{}),n=[];for(let i of r){let o=await this.get(i);n.push(o)}return n}async eventCallback(e){console.log("callback");let r=e?.result[0]??e?.result,n=s.record_id(r),i=this.objectDB?.[n]||new V.Action;i.record=r,console.log("cb",i),await this.set(i)}async post(e){return await this.set(e)}get actions(){}get activeActions(){}};function Vg(t){return t=t?.record||t,t=s.strip(t),t}function wa(t,e=200){if(typeof t!="string"||!t.trim())return"unnamed-file";let r=t.trim();if(r=r.replace(/(undefined|null)/gi,""),r=r.replace(/^[a-z]+:\/\//i,""),r=r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),r=r.replace(/[^a-zA-Z0-9.-]/g,"-"),r=r.replace(/--+/g,"-").replace(/\.\.+/g,".").replace(/^[-.]+|[-.]+$|\.$/g,""),!r)return"unnamed-file";if(r.length>e){let n=r.lastIndexOf(".");if(n>r.length-10&&n>0){let i=r.slice(n);r=r.slice(0,e-i.length)+i}else r=r.slice(0,e)}return r=r+".json",r}var Se={};p(Se,{_getDate:()=>dt,compile:()=>ur,compileOverwrite:()=>_a,datapointsToRecord:()=>Bi,dedupe:()=>Ri,eq:()=>wg,ge:()=>vi,getConfidence:()=>E,getDataFeedItem:()=>$g,getDatapoint:()=>Ci,getExecutionID:()=>Sg,getModifiedDate:()=>L,gt:()=>Ue,isEqual:()=>ct,le:()=>ji,lt:()=>Ni,merge:()=>_g,recordToDatapoints:()=>Oi,sameObject:()=>Aa,sameObjectAndProperty:()=>ie,sort:()=>lr,toString:()=>_e});function _e(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return s.isArray(t)?s.format.toTextTable(t,e):s.format.toTextRecord(t,e)}function ct(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r,n;return r=s.getValue(t,"value"),n=s.getValue(e,"value"),!(s.record_id(r)!=s.record_id(n)||r!=n||(r=s.getValue(t,"instrument"),n=s.getValue(e,"instrument"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"agent"),n=s.getValue(e,"agent"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"execution"),n=s.getValue(e,"execution"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeed"),n=s.getValue(e,"datafeed"),s.record_id(r)!=s.record_id(n))||(r=s.getValue(t,"datafeedItem"),n=s.getValue(e,"datafeedItem"),s.record_id(r)!=s.record_id(n)))}function Aa(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"object"),n=s.getValue(e,"object");return s.record_id(r)==s.record_id(n)}function ie(t,e){t=t?.record??t,e=e?.record??e;let r=s.getValue(t,"propertyID"),n=s.getValue(e,"propertyID");return Aa(t,e)&&r==n}function wg(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let i=L(t),o=L(e);return!(i==null&&o!=null||i!=null&&o==null||+i!=+o)}function Ni(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<+o:!1}function ji(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i<=+o:!0}function Ue(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>+o:!1}function vi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=E(t),n=E(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let i=L(t),o=L(e);return i==null&&o!=null||i!=null&&o==null?!1:+i!=+o?+i>=+o:!0}function Ag(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e))return Ue(t,e);let r=s.getValue(t,"object"),n=s.getValue(e,"object"),i=r?.["@id"]||"",o=n?.["@id"]||"",a=i.split("#")?.[1],l=o.split("#")?.[1];if(a!=l)return a<l?-1:1;if(i!=o)return r<n?-1:1;let u=s.getValue(t,"propertyID"),d=s.getValue(e,"propertyID");return u!=d?u<d?-1:1:0}function lr(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,Ag(e,r))),t}function _g(t,e){if(ct(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function Ri(t){t=s.toArray(t);let e=[];for(let r of t)e.find(i=>ct(r,i))||e.push(r);return e}function E(t){t=t?.record??t;let e=s.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function Sg(t){t=t?.record??t;let e=s.getValue(t,"execution");return s.record_id(e)}function L(t){t=t?.record??t;let e;return e=e||dt(t,"dataFeedItem.dateDeleted"),e=e||dt(t,"dataFeedItem.dateModified"),e=e||dt(t,"dataFeedItem.dateCreated"),e=e||dt(t,"observationDate"),e}function dt(t,e){let r=s.getValue(t,e);if(r=new Date(r),r instanceof Date&&!Number.isNaN(r.getTime()))return r}function Oi(t,e,r){function n(i,o,a,l,u){let d=[];if(s.isArray(a)){for(let c of a)d=d.concat(n(i,o,c,l,u));return d}if(a?.["@id"]){o&&d.push(Ci(i,o,{"@id":a?.["@id"]},l,u));let c={"@id":a?.["@id"]};for(let f of Object.keys(a))f!="@id"&&(d=d.concat(n(c,f,a[f],l,u)));return d}return[Ci(i,o,a,l,u)]}return r=r??s.randomUUID(),n(void 0,void 0,t,e,r)}function Bi(t){t=s.toArray(t),t=t.map(n=>n?.record??n);let e={};t=ur(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let i=s.getValue(n,"object"),o=s.record_id(i),a=s.getValue(n,"propertyID"),l=s.getValue(n,"value");e[o]=e?.[o]||{"@id":o},e[o]=s.addValues(e[o],a,l)}e=Object.keys(e).map(n=>e[n]);let r=new s.DB;return r.set(e),e=r.search(),e=s.simplify(e),e}function Ci(t,e,r,n={},i=s.randomUUID()){return{"@type":"Datapoint","@id":s.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:i,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function ur(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(i=>!_a(r,i)),e=e.slice(1);let n=t.map(i=>i?.["@id"]);e=e.filter(i=>n.includes(i?.["@id"]))}return t}function _a(t,e){if(t=t?.record??t,e=e?.record??e,s.getValue(t,"operation")=="AddAction"||ie(t,e)==!1||s.getValue(t,"valueGroupID")==s.getValue(e,"valueGroupID"))return!1;if(s.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&Ue(t,e)}return Ue(t,e)}function $g(t,e,r,n,i){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:i}}var D=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=_t.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=s.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var ue=class extends D{constructor(e,r,n,i,o,a,l){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=i??this.dataFeed,this.dataFeedItem=o??this.dataFeedItem,this.agent=a??this.agent,this.instrument=l??this.instrument)}toString(){return _e(this.record)}set(e,r,n,i,o,a,l){this.c=e,this.d=r,this.execution=n,this.dataFeed=i,this.dataFeedItem=o,this.agent=a,this.instrument=l}get dataFeed(){return new D(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new D(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new D(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new D(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new D(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new D(e,"Person"),this.setValue("agent",e)}get instrument(){return new D(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new D(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new D(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new D(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var de=class extends ue{constructor(e,r,n,i){super({},"DataPoint"),s.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),i&&(this.metadata=i)}toString(){return _e(this.record)}lt(e){return Ni(this.record,e?.record??e)}le(e){return ji(this.record,e?.record??e)}gt(e){return Ue(this.record,e?.record??e)}ge(e){return vi(this.record,e?.record??e)}get object(){return new D(this.getValue("object"))}set object(e){e=e?.record?e:new D(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var dr=class extends ue{constructor(e,r,n,i,o,a,l){super(e,r,n,i,o,a,l),this._dataPoints=[]}get dataPoints(){return lr(this._dataPoints)}set dataPoints(e){this._dataPoints=lr(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return _e(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return s.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,i){if(i=i??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let o=new de(e,void 0,void 0,i);return this._dataPoints.push(o),o}if(e&&!r)return this.#e(void 0,void 0,e,i);if(e&&r){let o=new de(e,r,n,i);return this._dataPoints.push(o),o}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return Bi(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,i){let a=Oi(n,i).map(l=>new de(l));this.dataPoints=this.dataPoints.concat(a)}#t(e){if(s.isArray(e))return e=Ri(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>ct(n,e))||this._dataPoints.push(e)}};var Ui={};p(Ui,{analyzeDataPoints:()=>Ig,toString:()=>kg});function kg(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return s.isArray(t)?ut.toTextTable(t,e):ut.toTextRecord(t,e)}function Ig(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(Tg(t,n));return r}function Tg(t,e){t=t.filter(i=>i.object["@id"]==e);let r=t.map(i=>i.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let i of r)console.log("rr",e,i),n=n.concat(Pg(t,e,i));return n}function Pg(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],i=t.filter(u=>u.object["@id"]==e&&u.propertyID==r),o=ur(i),a,l=[];for(let u of n){a=i.map(f=>s.getValue(f,u));let d={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ALL",N:a.length,uniqueN:[...new Set(a)].length};l.push(d),a=o.map(f=>s.getValue(f,u));let c={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ACTIVE",N:a.length,uniqueN:[...new Set(a)].length};l.push(c)}return l}var Sa={...Se,DataPoint:de,DataPointDB:dr,Metadata:ue,analysis:Ui};var fr=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(s.isArray(e)){for(let n of e){let i=await this._set(n);r.addPart(i)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),i=s.record_id(e),o=cr(i),a=await N.save(this.path,o,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new s.DB;n.set(e);for(let i of n){let o=new V.Action("Saving record "+s.record_id(i));try{let a=JSON.stringify(i,null,4),l=s.record_id(i),u=cr(l),d=await N.save(this.path,u,a);o.setCompleted(i),r.addPart(o)}catch(a){o.setFailed(String(a)),r.addPart(o)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new V.Action("Get record from db");if(r.object=s.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(s.isArray(e)){let o=[];for(let a of e){let l=await this._get(a);r.addPart(l),o=o.concat(s.toArray(l.result))}return r.setCompleted(o),r.record}let n=cr(e),i=await N.load(this.path,n);if(!i||i=="")return r.setFailed("No records found"),r.record;try{let o=JSON.parse(i);return o=s.simplify(o),r.setCompleted(o),r.record}catch(o){return r.setFailed(o),r.record}}async _getNested(e){let r=new V.Action("Get nested record");r.object=s.ref(e);let n=new s.DatabaseHelper({"@id":e});for(;n.isActive;){let i=n.next,o=await this._get(i);r.addPart(o),o?.result?s.toArray(o.result).map(a=>n.add(a||s.ref(a))):n.add(s.ref(i))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new V.Action("Get all records"),n;try{n=await N.dir.list(this.path),n=n||[],n=s.toArray(n)}catch(a){return r.setFailed(a),r.record}if(n.length==0)return r.setCompleted([]),r.record;let i=n.map(a=>Dg(a)),o=await this.get(i,e);return r.addPart(o),r.setCompleted(o.result),r.record}async exists(e){let r=await this.get(e,!1);return s.isCompleted(r)}async delete(e){let r=new V.Action("Delete record");if(r.object=s.ref(e),!e)return r.setCompleted(),r.record;if(s.isArray(e)){for(let n of e){let i=await this.delete(n);r.addPart(i)}return r.setCompleted(),r.record}e=s.toRecord_id(e);try{let n=cr(e),i=await N.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new V.Action("Purge database");try{let r=await N.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function cr(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function Dg(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}function Hi(t,e){if(s.isArray(t))return t.map(n=>Hi(n,e));let r=s.record_type(t);if(r=="ReplaceAction")return Cg(t,e);if(r=="UpdateAction")return Ng(t,e);if(r=="MoveUpAction")return jg(t,e);if(r=="MoveDownAction")return vg(t,e)}function Cg(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n)i["@id"]=s.record_id(o)||s.record_id(i),e.set(i),s.addValue(t,"result",i);return t=s.setCompleted(t),t}function Ng(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);o=o||{"@id":s.record_id(o)},o=s.patch(o,i),e.set(o),t=s.addValue(t,"result",o)}return t=s.setCompleted(t),t}function jg(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);a=helpers.things.ItemList.moveUp(a,i),e.set(a),t=s.addValue(t,"result",a)}return s.setCompleted(t),t}function vg(t,e){let r=s.getValues(t,"object"),n=s.getValues(t,"targetCollection");for(let i of r)for(let o of n){let a=e.get(o);a=helpers.things.ItemList.moveDown(a,i),e.set(a),t=s.addValue(t,"result",a)}return s.setCompleted(t),t}function pr(t,e){if(!t)return t;if(s.isArray(t))return t.map(n=>pr(n,e));if(s.isObject(t)==!1)return t;let r=s.record_type(t);if(!r)return t;r=="Action"&&(t=Bg(t,e)),r=="ItemList"&&(t=Og(t,e));for(let n of Object.keys(t))t[n]=pr(t[n],e);return t}function Og(t,e){let r=s.getValues(t,"itemListElement"),n=s.getValues(t,"numberOfItems");for(let i=0;i<r.length;i++){let o=s.getValue(r[i],"position");o>0&&(r[i]=Ug(r[i],t,e)),o<n-1&&(r[i]=Hg(r[i],t,e)),r[i]=Fg(r[i],t,e),r[i]=Mg(r[i],t,e)}return t}function Bg(t,e){let r;return s.getValue(t,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},t=se(t,e,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),s.isPotential(t)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},t=se(t,e,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),s.isActive(t)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},t=se(t,e,r,"Set Failed")),t}function se(t,e,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=s.record_id(t);let i={"@type":"UpdateAction",name:n,object:r,targetCollection:s.ref(t),url:e};return t=s.addValue(t,"potentialAction",i),t}function Ug(t,e,r,n){n=n||"Move up";let i={"@type":"MoveUpAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Hg(t,e,r,n){n=n||"Move down";let i={"@type":"MoveDownAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Fg(t,e,r,n){n=n||"Delete";let i={"@type":"DeleteAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}function Mg(t,e,r,n){n=n||"Duplicate";let i={"@type":"DuplicateAction",name:n,object:s.ref(t),targetCollection:s.ref(e),url:r};return t=s.addValue(t,"potentialAction",i),t}var $a={add:pr,execute:Hi};var ka={...s,...Fn,...Ln,...qn,...ge,dataHelpers:b,...Nn,records:_,disk:N,DbLogs:ar,datapointHelpers:Sa,format:ut,html:Va,potentialAction:$a,DbDisk:fr},u0=ka,d0=ka;export{ka as _h,d0 as default,u0 as helpers,_ as records,g as transformHelpers};
//# sourceMappingURL=index.js.map
