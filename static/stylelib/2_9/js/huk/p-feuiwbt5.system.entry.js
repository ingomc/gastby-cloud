System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(t){"use strict";var i,e,s,n,o;return{setters:[function(t){i=t.r;e=t.e;s=t.h;n=t.H},function(t){o=t.B}],execute:function(){var d=t("huk_download_box",function(){function t(t){var s=this;i(this,t);this.headline="";this.listItems=[];this.buttonLabel="";this.advice="";this.downloadedText="";this.accordionLabelOpen="";this.accordionLabelClosed="";this.downloaded=false;this.loading=false;this.disabled=false;this.componentName="download-box";this.handleButtonClick=function(){s.buttonClicked.emit()};this.buttonClicked=e(this,"buttonClicked",3)}t.prototype.render=function(){return s(n,{class:this.componentName},s("div",null,s("h2",{class:o(this,"headline")},this.headline),s("huk-accordion-item",{labelClosed:this.accordionLabelClosed,labelOpen:this.accordionLabelOpen,modifier:"tarifrechner"},s("huk-list",{modifier:"icons",items:this.listItems})),!this.downloaded&&s("div",null,s("huk-button",{variant:"cta",modifier:"wide",disabled:this.disabled,loading:this.loading,label:this.buttonLabel,onClicked:this.handleButtonClick}),s("div",{class:o(this,"advice")},this.advice)),this.downloaded&&s("div",{class:o(this,"downloaded")},s("div",{class:o(this,"downloaded__icon")},s("huk-icon",{icon:"success"})),this.downloadedText)))};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.download-box{display:block;margin-bottom:1rem}\@media (min-width:768px){.download-box{margin-bottom:1.5rem}}.download-box__headline{font-size:19px;padding-bottom:1rem}\@media (min-width:576px){.download-box__headline{font-size:23px}}.download-box huk-accordion-item{margin-bottom:2rem}.download-box__advice{color:#97a0a5;margin-top:1.5rem}.download-box__downloaded__icon{text-align:center;font-size:83px;margin-bottom:1rem}"},enumerable:true,configurable:true});return t}())}}}));