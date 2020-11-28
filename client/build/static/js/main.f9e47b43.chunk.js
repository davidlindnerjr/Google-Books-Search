(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(0),i=n.n(o),a=n(23),r=n.n(a);function s(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})}function l(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})}function d(e){var t=e.size,n=e.children;return Object(c.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})}var h=function(e){var t=e.children;return Object(c.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})};var u=n(21),j=n(6),b=n(25),x=n(22),f=n.n(x),g=function(){return f.a.get("/api/books")},m=function(e){return f.a.get("/api/books/"+e)},p=function(e){return f.a.delete("/api/books/"+e)},O=function(e){return f.a.post("/api/books/add",e)};var v=function(e){var t=Object(o.useState)({}),n=Object(u.a)(t,2),i=n[0],a=n[1],r=Object(j.f)().id;return Object(o.useEffect)((function(){m(r).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)(s,{fluid:!0,children:[Object(c.jsx)(l,{children:Object(c.jsx)(d,{size:"md-12",children:Object(c.jsx)(h,{children:Object(c.jsxs)("h1",{children:[i.title," by ",i.author]})})})}),Object(c.jsx)(l,{children:Object(c.jsx)(d,{size:"md-10 md-offset-1",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("h1",{children:"Synopsis"}),Object(c.jsx)("p",{children:i.synopsis})]})})}),Object(c.jsx)(l,{children:Object(c.jsx)(d,{size:"md-2",children:Object(c.jsx)(b.b,{to:"/",children:"\u2190 Back to Search"})})})]})},k=n(95),w=n(96),N=n(100),I=n(98),B=Object(I.a)({searchInput:{margin:"10px",width:"100px"},searchContainer:{textAlign:"center",margin:"50px"},searchedBooks:{textAlign:"center",background:"#424242",margin:"80px",borderRadius:"10px",padding:"10px"},searchButton:{background:"#2196f3",color:"white","&:hover":{background:"#1769aa"}},saveButton:{background:"#2196f3",color:"white","&:hover":{background:"#1769aa"},margin:"20px"},title:{fontWeight:"bold",padding:"15px",color:"white",fontSize:"20px"},description:{textAlign:"left",color:"white",padding:"30px"},bookContainer:{padding:"30px"},link:{color:"white",cursor:"pointer","&:hover":{color:"#1769aa"}},image:{margin:"30px"},descriptoin:{color:"white"},view:{color:"white"}}),S=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];function a(){g().then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}Object(o.useEffect)((function(){a()}),[]);var r=B();return Object(c.jsx)(c.Fragment,{children:n.length?Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)(k.a,{className:r.searchedBooks,children:Object(c.jsxs)(w.a,{className:r.bookContainer,children:[Object(c.jsxs)(w.a,{className:r.title,children:[e.title," by ",e.author]}),Object(c.jsx)("img",{className:r.image,value:e.title,src:e.image,alt:"Pic of searched book",style:{width:"100px",height:"150px"}},e._id),Object(c.jsx)("br",{}),Object(c.jsx)(w.a,{className:r.description,children:e.description}),Object(c.jsx)(N.a,{className:r.saveButton,onClick:function(){return t=e._id,void p(t).then((function(e){a()})).catch((function(e){console.log(e)}));var t},children:"Delete"})]},e._id)})}))}):Object(c.jsx)("h3",{children:"No Results Found"})})},C=n(99),y=n(101),F=Object(I.a)({searchInput:{margin:"10px",width:"100px"},searchContainer:{textAlign:"center",margin:"50px"},searchedBooks:{textAlign:"center",background:"#424242",margin:"80px",borderRadius:"10px",padding:"10px"},searchButton:{background:"#2196f3",color:"white","&:hover":{background:"#1769aa"}},saveButton:{background:"#2196f3",color:"white","&:hover":{background:"#1769aa"}},title:{fontWeight:"bold",padding:"15px",color:"white",fontSize:"20px"},description:{textAlign:"left",color:"white",padding:"30px"},bookContainer:{padding:"30px"}}),A=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)([]),r=Object(u.a)(a,2),s=r[0],l=r[1];var d=F();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C.a,{className:d.searchContainer,children:Object(c.jsxs)("form",{children:[Object(c.jsx)(y.a,{className:d.searchInput,onChange:function(e){var t=e.target.value;i(t)}}),Object(c.jsx)(N.a,{className:d.searchButton,onClick:function(e){e.preventDefault(),console.log(n),f.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(n)).then((function(e){console.log(e.data.items),l(e.data.items)})).catch((function(e){console.log(e)}))},children:"Search"})]})}),s.map((function(e){return Object(c.jsx)(k.a,{className:d.searchedBooks,children:Object(c.jsxs)(w.a,{className:d.bookContainer,children:[Object(c.jsx)(w.a,{className:d.title,children:e.volumeInfo.title}),Object(c.jsx)("img",{value:e.volumeInfo,src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"",alt:"No Image Found",style:{width:"100px",height:"150px"}}),Object(c.jsx)(w.a,{children:e.volumeInfo.author}),Object(c.jsx)(w.a,{className:d.description,children:e.volumeInfo.description}),Object(c.jsx)(N.a,{className:d.saveButton,onClick:function(){return function(e){console.log(e);var t=s.filter((function(t){return t.id===e}));t=t[0],console.log(t.volumeInfo),O({title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:"",link:t.volumeInfo.previewLink}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e,"err")}))}(e.id)},children:"Save"},e.id)]})})}))]})},L=n(104),z=n(97),D=Object(I.a)({navButton:{color:"white","&:hover":{color:"#eeeeee"}},title:{flexGrow:1},nav:{background:"#2196f3"}});var E=function(){var e=D();return Object(c.jsx)(L.a,{className:e.nav,position:"static",children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(w.a,{className:e.title,variant:"h6",children:"Google Books Search"}),Object(c.jsx)(w.a,{children:Object(c.jsx)(N.a,{className:e.navButton,href:"/",children:"Search"})}),Object(c.jsx)(w.a,{children:Object(c.jsx)(N.a,{className:e.navButton,href:"/saved",children:"Saved"})})]})})};var P=function(){return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(A,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/saved",children:Object(c.jsx)(S,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/books/:id",children:Object(c.jsx)(v,{})})]})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),R()}},[[81,1,2]]]);
//# sourceMappingURL=main.f9e47b43.chunk.js.map