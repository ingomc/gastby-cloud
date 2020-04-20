System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js","./p-6d7472f7.system.js"],(function(t){"use strict";var e,n,i,o,r,s,a,h,u;return{setters:[function(t){e=t.r;n=t.h;i=t.e;o=t.H;r=t.c},function(t){s=t.B;a=t.h},function(t){h=t.I;u=t.g}],execute:function(){var c=t("huk_hero_cta",function(){function t(t){var o=this;e(this,t);this.modifier="";this.headLine="";this.subline="";this.sublineInfoOpenerText="";this.label="";this.href="";this.buttonModifier="";this.isInfoBoxOpen=false;this.componentName="hero-cta";this.isFirst=false;this.watchHeroCtaPosition=function(){if(o.heroCtaButton&&o.isFirst){var t=function(t){for(var e=0,n=t;e<n.length;e++){var i=n[e];var r=(i.isIntersecting===false||i.intersectionRatio<0)&&i.boundingClientRect.top<=u();o.toggleHeaderHeroCta.emit({showCtaInHeader:r,ctaHref:o.href,ctaLabel:o.label,ctaStyle:o.buttonModifier})}};var e=h.get(t);e.observe(o.heroCtaButton)}};this.toggleInfoBox=function(){o.isInfoBoxOpen=!o.isInfoBoxOpen};this.renderSubline=function(){return n("div",{class:s(o,"subline"),innerHTML:o.subline},!!o.sublineInfoOpenerText&&n("strong",{onClick:o.toggleInfoBox,class:s(o,"subline__info-opener-text")}," ",o.sublineInfoOpenerText),n("slot",{name:"helpbutton"}))};this.toggleHeaderHeroCta=i(this,"toggleHeaderHeroCta",7)}t.prototype.componentWillLoad=function(){var t=this;Array.from(document.querySelectorAll("huk-"+this.componentName)).forEach((function(e,n){if(n===0&&e===t.element){t.isFirst=true}}))};t.prototype.componentDidLoad=function(){this.watchHeroCtaPosition()};t.prototype.render=function(){var t=this;var e=a({componentName:this.componentName,additionalClasses:["container",this.isFirst&&"is-first"]});return n(o,{class:e},!!this.href&&!!this.label&&!!this.headLine&&n("div",{class:s(this,"wrap")},n("div",{class:s(this,"text")},n("div",{class:s(this,"headline"),innerHTML:this.headLine}),this.renderSubline()),n("div",{class:s(this,"button"),ref:function(e){return t.heroCtaButton=e}},n("huk-button",{variant:"cta",modifier:this.buttonModifier,label:this.label,href:this.href}))))};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.hero-cta{padding-top:1.5rem}\@media (min-width:768px){.hero-cta{padding-top:0}}.hero-cta__wrap{position:relative;display:-ms-flexbox;display:flex;margin:0 .5rem 1.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}\@media (min-width:576px){.hero-cta__wrap{margin:0 1.5rem 1.5rem}}\@media (min-width:768px){.hero-cta__wrap{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;margin:0 auto 1.5rem;width:37.75rem}}.hero-cta__text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 .5rem 3rem}\@media (min-width:768px){.hero-cta__text{padding-bottom:0;margin:2.5rem 0 3rem 3rem}}.hero-cta__headline{font-weight:700;margin-top:1rem;font-size:23px;line-height:1.45;text-align:center}\@media (min-width:768px){.hero-cta__headline{text-align:left;font-size:33px;line-height:1.21;margin-top:0}}.hero-cta__subline{font-size:13px;line-height:1.43}.hero-cta__subline huk-infobox{margin-left:.25rem;top:.1875rem}.hero-cta__subline__info-opener-text{color:#fba308;cursor:pointer}.hero-cta__subline__info-opener-text:hover{color:#fb9105}.hero-cta__subline__info-opener-text:active{color:#f0670a}.hero-cta__button{position:absolute;bottom:-1.5rem}.hero-cta__button huk-button{min-width:16rem;margin:0}\@media (min-width:768px){.hero-cta__button{bottom:auto;right:-2rem}}.hero-cta huk-helpbutton{margin-left:.5rem}"},enumerable:true,configurable:true});return t}())}}}));