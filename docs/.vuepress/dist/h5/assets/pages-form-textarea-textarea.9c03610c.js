import{_ as e}from"./t-nav-bar.b0596156.js";import{n as l,o as a,c as s,w as d,e as o,z as t,A as r,F as m,v as u}from"./vendor.0ee72332.js";import{b as c,r as i}from"./uni-app.es.03cc7760.js";import{_ as p}from"./t-textarea.dcc6364d.js";import{_ as n}from"./example.39179343.js";import{s as f}from"./sizes.216d23f6.js";import{c as _}from"./colors.ac785f42.js";import{r as j}from"./roundeds.66ef71a1.js";import"./mixin.3a346e54.js";import"./methods.f3dad712.js";import"./size.22bfc1cd.js";import"./VModel.53dc45c5.js";import"./rounded.20e7000d.js";var V=c({data:()=>({test:"",size:"",sizes:f,colors:_,roundeds:j.filter((e=>"full"!==e.type)),color:"",rounded:"",disabled:"",primordial:""})},[["render",function(c,f,_,j,V,x){const b=i(l("t-nav-bar"),e),y=i(l("t-textarea"),p),z=u,h=i(l("example"),n);return a(),s(z,{class:"pb-20"},{default:d((()=>[o(b,{title:"Textarea"}),o(h,{title:"颜色",customClass:"mt-8"},{default:d((()=>[o(z,{class:"mx-6"},{default:d((()=>[(a(!0),t(m,null,r(V.colors,(e=>(a(),s(z,{class:"mt-5",key:e.type},{default:d((()=>[o(y,{color:e.type,modelValue:V.color,"onUpdate:modelValue":f[0]||(f[0]=e=>V.color=e),placeholder:e.desc},null,8,["color","modelValue","placeholder"])])),_:2},1024)))),128))])),_:1})])),_:1}),o(h,{title:"圆角"},{default:d((()=>[o(z,{class:"mx-6"},{default:d((()=>[(a(!0),t(m,null,r(V.roundeds,(e=>(a(),s(z,{class:"mt-4",key:e.type},{default:d((()=>[o(y,{rounded:e.type,modelValue:V.rounded,"onUpdate:modelValue":f[1]||(f[1]=e=>V.rounded=e),placeholder:e.desc},null,8,["rounded","modelValue","placeholder"])])),_:2},1024)))),128))])),_:1})])),_:1}),o(h,{title:"尺寸"},{default:d((()=>[o(z,{class:"mx-6"},{default:d((()=>[(a(!0),t(m,null,r(V.sizes,(e=>(a(),s(z,{class:"mt-4",key:e.type},{default:d((()=>[o(y,{size:e.type,modelValue:V.size,"onUpdate:modelValue":f[2]||(f[2]=e=>V.size=e),placeholder:e.desc},null,8,["size","modelValue","placeholder"])])),_:2},1024)))),128))])),_:1})])),_:1}),o(h,{title:"禁用"},{default:d((()=>[o(z,{class:"mx-6"},{default:d((()=>[o(y,{modelValue:V.disabled,"onUpdate:modelValue":f[3]||(f[3]=e=>V.disabled=e),disabled:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}]]);export{V as default};