System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(i){"use strict";var t,e,s,a,h;return{setters:[function(i){t=i.r;e=i.h;s=i.H},function(i){a=i.h;h=i.B}],execute:function(){var n=i("huk_promobox",function(){function i(i){t(this,i);this.variant="";this.modifier="";this.badgeType="primary";this.badgeSize="medium";this.headLine="";this.headlineTag="div";this.icon="";this.imagePath="";this.imageAlt="";this.componentName="promobox"}i.prototype.render=function(){var i=a({componentName:this.componentName,variant:this.variant,modifier:[this.modifier,(this.icon||this.imagePath)&&"with-background"]});var t=this.headlineTag;return e(s,{class:i},!!this.badgeLabel&&e("div",{class:h(this,"badge")},e("huk-badge",{type:this.badgeType,size:this.badgeSize,label:this.badgeLabel})),e(t,{class:h(this,"headline"),innerHTML:this.headLine}),e("div",{class:h(this,"text")},e("slot",null)),(!!this.icon||!!this.imagePath)&&e("div",{class:h(this,"asset")},!this.imagePath&&this.icon&&e("huk-icon",{icon:this.icon}),!!this.imagePath&&e("img",{class:h(this,"asset__img"),src:this.imagePath,alt:this.imageAlt})))};Object.defineProperty(i,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.promobox{display:block;position:relative}.promobox__badge{position:absolute;top:-1rem}.promobox__headline{padding-top:2rem;font-weight:700;font-size:19px;padding-bottom:1rem}.promobox__text a:after{background-size:100% 100%;background-size:contain;background-position:50%;content:\"\";background-repeat:no-repeat;display:inline;background-image:url(/stylelib/2_9/img/arrow-right_primary.svg);padding-left:.5rem;margin-left:.25rem}.promobox__asset{display:none}\@media (min-width:768px){.promobox__asset{display:block;position:absolute;right:0;bottom:0}}.promobox__asset__img{display:block;max-width:120px;width:100%}.promobox--with-padding{padding:2rem 1rem}.promobox--with-padding .promobox__headline{padding-top:0}.promobox--with-padding .promobox__text{max-width:43.75rem}\@media (min-width:768px){.promobox--with-padding .promobox__text{padding-right:8rem}}.promobox--with-background:after{position:absolute;content:\"\";background-color:#f7f7f8;top:0;bottom:0;left:0;right:0;z-index:-1;border-radius:.5rem}\@media (min-width:768px){.promobox--with-background:after{-webkit-clip-path:polygon(0 0,100% 0,100% 60%,87% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 60%,87% 100%,0 100%)}}"},enumerable:true,configurable:true});return i}())}}}));