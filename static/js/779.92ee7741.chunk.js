"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{4591:function(t,n,e){e.d(n,{Hg:function(){return s},Ku:function(){return l},UN:function(){return m},fI:function(){return d},ts:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="8b8b26a0b27e03ef23871d035772175e";function s(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(u().mark((function t(){var n,e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,c.Z.get("/trending/movie/week",{params:{api_key:i,page:n}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(u().mark((function t(n){var e,r,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,c.Z.get("search/movie",{params:{api_key:i,query:n,page:e}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}},9779:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(9439),u=e(4591),c=e(2472),i=e(2791),s=e(7689),o=e(168),p=e(6444).ZP.h2(r||(r=(0,o.Z)(["\n  text-align: center;\n  border-top: 1px solid black;\n  display: block;\n  margin-top: 10px;\n  padding-top: 20px;\n  color: orangered;\n"]))),f=e(184);var l=function(){var t=(0,s.UO)().filmId,n=(0,i.useState)(!1),e=(0,a.Z)(n,2),r=e[0],o=e[1],l=(0,i.useState)(null),h=(0,a.Z)(l,2),d=h[0],v=h[1],m=(0,i.useState)([]),x=(0,a.Z)(m,2),g=x[0],k=x[1];return(0,i.useEffect)((function(){o(!0),(0,u.fI)(t).then((function(t){t.results.length||v("There is no reviews"),k(t.results)})).catch((function(t){v("Oops... try again later")})).finally((function(){o(!1)}))}),[t]),(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(c.Z,{}),d&&(0,f.jsx)(p,{children:d}),(0,f.jsx)("ul",{children:g&&g.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("b",{children:["Author: ",t.author]}),(0,f.jsx)("p",{children:t.content})]},t.id)}))})]})}}}]);
//# sourceMappingURL=779.92ee7741.chunk.js.map