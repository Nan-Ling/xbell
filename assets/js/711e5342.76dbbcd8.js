"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3710],{2032:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(1318);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(4219),a=(n(1318),n(2032));const o={sidebar_position:1},i="Unit Testing",l={unversionedId:"unit-testing",id:"unit-testing",title:"Unit Testing",description:"Vanilla",source:"@site/docs/unit-testing.mdx",sourceDirName:".",slug:"/unit-testing",permalink:"/xbell/docs/unit-testing",draft:!1,editUrl:"https://github.com/x-bell/xbell/tree/main/website/docs/unit-testing.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Getting started",permalink:"/xbell/docs/get-started"},next:{title:"Component Testing",permalink:"/xbell/docs/component-testing"}},c={},p=[{value:"Vanilla",id:"vanilla",level:2},{value:"React",id:"react",level:2},{value:"Vue",id:"vue",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-testing"},"Unit Testing"),(0,a.kt)("h2",{id:"vanilla"},"Vanilla"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { test, expect } from 'xbell';\n\ntest('#vanilla demo', async ({ page }) => {\n  const result = await page.evalute(async () => {\n    const { add } = await import('./add');\n    return add(1, 1);\n  });\n\n  expect(result).toBe(2);\n});\n\n\n")),(0,a.kt)("h2",{id:"react"},"React"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { test } from 'xbell';\n\ntest('#react demo', ({ page }) => {\n  // create root element\n  await page.goto('https://my-custom.com', { mockHtml: '<div id=\"root\"></div>' });\n\n  await page.evalute(async () => {\n     // for jsx program\n    const { default: React } = await import('react'); \n    const { default: ReactDOM } = await import('react-dom');\n    const { default: App } = await import('./App');\n    ReactDOM.render(<App />, document.getElementById('root'));\n  });\n\n  await page.localByText('link').click()\n});\n")),(0,a.kt)("p",null,"You can see Adavance React to learn more."),(0,a.kt)("h2",{id:"vue"},"Vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { test } from 'xbell';\n\ntest('#vue demo', ({ page }) => {\n  // create root element\n  await page.goto('https://my-custom.com', { mockHtml: '<div id=\"root\"></div>' });\n\n  await page.evalute(async () => {\n    const { default: App } = await import('./App.vue');\n    const { createApp } = await import('vue');\n    createApp(App).mount('#app');\n  });\n\n  await page.localByText('link').click()\n});\n")))}u.isMDXComponent=!0}}]);