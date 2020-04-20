var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(e){i(e)}}function u(t){try{l(r["throw"](t))}catch(e){i(e)}}function l(t){t.done?n(t.value):o(t.value).then(a,u)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return l([t,e])}}function l(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js","./p-1ba6e89b.system.js"],(function(t){"use strict";var e,n,r,o,i,a,u,l;return{setters:[function(t){e=t.r;n=t.h;r=t.e;o=t.H},function(t){i=t.B;a=t.h},function(t){u=t.a;l=t.g}],execute:function(){var s=t("huk_login_button",function(){function t(t){e(this,t);this.label=""}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,u()];case 1:t.ola=e.sent();return[2]}}))}))};t.prototype.render=function(){var t=this;return n("huk-button",{onClicked:function(){return t.ola.login()},icon:"radio--lock",modifier:"small header-login-block",label:this.label})};return t}());var c=t("huk_logout_button",function(){function t(t){var n=this;e(this,t);this.variant="header-only-desktop";this.label="Abmelden";this.loading=false;this.componentName="logout-button";this.logoutAction=function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.loading=true;return[4,this.authService.logout()];case 1:t.sent();this.toggleMenuFlyoutEvent.emit("");this.loading=false;return[2]}}))}))};this.toggleMenuFlyoutEvent=r(this,"toggleMenuFlyoutEvent",7)}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,l()];case 1:t.authService=e.sent();return[2]}}))}))};t.prototype.renderButtonByVariant=function(){switch(this.variant){case"header-only-mobile":return n("span",{class:i(this,"header-mobile"),onClick:this.logoutAction},this.label);case"header-only-desktop":default:return n("span",{class:i(this,"header-desktop")},n("huk-button",{loading:this.loading,onClicked:this.logoutAction,modifier:"inverted forward small",label:this.label,disabled:false}))}};t.prototype.render=function(){var t=a({componentName:this.componentName,variant:this.variant});return n(o,{class:t},this.renderButtonByVariant())};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.logout-button{width:100%;cursor:pointer}.logout-button--header-only-desktop{display:block}\@media (max-width:1023.98px){.logout-button--header-only-desktop{display:none}}.logout-button__header-desktop{position:absolute;bottom:0;width:calc(100% - 3rem);margin:1.5rem}.logout-button__header-mobile{display:block;font-weight:700;font-size:19px;padding:1rem 1rem 1rem 1.25rem;color:#fba308;border-left:.25rem solid transparent}\@media (min-width:1024px){.logout-button__header-mobile{display:none}}.logout-button__header-mobile:hover{text-decoration:none}"},enumerable:true,configurable:true});return t}())}}}));