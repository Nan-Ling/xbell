"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8699],{8449:function(e,t,n){n.d(t,{H:function(){return d},Z:function(){return m}});var r=n(1318),l=n(6995),a=n(5251),o=(0,n(1391).Z)({typography:{fontFamily:"PingFang SC"},palette:{primary:{main:"#6b8fe6"},secondary:{main:"#f50057"}}}),i=n(5928),c=n(5999),s=n(9455),u=r.createContext({userInfo:null,setUserInfo:function(){},logout:function(){}});var m=u,f="__user__info__",p=function(e){var t=e.children,n=(0,i.TH)(),c=(0,s.Z)(n.pathname),m=r.useMemo((function(){return function(e){try{return JSON.parse(e)}catch(t){return null}}(window.localStorage.getItem(f))}),[]),p=r.useState((null==m?void 0:m.env)===c?m:null),d=p[0],g=p[1],x=function(e){if(c){var t=Object.assign({},e,{env:c});g(t),console.log("userInfoWithEnv",t),window.localStorage.setItem(f,JSON.stringify(t))}};return r.createElement(l.Z,{theme:o},r.createElement(a.wT,{maxSnack:3,autoHideDuration:2e3},r.createElement(u.Provider,{value:{userInfo:d,setUserInfo:x,logout:function(){window.localStorage.removeItem(f),x(null)}}},t)))},d=function(e){var t=e.children;return r.createElement(c.Z,null,(function(){return r.createElement(p,null,t)}))}},9:function(e,t,n){var r=n(1318),l=n(4898),a=n(9970),o=n(8098),i=n(1710),c=n(280),s=n(3326),u=n(4459),m=n(9324),f=n(9182),p=n(7381),d=n(1478),g=n(5455),x=n(2658),E=n(5928),h=n(9779),Z=n(8449),v=[{title:"\u573a\u666f",link:"test-site/"}],k=["\u9000\u51fa\u8d26\u53f7"];t.Z=function(){var e=r.useContext(Z.Z),t=e.userInfo,n=e.logout,b=r.useState(null),y=b[0],w=b[1],C=r.useState(null),S=C[0],_=C[1],I=(0,h.Z)().siteConfig,U=(0,E.k6)(),O=null!=t&&t.avatar?I.baseUrl+t.avatar:void 0;console.log("avatarUrl",O);var W=function(){w(null)},N=function(){_(null)},z=function(){N(),n()};return r.createElement(l.Z,{position:"static"},r.createElement(a.Z,{maxWidth:"xl"},r.createElement(o.Z,{disableGutters:!0},r.createElement(g.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),r.createElement(i.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},color:"inherit"},r.createElement(x.Z,null)),r.createElement(u.Z,{id:"menu-appbar",anchorEl:y,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(y),onClose:W,sx:{display:{xs:"block",md:"none"}}},v.map((function(e){return r.createElement(m.Z,{key:e.title,onClick:function(){W(),U.push(I.baseUrl+e.link)}},r.createElement(i.Z,{textAlign:"center"},e.title))})))),r.createElement(g.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),r.createElement(i.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},v.map((function(e){return r.createElement(f.Z,{key:e.title,onClick:function(){W(),U.push(I.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)}))),!(null==t||!t.username)&&r.createElement(c.Z,{sx:{flexGrow:0}},r.createElement(p.Z,{title:"\u4e2a\u4eba\u8be6\u60c5"},r.createElement(s.Z,{onClick:function(e){_(e.currentTarget)},sx:{p:0}},r.createElement(d.Z,{alt:"\u5934\u50cf",src:O}))),r.createElement(u.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:S,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(S),onClose:N},k.map((function(e){return r.createElement(m.Z,{key:e,onClick:z},r.createElement(i.Z,{textAlign:"center"},e))})))))))}},1835:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(1318),l=n(9),a=n(8449),o=n(9505),i=n(5928),c=n(9779),s=n(5096),u="cardList_WHsW",m="card_jIjC",f="cardDisabled_behB",p="cardInner_ZO4V",d="cardTitle_wd2_",g=[{imgUrl:"img/connection.png",title:"\u591a\u5957\u6570\u636e\u73af\u5883",link:"test-site/dev"},{imgUrl:"img/todo-list.png",title:"\u66f4\u591a\u573a\u666f...",disabled:!0}];function x(){var e=(0,c.Z)().siteConfig,t=(0,i.k6)();return r.createElement(a.H,null,r.createElement(l.Z,null),r.createElement("div",{className:u},g.map((function(n,l){var a,i=n.imgUrl,c=n.title,u=n.disabled,g=n.link;return r.createElement("div",{className:(0,o.Z)(m,(a={},a[f]=u,a)),key:l,onClick:function(){return g&&t.push(e.baseUrl+g)}},r.createElement(s.Z,{elevation:3,className:p},r.createElement("img",{width:100,src:e.baseUrl+i}),r.createElement("div",{className:d},c)))}))))}},9455:function(e,t,n){function r(e){return e.split("test-site/").pop().split("/")[0]}n.d(t,{Z:function(){return r}})}}]);