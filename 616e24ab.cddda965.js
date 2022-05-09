(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(349));const a={title:"Let's start with Journeys",sidebar_label:"Journeys"},i={unversionedId:"platform_concepts/studio/journeys",id:"platform_concepts/studio/journeys",isDocsHomePage:!1,title:"Let's start with Journeys",description:"* Journey is the Conversational flow between user and the bot. *",source:"@site/docs/platform_concepts/studio/journeys.md",slug:"/platform_concepts/studio/journeys",permalink:"/docs/platform_concepts/studio/journeys",version:"current",sidebar_label:"Journeys",sidebar:"platform_concepts",previous:{title:"Understanding Conversational Studio",permalink:"/docs/platform_concepts/studio/overview"},next:{title:"Nodes",permalink:"/docs/platform_concepts/studio/steps/steps"}},s=[{value:"Understanding &#39;Journeys&#39;",id:"understanding-journeys",children:[]},{value:"What else journeys can be used for?",id:"what-else-journeys-can-be-used-for",children:[]},{value:"How are Journeys triggered?",id:"how-are-journeys-triggered",children:[{value:"\ud83d\udccc Intent",id:"-intent",children:[]},{value:"\ud83d\udccc Entities",id:"-entities",children:[]},{value:"\ud83d\udccc Event",id:"-event",children:[]},{value:"\ud83d\udccc Page URL",id:"-page-url",children:[]},{value:"\ud83d\udccc Trigger Journey Action node",id:"-trigger-journey-action-node",children:[]}]}],l={toc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Journey is the Conversational flow between user and the bot. ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- User: \u201cShow me the menu\u201d\n- Bot: \u201cPlease select your Cuisine: South Indian, North Indian\u201d\n- User: \u201cSouth Indian\u201d\n- Bot: \u201cPlease select the Item: Dosa, Pongal . . .\u201d\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"understanding-journeys"},"Understanding 'Journeys'"),Object(o.b)("p",null,"To understand what journeys are, let's think about how we will start designing conversational flow for example given in previous section.\nYou already have scope of your bot ready, depending on what purpose user has for chatting with your bot, your bot will respond accordingly. Suppose user is here to book/cancel or reschedule flight tickets, ",Object(o.b)("em",{parentName:"p"},"you will take them through all the steps(Nodes) needed to do just that.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"We call these flows, or series of nodes ",Object(o.b)("inlineCode",{parentName:"strong"},"Journeys")," on our platform."))),Object(o.b)("p",null,"Rephrasing sentence above, ",Object(o.b)("em",{parentName:"p"},"If user is here to book tickets, you will take them through Journey 'Flight tickets'."),"\nSimilarly, you can create Journeys for each major same path your user can take. You can also use journeys to modularise and re-use. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Journeys are where you logically design your conversational flows.")," "))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also categorize your journeys using ",Object(o.b)("inlineCode",{parentName:"p"},"Categories"),"!")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/SIfo2pR.png",alt:null})),Object(o.b)("h2",{id:"what-else-journeys-can-be-used-for"},"What else journeys can be used for?"),Object(o.b)("p",null,"We already talked about how based on purpose or clubbing similar flow, we can take them on respective journeys. "),Object(o.b)("p",null,"But Journeys are much more than that!"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Journeys are also ways for you as bot designer/developer to visualise or implement your bot logic apart from designing around broad user scope.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Design repetitively needed logic/flow :"),"\nImagine that for multiple journeys, for example Book Hotels and Book flights, you need to take user details - Name, email and phone number. This means that you need this same 'user input' logic multiple journeys. Instead of repeating this, you can save your labor by designing a new journey 'User Input' and triggering it whenever you need.  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Journeys are not only about User Intent :"),"\nAs a bot developer, there can be multiple user cases where you need to design some flow - and trigger it whenever you configure it to be triggered, and not randomly because of a clear user intent. We will learn more about how journeys can be triggered in next section. ")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"how-are-journeys-triggered"},"How are Journeys triggered?"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/gPqIjG3.gif",alt:null})),Object(o.b)("h3",{id:"-intent"},"\ud83d\udccc ",Object(o.b)("a",{parentName:"h3",href:"./natural-language-understanding/intents"},"Intent")),Object(o.b)("p",null,"We've already discussed how based on what is user's intent, a journey can be triggered.\nYou can attach one or multiple intents to a single journey\na) Booking New Ticket\nb) Modifying existing booking\nFor example these two intents may be added as start trigger to same journey.\nWe will learn how to add and train ",Object(o.b)("a",{parentName:"p",href:"./natural-language-understanding/intents"},"Intents")," in latter sections."),Object(o.b)("h3",{id:"-entities"},"\ud83d\udccc ",Object(o.b)("a",{parentName:"h3",href:"./natural-language-understanding/entities"},"Entities")),Object(o.b)("p",null,"Journeys can also be triggered using Entities. We will learn more about ",Object(o.b)("a",{parentName:"p",href:"./natural-language-understanding/entities"},"Entities")," later."),Object(o.b)("h3",{id:"-event"},"\ud83d\udccc ",Object(o.b)("a",{parentName:"h3",href:"./event-hub"},"Event")),Object(o.b)("p",null,"Events like bot opened, bot closed, or custom events can be also be added as start triggers for a Journey. Learn more about events in the ",Object(o.b)("a",{parentName:"p",href:"./event-hub"},"Events Hub"),"."),Object(o.b)("h3",{id:"-page-url"},"\ud83d\udccc Page URL"),Object(o.b)("p",null,"You can also decide user loading a certain page URL as a journey trigger. For example, on help page if you want to trigger agent journey directly."),Object(o.b)("h3",{id:"-trigger-journey-action-node"},"\ud83d\udccc Trigger Journey Action node"),Object(o.b)("p",null,"Apart from start trigger can also set up manually when to trigger another journey from  or inside a journey using ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Trigger journey"))," action node."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hope this section gave you a fair idea of what journeys are, and how they function. Going ahead, a journey usually consists of a series of nodes. In next section, we will get a little deeper inside a journey and talk about these building blocks - ",Object(o.b)("inlineCode",{parentName:"strong"},"Nodes")),"."))}u.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(n),p=r,g=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return n?o.a.createElement(g,s(s({ref:t},u),{},{components:n})):o.a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);