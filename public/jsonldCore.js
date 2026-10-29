var _o=Object.defineProperty;var g=(e,t)=>{for(var r in t)_o(e,r,{get:t[r],enumerable:!0})};var fe={get:Ie,set:Ke,flatten:So,expand:Io};function Ie(e,t){if(!t||typeof t!="string")return;let r=qn(t),n=e;for(let s of r)isNaN(s)?n=Array.isArray(n)?n[0]:n:n=Array.isArray(n)?n:[n],n=n?.[s];return n}function Ke(e,t,r){if(!t||typeof t!="string"||t=="")return;let n=qn(t);if(n.length==0)return r;let s=e;e=e||{},isNaN(n[0])||(e=Array.isArray(e)?e:[e]);let o=e;for(let a=0;a<n.length-1;a++){let l=n[a],d=n[a+1],u=!isNaN(d);u==!0&&(o[l]=Array.isArray(o[l])?o[l]:[o[l]],o=o?.[l]),u==!1&&(o[l]=o?.[l]||{},o=Array.isArray(o?.[l])?o?.[l][0]:o?.[l])}return o[n[n.length-1]]=r,e}function So(e){function t(s,o){let a=[];return Array.isArray(o)?(s=s||"",o.map((d,u)=>t(`${s}[${String(u)}]`,d)).flat()):o?.["@type"]||o?.["@id"]?(s=s&&s!=""?s+".":"",Object.keys(o).map(d=>t(`${s}${d}`,o[d])).flat()):[{propertyID:s,value:o}]}let r=t("",e),n={};return r.forEach(s=>n[s.propertyID]=s.value),n}function Io(e){let t={};return Object.keys(e).forEach(r=>Ke(t,r,e?.[r])),t}function qn(e){let t=[],r="",n=["[","]","."];for(let s of e)if(n.includes(s)){r!=""&&t.push(r),r="";continue}else r=r+s;return t.push(r),t=t.filter(s=>s!=""),t=t.map(s=>isNaN(Number(s))?s:Number(s)),t}var Lt={};g(Lt,{eq:()=>jo,ge:()=>Uo,getDiff:()=>Kn,getHash:()=>Gn,getHashNested:()=>Ho,gt:()=>Bo,isEqual:()=>Ro,isSame:()=>vo,le:()=>Oo,lt:()=>Do});var Ye={};g(Ye,{expand:()=>Po,flatten:()=>No,getChildren:()=>Co,handleRelationships:()=>Mt,simplify:()=>Et,strip:()=>Ht});function Po(e,t,r=!0){let n=i._storeToMap(e),s=new Map;function o(a){if(!a||typeof a!="object")return a;if(Array.isArray(a))return a.map(m=>o(m));let l=i.record_id(a);if(l&&s.has(l)){let m=s.get(l);return r?m:i.ref?i.ref(m):{"@id":l}}let u=(l&&n instanceof Map?n.get(l):null)||a,p=Array.isArray(u)?[...u]:{...u};l&&s.set(l,p);for(let m of Object.keys(p))m==="previousItem"||m==="nextItem"||(p[m]=o(p[m]));return p}return typeof t=="string"&&(t={"@id":t}),o(t)}function Ht(e){function t(r,n,s){if(Array.isArray(r))return r.map(o=>t(o,n,s));if(r?.["@type"]||r?.["@id"]){if(s>n)return{"@id":r?.["@id"]};{let o={};for(let a of Object.keys(r).sort())o[a]=t(r?.[a],n,s+1);return o}}return r}return t(e,0,0)}function No(e){function t(n){let s=[];if(!n)return[];if(i.isArray(n)){let o=[];for(let a of n)o=o.concat(t(a));return o}if(Object.prototype.toString.call(n)!=="[object Object]")return[];for(let o of Object.keys(n)){if(o=="@id")continue;if(o=="previousItem"){n[o]=i.ref(n?.[o]);continue}if(o=="nextItem"){n[o]=i.ref(n?.[o]);continue}let a=n[o];a=i.toArray(a),n[o]=[];for(let l of a)l?.["@id"]?n[o].push({"@id":l?.["@id"]}):n[o].push(l),s=s.concat(t(l))}return s=[n].concat(s),s}e=i.clone(e),e=i.setTempID(e),e=Mt(e);let r=t(e);return r=r.filter(n=>n),r=r.filter(n=>i.isRef(n)===!1),r}function Mt(e){if(i.isArray(e))return e.map(r=>Mt(r));let t=e;if(i.record_type(t)=="Product"){let r=i.getValues(t,"offers");r=r.map(o=>i.insertValue(o,"itemOffered",i.ref(t))),t=i.setValues(t,"offers",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}if(i.record_type(t)=="Offer"){let r=i.getValues(t,"itemOffered");r=r.map(o=>i.insertValue(o,"offers",i.ref(t))),t=i.setValues(t,"itemOffered",r);let n=i.getValues(t,"review");n=n.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"review",n);let s=i.getValues(t,"aggregateRating");s=s.map(o=>i.insertValue(o,"itemReviewed",i.ref(t))),t=i.setValues(t,"aggregateRating",s)}return t}function Et(e){function t(n,s=0){if(s>20)return n;if(s+=1,n!==void 0){if(Array.isArray(n))return n=n.map(o=>t(o,s)),n=n.filter(o=>o!==void 0),n.length==1?(n=n[0],n):n.length==0?void 0:n;if(n&&typeof n=="object"&&Object.keys(n).length>0){let o={};for(let a of Object.keys(n)){let l=t(n?.[a],s);a=="itemListElement"&&(l=i.toArray(l)),l!==void 0&&(o[a]=l)}return o["@id"]=i.toArray(o?.["@id"])?.[0],o}return n}}return e=i.clone(e),t(e)}function Co(e){function t(r,n){if(i.isArray(r)){let o=[];for(let a of r){let l=t(a,n);o=o.concat(l)}return o}if(!(r?.["@id"]||r?.["@type"]))return[];let s=[];n>0&&s.push(r);for(let o of Object.keys(r))s=s.concat(t(r[o],n+1));return s=s.filter(o=>o),s}return t(e,0)}function vo(e,t){if(e=i.record_id(e)??e,t=i.record_id(t)??t,e==null&&t==null)return!0;if(e!=null&&t==null||e==null&&t!=null)return!1;if(!isNaN(e)&&!isNaN(t)||typeof e=="string"&&typeof t=="string"||e instanceof Date&&t instanceof Date)return e==t;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e==t}function jo(e,t){if(e===void 0&&t===void 0)return!0;if(e!==void 0&&t===void 0||e===void 0&&t!==void 0)return!1;if(e===null&&t===null)return!0;if(e!==null&&t===null||e===null&&t!==null)return!1;e=i.clean(e),t=i.clean(t),e=i.strip(e),t=i.strip(t);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{t=JSON.stringify(t,Object.keys(t).sort(),0)}catch{}return e==t}function Ro(e,t){let r=(s,o)=>o instanceof Object&&!(o instanceof Array)?Object.keys(o).sort().reduce((a,l)=>(a[l]=o[l],a),{}):o;try{e=i.JSON_stringify(e)}catch{}try{t=i.JSON_stringify(t)}catch{}return e==t}function Do(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<t}function Oo(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e<=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]<=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e<=t}function Bo(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>t}function Uo(e,t){if(e==null&&t==null)return!1;if(!isNaN(e)&&!isNaN(t))return e>=t;if(e?.["@id"]!=null&&t?.["@id"]!=null)return e?.["@id"]>=t?.["@id"];if(e?.["@id"]!=null&&t?.["@id"]==null||e?.["@id"]==null&&t?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{t=JSON.stringify(t)}catch{}return e>=t}function Gn(e,t=!1){e=Et(e),t==!1&&(e=Ht(e));let r=l=>l&&typeof l=="object"&&!Array.isArray(l)?Object.keys(l).sort().reduce((d,u)=>({...d,[u]:r(l[u])}),{}):Array.isArray(l)?l.map(r):l,n=JSON.stringify(r(e)),s=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(s)return s.createHash("sha256").update(n).digest("hex");let o=5381,a=n.length;for(;a;)o=o*33^n.charCodeAt(--a);return(o>>>0).toString(16)}function Ho(e){return Gn(e,!0)}function Kn(e,t){if(e===t)return null;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t;let r={};for(let n in e)if(e.hasOwnProperty(n))if(!t.hasOwnProperty(n))r[n]={removed:e[n]};else{let s=Kn(e[n],t[n]);s!==null&&(r[n]=s)}for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(r[n]={added:t[n]});return Object.keys(r).length>0?r:null}var Ft={};g(Ft,{evaluate:()=>Wt});function Wt(e,t){let r=[];for(let s of Object.keys(t)){let o=s,a=t?.[s];if(a=i.toArray(a),o=="$and")return a.every(l=>Wt(e,l));if(o=="$or")return a.some(l=>Wt(e,l));for(let l of a){let d=Eo(e,o,l);r.push(d)}}return r.every(s=>Mo(s.r,s.p,s.o,s.v))}function Mo(e,t,r,n){try{let s=fe.get(e,t);if(typeof s=="string"&&(s=s.trim()),typeof n=="string"&&(n=n.trim()),s=isNaN(Number(s))?s:Number(s),n=isNaN(Number(n))?n:Number(n),r=="$equal")return s==n;if(r=="$lt")return s<n;if(r=="$gt")return s>n;if(r=="$le")return s<=n;if(r=="$ge")return s>=n;if(r=="$same")return s?.["@id"]&&s?.["@id"]===n?.["@id"];if(r=="$includes")return s.includes(n)}catch(s){return console.log("err",s),!1}}function Eo(e,t,r){let n={r:e,p:t,o:null,v:null};return typeof r=="string"&&(r.startsWith("$")?n={r:e,p:t,o:r.split(" ")[0],v:r.split(" ").slice(1).join(" ")}:n={r:e,p:t,o:"$equal",v:r}),typeof r=="object"&&(n={r:e,p:t,o:Object.keys(r)?.[0],v:r?.[Object.keys(r)?.[0]]}),n}var lr={};g(lr,{assignId:()=>ya,getGenericRecordID:()=>ha,normalizeRecordId:()=>ga,replaceIds:()=>fi,setTempID:()=>ci});var Jt={};g(Jt,{clean:()=>Lo,isArray:()=>pe,isValid:()=>Wo,toArray:()=>Xe});function Lo(e){return Xe(e)}function Wo(e){return pe(e)}function pe(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function Xe(e){return isNull(e)?[]:(e=pe(e)?e:[e],e=e.filter(t=>t!==void 0),e)}var qt={};g(qt,{clean:()=>zt,format:()=>Jo,formatDate:()=>Yn,isDate:()=>G,isNotDate:()=>zo,isValid:()=>Fo,toDate:()=>ge});function zt(e,t=void 0){return ge(e)||t}function Fo(e){return G(e)}function Jo(e,t=!1){return Yn(e,t)}function G(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function zo(e){return!G(e)}function ge(e){if(e===void 0)return;if(G(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=G(e)?e:void 0,e}function Yn(e,t=!1){if(console.log("vv",e,ge(e)),e=ge(e),G(e)===!1)return;let r=e,n=String(r.getFullYear()).padStart(4,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),a=`${n}-${s}-${o}`;if(t==!0){let l=String(r.getHours()).padStart(2,0),d=String(r.getMinutes()).padStart(2,0),u=String(r.getSeconds()).padStart(2,0);a=a+` ${l}:${d}:${u}`}return console.log("cc",a),a}var Kt={};g(Kt,{clean:()=>qo,isNotNull:()=>Gt,isNull:()=>he,isValid:()=>Go});function qo(e,t=void 0){}function Go(e){return he(e)}function Gt(e){return!he(e)}function he(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||me.array.isValid(e)?e.length==0:e instanceof Date?me.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var Xt={};g(Xt,{clean:()=>Yt,format:()=>Yo,formatDecimals:()=>Xn,isNotNumber:()=>Xo,isNumber:()=>Te,isValid:()=>Ko,toNumber:()=>Ze});function Yt(e,t=void 0){return Ze(e)??t}function Ko(e){return Te(e)}function Yo(e,t){return Xn(e,t)}function Xn(e,t){if(e=Number(e),!isNaN(e))return t!==void 0?e.toFixed(t):e}function Te(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function Xo(e){return!Te(e)}function Ze(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var Zt={};g(Zt,{clean:()=>Zo,cleanObject:()=>Pe,isObject:()=>Qe,isValid:()=>Qo});function Zo(e,t=void 0){return Pe(e)||t}function Qo(e){return Qe(e)}function Qe(e){return e===void 0||b.isString(e)==!0||b.isDate(e)==!0||b.isNumber(e)==!0||b.isArray(e)==!0?!1:Object.keys(e).length>0}function Pe(e){if(b.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Pe(e);if(e.length==1){let t=[];for(let r of e)t=t.concat(Pe(x));t=t.filter(r=>b.isNotNull(r))}}if(b.object.isValid(e))for(let t of Object.keys(e))e[t]=Pe(e[t]),me.isNull(e[t])&&delete e[t];return me.isNotNull(e)?e:void 0}var er={};g(er,{clean:()=>ea,cleanString:()=>Zn,isString:()=>Ne,isValid:()=>ta,maxLengthEnd:()=>na,maxLengthMiddle:()=>ra,toString:()=>Qt});function ea(e,t=""){return Zn(e)||t}function ta(e){return Ne(e)&&e.trim().length>=0}function ra(e,t){if(e==null)return"";let r=String(e);if(t===void 0||t<0||r.length<=t)return r;if(t<=3)return r.substring(0,t);let n=Math.round(t/3),s=t-n-3;return r.substring(0,n)+"..."+r.substring(r.length-s)}function na(e,t){if(e==null)return"";let r=String(e);return t===void 0||t<0||r.length<=t?r:t<=3?r.substring(0,t):r.substring(0,t-3)+"..."}function Ne(e){return typeof e=="string"||e instanceof String}function Qt(e){return e==null?"":String(e)}function Zn(e){return Ne(e)?e.trim():void 0}var nr={};g(nr,{clean:()=>Qn,cleanUrl:()=>ti,getDomain:()=>ia,getParams:()=>sa,getPath:()=>ni,getUrl:()=>ei,isUrl:()=>et,isValid:()=>tr,setParams:()=>ri,setPath:()=>ii,toUrl:()=>rr});function tr(e){return et(e)}function Qn(e,t=void 0){return ti(e)??t}function rr(e,t,r,n=void 0){return ei(e,t,r)||n}function ei(e,t,r){let n=ii(e,t);return r&&(n=ri(n,r)),n}function et(e){return e=Qn(e),!!e}function ti(e,t={}){let{removeTracking:r=!0,stripWww:n=!1,removeTrailingSlash:s=!0,lowercasePath:o=!1,allowedQueryParams:a=[]}=t;try{let l=new URL(e);l.protocol=l.protocol.toLowerCase(),l.hostname=l.hostname.toLowerCase(),n&&l.hostname.startsWith("www.")&&(l.hostname=l.hostname.slice(4)),(l.protocol==="http:"&&l.port==="80"||l.protocol==="https:"&&l.port==="443")&&(l.port="");let d=l.pathname;if(d=d.replace(/\/+/g,"/"),o&&(d=d.toLowerCase()),s&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),l.pathname=d,r){let u=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],p=Array.from(l.searchParams.keys());for(let m of p){let y=u.some(M=>m.toLowerCase().startsWith(M)),A=a.includes(m);y&&!A&&l.searchParams.delete(m)}}return l.searchParams.sort(),l.toString()}catch{return}}function ia(e){try{let t=new URL(e).hostname;return t=t.replaceAll("www.",""),t}catch{return null}}function sa(e){try{let t=new URL(e);return Object.fromEntries(t.searchParams)}catch{return null}}function ri(e,t){try{let r=new URL(e);for(let n of Object.keys(t))r.searchParams.set(n,t[n]);return r.toString()}catch{return null}}function ni(e){try{return new URL(e).pathname}catch{return}}function ii(e,t){t=t??"";let r=[],n=ni(e)||"";r=r.concat(n.split("/")),t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let o of t)r=r.concat(o.split("/"));r=r.filter(o=>o!="");let s="/"+r.join("/");try{return new URL(s,e).toString()}catch(o){console.log(o,s,e);return}}var sr={};g(sr,{clean:()=>oa,format:()=>la,isDuration:()=>Ce,isValid:()=>aa,toDuration:()=>ir});function oa(e,t=void 0){return toDate(e)||t}function aa(e){return Ce(e)}function la(e){return da(e)}function Ce(e){return ua(e)}function ir(e){return e}function ua(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function da(e){let t=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,r=e.match(t);if(!r)return"00:00:00";let[n,s,o,a,l,d,u,p]=r.map(A=>parseInt(A,10)||0),m=[d,u,p].map(A=>String(A).padStart(2,"0")).join(":"),y=[];return s&&y.push(`${s}y`),o&&y.push(`${o}m`),a&&y.push(`${a}w`),l&&y.push(`${l}d`),y.length>0?`${y.join(" ")} ${m}`:m}var b={isNull:he,isNotNull:Gt,isArray:pe,toArray:Xe,isDate:G,toDate:ge,isDuration:Ce,toDuration:ir,isObject:Qe,isNumber:Te,toNumber:Ze,isString:Ne,toString:Qt,isUrl:et,toUrl:rr,array:Jt,date:qt,duration:sr,null:Kt,number:Xt,object:Zt,string:er,url:nr,getDataType:si,getType:si,getJsonSchema:ca},me=b;function si(e){if(he(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(pe(e))return"Array";if(G(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(tr(e))return"URL";if(zt(e))return"DateTime";if(Ce(e))return"Duration";if(Yt(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let t=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function ca(e){function t(r,n=0){let s={};if(n==0&&(s.$schema="https://json-schema.org/draft/2020-12/schema",s.title=r?.["@type"]||""),b.isString(r))return s.type="string",s;if(b.isObject(r)){s.type="object",s.properties={};for(let o of Object.keys(r))s.properties[o]=t(r[o],n+1);return s}if(b.isNumber(r))return s.type="number",s;if(b.isArray(r))return s.type="array",s.items=t(r?.[0],n+1),s}return t(e,0)}var pp=globalThis.crypto.randomUUID;var tt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function ye(e,t){if(!e||!e?.["@type"])return;let r=li(e);r=r.filter(n=>typeof n=="string"),r=r.map(n=>n.toLowerCase());for(let n of r){let s=tt?.[n];if(s=="url")return ui(n,rt(e));if(s=="domain")return di(n,rt(e))}return ar(t)}function oi(e,t){if(!e||!e?.["@type"])return;let r=li(e);for(let n of r){let s=tt?.[n];if(s=="url")return ui(n,rt(e));if(s=="domain")return di(n,rt(e))}}function ai(e,t){let r=e?.["@id"];return r?fa(e)?getStandardizedRecordId(e,t)==r:or(e?.["@id"],t)==r:!1}function fa(e){let t=e?.["@type"];t=Array.isArray(t)&&typeof t!="string"?t:[t];for(let r of t)if(tt?.[r])return tt?.[r]}function li(e){let t=e?.["@type"];return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function rt(e){let t=e?.url;return t=Array.isArray(t)&&typeof t!="string"?t:[t],t=t.filter(r=>r),t}function ar(e){return e=or(e),e?(e.endsWith("/")||(e=e+"/"),or(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function ui(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>b.url.clean(s)),t=t.filter(s=>s);let r=t?.[0];return r?r+"#"+e:"_:"+globalThis.crypto.randomUUID()}function di(e,t){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(t)&&typeof t!="string"||(t=[t]),t=t.map(s=>pa(s)),t=t.map(s=>"https://"+s),t=t.filter(s=>s);let r=t?.[0];return r?(r.endsWith("/")||(r=r+"/"),r+"#"+e):"_:"+globalThis.crypto.randomUUID()}function pa(e){if(!e||typeof e!="string")return null;try{let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith("//")&&(t="https://"+t),new URL(t).hostname.toLowerCase()}catch{return null}}function or(e,t="https"){if(!e||typeof e!="string")return null;let r=e.trim();r.startsWith("//")?r=`${t}:${r}`:/^https?:\/\//i.test(r)||(r=`${t}://${r}`);try{let n=new URL(r);n.hostname=n.hostname.toLowerCase();let s=n.toString();return s.endsWith("/")&&!e.endsWith("/")&&(s=s.slice(0,-1)),s}catch{return null}}function ga(e,t){e=ci(e);let r=ma(e,t);return fi(e,r)}function ma(e,t){function r(s,o){if(o=o||"https://www.test.com/",i.isArray(s)){let l=[];for(let d of s)l=l.concat(r(d));return l}if(i.isObject(s)==!1)return[];let a=[{replacee:i.record_id(s),replacer:ye(s,o)}];for(let l of Object.keys(s))a=a.concat(r(s[l],o));return a}let n=r(e,t);return n=n.filter(s=>s),n}function ci(e){if(Array.isArray(e))return e.map(t=>i.assignId(t));if(i.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+i.randomUUID();for(let t of Object.keys(e))e[t]=i.assignId(e[t]);return e}function ha(e){return ar(e)}function ya(e,t=[]){if(i.isArray(e))return e.map(r=>i.assignId(r,t));if(i.isObject(e)==!1||t.includes(e))return e;t.push(e);for(let r of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+i.randomUUID(),e[r]=i.assignId(e[r],t);return e}function fi(e,t){function r(n,s){if(Array.isArray(n))return n.map(l=>i.replaceIds(l,s));if(!n?.["@id"])return n;let o=n?.["@id"],a=s.get(o);a&&(n["@id"]=a);for(let l of Object.keys(n))n[l]=i.replaceIds(n?.[l],s);return n}if(!(t instanceof Map)){let n=new Map;t=(Array.isArray(t),t),t.forEach(s=>n.set(s.replacee,s.replacer)),t=n}return r(e,t)}var dr={};g(dr,{DB:()=>ur,_storeToMap:()=>je,_storeToOriginal:()=>xa,getRecord:()=>be,getRecords:()=>ve,patchRecord:()=>gi,postRecord:()=>pi});var ur=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let t of this._store.values())yield t}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(t,r=!0){return t=t?.["@id"]||t,be(this._store,t,r)}getOrCreate(t,r=!0){let n=this.get(t,r);return(!n||i.isRef(n))&&(this.set(t),n=this.get(t,r)),n}search(t={},r=!0){return ve(this._store,t,r)}set(t){let r=i.flatten(t),n=r.map(s=>be(this._store,i.record_id(s),!1));for(let s of r)this._store=pi(this._store,s);return this._broadcastIfChanged(n,r),t}post(t){return this.set(t)}patch(t,r=!0){let n=i.flatten(t),s=n.map(o=>be(this._store,i.record_id(o),!1));for(let o of n)this._store=gi(this._store,o,r);return this._broadcastIfChanged(s,n),t}delete(t){let r=[this.get(t)];this._store=i.deleteRecord(this._store,t),this._broadcastIfChanged(r,[{"@id":t}])}getValue(t,r,n,s){let o=this.get(t);return i.getValue(o,r,n,s)}getValues(t,r,n){let s=this.get(t);return i.getValues(s,r,n)}setValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}setValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.setValue(s,r,n),this.set(s)}addValue(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValue(s,r,n),this.set(s)}addValues(t,r,n){let s=this.get(t);return s||(s={"@id":t}),s=i.clone(s),s=i.addValues(s,r,n),this.set(s)}length(){return this._store.size}get records(){return ve(this._store)}getRecords(t=!1){return ve(this._store,void 0,!1)}get record_ids(){return ba(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insert(t,r,n),this.set(t)}_list_upsert(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.upsert(t,r,n),this.set(t)}_list_prepend(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.prepend(t,r),this.set(t)}_list_append(t,r){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.append(t,r),this.set(t)}_list_insertBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.insertBefore(t,r,n),this.set(t)}_list_insertAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.insertAfter(t,r,n),this.set(t)}_list_moveBefore(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),n=this.getOrCreate(n),t=i.list.moveBefore(t,r,n),this.set(t)}_list_moveAfter(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.moveAfter(t,r,n),this.set(t)}_list_moveUp(t,r){t=this.getOrCreate(t),t=i.list.moveUp(t,r),this.set(t)}_list_moveDown(t,r){t=this.getOrCreate(t),t=i.list.moveDown(t,r),this.set(t)}_list_remove(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_delete(t,r){t=this.getOrCreate(t),t=i.list.remove(t,r),this.set(t)}_list_replace(t,r,n){t=this.getOrCreate(t),r=this.getOrCreate(r),t=i.list.replace(t,r,n),this.set(t)}_list_length(t){return t=this.get(t),this.list.length(t)}_list_getItems(t){return t=this.getOrCreate(t),this.list.getItems(t)}_list_getListItems(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}_list_getItemListElement(t){return t=this.getOrCreate(t),this.list.getItemListElement(t)}getRecord(t,r=!0,n=void 0){let s=this.get(t);return!s||i.isRef(s)?n:s}updateRefs(t){function r(n,s={}){if(i.isArray(n))return n.map(o=>r(n,s));if(i.isObject(n)){if(i.isRef(n)){if(s?.[i.record_id(n)])return s[i.record_id(n)];n=be(n,!0,n),s[i.record_id(n)]=n;for(let o of Object.keys(n))n[o]=r(n,s)}return n}return n}return r(t,{})}execute(t){let r=i.toArray(t);for(let s of r)s=this.updateRefs(s),s=i.execute(s);let n=[];for(let s of r)n=n.concat(i.getResults(s));return this.set(n),r.length==1?r[0]:r}subscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n.includes(r)||(n.push(r),this._subscriptions.set(t,n))}unsubscribe(t,r){(!t||t=="*"||t=="all")&&(t="all");let n=this._subscriptions.get(t)||[];n=n.filter(s=>s!=r),this._subscriptions.set(t,n)}async _broadcastIfChanged(t,r){let n=[];for(let s of r){let o=t.find(a=>i.record_id(a)==i.record_id(s));i.isEqual(o,s)||n.push(i.record_id(s))}this.broadcast(n)}broadcast(t){t=i.toArray(t),t=i.toRecordID(t),t=[...new Set(t)];for(let r of t){let n=this.get(r),s=this._subscriptions.get(r)||[];s=s.concat(this._subscriptions.get("all")||[]),s=[...new Set(s)];for(let o of s)this._broadcastItem(o,n)}}async _broadcastItem(t,r){try{return t(r)}catch{}}static randomUUID(){return i.randomUUID()}static clean(t,r){return i.clean(t,r)}static flatten(t){return i.flatten(t)}static getValue(t,r,n,s){return i.getValue(t,r,n,s)}static getValues(t,r,n){return i.getValues(t,r,n)}static setValue(t,r,n,s){return i.setValue(t,r,n,s)}static setValues(t,r,n){return i.setValues(t,r,n)}static addValue(t,r,n){return i.addValue(t,r,n)}static addValues(t,r,n){return i.addValues(t,r,n)}static strip(t){return i.strip(t)}static get dot(){return fe}static ref(t){return i.ref(t)}static simplify(t){return i.simplify(t)}static isJsonld(t){return i.isJsonld(t)}static isValid(t){return i.isValid(t)}static isArray(t){return i.isArray(t)}static setAdditionalProperty(t,r,n,s){return i.setAdditionalProperty(t,r,n,s)}static getAdditionalProperty(t,r){return i.getAdditionalProperty(t,r)}};function pi(e,t){if(!t)return;t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let r=je(e);for(let n of t)r.get(n?.["@id"])&&i.isRef(n)||r.set(n?.["@id"],n);return e=i._storeToOriginal(r),e}function gi(e,t,r=!0){t=i.clone(t),t=i.assignId(t),t=i.flatten(t);let n=je(e);for(let s of t){let o=n.get(i.record_id(s));s=i.patch(o,s),n.set(i.record_id(s),s)}return e=i._storeToOriginal(n),e}function be(e,t,r=!0){if(i.isArray(t))return t.map(a=>be(e,a,r));let n=i._utilGetId(t),s=je(e),o=s.get(n);return r==!0&&(o=i.expand(s,o)),o=i.clone(o),o}function ve(e,t,r=!0){let n=je(e),s=Array.from(n.values());return t&&(s=s.filter(o=>i.evaluate(o,t))),r==!0&&(s=i.expand(n,s)),s=i.clone(s),s}function ba(e){return ve(e).map(n=>i.record_id(n))}function je(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=i.toArray(e),e=e.filter(r=>i.isRef(r)===!1),e=e||[],e=Array.isArray(e)?e:[e];let t=new Map;for(let r of e){let n=i.record_id(r);n&&(t.has(n)&&(r=i.merge(t.get(n),r,!0)),t.set(n,r))}return e=t,e}function xa(e){return e=Array.from(e.values()),e}var fr={};g(fr,{JSON_parse:()=>Aa,JSON_stringify:()=>xi,clean:()=>hi,clone:()=>Vi,contractAtValue:()=>it,expandAtValue:()=>ka,getRecordUrl:()=>Sa,isJsonld:()=>mi,isValid:()=>Va,merge:()=>$a,patch:()=>_a,removeCircularRefs:()=>yi,sortedReplacer:()=>bi,stringify:()=>wa});function Va(e){return mi(e)}function mi(e){return e?.["@type"]||e?.["@id"]}function hi(e,t){if(Array.isArray(e)&&e.length>1)return e.map(s=>hi(s,t));if(!e?.["@type"]||!e?.["@id"])return e;try{e=Vi(e)}catch{}e=setTempID(e);let r=i.flatten(e);r=r.map(s=>JSON.parse(JSON.stringify(s,Object.keys(s).sort(),4)));let n=[];for(let s of r){if(s["@id"]=Array.isArray(s?.["@id"])?s?.["@id"][0]:s?.["@id"],ai(s)==!0)continue;let o=oi(s,t);if(o&&s?.["@id"]!=o){let a={replacer:o,replacee:s?.["@id"]};n.push(a)}if(!o&&s?.["@id"].startsWith("_:")){let a={replacer:i.getGenericRecordID(t),replacee:s?.["@id"]};n.push(a)}}return e=i.replaceIds(e,n),e}function yi(e){return cr(e,new Set)}function cr(e,t){if(t=new Set([...t]),e===null||typeof e!="object")return e;if(i.isArray(e))return e.map(n=>cr(n,t));if(!i.isObject(e))return e;let r=i.record_id(e);if(t.has(r))return i.ref(e);t.add(r);for(let n of Object.keys(e))e[n]=cr(e[n],t);return e}function bi(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t}function xi(e){return e=yi(e),JSON.stringify(e,bi,4)}function wa(e){return xi(e)}function Aa(e){return JSON.parse(e)}function ka(e){function t(r,n=!1){let s=i.getAtValue(r);if(s&&s.length>0)return i.setAtValue(r,t(s,!0));if(i.isArray(r))return r.map(o=>t(o,n));if(i.isJsonld(r)){for(let o of Object.keys(r?.record||r))r=i.setValues(r,o,t(i.getValues(r,o),!1));return r}return n===!1?{"@value":r}:r}return t(e,!1)}function it(e){let t=i.getAtValue(e);if(t&&t.length>0)return it(i.getAtValue(e));if(i.isArray(e))return e.map(r=>it(r));if(i.isJsonld(e)){for(let r of Object.keys(e?.record||e))i.setValues(e,r,it(i.getValues(e,r)));return e}return e}function Vi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function $a(e,t,r=!0){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};let n=[];n=n.concat(Object.keys(e)),n=n.concat(Object.keys(t)),n=[...new Set(n)];let s={"@id":e?.["@id"]||t?.["@id"]};for(let o of n){if(o=="@id")continue;let a=i.toArray(e?.[o]||void 0),l=i.toArray(t?.[o]||void 0),d=a.concat(l);r==!0&&(d=i.dedupe(d)),s[o]=d}return s}function _a(e,t){e=i.isArray(e)&&e.length==1?e[0]:e,t=i.isArray(t)&&e.length==2?t[0]:t,e=e??{},t=t??{};for(let r of i.keys(t)){let n=i.getValues(t,r);e=i.setValues(e,r,n)}return e}function Sa(e,t){t=t?.baseUrl??t;try{return b.url.getUrl(t,encodeURIComponent(i.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var hr={};g(hr,{ID:()=>Fa,Id:()=>qa,Type:()=>ja,actionStatus:()=>al,addValue:()=>_i,addValues:()=>Si,contentUrl:()=>dl,description:()=>pl,email:()=>hl,getActionStatus:()=>ll,getAdditionalProperty:()=>nl,getAtValue:()=>sl,getContentUrl:()=>cl,getDescription:()=>gl,getEmail:()=>yl,getID:()=>Ja,getId:()=>Ga,getImageName:()=>Au,getImageUrl:()=>wu,getItem:()=>Vl,getItemListElement:()=>Sl,getItems:()=>kl,getName:()=>Pl,getNumberOfItems:()=>vl,getObject:()=>Dl,getObjects:()=>Ul,getPosition:()=>El,getPotentialAction:()=>Fl,getPotentialActions:()=>ql,getRecordID:()=>La,getRecordId:()=>Ha,getRecordType:()=>Ca,getRecord_id:()=>Oa,getRecord_type:()=>Ta,getResult:()=>Yl,getResults:()=>Ql,getTargetCollection:()=>ru,getTargetCollections:()=>su,getText:()=>lu,getType:()=>Ra,getUrl:()=>cu,getValue:()=>I,getValues:()=>mr,hasValue:()=>Ii,insertValue:()=>rl,isActive:()=>gu,isCompleted:()=>mu,isFailed:()=>hu,isPotential:()=>pu,isRef:()=>Za,item:()=>xl,itemListElement:()=>_l,items:()=>Al,keys:()=>el,name:()=>Tl,numberOfItems:()=>Cl,object:()=>Rl,objects:()=>Bl,position:()=>Ml,potentialAction:()=>Wl,potentialActions:()=>zl,properties:()=>gr,recordID:()=>Ea,recordId:()=>Ua,recordType:()=>Na,record_id:()=>wi,record_type:()=>Ia,ref:()=>Qa,result:()=>Kl,results:()=>Zl,setActionStatus:()=>ul,setActive:()=>bu,setAdditionalProperty:()=>il,setAtValue:()=>ol,setCompleted:()=>xu,setContentUrl:()=>fl,setDescription:()=>ml,setEmail:()=>bl,setFailed:()=>Vu,setID:()=>za,setId:()=>Ka,setIfNull:()=>tl,setItem:()=>wl,setItemListElement:()=>Il,setItems:()=>$l,setName:()=>Nl,setNumberOfItems:()=>jl,setObject:()=>Ol,setObjects:()=>Hl,setPosition:()=>Ll,setPotential:()=>yu,setPotentialAction:()=>Jl,setPotentialActions:()=>Gl,setRecordID:()=>Wa,setRecordId:()=>Ma,setRecordType:()=>va,setRecord_id:()=>Ba,setRecord_type:()=>Pa,setResult:()=>Xl,setResults:()=>eu,setTargetCollection:()=>nu,setTargetCollections:()=>ou,setText:()=>uu,setType:()=>Da,setUrl:()=>fu,setValue:()=>R,setValueIfNull:()=>$i,setValues:()=>De,targetCollection:()=>tu,targetCollections:()=>iu,text:()=>au,toRecordID:()=>Ai,toRecordId:()=>Xa,toRecord_id:()=>Re,toRecord_ids:()=>Ya,toRef:()=>ki,url:()=>du});var xe="en-CA";function Ia(e){return I(e,"@type")}function Ta(e){return I(e,"@type")}function Pa(e,t){return R(e,"@type",t)}function Na(e){return I(e,"@type")}function Ca(e){return I(e,"@type")}function va(e,t){return R(e,"@type",t)}function ja(e){return I(e,"@type")}function Ra(e){return I(e,"@type")}function Da(e,t){return R(e,"@type",t)}function wi(e){return I(e,"@id")}function Oa(e){return I(e,"@id")}function Ba(e,t){return R(e,"@id",t)}function Ua(e){return I(e,"@id")}function Ha(e){return I(e,"@id")}function Ma(e,t){return R(e,"@id",t)}function Ea(e){return I(e,"@id")}function La(e){return I(e,"@id")}function Wa(e,t){return R(e,"@id",t)}function Fa(e){return I(e,"@id")}function Ja(e){return I(e,"@id")}function za(e,t){return R(e,"@id",t)}function qa(e){return I(e,"@id")}function Ga(e){return I(e,"@id")}function Ka(e,t){return R(e,"@id",t)}function Re(e){return i.isArray(e)?e.map(t=>Re(t)):typeof e=="string"?e:wi(e)}function Ya(e){return Re(e)}function Ai(e){return Re(e)}function Xa(e){return Re(e)}function Za(e){return!i.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(t=>t!="@id")}function Qa(e){if(e?._isThingClass==!0)return record.ref;if(!e)return;let t=i._utilGetId(e);if(t)return{"@id":t}}function ki(e){return i.isArray(e)?e.map(t=>ki(t)):{"@id":Ai(e)}}function el(e){return gr(e)}function gr(e){if(!e)return[];if(i.isArray(e)){let r=[];for(let n of e)r=r.concat(gr(n));return[...new Set(r)]}return Object.keys(e?.record||e)}function I(e,t,r,n,s){let o=mr(e,t,n,s);return r=Number(r),isNaN(r)&&(r=0),o?.[r]??n}function R(e,t,r,n,s){if(n!==void 0){let o=i.getValues(e,t);for(;o.length-1<n;)o.push(null);o[n]=r,r=o}return De(e,t,r,s)}function $i(e,t,r,n,s){let o=I(e,t,n);return i.isNull(o)==!1?e:R(e,t,r,n,s)}function tl(e,t,r,n,s){return $i(e,t,r,n,s)}function _i(e,t,r){return Si(e,t,r)}function Si(e,t,r){return r=i.getValues(e,t).concat(r),De(e,t,r)}function mr(e,t,r,n){if(e===void 0)return[];if(t==null||t=="")return[];e=e?.record||e;let s=t.split("."),o=e;for(let l=0;l<s.length;l++){let[d,u]=pr(s[l]);d&&(o=o?.[d],o=i.toArray(o)),o=o.filter(p=>p?.["@language"]==n||p?.["@language"]==xe||p?.["@lannguage"]===void 0),o=o.map(p=>p?.["@value"]??p),o=i.toArray(o),o=o.map(p=>p?.[n]??p?.[xe]??p),o=i.toArray(o),l<s.length-1&&(o=o?.[u])}let a=i.toArray(o);return a.length==0&&r!==void 0?r:a}function De(e,t,r,n){e=e?.record||e;let s=t.split("."),o=e||{};for(let d=0;d<s.length-1;d++){let[u,p]=pr(s[d]);o[u]=o?.[u]||[];let m;for(o?.[u]?.[n]?(o[u][n]=i.toArray(o?.[u]?.[n]),m=o[u][n]):o?.[u]?.[xe]?(o[u][xe]=i.toArray(o?.[u]?.[xe]),m=o[u][xe]):(o[u]=i.toArray(o?.[u])||[],m=o[u]);m.length-1<p;)m.push({"@type":"Thing"});o=m?.[p]}let[a,l]=pr(s[s.length-1]);return o[a]=i.toArray(r),e}function rl(e,t,r){return Ii(e,t,r)==!0?e:_i(e,t,r)}function Ii(e,t,r){let n=mr(e,t);if(n.length==0)return!1;for(let s of n)if(i.isSame(s,r))return!0;return!1}function pr(e){if(e===void 0)return 0;let t=e.split("[")?.[0],r=(e.split("[")?.[1]||"").split("]")?.[0];return r=Number(r),r=isNaN(r)?0:r,[t,r]}function nl(e,t){let n=i.getValues(e,"additionalProperty").find(o=>i.getValue(o,"propertyID")==t);return i.getValue(n,"value")}function il(e,t,r,n){let s=i.getValues(e,"additionalProperty");s=s.filter(a=>i.getValue(a,"propertyID")!=t);let o={"@type":"PropertyValue","@id":i.randomUUID(),propertyID:t,value:r};return e=i.addValue(e,"additionalProperty",o),e}function sl(e){return i.getValues(e,"@value")}function ol(e,t){return i.setValues(e,"@value",t)}function al(e){return i.getValue(e,"actionStatus")}function ll(e){return i.getValue(e,"actionStatus")}function ul(e,t){return i.setValue(e,"actionStatus",t)}function dl(e){return i.getValue(e,"contentUrl")}function cl(e){return i.getValue(e,"contentUrl")}function fl(e,t){return i.setValue(e,"contentUrl",t)}function pl(e){return i.getValue(e,"description")}function gl(e){return i.getValue(e,"description")}function ml(e,t){return i.setValue(e,"description",t)}function hl(e){return i.getValue(e,"email")}function yl(e){return i.getValue(e,"email")}function bl(e,t){return i.setValue(e,"email",t)}function xl(e){return i.getValue(e,"item")}function Vl(e){return i.getValue(e,"item")}function wl(e,t){return i.setValue(e,"item",t)}function Al(e){return i.list.getItems(e)}function kl(e){return i.list.getItems(e)}function $l(e,t){return i.list.setItems(e,t)}function _l(e){return i.list.getItemListElement(e)}function Sl(e){return i.list.getItemListElement(e)}function Il(e,t){return i.list.setItemListElement(e,t)}function Tl(e){return i.getValue(e,"name")}function Pl(e){return i.getValue(e,"name")}function Nl(e,t){return i.setValue(e,"name",t)}function Cl(e){return i.getValue(e,"numberOfItems")}function vl(e){return i.getValue(e,"numberOfItems")}function jl(e,t){return i.setValue(e,"numberOfItems",t)}function Rl(e){return i.getValue(e,"object")}function Dl(e){return i.getValue(e,"object")}function Ol(e,t){return R(e,"object",t)}function Bl(e){return i.getValues(e,"object")}function Ul(e){return i.getValues(e,"object")}function Hl(e,t){return De(e,"object",t)}function Ml(e){return i.list.getPosition(e)}function El(e){return i.list.getPosition(e)}function Ll(e,t){return i.list.setPosition(e,t)}function Wl(e){return i.getValues(e,"potentialAction")}function Fl(e){return i.getValues(e,"potentialAction")}function Jl(e,t){return i.setValues(e,"potentialAction",t)}function zl(e){return i.getValues(e,"potentialAction")}function ql(e){return i.getValues(e,"potentialAction")}function Gl(e,t){return i.setValues(e,"potentialAction",t)}function Kl(e){return i.getValue(e,"result")}function Yl(e){return i.getValue(e,"result")}function Xl(e,t){return R(e,"result",t)}function Zl(e){return i.getValues(e,"result")}function Ql(e){return i.getValues(e,"result")}function eu(e,t){return De(e,"result",t)}function tu(e){return i.getValue(e,"targetCollection")}function ru(e){return i.getValue(e,"targetCollection")}function nu(e,t){return i.setValue(e,"targetCollection",t)}function iu(e){return i.getValues(e,"targetCollection")}function su(e){return i.getValues(e,"targetCollection")}function ou(e,t){return i.setValues(e,"targetCollection",t)}function au(e){return i.getValue(e,"text")}function lu(e){return i.getValue(e,"text")}function uu(e,t){return i.setValue(e,"text",t)}function du(e){return i.getValue(e,"url")}function cu(e){return i.getValue(e,"url")}function fu(e,t){return i.setValue(e,"url",t)}function pu(e){return i.getValue(e,"actionStatus")=="PotentialActionStatus"}function gu(e){return i.getValue(e,"actionStatus")=="ActiveActionStatus"}function mu(e){return i.getValue(e,"actionStatus")=="CompletedActionStatus"}function hu(e){return i.getValue(e,"actionStatus")=="FailedActionStatus"}function yu(e){return e=i.setValue(e,"actionStatus","PotentialActionStatus"),e=i.setValue(e,"startTime",void 0),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function bu(e){return e=i.setValue(e,"actionStatus","ActiveActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date),e=i.setValue(e,"endTime",void 0),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",void 0),e}function xu(e,t){return e=i.setValue(e,"actionStatus","CompletedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date),e=i.setValue(e,"error",void 0),e=i.setValue(e,"result",t??i.getValues(e,"result")),e}function Vu(e,t){return e=i.setValue(e,"actionStatus","FailedActionStatus"),e=i.setValue(e,"startTime",i.getValue(e,"startTime")??new Date),e=i.setValue(e,"endTime",i.getValue(e,"endTime")??new Date),e=i.setValue(e,"error",String(t)),e=i.setValue(e,"result",void 0),e}function wu(e){if(i.record_type(e)=="ImageObject")return i.getValue(e,"contentUrl");let t=i.getValue(e,"image.contentUrl");return t=t??i.getValue(e,"image.url"),t=t??i.getValue(e,"image"),t=typeof t=="string"?t:"",t}function Au(e){let t=i.getValue(e,"image.name");return t=t??i.getValue(e,"image.name"),t=t??i.record_id(e),t=typeof t=="string"?t:"",t}var br={};g(br,{_utilGetId:()=>Nu,getDataType:()=>$u,isArray:()=>yr,isBoolean:()=>Ti,isDate:()=>se,isJsonld:()=>ji,isNotDate:()=>Tu,isNotNull:()=>_u,isNotNumber:()=>Su,isNotString:()=>Iu,isNull:()=>C,isNumber:()=>st,isObject:()=>vi,isString:()=>Oe,randomUUID:()=>ku,toArray:()=>Ri,toDate:()=>Ci,toNumber:()=>Pi,toSingle:()=>Pu,toString:()=>Ni});function ku(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=e()%16;return(t==="x"?r:r&3|8).toString(16)})}function $u(e){if(C(e))return"Undefined";if(yr(e))return"Array";if(ji(e))return"Jsonld";let t=Ci(e);if(se(t))return"Date";let r=Pi(e);return st(r)?"Number":vi(e)?"Object":Oe(e)?'String"':Ti(e)?"Boolean":"Undefined"}function C(e,t=void 0){return e==null||typeof e=="string"&&e.length==0?!0:t==null?!1:i.getValues(e,t).length==0}function _u(e,t=void 0){return!C(e,t)}function Ti(e){return e===!0||e===!1}function st(e){return C(e)||e===""?!1:(e=Number(e),!isNaN(e))}function Su(e){return!st(e)}function Pi(e){if(!C(e)&&(e=Number(e),!isNaN(e)))return e}function Oe(e){return C(e)?!1:typeof e=="string"}function Iu(e){return!Oe(e)}function Ni(e){if(C(e))return"";if(Oe(e))return e;if(i.isValid(e))return i.exportToString(e);if(se(e))return e.toLocaleString();if(i.isArray(e)){let t=`Array of ${e.length} items.
--------------------
`,r=0,n=e.length-1;n=n>8?8:n;for(let s=0;s<n;s++)t+=Ni(e[s])+`
`;return t}return String(e)}function se(e){return C(e)||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Tu(e){return!se(e)}function Ci(e){if(C(e))return;if(se(e)==!0)return e;if(!isNaN(Number(e)))return;let t=Date.parse(e);if(!isNaN(t))return e=new Date(e),e=se(e)?e:void 0,e}function vi(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function ji(e){return C(e)?!1:!!(e?.["@id"]||e?.["@type"])}function yr(e){return C(e)?!1:Array.isArray(e)&&typeof e!="string"}function Ri(e){return C(e)?[]:(e=yr(e)?e:[e],e=e.filter(t=>t!=null),e)}function Pu(e){return e=Ri(e),e?.[0]??void 0}function Nu(e){let t=e;if(t!==void 0&&t!==null)return i.isArray(t)&&t.length==1&&(t=t[0]),i.isString(t)?t:(t=i.record_id(t),t??void 0)}var xr={};g(xr,{concat:()=>Cu,dedupe:()=>Di,deleteItem:()=>Ru,diff:()=>ju,filter:()=>Uu,find:()=>Bu,includes:()=>ot,insertItem:()=>Du,intersection:()=>vu,length:()=>Ou,search:()=>Bi,sort:()=>Ve,upsertItem:()=>Oi});function Di(e,t=!0){if(e=i.toArray(e),e.length<2)return e;let r=[];for(let n of e)ot(r,n)==!1&&(t==!0&&i.isValid(n)&&Bi(e,n).forEach(o=>n=i.merge(o,n)),r.push(n));return r=Ve(r),r}function ot(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t)==!0)return!0;return!1}function Cu(e,t,r=!0){e=i.toArray(e),t=i.toArray(t);let n=e.concat(t);return n=n.filter(s=>s!=null),r==!0&&(n=Di(n)),n=Ve(n),n}function Ve(e,t=void 0,r=void 0){return r=r??1,typeof r=="string"&&(r=r.toLowerCase()),r=r=="asc"?1:r,r=r=="desc"?-1:r,e=i.toArray(e),e.length<2||(t==null?r==1?e.sort((n,s)=>i.lt(n,s)==!0?-1:1):e.sort((n,s)=>i.gt(n,s)==!0?-1:1):r==1?e.sort((n,s)=>i.lt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1):e.sort((n,s)=>i.gt(i.getValue(n,t),i.getValue(s,t))==!0?-1:1)),e}function vu(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!0&&r.push(n);return r=Ve(r),r}function ju(e,t){e=i.toArray(e),t=i.toArray(t);let r=[];for(let n of e)ot(t,n)==!1&&r.push(n);return r=Ve(r),r}function Ru(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!1&&r.push(n);return r}function Oi(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)==!0?r.push(t):r.push(n);return r}function Du(e,t){return Oi(e,t)}function Ou(e){return e=i.toArray(e),e.length}function Bu(e,t){e=i.toArray(e);for(let r of e)if(i.isSame(r,t))return r}function Bi(e,t){e=i.toArray(e);let r=[];for(let n of e)i.isSame(n,t)&&r.push(n);return r}function Uu(e,t,r,n,s,o){return e=i.toArray(e),e.length==0?itemList:(i.isNotNull(t)&&(e=e.filter(a=>i.evaluate(a,t))),e=Ve(e,r,n),e.length==0||(o=i.toNumber(o),i.isNumber(o)&&(e=e.slice(o)),s=i.toNumber(s),i.isNumber(s)&&e.length>=s&&(e=slice(0,s))),e)}var Vr={};g(Vr,{exportToString:()=>Ui});function Ui(e){return Array.isArray(e)?Hu(e):i.record_type(e)=="ListItem"?Mu(e):i.record_type(e)=="ItemList"?Eu(e):i.record_type(e)=="Action"?Lu(e):i.getValue(e,"name")||i.getValue(e,"@id")}function Hu(e){let t=`Array (${e.length})
--------------------------
`;return e.forEach(r=>t+=Ui(r)+`
`),t}function Mu(e){return`${i.getValue(e,"position")} - ${i.getValue(e,"item.name")||i.getValue(e,"item.@id")}`}function Eu(e){let t=i.getValues(e,"itemListElement"),r=`ItemList${i.getValue(e,"name")||i.getValue(e,"@id")} (${t.length})
--------------------------
`;return t.forEach(n=>r+=toString(n)+`
`),r}function Lu(e){return`${i.getValue(e,"name")||i.getValue(e,"@id")} - ${i.getValue(e,"actionStatus")}`}var Ar={};g(Ar,{DatabaseHelper:()=>wr,testDB:()=>Wu});var wr=class{constructor(t){this._parentRecord,this.tempDB=new i.DB,this._toGet=[],this._retrieved=[],this.#t(t)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(t){this.#t(t)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(t){return this.#s(t)}get result(){return this.#e()}setCompleted(t){this.#n(t),this.#i(t)}#e(){let r=i.toArray(this.parentRecord).map(n=>this.tempDB.get(n?.["@id"]||n));return r=i.simplify(r),r=i.toArray(r),i.isArray(this.parentRecord)?r:r?.[0]||void 0}#t(t){let r=i.toArray(t);r=r.map(o=>typeof o=="string"?{"@id":o}:o),i.isArray(t)==!1&&(r=r?.[0]);let n=r;this.parentRecord=n,this.#r(n);let s=i.getChildren(n);this.#r(s)}#s(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.filter(s=>s),this.tempDB.set(r),this.#n(r),this.#i(r);let n=i.getChildren(r);this.#r(n)}#n(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let s=i.toArray(this._retrieved).concat(r);s=[...new Set(s)],this._retrieved=i.toArray(s)}#r(t){let r=i.toArray(t);r=r.map(o=>o?.record||o),r=r.map(o=>o?.["@id"]||o),r=[...new Set(r)],r=r.filter(o=>o);let n=i.toArray(this._retrieved);r=r.filter(o=>n.includes(o)==!1),r=i.toArray(this._toGet).concat(r),r=[...new Set(r)],this._toGet=i.toArray(r)}#i(t){let r=i.toArray(t);r=r.map(s=>s?.record||s),r=r.map(s=>s?.["@id"]||s),r=[...new Set(r)],r=r.filter(s=>s);let n=i.toArray(this._toGet);this._toGet=n.filter(s=>r.includes(s)==!1)}};function Wu(){}var vr={};g(vr,{add:()=>Gu,append:()=>Be,clean:()=>kr,decrementPositions:()=>Nr,duplicate:()=>td,ensurePositions:()=>Ae,ensurePreviousNextItem:()=>ut,filter:()=>rd,find:()=>W,findByItem:()=>_r,findByListItem:()=>$r,findByPosition:()=>Ji,getILE:()=>qu,getItem:()=>Me,getItemListElement:()=>S,getItems:()=>zi,getMaxPosition:()=>He,getMinPosition:()=>Cr,getPosition:()=>T,gt:()=>Fi,incrementPositions:()=>Pr,insert:()=>v,insertAfter:()=>Tr,insertBefore:()=>Ir,isItemList:()=>N,isListItem:()=>at,length:()=>zu,lt:()=>Wi,move:()=>Ku,moveAfter:()=>Qu,moveBefore:()=>Zu,moveDown:()=>Xu,moveUp:()=>Yu,prepend:()=>Mi,remove:()=>Li,replace:()=>Ei,setItem:()=>Gi,setItemListElement:()=>O,setItems:()=>qi,setPosition:()=>lt,sort:()=>Ue,toItemList:()=>Ju,toListItem:()=>we,toString:()=>Fu,toStringItemList:()=>Hi,toStringListItem:()=>Sr,upsert:()=>ed});function Fu(e){return N(e)?Hi(e):Sr(e)}function Hi(e){let t=[`ItemList ${i.getValue(e,"name")||i.record_id(e)}`],r=S(e);return t=t.concat(r.map(n=>Sr(n))),t.join(`
`)}function Sr(e){return`${T(e)} - ${i.getValue(e,"item.name")||i.record_id(e)}`}function N(e){return i.record_type(e)==="ItemList"}function Ju(e){if(N(e)==!1){let t=i.toArray(e);return e={"@type":"ItemList","@id":i.randomUUID(),itemListElement:t.map((r,n)=>we(r,n))},kr(e)}return kr(e)}function kr(e){e=i.setValueIfNull(e,"@id",i.randomUUID());let t=S(e);return t=t.map(r=>we(r)),t=Ae(t),t=ut(t),e=O(e,t),e=i.setValue(e,"numberOfItems",t.length),e}function zu(e){return S(e).length}function S(e){return i.getValues(e,"itemListElement")||[]}function qu(e){return S(e)}function O(e,t){return t=i.toArray(t),t=t.map((r,n)=>we(r)),t=Ae(t),t=ut(t),e=i.setValues(e,"itemListElement",t),e=i.setValue(e,"numberOfItems",t.length),e}function v(e,t,r){if(e=Ae(e),i.isArray(t)){let s=r;for(let o of t)e=v(e,o,s),(s||s===0)&&(s+=1);return e}t=we(t,r);let n=S(e);return n=n.filter(s=>i.record_id(s)!=i.record_id(t)),r=r??He(n),r=r??n.length,r=r>=0?r:0,n=Pr(n,r),n=Ue(n),n.push(t),e=O(e,n),e}function Ir(e,t,r){if(i.isArray(t)){for(let o of t)e=Ir(e,o,r);return e}let n=W(e,r);if(!n)return v(e,t);let s=T(n);return v(e,t,s)}function Tr(e,t,r){if(i.isArray(t)){for(let o of t)e=Tr(e,o,r);return e}let n=W(e,r);if(!n)return v(e,t);let s=T(n);return v(e,t,s+1)}function Mi(e,t){if(i.isArray(t)){for(let r=t.length-1;r>=0;r--)e=Mi(e,t?.[r],referenceItem);return e}return v(e,t,0)}function Be(e,t){if(i.isArray(t)){for(let s of t)e=Be(e,s,referenceItem);return e}let r=S(e);if(r.length==0)return v(e,t,0);let n=He(e);return n||n===0?v(e,t,n+1):v(e,t,r.length)}function Gu(e,t){return Be(e,t)}function Ku(e,t,r){return v(e,t,r)}function Yu(e,t){let r=W(e,t),n=T(r);return n==0?e:v(e,r,n-1)}function Xu(e,t){let r=W(e,t),n=T(r),s=He(e);return n==s?e:v(e,r,n+1)}function Zu(e,t,r){return Ir(e,t,r)}function Qu(e,t,r){return Tr(e,t,r)}function Ei(e,t,r){let n=S(e),s=[];for(let o of n){let a=Me(o);i.isSame(a,r)&&(a=Gi(o,t)),s.push(o)}return O(e,s)}function ed(e,t){return W(e,t)?Ei(e,t,i.ref(t)):Be(e,t)}function td(e,t){if(at(t)){let r=W(t);t=Me(r)}return Be(e,t)}function Li(e,t){if(i.isArray(t)){for(let o of t)e=Li(e,o);return e}e=Ae(e);let r=S(e),n=W(r,t),s=T(n);return r=r.filter(o=>i.isSame(o,n)==!1),r=Nr(r,s),e=O(e,r),e}function rd(e,t){let r=i.getItemListElement(e);return t&&(r=i.filter(r,t)),r}function at(e){return i.record_type(e)==="ListItem"}function we(e,t){return at(e)==!1&&(e={"@type":"ListItem","@id":i.randomUUID(),item:e}),e=i.setIfNull(e,"@id",i.randomUUID()),(t||t===0)&&(e=i.setValue(e,"position",t)),e}function Wi(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0?!1:r===void 0?!0:n===void 0?!1:r<n}function Fi(e,t){let r=T(e)??void 0,n=T(t)??void 0;return r===void 0&&n===void 0||r===void 0?!1:n===void 0?!0:r>n}function Ue(e){if(N(e)){let r=e,n=S(r),s=Ue(n);return O(r,s)}function t(r,n){return Wi(r,n)==!0?-1:Fi(r,n)==!0?1:0}return e.sort((r,n)=>t(r,n)),e}function W(e,t){if(!i.isNull(t))return i.isNumber(t)?Ji(e,t):at(t)?$r(e,t):i.record_type(t)?_r(e,t):_r(e,t)||$r(e,t)}function Ji(e,t){if(N(e)&&(e=S(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(T(r)==t)return r}}function $r(e,t){if(N(e)&&(e=S(e)),e=i.toArray(e),e.length!=0){for(let r of e)if(i.isSame(r,t))return r}}function _r(e,t){if(N(e)&&(e=S(e)),e=i.toArray(e),e.length!=0)for(let r of e){let n=Me(r);if(i.isSame(n,t))return r}}function T(e){let t=i.getValue(e,"position");return t=Number(t),t=isNaN(t)?void 0:t,t}function lt(e,t){return t=Number(t),t=isNaN(t)?void 0:t,t=t<0?0:t,T(e)==t||(e=i.setValue(e,"position",t)),e}function Pr(e,t){if(t=t??0,N(e)){let n=e;e=S(n);let s=Pr(e,t);return O(n,s)}let r=[];for(let n of e){let s=T(n);s>=t&&(n=lt(n,s+1)),r.push(n)}return r}function Nr(e,t){if(t=t??0,N(e)){let n=e;e=S(n);let s=Nr(e,t);return O(n,s)}let r=[];for(let n of e){let s=T(n);s!=0&&s>=t&&(n=lt(n,s-1)),r.push(n)}return r}function Ae(e,t){if(N(e)){let s=e;e=S(s);let o=Ae(e);return O(s,o)}if(e=i.toArray(e),e.length==0)return e;e=Ue(e);let r=t??Cr(e)??0,n=[];for(let s of e)s=lt(s,r),r+=1,n.push(s);return n}function Cr(e){if(N(e)){let s=S(s);return Cr(s)}e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.min(...t)}function He(e){if(N(e))return e=S(e),He(e);e=i.toArray(e);let t=e.map(n=>T(n));return t=t.filter(n=>isNaN(n)==!1),t.length==0?void 0:Math.max(...t)}function ut(e){if(N(e)){let r=e;e=S(r);let n=ut(e);return O(r,n)}e=i.toArray(e),e=Ue(e);let t=[];for(let r of e){let n=T(r),s=W(e,n-1),o=s?i.ref(s):void 0;r=i.setValue(r,"previousItem",o);let a=W(e,n+1),l=a?i.ref(a):void 0;r=i.setValue(r,"nextItem",l),t.push(r)}return t}function zi(e){if(N(e)){let n=S(e);return zi(n)}return e.map(r=>Me(r))}function qi(e,t){if(N(e)){let n=e;e=S(n);let s=qi(e);return O(n,s)}return e=i.toArray(e),t=i.toArray(t),t=t.map(n=>we(n)),e.concat(t)}function Me(e){return i.getValue(e,"item")}function Gi(e,t){return i.setValue(e,"item",t)}var Rr={};g(Rr,{appendAction:()=>es,deleteAction:()=>is,duplicateAction:()=>ns,execute:()=>Ki,insertAction:()=>Yi,insertAfterAction:()=>Zi,insertBeforeAction:()=>Xi,moveDownAction:()=>rs,moveUpAction:()=>ts,prependAction:()=>Qi,replaceAction:()=>jr});function Ki(e){if(i.isArray(e))return e.map(r=>Ki(r));let t=i.record_type(e);if(t=="ReplaceAction")return jr(e);if(t=="UpdateAction")return nd(e);if(t=="InsertAction")return Yi(e);if(t=="InsertBeforeAction")return Xi(e);if(t=="InsertAfterAction")return Zi(e);if(t=="MoveUpAction")return ts(e);if(t=="MoveDownAction")return rs(e);if(t=="AppendAction")return es(e);if(t=="PrependAction")return Qi(e);if(t=="ReplaceAction")return jr(e);if(t=="DuplicateAction")return ns(e);if(t=="DeleteAction")return is(e)}function nd(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.patch(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function Yi(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insert(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Xi(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertBefore(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Zi(e){let t=i.getObjects(e),r=i.getValue(e,"toLocation"),n=i.targetCollections(e);for(let s of n){for(let o of t)s=i.list.insertAfter(s,o,r);e=i.addValue(e,"result",s)}return e=i.setCompleted(e),e}function Qi(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.prepend(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function es(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.append(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function ts(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveUp(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function rs(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.moveDown(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function jr(e){let t=i.targetCollection(e),r=i.getValue(e,"replacer"),n=i.getValue(e,"replacee"),s=i.list.replace(s,r,n);return e=i.addValue(e,"result",t),e=i.setCompleted(e),e}function ns(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.duplicate(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}function is(e){let t=i.getObjects(e),r=i.targetCollections(e);for(let n of r){for(let s of t)n=i.list.remove(n,s);e=i.addValue(e,"result",n)}return e=i.setCompleted(e),e}var Or={};g(Or,{addPotentialActions:()=>Dr});function Dr(e,t){if(!e)return e;if(i.isArray(e))return e.map(n=>Dr(n,t));if(i.isObject(e)==!1)return e;let r=i.record_type(e);if(!r)return e;r=="Action"&&(e=sd(e,t)),r=="ItemList"&&(e=id(e,t));for(let n of Object.keys(e))e[n]=Dr(e[n],t);return e}function id(e,t){let r=i.getValues(e,"itemListElement"),n=i.getValues(e,"numberOfItems");for(let o=0;o<r.length;o++){let a=i.getValue(r[o],"position");a>0&&(r[o]=od(r[o],e,t)),a<n-1&&(r[o]=ad(r[o],e,t)),r[o]=ld(r[o],e,t),r[o]=ud(r[o],e,t)}let s={"@type":"Thing","@id":"_h:"+i.randomUUID(),name:"new record"};return e=dd(e,s,t),e}function sd(e,t){let r;return i.getValue(e,"actionStatus")||(r={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},e=K(e,t,r,"Set Potential"),r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=K(e,t,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Failed")),i.isPotential(e)&&(r={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=K(e,t,r,"Set Active"),r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Failed")),i.isActive(e)&&(r={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Completed"),r={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=K(e,t,r,"Set Failed")),e}function K(e,t,r,n){n=n||`Set ${propertyID} ${value}`,r["@id"]=i.record_id(e);let s={"@type":"UpdateAction",name:n,object:r,targetCollection:i.ref(e),url:t};return e=i.addValue(e,"potentialAction",s),e}function od(e,t,r,n){n=n||"Move up";let s={"@type":"MoveUpAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function ad(e,t,r,n){n=n||"Move down";let s={"@type":"MoveDownAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function ld(e,t,r,n){n=n||"Delete";let s={"@type":"DeleteAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function ud(e,t,r,n){n=n||"Duplicate";let s={"@type":"DuplicateAction",name:n,object:i.ref(e),targetCollection:i.ref(t),url:r};return e=i.addValue(e,"potentialAction",s),e}function dd(e,t,r,n){n=n||"Duplicate";let s={"@type":"AppendAction",name:n,object:t,targetCollection:i.ref(e),url:r};return e=i.addValue(e,"potentialAction",s),e}var i={dot:fe,...Lt,...Ft,...Ye,...lr,...dr,...fr,...hr,...br,...xr,...Vr,...Ar,list:vr,...Rr,potentialAction:Or};var ln={};g(ln,{default:()=>Gd,things:()=>_});var Br={};g(Br,{getContent:()=>fd,getIcon:()=>hd,getTitle1:()=>os,getTitle2:()=>cd,imageUrl:()=>gd,imageUrls:()=>md,thumbnailUrl:()=>pd});function os(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"givenName"),o=i.getValue(e,"familyName"),a=i.getValue(e,"name");if(r=="Person"){let l=[s,o];if(l=l.filter(d=>d!==void 0),l.length>0)return l.join(" ")}if(r=="ListItem"){let l=i.getValue(e,"item");return os(l)}return a||n||""}function cd(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o=i.getValue(e,"description");if(r=="Person")return s??"";if(r=="Action"){let a=i.getValue("actionStatus");return a=a||"",a=a.replace("ActionStatus",""),a??""}return o||""}function fd(e){let t;if(!e)return"";let r=i.record_type(e),n=i.record_id(e),s=i.getValue(e,"email"),o;return o=i.getValue(e,"abstract"),o&&typeof o=="string"||(o=i.getValue(e,"text"),o&&typeof o=="string")||(o=i.getValue(e,"description"),o&&typeof o=="string")?o:""}function pd(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"thumbnail.contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"thumbnail"),s&&typeof s=="string")||(s=i.getValue(e,"thumbnailUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")?s:""}function gd(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValue(e,"contentUrl"),s&&typeof s=="string"||(s=i.getValue(e,"image.contentUrl"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function md(e){let t=i.record_type(e),r=i.record_id(e),n,s;return s=i.getValues(e,"image.contentUrl"),s=s.filter(o=>o&&typeof o=="string"),s.length>0||(s=i.getValues(e,"image"),s&&typeof s=="string")||(s=i.getValue(e,"image"),s&&typeof s=="string")||s&&typeof s=="string"?s:""}function hd(e){let t=i.record_type(e);switch(t=t||"Thing",t.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return ss;case"action":return yd;case"person":return bd;case"organization":return xd;case"itemlist":return Vd;case"listitem":return wd;case"postaladdress":return Ad;case"product":return kd;case"webapi":return $d;case"website":return _d;case"webpage":return Sd;default:return ss}}var ss='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',yd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',bd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',xd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Vd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',wd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Ad='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',kd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',$d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',_d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Sd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Op=globalThis.crypto.randomUUID;function ct(e,t){if(Array.isArray(e))return e.map(n=>ct(n));if(!e?.["@type"]||!e?.["@id"])return e;for(let n of Object.keys(e))e[n]=ct(e);let r=i.record_type(e);return e=dt(e,"BookmarkAction","Bookmark",t),r=="ListItem"&&(e=dt(e,"MoveUpAction","Move Up",t),e=dt(e,"MoveDownAction","Move Down",t),e=dt(e,"DeleteAction","Delete",t)),e}function dt(e,t,r,n){let s={"@type":t,"@id":globalThis.crypto.randomUUID(),name:r,actionStatus:"PotentialActionStatus",object:{"@id":i.record_id(e)},url:n};return e=Id(e,s),e}function Id(e,t){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(t),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(t),e)}var Ur={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function ft(e){let t=[];return t=t.concat(Ur?.[e]?.properties||[]),Ur?.[e]?.parent&&(t=t.concat(ft(Ur[e].parent))),t}function pt(e=0,t=0){let r="Action";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:$.thing("Object thing"),instrument:$.thing("Instrument thing"),agent:$.person("Agent thing"),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(pt(a,t-1))}return s}function Hr(e=0){let t="Thing";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function gt(e=0,t=0,r=0){let n="CreativeWork";typeof e!="string"&&(e=n+"_"+String(e));let s="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":s,name:e,headline:"Headline "+e,text:Td(),image:$.image(),hasPart:[]};if(r==0&&(o.author=$.person(),o.datePublished=new Date().toISOString()),r<t)for(let a=0;a<3;a++){let l=e+"_"+String(a);o.hasPart.push(gt(l,t,r+1))}return o}function Td(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Ee(e=0){let t="ImageObject";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,contentUrl:"https://placehold.co/600x400"}}var Xp=globalThis.crypto.randomUUID;function Mr(e=5){let t="ItemList",r="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+t,n={"@type":t,"@id":r,itemListElement:[],numberOfItems:e},s;for(let o=0;o<e;o++){let a=Pd($.thing(o),o);s&&(s.nextItem={"@id":a?.["@id"]},a.previousItem={"@id":s?.["@id"]}),n.itemListElement.push(a),s=a}return n}function Pd(e,t=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:t,previousItem:"",nextItem:""}}function Er(e=0){let t="Offer";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,availability:"https://schema.org/InStock",itemOffered:$.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:$.organization("org_a")}}function Lr(e=0){let t="Organization";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,address:$.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function Wr(e=0){let t="Person";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:$.address()}}function Fr(e=0){let t="PostalAddress";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Jr(e=0){let t="Product";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t;return{"@type":t,"@id":r,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function zr(e=0){let t="ProductGroup";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n={"@type":t,"@id":r,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let s of["small","medium","large"])for(let o of["blue","white","red"]){let a=$.product(`variant ${s} ${o}`);a.size=s,a.color=o,a.isVariantOf={"@id":n?.["@id"]},n.hasVariant.push(a)}return n}function mt(e=0,t=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,name:e,image:Ee(e),hasPart:[]};if(t>0)for(let o=0;o<3;o++){let a=e+"_"+String(o);s.hasPart.push(mt(a,t-1))}return s}function qr(e=0){let t="Message";Number.isNaN(e)||(e=t+String(e));let r="https://www.testrecord.com/"+e+"#"+t,n=new Date;return{"@type":t,"@id":r,sender:$.person(0),recipient:[$.person(10),$.person(11),$.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function Gr(e=0,t=5){let r="Conversation";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,s={"@type":r,"@id":n,hasPart:[]};for(let o=0;o<t;o++){let a=e+"_"+String(o),l=$.message(a);l.sender=o%2==0?l.recipient[0]:l.recipient[1],l.recipient=o%2==0?l.recipient.toSpliced(0,1):l.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-t+o),l.dateSent=d,l.dateReceived=d,s.hasPart.push(l)}return s}var $={action:pt,article:gt,address:Hr,conversation:Gr,image:Ee,itemList:Mr,message:qr,offer:Er,organization:Lr,person:Wr,postalAddress:Fr,product:Jr,productGroup:zr,thing:mt,Action:pt,Article:gt,Address:Hr,Conversation:Gr,Image:Ee,ItemList:Mr,Message:qr,Offer:Er,Organization:Lr,Person:Wr,PostalAddress:Fr,Product:Jr,ProductGroup:zr,Thing:mt};var Yr={};g(Yr,{jsonToMarkdown:()=>Kr});function Kr(e,t=1){let r;try{r=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(r==null)return"";let n="",s="  ".repeat(t-1);if(Array.isArray(r)){if(r.length===0)return"";r.forEach((o,a)=>{typeof o=="object"&&o!==null?(n+=`${s}* **Record ${a+1}:**
`,n+=Kr(o,t+1)):n+=`${s}* ${o}
`})}else typeof r=="object"?Object.entries(r).forEach(([o,a])=>{a!==null&&typeof a=="object"?(n+=`${s}* **${o}:**
`,n+=Kr(a,t+1)):n+=`${s}* **${o}:** ${a}
`}):n+=`${s}* ${r}
`;return n}var Zr={};g(Zr,{jsonToYaml:()=>Le,yamlToJson:()=>Nd});function Le(e,t=0){let r=" ".repeat(t),n="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(o=>{if(n+=`${r}- `,typeof o=="object"&&o!==null){let a=Le(o,t+2).trimStart();n+=a}else n+=Le(o,0)}),n);let s=Object.keys(e);return s.length===0?`{}
`:(s.forEach(o=>{let a=e[o];n+=`${r}${o}:`,typeof a=="object"&&a!==null?n+=`
`+Le(a,t+2):n+=" "+Le(a,0)}),n)}function Nd(e){let t=e.split(`
`),r={},n=[{indent:-1,value:r,type:"object"}];for(let s of t){if(!s.trim()||s.trim().startsWith("#"))continue;let o=s.search(/\S/),a=s.trim();for(;n.length>1&&o<=n[n.length-1].indent;)n.pop();let l=n[n.length-1];if(a.startsWith("-")){l.type!=="array"&&l.type==="object"&&l.lastKey&&(l.value[l.lastKey]=[],n.push({indent:o,value:l.value[l.lastKey],type:"array"}));let d=n[n.length-1],u=a.substring(1).trim();if(u.includes(":")){let[p,...m]=u.split(":"),y=p.trim(),A=m.join(":").trim(),M=Xr(A),re={[y]:M};d.value.push(re),n.push({indent:o+2,value:re,type:"object",lastKey:y})}else d.value.push(Xr(u))}else if(a.includes(":")){let[d,...u]=a.split(":"),p=d.trim(),m=u.join(":").trim();l.lastKey=p,m===""?(l.value[p]={},n.push({indent:o,value:l.value[p],type:"object",lastKey:p})):l.value[p]=Xr(m)}}return r}function Xr(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var as={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var ls="DesignToken",us={css:{get:Rd},get:Qr,set:ds,getValue:vd,setValue:jd,sampleRecord:cs};function Qr(e){if(!e)return;let t=i.getAdditionalProperty(e,ls);return t=t||{},t}function ds(e,t){if(e)return t=t||{},e=i.setAdditionalProperty(e,ls,t),e}function vd(e,t){if(!e||!t||typeof t!="string")return;t=t.endsWith(".$value")?t.replace("$value",""):t;let r=Qr(e),n=Ie(r,t);return Ie(n,"$value")}function jd(e,t,r){if(!e||!t||typeof t!="string")return e;t=t.endsWith(".$value")?t.replace("$value",""):t;let n=Qr(),s=cs(),o=Ie(s,t);return o.$value=r,n=Ke(n,t,o),e=ds(e,n),e}function Rd(e,t="dt"){let r=[];function n(a,l=[]){for(let[d,u]of Object.entries(a)){if(u==null)continue;let p=[...l,d];if(typeof u=="object"&&"value"in u){let m=`--${p.map(A=>A.toLowerCase()).join("-")}`,y=s(u.value);r.push(`  ${m}: ${y};`)}else if(typeof u=="object"&&!Array.isArray(u))n(u,p);else{let m=`--${p.map(A=>A.toLowerCase()).join("-")}`,y=s(u);r.push(`  ${m}: ${y};`)}}}function s(a){return Array.isArray(a)?a.join(", "):typeof a=="number"?a===0?"0":`${a}px`:String(a).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return n(e,t?[t]:[]),`:root {
${r.join(`
`)}
}`}function cs(){return as}var c={markdown:Yr,yaml:Zr,designToken:us};var yt=class{constructor(t){this._objectID=i.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(t)}*[Symbol.iterator](){for(let t of this.properties)yield t}toString(){return en(this.record)}toJSON(){return this.record}toMD(){return c.markdown.jsonToMarkdown(this.record)}toYaml(){return c.yaml.jsonToYaml(this.record)}get(t){return this.getValues(t)}set(t,r){return this.setValues(t,r)}getValue(t){return i.getValue(this._record,t)}setValue(t,r){return this.#t(),this.#e(i.setValue(this._record,t,r))}getValues(t){return i.getValues(this._record,t)}setValues(t,r){return this.#t(),this.#e(i.setValues(this._record,t,r))}addValue(t,r){return this.#t(),this.#e(i.addValue(this._record,t,r))}addValues(t,r){return this.#t(),this.#e(i.addValues(this._record,t,r))}_setValueIfNotNull(t,r){i.isNotNull(r)&&this.setValue(t,r)}_setValueIfString(t,r){i.isNotNull(r)&&typeof r=="string"&&this.setValue(t,r)}_setValueIfNumber(t,r){i.isNotNull(r)&&!isNaN(r)&&this.setValue(t,r)}_setValueIfRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)==t&&this.setValue(r,n)}_setValueIfNotRecordType(t,r,n){i.isNotNull(n)&&i.record_type(n)&&i.record_type(n)!=t&&this.setValue(r,n)}get objectID(){return this._objectID}set objectID(t){this._objectID=t}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(t){try{process.env.baseUrl=t}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=ye(ht(this._record),this.baseUrl)),i.simplify(ht(this._record))}set record(t){return this.#t(),this.#e(t)}get ref(){return{"@id":this.record_id}}set ref(t){this.record_id=t?.["@id"]||t?.record_id||t}_loadRecord(t){let r=i.record_type(t);return r&&r==this._defaultRecordType?(this.record=t?.record||t,!0):(this.record_type=this._defaultRecordType,!1)}#e(t){t=t||{},t?._isThingClass==!0&&(this._callbacks={...this._callbacks,...t._callbacks},t=t?.record||t),this._currentRecord=i.clone(ht(t)),this._record=t,Object.keys(this._record).forEach(r=>this._record[r]=Q(this._record?.[r])),this.processCallbacks()}#t(){this._previousRecord=i.clone(ht(this.record))}get delta(){return i.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(t){this.setValue("@type",t)}get record_id(){return this.getValue("@id")}set record_id(t){return this.setValue("@id",t)}get properties(){return ft(this.record_type)}get hash(){return i.getHash(this.record)}registerToChildren(){for(let t of Object.keys(this.record))if(!t.startsWith("@")){let r=this.getValues(t);for(let n of r)n?._isThingClass==!0&&n.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(t,r=void 0,n=!1){r=r??i.randomUUID();let s={id:r,includeChildren:n,callbackFn:t};return this._callbacks=this?._callbacks??{},this._callbacks[r]=s,r}addListenerParent(t,r=void 0){return this.addListener(t,r,!1)}addListenerNested(t,r=void 0){return this.addListener(t,r,!0)}addEventListener(t,r=void 0,n=!1){return this.addListener(t,r,n)}removeListener(t){delete this._callbacks[t]}removeEventListener(t){return this.removeListener(t)}processCallbacks(){let t=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let r=i.getHash(this._previousRecord,!1)!=i.getHash(this._currentRecord,!1),n=r==!0||i.getHashNested(this._previousRecord)!=i.getHashNested(this._currentRecord);r==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),r==!1&&n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(t,r,n=!1){let s={"@type":"UpdateAction","@id":i.randomUUID(),object:t,result:r,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let o of Object.keys(this._callbacks))try{if(n==!0&&this._callbacks?.[o]?.includeChildren==!1)continue;this._callbacks?.[o].callbackFn(s)}catch(a){console.log("Callback failed: ",o,String(a),s)}}static toString(t){return en(t)}static toMD(t){return c.markdown.jsonToMarkdown(t)}static toYaml(t){return c.yaml.jsonToYaml(t)}static fromYaml(t){let r=this.name;return new _[r](c.yaml.yamlToJson(t))}static isThing(t){return t?._isThingClass==!0}static toThing(t){return Q(t)}static example(t=0,r=5){let n=this.name;return new _[n]($[n](t,r))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(t){process.env.baseUrl=t}static getProperties(t){return ft(t)}static getValue(t,r){return i.getValue(t,r)}static setValue(t,r,n){return i.setValue(t,r,Q(n))}static getValues(t,r){return i.getValues(t,r)}static setValues(t,r,n){return i.setValues(t,r,Q(n))}static addValue(t,r,n){return i.addValue(t,r,Q(n))}static addValues(t,r,n){return i.addValues(t,r,Q(n))}static flatten(t){return i.flatten(t)}static addPotentialActions(t){return ct(t)}static addAdditionalProperty(t,r,n){return Dd(t,"additionalProperty",r,n)}};function ht(e){function t(n){if(Array.isArray(n))return n.map(s=>t(s));if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString();if(n?._record)return t(n._record);if(n?.["@type"]||n?.["@id"]){let s={};for(let o of Object.keys(n))s[o]=t(n?.[o]);return s}return n}let r=t(e);try{r=JSON.parse(JSON.stringify(r))}catch{}return r}function Q(e){if(Array.isArray(e))return e.map(t=>Q(t));if(e?._isThingClass!=!0){let t=i.record_type(e);if(t){let r=_?.[t]||_.Thing,n=new r;n.record=e,e=n}}if(e?._isThingClass==!0)for(let t of Object.keys(e._record))e._record[t]=Q(e._record?.[t]);return e}function en(e){if(Array.isArray(e)){let o=e.map(a=>en(a));return o=o.join(`
`),o}let t=i.getValue(e,"@type"),r=i.getValue(e,"@id"),n=i.getValue(e,"name"),s=`${t||""}/${r||""}`;return n&&(s=`${s} - ${n}`),s}function Dd(e,t,r,n){let s=new _.PropertyValue;return s.propertyID=r,s.value=n,e=i.addValues(e,t,s.record),e}var V=class extends yt{constructor(t){super(),this._defaultRecordType="Thing",this._loadRecord(t),this._setValueIfString("name",t)}get cleanUrl(){let t=this.getValue(this.record,"url");return t=b.url.clean(value),t}set cleanUrl(t){url=b.url.clean(t),this.url=url}get description(){return this.getValue("description")}set description(t){return this.setValue("description",t)}get sameAs(){return this.getValue("sameAs")}set sameAs(t){return this.setValue("sameAs",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get image(){return this.getValue("image")}set image(t){return this.setValue("image",t)}get name(){return this.getValue("name")}set name(t){return this.setValue("name",t)}get owner(){return this.getValues("owner")}set owner(t){return this.setValues("owner",t)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(t){return this.setValues("potentialAction",t)}get sameAs(){return this.getValues("sameAs")}set sameAs(t){return this.setValues("sameAs",t)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(t){return this.setValues("subjectOf",t)}get url(){return this.getValue("url")}set url(t){this.setValue("url",t),this.record_id=ye(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(t,r){let n=this.getValues("additionalProperty");n=n.filter(o=>o?.propertyID!=t);let s={"@type":"PropertyValue","@id":i.randomUUID()};s.propertyID=t,s.value=r,n.push(s),this.setValues("additionalProperty",n)}removeAdditionalProperty(t){let r=this.getValues("additionalProperty");r.find(s=>s?.propertyID==t)&&(r=r.filter(s=>s?.propertyID!=t),this.setValues("additionalProperty",r))}getAdditionalProperty(t){return this.getValues("additionalProperty").find(s=>s?.propertyID==t)?.value}};var oe=class extends V{constructor(t){super(),this._defaultRecordType="ItemList",this._loadRecord(t),this._setValueIfString("name",t);for(let r of i.toArray(t))i.record_type(r)!=="ItemList"&&this.add(r)}toString(){i.list.toString(this.record)}get itemListElement(){return i.list.getItemListElement(this.record)}set itemListElement(t){this.record=i.list.setItemListElement(t)}get items(){return i.list.getItems(this.record)}set items(t){return this.add(t)}length(){return this.itemListElement.length}prepend(t){this.record=i.list.insert(this.record,t,0)}append(t){this.record=i.list.append(this.record,t)}add(t){this.record=i.list.append(this.record,t)}insert(t,r){this.record=i.list.insert(this.record,t,r)}delete(t){this.record=i.list.remove(this.record,t)}replace(t,r){this.record=i.list.replace(this.record,t,r)}move(t,r){this.record=i.list.move(this.record,t,r)}moveUp(t){this.record=i.list.moveUp(this.record,t)}moveDown(t){this.record=i.list.moveDown(this.record,t)}upsert(t){this.record=i.list.upsert(this.record,t)}static clean(t){return i.list.clean(t)}static length(t){return i.list.length(t)}static getItem(t,r){return i.list.getItem(t,r)}static prepend(t,r){return i.list.insert(t,r,0)}static append(t,r){return i.list.append(t,r)}static add(t,r){return i.list.insert(t,r,getLength(t))}static insert(t,r,n){return i.list.insert(t,r,n)}static delete(t,r){return i.list.remove(t,r)}static replace(t,r,n){return i.list.replace(t,r,n)}static move(t,r,n){return i.list.move(t,r,n)}static moveUp(t,r){return i.list.moveUp(t,r)}static moveDown(t,r){return i.list.moveDown(t,r)}static moveBefore(t,r,n){return i.list.moveBefore(t,r,n)}static moveAfter(t,r,n){return i.list.moveAfter(t,r,n)}static upsert(t,r){return i.list.upsert(t,r)}static duplicate(t,r){return duplicateItem(t,r)}static search(t,r,n,s,o,a){return search(t,r,n,s,o,a)}};var j=class extends V{constructor(t){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(t),this._setValueIfString("name",t)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(t){return this.setValue("valueRequired",t)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(t){return this.setValue("defaultValue",t)}get valueName(){return this.getValue("valueName")}set valueName(t){return this.setValue("valueName",t)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(t){return this.setValue("readonlyValue",t)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(t){return this.setValue("multipleValues",t)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(t){return this.setValue("valueMinLength",t)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(t){return this.setValue("valueMaxLength",t)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(t){return this.setValue("valuePattern",t)}get minValue(){return this.getValue("minValue")}set minValue(t){return this.setValue("minValue",t)}get maxValue(){return this.getValue("maxValue")}set maxValue(t){return this.setValue("maxValue",t)}get stepValue(){return this.getValue("stepValue")}set stepValue(t){return this.setValue("stepValue",t)}test(t){return fs(this.record,t)}static test(t,r){return fs(t,r)}};function fs(e,t){let r={"@type":"Action",name:"Validate PPS",object:e,instrument:t,actionStatus:"CompletedActionStatus"};if(t=JSON.parse(JSON.stringify(t)),Object.keys(t).foreach(n=>t[k]=Array.isArray(t?.[k])?t?.[k][0]:t?.[k]),t.valueRequired==!0&&!e&&e!=0)return r.actionStatus="FailedActionStatus",r.error="A value is required, no value provided.",r;if(t.multipleValues==!1&&Array.isArray(e))return r.actionStatus="FailedActionStatus",r.error="Cannot contain multiple values.",r;if(t.valueMinLength&&String(e).length<t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value does not meet minimum length.",r;if(t.valueMaxLength&&String(e).length>t.valueMinLength)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.minValue&&e<t.minValue)return r.actionStatus="FailedActionStatus",r.error="Value is smaller than minimum value allowed.",r;if(t.maxValue&&e>t.maxValue)return r.actionStatus="FailedActionStatus",r.error="Value exceeds maximum length.",r;if(t.valuePattern){let n="hello",o=new RegExp(t.valuePattern,"gi");if(e.test(o)==!1)return r.actionStatus="FailedActionStatus",r.error="Value doesn't match pattern.",r}return r}var We=class extends V{constructor(t,r){super(),this._defaultRecordType="Action",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=i.setPotential(this.record)}setActive(){this.record=i.setActive(this.record)}setCompleted(t){this.record=i.setCompleted(this.record,t)}setFailed(t){this.record=i.setFailed(this.record,t)}get isPotential(){return i.isPotential(this.record)}get isActive(){return i.isActive(this.record)}get isCompleted(){return i.isCompleted(this.record)}get isFailed(){return i.isFailed(this.record)}get object(){return this.getValues("object")}set object(t){return this.setValues("object",t)}get instrument(){return this.getValues("instrument")}set instrument(t){return this.setValues("instrument",t)}get agent(){return this.getValues("agent")}set agent(t){return this.setValues("agent",t)}get result(){return this.getValues("result")}set result(t){return this.setValues("result",t)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(t){return this.setValue("actionStatus",t)}get startTime(){return this.getValue("startTime")}set startTime(t){return this.setValue("startTime",t)}get endTime(){return this.getValue("endTime")}set endTime(t){return this.setValue("endTime",t)}get error(){return this.getValue("error")}set error(t){return this.setValue("error",t)}addPart(t){return this.addValues("hasPart",t)}addMinValue(t,r){this.record=hs(this.record,t,r)}addMaxValue(t,r){this.record=ys(this.record,t,r)}addMinLength(t,r){this.record=bs(this.record,t,r)}addMaxLength(t,r){this.record=xs(this.record,t,r)}addDefaultValue(t,r){this.record=Vs(this.record,t,r)}addValueRequired(t,r){this.record=ws(this.record,t,r)}addValuePattern(t,r){this.record=ps(this.record,t,r)}addMultipleValues(t,r){this.record=gs(this.record,t,r)}addStepValue(t,r){this.record=ms(this.record,t,r)}testConditions(){return tn(this.record)}getInputconditions(){return B(this.record)}addInputCondition(t,r){this.record=this.addValues(t+"-input",r)}getOutputConditions(){return Od(this.record)}addOutputCondition(t,r){this.record=this.addValues(t+"-output",r)}test(){return tn(this.record)}static setPotential(t){return i.setPotential(t)}static setActive(t){return i.setActive(t)}static setCompleted(t,r){return i.setCompleted(t,r)}static setFailed(t,r){return i.setFailed(t,r)}static isPotential(t){return i.isPotential(t)}static isActive(t){return i.isActive(t)}static isCompleted(t){return i.isCompleted(t)}static isFailed(t){return i.isFailed(t)}static addMinValue(t,r,n){return hs(t,r,n)}static addMaxValue(t,r,n){return ys(t,r,n)}static addMinLength(t,r,n){return bs(t,r,n)}static addMaxLength(t,r,n){return xs(t,r,n)}static addDefaultValue(t,r,n){return Vs(t,r,n)}static addValueRequired(t,r,n){return ws(t,r,n)}static addValuePattern(t,r,n){return ps(t,r,n)}static addMultipleValues(t,r,n){return gs(t,r,n)}static addStepValue(t,r,n){return ms(t,r,n)}static test(t){return tn(t)}};function B(e,t){if(t){t.endsWith("-input")==!1&&(t=t+"-input");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n in Object.keys(e))n.endsWith("-input")&&(n=n.replace("-input",""),r.push({k:e?.[n]}));return r}function Y(e,t,r){return t.endsWith("-input")==!1&&(t=t+"-input"),e[t]=r,e}function Od(e,t){if(t){t.endsWith("-output")==!1&&(t=t+"-output");let n=e?.[t];return n=Array.isArray(n)?n[0]:n,n}let r=[];for(let n in Object.keys(e))n.endsWith("-output")&&(n=n.replace("-output",""),r.push({k:e?.[n]}));return r}function ps(e,t,r){let n=B(e,t)||new j;return n.valuePattern=r,e=Y(e,t,n),e}function gs(e,t,r){let n=B(e,t)||new j;return n.multipleValues=r,e=Y(e,t,n),e}function ms(e,t,r){let n=B(e,t)||new j;return n.stepValue=r,e=Y(e,t,n),e}function hs(e,t,r){let n=B(e,t)||new j;return n.minValue=r,e=Y(e,t,n),e}function ys(e,t,r){let n=B(e,t)||new j;return n.maxValue=r,e=Y(n.record),e}function bs(e,t,r){let n=B(e,t)||new j;return n.valueMinLength=r,e=Y(e,t,n),e}function xs(e,t,r){let n=B(e,t)||new j;return n.valueMaxLength=r,e=Y(e,t,n),e}function Vs(e,t,r){let n=B(e,t)||new j;return n.defaultValue=r,e=Y(e,t,n),e}function ws(e,t,r){let n=B(e,t)||new j;return n.valueRequired=r,e=Y(e,t,n),e}function tn(e){let t=B(e);for(let r of Object.keys(t))if(j.test(t[r],e?.[r])==!1)return!1;return!0}var F=class extends We{constructor(t,r){super(),this._defaultRecordType="UpdateAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get targetCollection(){return this.getValues(this.record,"targetCollection")}set targetCollection(t){this.record=this.setValues(this.record,"targetCollection",t)}get toLocation(){return this.getValues(this.record,"toLocation")}set toLocation(t){this.record=this.setValues(this.record,"toLocation",t)}},bt=class extends F{constructor(t,r){super(),this._defaultRecordType="AddAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},xt=class extends F{constructor(t,r){super(),this._defaultRecordType="DeleteAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},Vt=class extends F{constructor(t,r){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}get replacer(){return this.getValues(this.record,"replacer")}set replacer(t){this.record=this.setValues(this.record,"replacer",t)}get replacee(){return this.getValues(this.record,"replacee")}set replacee(t){this.record=this.setValues(this.record,"replacee",t)}},wt=class extends F{constructor(t,r){super(),this._defaultRecordType="InsertAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},At=class extends F{constructor(t,r){super(),this._defaultRecordType="AppendAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}},kt=class extends F{constructor(t,r){super(),this._defaultRecordType="PrependAction",this._loadRecord(t),this._setValueIfString("name",t),this._setValueIfNotNull("object",r)}};var $t=class extends V{constructor(t){super(),this.record_type="BrandDesign",t?.["@type"]=="BrandDesign"&&(this.record=t),this.basePath=void 0}toString(){return Bd(this.record)}get(t){return c.designToken.getValue(this.record,t)}set(t,r){return c.designToken.setValue(this.record,t,r)}get token(){return c.designToken.get(this.record)}set token(t){this.record=c.designToken.set(this.record,t)}get primary(){return c.designToken.getValue(this.record,"color.brand.primary")}set primary(t){this.record=c.designToken.setValue(this.record,"color.brand.primary",t)}get secondary(){return c.designToken.getValue(this.record,"color.brand.secondary")}set secondary(t){this.record=c.designToken.setValue(this.record,"color.brand.secondary",t)}get tertiary(){return c.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(t){this.record=c.designToken.setValue(this.record,"color.brand.tertiary",t)}get neutral(){return c.designToken.getValue(this.record,"color.neutral.surface")}set neutral(t){this.record=c.designToken.setValue(this.record,"color.neutral.surface",t)}get danger(){return c.designToken.getValue(this.record,"color.feedback.danger")}set danger(t){this.record=c.designToken.setValue(this.record,"color.feedback.danger",t)}get textPrimary(){return c.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(t){this.record=c.designToken.setValue(this.record,"color.neutral.text.primary",t)}get textSecondary(){return c.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(t){this.record=c.designToken.setValue(this.record,"color.neutral.text.secondary",t)}get heading(){return new _t(this,"typography.heading-lg")}get body(){return new _t(this,"typography.body-md")}get spacingSm(){return c.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(t){return c.designToken.setValue(this.record,"spacing.scale.sm",t)}get spacingMd(){return c.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(t){return c.designToken.setValue(this.record,"spacing.scale.md",t)}get spacingLg(){return c.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(t){return c.designToken.setValue(this.record,"spacing.scale.lg",t)}get borderSm(){return c.designToken.getValue(this.record,"border.radius.sm")}set borderSm(t){return c.designToken.setValue(this.record,"border.radius.sm",t)}get borderMd(){return c.designToken.getValue(this.record,"border.radius.md")}set borderMd(t){return c.designToken.setValue(this.record,"border.radius.md",t)}get shadow(){return new rn(this,"shadow.elevation-md")}sample(){return c.designToken.getSampleRecord()}},_t=class{constructor(t,r){this.base=t,this.basePath=w(r)}get fontFamily(){return c.designToken.getValue(record,w(this.basePath,"fontFamily"))}set fontFamily(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get fontWeight(){return c.designToken.getValue(record,w(this.basePath,"fontWeight"))}set fontWeight(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get fontSize(){return c.designToken.getValue(record,w(this.basePath,"fontSize"))}set fontSize(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get lineHeight(){return c.designToken.getValue(record,w(this.basePath,"lineHeight"))}set lineHeight(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get letterSpacing(){return c.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set letterSpacing(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}get family(){return c.designToken.getValue(record,w(this.basePath,"fontFamily"))}set family(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontFamily"),t)}get weight(){return c.designToken.getValue(record,w(this.basePath,"fontWeight"))}set weight(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontWeight"),t)}get size(){return c.designToken.getValue(record,w(this.basePath,"fontSize"))}set size(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"fontSize"),t)}get height(){return c.designToken.getValue(record,w(this.basePath,"lineHeight"))}set height(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"lineHeight"),t)}get spacing(){return c.designToken.getValue(record,w(this.basePath,"letterSpacing"))}set spacing(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"letterSpacing"),t)}},rn=class{constructor(t,r){this.base=t,this.basePath=w(r)}get color(){return c.designToken.getValue(record,w(this.basePath,"color"))}set color(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"color"),t)}get offsetX(){return c.designToken.getValue(record,w(this.basePath,"offsetX"))}set offsetX(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"offsetX"),t)}get offsetY(){return c.designToken.getValue(record,w(this.basePath,"offsetY"))}set offsetY(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"offsetY"),t)}get blur(){return c.designToken.getValue(record,w(this.basePath,"blur"))}set blur(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"blur"),t)}get spread(){return c.designToken.getValue(record,w(this.basePath,"spread"))}set spread(t){this.base.record=c.designToken.setValue(record,w(this.basePath,"spread"),t)}};function w(e,t,r){let n=[e,t,r];n=n.filter(o=>o!=null&&o!="");let s=n.join(".");return s=s.replaceAll("..","."),s}function Bd(e){return`${i.record_type(e)} for ${i.getValue(e,url)}
    
    `}var D=class extends V{constructor(t){super(),this._defaultRecordType="CreativeWork",this._loadRecord(t),this._setValueIfString("name",t)}get about(){return this.getValues("about")}set about(t){return this.setValues("about",t)}get abstract(){return this.getValues("abstract")}set abstract(t){return this.setValues("abstract",t)}get author(){return this.getValues("author")}set author(t){return this.setValues("author",t)}get comment(){return this.getValues("comment")}set comment(t){return this.setValues("comment",t)}get contributor(){return this.getValues("contributor")}set contributor(t){return this.setValues("contributor",t)}get creator(){return this.getValues("creator")}set creator(t){return this.setValues("creator",t)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(t){return this.setValues("dateCreated",t)}get dateModified(){return this.getValues("dateModified")}set dateModified(t){return this.setValues("dateModified",t)}get datePublished(){return this.getValues("datePublished")}set datePublished(t){return this.setValues("datePublished",t)}get editor(){return this.getValues("editor")}set editor(t){return this.setValues("editor",t)}get hasPart(){return this.getValues("hasPart")}set hasPart(t){return this.setValues("hasPart",t)}get headline(){return this.getValue("headline")}set headline(t){return this.setValue("headline",t)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(t){return this.setValues("inLanguage",t)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(t){return this.setValues("isPartOf",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get provider(){return this.getValues("provider")}set provider(t){return this.setValues("provider",t)}get publisher(){return this.getValues("publisher")}set publisher(t){return this.setValues("publisher",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(t){return this.setValues("sourceOrganization",t)}get text(){return this.getValue("text")}set text(t){return this.setValue("text",t)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(t){return this.setValues("thumbnail",t)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(t){return this.setValues("thumbnailUrl",t)}get version(){return this.getValues("version")}set version(t){return this.setValues("version",t)}get video(){return this.getValues("video")}set video(t){return this.setValues("video",t)}get wordCount(){return this.getValues("wordCount")}set wordCount(t){return this.setValues("wordCount",t)}};var U=class extends D{constructor(t,r,n,s,o,a){super(),this._defaultRecordType="Message",t?.["@type"]=="Message"?this.record=t:(this.record_type="Message",this.sender=t,this.recipient=r,this.headline=n,this.text=s,this.dateSent=o,this.dateReceived=a)}toString(){return sn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(t){return this.setValues("bccRecipient",ke(t))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(t){return this.setValues("ccRecipient",ke(t))}get dateRead(){return this.getValue("dateRead")}set dateRead(t){return this.setValue("dateRead",t)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(t){return this.setValue("dateReceived",t)}get dateSent(){return this.getValue("dateSent")}set dateSent(t){return this.setValue("dateSent",t)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(t){return this.setValues("messageAttachment",t)}get recipient(){return this.getValues("recipient")}set recipient(t){return this.setValues("recipient",ke(t))}get sender(){return this.getValue("sender")}set sender(t){return this.setValue("sender",ke(t))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(t){return this.setValues("toRecipient",ke(t))}get subject(){return this.headline}set subject(t){this.headline=t}get body(){return this.text}set body(t){this.text=t}get gmail(){return ks(this.record)}set gmail(t){this.record=As(t)}get outlook(){return _s(this.record)}set outlook(t){this.record=$s(t)}static toString(t){return sn(t)}static fromGmail(t){return As(t)}static toGmail(t){return ks(t)}static fromOutlook(t){return $s(t)}static toOutlook(t){return _s(t)}static lt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n<s}static gt(t,r){t=t?.record||t,r=r?.record||r;let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n>s}static sort(t){return t.sort((r,n)=>{r=r?.record||r,n=n?.record||n;let s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived")),o=new Date(i.getValue(n,"dateSent")||i.getValue(n,"dateCreated")||i.getValue(n,"dateReceived"));return s.getTime()-o.getTime()}),t}};function sn(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(u=>sn(u)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let t=i.getValue(e,"sender"),r=t?.email||t?.name||"";r=nn(r,20);let s=i.getValues(e,"recipient").map(u=>u?.email||u?.name||"");s=nn(s,25);let o=i.getValue(e,"headline")||"";o.length>20&&(o=nn(o,30));let a=i.getValue(e,"dateSent")||i.getValue(e,"dateReceived")||"",l="";try{l=new Intl.DateTimeFormat("en-US").format(a)}catch{}return`${r} | ${s} | ${o} | ${l}`}function nn(e,t=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let r=e.join(", ");if(r.length>t){let n=`... [${e.length}]`;r=r.slice(0,t-n.length)+n}return r}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>t?`${e.slice(0,t-3)}...`:e)}function ke(e){return e?Array.isArray(e)?e.map(t=>ke(t)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function As(e){let t=new U;return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function ks(e){let t={};return t.sender=e.sender,t.recipient=e.recipient,t.subject=e.subject,t.text=e.text,t.dateSent=e.dateSent,t.dateReceived=e.dateReceived,t}function $s(e){let t=new U;return t.record_id="https://www.outlook.com/message/"+t.id,t.sender=e.sender,t.recipient=e.toRecipients.emailAddress,t.subject=e.subject,t.text=e.text,t.dateSent=e.sentDateTime,t.dateReceived=e.receivedDateTime,t}function _s(e){let t={};return t.sender=e.sender,t.toRecipients=e.recipient,t.subject=e.subject,t.text=e.text,t.sentDateTime=e.dateSent,t.receivedDateTime=e.dateReceived,t}var It=class extends D{constructor(t){super(),this._defaultRecordType="Conversation",t?.["@type"]=="Conversation"?this.record=t:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Ud(this.record)}get messages(){let t=this.getValues("hasPart").filter(r=>i.record_type(r)=="Message");return t=U.sort(t),t}set messages(t){this.setValues("hasPart",t)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return Ss(this.record)}add(t,r,n,s,o,a){this.record=St(this.record,t,r,n,s,o,a)}addMessage(t,r,n,s,o,a){this.record=St(this.record,t,r,n,s,o,a)}newMessage(t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);this.messages=this.messages.push(l)}static getParticipants(t){return Ss(t)}static newMessage(t,r,n,s,o,a,l){return St(t,r,n,s,o,a,l)}static addMessage(t,r,n,s,o,a,l){return St(t,r,n,s,o,a,l)}static getMessages(t){return Fe(t)}static getFirstMessage(t){let r=Fe(t);return r.length>0?r[0]:void 0}static getLastMessage(t){let r=Fe(t);return r.length>0?r[r.length-1]:void 0}};function Ud(e){let t=Fe(e),r=`Conversation with ${t.length} messages:
`;return r+=U.toString(t),r}function St(e,t,r,n,s,o,a){let l=new U(t,r,n,s,o,a);return e=i.addValues(e,"hasPart",l),e}function Fe(e){let t=i.getValues(e,"hasPart").filter(r=>i.getValue(r,"@type")=="Message");return t=Hd(t),t}function Hd(e){return e.sort((t,r)=>{let n=new Date(i.getValue(t,"dateSent")||i.getValue(t,"dateCreated")||i.getValue(t,"dateReceived")),s=new Date(i.getValue(r,"dateSent")||i.getValue(r,"dateCreated")||i.getValue(r,"dateReceived"));return n-s}),e}function Ss(e){let t=Fe(e),r=new Set;return t.forEach(n=>{let s=i.getValue(n,"sender");s&&r.add(s),i.getValues(n,"recipient").forEach(a=>{r.add(a)})}),Array.from(r)}var $e=class extends V{constructor(t,r,n,s){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.item=t,this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=s)}toString(){return Md(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(t){return this.setValue("dateCreated",t)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(t){return this.setValue("dateDeleted",t)}get dateModified(){return this.getValue("dateModified")}set dateModified(t){return this.setValue("dateModified",t)}get item(){return this.getValue("item")}set item(t){this.setValue("item",t),this.#e()}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}get sourceRecordID(){let t=this.getAdditionalProperty("sourceRecordID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-1],t}set sourceRecordID(t){this.setAdditionalProperty("sourceRecordID",t),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let t=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Md(e){let t="";t+=`${e?.name||e?.["@id"]} `}var Tt=class extends V{constructor(t,r){super(),this._defaultRecordType="DataFeed",this._loadRecord(t),i.record_type(t)!=this._defaultRecordType&&(this.sourceSystemID=t,this.sourceTableID=r)}toString(){return Ed(this.record)}setSource(t,r,n){this.sourceSystemID=t,this.sourceTableID=r,this.sourceRecordID=n}get sourceSystemID(){let t=this.getAdditionalProperty("sourceSystemID");return t=t??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),t}set sourceSystemID(t){this.setAdditionalProperty("sourceSystemID",t),this.#e()}get sourceTableID(){let t=this.getAdditionalProperty("sourceTableID");return t=t??this.record_id.split("/")?.[this.record_id.split("/").length-2],t}set sourceTableID(t){this.setAdditionalProperty("sourceTableID",t),this.#e()}add(t,r){return this.addDataFeedItem(t,r)}addDataFeedItem(t,r){let n=new $e(t,this.sourceSystemID,this.sourceTableID,r),s=this.getValues("dataFeedElement");return s.push(n),this.setValues("dataFeedElement",s),n}#e(){if(this.sourceSystemID&&this.sourceTableID){let t=this.sourceSystemID+"/"+this.sourceTableID}}};function Ed(e){let t="";t+=`${e?.name||e?.["@id"]} `}var ae=class extends V{constructor(t,r){super(),this.record_type="Offer",t?.["@type"]=="Offer"?this.record=t:(this.price=t,this.priceCurrency=r)}toString(){return Is(this.record)}get additionalProperty(){return i.getValue(this._record,"additionalProperty")}set additionalProperty(t){this._record=V.setValues(this._record,"additionalProperty",t)}get areaServed(){return i.getValue(this._record,"areaServed")}set areaServed(t){this._record=V.setValues(this._record,"areaServed",t)}get itemOffered(){return i.getValue(this._record,"itemOffered")}set itemOffered(t){this._record=V.setValues(this._record,"itemOffered",t)}get inventoryLevel(){return i.getValue(this._record,"inventoryLevel")}set inventoryLevel(t){this._record=V.setValues(this._record,"inventoryLevel",t)}get price(){return i.getValue(this._record,"price")}set price(t){this._record=V.setValues(this._record,"price",t)}get priceCurrency(){return i.getValue(this._record,"priceCurrency")}set priceCurrency(t){this._record=V.setValues(this._record,"priceCurrency",t)}get priceValidUntil(){return i.getValue(this._record,"priceValidUntil")}set priceValidUntil(t){this._record=V.setValues(this._record,"priceValidUntil",t)}get seller(){return i.getValue(this._record,"seller")}set seller(t){this._record=V.setValues(this._record,"seller",t)}get validFrom(){return i.getValue(this._record,"validFrom")}set validFrom(t){this._record=V.setValues(this._record,"validFrom",t)}get validThrough(){return i.getValue(this._record,"validThrough")}set validThrough(t){this._record=V.setValues(this._record,"validThrough",t)}};function Is(e){if(Array.isArray(e))return e.map(s=>Is(s));let t="",r=i.getValue(e,"itemOffered")||{},n=i.getValue(e,"price")||0;return n=Number(n),n=n.toFixed(2),t+=`${i.getValue(r,"name")||""} - ${i.getValue(e,"priceCurrency")||""} $${n}`,t}var le=class extends D{constructor(t){super(),this._defaultRecordType="Product",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return on(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(t){return this.setValues("additionalProperty",t)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(t){return this.setValues("aggregateRating",t)}get asin(){return this.getValue("asin")}set asin(t){return this.setValues("asin",t)}get audience(){return this.getValues("audience")}set audience(t){return this.setValues("audience",t)}get brand(){return this.getValue("brand")}set brand(t){return this.setValues("brand",t)}get category(){return this.getValues("category")}set category(t){return this.setValues("category",t)}get color(){return this.getValue("color")}set color(t){return this.setValues("color",t)}get depth(){return this.getValue("depth")}set depth(t){return this.setValues("depth",t)}get gtin(){return this.getValue("gtin")}set gtin(t){return this.setValues("gtin",t)}get height(){return this.getValue("height")}set height(t){return this.setValues("height",t)}get image(){return this.getValue("image")}set image(t){return this.setValues("image",t)}get keywords(){return this.getValues("keywords")}set keywords(t){return this.setValues("keywords",t)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(t){return this.setValues("manufacturer",t)}get model(){return this.getValue("model")}set model(t){return this.setValues("model",t)}get mpn(){return this.getValue("mpn")}set mpn(t){return this.setValues("mpn",t)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(t){return this.setValues("negativeNotes",t)}get offers(){return this.getValues("offers")}set offers(t){return this.setValues("offers",t)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(t){return this.setValues("positiveNotes",t)}get productID(){return this.getValue("productID")}set productID(t){return this.setValues("productID",t)}get review(){return this.getValues("review")}set review(t){return this.setValues("review",t)}get size(){return this.getValue("size")}set size(t){return this.setValues("size",t)}get sku(){return this.getValue("sku")}set sku(t){return this.setValues("sku",t)}get weight(){return this.getValue("weight")}set weight(t){return this.setValues("weight",t)}get width(){return this.getValue("width")}set width(t){return this.setValues("width",t)}addOffer(t,r="CAD"){this._record=this.addValue("offers",new ae(t,r))}static addOffer(t,r,n="CAD"){return Ld(t,r,n)}static toString(t){return on(t)}};function on(e){if(Array.isArray(e))return e.map(r=>on(r));let t="";return t+=`${i.getValue(e,"name")||""}`,t}function Ld(e,t,r){let n=new ae(t,r);return n.itemOffered={"@id":e?.["@id"]},e=i.addValue(e,"itemOffered",n.record),record}var Pt=class extends le{constructor(t){super(),this._defaultRecordType="ProductGroup",this._loadRecord(t),this._setValueIfString("name",t)}toString(){return an(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(t){return this.setValues("hasVariant",t)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(t){return this.setValues("productGroupID",t)}get variesBy(){return this.getValues("variesBy")}set variesBy(t){return this.setValues("variesBy",t)}addVariant(t){this.record=Wd(this.record,t)}generateVariants(t){this.record=Fd(this.record,t)}static toString(t){return an(t)}};function an(e){if(Array.isArray(e))return e.map(n=>an(n));let t="";t+=`${i.getValue(e,"name")||""}
`;let r=i.getValues(e,"hasVariant");for(let n of r)t+=" - "+le.toString(n)+`
`;return t}function Wd(e,t){return e=i.addValues(e,"hasVariant",t),e}function Fd(e,t){if(Array.isArray(t)){let o={};for(let a of t)o[a.propertyID]=o?.[a.propertyID]||[],o[a.propertyID].push(o.value);t=o}let r=Jd(t),n=Object.keys(r[0]);e=i.addValues(e,"variesBy",n);let s=V.getProperties("Product");for(let o of r){let a=JSON.parse(JSON.stringify(e));a["@type"]="Product",delete a.hasVariant,delete a.productGroupID,delete a.variesBy,a["@id"]=void 0,a.isVariantOf={"@id":e?.["@id"]};let l=[];for(let u of Object.keys(o))l.push(o?.[u]),s.includes(u)?a=i.setValue(a,u,o[u]):a=V.addAdditionalProperty(a,u,o[u]);let d=V.getValue(a,"name")+" "+l.join(" ");a=V.setValue(a,"name",d),e=V.addValue(e,"hasVariant",a)}return e}function Jd(e){return Object.keys(e).reduce((r,n)=>{let s=e[n],o=[];for(let a of r)for(let l of s)o.push({...a,[n]:l});return o},[{}])}var Nt=class extends V{constructor(t,r){super(),this._defaultRecordType="PropertyValue",this._loadRecord(t),this._setValueIfString("propertyID",t),this._setValueIfNotNull("value",r)}toString(){return Ts(this.record)}get propertyID(){return i.getValues("propertyID")}set propertyID(t){return this.setValues("propertyID",t)}get value(){return i.getValues("value")}set value(t){return this.setValues("value",t)}get unitCode(){return i.getValues("unitCode")}set unitCode(t){return this.setValues("unitCode",t)}get unitText(){return i.getValues("unitText")}set unitText(t){return this.setValues("unitText",t)}get minValue(){return i.getValues("minValue")}set minValue(t){return this.setValues("minValue",t)}get maxValue(){return i.getValues("maxValue")}set maxValue(t){return this.setValues("maxValue",t)}};function Ts(e){if(Array.isArray(e))return e.map(r=>Ts(r));let t="";return t+=`${i.getValue(e,"propertyID")||""}: ${i.getValue(e,"value")||""} ${i.getValue(e,"unitText")||""}`,t}var ue=class extends D{constructor(t){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(t),this._setValueIfString("url",t),i.record_type(t)=="WebSite"){this.website=t;let r=t.record||t;r=JSON.parse(JSON.stringify(r)),r["@type"]="WebPage",this.record=r}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(t){return this.setValue("breadcrumb",t)}addBreadcrumb(t,r){let n=this.breadcrumb||[];n?.record_type!="BreadcrumbList"&&(n=new oe(n)),n.add({"@type":"WebPage",url:t,name:r}),this.breadcrumb=n}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(t){return this.setValues(this._record,"mainContentOfPage",t)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(t){return this.setValues(this._record,"primaryImageOfPage",t)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(t){return this.setValues(this._record,"relatedLink",t)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(t){return this.setValues(this._record,"reviewedBy",t)}get significantLink(){return this.getValues("significantLink")}set significantLink(t){return this.setValues(this._record,"significantLink",t)}get specialty(){return this.getValues("specialty")}set specialty(t){return this.setValues(this._record,"specialty",t)}get WPHeader(){return this.record=Je(this.record,"WPHeader"),J(this.record,"WPHeader")}set WPHeader(t){this.record=z(this.record,"WPHeader",t)}get WPFooter(){return this.record=Je(this.record,"WPFooter"),J(this.record,"WPFooter")}set WPFooter(t){this.record=z(this.record,"WPFooter",t)}get WPSideBar(){return this.record=Je(this.record,"WPSideBar"),J(this.record,"WPSideBar")}set WPSideBar(t){this.record=z(this.record,"WPSideBar",t)}get Table(){return J(this.record,"Table")}set Table(t){this.record=z(this.record,"Table",t)}addHeaderLink(t,r){this.record=Ps(this.record,t,r)}addFooterLink(t,r){this.record=Ns(this.record,t,r)}domain(){return Cs(this.url)}get html(){return this._html}set html(t){this._html=t}get jsonld(){return this._jsonld}set jsonld(t){this._jsonld=zd(t,this.url)}static getWPHeader(t){return J(t,"WPHeader")}static getWPFooter(t){return J(t,"WPFooter")}static getWPSideBar(t){return J(t,"WPSideBar")}static getTable(t){return J(t,"Table")}static setWPHeader(t,r){return z(t,"WPHeader",r)}static setWPFooter(t,r){return z(t,"WPFooter",r)}static setWPSideBar(t,r){return z(t,"WPSideBar",r)}static setTable(t,r){return z(t,"Table",r)}static addHeaderLink(t,r,n){return Ps(t,r,n)}static addFooterLink(t,r,n){return Ns(t,r,n)}static getDomain(t){return Cs(i.getValue(t,"url")||t)}};function Je(e,t){let n=i.getValues(e,"hasPart").find(s=>i.getValue(s,"@type")==t);return n||(n={"@type":t,hasPart:[]},e=i.addValue(e,"hasPart",n)),e}function J(e,t){return i.getValues(e,"hasPart").find(s=>i.record_type(s)==t)}function z(e,t,r){let n=i.getValues(e,"hasPart");return n=n.filter(s=>i.record_type(s)!=t),n.push(r),e=i.setValues(e,"hasPart",n),e}function Ps(e,t,r){e=Je(e,"WPHeader");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPHeader");return s=i.addValue(s,"hasPart",n),e=z(e,"WPHeader",s),e}function Ns(e,t,r){e=Je(e,"WPFooter");let n={"@type":"WebPage",name:r,url:t},s=J(e,"WPFooter");return s=i.addValue(s,"hasPart",n),e=z(e,"WPFooter",s),e}function Cs(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}function zd(e,t){let r=new i.DB;r.post(e);let n=r.records,s=[];if(qd(e)=="Product"){let l=n.filter(y=>i.record_type(y)=="Product")[0];s.push({replacee:i.record_id(l),replacer:t+"#product"}),l=i.setValue(l,"url",t);let d=i.getValues(l,"brand");d=d.map(y=>y?.["@type"]?{"@type":"brand",name:y}:y),l=i.setValues(l,"brand",d);let u=n.filter(y=>i.record_type(y)=="Offer");u=u.map(y=>i.setValues(y,"itemOffered",i.ref(l))),l=i.setValues(l,"offers",u);let p=n.filter(y=>i.record_type(y)=="Review");u=u.map(y=>i.setValues(y,"itemReviewed",i.ref(l))),l=i.setValues(l,"review",p);let m=n.filter(y=>i.record_type(y)=="AggregateRating");return m=m.map(y=>i.setValues(y,"itemReviewed",i.ref(l))),l=i.setValues(l,"aggregateRating",m),l=i.replaceIds(l,s),l}return e}function qd(e){if(e=i.toArray(e),e=e.filter(r=>i.record_type(r)!="BreadcrumbList"),e.length==1&&i.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&i.record_type(e[0]=="WebPage")&&(e=i.getValues(e,"mainEntity")),e.filter(r=>i.record_type(r)=="Product").length==1)return"Product"}var Ct=class extends ue{constructor(t){super(),this._defaultRecordType="WebSite",this._loadRecord(t),this._setValueIfString("url",t)}get issn(){return this.getValues("issn")}set issn(t){return this.setValues("issn",t)}getWebPage(t,r){let n=new ue(this);return n.url=t,n.name=r,n}domain(){return vs(this.url)}static getDomain(t){return vs(i.getValue(t,"url")||t)}};function vs(e){try{let t=new Url(e).hostname;return t=t.replace(/^www\./,""),t}catch{return}}var vt=class extends V{constructor(t){super(),this._defaultRecordType="WebAPI",this._loadRecord(t),this._setValueIfString("url",t)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(t){return this.setValue("documentation",t)}};var _={get:V.toThing,toThing:V.toThing,Action:We,AddAction:bt,AppendAction:At,BrandDesign:$t,Conversation:It,CreativeWork:D,DataFeed:Tt,DataFeedItem:$e,DeleteAction:xt,InsertAction:wt,ItemList:oe,Message:U,Offer:ae,Product:le,ProductGroup:Pt,PropertyValue:Nt,Thing:V,PrependAction:kt,ReplaceAction:Vt,UpdateAction:F,WebAPI:vt,WebPage:ue,WebSite:Ct,format:Br,toThing:Kd},Gd=_;function Kd(e){let t=i.record_type(e);return _?.[t]?new _[t](e):new _.Thing(e)}var dn={};g(dn,{Button:()=>Xd,DropdownMenu:()=>js,MenuItem:()=>Zd,escapeHtml:()=>ee});function ee(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Xd({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function un(e,t=""){return!e||typeof e!="object"?"":Object.entries(e).map(([r,n])=>{let s=t?`${t}[${r}]`:r;return typeof n=="object"&&n!==null?un(n,s):`<input type="hidden" name="${ee(s)}" value="${ee(String(n))}">`}).join("")}function js({label:e="",items:t=[],align:r="end",variant:n="ghost",size:s="icon",className:o="",attrs:a=""}={}){let l={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},u={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},p=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),m=e?`<span class="mr-2">${ee(e)}</span>${p}`:`${p}<span class="sr-only">Toggle menu</span>`;t=t||[],t=(Array.isArray(t),t);let y=t.map(A=>{if(A.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let M=un(A.object),re=A.disabled?"disabled":"";return`
        <form method="POST" action="${ee(A.url||"")}" class="m-0 p-0">
          ${M}
          <button
            type="submit"
            ${re}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ee(A.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${o}" ${a}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${d[n]||d.ghost} ${u[s]||u.icon}"
      >
        ${m}
      </summary>

      <div class="absolute ${l[r]||l.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${y}
      </div>
    </details>
  `.trim()}function Zd(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let t=un(item.object),r=item.disabled?"disabled":"";return`<form method="POST" action="${ee(h.getUrl(item)||"")}" class="m-0 p-0">
          ${t}
          <button
            type="submit"
            ${r}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${ee(h.getName(item)||"")}
          </button>
        </form>`}var X={};g(X,{components:()=>f});var cn={};g(cn,{Accordion:()=>Qd});function Qd({items:e=[],className:t=""}){let r=e.map(n=>`
      <details class="group border-b border-border py-2" ${n.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${n.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${n.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${t}">${r}</div>`.trim()}var fn={};g(fn,{Alert:()=>ec});function ec({title:e,description:t="",variant:r="default",className:n=""}){let s={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${s[r]||s.default} ${n}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${t?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${t}</div>`:""}
      </div>
    `.trim()}var pn={};g(pn,{Badge:()=>tc,Badges:()=>rc});function tc(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${n[r]||n.default} ${t|""}">
        ${e}
      </div>
    `.trim()}function rc(e,t,r="default"){let n={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),r=="secondary"?`
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
    `}var gn={};g(gn,{Breadcrumb:()=>nc,BreadcrumbEllipsis:()=>sc,BreadcrumbItem:()=>Os,BreadcrumbLink:()=>Bs,BreadcrumbList:()=>Ds,BreadcrumbMain:()=>Rs,BreadcrumbPage:()=>ic,BreadcrumbSeparator:()=>Us});function nc({urls:e,titles:t,links:r}){let n=new _.ItemList(r);if(e)for(let a=0;a<e.length;a++){let l=t?.[a]||e[a].split("/")?.[e[a].split("/").length-1]||"na";n.add({"@type":"WebPage",url:e[a],name:l})}let s=n.items;return console.log("items",s),Rs({children:Ds({children:s.map(a=>Os({children:Bs({href:a?.url,children:a?.name})})).join(Us())})})}function Rs({children:e="",className:t="",attrs:r=""}={}){return`
      <nav aria-label="breadcrumb" class="${t}" ${r}>
        ${e}
      </nav>
    `.trim()}function Ds({children:e="",className:t="",attrs:r=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${t}" ${r}>
        ${e}
      </ol>
    `.trim()}function Os({children:e="",className:t="",attrs:r=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${t}" ${r}>
        ${e}
      </li>
    `.trim()}function Bs({children:e="",href:t="#",className:r="",attrs:n=""}={}){return`
      <a href="${t}" class="transition-colors hover:text-foreground ${r}" ${n}>
        ${e}
      </a>
    `.trim()}function ic({children:e="",className:t="",attrs:r=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${t}" ${r}>
        ${e}
      </span>
    `.trim()}function Us({children:e,className:t="",attrs:r=""}={}){let n=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${t}" ${r}>
        ${e!==void 0?e:n}
      </li>
    `.trim()}function sc({className:e="",attrs:t=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${t}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var mn={};g(mn,{Button:()=>oc});function oc({text:e,variant:t="primary",size:r="default",className:n="",attrs:s=""}){let o={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},a={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.primary} ${a[r]||a.default} ${n}" ${s}>
        ${e}
      </button>
    `.trim()}var hn={};g(hn,{Card:()=>ac,CardBody:()=>dc,CardContent:()=>gc,CardDescription:()=>pc,CardFooter:()=>cc,CardHeader:()=>lc,CardMain:()=>uc,CardMedia:()=>mc,CardTitle:()=>fc});function ac(e,t){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${t}">

      ${e||""}

    </div>
  `}function lc(e,t){return!e||(t=t||"",e.trim().length==0)?"":`
    <header class="card-header  ${t||""} ">${e||""}</header>

  `}function uc(e,t){return!e||e.trim().length==0?"":`
    <section class="card-main  ${t||""} ">${e||""}</section>

  `}function dc(e,t){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mt-2 mb-6 ${t||""} ">${e||""}</div>

  `}function cc(e,t){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-3 align-bottom ${t||""} ">${e||""}</footer>
  `}function fc(e,t){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${t||""} ">
    ${e||""}  
    </h3>
     `}function pc(e,t){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${t||""}">${e||""}</p>
  `}function gc(e,t){return!e||e.trim().length==0?"":`
    <div class="card-content  ${t||""} ">${e||""}</div>
  `}function mc(e,t){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${t||""} ">
        ${e||""}
    </div>
  `}var yn={};g(yn,{Dialog:()=>hc});function hc({id:e,title:t,description:r="",content:n,footer:s="",className:o=""}){return`
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
    `.trim()}var bn={};g(bn,{Footer:()=>yc});function yc({brand:e="Acme Inc",copyright:t="",columns:r=[],className:n=""}){t=t||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let s=r.map(o=>`
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
    `.trim()}var xn={};g(xn,{Header:()=>bc});function bc({brand:e="",navItems:t=[],actions:r="",className:n=""}){let s=t.map((o,a)=>{if(o.dropdown&&o.dropdown.length>0){let l=`dropdown-menu-${a}`;return`
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
    `.trim()}var Vn={};g(Vn,{H1:()=>xc,H2:()=>Vc,H3:()=>wc,H4:()=>Ac,H5:()=>kc,H6:()=>$c,Heading:()=>de,P:()=>_c,Text:()=>Sc});function xc(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"1",options:t,record_id:r,propertyID:n,className:s})}function Vc(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"2",options:t,record_id:r,propertyID:n,className:s})}function wc(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"3",options:t,record_id:r,propertyID:n,className:s})}function Ac(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"4",options:t,record_id:r,propertyID:n,className:s})}function kc(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"5",options:t,record_id:r,propertyID:n,className:s})}function $c(e,{options:t,record_id:r,propertyID:n,className:s}){return de({title:e,level:"6",options:t,record_id:r,propertyID:n,className:s})}function de({title:e,level:t,options:r,record_id:n,propertyID:s,className:o}){return t=String(t||1),`
    <h${t} 
    data-id="${n||""}" data-property-id="${s}" 
    class="break-all ${o||""}"
    >${e}</h${t}>
    
    `}function _c(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}function Sc(e,t,{options:r,record_id:n,propertyID:s,className:o}){return`
      <p data-id="${n||""}" data-property-id="${s}" class="${t!==void 0?`line-clamp-${t??1}`:""} ${o??""} "
      >${e||""}</p>
    
    `}var wn={};g(wn,{ImageModal:()=>Ic});function Ic({src:e,alt:t="",caption:r="",aspectRatio:n="aspect-video",className:s="",imageClassName:o="",attrs:a=""}){let l=`img-modal-${Math.random().toString(36).substring(2,9)}`;return`
    <!-- Thumbnail Trigger -->
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${s}" 
      ${a}
    >
      <button 
        type="button"
        onclick="document.getElementById('${l}').showModal()"
        aria-label="Enlarge image: ${t||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full ${n} overflow-hidden bg-muted">
          <img 
            src="${e}" 
            alt="${t}" 
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
              src="${e}" 
              alt="${t}" 
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
  `.trim()}var An={};g(An,{Input:()=>H,InputCheckbox:()=>Tc,InputDate:()=>Pc,InputDateTime:()=>Cc,InputEmail:()=>vc,InputNumber:()=>Nc,InputPassword:()=>jc,InputTel:()=>Rc,InputText:()=>Dc,InputTime:()=>Oc,InputUrl:()=>Bc});function H({label:e="",type:t="text",placeholder:r="",value:n="",id:s="",className:o="",attrs:a=""}){let l=s?`id="${s}"`:"";return`
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
    `.trim()}function Tc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"checkbox",label:e,value:t,propertyID:r,id:n,className:s})}function Pc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"date",label:e,value:t,propertyID:r,id:n,className:s})}function Nc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"number",label:e,value:t,propertyID:r,id:n,className:s})}function Cc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"datetime-local",label:e,value:t,propertyID:r,id:n,className:s})}function vc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"email",label:e,value:t,propertyID:r,id:n,className:s})}function jc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"password",label:e,value:t,propertyID:r,id:n,className:s})}function Rc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"tel",label:e,value:t,propertyID:r,id:n,className:s})}function Dc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"text",label:e,value:t,propertyID:r,id:n,className:s})}function Oc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"time",label:e,value:t,propertyID:r,id:n,className:s})}function Bc({label:e="",value:t="",propertyID:r="",id:n="",className:s=""}){return H({type:"url",label:e,value:t,propertyID:r,id:n,className:s})}var kn={};g(kn,{Pagination:()=>Uc,PaginationComponent:()=>Ms,PaginationContent:()=>Es,PaginationEllipsis:()=>Fs,PaginationItem:()=>ze,PaginationLink:()=>jt,PaginationNext:()=>Ws,PaginationPrevious:()=>Ls,buildPaginationUrl:()=>Hs});function Hs(e,t,r){try{let n=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return n.searchParams.set("limit",String(t)),n.searchParams.set("offset",String(r)),n.pathname+n.search+n.hash}catch{return`${String(e).split("?")[0]}?limit=${t}&offset=${r}`}}function Ms({children:e="",className:t="",attrs:r=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${t}"
      ${r}
    >
      ${e}
    </nav>
  `.trim()}function Es({children:e="",className:t="",attrs:r=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${t}" ${r}>
      ${e}
    </ul>
  `.trim()}function ze({children:e="",className:t="",attrs:r=""}={}){return`
    <li class="${t}" ${r}>
      ${e}
    </li>
  `.trim()}function jt({href:e="#",isActive:t=!1,size:r="icon",children:n="",className:s="",attrs:o=""}={}){let a={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},l="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=t?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${t?"page":"false"}"
      class="${l} ${a[r]||a.icon} ${d} ${s}"
      ${o}
    >
      ${n}
    </a>
  `.trim()}function Ls({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return jt({href:e,size:"default",className:`gap-1 pl-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Ws({href:e="#",disabled:t=!1,className:r="",attrs:n=""}={}){return jt({href:e,size:"default",className:`gap-1 pr-2.5 ${t?"pointer-events-none opacity-50":""} ${r}`,attrs:`${t?'aria-disabled="true" tabindex="-1"':""} ${n}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Fs({className:e="",attrs:t=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${t}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Uc({url:e,total:t,limit:r=10,offset:n=0,siblingCount:s=1,className:o="",attrs:a=""}={}){let l=Math.ceil(t/r)||1,d=Math.floor(n/r)+1,u=E=>{let L=(E-1)*r;return Hs(e,r,L)},p=(E,L)=>{let ie=L-E+1;return Array.from({length:ie},(qe,Ge)=>E+Ge)},m=s+5,y=[];if(m>=l)y=p(1,l);else{let E=Math.max(d-s,1),L=Math.min(d+s,l),ie=E>2,qe=L<l-2,Ge=1,$o=l;if(!ie&&qe){let Se=3+2*s;y=[...p(1,Se),"ellipsis",l]}else if(ie&&!qe){let Se=3+2*s,zn=p(l-Se+1,l);y=[Ge,"ellipsis",...zn]}else if(ie&&qe){let Se=p(E,L);y=[Ge,"ellipsis",...Se,"ellipsis",$o]}}let A=[],M=d>1,re=M?u(d-1):"#";A.push(ze({children:Ls({href:re,disabled:!M})})),y.forEach(E=>{if(E==="ellipsis")A.push(ze({children:Fs()}));else{let L=Number(E),ie=L===d;A.push(ze({children:jt({href:u(L),isActive:ie,children:String(L)})}))}});let ne=d<l,Bt=ne?u(d+1):"#";A.push(ze({children:Ws({href:Bt,disabled:!ne})}));let Ut=Ms({className:o,attrs:a,children:Es({children:A.join("")})});return Ut=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ut}
    </div>`,Ut}var $n={};g($n,{Section:()=>Hc,SectionHeader:()=>Mc});function Hc({children:e="",variant:t="default",container:r="default",className:n="",containerClassName:s="",attrs:o=""}={}){let a={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},l={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=a[t]||a.default,u=l[r]!==void 0?l[r]:l.default,p=r!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${u} ${s}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${d} ${n}" ${o}>
      ${p}
    </section>
  `.trim()}function Mc({title:e="",description:t="",align:r="left",className:n=""}={}){let s={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${s[r]||s.left} ${n}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${t?`<p class="text-lg text-muted-foreground max-w-2xl">${t}</p>`:""}
    </div>
  `.trim()}var _n={};g(_n,{Table:()=>Lc,TableBody:()=>qs,TableCell:()=>q,TableCellCenter:()=>qc,TableCellLeft:()=>zc,TableCellLink:()=>Kc,TableCellNumber:()=>Gc,TableCellRight:()=>Ks,TableCellText:()=>Yc,TableColumnHeader:()=>zs,TableColumnHeaderCenter:()=>Jc,TableColumnHeaderLeft:()=>Wc,TableColumnHeaderRight:()=>Fc,TableFooter:()=>Ys,TableHeader:()=>Js,TableRow:()=>Gs,getTable:()=>Ec});function Ec({headers:e=[],rows:t=[],className:r=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${r||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Js(e.map(n=>zs(n)))}
      
        ${qs(t.map(n=>Gs(n.map(s=>q(s)))))}
        
        ${Ys()}

      </table>

    </div>
  
  
  `}function Lc(e,t,r,n,s=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${s||""}">
      
      <table data-id="${t||""}" data-property-id="${r||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function Js(e,t){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function zs(e,t){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Wc(e,t){return q(e,t)}function Fc(e,t){return t=t+" text-right ",q(e,t)}function Jc(e,t){return t=t+" text-center ",q(e,t)}function qs(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Gs(e,t,r,n){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
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
  `}function zc(e,t,r,n){return q(e,t,r,n)}function Ks(e,t,r,n){return n=n+" text-right ",q(e,t,r,n)}function qc(e,t,r,n){return n=n+" text-center ",q(e,t,r,n)}function Gc(e,t,r,n,s,o){return e=i.toNumber(e),e=b.number.format(e,t),Ks(`
      
    ${e||""}
    ${r||""}
  `,"krnumber h-min font-mono")}function Kc(e,t,r,n,s,o){return q(`
      
    <a data-id="${n||""}" data-property-id="${s||""}"  title="${t||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${t||e||""}</a>
    ${r||""}
  `,"krurl max-w-2xs truncate")}function Yc(e,t,r,n){let s=`
    <div 
      data-id="${t||""}" 
      data-property-id="${r||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return q(s)}function Ys(e,t,r,n){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var Sn={};g(Sn,{Webpage:()=>Xc});function Xc({title:e,headContent:t,header:r,footer:n,content:s,breadcrumb:o}){return`
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
  `.trim()}var In={};g(In,{CardGrid:()=>Zc});function Zc({nbOfColumns:e,content:t}){let r=String(e??2),n=String(e??3),s=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${r} lg:grid-cols-${n} xl:grid-cols-${s}">
      ${t}
    </div>
  `}var Tn={};g(Tn,{JsonEditor:()=>ef});function Xs({children:e="",variant:t="default",size:r="default",className:n="",attrs:s=""}={}){let o={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},a={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${o[t]||o.default} ${a[r]||a.default} ${n}" ${s}>
      ${e}
    </button>
  `.trim()}function Qc({title:e="",description:t="",children:r="",footer:n="",className:s="",attrs:o=""}={}){return`
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
  `.trim()}function ef({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:t="",initialData:r={title:"Sample Record",active:!0},headers:n={"Content-Type":"application/json"},className:s="",attrs:o=""}={}){let a=e.replace(/[^a-zA-Z0-9_]/g,"_"),l=typeof r=="string"?r:JSON.stringify(r,null,2),d=JSON.stringify(n,null,2),u=`
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
  `.trim(),p=`
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
            ${Xs({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${a}_format()"`})}
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
        ${Xs({children:"Submit Record",variant:"default",attrs:`id="${a}_submit_btn" type="submit"`})}
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
  `.trim();return Qc({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:p,className:s,attrs:o})}var Pn={};g(Pn,{Modal:()=>tf});function tf(e,t,r){let n="modal_"+i.randomUUID();return`
    
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${r}" 
      ${attrs}
    >
      <button 
        type="button"
        onclick="document.getElementById('${n}').showModal()"
        aria-label="Enlarge image: ${alt||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full  overflow-hidden bg-muted">
         ${e}
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
        id="${n}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${n}').close()" 
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
    </div>
    
    
    `}var Nn={};g(Nn,{DropdownMenu:()=>nf,DropdownMenuIcon:()=>sf,Menu:()=>rf,MenuItemLink:()=>of,MenuItemPost:()=>af,MenuItemSeparator:()=>lf});function rf(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function nf(e,t,r){return`
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

    `}function sf(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function of(e,t,r,n){return`
    
        <a href="${r||""}">${e||""}${t}</a>

    `}function af(e,t,r,n){return`<form method="POST" action="${r||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(n)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${t||""}
          </button>
        </form>`}function lf(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var Cn={};g(Cn,{Kanban:()=>uf,KanbanBody:()=>cf,KanbanCard:()=>bf,KanbanCardBody:()=>Vf,KanbanCardFooter:()=>wf,KanbanCardHeader:()=>xf,KanbanColumn:()=>gf,KanbanColumnBody:()=>hf,KanbanColumnFooter:()=>yf,KanbanColumnHeader:()=>mf,KanbanFooter:()=>ff,KanbanHeader:()=>df,KanbanTitle:()=>pf});function uf(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function df(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function cf(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function ff(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function pf(e,t){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>`}function gf(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function mf(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function hf(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function yf(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function bf(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function xf(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function Vf(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function wf(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var f={...cn,...fn,...pn,...gn,...mn,...hn,...In,...yn,...dn,...bn,...xn,...wn,...Cn,...Nn,...Pn,...An,...Tn,...kn,...$n,..._n,...Vn,...Sn};var On={};g(On,{Card:()=>Pf,Cards:()=>Nf});var Dn={};g(Dn,{Media:()=>ce});var Dt={};g(Dt,{fixedLength:()=>Rt,textCenter:()=>vn});function Rt(e,t=void 0,r=0){let n=e;if(i.isArray(e)){let o=e.length;o==0&&(e=""),o==1&&(e=e[0]),o>1&&(e=`(${e.length})`)}let s=b.getDataType(e);if(s=="Undefined"&&(e=""),s=="Jsonld"&&(e=e?.["@id"]),s=="Number"&&(e=b.toNumber(e),e=e.toFixed(r),e=e.padStart(t," ")),s=="Date"&&(e=b.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,t!=null&&e.length>t){let o="",a=Math.round(t/3),l=t-a-3;o+=e.slice(0,a),o+="...",o+=e.slice(-l),e=o}return t!=null&&(e=e.padEnd(t," ")),e}function vn(e,t,r=" "){e=e??"",e=String(e);let n=Math.floor((t-e.length)/2);return e=e.padStart(e.length+n,r).padEnd(t,r),e}var Rn={};g(Rn,{toTextRecord:()=>Af,toTextTable:()=>_f});function Af(e,t=80){let r=kf(e,t),n=$f(e),s="";s+=Zs(r),s+=`
`,n.length>0?s+=n.map(o=>Qs(o,r)).join(""):s+=`(no records)
`}function kf(e,t=80){let n=jn(e).map(a=>(a||"").length),s=Math.max(...n);return[{t:"Property ID",p:"propertyID",w:Math.max(s,11)},{t:"Value",p:"value",w:t-Math.max(s,11)}]}function $f(e){let t=jn(e),r=[];for(let n of t){let s={"@type":"PropertyValue",propertyID:n,value:b.getValues(e,n)};r.push(s)}return r}function _f(e,t,r=!0,n=80){t=Sf(e,t,r),e=If(e,t,r);let s="";if(s+=Zs(t),s+=`
`,e.length>0){let o=e.map(a=>Qs(a,t));s+=o.join("")}else s+=vn("(no records to display.)",n);return s}function Sf(e,t,r=!0){t=i.toArray(t),(!t||t.length==0)&&(t=jn(e).map(s=>({title:s,propertyID:s,width:s.length}))),(r=!0)&&(t.map(s=>s?.propertyID||s?.p).includes("position")||(t=[{t:"#",p:"position",w:4,r:0}].concat(t)));for(let n of t)n.title=n?.title||n?.t||n?.propertyID||n?.p||"",n.t=n.title,n.propertyID=n?.propertyID||n?.p||"",n.p=n.propertyID,n.width=n?.width||n?.w||n?.length||n?.l||title.length,n.width=Number(n.width),n.width=Math.max(n.width,n.title.length),n.w=n.width,n.length=n.width,n.l=n.width,n.rounding=n?.rounding||n?.r||0,n.rounding=Number(n.rounding),n.r=n.rounding;return t}function If(e,t,r=!0){if(e=i.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),r==!0)for(let[n,s]of e.entries())s.position=s?.position??n;return e}function Zs(e){let t="",r=[];for(let s of e){let o=`${Rt(s.title,s.width,s.rounding)}`;r.push(o)}t+=r.join(" "),t+=`
`;let n=[];for(let s of e){let o=`${"".padStart(s.width,"-")}`;n.push(o)}return t+=n.join(" "),t+=`
`,t}function Qs(e,t){let r="",n=[];for(let s of t){let o=i.getValues(e,s.propertyID),a=`${Rt(o,s.width,s.rounding)}`;n.push(a)}return r+=n.join(" "),r+=`
`,r}function jn(e){e=i.toArray(e);let t=e.map(r=>Object.keys(r));return t=t.flat(),t=[...new Set(t)],t=Tf(t),t}function Tf(e){e=i.toArray(e);let t=["position","@type","@id"];return e.sort((r,n)=>{if(r==n)return 0;for(let s of t){if(r==s&&n!=s)return-1;if(r!=s&&n==s)return 1}return r.startsWith("@")&&!n.startsWith("@")?-1:!r.startsWith("@")&&n.startsWith("@")?1:r<n?-1:1}),e}var ny={...Dt,...Rn};function ce({url:e,record:t,options:r,layoutClasses:n,className:s,attrs:o}){let a=i.getValue(t,"contentUrl");return a?i.record_type(t)=="VideoObject"?`  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${i.getValue(t,"thumbnailUrl")}">
                    <source src="${a}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `:`
        
                    <div class="block-media  ">

          
                ${f.ImageModal({src:i.getImageUrl(t),alt:i.getImageName(t)})}
         
                    </div>

        `:""}function te({website:e,webpage:t,title:r,headContent:n,content:s,options:o}){t=new _.WebPage(t),e=new _.WebSite(e);let a={};a.title=r,a.title=a.title||i.getValue(t,"title"),a.title=a.title||i.getValue(t,"name"),a.title=a.title||i.getValue(e,"title"),a.title=a.title||i.getValue(e,"name"),a.headContent=n,a.breadcrumb=f.Breadcrumb({links:i.getValue(t,"breadcrumb")});let l=i.getValue(e,"about.name")??i.getValue(e,"name")??i.getValue(t,"about.name")??i.webpage(e,"name"),d=t.WPHeader.hasPart||[],u=t.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],u=Array.isArray(u)?u:[u],a.header=f.Header({brand:l,navItems:d}),a.footer=f.Footer({brand:l,navItems:u}),a.content=s,f.Webpage(a)}function eo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:p,options:m}){return o=o??"",o+=P.Cards({url:n,records:a,offset:u,limit:p,nbOfColumns:3,options:m}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:m})}function Pf(e,t,r,n=!0){let s=_.format.getTitle1(e),o=_.format.getContent(e),a=i.getRecordUrl(e,t),l=n==!0?_.format.imageUrl(e):void 0;return f.Card({title:s,description:o,url:a,media:l,className:r})}function Nf({url:e,records:t,offset:r,limit:n,orderBy:s,orderDirection:o,nbOfColumns:a,includePagination:l,options:d,layoutClasses:u,className:p,attrs:m}){r=Number(r),r=isNaN(r)?0:r,n=Number(n),n=isNaN(n)?20:n;let y=new _.ItemList(t);y=y.record,y.numberOfItems=y?.numberOfItems??y.itemListElement.length,y=Ot({record:y,options:d}),y.itemListElement=y.itemListElement.filter(ne=>i.getValue(ne,"position")>=r&&i.getValue(ne,"position")<r+n);let A="";for(let ne of i.getValues(y,"itemListElement")){let Bt=i.getValue(ne,"item");A+=Cf({url:e,item:Bt,options:d})}A=f.CardGrid({content:A,nbOfColumns:a});let M=f.Pagination({url:e,limit:n,offset:r,total:y.numberOfItems,options:d});return`

        <div class="${u} ${p}" ${m}>
        <div class="flex-1">
            ${A}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${M}
        </div>
        </div>

    `}function Cf({url:e,item:t,options:r}){let n=i.getImageUrl(t),s=i.getImageName(t),o=i.getValues(t,"keywords");o=o.map(u=>`<a href="/?keywords=${u}">${u}</a>`);let a=f.Badges({text:o,variant:"secondary"}),l={title:i.getValue(t,"name"),url:i.getRecordUrl(t,r?.baseUrl),description:i.getValue(t,"description"),footer:a,image:i.getImageUrl(t),imageAlt:i.getImageName(t),media:ce({record:t,options:r})};return f.Card(l)}var Bn={};g(Bn,{Input:()=>jf});function jf({record:e,propertyID:t,value:r}){return f.Input({value:r})}var Hn={};g(Hn,{Table:()=>Rf,TableBody:()=>ro,TableCell:()=>io,TableHeader:()=>to,TableRow:()=>no,getDataType:()=>so,getHeadersFromProperties:()=>Un,getPropertiesFromRecords:()=>_e});function Rf(e,t,r,n,s,o){let a=e;r=r||_e(a),n=n||Un(r);let l=[];return s==!0&&(n=["Thumbnail"].concat(n),r=["item"].concat(r),l=["thumbnail"].concat(l)),o==!0&&(n=["#"].concat(n),r=["position"].concat(r),l=["position"].concat(l)),f.Table(to(a,r,n,l)+ro(a,r,t,l))}function to(e,t,r,n){return t=t||_e(e),r=r||Un(t),n=n||[],t=t||_e(e),f.TableHeader(r.map((s,o)=>{switch(n?.[o]){case"number":return f.TableColumnHeaderRight(s);default:return f.TableColumnHeader(s)}}).join(" "))}function ro(e,t,r,n){t=t||_e(e),n=n||[];let s=i.getValues(new _.ItemList(e),"itemListElement");return f.TableBody(s.map(o=>no(o,t,r,n)).join(" "))}function no(e,t,r,n){return t=t||_e(e),n=n||[],f.TableRow(t.map((a,l)=>io(e,i.getValues(e,a),a,r,n,l)).join(" "),i.record_id(e),void 0,"kr-listitem")}function io(e,t,r,n,s,o){let a=t,l=r,d=e;if(a=i.isArray(a)&&a.length==0?"":a,a=i.isArray(a)&&a.length==1?a[0]:a,(l||"").endsWith("@type")){let u=b.url.getUrl(n||"","/"+a);return f.TableCellLink(u,a)}if((l||"").endsWith("@id")){let u=i.getRecordUrl(d,n);return f.TableCellLink(u,a)}switch(s?.[o]||so(a)){case"array":return f.TableCellCenter(`(${a.length})`);case"text":return f.TableCellText(a);case"number":return f.TableCellNumber(a,2);case"link":return f.TableCellLink(a,a);case"thumbnail":return f.TableCell(ce({record:a}));case"position":return f.TableCellNumber(a,0);case"object":return f.TableCellLink(i.getRecordUrl(a,n),i.record_id(a));default:return f.TableCellText(a)}}function _e(e){let r=i.getValues(e,"itemListElement").map(s=>i.getValue(s,"item")),n=[...new Set(r.flatMap(Object.keys))];return n=n.filter(s=>s.startsWith("@")===!1),n=n.map(s=>"item."+s),n=["item.@type","item.@id"].concat(n),n}function Un(e){e=e||[];let t=e.map(r=>r.split(".")?.[1]||r);return t=t.map(r=>r=="position"?"No":r),t=t.map(r=>({htmlValue:r,table:{className:"capitalize"}})),t}function so(e){return e=i.isArray(e)&&e.length==0?void 0:e,e=i.isArray(e)&&e.length==1?e[0]:e,e?b.isNumber(e)?"number":b.isUrl(e)?"link":b.isDate(e)?"date":b.isArray(e)?"array":b.isObject(e)?"object":"text":"text"}var Mn={};g(Mn,{Record:()=>Df});function Df(e,t,r,n="",s="",o=!1,a=0,l={}){e=i.removeCircularRefs(e),r=r||Object.keys(e),l.baseUrl=t||l?.baseUrl;let d={rows:[]},u=oo({record:e,baseUrl:t,properties:r,className:n,attrs:s,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${s||""}>
            <div class="flex-1">
                ${ce({record:e,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${u||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${f.JsonEditor({initialData:e,endpoint:t})}
              </details>
            </div>
        </div>

    `}function oo({record:e,properties:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){t=t||Object.keys(e);let l=t.filter(m=>m.startsWith("@")),d=t.filter(m=>!m.startsWith("@"));t=l.sort().concat(d.sort());let u={rows:[]};return f.Table(f.TableHeader(f.TableRow(f.TableCellRight("")+f.TableCellRight(P.DropdownMenu(i.getPotentialActions(e)))))+f.TableBody(t.map(m=>f.TableRow([f.TableCell(m+":"),f.TableCell(ao({record:e,propertyID:m,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))].join(" "))).join(" ")))}function Of({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t),d=[];for(let u of l){let p=i.clone(e);p=i.setValue(p,t,u),d.push(ao({record:p,propertyID:t,className:r,attrs:n,expandAll:s,depth:o+1,options:a}))}return`
        <ul class="space-y-4 ">
          ${d.map(u=>`
            <li>
              ${u}
            </li>
            `).join("")}

        </ul>
     
  
  `}function ao({record:e,propertyID:t,className:r="",attrs:n="",expandAll:s=!1,depth:o=0,options:a}){let l=i.getValues(e,t);return i.isArray(l)&&l.length==1&&(l=l[0]),i.isArray(l)&&l.length==0?"":i.isArray(l)&&l.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(l,t,a?.baseUrl)}</summary>
      
                ${Of({record:e,propertyID:t,className:r,attrs:n,expandAll:s,depth:o,options:a})}
            
            </details>
      `:l?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(l,t,a?.baseUrl)}</summary>
      
            ${oo({record:l,propertyID:void 0,className:r,attrs:n,expandAll:s,depth:o,options:a})}
        
        </details>
      `:l===void 0?"":P.Value(l,t,a?.baseUrl)}var En={};g(En,{DropdownMenu:()=>Uf,Menu:()=>Bf});function Bf(e){return e=i.toArray(e),!e||e.length==0?"":f.DropdownMenu(f.DropdownMenuIcon(),e.map(t=>f.MenuItemPost(i.getImageUrl(t),i.getName(t),i.getUrl(t))).join(" "))}function Uf(e){if(e=i.toArray(e),!e||e.length==0)return"";let t=e.map(n=>f.MenuItemPost(i.getImageUrl(n),i.getName(n),i.getUrl(n),i.ref(n))).join(" ");return f.DropdownMenu(f.DropdownMenuIcon(),t)}var Ln={};g(Ln,{Value:()=>Hf,ValueArray:()=>co,ValueDateTime:()=>po,ValueDuration:()=>Mf,ValueMonetaryAmount:()=>Ef,ValueNumber:()=>go,ValueRecordId:()=>lo,ValueRecordType:()=>uo,ValueText:()=>mo,ValueThing:()=>ho,ValueUrl:()=>fo});function Hf(e,t,r){return!e&&e!==0?"":i.isArray(e)?co(e,t,r):t=="@type"?uo(e,t,r):t=="@id"?lo(e,t,r):i.isObject(e)?ho(e,t,r):i.isNumber(e)?go(e,t,r):i.isDate(e)?po(e,t,r):b.isUrl(e)?fo(e,t,r):mo(e,t,r)}function lo(e,t,r){let n=i.getRecordUrl({"@id":e},r),s=`<a title="${e}" href="${n}">${e}</a>`;return Z(s,t)}function uo(e,t,r){let n=b.url.getUrl(r,e),s=`<a class="h-min" title="${e}" href="${n}">${e}</a>`;return Z(s,t)}function co(e,t,r){let n=e.length>0?`(${e.length})`:"";return Z(n,t)}function fo(e,t,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return Z(n,t)}function po(e,t,r){e=i.toDate(e);let n=b.date.format(e);return Z(n,t)}function Mf(e,t,r){return b.duration.format(pv.value)}function go(e,t,r){let n=t=="position"?0:2;return e=i.toNumber(e),e=b.number.format(e,n),Z(e,t)}function mo(e,t,r){return Z(e,t)}function ho(e,t,r){let n=i.getRecordUrl(e,r),s=i.getName(e)||i.record_id(e);i.record_type(e)=="ListItem"&&(s=`ListItem ${i.getPosition(e)} - ${i.getValue(e,"item.name")||i.getValue(e,"@id")}`);let o=`<a title="${s}" href="${n}">${s}</a>`;return Z(o,t)}function Ef(e,t,r){let n=b.toNumber(i.getValue(pv.value,"value"));if(n===void 0)return pv;let s=b.number.format(n,2),o=i.getValue(record,"currency");return o=(o||"").toUpperCase(),pv.htmlValue=o+" $"+s,o=="USD"&&(pv.htmlValue=o+" $"+s),o=="CAD"&&(pv.htmlValue=o+" $"+s),o=="EUR"&&(pv.htmlValue=o+" "+s+" \u20AC"),o=="GBP"&&(pv.htmlValue=o+" "+s+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",Z(pv,t)}function Z(e,t){return`
      <span class="kr-value" data-property-id="${t}">${e}</span>
    `}var Wn={};g(Wn,{Kanban:()=>Lf,KanbanCard:()=>bo,KanbanColumn:()=>yo});function Lf(e,t){let r=i.getItems(e);return f.Kanban(f.KanbanHeader(f.KanbanTitle("Awesome Kanban","Fuck yeah"))+f.KanbanBody(propertyValues.map(n=>yo(e,t,n)).join(" "))+f.KanbanFooter(""))}function yo(e,t,r){let n=i.getItems(e);return n=n.filter(s=>i.getValue(s,t)==r),f.KanbanColumn(f.KanbanColumnHeader(r)+f.KanbanColumnBody(n.map(s=>bo(s)).join(" "))+f.KanbanColumnFooter())}function bo(e){return f.KanbanCard(f.KanbanCardHeader("xx")+f.KanbanCardBody(P.Value(i.getName(e),"name"))+f.KanbanCardFooter(P.Value(i.getActionStatus(e),"actionStatus")))}var P={...On,...Bn,...Dn,...Mn,...Hn,...En,...Ln,...Wn};function Ot({record:e,options:t}){if(i.isArray(e))return e.map(o=>Ot({record:o,options:t}));let r=i.record_type(e);if(!r)return e;let n=b.url.getUrl(t.baseUrl,"/execute"),s=i.ref(e);for(let o of Object.keys(e?.record||e))e=i.setValues(e,o,Ot({record:i.getValues(e,o),options:t}));return r=="Action"&&i.isPotential(e)&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n})),r=="ItemList"&&(e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:s,url:n})),r=="ListItem"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),r=="Thing"&&(e=i.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:s,url:n}),e=i.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:s,url:n})),e}function xo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,records:a,properties:l,headers:d,offset:u,limit:p,options:m}){return o=o??"",o+=P.Table({url:n,records:a,properties:l,headers:d,offset:u,limit:p,options:m}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:m})}function Vo({website:e,webpage:t,title:r,url:n,headContent:s,content:o,record:a,properties:l,headers:d,options:u}){return o=o??"",o+=P.Record({url:n,record:a,options:u}),te({website:e,webpage:t,title:r,headContent:s,content:o,options:u})}var wo={blankPage:te,recordsPage:xo,recordPage:Vo,cardsPage:eo};var Ao={blocks:P,...wo,components:X,...X};var Fn={};g(Fn,{getParsedRequest:()=>Wf});function Wf(e){let t={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(t.filter={...e.query},console.log("pp",t.filter),e.query?.filter)try{t.filter=JSON.parse(e.query?.filter)}catch{}return t.filter=t.filter||{},t?.filter&&(Object.keys(t.filter||{}).filter(n=>n.startsWith("_")==!0).forEach(n=>delete t.filter[n]),["filter","offset","limit","orderBy","orderDirection"].forEach(n=>delete t.filter[n])),t}var ko={shadcn:Ao,express:Fn};var Jn={...i,...ln,html:ko},ax=Jn,lx=Jn,ux=Jn;export{Jn as _h,ux as default,ax as h,lx as helpers};
//# sourceMappingURL=jsonldCore.js.map
