"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8699],{8449:function(e,t,n){n.d(t,{H:function(){return d},Z:function(){return m}});var r=n(1318),l=n(6995),a=n(5251),o=(0,n(1391).Z)({typography:{fontFamily:"PingFang SC"},palette:{primary:{main:"#6b8fe6"},secondary:{main:"#f50057"}}}),i=n(5928),c=n(5999),u=n(9455),s=r.createContext({userInfo:null,setUserInfo:function(){},logout:function(){}});var m=s,f="__user__info__",p=function(e){var t=e.children,n=(0,i.TH)(),c=(0,u.Z)(n.pathname),m=r.useMemo((function(){return function(e){try{return JSON.parse(e)}catch(t){return null}}(window.localStorage.getItem(f))}),[]),p=r.useState((null==m?void 0:m.env)===c?m:null),d=p[0],x=p[1],g=function(e){if(c){var t=Object.assign({},e,{env:c});x(t),console.log("userInfoWithEnv",t),window.localStorage.setItem(f,JSON.stringify(t))}};return r.createElement(l.Z,{theme:o},r.createElement(a.wT,{maxSnack:3,autoHideDuration:2e3},r.createElement(s.Provider,{value:{userInfo:d,setUserInfo:g,logout:function(){window.localStorage.removeItem(f),g(null)}}},t)))},d=function(e){var t=e.children;return r.createElement(c.Z,null,(function(){return r.createElement(p,null,t)}))}},9:function(e,t,n){var r=n(1318),l=n(4898),a=n(9970),o=n(8098),i=n(1710),c=n(280),u=n(3326),s=n(1180),m=n(9324),f=n(9182),p=n(1478),d=n(5455),x=n(2658),g=n(5928),E=n(9779),h=n(8449),Z=[{title:"\u573a\u666f",link:"test-site/"}],v=["\u9000\u51fa\u8d26\u53f7"];t.Z=function(){var e=r.useContext(h.Z),t=e.userInfo,n=e.logout,k=r.useState(null),b=k[0],y=k[1],w=r.useState(null),C=w[0],S=w[1],_=(0,E.Z)().siteConfig,I=(0,g.k6)(),U=null!=t&&t.avatar?_.baseUrl+t.avatar:void 0,O=function(){y(null)},W=function(){S(null)},N=function(){W(),n()};return r.createElement(l.Z,{position:"static"},r.createElement(a.Z,{maxWidth:"xl"},r.createElement(o.Z,{disableGutters:!0},r.createElement(d.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),r.createElement(i.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(u.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit"},r.createElement(x.Z,null)),r.createElement(s.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(b),onClose:O,sx:{display:{xs:"block",md:"none"}}},Z.map((function(e){return r.createElement(m.Z,{key:e.title,onClick:function(){O(),I.push(_.baseUrl+e.link)}},r.createElement(i.Z,{textAlign:"center"},e.title))})))),r.createElement(d.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),r.createElement(i.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},Z.map((function(e){return r.createElement(f.Z,{key:e.title,onClick:function(){O(),I.push(_.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)}))),!(null==t||!t.username)&&r.createElement(c.Z,{sx:{flexGrow:0}},r.createElement(u.Z,{onClick:function(e){S(e.currentTarget)},sx:{p:0}},r.createElement(p.Z,{alt:"\u5934\u50cf",src:U})),r.createElement(s.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:C,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(C),onClose:W},v.map((function(e){return r.createElement(m.Z,{key:e,onClick:N},r.createElement(i.Z,{textAlign:"center"},e))})))))))}},1835:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(1318),l=n(9),a=n(8449),o=n(9505),i=n(5928),c=n(9779),u=n(5096),s="cardList_WHsW",m="card_jIjC",f="cardDisabled_behB",p="cardInner_ZO4V",d="cardTitle_wd2_",x=[{imgUrl:"img/connection.png",title:"\u591a\u5957\u6570\u636e\u73af\u5883",link:"test-site/dev"},{imgUrl:"img/todo-list.png",title:"\u66f4\u591a\u573a\u666f...",disabled:!0}];function g(){var e=(0,c.Z)().siteConfig,t=(0,i.k6)();return r.createElement(a.H,null,r.createElement(l.Z,null),r.createElement("div",{className:s},x.map((function(n,l){var a,i=n.imgUrl,c=n.title,s=n.disabled,x=n.link;return r.createElement("div",{className:(0,o.Z)(m,(a={},a[f]=s,a)),key:l,onClick:function(){return x&&t.push(e.baseUrl+x)}},r.createElement(u.Z,{elevation:3,className:p},r.createElement("img",{width:100,src:e.baseUrl+i}),r.createElement("div",{className:d},c)))}))))}},9455:function(e,t,n){function r(e){return e.split("test-site/").pop().split("/")[0]}n.d(t,{Z:function(){return r}})}}]);