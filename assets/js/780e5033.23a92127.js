"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8542],{8449:function(e,n,t){t.d(n,{H:function(){return d},Z:function(){return s}});var r=t(1318),u=t(6995),o=t(5251),i=(0,t(1391).Z)({typography:{fontFamily:"PingFang SC"},palette:{primary:{main:"#6b8fe6"},secondary:{main:"#f50057"}}}),a=t(5928),l=t(5999),c=t(9455),f=r.createContext({userInfo:null,setUserInfo:function(){},logout:function(){}});var s=f,m="__user__info__",v=function(e){var n=e.children,t=(0,a.TH)(),l=(0,c.Z)(t.pathname),s=r.useMemo((function(){return function(e){try{return JSON.parse(e)}catch(n){return null}}(window.localStorage.getItem(m))}),[]),v=r.useState((null==s?void 0:s.env)===l?s:null),d=v[0],g=v[1],p=function(e){if(l){var n=Object.assign({},e,{env:l});g(n),console.log("userInfoWithEnv",n),window.localStorage.setItem(m,JSON.stringify(n))}};return r.createElement(u.Z,{theme:i},r.createElement(o.wT,{maxSnack:3,autoHideDuration:2e3},r.createElement(f.Provider,{value:{userInfo:d,setUserInfo:p,logout:function(){window.localStorage.removeItem(m),p(null)}}},n)))},d=function(e){var n=e.children;return r.createElement(l.Z,null,(function(){return r.createElement(v,null,n)}))}},713:function(e,n,t){var r=t(1318),u=t(4778),o=t(5928),i=t(8449);n.Z=function(e){var n=e.env,t=r.useContext(i.Z).userInfo?"homepage":"login";return r.createElement(o.l_,{to:(0,u.Z)("test-site/"+n+"/"+t)})}},361:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(1318),u=t(713),o=t(8449);function i(){return r.createElement(o.H,null,r.createElement(u.Z,{env:"dev"}))}},9455:function(e,n,t){function r(e){return e.split("test-site/").pop().split("/")[0]}t.d(n,{Z:function(){return r}})}}]);