"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4591:function(t,n,e){e.d(n,{Hg:function(){return s},Ku:function(){return h},UN:function(){return x},fI:function(){return d},ts:function(){return o}});var r=e(5861),a=e(7757),u=e.n(a),c=e(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="8b8b26a0b27e03ef23871d035772175e";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(u().mark((function t(){var n,e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,c.Z.get("/trending/movie/week",{params:{api_key:i,page:n}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function o(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(u().mark((function t(n){var e,r,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,c.Z.get("search/movie",{params:{api_key:i,query:n,page:e}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}},3387:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r,a,u,c,i=e(9439),s=e(4591),p=e(2791),o=e(7689),f=e(168),h=e(6444),l=h.ZP.img(r||(r=(0,f.Z)(["\n  height: 300px;\n  width: 200px;\n"]))),d=h.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),m=h.ZP.li(u||(u=(0,f.Z)(["\n  width: 200px;\n  font-size: 14px;\n"]))),x=h.ZP.h2(c||(c=(0,f.Z)(["\n  text-align: center;\n  border-top: 1px solid black;\n  display: block;\n  margin-top: 10px;\n  padding-top: 20px;\n  color: orangered;\n"]))),v=e(174),Z=e(2472),g=e(184);var w=function(){var t=(0,o.UO)().filmId,n=(0,p.useState)(!1),e=(0,i.Z)(n,2),r=e[0],a=e[1],u=(0,p.useState)(""),c=(0,i.Z)(u,2),f=c[0],h=c[1],w=(0,p.useState)([]),y=(0,i.Z)(w,2),k=y[0],b=y[1];return(0,p.useEffect)((function(){a(!0),(0,s.Ku)(t).then((function(t){t.cast.length||h("There is no actors"),b(t.cast)})).catch((function(t){h("Oops... try again later")})).finally((function(){a(!1)}))}),[t]),(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(Z.Z,{}),f&&(0,g.jsx)(x,{children:f}),(0,g.jsx)(d,{children:k&&k.map((function(t){return(0,g.jsxs)(m,{children:[(0,g.jsx)(l,{src:(0,v.Z)(t.profile_path),alt:t.name}),(0,g.jsxs)("p",{children:[" ",t.name]}),(0,g.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))})]})}},174:function(t,n,e){function r(t){return t?"https://image.tmdb.org/t/p/w500".concat(t):"https://via.placeholder.com/150/d3d3d3/ffffff?text=No++photo"}e.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=387.e6257bd4.chunk.js.map