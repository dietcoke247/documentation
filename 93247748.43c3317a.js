(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=(n(0),n(349));const o={sidebar_label:"Sharepoint",Title:"Sharepoint Integration"},i={unversionedId:"platform_concepts/studio/knowledge-management/Sharepoint",id:"platform_concepts/studio/knowledge-management/Sharepoint",isDocsHomePage:!1,title:"Sharepoint",description:"SharePoint Integration",source:"@site/docs/platform_concepts/studio/knowledge-management/Sharepoint.md",slug:"/platform_concepts/studio/knowledge-management/Sharepoint",permalink:"/docs/platform_concepts/studio/knowledge-management/Sharepoint",version:"current",sidebar_label:"Sharepoint",sidebar:"platform_concepts",previous:{title:"AWS",permalink:"/docs/platform_concepts/studio/knowledge-management/AWS"},next:{title:"API Management",permalink:"/docs/platform_concepts/studio/api-management/add-api"}},p=[{value:"SharePoint Integration",id:"sharepoint-integration",children:[{value:"Getting Started",id:"getting-started",children:[]},{value:"Required Permissions",id:"required-permissions",children:[]}]}],l={toc:p};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sharepoint-integration"},"SharePoint Integration"),Object(r.b)("p",null,"yellow.ai's document cognition feature now supports integration with SharePoint. The document cognition system is hence capable of fetching entire documents from a SharePoint site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension '.docx' and '.pdf' are considered."),Object(r.b)("h3",{id:"getting-started"},"Getting Started"),Object(r.b)("h4",{id:"step-1-login"},"Step 1: Login"),Object(r.b)("p",null,"Login to your SharePoint account and click on the site you want to access.\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NROfenYSis8C1622455900087.png",alt:null})),Object(r.b)("h4",{id:"step-2-app-registration"},"Step 2: App Registration"),Object(r.b)("p",null,"Click on New -> App\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/0pN5KOkXKwPU1622465966953.png",alt:null}),"\nTo register an app in SharePoint, navigate to the \"New App Registration\" page by replacing\n'addanapp.aspx' with 'appregnew.aspx'",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/wCJrbVzhXlJA1622456478470.png",alt:null})),Object(r.b)("p",null,"The URL of that page will be similar to: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://%7B%7Btenantname%7D%7D.sharepoint.com/_layouts/15/appregnew.aspx"},"https://{{tenantname}}.sharepoint.com/_layouts/15/appregnew.aspx"))),Object(r.b)("p",null,'Fill the details in that page as per the following table and click "Create".'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Client Id - Click on Generate"),Object(r.b)("li",{parentName:"ul"},"Client Secret - Click on Generate "),Object(r.b)("li",{parentName:"ul"},"Title - Any value"),Object(r.b)("li",{parentName:"ul"},"App Domain - ",Object(r.b)("inlineCode",{parentName:"li"},"localhost")),Object(r.b)("li",{parentName:"ul"},"Redirect URI - ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost"))),Object(r.b)("p",null,"Note : Copy the generated Client Id and Client Secret into some editor as these will be required later.\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/h7lhE1xoZov31622456892916.png",alt:null})),Object(r.b)("p",null,"In next screen, Click on OK\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NUFkf2K2M8QU1622456936834.png",alt:null})),Object(r.b)("h4",{id:"step-3-adding-permissions"},"Step 3: Adding Permissions"),Object(r.b)("p",null,'Now that the app is registered, we need to provide the app with required permissions so that it can access data. In order to do that, replace "settings.aspx" with "appinv.aspx".\n',Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/jDdLApZMemD91622457007886.png",alt:null})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"The URL of that page will be similar to the one below [](https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx)\n")),Object(r.b)("p",null,'In that page, paste the Client Id in the "App Id" text box and click on "Lookup". This will load the\ndetails of the app we registered previously\nIn the "Permission Request XML" paste the following XML. This XML says that the app can have full control over the current web'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'<AppPermissionRequests AllowAppOnlyPolicy="true">  <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/></AppPermissionRequests>\n')),Object(r.b)("p",null,'Once that is added click on "Create".'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/qXn6KiEgZEG51622457303120.png",alt:null})),Object(r.b)("p",null,'In the next screen click on "Trust It" and this will mean that the app will have the required permissions. '),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/E0sQIjgRdpbS1622457429331.png",alt:null})),Object(r.b)("h4",{id:"step-4-checking-tenant-id"},"Step 4: Checking Tenant ID"),Object(r.b)("p",null,"Navigate to app permissions page by replacing 'settings.aspx' by 'appprincipals.aspx'\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/3ZFK6x5NRDWk1622457497391.png",alt:null}),"\nThe text after '@' in the app identifier is the 'tenant id' or 'realm'. This will be used in the auth api verification in step 5. ",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/x6acmxwsFVf91622457610029.png",alt:null}),"  "),Object(r.b)("h4",{id:"step-5-auth-api-verification"},"Step 5: Auth API Verification"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/kNNpz5tQH91s1622457991838.png",alt:null}),'\nCreate a new request in Postman, and change its request type to "POST".'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'The URL will be [](https://accounts.accesscontrol.windows.net/{{realm}}/tokens/OAuth/2)\nClick on the "Body" tab of the request and add the following Key Value pairs\ngrant_type                                                                   client_credentials\nclient_id                                                                       {{appReg_clientId}}@{{realm}}\nclient_secret                                                               {{appReg_clientSecret}}\nresource                                                                       {{principal}}/{{targetHost}}@{{realm}}\nReplace variables of Body with value by referring below table.\nappReg_clientId                                                         Client Id of the app created earlier \nappReg_clientSecret                                                 Client Secret of the app created earlier\n targetHost                                                                   {{Tenantname}}.sharepoint.com\nprincipal                                                                       00000003-0000-0ff1-ce00-000000000000 realm                                                                       \n')),Object(r.b)("p",null,"Tenant id shown in step 4\nIf the API response is 200, you are done! Values used in the body of this api need to be shared.\nIn case, integration needs to be done for multiple sites, step 1 \u2013 step 6 needs to be repeated for other sites."),Object(r.b)("h3",{id:"required-permissions"},"Required Permissions"),Object(r.b)("p",null,"Run the following commands on PowerShell. Without these steps your app won't have the required permissions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Install-Module -Name Microsoft.Online.SharePoint.PowerShell\n$adminUPN="<the full email address of a SharePoint administrator account, example: jdoe@contosotoycompany.onmicrosoft.com>"\n$orgName="<name of your Office 365 organization, example: contosotoycompany>"\n$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."\nConnect-SPOService -Url [](https://$orgName-admin.sharepoint.com) -Credential $userCredential\nset-spotenant -DisableCustomAppAuthentication $false\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Once an app is created you can give access to any site to it. You can view all the apps that have access to the site from ",Object(r.b)("a",{parentName:"p",href:"https://%7B%7Btenantname%7D%7D/dummy/_layouts/15/appprincipals.aspx?Scope=Web"}),"\nAnd you can add new apps to a site by going to ",Object(r.b)("a",{parentName:"p",href:"https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx"}))))}s.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.a.createElement(b,p(p({ref:t},s),{},{components:n})):r.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);