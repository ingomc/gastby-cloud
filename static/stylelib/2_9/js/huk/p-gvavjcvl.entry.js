import{r as s,h as t,H as i,c as h}from"./p-8988f6c5.js";import{B as e,e as a,F as r,h as n}from"./p-0afcd70e.js";const o=class{constructor(t){s(this,t),this.variant="",this.modifier="",this.isEditMode=!1,this.teaserLine="",this.headLine="",this.headlineTag="div",this.text="",this.labelForMore="Mehr",this.children=[],this.stateShowAllItems=!1,this.componentName="card-container",this.minDisplayingItemCount=5,this.invisibleClass="is-invisible"}componentWillLoad(){!this.isEditMode&&this.element&&this.element.componentOnReady().then(()=>this.initItems())}initItems(){this.children=Array.from(this.element.querySelectorAll("huk-card")),this.children.forEach((s,t)=>{"classList"in s&&(s.classList.add(e(this,"card-item")),!this.isEditMode&&t>=this.minDisplayingItemCount&&s.parentNode.classList.add(this.invisibleClass))})}componentDidLoad(){if(!this.element)return;const s=this.element.querySelector("div[slot='cards']");if(s){const t=s.parentNode;if(t){let i=s.firstChild;for(;i;)t.insertBefore(i,s),a(i)&&(i.classList.add("col-lg-4"),i.classList.add("col-md-6"),i.classList.add("col-sm-12")),i=s.firstChild;t.removeChild(s)}}}toggleShowAllItems(){this.stateShowAllItems=!this.stateShowAllItems}renderContainer(){return this.isEditMode?t("slot",{name:"cards"}):t(r,null,t("slot",{name:"cards"}),this.children.length>this.minDisplayingItemCount&&t("div",{class:e(this,"card-item card-item-button")},!this.stateShowAllItems&&t("huk-button",{modifier:"inverted forward",label:this.labelForMore,disabled:!1,loading:!1,onClicked:()=>{this.toggleShowAllItems()}})))}render(){const s=n({componentName:this.componentName,modifier:this.modifier,additionalClasses:["container",this.stateShowAllItems&&"show-all-items"]}),h=this.headlineTag;return t(i,{class:s},t("div",{class:e(this,"container")},t("div",{class:e(this,"teaser-line")},this.teaserLine),t(h,{class:e(this,"head-line"),innerHTML:this.headLine}),t("div",{class:e(this,"text"),innerHTML:this.text}),t("div",{class:e(this,"cards row")},this.renderContainer())))}get element(){return h(this)}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.card-container{display:block;text-align:center}.card-container>huk-card{display:none}.card-container__container{padding:.5rem 0}\@media (min-width:768px){.card-container__container{padding:2rem 0}}.card-container__head-line,.card-container__teaser-line{font-weight:700;color:#35444c;max-width:42.125rem;margin:0 auto}.card-container__head-line{font-size:33px;padding:2rem 0 1.5rem}\@media (min-width:768px){.card-container__head-line{font-size:48px}}.card-container__teaser-line{font-size:13px;text-transform:uppercase}.card-container__text{max-width:42.125rem;margin:0 auto;text-align:left;font-size:16px;color:#35444c}\@media (min-width:768px){.card-container__text{font-size:23px;line-height:1.43}}.card-container__cards{padding-top:2.5rem}.card-container__card-item{padding-bottom:1.5rem}.card-container__card-item.card-item-button{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:20rem;height:15.625rem}.card-container:not(.show-all-items) .is-invisible{display:none}"}};export{o as huk_card_container};