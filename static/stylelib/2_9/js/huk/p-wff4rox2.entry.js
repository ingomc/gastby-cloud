import{r as t,h as s,H as e}from"./p-8988f6c5.js";import{B as r}from"./p-0afcd70e.js";const a=class{constructor(s){t(this,s),this.headlineText="Guten",this.showGreet=!1,this.headlineTag="h3",this.componentName="greeter"}getGreet(){const t=parseInt(((new Date).toLocaleTimeString().match(/^\d{2}/)||["11"])[0]);let s="";switch(!0){case t<=1||t>17:s="Abend.";break;case t>1&&t<=9:s="Morgen.";break;case t>9&&t<=17:s="Tag."}return s}render(){return s(e,{class:this.componentName},this.showGreet&&s(this.headlineTag,{class:r(this,"headline")},`${this.headlineText} ${this.getGreet()}`),s("div",{class:r(this,"content")},s("slot",null)))}static get style(){return".huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.greeter{font-size:23px;line-height:1.24;font-weight:700}\@media (max-width:1023.98px){.greeter{font-size:19px}}.greeter__headline{margin-bottom:1.5rem;font-size:23px}\@media (max-width:1023.98px){.greeter__headline{font-size:19px}}.greeter__content{word-break:break-word;margin-bottom:1.5rem}"}};export{a as huk_greeter};