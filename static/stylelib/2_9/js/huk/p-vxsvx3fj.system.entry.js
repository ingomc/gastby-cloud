System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(t){"use strict";var e,i,n,o,s,c;return{setters:[function(t){e=t.r;i=t.e;n=t.h;o=t.H},function(t){s=t.h;c=t.B}],execute:function(){var r=t("huk_recommendation_label",function(){function t(t){e(this,t);this.helpButtonIcon="information--white";this.helpButtonIconClose="close-circle--invert";this.text="Empfohlen";this.active=true;this.modifier="";this.componentName="recommendation-label";this.clicked=i(this,"clicked",3)}t.prototype.render=function(){var t=s({componentName:this.componentName,modifier:[this.modifier,this.active&&"active"]});return n(o,{class:t},n("div",{class:c(this,"left")},this.text),n("div",{class:c(this,"right")},!!this.helptext&&n("huk-helpbutton",{icon:this.helpButtonIcon,iconClose:this.helpButtonIconClose,helptext:this.helptext})))};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.recommendation-label{-ms-flex-align:center;background-color:#b0b6ba;border-radius:.25rem .25rem 0 0}.recommendation-label,.recommendation-label__left{display:-ms-flexbox;display:flex;align-items:center}.recommendation-label__left{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;font-size:11px;height:2rem;font-weight:700;color:#fff;text-transform:uppercase;white-space:nowrap;padding-left:.5rem;-webkit-transition:background-color .15s ease-in-out 0ms;transition:background-color .15s ease-in-out 0ms}\@media (min-width:768px){.recommendation-label__left{padding-left:1.5rem}}\@media (min-width:576px){.recommendation-label__left{font-size:13px;letter-spacing:.7px;padding-left:1rem}}.recommendation-label__right{position:relative;height:2rem;-ms-flex:0 0 auto;flex:0 0 auto}.recommendation-label huk-helpbutton{position:absolute;top:.45rem;right:.5rem}\@media (min-width:768px){.recommendation-label huk-helpbutton{right:1.5rem}}\@media (min-width:576px){.recommendation-label huk-helpbutton{right:1rem}}.recommendation-label--active{background-color:#fba308}.recommendation-label--text-center .recommendation-label__left{-ms-flex-pack:center;justify-content:center}"},enumerable:true,configurable:true});return t}())}}}));