(function(t){function e(e){for(var a,r,n=e[0],o=e[1],c=e[2],p=0,u=[];p<n.length;p++)r=n[p],s[r]&&u.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);v&&v(e);while(u.length)u.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],a=!0,n=1;n<i.length;n++){var o=i[n];0!==s[o]&&(a=!1)}a&&(l.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},l=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var v=o;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"13c4":function(t,e,i){"use strict";var a=i("89ee"),s=i.n(a);s.a},5417:function(t,e,i){"use strict";var a=i("6059"),s=i.n(a);s.a},6059:function(t,e,i){},"89ee":function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-navigation-drawer",{attrs:{app:"",width:"300","expand-on-hover":t.$vuetify.breakpoint.smAndDown,permanent:""}},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:"/img/profile.png"}})],1)],1),i("v-list-item",{class:"profile"===t.viewMode?"purple lighten-3":"",on:{click:function(e){t.viewMode="profile"}}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v("이창영(Lee Chang Young)")]),i("v-list-item-subtitle",[t._v("chang0022@snu.ac.kr")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{dense:""}},[i("v-list-item",{class:"resume"===t.viewMode?"purple lighten-3":"",on:{click:function(e){t.viewMode="resume"}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-account-card-details")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Resume")])],1)],1),i("v-list-item",{class:"portfolio"===t.viewMode?"purple lighten-3":"",on:{click:function(e){t.viewMode="portfolio"}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-file-document-box")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Portfolio")])],1)],1)],1)],1),i("v-content",["profile"===t.viewMode?i("profile"):t._e(),"resume"===t.viewMode?i("resume"):t._e(),"portfolio"===t.viewMode?i("portfolio"):t._e()],1)],1)},l=[],r=i("d225"),n=i("308d"),o=i("6bb5"),c=i("4e2b"),v=i("9ab4"),p=i("60a3"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"fill-height":"","pa-5":"",column:""}},[i("span",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Profile")]),i("div",[i("span",{staticClass:"body-1"},[t._v("이름")]),i("span",{staticClass:"body-2"},[t._v(": 이창영 (Lee Chang Young)")])]),i("div",[i("span",{staticClass:"body-1"},[t._v("생년월일")]),i("span",{staticClass:"body-2"},[t._v(": 1995. 02. 15")])]),i("div",[i("span",{staticClass:"body-1"},[t._v("병역")]),i("span",{staticClass:"body-2"},[t._v(": 공군 병장 만기전역(2014.12.22 ~ 2016.12.21)")])]),i("div",[i("span",{staticClass:"body-1"},[t._v("이메일")]),i("span",{staticClass:"body-2"},[t._v(": chang0022@snu.ac.kr")])]),i("div",[i("span",{staticClass:"body-1"},[t._v("연락처")]),i("span",{staticClass:"body-2"},[t._v(": 010-7564-0062")])])])},m=[],h=function(t){function e(){return Object(r["a"])(this,e),Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(p["b"]);h=v["a"]([Object(p["a"])({})],h);var d=h,b=d,f=(i("5417"),i("2877")),_=i("6544"),g=i.n(_),C=i("a722"),w=Object(f["a"])(b,u,m,!1,null,"54c11b34",null),y=w.exports;g()(w,{VLayout:C["a"]});var j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"fill-height":"","pa-5":"",column:""}},[i("span",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Resume")]),i("v-timeline",{attrs:{dense:""}},[i("v-timeline-item",{attrs:{color:"purple",small:""}},[i("v-layout",[i("div",{staticClass:"time"},[t._v("2020.02")]),i("div",{staticClass:"content"},[t._v("서울대학교 졸업 (예정)")])])],1),i("v-timeline-item",{attrs:{color:"purple",small:""}},[i("v-layout",[i("div",{staticClass:"time"},[t._v("2019.02 ~ ")]),i("div",{staticClass:"content"},[t._v("(주)Omnis Labs (Front End Web Developer)")])])],1),i("v-timeline-item",{attrs:{color:"purple",small:""}},[i("v-layout",[i("div",{staticClass:"time"},[t._v("2018.01 ~ 2018.10")]),i("div",{staticClass:"content"},[t._v("(주)코드윙즈 (Full Stack Web Developer)")])])],1),i("v-timeline-item",{attrs:{color:"purple",small:""}},[i("v-layout",[i("div",{staticClass:"time"},[t._v("2017.08")]),i("div",{staticClass:"content"},[t._v("(주)씨엠에스 에듀 (인턴)")])])],1),i("v-timeline-item",{attrs:{color:"purple",small:""}},[i("v-layout",[i("div",{staticClass:"time"},[t._v("2013.03")]),i("div",{staticClass:"content"},[t._v("서울대학교 입학")])])],1)],1)],1)},x=[],O=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.card1=!1,t.card2=!1,t.card3=!1,t.card4=!1,t}return Object(c["a"])(e,t),e}(p["b"]);O=v["a"]([Object(p["a"])({})],O);var V=O,M=V,S=(i("13c4"),i("8414")),L=i("1e06"),P=Object(f["a"])(M,j,x,!1,null,"57c08a2f",null),k=P.exports;g()(P,{VLayout:C["a"],VTimeline:S["a"],VTimelineItem:L["a"]});var E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"fill-height":"","pa-5":"",column:""}},[i("span",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Portfolio")]),i("div",{staticClass:"title mt-3"},[t._v("Skills")]),i("div",{staticClass:"ml-2"},[i("div",{staticClass:"subtitle purple--text mt-2"},[t._v("Strong")]),i("div",[i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Python")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Java")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Django")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("HTML")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("CSS")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Javascript")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("jQuery")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("ES2015")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Vue.js")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Vuetify")]),i("v-chip",{staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v("Restful")])],1),i("div",{staticClass:"subtitle green--text mt-2"},[t._v("Available")]),i("div",[i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("C")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("Node.js")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("Express")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("Electron.js")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("Mysql")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("MongoDB")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("Firebase")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("AWS EC2")]),i("v-chip",{staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v("AWS S3")])],1),i("div",{staticClass:"subtitle yellow--text mt-2"},[t._v("Knowledge")]),i("div",[i("v-chip",{staticClass:"white--text",attrs:{color:"yellow lighten-1 mr-2 mb-1"}},[t._v("React.js")]),i("v-chip",{staticClass:"white--text",attrs:{color:"yellow lighten-1 mr-2 mb-1"}},[t._v("Docker")]),i("v-chip",{staticClass:"white--text",attrs:{color:"yellow lighten-1 mr-2 mb-1"}},[t._v("AWS Cloudfront")])],1)]),i("div",{staticClass:"title mt-3"},[t._v("Projects")])])},I=[],A=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.card1=!1,t.card2=!1,t.card3=!1,t.card4=!1,t}return Object(c["a"])(e,t),e}(p["b"]);A=v["a"]([Object(p["a"])({})],A);var D=A,T=D,$=i("cc20"),R=Object(f["a"])(T,E,I,!1,null,"2cd18a2c",null),W=R.exports;g()(R,{VChip:$["a"],VLayout:C["a"]});var J=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.viewMode="profile",t}return Object(c["a"])(e,t),e}(p["b"]);J=v["a"]([Object(p["a"])({components:{Profile:y,Resume:k,Portfolio:W}})],J);var F=J,N=F,Y=i("7496"),q=i("a75b"),B=i("ce7e6"),H=i("132d"),K=i("adda"),Q=i("8860"),z=i("da13"),G=i("1800"),U=i("8270"),X=i("5d23"),Z=i("f774"),tt=Object(f["a"])(N,s,l,!1,null,null,null),et=tt.exports;g()(tt,{VApp:Y["a"],VContent:q["a"],VDivider:B["a"],VIcon:H["a"],VImg:K["a"],VList:Q["a"],VListItem:z["a"],VListItemAction:G["a"],VListItemAvatar:U["a"],VListItemContent:X["a"],VListItemSubtitle:X["b"],VListItemTitle:X["c"],VNavigationDrawer:Z["a"]});var it=i("f309");a["a"].use(it["a"]);var at=new it["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({vuetify:at,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.2c281e47.js.map