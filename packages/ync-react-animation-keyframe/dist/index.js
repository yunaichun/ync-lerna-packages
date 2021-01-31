!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("three/src/renderers/WebGLRenderer.js"),require("three/src/scenes/Scene.js"),require("three/src/cameras/PerspectiveCamera.js"),require("three/src/math/Vector2.js"),require("three/src/geometries/PlaneGeometry.js"),require("three/src/loaders/TextureLoader.js"),require("three/src/materials/MeshLambertMaterial.js"),require("three/src/objects/Mesh.js"),require("three/src/lights/DirectionalLight.js"),require("three/src/lights/AmbientLight.js")):"function"==typeof define&&define.amd?define(["react","three/src/renderers/WebGLRenderer.js","three/src/scenes/Scene.js","three/src/cameras/PerspectiveCamera.js","three/src/math/Vector2.js","three/src/geometries/PlaneGeometry.js","three/src/loaders/TextureLoader.js","three/src/materials/MeshLambertMaterial.js","three/src/objects/Mesh.js","three/src/lights/DirectionalLight.js","three/src/lights/AmbientLight.js"],t):"object"==typeof exports?exports.AnimationKeyframe=t(require("react"),require("three/src/renderers/WebGLRenderer.js"),require("three/src/scenes/Scene.js"),require("three/src/cameras/PerspectiveCamera.js"),require("three/src/math/Vector2.js"),require("three/src/geometries/PlaneGeometry.js"),require("three/src/loaders/TextureLoader.js"),require("three/src/materials/MeshLambertMaterial.js"),require("three/src/objects/Mesh.js"),require("three/src/lights/DirectionalLight.js"),require("three/src/lights/AmbientLight.js")):e.AnimationKeyframe=t(e.React,e.WebGLRenderer,e.Scene,e.PerspectiveCamera,e.PerspectiveCamera,e.PlaneGeometry,e.TextureLoader,e.MeshLambertMaterial,e.Mesh,e.DirectionalLight,e.AmbientLight)}(window,(function(e,t,r,n,o,i,u,s,a,c,l){return function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=0,c=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(a&&a(t);c.length;)c.shift()()}var r={},n={0:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpAnimationKeyframe=window.webpackJsonpAnimationKeyframe||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var a=u;return o(o.s=5)}([function(e,t,r){var n=r(7);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var s=i?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(r,u,s):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(8),o=r(9),i=r(10),u=r(12);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||u()}},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6),o=r(13),i={JsAnimationKeyframe:n.JsAnimationKeyframe,ThreeAnimationKeyframe:o.ThreeAnimationKeyframe};t.default=i},function(e,t,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.JsAnimationKeyframe=void 0;var i=o(r(2)),u=o(r(3)),s=n(r(4));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.JsAnimationKeyframe=function(e){var t=e.seconds,r=void 0===t?150:t,n=e.images,o=void 0===n?[]:n,i=e.style,a=void 0===i?{}:i,l=(0,s.useState)(0),f=(0,u.default)(l,2),p=f[0],d=f[1];(0,s.useEffect)((function(){return o.length&&h(),function(){null}}),[o]);var h=function(){!function e(){d(p++),p===o.length&&(p=0),setTimeout(e,r)}()};return o.map((function(e,t){return s.default.createElement("img",{key:e,src:e,style:c(c({},a),{},{display:t===p?"block":"none"})})}))}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}},function(e,t,r){var n=r(11);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(2)),u=o(r(3)),s=n(r(4));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.seconds,n=void 0===t?150:t,o=e.images,i=void 0===o?[]:o,a=e.width,l=void 0===a?window.innerWidth:a,f=e.height,p=void 0===f?window.innerHeight:f,d=(0,s.useRef)(),h=(0,s.useState)(),m=(0,u.default)(h,2),b=m[0],y=m[1],v=(0,s.useState)(null),j=(0,u.default)(v,2),g=j[0],O=j[1],w=(0,s.useState)(null),P=(0,u.default)(w,2),x=P[0],S=P[1],M=(0,s.useState)(null),L=(0,u.default)(M,2),q=L[0],A=L[1],E=(0,s.useState)(null),_=(0,u.default)(E,2),D=_[0],T=_[1],G=(0,s.useState)([]),K=(0,u.default)(G,2),k=K[0],R=K[1],W=null,C=0,J=!0;(0,s.useEffect)((function(){Promise.all([Promise.resolve().then(r.t.bind(null,14,7)),Promise.resolve().then(r.t.bind(null,15,7)),Promise.resolve().then(r.t.bind(null,16,7)),Promise.resolve().then(r.t.bind(null,17,7)),Promise.resolve().then(r.t.bind(null,18,7)),Promise.resolve().then(r.t.bind(null,19,7)),Promise.resolve().then(r.t.bind(null,20,7)),Promise.resolve().then(r.t.bind(null,21,7)),Promise.resolve().then(r.t.bind(null,22,7)),Promise.resolve().then(r.t.bind(null,23,7))]).then((function(e){if(e.length){var t={};e.map((function(e){return t=c(c({},t),e)})),y(t)}}))}),[]),(0,s.useEffect)((function(){b&&(I(),z())}),[b]),(0,s.useEffect)((function(){g&&x&&U()}),[g,x]),(0,s.useEffect)((function(){b&&i.length&&$()}),[i,b]),(0,s.useEffect)((function(){k.length&&B()}),[k]),(0,s.useEffect)((function(){if(D)return F(),N(),function(){W&&clearTimeout(W)}}),[D]);var V=function(){var e=l,t=p,r=[window.innerWidth,window.innerHeight],n=r[0],o=r[1],i=e/n,u=t/o;return i>1&&(e=n,t/=i),u>1&&(e/=u,t=o),[e,t]},I=function(){var e=V(),t=(0,u.default)(e,2),r=t[0],n=t[1],o=new b.WebGLRenderer({antialias:!1,alpha:!0,precision:"highp"});o.setPixelRatio(2*window.devicePixelRatio),o.setSize(r,n),O(o)},z=function(){var e=new b.Scene,t=new b.DirectionalLight(16777215,1);t.position.set([0,0,60]),e.add(t);var r=new b.AmbientLight(16777215);e.add(r),S(e)},H=function(){var e=g.getSize(new b.Vector2);return{width:e.width,height:e.height}},U=function(){var e=H(),t=e.width,r=e.height,n=Math.max(t,r),o=new b.PerspectiveCamera(45,t/r,.1,n);o.lookAt(x.position),o.position.set(0,0,n),A(o)},$=function(){for(var e=[],t=0,r=i.length;t<r;t++){var n=(new b.TextureLoader).load(i[t]);e.push(n)}R(e)},B=function(){var e=H(),t=e.width,r=e.height,n=new b.PlaneGeometry(t,r),o=new b.MeshLambertMaterial({map:k[0],side:2,transparent:!0,alphaTest:.1}),i=new b.Mesh(n,o);x.add(i),T(i)},F=function(){var e=d.current,t=V(),r=(0,u.default)(t,2),n=(r[0],r[1]),o=(p-n)/2;g.domElement.style.margin="".concat(o,"px auto"),e.appendChild(g.domElement)},N=function e(){g.render(x,q),J?C++:C--,D.material.map=k[C],C===i.length-1&&(J=!1),0===C&&(J=!0),W=setTimeout(e,n)};return s.default.createElement("div",{ref:d})}},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t){e.exports=s},function(e,t){e.exports=a},function(e,t){e.exports=c},function(e,t){e.exports=l}]).default}));