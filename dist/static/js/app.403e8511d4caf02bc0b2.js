webpackJsonp([12],{"2NH4":function(n,t,e){"use strict";var o={name:"app-titles",porps:{panelShow:{type:Boolean}},props:["titlemag"],data:function(){return{panelShow:!0}},methods:{confirm:function(){this.panelShow=!this.panelShow}},mounted:function(){}},i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"titles"},[n.panelShow?e("div",{staticClass:"prompt"},[e("div",{staticClass:"box"}),n._v(" "),e("div",{staticClass:"mag"},[e("span",[n._v(n._s(n.titlemag))]),n._v(" "),e("span",{staticClass:"confirm",on:{click:n.confirm}},[n._v("确定")])])]):n._e()])},staticRenderFns:[]};var r=e("Z0/y")(o,i,!1,function(n){e("nY0A")},"data-v-2a26e392",null);t.a=r.exports},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("MVMM"),i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=e("Z0/y")({name:"App"},i,!1,function(n){e("boIM")},null,null).exports,a=e("zO6J"),c=e("2NH4"),u={name:"HelloWorld",data:function(){return{titlemag:"请选择性别"}},proto:{title:{type:String}},components:{"app-titles":c.a}},l={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"hello"},[t("app-titles",{attrs:{titlemag:this.titlemag}})],1)},staticRenderFns:[]};var s=e("Z0/y")(u,l,!1,function(n){e("b09l")},"data-v-833f787e",null).exports;o.a.use(a.a);var p=new a.a({routes:[{path:"/HelloWorld",name:"HelloWorld",component:s},{path:"/",name:"home",component:function(n){return e.e(3).then(function(){return n(e("26dS"))}.bind(null,e)).catch(e.oe)}},{path:"/rule",name:"rule",component:function(n){return e.e(8).then(function(){return n(e("fUId"))}.bind(null,e)).catch(e.oe)}},{path:"/privity",name:"privity",component:function(n){return e.e(1).then(function(){return n(e("WATv"))}.bind(null,e)).catch(e.oe)}},{path:"/answer",name:"answer",component:function(n){return e.e(2).then(function(){return n(e("UfdR"))}.bind(null,e)).catch(e.oe)}},{path:"/share",name:"share",component:function(n){return e.e(10).then(function(){return n(e("maw7"))}.bind(null,e)).catch(e.oe)}},{path:"/invitedhome",name:"invitedhome",component:function(n){return e.e(4).then(function(){return n(e("MmIi"))}.bind(null,e)).catch(e.oe)}},{path:"/status",name:"status",component:function(n){return e.e(9).then(function(){return n(e("4Yd1"))}.bind(null,e)).catch(e.oe)}},{path:"/notprivity",name:"notprivity",component:function(n){return e.e(5).then(function(){return n(e("+d5a"))}.bind(null,e)).catch(e.oe)}},{path:"/login",name:"login",component:function(n){return e.e(7).then(function(){return n(e("Quw4"))}.bind(null,e)).catch(e.oe)}},{path:"/register",name:"register",component:function(n){return e.e(0).then(function(){return n(e("c2lw"))}.bind(null,e)).catch(e.oe)}},{path:"/shop",name:"shop",component:function(n){return e.e(6).then(function(){return n(e("9sln"))}.bind(null,e)).catch(e.oe)}},{path:"/defaults",name:"defaults",component:function(n){return e.e(11).then(function(){return n(e("SZ1E"))}.bind(null,e)).catch(e.oe)}}]});e("UoMW");o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},UoMW:function(n,t){var e,o,i,r,a;e=document,o=window,i=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",a=function(){var n=i.clientWidth;n&&(i.style.fontSize=n/750*100+"px")},e.addEventListener&&(o.addEventListener(r,a,!1),e.addEventListener("DOMContentLoaded",a,!1))},b09l:function(n,t){},boIM:function(n,t){},nY0A:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.403e8511d4caf02bc0b2.js.map