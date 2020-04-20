import{r as s,h as i,H as t}from"./p-8988f6c5.js";import{c as l,d as e,B as a}from"./p-0afcd70e.js";const h=class{constructor(i){s(this,i),this.insurance="",this.label="",this.sublabel="",this.services=[],this.bulletLists=[],this.itemBlocks=[],this.componentName="summary-box"}render(){const s=l(this.sublabel).join("\n");return i(t,{class:this.componentName},i("div",{class:a(this,"header")},i("div",{class:a(this,"header__label")},this.label),i("div",{class:a(this,"header__sublabel")},s)),i("div",{class:a(this,"inner")},i("div",{class:a(this,"bulletlists")},this.bulletLists.length>0&&this.bulletLists.map(s=>i("div",{class:a(this,"bulletlists__item")},i("div",{class:a(this,"bulletlists__item__label")},s.label),i("huk-list",{items:s.items})))),i("ul",{class:a(this,"itemblocks")},this.itemBlocks.length>0&&this.itemBlocks.map(s=>i("li",{class:a(this,"itemblocks__block")},s.items.length>0&&s.items.map(s=>i("div",{class:a(this,"itemblocks__block__item",s.bold&&"bold",s.big&&"big")},i("div",{class:a(this,"itemblocks__block__item__label")},s.label),i("div",{class:a(this,"itemblocks__block__item__value")},e.format(s.value,s.format)))))))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.summary-box{display:block;margin-bottom:1rem}\@media (min-width:768px){.summary-box{margin-bottom:1.5rem}}.summary-box__header{color:#fff;margin:-1rem -1rem 1.5rem;padding:1rem}\@media (min-width:576px){.summary-box__header{margin:0 0 1.5rem;padding:1.5rem;border-radius:.25rem}}.summary-box__header__label{font-size:28px;font-weight:700;margin-bottom:.25rem;word-break:break-word}\@media (min-width:576px){.summary-box__header__label{font-size:33px}}.summary-box__header__sublabel{font-weight:700;white-space:pre-line;margin-top:.5rem;line-height:1.4}\@media (min-width:576px){.summary-box__header__sublabel{font-size:19px}}.summary-box__inner{padding:0}\@media (min-width:576px){.summary-box__inner{padding:0 1.5rem}}.summary-box__bulletlists{list-style-type:none}.summary-box__bulletlists,.summary-box__bulletlists__item{margin:0 0 1.5rem;padding:0}.summary-box__bulletlists__item__label{font-weight:700;font-size:13px;padding-bottom:1rem}\@media (min-width:576px){.summary-box__bulletlists__item__label{font-size:19px}}.summary-box__bulletlists__item huk-list{font-size:13px}\@media (min-width:576px){.summary-box__bulletlists__item huk-list{font-size:19px}}.summary-box__itemblocks{border-top:1px solid #fff;list-style-type:none;padding:1.5rem 0 0}.summary-box__itemblocks__block{padding:0 0 1.5rem;border-bottom:1px solid #fff;margin-bottom:1.5rem}.summary-box__itemblocks__block__item{display:-ms-flexbox;display:flex;font-size:13px}\@media (min-width:576px){.summary-box__itemblocks__block__item{font-size:19px}}.summary-box__itemblocks__block__item--bold{font-weight:700}.summary-box__itemblocks__block__item--big{font-size:16px}\@media (min-width:576px){.summary-box__itemblocks__block__item--big{font-size:23px}}.summary-box__itemblocks__block__item__label{-ms-flex:1 1 auto;flex:1 1 auto}.summary-box__itemblocks__block__item__value{-ms-flex:0 0 auto;flex:0 0 auto}.summary-box__itemblocks__block__item+.summary-box__itemblocks__block__item{padding-top:.5rem}.summary-box__itemblocks__block:last-child{padding-bottom:0;margin-bottom:0;border-bottom:0}.summary-box__header{background:#4e7380;margin-bottom:0}\@media (min-width:576px){.summary-box__header{margin-bottom:0;border-radius:0}}.summary-box__header__label{font-size:40px}\@media (min-width:576px){.summary-box__header__label{font-size:57px}}.summary-box__header__sublabel{font-size:16px}\@media (min-width:576px){.summary-box__header__sublabel{font-size:28px}}.summary-box__inner{background-color:#edf1f2}\@media (min-width:576px){.summary-box__inner{padding:1.5rem}}.summary-box__itemblocks{border-top-color:#d1d1d1}.summary-box__itemblocks__block{border-bottom-color:#d1d1d1}"}};export{h as huk_summary_box};