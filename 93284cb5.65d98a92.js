(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(227)),i=["components"],l={title:"Variables",sidebar_label:"Variables"},s={unversionedId:"platform_concepts/studio/bot-variables",id:"platform_concepts/studio/bot-variables",isDocsHomePage:!1,title:"Variables",description:"What is a variable",source:"@site/docs/platform_concepts/studio/bot-variables.md",slug:"/platform_concepts/studio/bot-variables",permalink:"/docs/platform_concepts/studio/bot-variables",version:"current",sidebar_label:"Variables",sidebar:"platform_concepts",previous:{title:"Understand different settings and options in Tools",permalink:"/docs/platform_concepts/studio/tools"},next:{title:"Code",permalink:"/docs/platform_concepts/studio/cloud-function"}},o=[{value:"What is a variable",id:"what-is-a-variable",children:[]},{value:"Variable Data Type",id:"variable-data-type",children:[]},{value:"System Variables",id:"system-variables",children:[]},{value:"Custom Variables",id:"custom-variables",children:[]},{value:"Create a Variable",id:"create-a-variable",children:[]},{value:"Use Variables in a Node",id:"use-variables-in-a-node",children:[{value:"Prompt",id:"prompt",children:[]},{value:"Actions",id:"actions",children:[]}]},{value:"Storing in a variable",id:"storing-in-a-variable",children:[]},{value:"Access a variable",id:"access-a-variable",children:[]},{value:"Advanced example",id:"advanced-example",children:[]}],c={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,i);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"what-is-a-variable"},"What is a variable"),Object(b.b)("p",null,"Variables are nothing but a way to store data that can vary/is not fixed."),Object(b.b)("p",null,"These are the types of variables that can be used in the bot flow:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"System variables"),Object(b.b)("li",{parentName:"ul"},"Custom variables",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Journey variables"),Object(b.b)("li",{parentName:"ul"},"Global variables")))),Object(b.b)("h2",{id:"variable-data-type"},"Variable Data Type"),Object(b.b)("p",null,"When variables are defined they need to be assigned a data type. The datatypes are :``"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Number"),": To store numbers including floating-point numbers"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"String"),": To store alphanumeric texts"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Object"),": This datatype is particularly useful to store database and API responses as well as results from date prompt"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Array"),": This can be used to store a list of multiple values of different datatypes.")),Object(b.b)("p",null,"Let\u2019s dive deeper into these variables."),Object(b.b)("h2",{id:"system-variables"},"System Variables"),Object(b.b)("p",null,"This is a fixed set of variables. The variable names can not be altered and new variables can not be added to this category.\nFollowing system variables have been exposed on the platform for quick use: -\n{{{variables.var_name}}} notation is used to access system variables."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Variable"),Object(b.b)("th",{parentName:"tr",align:null},"Data type"),Object(b.b)("th",{parentName:"tr",align:null},"Use"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"source"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the channel from which the message was sent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sender"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the sender ID. eg: mobile number for WhatsApp.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"profile"),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the user\u2019s profile as an object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"pageUrl"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the page\u2019s URL")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sentiment"),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the sentiment of the user message- positive, negative or neutral")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sessionMessageLogUrl"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Returns a URL to the chat\u2019s transcript")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"date"),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null},"Returns the current date and time")))),Object(b.b)("h2",{id:"custom-variables"},"Custom Variables"),Object(b.b)("p",null,"These are variables defined by bot builders. Custom variables are further subdivided into journey and global variables."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Journey Variable"),": It is accessible only within the journey it was created."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Global Variable"),": It is accessible across journeys and in API.")),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"These variables store value only within a session."))),Object(b.b)("h2",{id:"create-a-variable"},"Create a Variable"),Object(b.b)("p",null,"Coming soon"),Object(b.b)("h2",{id:"use-variables-in-a-node"},"Use Variables in a Node"),Object(b.b)("h3",{id:"prompt"},Object(b.b)("a",{parentName:"h3",href:"../studio/steps/prompts-and-messages"},"Prompt")),Object(b.b)("p",null,"Different prompts return a response in different formats and datatype. You can refer to the table below to understand which variable datatype should be used with which prompt."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Prompt"),Object(b.b)("th",{parentName:"tr",align:null},"Variable Datatype"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#use-case-specific"},"Name")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#use-case-specific"},"Email")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#use-case-specific"},"Phone")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#location-prompt"},"Location")),Object(b.b)("td",{parentName:"tr",align:null},"object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#carousal"},"Carousel")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/prompts-and-messages#quick-replies"},"Quick Replies")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/prompts-and-messages#date-prompt"},"Date")),Object(b.b)("td",{parentName:"tr",align:null},"object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/prompts-and-messages#general---question"},"Question")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/prompts-and-messages#feedback-prompt"},"Feedback")),Object(b.b)("td",{parentName:"tr",align:null},"object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/prompts-and-messages#whatsapp-list-prompt"},"Whatsapp List")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Multiselect"),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"studio/steps/prompts-and-messages#files-images-videos"},"Image/file")),Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("h3",{id:"actions"},Object(b.b)("a",{parentName:"h3",href:"../studio/steps/action-nodes-and-logic"},"Actions")),Object(b.b)("p",null,"Action nodes provides response in various datatype. You can refer to the table below to understand which variable datatype should be used with which action node."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Action Node"),Object(b.b)("th",{parentName:"tr",align:null},"Variable Datatype"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#api"},"API")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#search"},"Database (search)")),Object(b.b)("td",{parentName:"tr",align:null},"array")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/action-nodes-and-logic#functions"},"Function")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Outbound Notification"),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Notification Status"),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#raise-ticket"},"Raise ticket")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#modifier"},"Modifier")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#document-search"},"Document Search")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#set-language"},"Set Language")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/action-nodes-and-logic#send-otp-and-verify-otp"},"Send OTP")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"..studio/steps/action-nodes-and-logic#send-otp-and-verify-otp"},"Verify OTP")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Payment"),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"../studio/steps/action-nodes-and-logic#generate-pdf"},"Generate PDF")),Object(b.b)("td",{parentName:"tr",align:null},"object, array, number, string")))),Object(b.b)("h2",{id:"storing-in-a-variable"},"Storing in a variable"),Object(b.b)("p",null,"For storing something in a variable, you get an option in each prompt and in action nodes where needed to store.\nAdditionally, you can also use variables action node for this purpose."),Object(b.b)("h2",{id:"access-a-variable"},"Access a variable"),Object(b.b)("p",null,"You can access a bor variable inside any node using this notation ",Object(b.b)("inlineCode",{parentName:"p"},"{{variables.variable_name}}")," or clicking on variables icon.\nSo for the variable you just created above, you can access using {{variables.category}}"),Object(b.b)("h2",{id:"advanced-example"},"Advanced example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Accessing variable fields and index in JSON object, array type stored in a variable.")),Object(b.b)("p",null,"Above was very simple, but often, in this example in ",Object(b.b)("a",{parentName:"p",href:"../studio/steps/action-nodes-and-logic#api"},"API action node"),", the response you store is not a simple string or value."),Object(b.b)("p",null,"Consider following response from a weather API"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'{\n  "coord": {\n    "lon": 77.2167,\n    "lat": 28.6667\n  },\n  "weather": [\n    {\n      "id": 761,\n      "main": "Dust",\n      "description": "dust",\n      "icon": "50d"\n    }\n  ],\n  "base": "stations",\n  "main": {\n    "temp": 32.54,\n    "feels_like": 30.55,\n    "temp_min": 32,\n    "temp_max": 33,\n    "pressure": 1002,\n    "humidity": 21\n  },\n  "visibility": 3500,\n  "wind": {\n    "speed": 3.09,\n    "deg": 260,\n    "gust": 8.23\n  },\n  "clouds": {\n    "all": 0\n  },\n  "dt": 1617278187,\n  "sys": {\n    "type": 1,\n    "id": 9161,\n    "country": "IN",\n    "sunrise": 1617237667,\n    "sunset": 1617282517\n  },\n  "timezone": 19800,\n  "id": 1273294,\n  "name": "Delhi",\n  "cod": 200\n}\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"To access any fields of this you can simply do {{variables.variable_name.field_name}} and this can go upto fields of fields."))),Object(b.b)("p",null,"For example: to access temp in above, {{variables.API_var.main.temp}} can be used. "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"You can also access array values using keys."),"\nTo access weather description in above, you can see it's inside an array ","[ ]"," and is the first ","[0th index]"," value of array.\n{{variables.API_var.weather.0.description}} will be used.")))}p.isMDXComponent=!0},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||b;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);