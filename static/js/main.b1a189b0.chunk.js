(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),i=c(14),l=c.n(i),r=(c(21),c(15)),j=c(12),o=c(10),d=(c(22),c(28)),u=c(29),b=c(30),O=c(31),h=c(32);var x=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),x=l[0],m=l[1],f=Object(a.useState)(""),p=Object(o.a)(f,2),v=p[0],g=p[1],N=Object(a.useState)([]),y=Object(o.a)(N,2),C=y[0],k=y[1];return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.a,{className:"p-2",children:[Object(n.jsx)("h1",{children:"React To Do List"}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{md:"6",className:"mx-auto",children:[Object(n.jsx)(O.a,{type:"text",placeholder:"Enter List Items",value:x,onChange:function(e){return m(e.target.value)}}),Object(n.jsx)(h.a,{className:"btn-primary  mt-2",onClick:function(){""!=x&&s([].concat(Object(j.a)(c),[{title:x,details:[]}])),m("")},children:"Add Tasks"})]})}),Object(n.jsx)(u.a,{className:"mt-5",children:c.map((function(e,t){return Object(n.jsx)(b.a,{md:"4",children:Object(n.jsxs)(b.a,{md:"12",className:"ListBox",children:[Object(n.jsx)("h4",{className:"text-left",children:e.title}),Object(n.jsx)("span",{className:"delete",onClick:function(){return function(e){var t=Object(j.a)(c);t.splice(e,1),s(t)}(t)},children:"X"}),Object(n.jsxs)(u.a,{children:[e.details.map((function(e,t){return Object(n.jsx)(b.a,{md:"12",children:Object(n.jsx)(O.a,{type:"text",value:e})},t)})),Object(n.jsxs)(b.a,{md:"12",className:"d-flex justify-content-center",children:[Object(n.jsx)(O.a,{type:"text",placeholder:"Enter details",value:v,onChange:function(e){return g(e.target.value)}}),Object(n.jsx)(h.a,{className:"btn-sm",onClick:function(t){return function(e){if(""!=v){var t,n=Object(r.a)(c);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.title===e&&k([].concat(Object(j.a)(C),[a.details.push(v)]))}}catch(s){n.e(s)}finally{n.f()}g("")}}(e.title)},children:"Add"})]})]})]})},t)}))})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(25);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),m()}},[[26,1,2]]]);
//# sourceMappingURL=main.b1a189b0.chunk.js.map