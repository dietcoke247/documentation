(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(327)),o=["components"],l={sidebar_label:"YM Notification Engine",title:"YM Notification Engine (v1.0.2)"},c={unversionedId:"platform_concepts/engagement/outbound/notification-engine",id:"platform_concepts/engagement/outbound/notification-engine",isDocsHomePage:!1,title:"YM Notification Engine (v1.0.2)",description:"Description",source:"@site/docs/platform_concepts/engagement/outbound/notification-engine.md",slug:"/platform_concepts/engagement/outbound/notification-engine",permalink:"/docs/platform_concepts/engagement/outbound/notification-engine",version:"current",sidebar_label:"YM Notification Engine",sidebar:"platform_concepts",previous:{title:"How to filter Campaigns?",permalink:"/docs/platform_concepts/engagement/outbound/filter"},next:{title:"Launching Your First Inbound Campaign",permalink:"/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign"}},b=[{value:"Description",id:"description",children:[]},{value:"API Details",id:"api-details",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Request body",id:"request-body",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"userDetails",id:"userdetails",children:[]},{value:"notification",id:"notification",children:[]},{value:"config",id:"config",children:[]},{value:"Response status codes:",id:"response-status-codes",children:[]},{value:"Postback webhook",id:"postback-webhook",children:[]},{value:"Support",id:"support",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Normal Text  Notification",id:"normal-text--notification",children:[]},{value:"Image Notification",id:"image-notification",children:[]},{value:"File Notification",id:"file-notification",children:[]}]}],s={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Notification Engine API offers capability to push dynamic content notification across to users on various channels."),Object(r.b)("p",null,"Key capabilities include:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On demand notification delivery."),Object(r.b)("li",{parentName:"ol"},"Support for scheduling notifications."),Object(r.b)("li",{parentName:"ol"},"Support for postbacks on delivery updates."),Object(r.b)("li",{parentName:"ol"},"Reporting is available.")),Object(r.b)("h2",{id:"api-details"},"API Details"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Endpoint:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=botID\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method : "),"POST"),Object(r.b)("h3",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"All requests to notification engine should be accompanied with this header."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "x-auth-token" : "token"\n}\n')),Object(r.b)("p",null,"*"," Token will be shared separately by the yellow.ai Team."),Object(r.b)("h3",{id:"request-body"},"Request body"),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"userDetails"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Details of the user to be notified, Variables")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"notification"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Template and Channel details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Metadata about the notification. Parameters like postBackUrl, customPayload etc can be specified.")))),Object(r.b)("h3",{id:"userdetails"},"userDetails"),Object(r.b)("p",null,"User details may contain all relevant information about the user. It needs to have atleast one contactable information and any number of additional parameters. For example, in case of voice notification, it needs to have a \u2018number\u2019 field mandatory and any number of extra parameters. It also contains the template parameters that needs to be rendered in the content."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'   "userDetails": {\n       "number": "919876543210", //mandatory for sms, wa, voice     //country code to be added without space if not added default 91\n       "email": "abc@xyz.com", //mandatory for email\n       "fbId": "987543212", //mandatory for fbm\n   }\n')),Object(r.b)("h3",{id:"notification"},"notification"),Object(r.b)("p",null,"Notification contains the message template that needs to be sent as a notification. templateId is mandatory. templateId can be fetched Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "notification": {\n        "templateId": "emi-reminder-template01", // name of the template in YM portal. if template is created in waba, name of the template given there. mandatory for wa, sms(wherever applicable)\n        "params": { //renderable parameters defined in the template.\n            "EMI Value": "15000",\n            "First Name": "Wasim",\n            "media": {\n                "mediaLink": "mediaPublicUrl",\n                "title": "titleOfDoc"\n            } //applicable only for whatsapp \n        },\n        "freeTextContent": "Your content goes here", //if template is not renderable, notification engine will try to send this, subject to channel restrictions\n        "profileId": "kaleyra-sms", //set during channel-configuration. optional if only one profile\n        "type": "whatsapp", // channel type - whatsapp,sms,email,voice,fbmessenger\n        "sender": "919876543210",\n        "language": "en", // applicable for whatsapp\n        "namespace": "1bhjasd67123jjka", // applicable for whatsapp\n    }\n}\n')),Object(r.b)("h3",{id:"config"},"config"),Object(r.b)("p",null,"Channels is a list of channels the user needs to be notified on. Each element is in turn an object containing configuration about the channel."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"config": {\n       "checkOptIn": "true", //  true/false. default value is false.\n       "scheduleAt": "1970-01-01T00:00:00.000Z", // Date time at which the notification should be sent. Default value is immediate. Max limit - 24 hours\n       "customPayload": { // Payload that will flow back to the postback webhook and reports.\n           "BUID": "asdasd", //Can add upto 3 custom reference parameters\n           "userID": "asdasd",\n           "departmentID": "67576q"\n       },\n       "checkOfficeHours":"true" //default value is true. working hours can be configured in portal\n   }\n')),Object(r.b)("p",null,"Currently metadata supports"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"scheduleAt :")," ISO formatted date time string at which the notification must be sent."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"customPayload :")," JSON object which will flow back to the postback URL if configured and also reflect in the reports. Can be used to associate identifying information for a particular notification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"postBackURL :")," URL to send delivery post back.")),Object(r.b)("h3",{id:"response-status-codes"},"Response status codes:"),Object(r.b)("p",null,"On successful queueing of the notification, you will receive a 202 status code with the msgId."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"HTTP Status code"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"202"),Object(r.b)("td",{parentName:"tr",align:null},"Message queued successfully. You will receive a msgId for acknowledgement and tracking.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"400"),Object(r.b)("td",{parentName:"tr",align:null},"Bad request. Request structure is not formed correctly. Please check the \u2018message\u2019 field for more information.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"401"),Object(r.b)("td",{parentName:"tr",align:null},"Unauthorised. Please check your auth token.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"422"),Object(r.b)("td",{parentName:"tr",align:null},"Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"429"),Object(r.b)("td",{parentName:"tr",align:null},"Rate limited. Occurs when there are too many requests. Please retry later.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"500"),Object(r.b)("td",{parentName:"tr",align:null},"Internal server error. TraceId will be sent back for tracking.")))),Object(r.b)("h3",{id:"postback-webhook"},"Postback webhook"),Object(r.b)("p",null,"As soon as we receive callback from the downstream services, we will post that data to the configured webhook if available."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "msgId" : "AsdihS21_",\n   "userId" : "9876543210",        //This will be the contactable user info we notified on.\n   "customPayload" : {},\n   "event" : {\n       "status" : "delivered",\n       //Other channel specific parameters will be present\n   }\n}\n')),Object(r.b)("p",null,"Webhooks will be called with the above request body."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"customPayload: "),"This is the payload passed when queueing the notification.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"event: ")," event will always have the status field and additional fields depending on the channel and the status."),Object(r.b)("p",{parentName:"li"},"  Status can be one of the following."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"queued/triggered"),Object(r.b)("li",{parentName:"ul"},"sent"),Object(r.b)("li",{parentName:"ul"},"delivered"),Object(r.b)("li",{parentName:"ul"},"acknowledged/read"),Object(r.b)("li",{parentName:"ul"},"failed")))),Object(r.b)("h3",{id:"support"},"Support"),Object(r.b)("p",null,"While raising any support issues, please add the msgId or the traceId in the support request."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"normal-text--notification"},"Normal Text  Notification"),Object(r.b)("h4",{id:"curl-request"},"CURL request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE\' \\\n--header \'x-auth-token: TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: ym_xid=TOKEN\' \\\n--data-raw \'{\n   "userDetails": {\n       "number": "USER_PHONE_NUMBER"\n   },\n   "notification": {\n       "type": "whatsapp",\n       "sender": "SENDER_PHONE_NUMBER",\n       "templateId": "TEMPLATE_ID",\n       "params": {\n           "1": "var1",\n           "2": "www.yellow.ai"\n       }\n   }\n}\'\n')),Object(r.b)("h4",{id:"sample"},"Sample"),Object(r.b)("img",{src:"https://i.imgur.com/YwkQ7Xr.png",alt:"drawing",width:"70%"}),Object(r.b)("h3",{id:"image-notification"},"Image Notification"),Object(r.b)("h4",{id:"curl-request-1"},"CURL request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE\' \\\n--header \'x-auth-token: TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: ym_xid=TOKEN\' \\\n--data-raw \'{\n   "userDetails": {\n       "number": "USER_PHONE_NUMBER"\n   },\n   "notification": {\n       "type": "whatsapp",\n       "sender": "SENDER_PHONE_NUMBER",\n       "templateId": "TEMPLATE_ID",\n       "params": {\n       "media": {\n           "mediaLink": "MEDIA_URL"\n           },\n           "1": "var1",\n           "2": "www.yellow.ai",\n           "3": "test"\n}\n \n   }\n}\'\n')),Object(r.b)("h3",{id:"file-notification"},"File Notification"),Object(r.b)("h4",{id:"curl-request-2"},"CURL request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE\' \\\n--header \'x-auth-token: TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: ym_xid=TOKEN\' \\\n--data-raw \'{\n   "userDetails": {\n       "number": "USER_PHONE_NUMBERs"\n   },\n   "notification": {\n       "type": "whatsapp",\n       "sender": "SENDER_PHONE_NUMBER",\n       "templateId": "TEMPLATE_ID",\n       "params": {\n       "media": {\n           "mediaLink": "MEDIA_URL"\n           },\n           "1": "var1",\n           "2": "www.yellow.ai",\n           "3": "test"\n}\n \n   }\n}\'\n')),Object(r.b)("h4",{id:"sample-1"},"Sample"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/YLbGCo7.png",alt:null})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These are our outbound IPs. These need to be whitelisted for the reports callback to flow into your system.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"13.71.52.164"),Object(r.b)("li",{parentName:"ul"},"13.71.49.46"))),Object(r.b)("li",{parentName:"ul"},"The messages will be acknowledged first and delivered at the scheduled time. Can be tracked by the msgId we send back.")))}p.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);