(this["webpackJsonpmad-libs-ui"]=this["webpackJsonpmad-libs-ui"]||[]).push([[0],{120:function(e,t,a){e.exports=a(251)},251:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(15),i=a.n(c),s=a(7),u=a(23),o=(a(125),a(257)),p=a(254),m=a(258),d=a(253),f=function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement("h1",null,"Happy Mother's Day!"),l.a.createElement("p",{className:"mt-4 lead"},"You wanted a code. So here is a code!"),l.a.createElement("p",null,"To write your own Mother's Day Madlibs, head over to the"," ",l.a.createElement(s.b,{to:"/templates"},"templates page")," and get started!"))))},b=a(6),h=a.n(b),v=a(8),y=a(9),E=a(255),g=a(28),x=a.n(g);n="localhost"===window.location.host?"http://localhost:8080":"https://krevat-madlibs.herokuapp.com";var j=function(){var e=Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(n,"/templates"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(n,"/templates/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(n,"/templates"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(n,"/madlibs"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(n,"/madlibs/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(n,"/templates/").concat(t,"/madlibs"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a(259),T=function(e){var t=e.template;return l.a.createElement(S.a,{style:{width:"18.5rem"},className:"m-2"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Title,null,t.title),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(E.a,{as:s.b,to:"/templates/".concat(t.id,"/madlibs")},"Explore Madlibs"),l.a.createElement(E.a,{as:s.b,to:"/templates/".concat(t.id)},"Fill out!"))))},I=function(){var e=Object(r.useState)([]),t=Object(y.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){var e=!0;return Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:a=t.sent,e&&n(a);case 4:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[]),l.a.createElement(p.a,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h1",null,"Madlib Templates"),l.a.createElement(E.a,{as:s.b,to:"/templates/new",style:{display:"flex",alignItems:"center",fontWeight:"bold"}},"Create New Template")),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, 20rem)"}},a.map((function(e){return l.a.createElement(T,{key:e.id,template:e})}))))},W=a(35),M=a(256),A=function(e){var t=Object(r.useState)(null),a=Object(y.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(""),s=Object(y.a)(i,2),u=s[0],o=s[1],m=Object(r.useState)([]),d=Object(y.a)(m,2),f=d[0],b=d[1],g=Object(r.useState)([]),x=Object(y.a)(g,2),j=x[0],w=x[1],k=Object(r.useState)(""),C=Object(y.a)(k,2),S=C[0],T=C[1],I=e.match.params.id;Object(r.useEffect)((function(){var t=!0;return Object(v.a)(h.a.mark((function a(){var n,r,l,i,s,u;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(I);case 2:n=a.sent,t&&(n?(r=Object(W.a)(n.description.matchAll(/@\[(.*?)\]/g)).map((function(e){return e.index})),l=[],i=0,s=[],u=0,0===r[0]&&(l.push(n.templateWords[u]),i=n.templateWords[u].partOfSpeech.length+3,s.push({madlibPair:n.templateWords[u],value:""}),u+=1),r.forEach((function(e){e&&(l.push(n.description.substring(i,e)),l.push(n.templateWords[u]),s.push(null),s.push({madlibPair:n.templateWords[u],value:""}),i=e+n.templateWords[u].partOfSpeech.length+3,u+=1)})),l.push(n.description.substring(i)),c(n),b(l),w(s)):e.history.push("/templates"));case 4:case"end":return a.stop()}}),a)})))(),function(){t=!1}}),[]);var A=function(){var t=Object(v.a)(h.a.mark((function t(){var a,n,r,l,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=j.filter((function(e){return null!=e}))).some((function(e){return 0===(null===e||void 0===e?void 0:e.value.length)}))&&0!==S.length){t.next=3;break}return t.abrupt("return");case 3:return n=0,r="",f.forEach((function(e){var t;"string"===typeof e?r+=e:(r+=null===(t=a[n])||void 0===t?void 0:t.value,n+=1)})),l={id:"",title:u,templateId:I,text:r,creator:S},t.next=9,N(l);case 9:c=t.sent,e.history.push("/templates/".concat(c.templateId,"/madlibs/").concat(c.id));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement(p.a,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,n.title),l.a.createElement(M.a.Control,{placeholder:"Your New Title",className:"mt-4 mb-4",value:u,onChange:function(e){return o(e.target.value)}}),l.a.createElement("div",{style:{lineHeight:"4rem"}},f.map((function(e,t){var a=j[t];return l.a.createElement(l.a.Fragment,null,"string"===typeof e?l.a.createElement("span",null,e):l.a.createElement(l.a.Fragment,null,null!=a&&l.a.createElement("input",{style:{lineHeight:"1rem",border:"1px solid lightgrey",borderRadius:"3px"},value:a.value,onChange:function(e){return function(e,t){var a=Object(W.a)(j);a[t].value=e.target.value,w(a)}(e,t)},placeholder:a.madlibPair.partOfSpeech})))}))),l.a.createElement(M.a.Control,{placeholder:"Your name",className:"mt-4 mb-3",value:S,onChange:function(e){return T(e.target.value)}}),l.a.createElement(E.a,{onClick:function(){return A()}},"Create Madlib!")):l.a.createElement("h1",null,"Loading"))},B=a(72),L=[{id:"a",display:"Adjective"},{id:"aco",display:"Adjective (color)"},{id:"aem",display:"Adjective (emotion)"},{id:"ana",display:"Adjective (nationality)"},{id:"adv",display:"Adverb"},{id:"exc",display:"Exclamation"},{id:"n",display:"Noun"},{id:"nan",display:"Noun (animal)"},{id:"nac",display:"Noun (article of clothing)"},{id:"nbp",display:"Noun (body part)"},{id:"nce",display:"Noun (celebrity)"},{id:"nci",display:"Noun (city)"},{id:"nfo",display:"Noun (food)"},{id:"nle",display:"Noun (letter)"},{id:"noc",display:"Noun (occupation)"},{id:"npe",display:"Noun (person)"},{id:"npf",display:"Noun (person, female)"},{id:"npm",display:"Noun (person, male)"},{id:"npa",display:"Noun (place)"},{id:"npl",display:"Noun (plural)"},{id:"npr",display:"Noun (proper)"},{id:"num",display:"Number"},{id:"v",display:"Verb"},{id:"vei",display:"Verb (ending in -ing)"},{id:"ves",display:"Verb (ending in -s)"},{id:"vpp",display:"Verb (past participle)"},{id:"vpt",display:"Verb (past tense)"}],F=function(e){var t=Object(r.useState)(""),a=Object(y.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(""),s=Object(y.a)(i,2),u=s[0],o=s[1],m=function(){var t=Object(v.a)(h.a.mark((function t(a){var r,l,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),0!==n.length&&0!==u.length){t.next=3;break}return t.abrupt("return");case 3:if(0!==(r=Object(W.a)(u.matchAll(/@\[(.*?)\]/g)).map((function(e){return{partOfSpeech:e[1]}}))).length){t.next=6;break}return t.abrupt("return");case 6:return l={id:null,title:n,description:u,templateWords:r},t.next=9,w(l);case 9:c=t.sent,e.history.push("/templates/".concat(c.id));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(p.a,null,l.a.createElement("h1",null,"New Template"),l.a.createElement(M.a,{className:"mt-3",onSubmit:m},l.a.createElement(M.a.Group,{controlId:"title"},l.a.createElement(M.a.Label,null,"Enter your Madlibs title here!"),l.a.createElement(M.a.Control,{type:"text",placeholder:"e.g. Mom to the rescue!",value:n,onChange:function(e){return c(e.target.value)}})),l.a.createElement(M.a.Group,{controlId:"description"},l.a.createElement(M.a.Label,null,"Enter your description here! Use @ to add madlibs"),l.a.createElement(B.b,{value:u,onChange:function(e){return o(e.target.value)},style:{input:{overflow:"auto",height:300,margin:0},highlighter:{overflow:"hidden"},suggestions:{list:{backgroundColor:"white",border:"1px solid rgba(0,0,0,0.15)",fontSize:14},item:{padding:"5px 15px",borderBottom:"1px solid rgba(0,0,0,0.15)","&focused":{backgroundColor:"#cee4e5"}}},"&multiLine":{control:{border:"1px solid lightgrey",borderRadius:"3px"},highlighter:{padding:9},input:{padding:9,minHeight:63,outline:0,border:0}}}},l.a.createElement(B.a,{trigger:"@",data:L,markup:"@[__display__]",style:{backgroundColor:"#cee4e5"},renderSuggestion:function(e,t,a){return l.a.createElement("div",null,a)}}))),l.a.createElement(E.a,{type:"submit"},"Create Template")))},V=function(e){var t=Object(r.useState)(null),a=Object(y.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(null),u=Object(y.a)(i,2),o=u[0],m=u[1],d=e.match.params.id;return Object(r.useEffect)((function(){var e=!0;return Object(v.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(d);case 2:return a=t.sent,t.next=5,O(a.templateId);case 5:n=t.sent,e&&(c(a),m(n));case 7:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[]),l.a.createElement(p.a,null,n&&o?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h1",null,n.title),l.a.createElement("div",null,l.a.createElement(E.a,{style:{fontWeight:"bold"},className:"mr-3",as:s.b,to:"/templates/".concat(n.templateId,"/madlibs")},"Back to Madlibs"),l.a.createElement(E.a,{style:{fontWeight:"bold"},as:s.b,to:"/templates/".concat(n.templateId)},"Use This Template!"))),l.a.createElement("p",{className:"lead"},"Written by ",n.creator," using the ",o.title," template"),l.a.createElement("p",{style:{lineHeight:"2.4rem"}},n.text)):l.a.createElement("h1",null,"Loading"))},H=function(e){var t=e.madlib;return l.a.createElement(S.a,{style:{width:"18.5rem"},className:"m-2"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Title,null,t.title),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(E.a,{as:s.b,to:"/templates/".concat(t.templateId,"/madlibs/").concat(t.id)},"View"))))},_=function(e){var t=Object(r.useState)(null),a=Object(y.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)([]),u=Object(y.a)(i,2),o=u[0],m=u[1],d=e.match.params.id;return Object(r.useEffect)((function(){var e=!0;return Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(d);case 2:a=t.sent,e&&c(a);case 4:case"end":return t.stop()}}),t)})))(),Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(d);case 2:a=t.sent,e&&m(a);case 4:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[]),l.a.createElement(p.a,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h1",null,n.title," Madlibs"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(E.a,{as:s.b,className:"mr-3",to:"/templates",style:{fontWeight:"bold",display:"flex",alignItems:"center"}},"Back to Templates"),l.a.createElement(E.a,{style:{fontWeight:"bold",display:"flex",alignItems:"center"},as:s.b,to:"/templates/".concat(n.id)},"Use This Template!"))),o.map((function(e){return l.a.createElement(H,{madlib:e})}))):l.a.createElement("h1",null,"Loading..."))},D=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(o.a,{bg:"light",expand:"lg",className:"mb-4"},l.a.createElement(p.a,null,l.a.createElement(o.a.Brand,{as:s.b,to:"/"},"Madlibs!"),l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,{as:s.b,to:"/templates"},"Templates")))),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:f}),l.a.createElement(u.a,{exact:!0,path:"/templates/:templateId/madlibs/:id",component:V}),l.a.createElement(u.a,{exact:!0,path:"/templates",component:I}),l.a.createElement(u.a,{exact:!0,path:"/templates/new",component:F}),l.a.createElement(u.a,{exact:!0,path:"/templates/:id/madlibs",component:_}),l.a.createElement(u.a,{exact:!0,path:"/templates/:id",component:A}))))};i.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.041487a9.chunk.js.map