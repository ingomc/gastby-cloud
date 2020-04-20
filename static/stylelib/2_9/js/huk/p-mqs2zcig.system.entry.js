System.register(["./p-6086d49a.system.js","./p-4fc8d94d.system.js"],(function(e){"use strict";var t,a,n;return{setters:[function(e){t=e.r;a=e.e},function(e){n=e.H}],execute:function(){var i=function(){var e=function(e){n.trackAdobeAndNetmind({eventAction:"chat",pageUrl:window.location.href,eventLabel:"chat",eventValue:e,componentName:"chatbot",elementName:"div",clickId:"eva_chatWindow"})};var t={routes:{getJwtRoute:"/api/auth/webtoken",refreshJwtRoute:"/api/auth/refresh",sessionDataRoute:"/conversation",resetSessionRoute:"/vassistant/api/session/reset",keepAliveRoute:"/vassistant/api/session/keepalive",saveConversationFeedback:"/vassistant/api/conversation-feedback"},loggingEnabled:false,shortConcatTimeout:1500,longConcatTimeout:3500,waitingTimePerChar:30,minWaitingTime:750,chatBubble:{appearenceTime:15e3,firstAppearAfter:5e3,shakeAtFirstAppear:true,secondAppearAfter:5e4,shakeAtSecondAppear:false,thirdAppearAfter:125e3,shakeAtThirdAppear:false,showChatBubbleNoteOnMobileDevice:false},mobileDeviceWidth:736,autoFocusOnMobileDevice:false,chatTitleHeight:52,showConversationFeedbackAfter:3e3};var a={clientId:"standard",userInput:"",previousUserInput:"",concatTimeout:0,feedbackComment:"",conversationFeedbackGiven:false,checkedStar:"",labels:{chatBubbleNoteTitle:"Hallo! Ich bin Ihr digitaler Assistent und unterstütze meine menschlichen Kollegen bei Fragen zur Versicherung. Wie kann ich Ihnen helfen?",chatTitle:"Ihr digitaler Assistent",standardPlaceholder:"Ihre Nachricht...",profanityPlaceholder:"",answerProposalPlaceholder:"Bitte wählen Sie einen der Vorschläge",chatError:"In der Kommunikation mit Ihrem digitalen Assistenten ist ein Fehler aufgetreten.",warnings:"Es ist ein interner Fehler aufgetreten. Die nachfolgende Nachricht könnte unvollständig oder inkorrekt sein.",feedbackSuccessMsg:"Herzlichen Dank für ihr Feedback.<br>Sie helfen uns damit, den digitalen Assistenten stetig weiter zu entwickeln.",commentPlaceholder:"Hier ist Platz für Ihren Kommentar...",convFeedbackTitle:"Bitte bewerten Sie Ihr Chaterlebnis",convFeedbackSubTitle:"Helfen Sie uns dabei unseren Service und den digitalen Assistenten zu verbessern.",feedbackFailMsg:"Beim Speichern des Feedbacks ist ein Fehler aufgetreten.",submitConvFeedback:"Feedback senden",cancelConvFeedback:"Abbrechen"},chatIsClicked:false,chatWasActive:false,initialized:false,session_id:"",chatHistory:[""],lock_level:0,answer_proposals:undefined,messages:[""],authToken:""};window.addEventListener("chatBotRendered",(function(){i()}));setInterval((function(){T(undefined,undefined)}),60*60*1e3);setInterval((function(){o()}),28*60*1e3);var i=function(){r();I((function(e){if(e.initStatus==="init"||e.initStatus==="history"){a.session_id=e.session_id;a.chatHistory=e.chatHistory;if(e.initStatus==="init"){c();l()}v();f();p();m();h();_();b();s();if(e.initStatus==="init"){d()}else if(e.initStatus==="history"){B(a.chatHistory);var t=document.getElementById("eva_chatWindow");t.style.display="block";a.chatIsClicked=true;if(e.answer_proposals){a.answer_proposals=e.answer_proposals}else{a.answer_proposals=undefined}if(e.lock_level){a.lock_level=e.lock_level}else{a.lock_level=0}y(a.answer_proposals);D(a.lock_level);if(typeof e.toggleOnInit==="undefined"||e.toggleOnInit===true||e.toggleOnInit==="true"){M()}}}}),(function(){return}))};var s=function(){a.messages=[];a.answer_proposals=undefined;a.initialized=true};var r=function(){w((function(e){a.authToken=e.jsonWebToken}),(function(){return}))};var o=function(){k((function(e){a.authToken=e.jsonWebToken}),(function(){return}))};var l=function(){var t=document.createElement("div");t.id="eva_chat_bubble";t.className="eva_chat_bubble";t.onclick=function(){e("open");j()};document.body.appendChild(t)};var c=function(){var t=document.createElement("div");t.id="eva_bubblechat_note";t.className="eva_chat_bubble_note";var n=document.createElement("table");var i=document.createElement("tr");var s=document.createElement("td");var r=document.createElement("td");r.innerHTML=a.labels.chatBubbleNoteTitle;i.appendChild(s);i.appendChild(r);n.appendChild(i);t.appendChild(n);t.onclick=function(){e("open");j()};document.body.appendChild(t)};var d=function(){if(!V()||t.chatBubble.showChatBubbleNoteOnMobileDevice){u(t.chatBubble.firstAppearAfter,t.chatBubble.shakeAtFirstAppear);u(t.chatBubble.secondAppearAfter,t.chatBubble.shakeAtSecondAppear);u(t.chatBubble.thirdAppearAfter,t.chatBubble.shakeAtThirdAppear)}};var u=function(e,n){var i=document.getElementById("eva_bubblechat_note");setTimeout((function(){if(a.chatIsClicked===false){i.style.display="block";G(i);if(n){setTimeout((function(){var e=setInterval((function(){U()}),700);setTimeout((function(){clearInterval(e)}),2150)}),1200)}setTimeout((function(){K(i)}),t.chatBubble.appearenceTime)}}),e)};var v=function(){var t=document.createElement("div");t.id="eva_chatWindow";t.className="eva_chat_window";t.style.display="none";document.body.appendChild(t);var n=document.createElement("div");n.className="eva_chat_title";n.id="eva_chatTitle";n.innerHTML=a.labels.chatTitle;n.onclick=function(){if(!a.chatWasActive){e("toggle");M()}else{a.chatWasActive=false}};t.appendChild(n)};var f=function(){var e=document.getElementById("eva_chatWindow");var t=document.createElement("div");t.id="eva_chatContent";t.className="eva_chat_content";e.appendChild(t);var n=document.createElement("div");n.id="eva_chatHistory";n.className="eva_chat_history";t.appendChild(n);var i=document.createElement("div");i.id="eva_tooltipDiv";document.body.appendChild(i);var s=document.createElement("div");s.className="eva_conversation-feedback";s.id="eva_conversationFeedback";s.style.display="none";t.appendChild(s);var r=document.createElement("div");r.innerHTML=a.labels.convFeedbackTitle;r.className="eva_feedbackText";s.appendChild(r);var o=document.createElement("div");o.innerHTML=a.labels.convFeedbackSubTitle;o.className="eva_feedbackSubText";s.appendChild(o);var l=document.createElement("fieldset");l.className="eva_rating";s.appendChild(l);var c=function(e){var t=document.createElement("input");t.type="radio";t.id="eva_star"+e;t.name="eva_rating";t.className="eva_starInput";t.value=(5-e).toString();t.onclick=function(){v.disabled=false;a.checkedStar=t.value};l.appendChild(t);var n=document.createElement("label");n.className="eva_full";n.title=(5-e).toString();n.htmlFor="eva_star"+e;l.appendChild(n)};for(var d=0;d<5;d++){c(d)}var u=document.createElement("textarea");u.placeholder=a.labels.commentPlaceholder;u.id="eva_feedbackText";u.className="eva_user-feedback";u.onkeyup=function(){if(u.value.length){v.disabled=false}else{if(a.checkedStar===undefined){v.disabled=true}}};s.appendChild(u);var v=document.createElement("button");s.appendChild(v);v.innerHTML=a.labels.submitConvFeedback;v.className="eva_feedback-button";v.id="eva_feedbackButtonSave";v.disabled=true;v.onclick=function(){for(var e=0;e<5;e++){var n=document.getElementById("eva_star"+e);if(n.checked==true){a.checkedStar=n.value}}var i=document.getElementById("eva_feedbackText");a.feedbackComment=i.value;s.style.display="none";D(0);N((function(){a.conversationFeedbackGiven=true;t.removeChild(s);q(a.labels.feedbackSuccessMsg,"success")}),(function(){q(a.labels.feedbackFailMsg,"warning")}))};var f=document.createElement("button");s.appendChild(f);f.innerHTML=a.labels.cancelConvFeedback;f.className="eva_feedback-button";f.id="eva_feedbackButtonCancel";f.onclick=function(){s.style.display="none";D(0)}};var p=function(){var e=document.getElementById("eva_chatHistory");var t=document.createElement("div");t.id="eva_chatMessages";e.appendChild(t);P()};var m=function(){var e=document.getElementById("eva_chatHistory");var t=document.createElement("div");t.id="eva_answerProposals";t.className="eva_answer_proposals";e.appendChild(t)};var h=function(){var e=document.getElementById("eva_chatHistory");var t=document.getElementById("eva_chatContent");var a=document.createElement("div");e.id="eva_chatHistory";a.id="eva_chatHistoryEnd";e.appendChild(a);var n=document.createElement("div");n.id="eva_typingAnimation";n.className="eva_typing_animation";n.style.visibility="hidden";t.appendChild(n)};var _=function(){var t=document.getElementById("eva_chatContent");var n=document.createElement("div");n.className="eva_chat_input";n.id="eva_textInputContainer";var i=document.createElement("input");i.id="eva_textInput";i.type="text";i.placeholder=a.labels.standardPlaceholder;i.tabIndex=-1;i.onkeydown=function(e){x(e)};i.onclick=function(){e("typing")};n.appendChild(i);t.appendChild(n)};var b=function(){var e=document.getElementById("eva_chatContent");var t=document.createElement("div");t.id="eva_alert_message";t.className="eva_alert";var a=document.createElement("div");a.id="eva_blind_chat";var n=document.createElement("div");n.innerHTML="&times;";n.id="eva_alert_close";n.className="eva_alert_closebtn";n.id="eva_alert_close";n.onclick=function(){n.style.visibility="hidden";t.style.visibility="hidden";a.style.visibility="hidden"};e.insertBefore(t,e.firstChild);e.insertBefore(n,e.firstChild);e.insertBefore(a,e.firstChild)};var g=function(e){var t=document.getElementById("eva_chatMessages");var n=document.createElement("div");n.className=e.user=="watson"?"eva_message--watson":"eva_message--user";n.className+=" eva_message";n.id="eva_chatmessage_"+(a.messages.length-1);var i=document.createElement("p");if(e.user==="watson"){i.innerHTML=e.text}else{i.textContent=e.text}n.appendChild(i);t.appendChild(n);if(e.user=="watson"){X(n)}P()};var y=function(e){var t=document.getElementById("eva_answerProposals");while(t.firstChild){t.removeChild(t.firstChild)}var a=[];var n=z(e);a=J(n,a);for(var i=0;i<n.length;i++){var s=document.createElement("button");s.className=a[i];s.innerHTML=n[i];s.id=i.toString();s.onclick=function(e){var t=e.target;L(n[t.id])};t.appendChild(s)}t.style.visibility="visible";P(true)};var w=function(e,a){var n=new XMLHttpRequest;n.open("GET",t.routes.getJwtRoute,false);n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE){if(n.status===200){return e(JSON.parse(n.responseText))}return a()}};n.send()};var k=function(e,n){var i=new XMLHttpRequest;i.open("GET",t.routes.refreshJwtRoute,false);i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===202){return e(JSON.parse(i.responseText))}return n()}};i.setRequestHeader("Authorization",a.authToken);i.send()};var I=function(e,a){var n=new XMLHttpRequest;n.open("GET",t.routes.sessionDataRoute,true);n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE){if(n.status===200){return e(JSON.parse(n.responseText))}return a()}};n.send()};var E=function(e,n){var i=new XMLHttpRequest;i.open("POST",t.routes.resetSessionRoute,true);i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===200){return e()}return n()}};var s={};s.session_id=a.session_id;i.setRequestHeader("Authorization",a.authToken);i.setRequestHeader("Content-Type","application/json");i.send(JSON.stringify(s))};var T=function(e,n){var i=new XMLHttpRequest;i.open("POST",t.routes.keepAliveRoute,true);i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===200){return e()}return n()}};var s={};s.session_id=a.session_id;i.setRequestHeader("Authorization",a.authToken);i.setRequestHeader("Content-Type","application/json");i.send(JSON.stringify(s))};var C=function(e,n,i,s){var r=new XMLHttpRequest;r.open("POST",t.routes.sessionDataRoute,true);r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(r.status===200){try{var e=JSON.parse(r.responseText);if(e.lock_level){a.lock_level=e.lock_level}else{a.lock_level=0}if(e.answer_proposals&&e.answer_proposals.length>0){a.answer_proposals=e.answer_proposals}return i(e)}catch(t){return s()}}if(r.status===500){if(r.responseText){try{return s(JSON.parse(r.responseText))}catch(n){return s()}}return s()}return s()}};var o={};o.client_id=e;o.session_id=a.session_id;if(n){o.text=n}r.setRequestHeader("Authorization",a.authToken);r.setRequestHeader("Content-Type","application/json");r.send(JSON.stringify(o))};var N=function(e,n){var i=new XMLHttpRequest;i.open("POST",t.routes.saveConversationFeedback,true);i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===200){try{return e(JSON.parse(i.responseText))}catch(t){return n()}}if(i.status===500){if(i.responseText){try{return n(JSON.parse(i.responseText))}catch(a){return n()}}}else{return n()}}};var s={};s.client_id=a.clientId;s.comment=a.feedbackComment;if(a.checkedStar){s.rating=parseInt(a.checkedStar)}s.session_id=a.session_id;i.setRequestHeader("Authorization",a.authToken);i.setRequestHeader("Content-Type","application/json");i.send(JSON.stringify(s))};var B=function(e){if(!e){S()}else{for(var t in e){var a=e[t];if(a.user==="human"){R(a.text)}else{A(a)}}}P()};var S=function(){F(true);D(1);E((function(){C(a.clientId,undefined,(function(e){F(false);D(0);if(e.lock_level){D(e.lock_level)}var t={text:e.text[0]?e.text[0]:"",user:"watson",messageId:e.messageId,topIntent:e.topIntent?e.topIntent:undefined,topConfidence:e.confidence?e.confidence.toString():undefined};A(t);if(e.text.length<=0){q(a.labels.warnings,"warning")}if(e.answer_proposals){a.answer_proposals=e.answer_proposals;y(a.answer_proposals)}return}),(function(e){F(false);D(0);if(!e||!e.text){q(a.labels.chatError,"error")}else{O(e)}q(a.labels.chatError,"error");return}))}),(function(){F(false);D(0);q(a.labels.chatError,"error");return}))};var H=function(e){W(true);D(1);C(a.clientId,e,(function(e){if(e.lock_level){D(e.lock_level)}var n=false;if(e.int_actions&&e.int_actions.indexOf("requestConversationFeedback")!==-1&&a.conversationFeedbackGiven==false){D(1);n=true;setTimeout((function(){document.getElementById("eva_conversationFeedback").style.display="inline"}),t.showConversationFeedbackAfter)}if(e.text.length>0){var i=0;var s=0;for(var r=0;r<e.text.length;r++){var o={};o.user="watson";o.text=e.text[r];o.messageId=e.messageId;o.automatedRated=e.rated?e.rated:undefined;setTimeout((function(t,n){s++;A(t);if(s==e.text.length){W(false);if(!e.lock_level&&e.answer_id&&e.answer_id.indexOf("Profanity_1")==-1&&!n){D(0)}if(e.answer_proposals&&e.answer_proposals.length>0){a.answer_proposals=e.answer_proposals;y(e.answer_proposals)}}}),i,o,n);var l=String(e.text[r]).replace(/<[^>]+>/gm,"");var c=l.length*t.waitingTimePerChar;if(c<t.minWaitingTime){c=t.minWaitingTime}i=i+c}}else{var d={};d.user="watson";d.text="";d.messageId=e.messageId;d.automatedRated=e.rated?e.rated:undefined;setTimeout((function(){A(d);F(false);D(0);if(e.answer_proposals&&e.answer_proposals.length>0){y(e.answer_proposals)}}),d)}if(e.warnings&&e.warnings.length>0){q(a.labels.warnings,"warning")}}),(function(e){if(!e||!e.text){q(a.labels.chatError,"error")}else{O(e)}F(false);D(0);P()}))};var x=function(e){if(e.keyCode===13){var n=document.getElementById("eva_textInput");a.userInput=n.value;if(a.previousUserInput){a.previousUserInput+=" "+a.userInput}else{a.previousUserInput=a.userInput}if(a.userInput!=""){R(a.userInput)}}if(a.concatTimeout){clearTimeout(a.concatTimeout)}var i=e.keyCode===13?t.shortConcatTimeout:t.longConcatTimeout;a.concatTimeout=window.setInterval((function(){if(!a.previousUserInput){return}document.activeElement.blur();H(a.previousUserInput);a.previousUserInput="";a.userInput=""}),i)};var A=function(e){a.messages.push(e);g(e);if(!V()||t.autoFocusOnMobileDevice){setTimeout((function(){var e=document.getElementById("eva_textInput");e.focus()}),0)}P()};var R=function(e){var t=document.getElementById("eva_textInput");t.value="";var n=document.getElementById("eva_answerProposals");if(a.answer_proposals){while(n.firstChild){n.removeChild(n.firstChild)}a.answer_proposals=undefined}var i=document.getElementById("eva_alert_message");if(i.className==="eva_alert eva_alert--yellow"||i.className==="eva_alert eva_alert--blue"){i.style.visibility="hidden";var s=document.getElementById("eva_alert_close");s.style.visibility="hidden"}var r={text:e,user:"human"};a.messages.push(r);g(r);P()};var L=function(e){R(e);H(e)};var O=function(e){var t={text:e.text,user:"watson"};A(t)};var M=function(){var e=document.getElementById("eva_chatContent");var a=document.getElementById("eva_chatWindow");var n=document.getElementById("eva_chatHistory");if(e.className.indexOf("eva_chat_content--show")!=-1){e.className=e.className.replace("eva_chat_content--show","");a.className=a.className.replace("eva_chat_window_move_top","");a.className=a.className.replace("eva_chat_window--show","");n.className=n.className.replace("eva_chat_history--show","")}else{e.className+=" eva_chat_content--show";a.className+=" eva_chat_window--show eva_chat_window_move_top";n.className+=" eva_chat_history--show";setTimeout((function(){if((!V()||t.autoFocusOnMobileDevice)&&document.getElementById("eva_alert_message").style.visibility!="visible"){setTimeout((function(){var e=document.getElementById("eva_textInput");e.focus()}),0)}}),1e3)}};var F=function(e){var t=document.getElementById("eva_typingAnimation");t.style.visibility=e?"visible":"hidden"};var W=function(e){var t=document.getElementById("eva_chatMessages");var a="eva_speechLoadAnimation";if(e){var n=document.createElement("div");n.id=a;n.className="eva_message--watson eva_message eva_speech_load_animation";n.textContent="   ";t.parentNode.insertBefore(n,t.nextSibling);P()}else{var n=document.getElementById(a);n.remove()}};var D=function(e){var t=document.getElementById("eva_textInput");t.disabled=e>0?true:false;if(e<=1){t.placeholder=a.labels.standardPlaceholder}else if(e==2){t.placeholder=a.labels.answerProposalPlaceholder}else if(e==3){t.placeholder=a.labels.profanityPlaceholder}};var q=function(e,t){var a=document.getElementById("eva_alert_message");var n=document.getElementById("eva_alert_close");a.innerHTML=e;a.style.visibility="visible";var i=document.getElementById("eva_blind_chat");i.style.visibility="visible";var s=document.getElementById("eva_alert_close");s.style.visibility="visible";if(t=="error"){a.className="eva_alert eva_alert--red";n.className="eva_alert_closebtn"}else if(t=="warning"){a.className="eva_alert eva_alert--yellow";n.className="eva_alert_closebtn";i.style.visibility="hidden"}else if(t=="success"){a.className="eva_alert eva_alert--blue";n.className="eva_alert_closebtnblack";i.style.visibility="hidden"}};var P=function(e){var t=document.getElementById("eva_chatHistory");var a=t.querySelectorAll(".eva_message--watson");if(a.length>0){var n=a[a.length-1];var i=Date.now();if(e){t.scrollTop+=100;return}setTimeout((function(){var e=t.scrollTop;if(t.scrollTop<n.offsetTop-10){var a=setInterval((function(){var s=Date.now()-i;if(s>=3e3){clearInterval(a);return}if(t.scrollTop<n.offsetTop-10){e=t.scrollTop;t.scrollTop+=5;if(t.scrollTop===e){clearInterval(a);return}}else{clearInterval(a);return}}),5)}else{return}}),50)}};var X=function(e){var t=e.querySelectorAll(".eva_tooltip");var a=document.getElementById("eva_tooltipDiv");var n=function(){a.className="";a.style.zIndex="-1"};var i=function(e,t){var n=t.getAttribute("data-tooltip");a.innerText=n;var i=a.offsetHeight+window.pageYOffset;if(parseInt(Y(t).top,10)>i){a.style.top=parseInt(Y(t).top,10)+"px";a.className="eva_tooltip_div_after"}else{a.style.top=parseInt(Y(t).top+a.offsetHeight+t.offsetHeight+5,10)+"px";a.className="eva_tooltip_div_before"}var s=window,r=document,o=r.getElementsByTagName("body")[0],l=s.innerWidth||e.clientWidth||o.clientWidth;var c=parseInt(Y(t).left+t.offsetWidth/2,10);var d=l+window.pageXOffset-a.offsetWidth/2-5;if(c>d){c=d}var u=window.pageXOffset+a.offsetWidth/2+5;if(c<u){c=u}a.style.left=c+"px";a.style.zIndex="";a.className+=" eva_tooltip--show"};for(var s=0;s<t.length;s++){var r=t[s];r.setAttribute("data-tooltip",t[s].title);r.removeAttribute("title");r.addEventListener("mouseover",(function(e){var t=e.target;i(e,t)}));r.addEventListener("touchstart",(function(e){var t=e.target;i(e,t);e.preventDefault()}));r.addEventListener("touchend",(function(e){n();e.preventDefault()}));r.addEventListener("mouseout",n)}};var z=function(e){var t=[];var a=[];for(var n=0;n<e.length;n++){if(e[n].length>19){t.push(e[n])}else{a.push(e[n])}}return t.concat(a)};var J=function(e,t){var a=0;var n=0;for(var i=0;i<e.length;i++){if(e[i].length>19){t[i]="eva_answer_button eva_answer_button--big"}else if(e[i].length<5){t[i]="eva_answer_button eva_answer_button--small";n++}else{t[i]="eva_answer_button";a++}}if(n%4!=0){for(var i=0;i<e.length;i++){if(t[i]=="eva_answer_button eva_answer_button--small"){t[i]="eva_answer_button"}}}if(a%2!=0){t[e.length-1]="eva_answer_button eva_answer_button--big"}return t};var j=function(){var e=document.getElementById("eva_chatWindow");e.style.display="block";S();setTimeout((function(){var e=document.getElementById("eva_bubblechat_note");e.style.display="none";var t=document.getElementById("eva_chat_bubble");t.style.display="none";M();a.chatIsClicked=true}),500)};var U=function(){var e=document.getElementById("eva_bubblechat_note");e.classList.add("eva_chat_bubble_note--shaking")};var G=function(e){e.style.opacity=0;var t=0;var a=setInterval((function(){t+=.1;e.style.opacity=t;if(e.style.opacity>=1){clearInterval(a)}}),70)};var K=function(e){e.style.opacity=1;var t=1;var a=setInterval((function(){t-=.1;e.style.opacity=t;if(e.style.opacity<=0){clearInterval(a);e.style.display="none"}}),70)};var V=function(){var e=window,a=document,n=a.documentElement,i=a.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||i.clientWidth;if(s<=t.mobileDeviceWidth){return true}return false};var Y=function(e){var t={};var a=document.body.getBoundingClientRect();var n=e.getBoundingClientRect();t.top=n.top-a.top;t.left=n.left-a.left;return t};window.tabChangeListener={onFocus:function(){if(a.initialized&&a.chatIsClicked){I((function(e){a.session_id=e.session_id;a.chatHistory=e.chatHistory;if(e.initStatus==="history"){var t=document.getElementById("eva_chatMessages");t.innerHTML="";B(a.chatHistory);if(e.answer_proposals){a.answer_proposals=e.answer_proposals;y(a.answer_proposals)}if(e.lock_level){a.lock_level=e.lock_level}else{a.lock_level=0}D(a.lock_level);if(a.chatWasActive){M()}}}),(function(){return}))}},onBlur:function(){var e=document.getElementById("eva_chatContent");if(e.className.indexOf("eva_chat_content--show")!==-1){a.chatWasActive=true}else{a.chatWasActive=false}}};window.addEventListener("chatBotRendered",(function(){window.addEventListener("focus",window.tabChangeListener.onFocus);window.addEventListener("blur",window.tabChangeListener.onBlur)}))};var s=e("huk_chatbot",function(){function e(e){t(this,e);this.chatBotRendered=a(this,"chatBotRendered",7)}e.prototype.componentDidLoad=function(){this.chatBotRendered.emit()};e.prototype.render=function(){return i()};Object.defineProperty(e,"style",{get:function(){return"\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.huk-text--white{color:#fff}.huk-text--orange{color:#fba308}.huk-text--mint{color:#00abba}.huk-text--mint-dark{color:#055e5f}.eva_chat_bubble{cursor:pointer;display:block;width:80px;height:80px;-webkit-box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);background-color:#fba308;background-image:url(/stylelib/2_9/img/chat.svg),linear-gradient(135deg,#ffd385,#fb9105);background-size:65% 65%,100% 100%;background-position:50%;background-repeat:no-repeat;border:2px solid #fef1da;border-radius:40px;bottom:4rem;position:fixed;z-index:4000;right:4.5rem;-webkit-transition:-webkit-transform .15s ease-in-out 0ms;transition:-webkit-transform .15s ease-in-out 0ms;transition:transform .15s ease-in-out 0ms;transition:transform .15s ease-in-out 0ms,-webkit-transform .15s ease-in-out 0ms}\@media (max-width:767.98px){.eva_chat_bubble{right:20px;bottom:20px}}.eva_chat_bubble:focus,.eva_chat_bubble:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.eva_chat_bubble:active{background-image:url(/stylelib/2_9/img/chat.svg)}.eva_chat_bubble_note{cursor:pointer;display:none;width:320px;margin:2rem auto;color:#35444c;background-color:#f5fcff;border-radius:.25rem;border:2px solid #35444c;padding:.75rem 1rem;-webkit-box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);box-shadow:0 .313rem .625rem 0 rgba(0,0,0,.12);position:fixed;z-index:4001;bottom:8.5rem;right:4.5rem}.eva_chat_bubble_note:before{content:\"\";position:absolute;display:block;z-index:1;bottom:0;right:40px;background-color:#f5fcff;width:16px;height:16px;margin-left:-8px;-webkit-transform:rotate(225deg) translate3d(-11.25px,0,0);transform:rotate(225deg) translate3d(-11.25px,0,0);border-color:#35444c transparent transparent #35444c;border-style:solid;border-width:2px}.eva_chat_bubble_note--shaking{-webkit-animation:shake 1s cubic-bezier(.36,.07,.19,.97) both;animation:shake 1s cubic-bezier(.36,.07,.19,.97) both;-webkit-transform:translateZ(0);transform:translateZ(0)}.eva_chat_window{font-size:13px;color:#35444c;position:fixed;z-index:4000;width:352px;height:365px;bottom:0;right:70px;padding-top:43px;-webkit-transition:bottom .5s ease-in-out,max-height 1s;transition:bottom .5s ease-in-out,max-height 1s;max-height:43px}\@media (max-width:767.98px){.eva_chat_window{width:100%;left:0;height:95vh!important}}\@media (min-width:1024px){.eva_chat_window{width:400px}}.eva_chat_window--show{max-height:100%!important}.eva_chat_window--show .eva_chat_title:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.eva_chat_window--show .eva_chat_input input{opacity:1}.eva_chat_window hr{border:0;height:1px;background:#e7e9ea;margin:.5rem auto}.eva_chat_window button{margin:0 0 5px;padding:5px;white-space:normal;border-radius:.25rem;border:0;background-image:linear-gradient(30deg,#fba308,#fcba44);background-repeat:repeat-x;color:#fff;font-size:13px;font-weight:700;cursor:pointer}.eva_chat_window button:focus,.eva_chat_window button:hover{background-image:none;background-color:#fb9105}.eva_chat_window button:active{background-color:#f0670a}.eva_chat_window table{border-collapse:collapse;border-spacing:0;background-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;margin-bottom:1rem}.eva_chat_window table>thead:first-child>tr:first-child>td,.eva_chat_window table>thead:first-child>tr:first-child>th{border-top:0}.eva_chat_window table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #cbcfd2}.eva_chat_window table>tbody>tr>td,.eva_chat_window table>tbody>tr>th{vertical-align:top;border-top:1px solid #cbcfd2;padding:5px}.eva_chat_window .info{background-color:#cbcfd2}.eva_chat_window .text-center{text-align:center}.eva_chat_window .liste_tarifleistung{padding:4px 8px 0;border:1px solid #00abba;border-radius:.25rem;max-width:320px;margin-top:.5rem}.eva_chat_window .liste_tarifleistung h4{font-size:19px;margin:0;border-bottom:1px solid #00abba;padding:4px;color:#00abba}.eva_chat_window .liste_tarifleistung ul{margin-left:-10px;margin-top:0;margin-bottom:10px;padding:4px 0 0 2.5em;list-style-position:outside;list-style-type:none}.eva_chat_window .liste_tarifleistung ul li{margin:0;padding:2px 2px 0}.eva_chat_window .liste_tarifleistung ul li:before{text-indent:-2em;padding-left:1em;background-color:transparent;background-size:100%;background-repeat:no-repeat;background-position:50%;background-image:url(/stylelib/2_9/img/check.svg)}.eva_chat_window .glyphicon{background-size:100% 100%;background-size:contain;background-position:50%;content:\"\";background-repeat:no-repeat}.eva_chat_window .glyphicon-calendar{display:inline;padding-left:1em;background-image:url(/stylelib/2_9/img/date-picker.svg)}.eva_chat_window [data-tooltip]{display:inline-block;position:relative;cursor:help;padding-right:4px;margin-right:4px}.eva_chat_window [data-tooltip]:hover:after,.eva_chat_window [data-tooltip]:hover:before{display:block}.eva_chat_window [data-tooltip]:after{content:\"i\";font-size:13px;font-style:italic;font-weight:700;padding-left:2px;padding-right:2px;vertical-align:super;position:absolute;right:-3px;top:1px;z-index:2}.eva_chat_title{position:absolute;display:block;top:0;left:0;width:100%;height:43px;background-image:linear-gradient(30deg,#fba308,#fcba44);background-repeat:repeat-x;color:#fff;font-size:19px;font-weight:700;padding:.5rem 1rem;border-radius:.5rem .5rem 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.eva_chat_title:before{background-size:100% 100%;background-size:contain;background-position:50%;background-repeat:no-repeat;display:inline;padding-left:1em;background-image:url(/stylelib/2_9/img/arrow-right_white.svg);-webkit-transition:-webkit-transform .15s ease-in-out 0ms;transition:-webkit-transform .15s ease-in-out 0ms;transition:transform .15s ease-in-out 0ms;transition:transform .15s ease-in-out 0ms,-webkit-transform .15s ease-in-out 0ms;content:\"\";display:block;position:absolute;right:1rem;top:48%;width:12px;height:12px;margin-top:-6px}.eva_chat_title:focus,.eva_chat_title:hover{background-image:none;background-color:#fb9105}.eva_chat_title:active{background-color:#f0670a}.eva_chat_content{position:relative;top:0;left:0;height:100%;width:100%;background:#fff;border:1px solid #cbcfd2;border-top:0;-webkit-transition:visibility .8s;transition:visibility .8s;visibility:hidden}.eva_chat_content .eva_typing_animation{position:absolute;opacity:0;bottom:45px;height:calc(100% - 46px);width:100%;left:0;background:hsla(0,0%,100%,.5)}.eva_chat_content .eva_typing_animation:before{content:\"\";display:block;position:absolute;z-index:99;opacity:1;color:#fba308;-webkit-animation:spin .85s ease-in-out infinite;animation:spin .85s ease-in-out infinite;border:.45rem solid transparent;border-top-color:#fba308;border-radius:50%;top:50%;left:50%;margin-left:-1.5rem;margin-top:-1.5rem;width:3rem;height:3rem}.eva_chat_content--show{visibility:visible!important}.eva_chat_content--show .eva_typing_animation{opacity:1}.eva_chat_history{position:absolute;max-height:calc(100% - 46px);width:100%;top:0;left:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:.5rem;-webkit-transition:height 1s;transition:height 1s}.eva_chat_history--show{height:calc(100% - 46px)}.eva_chat_history .img-in-msg{margin:15px auto 0;display:block;width:40%}.eva_img_speechbubble{height:60px}.eva_not_allowed_cursor{cursor:not-allowed}.eva_pointer_cursor{cursor:pointer}.eva_message{display:block;position:relative;max-width:70%;background-color:#fef1da;border-radius:12px 12px 12px 0;padding:.5rem 1rem;margin:0 0 4px;text-align:left;color:#35444c}.eva_message p{margin:0 0 4px!important;padding:0!important;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:pre-line}.eva_message p *{max-width:100%!important;font:inherit!important;-webkit-hyphens:inherit!important;-ms-hyphens:inherit!important;hyphens:inherit!important;white-space:inherit!important}.eva_message p ul{margin:0 0 4px;padding:0 0 0 1.2em}.eva_message p:last-child{margin-bottom:0!important}.eva_message--user{margin-left:30%;text-align:right;background-color:#f7f7f8;border-radius:12px 12px 0 12px}.eva_message--user+.eva_message--watson,.eva_message--watson+.eva_message--user{margin-top:1rem}.eva_answer_proposals{width:100%;max-width:100%;margin-top:1rem}.eva_answer_proposals .eva_answer_button{width:48%;margin:0 1% 5px 0}.eva_answer_proposals .eva_answer_button--small{width:73px}.eva_answer_proposals .eva_answer_button--big{display:block;width:100%}.eva_chat_input{position:absolute;height:45px;width:100%;bottom:0;left:0;padding:.5rem}.eva_chat_input input{border:1px solid #cbcfd2;border-radius:.25rem;outline:none;padding:5px 8px;margin:0;display:block;width:100%;font-size:13px;-webkit-appearance:textfield;-webkit-rtl-ordering:logical;-webkit-user-select:text;cursor:auto;opacity:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.eva_chat_input input[disabled]{background:#cbcfd2}.eva_chat_input i{cursor:pointer;display:block;float:left;font-size:23px;height:45px;line-height:45px;margin-left:4px;margin-right:4px;text-align:center;width:30px}.eva_alert{color:#35444c;visibility:hidden;z-index:4004;padding:14px 25px 14px 14px;position:absolute;width:100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.eva_alert--red{font-size:13px;background-color:#f7f7f8}.eva_alert--yellow{background-color:#fba308;border-right:3px solid #fba308}.eva_alert--blue{background-color:#cbcfd2;border-right:3px solid #cbcfd2;color:#35444c}.eva_alert_closebtn{color:#fff;font-weight:700;float:right;font-size:23px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s;position:absolute;z-index:4005;right:15px;margin-top:10px;visibility:hidden}.eva_alert_closebtn:hover{color:#fff}.eva_alert_closebtnblack{color:#35444c;font-weight:700;float:right;font-size:23px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s;position:absolute;z-index:4005;right:15px;margin-top:10px;visibility:hidden}.eva_alert_closebtnblack:hover{color:#35444c}#eva_blind_chat{background-color:#808a90;width:100%;height:100%;position:absolute;z-index:4003;opacity:.65;left:0;visibility:hidden}.eva_tooltip{color:#00abba}#eva_tooltipDiv{position:absolute;z-index:5000;opacity:0;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;will-change:opacity;color:#fff;padding:4px 8px;width:180px;text-align:center;border-radius:4px;background-color:#055e5f!important;font-size:13px;-webkit-box-sizing:border-box;box-sizing:border-box}.eva_tooltip_div_after:after{content:\" \";position:absolute;top:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-top-color:#055e5f}.eva_tooltip_div_before:before{content:\" \";position:absolute;top:-10px;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#055e5f}.eva_tooltip--show{opacity:1!important}.eva_rating{border:0;margin:.5rem auto;padding:0;width:230px;height:40px;overflow:hidden}.eva_starInput{display:none}.eva_full{display:block;float:right;height:40px;width:40px;background-image:url(/stylelib/2_9/img/star.svg);background-color:transparent;background-size:contain;background-repeat:no-repeat;background-position:50%;margin:0 3px;padding:0}.eva_full:hover,.eva_full:hover~.eva_rating>input:checked~label,.eva_rating:not(:checked)>label:hover,.eva_rating:not(:checked)>label:hover~label,.eva_rating>input:checked+label:hover,.eva_rating>input:checked~label:hover,.eva_rating>input:checked~label:hover~label,.eva_starInput:checked~.eva_full{background-image:url(/stylelib/2_9/img/star_orange.svg)}.eva_user-feedback{font-size:13px;padding:2px 7px;margin:10px;display:block;background-color:#fff;border:1px solid #ccc;text-overflow:ellipsis;line-height:25px;height:80px;width:calc(100% - 20px);outline:0;-webkit-appearance:textfield}.eva_feedbackText{font-size:19px;margin:0;border:0;padding:10px;text-align:center}.eva_feedbackSubText{margin:0;border:0;padding:0 10px;text-align:center}.eva_feedback-button{width:45%;text-align:center;height:35px;position:absolute;bottom:10px}#eva_feedbackButtonSave{left:10px}#eva_feedbackButtonCancel{right:10px}.eva_feedback-button:disabled{background:#ccc}.eva_feedback-button:hover{background:rgba(1,54,130,.8);color:#fff}.eva_feedback-button:disabled:hover{background:#ccc;cursor:not-allowed}.eva_conversation-feedback{position:absolute;z-index:5000;height:100%;width:100%;top:0;left:0;background-color:#f7f7f8;overflow-y:auto;-webkit-overflow-scrolling:touch}\@-webkit-keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}\@keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}.eva_speech_load_animation{background-image:url(/stylelib/2_9/img/bubbles.svg);background-repeat:no-repeat;background-size:128px;background-position:16px;width:103px;height:36px}"},enumerable:true,configurable:true});return e}())}}}));