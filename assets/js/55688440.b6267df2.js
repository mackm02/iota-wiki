"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34623],{15247:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Termination",sidebar_label:"Termination"},s=void 0,c={unversionedId:"specs/didcomm/protocols/termination",id:"specs/didcomm/protocols/termination",isDocsHomePage:!1,title:"Termination",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/protocols/termination.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/termination",permalink:"/identity.rs/specs/didcomm/protocols/termination",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/protocols/termination.md",tags:[],version:"current",frontMatter:{title:"Termination",sidebar_label:"Termination"},sidebar:"docs",previous:{title:"Post",permalink:"/identity.rs/specs/didcomm/protocols/post"},next:{title:"CredentialInfo",permalink:"/identity.rs/specs/didcomm/resources/credential-info"}},m=[{value:"Overview",id:"overview",children:[{value:"Relationships",id:"relationships",children:[],level:3},{value:"Example Use-Cases",id:"example-use-cases",children:[],level:3},{value:"Roles",id:"roles",children:[],level:3},{value:"Interaction",id:"interaction",children:[],level:3}],level:2},{value:"Messages",id:"messages",children:[{value:"1. termination",id:"termination",children:[{value:"Structure",id:"structure",children:[],level:4}],level:3},{value:"2. termination-response",id:"termination-response",children:[{value:"Structure",id:"structure-1",children:[],level:4}],level:3}],level:2},{value:"Considerations",id:"considerations",children:[],level:2},{value:"Related Work",id:"related-work",children:[],level:2}],p={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,a.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Indicates the graceful termination of a connection. It is expected that no reconnection attempt will be made on any of the message thread/s in this connection following termination. This provides a chance for the receiver to clean up or archive any resources allocated to the connection."),(0,a.kt)("h3",{id:"relationships"},"Relationships"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./connection"},"Connection"),": this protocol terminates a communication initiated by the ",(0,a.kt)("a",{parentName:"li",href:"./connection"},"connection protocol"),".")),(0,a.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A verifier terminates the connection following a successful presentation from a holder."),(0,a.kt)("li",{parentName:"ul"},"One participant experiences an error and terminates the connection gracefully after sending a problem-report.")),(0,a.kt)("h3",{id:"roles"},"Roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: initiates the connection termination."),(0,a.kt)("li",{parentName:"ul"},"Receiver: is notified of the termination.")),(0,a.kt)("h3",{id:"interaction"},"Interaction"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TerminationDiagram",src:n(24200).Z})),(0,a.kt)("sub",null,"For guidance on diagrams see the ",(0,a.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"termination"},"1. termination"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"iota/termination/0.1/termination")),(0,a.kt)("li",{parentName:"ul"},"Role: ",(0,a.kt)("a",{parentName:"li",href:"#roles"},"sender"))),(0,a.kt)("p",null,"Used to inform the ",(0,a.kt)("a",{parentName:"p",href:"#roles"},"receiver")," that the ",(0,a.kt)("a",{parentName:"p",href:"#roles"},"sender")," wishes to terminate the established connection. "),(0,a.kt)("h4",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,a.kt)("h3",{id:"termination-response"},"2. termination-response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"iota/termination/0.1/termination-response")),(0,a.kt)("li",{parentName:"ul"},"Role: ",(0,a.kt)("a",{parentName:"li",href:"#roles"},"receiver"))),(0,a.kt)("p",null,"Response from the ",(0,a.kt)("a",{parentName:"p",href:"#roles"},"receiver")," that the request to terminate the connection was acknowledged. MUST be sent if the field ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#acks"},(0,a.kt)("inlineCode",{parentName:"a"},"please_ack"))," is present in the ",(0,a.kt)("a",{parentName:"p",href:"#termination"},"termination")," message. "),(0,a.kt)("h4",{id:"structure-1"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"This section is non-normative."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which party terminates a connection depends on the application but is usually the same as the one that initiated it following a successful interaction to achieve."),(0,a.kt)("li",{parentName:"ul"},"Any party may terminate a connection at any time, even during a protocol."),(0,a.kt)("li",{parentName:"ul"},"A termination message indicates a graceful end to a connection but the underlying transport layer connection could terminate without this message. Implementors should implement reasonable timeouts and reconnection capabilities.")),(0,a.kt)("h2",{id:"related-work"},"Related Work"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0030-sync-connection/abandon-connection-protocol/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0030-sync-connection/abandon-connection-protocol/README.md"))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24200:function(e,t,n){t.Z=n.p+"assets/images/termination.drawio-c421a18eecc936aca83b8f6b5216ffe4.svg"}}]);