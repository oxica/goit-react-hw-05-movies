"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{1206:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(2791),a=e(1207),u=e(8931),o=e(1523),i=e(184);function s(){var n=(0,u.TH)(),t=(0,c.useState)([]),e=(0,r.Z)(t,2),s=e[0],f=e[1];return(0,c.useEffect)((function(){(0,a._k)().then((function(n){return f(n.results)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Tranding today"}),s&&s.map((function(t){return(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:{pathname:"/movies/".concat(t.id),state:{from:n}},children:t.title||t.name})},t.id)})}))]})}},1207:function(n,t,e){e.d(t,{Hx:function(){return h},Mc:function(){return d},WK:function(){return m},_k:function(){return l},uV:function(){return p},yA:function(){return i}});var r=e(5861),c=e(7757),a=e.n(c),u="1c946dce2b60cb636de6f72a25cb04da",o="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return s("".concat(o,"/trending/all/day?api_key=").concat(u))}function d(n){return s("".concat(o,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function p(n){return s("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function h(n){return s("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US"))}function m(n){return s("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=HomePage.b7f70faa.chunk.js.map