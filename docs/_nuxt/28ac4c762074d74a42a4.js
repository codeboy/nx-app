(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(t,n,e){"use strict";e.r(n);e(38);var c=e(5),o=(e(64),{data:function(){return{ip:"...",isFullPage:!1,ipLoading:!0}},head:{title:"Ip"},methods:{getIp:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("http://icanhazip.com");case 2:e=n.sent,setTimeout((function(){t.ipLoading=!1,t.ip=e}),3e3);case 4:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.getIp()}}),r=e(15),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section"},[e("h2",{staticClass:"title is-3 has-text-grey"},[t._v("\n    Ip loaded by async axios.\n  ")]),t._v(" "),e("p",[t._v("\n    Установлена задержка лоадера для теста\n  ")]),t._v(" "),e("p",{staticClass:"container"},[t._v("\n    ip - "+t._s(t.ip)+"\n    "),e("b-loading",{attrs:{"is-full-page":t.isFullPage,active:t.ipLoading,"can-cancel":!0},on:{"update:active":function(n){t.ipLoading=n}}})],1)])}),[],!1,null,null,null);n.default=component.exports}}]);