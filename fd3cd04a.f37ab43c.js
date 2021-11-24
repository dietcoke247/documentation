(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(227)),c=["components"],l={title:"SuccessFactors Integration",sidebar_label:"SuccessFactors"},p={unversionedId:"platform_concepts/appConfiguration/successfactors",id:"platform_concepts/appConfiguration/successfactors",isDocsHomePage:!1,title:"SuccessFactors Integration",description:"Configuration Requirements",source:"@site/docs/platform_concepts/appConfiguration/successfactors.md",slug:"/platform_concepts/appConfiguration/successfactors",permalink:"/docs/platform_concepts/appConfiguration/successfactors",version:"current",sidebar_label:"SuccessFactors",sidebar:"platform_concepts",previous:{title:"Razorpay",permalink:"/docs/platform_concepts/appConfiguration/razorpay"},next:{title:"Shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify"}},i=[{value:"Configuration Requirements",id:"configuration-requirements",children:[]},{value:"Employee Profile:",id:"employee-profile",children:[]},{value:"Leave Management:",id:"leave-management",children:[]},{value:"References",id:"references",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuration-requirements"},"Configuration Requirements"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"API Endpoint:")," https://","[API-Server]","/odata/v2/","[Entity]","/$metadata"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Authorization token:")," Basic auth"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Basic Base64(username@companyId:password)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Filters:"),"\neq, in, and, or, ge, le, not, like, etc."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$filter=username eq 'abc@abc.com' and location in 'In','Eu'\n")),Object(o.b)("h2",{id:"employee-profile"},"Employee Profile:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Active Employee:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Deactivate / Ex-Employee:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"//$filter = username eq 'abc@yellowmessenger.com' and status eq 'f'\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27%20and%20status%20eq%20%27f%27&$format=json&$select=defaultFullName,userId,jobCode,email,hireDate' \\\n--header 'Authorization: Basic XXXXX' \\\n")),Object(o.b)("p",null,"For getting end-date and other terminate data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpEmploymentTermination?$filter=userId%20eq%20300&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),Object(o.b)("h2",{id:"leave-management"},"Leave Management:"),Object(o.b)("p",null,"SuccessFactors leave module entity:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Entity")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Time Account Type"),Object(o.b)("td",{parentName:"tr",align:null},"Sets of rules to accrue fixed or a certain amount of balance regularly for each leave type.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Time Type"),Object(o.b)("td",{parentName:"tr",align:null},"These are nothing but the different leave types in your organization eg. Annual Leave, Study Leave etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Time Profile"),Object(o.b)("td",{parentName:"tr",align:null},"Sets of Leave types applicable to specific employee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Time Account"),Object(o.b)("td",{parentName:"tr",align:null},"It holds all the obtained leave balance")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613030763471_image.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Steps to manage time off entity:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Login to SuccessFactors with Admin scope"),Object(o.b)("li",{parentName:"ol"},"Search for ",Object(o.b)("strong",{parentName:"li"},"Manage Time off structure")," in the top search bar."),Object(o.b)("li",{parentName:"ol"},"Select the entity from the first dropdown (time account type, time type, employee time, time account etc.)"),Object(o.b)("li",{parentName:"ol"},"Select the record for update from next dropdown"),Object(o.b)("li",{parentName:"ol"},"Take Action > Make correction > Make the changes > Save.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Steps to Add new record to time off entity:"),"\nFor adding new record to an entity, use the dropdown in the right side and select the entity category that you want to add a record in."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Steps to assign time profile to employee:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Search for the employee in top search bar."),Object(o.b)("li",{parentName:"ol"},"Goto the employee\u2019s Job information section and click on edit icon"),Object(o.b)("li",{parentName:"ol"},"Update the Time information details (word schedule, holiday calendar, Time profile)"),Object(o.b)("li",{parentName:"ol"},"Click on Save, it will automatically create a Time account for the employee.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613032729109_image.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"According to the above image configuration."),"\n",Object(o.b)("strong",{parentName:"p"},"Time Profile :")," Time off Test (TIME_OFF_TEST)\n",Object(o.b)("strong",{parentName:"p"},"Time Type: (*"),"Leave Type",Object(o.b)("strong",{parentName:"p"},"*)"),"\nSick Leave : SICK_LEAVE\nAnnual Leave 2 : ANNUAL_LEAVE"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Leave Balance")),Object(o.b)("p",null," Get balance wrt already availed leaves in past. (Response1)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"//$filter = userId eq 273 and timeAccountType eq 'SICK_LEAVE'\n\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpTimeAccountBalance?$filter=userId%20eq%20%27273%27%20and%20timeAccountType%20eq%20%27SICK_LEAVE%27&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),Object(o.b)("p",null,"Get Leave requests already approved for future leaves. (Response2)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"//$filter = userId eq '273' and timeType eq 'SICK_LEAVE' and startDate ge datetime'{todayDate}T00:00:00' and approvalStatus eq 'APPROVED'\n\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/EmployeeTime?$filter=userId%20eq%20%27273%27%20and%20timeType%20eq%20%27ANNUAL_LEAVE%27%20and%20startDate%20ge%20datetime%272020-02-04T00:00:00%27%20and%20approvalStatus%20eq%20%27PENDING%27&$format=json&$select=deductionQuantity,approvalStatus,timeType,endDate,startDate,externalCode' \\\n--header 'Authorization: Basic XXXXX' \\\n")),Object(o.b)("p",null,"Final Balance"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"finalBalance = Response1.balance - SUM(Response2[i].deductionQuantity)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Apply Leave")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'//externalCode must be unique for every new request\ncurl --location --request POST \'https://api44.sapsf.com/odata/v2/upsert?workflowConfirmed=true&$format=json\' \\\n--header \'Authorization: Basic XXXXX\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "__metadata": {\n        "uri": "https://api44.sapsf.com/odata/v2/EmployeeTime(\'\\\'\'273\'\\\'\')"\n    },\n    "startDate": "/Date(1611619200000)/",\n    "endDate": "/Date(1611792000000)/",\n    "externalCode": "TRY1234",\n    "approvalStatus": "PENDING",\n    "userIdNav": {\n        "__metadata": {\n            "uri": "https://api44.sapsf.com/odata/v2/User(\'\\\'\'273\'\\\'\')",\n            "type": "SFOData.User"\n        }\n    },\n    "timeTypeNav": {\n        "__metadata": {\n            "uri": "https://api44.sapsf.com/odata/v2/TimeType(\'\\\'\'SICK_LEAVE\'\\\'\')",\n            "type": "SFOData.TimeType"\n        }\n    }\n}\'\n')),Object(o.b)("p",null,"Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'//Failed Apply Leave\n{\n    "d": [\n        {\n            "key": "EmployeeTime/externalCode=TRY1234",\n            "status": "ERROR",\n            "editStatus": null,\n            "message": "Expected return date must be one day later than end date. with the index 0",\n            "index": 0,\n            "httpCode": 500,\n            "inlineResults": null\n        }\n    ]\n}\n//Success Apply Leave\n{\n    "d": [\n        {\n            "key": "EmployeeTime/externalCode=TRY1234",\n            "status": "OK",\n            "editStatus": "UPSERTED",\n            "message": null,\n            "index": 0,\n            "httpCode": 200,\n            "inlineResults": null\n        }\n    ]\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Check in Portal"),"\n",Object(o.b)("strong",{parentName:"p"},"In User Profile")," : User Profile > Actions > Manage leave of absence.\n",Object(o.b)("strong",{parentName:"p"},"In Manage Data:")," SF portal > Manage Time Off Structures > Employee Time > ","[externalCode]"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/elq_Uw24PyqLl-s17NbhjHpJlFBr4JLMviAhyp_O1ZfzWLpWJ2TlVz4hHcVnDFB95io1YI0M_IvnmSj-4nko7QnrMtd7Q-SvnLs9B2ipuwRNVKX-5ja5kYUVUJDXb9ZmKoIQAqT9",alt:null})),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SAP API Guide : ",Object(o.b)("a",{parentName:"li",href:"https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US"},"https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/"},"https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/"))))}b.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,l(l({ref:t},i),{},{components:n})):r.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);