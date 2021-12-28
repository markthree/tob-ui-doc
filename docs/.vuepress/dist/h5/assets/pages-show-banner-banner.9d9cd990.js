import{_ as t}from"./t-nav-bar.b0596156.js";import{n as a,o as i,c as e,w as s,e as n,z as o,A as r,F as l,q as c,H as d,S as u,M as m,v as p,y as g,C as h}from"./vendor.0ee72332.js";import{E as b,$ as I,b as f,r as v}from"./uni-app.es.03cc7760.js";import{_ as y}from"./t-img.c71fe4dd.js";import{S as x}from"./size.22bfc1cd.js";import{_ as w}from"./example.39179343.js";import"./rounded.20e7000d.js";var C=f({name:"t-banner",mixins:[b(["click","transition","animationfinish"]),x({presets:{xs:"w-full h-25",sm:"w-full h-28",md:"w-full h-35",lg:"w-full h-40"}})],components:{tImg:y},emits:["change","itemClick"],props:I({img:{},list:[],itemId:"",current:0,duration:500,circular:!0,interval:5e3,autoplay:!0,touchable:!0,vertical:!1,activeClass:"",changingClass:"",currentItemId:"",nextMargin:"-1rpx",disableTouch:!1,indicatorDots:!0,acceleration:!1,previousMargin:"-1rpx",displayMultipleItems:1,indicatorColor:"#868e96",easingFunction:"default",skipHiddenItemLayout:!1,indicatorActiveColor:"white",disableProgrammaticAnimation:!1}),data:()=>({currentIndex:0}),computed:{total(){const{list:t}=this;return t?t.length:0},Img(){const{img:t}=this;return Object.assign({status:"",webp:!1,shadow:"none",rounded:"none",lazyLoad:!1,draggable:!0,mode:"aspectFill",size:"w-full h-full",showMenuByLongpress:!1},t)}},methods:{change(t){this.currentIndex=t.detail.current,this.$emit("change",t)},itemClick(t){this.$emit("itemClick",t)}}},[["render",function(t,g,h,b,I,f){const x=v(a("t-img"),y),w=u,C=m,M=p;return i(),e(M,{class:"t-banner"},{default:s((()=>[n(C,{class:c([t.Size]),current:t.current,autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:t.circular,vertical:t.vertical,touchable:t.touchable,nextMargin:t.nextMargin,"active-class":t.activeClass,disableTouch:t.disableTouch,acceleration:t.acceleration,currentItemId:t.currentItemId,"changing-class":t.changingClass,"indicator-dots":t.indicatorDots,previousMargin:t.previousMargin,easingFunction:t.easingFunction,"indicator-color":t.indicatorColor,displayMultipleItems:t.displayMultipleItems,skipHiddenItemLayout:t.skipHiddenItemLayout,"indicator-active-color":t.indicatorActiveColor,disableProgrammaticAnimation:t.disableProgrammaticAnimation,onClick:t.click,onChange:f.change,onTransition:t.transition,onAnimationfinish:t.animationfinish},{default:s((()=>[(i(!0),o(l,null,r(t.list,((a,o)=>(i(),e(w,{"item-id":t.itemId,key:o,onClick:t=>f.itemClick(a)},{default:s((()=>[n(x,{src:a.url,size:f.Img.size,webp:f.Img.webp,mode:f.Img.mode,status:f.Img.status,shadow:f.Img.shadow,rounded:f.Img.rounded,lazyLoad:f.Img.lazyLoad,draggable:f.Img.draggable,showMenuByLongpress:f.Img.showMenuByLongpress},null,8,["src","size","webp","mode","status","shadow","rounded","lazyLoad","draggable","showMenuByLongpress"])])),_:2},1032,["item-id","onClick"])))),128))])),_:1},8,["class","current","autoplay","interval","duration","circular","vertical","touchable","nextMargin","active-class","disableTouch","acceleration","currentItemId","changing-class","indicator-dots","previousMargin","easingFunction","indicator-color","displayMultipleItems","skipHiddenItemLayout","indicator-active-color","disableProgrammaticAnimation","onClick","onChange","onTransition","onAnimationfinish"]),d(t.$slots,"indicator",{current:I.currentIndex+1,total:f.total},void 0,!0)])),_:3})}],["__scopeId","data-v-9b3cb306"]]);var M=f({data:()=>({list:[{name:"1",url:"https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"2",url:"https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"3",url:"https://images.pexels.com/photos/10043933/pexels-photo-10043933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}]}),methods:{}},[["render",function(o,r,l,c,d,u){const m=v(a("t-nav-bar"),t),b=v(a("t-banner"),C),I=v(a("example"),w),f=p;return i(),e(f,{class:"pb-20"},{default:s((()=>[n(m,{title:"Banner",sticky:""}),n(I,{title:"基础",customClass:"mt-8"},{default:s((()=>[n(b,{list:d.list},null,8,["list"])])),_:1}),n(I,{title:"纵向"},{default:s((()=>[n(b,{list:d.list,vertical:""},null,8,["list"])])),_:1}),n(I,{title:"自定义指示器"},{default:s((()=>[n(b,{list:d.list,indicatorDots:!1},{indicator:s((({current:t,total:a})=>[n(f,{class:"absolute right-0 bottom-0 text-error border-error border rounded m-2 px-1 text-sm"},{default:s((()=>[g(h(t)+" / "+h(a),1)])),_:2},1024)])),_:1},8,["list"])])),_:1}),n(I,{title:"尺寸"},{default:s((()=>[n(b,{list:d.list,size:"xs"},null,8,["list"])])),_:1})])),_:1})}]]);export{M as default};