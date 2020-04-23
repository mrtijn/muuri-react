(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),i=(n(0),n(145)),o=n(147),c={title:"Filtering"},s={id:"usage/filtering",title:"Filtering",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs\\usage\\filtering.mdx",permalink:"/muuri-react/docs/usage/filtering",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/usage/filtering.mdx",sidebar:"someSidebar",previous:{title:"Items data",permalink:"/muuri-react/docs/usage/items-data"},next:{title:"Sorting",permalink:"/muuri-react/docs/usage/sorting"}},u=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Class components \ud83d\udce6",id:"class-components-",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Filtering can be managed through the ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," prop of the MuuriComponent. The filter will be updated every time that the MuuriComponent ",Object(i.b)("inlineCode",{parentName:"p"},"re-render")," with a new value in the prop or an Item is added."),Object(i.b)("img",{src:Object(o.a)("gifs/filtering.gif"),className:"shadow",style:{width:"60%"}}),Object(i.b)("p",null,"The filter prop accept a ",Object(i.b)("inlineCode",{parentName:"p"},"function"),". The function is executed for every Item in the instance, if the return value is truthy the Item in question will be ",Object(i.b)("inlineCode",{parentName:"p"},"shown")," and otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"hidden"),". The function receives the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../usage/items-data.md"}),"data")," of the Item as it's argument."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent filter={filterValue}>\n  <Item key="1" />\n  <Item key="2" />\n</MuuriComponent>\n')),Object(i.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(i.b)("p",null,"In this example we have Items that are distinguished by a ",Object(i.b)("inlineCode",{parentName:"p"},"text")," value assigned to them. We want to take an input string and show only the Items whose text contains the given string."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  // Text input.\n  const [input, setInput] = useState('');\n\n  // Items.\n  const [items, setItems] = useState([\n    {key: '1', text: 'as'},\n    {key: '2', text: 'gg'},\n    {key: '3', text: 'st'},\n  ]);\n\n  // Items to components.\n  const children = items.map((item) => (\n    <Item key={item.key} text={item.text} />\n  ));\n\n  // Memoized filter method.\n  const filter = useCallback(\n    ({text}) => {\n      // Return if the input is contained in the text data.\n      return text.indexOf(input) > -1;\n    },\n    [input]\n  );\n\n  // Render.\n  return (\n    <>\n      {/* Text input. */}\n      <input onChange={setInput} />\n      {/* MuuriComponent. */}\n      <MuuriComponent propsToData={({text}) => ({text})} filter={filter}>\n        {children}\n      </MuuriComponent>\n    </>\n  );\n};\n")),Object(i.b)("p",null,"We want the filter function to ",Object(i.b)("inlineCode",{parentName:"p"},"change")," every time the input changes, so that the MuuriComponent applies the filter.\nWe also want the function to ",Object(i.b)("inlineCode",{parentName:"p"},"not change")," if the input remains the same to avoid unnecessary re-filtering (when the component re-render for other reasons)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In this example when the input changes, the component re-render ",Object(i.b)("em",{parentName:"p"},"(because of ",Object(i.b)("strong",{parentName:"em"},"setInput"),")"),", the filter function is recreated ",Object(i.b)("em",{parentName:"p"},"(because of ",Object(i.b)("strong",{parentName:"em"},"useCallback"),")")," and the filter is applied correctly.")),Object(i.b)("h2",{id:"class-components-"},"Class components \ud83d\udce6"),Object(i.b)("p",null,"In function components you can rely on ",Object(i.b)("inlineCode",{parentName:"p"},"useCallback")," to modify the filter in a very simple way. This is not possible in class components."),Object(i.b)("p",null,"If you need to ",Object(i.b)("inlineCode",{parentName:"p"},"change")," the filter, you can easily reimplement how useCallback works in the class."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class App extends React.Component {\n  filter(a, b) {\n    // Implement your custom filter...\n  }\n\n  updateFilterReference() {\n    this.filterReference = (a, b) => this.filter(a, b);\n  }\n\n  render() {\n    return (\n      <MuuriComponent filter={this.filterReference}>\n        {this.props.children}\n      </MuuriComponent>\n    );\n  }\n}\n")),Object(i.b)("p",null,"If you don't mind avoiding unnecessary re-filtering and want to reapply the filter during each re-render for simplicity, you can use an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/faq-functions.html#arrow-function-in-render"}),"arrow function")," in render or the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../api-reference/muuricomponent#forcesync"}),"forceSync")," prop."))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(o,".").concat(b)]||l[b]||m[b]||i;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(146);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);