import{r as t,h as s,H as i}from"./p-8988f6c5.js";import{B as o,J as c}from"./p-0afcd70e.js";const e=class{constructor(i){t(this,i),this.headline="",this.headlineTag="div",this.downloadItems=[],this.componentName="accordion-download-list",this.renderDownloadSections=t=>t.map(t=>s("div",{class:o(this,"section")},s("span",{class:o(this,"section__title")},t.sectionTitle),s("huk-download-list",{items:t.downloadItems})))}renderAccordionItems(){return this.downloadItems.map(t=>s("huk-accordion-item",{label:t.accordionTitle},this.renderDownloadSections(t.downloadSections)))}render(){return s(i,{class:this.componentName},s("div",{class:"container"},s(this.headlineTag,{class:o(this,"headline"),innerHTML:this.headline})),s("huk-accordion-cms",null,this.renderAccordionItems()))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.accordion-download-list{display:block}.accordion-download-list__headline{color:#35444c;font-size:33px;padding:1.5rem 0;font-weight:700}.accordion-download-list__section__title{color:#35444c;font-size:19px;font-weight:700;display:inline-block;margin:1rem 0 .5rem}"}};!function(t,s,i,o){var c,e=arguments.length,n=e<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,i,o);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(n=(e<3?c(n):e>3?c(s,i,n):c(s,i))||n);e>3&&n&&Object.defineProperty(s,i,n)}([c()],e.prototype,"downloadItems",void 0);export{e as huk_accordion_download_list};