!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.Modal=t(require("react"),require("react-dom")):e.Modal=t(e.React,e.ReactDOM)}(window,(function(e,t){return o={},n.m=r=[function(t,n){t.exports=e},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=t},function(e,t,n){var r=n(6),o=n(7),c=n(8),i=n(10);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,c=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=(r=n(2),n.n(r)),i=(r=n(3),n.n(r)),u=n(0),a=n.n(u),l=(r=n(4),n.n(r)),s=(r=n(5),n.n(r)),f=void n(12),d=(n=Object(u.forwardRef)((function(e,t){var n,r=void 0===(x=e.footer)?null:x,o=void 0===(p=e.okText)?"确定":p,c=void 0===(b=e.onOk)?function(){}:b,i=void 0!==(y=e.showCancel)&&y,l=void 0===(v=e.cancelText)?"取消":v,d=void 0===(n=e.onCancel)?function(){}:n,p=void 0===(x=e.jsxContent)?null:x,m=void 0!==(b=e.closeClickMask)&&b,v=void 0!==(y=e.showCloseIcon)&&y,x=void 0===(n=e.closeImg)?"https://www.answera.top/html/close.png":n,y=void 0===(b=e.maskStyle)?{}:b,b=void 0===(n=e.contentStyle)?{}:n,h=(e=Object(u.useState)(!0),e=(n=s()(e,2))[0],n[1]),_=Object(u.useRef)();Object(u.useImperativeHandle)(t,(function(){return{close:j,show:w}})),Object(u.useEffect)((function(){if(m){var e=_.current;if(e){var t=function(e){e.target===e.currentTarget&&j()};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}}}));var j=function(){h(!0)},w=function(){h(!1)};return e?null:a.a.createElement("div",{className:"modal-mask",style:y,ref:_},a.a.createElement("div",{className:"modal-content",style:b},v?a.a.createElement("img",{className:"img-close",src:x,alt:"",onClick:j}):null,p||null,r||(i?a.a.createElement("div",{className:"btn-container"},a.a.createElement("div",{className:"btn-normal btn-cancel",onClick:function(){"function"==typeof d&&d(),j()}},l),a.a.createElement("div",{className:"btn-normal btn-ok",onClick:function(){return f.submit()}},o)):a.a.createElement("div",{className:"btn-normal",onClick:function(){"function"==typeof c&&c(),j()}},o))))})),Object(u.memo)(n)),p=function(){function e(t){c()(this,e),this.options=t,this.ref=Object(u.createRef)(),this.createModal()}return i()(e,[{key:"createModal",value:function(){this.div=document.createElement("div"),document.body.appendChild(this.div),l.a.render(a.a.createElement(d,o()({ref:this.ref},this.options)),this.div)}},{key:"show",value:function(){this.ref.current&&this.ref.current.show()}},{key:"close",value:function(){this.ref.current&&this.ref.current.close()}}]),e}(),m=null;t.default={show:function(e){(m=m||new p(e)).show(e)},close:function(){m&&m.close()}}},function(e,t){}],n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11).default;function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,o}));