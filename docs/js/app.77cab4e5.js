(function(t){function s(s){for(var a,o,l=s[0],r=s[1],c=s[2],d=0,p=[];d<l.length;d++)o=l[d],e[o]&&p.push(e[o][0]),e[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);v&&v(s);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,s=0;s<i.length;s++){for(var n=i[s],a=!0,l=1;l<n.length;l++){var r=n[l];0!==e[r]&&(a=!1)}a&&(i.splice(s--,1),t=o(o.s=n[0]))}return t}var a={},e={app:0},i=[];function o(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,s,n){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(n,a,function(s){return t[s]}.bind(null,a));return n},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var v=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("cd49")},5968:function(t,s,n){"use strict";var a=n("6cfd"),e=n.n(a);e.a},"6cfd":function(t,s,n){},cd49:function(t,s,n){"use strict";n.r(s);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-app",{attrs:{id:"app",dark:""}},[n("v-navigation-drawer",{attrs:{app:"",width:"200",permanent:"","expand-on-hover":t.$vuetify.breakpoint.smAndDown}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"img/profile.png"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v("이창영")]),n("v-list-item-subtitle",[t._v("chang0022@snu.ac.kr")])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",{class:"resume"===t.viewMode?"purple lighten-3":"",on:{click:function(s){t.viewMode="resume"}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-account-card-details")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Resume")])],1)],1),n("v-list-item",{class:"portfolio"===t.viewMode?"purple lighten-3":"",on:{click:function(s){t.viewMode="portfolio"}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-file-document-box")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Portfolio")])],1)],1)],1)],1),n("v-content",["resume"===t.viewMode?n("resume"):t._e(),"portfolio"===t.viewMode?n("portfolio"):t._e()],1)],1)},i=[],o=n("d225"),l=n("b0b4"),r=n("308d"),c=n("6bb5"),v=n("4e2b"),d=n("9ab4"),p=n("60a3"),u=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-layout",{attrs:{"fill-height":"","pa-5":"",column:""}},[n("span",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Resume")]),n("div",{staticClass:"title my-3"},[t._v("프로필")]),n("div",{staticClass:"ml-4 mb-5"},[n("div",[n("span",{staticClass:"body-1"},[t._v("이름")]),t._v(":"),n("span",{staticClass:"body-2"},[t._v("이창영 (Lee Chang Young)")])]),n("div",[n("span",{staticClass:"body-1"},[t._v("생년월일")]),t._v(":"),n("span",{staticClass:"body-2"},[t._v("1995. 02. 15")])]),n("div",[n("span",{staticClass:"body-1"},[t._v("병역")]),t._v(":"),n("span",{staticClass:"body-2"},[t._v("공군 병장 만기전역(2014.12.22 ~ 2016.12.21)")])]),n("div",[n("span",{staticClass:"body-1"},[t._v("이메일")]),t._v(":"),n("span",{staticClass:"body-2"},[t._v("chang0022@snu.ac.kr")])]),n("div",[n("span",{staticClass:"body-1"},[t._v("연락처")]),t._v(":"),n("span",{staticClass:"body-2"},[t._v("010-7564-0062")])])]),n("div",{staticClass:"title my-3"},[t._v("학력, 경력")]),n("div",{staticClass:"ml-4"},[n("div",[n("span",{staticClass:"time"},[t._v("2019.02 ~ ")]),n("span",{staticClass:"content"},[t._v("(주)Omnis Labs")]),n("span",{staticClass:"etc"},[t._v("(Front End Web Developer)")])]),n("div",[n("span",{staticClass:"time"},[t._v("2018.01 ~ 2018.10")]),n("span",{staticClass:"content"},[t._v("코드윙즈")]),n("span",{staticClass:"etc"},[t._v("(Full Stack Web Developer)")])]),n("div",[n("span",{staticClass:"time"},[t._v("2017.08")]),n("span",{staticClass:"content"},[t._v("(주)씨엠에스 에듀")]),n("span",{staticClass:"etc"},[t._v("(인턴)")])]),n("div",[n("span",{staticClass:"time"},[t._v("2013.03 ~ 2020.02")]),n("span",{staticClass:"content"},[t._v("서울대학교 컴퓨터공학부")]),n("span",{staticClass:"etc"},[t._v("(졸업 예정)")])])])])},b=[],m=function(t){function s(){var t;return Object(o["a"])(this,s),t=Object(r["a"])(this,Object(c["a"])(s).apply(this,arguments)),t.card1=!1,t.card2=!1,t.card3=!1,t.card4=!1,t}return Object(v["a"])(s,t),s}(p["b"]);m=d["a"]([Object(p["a"])({})],m);var f=m,_=f,y=(n("5968"),n("2877")),C=n("6544"),g=n.n(C),h=n("a722"),w=Object(y["a"])(_,u,b,!1,null,"4e2f6ec0",null),j=w.exports;g()(w,{VLayout:h["a"]});var k=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-layout",{attrs:{"fill-height":"","pa-5":"",column:""}},[n("span",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Portfolio")]),n("div",{staticClass:"title mt-3"},[t._v("Skills")]),n("div",{staticClass:"ml-4"},[n("div",{staticClass:"subtitle purple--text mt-2"},[t._v("Strong")]),n("div",t._l(t.strong,function(s){return n("v-chip",{key:s,staticClass:"white--text",attrs:{color:"purple lighten-2 mr-2 mb-1"}},[t._v(t._s(s))])}),1),n("div",{staticClass:"subtitle green--text mt-2"},[t._v("Available")]),n("div",t._l(t.available,function(s){return n("v-chip",{key:s,staticClass:"white--text",attrs:{color:"green lighten-1 mr-2 mb-1"}},[t._v(t._s(s))])}),1),n("div",{staticClass:"subtitle yellow--text text--darken-2 mt-2"},[t._v("Knowledge")]),n("div",t._l(t.knowledge,function(s){return n("v-chip",{key:s,staticClass:"white--text",attrs:{color:"yellow darken-2 mr-2 mb-1"}},[t._v(t._s(s))])}),1)]),n("div",{staticClass:"title mt-3"},[t._v("Major Courses")]),n("v-layout",{attrs:{column:"","ml-4":""}},[n("span",{staticClass:"subtitle-1 font-weight-bold"},[t._v("2013-2")]),n("span",{staticClass:"body-1"},[t._v("- 프로그래밍 연습")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2014-1")]),n("span",{staticClass:"body-1"},[t._v("- 컴퓨터 프로그래밍")]),n("span",{staticClass:"body-1"},[t._v("- 논리설계, 실험")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2014-2")]),n("span",{staticClass:"body-1"},[t._v("- 프로그래밍의 원리")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2017-1")]),n("span",{staticClass:"body-1"},[t._v("- 이산수학")]),n("span",{staticClass:"body-1"},[t._v("- 컴퓨터 구조")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2017-2")]),n("span",{staticClass:"body-1"},[t._v("- 오토마타이론")]),n("span",{staticClass:"body-1"},[t._v("- 운영체제")]),n("span",{staticClass:"body-1"},[t._v("- 데이터베이스")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2018-1")]),n("span",{staticClass:"body-1"},[t._v("- 자료구조")]),n("span",{staticClass:"body-1"},[t._v("- 알고리즘")]),n("span",{staticClass:"body-1"},[t._v("- 데이터마이닝 개론")]),n("span",{staticClass:"body-1"},[t._v("- 창의적통합설계2")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2018-2")]),n("span",{staticClass:"body-1"},[t._v("- 전기전자회로")]),n("span",{staticClass:"body-1"},[t._v("- 프로그래밍언어")]),n("span",{staticClass:"subtitle-1 mt-2 font-weight-bold"},[t._v("2019-1")]),n("span",{staticClass:"body-1"},[t._v("- 컴퓨터그래픽스")]),n("span",{staticClass:"body-1"},[t._v("- 소프트웨어응용")]),n("span",{staticClass:"body-1"},[t._v("- 컴퓨터시스템특강")])]),n("div",{staticClass:"title mt-3"},[t._v("Projects")]),n("v-layout",{attrs:{column:"","ml-4":""}},[n("div",{domProps:{innerHTML:t._s(t.markdown1)}}),n("v-divider",{staticClass:"my-4"}),n("div",{domProps:{innerHTML:t._s(t.markdown2)}}),n("v-divider",{staticClass:"my-4"}),n("div",{domProps:{innerHTML:t._s(t.markdown3)}}),n("v-divider",{staticClass:"my-4"}),n("div",{domProps:{innerHTML:t._s(t.markdown4)}})],1)],1)},O=[],S=n("0e54"),E=n.n(S),x=E()("\n## 1. (주)씨엠에스에듀 - Web IDE 제작  \n**기간** : 2017.08 1개월\n\n**프로젝트 설명**  \n웹 상에서 코딩하고 실행해볼 수 있는 단일 페이지 웹 환경 만들기.  \n작성한 코드들을 저장 및 관리할 수 있는 filetree 제공.\n다양한 프로그래밍 언어에 대해 컴파일 및 실행하고 결과를 확인할 수 있음.\n\n**프로젝트 기술 스택** : Node.js, Express, Mongodb, Docker, React.js\n\n**맡은 부분 및 업무 내용**  \nBack End Development  \n작성한 코드를 서버 내 공간에 유저별로 저장, 수정, 삭제 등을 할 수 있는 기능(storage에 직접 저장)  \n유저의 filetree에 대한 정보를 MongoDB에 관리.  \n저장한 코드를 Docker안에서 컴파일 및 실행할 수 있는 기능(compilebox라는 오픈소스 사용)\n\n**의의**  \n웹 개발을 처음 해보는 입장에서 한달 동안 공부하며 진행했던 프로젝트였기 때문에 완성도가 높지 못했고 구현 방식도 완벽하지 않았다.  \n그러나 웹 개발의 큰 틀을 이해할 수 있었고, 협업이 어떻게 이루어지는지도 배울 수 있었음.\n"),D=x,V=E()("\n## 2. (주)코드윙즈 - 코드윙즈 서비스 유지.보수 및 기능 추가 ([코드윙즈](https://www.codewings.org))  \n**기간** : 2018.01 ~ 2018.10\n\n**프로젝트 설명**  \n선생님과 학생이 화상으로 코딩과외를 할 수 있는 플랫폼.  \n실시간 코드 공유 및 화상 전화 가능.  \n화면공유 기능.\n\n**프로젝트 기술 스택** : django, mysql, websocket, webRTC, javascript, scss, jquery\n\n**맡은 부분 및 업무 내용**  \nFull Stack Development  \n홈페이지 리뉴얼 - 홈페이지 전체를 새로운 UI, 디자인으로 변경하는 작업. (Front-End)  \n홈 스쿨 기능 추가 - 학생들이 집에서 혼자 학습하고 문제를 풀어볼 수 있는 기능 및 코드 자동채점 기능 추가. (Front-End, websocket)  \n일정 관리 기능 추가 - 선생님과 학생이 정한 일정을 등록할 수 있는 기능 추가. (Front-End, Back-End)  \n알림톡 기능 추가 - 수업 시작 전에 학생과 선생님에게 알림톡을 보내는 기능 추가. 카카오톡 알림톡 서비스를 제공하는 bizppurio의 모듈을 이용. (Back-End)  \n관리자 페이지 생성 - 기존에는 django의 admin 페이지를 이용하고 있었으나, 관리자에게 좀 더 편한 툴을 제공하기 위함. (Front-End, Back-End)\n\n**의의**  \n큰 규모는 아니지만 처음 경험하는 실 서비스 중인 프로젝트 개발.  \nhtml, css, javascript, jQeury 능숙하게 사용.  \nDjango Model을 통한 Database 관리.  \n필요한 데이터를 Database로부터 읽고 쓰고 가공하여 Front-End와 통신.  \n"),M=V,L=E()("\n## 3. (주)코드윙즈 - 코드메이트 서비스 신규 개발 (서비스 종료)  \n**기간** : 2018.08 ~ 2018.10\n\n**프로젝트 설명**  \n프로그래밍 도중 도움이 필요한 학생이나 개발자들을 위한 플랫폼.\n유저들은 질문을 올릴 수 있고, 멘토로 활동하는 사람들이 그에 대해 화상 강의 또는 채팅으로 응답해주며 pay를 받음.\n\n**프로젝트 기술 스택** : django, django rest framework, mysql, firebase, websocket, webRTC, Vue.js, Vuex, ES2015, scss\n\n**맡은 부분 및 업무 내용**  \nFull Stack Development, Front-End 위주.  \n서비스 전체 DB 설계.  \n서비스 전체 페이지 제작.  \n질문 올리기, 질문 응답 신청, 채팅, 화상 강의실, 리뷰, payment 등의 기능들에 대해 Front-End 담당.\n\n**의의**  \nRestful API에 대한 이해.  \nSPA 프레임워크 및 webpack, babel 등의 빌드 도구들을 경험.  \n웹 개발의 최신 트렌드를 따라갈 수 있는 기회가 됨.\n"),P=L,F=E()("\n## 4. (주)Omnis Labs - Deep Block 서비스 개발 ([DeepBlock](https://deepblock.site))\n**기간** : 2019.02 ~ \n\n**프로젝트 설명**  \n일반인들이 딥 러닝을 이용할 수 있도록 한 마우스 기반 AI application 플랫폼.  \n학습을 위한 데이터들을 저장할 수 있는 클라우드를 제공하며 그 데이터를 가지고 학습 및 예측을 돌릴 수 있는 툴을 제공.  \nImage Classification, Style Transfer, Image Segmentation, Object Detection, Faical Expression Recognition 등의 application들을 돌릴 수 있다.\n\n**프로젝트 기술 스택** : Node.js PostgreSQL, Vue.js, Vuex, ES2015, Typescript, socketio\n\n**맡은 부분 및 업무 내용**  \nFront End Development.  \n홈페이지 리뉴얼.  \nvue cli 2 -> 3 마이그레이션.  \nbraintree, paypal을 이용한 클라우드 결제 및 앱 결제 기능 추가 (front-end 부분만).  \napplication들을 돌릴 수 있는 deep block app 추가 - 클라우드와의 데이터 연동. 학습 및 예측. socketio를 통한 학습 진행 상황 및 결과 실시간 렌더링.  \n사진에 polygon 또는 rectangle을 annotate할 수 있는 tool 제작.  \ntypescript 적용.\n\n**의의**  \n이 전까지의 프로젝트 경험에 비해 깔끔한 구조 및 코드 작성을 위해 노력함.\n"),I=F,T=function(t){function s(){var t;return Object(o["a"])(this,s),t=Object(r["a"])(this,Object(c["a"])(s).apply(this,arguments)),t.strong=["Python","Java","Django","HTML","CSS","SCSS","Javascript","jQuery","ES2015","Vue.js","Vuetify","Restful"],t.available=["C","Node.js","Express","Electron.js","Mysql","MongoDB","Firebase","AWS EC2","AWS S3"],t.knowledge=["React.js","Docker","AWS Cloudfront"],t.markdown1=D,t.markdown2=M,t.markdown3=P,t.markdown4=I,t}return Object(v["a"])(s,t),s}(p["b"]);T=d["a"]([Object(p["a"])({})],T);var A=T,R=A,B=n("cc20"),W=n("ce7e6"),$=Object(y["a"])(R,k,O,!1,null,"76e7fd11",null),H=$.exports;g()($,{VChip:B["a"],VDivider:W["a"],VLayout:h["a"]});var q=function(t){function s(){var t;return Object(o["a"])(this,s),t=Object(r["a"])(this,Object(c["a"])(s).apply(this,arguments)),t.viewMode="resume",t}return Object(v["a"])(s,t),Object(l["a"])(s,[{key:"created",value:function(){this.$vuetify.theme.dark=!0}}]),s}(p["b"]);q=d["a"]([Object(p["a"])({components:{Resume:j,Portfolio:H}})],q);var J=q,N=J,Q=n("7496"),z=n("a75b"),K=n("132d"),U=n("adda"),Y=n("8860"),G=n("da13"),X=n("1800"),Z=n("8270"),tt=n("5d23"),st=n("f774"),nt=Object(y["a"])(N,e,i,!1,null,null,null),at=nt.exports;g()(nt,{VApp:Q["a"],VContent:z["a"],VDivider:W["a"],VIcon:K["a"],VImg:U["a"],VList:Y["a"],VListItem:G["a"],VListItemAction:X["a"],VListItemAvatar:Z["a"],VListItemContent:tt["a"],VListItemSubtitle:tt["b"],VListItemTitle:tt["c"],VNavigationDrawer:st["a"]});var et=n("f309");a["a"].use(et["a"]);var it=new et["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({vuetify:it,render:function(t){return t(at)}}).$mount("#app")}});
//# sourceMappingURL=app.77cab4e5.js.map