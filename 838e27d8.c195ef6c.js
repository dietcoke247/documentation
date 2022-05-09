(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),s=(n(0),n(349));const o={title:"Overview",sidebar_label:"Overview"},a={unversionedId:"platform_concepts/growth/overview",id:"platform_concepts/growth/overview",isDocsHomePage:!1,title:"Overview",description:"Bot Performance",source:"@site/docs/platform_concepts/growth/overview.md",slug:"/platform_concepts/growth/overview",permalink:"/docs/platform_concepts/growth/overview",version:"current",sidebar_label:"Overview",sidebar:"platform_concepts",previous:{title:"Understanding The Insights Module",permalink:"/docs/platform_concepts/growth/growth"},next:{title:"Metrics",permalink:"/docs/platform_concepts/growth/metrics"}},i=[{value:"Bot Performance",id:"bot-performance",children:[]},{value:"Real Time Activity",id:"real-time-activity",children:[]},{value:"User Engagement Time Graph",id:"user-engagement-time-graph",children:[]},{value:"User Acquisition",id:"user-acquisition",children:[]},{value:"User By Country",id:"user-by-country",children:[]},{value:"User Devices",id:"user-devices",children:[]},{value:"Bot Accuracy",id:"bot-accuracy",children:[]},{value:"Journey Triggers",id:"journey-triggers",children:[]},{value:"Unidentified Utterances",id:"unidentified-utterances",children:[]}],c={toc:i};function l({components:e,...t}){return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"bot-performance"},"Bot Performance"),Object(s.b)("p",null,"Benchmarking is done by calculating the same metric over the selected duration as well\nas for a similar duration before the start Date. Selected duration and previous duration\nare then compared.\nBold line represent the metric for the current duration and the dotted line represents\nmetrics for the previous duration.\nUsers: This shows the unique number of users who conversed with the bot.\nCalculation logic: It is the unique count of users from the list of messages exchanged on\nthe bot. It is calculated using hyperloglog algorithm."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/eVFM7lMkUViy1622804899337.png",alt:null})),Object(s.b)("p",null,"Messages: This shows the number of messages exchanged on the bot.\nCalculation logic: It is the sum of all the messages exchanged. The count includes user,\nbot, agent and notification messages."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/LdsEGvyb96mJ1622804918681.png",alt:null})),Object(s.b)("p",null,"Sessions: This shows the number of sessions created by users on the bot.\nCalculation logic: It is the sum of all the sessions created by the user in the selected\ntime span."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/u5co9Y6jqH3R1622804922280.png",alt:null}),"\nSession Duration: Session duration is the average time for which the user has conversed\nwith the bot. A session can be a max of 30 mins if the user is continously conversing. A\nnew session is started after 30 mins.\nCalculation logic: It is the average of the total time users conversed with the bot by the\ntotal number of sessions. This metric is captured for all the sources."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/QxkFoRcokoAa1622804925320.png",alt:null}),'\nNote: Detailed report can be seen by clicking on "BOT OVERVIEW" on the card.\nThis is calculated for all channels.'),Object(s.b)("hr",null),Object(s.b)("h2",{id:"real-time-activity"},"Real Time Activity"),Object(s.b)("p",null,"This widget shows the real-time usage activity of the bot and which journeys are being\ntriggered by the user.\nHow does the calculation work?\nActive Users: The frequency of unique users are aggregated and shown in minute\ngranularity for the last 30 minutes.\nJourney: For every journey, the start event is being pushed. The count of those started\nevents is shown here for the last 1 hour.\nThis is calculated for all channels.\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Y0a8IN4VsCA81622804928265.png",alt:null})),Object(s.b)("h2",{id:"user-engagement-time-graph"},"User Engagement Time Graph"),Object(s.b)("p",null,"The graph shows the user frequency for the selected period aggregated by hour.\nHow does the calculation work ?\nThe frequency of unique users messaging the bot is aggregated in hourly buckets for the\nselected range.\nThis is calculated for all channels.\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/zMgomCBvnmyH1622804933557.png",alt:null})),Object(s.b)("h2",{id:"user-acquisition"},"User Acquisition"),Object(s.b)("p",null,"This widget shows the counts of the unique users conversing with the bot from various\nsources.\nTraffic Channel\nThe frequency of unique users messaging the bot is segregated by source, aggregated in\nday-wise buckets for the selected date range.\nIt is calculated for all channels.\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/QuVgrerdDn6X1622804952878.png",alt:null})),Object(s.b)("p",null,"Platform / Medium\nThe frequency of unique users messaging the bot is segregated by the device they come\nfrom, aggregated in day-wise buckets for the selected date range.\nThe count may be significantly lesser compared to the number of users since other\nchannels like WhatsApp, Facebook etc do not share this data device data. Hence, the\ngraph shows only the users on yellow messenger bot.\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/SJJtCQdkdjj01622804956449.png",alt:null})),Object(s.b)("h2",{id:"user-by-country"},"User By Country"),Object(s.b)("p",null,"This widget shows the counts of the unique users conversing with the bot from various\ncountries. The top 5 countries and their percentage contributions are shown.\nHow does the calculation work ?\nThe captured IP address of the user is translated to a standard location using the\nstandard ip2location database. The count may be significantly lesser compared to the\ntotal number of users since it shows users only from the source yellow messenger.\nThis is calculated for the Yellow Messenger channel as the IP address can be captured only on this channel\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/lMlEOvdxe25Q1622804959921.png",alt:null})),Object(s.b)("h2",{id:"user-devices"},"User Devices"),Object(s.b)("p",null,"This widget shows the different kind of user devices from which the bot was accessed.\nHow does the calculation work?\nThe frequency of unique users messaging the bot is segregated by the device they come\nfrom, aggregated for the selected date range. Also, device datails in available only for\nyellow messenger source. Other channels like WhatsApp, Facebook etc don\u2019t share this\ndata.\nThis is calculated for the Yellow Messenger channel.\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rTpP5F7ma2O91622804963113.png",alt:null})),Object(s.b)("h2",{id:"bot-accuracy"},"Bot Accuracy"),Object(s.b)("p",null,"This widget shows the bot accuracy based on metrics like how accurate the bot is in\nterms of identifying customer intents, journey start, journey end and drop-offs. This can\nbe used to understand how accurately bot is serving the user queries.\nBot Accuracy: Bot accuracy tells you about the % age of user messages which\nare being identified by the bot with a certain amount of confidence."),Object(s.b)("p",null,"Calculation:\nBA = ","[1 - (Unidetified user messages / Total User Messages)]","*100\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PR7kiayf3hWt1622804966128.png",alt:null}),"\nGoal Completion Rate: Goal completion rate is a measure of how many customer\nintents are being fulfilled by the bot for every 100 intents started by the users."),Object(s.b)("p",null,"Calculation: For every journey the user takes, the journey started and journey\ncompleted event is being pushed. The GCR is measured as:"),Object(s.b)("p",null,"GCR = ","[(Journey Completed Events) / (Journey Started Events)]","* 100\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rPDdas3WwbjK1622804969598.png",alt:null}),"\nHuman Takeover Rate : Human takeover rate is the % age of queries which the\nbot was not able to resolve and the customer had to speak to the live agent. It\nalso includes cases where users directly asked to speak to the agent."),Object(s.b)("p",null,"Calculation: For every conversation that happens on the bot, a human takeover\nevent is pushed when the user requests for a human or is automatically taken to\na human."),Object(s.b)("p",null,"HTR = ","[(No of times Agent transfer happened) / (Journey Started Events)]","*\n100\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Iju07Uznrh8b1622804973704.png",alt:null}),'\nNote: The detailed report can be viewed by clicking on "BOT ACCURACY" on the\ncard.\nChannels this is calculated for : All channels.'),Object(s.b)("h2",{id:"journey-triggers"},"Journey Triggers"),Object(s.b)("p",null,"This widget shows the frequently triggered journeys by the users and the average time\nusers took to complete these journeys.\nHow does the calculation work?\nFor every journey, the completion event is being pushed. The count of those completed\nevents alongwith the time it took to complete those events are shown here for the\nselected duration."),Object(s.b)("p",null,'Note: The detailed report can be viewed by clicking "JOURNEY REPORT" on the card.\nChannels this is calculated for : All channels.\n',Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Ik8tcCUrGT8P1622804978155.png",alt:null})),Object(s.b)("h2",{id:"unidentified-utterances"},"Unidentified Utterances"),Object(s.b)("p",null,"This widget shows an aggregation of all the top utterances by the users which the bot\ncould not identify."),Object(s.b)("p",null,"How does the calculation work?"),Object(s.b)("p",null,"All the utterances which are not identified by the bot are collected and then clubbed\nbased on the type of utterance to show a picture of what utterances the bot is not able to\nunderstand."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/sOPjAP7yuAh31622804982301.png",alt:null})),Object(s.b)("hr",null))}l.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),b=r,p=h["".concat(a,".").concat(b)]||h[b]||d[b]||o;return n?s.a.createElement(p,i(i({ref:t},l),{},{components:n})):s.a.createElement(p,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);