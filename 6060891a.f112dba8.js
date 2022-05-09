(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return l})),o.d(n,"toc",(function(){return r})),o.d(n,"default",(function(){return s}));var t=o(3),i=(o(0),o(349));const a={title:"Inbox SDK for Cordova",sidebar_label:"Cordova"},l={unversionedId:"platform_concepts/inbox/mobilesdk/cordova",id:"platform_concepts/inbox/mobilesdk/cordova",isDocsHomePage:!1,title:"Inbox SDK for Cordova",description:"Installation",source:"@site/docs/platform_concepts/inbox/mobilesdk/cordova.md",slug:"/platform_concepts/inbox/mobilesdk/cordova",permalink:"/docs/platform_concepts/inbox/mobilesdk/cordova",version:"current",sidebar_label:"Cordova",sidebar:"platform_concepts",previous:{title:"Inbox SDK for Android",permalink:"/docs/platform_concepts/inbox/mobilesdk/android"},next:{title:"Understanding Different Chat Types",permalink:"/docs/platform_concepts/inbox/inbox-settings/chats-configuration/types-of-chat"}},r=[{value:"Installation",id:"installation",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Overview",id:"overview",children:[]},{value:"My Chats",id:"my-chats",children:[]},{value:"Notification",id:"notification",children:[{value:"Background Notification",id:"background-notification",children:[]},{value:"Local Notification",id:"local-notification",children:[]},{value:"Video call Notification",id:"video-call-notification",children:[]}]},{value:"Agent\u2019s Status",id:"agents-status",children:[{value:"Get Agent Status",id:"get-agent-status",children:[]},{value:"Set Agent Status",id:"set-agent-status",children:[]},{value:"Logout",id:"logout",children:[]}]},{value:"Mandatory overrides",id:"mandatory-overrides",children:[]},{value:"Optional overrides for Android",id:"optional-overrides-for-android",children:[{value:"colors.xml",id:"colorsxml",children:[]},{value:"Dimens.xml",id:"dimensxml",children:[]}]},{value:"Informational",id:"informational",children:[{value:"Versions",id:"versions",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Permissions",id:"permissions",children:[]}]}],c={toc:r};function s({components:e,...n}){return Object(i.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Run this command in terminal form project root folder"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-plugin-yellowinbox\n")),Object(i.b)("h4",{id:"demo-app"},"Demo App"),Object(i.b)("p",null,"A demo app has been created to understand the integration and usage of the SDK. It can be found here ",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/yellowinbox-ionic-demo"},"https://github.com/yellowmessenger/yellowinbox-ionic-demo")),Object(i.b)("h2",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"To initialize the SDK, API_KEY, USER_ID and BOT_ID are three mandatory parameters.\nUsers can call the following method for initialization."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.initialize(\n  "API_KEY",\n  "USER_ID",\n  "BOT_ID",\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"apiKey:\nAPI_KEY will be provided by yellow.ai. It's clients responsibility to keep the API_KEY safe."),Object(i.b)("li",{parentName:"ol"},"userId:\nUserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter."),Object(i.b)("li",{parentName:"ol"},"botId:\nBOT_ID will be provided by yellow.ai, Client apps need to keep it safe such that no one else apart from the app can access it.")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Overview gives a high level picture of all the work by showing details like total online agents, average response time and so on."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.startOverviewScreen(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("h2",{id:"my-chats"},"My Chats"),Object(i.b)("p",null,"My Chats lets you view chats that are assigned to you, open and archived. You can also interact with the customer from my chats"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.startMyChatScreen(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("h2",{id:"notification"},"Notification"),Object(i.b)("h3",{id:"background-notification"},"Background Notification"),Object(i.b)("p",null,"To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");\n')),Object(i.b)("p",null,"Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.\nClients need not to listen to these notifications when the app is running, SDK will take care of such events."),Object(i.b)("p",null,"Call the following method if you want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai. Call ",Object(i.b)("inlineCode",{parentName:"p"},"handleBackgroundNotification"),' only if payload contains key "ym". This key indicates notification is coming from Yellow.ai'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'if (payload["ym"] != undefined) {\n    cordova.plugins.YellowInbox.handleBackgroundNotification(backgroundNotificationData);\n}\n')),Object(i.b)("h3",{id:"local-notification"},"Local Notification"),Object(i.b)("p",null,"Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP."),Object(i.b)("p",null,"In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by calling following method and catch the events\nClients need to call following method for listening to local event notification and modifying them"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setLocalReceiver(\n  (event) => {\n    console.log(JSON.stringify(event))\n    /*console.log prints\n        {\n          title: String,\n          body: String,\n          model: Object,\n          eventType: String\n        }\n      */\n  },\n  (failureJSON) => {\n  console.log(JSON.stringify(failureJSON));\n  /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n});\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"eventType: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u201cTicketCreateEvent\u201d"),Object(i.b)("li",{parentName:"ul"},"\u201cTicketUpdateEvent\u201d")))),Object(i.b)("p",null,"Send back the updated data, to show local notification by calling ",Object(i.b)("inlineCode",{parentName:"p"},"setUpdatedEvent"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setUpdatedEvent(\n  event,\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("p",null,"Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).\nWe recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body."),Object(i.b)("h3",{id:"video-call-notification"},"Video call Notification"),Object(i.b)("p",null,"If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the call.\nIn case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function.\nAssuming client is already using FCM"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Client need to set the Firebase token in case device token changes by calling"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In firebase push notification payload callback client need to check if payload contains \u201ccallJoinUrl\u201d call the SDK function to handle it"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.handleBackgroundNotification(\n if (payload.data["callJoinUrl"] != undefined) {\n    cordova.plugins.YellowInbox.handleBackgroundNotification(payload.data);\n  }\n);\n')),Object(i.b)("p",{parentName:"li"},"A call declined from notification can be joined from the Chat view by tapping on the call icon"))),Object(i.b)("h2",{id:"agents-status"},"Agent\u2019s Status"),Object(i.b)("h3",{id:"get-agent-status"},"Get Agent Status"),Object(i.b)("p",null,"To get availability status of logged in user, client can call the following method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.getAgentStatus(\n  (agentStatus) => {\n    console.log(agentStatus);\n    /* Console.log prints any one\n      "AVAILABLE",\n      "BUSY",\n      "AWAY",\n      "UNKNOWN"\n    */\n  },\n  (failureJSON) => {\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("h3",{id:"set-agent-status"},"Set Agent Status"),Object(i.b)("p",null,"To set the status of logged in User, the client can call the following method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setAgentStatus(\n  cordova.plugins.YellowInbox.AgentStatus.AVAILABLE,\n  (successResponse) => {\n    /* Console.log prints\n      "OK"\n     */\n  },\n  (failureJSON) => {\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"status: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"cordova.plugins.YellowInbox.AgentStatus.AVAILABLE"),Object(i.b)("li",{parentName:"ul"},"cordova.plugins.YellowInbox.AgentStatus.AWAY"),Object(i.b)("li",{parentName:"ul"},"cordova.plugins.YellowInbox.AgentStatus.BUSY")))),Object(i.b)("h3",{id:"logout"},"Logout"),Object(i.b)("p",null,"By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.logout(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(i.b)("h2",{id:"mandatory-overrides"},"Mandatory overrides"),Object(i.b)("p",null,"Please add the following key in your strings.xml  file and change the value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.app.id.fileprovider</string>\n')),Object(i.b)("p",null,"By doing this all the images/files will be sandboxed for your app."),Object(i.b)("h2",{id:"optional-overrides-for-android"},"Optional overrides for Android"),Object(i.b)("h3",{id:"colorsxml"},"colors.xml"),Object(i.b)("p",null,"You can update your colors.xml. By overriding these value you can the color as per your app design\nNavigate to project/platforms/android/app/src/main/res/values and in values/colors.xml add the following"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<color name="ym_app_bar_color">@color/primaryColor</color>\n<color name="ym_status_bar_color">@color/primaryDarkColor</color>\n<color name="ym_app_bar_text_color">@color/white</color>\n<color name="ym_app_bar_icon_color">@color/white</color>\n<color name="ym_text_color_primary">@color/primaryTextColor</color>\n<color name="ym_text_color_secondary">@color/secondaryTextColor</color>\n<color name="ym_accent_color">@color/colorAccent</color>\n<color name="ym_icon_color">#707E8A</color>\n<color name="ym_event_msg_background_color">#EAF5FB</color> //light color\n<color name="ym_sent_msg_background_color">#007ED4</color> //dark color\n<color name="ym_rcv_msg_background_color">#F5F8FA</color> // light color\n<color name="ym_progressbar_color">#14568E</color>\n')),Object(i.b)("p",null,"Note : if colors.xml is not present create it"),Object(i.b)("h3",{id:"dimensxml"},"Dimens.xml"),Object(i.b)("p",null,"Navigate to project/platforms/android/app/src/main/res/values and in values/dimens.xml add the following"),Object(i.b)("p",null,"By overriding the client can control text size and progress bar."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<dimen  name="ym_title_size">16sp</dimen>\n<dimen  name="ym_subtitle_size">14sp</dimen>\n<dimen  name="ym_caption_size">12sp</dimen>\n<dimen name="ym_body_size">14dp</dimen>\n<dimen name="ym_progress_bar_size">36dp</dimen>\n<dimen name="ym_in_view_progress_bar_size">24dp</dimen>\n')),Object(i.b)("h2",{id:"informational"},"Informational"),Object(i.b)("h3",{id:"versions"},"Versions"),Object(i.b)("p",null,"YellowInbox SDK usage following minimumSdkVersion targetSdkVersion."),Object(i.b)("p",null,"minSdkVersion 21\ntargetSdkVersion 30"),Object(i.b)("h3",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"YellowInbox SDK usage following dependencies."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"dependencies {\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version\"\n    implementation 'androidx.core:core-ktx:1.5.0'\n    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'androidx.gridlayout:gridlayout:1.0.0'\n\n    implementation 'com.squareup.retrofit2:retrofit:2.9.0'\n    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'\n    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'\n\n    implementation 'com.google.dagger:dagger:2.27'\n    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'\n    kapt 'com.google.dagger:dagger-compiler:2.27'\n\n    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'\n\n    // Glide\n    implementation 'com.github.bumptech.glide:glide:4.12.0'\n    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'\n\n    //Smack\n    implementation \"org.igniterealtime.smack:smack-android-extensions:4.2.0\"\n    implementation \"org.igniterealtime.smack:smack-tcp:4.2.0\"\n\n    //Event bus\n    implementation 'org.greenrobot:eventbus:3.2.0'\n\n    testImplementation 'junit:junit:4.+'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n}\n")),Object(i.b)("h3",{id:"permissions"},"Permissions"),Object(i.b)("p",null,"YellowInbox SDK usage following permissions."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.READ_PHONE_STATE" />\n')))}s.isMDXComponent=!0},349:function(e,n,o){"use strict";o.d(n,"a",(function(){return p})),o.d(n,"b",(function(){return m}));var t=o(0),i=o.n(t);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(o),u=t,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||a;return o?i.a.createElement(m,r(r({ref:n},s),{},{components:o})):i.a.createElement(m,r({ref:n},s))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var s=2;s<a;s++)l[s]=o[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);