import{r as t,e as s,h as i,H as e}from"./p-8988f6c5.js";import{B as l,h,p as a}from"./p-0afcd70e.js";const r=class{constructor(i){t(this,i),this.componentName="button-list",this.items=[],this.modifier="default",this.noScroll=!1,this.filterQuery="",this.handleChange=t=>{this.filterQuery=t.target.value},this.itemClicked=s(this,"itemClicked",7)}handleItemClick(t){t.disabled||this.itemClicked.emit(t.value)}resetInput(){this.filterQuery=""}renderItem(t){return i("label",{class:l(this,"label",t.disabled&&"disabled"),onClick:()=>{this.handleItemClick(t)}},t.label,void 0!==t.subItems&&this.renderSubItems(t.subItems))}renderSubItems(t){return i("ul",{class:l(this,"subitems")},t.map(t=>this.renderSubItem(t)))}renderSubItem(t){return i("li",{class:l(this,"subitem")},i("div",{class:l(this,"subitem__label")},t.label),i("div",{class:l(this,"subitem__text")},t.text))}render(){const t=h({componentName:this.componentName,modifier:[this.modifier,this.noScroll&&"no-scroll"]});return i(e,{class:t},i("div",{class:l(this,"group")},a(this.modifier).includes("filter")&&i("huk-input",{label:"Filtern",validity:"not-validated",value:this.filterQuery,autocomplete:"off",onValueChanged:this.handleChange,onButtonClicked:()=>{this.resetInput()},button:this.filterQuery.length>0?"delete":""}),i("div",{class:l(this,"items")},this.items.filter(t=>t.label.toLowerCase().includes(this.filterQuery.toLowerCase())).map(t=>this.renderItem(t)))))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.button-list{display:block;margin-bottom:1rem}\@media (min-width:768px){.button-list{margin-bottom:1.5rem}}.button-list__label{display:block;background-color:#fff;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:1rem 2.5rem 1rem 1.25rem;border-bottom:1px solid #e7e9ea;margin-bottom:0;cursor:pointer;outline:0;-webkit-transition:background-color .2s ease-in-out 0ms;transition:background-color .2s ease-in-out 0ms}\@media (min-width:576px){.button-list__label{font-size:19px}}.button-list__label:first-child{border-radius:.25rem .25rem 0 0}.button-list__label:last-child{border-radius:0 0 .25rem .25rem;border-bottom:0}.button-list__label:focus,.button-list__label:hover{background-color:#f7f7f8}.button-list__label:active{background-color:#e7e9ea}.button-list__label:after{content:\"\";display:block;position:absolute;top:50%;right:1.25rem;margin-top:-.3rem;height:.625rem;width:.625rem;background-size:100% 100%;background-image:url(/stylelib/2_9/img/arrow-right_neutral_600.svg);background-repeat:no-repeat;background-position:50%}.button-list__label--disabled{color:#b0b6ba;cursor:not-allowed}.button-list__label--disabled:focus,.button-list__label--disabled:hover{background-color:#fff}.button-list__label--disabled:after{background-image:url(/stylelib/2_9/img/arrow-right_neutral_300.svg)}.button-list__subitems{display:table;list-style-type:none;padding:0;margin:.5rem 0 0}\@media (min-width:576px){.button-list__subitems{margin-top:1rem}}.button-list__subitem{display:table-row;font-size:13px}.button-list__subitem__label,.button-list__subitem__text{display:table-cell}.button-list__subitem__label{font-weight:700;padding-right:.5rem;display:table-cell;padding-bottom:.2rem}.button-list__group{border:1px solid #e7e9ea;border-radius:.25rem;margin-bottom:1rem}.button-list__items{max-height:18.6rem;overflow-y:auto;border-radius:.25rem}\@media (min-width:576px){.button-list__items{max-height:20rem}}.button-list--multiline .button-list__label{padding-top:1.5rem;padding-bottom:1.5rem}.button-list--filter huk-input{margin-bottom:0}.button-list--no-scroll .button-list__items{max-height:none}"}};export{r as huk_button_list};