(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[100],{603:function(e,t,a){"use strict";a.r(t);var c=a(1),n=(a(0),a(91)),r=a(739);t.default=function(e){var t=e.data;return t?Object(c.jsx)(r.a,{data:t,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Credentials"}),Object(c.jsx)(r.c,{label:"Creation Date",valuePath:"user_creation_time",renderValue:n.h}),Object(c.jsx)(r.c,{label:"Last Used Date",valuePath:"last_used",errorPath:"inactive_user",renderValue:n.h}),Object(c.jsx)(r.c,{label:"Password Enabled",valuePath:"password_enabled",errorPath:"unused_credentials"}),Object(c.jsx)(r.c,{label:"Password Last Used",valuePath:"password_last_used",errorPath:["unused_credentials","password_last_used"],renderValue:n.h}),Object(c.jsx)(r.c,{label:"Password Last Changed",valuePath:"password_last_changed",renderValue:n.h}),Object(c.jsx)(r.c,{label:"MFA",valuePath:"mfa_active"}),Object(c.jsx)(r.c,{label:"Hardware MFA Active",valuePath:"mfa_active_hardware"}),Object(c.jsx)(r.c,{label:"Access Key 1 Active",valuePath:"access_key_1_active",errorPath:["unused_credentials","access_key_1_active"]}),Object(c.jsx)(r.c,{label:"Access Key 1 Last Used",valuePath:"access_key_1_last_used_date",errorPath:["unused_credentials","unused_access_key"],renderValue:n.h}),Object(c.jsx)(r.c,{label:"Access Key 1 Last Rotated",valuePath:"access_key_1_last_rotated",renderValue:n.h}),Object(c.jsx)(r.c,{label:"Access Key 2 Active",valuePath:"access_key_2_active",errorPath:["unused_credentials","access_key_2_active"]}),Object(c.jsx)(r.c,{label:"Access Key 2 Last Used",valuePath:"access_key_2_last_used_date",errorPath:["unused_credentials","unused_access_key"],renderValue:n.h}),Object(c.jsx)(r.c,{label:"Access Key 2 Last Rotated",valuePath:"access_key_2_last_rotated",renderValue:n.h}),Object(c.jsx)(r.c,{label:"Signing Cert 1 Active",valuePath:"cert_1_active"}),Object(c.jsx)(r.c,{label:"Signing Cert 2 Active",valuePath:"cert_2_active"})]})}):null}},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i}));var c=a(0),n=a.n(c),r={path_to_issue:[],item:{}},s=n.a.createContext(r),l=n.a.createContext(""),i=n.a.createContext((function(){}))},737:function(e,t,a){"use strict";var c=a(1),n=a(0),r=a(736),s=a(91);t.a=function(e){var t=e.path,a=e.children,l=Object(n.useContext)(r.b);return Object(c.jsx)(r.b.Provider,{value:Object(s.a)(l,t),children:a})}},738:function(e,t,a){"use strict";var c=a(13),n=a(1),r=a(0),s=a(732),l=a(9),i=a.n(l),u=a(16),o=a.n(u),d=a(14),b=a.n(d),v=a(736),j=a(91),h=a(71),_=(a(740),a(723)),f=a(216),x=a.n(f),p=a(741),O=a.n(p),P=a(217),m=a(151),y=function(e){var t=e.service,a=e.finding,c=e.path,l=Object(r.useContext)(m.a),i=l.exceptions,u=l.addException,d=l.removeException,b=Object(P.b)().enqueueSnackbar,v=o()(i,[t,a],[]).includes(c);return Object(n.jsx)(s.a,{title:v?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(n.jsx)(_.a,{size:"small",className:"exception-btn",onClick:v?function(){d(t,a,c),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,a,c),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:v?Object(n.jsx)(O.a,{}):Object(n.jsx)(x.a,{})})})},g=a(34),A=function(e){var t,a=e.label,l=e.separator,u=e.valuePath,d=e.errorPath,_=e.className,f=e.inline,x=e.tooltip,p=e.tooltipProps,O=e.renderValue,P=e.basePathOverwrite,m=Object(g.g)(),A=Object(r.useContext)(v.a),k=Object(r.useContext)(v.b),C=Object(r.useContext)(v.c),w=Object(j.a)(P||k,u),V=O(e.value||o()(A.item,w,e.value));("boolean"===typeof V&&(V=String(V)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(j.a)(P||k,e)})):t=[w];var L=t.some((function(e){return A.path_to_issues.includes(e)})),E=A.level;if(Object(r.useEffect)((function(){L&&C(E)}),[E]),void 0===V||null===V)return null;var K=Object(n.jsx)(y,{service:m.service,finding:m.finding,path:"".concat(A.path,".").concat(t[0])}),D=Object(n.jsxs)("span",{className:i()(L&&i()("issue",E)),children:[V,L&&K]});return Object(n.jsx)(h.a,{className:i()(_,"partial-value",{inline:f}),label:a,separator:l,value:x?Object(n.jsx)(s.a,Object(c.a)(Object(c.a)({title:V},p),{},{children:D})):D})};A.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=A},739:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s.a})),a.d(t,"c",(function(){return l.a}));var c=a(1),n=(a(0),a(736)),r=(a(91),function(e){var t=e.data,a=e.children;return console.info("PARTIAL DATA",t),Object(c.jsx)(n.a.Provider,{value:t,children:a})}),s=a(737),l=a(738)},740:function(e,t,a){},741:function(e,t,a){"use strict";var c=a(36),n=a(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,c(a(39)).default)(r.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=s}}]);
//# sourceMappingURL=100.21fd4758.chunk.js.map