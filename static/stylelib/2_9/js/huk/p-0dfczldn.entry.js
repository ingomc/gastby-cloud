import{r as t,e as s,h as i,H as h}from"./p-8988f6c5.js";import{i as e,B as a,h as n}from"./p-0afcd70e.js";const r=class{constructor(i){t(this,i),this.variant="your-consultant",this.topline="",this.headline="",this.text="",this.vmId="",this.vmName="",this.ctaLabel="",this.ctaHref="",this.subCtaLabel="",this.subCtaHref="",this.labelPhone="",this.labelMessage="",this.labelDetails="",this.vmImage="",this.componentName="vm-box",this.getImagePath=t=>`/files/vmgs_bilder/${t}_profil_gross${e()?"@2x":""}.jpg`,this.consultant={topline:"Ihr persönlicher Berater",labelPhone:"Anrufen",labelMessage:"Schreiben",labelDetails:"Details"},this.editConsultant={headline:"Beratervorschlag",text:t=>`Möchten Sie ${t} als persönlicher Berater auswählen?`,ctaLabel:"Berater auswählen",subCtaLabel:"Berater ändern"},this.findConsultant={topline:"Faire und kompetente Beratung direkt vor Ort",text:"Haben Sie noch keinen persönlichen Berater?",ctaLabel:"Jetzt Berater finden"},this.content="",this.clickCta=s(this,"clickCta",7),this.clickSubCta=s(this,"clickSubCta",7),this.clickPhone=s(this,"clickPhone",7),this.clickMessage=s(this,"clickMessage",7),this.clickDetails=s(this,"clickDetails",7)}loadImage(){if(this.vmId){const t=new Image;t.onload=()=>{this.vmImage=`url(${t.src})`},t.src=this.getImagePath(this.vmId)}}componentWillLoad(){this.loadImage(),this.handleRenderVariant()}renderImage(){return i("div",{class:a(this,"image")},i("div",{class:a(this,"vm-image"),style:{backgroundImage:this.vmImage}}))}renderBody(){return i("div",{class:a(this,"body")},!!this.topline&&i("div",{class:a(this,"topline")},this.topline),!!this.headline&&i("div",{class:a(this,"headline")},this.headline,!!this.helptext&&i("span",{class:a(this,"helpbutton")},i("huk-helpbutton",{icon:"information",iconClose:"close-circle--invert",helptext:this.helptext}))),!!this.text&&i("div",{class:a(this,"text"),innerHTML:this.text}))}renderButtons(){return i("div",{class:a(this,"buttons")},i("div",{class:a(this,"button","phone"),onClick:()=>this.clickPhone.emit(),title:this.labelPhone||this.consultant.labelPhone}),i("div",{class:a(this,"button","message"),onClick:()=>this.clickMessage.emit(),title:this.labelMessage||this.consultant.labelMessage}),i("div",{class:a(this,"button","details"),onClick:()=>this.clickDetails.emit(),title:this.labelDetails||this.consultant.labelDetails}))}renderCTA(){return i("div",{class:a(this,"cta")},!!this.ctaLabel&&i("huk-button",{variant:"cta",label:this.ctaLabel,href:this.ctaHref,onClick:()=>this.clickCta.emit()}),!!this.subCtaLabel&&i("huk-button",{modifier:"link",label:this.subCtaLabel,href:this.subCtaHref,onClick:()=>this.clickSubCta.emit()}))}handleRenderVariant(){switch(this.variant){case"edit-consultant":this.headline||(this.headline=this.editConsultant.headline);const t=this.vmName?`<span class="${a(this,"text__vm-name")}">${this.vmName}</span>`:"";!this.text&&t&&(this.text=this.editConsultant.text(t)),this.text&&t&&(this.text=this.text.replace("${vmName}",t)),this.ctaLabel||(this.ctaLabel=this.editConsultant.ctaLabel),this.subCtaLabel||(this.subCtaLabel=this.editConsultant.subCtaLabel),this.content=this.renderCTA();break;case"find-consultant":this.topline||(this.topline=this.findConsultant.topline),this.text||(this.text=this.findConsultant.text),this.ctaLabel||(this.ctaLabel=this.findConsultant.ctaLabel),this.content=this.renderCTA();break;case"your-consultant":case"your-consultants":this.topline||(this.topline=this.consultant.topline),this.vmName&&(this.headline=this.vmName),this.content=this.renderButtons()}}render(){const t=n({componentName:this.componentName,variant:this.variant,modifier:[!!this.vmImage&&"with-image"]});return i(h,{class:t},i("div",{class:a(this,"wrap")},this.renderImage(),this.renderBody(),this.content))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.vm-box{display:block;position:relative;padding-top:2rem}.vm-box__wrap{padding-top:4.375rem;border-radius:.25rem;border:1px solid #00abba}.vm-box__image{top:0;position:absolute;left:50%;-webkit-transform:translatex(-50%);transform:translatex(-50%);width:100px;height:100px;border-radius:1rem;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-image:url(/stylelib/2_9/img/vm-box--single-consultant.svg)}.vm-box--your-consultants .vm-box__image{background-image:url(/stylelib/2_9/img/vm-box--multiple-consultant.svg)}.vm-box__vm-image{background-position:50%;background-size:cover;-webkit-transform-origin:50% top;transform-origin:50% top;-webkit-transform:scale(1.2);transform:scale(1.2);height:100%;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out;opacity:0}.vm-box--with-image .vm-box__vm-image{opacity:1}.vm-box__body{text-align:center;font-size:19px}.vm-box__topline{padding-top:1.5rem;font-weight:700}.vm-box__headline{padding-top:.5rem;font-size:40px;font-weight:700}.vm-box__helpbutton{position:absolute;width:1px;margin-left:.25rem}.vm-box__text{padding-top:1.5rem}.vm-box__buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-bottom:2rem}.vm-box__button{width:64px;height:89px;margin:1rem;cursor:pointer;background-repeat:no-repeat;position:relative}.vm-box__button:after{content:attr(title);width:100%;display:block;font-size:19px;position:absolute;bottom:0;text-align:center}.vm-box__button--phone{background-image:url(/stylelib/2_9/img/vm-box--phone.svg)}.vm-box__button--message{background-image:url(/stylelib/2_9/img/vm-box--message.svg)}.vm-box__button--details{background-image:url(/stylelib/2_9/img/vm-box--details.svg)}.vm-box__cta{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-bottom:.5rem}.vm-box__cta huk-button{margin-bottom:0}.vm-box--edit-consultant .vm-box__body{padding:0 2.5rem}.vm-box--edit-consultant .vm-box__headline{font-size:23px}.vm-box--edit-consultant .vm-box__text{padding-top:1rem}.vm-box--edit-consultant .vm-box__text__vm-name{color:#00abba;font-weight:700}.vm-box--edit-consultant .vm-box__cta{padding-top:2rem}.vm-box--find-consultant.vm-box{padding-bottom:1.5rem}.vm-box--find-consultant .vm-box__wrap{padding-bottom:4rem}.vm-box--find-consultant .vm-box__body{padding:0 2.5rem}.vm-box--find-consultant .vm-box__topline{font-size:23px}.vm-box--find-consultant .vm-box__cta{padding:0;position:absolute;bottom:0;width:100%}"}};export{r as huk_vm_box};