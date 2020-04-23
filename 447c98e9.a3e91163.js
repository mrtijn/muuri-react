(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(145)),i={title:"useGrid"},c={id:"hooks/useGrid",title:"useGrid",description:"```js",source:"@site/docs\\hooks\\useGrid.mdx",permalink:"/muuri-react/docs/hooks/useGrid",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/hooks/useGrid.mdx",sidebar:"someSidebar",previous:{title:"useDraggable",permalink:"/muuri-react/docs/hooks/useDraggable"},next:{title:"useRefresh",permalink:"/muuri-react/docs/hooks/useRefresh"}},u=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {useGrid} from 'muuri-react';\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useGrid")," hook allow you to know which MuuriComponent the Item is a child of. This hook is useful if you're working with multiple MuuriComponents. See more ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../Usage/reparenting"}),"here"),"."),Object(a.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(a.b)("p",null,"If you are using multiple MuuriComponent you can distinguish them by an id."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  // Items.\n  const todoItems = [<Item key="1" text="Shopping" />];\n  const doneItems = [<Item key="2" text="Homework" />];\n\n  return (\n    <Main>\n      {/* Items marked as \'todo\'. */}\n      <MuuriComponent id="TODO">{todoItems}</MuuriComponent>\n      {/* Items marked as \'done\'. */}\n      <MuuriComponent id="DONE">{doneItems}</MuuriComponent>\n    </Main>\n  );\n};\n')),Object(a.b)("p",null,"Using the useGrid hook you can get the id of the MuuriComponent of which the Item is a child."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Item = ({text}) => {\n  const {id} = useGrid();\n  // Change the color based on the id.\n  const color = id === 'TODO' ? 'blue' : 'green';\n\n  return (\n    <div className={`item color-${color}`}>\n      <div className=\"item-content\">{text}</div>\n    </div>\n  );\n};\n")))}p.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);