"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[990],{9:function(e,t,n){var a=n(1318),r=n(4898),o=n(9970),l=n(8098),i=n(1710),s=n(280),c=n(3326),u=n(1180),m=n(9324),p=n(9182),d=n(1478),f=n(5455),x=n(2658),h=n(5928),Z=n(9779),g=n(8802),E=[{title:"\u573a\u666f",link:"test-site/"}],v=["\u9000\u51fa\u8d26\u53f7"];t.Z=function(){var e=a.useContext(g.Z),t=e.userInfo,n=e.logout,b=a.useState(null),k=b[0],w=b[1],y=a.useState(null),C=y[0],W=y[1],z=(0,Z.Z)().siteConfig,O=(0,h.k6)(),S=null!=t&&t.avatar?z.baseUrl+t.avatar:void 0,G=function(){w(null)},T=function(){W(null)},U=function(){T(),n()};return a.createElement(r.Z,{position:"static"},a.createElement(o.Z,{maxWidth:"xl"},a.createElement(l.Z,{disableGutters:!0},a.createElement(f.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),a.createElement(i.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),a.createElement(s.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(c.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},color:"inherit"},a.createElement(x.Z,null)),a.createElement(u.Z,{id:"menu-appbar",anchorEl:k,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(k),onClose:G,sx:{display:{xs:"block",md:"none"}}},E.map((function(e){return a.createElement(m.Z,{key:e.title,onClick:function(){G(),O.push(z.baseUrl+e.link)}},a.createElement(i.Z,{textAlign:"center"},e.title))})))),a.createElement(f.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),a.createElement(i.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),a.createElement(s.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},E.map((function(e){return a.createElement(p.Z,{key:e.title,onClick:function(){G(),O.push(z.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)}))),!(null==t||!t.username)&&a.createElement(s.Z,{sx:{flexGrow:0}},a.createElement(c.Z,{onClick:function(e){W(e.currentTarget)},sx:{p:0}},a.createElement(d.Z,{alt:"\u5934\u50cf",src:S})),a.createElement(u.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:C,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(C),onClose:T},v.map((function(e){return a.createElement(m.Z,{key:e,onClick:U},a.createElement(i.Z,{textAlign:"center"},e))})))))))}},3033:function(e,t,n){var a=n(7021),r=n(1318),o=n(9970),l=n(280),i=n(1478),s=n(1710),c=n(2426),u=n(599),m=n(7850),p=n(9182),d=n(6162),f=n(5251),x=n(5928),h=n(9779),Z=n(8802),g=n(9455),E=["password"],v={vertical:"top",horizontal:"center"};t.Z=function(e){var t=e.accounts,n=(0,f.Ds)().enqueueSnackbar,b=(0,h.Z)().siteConfig,k=r.useContext(Z.Z),w=(0,x.k6)(),y=(0,x.TH)(),C=r.useState({username:"",password:""}),W=C[0],z=C[1],O=function(e,t){n(e,{variant:t,anchorOrigin:v})};return r.createElement(o.Z,{component:"main",maxWidth:"xs"},r.createElement(l.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(i.Z,{sx:{m:1,bgcolor:"primary.main"}},r.createElement(d.Z,{color:"inherit"})),r.createElement(s.Z,{component:"h1",variant:"h5"},"\u767b\u5f55"),r.createElement(l.Z,null,r.createElement(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"\u7528\u6237\u540d",name:"username",autoComplete:"username",autoFocus:!0,value:W.username,onChange:function(e){return z(Object.assign({},W,{username:e.target.value}))}}),r.createElement(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u5bc6\u7801",type:"password",id:"password",autoComplete:"current-password",value:W.password,onChange:function(e){return z(Object.assign({},W,{password:e.target.value}))}}),r.createElement(u.Z,{control:r.createElement(m.Z,{value:"remember",color:"primary"}),label:"\u8bb0\u4f4f\u5bc6\u7801"}),r.createElement(p.Z,{type:"submit",fullWidth:!0,size:"large",variant:"contained",onClick:function(){var e=null==t?void 0:t.find((function(e){return e.username===W.username&&e.password===W.password}));e?(O("\u767b\u5f55\u6210\u529f","success"),setTimeout((function(){e.password;var t=(0,a.Z)(e,E);k.setUserInfo(t);var n=(0,g.Z)(y.pathname);w.push(b.baseUrl+"test-site/"+n+"/homepage")}),500)):O("\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef","error")},sx:{mt:3,mb:2}},"\u767b\u5f55"))))}},1518:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(1318),r=n(3033),o=n(9),l=n(8802),i=[{username:"xbell_admin",password:"password123",avatar:"img/xbell-logo.svg"},{username:"xbell_member",password:"password123",avatar:"img/xbell-logo.svg"},{username:"pikachu",password:"pikachu123",avatar:"avatar/pikachu.png"},{username:"psyduck",password:"psyduck123",avatar:"avatar/psyduck.png"},{username:"super_mario",password:"super_mario123",avatar:"avatar/super_mario.png"}];function s(){return a.createElement(l.H,null,a.createElement(o.Z,null),a.createElement(r.Z,{accounts:i}))}}}]);