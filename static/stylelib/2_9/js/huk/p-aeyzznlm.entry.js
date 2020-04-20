import{r as s,e as t,h as i,H as e}from"./p-8988f6c5.js";import{B as h,h as a,V as c}from"./p-0afcd70e.js";const n=class{constructor(i){s(this,i),this.componentName="multi-select",this.value={},this.options=[],this.validity="not-validated",this.errorMessage="",this.disabled=!1,this.valueChanged=t(this,"valueChanged",3)}toggleCheckbox(s){s.disabled||(this.value=Object.assign(Object.assign({},this.value),{[s.value]:!this.value[s.value]}),this.valueChanged.emit(this.value))}renderOption(s){const t=this.options[s];return i("div",{class:h(this,"container",t.disabled&&"disabled",this.value[t.value]&&"selected",t.icon&&"with-icon")},i("label",{class:h(this,"container-inner"),tabindex:"0",onClick:()=>{this.toggleCheckbox(t)},onKeyDown:s=>{" "!==s.key.toLowerCase()&&"spacebar"!==s.key.toLowerCase()||this.toggleCheckbox(t)}},i("huk-checkmark",{variant:"checkbox",active:this.value[t.value]}),i("span",{class:h(this,"label")},t.label),t.icon&&i("span",{class:h(this,"icon-container")},i("huk-icon",{icon:t.icon,modifier:"md"}))),i("slot",{name:`${t.value}`}))}render(){const s=a({componentName:this.componentName,modifier:[this.disabled&&"is-disabled",c.getCssIsInvalid(this.validity),c.getCssIsValid(this.validity)]}),t=!this.disabled&&this.errorMessage&&c.isInvalid(this.validity);return i(e,{class:s},i("div",{class:h(this,"group")},this.options.map((s,t)=>this.renderOption(t))),t&&i("huk-error",{message:this.errorMessage}))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.multi-select{outline:0!important;display:block;margin-bottom:1rem}\@media (min-width:768px){.multi-select{margin-bottom:1.5rem}}.multi-select__container{background-color:#fff;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:1px solid #e7e9ea;cursor:pointer;outline:0;-webkit-transition:background-color .2s ease-in-out 0ms;transition:background-color .2s ease-in-out 0ms}.multi-select__container:first-child{border-radius:.25rem .25rem 0 0}.multi-select__container:last-child{border-radius:0 0 .25rem .25rem;border-bottom:0}\@media (min-width:576px){.multi-select__container{font-size:19px}}.multi-select__container:focus,.multi-select__container:hover{background-color:#f7f7f8}.multi-select__container:active{background-color:#e7e9ea}.multi-select__container--disabled{color:#b0b6ba;cursor:not-allowed}.multi-select__container huk-checkmark{position:relative;display:inline-block;vertical-align:top;width:1.5rem;height:1.5rem;margin-right:1rem}.multi-select__container--with-icon .multi-select__container-inner{padding:.5rem 1.5rem}.multi-select__container-inner{margin-bottom:0;padding:1rem 1.5rem;display:-ms-flexbox;display:flex;position:relative;cursor:pointer;outline:0;-ms-flex-align:center;align-items:center}.multi-select__group{border:1px solid #e7e9ea;border-radius:.25rem;margin-bottom:1rem}.multi-select__label{white-space:normal}.multi-select--has-focus .multi-select__group{border:1px solid #cbcfd2}.multi-select--is-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.multi-select [slot]{display:none;width:100%;background:#fff;padding:1.5rem;overflow:hidden}.multi-select__container--selected [slot]{display:block}.multi-select__icon-container{margin-left:auto}"}};export{n as huk_multi_select};