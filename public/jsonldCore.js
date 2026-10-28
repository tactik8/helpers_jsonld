var wo=Object.defineProperty;var m=(e,r)=>{for(var n in r)wo(e,n,{get:r[n],enumerable:!0})};var pe={get:Te,set:Ke,flatten:Ao,expand:$o};function Te(e,r){if(!r||typeof r!="string")return;let n=qn(r),i=e;for(let o of n)isNaN(o)?i=Array.isArray(i)?i[0]:i:i=Array.isArray(i)?i:[i],i=i?.[o];return i}function Ke(e,r,n){if(!r||typeof r!="string"||r=="")return;let i=qn(r);if(i.length==0)return n;let o=e;e=e||{},isNaN(i[0])||(e=Array.isArray(e)?e:[e]);let a=e;for(let l=0;l<i.length-1;l++){let u=i[l],c=i[l+1],d=!isNaN(c);d==!0&&(a[u]=Array.isArray(a[u])?a[u]:[a[u]],a=a?.[u]),d==!1&&(a[u]=a?.[u]||{},a=Array.isArray(a?.[u])?a?.[u][0]:a?.[u])}return a[i[i.length-1]]=n,e}function Ao(e){function r(o,a){let l=[];return Array.isArray(a)?(o=o||"",a.map((c,d)=>r(`${o}[${String(d)}]`,c)).flat()):a?.["@type"]||a?.["@id"]?(o=o&&o!=""?o+".":"",Object.keys(a).map(c=>r(`${o}${c}`,a[c])).flat()):[{propertyID:o,value:a}]}let n=r("",e),i={};return n.forEach(o=>i[o.propertyID]=o.value),i}function $o(e){let r={};return Object.keys(e).forEach(n=>Ke(r,n,e?.[n])),r}function qn(e){let r=[],n="",i=["[","]","."];for(let o of e)if(i.includes(o)){n!=""&&r.push(n),n="";continue}else n=n+o;return r.push(n),r=r.filter(o=>o!=""),r=r.map(o=>isNaN(Number(o))?o:Number(o)),r}var Lt={};m(Lt,{eq:()=>No,ge:()=>Ro,getDiff:()=>Kn,getHash:()=>Gn,getHashNested:()=>Do,gt:()=>jo,isEqual:()=>Po,isSame:()=>To,le:()=>Co,lt:()=>vo});var Ye={};m(Ye,{expand:()=>So,flatten:()=>_o,getChildren:()=>Io,handleRelationships:()=>Mt,simplify:()=>Et,strip:()=>Ht});function So(e,r,n=!0){let i=s._storeToMap(e),o=new Map;function a(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(y=>a(y));let u=s.record_id(l);if(u&&o.has(u)){let y=o.get(u);return n?y:s.ref?s.ref(y):{"@id":u}}let d=(u&&i instanceof Map?i.get(u):null)||l,g=Array.isArray(d)?[...d]:{...d};u&&o.set(u,g);for(let y of Object.keys(g))y==="previousItem"||y==="nextItem"||(g[y]=a(g[y]));return g}return typeof r=="string"&&(r={"@id":r}),a(r)}function Ht(e){function r(n,i,o){if(Array.isArray(n))return n.map(a=>r(a,i,o));if(n?.["@type"]||n?.["@id"]){if(o>i)return{"@id":n?.["@id"]};{let a={};for(let l of Object.keys(n).sort())a[l]=r(n?.[l],i,o+1);return a}}return n}return r(e,0,0)}function _o(e){function r(i){let o=[];if(!i)return[];if(s.isArray(i)){let a=[];for(let l of i)a=a.concat(r(l));return a}if(Object.prototype.toString.call(i)!=="[object Object]")return[];for(let a of Object.keys(i)){if(a=="@id")continue;if(a=="previousItem"){i[a]=s.ref(i?.[a]);continue}if(a=="nextItem"){i[a]=s.ref(i?.[a]);continue}let l=i[a];l=s.toArray(l),i[a]=[];for(let u of l)u?.["@id"]?i[a].push({"@id":u?.["@id"]}):i[a].push(u),o=o.concat(r(u))}return o=[i].concat(o),o}e=s.clone(e),e=s.setTempID(e),e=Mt(e);let n=r(e);return n=n.filter(i=>i),n=n.filter(i=>s.isRef(i)===!1),n}function Mt(e){if(s.isArray(e))return e.map(n=>Mt(n));let r=e;if(s.record_type(r)=="Product"){let n=s.getValues(r,"offers");n=n.map(a=>s.insertValue(a,"itemOffered",s.ref(r))),r=s.setValues(r,"offers",n);let i=s.getValues(r,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(r))),r=s.setValues(r,"review",i);let o=s.getValues(r,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(r))),r=s.setValues(r,"aggregateRating",o)}if(s.record_type(r)=="Offer"){let n=s.getValues(r,"itemOffered");n=n.map(a=>s.insertValue(a,"offers",s.ref(r))),r=s.setValues(r,"itemOffered",n);let i=s.getValues(r,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(r))),r=s.setValues(r,"review",i);let o=s.getValues(r,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(r))),r=s.setValues(r,"aggregateRating",o)}return r}function Et(e){function r(i,o=0){if(o>20)return i;if(o+=1,i!==void 0){if(Array.isArray(i))return i=i.map(a=>r(a,o)),i=i.filter(a=>a!==void 0),i.length==1?(i=i[0],i):i.length==0?void 0:i;if(i&&typeof i=="object"&&Object.keys(i).length>0){let a={};for(let l of Object.keys(i)){let u=r(i?.[l],o);l=="itemListElement"&&(u=s.toArray(u)),u!==void 0&&(a[l]=u)}return a["@id"]=s.toArray(a?.["@id"])?.[0],a}return i}}return e=s.clone(e),r(e)}function Io(e){function r(n,i){if(s.isArray(n)){let a=[];for(let l of n){let u=r(l,i);a=a.concat(u)}return a}if(!(n?.["@id"]||n?.["@type"]))return[];let o=[];i>0&&o.push(n);for(let a of Object.keys(n))o=o.concat(r(n[a],i+1));return o=o.filter(a=>a),o}return r(e,0)}function To(e,r){if(e=s.record_id(e)??e,r=s.record_id(r)??r,e==null&&r==null)return!0;if(e!=null&&r==null||e==null&&r!=null)return!1;if(!isNaN(e)&&!isNaN(r)||typeof e=="string"&&typeof r=="string"||e instanceof Date&&r instanceof Date)return e==r;try{e=JSON.stringify(e)}catch{}try{r=JSON.stringify(r)}catch{}return e==r}function No(e,r){if(e===void 0&&r===void 0)return!0;if(e!==void 0&&r===void 0||e===void 0&&r!==void 0)return!1;if(e===null&&r===null)return!0;if(e!==null&&r===null||e===null&&r!==null)return!1;e=s.clean(e),r=s.clean(r),e=s.strip(e),r=s.strip(r);try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}try{r=JSON.stringify(r,Object.keys(r).sort(),0)}catch{}return e==r}function Po(e,r){let n=(o,a)=>a instanceof Object&&!(a instanceof Array)?Object.keys(a).sort().reduce((l,u)=>(l[u]=a[u],l),{}):a;try{e=s.JSON_stringify(e)}catch{}try{r=s.JSON_stringify(r)}catch{}return e==r}function vo(e,r){if(e==null&&r==null)return!1;if(!isNaN(e)&&!isNaN(r))return e<r;if(e?.["@id"]!=null&&r?.["@id"]!=null)return e?.["@id"]<r?.["@id"];if(e?.["@id"]!=null&&r?.["@id"]==null||e?.["@id"]==null&&r?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{r=JSON.stringify(r)}catch{}return e<r}function Co(e,r){if(e==null&&r==null)return!1;if(!isNaN(e)&&!isNaN(r))return e<=r;if(e?.["@id"]!=null&&r?.["@id"]!=null)return e?.["@id"]<=r?.["@id"];if(e?.["@id"]!=null&&r?.["@id"]==null||e?.["@id"]==null&&r?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{r=JSON.stringify(r)}catch{}return e<=r}function jo(e,r){if(e==null&&r==null)return!1;if(!isNaN(e)&&!isNaN(r))return e>r;if(e?.["@id"]!=null&&r?.["@id"]!=null)return e?.["@id"]>r?.["@id"];if(e?.["@id"]!=null&&r?.["@id"]==null||e?.["@id"]==null&&r?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{r=JSON.stringify(r)}catch{}return e>r}function Ro(e,r){if(e==null&&r==null)return!1;if(!isNaN(e)&&!isNaN(r))return e>=r;if(e?.["@id"]!=null&&r?.["@id"]!=null)return e?.["@id"]>=r?.["@id"];if(e?.["@id"]!=null&&r?.["@id"]==null||e?.["@id"]==null&&r?.["@id"]!=null)return!1;try{e=JSON.stringify(e)}catch{}try{r=JSON.stringify(r)}catch{}return e>=r}function Gn(e,r=!1){e=Et(e),r==!1&&(e=Ht(e));let n=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((c,d)=>({...c,[d]:n(u[d])}),{}):Array.isArray(u)?u.map(n):u,i=JSON.stringify(n(e)),o=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(o)return o.createHash("sha256").update(i).digest("hex");let a=5381,l=i.length;for(;l;)a=a*33^i.charCodeAt(--l);return(a>>>0).toString(16)}function Do(e){return Gn(e,!0)}function Kn(e,r){if(e===r)return null;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return r;let n={};for(let i in e)if(e.hasOwnProperty(i))if(!r.hasOwnProperty(i))n[i]={removed:e[i]};else{let o=Kn(e[i],r[i]);o!==null&&(n[i]=o)}for(let i in r)r.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&(n[i]={added:r[i]});return Object.keys(n).length>0?n:null}var Wt={};m(Wt,{evaluate:()=>Ft});function Ft(e,r){let n=[];for(let o of Object.keys(r)){let a=o,l=r?.[o];if(l=s.toArray(l),a=="$and")return l.every(u=>Ft(e,u));if(a=="$or")return l.some(u=>Ft(e,u));for(let u of l){let c=Bo(e,a,u);n.push(c)}}return n.every(o=>Oo(o.r,o.p,o.o,o.v))}function Oo(e,r,n,i){try{let o=pe.get(e,r);if(typeof o=="string"&&(o=o.trim()),typeof i=="string"&&(i=i.trim()),o=isNaN(Number(o))?o:Number(o),i=isNaN(Number(i))?i:Number(i),n=="$equal")return o==i;if(n=="$lt")return o<i;if(n=="$gt")return o>i;if(n=="$le")return o<=i;if(n=="$ge")return o>=i;if(n=="$same")return o?.["@id"]&&o?.["@id"]===i?.["@id"];if(n=="$includes")return o.includes(i)}catch(o){return console.log("err",o),!1}}function Bo(e,r,n){let i={r:e,p:r,o:null,v:null};return typeof n=="string"&&(n.startsWith("$")?i={r:e,p:r,o:n.split(" ")[0],v:n.split(" ").slice(1).join(" ")}:i={r:e,p:r,o:"$equal",v:n}),typeof n=="object"&&(i={r:e,p:r,o:Object.keys(n)?.[0],v:n?.[Object.keys(n)?.[0]]}),i}var lr={};m(lr,{assignId:()=>pa,getGenericRecordID:()=>fa,normalizeRecordId:()=>da,replaceIds:()=>fi,setTempID:()=>ci});var Jt={};m(Jt,{clean:()=>Uo,isArray:()=>ge,isValid:()=>Ho,toArray:()=>Xe});function Uo(e){return Xe(e)}function Ho(e){return ge(e)}function ge(e){return e===void 0?!1:Array.isArray(e)&&typeof e!="string"}function Xe(e){return isNull(e)?[]:(e=ge(e)?e:[e],e=e.filter(r=>r!==void 0),e)}var qt={};m(qt,{clean:()=>zt,format:()=>Eo,formatDate:()=>Yn,isDate:()=>K,isNotDate:()=>Lo,isValid:()=>Mo,toDate:()=>me});function zt(e,r=void 0){return me(e)||r}function Mo(e){return K(e)}function Eo(e,r=!1){return Yn(e,r)}function K(e){return e===void 0||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function Lo(e){return!K(e)}function me(e){if(e===void 0)return;if(K(e)==!0)return e;if(!isNaN(Number(e)))return;let r=Date.parse(e);if(!isNaN(r))return e=new Date(e),e=K(e)?e:void 0,e}function Yn(e,r=!1){if(console.log("vv",e,me(e)),e=me(e),K(e)===!1)return;let n=e,i=String(n.getFullYear()).padStart(4,"0"),o=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),l=`${i}-${o}-${a}`;if(r==!0){let u=String(n.getHours()).padStart(2,0),c=String(n.getMinutes()).padStart(2,0),d=String(n.getSeconds()).padStart(2,0);l=l+` ${u}:${c}:${d}`}return console.log("cc",l),l}var Kt={};m(Kt,{clean:()=>Fo,isNotNull:()=>Gt,isNull:()=>ye,isValid:()=>Wo});function Fo(e,r=void 0){}function Wo(e){return ye(e)}function Gt(e){return!ye(e)}function ye(e){return e===void 0||e===null?!0:e===0?!1:typeof e=="string"||he.array.isValid(e)?e.length==0:e instanceof Date?he.date.isValid(e):typeof e=="object"?Object.keys(e)==0:!1}var Xt={};m(Xt,{clean:()=>Yt,format:()=>zo,formatDecimals:()=>Xn,isNotNumber:()=>qo,isNumber:()=>Ne,isValid:()=>Jo,toNumber:()=>Ze});function Yt(e,r=void 0){return Ze(e)??r}function Jo(e){return Ne(e)}function zo(e,r){return Xn(e,r)}function Xn(e,r){if(e=Number(e),!isNaN(e))return r!==void 0?e.toFixed(r):e}function Ne(e){return e===void 0||e===""?!1:(e=Number(e),!isNaN(e))}function qo(e){return!Ne(e)}function Ze(e){if(e!==void 0&&(e=Number(e),!isNaN(e)))return e}var Zt={};m(Zt,{clean:()=>Go,cleanObject:()=>Pe,isObject:()=>Qe,isValid:()=>Ko});function Go(e,r=void 0){return Pe(e)||r}function Ko(e){return Qe(e)}function Qe(e){return e===void 0||V.isString(e)==!0||V.isDate(e)==!0||V.isNumber(e)==!0||V.isArray(e)==!0?!1:Object.keys(e).length>0}function Pe(e){if(V.array.isValid(e)){if(e.length==0)return;if(e.length==1)return e=e[0],Pe(e);if(e.length==1){let r=[];for(let n of e)r=r.concat(Pe(x));r=r.filter(n=>V.isNotNull(n))}}if(V.object.isValid(e))for(let r of Object.keys(e))e[r]=Pe(e[r]),he.isNull(e[r])&&delete e[r];return he.isNotNull(e)?e:void 0}var er={};m(er,{clean:()=>Yo,cleanString:()=>Zn,isString:()=>ve,isValid:()=>Xo,maxLengthEnd:()=>Qo,maxLengthMiddle:()=>Zo,toString:()=>Qt});function Yo(e,r=""){return Zn(e)||r}function Xo(e){return ve(e)&&e.trim().length>=0}function Zo(e,r){if(e==null)return"";let n=String(e);if(r===void 0||r<0||n.length<=r)return n;if(r<=3)return n.substring(0,r);let i=Math.round(r/3),o=r-i-3;return n.substring(0,i)+"..."+n.substring(n.length-o)}function Qo(e,r){if(e==null)return"";let n=String(e);return r===void 0||r<0||n.length<=r?n:r<=3?n.substring(0,r):n.substring(0,r-3)+"..."}function ve(e){return typeof e=="string"||e instanceof String}function Qt(e){return e==null?"":String(e)}function Zn(e){return ve(e)?e.trim():void 0}var nr={};m(nr,{clean:()=>Qn,cleanUrl:()=>ti,getDomain:()=>ea,getParams:()=>ta,getPath:()=>ni,getUrl:()=>ei,isUrl:()=>et,isValid:()=>tr,setParams:()=>ri,setPath:()=>ii,toUrl:()=>rr});function tr(e){return et(e)}function Qn(e,r=void 0){return ti(e)??r}function rr(e,r,n,i=void 0){return ei(e,r,n)||i}function ei(e,r,n){let i=ii(e,r);return n&&(i=ri(i,n)),i}function et(e){return e=Qn(e),!!e}function ti(e,r={}){let{removeTracking:n=!0,stripWww:i=!1,removeTrailingSlash:o=!0,lowercasePath:a=!1,allowedQueryParams:l=[]}=r;try{let u=new URL(e);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),i&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let c=u.pathname;if(c=c.replace(/\/+/g,"/"),a&&(c=c.toLowerCase()),o&&c.length>1&&c.endsWith("/")&&(c=c.slice(0,-1)),u.pathname=c,n){let d=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],g=Array.from(u.searchParams.keys());for(let y of g){let b=d.some(E=>y.toLowerCase().startsWith(E)),$=l.includes(y);b&&!$&&u.searchParams.delete(y)}}return u.searchParams.sort(),u.toString()}catch{return}}function ea(e){try{let r=new URL(e).hostname;return r=r.replaceAll("www.",""),r}catch{return null}}function ta(e){try{let r=new URL(e);return Object.fromEntries(r.searchParams)}catch{return null}}function ri(e,r){try{let n=new URL(e);for(let i of Object.keys(r))n.searchParams.set(i,r[i]);return n.toString()}catch{return null}}function ni(e){try{return new URL(e).pathname}catch{return}}function ii(e,r){r=r??"";let n=[],i=ni(e)||"";n=n.concat(i.split("/")),r=Array.isArray(r)&&typeof r!="string"?r:[r];for(let a of r)n=n.concat(a.split("/"));n=n.filter(a=>a!="");let o="/"+n.join("/");try{return new URL(o,e).toString()}catch(a){console.log(a,o,e);return}}var sr={};m(sr,{clean:()=>ra,format:()=>ia,isDuration:()=>Ce,isValid:()=>na,toDuration:()=>ir});function ra(e,r=void 0){return toDate(e)||r}function na(e){return Ce(e)}function ia(e){return oa(e)}function Ce(e){return sa(e)}function ir(e){return e}function sa(e){return typeof e!="string"||e.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(e.trim())}function oa(e){let r=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,n=e.match(r);if(!n)return"00:00:00";let[i,o,a,l,u,c,d,g]=n.map($=>parseInt($,10)||0),y=[c,d,g].map($=>String($).padStart(2,"0")).join(":"),b=[];return o&&b.push(`${o}y`),a&&b.push(`${a}m`),l&&b.push(`${l}w`),u&&b.push(`${u}d`),b.length>0?`${b.join(" ")} ${y}`:y}var V={isNull:ye,isNotNull:Gt,isArray:ge,toArray:Xe,isDate:K,toDate:me,isDuration:Ce,toDuration:ir,isObject:Qe,isNumber:Ne,toNumber:Ze,isString:ve,toString:Qt,isUrl:et,toUrl:rr,array:Jt,date:qt,duration:sr,null:Kt,number:Xt,object:Zt,string:er,url:nr,getDataType:si,getType:si,getJsonSchema:aa},he=V;function si(e){if(ye(e))return"undefined";if(e===!0||e===!1)return"Boolean";if(ge(e))return"Array";if(K(e))return"DateTime";if(!isNaN(e))return"Number";if(typeof e=="string"){if(tr(e))return"URL";if(zt(e))return"DateTime";if(Ce(e))return"Duration";if(Yt(e)!==void 0)return"Number";if(e.includes("[")||e.includes("{")||e.includes('"'))try{let r=JSON.parse(e);return"JSON"}catch{}return"Text"}return e?.["@id"]||e?.["@type"]?"Thing":"undefined"}function aa(e){function r(n,i=0){let o={};if(i==0&&(o.$schema="https://json-schema.org/draft/2020-12/schema",o.title=n?.["@type"]||""),V.isString(n))return o.type="string",o;if(V.isObject(n)){o.type="object",o.properties={};for(let a of Object.keys(n))o.properties[a]=r(n[a],i+1);return o}if(V.isNumber(n))return o.type="number",o;if(V.isArray(n))return o.type="array",o.items=r(n?.[0],i+1),o}return r(e,0)}var op=globalThis.crypto.randomUUID;var tt={website:"domain",webpage:"url",offer:"url",brand:"domain"};function be(e,r){if(!e||!e?.["@type"])return;let n=li(e);n=n.filter(i=>typeof i=="string"),n=n.map(i=>i.toLowerCase());for(let i of n){let o=tt?.[i];if(o=="url")return ui(i,rt(e));if(o=="domain")return di(i,rt(e))}return ar(r)}function oi(e,r){if(!e||!e?.["@type"])return;let n=li(e);for(let i of n){let o=tt?.[i];if(o=="url")return ui(i,rt(e));if(o=="domain")return di(i,rt(e))}}function ai(e,r){let n=e?.["@id"];return n?la(e)?getStandardizedRecordId(e,r)==n:or(e?.["@id"],r)==n:!1}function la(e){let r=e?.["@type"];r=Array.isArray(r)&&typeof r!="string"?r:[r];for(let n of r)if(tt?.[n])return tt?.[n]}function li(e){let r=e?.["@type"];return r=Array.isArray(r)&&typeof r!="string"?r:[r],r=r.filter(n=>n),r}function rt(e){let r=e?.url;return r=Array.isArray(r)&&typeof r!="string"?r:[r],r=r.filter(n=>n),r}function ar(e){return e=or(e),e?(e.endsWith("/")||(e=e+"/"),or(e)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function ui(e,r){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(r)&&typeof r!="string"||(r=[r]),r=r.map(o=>V.url.clean(o)),r=r.filter(o=>o);let n=r?.[0];return n?n+"#"+e:"_:"+globalThis.crypto.randomUUID()}function di(e,r){if(!e||typeof e!="string")return;e=e.toLowerCase(),Array.isArray(r)&&typeof r!="string"||(r=[r]),r=r.map(o=>ua(o)),r=r.map(o=>"https://"+o),r=r.filter(o=>o);let n=r?.[0];return n?(n.endsWith("/")||(n=n+"/"),n+"#"+e):"_:"+globalThis.crypto.randomUUID()}function ua(e){if(!e||typeof e!="string")return null;try{let r=e.trim();return!/^https?:\/\//i.test(r)&&!r.startsWith("//")&&(r="https://"+r),new URL(r).hostname.toLowerCase()}catch{return null}}function or(e,r="https"){if(!e||typeof e!="string")return null;let n=e.trim();n.startsWith("//")?n=`${r}:${n}`:/^https?:\/\//i.test(n)||(n=`${r}://${n}`);try{let i=new URL(n);i.hostname=i.hostname.toLowerCase();let o=i.toString();return o.endsWith("/")&&!e.endsWith("/")&&(o=o.slice(0,-1)),o}catch{return null}}function da(e,r){e=ci(e);let n=ca(e,r);return fi(e,n)}function ca(e,r){function n(o,a){if(a=a||"https://www.test.com/",s.isArray(o)){let u=[];for(let c of o)u=u.concat(n(c));return u}if(s.isObject(o)==!1)return[];let l=[{replacee:s.record_id(o),replacer:be(o,a)}];for(let u of Object.keys(o))l=l.concat(n(o[u],a));return l}let i=n(e,r);return i=i.filter(o=>o),i}function ci(e){if(Array.isArray(e))return e.map(r=>s.assignId(r));if(s.isObject(e)==!1)return e;e["@id"]=e?.["@id"]||"_:"+s.randomUUID();for(let r of Object.keys(e))e[r]=s.assignId(e[r]);return e}function fa(e){return ar(e)}function pa(e,r=[]){if(s.isArray(e))return e.map(n=>s.assignId(n,r));if(s.isObject(e)==!1||r.includes(e))return e;r.push(e);for(let n of Object.keys(e))e["@id"]=e?.["@id"]||"_:"+s.randomUUID(),e[n]=s.assignId(e[n],r);return e}function fi(e,r){function n(i,o){if(Array.isArray(i))return i.map(u=>s.replaceIds(u,o));if(!i?.["@id"])return i;let a=i?.["@id"],l=o.get(a);l&&(i["@id"]=l);for(let u of Object.keys(i))i[u]=s.replaceIds(i?.[u],o);return i}if(!(r instanceof Map)){let i=new Map;r=(Array.isArray(r),r),r.forEach(o=>i.set(o.replacee,o.replacer)),r=i}return n(e,r)}var dr={};m(dr,{DB:()=>ur,_storeToMap:()=>Re,_storeToOriginal:()=>ma,getRecord:()=>xe,getRecords:()=>je,patchRecord:()=>gi,postRecord:()=>pi});var ur=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let r of this._store.values())yield r}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(r,n=!0){return r=r?.["@id"]||r,xe(this._store,r,n)}search(r={},n=!0){return je(this._store,r,n)}set(r){let n=s.flatten(r),i=n.map(o=>xe(this._store,s.record_id(o),!1));for(let o of n)this._store=pi(this._store,o);return this._broadcastIfChanged(i,n),r}post(r){return this.set(r)}patch(r,n=!0){let i=s.flatten(r),o=i.map(a=>xe(this._store,s.record_id(a),!1));for(let a of i)this._store=gi(this._store,a,n);return this._broadcastIfChanged(o,i),r}delete(r){let n=[this.get(r)];this._store=s.deleteRecord(this._store,r),this._broadcastIfChanged(n,[{"@id":r}])}getValue(r,n,i,o){let a=this.get(r);return s.getValue(a,n,i,o)}getValues(r,n,i){let o=this.get(r);return s.getValues(o,n,i)}setValue(r,n,i){let o=this.get(r);return o||(o={"@id":r}),o=s.clone(o),o=s.setValue(o,n,i),this.set(o)}setValues(r,n,i){let o=this.get(r);return o||(o={"@id":r}),o=s.clone(o),o=s.setValue(o,n,i),this.set(o)}addValue(r,n,i){let o=this.get(r);return o||(o={"@id":r}),o=s.clone(o),o=s.addValue(o,n,i),this.set(o)}addValues(r,n,i){let o=this.get(r);return o||(o={"@id":r}),o=s.clone(o),o=s.addValues(o,n,i),this.set(o)}length(){return this._store.size}get records(){return je(this._store)}getRecords(r=!1){return je(this._store,void 0,!1)}get record_ids(){return ga(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(r,n,i){r=this.get(r),n=this.get(n),r=s.list.insert(r,n,i),this.set(r)}_list_upsert(r,n,i){r=this.get(r),n=this.get(n),r=s.list.upsert(r,n,i),this.set(r)}_list_insertBefore(r,n,i){r=this.get(r),n=this.get(n),i=this.get(i),r=s.list.insertBefore(r,n,i),this.set(r)}_list_insertAfter(r,n,i){r=this.get(r),n=this.get(n),r=s.list.insertAfter(r,n,i),this.set(r)}_list_moveBefore(r,n,i){r=this.get(r),n=this.get(n),i=this.get(i),r=s.list.moveBefore(r,n,i),this.set(r)}_list_moveAfter(r,n,i){r=this.get(r),n=this.get(n),r=s.list.moveAfter(r,n,i),this.set(r)}_list_moveUp(r,n){r=this.get(r),r=s.list.moveUp(r,n),this.set(r)}_list_moveDown(r,n){r=this.get(r),r=s.list.moveDown(r,n),this.set(r)}_list_remove(r,n){r=this.get(r),r=s.list.remove(r,n),this.set(r)}_list_delete(r,n){r=this.get(r),r=s.list.remove(r,n),this.set(r)}_list_replace(r,n,i){r=this.get(r),n=this.get(n),r=s.list.replace(r,n,i),this.set(r)}_list_length(r){return r=this.get(r),this.list.length(r)}_list_getItems(r){return r=this.get(r),this.list.getItems(r)}_list_getListItems(r){return r=this.get(r),this.list.getItemListElement(r)}_list_getItemListElement(r){return r=this.get(r),this.list.getItemListElement(r)}getRecord(r,n=!0,i=void 0){let o=this.get(r);return!o||s.isRef(o)?i:o}updateRefs(r){function n(i,o={}){if(s.isArray(i))return i.map(a=>n(i,o));if(s.isObject(i)){if(s.isRef(i)){if(o?.[s.record_id(i)])return o[s.record_id(i)];i=xe(i,!0,i),o[s.record_id(i)]=i;for(let a of Object.keys(i))i[a]=n(i,o)}return i}return i}return n(r,{})}execute(r){return r=this.updateRefs(r),r=s.execute(r),this.set(s.getResults(r)),r}subscribe(r,n){(!r||r=="*"||r=="all")&&(r="all");let i=this._subscriptions.get(r)||[];i.includes(n)||(i.push(n),this._subscriptions.set(r,i))}unsubscribe(r,n){(!r||r=="*"||r=="all")&&(r="all");let i=this._subscriptions.get(r)||[];i=i.filter(o=>o!=n),this._subscriptions.set(r,i)}async _broadcastIfChanged(r,n){let i=[];for(let o of n){let a=r.find(l=>s.record_id(l)==s.record_id(o));s.isEqual(a,o)||i.push(s.record_id(o))}this.broadcast(i)}broadcast(r){r=s.toArray(r),r=[...new Set(r)];for(let n of r){let i=this.get(n),o=this._subscriptions.get(n)||[];o=o.concat(this._subscriptions.get("all")||[]),o=[...new Set(o)];for(let a of o)this._broadcastItem(a,i)}}async _broadcastItem(r,n){try{return r(n)}catch{}}static randomUUID(){return s.randomUUID()}static clean(r,n){return s.clean(r,n)}static flatten(r){return s.flatten(r)}static getValue(r,n,i,o){return s.getValue(r,n,i,o)}static getValues(r,n,i){return s.getValues(r,n,i)}static setValue(r,n,i,o){return s.setValue(r,n,i,o)}static setValues(r,n,i){return s.setValues(r,n,i)}static addValue(r,n,i){return s.addValue(r,n,i)}static addValues(r,n,i){return s.addValues(r,n,i)}static strip(r){return s.strip(r)}static get dot(){return pe}static ref(r){return s.ref(r)}static simplify(r){return s.simplify(r)}static isJsonld(r){return s.isJsonld(r)}static isValid(r){return s.isValid(r)}static isArray(r){return s.isArray(r)}static setAdditionalProperty(r,n,i,o){return s.setAdditionalProperty(r,n,i,o)}static getAdditionalProperty(r,n){return s.getAdditionalProperty(r,n)}};function pi(e,r){if(!r)return;r=s.clone(r),r=s.assignId(r),r=s.flatten(r);let n=Re(e);for(let i of r)n.get(i?.["@id"])&&s.isRef(i)||n.set(i?.["@id"],i);return e=s._storeToOriginal(n),e}function gi(e,r,n=!0){r=s.clone(r),r=s.assignId(r),r=s.flatten(r);let i=Re(e);for(let o of r){let a=i.get(s.record_id(o));o=s.patch(a,o),i.set(s.record_id(o),o)}return e=s._storeToOriginal(i),e}function xe(e,r,n=!0){if(s.isArray(r))return r.map(l=>xe(e,l,n));let i=s._utilGetId(r),o=Re(e),a=o.get(i);return n==!0&&(a=s.expand(o,a)),a=s.clone(a),a}function je(e,r,n=!0){let i=Re(e),o=Array.from(i.values());return r&&(o=o.filter(a=>s.evaluate(a,r))),n==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function ga(e){return je(e).map(i=>s.record_id(i))}function Re(e){if(e instanceof Map||Object.prototype.toString.call(e)==="[object Map]")return e;e=s.toArray(e),e=e.filter(n=>s.isRef(n)===!1),e=e||[],e=Array.isArray(e)?e:[e];let r=new Map;for(let n of e){let i=s.record_id(n);i&&(r.has(i)&&(n=s.merge(r.get(i),n,!0)),r.set(i,n))}return e=r,e}function ma(e){return e=Array.from(e.values()),e}var fr={};m(fr,{JSON_parse:()=>ba,JSON_stringify:()=>xi,clean:()=>hi,clone:()=>Vi,contractAtValue:()=>it,expandAtValue:()=>xa,getRecordUrl:()=>Aa,isJsonld:()=>mi,isValid:()=>ha,merge:()=>Va,patch:()=>wa,removeCircularRefs:()=>yi,sortedReplacer:()=>bi,stringify:()=>ya});function ha(e){return mi(e)}function mi(e){return e?.["@type"]||e?.["@id"]}function hi(e,r){if(Array.isArray(e)&&e.length>1)return e.map(o=>hi(o,r));if(!e?.["@type"]||!e?.["@id"])return e;try{e=Vi(e)}catch{}e=setTempID(e);let n=s.flatten(e);n=n.map(o=>JSON.parse(JSON.stringify(o,Object.keys(o).sort(),4)));let i=[];for(let o of n){if(o["@id"]=Array.isArray(o?.["@id"])?o?.["@id"][0]:o?.["@id"],ai(o)==!0)continue;let a=oi(o,r);if(a&&o?.["@id"]!=a){let l={replacer:a,replacee:o?.["@id"]};i.push(l)}if(!a&&o?.["@id"].startsWith("_:")){let l={replacer:s.getGenericRecordID(r),replacee:o?.["@id"]};i.push(l)}}return e=s.replaceIds(e,i),e}function yi(e){return cr(e,new Set)}function cr(e,r){if(r=new Set([...r]),e===null||typeof e!="object")return e;if(s.isArray(e))return e.map(i=>cr(i,r));if(!s.isObject(e))return e;let n=s.record_id(e);if(r.has(n))return s.ref(e);r.add(n);for(let i of Object.keys(e))e[i]=cr(e[i],r);return e}function bi(e,r){return r instanceof Object&&!(r instanceof Array)?Object.keys(r).sort().reduce((n,i)=>(n[i]=r[i],n),{}):r}function xi(e){return e=yi(e),JSON.stringify(e,bi,4)}function ya(e){return xi(e)}function ba(e){return JSON.parse(e)}function xa(e){function r(n,i=!1){let o=s.getAtValue(n);if(o&&o.length>0)return s.setAtValue(n,r(o,!0));if(s.isArray(n))return n.map(a=>r(a,i));if(s.isJsonld(n)){for(let a of Object.keys(n?.record||n))n=s.setValues(n,a,r(s.getValues(n,a),!1));return n}return i===!1?{"@value":n}:n}return r(e,!1)}function it(e){let r=s.getAtValue(e);if(r&&r.length>0)return it(s.getAtValue(e));if(s.isArray(e))return e.map(n=>it(n));if(s.isJsonld(e)){for(let n of Object.keys(e?.record||e))s.setValues(e,n,it(s.getValues(e,n)));return e}return e}function Vi(e){try{return e=structuredClone(e),e}catch{}try{return e=JSON.parse(JSON.stringify(e)),e}catch{}return e}function Va(e,r,n=!0){e=s.isArray(e)&&e.length==1?e[0]:e,r=s.isArray(r)&&e.length==2?r[0]:r,e=e??{},r=r??{};let i=[];i=i.concat(Object.keys(e)),i=i.concat(Object.keys(r)),i=[...new Set(i)];let o={"@id":e?.["@id"]||r?.["@id"]};for(let a of i){if(a=="@id")continue;let l=s.toArray(e?.[a]||void 0),u=s.toArray(r?.[a]||void 0),c=l.concat(u);n==!0&&(c=s.dedupe(c)),o[a]=c}return o}function wa(e,r){e=s.isArray(e)&&e.length==1?e[0]:e,r=s.isArray(r)&&e.length==2?r[0]:r,e=e??{},r=r??{};for(let n of s.keys(r)){let i=s.getValues(r,n);e=s.setValues(e,n,i)}return e}function Aa(e,r){r=r?.baseUrl??r;try{return V.url.getUrl(r,encodeURIComponent(s.record_id(e)))}catch{return console.log("Err getRecordUrl"),""}}var yr={};m(yr,{ID:()=>Ma,Id:()=>Fa,Type:()=>Na,actionStatus:()=>rl,addValue:()=>$i,addValues:()=>ki,contentUrl:()=>sl,description:()=>ll,email:()=>cl,getActionStatus:()=>nl,getAdditionalProperty:()=>Za,getAtValue:()=>el,getContentUrl:()=>ol,getDescription:()=>ul,getEmail:()=>fl,getID:()=>Ea,getId:()=>Wa,getImageName:()=>yu,getImageUrl:()=>hu,getItem:()=>ml,getItemListElement:()=>wl,getItems:()=>bl,getName:()=>kl,getNumberOfItems:()=>Il,getObject:()=>Pl,getObjects:()=>jl,getPosition:()=>Ol,getPotentialAction:()=>Hl,getPotentialActions:()=>Ll,getRecordID:()=>Ua,getRecordId:()=>Da,getRecordType:()=>Ia,getRecord_id:()=>Ca,getRecord_type:()=>ka,getResult:()=>Jl,getResults:()=>Gl,getTargetCollection:()=>Xl,getTargetCollections:()=>eu,getText:()=>nu,getType:()=>Pa,getUrl:()=>ou,getValue:()=>T,getValues:()=>hr,hasValue:()=>Si,insertValue:()=>Xa,isActive:()=>uu,isCompleted:()=>du,isFailed:()=>cu,isPotential:()=>lu,isRef:()=>qa,item:()=>gl,itemListElement:()=>Vl,items:()=>yl,keys:()=>Ka,name:()=>$l,numberOfItems:()=>_l,object:()=>Nl,objects:()=>Cl,position:()=>Dl,potentialAction:()=>Ul,potentialActions:()=>El,properties:()=>mr,recordID:()=>Ba,recordId:()=>Ra,recordType:()=>_a,record_id:()=>gr,record_type:()=>$a,ref:()=>Ga,result:()=>Wl,results:()=>ql,setActionStatus:()=>il,setActive:()=>pu,setAdditionalProperty:()=>Qa,setAtValue:()=>tl,setCompleted:()=>gu,setContentUrl:()=>al,setDescription:()=>dl,setEmail:()=>pl,setFailed:()=>mu,setID:()=>La,setId:()=>Ja,setIfNull:()=>Ya,setItem:()=>hl,setItemListElement:()=>Al,setItems:()=>xl,setName:()=>Sl,setNumberOfItems:()=>Tl,setObject:()=>vl,setObjects:()=>Rl,setPosition:()=>Bl,setPotential:()=>fu,setPotentialAction:()=>Ml,setPotentialActions:()=>Fl,setRecordID:()=>Ha,setRecordId:()=>Oa,setRecordType:()=>Ta,setRecord_id:()=>ja,setRecord_type:()=>Sa,setResult:()=>zl,setResults:()=>Kl,setTargetCollection:()=>Zl,setTargetCollections:()=>tu,setText:()=>iu,setType:()=>va,setUrl:()=>au,setValue:()=>D,setValueIfNull:()=>Ai,setValues:()=>De,targetCollection:()=>Yl,targetCollections:()=>Ql,text:()=>ru,toRecord_id:()=>wi,toRecord_ids:()=>za,url:()=>su});var Ve="en-CA";function $a(e){return T(e,"@type")}function ka(e){return T(e,"@type")}function Sa(e,r){return D(e,"@type",r)}function _a(e){return T(e,"@type")}function Ia(e){return T(e,"@type")}function Ta(e,r){return D(e,"@type",r)}function Na(e){return T(e,"@type")}function Pa(e){return T(e,"@type")}function va(e,r){return D(e,"@type",r)}function gr(e){return T(e,"@id")}function Ca(e){return T(e,"@id")}function ja(e,r){return D(e,"@id",r)}function Ra(e){return T(e,"@id")}function Da(e){return T(e,"@id")}function Oa(e,r){return D(e,"@id",r)}function Ba(e){return T(e,"@id")}function Ua(e){return T(e,"@id")}function Ha(e,r){return D(e,"@id",r)}function Ma(e){return T(e,"@id")}function Ea(e){return T(e,"@id")}function La(e,r){return D(e,"@id",r)}function Fa(e){return T(e,"@id")}function Wa(e){return T(e,"@id")}function Ja(e,r){return D(e,"@id",r)}function wi(e){return typeof e=="string"?e:gr(e)}function za(e){if(s.isArray(e)){let r=[];return e.foreach(n=>{r=r.concat(wi(n))}),r}return typeof e=="string"?[e]:[gr(e)]}function qa(e){return!s.isObject(e)||!e?.["@id"]?!1:!Object.keys(e).some(r=>r!="@id")}function Ga(e){if(e?._isThingClass==!0)return record.ref;if(!e)return;let r=s._utilGetId(e);if(r)return{"@id":r}}function Ka(e){return mr(e)}function mr(e){if(!e)return[];if(s.isArray(e)){let n=[];for(let i of e)n=n.concat(mr(i));return[...new Set(n)]}return Object.keys(e?.record||e)}function T(e,r,n,i,o){let a=hr(e,r,i,o);return n=Number(n),isNaN(n)&&(n=0),a?.[n]??i}function D(e,r,n,i,o){if(i!==void 0){let a=s.getValues(e,r);for(;a.length-1<i;)a.push(null);a[i]=n,n=a}return De(e,r,n,o)}function Ai(e,r,n,i,o){let a=T(e,r,i);return s.isNull(a)==!1?e:D(e,r,n,i,o)}function Ya(e,r,n,i,o){return Ai(e,r,n,i,o)}function $i(e,r,n){return ki(e,r,n)}function ki(e,r,n){return n=s.getValues(e,r).concat(n),De(e,r,n)}function hr(e,r,n,i){if(e===void 0)return[];if(r==null||r=="")return[];e=e?.record||e;let o=r.split("."),a=e;for(let u=0;u<o.length;u++){let[c,d]=pr(o[u]);c&&(a=a?.[c],a=s.toArray(a)),a=a.filter(g=>g?.["@language"]==i||g?.["@language"]==Ve||g?.["@lannguage"]===void 0),a=a.map(g=>g?.["@value"]??g),a=s.toArray(a),a=a.map(g=>g?.[i]??g?.[Ve]??g),a=s.toArray(a),u<o.length-1&&(a=a?.[d])}let l=s.toArray(a);return l.length==0&&n!==void 0?n:l}function De(e,r,n,i){e=e?.record||e;let o=r.split("."),a=e||{};for(let c=0;c<o.length-1;c++){let[d,g]=pr(o[c]);a[d]=a?.[d]||[];let y;for(a?.[d]?.[i]?(a[d][i]=s.toArray(a?.[d]?.[i]),y=a[d][i]):a?.[d]?.[Ve]?(a[d][Ve]=s.toArray(a?.[d]?.[Ve]),y=a[d][Ve]):(a[d]=s.toArray(a?.[d])||[],y=a[d]);y.length-1<g;)y.push({"@type":"Thing"});a=y?.[g]}let[l,u]=pr(o[o.length-1]);return a[l]=s.toArray(n),e}function Xa(e,r,n){return Si(e,r,n)==!0?e:$i(e,r,n)}function Si(e,r,n){let i=hr(e,r);if(i.length==0)return!1;for(let o of i)if(s.isSame(o,n))return!0;return!1}function pr(e){if(e===void 0)return 0;let r=e.split("[")?.[0],n=(e.split("[")?.[1]||"").split("]")?.[0];return n=Number(n),n=isNaN(n)?0:n,[r,n]}function Za(e,r){let i=s.getValues(e,"additionalProperty").find(a=>s.getValue(a,"propertyID")==r);return s.getValue(i,"value")}function Qa(e,r,n,i){let o=s.getValues(e,"additionalProperty");o=o.filter(l=>s.getValue(l,"propertyID")!=r);let a={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:r,value:n};return e=s.addValue(e,"additionalProperty",a),e}function el(e){return s.getValues(e,"@value")}function tl(e,r){return s.setValues(e,"@value",r)}function rl(e){return s.getValue(e,"actionStatus")}function nl(e){return s.getValue(e,"actionStatus")}function il(e,r){return s.setValue(e,"actionStatus",r)}function sl(e){return s.getValue(e,"contentUrl")}function ol(e){return s.getValue(e,"contentUrl")}function al(e,r){return s.setValue(e,"contentUrl",r)}function ll(e){return s.getValue(e,"description")}function ul(e){return s.getValue(e,"description")}function dl(e,r){return s.setValue(e,"description",r)}function cl(e){return s.getValue(e,"email")}function fl(e){return s.getValue(e,"email")}function pl(e,r){return s.setValue(e,"email",r)}function gl(e){return s.getValue(e,"item")}function ml(e){return s.getValue(e,"item")}function hl(e,r){return s.setValue(e,"item",r)}function yl(e){return s.list.getItems(e)}function bl(e){return s.list.getItems(e)}function xl(e,r){return s.list.setItems(e,r)}function Vl(e){return s.list.getItemListElement(e)}function wl(e){return s.list.getItemListElement(e)}function Al(e,r){return s.list.setItemListElement(e,r)}function $l(e){return s.getValue(e,"name")}function kl(e){return s.getValue(e,"name")}function Sl(e,r){return s.setValue(e,"name",r)}function _l(e){return s.getValue(e,"numberOfItems")}function Il(e){return s.getValue(e,"numberOfItems")}function Tl(e,r){return s.setValue(e,"numberOfItems",r)}function Nl(e){return s.getValue(e,"object")}function Pl(e){return s.getValue(e,"object")}function vl(e,r){return D(e,"object",r)}function Cl(e){return s.getValues(e,"object")}function jl(e){return s.getValues(e,"object")}function Rl(e,r){return De(e,"object",r)}function Dl(e){return s.list.getPosition(e)}function Ol(e){return s.list.getPosition(e)}function Bl(e,r){return s.list.setPosition(e,r)}function Ul(e){return s.getValues(e,"potentialAction")}function Hl(e){return s.getValues(e,"potentialAction")}function Ml(e,r){return s.setValues(e,"potentialAction",r)}function El(e){return s.getValues(e,"potentialAction")}function Ll(e){return s.getValues(e,"potentialAction")}function Fl(e,r){return s.setValues(e,"potentialAction",r)}function Wl(e){return s.getValue(e,"result")}function Jl(e){return s.getValue(e,"result")}function zl(e,r){return D(e,"result",r)}function ql(e){return s.getValues(e,"result")}function Gl(e){return s.getValues(e,"result")}function Kl(e,r){return De(e,"result",r)}function Yl(e){return s.getValue(e,"targetCollection")}function Xl(e){return s.getValue(e,"targetCollection")}function Zl(e,r){return s.setValue(e,"targetCollection",r)}function Ql(e){return s.getValues(e,"targetCollection")}function eu(e){return s.getValues(e,"targetCollection")}function tu(e,r){return s.setValues(e,"targetCollection",r)}function ru(e){return s.getValue(e,"text")}function nu(e){return s.getValue(e,"text")}function iu(e,r){return s.setValue(e,"text",r)}function su(e){return s.getValue(e,"url")}function ou(e){return s.getValue(e,"url")}function au(e,r){return s.setValue(e,"url",r)}function lu(e){return s.getValue(e,"actionStatus")=="PotentialActionStatus"}function uu(e){return s.getValue(e,"actionStatus")=="ActiveActionStatus"}function du(e){return s.getValue(e,"actionStatus")=="CompletedActionStatus"}function cu(e){return s.getValue(e,"actionStatus")=="FailedActionStatus"}function fu(e){return e=s.setValue(e,"actionStatus","PotentialActionStatus"),e=s.setValue(e,"startTime",void 0),e=s.setValue(e,"endTime",void 0),e=s.setValue(e,"error",void 0),e=s.setValue(e,"result",void 0),e}function pu(e){return e=s.setValue(e,"actionStatus","ActiveActionStatus"),e=s.setValue(e,"startTime",s.getValue(e,"startTime")??new Date),e=s.setValue(e,"endTime",void 0),e=s.setValue(e,"error",void 0),e=s.setValue(e,"result",void 0),e}function gu(e,r){return e=s.setValue(e,"actionStatus","CompletedActionStatus"),e=s.setValue(e,"startTime",s.getValue(e,"startTime")??new Date),e=s.setValue(e,"endTime",s.getValue(e,"endTime")??new Date),e=s.setValue(e,"error",void 0),e=s.setValue(e,"result",r??s.getValues(e,"result")),e}function mu(e,r){return e=s.setValue(e,"actionStatus","FailedActionStatus"),e=s.setValue(e,"startTime",s.getValue(e,"startTime")??new Date),e=s.setValue(e,"endTime",s.getValue(e,"endTime")??new Date),e=s.setValue(e,"error",String(r)),e=s.setValue(e,"result",void 0),e}function hu(e){if(s.record_type(e)=="ImageObject")return s.getValue(e,"contentUrl");let r=s.getValue(e,"image.contentUrl");return r=r??s.getValue(e,"image.url"),r=r??s.getValue(e,"image"),r=typeof r=="string"?r:"",r}function yu(e){let r=s.getValue(e,"image.name");return r=r??s.getValue(e,"image.name"),r=r??s.record_id(e),r=typeof r=="string"?r:"",r}var xr={};m(xr,{_utilGetId:()=>Su,getDataType:()=>xu,isArray:()=>br,isBoolean:()=>_i,isDate:()=>oe,isJsonld:()=>vi,isNotDate:()=>$u,isNotNull:()=>Vu,isNotNumber:()=>wu,isNotString:()=>Au,isNull:()=>C,isNumber:()=>st,isObject:()=>Pi,isString:()=>Oe,randomUUID:()=>bu,toArray:()=>Ci,toDate:()=>Ni,toNumber:()=>Ii,toSingle:()=>ku,toString:()=>Ti});function bu(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{let n=e()%16;return(r==="x"?n:n&3|8).toString(16)})}function xu(e){if(C(e))return"Undefined";if(br(e))return"Array";if(vi(e))return"Jsonld";let r=Ni(e);if(oe(r))return"Date";let n=Ii(e);return st(n)?"Number":Pi(e)?"Object":Oe(e)?'String"':_i(e)?"Boolean":"Undefined"}function C(e,r=void 0){return e==null||typeof e=="string"&&e.length==0?!0:r==null?!1:s.getValues(e,r).length==0}function Vu(e,r=void 0){return!C(e,r)}function _i(e){return e===!0||e===!1}function st(e){return C(e)||e===""?!1:(e=Number(e),!isNaN(e))}function wu(e){return!st(e)}function Ii(e){if(!C(e)&&(e=Number(e),!isNaN(e)))return e}function Oe(e){return C(e)?!1:typeof e=="string"}function Au(e){return!Oe(e)}function Ti(e){if(C(e))return"";if(Oe(e))return e;if(s.isValid(e))return s.exportToString(e);if(oe(e))return e.toLocaleString();if(s.isArray(e)){let r=`Array of ${e.length} items.
--------------------
`,n=0,i=e.length-1;i=i>8?8:i;for(let o=0;o<i;o++)r+=Ti(e[o])+`
`;return r}return String(e)}function oe(e){return C(e)||e===""?!1:e instanceof Date&&!Number.isNaN(e.getTime())}function $u(e){return!oe(e)}function Ni(e){if(C(e))return;if(oe(e)==!0)return e;if(!isNaN(Number(e)))return;let r=Date.parse(e);if(!isNaN(r))return e=new Date(e),e=oe(e)?e:void 0,e}function Pi(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function vi(e){return C(e)?!1:!!(e?.["@id"]||e?.["@type"])}function br(e){return C(e)?!1:Array.isArray(e)&&typeof e!="string"}function Ci(e){return C(e)?[]:(e=br(e)?e:[e],e=e.filter(r=>r!=null),e)}function ku(e){return e=Ci(e),e?.[0]??void 0}function Su(e){let r=e;if(r!==void 0&&r!==null)return s.isArray(r)&&r.length==1&&(r=r[0]),s.isString(r)?r:(r=s.record_id(r),r??void 0)}var Vr={};m(Vr,{concat:()=>_u,dedupe:()=>ji,deleteItem:()=>Nu,diff:()=>Tu,filter:()=>ju,find:()=>Cu,includes:()=>ot,insertItem:()=>Pu,intersection:()=>Iu,length:()=>vu,search:()=>Di,sort:()=>we,upsertItem:()=>Ri});function ji(e,r=!0){if(e=s.toArray(e),e.length<2)return e;let n=[];for(let i of e)ot(n,i)==!1&&(r==!0&&s.isValid(i)&&Di(e,i).forEach(a=>i=s.merge(a,i)),n.push(i));return n=we(n),n}function ot(e,r){e=s.toArray(e);for(let n of e)if(s.isSame(n,r)==!0)return!0;return!1}function _u(e,r,n=!0){e=s.toArray(e),r=s.toArray(r);let i=e.concat(r);return i=i.filter(o=>o!=null),n==!0&&(i=ji(i)),i=we(i),i}function we(e,r=void 0,n=void 0){return n=n??1,typeof n=="string"&&(n=n.toLowerCase()),n=n=="asc"?1:n,n=n=="desc"?-1:n,e=s.toArray(e),e.length<2||(r==null?n==1?e.sort((i,o)=>s.lt(i,o)==!0?-1:1):e.sort((i,o)=>s.gt(i,o)==!0?-1:1):n==1?e.sort((i,o)=>s.lt(s.getValue(i,r),s.getValue(o,r))==!0?-1:1):e.sort((i,o)=>s.gt(s.getValue(i,r),s.getValue(o,r))==!0?-1:1)),e}function Iu(e,r){e=s.toArray(e),r=s.toArray(r);let n=[];for(let i of e)ot(r,i)==!0&&n.push(i);return n=we(n),n}function Tu(e,r){e=s.toArray(e),r=s.toArray(r);let n=[];for(let i of e)ot(r,i)==!1&&n.push(i);return n=we(n),n}function Nu(e,r){e=s.toArray(e);let n=[];for(let i of e)s.isSame(i,r)==!1&&n.push(i);return n}function Ri(e,r){e=s.toArray(e);let n=[];for(let i of e)s.isSame(i,r)==!0?n.push(r):n.push(i);return n}function Pu(e,r){return Ri(e,r)}function vu(e){return e=s.toArray(e),e.length}function Cu(e,r){e=s.toArray(e);for(let n of e)if(s.isSame(n,r))return n}function Di(e,r){e=s.toArray(e);let n=[];for(let i of e)s.isSame(i,r)&&n.push(i);return n}function ju(e,r,n,i,o,a){return e=s.toArray(e),e.length==0?itemList:(s.isNotNull(r)&&(e=e.filter(l=>s.evaluate(l,r))),e=we(e,n,i),e.length==0||(a=s.toNumber(a),s.isNumber(a)&&(e=e.slice(a)),o=s.toNumber(o),s.isNumber(o)&&e.length>=o&&(e=slice(0,o))),e)}var wr={};m(wr,{exportToString:()=>Oi});function Oi(e){return Array.isArray(e)?Ru(e):s.record_type(e)=="ListItem"?Du(e):s.record_type(e)=="ItemList"?Ou(e):s.record_type(e)=="Action"?Bu(e):s.getValue(e,"name")||s.getValue(e,"@id")}function Ru(e){let r=`Array (${e.length})
--------------------------
`;return e.forEach(n=>r+=Oi(n)+`
`),r}function Du(e){return`${s.getValue(e,"position")} - ${s.getValue(e,"item.name")||s.getValue(e,"item.@id")}`}function Ou(e){let r=s.getValues(e,"itemListElement"),n=`ItemList${s.getValue(e,"name")||s.getValue(e,"@id")} (${r.length})
--------------------------
`;return r.forEach(i=>n+=toString(i)+`
`),n}function Bu(e){return`${s.getValue(e,"name")||s.getValue(e,"@id")} - ${s.getValue(e,"actionStatus")}`}var $r={};m($r,{DatabaseHelper:()=>Ar,testDB:()=>Uu});var Ar=class{constructor(r){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(r)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(r){this.#t(r)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(r){return this.#s(r)}get result(){return this.#e()}setCompleted(r){this.#n(r),this.#i(r)}#e(){let n=s.toArray(this.parentRecord).map(i=>this.tempDB.get(i?.["@id"]||i));return n=s.simplify(n),n=s.toArray(n),s.isArray(this.parentRecord)?n:n?.[0]||void 0}#t(r){let n=s.toArray(r);n=n.map(a=>typeof a=="string"?{"@id":a}:a),s.isArray(r)==!1&&(n=n?.[0]);let i=n;this.parentRecord=i,this.#r(i);let o=s.getChildren(i);this.#r(o)}#s(r){let n=s.toArray(r);n=n.map(o=>o?.record||o),n=n.filter(o=>o),this.tempDB.set(n),this.#n(n),this.#i(n);let i=s.getChildren(n);this.#r(i)}#n(r){let n=s.toArray(r);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let o=s.toArray(this._retrieved).concat(n);o=[...new Set(o)],this._retrieved=s.toArray(o)}#r(r){let n=s.toArray(r);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let i=s.toArray(this._retrieved);n=n.filter(a=>i.includes(a)==!1),n=s.toArray(this._toGet).concat(n),n=[...new Set(n)],this._toGet=s.toArray(n)}#i(r){let n=s.toArray(r);n=n.map(o=>o?.record||o),n=n.map(o=>o?.["@id"]||o),n=[...new Set(n)],n=n.filter(o=>o);let i=s.toArray(this._toGet);this._toGet=i.filter(o=>n.includes(o)==!1)}};function Uu(){}var Cr={};m(Cr,{add:()=>Fu,append:()=>Be,clean:()=>kr,decrementPositions:()=>Pr,duplicate:()=>Yu,ensurePositions:()=>$e,ensurePreviousNextItem:()=>ut,filter:()=>Xu,find:()=>W,findByItem:()=>Wi,findByListItem:()=>Fi,findByPosition:()=>Li,getILE:()=>Lu,getItem:()=>Me,getItemListElement:()=>I,getItems:()=>Ji,getMaxPosition:()=>He,getMinPosition:()=>vr,getPosition:()=>N,gt:()=>Ei,incrementPositions:()=>Nr,insert:()=>j,insertAfter:()=>Ir,insertBefore:()=>_r,isItemList:()=>v,isListItem:()=>at,length:()=>Eu,lt:()=>Mi,move:()=>Wu,moveAfter:()=>Gu,moveBefore:()=>qu,moveDown:()=>zu,moveUp:()=>Ju,prepend:()=>Ui,remove:()=>Tr,replace:()=>Hi,setItem:()=>qi,setItemListElement:()=>B,setItems:()=>zi,setPosition:()=>lt,sort:()=>Ue,toItemList:()=>Mu,toListItem:()=>Ae,toString:()=>Hu,toStringItemList:()=>Bi,toStringListItem:()=>Sr,upsert:()=>Ku});function Hu(e){return v(e)?Bi(e):Sr(e)}function Bi(e){let r=[`ItemList ${s.getValue(e,"name")||s.record_id(e)}`],n=I(e);return r=r.concat(n.map(i=>Sr(i))),r.join(`
`)}function Sr(e){return`${N(e)} - ${s.getValue(e,"item.name")||s.record_id(e)}`}function v(e){return s.record_type(e)==="ItemList"}function Mu(e){if(v(e)==!1){let r=s.toArray(e);return e={"@type":"ItemList","@id":s.randomUUID(),itemListElement:r.map((n,i)=>Ae(n,i))},kr(e)}return kr(e)}function kr(e){e=s.setValueIfNull(e,"@id",s.randomUUID());let r=I(e);return r=r.map(n=>Ae(n)),r=$e(r),r=ut(r),e=B(e,r),e=s.setValue(e,"numberOfItems",r.length),e}function Eu(e){return I(e).length}function I(e){return s.getValues(e,"itemListElement")||[]}function Lu(e){return I(e)}function B(e,r){return r=s.toArray(r),r=r.map((n,i)=>Ae(n)),r=$e(r),r=ut(r),e=s.setValues(e,"itemListElement",r),e=s.setValue(e,"numberOfItems",r.length),e}function j(e,r,n){if(e=$e(e),s.isArray(r)){let o=n;for(let a of r)e=j(e,a,o),(o||o===0)&&(o+=1);return e}r=Ae(r,n),e=Tr(e,r);let i=I(e);return n=n??He(i),n=n??i.length,n=n>=0?n:0,i=Nr(i,n),i=Ue(i),i.push(r),e=B(e,i),e}function _r(e,r,n){if(s.isArray(r)){for(let a of r)e=_r(e,a,n);return e}let i=W(e,n);if(!i)return j(e,r);let o=N(i);return j(e,r,o)}function Ir(e,r,n){if(s.isArray(r)){for(let a of r)e=Ir(e,a,n);return e}let i=W(e,n);if(!i)return j(e,r);let o=N(i);return j(e,r,o+1)}function Ui(e,r){if(s.isArray(r)){for(let n=r.length-1;n>=0;n--)e=Ui(e,r?.[n],referenceItem);return e}return j(e,r,0)}function Be(e,r){if(s.isArray(r)){for(let o of r)e=Be(e,o,referenceItem);return e}let n=I(e);if(n.length==0)return j(e,r,0);let i=He(e);return i||i===0?j(e,r,i+1):j(e,r,n.length)}function Fu(e,r){return Be(e,r)}function Wu(e,r,n){return j(e,r,n)}function Ju(e,r){let n=W(e,r),i=N(n);return i==0?e:j(e,n,i-1)}function zu(e,r){let n=W(e,r),i=N(n),o=He(e);return i==o?e:j(e,n,i+1)}function qu(e,r,n){return _r(e,r,n)}function Gu(e,r,n){return Ir(e,r,n)}function Hi(e,r,n){let i=I(e),o=[];for(let a of i){let l=Me(a);s.isSame(l,n)&&(l=qi(a,r)),o.push(a)}return B(e,o)}function Ku(e,r){return W(e,r)?Hi(e,r,s.ref(r)):Be(e,r)}function Yu(e,r){if(at(r)){let n=W(r);r=Me(n)}return Be(e,r)}function Tr(e,r){if(s.isArray(r)){for(let a of r)e=Tr(e,a);return e}e=$e(e);let n=I(e),i=W(n,r),o=N(i);return n=n.filter(a=>s.isSame(a,i)==!1),n=Pr(n,o),e=B(e,n),e}function Xu(e,r){let n=s.getItemListElement(e);return r&&(n=s.filter(n,r)),n}function at(e){return s.record_type(e)==="ListItem"}function Ae(e,r){return at(e)==!1&&(e={"@type":"ListItem","@id":s.randomUUID(),item:e}),e=s.setIfNull(e,"@id",s.randomUUID()),(r||r===0)&&(e=s.setValue(e,"position",r)),e}function Mi(e,r){let n=N(e)??void 0,i=N(r)??void 0;return n===void 0&&i===void 0?!1:n===void 0?!0:i===void 0?!1:n<i}function Ei(e,r){let n=N(e)??void 0,i=N(r)??void 0;return n===void 0&&i===void 0||n===void 0?!1:i===void 0?!0:n>i}function Ue(e){if(v(e)){let n=e,i=I(n),o=Ue(i);return B(n,o)}function r(n,i){return Mi(n,i)==!0?-1:Ei(n,i)==!0?1:0}return e.sort((n,i)=>r(n,i)),e}function W(e,r){if(!s.isNull(r))return s.isNumber(r)?Li(e,r):at(r)?Fi(e,r):Wi(e,r)}function Li(e,r){if(v(e)&&(e=I(e)),e=s.toArray(e),e.length!=0){for(let n of e)if(N(n)==r)return n}}function Fi(e,r){if(v(e)&&(e=I(e)),e=s.toArray(e),e.length!=0){for(let n of e)if(s.isSame(n,r))return n}}function Wi(e,r){if(v(e)&&(e=I(e)),e=s.toArray(e),e.length!=0)for(let n of e){let i=Me(n);if(s.isSame(i,r))return n}}function N(e){let r=s.getValue(e,"position");return r=Number(r),r=isNaN(r)?void 0:r,r}function lt(e,r){return r=Number(r),r=isNaN(r)?void 0:r,r=r<0?0:r,N(e)==r||(e=s.setValue(e,"position",r)),e}function Nr(e,r){if(r=r??0,v(e)){let i=e;e=I(i);let o=Nr(e,r);return B(i,o)}let n=[];for(let i of e){let o=N(i);o>=r&&(i=lt(i,o+1)),n.push(i)}return n}function Pr(e,r){if(r=r??0,v(e)){let i=e;e=I(i);let o=Pr(e,r);return B(i,o)}let n=[];for(let i of e){let o=N(i);o!=0&&o>=r&&(i=lt(i,o-1)),n.push(i)}return n}function $e(e,r){if(v(e)){let o=e;e=I(o);let a=$e(e);return B(o,a)}if(e=s.toArray(e),e.length==0)return e;e=Ue(e);let n=r??vr(e)??0,i=[];for(let o of e)o=lt(o,n),n+=1,i.push(o);return i}function vr(e){if(v(e)){let o=I(o);return vr(o)}e=s.toArray(e);let r=e.map(i=>N(i));return r=r.filter(i=>isNaN(i)==!1),r.length==0?void 0:Math.min(...r)}function He(e){if(v(e))return e=I(e),He(e);e=s.toArray(e);let r=e.map(i=>N(i));return r=r.filter(i=>isNaN(i)==!1),r.length==0?void 0:Math.max(...r)}function ut(e){if(v(e)){let n=e;e=I(n);let i=ut(e);return B(n,i)}e=s.toArray(e),e=Ue(e);let r=[];for(let n of e){let i=N(n),o=W(e,i-1),a=o?s.ref(o):void 0;n=s.setValue(n,"previousItem",a);let l=W(e,i+1),u=l?s.ref(l):void 0;n=s.setValue(n,"nextItem",u),r.push(n)}return r}function Ji(e){if(v(e)){let i=I(e);return Ji(i)}return e.map(n=>Me(n))}function zi(e,r){if(v(e)){let i=e;e=I(i);let o=zi(e);return B(i,o)}return e=s.toArray(e),r=s.toArray(r),r=r.map(i=>Ae(i)),e.concat(r)}function Me(e){return s.getValue(e,"item")}function qi(e,r){return s.setValue(e,"item",r)}var Rr={};m(Rr,{appendAction:()=>Yi,duplicateAction:()=>Qi,execute:()=>Gi,moveDownAction:()=>Zi,moveUpAction:()=>Xi,prependAction:()=>Ki,replaceAction:()=>jr});function Gi(e){if(s.isArray(e))return e.map(n=>Gi(n));let r=s.record_type(e);if(r=="ReplaceAction")return jr(e);if(r=="UpdateAction")return Zu(e);if(r=="MoveUpAction")return Xi(e);if(r=="MoveDownAction")return Zi(e);if(r=="AppendAction")return Yi(e);if(r=="PrependAction")return Ki(e);if(r=="ReplaceAction")return jr(e);if(r=="DuplicateAction")return Qi(e)}function Zu(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n){for(let o of r)i=s.patch(i,o);e=s.addValue(e,"result",i)}return e=s.setCompleted(e),e}function Ki(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n){for(let o of r)i=s.list.prepend(i,o);e=s.addValue(e,"result",i)}return e=s.setCompleted(e),e}function Yi(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n){for(let o of r)i=s.list.append(i,o);e=s.addValue(e,"result",i)}return e=s.setCompleted(e),e}function Xi(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n)for(let o of r)i=s.list.moveUp(i,o);return e=s.addValue(e,"result",t),e=s.setCompleted(e),e}function Zi(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n)for(let o of r)i=s.list.moveDown(i,o);return e=s.addValue(e,"result",t),e=s.setCompleted(e),e}function jr(e){let r=s.targetCollection(e),n=s.getValue(e,"replacer"),i=s.getValue(e,"replacee");return t=s.list.replace(t,n,i),e=s.addValue(e,"result",r),e=s.setCompleted(e),e}function Qi(e){let r=s.getObjects(e),n=s.targetCollections(e);for(let i of n)for(let o of r)i=s.list.duplicate(i,o);return e=s.addValue(e,"result",t),e=s.setCompleted(e),e}var Or={};m(Or,{addPotentialActions:()=>Dr});function Dr(e,r){if(!e)return e;if(s.isArray(e))return e.map(i=>Dr(i,r));if(s.isObject(e)==!1)return e;let n=s.record_type(e);if(!n)return e;n=="Action"&&(e=ed(e,r)),n=="ItemList"&&(e=Qu(e,r));for(let i of Object.keys(e))e[i]=Dr(e[i],r);return e}function Qu(e,r){let n=s.getValues(e,"itemListElement"),i=s.getValues(e,"numberOfItems");for(let a=0;a<n.length;a++){let l=s.getValue(n[a],"position");l>0&&(n[a]=td(n[a],e,r)),l<i-1&&(n[a]=rd(n[a],e,r)),n[a]=nd(n[a],e,r),n[a]=id(n[a],e,r)}let o={"@type":"Thing","@id":"_h:"+s.randomUUID(),name:"new record"};return e=sd(e,o,r),e}function ed(e,r){let n;return s.getValue(e,"actionStatus")||(n={actionStatus:"PotentialActionStatus",startTime:"",endTime:""},e=Y(e,r,n,"Set Potential"),n={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=Y(e,r,n,"Set Active"),n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Failed")),s.isPotential(e)&&(n={actionStatus:"ActiveActionStatus",startTime:new Date,endTime:""},e=Y(e,r,n,"Set Active"),n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Failed")),s.isActive(e)&&(n={actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Completed"),n={actionStatus:"FailedActionStatus",startTime:new Date,endTime:new Date},e=Y(e,r,n,"Set Failed")),e}function Y(e,r,n,i){i=i||`Set ${propertyID} ${value}`,n["@id"]=s.record_id(e);let o={"@type":"UpdateAction",name:i,object:n,targetCollection:s.ref(e),url:r};return e=s.addValue(e,"potentialAction",o),e}function td(e,r,n,i){i=i||"Move up";let o={"@type":"MoveUpAction",name:i,object:s.ref(e),targetCollection:s.ref(r),url:n};return e=s.addValue(e,"potentialAction",o),e}function rd(e,r,n,i){i=i||"Move down";let o={"@type":"MoveDownAction",name:i,object:s.ref(e),targetCollection:s.ref(r),url:n};return e=s.addValue(e,"potentialAction",o),e}function nd(e,r,n,i){i=i||"Delete";let o={"@type":"DeleteAction",name:i,object:s.ref(e),targetCollection:s.ref(r),url:n};return e=s.addValue(e,"potentialAction",o),e}function id(e,r,n,i){i=i||"Duplicate";let o={"@type":"DuplicateAction",name:i,object:s.ref(e),targetCollection:s.ref(r),url:n};return e=s.addValue(e,"potentialAction",o),e}function sd(e,r,n,i){i=i||"Duplicate";let o={"@type":"AppendAction",name:i,object:r,targetCollection:s.ref(e),url:n};return e=s.addValue(e,"potentialAction",o),e}var s={dot:pe,...Lt,...Wt,...Ye,...lr,...dr,...fr,...yr,...xr,...Vr,...wr,...$r,list:Cr,...Rr,potentialAction:Or};var ln={};m(ln,{default:()=>Fd,things:()=>_});var Br={};m(Br,{getContent:()=>ad,getIcon:()=>cd,getTitle1:()=>ts,getTitle2:()=>od,imageUrl:()=>ud,imageUrls:()=>dd,thumbnailUrl:()=>ld});function ts(e){let r;if(!e)return"";let n=s.record_type(e),i=s.record_id(e),o=s.getValue(e,"givenName"),a=s.getValue(e,"familyName"),l=s.getValue(e,"name");if(n=="Person"){let u=[o,a];if(u=u.filter(c=>c!==void 0),u.length>0)return u.join(" ")}if(n=="ListItem"){let u=s.getValue(e,"item");return ts(u)}return l||i||""}function od(e){let r;if(!e)return"";let n=s.record_type(e),i=s.record_id(e),o=s.getValue(e,"email"),a=s.getValue(e,"description");if(n=="Person")return o??"";if(n=="Action"){let l=s.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return a||""}function ad(e){let r;if(!e)return"";let n=s.record_type(e),i=s.record_id(e),o=s.getValue(e,"email"),a;return a=s.getValue(e,"abstract"),a&&typeof a=="string"||(a=s.getValue(e,"text"),a&&typeof a=="string")||(a=s.getValue(e,"description"),a&&typeof a=="string")?a:""}function ld(e){let r=s.record_type(e),n=s.record_id(e),i,o;return o=s.getValue(e,"thumbnail.contentUrl"),o&&typeof o=="string"||(o=s.getValue(e,"thumbnail"),o&&typeof o=="string")||(o=s.getValue(e,"thumbnailUrl"),o&&typeof o=="string")||(o=s.getValue(e,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(e,"image"),o&&typeof o=="string")?o:""}function ud(e){let r=s.record_type(e),n=s.record_id(e),i,o;return o=s.getValue(e,"contentUrl"),o&&typeof o=="string"||(o=s.getValue(e,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(e,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function dd(e){let r=s.record_type(e),n=s.record_id(e),i,o;return o=s.getValues(e,"image.contentUrl"),o=o.filter(a=>a&&typeof a=="string"),o.length>0||(o=s.getValues(e,"image"),o&&typeof o=="string")||(o=s.getValue(e,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function cd(e){let r=s.record_type(e);switch(r=r||"Thing",r.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return es;case"action":return fd;case"person":return pd;case"organization":return gd;case"itemlist":return md;case"listitem":return hd;case"postaladdress":return yd;case"product":return bd;case"webapi":return xd;case"website":return Vd;case"webpage":return wd;default:return es}}var es='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',fd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',pd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',gd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',md='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',hd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',yd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',bd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',xd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',Vd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',wd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var Np=globalThis.crypto.randomUUID;function ct(e,r){if(Array.isArray(e))return e.map(i=>ct(i));if(!e?.["@type"]||!e?.["@id"])return e;for(let i of Object.keys(e))e[i]=ct(e);let n=s.record_type(e);return e=dt(e,"BookmarkAction","Bookmark",r),n=="ListItem"&&(e=dt(e,"MoveUpAction","Move Up",r),e=dt(e,"MoveDownAction","Move Down",r),e=dt(e,"DeleteAction","Delete",r)),e}function dt(e,r,n,i){let o={"@type":r,"@id":globalThis.crypto.randomUUID(),name:n,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(e)},url:i};return e=Ad(e,o),e}function Ad(e,r){return e?._record?(e._record.potentialAction=e._record?.potentialAction||[],e._record.potentialAction=Array.isArray(e._record.potentialAction)?e._record.potentialAction:[e._record.potentialAction],e._record.potentialAction.push(r),e):(e.potentialAction=e?.potentialAction||[],e.potentialAction=Array.isArray(e.potentialAction)?e.potentialAction:[e.potentialAction],e.potentialAction.push(r),e)}var Ur={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function ft(e){let r=[];return r=r.concat(Ur?.[e]?.properties||[]),Ur?.[e]?.parent&&(r=r.concat(ft(Ur[e].parent))),r}function pt(e=0,r=0){let n="Action";Number.isNaN(e)||(e=n+String(e));let i="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":i,name:e,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:S.thing("Object thing"),instrument:S.thing("Instrument thing"),agent:S.person("Agent thing"),hasPart:[]};if(r>0)for(let a=0;a<3;a++){let l=e+"_"+String(a);o.hasPart.push(pt(l,r-1))}return o}function Hr(e=0){let r="Thing";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,name:e,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function gt(e=0,r=0,n=0){let i="CreativeWork";typeof e!="string"&&(e=i+"_"+String(e));let o="https://www.testrecord.com/"+e+"#"+i,a={"@type":i,"@id":o,name:e,headline:"Headline "+e,text:$d(),image:S.image(),hasPart:[]};if(n==0&&(a.author=S.person(),a.datePublished=new Date().toISOString()),n<r)for(let l=0;l<3;l++){let u=e+"_"+String(l);a.hasPart.push(gt(u,r,n+1))}return a}function $d(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function Ee(e=0){let r="ImageObject";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,contentUrl:"https://placehold.co/600x400"}}var Wp=globalThis.crypto.randomUUID;function Mr(e=5){let r="ItemList",n="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+r,i={"@type":r,"@id":n,itemListElement:[],numberOfItems:e},o;for(let a=0;a<e;a++){let l=kd(S.thing(a),a);o&&(o.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":o?.["@id"]}),i.itemListElement.push(l),o=l}return i}function kd(e,r=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:e,position:r,previousItem:"",nextItem:""}}function Er(e=0){let r="Offer";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,name:e,availability:"https://schema.org/InStock",itemOffered:S.product(e+"_item"),price:"55.00",priceCurrency:"CAD",seller:S.organization("org_a")}}function Lr(e=0){let r="Organization";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,name:e,address:S.postalAddress(),url:`https://www.test_${e.replaceAll(" ","_")}.com`}}function Fr(e=0){let r="Person";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,name:e,givenName:"givenName_"+e,familyName:"familyName_"+e,email:e+"@testrecord.com",address:S.address()}}function Wr(e=0){let r="PostalAddress";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Jr(e=0){let r="Product";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r;return{"@type":r,"@id":n,name:e,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+e,sku:"sku_id_"+e,category:"Category 1"}}function zr(e=0){let r="ProductGroup";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,i={"@type":r,"@id":n,name:e,productGroupID:`A ${e} product group`,variesBy:["color","size"],hasVariant:[]};for(let o of["small","medium","large"])for(let a of["blue","white","red"]){let l=S.product(`variant ${o} ${a}`);l.size=o,l.color=a,l.isVariantOf={"@id":i?.["@id"]},i.hasVariant.push(l)}return i}function mt(e=0,r=0){let n="Thing";Number.isNaN(e)||(e=n+String(e));let i="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":i,name:e,image:Ee(e),hasPart:[]};if(r>0)for(let a=0;a<3;a++){let l=e+"_"+String(a);o.hasPart.push(mt(l,r-1))}return o}function qr(e=0){let r="Message";Number.isNaN(e)||(e=r+String(e));let n="https://www.testrecord.com/"+e+"#"+r,i=new Date;return{"@type":r,"@id":n,sender:S.person(0),recipient:[S.person(10),S.person(11),S.person(12)],headline:`Test ${String(e)} - this is a test message no ${String(e)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(e)} This is a test mesage. This message is used for testing purposes only.`}}function Gr(e=0,r=5){let n="Conversation";Number.isNaN(e)||(e=n+String(e));let i="https://www.testrecord.com/"+e+"#"+n,o={"@type":n,"@id":i,hasPart:[]};for(let a=0;a<r;a++){let l=e+"_"+String(a),u=S.message(l);u.sender=a%2==0?u.recipient[0]:u.recipient[1],u.recipient=a%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let c=new Date;c.setDate(c.getDate()-r+a),u.dateSent=c,u.dateReceived=c,o.hasPart.push(u)}return o}var S={action:pt,article:gt,address:Hr,conversation:Gr,image:Ee,itemList:Mr,message:qr,offer:Er,organization:Lr,person:Fr,postalAddress:Wr,product:Jr,productGroup:zr,thing:mt,Action:pt,Article:gt,Address:Hr,Conversation:Gr,Image:Ee,ItemList:Mr,Message:qr,Offer:Er,Organization:Lr,Person:Fr,PostalAddress:Wr,Product:Jr,ProductGroup:zr,Thing:mt};var Yr={};m(Yr,{jsonToMarkdown:()=>Kr});function Kr(e,r=1){let n;try{n=typeof e=="string"?JSON.parse(e):e}catch{return"Error: Invalid JSON input."}if(n==null)return"";let i="",o="  ".repeat(r-1);if(Array.isArray(n)){if(n.length===0)return"";n.forEach((a,l)=>{typeof a=="object"&&a!==null?(i+=`${o}* **Record ${l+1}:**
`,i+=Kr(a,r+1)):i+=`${o}* ${a}
`})}else typeof n=="object"?Object.entries(n).forEach(([a,l])=>{l!==null&&typeof l=="object"?(i+=`${o}* **${a}:**
`,i+=Kr(l,r+1)):i+=`${o}* **${a}:** ${l}
`}):i+=`${o}* ${n}
`;return i}var Zr={};m(Zr,{jsonToYaml:()=>Le,yamlToJson:()=>Sd});function Le(e,r=0){let n=" ".repeat(r),i="";if(e==null)return`null
`;if(typeof e!="object")return typeof e=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(e)?`"${e.replace(/"/g,'\\"')}"
`:`${e}
`:`${e}
`;if(Array.isArray(e))return e.length===0?`[]
`:(e.forEach(a=>{if(i+=`${n}- `,typeof a=="object"&&a!==null){let l=Le(a,r+2).trimStart();i+=l}else i+=Le(a,0)}),i);let o=Object.keys(e);return o.length===0?`{}
`:(o.forEach(a=>{let l=e[a];i+=`${n}${a}:`,typeof l=="object"&&l!==null?i+=`
`+Le(l,r+2):i+=" "+Le(l,0)}),i)}function Sd(e){let r=e.split(`
`),n={},i=[{indent:-1,value:n,type:"object"}];for(let o of r){if(!o.trim()||o.trim().startsWith("#"))continue;let a=o.search(/\S/),l=o.trim();for(;i.length>1&&a<=i[i.length-1].indent;)i.pop();let u=i[i.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],i.push({indent:a,value:u.value[u.lastKey],type:"array"}));let c=i[i.length-1],d=l.substring(1).trim();if(d.includes(":")){let[g,...y]=d.split(":"),b=g.trim(),$=y.join(":").trim(),E=Xr($),ne={[b]:E};c.value.push(ne),i.push({indent:a+2,value:ne,type:"object",lastKey:b})}else c.value.push(Xr(d))}else if(l.includes(":")){let[c,...d]=l.split(":"),g=c.trim(),y=d.join(":").trim();u.lastKey=g,y===""?(u.value[g]={},i.push({indent:a,value:u.value[g],type:"object",lastKey:g})):u.value[g]=Xr(y)}}return n}function Xr(e){return e==="true"?!0:e==="false"?!1:e==="null"||e==="~"?null:!isNaN(e)&&e!==""?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}var rs={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var ns="DesignToken",is={css:{get:Nd},get:Qr,set:ss,getValue:Id,setValue:Td,sampleRecord:os};function Qr(e){if(!e)return;let r=s.getAdditionalProperty(e,ns);return r=r||{},r}function ss(e,r){if(e)return r=r||{},e=s.setAdditionalProperty(e,ns,r),e}function Id(e,r){if(!e||!r||typeof r!="string")return;r=r.endsWith(".$value")?r.replace("$value",""):r;let n=Qr(e),i=Te(n,r);return Te(i,"$value")}function Td(e,r,n){if(!e||!r||typeof r!="string")return e;r=r.endsWith(".$value")?r.replace("$value",""):r;let i=Qr(),o=os(),a=Te(o,r);return a.$value=n,i=Ke(i,r,a),e=ss(e,i),e}function Nd(e,r="dt"){let n=[];function i(l,u=[]){for(let[c,d]of Object.entries(l)){if(d==null)continue;let g=[...u,c];if(typeof d=="object"&&"value"in d){let y=`--${g.map($=>$.toLowerCase()).join("-")}`,b=o(d.value);n.push(`  ${y}: ${b};`)}else if(typeof d=="object"&&!Array.isArray(d))i(d,g);else{let y=`--${g.map($=>$.toLowerCase()).join("-")}`,b=o(d);n.push(`  ${y}: ${b};`)}}}function o(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return i(e,r?[r]:[]),`:root {
${n.join(`
`)}
}`}function os(){return rs}var f={markdown:Yr,yaml:Zr,designToken:is};var yt=class{constructor(r){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(r)}*[Symbol.iterator](){for(let r of this.properties)yield r}toString(){return en(this.record)}toJSON(){return this.record}toMD(){return f.markdown.jsonToMarkdown(this.record)}toYaml(){return f.yaml.jsonToYaml(this.record)}get(r){return this.getValues(r)}set(r,n){return this.setValues(r,n)}getValue(r){return s.getValue(this._record,r)}setValue(r,n){return this.#t(),this.#e(s.setValue(this._record,r,n))}getValues(r){return s.getValues(this._record,r)}setValues(r,n){return this.#t(),this.#e(s.setValues(this._record,r,n))}addValue(r,n){return this.#t(),this.#e(s.addValue(this._record,r,n))}addValues(r,n){return this.#t(),this.#e(s.addValues(this._record,r,n))}_setValueIfNotNull(r,n){s.isNotNull(n)&&this.setValue(r,n)}_setValueIfString(r,n){s.isNotNull(n)&&typeof n=="string"&&this.setValue(r,n)}_setValueIfNumber(r,n){s.isNotNull(n)&&!isNaN(n)&&this.setValue(r,n)}_setValueIfRecordType(r,n,i){s.isNotNull(i)&&s.record_type(i)==r&&this.setValue(n,i)}_setValueIfNotRecordType(r,n,i){s.isNotNull(i)&&s.record_type(i)&&s.record_type(i)!=r&&this.setValue(n,i)}get objectID(){return this._objectID}set objectID(r){this._objectID=r}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(r){try{process.env.baseUrl=r}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=be(ht(this._record),this.baseUrl)),s.simplify(ht(this._record))}set record(r){return this.#t(),this.#e(r)}get ref(){return{"@id":this.record_id}}set ref(r){this.record_id=r?.["@id"]||r?.record_id||r}_loadRecord(r){let n=s.record_type(r);return n&&n==this._defaultRecordType?(this.record=r?.record||r,!0):(this.record_type=this._defaultRecordType,!1)}#e(r){r=r||{},r?._isThingClass==!0&&(this._callbacks={...this._callbacks,...r._callbacks},r=r?.record||r),this._currentRecord=s.clone(ht(r)),this._record=r,Object.keys(this._record).forEach(n=>this._record[n]=ee(this._record?.[n])),this.processCallbacks()}#t(){this._previousRecord=s.clone(ht(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(r){this.setValue("@type",r)}get record_id(){return this.getValue("@id")}set record_id(r){return this.setValue("@id",r)}get properties(){return ft(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let r of Object.keys(this.record))if(!r.startsWith("@")){let n=this.getValues(r);for(let i of n)i?._isThingClass==!0&&i.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(r,n=void 0,i=!1){n=n??s.randomUUID();let o={id:n,includeChildren:i,callbackFn:r};return this._callbacks=this?._callbacks??{},this._callbacks[n]=o,n}addListenerParent(r,n=void 0){return this.addListener(r,n,!1)}addListenerNested(r,n=void 0){return this.addListener(r,n,!0)}addEventListener(r,n=void 0,i=!1){return this.addListener(r,n,i)}removeListener(r){delete this._callbacks[r]}removeEventListener(r){return this.removeListener(r)}processCallbacks(){let r=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let n=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),i=n==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),n==!1&&i==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(r,n,i=!1){let o={"@type":"UpdateAction","@id":s.randomUUID(),object:r,result:n,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let a of Object.keys(this._callbacks))try{if(i==!0&&this._callbacks?.[a]?.includeChildren==!1)continue;this._callbacks?.[a].callbackFn(o)}catch(l){console.log("Callback failed: ",a,String(l),o)}}static toString(r){return en(r)}static toMD(r){return f.markdown.jsonToMarkdown(r)}static toYaml(r){return f.yaml.jsonToYaml(r)}static fromYaml(r){let n=this.name;return new _[n](f.yaml.yamlToJson(r))}static isThing(r){return r?._isThingClass==!0}static toThing(r){return ee(r)}static example(r=0,n=5){let i=this.name;return new _[i](S[i](r,n))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(r){process.env.baseUrl=r}static getProperties(r){return ft(r)}static getValue(r,n){return s.getValue(r,n)}static setValue(r,n,i){return s.setValue(r,n,ee(i))}static getValues(r,n){return s.getValues(r,n)}static setValues(r,n,i){return s.setValues(r,n,ee(i))}static addValue(r,n,i){return s.addValue(r,n,ee(i))}static addValues(r,n,i){return s.addValues(r,n,ee(i))}static flatten(r){return s.flatten(r)}static addPotentialActions(r){return ct(r)}static addAdditionalProperty(r,n,i){return Pd(r,"additionalProperty",n,i)}};function ht(e){function r(i){if(Array.isArray(i))return i.map(o=>r(o));if(i instanceof Date&&!Number.isNaN(i.getTime()))return i.toISOString();if(i?._record)return r(i._record);if(i?.["@type"]||i?.["@id"]){let o={};for(let a of Object.keys(i))o[a]=r(i?.[a]);return o}return i}let n=r(e);try{n=JSON.parse(JSON.stringify(n))}catch{}return n}function ee(e){if(Array.isArray(e))return e.map(r=>ee(r));if(e?._isThingClass!=!0){let r=s.record_type(e);if(r){let n=_?.[r]||_.Thing,i=new n;i.record=e,e=i}}if(e?._isThingClass==!0)for(let r of Object.keys(e._record))e._record[r]=ee(e._record?.[r]);return e}function en(e){if(Array.isArray(e)){let a=e.map(l=>en(l));return a=a.join(`
`),a}let r=s.getValue(e,"@type"),n=s.getValue(e,"@id"),i=s.getValue(e,"name"),o=`${r||""}/${n||""}`;return i&&(o=`${o} - ${i}`),o}function Pd(e,r,n,i){let o=new _.PropertyValue;return o.propertyID=n,o.value=i,e=s.addValues(e,r,o.record),e}var w=class extends yt{constructor(r){super(),this._defaultRecordType="Thing",this._loadRecord(r),this._setValueIfString("name",r)}get cleanUrl(){let r=this.getValue(this.record,"url");return r=V.url.clean(value),r}set cleanUrl(r){url=V.url.clean(r),this.url=url}get description(){return this.getValue("description")}set description(r){return this.setValue("description",r)}get sameAs(){return this.getValue("sameAs")}set sameAs(r){return this.setValue("sameAs",r)}get hasPart(){return this.getValues("hasPart")}set hasPart(r){return this.setValues("hasPart",r)}get image(){return this.getValue("image")}set image(r){return this.setValue("image",r)}get name(){return this.getValue("name")}set name(r){return this.setValue("name",r)}get owner(){return this.getValues("owner")}set owner(r){return this.setValues("owner",r)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(r){return this.setValues("potentialAction",r)}get sameAs(){return this.getValues("sameAs")}set sameAs(r){return this.setValues("sameAs",r)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(r){return this.setValues("subjectOf",r)}get url(){return this.getValue("url")}set url(r){this.setValue("url",r),this.record_id=be(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(r,n){let i=this.getValues("additionalProperty");i=i.filter(a=>a?.propertyID!=r);let o={"@type":"PropertyValue","@id":s.randomUUID()};o.propertyID=r,o.value=n,i.push(o),this.setValues("additionalProperty",i)}removeAdditionalProperty(r){let n=this.getValues("additionalProperty");n.find(o=>o?.propertyID==r)&&(n=n.filter(o=>o?.propertyID!=r),this.setValues("additionalProperty",n))}getAdditionalProperty(r){return this.getValues("additionalProperty").find(o=>o?.propertyID==r)?.value}};var ae=class extends w{constructor(r){super(),this._defaultRecordType="ItemList",this._loadRecord(r),this._setValueIfString("name",r);for(let n of s.toArray(r))s.record_type(n)!=="ItemList"&&this.add(n)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(r){this.record=s.list.setItemListElement(r)}get items(){return s.list.getItems(this.record)}set items(r){return this.add(r)}length(){return this.itemListElement.length}prepend(r){this.record=s.list.insert(this.record,r,0)}append(r){this.record=s.list.append(this.record,r)}add(r){this.record=s.list.append(this.record,r)}insert(r,n){this.record=s.list.insert(this.record,r,n)}delete(r){this.record=s.list.remove(this.record,r)}replace(r,n){this.record=s.list.replace(this.record,r,n)}move(r,n){this.record=s.list.move(this.record,r,n)}moveUp(r){this.record=s.list.moveUp(this.record,r)}moveDown(r){this.record=s.list.moveDown(this.record,r)}upsert(r){this.record=s.list.upsert(this.record,r)}static clean(r){return s.list.clean(r)}static length(r){return s.list.length(r)}static getItem(r,n){return s.list.getItem(r,n)}static prepend(r,n){return s.list.insert(r,n,0)}static append(r,n){return s.list.append(r,n)}static add(r,n){return s.list.insert(r,n,getLength(r))}static insert(r,n,i){return s.list.insert(r,n,i)}static delete(r,n){return s.list.remove(r,n)}static replace(r,n,i){return s.list.replace(r,n,i)}static move(r,n,i){return s.list.move(r,n,i)}static moveUp(r,n){return s.list.moveUp(r,n)}static moveDown(r,n){return s.list.moveDown(r,n)}static moveBefore(r,n,i){return s.list.moveBefore(r,n,i)}static moveAfter(r,n,i){return s.list.moveAfter(r,n,i)}static upsert(r,n){return s.list.upsert(r,n)}static duplicate(r,n){return duplicateItem(r,n)}static search(r,n,i,o,a,l){return search(r,n,i,o,a,l)}};var R=class extends w{constructor(r){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(r),this._setValueIfString("name",r)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(r){return this.setValue("valueRequired",r)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(r){return this.setValue("defaultValue",r)}get valueName(){return this.getValue("valueName")}set valueName(r){return this.setValue("valueName",r)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(r){return this.setValue("readonlyValue",r)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(r){return this.setValue("multipleValues",r)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(r){return this.setValue("valueMinLength",r)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(r){return this.setValue("valueMaxLength",r)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(r){return this.setValue("valuePattern",r)}get minValue(){return this.getValue("minValue")}set minValue(r){return this.setValue("minValue",r)}get maxValue(){return this.getValue("maxValue")}set maxValue(r){return this.setValue("maxValue",r)}get stepValue(){return this.getValue("stepValue")}set stepValue(r){return this.setValue("stepValue",r)}test(r){return as(this.record,r)}static test(r,n){return as(r,n)}};function as(e,r){let n={"@type":"Action",name:"Validate PPS",object:e,instrument:r,actionStatus:"CompletedActionStatus"};if(r=JSON.parse(JSON.stringify(r)),Object.keys(r).foreach(i=>r[k]=Array.isArray(r?.[k])?r?.[k][0]:r?.[k]),r.valueRequired==!0&&!e&&e!=0)return n.actionStatus="FailedActionStatus",n.error="A value is required, no value provided.",n;if(r.multipleValues==!1&&Array.isArray(e))return n.actionStatus="FailedActionStatus",n.error="Cannot contain multiple values.",n;if(r.valueMinLength&&String(e).length<r.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value does not meet minimum length.",n;if(r.valueMaxLength&&String(e).length>r.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(r.minValue&&e<r.minValue)return n.actionStatus="FailedActionStatus",n.error="Value is smaller than minimum value allowed.",n;if(r.maxValue&&e>r.maxValue)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(r.valuePattern){let i="hello",a=new RegExp(r.valuePattern,"gi");if(e.test(a)==!1)return n.actionStatus="FailedActionStatus",n.error="Value doesn't match pattern.",n}return n}var Fe=class extends w{constructor(r,n){super(),this._defaultRecordType="Action",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(r){this.record=s.setCompleted(this.record,r)}setFailed(r){this.record=s.setFailed(this.record,r)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(r){return this.setValues("object",r)}get instrument(){return this.getValues("instrument")}set instrument(r){return this.setValues("instrument",r)}get agent(){return this.getValues("agent")}set agent(r){return this.setValues("agent",r)}get result(){return this.getValues("result")}set result(r){return this.setValues("result",r)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(r){return this.setValue("actionStatus",r)}get startTime(){return this.getValue("startTime")}set startTime(r){return this.setValue("startTime",r)}get endTime(){return this.getValue("endTime")}set endTime(r){return this.setValue("endTime",r)}get error(){return this.getValue("error")}set error(r){return this.setValue("error",r)}addPart(r){return this.addValues("hasPart",r)}addMinValue(r,n){this.record=cs(this.record,r,n)}addMaxValue(r,n){this.record=fs(this.record,r,n)}addMinLength(r,n){this.record=ps(this.record,r,n)}addMaxLength(r,n){this.record=gs(this.record,r,n)}addDefaultValue(r,n){this.record=ms(this.record,r,n)}addValueRequired(r,n){this.record=hs(this.record,r,n)}addValuePattern(r,n){this.record=ls(this.record,r,n)}addMultipleValues(r,n){this.record=us(this.record,r,n)}addStepValue(r,n){this.record=ds(this.record,r,n)}testConditions(){return tn(this.record)}getInputconditions(){return U(this.record)}addInputCondition(r,n){this.record=this.addValues(r+"-input",n)}getOutputConditions(){return vd(this.record)}addOutputCondition(r,n){this.record=this.addValues(r+"-output",n)}test(){return tn(this.record)}static setPotential(r){return s.setPotential(r)}static setActive(r){return s.setActive(r)}static setCompleted(r,n){return s.setCompleted(r,n)}static setFailed(r,n){return s.setFailed(r,n)}static isPotential(r){return s.isPotential(r)}static isActive(r){return s.isActive(r)}static isCompleted(r){return s.isCompleted(r)}static isFailed(r){return s.isFailed(r)}static addMinValue(r,n,i){return cs(r,n,i)}static addMaxValue(r,n,i){return fs(r,n,i)}static addMinLength(r,n,i){return ps(r,n,i)}static addMaxLength(r,n,i){return gs(r,n,i)}static addDefaultValue(r,n,i){return ms(r,n,i)}static addValueRequired(r,n,i){return hs(r,n,i)}static addValuePattern(r,n,i){return ls(r,n,i)}static addMultipleValues(r,n,i){return us(r,n,i)}static addStepValue(r,n,i){return ds(r,n,i)}static test(r){return tn(r)}};function U(e,r){if(r){r.endsWith("-input")==!1&&(r=r+"-input");let i=e?.[r];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(e))i.endsWith("-input")&&(i=i.replace("-input",""),n.push({k:e?.[i]}));return n}function X(e,r,n){return r.endsWith("-input")==!1&&(r=r+"-input"),e[r]=n,e}function vd(e,r){if(r){r.endsWith("-output")==!1&&(r=r+"-output");let i=e?.[r];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(e))i.endsWith("-output")&&(i=i.replace("-output",""),n.push({k:e?.[i]}));return n}function ls(e,r,n){let i=U(e,r)||new R;return i.valuePattern=n,e=X(e,r,i),e}function us(e,r,n){let i=U(e,r)||new R;return i.multipleValues=n,e=X(e,r,i),e}function ds(e,r,n){let i=U(e,r)||new R;return i.stepValue=n,e=X(e,r,i),e}function cs(e,r,n){let i=U(e,r)||new R;return i.minValue=n,e=X(e,r,i),e}function fs(e,r,n){let i=U(e,r)||new R;return i.maxValue=n,e=X(i.record),e}function ps(e,r,n){let i=U(e,r)||new R;return i.valueMinLength=n,e=X(e,r,i),e}function gs(e,r,n){let i=U(e,r)||new R;return i.valueMaxLength=n,e=X(e,r,i),e}function ms(e,r,n){let i=U(e,r)||new R;return i.defaultValue=n,e=X(e,r,i),e}function hs(e,r,n){let i=U(e,r)||new R;return i.valueRequired=n,e=X(e,r,i),e}function tn(e){let r=U(e);for(let n of Object.keys(r))if(R.test(r[n],e?.[n])==!1)return!1;return!0}var J=class extends Fe{constructor(r,n){super(),this._defaultRecordType="UpdateAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}get targetCollection(){return this.getValues(this.record,"targetCollection")}set targetCollection(r){this.record=this.setValues(this.record,"targetCollection",r)}get toLocation(){return this.getValues(this.record,"toLocation")}set toLocation(r){this.record=this.setValues(this.record,"toLocation",r)}},bt=class extends J{constructor(r,n){super(),this._defaultRecordType="AddAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}},xt=class extends J{constructor(r,n){super(),this._defaultRecordType="DeleteAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}},Vt=class extends J{constructor(r,n){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}get replacer(){return this.getValues(this.record,"replacer")}set replacer(r){this.record=this.setValues(this.record,"replacer",r)}get replacee(){return this.getValues(this.record,"replacee")}set replacee(r){this.record=this.setValues(this.record,"replacee",r)}},wt=class extends J{constructor(r,n){super(),this._defaultRecordType="InsertAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}},At=class extends J{constructor(r,n){super(),this._defaultRecordType="AppendAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}},$t=class extends J{constructor(r,n){super(),this._defaultRecordType="PrependAction",this._loadRecord(r),this._setValueIfString("name",r),this._setValueIfNotNull("object",n)}};var kt=class extends w{constructor(r){super(),this.record_type="BrandDesign",r?.["@type"]=="BrandDesign"&&(this.record=r),this.basePath=void 0}toString(){return Cd(this.record)}get(r){return f.designToken.getValue(this.record,r)}set(r,n){return f.designToken.setValue(this.record,r,n)}get token(){return f.designToken.get(this.record)}set token(r){this.record=f.designToken.set(this.record,r)}get primary(){return f.designToken.getValue(this.record,"color.brand.primary")}set primary(r){this.record=f.designToken.setValue(this.record,"color.brand.primary",r)}get secondary(){return f.designToken.getValue(this.record,"color.brand.secondary")}set secondary(r){this.record=f.designToken.setValue(this.record,"color.brand.secondary",r)}get tertiary(){return f.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(r){this.record=f.designToken.setValue(this.record,"color.brand.tertiary",r)}get neutral(){return f.designToken.getValue(this.record,"color.neutral.surface")}set neutral(r){this.record=f.designToken.setValue(this.record,"color.neutral.surface",r)}get danger(){return f.designToken.getValue(this.record,"color.feedback.danger")}set danger(r){this.record=f.designToken.setValue(this.record,"color.feedback.danger",r)}get textPrimary(){return f.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(r){this.record=f.designToken.setValue(this.record,"color.neutral.text.primary",r)}get textSecondary(){return f.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(r){this.record=f.designToken.setValue(this.record,"color.neutral.text.secondary",r)}get heading(){return new St(this,"typography.heading-lg")}get body(){return new St(this,"typography.body-md")}get spacingSm(){return f.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(r){return f.designToken.setValue(this.record,"spacing.scale.sm",r)}get spacingMd(){return f.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(r){return f.designToken.setValue(this.record,"spacing.scale.md",r)}get spacingLg(){return f.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(r){return f.designToken.setValue(this.record,"spacing.scale.lg",r)}get borderSm(){return f.designToken.getValue(this.record,"border.radius.sm")}set borderSm(r){return f.designToken.setValue(this.record,"border.radius.sm",r)}get borderMd(){return f.designToken.getValue(this.record,"border.radius.md")}set borderMd(r){return f.designToken.setValue(this.record,"border.radius.md",r)}get shadow(){return new rn(this,"shadow.elevation-md")}sample(){return f.designToken.getSampleRecord()}},St=class{constructor(r,n){this.base=r,this.basePath=A(n)}get fontFamily(){return f.designToken.getValue(record,A(this.basePath,"fontFamily"))}set fontFamily(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontFamily"),r)}get fontWeight(){return f.designToken.getValue(record,A(this.basePath,"fontWeight"))}set fontWeight(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontWeight"),r)}get fontSize(){return f.designToken.getValue(record,A(this.basePath,"fontSize"))}set fontSize(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontSize"),r)}get lineHeight(){return f.designToken.getValue(record,A(this.basePath,"lineHeight"))}set lineHeight(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"lineHeight"),r)}get letterSpacing(){return f.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set letterSpacing(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"letterSpacing"),r)}get family(){return f.designToken.getValue(record,A(this.basePath,"fontFamily"))}set family(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontFamily"),r)}get weight(){return f.designToken.getValue(record,A(this.basePath,"fontWeight"))}set weight(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontWeight"),r)}get size(){return f.designToken.getValue(record,A(this.basePath,"fontSize"))}set size(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"fontSize"),r)}get height(){return f.designToken.getValue(record,A(this.basePath,"lineHeight"))}set height(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"lineHeight"),r)}get spacing(){return f.designToken.getValue(record,A(this.basePath,"letterSpacing"))}set spacing(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"letterSpacing"),r)}},rn=class{constructor(r,n){this.base=r,this.basePath=A(n)}get color(){return f.designToken.getValue(record,A(this.basePath,"color"))}set color(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"color"),r)}get offsetX(){return f.designToken.getValue(record,A(this.basePath,"offsetX"))}set offsetX(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"offsetX"),r)}get offsetY(){return f.designToken.getValue(record,A(this.basePath,"offsetY"))}set offsetY(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"offsetY"),r)}get blur(){return f.designToken.getValue(record,A(this.basePath,"blur"))}set blur(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"blur"),r)}get spread(){return f.designToken.getValue(record,A(this.basePath,"spread"))}set spread(r){this.base.record=f.designToken.setValue(record,A(this.basePath,"spread"),r)}};function A(e,r,n){let i=[e,r,n];i=i.filter(a=>a!=null&&a!="");let o=i.join(".");return o=o.replaceAll("..","."),o}function Cd(e){return`${s.record_type(e)} for ${s.getValue(e,url)}
    
    `}var O=class extends w{constructor(r){super(),this._defaultRecordType="CreativeWork",this._loadRecord(r),this._setValueIfString("name",r)}get about(){return this.getValues("about")}set about(r){return this.setValues("about",r)}get abstract(){return this.getValues("abstract")}set abstract(r){return this.setValues("abstract",r)}get author(){return this.getValues("author")}set author(r){return this.setValues("author",r)}get comment(){return this.getValues("comment")}set comment(r){return this.setValues("comment",r)}get contributor(){return this.getValues("contributor")}set contributor(r){return this.setValues("contributor",r)}get creator(){return this.getValues("creator")}set creator(r){return this.setValues("creator",r)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(r){return this.setValues("dateCreated",r)}get dateModified(){return this.getValues("dateModified")}set dateModified(r){return this.setValues("dateModified",r)}get datePublished(){return this.getValues("datePublished")}set datePublished(r){return this.setValues("datePublished",r)}get editor(){return this.getValues("editor")}set editor(r){return this.setValues("editor",r)}get hasPart(){return this.getValues("hasPart")}set hasPart(r){return this.setValues("hasPart",r)}get headline(){return this.getValue("headline")}set headline(r){return this.setValue("headline",r)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(r){return this.setValues("inLanguage",r)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(r){return this.setValues("isPartOf",r)}get keywords(){return this.getValues("keywords")}set keywords(r){return this.setValues("keywords",r)}get offers(){return this.getValues("offers")}set offers(r){return this.setValues("offers",r)}get provider(){return this.getValues("provider")}set provider(r){return this.setValues("provider",r)}get publisher(){return this.getValues("publisher")}set publisher(r){return this.setValues("publisher",r)}get review(){return this.getValues("review")}set review(r){return this.setValues("review",r)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(r){return this.setValues("sourceOrganization",r)}get text(){return this.getValue("text")}set text(r){return this.setValue("text",r)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(r){return this.setValues("thumbnail",r)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(r){return this.setValues("thumbnailUrl",r)}get version(){return this.getValues("version")}set version(r){return this.setValues("version",r)}get video(){return this.getValues("video")}set video(r){return this.setValues("video",r)}get wordCount(){return this.getValues("wordCount")}set wordCount(r){return this.setValues("wordCount",r)}};var H=class extends O{constructor(r,n,i,o,a,l){super(),this._defaultRecordType="Message",r?.["@type"]=="Message"?this.record=r:(this.record_type="Message",this.sender=r,this.recipient=n,this.headline=i,this.text=o,this.dateSent=a,this.dateReceived=l)}toString(){return sn(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(r){return this.setValues("bccRecipient",ke(r))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(r){return this.setValues("ccRecipient",ke(r))}get dateRead(){return this.getValue("dateRead")}set dateRead(r){return this.setValue("dateRead",r)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(r){return this.setValue("dateReceived",r)}get dateSent(){return this.getValue("dateSent")}set dateSent(r){return this.setValue("dateSent",r)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(r){return this.setValues("messageAttachment",r)}get recipient(){return this.getValues("recipient")}set recipient(r){return this.setValues("recipient",ke(r))}get sender(){return this.getValue("sender")}set sender(r){return this.setValue("sender",ke(r))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(r){return this.setValues("toRecipient",ke(r))}get subject(){return this.headline}set subject(r){this.headline=r}get body(){return this.text}set body(r){this.text=r}get gmail(){return bs(this.record)}set gmail(r){this.record=ys(r)}get outlook(){return Vs(this.record)}set outlook(r){this.record=xs(r)}static toString(r){return sn(r)}static fromGmail(r){return ys(r)}static toGmail(r){return bs(r)}static fromOutlook(r){return xs(r)}static toOutlook(r){return Vs(r)}static lt(r,n){r=r?.record||r,n=n?.record||n;let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i<o}static gt(r,n){r=r?.record||r,n=n?.record||n;let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i>o}static sort(r){return r.sort((n,i)=>{n=n?.record||n,i=i?.record||i;let o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived")),a=new Date(s.getValue(i,"dateSent")||s.getValue(i,"dateCreated")||s.getValue(i,"dateReceived"));return o.getTime()-a.getTime()}),r}};function sn(e){if(!e)return"";if(Array.isArray(e)&&e.length>1)return e.map(d=>sn(d)).join(`
`);Array.isArray(e)&&e.length==1&&(e=e[0]);let r=s.getValue(e,"sender"),n=r?.email||r?.name||"";n=nn(n,20);let o=s.getValues(e,"recipient").map(d=>d?.email||d?.name||"");o=nn(o,25);let a=s.getValue(e,"headline")||"";a.length>20&&(a=nn(a,30));let l=s.getValue(e,"dateSent")||s.getValue(e,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${n} | ${o} | ${a} | ${u}`}function nn(e,r=100){if(!e)return"";if(Array.isArray(e)&&e.length>1){let n=e.join(", ");if(n.length>r){let i=`... [${e.length}]`;n=n.slice(0,r-i.length)+i}return n}return Array.isArray(e)&&e.length==0?"":(Array.isArray(e)&&e.length==1&&(e=e[0]),typeof e=="string"&&e.length>r?`${e.slice(0,r-3)}...`:e)}function ke(e){return e?Array.isArray(e)?e.map(r=>ke(r)):typeof e=="string"?e.includes("@")?{"@type":"ContactPoint",email:e}:{"@type":"Person",name:e}:e:[]}function ys(e){let r=new H;return r.sender=e.sender,r.recipient=e.recipient,r.subject=e.subject,r.text=e.text,r.dateSent=e.dateSent,r.dateReceived=e.dateReceived,r}function bs(e){let r={};return r.sender=e.sender,r.recipient=e.recipient,r.subject=e.subject,r.text=e.text,r.dateSent=e.dateSent,r.dateReceived=e.dateReceived,r}function xs(e){let r=new H;return r.record_id="https://www.outlook.com/message/"+r.id,r.sender=e.sender,r.recipient=e.toRecipients.emailAddress,r.subject=e.subject,r.text=e.text,r.dateSent=e.sentDateTime,r.dateReceived=e.receivedDateTime,r}function Vs(e){let r={};return r.sender=e.sender,r.toRecipients=e.recipient,r.subject=e.subject,r.text=e.text,r.sentDateTime=e.dateSent,r.receivedDateTime=e.dateReceived,r}var It=class extends O{constructor(r){super(),this._defaultRecordType="Conversation",r?.["@type"]=="Conversation"?this.record=r:this.record_type="Conversation"}test(){return"This is a test"}toString(){return jd(this.record)}get messages(){let r=this.getValues("hasPart").filter(n=>s.record_type(n)=="Message");return r=H.sort(r),r}set messages(r){this.setValues("hasPart",r)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ws(this.record)}add(r,n,i,o,a,l){this.record=_t(this.record,r,n,i,o,a,l)}addMessage(r,n,i,o,a,l){this.record=_t(this.record,r,n,i,o,a,l)}newMessage(r,n,i,o,a,l){let u=new H(r,n,i,o,a,l);this.messages=this.messages.push(u)}static getParticipants(r){return ws(r)}static newMessage(r,n,i,o,a,l,u){return _t(r,n,i,o,a,l,u)}static addMessage(r,n,i,o,a,l,u){return _t(r,n,i,o,a,l,u)}static getMessages(r){return We(r)}static getFirstMessage(r){let n=We(r);return n.length>0?n[0]:void 0}static getLastMessage(r){let n=We(r);return n.length>0?n[n.length-1]:void 0}};function jd(e){let r=We(e),n=`Conversation with ${r.length} messages:
`;return n+=H.toString(r),n}function _t(e,r,n,i,o,a,l){let u=new H(r,n,i,o,a,l);return e=s.addValues(e,"hasPart",u),e}function We(e){let r=s.getValues(e,"hasPart").filter(n=>s.getValue(n,"@type")=="Message");return r=Rd(r),r}function Rd(e){return e.sort((r,n)=>{let i=new Date(s.getValue(r,"dateSent")||s.getValue(r,"dateCreated")||s.getValue(r,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i-o}),e}function ws(e){let r=We(e),n=new Set;return r.forEach(i=>{let o=s.getValue(i,"sender");o&&n.add(o),s.getValues(i,"recipient").forEach(l=>{n.add(l)})}),Array.from(n)}var Se=class extends w{constructor(r,n,i,o){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(r),s.record_type(r)!=this._defaultRecordType&&(this.item=r,this.sourceSystemID=n,this.sourceTableID=i,this.sourceRecordID=o)}toString(){return Dd(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(r){return this.setValue("dateCreated",r)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(r){return this.setValue("dateDeleted",r)}get dateModified(){return this.getValue("dateModified")}set dateModified(r){return this.setValue("dateModified",r)}get item(){return this.getValue("item")}set item(r){this.setValue("item",r),this.#e()}setSource(r,n,i){this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let r=this.getAdditionalProperty("sourceSystemID");return r=r??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),r}set sourceSystemID(r){this.setAdditionalProperty("sourceSystemID",r),this.#e()}get sourceTableID(){let r=this.getAdditionalProperty("sourceTableID");return r=r??this.record_id.split("/")?.[this.record_id.split("/").length-2],r}set sourceTableID(r){this.setAdditionalProperty("sourceTableID",r),this.#e()}get sourceRecordID(){let r=this.getAdditionalProperty("sourceRecordID");return r=r??this.record_id.split("/")?.[this.record_id.split("/").length-1],r}set sourceRecordID(r){this.setAdditionalProperty("sourceRecordID",r),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let r=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function Dd(e){let r="";r+=`${e?.name||e?.["@id"]} `}var Tt=class extends w{constructor(r,n){super(),this._defaultRecordType="DataFeed",this._loadRecord(r),s.record_type(r)!=this._defaultRecordType&&(this.sourceSystemID=r,this.sourceTableID=n)}toString(){return Od(this.record)}setSource(r,n,i){this.sourceSystemID=r,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let r=this.getAdditionalProperty("sourceSystemID");return r=r??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),r}set sourceSystemID(r){this.setAdditionalProperty("sourceSystemID",r),this.#e()}get sourceTableID(){let r=this.getAdditionalProperty("sourceTableID");return r=r??this.record_id.split("/")?.[this.record_id.split("/").length-2],r}set sourceTableID(r){this.setAdditionalProperty("sourceTableID",r),this.#e()}add(r,n){return this.addDataFeedItem(r,n)}addDataFeedItem(r,n){let i=new Se(r,this.sourceSystemID,this.sourceTableID,n),o=this.getValues("dataFeedElement");return o.push(i),this.setValues("dataFeedElement",o),i}#e(){if(this.sourceSystemID&&this.sourceTableID){let r=this.sourceSystemID+"/"+this.sourceTableID}}};function Od(e){let r="";r+=`${e?.name||e?.["@id"]} `}var le=class extends w{constructor(r,n){super(),this.record_type="Offer",r?.["@type"]=="Offer"?this.record=r:(this.price=r,this.priceCurrency=n)}toString(){return As(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(r){this._record=w.setValues(this._record,"additionalProperty",r)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(r){this._record=w.setValues(this._record,"areaServed",r)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(r){this._record=w.setValues(this._record,"itemOffered",r)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(r){this._record=w.setValues(this._record,"inventoryLevel",r)}get price(){return s.getValue(this._record,"price")}set price(r){this._record=w.setValues(this._record,"price",r)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(r){this._record=w.setValues(this._record,"priceCurrency",r)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(r){this._record=w.setValues(this._record,"priceValidUntil",r)}get seller(){return s.getValue(this._record,"seller")}set seller(r){this._record=w.setValues(this._record,"seller",r)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(r){this._record=w.setValues(this._record,"validFrom",r)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(r){this._record=w.setValues(this._record,"validThrough",r)}};function As(e){if(Array.isArray(e))return e.map(o=>As(o));let r="",n=s.getValue(e,"itemOffered")||{},i=s.getValue(e,"price")||0;return i=Number(i),i=i.toFixed(2),r+=`${s.getValue(n,"name")||""} - ${s.getValue(e,"priceCurrency")||""} $${i}`,r}var ue=class extends O{constructor(r){super(),this._defaultRecordType="Product",this._loadRecord(r),this._setValueIfString("name",r)}toString(){return on(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(r){return this.setValues("additionalProperty",r)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(r){return this.setValues("aggregateRating",r)}get asin(){return this.getValue("asin")}set asin(r){return this.setValues("asin",r)}get audience(){return this.getValues("audience")}set audience(r){return this.setValues("audience",r)}get brand(){return this.getValue("brand")}set brand(r){return this.setValues("brand",r)}get category(){return this.getValues("category")}set category(r){return this.setValues("category",r)}get color(){return this.getValue("color")}set color(r){return this.setValues("color",r)}get depth(){return this.getValue("depth")}set depth(r){return this.setValues("depth",r)}get gtin(){return this.getValue("gtin")}set gtin(r){return this.setValues("gtin",r)}get height(){return this.getValue("height")}set height(r){return this.setValues("height",r)}get image(){return this.getValue("image")}set image(r){return this.setValues("image",r)}get keywords(){return this.getValues("keywords")}set keywords(r){return this.setValues("keywords",r)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(r){return this.setValues("manufacturer",r)}get model(){return this.getValue("model")}set model(r){return this.setValues("model",r)}get mpn(){return this.getValue("mpn")}set mpn(r){return this.setValues("mpn",r)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(r){return this.setValues("negativeNotes",r)}get offers(){return this.getValues("offers")}set offers(r){return this.setValues("offers",r)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(r){return this.setValues("positiveNotes",r)}get productID(){return this.getValue("productID")}set productID(r){return this.setValues("productID",r)}get review(){return this.getValues("review")}set review(r){return this.setValues("review",r)}get size(){return this.getValue("size")}set size(r){return this.setValues("size",r)}get sku(){return this.getValue("sku")}set sku(r){return this.setValues("sku",r)}get weight(){return this.getValue("weight")}set weight(r){return this.setValues("weight",r)}get width(){return this.getValue("width")}set width(r){return this.setValues("width",r)}addOffer(r,n="CAD"){this._record=this.addValue("offers",new le(r,n))}static addOffer(r,n,i="CAD"){return Bd(r,n,i)}static toString(r){return on(r)}};function on(e){if(Array.isArray(e))return e.map(n=>on(n));let r="";return r+=`${s.getValue(e,"name")||""}`,r}function Bd(e,r,n){let i=new le(r,n);return i.itemOffered={"@id":e?.["@id"]},e=s.addValue(e,"itemOffered",i.record),record}var Nt=class extends ue{constructor(r){super(),this._defaultRecordType="ProductGroup",this._loadRecord(r),this._setValueIfString("name",r)}toString(){return an(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(r){return this.setValues("hasVariant",r)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(r){return this.setValues("productGroupID",r)}get variesBy(){return this.getValues("variesBy")}set variesBy(r){return this.setValues("variesBy",r)}addVariant(r){this.record=Ud(this.record,r)}generateVariants(r){this.record=Hd(this.record,r)}static toString(r){return an(r)}};function an(e){if(Array.isArray(e))return e.map(i=>an(i));let r="";r+=`${s.getValue(e,"name")||""}
`;let n=s.getValues(e,"hasVariant");for(let i of n)r+=" - "+ue.toString(i)+`
`;return r}function Ud(e,r){return e=s.addValues(e,"hasVariant",r),e}function Hd(e,r){if(Array.isArray(r)){let a={};for(let l of r)a[l.propertyID]=a?.[l.propertyID]||[],a[l.propertyID].push(a.value);r=a}let n=Md(r),i=Object.keys(n[0]);e=s.addValues(e,"variesBy",i);let o=w.getProperties("Product");for(let a of n){let l=JSON.parse(JSON.stringify(e));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":e?.["@id"]};let u=[];for(let d of Object.keys(a))u.push(a?.[d]),o.includes(d)?l=s.setValue(l,d,a[d]):l=w.addAdditionalProperty(l,d,a[d]);let c=w.getValue(l,"name")+" "+u.join(" ");l=w.setValue(l,"name",c),e=w.addValue(e,"hasVariant",l)}return e}function Md(e){return Object.keys(e).reduce((n,i)=>{let o=e[i],a=[];for(let l of n)for(let u of o)a.push({...l,[i]:u});return a},[{}])}var Pt=class extends w{constructor(r,n){super(),this._defaultRecordType="PropertyValue",this._loadRecord(r),this._setValueIfString("propertyID",r),this._setValueIfNotNull("value",n)}toString(){return $s(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(r){return this.setValues("propertyID",r)}get value(){return s.getValues("value")}set value(r){return this.setValues("value",r)}get unitCode(){return s.getValues("unitCode")}set unitCode(r){return this.setValues("unitCode",r)}get unitText(){return s.getValues("unitText")}set unitText(r){return this.setValues("unitText",r)}get minValue(){return s.getValues("minValue")}set minValue(r){return this.setValues("minValue",r)}get maxValue(){return s.getValues("maxValue")}set maxValue(r){return this.setValues("maxValue",r)}};function $s(e){if(Array.isArray(e))return e.map(n=>$s(n));let r="";return r+=`${s.getValue(e,"propertyID")||""}: ${s.getValue(e,"value")||""} ${s.getValue(e,"unitText")||""}`,r}var de=class extends O{constructor(r){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(r),this._setValueIfString("url",r),s.record_type(r)=="WebSite"){this.website=r;let n=r.record||r;n=JSON.parse(JSON.stringify(n)),n["@type"]="WebPage",this.record=n}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(r){return this.setValue("breadcrumb",r)}addBreadcrumb(r,n){let i=this.breadcrumb||[];i?.record_type!="BreadcrumbList"&&(i=new ae(i)),i.add({"@type":"WebPage",url:r,name:n}),this.breadcrumb=i}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(r){return this.setValues(this._record,"mainContentOfPage",r)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(r){return this.setValues(this._record,"primaryImageOfPage",r)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(r){return this.setValues(this._record,"relatedLink",r)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(r){return this.setValues(this._record,"reviewedBy",r)}get significantLink(){return this.getValues("significantLink")}set significantLink(r){return this.setValues(this._record,"significantLink",r)}get specialty(){return this.getValues("specialty")}set specialty(r){return this.setValues(this._record,"specialty",r)}get WPHeader(){return this.record=Je(this.record,"WPHeader"),z(this.record,"WPHeader")}set WPHeader(r){this.record=q(this.record,"WPHeader",r)}get WPFooter(){return this.record=Je(this.record,"WPFooter"),z(this.record,"WPFooter")}set WPFooter(r){this.record=q(this.record,"WPFooter",r)}get WPSideBar(){return this.record=Je(this.record,"WPSideBar"),z(this.record,"WPSideBar")}set WPSideBar(r){this.record=q(this.record,"WPSideBar",r)}get Table(){return z(this.record,"Table")}set Table(r){this.record=q(this.record,"Table",r)}addHeaderLink(r,n){this.record=ks(this.record,r,n)}addFooterLink(r,n){this.record=Ss(this.record,r,n)}domain(){return _s(this.url)}get html(){return this._html}set html(r){this._html=r}get jsonld(){return this._jsonld}set jsonld(r){this._jsonld=Ed(r,this.url)}static getWPHeader(r){return z(r,"WPHeader")}static getWPFooter(r){return z(r,"WPFooter")}static getWPSideBar(r){return z(r,"WPSideBar")}static getTable(r){return z(r,"Table")}static setWPHeader(r,n){return q(r,"WPHeader",n)}static setWPFooter(r,n){return q(r,"WPFooter",n)}static setWPSideBar(r,n){return q(r,"WPSideBar",n)}static setTable(r,n){return q(r,"Table",n)}static addHeaderLink(r,n,i){return ks(r,n,i)}static addFooterLink(r,n,i){return Ss(r,n,i)}static getDomain(r){return _s(s.getValue(r,"url")||r)}};function Je(e,r){let i=s.getValues(e,"hasPart").find(o=>s.getValue(o,"@type")==r);return i||(i={"@type":r,hasPart:[]},e=s.addValue(e,"hasPart",i)),e}function z(e,r){return s.getValues(e,"hasPart").find(o=>s.record_type(o)==r)}function q(e,r,n){let i=s.getValues(e,"hasPart");return i=i.filter(o=>s.record_type(o)!=r),i.push(n),e=s.setValues(e,"hasPart",i),e}function ks(e,r,n){e=Je(e,"WPHeader");let i={"@type":"WebPage",name:n,url:r},o=z(e,"WPHeader");return o=s.addValue(o,"hasPart",i),e=q(e,"WPHeader",o),e}function Ss(e,r,n){e=Je(e,"WPFooter");let i={"@type":"WebPage",name:n,url:r},o=z(e,"WPFooter");return o=s.addValue(o,"hasPart",i),e=q(e,"WPFooter",o),e}function _s(e){try{let r=new Url(e).hostname;return r=r.replace(/^www\./,""),r}catch{return}}function Ed(e,r){let n=new s.DB;n.post(e);let i=n.records,o=[];if(Ld(e)=="Product"){let u=i.filter(b=>s.record_type(b)=="Product")[0];o.push({replacee:s.record_id(u),replacer:r+"#product"}),u=s.setValue(u,"url",r);let c=s.getValues(u,"brand");c=c.map(b=>b?.["@type"]?{"@type":"brand",name:b}:b),u=s.setValues(u,"brand",c);let d=i.filter(b=>s.record_type(b)=="Offer");d=d.map(b=>s.setValues(b,"itemOffered",s.ref(u))),u=s.setValues(u,"offers",d);let g=i.filter(b=>s.record_type(b)=="Review");d=d.map(b=>s.setValues(b,"itemReviewed",s.ref(u))),u=s.setValues(u,"review",g);let y=i.filter(b=>s.record_type(b)=="AggregateRating");return y=y.map(b=>s.setValues(b,"itemReviewed",s.ref(u))),u=s.setValues(u,"aggregateRating",y),u=s.replaceIds(u,o),u}return e}function Ld(e){if(e=s.toArray(e),e=e.filter(n=>s.record_type(n)!="BreadcrumbList"),e.length==1&&s.record_type(e[0]!="WebPage"))return e[0]?.["@type"];if(e.length==1&&s.record_type(e[0]=="WebPage")&&(e=s.getValues(e,"mainEntity")),e.filter(n=>s.record_type(n)=="Product").length==1)return"Product"}var vt=class extends de{constructor(r){super(),this._defaultRecordType="WebSite",this._loadRecord(r),this._setValueIfString("url",r)}get issn(){return this.getValues("issn")}set issn(r){return this.setValues("issn",r)}getWebPage(r,n){let i=new de(this);return i.url=r,i.name=n,i}domain(){return Is(this.url)}static getDomain(r){return Is(s.getValue(r,"url")||r)}};function Is(e){try{let r=new Url(e).hostname;return r=r.replace(/^www\./,""),r}catch{return}}var Ct=class extends w{constructor(r){super(),this._defaultRecordType="WebAPI",this._loadRecord(r),this._setValueIfString("url",r)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(r){return this.setValue("documentation",r)}};var _={get:w.toThing,toThing:w.toThing,Action:Fe,AddAction:bt,AppendAction:At,BrandDesign:kt,Conversation:It,CreativeWork:O,DataFeed:Tt,DataFeedItem:Se,DeleteAction:xt,InsertAction:wt,ItemList:ae,Message:H,Offer:le,Product:ue,ProductGroup:Nt,PropertyValue:Pt,Thing:w,PrependAction:$t,ReplaceAction:Vt,UpdateAction:J,WebAPI:Ct,WebPage:de,WebSite:vt,format:Br,toThing:Wd},Fd=_;function Wd(e){let r=s.record_type(e);return _?.[r]?new _[r](e):new _.Thing(e)}var dn={};m(dn,{Button:()=>zd,DropdownMenu:()=>Ts,MenuItem:()=>qd,escapeHtml:()=>te});function te(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function zd({children:e="",variant:r="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${a[r]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${e}
    </button>
  `.trim()}function un(e,r=""){return!e||typeof e!="object"?"":Object.entries(e).map(([n,i])=>{let o=r?`${r}[${n}]`:n;return typeof i=="object"&&i!==null?un(i,o):`<input type="hidden" name="${te(o)}" value="${te(String(i))}">`}).join("")}function Ts({label:e="",items:r=[],align:n="end",variant:i="ghost",size:o="icon",className:a="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},c={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},d={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},g=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),y=e?`<span class="mr-2">${te(e)}</span>${g}`:`${g}<span class="sr-only">Toggle menu</span>`;r=r||[],r=(Array.isArray(r),r);let b=r.map($=>{if($.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let E=un($.object),ne=$.disabled?"disabled":"";return`
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
  `.trim()}function qd(e){if(item.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let r=un(item.object),n=item.disabled?"disabled":"";return`<form method="POST" action="${te(h.getUrl(item)||"")}" class="m-0 p-0">
          ${r}
          <button
            type="submit"
            ${n}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${te(h.getName(item)||"")}
          </button>
        </form>`}var Z={};m(Z,{components:()=>p});var cn={};m(cn,{Accordion:()=>Gd});function Gd({items:e=[],className:r=""}){let n=e.map(i=>`
      <details class="group border-b border-border py-2" ${i.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${i.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${i.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${r}">${n}</div>`.trim()}var fn={};m(fn,{Alert:()=>Kd});function Kd({title:e,description:r="",variant:n="default",className:i=""}){let o={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${o[n]||o.default} ${i}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${e}</h5>
        ${r?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${r}</div>`:""}
      </div>
    `.trim()}var pn={};m(pn,{Badge:()=>Ns,Badges:()=>Yd});function Ns({text:e,variant:r="default",className:n=""}){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${i[r]||i.default} ${n}">
        ${e}
      </div>
    `.trim()}function Yd({text:e,variant:r="default",className:n=""}){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof e=="string"&&(e=[e]),`
      <div class="flex flex-wrap gap-2">
        ${e.map(o=>Ns({text:o,variant:r})).join("")}
      
      </div>
    `.trim()}var gn={};m(gn,{Breadcrumb:()=>Xd,BreadcrumbEllipsis:()=>Qd,BreadcrumbItem:()=>Cs,BreadcrumbLink:()=>js,BreadcrumbList:()=>vs,BreadcrumbMain:()=>Ps,BreadcrumbPage:()=>Zd,BreadcrumbSeparator:()=>Rs});function Xd({urls:e,titles:r,links:n}){let i=new _.ItemList(n);if(e)for(let l=0;l<e.length;l++){let u=r?.[l]||e[l].split("/")?.[e[l].split("/").length-1]||"na";i.add({"@type":"WebPage",url:e[l],name:u})}let o=i.items;return console.log("items",o),Ps({children:vs({children:o.map(l=>Cs({children:js({href:l?.url,children:l?.name})})).join(Rs())})})}function Ps({children:e="",className:r="",attrs:n=""}={}){return`
      <nav aria-label="breadcrumb" class="${r}" ${n}>
        ${e}
      </nav>
    `.trim()}function vs({children:e="",className:r="",attrs:n=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${r}" ${n}>
        ${e}
      </ol>
    `.trim()}function Cs({children:e="",className:r="",attrs:n=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${r}" ${n}>
        ${e}
      </li>
    `.trim()}function js({children:e="",href:r="#",className:n="",attrs:i=""}={}){return`
      <a href="${r}" class="transition-colors hover:text-foreground ${n}" ${i}>
        ${e}
      </a>
    `.trim()}function Zd({children:e="",className:r="",attrs:n=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${r}" ${n}>
        ${e}
      </span>
    `.trim()}function Rs({children:e,className:r="",attrs:n=""}={}){let i=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${r}" ${n}>
        ${e!==void 0?e:i}
      </li>
    `.trim()}function Qd({className:e="",attrs:r=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${e}" ${r}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var mn={};m(mn,{Button:()=>ec});function ec({text:e,variant:r="primary",size:n="default",className:i="",attrs:o=""}){let a={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[r]||a.primary} ${l[n]||l.default} ${i}" ${o}>
        ${e}
      </button>
    `.trim()}var hn={};m(hn,{Card:()=>tc});function tc({title:e="",description:r="",url:n,media:i="",header:o="",content:a="",footer:l="",className:u="",attrs:c="",options:d={}}){return`
  
    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${u}" ${c}>

      ${rc(o)}

      ${lc(i)}

      ${nc(`

        ${ic(`

            ${oc(e,n)}
            
            ${ac(r)}

        `)}

      `)}

      ${sc(l)}

    </div>
  `}function rc(e){return!e||e.trim().length==0?"":`
    <header class="card-header  ${e?.record?.className||e?.className||""} ">${e?.htmlValue||e?.value||e||""}</header>

  `}function nc(e,r){return!e||e.trim().length==0?"":`
    <section class="card-main  ${e?.record?.className||e?.className||""} ">${e?.htmlValue||e?.value||e||""}</section>

  `}function ic(e,r){return!e||e.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mb-6 ${e?.record?.className||e?.className||""} ">${e?.htmlValue||e?.value||e||""}</div>

  `}function sc(e,r){return!e||e.trim().length==0?"":`
    <footer class="card-footer mt-auto align-bottom ${e?.record?.className||e?.className||""} ">${e?.htmlValue||e?.value||e||""}</footer>
  `}function oc(e,r,n){return!e||e.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${e?.record?.className||e?.className||""} ">
    <a href="${r||""}">
     ${e?.htmlValue||e?.value||e||""}
    </a>
    </h3>
     `}function ac(e,r){return!e||e.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${e?.record?.className||e?.className||""}">${e?.htmlValue||e?.value||e||""}</p>
  `}function lc(e,r){return!e||e.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${e?.record?.className||e?.className||""} ">
        ${e?.htmlValue||e?.value||e||""}
    </div>
  `}var yn={};m(yn,{Dialog:()=>uc});function uc({id:e,title:r,description:n="",content:i,footer:o="",className:a=""}){return`
      <dialog id="${e}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${a}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${r}</h3>
            ${n?`<p class="text-sm text-muted-foreground">${n}</p>`:""}
          </div>
          <div class="py-2 text-sm">
            ${i}
          </div>
          ${o?`<div class="flex justify-end gap-3 pt-4">${o}</div>`:""}
        </div>
      </dialog>
    `.trim()}var bn={};m(bn,{Footer:()=>dc});function dc({brand:e="Acme Inc",copyright:r="",columns:n=[],className:i=""}){r=r||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let o=n.map(a=>`
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
              <div class="font-bold text-lg tracking-tight">${e}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${o}
          </div>
          <div class="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>${r}</div>
            <div class="flex gap-4">
              <a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `.trim()}var xn={};m(xn,{Header:()=>cc});function cc({brand:e="",navItems:r=[],actions:n="",className:i=""}){let o=r.map((a,l)=>{if(a.dropdown&&a.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
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
              ${e}
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
    `.trim()}var Vn={};m(Vn,{H1:()=>fc,H2:()=>pc,H3:()=>gc,H4:()=>mc,H5:()=>hc,H6:()=>yc,Heading:()=>ce,P:()=>bc,Text:()=>xc});function fc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"1",options:r,record_id:n,propertyID:i,className:o})}function pc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"2",options:r,record_id:n,propertyID:i,className:o})}function gc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"3",options:r,record_id:n,propertyID:i,className:o})}function mc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"4",options:r,record_id:n,propertyID:i,className:o})}function hc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"5",options:r,record_id:n,propertyID:i,className:o})}function yc(e,{options:r,record_id:n,propertyID:i,className:o}){return ce({title:e,level:"6",options:r,record_id:n,propertyID:i,className:o})}function ce({title:e,level:r,options:n,record_id:i,propertyID:o,className:a}){return r=String(r||1),`
    <h${r} 
    data-id="${i||""}" data-property-id="${o}" 
    class="break-all ${a||""}"
    >${e}</h${r}>
    
    `}function bc(e,r,{options:n,record_id:i,propertyID:o,className:a}){return`
      <p data-id="${i||""}" data-property-id="${o}" class="${r!==void 0?`line-clamp-${r??1}`:""} ${a??""} "
      >${e||""}</p>
    
    `}function xc(e,r,{options:n,record_id:i,propertyID:o,className:a}){return`
      <p data-id="${i||""}" data-property-id="${o}" class="${r!==void 0?`line-clamp-${r??1}`:""} ${a??""} "
      >${e||""}</p>
    
    `}var wn={};m(wn,{ImageModal:()=>Vc});function Vc({src:e,alt:r="",caption:n="",aspectRatio:i="aspect-video",className:o="",imageClassName:a="",attrs:l=""}){let u=`img-modal-${Math.random().toString(36).substring(2,9)}`;return`
    <!-- Thumbnail Trigger -->
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${o}" 
      ${l}
    >
      <button 
        type="button"
        onclick="document.getElementById('${u}').showModal()"
        aria-label="Enlarge image: ${r||"View image"}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full ${i} overflow-hidden bg-muted">
          <img 
            src="${e}" 
            alt="${r}" 
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
              src="${e}" 
              alt="${r}" 
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
  `.trim()}var An={};m(An,{Input:()=>M,InputCheckbox:()=>wc,InputDate:()=>Ac,InputDateTime:()=>kc,InputEmail:()=>Sc,InputNumber:()=>$c,InputPassword:()=>_c,InputTel:()=>Ic,InputText:()=>Tc,InputTime:()=>Nc,InputUrl:()=>Pc});function M({label:e="",type:r="text",placeholder:n="",value:i="",id:o="",className:a="",attrs:l=""}){let u=o?`id="${o}"`:"";return`
      <div class="space-y-2 w-full">
        ${e?`<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${o?`for="${o}"`:""}>${e}</label>`:""}
        <input 
          type="${r||"text"}" 
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
    `.trim()}function wc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"checkbox",label:e,value:r,propertyID:n,id:i,className:o})}function Ac({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"date",label:e,value:r,propertyID:n,id:i,className:o})}function $c({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"number",label:e,value:r,propertyID:n,id:i,className:o})}function kc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"datetime-local",label:e,value:r,propertyID:n,id:i,className:o})}function Sc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"email",label:e,value:r,propertyID:n,id:i,className:o})}function _c({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"password",label:e,value:r,propertyID:n,id:i,className:o})}function Ic({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"tel",label:e,value:r,propertyID:n,id:i,className:o})}function Tc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"text",label:e,value:r,propertyID:n,id:i,className:o})}function Nc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"time",label:e,value:r,propertyID:n,id:i,className:o})}function Pc({label:e="",value:r="",propertyID:n="",id:i="",className:o=""}){return M({type:"url",label:e,value:r,propertyID:n,id:i,className:o})}var $n={};m($n,{Pagination:()=>vc,PaginationComponent:()=>Os,PaginationContent:()=>Bs,PaginationEllipsis:()=>Ms,PaginationItem:()=>ze,PaginationLink:()=>jt,PaginationNext:()=>Hs,PaginationPrevious:()=>Us,buildPaginationUrl:()=>Ds});function Ds(e,r,n){try{let i=new URL(e,typeof window<"u"?window.location.href:"http://localhost");return i.searchParams.set("limit",String(r)),i.searchParams.set("offset",String(n)),i.pathname+i.search+i.hash}catch{return`${String(e).split("?")[0]}?limit=${r}&offset=${n}`}}function Os({children:e="",className:r="",attrs:n=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${r}"
      ${n}
    >
      ${e}
    </nav>
  `.trim()}function Bs({children:e="",className:r="",attrs:n=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${r}" ${n}>
      ${e}
    </ul>
  `.trim()}function ze({children:e="",className:r="",attrs:n=""}={}){return`
    <li class="${r}" ${n}>
      ${e}
    </li>
  `.trim()}function jt({href:e="#",isActive:r=!1,size:n="icon",children:i="",className:o="",attrs:a=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",c=r?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${e}"
      aria-current="${r?"page":"false"}"
      class="${u} ${l[n]||l.icon} ${c} ${o}"
      ${a}
    >
      ${i}
    </a>
  `.trim()}function Us({href:e="#",disabled:r=!1,className:n="",attrs:i=""}={}){return jt({href:e,size:"default",className:`gap-1 pl-2.5 ${r?"pointer-events-none opacity-50":""} ${n}`,attrs:`${r?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function Hs({href:e="#",disabled:r=!1,className:n="",attrs:i=""}={}){return jt({href:e,size:"default",className:`gap-1 pr-2.5 ${r?"pointer-events-none opacity-50":""} ${n}`,attrs:`${r?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function Ms({className:e="",attrs:r=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${e}"
      ${r}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function vc({url:e,total:r,limit:n=10,offset:i=0,siblingCount:o=1,className:a="",attrs:l=""}={}){let u=Math.ceil(r/n)||1,c=Math.floor(i/n)+1,d=L=>{let F=(L-1)*n;return Ds(e,n,F)},g=(L,F)=>{let se=F-L+1;return Array.from({length:se},(qe,Ge)=>L+Ge)},y=o+5,b=[];if(y>=u)b=g(1,u);else{let L=Math.max(c-o,1),F=Math.min(c+o,u),se=L>2,qe=F<u-2,Ge=1,Vo=u;if(!se&&qe){let Ie=3+2*o;b=[...g(1,Ie),"ellipsis",u]}else if(se&&!qe){let Ie=3+2*o,zn=g(u-Ie+1,u);b=[Ge,"ellipsis",...zn]}else if(se&&qe){let Ie=g(L,F);b=[Ge,"ellipsis",...Ie,"ellipsis",Vo]}}let $=[],E=c>1,ne=E?d(c-1):"#";$.push(ze({children:Us({href:ne,disabled:!E})})),b.forEach(L=>{if(L==="ellipsis")$.push(ze({children:Ms()}));else{let F=Number(L),se=F===c;$.push(ze({children:jt({href:d(F),isActive:se,children:String(F)})}))}});let ie=c<u,Bt=ie?d(c+1):"#";$.push(ze({children:Hs({href:Bt,disabled:!ie})}));let Ut=Os({className:a,attrs:l,children:Bs({children:$.join("")})});return Ut=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${Ut}
    </div>`,Ut}var kn={};m(kn,{Section:()=>Cc,SectionHeader:()=>jc});function Cc({children:e="",variant:r="default",container:n="default",className:i="",containerClassName:o="",attrs:a=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},c=l[r]||l.default,d=u[n]!==void 0?u[n]:u.default,g=n!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${d} ${o}".trim()>${e}</div>`:e;return`
    <section class="w-full bg-background text-foreground ${c} ${i}" ${a}>
      ${g}
    </section>
  `.trim()}function jc({title:e="",description:r="",align:n="left",className:i=""}={}){let o={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${o[n]||o.left} ${i}">
      ${e?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${e}</h2>`:""}
      ${r?`<p class="text-lg text-muted-foreground max-w-2xl">${r}</p>`:""}
    </div>
  `.trim()}var Sn={};m(Sn,{Table:()=>Dc,TableBody:()=>Fs,TableCell:()=>G,TableCellCenter:()=>Mc,TableCellLeft:()=>Hc,TableCellLink:()=>Lc,TableCellNumber:()=>Ec,TableCellRight:()=>Js,TableCellText:()=>Fc,TableColumnHeader:()=>Ls,TableColumnHeaderCenter:()=>Uc,TableColumnHeaderLeft:()=>Oc,TableColumnHeaderRight:()=>Bc,TableFooter:()=>zs,TableHeader:()=>Es,TableRow:()=>Ws,getTable:()=>Rc});function Rc({headers:e=[],rows:r=[],className:n=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${n||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${Es(e.map(i=>Ls(i)))}
      
        ${Fs(r.map(i=>Ws(i.map(o=>G(o)))))}
        
        ${zs()}

      </table>

    </div>
  
  
  `}function Dc(e,r,n,i,o=""){return Array.isArray(e)&&(e=e.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${o||""}">
      
      <table data-id="${r||""}" data-property-id="${n||""}" class="w-full caption-bottom text-sm">

        ${e}

      </table>

    </div>
  
  
  `}function Es(e,r){return e?(Array.isArray(e)&&(e=e.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${e}
        </tr>
  </thead>
  `):""}function Ls(e,r){return e||(e=""),`
    <td class="p-4 align-middle pr-0 ${e?.table?.className||e?.className||""}">
      ${e?.htmlValue??e?.value??e}
    </td>
  `}function Oc(e,r){return G(e,r)}function Bc(e,r){return r=r+" text-right ",G(e,r)}function Uc(e,r){return r=r+" text-center ",G(e,r)}function Fs(e,r,n,i){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${e}</tbody>
  
  `}function Ws(e,r,n,i){return!e||(Array.isArray(e)&&(e=e.join(" ")),e.trim().length==0)?"":`
  
    <tr 
      data-id="${r||""}" 
      data-property-id="${n||""}" 
      class="${i||""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${e}</tr>
  `}function G(e,r,n,i){return e||(e=""),Array.isArray(e)&&(e=e.join(" ")),`
    <td 
      data-id="${r||""}" 
      data-property-id="${n||""}" 
      class="p-4 align-middle ${i||""}"
    >${e}</td>
  `}function Hc(e,r,n,i){return G(e,r,n,i)}function Js(e,r,n,i){return i=i+" text-right ",G(e,r,n,i)}function Mc(e,r,n,i){return i=i+" text-center ",G(e,r,n,i)}function Ec(e,r,n,i,o,a){return e=s.toNumber(e),e=V.number.format(e,r),Js(`
      
    ${e||""}
    ${n||""}
  `,"krnumber h-min font-mono")}function Lc(e,r,n,i,o,a){return G(`
      
    <a data-id="${i||""}" data-property-id="${o||""}"  title="${r||""}" href="${e||""}" target="_blank" rel="noopener noreferrer">${r||e||""}</a>
    ${n||""}
  `,"krurl max-w-2xs truncate")}function Fc(e,r,n,i){let o=`
    <div 
      data-id="${r||""}" 
      data-property-id="${n||""}"  
      title="${e}" 
      class=" line-clamp-4"
    >${e??""}</div>
  `;return G(o)}function zs(e,r,n,i){return e?`
    
      <tfoot>
      
        ${e}

      </tfoot>
    
    `:""}var _n={};m(_n,{Webpage:()=>Wc});function Wc({title:e,headContent:r,header:n,footer:i,content:o,breadcrumb:a}){return`
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


      ${r||""}
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
  `.trim()}var In={};m(In,{CardGrid:()=>Jc});function Jc({nbOfColumns:e,content:r}){let n=String(e??2),i=String(e??3),o=String(e??4);return e=String(e??1),`
    <div class="grid grid-cols-${e} gap-6 sm:grid-cols-${n} lg:grid-cols-${i} xl:grid-cols-${o}">
      ${r}
    </div>
  `}var Tn={};m(Tn,{JsonEditor:()=>qc});function qs({children:e="",variant:r="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[r]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${e}
    </button>
  `.trim()}function zc({title:e="",description:r="",children:n="",footer:i="",className:o="",attrs:a=""}={}){return`
    <div class="rounded-xl border bg-card text-card-foreground shadow ${o}" ${a}>
      ${e||r?`
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${e?`<h3 class="font-semibold leading-none tracking-tight text-xl">${e}</h3>`:""}
          ${r?`<p class="text-sm text-muted-foreground">${r}</p>`:""}
        </div>
      `:""}
      <div class="p-6">${n}</div>
      ${i?`<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${i}</div>`:""}
    </div>
  `.trim()}function qc({id:e=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:r="",initialData:n={title:"Sample Record",active:!0},headers:i={"Content-Type":"application/json"},className:o="",attrs:a=""}={}){let l=e.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof n=="string"?n:JSON.stringify(n,null,2),c=JSON.stringify(i,null,2),d=`
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
          value="${r}"
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
            ${qs({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
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
        ${qs({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
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
  `.trim();return zc({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:g,className:o,attrs:a})}var Nn={};m(Nn,{Modal:()=>Gc});function Gc(e,r,n){let i="modal_"+s.randomUUID();return`
    
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
            
            ${r||""}
          </div>

         
        </div>
      </dialog>
    </div>
    
    
    `}var Pn={};m(Pn,{DropdownMenu:()=>Yc,DropdownMenuIcon:()=>Xc,Menu:()=>Kc,MenuItemLink:()=>Zc,MenuItemPost:()=>Qc,MenuItemSeparator:()=>ef});function Kc(e){return`
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${e}
      </div>
   

    `}function Yc(e,r,n){return`
    <details class="relative inline-block text-left ${n||""}" >
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden "
      >
        ${e}
      </summary>

      <div class="absolute  z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${r}
      </div>
    </details>

    `}function Xc(){return`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim()}function Zc(e,r,n,i){return`
    
        <a href="${n||""}">${e||""}${r}</a>

    `}function Qc(e,r,n,i){return`<form method="POST" action="${n||""}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(i)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${r||""}
          </button>
        </form>`}function ef(){return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>'}var vn={};m(vn,{Kanban:()=>tf,KanbanBody:()=>nf,KanbanCard:()=>cf,KanbanCardBody:()=>pf,KanbanCardFooter:()=>gf,KanbanCardHeader:()=>ff,KanbanColumn:()=>af,KanbanColumnBody:()=>uf,KanbanColumnFooter:()=>df,KanbanColumnHeader:()=>lf,KanbanFooter:()=>sf,KanbanHeader:()=>rf,KanbanTitle:()=>of});function tf(e){return`
    
    <div class="kr-kanban bg-white p-6">
    ${e}
  </div>
    `}function rf(e){return`<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${e}
    </header>`}function nf(e){return`<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${e}
    </div>`}function sf(e){return`<footer class="kr-kanban-footer">
    ${e}
    </footer>`}function of(e,r){return`<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${e}</h1>
      <p class="text-sm text-neutral-500">${r}</p>
    </div>`}function af(e){return`
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${e}
        </section>

    
    `}function lf(e){return`
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${e}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `}function uf(e){return`
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${e}
          </div>

    `}function df(e){return`
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${e}
      </footer>
    `}function cf(e){return`
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${e}
        </article>
    `}function ff(e){return`
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${e}</span>
   
    `}function pf(e){return`
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${e}</p>
        
    `}function gf(e){return`
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${e}
          </div>
    `}var p={...cn,...fn,...pn,...gn,...mn,...hn,...In,...yn,...dn,...bn,...xn,...wn,...vn,...Pn,...Nn,...An,...Tn,...$n,...kn,...Sn,...Vn,..._n};var On={};m(On,{Card:()=>Af,Cards:()=>$f});var Dn={};m(Dn,{Media:()=>fe});var Dt={};m(Dt,{fixedLength:()=>Rt,textCenter:()=>Cn});function Rt(e,r=void 0,n=0){let i=e;if(s.isArray(e)){let a=e.length;a==0&&(e=""),a==1&&(e=e[0]),a>1&&(e=`(${e.length})`)}let o=V.getDataType(e);if(o=="Undefined"&&(e=""),o=="Jsonld"&&(e=e?.["@id"]),o=="Number"&&(e=V.toNumber(e),e=e.toFixed(n),e=e.padStart(r," ")),o=="Date"&&(e=V.toDate(e),e=new Intl.DateTimeFormat("en-CA").format(e)),e=e===void 0?"":e,r!=null&&e.length>r){let a="",l=Math.round(r/3),u=r-l-3;a+=e.slice(0,l),a+="...",a+=e.slice(-u),e=a}return r!=null&&(e=e.padEnd(r," ")),e}function Cn(e,r,n=" "){e=e??"",e=String(e);let i=Math.floor((r-e.length)/2);return e=e.padStart(e.length+i,n).padEnd(r,n),e}var Rn={};m(Rn,{toTextRecord:()=>mf,toTextTable:()=>bf});function mf(e,r=80){let n=hf(e,r),i=yf(e),o="";o+=Gs(n),o+=`
`,i.length>0?o+=i.map(a=>Ks(a,n)).join(""):o+=`(no records)
`}function hf(e,r=80){let i=jn(e).map(l=>(l||"").length),o=Math.max(...i);return[{t:"Property ID",p:"propertyID",w:Math.max(o,11)},{t:"Value",p:"value",w:r-Math.max(o,11)}]}function yf(e){let r=jn(e),n=[];for(let i of r){let o={"@type":"PropertyValue",propertyID:i,value:V.getValues(e,i)};n.push(o)}return n}function bf(e,r,n=!0,i=80){r=xf(e,r,n),e=Vf(e,r,n);let o="";if(o+=Gs(r),o+=`
`,e.length>0){let a=e.map(l=>Ks(l,r));o+=a.join("")}else o+=Cn("(no records to display.)",i);return o}function xf(e,r,n=!0){r=s.toArray(r),(!r||r.length==0)&&(r=jn(e).map(o=>({title:o,propertyID:o,width:o.length}))),(n=!0)&&(r.map(o=>o?.propertyID||o?.p).includes("position")||(r=[{t:"#",p:"position",w:4,r:0}].concat(r)));for(let i of r)i.title=i?.title||i?.t||i?.propertyID||i?.p||"",i.t=i.title,i.propertyID=i?.propertyID||i?.p||"",i.p=i.propertyID,i.width=i?.width||i?.w||i?.length||i?.l||title.length,i.width=Number(i.width),i.width=Math.max(i.width,i.title.length),i.w=i.width,i.length=i.width,i.l=i.width,i.rounding=i?.rounding||i?.r||0,i.rounding=Number(i.rounding),i.r=i.rounding;return r}function Vf(e,r,n=!0){if(e=s.toArray(e),!e||e.length==0)return[];if(e=JSON.parse(JSON.stringify(e)),n==!0)for(let[i,o]of e.entries())o.position=o?.position??i;return e}function Gs(e){let r="",n=[];for(let o of e){let a=`${Rt(o.title,o.width,o.rounding)}`;n.push(a)}r+=n.join(" "),r+=`
`;let i=[];for(let o of e){let a=`${"".padStart(o.width,"-")}`;i.push(a)}return r+=i.join(" "),r+=`
`,r}function Ks(e,r){let n="",i=[];for(let o of r){let a=s.getValues(e,o.propertyID),l=`${Rt(a,o.width,o.rounding)}`;i.push(l)}return n+=i.join(" "),n+=`
`,n}function jn(e){e=s.toArray(e);let r=e.map(n=>Object.keys(n));return r=r.flat(),r=[...new Set(r)],r=wf(r),r}function wf(e){e=s.toArray(e);let r=["position","@type","@id"];return e.sort((n,i)=>{if(n==i)return 0;for(let o of r){if(n==o&&i!=o)return-1;if(n!=o&&i==o)return 1}return n.startsWith("@")&&!i.startsWith("@")?-1:!n.startsWith("@")&&i.startsWith("@")?1:n<i?-1:1}),e}var Yh={...Dt,...Rn};function fe({url:e,record:r,options:n,layoutClasses:i,className:o,attrs:a}){let l=s.getValue(r,"contentUrl");return l?s.record_type(r)=="VideoObject"?`  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${s.getValue(r,"thumbnailUrl")}">
                    <source src="${l}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `:`
        
                    <div class="block-media  ">

          
                ${p.ImageModal({src:s.getImageUrl(r),alt:s.getImageName(r)})}
         
                    </div>

        `:""}function re({website:e,webpage:r,title:n,headContent:i,content:o,options:a}){r=new _.WebPage(r),e=new _.WebSite(e);let l={};l.title=n,l.title=l.title||s.getValue(r,"title"),l.title=l.title||s.getValue(r,"name"),l.title=l.title||s.getValue(e,"title"),l.title=l.title||s.getValue(e,"name"),l.headContent=i,l.breadcrumb=p.Breadcrumb({links:s.getValue(r,"breadcrumb")});let u=s.getValue(e,"about.name")??s.getValue(e,"name")??s.getValue(r,"about.name")??s.webpage(e,"name"),c=r.WPHeader.hasPart||[],d=r.WPFooter.hasPart||[];return c=Array.isArray(c)?c:[c],d=Array.isArray(d)?d:[d],l.header=p.Header({brand:u,navItems:c}),l.footer=p.Footer({brand:u,navItems:d}),l.content=o,p.Webpage(l)}function Ys({website:e,webpage:r,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:c,offset:d,limit:g,options:y}){return a=a??"",a+=P.Cards({url:i,records:l,offset:d,limit:g,nbOfColumns:3,options:y}),re({website:e,webpage:r,title:n,headContent:o,content:a,options:y})}function Af(e,r,n,i=!0){let o=_.format.getTitle1(e),a=_.format.getContent(e),l=s.getRecordUrl(e,r),u=i==!0?_.format.imageUrl(e):void 0;return p.Card({title:o,description:a,url:l,media:u,className:n})}function $f({url:e,records:r,offset:n,limit:i,orderBy:o,orderDirection:a,nbOfColumns:l,includePagination:u,options:c,layoutClasses:d,className:g,attrs:y}){n=Number(n),n=isNaN(n)?0:n,i=Number(i),i=isNaN(i)?20:i;let b=new _.ItemList(r);b=b.record,b.numberOfItems=b?.numberOfItems??b.itemListElement.length,b=Ot({record:b,options:c}),b.itemListElement=b.itemListElement.filter(ie=>s.getValue(ie,"position")>=n&&s.getValue(ie,"position")<n+i);let $="";for(let ie of s.getValues(b,"itemListElement")){let Bt=s.getValue(ie,"item");$+=kf({url:e,item:Bt,options:c})}$=p.CardGrid({content:$,nbOfColumns:l});let E=p.Pagination({url:e,limit:i,offset:n,total:b.numberOfItems,options:c});return`

        <div class="${d} ${g}" ${y}>
        <div class="flex-1">
            ${$}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${E}
        </div>
        </div>

    `}function kf({url:e,item:r,options:n}){let i=s.getImageUrl(r),o=s.getImageName(r),a=s.getValues(r,"keywords");a=a.map(d=>`<a href="/?keywords=${d}">${d}</a>`);let l=p.Badges({text:a,variant:"secondary"}),u={title:s.getValue(r,"name"),url:s.getRecordUrl(r,n?.baseUrl),description:s.getValue(r,"description"),footer:l,image:s.getImageUrl(r),imageAlt:s.getImageName(r),media:fe({record:r,options:n})};return p.Card(u)}var Bn={};m(Bn,{Input:()=>_f});function _f({record:e,propertyID:r,value:n}){return p.Input({value:n})}var Hn={};m(Hn,{Table:()=>If,TableBody:()=>Zs,TableCell:()=>eo,TableHeader:()=>Xs,TableRow:()=>Qs,getDataType:()=>to,getHeadersFromProperties:()=>Un,getPropertiesFromRecords:()=>_e});function If(e,r,n,i,o,a){let l=e;n=n||_e(l),i=i||Un(n);let u=[];return o==!0&&(i=["Thumbnail"].concat(i),n=["item"].concat(n),u=["thumbnail"].concat(u)),a==!0&&(i=["#"].concat(i),n=["position"].concat(n),u=["position"].concat(u)),p.Table(Xs(l,n,i,u)+Zs(l,n,r,u))}function Xs(e,r,n,i){return r=r||_e(e),n=n||Un(r),i=i||[],r=r||_e(e),p.TableHeader(n.map((o,a)=>{switch(i?.[a]){case"number":return p.TableColumnHeaderRight(o);default:return p.TableColumnHeader(o)}}).join(" "))}function Zs(e,r,n,i){r=r||_e(e),i=i||[];let o=s.getValues(new _.ItemList(e),"itemListElement");return p.TableBody(o.map(a=>Qs(a,r,n,i)).join(" "))}function Qs(e,r,n,i){return r=r||_e(e),i=i||[],p.TableRow(r.map((l,u)=>eo(e,s.getValues(e,l),l,n,i,u)).join(" "),s.record_id(e),void 0,"kr-listitem")}function eo(e,r,n,i,o,a){let l=r,u=n,c=e;if(l=s.isArray(l)&&l.length==0?"":l,l=s.isArray(l)&&l.length==1?l[0]:l,(u||"").endsWith("@type")){let d=V.url.getUrl(i||"","/"+l);return p.TableCellLink(d,l)}if((u||"").endsWith("@id")){let d=s.getRecordUrl(c,i);return p.TableCellLink(d,l)}switch(o?.[a]||to(l)){case"array":return p.TableCellCenter(`(${l.length})`);case"text":return p.TableCellText(l);case"number":return p.TableCellNumber(l,2);case"link":return p.TableCellLink(l,l);case"thumbnail":return p.TableCell(fe({record:l}));case"position":return p.TableCellNumber(l,0);case"object":return p.TableCellLink(s.getRecordUrl(l,i),s.record_id(l));default:return p.TableCellText(l)}}function _e(e){let n=s.getValues(e,"itemListElement").map(o=>s.getValue(o,"item")),i=[...new Set(n.flatMap(Object.keys))];return i=i.filter(o=>o.startsWith("@")===!1),i=i.map(o=>"item."+o),i=["item.@type","item.@id"].concat(i),i}function Un(e){e=e||[];let r=e.map(n=>n.split(".")?.[1]||n);return r=r.map(n=>n=="position"?"No":n),r=r.map(n=>({htmlValue:n,table:{className:"capitalize"}})),r}function to(e){return e=s.isArray(e)&&e.length==0?void 0:e,e=s.isArray(e)&&e.length==1?e[0]:e,e?V.isNumber(e)?"number":V.isUrl(e)?"link":V.isDate(e)?"date":V.isArray(e)?"array":V.isObject(e)?"object":"text":"text"}var Mn={};m(Mn,{Record:()=>Tf});function Tf(e,r,n,i="",o="",a=!1,l=0,u={}){e=s.removeCircularRefs(e),n=n||Object.keys(e),u.baseUrl=r||u?.baseUrl;let c={rows:[]},d=ro({record:e,baseUrl:r,properties:n,className:i,attrs:o,expandAll:a,depth:0,options:u});return`

        <div class="space-y-4 ${i||""}" ${o||""}>
            <div class="flex-1">
                ${fe({record:e,options:u})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${p.JsonEditor({initialData:e,endpoint:r})}
              </details>
            </div>
        </div>

    `}function ro({record:e,properties:r,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){r=r||Object.keys(e);let u=r.filter(y=>y.startsWith("@")),c=r.filter(y=>!y.startsWith("@"));r=u.sort().concat(c.sort());let d={rows:[]};return p.Table(p.TableHeader(p.TableRow(p.TableCellRight("")+p.TableCellRight(P.DropdownMenu(s.getPotentialActions(e)))))+p.TableBody(r.map(y=>p.TableRow([p.TableCell(y+":"),p.TableCell(no({record:e,propertyID:y,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))].join(" "))).join(" ")))}function Nf({record:e,propertyID:r,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(e,r),c=[];for(let d of u){let g=s.clone(e);g=s.setValue(g,r,d),c.push(no({record:g,propertyID:r,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))}return`
        <ul class="space-y-4 ">
          ${c.map(d=>`
            <li>
              ${d}
            </li>
            `).join("")}

        </ul>
     
  
  `}function no({record:e,propertyID:r,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(e,r);return s.isArray(u)&&u.length==1&&(u=u[0]),s.isArray(u)&&u.length==0?"":s.isArray(u)&&u.length>0?`
            <details class="space-y-4"> 
            
                <summary>${P.ValueArray(u,r,l?.baseUrl)}</summary>
      
                ${Nf({record:e,propertyID:r,className:n,attrs:i,expandAll:o,depth:a,options:l})}
            
            </details>
      `:u?.["@id"]?`
        <details class="space-y-4"> 
        
            <summary>${P.ValueThing(u,r,l?.baseUrl)}</summary>
      
            ${ro({record:u,propertyID:void 0,className:n,attrs:i,expandAll:o,depth:a,options:l})}
        
        </details>
      `:u===void 0?"":P.Value(u,r,l?.baseUrl)}var En={};m(En,{DropdownMenu:()=>vf,Menu:()=>Pf});function Pf(e){return e=s.toArray(e),!e||e.length==0?"":p.DropdownMenu(p.DropdownMenuIcon(),e.map(r=>p.MenuItemPost(s.getImageUrl(r),s.getName(r),s.getUrl(r))).join(" "))}function vf(e){if(e=s.toArray(e),!e||e.length==0)return"";let r=e.map(i=>p.MenuItemPost(s.getImageUrl(i),s.getName(i),s.getUrl(i),s.ref(i))).join(" ");return p.DropdownMenu(p.DropdownMenuIcon(),r)}var Ln={};m(Ln,{Value:()=>Cf,ValueArray:()=>oo,ValueDateTime:()=>lo,ValueDuration:()=>jf,ValueMonetaryAmount:()=>Rf,ValueNumber:()=>uo,ValueRecordId:()=>io,ValueRecordType:()=>so,ValueText:()=>co,ValueThing:()=>fo,ValueUrl:()=>ao});function Cf(e,r,n){return s.isArray(e)?oo(e,r,n):r=="@type"?so(e,r,n):r=="@id"?io(e,r,n):s.isObject(e)?fo(e,r,n):s.isNumber(e)?uo(e,r,n):s.isDate(e)?lo(e,r,n):V.isUrl(e)?ao(e,r,n):co(e,r,n)}function io(e,r,n){let i=s.getRecordUrl({"@id":e},n),o=`<a title="${e}" href="${i}">${e}</a>`;return Q(o,r)}function so(e,r,n){let i=V.url.getUrl(n,e),o=`<a class="h-min" title="${e}" href="${i}">${e}</a>`;return Q(o,r)}function oo(e,r,n){let i=e.length>0?`(${e.length})`:"";return Q(i,r)}function ao(e,r){let n=`<a title="${e}" href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`;return Q(n,propertyID)}function lo(e,r,n){e=s.toDate(e);let i=V.date.format(e);return Q(i,r)}function jf(e,r,n){return V.duration.format(pv.value)}function uo(e,r,n){let i=r=="position"?0:2;return e=s.toNumber(e),e=V.number.format(e,i),Q(e,r)}function co(e,r,n){return Q(e,r)}function fo(e,r,n){let i=s.getRecordUrl(e,n),o=s.getName(e)||s.record_id(e);s.record_type(e)=="ListItem"&&(o=`ListItem ${s.getPosition(e)} - ${s.getValue(e,"item.name")||s.getValue(e,"@id")}`);let a=`<a title="${o}" href="${i}">${o}</a>`;return Q(a,r)}function Rf(e,r,n){let i=V.toNumber(s.getValue(pv.value,"value"));if(i===void 0)return pv;let o=V.number.format(i,2),a=s.getValue(record,"currency");return a=(a||"").toUpperCase(),pv.htmlValue=a+" $"+o,a=="USD"&&(pv.htmlValue=a+" $"+o),a=="CAD"&&(pv.htmlValue=a+" $"+o),a=="EUR"&&(pv.htmlValue=a+" "+o+" \u20AC"),a=="GBP"&&(pv.htmlValue=a+" "+o+" \xA3"),pv.table.className="text-right font-mono",pv.record.className="text-right font-mono",Q(pv,r)}function Q(e,r){return`
      <span class="kr-value" data-property-id="${r}">${e}</span>
    `}var Fn={};m(Fn,{Kanban:()=>Df,KanbanCard:()=>go,KanbanColumn:()=>po});function Df(e,r){let n=s.getItems(e);return p.Kanban(p.KanbanHeader(p.KanbanTitle("Awesome Kanban","Fuck yeah"))+p.KanbanBody(propertyValues.map(i=>po(e,r,i)).join(" "))+p.KanbanFooter(""))}function po(e,r,n){let i=s.getItems(e);return i=i.filter(o=>s.getValue(o,r)==n),p.KanbanColumn(p.KanbanColumnHeader(n)+p.KanbanColumnBody(i.map(o=>go(o)).join(" "))+p.KanbanColumnFooter())}function go(e){return p.KanbanCard(p.KanbanCardHeader("xx")+p.KanbanCardBody(P.Value(s.getName(e),"name"))+p.KanbanCardFooter(P.Value(s.getActionStatus(e),"actionStatus")))}var P={...On,...Bn,...Dn,...Mn,...Hn,...En,...Ln,...Fn};function Ot({record:e,options:r}){if(s.isArray(e))return e.map(a=>Ot({record:a,options:r}));let n=s.record_type(e);if(!n)return e;let i=V.url.getUrl(r.baseUrl,"/execute"),o=s.ref(e);for(let a of Object.keys(e?.record||e))e=s.setValues(e,a,Ot({record:s.getValues(e,a),options:r}));return n=="Action"&&s.isPotential(e)&&(e=s.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i})),n=="ItemList"&&(e=s.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:o,url:i})),n=="ListItem"&&(e=s.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),n=="Thing"&&(e=s.addValue(e,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),e=s.addValue(e,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),e}function mo({website:e,webpage:r,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:c,offset:d,limit:g,options:y}){return a=a??"",a+=P.Table({url:i,records:l,properties:u,headers:c,offset:d,limit:g,options:y}),re({website:e,webpage:r,title:n,headContent:o,content:a,options:y})}function ho({website:e,webpage:r,title:n,url:i,headContent:o,content:a,record:l,properties:u,headers:c,options:d}){return a=a??"",a+=P.Record({url:i,record:l,options:d}),re({website:e,webpage:r,title:n,headContent:o,content:a,options:d})}var yo={blankPage:re,recordsPage:mo,recordPage:ho,cardsPage:Ys};var bo={blocks:P,...yo,components:Z,...Z};var Wn={};m(Wn,{getParsedRequest:()=>Of});function Of(e){let r={method:e.method.toLowerCase(),hostname:e.host,url:e.originalUrl,fullUrl:e.protocol+"://"+e.get("host")+e.originalUrl,offset:Number(e.query?.offset),limit:Number(e.query?.limit),orderBy:e.query?.orderBy,orderDirection:e.query?.orderDirection,record_id:e.params.record_id,data:e?.body};if(r.filter={...e.query},console.log("pp",r.filter),e.query?.filter)try{r.filter=JSON.parse(e.query?.filter)}catch{}return r.filter=r.filter||{},r?.filter&&(Object.keys(r.filter||{}).filter(i=>i.startsWith("_")==!0).forEach(i=>delete r.filter[i]),["filter","offset","limit","orderBy","orderDirection"].forEach(i=>delete r.filter[i])),r}var xo={shadcn:bo,express:Wn};var Jn={...s,...ln,html:xo},ex=Jn,tx=Jn,rx=Jn;export{Jn as _h,rx as default,ex as h,tx as helpers};
//# sourceMappingURL=jsonldCore.js.map
