var ul=Object.defineProperty;var g=(t,e)=>{for(var r in e)ul(t,r,{get:e[r],enumerable:!0})};var Ie={get:Me,set:bt,flatten:dl,expand:cl};function Me(t,e){if(!e||typeof e!="string")return;let r=os(e),n=t;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function bt(t,e,r){if(!e||typeof e!="string"||e=="")return;let n=os(e);if(n.length==0)return r;let s=t;t=t||{},isNaN(n[0])||(t=Array.isArray(t)?t:[t]);let o=t;for(let a=0;a<n.length-1;a++){let l=n[a],u=n[a+1],d=!isNaN(u);d==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),d==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,t}function dl(t){function e(s,o){let a=[];return Array.isArray(o)?(s=s||"",o.map((u,d)=>e(`${s}[${String(d)}]`,u)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(u=>e(`${s}${u}`,o[u])).flat()):[{propertyID:s,value:o}]}let r=e("",t),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function cl(t){let e={};return Object.keys(t).forEach(r=>bt(e,r,t?.[r])),e}function os(t){let e=[],r="",n=["[","]","."];for(let s of t)if(n.includes(s)){r!=""&&e.push(r),r="";continue}else r=r+s;return e.push(r),e=e.filter(s=>s!=""),e=e.map(s=>isNaN(Number(s))?s:Number(s)),e}var Ir={};g(Ir,{eq:()=>yl,ge:()=>Al,getDiff:()=>ls,getHash:()=>as,getHashNested:()=>_l,gt:()=>wl,isEqual:()=>bl,isSame:()=>ml,le:()=>Vl,lt:()=>xl});var xt={};g(xt,{expand:()=>pl,flatten:()=>gl,getChildren:()=>hl,handleRelationships:()=>_r,simplify:()=>Sr,strip:()=>Ar});function pl(t,e,r=!0){let n=i._storeToMap(t),s=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(p=>o(p));let l=i.record_id(a);if(l&&s.has(l)){let p=s.get(l);return r?p:i.ref?i.ref(p):{"@id":l}}let d=(l&&n instanceof Map?n.get(l):null)||a,c=Array.isArray(d)?[...d]:{...d};l&&s.set(l,c);for(let p of Object.keys(c))p==="previousItem"||p==="nextItem"||(c[p]=o(c[p]));return c}return typeof e=="string"&&(e={"@id":e}),o(e)}function Ar(t){function e(r,n,s){if(Array.isArray(r))return r.map(o=>e(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=e(r?.[a],n,s+1);return o}}return r}return e(t,0,0)}function gl(t){function e(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let a of n)o=o.concat(e(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let a=n[o];a=i.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),s=s.concat(e(l))}return s=[n].concat(s),s}t=i.clone(t),t=i.setTempID(t),t=_r(t);let r=e(t);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function _r(t){if(i.isArray(t))return t.map(r=>_r(r));let e=t;if(i.record_type(e)=="Product"){let r=i.getValues(e,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(e))),e=i.setValues(e,"offers",r);let n=i.getValues(e,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}if(i.record_type(e)=="Offer"){let r=i.getValues(e,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(e))),e=i.setValues(e,"itemOffered",r);let n=i.getValues(e,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"review",n);let s=i.getValues(e,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(e))),e=i.setValues(e,"aggregateRating",s)}return e}function Sr(t){function e(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>e(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=e(n?.[a],s);a=="itemListElement"&&(l=i.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return t=i.clone(t),e(t)}function hl(t){function e(r,n){if(i.isArray(r)){let o=[];for(let a of r){let l=e(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(e(r[o],n+1));return s=s.filter(o=>o),s}return e(t,0)}function ml(t,e){if(t=i.record_id(t)??t,e=i.record_id(e)??e,t==null&&e==null)return!0;if(t!=null&&e==null||t==null&&e!=null)return!1;if(!isNaN(t)&&!isNaN(e)||typeof t=="string"&&typeof e=="string"||t instanceof Date&&e instanceof Date)return t==e;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t==e}function yl(t,e){if(t===void 0&&e===void 0)return!0;if(t!==void 0&&e===void 0||t===void 0&&e!==void 0)return!1;if(t===null&&e===null)return!0;if(t!==null&&e===null||t===null&&e!==null)return!1;t=i.clean(t),e=i.clean(e),t=i.strip(t),e=i.strip(e);try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return t==e}function bl(t,e){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{t=i.JSON_stringify(t)}catch{}try{e=i.JSON_stringify(e)}catch{}return t==e}function xl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<e}function Vl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t<=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]<=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t<=e}function wl(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>e}function Al(t,e){if(t==null&&e==null)return!1;if(!isNaN(t)&&!isNaN(e))return t>=e;if(t?.["@id"]!=null&&e?.["@id"]!=null)return t?.["@id"]>=e?.["@id"];if(t?.["@id"]!=null&&e?.["@id"]==null||t?.["@id"]==null&&e?.["@id"]!=null)return!1;try{t=JSON.stringify(t)}catch{}try{e=JSON.stringify(e)}catch{}return t>=e}function as(t,e=!1){t=Sr(t),e==!1&&(t=Ar(t));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((u,d)=>({...u,[d]:r(l[d])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(t)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function _l(t){return as(t,!0)}function ls(t,e){if(t===e)return null;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return e;let r={};for(let n in t)if(t.hasOwnProperty(n))if(!e.hasOwnProperty(n))r[n]={removed:t[n]};else{let s=ls(t[n],e[n]);s!==null&&(r[n]=s)}for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(r[n]={added:e[n]});return Object.keys(r).length>0?r:null}var kr={};g(kr,{evaluate:()=>$r});function $r(t,e){let r=[];for(let s of Object.keys(e)){let o=s,a=e?.[s];if(a=i.toArray(a),o=="$and")return a.every(l=>$r(t,l));if(o=="$or")return a.some(l=>$r(t,l));for(let l of a){let u=Il(t,o,l);r.push(u)}}return r.every(s=>Sl(s.r,s.p,s.o,s.v))}function Sl(t,e,r,n){try{let s=Ie.get(t,e);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Il(t,e,r){let n={r:t,p:e,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:t,p:e,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:t,p:e,o:"$equal",v:r}),typeof r=="object"&&(n={r:t,p:e,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var rn={};g(rn,{assignId:()=>au,getGenericRecordID:()=>ou,normalizeRecordId:()=>iu,replaceIds:()=>_s,setTempID:()=>As});var z={};g(z,{default:()=>tu,get:()=>Q,getGenericRecordID:()=>Xe,getStandardID:()=>$t,recordIdHelpers:()=>It,set:()=>_t,validate:()=>Ye});var Nr={};g(Nr,{clean:()=>$l,isArray:()=>pe,isNotArray:()=>Tr,isValid:()=>kl,toArray:()=>Vt});function $l(t){return Vt(t)}function kl(t){return pe(t)}function pe(t){return t===void 0?!1:Array.isArray(t)&&typeof t!="string"}function Tr(t){return!pe(t)}function Vt(t){return t==null?[]:(t=pe(t)?t:[t],t=t.filter(e=>e!==void 0),t)}var jr={};g(jr,{clean:()=>Pr,format:()=>Nl,formatDate:()=>us,isDate:()=>Z,isNotDate:()=>Dr,isValid:()=>Tl,toDate:()=>$e});function Pr(t,e=void 0){return $e(t)||e}function Tl(t){return Z(t)}function Nl(t,e=!1){return us(t,e)}function Z(t){return t===void 0||t===""?!1:t instanceof Date&&!Number.isNaN(t.getTime())}function Dr(t){return!Z(t)}function $e(t){if(t===void 0)return;if(Z(t)==!0)return t;if(!isNaN(Number(t)))return;let e=Date.parse(t);if(!isNaN(e))return t=new Date(t),t=Z(t)?t:void 0,t}function us(t,e=!1){if(console.log("vv",t,$e(t)),t=$e(t),Z(t)===!1)return;let r=t,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${s}-${o}`;if(e==!0){let l=String(r.getHours()).padStart(2,0),u=String(r.getMinutes()).padStart(2,0),d=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${u}:${d}`}return a}var Rr={};g(Rr,{clean:()=>Pl,isNotNull:()=>Cr,isNull:()=>Te,isValid:()=>Dl});function Pl(t,e=void 0){}function Dl(t){return Te(t)}function Cr(t){return!Te(t)}function Te(t){return t===void 0||t===null?!0:t===0?!1:typeof t=="string"||ke.array.isValid(t)?t.length==0:t instanceof Date?ke.date.isValid(t):typeof t=="object"?Object.keys(t)==0:!1}var Ur={};g(Ur,{clean:()=>Or,format:()=>Cl,formatDecimals:()=>ds,isNotNumber:()=>vr,isNumber:()=>Ee,isValid:()=>jl,toNumber:()=>wt});function Or(t,e=void 0){return wt(t)??e}function jl(t){return Ee(t)}function Cl(t,e){return ds(t,e)}function ds(t,e){if(t=Number(t),!isNaN(t))return e!==void 0?t.toFixed(e):t}function Ee(t){return t===void 0||t===""?!1:(t=Number(t),!isNaN(t))}function vr(t){return!Ee(t)}function wt(t){if(t!==void 0&&(t=Number(t),!isNaN(t)))return t}var Hr={};g(Hr,{clean:()=>Rl,cleanObject:()=>Le,isNotObject:()=>Br,isObject:()=>We,isValid:()=>Ol});function Rl(t,e=void 0){return Le(t)||e}function Ol(t){return We(t)}function We(t){return typeof t!="object"||t===null||Array.isArray(t)||t===void 0||f.isString(t)==!0||f.isDate(t)==!0||f.isNumber(t)==!0||f.isArray(t)==!0?!1:Object.keys(t).length>0}function Br(t){return!We(t)}function Le(t){if(f.array.isValid(t)){if(t.length==0)return;if(t.length==1)return t=t[0],Le(t);if(t.length==1){let e=[];for(let r of t)e=e.concat(Le(x));e=e.filter(r=>f.isNotNull(r))}}if(f.object.isValid(t))for(let e of Object.keys(t))t[e]=Le(t[e]),ke.isNull(t[e])&&delete t[e];return ke.isNotNull(t)?t:void 0}var Er={};g(Er,{clean:()=>vl,cleanString:()=>cs,isNotString:()=>Fr,isString:()=>Ne,isValid:()=>Ul,maxLengthEnd:()=>Hl,maxLengthMiddle:()=>Bl,toString:()=>Mr});function vl(t,e=""){return cs(t)||e}function Ul(t){return Ne(t)&&t.trim().length>=0}function Bl(t,e){if(t==null)return"";let r=String(t);if(e===void 0||e<0||r.length<=e)return r;if(e<=3)return r.substring(0,e);let n=Math.round(e/3),s=e-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function Hl(t,e){if(t==null)return"";let r=String(t);return e===void 0||e<0||r.length<=e?r:e<=3?r.substring(0,e):r.substring(0,e-3)+"..."}function Ne(t){return typeof t=="string"||t instanceof String}function Fr(t){return!Ne(t)}function Mr(t){return t==null?"":String(t)}function cs(t){return Ne(t)?t.trim():void 0}var zr={};g(zr,{clean:()=>fs,cleanUrl:()=>gs,getDomain:()=>Fl,getParams:()=>Ml,getPath:()=>ms,getUrl:()=>ps,isNotUrl:()=>Jr,isUrl:()=>Je,isValid:()=>Lr,setParams:()=>hs,setPath:()=>ys,toUrl:()=>Wr});function Lr(t){return Je(t)}function fs(t,e=void 0){return gs(t)??e}function Wr(t,e,r,n=void 0){return ps(t,e,r)||n}function ps(t,e,r){let n=ys(t,e);return r&&(n=hs(n,r)),n}function Je(t){return t=fs(t),!!t}function Jr(t){return!Je(t)}function gs(t,e={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=e;try{let l=new URL(t);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let u=l.pathname;if(u=u.replace(/\/+/g,"/"),o&&(u=u.toLowerCase()),s&&u.length>1&&u.endsWith("/")&&(u=u.slice(0,-1)),l.pathname=u,r){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],c=Array.from(l.searchParams.keys());for(let p of c){let b=d.some(L=>p.toLowerCase().startsWith(L)),S=a.includes(p);b&&!S&&l.searchParams.delete(p)}}return l.searchParams.sort(),l.toString()}catch{return}}function Fl(t){try{let e=new URL(t).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function Ml(t){try{let e=new URL(t);return Object.fromEntries(e.searchParams)}catch{return null}}function hs(t,e){try{let r=new URL(t);for(let n of Object.keys(e))r.searchParams.set(n,e[n]);return r.toString()}catch{return null}}function ms(t){try{return new URL(t).pathname}catch{return}}function ys(t,e){e=e??"";let r=[],n=ms(t)||"";r=r.concat(n.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let o of e)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,t).toString()}catch(o){console.log(o,s,t);return}}var Kr={};g(Kr,{clean:()=>El,format:()=>Wl,isDuration:()=>Pe,isNotDuration:()=>qr,isValid:()=>Ll,toDuration:()=>Gr});function El(t,e=void 0){return toDate(t)||e}function Ll(t){return Pe(t)}function Wl(t){return zl(t)}function Pe(t){return Jl(t)}function qr(t){return!Pe(t)}function Gr(t){return t}function Jl(t){return typeof t!="string"||t.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(t.trim())}function zl(t){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=t.match(e);if(!r)return"00:00:00";let[n,s,o,a,l,u,d,c]=r.map(S=>parseInt(S,10)||0),p=[u,d,c].map(S=>String(S).padStart(2,"0")).join(":"),b=[];return s&&b.push(`${s}y`),o&&b.push(`${o}m`),a&&b.push(`${a}w`),l&&b.push(`${l}d`),b.length>0?`${b.join(" ")} ${p}`:p}var Xr={};g(Xr,{clean:()=>ql,format:()=>Kl,isBoolean:()=>ze,isNotBoolean:()=>Yr,isValid:()=>Gl,toBoolean:()=>qe,toString:()=>Yl});function ql(t){return qe(t)}function Gl(t){return ze(t)}function Kl(t){return qe(t)}function Yl(t){return String(t)}function ze(t){return typeof t=="boolean"}function Yr(t){return typeof t!="boolean"}function qe(t){if(ze(t))return t;if(typeof t=="string"){if(t.toLowerCase()=="true")return!0;if(t.toLowerCase()=="false")return!1}if(!isNaN(t)){if(t==0)return!1;if(valeu==1)return!0}}var en={};g(en,{clean:()=>Xl,format:()=>Ql,fromJson:()=>Qr,isJson:()=>Ge,isNotJson:()=>Zr,isValid:()=>Zl,toJson:()=>Ke});function Xl(t){return Ke(t)}function Zl(t){return Ge(t)}function Ql(t){return Ke(t)}function Ge(t){if(!t)return!1;if(typeof t=="string"){try{if(JSON.parse(t))return!0}catch{}return!1}}function Zr(t){return!Ge(t)}function Ke(t){let e=()=>{let r=new WeakSet;return(n,s)=>{if(typeof s=="object"&&s!==null){if(r.has(s))return;r.add(s)}return s}};try{return JSON.stringify(t,e(),4)}catch{}}function Qr(t){try{return JSON.parse(t)}catch{}}var f={isNull:Te,isNotNull:Cr,isArray:pe,isNotArray:Tr,toArray:Vt,isDate:Z,isNotDate:Dr,toDate:$e,isDuration:Pe,isNotDuration:qr,toDuration:Gr,isObject:We,isNotObject:Br,isNumber:Ee,isNotNumber:vr,toNumber:wt,isString:Ne,isNotString:Fr,toString:Mr,isUrl:Je,isNotUrl:Jr,toUrl:Wr,isBoolean:ze,isNotBoolean:Yr,toBoolean:qe,isJson:Ge,isNotJson:Zr,toJson:Ke,fromJson:Qr,array:Nr,boolean:Xr,date:jr,duration:Kr,json:en,null:Rr,number:Ur,object:Hr,string:Er,url:zr,getDataType:bs,getType:bs,getJsonSchema:eu},ke=f;function bs(t){if(Te(t))return"undefined";if(t===!0||t===!1)return"Boolean";if(pe(t))return"Array";if(Z(t))return"DateTime";if(!isNaN(t))return"Number";if(typeof t=="string"){if(Lr(t))return"URL";if(Pr(t))return"DateTime";if(Pe(t))return"Duration";if(Or(t)!==void 0)return"Number";if(t.includes("[")||t.includes("{")||t.includes('"'))try{let e=JSON.parse(t);return"JSON"}catch{}return"Text"}return t?.["@id"]||t?.["@type"]?"Thing":"undefined"}function eu(t){function e(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),f.isString(r))return s.type="string",s;if(f.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=e(r[o],n+1);return s}if(f.isNumber(r))return s.type="number",s;if(f.isArray(r))return s.type="array",s.items=e(r?.[0],n+1),s}return e(t,0)}var Lh=globalThis.crypto.randomUUID,It={get:Q,set:_t,validate:Ye,getGenericRecordID:Xe,getStandardID:$t},tu=It,At={website:"domain",webpage:"url",offer:"url",brand:"domain"};function Q(t,e){if(!t||!t?.["@type"])return;let r=xs(t);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=At?.[n];if(s=="url")return Vs(n,St(t));if(s=="domain")return ws(n,St(t))}return Xe(e)}function $t(t,e){if(!t||!t?.["@type"])return;let r=xs(t);for(let n of r){let s=At?.[n];if(s=="url")return Vs(n,St(t));if(s=="domain")return ws(n,St(t))}}function _t(t,e){if(Array.isArray(t)&&typeof t!="string")return t.map(r=>_t(r,e));if(t?.["@type"]||t?.["@id"]){Ye(t)==!1&&(t["@id"]=Q(t,e));for(let r of Object.keys(t))t[r]=_t(t?.[r],e)}return t}function Ye(t,e){let r=t?.["@id"];return r?ru(t)?getStandardizedRecordId(t,e)==r:tn(t?.["@id"],e)==r:!1}function ru(t){let e=t?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let r of e)if(At?.[r])return At?.[r]}function xs(t){let e=t?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function St(t){let e=t?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(r=>r),e}function Xe(t){return t=tn(t),t?(t.endsWith("/")||(t=t+"/"),tn(t)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Vs(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>f.url.clean(s)),e=e.filter(s=>s);let r=e?.[0];return r?r+"#"+t:"_:"+globalThis.crypto.randomUUID()}function ws(t,e){if(!t||typeof t!="string")return;t=t.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(s=>nu(s)),e=e.map(s=>"https://"+s),e=e.filter(s=>s);let r=e?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+t):"_:"+globalThis.crypto.randomUUID()}function nu(t){if(!t||typeof t!="string")return null;try{let e=t.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function tn(t,e="https"){if(!t||typeof t!="string")return null;let r=t.trim();r.startsWith("//")?r=`${e}:${r}`:/^https?:\/\//i.test(r)||(r=`${e}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!t.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function iu(t,e){t=As(t);let r=su(t,e);return _s(t,r)}function su(t,e){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let l=[];for(let u of s)l=l.concat(r(u));return l}if(i.isObject(s)==!1)return[];let a=[{replacee:i.record_id(s),replacer:Q(s,o)}];for(let l of Object.keys(s))a=a.concat(r(s[l],o));return a}let n=r(t,e);return n=n.filter(s=>s),n}function As(t){if(Array.isArray(t))return t.map(e=>i.assignId(e));if(i.isObject(t)==!1)return t;t["@id"]=t?.["@id"]||"_:"+i.randomUUID();for(let e of Object.keys(t))t[e]=i.assignId(t[e]);return t}function ou(t){return Xe(t)}function au(t,e=[]){if(i.isArray(t))return t.map(r=>i.assignId(r,e));if(i.isObject(t)==!1||e.includes(t))return t;e.push(t);for(let r of Object.keys(t))t["@id"]=t?.["@id"]||"_:"+i.randomUUID(),t[r]=i.assignId(t[r],e);return t}function _s(t,e){function r(n,s){if(Array.isArray(n))return n.map(l=>i.replaceIds(l,s));if(!n?.["@id"])return n;let o=n?.["@id"],a=s.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=i.replaceIds(n?.[l],s);return n}if(!(e instanceof Map)){let n=new Map;e=(Array.isArray(e),e),e.forEach(s=>n.set(s.replacee,s.replacer)),e=n}return r(t,e)}var sn={};g(sn,{DB:()=>nn,_storeToMap:()=>ge,_storeToOriginal:()=>cu,deleteRecord:()=>lu,getRecord:()=>Ze,getRecords:()=>De,length:()=>uu,patchRecord:()=>Is,postRecord:()=>Ss});var nn=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,r=!0){return e=e?.["@id"]||e,Ze(this._store,e,r)}getAll(e=!0){return De(this._store,{},e)}getOrCreate(e,r=!0){let n=this.get(e,r);return(!n||i.isRef(n))&&(this.set(e),n=this.get(e,r)),n}search(e={},r=!0){return De(this._store,e,r)}set(e){let r=i.flatten(e),n=r.map(s=>Ze(this._store,i.record_id(s),!1));for(let s of r)this._store=Ss(this._store,s);return this._broadcastIfChanged(n,r),e}post(e){return this.set(e)}patch(e,r=!0){let n=i.flatten(e),s=n.map(o=>Ze(this._store,i.record_id(o),!1));for(let o of n)this._store=Is(this._store,o,r);return this._broadcastIfChanged(s,n),e}delete(e){let r=[this.get(e)];this._store=i.deleteRecord(this._store,e),this._broadcastIfChanged(r,[{"@id":e}])}getValue(e,r,n,s){let o=this.get(e);return i.getValue(o,r,n,s)}getValues(e,r,n){let s=this.get(e);return i.getValues(s,r,n)}setValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(e,r,n){let s=this.get(e);return s||(s={"@id":e}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return De(this._store)}getRecords(e=!1){return De(this._store,void 0,e)}get record_ids(){return du(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insert(e,r,n),this.set(e)}_list_upsert(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.upsert(e,r,n),this.set(e)}_list_prepend(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.prepend(e,r),this.set(e)}_list_append(e,r){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.append(e,r),this.set(e)}_list_insertBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.insertBefore(e,r,n),this.set(e)}_list_insertAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.insertAfter(e,r,n),this.set(e)}_list_moveBefore(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),n=this.getOrCreate(n),e=i.list.moveBefore(e,r,n),this.set(e)}_list_moveAfter(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.moveAfter(e,r,n),this.set(e)}_list_moveUp(e,r){e=this.getOrCreate(e),e=i.list.moveUp(e,r),this.set(e)}_list_moveDown(e,r){e=this.getOrCreate(e),e=i.list.moveDown(e,r),this.set(e)}_list_remove(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_delete(e,r){e=this.getOrCreate(e),e=i.list.remove(e,r),this.set(e)}_list_replace(e,r,n){e=this.getOrCreate(e),r=this.getOrCreate(r),e=i.list.replace(e,r,n),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,r=!0,n=void 0){let s=this.get(e,r);return!s||i.isRef(s)?n:s}updateRefs(e,r={},n={}){if(!e)return e;if(i.isArray(e))return e.map(s=>this.updateRefs(s,r,n));if(i.isObject(e)){if(i.isRef(e)){if(r?.[i.record_id(e)])return r[i.record_id(e)];e=this.get(e,!0)||e,r[i.record_id(e)]=e}else{if(n?.[i.record_id(e)])return e;n[i.record_id(e)]=e}for(let s of Object.keys(e))["previousItem","nextItem"].includes(s)||(e[s]=this.updateRefs(e[s],r,n));return e}return e}execute(e){let r=i.toArray(e);r=r.map(o=>this.updateRefs(o));let n=new i.DB;n.set(r);let s=[];for(let o of r){o=n.get(o),o=i.execute(o),s.push(o);let a=i.getValues(o,"hasPart");for(let l of a){let u=i.list.toItemList(l);i.list.getItems(u).forEach(c=>n.set(i.getResults(c)))}n.set(i.getResults(o))}return this.set(n.getAll()),s.length==1?s[0]:s}subscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n.includes(r)||(n.push(r),this._subscriptions.set(e,n))}unsubscribe(e,r){(!e||e=="*"||e=="all")&&(e="all");let n=this._subscriptions.get(e)||[];n=n.filter(s=>s!=r),this._subscriptions.set(e,n)}async _broadcastIfChanged(e,r){let n=[];for(let s of r){let o=e.find(a=>i.record_id(a)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(e){e=i.toArray(e),e=i.toRecordID(e),e=[...new Set(e)];for(let r of e){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(e,r){try{return e(r)}catch{return}}static randomUUID(){return i.randomUUID()}static clean(e,r){return i.clean(e,r)}static flatten(e){return i.flatten(e)}static getValue(e,r,n,s){return i.getValue(e,r,n,s)}static getValues(e,r,n){return i.getValues(e,r,n)}static setValue(e,r,n,s){return i.setValue(e,r,n,s)}static setValues(e,r,n){return i.setValues(e,r,n)}static addValue(e,r,n){return i.addValue(e,r,n)}static addValues(e,r,n){return i.addValues(e,r,n)}static strip(e){return i.strip(e)}static get dot(){return Ie}static ref(e){return i.ref(e)}static simplify(e){return i.simplify(e)}static isJsonld(e){return i.isJsonld(e)}static isValid(e){return i.isValid(e)}static isArray(e){return i.isArray(e)}static setAdditionalProperty(e,r,n,s){return i.setAdditionalProperty(e,r,n,s)}static getAdditionalProperty(e,r){return i.getAdditionalProperty(e,r)}};function Ss(t,e){if(!e)return;e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let r=ge(t);for(let n of e)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return t=i._storeToOriginal(r),t}function Is(t,e){e=i.clone(e),e=i.assignId(e),e=i.flatten(e);let r=ge(t);for(let n of e){let s=r.get(i.record_id(n));n=i.patch(s,n),r.set(i.record_id(n),n)}return t=i._storeToOriginal(r),t}function Ze(t,e,r=!0){if(i.isArray(e))return e.map(a=>Ze(t,a,r));let n=i._utilGetId(e),s=ge(t),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function De(t,e,r=!0){let n=ge(t),s=Array.from(n.values());return e&&(s=s.filter(o=>i.evaluate(o,e))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function lu(t,e){let r=i._utilGetId(e),n=ge(t);return r=Array.isArray(r)?r:[r],r.map(s=>n.delete(s)),t}function uu(t){return ge(t).size}function du(t){return De(t).map(n=>i.record_id(n))}function ge(t){if(t instanceof Map||Object.prototype.toString.call(t)==="[object Map]")return t;t=i.toArray(t),t=t.filter(r=>i.isRef(r)===!1),t=t||[],t=Array.isArray(t)?t:[t];let e=new Map;for(let r of t){let n=i.record_id(r);n&&(e.has(n)&&(r=i.merge(e.get(n),r,!0)),e.set(n,r))}return t=e,t}function cu(t){return t=Array.from(t.values()),t}var an={};g(an,{JSON_parse:()=>gu,JSON_stringify:()=>Ps,clean:()=>ks,clone:()=>Ds,contractAtValue:()=>kt,expandAtValue:()=>hu,getRecordUrl:()=>bu,isJsonld:()=>$s,isValid:()=>fu,merge:()=>mu,patch:()=>yu,removeCircularRefs:()=>Ts,sortedReplacer:()=>Ns,stringify:()=>pu});function fu(t){return $s(t)}function $s(t){return t?.["@type"]||t?.["@id"]}function ks(t,e){if(Array.isArray(t)&&t.length>1)return t.map(s=>ks(s,e));if(!t?.["@type"]||!t?.["@id"])return t;try{t=Ds(t)}catch{}t=(void 0)(t);let r=i.flatten(t);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],Ye(s)==!0)continue;let o=$t(s,e);if(o&&s?.["@id"]!=o){let a={replacer:o,replacee:s?.["@id"]};n.push(a)}if(!o&&s?.["@id"].startsWith("_:")){let a={replacer:i.getGenericRecordID(e),replacee:s?.["@id"]};n.push(a)}}return t=i.replaceIds(t,n),t}function Ts(t){return on(t,new Set)}function on(t,e){if(e=new Set([...e]),t===null||typeof t!="object")return t;if(i.isArray(t))return t.map(n=>on(n,e));if(!i.isObject(t))return t;let r=i.record_id(t);if(e.has(r))return i.ref(t);e.add(r);for(let n of Object.keys(t))t[n]=on(t[n],e);return t}function Ns(t,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((r,n)=>(r[n]=e[n],r),{}):e}function Ps(t){return t=Ts(t),JSON.stringify(t,Ns,4)}function pu(t){return Ps(t)}function gu(t){return JSON.parse(t)}function hu(t){function e(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,e(s,!0));if(i.isArray(r))return r.map(o=>e(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,e(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return e(t,!1)}function kt(t){let e=i.getAtValue(t);if(e&&e.length>0)return kt(i.getAtValue(t));if(i.isArray(t))return t.map(r=>kt(r));if(i.isJsonld(t)){for(let r of Object.keys(t?.record||t))i.setValues(t,r,kt(i.getValues(t,r)));return t}return t}function Ds(t){try{return t=structuredClone(t),t}catch{}try{return t=JSON.parse(JSON.stringify(t)),t}catch{}return t}function mu(t,e,r=!0){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{};let n=[];n=n.concat(Object.keys(t)),n=n.concat(Object.keys(e)),n=[...new Set(n)];let s={"@id":t?.["@id"]||e?.["@id"]};for(let o of n){if(o=="@id")continue;let a=i.toArray(t?.[o]||void 0),l=i.toArray(e?.[o]||void 0),u=a.concat(l);r==!0&&(u=i.dedupe(u)),s[o]=u}return s}function yu(t,e){t=i.isArray(t)&&t.length==1?t[0]:t,e=i.isArray(e)&&t.length==2?e[0]:e,t=t??{},e=e??{},e=e?.record||e;for(let r of i.keys(e)){let n=i.toArray(e?.[r]);t=i.setValues(t,r,n)}return t}function bu(t,e){e=e?.baseUrl??e;try{return f.url.getUrl(e,encodeURIComponent(i.record_id(t)))}catch{return console.log("Err getRecordUrl"),""}}var cn={};g(cn,{ID:()=>vu,Id:()=>Hu,Type:()=>Iu,actionStatus:()=>Qu,addValue:()=>vs,addValues:()=>Us,contentUrl:()=>rd,description:()=>sd,email:()=>ld,getActionStatus:()=>ed,getAdditionalProperty:()=>Ku,getAtValue:()=>Xu,getContentUrl:()=>nd,getDescription:()=>od,getEmail:()=>ud,getID:()=>Uu,getId:()=>Fu,getImageName:()=>gc,getImageUrl:()=>pc,getItem:()=>fd,getItemListElement:()=>bd,getItems:()=>hd,getName:()=>wd,getNumberOfItems:()=>Sd,getObject:()=>kd,getObjects:()=>Pd,getPosition:()=>Cd,getPotentialAction:()=>vd,getPotentialActions:()=>Hd,getRecordID:()=>Ru,getRecordId:()=>Du,getRecordType:()=>_u,getRecord_id:()=>Tu,getRecord_type:()=>Vu,getResult:()=>Ed,getResults:()=>Jd,getTargetCollection:()=>Gd,getTargetCollections:()=>Xd,getText:()=>ec,getType:()=>$u,getUrl:()=>nc,getValue:()=>$,getValues:()=>dn,hasValue:()=>Bs,insertValue:()=>Gu,isActive:()=>oc,isCompleted:()=>ac,isFailed:()=>lc,isPotential:()=>sc,isRef:()=>Wu,item:()=>cd,itemListElement:()=>yd,items:()=>gd,keys:()=>zu,name:()=>Vd,numberOfItems:()=>_d,object:()=>$d,objects:()=>Nd,position:()=>jd,potentialAction:()=>Od,potentialActions:()=>Bd,properties:()=>un,recordID:()=>Cu,recordId:()=>Pu,recordType:()=>Au,record_id:()=>js,record_type:()=>xu,ref:()=>Ju,result:()=>Md,results:()=>Wd,setActionStatus:()=>td,setActive:()=>dc,setAdditionalProperty:()=>Yu,setAtValue:()=>Zu,setCompleted:()=>cc,setContentUrl:()=>id,setDescription:()=>ad,setEmail:()=>dd,setFailed:()=>fc,setID:()=>Bu,setId:()=>Mu,setIfNull:()=>qu,setItem:()=>pd,setItemListElement:()=>xd,setItems:()=>md,setName:()=>Ad,setNumberOfItems:()=>Id,setObject:()=>Td,setObjects:()=>Dd,setPosition:()=>Rd,setPotential:()=>uc,setPotentialAction:()=>Ud,setPotentialActions:()=>Fd,setRecordID:()=>Ou,setRecordId:()=>ju,setRecordType:()=>Su,setRecord_id:()=>Nu,setRecord_type:()=>wu,setResult:()=>Ld,setResults:()=>zd,setTargetCollection:()=>Kd,setTargetCollections:()=>Zd,setText:()=>tc,setType:()=>ku,setUrl:()=>ic,setValue:()=>O,setValueIfNull:()=>Os,setValues:()=>et,targetCollection:()=>qd,targetCollections:()=>Yd,text:()=>Qd,toRecordID:()=>Cs,toRecordId:()=>Lu,toRecord_id:()=>Qe,toRecord_ids:()=>Eu,toRef:()=>Rs,url:()=>rc});var je="en-CA";function xu(t){return $(t,"@type")}function Vu(t){return $(t,"@type")}function wu(t,e){return O(t,"@type",e)}function Au(t){return $(t,"@type")}function _u(t){return $(t,"@type")}function Su(t,e){return O(t,"@type",e)}function Iu(t){return $(t,"@type")}function $u(t){return $(t,"@type")}function ku(t,e){return O(t,"@type",e)}function js(t){return $(t,"@id")}function Tu(t){return $(t,"@id")}function Nu(t,e){return O(t,"@id",e)}function Pu(t){return $(t,"@id")}function Du(t){return $(t,"@id")}function ju(t,e){return O(t,"@id",e)}function Cu(t){return $(t,"@id")}function Ru(t){return $(t,"@id")}function Ou(t,e){return O(t,"@id",e)}function vu(t){return $(t,"@id")}function Uu(t){return $(t,"@id")}function Bu(t,e){return O(t,"@id",e)}function Hu(t){return $(t,"@id")}function Fu(t){return $(t,"@id")}function Mu(t,e){return O(t,"@id",e)}function Qe(t){return i.isArray(t)?t.map(e=>Qe(e)):typeof t=="string"?t:js(t)}function Eu(t){return Qe(t)}function Cs(t){return Qe(t)}function Lu(t){return Qe(t)}function Wu(t){return!i.isObject(t)||!t?.["@id"]?!1:!Object.keys(t).some(e=>e!="@id")}function Ju(t){if(t?._isThingClass==!0)return t.ref;if(!t)return;let e=i._utilGetId(t);if(e)return{"@id":e}}function Rs(t){return i.isArray(t)?t.map(e=>Rs(e)):{"@id":Cs(t)}}function zu(t){return un(t)}function un(t){if(!t)return[];if(i.isArray(t)){let r=[];for(let n of t)r=r.concat(un(n));return[...new Set(r)]}return Object.keys(t?.record||t)}function $(t,e,r,n,s){let o=dn(t,e,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function O(t,e,r,n,s){if(n!==void 0){let o=i.getValues(t,e);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return et(t,e,r,s)}function Os(t,e,r,n,s){let o=$(t,e,n);return i.isNull(o)==!1?t:O(t,e,r,n,s)}function qu(t,e,r,n,s){return Os(t,e,r,n,s)}function vs(t,e,r){return Us(t,e,r)}function Us(t,e,r){return r=i.getValues(t,e).concat(r),et(t,e,r)}function dn(t,e,r,n){if(t===void 0)return[];if(e==null||e=="")return[];t=t?.record||t;let s=e.split("."),o=t;for(let l=0;l<s.length;l++){let[u,d]=ln(s[l]);u&&(o=o?.[u],o=i.toArray(o)),o=o.filter(c=>c?.["@language"]==n||c?.["@language"]==je||c?.["@language"]===void 0),o=o.map(c=>c?.["@value"]??c),o=i.toArray(o),o=o.map(c=>c?.[n]??c?.[je]??c),o=i.toArray(o),l<s.length-1&&(o=o?.[d])}let a=i.toArray(o);return a.length==0&&r!==void 0?r:a}function et(t,e,r,n){t=t?.record||t;let s=e.split("."),o=t||{};for(let u=0;u<s.length-1;u++){let[d,c]=ln(s[u]);o[d]=i.toArray(o?.[d]||[]);let p;for(o?.[d]?.[n]?(o[d][n]=i.toArray(o?.[d]?.[n]),p=o[d][n]):o?.[d]?.[je]?(o[d][je]=i.toArray(o?.[d]?.[je]),p=o[d][je]):(o[d]=i.toArray(o?.[d])||[],p=o[d]);p.length-1<c;)p.push({"@type":"Thing"});o=p?.[c]}let[a,l]=ln(s[s.length-1]);return o[a]=i.toArray(r),t}function Gu(t,e,r){return Bs(t,e,r)==!0?t:vs(t,e,r)}function Bs(t,e,r){let n=dn(t,e);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function ln(t){if(t===void 0)return[void 0,0];let e=t.split("[")?.[0],r=(t.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[e,r]}function Ku(t,e){let n=i.getValues(t,"additionalProperty").find(o=>i.getValue(o,"propertyID")==e);return i.getValue(n,"value")}function Yu(t,e,r,n){let s=i.getValues(t,"additionalProperty");s=s.filter(a=>i.getValue(a,"propertyID")!=e);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:e,value:r,unitText:n};return s.push(o),t=i.setValues(t,"additionalProperty",s),t}function Xu(t){return i.getValues(t,"@value")}function Zu(t,e){return i.setValues(t,"@value",e)}function Qu(t){return i.getValue(t,"actionStatus")}function ed(t){return i.getValue(t,"actionStatus")}function td(t,e){return i.setValue(t,"actionStatus",e)}function rd(t){return i.getValue(t,"contentUrl")}function nd(t){return i.getValue(t,"contentUrl")}function id(t,e){return i.setValue(t,"contentUrl",e)}function sd(t){return i.getValue(t,"description")}function od(t){return i.getValue(t,"description")}function ad(t,e){return i.setValue(t,"description",e)}function ld(t){return i.getValue(t,"email")}function ud(t){return i.getValue(t,"email")}function dd(t,e){return i.setValue(t,"email",e)}function cd(t){return i.getValue(t,"item")}function fd(t){return i.getValue(t,"item")}function pd(t,e){return i.setValue(t,"item",e)}function gd(t){return i.list.getItems(t)}function hd(t){return i.list.getItems(t)}function md(t,e){return i.list.setItems(t,e)}function yd(t){return i.list.getItemListElement(t)}function bd(t){return i.list.getItemListElement(t)}function xd(t,e){return i.list.setItemListElement(t,e)}function Vd(t){return i.getValue(t,"name")}function wd(t){return i.getValue(t,"name")}function Ad(t,e){return i.setValue(t,"name",e)}function _d(t){return i.getValue(t,"numberOfItems")}function Sd(t){return i.getValue(t,"numberOfItems")}function Id(t,e){return i.setValue(t,"numberOfItems",e)}function $d(t){return i.getValue(t,"object")}function kd(t){return i.getValue(t,"object")}function Td(t,e){return O(t,"object",e)}function Nd(t){return i.getValues(t,"object")}function Pd(t){return i.getValues(t,"object")}function Dd(t,e){return et(t,"object",e)}function jd(t){return i.list.getPosition(t)}function Cd(t){return i.list.getPosition(t)}function Rd(t,e){return i.list.setPosition(t,e)}function Od(t){return i.getValues(t,"potentialAction")}function vd(t){return i.getValues(t,"potentialAction")}function Ud(t,e){return i.setValues(t,"potentialAction",e)}function Bd(t){return i.getValues(t,"potentialAction")}function Hd(t){return i.getValues(t,"potentialAction")}function Fd(t,e){return i.setValues(t,"potentialAction",e)}function Md(t){return i.getValue(t,"result")}function Ed(t){return i.getValue(t,"result")}function Ld(t,e){return O(t,"result",e)}function Wd(t){return i.getValues(t,"result")}function Jd(t){return i.getValues(t,"result")}function zd(t,e){return et(t,"result",e)}function qd(t){return i.getValue(t,"targetCollection")}function Gd(t){return i.getValue(t,"targetCollection")}function Kd(t,e){return i.setValue(t,"targetCollection",e)}function Yd(t){return i.getValues(t,"targetCollection")}function Xd(t){return i.getValues(t,"targetCollection")}function Zd(t,e){return i.setValues(t,"targetCollection",e)}function Qd(t){return i.getValue(t,"text")}function ec(t){return i.getValue(t,"text")}function tc(t,e){return i.setValue(t,"text",e)}function rc(t){return i.getValue(t,"url")}function nc(t){return i.getValue(t,"url")}function ic(t,e){return i.setValue(t,"url",e)}function sc(t){return i.getValue(t,"actionStatus")=="PotentialActionStatus"}function oc(t){return i.getValue(t,"actionStatus")=="ActiveActionStatus"}function ac(t){return i.getValue(t,"actionStatus")=="CompletedActionStatus"}function lc(t){return i.getValue(t,"actionStatus")=="FailedActionStatus"}function uc(t){return t=i.setValue(t,"actionStatus","PotentialActionStatus"),t=i.setValue(t,"startTime",void 0),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function dc(t){return t=i.setValue(t,"actionStatus","ActiveActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",void 0),t=i.setValue(t,"error",void 0),t=i.setValue(t,"result",void 0),t}function cc(t,e){return t=i.setValue(t,"actionStatus","CompletedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")||new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")||new Date().toISOString()),t=i.setValue(t,"error",void 0),i.isNotNull(e)&&(t=i.setValue(t,"result",e)),t}function fc(t,e){return t=i.setValue(t,"actionStatus","FailedActionStatus"),t=i.setValue(t,"startTime",i.getValue(t,"startTime")??new Date().toISOString()),t=i.setValue(t,"endTime",i.getValue(t,"endTime")??new Date().toISOString()),t=i.setValue(t,"error",String(e)),t=i.setValue(t,"result",void 0),t}function pc(t){if(i.record_type(t)=="ImageObject")return i.getValue(t,"contentUrl");let e=i.getValue(t,"image.contentUrl");return e=e??i.getValue(t,"image.url"),e=e??i.getValue(t,"image"),e=typeof e=="string"?e:"",e}function gc(t){let e=i.getValue(t,"image.name");return e=e??i.getValue(t,"name"),e=e??i.record_id(t),e=typeof e=="string"?e:"",e}var pn={};g(pn,{_utilGetId:()=>Tc,getDataType:()=>mc,isArray:()=>qs,isBoolean:()=>Hs,isDate:()=>Ls,isJsonld:()=>zs,isNotArray:()=>$c,isNotBoolean:()=>bc,isNotDate:()=>_c,isNotNull:()=>yc,isNotNumber:()=>Vc,isNotObject:()=>Sc,isNotString:()=>wc,isNull:()=>fn,isNumber:()=>Fs,isObject:()=>Js,isString:()=>Es,randomUUID:()=>hc,toArray:()=>Gs,toBoolean:()=>xc,toDate:()=>Ws,toNumber:()=>Ms,toObject:()=>Ic,toSingle:()=>kc,toString:()=>Ac});function hc(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let t=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let r=t()%16;return(e==="x"?r:r&3|8).toString(16)})}function mc(t){if(fn(t))return"Undefined";if(qs(t))return"Array";if(zs(t))return"Jsonld";let e=Ws(t);if(Ls(e))return"Date";let r=Ms(t);return Fs(r)?"Number":Js(t)?"Object":Es(t)?'String"':Hs(t)?"Boolean":"Undefined"}function fn(t){return f.isNull(t)}function yc(t){return f.isNotNull(t)}function Hs(t){return f.isBoolean(t)}function bc(t){return f.isNotBoolean(t)}function xc(t){return f.toBoolean(t)}function Fs(t){return f.isNumber(t)}function Vc(t){return f.isNotNumber(t)}function Ms(t){return f.toNumber(t)}function Es(t){return f.isString(t)}function wc(t){return f.isNotString(t)}function Ac(t){return f.toString(t)}function Ls(t){return f.isDate(t)}function _c(t){return f.isNotDate(t)}function Ws(t){return f.toDate(t)}function Js(t){return f.isObject(t)}function Sc(t){return f.isNotObject(t)}function Ic(t){return f.toObject(t)}function zs(t){return fn(t)?!1:!!(t?.["@id"]||t?.["@type"])}function qs(t){return f.isArray(t)}function $c(t){return f.isNotArray(t)}function Gs(t){return f.toArray(t)}function kc(t){return t=Gs(t),t?.[0]??void 0}function Tc(t){let e=t;if(e!==void 0&&e!==null)return i.isArray(e)&&e.length==1&&(e=e[0]),i.isString(e)?e:(e=i.record_id(e),e??void 0)}var gn={};g(gn,{concat:()=>Nc,dedupe:()=>Ks,deleteItem:()=>jc,diff:()=>Dc,filter:()=>vc,find:()=>Oc,includes:()=>Tt,insertItem:()=>Cc,intersection:()=>Pc,length:()=>Rc,search:()=>Xs,sort:()=>Ce,upsertItem:()=>Ys});function Ks(t,e=!0){if(t=i.toArray(t),t.length<2)return t;let r=[];for(let n of t)Tt(r,n)==!1&&(e==!0&&i.isValid(n)&&Xs(t,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=Ce(r),r}function Tt(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e)==!0)return!0;return!1}function Nc(t,e,r=!0){t=i.toArray(t),e=i.toArray(e);let n=t.concat(e);return n=n.filter(s=>s!=null),r==!0&&(n=Ks(n)),n=Ce(n),n}function Ce(t,e=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,t=i.toArray(t),t.length<2||(e==null?r==1?t.sort((n,s)=>i.lt(n,s)==!0?-1:1):t.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?t.sort((n,s)=>i.lt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1):t.sort((n,s)=>i.gt(i.getValue(n,e),i.getValue(s,e))==!0?-1:1)),t}function Pc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Tt(e,n)==!0&&r.push(n);return r=Ce(r),r}function Dc(t,e){t=i.toArray(t),e=i.toArray(e);let r=[];for(let n of t)Tt(e,n)==!1&&r.push(n);return r=Ce(r),r}function jc(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!1&&r.push(n);return r}function Ys(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)==!0?r.push(e):r.push(n);return r}function Cc(t,e){return Ys(t,e)}function Rc(t){return t=i.toArray(t),t.length}function Oc(t,e){t=i.toArray(t);for(let r of t)if(i.isSame(r,e))return r}function Xs(t,e){t=i.toArray(t);let r=[];for(let n of t)i.isSame(n,e)&&r.push(n);return r}function vc(t,e,r,n,s,o){return t=i.toArray(t),t.length==0||(i.isNotNull(e)&&(t=t.filter(a=>i.evaluate(a,e))),t=Ce(t,r,n),t.length==0)||(o=i.toNumber(o),i.isNumber(o)&&(t=t.slice(o)),s=i.toNumber(s),i.isNumber(s)&&t.length>=s&&(t=t.slice(0,s))),t}var hn={};g(hn,{exportToString:()=>Zs});function Zs(t){return Array.isArray(t)?Uc(t):i.record_type(t)=="ListItem"?Bc(t):i.record_type(t)=="ItemList"?Hc(t):i.record_type(t)=="Action"?Fc(t):i.getValue(t,"name")||i.getValue(t,"@id")}function Uc(t){let e=`Array (${t.length})
--------------------------
`;return t.forEach(r=>e+=Zs(r)+`
`),e}function Bc(t){return`${i.getValue(t,"position")} - ${i.getValue(t,"item.name")||i.getValue(t,"item.@id")}`}function Hc(t){let e=i.getValues(t,"itemListElement"),r=`ItemList${i.getValue(t,"name")||i.getValue(t,"@id")} (${e.length})
--------------------------
`;return e.forEach(n=>r+=toString(n)+`
`),r}function Fc(t){return`${i.getValue(t,"name")||i.getValue(t,"@id")} - ${i.getValue(t,"actionStatus")}`}var yn={};g(yn,{DatabaseHelper:()=>mn,testDB:()=>Mc});var mn=class{constructor(e){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(e){let r=i.toArray(e);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(e)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(e){let r=i.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(e){let r=i.toArray(e);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(e){let r=i.toArray(e);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Mc(){}var kn={};g(kn,{add:()=>zc,append:()=>tt,clean:()=>bn,decrementPositions:()=>In,duplicate:()=>Qc,ensurePositions:()=>Oe,ensurePreviousNextItem:()=>Dt,filter:()=>ef,find:()=>q,findByItem:()=>Vn,findByListItem:()=>xn,findByPosition:()=>so,getILE:()=>Jc,getItem:()=>it,getItemListElement:()=>I,getItems:()=>oo,getListItems:()=>tf,getMaxPosition:()=>nt,getMinPosition:()=>$n,getPosition:()=>T,gt:()=>io,incrementPositions:()=>Sn,insert:()=>C,insertAfter:()=>_n,insertBefore:()=>An,isItemList:()=>j,isListItem:()=>Nt,length:()=>Wc,lt:()=>no,move:()=>qc,moveAfter:()=>Xc,moveBefore:()=>Yc,moveDown:()=>Kc,moveUp:()=>Gc,prepend:()=>eo,remove:()=>ro,replace:()=>to,replaceItem:()=>rf,setItem:()=>lo,setItemListElement:()=>v,setItems:()=>ao,setPosition:()=>Pt,sort:()=>rt,toItemList:()=>Lc,toListItem:()=>Re,toString:()=>Ec,toStringItemList:()=>Qs,toStringListItem:()=>wn,upsert:()=>Zc});function Ec(t){return j(t)?Qs(t):wn(t)}function Qs(t){let e=[`ItemList ${i.getValue(t,"name")||i.record_id(t)}`],r=I(t);return e=e.concat(r.map(n=>wn(n))),e.join(`
`)}function wn(t){return`${T(t)} - ${i.getValue(t,"item.name")||i.record_id(t)}`}function j(t){return i.record_type(t)==="ItemList"}function Lc(t){if(j(t)==!1){let e=i.toArray(t);return t={"@type":"ItemList","@id":i.randomUUID(),itemListElement:e.map((r,n)=>Re(r,n))},bn(t)}return bn(t)}function bn(t){t=i.setValueIfNull(t,"@id",i.randomUUID());let e=I(t);return e=e.map(r=>Re(r)),e=Oe(e),e=Dt(e),t=v(t,e),t=i.setValue(t,"numberOfItems",e.length),t}function Wc(t){return I(t).length}function I(t){return i.getValues(t,"itemListElement")||[]}function Jc(t){return I(t)}function v(t,e){return e=i.toArray(e),e=e.map(n=>Re(n)),e=Oe(e),e=Dt(e),t=i.setValues(t,"itemListElement",e),i.getValue(t,"numberOfItems")!=e.length&&(t=i.setValue(t,"numberOfItems",e.length)),t}function C(t,e,r){if(t=Oe(t),i.isArray(e)){let s=r;for(let o of e)t=C(t,o,s),(s||s===0)&&(s+=1);return t}e=Re(e,r);let n=I(t);return n=n.filter(s=>i.record_id(s)!=i.record_id(e)),r=r??nt(n),r=r??n.length,r=r>=0?r:0,n=Sn(n,r),n=rt(n),n.push(e),t=v(t,n),t}function An(t,e,r){if(i.isArray(e)){for(let o of e)t=An(t,o,r);return t}let n=q(t,r);if(!n)return C(t,e);let s=T(n);return C(t,e,s)}function _n(t,e,r){if(i.isArray(e)){for(let o of e)t=_n(t,o,r);return t}let n=q(t,r);if(!n)return C(t,e);let s=T(n);return C(t,e,s+1)}function eo(t,e){if(i.isArray(e)){for(let r=e.length-1;r>=0;r--)t=eo(t,e?.[r]);return t}return C(t,e,0)}function tt(t,e){if(i.isArray(e)){for(let s of e)t=tt(t,s);return t}let r=I(t);if(r.length==0)return C(t,e,0);let n=nt(t);return n||n===0?C(t,e,n+1):C(t,e,r.length)}function zc(t,e){return tt(t,e)}function qc(t,e,r){return C(t,e,r)}function Gc(t,e){let r=q(t,e),n=T(r);return n==0?t:C(t,r,n-1)}function Kc(t,e){let r=q(t,e),n=T(r),s=nt(t);return n==s?t:C(t,r,n+1)}function Yc(t,e,r){return An(t,e,r)}function Xc(t,e,r){return _n(t,e,r)}function to(t,e,r){let n=I(t),s=[];for(let o of n){let a=it(o);i.isSame(a,r)&&(o=lo(o,e)),s.push(o)}return v(t,s)}function Zc(t,e){return q(t,e)?to(t,e,i.ref(e)):tt(t,e)}function Qc(t,e){if(Nt(e)){let r=q(e);e=it(r)}return tt(t,e)}function ro(t,e){if(i.isArray(e)){for(let o of e)t=ro(t,o);return t}t=Oe(t);let r=I(t),n=q(r,e),s=T(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=In(r,s),t=v(t,r),t}function ef(t,e){return j(t)&&(t=i.getItemListElement(t)),e&&(t=i.filter(t,e)),t}function Nt(t){return i.record_type(t)==="ListItem"}function Re(t,e){return Nt(t)==!1&&(t={"@type":"ListItem","@id":i.randomUUID(),item:t}),t=i.setIfNull(t,"@id",i.randomUUID()),(e||e===0)&&(t=i.setValue(t,"position",e)),t}function no(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function io(t,e){let r=T(t)??void 0,n=T(e)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function rt(t){if(j(t)){let r=t,n=I(r),s=rt(n);return v(r,s)}function e(r,n){return no(r,n)==!0?-1:io(r,n)==!0?1:0}return t.sort((r,n)=>e(r,n)),t}function q(t,e){if(!i.isNull(e))return i.isNumber(e)?so(t,e):Nt(e)?xn(t,e):i.record_type(e)?Vn(t,e):Vn(t,e)||xn(t,e)}function so(t,e){if(j(t)&&(t=I(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(T(r)==e)return r}}function xn(t,e){if(j(t)&&(t=I(t)),t=i.toArray(t),t.length!=0){for(let r of t)if(i.isSame(r,e))return r}}function Vn(t,e){if(j(t)&&(t=I(t)),t=i.toArray(t),t.length!=0)for(let r of t){let n=it(r);if(i.isSame(n,e))return r}}function T(t){let e=i.getValue(t,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function Pt(t,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,T(t)==e||(t=i.setValue(t,"position",e)),t}function Sn(t,e){if(e=e??0,j(t)){let n=t;t=I(n);let s=Sn(t,e);return v(n,s)}let r=[];for(let n of t){let s=T(n);s>=e&&(n=Pt(n,s+1)),r.push(n)}return r}function In(t,e){if(e=e??0,j(t)){let n=t;t=I(n);let s=In(t,e);return v(n,s)}let r=[];for(let n of t){let s=T(n);s!=0&&s>=e&&(n=Pt(n,s-1)),r.push(n)}return r}function Oe(t,e){if(j(t)){let s=t;t=I(s);let o=Oe(t);return v(s,o)}if(t=i.toArray(t),t.length==0)return t;t=rt(t);let r=e??$n(t)??0,n=[];for(let s of t)s=Pt(s,r),r+=1,n.push(s);return n}function $n(t){if(j(t)){let s=I(s);return $n(s)}t=i.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.min(...e)}function nt(t){if(j(t))return t=I(t),nt(t);t=i.toArray(t);let e=t.map(n=>T(n));return e=e.filter(n=>isNaN(n)==!1),e.length==0?void 0:Math.max(...e)}function Dt(t){if(j(t)){let r=t;t=I(r);let n=Dt(t);return v(r,n)}t=i.toArray(t),t=rt(t);let e=[];for(let r of t){let n=T(r),s=q(t,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let a=q(t,n+1),l=a?i.ref(a):void 0;r=i.setValue(r,"nextItem",l),e.push(r)}return e}function oo(t){if(j(t)){let n=I(t);return oo(n)}return t.map(r=>it(r))}function ao(t,e){if(j(t)){let n=t;t=I(n);let s=ao(t);return v(n,s)}return t=i.toArray(t),e=i.toArray(e),e=e.map(n=>Re(n)),t.concat(e)}function tf(t){return I(t)}function it(t){return i.getValue(t,"item")}function lo(t,e){return i.setValue(t,"item",e)}function rf(t,e,r){let n=I(t),s=i.toRecordID(e);for(let o=0;o<n.length;o++){let a=n[o];i.record_id(a)==s&&(n[o]=i.setItem(a,r))}return t=v(n),t}var Pn={};g(Pn,{appendAction:()=>go,deleteAction:()=>bo,duplicateAction:()=>yo,execute:()=>Tn,insertAction:()=>uo,insertAfterAction:()=>fo,insertBeforeAction:()=>co,moveDownAction:()=>mo,moveUpAction:()=>ho,prependAction:()=>po,replaceAction:()=>Nn,searchAction:()=>of});function Tn(t){if(i.isArray(t)){let n=new i.DB;n.set(t);let s=[];for(let o of t){o=n.get(o);let a=Tn(o);s.push(a),n.set(i.getResults(a))}return s}let e=i.getValues(t,"hasPart");if(e.length>0){let n=e.map(d=>i.list.toItemList(d)),s=new i.DB;s.set(n);let o=[],a,l=!1;for(let d of n){let c=i.list.getItemListElement(d);for(let p of c){let b=i.getItem(p);b=s.get(b),l==!0&&(b=i.setFailed(b,"Previous step failed"),d=i.list.replaceItem(d,p,a)),l==!1&&(a=Tn(b),l=i.isFailed(a),d=i.list.replaceItem(d,p,a),s.set(i.getResults(a)))}o.push(d)}t=i.setValues(t,"hasPart",o);let u=i.getResults(a);return t=i.setCompleted(t,u),t}let r=i.record_type(t);if(r=="UpsertAction")return sf(t);if(r=="ReplaceAction")return Nn(t);if(r=="UpdateAction")return nf(t);if(r=="InsertAction")return uo(t);if(r=="InsertBeforeAction")return co(t);if(r=="InsertAfterAction")return fo(t);if(r=="MoveUpAction")return ho(t);if(r=="MoveDownAction")return mo(t);if(r=="AppendAction")return go(t);if(r=="PrependAction")return po(t);if(r=="ReplaceAction")return Nn(t);if(r=="DuplicateAction")return yo(t);if(r=="DeleteAction")return bo(t)}function nf(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e){let o=i.getValue(s,"propertyID"),a=i.getValue(s,"value");n=i.setValues(n,o,a)}t=i.addValue(t,"result",n)}return r.length==0&&(t=i.addValues(t,"result",e)),t=i.setCompleted(t),t}function sf(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r)n=i.list.upsert(n,e),t=i.addValue(t,"result",n);return r.length==0&&(t=i.addValues(t,"result",e)),t=i.setCompleted(t),t}function uo(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let o of e)s=i.list.insert(s,o,r);t=i.addValue(t,"result",s)}return n.length==0&&(t=i.addValues(t,"result",e)),t=i.setCompleted(t),t}function co(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let o of e)s=i.list.insertBefore(s,o,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function fo(t){let e=i.getObjects(t),r=i.getValue(t,"toLocation"),n=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let s of n){for(let o of e)s=i.list.insertAfter(s,o,r);t=i.addValue(t,"result",s)}return t=i.setCompleted(t),t}function po(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.prepend(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function go(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.append(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function ho(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.moveUp(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function mo(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.moveDown(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function Nn(t){let e=i.targetCollection(t),r=i.getValue(t,"replacer"),n=i.getValue(t,"replacee");return n.length==0?(t=i.setFailed(t,"No replacee provided in action"),t):(e=i.list.replace(e,r,n),t=i.addValue(t,"result",e),t=i.setCompleted(t),t)}function yo(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.duplicate(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function bo(t){let e=i.getObjects(t),r=i.targetCollections(t);if(e.length==0)return t=i.setFailed(t,"No object provided in action"),t;for(let n of r){for(let s of e)n=i.list.remove(n,s);t=i.addValue(t,"result",n)}return t=i.setCompleted(t),t}function of(t){let e=i.getValues(t,"query"),r=i.targetCollections(t);for(let n of r){let s=i.list.getItemListElement(n);for(let a of e)s=i.list.filter(s,a);let o=i.list.toItemList(s);t=i.addValue(t,"result",o)}return t=i.setCompleted(t),t}var jn={};g(jn,{add:()=>af,addAppendAction:()=>Do,addDeleteAction:()=>ko,addDuplicateAction:()=>No,addMoveDownAction:()=>Io,addMoveUpAction:()=>_o,addPotentialActions:()=>Rt,addPropertyUpdateAction:()=>N,addSetActiveActionStatus:()=>Dn,addSetCompletedActionStatus:()=>jt,addSetFailedActionStatus:()=>Ct,addSetPotentialActionStatus:()=>wo,defineActionsForAction:()=>Vo,defineActionsForItemList:()=>xo,getAppendAction:()=>jo,getDeleteAction:()=>To,getDuplicateAction:()=>Po,getMoveDownAction:()=>$o,getMoveUpAction:()=>So,getPropertyUpdateAction:()=>Ao});function af(t,e){return Rt(t,e)}function Rt(t,e){if(!t||typeof t=="string")return t;if(i.isArray(t))return t.map(n=>Rt(n,e));if(i.isObject(t)==!1)return t;let r=i.record_type(t);if(!r)return t;r=="Action"&&(t=Vo(t,e)),r=="ItemList"&&(t=xo(t,e));for(let n of Object.keys(t))t[n]=Rt(t[n],e);return t}function xo(t,e){let r=i.getValues(t,"itemListElement"),n=i.getValues(t,"numberOfItems");for(let o=0;o<r.length;o++){let a=i.getPosition(r[o]);a>0&&(r[o]=_o(r[o],t,e)),a<n-1&&(r[o]=Io(r[o],t,e)),r[o]=ko(r[o],t,e),r[o]=No(r[o],t,e)}t=i.setValues(t,"itemListElement",r);let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return t=Do(t,s,e),t}function Vo(t,e){return i.getValue(t,"actionStatus")||(t=wo(t,e),t=Dn(t,e),t=jt(t,e),t=Ct(t,e)),i.isPotential(t)&&(t=Dn(t,e),t=jt(t,e),t=Ct(t,e)),i.isActive(t)&&(t=jt(t,e),t=Ct(t,e)),t}function wo(t,e){return t=N(t,e,"actionStatus","PotentialActionStatus"),t=N(t,e,"startTime",""),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function Dn(t,e){let r=i.getValue(t,"startTime");return t=N(t,e,"actionStatus","ActiveActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",""),t=N(t,e,"error",""),t}function jt(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","CompletedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function Ct(t,e){let r=i.getValue(t,"startTime"),n=i.getValue(t,"endTime");return t=N(t,e,"actionStatus","FailedActionStatus"),t=N(t,e,"startTime",r??new Date),t=N(t,e,"endTime",n??new Date),t=N(t,e,"error",""),t}function N(t,e,r,n,s){let o=Ao(t,e,r,n,s);return t=i.addValue(t,"potentialAction",o),t}function Ao(t,e,r,n,s){return s=s||`Set ${r} ${String(n).slice(0,50)}`,{"@type":"UpdateAction","@id":i.randomUUID(),name:s,object:{"@type":"PropertyValue","@id":i.randomUUID(),propertyID:r,value:n},targetCollection:i.ref(t),url:e}}function _o(t,e,r,n){let s=So(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function So(t,e,r,n){return n=n||"Move up",{"@type":"MoveUpAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Io(t,e,r,n){let s=$o(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function $o(t,e,r,n){return n=n||"Move down",{"@type":"MoveDownAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function ko(t,e,r,n){let s=To(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function To(t,e,r,n){return n=n||"Delete",{"@type":"DeleteAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function No(t,e,r,n){let s=Po(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function Po(t,e,r,n){return n=n||"Duplicate",{"@type":"DuplicateAction","@id":i.randomUUID(),name:n,object:i.ref(t),targetCollection:i.ref(e),url:r}}function Do(t,e,r,n){let s=jo(t,e,r,n);return t=i.addValue(t,"potentialAction",s),t}function jo(t,e,r,n){return n=n||"Duplicate",{"@type":"AppendAction","@id":i.randomUUID(),name:n,object:e,targetCollection:i.ref(t),url:r}}var i={dot:Ie,...Ir,...kr,...xt,...rn,...sn,...an,...cn,...pn,...gn,...hn,...yn,list:kn,...Pn,potentialActionHelpers:jn};var Cn={};g(Cn,{getContent:()=>uf,getIcon:()=>pf,getTitle1:()=>Ro,getTitle2:()=>lf,imageUrl:()=>cf,imageUrls:()=>ff,thumbnailUrl:()=>df});function Ro(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"givenName"),o=i.getValue(t,"familyName"),a=i.getValue(t,"name");if(r=="Person"){let l=[s,o];if(l=l.filter(u=>u!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=i.getValue(t,"item");return Ro(l)}return a||n||""}function lf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),o=i.getValue(t,"description");if(r=="Person")return s??"";if(r=="Action"){let a=i.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function uf(t){let e;if(!t)return"";let r=i.record_type(t),n=i.record_id(t),s=i.getValue(t,"email"),o;return o=i.getValue(t,"abstract"),o&&typeof o=="string"||(o=i.getValue(t,"text"),o&&typeof o=="string")||(o=i.getValue(t,"description"),o&&typeof o=="string")?o:""}function df(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(t,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")?s:""}function cf(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValue(t,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(t,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function ff(t){let e=i.record_type(t),r=i.record_id(t),n,s;return s=i.getValues(t,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(t,"image"),s&&typeof s=="string")||(s=i.getValue(t,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function pf(t){let e=i.record_type(t);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Co;case"action":return gf;case"person":return hf;case"organization":return mf;case"itemlist":return yf;case"listitem":return bf;case"postaladdress":return xf;case"product":return Vf;case"webapi":return wf;case"website":return Af;case"webpage":return _f;default:return Co}}var Co='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',gf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',hf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',mf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',yf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',bf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',xf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',Vf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',wf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Af='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',_f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var lm=globalThis.crypto.randomUUID;function vt(t,e){if(Array.isArray(t))return t.map(n=>vt(n));if(!t?.["@type"]||!t?.["@id"])return t;for(let n of Object.keys(t))t[n]=vt(t);let r=i.record_type(t);return t=Ot(t,"BookmarkAction","Bookmark",e),r=="ListItem"&&(t=Ot(t,"MoveUpAction","Move Up",e),t=Ot(t,"MoveDownAction","Move Down",e),t=Ot(t,"DeleteAction","Delete",e)),t}function Ot(t,e,r,n){let s={"@type":e,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(t)},url:n};return t=Sf(t,s),t}function Sf(t,e){return t?._record?(t._record.potentialAction=t._record?.potentialAction||[],t._record.potentialAction=Array.isArray(t._record.potentialAction)?t._record.potentialAction:[t._record.potentialAction],t._record.potentialAction.push(e),t):(t.potentialAction=t?.potentialAction||[],t.potentialAction=Array.isArray(t.potentialAction)?t.potentialAction:[t.potentialAction],t.potentialAction.push(e),t)}var Rn={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function Ut(t){let e=[];return e=e.concat(Rn?.[t]?.properties||[]),Rn?.[t]?.parent&&(e=e.concat(Ut(Rn[t].parent))),e}function Bt(t=0,e=0){let r="Action";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);s.hasPart.push(Bt(a,e-1))}return s}function On(t=0){let e="Thing";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function Ht(t=0,e=0,r=0){let n="CreativeWork";typeof t!="string"&&(t=n+"_"+String(t));let s="https://www.testrecord.com/"+t+"#"+n,o={"@type":n,"@id":s,name:t,headline:"Headline "+t,text:If(),image:_.image(),hasPart:[]};if(r==0&&(o.author=_.person(),o.datePublished=new Date().toISOString()),r<e)for(let a=0;a<3;a++){let l=t+"_"+String(a);o.hasPart.push(Ht(l,e,r+1))}return o}function If(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function st(t=0){let e="ImageObject";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,contentUrl:"https://placehold.co/600x400"}}var _m=globalThis.crypto.randomUUID;function vn(t=5){let e="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,n={"@type":e,"@id":r,itemListElement:[],numberOfItems:t},s;for(let o=0;o<t;o++){let a=$f(_.thing(o),o);s&&(s.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(a),s=a}return n}function $f(t,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:t,position:e,previousItem:"",nextItem:""}}function Un(t=0){let e="Offer";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,availability:"https://schema.org/InStock",itemOffered:_.product(t+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function Bn(t=0){let e="Organization";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,address:_.postalAddress(),url:`https://www.test_${t.replaceAll(" ","_")}.com`}}function Hn(t=0){let e="Person";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,givenName:"givenName_"+t,familyName:"familyName_"+t,email:t+"@testrecord.com",address:_.address()}}function Fn(t=0){let e="PostalAddress";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Mn(t=0){let e="Product";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e;return{"@type":e,"@id":r,name:t,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+t,sku:"sku_id_"+t,category:"Category 1"}}function En(t=0){let e="ProductGroup";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n={"@type":e,"@id":r,name:t,productGroupID:`A ${t} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let a=_.product(`variant ${s} ${o}`);a.size=s,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function Ft(t=0,e=0){let r="Thing";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,name:t,image:st(t),hasPart:[]};if(e>0)for(let o=0;o<3;o++){let a=t+"_"+String(o);s.hasPart.push(Ft(a,e-1))}return s}function Ln(t=0){let e="Message";Number.isNaN(t)||(t=e+String(t));let r="https://www.testrecord.com/"+t+"#"+e,n=new Date;return{"@type":e,"@id":r,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(t)} - this is a test message no ${String(t)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(t)} This is a test mesage. This message is used for testing purposes only.`}}function Wn(t=0,e=5){let r="Conversation";Number.isNaN(t)||(t=r+String(t));let n="https://www.testrecord.com/"+t+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<e;o++){let a=t+"_"+String(o),l=_.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let u=new Date;u.setDate(u.getDate()-e+o),l.dateSent=u,l.dateReceived=u,s.hasPart.push(l)}return s}var _={action:Bt,article:Ht,address:On,conversation:Wn,image:st,itemList:vn,message:Ln,offer:Un,organization:Bn,person:Hn,postalAddress:Fn,product:Mn,productGroup:En,thing:Ft,Action:Bt,Article:Ht,Address:On,Conversation:Wn,Image:st,ItemList:vn,Message:Ln,Offer:Un,Organization:Bn,Person:Hn,PostalAddress:Fn,Product:Mn,ProductGroup:En,Thing:Ft};var Mt={};g(Mt,{transformHelpers:()=>m});var zn={};g(zn,{jsonToMarkdown:()=>Jn});function Jn(t,e=1){let r;try{r=typeof t=="string"?JSON.parse(t):t}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(e-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${a+1}:**
`,n+=Jn(o,e+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${s}* **${o}:**
`,n+=Jn(a,e+1)):n+=`${s}* **${o}:** ${a}
`}):n+=`${s}* ${r}
`;return n}var Gn={};g(Gn,{jsonToYaml:()=>ot,yamlToJson:()=>kf});function ot(t,e=0){let r=" ".repeat(e),n="";if(t==null)return`null
`;if(typeof t!="object")return typeof t=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(t)?`"${t.replace(/"/g,'\\"')}"
`:`${t}
`:`${t}
`;if(Array.isArray(t))return t.length===0?`[]
`:(t.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=ot(o,e+2).trimStart();n+=a}else n+=ot(o,0)}),n);let s=Object.keys(t);return s.length===0?`{}
`:(s.forEach(o=>{let a=t[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+ot(a,e+2):n+=" "+ot(a,0)}),n)}function kf(t){let e=t.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of e){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),a=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let u=n[n.length-1],d=a.substring(1).trim();if(d.includes(":")){let[c,...p]=d.split(":"),b=c.trim(),S=p.join(":").trim(),L=qn(S),de={[b]:L};u.value.push(de),n.push({indent:o+2,value:de,type:"object",lastKey:b})}else u.value.push(qn(d))}else if(a.includes(":")){let[u,...d]=a.split(":"),c=u.trim(),p=d.join(":").trim();l.lastKey=c,p===""?(l.value[c]={},n.push({indent:o,value:l.value[c],type:"object",lastKey:c})):l.value[c]=qn(p)}}return r}function qn(t){return t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:!isNaN(t)&&t!==""?Number(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}var Oo={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var vo="DesignToken",Uo={css:{get:Df},get:Kn,set:Bo,getValue:Nf,setValue:Pf,sampleRecord:Ho};function Kn(t){if(!t)return;let e=i.getAdditionalProperty(t,vo);return e=e||{},e}function Bo(t,e){if(t)return e=e||{},t=i.setAdditionalProperty(t,vo,e),t}function Nf(t,e){if(!t||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let r=Kn(t),n=Me(r,e);return Me(n,"$value")}function Pf(t,e,r){if(!t||!e||typeof e!="string")return t;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=Kn(),s=Ho(),o=Me(s,e);return o.$value=r,n=bt(n,e,o),t=Bo(t,n),t}function Df(t,e="dt"){let r=[];function n(a,l=[]){for(let[u,d]of Object.entries(a)){if(d==null)continue;let c=[...l,u];if(typeof d=="object"&&"value"in d){let p=`--${c.map(S=>S.toLowerCase()).join("-")}`,b=s(d.value);r.push(`  ${p}: ${b};`)}else if(typeof d=="object"&&!Array.isArray(d))n(d,c);else{let p=`--${c.map(S=>S.toLowerCase()).join("-")}`,b=s(d);r.push(`  ${p}: ${b};`)}}}function s(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(t,e?[e]:[]),`:root {
${r.join(`
`)}
}`}function Ho(){return Oo}var m={markdown:zn,yaml:Gn,designToken:Uo};var Lt=class{constructor(e){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return Yn(this.record)}toJSON(){return this.record}toMD(){return m.markdown.jsonToMarkdown(this.record)}toYaml(){return m.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,r){return this.setValues(e,r)}getValue(e){return i.getValue(this._record,e)}setValue(e,r){return this.#t(),this.#e(i.setValue(this._record,e,r))}getValues(e){return i.getValues(this._record,e)}setValues(e,r){return this.#t(),this.#e(i.setValues(this._record,e,r))}addValue(e,r){return this.#t(),this.#e(i.addValue(this._record,e,r))}addValues(e,r){return this.#t(),this.#e(i.addValues(this._record,e,r))}_setValueIfNotNull(e,r){i.isNotNull(r)&&this.setValue(e,r)}_setValueIfString(e,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(e,r)}_setValueIfNumber(e,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(e,r)}_setValueIfRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)==e&&this.setValue(r,n)}_setValueIfNotRecordType(e,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=e&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=Q(Et(this._record),this.baseUrl)),i.simplify(Et(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let r=i.record_type(e);return r&&r==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=i.clone(Et(e)),this._record=e,Object.keys(this._record).forEach(r=>this._record[r]=se(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(Et(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return Ut(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let r=this.getValues(e);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(e,r=void 0){return this.addListener(e,r,!1)}addListenerNested(e,r=void 0){return this.addListener(e,r,!0)}addEventListener(e,r=void 0,n=!1){return this.addListener(e,r,n)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:e,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(a){console.log("Callback failed: ",o,String(a),s)}}static toString(e){return Yn(e)}static toMD(e){return m.markdown.jsonToMarkdown(e)}static toYaml(e){return m.yaml.jsonToYaml(e)}static fromYaml(e){let r=this.name;return new V[r](m.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return se(e)}static example(e=0,r=5){let n=this.name;return new V[n](_[n](e,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return Ut(e)}static getValue(e,r){return i.getValue(e,r)}static setValue(e,r,n){return i.setValue(e,r,se(n))}static getValues(e,r){return i.getValues(e,r)}static setValues(e,r,n){return i.setValues(e,r,se(n))}static addValue(e,r,n){return i.addValue(e,r,se(n))}static addValues(e,r,n){return i.addValues(e,r,se(n))}static flatten(e){return i.flatten(e)}static addPotentialActions(e){return vt(e)}static addAdditionalProperty(e,r,n){return jf(e,"additionalProperty",r,n)}};function Et(t){function e(n){if(Array.isArray(n))return n.map(s=>e(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return e(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=e(n?.[o]);return s}return n}let r=e(t);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function se(t){if(Array.isArray(t))return t.map(e=>se(e));if(t?._isThingClass!=!0){let e=i.record_type(t);if(e){let r=V?.[e]||V.Thing,n=new r;n.record=t,t=n}}if(t?._isThingClass==!0)for(let e of Object.keys(t._record))t._record[e]=se(t._record?.[e]);return t}function Yn(t){if(Array.isArray(t)){let o=t.map(a=>Yn(a));return o=o.join(`
`),o}let e=i.getValue(t,"@type"),r=i.getValue(t,"@id"),n=i.getValue(t,"name"),s=`${e||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function jf(t,e,r,n){let s=new V.PropertyValue;return s.propertyID=r,s.value=n,t=i.addValues(t,e,s.record),t}var w=class extends Lt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=f.url.clean(value),e}set cleanUrl(e){url=f.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=Q(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=e);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=e,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(e){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==e)&&(r=r.filter(s=>s?.propertyID!=e),this.setValues("additionalProperty",r))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(s=>s?.propertyID==e)?.value}};var he=class extends w{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let r of i.toArray(e))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(e){this.record=i.list.setItemListElement(this.record,e)}get items(){return i.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=i.list.insert(this.record,e,0)}append(e){this.record=i.list.append(this.record,e)}add(e){this.record=i.list.append(this.record,e)}insert(e,r){this.record=i.list.insert(this.record,e,r)}delete(e){this.record=i.list.remove(this.record,e)}replace(e,r){this.record=i.list.replace(this.record,e,r)}move(e,r){this.record=i.list.move(this.record,e,r)}moveUp(e){this.record=i.list.moveUp(this.record,e)}moveDown(e){this.record=i.list.moveDown(this.record,e)}upsert(e){this.record=i.list.upsert(this.record,e)}static clean(e){return i.list.clean(e)}static length(e){return i.list.length(e)}static getItem(e,r){return i.list.getItem(e,r)}static prepend(e,r){return i.list.insert(e,r,0)}static append(e,r){return i.list.append(e,r)}static add(e,r){return i.list.insert(e,r,getLength(e))}static insert(e,r,n){return i.list.insert(e,r,n)}static delete(e,r){return i.list.remove(e,r)}static replace(e,r,n){return i.list.replace(e,r,n)}static move(e,r,n){return i.list.move(e,r,n)}static moveUp(e,r){return i.list.moveUp(e,r)}static moveDown(e,r){return i.list.moveDown(e,r)}static moveBefore(e,r,n){return i.list.moveBefore(e,r,n)}static moveAfter(e,r,n){return i.list.moveAfter(e,r,n)}static upsert(e,r){return i.list.upsert(e,r)}static duplicate(e,r){return duplicateItem(e,r)}static search(e,r,n,s,o,a){return search(e,r,n,s,o,a)}};var R=class extends w{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Fo(this.record,e)}static test(e,r){return Fo(e,r)}};function Fo(t,e){let r={"@type":"Action",name:"Validate PPS",object:t,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(n=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!t&&t!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(e.multipleValues==!1&&Array.isArray(t))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(e.valueMinLength&&String(t).length<e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(e.valueMaxLength&&String(t).length>e.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.minValue&&t<e.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(e.maxValue&&t>e.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(e.valuePattern){let n="hello",o=new RegExp(e.valuePattern,"gi");if(t.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var at=class extends w{constructor(e,r){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(e){this.record=i.setCompleted(this.record,e)}setFailed(e){this.record=i.setFailed(this.record,e)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,r){this.record=Wo(this.record,e,r)}addMaxValue(e,r){this.record=Jo(this.record,e,r)}addMinLength(e,r){this.record=zo(this.record,e,r)}addMaxLength(e,r){this.record=qo(this.record,e,r)}addDefaultValue(e,r){this.record=Go(this.record,e,r)}addValueRequired(e,r){this.record=Ko(this.record,e,r)}addValuePattern(e,r){this.record=Mo(this.record,e,r)}addMultipleValues(e,r){this.record=Eo(this.record,e,r)}addStepValue(e,r){this.record=Lo(this.record,e,r)}testConditions(){return Xn(this.record)}getInputconditions(){return B(this.record)}addInputCondition(e,r){return this.addValues(e+"-input",r)}getOutputConditions(){return Cf(this.record)}addOutputCondition(e,r){return this.addValues(e+"-output",r)}test(){return Xn(this.record)}static setPotential(e){return i.setPotential(e)}static setActive(e){return i.setActive(e)}static setCompleted(e,r){return i.setCompleted(e,r)}static setFailed(e,r){return i.setFailed(e,r)}static isPotential(e){return i.isPotential(e)}static isActive(e){return i.isActive(e)}static isCompleted(e){return i.isCompleted(e)}static isFailed(e){return i.isFailed(e)}static addMinValue(e,r,n){return Wo(e,r,n)}static addMaxValue(e,r,n){return Jo(e,r,n)}static addMinLength(e,r,n){return zo(e,r,n)}static addMaxLength(e,r,n){return qo(e,r,n)}static addDefaultValue(e,r,n){return Go(e,r,n)}static addValueRequired(e,r,n){return Ko(e,r,n)}static addValuePattern(e,r,n){return Mo(e,r,n)}static addMultipleValues(e,r,n){return Eo(e,r,n)}static addStepValue(e,r,n){return Lo(e,r,n)}static test(e){return Xn(e)}};function B(t,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:t?.[n]}));return r}function ee(t,e,r){return e.endsWith("-input")==!1&&(e=e+"-input"),t[e]=r,t}function Cf(t,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let n=t?.[e];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n of Object.keys(t))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:t?.[n]}));return r}function Mo(t,e,r){let n=B(t,e)||new R;return n.valuePattern=r,t=ee(t,e,n),t}function Eo(t,e,r){let n=B(t,e)||new R;return n.multipleValues=r,t=ee(t,e,n),t}function Lo(t,e,r){let n=B(t,e)||new R;return n.stepValue=r,t=ee(t,e,n),t}function Wo(t,e,r){let n=B(t,e)||new R;return n.minValue=r,t=ee(t,e,n),t}function Jo(t,e,r){let n=B(t,e)||new R;return n.maxValue=r,t=ee(n.record,e,r),t}function zo(t,e,r){let n=B(t,e)||new R;return n.valueMinLength=r,t=ee(t,e,n),t}function qo(t,e,r){let n=B(t,e)||new R;return n.valueMaxLength=r,t=ee(t,e,n),t}function Go(t,e,r){let n=B(t,e)||new R;return n.defaultValue=r,t=ee(t,e,n),t}function Ko(t,e,r){let n=B(t,e)||new R;return n.valueRequired=r,t=ee(t,e,n),t}function Xn(t){let e=B(t);for(let r of e)if(R.test(r,t?.[r.propertyID])==!1)return!1;return!0}var G=class extends at{constructor(e,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues("targetCollection")}set targetCollection(e){return this.setValues("targetCollection",e)}get toLocation(){return this.getValues("toLocation")}set toLocation(e){return this.setValues("toLocation",e)}},Wt=class extends G{constructor(e,r){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Jt=class extends G{constructor(e,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},zt=class extends G{constructor(e,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues("replacer")}set replacer(e){return this.setValues("replacer",e)}get replacee(){return this.getValues("replacee")}set replacee(e){return this.setValues("replacee",e)}},qt=class extends G{constructor(e,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Gt=class extends G{constructor(e,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}},Kt=class extends G{constructor(e,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",r)}};var Yt=class extends w{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Rf(this.record)}get(e){return m.designToken.getValue(this.record,e)}set(e,r){return m.designToken.setValue(this.record,e,r)}get token(){return m.designToken.get(this.record)}set token(e){this.record=m.designToken.set(this.record,e)}get primary(){return m.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=m.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return m.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=m.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return m.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=m.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return m.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=m.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return m.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=m.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return m.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=m.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return m.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=m.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new Xt(this,"typography.heading-lg")}get body(){return new Xt(this,"typography.body-md")}get spacingSm(){return m.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return m.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return m.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return m.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return m.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return m.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return m.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return m.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return m.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return m.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new Zn(this,"shadow.elevation-md")}sample(){return m.designToken.getSampleRecord()}},Xt=class{constructor(e,r){this.base=e,this.basePath=A(r)}get fontFamily(){return m.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get fontWeight(){return m.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get fontSize(){return m.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get lineHeight(){return m.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get letterSpacing(){return m.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}get family(){return m.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get weight(){return m.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get size(){return m.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get height(){return m.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get spacing(){return m.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}},Zn=class{constructor(e,r){this.base=e,this.basePath=A(r)}get color(){return m.designToken.getValue(record,A(this.basePath,"color"))}set color(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"color"),e)}get offsetX(){return m.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"offsetX"),e)}get offsetY(){return m.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"offsetY"),e)}get blur(){return m.designToken.getValue(record,A(this.basePath,"blur"))}set blur(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"blur"),e)}get spread(){return m.designToken.getValue(record,A(this.basePath,"spread"))}set spread(e){this.base.record=m.designToken.setValue(record,A(this.basePath,"spread"),e)}};function A(t,e,r){let n=[t,e,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Rf(t){return`${i.record_type(t)} for ${i.getValue(t,url)}
    
    `}var U=class extends w{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var H=class extends U{constructor(e,r,n,s,o,a){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=a)}toString(){return ei(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",ve(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",ve(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",ve(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",ve(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",ve(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return Xo(this.record)}set gmail(e){this.record=Yo(e)}get outlook(){return Qo(this.record)}set outlook(e){this.record=Zo(e)}static toString(e){return ei(e)}static fromGmail(e){return Yo(e)}static toGmail(e){return Xo(e)}static fromOutlook(e){return Zo(e)}static toOutlook(e){return Qo(e)}static lt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(e,r){e=e?.record||e,r=r?.record||r;let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(e){return e.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),e}};function ei(t){if(!t)return"";if(Array.isArray(t)&&t.length>1)return t.map(d=>ei(d)).join(`
`);Array.isArray(t)&&t.length==1&&(t=t[0]);let e=i.getValue(t,"sender"),r=e?.email||e?.name||"";r=Qn(r,20);let s=i.getValues(t,"recipient").map(d=>d?.email||d?.name||"");s=Qn(s,25);let o=i.getValue(t,"headline")||"";o.length>20&&(o=Qn(o,30));let a=i.getValue(t,"dateSent")||i.getValue(t,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${s} | ${o} | ${l}`}function Qn(t,e=100){if(!t)return"";if(Array.isArray(t)&&t.length>1){let r=t.join(", ");if(r.length>e){let n=`... [${t.length}]`;r=r.slice(0,e-n.length)+n}return r}return Array.isArray(t)&&t.length==0?"":(Array.isArray(t)&&t.length==1&&(t=t[0]),typeof t=="string"&&t.length>e?`${t.slice(0,e-3)}...`:t)}function ve(t){return t?Array.isArray(t)?t.map(e=>ve(e)):typeof t=="string"?t.includes("@")?{"@type":"ContactPoint",email:t}:{"@type":"Person",name:t}:t:[]}function Yo(t){let e=new H;return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function Xo(t){let e={};return e.sender=t.sender,e.recipient=t.recipient,e.subject=t.subject,e.text=t.text,e.dateSent=t.dateSent,e.dateReceived=t.dateReceived,e}function Zo(t){let e=new H;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=t.sender,e.recipient=t.toRecipients.emailAddress,e.subject=t.subject,e.text=t.text,e.dateSent=t.sentDateTime,e.dateReceived=t.receivedDateTime,e}function Qo(t){let e={};return e.sender=t.sender,e.toRecipients=t.recipient,e.subject=t.subject,e.text=t.text,e.sentDateTime=t.dateSent,e.receivedDateTime=t.dateReceived,e}var Qt=class extends U{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Of(this.record)}get messages(){let e=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return e=H.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ea(this.record)}add(e,r,n,s,o,a){this.record=Zt(this.record,e,r,n,s,o,a)}addMessage(e,r,n,s,o,a){this.record=Zt(this.record,e,r,n,s,o,a)}newMessage(e,r,n,s,o,a){let l=new H(e,r,n,s,o,a);this.messages=this.messages.push(l)}static getParticipants(e){return ea(e)}static newMessage(e,r,n,s,o,a,l){return Zt(e,r,n,s,o,a,l)}static addMessage(e,r,n,s,o,a,l){return Zt(e,r,n,s,o,a,l)}static getMessages(e){return lt(e)}static getFirstMessage(e){let r=lt(e);return r.length>0?r[0]:void 0}static getLastMessage(e){let r=lt(e);return r.length>0?r[r.length-1]:void 0}};function Of(t){let e=lt(t),r=`Conversation with ${e.length} messages:
`;return r+=H.toString(e),r}function Zt(t,e,r,n,s,o,a){let l=new H(e,r,n,s,o,a);return t=i.addValues(t,"hasPart",l),t}function lt(t){let e=i.getValues(t,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return e=vf(e),e}function vf(t){return t.sort((e,r)=>{let n=new Date(i.getValue(e,"dateSent")||i.getValue(e,"dateCreated")||i.getValue(e,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),t}function ea(t){let e=lt(t),r=new Set;return e.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var Ue=class extends w{constructor(e,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Uf(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Uf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var er=class extends w{constructor(e,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),i.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=r)}toString(){return Bf(this.record)}setSource(e,r,n){this.sourceSystemID=e,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,r){return this.addDataFeedItem(e,r)}addDataFeedItem(e,r){let n=new Ue(e,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Bf(t){let e="";e+=`${t?.name||t?.["@id"]} `}var me=class extends w{constructor(e,r){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=r)}toString(){return ta(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=w.setValues(this._record,"additionalProperty",e)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(e){this._record=w.setValues(this._record,"areaServed",e)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=w.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=w.setValues(this._record,"inventoryLevel",e)}get price(){return i.getValue(this._record,"price")}set price(e){this._record=w.setValues(this._record,"price",e)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=w.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=w.setValues(this._record,"priceValidUntil",e)}get seller(){return i.getValue(this._record,"seller")}set seller(e){this._record=w.setValues(this._record,"seller",e)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(e){this._record=w.setValues(this._record,"validFrom",e)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(e){this._record=w.setValues(this._record,"validThrough",e)}};function ta(t){if(Array.isArray(t))return t.map(s=>ta(s));let e="",r=i.getValue(t,"itemOffered")||{},n=i.getValue(t,"price")||0;return n=Number(n),n=n.toFixed(2),e+=`${i.getValue(r,"name")||""} - ${i.getValue(t,"priceCurrency")||""} $${n}`,e}var ye=class extends U{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ti(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,r="CAD"){this._record=this.addValue("offers",new me(e,r))}static addOffer(e,r,n="CAD"){return Hf(e,r,n)}static toString(e){return ti(e)}};function ti(t){if(Array.isArray(t))return t.map(r=>ti(r));let e="";return e+=`${i.getValue(t,"name")||""}`,e}function Hf(t,e,r){let n=new me(e,r);return n.itemOffered={"@id":t?.["@id"]},t=i.addValue(t,"itemOffered",n.record),record}var tr=class extends ye{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ri(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Ff(this.record,e)}generateVariants(e){this.record=Mf(this.record,e)}static toString(e){return ri(e)}};function ri(t){if(Array.isArray(t))return t.map(n=>ri(n));let e="";e+=`${i.getValue(t,"name")||""}
`;let r=i.getValues(t,"hasVariant");for(let n of r)e+=" - "+ye.toString(n)+`
`;return e}function Ff(t,e){return t=i.addValues(t,"hasVariant",e),t}function Mf(t,e){if(Array.isArray(e)){let o={};for(let a of e)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);e=o}let r=Ef(e),n=Object.keys(r[0]);t=i.addValues(t,"variesBy",n);let s=w.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(t));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":t?.["@id"]};let l=[];for(let d of Object.keys(o))l.push(o?.[d]),s.includes(d)?a=i.setValue(a,d,o[d]):a=w.addAdditionalProperty(a,d,o[d]);let u=w.getValue(a,"name")+" "+l.join(" ");a=w.setValue(a,"name",u),t=w.addValue(t,"hasVariant",a)}return t}function Ef(t){return Object.keys(t).reduce((r,n)=>{let s=t[n],o=[];for(let a of r)for(let l of s)o.push({...a,[n]:l});return o},[{}])}var rr=class extends w{constructor(e,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",r)}toString(){return ra(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return i.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return i.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return i.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return i.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return i.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function ra(t){if(Array.isArray(t))return t.map(r=>ra(r));let e="";return e+=`${i.getValue(t,"propertyID")||""}: ${i.getValue(t,"value")||""} ${i.getValue(t,"unitText")||""}`,e}var be=class extends U{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),i.record_type(e)=="WebSite"){this.website=e;let r=e.record||e;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new he(n)),n.add({"@type":"WebPage",url:e,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=ut(this.record,"WPHeader"),K(this.record,"WPHeader")}set WPHeader(e){this.record=Y(this.record,"WPHeader",e)}get WPFooter(){return this.record=ut(this.record,"WPFooter"),K(this.record,"WPFooter")}set WPFooter(e){this.record=Y(this.record,"WPFooter",e)}get WPSideBar(){return this.record=ut(this.record,"WPSideBar"),K(this.record,"WPSideBar")}set WPSideBar(e){this.record=Y(this.record,"WPSideBar",e)}get Table(){return K(this.record,"Table")}set Table(e){this.record=Y(this.record,"Table",e)}addHeaderLink(e,r){this.record=na(this.record,e,r)}addFooterLink(e,r){this.record=ia(this.record,e,r)}domain(){return sa(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Lf(e,this.url)}static getWPHeader(e){return K(e,"WPHeader")}static getWPFooter(e){return K(e,"WPFooter")}static getWPSideBar(e){return K(e,"WPSideBar")}static getTable(e){return K(e,"Table")}static setWPHeader(e,r){return Y(e,"WPHeader",r)}static setWPFooter(e,r){return Y(e,"WPFooter",r)}static setWPSideBar(e,r){return Y(e,"WPSideBar",r)}static setTable(e,r){return Y(e,"Table",r)}static addHeaderLink(e,r,n){return na(e,r,n)}static addFooterLink(e,r,n){return ia(e,r,n)}static getDomain(e){return sa(i.getValue(e,"url")||e)}};function ut(t,e){let n=i.getValues(t,"hasPart").find(s=>i.getValue(s,"@type")==e);return n||(n={"@type":e,hasPart:[]},t=i.addValue(t,"hasPart",n)),t}function K(t,e){return i.getValues(t,"hasPart").find(s=>i.record_type(s)==e)}function Y(t,e,r){let n=i.getValues(t,"hasPart");return n=n.filter(s=>i.record_type(s)!=e),n.push(r),t=i.setValues(t,"hasPart",n),t}function na(t,e,r){t=ut(t,"WPHeader");let n={"@type":"WebPage",name:r,url:e},s=K(t,"WPHeader");return s=i.addValue(s,"hasPart",n),t=Y(t,"WPHeader",s),t}function ia(t,e,r){t=ut(t,"WPFooter");let n={"@type":"WebPage",name:r,url:e},s=K(t,"WPFooter");return s=i.addValue(s,"hasPart",n),t=Y(t,"WPFooter",s),t}function sa(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Lf(t,e){let r=new i.DB;r.post(t);let n=r.records,s=[];if(Wf(t)=="Product"){let l=n.filter(b=>i.record_type(b)=="Product")[0];s.push({replacee:i.record_id(l),replacer:e+"#product"}),l=i.setValue(l,"url",e);let u=i.getValues(l,"brand");u=u.map(b=>b?.["@type"]?{"@type":"brand",name:b}:b),l=i.setValues(l,"brand",u);let d=n.filter(b=>i.record_type(b)=="Offer");d=d.map(b=>i.setValues(b,"itemOffered",i.ref(l))),l=i.setValues(l,"offers",d);let c=n.filter(b=>i.record_type(b)=="Review");d=d.map(b=>i.setValues(b,"itemReviewed",i.ref(l))),l=i.setValues(l,"review",c);let p=n.filter(b=>i.record_type(b)=="AggregateRating");return p=p.map(b=>i.setValues(b,"itemReviewed",i.ref(l))),l=i.setValues(l,"aggregateRating",p),l=i.replaceIds(l,s),l}return t}function Wf(t){if(t=i.toArray(t),t=t.filter(r=>i.record_type(r)!="BreadcrumbList"),t.length==1&&i.record_type(t[0]!="WebPage"))return t[0]?.["@type"];if(t.length==1&&i.record_type(t[0]=="WebPage")&&(t=i.getValues(t,"mainEntity")),t.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var nr=class extends be{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,r){let n=new be(this);return n.url=e,n.name=r,n}domain(){return oa(this.url)}static getDomain(e){return oa(i.getValue(e,"url")||e)}};function oa(t){try{let e=new Url(t).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var ir=class extends w{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var V={get:w.toThing,toThing:w.toThing,Action:at,AddAction:Wt,AppendAction:Gt,BrandDesign:Yt,Conversation:Qt,CreativeWork:U,DataFeed:er,DataFeedItem:Ue,DeleteAction:Jt,InsertAction:qt,ItemList:he,Message:H,Offer:me,Product:ye,ProductGroup:tr,PropertyValue:rr,Thing:w,PrependAction:Kt,ReplaceAction:zt,UpdateAction:G,WebAPI:ir,WebPage:be,WebSite:nr,format:Cn,toThing:Jf};function Jf(t){let e=i.record_type(t);return V?.[e]?new V[e](t):new V.Thing(t)}var oi={};g(oi,{RdfDB:()=>sr,default:()=>zf,fromRDF:()=>si,toRDF:()=>ii});var px=globalThis.crypto.randomUUID,sr=class{constructor(){this._db=[]}getRdf(e){return this._db.filter(r=>!e||r.subject==e)}getRecord(e){return si(this.getRdf(e))}post(e,r){e=ii(e,r),e=Array.isArray(e)?e:[e],e.forEach(n=>this._db.push(n))}[Symbol.iterator](){return this._db[Symbol.iterator]()}},zf={RdfDB:sr,toRDF:ii,fromRDF:si};function ii(t,e){function r(s,o,a,l){let u=[];if(Array.isArray(a))return u=u.concat(a.map((c,p)=>r(s,o,c,l))),u.flat();if(a?.subject&&a?.predicate&&a?.object)return[a];if(l&&typeof l=="object"&&(typeof a!="object"&&(a={"@value":a}),a["@annotation"]={...a?.["@annotation"]||{},...l}),o=="@annotation")return[];if(a?.["@value"]){let c=a?.["@annotation"];if(c&&typeof c=="object"){c["@id"]=c?.["@id"]||"_:"+globalThis.crypto.randomUUID();let p=Object.keys(c).map(b=>r(c["@id"],b,c[b]));u=u.concat(p),c=c?.["@id"]}return u=u.concat([{subject:s,predicate:o,object:a?.["@value"],label:l}]),u}if(typeof a=="object"){a["@id"]=a?.["@id"]||"_:"+globalThis.crypto.randomUUID();let c={subject:s,predicate:o,object:a?.["@id"],label:l};return u=u.concat([c]),u=u.concat(Object.keys(a).map(p=>r(a?.["@id"],p,a?.[p],l))),u.flat()}let d={subject:s,predicate:o,object:a,label:l};return u.concat([d])}let n=[];if(e){let s=ni(e);s.length>1&&(n=n.concat(s.slice(1))),e=s?.[0]}return n=n.concat(r(null,null,t,e)),n=n.flat(),n=n.filter(s=>s.subject),n}function si(t){t=Array.isArray(t)?t:[t];let e=new Map;for(let n of t)e.set(n?.subject,{"@id":n?.subject});for(let n of t){if(n.predicate=="@id")continue;let s=e.get(n.subject),o=n?.object,a=e.get(n?.object);a&&(o={"@id":a?.["@id"]}),n.label&&(o?.["@id"]||(o={"@value":o}),o["@annotation"]=n?.label),s[n.predicate]=s?.[n.predicate]||[],s[n.predicate]=Array.isArray(s[n.predicate])?s[n.predicate]:[s[n.predicate]],s[n.predicate].push(o)}let r=[...e.values()];return r.forEach(n=>n["@id"]=Array.isArray(n?.["@id"])?n?.["@id"][0]:n?.["@id"]),r}function ni(t){let e=[];if(Array.isArray(t))return e=t.map(r=>ni(r)),e.flat();if(typeof t=="object"&&Object.keys(t).length>0)for(let r of Object.keys(t)){let n=t?.[r];n=Array.isArray(n)?n:[n];let s=[];for(let o of n)typeof o=="object"?(o["@id"]=o?.["@id"]||"_:"+globalThis.crypto.randomUUID(),s.push({"@id":o?.["@id"]}),e=e.concat(ni(o))):s.push(o);t[r]=s,e=[t].concat(e)}return e}import xe from"fs/promises";var te={load:la,save:aa,exists:or,list:da,delete:ua,file:{load:la,save:aa,delete:ua,exists:or},dir:{list:da,exists:or,delete:Gf},getFilePath:dt};async function or(t,e){t=dt(t,e);try{return await xe.access(t),!0}catch{return!1}}async function qf(t){try{await xe.mkdir(t,{recursive:!0})}catch(e){throw e}}async function aa(t,e,r){await qf(t),t=dt(t,e);try{await xe.writeFile(t,r,"utf8")}catch(n){throw n}}async function la(t,e){t=dt(t,e);try{return await xe.readFile(t,"utf8")}catch(r){if(String(r).includes("no such file or directory"))return[];throw console.error(`Error loading file: ${r.message}`),r}}async function ua(t,e){t=dt(t,e);try{await xe.rm(t,{force:!0})}catch(r){console.error(`Error deleting file: ${r.message}`)}}async function Gf(t){try{await xe.rm(t,{recursive:!0,force:!0})}catch(e){console.error(`Error deleting directory: ${e.message}`)}}async function da(t){if(await or(t)==!1)return[];try{return await xe.readdir(t)||[]}catch(r){console.error(`Error listing files: ${r.message}`)}}function dt(t,e){t=t??"",e=e??"";let r=[t,e];return r=r.filter(n=>n&&n!=""),r=r.join("/"),r=r.replaceAll("//","/"),r}var li={};g(li,{Button:()=>Yf,DropdownMenu:()=>ca,MenuItem:()=>Xf,escapeHtml:()=>oe});function oe(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Yf({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[e]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function ai(t,e=""){return!t||typeof t!="object"?"":Object.entries(t).map(([r,n])=>{let s=e?`${e}[${r}]`:r;return typeof n=="object"&&n!==null?ai(n,s):`<input type="hidden" name="${oe(s)}" value="${oe(String(n))}">`}).join("")}function ca({label:t="",items:e=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},u={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},c=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),p=t?`<span class="mr-2">${oe(t)}</span>${c}`:`${c}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let b=e.map(S=>{if(S.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let L=ai(S.object),de=S.disabled?"disabled":"";return`
        <form method="POST" action="${oe(S.url||"")}" class="m-0 p-0">
          ${L}
          <button
            type="submit"
            ${de}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${oe(S.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${a}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${u[n]||u.ghost} ${d[s]||d.icon}"
      >
        ${p}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${b}
      </div>
    </details>
  `.trim()}function Xf(t){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=ai(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${oe(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${oe(h.getName(item)||"")}
          </button>
        </form>`}var re={};g(re,{components:()=>y});var ui={};g(ui,{Accordion:()=>Zf});function Zf({items:t=[],className:e=""}){let r=t.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${r}</div>`.trim()}var di={};g(di,{Alert:()=>Qf});function Qf({title:t,description:e="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${t}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var ci={};g(ci,{Article:()=>ep,ArticleBody:()=>op,ArticleCard:()=>lp,ArticleCardBody:()=>dp,ArticleCardFooter:()=>cp,ArticleCardHeader:()=>up,ArticleCardMedia:()=>pp,ArticleCardTitle:()=>fp,ArticleCategory:()=>rp,ArticleFooter:()=>ap,ArticleHeader:()=>tp,ArticleMedia:()=>sp,ArticleSubTitle:()=>ip,ArticleTitle:()=>np});function ep(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${e||""}"
    >
    
        ${t||""}
    
    </article>
    
    `}function tp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <header 
        class="${e||""}"
    >
    
        ${t||""}
    
    </header>
    
    `}function rp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${e||""}"
     >
        ${t||""}
     
     </p>

    `}function np(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${e||""}"
        >
            ${t||""}
        </h1>

    `}function ip(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${e||""}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${t||""}</span>

        </div>

    `}function sp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${e||""}"
        >

            ${t||""}
        
        </div>

    `}function op(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`

        <div 
            class="prose prose-neutral mt-8 max-w-none ${e||""}"
        >
            ${t||""}
        </div>
    `}function ap(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
        <div 
            class="${e||""}"
        >
            
            ${t||""}

        </div>

    
    `}function lp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}

    </article>
    
    `}function up(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${e||""}"
        >

            ${t||""}
            
    </article>
    
    `}function dp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <div class="p-5 ${e||""}">


            ${t||""}
            
    </div>
    
    `}function cp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${e||""}">
          ${t||""}
    </div>
    
    `}function fp(t,e){return t=t||"",t=t.trim(),!t||t==""?"":`
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${e||""}">


            ${t||""}
            
    </h3>
    
    `}function pp(t,e){return`
    
    
    <div 
        class="aspect-video bg-neutral-100 ${e||""}"
    >


            ${t||""}
            
    </div>
    
    `}var fi={};g(fi,{Badge:()=>gp,Badges:()=>hp});function gp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${e|""}">
        ${t}
      </div>
    `.trim()}function hp(t,e,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var pi={};g(pi,{Breadcrumb:()=>mp,BreadcrumbEllipsis:()=>bp,BreadcrumbItem:()=>ga,BreadcrumbLink:()=>ha,BreadcrumbList:()=>pa,BreadcrumbMain:()=>fa,BreadcrumbPage:()=>yp,BreadcrumbSeparator:()=>ma});function mp({urls:t,titles:e,links:r}){let n=new V.ItemList(r);if(t)for(let a=0;a<t.length;a++){let l=e?.[a]||t[a].split("/")?.[t[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:t[a],name:l})}let s=n.items;return console.log("items",s),fa({children:pa({children:s.map(a=>ga({children:ha({href:a?.url,children:a?.name})})).join(ma())})})}function fa({children:t="",className:e="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${r}>
        ${t}
      </nav>
    `.trim()}function pa({children:t="",className:e="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${r}>
        ${t}
      </ol>
    `.trim()}function ga({children:t="",className:e="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${r}>
        ${t}
      </li>
    `.trim()}function ha({children:t="",href:e="#",className:r="",attrs:n=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${t}
      </a>
    `.trim()}function yp({children:t="",className:e="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${r}>
        ${t}
      </span>
    `.trim()}function ma({children:t,className:e="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${r}>
        ${t!==void 0?t:n}
      </li>
    `.trim()}function bp({className:t="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${t}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var gi={};g(gi,{Button:()=>xp});function xp({text:t,variant:e="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.primary} ${a[r]||a.default} ${n}" ${s}>
        ${t}
      </button>
    `.trim()}var hi={};g(hi,{Card:()=>Vp,CardBody:()=>_p,CardContent:()=>kp,CardDescription:()=>$p,CardFooter:()=>Sp,CardHeader:()=>wp,CardMain:()=>Ap,CardMedia:()=>Tp,CardTitle:()=>Ip});function Vp(t,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${t||""}

    </div>
  `}function wp(t,e){return!t||(e=e||"",t.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${t||""}</header>

  `}function Ap(t,e){return!t||t.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${t||""}</section>

  `}function _p(t,e){return!t||t.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${e||""} ">${t||""}</div>

  `}function Sp(t,e){return!t||t.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${e||""} ">${t||""}</footer>
  `}function Ip(t,e){return!t||t.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${t||""}  
    </h3>
     `}function $p(t,e){return!t||t.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${t||""}</p>
  `}function kp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${t||""}</div>
  `}function Tp(t,e){return!t||t.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${t||""}
    </div>
  `}var mi={};g(mi,{Dialog:()=>Np});function Np({id:t,title:e,description:r="",content:n,footer:s="",className:o=""}){return`
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
    `.trim()}var yi={};g(yi,{Footer:()=>Pp});function Pp({brand:t="Acme Inc",copyright:e="",columns:r=[],className:n=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
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
    `.trim()}var bi={};g(bi,{Header:()=>Dp});function Dp({brand:t="",navItems:e=[],actions:r="",className:n=""}){let s=e.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
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
              ${s}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${r}
          </div>
        </div>
      </header>
    `.trim()}var xi={};g(xi,{H1:()=>jp,H2:()=>Cp,H3:()=>Rp,H4:()=>Op,H5:()=>vp,H6:()=>Up,Heading:()=>Ve,P:()=>Bp,Text:()=>Hp});function jp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"1",options:e,record_id:r,propertyID:n,className:s})}function Cp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"2",options:e,record_id:r,propertyID:n,className:s})}function Rp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"3",options:e,record_id:r,propertyID:n,className:s})}function Op(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"4",options:e,record_id:r,propertyID:n,className:s})}function vp(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"5",options:e,record_id:r,propertyID:n,className:s})}function Up(t,{options:e,record_id:r,propertyID:n,className:s}){return Ve({title:t,level:"6",options:e,record_id:r,propertyID:n,className:s})}function Ve({title:t,level:e,options:r,record_id:n,propertyID:s,className:o}){return e=String(e||1),`
    <h${e} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${t}</h${e}>
    
    `}function Bp(t,e,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}function Hp(t,e,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${o??""} "
      >${t||""}</p>
    
    `}var Vi={};g(Vi,{Input:()=>F,InputCheckbox:()=>Fp,InputDate:()=>Mp,InputDateTime:()=>Lp,InputEmail:()=>Wp,InputNumber:()=>Ep,InputPassword:()=>Jp,InputTel:()=>zp,InputText:()=>qp,InputTime:()=>Gp,InputUrl:()=>Kp});function F({label:t="",type:e="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:a=""}){let l=s?`id="${s}"`:"";return`
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
          ${a||""}
        />
      </div>
    `.trim()}function Fp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"checkbox",label:t,value:e,propertyID:r,id:n,className:s})}function Mp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"date",label:t,value:e,propertyID:r,id:n,className:s})}function Ep({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"number",label:t,value:e,propertyID:r,id:n,className:s})}function Lp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"datetime-local",label:t,value:e,propertyID:r,id:n,className:s})}function Wp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"email",label:t,value:e,propertyID:r,id:n,className:s})}function Jp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"password",label:t,value:e,propertyID:r,id:n,className:s})}function zp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"tel",label:t,value:e,propertyID:r,id:n,className:s})}function qp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"text",label:t,value:e,propertyID:r,id:n,className:s})}function Gp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"time",label:t,value:e,propertyID:r,id:n,className:s})}function Kp({label:t="",value:e="",propertyID:r="",id:n="",className:s=""}){return F({type:"url",label:t,value:e,propertyID:r,id:n,className:s})}var wi={};g(wi,{Pagination:()=>Yp,PaginationComponent:()=>ba,PaginationContent:()=>xa,PaginationEllipsis:()=>Aa,PaginationItem:()=>ct,PaginationLink:()=>ar,PaginationNext:()=>wa,PaginationPrevious:()=>Va,buildPaginationUrl:()=>ya});function ya(t,e,r){try{let n=new URL(t,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(e)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(t).split("?")[0]}?limit=${e}&offset=${r}`}}function ba({children:t="",className:e="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${r}
    >
      ${t}
    </nav>
  `.trim()}function xa({children:t="",className:e="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${r}>
      ${t}
    </ul>
  `.trim()}function ct({children:t="",className:e="",attrs:r=""}={}){return`
    <li class="${e}" ${r}>
      ${t}
    </li>
  `.trim()}function ar({href:t="#",isActive:e=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",u=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${t}"
      aria-current="${e?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${u} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Va({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return ar({href:t,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function wa({href:t="#",disabled:e=!1,className:r="",attrs:n=""}={}){return ar({href:t,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${r}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Aa({className:t="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${t}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Yp({url:t,total:e,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:a=""}={}){let l=Math.ceil(e/r)||1,u=Math.floor(n/r)+1,d=W=>{let J=(W-1)*r;return ya(t,r,J)},c=(W,J)=>{let fe=J-W+1;return Array.from({length:fe},(mt,yt)=>W+yt)},p=s+5,b=[];if(p>=l)b=c(1,l);else{let W=Math.max(u-s,1),J=Math.min(u+s,l),fe=W>2,mt=J<l-2,yt=1,ll=l;if(!fe&&mt){let Fe=3+2*s;b=[...c(1,Fe),"ellipsis",l]}else if(fe&&!mt){let Fe=3+2*s,ss=c(l-Fe+1,l);b=[yt,"ellipsis",...ss]}else if(fe&&mt){let Fe=c(W,J);b=[yt,"ellipsis",...Fe,"ellipsis",ll]}}let S=[],L=u>1,de=L?d(u-1):"#";S.push(ct({children:Va({href:de,disabled:!L})})),b.forEach(W=>{if(W==="ellipsis")S.push(ct({children:Aa()}));else{let J=Number(W),fe=J===u;S.push(ct({children:ar({href:d(J),isActive:fe,children:String(J)})}))}});let ce=u<l,Vr=ce?d(u+1):"#";S.push(ct({children:wa({href:Vr,disabled:!ce})}));let wr=ba({className:o,attrs:a,children:xa({children:S.join("")})});return wr=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${wr}
    </div>`,wr}var Ai={};g(Ai,{Section:()=>Xp,SectionHeader:()=>Zp});function Xp({children:t="",variant:e="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},u=a[e]||a.default,d=l[r]!==void 0?l[r]:l.default,c=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${s}".trim()>${t}</div>`:t;return`
    <section class="w-full bg-background text-foreground ${u} ${n}" ${o}>
      ${c}
    </section>
  `.trim()}function Zp({title:t="",description:e="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${t?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${t}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var _i={};g(_i,{Table:()=>eg,TableBody:()=>Ia,TableCell:()=>X,TableCellCenter:()=>sg,TableCellLeft:()=>ig,TableCellLink:()=>ag,TableCellNumber:()=>og,TableCellRight:()=>ka,TableCellText:()=>lg,TableColumnHeader:()=>Sa,TableColumnHeaderCenter:()=>ng,TableColumnHeaderLeft:()=>tg,TableColumnHeaderRight:()=>rg,TableFooter:()=>Ta,TableHeader:()=>_a,TableRow:()=>$a,getTable:()=>Qp});function Qp({headers:t=[],rows:e=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${_a(t.map(n=>Sa(n)))}
      
        ${Ia(e.map(n=>$a(n.map(s=>X(s)))))}
        
        ${Ta()}

      </table>

    </div>
  
  
  `}function eg(t,e,r,n,s=""){return Array.isArray(t)&&(t=t.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${e||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${t}

      </table>

    </div>
  
  
  `}function _a(t,e){return t?(Array.isArray(t)&&(t=t.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${t}
        </tr>
  </thead>
  `):""}function Sa(t,e){return t||(t=""),`
    <td class="p-4 align-middle pr-0 ${t?.table?.className||t?.className||""}">
      ${t?.htmlValue??t?.value??t}
    </td>
  `}function tg(t,e){return X(t,e)}function rg(t,e){return e=e+" text-right ",X(t,e)}function ng(t,e){return e=e+" text-center ",X(t,e)}function Ia(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${t}</tbody>
  
  `}function $a(t,e,r,n){return!t||(Array.isArray(t)&&(t=t.join(" ")),t.trim().length==0)?"":`
  
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
  `}function ig(t,e,r,n){return X(t,e,r,n)}function ka(t,e,r,n){return n=n+" text-right ",X(t,e,r,n)}function sg(t,e,r,n){return n=n+" text-center ",X(t,e,r,n)}function og(t,e,r,n,s,o){return t=i.toNumber(t),t=f.number.format(t,e),ka(`
      
    ${t||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function ag(t,e,r,n,s,o){return X(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${e||""}" href="${t||""}" target="_blank" rel="noopener noreferrer">${e||t||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function lg(t,e,r,n){let s=`
    <div 
      data-id="${e||""}" 
      data-property-id="${r||""}"  
      title="${t}" 
      class=" line-clamp-4"
    >${t??""}</div>
  `;return X(s)}function Ta(t,e,r,n){return t?`
    
      <tfoot>
      
        ${t}

      </tfoot>
    
    `:""}var Si={};g(Si,{Webpage:()=>ug});function ug({title:t,headContent:e,header:r,footer:n,content:s,breadcrumb:o}){return`
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
  `.trim()}var Ii={};g(Ii,{CardGrid:()=>dg});function dg({nbOfColumns:t,content:e}){let r=String(t??2),n=String(t??3),s=String(t??4);return t=String(t??1),`
    <div class="grid grid-cols-${t} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${e}
    </div>
  `}var $i={};g($i,{JsonEditor:()=>fg});function Na({children:t="",variant:e="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[e]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${t}
    </button>
  `.trim()}function cg({title:t="",description:e="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
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
  `.trim()}function fg({id:t=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let a=t.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),u=JSON.stringify(n,null,2),d=`
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
            ${Na({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
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
        ${Na({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
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
  `.trim();return cg({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:c,className:s,attrs:o})}var ki={};g(ki,{Modal:()=>pg,ModalBody:()=>hg,ModalTrigger:()=>gg});function pg(t,e){return`
     <div 
      class="w-full transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${e||""}" 
      
    >
        ${t||""}
    </div>
    
    
    `}function gg(t,e,r){return`
    
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
    
    `}function hg(t,e,r){return`
    
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
    
    
    `}var Ti={};g(Ti,{DropdownMenu:()=>yg,DropdownMenuIcon:()=>bg,Menu:()=>mg,MenuItemLink:()=>xg,MenuItemPost:()=>Vg,MenuItemSeparator:()=>wg});function mg(t){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${t}
      </div>
   

    `}function yg(t,e,r){return`
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

    `}function bg(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function xg(t,e,r,n){return`
    
        <a href="${r||""}">${t||""}${e}</a>

    `}function Vg(t,e,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function wg(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Ni={};g(Ni,{Kanban:()=>Ag,KanbanBody:()=>Sg,KanbanCard:()=>Dg,KanbanCardBody:()=>Cg,KanbanCardFooter:()=>Rg,KanbanCardHeader:()=>jg,KanbanColumn:()=>kg,KanbanColumnBody:()=>Ng,KanbanColumnFooter:()=>Pg,KanbanColumnHeader:()=>Tg,KanbanFooter:()=>Ig,KanbanHeader:()=>_g,KanbanTitle:()=>$g});function Ag(t){return`
    
    <div class="kr-kanban bg-white p-6">
    ${t}
  </div>
    `}function _g(t){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${t}
    </header>`}function Sg(t){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${t}
    </div>`}function Ig(t){return`<footer class="kr-kanban-footer">
    ${t}
    </footer>`}function $g(t,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${t}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function kg(t){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${t}
        </section>

    
    `}function Tg(t){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${t}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function Ng(t){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${t}
          </div>

    `}function Pg(t){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${t}
      </footer>
    `}function Dg(t){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${t}
        </article>
    `}function jg(t){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${t}</span>
   
    `}function Cg(t){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${t}</p>
        
    `}function Rg(t){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${t}
          </div>
    `}var Pi={};g(Pi,{StarRating:()=>Og,StarRatingEmpty:()=>Bg,StarRatingFull:()=>vg,StarRatingHalf:()=>Ug});function Og(t,e){return`
    
    <div class="flex items-center space-x-1 ${e||""}">
        ${t||""}
    </div>
    
    `}function vg(t,e){return`
    
         <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>


    `}function Ug(t,e){return`
    
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


    `}function Bg(t,e){return`
    
         <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>


    `}var y={...ui,...di,...ci,...fi,...pi,...gi,...hi,...Ii,...mi,...li,...yi,...bi,...Ni,...Ti,...ki,...Vi,...$i,...wi,...Ai,...Pi,..._i,...xi,...Si};var Oi={};g(Oi,{Card:()=>zg,Cards:()=>qg});var Ri={};g(Ri,{Media:()=>we,MediaImage:()=>Ca,MediaVideo:()=>ja});var ur={};g(ur,{fixedLength:()=>lr,textCenter:()=>Di});function lr(t,e=void 0,r=0){let n=t;if(i.isArray(t)){let o=t.length;o==0&&(t=""),o==1&&(t=t[0]),o>1&&(t=`(${t.length})`)}let s=f.getDataType(t);if(s=="Undefined"&&(t=""),s=="Jsonld"&&(t=t?.["@id"]),s=="Number"&&(t=f.toNumber(t),t=t.toFixed(r),t=t.padStart(e," ")),s=="Date"&&(t=f.toDate(t),t=new Intl.DateTimeFormat("en-CA").format(t)),t=t===void 0?"":t,e!=null&&t.length>e){let o="",a=Math.round(e/3),l=e-a-3;o+=t.slice(0,a),o+="...",o+=t.slice(-l),t=o}return e!=null&&(t=t.padEnd(e," ")),t}function Di(t,e,r=" "){t=t??"",t=String(t);let n=Math.floor((e-t.length)/2);return t=t.padStart(t.length+n,r).padEnd(e,r),t}var Ci={};g(Ci,{toTextRecord:()=>Hg,toTextTable:()=>Eg});function Hg(t,e=80){let r=Fg(t,e),n=Mg(t),s="";s+=Pa(r),s+=`
`,n.length>0?s+=n.map(o=>Da(o,r)).join(""):s+=`(no records)
`}function Fg(t,e=80){let n=ji(t).map(a=>(a||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:e-Math.max(s,11)}]}function Mg(t){let e=ji(t),r=[];for(let n of e){let s={"@type":"PropertyValue",propertyID:n,value:f.getValues(t,n)};r.push(s)}return r}function Eg(t,e,r=!0,n=80){e=Lg(t,e,r),t=Wg(t,e,r);let s="";if(s+=Pa(e),s+=`
`,t.length>0){let o=t.map(a=>Da(a,e));s+=o.join("")}else s+=Di("(no records to display.)",n);return s}function Lg(t,e,r=!0){e=i.toArray(e),(!e||e.length==0)&&(e=ji(t).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(e.map(s=>s?.propertyID||s?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let n of e)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return e}function Wg(t,e,r=!0){if(t=i.toArray(t),!t||t.length==0)return[];if(t=JSON.parse(JSON.stringify(t)),r==!0)for(let[n,s]of t.entries())s.position=s?.position??n;return t}function Pa(t){let e="",r=[];for(let s of t){let o=`${lr(s.title,s.width,s.rounding)}`;r.push(o)}e+=r.join(" "),e+=`
`;let n=[];for(let s of t){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return e+=n.join(" "),e+=`
`,e}function Da(t,e){let r="",n=[];for(let s of e){let o=i.getValues(t,s.propertyID),a=`${lr(o,s.width,s.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function ji(t){t=i.toArray(t);let e=t.map(r=>Object.keys(r));return e=e.flat(),e=[...new Set(e)],e=Jg(e),e}function Jg(t){t=i.toArray(t);let e=["position","@type","@id"];return t.sort((r,n)=>{if(r==n)return 0;for(let s of e){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),t}var ft={...ur,...Ci};function we(t,e){if(!i.getValue(t,"contentUrl"))return"";let n="";return i.record_type(t)=="VideoObject"?ja(t,e):Ca(t,e)}function ja(t,e){let r=i.getValue(t,"contentUrl");return r?`
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${""||""}">
                    <source src="${r}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `:""}function Ca(t,e){let r=i.getValue(t,"contentUrl");return r?y.Modal(y.ImageModal(r)):""}function ae({website:t,webpage:e,title:r,headContent:n,content:s,options:o}){e=new V.WebPage(e),t=new V.WebSite(t);let a={};a.title=r,a.title=a.title||i.getValue(e,"title"),a.title=a.title||i.getValue(e,"name"),a.title=a.title||i.getValue(t,"title"),a.title=a.title||i.getValue(t,"name"),a.headContent=n,a.breadcrumb=y.Breadcrumb({links:i.getValue(e,"breadcrumb")});let l=i.getValue(t,"about.name")??i.getValue(t,"name")??i.getValue(e,"about.name")??i.webpage(t,"name"),u=e.WPHeader.hasPart||[],d=e.WPFooter.hasPart||[];return u=Array.isArray(u)?u:[u],d=Array.isArray(d)?d:[d],a.header=y.Header({brand:l,navItems:u}),a.footer=y.Footer({brand:l,navItems:d}),a.content=s,y.Webpage(a)}function Ra({website:t,webpage:e,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:p}){return o=o??"",o+=P.Cards({url:n,records:a,offset:d,limit:c,nbOfColumns:3,options:p}),ae({website:t,webpage:e,title:r,headContent:s,content:o,options:p})}function zg(t,e,r,n=!0){let s=V.format.getTitle1(t),o=V.format.getContent(t),a=i.getRecordUrl(t,e),l=n==!0?V.format.imageUrl(t):void 0;return y.Card({title:s,description:o,url:a,media:l,className:r})}function qg({url:t,records:e,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:a,includePagination:l,options:u,layoutClasses:d,className:c,attrs:p}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let b=new V.ItemList(e);b=b.record,b.numberOfItems=b?.numberOfItems??b.itemListElement.length,b=dr({record:b,options:u}),b.itemListElement=b.itemListElement.filter(ce=>i.getValue(ce,"position")>=r&&i.getValue(ce,"position")<r+n);let S="";for(let ce of i.getValues(b,"itemListElement")){let Vr=i.getValue(ce,"item");S+=Gg({url:t,item:Vr,options:u})}S=y.CardGrid({content:S,nbOfColumns:a});let L=y.Pagination({url:t,limit:n,offset:r,total:b.numberOfItems,options:u});return`

        <div class="${d} ${c}" ${p}>
        <div class="flex-1">
            ${S}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${L}
        </div>
        </div>

    `}function Gg({url:t,item:e,options:r}){let n=i.getImageUrl(e),s=i.getImageName(e),o=i.getValues(e,"keywords");o=o.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let a=y.Badges({text:o,variant:"secondary"}),l={title:i.getValue(e,"name"),url:i.getRecordUrl(e,r?.baseUrl),description:i.getValue(e,"description"),footer:a,image:i.getImageUrl(e),imageAlt:i.getImageName(e),media:we({record:e,options:r})};return y.Card(l)}var vi={};g(vi,{Input:()=>Yg});function Yg({record:t,propertyID:e,value:r}){return y.Input({value:r})}var Bi={};g(Bi,{Table:()=>Xg,TableBody:()=>va,TableCell:()=>Ba,TableHeader:()=>Oa,TableRow:()=>Ua,getDataType:()=>Ha,getHeadersFromProperties:()=>Ui,getPropertiesFromRecords:()=>Be});function Xg(t,e,r,n,s,o){let a=t;r=r||Be(a),n=n||Ui(r);let l=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),y.Table(Oa(a,r,n,l)+va(a,r,e,l))}function Oa(t,e,r,n){return e=e||Be(t),r=r||Ui(e),n=n||[],e=e||Be(t),y.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return y.TableColumnHeaderRight(s);default:return y.TableColumnHeader(s)}}).join(" "))}function va(t,e,r,n){e=e||Be(t),n=n||[];let s=i.getValues(new V.ItemList(t),"itemListElement");return y.TableBody(s.map(o=>Ua(o,e,r,n)).join(" "))}function Ua(t,e,r,n){return e=e||Be(t),n=n||[],y.TableRow(e.map((a,l)=>Ba(t,i.getValues(t,a),a,r,n,l)).join(" "),i.record_id(t),void 0,"kr-listitem")}function Ba(t,e,r,n,s,o){let a=e,l=r,u=t;if(a=i.isArray(a)&&a.length==0?"":a,a=i.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let d=f.url.getUrl(n||"","/"+a);return y.TableCellLink(d,a)}if((l||"").endsWith("@id")){let d=i.getRecordUrl(u,n);return y.TableCellLink(d,a)}switch(s?.[o]||Ha(a)){case"array":return y.TableCellCenter(`(${a.length})`);case"text":return y.TableCellText(a);case"number":return y.TableCellNumber(a,2);case"link":return y.TableCellLink(a,a);case"thumbnail":return y.TableCell(we({record:a}));case"position":return y.TableCellNumber(a,0);case"object":return y.TableCellLink(i.getRecordUrl(a,n),i.record_id(a));default:return y.TableCellText(a)}}function Be(t){let r=i.getValues(t,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function Ui(t){t=t||[];let e=t.map(r=>r.split(".")?.[1]||r);return e=e.map(r=>r=="position"?"No":r),e=e.map(r=>({htmlValue:r,table:{className:"capitalize"}})),e}function Ha(t){return t=i.isArray(t)&&t.length==0?void 0:t,t=i.isArray(t)&&t.length==1?t[0]:t,t?f.isNumber(t)?"number":f.isUrl(t)?"link":f.isDate(t)?"date":f.isArray(t)?"array":f.isObject(t)?"object":"text":"text"}var Hi={};g(Hi,{Record:()=>Zg});function Zg(t,e,r,n="",s="",o=!1,a=0,l={}){t=i.removeCircularRefs(t),r=r||Object.keys(t),l.baseUrl=e||l?.baseUrl;let u={rows:[]},d=Fa({record:t,baseUrl:e,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
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

    `}function Fa({record:t,properties:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){e=e||Object.keys(t);let l=e.filter(p=>p.startsWith("@")),u=e.filter(p=>!p.startsWith("@"));e=l.sort().concat(u.sort());let d={rows:[]};return y.Table(y.TableHeader(y.TableRow(y.TableCellRight("")+y.TableCellRight(P.DropdownMenu(i.getPotentialActions(t)))))+y.TableBody(e.map(p=>y.TableRow([y.TableCell(p+":"),y.TableCell(Ma({record:t,propertyID:p,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))].join(" "))).join(" ")))}function Qg({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(t,e),u=[];for(let d of l){let c=i.clone(t);c=i.setValue(c,e,d),u.push(Ma({record:c,propertyID:e,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${u.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Ma({record:t,propertyID:e,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(t,e);return i.isArray(l)&&l.length==1&&(l=l[0]),i.isArray(l)&&l.length==0?"":i.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(l,e,a?.baseUrl)}</summary>
      
                ${Qg({record:t,propertyID:e,className:r,attrs:n,expandAll:s,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(l,e,a?.baseUrl)}</summary>
      
            ${Fa({record:l,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":P.Value(l,e,a?.baseUrl)}var Fi={};g(Fi,{DropdownMenu:()=>th,Menu:()=>eh});function eh(t){return t=i.toArray(t),!t||t.length==0?"":y.DropdownMenu(y.DropdownMenuIcon(),t.map(e=>y.MenuItemPost(i.getImageUrl(e),i.getName(e),i.getUrl(e))).join(" "))}function th(t){if(t=i.toArray(t),!t||t.length==0)return"";let e=t.map(n=>y.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return y.DropdownMenu(y.DropdownMenuIcon(),e)}var Mi={};g(Mi,{Value:()=>rh,ValueArray:()=>Wa,ValueDateTime:()=>za,ValueDuration:()=>nh,ValueMonetaryAmount:()=>ih,ValueNumber:()=>qa,ValueRecordId:()=>Ea,ValueRecordType:()=>La,ValueText:()=>Ga,ValueThing:()=>Ka,ValueUrl:()=>Ja});function rh(t,e,r){return!t&&t!==0?"":i.isArray(t)?Wa(t,e,r):e=="@type"?La(t,e,r):e=="@id"?Ea(t,e,r):i.isObject(t)?Ka(t,e,r):i.isNumber(t)?qa(t,e,r):i.isDate(t)?za(t,e,r):f.isUrl(t)?Ja(t,e,r):Ga(t,e,r)}function Ea(t,e,r){let n=i.getRecordUrl({"@id":t},r),s=`<a title="${t}" href="${n}">${t}</a>`;return ne(s,e)}function La(t,e,r){let n=f.url.getUrl(r,t),s=`<a class="h-min" title="${t}" href="${n}">${t}</a>`;return ne(s,e)}function Wa(t,e,r){let n=t.length>0?`(${t.length})`:"";return ne(n,e)}function Ja(t,e,r){let n=`<a title="${t}" href="${t}" target="_blank" rel="noopener noreferrer">${t}</a>`;return ne(n,e)}function za(t,e,r){t=i.toDate(t);let n=f.date.format(t);return ne(n,e)}function nh(t,e,r){return f.duration.format(t)}function qa(t,e,r){let n=e=="position"?0:2;return t=i.toNumber(t),t=f.number.format(t,n),ne(t,e)}function Ga(t,e,r){return ne(t,e)}function Ka(t,e,r){let n=i.getRecordUrl(t,r),s=i.getName(t)||i.record_id(t);i.record_type(t)=="ListItem"&&(s=`ListItem ${i.getPosition(t)} - ${i.getValue(t,"item.name")||i.getValue(t,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return ne(o,e)}function ih(t,e,r){let n=f.toNumber(i.getValue(t,"value"));if(n===void 0)return n;let s=f.number.format(n,2),o=i.getValue(t,"currency");o=(o||"").toUpperCase();let a=o+" $"+s;return o=="USD"&&(a=o+" $"+s),o=="CAD"&&(a=o+" $"+s),o=="EUR"&&(a=o+" "+s+" \u20AC"),o=="GBP"&&(a=o+" "+s+" \xA3"),ne(a,e)}function ne(t,e){return`
      <span class="kr-value" data-property-id="${e}">${t}</span>
    `}var Ei={};g(Ei,{Kanban:()=>sh,KanbanCard:()=>Xa,KanbanColumn:()=>Ya});function sh(t,e){let r=i.getItems(t);return y.Kanban(y.KanbanHeader(y.KanbanTitle("Awesome Kanban","Fuck yeah"))+y.KanbanBody(propertyValues.map(n=>Ya(t,e,n)).join(" "))+y.KanbanFooter(""))}function Ya(t,e,r){let n=i.getItems(t);return n=n.filter(s=>i.getValue(s,e)==r),y.KanbanColumn(y.KanbanColumnHeader(r)+y.KanbanColumnBody(n.map(s=>Xa(s)).join(" "))+y.KanbanColumnFooter())}function Xa(t){return y.KanbanCard(y.KanbanCardHeader("xx")+y.KanbanCardBody(P.Value(i.getName(t),"name"))+y.KanbanCardFooter(P.Value(i.getActionStatus(t),"actionStatus")))}var P={...Oi,...vi,...Ri,...Hi,...Bi,...Fi,...Mi,...Ei};function dr({record:t,options:e}){if(i.isArray(t))return t.map(o=>dr({record:o,options:e}));let r=i.record_type(t);if(!r)return t;let n=f.url.getUrl(e.baseUrl,"/execute"),s=i.ref(t);for(let o of Object.keys(t?.record||t))t=i.setValues(t,o,dr({record:i.getValues(t,o),options:e}));return r=="Action"&&i.isPotential(t)&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(t=i.addValue(t,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),t=i.addValue(t,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),t}function Za({website:t,webpage:e,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:u,offset:d,limit:c,options:p}){return o=o??"",o+=P.Table({url:n,records:a,properties:l,headers:u,offset:d,limit:c,options:p}),ae({website:t,webpage:e,title:r,headContent:s,content:o,options:p})}function Qa({website:t,webpage:e,title:r,url:n,headContent:s,content:o,record:a,properties:l,headers:u,options:d}){return o=o??"",o+=P.Record({url:n,record:a,options:d}),ae({website:t,webpage:e,title:r,headContent:s,content:o,options:d})}var el={blankPage:ae,recordsPage:Za,recordPage:Qa,cardsPage:Ra};var tl={blocks:P,...el,components:re,...re};var Li={};g(Li,{getParsedRequest:()=>oh});function oh(t){let e={method:t.method.toLowerCase(),hostname:t.host,url:t.originalUrl,fullUrl:t.protocol+"://"+t.get("host")+t.originalUrl,offset:Number(t.query?.offset),limit:Number(t.query?.limit),orderBy:t.query?.orderBy,orderDirection:t.query?.orderDirection,record_id:t.params.record_id,data:t?.body};if(e.filter={...t.query},console.log("pp",e.filter),t.query?.filter)try{e.filter=JSON.parse(t.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete e.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete e.filter[n])),e}var rl={shadcn:tl,express:Li};var _e={};g(_e,{_getDate:()=>pt,compile:()=>fr,compileOverwrite:()=>il,datapointsToRecord:()=>Yi,dedupe:()=>Gi,eq:()=>ah,ge:()=>qi,getConfidence:()=>M,getDataFeedItem:()=>ch,getDatapoint:()=>Wi,getExecutionID:()=>dh,getModifiedDate:()=>E,gt:()=>He,isEqual:()=>gt,le:()=>zi,lt:()=>Ji,merge:()=>uh,recordToDatapoints:()=>Ki,sameObject:()=>nl,sameObjectAndProperty:()=>ie,sort:()=>cr,toString:()=>Ae});function Ae(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"PropertyID",p:"propertyID",w:10},{t:"Value",p:"value",w:25},{t:"Conf",p:"confidence",w:4,r:2},{t:"Date",p:"observationDate",w:10},{t:"DataFeed",p:"dataFeed",w:10},{t:"DataFeedItem",p:"dataFeedItem",w:10},{t:"Execution",p:"execution",w:25}];return i.isArray(t)?i.format.toTextTable(t,e):i.format.toTextRecord(t,e)}function gt(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r,n;return r=i.getValue(t,"value"),n=i.getValue(e,"value"),!(i.record_id(r)!=i.record_id(n)||r!=n||(r=i.getValue(t,"instrument"),n=i.getValue(e,"instrument"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"agent"),n=i.getValue(e,"agent"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"execution"),n=i.getValue(e,"execution"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeed"),n=i.getValue(e,"datafeed"),i.record_id(r)!=i.record_id(n))||(r=i.getValue(t,"datafeedItem"),n=i.getValue(e,"datafeedItem"),i.record_id(r)!=i.record_id(n)))}function nl(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"object"),n=i.getValue(e,"object");return i.record_id(r)==i.record_id(n)}function ie(t,e){t=t?.record??t,e=e?.record??e;let r=i.getValue(t,"propertyID"),n=i.getValue(e,"propertyID");return nl(t,e)&&r==n}function ah(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=M(t),n=M(e);if(r==null&&n!=null||r!=null&&n==null||r!=n)return!1;let s=E(t),o=E(e);return!(s==null&&o!=null||s!=null&&o==null||+s!=+o)}function Ji(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=M(t),n=M(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<n;let s=E(t),o=E(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s<+o:!1}function zi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=M(t),n=M(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r<=n;let s=E(t),o=E(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s<=+o:!0}function He(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=M(t),n=M(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>n;let s=E(t),o=E(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s>+o:!1}function qi(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e)==!1)return!1;let r=M(t),n=M(e);if(r==null&&n!=null||r!=null&&n==null)return!1;if(r!=n)return r>=n;let s=E(t),o=E(e);return s==null&&o!=null||s!=null&&o==null?!1:+s!=+o?+s>=+o:!0}function lh(t,e){if(t=t?.record??t,e=e?.record??e,ie(t,e))return He(t,e);let r=i.getValue(t,"object"),n=i.getValue(e,"object"),s=r?.["@id"]||"",o=n?.["@id"]||"",a=s.split("#")?.[1],l=o.split("#")?.[1];if(a!=l)return a<l?-1:1;if(s!=o)return r<n?-1:1;let u=i.getValue(t,"propertyID"),d=i.getValue(e,"propertyID");return u!=d?u<d?-1:1:0}function cr(t){return t.sort((e,r)=>(e=e?.record??e,r=r?.record??r,lh(e,r))),t}function uh(t,e){if(gt(t,e)==!1)throw new Error("The two datapoints are not the same, cannot merge.");return t}function Gi(t){t=i.toArray(t);let e=[];for(let r of t)e.find(s=>gt(r,s))||e.push(r);return e}function M(t){t=t?.record??t;let e=i.getValue(t,"confidence");for(e=Number(e),e=isNaN(e)?0:e;e>1;)e=e/100;return e=e.toFixed(2),e=Number(e),e}function dh(t){t=t?.record??t;let e=i.getValue(t,"execution");return i.record_id(e)}function E(t){t=t?.record??t;let e;return e=e||pt(t,"dataFeedItem.dateDeleted"),e=e||pt(t,"dataFeedItem.dateModified"),e=e||pt(t,"dataFeedItem.dateCreated"),e=e||pt(t,"observationDate"),e}function pt(t,e){let r=i.getValue(t,e);return f.toDate(r)}function Ki(t,e,r){function n(s,o,a,l,u){let d=[];if(i.isArray(a)){for(let c of a)d=d.concat(n(s,o,c,l,u));return d}if(a?.["@id"]){o&&d.push(Wi(s,o,{"@id":a?.["@id"]},l,u));let c={"@id":a?.["@id"]};for(let p of Object.keys(a))p!="@id"&&(d=d.concat(n(c,p,a[p],l,u)));return d}return[Wi(s,o,a,l,u)]}return r=r??i.randomUUID(),n(void 0,void 0,t,e,r)}function Yi(t){t=i.toArray(t),t=t.map(n=>n?.record??n);let e={};t=fr(t);for(let n of t){if(n?.operation=="DeleteAction")continue;let s=i.getValue(n,"object"),o=i.record_id(s),a=i.getValue(n,"propertyID"),l=i.getValue(n,"value");e[o]=e?.[o]||{"@id":o},e[o]=i.addValues(e[o],a,l)}e=Object.keys(e).map(n=>e[n]);let r=new i.DB;return r.set(e),e=r.search(),e=i.simplify(e),e}function Wi(t,e,r,n={},s=i.randomUUID()){return{"@type":"Datapoint","@id":i.randomUUID(),operation:n?.operation||"UpdateAction",object:t,propertyID:e,value:r,valueGroupID:s,dataFeed:n?.dataFeed,dataFeedItem:n?.dataFeedItem,agent:n?.agent,confidence:n?.confidence||n?.credibility||0,observationDate:n?.observationDate?new Date(n?.observationDate):new Date,execution:n?.execution}}function fr(t){let e=[...t];for(;e.length>0;){let r=e[0];t=t.filter(s=>!il(r,s)),e=e.slice(1);let n=t.map(s=>s?.["@id"]);e=e.filter(s=>n.includes(s?.["@id"]))}return t}function il(t,e){if(t=t?.record??t,e=e?.record??e,i.getValue(t,"operation")=="AddAction"||ie(t,e)==!1||i.getValue(t,"valueGroupID")==i.getValue(e,"valueGroupID"))return!1;if(i.getValue(t,"operation")=="DeleteAction"){let r=t?.value,n=e?.value;try{r=JSON.stringify(r)}catch{}try{n=JSON.stringify(r)}catch{}return r==n&&He(t,e)}return He(t,e)}function ch(t,e,r,n,s){return{"@type":"DataFeedItem","@id":"","item:":e,dateCreated:r,dateModified:n,dateDeleted:s}}var D=class{constructor(e,r){this._record={},this._baseRecordType=r,e?.record&&(this.record=e.record),e?.["@type"]&&(this.record=e),typeof e=="string"&&(this.record_id=e),r&&(this.record_type=r)}toString(){return`c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`}toJSON(){return this.record}init(){Object.keys(this._record).filter(e=>e!="@type").length<1||((!this._record?.["@id"]||(this._record?.["@id"]||"").startsWith("_:"))&&(this._record["@id"]=It.get(this._record)),this._record["@type"]=this._record?.["@type"]??this._baseRecordType)}get record(){let e={};Object.keys(this._record).forEach(r=>e[r]=this._record[r]?.record??this._record[r]);for(let r of Object.keys(e))(e[r]===null||e[r]===void 0)&&delete e[r];return e}set record(e){this._record={},e=e??{},Object.keys(e).forEach(r=>this._record[r]=e[r]?.record??e[r]),this.init()}getValue(e){this.init();let r=this._record?.[e];return r=i.toArray(r)?.[0],r}setValue(e,r){this._record[e]=r,this.init()}get record_type(){return this.getValue("@type")}set record_type(e){return this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get url(){return this.getValue("url")}set url(e){return this.setValue("url",e)}get email(){return this.getValue("email")}set email(e){return this.setValue("email",e)}};var le=class extends D{constructor(e,r,n,s,o,a,l){super({},"Metadata"),isNaN(Number(e))?this.record=e:(this.confidence=e??this.record_or_confidence,this.observationDate=r??this.observationDate,this.execution=n,this.dataFeed=s??this.dataFeed,this.dataFeedItem=o??this.dataFeedItem,this.agent=a??this.agent,this.instrument=l??this.instrument)}toString(){return Ae(this.record)}set(e,r,n,s,o,a,l){this.c=e,this.d=r,this.execution=n,this.dataFeed=s,this.dataFeedItem=o,this.agent=a,this.instrument=l}get dataFeed(){return new D(this.getValue("dataFeed"),"DataFeed")}set dataFeed(e){e=e?.record?e:new D(e,"DataFeed"),this.setValue("dataFeed",e)}get dataFeedItem(){return new D(this.getValue("dataFeedItem"),"DataFeedItem")}set dataFeedItem(e){e=e?.record?e:new D(e,"DataFeedItem"),this.setValue("dataFeedItem",e)}get agent(){return new D(this.getValue("agent"),"Person")}set agent(e){e=e?.record?e:new D(e,"Person"),this.setValue("agent",e)}get instrument(){return new D(this.getValue("instrument"),"WebAPI")}set instrument(e){e=e?.record?e:new D(e,"WebAPI"),this.setValue("instrument",e)}get execution(){return new D(this.getValue("execution"),"Action")}set execution(e){e=e?.record?e:new D(e,"Action"),this.setValue("execution",e)}get credibility(){return this.confidence}set credibility(e){this.confidence=e}get confidence(){return this._record?.confidence??0}set confidence(e){this._record.confidence=e}get c(){return this.confidence}set c(e){this.confidence=e}get observationDate(){return this._record?.observationDate??void 0}set observationDate(e){this._record.observationDate=new Date(e)}get d(){return this._record?.observationDate??void 0}set d(e){this._record.observationDate=e}get metadata(){let e=JSON.parse(JSON.stringify(this.record));return delete e.object,delete e.propertyID,delete e.value,e}set metadata(e){e=e?.record||e||{};let r=["object","propertyID","value"];for(let n of Object.keys(e))r.includes(n)||this.setValue(n,e[n])}get m(){return this.metadata}set m(e){return this.metadata=e}getDatapoint(e,r,n){return new DataPoint(e,r,n,this.record)}new(e,r,n){return this.getDatapoint(e,r,n)}};var ue=class extends le{constructor(e,r,n,s){super({},"DataPoint"),i.record_type(e)=="Datapoint"?this.record=e:this.object=e,r&&(this.propertyID=r),n&&(this.value=n),s&&(this.metadata=s)}toString(){return Ae(this.record)}lt(e){return Ji(this.record,e?.record??e)}le(e){return zi(this.record,e?.record??e)}gt(e){return He(this.record,e?.record??e)}ge(e){return qi(this.record,e?.record??e)}get object(){return new D(this.getValue("object"))}set object(e){e=e?.record?e:new D(e),this.setValue("object",e)}get propertyID(){return this.getValue("propertyID")}set propertyID(e){return this.setValue("propertyID",e)}get value(){return this.getValue("value")}set value(e){return this.setValue("value",e)}get rdf(){let e={subject:this.object.record_id}}};var pr=class extends le{constructor(e,r,n,s,o,a,l){super(e,r,n,s,o,a,l),this._dataPoints=[]}get dataPoints(){return cr(this._dataPoints)}set dataPoints(e){this._dataPoints=cr(e)}get dp(){return this.dataPoints}set dp(e){this.dataPoints=e}toString(){return Ae(this.dataPoints)}get(e){return this._dataPoints.filter(r=>r.object?.record_id==e)}search(e){return i.filter(this._dataPoints,e)}set(e,r){return r=r||this.metadata,this.#e(void 0,void 0,e,r)}add(e,r,n,s){if(s=s??this.metadata,e?.record_type=="DataPoint")return this._dataPoints.push(e),e;if(e?.["@type"]=="DataPoint"){let o=new ue(e,void 0,void 0,s);return this._dataPoints.push(o),o}if(e&&!r)return this.#e(void 0,void 0,e,s);if(e&&r){let o=new ue(e,r,n,s);return this._dataPoints.push(o),o}}addRecord(e,r){return this.#e(void 0,void 0,e,r??this.metadata)}get jsonld(){return Yi(this.dataPoints)}set jsonld(e){return this.#e(void 0,void 0,e,this.metadata)}#e(e,r,n,s){let a=Ki(n,s).map(l=>new ue(l));this.dataPoints=this.dataPoints.concat(a)}#t(e){if(i.isArray(e))return e=Gi(e),e.map(n=>this.#t(n));this.dataPoints.find(n=>gt(n,e))||this._dataPoints.push(e)}};var Xi={};g(Xi,{analyzeDataPoints:()=>ph,toString:()=>fh});function fh(t){let e=[{t:"Object",p:"object.@id",w:25},{t:"Property",p:"propertyID",w:12},{t:"Dimension",p:"measuredProperty",w:25},{t:"Type",p:"dataPointType",w:6},{t:"N",p:"N",w:5},{t:"Unique N",p:"uniqueN",w:5}];return i.isArray(t)?ft.toTextTable(t,e):ft.toTextRecord(t,e)}function ph(t){t=t.map(n=>n?.record||n);let e=t.map(n=>n.object["@id"]);console.log("pp",e),e=[...new Set(e)],console.log("pp2",e);let r=[];for(let n of e)r=r.concat(gh(t,n));return r}function gh(t,e){t=t.filter(s=>s.object["@id"]==e);let r=t.map(s=>s.propertyID);r=[...new Set(r)],console.log("pp",r);let n=[];for(let s of r)console.log("rr",e,s),n=n.concat(hh(t,e,s));return n}function hh(t,e,r){let n=["value","dataFeed.@id","dataFeedItem.@id","execution.@id","agent.@id","instrument.@id"],s=t.filter(u=>u.object["@id"]==e&&u.propertyID==r),o=fr(s),a,l=[];for(let u of n){a=s.map(p=>i.getValue(p,u));let d={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ALL",N:a.length,uniqueN:[...new Set(a)].length};l.push(d),a=o.map(p=>i.getValue(p,u));let c={"@type":"Analysis",object:{"@id":e},propertyID:r,measuredProperty:u,dataPointType:"ACTIVE",N:a.length,uniqueN:[...new Set(a)].length};l.push(c)}return l}var sl={..._e,DataPoint:ue,DataPointDB:pr,Metadata:le,analysis:Xi};var ol={...i,jsonldBase:i,...V,things:V,rdf:oi,...z,recordIDHelpers:z,dataHelpers:f,...Mt,transformHelpers:Mt,records:_,disk:te,datapointHelpers:sl,format:ft,html:rl},Zi=ol,Se=ol;var hr={};g(hr,{ApiDB:()=>Qi});var gr={};g(gr,{CacheDB:()=>ht});var ht=class{constructor(e){this._cache={},this._searchCache={},this._expiryDuration=isNaN(Number(e))?void 0:Number(e)}getAll(e=!0){let r=[];for(let n of Object.keys(this._cache))r.push(this.get(n,e));return r}get(e,r=!0){if(i.isArray(e))return e.map(a=>this.get(a));if(e=i.toRecordID(e),!this._cache?.[e]||!this._cache?.[e]?.modifiedDate)return;let s=new Date-this._cache[e].modifiedDate;if(this._expiryDuration===void 0&&s>this._expiryDuration){this._cache[e]=void 0;return}let o=this._cache[e]?.value;return r===!0&&(o=i.expand(this.getAll(!1),o)),o=i.simplify(o),o}set(e){let r=i.flatten(e);for(let n of r){let s=i.record_id(n);this._cache[s]=this._cache?.[s]||{},this._cache[s].value=i.isRef(n)&&this._cache[s]?.value||n,this._cache[s].modifiedDate=new Date}}post(e){return this.set(e)}getSearch(e){if(e=e||"all",!this._searchCache?.[e])return[];if(!this._searchCache?.[e]?.modifiedDate)return;let n=new Date-this._searchCache[e].modifiedDate;if(this._expiryDuration===void 0&&n>this._expiryDuration){this._searchCache[e]=void 0;return}let s=this._searchCache[e]?.value;return s=i.expand(this.getAll(!1),s),s}setSearch(e,r){r=i.toArray(r),this.set(r),this._searchCache[e]=this._searchCache?.[e]||{},this._searchCache[e].value=r,this._searchCache[e].records=i.flatten(r),this._searchCache[e].modifiedDate=new Date}};var Qi=class{constructor(e,r,n){this._base_url=e,this._databaseID=r,this._tenantID=n,this._expiryDuration=5e3,this._cacheDB=new ht}async get(e){e=Se.toRecordID(e);let r=this._cacheDB.get(e);if(r)return console.log("record retrieved from cache"),r;console.log("record not found in cache");let n="/"+this._databaseID+"/"+this._tenantID,s=Se.dataHelpers.url.getUrl(this._base_url,n,{record_id:e}),a=await(await fetch(s)).json();return this._cacheDB.set(a),console.log("record retrieved from db"),a}async search(e,r,n,s,o){let a={...e};r&&(a.offset=r),n&&(a.limit=n),s&&(a.orderBy=s),o&&(a.orderDirection=o),console.log("pp",a);let l="/"+this._databaseID+"/"+this._tenantID,u=Se.dataHelpers.url.getUrl(this._base_url,l,a);console.log("url",u);let c=await(await fetch(u)).json(),p=Se.getResult(c);return this._cacheDB.setSearch(a,p),console.log("record retrieved from db"),p}async post(e){let n=Se.dataHelpers.url.getUrl(this._base_url,"/"),o=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),a=Se.getResults(o);return this._cache.set(a),a.length==1?a[0]:a}};var yr={};g(yr,{ApiClient:()=>mr,default:()=>mh});var mr=class{constructor(e,r,n){this._baseUrl,this._headers,this._databaseID,this._tenantID,this.baseUrl=e,this.databaseID=r,this.tenantID=n}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}get databaseID(){return this._databaseID}set databaseID(e){this._databaseID=e}get tenantID(){return this._tenantID}set tenantID(e){this._tenantID=e}get headers(){return this._headers}set headers(e){this._headers=e}async get(e,r){return await es(this.headers,this.baseUrl,e,r)}async post(e,r){return await al(this.headers,this.baseUrl,e,r)}async patch(e,r){return await yh(this.headers,this.baseUrl,e,r)}async delete(e,r){return await ts(this.headers,this.baseUrl,e,r)}async test(e){return await bh(this.headers,this.baseUrl,e)}},mh={ApiClient:mr};async function es(t,e,r,n){let s=new V.Action;s.name="API Get",s.instrument=new V.WebAPI(e),s.object=n;try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=f.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"GET"},u=await fetch(o,l);if(u.status>=300)return s.setFailed(u.statusText),s;let d=await u.json();return s.setCompleted(d),s}catch(o){return s.setFailed(String(o)),s}}async function al(t,e,r,n){let s=new V.Action;s.name="API Post",s.instrument=new V.WebAPI(e);try{let o=f.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"POST",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return console.log(o),console.log(u.statusText),s.setFailed(u.statusText),s;let d=await u.json();return s.setCompleted(d),s}catch(o){return console.log(o),s.setFailed(String(o)),s}}async function yh(t,e,r,n){let s=new V.Action;s.name="API Post",s.instrument=new V.WebAPI(e);try{let o=f.url.getUrl(e,r,{}),l={headers:{...t||{},...{"Content-Type":"application/json"}},method:"PATCH",body:JSON.stringify(n,null,4)},u=await fetch(o,l);if(u.status>=300)return s.setFailed(u.statusText),s;let d=await u.json();return s.setCompleted(d),s}catch(o){return s.setFailed(String(o)),s}}async function ts(t,e,r,n){let s=new V.Action;s.name="API Get",s.instrument=new V.WebAPI(e);try{n=JSON.parse(JSON.stringify(n||{},null,4)),n.filter=JSON.stringify(n?.filter||{},null,4);let o=f.url.getUrl(e,r,n),l={headers:{...t||{},...{}},method:"DELETE"},u=await fetch(o,l);if(u.status>=300)return s.setFailed(u.statusText),s;let d=await u.json();return s.setCompleted(d),s}catch(o){return s.setFailed(String(o)),s}}async function bh(t,e,r){let n={"@type":"Thing","@id":"https://krknapi.co/testRecordV1",name:"testRecordV1"},s=new V.Action,o={filter:{"@id":n["@id"]}},a;return a=await ts(t,e,r,o),s.hasPart=s.hasPart.concat(a.record),(await a).isFailed?(s.setFailed("Error step1 delete record"),s.record):(a=await al(t,e,r,n),s.hasPart=s.hasPart.concat(a.record),(await a).isFailed?(s.setFailed("Error step2 create record"),s.record):(a=await es(t,e,r,o),s.hasPart=s.hasPart.concat(a.record),(await a).isFailed?(s.setFailed("Error step3 get record"),s.record):a.result[0]?.["@id"]!=n?.["@id"]?(s.setFailed("Error step3 got wrong record"),s.record):(a=await ts(t,e,r,o),s.hasPart=s.hasPart.concat(a.record),(await a).isFailed?(s.setFailed("Error step4 delete record"),s.record):(a=await es(t,e,r,o),s.hasPart=s.hasPart.concat(a.record),(await a).isFailed?(s.setFailed("Error step5 get record"),s):a.result?.name==n?.name?(s.setFailed("Error step5 record still exist"),s):(s.setCompleted(),s.record)))))}var xr={};g(xr,{DiskDB:()=>rs});var rs=class{constructor(e,r=!0){this.path=e,this.flattenRecords=r,this._isInitializedFlag=!1}async set(e){return this.flattenRecords===!0?await this._set_flattened(e):await this._set(e)}async _set(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;if(i.isArray(e)){for(let n of e){let s=await this._set(n);r.addPart(s)}return r.setCompleted(e),r.record}try{let n=JSON.stringify(e,null,4),s=i.record_id(e),o=br(s),a=await te.save(this.path,o,n);return r.setCompleted(e),r.record}catch(n){return r.setFailed(String(n)),r.record}}async _set_flattened(e){let r=new V.Action("Saving record");if(r.object=e,!e)return r.setFailed("No record provided"),r.record;let n=new i.DB;n.set(e);for(let s of n){let o=new V.Action("Saving record "+i.record_id(s));try{let a=JSON.stringify(s,null,4),l=i.record_id(s),u=br(l),d=await te.save(this.path,u,a);o.setCompleted(s),r.addPart(o)}catch(a){o.setFailed(String(a)),r.addPart(o)}}return r.setCompleted(e),r.record}async post(e){return await this.set(e)}async get(e,r=!0){return r==!1||this.flattenRecords==!1?await this._get(e):await this._getNested(e)}async _get(e){let r=new V.Action("Get record from db");if(r.object=i.ref(e),!e)return r.setFailed("No @id provided"),r.record;if(i.isArray(e)){let o=[];for(let a of e){let l=await this._get(a);r.addPart(l),o=o.concat(i.toArray(l.result))}return r.setCompleted(o),r.record}let n=br(e),s=await te.load(this.path,n);if(!s||s=="")return r.setFailed("No records found"),r.record;try{let o=JSON.parse(s);return o=i.simplify(o),r.setCompleted(o),r.record}catch(o){return r.setFailed(o),r.record}}async _getNested(e){let r=new V.Action("Get nested record");r.object=i.ref(e);let n=new i.DatabaseHelper({"@id":e});for(;n.isActive;){let s=n.next,o=await this._get(s);r.addPart(o),o?.result?i.toArray(o.result).map(a=>n.add(a||i.ref(a))):n.add(i.ref(s))}return r.setCompleted(n.result),r.record}async getAll(e=!0){let r=new V.Action("Get all records"),n;try{n=await te.dir.list(this.path),n=n||[],n=i.toArray(n)}catch(a){return r.setFailed(a),r.record}if(n.length==0)return r.setCompleted([]),r.record;let s=n.map(a=>xh(a)),o=await this.get(s,e);return r.addPart(o),r.setCompleted(o.result),r.record}async exists(e){let r=await this.get(e,!1);return i.isCompleted(r)}async delete(e){let r=new V.Action("Delete record");if(r.object=i.ref(e),!e)return r.setCompleted(),r.record;if(i.isArray(e)){for(let n of e){let s=await this.delete(n);r.addPart(s)}return r.setCompleted(),r.record}e=i.toRecord_id(e);try{let n=br(e),s=await te.file.delete(this.path,n);return r.setCompleted(),r.record}catch(n){return console.log("err",n),r.setFailed(n),r.record}}async purge(){let e=new V.Action("Purge database");try{let r=await te.dir.delete(this.path);return e.setCompleted(),e.record}catch(r){return e.setFailed(r),e.record}}};function br(t){return t?`${Buffer.from(t).toString("base64url")}.json`:"unnamed-file.json"}function xh(t){if(!t||t==="unnamed-file.json")return"";let e=t.replace(/\.json$/,"");return Buffer.from(e,"base64url").toString("utf-8")}var ns={apiDB:hr,...hr,apiClient:yr,...yr,cacheDB:gr,...gr,diskDB:xr,...xr};var is={...Zi,helpers:Zi,...ns,tools:ns},C0=is,R0=is,O0=is;export{is as _h,O0 as default,R0 as h,C0 as helpers,_ as records,m as transformHelpers};
//# sourceMappingURL=index.js.map
