var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,i=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{n as a,c as n,v as c}from"./uni-app.es.03cc7760.js";var b=(e={})=>{const{size:b="md",presets:l={},sourceType:u="props"}=e;if(a("Object",l))throw new Error("design-size的preset配置必须是对象类型");return O=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&i(e,t,r[t]);if(o)for(var t of o(r))p.call(r,t)&&i(e,t,r[t]);return e})({},n(u,{size:b})),r(O,t({computed:{Size(){let{size:e}=this;return l[e]?c(l[e],e):e}}}));var O};export{b as S};