(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{publicPath:"http://dev.promoe.com.sa/"}},mounted:function(){function t(){var header=document.querySelector("section#hero header"),nav=document.querySelector("section#hero header nav");(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>100?(header.classList.add("sticky"),nav.classList.remove("navbar-dark"),nav.classList.add("navbar-light"),nav.classList.add("text-white"),nav.classList.remove("navbar-dark")):(header.classList.remove("sticky"),nav.classList.add("navbar-dark"),nav.classList.remove("navbar-light"),nav.classList.remove("text-white"),nav.classList.add("navbar-dark"))}document.addEventListener("scroll",(function(){t()})),t()},methods:{}},l=r(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"container"},[r("b-navbar",{staticClass:"shadow text-white p-2 rounded-lg",attrs:{type:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("b-img",{attrs:{src:t.publicPath+"/assets/imgs/logo/pe_logo_primary_dark_bg.svg",fluid:"",alt:"Promo Logo",height:"55",width:"55"}})],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"transparent",right:""}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("b-sidebar",{attrs:{id:"sidebar-variant",title:"",backdrop:"",width:"100%","bg-variant":"dark","text-variant":"light",shadow:""}},[r("div",{staticClass:"overlay-content"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#whyus"}},[t._v("Why Us")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#services"}},[t._v("Services")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"#work"}},[t._v("Portfolio")]),t._v(" "),r("b-link",{attrs:{href:t.publicPath+"ContactUS"}},[t._v("Contact Us")]),t._v(" "),r("hr"),t._v(" "),r("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs Application")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var o={name:"RequestFormhtml"},l=r(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"RequestFormhtml"}},[r("header",{staticClass:"head-image"}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"wrapper"},[r("b-form",{attrs:{action:"https://formsubmit.co/contact@promoe.com.sa",method:"POST"}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Full Name:","label-for":"name",description:"الاسم الثلاثي"}},[r("b-form-input",{attrs:{id:"name",type:"text",placeholder:"Example: Ahmed Hady Ibrahim",required:""}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Mobile Phone:","label-for":"phone",description:"رقم الهاتف"}},[r("b-form-input",{attrs:{id:"phone",type:"text",placeholder:"Example: +966 5511111111",required:""}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-3",label:"Email:","label-for":"email",description:"البريد الإلكتروني"}},[r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Example: contact@promoe.com.sa",required:""}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-4",label:"Website:","label-for":"text",description:"الموقع الإلكتروني"}},[r("b-form-input",{attrs:{id:"website",type:"text",placeholder:"Example: https://promoe.com.sa"}})],1),t._v(" "),r("hr"),t._v(" "),r("b-form-group",{attrs:{label:"The Service"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.ariaDescribedby;return[r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Photography"}},[t._v("Photography")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Videography"}},[t._v("Videography")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Designing"}},[t._v("Designing")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Copywriting"}},[t._v("Copywriting")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"SocialMediaAccountsManagement"}},[t._v("Social Media Accounts Management")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Marketing"}},[t._v("Marketing")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"Advertising"}},[t._v("Advertising")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"IT"}},[t._v("IT")]),t._v(" "),r("b-form-radio",{attrs:{"aria-describedby":o,name:"project-type",value:"EventsManagement"}},[t._v("Events Management")])]}}])}),t._v(" "),r("hr",{staticClass:"pt-3"}),t._v(" "),r("b-form-group",{attrs:{id:"input-group-5",label:"Project Name","label-for":"Project-Name",description:"Please, write project name in Arabic and English | إسم المشروع بالعربي والانجليزي"}},[r("b-form-input",{attrs:{id:"Project-Name",type:"text",placeholder:"Example: Shot Coffeeshop"}})],1),t._v(" "),r("label",{staticClass:"pt-3"},[t._v("Project Type")]),t._v(" "),r("select",{staticClass:"form-select",attrs:{"aria-label":"Default select example"}},[r("option",{attrs:{selected:"",value:"food"}},[t._v("Cafe | مقهى")]),t._v(" "),r("option",{attrs:{value:"realstate"}},[t._v("Resturant | مطعم")]),t._v(" "),r("option",{attrs:{value:"advertising"}},[t._v("Real State | عقارات")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("Food | طعام")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("Products | منتجات")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("Services | خدمات")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("Technique | تقنية")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("Other | اخر")])]),t._v(" "),r("b-form-group",{staticClass:"pt-3",attrs:{id:"input-group-5",label:"About Project","label-for":"aboutproject",description:"نبذة عن المشروع وجميع التفاصيل"}},[r("div",{staticClass:"mb-3"},[r("textarea",{staticClass:"form-control",attrs:{id:"aboutproject",name:"aboutproject",rows:"3"}})])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var o={},l=r(47),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"RequestServices"}},[e("section",{staticClass:"p-2 py-lg-3 bg-white overflow-hidden h-100",attrs:{id:"hero"}},[e("header",{staticClass:"container sticky"},[e("header",{staticClass:"wrap"},[e("Navbar")],1)])]),this._v(" "),e("RequestFormhtml")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(274).default,RequestFormhtml:r(278).default})}}]);