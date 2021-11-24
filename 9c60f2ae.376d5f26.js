(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(227)),c=["components"],l={title:"Code",sidebar_label:"Code"},i={unversionedId:"platform_concepts/studio/cloud-function",id:"platform_concepts/studio/cloud-function",isDocsHomePage:!1,title:"Code",description:"How to create a new function?",source:"@site/docs/platform_concepts/studio/cloud-function.md",slug:"/platform_concepts/studio/cloud-function",permalink:"/docs/platform_concepts/studio/cloud-function",version:"current",sidebar_label:"Code",sidebar:"platform_concepts",previous:{title:"Variables",permalink:"/docs/platform_concepts/studio/bot-variables"},next:{title:"Publish your Bot",permalink:"/docs/platform_concepts/studio/modes"}},b=[{value:"How to create a new function?",id:"how-to-create-a-new-function",children:[]},{value:"Useful args you can access in code",id:"useful-args-you-can-access-in-code",children:[]},{value:"Useful Code Snippets",id:"useful-code-snippets",children:[{value:"Autocomplete",id:"autocomplete",children:[]}]}],u={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-create-a-new-function"},"How to create a new function?"),Object(o.b)("p",null,"You can add a new function to write your custom logic in code in the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"code"))," section of the studio.\nTo execute these functions in a flow, you can attach function action node."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Format of cloud functions")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"return new Promise(resolve => {\n      // Your logic goes here\n      resolve();\n  }); \n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"useful-args-you-can-access-in-code"},"Useful args you can access in code"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"arg"),Object(o.b)("th",{parentName:"tr",align:null},"data type"),Object(o.b)("th",{parentName:"tr",align:null},"Use"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.variables.<variable_name>"),Object(o.b)("td",{parentName:"tr",align:null},"Key : String, Value: any"),Object(o.b)("td",{parentName:"tr",align:null},"To access any bot variable in code.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.channel"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"To access channel names like whatsapp, yellowmessenger, facebook etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.profile"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Contains user profile values like name, number, email, city , country, language")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.sender"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"User ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.bot"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Bot ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.message"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"To access Last/latest user message in the conversation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data.event.<event_name>"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"To access events in code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ymLib.args.apiResponse"),Object(o.b)("td",{parentName:"tr",align:null},"any"),Object(o.b)("td",{parentName:"tr",align:null},"To access API response in API transformation function")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ymLib.args.logger"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Can be used to add logs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"context.history"),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Contains history of nodes visited by user")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"prediction.intents"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To get Intents predicted from user message")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"prediction.entities"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To get entities predicted from user message")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"useful-code-snippets"},"Useful Code Snippets"),Object(o.b)("h3",{id:"autocomplete"},"Autocomplete"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'return new Promise(resolve => {\n    console.log("inside autoSuggestion");\n    let result = data.variables.autoComponents;\n    const { term } = data;\n    let suggestions = [];\n    result.forEach((hit) => {\n        if (hit.component.toLowerCase().includes(term.toLowerCase())) {\n            suggestions.push([hit.component, hit.component]);\n        }\n    });\n    resolve(suggestions);\n});\n')))}s.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);