import{o as e,c as s,w as a,e as n,H as o,q as t,v as r,L as d}from"./vendor.0ee72332.js";import{S as i,C as p,E as l,$ as m,a as c,b as g}from"./uni-app.es.03cc7760.js";import{S as h}from"./size.22bfc1cd.js";import{R as b}from"./rounded.20e7000d.js";var u=g({name:"t-btn",mixins:[i(),b({rounded:"base"}),p({color:"base",inject:"btn"}),h({presets:{xs:"h-4 p-2 text-xs",sm:"h-6 p-3 text-sm",md:"h-8 p-4 text-md",lg:"h-10 p-5 text-lg"}}),l(["error","launchapp","opensetting","getuserinfo","getphonenumber"])],emits:["click"],props:m({ghost:!1,block:!1,disabled:!1,openType:"",loading:!1,sessionFrom:"",lang:"en",sendMessageImg:"",sendMessageTitle:"",showMessageCard:!1,appParameter:"",sendMessagePath:""}),computed:c({Ghost:"btn-ghost",Block:"btn-block",Disabled:"btn-disabled"}),methods:{click(e){!this.disabled&&this.$emit("click",e)}}},[["render",function(i,p,l,m,c,g){const h=r,b=d;return e(),s(h,{class:t(["btn-container",[i.Block]])},{default:a((()=>[n(b,{class:t(["t-btn",[i.Color,i.Rounded,i.Size,i.Disabled,i.Shadow,i.Ghost,i.Block]]),lang:i.lang,"hover-class":"",loading:i.loading,disabled:i.disabled,"open-type":i.openType,"session-from":i.sessionFrom,"app-parameter":i.appParameter,"send-message-img":i.sendMessageImg,"send-message-path":i.sendMessagePath,"show-message-card":i.showMessageCard,"send-message-title":i.sendMessageTitle,onClick:g.click,onError:i.error,onLaunchapp:i.launchapp,onGetuserinfo:i.getuserinfo,onOpensetting:i.opensetting,onGetphonenumber:i.getphonenumber},{default:a((()=>[n(h,{class:"btn-content"},{default:a((()=>[o(i.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["lang","loading","disabled","open-type","session-from","app-parameter","send-message-img","send-message-path","show-message-card","send-message-title","onClick","onError","onLaunchapp","onGetuserinfo","onOpensetting","onGetphonenumber","class"])])),_:3},8,["class"])}],["__scopeId","data-v-0fd932c3"]]);export{u as _};
