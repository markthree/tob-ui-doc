import{_ as e}from"./t-nav-bar.b0596156.js";import{n as a,o as l,c as s,w as d,e as o,z as t,A as u,F as r,y as m,v as c,C as f}from"./vendor.0ee72332.js";import{b as i,r as p}from"./uni-app.es.03cc7760.js";import{_ as n,a as _}from"./t-checkbox-group.12207ea2.js";import{_ as b}from"./example.39179343.js";import{s as y}from"./sizes.216d23f6.js";import{c as j}from"./colors.ac785f42.js";import{r as v}from"./roundeds.66ef71a1.js";import"./methods.f3dad712.js";import"./size.22bfc1cd.js";import"./rounded.20e7000d.js";import"./effects.5bcde988.js";import"./mixin.3a346e54.js";import"./VModel.53dc45c5.js";var V=i({data:()=>({colors:j,color:["primary"],roundeds:v,rounded:[],sizes:y,size:["lg"],abled:["abled"]})},[["render",function(i,y,j,v,V,z){const k=p(a("t-nav-bar"),e),x=p(a("t-checkbox"),n),h=c,U=p(a("t-checkbox-group"),_),g=p(a("example"),b);return l(),s(h,{class:"pb-20"},{default:d((()=>[o(k,{title:"Checkbox",sticky:""}),o(g,{customClass:"mt-8",title:"颜色"},{default:d((()=>[o(h,{class:"ml-6"},{default:d((()=>[o(U,{modelValue:V.color,"onUpdate:modelValue":y[0]||(y[0]=e=>V.color=e)},{default:d((()=>[(l(!0),t(r,null,u(V.colors,(e=>(l(),s(h,{class:"m-2",key:e.type},{default:d((()=>[o(x,{color:e.type,value:e.type},{default:d((()=>[m(f(e.desc),1)])),_:2},1032,["color","value"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"圆角"},{default:d((()=>[o(h,{class:"ml-6"},{default:d((()=>[o(U,{modelValue:V.rounded,"onUpdate:modelValue":y[1]||(y[1]=e=>V.rounded=e)},{default:d((()=>[(l(!0),t(r,null,u(V.roundeds,(e=>(l(),s(h,{class:"m-2",key:e.type},{default:d((()=>[o(x,{rounded:e.type,value:e.type},{default:d((()=>[m(f(e.desc),1)])),_:2},1032,["rounded","value"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"尺寸"},{default:d((()=>[o(h,{class:"ml-6"},{default:d((()=>[o(U,{modelValue:V.size,"onUpdate:modelValue":y[2]||(y[2]=e=>V.size=e)},{default:d((()=>[(l(!0),t(r,null,u(V.sizes,(e=>(l(),s(h,{key:e.type,class:"m-2"},{default:d((()=>[o(x,{size:e.type,value:e.type},{default:d((()=>[m(f(e.desc),1)])),_:2},1032,["size","value"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"禁用"},{default:d((()=>[o(h,{class:"ml-6"},{default:d((()=>[o(U,{modelValue:V.abled,"onUpdate:modelValue":y[3]||(y[3]=e=>V.abled=e)},{default:d((()=>[o(h,{class:"m-2"},{default:d((()=>[o(x,{value:"abled"},{default:d((()=>[m("可用")])),_:1})])),_:1}),o(h,{class:"m-2"},{default:d((()=>[o(x,{value:"disabled",disabled:""},{default:d((()=>[m("禁用")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}]]);export{V as default};
