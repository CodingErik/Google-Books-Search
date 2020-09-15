(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(76)},45:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(14),i=a(3),s=a(16);a(45);var m=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var u=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:90,textAlign:"center"},className:"jumbotron mt-3"},t)},E=a(17),f=a.n(E),d={searchTitle:function(e){return f.a.get("api/books/search/".concat(e))},loadSavedBooks:function(){return f.a.get("api/books")},deleteBook:function(e){return f.a.delete("/api/books/"+e)},saveBook:function(e){return f.a.post("/api/books",e)}};function h(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function v(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function g(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){d.loadSavedBooks().then(function(e){r(e.data),console.log(a)}).catch(function(e){console.log(e)})},[a]),l.a.createElement(h,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"(React) Google Books Search"),l.a.createElement("h3",null,"Search for and Save Books of Interest"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement("h1",null,"Saved Books"),l.a.createElement(v,null,a.length?a.map(function(e){return l.a.createElement(g,{size:"sm-12",key:e._id},l.a.createElement("div",{className:"mb-4 border  p-3 rounded shadow "},l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement(m,{onClick:function(){return t=e._id,void d.deleteBook(t).then(function(e){return e}).catch(function(e){return console.log(e)});var t}}),l.a.createElement(o.b,{to:"/books/"+e.id}),l.a.createElement("strong",{className:"m-4"},"Title: ",e.title),l.a.createElement("strong",null,"Author: ",e.author),l.a.createElement("p",{className:"mt-3"},"Description: ",e.description),l.a.createElement("strong",null,l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"}," link to book "))))}):l.a.createElement("h3",null,"No Saved Books to Display")))))},p=a(19),k=a(38);a(68);function N(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function B(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=a(39);var I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(s.a)(c,2),m=i[0],E=i[1],f=Object(n.useState)({}),b=Object(s.a)(f,2),I=(b[0],b[1]);return Object(n.useEffect)(function(){d.searchTitle("the matrix").then(function(e){r(e.data.items)}).catch(function(e){console.log(e)})},[]),l.a.createElement(h,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-6"},l.a.createElement(u,null,l.a.createElement("h1",null,"(React) Google Books Search"),l.a.createElement("h3",null,"Search for and Save Books of Interest")),l.a.createElement("form",null,l.a.createElement(j,{onChange:function(e){var t=e.target,a=t.name,n=t.value;E(Object(k.a)({},m,Object(p.a)({},a,n)))},name:"search",placeholder:"Search any book title ..."}),l.a.createElement(B,{disabled:!m.search,onClick:function(e){e.preventDefault(),m.search&&d.searchTitle(m.search).then(function(e){r(e.data.items)}).catch(function(e){console.log(e)})}},"Search"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement("h1",null,"Results"),l.a.createElement(v,null,a.length?l.a.createElement(N,null,a.map(function(e){return l.a.createElement(S,{key:e.id},l.a.createElement("img",{src:e.volumeInfo.imageLinks.smallThumbnail,alt:e.volumeInfo.title}),l.a.createElement(o.b,{to:"/books/"+e.id}),l.a.createElement("strong",{className:"m-4"},"Title: ",e.volumeInfo.title),l.a.createElement("strong",null,"Author: ",e.volumeInfo.authors[0]),l.a.createElement("p",{className:"mt-3"},"Description: ",e.volumeInfo.description),l.a.createElement("strong",null,l.a.createElement("a",{href:e.volumeInfo.infoLink,target:"_blank",rel:"noopener noreferrer"}," link to book ")),l.a.createElement(O.a,{onClick:function(){return function(e){var t={title:e.title,author:e.authors[0],description:e.description,image:e.imageLinks.smallThumbnail,link:e.infoLink};d.saveBook(t).then(function(e){return I(e.data)}).catch(function(e){return console.log(e)})}(e.volumeInfo)},variant:"outline-success",className:"ml-3"},"Save"))})):l.a.createElement("h3",null,"No Results to Display")))))};var w=function(){return l.a.createElement(h,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44 \ud83e\udd23"))))))},y=a(18),T=a(23);var x=function(){return l.a.createElement(y.a,{bg:"light",expand:"lg"},l.a.createElement(y.a.Brand,{href:"/"},"Google Books"),l.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(T.a,{className:"mr-auto"},l.a.createElement(T.a.Link,{href:"/search"},"Search"),l.a.createElement(T.a.Link,{href:"/saved"},"Saved"))))};var z=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/search"],component:I}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:b}),l.a.createElement(i.a,{exact:!0,path:"/*",component:w}))))};a(72);a(73).config(),c.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c3698735.chunk.js.map