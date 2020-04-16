(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(140)),l={title:"Hooks API"},b={id:"api-reference/hooks",title:"Hooks API",description:"The custom hooks provided by this package are designed to be used inside the `items`.\r",source:"@site/docs\\api-reference\\hooks.mdx",permalink:"/muuri-react/docs/api-reference/hooks",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/api-reference/hooks.mdx",sidebar:"someSidebar",previous:{title:"MuuriComponent API",permalink:"/muuri-react/docs/api-reference/muuricomponent"},next:{title:"Utilities API",permalink:"/muuri-react/docs/api-reference/utilities"}},o=[{value:"useData( data, options ) \ud83d\udd0c",id:"usedata-data-options--",children:[{value:"setData( data, options )",id:"setdata-data-options-",children:[]},{value:"Default options",id:"default-options",children:[]}]},{value:"useDrag( ) \ud83d\udd0c",id:"usedrag--",children:[]},{value:"useDraggable( ) \ud83d\udd0c",id:"usedraggable--",children:[{value:"setDraggable( draggable )",id:"setdraggable-draggable-",children:[]}]},{value:"useGrid( ) \ud83d\udd0c",id:"usegrid--",children:[]},{value:"useRefresh( deps ) \ud83d\udd0c",id:"userefresh-deps--",children:[{value:"refresh( )",id:"refresh-",children:[]}]},{value:"useShow( ) \ud83d\udd0c",id:"useshow--",children:[]},{value:"useVisibility( ) \ud83d\udd0c",id:"usevisibility--",children:[{value:"setVisibility( visibility, options )",id:"setvisibility-visibility-options-",children:[]},{value:"Default options",id:"default-options-1",children:[]}]}],c={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The custom hooks provided by this package are designed to be used inside the ",Object(i.b)("inlineCode",{parentName:"p"},"items"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { <hookName> } from "muuri-react";\n')),Object(i.b)("h2",{id:"usedata-data-options--"},"useData( ","[data]",", ","[options]"," ) \ud83d\udd0c"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"object"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The data of the Item in which the hook is called."),Object(i.b)("li",{parentName:"ul"},"Optional."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.merge")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Should new data be merged with old ones or replace them?"),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"setData( data, ","[options]"," )")),Object(i.b)("h3",{id:"setdata-data-options-"},"setData( data, ","[options]"," )"),Object(i.b)("p",null,"Function returned by the hook. The identity of the function is guaranteed to be stable so it will be safe to omit them as a dependency (e.g. if it was used inside a useEffect hook)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"object"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The data of the Item in which the hook is called."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.merge")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Should new data be merged with old ones or replace them?"),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("h3",{id:"default-options"},"Default options"),Object(i.b)("p",null,"Default options used by setData, useData."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"useData.defaultOptions = { merge: false };\n")),Object(i.b)("h2",{id:"usedrag--"},"useDrag( ) \ud83d\udd0c"),Object(i.b)("p",null,"The Item will re-render on each drag start/end."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("h2",{id:"usedraggable--"},"useDraggable( ) \ud83d\udd0c"),Object(i.b)("p",null,"Return the drag enabler method."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"setDraggable( )")),Object(i.b)("h3",{id:"setdraggable-draggable-"},"setDraggable( draggable )"),Object(i.b)("p",null,"Function returned by the hook. The identity of the function is guaranteed to be stable so it will be safe to omit them as a dependency (e.g. if it was used inside a useEffect hook)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A truthy value to allow the Item to be dragged, a falsy value to not allow the Item to be dragged.")))),Object(i.b)("h2",{id:"usegrid--"},"useGrid( ) \ud83d\udd0c"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"GridData")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GridData.id")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The id of the MuuriComponent of which the Item is a child."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GridData.groupIds")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"array"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The group ids of the MuuriComponent of which the Item is a child."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GridData.grid")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"Muuri"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Muuri instance of the MuuriComponent of which the Item is a child.")))),Object(i.b)("h2",{id:"userefresh-deps--"},"useRefresh( ","[deps]"," ) \ud83d\udd0c"),Object(i.b)("p",null,"Show the targeted Items."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"deps")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"array"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An array of dependencies, it has the same purpose as in useEffect."),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"refresh( )")),Object(i.b)("h3",{id:"refresh-"},"refresh( )"),Object(i.b)("p",null,"Function returned by the hook. The identity of the function is guaranteed to be stable so it will be safe to omit them as a dependency (e.g. if it was used inside a useEffect hook)."),Object(i.b)("h2",{id:"useshow--"},"useShow( ) \ud83d\udd0c"),Object(i.b)("p",null,"The Item will re-render each time its visibility change."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("h2",{id:"usevisibility--"},"useVisibility( ) \ud83d\udd0c"),Object(i.b)("p",null,"Return the visibility setter method."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"setVisibility( )")),Object(i.b)("h3",{id:"setvisibility-visibility-options-"},"setVisibility( visibility, ","[options]"," )"),Object(i.b)("p",null,"Function returned by the hook. The identity of the function is guaranteed to be stable so it will be safe to omit them as a dependency (e.g. if it was used inside a useEffect hook)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"visibility")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A truthy value to show the Item, a falsy value to hide the Item."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"options.instant")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Should the animation happen instantly?"),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("h3",{id:"default-options-1"},"Default options"),Object(i.b)("p",null,"Default options used by setVisibility."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"useData.defaultOptions = { instant: false };\n")))}s.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(m,b({ref:t},c,{components:a})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);