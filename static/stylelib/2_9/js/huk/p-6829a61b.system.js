System.register(["./p-4fc8d94d.system.js"],(function(n){"use strict";var e,t;return{setters:[function(n){e=n.a;t=n.b}],execute:function(){function r(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var i=r;var u=function(){return e.Date.now()};var f=u;n("i",i);var a=0/0;var o=/^\s+|\s+$/g;var c=/^[-+]0x[0-9a-f]+$/i;var s=/^0b[01]+$/i;var v=/^0o[0-7]+$/i;var d=parseInt;function l(n){if(typeof n=="number"){return n}if(t(n)){return a}if(i(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=i(e)?e+"":e}if(typeof n!="string"){return n===0?n:+n}n=n.replace(o,"");var r=s.test(n);return r||v.test(n)?d(n.slice(2),r?2:8):c.test(n)?a:+n}var m=l;n("t",m);var p="Expected a function";var y=Math.max,T=Math.min;function g(n,e,t){var r,u,a,o,c,s,v=0,d=false,l=false,g=true;if(typeof n!="function"){throw new TypeError(p)}e=m(e)||0;if(i(t)){d=!!t.leading;l="maxWait"in t;a=l?y(m(t.maxWait)||0,e):a;g="trailing"in t?!!t.trailing:g}function x(e){var t=r,i=u;r=u=undefined;v=e;o=n.apply(i,t);return o}function h(n){v=n;c=setTimeout(w,e);return d?x(n):o}function b(n){var t=n-s,r=n-v,i=e-t;return l?T(i,a-r):i}function $(n){var t=n-s,r=n-v;return s===undefined||t>=e||t<0||l&&r>=a}function w(){var n=f();if($(n)){return j(n)}c=setTimeout(w,b(n))}function j(n){c=undefined;if(g&&r){return x(n)}r=u=undefined;return o}function E(){if(c!==undefined){clearTimeout(c)}v=0;r=s=u=c=undefined}function M(){return c===undefined?o:j(f())}function O(){var n=f(),t=$(n);r=arguments;u=this;s=n;if(t){if(c===undefined){return h(s)}if(l){clearTimeout(c);c=setTimeout(w,e);return x(s)}}if(c===undefined){c=setTimeout(w,e)}return o}O.cancel=E;O.flush=M;return O}var x=n("d",g);n("a",x)}}}));