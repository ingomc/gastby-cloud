import{r as t,h as s,H as i}from"./p-8988f6c5.js";import{B as e,h as r,C as a}from"./p-0afcd70e.js";const h=class{constructor(s){t(this,s),this.modifier="",this.headline="",this.text="",this.numberOfReviews=0,this.headlinetag="div",this.apiKey="d75YUVA7xJ7xWxMi99z1j3njIQGTpW3k",this.buid="4cfcd62e00006400050e39ee",this.lang="de-DE",this.apiEndpointReviews=`https://api.trustpilot.com/v1/business-units/${this.buid}/reviews?apikey=${this.apiKey}&perPage=${this.numberOfReviews}&orderBy=createdat.desc&locale=${this.lang}`,this.apiEndpointBusinessReview=`https://api.trustpilot.com/v1/business-units/${this.buid}?apikey=${this.apiKey}&locale=${this.lang}`,this.apiEndpointRatingString=`https://api.trustpilot.com/v1/resources/strings/stars/$rating?apikey=${this.apiKey}&locale=${this.lang}`,this.reviewsData={},this.businessReviewData={},this.ratingString="",this.isMobile=!0,this.isLoading=!0,this.componentName="trustpilot",this.roundRating=t=>(Math.round(2*t)/2).toString(),this.fetchData=()=>{this.isLoading=!0;const t=fetch(this.apiEndpointReviews).then(t=>t.json()).then(t=>this.reviewsData=t).catch(()=>{}),s=fetch(this.apiEndpointBusinessReview).then(t=>t.json()).then(t=>this.businessReviewData=t).then(t=>{fetch(this.apiEndpointRatingString.replace("$rating",t.score.stars)).then(t=>t.json()).then(t=>this.ratingString=t.string).catch(()=>{})}).catch(()=>{});Promise.all([t,s]).then(()=>this.isLoading=!1).catch()}}componentWillLoad(){this.numberOfReviews>0&&this.fetchData()}breakpointChanged(){this.isMobile=this.breakpoint.isMobile()}renderBusinessReviewCard(){if(!this.businessReviewData.score)return null;const t=this.roundRating(this.businessReviewData.score.stars);return s("div",{class:e(this,"outer-card-wrapper"),itemscope:!0,itemtype:"http://schema.org/Organization"},s("div",{class:e(this,"business-review-company-name"),hidden:!0,itemprop:"name"},"Huk24"),s("huk-card",{modifier:"no-bg"},s("div",{slot:"content"},s("div",{class:"card__face card__face__front"},s("div",{class:e(this,"business-review-card-wrapper"),itemprop:"aggregateRating",itemscope:!0,itemtype:"http://schema.org/AggregateRating"},s("div",{class:e(this,"business-review-label")},this.ratingString),s("div",{class:e(this,"business-review-trust-score")},s("img",{src:`https://images-static.trustpilot.com/api/stars/${t}/star.svg`,width:"160",height:"30",alt:t+" Sterne"})),s("div",{class:e(this,"business-review-rating-value"),hidden:!0,itemprop:"ratingValue"},t),s("div",{class:e(this,"business-review-number-of-reviews")},"Basierend auf"," ",s("strong",null,s("span",{itemprop:"reviewCount"},this.businessReviewData.numberOfReviews.usedForTrustScoreCalculation)," ",1==this.businessReviewData.numberOfReviews.usedForTrustScoreCalculation?"Bewertung":"Bewertungen")),s("div",{class:e(this,"business-review-trustpilot-logo")},s("img",{src:"https://images-static.trustpilot.com/api/logos/light-bg/logo.svg",width:"100",alt:"Logo Trustpilot"})))))))}renderSlider(){const{reviews:t}=this.reviewsData;return s("huk-slider",{modifier:"trustpilot","children-tag":"huk-card","children-class-name":"trustpilot__outer-card-wrapper"},s("div",{slot:"slider-items"},!this.isMobile&&this.renderBusinessReviewCard(),t&&t.map(t=>s("div",{class:e(this,"outer-card-wrapper")},s("huk-card",null,s("div",{slot:"content"},s("div",{class:"card__face card__face__front"},s("div",{class:e(this,"review-card-wrapper")},s("div",{class:e(this,"review-rating")},s("img",{src:`https://images-static.trustpilot.com/api/stars/${t.stars}/star.svg`,width:"107",height:"20",alt:t.stars+" Sterne"})),s("p",{class:e(this,"review-title")},s("strong",null,t.title)),s("p",{class:e(this,"review-description")},t.text)))))))))}render(){const t=r({componentName:this.componentName,modifier:this.modifier}),a=this.headlinetag;return s(i,{class:t},s("div",{class:"container"},s("div",{class:e(this,"header")},!!this.headline&&s(a,{class:e(this,"title"),innerHTML:this.headline}),!!this.text&&s("p",{class:e(this,"text")},this.text)),this.isMobile&&this.renderBusinessReviewCard()),0==this.numberOfReviews?null:s("div",{class:e(this,"slider__container")},this.isLoading?s("huk-loading-block",null):this.reviewsData.reviews&&this.businessReviewData.score&&s("div",{class:e(this,"slider")},this.renderSlider())),this.businessReviewData.score&&s("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Organization",aggregateRating:{"@type":"AggregateRating",ratingValue:this.roundRating(this.businessReviewData.score.stars),reviewCount:this.businessReviewData.numberOfReviews.usedForTrustScoreCalculation.toString()},name:"Huk24",url:"http://www.huk24.de"})))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.trustpilot{display:block}.trustpilot__header{text-align:center;margin-bottom:2rem}\@media (min-width:768px){.trustpilot__header{text-align:left}}.trustpilot__title{font-size:23px;font-weight:700}.trustpilot__overall-ranking{text-align:center}.trustpilot__overall-ranking__card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem}\@media (min-width:1024px){.trustpilot__overall-ranking__card{margin:2rem 0}}.trustpilot__overall-ranking__card>div{margin:.5rem 0}.trustpilot__overall-ranking__label{font-size:23px;font-weight:700}.trustpilot__overall-ranking__number-of-reviews{font-size:13px}.trustpilot__review-card-wrapper{text-align:left;overflow:hidden;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}.trustpilot__review-rating{display:block;width:107px;height:20px;background-repeat:no-repeat;background-size:100%;-ms-flex:0 0 auto;flex:0 0 auto;margin-bottom:1.5rem}.trustpilot__review-description{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:5;-webkit-box-orient:vertical;margin:0}.trustpilot__business-review-card-wrapper{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.trustpilot__business-review-card-wrapper>div{margin:.5rem 0}.trustpilot__business-review-label{font-size:23px;font-weight:700}.trustpilot__business-review-number-of-reviews{font-size:13px}"}};!function(t,s,i,e){var r,a=arguments.length,h=a<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,s,i,e);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(h=(a<3?r(h):a>3?r(s,i,h):r(s,i))||h);a>3&&h&&Object.defineProperty(s,i,h)}([a("breakpointChanged")],h.prototype,"breakpoint",void 0);export{h as huk_trustpilot};