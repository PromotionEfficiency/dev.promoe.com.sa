(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}},mounted:function(){function t(){var header=document.querySelector("section#hero header"),nav=document.querySelector("section#hero header nav");(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>100?(header.classList.add("sticky"),nav.classList.remove("navbar-dark"),nav.classList.add("navbar-light"),nav.classList.add("text-white"),nav.classList.remove("navbar-dark")):(header.classList.remove("sticky"),nav.classList.add("navbar-dark"),nav.classList.remove("navbar-light"),nav.classList.remove("text-white"),nav.classList.add("navbar-dark"))}document.addEventListener("scroll",(function(){t()})),t()},methods:{}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"container"},[r("b-navbar",{staticClass:"shadow text-white p-2 rounded-lg",attrs:{type:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("b-img",{attrs:{src:t.publicPath+"/assets/imgs/logo/pe_logo_primary_dark_bg.svg",fluid:"",alt:"Promo Logo",height:"55",width:"55"}})],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"transparent",right:""}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("b-sidebar",{attrs:{id:"sidebar-variant",title:"",backdrop:"",width:"100%","bg-variant":"dark","text-variant":"light",shadow:""}},[r("div",{staticClass:"overlay-content"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#whyus"}},[t._v("Why Us")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#services"}},[t._v("Services")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#work"}},[t._v("Portfolio")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"ContactUS"}},[t._v("Contact Us")]),t._v(" "),r("hr"),t._v(" "),r("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs Application")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);var n={name:"GoogleMap",data:function(){return{center:{lat:this.$store.state.jsonData.sections.address.content.location.lat,lng:this.$store.state.jsonData.sections.address.content.location.lng},markers:[],places:[],options:{clickableIcons:!1,disableDefaultUI:!0,styles:[{featureType:"administrative",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}]}}}},o=r(47),l=(Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("gmap-map",{attrs:{center:this.center,zoom:17,options:this.options}})}),[],!1,null,null,null).exports,{data:function(){return{publicPath:"http://dev.promoe.com.sa/"}},components:{}}),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-white overflow-hidden",attrs:{id:"ouraddress"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{staticClass:"py-5 text-center text-lg-right px-5",attrs:{cols:"12",lg:"5",xl:"3","offset-xl":"2"}},[r("header",{staticClass:"py-2 pt-2 py-lg-3 pt-lg-5"},[r("b-img",{staticClass:"d-none d-lg-inline",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",height:"90",alt:""}}),t._v(" "),r("h2",{staticClass:"mb-5 pt-3"},[r("small",{staticClass:"text-muted"},[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.address.subtitle))])]),r("br"),t._v(" "),r("span",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.address.title)}})]),t._v(" "),r("address",[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.address.content.city))]),r("br"),t._v(" "),r("span",[t._v(t._s(this.$store.state.jsonData.sections.address.content.address))]),r("br"),t._v(" "),r("a",{attrs:{href:"tel:"+this.$store.state.jsonData.sections.address.content.phone.link}},[t._v(t._s(this.$store.state.jsonData.sections.address.content.phone.number))]),r("br"),t._v(" "),r("a",{attrs:{href:"tel:"+this.$store.state.jsonData.sections.address.content.phone.link2}},[t._v(t._s(this.$store.state.jsonData.sections.address.content.phone.number2))]),r("br")])],1)]),t._v(" "),r("b-col",{staticClass:"px-0",attrs:{cols:"12",lg:"7"}},[r("iframe",{staticStyle:{border:"none"},attrs:{src:"https://snazzymaps.com/embed/281438",width:"100%",height:"600px"}})])],1)],1)}),[],!1,null,null,null);e.default=c.exports;installComponents(c,{Address:r(279).default})},291:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=291},292:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=292},293:function(t,e,r){"use strict";r.r(e);var n={components:{Navbar:r(274).default},data:function(){return{myData:this.myData,publicPath:"http://dev.promoe.com.sa/"}},mounted:function(){}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"p-2 py-lg-3 bg-white overflow-hidden",attrs:{id:"hero"}},[r("Navbar"),t._v(" "),r("div",{staticClass:"layer layer_1",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_1.png)"}}),t._v(" "),r("div",{staticClass:"layer layer_2",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_2.png)"}}),t._v(" "),r("div",{staticClass:"layer layer_3",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_3.png)"}}),t._v(" "),r("div",{staticClass:"layer layer_4",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_4.png)"}}),t._v(" "),r("div",{staticClass:"layer layer_5 animate__animated animate__shakeX animate__infinite",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_5.png)"}}),t._v(" "),r("h1",{staticClass:"text-center mt-5",staticStyle:{"z-index":"6",position:"relative"},domProps:{innerHTML:t._s(this.$store.state.jsonData.general.slogan)}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(274).default})},294:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"px-2 py-lg-5 bg-white",attrs:{id:"whyus"}},[r("b-container",[r("header",[r("h2",{staticClass:"text-center mb-5 pt-3"},[r("small",{staticClass:"text-muted"},[r("strong",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.aboutus.subtitle)}})]),r("br"),t._v(" "),r("span",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.aboutus.title)}})])]),t._v(" "),r("b-container",[r("b-row",{staticClass:"my-2 my-lg-5 py-2 py-lg-5"},[t._l(this.$store.state.jsonData.sections.aboutus.content,(function(e){return r("b-col",{key:e.number,staticClass:"px-2 px-lg-5",attrs:{cols:"12",lg:"6"}},[r("div",{staticClass:"icon"},[r("span",{staticClass:"text-muted pr-3 d-none d-md-inline"},[t._v(t._s(e.number))]),t._v(" "),r("b-img",{attrs:{src:e.icon,fluid:"",height:"54",alt:"Responsive image"}})],1),t._v(" "),r("h4",{staticClass:"text-muted my-4"},[r("strong",[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"p-0 pl-lg-5"},[t._v(t._s(e.text))])])})),t._v(" "),r("div",{staticClass:"line"})],2),t._v(" "),r("div",{staticClass:"about-us-btn"},[r("button",[r("a",{attrs:{href:"/AboutUs"}},[t._v("About Us")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-2 py-xl-5",attrs:{id:"video"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{staticClass:"p-2 p-xl-5 text-center text-xl-right",attrs:{xl:"3","offset-xl":"1"}},[r("header",[r("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),t._v(" "),r("h2",{staticClass:"insight2 text-dark mb-1 mb-lg-5 pb-2 pt-3"},[r("small",{staticClass:"text-muted mt-5"},[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.video.subtitle))])]),r("br"),t._v(" "),r("span",{staticStyle:{color:"#343a40 !important"},domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.video.title)}})]),t._v(" "),r("button",{attrs:{id:"youtube-btn"}},[r("a",{staticStyle:{color:"white !important"},attrs:{href:"https://www.youtube.com/channel/UCwx88crK6W9gZFxwcolU_dQ",target:"_blank"}},[t._v("View More On YOUTUBE")])])],1)]),t._v(" "),r("b-col",{staticClass:"youtube-video",attrs:{xl:"8"}},[r("b-embed",{attrs:{type:"video",aspect:"16by9",controls:"",poster:t.publicPath+this.$store.state.jsonData.sections.video.content.poster}},[r("source",{attrs:{src:t.publicPath+this.$store.state.jsonData.sections.video.content.url,type:"video/mp4"}})])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}},methods:{letterIcon:function(path){return r(291)("@"+path)},imglink:function(t){return r(292)("..".concat(t))}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-1 pb-5 py-lg-5 bg-white overflow-hidden",attrs:{id:"services"}},[r("header",{staticClass:"py-2 py-lg-3 text-center bg-white pt-5"},[r("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),t._v(" "),r("h2",{staticClass:"insight2 text-dark mb-2 mb-lg-5 pb-2 pt-3"},[r("strong",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.services.title)}}),r("br"),t._v(" "),r("small",{staticClass:"text-muted"},[r("strong",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.services.subtitle)}})])])],1),t._v(" "),r("b-container",[r("b-row",{staticClass:"text-center"},[r("b-col",{attrs:{cols:"12"}},[r("carousel",{attrs:{loop:!0,paginationEnabled:!1,perPage:1,perPageCustom:[[600,2],[900,3],[1199,4]]}},t._l(this.$store.state.jsonData.sections.services.content,(function(e){return r("slide",{key:e.title,staticClass:"p-1"},[r("b-card",{staticClass:"py-3",style:{backgroundImage:"url("+t.publicPath+e.background}},[r("b-card-text",[r("h4",{staticClass:"mb-4",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("p",{domProps:{textContent:t._s(e.breif)}})])],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pb-5",attrs:{id:"work"}},[r("header",{staticClass:"py-3 text-center bg-white pt-5"},[r("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),t._v(" "),r("h2",{staticClass:"insight2 text-dark mb-5 pb-2 pt-3"},[r("small",{staticClass:"text-muted mt-5"},[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.work.subtitle))])]),r("br"),t._v(" "),r("span",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.work.title)}})])],1),t._v(" "),r("b-row",{staticClass:"pt-1 pt-lg-5",attrs:{"no-gutters":""}},t._l(this.$store.state.jsonData.sections.work.content,(function(e,n){return r("b-col",{key:e.title,staticClass:"px-0",class:{"d-none d-lg-block":n+1>3},attrs:{cols:"12",lg:"3"}},[r("div",{staticClass:"member-bg",style:{backgroundImage:"url("+t.publicPath+e.picture}},[r("div",{staticClass:"bio p-4"},[r("div",[r("h6",[t._v(t._s(e.project_name))]),t._v(" "),r("p",[t._v(t._s(e.client_name))])])])])])})),1),t._v(" "),r("b-row",{staticClass:"mb-3 d-block d-lg-none py-5 text-center",attrs:{"no-gutters":""}},[r("b-col",[r("a",{staticClass:"btn btn-primary py-3 px-4 border-0 text-dark font-weight-normal",staticStyle:{color:"white !important"},attrs:{role:"button",href:"#"}},[t._v("SEE MORE")])])],1),t._v(" "),r("svg",{attrs:{id:"special",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[r("polygon",{staticClass:"svg--sm",attrs:{fill:"white",points:"0,0 30,100 65,21 90,100 100,75 100,100 0,100"}}),t._v(" "),r("polygon",{staticClass:"svg--lg",attrs:{fill:"white",points:"0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"}})])],1)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-2 py-md-5 bg-white text-center",attrs:{id:"ourclients"}},[r("header",[r("b-img",{staticClass:"d-none d-md-inline pt-3",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),t._v(" "),r("h2",{staticClass:"pt-3"},[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.clients.title))]),r("br"),t._v(" "),r("small",{staticClass:"text-muted"},[r("strong",[t._v(t._s(this.$store.state.jsonData.sections.clients.subtitle))])])])],1),t._v(" "),r("b-container",{staticClass:"py-3 py-md-5"},[r("b-row",{staticClass:"text-center justify-content-md-center",attrs:{"no-gutters":""}},t._l(this.$store.state.jsonData.sections.clients.content,(function(e){return r("b-col",{key:e.client_name,attrs:{cols:"4",md:"3",lg:"2"}},[r("b-img",{attrs:{src:t.publicPath+e.logo,fluid:"",alt:e.client_name}})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-5 text-center separatorArrow bg-white overflow-hidden",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/getstarted/getstarted.png)"},attrs:{id:"getstarted"}},[r("header",[r("b-img",{staticClass:"pt-3 d-none d-lg-inine",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),t._v(" "),r("h2",{staticClass:"insight2 text-dark mb-5 pb-2 pt-3"},[r("small",{staticClass:"text-muted mt-5"},[r("span",{domProps:{innerHTML:t._s(this.$store.state.jsonData.sections.getstarted.title)}})]),r("br"),t._v(" "),r("strong",[t._v(t._s(this.$store.state.jsonData.sections.getstarted.subtitle))])])],1),t._v(" "),r("b-container",[r("b-row",[r("b-col",{staticClass:"mb-5 mb-lg-0 text-lg-right",attrs:{cols:"12",lg:"6"}},[r("a",{staticClass:"btn btn-success py-3 px-5 text-dark border-0 font-weight-normal",attrs:{role:"button",href:"#contact"}},[t._v("REQUEST CONSULTATION")])]),t._v(" "),r("b-col",{staticClass:"text-lg-left",attrs:{cols:"12",lg:"6"}},[r("a",{staticClass:"btn btn-danger py-3 px-5 text-white border-0 font-weight-normal",attrs:{role:"button",href:t.publicPath+this.$store.state.jsonData.sections.getstarted.content.profile_link}},[r("i",{staticClass:"far fa-file-pdf mr-2"}),t._v(" DOWNLOAD PROFILE")])])],1)],1),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-6 mb-5 mb-lg-0 text-lg-right"}),this._v(" "),e("div",{staticClass:"col-12 col-lg-6 text-lg-left"})])])}],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-white pt-5 mt-5  overflow-hidden",attrs:{id:"instagram"}},[e("b-container",[e("b-row",{staticClass:"d-flex align-items-stretch"},[e("b-col",{staticClass:"pr-0 pr-lg-5 text-center text-lg-right text",style:{},attrs:{cols:"12",lg:"6","offset-lg":"1"}},[e("header",[e("h2",{staticClass:"mb-5 pt-3"},[e("span",{domProps:{innerHTML:this._s(this.$store.state.jsonData.sections.instagram.title)}}),e("br"),this._v(" "),e("small",{staticClass:"text-muted"},[e("strong",{domProps:{textContent:this._s(this.$store.state.jsonData.sections.instagram.subtitle)}})])])]),this._v(" "),e("a",{staticClass:"btn btn-primary border-0 my-4 px-5 py-3",attrs:{href:this.$store.state.jsonData.general.social_accounts[1].link,role:"button"}},[this._v("Click Here")])]),this._v(" "),e("b-col",{staticClass:"mobile",style:{backgroundImage:"url("+this.publicPath+"/assets/imgs/instagram/mobile1.png)"},attrs:{cols:"12",lg:"5"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);var n={},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-2 py-md-5 text-white text-center overflow-hidden",attrs:{id:"contact"}},[r("b-container",{staticClass:"mt-5"},[r("header",[r("h2",{staticClass:"mb-5 pt-3"},[t._v("\n        Ready For Your"),r("strong",[t._v(" FUTURE?")]),r("br"),t._v(" "),r("small",{},[t._v("Contact "),r("strong",[t._v("Us")])])])]),t._v(" "),r("form",{staticClass:"needs-validation",attrs:{action:"https://formsubmit.co/contact@promoe.com.sa",method:"POST",id:"contact-form",novalidate:""}},[r("div",{staticClass:"form-group "},[r("input",{staticClass:"form-control",attrs:{type:"name",id:"name",placeholder:"Name",name:"name"}})]),t._v(" "),r("div",{staticClass:"form-group form-row"},[r("div",{staticClass:"col-12 col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",name:"email"}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"website",id:"website",placeholder:"Website",name:"website"}})])]),t._v(" "),r("div",{staticClass:"form-group form-row"},[r("div",{staticClass:"col-12 col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"tel",id:"phonenumber",placeholder:"+966-5.....",name:"phonenumber"}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mb-2"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"business",placeholder:"Your Business Name",name:"business"}})])]),t._v(" "),r("div",{staticClass:"form-group form-row"},[r("div",{staticClass:"col-12 mb-2"},[r("textarea",{staticClass:"form-control",attrs:{rows:"3",type:"text",id:"message",placeholder:"A breif Message",name:"message"}})])]),t._v(" "),r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-primary border-0 my-4 px-5 py-3 font-weight-normal",attrs:{type:"submit"}},[t._v("GET IN TOUCH")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,r){"use strict";r.r(e);var n={components:{},mounted:function(){},head:function(){return{title:"Promotion Efficiency"}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("Hero"),t._v(" "),r("AboutUs"),t._v(" "),r("Video"),t._v(" "),r("Services"),t._v(" "),r("Work"),t._v(" "),r("Clients"),t._v(" "),r("GetStarted"),t._v(" "),r("Instagram"),t._v(" "),r("Address"),t._v(" "),r("Contactus")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:r(293).default,AboutUs:r(294).default,Video:r(295).default,Services:r(296).default,Work:r(297).default,Clients:r(298).default,GetStarted:r(299).default,Instagram:r(300).default,Address:r(279).default,Contactus:r(301).default})}}]);