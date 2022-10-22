"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9220],{2032:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var n=l(1318);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(l),k=o,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||i;return l?n.createElement(d,a(a({ref:t},p),{},{components:l})):n.createElement(d,a({ref:t},p))}));function k(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=l.length,a=new Array(i);a[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var s=2;s<i;s++)a[s]=l[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},4185:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=l(4219),o=(l(1318),l(2032));const i={title:"Locator"},a=void 0,r={unversionedId:"api/locator",id:"api/locator",title:"Locator",description:"locator.click",source:"@site/docs/api/locator.mdx",sourceDirName:"api",slug:"/api/locator",permalink:"/xbell/zh-CN/docs/api/locator",draft:!1,editUrl:"https://github.com/x-bell/xbell/tree/main/website/docs/api/locator.mdx",tags:[],version:"current",frontMatter:{title:"Locator"},sidebar:"api",previous:{title:"Page",permalink:"/xbell/zh-CN/docs/api/page"},next:{title:"ElementHandle",permalink:"/xbell/zh-CN/docs/api/element-handle"}},u={},s=[{value:"locator.click",id:"locatorclick",level:2},{value:"locator.dblclick",id:"locatordblclick",level:2},{value:"locator.check",id:"locatorcheck",level:2},{value:"locator.uncheck",id:"locatoruncheck",level:2},{value:"locator.focus",id:"locatorfocus",level:2},{value:"locator.hover",id:"locatorhover",level:2},{value:"locator.isVisible",id:"locatorisvisible",level:2},{value:"locator.isCheck",id:"locatorischeck",level:2},{value:"locator.isHidden",id:"locatorishidden",level:2},{value:"locator.isDisabled",id:"locatorisdisabled",level:2},{value:"locator.count",id:"locatorcount",level:2},{value:"locator.getByText",id:"locatorgetbytext",level:2},{value:"locator.getByTestId",id:"locatorgetbytestid",level:2},{value:"locator.getByClass",id:"locatorgetbyclass",level:2},{value:"locator.queryByText",id:"locatorquerybytext",level:2},{value:"locator.queryByTestId",id:"locatorquerybytestid",level:2},{value:"locator.queryByClass",id:"locatorquerybyclass",level:2}],p={toc:s};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"locatorclick"},"locator.click"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.click(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay?")," ",(0,o.kt)("type",null,"number")," Time to wait between mousedown and mouseup in milliseconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button?")," ",(0,o.kt)("type",null,"'left' | 'right' | 'middle'")," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"force?")," ",(0,o.kt)("type",null,"boolean")," Whether to bypass the actionability checks. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickCount?")," ",(0,o.kt)("type",null,"number")," Count of button clicks, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position?")," ",(0,o.kt)("type",null,"object")," Offset for the clickable point relative to the top-left corder of the border box.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," ",(0,o.kt)("type",null,"number")," x-offset for the clickable point relative to the top-left corder of the border box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," ",(0,o.kt)("type",null,"number")," y-offset for the clickable point relative to the top-left corder of the border box."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the Page.setDefaultNavigationTimeout() or Page.setDefaultTimeout() methods.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","void",">"),"\nThis method scrolls element into view if needed, and then uses Page.mouse to click in the center of the element. If the element is detached from DOM, the method throws an error."),(0,o.kt)("h2",{id:"locatordblclick"},"locator.dblclick"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.dblclick(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay?")," ",(0,o.kt)("type",null,"number")," Time to wait between mousedown and mouseup in milliseconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button?")," ",(0,o.kt)("type",null,"'left' | 'right' | 'middle'")," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"force?")," ",(0,o.kt)("type",null,"boolean")," Whether to bypass the actionability checks. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position?")," ",(0,o.kt)("type",null,"object")," Offset for the clickable point relative to the top-left corder of the border box.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," ",(0,o.kt)("type",null,"number")," x-offset for the clickable point relative to the top-left corder of the border box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," ",(0,o.kt)("type",null,"number")," y-offset for the clickable point relative to the top-left corder of the border box."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the Page.setDefaultNavigationTimeout() or Page.setDefaultTimeout() methods.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","void",">"),"\nThis method scrolls element into view if needed, and then uses Page.mouse to double click in the center of the element. If the element is detached from DOM, the method throws an error."),(0,o.kt)("h2",{id:"locatorcheck"},"locator.check"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.check(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position?")," ",(0,o.kt)("type",null,"object")," Offset for the clickable point relative to the top-left corder of the border box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," ",(0,o.kt)("type",null,"number")," x-offset for the clickable point relative to the top-left corder of the border box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," ",(0,o.kt)("type",null,"number")," y-offset for the clickable point relative to the top-left corder of the border box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the Page.setDefaultNavigationTimeout() or Page.setDefaultTimeout() methods.")))),(0,o.kt)("p",null,"This method checks the element by performing the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that element is a checkbox or a radio input. If not, this method throws. If the element is already checked, this method returns immediately."),(0,o.kt)("li",{parentName:"ol"},"Wait for actionability checks on the element, unless force option is set."),(0,o.kt)("li",{parentName:"ol"},"Scroll the element into view if needed."),(0,o.kt)("li",{parentName:"ol"},"Use page.mouse to click in the center of the element."),(0,o.kt)("li",{parentName:"ol"},"Wait for initiated navigations to either succeed or fail."),(0,o.kt)("li",{parentName:"ol"},"Ensure that the element is now checked. If not, this method throws.")),(0,o.kt)("h2",{id:"locatoruncheck"},"locator.uncheck"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.uncheck(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"force?")," ",(0,o.kt)("type",null,"boolean")," Whether to bypass the actionability checks. Defaults to false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position?")," ",(0,o.kt)("type",null,"object")," A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.\nx ",(0,o.kt)("type",null,"number"),"\ny ",(0,o.kt)("type",null,"number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the browserContext.setDefaultTimeout(timeout) or page.setDefaultTimeout(timeout) methods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trial?")," ",(0,o.kt)("type",null,"boolean")," When set, this method only performs the actionability checks and skips the action. Defaults to false. Useful to wait until the element is ready for the action without performing it.")))),(0,o.kt)("p",null,"This method checks the element by performing the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that element is a checkbox or a radio input. If not, this method throws. If the element is already unchecked, this method returns immediately."),(0,o.kt)("li",{parentName:"ol"},"Wait for actionability checks on the element, unless force option is set."),(0,o.kt)("li",{parentName:"ol"},"Scroll the element into view if needed."),(0,o.kt)("li",{parentName:"ol"},"Use page.mouse to click in the center of the element."),(0,o.kt)("li",{parentName:"ol"},"Wait for initiated navigations to either succeed or fail, unless noWaitAfter option is set."),(0,o.kt)("li",{parentName:"ol"},"Ensure that the element is now unchecked. If not, this method throws.")),(0,o.kt)("p",null,"If the element is detached from the DOM at any moment during the action, this method throws."),(0,o.kt)("p",null,"When all steps combined have not finished during the specified timeout, this method throws a TimeoutError. Passing zero timeout disables this."),(0,o.kt)("h2",{id:"locatorfocus"},"locator.focus"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.focus(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the browserContext.setDefaultTimeout(timeout) or page.setDefaultTimeout(timeout) methods.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","void",">")),(0,o.kt)("p",null,"Calls focus on the element."),(0,o.kt)("h2",{id:"locatorhover"},"locator.hover"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.hover(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"force?")," ",(0,o.kt)("type",null,"boolean")," Whether to bypass the actionability checks. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modifiers?")," ",(0,o.kt)("type",null,"Array","<",'"Alt"|"Control"|"Meta"|"Shift"',">")," Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position?")," ",(0,o.kt)("type",null,"object")," A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," ",(0,o.kt)("type",null,"number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," ",(0,o.kt)("type",null,"number")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the browserContext.setDefaultTimeout(timeout) or page.setDefaultTimeout(timeout) methods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trial?")," ",(0,o.kt)("type",null,"boolean")," When set, this method only performs the actionability checks and skips the action. Defaults to false. Useful to wait until the element is ready for the action without performing it.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","void",">")),(0,o.kt)("h2",{id:"locatorisvisible"},"locator.isVisible"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.isVisible(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"timeout? ",(0,o.kt)("type",null,"number")," DEPRECATED This option is ignored. ",(0,o.kt)("inlineCode",{parentName:"li"},"locator.isVisible(options?)")," does not wait for the element to become visible and returns immediately.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","boolean",">")),(0,o.kt)("p",null,"Returns whether the element is visible."),(0,o.kt)("h2",{id:"locatorischeck"},"locator.isCheck"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.isCheck(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the browserContext.setDefaultTimeout(timeout) or page.setDefaultTimeout(timeout) methods.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","boolean",">")),(0,o.kt)("p",null,"Returns whether the element is checked. Throws if the element is not a checkbox or radio input."),(0,o.kt)("h2",{id:"locatorishidden"},"locator.isHidden"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.isHidden(options?)")),(0,o.kt)("h2",{id:"locatorisdisabled"},"locator.isDisabled"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.isDisabled(options?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options?")," ",(0,o.kt)("type",null,"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout?")," ",(0,o.kt)("type",null,"number")," Maximum time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the browserContext.setDefaultTimeout(timeout) or page.setDefaultTimeout(timeout) methods.\n",(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"Promise","<","boolean",">"))))),(0,o.kt)("p",null,"Returns whether the element is disabled, the opposite of enabled."),(0,o.kt)("h2",{id:"locatorcount"},"locator.count"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.count()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("type",null,"Promise","<","number",">"),">"),(0,o.kt)("p",null,"Returns the number of elements matching given selector."),(0,o.kt)("h2",{id:"locatorgetbytext"},"locator.getByText"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.getByText(text)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," ",(0,o.kt)("type",null,"string")," The label text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"Locator"))),(0,o.kt)("h2",{id:"locatorgetbytestid"},"locator.getByTestId"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.getByTestId(testId)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testId")," ",(0,o.kt)("type",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"Locator"))),(0,o.kt)("h2",{id:"locatorgetbyclass"},"locator.getByClass"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," ",(0,o.kt)("type",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"ElementHandle"))),(0,o.kt)("h2",{id:"locatorquerybytext"},"locator.queryByText"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.queryByText(text)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," ",(0,o.kt)("type",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"ElementHandle"))),(0,o.kt)("h2",{id:"locatorquerybytestid"},"locator.queryByTestId"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.queryByTestId(testId)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testId")," ",(0,o.kt)("type",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"ElementHandle"))),(0,o.kt)("h2",{id:"locatorquerybyclass"},"locator.queryByClass"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature: locator.queryByClass(className)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"className")," ",(0,o.kt)("type",null,"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns")," ",(0,o.kt)("type",null,"ElementHandle"))))}m.isMDXComponent=!0}}]);