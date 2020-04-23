(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),o=(r(0),r(145)),c={title:"useDrag"},i={id:"hooks/useDrag",title:"useDrag",description:"```js",source:"@site/docs\\hooks\\useDrag.mdx",permalink:"/muuri-react/docs/hooks/useDrag",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/hooks/useDrag.mdx",sidebar:"someSidebar",previous:{title:"useData",permalink:"/muuri-react/docs/hooks/useData"},next:{title:"useDraggable",permalink:"/muuri-react/docs/hooks/useDraggable"}},u=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import {useDrag} from 'muuri-react';\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useDrag")," hook allow you to know if the Item is being dragged. The Item will re-render on each drag start/end."),Object(o.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(o.b)("p",null,"Just call it inside an Item."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const Item = ({text}) => {\n  const isDragging = useDrag();\n\n  return (\n    <div className="item">\n      <div className="item-content">{isDragging ? \'Release me!\' : text}</div>\n    </div>\n  );\n};\n')))}l.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);