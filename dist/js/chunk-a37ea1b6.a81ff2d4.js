(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a37ea1b6"],{"057f":function(t,e,a){"use strict";var r=a("c6b6"),i=a("fc6a"),n=a("241c").f,o=a("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return o(s)}};t.exports.f=function(t){return s&&"Window"===r(t)?c(t):n(i(t))}},"0b43":function(t,e,a){"use strict";var r=a("04f8");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,a){"use strict";var r=a("da84");t.exports=r},"57b9":function(t,e,a){"use strict";var r=a("c65b"),i=a("d066"),n=a("b622"),o=a("cb2d");t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,a=e&&e.valueOf,s=n("toPrimitive");e&&!e[s]&&o(e,s,(function(t){return r(a,this)}),{arity:1})}},"5a47":function(t,e,a){"use strict";var r=a("23e7"),i=a("04f8"),n=a("d039"),o=a("7418"),s=a("7b0b"),c=!i||n((function(){o.f(1)}));r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(s(t)):[]}})},"64c8":function(t,e,a){"use strict";a("ce53")},"8d65":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"50px"}},[a("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",attrs:{model:t.personalForm,rules:t.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"Change Avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"http-request":t.uploadFile,accept:".jpg, .png",action:"","show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[t.personalForm.avatar?a("img",{staticClass:"avatar",attrs:{src:t.personalForm.avatar},model:{value:t.personalForm.avatar,callback:function(e){t.$set(t.personalForm,"avatar",e)},expression:"personalForm.avatar"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"Description",prop:"description"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"Write your description here...",maxlength:"50","show-word-limit":""},model:{value:t.personalForm.description,callback:function(e){t.$set(t.personalForm,"description",e)},expression:"personalForm.description"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("personalForm")}}},[t._v("Apply")]),a("el-button",{on:{click:function(e){return t.resetForm("personalForm")}}},[t._v("Reset")])],1)],1)],1)},i=[],n=(a("b64b"),a("a4d3"),a("e01a"),a("e9c4"),{name:"Center",mounted:function(){var t=JSON.parse(window.localStorage.getItem("user"));this.personalForm.description=t.description,this.personalForm.avatar=t.avatar},data:function(){return{personalForm:{description:"",avatar:""},rules:{description:[{required:!1,message:"Please Enter Description.",trigger:"blur"},{min:0,max:50,message:"Maximum Length 50.",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.personalForm.avatar===a("54a9")&&(e.personalForm.avatar=""),e.postJsonRequest("/web/user/updateBaseInfo",e.personalForm).then((function(t){e.$store.commit("INIT_USER",JSON.stringify(t.data.object))})).catch((function(t){})),location.reload()}))},resetForm:function(t){this.$refs[t].resetFields();var e=JSON.parse(window.localStorage.getItem("user"));e.avatar===a("54a9")?this.personalForm.avatar=a("54a9"):this.personalForm.avatar=e.avatar},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a="image/png"===t.type,r=t.size/1024/1024<2;return e||a||this.$message.error("Only accept .jpg/.png files."),r||this.$message.error("Maximum size 2MB!"),(e||a)&&r},uploadFile:function(t){var e=this,a=new FormData;a.append("avatar",t.file),this.postFileRequest("/web/file/uploadAvatar",a).then((function(t){e.personalForm.avatar=t.data.object.imageUrl})).catch((function(t){e.$message.error("Fail to upload, try again later.")}))}}}),o=n,s=(a("a0ec"),a("2877")),c=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},a0ec:function(t,e,a){"use strict";a("abcf")},a4d3:function(t,e,a){"use strict";a("d9f5"),a("b4f8"),a("c513"),a("e9c4"),a("5a47")},abcf:function(t,e,a){},b4f8:function(t,e,a){"use strict";var r=a("23e7"),i=a("d066"),n=a("1a2d"),o=a("577e"),s=a("5692"),c=a("0b43"),l=s("string-to-symbol-registry"),u=s("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=o(t);if(n(l,e))return l[e];var a=i("Symbol")(e);return l[e]=a,u[a]=e,a}})},c513:function(t,e,a){"use strict";var r=a("23e7"),i=a("1a2d"),n=a("d9b5"),o=a("0d51"),s=a("5692"),c=a("0b43"),l=s("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!n(t))throw new TypeError(o(t)+" is not a symbol");if(i(l,t))return l[t]}})},ce53:function(t,e,a){},d9f5:function(t,e,a){"use strict";var r=a("23e7"),i=a("da84"),n=a("c65b"),o=a("e330"),s=a("c430"),c=a("83ab"),l=a("04f8"),u=a("d039"),d=a("1a2d"),f=a("3a9b"),p=a("825a"),m=a("fc6a"),h=a("a04b"),v=a("577e"),g=a("5c6c"),b=a("7c73"),y=a("df75"),P=a("241c"),w=a("057f"),C=a("7418"),S=a("06cf"),x=a("9bf2"),F=a("37e8"),N=a("d1e7"),k=a("cb2d"),O=a("edd0"),_=a("5692"),A=a("f772"),I=a("d012"),T=a("90e3"),$=a("b622"),j=a("e538"),B=a("e065"),E=a("57b9"),R=a("d44e"),M=a("69f3"),U=a("b727").forEach,J=A("hidden"),z="Symbol",D="prototype",L=M.set,q=M.getterFor(z),W=Object[D],G=i.Symbol,H=G&&G[D],V=i.RangeError,K=i.TypeError,Q=i.QObject,X=S.f,Y=x.f,Z=w.f,tt=N.f,et=o([].push),at=_("symbols"),rt=_("op-symbols"),it=_("wks"),nt=!Q||!Q[D]||!Q[D].findChild,ot=function(t,e,a){var r=X(W,e);r&&delete W[e],Y(t,e,a),r&&t!==W&&Y(W,e,r)},st=c&&u((function(){return 7!==b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?ot:Y,ct=function(t,e){var a=at[t]=b(H);return L(a,{type:z,tag:t,description:e}),c||(a.description=e),a},lt=function(t,e,a){t===W&&lt(rt,e,a),p(t);var r=h(e);return p(a),d(at,r)?(a.enumerable?(d(t,J)&&t[J][r]&&(t[J][r]=!1),a=b(a,{enumerable:g(0,!1)})):(d(t,J)||Y(t,J,g(1,{})),t[J][r]=!0),st(t,r,a)):Y(t,r,a)},ut=function(t,e){p(t);var a=m(e),r=y(a).concat(ht(a));return U(r,(function(e){c&&!n(ft,a,e)||lt(t,e,a[e])})),t},dt=function(t,e){return void 0===e?b(t):ut(b(t),e)},ft=function(t){var e=h(t),a=n(tt,this,e);return!(this===W&&d(at,e)&&!d(rt,e))&&(!(a||!d(this,e)||!d(at,e)||d(this,J)&&this[J][e])||a)},pt=function(t,e){var a=m(t),r=h(e);if(a!==W||!d(at,r)||d(rt,r)){var i=X(a,r);return!i||!d(at,r)||d(a,J)&&a[J][r]||(i.enumerable=!0),i}},mt=function(t){var e=Z(m(t)),a=[];return U(e,(function(t){d(at,t)||d(I,t)||et(a,t)})),a},ht=function(t){var e=t===W,a=Z(e?rt:m(t)),r=[];return U(a,(function(t){!d(at,t)||e&&!d(W,t)||et(r,at[t])})),r};l||(G=function(){if(f(H,this))throw new K("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=T(t),a=function(t){this===W&&n(a,rt,t),d(this,J)&&d(this[J],e)&&(this[J][e]=!1);var r=g(1,t);try{st(this,e,r)}catch(i){if(!(i instanceof V))throw i;ot(this,e,r)}};return c&&nt&&st(W,e,{configurable:!0,set:a}),ct(e,t)},H=G[D],k(H,"toString",(function(){return q(this).tag})),k(G,"withoutSetter",(function(t){return ct(T(t),t)})),N.f=ft,x.f=lt,F.f=ut,S.f=pt,P.f=w.f=mt,C.f=ht,j.f=function(t){return ct($(t),t)},c&&(O(H,"description",{configurable:!0,get:function(){return q(this).description}}),s||k(W,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!l,sham:!l},{Symbol:G}),U(y(it),(function(t){B(t)})),r({target:z,stat:!0,forced:!l},{useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:dt,defineProperty:lt,defineProperties:ut,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:mt}),E(),R(G,z),I[J]=!0},dd1a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20,type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-row",[a("el-card",{staticStyle:{height:"230px",width:"600px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("div",{on:{click:t.avatarClick}},[a("img",{staticClass:"user-avatar",attrs:{src:this.avatarUrl,alt:"avater"}})]),a("div",{staticClass:"user-info-cont"},[a("div",{staticStyle:{color:"#222","font-size":"25px"},domProps:{textContent:t._s(t.userInfo.name)}}),a("div",{domProps:{textContent:t._s(t.role)}})])]),a("div",{staticStyle:{display:"flex","font-size":"15px",color:"#999"}},[t._v(" Current Location: "),a("div",{staticClass:"user-info-list"},[a("span",{domProps:{textContent:t._s(t.position.province)}}),a("el-divider",{attrs:{direction:"vertical"}}),a("span",{domProps:{textContent:t._s(t.position.city)}})],1)])])],1)],1),a("el-col",{attrs:{span:12}},[a("el-tabs",{staticStyle:{height:"400px","overflow-x":"auto"},attrs:{"tab-position":"left",type:"border-card"},on:{"tab-click":t.tabClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{name:"AR Notification"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-claim"}),a("span",[t._v("AR Notifications")])]),a("el-row",{staticClass:"icon-more",attrs:{gutter:0}},[a("span",{on:{click:function(e){return t.changePage1(!1)}}},[a("i",{staticClass:"el-icon-caret-left"})]),a("span",{on:{click:function(e){return t.changePage1(!0)}}},[a("i",{staticClass:"el-icon-caret-right"})])]),a("br"),t._l(t.noticeContent_1,(function(e){return a("div",{staticStyle:{height:"30px"}},[a("div",[a("div",{staticClass:"content-title",domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.contentClick(e.id)}}}),a("div",{staticClass:"content-date",domProps:{textContent:t._s(e.createTime)}})])])}))],2),a("el-tab-pane",{attrs:{name:"System Notification"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-opportunity"}),a("span",[t._v("System Notifications")])]),a("el-row",{staticClass:"icon-more",attrs:{gutter:0}},[a("span",{on:{click:function(e){return t.changePage2(!1)}}},[a("i",{staticClass:"el-icon-caret-left"})]),a("span",{on:{click:function(e){return t.changePage2(!0)}}},[a("i",{staticClass:"el-icon-caret-right"})])]),a("br"),t._l(t.noticeContent_2,(function(e){return a("div",{staticStyle:{height:"30px"}},[a("div",[a("div",{staticClass:"content-title",domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.contentClick(e.id)}}}),a("div",{staticClass:"content-date",domProps:{textContent:t._s(e.createTime)}})])])}))],2)],1)],1)],1),a("div",{staticStyle:{"margin-top":"30px"}}),a("keep-alive",[a("el-row",{attrs:{gutter:20,type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"chart-card",attrs:{shadow:"hover"}},[a("div",{staticStyle:{width:"800px",height:"400px"},attrs:{id:"visitedNum"}})])],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"chart-card",attrs:{shadow:"hover"}},[a("div",{staticStyle:{width:"800px",height:"400px"},attrs:{id:"academyNum"}})])],1)],1)],1)],1)},i=[],n=(a("b64b"),a("ac1f"),a("5319"),a("b0c0"),{name:"Home",data:function(){return{activeTab:"AR Notification",userInfo:"",role:"",avatarUrl:"",city:"",position:{city:"",province:""},orgOptions:{},noticeContent_1:[],noticeContent_2:[],currPage1:1,currPage2:1,hasNextPage1:!1,hasPrePage1:!1,hasNextPage2:!1,hasPrePage2:!1}},mounted:function(){this.drawVisitedNum(),this.drawAcademyNum(),this.initBoardContent(),this.userInfo=JSON.parse(localStorage.getItem("user")),1===this.userInfo.status?this.role="Administrator":2===this.userInfo.status?this.role="Student":3===this.userInfo.status&&(this.role="Instructor"),""===this.userInfo.avatar?this.avatarUrl=a("54a9"):this.avatarUrl=this.userInfo.avatar;var t=this;AMap.plugin("AMap.CitySearch",(function(){var e=new AMap.CitySearch;e.getLocalCity((function(e,a){"complete"===e&&"OK"===a.info&&(t.position.city=a.city,t.position.province=a.province)}))}))},methods:{initBoardContent:function(){var t=this,e=0;e="AR Notification"===this.activeTab?this.currPage1:this.currPage2,this.getRequest("/web/board/type?currPage="+e+"&pageSize=10&typeName="+this.activeTab).then((function(e){"AR Notification"===t.activeTab?(t.noticeContent_1=e.data.list,t.hasNextPage1=e.data.hasNextPage,t.hasPrePage1=e.data.hasPreviousPage):(t.noticeContent_2=e.data.list,t.hasNextPage2=e.data.hasNextPage,t.hasPrePage2=e.data.hasPreviousPage)}))},avatarClick:function(){this.$router.replace("/center")},drawVisitedNum:function(){var t=this.$echarts.init(document.getElementById("visitedNum")),e={title:{text:"Access in 7 Days"},tooltip:{},legend:{data:["Accesses"]},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Accesses",type:"line",data:[5,20,36,10,10,20,56]}]};t.setOption(e)},drawAcademyNum:function(){var t=this.$echarts.init(document.getElementById("academyNum")),e=[{name:"FST",value:10},{name:"FBM",value:20},{name:"SCC",value:10},{name:"FHS",value:10},{name:"SGE",value:5},{name:"GS",value:8}],a={title:{text:"Student number information",textStyle:{fontFamily:"monospace"},left:"43%"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10},series:[{name:"academy student number",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,animation:!1,label:{position:"outer",alignTo:"labelLine",bleedMargin:5},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!0},data:e}]};t.setOption(a)},contentClick:function(t){this.$store.state.boardId=t,this.$router.replace("/boardDetails")},tabClick:function(t){this.activeTab=t.name,this.initBoardContent()},changePage1:function(t){t&&this.hasNextPage1&&(this.currPage1=this.currPage1+1,this.initBoardContent()),!t&&this.hasPrePage1&&(this.currPage1=this.currPage1-1,this.initBoardContent())},changePage2:function(t){t&&this.hasNextPage1&&(this.currPage2=this.currPage2+1,this.initBoardContent()),!t&&this.hasPrePage1&&(this.currPage2=this.currPage2-1,this.initBoardContent())}}}),o=n,s=(a("64c8"),a("2877")),c=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},e01a:function(t,e,a){"use strict";var r=a("23e7"),i=a("83ab"),n=a("da84"),o=a("e330"),s=a("1a2d"),c=a("1626"),l=a("3a9b"),u=a("577e"),d=a("edd0"),f=a("e893"),p=n.Symbol,m=p&&p.prototype;if(i&&c(p)&&(!("description"in m)||void 0!==p().description)){var h={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(m,this)?new p(t):void 0===t?p():p(t);return""===t&&(h[e]=!0),e};f(v,p),v.prototype=m,m.constructor=v;var g="Symbol(description detection)"===String(p("description detection")),b=o(m.valueOf),y=o(m.toString),P=/^Symbol\((.*)\)[^)]+$/,w=o("".replace),C=o("".slice);d(m,"description",{configurable:!0,get:function(){var t=b(this);if(s(h,t))return"";var e=y(t),a=g?C(e,7,-1):w(e,P,"$1");return""===a?void 0:a}}),r({global:!0,constructor:!0,forced:!0},{Symbol:v})}},e065:function(t,e,a){"use strict";var r=a("428f"),i=a("1a2d"),n=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:n.f(t)})}},e538:function(t,e,a){"use strict";var r=a("b622");e.f=r}}]);
//# sourceMappingURL=chunk-a37ea1b6.a81ff2d4.js.map