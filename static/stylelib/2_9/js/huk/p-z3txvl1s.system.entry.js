System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(t){"use strict";var e,i,s,n,r;return{setters:[function(t){e=t.r;i=t.h;s=t.H},function(t){n=t.B;r=t.F}],execute:function(){var a=(new Date).getFullYear();var o=t("huk_auth_footer",function(){function t(t){e(this,t);this.componentName="auth-footer";this.copyright="© "+a+" HUK-COBURG Digitale Services GmbH"}t.prototype.render=function(){var t=this;return i(s,{class:this.componentName},i("div",{class:"footer"},this.links&&this.links.length>0&&i("div",{class:n(this,"links-container")},this.links.map((function(e,s){return i(r,null,s>0&&i("span",{class:n(t,"link-separator")},"•"),i("huk-link",{modifier:"footer",variant:"",href:e.href,label:e.label,target:"_blank"}))}))),!!this.claim&&i("div",{class:n(this,"claim")},this.claim),i("div",{class:n(this,"copy")},this.copyright)))};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.auth-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;text-align:center;padding-top:20rem;padding-bottom:1rem}.auth-footer__claim,.auth-footer__copy{color:#97a0a5;display:block;font-size:13px;line-height:1.2}.auth-footer__claim{color:#68747a;margin-bottom:1rem}.auth-footer__links-container{margin-bottom:.25rem}.auth-footer__link-separator{color:#35444c;font-weight:700;font-size:19px;line-height:13px;padding:0;vertical-align:text-bottom;display:inline-block;margin:0 .375rem}"},enumerable:true,configurable:true});return t}())}}}));