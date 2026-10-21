var zs=Object.defineProperty;var y=(r,e)=>{for(var n in e)zs(r,n,{get:e[n],enumerable:!0})};var ce={get:Se,set:Ge,flatten:qs,expand:Gs};function Se(r,e){if(!e||typeof e!="string")return;let n=Tn(e),i=r;for(let o of n)isNaN(o)?i=Array.isArray(i)?i[0]:i:i=Array.isArray(i)?i:[i],i=i?.[o];return i}function Ge(r,e,n){if(!e||typeof e!="string"||e=="")return;let i=Tn(e);if(i.length==0)return n;let o=r;r=r||{},isNaN(i[0])||(r=Array.isArray(r)?r:[r]);let a=r;for(let l=0;l<i.length-1;l++){let u=i[l],d=i[l+1],c=!isNaN(d);c==!0&&(a[u]=Array.isArray(a[u])?a[u]:[a[u]],a=a?.[u]),c==!1&&(a[u]=a?.[u]||{},a=Array.isArray(a?.[u])?a?.[u][0]:a?.[u])}return a[i[i.length-1]]=n,r}function qs(r){function e(o,a){let l=[];return Array.isArray(a)?(o=o||"",a.map((d,c)=>e(`${o}[${String(c)}]`,d)).flat()):a?.["@type"]||a?.["@id"]?(o=o&&o!=""?o+".":"",Object.keys(a).map(d=>e(`${o}${d}`,a[d])).flat()):[{propertyID:o,value:a}]}let n=e("",r),i={};return n.forEach(o=>i[o.propertyID]=o.value),i}function Gs(r){let e={};return Object.keys(r).forEach(n=>Ge(e,n,r?.[n])),e}function Tn(r){let e=[],n="",i=["[","]","."];for(let o of r)if(i.includes(o)){n!=""&&e.push(n),n="";continue}else n=n+o;return e.push(n),e=e.filter(o=>o!=""),e=e.map(o=>isNaN(Number(o))?o:Number(o)),e}var Ht={};y(Ht,{eq:()=>eo,ge:()=>so,getDiff:()=>vn,getHash:()=>Pn,getHashNested:()=>oo,gt:()=>io,isEqual:()=>to,isSame:()=>Qs,le:()=>no,lt:()=>ro});var Ye={};y(Ye,{expand:()=>Ks,flatten:()=>Xs,getChildren:()=>Zs,handleRelationships:()=>Ut,simplify:()=>Bt,strip:()=>Ot});function Ks(r,e,n=!0){let i=s._storeToMap(r),o=new Map;function a(l){if(!l||typeof l!="object")return l;if(Array.isArray(l))return l.map(m=>a(m));let u=s.record_id(l);if(u&&o.has(u)){let m=o.get(u);return n?m:s.ref?s.ref(m):{"@id":u}}let c=(u&&i instanceof Map?i.get(u):null)||l,f=Array.isArray(c)?[...c]:{...c};u&&o.set(u,f);for(let m of Object.keys(f))m==="previousItem"||m==="nextItem"||(f[m]=a(f[m]));return f}return typeof e=="string"&&(e={"@id":e}),a(e)}function Ot(r){function e(n,i,o){if(Array.isArray(n))return n.map(a=>e(a,i,o));if(n?.["@type"]||n?.["@id"]){if(o>i)return{"@id":n?.["@id"]};{let a={};for(let l of Object.keys(n).sort())a[l]=e(n?.[l],i,o+1);return a}}return n}return e(r,0,0)}function Xs(r){function e(i){let o=[];if(!i)return[];if(s.isArray(i)){let a=[];for(let l of i)a=a.concat(e(l));return a}if(Object.prototype.toString.call(i)!=="[object Object]")return[];for(let a of Object.keys(i)){if(a=="@id")continue;if(a=="previousItem"){i[a]=s.ref(i?.[a]);continue}if(a=="nextItem"){i[a]=s.ref(i?.[a]);continue}let l=i[a];l=s.toArray(l),i[a]=[];for(let u of l)u?.["@id"]?i[a].push({"@id":u?.["@id"]}):i[a].push(u),o=o.concat(e(u))}return o=[i].concat(o),o}r=s.clone(r),r=s.setTempID(r),r=Ut(r);let n=e(r);return n=n.filter(i=>i),n=n.filter(i=>s.isRef(i)===!1),n}function Ut(r){if(s.isArray(r))return r.map(n=>Ut(n));let e=r;if(s.record_type(e)=="Product"){let n=s.getValues(e,"offers");n=n.map(a=>s.insertValue(a,"itemOffered",s.ref(e))),e=s.setValues(e,"offers",n);let i=s.getValues(e,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",i);let o=s.getValues(e,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",o)}if(s.record_type(e)=="Offer"){let n=s.getValues(e,"itemOffered");n=n.map(a=>s.insertValue(a,"offers",s.ref(e))),e=s.setValues(e,"itemOffered",n);let i=s.getValues(e,"review");i=i.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"review",i);let o=s.getValues(e,"aggregateRating");o=o.map(a=>s.insertValue(a,"itemReviewed",s.ref(e))),e=s.setValues(e,"aggregateRating",o)}return e}function Bt(r){function e(i,o=0){if(o>20)return i;if(o+=1,i!==void 0){if(Array.isArray(i))return i=i.map(a=>e(a,o)),i=i.filter(a=>a!==void 0),i.length==1?(i=i[0],i):i.length==0?void 0:i;if(i&&typeof i=="object"&&Object.keys(i).length>0){let a={};for(let l of Object.keys(i)){let u=e(i?.[l],o);l=="itemListElement"&&(u=s.toArray(u)),u!==void 0&&(a[l]=u)}return a["@id"]=s.toArray(a?.["@id"])?.[0],a}return i}}return r=s.clone(r),e(r)}function Zs(r){function e(n,i){if(s.isArray(n)){let a=[];for(let l of n){let u=e(l,i);a=a.concat(u)}return a}if(!(n?.["@id"]||n?.["@type"]))return[];let o=[];i>0&&o.push(n);for(let a of Object.keys(n))o=o.concat(e(n[a],i+1));return o=o.filter(a=>a),o}return e(r,0)}function Qs(r,e){if(r=s.record_id(r)??r,e=s.record_id(e)??e,r==null&&e==null)return!0;if(r!=null&&e==null||r==null&&e!=null)return!1;if(!isNaN(r)&&!isNaN(e)||typeof r=="string"&&typeof e=="string"||r instanceof Date&&e instanceof Date)return r==e;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r==e}function eo(r,e){if(r===void 0&&e===void 0)return!0;if(r!==void 0&&e===void 0||r===void 0&&e!==void 0)return!1;if(r===null&&e===null)return!0;if(r!==null&&e===null||r===null&&e!==null)return!1;r=s.clean(r),e=s.clean(e),r=s.strip(r),e=s.strip(e);try{r=JSON.stringify(r,Object.keys(r).sort(),0)}catch{}try{e=JSON.stringify(e,Object.keys(e).sort(),0)}catch{}return r==e}function to(r,e){let n=(o,a)=>a instanceof Object&&!(a instanceof Array)?Object.keys(a).sort().reduce((l,u)=>(l[u]=a[u],l),{}):a;try{r=JSON.stringify(r,n,4)}catch{}try{e=JSON.stringify(e,n,4)}catch{}return r==e}function ro(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r<e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]<e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r<e}function no(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r<=e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]<=e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r<=e}function io(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r>e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]>e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r>e}function so(r,e){if(r==null&&e==null)return!1;if(!isNaN(r)&&!isNaN(e))return r>=e;if(r?.["@id"]!=null&&e?.["@id"]!=null)return r?.["@id"]>=e?.["@id"];if(r?.["@id"]!=null&&e?.["@id"]==null||r?.["@id"]==null&&e?.["@id"]!=null)return!1;try{r=JSON.stringify(r)}catch{}try{e=JSON.stringify(e)}catch{}return r>=e}function Pn(r,e=!1){r=Bt(r),e==!1&&(r=Ot(r));let n=u=>u&&typeof u=="object"&&!Array.isArray(u)?Object.keys(u).sort().reduce((d,c)=>({...d,[c]:n(u[c])}),{}):Array.isArray(u)?u.map(n):u,i=JSON.stringify(n(r)),o=globalThis.process?.versions?.node&&globalThis.require?.("crypto");if(o)return o.createHash("sha256").update(i).digest("hex");let a=5381,l=i.length;for(;l;)a=a*33^i.charCodeAt(--l);return(a>>>0).toString(16)}function oo(r){return Pn(r,!0)}function vn(r,e){if(r===e)return null;if(typeof r!="object"||r===null||typeof e!="object"||e===null)return e;let n={};for(let i in r)if(r.hasOwnProperty(i))if(!e.hasOwnProperty(i))n[i]={removed:r[i]};else{let o=vn(r[i],e[i]);o!==null&&(n[i]=o)}for(let i in e)e.hasOwnProperty(i)&&!r.hasOwnProperty(i)&&(n[i]={added:e[i]});return Object.keys(n).length>0?n:null}var Et={};y(Et,{evaluate:()=>Mt});function Mt(r,e){let n=[];for(let o of Object.keys(e)){let a=o,l=e?.[o];if(l=s.toArray(l),a=="$and")return l.every(u=>Mt(r,u));if(a=="$or")return l.some(u=>Mt(r,u));for(let u of l){let d=lo(r,a,u);n.push(d)}}return n.every(o=>ao(o.r,o.p,o.o,o.v))}function ao(r,e,n,i){try{let o=ce.get(r,e);if(typeof o=="string"&&(o=o.trim()),typeof i=="string"&&(i=i.trim()),o=isNaN(Number(o))?o:Number(o),i=isNaN(Number(i))?i:Number(i),n=="$equal")return o==i;if(n=="$lt")return o<i;if(n=="$gt")return o>i;if(n=="$le")return o<=i;if(n=="$ge")return o>=i;if(n=="$same")return o?.["@id"]&&o?.["@id"]===i?.["@id"];if(n=="$includes")return o.includes(i)}catch(o){return console.log("err",o),!1}}function lo(r,e,n){let i={r,p:e,o:null,v:null};return typeof n=="string"&&(n.startsWith("$")?i={r,p:e,o:n.split(" ")[0],v:n.split(" ").slice(1).join(" ")}:i={r,p:e,o:"$equal",v:n}),typeof n=="object"&&(i={r,p:e,o:Object.keys(n)?.[0],v:n?.[Object.keys(n)?.[0]]}),i}var sr={};y(sr,{assignId:()=>Ho,getGenericRecordID:()=>Bo,normalizeRecordId:()=>Oo,replaceIds:()=>Gn,setTempID:()=>qn});var Wt={};y(Wt,{clean:()=>uo,isArray:()=>fe,isValid:()=>co,toArray:()=>Ke});function uo(r){return Ke(r)}function co(r){return fe(r)}function fe(r){return r===void 0?!1:Array.isArray(r)&&typeof r!="string"}function Ke(r){return isNull(r)?[]:(r=fe(r)?r:[r],r=r.filter(e=>e!==void 0),r)}var Ft={};y(Ft,{clean:()=>Lt,format:()=>po,formatDate:()=>Rn,isDate:()=>X,isNotDate:()=>go,isValid:()=>fo,toDate:()=>pe});function Lt(r,e=void 0){return pe(r)||e}function fo(r){return X(r)}function po(r,e=!1){return Rn(r,e)}function X(r){return r===void 0||r===""?!1:r instanceof Date&&!Number.isNaN(r.getTime())}function go(r){return!X(r)}function pe(r){if(r===void 0)return;if(X(r)==!0)return r;if(!isNaN(Number(r)))return;let e=Date.parse(r);if(!isNaN(e))return r=new Date(r),r=X(r)?r:void 0,r}function Rn(r,e=!1){if(console.log("vv",r,pe(r)),r=pe(r),X(r)===!1)return;let n=r,i=String(n.getFullYear()).padStart(4,"0"),o=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),l=`${i}-${o}-${a}`;if(e==!0){let u=String(n.getHours()).padStart(2,0),d=String(n.getMinutes()).padStart(2,0),c=String(n.getSeconds()).padStart(2,0);l=l+` ${u}:${d}:${c}`}return console.log("cc",l),l}var zt={};y(zt,{clean:()=>ho,isNotNull:()=>Jt,isNull:()=>he,isValid:()=>mo});function ho(r,e=void 0){}function mo(r){return he(r)}function Jt(r){return!he(r)}function he(r){return r===void 0||r===null?!0:r===0?!1:typeof r=="string"||ge.array.isValid(r)?r.length==0:r instanceof Date?ge.date.isValid(r):typeof r=="object"?Object.keys(r)==0:!1}var Gt={};y(Gt,{clean:()=>qt,format:()=>bo,formatDecimals:()=>jn,isNotNumber:()=>xo,isNumber:()=>Ie,isValid:()=>yo,toNumber:()=>Xe});function qt(r,e=void 0){return Xe(r)??e}function yo(r){return Ie(r)}function bo(r,e){return jn(r,e)}function jn(r,e){if(r=Number(r),!isNaN(r))return e!==void 0?r.toFixed(e):r}function Ie(r){return r===void 0||r===""?!1:(r=Number(r),!isNaN(r))}function xo(r){return!Ie(r)}function Xe(r){if(r!==void 0&&(r=Number(r),!isNaN(r)))return r}var Yt={};y(Yt,{clean:()=>Vo,cleanObject:()=>Ne,isObject:()=>Ze,isValid:()=>wo});function Vo(r,e=void 0){return Ne(r)||e}function wo(r){return Ze(r)}function Ze(r){return r===void 0||b.isString(r)==!0||b.isDate(r)==!0||b.isNumber(r)==!0||b.isArray(r)==!0?!1:Object.keys(r).length>0}function Ne(r){if(b.array.isValid(r)){if(r.length==0)return;if(r.length==1)return r=r[0],Ne(r);if(r.length==1){let e=[];for(let n of r)e=e.concat(Ne(x));e=e.filter(n=>b.isNotNull(n))}}if(b.object.isValid(r))for(let e of Object.keys(r))r[e]=Ne(r[e]),ge.isNull(r[e])&&delete r[e];return ge.isNotNull(r)?r:void 0}var Xt={};y(Xt,{clean:()=>Ao,cleanString:()=>Cn,isString:()=>Te,isValid:()=>$o,maxLengthEnd:()=>ko,maxLengthMiddle:()=>_o,toString:()=>Kt});function Ao(r,e=""){return Cn(r)||e}function $o(r){return Te(r)&&r.trim().length>=0}function _o(r,e){if(r==null)return"";let n=String(r);if(e===void 0||e<0||n.length<=e)return n;if(e<=3)return n.substring(0,e);let i=Math.round(e/3),o=e-i-3;return n.substring(0,i)+"..."+n.substring(n.length-o)}function ko(r,e){if(r==null)return"";let n=String(r);return e===void 0||e<0||n.length<=e?n:e<=3?n.substring(0,e):n.substring(0,e-3)+"..."}function Te(r){return typeof r=="string"||r instanceof String}function Kt(r){return r==null?"":String(r)}function Cn(r){return Te(r)?r.trim():void 0}var er={};y(er,{clean:()=>Dn,cleanUrl:()=>Un,getDomain:()=>So,getParams:()=>Io,getPath:()=>Hn,getUrl:()=>On,isUrl:()=>Qe,isValid:()=>Zt,setParams:()=>Bn,setPath:()=>Mn,toUrl:()=>Qt});function Zt(r){return Qe(r)}function Dn(r,e=void 0){return Un(r)??e}function Qt(r,e,n,i=void 0){return On(r,e,n)||i}function On(r,e,n){let i=Mn(r,e);return n&&(i=Bn(i,n)),i}function Qe(r){return r=Dn(r),!!r}function Un(r,e={}){let{removeTracking:n=!0,stripWww:i=!1,removeTrailingSlash:o=!0,lowercasePath:a=!1,allowedQueryParams:l=[]}=e;try{let u=new URL(r);u.protocol=u.protocol.toLowerCase(),u.hostname=u.hostname.toLowerCase(),i&&u.hostname.startsWith("www.")&&(u.hostname=u.hostname.slice(4)),(u.protocol==="http:"&&u.port==="80"||u.protocol==="https:"&&u.port==="443")&&(u.port="");let d=u.pathname;if(d=d.replace(/\/+/g,"/"),a&&(d=d.toLowerCase()),o&&d.length>1&&d.endsWith("/")&&(d=d.slice(0,-1)),u.pathname=d,n){let c=["utm_","fbclid","gclid","msclkid","mc_eid","_hsenc","ref","source"],f=Array.from(u.searchParams.keys());for(let m of f){let g=c.some(H=>m.toLowerCase().startsWith(H)),_=l.includes(m);g&&!_&&u.searchParams.delete(m)}}return u.searchParams.sort(),u.toString()}catch{return}}function So(r){try{let e=new URL(r).hostname;return e=e.replaceAll("www.",""),e}catch{return null}}function Io(r){try{let e=new URL(r);return Object.fromEntries(e.searchParams)}catch{return null}}function Bn(r,e){try{let n=new URL(r);for(let i of Object.keys(e))n.searchParams.set(i,e[i]);return n.toString()}catch{return null}}function Hn(r){try{return new URL(r).pathname}catch{return}}function Mn(r,e){e=e??"";let n=[],i=Hn(r)||"";n=n.concat(i.split("/")),e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let a of e)n=n.concat(a.split("/"));n=n.filter(a=>a!="");let o="/"+n.join("/");try{return new URL(o,r).toString()}catch(a){console.log(a,o,r);return}}var rr={};y(rr,{clean:()=>No,format:()=>Po,isDuration:()=>Pe,isValid:()=>To,toDuration:()=>tr});function No(r,e=void 0){return toDate(r)||e}function To(r){return Pe(r)}function Po(r){return Ro(r)}function Pe(r){return vo(r)}function tr(r){return r}function vo(r){return typeof r!="string"||r.trim()===""?!1:/^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.test(r.trim())}function Ro(r){let e=/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/,n=r.match(e);if(!n)return"00:00:00";let[i,o,a,l,u,d,c,f]=n.map(_=>parseInt(_,10)||0),m=[d,c,f].map(_=>String(_).padStart(2,"0")).join(":"),g=[];return o&&g.push(`${o}y`),a&&g.push(`${a}m`),l&&g.push(`${l}w`),u&&g.push(`${u}d`),g.length>0?`${g.join(" ")} ${m}`:m}var b={isNull:he,isNotNull:Jt,isArray:fe,toArray:Ke,isDate:X,toDate:pe,isDuration:Pe,toDuration:tr,isObject:Ze,isNumber:Ie,toNumber:Xe,isString:Te,toString:Kt,isUrl:Qe,toUrl:Qt,array:Wt,date:Ft,duration:rr,null:zt,number:Gt,object:Yt,string:Xt,url:er,getDataType:En,getType:En,getJsonSchema:jo},ge=b;function En(r){if(he(r))return"undefined";if(r===!0||r===!1)return"Boolean";if(fe(r))return"Array";if(X(r))return"DateTime";if(!isNaN(r))return"Number";if(typeof r=="string"){if(Zt(r))return"URL";if(Lt(r))return"DateTime";if(Pe(r))return"Duration";if(qt(r)!==void 0)return"Number";if(r.includes("[")||r.includes("{")||r.includes('"'))try{let e=JSON.parse(r);return"JSON"}catch{}return"Text"}return r?.["@id"]||r?.["@type"]?"Thing":"undefined"}function jo(r){function e(n,i=0){let o={};if(i==0&&(o.$schema="https://json-schema.org/draft/2020-12/schema",o.title=n?.["@type"]||""),b.isString(n))return o.type="string",o;if(b.isObject(n)){o.type="object",o.properties={};for(let a of Object.keys(n))o.properties[a]=e(n[a],i+1);return o}if(b.isNumber(n))return o.type="number",o;if(b.isArray(n))return o.type="array",o.items=e(n?.[0],i+1),o}return e(r,0)}var tf=globalThis.crypto.randomUUID;var et={website:"domain",webpage:"url",offer:"url",brand:"domain"};function me(r,e){if(!r||!r?.["@type"])return;let n=Fn(r);n=n.filter(i=>typeof i=="string"),n=n.map(i=>i.toLowerCase());for(let i of n){let o=et?.[i];if(o=="url")return Jn(i,tt(r));if(o=="domain")return zn(i,tt(r))}return ir(e)}function Wn(r,e){if(!r||!r?.["@type"])return;let n=Fn(r);for(let i of n){let o=et?.[i];if(o=="url")return Jn(i,tt(r));if(o=="domain")return zn(i,tt(r))}}function Ln(r,e){let n=r?.["@id"];return n?Co(r)?getStandardizedRecordId(r,e)==n:nr(r?.["@id"],e)==n:!1}function Co(r){let e=r?.["@type"];e=Array.isArray(e)&&typeof e!="string"?e:[e];for(let n of e)if(et?.[n])return et?.[n]}function Fn(r){let e=r?.["@type"];return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(n=>n),e}function tt(r){let e=r?.url;return e=Array.isArray(e)&&typeof e!="string"?e:[e],e=e.filter(n=>n),e}function ir(r){return r=nr(r),r?(r.endsWith("/")||(r=r+"/"),nr(r)+globalThis.crypto.randomUUID()):"_:"+globalThis.crypto.randomUUID()}function Jn(r,e){if(!r||typeof r!="string")return;r=r.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(o=>b.url.clean(o)),e=e.filter(o=>o);let n=e?.[0];return n?n+"#"+r:"_:"+globalThis.crypto.randomUUID()}function zn(r,e){if(!r||typeof r!="string")return;r=r.toLowerCase(),Array.isArray(e)&&typeof e!="string"||(e=[e]),e=e.map(o=>Do(o)),e=e.map(o=>"https://"+o),e=e.filter(o=>o);let n=e?.[0];return n?(n.endsWith("/")||(n=n+"/"),n+"#"+r):"_:"+globalThis.crypto.randomUUID()}function Do(r){if(!r||typeof r!="string")return null;try{let e=r.trim();return!/^https?:\/\//i.test(e)&&!e.startsWith("//")&&(e="https://"+e),new URL(e).hostname.toLowerCase()}catch{return null}}function nr(r,e="https"){if(!r||typeof r!="string")return null;let n=r.trim();n.startsWith("//")?n=`${e}:${n}`:/^https?:\/\//i.test(n)||(n=`${e}://${n}`);try{let i=new URL(n);i.hostname=i.hostname.toLowerCase();let o=i.toString();return o.endsWith("/")&&!r.endsWith("/")&&(o=o.slice(0,-1)),o}catch{return null}}function Oo(r,e){r=qn(r);let n=Uo(r,e);return Gn(r,n)}function Uo(r,e){function n(o,a){if(a=a||"https://www.test.com/",s.isArray(o)){let u=[];for(let d of o)u=u.concat(n(d));return u}if(s.isObject(o)==!1)return[];let l=[{replacee:s.record_id(o),replacer:me(o,a)}];for(let u of Object.keys(o))l=l.concat(n(o[u],a));return l}let i=n(r,e);return i=i.filter(o=>o),i}function qn(r){if(Array.isArray(r))return r.map(e=>s.assignId(e));if(s.isObject(r)==!1)return r;r["@id"]=r?.["@id"]||"_:"+s.randomUUID();for(let e of Object.keys(r))r[e]=s.assignId(r[e]);return r}function Bo(r){return ir(r)}function Ho(r){if(Array.isArray(r))return r.map(e=>s.assignId(e));if(s.isObject(r)==!1)return r;for(let e of Object.keys(r))r["@id"]=r?.["@id"]||"_:"+s.randomUUID(),r[e]=s.assignId(r[e]);return r}function Gn(r,e){function n(i,o){if(Array.isArray(i))return i.map(u=>s.replaceIds(u,o));if(!i?.["@id"])return i;let a=i?.["@id"],l=o.get(a);l&&(i["@id"]=l);for(let u of Object.keys(i))i[u]=s.replaceIds(i?.[u],o);return i}if(!(e instanceof Map)){let i=new Map;e=(Array.isArray(e),e),e.forEach(o=>i.set(o.replacee,o.replacer)),e=i}return n(r,e)}var ar={};y(ar,{DB:()=>or,_storeToMap:()=>je,_storeToOriginal:()=>Eo,getRecord:()=>ve,getRecords:()=>Re,patchRecord:()=>Kn,postRecord:()=>Yn});var or=class{constructor(){this._store=new Map,this._subscriptions=new Map}*[Symbol.iterator](){for(let e of this._store.values())yield e}toString(){return"JSONLD Array items: "+String(this.length())}toJSON(){return this.records}get(e,n=!0){return ve(this._store,e,n)}search(e={},n=!0){return Re(this._store,e,n)}set(e){let n=s.flatten(e);for(let i of n){let o=ve(this._store,s.record_id(i));this._store=Yn(this._store,i),s.isEqual(o,i)||this.broadcast(s.record_id(i))}return e}post(e){return this.set(e)}patch(e,n=!0){let i=s.flatten(e);for(let o of i){let a=ve(this._store,s.record_id(o));this._store=Kn(this._store,o,n),s.isEqual(a,o)||this.broadcast(s.record_id(o))}return e}delete(e){this._store=s.deleteRecord(this._store,e)}getValue(e,n,i,o){let a=this.get(e);return s.getValue(a,n,i,o)}getValues(e,n,i){let o=this.get(e);return s.getValues(o,n,i)}setValue(e,n,i){let o=this.get(e);return o||(o={"@id":e}),o=s.clone(o),o=s.setValue(o,n,i),this.set(o)}length(){return this._store.size}get records(){return Re(this._store)}getRecords(e=!1){return Re(this._store,void 0,!1)}get record_ids(){return Mo(this._store)}get list(){return{insert:this._list_insert.bind(this),upsert:this._list_upsert.bind(this),remove:this._list_remove.bind(this),delete:this._list_remove.bind(this),insertBefore:this._list_insertBefore.bind(this),insertAfter:this._list_insertAfter.bind(this),moveUp:this._list_moveUp.bind(this),moveDown:this._list_moveDown.bind(this),moveBefore:this._list_moveBefore.bind(this),moveAfter:this._list_moveAfter.bind(this),replace:this._list_replace.bind(this),length:this._list_length.bind(this),getListItems:this._list_getListItems.bind(this),getItemListElement:this._list_getItemListElement.bind(this),getItems:this._list_getItems.bind(this)}}_list_insert(e,n,i){e=this.get(e),n=this.get(n),e=s.list.insert(e,n,i),this.set(e)}_list_upsert(e,n,i){e=this.get(e),n=this.get(n),e=s.list.upsert(e,n,i),this.set(e)}_list_insertBefore(e,n,i){e=this.get(e),n=this.get(n),i=this.get(i),e=s.list.insertBefore(e,n,i),this.set(e)}_list_insertAfter(e,n,i){e=this.get(e),n=this.get(n),e=s.list.insertAfter(e,n,i),this.set(e)}_list_moveBefore(e,n,i){e=this.get(e),n=this.get(n),i=this.get(i),e=s.list.moveBefore(e,n,i),this.set(e)}_list_moveAfter(e,n,i){e=this.get(e),n=this.get(n),e=s.list.moveAfter(e,n,i),this.set(e)}_list_moveUp(e,n){e=this.get(e),e=s.list.moveUp(e,n),this.set(e)}_list_moveDown(e,n){e=this.get(e),e=s.list.moveDown(e,n),this.set(e)}_list_remove(e,n){e=this.get(e),e=s.list.remove(e,n),this.set(e)}_list_delete(e,n){e=this.get(e),e=s.list.remove(e,n),this.set(e)}_list_replace(e,n,i){e=this.get(e),n=this.get(n),e=s.list.replace(e,n,i),this.set(e)}_list_length(e){return e=this.get(e),this.list.length(e)}_list_getItems(e){return e=this.get(e),this.list.getItems(e)}_list_getListItems(e){return e=this.get(e),this.list.getItemListElement(e)}_list_getItemListElement(e){return e=this.get(e),this.list.getItemListElement(e)}getRecord(e,n=!0,i=void 0){let o=this.get(e);return!o||s.isRef(o)?i:o}updateRefs(e){function n(i,o={}){if(s.isArray(i))return i.map(a=>n(i,o));if(s.isObject(i)){if(s.isRef(i)){if(o?.[s.record_id(i)])return o[s.record_id(i)];i=ve(i,!0,i),o[s.record_id(i)]=i;for(let a of Object.keys(i))i[a]=n(i,o)}return i}return i}return n(e,{})}execute(e){return e=updateRecord(e),e=s.execute(e),this.set(s.getResults(e)),e}subscribe(e,n){(!e||e=="*"||e=="all")&&(e="all");let i=this._subscriptions.get(e)||[];i.includes(n)||(i.push(n),this._subscriptions.set(e,i))}unsubscribe(e,n){(!e||e=="*"||e=="all")&&(e="all");let i=this._subscriptions.get(e)||[];i=i.filter(o=>o!=n),this._subscriptions.set(e,i)}broadcast(e){let n=this.get(e),i=this._subscriptions.get(e)||[];i=i.concat(this._subscriptions.get("all")||[]),i=[...new Set(i)],i.forEach(o=>o(n))}static randomUUID(){return s.randomUUID()}static clean(e,n){return s.clean(e,n)}static flatten(e){return s.flatten(e)}static getValue(e,n,i,o){return s.getValue(e,n,i,o)}static getValues(e,n,i){return s.getValues(e,n,i)}static setValue(e,n,i,o){return s.setValue(e,n,i,o)}static setValues(e,n,i){return s.setValues(e,n,i)}static addValue(e,n,i){return s.addValue(e,n,i)}static addValues(e,n,i){return s.addValues(e,n,i)}static strip(e){return s.strip(e)}static get dot(){return ce}static ref(e){return s.ref(e)}static simplify(e){return s.simplify(e)}static isJsonld(e){return s.isJsonld(e)}static isValid(e){return s.isValid(e)}static isArray(e){return s.isArray(e)}static setAdditionalProperty(e,n,i,o){return s.setAdditionalProperty(e,n,i,o)}static getAdditionalProperty(e,n){return s.getAdditionalProperty(e,n)}};function Yn(r,e){if(!e)return;e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let n=je(r);for(let i of e)n.get(i?.["@id"])&&s.isRef(i)||n.set(i?.["@id"],i);return r=s._storeToOriginal(n),r}function Kn(r,e,n=!0){e=s.clone(e),e=s.assignId(e),e=s.flatten(e);let i=je(r);for(let o of e){let a=i.get(s.record_id(o));o=s.patch(a,o),i.set(s.record_id(o),o)}return r=s._storeToOriginal(i),r}function ve(r,e,n=!0){let i=s._utilGetId(e),o=je(r),a=o.get(i);return n==!0&&(a=s.expand(o,a)),a=s.clone(a),a}function Re(r,e,n=!0){let i=je(r),o=Array.from(i.values());return e&&(o=o.filter(a=>s.evaluate(a,e))),n==!0&&(o=s.expand(i,o)),o=s.clone(o),o}function Mo(r){return Re(r).map(i=>s.record_id(i))}function je(r){if(r instanceof Map||Object.prototype.toString.call(r)==="[object Map]")return r;r=s.toArray(r),r=r.filter(n=>s.isRef(n)===!1),r=r||[],r=Array.isArray(r)?r:[r];let e=new Map;for(let n of r){let i=s.record_id(n);i&&(e.has(i)&&(n=s.merge(e.get(i),n,!0)),e.set(i,n))}return r=e,r}function Eo(r){return r=Array.from(r.values()),r}var lr={};y(lr,{clean:()=>Zn,clone:()=>Qn,contractAtValue:()=>nt,expandAtValue:()=>Lo,getRecordUrl:()=>zo,isJsonld:()=>Xn,isValid:()=>Wo,merge:()=>Fo,patch:()=>Jo});function Wo(r){return Xn(r)}function Xn(r){return r?.["@type"]||r?.["@id"]}function Zn(r,e){if(Array.isArray(r)&&r.length>1)return r.map(o=>Zn(o,e));if(!r?.["@type"]||!r?.["@id"])return r;try{r=Qn(r)}catch{}r=setTempID(r);let n=s.flatten(r);n=n.map(o=>JSON.parse(JSON.stringify(o,Object.keys(o).sort(),4)));let i=[];for(let o of n){if(o["@id"]=Array.isArray(o?.["@id"])?o?.["@id"][0]:o?.["@id"],Ln(o)==!0)continue;let a=Wn(o,e);if(a&&o?.["@id"]!=a){let l={replacer:a,replacee:o?.["@id"]};i.push(l)}if(!a&&o?.["@id"].startsWith("_:")){let l={replacer:s.getGenericRecordID(e),replacee:o?.["@id"]};i.push(l)}}return r=s.replaceIds(r,i),r}function Lo(r){function e(n,i=!1){let o=s.getAtValue(n);if(o&&o.length>0)return s.setAtValue(n,e(o,!0));if(s.isArray(n))return n.map(a=>e(a,i));if(s.isJsonld(n)){for(let a of Object.keys(n?.record||n))n=s.setValues(n,a,e(s.getValues(n,a),!1));return n}return i===!1?{"@value":n}:n}return e(r,!1)}function nt(r){let e=s.getAtValue(r);if(e&&e.length>0)return nt(s.getAtValue(r));if(s.isArray(r))return r.map(n=>nt(n));if(s.isJsonld(r)){for(let n of Object.keys(r?.record||r))s.setValues(r,n,nt(s.getValues(r,n)));return r}return r}function Qn(r){try{return r=structuredClone(r),r}catch{}try{return r=JSON.parse(JSON.stringify(r)),r}catch{}return r}function Fo(r,e,n=!0){r=s.isArray(r)&&r.length==1?r[0]:r,e=s.isArray(e)&&r.length==2?e[0]:e,r=r??{},e=e??{};let i=[];i=i.concat(Object.keys(r)),i=i.concat(Object.keys(e)),i=[...new Set(i)];let o={"@id":r?.["@id"]||e?.["@id"]};for(let a of i){if(a=="@id")continue;let l=s.toArray(r?.[a]||void 0),u=s.toArray(e?.[a]||void 0),d=l.concat(u);n==!0&&(d=s.dedupe(d)),o[a]=d}return o}function Jo(r,e){r=s.isArray(r)&&r.length==1?r[0]:r,e=s.isArray(e)&&r.length==2?e[0]:e,r=r??{},e=e??{};for(let n of s.keys(e)){let i=s.getValues(e,n);r=s.setValues(r,n,i)}return r}function zo(r,e){e=e?.baseUrl??e;try{return b.url.getUrl(e,encodeURIComponent(s.record_id(r)))}catch{return console.log("Err getRecordUrl"),""}}var pr={};y(pr,{ID:()=>da,Id:()=>pa,Type:()=>Qo,actionStatus:()=>Sa,addValue:()=>ri,addValues:()=>ni,contentUrl:()=>Ta,description:()=>Ra,email:()=>Da,getActionStatus:()=>Ia,getAdditionalProperty:()=>Aa,getAtValue:()=>_a,getContentUrl:()=>Pa,getDescription:()=>ja,getEmail:()=>Oa,getID:()=>ca,getId:()=>ga,getImageName:()=>Dl,getImageUrl:()=>Cl,getItem:()=>Ha,getItemListElement:()=>Ja,getItems:()=>Wa,getName:()=>Ga,getNumberOfItems:()=>Xa,getObject:()=>el,getObjects:()=>nl,getPosition:()=>ol,getRecordID:()=>la,getRecordId:()=>sa,getRecordType:()=>Xo,getRecord_id:()=>ra,getRecord_type:()=>Go,getResult:()=>ul,getResults:()=>fl,getTargetCollection:()=>hl,getTargetCollections:()=>bl,getText:()=>wl,getType:()=>ea,getUrl:()=>_l,getValue:()=>T,getValues:()=>fr,hasValue:()=>ii,insertValue:()=>wa,isActive:()=>Il,isCompleted:()=>Nl,isFailed:()=>Tl,isPotential:()=>Sl,isRef:()=>ya,item:()=>Ba,itemListElement:()=>Fa,items:()=>Ea,keys:()=>xa,name:()=>qa,numberOfItems:()=>Ka,object:()=>Qa,objects:()=>rl,position:()=>sl,properties:()=>cr,recordID:()=>aa,recordId:()=>ia,recordType:()=>Ko,record_id:()=>dr,record_type:()=>qo,ref:()=>ba,result:()=>ll,results:()=>cl,setActionStatus:()=>Na,setActive:()=>vl,setAdditionalProperty:()=>$a,setAtValue:()=>ka,setCompleted:()=>Rl,setContentUrl:()=>va,setDescription:()=>Ca,setEmail:()=>Ua,setFailed:()=>jl,setID:()=>fa,setId:()=>ha,setIfNull:()=>Va,setItem:()=>Ma,setItemListElement:()=>za,setItems:()=>La,setName:()=>Ya,setNumberOfItems:()=>Za,setObject:()=>tl,setObjects:()=>il,setPosition:()=>al,setPotential:()=>Pl,setRecordID:()=>ua,setRecordId:()=>oa,setRecordType:()=>Zo,setRecord_id:()=>na,setRecord_type:()=>Yo,setResult:()=>dl,setResults:()=>pl,setTargetCollection:()=>ml,setTargetCollections:()=>xl,setText:()=>Al,setType:()=>ta,setUrl:()=>kl,setValue:()=>U,setValueIfNull:()=>ti,setValues:()=>Ce,targetCollection:()=>gl,targetCollections:()=>yl,text:()=>Vl,toRecord_id:()=>ei,toRecord_ids:()=>ma,url:()=>$l});var ye="en-CA";function qo(r){return T(r,"@type")}function Go(r){return T(r,"@type")}function Yo(r,e){return U(r,"@type",e)}function Ko(r){return T(r,"@type")}function Xo(r){return T(r,"@type")}function Zo(r,e){return U(r,"@type",e)}function Qo(r){return T(r,"@type")}function ea(r){return T(r,"@type")}function ta(r,e){return U(r,"@type",e)}function dr(r){return T(r,"@id")}function ra(r){return T(r,"@id")}function na(r,e){return U(r,"@id",e)}function ia(r){return T(r,"@id")}function sa(r){return T(r,"@id")}function oa(r,e){return U(r,"@id",e)}function aa(r){return T(r,"@id")}function la(r){return T(r,"@id")}function ua(r,e){return U(r,"@id",e)}function da(r){return T(r,"@id")}function ca(r){return T(r,"@id")}function fa(r,e){return U(r,"@id",e)}function pa(r){return T(r,"@id")}function ga(r){return T(r,"@id")}function ha(r,e){return U(r,"@id",e)}function ei(r){return typeof r=="string"?r:dr(r)}function ma(r){if(s.isArray(r)){let e=[];return r.foreach(n=>{e=e.concat(ei(n))}),e}return typeof r=="string"?[r]:[dr(r)]}function ya(r){return!s.isObject(r)||!r?.["@id"]?!1:!Object.keys(r).some(e=>e!="@id")}function ba(r){if(r?._isThingClass==!0)return record.ref;if(!r)return;let e=s._utilGetId(r);if(e)return{"@id":e}}function xa(r){return cr(r)}function cr(r){if(!r)return[];if(s.isArray(r)){let n=[];for(let i of r)n=n.concat(cr(i));return[...new Set(n)]}return Object.keys(r?.record||r)}function T(r,e,n,i,o){let a=fr(r,e,i,o);return n=Number(n),isNaN(n)&&(n=0),a?.[n]??i}function U(r,e,n,i,o){if(i!==void 0){let a=s.getValues(r,e);for(;a.length-1<i;)a.push(null);a[i]=n,n=a}return Ce(r,e,n,o)}function ti(r,e,n,i,o){let a=T(r,e,i);return s.isNull(a)==!1?r:U(r,e,n,i,o)}function Va(r,e,n,i,o){return ti(r,e,n,i,o)}function ri(r,e,n){return ni(r,e,n)}function ni(r,e,n){return n=s.getValues(r,e).concat(n),Ce(r,e,n)}function fr(r,e,n,i){if(r===void 0)return[];if(e==null||e=="")return[];r=r?.record||r;let o=e.split("."),a=r;for(let u=0;u<o.length;u++){let[d,c]=ur(o[u]);d&&(a=a?.[d],a=s.toArray(a)),a=a.filter(f=>f?.["@language"]==i||f?.["@language"]==ye||f?.["@lannguage"]===void 0),a=a.map(f=>f?.["@value"]??f),a=s.toArray(a),a=a.map(f=>f?.[i]??f?.[ye]??f),a=s.toArray(a),u<o.length-1&&(a=a?.[c])}let l=s.toArray(a);return l.length==0&&n!==void 0?n:l}function Ce(r,e,n,i){r=r?.record||r;let o=e.split("."),a=r||{};for(let d=0;d<o.length-1;d++){let[c,f]=ur(o[d]);a[c]=a?.[c]||[];let m;for(a?.[c]?.[i]?(a[c][i]=s.toArray(a?.[c]?.[i]),m=a[c][i]):a?.[c]?.[ye]?(a[c][ye]=s.toArray(a?.[c]?.[ye]),m=a[c][ye]):(a[c]=s.toArray(a?.[c])||[],m=a[c]);m.length-1<f;)m.push({"@type":"Thing"});a=m?.[f]}let[l,u]=ur(o[o.length-1]);return a[l]=s.toArray(n),r}function wa(r,e,n){return ii(r,e,n)==!0?r:ri(r,e,n)}function ii(r,e,n){let i=fr(r,e);if(i.length==0)return!1;for(let o of i)if(s.isSame(o,n))return!0;return!1}function ur(r){if(r===void 0)return 0;let e=r.split("[")?.[0],n=(r.split("[")?.[1]||"").split("]")?.[0];return n=Number(n),n=isNaN(n)?0:n,[e,n]}function Aa(r,e){let i=s.getValues(r,"additionalProperty").find(a=>s.getValue(a,"propertyID")==e);return s.getValue(i,"value")}function $a(r,e,n,i){let o=s.getValues(r,"additionalProperty");o=o.filter(l=>s.getValue(l,"propertyID")!=e);let a={"@type":"PropertyValue","@id":s.randomUUID(),propertyID:e,value:n};return r=s.addValue(r,"additionalProperty",a),r}function _a(r){return s.getValues(r,"@value")}function ka(r,e){return s.setValues(r,"@value",e)}function Sa(r){return s.getValue(r,"actionStatus")}function Ia(r){return s.getValue(r,"actionStatus")}function Na(r,e){return s.setValue(r,"actionStatus",e)}function Ta(r){return s.getValue(r,"contentUrl")}function Pa(r){return s.getValue(r,"contentUrl")}function va(r,e){return s.setValue(r,"contentUrl",e)}function Ra(r){return s.getValue(r,"description")}function ja(r){return s.getValue(r,"description")}function Ca(r,e){return s.setValue(r,"description",e)}function Da(r){return s.getValue(r,"email")}function Oa(r){return s.getValue(r,"email")}function Ua(r,e){return s.setValue(r,"email",e)}function Ba(r){return s.getValue(r,"item")}function Ha(r){return s.getValue(r,"item")}function Ma(r,e){return s.setValue(r,"item",e)}function Ea(r){return s.list.getItems(r)}function Wa(r){return s.list.getItems(r)}function La(r,e){return s.list.setItems(r,e)}function Fa(r){return s.list.getItemListElement(r)}function Ja(r){return s.list.getItemListElement(r)}function za(r,e){return s.list.setItemListElement(r,e)}function qa(r){return s.getValue(r,"name")}function Ga(r){return s.getValue(r,"name")}function Ya(r,e){return s.setValue(r,"name",e)}function Ka(r){return s.getValue(r,"numberOfItems")}function Xa(r){return s.getValue(r,"numberOfItems")}function Za(r,e){return s.setValue(r,"numberOfItems",e)}function Qa(r){return s.getValue(r,"object")}function el(r){return s.getValue(r,"object")}function tl(r,e){return U(r,"object",e)}function rl(r){return s.getValues(r,"object")}function nl(r){return s.getValues(r,"object")}function il(r,e){return Ce(r,"object",e)}function sl(r){return s.list.getPosition(r)}function ol(r){return s.list.getPosition(r)}function al(r,e){return s.list.setPosition(r,e)}function ll(r){return s.getValue(r,"result")}function ul(r){return s.getValue(r,"result")}function dl(r,e){return U(r,"result",e)}function cl(r){return s.getValues(r,"result")}function fl(r){return s.getValues(r,"result")}function pl(r,e){return Ce(r,"result",e)}function gl(r){return s.getValue(r,"targetCollection")}function hl(r){return s.getValue(r,"targetCollection")}function ml(r,e){return s.setValue(r,"targetCollection",e)}function yl(r){return s.getValues(r,"targetCollection")}function bl(r){return s.getValues(r,"targetCollection")}function xl(r,e){return s.setValues(r,"targetCollection",e)}function Vl(r){return s.getValue(r,"text")}function wl(r){return s.getValue(r,"text")}function Al(r,e){return s.setValue(r,"text",e)}function $l(r){return s.getValue(r,"url")}function _l(r){return s.getValue(r,"url")}function kl(r,e){return s.setValue(r,"url",e)}function Sl(r){return s.getValue(r,"actionStatus")=="PotentialActionStatus"}function Il(r){return s.getValue(r,"actionStatus")=="ActiveActionStatus"}function Nl(r){return s.getValue(r,"actionStatus")=="CompletedActionStatus"}function Tl(r){return s.getValue(r,"actionStatus")=="FailedActionStatus"}function Pl(r){return r=s.setValue(r,"actionStatus","PotentialActionStatus"),r=s.setValue(r,"startTime",void 0),r=s.setValue(r,"endTime",void 0),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",void 0),r}function vl(r){return r=s.setValue(r,"actionStatus","ActiveActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",void 0),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",void 0),r}function Rl(r,e){return r=s.setValue(r,"actionStatus","CompletedActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",s.getValue(r,"endTime")??new Date),r=s.setValue(r,"error",void 0),r=s.setValue(r,"result",e??s.getValues(r,"result")),r}function jl(r,e){return r=s.setValue(r,"actionStatus","FailedActionStatus"),r=s.setValue(r,"startTime",s.getValue(r,"startTime")??new Date),r=s.setValue(r,"endTime",s.getValue(r,"endTime")??new Date),r=s.setValue(r,"error",String(e)),r=s.setValue(r,"result",void 0),r}function Cl(r){if(s.record_type(r)=="ImageObject")return s.getValue(r,"contentUrl");let e=s.getValue(r,"image.contentUrl");return e=e??s.getValue(r,"image.url"),e=e??s.getValue(r,"image"),e=typeof e=="string"?e:"",e}function Dl(r){let e=s.getValue(r,"image.name");return e=e??s.getValue(r,"image.name"),e=e??s.record_id(r),e=typeof e=="string"?e:"",e}var hr={};y(hr,{_utilGetId:()=>Ll,getDataType:()=>Ul,isArray:()=>gr,isBoolean:()=>si,isDate:()=>se,isJsonld:()=>di,isNotDate:()=>El,isNotNull:()=>Bl,isNotNumber:()=>Hl,isNotString:()=>Ml,isNull:()=>C,isNumber:()=>it,isObject:()=>ui,isString:()=>De,randomUUID:()=>Ol,toArray:()=>ci,toDate:()=>li,toNumber:()=>oi,toSingle:()=>Wl,toString:()=>ai});function Ol(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();let r=()=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let n=r()%16;return(e==="x"?n:n&3|8).toString(16)})}function Ul(r){if(C(r))return"Undefined";if(gr(r))return"Array";if(di(r))return"Jsonld";let e=li(r);if(se(e))return"Date";let n=oi(r);return it(n)?"Number":ui(r)?"Object":De(r)?'String"':si(r)?"Boolean":"Undefined"}function C(r,e=void 0){return r==null||typeof r=="string"&&r.length==0?!0:e==null?!1:s.getValues(r,e).length==0}function Bl(r,e=void 0){return!C(r,e)}function si(r){return r===!0||r===!1}function it(r){return C(r)||r===""?!1:(r=Number(r),!isNaN(r))}function Hl(r){return!it(r)}function oi(r){if(!C(r)&&(r=Number(r),!isNaN(r)))return r}function De(r){return C(r)?!1:typeof r=="string"}function Ml(r){return!De(r)}function ai(r){if(C(r))return"";if(De(r))return r;if(s.isValid(r))return s.exportToString(r);if(se(r))return r.toLocaleString();if(s.isArray(r)){let e=`Array of ${r.length} items.
--------------------
`,n=0,i=r.length-1;i=i>8?8:i;for(let o=0;o<i;o++)e+=ai(r[o])+`
`;return e}return String(r)}function se(r){return C(r)||r===""?!1:r instanceof Date&&!Number.isNaN(r.getTime())}function El(r){return!se(r)}function li(r){if(C(r))return;if(se(r)==!0)return r;if(!isNaN(Number(r)))return;let e=Date.parse(r);if(!isNaN(e))return r=new Date(r),r=se(r)?r:void 0,r}function ui(r){if(Object.prototype.toString.call(r)!=="[object Object]")return!1;let e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function di(r){return C(r)?!1:!!(r?.["@id"]||r?.["@type"])}function gr(r){return C(r)?!1:Array.isArray(r)&&typeof r!="string"}function ci(r){return C(r)?[]:(r=gr(r)?r:[r],r=r.filter(e=>e!=null),r)}function Wl(r){return r=ci(r),r?.[0]??void 0}function Ll(r){let e=r;if(e!==void 0&&e!==null)return s.isArray(e)&&e.length==1&&(e=e[0]),s.isString(e)?e:(e=s.record_id(e),e??void 0)}var mr={};y(mr,{concat:()=>Fl,dedupe:()=>fi,deleteItem:()=>ql,diff:()=>zl,filter:()=>Xl,find:()=>Kl,includes:()=>st,insertItem:()=>Gl,intersection:()=>Jl,length:()=>Yl,search:()=>gi,sort:()=>be,upsertItem:()=>pi});function fi(r,e=!0){if(r=s.toArray(r),r.length<2)return r;let n=[];for(let i of r)st(n,i)==!1&&(e==!0&&s.isValid(i)&&gi(r,i).forEach(a=>i=s.merge(a,i)),n.push(i));return n=be(n),n}function st(r,e){r=s.toArray(r);for(let n of r)if(s.isSame(n,e)==!0)return!0;return!1}function Fl(r,e,n=!0){r=s.toArray(r),e=s.toArray(e);let i=r.concat(e);return i=i.filter(o=>o!=null),n==!0&&(i=fi(i)),i=be(i),i}function be(r,e=void 0,n=void 0){return n=n??1,typeof n=="string"&&(n=n.toLowerCase()),n=n=="asc"?1:n,n=n=="desc"?-1:n,r=s.toArray(r),r.length<2||(e==null?n==1?r.sort((i,o)=>s.lt(i,o)==!0?-1:1):r.sort((i,o)=>s.gt(i,o)==!0?-1:1):n==1?r.sort((i,o)=>s.lt(s.getValue(i,e),s.getValue(o,e))==!0?-1:1):r.sort((i,o)=>s.gt(s.getValue(i,e),s.getValue(o,e))==!0?-1:1)),r}function Jl(r,e){r=s.toArray(r),e=s.toArray(e);let n=[];for(let i of r)st(e,i)==!0&&n.push(i);return n=be(n),n}function zl(r,e){r=s.toArray(r),e=s.toArray(e);let n=[];for(let i of r)st(e,i)==!1&&n.push(i);return n=be(n),n}function ql(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)==!1&&n.push(i);return n}function pi(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)==!0?n.push(e):n.push(i);return n}function Gl(r,e){return pi(r,e)}function Yl(r){return r=s.toArray(r),r.length}function Kl(r,e){r=s.toArray(r);for(let n of r)if(s.isSame(n,e))return n}function gi(r,e){r=s.toArray(r);let n=[];for(let i of r)s.isSame(i,e)&&n.push(i);return n}function Xl(r,e,n,i,o,a){return r=s.toArray(r),r.length==0||(s.isNotNull(e)&&(r=r.filter(l=>s.evaluate(l,e))),r=be(r,n,i),r.length==0)||(a=s.toNumber(a),s.isNumber(a)&&(r=r.slice(a)),o=s.toNumber(o),s.isNumber(o)&&r.length>=o&&(r=slice(0,o))),r}var yr={};y(yr,{exportToString:()=>hi});function hi(r){return Array.isArray(r)?Zl(r):s.record_type(r)=="ListItem"?Ql(r):s.record_type(r)=="ItemList"?eu(r):s.record_type(r)=="Action"?tu(r):s.getValue(r,"name")||s.getValue(r,"@id")}function Zl(r){let e=`Array (${r.length})
--------------------------
`;return r.forEach(n=>e+=hi(n)+`
`),e}function Ql(r){return`${s.getValue(r,"position")} - ${s.getValue(r,"item.name")||s.getValue(r,"item.@id")}`}function eu(r){let e=s.getValues(r,"itemListElement"),n=`ItemList${s.getValue(r,"name")||s.getValue(r,"@id")} (${e.length})
--------------------------
`;return e.forEach(i=>n+=toString(i)+`
`),n}function tu(r){return`${s.getValue(r,"name")||s.getValue(r,"@id")} - ${s.getValue(r,"actionStatus")}`}var xr={};y(xr,{DatabaseHelper:()=>br,testDB:()=>ru});var br=class{constructor(e){this._parentRecord,this.tempDB=new s.DB,this._toGet=[],this._retrieved=[],this.#t(e)}*[Symbol.iterator](){yield this.next}get parent(){return this.parentRecord}set parent(e){this.#t(e)}get next(){return this._toGet?.[0]||void 0}get allNext(){return this._toGet}get isActive(){return this._toGet.length>0}get isCompleted(){return this._toGet.length==0}add(e){return this.#s(e)}get result(){return this.#e()}setCompleted(e){this.#n(e),this.#i(e)}#e(){let n=s.toArray(this.parentRecord).map(i=>this.tempDB.get(i?.["@id"]||i));return n=s.simplify(n),n=s.toArray(n),s.isArray(this.parentRecord)?n:n?.[0]||void 0}#t(e){let n=s.toArray(e);n=n.map(a=>typeof a=="string"?{"@id":a}:a),s.isArray(e)==!1&&(n=n?.[0]);let i=n;this.parentRecord=i,this.#r(i);let o=s.getChildren(i);this.#r(o)}#s(e){let n=s.toArray(e);n=n.map(o=>o?.record||o),n=n.filter(o=>o),this.tempDB.set(n),this.#n(n),this.#i(n);let i=s.getChildren(n);this.#r(i)}#n(e){let n=s.toArray(e);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let o=s.toArray(this._retrieved).concat(n);o=[...new Set(o)],this._retrieved=s.toArray(o)}#r(e){let n=s.toArray(e);n=n.map(a=>a?.record||a),n=n.map(a=>a?.["@id"]||a),n=[...new Set(n)],n=n.filter(a=>a);let i=s.toArray(this._retrieved);n=n.filter(a=>i.includes(a)==!1),n=s.toArray(this._toGet).concat(n),n=[...new Set(n)],this._toGet=s.toArray(n)}#i(e){let n=s.toArray(e);n=n.map(o=>o?.record||o),n=n.map(o=>o?.["@id"]||o),n=[...new Set(n)],n=n.filter(o=>o);let i=s.toArray(this._toGet);this._toGet=i.filter(o=>n.includes(o)==!1)}};function ru(){}var Sr={};y(Sr,{add:()=>lu,append:()=>ot,clean:()=>Vr,decrementPositions:()=>_r,duplicate:()=>hu,ensurePositions:()=>Ve,ensurePreviousNextItem:()=>ut,find:()=>J,findByItem:()=>_i,findByListItem:()=>$i,findByPosition:()=>Ai,getILE:()=>ou,getItem:()=>Be,getItemListElement:()=>N,getItems:()=>ki,getMaxPosition:()=>Ue,getMinPosition:()=>kr,getPosition:()=>P,gt:()=>wi,incrementPositions:()=>$r,insert:()=>D,insertAfter:()=>bi,insertBefore:()=>yi,isItemList:()=>v,isListItem:()=>at,length:()=>su,lt:()=>Vi,move:()=>uu,moveAfter:()=>pu,moveBefore:()=>fu,moveDown:()=>cu,moveUp:()=>du,prepend:()=>au,remove:()=>Ar,replace:()=>xi,setItem:()=>Ii,setItemListElement:()=>M,setItems:()=>Si,setPosition:()=>lt,sort:()=>Oe,toItemList:()=>iu,toListItem:()=>xe,toString:()=>nu,toStringItemList:()=>mi,toStringListItem:()=>wr,upsert:()=>gu});function nu(r){return v(r)?mi(r):wr(r)}function mi(r){let e=[`ItemList ${s.getValue(r,"name")||s.record_id(r)}`],n=N(r);return e=e.concat(n.map(i=>wr(i))),e.join(`
`)}function wr(r){return`${P(r)} - ${s.getValue(r,"item.name")||s.record_id(r)}`}function v(r){return s.record_type(r)==="ItemList"}function iu(r){if(v(r)==!1){let e=s.toArray(r);return r={"@type":"ItemList","@id":s.randomUUID(),itemListElement:e.map((n,i)=>xe(n,i))},Vr(r)}return Vr(r)}function Vr(r){r=s.setValueIfNull(r,"@id",s.randomUUID());let e=N(r);return e=e.map(n=>xe(n)),e=Ve(e),e=ut(e),r=M(r,e),r=s.setValue(r,"numberOfItems",e.length),r}function su(r){return N(r).length}function N(r){return s.getValues(r,"itemListElement")||[]}function ou(r){return N(r)}function M(r,e){return e=s.toArray(e),e=e.map((n,i)=>xe(n)),e=Ve(e),e=ut(e),r=s.setValues(r,"itemListElement",e),r=s.setValue(r,"numberOfItems",e.length),r}function D(r,e,n){if(r=Ve(r),s.isArray(e)){let o=n;for(let a of e)r=D(r,a,o),(o||o===0)&&(o+=1);return r}e=xe(e,n),r=Ar(r,e);let i=N(r);return n=n??Ue(i),n=n??i.length,n=n>=0?n:0,i=$r(i,n),i=Oe(i),i.push(e),r=M(r,i),r}function yi(r,e,n){let i=J(r,n);if(!i)return D(r,e);let o=P(i);return D(r,e,o)}function bi(r,e,n){let i=J(r,n);if(!i)return D(r,e);let o=P(i);return D(r,e,o+1)}function au(r,e){return D(r,e,0)}function ot(r,e){let n=N(r);if(n.length==0)return D(r,e,0);let i=Ue(r);return i||i===0?D(r,e,i+1):D(r,e,n.length)}function lu(r,e){return ot(r,e)}function uu(r,e,n){return D(r,e,n)}function du(r,e){let n=J(r,e),i=P(n);return i==0?r:D(r,n,i-1)}function cu(r,e){let n=J(r,e),i=P(n),o=Ue(r);return i==o?r:D(r,n,i+1)}function fu(r,e,n){return yi(r,e,n)}function pu(r,e,n){return bi(r,e,n)}function xi(r,e,n){let i=N(r),o=[];for(let a of i){let l=Be(a);s.isSame(l,n)&&(l=Ii(a,e)),o.push(a)}return M(r,o)}function gu(r,e){return J(r,e)?xi(r,e,s.ref(e)):ot(r,e)}function hu(r,e){if(at(e)){let n=J(e);e=Be(n)}return ot(r,e)}function Ar(r,e){if(s.isArray(e)){for(let a of e)r=Ar(r,a);return r}r=Ve(r);let n=N(r),i=J(n,e),o=P(i);return n=n.filter(a=>s.isSame(a,i)==!1),n=_r(n,o),r=M(r,n),r}function at(r){return s.record_type(r)==="ListItem"}function xe(r,e){return at(r)==!1&&(r={"@type":"ListItem","@id":s.randomUUID(),item:r}),r=s.setIfNull(r,"@id",s.randomUUID()),(e||e===0)&&(r=s.setValue(r,"position",e)),r}function Vi(r,e){let n=P(r)??void 0,i=P(e)??void 0;return n===void 0&&i===void 0?!1:n===void 0?!0:i===void 0?!1:n<i}function wi(r,e){let n=P(r)??void 0,i=P(e)??void 0;return n===void 0&&i===void 0||n===void 0?!1:i===void 0?!0:n>i}function Oe(r){if(v(r)){let n=r,i=N(n),o=Oe(i);return M(n,o)}function e(n,i){return Vi(n,i)==!0?-1:wi(n,i)==!0?1:0}return r.sort((n,i)=>e(n,i)),r}function J(r,e){if(!s.isNull(e))return s.isNumber(e)?Ai(r,e):at(e)?$i(r,e):_i(r,e)}function Ai(r,e){if(v(r)&&(r=N(r)),r=s.toArray(r),r.length!=0){for(let n of r)if(P(n)==e)return n}}function $i(r,e){if(v(r)&&(r=N(r)),r=s.toArray(r),r.length!=0){for(let n of r)if(s.isSame(n,e))return n}}function _i(r,e){if(v(r)&&(r=N(r)),r=s.toArray(r),r.length!=0)for(let n of r){let i=Be(n);if(s.isSame(i,e))return n}}function P(r){let e=s.getValue(r,"position");return e=Number(e),e=isNaN(e)?void 0:e,e}function lt(r,e){return e=Number(e),e=isNaN(e)?void 0:e,e=e<0?0:e,P(r)==e||(r=s.setValue(r,"position",e)),r}function $r(r,e){if(e=e??0,v(r)){let i=r;r=N(i);let o=$r(r,e);return M(i,o)}let n=[];for(let i of r){let o=P(i);o>=e&&(i=lt(i,o+1)),n.push(i)}return n}function _r(r,e){if(e=e??0,v(r)){let i=r;r=N(i);let o=_r(r,e);return M(i,o)}let n=[];for(let i of r){let o=P(i);o!=0&&o>=e&&(i=lt(i,o-1)),n.push(i)}return n}function Ve(r,e){if(v(r)){let o=r;r=N(o);let a=Ve(r);return M(o,a)}if(r=s.toArray(r),r.length==0)return r;r=Oe(r);let n=e??kr(r)??0,i=[];for(let o of r)o=lt(o,n),n+=1,i.push(o);return i}function kr(r){if(v(r)){let o=N(o);return kr(o)}r=s.toArray(r);let e=r.map(i=>P(i));return e=e.filter(i=>isNaN(i)==!1),e.length==0?void 0:Math.min(...e)}function Ue(r){if(v(r))return r=N(r),Ue(r);r=s.toArray(r);let e=r.map(i=>P(i));return e=e.filter(i=>isNaN(i)==!1),e.length==0?void 0:Math.max(...e)}function ut(r){if(v(r)){let n=r;r=N(n);let i=ut(r);return M(n,i)}r=s.toArray(r),r=Oe(r);let e=[];for(let n of r){let i=P(n),o=J(r,i-1),a=o?s.ref(o):void 0;n=s.setValue(n,"previousItem",a);let l=J(r,i+1),u=l?s.ref(l):void 0;n=s.setValue(n,"nextItem",u),e.push(n)}return e}function ki(r){if(v(r)){let i=N(r);return ki(i)}return r.map(n=>Be(n))}function Si(r,e){if(v(r)){let i=r;r=N(i);let o=Si(r);return M(i,o)}return r=s.toArray(r),e=s.toArray(e),e=e.map(i=>xe(i)),r.concat(e)}function Be(r){return s.getValue(r,"item")}function Ii(r,e){return s.setValue(r,"item",e)}var Nr={};y(Nr,{appendAction:()=>Pi,duplicateAction:()=>ji,execute:()=>Ni,moveDownAction:()=>Ri,moveUpAction:()=>vi,prependAction:()=>Ti,replaceAction:()=>Ir});function Ni(r){if(h.isArray(r))return r.map(n=>Ni(n));let e=h.record_type(r);if(e=="ReplaceAction")return Ir(r);if(e=="UpdateAction")return mu(r);if(e=="MoveUpAction")return vi(r);if(e=="MoveDownAction")return Ri(r);if(e=="AppendAction")return Pi(r);if(e=="PrependAction")return Ti(r);if(e=="ReplaceAction")return Ir(r);if(e=="DuplicateAction")return ji(r)}function mu(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n){for(let o of e)i=h.patch(i,o);r=h.addValue(r,"result",i)}return r=h.setCompleted(r),r}function Ti(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n){for(let o of e)i=h.list.prepend(i,o);r=h.addValue(r,"result",i)}return r=h.setCompleted(r),r}function Pi(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n){for(let o of e)i=h.list.append(i,o);r=h.addValue(r,"result",i)}return r=h.setCompleted(r),r}function vi(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n)for(let o of e)i=h.list.moveUp(i,o);return r=h.addValue(r,"result",t),r=h.setCompleted(r),r}function Ri(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n)for(let o of e)i=h.list.moveDown(i,o);return r=h.addValue(r,"result",t),r=h.setCompleted(r),r}function Ir(r){let e=h.targetCollection(r),n=h.getValue(r,"replacer"),i=h.getValue(r,"replacee");return t=h.list.replace(t,n,i),r=h.addValue(r,"result",e),r=h.setCompleted(r),r}function ji(r){let e=h.getObjects(r),n=h.targetCollections(r);for(let i of n)for(let o of e)i=h.list.duplicate(i,o);return r=h.addValue(r,"result",t),r=h.setCompleted(r),r}var s={dot:ce,...Ht,...Et,...Ye,...sr,...ar,...lr,...pr,...hr,...mr,...yr,...xr,list:Sr,...Nr};var Qr={};y(Qr,{default:()=>ed,things:()=>I});var Tr={};y(Tr,{getContent:()=>bu,getIcon:()=>Au,getTitle1:()=>Di,getTitle2:()=>yu,imageUrl:()=>Vu,imageUrls:()=>wu,thumbnailUrl:()=>xu});function Di(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"givenName"),a=s.getValue(r,"familyName"),l=s.getValue(r,"name");if(n=="Person"){let u=[o,a];if(u=u.filter(d=>d!==void 0),u.length>0)return u.join(" ")}if(n=="ListItem"){let u=s.getValue(r,"item");return Di(u)}return l||i||""}function yu(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"email"),a=s.getValue(r,"description");if(n=="Person")return o??"";if(n=="Action"){let l=s.getValue("actionStatus");return l=l||"",l=l.replace("ActionStatus",""),l??""}return a||""}function bu(r){let e;if(!r)return"";let n=s.record_type(r),i=s.record_id(r),o=s.getValue(r,"email"),a;return a=s.getValue(r,"abstract"),a&&typeof a=="string"||(a=s.getValue(r,"text"),a&&typeof a=="string")||(a=s.getValue(r,"description"),a&&typeof a=="string")?a:""}function xu(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValue(r,"thumbnail.contentUrl"),o&&typeof o=="string"||(o=s.getValue(r,"thumbnail"),o&&typeof o=="string")||(o=s.getValue(r,"thumbnailUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")?o:""}function Vu(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValue(r,"contentUrl"),o&&typeof o=="string"||(o=s.getValue(r,"image.contentUrl"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function wu(r){let e=s.record_type(r),n=s.record_id(r),i,o;return o=s.getValues(r,"image.contentUrl"),o=o.filter(a=>a&&typeof a=="string"),o.length>0||(o=s.getValues(r,"image"),o&&typeof o=="string")||(o=s.getValue(r,"image"),o&&typeof o=="string")||o&&typeof o=="string"?o:""}function Au(r){let e=s.record_type(r);switch(e=e||"Thing",e.replace(/^schema:/i,"").replace(/\s+/g,"").toLowerCase()){case"thing":return Ci;case"action":return $u;case"person":return _u;case"organization":return ku;case"itemlist":return Su;case"listitem":return Iu;case"postaladdress":return Nu;case"product":return Tu;case"webapi":return Pu;case"website":return vu;case"webpage":return Ru;default:return Ci}}var Ci='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>',$u='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>',_u='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>',ku='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>',Su='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>',Iu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>',Nu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',Tu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>',Pu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>',vu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>',Ru='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>';var $f=globalThis.crypto.randomUUID;function ct(r,e){if(Array.isArray(r))return r.map(i=>ct(i));if(!r?.["@type"]||!r?.["@id"])return r;for(let i of Object.keys(r))r[i]=ct(r);let n=s.record_type(r);return r=dt(r,"BookmarkAction","Bookmark",e),n=="ListItem"&&(r=dt(r,"MoveUpAction","Move Up",e),r=dt(r,"MoveDownAction","Move Down",e),r=dt(r,"DeleteAction","Delete",e)),r}function dt(r,e,n,i){let o={"@type":e,"@id":globalThis.crypto.randomUUID(),name:n,actionStatus:"PotentialActionStatus",object:{"@id":s.record_id(r)},url:i};return r=ju(r,o),r}function ju(r,e){return r?._record?(r._record.potentialAction=r._record?.potentialAction||[],r._record.potentialAction=Array.isArray(r._record.potentialAction)?r._record.potentialAction:[r._record.potentialAction],r._record.potentialAction.push(e),r):(r.potentialAction=r?.potentialAction||[],r.potentialAction=Array.isArray(r.potentialAction)?r.potentialAction:[r.potentialAction],r.potentialAction.push(e),r)}var Pr={Thing:{parent:"",properties:["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]},CreativeWork:{parent:"Thing",properties:["about","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","aggregateRating","alternativeHeadline","archivedAt","assesses","associatedMedia","audience"]},Action:{parent:"Thing",properties:["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]},UpdateAction:{parent:"Action",properties:["targetCollection"]},AddAction:{parent:"UpdateAction",properties:[]},InsertAction:{parent:"AddAction",properties:["toLocation"]},AppendAction:{parent:"InsertAction",properties:[]},PrependAction:{parent:"InsertAction",properties:[]},DeleteAction:{parent:"UpdateAction",properties:[]},ReplaceAction:{parent:"UpdateAction",properties:["replacer","replacee"]},ProductGroup:{parent:"Product",properties:["hasVariant","productGroupID","variesBy"]},Product:{parent:"Thing",properties:["additionalType","aggregateRating","amazonAsin","asin","audience","award","brand","category","color","countryOfAssembly","countryOfOrigin","countryOfLastProcessing","depth","description","disambiguatingDescription","funding","gsin","gtin","gtin12","gtin13","gtin14","gtin8","hasAdultConsideration","hasCertification","hasEnergyConsumptionDetails","hasMeasurement","hasMerchantReturnPolicy","height","identifier","image","isAccessoryOrSparePartFor","isConsumableFor","isRelatedTo","isSimilarTo","isVariantOf","itemCondition","keywords","logo","mainEntityOfPage","manufacturer","material","model","mpn","name","nsn","offers","pattern","patterned","productID","productionDate","purchaseDate","releaseDate","review","reviews","sameAs","scannable","size","sku","slogan","subjectOf","url","useByDate","weight","width"]}};function ft(r){let e=[];return e=e.concat(Pr?.[r]?.properties||[]),Pr?.[r]?.parent&&(e=e.concat(ft(Pr[r].parent))),e}function pt(r=0,e=0){let n="Action";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,name:r,actionStatus:"ActiveActionStatus",timeStart:new Date().toISOString(),object:S.thing("Object thing"),instrument:S.thing("Instrument thing"),agent:S.person("Agent thing"),hasPart:[]};if(e>0)for(let a=0;a<3;a++){let l=r+"_"+String(a);o.hasPart.push(pt(l,e-1))}return o}function vr(r=0){let e="Thing";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,streetAddress:"123 Street",addressLocality:"Some city",addressRegion:"Some province",postalCode:"H0H 0H0",addressCountry:"CA"}}function gt(r=0,e=0,n=0){let i="CreativeWork";typeof r!="string"&&(r=i+"_"+String(r));let o="https://www.testrecord.com/"+r+"#"+i,a={"@type":i,"@id":o,name:r,headline:"Headline "+r,text:Cu(),image:S.image(),hasPart:[]};if(n==0&&(a.author=S.person(),a.datePublished=new Date().toISOString()),n<e)for(let l=0;l<3;l++){let u=r+"_"+String(l);a.hasPart.push(gt(u,e,n+1))}return a}function Cu(){return"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}function He(r=0){let e="ImageObject";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,contentUrl:"https://placehold.co/600x400"}}var Bf=globalThis.crypto.randomUUID;function Rr(r=5){let e="ItemList",n="https://www.testrecord.com/"+globalThis.crypto.randomUUID()+"#"+e,i={"@type":e,"@id":n,itemListElement:[],numberOfItems:r},o;for(let a=0;a<r;a++){let l=Du(S.thing(a),a);o&&(o.nextItem={"@id":l?.["@id"]},l.previousItem={"@id":o?.["@id"]}),i.itemListElement.push(l),o=l}return i}function Du(r,e=0){return{"@type":"ListItem","@id":"https://www.testrecord.com/listitem/"+globalThis.crypto.randomUUID(),item:r,position:e,previousItem:"",nextItem:""}}function jr(r=0){let e="Offer";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,availability:"https://schema.org/InStock",itemOffered:S.product(r+"_item"),price:"55.00",priceCurrency:"CAD",seller:S.organization("org_a")}}function Cr(r=0){let e="Organization";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,address:S.postalAddress(),url:`https://www.test_${r.replaceAll(" ","_")}.com`}}function Dr(r=0){let e="Person";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,givenName:"givenName_"+r,familyName:"familyName_"+r,email:r+"@testrecord.com",address:S.address()}}function Or(r=0){let e="PostalAddress";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,addressLocality:"Seattle",addressRegion:"WA",postalCode:"98052",streetAddress:"20341 Whitworth Institute 405 N. Whitworth",extendedAddress:"Suite 123"}}function Ur(r=0){let e="Product";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e;return{"@type":e,"@id":n,name:r,description:"Product description",gtin:"5901234123457",mpn:"mpn_id_"+r,sku:"sku_id_"+r,category:"Category 1"}}function Br(r=0){let e="ProductGroup";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e,i={"@type":e,"@id":n,name:r,productGroupID:`A ${r} product group`,variesBy:["color","size"],hasVariant:[]};for(let o of["small","medium","large"])for(let a of["blue","white","red"]){let l=S.product(`variant ${o} ${a}`);l.size=o,l.color=a,l.isVariantOf={"@id":i?.["@id"]},i.hasVariant.push(l)}return i}function ht(r=0,e=0){let n="Thing";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,name:r,image:He(r),hasPart:[]};if(e>0)for(let a=0;a<3;a++){let l=r+"_"+String(a);o.hasPart.push(ht(l,e-1))}return o}function Hr(r=0){let e="Message";Number.isNaN(r)||(r=e+String(r));let n="https://www.testrecord.com/"+r+"#"+e,i=new Date;return{"@type":e,"@id":n,sender:S.person(0),recipient:[S.person(10),S.person(11),S.person(12)],headline:`Test ${String(r)} - this is a test message no ${String(r)}`,dateSent:new Date,dateReceived:new Date,text:`Test ${String(r)} This is a test mesage. This message is used for testing purposes only.`}}function Mr(r=0,e=5){let n="Conversation";Number.isNaN(r)||(r=n+String(r));let i="https://www.testrecord.com/"+r+"#"+n,o={"@type":n,"@id":i,hasPart:[]};for(let a=0;a<e;a++){let l=r+"_"+String(a),u=S.message(l);u.sender=a%2==0?u.recipient[0]:u.recipient[1],u.recipient=a%2==0?u.recipient.toSpliced(0,1):u.recipient.toSpliced(1,1);let d=new Date;d.setDate(d.getDate()-e+a),u.dateSent=d,u.dateReceived=d,o.hasPart.push(u)}return o}var S={action:pt,article:gt,address:vr,conversation:Mr,image:He,itemList:Rr,message:Hr,offer:jr,organization:Cr,person:Dr,postalAddress:Or,product:Ur,productGroup:Br,thing:ht,Action:pt,Article:gt,Address:vr,Conversation:Mr,Image:He,ItemList:Rr,Message:Hr,Offer:jr,Organization:Cr,Person:Dr,PostalAddress:Or,Product:Ur,ProductGroup:Br,Thing:ht};var Wr={};y(Wr,{jsonToMarkdown:()=>Er});function Er(r,e=1){let n;try{n=typeof r=="string"?JSON.parse(r):r}catch{return"Error: Invalid JSON input."}if(n==null)return"";let i="",o="  ".repeat(e-1);if(Array.isArray(n)){if(n.length===0)return"";n.forEach((a,l)=>{typeof a=="object"&&a!==null?(i+=`${o}* **Record ${l+1}:**
`,i+=Er(a,e+1)):i+=`${o}* ${a}
`})}else typeof n=="object"?Object.entries(n).forEach(([a,l])=>{l!==null&&typeof l=="object"?(i+=`${o}* **${a}:**
`,i+=Er(l,e+1)):i+=`${o}* **${a}:** ${l}
`}):i+=`${o}* ${n}
`;return i}var Fr={};y(Fr,{jsonToYaml:()=>Me,yamlToJson:()=>Ou});function Me(r,e=0){let n=" ".repeat(e),i="";if(r==null)return`null
`;if(typeof r!="object")return typeof r=="string"?/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(r)?`"${r.replace(/"/g,'\\"')}"
`:`${r}
`:`${r}
`;if(Array.isArray(r))return r.length===0?`[]
`:(r.forEach(a=>{if(i+=`${n}- `,typeof a=="object"&&a!==null){let l=Me(a,e+2).trimStart();i+=l}else i+=Me(a,0)}),i);let o=Object.keys(r);return o.length===0?`{}
`:(o.forEach(a=>{let l=r[a];i+=`${n}${a}:`,typeof l=="object"&&l!==null?i+=`
`+Me(l,e+2):i+=" "+Me(l,0)}),i)}function Ou(r){let e=r.split(`
`),n={},i=[{indent:-1,value:n,type:"object"}];for(let o of e){if(!o.trim()||o.trim().startsWith("#"))continue;let a=o.search(/\S/),l=o.trim();for(;i.length>1&&a<=i[i.length-1].indent;)i.pop();let u=i[i.length-1];if(l.startsWith("-")){u.type!=="array"&&u.type==="object"&&u.lastKey&&(u.value[u.lastKey]=[],i.push({indent:a,value:u.value[u.lastKey],type:"array"}));let d=i[i.length-1],c=l.substring(1).trim();if(c.includes(":")){let[f,...m]=c.split(":"),g=f.trim(),_=m.join(":").trim(),H=Lr(_),K={[g]:H};d.value.push(K),i.push({indent:a+2,value:K,type:"object",lastKey:g})}else d.value.push(Lr(c))}else if(l.includes(":")){let[d,...c]=l.split(":"),f=d.trim(),m=c.join(":").trim();u.lastKey=f,m===""?(u.value[f]={},i.push({indent:a,value:u.value[f],type:"object",lastKey:f})):u.value[f]=Lr(m)}}return n}function Lr(r){return r==="true"?!0:r==="false"?!1:r==="null"||r==="~"?null:!isNaN(r)&&r!==""?Number(r):r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'")?r.slice(1,-1):r}var Oi={color:{brand:{primary:{$value:"#0052FF",$type:"color",$description:"Primary brand color used for key actions and main accents."},secondary:{$value:"#121A26",$type:"color",$description:"Secondary brand color used for dark backgrounds and emphasis."}},neutral:{surface:{$value:"#FFFFFF",$type:"color",$description:"Base card and container surface."},text:{primary:{$value:"#0F172A",$type:"color",$description:"High contrast body text."},secondary:{$value:"#475569",$type:"color",$description:"Lower contrast secondary text and labels."}}},feedback:{danger:{$value:"#E11D48",$type:"color",$description:"Destructive actions and system errors."}}},typography:{family:{sans:{$value:["Inter","-apple-system","sans-serif"],$type:"fontFamily",$description:"Primary sans-serif font stack."}},"heading-lg":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:700,fontSize:"32px",lineHeight:1.2,letterSpacing:"-0.02em"},$description:"Large page titles."},"body-md":{$type:"typography",$value:{fontFamily:"{typography.family.sans}",fontWeight:400,fontSize:"16px",lineHeight:1.5,letterSpacing:"0em"},$description:"Standard readable paragraph text."}},spacing:{scale:{sm:{$value:"8px",$type:"dimension",$description:"Tight padding and small gaps."},md:{$value:"16px",$type:"dimension",$description:"Standard component padding."},lg:{$value:"24px",$type:"dimension",$description:"Container padding and wide gaps."}}},border:{radius:{sm:{$value:"4px",$type:"dimension",$description:"Small rounding for checkboxes and tags."},md:{$value:"8px",$type:"dimension",$description:"Standard radius for buttons and input fields."}}},shadow:{"elevation-md":{$value:{color:"rgba(15, 23, 42, 0.08)",offsetX:"0px",offsetY:"4px",blur:"12px",spread:"0px"},$type:"shadow",$description:"Medium depth shadow for cards and dropdown menus."}}};var Ui="DesignToken",Bi={css:{get:Mu},get:Jr,set:Hi,getValue:Bu,setValue:Hu,sampleRecord:Mi};function Jr(r){if(!r)return;let e=s.getAdditionalProperty(r,Ui);return e=e||{},e}function Hi(r,e){if(r)return e=e||{},r=s.setAdditionalProperty(r,Ui,e),r}function Bu(r,e){if(!r||!e||typeof e!="string")return;e=e.endsWith(".$value")?e.replace("$value",""):e;let n=Jr(r),i=Se(n,e);return Se(i,"$value")}function Hu(r,e,n){if(!r||!e||typeof e!="string")return r;e=e.endsWith(".$value")?e.replace("$value",""):e;let i=Jr(),o=Mi(),a=Se(o,e);return a.$value=n,i=Ge(i,e,a),r=Hi(r,i),r}function Mu(r,e="dt"){let n=[];function i(l,u=[]){for(let[d,c]of Object.entries(l)){if(c==null)continue;let f=[...u,d];if(typeof c=="object"&&"value"in c){let m=`--${f.map(_=>_.toLowerCase()).join("-")}`,g=o(c.value);n.push(`  ${m}: ${g};`)}else if(typeof c=="object"&&!Array.isArray(c))i(c,f);else{let m=`--${f.map(_=>_.toLowerCase()).join("-")}`,g=o(c);n.push(`  ${m}: ${g};`)}}}function o(l){return Array.isArray(l)?l.join(", "):typeof l=="number"?l===0?"0":`${l}px`:String(l).replace(/\{([^}]+)\}/g,"var(--$1)").replace(/\./g,"-")}return i(r,e?[e]:[]),`:root {
${n.join(`
`)}
}`}function Mi(){return Oi}var p={markdown:Wr,yaml:Fr,designToken:Bi};var yt=class{constructor(e){this._objectID=s.randomUUID(),this._isThingClass=!0,this._record={},this._defaultRecordType="",this._dataPoints=[],this._callbacks={},this._previousRecord={},this._previousRecordHash="",this._currentRecord={},this._currentRecordHash="",this._loadRecord(e)}*[Symbol.iterator](){for(let e of this.properties)yield e}toString(){return zr(this.record)}toJSON(){return this.record}toMD(){return p.markdown.jsonToMarkdown(this.record)}toYaml(){return p.yaml.jsonToYaml(this.record)}get(e){return this.getValues(e)}set(e,n){return this.setValues(e,n)}getValue(e){return s.getValue(this._record,e)}setValue(e,n){return this.#t(),this.#e(s.setValue(this._record,e,n))}getValues(e){return s.getValues(this._record,e)}setValues(e,n){return this.#t(),this.#e(s.setValues(this._record,e,n))}addValue(e,n){return this.#t(),this.#e(s.addValue(this._record,e,n))}addValues(e,n){return this.#t(),this.#e(s.addValues(this._record,e,n))}_setValueIfNotNull(e,n){s.isNotNull(n)&&this.setValue(e,n)}_setValueIfString(e,n){s.isNotNull(n)&&typeof n=="string"&&this.setValue(e,n)}_setValueIfNumber(e,n){s.isNotNull(n)&&!isNaN(n)&&this.setValue(e,n)}_setValueIfRecordType(e,n,i){s.isNotNull(i)&&s.record_type(i)==e&&this.setValue(n,i)}_setValueIfNotRecordType(e,n,i){s.isNotNull(i)&&s.record_type(i)&&s.record_type(i)!=e&&this.setValue(n,i)}get objectID(){return this._objectID}set objectID(e){this._objectID=e}get keys(){return Object.keys(this._record)}get baseUrl(){try{return process.env.baseUrl}catch{return}}set baseUrl(e){try{process.env.baseUrl=e}catch{}}get record(){return this.record_type||(this._record["@type"]=[this._defaultRecordType]),this.record_id||(this._record["@id"]=me(mt(this._record),this.baseUrl)),s.simplify(mt(this._record))}set record(e){return this.#t(),this.#e(e)}get ref(){return{"@id":this.record_id}}set ref(e){this.record_id=e?.["@id"]||e?.record_id||e}_loadRecord(e){let n=s.record_type(e);return n&&n==this._defaultRecordType?(this.record=e?.record||e,!0):(this.record_type=this._defaultRecordType,!1)}#e(e){e=e||{},e?._isThingClass==!0&&(this._callbacks={...this._callbacks,...e._callbacks},e=e?.record||e),this._currentRecord=s.clone(mt(e)),this._record=e,Object.keys(this._record).forEach(n=>this._record[n]=te(this._record?.[n])),this.processCallbacks()}#t(){this._previousRecord=s.clone(mt(this.record))}get delta(){return s.getDiff(this._previousRecord,this._currentRecord)}get record_type(){return this.getValue("@type")||this._defaultRecordType}set record_type(e){this.setValue("@type",e)}get record_id(){return this.getValue("@id")}set record_id(e){return this.setValue("@id",e)}get properties(){return ft(this.record_type)}get hash(){return s.getHash(this.record)}registerToChildren(){for(let e of Object.keys(this.record))if(!e.startsWith("@")){let n=this.getValues(e);for(let i of n)i?._isThingClass==!0&&i.addListenerNested(this.propagateChangeFromChildren.bind(this),this._objectID)}}propagateChangeFromChildren(){this.processCallbacks(this._previousRecordNested,this.record,!0),this._previousRecordNested=this.record}addListener(e,n=void 0,i=!1){n=n??s.randomUUID();let o={id:n,includeChildren:i,callbackFn:e};return this._callbacks=this?._callbacks??{},this._callbacks[n]=o,n}addListenerParent(e,n=void 0){return this.addListener(e,n,!1)}addListenerNested(e,n=void 0){return this.addListener(e,n,!0)}addEventListener(e,n=void 0,i=!1){return this.addListener(e,n,i)}removeListener(e){delete this._callbacks[e]}removeEventListener(e){return this.removeListener(e)}processCallbacks(){let e=Object.keys(this._callbacks).length;if(Object.keys(this._callbacks).length==0)return;let n=s.getHash(this._previousRecord,!1)!=s.getHash(this._currentRecord,!1),i=n==!0||s.getHashNested(this._previousRecord)!=s.getHashNested(this._currentRecord);n==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!1),n==!1&&i==!0&&this.executeCallbacks(this._previousRecord,this._currentRecord,!0),this.registerToChildren()}executeCallbacks(e,n,i=!1){let o={"@type":"UpdateAction","@id":s.randomUUID(),object:e,result:n,actionStatus:"CompletedActionStatus",startTime:new Date,endTime:new Date};for(let a of Object.keys(this._callbacks))try{if(i==!0&&this._callbacks?.[a]?.includeChildren==!1)continue;this._callbacks?.[a].callbackFn(o)}catch(l){console.log("Callback failed: ",a,String(l),o)}}static toString(e){return zr(e)}static toMD(e){return p.markdown.jsonToMarkdown(e)}static toYaml(e){return p.yaml.jsonToYaml(e)}static fromYaml(e){let n=this.name;return new I[n](p.yaml.yamlToJson(e))}static isThing(e){return e?._isThingClass==!0}static toThing(e){return te(e)}static example(e=0,n=5){let i=this.name;return new I[i](S[i](e,n))}static get baseUrl(){return process.env.baseUrl}static set baseUrl(e){process.env.baseUrl=e}static getProperties(e){return ft(e)}static getValue(e,n){return s.getValue(e,n)}static setValue(e,n,i){return s.setValue(e,n,te(i))}static getValues(e,n){return s.getValues(e,n)}static setValues(e,n,i){return s.setValues(e,n,te(i))}static addValue(e,n,i){return s.addValue(e,n,te(i))}static addValues(e,n,i){return s.addValues(e,n,te(i))}static flatten(e){return s.flatten(e)}static addPotentialActions(e){return ct(e)}static addAdditionalProperty(e,n,i){return Eu(e,"additionalProperty",n,i)}};function mt(r){function e(i){if(Array.isArray(i))return i.map(o=>e(o));if(i instanceof Date&&!Number.isNaN(i.getTime()))return i.toISOString();if(i?._record)return e(i._record);if(i?.["@type"]||i?.["@id"]){let o={};for(let a of Object.keys(i))o[a]=e(i?.[a]);return o}return i}let n=e(r);try{n=JSON.parse(JSON.stringify(n))}catch{}return n}function te(r){if(Array.isArray(r))return r.map(e=>te(e));if(r?._isThingClass!=!0){let e=s.record_type(r);if(e){let n=I?.[e]||I.Thing,i=new n;i.record=r,r=i}}if(r?._isThingClass==!0)for(let e of Object.keys(r._record))r._record[e]=te(r._record?.[e]);return r}function zr(r){if(Array.isArray(r)){let a=r.map(l=>zr(l));return a=a.join(`
`),a}let e=s.getValue(r,"@type"),n=s.getValue(r,"@id"),i=s.getValue(r,"name"),o=`${e||""}/${n||""}`;return i&&(o=`${o} - ${i}`),o}function Eu(r,e,n,i){let o=new I.PropertyValue;return o.propertyID=n,o.value=i,r=s.addValues(r,e,o.record),r}var V=class extends yt{constructor(e){super(),this._defaultRecordType="Thing",this._loadRecord(e),this._setValueIfString("name",e)}get cleanUrl(){let e=this.getValue(this.record,"url");return e=b.url.clean(value),e}set cleanUrl(e){url=b.url.clean(e),this.url=url}get description(){return this.getValue("description")}set description(e){return this.setValue("description",e)}get sameAs(){return this.getValue("sameAs")}set sameAs(e){return this.setValue("sameAs",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get image(){return this.getValue("image")}set image(e){return this.setValue("image",e)}get name(){return this.getValue("name")}set name(e){return this.setValue("name",e)}get owner(){return this.getValues("owner")}set owner(e){return this.setValues("owner",e)}get potentialAction(){return this.getValues("potentialAction")}set potentialAction(e){return this.setValues("potentialAction",e)}get sameAs(){return this.getValues("sameAs")}set sameAs(e){return this.setValues("sameAs",e)}get subjectOf(){return this.getValues("subjectOf")}set subjectOf(e){return this.setValues("subjectOf",e)}get url(){return this.getValue("url")}set url(e){this.setValue("url",e),this.record_id=me(this.record,this.baseUrl)}addPotentialActions(){}setAdditionalProperty(e,n){let i=this.getValues("additionalProperty");i=i.filter(a=>a?.propertyID!=e);let o={"@type":"PropertyValue","@id":s.randomUUID()};o.propertyID=e,o.value=n,i.push(o),this.setValues("additionalProperty",i)}removeAdditionalProperty(e){let n=this.getValues("additionalProperty");n.find(o=>o?.propertyID==e)&&(n=n.filter(o=>o?.propertyID!=e),this.setValues("additionalProperty",n))}getAdditionalProperty(e){return this.getValues("additionalProperty").find(o=>o?.propertyID==e)?.value}};var oe=class extends V{constructor(e){super(),this._defaultRecordType="ItemList",this._loadRecord(e),this._setValueIfString("name",e);for(let n of s.toArray(e))s.record_type(n)!=="ItemList"&&this.add(n)}toString(){s.list.toString(this.record)}get itemListElement(){return s.list.getItemListElement(this.record)}set itemListElement(e){this.record=s.list.setItemListElement(e)}get items(){return s.list.getItems(this.record)}set items(e){return this.add(e)}length(){return this.itemListElement.length}prepend(e){this.record=s.list.insert(this.record,e,0)}append(e){this.record=s.list.append(this.record,e)}add(e){this.record=s.list.append(this.record,e)}insert(e,n){this.record=s.list.insert(this.record,e,n)}delete(e){this.record=s.list.remove(this.record,e)}replace(e,n){this.record=s.list.replace(this.record,e,n)}move(e,n){this.record=s.list.move(this.record,e,n)}moveUp(e){this.record=s.list.moveUp(this.record,e)}moveDown(e){this.record=s.list.moveDown(this.record,e)}upsert(e){this.record=s.list.upsert(this.record,e)}static clean(e){return s.list.clean(e)}static length(e){return s.list.length(e)}static getItem(e,n){return s.list.getItem(e,n)}static prepend(e,n){return s.list.insert(e,n,0)}static append(e,n){return s.list.append(e,n)}static add(e,n){return s.list.insert(e,n,getLength(e))}static insert(e,n,i){return s.list.insert(e,n,i)}static delete(e,n){return s.list.remove(e,n)}static replace(e,n,i){return s.list.replace(e,n,i)}static move(e,n,i){return s.list.move(e,n,i)}static moveUp(e,n){return s.list.moveUp(e,n)}static moveDown(e,n){return s.list.moveDown(e,n)}static moveBefore(e,n,i){return s.list.moveBefore(e,n,i)}static moveAfter(e,n,i){return s.list.moveAfter(e,n,i)}static upsert(e,n){return s.list.upsert(e,n)}static duplicate(e,n){return duplicateItem(e,n)}static search(e,n,i,o,a,l){return search(e,n,i,o,a,l)}};var O=class extends V{constructor(e){super(),this._defaultRecordType="PropertyValueSpecification",this._loadRecord(e),this._setValueIfString("name",e)}get valueRequired(){return this.getValue("valueRequired")}set valueRequired(e){return this.setValue("valueRequired",e)}get defaultValue(){return this.getValue("defaultValue")}set defaultValue(e){return this.setValue("defaultValue",e)}get valueName(){return this.getValue("valueName")}set valueName(e){return this.setValue("valueName",e)}get readonlyValue(){return this.getValue("readonlyValue")}set readonlyValue(e){return this.setValue("readonlyValue",e)}get multipleValues(){return this.getValue("multipleValues")}set multipleValues(e){return this.setValue("multipleValues",e)}get valueMinLength(){return this.getValue("valueMinLength")}set valueMinLength(e){return this.setValue("valueMinLength",e)}get valueMaxLength(){return this.getValue("valueMaxLength")}set valueMaxLength(e){return this.setValue("valueMaxLength",e)}get valuePattern(){return this.getValue("valuePattern")}set valuePattern(e){return this.setValue("valuePattern",e)}get minValue(){return this.getValue("minValue")}set minValue(e){return this.setValue("minValue",e)}get maxValue(){return this.getValue("maxValue")}set maxValue(e){return this.setValue("maxValue",e)}get stepValue(){return this.getValue("stepValue")}set stepValue(e){return this.setValue("stepValue",e)}test(e){return Ei(this.record,e)}static test(e,n){return Ei(e,n)}};function Ei(r,e){let n={"@type":"Action",name:"Validate PPS",object:r,instrument:e,actionStatus:"CompletedActionStatus"};if(e=JSON.parse(JSON.stringify(e)),Object.keys(e).foreach(i=>e[k]=Array.isArray(e?.[k])?e?.[k][0]:e?.[k]),e.valueRequired==!0&&!r&&r!=0)return n.actionStatus="FailedActionStatus",n.error="A value is required, no value provided.",n;if(e.multipleValues==!1&&Array.isArray(r))return n.actionStatus="FailedActionStatus",n.error="Cannot contain multiple values.",n;if(e.valueMinLength&&String(r).length<e.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value does not meet minimum length.",n;if(e.valueMaxLength&&String(r).length>e.valueMinLength)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(e.minValue&&r<e.minValue)return n.actionStatus="FailedActionStatus",n.error="Value is smaller than minimum value allowed.",n;if(e.maxValue&&r>e.maxValue)return n.actionStatus="FailedActionStatus",n.error="Value exceeds maximum length.",n;if(e.valuePattern){let i="hello",a=new RegExp(e.valuePattern,"gi");if(r.test(a)==!1)return n.actionStatus="FailedActionStatus",n.error="Value doesn't match pattern.",n}return n}var Ee=class extends V{constructor(e,n){super(),this._defaultRecordType="Action",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}toString(){return`${this.name} - ${(this.actionStatus||"").replace("ActionStatus","")}`}setPotential(){this.record=s.setPotential(this.record)}setActive(){this.record=s.setActive(this.record)}setCompleted(e){this.record=s.setCompleted(this.record,e)}setFailed(e){this.record=s.setFailed(this.record,e)}get isPotential(){return s.isPotential(this.record)}get isActive(){return s.isActive(this.record)}get isCompleted(){return s.isCompleted(this.record)}get isFailed(){return s.isFailed(this.record)}get object(){return this.getValues("object")}set object(e){return this.setValues("object",e)}get instrument(){return this.getValues("instrument")}set instrument(e){return this.setValues("instrument",e)}get agent(){return this.getValues("agent")}set agent(e){return this.setValues("agent",e)}get result(){return this.getValues("result")}set result(e){return this.setValues("result",e)}get actionStatus(){return this.getValue("actionStatus")}set actionStatus(e){return this.setValue("actionStatus",e)}get startTime(){return this.getValue("startTime")}set startTime(e){return this.setValue("startTime",e)}get endTime(){return this.getValue("endTime")}set endTime(e){return this.setValue("endTime",e)}get error(){return this.getValue("error")}set error(e){return this.setValue("error",e)}addPart(e){return this.addValues("hasPart",e)}addMinValue(e,n){this.record=Ji(this.record,e,n)}addMaxValue(e,n){this.record=zi(this.record,e,n)}addMinLength(e,n){this.record=qi(this.record,e,n)}addMaxLength(e,n){this.record=Gi(this.record,e,n)}addDefaultValue(e,n){this.record=Yi(this.record,e,n)}addValueRequired(e,n){this.record=Ki(this.record,e,n)}addValuePattern(e,n){this.record=Wi(this.record,e,n)}addMultipleValues(e,n){this.record=Li(this.record,e,n)}addStepValue(e,n){this.record=Fi(this.record,e,n)}testConditions(){return qr(this.record)}getInputconditions(){return E(this.record)}addInputCondition(e,n){this.record=this.addValues(e+"-input",n)}getOutputConditions(){return Wu(this.record)}addOutputCondition(e,n){this.record=this.addValues(e+"-output",n)}test(){return qr(this.record)}static setPotential(e){return s.setPotential(e)}static setActive(e){return s.setActive(e)}static setCompleted(e,n){return s.setCompleted(e,n)}static setFailed(e,n){return s.setFailed(e,n)}static isPotential(e){return s.isPotential(e)}static isActive(e){return s.isActive(e)}static isCompleted(e){return s.isCompleted(e)}static isFailed(e){return s.isFailed(e)}static addMinValue(e,n,i){return Ji(e,n,i)}static addMaxValue(e,n,i){return zi(e,n,i)}static addMinLength(e,n,i){return qi(e,n,i)}static addMaxLength(e,n,i){return Gi(e,n,i)}static addDefaultValue(e,n,i){return Yi(e,n,i)}static addValueRequired(e,n,i){return Ki(e,n,i)}static addValuePattern(e,n,i){return Wi(e,n,i)}static addMultipleValues(e,n,i){return Li(e,n,i)}static addStepValue(e,n,i){return Fi(e,n,i)}static test(e){return qr(e)}};function E(r,e){if(e){e.endsWith("-input")==!1&&(e=e+"-input");let i=r?.[e];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(r))i.endsWith("-input")&&(i=i.replace("-input",""),n.push({k:r?.[i]}));return n}function Z(r,e,n){return e.endsWith("-input")==!1&&(e=e+"-input"),r[e]=n,r}function Wu(r,e){if(e){e.endsWith("-output")==!1&&(e=e+"-output");let i=r?.[e];return i=Array.isArray(i)?i[0]:i,i}let n=[];for(let i in Object.keys(r))i.endsWith("-output")&&(i=i.replace("-output",""),n.push({k:r?.[i]}));return n}function Wi(r,e,n){let i=E(r,e)||new O;return i.valuePattern=n,r=Z(r,e,i),r}function Li(r,e,n){let i=E(r,e)||new O;return i.multipleValues=n,r=Z(r,e,i),r}function Fi(r,e,n){let i=E(r,e)||new O;return i.stepValue=n,r=Z(r,e,i),r}function Ji(r,e,n){let i=E(r,e)||new O;return i.minValue=n,r=Z(r,e,i),r}function zi(r,e,n){let i=E(r,e)||new O;return i.maxValue=n,r=Z(i.record),r}function qi(r,e,n){let i=E(r,e)||new O;return i.valueMinLength=n,r=Z(r,e,i),r}function Gi(r,e,n){let i=E(r,e)||new O;return i.valueMaxLength=n,r=Z(r,e,i),r}function Yi(r,e,n){let i=E(r,e)||new O;return i.defaultValue=n,r=Z(r,e,i),r}function Ki(r,e,n){let i=E(r,e)||new O;return i.valueRequired=n,r=Z(r,e,i),r}function qr(r){let e=E(r);for(let n of Object.keys(e))if(O.test(e[n],r?.[n])==!1)return!1;return!0}var z=class extends Ee{constructor(e,n){super(),this._defaultRecordType="UpdateAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}get targetCollection(){return this.getValues(this.record,"targetCollection")}set targetCollection(e){this.record=this.setValues(this.record,"targetCollection",e)}get toLocation(){return this.getValues(this.record,"toLocation")}set toLocation(e){this.record=this.setValues(this.record,"toLocation",e)}},bt=class extends z{constructor(e,n){super(),this._defaultRecordType="AddAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},xt=class extends z{constructor(e,n){super(),this._defaultRecordType="DeleteAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},Vt=class extends z{constructor(e,n){super(),this._defaultRecordType="ReplaceAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}get replacer(){return this.getValues(this.record,"replacer")}set replacer(e){this.record=this.setValues(this.record,"replacer",e)}get replacee(){return this.getValues(this.record,"replacee")}set replacee(e){this.record=this.setValues(this.record,"replacee",e)}},wt=class extends z{constructor(e,n){super(),this._defaultRecordType="InsertAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},At=class extends z{constructor(e,n){super(),this._defaultRecordType="AppendAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}},$t=class extends z{constructor(e,n){super(),this._defaultRecordType="PrependAction",this._loadRecord(e),this._setValueIfString("name",e),this._setValueIfNotNull("object",n)}};var _t=class extends V{constructor(e){super(),this.record_type="BrandDesign",e?.["@type"]=="BrandDesign"&&(this.record=e),this.basePath=void 0}toString(){return Lu(this.record)}get(e){return p.designToken.getValue(this.record,e)}set(e,n){return p.designToken.setValue(this.record,e,n)}get token(){return p.designToken.get(this.record)}set token(e){this.record=p.designToken.set(this.record,e)}get primary(){return p.designToken.getValue(this.record,"color.brand.primary")}set primary(e){this.record=p.designToken.setValue(this.record,"color.brand.primary",e)}get secondary(){return p.designToken.getValue(this.record,"color.brand.secondary")}set secondary(e){this.record=p.designToken.setValue(this.record,"color.brand.secondary",e)}get tertiary(){return p.designToken.getValue(this.record,"color.brand.tertiary")}set tertiary(e){this.record=p.designToken.setValue(this.record,"color.brand.tertiary",e)}get neutral(){return p.designToken.getValue(this.record,"color.neutral.surface")}set neutral(e){this.record=p.designToken.setValue(this.record,"color.neutral.surface",e)}get danger(){return p.designToken.getValue(this.record,"color.feedback.danger")}set danger(e){this.record=p.designToken.setValue(this.record,"color.feedback.danger",e)}get textPrimary(){return p.designToken.getValue(this.record,"color.neutral.text.primary")}set textPrimary(e){this.record=p.designToken.setValue(this.record,"color.neutral.text.primary",e)}get textSecondary(){return p.designToken.getValue(this.record,"color.neutral.text.secondary")}set textSecondary(e){this.record=p.designToken.setValue(this.record,"color.neutral.text.secondary",e)}get heading(){return new kt(this,"typography.heading-lg")}get body(){return new kt(this,"typography.body-md")}get spacingSm(){return p.designToken.getValue(this.record,"spacing.scale.sm")}set spacingSm(e){return p.designToken.setValue(this.record,"spacing.scale.sm",e)}get spacingMd(){return p.designToken.getValue(this.record,"spacing.scale.md")}set spacingMd(e){return p.designToken.setValue(this.record,"spacing.scale.md",e)}get spacingLg(){return p.designToken.getValue(this.record,"spacing.scale.lg")}set spacingLg(e){return p.designToken.setValue(this.record,"spacing.scale.lg",e)}get borderSm(){return p.designToken.getValue(this.record,"border.radius.sm")}set borderSm(e){return p.designToken.setValue(this.record,"border.radius.sm",e)}get borderMd(){return p.designToken.getValue(this.record,"border.radius.md")}set borderMd(e){return p.designToken.setValue(this.record,"border.radius.md",e)}get shadow(){return new Gr(this,"shadow.elevation-md")}sample(){return p.designToken.getSampleRecord()}},kt=class{constructor(e,n){this.base=e,this.basePath=$(n)}get fontFamily(){return p.designToken.getValue(record,$(this.basePath,"fontFamily"))}set fontFamily(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontFamily"),e)}get fontWeight(){return p.designToken.getValue(record,$(this.basePath,"fontWeight"))}set fontWeight(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontWeight"),e)}get fontSize(){return p.designToken.getValue(record,$(this.basePath,"fontSize"))}set fontSize(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontSize"),e)}get lineHeight(){return p.designToken.getValue(record,$(this.basePath,"lineHeight"))}set lineHeight(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"lineHeight"),e)}get letterSpacing(){return p.designToken.getValue(record,$(this.basePath,"letterSpacing"))}set letterSpacing(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"letterSpacing"),e)}get family(){return p.designToken.getValue(record,$(this.basePath,"fontFamily"))}set family(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontFamily"),e)}get weight(){return p.designToken.getValue(record,$(this.basePath,"fontWeight"))}set weight(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontWeight"),e)}get size(){return p.designToken.getValue(record,$(this.basePath,"fontSize"))}set size(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"fontSize"),e)}get height(){return p.designToken.getValue(record,$(this.basePath,"lineHeight"))}set height(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"lineHeight"),e)}get spacing(){return p.designToken.getValue(record,$(this.basePath,"letterSpacing"))}set spacing(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"letterSpacing"),e)}},Gr=class{constructor(e,n){this.base=e,this.basePath=$(n)}get color(){return p.designToken.getValue(record,$(this.basePath,"color"))}set color(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"color"),e)}get offsetX(){return p.designToken.getValue(record,$(this.basePath,"offsetX"))}set offsetX(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"offsetX"),e)}get offsetY(){return p.designToken.getValue(record,$(this.basePath,"offsetY"))}set offsetY(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"offsetY"),e)}get blur(){return p.designToken.getValue(record,$(this.basePath,"blur"))}set blur(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"blur"),e)}get spread(){return p.designToken.getValue(record,$(this.basePath,"spread"))}set spread(e){this.base.record=p.designToken.setValue(record,$(this.basePath,"spread"),e)}};function $(r,e,n){let i=[r,e,n];i=i.filter(a=>a!=null&&a!="");let o=i.join(".");return o=o.replaceAll("..","."),o}function Lu(r){return`${s.record_type(r)} for ${s.getValue(r,url)}
    
    `}var B=class extends V{constructor(e){super(),this._defaultRecordType="CreativeWork",this._loadRecord(e),this._setValueIfString("name",e)}get about(){return this.getValues("about")}set about(e){return this.setValues("about",e)}get abstract(){return this.getValues("abstract")}set abstract(e){return this.setValues("abstract",e)}get author(){return this.getValues("author")}set author(e){return this.setValues("author",e)}get comment(){return this.getValues("comment")}set comment(e){return this.setValues("comment",e)}get contributor(){return this.getValues("contributor")}set contributor(e){return this.setValues("contributor",e)}get creator(){return this.getValues("creator")}set creator(e){return this.setValues("creator",e)}get dateCreated(){return this.getValues("dateCreated")}set dateCreated(e){return this.setValues("dateCreated",e)}get dateModified(){return this.getValues("dateModified")}set dateModified(e){return this.setValues("dateModified",e)}get datePublished(){return this.getValues("datePublished")}set datePublished(e){return this.setValues("datePublished",e)}get editor(){return this.getValues("editor")}set editor(e){return this.setValues("editor",e)}get hasPart(){return this.getValues("hasPart")}set hasPart(e){return this.setValues("hasPart",e)}get headline(){return this.getValue("headline")}set headline(e){return this.setValue("headline",e)}get inLanguage(){return this.getValues("inLanguage")}set inLanguage(e){return this.setValues("inLanguage",e)}get isPartOf(){return this.getValues("isPartOf")}set isPartOf(e){return this.setValues("isPartOf",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get provider(){return this.getValues("provider")}set provider(e){return this.setValues("provider",e)}get publisher(){return this.getValues("publisher")}set publisher(e){return this.setValues("publisher",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get sourceOrganization(){return this.getValues("sourceOrganization")}set sourceOrganization(e){return this.setValues("sourceOrganization",e)}get text(){return this.getValue("text")}set text(e){return this.setValue("text",e)}get thumbnail(){return this.getValues("thumbnail")}set thumbnail(e){return this.setValues("thumbnail",e)}get thumbnailUrl(){return this.getValues("thumbnailUrl")}set thumbnailUrl(e){return this.setValues("thumbnailUrl",e)}get version(){return this.getValues("version")}set version(e){return this.setValues("version",e)}get video(){return this.getValues("video")}set video(e){return this.setValues("video",e)}get wordCount(){return this.getValues("wordCount")}set wordCount(e){return this.setValues("wordCount",e)}};var W=class extends B{constructor(e,n,i,o,a,l){super(),this._defaultRecordType="Message",e?.["@type"]=="Message"?this.record=e:(this.record_type="Message",this.sender=e,this.recipient=n,this.headline=i,this.text=o,this.dateSent=a,this.dateReceived=l)}toString(){return Kr(this.record)}get bccRecipient(){return this.getValues("bccRecipient")}set bccRecipient(e){return this.setValues("bccRecipient",we(e))}get ccRecipient(){return this.getValues("ccRecipient")}set ccRecipient(e){return this.setValues("ccRecipient",we(e))}get dateRead(){return this.getValue("dateRead")}set dateRead(e){return this.setValue("dateRead",e)}get dateReceived(){return this.getValue("dateReceived")}set dateReceived(e){return this.setValue("dateReceived",e)}get dateSent(){return this.getValue("dateSent")}set dateSent(e){return this.setValue("dateSent",e)}get messageAttachment(){return this.getValues("messageAttachment")}set messageAttachment(e){return this.setValues("messageAttachment",e)}get recipient(){return this.getValues("recipient")}set recipient(e){return this.setValues("recipient",we(e))}get sender(){return this.getValue("sender")}set sender(e){return this.setValue("sender",we(e))}get toRecipient(){return this.getValues("toRecipient")}set toRecipient(e){return this.setValues("toRecipient",we(e))}get subject(){return this.headline}set subject(e){this.headline=e}get body(){return this.text}set body(e){this.text=e}get gmail(){return Zi(this.record)}set gmail(e){this.record=Xi(e)}get outlook(){return es(this.record)}set outlook(e){this.record=Qi(e)}static toString(e){return Kr(e)}static fromGmail(e){return Xi(e)}static toGmail(e){return Zi(e)}static fromOutlook(e){return Qi(e)}static toOutlook(e){return es(e)}static lt(e,n){e=e?.record||e,n=n?.record||n;let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i<o}static gt(e,n){e=e?.record||e,n=n?.record||n;let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i>o}static sort(e){return e.sort((n,i)=>{n=n?.record||n,i=i?.record||i;let o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived")),a=new Date(s.getValue(i,"dateSent")||s.getValue(i,"dateCreated")||s.getValue(i,"dateReceived"));return o.getTime()-a.getTime()}),e}};function Kr(r){if(!r)return"";if(Array.isArray(r)&&r.length>1)return r.map(c=>Kr(c)).join(`
`);Array.isArray(r)&&r.length==1&&(r=r[0]);let e=s.getValue(r,"sender"),n=e?.email||e?.name||"";n=Yr(n,20);let o=s.getValues(r,"recipient").map(c=>c?.email||c?.name||"");o=Yr(o,25);let a=s.getValue(r,"headline")||"";a.length>20&&(a=Yr(a,30));let l=s.getValue(r,"dateSent")||s.getValue(r,"dateReceived")||"",u="";try{u=new Intl.DateTimeFormat("en-US").format(l)}catch{}return`${n} | ${o} | ${a} | ${u}`}function Yr(r,e=100){if(!r)return"";if(Array.isArray(r)&&r.length>1){let n=r.join(", ");if(n.length>e){let i=`... [${r.length}]`;n=n.slice(0,e-i.length)+i}return n}return Array.isArray(r)&&r.length==0?"":(Array.isArray(r)&&r.length==1&&(r=r[0]),typeof r=="string"&&r.length>e?`${r.slice(0,e-3)}...`:r)}function we(r){return r?Array.isArray(r)?r.map(e=>we(e)):typeof r=="string"?r.includes("@")?{"@type":"ContactPoint",email:r}:{"@type":"Person",name:r}:r:[]}function Xi(r){let e=new W;return e.sender=r.sender,e.recipient=r.recipient,e.subject=r.subject,e.text=r.text,e.dateSent=r.dateSent,e.dateReceived=r.dateReceived,e}function Zi(r){let e={};return e.sender=r.sender,e.recipient=r.recipient,e.subject=r.subject,e.text=r.text,e.dateSent=r.dateSent,e.dateReceived=r.dateReceived,e}function Qi(r){let e=new W;return e.record_id="https://www.outlook.com/message/"+e.id,e.sender=r.sender,e.recipient=r.toRecipients.emailAddress,e.subject=r.subject,e.text=r.text,e.dateSent=r.sentDateTime,e.dateReceived=r.receivedDateTime,e}function es(r){let e={};return e.sender=r.sender,e.toRecipients=r.recipient,e.subject=r.subject,e.text=r.text,e.sentDateTime=r.dateSent,e.receivedDateTime=r.dateReceived,e}var It=class extends B{constructor(e){super(),this._defaultRecordType="Conversation",e?.["@type"]=="Conversation"?this.record=e:this.record_type="Conversation"}test(){return"This is a test"}toString(){return Fu(this.record)}get messages(){let e=this.getValues("hasPart").filter(n=>s.record_type(n)=="Message");return e=W.sort(e),e}set messages(e){this.setValues("hasPart",e)}get firstMessage(){return this.messages.length>0?this.messages[0]:void 0}get lastMessage(){return this.messages.length>0?this.messages[this.messages.length-1]:void 0}get participants(){return ts(this.record)}add(e,n,i,o,a,l){this.record=St(this.record,e,n,i,o,a,l)}addMessage(e,n,i,o,a,l){this.record=St(this.record,e,n,i,o,a,l)}newMessage(e,n,i,o,a,l){let u=new W(e,n,i,o,a,l);this.messages=this.messages.push(u)}static getParticipants(e){return ts(e)}static newMessage(e,n,i,o,a,l,u){return St(e,n,i,o,a,l,u)}static addMessage(e,n,i,o,a,l,u){return St(e,n,i,o,a,l,u)}static getMessages(e){return We(e)}static getFirstMessage(e){let n=We(e);return n.length>0?n[0]:void 0}static getLastMessage(e){let n=We(e);return n.length>0?n[n.length-1]:void 0}};function Fu(r){let e=We(r),n=`Conversation with ${e.length} messages:
`;return n+=W.toString(e),n}function St(r,e,n,i,o,a,l){let u=new W(e,n,i,o,a,l);return r=s.addValues(r,"hasPart",u),r}function We(r){let e=s.getValues(r,"hasPart").filter(n=>s.getValue(n,"@type")=="Message");return e=Ju(e),e}function Ju(r){return r.sort((e,n)=>{let i=new Date(s.getValue(e,"dateSent")||s.getValue(e,"dateCreated")||s.getValue(e,"dateReceived")),o=new Date(s.getValue(n,"dateSent")||s.getValue(n,"dateCreated")||s.getValue(n,"dateReceived"));return i-o}),r}function ts(r){let e=We(r),n=new Set;return e.forEach(i=>{let o=s.getValue(i,"sender");o&&n.add(o),s.getValues(i,"recipient").forEach(l=>{n.add(l)})}),Array.from(n)}var Ae=class extends V{constructor(e,n,i,o){super(),this._defaultRecordType="DataFeedItem",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.item=e,this.sourceSystemID=n,this.sourceTableID=i,this.sourceRecordID=o)}toString(){return zu(this.record)}get dateCreated(){return this.getValue("dateCreated")}set dateCreated(e){return this.setValue("dateCreated",e)}get dateDeleted(){return this.getValue("dateDeleted")}set dateDeleted(e){return this.setValue("dateDeleted",e)}get dateModified(){return this.getValue("dateModified")}set dateModified(e){return this.setValue("dateModified",e)}get item(){return this.getValue("item")}set item(e){this.setValue("item",e),this.#e()}setSource(e,n,i){this.sourceSystemID=e,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}get sourceRecordID(){let e=this.getAdditionalProperty("sourceRecordID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-1],e}set sourceRecordID(e){this.setAdditionalProperty("sourceRecordID",e),this.#e()}#e(){if(this.sourceSystemID&&this.sourceTableID&&(this.sourceRecordID??this.item?.id)){let e=this.sourceSystemID+"/"+this.sourceTableID+"/"+(this.sourceRecordID??this.item?.id)}}};function zu(r){let e="";e+=`${r?.name||r?.["@id"]} `}var Nt=class extends V{constructor(e,n){super(),this._defaultRecordType="DataFeed",this._loadRecord(e),s.record_type(e)!=this._defaultRecordType&&(this.sourceSystemID=e,this.sourceTableID=n)}toString(){return qu(this.record)}setSource(e,n,i){this.sourceSystemID=e,this.sourceTableID=n,this.sourceRecordID=i}get sourceSystemID(){let e=this.getAdditionalProperty("sourceSystemID");return e=e??this.record_id.split("/").slice(0,this.record_id.split("/").length-2).join("/"),e}set sourceSystemID(e){this.setAdditionalProperty("sourceSystemID",e),this.#e()}get sourceTableID(){let e=this.getAdditionalProperty("sourceTableID");return e=e??this.record_id.split("/")?.[this.record_id.split("/").length-2],e}set sourceTableID(e){this.setAdditionalProperty("sourceTableID",e),this.#e()}add(e,n){return this.addDataFeedItem(e,n)}addDataFeedItem(e,n){let i=new Ae(e,this.sourceSystemID,this.sourceTableID,n),o=this.getValues("dataFeedElement");return o.push(i),this.setValues("dataFeedElement",o),i}#e(){if(this.sourceSystemID&&this.sourceTableID){let e=this.sourceSystemID+"/"+this.sourceTableID}}};function qu(r){let e="";e+=`${r?.name||r?.["@id"]} `}var ae=class extends V{constructor(e,n){super(),this.record_type="Offer",e?.["@type"]=="Offer"?this.record=e:(this.price=e,this.priceCurrency=n)}toString(){return rs(this.record)}get additionalProperty(){return s.getValue(this._record,"additionalProperty")}set additionalProperty(e){this._record=V.setValues(this._record,"additionalProperty",e)}get areaServed(){return s.getValue(this._record,"areaServed")}set areaServed(e){this._record=V.setValues(this._record,"areaServed",e)}get itemOffered(){return s.getValue(this._record,"itemOffered")}set itemOffered(e){this._record=V.setValues(this._record,"itemOffered",e)}get inventoryLevel(){return s.getValue(this._record,"inventoryLevel")}set inventoryLevel(e){this._record=V.setValues(this._record,"inventoryLevel",e)}get price(){return s.getValue(this._record,"price")}set price(e){this._record=V.setValues(this._record,"price",e)}get priceCurrency(){return s.getValue(this._record,"priceCurrency")}set priceCurrency(e){this._record=V.setValues(this._record,"priceCurrency",e)}get priceValidUntil(){return s.getValue(this._record,"priceValidUntil")}set priceValidUntil(e){this._record=V.setValues(this._record,"priceValidUntil",e)}get seller(){return s.getValue(this._record,"seller")}set seller(e){this._record=V.setValues(this._record,"seller",e)}get validFrom(){return s.getValue(this._record,"validFrom")}set validFrom(e){this._record=V.setValues(this._record,"validFrom",e)}get validThrough(){return s.getValue(this._record,"validThrough")}set validThrough(e){this._record=V.setValues(this._record,"validThrough",e)}};function rs(r){if(Array.isArray(r))return r.map(o=>rs(o));let e="",n=s.getValue(r,"itemOffered")||{},i=s.getValue(r,"price")||0;return i=Number(i),i=i.toFixed(2),e+=`${s.getValue(n,"name")||""} - ${s.getValue(r,"priceCurrency")||""} $${i}`,e}var le=class extends B{constructor(e){super(),this._defaultRecordType="Product",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return Xr(this.record)}get additionalProperty(){return this.getValues("additionalProperty")}set additionalProperty(e){return this.setValues("additionalProperty",e)}get aggregateRating(){return this.getValues("aggregateRating")}set aggregateRating(e){return this.setValues("aggregateRating",e)}get asin(){return this.getValue("asin")}set asin(e){return this.setValues("asin",e)}get audience(){return this.getValues("audience")}set audience(e){return this.setValues("audience",e)}get brand(){return this.getValue("brand")}set brand(e){return this.setValues("brand",e)}get category(){return this.getValues("category")}set category(e){return this.setValues("category",e)}get color(){return this.getValue("color")}set color(e){return this.setValues("color",e)}get depth(){return this.getValue("depth")}set depth(e){return this.setValues("depth",e)}get gtin(){return this.getValue("gtin")}set gtin(e){return this.setValues("gtin",e)}get height(){return this.getValue("height")}set height(e){return this.setValues("height",e)}get image(){return this.getValue("image")}set image(e){return this.setValues("image",e)}get keywords(){return this.getValues("keywords")}set keywords(e){return this.setValues("keywords",e)}get manufacturer(){return this.getValue("manufacturer")}set manufacturer(e){return this.setValues("manufacturer",e)}get model(){return this.getValue("model")}set model(e){return this.setValues("model",e)}get mpn(){return this.getValue("mpn")}set mpn(e){return this.setValues("mpn",e)}get negativeNotes(){return this.getValues("negativeNotes")}set negativeNotes(e){return this.setValues("negativeNotes",e)}get offers(){return this.getValues("offers")}set offers(e){return this.setValues("offers",e)}get positiveNotes(){return this.getValues("positiveNotes")}set positiveNotes(e){return this.setValues("positiveNotes",e)}get productID(){return this.getValue("productID")}set productID(e){return this.setValues("productID",e)}get review(){return this.getValues("review")}set review(e){return this.setValues("review",e)}get size(){return this.getValue("size")}set size(e){return this.setValues("size",e)}get sku(){return this.getValue("sku")}set sku(e){return this.setValues("sku",e)}get weight(){return this.getValue("weight")}set weight(e){return this.setValues("weight",e)}get width(){return this.getValue("width")}set width(e){return this.setValues("width",e)}addOffer(e,n="CAD"){this._record=this.addValue("offers",new ae(e,n))}static addOffer(e,n,i="CAD"){return Gu(e,n,i)}static toString(e){return Xr(e)}};function Xr(r){if(Array.isArray(r))return r.map(n=>Xr(n));let e="";return e+=`${s.getValue(r,"name")||""}`,e}function Gu(r,e,n){let i=new ae(e,n);return i.itemOffered={"@id":r?.["@id"]},r=s.addValue(r,"itemOffered",i.record),record}var Tt=class extends le{constructor(e){super(),this._defaultRecordType="ProductGroup",this._loadRecord(e),this._setValueIfString("name",e)}toString(){return Zr(this.record)}get hasVariant(){return this.getValues("hasVariant")}set hasVariant(e){return this.setValues("hasVariant",e)}get productGroupID(){return this.getValue("productGroupID")}set productGroupID(e){return this.setValues("productGroupID",e)}get variesBy(){return this.getValues("variesBy")}set variesBy(e){return this.setValues("variesBy",e)}addVariant(e){this.record=Yu(this.record,e)}generateVariants(e){this.record=Ku(this.record,e)}static toString(e){return Zr(e)}};function Zr(r){if(Array.isArray(r))return r.map(i=>Zr(i));let e="";e+=`${s.getValue(r,"name")||""}
`;let n=s.getValues(r,"hasVariant");for(let i of n)e+=" - "+le.toString(i)+`
`;return e}function Yu(r,e){return r=s.addValues(r,"hasVariant",e),r}function Ku(r,e){if(Array.isArray(e)){let a={};for(let l of e)a[l.propertyID]=a?.[l.propertyID]||[],a[l.propertyID].push(a.value);e=a}let n=Xu(e),i=Object.keys(n[0]);r=s.addValues(r,"variesBy",i);let o=V.getProperties("Product");for(let a of n){let l=JSON.parse(JSON.stringify(r));l["@type"]="Product",delete l.hasVariant,delete l.productGroupID,delete l.variesBy,l["@id"]=void 0,l.isVariantOf={"@id":r?.["@id"]};let u=[];for(let c of Object.keys(a))u.push(a?.[c]),o.includes(c)?l=s.setValue(l,c,a[c]):l=V.addAdditionalProperty(l,c,a[c]);let d=V.getValue(l,"name")+" "+u.join(" ");l=V.setValue(l,"name",d),r=V.addValue(r,"hasVariant",l)}return r}function Xu(r){return Object.keys(r).reduce((n,i)=>{let o=r[i],a=[];for(let l of n)for(let u of o)a.push({...l,[i]:u});return a},[{}])}var Pt=class extends V{constructor(e,n){super(),this._defaultRecordType="PropertyValue",this._loadRecord(e),this._setValueIfString("propertyID",e),this._setValueIfNotNull("value",n)}toString(){return ns(this.record)}get propertyID(){return s.getValues("propertyID")}set propertyID(e){return this.setValues("propertyID",e)}get value(){return s.getValues("value")}set value(e){return this.setValues("value",e)}get unitCode(){return s.getValues("unitCode")}set unitCode(e){return this.setValues("unitCode",e)}get unitText(){return s.getValues("unitText")}set unitText(e){return this.setValues("unitText",e)}get minValue(){return s.getValues("minValue")}set minValue(e){return this.setValues("minValue",e)}get maxValue(){return s.getValues("maxValue")}set maxValue(e){return this.setValues("maxValue",e)}};function ns(r){if(Array.isArray(r))return r.map(n=>ns(n));let e="";return e+=`${s.getValue(r,"propertyID")||""}: ${s.getValue(r,"value")||""} ${s.getValue(r,"unitText")||""}`,e}var ue=class extends B{constructor(e){if(super(),this._defaultRecordType="WebPage",this._html,this._jsonld,this.website,this._loadRecord(e),this._setValueIfString("url",e),s.record_type(e)=="WebSite"){this.website=e;let n=e.record||e;n=JSON.parse(JSON.stringify(n)),n["@type"]="WebPage",this.record=n}}get breadcrumb(){return this.getValue("breadcrumb")}set breadcrumb(e){return this.setValue("breadcrumb",e)}addBreadcrumb(e,n){let i=this.breadcrumb||[];i?.record_type!="BreadcrumbList"&&(i=new oe(i)),i.add({"@type":"WebPage",url:e,name:n}),this.breadcrumb=i}get mainContentOfPage(){return this.getValues("mainContentOfPage")}set mainContentOfPage(e){return this.setValues(this._record,"mainContentOfPage",e)}get primaryImageOfPage(){return this.getValues("primaryImageOfPage")}set primaryImageOfPage(e){return this.setValues(this._record,"primaryImageOfPage",e)}get relatedLink(){return this.getValues("relatedLink")}set relatedLink(e){return this.setValues(this._record,"relatedLink",e)}get reviewedBy(){return this.getValues("reviewedBy")}set reviewedBy(e){return this.setValues(this._record,"reviewedBy",e)}get significantLink(){return this.getValues("significantLink")}set significantLink(e){return this.setValues(this._record,"significantLink",e)}get specialty(){return this.getValues("specialty")}set specialty(e){return this.setValues(this._record,"specialty",e)}get WPHeader(){return this.record=Le(this.record,"WPHeader"),q(this.record,"WPHeader")}set WPHeader(e){this.record=G(this.record,"WPHeader",e)}get WPFooter(){return this.record=Le(this.record,"WPFooter"),q(this.record,"WPFooter")}set WPFooter(e){this.record=G(this.record,"WPFooter",e)}get WPSideBar(){return this.record=Le(this.record,"WPSideBar"),q(this.record,"WPSideBar")}set WPSideBar(e){this.record=G(this.record,"WPSideBar",e)}get Table(){return q(this.record,"Table")}set Table(e){this.record=G(this.record,"Table",e)}addHeaderLink(e,n){this.record=is(this.record,e,n)}addFooterLink(e,n){this.record=ss(this.record,e,n)}domain(){return os(this.url)}get html(){return this._html}set html(e){this._html=e}get jsonld(){return this._jsonld}set jsonld(e){this._jsonld=Zu(e,this.url)}static getWPHeader(e){return q(e,"WPHeader")}static getWPFooter(e){return q(e,"WPFooter")}static getWPSideBar(e){return q(e,"WPSideBar")}static getTable(e){return q(e,"Table")}static setWPHeader(e,n){return G(e,"WPHeader",n)}static setWPFooter(e,n){return G(e,"WPFooter",n)}static setWPSideBar(e,n){return G(e,"WPSideBar",n)}static setTable(e,n){return G(e,"Table",n)}static addHeaderLink(e,n,i){return is(e,n,i)}static addFooterLink(e,n,i){return ss(e,n,i)}static getDomain(e){return os(s.getValue(e,"url")||e)}};function Le(r,e){let i=s.getValues(r,"hasPart").find(o=>s.getValue(o,"@type")==e);return i||(i={"@type":e,hasPart:[]},r=s.addValue(r,"hasPart",i)),r}function q(r,e){return s.getValues(r,"hasPart").find(o=>s.record_type(o)==e)}function G(r,e,n){let i=s.getValues(r,"hasPart");return i=i.filter(o=>s.record_type(o)!=e),i.push(n),r=s.setValues(r,"hasPart",i),r}function is(r,e,n){r=Le(r,"WPHeader");let i={"@type":"WebPage",name:n,url:e},o=q(r,"WPHeader");return o=s.addValue(o,"hasPart",i),r=G(r,"WPHeader",o),r}function ss(r,e,n){r=Le(r,"WPFooter");let i={"@type":"WebPage",name:n,url:e},o=q(r,"WPFooter");return o=s.addValue(o,"hasPart",i),r=G(r,"WPFooter",o),r}function os(r){try{let e=new Url(r).hostname;return e=e.replace(/^www\./,""),e}catch{return}}function Zu(r,e){let n=new s.DB;n.post(r);let i=n.records,o=[];if(Qu(r)=="Product"){let u=i.filter(g=>s.record_type(g)=="Product")[0];o.push({replacee:s.record_id(u),replacer:e+"#product"}),u=s.setValue(u,"url",e);let d=s.getValues(u,"brand");d=d.map(g=>g?.["@type"]?{"@type":"brand",name:g}:g),u=s.setValues(u,"brand",d);let c=i.filter(g=>s.record_type(g)=="Offer");c=c.map(g=>s.setValues(g,"itemOffered",s.ref(u))),u=s.setValues(u,"offers",c);let f=i.filter(g=>s.record_type(g)=="Review");c=c.map(g=>s.setValues(g,"itemReviewed",s.ref(u))),u=s.setValues(u,"review",f);let m=i.filter(g=>s.record_type(g)=="AggregateRating");return m=m.map(g=>s.setValues(g,"itemReviewed",s.ref(u))),u=s.setValues(u,"aggregateRating",m),u=s.replaceIds(u,o),u}return r}function Qu(r){if(r=s.toArray(r),r=r.filter(n=>s.record_type(n)!="BreadcrumbList"),r.length==1&&s.record_type(r[0]!="WebPage"))return r[0]?.["@type"];if(r.length==1&&s.record_type(r[0]=="WebPage")&&(r=s.getValues(r,"mainEntity")),r.filter(n=>s.record_type(n)=="Product").length==1)return"Product"}var vt=class extends ue{constructor(e){super(),this._defaultRecordType="WebSite",this._loadRecord(e),this._setValueIfString("url",e)}get issn(){return this.getValues("issn")}set issn(e){return this.setValues("issn",e)}getWebPage(e,n){let i=new ue(this);return i.url=e,i.name=n,i}domain(){return as(this.url)}static getDomain(e){return as(s.getValue(e,"url")||e)}};function as(r){try{let e=new Url(r).hostname;return e=e.replace(/^www\./,""),e}catch{return}}var Rt=class extends V{constructor(e){super(),this._defaultRecordType="WebAPI",this._loadRecord(e),this._setValueIfString("url",e)}toString(){return`${this.position||""} ${this.item.name||this.item.record_id||this.item?.["@id"]}`}get documentation(){return this.getValue("documentation")}set documentation(e){return this.setValue("documentation",e)}};var I={get:V.toThing,toThing:V.toThing,Action:Ee,AddAction:bt,AppendAction:At,BrandDesign:_t,Conversation:It,CreativeWork:B,DataFeed:Nt,DataFeedItem:Ae,DeleteAction:xt,InsertAction:wt,ItemList:oe,Message:W,Offer:ae,Product:le,ProductGroup:Tt,PropertyValue:Pt,Thing:V,PrependAction:$t,ReplaceAction:Vt,UpdateAction:z,WebAPI:Rt,WebPage:ue,WebSite:vt,format:Tr,toThing:td},ed=I;function td(r){let e=s.record_type(r);return I?.[e]?new I[e](r):new I.Thing(r)}var en={};y(en,{Button:()=>rd,DropdownMenu:()=>ds,escapeHtml:()=>$e});function $e(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function rd({children:r="",variant:e="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button type="button" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none ${a[e]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${r}
    </button>
  `.trim()}function us(r,e=""){return!r||typeof r!="object"?"":Object.entries(r).map(([n,i])=>{let o=e?`${e}[${n}]`:n;return typeof i=="object"&&i!==null?us(i,o):`<input type="hidden" name="${$e(o)}" value="${$e(String(i))}">`}).join("")}function ds({label:r="",items:e=[],align:n="end",variant:i="ghost",size:o="icon",className:a="",attrs:l=""}={}){let u={start:"left-0 origin-top-left",end:"right-0 origin-top-right"},d={default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground"},c={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 p-0"},f=`
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim(),m=r?`<span class="mr-2">${$e(r)}</span>${f}`:`${f}<span class="sr-only">Toggle menu</span>`;e=e||[],e=(Array.isArray(e),e);let g=e.map(_=>{if(_.isSeparator)return'<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>';let H=us(_.object),K=_.disabled?"disabled":"";return`
        <form method="POST" action="${$e(_.url||"")}" class="m-0 p-0">
          ${H}
          <button
            type="submit"
            ${K}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${$e(_.name||"")}
          </button>
        </form>
      `.trim()}).join("");return`
    <details class="relative inline-block text-left ${a}" ${l}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${d[i]||d.ghost} ${c[o]||c.icon}"
      >
        ${m}
      </summary>

      <div class="absolute ${u[n]||u.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${g}
      </div>
    </details>
  `.trim()}var Q={};y(Q,{components:()=>A});var tn={};y(tn,{Accordion:()=>nd});function nd({items:r=[],className:e=""}){let n=r.map(i=>`
      <details class="group border-b border-border py-2" ${i.open?"open":""}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${i.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${i.content}
        </div>
      </details>
    `).join("");return`<div class="w-full ${e}">${n}</div>`.trim()}var rn={};y(rn,{Alert:()=>id});function id({title:r,description:e="",variant:n="default",className:i=""}){let o={default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"};return`
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${o[n]||o.default} ${i}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${r}</h5>
        ${e?`<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${e}</div>`:""}
      </div>
    `.trim()}var nn={};y(nn,{Badge:()=>cs,Badges:()=>sd});function cs({text:r,variant:e="default",className:n=""}){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return`
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${i[e]||i.default} ${n}">
        ${r}
      </div>
    `.trim()}function sd({text:r,variant:e="default",className:n=""}){let i={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground border-border"};return typeof r=="string"&&(r=[r]),`
      <div class="flex flex-wrap gap-2">
        ${r.map(o=>cs({text:o,variant:e})).join("")}
      
      </div>
    `.trim()}var sn={};y(sn,{Breadcrumb:()=>od,BreadcrumbEllipsis:()=>ld,BreadcrumbItem:()=>gs,BreadcrumbLink:()=>hs,BreadcrumbList:()=>ps,BreadcrumbMain:()=>fs,BreadcrumbPage:()=>ad,BreadcrumbSeparator:()=>ms});function od({urls:r,titles:e,links:n}){let i=new I.ItemList(n);if(r)for(let l=0;l<r.length;l++){let u=e?.[l]||r[l].split("/")?.[r[l].split("/").length-1]||"na";i.add({"@type":"WebPage",url:r[l],name:u})}let o=i.items;return console.log("items",o),fs({children:ps({children:o.map(l=>gs({children:hs({href:l?.url,children:l?.name})})).join(ms())})})}function fs({children:r="",className:e="",attrs:n=""}={}){return`
      <nav aria-label="breadcrumb" class="${e}" ${n}>
        ${r}
      </nav>
    `.trim()}function ps({children:r="",className:e="",attrs:n=""}={}){return`
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${e}" ${n}>
        ${r}
      </ol>
    `.trim()}function gs({children:r="",className:e="",attrs:n=""}={}){return`
      <li class="inline-flex items-center gap-1.5 ${e}" ${n}>
        ${r}
      </li>
    `.trim()}function hs({children:r="",href:e="#",className:n="",attrs:i=""}={}){return`
      <a href="${e}" class="transition-colors hover:text-foreground ${n}" ${i}>
        ${r}
      </a>
    `.trim()}function ad({children:r="",className:e="",attrs:n=""}={}){return`
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${e}" ${n}>
        ${r}
      </span>
    `.trim()}function ms({children:r,className:e="",attrs:n=""}={}){let i=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();return`
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${e}" ${n}>
        ${r!==void 0?r:i}
      </li>
    `.trim()}function ld({className:r="",attrs:e=""}={}){return`
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${r}" ${e}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim()}var on={};y(on,{Button:()=>ud});function ud({text:r,variant:e="primary",size:n="default",className:i="",attrs:o=""}){let a={primary:"bg-primary text-primary-foreground shadow hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"},l={sm:"h-8 rounded-md px-3 text-xs",default:"h-9 px-4 py-2 text-sm",lg:"h-10 rounded-md px-8 text-base"};return`
      <button class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[e]||a.primary} ${l[n]||l.default} ${i}" ${o}>
        ${r}
      </button>
    `.trim()}var an={};y(an,{Card:()=>dd});function dd({title:r="",description:e="",url:n,media:i="",header:o="",content:a="",footer:l="",className:u="",attrs:d="",options:c={}}){return`
  
    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${u}" ${d}>

      ${cd(o)}

      ${yd(i)}

      ${fd(`

        ${pd(`

            ${hd(r,n)}
            
            ${md(e)}

        `)}

      `)}

      ${gd(l)}

    </div>
  `}function cd(r){return!r||r.trim().length==0?"":`
    <header class="card-header  ${r?.record?.className||r?.className||""} ">${r?.htmlValue||r?.value||r||""}</header>

  `}function fd(r,e){return!r||r.trim().length==0?"":`
    <section class="card-main  ${r?.record?.className||r?.className||""} ">${r?.htmlValue||r?.value||r||""}</section>

  `}function pd(r,e){return!r||r.trim().length==0?"":`
      <div class="card-body flex-1 space-y-4  mb-6 ${r?.record?.className||r?.className||""} ">${r?.htmlValue||r?.value||r||""}</div>

  `}function gd(r,e){return!r||r.trim().length==0?"":`
    <footer class="card-footer mt-auto align-bottom ${r?.record?.className||r?.className||""} ">${r?.htmlValue||r?.value||r||""}</footer>
  `}function hd(r,e,n){return!r||r.trim().length==0?"":`
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${r?.record?.className||r?.className||""} ">
    <a href="${e||""}">
     ${r?.htmlValue||r?.value||r||""}
    </a>
    </h3>
     `}function md(r,e){return!r||r.trim().length==0?"":`
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${r?.record?.className||r?.className||""}">${r?.htmlValue||r?.value||r||""}</p>
  `}function yd(r,e){return!r||r.trim().length==0?"":`
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${r?.record?.className||r?.className||""} ">
        ${r?.htmlValue||r?.value||r||""}
    </div>
  `}var ln={};y(ln,{Dialog:()=>bd});function bd({id:r,title:e,description:n="",content:i,footer:o="",className:a=""}){return`
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
    `.trim()}var un={};y(un,{Footer:()=>xd});function xd({brand:r="Acme Inc",copyright:e="",columns:n=[],className:i=""}){e=e||`&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`;let o=n.map(a=>`
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
    `.trim()}var dn={};y(dn,{Header:()=>Vd});function Vd({brand:r="",navItems:e=[],actions:n="",className:i=""}){let o=e.map((a,l)=>{if(a.dropdown&&a.dropdown.length>0){let u=`dropdown-menu-${l}`;return`
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
              ${a.dropdown.map(d=>`
                <a href="${d.url||"#"}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${d.name}
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
    `.trim()}var cn={};y(cn,{H1:()=>wd,H2:()=>Ad,H3:()=>$d,H4:()=>_d,H5:()=>kd,H6:()=>Sd,Heading:()=>de,P:()=>Id,Text:()=>Nd});function wd(r,{options:e,className:n}){return de({title:r,level:"1",options:e,className:n})}function Ad(r,{options:e,className:n}){return de({title:r,level:"2",options:e,className:n})}function $d(r,{options:e,className:n}){return de({title:r,level:"3",options:e,className:n})}function _d(r,{options:e,className:n}){return de({title:r,level:"4",options:e,className:n})}function kd(r,{options:e,className:n}){return de({title:r,level:"5",options:e,className:n})}function Sd(r,{options:e,className:n}){return de({title:r,level:"6",options:e,className:n})}function de({title:r,level:e,options:n,className:i}){return e=String(e||1),`
    <h${e} class="
      break-all 
      ${i||""}
      "
    >${r}</h${e}>
    
    `}function Id(r,e,{options:n,className:i}){return`
      <p class="${e!==void 0?`line-clamp-${e??1}`:""} ${i??""} "
      >${r||""}</p>
    
    `}function Nd(r,e,{options:n,className:i}){return`
      <p class="${e!==void 0?`line-clamp-${e??1}`:""} ${i??""} "
      >${r||""}</p>
    
    `}var fn={};y(fn,{ImageModal:()=>Td});function Td({src:r,alt:e="",caption:n="",aspectRatio:i="aspect-video",className:o="",imageClassName:a="",attrs:l=""}){let u=`img-modal-${Math.random().toString(36).substring(2,9)}`;return`
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
  `.trim()}var pn={};y(pn,{Input:()=>L,InputCheckbox:()=>Pd,InputDate:()=>vd,InputDateTime:()=>jd,InputEmail:()=>Cd,InputNumber:()=>Rd,InputPassword:()=>Dd,InputTel:()=>Od,InputText:()=>Ud,InputTime:()=>Bd,InputUrl:()=>Hd});function L({label:r="",type:e="text",placeholder:n="",value:i="",id:o="",className:a="",attrs:l=""}){let u=o?`id="${o}"`:"";return`
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
    `.trim()}function Pd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"checkbox",label:r,value:e,propertyID:n,id:i,className:o})}function vd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"date",label:r,value:e,propertyID:n,id:i,className:o})}function Rd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"number",label:r,value:e,propertyID:n,id:i,className:o})}function jd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"datetime-local",label:r,value:e,propertyID:n,id:i,className:o})}function Cd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"email",label:r,value:e,propertyID:n,id:i,className:o})}function Dd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"password",label:r,value:e,propertyID:n,id:i,className:o})}function Od({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"tel",label:r,value:e,propertyID:n,id:i,className:o})}function Ud({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"text",label:r,value:e,propertyID:n,id:i,className:o})}function Bd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"time",label:r,value:e,propertyID:n,id:i,className:o})}function Hd({label:r="",value:e="",propertyID:n="",id:i="",className:o=""}){return L({type:"url",label:r,value:e,propertyID:n,id:i,className:o})}var gn={};y(gn,{Pagination:()=>Md,PaginationComponent:()=>bs,PaginationContent:()=>xs,PaginationEllipsis:()=>As,PaginationItem:()=>Fe,PaginationLink:()=>jt,PaginationNext:()=>ws,PaginationPrevious:()=>Vs,buildPaginationUrl:()=>ys});function ys(r,e,n){try{let i=new URL(r,typeof window<"u"?window.location.href:"http://localhost");return i.searchParams.set("limit",String(e)),i.searchParams.set("offset",String(n)),i.pathname+i.search+i.hash}catch{return`${String(r).split("?")[0]}?limit=${e}&offset=${n}`}}function bs({children:r="",className:e="",attrs:n=""}={}){return`
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${e}"
      ${n}
    >
      ${r}
    </nav>
  `.trim()}function xs({children:r="",className:e="",attrs:n=""}={}){return`
    <ul class="flex flex-row items-center gap-1 ${e}" ${n}>
      ${r}
    </ul>
  `.trim()}function Fe({children:r="",className:e="",attrs:n=""}={}){return`
    <li class="${e}" ${n}>
      ${r}
    </li>
  `.trim()}function jt({href:r="#",isActive:e=!1,size:n="icon",children:i="",className:o="",attrs:a=""}={}){let l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"},u="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",d=e?"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground":"hover:bg-accent hover:text-accent-foreground";return`
    <a
      href="${r}"
      aria-current="${e?"page":"false"}"
      class="${u} ${l[n]||l.icon} ${d} ${o}"
      ${a}
    >
      ${i}
    </a>
  `.trim()}function Vs({href:r="#",disabled:e=!1,className:n="",attrs:i=""}={}){return jt({href:r,size:"default",className:`gap-1 pl-2.5 ${e?"pointer-events-none opacity-50":""} ${n}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `})}function ws({href:r="#",disabled:e=!1,className:n="",attrs:i=""}={}){return jt({href:r,size:"default",className:`gap-1 pr-2.5 ${e?"pointer-events-none opacity-50":""} ${n}`,attrs:`${e?'aria-disabled="true" tabindex="-1"':""} ${i}`,children:`
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `})}function As({className:r="",attrs:e=""}={}){return`
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${r}"
      ${e}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim()}function Md({url:r,total:e,limit:n=10,offset:i=0,siblingCount:o=1,className:a="",attrs:l=""}={}){let u=Math.ceil(e/n)||1,d=Math.floor(i/n)+1,c=w=>{let j=(w-1)*n;return ys(r,n,j)},f=(w,j)=>{let ie=j-w+1;return Array.from({length:ie},(ze,qe)=>w+qe)},m=o+5,g=[];if(m>=u)g=f(1,u);else{let w=Math.max(d-o,1),j=Math.min(d+o,u),ie=w>2,ze=j<u-2,qe=1,Js=u;if(!ie&&ze){let ke=3+2*o;g=[...f(1,ke),"ellipsis",u]}else if(ie&&!ze){let ke=3+2*o,Nn=f(u-ke+1,u);g=[qe,"ellipsis",...Nn]}else if(ie&&ze){let ke=f(w,j);g=[qe,"ellipsis",...ke,"ellipsis",Js]}}let _=[],H=d>1,K=H?c(d-1):"#";_.push(Fe({children:Vs({href:K,disabled:!H})})),g.forEach(w=>{if(w==="ellipsis")_.push(Fe({children:As()}));else{let j=Number(w),ie=j===d;_.push(Fe({children:jt({href:c(j),isActive:ie,children:String(j)})}))}});let R=d<u,F=R?c(d+1):"#";_.push(Fe({children:ws({href:F,disabled:!R})}));let _e=bs({className:a,attrs:l,children:xs({children:_.join("")})});return _e=`  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${_e}
    </div>`,_e}var hn={};y(hn,{Section:()=>Ed,SectionHeader:()=>Wd});function Ed({children:r="",variant:e="default",container:n="default",className:i="",containerClassName:o="",attrs:a=""}={}){let l={none:"py-0",sm:"py-8 md:py-12",default:"py-12 md:py-16 lg:py-24",lg:"py-16 md:py-24 lg:py-32",xl:"py-20 md:py-32 lg:py-40"},u={none:"",sm:"max-w-3xl",default:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-[96rem]",full:"w-full"},d=l[e]||l.default,c=u[n]!==void 0?u[n]:u.default,f=n!=="none"?`<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${c} ${o}".trim()>${r}</div>`:r;return`
    <section class="w-full bg-background text-foreground ${d} ${i}" ${a}>
      ${f}
    </section>
  `.trim()}function Wd({title:r="",description:e="",align:n="left",className:i=""}={}){let o={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"};return`
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${o[n]||o.left} ${i}">
      ${r?`<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${r}</h2>`:""}
      ${e?`<p class="text-lg text-muted-foreground max-w-2xl">${e}</p>`:""}
    </div>
  `.trim()}var mn={};y(mn,{Table:()=>Fd,TableBody:()=>ks,TableCell:()=>Y,TableCellCenter:()=>Yd,TableCellLeft:()=>Gd,TableCellLink:()=>Xd,TableCellNumber:()=>Kd,TableCellRight:()=>Is,TableCellText:()=>Zd,TableColumnHeader:()=>_s,TableColumnHeaderCenter:()=>qd,TableColumnHeaderLeft:()=>Jd,TableColumnHeaderRight:()=>zd,TableFooter:()=>Ns,TableHeader:()=>$s,TableRow:()=>Ss,getTable:()=>Ld});function Ld({headers:r=[],rows:e=[],className:n=""}){return`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${n||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${$s(r.map(i=>_s(i)))}
      
        ${ks(e.map(i=>Ss(i.map(o=>Y(o)))))}
        
        ${Ns()}

      </table>

    </div>
  
  
  `}function Fd(r="",e=""){return Array.isArray(r)&&(r=r.join(" ")),`
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${e||""}">
      
      <table class="w-full caption-bottom text-sm">

        ${r}

      </table>

    </div>
  
  
  `}function $s(r,e){return r?(Array.isArray(r)&&(r=r.join(" ")),`
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${r}
        </tr>
  </thead>
  `):""}function _s(r,e){return r||(r=""),`
    <td class="p-4 align-middle pr-0 ${r?.table?.className||r?.className||""}">
      ${r?.htmlValue??r?.value??r}
    </td>
  `}function Jd(r,e){return Y(r,e)}function zd(r,e){return e=e+" text-right ",Y(r,e)}function qd(r,e){return e=e+" text-center ",Y(r,e)}function ks(r,e){return!r||(Array.isArray(r)&&(r=r.join(" ")),r.trim().length==0)?"":`
  <tbody class="[&_tr:last-child]:border-0">${r}</tbody>
  
  `}function Ss(r,e){return!r||(Array.isArray(r)&&(r=r.join("")),r.trim().length==0)?"":`
  
  <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    ${r}
  </tr>
  `}function Y(r,e){return r||(r=""),Array.isArray(r)&&(r=r.join(" ")),`
    <td 
      class="
        p-4 
        align-middle                                     
        ${r?.table?.className||r?.className||""}                    
        ${e||""}
      "
    >
      ${r?.htmlValue??r?.value??r??""}
    </td>
  `}function Gd(){return Y(content,className)}function Is(r,e){return e=e+" text-right ",Y(r,e)}function Yd(r,e){return e=e+" text-center ",Y(r,e)}function Kd(r,e,n,i){return r=s.toNumber(r),r=b.number.format(r,e),Is(`
      
    ${r||""}
    ${n||""}
  `,"krnumber h-min font-mono")}function Xd(r,e,n,i){return Y(`
      
    <a title="${e||""}" href="${r||""}" target="_blank" rel="noopener noreferrer">${e||r||""}</a>
    ${n||""}
  `,"krurl max-w-2xs truncate")}function Zd(r,e,n){return Y(`

    <div title="${r}" class=" line-clamp-4">${r??""}</div>
    ${e||""}
  `,"")}function Ns(r,e){return r?`
    
      <tfoot>
      
        ${r}

      </tfoot>
    
    `:""}var yn={};y(yn,{Webpage:()=>Qd});function Qd({title:r,headContent:e,header:n,footer:i,content:o,breadcrumb:a}){return`
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
  `.trim()}var bn={};y(bn,{CardGrid:()=>ec});function ec({nbOfColumns:r,content:e}){let n=String(r??2),i=String(r??3),o=String(r??4);return r=String(r??1),`
    <div class="grid grid-cols-${r} gap-6 sm:grid-cols-${n} lg:grid-cols-${i} xl:grid-cols-${o}">
      ${e}
    </div>
  `}var xn={};y(xn,{JsonEditor:()=>rc});function Ts({children:r="",variant:e="default",size:n="default",className:i="",attrs:o=""}={}){let a={default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"};return`
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${a[e]||a.default} ${l[n]||l.default} ${i}" ${o}>
      ${r}
    </button>
  `.trim()}function tc({title:r="",description:e="",children:n="",footer:i="",className:o="",attrs:a=""}={}){return`
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
  `.trim()}function rc({id:r=`json_editor_${Math.random().toString(36).substring(2,9)}`,endpoint:e="",initialData:n={title:"Sample Record",active:!0},headers:i={"Content-Type":"application/json"},className:o="",attrs:a=""}={}){let l=r.replace(/[^a-zA-Z0-9_]/g,"_"),u=typeof n=="string"?n:JSON.stringify(n,null,2),d=JSON.stringify(i,null,2),c=`
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
            ${Ts({children:"Format",variant:"outline",size:"sm",attrs:`type="button" onclick="window.${l}_format()"`})}
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
        ${Ts({children:"Submit Record",variant:"default",attrs:`id="${l}_submit_btn" type="submit"`})}
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
  `.trim();return tc({title:"JSON Record Editor",description:"View, edit, and post JSON records directly to your backend service.",children:f,className:o,attrs:a})}var A={...tn,...rn,...nn,...sn,...on,...an,...bn,...ln,...en,...un,...dn,...fn,...pn,...xn,...gn,...hn,...mn,...cn,...yn};var $n={};y($n,{Card:()=>dc,Cards:()=>cc});var Dt={};y(Dt,{fixedLength:()=>Ct,textCenter:()=>Vn});function Ct(r,e=void 0,n=0){let i=r;if(s.isArray(r)){let a=r.length;a==0&&(r=""),a==1&&(r=r[0]),a>1&&(r=`(${r.length})`)}let o=b.getDataType(r);if(o=="Undefined"&&(r=""),o=="Jsonld"&&(r=r?.["@id"]),o=="Number"&&(r=b.toNumber(r),r=r.toFixed(n),r=r.padStart(e," ")),o=="Date"&&(r=b.toDate(r),r=new Intl.DateTimeFormat("en-CA").format(r)),r=r===void 0?"":r,e!=null&&r.length>e){let a="",l=Math.round(e/3),u=e-l-3;a+=r.slice(0,l),a+="...",a+=r.slice(-u),r=a}return e!=null&&(r=r.padEnd(e," ")),r}function Vn(r,e,n=" "){r=r??"",r=String(r);let i=Math.floor((e-r.length)/2);return r=r.padStart(r.length+i,n).padEnd(e,n),r}var An={};y(An,{toTextRecord:()=>nc,toTextTable:()=>oc});function nc(r,e=80){let n=ic(r,e),i=sc(r),o="";o+=Ps(n),o+=`
`,i.length>0?o+=i.map(a=>vs(a,n)).join(""):o+=`(no records)
`}function ic(r,e=80){let i=wn(r).map(l=>(l||"").length),o=Math.max(...i);return[{t:"Property ID",p:"propertyID",w:Math.max(o,11)},{t:"Value",p:"value",w:e-Math.max(o,11)}]}function sc(r){let e=wn(r),n=[];for(let i of e){let o={"@type":"PropertyValue",propertyID:i,value:b.getValues(r,i)};n.push(o)}return n}function oc(r,e,n=!0,i=80){e=ac(r,e,n),r=lc(r,e,n);let o="";if(o+=Ps(e),o+=`
`,r.length>0){let a=r.map(l=>vs(l,e));o+=a.join("")}else o+=Vn("(no records to display.)",i);return o}function ac(r,e,n=!0){e=s.toArray(e),(!e||e.length==0)&&(e=wn(r).map(o=>({title:o,propertyID:o,width:o.length}))),(n=!0)&&(e.map(o=>o?.propertyID||o?.p).includes("position")||(e=[{t:"#",p:"position",w:4,r:0}].concat(e)));for(let i of e)i.title=i?.title||i?.t||i?.propertyID||i?.p||"",i.t=i.title,i.propertyID=i?.propertyID||i?.p||"",i.p=i.propertyID,i.width=i?.width||i?.w||i?.length||i?.l||title.length,i.width=Number(i.width),i.width=Math.max(i.width,i.title.length),i.w=i.width,i.length=i.width,i.l=i.width,i.rounding=i?.rounding||i?.r||0,i.rounding=Number(i.rounding),i.r=i.rounding;return e}function lc(r,e,n=!0){if(r=s.toArray(r),!r||r.length==0)return[];if(r=JSON.parse(JSON.stringify(r)),n==!0)for(let[i,o]of r.entries())o.position=o?.position??i;return r}function Ps(r){let e="",n=[];for(let o of r){let a=`${Ct(o.title,o.width,o.rounding)}`;n.push(a)}e+=n.join(" "),e+=`
`;let i=[];for(let o of r){let a=`${"".padStart(o.width,"-")}`;i.push(a)}return e+=i.join(" "),e+=`
`,e}function vs(r,e){let n="",i=[];for(let o of e){let a=s.getValues(r,o.propertyID),l=`${Ct(a,o.width,o.rounding)}`;i.push(l)}return n+=i.join(" "),n+=`
`,n}function wn(r){r=s.toArray(r);let e=r.map(n=>Object.keys(n));return e=e.flat(),e=[...new Set(e)],e=uc(e),e}function uc(r){r=s.toArray(r);let e=["position","@type","@id"];return r.sort((n,i)=>{if(n==i)return 0;for(let o of e){if(n==o&&i!=o)return-1;if(n!=o&&i==o)return 1}return n.startsWith("@")&&!i.startsWith("@")?-1:!n.startsWith("@")&&i.startsWith("@")?1:n<i?-1:1}),r}var Eh={...Dt,...An};function re({url:r,record:e,options:n,layoutClasses:i,className:o,attrs:a}){return s.record_type(e)=="VideoObject"?`  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${s.getValue(e,"thumbnailUrl")}">
                    <source src="${s.getValue(e,"contentUrl")}" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `:`
        
                    <div class="block-media  ">

          
                ${A.ImageModal({src:s.getImageUrl(e),alt:s.getImageName(e)})}
         
                    </div>

        `}function ne({website:r,webpage:e,title:n,headContent:i,content:o,options:a}){e=new I.WebPage(e),r=new I.WebSite(r);let l={};l.title=n,l.title=l.title||s.getValue(e,"title"),l.title=l.title||s.getValue(e,"name"),l.title=l.title||s.getValue(r,"title"),l.title=l.title||s.getValue(r,"name"),l.headContent=i,l.breadcrumb=A.Breadcrumb({links:s.getValue(e,"breadcrumb")});let u=s.getValue(r,"about.name")??s.getValue(r,"name")??s.getValue(e,"about.name")??s.webpage(r,"name"),d=e.WPHeader.hasPart||[],c=e.WPFooter.hasPart||[];return d=Array.isArray(d)?d:[d],c=Array.isArray(c)?c:[c],l.header=A.Header({brand:u,navItems:d}),l.footer=A.Footer({brand:u,navItems:c}),l.content=o,A.Webpage(l)}function Rs({website:r,webpage:e,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:d,offset:c,limit:f,options:m}){return a=a??"",a+=ee.Cards({url:i,records:l,offset:c,limit:f,nbOfColumns:3,options:m}),ne({website:r,webpage:e,title:n,headContent:o,content:a,options:m})}function dc(r,e,n,i=!0){let o=I.format.getTitle1(r),a=I.format.getContent(r),l=s.getRecordUrl(r,e),u=i==!0?I.format.imageUrl(r):void 0;return A.Card({title:o,description:a,url:l,media:u,className:n})}function cc({url:r,records:e,offset:n,limit:i,orderBy:o,orderDirection:a,nbOfColumns:l,includePagination:u,options:d,layoutClasses:c,className:f,attrs:m}){n=Number(n),n=isNaN(n)?0:n,i=Number(i),i=isNaN(i)?20:i;let g=new I.ItemList(e);g=g.record,g.numberOfItems=g?.numberOfItems??g.itemListElement.length,g=Je({record:g,options:d}),g.itemListElement=g.itemListElement.filter(R=>s.getValue(R,"position")>=n&&s.getValue(R,"position")<n+i);let _="";for(let R of s.getValues(g,"itemListElement")){let F=s.getValue(R,"item");_+=fc({url:r,item:F,options:d})}_=A.CardGrid({content:_,nbOfColumns:l});let H=A.Pagination({url:r,limit:i,offset:n,total:g.numberOfItems,options:d});return`

        <div class="${c} ${f}" ${m}>
        <div class="flex-1">
            ${_}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${H}
        </div>
        </div>

    `}function fc({url:r,item:e,options:n}){let i=s.getImageUrl(e),o=s.getImageName(e),a=s.getValues(e,"keywords");a=a.map(c=>`<a href="/?keywords=${c}">${c}</a>`);let l=A.Badges({text:a,variant:"secondary"}),u={title:s.getValue(e,"name"),url:s.getRecordUrl(e,n?.baseUrl),description:s.getValue(e,"description"),footer:l,image:s.getImageUrl(e),imageAlt:s.getImageName(e),media:re({record:e,options:n})};return A.Card(u)}function Cs({url:r,records:e,properties:n,headers:i,columnTypes:o,offset:a,limit:l,options:u,baseUrl:d,showThumbnail:c=!0,showPosition:f=!0,showPotentialActions:m,layoutClasses:g,className:_,attrs:H}){n=n||pc(e),i=i||gc(n),o=o||[];let K=s.getValues(new I.ItemList(e).record,"itemListElement");return c==!0&&(i=["Thumbnail"].concat(i),n=["item"].concat(n),o=["thumbnail"].concat(o)),f==!0&&(i=["#"].concat(i),n=["position"].concat(n),o=["position"].concat(o)),A.Table(`
            ${A.TableHeader(i.map((R,F)=>{switch(o[F]){case"number":return A.TableColumnHeaderRight(R);default:return A.TableColumnHeader(R)}}))}
             
            ${A.TableBody(K.map(R=>A.TableRow(n.map((F,_e)=>{let w=F?s.getValues(R,F):R;if(w=s.isArray(w)&&w.length==0?"":w,w=s.isArray(w)&&w.length==1?w[0]:w,(F||"").endsWith("@type")){let j=b.url.getUrl(u?.baseUrl??d,"/"+w);return A.TableCellLink(j,w)}if((F||"").endsWith("@id")){let j=s.getRecordUrl(R,u?.baseUrl??d);return A.TableCellLink(j,w)}switch(o?.[_e]||hc(w)){case"array":return A.TableCellCenter(`(${w.length})`);case"text":return A.TableCellText(w);case"number":return A.TableCellNumber(w,2);case"link":return A.TableCellLink(w,w);case"thumbnail":return A.TableCell(re({record:w}));case"position":return A.TableCellNumber(w,0);case"object":return A.TableCellLink(s.getRecordUrl(w,u?.baseUrl??d),s.record_id(w));default:return A.TableCellText(w)}}))))}
        `)}function pc(r){let n=s.getValues(r,"itemListElement").map(o=>s.getValue(o,"item")),i=[...new Set(n.flatMap(Object.keys))];return i=i.filter(o=>o.startsWith("@")===!1),i=i.map(o=>"item."+o),i=["item.@type","item.@id"].concat(i),i}function gc(r){r=r||[];let e=r.map(n=>n.split(".")?.[1]||n);return e=e.map(n=>n=="position"?"No":n),e=e.map(n=>({htmlValue:n,table:{className:"capitalize"}})),e}function hc(r){return r=s.isArray(r)&&r.length==0?void 0:r,r=s.isArray(r)&&r.length==1?r[0]:r,r?b.isNumber(r)?"number":b.isUrl(r)?"link":b.isDate(r)?"date":b.isArray(r)?"array":b.isObject(r)?"object":"text":"text"}function Ds(r,e,n){let i=Ic(r,e);return i=mc(r,i,n),i}function mc(r,e,n){if(e?.value===void 0)return e;let i=b.getDataType(e.value),o=e.propertyID.split(".")[e.propertyID.split(".").length-1];return o=="@id"?yc(r,e,n):o=="@type"?bc(r,e,n):i=="URL"?Vc(r,e,n):i=="DateTime"?wc(r,e,n):i=="Duration"?Ac(r,e,n):i=="Number"?$c(r,e,n):i=="Array"?xc(r,e,n):i=="Thing"?s.record_type(e.value)=="MonetaryAmount"?Sc(r,e,n):kc(r,e,n):i=="Text"?_c(r,e,n):e}function yc(r,e,n){let i=s.getRecordUrl({"@id":e.value},n);return e.htmlValue=`<a title="${e?.value}" href="${i}">${e.value}</a>`,e.table.className="krpropertyrecordid max-w-2xs truncate",e}function bc(r,e,n){let i=b.url.getUrl(n,e.value);return e.htmlValue=`<a class="h-min" title="${e?.value}" href="${i}">${e.value}</a>`,e.table.className="krrecordtype max-w-2xs truncate",e}function xc(r,e,n){return e.table.className="krarray w-min text-center",e.htmlValue=e.value.length>0?`(${e.value.length})`:"",e}function Vc(r,e,n){return e.htmlValue=`<a title="${e?.value}" href="${e.value}" target="_blank" rel="noopener noreferrer">${e.value}</a>`,e.table.className="krurl max-w-2xs truncate",e}function wc(r,e,n){return e.value=s.toDate(e.value),e.htmlValue=b.date.format(e.value),e.table.className="krdatetime h-min truncate",e}function Ac(r,e,n){return e.htmlValue=b.duration.format(e.value),e.table.className="krduration h-min truncate",e}function $c(r,e,n){let i=e.propertyID=="position"?0:2;return e.value=s.toNumber(e.value),e.table.className="krnumber h-min text-right font-mono",e.htmlValue=b.number.format(e.value,i),e}function _c(r,e,n){return e.htmlValue=`<div title="${e?.value}" class=" line-clamp-4">${e?.value??""}</div>`,e.table.className="krtext",e}function kc(r,e,n){let i=s.getRecordUrl(e.value,n);return e.htmlValue=`<a title="${s.record_id(e.value)}" href="${i}">${s.getValue(e.value,"name")||s.record_id(e.value)}</a>`,e.table.className="max-w-xs truncate",e}function Sc(r,e,n){let i=b.toNumber(s.getValue(e.value,"value"));if(i===void 0)return e;let o=b.number.format(i,2),a=s.getValue(r,"currency");return a=(a||"").toUpperCase(),e.htmlValue=a+" $"+o,a=="USD"&&(e.htmlValue=a+" $"+o),a=="CAD"&&(e.htmlValue=a+" $"+o),a=="EUR"&&(e.htmlValue=a+" "+o+" \u20AC"),a=="GBP"&&(e.htmlValue=a+" "+o+" \xA3"),e.table.className="text-right font-mono",e.record.className="text-right font-mono",e}function Ic(r,e){let n=s.getValues(r,e);return n=s.isArray(n)&&n.length==1?n[0]:n,{"@type":"HtmlPropertyValue","@id":r?.["@id"]+e+"#propertyvalue",propertyID:e,value:n,table:{},record:{}}}function Os({record:r,properties:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}={}){e=e||Object.keys(r);let u={rows:[]},d=Us({record:r,properties:e,className:n,attrs:i,expandAll:o,depth:0,options:l});return`

        <div class="space-y-4 ${n||""}" ${i||""}>
            <div class="flex-1">
                ${re({record:r,options:l})||""}
            </div>
            
            <div class="flex-1">
                ${d||""}
            </div>
            
             <div class="flex-1">
              <details>
                <summary>JSON Editor</summary>
                ${A.JsonEditor({initialData:r,endpoint:l.baseUrl})}
              </details>
            </div>
        </div>

    `}function Us({record:r,properties:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){e=e||Object.keys(r);let u={rows:[]};for(let c of Object.keys(r)){let f=s.getValues(r,c);f=s.isArray(f)&&f.length==1?f[0]:f;let m=[];u.rows.push(m),m.push(c+":"),m.push(Bs({record:r,propertyID:c,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))}return A.Table(u)}function Pc({record:r,propertyID:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(r,e),d=[];for(let c of u){let f=s.clone(r);f=s.setValue(f,e,c),d.push(Bs({record:f,propertyID:e,className:n,attrs:i,expandAll:o,depth:a+1,options:l}))}return`
        <ul>
          ${d.map(c=>`
            <li>
              ${c}
            </li>
            `).join("")}

        </ul>
     
  
  `}function Bs({record:r,propertyID:e,className:n="",attrs:i="",expandAll:o=!1,depth:a=0,options:l}){let u=s.getValues(r,e),d=Ds(r,e,l?.baseUrl);return s.isArray(u)&&u.length==1&&(u=u[0]),s.isArray(u)&&u.length>0&&(d.htmlValue=`
        <details> <summary>${d.htmlValue}</summary>
      
          ${Pc({record:r,propertyID:e,className:n,attrs:i,expandAll:o,depth:a,options:l})}
        </details>
      `),u?.["@id"]&&(d.htmlValue=`
        <details> <summary>${d.htmlValue}</summary>
      
          ${Us({record:u,propertyID:void 0,className:n,attrs:i,expandAll:o,depth:a,options:l})}
        </details>
      `),u===void 0&&(d.htmlValue=""),d.htmlValue}function _n(r){return r.replace(/([A-Z])/g," $1").replace(/[-_]/g," ").replace(/^\w/,e=>e.toUpperCase()).trim()}function kn(r){return r==null?'<span class="text-muted-foreground/60 italic">None</span>':typeof r=="boolean"?`<span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${r?"bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20":"bg-destructive/10 text-destructive border-destructive/20"}">${r?"True":"False"}</span>`:Array.isArray(r)?r.length===0?'<span class="text-muted-foreground/60 italic">Empty array</span>':`
      <ul class="flex flex-wrap gap-1">
        ${r.map(e=>`<li class="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs font-medium text-secondary-foreground">${typeof e=="object"?JSON.stringify(e):String(e)}</li>`).join("")}
      </ul>
    `.trim():typeof r=="object"?RecordView({record:r,layout:"grid",columns:1,className:"mt-1 border rounded-md p-2 bg-muted/20"}):typeof r=="string"&&(r.startsWith("http://")||r.startsWith("https://"))?`<a href="${r}" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity text-sm font-medium">${r}</a>`:`<span class="text-sm font-medium text-foreground">${String(r)}</span>`}function Hs({record:r={},layout:e="grid",columns:n=2,striped:i=!1,className:o="",attrs:a=""}){let l=Object.keys(r);if(l.length===0)return`
      <div class="rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground ${o}" ${a}>
        No record data available.
      </div>
    `.trim();let u={1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 md:grid-cols-4"};return e==="grid"?`
      <div class="grid ${u[n]||u[2]} gap-4 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm ${o}" ${a}>
        ${l.map(d=>`
          <div class="flex flex-col space-y-1">
            <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">${_n(d)}</span>
            <div class="break-words">${kn(r[d])}</div>
          </div>
        `).join("")}
      </div>
    `.trim():e==="table"?`
      <div class="w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm ${o}" ${a}>
        <table class="w-full text-left text-sm">
          <tbody class="divide-y divide-border">
            ${l.map((d,c)=>`
              <tr class="${i&&c%2===1?"bg-muted/40":"bg-transparent"} hover:bg-muted/20 transition-colors">
                <td class="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/3 align-top">${_n(d)}</td>
                <td class="py-3 px-4 align-top break-words">${kn(r[d])}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `.trim():`
    <div class="divide-y divide-border rounded-lg border border-border bg-card text-card-foreground shadow-sm ${o}" ${a}>
      ${l.map((d,c)=>`
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 gap-2 ${i&&c%2===1?"bg-muted/40":""}">
          <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">${_n(d)}</span>
          <div class="break-words sm:text-right">${kn(r[d])}</div>
        </div>
      `).join("")}
    </div>
  `.trim()}var ee={card:$n,Media:re,Record:Os,Record2:Hs,Table:Cs};function Je({record:r,options:e}){if(s.isArray(r))return r.map(a=>Je({record:a,options:e}));let n=s.record_type(r);if(!n)return r;let i=b.url.getUrl(e.baseUrl,"/execute"),o=s.ref(r);for(let a of Object.keys(r?.record||r))r=s.setValues(r,a,Je({record:s.getValues(r,a),options:e}));return n=="Action"&&s.isPotential(r)&&(r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i})),n=="ItemList"&&(r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"MoveupAction",name:"Move up",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"MovedownAction",name:"Move down",object:o,url:i})),n=="ListItem"&&(r=s.addValue(r,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),n=="Thing"&&(r=s.addValue(r,"potentialAction",{"@type":"AddAction",name:"Add",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"DeleteAction",name:"Delete",object:o,url:i}),r=s.addValue(r,"potentialAction",{"@type":"InsertAction",name:"Insert",object:o,url:i})),r}function Ms({website:r,webpage:e,title:n,url:i,headContent:o,content:a,records:l,properties:u,headers:d,offset:c,limit:f,options:m}){return a=a??"",a+=ee.Table({url:i,records:l,properties:u,headers:d,offset:c,limit:f,options:m}),ne({website:r,webpage:e,title:n,headContent:o,content:a,options:m})}function Es({website:r,webpage:e,title:n,url:i,headContent:o,content:a,record:l,properties:u,headers:d,options:c}){return a=a??"",a+=ee.Record({url:i,record:l,options:c}),ne({website:r,webpage:e,title:n,headContent:o,content:a,options:c})}var Ws={blankPage:ne,recordsPage:Ms,recordPage:Es,cardsPage:Rs};var Ls={blocks:ee,...Ws,components:Q,...Q};var Sn={};y(Sn,{getParsedRequest:()=>vc});function vc(r){let e={method:r.method.toLowerCase(),hostname:r.host,url:r.originalUrl,fullUrl:r.protocol+"://"+r.get("host")+r.originalUrl,offset:Number(r.query?.offset),limit:Number(r.query?.limit),orderBy:r.query?.orderBy,orderDirection:r.query?.orderDirection,record_id:r.params.record_id,data:r?.body};if(e.filter={...r.query},console.log("pp",e.filter),r.query?.filter)try{e.filter=JSON.parse(r.query?.filter)}catch{}return e.filter=e.filter||{},e?.filter&&(Object.keys(e.filter||{}).filter(i=>i.startsWith("_")==!0).forEach(i=>delete e.filter[i]),["filter","offset","limit","orderBy","orderDirection"].forEach(i=>delete e.filter[i])),e}var Fs={shadcn:Ls,express:Sn};var In={...s,...Qr,html:Fs},Cy=In,Dy=In,Oy=In;export{In as _h,Oy as default,Cy as h,Dy as helpers};
//# sourceMappingURL=jsonldCore.js.map
