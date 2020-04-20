var __awaiter=this&&this.__awaiter||function(e,i,t,s){function n(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,a){function r(e){try{l(s.next(e))}catch(i){a(i)}}function o(e){try{l(s["throw"](e))}catch(i){a(i)}}function l(e){e.done?t(e.value):n(e.value).then(r,o)}l((s=s.apply(e,i||[])).next())}))};var __generator=this&&this.__generator||function(e,i){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},s,n,a,r;return r={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function o(e){return function(i){return l([e,i])}}function l(r){if(s)throw new TypeError("Generator is already executing.");while(t)try{if(s=1,n&&(a=r[0]&2?n["return"]:r[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;if(n=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:t.label++;return{value:r[1],done:false};case 5:t.label++;n=r[1];r=[0];continue;case 7:r=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){t.label=r[1];break}if(r[0]===6&&t.label<a[1]){t.label=a[1];a=r;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(r);break}if(a[2])t.ops.pop();t.trys.pop();continue}r=i.call(e,t)}catch(o){r=[6,o];n=0}finally{s=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js","./p-1ba6e89b.system.js"],(function(e){"use strict";var i,t,s,n,a,r,o;return{setters:[function(e){i=e.r;t=e.h;s=e.H},function(e){n=e.v;a=e.h;r=e.B},function(e){o=e.g}],execute:function(){var l=e("huk_login_section",function(){function e(e){var t=this;i(this,e);this.variant="";this.modifier="";this.forgottenCredentialsLink="";this.forgottenCredentialsLinkText="Zugangsdaten vergessen?";this.loginLabelText="Anmelden";this.passwordLabelText="Passwort/PIN";this.usernameLabelText="Benutzerkennung/-name";this.usernameEmptyError="Benutzerkennung/-name kann nicht leer sein.";this.passwordEmptyError="Passwort/PIN kann nicht leer sein.";this.loginFailedText="Login ist nicht möglich.";this.requestFailedText="Anfrage kann nicht bearbeitet werden.";this.redirectUrlAfterLogin="";this.headLabel="";this.isLoginMenuVisible=true;this.isAuthenticatedMenuActive=false;this.isLoginFailedMessageVisible=false;this.loginFailedMessage="";this.username="";this.password="";this.isPasswordInvalid="not-validated";this.passwordInvalidMessage="";this.isUsernameInvalid="not-validated";this.usernameInvalidMessage="";this.loginLoadingStatus=false;this.visiblePassword=false;this.componentName="login-section";this.redirectPage=function(){var e=n("redirect-to");if(!e){e=t.redirectUrlAfterLogin}if(e.trim()!==""){window.location.href=e}};this.loginUser=function(e){return __awaiter(t,void 0,void 0,(function(){var i;var t=this;return __generator(this,(function(s){switch(s.label){case 0:e.preventDefault();i=false;if(this.username.trim()===""){this.isUsernameInvalid="invalid";this.usernameInvalidMessage=this.usernameEmptyError;i=true}if(this.password.trim()===""){this.isPasswordInvalid="invalid";this.passwordInvalidMessage=this.passwordEmptyError;i=true}if(i){return[2,false]}this.loginLoadingStatus=true;return[4,this.authService.login(this.username,this.password).then((function(){t.isLoginMenuVisible=false;t.username="";t.password="";t.isLoginFailedMessageVisible=false;t.loginFailedMessage="";t.isPasswordInvalid="not-validated";t.isUsernameInvalid="not-validated"})).catch((function(){t.loginFailedMessage=t.loginFailedText;t.isLoginFailedMessageVisible=true;t.passwordInvalidMessage="";t.usernameInvalidMessage="";t.isPasswordInvalid="invalid";t.isUsernameInvalid="invalid"})).then((function(){t.loginLoadingStatus=false}))];case 1:s.sent();return[2,false]}}))}))}}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){switch(i.label){case 0:e=this;return[4,o()];case 1:e.authService=i.sent();return[2]}}))}))};e.prototype.render=function(){var e;var i=this;var n=a({componentName:this.componentName,variant:this.variant,modifier:this.modifier});return t(s,{class:n},t("div",{class:r(this,"wrapper")},t("div",{class:r(this,"head-label")},this.headLabel),t("div",{class:(e={},e[r(this,"unauthenticated")]=true,e["dropdown-visible"]=this.isLoginMenuVisible,e)},t("form",{class:r(this,"login-dropdown"),onSubmit:this.loginUser,autocomplete:"off"},t("huk-input",{onValueChanged:function(e){i.username=e.detail;i.isUsernameInvalid="not-validated";i.isLoginFailedMessageVisible=false},onBlurred:function(){if(i.username===""){i.isUsernameInvalid="not-validated"}else if(i.username.length<6){i.isUsernameInvalid="invalid"}else if(i.username.length>=6){i.isUsernameInvalid="valid"}},name:"username",autocomplete:"off",maxlength:60,value:this.username,label:this.usernameLabelText,modifier:"small",validity:this.isUsernameInvalid,errorMessage:this.usernameInvalidMessage}),t("huk-input",{onValueChanged:function(e){i.password=e.detail;i.isPasswordInvalid="not-validated";i.isLoginFailedMessageVisible=false},onBlurred:function(){if(i.password===""){i.isPasswordInvalid="not-validated"}else if(i.password.length<6){i.isPasswordInvalid="invalid"}else if(i.password.length>=6){i.isPasswordInvalid="valid"}},autocomplete:"off",maxlength:16,value:this.password,label:this.passwordLabelText,modifier:"small",type:!this.visiblePassword?"password":"text",button:!this.visiblePassword?"eye":"eye-disabled",onButtonClicked:function(){i.visiblePassword=!i.visiblePassword},validity:this.isPasswordInvalid,errorMessage:this.passwordInvalidMessage}),this.isLoginFailedMessageVisible&&t("huk-error",{message:this.loginFailedMessage}),t("div",{class:r(this,"button-container")},t("div",{class:r(this,"button-container__left")},t("huk-button",{modifier:"small link cta",href:this.forgottenCredentialsLink,label:this.forgottenCredentialsLinkText})),t("div",{class:r(this,"button-container__right")},t("huk-button",{loading:this.loginLoadingStatus,variant:"cta",modifier:"small forward",label:this.loginLabelText,buttonType:"submit"})))))))};Object.defineProperty(e,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.login-section{display:block;position:relative}.login-section huk-input{margin-bottom:.25rem}.login-section__button-container{display:-ms-flexbox;display:flex}.login-section__button-container__left{-ms-flex:1 0 auto;flex:1 0 auto}.login-section__button-container__right{-ms-flex:0 1 auto;flex:0 1 auto}.login-section--standalone .login-section__wrapper{max-width:43.75rem;margin:auto;border:.0625rem solid #e7e9ea;border-radius:.25rem}.login-section--standalone .login-section__head-label{border-bottom:.0625rem solid #e7e9ea;padding:1rem 1.5rem;text-transform:uppercase;font-weight:700;font-size:16px;color:#35444c}.login-section--standalone .login-section__unauthenticated{padding:1.5rem}"},enumerable:true,configurable:true});return e}())}}}));