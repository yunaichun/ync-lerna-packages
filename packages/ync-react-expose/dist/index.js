!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],e):"object"==typeof exports?exports.Expose=e(require("react"),require("react-dom")):t.Expose=e(t.React,t.ReactDOM)}(window,(function(t,e){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(e,o){e.exports=t},function(t,e,o){"use strict";var n=o(2),r=o(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o(4)),c=n(o(6)),a=n(o(7)),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var o=s(e);if(o&&o.has(t))return o.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var a=i?Object.getOwnPropertyDescriptor(t,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=t[c]}n.default=t,o&&o.set(t,n);return n}(o(0)),l=n(o(13));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,o=new WeakMap;return(s=function(t){return t?o:e})(t)}var f=function(t){var e=t.expose,o=t.seconds,n=t.openDebugger,r=t.children,s=(0,u.useRef)(),f=(0,u.useState)(null),p=(0,a.default)(f,2),d=p[0],h=p[1],y=(0,u.useState)(!1),m=(0,a.default)(y,2),v=m[0],g=m[1],b=(0,u.useState)({}),w=(0,a.default)(b,2),x=w[0],_=w[1],O=["background: magenta; color: white"],j=["color: blue;","color: green; font-weight: bolder;"],E=function(){if(n){var t,e,o,r,i,c,a,u;if(!s.current)return!1;var l=s.current.node,f=l.getBoundingClientRect(),p=f.height,d=f.width,h=f.top,y=f.bottom,m=f.left,v=f.right,g=document.documentElement.clientHeight||document.body.clientHeight,b=document.documentElement.clientWidth||document.body.clientWidth;(t=console).log.apply(t,["%c============dom detail============"].concat(O)),console.log("%cdom is: ","color: blue;",l),(e=console).log.apply(e,["%cdom height is: %c".concat(p)].concat(j)),(o=console).log.apply(o,["%cdom width is: %c".concat(d)].concat(j)),(r=console).log.apply(r,["%cdom bottom to window top is: %c".concat(y)].concat(j)),(i=console).log.apply(i,["%cdom top to window bottom is: %c".concat(g-h)].concat(j)),(c=console).log.apply(c,["%cdom right to window left is: %c".concat(v)].concat(j)),(a=console).log.apply(a,["%cdom left to window right is: %c".concat(b-m)].concat(j)),(u=console).log.apply(u,["%c============dom detail============"].concat(O))}},k=function(){if(!s.current)return!1;var t=s.current.node.getBoundingClientRect(),e=t.height,o=t.width,n=t.top,r=t.bottom,i=t.left,c=t.right,a=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.clientWidth||document.body.clientWidth;return r>e/2&&a-n>e/2&&c>o/2&&u-i>o/2},T=function(t){var r;if("function"==typeof e||"number"==typeof o){var i;if(n&&(r=console).log.apply(r,["%celement visible: ".concat(t)].concat(O)),!t&&!v)return n&&(i=console).log.apply(i,["%cpage rendered"].concat(O)),void g(!0);if(s.current){var c=s.current.node.getBoundingClientRect(),a=c.height,u=c.width;a&&_({top:a/2,bottom:a/2,left:u/2,right:u/2})}if(t&&!d)return E(),void e();var l=new Date;t?(!function(t,e){if(n){var o,r,i,c,a,u=[t.getHours(),t.getMinutes(),t.getSeconds()],l=u[0],s=u[1],f=u[2],p=[e.getHours(),e.getMinutes(),e.getSeconds()],d=p[0],h=p[1],y=p[2],m=(t.getTime()-e.getTime())/1e3;(o=console).log.apply(o,["%c============time detail============"].concat(O)),(r=console).log.apply(r,["%cnow: %c".concat(l,":").concat(s,":").concat(f)].concat(j)),(i=console).log.apply(i,["%clase: %c".concat(d,":").concat(h,":").concat(y)].concat(j)),(c=console).log.apply(c,["%cnow - last: %c".concat(m,"s")].concat(j)),(a=console).log.apply(a,["%c============time detail============"].concat(O))}}(l,d),d&&l.getTime()-d.getTime()>1e3*o&&(E(),e(),h(null))):h(l)}else console.error("expose needs to bu function and seconds needs tobe number")};return(0,u.useEffect)((function(){var t=window.onPageAppear;window.onPageAppear=(0,c.default)(i.default.mark((function o(){var r;return i.default.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:k()?(n&&E(),e(),h(null)):(r=new Date,h(r)),t();case 3:case"end":return o.stop()}}),o)})))}),[]),u.default.createElement(l.default,{ref:s,partialVisibility:!0,offset:x,onChange:function(t){return T(t)}},r)},p=function(t){var e=t.expose,o=void 0===e?function(){}:e,n=t.seconds,r=void 0===n?10:n,i=t.openDebugger,c=void 0!==i&&i,a=t.children;return u.default.createElement(f,{expose:o,seconds:r,openDebugger:c},a)},d=(0,u.memo)(p);e.default=d},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=o=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),o(e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,o){t.exports=o(5)},function(t,e,o){var n=function(t){"use strict";var e=Object.prototype,o=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function a(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,o){return t[e]=o}}function u(t,e,o,n){var r=e&&e.prototype instanceof f?e:f,i=Object.create(r.prototype),c=new O(n||[]);return i._invoke=function(t,e,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return E()}for(o.method=r,o.arg=i;;){var c=o.delegate;if(c){var a=w(c,o);if(a){if(a===s)continue;return a}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var u=l(t,e,o);if("normal"===u.type){if(n=o.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(n="completed",o.method="throw",o.arg=u.arg)}}}(t,o,c),i}function l(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function p(){}function d(){}var h={};h[r]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==e&&o.call(m,r)&&(h=m);var v=d.prototype=f.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(r,i){function c(){return new e((function(n,c){!function n(r,i,c,a){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}(r,i,n,c)}))}return n=n?n.then(c,c):c()}}function w(t,e){var o=t.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=v.constructor=d,d.constructor=p,p.displayName=a(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,o,n,r,i){void 0===i&&(i=Promise);var c=new b(u(e,o,n,r),i);return t.isGeneratorFunction(o)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(v),a(v,c,"Generator"),v[r]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(o,n){return c.type="throw",c.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),_(o),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;_(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:j(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function o(t,e,o,n,r,i,c){try{var a=t[i](c),u=a.value}catch(t){return void o(t)}a.done?e(u):Promise.resolve(u).then(n,r)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var c=t.apply(e,n);function a(t){o(c,r,i,a,u,"next",t)}function u(t){o(c,r,i,a,u,"throw",t)}a(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,o){var n=o(8),r=o(9),i=o(10),c=o(12);t.exports=function(t,e){return n(t)||r(t,e)||i(t,e)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){var o=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=o){var n,r,i=[],c=!0,a=!1;try{for(o=o.call(t);!(c=(n=o.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){a=!0,r=t}finally{try{c||null==o.return||o.return()}finally{if(a)throw r}}return i}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,o){var n=o(11);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,o){var n;n=function(t,e){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,o){t.exports=o(5)()},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=function(t,e,o){var n=t.direction,r=t.value;switch(n){case"top":return o.top+r<e.top&&o.bottom>e.bottom&&o.left<e.left&&o.right>e.right;case"left":return o.left+r<e.left&&o.bottom>e.bottom&&o.top<e.top&&o.right>e.right;case"bottom":return o.bottom-r>e.bottom&&o.left<e.left&&o.right>e.right&&o.top<e.top;case"right":return o.right-r>e.right&&o.left<e.left&&o.top<e.top&&o.bottom>e.bottom}}},function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return v}));var n=o(1),r=o.n(n),i=o(2),c=o.n(i),a=o(0),u=o.n(a),l=o(3),s=o.n(l);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var v=function(t){function e(t){var o,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r=d(e).call(this,t),o=!r||"object"!==f(r)&&"function"!=typeof r?h(n):r,m(h(o),"getContainer",(function(){return o.props.containment||window})),m(h(o),"addEventListener",(function(t,e,n,r){var i;o.debounceCheck||(o.debounceCheck={});var c=function(){i=null,o.check()},a={target:t,fn:r>-1?function(){i||(i=setTimeout(c,r||0))}:function(){clearTimeout(i),i=setTimeout(c,n||0)},getLastTimeout:function(){return i}};t.addEventListener(e,a.fn),o.debounceCheck[e]=a})),m(h(o),"startWatching",(function(){o.debounceCheck||o.interval||(o.props.intervalCheck&&(o.interval=setInterval(o.check,o.props.intervalDelay)),o.props.scrollCheck&&o.addEventListener(o.getContainer(),"scroll",o.props.scrollDelay,o.props.scrollThrottle),o.props.resizeCheck&&o.addEventListener(window,"resize",o.props.resizeDelay,o.props.resizeThrottle),!o.props.delayedCall&&o.check())})),m(h(o),"stopWatching",(function(){if(o.debounceCheck)for(var t in o.debounceCheck)if(o.debounceCheck.hasOwnProperty(t)){var e=o.debounceCheck[t];clearTimeout(e.getLastTimeout()),e.target.removeEventListener(t,e.fn),o.debounceCheck[t]=null}o.debounceCheck=null,o.interval&&(o.interval=clearInterval(o.interval))})),m(h(o),"check",(function(){var t,e,n=o.node;if(!n)return o.state;if(t=function(t){return void 0===t.width&&(t.width=t.right-t.left),void 0===t.height&&(t.height=t.bottom-t.top),t}(o.roundRectDown(n.getBoundingClientRect())),o.props.containment){var r=o.props.containment.getBoundingClientRect();e={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else e={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=o.props.offset||{};"object"===f(i)&&(e.top+=i.top||0,e.left+=i.left||0,e.bottom-=i.bottom||0,e.right-=i.right||0);var c={top:t.top>=e.top,left:t.left>=e.left,bottom:t.bottom<=e.bottom,right:t.right<=e.right},a=t.height>0&&t.width>0,u=a&&c.top&&c.left&&c.bottom&&c.right;if(a&&o.props.partialVisibility){var l=t.top<=e.bottom&&t.bottom>=e.top&&t.left<=e.right&&t.right>=e.left;"string"==typeof o.props.partialVisibility&&(l=c[o.props.partialVisibility]),u=o.props.minTopValue?l&&t.top<=e.bottom-o.props.minTopValue:l}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),u=s()(i,t,e));var p=o.state;return o.state.isVisible!==u&&(p={isVisible:u,visibilityRect:c},o.setState(p),o.props.onChange&&o.props.onChange(u)),p})),o.state={isVisible:null,visibilityRect:{}},o}var o,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),o=e,(n=[{key:"componentDidMount",value:function(){this.node=c.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(t){this.node=c.a.findDOMNode(this),this.props.active&&!t.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(t){return{top:Math.floor(t.top),left:Math.floor(t.left),bottom:Math.floor(t.bottom),right:Math.floor(t.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&p(o.prototype,n),i&&p(o,i),e}(r.a.Component);m(v,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),m(v,"propTypes",{onChange:u.a.func,active:u.a.bool,partialVisibility:u.a.oneOfType([u.a.bool,u.a.oneOf(["top","right","bottom","left"])]),delayedCall:u.a.bool,offset:u.a.oneOfType([u.a.shape({top:u.a.number,left:u.a.number,bottom:u.a.number,right:u.a.number}),u.a.shape({direction:u.a.oneOf(["top","right","bottom","left"]),value:u.a.number})]),scrollCheck:u.a.bool,scrollDelay:u.a.number,scrollThrottle:u.a.number,resizeCheck:u.a.bool,resizeDelay:u.a.number,resizeThrottle:u.a.number,intervalCheck:u.a.bool,intervalDelay:u.a.number,containment:"undefined"!=typeof window?u.a.instanceOf(window.Element):u.a.any,children:u.a.oneOfType([u.a.element,u.a.func]),minTopValue:u.a.number})},function(t,e,o){"use strict";var n=o(6);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,o,r,i,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},t.exports=n(o(0),o(14))},function(t,o){t.exports=e}]).default}));