import{_ as s}from"./t-nav-bar.b0596156.js";import{o as e,c as a,w as t,z as l,A as o,q as n,y as i,C as d,F as r,t as u,B as c,v as p,n as m,e as b}from"./vendor.0ee72332.js";import{S as f,E as v,C as h,$ as k,a as x,b as w,r as _}from"./uni-app.es.03cc7760.js";import{S as y}from"./size.22bfc1cd.js";import{R as V}from"./rounded.20e7000d.js";import{_ as C}from"./example.39179343.js";import{_ as g}from"./t-number-key-board.660bbfc0.js";import"./VModel.53dc45c5.js";var j=w({name:"t-password-input",mixins:[f(),v(["click","change"]),V({rounded:"base"}),h({color:"base",light:!0}),y({presets:{xs:"text-xs",sm:"text-sm",md:"py-1 text-md",lg:"py-1 text-lg"}})],props:k({values:"",length:5,zIndex:100,focus:!0,visible:!1}),computed:x({FocusIndex(){const{values:s}=this;return s.length},Style(){const{zIndex:s}=this;return{zIndex:s}},Visible:[null,"password-input-item-point"]}),watch:{values(s){this.change(s)}}},[["render",function(s,m,b,f,v,h){const k=c,x=p;return e(),a(x,{class:"t-password-input",onClick:s.click,style:u([s.Style])},{default:t((()=>[(e(!0),l(r,null,o(s.length,((l,o)=>(e(),a(k,{class:n(["password-input-item",[s.focus&&s.FocusIndex===o&&"password-input-item-twinkle",s.FocusIndex>o&&s.Visible,s.Size,s.Rounded,s.Color,s.Shadow]]),key:l},{default:t((()=>[i(d(s.visible&&s.values[o]||""),1)])),_:2},1032,["class"])))),128))])),_:1},8,["onClick","style"])}],["__scopeId","data-v-6ddb3312"]]);var I=w({data:()=>({base:"",visible:""}),methods:{open(){this.$refs.vnk.hidden(),this.$refs.nk.show()},openVisible(){this.$refs.nk.hidden(),this.$refs.vnk.show()}}},[["render",function(l,o,n,i,d,r){const u=_(m("t-nav-bar"),s),c=_(m("t-password-input"),j),f=p,v=_(m("example"),C),h=_(m("t-number-key-board"),g);return e(),a(f,{class:"pb-70"},{default:t((()=>[b(u,{title:"PasswordInput",sticky:""}),b(v,{title:"基础",customClass:"mt-8"},{default:t((()=>[b(f,{class:"mx-2"},{default:t((()=>[b(c,{values:d.base,onClick:r.open},null,8,["values","onClick"])])),_:1})])),_:1}),b(v,{title:"可见"},{default:t((()=>[b(f,{class:"mx-2"},{default:t((()=>[b(c,{values:d.visible,visible:"",onClick:r.openVisible},null,8,["values","onClick"])])),_:1})])),_:1}),b(h,{modelValue:d.base,"onUpdate:modelValue":o[0]||(o[0]=s=>d.base=s),ref:"nk"},null,8,["modelValue"]),b(h,{modelValue:d.visible,"onUpdate:modelValue":o[1]||(o[1]=s=>d.visible=s),ref:"vnk"},null,8,["modelValue"])])),_:1})}]]);export{I as default};
