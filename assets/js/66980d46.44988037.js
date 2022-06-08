"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7497],{8449:function(e,n,t){t.d(n,{H:function(){return x},Z:function(){return m}});var r=t(1318),l=t(6995),o=t(5251),a=(0,t(1391).Z)({typography:{fontFamily:"PingFang SC"},palette:{primary:{main:"#6b8fe6"},secondary:{main:"#f50057"}}}),i=t(5928),c=t(5999),u=t(9455),s=r.createContext({userInfo:null,setUserInfo:function(){},logout:function(){}});var m=s,f="__user__info__",p=function(e){var n=e.children,t=(0,i.TH)(),c=(0,u.Z)(t.pathname),m=r.useMemo((function(){return function(e){try{return JSON.parse(e)}catch(n){return null}}(window.localStorage.getItem(f))}),[]),p=r.useState((null==m?void 0:m.env)===c?m:null),x=p[0],E=p[1],d=function(e){if(c){var n=Object.assign({},e,{env:c});E(n),console.log("userInfoWithEnv",n),window.localStorage.setItem(f,JSON.stringify(n))}};return r.createElement(l.Z,{theme:a},r.createElement(o.wT,{maxSnack:3,autoHideDuration:2e3},r.createElement(s.Provider,{value:{userInfo:x,setUserInfo:d,logout:function(){window.localStorage.removeItem(f),d(null)}}},n)))},x=function(e){var n=e.children;return r.createElement(c.Z,null,(function(){return r.createElement(p,null,n)}))}},9:function(e,n,t){var r=t(1318),l=t(4898),o=t(9970),a=t(8098),i=t(1710),c=t(280),u=t(3326),s=t(1180),m=t(9324),f=t(9182),p=t(1478),x=t(5455),E=t(2658),d=t(5928),Z=t(9779),h=t(8449),g=[{title:"\u573a\u666f",link:"test-site/"}],v=["\u9000\u51fa\u8d26\u53f7"];n.Z=function(){var e=r.useContext(h.Z),n=e.userInfo,t=e.logout,y=r.useState(null),k=y[0],w=y[1],b=r.useState(null),C=b[0],S=b[1],I=(0,Z.Z)().siteConfig,O=(0,d.k6)(),W=null!=n&&n.avatar?I.baseUrl+n.avatar:void 0,_=function(){w(null)},z=function(){S(null)},G=function(){z(),t()};return r.createElement(l.Z,{position:"static"},r.createElement(o.Z,{maxWidth:"xl"},r.createElement(a.Z,{disableGutters:!0},r.createElement(x.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),r.createElement(i.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(u.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},color:"inherit"},r.createElement(E.Z,null)),r.createElement(s.Z,{id:"menu-appbar",anchorEl:k,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(k),onClose:_,sx:{display:{xs:"block",md:"none"}}},g.map((function(e){return r.createElement(m.Z,{key:e.title,onClick:function(){_(),O.push(I.baseUrl+e.link)}},r.createElement(i.Z,{textAlign:"center"},e.title))})))),r.createElement(x.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),r.createElement(i.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),r.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},g.map((function(e){return r.createElement(f.Z,{key:e.title,onClick:function(){_(),O.push(I.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)}))),!(null==n||!n.username)&&r.createElement(c.Z,{sx:{flexGrow:0}},r.createElement(u.Z,{onClick:function(e){S(e.currentTarget)},sx:{p:0}},r.createElement(p.Z,{alt:"\u5934\u50cf",src:W})),r.createElement(s.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:C,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(C),onClose:z},v.map((function(e){return r.createElement(m.Z,{key:e,onClick:G},r.createElement(i.Z,{textAlign:"center"},e))})))))))}},9123:function(e,n,t){var r,l=t(2870),o=t(1318),a=t(1710),i=t(2696).Z.div(r||(r=(0,l.Z)(["\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));n.Z=function(){return o.useEffect((function(){setTimeout((function(){throw new Error("\u629b\u4e00\u4e2a\u9519")}))}),[]),o.createElement(i,null,o.createElement(a.Z,null,"\u770b\u8d77\u6765\u4e00\u5207\u6b63\u5e38\uff0c\u4f46\u63a7\u5236\u53f0\u62a5\u9519\u4e86"))}},3795:function(e,n,t){t.r(n);var r=t(1318),l=t(9),o=t(8449),a=t(9123);n.default=function(){return r.createElement(o.H,null,r.createElement(l.Z,null),r.createElement(a.Z,null))}},9455:function(e,n,t){function r(e){return e.split("test-site/").pop().split("/")[0]}t.d(n,{Z:function(){return r}})},2870:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),e.raw=n,e}t.d(n,{Z:function(){return r}})}}]);