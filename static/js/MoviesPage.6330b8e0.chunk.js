"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{2542:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(8683),a=n(5861),c=n(8152),u=n(7757),o=n.n(u),s="Searchbar_searchbar__0FWoU",i="Searchbar_searchForm__Bt5yh",p="Searchbar_searchFormButton__Y7AQk",f="Searchbar_SearchFormInput__FT6Bx",h=n(2791),l=n(1207),v=n(1523),d=n(8931),m=n(5562),g=n.n(m),x=n(184),b=function(){var e=(0,h.useState)(""),t=(0,c.Z)(e,2),n=t[0],u=t[1],m=(0,h.useState)([]),b=(0,c.Z)(m,2),k=b[0],y=b[1],_=(0,d.TH)(),w=(0,d.k6)();(0,h.useEffect)((function(){var e=new URLSearchParams(_.search).get("query");if(e){var t=function(){var t=(0,a.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.z1)(e);case 2:n=t.sent,r=n.results,y(r),u("");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[_.search]);var S=function(){var e=(0,a.Z)(o().mark((function e(t){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.trim()){e.next=10;break}return e.next=4,(0,l.z1)(n);case 4:a=e.sent,c=a.results,y(c),u(""),0===c.length&&g().Notify.warning("No movies found! Please change your request and try again"),w.push((0,r.Z)((0,r.Z)({},_),{},{search:"query=".concat(n)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("header",{className:s,children:(0,x.jsxs)("form",{className:i,onSubmit:S,children:[(0,x.jsx)("input",{onChange:function(e){return u(e.target.value)},className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:n}),(0,x.jsx)("button",{type:"submit",className:p,children:"search"})]})}),k.length>0&&k.map((function(e){var t=e.id,n=e.title;e.poster_path;return(0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:(0,x.jsx)(v.rU,{to:{pathname:"/movies/".concat("".concat(t)),state:{from:{location:_}}},children:(0,x.jsx)("p",{children:n})})},t)})}))]})}},1207:function(e,t,n){n.d(t,{Hx:function(){return v},TP:function(){return m},uV:function(){return l},wr:function(){return g},yA:function(){return p},z1:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var s="1c946dce2b60cb636de6f72a25cb04da",i="https://api.themoviedb.org/3",p="https://image.tmdb.org/t/p/w500";function f(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function l(e){return f("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function v(e){return f("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"))}var d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,o().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"$?api_key=").concat(s,"&language=en-US"),e.next=3,o().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,o().get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=MoviesPage.6330b8e0.chunk.js.map