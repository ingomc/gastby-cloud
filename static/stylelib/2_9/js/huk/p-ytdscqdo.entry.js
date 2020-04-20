import{r as i,e as s,h as t,H as h}from"./p-8988f6c5.js";import{B as o}from"./p-0afcd70e.js";const d=class{constructor(t){i(this,t),this.headline="",this.listItems=[],this.buttonLabel="",this.advice="",this.downloadedText="",this.accordionLabelOpen="",this.accordionLabelClosed="",this.downloaded=!1,this.loading=!1,this.disabled=!1,this.componentName="download-box",this.handleButtonClick=()=>{this.buttonClicked.emit()},this.buttonClicked=s(this,"buttonClicked",3)}render(){return t(h,{class:this.componentName},t("div",null,t("h2",{class:o(this,"headline")},this.headline),t("huk-accordion-item",{labelClosed:this.accordionLabelClosed,labelOpen:this.accordionLabelOpen,modifier:"tarifrechner"},t("huk-list",{modifier:"icons",items:this.listItems})),!this.downloaded&&t("div",null,t("huk-button",{variant:"cta",modifier:"wide",disabled:this.disabled,loading:this.loading,label:this.buttonLabel,onClicked:this.handleButtonClick}),t("div",{class:o(this,"advice")},this.advice)),this.downloaded&&t("div",{class:o(this,"downloaded")},t("div",{class:o(this,"downloaded__icon")},t("huk-icon",{icon:"success"})),this.downloadedText)))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.download-box{display:block;margin-bottom:1rem}\@media (min-width:768px){.download-box{margin-bottom:1.5rem}}.download-box__headline{font-size:19px;padding-bottom:1rem}\@media (min-width:576px){.download-box__headline{font-size:23px}}.download-box huk-accordion-item{margin-bottom:2rem}.download-box__advice{color:#97a0a5;margin-top:1.5rem}.download-box__downloaded__icon{text-align:center;font-size:83px;margin-bottom:1rem}"}};export{d as huk_download_box};