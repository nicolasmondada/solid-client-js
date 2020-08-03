(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(88)),i={id:"core-concepts",title:"Core Concepts",sidebar_label:"Core Concepts"},c={unversionedId:"guide/core-concepts",id:"guide/core-concepts",isDocsHomePage:!1,title:"Core Concepts",description:"Fetching data",source:"@site/docs/guide/core-concepts.md",permalink:"/solid-client-js/docs/guide/core-concepts",editUrl:"https://github.com/inrupt/solid-client-js/edit/master/website/docs/guide/core-concepts.md",sidebar_label:"Core Concepts",sidebar:"prose",previous:{title:"Motivation",permalink:"/solid-client-js/docs/guide/motivation"},next:{title:"Next Steps",permalink:"/solid-client-js/docs/guide/next-steps"}},s=[{value:"Fetching data",id:"fetching-data",children:[]},{value:"Immutability",id:"immutability",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"fetching-data"},"Fetching data"),Object(o.b)("p",null,"In general, working with data using solid-client involves two steps: making a request to some web address (URL) to fetch an object containing all data at that address (a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/solid-client-js/docs/glossary#litdataset"}),Object(o.b)("inlineCode",{parentName:"a"},"LitDataset")),"), and then passing that object to functions to extract and manipulate sets of data from it that are relevant to you (which we call ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/solid-client-js/docs/glossary#thing"}),Object(o.b)("inlineCode",{parentName:"a"},"Thing"),"s"),")."),Object(o.b)("p",null,"For example, to read my name, you would first fetch a LitDataset from ",Object(o.b)("inlineCode",{parentName:"p"},"https://vincentt.inrupt.net/profile/card"),", the URL at which my personal information is stored. Then, from that LitDataset, you could extract the Thing that represents my profile. From that, you can then read my name."),Object(o.b)("p",null,"For a more extensive overview of fetching and manipulating data, see the tutorial ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/solid-client-js/docs/tutorials/working-with-data"}),"Working with Data"),"."),Object(o.b)("h2",{id:"immutability"},"Immutability"),Object(o.b)("p",null,"The functions exposed in solid-client are designed to take data as input, apply some transformation, and return the transformed data as output ",Object(o.b)("strong",{parentName:"p"},"without changing the input data"),". That makes it easier for you to write unit tests, and enables frameworks that want to be notified of changes to data (like most modern front-end frameworks) to apply performance optimizations like memoisation, checking for updates by references rather than doing deep comparisons. However, it is good to be aware of this fact; when you're seeing stale data, that is likely the result of a variable pointing to an input value, rather than to the returned result."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);