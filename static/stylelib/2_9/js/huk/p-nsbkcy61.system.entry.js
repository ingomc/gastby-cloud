System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(t){"use strict";var e,i,r,n;return{setters:[function(t){e=t.r;i=t.h;r=t.H},function(t){n=t.B}],execute:function(){var s=t("huk_list_item",function(){function t(t){e(this,t);this.componentName="list-item"}t.prototype.componentWillLoad=function(){if(!!this.icon&&!this.marker){this.marker="icon"}if(!this.marker){this.marker="dot"}};t.prototype.renderMarker=function(){if(this.marker==="dot"){return i("div",{class:n(this,"marker","dot")},i("div",{class:n(this,"dot")}))}if(this.marker=="icon"&&!!this.icon){return i("div",{class:n(this,"marker","icon")},i("huk-icon",{icon:this.icon}))}};t.prototype.render=function(){return i(r,{class:this.componentName},this.renderMarker(),i("div",{class:n(this,"content")},i("slot",null)))};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.list-item{display:-ms-flexbox;display:flex}.list-item__marker--dot{min-width:1.5rem}.list-item__dot{position:relative;top:.4em;left:0;background-color:#fba308;border-radius:50%;width:.35em;height:.35em}.list-item__marker--icon{min-width:1.75em}.list-item__marker--icon huk-icon{display:block;width:1.25em;height:1.25em}"},enumerable:true,configurable:true});return t}())}}}));