System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(e){"use strict";var t,r,n,i,a,s,o,l,c,u;return{setters:[function(e){t=e.r;r=e.f;n=e.h;i=e.H;a=e.c},function(e){s=e.B;o=e.h;l=e.r;c=e.J;u=e.C}],execute:function(){var h=undefined&&undefined.__decorate||function(e,t,r,n){var i=arguments.length,a=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)if(s=e[o])a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a;return i>3&&a&&Object.defineProperty(t,r,a),a};var d=e("huk_breadcrumb",function(){function e(e){t(this,e);this.variant="";this.modifier="";this.breadcrumbItems=[];this.showGradient=false;this.mode=r(this);this.componentName="breadcrumb"}e.prototype.componentDidRender=function(){this.handleGradient()};e.prototype.handleGradient=function(){var e=this.breadcrumbItems.length>1;var t=this.element.querySelector("ul");if(!t){return}var r=this.element.getBoundingClientRect();var n=t.getBoundingClientRect();var i=n.width;var a=0;[].forEach.call(this.element.querySelectorAll("li"),(function(e){a+=e.clientWidth}));this.showGradient=e&&i<=a||e&&r.width<=i};e.prototype.renderLi=function(e,t){var r=t===0;var i=t===this.breadcrumbItems.length-1;var a=this.breadcrumbItems.length===1;return n("li",{class:s(this,"li")},r&&n("a",{class:s(this,"a"),href:e.href,title:e.label},n("span",{class:s(this,"span")})),!r&&!i&&n("a",{class:s(this,"a"),href:e.href,title:e.label},e.label),i&&!a&&n("span",{class:s(this,"span"),title:e.label},e.label))};e.prototype.renderHukde=function(){var e=this;return n("nav",{class:s(this,"nav")},this.breadcrumbItems.map((function(t,r){return r!==e.breadcrumbItems.length-1?n("a",{class:s(e,"item"),href:t.href},t.label):n("span",{class:s(e,"item")},t.label)})))};e.prototype.renderHuk24=function(){var e=this;return n("ul",{class:s(this,"ul")},this.breadcrumbItems.map((function(t,r){return e.renderLi(t,r)})))};e.prototype.render=function(){if(!(this.breadcrumbItems.length>0)){return null}var e=o({componentName:this.componentName,variant:this.variant,modifier:[this.modifier,this.showGradient&&"show-gradient",this.breakpoint.isMobile()&&"hidden"],additionalClasses:["container"]});return n(i,{class:e},l(this))};Object.defineProperty(e.prototype,"element",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.breadcrumb{display:none;position:relative;z-index:3000;padding:1rem 12px}\@media (min-width:768px){.breadcrumb{padding:2rem 12px}.breadcrumb.hydrated{display:block}}.breadcrumb__ul{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;padding:0;list-style-type:none;list-style-position:inside;border-radius:1rem;border:.0625rem solid #cbcfd2;height:32px;overflow:hidden}\@media (max-width:767.98px){.breadcrumb__ul{max-width:21.25rem}}.breadcrumb__li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;font-size:13px;line-height:1;background-color:#f7f7f8;border:0}.breadcrumb__li:before{right:-8px;border-left:8px solid #cbcfd2}.breadcrumb__li:after,.breadcrumb__li:before{position:absolute;content:\"\";top:-1px;z-index:1;display:block;width:0;height:0;border-top:16px solid transparent;border-bottom:17px solid transparent}.breadcrumb__li:after{right:-7px;border-left:8px solid #f7f7f8}.breadcrumb__li .breadcrumb__a,.breadcrumb__li .breadcrumb__span{display:block;cursor:pointer;padding:.0625rem 1rem 0;color:#808a90;white-space:nowrap;text-transform:uppercase}.breadcrumb__li:hover{background-color:#e7e9ea}.breadcrumb__li:hover .breadcrumb__a{text-decoration:none;color:#68747a}.breadcrumb__li:hover:after{border-left-color:#e7e9ea}.breadcrumb__li:active .breadcrumb__a{color:#263238}.breadcrumb__li:first-child .breadcrumb__a{padding:.25rem .9375rem}.breadcrumb__li:first-child .breadcrumb__a .breadcrumb__span{background-size:100% 100%;background-size:contain;background-position:50%;content:\"\";background-repeat:no-repeat;display:inline;background-image:url(/stylelib/2_9/img/house.svg);display:inline-block;padding:0;color:#35444c;height:1.3125rem;width:1.125rem}.breadcrumb__li:not(:only-child):first-child .breadcrumb__a{padding-right:.5rem}.breadcrumb__li:not(:only-child):last-child{background-color:#fba308;cursor:default}.breadcrumb__li:not(:only-child):last-child .breadcrumb__span{color:#fff;padding-left:1.125rem;padding-right:1.125rem}.breadcrumb__li:not(:only-child):last-child:hover{background-color:#fb9105}.breadcrumb__li:not(:only-child):last-child:active{background-color:#f0670a}.breadcrumb__li:only-child{background-color:#f7f7f8;cursor:pointer}.breadcrumb__li:only-child:hover{background-color:#e7e9ea}.breadcrumb__li:last-child:after,.breadcrumb__li:last-child:before,.breadcrumb__li:nth-last-child(2):before,.breadcrumb__li:only-child:after,.breadcrumb__li:only-child:before{display:none}.breadcrumb--show-gradient .breadcrumb__ul{display:-ms-flexbox;display:flex}.breadcrumb--show-gradient .breadcrumb__ul:after{display:block;position:absolute;content:\"\";top:0;bottom:0;right:-1rem;z-index:1;width:4rem;background-image:-webkit-gradient(linear,left top,right top,from(transparent),to(#fba308));background-image:linear-gradient(90deg,transparent,#fba308)}.breadcrumb--hidden{display:none}"},enumerable:true,configurable:true});return e}());h([c()],d.prototype,"breadcrumbItems",void 0);h([u()],d.prototype,"breakpoint",void 0)}}}));