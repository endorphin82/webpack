!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="dist/",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"avg",value:function(){return function(){for(var e=0,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];for(var o=0;o<t.length;o++)e+=t[o];return e}.apply(void 0,arguments)/arguments.length}},{key:"max",value:function(){for(var e=-1/0,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];for(var o=0;o<t.length;o++)t[o]>e&&(e=t[o])}},{key:"merge",value:function(e,n){return console.log(e,n),r({},e,n)}}]),e}();n.default=new u},function(e,n,t){"use strict";var r,o=t(0),u=(r=o)&&r.__esModule?r:{default:r};t(4),t(2),console.log(u.default.avg(1,4,8)),console.log(u.default.max(1,4,8)),console.log(u.default.merge({a:1},{b:2}))},function(e,n){},,function(e,n){}]);