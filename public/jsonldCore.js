var Vo=Object.defineProperty;var m=(r,e)=>{for(var n in e)Vo(r,n,{get:e[n],enumerable:!0})};var pe={get:Te,set:Ke,flatten:wo,expand:Ao};function Te(r,e){if(!e||typeof e!="string")return;let n=Gn(e),i=r;for(let o of n)isNaN(o)?i=Array.isArray(i)?i[0]:i:i=Array.isArray(i)?i:[i],i=i?.[o];return i}function Ke(r,e,n){if(!e||typeof e!="string"||e=="")return;let i=Gn(e);if(i.length==0)return n;let o=r;r=r||{},isNaN(i[0])||(r=Array.isArray(r)?r:[r]);let a=r;for(let l=0;l<i.length-1;l++){let u=i[l],c=i[l+1],d=!isNaN(c);d==!0&&(a[u]=Array.isArray(a[u])?a[u]:[a[u]],a=a?.[u]),d==!1&&(a[u]=a?.[u]||{},a=Array.isArray(a?.[u])?a?.[u][0]:a?.[u])}return a[i[i.length-1]]=n,r}function wo(r){function e(o,a){let l=[];return Array.isArray(a)?(o=o||"",a.map((c,d)=>e(`${o}[${String(d)}]`,c)).flat()):a?.["@type"]||a?.["@id"]?(o=o&&o!=""?o+".":"",Object.keys(a).map(c=>e(`${o}${c}`,a[c])).flat()):[{propertyID:o,value:a}]}let n=e("",r),i={};return n.forEach(o=>i[o.propertyID]=o.value),i}function Ao(r){let e={};return Object.keys(r).forEach(n=>Ke(e,n,r?.[n])),e}function Gn(r){let e=[],n="",i=["[","]","."];for(let o of r)if(i.includes(o)){n!=""&&e.push(n),n="";continue}else n=n+o;return e.push(n),e=e.filter(o=>o!=""),e=e.map(o=>isNaN(Number(o))?o:Number(o)),e}var Wt={};m(Wt,{eq:()=>To,ge:()=>jo,getDiff:()=>Yn,getHash:()=>Kn,getHashNested:()=>Ro,gt:()=>vo,isEqual:()=>Po,isSame:()=>Io,le:()=>Co,lt:()=>No});var Ye={};m(Ye,{expand:()=>$o,flatten:()=>_o,getChildren:()=>So,handleRelationships:()=>Mt,simplify:()=>Et,strip:()=>Ht});function $o(r,e,n=!0){let i=s._storeToMap(r),o=new Map;function a(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(y=>a(y));let u=s.record_id(l);if(u&&o.has(u)){let y=o.get(u);return n?y:s.ref?s.ref(y):{"@id":u}}let d=(u&&i instanceof Map?i.get(u):null)||l,g=Array.isArray(d)?[...d]:{...d};u&&o.set(u,g);for(let y of Object.keys(g))y==="previousItem"||y==="nextItem"||(g[y]=a(g[y]));return g}return typeof e=="string"&&(e={"@id":e}),a(e)}function Ht(r){function e(n,i,o){if(Array.isArray(n))return n.map(a=>e(a,i,o));if(n?.["@type"]||n?.["@id"]){if(o>i)return{"@id":n?.["@id"]};{let a={};for(let l of Object.keys(n).sort())a[l]=e(n?.[l],i,o+1);return a}}return n}return e(r,0,0)}function _o(r){function e(i){let o=[];if(!i)return[];if(s.isArray(i)){let a=[];for(let l of i)a=a.concat(e(l));return a}if(Object.prototype.toString.call(i)!=="[object Object]")return[];for(let a of Object.keys(i)){if(a=="@id")continue;if(a=="previousItem"){i[a]=s.ref(i?.[a]);continue}if(a=="nextItem"){i[a]=s.ref(i?.[a]);continue}let l=i[a];l=s.toArray(l),i[a]=[];for(let u of l)u?.["@id"]?i[a].push({"@id":u?.["@id"]}):i[a].push(u),o=o.concat(e(u))}return o=[i].concat(o),o}r=s.clone(r),r=s.setTempID(r),r=Mt(r);let n=e(r);return n=n.filter(i=>i),n=n.filter(i=>s.isRef(i)===!1),n}function Mt(r){if(s.isArray(r))return r.map(n=>Mt(n));let e=r;if(s.record_type(e)=="Product"){let n=s.getValues(e,"offers");n=n.map(a=>s.insertValue(a,"itemOffered",s.ref(e))),e=s.setValues(e,"offers",n);let i=s.getValues(e,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",i);let o=s.getValues(e,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",o)}if(s.record_type(e)=="Offer"){let n=s.getValues(e,"itemOffered");n=n.map(a=>s.insertValue(a,"offers",s.ref(e))),e=s.setValues(e,"itemOffered",n);let i=s.getValues(e,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",i);let o=s.getValues(e,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",o)}return e}function Et(r){function e(i,o=0){if(o>20)return i;if(o+=1,i!==void 0){if(Array.isArray(i))return i=i.map(a=>e(a,o)),i=i.filter(a=>a!==void 0),i.length==1?(i=i[0],i):i.length==0?void 0:i;if(i&&typeof i=="object"&&Object.keys(i).length>0){let a={};for(let l of Object.keys(i)){let u=e(i?.[l],o);l=="itemListElement"&&(u=s.toArray(u)),u!==void 0&&(a[l]=u)}return a["@id"]=s.toArray(a?.["@id"])?.[0],a}return i}}return r=s.clone(r),e(r)}function So(r){function e(n,i){if(s.isArray(n)){let a=[];for(let l of n){let u=e(l,i);a=a.concat(u)}return a}if(!(n?.["@id"]||n?.["@type"]))return[];let o=[];i>0&&o.push(n);for(let a of Object.keys(n))o=o.concat(e(n[a],i+1));return o=o.filter(a=>a),o}return e(r,0)}function Io(r,e){if(r=s.record_id(r)??r,e=s.record_id(e)??e,r==null&&e==null)return!0;if(r!=null&&e==null||r==null&&e!=null)return!1;if(!isNaN(r)&&!isNaN(e)||typeof r=="string"&&typeof e=="string"||r instanceof Date&&e instanceof Date)return r==e;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r==e}function To(r,e){if(r===void 0&&e===void 0)return!0;if(r!==void 0&&e===void 0||r===void 0&&e!==void 0)return!1;if(r===null&&e===null)return!0;if(r!==null&&e===null||r===null&&e!==null)return!1;r=s.clean(r),e=s.clean(e),r=s.strip(r),e=s.strip(e);try{r=JSON.stringify(r,Object.keys(r).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return r==e}function Po(r,e){let n=(o,a)=>a instanceof Object&&!(a instanceof Array)?Object.keys(a).sort().reduce((l,u)=>(l[u]=a[u],l),{}):a;try{r=s.JSON_stringify(r)}catch{}try{e=s.JSON_stringify(e)}catch{}return r==e}function No(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r<e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]<e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r<e}function Co(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r<=e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]<=e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r<=e}function vo(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r>e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]>e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r>e}function jo(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r>=e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]>=e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r>=e}function Kn(r,e=!1){r=Et(r),e==!1&&(r=Ht(r));let n=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((c,d)=>({...c,[d]:n(u[d])}),{}):Array.isArray(u)?u.map(n):u,i=JSON.stringify(n(r)),o=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(o)return o.createHash("sha256").update(i).digest("hex");let a=5381,l=i.length;for(;l;)a=a*33^i.charCodeAt(--l);return(a>>>0).toString(16)}function Ro(r){return Kn(r,!0)}function Yn(r,e){if(r===e)return null;if(typeof r!="object"||r===null||typeof e!="object"||e===null)return e;let n={};for(let i in r)if(r.hasOwnProperty(i))if(!e.hasOwnProperty(i))n[i]={removed:r[i]};else{let o=Yn(r[i],e[i]);o!==null&&(n[i]=o)}for(let i in e)e.hasOwnProperty(i)&&!r.hasOwnProperty(i)&&(n[i]={added:e[i]});return Object.keys(n).length>0?n:null}var Lt={};m(Lt,{evaluate:()=>Ft});function Ft(r,e){let n=[];for(let o of Object.keys(e)){let a=o,l=e?.[o];if(l=s.toArray(l),a=="$and")return l.every(u=>Ft(r,u));if(a=="$or")return l.some(u=>Ft(r,u));for(let u of l){let c=Oo(r,a,u);n.push(c)}}return n.every(o=>Do(o.r,o.p,o.o,o.v))}function Do(r,e,n,i){try{let o=pe.get(r,e);if(typeof o=="string"&&(o=o.trim()),typeof i=="string"&&(i=i.trim()),o=isNaN(Number(o))?o:Number(o),i=isNaN(Number(i))?i:Number(i),n=="$equal")return o==i;if(n=="$lt")return o<i;if(n=="$gt")return o>i;if(n=="$le")return o<=i;if(n=="$ge")return o>=i;if(n=="$same")return o?.["@id"]&&o?.["@id"]===i?.["@id"];if(n=="$includes")return o.includes(i)}catch(o){return console.log("err",o),!1}}function Oo(r,e,n){let i={r,p:e,o:null,v:null};return typeof n=="string"&&(n.startsWith("$")?i={r,p:e,o:n.split(" ")[0],v:n.split(" ").slice(1).join(" ")}:i={r,p:e,o:"$equal",v:n}),typeof n=="object"&&(i={r,p:e,o:Object.keys(n)?.[0],v:n?.[Object.keys(n)?.[0]]}),i}var lr={};m(lr,{assignId:()=>fa,getGenericRecordID:()=>ca,normalizeRecordId:()=>ua,replaceIds:()=>pi,setTempID:()=>fi});var Jt={};m(Jt,{clean:()=>Bo,isArray:()=>ge,isValid:()=>Uo,toArray:()=>Xe});function Bo(r){return Xe(r)}function Uo(r){return ge(r)}function ge(r){return r===void 0?!1:Array.isArray(r)&&typeof r!="string"}function Xe(r){return isNull(r)?[]:(r=ge(r)?r:[r],r=r.filter(e=>e!==void 0),r)}var qt={};m(qt,{clean:()=>zt,format:()=>Mo,formatDate:()=>Xn,isDate:()=>K,isNotDate:()=>Eo,isValid:()=>Ho,toDate:()=>me});function zt(r,e=void 0){return me(r)||e}function Ho(r){return K(r)}function Mo(r,e=!1){return Xn(r,e)}function K(r){return r===void 0||r===""?!1:r instanceof Date&&!Number.isNaN(r.getTime())}function Eo(r){return!K(r)}function me(r){if(r===void 0)return;if(K(r)==!0)return r;if(!isNaN(Number(r)))return;let e=Date.parse(r);if(!isNaN(e))return r=new Date(r),r=K(r)?r:void 0,r}function Xn(r,e=!1){if(console.log("vv",r,me(r)),r=me(r),K(r)===!1)return;let n=r,i=String(n.getFullYear()).padStart(4,"0"),o=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),l=`${i}-${o}-${a}`;if(e==!0){let u=String(n.getHours()).padStart(2,0),c=String(n.getMinutes()).padStart(2,0),d=String(n.getSeconds()).padStart(2,0);l=l+` ${u}:${c}:${d}`}return console.log("cc",l),l}var Kt={};m(Kt,{clean:()=>Wo,isNotNull:()=>Gt,isNull:()=>ye,isValid:()=>Fo});function Wo(r,e=void 0){}function Fo(r){return ye(r)}function Gt(r){return!ye(r)}function ye(r){return r===void 0||r===null?!0:r===0?!1:typeof r=="string"||he.array.isValid(r)?r.length==0:r instanceof Date?he.date.isValid(r):typeof r=="object"?Object.keys(r)==0:!1}var Xt={};m(Xt,{clean:()=>Yt,format:()=>Jo,formatDecimals:()=>Zn,isNotNumber:()=>zo,isNumber:()=>Pe,isValid:()=>Lo,toNumber:()=>Ze});function Yt(r,e=void 0){return Ze(r)??e}function Lo(r){return Pe(r)}function Jo(r,e){return Zn(r,e)}function Zn(r,e){if(r=Number(r),!isNaN(r))return e!==void 0?r.toFixed(e):r}function Pe(r){return r===void 0||r===""?!1:(r=Number(r),!isNaN(r))}function zo(r){return!Pe(r)}function Ze(r){if(r!==void 0&&(r=Number(r),!isNaN(r)))return r}var Zt={};m(Zt,{clean:()=>qo,cleanObject:()=>Ne,isObject:()=>Qe,isValid:()=>Go});function qo(r,e=void 0){return Ne(r)||e}function Go(r){return Qe(r)}function Qe(r){return r===void 0||V.isString(r)==!0||V.isDate(r)==!0||V.isNumber(r)==!0||V.isArray(r)==!0?!1:Object.keys(r).length>0}function Ne(r){if(V.array.isValid(r)){if(r.length==0)return;if(r.length==1)return r=r[0],Ne(r);if(r.length==1){let e=[];for(let n of r)e=e.concat(Ne(x));e=e.filter(n=>V.isNotNull(n))}}if(V.object.isValid(r))for(let e of Object.keys(r))r[e]=Ne(r[e]),he.isNull(r[e])&&delete r[e];return he.isNotNull(r)?r:void 0}var er={};m(er,{clean:()=>Ko,cleanString:()=>Qn,isString:()=>Ce,isValid:()=>Yo,maxLengthEnd:()=>Zo,maxLengthMiddle:()=>Xo,toString:()=>Qt});function Ko(r,e=""){return Qn(r)||e}function Yo(r){return Ce(r)&&r.trim().length>=0}function Xo(r,e){if(r==null)return"";let n=String(r);if(e===void 0||e<0||n.length<=e)return n;if(e<=3)return n.substring(0,e);let i=Math.round(e/3),o=e-i-3;return n.substring(0,i)+"..."+n.substring(n.length-o)}function Zo(r,e){if(r==null)return"";let n=String(r);return e===void 0||e<0||n.length<=e?n:e<=3?n.substring(0,e):n.substring(0,e-3)+"..."}function Ce(r){return typeof r=="string"||r instanceof String}function Qt(r){return r==null?"":String(r)}function Qn(r){return Ce(r)?r.trim():void 0}var nr={};m(nr,{clean:()=>ei,cleanUrl:()=>ri,getDomain:()=>Qo,getParams:()=>ea,getPath:()=>ii,getUrl:()=>ti,isUrl:()=>et,isValid:()=>tr,setParams:()=>ni,setPath:()=>si,toUrl:()=>rr});function tr(r){return et(r)}function ei(r,e=void 0){return ri(r)??e}function rr(r,e,n,i=void 0){return ti(r,e,n)||i}function ti(r,e,n){let i=si(r,e);return n&&(i=ni(i,n)),i}function et(r){return r=ei(r),!!r}function ri(r,e={}){let{removeTracking:n=!0,stripWww:i=!1,removeTrailingSlash:o=!0,lowercasePath:a=!1,allowedQueryParams:l=[]}=e;try{let u=new URL(r);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),i&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let c=u.pathname;if(c=c.replace(/\/+/g,"/"),a&&(c=c.toLowerCase()),o&&c.length>1&&c.endsWith("/")&&(c=c.slice(0,-1)),u.pathname=c,n){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],g=Array.from(u.searchParams.keys());for(let y of g){let b=d.some(E=>y.toLowerCase().startsWith(E)),$=l.includes(y);b&&!$&&u.searchParams.delete(y)}}return u.searchParams.sort(),u.toString()}catch{return}}function Qo(r){try{let e=new URL(r).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function ea(r){try{let e=new URL(r);return Object.fromEntries(e.searchParams)}catch{return null}}function ni(r,e){try{let n=new URL(r);for(let i of Object.keys(e))n.searchParams.set(i,e[i]);return n.toString()}catch{return null}}function ii(r){try{return new URL(r).pathname}catch{return}}function si(r,e){e=e??"";let n=[],i=ii(r)||"";n=n.concat(i.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let a of e)n=n.concat(a.split("/"));n=n.filter(a=>a!="");let o="/"+n.join("/");try{return new URL(o,r).toString()}catch(a){console.log(a,o,r);return}}var sr={};m(sr,{clean:()=>ta,format:()=>na,isDuration:()=>ve,isValid:()=>ra,toDuration:()=>ir});function ta(r,e=void 0){return toDate(r)||e}function ra(r){return ve(r)}function na(r){return sa(r)}function ve(r){return ia(r)}function ir(r){return r}function ia(r){return typeof r!="string"||r.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(r.trim())}function sa(r){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,n=r.match(e);if(!n)return"00:00:00";let[i,o,a,l,u,c,d,g]=n.map($=>parseInt($,10)||0),y=[c,d,g].map($=>String($).padStart(2,"0")).join(":"),b=[];return o&&b.push(`${o}y`),a&&b.push(`${a}m`),l&&b.push(`${l}w`),u&&b.push(`${u}d`),b.length>0?`${b.join(" ")} ${y}`:y}var V={isNull:ye,isNotNull:Gt,isArray:ge,toArray:Xe,isDate:K,toDate:me,isDuration:ve,toDuration:ir,isObject:Qe,isNumber:Pe,toNumber:Ze,isString:Ce,toString:Qt,isUrl:et,toUrl:rr,array:Jt,date:qt,duration:sr,null:Kt,number:Xt,object:Zt,string:er,url:nr,getDataType:oi,getType:oi,getJsonSchema:oa},he=V;function oi(r){if(ye(r))return"undefined";if(r===!0||r===!1)return"Boolean";if(ge(r))return"Array";if(K(r))return"DateTime";if(!isNaN(r))return"Number";if(typeof r=="string"){if(tr(r))return"URL";if(zt(r))return"DateTime";if(ve(r))return"Duration";if(Yt(r)!==void 0)return"Number";if(r.includes("[")||r.includes("{")||r.includes('"'))try{let e=JSON.parse(r);return"JSON"}catch{}return"Text"}return r?.["@id"]||r?.["@type"]?"Thing":"undefined"}function oa(r){function e(n,i=0){let o={};if(i==0&&(o.$schema="https://json-schema.org/draft/2020-12/schema",o.title=n?.["@type"]||""),V.isString(n))return o.type="string",o;if(V.isObject(n)){o.type="object",o.properties={};for(let a of Object.keys(n))o.properties[a]=e(n[a],i+1);return o}if(V.isNumber(n))return o.type="number",o;if(V.isArray(n))return o.type="array",o.items=e(n?.[0],i+1),o}return e(r,0)}var ap=globalThis.crypto.randomUUID;var tt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function be(r,e){if(!r||!r?.["@type"])return;let n=ui(r);n=n.filter(i=>typeof i=="string"),n=n.map(i=>i.toLowerCase());for(let i of n){let o=tt?.[i];if(o=="url")return di(i,rt(r));if(o=="domain")return ci(i,rt(r))}return ar(e)}function ai(r,e){if(!r||!r?.["@type"])return;let n=ui(r);for(let i of n){let o=tt?.[i];if(o=="url")return di(i,rt(r));if(o=="domain")return ci(i,rt(r))}}function li(r,e){let n=r?.["@id"];return n?aa(r)?getStandardizedRecordId(r,e)==n:or(r?.["@id"],e)==n:!1}function aa(r){let e=r?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let n of e)if(tt?.[n])return tt?.[n]}function ui(r){let e=r?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(n=>n),e}function rt(r){let e=r?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(n=>n),e}function ar(r){return r=or(r),r?(r.endsWith("/")||(r=r+"/"),or(r)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function di(r,e){if(!r||typeof r!="string")return;r=r.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(o=>V.url.clean(o)),e=e.filter(o=>o);let n=e?.[0];return n?n+"#"+r:"_:"+globalThis.crypto.randomUUID()}function ci(r,e){if(!r||typeof r!="string")return;r=r.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(o=>la(o)),e=e.map(o=>"https://"+o),e=e.filter(o=>o);let n=e?.[0];return n?(n.endsWith("/")||(n=n+"/"),n+"#"+r):"_:"+globalThis.crypto.randomUUID()}function la(r){if(!r||typeof r!="string")return null;try{let e=r.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function or(r,e="https"){if(!r||typeof r!="string")return null;let n=r.trim();n.startsWith("//")?n=`${e}:${n}`:/^https?:\/\//i.test(n)||(n=`${e}://${n}`);try{let i=new URL(n);i.hostname=i.hostname.toLowerCase();let o=i.toString();return o.endsWith("/")&&!r.endsWith("/")&&(o=o.slice(0,-1)),o}catch{return null}}function ua(r,e){r=fi(r);let n=da(r,e);return pi(r,n)}function da(r,e){function n(o,a){if(a=a||"https://www.test.com/",s.isArray(o)){let u=[];for(let c of o)u=u.concat(n(c));return u}if(s.isObject(o)==!1)return[];let l=[{replacee:s.record_id(o),replacer:be(o,a)}];for(let u of Object.keys(o))l=l.concat(n(o[u],a));return l}let i=n(r,e);return i=i.filter(o=>o),i}function fi(r){if(Array.isArray(r))return r.map(e=>s.assignId(e));if(s.isObject(r)==!1)return r;r["@id"]=r?.["@id"]||"_:"+s.randomUUID();for(let e of Object.keys(r))r[e]=s.assignId(r[e]);return r}function ca(r){return ar(r)}function fa(r,e=[]){if(s.isArray(r))return r.map(n=>s.assignId(n,e));if(s.isObject(r)==!1||e.includes(r))return r;e.push(r);for(let n of Object.keys(r))r["@id"]=r?.["@id"]||"_:"+s.randomUUID(),r[n]=s.assignId(r[n],e);return r}function pi(r,e){function n(i,o){if(Array.isArray(i))return i.map(u=>s.replaceIds(u,o));if(!i?.["@id"])return i;let a=i?.["@id"],l=o.get(a);l&&(i["@id"]=l);for(let u of Object.keys(i))i[u]=s.replaceIds(i?.[u],o);return i}if(!(e instanceof Map)){let i=new Map;e=(Array.isArray(e),e),e.forEach(o=>i.set(o.replacee,o.replacer)),e=i}return n(r,e)}var dr={};m(dr,{DB:()=>ur,_storeToMap:()=>Re,_storeToOriginal:()=>ga,getRecord:()=>xe,getRecords:()=>je,patchRecord:()=>mi,postRecord:()=>gi});var ur=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,n=!0){return e=e?.["@id"]||e,xe(this._store,e,n)}getOrCreate(e,n=!0){let i=this.get(e,n);return(!i||s.isRef(i))&&(this.set(e),i=this.get(e,n)),i}search(e={},n=!0){return je(this._store,e,n)}set(e){let n=s.flatten(e),i=n.map(o=>xe(this._store,s.record_id(o),!1));for(let o of n)this._store=gi(this._store,o);return this._broadcastIfChanged(i,n),e}post(e){return this.set(e)}patch(e,n=!0){let i=s.flatten(e),o=i.map(a=>xe(this._store,s.record_id(a),!1));for(let a of i)this._store=mi(this._store,a,n);return this._broadcastIfChanged(o,i),e}delete(e){let n=[this.get(e)];this._store=s.deleteRecord(this._store,e),this._broadcastIfChanged(n,[{"@id":e}])}getValue(e,n,i,o){let a=this.get(e);return s.getValue(a,n,i,o)}getValues(e,n,i){let o=this.get(e);return s.getValues(o,n,i)}setValue(e,n,i){let o=this.get(e);return o||(o={"@id":e}),o=s.clone(o),o=s.setValue(o,n,i),this.set(o)}setValues(e,n,i){let o=this.get(e);return o||(o={"@id":e}),o=s.clone(o),o=s.setValue(o,n,i),this.set(o)}addValue(e,n,i){let o=this.get(e);return o||(o={"@id":e}),o=s.clone(o),o=s.addValue(o,n,i),this.set(o)}addValues(e,n,i){let o=this.get(e);return o||(o={"@id":e}),o=s.clone(o),o=s.addValues(o,n,i),this.set(o)}length(){return this._store.size}get records(){return je(this._store)}getRecords(e=!1){return je(this._store,void 0,!1)}get record_ids(){return pa(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),prepend:this._list_prepend.bind(this),append:this._list_append.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.insert(e,n,i),this.set(e)}_list_upsert(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.upsert(e,n,i),this.set(e)}_list_prepend(e,n){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.prepend(e,n),this.set(e)}_list_append(e,n){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.append(e,n),this.set(e)}_list_insertBefore(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),i=this.getOrCreate(i),e=s.list.insertBefore(e,n,i),this.set(e)}_list_insertAfter(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.insertAfter(e,n,i),this.set(e)}_list_moveBefore(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),i=this.getOrCreate(i),e=s.list.moveBefore(e,n,i),this.set(e)}_list_moveAfter(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.moveAfter(e,n,i),this.set(e)}_list_moveUp(e,n){e=this.getOrCreate(e),e=s.list.moveUp(e,n),this.set(e)}_list_moveDown(e,n){e=this.getOrCreate(e),e=s.list.moveDown(e,n),this.set(e)}_list_remove(e,n){e=this.getOrCreate(e),e=s.list.remove(e,n),this.set(e)}_list_delete(e,n){e=this.getOrCreate(e),e=s.list.remove(e,n),this.set(e)}_list_replace(e,n,i){e=this.getOrCreate(e),n=this.getOrCreate(n),e=s.list.replace(e,n,i),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.getOrCreate(e),this.list.getItems(e)}_list_getListItems(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.getOrCreate(e),this.list.getItemListElement(e)}getRecord(e,n=!0,i=void 0){let o=this.get(e);return!o||s.isRef(o)?i:o}updateRefs(e){function n(i,o={}){if(s.isArray(i))return i.map(a=>n(i,o));if(s.isObject(i)){if(s.isRef(i)){if(o?.[s.record_id(i)])return o[s.record_id(i)];i=xe(i,!0,i),o[s.record_id(i)]=i;for(let a of Object.keys(i))i[a]=n(i,o)}return i}return i}return n(e,{})}execute(e){return e=this.updateRefs(e),e=s.execute(e),this.set(s.getResults(e)),e}subscribe(e,n){(!e||e=="*"||e=="all")&&(e="all");let i=this._subscriptions.get(e)||[];i.includes(n)||(i.push(n),this._subscriptions.set(e,i))}unsubscribe(e,n){(!e||e=="*"||e=="all")&&(e="all");let i=this._subscriptions.get(e)||[];i=i.filter(o=>o!=n),this._subscriptions.set(e,i)}async _broadcastIfChanged(e,n){let i=[];for(let o of n){let a=e.find(l=>s.record_id(l)==s.record_id(o));s.isEqual(a,o)||i.push(s.record_id(o))}this.broadcast(i)}broadcast(e){e=s.toArray(e),e=[...new Set(e)];for(let n of e){let i=this.get(n),o=this._subscriptions.get(n)||[];o=o.concat(this._subscriptions.get("all")||[]),o=[...new Set(o)];for(let a of o)this._broadcastItem(a,i)}}async _broadcastItem(e,n){try{return e(n)}catch{}}static randomUUID(){return s.randomUUID()}static clean(e,n){return s.clean(e,n)}static flatten(e){return s.flatten(e)}static getValue(e,n,i,o){return s.getValue(e,n,i,o)}static getValues(e,n,i){return s.getValues(e,n,i)}static setValue(e,n,i,o){return s.setValue(e,n,i,o)}static setValues(e,n,i){return s.setValues(e,n,i)}static addValue(e,n,i){return s.addValue(e,n,i)}static addValues(e,n,i){return s.addValues(e,n,i)}static strip(e){return s.strip(e)}static get dot(){return pe}static ref(e){return s.ref(e)}static simplify(e){return s.simplify(e)}static isJsonld(e){return s.isJsonld(e)}static isValid(e){return s.isValid(e)}static isArray(e){return s.isArray(e)}static setAdditionalProperty(e,n,i,o){return s.setAdditionalProperty(e,n,i,o)}static getAdditionalProperty(e,n){return s.getAdditionalProperty(e,n)}};function gi(r,e){if(!e)return;e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let n=Re(r);for(let i of e)n.get(i?.["@id"])&&s.isRef(i)||n.set(i?.["@id"],i);return r=s._storeToOriginal(n),r}function mi(r,e,n=!0){e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let i=Re(r);for(let o of e){let a=i.get(s.record_id(o));o=s.patch(a,o),i.set(s.record_id(o),o)}return r=s._storeToOriginal(i),r}function xe(r,e,n=!0){if(s.isArray(e))return e.map(l=>xe(r,l,n));let i=s._utilGetId(e),o=Re(r),a=o.get(i);return n==!0&&(a=s.expand(o,a)),a=s.clone(a),a}function je(r,e,n=!0){let i=Re(r),o=Array.from(i.values());return e&&(o=o.filter(a=>s.evaluate(a,e))),n==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function pa(r){return je(r).map(i=>s.record_id(i))}function Re(r){if(r instanceof Map||Object.prototype.toString.call(r)==="[object Map]")return r;r=s.toArray(r),r=r.filter(n=>s.isRef(n)===!1),r=r||[],r=Array.isArray(r)?r:[r];let e=new Map;for(let n of r){let i=s.record_id(n);i&&(e.has(i)&&(n=s.merge(e.get(i),n,!0)),e.set(i,n))}return r=e,r}function ga(r){return r=Array.from(r.values()),r}var fr={};m(fr,{JSON_parse:()=>ya,JSON_stringify:()=>Vi,clean:()=>yi,clone:()=>wi,contractAtValue:()=>it,expandAtValue:()=>ba,getRecordUrl:()=>wa,isJsonld:()=>hi,isValid:()=>ma,merge:()=>xa,patch:()=>Va,removeCircularRefs:()=>bi,sortedReplacer:()=>xi,stringify:()=>ha});function ma(r){return hi(r)}function hi(r){return r?.["@type"]||r?.["@id"]}function yi(r,e){if(Array.isArray(r)&&r.length>1)return r.map(o=>yi(o,e));if(!r?.["@type"]||!r?.["@id"])return r;try{r=wi(r)}catch{}r=setTempID(r);let n=s.flatten(r);n=n.map(o=>JSON.parse(JSON.stringify(o,Object.keys(o).sort(),4)));let i=[];for(let o of n){if(o["@id"]=Array.isArray(o?.["@id"])?o?.["@id"][0]:o?.["@id"],li(o)==!0)continue;let a=ai(o,e);if(a&&o?.["@id"]!=a){let l={replacer:a,replacee:o?.["@id"]};i.push(l)}if(!a&&o?.["@id"].startsWith("_:")){let l={replacer:s.getGenericRecordID(e),replacee:o?.["@id"]};i.push(l)}}return r=s.replaceIds(r,i),r}function bi(r){return cr(r,new Set)}function cr(r,e){if(e=new Set([...e]),r===null||typeof r!="object")return r;if(s.isArray(r))return r.map(i=>cr(i,e));if(!s.isObject(r))return r;let n=s.record_id(r);if(e.has(n))return s.ref(r);e.add(n);for(let i of Object.keys(r))r[i]=cr(r[i],e);return r}function xi(r,e){return e instanceof Object&&!(e instanceof Array)?Object.keys(e).sort().reduce((n,i)=>(n[i]=e[i],n),{}):e}function Vi(r){return r=bi(r),JSON.stringify(r,xi,4)}function ha(r){return Vi(r)}function ya(r){return JSON.parse(r)}function ba(r){function e(n,i=!1){let o=s.getAtValue(n);if(o&&o.length>0)return s.setAtValue(n,e(o,!0));if(s.isArray(n))return n.map(a=>e(a,i));if(s.isJsonld(n)){for(let a of Object.keys(n?.record||n))n=s.setValues(n,a,e(s.getValues(n,a),!1));return n}return i===!1?{"@value":n}:n}return e(r,!1)}function it(r){let e=s.getAtValue(r);if(e&&e.length>0)return it(s.getAtValue(r));if(s.isArray(r))return r.map(n=>it(n));if(s.isJsonld(r)){for(let n of Object.keys(r?.record||r))s.setValues(r,n,it(s.getValues(r,n)));return r}return r}function wi(r){try{return r=structuredClone(r),r}catch{}try{return r=JSON.parse(JSON.stringify(r)),r}catch{}return r}function xa(r,e,n=!0){r=s.isArray(r)&&r.length==1?r[0]:r,e=s.isArray(e)&&r.length==2?e[0]:e,r=r??{},e=e??{};let i=[];i=i.concat(Object.keys(r)),i=i.concat(Object.keys(e)),i=[...new Set(i)];let o={"@id":r?.["@id"]||e?.["@id"]};for(let a of i){if(a=="@id")continue;let l=s.toArray(r?.[a]||void 0),u=s.toArray(e?.[a]||void 0),c=l.concat(u);n==!0&&(c=s.dedupe(c)),o[a]=c}return o}function Va(r,e){r=s.isArray(r)&&r.length==1?r[0]:r,e=s.isArray(e)&&r.length==2?e[0]:e,r=r??{},e=e??{};for(let n of s.keys(e)){let i=s.getValues(e,n);r=s.setValues(r,n,i)}return r}function wa(r,e){e=e?.baseUrl??e;try{return V.url.getUrl(e,encodeURIComponent(s.record_id(r)))}catch{return console.log("Err getRecordUrl"),""}}var yr={};m(yr,{ID:()=>Ha,Id:()=>Wa,Type:()=>Ta,actionStatus:()=>tl,addValue:()=>$i,addValues:()=>_i,contentUrl:()=>il,description:()=>al,email:()=>dl,getActionStatus:()=>rl,getAdditionalProperty:()=>Xa,getAtValue:()=>Qa,getContentUrl:()=>sl,getDescription:()=>ll,getEmail:()=>cl,getID:()=>Ma,getId:()=>Fa,getImageName:()=>hu,getImageUrl:()=>mu,getItem:()=>gl,getItemListElement:()=>Vl,getItems:()=>yl,getName:()=>kl,getNumberOfItems:()=>Sl,getObject:()=>Pl,getObjects:()=>vl,getPosition:()=>Dl,getPotentialAction:()=>Ul,getPotentialActions:()=>El,getRecordID:()=>Ba,getRecordId:()=>Ra,getRecordType:()=>Sa,getRecord_id:()=>Ca,getRecord_type:()=>ka,getResult:()=>Ll,getResults:()=>ql,getTargetCollection:()=>Yl,getTargetCollections:()=>Ql,getText:()=>ru,getType:()=>Pa,getUrl:()=>su,getValue:()=>T,getValues:()=>hr,hasValue:()=>Si,insertValue:()=>Ya,isActive:()=>lu,isCompleted:()=>uu,isFailed:()=>du,isPotential:()=>au,isRef:()=>za,item:()=>pl,itemListElement:()=>xl,items:()=>hl,keys:()=>Ga,name:()=>Al,numberOfItems:()=>_l,object:()=>Tl,objects:()=>Cl,position:()=>Rl,potentialAction:()=>Bl,potentialActions:()=>Ml,properties:()=>mr,recordID:()=>Oa,recordId:()=>ja,recordType:()=>_a,record_id:()=>gr,record_type:()=>Aa,ref:()=>qa,result:()=>Fl,results:()=>zl,setActionStatus:()=>nl,setActive:()=>fu,setAdditionalProperty:()=>Za,setAtValue:()=>el,setCompleted:()=>pu,setContentUrl:()=>ol,setDescription:()=>ul,setEmail:()=>fl,setFailed:()=>gu,setID:()=>Ea,setId:()=>La,setIfNull:()=>Ka,setItem:()=>ml,setItemListElement:()=>wl,setItems:()=>bl,setName:()=>$l,setNumberOfItems:()=>Il,setObject:()=>Nl,setObjects:()=>jl,setPosition:()=>Ol,setPotential:()=>cu,setPotentialAction:()=>Hl,setPotentialActions:()=>Wl,setRecordID:()=>Ua,setRecordId:()=>Da,setRecordType:()=>Ia,setRecord_id:()=>va,setRecord_type:()=>$a,setResult:()=>Jl,setResults:()=>Gl,setTargetCollection:()=>Xl,setTargetCollections:()=>eu,setText:()=>nu,setType:()=>Na,setUrl:()=>ou,setValue:()=>D,setValueIfNull:()=>ki,setValues:()=>De,targetCollection:()=>Kl,targetCollections:()=>Zl,text:()=>tu,toRecord_id:()=>Ai,toRecord_ids:()=>Ja,url:()=>iu});var Ve="en-CA";function Aa(r){return T(r,"@type")}function ka(r){return T(r,"@type")}function $a(r,e){return D(r,"@type",e)}function _a(r){return T(r,"@type")}function Sa(r){return T(r,"@type")}function Ia(r,e){return D(r,"@type",e)}function Ta(r){return T(r,"@type")}function Pa(r){return T(r,"@type")}function Na(r,e){return D(r,"@type",e)}function gr(r){return T(r,"@id")}function Ca(r){return T(r,"@id")}function va(r,e){return D(r,"@id",e)}function ja(r){return T(r,"@id")}function Ra(r){return T(r,"@id")}function Da(r,e){return D(r,"@id",e)}function Oa(r){return T(r,"@id")}function Ba(r){return T(r,"@id")}function Ua(r,e){return D(r,"@id",e)}function Ha(r){return T(r,"@id")}function Ma(r){return T(r,"@id")}function Ea(r,e){return D(r,"@id",e)}function Wa(r){return T(r,"@id")}function Fa(r){return T(r,"@id")}function La(r,e){return D(r,"@id",e)}function Ai(r){return typeof r=="string"?r:gr(r)}function Ja(r){if(s.isArray(r)){let e=[];return r.foreach(n=>{e=e.concat(Ai(n))}),e}return typeof r=="string"?[r]:[gr(r)]}function za(r){return!s.isObject(r)||!r?.["@id"]?!1:!Object.keys(r).some(e=>e!="@id")}function qa(r){if(r?._isThingClass==!0)return record.ref;if(!r)return;let e=s._utilGetId(r);if(e)return{"@id":e}}function Ga(r){return mr(r)}function mr(r){if(!r)return[];if(s.isArray(r)){let n=[];for(let i of r)n=n.concat(mr(i));return[...new Set(n)]}return Object.keys(r?.record||r)}function T(r,e,n,i,o){let a=hr(r,e,i,o);return n=Number(n),isNaN(n)&&(n=0),a?.[n]??i}function D(r,e,n,i,o){if(i!==void 0){let a=s.getValues(r,e);for(;a.length-1<i;)a.push(null);a[i]=n,n=a}return De(r,e,n,o)}function ki(r,e,n,i,o){let a=T(r,e,i);return s.isNull(a)==!1?r:D(r,e,n,i,o)}function Ka(r,e,n,i,o){return ki(r,e,n,i,o)}function $i(r,e,n){return _i(r,e,n)}function _i(r,e,n){return n=s.getValues(r,e).concat(n),De(r,e,n)}function hr(r,e,n,i){if(r===void 0)return[];if(e==null||e=="")return[];r=r?.record||r;let o=e.split("."),a=r;for(let u=0;u<o.length;u++){let[c,d]=pr(o[u]);c&&(a=a?.[c],a=s.toArray(a)),a=a.filter(g=>g?.["@language"]==i||g?.["@language"]==Ve||g?.["@lannguage"]===void 0),a=a.map(g=>g?.["@value"]??g),a=s.toArray(a),a=a.map(g=>g?.[i]??g?.[Ve]??g),a=s.toArray(a),u<o.length-1&&(a=a?.[d])}let l=s.toArray(a);return l.length==0&&n!==void 0?n:l}function De(r,e,n,i){r=r?.record||r;let o=e.split("."),a=r||{};for(let c=0;c<o.length-1;c++){let[d,g]=pr(o[c]);a[d]=a?.[d]||[];let y;for(a?.[d]?.[i]?(a[d][i]=s.toArray(a?.[d]?.[i]),y=a[d][i]):a?.[d]?.[Ve]?(a[d][Ve]=s.toArray(a?.[d]?.[Ve]),y=a[d][Ve]):(a[d]=s.toArray(a?.[d])||[],y=a[d]);y.length-1<g;)y.push({"@type":"Thing"});a=y?.[g]}let[l,u]=pr(o[o.length-1]);return a[l]=s.toArray(n),r}function Ya(r,e,n){return Si(r,e,n)==!0?r:$i(r,e,n)}function Si(r,e,n){let i=hr(r,e);if(i.length==0)return!1;for(let o of i)if(s.isSame(o,n))return!0;return!1}function pr(r){if(r===void 0)return 0;let e=r.split("[")?.[0],n=(r.split("[")?.[1]||"").split("]")?.[0];return n=Number(n),n=isNaN(n)?0:n,[e,n]}function Xa(r,e){let i=s.getValues(r,"additionalProperty").find(a=>s.getValue(a,"propertyID")==e);return s.getValue(i,"value")}function Za(r,e,n,i){let o=s.getValues(r,"additionalProperty");o=o.filter(l=>s.getValue(l,"propertyID")!=e);let a={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:e,value:n};return r=s.addValue(r,"additionalProperty",a),r}function Qa(r){return s.getValues(r,"@value")}function el(r,e){return s.setValues(r,"@value",e)}function tl(r){return s.getValue(r,"actionStatus")}function rl(r){return s.getValue(r,"actionStatus")}function nl(r,e){return s.setValue(r,"actionStatus",e)}function il(r){return s.getValue(r,"contentUrl")}function sl(r){return s.getValue(r,"contentUrl")}function ol(r,e){return s.setValue(r,"contentUrl",e)}function al(r){return s.getValue(r,"description")}function ll(r){return s.getValue(r,"description")}function ul(r,e){return s.setValue(r,"description",e)}function dl(r){return s.getValue(r,"email")}function cl(r){return s.getValue(r,"email")}function fl(r,e){return s.setValue(r,"email",e)}function pl(r){return s.getValue(r,"item")}function gl(r){return s.getValue(r,"item")}function ml(r,e){return s.setValue(r,"item",e)}function hl(r){return s.list.getItems(r)}function yl(r){return s.list.getItems(r)}function bl(r,e){return s.list.setItems(r,e)}function xl(r){return s.list.getItemListElement(r)}function Vl(r){return s.list.getItemListElement(r)}function wl(r,e){return s.list.setItemListElement(r,e)}function Al(r){return s.getValue(r,"name")}function kl(r){return s.getValue(r,"name")}function $l(r,e){return s.setValue(r,"name",e)}function _l(r){return s.getValue(r,"numberOfItems")}function Sl(r){return s.getValue(r,"numberOfItems")}function Il(r,e){return s.setValue(r,"numberOfItems",e)}function Tl(r){return s.getValue(r,"object")}function Pl(r){return s.getValue(r,"object")}function Nl(r,e){return D(r,"object",e)}function Cl(r){return s.getValues(r,"object")}function vl(r){return s.getValues(r,"object")}function jl(r,e){return De(r,"object",e)}function Rl(r){return s.list.getPosition(r)}function Dl(r){return s.list.getPosition(r)}function Ol(r,e){return s.list.setPosition(r,e)}function Bl(r){return s.getValues(r,"potentialAction")}function Ul(r){return s.getValues(r,"potentialAction")}function Hl(r,e){return s.setValues(r,"potentialAction",e)}function Ml(r){return s.getValues(r,"potentialAction")}function El(r){return s.getValues(r,"potentialAction")}function Wl(r,e){return s.setValues(r,"potentialAction",e)}function Fl(r){return s.getValue(r,"result")}function Ll(r){return s.getValue(r,"result")}function Jl(r,e){return D(r,"result",e)}function zl(r){return s.getValues(r,"result")}function ql(r){return s.getValues(r,"result")}function Gl(r,e){return De(r,"result",e)}function Kl(r){return s.getValue(r,"targetCollection")}function Yl(r){return s.getValue(r,"targetCollection")}function Xl(r,e){return s.setValue(r,"targetCollection",e)}function Zl(r){return s.getValues(r,"targetCollection")}function Ql(r){return s.getValues(r,"targetCollection")}function eu(r,e){return s.setValues(r,"targetCollection",e)}function tu(r){return s.getValue(r,"text")}function ru(r){return s.getValue(r,"text")}function nu(r,e){return s.setValue(r,"text",e)}function iu(r){return s.getValue(r,"url")}function su(r){return s.getValue(r,"url")}function ou(r,e){return s.setValue(r,"url",e)}function au(r){return s.getValue(r,"actionStatus")=="PotentialActionStatus"}function lu(r){return s.getValue(r,"actionStatus")=="ActiveActionStatus"}function uu(r){return s.getValue(r,"actionStatus")=="CompletedActionStatus"}function du(r){return s.getValue(r,"actionStatus")=="FailedActionStatus"}function cu(r){return r=s.setValue(r,"actionStatus","PotentialActionStatus"),r=s.setValue(r,"startTime",void 0),r=s.setValue(r,"endTime",void 0),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",void 0),r}function fu(r){return r=s.setValue(r,"actionStatus","ActiveActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",void 0),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",void 0),r}function pu(r,e){return r=s.setValue(r,"actionStatus","CompletedActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",s.getValue(r,"endTime")??new Date),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",e??s.getValues(r,"result")),r}function gu(r,e){return r=s.setValue(r,"actionStatus","FailedActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",s.getValue(r,"endTime")??new Date),r=s.setValue(r,"error",String(e)),r=s.setValue(r,"result",void 0),r}function mu(r){if(s.record_type(r)=="ImageObject")return s.getValue(r,"contentUrl");let e=s.getValue(r,"image.contentUrl");return e=e??s.getValue(r,"image.url"),e=e??s.getValue(r,"image"),e=typeof e=="string"?e:"",e}function hu(r){let e=s.getValue(r,"image.name");return e=e??s.getValue(r,"image.name"),e=e??s.record_id(r),e=typeof e=="string"?e:"",e}var xr={};m(xr,{_utilGetId:()=>$u,getDataType:()=>bu,isArray:()=>br,isBoolean:()=>Ii,isDate:()=>oe,isJsonld:()=>vi,isNotDate:()=>Au,isNotNull:()=>xu,isNotNumber:()=>Vu,isNotString:()=>wu,isNull:()=>v,isNumber:()=>st,isObject:()=>Ci,isString:()=>Oe,randomUUID:()=>yu,toArray:()=>ji,toDate:()=>Ni,toNumber:()=>Ti,toSingle:()=>ku,toString:()=>Pi});function yu(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let r=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let n=r()%16;return(e==="x"?n:n&3|8).toString(16)})}function bu(r){if(v(r))return"Undefined";if(br(r))return"Array";if(vi(r))return"Jsonld";let e=Ni(r);if(oe(e))return"Date";let n=Ti(r);return st(n)?"Number":Ci(r)?"Object":Oe(r)?'String"':Ii(r)?"Boolean":"Undefined"}function v(r,e=void 0){return r==null||typeof r=="string"&&r.length==0?!0:e==null?!1:s.getValues(r,e).length==0}function xu(r,e=void 0){return!v(r,e)}function Ii(r){return r===!0||r===!1}function st(r){return v(r)||r===""?!1:(r=Number(r),!isNaN(r))}function Vu(r){return!st(r)}function Ti(r){if(!v(r)&&(r=Number(r),!isNaN(r)))return r}function Oe(r){return v(r)?!1:typeof r=="string"}function wu(r){return!Oe(r)}function Pi(r){if(v(r))return"";if(Oe(r))return r;if(s.isValid(r))return s.exportToString(r);if(oe(r))return r.toLocaleString();if(s.isArray(r)){let e=`Array of ${r.length} items.
--------------------
`,n=0,i=r.length-1;i=i>8?8:i;for(let o=0;o<i;o++)e+=Pi(r[o])+`
`;return e}return String(r)}function oe(r){return v(r)||r===""?!1:r instanceof Date&&!Number.isNaN(r.getTime())}function Au(r){return!oe(r)}function Ni(r){if(v(r))return;if(oe(r)==!0)return r;if(!isNaN(Number(r)))return;let e=Date.parse(r);if(!isNaN(e))return r=new Date(r),r=oe(r)?r:void 0,r}function Ci(r){if(Object.prototype.toString.call(r)!=="[object Object]")return!1;let e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function vi(r){return v(r)?!1:!!(r?.["@id"]||r?.["@type"])}function br(r){return v(r)?!1:Array.isArray(r)&&typeof r!="string"}function ji(r){return v(r)?[]:(r=br(r)?r:[r],r=r.filter(e=>e!=null),r)}function ku(r){return r=ji(r),r?.[0]??void 0}function $u(r){let e=r;if(e!==void 0&&e!==null)return s.isArray(e)&&e.length==1&&(e=e[0]),s.isString(e)?e:(e=s.record_id(e),e??void 0)}var Vr={};m(Vr,{concat:()=>_u,dedupe:()=>Ri,deleteItem:()=>Tu,diff:()=>Iu,filter:()=>vu,find:()=>Cu,includes:()=>ot,insertItem:()=>Pu,intersection:()=>Su,length:()=>Nu,search:()=>Oi,sort:()=>we,upsertItem:()=>Di});function Ri(r,e=!0){if(r=s.toArray(r),r.length<2)return r;let n=[];for(let i of r)ot(n,i)==!1&&(e==!0&&s.isValid(i)&&Oi(r,i).forEach(a=>i=s.merge(a,i)),n.push(i));return n=we(n),n}function ot(r,e){r=s.toArray(r);for(let n of r)if(s.isSame(n,e)==!0)return!0;return!1}function _u(r,e,n=!0){r=s.toArray(r),e=s.toArray(e);let i=r.concat(e);return i=i.filter(o=>o!=null),n==!0&&(i=Ri(i)),i=we(i),i}function we(r,e=void 0,n=void 0){return n=n??1,typeof n=="string"&&(n=n.toLowerCase()),n=n=="asc"?1:n,n=n=="desc"?-1:n,r=s.toArray(r),r.length<2||(e==null?n==1?r.sort((i,o)=>s.lt(i,o)==!0?-1:1):r.sort((i,o)=>s.gt(i,o)==!0?-1:1):n==1?r.sort((i,o)=>s.lt(s.getValue(i,e),s.getValue(o,e))==!0?-1:1):r.sort((i,o)=>s.gt(s.getValue(i,e),s.getValue(o,e))==!0?-1:1)),r}function Su(r,e){r=s.toArray(r),e=s.toArray(e);let n=[];for(let i of r)ot(e,i)==!0&&n.push(i);return n=we(n),n}function Iu(r,e){r=s.toArray(r),e=s.toArray(e);let n=[];for(let i of r)ot(e,i)==!1&&n.push(i);return n=we(n),n}function Tu(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)==!1&&n.push(i);return n}function Di(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)==!0?n.push(e):n.push(i);return n}function Pu(r,e){return Di(r,e)}function Nu(r){return r=s.toArray(r),r.length}function Cu(r,e){r=s.toArray(r);for(let n of r)if(s.isSame(n,e))return n}function Oi(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)&&n.push(i);return n}function vu(r,e,n,i,o,a){return r=s.toArray(r),r.length==0?itemList:(s.isNotNull(e)&&(r=r.filter(l=>s.evaluate(l,e))),r=we(r,n,i),r.length==0||(a=s.toNumber(a),s.isNumber(a)&&(r=r.slice(a)),o=s.toNumber(o),s.isNumber(o)&&r.length>=o&&(r=slice(0,o))),r)}var wr={};m(wr,{exportToString:()=>Bi});function Bi(r){return Array.isArray(r)?ju(r):s.record_type(r)=="ListItem"?Ru(r):s.record_type(r)=="ItemList"?Du(r):s.record_type(r)=="Action"?Ou(r):s.getValue(r,"name")||s.getValue(r,"@id")}function ju(r){let e=`Array (${r.length})
--------------------------
`;return r.forEach(n=>e+=Bi(n)+`
`),e}function Ru(r){return`${s.getValue(r,"position")} - ${s.getValue(r,"item.name")||s.getValue(r,"item.@id")}`}function Du(r){let e=s.getValues(r,"itemListElement"),n=`ItemList${s.getValue(r,"name")||s.getValue(r,"@id")} (${e.length})
--------------------------
`;return e.forEach(i=>n+=toString(i)+`
`),n}function Ou(r){return`${s.getValue(r,"name")||s.getValue(r,"@id")} - ${s.getValue(r,"actionStatus")}`}var kr={};m(kr,{DatabaseHelper:()=>Ar,testDB:()=>Bu});var Ar=class{constructor(e){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let n=s.toArray(this.parentRecord).map(i=>this.tempDB.get(i?.["@id"]||i));return n=s.simplify(n),n=s.toArray(n),s.isArray(this.parentRecord)?n:n?.[0]||void 0}#t(e){let n=s.toArray(e);n=n.map(a=>typeof a=="string"?{"@id":a}:a),s.isArray(e)==!1&&(n=n?.[0]);let i=n;this.parentRecord=i,this.#r(i);let o=s.getChildren(i);this.#r(o)}#s(e){let n=s.toArray(e);n=n.map(o=>o?.record||o),n=n.filter(o=>o),this.tempDB.set(n),this.#n(n),this.#i(n);let i=s.getChildren(n);this.#r(i)}#n(e){let n=s.toArray(e);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let o=s.toArray(this._retrieved).concat(n);o=[...new Set(o)],this._retrieved=s.toArray(o)}#r(e){let n=s.toArray(e);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let i=s.toArray(this._retrieved);n=n.filter(a=>i.includes(a)==!1),n=s.toArray(this._toGet).concat(n),n=[...new Set(n)],this._toGet=s.toArray(n)}#i(e){let n=s.toArray(e);n=n.map(o=>o?.record||o),n=n.map(o=>o?.["@id"]||o),n=[...new Set(n)],n=n.filter(o=>o);let i=s.toArray(this._toGet);this._toGet=i.filter(o=>n.includes(o)==!1)}};function Bu(){}var jr={};m(jr,{add:()=>Wu,append:()=>Be,clean:()=>$r,decrementPositions:()=>Cr,duplicate:()=>Ku,ensurePositions:()=>ke,ensurePreviousNextItem:()=>ut,filter:()=>Yu,find:()=>L,findByItem:()=>Sr,findByListItem:()=>_r,findByPosition:()=>Li,getILE:()=>Eu,getItem:()=>Me,getItemListElement:()=>I,getItems:()=>Ji,getMaxPosition:()=>He,getMinPosition:()=>vr,getPosition:()=>P,gt:()=>Fi,incrementPositions:()=>Nr,insert:()=>j,insertAfter:()=>Pr,insertBefore:()=>Tr,isItemList:()=>C,isListItem:()=>at,length:()=>Mu,lt:()=>Wi,move:()=>Fu,moveAfter:()=>qu,moveBefore:()=>zu,moveDown:()=>Ju,moveUp:()=>Lu,prepend:()=>Hi,remove:()=>Ei,replace:()=>Mi,setItem:()=>qi,setItemListElement:()=>B,setItems:()=>zi,setPosition:()=>lt,sort:()=>Ue,toItemList:()=>Hu,toListItem:()=>Ae,toString:()=>Uu,toStringItemList:()=>Ui,toStringListItem:()=>Ir,upsert:()=>Gu});function Uu(r){return C(r)?Ui(r):Ir(r)}function Ui(r){let e=[`ItemList ${s.getValue(r,"name")||s.record_id(r)}`],n=I(r);return e=e.concat(n.map(i=>Ir(i))),e.join(`
`)}function Ir(r){return`${P(r)} - ${s.getValue(r,"item.name")||s.record_id(r)}`}function C(r){return s.record_type(r)==="ItemList"}function Hu(r){if(C(r)==!1){let e=s.toArray(r);return r={"@type":"ItemList","@id":s.randomUUID(),itemListElement:e.map((n,i)=>Ae(n,i))},$r(r)}return $r(r)}function $r(r){r=s.setValueIfNull(r,"@id",s.randomUUID());let e=I(r);return e=e.map(n=>Ae(n)),e=ke(e),e=ut(e),r=B(r,e),r=s.setValue(r,"numberOfItems",e.length),r}function Mu(r){return I(r).length}function I(r){return s.getValues(r,"itemListElement")||[]}function Eu(r){return I(r)}function B(r,e){return e=s.toArray(e),e=e.map((n,i)=>Ae(n)),e=ke(e),e=ut(e),r=s.setValues(r,"itemListElement",e),r=s.setValue(r,"numberOfItems",e.length),r}function j(r,e,n){if(r=ke(r),s.isArray(e)){let o=n;for(let a of e)r=j(r,a,o),(o||o===0)&&(o+=1);return r}e=Ae(e,n);let i=I(r);return i=i.filter(o=>s.record_id(o)!=s.record_id(e)),n=n??He(i),n=n??i.length,n=n>=0?n:0,i=Nr(i,n),i=Ue(i),i.push(e),r=B(r,i),r}function Tr(r,e,n){if(s.isArray(e)){for(let a of e)r=Tr(r,a,n);return r}let i=L(r,n);if(!i)return j(r,e);let o=P(i);return j(r,e,o)}function Pr(r,e,n){if(s.isArray(e)){for(let a of e)r=Pr(r,a,n);return r}let i=L(r,n);if(!i)return j(r,e);let o=P(i);return j(r,e,o+1)}function Hi(r,e){if(s.isArray(e)){for(let n=e.length-1;n>=0;n--)r=Hi(r,e?.[n],referenceItem);return r}return j(r,e,0)}function Be(r,e){if(s.isArray(e)){for(let o of e)r=Be(r,o,referenceItem);return r}let n=I(r);if(n.length==0)return j(r,e,0);let i=He(r);return i||i===0?j(r,e,i+1):j(r,e,n.length)}function Wu(r,e){return Be(r,e)}function Fu(r,e,n){return j(r,e,n)}function Lu(r,e){let n=L(r,e),i=P(n);return i==0?r:j(r,n,i-1)}function Ju(r,e){let n=L(r,e),i=P(n),o=He(r);return i==o?r:j(r,n,i+1)}function zu(r,e,n){return Tr(r,e,n)}function qu(r,e,n){return Pr(r,e,n)}function Mi(r,e,n){let i=I(r),o=[];for(let a of i){let l=Me(a);s.isSame(l,n)&&(l=qi(a,e)),o.push(a)}return B(r,o)}function Gu(r,e){return L(r,e)?Mi(r,e,s.ref(e)):Be(r,e)}function Ku(r,e){if(at(e)){let n=L(e);e=Me(n)}return Be(r,e)}function Ei(r,e){if(s.isArray(e)){for(let a of e)r=Ei(r,a);return r}r=ke(r);let n=I(r),i=L(n,e),o=P(i);return n=n.filter(a=>s.isSame(a,i)==!1),n=Cr(n,o),r=B(r,n),r}function Yu(r,e){let n=s.getItemListElement(r);return e&&(n=s.filter(n,e)),n}function at(r){return s.record_type(r)==="ListItem"}function Ae(r,e){return at(r)==!1&&(r={"@type":"ListItem","@id":s.randomUUID(),item:r}),r=s.setIfNull(r,"@id",s.randomUUID()),(e||e===0)&&(r=s.setValue(r,"position",e)),r}function Wi(r,e){let n=P(r)??void 0,i=P(e)??void 0;return n===void 0&&i===void 0?!1:n===void 0?!0:i===void 0?!1:n<i}function Fi(r,e){let n=P(r)??void 0,i=P(e)??void 0;return n===void 0&&i===void 0||n===void 0?!1:i===void 0?!0:n>i}function Ue(r){if(C(r)){let n=r,i=I(n),o=Ue(i);return B(n,o)}function e(n,i){return Wi(n,i)==!0?-1:Fi(n,i)==!0?1:0}return r.sort((n,i)=>e(n,i)),r}function L(r,e){if(!s.isNull(e))return s.isNumber(e)?Li(r,e):at(e)?_r(r,e):s.record_type(e)?Sr(r,e):Sr(r,e)||_r(r,e)}function Li(r,e){if(C(r)&&(r=I(r)),r=s.toArray(r),r.length!=0){for(let n of r)if(P(n)==e)return n}}function _r(r,e){if(C(r)&&(r=I(r)),r=s.toArray(r),r.length!=0){for(let n of r)if(s.isSame(n,e))return n}}function Sr(r,e){if(C(r)&&(r=I(r)),r=s.toArray(r),r.length!=0)for(let n of r){let i=Me(n);if(s.isSame(i,e))return n}}function P(r){let e=s.getValue(r,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function lt(r,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,P(r)==e||(r=s.setValue(r,"position",e)),r}function Nr(r,e){if(e=e??0,C(r)){let i=r;r=I(i);let o=Nr(r,e);return B(i,o)}let n=[];for(let i of r){let o=P(i);o>=e&&(i=lt(i,o+1)),n.push(i)}return n}function Cr(r,e){if(e=e??0,C(r)){let i=r;r=I(i);let o=Cr(r,e);return B(i,o)}let n=[];for(let i of r){let o=P(i);o!=0&&o>=e&&(i=lt(i,o-1)),n.push(i)}return n}function ke(r,e){if(C(r)){let o=r;r=I(o);let a=ke(r);return B(o,a)}if(r=s.toArray(r),r.length==0)return r;r=Ue(r);let n=e??vr(r)??0,i=[];for(let o of r)o=lt(o,n),n+=1,i.push(o);return i}function vr(r){if(C(r)){let o=I(o);return vr(o)}r=s.toArray(r);let e=r.map(i=>P(i));return e=e.filter(i=>isNaN(i)==!1),e.length==0?void 0:Math.min(...e)}function He(r){if(C(r))return r=I(r),He(r);r=s.toArray(r);let e=r.map(i=>P(i));return e=e.filter(i=>isNaN(i)==!1),e.length==0?void 0:Math.max(...e)}function ut(r){if(C(r)){let n=r;r=I(n);let i=ut(r);return B(n,i)}r=s.toArray(r),r=Ue(r);let e=[];for(let n of r){let i=P(n),o=L(r,i-1),a=o?s.ref(o):void 0;n=s.setValue(n,"previousItem",a);let l=L(r,i+1),u=l?s.ref(l):void 0;n=s.setValue(n,"nextItem",u),e.push(n)}return e}function Ji(r){if(C(r)){let i=I(r);return Ji(i)}return r.map(n=>Me(n))}function zi(r,e){if(C(r)){let i=r;r=I(i);let o=zi(r);return B(i,o)}return r=s.toArray(r),e=s.toArray(e),e=e.map(i=>Ae(i)),r.concat(e)}function Me(r){return s.getValue(r,"item")}function qi(r,e){return s.setValue(r,"item",e)}var Dr={};m(Dr,{appendAction:()=>Yi,duplicateAction:()=>Qi,execute:()=>Gi,moveDownAction:()=>Zi,moveUpAction:()=>Xi,prependAction:()=>Ki,replaceAction:()=>Rr});function Gi(r){if(s.isArray(r))return r.map(n=>Gi(n));let e=s.record_type(r);if(e=="ReplaceAction")return Rr(r);if(e=="UpdateAction")return Xu(r);if(e=="MoveUpAction")return Xi(r);if(e=="MoveDownAction")return Zi(r);if(e=="AppendAction")return Yi(r);if(e=="PrependAction")return Ki(r);if(e=="ReplaceAction")return Rr(r);if(e=="DuplicateAction")return Qi(r)}function Xu(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n){for(let o of e)i=s.patch(i,o);r=s.addValue(r,"result",i)}return r=s.setCompleted(r),r}function Ki(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n){for(let o of e)i=s.list.prepend(i,o);r=s.addValue(r,"result",i)}return r=s.setCompleted(r),r}function Yi(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n){for(let o of e)i=s.list.append(i,o);r=s.addValue(r,"result",i)}return r=s.setCompleted(r),r}function Xi(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n)for(let o of e)i=s.list.moveUp(i,o);return r=s.addValue(r,"result",t),r=s.setCompleted(r),r}function Zi(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n)for(let o of e)i=s.list.moveDown(i,o);return r=s.addValue(r,"result",t),r=s.setCompleted(r),r}function Rr(r){let e=s.targetCollection(r),n=s.getValue(r,"replacer"),i=s.getValue(r,"replacee");return t=s.list.replace(t,n,i),r=s.addValue(r,"result",e),r=s.setCompleted(r),r}function Qi(r){let e=s.getObjects(r),n=s.targetCollections(r);for(let i of n)for(let o of e)i=s.list.duplicate(i,o);return r=s.addValue(r,"result",t),r=s.setCompleted(r),r}var Br={};m(Br,{addPotentialActions:()=>Or});function Or(r,e){if(!r)return r;if(s.isArray(r))return r.map(i=>Or(i,e));if(s.isObject(r)==!1)return r;let n=s.record_type(r);if(!n)return r;n=="Action"&&(r=Qu(r,e)),n=="ItemList"&&(r=Zu(r,e));for(let i of Object.keys(r))r[i]=Or(r[i],e);return r}function Zu(r,e){let n=s.getValues(r,"itemListElement"),i=s.getValues(r,"numberOfItems");for(let a=0;a<n.length;a++){let l=s.getValue(n[a],"position");l>0&&(n[a]=ed(n[a],r,e)),l<i-1&&(n[a]=td(n[a],r,e)),n[a]=rd(n[a],r,e),n[a]=nd(n[a],r,e)}let o={"@type":"Thing","@id":"_h:"+s.randomUUID(),name:"new record"};return r=id(r,o,e),r}function Qu(r,e){let n;return s.getValue(r,"actionStatus")||(n={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},r=Y(r,e,n,"Set Potential"),n={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},r=Y(r,e,n,"Set Active"),n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Failed")),s.isPotential(r)&&(n={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},r=Y(r,e,n,"Set Active"),n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Failed")),s.isActive(r)&&(n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},r=Y(r,e,n,"Set Failed")),r}function Y(r,e,n,i){i=i||`Set ${propertyID} ${value}`,n["@id"]=s.record_id(r);let o={"@type":"UpdateAction",name:i,object:n,targetCollection:s.ref(r),url:e};return r=s.addValue(r,"potentialAction",o),r}function ed(r,e,n,i){i=i||"Move up";let o={"@type":"MoveUpAction",name:i,object:s.ref(r),targetCollection:s.ref(e),url:n};return r=s.addValue(r,"potentialAction",o),r}function td(r,e,n,i){i=i||"Move down";let o={"@type":"MoveDownAction",name:i,object:s.ref(r),targetCollection:s.ref(e),url:n};return r=s.addValue(r,"potentialAction",o),r}function rd(r,e,n,i){i=i||"Delete";let o={"@type":"DeleteAction",name:i,object:s.ref(r),targetCollection:s.ref(e),url:n};return r=s.addValue(r,"potentialAction",o),r}function nd(r,e,n,i){i=i||"Duplicate";let o={"@type":"DuplicateAction",name:i,object:s.ref(r),targetCollection:s.ref(e),url:n};return r=s.addValue(r,"potentialAction",o),r}function id(r,e,n,i){i=i||"Duplicate";let o={"@type":"AppendAction",name:i,object:e,targetCollection:s.ref(r),url:n};return r=s.addValue(r,"potentialAction",o),r}var s={dot:pe,...Wt,...Lt,...Ye,...lr,...dr,...fr,...yr,...xr,...Vr,...wr,...kr,list:jr,...Dr,potentialAction:Br};var un={};m(un,{default:()=>Wd,things:()=>S});var Ur={};m(Ur,{getContent:()=>od,getIcon:()=>dd,getTitle1:()=>ts,getTitle2:()=>sd,imageUrl:()=>ld,imageUrls:()=>ud,thumbnailUrl:()=>ad});function ts(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"givenName"),a=s.getValue(r,"familyName"),l=s.getValue(r,"name");if(n=="Person"){let u=[o,a];if(u=u.filter(c=>c!==void 0),u.length>0)return u.join(" ")}if(n=="ListItem"){let u=s.getValue(r,"item");return ts(u)}return l||i||""}function sd(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"email"),a=s.getValue(r,"description");if(n=="Person")return o??"";if(n=="Action"){let l=s.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return a||""}function od(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"email"),a;return a=s.getValue(r,"abstract"),a&&typeof a=="string"||(a=s.getValue(r,"text"),a&&typeof a=="string")||(a=s.getValue(r,"description"),a&&typeof a=="string")?a:""}function ad(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValue(r,"thumbnail.contentUrl"),o&&typeof o=="string"||(o=s.getValue(r,"thumbnail"),o&&typeof o=="string")||(o=s.getValue(r,"thumbnailUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")?o:""}function ld(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValue(r,"contentUrl"),o&&typeof o=="string"||(o=s.getValue(r,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function ud(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValues(r,"image.contentUrl"),o=o.filter(a=>a&&typeof a=="string"),o.length>0||(o=s.getValues(r,"image"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function dd(r){let e=s.record_type(r);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return es;case"action":return cd;case"person":return fd;case"organization":return pd;case"itemlist":return gd;case"listitem":return md;case"postaladdress":return hd;case"product":return yd;case"webapi":return bd;case"website":return xd;case"webpage":return Vd;default:return es}}var es='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',cd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',fd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',pd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',gd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',md='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',hd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',yd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',bd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',xd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Vd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Np=globalThis.crypto.randomUUID;function ct(r,e){if(Array.isArray(r))return r.map(i=>ct(i));if(!r?.["@type"]||!r?.["@id"])return r;for(let i of Object.keys(r))r[i]=ct(r);let n=s.record_type(r);return r=dt(r,"BookmarkAction","Bookmark",e),n=="ListItem"&&(r=dt(r,"MoveUpAction","Move Up",e),r=dt(r,"MoveDownAction","Move Down",e),r=dt(r,"DeleteAction","Delete",e)),r}function dt(r,e,n,i){let o={"@type":e,"@id":globalThis.crypto.randomUUID(),name:n,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(r)},url:i};return r=wd(r,o),r}function wd(r,e){return r?._record?(r._record.potentialAction=r._record?.potentialAction||[],r._record.potentialAction=Array.isArray(r._record.potentialAction)?r._record.potentialAction:[r._record.potentialAction],r._record.potentialAction.push(e),r):(r.potentialAction=r?.potentialAction||[],r.potentialAction=Array.isArray(r.potentialAction)?r.potentialAction:[r.potentialAction],r.potentialAction.push(e),r)}var Hr={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function ft(r){let e=[];return e=e.concat(Hr?.[r]?.properties||[]),Hr?.[r]?.parent&&(e=e.concat(ft(Hr[r].parent))),e}function pt(r=0,e=0){let n="Action";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,name:r,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:_.thing("Object thing"),instrument:_.thing("Instrument thing"),agent:_.person("Agent thing"),hasPart:[]};if(e>0)for(let a=0;a<3;a++){let l=r+"_"+String(a);o.hasPart.push(pt(l,e-1))}return o}function Mr(r=0){let e="Thing";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function gt(r=0,e=0,n=0){let i="CreativeWork";typeof r!="string"&&(r=i+"_"+String(r));let o="https://www.testrecord.com/"+r+"#"+i,a={"@type":i,"@id":o,name:r,headline:"Headline "+r,text:Ad(),image:_.image(),hasPart:[]};if(n==0&&(a.author=_.person(),a.datePublished=new Date().toISOString()),n<e)for(let l=0;l<3;l++){let u=r+"_"+String(l);a.hasPart.push(gt(u,e,n+1))}return a}function Ad(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Ee(r=0){let e="ImageObject";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,contentUrl:"https://placehold.co/600x400"}}var Jp=globalThis.crypto.randomUUID;function Er(r=5){let e="ItemList",n="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,i={"@type":e,"@id":n,itemListElement:[],numberOfItems:r},o;for(let a=0;a<r;a++){let l=kd(_.thing(a),a);o&&(o.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":o?.["@id"]}),i.itemListElement.push(l),o=l}return i}function kd(r,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:r,position:e,previousItem:"",nextItem:""}}function Wr(r=0){let e="Offer";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,availability:"https://schema.org/InStock",itemOffered:_.product(r+"_item"),price:"55.00",priceCurrency:"CAD",seller:_.organization("org_a")}}function Fr(r=0){let e="Organization";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,address:_.postalAddress(),url:`https://www.test_${r.replaceAll(" ","_")}.com`}}function Lr(r=0){let e="Person";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,givenName:"givenName_"+r,familyName:"familyName_"+r,email:r+"@testrecord.com",address:_.address()}}function Jr(r=0){let e="PostalAddress";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function zr(r=0){let e="Product";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+r,sku:"sku_id_"+r,category:"Category 1"}}function qr(r=0){let e="ProductGroup";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e,i={"@type":e,"@id":n,name:r,productGroupID:`A ${r} product group`,variesBy:["color","size"],hasVariant:[]};for(let o of["small","medium","large"])for(let a of["blue","white","red"]){let l=_.product(`variant ${o} ${a}`);l.size=o,l.color=a,l.isVariantOf={"@id":i?.["@id"]},i.hasVariant.push(l)}return i}function mt(r=0,e=0){let n="Thing";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,name:r,image:Ee(r),hasPart:[]};if(e>0)for(let a=0;a<3;a++){let l=r+"_"+String(a);o.hasPart.push(mt(l,e-1))}return o}function Gr(r=0){let e="Message";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e,i=new Date;return{"@type":e,"@id":n,sender:_.person(0),recipient:[_.person(10),_.person(11),_.person(12)],headline:`Test ${String(r)} - this is a test message no ${String(r)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(r)} This is a test mesage. This message is used for testing purposes only.`}}function Kr(r=0,e=5){let n="Conversation";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,hasPart:[]};for(let a=0;a<e;a++){let l=r+"_"+String(a),u=_.message(l);u.sender=a%2==0?u.recipient[0]:u.recipient[1],u.recipient=a%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let c=new Date;c.setDate(c.getDate()-e+a),u.dateSent=c,u.dateReceived=c,o.hasPart.push(u)}return o}var _={action:pt,article:gt,address:Mr,conversation:Kr,image:Ee,itemList:Er,message:Gr,offer:Wr,organization:Fr,person:Lr,postalAddress:Jr,product:zr,productGroup:qr,thing:mt,Action:pt,Article:gt,Address:Mr,Conversation:Kr,Image:Ee,ItemList:Er,Message:Gr,Offer:Wr,Organization:Fr,Person:Lr,PostalAddress:Jr,Product:zr,ProductGroup:qr,Thing:mt};var Xr={};m(Xr,{jsonToMarkdown:()=>Yr});function Yr(r,e=1){let n;try{n=typeof r=="string"?JSON.parse(r):r}catch{return"Error: Invalid JSON input."}if(n==null)return"";let i="",o="  ".repeat(e-1);if(Array.isArray(n)){if(n.length===0)return"";n.forEach((a,l)=>{typeof a=="object"&&a!==null?(i+=`${o}* **Record ${l+1}:**
`,i+=Yr(a,e+1)):i+=`${o}* ${a}
`})}else typeof n=="object"?Object.entries(n).forEach(([a,l])=>{l!==null&&typeof l=="object"?(i+=`${o}* **${a}:**
`,i+=Yr(l,e+1)):i+=`${o}* **${a}:** ${l}
`}):i+=`${o}* ${n}
`;return i}var Qr={};m(Qr,{jsonToYaml:()=>We,yamlToJson:()=>$d});function We(r,e=0){let n=" ".repeat(e),i="";if(r==null)return`null
`;if(typeof r!="object")return typeof r=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(r)?`"${r.replace(/"/g,'\\"')}"
`:`${r}
`:`${r}
`;if(Array.isArray(r))return r.length===0?`[]
`:(r.forEach(a=>{if(i+=`${n}- `,typeof a=="object"&&a!==null){let l=We(a,e+2).trimStart();i+=l}else i+=We(a,0)}),i);let o=Object.keys(r);return o.length===0?`{}
`:(o.forEach(a=>{let l=r[a];i+=`${n}${a}:`,typeof l=="object"&&l!==null?i+=`
`+We(l,e+2):i+=" "+We(l,0)}),i)}function $d(r){let e=r.split(`
`),n={},i=[{indent:-1,value:n,type:"object"}];for(let o of e){if(!o.trim()||o.trim().startsWith("#"))continue;let a=o.search(/\S/),l=o.trim();for(;i.length>1&&a<=i[i.length-1].indent;)i.pop();let u=i[i.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],i.push({indent:a,value:u.value[u.lastKey],type:"array"}));let c=i[i.length-1],d=l.substring(1).trim();if(d.includes(":")){let[g,...y]=d.split(":"),b=g.trim(),$=y.join(":").trim(),E=Zr($),ne={[b]:E};c.value.push(ne),i.push({indent:a+2,value:ne,type:"object",lastKey:b})}else c.value.push(Zr(d))}else if(l.includes(":")){let[c,...d]=l.split(":"),g=c.trim(),y=d.join(":").trim();u.lastKey=g,y===""?(u.value[g]={},i.push({indent:a,value:u.value[g],type:"object",lastKey:g})):u.value[g]=Zr(y)}}return n}function Zr(r){return r==="true"?!0:r==="false"?!1:r==="null"||r==="~"?null:!isNaN(r)&&r!==""?Number(r):r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'")?r.slice(1,-1):r}var rs={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var ns="DesignToken",is={css:{get:Td},get:en,set:ss,getValue:Sd,setValue:Id,sampleRecord:os};function en(r){if(!r)return;let e=s.getAdditionalProperty(r,ns);return e=e||{},e}function ss(r,e){if(r)return e=e||{},r=s.setAdditionalProperty(r,ns,e),r}function Sd(r,e){if(!r||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=en(r),i=Te(n,e);return Te(i,"$value")}function Id(r,e,n){if(!r||!e||typeof e!="string")return r;e=e.endsWith(".$value")?e.replace("$value",""):e;let i=en(),o=os(),a=Te(o,e);return a.$value=n,i=Ke(i,e,a),r=ss(r,i),r}function Td(r,e="dt"){let n=[];function i(l,u=[]){for(let[c,d]of Object.entries(l)){if(d==null)continue;let g=[...u,c];if(typeof d=="object"&&"value"in d){let y=`--${g.map($=>$.toLowerCase()).join("-")}`,b=o(d.value);n.push(`  ${y}: ${b};`)}else if(typeof d=="object"&&!Array.isArray(d))i(d,g);else{let y=`--${g.map($=>$.toLowerCase()).join("-")}`,b=o(d);n.push(`  ${y}: ${b};`)}}}function o(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return i(r,e?[e]:[]),`:root {
${n.join(`
`)}
}`}function os(){return rs}var f={markdown:Xr,yaml:Qr,designToken:is};var yt=class{constructor(e){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return tn(this.record)}toJSON(){return this.record}toMD(){return f.markdown.jsonToMarkdown(this.record)}toYaml(){return f.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,n){return this.setValues(e,n)}getValue(e){return s.getValue(this._record,e)}setValue(e,n){return this.#t(),this.#e(s.setValue(this._record,e,n))}getValues(e){return s.getValues(this._record,e)}setValues(e,n){return this.#t(),this.#e(s.setValues(this._record,e,n))}addValue(e,n){return this.#t(),this.#e(s.addValue(this._record,e,n))}addValues(e,n){return this.#t(),this.#e(s.addValues(this._record,e,n))}_setValueIfNotNull(e,n){s.isNotNull(n)&&this.setValue(e,n)}_setValueIfString(e,n){s.isNotNull(n)&&typeof n=="string"&&this.setValue(e,n)}_setValueIfNumber(e,n){s.isNotNull(n)&&!isNaN(n)&&this.setValue(e,n)}_setValueIfRecordType(e,n,i){s.isNotNull(i)&&s.record_type(i)==e&&this.setValue(n,i)}_setValueIfNotRecordType(e,n,i){s.isNotNull(i)&&s.record_type(i)&&s.record_type(i)!=e&&this.setValue(n,i)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=be(ht(this._record),this.baseUrl)),s.simplify(ht(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let n=s.record_type(e);return n&&n==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=s.clone(ht(e)),this._record=e,Object.keys(this._record).forEach(n=>this._record[n]=ee(this._record?.[n])),this.processCallbacks()}#t(){this._previousRecord=s.clone(ht(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return ft(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let n=this.getValues(e);for(let i of n)i?._isThingClass==!0&&i.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,n=void 0,i=!1){n=n??s.randomUUID();let o={id:n,includeChildren:i,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[n]=o,n}addListenerParent(e,n=void 0){return this.addListener(e,n,!1)}addListenerNested(e,n=void 0){return this.addListener(e,n,!0)}addEventListener(e,n=void 0,i=!1){return this.addListener(e,n,i)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let n=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),i=n==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),n==!1&&i==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,n,i=!1){let o={"@type":"UpdateAction","@id":s.randomUUID(),object:e,result:n,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let a of Object.keys(this._callbacks))try{if(i==!0&&this._callbacks?.[a]?.includeChildren==!1)continue;this._callbacks?.[a].callbackFn(o)}catch(l){console.log("Callback failed: ",a,String(l),o)}}static toString(e){return tn(e)}static toMD(e){return f.markdown.jsonToMarkdown(e)}static toYaml(e){return f.yaml.jsonToYaml(e)}static fromYaml(e){let n=this.name;return new S[n](f.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return ee(e)}static example(e=0,n=5){let i=this.name;return new S[i](_[i](e,n))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return ft(e)}static getValue(e,n){return s.getValue(e,n)}static setValue(e,n,i){return s.setValue(e,n,ee(i))}static getValues(e,n){return s.getValues(e,n)}static setValues(e,n,i){return s.setValues(e,n,ee(i))}static addValue(e,n,i){return s.addValue(e,n,ee(i))}static addValues(e,n,i){return s.addValues(e,n,ee(i))}static flatten(e){return s.flatten(e)}static addPotentialActions(e){return ct(e)}static addAdditionalProperty(e,n,i){return Pd(e,"additionalProperty",n,i)}};function ht(r){function e(i){if(Array.isArray(i))return i.map(o=>e(o));if(i instanceof Date&&!Number.isNaN(i.getTime()))return i.toISOString();if(i?._record)return e(i._record);if(i?.["@type"]||i?.["@id"]){let o={};for(let a of Object.keys(i))o[a]=e(i?.[a]);return o}return i}let n=e(r);try{n=JSON.parse(JSON.stringify(n))}catch{}return n}function ee(r){if(Array.isArray(r))return r.map(e=>ee(e));if(r?._isThingClass!=!0){let e=s.record_type(r);if(e){let n=S?.[e]||S.Thing,i=new n;i.record=r,r=i}}if(r?._isThingClass==!0)for(let e of Object.keys(r._record))r._record[e]=ee(r._record?.[e]);return r}function tn(r){if(Array.isArray(r)){let a=r.map(l=>tn(l));return a=a.join(`
`),a}let e=s.getValue(r,"@type"),n=s.getValue(r,"@id"),i=s.getValue(r,"name"),o=`${e||""}/${n||""}`;return i&&(o=`${o} - ${i}`),o}function Pd(r,e,n,i){let o=new S.PropertyValue;return o.propertyID=n,o.value=i,r=s.addValues(r,e,o.record),r}var w=class extends yt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=V.url.clean(value),e}set cleanUrl(e){url=V.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=be(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,n){let i=this.getValues("additionalProperty");i=i.filter(a=>a?.propertyID!=e);let o={"@type":"PropertyValue","@id":s.randomUUID()};o.propertyID=e,o.value=n,i.push(o),this.setValues("additionalProperty",i)}removeAdditionalProperty(e){let n=this.getValues("additionalProperty");n.find(o=>o?.propertyID==e)&&(n=n.filter(o=>o?.propertyID!=e),this.setValues("additionalProperty",n))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(o=>o?.propertyID==e)?.value}};var ae=class extends w{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let n of s.toArray(e))s.record_type(n)!=="ItemList"&&this.add(n)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(e){this.record=s.list.setItemListElement(e)}get items(){return s.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=s.list.insert(this.record,e,0)}append(e){this.record=s.list.append(this.record,e)}add(e){this.record=s.list.append(this.record,e)}insert(e,n){this.record=s.list.insert(this.record,e,n)}delete(e){this.record=s.list.remove(this.record,e)}replace(e,n){this.record=s.list.replace(this.record,e,n)}move(e,n){this.record=s.list.move(this.record,e,n)}moveUp(e){this.record=s.list.moveUp(this.record,e)}moveDown(e){this.record=s.list.moveDown(this.record,e)}upsert(e){this.record=s.list.upsert(this.record,e)}static clean(e){return s.list.clean(e)}static length(e){return s.list.length(e)}static getItem(e,n){return s.list.getItem(e,n)}static prepend(e,n){return s.list.insert(e,n,0)}static append(e,n){return s.list.append(e,n)}static add(e,n){return s.list.insert(e,n,getLength(e))}static insert(e,n,i){return s.list.insert(e,n,i)}static delete(e,n){return s.list.remove(e,n)}static replace(e,n,i){return s.list.replace(e,n,i)}static move(e,n,i){return s.list.move(e,n,i)}static moveUp(e,n){return s.list.moveUp(e,n)}static moveDown(e,n){return s.list.moveDown(e,n)}static moveBefore(e,n,i){return s.list.moveBefore(e,n,i)}static moveAfter(e,n,i){return s.list.moveAfter(e,n,i)}static upsert(e,n){return s.list.upsert(e,n)}static duplicate(e,n){return duplicateItem(e,n)}static search(e,n,i,o,a,l){return search(e,n,i,o,a,l)}};var R=class extends w{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return as(this.record,e)}static test(e,n){return as(e,n)}};function as(r,e){let n={"@type":"Action",name:"Validate PPS",object:r,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(i=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!r&&r!=0)return n.actionStatus="FailedActionStatus",n.error="A value is required, no value provided.",n;if(e.multipleValues==!1&&Array.isArray(r))return n.actionStatus="FailedActionStatus",n.error="Cannot contain multiple values.",n;if(e.valueMinLength&&String(r).length<e.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value does not meet minimum length.",n;if(e.valueMaxLength&&String(r).length>e.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(e.minValue&&r<e.minValue)return n.actionStatus="FailedActionStatus",n.error="Value is smaller than minimum value allowed.",n;if(e.maxValue&&r>e.maxValue)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(e.valuePattern){let i="hello",a=new RegExp(e.valuePattern,"gi");if(r.test(a)==!1)return n.actionStatus="FailedActionStatus",n.error="Value doesn't match pattern.",n}return n}var Fe=class extends w{constructor(e,n){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(e){this.record=s.setCompleted(this.record,e)}setFailed(e){this.record=s.setFailed(this.record,e)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,n){this.record=cs(this.record,e,n)}addMaxValue(e,n){this.record=fs(this.record,e,n)}addMinLength(e,n){this.record=ps(this.record,e,n)}addMaxLength(e,n){this.record=gs(this.record,e,n)}addDefaultValue(e,n){this.record=ms(this.record,e,n)}addValueRequired(e,n){this.record=hs(this.record,e,n)}addValuePattern(e,n){this.record=ls(this.record,e,n)}addMultipleValues(e,n){this.record=us(this.record,e,n)}addStepValue(e,n){this.record=ds(this.record,e,n)}testConditions(){return rn(this.record)}getInputconditions(){return U(this.record)}addInputCondition(e,n){this.record=this.addValues(e+"-input",n)}getOutputConditions(){return Nd(this.record)}addOutputCondition(e,n){this.record=this.addValues(e+"-output",n)}test(){return rn(this.record)}static setPotential(e){return s.setPotential(e)}static setActive(e){return s.setActive(e)}static setCompleted(e,n){return s.setCompleted(e,n)}static setFailed(e,n){return s.setFailed(e,n)}static isPotential(e){return s.isPotential(e)}static isActive(e){return s.isActive(e)}static isCompleted(e){return s.isCompleted(e)}static isFailed(e){return s.isFailed(e)}static addMinValue(e,n,i){return cs(e,n,i)}static addMaxValue(e,n,i){return fs(e,n,i)}static addMinLength(e,n,i){return ps(e,n,i)}static addMaxLength(e,n,i){return gs(e,n,i)}static addDefaultValue(e,n,i){return ms(e,n,i)}static addValueRequired(e,n,i){return hs(e,n,i)}static addValuePattern(e,n,i){return ls(e,n,i)}static addMultipleValues(e,n,i){return us(e,n,i)}static addStepValue(e,n,i){return ds(e,n,i)}static test(e){return rn(e)}};function U(r,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let i=r?.[e];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(r))i.endsWith("-input")&&(i=i.replace("-input",""),n.push({k:r?.[i]}));return n}function X(r,e,n){return e.endsWith("-input")==!1&&(e=e+"-input"),r[e]=n,r}function Nd(r,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let i=r?.[e];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(r))i.endsWith("-output")&&(i=i.replace("-output",""),n.push({k:r?.[i]}));return n}function ls(r,e,n){let i=U(r,e)||new R;return i.valuePattern=n,r=X(r,e,i),r}function us(r,e,n){let i=U(r,e)||new R;return i.multipleValues=n,r=X(r,e,i),r}function ds(r,e,n){let i=U(r,e)||new R;return i.stepValue=n,r=X(r,e,i),r}function cs(r,e,n){let i=U(r,e)||new R;return i.minValue=n,r=X(r,e,i),r}function fs(r,e,n){let i=U(r,e)||new R;return i.maxValue=n,r=X(i.record),r}function ps(r,e,n){let i=U(r,e)||new R;return i.valueMinLength=n,r=X(r,e,i),r}function gs(r,e,n){let i=U(r,e)||new R;return i.valueMaxLength=n,r=X(r,e,i),r}function ms(r,e,n){let i=U(r,e)||new R;return i.defaultValue=n,r=X(r,e,i),r}function hs(r,e,n){let i=U(r,e)||new R;return i.valueRequired=n,r=X(r,e,i),r}function rn(r){let e=U(r);for(let n of Object.keys(e))if(R.test(e[n],r?.[n])==!1)return!1;return!0}var J=class extends Fe{constructor(e,n){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}get targetCollection(){return this.getValues(this.record,"targetCollection")}set targetCollection(e){this.record=this.setValues(this.record,"targetCollection",e)}get toLocation(){return this.getValues(this.record,"toLocation")}set toLocation(e){this.record=this.setValues(this.record,"toLocation",e)}},bt=class extends J{constructor(e,n){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},xt=class extends J{constructor(e,n){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},Vt=class extends J{constructor(e,n){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}get replacer(){return this.getValues(this.record,"replacer")}set replacer(e){this.record=this.setValues(this.record,"replacer",e)}get replacee(){return this.getValues(this.record,"replacee")}set replacee(e){this.record=this.setValues(this.record,"replacee",e)}},wt=class extends J{constructor(e,n){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},At=class extends J{constructor(e,n){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},kt=class extends J{constructor(e,n){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}};var $t=class extends w{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Cd(this.record)}get(e){return f.designToken.getValue(this.record,e)}set(e,n){return f.designToken.setValue(this.record,e,n)}get token(){return f.designToken.get(this.record)}set token(e){this.record=f.designToken.set(this.record,e)}get primary(){return f.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=f.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return f.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=f.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return f.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=f.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return f.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=f.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return f.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=f.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return f.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=f.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return f.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=f.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new _t(this,"typography.heading-lg")}get body(){return new _t(this,"typography.body-md")}get spacingSm(){return f.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return f.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return f.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return f.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return f.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return f.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return f.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return f.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return f.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return f.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new nn(this,"shadow.elevation-md")}sample(){return f.designToken.getSampleRecord()}},_t=class{constructor(e,n){this.base=e,this.basePath=A(n)}get fontFamily(){return f.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get fontWeight(){return f.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get fontSize(){return f.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get lineHeight(){return f.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get letterSpacing(){return f.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}get family(){return f.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontFamily"),e)}get weight(){return f.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontWeight"),e)}get size(){return f.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontSize"),e)}get height(){return f.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"lineHeight"),e)}get spacing(){return f.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"letterSpacing"),e)}},nn=class{constructor(e,n){this.base=e,this.basePath=A(n)}get color(){return f.designToken.getValue(record,A(this.basePath,"color"))}set color(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"color"),e)}get offsetX(){return f.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"offsetX"),e)}get offsetY(){return f.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"offsetY"),e)}get blur(){return f.designToken.getValue(record,A(this.basePath,"blur"))}set blur(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"blur"),e)}get spread(){return f.designToken.getValue(record,A(this.basePath,"spread"))}set spread(e){this.base.record=f.designToken.setValue(record,A(this.basePath,"spread"),e)}};function A(r,e,n){let i=[r,e,n];i=i.filter(a=>a!=null&&a!="");let o=i.join(".");return o=o.replaceAll("..","."),o}function Cd(r){return`${s.record_type(r)} for ${s.getValue(r,url)}
    
    `}var O=class extends w{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var H=class extends O{constructor(e,n,i,o,a,l){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=n,this.headline=i,this.text=o,this.dateSent=a,this.dateReceived=l)}toString(){return on(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",$e(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",$e(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",$e(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",$e(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",$e(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return bs(this.record)}set gmail(e){this.record=ys(e)}get outlook(){return Vs(this.record)}set outlook(e){this.record=xs(e)}static toString(e){return on(e)}static fromGmail(e){return ys(e)}static toGmail(e){return bs(e)}static fromOutlook(e){return xs(e)}static toOutlook(e){return Vs(e)}static lt(e,n){e=e?.record||e,n=n?.record||n;let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i<o}static gt(e,n){e=e?.record||e,n=n?.record||n;let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i>o}static sort(e){return e.sort((n,i)=>{n=n?.record||n,i=i?.record||i;let o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived")),a=new Date(s.getValue(i,"dateSent")||s.getValue(i,"dateCreated")||s.getValue(i,"dateReceived"));return o.getTime()-a.getTime()}),e}};function on(r){if(!r)return"";if(Array.isArray(r)&&r.length>1)return r.map(d=>on(d)).join(`
`);Array.isArray(r)&&r.length==1&&(r=r[0]);let e=s.getValue(r,"sender"),n=e?.email||e?.name||"";n=sn(n,20);let o=s.getValues(r,"recipient").map(d=>d?.email||d?.name||"");o=sn(o,25);let a=s.getValue(r,"headline")||"";a.length>20&&(a=sn(a,30));let l=s.getValue(r,"dateSent")||s.getValue(r,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${n} | ${o} | ${a} | ${u}`}function sn(r,e=100){if(!r)return"";if(Array.isArray(r)&&r.length>1){let n=r.join(", ");if(n.length>e){let i=`... [${r.length}]`;n=n.slice(0,e-i.length)+i}return n}return Array.isArray(r)&&r.length==0?"":(Array.isArray(r)&&r.length==1&&(r=r[0]),typeof r=="string"&&r.length>e?`${r.slice(0,e-3)}...`:r)}function $e(r){return r?Array.isArray(r)?r.map(e=>$e(e)):typeof r=="string"?r.includes("@")?{"@type":"ContactPoint",email:r}:{"@type":"Person",name:r}:r:[]}function ys(r){let e=new H;return e.sender=r.sender,e.recipient=r.recipient,e.subject=r.subject,e.text=r.text,e.dateSent=r.dateSent,e.dateReceived=r.dateReceived,e}function bs(r){let e={};return e.sender=r.sender,e.recipient=r.recipient,e.subject=r.subject,e.text=r.text,e.dateSent=r.dateSent,e.dateReceived=r.dateReceived,e}function xs(r){let e=new H;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=r.sender,e.recipient=r.toRecipients.emailAddress,e.subject=r.subject,e.text=r.text,e.dateSent=r.sentDateTime,e.dateReceived=r.receivedDateTime,e}function Vs(r){let e={};return e.sender=r.sender,e.toRecipients=r.recipient,e.subject=r.subject,e.text=r.text,e.sentDateTime=r.dateSent,e.receivedDateTime=r.dateReceived,e}var It=class extends O{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return vd(this.record)}get messages(){let e=this.getValues("hasPart").filter(n=>s.record_type(n)=="Message");return e=H.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ws(this.record)}add(e,n,i,o,a,l){this.record=St(this.record,e,n,i,o,a,l)}addMessage(e,n,i,o,a,l){this.record=St(this.record,e,n,i,o,a,l)}newMessage(e,n,i,o,a,l){let u=new H(e,n,i,o,a,l);this.messages=this.messages.push(u)}static getParticipants(e){return ws(e)}static newMessage(e,n,i,o,a,l,u){return St(e,n,i,o,a,l,u)}static addMessage(e,n,i,o,a,l,u){return St(e,n,i,o,a,l,u)}static getMessages(e){return Le(e)}static getFirstMessage(e){let n=Le(e);return n.length>0?n[0]:void 0}static getLastMessage(e){let n=Le(e);return n.length>0?n[n.length-1]:void 0}};function vd(r){let e=Le(r),n=`Conversation with ${e.length} messages:
`;return n+=H.toString(e),n}function St(r,e,n,i,o,a,l){let u=new H(e,n,i,o,a,l);return r=s.addValues(r,"hasPart",u),r}function Le(r){let e=s.getValues(r,"hasPart").filter(n=>s.getValue(n,"@type")=="Message");return e=jd(e),e}function jd(r){return r.sort((e,n)=>{let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i-o}),r}function ws(r){let e=Le(r),n=new Set;return e.forEach(i=>{let o=s.getValue(i,"sender");o&&n.add(o),s.getValues(i,"recipient").forEach(l=>{n.add(l)})}),Array.from(n)}var _e=class extends w{constructor(e,n,i,o){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=n,this.sourceTableID=i,this.sourceRecordID=o)}toString(){return Rd(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,n,i){this.sourceSystemID=e,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Rd(r){let e="";e+=`${r?.name||r?.["@id"]} `}var Tt=class extends w{constructor(e,n){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=n)}toString(){return Dd(this.record)}setSource(e,n,i){this.sourceSystemID=e,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,n){return this.addDataFeedItem(e,n)}addDataFeedItem(e,n){let i=new _e(e,this.sourceSystemID,this.sourceTableID,n),o=this.getValues("dataFeedElement");return o.push(i),this.setValues("dataFeedElement",o),i}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function Dd(r){let e="";e+=`${r?.name||r?.["@id"]} `}var le=class extends w{constructor(e,n){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=n)}toString(){return As(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=w.setValues(this._record,"additionalProperty",e)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(e){this._record=w.setValues(this._record,"areaServed",e)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=w.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=w.setValues(this._record,"inventoryLevel",e)}get price(){return s.getValue(this._record,"price")}set price(e){this._record=w.setValues(this._record,"price",e)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=w.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=w.setValues(this._record,"priceValidUntil",e)}get seller(){return s.getValue(this._record,"seller")}set seller(e){this._record=w.setValues(this._record,"seller",e)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(e){this._record=w.setValues(this._record,"validFrom",e)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(e){this._record=w.setValues(this._record,"validThrough",e)}};function As(r){if(Array.isArray(r))return r.map(o=>As(o));let e="",n=s.getValue(r,"itemOffered")||{},i=s.getValue(r,"price")||0;return i=Number(i),i=i.toFixed(2),e+=`${s.getValue(n,"name")||""} - ${s.getValue(r,"priceCurrency")||""} $${i}`,e}var ue=class extends O{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return an(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,n="CAD"){this._record=this.addValue("offers",new le(e,n))}static addOffer(e,n,i="CAD"){return Od(e,n,i)}static toString(e){return an(e)}};function an(r){if(Array.isArray(r))return r.map(n=>an(n));let e="";return e+=`${s.getValue(r,"name")||""}`,e}function Od(r,e,n){let i=new le(e,n);return i.itemOffered={"@id":r?.["@id"]},r=s.addValue(r,"itemOffered",i.record),record}var Pt=class extends ue{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return ln(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Bd(this.record,e)}generateVariants(e){this.record=Ud(this.record,e)}static toString(e){return ln(e)}};function ln(r){if(Array.isArray(r))return r.map(i=>ln(i));let e="";e+=`${s.getValue(r,"name")||""}
`;let n=s.getValues(r,"hasVariant");for(let i of n)e+=" - "+ue.toString(i)+`
`;return e}function Bd(r,e){return r=s.addValues(r,"hasVariant",e),r}function Ud(r,e){if(Array.isArray(e)){let a={};for(let l of e)a[l.propertyID]=a?.[l.propertyID]||[],a[l.propertyID].push(a.value);e=a}let n=Hd(e),i=Object.keys(n[0]);r=s.addValues(r,"variesBy",i);let o=w.getProperties("Product");for(let a of n){let l=JSON.parse(JSON.stringify(r));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":r?.["@id"]};let u=[];for(let d of Object.keys(a))u.push(a?.[d]),o.includes(d)?l=s.setValue(l,d,a[d]):l=w.addAdditionalProperty(l,d,a[d]);let c=w.getValue(l,"name")+" "+u.join(" ");l=w.setValue(l,"name",c),r=w.addValue(r,"hasVariant",l)}return r}function Hd(r){return Object.keys(r).reduce((n,i)=>{let o=r[i],a=[];for(let l of n)for(let u of o)a.push({...l,[i]:u});return a},[{}])}var Nt=class extends w{constructor(e,n){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",n)}toString(){return ks(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return s.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return s.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return s.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return s.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return s.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function ks(r){if(Array.isArray(r))return r.map(n=>ks(n));let e="";return e+=`${s.getValue(r,"propertyID")||""}: ${s.getValue(r,"value")||""} ${s.getValue(r,"unitText")||""}`,e}var de=class extends O{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),s.record_type(e)=="WebSite"){this.website=e;let n=e.record||e;n=JSON.parse(JSON.stringify(n)),n["@type"]="WebPage",this.record=n}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,n){let i=this.breadcrumb||[];i?.record_type!="BreadcrumbList"&&(i=new ae(i)),i.add({"@type":"WebPage",url:e,name:n}),this.breadcrumb=i}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=Je(this.record,"WPHeader"),z(this.record,"WPHeader")}set WPHeader(e){this.record=q(this.record,"WPHeader",e)}get WPFooter(){return this.record=Je(this.record,"WPFooter"),z(this.record,"WPFooter")}set WPFooter(e){this.record=q(this.record,"WPFooter",e)}get WPSideBar(){return this.record=Je(this.record,"WPSideBar"),z(this.record,"WPSideBar")}set WPSideBar(e){this.record=q(this.record,"WPSideBar",e)}get Table(){return z(this.record,"Table")}set Table(e){this.record=q(this.record,"Table",e)}addHeaderLink(e,n){this.record=$s(this.record,e,n)}addFooterLink(e,n){this.record=_s(this.record,e,n)}domain(){return Ss(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Md(e,this.url)}static getWPHeader(e){return z(e,"WPHeader")}static getWPFooter(e){return z(e,"WPFooter")}static getWPSideBar(e){return z(e,"WPSideBar")}static getTable(e){return z(e,"Table")}static setWPHeader(e,n){return q(e,"WPHeader",n)}static setWPFooter(e,n){return q(e,"WPFooter",n)}static setWPSideBar(e,n){return q(e,"WPSideBar",n)}static setTable(e,n){return q(e,"Table",n)}static addHeaderLink(e,n,i){return $s(e,n,i)}static addFooterLink(e,n,i){return _s(e,n,i)}static getDomain(e){return Ss(s.getValue(e,"url")||e)}};function Je(r,e){let i=s.getValues(r,"hasPart").find(o=>s.getValue(o,"@type")==e);return i||(i={"@type":e,hasPart:[]},r=s.addValue(r,"hasPart",i)),r}function z(r,e){return s.getValues(r,"hasPart").find(o=>s.record_type(o)==e)}function q(r,e,n){let i=s.getValues(r,"hasPart");return i=i.filter(o=>s.record_type(o)!=e),i.push(n),r=s.setValues(r,"hasPart",i),r}function $s(r,e,n){r=Je(r,"WPHeader");let i={"@type":"WebPage",name:n,url:e},o=z(r,"WPHeader");return o=s.addValue(o,"hasPart",i),r=q(r,"WPHeader",o),r}function _s(r,e,n){r=Je(r,"WPFooter");let i={"@type":"WebPage",name:n,url:e},o=z(r,"WPFooter");return o=s.addValue(o,"hasPart",i),r=q(r,"WPFooter",o),r}function Ss(r){try{let e=new Url(r).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Md(r,e){let n=new s.DB;n.post(r);let i=n.records,o=[];if(Ed(r)=="Product"){let u=i.filter(b=>s.record_type(b)=="Product")[0];o.push({replacee:s.record_id(u),replacer:e+"#product"}),u=s.setValue(u,"url",e);let c=s.getValues(u,"brand");c=c.map(b=>b?.["@type"]?{"@type":"brand",name:b}:b),u=s.setValues(u,"brand",c);let d=i.filter(b=>s.record_type(b)=="Offer");d=d.map(b=>s.setValues(b,"itemOffered",s.ref(u))),u=s.setValues(u,"offers",d);let g=i.filter(b=>s.record_type(b)=="Review");d=d.map(b=>s.setValues(b,"itemReviewed",s.ref(u))),u=s.setValues(u,"review",g);let y=i.filter(b=>s.record_type(b)=="AggregateRating");return y=y.map(b=>s.setValues(b,"itemReviewed",s.ref(u))),u=s.setValues(u,"aggregateRating",y),u=s.replaceIds(u,o),u}return r}function Ed(r){if(r=s.toArray(r),r=r.filter(n=>s.record_type(n)!="BreadcrumbList"),r.length==1&&s.record_type(r[0]!="WebPage"))return r[0]?.["@type"];if(r.length==1&&s.record_type(r[0]=="WebPage")&&(r=s.getValues(r,"mainEntity")),r.filter(n=>s.record_type(n)=="Product").length==1)return"Product"}var Ct=class extends de{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,n){let i=new de(this);return i.url=e,i.name=n,i}domain(){return Is(this.url)}static getDomain(e){return Is(s.getValue(e,"url")||e)}};function Is(r){try{let e=new Url(r).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var vt=class extends w{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var S={get:w.toThing,toThing:w.toThing,Action:Fe,AddAction:bt,AppendAction:At,BrandDesign:$t,Conversation:It,CreativeWork:O,DataFeed:Tt,DataFeedItem:_e,DeleteAction:xt,InsertAction:wt,ItemList:ae,Message:H,Offer:le,Product:ue,ProductGroup:Pt,PropertyValue:Nt,Thing:w,PrependAction:kt,ReplaceAction:Vt,UpdateAction:J,WebAPI:vt,WebPage:de,WebSite:Ct,format:Ur,toThing:Fd},Wd=S;function Fd(r){let e=s.record_type(r);return S?.[e]?new S[e](r):new S.Thing(r)}var cn={};m(cn,{Button:()=>Jd,DropdownMenu:()=>Ts,MenuItem:()=>zd,escapeHtml:()=>te});function te(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Jd({children:r="",variant:e="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${a[e]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${r}
    </button>
  `.trim()}function dn(r,e=""){return!r||typeof r!="object"?"":Object.entries(r).map(([n,i])=>{let o=e?`${e}[${n}]`:n;return typeof i=="object"&&i!==null?dn(i,o):`<input type="hidden" name="${te(o)}" value="${te(String(i))}">`}).join("")}function Ts({label:r="",items:e=[],align:n="end",variant:i="ghost",size:o="icon",className:a="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},c={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},g=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),y=r?`<span class="mr-2">${te(r)}</span>${g}`:`${g}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let b=e.map($=>{if($.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let E=dn($.object),ne=$.disabled?"disabled":"";return`
        <form method="POST" action="${te($.url||"")}" class="m-0 p-0">
          ${E}
          <button
            type="submit"
            ${ne}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${te($.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${a}" ${l}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${c[i]||c.ghost} ${d[o]||d.icon}"
      >
        ${y}
      </summary>

      <div class="absolute ${u[n]||u.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${b}
      </div>
    </details>
  `.trim()}function zd(r){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let e=dn(item.object),n=item.disabled?"disabled":"";return`<form method="POST" action="${te(h.getUrl(item)||"")}" class="m-0 p-0">
          ${e}
          <button
            type="submit"
            ${n}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${te(h.getName(item)||"")}
          </button>
        </form>`}var Z={};m(Z,{components:()=>p});var fn={};m(fn,{Accordion:()=>qd});function qd({items:r=[],className:e=""}){let n=r.map(i=>`
      <details class="group border-b border-border py-2" ${i.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${i.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${i.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${n}</div>`.trim()}var pn={};m(pn,{Alert:()=>Gd});function Gd({title:r,description:e="",variant:n="default",className:i=""}){let o={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${o[n]||o.default} ${i}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${r}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var gn={};m(gn,{Badge:()=>Kd,Badges:()=>Yd});function Kd(r,e,n="default"){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${i[n]||i.default} ${e|""}">
        ${r}
      </div>
    `.trim()}function Yd(r,e,n="default"){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof text=="string"&&(text=[text]),`
      <div class="flex flex-wrap gap-2 ${e||""}">
        ${r||""}
      
      </div>
    `.trim()}var mn={};m(mn,{Breadcrumb:()=>Xd,BreadcrumbEllipsis:()=>Qd,BreadcrumbItem:()=>Cs,BreadcrumbLink:()=>vs,BreadcrumbList:()=>Ns,BreadcrumbMain:()=>Ps,BreadcrumbPage:()=>Zd,BreadcrumbSeparator:()=>js});function Xd({urls:r,titles:e,links:n}){let i=new S.ItemList(n);if(r)for(let l=0;l<r.length;l++){let u=e?.[l]||r[l].split("/")?.[r[l].split("/").length-1]||"na";i.add({"@type":"WebPage",url:r[l],name:u})}let o=i.items;return console.log("items",o),Ps({children:Ns({children:o.map(l=>Cs({children:vs({href:l?.url,children:l?.name})})).join(js())})})}function Ps({children:r="",className:e="",attrs:n=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${n}>
        ${r}
      </nav>
    `.trim()}function Ns({children:r="",className:e="",attrs:n=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${n}>
        ${r}
      </ol>
    `.trim()}function Cs({children:r="",className:e="",attrs:n=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${n}>
        ${r}
      </li>
    `.trim()}function vs({children:r="",href:e="#",className:n="",attrs:i=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${n}" ${i}>
        ${r}
      </a>
    `.trim()}function Zd({children:r="",className:e="",attrs:n=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${n}>
        ${r}
      </span>
    `.trim()}function js({children:r,className:e="",attrs:n=""}={}){let i=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${n}>
        ${r!==void 0?r:i}
      </li>
    `.trim()}function Qd({className:r="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${r}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var hn={};m(hn,{Button:()=>ec});function ec({text:r,variant:e="primary",size:n="default",className:i="",attrs:o=""}){let a={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[e]||a.primary} ${l[n]||l.default} ${i}" ${o}>
        ${r}
      </button>
    `.trim()}var yn={};m(yn,{Card:()=>tc,CardBody:()=>ic,CardContent:()=>lc,CardDescription:()=>ac,CardFooter:()=>sc,CardHeader:()=>rc,CardMain:()=>nc,CardMedia:()=>uc,CardTitle:()=>oc});function tc(r,e){return`


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${e}">

      ${r||""}

    </div>
  `}function rc(r,e){return!r||(e=e||"",r.trim().length==0)?"":`
    <header class="card-header  ${e||""} ">${r||""}</header>

  `}function nc(r,e){return!r||r.trim().length==0?"":`
    <section class="card-main  ${e||""} ">${r||""}</section>

  `}function ic(r,e){return!r||r.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mb-6 ${e||""} ">${r||""}</div>

  `}function sc(r,e){return!r||r.trim().length==0?"":`
    <footer class="card-footer mt-auto align-bottom ${e||""} ">${r||""}</footer>
  `}function oc(r,e){return!r||r.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e||""} ">
    ${r||""}  
    </h3>
     `}function ac(r,e){return!r||r.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e||""}">${r||""}</p>
  `}function lc(r,e){return!r||r.trim().length==0?"":`
    <div class="card-content  ${e||""} ">${r||""}</div>
  `}function uc(r,e){return!r||r.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e||""} ">
        ${r||""}
    </div>
  `}var bn={};m(bn,{Dialog:()=>dc});function dc({id:r,title:e,description:n="",content:i,footer:o="",className:a=""}){return`
      <dialog id="${r}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${a}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${e}</h3>
            ${n?`<p class="text-sm text-muted-foreground">${n}</p>`:""}
          </div>
          <div class="py-2 text-sm">
            ${i}
          </div>
          ${o?`<div class="flex justify-end gap-3 pt-4">${o}</div>`:""}
        </div>
      </dialog>
    `.trim()}var xn={};m(xn,{Footer:()=>cc});function cc({brand:r="Acme Inc",copyright:e="",columns:n=[],className:i=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let o=n.map(a=>`
      <div class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground tracking-tight">${a.title}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          ${a.links.map(l=>`
            <li>
              <a href="${l.url||"#"}" class="transition-colors hover:text-foreground">
                ${l.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");return`
      <footer class="w-full border-t border-border bg-background/95 py-8 md:py-12 ${i}">
        <div class="container mx-auto px-4 space-y-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div class="space-y-3">
              <div class="font-bold text-lg tracking-tight">${r}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${o}
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
    `.trim()}var Vn={};m(Vn,{Header:()=>fc});function fc({brand:r="",navItems:e=[],actions:n="",className:i=""}){let o=e.map((a,l)=>{if(a.dropdown&&a.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
          <div class="relative inline-block text-left">
            <button 
              onclick="toggleDropdown('${u}')" 
              class="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer py-2 px-3 rounded-md hover:bg-accent"
            >
              <span>${a.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              id="${u}" 
              class="hidden absolute left-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-80"
            >
              ${a.dropdown.map(c=>`
                <a href="${c.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${c.name}
                </a>
              `).join("")}
            </div>
          </div>
        `}return`
        <a href="${a.url||"#"}" class="text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-accent">
          ${a.name}
        </a>
      `}).join("");return`
      <header class="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${i}">
        <div class="container mx-auto flex h-14 items-center justify-between px-4">
          <div class="flex items-center gap-6">
            <a href="#" class="flex items-center space-x-2 font-bold text-lg tracking-tight">
              ${r}
            </a>
            <nav class="hidden md:flex items-center gap-1">
              ${o}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${n}
          </div>
        </div>
      </header>
    `.trim()}var wn={};m(wn,{H1:()=>pc,H2:()=>gc,H3:()=>mc,H4:()=>hc,H5:()=>yc,H6:()=>bc,Heading:()=>ce,P:()=>xc,Text:()=>Vc});function pc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"1",options:e,record_id:n,propertyID:i,className:o})}function gc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"2",options:e,record_id:n,propertyID:i,className:o})}function mc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"3",options:e,record_id:n,propertyID:i,className:o})}function hc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"4",options:e,record_id:n,propertyID:i,className:o})}function yc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"5",options:e,record_id:n,propertyID:i,className:o})}function bc(r,{options:e,record_id:n,propertyID:i,className:o}){return ce({title:r,level:"6",options:e,record_id:n,propertyID:i,className:o})}function ce({title:r,level:e,options:n,record_id:i,propertyID:o,className:a}){return e=String(e||1),`
    <h${e} 
    data-id="${i||""}" data-property-id="${o}" 
    class="break-all ${a||""}"
    >${r}</h${e}>
    
    `}function xc(r,e,{options:n,record_id:i,propertyID:o,className:a}){return`
      <p data-id="${i||""}" data-property-id="${o}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${a??""} "
      >${r||""}</p>
    
    `}function Vc(r,e,{options:n,record_id:i,propertyID:o,className:a}){return`
      <p data-id="${i||""}" data-property-id="${o}" class="${e!==void 0?`line-clamp-${e??1}`:""} ${a??""} "
      >${r||""}</p>
    
    `}var An={};m(An,{ImageModal:()=>wc});function wc({src:r,alt:e="",caption:n="",aspectRatio:i="aspect-video",className:o="",imageClassName:a="",attrs:l=""}){let u=`img-modal-${Math.random().toString(36).substring(2,9)}`;return`
    <!-- Thumbnail Trigger -->
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${o}" 
      ${l}
    >
      <button 
        type="button"
        onclick="document.getElementById('${u}').showModal()"
        aria-label="Enlarge image: ${e||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full ${i} overflow-hidden bg-muted">
          <img 
            src="${r}" 
            alt="${e}" 
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${a}"
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
        id="${u}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${u}').close()" 
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
              src="${r}" 
              alt="${e}" 
              class="max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>

          <!-- Optional Caption -->
          ${n?`
            <div class="mt-3 w-full text-center text-sm text-muted-foreground">
              ${n}
            </div>
          `:""}
        </div>
      </dialog>
    </div>
  `.trim()}var kn={};m(kn,{Input:()=>M,InputCheckbox:()=>Ac,InputDate:()=>kc,InputDateTime:()=>_c,InputEmail:()=>Sc,InputNumber:()=>$c,InputPassword:()=>Ic,InputTel:()=>Tc,InputText:()=>Pc,InputTime:()=>Nc,InputUrl:()=>Cc});function M({label:r="",type:e="text",placeholder:n="",value:i="",id:o="",className:a="",attrs:l=""}){let u=o?`id="${o}"`:"";return`
      <div class="space-y-2 w-full">
        ${r?`<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${o?`for="${o}"`:""}>${r}</label>`:""}
        <input 
          type="${e||"text"}" 
          id=${o||""} 
          placeholder="${n||""}" 
          value=${i||""} 
          class="
            flex h-9 w-full rounded-md border border-input bg-transparent 
            px-3 py-1 text-sm shadow-sm transition-colors 
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 
            ${a||""}"
          ${l||""}
        />
      </div>
    `.trim()}function Ac({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"checkbox",label:r,value:e,propertyID:n,id:i,className:o})}function kc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"date",label:r,value:e,propertyID:n,id:i,className:o})}function $c({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"number",label:r,value:e,propertyID:n,id:i,className:o})}function _c({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"datetime-local",label:r,value:e,propertyID:n,id:i,className:o})}function Sc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"email",label:r,value:e,propertyID:n,id:i,className:o})}function Ic({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"password",label:r,value:e,propertyID:n,id:i,className:o})}function Tc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"tel",label:r,value:e,propertyID:n,id:i,className:o})}function Pc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"text",label:r,value:e,propertyID:n,id:i,className:o})}function Nc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"time",label:r,value:e,propertyID:n,id:i,className:o})}function Cc({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return M({type:"url",label:r,value:e,propertyID:n,id:i,className:o})}var $n={};m($n,{Pagination:()=>vc,PaginationComponent:()=>Ds,PaginationContent:()=>Os,PaginationEllipsis:()=>Hs,PaginationItem:()=>ze,PaginationLink:()=>jt,PaginationNext:()=>Us,PaginationPrevious:()=>Bs,buildPaginationUrl:()=>Rs});function Rs(r,e,n){try{let i=new URL(r,typeof window<"u"?window.location.href:"http://localhost");return i.searchParams.set("limit",String(e)),i.searchParams.set("offset",String(n)),i.pathname+i.search+i.hash}catch{return`${String(r).split("?")[0]}?limit=${e}&offset=${n}`}}function Ds({children:r="",className:e="",attrs:n=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${n}
    >
      ${r}
    </nav>
  `.trim()}function Os({children:r="",className:e="",attrs:n=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${n}>
      ${r}
    </ul>
  `.trim()}function ze({children:r="",className:e="",attrs:n=""}={}){return`
    <li class="${e}" ${n}>
      ${r}
    </li>
  `.trim()}function jt({href:r="#",isActive:e=!1,size:n="icon",children:i="",className:o="",attrs:a=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",c=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${r}"
      aria-current="${e?"page":"false"}"
      class="${u} ${l[n]||l.icon} ${c} ${o}"
      ${a}
    >
      ${i}
    </a>
  `.trim()}function Bs({href:r="#",disabled:e=!1,className:n="",attrs:i=""}={}){return jt({href:r,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${n}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Us({href:r="#",disabled:e=!1,className:n="",attrs:i=""}={}){return jt({href:r,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${n}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Hs({className:r="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${r}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function vc({url:r,total:e,limit:n=10,offset:i=0,siblingCount:o=1,className:a="",attrs:l=""}={}){let u=Math.ceil(e/n)||1,c=Math.floor(i/n)+1,d=W=>{let F=(W-1)*n;return Rs(r,n,F)},g=(W,F)=>{let se=F-W+1;return Array.from({length:se},(qe,Ge)=>W+Ge)},y=o+5,b=[];if(y>=u)b=g(1,u);else{let W=Math.max(c-o,1),F=Math.min(c+o,u),se=W>2,qe=F<u-2,Ge=1,xo=u;if(!se&&qe){let Ie=3+2*o;b=[...g(1,Ie),"ellipsis",u]}else if(se&&!qe){let Ie=3+2*o,qn=g(u-Ie+1,u);b=[Ge,"ellipsis",...qn]}else if(se&&qe){let Ie=g(W,F);b=[Ge,"ellipsis",...Ie,"ellipsis",xo]}}let $=[],E=c>1,ne=E?d(c-1):"#";$.push(ze({children:Bs({href:ne,disabled:!E})})),b.forEach(W=>{if(W==="ellipsis")$.push(ze({children:Hs()}));else{let F=Number(W),se=F===c;$.push(ze({children:jt({href:d(F),isActive:se,children:String(F)})}))}});let ie=c<u,Bt=ie?d(c+1):"#";$.push(ze({children:Us({href:Bt,disabled:!ie})}));let Ut=Ds({className:a,attrs:l,children:Os({children:$.join("")})});return Ut=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ut}
    </div>`,Ut}var _n={};m(_n,{Section:()=>jc,SectionHeader:()=>Rc});function jc({children:r="",variant:e="default",container:n="default",className:i="",containerClassName:o="",attrs:a=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},c=l[e]||l.default,d=u[n]!==void 0?u[n]:u.default,g=n!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${o}".trim()>${r}</div>`:r;return`
    <section class="w-full bg-background text-foreground ${c} ${i}" ${a}>
      ${g}
    </section>
  `.trim()}function Rc({title:r="",description:e="",align:n="left",className:i=""}={}){let o={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${o[n]||o.left} ${i}">
      ${r?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${r}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var Sn={};m(Sn,{Table:()=>Oc,TableBody:()=>Ws,TableCell:()=>G,TableCellCenter:()=>Ec,TableCellLeft:()=>Mc,TableCellLink:()=>Fc,TableCellNumber:()=>Wc,TableCellRight:()=>Ls,TableCellText:()=>Lc,TableColumnHeader:()=>Es,TableColumnHeaderCenter:()=>Hc,TableColumnHeaderLeft:()=>Bc,TableColumnHeaderRight:()=>Uc,TableFooter:()=>Js,TableHeader:()=>Ms,TableRow:()=>Fs,getTable:()=>Dc});function Dc({headers:r=[],rows:e=[],className:n=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${n||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Ms(r.map(i=>Es(i)))}
      
        ${Ws(e.map(i=>Fs(i.map(o=>G(o)))))}
        
        ${Js()}

      </table>

    </div>
  
  
  `}function Oc(r,e,n,i,o=""){return Array.isArray(r)&&(r=r.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${o||""}">
      
      <table data-id="${e||""}" data-property-id="${n||""}" class="w-full caption-bottom text-sm">

        ${r}

      </table>

    </div>
  
  
  `}function Ms(r,e){return r?(Array.isArray(r)&&(r=r.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${r}
        </tr>
  </thead>
  `):""}function Es(r,e){return r||(r=""),`
    <td class="p-4 align-middle pr-0 ${r?.table?.className||r?.className||""}">
      ${r?.htmlValue??r?.value??r}
    </td>
  `}function Bc(r,e){return G(r,e)}function Uc(r,e){return e=e+" text-right ",G(r,e)}function Hc(r,e){return e=e+" text-center ",G(r,e)}function Ws(r,e,n,i){return!r||(Array.isArray(r)&&(r=r.join(" ")),r.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${r}</tbody>
  
  `}function Fs(r,e,n,i){return!r||(Array.isArray(r)&&(r=r.join(" ")),r.trim().length==0)?"":`
  
    <tr 
      data-id="${e||""}" 
      data-property-id="${n||""}" 
      class="${i||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${r}</tr>
  `}function G(r,e,n,i){return r||(r=""),Array.isArray(r)&&(r=r.join(" ")),`
    <td 
      data-id="${e||""}" 
      data-property-id="${n||""}" 
      class="p-4 align-middle ${i||""}"
    >${r}</td>
  `}function Mc(r,e,n,i){return G(r,e,n,i)}function Ls(r,e,n,i){return i=i+" text-right ",G(r,e,n,i)}function Ec(r,e,n,i){return i=i+" text-center ",G(r,e,n,i)}function Wc(r,e,n,i,o,a){return r=s.toNumber(r),r=V.number.format(r,e),Ls(`
      
    ${r||""}
    ${n||""}
  `,"krnumber h-min font-mono")}function Fc(r,e,n,i,o,a){return G(`
      
    <a data-id="${i||""}" data-property-id="${o||""}"  title="${e||""}" href="${r||""}" target="_blank" rel="noopener noreferrer">${e||r||""}</a>
    ${n||""}
  `,"krurl max-w-2xs truncate")}function Lc(r,e,n,i){let o=`
    <div 
      data-id="${e||""}" 
      data-property-id="${n||""}"  
      title="${r}" 
      class=" line-clamp-4"
    >${r??""}</div>
  `;return G(o)}function Js(r,e,n,i){return r?`
    
      <tfoot>
      
        ${r}

      </tfoot>
    
    `:""}var In={};m(In,{Webpage:()=>Jc});function Jc({title:r,headContent:e,header:n,footer:i,content:o,breadcrumb:a}){return`
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${r||""}</title>
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
      <div id="header-container" class="w-full">${n||""}</div>

      <!-- Main Content Target: Flex-1 fills available vertical space -->
      <main class="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-8">
        <div id="main-content" class="w-full max-w-6xl space-y-8">
          ${a||""}
          ${o||""}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${i||""}</div>


      <script type="module" src="library.js"></script>

    </body>
    </html>
  `.trim()}var Tn={};m(Tn,{CardGrid:()=>zc});function zc({nbOfColumns:r,content:e}){let n=String(r??2),i=String(r??3),o=String(r??4);return r=String(r??1),`
    <div class="grid grid-cols-${r} gap-6 sm:grid-cols-${n} lg:grid-cols-${i} xl:grid-cols-${o}">
      ${e}
    </div>
  `}var Pn={};m(Pn,{JsonEditor:()=>Gc});function zs({children:r="",variant:e="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[e]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${r}
    </button>
  `.trim()}function qc({title:r="",description:e="",children:n="",footer:i="",className:o="",attrs:a=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${o}" ${a}>
      ${r||e?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${r?`<h3 class="font-semibold leading-none tracking-tight text-xl">${r}</h3>`:""}
          ${e?`<p class="text-sm text-muted-foreground">${e}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${n}</div>
      ${i?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${i}</div>`:""}
    </div>
  `.trim()}function Gc({id:r=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:n={title:"Sample Record",active:!0},headers:i={"Content-Type":"application/json"},className:o="",attrs:a=""}={}){let l=r.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof n=="string"?n:JSON.stringify(n,null,2),c=JSON.stringify(i,null,2),d=`
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
  `.trim(),g=`
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
            ${zs({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
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
        ${zs({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
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
  `.trim();return qc({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:g,className:o,attrs:a})}var Nn={};m(Nn,{Modal:()=>Kc});function Kc(r,e,n){let i="modal_"+s.randomUUID();return`
    
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${n}" 
      ${attrs}
    >
      <button 
        type="button"
        onclick="document.getElementById('${i}').showModal()"
        aria-label="Enlarge image: ${alt||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full  overflow-hidden bg-muted">
         ${r}
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
        id="${i}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${i}').close()" 
            aria-label="Close modal"
            class="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <div class="max-h-[80vh] overflow-hidden rounded-lg">
            
            ${e||""}
          </div>

         
        </div>
      </dialog>
    </div>
    
    
    `}var Cn={};m(Cn,{DropdownMenu:()=>Xc,DropdownMenuIcon:()=>Zc,Menu:()=>Yc,MenuItemLink:()=>Qc,MenuItemPost:()=>ef,MenuItemSeparator:()=>tf});function Yc(r){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${r}
      </div>
   

    `}function Xc(r,e,n){return`
    <details class="relative inline-block text-left ${n||""}" >
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden "
      >
        ${r}
      </summary>

      <div class="absolute  z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
    </details>

    `}function Zc(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Qc(r,e,n,i){return`
    
        <a href="${n||""}">${r||""}${e}</a>

    `}function ef(r,e,n,i){return`<form method="POST" action="${n||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(i)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${e||""}
          </button>
        </form>`}function tf(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var vn={};m(vn,{Kanban:()=>rf,KanbanBody:()=>sf,KanbanCard:()=>ff,KanbanCardBody:()=>gf,KanbanCardFooter:()=>mf,KanbanCardHeader:()=>pf,KanbanColumn:()=>lf,KanbanColumnBody:()=>df,KanbanColumnFooter:()=>cf,KanbanColumnHeader:()=>uf,KanbanFooter:()=>of,KanbanHeader:()=>nf,KanbanTitle:()=>af});function rf(r){return`
    
    <div class="kr-kanban bg-white p-6">
    ${r}
  </div>
    `}function nf(r){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${r}
    </header>`}function sf(r){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${r}
    </div>`}function of(r){return`<footer class="kr-kanban-footer">
    ${r}
    </footer>`}function af(r,e){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${r}</h1>
      <p class="text-sm text-neutral-500">${e}</p>
    </div>`}function lf(r){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${r}
        </section>

    
    `}function uf(r){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${r}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function df(r){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${r}
          </div>

    `}function cf(r){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${r}
      </footer>
    `}function ff(r){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${r}
        </article>
    `}function pf(r){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${r}</span>
   
    `}function gf(r){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${r}</p>
        
    `}function mf(r){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${r}
          </div>
    `}var p={...fn,...pn,...gn,...mn,...hn,...yn,...Tn,...bn,...cn,...xn,...Vn,...An,...vn,...Cn,...Nn,...kn,...Pn,...$n,..._n,...Sn,...wn,...In};var Bn={};m(Bn,{Card:()=>kf,Cards:()=>$f});var On={};m(On,{Media:()=>fe});var Dt={};m(Dt,{fixedLength:()=>Rt,textCenter:()=>jn});function Rt(r,e=void 0,n=0){let i=r;if(s.isArray(r)){let a=r.length;a==0&&(r=""),a==1&&(r=r[0]),a>1&&(r=`(${r.length})`)}let o=V.getDataType(r);if(o=="Undefined"&&(r=""),o=="Jsonld"&&(r=r?.["@id"]),o=="Number"&&(r=V.toNumber(r),r=r.toFixed(n),r=r.padStart(e," ")),o=="Date"&&(r=V.toDate(r),r=new Intl.DateTimeFormat("en-CA").format(r)),r=r===void 0?"":r,e!=null&&r.length>e){let a="",l=Math.round(e/3),u=e-l-3;a+=r.slice(0,l),a+="...",a+=r.slice(-u),r=a}return e!=null&&(r=r.padEnd(e," ")),r}function jn(r,e,n=" "){r=r??"",r=String(r);let i=Math.floor((e-r.length)/2);return r=r.padStart(r.length+i,n).padEnd(e,n),r}var Dn={};m(Dn,{toTextRecord:()=>hf,toTextTable:()=>xf});function hf(r,e=80){let n=yf(r,e),i=bf(r),o="";o+=qs(n),o+=`
`,i.length>0?o+=i.map(a=>Gs(a,n)).join(""):o+=`(no records)
`}function yf(r,e=80){let i=Rn(r).map(l=>(l||"").length),o=Math.max(...i);return[{t:"Property ID",p:"propertyID",w:Math.max(o,11)},{t:"Value",p:"value",w:e-Math.max(o,11)}]}function bf(r){let e=Rn(r),n=[];for(let i of e){let o={"@type":"PropertyValue",propertyID:i,value:V.getValues(r,i)};n.push(o)}return n}function xf(r,e,n=!0,i=80){e=Vf(r,e,n),r=wf(r,e,n);let o="";if(o+=qs(e),o+=`
`,r.length>0){let a=r.map(l=>Gs(l,e));o+=a.join("")}else o+=jn("(no records to display.)",i);return o}function Vf(r,e,n=!0){e=s.toArray(e),(!e||e.length==0)&&(e=Rn(r).map(o=>({title:o,propertyID:o,width:o.length}))),(n=!0)&&(e.map(o=>o?.propertyID||o?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let i of e)i.title=i?.title||i?.t||i?.propertyID||i?.p||"",i.t=i.title,i.propertyID=i?.propertyID||i?.p||"",i.p=i.propertyID,i.width=i?.width||i?.w||i?.length||i?.l||title.length,i.width=Number(i.width),i.width=Math.max(i.width,i.title.length),i.w=i.width,i.length=i.width,i.l=i.width,i.rounding=i?.rounding||i?.r||0,i.rounding=Number(i.rounding),i.r=i.rounding;return e}function wf(r,e,n=!0){if(r=s.toArray(r),!r||r.length==0)return[];if(r=JSON.parse(JSON.stringify(r)),n==!0)for(let[i,o]of r.entries())o.position=o?.position??i;return r}function qs(r){let e="",n=[];for(let o of r){let a=`${Rt(o.title,o.width,o.rounding)}`;n.push(a)}e+=n.join(" "),e+=`
`;let i=[];for(let o of r){let a=`${"".padStart(o.width,"-")}`;i.push(a)}return e+=i.join(" "),e+=`
`,e}function Gs(r,e){let n="",i=[];for(let o of e){let a=s.getValues(r,o.propertyID),l=`${Rt(a,o.width,o.rounding)}`;i.push(l)}return n+=i.join(" "),n+=`
`,n}function Rn(r){r=s.toArray(r);let e=r.map(n=>Object.keys(n));return e=e.flat(),e=[...new Set(e)],e=Af(e),e}function Af(r){r=s.toArray(r);let e=["position","@type","@id"];return r.sort((n,i)=>{if(n==i)return 0;for(let o of e){if(n==o&&i!=o)return-1;if(n!=o&&i==o)return 1}return n.startsWith("@")&&!i.startsWith("@")?-1:!n.startsWith("@")&&i.startsWith("@")?1:n<i?-1:1}),r}var Xh={...Dt,...Dn};function fe({url:r,record:e,options:n,layoutClasses:i,className:o,attrs:a}){let l=s.getValue(e,"contentUrl");return l?s.record_type(e)=="VideoObject"?`  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${s.getValue(e,"thumbnailUrl")}">
                    <source src="${l}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `:`
        
                    <div class="block-media  ">

          
                ${p.ImageModal({src:s.getImageUrl(e),alt:s.getImageName(e)})}
         
                    </div>

        `:""}function re({website:r,webpage:e,title:n,headContent:i,content:o,options:a}){e=new S.WebPage(e),r=new S.WebSite(r);let l={};l.title=n,l.title=l.title||s.getValue(e,"title"),l.title=l.title||s.getValue(e,"name"),l.title=l.title||s.getValue(r,"title"),l.title=l.title||s.getValue(r,"name"),l.headContent=i,l.breadcrumb=p.Breadcrumb({links:s.getValue(e,"breadcrumb")});let u=s.getValue(r,"about.name")??s.getValue(r,"name")??s.getValue(e,"about.name")??s.webpage(r,"name"),c=e.WPHeader.hasPart||[],d=e.WPFooter.hasPart||[];return c=Array.isArray(c)?c:[c],d=Array.isArray(d)?d:[d],l.header=p.Header({brand:u,navItems:c}),l.footer=p.Footer({brand:u,navItems:d}),l.content=o,p.Webpage(l)}function Ks({website:r,webpage:e,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:c,offset:d,limit:g,options:y}){return a=a??"",a+=N.Cards({url:i,records:l,offset:d,limit:g,nbOfColumns:3,options:y}),re({website:r,webpage:e,title:n,headContent:o,content:a,options:y})}function kf(r,e,n,i=!0){let o=S.format.getTitle1(r),a=S.format.getContent(r),l=s.getRecordUrl(r,e),u=i==!0?S.format.imageUrl(r):void 0;return p.Card({title:o,description:a,url:l,media:u,className:n})}function $f({url:r,records:e,offset:n,limit:i,orderBy:o,orderDirection:a,nbOfColumns:l,includePagination:u,options:c,layoutClasses:d,className:g,attrs:y}){n=Number(n),n=isNaN(n)?0:n,i=Number(i),i=isNaN(i)?20:i;let b=new S.ItemList(e);b=b.record,b.numberOfItems=b?.numberOfItems??b.itemListElement.length,b=Ot({record:b,options:c}),b.itemListElement=b.itemListElement.filter(ie=>s.getValue(ie,"position")>=n&&s.getValue(ie,"position")<n+i);let $="";for(let ie of s.getValues(b,"itemListElement")){let Bt=s.getValue(ie,"item");$+=_f({url:r,item:Bt,options:c})}$=p.CardGrid({content:$,nbOfColumns:l});let E=p.Pagination({url:r,limit:i,offset:n,total:b.numberOfItems,options:c});return`

        <div class="${d} ${g}" ${y}>
        <div class="flex-1">
            ${$}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${E}
        </div>
        </div>

    `}function _f({url:r,item:e,options:n}){let i=s.getImageUrl(e),o=s.getImageName(e),a=s.getValues(e,"keywords");a=a.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let l=p.Badges({text:a,variant:"secondary"}),u={title:s.getValue(e,"name"),url:s.getRecordUrl(e,n?.baseUrl),description:s.getValue(e,"description"),footer:l,image:s.getImageUrl(e),imageAlt:s.getImageName(e),media:fe({record:e,options:n})};return p.Card(u)}var Un={};m(Un,{Input:()=>If});function If({record:r,propertyID:e,value:n}){return p.Input({value:n})}var Mn={};m(Mn,{Table:()=>Tf,TableBody:()=>Xs,TableCell:()=>Qs,TableHeader:()=>Ys,TableRow:()=>Zs,getDataType:()=>eo,getHeadersFromProperties:()=>Hn,getPropertiesFromRecords:()=>Se});function Tf(r,e,n,i,o,a){let l=r;n=n||Se(l),i=i||Hn(n);let u=[];return o==!0&&(i=["Thumbnail"].concat(i),n=["item"].concat(n),u=["thumbnail"].concat(u)),a==!0&&(i=["#"].concat(i),n=["position"].concat(n),u=["position"].concat(u)),p.Table(Ys(l,n,i,u)+Xs(l,n,e,u))}function Ys(r,e,n,i){return e=e||Se(r),n=n||Hn(e),i=i||[],e=e||Se(r),p.TableHeader(n.map((o,a)=>{switch(i?.[a]){case"number":return p.TableColumnHeaderRight(o);default:return p.TableColumnHeader(o)}}).join(" "))}function Xs(r,e,n,i){e=e||Se(r),i=i||[];let o=s.getValues(new S.ItemList(r),"itemListElement");return p.TableBody(o.map(a=>Zs(a,e,n,i)).join(" "))}function Zs(r,e,n,i){return e=e||Se(r),i=i||[],p.TableRow(e.map((l,u)=>Qs(r,s.getValues(r,l),l,n,i,u)).join(" "),s.record_id(r),void 0,"kr-listitem")}function Qs(r,e,n,i,o,a){let l=e,u=n,c=r;if(l=s.isArray(l)&&l.length==0?"":l,l=s.isArray(l)&&l.length==1?l[0]:l,(u||"").endsWith("@type")){let d=V.url.getUrl(i||"","/"+l);return p.TableCellLink(d,l)}if((u||"").endsWith("@id")){let d=s.getRecordUrl(c,i);return p.TableCellLink(d,l)}switch(o?.[a]||eo(l)){case"array":return p.TableCellCenter(`(${l.length})`);case"text":return p.TableCellText(l);case"number":return p.TableCellNumber(l,2);case"link":return p.TableCellLink(l,l);case"thumbnail":return p.TableCell(fe({record:l}));case"position":return p.TableCellNumber(l,0);case"object":return p.TableCellLink(s.getRecordUrl(l,i),s.record_id(l));default:return p.TableCellText(l)}}function Se(r){let n=s.getValues(r,"itemListElement").map(o=>s.getValue(o,"item")),i=[...new Set(n.flatMap(Object.keys))];return i=i.filter(o=>o.startsWith("@")===!1),i=i.map(o=>"item."+o),i=["item.@type","item.@id"].concat(i),i}function Hn(r){r=r||[];let e=r.map(n=>n.split(".")?.[1]||n);return e=e.map(n=>n=="position"?"No":n),e=e.map(n=>({htmlValue:n,table:{className:"capitalize"}})),e}function eo(r){return r=s.isArray(r)&&r.length==0?void 0:r,r=s.isArray(r)&&r.length==1?r[0]:r,r?V.isNumber(r)?"number":V.isUrl(r)?"link":V.isDate(r)?"date":V.isArray(r)?"array":V.isObject(r)?"object":"text":"text"}var En={};m(En,{Record:()=>Pf});function Pf(r,e,n,i="",o="",a=!1,l=0,u={}){r=s.removeCircularRefs(r),n=n||Object.keys(r),u.baseUrl=e||u?.baseUrl;let c={rows:[]},d=to({record:r,baseUrl:e,properties:n,className:i,attrs:o,expandAll:a,depth:0,options:u});return`

        <div class="space-y-4 ${i||""}" ${o||""}>
            <div class="flex-1">
                ${fe({record:r,options:u})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${p.JsonEditor({initialData:r,endpoint:e})}
              </details>
            </div>
        </div>

    `}function to({record:r,properties:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){e=e||Object.keys(r);let u=e.filter(y=>y.startsWith("@")),c=e.filter(y=>!y.startsWith("@"));e=u.sort().concat(c.sort());let d={rows:[]};return p.Table(p.TableHeader(p.TableRow(p.TableCellRight("")+p.TableCellRight(N.DropdownMenu(s.getPotentialActions(r)))))+p.TableBody(e.map(y=>p.TableRow([p.TableCell(y+":"),p.TableCell(ro({record:r,propertyID:y,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))].join(" "))).join(" ")))}function Nf({record:r,propertyID:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(r,e),c=[];for(let d of u){let g=s.clone(r);g=s.setValue(g,e,d),c.push(ro({record:g,propertyID:e,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))}return`
        <ul class="space-y-4 ">
          ${c.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function ro({record:r,propertyID:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(r,e);return s.isArray(u)&&u.length==1&&(u=u[0]),s.isArray(u)&&u.length==0?"":s.isArray(u)&&u.length>0?`
            <details class="space-y-4"> 
            
                <summary>${N.ValueArray(u,e,l?.baseUrl)}</summary>
      
                ${Nf({record:r,propertyID:e,className:n,attrs:i,expandAll:o,depth:a,options:l})}
            
            </details>
      `:u?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${N.ValueThing(u,e,l?.baseUrl)}</summary>
      
            ${to({record:u,propertyID:void 0,className:n,attrs:i,expandAll:o,depth:a,options:l})}
        
        </details>
      `:u===void 0?"":N.Value(u,e,l?.baseUrl)}var Wn={};m(Wn,{DropdownMenu:()=>vf,Menu:()=>Cf});function Cf(r){return r=s.toArray(r),!r||r.length==0?"":p.DropdownMenu(p.DropdownMenuIcon(),r.map(e=>p.MenuItemPost(s.getImageUrl(e),s.getName(e),s.getUrl(e))).join(" "))}function vf(r){if(r=s.toArray(r),!r||r.length==0)return"";let e=r.map(i=>p.MenuItemPost(s.getImageUrl(i),s.getName(i),s.getUrl(i),s.ref(i))).join(" ");return p.DropdownMenu(p.DropdownMenuIcon(),e)}var Fn={};m(Fn,{Value:()=>jf,ValueArray:()=>so,ValueDateTime:()=>ao,ValueDuration:()=>Rf,ValueMonetaryAmount:()=>Df,ValueNumber:()=>lo,ValueRecordId:()=>no,ValueRecordType:()=>io,ValueText:()=>uo,ValueThing:()=>co,ValueUrl:()=>oo});function jf(r,e,n){return s.isArray(r)?so(r,e,n):e=="@type"?io(r,e,n):e=="@id"?no(r,e,n):s.isObject(r)?co(r,e,n):s.isNumber(r)?lo(r,e,n):s.isDate(r)?ao(r,e,n):V.isUrl(r)?oo(r,e,n):uo(r,e,n)}function no(r,e,n){let i=s.getRecordUrl({"@id":r},n),o=`<a title="${r}" href="${i}">${r}</a>`;return Q(o,e)}function io(r,e,n){let i=V.url.getUrl(n,r),o=`<a class="h-min" title="${r}" href="${i}">${r}</a>`;return Q(o,e)}function so(r,e,n){let i=r.length>0?`(${r.length})`:"";return Q(i,e)}function oo(r,e){let n=`<a title="${r}" href="${r}" target="_blank" rel="noopener noreferrer">${r}</a>`;return Q(n,propertyID)}function ao(r,e,n){r=s.toDate(r);let i=V.date.format(r);return Q(i,e)}function Rf(r,e,n){return V.duration.format(pv.value)}function lo(r,e,n){let i=e=="position"?0:2;return r=s.toNumber(r),r=V.number.format(r,i),Q(r,e)}function uo(r,e,n){return Q(r,e)}function co(r,e,n){let i=s.getRecordUrl(r,n),o=s.getName(r)||s.record_id(r);s.record_type(r)=="ListItem"&&(o=`ListItem ${s.getPosition(r)} - ${s.getValue(r,"item.name")||s.getValue(r,"@id")}`);let a=`<a title="${o}" href="${i}">${o}</a>`;return Q(a,e)}function Df(r,e,n){let i=V.toNumber(s.getValue(pv.value,"value"));if(i===void 0)return pv;let o=V.number.format(i,2),a=s.getValue(record,"currency");return a=(a||"").toUpperCase(),pv.htmlValue=a+" $"+o,a=="USD"&&(pv.htmlValue=a+" $"+o),a=="CAD"&&(pv.htmlValue=a+" $"+o),a=="EUR"&&(pv.htmlValue=a+" "+o+" \u20AC"),a=="GBP"&&(pv.htmlValue=a+" "+o+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",Q(pv,e)}function Q(r,e){return`
      <span class="kr-value" data-property-id="${e}">${r}</span>
    `}var Ln={};m(Ln,{Kanban:()=>Of,KanbanCard:()=>po,KanbanColumn:()=>fo});function Of(r,e){let n=s.getItems(r);return p.Kanban(p.KanbanHeader(p.KanbanTitle("Awesome Kanban","Fuck yeah"))+p.KanbanBody(propertyValues.map(i=>fo(r,e,i)).join(" "))+p.KanbanFooter(""))}function fo(r,e,n){let i=s.getItems(r);return i=i.filter(o=>s.getValue(o,e)==n),p.KanbanColumn(p.KanbanColumnHeader(n)+p.KanbanColumnBody(i.map(o=>po(o)).join(" "))+p.KanbanColumnFooter())}function po(r){return p.KanbanCard(p.KanbanCardHeader("xx")+p.KanbanCardBody(N.Value(s.getName(r),"name"))+p.KanbanCardFooter(N.Value(s.getActionStatus(r),"actionStatus")))}var N={...Bn,...Un,...On,...En,...Mn,...Wn,...Fn,...Ln};function Ot({record:r,options:e}){if(s.isArray(r))return r.map(a=>Ot({record:a,options:e}));let n=s.record_type(r);if(!n)return r;let i=V.url.getUrl(e.baseUrl,"/execute"),o=s.ref(r);for(let a of Object.keys(r?.record||r))r=s.setValues(r,a,Ot({record:s.getValues(r,a),options:e}));return n=="Action"&&s.isPotential(r)&&(r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i})),n=="ItemList"&&(r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:o,url:i})),n=="ListItem"&&(r=s.addValue(r,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),n=="Thing"&&(r=s.addValue(r,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),r}function go({website:r,webpage:e,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:c,offset:d,limit:g,options:y}){return a=a??"",a+=N.Table({url:i,records:l,properties:u,headers:c,offset:d,limit:g,options:y}),re({website:r,webpage:e,title:n,headContent:o,content:a,options:y})}function mo({website:r,webpage:e,title:n,url:i,headContent:o,content:a,record:l,properties:u,headers:c,options:d}){return a=a??"",a+=N.Record({url:i,record:l,options:d}),re({website:r,webpage:e,title:n,headContent:o,content:a,options:d})}var ho={blankPage:re,recordsPage:go,recordPage:mo,cardsPage:Ks};var yo={blocks:N,...ho,components:Z,...Z};var Jn={};m(Jn,{getParsedRequest:()=>Bf});function Bf(r){let e={method:r.method.toLowerCase(),hostname:r.host,url:r.originalUrl,fullUrl:r.protocol+"://"+r.get("host")+r.originalUrl,offset:Number(r.query?.offset),limit:Number(r.query?.limit),orderBy:r.query?.orderBy,orderDirection:r.query?.orderDirection,record_id:r.params.record_id,data:r?.body};if(e.filter={...r.query},console.log("pp",e.filter),r.query?.filter)try{e.filter=JSON.parse(r.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(i=>i.startsWith("_")==!0).forEach(i=>delete e.filter[i]),["filter","offset","limit","orderBy","orderDirection"].forEach(i=>delete e.filter[i])),e}var bo={shadcn:yo,express:Jn};var zn={...s,...un,html:bo},tx=zn,rx=zn,nx=zn;export{zn as _h,nx as default,tx as h,rx as helpers};
//# sourceMappingURL=jsonldCore.js.map
