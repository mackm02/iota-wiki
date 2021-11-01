"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4648],{14661:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Problem Reports",sidebar_label:"Problem Reports"},d=void 0,p={unversionedId:"specs/didcomm/resources/problem-reports",id:"specs/didcomm/resources/problem-reports",isDocsHomePage:!1,title:"Problem Reports",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/resources/problem-reports.md",sourceDirName:"specs/didcomm/resources",slug:"/specs/didcomm/resources/problem-reports",permalink:"/identity.rs/specs/didcomm/resources/problem-reports",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/resources/problem-reports.md",tags:[],version:"current",frontMatter:{title:"Problem Reports",sidebar_label:"Problem Reports"},sidebar:"docs",previous:{title:"CredentialInfo",permalink:"/identity.rs/specs/didcomm/resources/credential-info"},next:{title:"Changelog",permalink:"/identity.rs/specs/didcomm/CHANGELOG"}},m=[{value:"Example",id:"example",children:[],level:2},{value:"IOTA Problem Codes",id:"iota-problem-codes",children:[],level:2},{value:"Unresolved Questions",id:"unresolved-questions",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],l={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,o.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#problem-reports"},"Problem reports")," are a standard ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm")," feature for reporting errors or warnings between parties. Using this mechanism is not a general requirement but it is a best practice for relaying informative errors and may improve human experience."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A problem report is a standard DIDComm message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https://didcomm.org/report-problem/2.0/problem-report",\n  "id": "7c9de639-c51c-4d60-ab95-103fa613c805",\n  "pthid": "1e513ad4-48c9-444e-9e7e-5b8b45c5e325",\n  "body": {\n    "code": "e.p.xfer.cant-use-endpoint",\n    "comment": "Unable to use the {1} endpoint for {2}.",\n    "args": [\n      "https://agents.r.us/inbox",\n      "did:sov:C805sNYhMrjHiqZDTUASHg"\n    ],\n    "escalate_to": "mailto:admin@foo.org"\n  }\n}\n')),(0,o.kt)("p",null,"Note that problem reports may still use ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," or even be ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm messages"),"."),(0,o.kt)("h2",{id:"iota-problem-codes"},"IOTA Problem Codes"),(0,o.kt)("p",null,"We follow the notation for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/84e5a7c66c87440d39e93df81e4440855273f987/docs/spec-files/problems.md#problem-codes"},"problem codes defined by the DIDComm specification"),". In general, we use the error sorter ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," and protocol scope ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," to indicate that problem reports result in the abandonment of a protocol. "),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/84e5a7c66c87440d39e93df81e4440855273f987/docs/spec-files/problems.md#descriptors"},"problem report descriptors in the DIDComm specification"),", we define the following non-exhaustive list of general problem report codes that may be sent during the course of any protocol:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.invalid-message")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The message is malformed or fails field constraints validation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.unsupported-message")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The message type is unrecognised or unsupported by the recipient.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.invalid-state")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recipient is unable to handle the type of message in its current state. Typically when an unexpected message is received in the middle of a protocol on the same thread.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-authenticated")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The sender is required to authenticate to perform the requested action.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-authorised")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The sender is authenticated but lacks sufficient permissions to perform the requested action.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-sender-authenticated")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recipient requires the message to use ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-encrypted")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recipient requires the message to use ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-signed")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recipient requires a ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.crypto")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any general cryptography-related error. E.g. the signature in a message payload or on a ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," fails validation, or ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," fails.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.req.time")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The party has timed out waiting for a response.")))),(0,o.kt)("p",null,"These messages may be raised during or between protocols to inform the other party that something went wrong. A problem report with the error sorter ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," and protocol scope ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," terminates the protocol on the current thread and MAY be followed by a connection ",(0,o.kt)("a",{parentName:"p",href:"../protocols/termination"},"termination"),"."),(0,o.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should we support the message scope ",(0,o.kt)("inlineCode",{parentName:"li"},"m")," to allow resending / retrying individual messages?")),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#problem-reports"},"DIDComm Problem Reports"))))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(d,".").concat(u)]||c[u]||l[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);