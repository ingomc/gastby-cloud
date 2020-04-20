import{r as s,h as i,H as t}from"./p-8988f6c5.js";import{h,B as o}from"./p-0afcd70e.js";const e=class{constructor(i){s(this,i),this.modifier="",this.headLine=void 0,this.headlineTag="div",this.layout="cols-1-1-1",this.backgroundColor=void 0,this.backgroundWidth=void 0,this.componentName="homepage-hero-container"}render(){const s=h({componentName:this.componentName,modifier:[this.modifier,this.layout,!!this.backgroundWidth&&!!this.backgroundColor&&`background-width--${this.backgroundWidth}`,!!this.backgroundColor&&`background-color--${this.backgroundColor}`,!!this.headLine&&"with-headline"]}),e=this.headlineTag;return i(t,{class:s},i("div",{class:o(this,"background")}),i("div",{class:"container"},!!this.headLine&&i(e,{class:o(this,"headline"),innerHTML:this.headLine}),i("div",{class:o(this,"inner")},i("slot",null))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.homepage-hero-container{display:block;position:relative;margin-bottom:1rem}\@media (min-width:1024px){.homepage-hero-container{margin-bottom:3rem}}.homepage-hero-container__background{position:absolute;top:-10rem;left:0;bottom:0;width:100%;z-index:-1;border-radius:0 0 .25rem 0}.homepage-hero-container__headline{font-size:23px;color:#35444c;padding:1.5rem 0 0;margin-bottom:0;font-weight:700}\@media (min-width:576px){.homepage-hero-container__headline{font-size:40px}}\@media (min-width:1024px){.homepage-hero-container__headline{font-size:48px}}.homepage-hero-container__inner{position:relative;padding:2rem 0}\@media (min-width:768px){.homepage-hero-container__inner{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}}\@media (min-width:1024px){.homepage-hero-container__inner{-ms-flex-pack:justify;justify-content:space-between}}.homepage-hero-container__inner>*{width:100%;margin-right:1.5rem;margin-bottom:1.5rem}\@media (min-width:1024px){.homepage-hero-container__inner>*{width:33.3333333333%}}.homepage-hero-container__inner>:last-child{margin-right:0}\@media (min-width:768px) and (max-width:1023.98px){.homepage-hero-container--cols-1-1-1 .homepage-hero-container__inner{-ms-flex-wrap:wrap;flex-wrap:wrap}.homepage-hero-container--cols-1-1-1 .homepage-hero-container__inner>*{width:48%}.homepage-hero-container--cols-1-1-1 .homepage-hero-container__inner>:first-child{width:100%;margin-right:0}.homepage-hero-container--cols-1-1-1 .homepage-hero-container__inner>:nth-child(2){margin-right:1.8rem}}\@media (min-width:1024px){.homepage-hero-container--cols-1-1-1 .homepage-hero-container__inner>*{width:33.3333333333%}}\@media (min-width:768px) and (max-width:1023.98px){.homepage-hero-container--cols-1-1-1.homepage-hero-container--background-width--p50 .homepage-hero-container__inner>:first-child,.homepage-hero-container--cols-1-1-1.homepage-hero-container--background-width--p75 .homepage-hero-container__inner>:first-child{margin-bottom:4rem}}\@media (min-width:768px) and (max-width:1023.98px){.homepage-hero-container--cols-1-1-1--tablet-invert .homepage-hero-container__inner{-ms-flex-wrap:wrap;flex-wrap:wrap}.homepage-hero-container--cols-1-1-1--tablet-invert .homepage-hero-container__inner>*{width:48%}.homepage-hero-container--cols-1-1-1--tablet-invert .homepage-hero-container__inner>:first-child{margin-right:1.8rem}.homepage-hero-container--cols-1-1-1--tablet-invert .homepage-hero-container__inner>:nth-child(2){margin-right:0}.homepage-hero-container--cols-1-1-1--tablet-invert .homepage-hero-container__inner>:nth-child(3){width:100%;margin-right:0}}\@media (min-width:768px) and (max-width:1023.98px){.homepage-hero-container--cols-1-1-1--tablet-invert.homepage-hero-container--background-width--p50 .homepage-hero-container__inner>:first-child,.homepage-hero-container--cols-1-1-1--tablet-invert.homepage-hero-container--background-width--p50 .homepage-hero-container__inner>:nth-child(2),.homepage-hero-container--cols-1-1-1--tablet-invert.homepage-hero-container--background-width--p75 .homepage-hero-container__inner>:first-child,.homepage-hero-container--cols-1-1-1--tablet-invert.homepage-hero-container--background-width--p75 .homepage-hero-container__inner>:nth-child(2){margin-bottom:4rem}}\@media (min-width:1024px){.homepage-hero-container--cols-2-1 .homepage-hero-container__inner>:first-child{margin-right:6rem}.homepage-hero-container--cols-2-1 .homepage-hero-container__inner>:nth-child(2){width:54%}}\@media (min-width:768px) and (max-width:1023.98px){.homepage-hero-container--cols-2-1.homepage-hero-container--background-width--p75 .homepage-hero-container__background{height:auto;width:75%}.homepage-hero-container--cols-2-1.homepage-hero-container--background-width--p50 .homepage-hero-container__background{height:auto;width:50%}}.homepage-hero-container--background-width--p75 .homepage-hero-container__background{width:100%;height:75%}\@media (min-width:768px){.homepage-hero-container--background-width--p75 .homepage-hero-container__background{width:100%;height:53%}}\@media (min-width:1024px){.homepage-hero-container--background-width--p75 .homepage-hero-container__background{width:72%;height:auto}}.homepage-hero-container--background-width--p50 .homepage-hero-container__background{width:100%;height:60%}\@media (min-width:768px){.homepage-hero-container--background-width--p50 .homepage-hero-container__background{width:100%;height:54%}}\@media (min-width:1024px){.homepage-hero-container--background-width--p50 .homepage-hero-container__background{width:57%;height:auto}}.homepage-hero-container--background-color--orange .homepage-hero-container__background{background-image:linear-gradient(189deg,#ffd385 -55%,#fba308)}.homepage-hero-container--background-color--mint-dark .homepage-hero-container__background{background-color:#055e5f}.homepage-hero-container--background-color--mint-dark .homepage-hero-container__headline{color:#fff}.homepage-hero-container--background-color--black .homepage-hero-container__background{background-color:#35444c}.homepage-hero-container--background-color--black .homepage-hero-container__headline{color:#fff}"}};export{e as huk_homepage_hero_container};