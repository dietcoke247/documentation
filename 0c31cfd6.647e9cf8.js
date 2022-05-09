(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{349:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),a=(n(0),n(349));const i={title:"Publish your Bot",sidebar_label:"Publish your Bot"},r={unversionedId:"platform_concepts/studio/modes",id:"platform_concepts/studio/modes",isDocsHomePage:!1,title:"Publish your Bot",description:"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (Development Mode) and one where all end users are interacting with the bot(Live Mode).",source:"@site/docs/platform_concepts/studio/modes.md",slug:"/platform_concepts/studio/modes",permalink:"/docs/platform_concepts/studio/modes",version:"current",sidebar_label:"Publish your Bot",sidebar:"platform_concepts",previous:{title:"Code",permalink:"/docs/platform_concepts/studio/cloud-function"},next:{title:"Creating Tables and Inserting Data",permalink:"/docs/platform_concepts/data/create-tables"}},l=[{value:"Development Mode",id:"development-mode",children:[]},{value:"Live Mode",id:"live-mode",children:[]},{value:"Publish Condition Checklist",id:"publish-condition-checklist",children:[{value:"Who can publish the bot?",id:"who-can-publish-the-bot",children:[]},{value:"How to approve the publish request?",id:"how-to-approve-the-publish-request",children:[]},{value:"Few checkpoints before publishing the bot:",id:"few-checkpoints-before-publishing-the-bot",children:[]}]}],s={toc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (",Object(a.b)("em",{parentName:"p"},"Development Mode"),") and one where all end users are interacting with the bot(",Object(a.b)("em",{parentName:"p"},"Live Mode"),"). "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/dk2qgZwPfPA71626253412459.png",alt:null})),Object(a.b)("h3",{id:"development-mode"},"Development Mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is meant for all the on going developments(new journeys/functions, etc) and testing them. Once all changes are working as expected, a request to Publish can be created. Publish request is approved by bot admins. Following video highlights how to create a publish request. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/NcNBztP.gif",alt:null})),Object(a.b)("h3",{id:"live-mode"},"Live Mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is the equivalent of production environment where all the end users are interacting with the bot. This is a READ ONLY mode for Studio Module, so, no changes can be made. However, analytics of live users can be seen in Insights Module; campaigns can be run via Engagement Module and Agent can utilise Inbox to attend to customer queries. ")),Object(a.b)("h2",{id:"publish-condition-checklist"},"Publish Condition Checklist"),Object(a.b)("h3",{id:"who-can-publish-the-bot"},"Who can publish the bot?"),Object(a.b)("p",null,"Bot can be only published by the admins and people having approver access. But the first publish ever on the bot has to be done by the Super Admin only."),Object(a.b)("p",null,"Click ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/configurations/access-management"},"here"),' to see how you can add someone as an approver. Make sure you give them access as "Approvers"'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Only super admins can add other as approvers")),Object(a.b)("p",null,"To check who is the super admin (the one who has created the bot) :"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to the setting "),Object(a.b)("li",{parentName:"ol"},'Then Go to access controls and see who has access control as "Super Admin"')),Object(a.b)("h3",{id:"how-to-approve-the-publish-request"},"How to approve the publish request?"),Object(a.b)("p",null,"To publish the bot follow these steps mentioned:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'As soon as someone raises a publish request, the super admin and the approvers will receive an email with subject line "Approval needed to publish Assistant : <YOUR_BOT_NAME>"'),Object(a.b)("li",{parentName:"ol"},'On the email click on "Check Publish Request"'),Object(a.b)("li",{parentName:"ol"},"It will redirect you to Bot approvals page"),Object(a.b)("li",{parentName:"ol"},"Click on Take Actions"),Object(a.b)("li",{parentName:"ol"},"After testing all the prerequisites mentioned, select the check boxes."),Object(a.b)("li",{parentName:"ol"},'On successful publishing you will receive an email with subject line "Assistant : <YOUR_BOT_NAME> has been approved" and also who has published the request.')),Object(a.b)("h3",{id:"few-checkpoints-before-publishing-the-bot"},"Few checkpoints before publishing the bot:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure the bot is working as expected in the development environment. You can test all the functionality before publishing and approving as well."),Object(a.b)("li",{parentName:"ol"},"The bot is trained with correct intents."),Object(a.b)("li",{parentName:"ol"},"Few things that will not be transferred to live environment on publish bot are:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Records stored in database"),Object(a.b)("li",{parentName:"ul"},"Settings done in inbox module"),Object(a.b)("li",{parentName:"ul"},"Analytics of the bot in Insights tab"),Object(a.b)("li",{parentName:"ul"},"Campaigns scheduled in engage module"),Object(a.b)("li",{parentName:"ul"},"Templates applied in the engage module"))),Object(a.b)("li",{parentName:"ol"},"Bot id is different in development and live environment"),Object(a.b)("li",{parentName:"ol"},"If you see the publish button as disabled and it says that bot is in read-only mode, make sure all the previous publish requests are approved and published.")))}c.isMDXComponent=!0}}]);