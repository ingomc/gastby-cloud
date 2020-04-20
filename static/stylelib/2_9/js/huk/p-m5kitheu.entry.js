import{r as s,h as t,H as e}from"./p-8988f6c5.js";import{h as i,B as l,F as r}from"./p-0afcd70e.js";const n=class{constructor(t){s(this,t),this.modifier="unordered",this.items=[],this.componentName="list"}render(){const s=i({componentName:this.componentName,modifier:this.modifier}),n=this.modifier.includes("ordered")?"ol":"ul";return t(e,{class:s},t(n,{class:l(this,"list")},t("slot",null,this.items.map(s=>{const e=!!s.helptext&&t("huk-helpbutton",{modifier:this.modifier.includes("darkmode")?"darkmode":"default",helptext:s.helptext});return t("li",{class:l(this,"item",s.icon&&s.icon,s.helptext&&"helpbutton")},s.href?t(r,null,t("a",{class:l(this,"link"),href:s.href,title:s.label,innerHTML:s.label})," ",e):t("span",null,t("span",{innerHTML:s.label}),e),!!s.badgeLabel&&t("huk-badge",{type:s.badgeType,size:s.badgeSize,label:s.badgeLabel}))}))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.list{display:block;margin-bottom:1rem;font-size:16px;line-height:1.25}\@media (min-width:768px){.list{margin-bottom:1.5rem}}\@media (min-width:576px){.list{font-size:19px}}.list__list{display:block;padding:0;margin-bottom:0;list-style-type:none;list-style-position:inside}.list__item{position:relative;margin-bottom:.5rem;padding-left:1.5rem;white-space:pre-line}.list__item:after{content:\"\";position:absolute;display:block;top:.4em;left:0;background-color:#fba308;border-radius:50%;width:.35em;height:.35em}.list__item p{display:inline}.list__item--helpbutton{padding-right:1.5rem}.list__item--helpbutton huk-helpbutton{margin-left:.5rem}.list__item huk-badge{margin-left:1rem}.list__link{color:#35444c;text-decoration:none}.list--ordered{counter-reset:item}.list--ordered .list__item{padding-left:2rem}.list--ordered .list__item:after{content:counter(item);counter-increment:item;top:0;width:1.25em;height:1.25em;color:#fff;text-align:center}.list--icons .list__item{padding-left:2rem;margin-bottom:1rem}.list--icons .list__item:after{border-radius:0;top:0;width:1.25em;height:1.25em;background-color:transparent;background-size:100%;background-repeat:no-repeat;background-position:50%}.list--icons .list__item--check:after{background-image:url(/stylelib/2_9/img/check.svg)}.list--icons .list__item--check--circle-orange:after{background-image:url(/stylelib/2_9/img/check-circle_orange.svg)}.list--icons .list__item--cross:after{background-image:url(/stylelib/2_9/img/cross.svg)}.list--icons .list__item--arrow{font-size:16px}.list--icons .list__item--arrow:after{background-image:url(/stylelib/2_9/img/arrow-right_cta.svg);background-size:50%}.list--icons.list--check-circle-orange .list__item{padding-left:2.5rem}.list--icons.list--check-circle-orange .list__item:after{background-image:url(/stylelib/2_9/img/check-circle_orange.svg);width:24px;height:24px}.list--infobox{margin:0 0 .5rem;padding-left:0;font-size:16px;font-weight:500;line-height:1.5;list-style-type:none;max-width:32rem}\@media (min-width:768px){.list--infobox{margin:1.5rem 0 3rem;font-size:23px;line-height:1.17}}.list--infobox .list__item{margin-bottom:.5rem;display:-ms-flexbox;display:flex}.list--separators .list__item{padding-top:1.25rem;padding-bottom:1.25rem;margin-bottom:0;line-height:1.54;border-bottom:1px solid #e7e9ea}.list--separators .list__item:last-child{border-bottom:0}.list--separators .list__item:after{top:50%;margin-top:-.625rem}.list--separators.list--last-item-with-separator .list__item:last-child{border-bottom:1px solid #e7e9ea}.list--small{font-size:13px}.list--small .list__item{padding-left:1rem}.list--cardlist .list__item{padding-top:.625rem;padding-bottom:.625rem}\@media (min-width:576px){.list--columns{-moz-columns:auto 2;-webkit-columns:2;columns:2}.list--columns .list__item{-webkit-transform:translate(0);transform:translate(0);overflow:hidden}}.list--darkmode{color:#fff}.list--darkmode *{color:inherit}.list--darkmode a:active,.list--darkmode a:focus,.list--darkmode a:hover{color:#b0b6ba}\@media (max-width:767.98px){.list--darkmode .list__item{padding-top:1.25rem;padding-bottom:1.25rem;margin-bottom:0;line-height:1.54;border-bottom:1px solid #e7e9ea}.list--darkmode .list__item:last-child{border-bottom:0}.list--darkmode .list__item:after{top:50%;margin-top:-.625rem}}.list huk-list-item{margin-bottom:.5rem}.list--icons huk-list-item{margin-bottom:1rem}.list--icons huk-list-item list-item__marker{min-width:2rem}"}};export{n as huk_list};