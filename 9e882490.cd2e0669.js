(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(227)),i=["components"],l={title:"Intents",sidebar_label:"Intents"},c={unversionedId:"platform_concepts/studio/natural-language-understanding/intents",id:"platform_concepts/studio/natural-language-understanding/intents",isDocsHomePage:!1,title:"Intents",description:"NLU deals with training machines to read and converse in any human language. Making AI Models understand nuances of language is very complex problem. Thankfully, using Linguistic Semantics i.e. by creating a structured format of sentences, models are able to percieve natural language with good accuracy.",source:"@site/docs/platform_concepts/studio/natural-language-understanding/intents.md",slug:"/platform_concepts/studio/natural-language-understanding/intents",permalink:"/docs/platform_concepts/studio/natural-language-understanding/intents",version:"current",sidebar_label:"Intents",sidebar:"platform_concepts",previous:{title:"Operational/Logical Nodes - Action and Logic",permalink:"/docs/platform_concepts/studio/steps/action-nodes-and-logic"},next:{title:"Entities",permalink:"/docs/platform_concepts/studio/natural-language-understanding/entities"}},s=[{value:"Intents and Training",id:"intents-and-training",children:[{value:"Utterance &amp; Journey Best Practices:",id:"utterance--journey-best-practices",children:[]},{value:"Understanding Confidence and Utterance Report",id:"understanding-confidence-and-utterance-report",children:[]},{value:"Testing Utterances",id:"testing-utterances",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NLU deals with training machines to read and converse in any human language. Making AI Models understand nuances of language is very complex problem. Thankfully, using Linguistic Semantics i.e. by creating a structured format of sentences, models are able to percieve natural language with good accuracy."),Object(o.b)("p",null,"In this doc, following topics will be covered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What is evaluate confidence?"),Object(o.b)("li",{parentName:"ul"},"Sample utterances"),Object(o.b)("li",{parentName:"ul"},"How many utterance to add?")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note - "),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Linguistic")," : study of language"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Semantics")," : study of the meaning of words, phrases or sentences i.e. how arranging group of words in particular fashion to derive meaning."))),Object(o.b)("p",null,"Question is - how does knowledge of word meanings or sentence formation help in better training AI Models?"),Object(o.b)("p",null,"Fortunately, solution is easy to gauge by learning about a few key concepts - ",Object(o.b)("strong",{parentName:"p"},"Intents"),", ",Object(o.b)("strong",{parentName:"p"},"Entities")," and ",Object(o.b)("strong",{parentName:"p"},"Context"),"."),Object(o.b)("p",null,"Any sentence can be broken down into smaller components - "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7M9C8YcyuCJk1626109495211.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Intents")," - These are the literal meanings or core objective of any sentence like in the above example it is booking a flight."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Entities")," - These are facts or additional information that adds meaning to sentence, for example Delhi, New York and 11th August."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Context"),' - In a day-to-day conversation, this generally refers to the underlying meaning of previous few exchanges. For Example - if a person is asking repeated questions about a product and says "Buy IT" , the IT here refers to the product.'),Object(o.b)("h2",{id:"intents-and-training"},"Intents and Training"),Object(o.b)("p",null,"Once you have designed Intents for your bot, it is essential to train them . Before you click on that 'Train' button on top, let's make sure you are aware of the best practices!"),Object(o.b)("h3",{id:"utterance--journey-best-practices"},"Utterance & Journey Best Practices:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DONTs \u274c"),Object(o.b)("th",{parentName:"tr",align:null},"DOs \u2705"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances in which the only variation is Upper Case/Lower Case"),Object(o.b)("td",{parentName:"tr",align:null},"Do add at least 15-20 utterances per journey")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances in which the only variation is Name, Date, City etc"),Object(o.b)("td",{parentName:"tr",align:null},"Do ensure that there are equal number of utterances in each journey")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not create multiple journeys which have similar purpose"),Object(o.b)("td",{parentName:"tr",align:null},"Do merge journeys that are subsets of other journeys")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not overfit the model while training"),Object(o.b)("td",{parentName:"tr",align:null},"Do use the didYouMean (suggestions) feature extensively")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances if a journey will only be triggered through 'Trigger Journey'"),Object(o.b)("td",{parentName:"tr",align:null},"Do minimize False Positives")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Do add abbreviations/shortforms in the \u201csynonyms\u201d section")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add single words as utterances"),Object(o.b)("td",{parentName:"tr",align:null},"Add complete sentences")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-in-which-the-only-variation-is-upper-caselower-case"},"Do not add utterances in which the only variation is Upper Case/Lower Case"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"apply for leave\n\nApply for leave\n\napply For Leave\n\nAPPLY FOR LEAVE\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"please apply for leave\n\ncan you please apply for leave?\n\nhow do I apply for leave?\n\nprocedure to apply for leave\n")),Object(o.b)("p",null,"This will make the model overfit and not learn the underlying sentence structure resulting in bad performance. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-in-which-the-only-variation-is-name-date-city-etc"},"Do not add utterances in which the only variation is Name, Date, City etc"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"apply for leave on 23rd Jan\n\napply for leave on 24th Jan\n\napply for leave on 5th Jan\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"please apply for leave on 23rd Jan\n\ncan you please apply for leave tomorrow?\n\nhow do I apply for leave?\n\nprocedure to apply for leave\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"schedule meeting with John\n\nSchedule meeting with Adam\n\nSchedule meeting with Ram\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"schedule meeting with John \n\nplease block Adams calendar tomorrow for a meeting\n\nsync up with Ram on 3rd Jan\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A few utterances (2-3) like the ones mentioned below are ok but ensure that there are other utterances that show the different variations in sentence structure "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"apply for leave tomorrow "),Object(o.b)("li",{parentName:"ul"},"apply for leave on 3rd "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-add-at-least-15-20-utterances-per-journey"},"Do add at least 15-20 utterances per journey"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The minimum number of utterances in each journey heavily depends on the complexity of the bot (number, type of journeys and quality of the utterances)"),Object(o.b)("li",{parentName:"ul"},"More utterances are always better especially when there are less than 10 journeys.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-ensure-that-there-are-equal-number-of-utterances-in-each-journey"},"Do ensure that there are equal number of utterances in each journey"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Apply Leave Journey - 50 Utterances\n\nLeave Balance Journey - 2 Utterances\n\nSchedule Meeting Journey - 30 Utterances\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Apply Leave Journey - 50 Utterances \n\nLeave Balance Journey - 50 Utterances \n\nSchedule Meeting Journey - 50 Utterances\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try to maintain a balance in the number of utterances per journey"),Object(o.b)("li",{parentName:"ul"},"The NLP model is robust enough to handle small variations in the number of utterances (difference of 3-5 utterances) "),Object(o.b)("li",{parentName:"ul"},"For smaller bots (< 10 journeys) maintaining balance is important to ensure good performance. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-create-multiple-journeys-which-have-similar-purpose"},"Do not create multiple journeys which have similar purpose"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: talk-to-agent\n\nJourney: transfer-to-live-chat\n\nJourney: speak-to-agent\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Single Journey: talk-to-agent\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Having multiple journeys which have similar utterances will confuse the model since there is a high amount of overlap."),Object(o.b)("li",{parentName:"ul"},"Merge all these journeys into one single journey")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-merge-journeys-that-are-subsets-of-other-journeys"},"Do merge journeys that are subsets of other journeys"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: apply-for-loan\n\nJourney: apply-for-home-loan\n\nJourney: apply-for-personal-loan\n\nJourney: benefits-of-home-loan\n\nJourney: benefits-of-automobile-loan\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: apply-for-loan\n\n    Steps: What kind of loan are you interested in?\n\n        - Home, Personal, Automobile\n\nJourney: benefits\n\n    Steps: Which loan would you like to know more about?\n\n        - Home, Personal, Automobile\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the example above ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-home-loan"))," is a subset or part  of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan journey")),".\nThis means that ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-home-loan"))," will have utterances that are very similar to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"- Eg: \u201ccan you please help me apply for home loan?\u201d , \u201cCan you please apply for loan?\u201d\n\nThis will confuse the model during training \n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There are 2 Steps to fix this: "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Move all utterances to the parent journey in this case ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan"))),Object(o.b)("li",{parentName:"ul"},"Create a step asking the user for additional details (in this case type of loan)")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  *    Another option is to setup entities (eg: type-of-loan - Personal, Home can be a type of entity) within the journey.\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-if-a-journey-will-only-be-triggered-through-trigger-journey-option"},"Do not add utterances if a journey will only be triggered through Trigger Journey option"),"There may be some journeys in the bot that are meant to be triggered only from another journey. (i.e. these wont be triggered by the user\u2019s input)")),Object(o.b)("p",null,"Eg: Feedback Journey"),Object(o.b)("p",null,"For these journeys do ",Object(o.b)("strong",{parentName:"p"},"NOT")," add any user expressions/utterances\nAdding utterances here will unnecessarily increase the complexity of the NLP Model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-minimize-false-positives"},"Do minimize False Positives"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"When an incorrect journey is triggered with high confidence it is considered a False Positive."),Object(o.b)("li",{parentName:"ul"},"False Positives occur because of overfitting and spoil the customer/user experience"),Object(o.b)("li",{parentName:"ul"},"These are minimized by following the best practices laid out in this document."),Object(o.b)("li",{parentName:"ul"},"If there are a lot of false positives during training (even after checking for overfitting) try raising the minConfidence threshold."),Object(o.b)("li",{parentName:"ul"},"The best strategy is to use didYouMean(Suggestions) feature and retrain the bot periodically with the new data."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-use-the-didyoumean-feature-extensively"},"Do use the didYouMean feature extensively"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"After ensuring that the model did not overfit (no False Positives) the next step is to enable the didYouMean feature"),Object(o.b)("li",{parentName:"ul"},"When the user\u2019s input is not recognized by the model the didYouMean feature elegantly handles the case as a fallback."),Object(o.b)("li",{parentName:"ul"},"This is especially useful in the first few weeks after deploying a bot in production when accuracy may be low. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The self-learning capability allows the bot to improve the confidence of different types of user expressions. "))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-add-abbreviationsshortforms-in-the-synonyms-section"},"Do add abbreviations/shortforms in the \u201csynonyms\u201d section"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For short forms and abbreviations add all the possible variations in the Synonyms section located under \u201centities\u201d "),Object(o.b)("li",{parentName:"ul"},"The NLP pipeline will check for these abbreviations and replace it with the \u201cfull form\u201d before passing it into the ML model which will increase the accuracy "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-overfit-the-model-while-training"},"Do not overfit the model while training"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(o.b)("strong",{parentName:"p"},"Training Checklist")),Object(o.b)("ul",{parentName:"div",className:"contains-task-list"},Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","15-20 Utterances in each journey "),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Utterances in journeys are varied and unique "),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Journeys are distinct and conflicting journeys have been merged"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Model does not overfit (False Positives have been handled)"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","didYouMean (Suggestions) feature is enabled"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mininum 2 intents are required to train a bot")))),Object(o.b)("h3",{id:"understanding-confidence-and-utterance-report"},"Understanding Confidence and Utterance Report"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Confidence score"))," (0 to 1) is a rating generated for every utterance to show how accurate is that utterance in pointing towards the given intent. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once you have trained your bot. Every utterance under the NLU section will generate this confidence. A value between 0 to 1 (1 being good and 0 being bad) will be assigned to every utterance. "),Object(o.b)("li",{parentName:"ul"},"Any utterance with lower value (lower confidence) will mean that the utterance is bad or does not go with the utterances added in that particular intent. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Qf1fVKK.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("h3",{parentName:"div",id:"generate-utterance-reports-\ufe0f"},"Generate Utterance Reports \ud83d\uddd2\ufe0f"),Object(o.b)("p",{parentName:"div"},"Now you can also run ",Object(o.b)("strong",{parentName:"p"},"Generate utterance reports")," on your bot to evaluate how well your bot utterances are designed. The report will tell you how 'similar' your utterances within an intent and if there are any intents common in between journeys' "),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/FOl18v1.png",alt:null})),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Request folks to generate utterance report after initial NLU setup and regularly at least once a month."))))),Object(o.b)("h3",{id:"testing-utterances"},"Testing Utterances"),Object(o.b)("p",null,"There is an option in the Studio/ Flows section called Tools, also available in the NLU section. "),Object(o.b)("p",null,"Under tools, you'll see the 'Test your bot' box where you can test your utterances and see the score and intent they are triggering and many more details. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/iZyoZrj.png",alt:null})))}u.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);