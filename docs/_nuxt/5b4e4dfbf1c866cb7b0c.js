(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,n){"use strict";n.r(t);n(65),n(38);var r=n(5),o=(n(64),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("http://icanhazip.com");case 3:return r=t.sent,console.log("ip-".concat(r)),t.abrupt("return",{ip:r});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{data:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016/10/15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016/12/15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016/04/26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016/04/10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016/12/06 14:38:38",gender:"Female"}],apiKey:"91cdacc232f75adf9e2f4d7310983bdd",page:1,table:{sortField:"vote_count",sortOrder:"desc",defaultSortOrder:"desc",total:0,perPage:20,isEmpty:!1,isBordered:!1,isStriped:!0,isNarrowed:!1,isHoverable:!0,isFocusable:!1,isLoading:!1,hasMobileCards:!0}}},head:{title:"Table"},methods:{loadAsyncData:function(){},loadAsyncData2:function(){var e=this,t=["api_key=".concat(this.apiKey),"language=en-US","include_adult=false","include_video=false","sort_by=".concat(this.sortField,".").concat(this.sortOrder),"page=".concat(this.page)].join("&");console.log(t),this.loading=!0,this.axios.get("https://api.themoviedb.org/3/discover/movie?".concat(t)).then((function(t){var data=t.data;e.data=[];var n=data.total_results;data.total_results/e.perPage>1e3&&(n=1e3*e.perPage),e.total=n,data.results.forEach((function(t){t.release_date=t.release_date?t.release_date.replace(/-/g,"/"):null,e.data.push(t)})),e.loading=!1})).catch((function(t){throw e.data=[],e.total=0,e.loading=!1,t}))},onPageChange:function(e){this.page=e,this.loadAsyncData()},onSort:function(e,t){this.sortField=e,this.sortOrder=t,this.loadAsyncData()},type:function(e){var t=parseFloat(e);return t<6?"is-danger":t>=6&&t<8?"is-warning":t>=8?"is-success":void 0}},filters:{truncate:function(e,t){return e.length>t?e.substr(0,t)+"...":e}},mounted:function(){this.loadAsyncData()}}),l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("h2",{staticClass:"title is-3 has-text-grey"},[e._v('\n    "Just start  '),n("b-icon",{attrs:{icon:"rocket",size:"is-large"}}),e._v('"\n  ')],1),e._v(" "),n("b-table",{attrs:{data:e.table.isEmpty?[]:e.data,bordered:e.table.isBordered,striped:e.table.isStriped,narrowed:e.table.isNarrowed,hoverable:e.table.isHoverable,loading:e.table.isLoading,focusable:e.table.isFocusable,"mobile-cards":e.table.hasMobileCards,paginated:"","backend-pagination":"",total:e.table.total,"per-page":e.table.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","backend-sorting":"","default-sort-direction":e.table.defaultSortOrder,"default-sort":[e.table.sortField,e.table.sortOrder]},on:{"page-change":e.onPageChange,sort:e.onSort},scopedSlots:e._u([{key:"default",fn:function(t){return[n("b-table-column",{attrs:{field:"id",label:"ID",width:"40",numeric:""}},[e._v("\n        "+e._s(t.row.id)+"\n      ")]),e._v(" "),n("b-table-column",{attrs:{field:"first_name",label:"First Name"}},[e._v("\n        "+e._s(t.row.first_name)+"\n      ")]),e._v(" "),n("b-table-column",{attrs:{field:"last_name",label:"Last Name"}},[e._v("\n        "+e._s(t.row.last_name)+"\n      ")]),e._v(" "),n("b-table-column",{attrs:{field:"date",label:"Date",centered:""}},[n("span",{staticClass:"tag is-success"},[e._v("\n                        "+e._s(new Date(t.row.date).toLocaleDateString())+"\n                    ")])]),e._v(" "),n("b-table-column",{attrs:{label:"Gender"}},[n("span",[n("b-icon",{attrs:{pack:"fas",icon:"Male"===t.row.gender?"mars":"venus"}}),e._v("\n                        "+e._s(t.row.gender)+"\n                    ")],1)])]}}])},[e._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e._v(" "),n("p",[e._v("Nothing here.")])])])])],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);