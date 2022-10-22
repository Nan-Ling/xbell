"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3135],{5052:(e,t,n)=>{n.d(t,{H:()=>h,Z:()=>u});var a=n(1318),r=n(6995),l=n(5251);const s=(0,n(1391).Z)({typography:{fontFamily:"PingFang SC"},palette:{primary:{main:"#6b8fe6"},secondary:{main:"#f50057"}}});var o=n(5928),i=n(9176),c=n(2215);const m=a.createContext({userInfo:null,setUserInfo(){},logout(){}});const u=m,p="__user__info__",x=e=>{let{children:t}=e;const n=(0,o.TH)(),i=(0,c.Z)(n.pathname),u=a.useMemo((()=>function(e){try{return JSON.parse(e)}catch(t){return null}}(window.localStorage.getItem(p))),[]),[x,h]=a.useState((null==u?void 0:u.env)===i?u:null),g=e=>{if(i){const t={...e,env:i};h(t),console.log("userInfoWithEnv",t),window.localStorage.setItem(p,JSON.stringify(t))}};return a.createElement(r.Z,{theme:s},a.createElement(l.wT,{maxSnack:3,autoHideDuration:2e3},a.createElement(m.Provider,{value:{userInfo:x,setUserInfo:g,logout:()=>{window.localStorage.removeItem(p),g(null)}}},t)))},h=e=>{let{children:t}=e;return a.createElement(i.Z,null,(()=>a.createElement(x,null,t)))}},496:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(1318),r=n(4898),l=n(9970),s=n(8098),o=n(1710),i=n(280),c=n(3326),m=n(1180),u=n(9324),p=n(9182),x=n(1478),h=n(5455),g=n(2658),d=n(5928),Z=n(6331),b=n(5052);const v=[{title:"\u573a\u666f",link:"test-site/"}],f=["\u9000\u51fa\u8d26\u53f7"],E=()=>{const{userInfo:e,logout:t}=a.useContext(b.Z),[n,E]=a.useState(null),[w,y]=a.useState(null),{siteConfig:k}=(0,Z.Z)(),S=(0,d.k6)(),C=null!=e&&e.avatar?k.baseUrl+e.avatar:void 0,I=()=>{E(null)},z=()=>{y(null)},U=()=>{z(),t()};return a.createElement(r.Z,{position:"static"},a.createElement(l.Z,{maxWidth:"xl"},a.createElement(s.Z,{disableGutters:!0},a.createElement(h.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),a.createElement(o.Z,{variant:"h6",noWrap:!0,component:"a",href:"/xbell/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),a.createElement(i.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(c.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{E(e.currentTarget)},color:"inherit"},a.createElement(g.Z,null)),a.createElement(m.Z,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:I,sx:{display:{xs:"block",md:"none"}}},v.map((e=>a.createElement(u.Z,{key:e.title,onClick:()=>{I(),S.push(k.baseUrl+e.link)}},a.createElement(o.Z,{textAlign:"center"},e.title)))))),a.createElement(h.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),a.createElement(o.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"X-BELL"),a.createElement(i.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},v.map((e=>a.createElement(p.Z,{key:e.title,onClick:()=>{I(),S.push(k.baseUrl+e.link)},sx:{my:2,color:"white",display:"block"}},e.title)))),!(null==e||!e.username)&&a.createElement(i.Z,{sx:{flexGrow:0}},a.createElement(c.Z,{onClick:e=>{y(e.currentTarget)},sx:{p:0}},a.createElement(x.Z,{alt:"\u5934\u50cf",src:C})),a.createElement(m.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(w),onClose:z},f.map((e=>a.createElement(u.Z,{key:e,onClick:U},a.createElement(o.Z,{textAlign:"center"},e)))))))))}},7774:(e,t,n)=>{n.d(t,{Z:()=>B});var a,r,l,s=n(4219),o=n(6673),i=n(1318),c=n(2696),m=n(4747),u=n(9948),p=n(1710),x=n(5096),h=n(2845);const g=(0,c.Z)(x.Z)(a||(a=(0,o.Z)(["\n  margin-bottom: 20px;\n  padding: 12px;\n  margin-right: 12px;\n"]))),d=c.Z.img(r||(r=(0,o.Z)(["\n  width: 250px;\n"]))),Z=c.Z.div(l||(l=(0,o.Z)(["\n  font-size: 24px;\n  margin-top: 8px;\n  text-align: center;\n"]))),b=e=>{let{username:t,avatar:n}=e;return i.createElement(g,{elevation:3},i.createElement(d,{src:(0,h.Z)(n)}),i.createElement(Z,null,t))};var v,f=n(8974),E=n(3326),w=n(5903);const y=(0,c.Z)(x.Z)(v||(v=(0,o.Z)(["\n  height: 55px;\n  width: 550px;\n  display: flex;\n  flex-direction: row;\n  padding: 4px 14px;\n"]))),k=e=>{let{onSearch:t=(()=>{})}=e;const[n,a]=i.useState("");return i.createElement(y,{elevation:3},i.createElement(f.Z,{value:n,onChange:e=>a(e.target.value),onKeyUp:e=>{13!==e.charCode&&"Enter"!==e.key||t(n)},placeholder:"\u641c\u7d22\u8054\u7cfb\u4eba",fullWidth:!0,disableUnderline:!0}),i.createElement(E.Z,{onClick:()=>t(n)},i.createElement(w.Z,null)))};var S,C,I,z,U,W=n(5270);const _=c.Z.div(S||(S=(0,o.Z)(["\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),G=c.Z.div(C||(C=(0,o.Z)(["\n  margin-top: 24px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),O=(0,c.Z)(u.Z)(I||(I=(0,o.Z)(["\n  margin-top: 40px;\n"]))),T=c.Z.div(z||(z=(0,o.Z)(["\n  margin-top: 40px;\n"]))),B=(c.Z.div(U||(U=(0,o.Z)(["\n"]))),e=>{let{dataSource:t=[]}=e;const[n,a]=i.useState(""),{loading:r,data:l}=(0,m.Z)((()=>{return e=n,new Promise((n=>{setTimeout((()=>{const a=e?t.filter((t=>t.username.includes(e))):t;n(a)}),1500)}));var e}),{refreshDeps:[n]}),o=r?i.createElement(O,null):null!=l&&l.length?l.map((e=>i.createElement(b,(0,s.Z)({key:e.username},e)))):i.createElement(T,null,i.createElement(W.Z,{color:"warning",sx:{fontSize:100}}),i.createElement(p.Z,{color:"GrayText"},"\u627e\u4e0d\u5230\u8054\u7cfb\u4eba"));return i.createElement(_,null,i.createElement(k,{onSearch:a}),i.createElement(G,{className:"list-container"},o))})},4678:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(1318),r=n(7774),l=n(496),s=n(5052);const o=[{username:"\u76ae\u5361\u4e18",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/pikachu.png"},{username:"\u53ef\u8fbe\u9e2d",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/psyduck.png"},{username:"\u4f0a\u5e03",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/eevee.png"},{username:"\u5c0f\u706b\u9f99",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/charmander.png"},{username:"\u9a6c\u91cc\u5965",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/super_mario.png"},{username:"\u5999\u86d9\u79cd\u5b50",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/bullbasaur.png"},{username:"\u80d6\u4e01",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/jigglypuff.png"},{username:"\u6770\u5c3c\u9f9f",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/squirtle.png"},{username:"\u55b5\u55b5",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/meowth.png"},{username:"\u5361\u6bd4\u517d",avatar:"https://raw.githubusercontent.com/x-bell/xbell-assets/main/test-website/avatar/snorlax.png"}],i=()=>a.createElement(s.H,null,a.createElement(l.Z,null),a.createElement(r.Z,{dataSource:o}))},2215:(e,t,n)=>{function a(e){return e.split("test-site/").pop().split("/")[0]}n.d(t,{Z:()=>a})}}]);