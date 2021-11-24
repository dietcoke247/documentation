(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(227)),i=["components"],l={title:"Publish your Bot",sidebar_label:"Publish your Bot"},s={unversionedId:"platform_concepts/studio/modes",id:"platform_concepts/studio/modes",isDocsHomePage:!1,title:"Publish your Bot",description:"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (Development Mode) and one where all end users are interacting with the bot(Live Mode).",source:"@site/docs/platform_concepts/studio/modes.md",slug:"/platform_concepts/studio/modes",permalink:"/docs/platform_concepts/studio/modes",version:"current",sidebar_label:"Publish your Bot",sidebar:"platform_concepts",previous:{title:"Code",permalink:"/docs/platform_concepts/studio/cloud-function"},next:{title:"Creating Tables and Inserting Data",permalink:"/docs/platform_concepts/data/create-tables"}},c=[{value:"Development Mode",id:"development-mode",children:[]},{value:"Live Mode",id:"live-mode",children:[]},{value:"Publish Request Condition Checklist",id:"publish-request-condition-checklist",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (",Object(a.b)("em",{parentName:"p"},"Development Mode"),") and one where all end users are interacting with the bot(",Object(a.b)("em",{parentName:"p"},"Live Mode"),"). "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/dk2qgZwPfPA71626253412459.png",alt:null})),Object(a.b)("h3",{id:"development-mode"},"Development Mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is meant for all the on going developments(new journeys/functions, etc) and testing them. Once all changes are working as expected, a request to Publish can be created. Publish request is approved by bot admins. Following video highlights how to create a publish request. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/NcNBztP.gif",alt:null})),Object(a.b)("h3",{id:"live-mode"},"Live Mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is the equivalent of production environment where all the end users are interacting with the bot. This is a READ ONLY mode for Studio Module, so, no changes can be made. However, analytics of live users can be seen in Growth Module; campaigns can be run via Engagement Module and Agent can utilise Inbox to attend to customer queries. ")),Object(a.b)("h3",{id:"publish-request-condition-checklist"},"Publish Request Condition Checklist"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Only super admins and approvers can approve the publish request."),Object(a.b)("li",{parentName:"ul"},"First ever bot publish request has to be approved by the super admins only."),Object(a.b)("li",{parentName:"ul"},'Publish requests as a dev can only be seen if you have "Approvers" access to the bot. '),Object(a.b)("li",{parentName:"ul"},"Only super admin of your subscription/bot can give you approver access.")))}p.isMDXComponent=!0}}]);