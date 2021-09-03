"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3752],{9272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return p}});var a=n(22122),o=n(19756),s=(n(67294),n(3905)),i=["components"],r={keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO"],description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/logo/HornetLogo.png"},l="Nodes 101",d={unversionedId:"getting_started/nodes_101",id:"getting_started/nodes_101",isDocsHomePage:!1,title:"Nodes 101",description:"Introducing nodes and what they can do in the IOTA network (Tangle).",source:"@site/external/hornet/documentation/docs/getting_started/nodes_101.md",sourceDirName:"getting_started",slug:"/getting_started/nodes_101",permalink:"/hornet/getting_started/nodes_101",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO"],description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/logo/HornetLogo.png"},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/hornet/getting_started/getting_started"},next:{title:"Security 101",permalink:"/hornet/getting_started/security_101"}},h=[{value:"Attaching New Messages to the Tangle",id:"attaching-new-messages-to-the-tangle",children:[]},{value:"Synchronizing With the Rest of the Network",id:"synchronizing-with-the-rest-of-the-network",children:[]},{value:"Deciding Which Messages Are Confirmed",id:"deciding-which-messages-are-confirmed",children:[]},{value:"Keeping a Record of the Balances on Addresses Via <code>UTXO</code>",id:"keeping-a-record-of-the-balances-on-addresses-via-utxo",children:[]},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",children:[{value:"HTTP Rest API",id:"http-rest-api",children:[]},{value:"Event API",id:"event-api",children:[]}]}],c={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nodes-101"},"Nodes 101"),(0,s.kt)("p",null,"The IOTA network is a distributed type of network called Tangle.  The network is distributed among plenty of servers\ncalled nodes. Nodes are the backbone of an IOTA network. This section covers what nodes do in an IOTA network."),(0,s.kt)("p",null,"Nodes are responsible for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Providing an API to interact with the Tangle/IOTA network."),(0,s.kt)("li",{parentName:"ul"},"Validating ",(0,s.kt)("a",{parentName:"li",href:"https://chrysalis.docs.iota.org/guides/dev_guide#messages-payloads-and-transactions"},"messages")," and ledger mutations for consistency."),(0,s.kt)("li",{parentName:"ul"},"Provide data for other nodes to synchronize to the latest state of the network.")),(0,s.kt)("h2",{id:"attaching-new-messages-to-the-tangle"},"Attaching New Messages to the Tangle"),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"message")," is a data structure that is actually being broadcast in the IOTA network and represents a vertex in the\nTangle graph. When nodes receive a new message, they attach it to the Tangle by adding the message to their local database."),(0,s.kt)("p",null,"As a result, at any point in time, all nodes may have different messages in their local databases. These messages make\nup a node's view of the Tangle."),(0,s.kt)("p",null,"To distribute the messages across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,s.kt)("h2",{id:"synchronizing-with-the-rest-of-the-network"},"Synchronizing With the Rest of the Network"),(0,s.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with other nodes called neighbors to form a\nsingle source of truth."),(0,s.kt)("p",null,"When one node, no matter where it is in the world, receives a message, it will try to ",(0,s.kt)("em",{parentName:"p"},"gossip")," it to all its neighbors. This way, all nodes will eventually see all the messages, and store them in their local databases."),(0,s.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones.  If the node has the history of messages that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received."),(0,s.kt)("p",null,"When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,s.kt)("h2",{id:"deciding-which-messages-are-confirmed"},"Deciding Which Messages Are Confirmed"),(0,s.kt)("p",null,"All messages remain in a pending state until the node is sure of their validity. For a definition of a message, see ",(0,s.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide#messages-payloads-and-transactions"},"Messages, payloads, and transactions"),"."),(0,s.kt)("p",null,"Even when a message is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend."),(0,s.kt)("p",null,"When nodes detect double spends, they must decide which message to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol."),(0,s.kt)("h2",{id:"keeping-a-record-of-the-balances-on-addresses-via-utxo"},"Keeping a Record of the Balances on Addresses Via ",(0,s.kt)("inlineCode",{parentName:"h2"},"UTXO")),(0,s.kt)("p",null,"All nodes keep a record of the ",(0,s.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide#unspent-transaction-output-utxo"},"Unspent Transaction Outputs (UTXO)")," so they can do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Check that a transaction is not transferring more IOTA tokens than are available on the address."),(0,s.kt)("li",{parentName:"ul"},"Respond to clients' requests for their balance."),(0,s.kt)("li",{parentName:"ul"},"Once the node has confirmed a transaction with the Tangle, update the node's record of balances . ")),(0,s.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,s.kt)("p",null,"Nodes come with two set of low-level APIs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTTP(rest) API"),(0,s.kt)("li",{parentName:"ul"},"Event API")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Developers do not need to communicate with nodes using a mentioned low-level API. Developers can leverage the ",(0,s.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/libraries/"},"iota client libraries")," that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level."))),(0,s.kt)("h3",{id:"http-rest-api"},"HTTP Rest API"),(0,s.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Get tip messages."),(0,s.kt)("li",{parentName:"ul"},"Attach new messages to the Tangle."),(0,s.kt)("li",{parentName:"ul"},"Do proof of work (POW)."),(0,s.kt)("li",{parentName:"ul"},"Get messages from the Tangle.")),(0,s.kt)("h3",{id:"event-api"},"Event API"),(0,s.kt)("p",null,"The Event API allows clients to poll nodes for new messages and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||s;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);