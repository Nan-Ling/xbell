"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[699],{9:function(e,t,n){var l=n(1318),r=n(4898),a=n(9970),i=n(8098),o=n(1710),c=n(280),s=n(3326),m=n(1180),u=n(9324),p=n(9182),f=n(1478),d=n(5455),x=n(2658),E=n(5928),h=n(9779),Z=n(8802),g=[{title:"\u573a\u666f",link:"test-site/"}],k=["\u9000\u51fa\u8d26\u53f7"];t.Z=function(){var e=l.useContext(Z.Z),t=e.userInfo,n=e.logout,b=l.useState(null),v=b[0],y=b[1],C=l.useState(null),w=C[0],U=C[1],W=(0,h.Z)().siteConfig,_=(0,E.k6)(),z=null!=t&&t.avatar?W.baseUrl+t.avatar:void 0,B=function(){y(null)},G=function(){U(null)},L=function(){G(),n()};return l.createElement(r.Z,{position:"static"},l.createElement(a.Z,{maxWidth:"xl"},l.createElement(i.Z,{disableGutters:!0},l.createElement(d.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),l.createElement(o.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),l.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},l.createElement(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit"},l.createElement(x.Z,null)),l.createElement(m.Z,{id:"menu-appbar",anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(v),onClose:B,sx:{display:{xs:"block",md:"none"}}},g.map((function(e){return l.createElement(u.Z,{key:e.title,onClick:function(){B(),_.push(W.baseUrl+e.link)}},l.createElement(o.Z,{textAlign:"center"},e.title))})))),l.createElement(d.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),l.createElement(o.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),l.createElement(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},g.map((function(e){return l.createElement(p.Z,{key:e.title,onClick:function(){B(),_.push(W.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)}))),!(null==t||!t.username)&&l.createElement(c.Z,{sx:{flexGrow:0}},l.createElement(s.Z,{onClick:function(e){U(e.currentTarget)},sx:{p:0}},l.createElement(f.Z,{alt:"\u5934\u50cf",src:z})),l.createElement(m.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(w),onClose:G},k.map((function(e){return l.createElement(u.Z,{key:e,onClick:L},l.createElement(o.Z,{textAlign:"center"},e))})))))))}},1835:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var l=n(1318),r=n(9),a=n(8802),i=n(9505),o=n(5928),c=n(9779),s=n(5096),m="cardList_WHsW",u="card_jIjC",p="cardDisabled_behB",f="cardInner_ZO4V",d="cardTitle_wd2_",x=[{imgUrl:"img/connection.png",title:"\u591a\u5957\u6570\u636e\u73af\u5883",link:"test-site/dev"},{imgUrl:"img/todo-list.png",title:"\u66f4\u591a\u573a\u666f...",disabled:!0}];function E(){var e=(0,c.Z)().siteConfig,t=(0,o.k6)();return l.createElement(a.H,null,l.createElement(r.Z,null),l.createElement("div",{className:m},x.map((function(n,r){var a,o=n.imgUrl,c=n.title,m=n.disabled,x=n.link;return l.createElement("div",{className:(0,i.Z)(u,(a={},a[p]=m,a)),key:r,onClick:function(){return x&&t.push(e.baseUrl+x)}},l.createElement(s.Z,{elevation:3,className:f},l.createElement("img",{width:100,src:e.baseUrl+o}),l.createElement("div",{className:d},c)))}))))}}}]);