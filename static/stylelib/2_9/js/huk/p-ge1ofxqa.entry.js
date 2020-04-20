import{r as t,h as s,H as i}from"./p-8988f6c5.js";import{o as e,h as l,B as h,J as c}from"./p-0afcd70e.js";const o=class{constructor(s){t(this,s),this.variant="",this.modifier="",this.label="",this.info="",this.stateActiveItem="",this.tableCellValues=[],this.tableGridCount=4,this.componentName="table-item",this.toggleInfo=()=>{this.stateActiveItem=this.label===this.stateActiveItem?"":this.label}}componentWillRender(){this.tableGridCount=e(this.tableCellValues)}render(){const t=l({componentName:this.componentName,variant:this.variant,modifier:this.modifier,additionalClasses:[this.info&&"has-info-text"]});return s(i,{class:t,onClick:this.toggleInfo},s("div",{class:h(this,"label col-12 col-lg-5")},s("span",{class:h(this,"label__text"),innerHTML:this.label},!!this.info&&s("huk-icon",{icon:this.stateActiveItem===this.label?"close-circle":"information"})),this.stateActiveItem===this.label&&!!this.info&&s("div",{class:h(this,"info-text"),innerHTML:this.info})),this.tableCellValues.length>0&&s("div",{class:h(this,"cells col-12 col-lg-7")},s("div",{class:"row"},this.tableCellValues.map(t=>s("div",{class:h(this,`cell col-${this.tableGridCount}`)},s("huk-icon",{icon:t.icon}),t.text&&s("div",{class:h(this,"cell__text"),innerHTML:t.text}))))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.table-item{display:block}\@media (min-width:1024px){.table-item{display:-ms-flexbox;display:flex}}.table-item__cell,.table-item__label__text{text-align:center}.table-item__cell__text,.table-item__label__text{font-size:13px;color:#35444c;font-weight:700}\@media (min-width:768px){.table-item__cell__text,.table-item__label__text{font-size:19px}}\@media (min-width:1024px){.table-item__cell__text,.table-item__label__text{font-size:16px}}.table-item__label{background-color:#f7f7f8;padding:0 1rem!important}\@media (min-width:768px){.table-item__label{padding:1rem!important;-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start}}.table-item__label__text{line-height:3.125rem;font-size:13px;display:block;position:relative}.table-item__label__text huk-icon{font-size:18px;position:relative;top:1px;margin-left:.5rem}\@media (min-width:768px){.table-item__label__text{font-size:16px}}\@media (min-width:1024px){.table-item__label__text{text-align:left;display:inline-block;line-height:normal;padding:0}}.table-item__cells{background-color:#fff}.table-item__cells .row{height:100%}.table-item__cell{line-height:3.75rem}.table-item__cell__text{font-size:13px;line-height:1;height:2.5rem}\@media (min-width:768px){.table-item__cell__text{font-size:16px}}\@media (min-width:1024px){.table-item__cell__text{font-size:16px}}.table-item__info-button{background:none;position:absolute;right:0;height:100%;font-size:19px}\@media (min-width:768px){.table-item__info-button{font-size:23px}}\@media (min-width:1024px){.table-item__info-button{position:relative;padding-right:1.5rem}}.table-item__info-text{font-size:13px;width:100%;padding:.5rem 0 2rem}\@media (min-width:1024px){.table-item__info-text{padding:1rem 0}}.table-item.has-info-text{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\@media (min-width:1024px){.table-item__cells:after,.table-item__cells:before,.table-item__label:after,.table-item__label:before{position:absolute;content:\"\";display:block;background-color:#e7e9ea;height:.0625rem;top:-.0625rem;left:0;width:100%;opacity:0;z-index:1}.table-item__cell:after{position:absolute;content:\"\";right:0;bottom:0;top:0;display:block;width:1px;background-color:#e7e9ea;z-index:1}.table-item__cell:last-child:after{width:0}.table-item:focus,.table-item:hover{background:#fff}.table-item:focus .table-item__cells,.table-item:focus .table-item__label,.table-item:hover .table-item__cells,.table-item:hover .table-item__label{position:relative;background:transparent}.table-item:focus .table-item__cells:after,.table-item:focus .table-item__cells:before,.table-item:focus .table-item__label:after,.table-item:focus .table-item__label:before,.table-item:hover .table-item__cells:after,.table-item:hover .table-item__cells:before,.table-item:hover .table-item__label:after,.table-item:hover .table-item__label:before{opacity:1}.table-item:focus .table-item__cells:after,.table-item:focus .table-item__label:after,.table-item:hover .table-item__cells:after,.table-item:hover .table-item__label:after{top:auto;bottom:0}.table-item:first-child .table-item__cells:before,.table-item:first-child .table-item__label:before,.table-item:last-child .table-item__cells:after,.table-item:last-child .table-item__label:after{opacity:0}}"}};!function(t,s,i,e){var l,h=arguments.length,c=h<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,s,i,e);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(c=(h<3?l(c):h>3?l(s,i,c):l(s,i))||c);h>3&&c&&Object.defineProperty(s,i,c)}([c()],o.prototype,"tableCellValues",void 0);export{o as huk_table_item};