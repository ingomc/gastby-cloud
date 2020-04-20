import{r as s,e as t,h as i,H as h}from"./p-8988f6c5.js";import{h as e,V as a,B as c,c as r}from"./p-0afcd70e.js";const o=class{constructor(i){s(this,i),this.modifier="default",this.label="",this.value=!1,this.disabled=!1,this.validity="not-validated",this.errorMessage=[],this.componentName="checkbox",this.handleChange=s=>{this.value=s.target.checked,this.valueChanged.emit(this.value)},this.handleBlur=()=>{this.blurred.emit()},this.blurred=t(this,"blurred",3),this.valueChanged=t(this,"valueChanged",3)}render(){const s=e({componentName:this.componentName,modifier:[this.modifier,this.disabled&&"is-disabled",a.getCssIsInvalid(this.validity),a.getCssIsValid(this.validity)]}),t=r(this.errorMessage);return i(h,{class:s},i("div",{class:c(this,"container")},i("label",{class:c(this,"inner")},i("input",{type:"checkbox",class:c(this,"input"),onChange:this.handleChange,disabled:this.disabled,onBlur:this.handleBlur,checked:this.value}),i("huk-checkmark",{variant:"checkbox",active:this.value})," ",i("span",{class:c(this,"label")},this.label))),a.isInvalid(this.validity)&&t.map(s=>i("huk-error",{message:s})))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.checkbox{display:block;margin-bottom:1rem;font-weight:500;color:#97a0a5}\@media (min-width:768px){.checkbox{margin-bottom:1.5rem}}.checkbox__container{display:block}.checkbox__inner{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;position:relative;padding:.25rem 0 .125rem;margin:0;cursor:pointer;font-size:16px;font-weight:500;color:#35444c;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:95%}\@media (min-width:576px){.checkbox__inner{font-size:19px}}.checkbox__inner input{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.checkbox huk-checkmark{position:relative;display:inline-block;vertical-align:top;width:1.5rem;height:1.5rem;margin-right:1rem}.checkbox__icon-container{display:inline-block;margin-left:auto}.checkbox--is-disabled .checkbox__inner{color:#b0b6ba;cursor:not-allowed}.checkbox--multiselect .checkbox__container{background-color:#fff;border-radius:.25rem;border:1px solid #e7e9ea}.checkbox--multiselect .checkbox__container:focus,.checkbox--multiselect .checkbox__container:hover{background-color:#f7f7f8}.checkbox--multiselect .checkbox__container:active{background-color:#e7e9ea}.checkbox--multiselect .checkbox__inner{position:relative;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:1rem 1.5rem;max-width:none;cursor:pointer}"}};export{o as huk_checkbox};