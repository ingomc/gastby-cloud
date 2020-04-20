import{r as i,h as s,H as t}from"./p-8988f6c5.js";import{h,B as e}from"./p-0afcd70e.js";const a=class{constructor(s){i(this,s),this.variant="",this.modifier="",this.headLine="",this.headlineTag="div",this.text="",this.backgroundImage="",this.backgroundAlt="",this.heroImage="",this.heroAlt="",this.ctaVariant="cta",this.ctaLabel="",this.ctaHref="",this.ctaStyle="",this.bulletList="",this.ctaInfoHeadline="",this.data=[],this.componentName="hero-infopage"}componentWillLoad(){""!==this.bulletList&&(this.data=[...this.data,...JSON.parse(this.bulletList)])}render(){const i=h({componentName:this.componentName,variant:this.variant,modifier:[this.modifier,!this.text&&0===this.data.length&&"no-text-no-bullets"]}),a=this.headlineTag;return s(t,{class:i},s("div",{class:e(this,"container container")},!!this.headLine&&s(a,{class:e(this,"headline"),innerHTML:this.headLine}),!this.text&&this.data.length>0&&s("huk-list",{modifier:"icons infobox check-circle-orange",items:this.data}),!!this.text&&s("div",{class:e(this,"text"),innerHTML:this.text}),!!this.ctaHref&&!!this.ctaLabel&&s("huk-button",{label:this.ctaLabel,variant:this.ctaVariant,modifier:this.ctaStyle,href:this.ctaHref}),!!this.heroImage&&s("div",{class:e(this,"hero-image-container")},s("img",{class:e(this,"hero-image"),src:this.heroImage,alt:this.heroAlt}))),!!this.backgroundImage&&s("div",{class:e(this,"background-container")},s("div",{class:"container"},s("img",{class:e(this,"background-image"),src:this.backgroundImage,alt:this.backgroundAlt}))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.hero-infopage{display:block}.hero-infopage__container{position:relative;padding:0 .75rem 2.5rem}\@media (min-width:768px){.hero-infopage__container{padding:0 2.5rem 2.5rem}}.hero-infopage__headline{text-align:left;font-weight:700;font-size:33px;line-height:1.17;padding-bottom:1rem;margin:1rem 0 0}\@media (min-width:576px){.hero-infopage__headline{max-width:33.9375rem}}\@media (min-width:768px){.hero-infopage__headline{font-size:48px}}\@media (min-width:1024px){.hero-infopage__headline{margin-top:4rem}}.hero-infopage__text{margin:0 0 1.5rem;font-size:16px;max-width:32rem}\@media (min-width:768px){.hero-infopage__text{margin:1rem 0 3rem;font-size:23px}}.hero-infopage__hero-image-container .hero-infopage__hero-image{display:block;border-radius:.25rem;overflow:hidden;max-width:100%;height:auto;margin-top:2.5rem}\@media (min-width:1024px){.hero-infopage__hero-image-container{position:absolute;top:0;right:0;width:55%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:.5rem 2.5rem;z-index:-1}.hero-infopage__hero-image-container .hero-infopage__hero-image{-webkit-box-shadow:0 .625rem 1.25rem .313rem rgba(0,0,0,.1);box-shadow:0 .625rem 1.25rem .313rem rgba(0,0,0,.1)}}.hero-infopage__background-container{display:none}\@media (min-width:768px){.hero-infopage__background-container{overflow:hidden;display:block;position:absolute;width:100%;z-index:-2;top:0}}.hero-infopage__background-container .hero-infopage__background-image{position:relative;width:80%;right:-35%}\@media (min-width:768px) and (max-width:1023.98px){.hero-infopage__background-container .hero-infopage__background-image{width:70%;right:-50%}}.hero-infopage--triangle .hero-infopage__background-container .hero-infopage__background-image{margin-top:-10%;right:-26%}\@media (min-width:768px) and (max-width:1023.98px){.hero-infopage--triangle .hero-infopage__background-container .hero-infopage__background-image{margin-top:-5%;right:-40%}}"}};export{a as huk_hero_infopage};