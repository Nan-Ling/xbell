"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8974],{6968:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o(1318).createContext()},3290:(e,t,o)=>{function n({props:e,states:t,muiFormControl:o}){return t.reduce(((t,n)=>(t[n]=e[n],o&&void 0===e[n]&&(t[n]=o[n]),t)),{})}o.d(t,{Z:()=>n})},3458:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(1318),r=o(6968);function a(){return n.useContext(r.Z)}},8974:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(7021),r=o(6763),a=o(1318),i=o(1208),l=o(3367),s=o(2958),u=o(4583),d=o(1681),c=o(6469),p=o(9564),m=o(3864);function f(e){return(0,c.Z)("MuiInput",e)}const h=(0,r.Z)({},m.Z,(0,p.Z)("MuiInput",["root","underline","input"]));var b=o(7429);const v=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","type"],y=(0,u.ZP)(s.Ej,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[...(0,s.Gx)(e,t),!o.disableUnderline&&t.underline]}})((({theme:e,ownerState:t})=>{let o="light"===e.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputTouchBottomLine})`),(0,r.Z)({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${h.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${h.error}:after`]:{borderBottomColor:(e.vars||e).palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${h.disabled}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${h.disabled}:before`]:{borderBottomStyle:"dotted"}})})),Z=(0,u.ZP)(s.rA,{name:"MuiInput",slot:"Input",overridesResolver:s._o})({}),g=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiInput"}),{disableUnderline:a,components:u={},componentsProps:c,fullWidth:p=!1,inputComponent:m="input",multiline:h=!1,type:g="text"}=o,w=(0,n.Z)(o,v),x=(e=>{const{classes:t,disableUnderline:o}=e,n={root:["root",!o&&"underline"],input:["input"]},a=(0,i.Z)(n,f,t);return(0,r.Z)({},t,a)})(o),S={root:{ownerState:{disableUnderline:a}}},C=c?(0,l.Z)(c,S):S;return(0,b.jsx)(s.ZP,(0,r.Z)({components:(0,r.Z)({Root:y,Input:Z},u),componentsProps:C,fullWidth:p,inputComponent:m,multiline:h,ref:t,type:g},w,{classes:x}))}));g.muiName="Input";const w=g},2958:(e,t,o)=>{o.d(t,{rA:()=>L,Ej:()=>W,ZP:()=>N,_o:()=>P,Gx:()=>j});var n=o(7021),r=o(6763),a=o(8760),i=o(1318),l=o(9505),s=o(6713),u=o(1514),d=o(2284),c=o(2875),p=o(7429);const m=["onChange","maxRows","minRows","style","value"];function f(e,t){return parseInt(e[t],10)||0}const h={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},b=i.forwardRef((function(e,t){const{onChange:o,maxRows:a,minRows:l=1,style:b,value:v}=e,y=(0,n.Z)(e,m),{current:Z}=i.useRef(null!=v),g=i.useRef(null),w=(0,s.Z)(t,g),x=i.useRef(null),S=i.useRef(0),[C,R]=i.useState({}),A=i.useCallback((()=>{const t=g.current,o=(0,u.Z)(t).getComputedStyle(t);if("0px"===o.width)return;const n=x.current;n.style.width=o.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");const r=o["box-sizing"],i=f(o,"padding-bottom")+f(o,"padding-top"),s=f(o,"border-bottom-width")+f(o,"border-top-width"),d=n.scrollHeight;n.value="x";const c=n.scrollHeight;let p=d;l&&(p=Math.max(Number(l)*c,p)),a&&(p=Math.min(Number(a)*c,p)),p=Math.max(p,c);const m=p+("border-box"===r?i+s:0),h=Math.abs(p-d)<=1;R((e=>S.current<20&&(m>0&&Math.abs((e.outerHeightStyle||0)-m)>1||e.overflow!==h)?(S.current+=1,{overflow:h,outerHeightStyle:m}):e))}),[a,l,e.placeholder]);i.useEffect((()=>{const e=(0,d.Z)((()=>{S.current=0,A()})),t=(0,u.Z)(g.current);let o;return t.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(o=new ResizeObserver(e),o.observe(g.current)),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[A]),(0,c.Z)((()=>{A()})),i.useEffect((()=>{S.current=0}),[v]);return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("textarea",(0,r.Z)({value:v,onChange:e=>{S.current=0,Z||A(),o&&o(e)},ref:w,rows:l,style:(0,r.Z)({height:C.outerHeightStyle,overflow:C.overflow?"hidden":null},b)},y)),(0,p.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:x,tabIndex:-1,style:(0,r.Z)({},h,b,{padding:0})})]})}));var v=o(1208),y=o(5987),Z=o(3290),g=o(6968),w=o(3458),x=o(4583),S=o(1681),C=o(9752),R=o(4589),A=o(9665),k=o(8357);function z(e){const{styles:t,defaultTheme:o={}}=e,n="function"==typeof t?e=>{return t(null==(n=e)||0===Object.keys(n).length?o:e);var n}:t;return(0,p.jsx)(k.xB,{styles:n})}var B=o(5237);const I=function(e){return(0,p.jsx)(z,(0,r.Z)({},e,{defaultTheme:B.Z}))};var E=o(7873),M=o(3864);const F=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],j=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,"small"===o.size&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${(0,C.Z)(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},P=(e,t)=>{const{ownerState:o}=e;return[t.input,"small"===o.size&&t.inputSizeSmall,o.multiline&&t.inputMultiline,"search"===o.type&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},W=(0,x.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:j})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${M.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,r.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"}))),L=(0,x.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:P})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode,n=(0,r.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.placeholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),a={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.placeholder}:{opacity:o?.42:.5};return(0,r.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${M.Z.formControl} &`]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${M.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})})),$=(0,p.jsx)(I,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),N=i.forwardRef((function(e,t){const o=(0,S.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:u,autoFocus:d,className:c,components:m={},componentsProps:f={},defaultValue:h,disabled:x,disableInjectingGlobalStyles:k,endAdornment:z,fullWidth:B=!1,id:I,inputComponent:j="input",inputProps:P={},inputRef:N,maxRows:T,minRows:H,multiline:O=!1,name:U,onBlur:K,onChange:D,onClick:V,onFocus:G,onKeyDown:X,onKeyUp:q,placeholder:_,readOnly:J,renderSuffix:Q,rows:Y,startAdornment:ee,type:te="text",value:oe}=o,ne=(0,n.Z)(o,F),re=null!=P.value?P.value:oe,{current:ae}=i.useRef(null!=re),ie=i.useRef(),le=i.useCallback((e=>{0}),[]),se=(0,R.Z)(P.ref,le),ue=(0,R.Z)(N,se),de=(0,R.Z)(ie,ue),[ce,pe]=i.useState(!1),me=(0,w.Z)();const fe=(0,Z.Z)({props:o,muiFormControl:me,states:["color","disabled","error","hiddenLabel","size","required","filled"]});fe.focused=me?me.focused:ce,i.useEffect((()=>{!me&&x&&ce&&(pe(!1),K&&K())}),[me,x,ce,K]);const he=me&&me.onFilled,be=me&&me.onEmpty,ve=i.useCallback((e=>{(0,E.vd)(e)?he&&he():be&&be()}),[he,be]);(0,A.Z)((()=>{ae&&ve({value:re})}),[re,ve,ae]);i.useEffect((()=>{ve(ie.current)}),[]);let ye=j,Ze=P;O&&"input"===ye&&(Ze=Y?(0,r.Z)({type:void 0,minRows:Y,maxRows:Y},Ze):(0,r.Z)({type:void 0,maxRows:T,minRows:H},Ze),ye=b);i.useEffect((()=>{me&&me.setAdornedStart(Boolean(ee))}),[me,ee]);const ge=(0,r.Z)({},o,{color:fe.color||"primary",disabled:fe.disabled,endAdornment:z,error:fe.error,focused:fe.focused,formControl:me,fullWidth:B,hiddenLabel:fe.hiddenLabel,multiline:O,size:fe.size,startAdornment:ee,type:te}),we=(e=>{const{classes:t,color:o,disabled:n,error:r,endAdornment:a,focused:i,formControl:l,fullWidth:s,hiddenLabel:u,multiline:d,size:c,startAdornment:p,type:m}=e,f={root:["root",`color${(0,C.Z)(o)}`,n&&"disabled",r&&"error",s&&"fullWidth",i&&"focused",l&&"formControl","small"===c&&"sizeSmall",d&&"multiline",p&&"adornedStart",a&&"adornedEnd",u&&"hiddenLabel"],input:["input",n&&"disabled","search"===m&&"inputTypeSearch",d&&"inputMultiline","small"===c&&"inputSizeSmall",u&&"inputHiddenLabel",p&&"inputAdornedStart",a&&"inputAdornedEnd"]};return(0,v.Z)(f,M.u,t)})(ge),xe=m.Root||W,Se=f.root||{},Ce=m.Input||L;return Ze=(0,r.Z)({},Ze,f.input),(0,p.jsxs)(i.Fragment,{children:[!k&&$,(0,p.jsxs)(xe,(0,r.Z)({},Se,!(0,y.Z)(xe)&&{ownerState:(0,r.Z)({},ge,Se.ownerState)},{ref:t,onClick:e=>{ie.current&&e.currentTarget===e.target&&ie.current.focus(),V&&V(e)}},ne,{className:(0,l.Z)(we.root,Se.className,c),children:[ee,(0,p.jsx)(g.Z.Provider,{value:null,children:(0,p.jsx)(Ce,(0,r.Z)({ownerState:ge,"aria-invalid":fe.error,"aria-describedby":s,autoComplete:u,autoFocus:d,defaultValue:h,disabled:fe.disabled,id:I,onAnimationStart:e=>{ve("mui-auto-fill-cancel"===e.animationName?ie.current:{value:"x"})},name:U,placeholder:_,readOnly:J,required:fe.required,rows:Y,value:re,onKeyDown:X,onKeyUp:q,type:te},Ze,!(0,y.Z)(Ce)&&{as:ye,ownerState:(0,r.Z)({},ge,Ze.ownerState)},{ref:de,className:(0,l.Z)(we.input,Ze.className),onBlur:e=>{K&&K(e),P.onBlur&&P.onBlur(e),me&&me.onBlur?me.onBlur(e):pe(!1)},onChange:(e,...t)=>{if(!ae){const t=e.target||ie.current;if(null==t)throw new Error((0,a.Z)(1));ve({value:t.value})}P.onChange&&P.onChange(e,...t),D&&D(e,...t)},onFocus:e=>{fe.disabled?e.stopPropagation():(G&&G(e),P.onFocus&&P.onFocus(e),me&&me.onFocus?me.onFocus(e):pe(!0))}}))}),z,Q?Q((0,r.Z)({},fe,{startAdornment:ee})):null]}))]})}))},3864:(e,t,o)=>{o.d(t,{Z:()=>a,u:()=>r});var n=o(6469);function r(e){return(0,n.Z)("MuiInputBase",e)}const a=(0,o(9564).Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"])},7873:(e,t,o)=>{function n(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e,t=!1){return e&&(n(e.value)&&""!==e.value||t&&n(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}o.d(t,{B7:()=>a,vd:()=>r})}}]);