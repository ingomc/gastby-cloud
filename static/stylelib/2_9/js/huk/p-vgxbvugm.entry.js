import{r as t,h as s,e as i,H as h,c as e}from"./p-8988f6c5.js";import{B as a,h as o}from"./p-0afcd70e.js";import{I as r,g as n}from"./p-04b583a6.js";const c=class{constructor(h){t(this,h),this.modifier="",this.headLine="",this.subline="",this.sublineInfoOpenerText="",this.label="",this.href="",this.buttonModifier="",this.isInfoBoxOpen=!1,this.componentName="hero-cta",this.isFirst=!1,this.watchHeroCtaPosition=()=>{this.heroCtaButton&&this.isFirst&&r.get(t=>{for(const s of t){const t=(!1===s.isIntersecting||s.intersectionRatio<0)&&s.boundingClientRect.top<=n();this.toggleHeaderHeroCta.emit({showCtaInHeader:t,ctaHref:this.href,ctaLabel:this.label,ctaStyle:this.buttonModifier})}}).observe(this.heroCtaButton)},this.toggleInfoBox=()=>{this.isInfoBoxOpen=!this.isInfoBoxOpen},this.renderSubline=()=>s("div",{class:a(this,"subline"),innerHTML:this.subline},!!this.sublineInfoOpenerText&&s("strong",{onClick:this.toggleInfoBox,class:a(this,"subline__info-opener-text")}," ",this.sublineInfoOpenerText),s("slot",{name:"helpbutton"})),this.toggleHeaderHeroCta=i(this,"toggleHeaderHeroCta",7)}componentWillLoad(){Array.from(document.querySelectorAll(`huk-${this.componentName}`)).forEach((t,s)=>{0===s&&t===this.element&&(this.isFirst=!0)})}componentDidLoad(){this.watchHeroCtaPosition()}render(){const t=o({componentName:this.componentName,additionalClasses:["container",this.isFirst&&"is-first"]});return s(h,{class:t},!!this.href&&!!this.label&&!!this.headLine&&s("div",{class:a(this,"wrap")},s("div",{class:a(this,"text")},s("div",{class:a(this,"headline"),innerHTML:this.headLine}),this.renderSubline()),s("div",{class:a(this,"button"),ref:t=>this.heroCtaButton=t},s("huk-button",{variant:"cta",modifier:this.buttonModifier,label:this.label,href:this.href}))))}get element(){return e(this)}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.hero-cta{padding-top:1.5rem}\@media (min-width:768px){.hero-cta{padding-top:0}}.hero-cta__wrap{position:relative;display:-ms-flexbox;display:flex;margin:0 .5rem 1.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}\@media (min-width:576px){.hero-cta__wrap{margin:0 1.5rem 1.5rem}}\@media (min-width:768px){.hero-cta__wrap{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;margin:0 auto 1.5rem;width:37.75rem}}.hero-cta__text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 .5rem 3rem}\@media (min-width:768px){.hero-cta__text{padding-bottom:0;margin:2.5rem 0 3rem 3rem}}.hero-cta__headline{font-weight:700;margin-top:1rem;font-size:23px;line-height:1.45;text-align:center}\@media (min-width:768px){.hero-cta__headline{text-align:left;font-size:33px;line-height:1.21;margin-top:0}}.hero-cta__subline{font-size:13px;line-height:1.43}.hero-cta__subline huk-infobox{margin-left:.25rem;top:.1875rem}.hero-cta__subline__info-opener-text{color:#fba308;cursor:pointer}.hero-cta__subline__info-opener-text:hover{color:#fb9105}.hero-cta__subline__info-opener-text:active{color:#f0670a}.hero-cta__button{position:absolute;bottom:-1.5rem}.hero-cta__button huk-button{min-width:16rem;margin:0}\@media (min-width:768px){.hero-cta__button{bottom:auto;right:-2rem}}.hero-cta huk-helpbutton{margin-left:.5rem}"}};export{c as huk_hero_cta};