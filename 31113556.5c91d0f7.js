(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(145)),c={title:"useData"},i={id:"hooks/useData",title:"useData",description:"```js",source:"@site/docs\\hooks\\useData.mdx",permalink:"/muuri-react/docs/hooks/useData",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/hooks/useData.mdx",sidebar:"someSidebar",previous:{title:"Muuri",permalink:"/muuri-react/docs/usage/muuri"},next:{title:"useDrag",permalink:"/muuri-react/docs/hooks/useDrag"}},s=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {useData} from 'muuri-react';\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useData")," hook allow you to set the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," to the Item in which the hook has been called. See more ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../usage/items-data"}),"there"),"."),Object(o.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(o.b)("p",null,"It's possible to directly pass the data as a ",Object(o.b)("inlineCode",{parentName:"p"},"parmeter")," to the hook, in this way the data will be set on each rendering."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const Item = ({text}) => {\n  // Data will have the shape: { text }.\n  useData({text});\n\n  return (\n    <div className="item">\n      <div className="item-content">{text}</div>\n    </div>\n  );\n};\n')),Object(o.b)("p",null,"It'a also possible to set the data with the ",Object(o.b)("inlineCode",{parentName:"p"},"setData")," method returned by the hook.\nThe two methods can be used together or individually."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const Item = ({color}) => {\n  // Data will have the shape: { color }.\n  const setData = useData({color});\n\n  return (\n    <div className="item">\n      <div className="item-content">\n        <input\n          type="text"\n          // Data will have the shape: { color, text }.\n          onChange={(text) => setData({text}, {merge: true})}\n        />\n      </div>\n    </div>\n  );\n};\n')))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);