(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(227)),s=["components"],i={title:"Nodes",sidebar_label:"Overviews"},c={unversionedId:"platform_concepts/studio/steps/steps",id:"platform_concepts/studio/steps/steps",isDocsHomePage:!1,title:"Nodes",description:"Nodes can be seen as building blocks of a Journeys.",source:"@site/docs/platform_concepts/studio/steps/steps.md",slug:"/platform_concepts/studio/steps/steps",permalink:"/docs/platform_concepts/studio/steps/steps",version:"current",sidebar_label:"Overviews",sidebar:"platform_concepts",previous:{title:"Let's start with Journeys",permalink:"/docs/platform_concepts/studio/journeys"},next:{title:"Prompts and Messages",permalink:"/docs/platform_concepts/studio/steps/prompts-and-messages"}},l=[{value:"Building Journey using Nodes",id:"building-journey-using-nodes",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Nodes can be seen as building blocks of a Journeys"),". "),Object(a.b)("p",null,"In this doc, following topics will be covered:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What is a node"),Object(a.b)("li",{parentName:"ul"},"How to build journey with nodes")),Object(a.b)("h2",{id:"building-journey-using-nodes"},"Building Journey using Nodes"),Object(a.b)("p",null,"A journey is usually built up using series of smaller nodes. Each Journey should have minimum of two nodes configured."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"First node always is a ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Start Trigger")),". Start trigger - as we have discussed in previous section - a node that let's you configure what all can make this journey trigger - Intents, Entities, Events etc. "),Object(a.b)("li",{parentName:"ul"},"There are one way ",Object(a.b)("a",{parentName:"li",href:"./steps/prompts-and-messages"},Object(a.b)("inlineCode",{parentName:"a"},"Messages")),", where as we learnt, bot doesn't need to wait for user input like message, files, images etc."),Object(a.b)("li",{parentName:"ul"},"Then there are ",Object(a.b)("inlineCode",{parentName:"li"},"Interactive/conversational")," nodes - ",Object(a.b)("a",{parentName:"li",href:"./steps/prompts-and-messages"},Object(a.b)("inlineCode",{parentName:"a"},"Prompts"))," which wait for user input). ")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When user provides an invalid input to the prompt, ",Object(a.b)("inlineCode",{parentName:"li"},"fallback")," message will be shown.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All these nodes can also be connected to ",Object(a.b)("a",{parentName:"li",href:"(./steps/action-nodes-and-logic)"},Object(a.b)("inlineCode",{parentName:"a"},"Action Nodes"))," to perform some background action like Database Insert, Search, or executing an API etc or some ",Object(a.b)("a",{parentName:"li",href:"(./steps/action-nodes-and-logic)"},Object(a.b)("inlineCode",{parentName:"a"},"Logic"))," like If-else. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/6fvXUh9.png",alt:null})),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"In upcoming sections, we will explore various types of nodes - message, prompts, actions, and logic."))))}u.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);