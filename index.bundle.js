!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),i=r(1),u=function(){function e(){t(this,e)}return o(e,[{key:"greet",value:function(e){return"Hello, "+e+"!"}}]),e}(),c=new u;(0,i.write)(c.greet("Bob")),navigator.serviceWorker.register("worker.bundle.js").then(function(e){console.log("◕‿◕",e)},function(e){console.log("ಠ_ಠ",e)})},function(e,n){"use strict";function r(e){console.log(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.write=r}]);
//# sourceMappingURL=index.bundle.js.map