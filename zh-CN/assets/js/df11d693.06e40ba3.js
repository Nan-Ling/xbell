"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6589],{2032:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(1318);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(4219),i=(n(1318),n(2032));const l={title:"Config"},o=void 0,a={unversionedId:"api/config",id:"api/config",title:"Config",description:"config.include",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/config.mdx",sourceDirName:"api",slug:"/api/config",permalink:"/xbell/zh-CN/docs/api/config",draft:!1,editUrl:"https://github.com/x-bell/xbell/tree/main/website/docs/api/config.mdx",tags:[],version:"current",frontMatter:{title:"Config"},sidebar:"api",previous:{title:"Test",permalink:"/xbell/zh-CN/docs/api/test"},next:{title:"Expect",permalink:"/xbell/zh-CN/docs/api/expect"}},c={},s=[{value:"config.include",id:"configinclude",level:2},{value:"config.browser",id:"configbrowser",level:2},{value:"config.browser.headless",id:"configbrowserheadless",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="xbell.config.ts"',title:'"xbell.config.ts"'},"import type { XBellConfig } from 'xbell';\n\nexport default <XBellConfig>({\n  browser: {\n    headless: false,\n  },\n  include: ['**/*.{test,spec}.{js,ts,jsx,tsx}']\n});\n")),(0,i.kt)("h2",{id:"configinclude"},"config.include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("type",null,"string[]")),(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']"))),(0,i.kt)("h2",{id:"configbrowser"},"config.browser"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u914d\u7f6e"),(0,i.kt)("h3",{id:"configbrowserheadless"},"config.browser.headless"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("type",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("p",null,"\u662f\u5426\u4f7f\u7528\u65e0\u5934\u6a21\u5f0f"))}u.isMDXComponent=!0}}]);