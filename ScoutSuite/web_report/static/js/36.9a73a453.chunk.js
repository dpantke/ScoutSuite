(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[36],{605:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(12),i=(r(0),r(15)),a=r.n(i),s=r(29),l=r.n(s),o=r(43),d=r(55),u=r(764),j=r(761),b=r(63);t.default=function(e){var t=e.data;if(!t)return null;var r=a()(t,["item","recorders"],{}),i=a()(t,["item","rules"],{});return Object(n.jsxs)(d.a,{data:t,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)(d.c,{label:"AWS Config Recorder enabled",valuePath:"recorders_count",errorPath:"NotConfigured",renderValue:function(e){return Boolean(e).toString()}})}),Object(n.jsxs)(u.b,{children:[Object(n.jsx)(u.a,{title:"Recorders",disabled:l()(r),children:Object(o.l)(Object.entries(r),"",(function(e){var t=Object(c.a)(e,2),r=t[0],i=t[1].name;return Object(n.jsx)(b.a,{service:"config",resource:"recorders",id:r,name:i})}))}),Object(n.jsx)(u.a,{title:"Rules",disabled:l()(i),children:Object(o.l)(Object.entries(i),"",(function(e){var t=Object(c.a)(e,2),r=t[0],i=t[1].name;return Object(n.jsx)(b.a,{service:"config",resource:"rules",id:r,name:i})}))})]})]})}},761:function(e,t,r){"use strict";var n=r(1);r(0),r(762);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},762:function(e,t,r){},763:function(e,t,r){},764:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l.b}));var n=r(1),c=r(12),i=r(0),a=r(8),s=r.n(a),l=r(77),o=r(78),d=r(62),u=(r(763),function(e){var t=e.title,r=e.isSelected,a=e.disabled,u=e.onClick,j=e.children,b=Object(i.useState)(""),f=Object(c.a)(b,2),O=f[0],h=f[1],v=O?Object(n.jsxs)(n.Fragment,{children:[t,d.a[O].icon]}):t;return Object(n.jsx)(o.c.Provider,{value:h,children:Object(n.jsx)(l.a,{title:v,className:s()("partial-tab-pane",O),isSelected:r,disabled:a,onClick:u,children:j})})})}}]);
//# sourceMappingURL=36.9a73a453.chunk.js.map