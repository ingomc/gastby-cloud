System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(t){"use strict";var e,i,s,n,a,h,l;return{setters:[function(t){e=t.r;i=t.e;s=t.h;n=t.H},function(t){a=t.i;h=t.B;l=t.h}],execute:function(){var r=t("huk_vm_box",function(){function t(t){e(this,t);this.variant="your-consultant";this.topline="";this.headline="";this.text="";this.vmId="";this.vmName="";this.ctaLabel="";this.ctaHref="";this.subCtaLabel="";this.subCtaHref="";this.labelPhone="";this.labelMessage="";this.labelDetails="";this.vmImage="";this.componentName="vm-box";this.getImagePath=function(t){return"/files/vmgs_bilder/"+t+"_profil_gross"+(a()?"@2x":"")+".jpg"};this.consultant={topline:"Ihr persönlicher Berater",labelPhone:"Anrufen",labelMessage:"Schreiben",labelDetails:"Details"};this.editConsultant={headline:"Beratervorschlag",text:function(t){return"Möchten Sie "+t+" als persönlicher Berater auswählen?"},ctaLabel:"Berater auswählen",subCtaLabel:"Berater ändern"};this.findConsultant={topline:"Faire und kompetente Beratung direkt vor Ort",text:"Haben Sie noch keinen persönlichen Berater?",ctaLabel:"Jetzt Berater finden"};this.content="";this.clickCta=i(this,"clickCta",7);this.clickSubCta=i(this,"clickSubCta",7);this.clickPhone=i(this,"clickPhone",7);this.clickMessage=i(this,"clickMessage",7);this.clickDetails=i(this,"clickDetails",7)}t.prototype.loadImage=function(){var t=this;if(!!this.vmId){var e=new Image;e.onload=function(){t.vmImage="url("+e.src+")"};e.src=this.getImagePath(this.vmId)}};t.prototype.componentWillLoad=function(){this.loadImage();this.handleRenderVariant()};t.prototype.renderImage=function(){return s("div",{class:h(this,"image")},s("div",{class:h(this,"vm-image"),style:{backgroundImage:this.vmImage}}))};t.prototype.renderBody=function(){return s("div",{class:h(this,"body")},!!this.topline&&s("div",{class:h(this,"topline")},this.topline),!!this.headline&&s("div",{class:h(this,"headline")},this.headline,!!this.helptext&&s("span",{class:h(this,"helpbutton")},s("huk-helpbutton",{icon:"information",iconClose:"close-circle--invert",helptext:this.helptext}))),!!this.text&&s("div",{class:h(this,"text"),innerHTML:this.text}))};t.prototype.renderButtons=function(){var t=this;return s("div",{class:h(this,"buttons")},s("div",{class:h(this,"button","phone"),onClick:function(){return t.clickPhone.emit()},title:this.labelPhone||this.consultant.labelPhone}),s("div",{class:h(this,"button","message"),onClick:function(){return t.clickMessage.emit()},title:this.labelMessage||this.consultant.labelMessage}),s("div",{class:h(this,"button","details"),onClick:function(){return t.clickDetails.emit()},title:this.labelDetails||this.consultant.labelDetails}))};t.prototype.renderCTA=function(){var t=this;return s("div",{class:h(this,"cta")},!!this.ctaLabel&&s("huk-button",{variant:"cta",label:this.ctaLabel,href:this.ctaHref,onClick:function(){return t.clickCta.emit()}}),!!this.subCtaLabel&&s("huk-button",{modifier:"link",label:this.subCtaLabel,href:this.subCtaHref,onClick:function(){return t.clickSubCta.emit()}}))};t.prototype.handleRenderVariant=function(){switch(this.variant){case"edit-consultant":if(!this.headline){this.headline=this.editConsultant.headline}var t=!!this.vmName?'<span class="'+h(this,"text__vm-name")+'">'+this.vmName+"</span>":"";if(!this.text&&!!t){this.text=this.editConsultant.text(t)}if(!!this.text&&!!t){this.text=this.text.replace("${vmName}",t)}if(!this.ctaLabel){this.ctaLabel=this.editConsultant.ctaLabel}if(!this.subCtaLabel){this.subCtaLabel=this.editConsultant.subCtaLabel}this.content=this.renderCTA();break;case"find-consultant":if(!this.topline){this.topline=this.findConsultant.topline}if(!this.text){this.text=this.findConsultant.text}if(!this.ctaLabel){this.ctaLabel=this.findConsultant.ctaLabel}this.content=this.renderCTA();break;case"your-consultant":case"your-consultants":if(!this.topline){this.topline=this.consultant.topline}if(!!this.vmName){this.headline=this.vmName}this.content=this.renderButtons();break}};t.prototype.render=function(){var t=l({componentName:this.componentName,variant:this.variant,modifier:[!!this.vmImage&&"with-image"]});return s(n,{class:t},s("div",{class:h(this,"wrap")},this.renderImage(),this.renderBody(),this.content))};Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.vm-box{display:block;position:relative;padding-top:2rem}.vm-box__wrap{padding-top:4.375rem;border-radius:.25rem;border:1px solid #00abba}.vm-box__image{top:0;position:absolute;left:50%;-webkit-transform:translatex(-50%);transform:translatex(-50%);width:100px;height:100px;border-radius:1rem;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-image:url(/stylelib/2_9/img/vm-box--single-consultant.svg)}.vm-box--your-consultants .vm-box__image{background-image:url(/stylelib/2_9/img/vm-box--multiple-consultant.svg)}.vm-box__vm-image{background-position:50%;background-size:cover;-webkit-transform-origin:50% top;transform-origin:50% top;-webkit-transform:scale(1.2);transform:scale(1.2);height:100%;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out;opacity:0}.vm-box--with-image .vm-box__vm-image{opacity:1}.vm-box__body{text-align:center;font-size:19px}.vm-box__topline{padding-top:1.5rem;font-weight:700}.vm-box__headline{padding-top:.5rem;font-size:40px;font-weight:700}.vm-box__helpbutton{position:absolute;width:1px;margin-left:.25rem}.vm-box__text{padding-top:1.5rem}.vm-box__buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-bottom:2rem}.vm-box__button{width:64px;height:89px;margin:1rem;cursor:pointer;background-repeat:no-repeat;position:relative}.vm-box__button:after{content:attr(title);width:100%;display:block;font-size:19px;position:absolute;bottom:0;text-align:center}.vm-box__button--phone{background-image:url(/stylelib/2_9/img/vm-box--phone.svg)}.vm-box__button--message{background-image:url(/stylelib/2_9/img/vm-box--message.svg)}.vm-box__button--details{background-image:url(/stylelib/2_9/img/vm-box--details.svg)}.vm-box__cta{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-bottom:.5rem}.vm-box__cta huk-button{margin-bottom:0}.vm-box--edit-consultant .vm-box__body{padding:0 2.5rem}.vm-box--edit-consultant .vm-box__headline{font-size:23px}.vm-box--edit-consultant .vm-box__text{padding-top:1rem}.vm-box--edit-consultant .vm-box__text__vm-name{color:#00abba;font-weight:700}.vm-box--edit-consultant .vm-box__cta{padding-top:2rem}.vm-box--find-consultant.vm-box{padding-bottom:1.5rem}.vm-box--find-consultant .vm-box__wrap{padding-bottom:4rem}.vm-box--find-consultant .vm-box__body{padding:0 2.5rem}.vm-box--find-consultant .vm-box__topline{font-size:23px}.vm-box--find-consultant .vm-box__cta{padding:0;position:absolute;bottom:0;width:100%}"},enumerable:true,configurable:true});return t}())}}}));