!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=101)}({0:function(e,t,o){"use strict";function r(e,t,o,r,n,i,a,l,s,c){var p,u="function"==typeof e?e.options:e;if(s){u.components||(u.components={});var d=Object.prototype.hasOwnProperty;for(var m in s)d.call(s,m)&&!d.call(u.components,m)&&(u.components[m]=s[m])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(u.mixins||(u.mixins=[])).push(c)),t&&(u.render=t,u.staticRenderFns=o,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=p):n&&(p=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),p)if(u.functional){u._injectStyles=p;var f=u.render;u.render=function(e,t){return p.call(t),f(e,t)}}else{var y=u.beforeCreate;u.beforeCreate=y?[].concat(y,p):[p]}return{exports:e,options:u}}o.d(t,"a",(function(){return r}))},1:function(e,t,o){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(e,t){switch(r(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];console[e].apply(console,o)},t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[a].apply(console,t);var l=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=r(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),s="";if(l.length>1){var c=l.pop();s=l.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=l[0];console[a](s)}},101:function(e,t,o){"use strict";o.r(t);o(71);var r=o(5);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),r.default.mpType="page",r.default.route="pages/home/function/common/oa-webview",r.default.el="#root",new Vue(r.default)},2:function(e,t){e.exports={status_bar:{width:100},flex:{display:"flex"},subText:{color:"#7A7A7A"},main_bg:{backgroundColor:"#EA4A4A"},main_text:{color:"#EA4A4A"},main_border:{borderColor:"#EA4A4A"},blue_bg:{backgroundColor:"#007aff"},blue_text:{color:"#007aff"},blue_border:{borderColor:"#007aff"},"@VERSION":2}},3:function(e,t){e.exports={"myp-flex-row":{flexDirection:"row"},"myp-flex-column":{flexDirection:"column"},"myp-flex-one":{flex:1},"myp-justify-start":{justifyContent:"flex-start"},"myp-justify-center":{justifyContent:"center"},"myp-justify-end":{justifyContent:"flex-end"},"myp-justify-between":{justifyContent:"space-between"},"myp-align-start":{alignItems:"flex-start"},"myp-align-center":{alignItems:"center"},"myp-align-end":{alignItems:"flex-end"},"myp-wrap-wrap":{flexWrap:"wrap"},"myp-wrap-nowrap":{flexWrap:"nowrap"},"myp-position-relative":{position:"relative"},"myp-position-absolute":{position:"absolute"},"myp-position-fixed":{position:"fixed"},"myp-full-width":{width:"750rpx"},"myp-full-height":{flex:1},"myp-full-flex":{flex:1},"myp-text-align-left":{textAlign:"left"},"myp-text-align-center":{textAlign:"center"},"myp-text-align-right":{textAlign:"right"},"myp-opacity-1":{opacity:1},"myp-opacity-0":{opacity:0},"myp-opacity-hover":{opacity:.5},"myp-opacity-disabled":{opacity:.5},"myp-bg-":{backgroundColor:"#FFFFFF"},"myp-bg-nav":{backgroundColor:"#FFFFFF"},"myp-bg-primary":{backgroundColor:"#8F9CFF"},"myp-bg-success":{backgroundColor:"#8FDAFF"},"myp-bg-warning":{backgroundColor:"#FFD666"},"myp-bg-error":{backgroundColor:"#FF9090"},"myp-bg-dark":{backgroundColor:"#F1F1F1"},"myp-bg-light":{backgroundColor:"#F3F4F5"},"myp-bg-inverse":{backgroundColor:"#FFFFFF"},"myp-bg-border":{backgroundColor:"#F7F5F5"},"myp-bg-border-light":{backgroundColor:"#F7F5F5"},"myp-bg-border-dark":{backgroundColor:"#EBEBEB"},"myp-bg-custom":{backgroundColor:"#4A5061"},"myp-bg-link":{backgroundColor:"#0273F1"},"myp-bg-none":{backgroundColor:"rgba(0,0,0,0)"},"myp-bg-page":{backgroundColor:"#FAFAFA"},"myp-bg-hover":{backgroundColor:"#F1F1F1"},"myp-bg-mask":{backgroundColor:"rgba(0,0,0,0.2)"},"myp-bg-mask-dark":{backgroundColor:"rgba(0,0,0,0.8)"},"myp-color-":{color:"#333232"},"myp-color-nav-title":{color:"#000000"},"myp-color-nav-icon":{color:"#4C4C4C"},"myp-color-nav-item":{color:"#4C4C4C"},"myp-color-text":{color:"#333232"},"myp-color-custom":{color:"#4A5061"},"myp-color-link":{color:"#0273F1"},"myp-color-primary":{color:"#8F9CFF"},"myp-color-success":{color:"#8FDAFF"},"myp-color-warning":{color:"#FFD666"},"myp-color-error":{color:"#FF9090"},"myp-color-inverse":{color:"#FFFFFF"},"myp-color-second":{color:"#666464"},"myp-color-third":{color:"#999696"},"myp-color-forth":{color:"#CCC8C8"},"myp-color-place":{color:"#CCC8C8"},"myp-color-disabled":{color:"#CCC8C8"},"myp-size-":{fontSize:"30rpx"},"myp-size-nav-title":{fontSize:"16"},"myp-size-nav-icon":{fontSize:"20"},"myp-size-nav-item":{fontSize:"14"},"myp-size-ss":{fontSize:"24rpx"},"myp-size-s":{fontSize:"28rpx"},"myp-size-base":{fontSize:"30rpx"},"myp-size-l":{fontSize:"32rpx"},"myp-size-ll":{fontSize:"36rpx"},"myp-height-":{height:"80rpx"},"myp-height-ss":{height:"40rpx"},"myp-height-s":{height:"60rpx"},"myp-height-base":{height:"80rpx"},"myp-height-l":{height:"100rpx"},"myp-height-ll":{height:"120rpx"},"myp-weight-light":{fontWeight:"300"},"myp-weight-normal":{fontWeight:"400"},"myp-weight-bold":{fontWeight:"600"},"myp-weight-bolder":{fontWeight:"700"},"myp-lh-":{lineHeight:"42rpx"},"myp-lh-ss":{lineHeight:"34rpx"},"myp-lh-s":{lineHeight:"40rpx"},"myp-lh-base":{lineHeight:"42rpx"},"myp-lh-l":{lineHeight:"45rpx"},"myp-lh-ll":{lineHeight:"50rpx"},"myp-wing-ss":{marginLeft:"12rpx",marginRight:"12rpx"},"myp-wing-s":{marginLeft:"24rpx",marginRight:"24rpx"},"myp-wing-base":{marginLeft:"32rpx",marginRight:"32rpx"},"myp-wing-l":{marginLeft:"36rpx",marginRight:"36rpx"},"myp-wing-ll":{marginLeft:"40rpx",marginRight:"40rpx"},"myp-space-ss":{marginTop:"6rpx",marginBottom:"6rpx"},"myp-space-s":{marginTop:"12rpx",marginBottom:"12rpx"},"myp-space-base":{marginTop:"16rpx",marginBottom:"16rpx"},"myp-space-l":{marginTop:"24rpx",marginBottom:"24rpx"},"myp-space-ll":{marginTop:"32rpx",marginBottom:"32rpx"},"myp-lines-one":{lines:1,overflow:"hidden",textOverflow:"ellipsis"},"myp-lines-two":{overflow:"hidden",lines:2,textOverflow:"ellipsis"},"myp-lines-three":{overflow:"hidden",lines:3,textOverflow:"ellipsis"},"myp-lines-four":{overflow:"hidden",lines:4,textOverflow:"ellipsis"},"myp-lines-five":{overflow:"hidden",lines:5,textOverflow:"ellipsis"},"myp-lines-six":{overflow:"hidden",lines:6,textOverflow:"ellipsis"},"myp-border-all":{borderWidth:"1",borderStyle:"solid",borderColor:"#F7F5F5"},"myp-border-all-light":{borderWidth:"1",borderStyle:"solid",borderColor:"#F7F5F5"},"myp-border-all-dark":{borderWidth:"1",borderStyle:"solid",borderColor:"#EBEBEB"},"myp-border-all-primary":{borderWidth:"1",borderStyle:"solid",borderColor:"#8F9CFF"},"myp-border-all-success":{borderWidth:"1",borderStyle:"solid",borderColor:"#8FDAFF"},"myp-border-all-warning":{borderWidth:"1",borderStyle:"solid",borderColor:"#FFD666"},"myp-border-all-error":{borderWidth:"1",borderStyle:"solid",borderColor:"#FF9090"},"myp-border-all-inverse":{borderWidth:"1",borderStyle:"solid",borderColor:"#FFFFFF"},"myp-border-all-custom":{borderWidth:"1",borderStyle:"solid",borderColor:"#4A5061"},"myp-border-all-link":{borderWidth:"1",borderStyle:"solid",borderColor:"#0273F1"},"myp-border-top":{borderTopColor:"#F7F5F5",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-light":{borderTopColor:"#F7F5F5",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-dark":{borderTopColor:"#EBEBEB",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-primary":{borderTopColor:"#8F9CFF",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-success":{borderTopColor:"#8FDAFF",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-warning":{borderTopColor:"#FFD666",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-error":{borderTopColor:"#FF9090",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-inverse":{borderTopColor:"#FFFFFF",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-custom":{borderTopColor:"#4A5061",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-top-link":{borderTopColor:"#0273F1",borderTopWidth:"1",borderTopStyle:"solid"},"myp-border-bottom":{borderBottomColor:"#F7F5F5",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-light":{borderBottomColor:"#F7F5F5",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-dark":{borderBottomColor:"#EBEBEB",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-primary":{borderBottomColor:"#8F9CFF",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-success":{borderBottomColor:"#8FDAFF",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-warning":{borderBottomColor:"#FFD666",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-error":{borderBottomColor:"#FF9090",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-inverse":{borderBottomColor:"#FFFFFF",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-custom":{borderBottomColor:"#4A5061",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-bottom-link":{borderBottomColor:"#0273F1",borderBottomWidth:"1",borderBottomStyle:"solid"},"myp-border-none":{borderWidth:0},"myp-radius-ss":{borderRadius:"4rpx"},"myp-radius-s":{borderRadius:"6rpx"},"myp-radius-base":{borderRadius:"12rpx"},"myp-radius-l":{borderRadius:"24rpx"},"myp-radius-ll":{borderRadius:"60rpx"},"myp-radius-none":{borderRadius:0},"myp-overflow-hidden":{overflow:"hidden"},"myp-hover-opacity":{opacity:.5},"myp-hover-bg":{backgroundColor:"#F1F1F1"},"myp-hover-bg-dark":{backgroundColor:"rgba(0,0,0,0.8)"},"myp-hover-bg-opacity":{backgroundColor:"#F1F1F1",opacity:.5},"myp-disabled":{opacity:.5},"myp-disabled-text":{color:"#CCC8C8"},"@VERSION":2}},4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return weex.requireModule(e)}},5:function(e,t,o){"use strict";var r=o(54),n=o(7),i=o(0);var a=Object(i.a)(n.default,r.b,r.c,!1,null,null,"7dae76ec",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(81).default,this.options.style):Object.assign(this.options.style,o(81).default)}).call(a),t.default=a.exports},54:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["uni-column"]})])},n=[]},7:function(e,t,o){"use strict";var r=o(8),n=o.n(r);t.default=n.a},71:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(72).default,Vue.prototype.__$appStyle__),Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(73).default,Vue.prototype.__$appStyle__)},72:function(e,t,o){"use strict";o.r(t);var r=o(2),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},73:function(e,t,o){"use strict";o.r(t);var r=o(3),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},74:function(e,t,o){e.exports=o(75)},75:function(e,t,o){var r=function(e){"use strict";var t=Object.prototype,o=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function l(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,o){return e[t]=o}}function s(e,t,o,r){var n=t&&t.prototype instanceof u?t:u,i=Object.create(n.prototype),a=new _(r||[]);return i._invoke=function(e,t,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return S()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var l=F(a,o);if(l){if(l===p)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var s=c(e,t,o);if("normal"===s.type){if(r=o.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(r="completed",o.method="throw",o.arg=s.arg)}}}(e,o,a),i}function c(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var p={};function u(){}function d(){}function m(){}var f={};f[n]=function(){return this};var y=Object.getPrototypeOf,h=y&&y(y(C([])));h&&h!==t&&o.call(h,n)&&(f=h);var b=m.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){var r;this._invoke=function(n,i){function a(){return new t((function(r,a){!function r(n,i,a,l){var s=c(e[n],e,i);if("throw"!==s.type){var p=s.arg,u=p.value;return u&&"object"==typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(u).then((function(e){p.value=e,a(p)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}(n,i,r,a)}))}return r=r?r.then(a,a):a()}}function F(e,t){var o=e.iterator[t.method];if(void 0===o){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,F(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=c(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function C(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=b.constructor=m,m.constructor=d,d.displayName=l(m,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(v.prototype),v.prototype[i]=function(){return this},e.AsyncIterator=v,e.async=function(t,o,r,n,i){void 0===i&&(i=Promise);var a=new v(s(t,o,r,n),i);return e.isGeneratorFunction(o)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(b),l(b,a,"Generator"),b[n]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var r=t.pop();if(r in e)return o.value=r,o.done=!1,o}return o.done=!0,o}},e.values=C,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(o,r){return a.type="throw",a.arg=e,t.next=o,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),x(o),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var r=o.completion;if("throw"===r.type){var n=r.arg;x(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:C(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=void 0),p}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},76:function(e,t,o){(function(t){function o(){if("Android"===plus.os.name){var e=plus.android.runtimeMainActivity(),t=e.getPackageName(),o=new(plus.android.importClass("android.content.Intent"))("android.settings.APP_NOTIFICATION_SETTINGS");o.putExtra("android.provider.extra.APP_PACKAGE",t),e.startActivity(o)}else{var r=plus.ios.invoke("UIApplication","sharedApplication"),n=plus.ios.invoke("NSURL","URLWithString:","app-settings:");plus.ios.invoke(r,"openURL:",n),plus.ios.deleteObject(n),plus.ios.deleteObject(r)}}function r(e){return new Promise((function(o,r){plus.android.requestPermissions([e],(function(e){for(var r=0,n=0;n<e.granted.length;n++){var i=e.granted[n];t("log","\u5df2\u83b7\u53d6\u7684\u6743\u9650\uff1a"+i," at common/permissionUtil.js:113"),r=1}for(n=0;n<e.deniedPresent.length;n++){var a=e.deniedPresent[n];t("log","\u62d2\u7edd\u672c\u6b21\u7533\u8bf7\u7684\u6743\u9650\uff1a"+a," at common/permissionUtil.js:118"),r=0}for(n=0;n<e.deniedAlways.length;n++){var l=e.deniedAlways[n];t("log","\u6c38\u4e45\u62d2\u7edd\u7533\u8bf7\u7684\u6743\u9650\uff1a"+l," at common/permissionUtil.js:123"),r=-1}o(r)}),(function(e){t("log","result error: "+e.message," at common/permissionUtil.js:129"),o({code:e.code,message:e.message})}))}))}function n(){var e=0,t=plus.ios.import("AVCaptureDevice"),o=t.authorizationStatusForMediaType("vide");return e=0===o?null:3==o?1:0,plus.ios.deleteObject(t),e}e.exports={checkNoticePermission:function(e){return"iOS"==plus.os.name?function(){try{if(!function(){var e=!1;try{var o=0,r=plus.ios.invoke("UIApplication","sharedApplication"),n=plus.ios.invoke(r,"currentUserNotificationSettings");n?(o=n.plusGetAttribute("types"),plus.ios.deleteObject(n)):o=plus.ios.invoke(r,"enabledRemoteNotificationTypes"),plus.ios.deleteObject(r),e=0!=o}catch(e){t("error","exception in isTurnedOnPush@dc-push!!"," at common/permissionUtil.js:79")}return e}()){var e=plus.ios.invoke("UIApplication","sharedApplication"),o=plus.ios.invoke("NSURL","URLWithString:","app-settings:");return plus.ios.invoke(e,"openURL:",o),plus.ios.deleteObject(o),plus.ios.deleteObject(e),!1}return!0}catch(e){t("error","exception in turnOnPush@dc-push!!"," at common/permissionUtil.js:101")}}():function(e){var r=plus.android.runtimeMainActivity(),n=r.getPackageName();t("log","pkName = "+n," at common/permissionUtil.js:14");var i=plus.android.importClass("androidx.core.app.NotificationManagerCompat"),a=i.from(r);return t("log",i.from(r)," at common/permissionUtil.js:19"),a.areNotificationsEnabled()?(t("log","\u5df2\u5f00\u542f\u901a\u77e5\u6743\u9650"," at common/permissionUtil.js:21"),!0):!!e&&(uni.showModal({title:"\u63d0\u793a",content:"\u8bf7\u5148\u6253\u5f00APP\u901a\u77e5\u6743\u9650",showCancel:!1,success:function(e){e.confirm&&o()}}),!1)}(e)},requestAndroid:r,requestIOSCamera:n,gotoAppSetting:function(){if("iOS"===plus.os.name){var e=plus.ios.import("UIApplication").sharedApplication(),t=plus.ios.import("NSURL"),o=t.URLWithString("app-settings:");e.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(t),plus.ios.deleteObject(e)}else{var r=plus.android.importClass("android.content.Intent"),n=plus.android.importClass("android.provider.Settings"),i=plus.android.importClass("android.net.Uri"),a=plus.android.runtimeMainActivity(),l=new r;l.setAction(n.ACTION_APPLICATION_DETAILS_SETTINGS);var s=i.fromParts("package",a.getPackageName(),null);l.setData(s),a.startActivity(l)}},toNotificationSettings:o,requestPermission:function(){"iOS"===plus.os.name?n():r("android.permission.CAMERA"),"iOS"===plus.os.name?n():r("android.permission.READ_EXTERNAL_STORAGE"),"iOS"===plus.os.name?n():r("android.permission.WRITE_EXTERNAL_STORAGE")}}}).call(this,o(1).default)},8:function(e,t,o){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=l(o(74)),a=l(o(76));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,r,n,i,a){try{var l=e[i](a),s=l.value}catch(e){return void o(e)}l.done?t(s):Promise.resolve(s).then(r,n)}var c=e("Dasu-doc_preview"),p={data:function(){return{src:"",statusHeight:plus.navigator.getStatusbarHeight(),webviewStyles:{progress:{color:"#5291FA"}},height:572,back:!1}},created:function(){this.src=uni.getStorageSync("h5_url"),r("log",this.src," at pages/home/function/common/oa-webview.nvue:34"),n=plus.webview.create(this.src,"custom-webview",{plusrequire:"none","uni-app":"none",top:uni.getSystemInfoSync().statusBarHeight+44,bottom:0}),this.requestPermission(),plus.webview.currentWebview().append(n),this.setListener()},onReady:function(){var e=uni.getSystemInfoSync();this.height=e.windowHeight},beforeDestroy:function(){uni.removeStorageSync("h5_url")},onBackPress:function(){return this.webviewBack(),r("log","back====  "+this.back," at pages/home/function/common/oa-webview.nvue:57"),!this.back},methods:{webviewBack:function(){var e,t=this;return(e=i.default.mark((function e(){var o;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t,n.canBack((function(e){r("log","e.canBack ====  "+e.canBack," at pages/home/function/common/oa-webview.nvue:64"),o.back=!e.canBack,e.canBack&&n.back()}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(r,n){var i=e.apply(t,o);function a(e){s(i,r,n,a,l,"next",e)}function l(e){s(i,r,n,a,l,"throw",e)}a(void 0)}))})()},setListener:function(){n.addEventListener("titleUpdate",(function(e){r("log","Update title: "+e.title," at pages/home/function/common/oa-webview.nvue:74"),uni.setNavigationBarTitle({title:e.title})}),!1),n.addEventListener("loaded",(function(e){r("log","loaded======== "+e.getURL()," at pages/home/function/common/oa-webview.nvue:80")}),!1)},handleMessage:function(e){r("log","handleMessage = "+JSON.stringify(e)," at pages/home/function/common/oa-webview.nvue:84");var t=e.detail.data[0];switch(t.action){case"close":this.close();break;case"download":this.downloadFile(t.url);break;case"location":this.getLocation()}},close:function(){uni.$emit("refresh",{}),uni.showToast({title:"\u5904\u7406\u6210\u529f",icon:"success"}),setTimeout((function(){uni.navigateBack({delta:2})}),1200)},downloadFile:function(e){uni.downloadFile({url:e,success:function(e){var t=e.tempFilePath;"android"!=uni.getSystemInfoSync().platform?this.otherOpenFile(t):c.openDoc(plus.io.convertLocalFileSystemURL(t))}})},otherOpenFile:function(e){uni.openDocument({filePath:e,success:function(e){r("log","\u6253\u5f00\u6587\u6863\u6210\u529f"," at pages/home/function/common/oa-webview.nvue:131")}})},getLocation:function(){var e=this;uni.getLocation({type:"gcj02",geocode:!0,success:function(t){t.action="location",t.code=0,e.sendMessage(t)},fail:function(t){t.action="location",t.code=-1,e.sendMessage(t)}})},sendMessage:function(e){r("log","sendMessage = "+JSON.stringify(e)," at pages/home/function/common/oa-webview.nvue:153"),this.$scope.$getAppWebview().children()[0].evalJS("jsfunction("+JSON.stringify(e)+")")},requestPermission:function(){a.default.requestPermission()}}};t.default=p}).call(this,o(4).default,o(1).default)},81:function(e,t,o){"use strict";o.r(t);var r=o(9),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},9:function(e,t){e.exports={"uni-column":{flexDirection:"column"},"uni-row":{flexDirection:"row"},"status-bar":{backgroundColor:"#5291FA"},"@VERSION":2}}});