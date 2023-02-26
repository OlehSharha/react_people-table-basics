(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(22),c(2)),r=c(6),j=c.n(r),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=c(8),b=c(11),d=c(4),h=c(1),x=(c(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),u="https://mate-academy.github.io/react_people-table/api/people.json";function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(u)})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.people,c=e.selectedSlug;return t.length<=0?Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName})),s=c===e.slug,r=e.motherName||"-",l=e.fatherName||"-";return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":s}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:n?Object(i.jsx)(p,{person:n}):r}),Object(i.jsx)("td",{children:a?Object(i.jsx)(p,{person:a}):l})]},e.slug)}))})]})},f=function(){var e=Object(h.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),r=Object(d.a)(a,2),j=r[0],l=r[1],u=Object(s.h)().slug,p=void 0===u?"":u,f=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!0);case 10:return e.prev=10,l(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){f()}),[]),j?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:c.length<=0?Object(i.jsx)(x,{}):Object(i.jsx)(m,{people:c,selectedSlug:p})})})},v=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home Page"}),Object(i.jsx)(l,{to:"people",text:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsx)(s.b,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsxs)(s.b,{path:"people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(f,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(v,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a2e27020.chunk.js.map