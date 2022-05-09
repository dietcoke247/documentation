(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{319:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(3),n=(a(0),a(349));const o={title:"Database Search",sidebar_label:"Database Search"},c={unversionedId:"platform_concepts/data/database-search",id:"platform_concepts/data/database-search",isDocsHomePage:!1,title:"Database Search",description:"How to search Database?",source:"@site/docs/platform_concepts/data/database-search.md",slug:"/platform_concepts/data/database-search",permalink:"/docs/platform_concepts/data/database-search",version:"current",sidebar_label:"Database Search",sidebar:"platform_concepts",previous:{title:"Creating Tables and Inserting Data",permalink:"/docs/platform_concepts/data/create-tables"},next:{title:"Understanding The Insights Module",permalink:"/docs/platform_concepts/growth/growth"}},s=[{value:"How to search Database?",id:"how-to-search-database",children:[]}],i={toc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"how-to-search-database"},"How to search Database?"),Object(n.b)("p",null,"As you can see in the screenshot below, we have a userdata table where we're storing super important and classified information of Superheros. Now, to search in this database we've two options."),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/IayOU3SuI8Q01616761692169.png",alt:"User Data DB"})),Object(n.b)("h4",{id:"1-search-using-search-bar"},Object(n.b)("strong",{parentName:"h4"},"1. Search using search bar:")),Object(n.b)("p",null,"In the search bar you can enter your search string and results will be showed below. You can also select in which column you want to search from the ",Object(n.b)("inlineCode",{parentName:"p"},"All fields")," dropdown menu."),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/yloJuXwtyJz21616761857240.png",alt:"Search DB"})),Object(n.b)("h4",{id:"2-search-using-query"},Object(n.b)("strong",{parentName:"h4"},"2. Search using query:")),Object(n.b)("p",null,"Go to Data > Developer tools and select table. In the ",Object(n.b)("inlineCode",{parentName:"p"},"Query")," section, you can enter your query and Output will be shown on the right."),Object(n.b)("p",null,"For example, to search which Superheros lives in the Gotham city you can write a query like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'{\n    "query":{\n        "match":{\n            "city": "Gotham" // search keyword\n        }\n    }\n}\n')),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KqGlwDEAuqhj1616761866852.png",alt:"Query DB"})),Object(n.b)("h4",{id:"3-search-using-database-search-action-node"},Object(n.b)("strong",{parentName:"h4"},"3. Search using database search action node:")),Object(n.b)("p",null,"In the Builder, Database search action node can be used to search the database. For more, checkout ",Object(n.b)("a",{parentName:"p",href:"../studio/steps/action-nodes-and-logic#search"},"Database Action node documentation"),"."))}l.isMDXComponent=!0},349:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(h,s(s({ref:t},l),{},{components:a})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);