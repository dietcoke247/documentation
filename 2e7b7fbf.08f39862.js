(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),l=(n(0),n(349));const o={title:"Alexa",sidebar_label:"Alexa"},r={unversionedId:"platform_concepts/channelConfiguration/alexa",id:"platform_concepts/channelConfiguration/alexa",isDocsHomePage:!1,title:"Alexa",description:"There are two parts to an Alexa skill. The first part is the Voice User Interface (VUI). This is where we define how we will handle a user's voice input. The second part is the actual code logic for our skill. Setting up of the VUI will take place completely in the Amazon Developer Portal, while",source:"@site/docs/platform_concepts/channelConfiguration/alexa.md",slug:"/platform_concepts/channelConfiguration/alexa",permalink:"/docs/platform_concepts/channelConfiguration/alexa",version:"current",sidebar_label:"Alexa",sidebar:"platform_concepts",previous:{title:"Audience Targetting Rules",permalink:"/docs/platform_concepts/engagement/inbound/audienceTargetting/audienceTargetingRules"},next:{title:"Android Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/android"}},i=[{value:"Setting up Your Alexa Skill in the Developer Portal",id:"setting-up-your-alexa-skill-in-the-developer-portal",children:[{value:"Skill Information Tips",id:"skill-information-tips",children:[]}]}],c={toc:i};function s({components:e,...t}){return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"There are two parts to an Alexa skill. The first part is the ",Object(l.b)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/define-the-interaction-model-in-json-and-text.html"},"Voice User Interface (VUI)"),". This is where we define how we will handle a user's voice input. The second part is the actual code logic for our skill. Setting up of the VUI will take place completely in the ",Object(l.b)("a",{parentName:"p",href:"https://www.amazon.com/ap/signin?openid.pape.preferred_auth_policies=Singlefactor&clientContext=133-4657237-7550651&openid.pape.max_auth_age=7200000&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Falexa%2Fconsole%2Fask&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dante_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&#/skills"},"Amazon Developer Portal"),", while\nthe actual code logic will be written in the ",Object(l.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com"},"Platform"),"."),Object(l.b)("h2",{id:"setting-up-your-alexa-skill-in-the-developer-portal"},"Setting up Your Alexa Skill in the Developer Portal"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Go to the Amazon Developer Portal. In the top-right corner of the screen, click the "Sign In" button.')),Object(l.b)("p",null,"Use your sign in credentials are as follows -"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/b7OXjkh.png",alt:null})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},'Once you have signed in, go to "Developer Console". click the Alexa button at the top of the screen.')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/N0jmyTl.png",alt:null})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Select "Alexa Skills Kit" Option')),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Select "Create Skill" This will get you to the first page of your new Alexa skill.'))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/op9tu8H.png",alt:null})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Fill out the Skill Information screen. Make sure to review the tips provided below the screenshot.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/tKYVUoT.png",alt:null})),Object(l.b)("h3",{id:"skill-information-tips"},"Skill Information Tips"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Skill Type")," - Create all skills using the Custom Interaction Model. This is the default choice.\n",Object(l.b)("strong",{parentName:"p"},"Language")," - Choose the first language you want to support. You can add additional languages in the future. For now, set it to English(India).\n",Object(l.b)("strong",{parentName:"p"},"Name")," - This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to.\n",Object(l.b)("strong",{parentName:"p"},"Invocation Name")," - This is the name that your users will need to say to start your skill. We have provided some common issues\ndevelopers encounter in the list below, but you should also review the entire Invocation Name Requirements."),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},'Click the "Continue with template" to move to the Interaction Model.')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/n3BRd6Z.png",alt:null})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Selct each options from skills builder checklist and fill the details for each")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/xPAc74n.png",alt:null})),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},'On slecting " Intents, Samples, and Slots" you will arrive at a page that looks like below.')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/mRVu5Un.png",alt:null})),Object(l.b)("ol",{start:9},Object(l.b)("li",{parentName:"ol"},'Go to "Slot Types (0)" option from menu. Then Click on ADD+ to add a new slot type.')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/AemONmPx62621612448145110.png",alt:null})),Object(l.b)("ol",{start:10},Object(l.b)("li",{parentName:"ol"},"Create a new custom slot type called \u201cFreeText\u201d.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/esWT9Lo71fif1612448167000.png",alt:null})),Object(l.b)("ol",{start:11},Object(l.b)("li",{parentName:"ol"},"For the slot values, enter the most likely used utterances for the chatbot. You should enter about 10-15 utterances at least.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/c0lmdBuIy1Xl1612448182867.png",alt:null})),Object(l.b)("ol",{start:12},Object(l.b)("li",{parentName:"ol"},"It\u2019s time to define the intent that sends the text to the backend of the chatbot. Click on ADD+ in \u201cIntents\u201d category.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PVHhEMMzJMtF1612448209501.png",alt:null})),Object(l.b)("ol",{start:13},Object(l.b)("li",{parentName:"ol"},"Add an intent called \u201cRawText\u201d.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/SHdxO2bu9PaQ1612448232070.png",alt:null})),Object(l.b)("ol",{start:14},Object(l.b)("li",{parentName:"ol"},"Now we have to add something called Intent Slots. These intent slots are unique to intents. We have to add an intent slot called \u201cRawTextData\u201d to the intent \u201cRawText\u201d. Click on \u201cRawText\u201d on the left side of the page under the intents header. Then, on the right side of the page, under Intent Slots, type \u201cRawTextData\u201d and click \u201cAdd\u201d.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/dUbEFzJGrM7L1612448303103.png",alt:null})),Object(l.b)("ol",{start:15},Object(l.b)("li",{parentName:"ol"},"You have to set the slot type of the newly created intent slot to \u201cFreeText\u201d")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/kUF1An0sLMzU1612448320844.png",alt:null})),Object(l.b)("ol",{start:16},Object(l.b)("li",{parentName:"ol"},"Now we have to set up the sample utterances for this intent. However, we will only set up one sample utterance, which is going to be the intent slot that we just created. The result of this step will be that whatever is uttered to the Alexa device, will be sent as a raw text to the backend. Type {RawTextData} in the field and press enter.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Kq4wSatBWxlW1612448343229.png",alt:null})),Object(l.b)("ol",{start:17},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Your VUI is all set. It\u2019s now time to build the model that you\u2019ve just created. In the top menu, click \u201cBuild Model\u201d.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Now that your model has been built, it\u2019s time to configure it with the backend. In the top menu, click \u201cConfiguration\u201d.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Go to "endpoint" option from menu. Choose HTTPS as Service Endpoint Type and enter the following URL in Default - ',Object(l.b)("a",{parentName:"p",href:"https://cloud.yellowmessenger.com/integrations/alexa/getResponse"},"https://cloud.yellowmessenger.com/integrations/alexa/getResponse")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/VHhWC15.png",alt:null})),Object(l.b)("ol",{start:20},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The same page also contains permissions below. If your skill requires the address of the device, check out the following resource - ",Object(l.b)("a",{parentName:"p",href:"https://developer.amazon.com/docs/custom-skills/device-address-api.html"},"https://developer.amazon.com/docs/custom-skills/device-address-api.html"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"you need to set up the SSL Certificate settings. Choose the second option. As shown in image at point 19")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Your VUI is ready. Now it\u2019s time to link it to the backend chatbot. On the left menu, navigate to \u201cSkill Information. Copy the Application Id. (It may look like this - amzn1.ask.skill.111ffc3d-229f-46f7-b537-0c19bf89aca2) Open BotPlatform and navigate to the admin of the desired chatbot that you want to link. In the left menu, click on Channels. Choose Amazon Alexa Skill and paste the Alexa Skill ID that you had copied earlier.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Your Alexa skill is good to go. Play around. Have fun."))))}s.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,h=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?l.a.createElement(h,i(i({ref:t},s),{},{components:n})):l.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);