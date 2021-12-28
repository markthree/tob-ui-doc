import{_ as e}from"./t-nav-bar.b0596156.js";import{n as l,o as a,c as t,w as s,e as o,q as i,y as n,I as u,z as d,A as r,C as p,F as c,v as m,B as V}from"./vendor.0ee72332.js";import{C as h,S as g,E as f,_ as b,$ as _,a as x,b as k,r as v}from"./uni-app.es.03cc7760.js";import{S as C}from"./size.22bfc1cd.js";import{V as M}from"./VModel.53dc45c5.js";import{R as z}from"./rounded.20e7000d.js";import{_ as y}from"./example.39179343.js";var D=k({name:"t-pagination",mixins:[h(),M({value:0}),g({shadow:"sm"}),z({rounded:"base"}),f(["click","change"]),C({presets:{xs:"h-7 text-xs",sm:"h-6 text-sm",md:"h-7 text-md",lg:"h-8 px-1 text-lg"}})],components:{tIcon:b},props:_({total:4,pageSize:4,simple:!1}),computed:x({PrevDisable:"pagination-disable",NextDisable:"pagination-disable",prevDisable(){return this.VModelValue<=1},nextDisable(){return this.VModelValue===this.total},items(){const{currentPageGroup:e,pageSize:l}=this;return new Array(l).fill(0).map(((a,t)=>t+1+(e-1)*l))},pageCount(){const{pageSize:e,total:l}=this;return Math.ceil(l/e)},currentPageGroup(){const{VModelValue:e,pageSize:l}=this;return Math.ceil(e/l)},prevEllipsisVisible(){const{currentPageGroup:e}=this;return e>1},nextEllipsisVisible(){const{currentPageGroup:e,pageCount:l}=this;return l-e>0}}),watch:{VModelValue(e){this.change({current:e,isStart:this.prevDisable,isEnd:this.nextDisable})}},methods:{prevPage(){this.updateVModelValue(this.VModelValue-this.pageSize)},nextPage(){this.updateVModelValue(this.VModelValue+this.pageSize)},prev(){this.prevDisable||this.updateVModelValue(this.VModelValue-1)},next(){this.nextDisable||this.updateVModelValue(this.VModelValue+1)},itemClick(e){this.updateVModelValue(e)}}},[["render",function(e,h,g,f,_,x){const k=v(l("t-icon"),b),C=m,M=V;return a(),t(C,{class:i(["t-pagination",[e.Color,e.Shadow,e.Rounded,e.Size]]),onClick:e.click},{default:s((()=>[o(C,{class:i(["pagination-left-icon",[e.PrevDisable]]),onClick:x.prev},{default:s((()=>[o(k,{type:e.prevDisable?"stop":"left"},null,8,["type"])])),_:1},8,["class","onClick"]),e.simple?(a(),t(M,{key:1,class:"pagination-item"},{default:s((()=>[n(p(e.VModelValue)+" / "+p(e.total),1)])),_:1})):(a(),t(C,{key:0},{default:s((()=>[e.prevEllipsisVisible?(a(),t(M,{key:0,onClick:x.prevPage,class:"pagination-ellipsis"},{default:s((()=>[n("...")])),_:1},8,["onClick"])):u("",!0),(a(!0),d(c,null,r(e.items,(l=>(a(),t(M,{key:l,onClick:e=>x.itemClick(l),class:i(["pagination-item pagination-no-current",e.VModelValue===l&&"pagination-current"])},{default:s((()=>[n(p(l),1)])),_:2},1032,["onClick","class"])))),128)),e.nextEllipsisVisible?(a(),t(M,{key:1,onClick:x.nextPage,class:"pagination-ellipsis"},{default:s((()=>[n("...")])),_:1},8,["onClick"])):u("",!0)])),_:1})),o(C,{class:i(["pagination-right-icon",[e.NextDisable]]),onClick:x.next},{default:s((()=>[o(k,{type:e.nextDisable?"stop":"right"},null,8,["type"])])),_:1},8,["class","onClick"])])),_:1},8,["class","onClick"])}],["__scopeId","data-v-2013e11e"]]);var P=k({data:()=>({base:2,simple:1,color:1,rounded:1,shadow:3,size:1})},[["render",function(i,n,u,d,r,p){const c=v(l("t-nav-bar"),e),V=v(l("t-pagination"),D),h=m,g=v(l("example"),y);return a(),t(h,{class:"pb-20"},{default:s((()=>[o(c,{title:"Pagination",sticky:""}),o(g,{title:"基础",customClass:"mt-8"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.base,"onUpdate:modelValue":n[0]||(n[0]=e=>r.base=e),total:20},null,8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"简易模式"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.simple,"onUpdate:modelValue":n[1]||(n[1]=e=>r.simple=e),simple:"",total:20},null,8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"颜色"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.color,"onUpdate:modelValue":n[2]||(n[2]=e=>r.color=e),simple:"",color:"error",total:20},null,8,["modelValue"])])),_:1}),o(h,{class:"ml-4 mt-4"},{default:s((()=>[o(V,{modelValue:r.color,"onUpdate:modelValue":n[3]||(n[3]=e=>r.color=e),simple:"",color:"error",light:"",total:20},null,8,["modelValue"])])),_:1}),o(h,{class:"ml-4 mt-4"},{default:s((()=>[o(V,{modelValue:r.color,"onUpdate:modelValue":n[4]||(n[4]=e=>r.color=e),simple:"",color:"error",outline:"",total:20},null,8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"圆角"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.rounded,"onUpdate:modelValue":n[5]||(n[5]=e=>r.rounded=e),simple:"",rounded:"xl",total:20},null,8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"阴影"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.shadow,"onUpdate:modelValue":n[6]||(n[6]=e=>r.shadow=e),simple:"",shadow:"md",total:20},null,8,["modelValue"])])),_:1})])),_:1}),o(g,{title:"尺寸"},{default:s((()=>[o(h,{class:"ml-4"},{default:s((()=>[o(V,{modelValue:r.size,"onUpdate:modelValue":n[7]||(n[7]=e=>r.size=e),simple:"",size:"lg",total:20},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}]]);export{P as default};