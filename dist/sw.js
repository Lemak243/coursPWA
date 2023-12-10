var serviceWorkerOption = {
  "assets": [
    "/main.14375d50a05d334d9fff.js",
    "/index.html",
    "/manifest.webmanifest",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-512x512.png"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){importScripts("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js");const{assets:t}=e.serviceWorkerOption,n=["/",...t,"https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js","https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css","https://bulma.io/images/placeholders/1280x960.png","https://bulma.io/images/placeholders/96x96.png"];self.addEventListener("install",e=>{caches.open("blog-v1").then(e=>{e.addAll(n)})}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if("blog-v1"!==e)return caches.delete(e)})))})))}),self.addEventListener("fetch",e=>{}),self.addEventListener("fetch",e=>{0===e.request.url.indexOf("https://api.github.com/users/")?e.respondWith(fetch(e.request).then(t=>"OK"!==t.statusText?(console.error("Service Worker","Error when fetching",e.request.url),t):(console.info("Formatting data"),t.json().then(e=>{const t=e.map(e=>({id:e.id,name:e.name,description:e.description||"",updated_at:e.updated_at,avatar_url:e.owner.avatar_url}));return new Response(JSON.stringify(t))})))):e.respondWith(caches.open("blog-v1").then(t=>t.match(e.request)).then(t=>t||fetch(e.request)))}),self.addEventListener("sync",e=>{"syncFavorites"===e.tag&&(console.log("Synchronisation en cours"),e.waitUntil(localforage.getItem("favorites").then(e=>fetch("http://localhost:3000/favorites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))))})}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);