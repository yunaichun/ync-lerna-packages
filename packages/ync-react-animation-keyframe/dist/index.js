!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("three/src/renderers/WebGLRenderer.js"),require("three/src/scenes/Scene.js"),require("three/src/cameras/PerspectiveCamera.js"),require("three/src/geometries/PlaneGeometry.js"),require("three/src/loaders/TextureLoader.js"),require("three/src/materials/MeshLambertMaterial.js"),require("three/src/objects/Mesh.js"),require("three/src/lights/DirectionalLight.js"),require("three/src/lights/AmbientLight.js")):"function"==typeof define&&define.amd?define(["react","three/src/renderers/WebGLRenderer.js","three/src/scenes/Scene.js","three/src/cameras/PerspectiveCamera.js","three/src/geometries/PlaneGeometry.js","three/src/loaders/TextureLoader.js","three/src/materials/MeshLambertMaterial.js","three/src/objects/Mesh.js","three/src/lights/DirectionalLight.js","three/src/lights/AmbientLight.js"],t):"object"==typeof exports?exports.AnimationKeyframe=t(require("react"),require("three/src/renderers/WebGLRenderer.js"),require("three/src/scenes/Scene.js"),require("three/src/cameras/PerspectiveCamera.js"),require("three/src/geometries/PlaneGeometry.js"),require("three/src/loaders/TextureLoader.js"),require("three/src/materials/MeshLambertMaterial.js"),require("three/src/objects/Mesh.js"),require("three/src/lights/DirectionalLight.js"),require("three/src/lights/AmbientLight.js")):e.AnimationKeyframe=t(e.React,e.WebGLRenderer,e.Scene,e.PerspectiveCamera,e.PlaneGeometry,e.TextureLoader,e.MeshLambertMaterial,e.Mesh,e.DirectionalLight,e.AmbientLight)}(window,(function(e,t,r,n,o,i,s,a,u,c){return function(e){function t(t){for(var r,o,i=t[0],s=t[1],a=0,c=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);c.length;)c.shift()()}var r={},n={0:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpAnimationKeyframe=window.webpackJsonpAnimationKeyframe||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=s;return o(o.s=7)}([function(e,t,r){var n=r(9);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=i?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(10),o=r(11),i=r(4),s=r(12);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||s()}},function(e,t,r){var n=r(5);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(8),o=r(13),i={JsAnimationKeyframe:n.JsAnimationKeyframe,ThreeAnimationKeyframe:o.ThreeAnimationKeyframe};t.default=i},function(e,t,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.JsAnimationKeyframe=void 0;var i=o(r(2)),s=o(r(3)),a=n(r(6));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.JsAnimationKeyframe=function(e){var t=e.seconds,r=void 0===t?150:t,n=e.images,o=void 0===n?[]:n,i=e.style,u=void 0===i?{}:i,l=(0,a.useState)(0),f=(0,s.default)(l,2),p=f[0],d=f[1];(0,a.useEffect)((function(){return o.length&&h(),function(){null}}),[o]);var h=function(){!function e(){d(p++),p===o.length&&(p=0),setTimeout(e,r)}()};return o.map((function(e,t){return a.default.createElement("img",{key:e,src:e,style:c(c({},u),{},{display:t===p?"block":"none"})})}))}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.ThreeAnimationKeyframe=void 0;var i=o(r(14)),s=o(r(2)),a=o(r(3)),u=n(r(6));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.ThreeAnimationKeyframe=function(e){var t=e.seconds,n=void 0===t?150:t,o=e.images,s=void 0===o?[]:o,c=e.style,f=void 0===c?{}:c,p=e.rendererConfig,d=void 0===p?{width:window.innerWidth,height:window.innerHeight}:p,h=e.cameraConfig,m=void 0===h?{fov:45,aspect:window.innerWidth/window.innerHeight,near:.1,far:1e3,position:[0,0,10]}:h,y=e.textureOfPlane,b=void 0===y?{width:4,height:6.5}:y,v=e.directionalLightConfig,j=void 0===v?{color:16777215,intensity:1,position:[0,0,60]}:v,g=e.ambientLightConfig,O=void 0===g?{show:!1,color:16777215}:g,w=(0,u.useRef)(),P=(0,u.useState)(),x=(0,a.default)(P,2),S=x[0],A=x[1],L=(0,u.useState)([]),M=(0,a.default)(L,2),q=M[0],T=M[1],_=null,D=null,E=null,K=null,C=null,G=0;(0,u.useEffect)((function(){Promise.all([Promise.resolve().then(r.t.bind(null,18,7)),Promise.resolve().then(r.t.bind(null,19,7)),Promise.resolve().then(r.t.bind(null,20,7)),Promise.resolve().then(r.t.bind(null,21,7)),Promise.resolve().then(r.t.bind(null,22,7)),Promise.resolve().then(r.t.bind(null,23,7)),Promise.resolve().then(r.t.bind(null,24,7)),Promise.resolve().then(r.t.bind(null,25,7)),Promise.resolve().then(r.t.bind(null,26,7))]).then((function(e){if(e.length){var t={};e.map((function(e){return t=l(l({},t),e)})),A(t)}}))}),[]),(0,u.useEffect)((function(){s.length&&S&&k()}),[s,S]),(0,u.useEffect)((function(){if(q.length)return R(),W(),J(),I(),function(){C&&clearTimeout(C)}}),[q]);var k=function(){for(var e=[],t=0,r=s.length;t<r;t++){var n=(new S.TextureLoader).load(s[t]);e.push(n)}T(e)},R=function(){(_=new S.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),_.setSize(d.width,d.height),w.current.appendChild(_.domElement)},W=function(){var e;D=new S.Scene;var t=new S.DirectionalLight(j.color,j.intensity);if((e=t.position).set.apply(e,(0,i.default)(j.position)),D.add(t),O.show){var r=new S.AmbientLight(O.color);D.add(r)}var n=new S.PlaneGeometry(b.width,b.height),o=new S.MeshLambertMaterial({map:q[G],side:2});K=new S.Mesh(n,o),D.add(K)},J=function(){var e;(E=new S.PerspectiveCamera(m.fov,m.aspect,m.near,m.far)).lookAt(D.position),(e=E.position).set.apply(e,(0,i.default)(m.position))},I=function e(){_.render(D,E),G++,K.material.map=q[G],G===s.length-1&&(G=0),C=setTimeout(e,n)};return u.default.createElement("div",{ref:w,style:f})}},function(e,t,r){var n=r(15),o=r(16),i=r(4),s=r(17);e.exports=function(e){return n(e)||o(e)||i(e)||s()}},function(e,t,r){var n=r(5);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t){e.exports=c}]).default}));